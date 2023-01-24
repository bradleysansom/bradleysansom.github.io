var respondViaCommentParade = document.getElementById("respondViaCommentParade");
var url = encodeURIComponent(window.location.href);
var commentUrl = "https://quill.p3k.io/?dontask=1&me=https%3A%2F%2Fcommentpara.de%2F&reply=" + url;
respondViaCommentParade.href = commentUrl;

var respondViaTwitter = document.getElementById("respondViaTwitter");
respondViaTwitter.href = "https://twitter.com/intent/tweet?text=" + window.location.href.replace("#", "%23");

var respondViaReddit = document.getElementById("respondViaReddit");
respondViaReddit.href = "https://www.reddit.com/submit?url=" + window.location.href.replace("#", "%23");

var currentUrl = document.getElementById("urlGoesHere");
currentUrl.textContent = window.location.href;

var copyUrlButtonIcon = document.getElementById("copyUrlButtonIcon");
var copiedUrl = copyUrlButtonIcon.classList;

function respondViaMastodon() {

    domain = prompt("Enter your Mastodon server URL", "mastodon.social");

    if (domain == "" || domain == null) {
        return;
    }
    url = "https://" + domain + "/share?text=" + window.location.href.replace("#", "%23");
    window.open(url, '_blank');
}

