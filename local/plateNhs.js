const plateNhs = async() => {
    var country = localStorage.getItem("country");
    var healthServiceName;
    if (country === "England") {
        healthServiceName = "NHS";
        document.getElementById("healthServiceName").innerHTML = healthServiceName;
        /* var nhsApiKey = prompt("Insert NHS API key:");
        var postcode = localStorage.getItem("cleanPostcode");
        var nhsApiUrl = 'https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=' + postcode;
        let data = {
            "filter": "(OrganisationTypeID eq 'SCL') or (OrganisationTypeID eq 'CLI') or (OrganisationTypeID eq 'DEN') or (OrganisationTypeID eq 'GPB') or (OrganisationTypeID eq 'GPP') or (OrganisationTypeID eq 'HOS') or (OrganisationTypeID eq 'MIU') or (OrganisationTypeID eq 'OPT') or (OrganisationTypeID eq 'PHA') or (OrganisationTypeID eq 'UC')",
            "top": 25,
            "skip": 0,
            "count": true
        };
        const response = await fetch(nhsApiUrl, {
            headers: {
                credentials: 'include',
                "Content-Type": "application/json",
                "subscription-key": "769d38008e5a4a22affd1ab0c440e476"
            },
            data: data
        });
        var posts = await response.json();
        console.log(posts);   */


        // localStorage.setItem("posts", JSON.stringify(posts));
    } else if (country === "Scotland") {
        healthServiceName = "NHS";
        document.getElementById("healthServiceName").innerHTML = healthServiceName;
        var nhsInfoUrl = 'https://www.nhsinform.scot/scotlands-service-directory#maincontent';
        document.getElementById("nhsInfoLink").innerHTML = 'See your local health services on NHS Inform';
        document.getElementById("nhsInfoLink").href = nhsInfoUrl;
    } else if (country === "Wales") {
        healthServiceName = "NHS";
        document.getElementById("healthServiceName").innerHTML = healthServiceName;
        var postcode = localStorage.getItem("cleanPostcode");
        var nhsInfoUrl = 'http://www.wales.nhs.uk/ourservices/directory/postcodesearch?pc=' + postcode + '&dentist=1&gp=1&optician=1&pharmacy=1&dist=2'
        document.getElementById("nhsInfoLink").innerHTML = 'See your local health services on NHS Wales';
        document.getElementById("nhsInfoLink").href = nhsInfoUrl;
    } else if (country === "Northern Ireland") {
        healthServiceName = "HSC";
        document.getElementById("healthServiceName").innerHTML = healthServiceName;

        var nhsInfoUrl = 'http://www.hscboard.hscni.net/health-services-useful-information/';
        document.getElementById("nhsInfoLink").innerHTML = 'See your local health services on HSCNI';
        document.getElementById("nhsInfoLink").href = nhsInfoUrl;
    } else {
        document.getElementById("plateNhs").style.display = "none";
    }
}