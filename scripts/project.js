async function fetchPosts() {
    let response = await fetch("https://bradleysans.uk/posts.json");

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