async function platePolice() {
    var latitude = localStorage.getItem('latitude');
    var longitude = localStorage.getItem('longitude');
    var postcode = localStorage.getItem('postcode');
    var neighbourhoodUrl = "https://data.police.uk/api/locate-neighbourhood?q=" + latitude + "," + longitude;
    fetch(neighbourhoodUrl)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else if (response.status === 404) {
                console.log("Police force data not found");
                document.getElementById('platePolice').style.display = "none";
            }
        })
        .then(json => {
            console.log(json);
            var stringOfPoliceForce = JSON.stringify(json);
            console.log(stringOfPoliceForce);
            var arrayOfPoliceForce = JSON.parse(stringOfPoliceForce);
            console.log(arrayOfPoliceForce);
            localStorage.setItem('arrayOfPoliceForce', arrayOfPoliceForce);
            var policeForceName = arrayOfPoliceForce.force;
            var policeForceNameLowercase = policeForceName.replace(/-/g, ' ');
            var policeForceNameTitleCase = policeForceNameLowercase.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });

            if (policeForceNameTitleCase.includes("Police") || policeForceNameTitleCase.includes("Constabulary")) {
                console.log(policeForceNameTitleCase);
                policeForceNameTitleCase = policeForceNameTitleCase;
                console.log(policeForceNameTitleCase);
            } else {
                console.log(policeForceNameTitleCase);
                policeForceNameTitleCase = policeForceNameTitleCase + " Police";
                console.log(policeForceNameTitleCase);
            };
            document.getElementById('policePostcode').innerHTML = postcode;
            document.getElementById('policeForce').innerHTML = policeForceNameTitleCase;
            var policeNeighbourhood = arrayOfPoliceForce.neighbourhood;
            var policeNeighbourhoodUrl = "https://data.police.uk/api/" + policeForceName + "/" + policeNeighbourhood;
            fetch(policeNeighbourhoodUrl)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else if (response.status === 404) {
                        console.log("Police neighbourhood data not found");
                        document.getElementById('platePolice').style.display = "none";
                    }
                })
                .then(json => {
                    console.log(json);
                    var stringOfPoliceNeighbourhood = JSON.stringify(json);
                    console.log(stringOfPoliceNeighbourhood);
                    var arrayOfPoliceNeighbourhood = JSON.parse(stringOfPoliceNeighbourhood);
                    console.log(arrayOfPoliceNeighbourhood);
                    localStorage.setItem('arrayOfPoliceNeighbourhood', arrayOfPoliceNeighbourhood);
                    var policeNeighbourhoodName = arrayOfPoliceNeighbourhood.name;
                    var policeNeighbourhoodUrl = arrayOfPoliceNeighbourhood.url_force;
                    console.log(policeNeighbourhoodUrl);
                    document.getElementById('policeNeighbourhood').innerHTML = policeNeighbourhoodName;
                    if (policeNeighbourhoodUrl.includes(".uk")) {
                        document.getElementById('policeInfoLink').innerHTML = "Contact the " + policeNeighbourhoodName + " neighbourhood team";
                        document.getElementById('policeInfoLink').href = policeNeighbourhoodUrl;
                    } else {
                        document.getElementById('policeInfoLink').innerHTML = "Find the " + policeForceNameTitleCase + " website";
                        document.getElementById('policeInfoLink').href = encodeURI("https://www.google.com/search?hl=en&q=" + policeForceNameLowercase + " police");
                    }

                });

        });
}