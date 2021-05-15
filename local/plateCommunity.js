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


            // Groups
            var latitude = localStorage.getItem('latitude');
            var longitude = localStorage.getItem('longitude');
            console.log("all groups: ");
            console.log(groups);
            async function renderGroup() {
                var i = 1;
                var ind = i - 1;
                console.log(i);
                console.log(groups[ind]);
                async function getCoords() {
                    var groupPostcode = groups[ind].address.postcode;
                    const response = await fetch('https://api.postcodes.io/postcodes/' + groupPostcode);
                    const json = await response.json();
                    console.log(json);
                    var stringGroupPosts = JSON.stringify(json);
                    var arrayGroupPosts = JSON.parse(stringGroupPosts);
                    var resultsGroupPosts = arrayGroupPosts.result;
                    var groupLatitude = resultsGroupPosts.latitude;
                    var groupLongitude = resultsGroupPosts.longitude;
                    console.log(groupLatitude);
                    console.log(groupLongitude);
                };
                await getCoords();
                i = i + 1;
            }
            groups.forEach(renderGroup);


            // Services
            console.log("all services: ");
            console.log(services);
            var applicableOutcode = localStorage.getItem('outcode');
            console.log("Applicable outcode: " + applicableOutcode);
            var applicableServices = services.filter(records => records.areas.includes(applicableOutcode));
            console.log("local services:");
            console.log(applicableServices);
            function renderService() {
                var i = 1;
                var ind = i - 1;
                console.log(i);
                console.log(applicableServices[ind]);
                var name = applicableServices[ind].name;
                console.log(name);
                var description = applicableServices[ind].description;
                var website = applicableServices[ind].links.website;
                var facebook = applicableServices[ind].links.facebook;
                var twitter = applicableServices[ind].links.twitter;
                var tel = applicableServices[ind].links.telephone;
                var serviceContainer = document.getElementById('communityServices');
                var newService = document.createElement('div');
                newService.className = "service";
                newService.id = "service" + i;
                serviceContainer.appendChild(newService);
                var serviceBanner = document.createElement('div')
                newService.appendChild(serviceBanner);
                serviceBanner.className = "serviceBanner";
                serviceBanner.innerHTML = i;
                var serviceInfo = document.createElement('div');
                newService.appendChild(serviceInfo);
                serviceInfo.className = "serviceInfo";
                var serviceInfoName = document.createElement('span');
                serviceInfo.appendChild(serviceInfoName);
                serviceInfoName.className = "serviceInfoName";
                serviceInfoName.innerHTML = name;
                var serviceInfoDescription = document.createElement('span');
                serviceInfo.appendChild(serviceInfoDescription);
                serviceInfoDescription.className = "serviceInfoDescription";
                serviceInfoDescription.innerHTML = description;
                if (website != undefined) {
                    var serviceInfoWebsite = document.createElement('span');
                    serviceInfo.appendChild(serviceInfoWebsite);
                    serviceInfoWebsite.className = "serviceInfoWebsite";
                    serviceInfoWebsite.innerHTML = website;
                };
                if (facebook != undefined) {
                    var serviceInfoFacebook = document.createElement('span');
                    serviceInfo.appendChild(serviceInfoFacebook);
                    serviceInfoFacebook.className = "serviceInfoFacebook";
                    serviceInfoFacebook.innerHTML = facebook;
                };
                if (twitter != undefined) {
                    var serviceInfoTwitter = document.createElement('span');
                    serviceInfo.appendChild(serviceInfoTwitter);
                    serviceInfoTwitter.className = "serviceInfoTwitter";
                    serviceInfoTwitter.innerHTML = twitter;
                };
                if (tel != undefined) {
                    var serviceInfoTelephone = document.createElement('span');
                    serviceInfo.appendChild(serviceInfoTelephone);
                    serviceInfoTelephone.className = "serviceInfoTelephone";
                    serviceInfoTelephone.innerHTML = tel;
                };
                i = i + 1;
            }
            applicableServices.forEach(renderService);






        });

};