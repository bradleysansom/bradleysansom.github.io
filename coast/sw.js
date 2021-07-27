var CACHE = 'cache-only';


self.addEventListener('install', function (evt) {
    console.log('The service worker is being installed.');


    evt.waitUntil(precache());
});


self.addEventListener('fetch', function (evt) {
    console.log('The service worker is serving the asset.');
    evt.respondWith(fromCache(evt.request));
});


function precache() {
    return caches.open(CACHE).then(function (cache) {
        return cache.addAll([
            'index.html',
            'needles.jpg',
            'port.jpg',
            'style.css',
            'food/index.html',
            'food/list.js',
            'food/main.js',
            'food/mcd.svg',
            'food/sub.svg',
            'visit/bags.jpg',
            'visit/index.html',
            'visit/list.js',
            'visit/main.js',
            'https://fonts.googleapis.com/css2?family=Barlow:wght@400;700;900&family=Damion&family=Dancing+Script:wght@700&family=Germania+One&family=Goblin+One&family=Lobster&family=Londrina+Shadow&family=Montserrat:wght@700&family=Sacramento&family=Satisfy&family=Syncopate&family=Tourney:wght@300&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Assorted_Craft_-_Old_Portsmouth_-_geograph.org.uk_-_1973039.jpg/1024px-Assorted_Craft_-_Old_Portsmouth_-_geograph.org.uk_-_1973039.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Gunwharf_Quays.jpg/512px-Gunwharf_Quays.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/6/60/Southsea_Clarence_Pier.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/View_of_Westquay%2C_Southampton.jpg/1024px-View_of_Westquay%2C_Southampton.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mute_Swan_at_Newport_Quay.jpg/2048px-Mute_Swan_at_Newport_Quay.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Hovercraft_landing_area_on_Ryde_Promenade._-_panoramio.jpg/2048px-Hovercraft_landing_area_on_Ryde_Promenade._-_panoramio.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Buildings_in_Cowes_as_seen_from_esplanade.jpg/2048px-Buildings_in_Cowes_as_seen_from_esplanade.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flickr_-_ronsaunders47_-_SHANKLIN_SEASIDE_AMUSEMENTS._IOW.jpg/2048px-Flickr_-_ronsaunders47_-_SHANKLIN_SEASIDE_AMUSEMENTS._IOW.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Flickr_-_ronsaunders47_-_Nice_day_for_a_stroll_down_along_the_seafront...jpg/2048px-Flickr_-_ronsaunders47_-_Nice_day_for_a_stroll_down_along_the_seafront...jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Down_to_The_Needles_Viewpoint%2C_Isle_of_Wight_-_geograph.org.uk_-_1807468.jpg/2048px-Down_to_The_Needles_Viewpoint%2C_Isle_of_Wight_-_geograph.org.uk_-_1807468.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bournemouth_06.JPG/1024px-Bournemouth_06.JPG',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Crown_Pub_-_Fareham_-_geograph.org.uk_-_1858342.jpg/1024px-The_Crown_Pub_-_Fareham_-_geograph.org.uk_-_1858342.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/2048px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
            'https://img.icons8.com/material-rounded/24/008080/search.png',
            'https://img.icons8.com/material-rounded/24/ffffff/dining-room.png',
            'https://img.icons8.com/material-rounded/24/ffffff/shopping-bag.png',
            'https://img.icons8.com/material-rounded/24/ffffff/beach.png',
            'https://img.icons8.com/material-rounded/24/ffffff/city.png',
            'https://img.icons8.com/material-rounded/24/ffffff/apartment.png',
            'https://img.icons8.com/material-rounded/18/000000/ringing-phone.png',
            'https://img.icons8.com/material-rounded/18/000000/domain--v2.png',
            'https://img.icons8.com/material-rounded/18/000000/clock.png',
            'https://img.icons8.com/material-rounded/12/ffffff/dining-room.png',
            'https://img.icons8.com/material-rounded/12/ffffff/gps-device.png',
            'https://img.icons8.com/material-rounded/24/ffffff/search.png',
            'https://img.icons8.com/material-rounded/18/ffffff/ringing-phone.png',
            'https://img.icons8.com/material-rounded/18/ffffff/domain--v2.png',
            'https://img.icons8.com/material-rounded/18/ffffff/clock.png'

        ]);
    });
}


function fromCache(request) {
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (matching) {
            return matching || Promise.reject('no-match');
        });
    });
}