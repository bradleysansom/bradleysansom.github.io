var version = 'v1::';
console.log('Service worker installing');
self.addEventListener("install", function(event) {
    event.waitUntil(
        caches
        .open(version + 'fundamentals')
        .then(function(cache) {
            return cache.addAll([
                '/',
                '/justaminute/cross.png',
                '/justaminute/godRestHisSoul.png',
                '/justaminute/icon.png',
                '/justaminute/index.html'

            ]);
        })
        .then(function() {
            console.log('Service worker installed');
        })
    );
});

self.addEventListener('fetch', () => console.log("fetch"));