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
    "revision": "c8d1c578264d1ebecb8ad3c3a15fe49b"
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
    "url": "assets/js/10.05e22c8b.js",
    "revision": "a029dd78996e4d2064ae7a85979a9884"
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
    "url": "assets/js/13.a5dbebfb.js",
    "revision": "0f703726c3ef664bc4627ee860f2199d"
  },
  {
    "url": "assets/js/14.83639b0d.js",
    "revision": "32a56a1cef8bd25d4b5eea0cf34d8cf6"
  },
  {
    "url": "assets/js/15.58d7ad6b.js",
    "revision": "9733bc7f7a20dd0b578c518c55013d4a"
  },
  {
    "url": "assets/js/16.43c146a7.js",
    "revision": "32feb4d8440224db4c820728b9498d72"
  },
  {
    "url": "assets/js/17.0b264d9b.js",
    "revision": "bbef65b2b0de751a80dd8b0ab446f075"
  },
  {
    "url": "assets/js/18.1b9ed963.js",
    "revision": "19da740dae6d7b96e0a9e9f9d341f290"
  },
  {
    "url": "assets/js/19.a7d2090b.js",
    "revision": "4d3ab168b31011c3c720039e49252c6c"
  },
  {
    "url": "assets/js/20.4c0ab4f5.js",
    "revision": "55fbf318c8a15a429fd6a61910b8ba7c"
  },
  {
    "url": "assets/js/21.311cd9c2.js",
    "revision": "2d9b655ba205081d4605f1f86a19236a"
  },
  {
    "url": "assets/js/22.91c3debb.js",
    "revision": "4f4c0be6b3d54e0cb663fed59d25453c"
  },
  {
    "url": "assets/js/23.7e931550.js",
    "revision": "dfe64c8428dc41b643452e4a3ba82b78"
  },
  {
    "url": "assets/js/24.0e4d6b2c.js",
    "revision": "67eb5c7f7f71c758a2e3c3c59187131d"
  },
  {
    "url": "assets/js/25.6e23544c.js",
    "revision": "a730e2262c59df7a8d627a95309a0227"
  },
  {
    "url": "assets/js/26.fea1254f.js",
    "revision": "8418b46880d1494899729826d3510695"
  },
  {
    "url": "assets/js/27.450a0a9d.js",
    "revision": "7b761bef60103973ea64263d2b98b2ab"
  },
  {
    "url": "assets/js/28.9138102f.js",
    "revision": "1bbe1a7af28f5cd8320173a133674355"
  },
  {
    "url": "assets/js/29.85826215.js",
    "revision": "b55379ba9a48fe643bb4a62862138914"
  },
  {
    "url": "assets/js/3.ca0c9fbc.js",
    "revision": "429c347c6c3c7357bf76d8d48bcdf195"
  },
  {
    "url": "assets/js/30.d58aa5d6.js",
    "revision": "e6ef8cd0e147b5cd2979e5a4e99f656a"
  },
  {
    "url": "assets/js/31.efa32458.js",
    "revision": "ef3a6e11f72ceb210fa608c6f2df16aa"
  },
  {
    "url": "assets/js/32.539c7240.js",
    "revision": "46ef91ed7fe54c7ad1c88ce3188b9322"
  },
  {
    "url": "assets/js/33.2abebaf8.js",
    "revision": "6a7e2d398adad3c0c84ddd2b0abe31f6"
  },
  {
    "url": "assets/js/34.efd78c8a.js",
    "revision": "4856768064017a1190cffd41feed77bf"
  },
  {
    "url": "assets/js/35.7b312a64.js",
    "revision": "9ca7a44e8c05239b2703a7c34e7ebbd6"
  },
  {
    "url": "assets/js/36.d05bf3de.js",
    "revision": "6ff6f364be7d7191167b549f8ad7672e"
  },
  {
    "url": "assets/js/37.acafbd20.js",
    "revision": "39ff91084d45897b13a2655b3c319c70"
  },
  {
    "url": "assets/js/38.d20bb49d.js",
    "revision": "e988cdeec97636c749f821777711a1a1"
  },
  {
    "url": "assets/js/39.16c81630.js",
    "revision": "e7ed2a33804bc98eab9d1850261fdc0b"
  },
  {
    "url": "assets/js/4.d497704b.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.7b0a9f91.js",
    "revision": "6085680385e8067306f05f46609b49c4"
  },
  {
    "url": "assets/js/41.6621220d.js",
    "revision": "c7cff5262c8a2bf6e3ff531494bf5b8e"
  },
  {
    "url": "assets/js/42.a2db4fb1.js",
    "revision": "518671f55fdf72ce98632e93d11eeb00"
  },
  {
    "url": "assets/js/43.69cd2b45.js",
    "revision": "ddcdf08fa601cb3a1a043fa183d913c9"
  },
  {
    "url": "assets/js/44.a8962aee.js",
    "revision": "c40df2e9f7af540dc35e22cb8724ed60"
  },
  {
    "url": "assets/js/45.5cd94aac.js",
    "revision": "8db756a6cb911011091deefe998536ee"
  },
  {
    "url": "assets/js/46.e4654962.js",
    "revision": "bef4b274c1e026df893f714af7815721"
  },
  {
    "url": "assets/js/47.9b54f3d2.js",
    "revision": "26168fc347a34e23867de3884fbf8ed7"
  },
  {
    "url": "assets/js/48.a1e123d1.js",
    "revision": "86f35c6eb346bcd4d00c6877f918fa82"
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
    "url": "assets/js/app.a7581e2a.js",
    "revision": "d1e44dba5841364f91bb31563d0c193c"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "3a624bee42f232f62a9a2e937a4d86ab"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "231f13b20aef6de44f5bd5ac6d85818e"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "af30df87af0b39c30c7cfe468d1007e1"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "84d11cfbdab26c9690b6e2a4463c798c"
  },
  {
    "url": "categories/index.html",
    "revision": "aa0ed749ad7b02c3165aed345de99a2c"
  },
  {
    "url": "categories/javaScript/index.html",
    "revision": "c564a220b96eec914bc5d20e6c052df1"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "0acb24391d7e9661019bf67151e0ec85"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "67b005554900bbf25675d6807b283ede"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "b800c759f2395ade212ffab405443e9f"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "15d3fa88d3f2bd1cf6961be867cfef82"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "249d1ca33773945d202539507089d12c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ea74eca09f164259a5a20fb7be027edd"
  },
  {
    "url": "categories/富文本/index.html",
    "revision": "bf7a947dfd83bf4a4948497f4714070a"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "0fe61355d974ded6ef63bc97ccbdd91d"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "8cc28da84ab5e71285fd96e9caec1ef7"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "ba1ee1a6d4b7ac1ff5acc4b079fdb002"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "aaa5798dfb6c99e2f42cc74d1a5ae913"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "315aecbbbba975158f2a07de082e5988"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "5154b5cce234b3b952e3cc19b208376d"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "40fb027c9a209d6f0faaf7168309b344"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "742f7a0844aecad9e836027e81e84209"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "bd30d2716c6fbae6af524c9e66a7d3a6"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "a3632168bcb09e1b8012d346a866488d"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "6f637b24ac4ebe2856ac4fe0b17947ee"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "5e1a4ccdd5feb225582c81b3fb772c0c"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "2250a9b0386ca66ee635740767dbfa53"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "13d2e01fb9935a228d4b5e98c909f125"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "8716ec3048deac75591e63137bef08e4"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "fb7b73e0bc45b1196e026d80d88d79ad"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "12c79f59f3b0eb510ab8d8dfc7f3d3d7"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "0e535efeef6630bcf947180aadc33815"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "fe788a40ea7e3e5a231a47919debeed6"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "fa3774f15672e13b3ba250a78719b4f1"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "68d1775792b530fafe9bbed944113bbf"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "c5b477d68baf7ea7488ecce0df2e9f47"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "b91ec4ad5569d3314aad55c0a91ccd7b"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "f5e79ba73f54c9383752fbad82a7b3a0"
  },
  {
    "url": "pages/index.html",
    "revision": "14a770a73e8dc8a7eabf6bef9acb73ef"
  },
  {
    "url": "pages/Linux/Linux命令学习步骤.html",
    "revision": "5c72a20e7adba136e6c1b41e83e05eeb"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "88cc9d554713b146f6ddd54766d267b6"
  },
  {
    "url": "pages/windows操作/bat批处理指令.html",
    "revision": "31f85faea3a913dfb6555b0e899f8f51"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "eb72d1163554bda28bc2de5c95605412"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "743bf25269fcc653acc0dab764062b8e"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "d60d8b7543363c3a026d153613e8e953"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "e6f1c98ea61c06737fd1e2c5ea60ad19"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "2787ecf8239c84370017ea6f2b422807"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "8aafefce0fb04d84664c5ede8656163c"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "4d9e9e6560bd9d8fb80bb90e9f0af033"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "25d8b48e453690f8ec664bab900a0082"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "1478bdbc3c3be20b83aa2d3e4f641a2b"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "94e9fa32da990ac8b9d72e09e32b6d6b"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "1112512460bddb490fcc2133ed892891"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "0cc92f8acd610b8241ba57defaf4f161"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "47227c6d9add648ffe9e1dafc6148e16"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "4a0948f227c45af9f302ceaaf0179dce"
  },
  {
    "url": "tag/const/index.html",
    "revision": "f8d78ab5ac914fd7fb31c1dcd5ff522d"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "e7e97c835af08345a5e043bf82cae346"
  },
  {
    "url": "tag/help/index.html",
    "revision": "0fbe7e0b9056ace086c795721582fc4f"
  },
  {
    "url": "tag/index.html",
    "revision": "dfa190f2448b3cc77a837f433edc4b30"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "ac063bff7021e256b9b846432a5f2342"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "e379dbf6cb6d527432ec0bf65f6f9bd2"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "f50faae1ba9af78b89dd9a06091da327"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "440e557c4b58d93b76cd9f3231e25fa8"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "4a2038a02547132ed990e97408bf53f0"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "6f5c1526d45507d84b761c7c3c88d375"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "951f4bc6ca7ad386ae626b9877135576"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "7fecd1109b2e5ea312bf62a1f3bd84f8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e29f2788b0edeaf1a5aee56c27e64b12"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "b1665a161aa96405bba4c328f2b32016"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "fa6dfd3416f05e944c0d5469820f93a9"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "17d32cb2d80d9c27067c1bc52c26c057"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "632c9f26b7ffb02dd29a2aa536a2d435"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "e7018a4cf8fb5479db2d64dafaa96e7a"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "630051763e5df166e64ba802be68735a"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "cea613d4b22dc53265c17635a84f4855"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "1d6da5af35887f38f50dcaed0d935dde"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "c720709b7525f1e379b191a7d66b35ca"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "532ac0d3f0728691b0282f149bdf5385"
  },
  {
    "url": "tag/类/index.html",
    "revision": "17901221b7e2a301ef9c546e2d97a289"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "a6178e39c0157665d7f3abe5a4b43738"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "b85e0389d48b258dbb86ad4399c17d10"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "513100710cc519f10e2d268726eb0bcb"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "7ff7949f2632070d5fd8ae838e82153e"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "27c871f9ddf1c56b7abb523d5e9cdd68"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "a06b79e9e9cd96d95165379016666822"
  },
  {
    "url": "timeline/index.html",
    "revision": "ccfa4cea32e8df3ec16e23dcf2966fe1"
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
