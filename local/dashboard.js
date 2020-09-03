function dashboard() {
    postcodeHeading();
    dashboardDarklight();

}

const loadPostcodeData = async() => {
    var cleanPostcode = localStorage.getItem("cleanPostcode");
    const response = await fetch('https://api.postcodes.io/postcodes/' + cleanPostcode);
    var posts = await response.json();
    console.log(posts);
    localStorage.setItem("posts", JSON.stringify(posts));
}


function storePostcodeData() {
    var stringPosts = localStorage.getItem("posts");
    var arrayPosts = JSON.parse(stringPosts);
    var resultsPosts = arrayPosts.result;
    var admin_district = resultsPosts.admin_district;
    localStorage.setItem("admin_district", admin_district);
    var admin_ward = resultsPosts.admin_ward;
    localStorage.setItem("admin_ward", admin_ward);
    var ccg = resultsPosts.ccg;
    localStorage.setItem("ccg", ccg);
    var ced = resultsPosts.ced;
    localStorage.setItem("ced", ced);
    var country = resultsPosts.country;
    localStorage.setItem("country", country);
    var eastings = resultsPosts.eastings;
    localStorage.setItem("eastings", eastings);
    var european_electoral_region = resultsPosts.european_electoral_region;
    localStorage.setItem("european_elecoral_region", european_electoral_region);
    var incode = resultsPosts.incode;
    localStorage.setItem("incode", incode);
    var latitude = resultsPosts.latitude;
    localStorage.setItem("latitude", latitude);
    var longitude = resultsPosts.longitude;
    localStorage.setItem("longitude", longitude);
    var lsoa = resultsPosts.lsoa;
    localStorage.setItem("lsoa", lsoa);
    var msoa = resultsPosts.msoa;
    localStorage.setItem("msoa", msoa);
    var nhs_ha = resultsPosts.nhs_ha;
    localStorage.setItem("nha_ha", nhs_ha);
    var northings = resultsPosts.northings;
    localStorage.setItem("northings", northings);
    var nuts = resultsPosts.nuts;
    localStorage.setItem("nuts", nuts);
    var outcode = resultsPosts.outcode;
    localStorage.setItem("outcode", outcode);
    var parish = resultsPosts.parish;
    localStorage.setItem("parish", parish);
    var postcode = resultsPosts.postcode;
    localStorage.setItem("postcode", postcode);
    var parliamentary_constituency = resultsPosts.parliamentary_constituency;
    localStorage.setItem("parliamentary_constituency", parliamentary_constituency);
    var primary_care_trust = resultsPosts.primary_care_trust;
    localStorage.setItem("primary_care_trust", primary_care_trust);
    var region = resultsPosts.region;
    localStorage.setItem("region", region);
    // Set headings
    document.getElementById("postalCode").innerHTML = postcode;
    var welcomeHome = 'Welcome to ' + admin_district;
    document.getElementById("adminDistrict").innerHTML = welcomeHome;
    document.getElementById("postcard").style.height = "auto";
    // Regional header image
    if (region === "North East") {
        document.getElementById("postcard").style.backgroundImage = "url(images/northEast.jpg)";
    } else if (region === "North West") {
        document.getElementById("postcard").style.backgroundImage = "url(images/northWest.jpg)";
    } else if (region === "Yorkshire and The Humber") {
        document.getElementById("postcard").style.backgroundImage = "url(images/yorkshire.jpg)";
    } else if (region === "East Midlands") {
        document.getElementById("postcard").style.backgroundImage = "url(images/eastMidlands.jpg)";
    } else if (region === "West Midlands") {
        document.getElementById("postcard").style.backgroundImage = "url(images/westMidlands.jpg)";
    } else if (region === "East of England") {
        document.getElementById("postcard").style.backgroundImage = "url(images/eastOfEngland.jpg)";
    } else if (region === "London") {
        document.getElementById("postcard").style.backgroundImage = "url(images/london.jpg)";
    } else if (region === "South East") {
        document.getElementById("postcard").style.backgroundImage = "url(images/southEast.jpg)";
    } else if (region === "South West") {
        document.getElementById("postcard").style.backgroundImage = "url(images/southWest.jpg)";
    } else {
        document.getElementById("postcard").style.backgroundImage = "url(images/housing.jpg)";
    }
}

