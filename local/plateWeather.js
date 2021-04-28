function plateWeather() {
    var latitude = localStorage.getItem('latitude');
    var longitude = localStorage.getItem('longitude');

    var apiKey = prompt('Enter weather API key to use weather panel');
    var weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;
    console.log(weatherApiUrl);
}