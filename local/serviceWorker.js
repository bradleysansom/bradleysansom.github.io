var version = 'v1::';
console.log('Service worker installing');
self.addEventListener("install", function(event) {
    event.waitUntil(
        caches
        .open(version + 'fundamentals')
        .then(function(cache) {
            return cache.addAll([
                '/',
                '/local/',
                '/local/images/eastMidlands.jpg',
                '/local/images/eastOfEngland.jpg',
                '/local/images/estate.jpg',
                '/local/images/franked.svg',
                '/local/images/housing.jpg',
                '/local/images/keys.jpg',
                '/local/images/northEast.jpg',
                '/local/images/northWest.jpg',
                '/local/images/pack.jpg',
                '/local/images/southEast.jpg',
                '/local/images/southWest.jpg',
                '/local/images/westMidlands.jpg',
                '/local/images/white.jpg',
                '/local/images/yorkshire.jpg',
                '/local/logos/alliance.png',
                '/local/logos/dup.png',
                '/local/logos/green.png',
                '/local/logos/lab.png',
                '/local/logos/lib.png',
                '/local/logos/plaid.png',
                '/local/logos/sdlp.png',
                '/local/logos/sinn.png',
                '/local/logos/snp.png',
                '/local/logos/speaker.png',
                '/local/logos/Strip.png',
                '/local/logos/tory.png'

            ]);
        })
        .then(function() {
            console.log('Service worker installed');
        })
    );
});

self.addEventListener('fetch', () => console.log("fetch"));