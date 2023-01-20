var today = new Date();
var hour = today.getHours();
console.log(hour);
if (hour <= 5) {
    var greeting = "Hello! ";
} else if (hour <= 11) {
    var greeting = "Morning! ";
} else if (hour <= 17) {
    var greeting = "Afternoon! ";
} else if (hour <= 22) {
    var greeting = "Evening! ";
} else {
    var greeting = "Hello! ";
}
document.getElementById('greetingText').innerHTML = greeting;