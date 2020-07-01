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
    "revision": "1d9d452a3de3218dfbb7701d95cd5fee"
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
    "url": "assets/js/10.9aa95ace.js",
    "revision": "dd081cf01d836a31b3dd2b49ade75562"
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
    "url": "assets/js/13.7725e7c8.js",
    "revision": "2481526e2dd1263892b79ecb9501b71a"
  },
  {
    "url": "assets/js/14.4fa26863.js",
    "revision": "f802adb29a7ccd070f23169b75f20d1f"
  },
  {
    "url": "assets/js/15.abb5ca62.js",
    "revision": "a715c0a75cb2f6a549d53051ee510cbc"
  },
  {
    "url": "assets/js/16.208c238d.js",
    "revision": "4213d89235d37b48a56629ebbe3abb63"
  },
  {
    "url": "assets/js/17.618e6e09.js",
    "revision": "e7dfb113fb1d97f06db3d1a2439fe724"
  },
  {
    "url": "assets/js/18.4dc786a4.js",
    "revision": "6363e87fe9f95cf7eb64417a82516bee"
  },
  {
    "url": "assets/js/19.1619e445.js",
    "revision": "efcc1675957f2475ac5520f178cb4370"
  },
  {
    "url": "assets/js/20.43844371.js",
    "revision": "f7c717cee603dccc105b24eeea082a02"
  },
  {
    "url": "assets/js/21.b40deb11.js",
    "revision": "0ea6448116fc34debd02b22f988bf85f"
  },
  {
    "url": "assets/js/22.8ed79474.js",
    "revision": "8efba8f3658d53f86a8e159fde8d0ffb"
  },
  {
    "url": "assets/js/23.7e931550.js",
    "revision": "dfe64c8428dc41b643452e4a3ba82b78"
  },
  {
    "url": "assets/js/24.7dc0d30a.js",
    "revision": "283816e524aefec339a11d6b89e78f55"
  },
  {
    "url": "assets/js/25.040a4d18.js",
    "revision": "701b98d2ec8592da509308106237bec5"
  },
  {
    "url": "assets/js/26.61588b8a.js",
    "revision": "024ed24b008c3970e6dcfdadc7366cf9"
  },
  {
    "url": "assets/js/27.fea839a2.js",
    "revision": "8fc3647e24df714186549b8b67a09708"
  },
  {
    "url": "assets/js/28.44e1b84a.js",
    "revision": "5510fe244c186bfc939209cf6f5de587"
  },
  {
    "url": "assets/js/29.307a184c.js",
    "revision": "254f07700a2d8f24933c86e7e85f1318"
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
    "url": "assets/js/31.9f4e930a.js",
    "revision": "cf17d503103f7e9a31d22d9dab9ae886"
  },
  {
    "url": "assets/js/32.5010d38f.js",
    "revision": "530d70887c115afc17d8f30d199bfd35"
  },
  {
    "url": "assets/js/33.e624680c.js",
    "revision": "a954ebc8d5b5babafab2fdbe7bbd067e"
  },
  {
    "url": "assets/js/34.33d449dc.js",
    "revision": "681c582d95038d14eab2a8f7796bf27b"
  },
  {
    "url": "assets/js/35.e53d2aff.js",
    "revision": "33961a7285e6bafcf79d3db756983a79"
  },
  {
    "url": "assets/js/36.3111d879.js",
    "revision": "00d16e32ada2f983ee90faa47d45e634"
  },
  {
    "url": "assets/js/37.7a517c02.js",
    "revision": "300b1a54a9eb2eabd4362b6e596b1681"
  },
  {
    "url": "assets/js/38.e6e1252b.js",
    "revision": "be3f33605520c5071b2cac3575308047"
  },
  {
    "url": "assets/js/39.f697d094.js",
    "revision": "da7fd9d81190cf9a00767d9cd32a12e5"
  },
  {
    "url": "assets/js/4.d497704b.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.3fb3a319.js",
    "revision": "fa6025b2977747a10971996fcc2be8f0"
  },
  {
    "url": "assets/js/41.9cc6b7b8.js",
    "revision": "841c585f32c0ec935c0a8896ff17106d"
  },
  {
    "url": "assets/js/42.2007b4d6.js",
    "revision": "f92a95ea53941628866b867aa20244dd"
  },
  {
    "url": "assets/js/43.a9ea95d4.js",
    "revision": "9560a712697a0b538b14d2e01a698dc3"
  },
  {
    "url": "assets/js/44.7eff4390.js",
    "revision": "18bbfdfaa6c1f618f29f80ac84e049b4"
  },
  {
    "url": "assets/js/45.3b816dc1.js",
    "revision": "042d07fa16fd87b9f52a9e07bc94ea46"
  },
  {
    "url": "assets/js/46.7e238811.js",
    "revision": "88d69e1a3c456a14803c1a2fef2c3b8c"
  },
  {
    "url": "assets/js/47.5a273418.js",
    "revision": "1ffc429b1f950959b7d89d741bf0d0d5"
  },
  {
    "url": "assets/js/48.2e3a09ac.js",
    "revision": "feb950e1ee8335b5f58da383b484fa9c"
  },
  {
    "url": "assets/js/49.164d6109.js",
    "revision": "8f167d100a4993f26045ff1eceb537e2"
  },
  {
    "url": "assets/js/5.859c23b6.js",
    "revision": "b7998e1b7c57fae69947d218585d1cae"
  },
  {
    "url": "assets/js/50.ee4da034.js",
    "revision": "c84460c065d60ec96f64a84d6ded74fc"
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
    "url": "assets/js/app.70c48c58.js",
    "revision": "107d6d59de51c004aab51974004fd263"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "456690396399081c7028f0b2a837d3ef"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "d58012c5f8c81ed88d85aebb7cb2e37e"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "42b03c6c4cf6685a4048f041c7992bf3"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "c901454c046469b45faed2d247c0458d"
  },
  {
    "url": "categories/index.html",
    "revision": "ffd299fcb5ccc04892917b5b57303a6b"
  },
  {
    "url": "categories/javaScript/index.html",
    "revision": "9f1fdfdc12bda215faf5f8efb84c9c13"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "03fa7a833f46af4922d8adcd6951fb6d"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "da9680e6b3c21660452212912debedaa"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "9c36b300bf3963cb30bba8aa93e1bb59"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "59e2af3c2a153856bdc66cca1580016b"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "79b985a85c3a1d11787eab5f7423af35"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "57a11885c91e6b7e5cc4387b7cf6b139"
  },
  {
    "url": "categories/富文本/index.html",
    "revision": "0f5cd116a72a43ff5d9128c3b11030a5"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "3278013668ac1dc9665a32c0a866c7e2"
  },
  {
    "url": "categories/编辑器/index.html",
    "revision": "179dd4492cf5347acaff6611b0a7fdc9"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "2b8d77e8320945d66234e2ac7b01ef2e"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "574585898e22cbbf7d7c433d2612d9e3"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "6b2156573193697e21f93ecba99cea2e"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "f1b76353ef4e1194bffbc3d94741fc51"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "8a08cd7079c0a7974e62a48abf21fc67"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "457fb9aaede476169d6ca5ac5beb7ac9"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "67863c048ffcb1fff213a0293b06ecdd"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "66be5ee08dfe4e716ac16c057436a760"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "c9f14e96d814b2a6942f8a66694179b3"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "fee977940a7bdb3d63d5fcf3d58635af"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "e91df8f526e23a25e1c43fa89dd1c604"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "7cce8bca6781b5c6fc1df69432f9062a"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "458a0f8af430dfc0996df614d5707e90"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "ebdfee81d97a815bc4d18f78751dd705"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "4a4a14ea5143530fb08f6227c4cc0821"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "5f13c78d869defd91c71c8d0be1dd894"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "0a15363c49d70b38b8a9d3f3dd528e71"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "fc9751c2bd5c6d65d6e2df8099887ce6"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "2d88ec40440bfd8e0a1f6e56bfb7f493"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "3279db320fba11e1ca24712ceb66a48d"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "7d5b0ab6324ee37bf9c4b670cd7d19aa"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "ceaebcf3484383cff7ec91e0bf96b80b"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "f8666e80f08b57810acdf054d12d9bda"
  },
  {
    "url": "pages/index.html",
    "revision": "fd15b23084687129a0ebf9201f687a17"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "d7f8d300f1f3ee431a5f13fe733f6233"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "8c07d97cbe8c6614d8ac2493d7521066"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "1af8e1d13e46b0d5b3fae60362d8f3cc"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "ce84ade979855daee73cac30e7d94e24"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "64bb7bebd6dde0f120700995caa59651"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "e0ed31005f6a8be0100e063fb62e993a"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "b798db25cfa606e986542def990dfe3d"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "bc9d0cdfa0d62f351da18d228eec9d1c"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "71d80b60ad25927e39ca65dca85524ac"
  },
  {
    "url": "pages/系统/bat批处理指令.html",
    "revision": "79e7bdace0ab1e1ab41f80f73648a466"
  },
  {
    "url": "pages/系统/Linux命令学习步骤.html",
    "revision": "e209b7ca287fb793d7b8c971521b0f35"
  },
  {
    "url": "pages/编辑器/VS 实用快捷键.html",
    "revision": "7e193b60474896b6a25252e2ad57bcd2"
  },
  {
    "url": "pages/编辑器/Vscode 实用快捷键.html",
    "revision": "e9ad7cdc0830b18395ed323101615963"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "9a95e5db1a5d2e002758336c92bf6536"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "5766eb4c7a6df38e4cdf0d3d471faa73"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "b77bfd86f570e31a5d716f716880b324"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "2b952c854c7be61af3aaa5c452a58215"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "0426f1cf8456bff3b4b1d8ce00a20183"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "1b9beeb45fc110157226a7392e3a9af2"
  },
  {
    "url": "tag/const/index.html",
    "revision": "7144c686de3fa2a6868260c42cedfb0f"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "8aa578b8889e4ed8617138de068488a9"
  },
  {
    "url": "tag/help/index.html",
    "revision": "3066cd1b7faa2fd49514bfa3c006aec0"
  },
  {
    "url": "tag/index.html",
    "revision": "5e232229b9a47553e66675b9d20472be"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "bbfb543432c9acd1bd0f8c6455549c12"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "20d1fa61212d086bcd213c5c79b0fc27"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "2be8b8740e6fff6acda63e2a7d22f9a5"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "fe101c10f936e29803f6984662d6d4dc"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "14d0c91dde76519a76d261a8e35b6af4"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "3e6faa9ff0ac56020a3c3e23caf3f8fe"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "4bd96e14b9d1ddf75ff7baedb78b76a1"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "9e5601dd612e371ab1987aa692196181"
  },
  {
    "url": "tag/Vscode/index.html",
    "revision": "90414c1ce6250c72f004799b24878465"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0b74e02a574dbb9719717a6c787abdf4"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "db6af801afb84cb09ee9b2329aa40d44"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "90826407fc7c65910e0307723a94be96"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "d804c5fee8b62103b73746cde7e4d7af"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "273650c593971e6c3bcfaa983a8a7630"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "2f143394bbe21c3fe9e6f827822804bb"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "894f2d44619571f53716f83624eb4ff8"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "f54688997ec59d26722d9016cc2faff7"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "6c1a3a86c5296e8afc74b755000db27c"
  },
  {
    "url": "tag/快捷键/index.html",
    "revision": "df398a4d3b3b5dc517b7b141d8cd2afc"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "0a159067e948410bca733e984767689c"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "665de66fa938e086e7d267ea9124b272"
  },
  {
    "url": "tag/类/index.html",
    "revision": "089025e4a1eef272df5d3d19002fe397"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "4ebf15425a8d64572b999aab10a438a1"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "6656096a66a26ab501ab33d490aa23d6"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "533d55bcb2c19e6cf88c0870dbedf987"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "ea53a3e61b5e964b8880927a7b4a694c"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "ba771556a2cfee7fdd6ac721eff73c28"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "3eb9f8e710a2780225bbe9647bb7bfc5"
  },
  {
    "url": "timeline/index.html",
    "revision": "ce026b52cf44c551475108704caffb31"
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
