function storePostcode() {
    var inputPostcode = document.getElementById("userPostcode");
    localStorage.setItem("userPostcode", inputPostcode.value);
    var postalCode = localStorage.getItem("userPostcode");
    // console.log(postalCode);
    var cleanPostcode = postalCode.replace(/\s+/g, '');
    // console.log(cleanPostcode)
    localStorage.setItem("cleanPostcode", cleanPostcode);
    location.href = "dashboard.html";
}