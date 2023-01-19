var url = window.location.href;
var currentProject = url.split('?')[1]
console.log("currentProject");


async function fetchPosts() {
    let response = await fetch("https://bradleysans.uk/projects/posts.xml");

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        console.log(json);
        i = 0;
        console.log(json.posts[i].blurb)
    } else {
        alert("HTTP-Error: " + response.status);
    }
}
fetchPosts();