importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

// workbox.routing.function registerServiceWorker() {
//     if ('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('/sw.js').then(reg => {
//             console.log('Registration successful', reg);
//         })
//             .catch(e => console.error('Error during service worker registration:', e));
//     } else {
//         console.warn('Service Worker is not supported');
//     }
// }

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
);

const staticCacheName = 'site-static';

const assets = [
    '/',
    'index.html',
    'service-worker.js',
    'app.css',
    'manifest.webmanifest',
    'resources/menu.svg',
    'ico/arrow.svg',
    'ico/bookmark.svg',
    'ico/calender.svg',
    'ico/class.svg',
    'ico/qb.svg',
    'menu_page/menu.html',
    'menu_page/menu.css',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap',
    'https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js',
    // request urls here to store
];








// self.addEventListener("fetch", event => {
//     console.log("You fetched " + event.url);
// });




self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets);
            console.log('caching offline assets')
        })
    );
});

self.addEventListener('fetch', evt => {
    // console.log('fetch event',evt);
    evt.respondWith(

        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);

        })
    )
});

// https://youtu.be/g9LfyCZjeKI