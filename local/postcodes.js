function sendToUrl() {
    var appendToUrl = "http://bradleysansom.github.io/local/dashboard.html" + document.getElementByName("userPostcode")[0].value;
    var sendPostcode = document.getElementById('sendPostcode');
    sendPostcode.action = appendToUrl;
    var url = window.location.href;
    var postcodeCurrent = url.split('=')[0];
    console.log(postcodeCurrent);
}



/*
var userPostcode = document.getElementById("userPostcode").value;
fetch('https://api.postcodes.io/postcodes/' + userPostcode)
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
        // Here's a list of repos!
        console.log(data)
    });


    */