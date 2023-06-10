/*
    // cldrData <- https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-core/supplemental/territoryInfo.json
    const territoryInfo = cldrData.supplemental.territoryInfo;

    const countryToLanguage = {};

    for (const country in territoryInfo) {
      if (territoryInfo.hasOwnProperty(country)) {
        const languagePopulation = territoryInfo[country].languagePopulation;
        if (languagePopulation) {
          const languages = Object.keys(languagePopulation);
          const filteredLanguages = [];

          languages.forEach(language => {
            const languageInfo = languagePopulation[language];
            const populationPercent = parseFloat(languageInfo._populationPercent) || 0;
            const officialStatus = languageInfo._officialStatus;

            if (populationPercent >= 80 || officialStatus === 'official' || officialStatus && populationPercent >= 50) {
              filteredLanguages.push({ language, populationPercent });
            }
          });

          filteredLanguages.sort((a, b) => b.populationPercent - a.populationPercent);
          countryToLanguage[country] = filteredLanguages.map(item => item.language);
        }
      }
    }

    console.log(countryToLanguage);
*/

const countryToLanguagesData = {
    "AC": [
        "en"
    ],
    "AD": [
        "ca"
    ],
    "AE": [
        "ar"
    ],
    "AF": [
        "fa",
        "ps"
    ],
    "AG": [
        "en"
    ],
    "AI": [
        "en"
    ],
    "AL": [
        "sq"
    ],
    "AM": [
        "hy"
    ],
    "AO": [
        "pt"
    ],
    "AQ": [
        "und"
    ],
    "AR": [
        "es"
    ],
    "AS": [
        "sm",
        "en"
    ],
    "AT": [
        "de",
        "bar"
    ],
    "AU": [
        "en"
    ],
    "AW": [
        "nl",
        "pap"
    ],
    "AX": [
        "sv"
    ],
    "AZ": [
        "az",
        "az_Cyrl"
    ],
    "BA": [
        "bs",
        "bs_Cyrl",
        "hr",
        "sr",
        "sr_Latn"
    ],
    "BB": [
        "en"
    ],
    "BD": [
        "bn"
    ],
    "BE": [
        "nl",
        "fr",
        "de"
    ],
    "BF": [
        "fr"
    ],
    "BG": [
        "bg"
    ],
    "BH": [
        "ar"
    ],
    "BI": [
        "rn",
        "fr",
        "en"
    ],
    "BJ": [
        "fr"
    ],
    "BL": [
        "fr"
    ],
    "BM": [
        "en"
    ],
    "BN": [
        "ms",
        "ms_Arab"
    ],
    "BO": [
        "es",
        "qu",
        "ay"
    ],
    "BQ": [
        "pap",
        "nl"
    ],
    "BR": [
        "pt"
    ],
    "BS": [
        "en"
    ],
    "BT": [
        "dz"
    ],
    "BV": [
        "und"
    ],
    "BW": [
        "en",
        "tn"
    ],
    "BY": [
        "be",
        "ru"
    ],
    "BZ": [
        "en"
    ],
    "CA": [
        "en",
        "fr"
    ],
    "CC": [
        "ms_Arab"
    ],
    "CD": [
        "sw",
        "fr"
    ],
    "CF": [
        "fr",
        "sg"
    ],
    "CG": [
        "fr"
    ],
    "CH": [
        "de",
        "gsw",
        "fr",
        "it"
    ],
    "CI": [
        "fr"
    ],
    "CK": [
        "en"
    ],
    "CL": [
        "es"
    ],
    "CM": [
        "fr",
        "en"
    ],
    "CN": [
        "zh"
    ],
    "CO": [
        "es"
    ],
    "CP": [
        "und"
    ],
    "CQ": [
        "en"
    ],
    "CR": [
        "es"
    ],
    "CU": [
        "es"
    ],
    "CV": [
        "kea",
        "pt"
    ],
    "CW": [
        "pap",
        "nl"
    ],
    "CX": [
        "en"
    ],
    "CY": [
        "el",
        "tr"
    ],
    "CZ": [
        "cs"
    ],
    "DE": [
        "de"
    ],
    "DG": [
        "en"
    ],
    "DJ": [
        "ar",
        "fr"
    ],
    "DK": [
        "da",
        "en"
    ],
    "DM": [
        "en"
    ],
    "DO": [
        "es"
    ],
    "DZ": [
        "arq",
        "ar",
        "fr"
    ],
    "EA": [
        "es"
    ],
    "EC": [
        "es",
        "qu"
    ],
    "EE": [
        "et"
    ],
    "EG": [
        "ar"
    ],
    "EH": [
        "ar"
    ],
    "ER": [
        "ti",
        "en",
        "ar"
    ],
    "ES": [
        "es"
    ],
    "ET": [
        "am"
    ],
    "FI": [
        "fi",
        "sv"
    ],
    "FJ": [
        "en",
        "hif",
        "fj"
    ],
    "FK": [
        "en"
    ],
    "FM": [
        "en"
    ],
    "FO": [
        "fo"
    ],
    "FR": [
        "fr"
    ],
    "GA": [
        "fr"
    ],
    "GB": [
        "en"
    ],
    "GD": [
        "en"
    ],
    "GE": [
        "ka"
    ],
    "GF": [
        "fr"
    ],
    "GG": [
        "en"
    ],
    "GH": [
        "en"
    ],
    "GI": [
        "en"
    ],
    "GL": [
        "kl"
    ],
    "GM": [
        "en"
    ],
    "GN": [
        "fr"
    ],
    "GP": [
        "fr"
    ],
    "GQ": [
        "es",
        "fr",
        "pt"
    ],
    "GR": [
        "el"
    ],
    "GS": [
        "und"
    ],
    "GT": [
        "es"
    ],
    "GU": [
        "en",
        "ch"
    ],
    "GW": [
        "pt"
    ],
    "GY": [
        "en"
    ],
    "HK": [
        "zh_Hant",
        "yue",
        "en"
    ],
    "HM": [
        "und"
    ],
    "HN": [
        "es"
    ],
    "HR": [
        "hr"
    ],
    "HT": [
        "ht",
        "fr"
    ],
    "HU": [
        "hu"
    ],
    "IC": [
        "es"
    ],
    "ID": [
        "id"
    ],
    "IE": [
        "en",
        "ga"
    ],
    "IL": [
        "he",
        "en",
        "ar"
    ],
    "IM": [
        "en",
        "gv"
    ],
    "IN": [
        "hi",
        "en"
    ],
    "IO": [
        "en"
    ],
    "IQ": [
        "ar"
    ],
    "IR": [
        "fa"
    ],
    "IS": [
        "is"
    ],
    "IT": [
        "it"
    ],
    "JE": [
        "en"
    ],
    "JM": [
        "en",
        "jam"
    ],
    "JO": [
        "ar"
    ],
    "JP": [
        "ja"
    ],
    "KE": [
        "sw",
        "en"
    ],
    "KG": [
        "ky",
        "ru"
    ],
    "KH": [
        "km"
    ],
    "KI": [
        "en",
        "gil"
    ],
    "KM": [
        "ar",
        "fr",
        "zdj",
        "wni"
    ],
    "KN": [
        "en"
    ],
    "KP": [
        "ko"
    ],
    "KR": [
        "ko"
    ],
    "KW": [
        "ar"
    ],
    "KY": [
        "en"
    ],
    "KZ": [
        "ru",
        "kk"
    ],
    "LA": [
        "lo"
    ],
    "LB": [
        "apc",
        "ar"
    ],
    "LC": [
        "en"
    ],
    "LI": [
        "de",
        "gsw"
    ],
    "LK": [
        "si",
        "ta"
    ],
    "LR": [
        "en"
    ],
    "LS": [
        "st",
        "en"
    ],
    "LT": [
        "lt",
        "ru"
    ],
    "LU": [
        "fr",
        "lb",
        "de"
    ],
    "LV": [
        "lv"
    ],
    "LY": [
        "ar"
    ],
    "MA": [
        "ary",
        "ar",
        "tzm"
    ],
    "MC": [
        "fr"
    ],
    "MD": [
        "ro"
    ],
    "ME": [
        "sr_Latn"
    ],
    "MF": [
        "fr"
    ],
    "MG": [
        "mg",
        "fr",
        "en"
    ],
    "MH": [
        "en",
        "mh"
    ],
    "MK": [
        "mk"
    ],
    "ML": [
        "fr"
    ],
    "MM": [
        "my"
    ],
    "MN": [
        "mn"
    ],
    "MO": [
        "zh_Hant",
        "pt"
    ],
    "MP": [
        "en"
    ],
    "MQ": [
        "fr"
    ],
    "MR": [
        "ar"
    ],
    "MS": [
        "en"
    ],
    "MT": [
        "mt",
        "en"
    ],
    "MU": [
        "mfe",
        "en",
        "fr"
    ],
    "MV": [
        "dv"
    ],
    "MW": [
        "en",
        "ny"
    ],
    "MX": [
        "es"
    ],
    "MY": [
        "ms"
    ],
    "MZ": [
        "pt"
    ],
    "NA": [
        "en"
    ],
    "NC": [
        "fr"
    ],
    "NE": [
        "fr"
    ],
    "NF": [
        "en"
    ],
    "NG": [
        "en",
        "yo"
    ],
    "NI": [
        "es"
    ],
    "NL": [
        "nl",
        "en"
    ],
    "NO": [
        "nb",
        "no",
        "nn"
    ],
    "NP": [
        "ne"
    ],
    "NR": [
        "en",
        "na"
    ],
    "NU": [
        "en",
        "niu"
    ],
    "NZ": [
        "en",
        "mi"
    ],
    "OM": [
        "ar"
    ],
    "PA": [
        "es"
    ],
    "PE": [
        "es",
        "qu"
    ],
    "PF": [
        "fr",
        "ty"
    ],
    "PG": [
        "tpi",
        "en",
        "ho"
    ],
    "PH": [
        "en",
        "fil"
    ],
    "PK": [
        "ur",
        "en"
    ],
    "PL": [
        "pl"
    ],
    "PM": [
        "fr"
    ],
    "PN": [
        "en"
    ],
    "PR": [
        "es"
    ],
    "PS": [
        "ar",
        "apc"
    ],
    "PT": [
        "pt"
    ],
    "PW": [
        "pau",
        "en"
    ],
    "PY": [
        "gn",
        "es"
    ],
    "QA": [
        "ar"
    ],
    "RE": [
        "fr"
    ],
    "RO": [
        "ro"
    ],
    "RS": [
        "sr",
        "sr_Latn"
    ],
    "RU": [
        "ru"
    ],
    "RW": [
        "rw",
        "en",
        "fr"
    ],
    "SA": [
        "ar"
    ],
    "SB": [
        "en",
        "pis"
    ],
    "SC": [
        "crs",
        "fr",
        "en"
    ],
    "SD": [
        "ar",
        "en"
    ],
    "SE": [
        "sv",
        "en"
    ],
    "SG": [
        "en",
        "zh",
        "ms",
        "ta"
    ],
    "SH": [
        "en"
    ],
    "SI": [
        "sl"
    ],
    "SJ": [
        "nb"
    ],
    "SK": [
        "sk"
    ],
    "SL": [
        "kri",
        "en"
    ],
    "SM": [
        "it"
    ],
    "SN": [
        "wo",
        "fr"
    ],
    "SO": [
        "so",
        "ar"
    ],
    "SR": [
        "nl"
    ],
    "SS": [
        "en"
    ],
    "ST": [
        "pt"
    ],
    "SV": [
        "es"
    ],
    "SX": [
        "en",
        "nl"
    ],
    "SY": [
        "apc",
        "ar",
        "fr"
    ],
    "SZ": [
        "en",
        "ss"
    ],
    "TA": [
        "en"
    ],
    "TC": [
        "en"
    ],
    "TD": [
        "fr",
        "ar"
    ],
    "TF": [
        "fr"
    ],
    "TG": [
        "fr"
    ],
    "TH": [
        "th"
    ],
    "TJ": [
        "tg"
    ],
    "TK": [
        "en",
        "tkl"
    ],
    "TL": [
        "pt",
        "tet"
    ],
    "TM": [
        "tk"
    ],
    "TN": [
        "aeb",
        "ar",
        "fr"
    ],
    "TO": [
        "to",
        "en"
    ],
    "TR": [
        "tr"
    ],
    "TT": [
        "en"
    ],
    "TV": [
        "tvl",
        "en"
    ],
    "TW": [
        "zh_Hant"
    ],
    "TZ": [
        "sw",
        "en"
    ],
    "UA": [
        "uk"
    ],
    "UG": [
        "sw",
        "en"
    ],
    "UM": [
        "en"
    ],
    "US": [
        "en"
    ],
    "UY": [
        "es"
    ],
    "UZ": [
        "uz",
        "uz_Cyrl"
    ],
    "VA": [
        "it",
        "la"
    ],
    "VC": [
        "en"
    ],
    "VE": [
        "es"
    ],
    "VG": [
        "en"
    ],
    "VI": [
        "en"
    ],
    "VN": [
        "vi"
    ],
    "VU": [
        "bi",
        "en",
        "fr"
    ],
    "WF": [
        "fr"
    ],
    "WS": [
        "sm",
        "en"
    ],
    "XK": [
        "sq",
        "sr",
        "sr_Latn"
    ],
    "YE": [
        "ar"
    ],
    "YT": [
        "swb",
        "fr"
    ],
    "ZA": [
        "en"
    ],
    "ZM": [
        "en"
    ],
    "ZW": [
        "sn",
        "en",
        "nd"
    ]
};


