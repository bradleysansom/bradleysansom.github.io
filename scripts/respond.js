var respondViaTwitter = document.getElementById("respondViaTwitter");
respondViaTwitter.href = "https://twitter.com/intent/tweet?text=" + window.location.href;

var currentUrl = document.getElementById("urlGoesHere");
currentUrl.textContent = window.location.href;

var copyUrlButtonIcon = document.getElementById("copyUrlButtonIcon");
var copiedUrl = copyUrlButtonIcon.classList;

