// Service Worker - 城口红迹数字云展厅 PWA
var CACHE='chengkou-v3';
var ASSETS=[
  'https://13619-adn.github.io/chengkou-hongse/',
  'https://13619-adn.github.io/chengkou-hongse/index.html',
  'https://13619-adn.github.io/chengkou-hongse/manifest.json',
  'https://13619-adn.github.io/chengkou-hongse/narration.m4a',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js'
];

// 安装：缓存核心资源
self.addEventListener('install',function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(cache){
      return cache.addAll(ASSETS).catch(function(){});
    })
  );
  self.skipWaiting();
});

// 激活：清理旧缓存
self.addEventListener('activate',function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}));
    })
  );
  self.clients.claim();
});

// 请求策略
self.addEventListener('fetch',function(e){
  var req=e.request;
  // 图片：缓存优先，网络回退
  if(req.url.indexOf('/img/')>=0){
    e.respondWith(
      caches.match(req).then(function(cached){
        return cached||fetch(req).then(function(resp){
          var copy=resp.clone();
          caches.open(CACHE).then(function(cache){cache.put(req,copy)});
          return resp;
        }).catch(function(){return caches.match(req)});
      })
    );
    return;
  }
  // 其他资源：网络优先，缓存回退
  e.respondWith(
    fetch(req).then(function(resp){
      if(resp.ok&&req.method==='GET'){
        var copy=resp.clone();
        caches.open(CACHE).then(function(cache){cache.put(req,copy)});
      }
      return resp;
    }).catch(function(){
      return caches.match(req);
    })
  );
});
