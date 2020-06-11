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
    "revision": "9e80f25636841b8d9752b642ebc65d56"
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
    "url": "assets/js/12.ad45c144.js",
    "revision": "b41374f860a3edcecb9586f103319c55"
  },
  {
    "url": "assets/js/13.8946b172.js",
    "revision": "dd5d6fdb46533bee3b88cb4771ec6cf2"
  },
  {
    "url": "assets/js/14.02125a75.js",
    "revision": "f0749c19ac9fd7dca80bc82627186a24"
  },
  {
    "url": "assets/js/15.e82a3c23.js",
    "revision": "d32b15913cc6620efcca6f18627e5780"
  },
  {
    "url": "assets/js/16.f6072e25.js",
    "revision": "02bcbf5a1b893dc574d478331cf6c995"
  },
  {
    "url": "assets/js/17.d757e2ac.js",
    "revision": "0cc6e926768f6a44030a27705037e4ae"
  },
  {
    "url": "assets/js/18.a0f44c1c.js",
    "revision": "52126be896f2515b267149c1ba21f148"
  },
  {
    "url": "assets/js/19.0acd8511.js",
    "revision": "8a124370341be24c8ed32b65a0c8049b"
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
    "url": "assets/js/22.e1e6503c.js",
    "revision": "5714909129196b3a023c7cb482fe367b"
  },
  {
    "url": "assets/js/23.1fd35998.js",
    "revision": "942be83bed23317bdbe7e9736b483bca"
  },
  {
    "url": "assets/js/24.24d92a88.js",
    "revision": "be69799b9a740781dbb06888b5c90e3f"
  },
  {
    "url": "assets/js/25.a7c8047c.js",
    "revision": "be575dd0ac8b3505c302ef0426249708"
  },
  {
    "url": "assets/js/26.8375c347.js",
    "revision": "3ee7073bdce9f00c50741eddf7c9cb96"
  },
  {
    "url": "assets/js/27.8a619a5f.js",
    "revision": "80caa969bfdaf2153fcf18e8b398d361"
  },
  {
    "url": "assets/js/28.cf26a941.js",
    "revision": "b6c31e81f1993eddf331c0742e558d31"
  },
  {
    "url": "assets/js/29.66f7fb9b.js",
    "revision": "974499544000078ebdf29bd7d78e5900"
  },
  {
    "url": "assets/js/3.ca0c9fbc.js",
    "revision": "429c347c6c3c7357bf76d8d48bcdf195"
  },
  {
    "url": "assets/js/30.a21bf592.js",
    "revision": "7eab1e83ec45feacbca765888b3c7c57"
  },
  {
    "url": "assets/js/31.3b06e05d.js",
    "revision": "49034b9f411de55f9b68aab85fd46ee1"
  },
  {
    "url": "assets/js/32.745668d1.js",
    "revision": "1fe4548cd169bcad340259a8767dd3f6"
  },
  {
    "url": "assets/js/33.17f7719b.js",
    "revision": "d71ab01634ec4bcb6db8222aab55e47f"
  },
  {
    "url": "assets/js/34.1bfd2b14.js",
    "revision": "526e11e6b82e66ce75c0d3db19e3ba3b"
  },
  {
    "url": "assets/js/35.46d1d635.js",
    "revision": "9b069e651a2ea675c8f59664a1b54feb"
  },
  {
    "url": "assets/js/36.495043f8.js",
    "revision": "702c4176ac6a2b5f2aabe048db63784a"
  },
  {
    "url": "assets/js/37.91afb701.js",
    "revision": "1df635150d97158859e0ba7a50567562"
  },
  {
    "url": "assets/js/38.948e6323.js",
    "revision": "31091b5d39385f6afb5309c6747ecc50"
  },
  {
    "url": "assets/js/39.f1044176.js",
    "revision": "b64ae3e21e960fab9edea0d61fb9d2dd"
  },
  {
    "url": "assets/js/4.d497704b.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.cb201a97.js",
    "revision": "208842750ade4081b7e7c470bdab8da5"
  },
  {
    "url": "assets/js/41.ac2e2e1d.js",
    "revision": "a08d55decbe79f00d27536b2394d11da"
  },
  {
    "url": "assets/js/42.50b66cec.js",
    "revision": "20905b80219968c07f4342d0b64148ea"
  },
  {
    "url": "assets/js/43.79663f38.js",
    "revision": "d3fe42ea60e05cf1b32b41836b5d5d8c"
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
    "url": "assets/js/app.78db1b70.js",
    "revision": "4cdb39f7bb6e040a86ead02387f911f7"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "a821f7de90fc8a3fe5ea87a837151298"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "3ad8dee572964c3014320d67305b8ed7"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "6e8dabbc8af8683903a2547156ba023a"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "d72cf1ac430ed3b938f3c74477a72164"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "c7170d54edd360c52f0a720b936b23be"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "87686cbe28d354214b62e12eb5ab6fac"
  },
  {
    "url": "categories/index.html",
    "revision": "2b8f3d3134259393547c39c85552eb59"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "550a7d247ed5ae8705c0951f4f7416f9"
  },
  {
    "url": "categories/Markdown/index.html",
    "revision": "22d30d1ddb5dbe6068fd53394c5f61a6"
  },
  {
    "url": "categories/Npm/index.html",
    "revision": "387d877a58ed7686fc0e4a823cb3a1cb"
  },
  {
    "url": "categories/Xml/index.html",
    "revision": "ec19394c1fe4772411277cb757cd5ac3"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "8b815ae671702b80f5d24f11ab4e27d5"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "8edcc3bbbece055b0c2cc0fd333414cd"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "c9da73fafccf5e5a336cfc3a9daa2dc7"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "d855be5c4742a3fc808ec07be56fa224"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "ed927c21860c912f4daf30bb8317359b"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "ba13102c6505a7a9508f872ea38a4ef9"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "8fb8d0b72ec4766a75806547d0c5ba34"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "1e7a7a570e543dd3597220927f61bd28"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "bb3d43256e26cf7ef6caa22f8587fe82"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "f0bd65420d90f5e91bf89b23bcc1ffdd"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "319ee0a7355bdd19fdae5c0eabe5d718"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "2e85ba512c0b9b5da136013879d91538"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "379d13f9b0654e04926441fbb7257d77"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "fa99fdd1176167ed1dc551ab475ed5c7"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "a6d51c978ccc07dee9b2f16a9de432b4"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "57bf3889f8d35117ff52a74bdb9c6b25"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "1cc3471467707a4080d343e19425bf75"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "0b60d459c3ec2591805b625647e16f79"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "610d939876b1eef6612ef10ccaa5e403"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "1c53ae3f95da00c3e9f20d6583d565f4"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "c481cd97f4177276a619ffc9e81c9189"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "0a7428bbb189022e4152bf689cd8e536"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "d8379f16b22415f97195264fd86eebdb"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "98d84cbd5b347cb62ff00d68fe678ed0"
  },
  {
    "url": "pages/index.html",
    "revision": "5cc6dfb597b1594158f950044e0cc514"
  },
  {
    "url": "pages/Linux/Linux命令学习步骤.html",
    "revision": "c5333b37fda658bf5ae9485545f85a60"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "501c8be21fc9916fa6d5a717534e177e"
  },
  {
    "url": "pages/NPM/npm命令.html",
    "revision": "3e424ec44bcc3327b20ad024f95444fc"
  },
  {
    "url": "pages/Vs错误处理/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "a653243d2d46033783fa57ea5fdac4b0"
  },
  {
    "url": "pages/windows操作/bat批处理指令.html",
    "revision": "1d7ecb00ddd398749b5eacfd8971c442"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "a882e8cd1a14c178c08ac38981adbfc5"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "07c10bf47762aecd55e9e7cd607ebf78"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "547f6a4e75eb57a2ad52840032722801"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "2cbfbc1deefbc00302904b2bd8c9a023"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "b3e90817f6b8309454cb4821474a6cd1"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "9b42b5a8cd81a9439a8bb657783e1d91"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "86bb943fe991f72d9d8df978407feab5"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "131d2e0b95a2a1f4a2753ee320393468"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "90d27b28718f959e3f3cd3062381d2ca"
  },
  {
    "url": "tag/类/index.html",
    "revision": "b200589f2ce36a302693d77f6b6ab42f"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "d52b6f76ec1d9151df3521c187a68433"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "39d7c3e92c11d01064895617910d4ac7"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "8bf77be8373c1e506a98f25e6d0ca1d4"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "efc3cb925fae6606a1041e6dea2a7725"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "ab309b2434f1a624e66ba7c675f4ca81"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "0da9490b06dbd2ccdb27e231dcd51325"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "a8833ef48ba4c9d7271ec86dfbe52918"
  },
  {
    "url": "tag/bat/index.html",
    "revision": "39c4764d5c162ec936aaaedcc606a5b1"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "5f222825df3f5988140b960be9a6a69f"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "1e0b3a6b576d8a014196c8a47e4e8e76"
  },
  {
    "url": "tag/cmd/index.html",
    "revision": "7a26404e175c6fbd23086b70ef715f9c"
  },
  {
    "url": "tag/const/index.html",
    "revision": "74236c37beb194cf805009ecac1c0064"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e0ebc4a912db7e64967a3499ac858c42"
  },
  {
    "url": "tag/help/index.html",
    "revision": "764a42f0931d4c9a4ac2ee15d6d69769"
  },
  {
    "url": "tag/index.html",
    "revision": "ca6ae203ed200dc9e931e921b2cda5f9"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "aaeb5787e2f9753f8bd6ba69c72b1d62"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "7174a57f454064ef66332c9023232557"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "8864c2682dfc7bd1ee685cc211ae9c9b"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "954ec15c24e67dcf2de3434ee2bce414"
  },
  {
    "url": "tag/XML/index.html",
    "revision": "f00095929a1466f4c1256eda7e1d3800"
  },
  {
    "url": "timeline/index.html",
    "revision": "fcc6297060213edbed9ad2e464af6ea2"
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
