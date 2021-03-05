var version = 'v1::';
console.log('Service worker installing');
self.addEventListener("install", function(event) {
    event.waitUntil(
        caches
        .open(version + 'fundamentals')
        .then(function(cache) {
            return cache.addAll([
                '/logos/alliance.png',
                '/logos/dup.png',
                '/logos/green.png',
                '/logos/lab.png',
                '/logos/lib.png',
                '/logos/plaid.png',
                '/logos/sdlp.png',
                '/logos/sinn.png',
                '/logos/snp.png',
                '/logos/speaker.png',
                '/logos/Strip.png',
                '/logos/tory.png',
                '/images/eastMidlands.jpg',
                '/images/eastOfEngland.jpg',
                '/images/estate.jpg',
                '/images/franked.svg',
                '/images/housing.jpg',
                '/images/keys.jpg',
                '/images/northEast.jpg',
                '/images/northWest.png',
                '/images/pack.jpg',
                '/images/southEast.jpg',
                '/images/southWest.jpg',
                '/images/westMidlands.jpg',
                '/images/white.jpg',
                '/images/yorkshire.jpg'

            ]);
        })
        .then(function() {
            console.log('Service worker installed');
        })
    );
});