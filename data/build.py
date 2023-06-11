import csv
import json
from itertools import groupby
from operator import itemgetter

# territoryInfo.json <- https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-core/supplemental/territoryInfo.json
input_territories_file = "territoryInfo.json"

# en_languages.json <- https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json/cldr-localenames-modern/main/en/languages.json
input_languages_en_file = "languages_en.json"

# cuisines.tsv <- https://docs.google.com/spreadsheets/d/1Qq4lyKOiU3FQ1U7KDt15SUiHoWR9dG0EbqH2qpLccTQ/edit#gid=1278280329
input_cuisines_file = "cuisines.tsv"


# Read JSON territories and create a dictionary of country code->language codes
with open(input_territories_file, "r") as file:
    cldrData = json.load(file)

territoryInfo = cldrData["supplemental"]["territoryInfo"]

country_to_language = {}

for country, info in territoryInfo.items():
    language_population = info.get("languagePopulation")
    if language_population:
        languages = list(language_population.keys())
        filtered_languages = []

        for language in languages:
            language_info = language_population[language]
            population_percent = float(language_info.get("_populationPercent", 0))
            official_status = language_info.get("_officialStatus")

            # We only care about languages where it's likely to find restaurant
            # menus written in them. Filter based on the below criteria.
            if (
                population_percent >= 80
                or official_status == "official"
                or (official_status and population_percent >= 50)
            ):
                filtered_languages.append(
                    {"language": language, "populationPercent": population_percent}
                )

        filtered_languages.sort(key=lambda x: x["populationPercent"], reverse=True)
        country_to_language[country] = [item["language"] for item in filtered_languages]

# Assert that there is at least one language code per country
for country, languages in country_to_language.items():
    assert len(languages) >= 1, f"No language code found for country '{country}'"

# ------

# Read JSON languages and create a dictionary of language code to English display name
with open(input_languages_en_file, "r") as file:
    language_data = json.load(file)

# Extract the language display names
language_display_names = language_data["main"]["en"]["localeDisplayNames"]["languages"]

# Create the lookup table of language to English display names
language_to_display_name_dict = {}
for language_code, display_name in language_display_names.items():
    language_to_display_name_dict[language_code] = display_name

# ------

# Read TSV cuisines and create an array of dictionaries
with open(input_cuisines_file) as file:
    reader = csv.DictReader(file, delimiter="\t")
    cuisines_data = [
        row for row in reader if any(value.strip() for value in row.values() if value)
    ]

# Step 1: Create virtual column cuisine_id
for row in cuisines_data:
    row["cuisine_id"] = ".".join([row["category_id"], row["cuisine_short_id"]])

# Step 2: Check for duplicate or empty cuisine_ids
cuisine_ids = [row["cuisine_id"] for row in cuisines_data]
duplicates = [
    cuisine_id for cuisine_id in cuisine_ids if cuisine_ids.count(cuisine_id) > 1
]
assert len(cuisine_ids) == len(
    set(cuisine_ids)
), f"Duplicate cuisine_ids found: {', '.join(duplicates)}"
assert all(cuisine_id != "" for cuisine_id in cuisine_ids), "Empty cuisine_id found"

# Step 2.5: Check for unsupported or empty language codes
cuisine_language_code_set = set()

for row in cuisines_data:
    language_codes = [
        code.strip() for code in row["language_codes"].split(",") if code.strip()
    ]
    for language_code in language_codes:
        display_name = language_to_display_name_dict.get(language_code)
        assert (
            display_name
        ), f"No display name for {language_code} for {row['cuisine_id']}"

        cuisine_language_code_set.add(language_code)

# Step 3: Sort by category_name_en and cuisine_name_en
cuisines_data.sort(key=itemgetter("category_name_en", "cuisine_name_en"))

# Step 4: Group rows by category_id
grouped_cuisines = []
for key, group in groupby(cuisines_data, key=itemgetter("category_id")):
    category_data = list(group)
    category = {
        "category_id": key,
        "category_name_en": category_data[0]["category_name_en"],
        "children": [],
    }
    for row in category_data:
        cuisine = {
            "cuisine_name_en": row["cuisine_name_en"],
            "language_codes": row["language_codes"].split(", "),
            "cuisine_id": row["cuisine_id"],
        }
        category["children"].append(cuisine)
    grouped_cuisines.append(category)

# -----

cuisine_language_display_name_dict = {
    language_code: language_to_display_name_dict[language_code]
    for language_code in cuisine_language_code_set
}

# Template string
template = """const countryToLanguagesData = {{ country_to_languages_data }};

const cuisinesData = {{ cuisines_data }};

const languageDisplayNameData = {{ language_display_name_data }};
"""

# Replace placeholders with JSON data
template = template.replace(
    "{{ country_to_languages_data }}", json.dumps(country_to_language)
)
template = template.replace("{{ cuisines_data }}", json.dumps(grouped_cuisines))
template = template.replace(
    "{{ language_display_name_data }}", json.dumps(cuisine_language_display_name_dict)
)

# Write template to cuisines.js file
with open("../data.js", "w") as file:
    file.write(template)
