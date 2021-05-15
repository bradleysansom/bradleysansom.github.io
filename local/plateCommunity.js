function plateCommunity() {
    fetch('https://bradleysansom.github.io/local/groups/groups.json')
        .then(response => response.json())
        .then(data => {

            console.log(data);



            var applicableOutcode = localStorage.getItem('outcode');
            console.log("Applicable outcode: " + applicableOutcode);





        });

};