const plateDemocracy = async() => {
    var parliamentary_constituency = localStorage.getItem("parliamentary_constituency");
    var parliamentary_constituencyPluses = parliamentary_constituency.split(' ').join('+');
    // Fetch information about the MP
    var parltURL = 'https://data.parliament.uk/membersdataplatform/services/mnis/members/query/constituency=' + parliamentary_constituencyPluses + '/';
    const xmlFetch = await fetch(parltURL)
    const xmlText = await xmlFetch.text()
    const xml = await (new window.DOMParser()).parseFromString(xmlText, "text/xml")
        // Save information about the MP
    var memberName = xml.getElementsByTagName("DisplayAs")[0].childNodes[0].nodeValue;
    localStorage.setItem("memberName", memberName);
    var memberFullName = xml.getElementsByTagName("FullTitle")[0].childNodes[0].nodeValue;
    localStorage.setItem("memberFullName", memberFullName);
    var memberParty = xml.getElementsByTagName("Party")[0].childNodes[0].nodeValue;
    localStorage.setItem("memberParty", memberParty);
    var memberGender = xml.getElementsByTagName("Gender")[0].childNodes[0].nodeValue;
    localStorage.setItem("memberGender", memberGender);
    // Save pronouns of the MP
    if (memberGender === "M") {
        var memberPronoun = "He";
        var memberPronounPlural = "He's";
        var memberPronounObjective = "Him";
        var memberPronounPosessive = "His";
        var memberPronounLowercase = "he";
        var memberPronounPluralLowercase = "he's";
        var memberPronounObjectiveLowercase = "him";
        var memberPronounPosessiveLowercase = "his";
    } else if (memberGender === "F") {
        var memberPronoun = "She";
        var memberPronounPlural = "She's";
        var memberPronounObjective = "Her";
        var memberPronounPosessive = "Her";
        var memberPronounLowercase = "she";
        var memberPronounPluralLowercase = "she's";
        var memberPronounObjectiveLowercase = "her";
        var memberPronounPosessiveLowercase = "her";
    } else {
        var memberPronoun = "They";
        var memberPronounPlural = "They're";
        var memberPronounObjective = "Them";
        var memberPronounPosessive = "Their";
        var memberPronounLowercase = "they";
        var memberPronounPluralLowercase = "they're";
        var memberPronounObjectiveLowercase = "them";
        var memberPronounPosessiveLowercase = "their";
    }
    var memberConstituency = xml.getElementsByTagName("MemberFrom")[0].childNodes[0].nodeValue;
    localStorage.setItem("memberConstituency", memberConstituency);
    var memberStartDate = xml.getElementsByTagName("HouseStartDate")[0].childNodes[0].nodeValue;
    localStorage.setItem("memberStartDate", memberStartDate);
    var memberStartYear = memberStartDate.substr(0, 4);
    localStorage.setItem("memberStartYear", memberStartYear);
    var memberId = xml.getElementsByTagName("Member")[0].getAttribute('Member_Id');
    localStorage.setItem("memberId", memberId);
    var memberPartyId = xml.getElementsByTagName("Party")[0].getAttribute('Id');
    localStorage.setItem("memberPartyId", memberPartyId);
    var memberPostcode = localStorage.getItem("postcode");
    var theyWorkForYouUrl = 'https://www.theyworkforyou.com/mp/?c=' + parliamentary_constituencyPluses;
    var writeToThemUrl = 'https://www.writetothem.com/?a=WMC&pc=' + localStorage.getItem("cleanPostcode");

    document.getElementById("memberPostcode").innerHTML = memberPostcode;
    document.getElementById("constituency").innerHTML = memberConstituency;
    document.getElementById("memberStartYear").innerHTML = memberStartYear;
    document.getElementById("memberImage").style.backgroundImage =
        'url(https://data.parliament.uk/membersdataplatform/services/images/MemberPhoto/' + memberId + '/)';
    document.getElementById("memberFullName").innerHTML = memberFullName;
    document.getElementById("theyWorkForYouLink").innerHTML = 'See ' + memberPronounPosessiveLowercase + ' voting record and speeches';
    document.getElementById("theyWorkForYouLink").href = theyWorkForYouUrl;
    document.getElementById("writeToThemLink").innerHTML = 'Send ' + memberPronounPosessiveLowercase + ' a message';
    document.getElementById("writeToThemLink").href = writeToThemUrl;
    if (memberParty === "Speaker") {
        document.getElementById("memberPartyContainer").innerHTML = memberPronoun + " is the Speaker of the House of Commons. Therefore " + memberPronounLowercase + " doesn't vote or participate in debates, and remains neutral on national issues.";
    } else if (memberParty === "Independent") {
        document.getElementById("memberPartyContainer").innerHTML = "They are an Independent MP.";
    } else if (memberParty === "Sinn Féin") {
        document.getElementById("memberPartyContainer").innerHTML = memberPronounPlural + " an MP for Sinn Féin. They do not attend Parliament as they refuse to take their seats, believing Northern Ireland should be a part of a United Ireland. ";
    } else if (memberParty === "Alliance") {
        document.getElementById("memberPartyContainer").innerHTML = memberPronounPlural + " an " + memberParty + ' MP';
    } else {
        document.getElementById("memberPartyContainer").innerHTML = memberPronounPlural + " a " + memberParty + ' MP';
    }

    if (memberParty === "Conservative") {
        document.getElementById("partyImage").style.backgroundImage = "url('Logos/tory.png')";
        document.getElementById("memberBadges").style.background = "#00bfff";
    } else if (memberParty === "Labour") {
        document.getElementById("partyImage").style.backgroundImage = "url('Logos/lab.png')";
        document.getElementById("memberBadges").style.background = "#e91639";
    } else if (memberParty === "Liberal Democrat") {
        document.getElementById("partyImage").style.backgroundImage = "url('Logos/lib.png')";
        document.getElementById("memberBadges").style.background = "#fcca36";
    } else if (memberParty === "Green Party") {
        document.getElementById("partyImage").style.backgroundImage = "url('Logos/green.png')";
        document.getElementById("memberBadges").style.background = "#7ec94f";
    } else if (memberParty === "Alliance") {
        document.getElementById("partyImage").style.backgroundImage = "url('Logos/alliance.png')";
        document.getElementById("memberBadges").style.background = "#ffcc33";
    } else if (memberParty === "Democratic Unionist Party") {
        document.getElementById("partyImage").style.backgroundImage = "url('Logos/dup.png')";
        document.getElementById("memberBadges").style.background = "#243c5c";
    } else if (memberParty === "Plaid Cymru") {
        document.getElementById("partyImage").style.backgroundImage = "url('Logos/plaid.png')";
        document.getElementById("memberBadges").style.background = "#ffd633";
    } else if (memberParty === "Scottish National Party") {
        document.getElementById("partyImage").style.backgroundImage = "url('Logos/snp.png')";
        document.getElementById("memberBadges").style.background = "#fff2cc";
    } else if (memberParty === "Sinn Féin") {
        document.getElementById("partyImage").style.backgroundImage = "url('Logos/sinn.png')";
        document.getElementById("memberBadges").style.background = "#00cc6d";
    } else if (memberParty === "Speaker") {
        document.getElementById("partyImage").style.backgroundImage = "url('Logos/speaker.png')";
        document.getElementById("memberBadges").style.background = "#222222";
    } else {
        document.getElementById("partyImage").style.background = "#000000";
        document.getElementById("memberBadges").style.background = "#222222";
    }
}