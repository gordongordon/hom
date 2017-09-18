//var SLOW_TIME = 3000;

var CACHE_NAME = "mrhouse-cache-v1";
var urlsToCache = ["/", "/index.html", "/manifest.json", "/index.bundle.js"];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// this.addEventListener( 'install', function () {
//   console.log('Installed service worker');
// } );

self.addEventListener("fetch", function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

// this.addEventListener( 'fetch', function(event) {
//   var url = event.request.url;

//   if ( url.indexOf( 'blocking' ) === -1) {
//   return;
//   }

//   var promise = Promise.race( [
//     new Promise( ( resolve, reject) => setTimeout(
//       () => reject( new Response( 'Request killed!' ) ),
//       SLOW_TIME
//     ) ),
//     fetch( event.request ),
//   ] );

//   event.respondWith( promise );
// } );
