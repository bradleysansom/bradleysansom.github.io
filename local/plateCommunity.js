function plateCommunity() {
    fetch('https://bradleysansom.github.io/local/groups/groups.json')
        .then(response => response.json())
        .then(data => {

            console.log(data);
            var stringOfCommunity = JSON.stringify(data);
            console.log(stringOfCommunity);
            var arrayOfCommunity = JSON.parse(stringOfCommunity);
            console.log(arrayOfCommunity);
            localStorage.setItem('arrayOfCommunity', arrayOfCommunity);
            var groups = arrayOfCommunity.groups;
            var services = arrayOfCommunity.services;
            console.log(services);

            // Groups



            // Services
            var applicableOutcode = localStorage.getItem('outcode');
            console.log("Applicable outcode: " + applicableOutcode);
            var applicableServices = services.filter(records => records.areas === applicableOutcode);
            console.log(applicableServices);





        });

};