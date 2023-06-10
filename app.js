// Configure the SDK with your AWS credentials
AWS.config.update({
    accessKeyId: 'AKIA4A4KQJ74GPF37HBZ',
    secretAccessKey: 'qw3nX2s/pVkqKESntdt8KvEwSR4yvzhWMP6Yp8/Y',
    region: 'us-east-1'
});


let autocomplete = null;


function initializePlaceAutocompleteInputElement() {
    const input = document.getElementById('place-input');

    // Create a script element to load the Google Places API
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAOOLkyoR2VO_RGuhGyZBdE7T2WXHJvrbo&libraries=places&callback=initializeAutocomplete';
    script.defer = true;

    // Append the script element to the document
    document.body.appendChild(script);

    // Callback function to initialize the auto-complete after the API is loaded
    window.initializeAutocomplete = function () {
        const options = {
            // Restrict the results to restaurants only
            types: ['restaurant'],
            // Retrieve fewer fields in order to reduce costs
            fields: ['name', 'address_components', 'place_id']
        };

        // Create the auto-complete object using the Maps JavaScript API
        // https://developers.google.com/maps/documentation/javascript/place-autocomplete
        autocomplete = new google.maps.places.Autocomplete(input, options);

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
    if (autocomplete) {
        const place = autocomplete.getPlace();
        if (place && place.address_components) {
            const countryComponent = place.address_components.find(component =>
                component.types.includes('country')
            );
            if (countryComponent) {
                const countryCode = countryComponent.short_name;
                console.log('Country Code (from selected place):', countryCode);

                for (const c of countryToLanguagesData[countryCode]) {
                    if (!specifiedLanguageCodes.includes(c)) {
                        specifiedLanguageCodes.push(c);
                    }
                }
            } else {
                console.error('Country not found for the selected place.');
            }
        }
    }

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

document.addEventListener('DOMContentLoaded', function () {
    initializePlaceAutocompleteInputElement();
    initializeCuisineSelectOptions();
    updateLanguageSelectElement();
});


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

    // Show the spinner
    showButtonSpinner();

    const formElement = event.target;
    const formData = new FormData(formElement);

    try {
        // Extract form fields
        const data = {};
        for (const [name] of formData.entries()) {
            if (name === 'languages') {
                data[name] = formData.getAll(name);
            } else if (name !== 'photo') {
                data[name] = value;
            }
        }
        console.log('Form Data:', data);

        // Upload file to S3
        const file = formData.get('photo');
        const place = autocomplete.getPlace();

        const uuid = uuidv4();
        const uuidNoHyphens = uuid.replace(/-/g, '');

        let placeCountryCode = '??';
        if (place.address_components) {
            const countryComponent = place.address_components.find(component =>
                component.types.includes('country')
            );
            if (countryComponent) {
                placeCountryCode = countryComponent.short_name;
            }
        }
        const fileName = `${uuidNoHyphens}_${placeCountryCode}_${slugify(place.name, 24)}`;
        console.log(fileName);

        const s3Params = {
            Bucket: 'us.jrcpl.foodtbd.uploadmenu',
            Key: fileName,
            Body: file,
        };

        // Create an instance of the S3 service
        const s3 = new AWS.S3();
        await s3.upload(s3Params).promise();

        // Store data in DynamoDB
        const dynamoDBParams = {
            TableName: 'us.jrcpl.foodtbd.uploadmenu',
            Item: {
                id: uuidv4(),
                ...data,
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
