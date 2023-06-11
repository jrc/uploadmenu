const countryToLanguagesData = {"AC": ["en"], "AD": ["ca"], "AE": ["ar"], "AF": ["fa", "ps"], "AG": ["en"], "AI": ["en"], "AL": ["sq"], "AM": ["hy"], "AO": ["pt"], "AQ": ["und"], "AR": ["es"], "AS": ["sm", "en"], "AT": ["de", "bar"], "AU": ["en"], "AW": ["nl", "pap"], "AX": ["sv"], "AZ": ["az", "az_Cyrl"], "BA": ["bs", "bs_Cyrl", "hr", "sr", "sr_Latn"], "BB": ["en"], "BD": ["bn"], "BE": ["nl", "fr", "de"], "BF": ["fr"], "BG": ["bg"], "BH": ["ar"], "BI": ["rn", "fr", "en"], "BJ": ["fr"], "BL": ["fr"], "BM": ["en"], "BN": ["ms", "ms_Arab"], "BO": ["es", "qu", "ay"], "BQ": ["pap", "nl"], "BR": ["pt"], "BS": ["en"], "BT": ["dz"], "BV": ["und"], "BW": ["en", "tn"], "BY": ["be", "ru"], "BZ": ["en"], "CA": ["en", "fr"], "CC": ["ms_Arab"], "CD": ["sw", "fr"], "CF": ["fr", "sg"], "CG": ["fr"], "CH": ["de", "gsw", "fr", "it"], "CI": ["fr"], "CK": ["en"], "CL": ["es"], "CM": ["fr", "en"], "CN": ["zh"], "CO": ["es"], "CP": ["und"], "CQ": ["en"], "CR": ["es"], "CU": ["es"], "CV": ["kea", "pt"], "CW": ["pap", "nl"], "CX": ["en"], "CY": ["el", "tr"], "CZ": ["cs"], "DE": ["de"], "DG": ["en"], "DJ": ["ar", "fr"], "DK": ["da", "en"], "DM": ["en"], "DO": ["es"], "DZ": ["arq", "ar", "fr"], "EA": ["es"], "EC": ["es", "qu"], "EE": ["et"], "EG": ["ar"], "EH": ["ar"], "ER": ["ti", "en", "ar"], "ES": ["es"], "ET": ["am"], "FI": ["fi", "sv"], "FJ": ["en", "hif", "fj"], "FK": ["en"], "FM": ["en"], "FO": ["fo"], "FR": ["fr"], "GA": ["fr"], "GB": ["en"], "GD": ["en"], "GE": ["ka"], "GF": ["fr"], "GG": ["en"], "GH": ["en"], "GI": ["en"], "GL": ["kl"], "GM": ["en"], "GN": ["fr"], "GP": ["fr"], "GQ": ["es", "fr", "pt"], "GR": ["el"], "GS": ["und"], "GT": ["es"], "GU": ["en", "ch"], "GW": ["pt"], "GY": ["en"], "HK": ["zh_Hant", "yue", "en"], "HM": ["und"], "HN": ["es"], "HR": ["hr"], "HT": ["ht", "fr"], "HU": ["hu"], "IC": ["es"], "ID": ["id"], "IE": ["en", "ga"], "IL": ["he", "en", "ar"], "IM": ["en", "gv"], "IN": ["hi", "en"], "IO": ["en"], "IQ": ["ar"], "IR": ["fa"], "IS": ["is"], "IT": ["it"], "JE": ["en"], "JM": ["en", "jam"], "JO": ["ar"], "JP": ["ja"], "KE": ["sw", "en"], "KG": ["ky", "ru"], "KH": ["km"], "KI": ["en", "gil"], "KM": ["ar", "fr", "zdj", "wni"], "KN": ["en"], "KP": ["ko"], "KR": ["ko"], "KW": ["ar"], "KY": ["en"], "KZ": ["ru", "kk"], "LA": ["lo"], "LB": ["apc", "ar"], "LC": ["en"], "LI": ["de", "gsw"], "LK": ["si", "ta"], "LR": ["en"], "LS": ["st", "en"], "LT": ["lt", "ru"], "LU": ["fr", "lb", "de"], "LV": ["lv"], "LY": ["ar"], "MA": ["ary", "ar", "tzm"], "MC": ["fr"], "MD": ["ro"], "ME": ["sr_Latn"], "MF": ["fr"], "MG": ["mg", "fr", "en"], "MH": ["en", "mh"], "MK": ["mk"], "ML": ["fr"], "MM": ["my"], "MN": ["mn"], "MO": ["zh_Hant", "pt"], "MP": ["en"], "MQ": ["fr"], "MR": ["ar"], "MS": ["en"], "MT": ["mt", "en"], "MU": ["mfe", "en", "fr"], "MV": ["dv"], "MW": ["en", "ny"], "MX": ["es"], "MY": ["ms"], "MZ": ["pt"], "NA": ["en"], "NC": ["fr"], "NE": ["fr"], "NF": ["en"], "NG": ["en", "yo"], "NI": ["es"], "NL": ["nl", "en"], "NO": ["nb", "no", "nn"], "NP": ["ne"], "NR": ["en", "na"], "NU": ["en", "niu"], "NZ": ["en", "mi"], "OM": ["ar"], "PA": ["es"], "PE": ["es", "qu"], "PF": ["fr", "ty"], "PG": ["tpi", "en", "ho"], "PH": ["en", "fil"], "PK": ["ur", "en"], "PL": ["pl"], "PM": ["fr"], "PN": ["en"], "PR": ["es"], "PS": ["ar", "apc"], "PT": ["pt"], "PW": ["pau", "en"], "PY": ["gn", "es"], "QA": ["ar"], "RE": ["fr"], "RO": ["ro"], "RS": ["sr", "sr_Latn"], "RU": ["ru"], "RW": ["rw", "en", "fr"], "SA": ["ar"], "SB": ["en", "pis"], "SC": ["crs", "fr", "en"], "SD": ["ar", "en"], "SE": ["sv", "en"], "SG": ["en", "zh", "ms", "ta"], "SH": ["en"], "SI": ["sl"], "SJ": ["nb"], "SK": ["sk"], "SL": ["kri", "en"], "SM": ["it"], "SN": ["wo", "fr"], "SO": ["so", "ar"], "SR": ["nl"], "SS": ["en"], "ST": ["pt"], "SV": ["es"], "SX": ["en", "nl"], "SY": ["apc", "ar", "fr"], "SZ": ["en", "ss"], "TA": ["en"], "TC": ["en"], "TD": ["fr", "ar"], "TF": ["fr"], "TG": ["fr"], "TH": ["th"], "TJ": ["tg"], "TK": ["en", "tkl"], "TL": ["pt", "tet"], "TM": ["tk"], "TN": ["aeb", "ar", "fr"], "TO": ["to", "en"], "TR": ["tr"], "TT": ["en"], "TV": ["tvl", "en"], "TW": ["zh_Hant"], "TZ": ["sw", "en"], "UA": ["uk"], "UG": ["sw", "en"], "UM": ["en"], "US": ["en"], "UY": ["es"], "UZ": ["uz", "uz_Cyrl"], "VA": ["it", "la"], "VC": ["en"], "VE": ["es"], "VG": ["en"], "VI": ["en"], "VN": ["vi"], "VU": ["bi", "en", "fr"], "WF": ["fr"], "WS": ["sm", "en"], "XK": ["sq", "sr", "sr_Latn"], "YE": ["ar"], "YT": ["swb", "fr"], "ZA": ["en"], "ZM": ["en"], "ZW": ["sn", "en", "nd"]};

