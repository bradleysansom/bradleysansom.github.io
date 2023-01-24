var respondViaTwitter = document.getElementById("respondViaTwitter");
respondViaTwitter.href = "https://twitter.com/intent/tweet?text=" + window.location.href;

var respondViaReddit = document.getElementById("respondViaReddit");
respondViaReddit.href = "https://www.reddit.com/submit?url=" + window.location.href;

var currentUrl = document.getElementById("urlGoesHere");
currentUrl.textContent = window.location.href;

var copyUrlButtonIcon = document.getElementById("copyUrlButtonIcon");
var copiedUrl = copyUrlButtonIcon.classList;

function respondViaMastodon() {

    domain = prompt("Enter your Mastodon server URL", "mastodon.social");

    if (domain == "" || domain == null) {
        return;
    }
    url = "https://" + domain + "/share?text=" + window.location.href;
    window.open(url, '_blank');
}

