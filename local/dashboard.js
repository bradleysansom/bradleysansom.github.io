function dashboard() {
    postcodeHeading();
    dashboardDarklight();

}

const loadPostcodeData = async () => {
    var cleanPostcode = localStorage.getItem("cleanPostcode");
    const response = await fetch('https://api.postcodes.io/postcodes/' + cleanPostcode);
    if (response.ok) {
        var posts = await response.json();
        console.log(posts);
        localStorage.setItem("posts", JSON.stringify(posts));
        return true;
    } else if (response.status === 404) {
        document.getElementsByClassName('buffet')[0].style.display = "none";
        document.getElementById('postalCode').innerHTML = cleanPostcode;
        document.getElementById('adminDistrict').innerHTML = "Postcode not found";
        var container = document.getElementsByClassName('postcode')[0];
        var goBack = document.createElement('a');
        goBack.innerHTML = "Go back and try again";
        goBack.href = "javascript:history.back()";
        goBack.style.color = "white";
        document.getElementById('adminDistrict').style.marginBottom = "0";
        container.appendChild(goBack);

        return false;
    }
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
    document.title = postcode + " | My Local Area";
    var parliamentary_constituency = resultsPosts.parliamentary_constituency;
    localStorage.setItem("parliamentary_constituency", parliamentary_constituency);
    var primary_care_trust = resultsPosts.primary_care_trust;
    localStorage.setItem("primary_care_trust", primary_care_trust);
    var region = resultsPosts.region;
    localStorage.setItem("region", region);
    var ccgCode = resultsPosts.codes.ccg;
    localStorage.setItem("ccgCode", ccgCode);
    console.log(ccgCode);
    // Set headings
    document.getElementById("postalCode").innerHTML = postcode;
    var welcomeHome = 'Welcome to ' + admin_district;
    // Formats certain local areas to be prefixed with 'The' to be gramatically and geographically correct
    if (admin_district === "Forest of Dean") {
        welcomeHome = 'Welcome to the Forest of Dean';
    } else if (admin_district === "New Forest") {
        welcomeHome = 'Welcome to the New Forest';
    } else if (admin_district === "City of London") {
        welcomeHome = 'Welcome to the City of London'
    } else if (admin_district === "Wirral") {
        welcomeHome = 'Welcome to the Wirral'
    } else if (admin_district === "Vale of White Horse") {
        welcomeHome = 'Welcome to the Vale of White Horse'
    } else if (admin_district === "Malvern Hills") {
        welcomeHome = 'Welcome to the Malvern Hills'
    } else if (admin_district === "Wyre Forest") {
        welcomeHome = 'Welcome to the Wyre Forest'
    } else if (admin_district === "Aylesbury Vale") {
        welcomeHome = 'Welcome to the Aylesbury Vale'
    } else if (admin_district === "Chiltern") {
        welcomeHome = 'Welcome to the Chilterns'
    } else if (admin_district === "Derbyshire Dales") {
        welcomeHome = 'Welcome to the Derbyshire Dales'
    } else if (admin_district === "Forest of Dean") {
        welcomeHome = 'Welcome to the Forest of Dean'
    }
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






/*function plateMap() {
    var latitude = localStorage.getItem("latitude");
    var longitude = localStorage.getItem("longitude");

    var map = L.map('plateMap').setView({ lon: longitude, lat: latitude }, 2);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

        maxZoom: 18,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);


    L.control.scale().addTo(map);
    map.setZoom(17);
} */

function plateTakeaway() {
    var postcode = localStorage.getItem("cleanPostcode");
    var justEatUrl = "https://www.just-eat.co.uk/area/" + postcode;
    document.getElementById("justEatLink").href = justEatUrl;
    var foodHubUrl = "https://foodhub.co.uk/list/" + postcode;
    document.getElementById("foodHubLink").href = foodHubUrl;
}
