if(!self.define){let e,i={};const r=(r,o)=>(r=new URL(r+".js",o).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,n)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let s={};const c=e=>r(e,f),d={module:{uri:f},exports:s,require:c};i[f]=Promise.all(o.map((e=>d[e]||c(e)))).then((e=>(n(...e),s)))}}define(["./workbox-865a1d09"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"1 (10).jpg",revision:"8fa0576437f4b49bba58e1219ae345b2"},{url:"1 (2).jpg",revision:"36f9545216dba97828da9d0a650e4288"},{url:"1 (3).jpg",revision:"0fcf43e6714ac504a3c3c5113b976116"},{url:"1 (4).jpg",revision:"c7a29756cb4645ec5a722b62a839d341"},{url:"1 (5).jpg",revision:"e9395f4ff511667275b2246370270c13"},{url:"1 (6).jpg",revision:"ad1ac3ef43be4f6311113dd9d69306cd"},{url:"1 (7).jpg",revision:"53e668f3b802d97246c18041f1f43e29"},{url:"1 (8).jpg",revision:"89401b5aa2d9ef45fe4818b92d2102c6"},{url:"empleado.jpeg",revision:"ac2a69c622fb567ca6470ab7965bde61"},{url:"empleado.jpg",revision:"ea08f675939cbd0e7d8a43b5a5bd4aff"},{url:"Galeria de imagenes.png",revision:"11b7543ee0e1165b0804f90c44f6ef6c"},{url:"posicion1.png",revision:"f31ecb866b99994f8012d30b781c50f8"},{url:"posicion2.png",revision:"58f0b0df2f4bb041d046147a9e72ebd0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
