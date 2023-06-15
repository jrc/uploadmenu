const countryToLanguagesData = {"AC": ["en"], "AD": ["ca"], "AE": ["ar"], "AF": ["fa", "ps"], "AG": ["en"], "AI": ["en"], "AL": ["sq"], "AM": ["hy"], "AO": ["pt"], "AQ": ["und"], "AR": ["es"], "AS": ["sm", "en"], "AT": ["de", "bar"], "AU": ["en"], "AW": ["nl", "pap"], "AX": ["sv"], "AZ": ["az", "az_Cyrl"], "BA": ["bs", "bs_Cyrl", "hr", "sr", "sr_Latn"], "BB": ["en"], "BD": ["bn"], "BE": ["nl", "fr", "de"], "BF": ["fr"], "BG": ["bg"], "BH": ["ar"], "BI": ["rn", "fr", "en"], "BJ": ["fr"], "BL": ["fr"], "BM": ["en"], "BN": ["ms", "ms_Arab"], "BO": ["es", "qu", "ay"], "BQ": ["pap", "nl"], "BR": ["pt"], "BS": ["en"], "BT": ["dz"], "BV": ["und"], "BW": ["en", "tn"], "BY": ["be", "ru"], "BZ": ["en"], "CA": ["en", "fr"], "CC": ["ms_Arab"], "CD": ["sw", "fr"], "CF": ["fr", "sg"], "CG": ["fr"], "CH": ["de", "gsw", "fr", "it"], "CI": ["fr"], "CK": ["en"], "CL": ["es"], "CM": ["fr", "en"], "CN": ["zh"], "CO": ["es"], "CP": ["und"], "CQ": ["en"], "CR": ["es"], "CU": ["es"], "CV": ["kea", "pt"], "CW": ["pap", "nl"], "CX": ["en"], "CY": ["el", "tr"], "CZ": ["cs"], "DE": ["de"], "DG": ["en"], "DJ": ["ar", "fr"], "DK": ["da", "en"], "DM": ["en"], "DO": ["es"], "DZ": ["arq", "ar", "fr"], "EA": ["es"], "EC": ["es", "qu"], "EE": ["et"], "EG": ["ar"], "EH": ["ar"], "ER": ["ti", "en", "ar"], "ES": ["es"], "ET": ["am"], "FI": ["fi", "sv"], "FJ": ["en", "hif", "fj"], "FK": ["en"], "FM": ["en"], "FO": ["fo"], "FR": ["fr"], "GA": ["fr"], "GB": ["en"], "GD": ["en"], "GE": ["ka"], "GF": ["fr"], "GG": ["en"], "GH": ["en"], "GI": ["en"], "GL": ["kl"], "GM": ["en"], "GN": ["fr"], "GP": ["fr"], "GQ": ["es", "fr", "pt"], "GR": ["el"], "GS": ["und"], "GT": ["es"], "GU": ["en", "ch"], "GW": ["pt"], "GY": ["en"], "HK": ["zh_Hant", "yue", "en"], "HM": ["und"], "HN": ["es"], "HR": ["hr"], "HT": ["ht", "fr"], "HU": ["hu"], "IC": ["es"], "ID": ["id"], "IE": ["en", "ga"], "IL": ["he", "en", "ar"], "IM": ["en", "gv"], "IN": ["hi", "en"], "IO": ["en"], "IQ": ["ar"], "IR": ["fa"], "IS": ["is"], "IT": ["it"], "JE": ["en"], "JM": ["en", "jam"], "JO": ["ar"], "JP": ["ja"], "KE": ["sw", "en"], "KG": ["ky", "ru"], "KH": ["km"], "KI": ["en", "gil"], "KM": ["ar", "fr", "zdj", "wni"], "KN": ["en"], "KP": ["ko"], "KR": ["ko"], "KW": ["ar"], "KY": ["en"], "KZ": ["ru", "kk"], "LA": ["lo"], "LB": ["apc", "ar"], "LC": ["en"], "LI": ["de", "gsw"], "LK": ["si", "ta"], "LR": ["en"], "LS": ["st", "en"], "LT": ["lt", "ru"], "LU": ["fr", "lb", "de"], "LV": ["lv"], "LY": ["ar"], "MA": ["ary", "ar", "tzm"], "MC": ["fr"], "MD": ["ro"], "ME": ["sr_Latn"], "MF": ["fr"], "MG": ["mg", "fr", "en"], "MH": ["en", "mh"], "MK": ["mk"], "ML": ["fr"], "MM": ["my"], "MN": ["mn"], "MO": ["zh_Hant", "pt"], "MP": ["en"], "MQ": ["fr"], "MR": ["ar"], "MS": ["en"], "MT": ["mt", "en"], "MU": ["mfe", "en", "fr"], "MV": ["dv"], "MW": ["en", "ny"], "MX": ["es"], "MY": ["ms"], "MZ": ["pt"], "NA": ["en"], "NC": ["fr"], "NE": ["fr"], "NF": ["en"], "NG": ["en", "yo"], "NI": ["es"], "NL": ["nl", "en"], "NO": ["nb", "no", "nn"], "NP": ["ne"], "NR": ["en", "na"], "NU": ["en", "niu"], "NZ": ["en", "mi"], "OM": ["ar"], "PA": ["es"], "PE": ["es", "qu"], "PF": ["fr", "ty"], "PG": ["tpi", "en", "ho"], "PH": ["en", "fil"], "PK": ["ur", "en"], "PL": ["pl"], "PM": ["fr"], "PN": ["en"], "PR": ["es"], "PS": ["ar", "apc"], "PT": ["pt"], "PW": ["pau", "en"], "PY": ["gn", "es"], "QA": ["ar"], "RE": ["fr"], "RO": ["ro"], "RS": ["sr", "sr_Latn"], "RU": ["ru"], "RW": ["rw", "en", "fr"], "SA": ["ar"], "SB": ["en", "pis"], "SC": ["crs", "fr", "en"], "SD": ["ar", "en"], "SE": ["sv", "en"], "SG": ["en", "zh", "ms", "ta"], "SH": ["en"], "SI": ["sl"], "SJ": ["nb"], "SK": ["sk"], "SL": ["kri", "en"], "SM": ["it"], "SN": ["wo", "fr"], "SO": ["so", "ar"], "SR": ["nl"], "SS": ["en"], "ST": ["pt"], "SV": ["es"], "SX": ["en", "nl"], "SY": ["apc", "ar", "fr"], "SZ": ["en", "ss"], "TA": ["en"], "TC": ["en"], "TD": ["fr", "ar"], "TF": ["fr"], "TG": ["fr"], "TH": ["th"], "TJ": ["tg"], "TK": ["en", "tkl"], "TL": ["pt", "tet"], "TM": ["tk"], "TN": ["aeb", "ar", "fr"], "TO": ["to", "en"], "TR": ["tr"], "TT": ["en"], "TV": ["tvl", "en"], "TW": ["zh_Hant"], "TZ": ["sw", "en"], "UA": ["uk"], "UG": ["sw", "en"], "UM": ["en"], "US": ["en"], "UY": ["es"], "UZ": ["uz", "uz_Cyrl"], "VA": ["it", "la"], "VC": ["en"], "VE": ["es"], "VG": ["en"], "VI": ["en"], "VN": ["vi"], "VU": ["bi", "en", "fr"], "WF": ["fr"], "WS": ["sm", "en"], "XK": ["sq", "sr", "sr_Latn"], "YE": ["ar"], "YT": ["swb", "fr"], "ZA": ["en"], "ZM": ["en"], "ZW": ["sn", "en", "nd"]};

