var year_placeholder = document.getElementById('year');
var nonsequitur_placeholder = document.getElementById('nonsequitur');
let year = new Date().getFullYear();
year_placeholder.innerHTML = year;
var nonsequiturs = [
    'Your home may be reposessed if you do not keep up repayments on your mortgage',
    'Your call is important to us, please stay on the line',
    'Now with 20% extra free',
    'Made in Yorkshire',
    'GOLF CLUBS FOR SALE - used twice, £20 o.n.o.',
    'Now in widescreen',
    'Best wishes, kindest regards'
];
var nonsequitur = nonsequiturs[Math.floor(Math.random() * nonsequiturs.length)];
nonsequitur_placeholder.innerHTML = nonsequitur;