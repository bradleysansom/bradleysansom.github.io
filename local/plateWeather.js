function plateWeather() {
    var latitude = localStorage.getItem('latitude');
    var longitude = localStorage.getItem('longitude');

    var weatherFirstUrl = "https://www.metaweather.com/api//api/location/search/?lattlong=" + latitude + "," + longitude;
    console.log(weatherFirstUrl);
    fetch(weatherFirstUrl, { "mode": "no-cors", "content-type": "application/json", "origin": "https://bradleysansom.github.io/" })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });
}