const cuisinesData = [{"category_id": "AFRI", "category_name_en": "African (Sub-Saharan)", "children": [{"cuisine_name_en": "Ethiopian", "language_codes": ["am", "en"], "cuisine_id": "AFRI.ET"}, {"cuisine_name_en": "Other (East African)", "language_codes": ["sw", "en", "fr"], "cuisine_id": "AFRI.OTHER-EAST"}, {"cuisine_name_en": "Other (Southern African)", "language_codes": ["en", "af", "zu", "ss"], "cuisine_id": "AFRI.OTHER-SOUTH"}, {"cuisine_name_en": "Other (West African)", "language_codes": ["en", "fr", "ha", "yo", "ig", "ff", "bm", "kri"], "cuisine_id": "AFRI.OTHER-WEST"}, {"cuisine_name_en": "Pan-African", "language_codes": ["en"], "cuisine_id": "AFRI.PAN"}]}, {"category_id": "AMER.CARIBBEAN", "category_name_en": "Americas > Caribbean", "children": [{"cuisine_name_en": "Cuban", "language_codes": ["es"], "cuisine_id": "AMER.CARIBBEAN.CU"}, {"cuisine_name_en": "Jamaican", "language_codes": ["en"], "cuisine_id": "AMER.CARIBBEAN.JM"}, {"cuisine_name_en": "Other (Caribbean)", "language_codes": ["en", "es", "nl", "fr"], "cuisine_id": "AMER.CARIBBEAN.OTHER"}]}, {"category_id": "AMER.LATIN", "category_name_en": "Americas > Latin America", "children": [{"cuisine_name_en": "Argentinian", "language_codes": ["es"], "cuisine_id": "AMER.LATIN.AR"}, {"cuisine_name_en": "Brazilian", "language_codes": ["pt"], "cuisine_id": "AMER.LATIN.BR"}, {"cuisine_name_en": "Colombian", "language_codes": ["es"], "cuisine_id": "AMER.LATIN.CO"}, {"cuisine_name_en": "Mexican", "language_codes": ["es"], "cuisine_id": "AMER.LATIN.MX"}, {"cuisine_name_en": "Other (Central American)", "language_codes": ["es", "en"], "cuisine_id": "AMER.LATIN.OTHER-CENTRAL"}, {"cuisine_name_en": "Other (South American)", "language_codes": ["es", "pt"], "cuisine_id": "AMER.LATIN.OTHER-SOUTH"}, {"cuisine_name_en": "Pan-Latin American", "language_codes": ["es", "pt", "en"], "cuisine_id": "AMER.LATIN.PAN"}, {"cuisine_name_en": "Peruvian", "language_codes": ["es"], "cuisine_id": "AMER.LATIN.PE"}, {"cuisine_name_en": "Salvadoran", "language_codes": ["es"], "cuisine_id": "AMER.LATIN.SV"}, {"cuisine_name_en": "Venezuelan", "language_codes": ["es"], "cuisine_id": "AMER.LATIN.VE"}]}, {"category_id": "AMER.NORTH", "category_name_en": "Americas > North American", "children": [{"cuisine_name_en": "Burger", "language_codes": ["en"], "cuisine_id": "AMER.NORTH.BURGER"}, {"cuisine_name_en": "Canadian", "language_codes": ["en", "fr"], "cuisine_id": "AMER.NORTH.CA"}, {"cuisine_name_en": "Diner", "language_codes": ["en"], "cuisine_id": "AMER.NORTH.DINER"}, {"cuisine_name_en": "USA > Californian", "language_codes": ["en"], "cuisine_id": "AMER.NORTH.US-CA"}, {"cuisine_name_en": "USA > New England", "language_codes": ["en"], "cuisine_id": "AMER.NORTH.US.NEWENGLAND"}, {"cuisine_name_en": "USA > Other (American)", "language_codes": ["en"], "cuisine_id": "AMER.NORTH.US.OTHER"}, {"cuisine_name_en": "USA > Southern > Barbecue", "language_codes": ["en"], "cuisine_id": "AMER.NORTH.US.SOUTH.BBQ"}, {"cuisine_name_en": "USA > Southern > Cajun", "language_codes": ["en"], "cuisine_id": "AMER.NORTH.US.SOUTH.CAJUN"}, {"cuisine_name_en": "USA > Southern > Soul Food", "language_codes": ["en"], "cuisine_id": "AMER.NORTH.US.SOUTH.SOUL"}, {"cuisine_name_en": "USA > Southwestern", "language_codes": ["en", "es"], "cuisine_id": "AMER.NORTH.US.SOUTHWEST"}, {"cuisine_name_en": "USA > Southwestern > Tex-Mex", "language_codes": ["en", "es"], "cuisine_id": "AMER.NORTH.US.SOUTHWEST.TEXMEX"}]}, {"category_id": "ASIA.EAST", "category_name_en": "Asia > East", "children": [{"cuisine_name_en": "Chinese", "language_codes": ["zh"], "cuisine_id": "ASIA.EAST.CHINESE"}, {"cuisine_name_en": "Chinese > China > Cantonese", "language_codes": ["zh-Hans"], "cuisine_id": "ASIA.EAST.CN-GD"}, {"cuisine_name_en": "Chinese > China > Shandong", "language_codes": ["zh-Hans"], "cuisine_id": "ASIA.EAST.CN-SD"}, {"cuisine_name_en": "Chinese > China > Shanghai", "language_codes": ["zh-Hans"], "cuisine_id": "ASIA.EAST.CN-SH"}, {"cuisine_name_en": "Chinese > China > Sichuan", "language_codes": ["zh-Hans"], "cuisine_id": "ASIA.EAST.CN-SC"}, {"cuisine_name_en": "Chinese > Dim Sum", "language_codes": ["zh-Hant", "zh-Hans"], "cuisine_id": "ASIA.EAST.DIMSUM"}, {"cuisine_name_en": "Chinese > Hotpot", "language_codes": ["zh"], "cuisine_id": "ASIA.EAST.HOTPOT"}, {"cuisine_name_en": "Chinese > Taiwanese", "language_codes": ["zh-Hant"], "cuisine_id": "ASIA.EAST.TW"}, {"cuisine_name_en": "Japanese", "language_codes": ["ja"], "cuisine_id": "ASIA.EAST.JP"}, {"cuisine_name_en": "Japanese > Izakaya", "language_codes": ["ja"], "cuisine_id": "ASIA.EAST.JP.IZAKAYA"}, {"cuisine_name_en": "Japanese > Ramen", "language_codes": ["ja"], "cuisine_id": "ASIA.EAST.JP.RAMEN"}, {"cuisine_name_en": "Japanese > Sushi", "language_codes": ["ja"], "cuisine_id": "ASIA.EAST.JP.SUSHI"}, {"cuisine_name_en": "Japanese > Teppanyaki", "language_codes": ["ja"], "cuisine_id": "ASIA.EAST.JP.TEPPANYAKI"}, {"cuisine_name_en": "Korean", "language_codes": ["ko"], "cuisine_id": "ASIA.EAST.KOREAN"}, {"cuisine_name_en": "Korean > BBQ", "language_codes": ["ko"], "cuisine_id": "ASIA.EAST.KOREAN.BBQ"}]}, {"category_id": "ASIA", "category_name_en": "Asia > Other", "children": [{"cuisine_name_en": "Central > Mongolian", "language_codes": ["mn"], "cuisine_id": "ASIA.MN"}, {"cuisine_name_en": "Central > Other (Central Asian)", "language_codes": ["kk", "ky", "tg", "tk", "uz"], "cuisine_id": "ASIA.CENTRAL.OTHER"}, {"cuisine_name_en": "Pan-Asian", "language_codes": [""], "cuisine_id": "ASIA.PAN"}, {"cuisine_name_en": "South-Central > Afghan", "language_codes": ["ps", "fa-AF", "en"], "cuisine_id": "ASIA.AF"}, {"cuisine_name_en": "South-Central > Nepalese", "language_codes": ["ne", "en", "new"], "cuisine_id": "ASIA.NP"}]}, {"category_id": "ASIA.SOUTH", "category_name_en": "Asia > South", "children": [{"cuisine_name_en": "Bangladeshi", "language_codes": ["bn"], "cuisine_id": "ASIA.SOUTH.BD"}, {"cuisine_name_en": "Indian", "language_codes": ["hi", "en"], "cuisine_id": "ASIA.SOUTH.IN"}, {"cuisine_name_en": "Indian > South", "language_codes": ["ta", "te", "kn", "ml", "en"], "cuisine_id": "ASIA.SOUTH.IN.SOUTH"}, {"cuisine_name_en": "Pakistani", "language_codes": ["ur"], "cuisine_id": "ASIA.SOUTH.PK"}, {"cuisine_name_en": "Pan-Indian", "language_codes": ["en"], "cuisine_id": "ASIA.SOUTH.PAN-INDIAN"}, {"cuisine_name_en": "Sri Lankan", "language_codes": ["si", "ta"], "cuisine_id": "ASIA.SOUTH.LK"}]}, {"category_id": "ASIA.SOUTHEAST", "category_name_en": "Asia > Southeast", "children": [{"cuisine_name_en": "Burmese", "language_codes": ["my"], "cuisine_id": "ASIA.SOUTHEAST.MM"}, {"cuisine_name_en": "Cambodian", "language_codes": ["km"], "cuisine_id": "ASIA.SOUTHEAST.KH"}, {"cuisine_name_en": "Filipino", "language_codes": ["tl", "en"], "cuisine_id": "ASIA.SOUTHEAST.PH"}, {"cuisine_name_en": "Indonesian", "language_codes": ["id"], "cuisine_id": "ASIA.SOUTHEAST.ID"}, {"cuisine_name_en": "Malaysian", "language_codes": ["ms", "zh"], "cuisine_id": "ASIA.SOUTHEAST.MY"}, {"cuisine_name_en": "Other (Southeast Asian)", "language_codes": [""], "cuisine_id": "ASIA.SOUTHEAST.OTHER"}, {"cuisine_name_en": "Pan-Southeast Asian", "language_codes": ["ms", "km", "id", "lo", "ms", "my", "en", "th", "pt", "vi"], "cuisine_id": "ASIA.SOUTHEAST.PAN"}, {"cuisine_name_en": "Singaporean", "language_codes": ["en", "zh", "ms", "ta"], "cuisine_id": "ASIA.SOUTHEAST.SG"}, {"cuisine_name_en": "Thai", "language_codes": ["th"], "cuisine_id": "ASIA.SOUTHEAST.TH"}, {"cuisine_name_en": "Vietnamese", "language_codes": ["vi"], "cuisine_id": "ASIA.SOUTHEAST.VN"}]}, {"category_id": "EURO.IONA", "category_name_en": "Europe > British & Irish", "children": [{"cuisine_name_en": "British", "language_codes": ["en"], "cuisine_id": "EURO.IONA.GB"}, {"cuisine_name_en": "Irish", "language_codes": ["en"], "cuisine_id": "EURO.IONA.IE"}]}, {"category_id": "EURO.CENTRALWEST", "category_name_en": "Europe > Central & West", "children": [{"cuisine_name_en": "Austrian", "language_codes": ["de"], "cuisine_id": "EURO.CENTRALWEST.AT"}, {"cuisine_name_en": "Belgian", "language_codes": ["nl", "fr", "de", "en"], "cuisine_id": "EURO.CENTRALWEST.BE"}, {"cuisine_name_en": "Czech", "language_codes": ["cs"], "cuisine_id": "EURO.CENTRALWEST.CZ"}, {"cuisine_name_en": "Dutch", "language_codes": ["nl"], "cuisine_id": "EURO.CENTRALWEST.NL"}, {"cuisine_name_en": "French", "language_codes": ["fr"], "cuisine_id": "EURO.CENTRALWEST.FR"}, {"cuisine_name_en": "German", "language_codes": ["de"], "cuisine_id": "EURO.CENTRALWEST.DE"}, {"cuisine_name_en": "Hungarian", "language_codes": ["hu"], "cuisine_id": "EURO.CENTRALWEST.HU"}, {"cuisine_name_en": "Polish", "language_codes": ["pl"], "cuisine_id": "EURO.CENTRALWEST.PL"}, {"cuisine_name_en": "Slovak", "language_codes": ["sk"], "cuisine_id": "EURO.CENTRALWEST.SK"}, {"cuisine_name_en": "Swiss", "language_codes": ["gsw", "fr", "it"], "cuisine_id": "EURO.CENTRALWEST.CH"}]}, {"category_id": "EURO.EAST", "category_name_en": "Europe > Eastern", "children": [{"cuisine_name_en": "Other (Caucasian)", "language_codes": ["hy", "az", "ka"], "cuisine_id": "EURO.EAST.OTHER-CAUCASIAN"}, {"cuisine_name_en": "Other (Eastern European)", "language_codes": ["et", "lv", "lt", "be", "bg", "ro", "ru", "uk"], "cuisine_id": "EURO.EAST.OTHER"}, {"cuisine_name_en": "Russian", "language_codes": ["ru"], "cuisine_id": "EURO.EAST.RU"}, {"cuisine_name_en": "Ukrainian", "language_codes": ["uk"], "cuisine_id": "EURO.EAST.UA"}]}, {"category_id": "EURO.NORDIC", "category_name_en": "Europe > Nordic", "children": [{"cuisine_name_en": "Danish", "language_codes": ["da"], "cuisine_id": "EURO.NORDIC.DK"}, {"cuisine_name_en": "New Nordic", "language_codes": ["da", "fi", "is", "nb", "sv"], "cuisine_id": "EURO.NORDIC.NEW"}, {"cuisine_name_en": "Norwegian", "language_codes": ["nb"], "cuisine_id": "EURO.NORDIC.NO"}, {"cuisine_name_en": "Other (Nordic)", "language_codes": [""], "cuisine_id": "EURO.NORDIC.OTHER"}, {"cuisine_name_en": "Pan-Scandinavian", "language_codes": ["da", "nb", "sv"], "cuisine_id": "EURO.NORDIC.PAN-SCANDINAVIAN"}, {"cuisine_name_en": "Swedish", "language_codes": ["sv"], "cuisine_id": "EURO.NORDIC.SE"}]}, {"category_id": "EURO.SOUTHMEDITERRANEAN", "category_name_en": "Europe > Southern & Mediterranean", "children": [{"cuisine_name_en": "Greek", "language_codes": ["el"], "cuisine_id": "EURO.SOUTHMEDITERRANEAN.GR"}, {"cuisine_name_en": "Italian", "language_codes": ["it"], "cuisine_id": "EURO.SOUTHMEDITERRANEAN.IT"}, {"cuisine_name_en": "Other (Balkan)", "language_codes": ["sq", "sr", "hr", "bs", "bg", "ro", "el", "tr", "mk"], "cuisine_id": "EURO.SOUTHMEDITERRANEAN.OTHER-BALKAN"}, {"cuisine_name_en": "Pan-Mediterranean", "language_codes": ["ar", "el", "en", "es", "fr", "he", "hr", "it", "mk", "pt", "sl", "tr"], "cuisine_id": "EURO.SOUTHMEDITERRANEAN.PAN-MEDITERRANEAN"}, {"cuisine_name_en": "Pizza", "language_codes": ["it", "en"], "cuisine_id": "EURO.SOUTHMEDITERRANEAN.IT.PIZZA"}, {"cuisine_name_en": "Portuguese", "language_codes": ["pt"], "cuisine_id": "EURO.SOUTHMEDITERRANEAN.PT"}, {"cuisine_name_en": "Spanish", "language_codes": ["es"], "cuisine_id": "EURO.SOUTHMEDITERRANEAN.ES"}, {"cuisine_name_en": "Tapas", "language_codes": ["es"], "cuisine_id": "EURO.SOUTHMEDITERRANEAN.ES.TAPAS"}]}, {"category_id": "MENA", "category_name_en": "Middle Eastern & North African", "children": [{"cuisine_name_en": "Israeli", "language_codes": ["he", "en", "ar"], "cuisine_id": "MENA.IL"}, {"cuisine_name_en": "Kebab", "language_codes": ["tr"], "cuisine_id": "MENA.KEBAB"}, {"cuisine_name_en": "Lebanese", "language_codes": ["ar"], "cuisine_id": "MENA.LB"}, {"cuisine_name_en": "Moroccan", "language_codes": ["ar"], "cuisine_id": "MENA.MA"}, {"cuisine_name_en": "Other (Middle Eastern)", "language_codes": ["ar", "fa", "he"], "cuisine_id": "MENA.OTHER-MIDDLEEAST"}, {"cuisine_name_en": "Other (North African)", "language_codes": ["ar", "fr"], "cuisine_id": "MENA.OTHER-NORTHAFRICA"}, {"cuisine_name_en": "Pan-Middle Eastern", "language_codes": ["ar", "fa", "he"], "cuisine_id": "MENA.PAN-MIDDLEEAST"}, {"cuisine_name_en": "Persian", "language_codes": ["fa"], "cuisine_id": "MENA.IR"}, {"cuisine_name_en": "Turkish", "language_codes": ["tr"], "cuisine_id": "MENA.TR"}]}, {"category_id": "OCEA", "category_name_en": "Oceanian", "children": [{"cuisine_name_en": "Australian & New Zealand", "language_codes": ["en"], "cuisine_id": "OCEA.AUNZ"}, {"cuisine_name_en": "Hawaiian > Poke", "language_codes": ["en", "haw"], "cuisine_id": "OCEA.HI.POKE"}, {"cuisine_name_en": "Other (Pacific Island)", "language_codes": ["en"], "cuisine_id": "OCEA.OTHER-PACIFICISLAND"}]}, {"category_id": "OTHER", "category_name_en": "Other", "children": [{"cuisine_name_en": "Other", "language_codes": ["en"], "cuisine_id": "OTHER.OTHER"}]}];

