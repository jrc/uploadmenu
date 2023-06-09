// let currentCountryCode = null;
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
            // if (place && place.address_components) {
            //     const countryComponent = place.address_components.find(component =>
            //         component.types.includes('country')
            //     );
            //     if (countryComponent) {
            //         const countryCode = countryComponent.short_name;
            //         console.log('Country Code (from selected place):', countryCode);
            //         updateLanguageSelectElement(countryCode);

            //     } else {
            //         console.error('Country not found for the selected place.');
            //     }
            // }
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

                // // Also use latitude/longitude to get the country code
                // var geocoder = new google.maps.Geocoder();
                // var latlng = new google.maps.LatLng(latitude, longitude);

                // geocoder.geocode({ "location": latlng }, function (results, status) {
                //     if (status === google.maps.GeocoderStatus.OK) {
                //         if (results[0]) {
                //             currentCountryCode = results[0].address_components.find(function (component) {
                //                 return component.types.includes("country");
                //             }).short_name;

                //             console.log('Country Code (from geolocation):', currentCountryCode);
                //             updateLanguageSelectElement();
                //         }
                //     }
                // });
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

    // Iterate over the dictionary keys
    for (const key in cuisinesData) {
        if (cuisinesData.hasOwnProperty(key)) {
            const option = document.createElement('option');
            option.value = key;
            option.text = cuisinesData[key].category_name;
            cuisineSelectElement.add(option);
        }
    }
}

function updateLanguageSelectElement() {
    const cuisineSelectElement = document.getElementById('cuisine');
    const languagesSelectElement = document.getElementById('languages');

    let languageCodes = [];

    // First add the language(s) from the selected cuisine
    const selectedCuisineId = cuisineSelectElement.value;
    if (selectedCuisineId && cuisinesData[selectedCuisineId].language_codes) {
        for (const c of cuisinesData[selectedCuisineId].language_codes) {
            languageCodes.push(c);
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
                    if (!languageCodes.includes(c)) {
                        languageCodes.push(c);
                    }
                }
            } else {
                console.error('Country not found for the selected place.');
            }
        }
    }

    // Finally add the language(s) of user's current country (from Geolocation)
    // if (currentCountryCode) {
    //     for (const c of countryToLanguagesData[currentCountryCode]) {
    //         if (!languageCodes.includes(c)) {
    //             languageCodes.push(c);
    //         }
    //     }
    // }

    // Clear the current list of languages
    languagesSelectElement.innerHTML = '';

    const displayNames = new Intl.DisplayNames(['en'], { type: 'language' });

    for (const languageCode of languageCodes) {
        const displayName = displayNames.of(languageCode);

        const option = document.createElement('option');
        option.value = languageCode;
        option.text = displayName;
        languagesSelectElement.add(option);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initializePlaceAutocompleteInputElement();
    initializeCuisineSelectOptions();
    updateLanguageSelectElement();
});

document.getElementById('upload-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const form = event.target;
    const formData = new FormData(form);

    // Retrieve the selected place from the auto-complete field
    const place = document.getElementById('place-input').value;
    formData.append('place', place); // Append the selected place to the form data

    const selectedLanguages = Array.from(document.getElementById('language').selectedOptions).map(option => option.value);
    formData.append('languages', selectedLanguages.join(',')); // Append selected languages to the form data

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
        .then(function (response) {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Error: ' + response.status);
        })
        .then(function (responseText) {
            console.log('Response:', responseText);
            alert('Upload successful!');
            form.reset();
        })
        .catch(function (error) {
            console.error('Error:', error);
            alert('Upload failed!');
        });
});
