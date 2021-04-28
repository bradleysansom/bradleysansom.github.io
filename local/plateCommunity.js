function plateCommunity() {
    fetch('https://bradleysansom.github.io/local/groups/groups.xml')
        .then(response => response.text())
        .then(data => {

            console.log(data);
            var applicableOutcode = localStorage.getItem('outcode');


            function communityGroup() {

            }

            function communityService() {

            }
        });

};