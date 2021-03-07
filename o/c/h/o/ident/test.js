var A;

function preloader() {
    console.log('starting preload');
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
    console.log('preload finished');


};



function randomiser() {
    console.log('randomise begin');
    var patternsArray = ["wavy.png", "moremoire.png", "moregrey.png", "morestripes.png", "super.png", "crosshairs.png", "3d.png", "bullseye.png", "circles.png", "waves.png", "saw.gif", "stripes.png", "greystripe.png", "bars.png", "black bars.png", "blackboard.png", "blue.png", "checkerboard.png", "checkerboards.gif", "diag.png", "green.png", "greys.png", "lines.png", "moire.png", "red.png", "rgb.png", "rgbtriangles.png", "triangles.png"];
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




function repeatRandomise() {
    randomiser();
    a = setTimeout(repeatRandomise, 1000);

};



function np() {
    window.location.href = "../index.html";
}