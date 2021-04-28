function plateBankHolidays() {
    var country = "GB";
    var nation = localStorage.getItem('country');
    if (nation == "England") {

    } else if (nation == "Scotland") {

    } else if (nation == "Wales") {

    } else if (nation == "Northern Ireland") {

    };

    var fetchUrl = "https://date.nager.at/Api/v2/NextPublicHolidays/" + country;
    fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });
}