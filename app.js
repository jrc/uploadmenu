// Configure the SDK with your AWS credentials
AWS.config.update({
    accessKeyId: 'AKIA4A4KQJ74GPF37HBZ',
    secretAccessKey: 'qw3nX2s/pVkqKESntdt8KvEwSR4yvzhWMP6Yp8/Y',
    region: 'us-east-1'
});


// Declare Google Places autocomplete object outside of form submit handler
let autocomplete = null;


function initializePlaceAutocompleteInputElement() {
    // Create a script element to load the Google Places API
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAOOLkyoR2VO_RGuhGyZBdE7T2WXHJvrbo&libraries=places&callback=initializeAutocomplete';
    script.defer = true;

    // Append the script element to the document
    document.body.appendChild(script);

    // Callback to initialize the auto-complete after Google Maps JavaScript API is loaded
    window.initializeAutocomplete = function () {
        const placeInput = document.getElementById('place-input');

        const options = {
            // Restrict the results to restaurants only
            types: ['restaurant'],
            // Retrieve fewer fields in order to reduce costs
            fields: ['name', 'address_components', 'place_id']
        };

        // Create the auto-complete object using the Maps JavaScript API
        // https://developers.google.com/maps/documentation/javascript/place-autocomplete
        autocomplete = new google.maps.places.Autocomplete(placeInput, options);

        autocomplete.addListener('place_changed', function () {
            updateLanguageSelectElement();
        });

        // Get the user's location using Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log('Location:', latitude, longitude);

                const circle = new google.maps.Circle({
                    center: { lat: latitude, lng: longitude },
                    radius: 5000 // 5 km, "sensible default for Place Autocomplete"
                });

                // Change the search area on an existing Autocomplete object
                autocomplete.setBounds(circle.getBounds());
            }, function (error) {
                console.error(error.message);
            });
        }
    };
}

function initializeCuisineSelectOptions() {
    const cuisineSelectElement = document.getElementById('cuisine');

    // Clear any existing options
    cuisineSelectElement.innerHTML = '';

    const option = document.createElement('option');
    cuisineSelectElement.add(option);

    // Populate the select element using forEach and map
    cuisinesData.forEach(function (category) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category.category_name_en;

        category.children.map(function (cuisine) {
            const option = new Option(cuisine.cuisine_name_en, cuisine.cuisine_id);
            optgroup.appendChild(option);
        });

        cuisineSelectElement.appendChild(optgroup);
    });
}

function getCountryCodeFromGooglePlace(place) {
    if (place && place.address_components) {
        const countryComponent = place.address_components.find(component =>
            component.types.includes('country')
        );
        if (countryComponent) {
            return countryComponent.short_name;
        }
    }
    return null;
}

function updateLanguageSelectElement() {
    const cuisineSelectElement = document.getElementById('cuisine');
    const languagesSelectElement = document.getElementById('languages');

    let specifiedLanguageCodes = [];

    // First add the language(s) from the selected cuisine
    const selectedCuisineId = cuisineSelectElement.value;
    if (selectedCuisineId) {
        const cuisine = cuisinesData.flatMap(category => category.children).find(cuisine => cuisine.cuisine_id === selectedCuisineId);
        for (const c of cuisine.language_codes) {
            specifiedLanguageCodes.push(c);
        }
    }

    // Then add the language(s) of selected place's country
    const place = autocomplete.getPlace();

    const countryCode = getCountryCodeFromGooglePlace(place);
    console.log('Country Code (from selected place):', countryCode);

    // Get display names for language codes
    const allLanguageCodes = [...new Set(Object.values(countryToLanguagesData).flat())];
    const cleanedLanguageCodes = allLanguageCodes.map(code => code.split('_')[0]);
    const languageDicts = cleanedLanguageCodes
        // Filter out unsupported languages (with no display names)
        .filter(code => {
            const languageName = new Intl.DisplayNames([navigator.language], { type: 'language' });
            const displayName = languageName.of(code);
            return displayName !== code;
        })
        .map(code => {
            const languageName = new Intl.DisplayNames([navigator.language], { type: 'language' });
            const displayName = languageName.of(code);
            return { code, displayName };
        });

    // Sort language codes by display name
    languageDicts.sort((a, b) => a.displayName.localeCompare(b.displayName));

    // Move specified language codes to the front
    const reorderedLanguageCodes = specifiedLanguageCodes.concat(languageDicts.map(obj => obj.code).filter(code => !specifiedLanguageCodes.includes(code)));

    // Clear the select element
    languagesSelectElement.innerHTML = '';

    // Populate select element
    reorderedLanguageCodes.forEach(code => {
        const option = document.createElement("option");
        const displayName = languageDicts.find(obj => obj.code === code).displayName;
        option.text = displayName;
        option.value = code;
        languagesSelectElement.appendChild(option);
    });
}

// Executes when the initial HTML document has been loaded and parsed
document.addEventListener('DOMContentLoaded', function () {
    initializePlaceAutocompleteInputElement();
    initializeCuisineSelectOptions();
});

// Executes when the entire web page, including all external resources, has finished loading
window.onload = function () {
    updateLanguageSelectElement();
};


function slugify(str, maxLength) {
    let slug = str
        .toLowerCase() // Convert the string to lowercase
        .replace(/[^\w\s-]/g, '') // Remove non-word characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .trim(); // Trim leading/trailing spaces

    if (maxLength && slug.length > maxLength) {
        slug = slug.substring(0, maxLength); // Truncate the slug to the specified maximum length
    }

    return slug;
}

function showButtonSpinner() {
    const submitButton = document.getElementById('submit-button');
    const buttonSpinner = document.getElementById('button-spinner');
    const buttonText = document.getElementById('button-text');

    submitButton.disabled = true;
    buttonSpinner.classList.remove('d-none');
    buttonText.textContent = 'Uploading…';
}

function hideButtonSpinner() {
    const submitButton = document.getElementById('submit-button');
    const buttonSpinner = document.getElementById('button-spinner');
    const buttonText = document.getElementById('button-text');

    submitButton.disabled = false;
    buttonSpinner.classList.add('d-none');
    buttonText.textContent = 'Submit';
}

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
    const fileExtension = originalFileName.split('.').pop(); // Extract the file extension

    const fileName = `${uuidNoHyphens}_${placeCountryCodeOrQuestionMarks}_${slugify(place.name, 24)}.` + fileExtension;
    formDict['filename'] = fileName;

    console.log('Form Dict:', formDict);

    // Show the spinner
    showButtonSpinner();

    try {
        // Upload file to S3
        const s3Params = {
            Bucket: 'us.jrcpl.foodtbd.uploadmenu',
            Key: fileName,
            Body: formData.get('photo')
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
    } catch (error) {
        console.error(error);

        // Hide the spinner in case of error
        hideButtonSpinner()

        // Handle error
        alert(error);
        return; // Abort further execution
    }

    // fetch('/upload', {
    //     method: 'POST',
    //     body: formData
    // })
    //     .then(function (response) {
    //         if (response.ok) {
    //             return response.text();
    //         }
    //         throw new Error('Error: ' + response.status);
    //     })
    //     .then(function (responseText) {
    //         console.log('Response:', responseText);
    //         alert('Upload successful!');
    //         form.reset();
    //     })
    //     .catch(function (error) {
    //         console.error('Error:', error);
    //         alert('Upload failed!');
    //     });
});
