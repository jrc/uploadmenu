// Google Place autocomplete object, needed by submit handler
let autocomplete = null;

/* Utility functions */

function slugify(str, maxLength) {
    let slug = str
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();

    if (maxLength && slug.length > maxLength) {
        slug = slug.substring(0, maxLength);
    }

    return slug;
}

function getAllLanguageDicts() {
    // Extract all language codes from countryToLanguagesData (in data.js),
    // ignoring any optional script codes
    const allLanguageCodes = [...new Set(Object.values(countryToLanguagesData)
        .flat()
        .map(language => language.split('_')[0]))];

    const intlDisplayNames = new Intl.DisplayNames([navigator.language], { type: 'language' });

    return allLanguageCodes.reduce((dicts, code) => {
        const displayName = intlDisplayNames.of(code);
        if (displayName === code) return dicts; // Skip unsupported languages

        dicts.push({ code, displayName });
        return dicts;
    }, []);
}

function getCountryCodeFromGooglePlace(place) {
    return place?.address_components
        ?.find(component => component.types.includes('country'))
        ?.short_name ?? null;
}


/* UI functions */

function showButtonSpinner() {
    const [submitButton, buttonSpinner, buttonText] = ['submit-button', 'button-spinner', 'button-text']
        .map(id => document.getElementById(id));

    submitButton.disabled = true;
    buttonSpinner.classList.remove('d-none');
    buttonText.textContent = 'Uploading…'; // XXX: LOCALIZABLE STRING
}

function hideButtonSpinner() {
    const [submitButton, buttonSpinner, buttonText] = ['submit-button', 'button-spinner', 'button-text']
        .map(id => document.getElementById(id));

    submitButton.disabled = false;
    buttonSpinner.classList.add('d-none');
    buttonText.textContent = 'Submit'; // XXX: LOCALIZABLE STRING
}

function showSuccessAlert() {
    const container = document.getElementById('success-alert-container');
    container.removeAttribute('hidden');
    setTimeout(hideSuccessAlert, 10000); // Hide after 10 seconds
}

function hideSuccessAlert() {
    const container = document.getElementById('success-alert-container');
    container.setAttribute('hidden', 'true');
}


/* Main functions */

function initializePlaceAutocompleteInputElement() {
    // Google Places API initialization code
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAOOLkyoR2VO_RGuhGyZBdE7T2WXHJvrbo&libraries=places&callback=initializeAutocomplete'; // XXX
    script.defer = true;

    document.body.appendChild(script);
}

function initializeCuisineSelectOptions() {
    const cuisineSelectElement = document.getElementById('cuisine');
    cuisineSelectElement.innerHTML = '';

    // Start with an empty option for the "no selection" case
    const dummyOption = new Option();
    cuisineSelectElement.appendChild(dummyOption);

    for (const category of cuisinesData) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category.category_name_en;

        for (const cuisine of category.children) {
            const option = new Option(cuisine.cuisine_name_en, cuisine.cuisine_id);
            optgroup.appendChild(option);
        }

        cuisineSelectElement.appendChild(optgroup);
    }
}

function initializeAutocomplete() {
    const placeInput = document.getElementById('place-input');
    const options = {
        types: ['restaurant'],
        fields: ['name', 'address_components', 'place_id'],
    };

    autocomplete = new google.maps.places.Autocomplete(placeInput, options);
    autocomplete.addListener('place_changed', updateLanguageSelectElement);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log('Location:', latitude, longitude);

                const circle = new google.maps.Circle({
                    center: { lat: latitude, lng: longitude },
                    radius: 5000, // 5 km (sensible default for Place Autocomplete)
                });

                autocomplete.setBounds(circle.getBounds());
            },
            (error) => {
                console.error(error.message);
            }
        );
    }
}

