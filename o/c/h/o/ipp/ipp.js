function fadeoutfin() {

    document.getElementById('alert').style.display = "none";
    document.getElementById('alert').classList.remove('alertanimout');
}

function fadeout() {
    document.getElementById('bumper').classList.remove('bumperanim');
    document.getElementById('panel').classList.remove('panelanim');
    document.getElementById('paneltext').classList.remove('paneltextanim');
    document.getElementById('alert').classList.add('alertanimout');
    setTimeout(fadeoutfin, 2200);
}

function generate() {
    document.getElementById('alert').style.display = "initial";
    var topLine = document.getElementById('topLine').value;
    document.getElementsByClassName('toplineoftext')[0].innerHTML = topLine;
    var bottomLine = document.getElementById('bottomLine').value;
    document.getElementsByClassName('bottomlineoftext')[0].innerHTML = bottomLine;
    if (document.getElementById("circle").checked === true) {
        document.getElementById("bumper").style.backgroundImage = "url('super.png')";
        document.getElementById("panel").style.backgroundImage = "url('super0.png')";
    } else if (document.getElementById("wavy").checked === true) {
        document.getElementById("bumper").style.backgroundImage = "url('wavy.png')";
        document.getElementById("panel").style.backgroundImage = "url('wavy.png')";
    } else if (document.getElementById("moire").checked === true) {
        document.getElementById("bumper").style.backgroundImage = "url('lines.png')";
        document.getElementById("panel").style.backgroundImage = "url('lines0.png')";
    };

    document.getElementById('bumper').classList.add('bumperanim');
    document.getElementById('panel').classList.add('panelanim');
    document.getElementById('paneltext').classList.add('paneltextanim');

    setTimeout(fadeout, 5000);

}