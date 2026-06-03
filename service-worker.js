// service-worker.js
// Runs in the background, separate from the web page.
// Intercepts network requests and serves files from a local cache
// so the app works even without internet.

const CACHE_NAME = 'flashcards-v2';

// The minimum set of files cached on first install (the "app shell").
const APP_SHELL = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/decks.js?v=4',
  '/examples.js',
  '/families.js',
  '/soundalikes.js',
  '/icons/icon.svg'
];

// These domains go straight to the internet — never intercept them.
// Supabase handles sign-in and cloud sync; CDN provides the JS libraries.
const SKIP_DOMAINS = [
  'supabase.co',
  'cdn.jsdelivr.net',
  'fonts.googleapis.com',
  'fonts.gstatic.com'
];

// INSTALL — fires once when the service worker is first registered.
// Pre-caches the app shell so the app works offline after the first visit.
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(APP_SHELL);
    })
  );
  self.skipWaiting(); // Activate immediately, don't wait for old SW to be replaced
});

// ACTIVATE — fires after install, once any old service worker is gone.
// Deletes caches from previous versions so the phone doesn't fill up.
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(name) { return name !== CACHE_NAME; })
          .map(function(name) { return caches.delete(name); })
      );
    })
  );
  self.clients.claim(); // Take control of open tabs immediately
});

// FETCH — fires for every network request the page makes.
// Strategy: cache-first for our own files, network-only for external domains.
self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // Only handle GET requests — POST/PUT/DELETE (Supabase writes) must go to network
  if (event.request.method !== 'GET') return;

  // Skip external domains (Supabase, CDN, Google Fonts)
  var shouldSkip = SKIP_DOMAINS.some(function(domain) {
    return url.hostname === domain || url.hostname.endsWith('.' + domain);
  });
  if (shouldSkip) return;

  // Only cache same-origin requests (files on YOUR Vercel domain)
  if (url.origin !== self.location.origin) return;

  // Cache-first: serve from cache if available, otherwise fetch and store
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;

      return fetch(event.request).then(function(networkResponse) {
        if (networkResponse && networkResponse.status === 200) {
          // Clone before storing — a response body can only be read once
          var responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(function() {
        // Network failed and nothing in cache — fall back to index.html for page requests
        if (event.request.headers.get('accept') &&
            event.request.headers.get('accept').includes('text/html')) {
          return caches.match('/index.html');
        }
      });
    })
  );
});
