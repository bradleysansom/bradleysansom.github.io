function plateBankHolidays() {
    var nation = localStorage.getItem('country');

    var fetchUrl = "https://www.gov.uk/bank-holidays.json";
    fetch('https://www.gov.uk/bank-holidays.json')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else if (response.status === 404) {
                console.log("Bank holiday data not found");
                document.getElementById('plateBankHolidays').style.display = "none";
            }
        })
        .then(data => {
            console.log(data);
            var stringOfHolidays = JSON.stringify(data);
            console.log(stringOfHolidays);
            var arrayOfHolidays = JSON.parse(stringOfHolidays);
            console.log(arrayOfHolidays);
            localStorage.setItem('arrayOfHolidays', arrayOfHolidays);
            if (nation === "England" || nation === "Wales") {
                var holidays = arrayOfHolidays['england-and-wales'].events;
            } else if (nation === "Scotland") {
                var holidays = arrayOfHolidays.scotland.events;
            } else if (nation === "Northern Ireland") {
                var holidays = arrayOfHolidays['northern-ireland'].events;
            }
            console.log(holidays);
            var todaysDate = new Date();
            console.log(todaysDate);
            var following = holidays.filter(function (records) {
                var checkDate = new Date(records.date);
                return (checkDate >= todaysDate);
            });
            console.log(following);
            var nextBankHoliday = following['0'];
            var nextBankHolidayName = nextBankHoliday.title;
            var nextBankHolidayDate = nextBankHoliday.date;
            var nextBankHolidayDateSplit = nextBankHolidayDate.split("-");
            console.log(nextBankHolidayDateSplit);
            var nextBankHolidayDateYear = nextBankHolidayDateSplit['0'];
            var nextBankHolidayDateMonth = nextBankHolidayDateSplit['1'];
            var nextBankHolidayDateMonthName = "";
            if (nextBankHolidayDateMonth === "01") {
                nextBankHolidayDateMonthName = "January";
            } else if (nextBankHolidayDateMonth === "02") {
                nextBankHolidayDateMonthName = "February";
            } else if (nextBankHolidayDateMonth === "03") {
                nextBankHolidayDateMonthName = "March";
            } else if (nextBankHolidayDateMonth === "04") {
                nextBankHolidayDateMonthName = "April";
            } else if (nextBankHolidayDateMonth === "05") {
                nextBankHolidayDateMonthName = "May";
            } else if (nextBankHolidayDateMonth === "06") {
                nextBankHolidayDateMonthName = "June";
            } else if (nextBankHolidayDateMonth === "07") {
                nextBankHolidayDateMonthName = "July";
            } else if (nextBankHolidayDateMonth === "08") {
                nextBankHolidayDateMonthName = "August";
            } else if (nextBankHolidayDateMonth === "09") {
                nextBankHolidayDateMonthName = "September";
            } else if (nextBankHolidayDateMonth === "10") {
                nextBankHolidayDateMonthName = "October";
            } else if (nextBankHolidayDateMonth === "11") {
                nextBankHolidayDateMonthName = "November";
            } else if (nextBankHolidayDateMonth === "12") {
                nextBankHolidayDateMonthName = "December";
            };


            var nextBankHolidayDateDay = nextBankHolidayDateSplit['2'];
            console.log(nextBankHolidayDateDay + " " + nextBankHolidayDateMonthName + " " + nextBankHolidayDateYear);
            document.getElementById('nation').innerHTML = nation;
            document.getElementById('bankHolidayName').innerHTML = nextBankHolidayName;
            document.getElementById('bankHolidayDay').innerHTML = nextBankHolidayDateDay;
            document.getElementById('bankHolidayMonth').innerHTML = nextBankHolidayDateMonthName;
            document.getElementById('bankHolidayYear').innerHTML = nextBankHolidayDateYear;
        });

}