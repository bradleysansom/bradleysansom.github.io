var options = {
    valueNames: ['type', 'name', 'locality', 'postcode', 'altname']
};

var userList = new List('places', options);

var url = window.location.href;
var arr = url.split('?')
var desire = arr[1];
console.log(desire);
if (desire != undefined) {
    document.querySelector("#searchbar").value = desire;
    userList.search(desire);
}