const cuisinesData = [{"category_name_en": "African (Sub-Saharan)", "children": [{"display_name": "\ud83c\uddea\ud83c\uddf9 Ethiopian", "language_codes": ["am", "en"]}, {"display_name": "\ud83c\uddf8\ud83c\uddf3 Senegalese", "language_codes": ["wo", "fr"]}, {"display_name": "Pan-African", "language_codes": ["en", "fr", "sw"]}, {"display_name": "Other (East African)", "language_codes": ["sw", "en", "fr"]}, {"display_name": "Other (Southern African)", "language_codes": ["en", "af", "zu", "ss"]}, {"display_name": "Other (West African)", "language_codes": ["en", "fr", "ha", "yo", "ig", "ff", "bm", "kri"]}]}, {"category_name_en": "Americas > Caribbean", "children": [{"display_name": "\ud83c\udde8\ud83c\uddfa Cuban", "language_codes": ["es"]}, {"display_name": "\ud83c\uddef\ud83c\uddf2 Jamaican", "language_codes": ["en"]}, {"display_name": "Pan-Caribbean", "language_codes": ["en", "es", "nl", "fr"]}, {"display_name": "Other (Caribbean)", "language_codes": ["en", "es", "nl", "fr"]}]}, {"category_name_en": "Americas > North", "children": [{"display_name": "\ud83c\uddfa\ud83c\uddf8 American", "language_codes": ["en"]}, {"display_name": "\ud83c\uddfa\ud83c\uddf8 American > Barbecue", "language_codes": ["en"]}, {"display_name": "\ud83c\uddfa\ud83c\uddf8 American > Burger (\ud83c\udf54)", "language_codes": ["en"]}, {"display_name": "\ud83c\uddfa\ud83c\uddf8 American > Californian", "language_codes": ["en"]}, {"display_name": "\ud83c\uddfa\ud83c\uddf8 American > Diner", "language_codes": ["en"]}, {"display_name": "\ud83c\uddfa\ud83c\uddf8 American > New England", "language_codes": ["en"]}, {"display_name": "\ud83c\uddfa\ud83c\uddf8 American > Pizza (\ud83c\udf55)", "language_codes": ["en", "it"]}, {"display_name": "\ud83c\uddfa\ud83c\uddf8 American > Southern > Cajun", "language_codes": ["en"]}, {"display_name": "\ud83c\uddfa\ud83c\uddf8 American > Southern > Soul Food", "language_codes": ["en"]}, {"display_name": "\ud83c\uddfa\ud83c\uddf8 American > Southwestern", "language_codes": ["en", "es"]}, {"display_name": "\ud83c\uddfa\ud83c\uddf8 American > Southwestern > Tex-Mex", "language_codes": ["en", "es"]}, {"display_name": "\ud83c\udde8\ud83c\udde6 Canadian", "language_codes": ["en", "fr"]}]}, {"category_name_en": "Americas > South & Central", "children": [{"display_name": "\ud83c\udde6\ud83c\uddf7 Argentinian", "language_codes": ["es"]}, {"display_name": "\ud83c\udde7\ud83c\uddf7 Brazilian", "language_codes": ["pt"]}, {"display_name": "\ud83c\udde8\ud83c\uddf4 Colombian", "language_codes": ["es"]}, {"display_name": "\ud83c\uddf2\ud83c\uddfd Mexican", "language_codes": ["es"]}, {"display_name": "\ud83c\uddf5\ud83c\uddea Peruvian", "language_codes": ["es"]}, {"display_name": "\ud83c\uddf8\ud83c\uddfb Salvadoran", "language_codes": ["es"]}, {"display_name": "\ud83c\uddfb\ud83c\uddea Venezuelan", "language_codes": ["es"]}, {"display_name": "Pan-Latin American", "language_codes": ["es", "pt", "en"]}, {"display_name": "Other (Central American)", "language_codes": ["es", "en"]}, {"display_name": "Other (South American)", "language_codes": ["es", "pt"]}]}, {"category_name_en": "Asia > East", "children": [{"display_name": "\ud83c\udde8\ud83c\uddf3 Chinese", "language_codes": ["zh"]}, {"display_name": "\ud83c\udde8\ud83c\uddf3 Chinese > China > Cantonese (\u7ca4)", "language_codes": ["zh-Hans"]}, {"display_name": "\ud83c\udde8\ud83c\uddf3 Chinese > China > Shandong (\u9c81)", "language_codes": ["zh-Hans"]}, {"display_name": "\ud83c\udde8\ud83c\uddf3 Chinese > China > Shanghai (\u6caa)", "language_codes": ["zh-Hans"]}, {"display_name": "\ud83c\udde8\ud83c\uddf3 Chinese > China > Sichuan (\u5ddd)", "language_codes": ["zh-Hans"]}, {"display_name": "\ud83c\udde8\ud83c\uddf3 Chinese > Dim Sum", "language_codes": ["zh-Hant", "zh-Hans"]}, {"display_name": "\ud83c\udde8\ud83c\uddf3 Chinese > Hotpot", "language_codes": ["zh"]}, {"display_name": "\ud83c\uddf9\ud83c\uddfc Chinese > Taiwanese", "language_codes": ["zh-Hant"]}, {"display_name": "\ud83c\uddef\ud83c\uddf5 Japanese", "language_codes": ["ja"]}, {"display_name": "\ud83c\uddef\ud83c\uddf5 Japanese > Izakaya", "language_codes": ["ja"]}, {"display_name": "\ud83c\uddef\ud83c\uddf5 Japanese > Ramen (\ud83c\udf5c)", "language_codes": ["ja"]}, {"display_name": "\ud83c\uddef\ud83c\uddf5 Japanese > Sushi (\ud83c\udf63)", "language_codes": ["ja"]}, {"display_name": "\ud83c\uddef\ud83c\uddf5 Japanese > Teppanyaki", "language_codes": ["ja"]}, {"display_name": "\ud83c\uddf0\ud83c\uddf7\ud83c\uddf0\ud83c\uddf5 Korean", "language_codes": ["ko"]}, {"display_name": "\ud83c\uddf0\ud83c\uddf7\ud83c\uddf0\ud83c\uddf5 Korean > BBQ", "language_codes": ["ko"]}, {"display_name": "Pan-East Asian", "language_codes": ["zh", "ja", "ko"]}]}, {"category_name_en": "Asia > South", "children": [{"display_name": "\ud83c\udde7\ud83c\udde9 Bangladeshi", "language_codes": ["bn"]}, {"display_name": "\ud83c\uddee\ud83c\uddf3 Indian", "language_codes": ["hi", "en"]}, {"display_name": "\ud83c\uddee\ud83c\uddf3 Indian > South", "language_codes": ["ta", "te", "kn", "ml", "en"]}, {"display_name": "\ud83c\uddf5\ud83c\uddf0 Pakistani", "language_codes": ["ur"]}, {"display_name": "\ud83c\uddf1\ud83c\uddf0 Sri Lankan", "language_codes": ["si", "ta"]}, {"display_name": "Pan-Indian", "language_codes": ["en"]}]}, {"category_name_en": "Asia > Southeast", "children": [{"display_name": "\ud83c\uddf2\ud83c\uddf2 Burmese", "language_codes": ["my"]}, {"display_name": "\ud83c\uddf0\ud83c\udded Cambodian", "language_codes": ["km"]}, {"display_name": "\ud83c\uddf5\ud83c\udded Filipino", "language_codes": ["tl", "en"]}, {"display_name": "\ud83c\uddee\ud83c\udde9 Indonesian", "language_codes": ["id"]}, {"display_name": "\ud83c\uddf1\ud83c\udde6 Lao", "language_codes": ["lo"]}, {"display_name": "\ud83c\uddf2\ud83c\uddfe Malaysian", "language_codes": ["ms", "zh"]}, {"display_name": "\ud83c\uddf8\ud83c\uddec Singaporean", "language_codes": ["en", "zh", "ms", "ta"]}, {"display_name": "\ud83c\uddf9\ud83c\udded Thai", "language_codes": ["th"]}, {"display_name": "\ud83c\uddfb\ud83c\uddf3 Vietnamese", "language_codes": ["vi"]}, {"display_name": "Pan-Southeast Asian", "language_codes": ["ms", "km", "id", "lo", "ms", "my", "en", "th", "vi"]}, {"display_name": "Other (Southeast Asian)", "language_codes": ["ms", "km", "id", "lo", "ms", "my", "en", "th", "vi"]}]}, {"category_name_en": "Asia > Other", "children": [{"display_name": "\ud83c\udde6\ud83c\uddeb Afghan", "language_codes": ["ps", "fa-AF", "en"]}, {"display_name": "\ud83c\uddf2\ud83c\uddf3 Mongolian", "language_codes": ["mn"]}, {"display_name": "\ud83c\uddf3\ud83c\uddf5 Nepalese", "language_codes": ["ne", "en", "hi"]}, {"display_name": "Other (Asian)", "language_codes": ["zh", "ja", "ko", "th", "vi"]}, {"display_name": "Other (Central Asian)", "language_codes": ["kk", "ky", "tg", "tk", "uz"]}, {"display_name": "Other (South-Central Asian & Himalayan)", "language_codes": ["ne", "hi", "bn", "pa", "ur", "ta", "si", "bo", "ps"]}]}, {"category_name_en": "Europe > Central & West", "children": [{"display_name": "\ud83c\udde6\ud83c\uddf9 Austrian", "language_codes": ["de"]}, {"display_name": "\ud83c\udde7\ud83c\uddea Belgian", "language_codes": ["nl", "fr", "de", "en"]}, {"display_name": "\ud83c\udde8\ud83c\uddff Czech", "language_codes": ["cs"]}, {"display_name": "\ud83c\uddf3\ud83c\uddf1 Dutch", "language_codes": ["nl"]}, {"display_name": "\ud83c\uddeb\ud83c\uddf7 French", "language_codes": ["fr"]}, {"display_name": "\ud83c\udde9\ud83c\uddea German", "language_codes": ["de"]}, {"display_name": "\ud83c\udded\ud83c\uddfa Hungarian", "language_codes": ["hu"]}, {"display_name": "\ud83c\uddf5\ud83c\uddf1 Polish", "language_codes": ["pl"]}, {"display_name": "\ud83c\uddf8\ud83c\uddf0 Slovak", "language_codes": ["sk"]}, {"display_name": "\ud83c\udde8\ud83c\udded Swiss", "language_codes": ["gsw", "fr", "it"]}]}, {"category_name_en": "Europe > Eastern & Caucasian", "children": [{"display_name": "\ud83c\uddec\ud83c\uddea Georgian", "language_codes": ["ka", "ru"]}, {"display_name": "\ud83c\uddf7\ud83c\uddfa Russian", "language_codes": ["ru"]}, {"display_name": "\ud83c\uddfa\ud83c\udde6 Ukrainian", "language_codes": ["uk"]}, {"display_name": "Other (Caucasian)", "language_codes": ["hy", "az"]}, {"display_name": "Other (Eastern European)", "language_codes": ["et", "lv", "lt", "be", "bg", "ro", "ru", "uk"]}]}, {"category_name_en": "Europe > Nordic & North Atlantic", "children": [{"display_name": "\ud83c\uddec\ud83c\udde7 British", "language_codes": ["en"]}, {"display_name": "\ud83c\udde9\ud83c\uddf0 Danish", "language_codes": ["da"]}, {"display_name": "\ud83c\uddee\ud83c\uddea Irish", "language_codes": ["en"]}, {"display_name": "New Nordic", "language_codes": ["da", "fi", "is", "nb", "sv"]}, {"display_name": "\ud83c\uddf3\ud83c\uddf4 Norwegian", "language_codes": ["nb"]}, {"display_name": "\ud83c\uddf8\ud83c\uddea Swedish", "language_codes": ["sv"]}, {"display_name": "Pan-Scandinavian", "language_codes": ["da", "nb", "sv"]}, {"display_name": "Other (Nordic)", "language_codes": ["fi", "is"]}]}, {"category_name_en": "Europe > Southern & Mediterranean", "children": [{"display_name": "\ud83c\uddec\ud83c\uddf7 Greek", "language_codes": ["el"]}, {"display_name": "\ud83c\uddee\ud83c\uddf9 Italian", "language_codes": ["it"]}, {"display_name": "\ud83c\uddf5\ud83c\uddf9 Portuguese", "language_codes": ["pt"]}, {"display_name": "\ud83c\uddea\ud83c\uddf8 Spanish", "language_codes": ["es"]}, {"display_name": "\ud83c\uddea\ud83c\uddf8 Spanish > Tapas", "language_codes": ["es"]}, {"display_name": "Pan-Mediterranean", "language_codes": ["ar", "el", "en", "es", "fr", "he", "hr", "it", "mk", "pt", "sl", "tr"]}, {"display_name": "Other (Balkan)", "language_codes": ["sq", "sr", "hr", "bs", "bg", "ro", "el", "tr", "mk"]}]}, {"category_name_en": "Europe > Other", "children": [{"display_name": "Pan-European", "language_codes": ["en"]}]}, {"category_name_en": "Middle Eastern & North African", "children": [{"display_name": "\ud83c\uddee\ud83c\uddf1 Israeli", "language_codes": ["he", "en", "ar"]}, {"display_name": "\ud83c\uddf1\ud83c\udde7 Lebanese", "language_codes": ["ar"]}, {"display_name": "Middle Eastern > Kebab (\ud83e\udd59)", "language_codes": ["tr"]}, {"display_name": "\ud83c\uddf2\ud83c\udde6 Moroccan", "language_codes": ["ar"]}, {"display_name": "\ud83c\uddee\ud83c\uddf7 Persian", "language_codes": ["fa"]}, {"display_name": "\ud83c\uddf9\ud83c\uddf7 Turkish", "language_codes": ["tr"]}, {"display_name": "Pan-Middle Eastern", "language_codes": ["ar", "fa", "he"]}, {"display_name": "Other (Middle Eastern)", "language_codes": ["ar", "fa", "he"]}, {"display_name": "Other (North African)", "language_codes": ["ar", "fr"]}]}, {"category_name_en": "Oceanian", "children": [{"display_name": "\ud83c\udde6\ud83c\uddfa\ud83c\uddf3\ud83c\uddff Australian & New Zealand", "language_codes": ["en"]}, {"display_name": "Hawaiian > Poke", "language_codes": ["en", "haw"]}, {"display_name": "Other (Pacific Island)", "language_codes": ["en"]}]}, {"category_name_en": "Other", "children": [{"display_name": "Other", "language_codes": ["en"]}]}];

