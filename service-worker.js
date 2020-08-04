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
    "revision": "6ed2d06aeebcf03ee8162d8b92619e43"
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
    "url": "assets/js/10.604decb9.js",
    "revision": "50fb9d3249086af5cd0402afd463a1c6"
  },
  {
    "url": "assets/js/11.cb47558d.js",
    "revision": "f42bc349c7353663258dc7ec032023bd"
  },
  {
    "url": "assets/js/12.71ab8c28.js",
    "revision": "bf5f8ece3af519f79a3a753af63a64ab"
  },
  {
    "url": "assets/js/13.a5dbebfb.js",
    "revision": "0f703726c3ef664bc4627ee860f2199d"
  },
  {
    "url": "assets/js/14.d1234760.js",
    "revision": "6f6335c3d555e5e26beb7d0b1ee77265"
  },
  {
    "url": "assets/js/15.abb5ca62.js",
    "revision": "a715c0a75cb2f6a549d53051ee510cbc"
  },
  {
    "url": "assets/js/16.43c146a7.js",
    "revision": "32feb4d8440224db4c820728b9498d72"
  },
  {
    "url": "assets/js/17.b456809b.js",
    "revision": "1b88032fe663dc12954b51c1aafc8acf"
  },
  {
    "url": "assets/js/18.1b9ed963.js",
    "revision": "19da740dae6d7b96e0a9e9f9d341f290"
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
    "url": "assets/js/21.1fbe2f89.js",
    "revision": "a811438209559104c9f2d69640216620"
  },
  {
    "url": "assets/js/22.f7784c34.js",
    "revision": "1952a126e5838ca8419aa23ae6d7f01a"
  },
  {
    "url": "assets/js/23.fcc29ba5.js",
    "revision": "b519939a4ed4604bc974c20cb7f95473"
  },
  {
    "url": "assets/js/24.ed3a379b.js",
    "revision": "a96bc7b75a5c588e47d10fd613e6c2f7"
  },
  {
    "url": "assets/js/25.6e23544c.js",
    "revision": "a730e2262c59df7a8d627a95309a0227"
  },
  {
    "url": "assets/js/26.40967c3c.js",
    "revision": "00e34f4fe7012133f9d25ed43d93dc43"
  },
  {
    "url": "assets/js/27.82c93fe6.js",
    "revision": "bfed3371279f4b3147386af9cd742f76"
  },
  {
    "url": "assets/js/28.467fa27c.js",
    "revision": "4077237cbe5dffa6cb5a956942790135"
  },
  {
    "url": "assets/js/29.1d5f8116.js",
    "revision": "865f7784ee4d38991ae77b2e27da04ac"
  },
  {
    "url": "assets/js/3.81990b42.js",
    "revision": "429c347c6c3c7357bf76d8d48bcdf195"
  },
  {
    "url": "assets/js/30.79997095.js",
    "revision": "d77192dff935f263d272994362484402"
  },
  {
    "url": "assets/js/31.e86190fd.js",
    "revision": "6775f78afa04470809309ef72298af2b"
  },
  {
    "url": "assets/js/32.c60c21ef.js",
    "revision": "8727be5905810327183853767625b269"
  },
  {
    "url": "assets/js/33.c128cb2c.js",
    "revision": "a24eba3ce1d10849a105fbd380118af8"
  },
  {
    "url": "assets/js/34.08379ff1.js",
    "revision": "634ce8a041e6daef54c70ff055c84412"
  },
  {
    "url": "assets/js/35.ef4cc16c.js",
    "revision": "5f922b34f54a6643b0626c170ab695ba"
  },
  {
    "url": "assets/js/36.0c6d505f.js",
    "revision": "18835cb4b5729336ed15c93932602fcf"
  },
  {
    "url": "assets/js/37.a4d5df66.js",
    "revision": "5b8baa36014eb15e0e22d799d3ea3678"
  },
  {
    "url": "assets/js/38.518eef27.js",
    "revision": "0c0ecb7f48c40ffe694da743736b08ed"
  },
  {
    "url": "assets/js/39.9407545d.js",
    "revision": "c610dd12d5ffe3609088ec4bdcb28c90"
  },
  {
    "url": "assets/js/4.e25113ea.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.ca619107.js",
    "revision": "0a44989db14baac82ef186d2dd69bd64"
  },
  {
    "url": "assets/js/41.7208d42e.js",
    "revision": "2a97c6a1cdd4a03be17b33c97132f738"
  },
  {
    "url": "assets/js/42.8443f37e.js",
    "revision": "7975aedd9523998e9c35d6d996cd746c"
  },
  {
    "url": "assets/js/43.76ba947b.js",
    "revision": "fe144b220873e048665ddc1e49895fad"
  },
  {
    "url": "assets/js/44.2e592d34.js",
    "revision": "df22c1f0f11a2d8aade12938212005b5"
  },
  {
    "url": "assets/js/45.0519b1f0.js",
    "revision": "d3d5687829ea60cb4d238e95f3cc064d"
  },
  {
    "url": "assets/js/46.4d24042c.js",
    "revision": "4a28dd1ddac59f81322d3b4c3b372575"
  },
  {
    "url": "assets/js/47.e1269a68.js",
    "revision": "7e327c5f2b396827d9b5e72cb9bf3620"
  },
  {
    "url": "assets/js/48.a7f7d6b4.js",
    "revision": "4de050a027cbd2800118d9accbb444c6"
  },
  {
    "url": "assets/js/49.531fffa4.js",
    "revision": "185c3d8f5de043313300063ba36297b8"
  },
  {
    "url": "assets/js/5.8eb8291d.js",
    "revision": "b7998e1b7c57fae69947d218585d1cae"
  },
  {
    "url": "assets/js/50.c2b4d3b5.js",
    "revision": "72cd3811e9af72ccf3fc5b4217da3785"
  },
  {
    "url": "assets/js/51.d0cd1cc0.js",
    "revision": "28804a01d31f938a09e28b8091506b76"
  },
  {
    "url": "assets/js/52.a663181e.js",
    "revision": "9ba24907f8dedfcccf74bf403e79ddcf"
  },
  {
    "url": "assets/js/53.8422f17f.js",
    "revision": "529709a1ad1527c71a04ce14d9a4b8c9"
  },
  {
    "url": "assets/js/54.9bfa0384.js",
    "revision": "37e25f15438b6724eececbaa7d1f0861"
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
    "url": "assets/js/app.81ef9019.js",
    "revision": "666ca53863bb312955e17bdad28fd917"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "e9a7113444ebd1d6d09cd69c78fcaa33"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "7db8ae6783b8117ef9b53bebcc5c7277"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "0fe6e2741fd9e5956187819c1b89d93e"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "18fb37cc0aaeaa07334740bf7754e3ad"
  },
  {
    "url": "categories/index.html",
    "revision": "fca8705a085f2667539418c95e149be9"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "e628bf70b17c1c9c4c68c6e7c8da3871"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "6047691e4d98ac18e9cc25755f85e382"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "5fa5d8db1524b0728a179034341a1ff5"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "fee7beddb55f4d304e1062ead632ad6a"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "3a6a12f093508f5ce82b334f33c77514"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "3239704b2c1cc6e29fc5701ec07af870"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "8346340e6d8f7598c6a7db134ac0ee11"
  },
  {
    "url": "categories/WebSite/index.html",
    "revision": "5678a6c97ad5e144acf70aa39161181c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e4e371629da27657c6a8400b33a51885"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "64a0f27f18cf30e89be2e0b72b0d6bb5"
  },
  {
    "url": "categories/编辑器/index.html",
    "revision": "573ed034c070e87e39b539dfafd51563"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "14846bd9307b53d73ef8f6c596078aac"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "cc18e5eb688f497ffe97daaea8c73109"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "03895ccb18e5edf3b4953ab95e246664"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "779f062a5f4b29af8dd9aebbab0baab7"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "3c1ce0c364958f6fed3e437d15b4cea9"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "366d865b2db73c3a53da0d3e1e16dda8"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "90d793e9ccb906794d4df8d61eee974e"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "5e429cd0b2dc82dbccb0b201cfd4f708"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "c3f881de34fb0f3e70431f9861f9f391"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "811457cedd08e19e1c769d74dd6c3060"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "661f47935e6f6d1273ec60c441f68fdc"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "ebf0d284c74e8b58cc3019717f456ab5"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "1230bf89715ca1c2370803de1d2f4035"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "ac3b2696ed1181c7eb49afdf2dc94f20"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "5aacb80b18cd19945fa0092284fcac98"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "b04ad042a25aeab2aaf9542a3cc63621"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "5a8e1c1f2aec01a9433d9f5b611a072f"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "d197025d1afc7c15280d5477d70d437a"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "e8d1e379783701bf4865b29d3876c637"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "ca0368023b86f5704dd18e7e306ba760"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "baf0f2060bf71f97794b4f451159f8c4"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "a883ebfd346591cdd59140a81a8b51a9"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "ac2a5d2168b2c7fa8ff18b9aff819424"
  },
  {
    "url": "pages/index.html",
    "revision": "64a3078735e17a6b03eaca5417a9fe0b"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "f8bda3a8d59d7ba00636955cfd76db55"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "254e6aa10d74a3cbf750fdd1378f4ac8"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "259b1e8e81f0b8b464ef20a172bdbebf"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "4890fd1cebdb509173e8074d29481ca9"
  },
  {
    "url": "pages/前端/JavaScript 总结.html",
    "revision": "2c923782d9b82a3a37de25f483fc57db"
  },
  {
    "url": "pages/前端/TypeScript 总结.html",
    "revision": "e3df09321c49d4c0f1dc4fd79fc57d39"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "4c0b5f49994cb053ca4fc18bef9ea1d9"
  },
  {
    "url": "pages/前端/vuex.html",
    "revision": "c2c8353e10437867b8c5c951aebb8e5b"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "edbb7060631ab267ef9ccc4c1db7f4a0"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "a68c9b314375bd5f9cbcb037b4329dd3"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "30734b04e03aecd6080f8b603f4a0811"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "0e2f81d3092f1c6907c6f8a5b9007b08"
  },
  {
    "url": "pages/系统/bat批处理指令.html",
    "revision": "3c789e5e9cce6d7ae5743e10f4202bae"
  },
  {
    "url": "pages/系统/Linux命令学习步骤.html",
    "revision": "c1ed3bcfb8c11231728117810f426c8c"
  },
  {
    "url": "pages/编辑器/VS 实用快捷键.html",
    "revision": "f3fc2c3723956ca5df0eb6f99babddd3"
  },
  {
    "url": "pages/编辑器/Vscode 实用操作.html",
    "revision": "7ca02743993cd1318c782bcf398f61cb"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "85d1c5bf794bf6d32bb9b29db74eea9d"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "78cc662de47a9d28619ee70046a91c55"
  },
  {
    "url": "pages/通用/社区网站.html",
    "revision": "bd113b05296f5e458a8b47af33a67456"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "7ff50516f4409861178165b6cf48f35a"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "d3abeead18ac1f59c1c409def6002d59"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "ca86a7dc1e2a32ac6e100fc231e1bf61"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "7929c2dd896be27698ef486719fe8c7d"
  },
  {
    "url": "tag/const/index.html",
    "revision": "3adea763c90c248dcc44a53ee6e2d631"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "2a810cee8dacfb7ae1a45d68d7f3f315"
  },
  {
    "url": "tag/help/index.html",
    "revision": "b713373cd75a7832777ba9e2faa4ce07"
  },
  {
    "url": "tag/index.html",
    "revision": "71c955012b3ecd770f053101bd599c58"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a69d607c066122fced9b0dc35e4e9a2c"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "d27614e8361de637c7eb67c6c2cfb41e"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "b1cb17fd9d58980d81fab8fefc38d99f"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "2b36b6075d0a1321afa0c741663566aa"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "18733b5cf4b93d4987d2399e8bae9d7d"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "ba892ca20af00404153f4c9a42405cfd"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "131d2b5f3ef1fd0f466d9e1d771532d2"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "3aa6469a9b6fb26a051e79697e3e3422"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "19cdc5e9dd574503b5705473bc074985"
  },
  {
    "url": "tag/Vscode/index.html",
    "revision": "31e3da8703d5f53e61f53c2a33904b97"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "eebe23c2c8ea778db9fbf084c7e6d760"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "024c9dcb8234629ca21209ea6f890552"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "69fd86abf693f1e95d5c01620cf604e5"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "b13d174d763e191cb93b93e84aaaa627"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "0c8dbb03910c650123f28a2ac7da8448"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "d3693c956846392bdc54e3571d9d0e77"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "bfa5216dfb769907c1b4bb840a41f09c"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "fa933feb470f8044573b2c8a2e4aa4ae"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "8776d7f8840907d9bde74fd0ef9042d3"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "35ccd011bcf0b1c70a6d64f2b51a4520"
  },
  {
    "url": "tag/快捷键/index.html",
    "revision": "74143b72c0bbc4e3aebd2652f7d95cd1"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "5ed47bd1754d39c8a075b28ad7d462b3"
  },
  {
    "url": "tag/社区网站/index.html",
    "revision": "1c71532887f898c65be26486d8149f59"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "c6eeaafbeddc0978f622d1492f080933"
  },
  {
    "url": "tag/类/index.html",
    "revision": "86ad2dc012e1ca1ba148b89dc764935a"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "4b13ede5ce2789f889f7ff4a2c904bdd"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "1ef39619ca444768e0f2b635f0e6eab4"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "3aab6b579204cf93d064d8a9851fe52d"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "1d0caa8729bc96a4b9a2e111f30bb770"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "45abaed01ecf8c6b757d0621bf8bfc08"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "837d5d4d51c5988fcacaa34d40409319"
  },
  {
    "url": "timeline/index.html",
    "revision": "6dc498bdea8877c3e4536023ee49a04f"
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
