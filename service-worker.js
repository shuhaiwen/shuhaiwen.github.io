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
    "revision": "9f2313632a0a074d9400f463df0a92d7"
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
    "url": "assets/js/10.d52b8554.js",
    "revision": "82e990e0ea2dd7d4b0d3b94083e63ba2"
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
    "url": "assets/js/14.64bf3499.js",
    "revision": "411f0dc477220341e0838ccfa0dcd987"
  },
  {
    "url": "assets/js/15.abb5ca62.js",
    "revision": "a715c0a75cb2f6a549d53051ee510cbc"
  },
  {
    "url": "assets/js/16.f6072e25.js",
    "revision": "02bcbf5a1b893dc574d478331cf6c995"
  },
  {
    "url": "assets/js/17.b456809b.js",
    "revision": "1b88032fe663dc12954b51c1aafc8acf"
  },
  {
    "url": "assets/js/18.98d8cc9c.js",
    "revision": "3b41a18d8ffad2066184d1381e791d6e"
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
    "url": "assets/js/21.9e7556ce.js",
    "revision": "3af77e881b0b6eefa043aa92e5ab8936"
  },
  {
    "url": "assets/js/22.854035e6.js",
    "revision": "b0a2a52f620f360c47b5d8dc41dc212b"
  },
  {
    "url": "assets/js/23.d108c8a6.js",
    "revision": "b0bd5028a2dec516e4f3979c8bc9e3de"
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
    "url": "assets/js/28.bdc8d696.js",
    "revision": "13a6f24d927399c569d79f32077c8e72"
  },
  {
    "url": "assets/js/29.eb55cabb.js",
    "revision": "f87d77002c6e3566d0c1fa98250f075c"
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
    "url": "assets/js/31.ca7b794b.js",
    "revision": "798c0d704eb844285d7d2f378e0227a6"
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
    "url": "assets/js/39.f41eaf6b.js",
    "revision": "5c9005992e3796315e387754b1f305de"
  },
  {
    "url": "assets/js/4.d497704b.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.891a4994.js",
    "revision": "b6db520e4d84f4ec5c9127ee84dd9e80"
  },
  {
    "url": "assets/js/41.acd41a08.js",
    "revision": "9f571a23dcde6bafaaba8792f064a3f8"
  },
  {
    "url": "assets/js/42.a2e13ab9.js",
    "revision": "d5ba68f81edfd00c4218c154c83f3336"
  },
  {
    "url": "assets/js/43.9acfe3b4.js",
    "revision": "6d36c0c479383e1cbcc5a38c5cad8669"
  },
  {
    "url": "assets/js/44.b9ee5778.js",
    "revision": "ff79e7203432cf680835c8271f6b45b7"
  },
  {
    "url": "assets/js/45.6be043a6.js",
    "revision": "e5d67709e498e58ff923e9c560cff01b"
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
    "url": "assets/js/app.1fc41f9a.js",
    "revision": "5fd10bdcb0f0887fd3df2686e2d75bcd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f59a862a641876e5d53b381a1ccc2e9d"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "5e882f88e0ab389feea88171ccc883c1"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "0d148557fadab2af7ad49271bf00a198"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "3549e9e06847df9e3a0b04dc04f5d82e"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "917128e9f68272453c21c5f4216010e3"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "ed8011d04c70c46f6310040f12a02243"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "d8505b89ed9acce39cfbf091210a9044"
  },
  {
    "url": "categories/index.html",
    "revision": "888b0c2e79a50b3879a61d68c8a59f93"
  },
  {
    "url": "categories/javaScript/index.html",
    "revision": "092f6112bea3cc10e7e1cd65a35fb563"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "83803eed7c15db8ca4820aab54d8335c"
  },
  {
    "url": "categories/Markdown/index.html",
    "revision": "b9d95a3108ed2f6d0d0bb66a17669ac7"
  },
  {
    "url": "categories/Npm/index.html",
    "revision": "6d4fa868c07b335daecf6099e3c66d16"
  },
  {
    "url": "categories/Xml/index.html",
    "revision": "7757b108c403059812c0bf6157c7ed52"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "5e6c2d5bcc0275f938c62ea2a514d766"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "2892e28141cfd73bfbdb17fb5b8495d6"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "e755de5c818fe7cafe5397adb30a0bf9"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "cdc0635737a23ada8968f813481de351"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "6d66f9158efad34657e6448f558c0284"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "45f751040ebc85155451e9168278e32c"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "2940ea6f86f108f34f4df992a7224819"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "43f73089b04184127bf173f9fa8319aa"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "32e1a350436e4a3d1283cb1cdfbb57e3"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "14c2aef02a941507bd38b69131140c17"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "9f0b0d67ca6ad2f04105a1faf2c1a671"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "3112176941fde509df0c404c50da894f"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "53355cbf3e3e73557cbfca9784fa1c1b"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "1b0e0d2e8f7651f3bc03fabb871f2cfe"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "22180f364451479608e149d35e981d1f"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "80acbfae9d3cbdf22171b62536620080"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "fed58bccab0daa2a591200745b6fc181"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "1903eb75ea40f5e67262a4fd0b2c2110"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "bb6183eee8c09ed1c980aff9ec44c447"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "8b1daa32fb84ae09335b4140f1c75f43"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "1e53f1bc25ee9968e3cceec50ff6dd79"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "ab3b99021bcf7be82e15dd498137c175"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "91898335bbd92a9fcebb6bb3e563a68c"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "7a8cb42b73c3a4a2687ebc7615707b4d"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "4ba58ad0632580e9af9b9478cbd335ba"
  },
  {
    "url": "pages/index.html",
    "revision": "6ce3fe1decd311794c4bf77af6dcec88"
  },
  {
    "url": "pages/Linux/Linux命令学习步骤.html",
    "revision": "9bfe83cf396b60183e54c95dfd0d1135"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "fcf8b5c7e47f6972842f7110edf2c481"
  },
  {
    "url": "pages/NPM/npm命令.html",
    "revision": "f13e0a4037bc6fd2f73f795b2560a3f5"
  },
  {
    "url": "pages/Vs错误处理/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "bb0060125274e8db26aafabb7615b2aa"
  },
  {
    "url": "pages/windows操作/bat批处理指令.html",
    "revision": "f91b2669201b297f34f5c91ee948db4d"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "c66043ae2b4cea3b827f5636065896bd"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "9525ae2a8a0ae7229931d239b7c3eb43"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "e4f9e34eca8ef6a059f41a0b612b0ad9"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "e1068152a236e05247e08d72c0dd2d68"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "5575aac4508df27ff1c5016c160cc7b8"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "2c5d302f38c29f28acddad8d404ead01"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "45cfe88c7bf673b03701e0129dd96340"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "0334d0444afa53aa87a753c33c110479"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "dc5f6b1df1d0ec3d4ace42f190171418"
  },
  {
    "url": "tag/类/index.html",
    "revision": "3cf8bbee810ba2bf56a205c4694a1dcf"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "34e6fb05c0ca5a0edce8ae84c1c53087"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "dc907b4e7152425d4bd87eaa1b4ba477"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "06358c09232c10a42b838726ab0e06d5"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "3e0961ed30e3ac79606736e6e1571922"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "942328e1086cfba865963bb0b4af7bfe"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "6df629d63b516f6ed58f86a366e167f9"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "0c66914ab0e72c5115ebecd6bfde7184"
  },
  {
    "url": "tag/bat/index.html",
    "revision": "7f43025ecb153ce26a37c3415744fd88"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "d1c6d88c397d8a55c99918be7ee2aca1"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "08f0cce989a0be9800c15b2efbfdb19b"
  },
  {
    "url": "tag/cmd/index.html",
    "revision": "a03bdb55ef640a2a42b3e83340734a4b"
  },
  {
    "url": "tag/const/index.html",
    "revision": "0ba1d72b0e1d5ec4bfc6c8c8ba774318"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c5023871156a3047dcb169732079e139"
  },
  {
    "url": "tag/help/index.html",
    "revision": "e51858e6645a1147c289dc344509eeb4"
  },
  {
    "url": "tag/index.html",
    "revision": "16d10f065e16100735e9a8203046da79"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "0d532dacc55b54b0bc3ca10a0a559204"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "f5c79fb2d167df4dd359c613225ee67e"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "862ea7aa1886ad2d48099e09f0ac4fa1"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "abb7c4979004b992cf9ca0e53d73fbbb"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8b750c9f16dab8646cfb318b3ce402fe"
  },
  {
    "url": "tag/XML/index.html",
    "revision": "3df8e5b69e3f5f7c6fe3e9eb01164735"
  },
  {
    "url": "timeline/index.html",
    "revision": "313393e0e7f6071556bee0e85a53f8f1"
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
