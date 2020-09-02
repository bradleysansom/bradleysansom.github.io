function dashboard() {
    postcodeHeading();
    dashboardDarklight();
    loadPostcodeData();
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
    //console.log('stringPosts', stringPosts)
    var arrayPosts = JSON.parse(stringPosts);
    // console.log('arrayPosts', arrayPosts);
    // console.log(arrayPosts.result);
    var resultsPosts = arrayPosts.result;
    console.log(resultsPosts);
    console.log('admin_county', resultsPosts.admin_county)
    let adminCounty = resultsPosts.admin_county;
    // let { admin_county, admin_district, admin_ward, ccg, codes, country, eastings, european_electoral_region, incode, latitude, longitude, lsoa, msoa, nhs_ha, northings, nuts, outcode, parish, parliamentary_constituency, postcode, primary_care_trust, quality, region } = resultsPosts;
    console.log(admin_county);
}