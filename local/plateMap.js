function plateMap() {
    var latitude = localStorage.getItem("latitude");
    var longitude = localStorage.getItem("longitude");

    var map = L.map('plateMap').setView({ lon: longitude, lat: latitude }, 2);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

        maxZoom: 18,
        trackResize: true,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);


    L.control.scale().addTo(map);
    map.setZoom(17);
}
