function plateCommunity() {
    fetch('https://bradleysansom.github.io/local/groups/groups.xml')
        .then(response => response.text())
        .then(data => {
            // Here's a list of repos!
            console.log(data)
        });

};