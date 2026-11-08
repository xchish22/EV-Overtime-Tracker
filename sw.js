/* Overtime Tracker service worker, app v2.7.0. The page is fetched fresh when online (so updates show up), with a saved copy for offline use. */
const CACHE="overtime-tracker-v2.7.0";
const SHELL=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png"];
self.addEventListener("install",e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch",e=>{
  const req=e.request; if(req.method!=="GET") return;
  const url=new URL(req.url);
  if(req.mode==="navigate"||url.pathname.endsWith("index.html")){
    e.respondWith(fetch(req).then(r=>{ const copy=r.clone(); caches.open(CACHE).then(c=>c.put("index.html",copy)); return r; }).catch(()=>caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(r=>{ if(r.ok&&(url.origin===location.origin||url.hostname.endsWith("gstatic.com")||url.hostname.endsWith("googleapis.com"))){ const copy=r.clone(); caches.open(CACHE).then(c=>c.put(req,copy)); } return r; })));
});
