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


const cuisinesData = {
    "AFRICA.EAST.ET": {
        "category_name": "African > East > Ethiopian",
        "language_codes": [
            "am",
            "en"
        ]
    },
    "AFRICA.PAN": {
        "category_name": "African > Pan-African",
        "language_codes": null
    },
    "AMERICAS.CARIBBEAN": {
        "category_name": "Americas > Caribbean",
        "language_codes": null
    },
    "AMERICAS.CARIBBEAN.CU": {
        "category_name": "Americas > Caribbean > Cuban",
        "language_codes": [
            "es"
        ]
    },
    "AMERICAS.LATIN": {
        "category_name": "Americas > Latin American",
        "language_codes": null
    },
    "AMERICAS.LATIN.AR": {
        "category_name": "Americas > Latin > Argentinian",
        "language_codes": [
            "es"
        ]
    },
    "AMERICAS.LATIN.BR": {
        "category_name": "Americas > Latin > Brazilian",
        "language_codes": [
            "pt"
        ]
    },
    "AMERICAS.LATIN.MX": {
        "category_name": "Americas > Latin > Mexican",
        "language_codes": [
            "es"
        ]
    },
    "AMERICAS.LATIN.PE": {
        "category_name": "Americas > Latin > Peruvian",
        "language_codes": [
            "es"
        ]
    },
    "AMERICAS.NORTH.BURGER": {
        "category_name": "Americas > North > Burger",
        "language_codes": null
    },
    "AMERICAS.NORTH.NEW": {
        "category_name": "Americas > North > New American",
        "language_codes": null
    },
    "AMERICAS.NORTH.TEXMEX": {
        "category_name": "Americas > North > Tex-Mex",
        "language_codes": null
    },
    "AMERICAS.NORTH.TEXMEX.BURRITO": {
        "category_name": "Americas > North > Tex-Mex > Burrito",
        "language_codes": null
    },
    "AMERICAS.NORTH.TEXMEX.TACO": {
        "category_name": "Americas > North > Tex-Mex > Taco",
        "language_codes": null
    },
    "AMERICAS.NORTH.US": {
        "category_name": "Americas > North > American",
        "language_codes": [
            "en"
        ]
    },
    "AMERICAS.NORTH.US.BBQ": {
        "category_name": "Americas > North > American > BBQ",
        "language_codes": [
            "en"
        ]
    },
    "AMERICAS.NORTH.US.CAJUN": {
        "category_name": "Americas > North > American > Cajun",
        "language_codes": [
            "en"
        ]
    },
    "AMERICAS.NORTH.US.HI": {
        "category_name": "Americas > North > American > Hawaiian",
        "language_codes": [
            "en"
        ]
    },
    "AMERICAS.NORTH.US.SOUTH": {
        "category_name": "Americas > North > American > Southern/Soul Food",
        "language_codes": [
            "en"
        ]
    },
    "ASIA.CENTRAL.MN": {
        "category_name": "Asian > Central > Mongolian",
        "language_codes": null
    },
    "ASIA.EAST.CHINESE": {
        "category_name": "Asian > East > Chinese",
        "language_codes": [
            "zh"
        ]
    },
    "ASIA.EAST.CHINESE.CN.GD": {
        "category_name": "Asian > East > Chinese > China > Cantonese",
        "language_codes": [
            "zh-Hans"
        ]
    },
    "ASIA.EAST.CHINESE.CN.SC": {
        "category_name": "Asian > East > Chinese > China > Sichuan",
        "language_codes": [
            "zh-Hans"
        ]
    },
    "ASIA.EAST.CHINESE.CN.SD": {
        "category_name": "Asian > East > Chinese > China > Shandong",
        "language_codes": [
            "zh-Hans"
        ]
    },
    "ASIA.EAST.CHINESE.DIMSUM": {
        "category_name": "Asian > East > Chinese > Dim Sum",
        "language_codes": null
    },
    "ASIA.EAST.CHINESE.HOTPOT": {
        "category_name": "Asian > East > Chinese > Hotpot",
        "language_codes": null
    },
    "ASIA.EAST.CHINESE.TW": {
        "category_name": "Asian > East > Chinese > Taiwanese",
        "language_codes": [
            "zh-Hant"
        ]
    },
    "ASIA.EAST.DUMPLING": {
        "category_name": "Asian > East > Dumpling",
        "language_codes": null
    },
    "ASIA.EAST.JAPANESE.JP": {
        "category_name": "Asian > East > Japanese",
        "language_codes": [
            "ja"
        ]
    },
    "ASIA.EAST.JAPANESE.RAMEN": {
        "category_name": "Asian > East > Japanese > Ramen",
        "language_codes": null
    },
    "ASIA.EAST.JAPANESE.SUSHI": {
        "category_name": "Asian > East > Japanese > Sushi",
        "language_codes": null
    },
    "ASIA.EAST.KOREAN": {
        "category_name": "Asian > East > Korean",
        "language_codes": [
            "ko"
        ]
    },
    "am-ET, en-ET": {
        "category_name": "Asian > Himalayan > Nepalese",
        "language_codes": [
            "ne"
        ]
    },
    "ASIA.HIMALAYAN.TIBET": {
        "category_name": "Asian > Himalayan > Tibetan",
        "language_codes": null
    },
    "ASIA.PAN": {
        "category_name": "Asian > Pan-Asian",
        "language_codes": null
    },
    "ASIA.SOUTH": {
        "category_name": "Asian > South",
        "language_codes": null
    },
    "ASIA.SOUTH.BD": {
        "category_name": "Asian > South > Bangladeshi",
        "language_codes": [
            "bn"
        ]
    },
    "ASIA.SOUTH.IN": {
        "category_name": "Asian > South > Indian",
        "language_codes": [
            "hi",
            "en"
        ]
    },
    "ASIA.SOUTH.IN.SOUTH": {
        "category_name": "Asian > South > Indian > South",
        "language_codes": null
    },
    "ASIA.SOUTH.LK": {
        "category_name": "Asian > South > Sri Lankan",
        "language_codes": [
            "si",
            "ta"
        ]
    },
    "ASIA.SOUTH.PK": {
        "category_name": "Asian > South > Pakistani",
        "language_codes": [
            "ur"
        ]
    },
    "ASIA.SOUTHEAST": {
        "category_name": "Asian > Southeast",
        "language_codes": null
    },
    "ASIA.SOUTHEAST.ID": {
        "category_name": "Asian > Southeast > Indonesian",
        "language_codes": [
            "id"
        ]
    },
    "ASIA.SOUTHEAST.KH": {
        "category_name": "Asian > Southeast > Cambodian",
        "language_codes": [
            "km"
        ]
    },
    "ASIA.SOUTHEAST.MM": {
        "category_name": "Asian > Southeast > Burmese",
        "language_codes": [
            "my"
        ]
    },
    "ASIA.SOUTHEAST.MY": {
        "category_name": "Asian > Southeast > Malaysian",
        "language_codes": [
            "ms",
            "zh"
        ]
    },
    "ASIA.SOUTHEAST.PH": {
        "category_name": "Asian > Southeast > Filipino",
        "language_codes": [
            "tl",
            "en"
        ]
    },
    "ASIA.SOUTHEAST.TH": {
        "category_name": "Asian > Southeast > Thai",
        "language_codes": [
            "th"
        ]
    },
    "ASIA.SOUTHEAST.VN": {
        "category_name": "Asian > Southeast > Vietnamese",
        "language_codes": [
            "vi"
        ]
    },
    "EUROPE.ANGLOCELTIC.GB": {
        "category_name": "European > Anglo-Celtic > British",
        "language_codes": [
            "en"
        ]
    },
    "EUROPE.ANGLOCELTIC.GB.ENG": {
        "category_name": "European > Anglo-Celtic > English",
        "language_codes": [
            "en"
        ]
    },
    "EUROPE.ANGLOCELTIC.GB.SCT": {
        "category_name": "European > Anglo-Celtic > Scottish",
        "language_codes": [
            "en"
        ]
    },
    "EUROPE.ANGLOCELTIC.IE": {
        "category_name": "European > Anglo-Celtic > Irish",
        "language_codes": [
            "en"
        ]
    },
    "EUROPE.CENTRAL.AT": {
        "category_name": "European > Central > Austrian",
        "language_codes": [
            "de"
        ]
    },
    "EUROPE.CENTRAL.CH": {
        "category_name": "European > Central > Swiss",
        "language_codes": [
            "de",
            "fr",
            "it"
        ]
    },
    "EUROPE.CENTRAL.CH.FONDUE": {
        "category_name": "European > Central > Swiss > Fondue",
        "language_codes": null
    },
    "EUROPE.CENTRAL.CZ": {
        "category_name": "European > Central > Czech",
        "language_codes": [
            "cs"
        ]
    },
    "EUROPE.CENTRAL.DE": {
        "category_name": "European > Central > German",
        "language_codes": [
            "de"
        ]
    },
    "EUROPE.CENTRAL.DE.BY": {
        "category_name": "European > Central > German > Bavarian",
        "language_codes": [
            "de"
        ]
    },
    "EUROPE.CENTRAL.HU": {
        "category_name": "European > Central > Hungarian",
        "language_codes": [
            "hu"
        ]
    },
    "EUROPE.CENTRAL.PL": {
        "category_name": "European > Central > Polish",
        "language_codes": [
            "pl"
        ]
    },
    "EUROPE.CENTRAL.SK": {
        "category_name": "European > Central > Slovak",
        "language_codes": [
            "sk"
        ]
    },
    "EUROPE.EAST": {
        "category_name": "European > Eastern & Caucasian > Eastern European",
        "language_codes": null
    },
    "EUROPE.EAST.CAUCASIAN": {
        "category_name": "European > Eastern & Caucasian > Caucasian",
        "language_codes": null
    },
    "EUROPE.EAST.RU": {
        "category_name": "European > Eastern & Caucasian > Russian",
        "language_codes": [
            "ru"
        ]
    },
    "EUROPE.EAST.UA": {
        "category_name": "European > Eastern & Caucasian > Ukrainian",
        "language_codes": [
            "uk"
        ]
    },
    "EUROPE.NORDIC.NEW": {
        "category_name": "European > Nordic > New Nordic",
        "language_codes": null
    },
    "EUROPE.NORDIC.SCANDINAVIAN": {
        "category_name": "European > Nordic > Scandinavian",
        "language_codes": null
    },
    "EUROPE.SOUTH.ES": {
        "category_name": "European > Southern & Mediterranean > Spanish",
        "language_codes": [
            "es"
        ]
    },
    "EUROPE.SOUTH.GR": {
        "category_name": "European > Southern & Mediterranean > Greek",
        "language_codes": [
            "el"
        ]
    },
    "EUROPE.SOUTH.IT": {
        "category_name": "European > Southern & Mediterranean > Italian",
        "language_codes": [
            "it"
        ]
    },
    "EUROPE.SOUTH.IT.PIZZA": {
        "category_name": "European > Southern & Mediterranean > Italian > Pizza",
        "language_codes": null
    },
    "EUROPE.SOUTH.MEDITERRANEAN": {
        "category_name": "European > Southern & Mediterranean > Mediterranean",
        "language_codes": null
    },
    "EUROPE.SOUTH.PT": {
        "category_name": "European > Southern & Mediterranean > Portuguese",
        "language_codes": [
            "pt"
        ]
    },
    "EUROPE.WEST.BE": {
        "category_name": "European > Western > Belgian",
        "language_codes": [
            "fr",
            "nl"
        ]
    },
    "EUROPE.WEST.FR": {
        "category_name": "European > Western > French",
        "language_codes": [
            "fr"
        ]
    },
    "EUROPE.WEST.NL": {
        "category_name": "European > Western > Dutch",
        "language_codes": [
            "nl"
        ]
    },
    "MIDDLEEASTNORTHAFRICA.IR": {
        "category_name": "Middle Eastern & North African > Persian",
        "language_codes": [
            "fa"
        ]
    },
    "MIDDLEEASTNORTHAFRICA.JEWISH": {
        "category_name": "Middle Eastern & North African > Jewish",
        "language_codes": null
    },
    "MIDDLEEASTNORTHAFRICA.KEBAB": {
        "category_name": "Middle Eastern & North African > Kebab",
        "language_codes": null
    },
    "MIDDLEEASTNORTHAFRICA.LB": {
        "category_name": "Middle Eastern & North African > Lebanese",
        "language_codes": [
            "ar"
        ]
    },
    "MIDDLEEASTNORTHAFRICA.MA": {
        "category_name": "Middle Eastern & North African > Moroccan",
        "language_codes": [
            "ar"
        ]
    },
    "MIDDLEEASTNORTHAFRICA.MIDDLEEAST": {
        "category_name": "Middle Eastern & North African > Middle Eastern",
        "language_codes": null
    },
    "MIDDLEEASTNORTHAFRICA.NORTHAFRICA": {
        "category_name": "Middle Eastern & North African > North African",
        "language_codes": null
    },
    "MIDDLEEASTNORTHAFRICA.TR": {
        "category_name": "Middle Eastern & North African > Turkish",
        "language_codes": [
            "tr"
        ]
    },
    "OCEANIAN.AU": {
        "category_name": "Oceanian > Australian",
        "language_codes": [
            "en"
        ]
    },
    "OTHER": {
        "category_name": "Other",
        "language_codes": null
    },
    "OTHER.COFFEE": {
        "category_name": "Other > Coffee Shop",
        "language_codes": null
    }
};
