function postcodeHeading() {

    var standardcasePostcode = localStorage.getItem("userPostcode");
    var uppercasePostcode = standardcasePostcode.toUpperCase();
    document.getElementById("postalCode").innerHTML = uppercasePostcode;
    document.title = uppercasePostcode + " | My Local Area";
}