/*
import csv
import json

tsv_file = 'cuisines.tsv'
json_file = 'cuisines.json'

# Read TSV data and create an array of dictionaries
data = []
with open(tsv_file, 'r') as file:
    reader = csv.DictReader(file, delimiter='\t')
    fieldnames = reader.fieldnames  # Get the field names from the TSV header
    for row in reader:
        if any(row.values()):  # Check if any value in the row is non-empty
            category_id = row['category_id']
            category_name_en = row['category_name_en']
            # Create the cuisine dictionary with non-category fields
            cuisine = {fieldname: row[fieldname] if fieldname != 'language_codes' else row[fieldname].split(', ') for fieldname in fieldnames if not fieldname.startswith('category')}
            # Find or create the category dictionary
            category_index = next((index for index, cat in enumerate(data) if cat["category_id"] == category_id), None)
            if category_index is None:
                category = {"category_id": category_id, "category_name_en": category_name_en, "children": [cuisine]}
                data.append(category)
            else:
                data[category_index]["children"].append(cuisine)

# Write JSON data to file
with open(json_file, 'w') as file:
    json.dump(data, file, indent=4)
*/

const cuisinesData = [
    {
        "category_id": "AFRICA",
        "category_name_en": "African (Sub-Saharan)",
        "children": [
            {
                "cuisine_id": "AFRICA.EAST.ET",
                "cuisine_name_en": "East > Ethiopian",
                "language_codes": [
                    "am",
                    "en"
                ]
            },
            {
                "cuisine_id": "AFRICA.PAN",
                "cuisine_name_en": "Pan-African",
                "language_codes": [
                    "am",
                    "en"
                ]
            }
        ]
    },
    {
        "category_id": "AMERICAS",
        "category_name_en": "American",
        "children": [
            {
                "cuisine_id": "AMERICAS.CARIBBEAN",
                "cuisine_name_en": "Caribbean",
                "language_codes": [
                    "en",
                    "es",
                    "fr"
                ]
            },
            {
                "cuisine_id": "AMERICAS.CARIBBEAN.CU",
                "cuisine_name_en": "Caribbean > Cuban",
                "language_codes": [
                    "es"
                ]
            },
            {
                "cuisine_id": "AMERICAS.LATIN",
                "cuisine_name_en": "Latin American",
                "language_codes": [
                    "es",
                    "pt"
                ]
            },
            {
                "cuisine_id": "AMERICAS.LATIN.AR",
                "cuisine_name_en": "Latin > Argentinian",
                "language_codes": [
                    "es"
                ]
            },
            {
                "cuisine_id": "AMERICAS.LATIN.BR",
                "cuisine_name_en": "Latin > Brazilian",
                "language_codes": [
                    "pt"
                ]
            },
            {
                "cuisine_id": "AMERICAS.LATIN.MX",
                "cuisine_name_en": "Latin > Mexican",
                "language_codes": [
                    "es"
                ]
            },
            {
                "cuisine_id": "AMERICAS.LATIN.PE",
                "cuisine_name_en": "Latin > Peruvian",
                "language_codes": [
                    "es"
                ]
            },
            {
                "cuisine_id": "AMERICAS.NORTH.BURGER",
                "cuisine_name_en": "North > Burger",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "AMERICAS.NORTH.TEXMEX",
                "cuisine_name_en": "North > Tex-Mex",
                "language_codes": [
                    "en",
                    "es"
                ]
            },
            {
                "cuisine_id": "AMERICAS.NORTH.TEXMEX.BURRITO",
                "cuisine_name_en": "North > Tex-Mex > Burrito",
                "language_codes": [
                    "en",
                    "es"
                ]
            },
            {
                "cuisine_id": "AMERICAS.NORTH.TEXMEX.TACO",
                "cuisine_name_en": "North > Tex-Mex > Taco",
                "language_codes": [
                    "en",
                    "es"
                ]
            },
            {
                "cuisine_id": "AMERICAS.NORTH.US",
                "cuisine_name_en": "North > American",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "AMERICAS.NORTH.US.BBQ",
                "cuisine_name_en": "North > American > BBQ",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "AMERICAS.NORTH.US.CAJUN",
                "cuisine_name_en": "North > American > Cajun",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "AMERICAS.NORTH.US.HI",
                "cuisine_name_en": "North > American > Hawaiian",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "AMERICAS.NORTH.US.SOUTH",
                "cuisine_name_en": "North > American > Southern/Soul Food",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "AMERICAS.NORTH.NEW",
                "cuisine_name_en": "North > New American",
                "language_codes": [
                    "en"
                ]
            }
        ]
    },
    {
        "category_id": "ASIA",
        "category_name_en": "Asian",
        "children": [
            {
                "cuisine_id": "ASIA.CENTRAL.MN",
                "cuisine_name_en": "Central > Mongolian",
                "language_codes": [
                    "mn"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.CHINESE",
                "cuisine_name_en": "East > Chinese",
                "language_codes": [
                    "zh"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.CHINESE.CN.GD",
                "cuisine_name_en": "East > Chinese > China > Cantonese",
                "language_codes": [
                    "zh-CN"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.CHINESE.CN.SC",
                "cuisine_name_en": "East > Chinese > China > Sichuan",
                "language_codes": [
                    "zh-CN"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.CHINESE.CN.SD",
                "cuisine_name_en": "East > Chinese > China > Shandong",
                "language_codes": [
                    "zh-CN"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.CHINESE.DIMSUM",
                "cuisine_name_en": "East > Chinese > Dim Sum",
                "language_codes": [
                    "zh-HK"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.CHINESE.HOTPOT",
                "cuisine_name_en": "East > Chinese > Hotpot",
                "language_codes": [
                    "zh"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.CHINESE.TW",
                "cuisine_name_en": "East > Chinese > Taiwanese",
                "language_codes": [
                    "zh-TW"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.DUMPLING",
                "cuisine_name_en": "East > Dumpling",
                "language_codes": [
                    "zh"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.JAPANESE.JP",
                "cuisine_name_en": "East > Japanese",
                "language_codes": [
                    "ja"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.JAPANESE.RAMEN",
                "cuisine_name_en": "East > Japanese > Ramen",
                "language_codes": [
                    "ja"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.JAPANESE.SUSHI",
                "cuisine_name_en": "East > Japanese > Sushi",
                "language_codes": [
                    "ja"
                ]
            },
            {
                "cuisine_id": "ASIA.EAST.KOREAN",
                "cuisine_name_en": "East > Korean",
                "language_codes": [
                    "ko"
                ]
            },
            {
                "cuisine_id": "ASIA.HIMALAYAN.NE",
                "cuisine_name_en": "Himalayan > Nepalese",
                "language_codes": [
                    "ne"
                ]
            },
            {
                "cuisine_id": "ASIA.HIMALAYAN.TIBET",
                "cuisine_name_en": "Himalayan > Tibetan",
                "language_codes": [
                    "bo"
                ]
            },
            {
                "cuisine_id": "ASIA.PAN",
                "cuisine_name_en": "Pan-Asian",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTH",
                "cuisine_name_en": "South",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTH.BD",
                "cuisine_name_en": "South > Bangladeshi",
                "language_codes": [
                    "bn"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTH.IN",
                "cuisine_name_en": "South > Indian",
                "language_codes": [
                    "hi",
                    "en"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTH.IN.SOUTH",
                "cuisine_name_en": "South > Indian > South",
                "language_codes": [
                    "hi",
                    "en"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTH.LK",
                "cuisine_name_en": "South > Sri Lankan",
                "language_codes": [
                    "si",
                    "ta"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTH.PK",
                "cuisine_name_en": "South > Pakistani",
                "language_codes": [
                    "ur"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTHEAST",
                "cuisine_name_en": "Southeast",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTHEAST.ID",
                "cuisine_name_en": "Southeast > Indonesian",
                "language_codes": [
                    "id"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTHEAST.KH",
                "cuisine_name_en": "Southeast > Cambodian",
                "language_codes": [
                    "km"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTHEAST.MM",
                "cuisine_name_en": "Southeast > Burmese",
                "language_codes": [
                    "my"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTHEAST.MY",
                "cuisine_name_en": "Southeast > Malaysian",
                "language_codes": [
                    "ms",
                    "zh"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTHEAST.PH",
                "cuisine_name_en": "Southeast > Filipino",
                "language_codes": [
                    "tl",
                    "en"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTHEAST.TH",
                "cuisine_name_en": "Southeast > Thai",
                "language_codes": [
                    "th"
                ]
            },
            {
                "cuisine_id": "ASIA.SOUTHEAST.VN",
                "cuisine_name_en": "Southeast > Vietnamese",
                "language_codes": [
                    "vi"
                ]
            }
        ]
    },
    {
        "category_id": "EUROPE",
        "category_name_en": "European",
        "children": [
            {
                "cuisine_id": "EUROPE.ANGLOCELTIC.GB",
                "cuisine_name_en": "Anglo-Celtic > British",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "EUROPE.ANGLOCELTIC.GB.ENG",
                "cuisine_name_en": "Anglo-Celtic > English",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "EUROPE.ANGLOCELTIC.GB.SCT",
                "cuisine_name_en": "Anglo-Celtic > Scottish",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "EUROPE.ANGLOCELTIC.IE",
                "cuisine_name_en": "Anglo-Celtic > Irish",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "EUROPE.CENTRAL.AT",
                "cuisine_name_en": "Central > Austrian",
                "language_codes": [
                    "de"
                ]
            },
            {
                "cuisine_id": "EUROPE.CENTRAL.CH",
                "cuisine_name_en": "Central > Swiss",
                "language_codes": [
                    "gsw",
                    "fr",
                    "it"
                ]
            },
            {
                "cuisine_id": "EUROPE.CENTRAL.CH.FONDUE",
                "cuisine_name_en": "Central > Swiss > Fondue",
                "language_codes": [
                    "gsw",
                    "fr"
                ]
            },
            {
                "cuisine_id": "EUROPE.CENTRAL.CZ",
                "cuisine_name_en": "Central > Czech",
                "language_codes": [
                    "cs"
                ]
            },
            {
                "cuisine_id": "EUROPE.CENTRAL.DE",
                "cuisine_name_en": "Central > German",
                "language_codes": [
                    "de"
                ]
            },
            {
                "cuisine_id": "EUROPE.CENTRAL.DE.BY",
                "cuisine_name_en": "Central > German > Bavarian",
                "language_codes": [
                    "de"
                ]
            },
            {
                "cuisine_id": "EUROPE.CENTRAL.HU",
                "cuisine_name_en": "Central > Hungarian",
                "language_codes": [
                    "hu"
                ]
            },
            {
                "cuisine_id": "EUROPE.CENTRAL.PL",
                "cuisine_name_en": "Central > Polish",
                "language_codes": [
                    "pl"
                ]
            },
            {
                "cuisine_id": "EUROPE.CENTRAL.SK",
                "cuisine_name_en": "Central > Slovak",
                "language_codes": [
                    "sk"
                ]
            },
            {
                "cuisine_id": "EUROPE.EAST",
                "cuisine_name_en": "Eastern & Caucasian > Eastern European",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "EUROPE.EAST.CAUCASIAN",
                "cuisine_name_en": "Eastern & Caucasian > Caucasian",
                "language_codes": [
                    "ka"
                ]
            },
            {
                "cuisine_id": "EUROPE.EAST.RU",
                "cuisine_name_en": "Eastern & Caucasian > Russian",
                "language_codes": [
                    "ru"
                ]
            },
            {
                "cuisine_id": "EUROPE.EAST.UA",
                "cuisine_name_en": "Eastern & Caucasian > Ukrainian",
                "language_codes": [
                    "uk"
                ]
            },
            {
                "cuisine_id": "EUROPE.NORDIC.SCANDINAVIAN",
                "cuisine_name_en": "Nordic > Scandinavian",
                "language_codes": [
                    "da",
                    "nb",
                    "sv"
                ]
            },
            {
                "cuisine_id": "EUROPE.NORDIC.NEW",
                "cuisine_name_en": "Nordic > New Nordic",
                "language_codes": [
                    "da",
                    "fi",
                    "is",
                    "nb",
                    "sv"
                ]
            },
            {
                "cuisine_id": "EUROPE.SOUTH.ES",
                "cuisine_name_en": "Southern & Mediterranean > Spanish",
                "language_codes": [
                    "es"
                ]
            },
            {
                "cuisine_id": "EUROPE.SOUTH.GR",
                "cuisine_name_en": "Southern & Mediterranean > Greek",
                "language_codes": [
                    "el"
                ]
            },
            {
                "cuisine_id": "EUROPE.SOUTH.IT",
                "cuisine_name_en": "Southern & Mediterranean > Italian",
                "language_codes": [
                    "it"
                ]
            },
            {
                "cuisine_id": "EUROPE.SOUTH.IT.PIZZA",
                "cuisine_name_en": "Southern & Mediterranean > Italian > Pizza",
                "language_codes": [
                    "it",
                    "en"
                ]
            },
            {
                "cuisine_id": "EUROPE.SOUTH.MEDITERRANEAN",
                "cuisine_name_en": "Southern & Mediterranean > Mediterranean",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "EUROPE.SOUTH.PT",
                "cuisine_name_en": "Southern & Mediterranean > Portuguese",
                "language_codes": [
                    "pt"
                ]
            },
            {
                "cuisine_id": "EUROPE.WEST.BE",
                "cuisine_name_en": "Western > Belgian",
                "language_codes": [
                    "fr",
                    "nl"
                ]
            },
            {
                "cuisine_id": "EUROPE.WEST.FR",
                "cuisine_name_en": "Western > French",
                "language_codes": [
                    "fr"
                ]
            },
            {
                "cuisine_id": "EUROPE.WEST.NL",
                "cuisine_name_en": "Western > Dutch",
                "language_codes": [
                    "nl"
                ]
            }
        ]
    },
    {
        "category_id": "MIDDLEEASTNORTHAFRICA",
        "category_name_en": "Middle Eastern & North African",
        "children": [
            {
                "cuisine_id": "MIDDLEEASTNORTHAFRICA.MIDDLEEAST",
                "cuisine_name_en": "Middle Eastern",
                "language_codes": [
                    "ar"
                ]
            },
            {
                "cuisine_id": "MIDDLEEASTNORTHAFRICA.IR",
                "cuisine_name_en": "Middle Eastern > Persian",
                "language_codes": [
                    "fa"
                ]
            },
            {
                "cuisine_id": "MIDDLEEASTNORTHAFRICA.JEWISH",
                "cuisine_name_en": "Middle Eastern > Jewish",
                "language_codes": [
                    "he",
                    "yi"
                ]
            },
            {
                "cuisine_id": "MIDDLEEASTNORTHAFRICA.KEBAB",
                "cuisine_name_en": "Middle Eastern > Falafel",
                "language_codes": [
                    "ar",
                    "he"
                ]
            },
            {
                "cuisine_id": "MIDDLEEASTNORTHAFRICA.KEBAB",
                "cuisine_name_en": "Middle Eastern > Kebab",
                "language_codes": [
                    "tr"
                ]
            },
            {
                "cuisine_id": "MIDDLEEASTNORTHAFRICA.LB",
                "cuisine_name_en": "Middle Eastern > Lebanese",
                "language_codes": [
                    "ar"
                ]
            },
            {
                "cuisine_id": "MIDDLEEASTNORTHAFRICA.TR",
                "cuisine_name_en": "Middle Eastern > Turkish",
                "language_codes": [
                    "tr"
                ]
            },
            {
                "cuisine_id": "MIDDLEEASTNORTHAFRICA.NORTHAFRICA",
                "cuisine_name_en": "North African",
                "language_codes": [
                    "ar",
                    "fr"
                ]
            },
            {
                "cuisine_id": "MIDDLEEASTNORTHAFRICA.MA",
                "cuisine_name_en": "North African > Moroccan",
                "language_codes": [
                    "ar"
                ]
            }
        ]
    },
    {
        "category_id": "OCEANIAN",
        "category_name_en": "Oceanian",
        "children": [
            {
                "cuisine_id": "OCEANIAN.AU",
                "cuisine_name_en": "Australian",
                "language_codes": [
                    "en"
                ]
            }
        ]
    },
    {
        "category_id": "OTHER",
        "category_name_en": "Other",
        "children": [
            {
                "cuisine_id": "OTHER.COFFEE",
                "cuisine_name_en": "Coffee Shop",
                "language_codes": [
                    "en"
                ]
            },
            {
                "cuisine_id": "OTHER.OTHER",
                "cuisine_name_en": "Other",
                "language_codes": [
                    "en"
                ]
            }
        ]
    }
];
