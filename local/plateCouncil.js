function plateCouncil() {
    var postcode = localStorage.getItem('postcode');
    var cleanPostcode = localStorage.getItem('cleanPostcode');
    var council = localStorage.getItem('admin_district');
    var ward = localStorage.getItem('admin_ward');
    var parish = localStorage.getItem('parish');
    var website = "https://www.gov.uk/find-local-council/" + council.replace(/\s/g, "-").toLowerCase();
    document.getElementById('councilPostcode').innerHTML = postcode;
    document.getElementById('councilCouncil').innerHTML = council;
    document.getElementById('councilWard').innerHTML = ward;
    document.getElementById('councilLinkCouncil').innerHTML = council;
    document.getElementById('councilWebsiteLink').href = website;
    if (parish.includes('unparished')) {
        document.getElementById('parishBox').style.display = "none";
    } else {
        document.getElementById('parishPostcode').innerHTML = postcode;
        document.getElementById('parishCouncil').innerHTML = parish;
    }
    var linkToFix = "https://www.fixmystreet.com/around?js=1&pc=" + cleanPostcode;
    document.getElementById('fixMyStreetLink').href = linkToFix;
    var linkToPlanning = "https://www.gov.uk/search-register-planning-decisions/" + council.replace(/\s/g, "-").toLowerCase();
    document.getElementById('planningLink').href = linkToPlanning;

}