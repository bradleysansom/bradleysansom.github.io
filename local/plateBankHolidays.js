function plateBankHolidays() {


    var fetchUrl = "https://date.nager.at/Api/v2/NextPublicHolidays/GB";
    fetch(fetchUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "mode": "no-cors"
        }

    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });

}