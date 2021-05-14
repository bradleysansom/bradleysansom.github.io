function plateCommunity() {
    fetch('https://bradleysansom.github.io/local/groups/groups.xml')
        .then(response => response.text())
        .then(data => {

            console.log(data);
            var parser = new DOMParser();
            var communityOrgs = parser.parseFromString(data, "text/xml");
            var community = (communityOrgs.getElementsByTagName('community'));


            var applicableOutcode = localStorage.getItem('outcode');
            var outcodeQuery = "<outcode>" + applicableOutcode;


            function communityGroup() {

            }

            function communityService() {
                var services = communityOrgs.getElementsByTagName('service');
                console.log(services);
                var outcodes = communityOrgs.getElementsByTagName('service')[0].getElementsByTagName('areas')[0];
                console.log(outcodes);
                var iOutcodes;



            }
            communityService();

        });

};