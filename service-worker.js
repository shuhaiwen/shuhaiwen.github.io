/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "90b7622d11ce0964299b6d52cad45816"
  },
  {
    "url": "assets/css/0.styles.1a30b371.css",
    "revision": "2e4fc746a6b1c1e6548eeece61ba77ac"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/iconfont.b555cd18.svg",
    "revision": "b555cd1856984a1bbcc86791b54db341"
  },
  {
    "url": "assets/js/1.f43000ff.js",
    "revision": "853be9233b96b04852a9d4b3756bbbd9"
  },
  {
    "url": "assets/js/10.2d96b3ee.js",
    "revision": "d0c2f3139bf437fe13a9edfb7a81b9c1"
  },
  {
    "url": "assets/js/11.c82fe0c4.js",
    "revision": "2fcd7c8a8a8468235b01b1c3163ee1f7"
  },
  {
    "url": "assets/js/12.db75824d.js",
    "revision": "180a4d9a2899162a8d86bb4dc2cabd53"
  },
  {
    "url": "assets/js/13.bf0c624b.js",
    "revision": "ffe8ae469b42868cc3137ca0029f73ff"
  },
  {
    "url": "assets/js/14.64bf3499.js",
    "revision": "411f0dc477220341e0838ccfa0dcd987"
  },
  {
    "url": "assets/js/15.3b394902.js",
    "revision": "9723443c79bf1fe311cb4c11a033d437"
  },
  {
    "url": "assets/js/16.43c146a7.js",
    "revision": "32feb4d8440224db4c820728b9498d72"
  },
  {
    "url": "assets/js/17.d757e2ac.js",
    "revision": "0cc6e926768f6a44030a27705037e4ae"
  },
  {
    "url": "assets/js/18.4dc786a4.js",
    "revision": "6363e87fe9f95cf7eb64417a82516bee"
  },
  {
    "url": "assets/js/19.0d87cfa3.js",
    "revision": "73847d1c68f817be51766e878a7e6eeb"
  },
  {
    "url": "assets/js/20.09338741.js",
    "revision": "36c7043ae4db95e0dbabdce136d7713f"
  },
  {
    "url": "assets/js/21.90971835.js",
    "revision": "5d041d0031df10b80a0e83b15c2bbe23"
  },
  {
    "url": "assets/js/22.6aef2c0d.js",
    "revision": "5f63443ea92111a45f3ce28cb86177f4"
  },
  {
    "url": "assets/js/23.d108c8a6.js",
    "revision": "b0bd5028a2dec516e4f3979c8bc9e3de"
  },
  {
    "url": "assets/js/24.8734ad13.js",
    "revision": "7842c27bc30d643f47e09f9eba1975bf"
  },
  {
    "url": "assets/js/25.541cb5e9.js",
    "revision": "63215213542972d8b1b08822c771f367"
  },
  {
    "url": "assets/js/26.2f955b1c.js",
    "revision": "d694893db55159c70f344771c2f4c3ce"
  },
  {
    "url": "assets/js/27.a63ed179.js",
    "revision": "d185183aac819a56cddd51dab43de46a"
  },
  {
    "url": "assets/js/28.befc8838.js",
    "revision": "cb13dfbe0ef593ff8f4f6a00a40597f3"
  },
  {
    "url": "assets/js/29.93d286d3.js",
    "revision": "bf1597b89cf90278797b270675de2e56"
  },
  {
    "url": "assets/js/3.ca0c9fbc.js",
    "revision": "429c347c6c3c7357bf76d8d48bcdf195"
  },
  {
    "url": "assets/js/30.4cee4a58.js",
    "revision": "137a66bf83d0cd55bb7075caafdf81ed"
  },
  {
    "url": "assets/js/31.2888c9fb.js",
    "revision": "03ff08d2325e3596b6c150d78deb644f"
  },
  {
    "url": "assets/js/32.0e00265e.js",
    "revision": "c7fd57400c76f8cc8190edec83664f64"
  },
  {
    "url": "assets/js/33.e8ca3fb9.js",
    "revision": "03df583fc8becb8d09199a04e96626a3"
  },
  {
    "url": "assets/js/34.9ccf6a44.js",
    "revision": "5c89224e3010e5f172dc73c4b11d4768"
  },
  {
    "url": "assets/js/35.e34332b8.js",
    "revision": "4c44f8ca86e97123b9607836142e0b35"
  },
  {
    "url": "assets/js/36.d18377d7.js",
    "revision": "23db6bb376f3ef6aa4ded6682ec559dc"
  },
  {
    "url": "assets/js/37.4cd152f8.js",
    "revision": "82726360a721389fe750dbcd34a21633"
  },
  {
    "url": "assets/js/38.a87c6bf2.js",
    "revision": "cd233d9c4a94839d534a7816df8d4326"
  },
  {
    "url": "assets/js/39.f7cf8aa1.js",
    "revision": "f081961074257e1ea044e3b93160bbc4"
  },
  {
    "url": "assets/js/4.d497704b.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.541c7fd4.js",
    "revision": "2b8a02b2482eddd9ee3ff4f396618c34"
  },
  {
    "url": "assets/js/41.906f21c2.js",
    "revision": "62de7444ba61830ed37758e4d3d569f1"
  },
  {
    "url": "assets/js/42.753eeb28.js",
    "revision": "81cb194b997793e54b57cf525ca40cb7"
  },
  {
    "url": "assets/js/43.333c862f.js",
    "revision": "c2d384495aece457b89b3d30b54ca5e9"
  },
  {
    "url": "assets/js/44.965cdd01.js",
    "revision": "b4b4be8236952d4f648b8ce4c42675e9"
  },
  {
    "url": "assets/js/5.859c23b6.js",
    "revision": "b7998e1b7c57fae69947d218585d1cae"
  },
  {
    "url": "assets/js/6.e458e168.js",
    "revision": "ba5127f1362d9cd4d6c31b934ce2da53"
  },
  {
    "url": "assets/js/7.608d4e00.js",
    "revision": "887d241df7eee3d80dfdebd272e0f1ca"
  },
  {
    "url": "assets/js/8.93ef3286.js",
    "revision": "3c471bed573524fce7ccc7b518b1d0c2"
  },
  {
    "url": "assets/js/9.65de6e13.js",
    "revision": "fb53890f51a1a5a3d1ab868e520ec5af"
  },
  {
    "url": "assets/js/app.f99fc0d2.js",
    "revision": "f09ee5c76e55d31c83576ea6d14d3bd9"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "bd82819228b6d85768a36835abba7388"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "d45dd6040205d11ed8827f51b3404220"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "1e7d664008ba4522a887f13d48200d5f"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "324a893e0fbbab0c8620d1819e3ec0dd"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "9d51d80c858910150a41e7871322f9a4"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "e191ceb75004f4ff72bd875ad7ed9f31"
  },
  {
    "url": "categories/index.html",
    "revision": "43a1eb629ccad921101f38f87464d426"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "a000dd5fd8474e3b70e053aef2830f0d"
  },
  {
    "url": "categories/Markdown/index.html",
    "revision": "6019145f64c8c606f76ed1d059474181"
  },
  {
    "url": "categories/Npm/index.html",
    "revision": "d4f0fdeaee80b8b7ddd6d8131bc13005"
  },
  {
    "url": "categories/Xml/index.html",
    "revision": "4633234b6db89e9a684e70e969a131e6"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "3af82733b71fd7c7245689ee8962830b"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "d551aa2766bf889e22ddfba5126f9041"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "5fda400ae86ecdbfc778d59d0d0368f8"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "1fe834527d59a27b7eb0b7689588dee4"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "84854b53522619b6b3f765f4b7391648"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "c8d7ea13229afe2fc746a622c7a2afb2"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "da1b853078186a8467a3693bfe34ee32"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "20abcca594435b0a0d7813c104d2d786"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "d820022432d4a487265004c2c03a21d1"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "10cc0bffcc8272b8f6f44b64308eee5c"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "c1668aef8db36986651396d5b47be5ef"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "c121a4567926689b019ba18d6423c471"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "d58abecf1c16971a611e77b963d83925"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "54b9dd296a2e72e2f23a74e675dd4850"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "7d84000571facf76567d84bf1b0e31c0"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "f78ebc2a013b29327168101321f9d317"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "db023d38abe680bf841fddccd26f155c"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "52dfc6f22fce59ef196e588c6c95c9c3"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "fdf2e48449bb21224e2912adf05fa252"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "eff566a9cc9d703e37331459c89e928b"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "bfa586cd0135c2968f5089592e83c355"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "33dcf168f1db173ee4c841c5fe0b167a"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "10acafee05d7bf2d50daaab8ef3966b7"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "dda0daf1fd98b91cc675003b62e6a342"
  },
  {
    "url": "pages/index.html",
    "revision": "1c300004c463b2294ad181a63cafb8a9"
  },
  {
    "url": "pages/Linux/Linux命令学习步骤.html",
    "revision": "c4fb588af4c1d3213ef2e76d9545034b"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "3f9726a6bddf41ec83bfaa3505bed9f2"
  },
  {
    "url": "pages/NPM/npm命令.html",
    "revision": "22079af7a78418887b87af4e853c6bca"
  },
  {
    "url": "pages/Vs错误处理/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "9042751c522f9624c1660163b3c95a11"
  },
  {
    "url": "pages/windows操作/bat批处理指令.html",
    "revision": "f47bae735fd7fbdd4359c1388c81ceb9"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "a3e4425cf40e20573380082544dd48e8"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "815afc7dd62fba02f1d4555f86b7bfb8"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "4f6c28b6aea50b269c1a66c77c0ff1bd"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "8ae1fb0f255b93e85d05503354d25038"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "8e0d045c9e9dfd6de8f1313153106969"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "e7b362fda82338917c2a489996c93ddd"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "0dd36fa30cf886d7770cab9ebc097231"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "20573d19a16aa6527ff831a1450412b1"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "cae4dbdd538bf42903dc2427f51cb8a5"
  },
  {
    "url": "tag/类/index.html",
    "revision": "9d3a3d8c4f7d0a874726459f176d36be"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "d77f26cc8d322d440e53cc0ea6ac5fc2"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "2c0408cd31164440f37f8cdc06005196"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "097e7bd2b5abf0792ff97cc754940c9f"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "79ad4b0c7f5629ddc8dd3290e439563c"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "92a3852502a398f1f78708edbd33e4c4"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "7ef7f499a03a6f0be751cbdf17045336"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "58b44d74f279610e766c0ca984e323ac"
  },
  {
    "url": "tag/bat/index.html",
    "revision": "6307478d98ab5a15bd2f3bab2b021a5d"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "29bc61928da605c2bf23b8c024a36036"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "aa0b2c19099e617e605a98530bfe2d76"
  },
  {
    "url": "tag/cmd/index.html",
    "revision": "110351182bc5c7d88207361916c2f9f3"
  },
  {
    "url": "tag/const/index.html",
    "revision": "7a1790ab33a385a89560da7be35ca9bb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b9547f57251d149c3beae772f5e8275a"
  },
  {
    "url": "tag/help/index.html",
    "revision": "64865c866a041578d430e09946f1ac93"
  },
  {
    "url": "tag/index.html",
    "revision": "a3e4bed30cd741a8c2a69056ec8757ff"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "bf8b485055a7edc07dca050091e59d3f"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "9fd0f1f49eba8885bac638d27e080bd8"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "5b277481e4ef5e1d2937d127904244cb"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "84711df347a920eb995200ee4d52e916"
  },
  {
    "url": "tag/XML/index.html",
    "revision": "fb07fac83db8c4d48ccd1b046e2f92e8"
  },
  {
    "url": "timeline/index.html",
    "revision": "c2bb9d1ffa57feb81e4fed7947673b5b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
