// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service worker registered!', reg))
      .catch(err => console.log('Service worker registration failed:', err));
  });
}

// Intercept form submission and fetch URL through service worker
const form = document.getElementById('proxy-form');
const result = document.getElementById('result');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const url = document.getElementById('url-input').value;
  const response = await fetch(`/proxy?url=${url}`);
  const text = await response.text();
  result.innerText = text;
});
