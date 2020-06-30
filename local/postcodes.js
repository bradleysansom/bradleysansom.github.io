userPostcode = input;
fetch('https://api.postcodes.io/postcodes/' + userPostcode)
    .then(response => response.json())
    .then(data => {
        // Here's a list of repos!
        console.log(data)
    });