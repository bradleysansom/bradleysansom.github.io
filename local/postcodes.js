function changePage() {
    var dashboardStylesheet = document.createElement('link rel="stylesheet" href="style/dashboard.css"');
    document.body.appendChild(dashboardStylesheet);
}






function savePostcode(userPostcode) {
    var sendPostcode = document.getElementById('sendPostcode')[0].value;
    sendPostcode = sendPostcode.replace(/\s+/g, '');
    sessionStorage.setItem("userPostcode", sendPostcode);
    changePage;
}