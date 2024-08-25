const CACHE_VERSION = 'v2';  // Updated version to invalidate old cache
const CACHE_NAME = `my-site-cache-${CACHE_VERSION}`;

const urlsToCache = [
  '/',
  '/index.html',
  '/index.css',
  '/index.js',
  '/store/store.html',
  '/store/store.js',
  '/signin/signin.html',
  '/createAcc/createAcc.html',
  '/contact/contact.html',
  '/cart/cart.html',
  '/img/fashionevo-high-resolution-logo-white.png',
  '/img/fashionevo-high-resolution-logo-transparent.png',
  '/img/fashionevo-high-resolution-logo.png',
  '/img/fv-high-resolution-logo-black-transparent.png',
  '/img/fv-high-resolution-logo-black.png',
  '/img/fv-high-resolution-logo-white-transparent.png',
  '/img/fv-high-resolution-logo.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  // Delete old caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cache or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // Fallback to a default resource or an offline page
        return caches.match('/offline.html');
      })
  );
});
