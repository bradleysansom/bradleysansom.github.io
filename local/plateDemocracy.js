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
    document.getElementById("writeToThemLink").innerHTML = 'Send ' + memberPronounObjectiveLowercase + ' a message';
    document.getElementById("writeToThemLink").href = writeToThemUrl;
    if (memberParty === "Speaker") {
        document.getElementById("memberPartyContainer").innerHTML = memberPronoun + " is the Speaker of the House of Commons. Therefore " + memberPronounLowercase + " doesn't vote or participate in debates, and remains neutral on national issues.";
    } else if (memberParty === "Independent") {
        if (memberFullName === "Rt Hon Dr Julian Lewis MP") {
            document.getElementById("memberPartyContainer").innerHTML = "He was formerly a Conservative MP, but is now an Independent MP.";
        } else if (memberFullName === "Jonathan Edwards MP") {
            document.getElementById("memberPartyContainer").innerHTML = "He was formerly a Plaid Cymru MP, but is now an Independent MP.";
        } else {
            document.getElementById("memberPartyContainer").innerHTML = memberPronounPlural + " an Independent MP.";
        }
    } else if (memberParty === "Sinn Féin") {
        document.getElementById("memberPartyContainer").innerHTML = memberPronounPlural + " an MP for Sinn Féin. They do not attend Parliament as they refuse to take their seats, believing Northern Ireland should be a part of a United Ireland. ";
    } else if (memberParty === "Alliance") {
        document.getElementById("memberPartyContainer").innerHTML = memberPronounPlural + " an " + memberParty + ' MP';
    } else {
        document.getElementById("memberPartyContainer").innerHTML = memberPronounPlural + " a " + memberParty + ' MP';
    }

    if (memberParty === "Conservative") {
        document.getElementById("partyImage").style.backgroundImage = "url('logos/tory.png')";
        document.getElementById("memberBadges").style.background = "#00bfff";
    } else if (memberParty === "Labour") {
        document.getElementById("partyImage").style.backgroundImage = "url('logos/lab.png')";
        document.getElementById("memberBadges").style.background = "#e91639";
    } else if (memberParty === "Liberal Democrat") {
        document.getElementById("partyImage").style.backgroundImage = "url('logos/lib.png')";
        document.getElementById("memberBadges").style.background = "#fcca36";
    } else if (memberParty === "Green Party") {
        document.getElementById("partyImage").style.backgroundImage = "url('logos/green.png')";
        document.getElementById("memberBadges").style.background = "#7ec94f";
    } else if (memberParty === "Alliance") {
        document.getElementById("partyImage").style.backgroundImage = "url('logos/alliance.png')";
        document.getElementById("memberBadges").style.background = "#ffcc33";
    } else if (memberParty === "Democratic Unionist Party") {
        document.getElementById("partyImage").style.backgroundImage = "url('logos/dup.png')";
        document.getElementById("memberBadges").style.background = "#243c5c";
    } else if (memberParty === "Plaid Cymru") {
        document.getElementById("partyImage").style.backgroundImage = "url('logos/plaid.png')";
        document.getElementById("memberBadges").style.background = "#ffd633";
    } else if (memberParty === "Scottish National Party") {
        document.getElementById("partyImage").style.backgroundImage = "url('logos/snp.png')";
        document.getElementById("memberBadges").style.background = "#fff2cc";
    } else if (memberParty === "Sinn Féin") {
        document.getElementById("partyImage").style.backgroundImage = "url('logos/sinn.png')";
        document.getElementById("memberBadges").style.background = "#00cc6d";
    } else if (memberParty === "Social Democratic & Labour Party") {
        document.getElementById("partyImage").style.backgroundImage = "url('logos/sdlp.png')";
        document.getElementById("memberBadges").style.background = "#00b383";
    } else if (memberParty === "Speaker") {
        document.getElementById("partyImage").style.backgroundImage = "url('logos/speaker.png')";
        document.getElementById("memberBadges").style.background = "#222222";
    } else {
        document.getElementById("partyImage").style.background = "#000000";
        document.getElementById("memberBadges").style.background = "#222222";
    }
}