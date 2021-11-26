function plateCommunity() {
    var groupsRendered = "false";
    localStorage.setItem("groupsRendered", groupsRendered);
    var servicesRendered = "false";
    localStorage.setItem("servicesRendered", servicesRendered);
    fetch('https://bradleysanso.me/local/groups/groups.json')
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
            var g = 1;
            var h = 1;
            async function renderGroup() {
                var gnd = g - 1;
                console.log(g);
                console.log(groups[gnd]);
                var groupPostcode = groups[gnd].address.postcode;
                g = g + 1;
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

                //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                //:::               Haversine Formula code                                    :::
                //:::               GeoDataSource.com (C) All Rights Reserved 2018            :::
                //:::               The sample code is licensed under LGPLv3                  :::
                //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                function distance(lat1, lon1, lat2, lon2, unit) {
                    if ((lat1 == lat2) && (lon1 == lon2)) {
                        return 0;
                    }
                    else {
                        var radlat1 = Math.PI * lat1 / 180;
                        var radlat2 = Math.PI * lat2 / 180;
                        var theta = lon1 - lon2;
                        var radtheta = Math.PI * theta / 180;
                        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                        if (dist > 1) {
                            dist = 1;
                        }
                        dist = Math.acos(dist);
                        dist = dist * 180 / Math.PI;
                        dist = dist * 60 * 1.1515;
                        if (unit == "K") { dist = dist * 1.609344 }
                        if (unit == "N") { dist = dist * 0.8684 }
                        return dist;
                    }
                }
                var distanceToGroup = distance(latitude, longitude, groupLatitude, groupLongitude, 'M')
                console.log(distanceToGroup);
                if (distanceToGroup < 7.5) {
                    var groupsRenderedAgain = "true";
                    localStorage.setItem("groupsRenderedAgain", groupsRenderedAgain);
                    var name = groups[gnd].name;
                    var description = groups[gnd].description;
                    var website = groups[gnd].links.website;
                    var facebook = groups[gnd].links.facebook;
                    var twitter = groups[gnd].links.twitter;
                    var tel = groups[gnd].links.telephone;
                    var times = groups[gnd].times;
                    var addressLine1 = groups[gnd].address.addressLine1;
                    var addressLine2 = groups[gnd].address.addressLine2;
                    var addressLine3 = groups[gnd].address.addressLine3;
                    var addressLine4 = groups[gnd].address.addressLine4;
                    document.getElementById('groupHeader').style.display = "initial";
                    var groupContainer = document.getElementById('communityGroups');
                    var newGroup = document.createElement('div');
                    newGroup.className = "group";
                    newGroup.id = "group" + h;
                    groupContainer.appendChild(newGroup);
                    var groupBanner = document.createElement('div')
                    newGroup.appendChild(groupBanner);
                    groupBanner.className = "groupBanner";
                    groupBanner.innerHTML = h;
                    var groupInfo = document.createElement('div');
                    newGroup.appendChild(groupInfo);
                    groupInfo.className = "groupInfo";
                    var groupInfoName = document.createElement('span');
                    groupInfo.appendChild(groupInfoName);
                    groupInfoName.className = "groupInfoName";
                    groupInfoName.innerHTML = name;
                    var groupInfoDescription = document.createElement('span');
                    groupInfo.appendChild(groupInfoDescription);
                    groupInfoDescription.className = "groupInfoDescription";
                    groupInfoDescription.innerHTML = description;
                    var groupInfoTimes = document.createElement('span');
                    groupInfo.appendChild(groupInfoTimes);
                    groupInfoTimes.className = "groupInfoTimes";
                    groupInfoTimes.innerHTML = times;
                    if (addressLine1 != "") {
                        var groupInfoAddressLine1 = document.createElement('span');
                        groupInfo.appendChild(groupInfoAddressLine1);
                        groupInfoAddressLine1.className = "groupInfoAddressLine1";
                        groupInfoAddressLine1.innerHTML = addressLine1;
                    };
                    if (addressLine2 != "") {
                        var groupInfoAddressLine2 = document.createElement('span');
                        groupInfo.appendChild(groupInfoAddressLine2);
                        groupInfoAddressLine2.className = "groupInfoAddressLine2";
                        groupInfoAddressLine2.innerHTML = addressLine2;
                    };
                    if (addressLine3 != "") {
                        var groupInfoAddressLine3 = document.createElement('span');
                        groupInfo.appendChild(groupInfoAddressLine3);
                        groupInfoAddressLine3.className = "groupInfoAddressLine3";
                        groupInfoAddressLine3.innerHTML = addressLine3;
                    };
                    if (addressLine4 != "") {
                        var groupInfoAddressLine4 = document.createElement('span');
                        groupInfo.appendChild(groupInfoAddressLine4);
                        groupInfoAddressLine4.className = "groupInfoAddressLine4";
                        groupInfoAddressLine4.innerHTML = addressLine4;
                    };
                    if (groupPostcode != "") {
                        var groupInfoPostcode = document.createElement('span');
                        groupInfo.appendChild(groupInfoPostcode);
                        groupInfoPostcode.className = "groupInfoPostcode";
                        groupInfoPostcode.innerHTML = groupPostcode;
                    };
                    if (website != "") {
                        var groupInfoWebsite = document.createElement('a');
                        groupInfo.appendChild(groupInfoWebsite);
                        groupInfoWebsite.className = "groupInfoWebsite";
                        groupInfoWebsite.innerHTML = website;
                        groupInfoWebsite.href = website;
                    };
                    if (facebook != "") {
                        var groupInfoFacebook = document.createElement('a');
                        groupInfo.appendChild(groupInfoFacebook);
                        groupInfoFacebook.className = "groupInfoFacebook";
                        groupInfoFacebook.innerHTML = facebook;
                        groupInfoFacebook.href = facebook;
                    };
                    if (twitter != "") {
                        var groupInfoTwitter = document.createElement('a');
                        groupInfo.appendChild(groupInfoTwitter);
                        groupInfoTwitter.className = "groupInfoTwitter";
                        groupInfoTwitter.innerHTML = twitter;
                        groupInfoTwitter.href = twitter;
                    };
                    if (tel != "") {
                        var groupInfoTelephone = document.createElement('a');
                        groupInfo.appendChild(groupInfoTelephone);
                        groupInfoTelephone.className = "groupInfoTelephone";
                        groupInfoTelephone.innerHTML = tel;
                        groupInfoTelephone.href = "tel:" + tel;
                    };
                    h = h + 1;
                }

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
            var i = 1;
            function renderService() {
                var servicesRenderedAgain = "true";
                localStorage.setItem("servicesRenderedAgain", servicesRenderedAgain);
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
                document.getElementById('serviceHeader').style.display = "initial";
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
                if (website != "") {
                    var serviceInfoWebsite = document.createElement('a');
                    serviceInfo.appendChild(serviceInfoWebsite);
                    serviceInfoWebsite.className = "serviceInfoWebsite";
                    serviceInfoWebsite.innerHTML = website;
                    serviceInfoWebsite.href = website;
                };
                if (facebook != "") {
                    var serviceInfoFacebook = document.createElement('a');
                    serviceInfo.appendChild(serviceInfoFacebook);
                    serviceInfoFacebook.className = "serviceInfoFacebook";
                    serviceInfoFacebook.innerHTML = facebook;
                    serviceInfoFacebook.href = facebook;
                };
                if (twitter != "") {
                    var serviceInfoTwitter = document.createElement('a');
                    serviceInfo.appendChild(serviceInfoTwitter);
                    serviceInfoTwitter.className = "serviceInfoTwitter";
                    serviceInfoTwitter.innerHTML = twitter;
                    serviceInfoTwitter.href = twitter;
                };
                if (tel != "") {
                    var serviceInfoTelephone = document.createElement('a');
                    serviceInfo.appendChild(serviceInfoTelephone);
                    serviceInfoTelephone.className = "serviceInfoTelephone";
                    serviceInfoTelephone.innerHTML = tel;
                    serviceInfoTelephone.href = "tel:" + tel;
                };
                i = i + 1;
            }
            applicableServices.forEach(renderService);






        });


};