const languageDisplayNameData = {"af": "Afrikaans", "am": "Amharic", "ar": "Arabic", "az": "Azerbaijani", "be": "Belarusian", "bg": "Bulgarian", "bm": "Bambara", "bn": "Bangla", "bs": "Bosnian", "cs": "Czech", "da": "Danish", "de": "German", "el": "Greek", "en": "English", "es": "Spanish", "et": "Estonian", "fa": "Persian", "fa-AF": "Dari", "ff": "Fula", "fi": "Finnish", "fr": "French", "gsw": "Swiss German", "ha": "Hausa", "haw": "Hawaiian", "he": "Hebrew", "hi": "Hindi", "hr": "Croatian", "hu": "Hungarian", "hy": "Armenian", "id": "Indonesian", "ig": "Igbo", "is": "Icelandic", "it": "Italian", "ja": "Japanese", "ka": "Georgian", "kk": "Kazakh", "km": "Khmer", "kn": "Kannada", "ko": "Korean", "kri": "Krio", "ky": "Kyrgyz", "lo": "Lao", "lt": "Lithuanian", "lv": "Latvian", "mk": "Macedonian", "ml": "Malayalam", "mn": "Mongolian", "ms": "Malay", "my": "Burmese", "nb": "Norwegian Bokm\u00e5l", "ne": "Nepali", "new": "Newari", "nl": "Dutch", "pl": "Polish", "ps": "Pashto", "pt": "Portuguese", "ro": "Romanian", "ru": "Russian", "si": "Sinhala", "sk": "Slovak", "sl": "Slovenian", "sq": "Albanian", "sr": "Serbian", "ss": "Swati", "sv": "Swedish", "sw": "Swahili", "ta": "Tamil", "te": "Telugu", "tg": "Tajik", "th": "Thai", "tk": "Turkmen", "tl": "Tagalog", "tr": "Turkish", "uk": "Ukrainian", "ur": "Urdu", "uz": "Uzbek", "vi": "Vietnamese", "yo": "Yoruba", "zh": "Chinese (unknown)", "zh-Hans": "Chinese (Simplified)", "zh-Hant": "Chinese (Traditional)", "zu": "Zulu"};
