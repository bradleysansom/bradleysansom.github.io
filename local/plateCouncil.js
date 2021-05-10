function plateCouncil() {
    var postcode = localStorage.getItem('postcode');
    var council = localStorage.getItem('admin_district');
    var ward = localStorage.getItem('admin_ward');
    var parish = localStorage.getItem('parish');
    var website = "https://www.gov.uk/find-local-council/" + council.toLowerCase();
    document.getElementById('councilPostcode').innerHTML = postcode;
    document.getElementById('councilCouncil').innerHTML = council;
    document.getElementById('councilWard').innerHTML = ward;
    document.getElementById('councilLinkCouncil').innerHTML = council;
    document.getElementById('councilWebsiteLink').href = website;
    if (parish.includes('unparished')) {
        document.getElementById('parishBox').style.display = "none";
    } else {
        document.getElementById('parishCouncil').innerHTML = parish;
    }

}