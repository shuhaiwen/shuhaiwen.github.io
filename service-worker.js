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
    "revision": "fad4326c067b377bd417a2d9717c151a"
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
    "url": "assets/js/12.f9b5addc.js",
    "revision": "3f87de33f8d34b6ca4cf67e2afca795d"
  },
  {
    "url": "assets/js/13.1519e64d.js",
    "revision": "da7d41d6b80afd73b70193692256116f"
  },
  {
    "url": "assets/js/14.d0d85902.js",
    "revision": "6e4fd5284839c29818bad1617ae34f49"
  },
  {
    "url": "assets/js/15.105e06e1.js",
    "revision": "0729692c61552590dd45ea3921815690"
  },
  {
    "url": "assets/js/16.f6072e25.js",
    "revision": "02bcbf5a1b893dc574d478331cf6c995"
  },
  {
    "url": "assets/js/17.0b264d9b.js",
    "revision": "bbef65b2b0de751a80dd8b0ab446f075"
  },
  {
    "url": "assets/js/18.4dc786a4.js",
    "revision": "6363e87fe9f95cf7eb64417a82516bee"
  },
  {
    "url": "assets/js/19.4ab1a4a0.js",
    "revision": "fc5a9a12c01f3c5b77b4803cfa717b99"
  },
  {
    "url": "assets/js/20.43844371.js",
    "revision": "f7c717cee603dccc105b24eeea082a02"
  },
  {
    "url": "assets/js/21.17fd9523.js",
    "revision": "40c339ad88904f705287280dbfab5f12"
  },
  {
    "url": "assets/js/22.854035e6.js",
    "revision": "b0a2a52f620f360c47b5d8dc41dc212b"
  },
  {
    "url": "assets/js/23.1fd35998.js",
    "revision": "942be83bed23317bdbe7e9736b483bca"
  },
  {
    "url": "assets/js/24.bc51600b.js",
    "revision": "7fd013743bfbcf8a710baca405afeccf"
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
    "url": "assets/js/28.a30fdb40.js",
    "revision": "da81cbf1d0b445e02adcfecd1faa3220"
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
    "url": "assets/js/31.8c3ce14d.js",
    "revision": "f10319f0ba7d3822bc47c86c22d718d4"
  },
  {
    "url": "assets/js/32.d987ca4d.js",
    "revision": "09a88669327796f9621a1f2048607392"
  },
  {
    "url": "assets/js/33.c4e63e5a.js",
    "revision": "8d5b297296d36abfd50d56594f868425"
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
    "url": "assets/js/43.b4651dba.js",
    "revision": "d15850fe628573563ecb13b6023a07e1"
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
    "url": "assets/js/app.47df32c6.js",
    "revision": "3972c8ba67d75a5f30e403a1d2a68153"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "7ef4eaa28039245342aeca431b10dc51"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "ac3ab984cf767b6b8821a3f8ff663251"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "e726c98d76f1b69e122d190c54b23dcb"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "604c913d2e62c2996f69949f6576b24e"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "b0400c115fbe6bbf89b82fbca804ff9d"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "10b0e34204c96c46f3f9b01904e6e41f"
  },
  {
    "url": "categories/index.html",
    "revision": "01ae2cc070fecb82e89510ba8d448eb4"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "f5d506da96c16dd6557df8bcb5c22bfe"
  },
  {
    "url": "categories/Markdown/index.html",
    "revision": "79c76eb38a606a3150750065b53db828"
  },
  {
    "url": "categories/Npm/index.html",
    "revision": "271f108d7dfd6115490987db43bbaa40"
  },
  {
    "url": "categories/Xml/index.html",
    "revision": "ab59a653e42909a0c92f9285e00aa261"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "dc1819991a4a4602311faa60f4a190d5"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "602b448eeb40f7f82b4a300452997db3"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "54485bab7f0bad23a2ebf960e0d3170d"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "72427a9bf9b64e07a2d5281a1f884241"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "e42a8349fde055ef81fb549fd36d83ce"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "871554720fcaacf7edac8e8791fd9a81"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "f2a4e80c270bd148e533992ee2c48b6e"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "a6f2cc5ca18f3c42a2af8aa2c1afa719"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "38c255254e7e2c3edec357209efc7591"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "3d1046e9b2e6a0f14a9d7718e2381ca1"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "1b75d8808db1e0f07e9669c28c3ccf8a"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "ad58cbb41c4f9c56b20987aad6e91a61"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "a12715120842e5f9f7386b291a526941"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "792cf29198b7942aec781e5d5da794f1"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "9c5e077b11fbbd5742f94ed1959a18e6"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "1041142a31d4c3e5fdef27db9d9848d0"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "e7e6615764d929b804b5e2ead3ace723"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "5f1dbb2e4496d7d13f48df73bab48bd3"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "4bb70117206b477df3f840f7970fcae8"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "2ccef7938a5c9898bb467e75cb18fff7"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "c611b0ed564c8127f5dc87f275bed216"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "228d2aeb3d6e9f785c9bee795c594052"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "0e53323b1a4ad671416a7f4e46b8e4c4"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "3f0537249c92de9e6702dcfc978cd531"
  },
  {
    "url": "pages/index.html",
    "revision": "efd740d56d641e329848607e6e504b17"
  },
  {
    "url": "pages/Linux/Linux命令学习步骤.html",
    "revision": "c7365c47bc503b0c67603b29b29821fa"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "0bf033d0932013737e078358332c7d53"
  },
  {
    "url": "pages/NPM/npm命令.html",
    "revision": "0e727b7dfe8fbeca69fbc0c4f2ccccfb"
  },
  {
    "url": "pages/Vs错误处理/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "c47f618c6b95aded466ca15fa6d91102"
  },
  {
    "url": "pages/windows操作/bat批处理指令.html",
    "revision": "16cc4e73f769bc59d90854165dcdead1"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "1a787cbe70d1b41ceb5bc8830633a799"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "abb269fd0f36ee1168ce741b8facf4f9"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "0012ded594382988c18b306e64a5c532"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "224a85e119c6415368ec7cd2be188f6b"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "882636d0d3076ddd7dddd66852861fec"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "50aa39a27baea123e951cbbe71ff527e"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "9cf92eb50c8cba1304afbd05dd9d1268"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "2588c30bb63933d1dc1fcb9f47386e65"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "e62d5686f85c12208eff2cac933d0555"
  },
  {
    "url": "tag/类/index.html",
    "revision": "9eb957f9ed85faeb827917cd09865f3f"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "3408b8b4df926f317090f736ac61de4c"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "535b8e13e3bbf041618a1814cd822767"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "85450d9f0904b0e47bbd775983a9fec8"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "ea3be9ae1cabeb5af0b1ae84ecc7b376"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "dbb0bfaea6533369aaf4420fb6b0c14c"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "a8d996e80484e0782078082abb93aa42"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "d14f73f5b6f05404a0b2893a68952c8c"
  },
  {
    "url": "tag/bat/index.html",
    "revision": "5ba2ddf26e92af3f63ae04725cef98ca"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "329d9eba0e9ff3901765544a7c8a5bdb"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "458e816b3f5cceec757776547ade4a27"
  },
  {
    "url": "tag/cmd/index.html",
    "revision": "f66409e1fff9ab7ea713f832e04b35be"
  },
  {
    "url": "tag/const/index.html",
    "revision": "7804da4ea8d663811fbe2e78e6ed57d0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5b54786e17601d6aaeec147c2c5c878e"
  },
  {
    "url": "tag/help/index.html",
    "revision": "fbd237e4b1f9b6cb1fbe447d7450dadc"
  },
  {
    "url": "tag/index.html",
    "revision": "c1bd6f34b8030d1271ffe0675e1737c3"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "5697da543e089e6c8187909dce04ca9d"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "e6a0df113c5767a0b54341434b3eea73"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "f9f763ae12207f2a9f48c526c87e9ec7"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "745eebf671a8f5ee71fdab50fe48c712"
  },
  {
    "url": "tag/XML/index.html",
    "revision": "22cc775e9acb0f8b8830062a98dc7b49"
  },
  {
    "url": "timeline/index.html",
    "revision": "a02990407e9ba73d0395e8861f7b9600"
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