const languageDisplayNameData = {"af": "Afrikaans", "am": "Amharic", "ar": "Arabic", "az": "Azerbaijani", "be": "Belarusian", "bg": "Bulgarian", "bm": "Bambara", "bn": "Bangla", "bo": "Tibetan", "bs": "Bosnian", "cs": "Czech", "da": "Danish", "de": "German", "el": "Greek", "en": "English", "es": "Spanish", "et": "Estonian", "fa": "Persian", "fa-AF": "Dari", "ff": "Fula", "fi": "Finnish", "fr": "French", "gsw": "Swiss German", "ha": "Hausa", "haw": "Hawaiian", "he": "Hebrew", "hi": "Hindi", "hr": "Croatian", "hu": "Hungarian", "hy": "Armenian", "id": "Indonesian", "ig": "Igbo", "is": "Icelandic", "it": "Italian", "ja": "Japanese", "ka": "Georgian", "kk": "Kazakh", "km": "Khmer", "kn": "Kannada", "ko": "Korean", "kri": "Krio", "ky": "Kyrgyz", "lo": "Lao", "lt": "Lithuanian", "lv": "Latvian", "mk": "Macedonian", "ml": "Malayalam", "mn": "Mongolian", "ms": "Malay", "my": "Burmese", "nb": "Norwegian Bokm\u00e5l", "ne": "Nepali", "nl": "Dutch", "pa": "Punjabi", "pl": "Polish", "ps": "Pashto", "pt": "Portuguese", "ro": "Romanian", "ru": "Russian", "si": "Sinhala", "sk": "Slovak", "sl": "Slovenian", "sq": "Albanian", "sr": "Serbian", "ss": "Swati", "sv": "Swedish", "sw": "Swahili", "ta": "Tamil", "te": "Telugu", "tg": "Tajik", "th": "Thai", "tk": "Turkmen", "tl": "Tagalog", "tr": "Turkish", "uk": "Ukrainian", "ur": "Urdu", "uz": "Uzbek", "vi": "Vietnamese", "wo": "Wolof", "yo": "Yoruba", "zh": "Chinese (unknown)", "zh-Hans": "Chinese (Simplified)", "zh-Hant": "Chinese (Traditional)", "zu": "Zulu"};
