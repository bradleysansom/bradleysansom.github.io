function plateWeather() {
    var city = localStorage.getItem('admin_district');

    var weatherFirstUrl = encodeURI("https://goweather.herokuapp.com/weather/" + city);
    console.log(weatherFirstUrl);
    fetch(weatherFirstUrl)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else if (response.status === 404) {
                console.log("Weather not found");
                document.getElementById('weather').style.display = "none";
            }
        })
        .then(data => {
            console.log(data);
            var stringOfWeather = JSON.stringify(data);
            console.log(stringOfWeather);
            var arrayOfWeather = JSON.parse(stringOfWeather);
            console.log(arrayOfWeather);
            localStorage.setItem('arrayOfWeather', arrayOfWeather);
            var currentWeatherCondition = arrayOfWeather.description;
            var currentWeatherTemperature = arrayOfWeather.temperature;
            var currentWeatherWind = arrayOfWeather.wind;
            var todaysDate = new Date();
            var tomorrowsDate = new Date(todaysDate);
            tomorrowsDate.setDate(tomorrowsDate.getDate() + 1);
            console.log(tomorrowsDate);
            var dayAfterDate = new Date(todaysDate);
            dayAfterDate.setDate(dayAfterDate.getDate() + 2);
            var dayAfterThatDate = new Date(todaysDate);
            dayAfterThatDate.setDate(dayAfterThatDate.getDate() + 3);

            function findDay(date) {
                if (date === 0) {
                    return "Sun";
                } else if (date === 1) {
                    return "Mon";
                } else if (date === 2) {
                    return "Tues";
                } else if (date === 3) {
                    return "Wed";
                } else if (date === 4) {
                    return "Thu";
                } else if (date === 5) {
                    return "Fri";
                } else if (date === 6) {
                    return "Sat";
                }
            }
            var todaysDay = findDay(todaysDate.getDay());
            console.log(todaysDay);
            var tomorrowsDay = findDay(tomorrowsDate.getDay());
            var dayAfterDay = findDay(dayAfterDate.getDay());
            var dayAfterThatDay = findDay(dayAfterThatDate.getDay());
            var tomorrowWeatherTemperature = arrayOfWeather.forecast['0'].temperature;
            var tomorrowWeatherWind = arrayOfWeather.forecast['0'].wind;
            var dayAfterWeatherTemperature = arrayOfWeather.forecast['1'].temperature;
            var dayAfterWeatherWind = arrayOfWeather.forecast['1'].wind;
            var dayAfterThatWeatherTemperature = arrayOfWeather.forecast['2'].temperature;
            var dayAfterThatWeatherWind = arrayOfWeather.forecast['2'].wind;
            document.getElementById('todaysDay').innerHTML = todaysDay;
            document.getElementById('todaysTemperature').innerHTML = currentWeatherTemperature;
            document.getElementById('todaysWind').innerHTML = currentWeatherWind;
            document.getElementById('todaysDescription').innerHTML = currentWeatherCondition;
            document.getElementById('tomorrowsDay').innerHTML = tomorrowsDay;
            document.getElementById('tomorrowsTemperature').innerHTML = tomorrowWeatherTemperature;
            document.getElementById('tomorrowsWind').innerHTML = tomorrowWeatherWind;
            document.getElementById('dayAfterDay').innerHTML = dayAfterDay;
            document.getElementById('dayAfterTemperature').innerHTML = dayAfterWeatherTemperature;
            document.getElementById('dayAfterWind').innerHTML = dayAfterWeatherWind;
            document.getElementById('dayAfterThatDay').innerHTML = dayAfterThatDay;
            document.getElementById('dayAfterThatTemperature').innerHTML = dayAfterThatWeatherTemperature;
            document.getElementById('dayAfterThatWind').innerHTML = dayAfterThatWeatherWind;

        });
}