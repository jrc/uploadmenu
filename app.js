// Google Place autocomplete object, needed by submit handler
let autocomplete = null;

/* Helpers */

const slugify = (str, maxLength) => {
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

function showButtonSpinner() {
    const [submitButton, buttonSpinner, buttonText] = ['submit-button', 'button-spinner', 'button-text']
        .map(id => document.getElementById(id));

    submitButton.disabled = true;
    buttonSpinner.classList.remove('d-none');
    buttonText.textContent = 'Uploading…';
}

function hideButtonSpinner() {
    const [submitButton, buttonSpinner, buttonText] = ['submit-button', 'button-spinner', 'button-text']
        .map(id => document.getElementById(id));

    submitButton.disabled = false;
    buttonSpinner.classList.add('d-none');
    buttonText.textContent = 'Submit';
}

// Function to show the success alert
function showSuccessAlert() {
    const container = document.getElementById('success-alert-container');
    container.removeAttribute('hidden');
    setTimeout(hideSuccessAlert, 10000); // Hide after 10 seconds
}

// Function to hide the success alert
function hideSuccessAlert() {
    const container = document.getElementById('success-alert-container');
    container.setAttribute('hidden', 'true');
}

function getCountryCodeFromGooglePlace(place) {
    if (place && place.address_components) {
        const countryComponent = place.address_components.find((component) =>
            component.types.includes('country')
        );
        if (countryComponent) {
            return countryComponent.short_name;
        }
    }
    return null;
}

function getAllLanguageDicts() {
    const allLanguageCodes = [...new Set(Object.values(countryToLanguagesData).flat())];
    const intlDisplayNames = new Intl.DisplayNames([navigator.language], { type: 'language' });

    const languageDicts = allLanguageCodes.reduce((dicts, code) => {
        const displayName = intlDisplayNames.of(code);
        // Filter out unsupported languages (with no display names)
        if (displayName !== code) {
            dicts[code] = { code, displayName };
        }
        return dicts;
    }, {});

    return Object.values(languageDicts);
}


/* Main functions */

// Configure the SDK with your AWS credentials
AWS.config.update({
    accessKeyId: 'AKIA4A4KQJ74GPF37HBZ',
    secretAccessKey: 'qw3nX2s/pVkqKESntdt8KvEwSR4yvzhWMP6Yp8/Y',
    region: 'us-east-1'
});

function initializePlaceAutocompleteInputElement() {
    // Google Places API initialization code
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAOOLkyoR2VO_RGuhGyZBdE7T2WXHJvrbo&libraries=places&callback=initializeAutocomplete';
    script.defer = true;

    document.body.appendChild(script);
}

function initializeCuisineSelectOptions() {
    const cuisineSelectElement = document.getElementById('cuisine');

    cuisineSelectElement.innerHTML = '';

    // Start with an empty option for the "no selection" case
    const dummyOption = new Option();
    cuisineSelectElement.appendChild(dummyOption);

    cuisinesData.forEach((category) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category.category_name_en;

        category.children.map((cuisine) => {
            const option = new Option(cuisine.cuisine_name_en, cuisine.cuisine_id);
            optgroup.appendChild(option);
        });

        cuisineSelectElement.appendChild(optgroup);
    });
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
                    radius: 5000,
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
    const languagesSelectElement = document.getElementById('languages');

    let specifiedLanguageCodes = [];

    // First add the language(s) from the selected cuisine
    const selectedCuisineId = cuisineSelectElement.value;
    if (selectedCuisineId) {
        const cuisine = cuisinesData
            .flatMap((category) => category.children)
            .find((cuisine) => cuisine.cuisine_id === selectedCuisineId);

        for (const c of cuisine.language_codes) {
            const cleanedCodes = c.map(code => code.match(/[a-zA-Z]+/)[0]);
            specifiedLanguageCodes.push(...cleanedCodes);
        }
    }

    // Then add the language(s) of selected place's country
    const place = autocomplete.getPlace();
    if (place) {
        const placeCountryCode = getCountryCodeFromGooglePlace(place);
        console.log('Country Code (from selected place):', placeCountryCode);

        if (placeCountryCode) {
            for (const c of countryToLanguagesData[placeCountryCode]) {
                if (!specifiedLanguageCodes.includes(c)) {
                    specifiedLanguageCodes.push(c);
                }
            }
        }
    }

    // Get display names for language codes
    const languageDicts = getAllLanguageDicts();

    // Sort language codes by display name
    languageDicts.sort((a, b) =>
        a.displayName.localeCompare(b.displayName)
    );

    // Move specified language codes to the front
    const reorderedLanguageCodes = specifiedLanguageCodes.concat(
        languageDicts
            .map((obj) => obj.code)
            .filter((code) => !specifiedLanguageCodes.includes(code))
    );

    // Clear the select element
    languagesSelectElement.innerHTML = '';

    // Populate select element
    reorderedLanguageCodes.forEach((code) => {
        const option = document.createElement("option");
        const displayName = languageDicts.find((obj) => obj.code === code).displayName;
        option.text = displayName;
        option.value = code;
        languagesSelectElement.appendChild(option);
    });
}


