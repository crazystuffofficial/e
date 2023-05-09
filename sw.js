self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname === '/proxy') {
    event.respondWith(fetch(url.searchParams.get('url')));
  }
});
