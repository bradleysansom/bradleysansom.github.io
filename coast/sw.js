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
            'visit/main.js'
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