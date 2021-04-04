function plateTakeaway() {
    var postcode = localStorage.getItem("cleanPostcode");
    var justEatUrl = "https://www.just-eat.co.uk/area/" + postcode;
    document.getElementById("justEatLink").href = justEatUrl;
    var foodHubUrl = "https://foodhub.co.uk/list/" + postcode;
    document.getElementById("foodHubLink").href = foodHubUrl;
}