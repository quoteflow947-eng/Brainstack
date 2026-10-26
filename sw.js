/* BrainStack Service Worker — Guaranteed Offline Support */

// CHANGE THIS VERSION NUMBER EVERY TIME YOU UPDATE THE APP
const CACHE = "brainstack-v16";

const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./content.js",
  "./manifest.webmanifest",
  "./icon.svg"
];

// 1. Install: Open cache and save all assets
self.addEventListener("install", (event) => {
  self.skipWaiting(); // Force the new service worker to take over immediately
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Activate: Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control of all pages immediately
  );
});

// 3. Fetch: Serve from cache first, then network
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // If the file is in the cache, return it immediately (Offline support)
      if (cachedResponse) {
        return cachedResponse;
      }

      // If not in cache, try to fetch from the network
      return fetch(event.request).then((networkResponse) => {
        // If it's a successful response, save it to the cache for next time
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // If network fails and file is not in cache, try returning index.html
        if (event.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});
