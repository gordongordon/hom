var SLOW_TIME = 3000;

var CACHE_NAME = 'mrhouse-cache-v1';
var urlsToCache = [
  '/',
  '/manifest.json',
  '/index.bundle.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// this.addEventListener( 'install', function () {
//   console.log('Installed service worker');
// } );

this.addEventListener( 'fetch', function(event) {
  var url = event.request.url;

  if ( url.indexOf( 'blocking' ) === -1) {
  return;
  }

  var promise = Promise.race( [
    new Promise( ( resolve, reject) => setTimeout(
      () => reject( new Response( 'Request killed!' ) ),
      SLOW_TIME
    ) ),
    fetch( event.request ),
  ] );

  event.respondWith( promise );
} );