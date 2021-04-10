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
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
);
