const CACHE_NAME = 'bumkal-sri-cache-v5';
const urlsToCache = [
    './index.html',
    './manifest.json',
    './firebase.js',
    './icon-192.png',
    './icon-512.png'
];

// Tahap Install: Simpan cache baru dan paksa update langsung
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Tahap Activate: Hapus cache versi lama yang tersisa di HP
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Menghapus cache lama:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Tahap Fetch: Prioritaskan ambil dari jaringan (network), jika offline baru gunakan cache
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                return response;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});