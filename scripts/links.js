const emailLink = document.getElementById('email');
const githubLink = document.getElementById('github');
const linkedinLink = document.getElementById('linkedin');
const twitterLink = document.getElementById('twitter');
const instagramLink = document.getElementById('instagram');
const mastodonLink = document.getElementById('mastodon');
const emailVisit = () => {
    window.location.href = "mailto:bradley-sansom@outlook.com";
}
emailLink.addEventListener("click", emailVisit);
const githubVisit = () => {
    window.location.href = "https://github.com/bradleysansom";
}
githubLink.addEventListener("click", githubVisit);
const linkedinVisit = () => {
    window.location.href = "https://linkedin.com/in/bradleysans";
}
linkedinLink.addEventListener("click", linkedinVisit);
const twitterVisit = () => {
    window.location.href = "https://twitter.com/bradleysans";
}
twitterLink.addEventListener("click", twitterVisit);
const instagramVisit = () => {
    window.location.href = "https://instagram.com/bradleysans";
}
instagramLink.addEventListener("click", instagramVisit);
const mastodonVisit = () => {
    window.location.href = "https://mastodon.me.uk/@bradleysans"
}
mastodonLink.addEventListener("click", mastodonVisit)