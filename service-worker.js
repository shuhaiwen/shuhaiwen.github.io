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
    "url": "1.jpg",
    "revision": "cc268111fd8fd701701dfce79ea951ac"
  },
  {
    "url": "404.html",
    "revision": "8987e306612214d2dd7dd2220b788a45"
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
    "url": "assets/js/1.4cfcde8c.js",
    "revision": "853be9233b96b04852a9d4b3756bbbd9"
  },
  {
    "url": "assets/js/10.19257d9d.js",
    "revision": "99703968171d2a2498e6694ba15ee711"
  },
  {
    "url": "assets/js/11.c82fe0c4.js",
    "revision": "2fcd7c8a8a8468235b01b1c3163ee1f7"
  },
  {
    "url": "assets/js/12.ebd0830c.js",
    "revision": "33e9f11a88e13524b826e6d2d4b198a0"
  },
  {
    "url": "assets/js/13.13d0e7f4.js",
    "revision": "e155d4e86bd7fb79439316d07deb8853"
  },
  {
    "url": "assets/js/14.465a7840.js",
    "revision": "1043d8bf69e3f68ae4f9aae607e03d81"
  },
  {
    "url": "assets/js/15.826066d6.js",
    "revision": "bdf18b0fe1602343d1da043c0d662f8a"
  },
  {
    "url": "assets/js/16.3227ad9e.js",
    "revision": "abda812afc08630d1309c036a09106e2"
  },
  {
    "url": "assets/js/17.575f1b57.js",
    "revision": "eacf660313653b12ec694f5b820329a3"
  },
  {
    "url": "assets/js/18.382e7f83.js",
    "revision": "6a7e320a4c7934a9eb0bcae78201820b"
  },
  {
    "url": "assets/js/19.935c0a7d.js",
    "revision": "74e93b9cf3b764906e54defd83725b36"
  },
  {
    "url": "assets/js/20.b99fa425.js",
    "revision": "1cac4fd7ad828de19ee1546f3f6ca41c"
  },
  {
    "url": "assets/js/21.60c48594.js",
    "revision": "867ccb7faef559761fc9eb3f0e4f6ec2"
  },
  {
    "url": "assets/js/22.5f92a123.js",
    "revision": "8242cfa0e415d5d6d4a0fa1246672143"
  },
  {
    "url": "assets/js/23.0537ed8a.js",
    "revision": "27575a66ca92e8367db7b7c044c28bf4"
  },
  {
    "url": "assets/js/24.525de499.js",
    "revision": "6a7118173b49b75e10c0341f6d3f43c1"
  },
  {
    "url": "assets/js/25.34e3dfd9.js",
    "revision": "439669e3b349b9d2ba4b87e6717244cd"
  },
  {
    "url": "assets/js/26.76e0235a.js",
    "revision": "6df06b845712c458318c7e71f9d534e1"
  },
  {
    "url": "assets/js/27.7a5d49a0.js",
    "revision": "564f2f9ad153ae1c87e04d0f91691fb3"
  },
  {
    "url": "assets/js/28.2234370d.js",
    "revision": "fc31e89642482d99733a453621bd1209"
  },
  {
    "url": "assets/js/29.243105c9.js",
    "revision": "03d16da7059baa90c18244933e3e03b9"
  },
  {
    "url": "assets/js/3.81990b42.js",
    "revision": "429c347c6c3c7357bf76d8d48bcdf195"
  },
  {
    "url": "assets/js/30.e7d7175b.js",
    "revision": "e2a42940a2fbe78ab6b7692002e58db0"
  },
  {
    "url": "assets/js/31.153c13eb.js",
    "revision": "91b9015453c9488e1c05d6c22752cc36"
  },
  {
    "url": "assets/js/32.26ae2a75.js",
    "revision": "a881d56f4ba003f91507e3d72099363e"
  },
  {
    "url": "assets/js/33.b96d2c4e.js",
    "revision": "a280addaf1544468d047446803d58211"
  },
  {
    "url": "assets/js/34.5fa43234.js",
    "revision": "27bb4394a32daf03f45adda85589b272"
  },
  {
    "url": "assets/js/35.dee8d972.js",
    "revision": "e5dd66d521c0dd846b351098515beb4c"
  },
  {
    "url": "assets/js/36.cc4e48ea.js",
    "revision": "496258065717b7c5de026923a7a63f01"
  },
  {
    "url": "assets/js/37.67d99f4a.js",
    "revision": "aa2a423459b8dd847ab30131c6651139"
  },
  {
    "url": "assets/js/38.e0f792f9.js",
    "revision": "a485136e84f7e48e227e98881e0a52b6"
  },
  {
    "url": "assets/js/39.2c93c3ec.js",
    "revision": "e654bdbf3ff0bc6937daa65e77da065b"
  },
  {
    "url": "assets/js/4.e25113ea.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.4bf27440.js",
    "revision": "f6cbe9ae4e26ca65678c7e8ddc508766"
  },
  {
    "url": "assets/js/41.bd52066d.js",
    "revision": "c7156d4b47a66a17eb3f30cd20147321"
  },
  {
    "url": "assets/js/42.779dbf69.js",
    "revision": "1156140e38defa4bf50d88490c216681"
  },
  {
    "url": "assets/js/43.6b8556c1.js",
    "revision": "3b22070db32f5a3e67ce841f1a8326a6"
  },
  {
    "url": "assets/js/44.b7624011.js",
    "revision": "c014cb6ead844e7a2188b776125c05b7"
  },
  {
    "url": "assets/js/45.f5c610dd.js",
    "revision": "f1747dc9c81d56cdeb4fd51e610c2de9"
  },
  {
    "url": "assets/js/46.cde597b0.js",
    "revision": "8a7ddec6e2e09e29641be8770f88c54e"
  },
  {
    "url": "assets/js/47.5bdc67aa.js",
    "revision": "cf92678a2bf28619cd2d33b7f89af287"
  },
  {
    "url": "assets/js/48.4e6591a0.js",
    "revision": "2b3214752fe1ae09b7640916564e21d3"
  },
  {
    "url": "assets/js/49.c12f2844.js",
    "revision": "a7a080b790965271c97c73b85a691b28"
  },
  {
    "url": "assets/js/5.8eb8291d.js",
    "revision": "b7998e1b7c57fae69947d218585d1cae"
  },
  {
    "url": "assets/js/50.bea27752.js",
    "revision": "8ed69e100a7ecc1663015bcdedfec265"
  },
  {
    "url": "assets/js/51.3659db95.js",
    "revision": "2e3f557d4f359017b39066171f1a64e2"
  },
  {
    "url": "assets/js/52.d33cf9e3.js",
    "revision": "3f2af7826db50dcdafbd85a4455c4676"
  },
  {
    "url": "assets/js/53.787fb040.js",
    "revision": "36f1cfa23f44ad43a20f0ead21dc7050"
  },
  {
    "url": "assets/js/54.a88e7cac.js",
    "revision": "1465a85691d216a8b950a39988808125"
  },
  {
    "url": "assets/js/55.51693ffd.js",
    "revision": "68eb38fc21c7ac81bbba052184e3775a"
  },
  {
    "url": "assets/js/56.f83781d9.js",
    "revision": "c91483386583f4276473db75d219a10d"
  },
  {
    "url": "assets/js/57.b207d8db.js",
    "revision": "3971cd643563d37d2cb6c399c4bc1832"
  },
  {
    "url": "assets/js/58.8b32c864.js",
    "revision": "68c893c1ddadff5aae611b2a7b8ddaf4"
  },
  {
    "url": "assets/js/59.5b221f7d.js",
    "revision": "82a22fb5e52624baa5d5563278b95b44"
  },
  {
    "url": "assets/js/6.e458e168.js",
    "revision": "ba5127f1362d9cd4d6c31b934ce2da53"
  },
  {
    "url": "assets/js/60.a5c19497.js",
    "revision": "04e36738fd94399400b109f90386842f"
  },
  {
    "url": "assets/js/61.b32edd01.js",
    "revision": "aa2cf58b67532727c88c636b33cda3e4"
  },
  {
    "url": "assets/js/62.22308e67.js",
    "revision": "cf35379c040ea126db4a3bac12399095"
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
    "url": "assets/js/app.94a2cd6e.js",
    "revision": "a4e0a3372e8bac2274f3277ae7acf0af"
  },
  {
    "url": "c++/c++11/declvar.html",
    "revision": "07e31c3fa759675fd7947d650753bced"
  },
  {
    "url": "c++/c++11/ignore.html",
    "revision": "a40ab5d51801ac115aa815f51fa46cc2"
  },
  {
    "url": "c++/c++11/initializer_list.html",
    "revision": "2fb6f0b84add3dc7cae29f92389a8f34"
  },
  {
    "url": "c++/c++11/tie.html",
    "revision": "4a8f512f4210d9bdadbd0f899e757e94"
  },
  {
    "url": "c++/关键字/关键字.html",
    "revision": "3ea5de00180c52ce1dea13a96ca32fda"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "fa6fa7b83ccce4685970389952991ef3"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "5e5e270154b36962c4a08886f323e1a3"
  },
  {
    "url": "categories/C++11/index.html",
    "revision": "40f0545ebe054198ef21d03109e675f3"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "821e9ac1062d5313c7c2fa9f23adaa5e"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "cf770b9d6f90dc62145a7171ce151648"
  },
  {
    "url": "categories/index.html",
    "revision": "c3d39df6bb4015b7d44100d02806ba4d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "85c69e27a7452d34e9c7df621973caa0"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "98f48bb65bc398c4c3890bf91ee69d83"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "351e07c7bc967070ee7db6b325daa478"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "d538e4c1cd5332b62e4cf7ab46250877"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "2f86fa5cafe1ffd72a5292a88c329093"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "faa510545e31b2e976262ba204a59d39"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "e8b74ef01b05ee0320ca6c39c06892a7"
  },
  {
    "url": "categories/WebSite/index.html",
    "revision": "98b60cfd1c47f6d01f9572e2f763e0d0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "72a9a5804287703b6df8407364002ad1"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "bec0e49c4913d7ff1140ec9ee3cc712d"
  },
  {
    "url": "categories/编辑器/index.html",
    "revision": "4eb390e8525b15a133c0a5fd853a7ef7"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "8cfb21c0aab0f506aa2883460b8a3958"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "afc810c820e687f9036f48f3f008b340"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "d0e6561a2c1334585e9d89c5ad13ec04"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "cf782913ca4fa7955f0a28237e224236"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "5e575041709b4b2228aa6ddb7d0f34cd"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "2f9140c293018ee192c5c3c135a3fad0"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "afef1ccb646de641f5f7f3ec44e3d0ce"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "f1e678c7440f5d5f7ef5ea3beeb087ae"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "b27bd45019bb501e3ffebe8982d3b177"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "0bd6b89aeb79a9fc3de52d889a31ed73"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "9841915a993ed4b7a6b8f044656caa1e"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "d43eebbf7369c6294d4fd28bf622943e"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "a15cd684afc4f187f307bb502bf12778"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "09ac44deb82133d61be489fdeef15e62"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "703188f1e80ca2d70be5b2aa1a6d84e4"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "a0529e0ac5a7a9095f99aacd470e208e"
  },
  {
    "url": "pages/C++/模板.html",
    "revision": "8e5aa831e04875673f1166bb98a267ff"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "fca41e72a286966d85a861f74fc3c1d3"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "cee386e902dc787e9a7b29fd44af510a"
  },
  {
    "url": "pages/C++/类设计陷阱.html",
    "revision": "e5e118d408733335802729c80496cdc9"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "ec3f3aa19f751fce3f1591723db3d701"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "6df093f4f45c23c514f060127212f3e4"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "c5a003c88bfe82973e5d67e3c9ba6d83"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "3737acdf789e31dfbba4332d167aeccd"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "72bfadf3540562ecca32944e5f048ff2"
  },
  {
    "url": "pages/index.html",
    "revision": "07bc0b7914bcfa1701d2390ed36a9918"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "db24dc66052ceecd2a707bf841b98913"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "597e7a89a119a7e659a6c718d0a77bb9"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "84b33b5ec05f6469dff95b1bed854fb0"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "7e4fbee2a4f38c3baa6602b29c87b403"
  },
  {
    "url": "pages/前端/JavaScript 总结.html",
    "revision": "e62502667e4f44edcf5c2e0c895edd8c"
  },
  {
    "url": "pages/前端/TypeScript 总结.html",
    "revision": "18f1d1b297f7f9ce7034943c7e0aaf34"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "d1149154264021b48d493347901849b2"
  },
  {
    "url": "pages/前端/vuex.html",
    "revision": "725b4896a0a8a1b27c3a4eb9e234e736"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "ee27b6bcc48e48ad3c93a48578343f9e"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "3f67cc077a9ebd6e60b19d0b17d6f0fb"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "38cbd2e1f57e2a3f0385c5da7bcad674"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "e58eb6f3e7e9bfadbb5fc352bf8c507a"
  },
  {
    "url": "pages/系统/bat批处理指令.html",
    "revision": "600038404afe28547c98430c660cf6bb"
  },
  {
    "url": "pages/系统/Linux命令学习步骤.html",
    "revision": "8fc8c83130b849206eb920164548d2ad"
  },
  {
    "url": "pages/编辑器/VS 实用快捷键.html",
    "revision": "41c09d145b562771cf7a4dc3a29117e6"
  },
  {
    "url": "pages/编辑器/Vscode 实用操作.html",
    "revision": "afa0ddba74a9ea9c978de218621c46dd"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "c40e7bc278f0bc6b2b478be2510a79ac"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "a77a02118302c9b510709f51a2b036f6"
  },
  {
    "url": "pages/通用/浮点数二进制表示.html",
    "revision": "d1b6ba26b80f914f074137452615dd24"
  },
  {
    "url": "pages/通用/社区网站.html",
    "revision": "62f8793e91d6566ae0cd1b4c2dc03770"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "e099b0c21a28872237f2bc0a983d98ff"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "ad7235ae50b9c1f8dff4aea84fcc5aa0"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "056a99fa0108f364eb6878f42ac2c39f"
  },
  {
    "url": "tag/C++关键字/index.html",
    "revision": "0cd85898297c76a0540be35343c92967"
  },
  {
    "url": "tag/Class/index.html",
    "revision": "21e55271ef26a5ca01b1fbfff1b9d271"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "55c257e8868f5088283d368f3f20c96e"
  },
  {
    "url": "tag/const/index.html",
    "revision": "a313e6b0b48c53064f654ab4139e4fd8"
  },
  {
    "url": "tag/declvar/index.html",
    "revision": "943c6afa7b32c0e2affa9d1f9902288d"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "55d1538e2f089b1428697060289ff03f"
  },
  {
    "url": "tag/help/index.html",
    "revision": "402861532203af2cc3d854b4390f9894"
  },
  {
    "url": "tag/ignore/index.html",
    "revision": "df2c07775159df363630e6cd3ca3c1f1"
  },
  {
    "url": "tag/index.html",
    "revision": "8b55121eb9c910d736ac384aba372833"
  },
  {
    "url": "tag/initializer_list/index.html",
    "revision": "811719a70dd500b20b18dccfc145febc"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "c859c09d6f1a4863cfa78d4946c6531c"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "acda245b55095991c0f6bd52a8d2706d"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "15140da6e154d80c12624a5f8413bd49"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "da69db858c60a7c7ba82a0a169f3cc8d"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "be545f08b96f30e3da68d4e426dd81b3"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "e8441161f617c5b5539f357ea57a1789"
  },
  {
    "url": "tag/tie/index.html",
    "revision": "dd0d7c655a24bef820077e1eda342a95"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "371faa241dc85aab6d69caf18e62a2d6"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "f873127872bd199f7d9bc9a28048e5c2"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "e095a965faa883e3ec403e60efe0c7d4"
  },
  {
    "url": "tag/Vscode/index.html",
    "revision": "2b47eb3f5ec9ac35c65522ff8d5a8057"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "94039498e97fa06f7ad9b67af48f7588"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "aeff1c78a97a2fb95cb38e1e32a14fdc"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "f5e5450efdae5a4e1ac42e5064ee3582"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "2f71f0e9f91935cd96973147e404c42b"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "4aa31e40a1ee37121a63f01e573e04b0"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "9114818c375bc050931d5a95116c2537"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "3251232da3f7abb2fc0e9271aa499d61"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "f404ffdc48dd2b7295fca4e8e99707a9"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "7236b30ed5cfcb7dc78f4bbc5534bd23"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "1e52f74de5bad256a01d9fb5ef130bed"
  },
  {
    "url": "tag/快捷键/index.html",
    "revision": "c46fe511029c5154fd5324251c40a2b2"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "d2c96e18c1bf4ffa071324579884c858"
  },
  {
    "url": "tag/模板/index.html",
    "revision": "3ad776dd3c401f1af9a8c1541258b886"
  },
  {
    "url": "tag/浮点数/index.html",
    "revision": "f194c6619c1bd0b9336a02db533dc5aa"
  },
  {
    "url": "tag/社区网站/index.html",
    "revision": "1940b9a9f6b3e82685fb0dd68ec4ac3e"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "27f31c348cf41ecc6659618b917d3fe4"
  },
  {
    "url": "tag/类/index.html",
    "revision": "69b435aac3ec894e7b93a7030257459b"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "9c046fd275b442ce6a48edd0aebf97fd"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "d1dbb9e98bc6c6a3c279c77c0e6d18cf"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "c064c269df3dc2ffb0da2d1b273536a5"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "c1df3fed9bdf235d14d7bdb65a95eefd"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "85f3cabcef3e08393b9c70137487ecec"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "bdd5ad40805bb933c01f2fc93c60b24c"
  },
  {
    "url": "timeline/index.html",
    "revision": "61f0e9a501a3cd75a0c0b3ede9d1a9dc"
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
