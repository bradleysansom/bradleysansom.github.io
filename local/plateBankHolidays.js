function plateBankHolidays() {


    var fetchUrl = "https://date.nager.at/Api/v2/NextPublicHolidays/GB";
    fetch(fetchUrl, {
        method: "GET",
        headers: {
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin": "https://bradleysansom.github.io"
        }

    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });

}