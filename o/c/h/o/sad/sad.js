console.log("17:08");
function fadeoutfin() {

    document.getElementById('alert').style.display = "none";
    document.getElementById('alert').classList.remove('alertanimout');
    document.getElementById("flagSubtitles").style.display = "none";
    document.getElementById("flagAudio").style.display = "none";
    document.getElementById("flagSigned").style.display = "none";
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
    document.getElementById('bumper').style.display = "initial";
    document.getElementById('panel').style.display = "initial";
    document.getElementById('paneltext').style.display = "initial";
    if (document.getElementById("subtitles").checked === true) {
        document.getElementById("flagSubtitles").style.display = "initial";
    };
    if (document.getElementById("audio").checked === true) {
        document.getElementById("flagAudio").style.display = "initial";
    }; 
    if (document.getElementById("bsl").checked === true) {
        document.getElementById("flagSigned").style.display = "initial";
    };

    document.getElementById('bumper').classList.add('bumperanim');
    document.getElementById('panel').classList.add('panelanim');
    document.getElementById('paneltext').classList.add('paneltextanim');

    setTimeout(fadeout, 5000);

}
