function postcodeHeading() {
    var standardcasePostcode = localStorage.getItem("userPostcode");
    var uppercasePostcode = standardcasePostcode.toUpperCase();
    document.title = uppercasePostcode + " | My Local Area";
}