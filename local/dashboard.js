function dashboard() {
    postcodeHeading();
    dashboardDarklight();
}




function fetchInfo() {


    fetch('https://api.postcodes.io/postcodes/' + cleanPostcode)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText
                })
            }
        })
        .then(data => {
            console.log(data)
        });

}

function displayCountry() {
    fetch('https://api.postcodes.io/postcodes/' + cleanPostcode)
        .then(function(response) {
            return response.json;
        })
        .then(function(data) {
            console.log(data);
        });
}

function processPostcodeData() {
    var postcodeData = JSON.parse(posts);
    console.log(postcodeData);
}


const loadPostcodeData = async() => {

    const response = await fetch('https://api.postcodes.io/postcodes/' + cleanPostcode);

    const posts = await response.json();

    return posts;

    processPostcodeData();

};