// Fill out language HTML multi-select element options
function updateLanguageSelectElement() {
    const cuisineSelectElement = document.getElementById('cuisine');

    const suggestedLanguageCodes = [];

    // First suggest languages of the selected cuisine
    const selectedCuisineId = cuisineSelectElement.value;
    if (selectedCuisineId) {
        const cuisine = cuisinesData
            .flatMap(category => category.children)
            .find(cuisine => cuisine.cuisine_id === selectedCuisineId);

        cuisine.language_codes.forEach(languageCode => {
            const c = languageCode.match(/[a-zA-Z]+/)[0];
            suggestedLanguageCodes.push(c);
        });
    }

    // Then suggest languages of the place's country
    const place = autocomplete.getPlace();
    if (place) {
        const placeCountryCode = getCountryCodeFromGooglePlace(place);
        console.log('Country Code (from selected place):', placeCountryCode);

        if (placeCountryCode) {
            countryToLanguagesData[placeCountryCode]
                .forEach(c => {
                    if (!suggestedLanguageCodes.includes(c)) {
                        suggestedLanguageCodes.push(c);
                    }
                });
        }
    }

    // Sort all languages by display name
    const languageDicts = getAllLanguageDicts();
    languageDicts.sort((a, b) => a.displayName.localeCompare(b.displayName));

    // Move the suggested languages to the top of the list
    const orderedLanguageCodes = suggestedLanguageCodes.concat(
        languageDicts.filter(x => !suggestedLanguageCodes.includes(x.code))
            .map(x => x.code)
    );

    const languagesSelectElement = document.getElementById('languages');
    languagesSelectElement.innerHTML = '';

    orderedLanguageCodes.forEach(code => {
        const option = document.createElement("option");
        const displayName = languageDicts.find(x => x.code === code).displayName;
        option.text = displayName;
        option.value = code;
        languagesSelectElement.appendChild(option);
    });
}


/* Initialization */

// This executes when the initial HTML document has been loaded and parsed
document.addEventListener('DOMContentLoaded', () => {
    // Configure the SDK with your AWS credentials
    AWS.config.update({
        accessKeyId: 'AKIA4A4KQJ74GPF37HBZ', // XXX
        secretAccessKey: 'qw3nX2s/pVkqKESntdt8KvEwSR4yvzhWMP6Yp8/Y', // XXX
        region: 'us-east-1'
    });

    initializePlaceAutocompleteInputElement();
    initializeCuisineSelectOptions();
});

// This executes when the entire web page, including all external resources, has finished loading
window.addEventListener('load', async () => {
    updateLanguageSelectElement();
});


// Helper function to upload file to S3
async function uploadToS3(fileData, fileName) {
    const s3Params = {
        Bucket: 'us.jrcpl.foodtbd.uploadmenu',
        Key: fileName,
        Body: fileData
    };

    const s3 = new AWS.S3();
    await s3.upload(s3Params).promise();
}

// Helper function to store data in DynamoDB
async function storeInDynamoDB(fileName, formDict) {
    const dynamoDBParams = {
        TableName: 'us.jrcpl.foodtbd.uploadmenu',
        Item: {
            id: uuidv4(),
            filename: fileName,
            ...formDict
        }
    };

    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    await dynamoDB.put(dynamoDBParams).promise();
}

// Helper function to handle form submission
async function handleSubmit(fileData, fileName, formDict) {
    try {
        showButtonSpinner();

        await uploadToS3(fileData, fileName);
        await storeInDynamoDB(fileName, formDict);

        hideButtonSpinner();
        showSuccessAlert();
    } catch (error) {
        console.error(error);

        hideButtonSpinner();
        alert(error);
        return;
    }
}

// Form submission
document.getElementById('upload-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formElement = event.target;
    const formData = new FormData(formElement);

    // Extract form fields except 'photo'
    const formDict = {};
    for (const [name, value] of formData.entries()) {
        if (name !== 'photo') {
            formDict[name] = value;
        }
    }

    const place = autocomplete.getPlace();
    const placeCountryCode = getCountryCodeFromGooglePlace(place) || '??';

    const uuidNoHyphens = uuidv4().replace(/-/g, '');
    const originalFileName = formData.get('photo').name;
    const fileExtension = originalFileName.split('.').pop();
    const fileName = `${uuidNoHyphens}_${placeCountryCode}_${slugify(place.name, 24)}.${fileExtension}`;

    const formDataWithDetails = {
        ...formDict,
        place_id: place.place_id,
        place_name: place.name,
        place_country_code: placeCountryCode,
        filename: fileName
    };

    console.log('Form Dict:', formDataWithDetails);

    await handleSubmit(formData.get('photo'), fileName, formDataWithDetails);
});
