function plateSmallBusiness() {
    console.log('Small business panel started');
    var latitude = localStorage.getItem('latitude');
    var longitude = localStorage.getItem('longitude');
    var shopSmallUrl = "https://www.americanexpress.com/en-gb/maps?country=GB&cat=Shop-Small,Sort-By-Distance&cl=" + latitude + "," + longitude;
    console.log(shopSmallUrl);
    document.getElementById('shopSmallLink').href = shopSmallUrl;
}