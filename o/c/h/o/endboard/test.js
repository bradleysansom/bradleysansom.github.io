var A;

function preloader() {
    (new Image()).src = "circles.png";
    (new Image()).src = "bullseye.png";
    (new Image()).src = "waves.png";
    (new Image()).src = "saw.gif";
    (new Image()).src = "stripes.png";
    (new Image()).src = "greystripe.png";
    (new Image()).src = "bars.png";
    (new Image()).src = "black bars.png";
    (new Image()).src = "blackboard.png";
    (new Image()).src = "blue.png";
    (new Image()).src = "checkerboard.png";
    (new Image()).src = "checkerboards.gif";
    (new Image()).src = "diag.png";
    (new Image()).src = "green.png";
    (new Image()).src = "greys.png";
    (new Image()).src = "lines.png";
    (new Image()).src = "moire.png";
    (new Image()).src = "red.png";
    (new Image()).src = "rgb.png";
    (new Image()).src = "rgbtriangles.png";
    (new Image()).src = "triangles.png";
    (new Image()).src = "3d.png";
    (new Image()).src = "crosshairs.png";
    (new Image()).src = "super.png";
    (new Image()).src = "moremoire.png";
    (new Image()).src = "moregrey.png";
    (new Image()).src = "morestripes.png";
    (new Image()).src = "wavy.png";



};

function noanim() {
    document.getElementById('topleftcurve').classList.remove('tlcanim');
    document.getElementById('bottomrightcurve').classList.remove('brcanim');
    document.getElementById('eight').classList.remove('eightanim');
};

function randomiser() {
    document.getElementById('proginfo').style.display = "initial";
    var progTitle = document.getElementById('progTitle').value;
    document.getElementsByClassName('title')[0].innerHTML = progTitle;
    var progDay = document.getElementById('progDay').value;
    document.getElementsByClassName('day')[0].innerHTML = progDay;
    var progTime = document.getElementById('progTime').value;
    document.getElementsByClassName('time')[0].innerHTML = progTime;
    if (document.getElementById("colours").checked === true) {
        document.getElementById('colourselector').style.backgroundImage = "url('bars.png')";
        var patternsArray = ["wavy.png", "morestripes.png", "super.png", "bullseye.png", "circles.png", "waves.png", "stripes.png", "bars.png", "black bars.png", "blue.png", "green.png", "red.png", "rgb.png", "rgbtriangles.png"];

    } else if (document.getElementById("bw").checked === true) {
        document.getElementById('colourselector').style.backgroundImage = "url('greys.png')";
        var patternsArray = ["moremoire.png", "moregrey.png", "crosshairs.png", "3d.png", "saw.gif", "greystripe.png", "blackboard.png", "checkerboard.png", "greys.png", "lines.png", "moire.png", "triangles.png"];

    } else if (document.getElementById("coloursbw").checked === true) {
        document.getElementById('colourselector').style.backgroundImage = "url('black bars.png')";
        var patternsArray = ["wavy.png", "moremoire.png", "moregrey.png", "morestripes.png", "super.png", "crosshairs.png", "3d.png", "bullseye.png", "circles.png", "waves.png", "saw.gif", "stripes.png", "greystripe.png", "bars.png", "black bars.png", "blackboard.png", "blue.png", "checkerboard.png", "checkerboards.gif", "diag.png", "green.png", "greys.png", "lines.png", "moire.png", "red.png", "rgb.png", "rgbtriangles.png", "triangles.png"];

    } else {
        alert("error");
    };
    if (document.getElementById("panel").checked === true) {
        document.getElementById('proginfo').style.display = "initial";
    } else {
        document.getElementById('proginfo').style.display = "none";
    };
    if (document.getElementById("logo").checked === true) {
        document.getElementById('eight').style.display = "initial";
        document.getElementById('eight').classList.add('eightanim');
        setTimeout(noanim, 700);
    } else {
        document.getElementById('eight').style.display = "none";
    };
    if (document.getElementById("rings").checked === true) {
        document.getElementById('topleftcurve').style.display = "initial";
        document.getElementById('bottomrightcurve').style.display = "initial";
        document.getElementById('topleftcurve').classList.add('tlcanim');
        document.getElementById('bottomrightcurve').classList.add('brcanim');
        setTimeout(noanim, 700);
    } else {
        document.getElementById('topleftcurve').style.display = "none";
        document.getElementById('bottomrightcurve').style.display = "none";
    };


    const chooseRandom = (patternsArray, num = 1) => {
        const res = [];
        for (let i = 0; i < num;) {
            const random = Math.floor(Math.random() * patternsArray.length);
            if (res.indexOf(patternsArray[random]) !== -1) {
                continue;
            };
            res.push(patternsArray[random]);
            i++;
        };
        return res;
    };
    var randomised = chooseRandom(patternsArray, 6);
    var img1 = "url('" + randomised[0] + "')";
    var img2 = "url('" + randomised[1] + "')";
    var img3 = "url('" + randomised[2] + "')";
    var img4 = "url('" + randomised[3] + "')";
    var img5 = "url('" + randomised[4] + "')";
    var img6 = "url('" + randomised[5] + "')";
    document.getElementById('leftbumper').style.backgroundImage = img1;
    document.getElementById('topleft').style.backgroundImage = img2;
    document.getElementById('topright').style.backgroundImage = img3;
    document.getElementById('bottomleft').style.backgroundImage = img4;
    document.getElementById('bottomright').style.backgroundImage = img5;
    document.getElementById('rightbumper').style.backgroundImage = img6;



};
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.getElementById('programmeimage'); // $('img')[0]
            img.style.backgroundImage = "url('" + URL.createObjectURL(this.files[0]) + "')"; // set src to blob url
            // img.onload = imageIsLoaded;
        }
    });
});



function repeatRandomise() {
    randomiser();
    a = setTimeout(repeatRandomise, 1000);
    document.getElementById('repeatbutton').style.display = "none";
    document.getElementById('stoprepeat').style.display = "initial";
};

function stopRandomise() {
    clearTimeout(a);
    document.getElementById('repeatbutton').style.display = "initial";
    document.getElementById('stoprepeat').style.display = "none";
};

function np() {
    window.location.href = "../index.html";
}