/* Initialization */

// This executes when the initial HTML document has been loaded and parsed
document.addEventListener('DOMContentLoaded', () => {
    initializePlaceAutocompleteInputElement();
    initializeCuisineSelectOptions();
});

// This executes when the entire web page, including all external resources, has finished loading
window.addEventListener('load', async () => {
    updateLanguageSelectElement();
});

async function handleSubmit(fileData, fileName, formDict) {
    // Show the spinner
    showButtonSpinner();

    try {
        // Upload file to S3
        const s3Params = {
            Bucket: 'us.jrcpl.foodtbd.uploadmenu',
            Key: fileName,
            Body: fileData
        };

        // Create an instance of the S3 service
        const s3 = new AWS.S3();
        await s3.upload(s3Params).promise();

        // Store data in DynamoDB
        const dynamoDBParams = {
            TableName: 'us.jrcpl.foodtbd.uploadmenu',
            Item: {
                id: uuidv4(),
                filename: fileName,
                ...formDict
            },
        };
        // Create an instance of the DynamoDB service
        const dynamoDB = new AWS.DynamoDB.DocumentClient();
        await dynamoDB.put(dynamoDBParams).promise();

        // Hide the spinner
        hideButtonSpinner()

        // Show the success alert after form submission
        showSuccessAlert();
    } catch (error) {
        console.error(error);

        // Hide the spinner in case of error
        hideButtonSpinner()

        // Show the error alert after form submission
        alert(error);
        return; // Abort further execution
    }
}

// Form submission
document.getElementById('upload-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const formElement = event.target;
    const formData = new FormData(formElement);

    // Extract form fields
    const formDict = {};
    for (const [name, value] of formData.entries()) {
        if (name === 'languages') {
            formDict[name] = formData.getAll(name);
        } else if (name !== 'photo') {
            formDict[name] = value;
        }
    }

    // Include details of the selected place
    const place = autocomplete.getPlace();
    formDict['place_id'] = place.place_id;
    formDict['place_name'] = place.name;
    formDict['place_country_code'] = getCountryCodeFromGooglePlace(place);

    const uuidNoHyphens = uuidv4().replace(/-/g, '');
    const placeCountryCodeOrQuestionMarks = formDict['place_country_code'] || '??';

    const originalFileName = formData.get('photo').name;
    const fileExtension = originalFileName.split('.').pop();

    const fileName = `${uuidNoHyphens}_${placeCountryCodeOrQuestionMarks}_${slugify(place.name, 24)}.${fileExtension}`;
    formDict['filename'] = fileName;

    console.log('Form Dict:', formDict);

    await handleSubmit(formData.get('photo'), fileName, formDict);
});
