async function fetchSteps() {
    let response = await fetch("https://opensheet.elk.sh/15wQl0bv14OMuMdzJgjfQIXV2TdJbAsbeibPUQ76URJ4/metrics");
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        var sheet = await response.json();
        // console.log(sheet);
        var mostRecent = sheet.length - 1;
        var mostRecentDay = sheet[mostRecent];
        // console.log(mostRecentDay);
        var stepsMostRecentDay = mostRecentDay.Steps;
        var mostRecentDate = mostRecentDay.Date;
        var mostRecentDateParts = mostRecentDate.split("/");
        var mostRecentDateObject = new Date(+mostRecentDateParts[2], mostRecentDateParts[1] - 1, +mostRecentDateParts[0]);
        var mostRecentDateString = mostRecentDateObject.toString();
        var mostRecentDay = mostRecentDateString.substring(0, 3);
        // console.log("Steps yesterday (", mostRecentDay, ") :", stepsMostRecentDay);
        var dayBefore = mostRecent - 1;
        var dayBeforeDay = sheet[dayBefore];
        var stepsDayBeforeDay = dayBeforeDay.Steps;
        var dayBeforeDate = dayBeforeDay.Date;
        var dayBeforeDateParts = dayBeforeDate.split("/");
        var dayBeforeDateObject = new Date(+dayBeforeDateParts[2], dayBeforeDateParts[1] - 1, +dayBeforeDateParts[0]);
        var dayBeforeDateString = dayBeforeDateObject.toString();
        var dayBeforeDay = dayBeforeDateString.substring(0, 3);
        // console.log("Steps two days ago (", dayBeforeDay, ") :", stepsDayBeforeDay);
        var differenceBetweenDays = stepsMostRecentDay - stepsDayBeforeDay;
        // console.log("Difference", differenceBetweenDays)
        console.log("BOOOOOO", stepsMostRecentDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        document.getElementById("stepsToday").style.display = "initial";
        document.getElementById("stepsTodayCount").innerHTML = stepsMostRecentDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        if (differenceBetweenDays > 0) {
            document.getElementById("stepsTrend").innerHTML = '<span class="icon-chevron-up trendIcon"></span> ' + differenceBetweenDays.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' vs ' + dayBeforeDay;
        } else if (differenceBetweenDays < 0) {
            document.getElementById("stepsTrend").innerHTML = '<span class="icon-chevron-down trendIcon"></span> ' + differenceBetweenDays.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").substring(1, 500) + ' vs ' + dayBeforeDay;
        } else {
            document.getElementById("stepsTrend").innerHTML = 'same as ' + dayBeforeDay;
        }
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

async function fetchScrobbles() {
    let response = await fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bradleysans&api_key=04734fa847d8fdf0b2b2652391c304e2&format=json&limit=1");
    if (response.ok) {
        var feed = await response.json();

        console.log(feed);

        var mostRecentTrackTitle = feed.recenttracks.track[0].name;
        var mostRecentTrackArtist = feed.recenttracks.track[0].artist["#text"];
        var mostRecentTrackLink = feed.recenttracks.track[0].url;
        var mostRecentTrackImage;
        if (feed.recenttracks.track[0].image !== undefined) {
            mostRecentTrackImage = feed.recenttracks.track[0].image[1]["#text"];
        }
        console.log("most recent track: ", mostRecentTrackTitle, ", by ", mostRecentTrackArtist);
        console.log(mostRecentTrackImage);

        document.getElementById("lastPlayed").style.display = "initial";
        document.getElementById("lastPlayedLink").href = mostRecentTrackLink;
        document.getElementById("lastPlayedTrack").innerHTML = mostRecentTrackTitle;
        document.getElementById("lastPlayedArtist").innerHTML = mostRecentTrackArtist;
        document.getElementById("lastPlayedImage").src = mostRecentTrackImage;

    } else {
        alert("HTTP-Error: " + response.status);
    }
}



async function fetchRepos() {
    let response = await fetch("https://api.github.com/users/bradleysansom/repos?sort=pushed&per_page=50");
    if (response.ok) {
        var repos = await response.json();

        console.log(repos);




        var repoName = repos[0].name;
        var repoUrl = repos[0].html_url;
        var repoStars = repos[0].stargazers_count;

        document.getElementById("recentRepo").style.display = "initial";
        document.getElementById("recentRepoName").innerHTML = repoName;
        document.getElementById("recentRepoLink").href = repoUrl;
        if (repoStars > 0) {
            document.getElementById("recentRepoStars").innerHTML = '<span class="icon-star trendIcon"></span> ' + repoStars;

        }
    } else {
        alert("HTTP-Error: " + response.status);
    }
}


async function fetchCheckins() {

    let response = await fetch("https://opensheet.elk.sh/1roCasluFq8Rz1jJFZlB0Qsp36FunCUwzApBLH6GhITc/Sheet1");
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        var sheet = await response.json();
        console.log(sheet[sheet.length - 1]);

        var checkinName = sheet[sheet.length - 1].Location;
        var checkinUrl = sheet[sheet.length - 1].URL;
        var checkinImage = sheet[sheet.length - 1].Map;

        document.getElementById("recentCheckin").style.display = "initial";
        document.getElementById("recentCheckinName").innerHTML = checkinName;
        document.getElementById("recentCheckinLink").href = checkinUrl;
        document.getElementById("recentCheckinImage").src = checkinImage;


    } else {
        alert("HTTP-Error: " + response.status);
    }
}

var myOptions = {
    mergeCDATA: true,
    xmlns: false,
    attrsAsObject: false,
    stripAttrPrefix: true,
    childrenAsArray: false,
    textKey: 'text'
}

async function fetchBooks() {

    let response = await fetch('https://corsproxy.io/?' + encodeURIComponent('https://oku.club/rss/collection/pOC84'));
    if (response.ok) {
        var feed = await response.text();
        console.log("books", feed);
        var booksArray = xmlToJSON.parseString(feed, myOptions).rss.channel.item;
        console.log(booksArray);
        var mostRecentBook = booksArray[0];
        var mostRecentBookTitle = mostRecentBook.title.text;
        var mostRecentBookAuthor = mostRecentBook.creator.text.split(",")[0];
        var mostRecentBookLink = mostRecentBook.link.text;
        console.log(mostRecentBookTitle, mostRecentBookLink, mostRecentBookAuthor);
        document.getElementById("currentlyReading").style.display = "initial";
        document.getElementById("currentlyReadingTitle").innerHTML = mostRecentBookTitle;
        document.getElementById("currentlyReadingAuthor").innerHTML = "by " + mostRecentBookAuthor;
        document.getElementById("currentlyReadingLink").href = mostRecentBookLink;






    } else {
        alert("HTTP-Error: " + response.status);
    }
}

async function fetchDrink() {
    let response = await fetch("https://opensheet.elk.sh/1Xue4SuHLJnYRA2vBS_DiCJjgYCar8b99c5qa3KGhCV0/Sheet1");
    if (response.ok) {
        var sheet = await response.json();
        console.log(sheet);
        var mostRecent = sheet.length - 1;
        var mostRecentDay = sheet[mostRecent];
        // console.log(mostRecentDay);
        var drinksMostRecentDay = mostRecentDay.drunk;
        var mostRecentDate = mostRecentDay.date;
        var mostRecentDateParts = mostRecentDate.split("/");
        var mostRecentDateObject = new Date(+mostRecentDateParts[2], mostRecentDateParts[1] - 1, +mostRecentDateParts[0]);
        var mostRecentDateString = mostRecentDateObject.toString();
        var mostRecentDay = mostRecentDateString.substring(0, 3);
        // console.log("Steps yesterday (", mostRecentDay, ") :", stepsMostRecentDay);
        var dayBefore = mostRecent - 1;
        var dayBeforeDay = sheet[dayBefore];
        var drinksDayBeforeDay = dayBeforeDay.drunk;
        var dayBeforeDate = dayBeforeDay.date;
        var dayBeforeDateParts = dayBeforeDate.split("/");
        var dayBeforeDateObject = new Date(+dayBeforeDateParts[2], dayBeforeDateParts[1] - 1, +dayBeforeDateParts[0]);
        var dayBeforeDateString = dayBeforeDateObject.toString();
        var dayBeforeDay = dayBeforeDateString.substring(0, 3);
        // console.log("Steps two days ago (", dayBeforeDay, ") :", stepsDayBeforeDay);
        var differenceBetweenDays = drinksMostRecentDay - drinksDayBeforeDay;
        // console.log("Difference", differenceBetweenDays)
        console.log("BOOOOOO", drinksMostRecentDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        document.getElementById("yesterdayDrinks").style.display = "initial";
        document.getElementById("yesterdayDrinksCount").innerHTML = drinksMostRecentDay + "L";

        if (differenceBetweenDays > 0) {
            document.getElementById("drinksTrend").innerHTML = '<span class="icon-chevron-up trendIcon"></span> ' + differenceBetweenDays + 'L vs ' + dayBeforeDay;
        } else if (differenceBetweenDays < 0) {
            document.getElementById("drinksTrend").innerHTML = '<span class="icon-chevron-down trendIcon"></span> ' + differenceBetweenDays.toString().substring(1, 500) + 'l vs ' + dayBeforeDay;
        } else {
            document.getElementById("drinksTrend").innerHTML = 'same as ' + dayBeforeDay;
        }
    }
}




