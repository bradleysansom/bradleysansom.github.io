const plateNhs = async () => {
    console.log("helloooo");
    var country = localStorage.getItem("country");
    var healthServiceName;
    if (country === "England") {
        healthServiceName = "NHS";
        document.getElementById("healthServiceName").innerHTML = healthServiceName;
        document.getElementById("nhsInfoLink").href = "https://www.nhs.uk/nhs-services/";
        document.getElementById("nhsInfoLink").innerHTML = "See your local health services on nhs.uk";
        document.getElementById("nhsEnglandPlate").style.display = "initial";
        var ha = localStorage.getItem("nhs_ha");
        var ccg = localStorage.getItem("ccg");
        var pct = localStorage.getItem("primary_care_trust");
        var district = localStorage.getItem("admin_district");
        var ccgCode = localStorage.getItem("ccgCode");
        var nicePostcode = localStorage.getItem('postcode');
        document.getElementById('nhsAdminDistrict').innerHTML = district;
        if (ha != null) {
            document.getElementById('nhsHa').style.display = "initial";
            document.getElementById('nhsHa').innerHTML = ha + " Health Authority";
        }
        if (ccg != null) {
            document.getElementById('nhsCcg').style.display = "initial";
            document.getElementById('nhsCcg').innerHTML = ccg + " Clinical Commissioning Group";
        }
        if (pct != null) {
            document.getElementById('nhsPct').style.display = "initial";
            document.getElementById('nhsPct').innerHTML = pct + " Primary Care Trust";
        }
        document.getElementById('gpsPostcode').innerHTML = nicePostcode;
        document.getElementById('dentsPostcode').innerHTML = nicePostcode;

        async function nearestGps() {
            var postcode = localStorage.getItem('cleanPostcode');
            var url = "https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=" + postcode;
            console.log(url);
            fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    "filter": "(OrganisationTypeID eq 'GPB') or (OrganisationTypeID eq 'GPP')",
                    "select": "OrganisationName,Address1,Address2,Address3,City,County,Postcode,Contacts",
                    "top": 2,
                    "skip": 0,
                    "count": true
                }),
                headers: {
                    "Content-Type": "application/json",
                    "subscription-key": "769d38008e5a4a22affd1ab0c440e476"
                }

            })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else if (response.status === 404) {
                        console.log("GPs data not found");
                        document.getElementById('plateGps').style.display = "none";
                    }
                })
                .then(json => {
                    console.log(json);
                    var stringNearGps = JSON.stringify(json);
                    console.log(stringNearGps);
                    var arrayNearGps = JSON.parse(stringNearGps);
                    console.log(arrayNearGps);
                    localStorage.setItem('arrayNearGps', arrayNearGps);
                    var gpOneName = arrayNearGps.value['0'].OrganisationName;
                    var gpTwoName = arrayNearGps.value['1'].OrganisationName;
                    console.log("Closest GP is " + gpOneName);
                    console.log("Second closest GP is " + gpTwoName);
                    var gpOneAddress1 = arrayNearGps.value['0'].Address1;
                    var gpTwoAddress1 = arrayNearGps.value['1'].Address1;
                    var gpOneAddress2 = arrayNearGps.value['0'].Address2;
                    var gpTwoAddress2 = arrayNearGps.value['1'].Address2;
                    var gpOneAddress3 = arrayNearGps.value['0'].Address3;
                    var gpTwoAddress3 = arrayNearGps.value['1'].Address3;
                    var gpOneCity = arrayNearGps.value['0'].City;
                    var gpTwoCity = arrayNearGps.value['1'].City;
                    var gpOneCounty = arrayNearGps.value['0'].County;
                    var gpTwoCounty = arrayNearGps.value['1'].County;
                    var gpOneContacts = arrayNearGps.value['0'].Contacts;
                    var gpTwoContacts = arrayNearGps.value['1'].Contacts;
                    var gpOneContactsParsed = JSON.parse(arrayNearGps.value['0'].Contacts);
                    var gpTwoContactsParsed = JSON.parse(arrayNearGps.value['1'].Contacts);
                    console.log(gpOneContactsParsed);
                    console.log(gpTwoContactsParsed);
                    if (gpOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Telephone").length != 0) {
                        var gpOneTelephone = gpOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Telephone")['0'].OrganisationContactValue;
                    };
                    if (gpTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Telephone").length != 0) {
                        var gpTwoTelephone = gpTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Telephone")['0'].OrganisationContactValue;
                    };
                    if (gpOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Email").length != 0) {
                        var gpOneEmail = gpOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Email")['0'].OrganisationContactValue;
                    };
                    if (gpTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Email").length != 0) {
                        var gpTwoEmail = gpTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Email")['0'].OrganisationContactValue;
                    };
                    if (gpOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Email").length != 0) {
                        var gpOneWebsite = gpOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Email")['0'].OrganisationContactValue;
                    };
                    if (gpTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Email").length != 0) {
                        var gpTwoWebsite = gpTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Email")['0'].OrganisationContactValue;
                    }


                    var gpOnePostcode = arrayNearGps.value['0'].Postcode;
                    var gpTwoPostcode = arrayNearGps.value['1'].Postcode;

                    document.getElementById('gp1Name').innerHTML = gpOneName;
                    document.getElementById('gp2Name').innerHTML = gpTwoName;
                    document.getElementById('gp1Address1').innerHTML = gpOneAddress1;
                    document.getElementById('gp2Address1').innerHTML = gpTwoAddress1;
                    document.getElementById('gp1Address2').innerHTML = gpOneAddress2;
                    document.getElementById('gp2Address2').innerHTML = gpTwoAddress2;
                    document.getElementById('gp1Address3').innerHTML = gpOneAddress3;
                    document.getElementById('gp2Address3').innerHTML = gpTwoAddress3;
                    document.getElementById('gp1City').innerHTML = gpOneCity;
                    document.getElementById('gp2City').innerHTML = gpTwoCity;
                    document.getElementById('gp1County').innerHTML = gpOneCounty;
                    document.getElementById('gp2County').innerHTML = gpTwoCounty;
                    document.getElementById('gp1Postcode').innerHTML = gpOnePostcode;
                    document.getElementById('gp2Postcode').innerHTML = gpTwoPostcode;
                    document.getElementById('gp1Telephone').innerHTML = gpOneTelephone;
                    document.getElementById('gp2Telephone').innerHTML = gpTwoTelephone;
                    document.getElementById('gp1Email').innerHTML = gpOneEmail;
                    document.getElementById('gp2Email').innerHTML = gpTwoEmail;
                    document.getElementById('gp1Website').innerHTML = gpOneWebsite;
                    document.getElementById('gp2Website').innerHTML = gpTwoWebsite;

                });
        };
        async function nearestDentists() {
            var postcode = localStorage.getItem('cleanPostcode');
            var url = "https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=" + postcode;
            console.log(url);
            fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    "filter": "OrganisationTypeID eq 'DEN'",
                    "select": "OrganisationName,Address1,Address2,Address3,City,County,Postcode,Contacts",
                    "top": 2,
                    "skip": 0,
                    "count": true
                }),
                headers: {
                    "Content-Type": "application/json",
                    "subscription-key": "769d38008e5a4a22affd1ab0c440e476"
                }

            })
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    var stringNearDents = JSON.stringify(json);
                    console.log(stringNearDents);
                    var arrayNearDents = JSON.parse(stringNearDents);
                    console.log(arrayNearDents);
                    localStorage.setItem('arrayNearDents', arrayNearDents);
                    var dentOneName = arrayNearDents.value['0'].OrganisationName;
                    var dentTwoName = arrayNearDents.value['1'].OrganisationName;
                    console.log("Closest dentist is " + dentOneName);
                    console.log("Second closest dentist is " + dentTwoName);
                    var dentOneAddress1 = arrayNearDents.value['0'].Address1;
                    var dentTwoAddress1 = arrayNearDents.value['1'].Address1;
                    var dentOneAddress2 = arrayNearDents.value['0'].Address2;
                    var dentTwoAddress2 = arrayNearDents.value['1'].Address2;
                    var dentOneAddress3 = arrayNearDents.value['0'].Address3;
                    var dentTwoAddress3 = arrayNearDents.value['1'].Address3;
                    var dentOneCity = arrayNearDents.value['0'].City;
                    var dentTwoCity = arrayNearDents.value['1'].City;
                    var dentOneCounty = arrayNearDents.value['0'].County;
                    var dentTwoCounty = arrayNearDents.value['1'].County;
                    var dentOneContacts = arrayNearDents.value['0'].Contacts;
                    var dentTwoContacts = arrayNearDents.value['1'].Contacts;
                    var dentOneContactsParsed = JSON.parse(arrayNearDents.value['0'].Contacts);
                    var dentTwoContactsParsed = JSON.parse(arrayNearDents.value['1'].Contacts);
                    console.log(dentOneContactsParsed);
                    console.log(dentTwoContactsParsed);
                    if (dentOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Telephone").length != 0) {
                        var dentOneTelephone = dentOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Telephone")['0'].OrganisationContactValue;
                    };
                    if (dentTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Telephone").length != 0) {
                        var dentTwoTelephone = dentTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Telephone")['0'].OrganisationContactValue;
                    };
                    if (dentOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Email").length != 0) {
                        var dentOneEmail = dentOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Email")['0'].OrganisationContactValue;
                    };
                    if (dentTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Email").length != 0) {
                        var dentTwoEmail = dentTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Email")['0'].OrganisationContactValue;
                    };
                    if (dentOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Email").length != 0) {
                        var dentOneWebsite = dentOneContactsParsed.filter(record => record.OrganisationContactMethodType === "Email")['0'].OrganisationContactValue;
                    };
                    if (dentTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Email").length != 0) {
                        var dentTwoWebsite = dentTwoContactsParsed.filter(record => record.OrganisationContactMethodType === "Email")['0'].OrganisationContactValue;
                    }


                    var dentOnePostcode = arrayNearDents.value['0'].Postcode;
                    var dentTwoPostcode = arrayNearDents.value['1'].Postcode;

                    document.getElementById('dent1Name').innerHTML = dentOneName;
                    document.getElementById('dent2Name').innerHTML = dentTwoName;
                    document.getElementById('dent1Address1').innerHTML = dentOneAddress1;
                    document.getElementById('dent2Address1').innerHTML = dentTwoAddress1;
                    document.getElementById('dent1Address2').innerHTML = dentOneAddress2;
                    document.getElementById('dent2Address2').innerHTML = dentTwoAddress2;
                    document.getElementById('dent1Address3').innerHTML = dentOneAddress3;
                    document.getElementById('dent2Address3').innerHTML = dentTwoAddress3;
                    document.getElementById('dent1City').innerHTML = dentOneCity;
                    document.getElementById('dent2City').innerHTML = dentTwoCity;
                    document.getElementById('dent1County').innerHTML = dentOneCounty;
                    document.getElementById('dent2County').innerHTML = dentTwoCounty;
                    document.getElementById('dent1Postcode').innerHTML = dentOnePostcode;
                    document.getElementById('dent2Postcode').innerHTML = dentTwoPostcode;
                    document.getElementById('dent1Telephone').innerHTML = dentOneTelephone;
                    document.getElementById('dent2Telephone').innerHTML = dentTwoTelephone;
                    document.getElementById('dent1Email').innerHTML = dentOneEmail;
                    document.getElementById('dent2Email').innerHTML = dentTwoEmail;
                    document.getElementById('dent1Website').innerHTML = dentOneWebsite;
                    document.getElementById('dent2Website').innerHTML = dentTwoWebsite;

                });
        };
        // nearestGps();
        // nearestDentists();



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