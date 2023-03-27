// // const { request } = require("express");

// //refer window
// self.addEventListener("install", (event) => {
//     console.log("service worker installed");
//     self.skipWaiting()
//     event.waitUntil(caches.open("Cache Name").then(cache => {
//         cache.addAll(["index.html","2.html"])
//     }).catch(err => {
//         console.log("Cache err", err);
//     }))
// })

// self.addEventListener("activate", () => {
//     console.log("service worker activated");
// })

// self.addEventListener("fetch", (event) => { 
//     console.log("Request :", event.request.url);

//     event.respondWith(caches.match(event.request).then((file) => {
//         if (file) {
//             console.log("Found :", event.request.url);
//             return file
//         }
//         console.log("Request :", event.request.url);
//       return  fetch(event.request.url)

//     }).catch(err => {
//         console.log("Cache err", err);
//     })
//     )
// }) 
 
self.addEventListener("install",(event)=>{
    console.log("installed")
    event.waitUntil(caches.open("demo1").then(cache=>{
        cache.addAll(["index.html","2.html","manifest/manifest.webmanifest"])
}).catch(err=>console.log(err))
    )
})

self.addEventListener("activate",()=>{
    console.log("Activated")
})

self.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((file)=>{
            if(file){
                return file
            }
            console.log("Network request:",event.request.url)
            return fetch(event.request.url)
        }).catch(err=>{console.log(err)})
    )
})