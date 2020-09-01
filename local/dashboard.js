function dashboard() {
    postcodeHeading();
    dashboardDarklight();
    loadPostcodeData();
}
var posts;
var adminDistrict;
const loadPostcodeData = async() => {
    var cleanPostcode = localStorage.getItem("cleanPostcode");
    const response = await fetch('https://api.postcodes.io/postcodes/' + cleanPostcode);
    var posts = await response.json();
    // console.log(posts);
    // console.log(posts.result.admin_district.value);
    var adminDistrict = posts.result.admin_district;
    localStorage.setItem("adminDistrict", adminDistrict.value);
}