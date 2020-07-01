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
    "revision": "17acfea32a29d6e7485b163f09480178"
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
    "url": "assets/js/12.ad45c144.js",
    "revision": "b41374f860a3edcecb9586f103319c55"
  },
  {
    "url": "assets/js/13.f93effcc.js",
    "revision": "4fbe4f7f0b1f3ef33b5ede9a137e750e"
  },
  {
    "url": "assets/js/14.f86b9f88.js",
    "revision": "969a63435e955965432f5d2e3ddfa59b"
  },
  {
    "url": "assets/js/15.105e06e1.js",
    "revision": "0729692c61552590dd45ea3921815690"
  },
  {
    "url": "assets/js/16.53452b22.js",
    "revision": "3b7dbf7a869d683dab401447616857ec"
  },
  {
    "url": "assets/js/17.d757e2ac.js",
    "revision": "0cc6e926768f6a44030a27705037e4ae"
  },
  {
    "url": "assets/js/18.a5545a84.js",
    "revision": "8b78d12629c7aff9f10a0f4b4f4a87df"
  },
  {
    "url": "assets/js/19.0acd8511.js",
    "revision": "8a124370341be24c8ed32b65a0c8049b"
  },
  {
    "url": "assets/js/20.43844371.js",
    "revision": "f7c717cee603dccc105b24eeea082a02"
  },
  {
    "url": "assets/js/21.497fd04f.js",
    "revision": "95adae930e85dd54bb688e04cca51c0f"
  },
  {
    "url": "assets/js/22.03bd73ea.js",
    "revision": "499b6bd109354d7c18d763967e0470a4"
  },
  {
    "url": "assets/js/23.4dc49615.js",
    "revision": "2e0a6b34581999e24091a390b7bc6990"
  },
  {
    "url": "assets/js/24.5a9000d7.js",
    "revision": "aec71e39d4af8b0d4f75ed6a9096fcf8"
  },
  {
    "url": "assets/js/25.5e17f4dd.js",
    "revision": "4cbc6a27d5c5d6760274f88b4e7c11fc"
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
    "url": "assets/js/43.127d13f6.js",
    "revision": "ec7cbe5b8da51743cc36b3446a460fb6"
  },
  {
    "url": "assets/js/44.a1f532e4.js",
    "revision": "b42040b19260dc71eecab202d4369cb9"
  },
  {
    "url": "assets/js/45.efed66db.js",
    "revision": "015c89de69dcc5a04469777211d476ec"
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
    "url": "assets/js/48.f1cdef10.js",
    "revision": "c36742615553cd2f14e3d05e62360f00"
  },
  {
    "url": "assets/js/49.39854bfc.js",
    "revision": "ac199e8b5f0476a38bd1c2fc0afba541"
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
    "url": "assets/js/app.8cd9f306.js",
    "revision": "ba5bbc036b14c74a28d99778c80d2516"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "0c6dcddd6fc770426e11c1652e8b15ce"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "114a70dcfe52267586466e721c3c5802"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "728217069f1674e0a50eaefdc5a0400e"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "1d6f74901cbfb6b2ed57a434d760e466"
  },
  {
    "url": "categories/index.html",
    "revision": "e7691163062ad884d8d83d466bf615f0"
  },
  {
    "url": "categories/javaScript/index.html",
    "revision": "417f11a68557088cbacb8498c301c7a1"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "d0e7746e5a07cfbc64ea8806679af8a3"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "fef65ead1be9f3ff40eedd4ae9490360"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "178cf73bf2ce7476d54fb0ef181ed4d5"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "7d083e072f4e56d202e1fe5ad6bc7e6b"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "936761657696ecbf38eb6a99a78bc776"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "51e2d32adfa653cefc74e333f00f73fc"
  },
  {
    "url": "categories/富文本/index.html",
    "revision": "6e51c6800a958a796f2e1031f9c0812e"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "0664bcd65915e94099ed6ee9e6697460"
  },
  {
    "url": "categories/编辑器/index.html",
    "revision": "12a5c4a29a22eb059d98a03071a65f4b"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "e321c124358cd3ed4ae85483ee8d752b"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "9e13d1bcba10cfdc266521972f1ec236"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "482717f14a79aec56e157965dafece6a"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "e3a4de123aa26a049293c0ee1a322076"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "17cecd8684fae47bd3d0ca317b89c05b"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "5a70282a24757b688ae948b75b1bbc35"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "8fe22bae4d70ff220e8ab224d7cfd7f5"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "99a3620457f92107a212acb4e5bd0c58"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "f9a5986250c2d1fd0e10339a57ddbf36"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "b9cd2cb3ce51cf9e81aa4db39961208c"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "829a1f53bd343ddf7bc54919062c1a5a"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "341bd5059311183d100d69763c6c5091"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "7238b88b34491a47ac5ae3b80406782b"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "cb62666aa064032722b7c8536e588390"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "9edb92e8d7d272fc52098547b3d9eac1"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "7ac64fa1e4670ba26fbca65715abb15d"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "a168d0d794545cdc140f3f7a3faaf841"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "af55d41c4c875092644f462136bc24af"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "03361f25f61f42d51135aa872688985c"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "ded8c95bf7ac538672d4b02c133723e4"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "b19002a0386c64c9fd451897473b2a2b"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "cb480b24018db88a03d23548b19573ff"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "ba7d718042022bb27a3aa631971c5b87"
  },
  {
    "url": "pages/index.html",
    "revision": "39684a85b8ed65b04b006ad5ef1e58bc"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "4e757889f624fd94066b1ceaa87cc607"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "e9ab2897461e3f096ae367ea9f5c76c1"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "b67cc1a262f3c113a4cdd3c6a6e7c187"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "04dab6ffec931e3b462c0729617d9a1e"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "cbfe05bdc20f9054f39e31a61bc8b050"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "b57b004f16897767b47e554761ff6bdd"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "a9d9dd5bab98c3423da6533338eb19a7"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "9eb496c1563e906f205941f1f60fa5a9"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "190eb73f673ffe1e6c69e1d8cfce305b"
  },
  {
    "url": "pages/系统/bat批处理指令.html",
    "revision": "2fe7541ca7d9417139e3ec6685da5fc6"
  },
  {
    "url": "pages/系统/Linux命令学习步骤.html",
    "revision": "559e93e60d4667d20280024d9de7f689"
  },
  {
    "url": "pages/编辑器/VS 实用快捷键.html",
    "revision": "809de9b83bff5a2766625fbf76f92785"
  },
  {
    "url": "pages/编辑器/Vscode 实用快捷键.html",
    "revision": "74d6c9033aca4878177df875c56c59df"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "1b1eda25fc2947e2c2ee339561000cfc"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "9745bde40adfb758d0fe4dea0dc8be04"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "5dbbd1f85fcdad512f3fcd92d6061a51"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "69b5c3cdfa2e20e092c96d043224dcce"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "20244711abac41462ddf724ed53a678e"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "ff3f072a4d765cb2ded7616adca83eb1"
  },
  {
    "url": "tag/const/index.html",
    "revision": "f8e73bfd97db94cddc15170b4f2552f9"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "cf85ac67fd8275bbfe7a19ce881a78bd"
  },
  {
    "url": "tag/help/index.html",
    "revision": "aff236d2f2ac3b78c66b334214b11f96"
  },
  {
    "url": "tag/index.html",
    "revision": "6d8d856ef13d5553864947d0154bced5"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "6ff26b0f64e1c15a434c16b5244b4a6e"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "20b7e409a87784e93d7a153b122a81e1"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "fb16dbdafd287ba63718aa8bd2df7f26"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "bb3ff05c9de6909d567bcf404c833634"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "ae87dfe6af8cbcb68afb986081dedb01"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "0da217f9e130a5913c8c2eba3f345fbd"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "67ca71007fffb677c4c817872d2e6c8c"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "1db9794a3a7642f8bc551e295483fb6c"
  },
  {
    "url": "tag/Vscode/index.html",
    "revision": "80179a9ed0fc9fd23ddd6df7980abf9a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "17d3da60a4a7dfb909ecab241c45ca4e"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "d6948076003e2f6328d91ded4ddb6a79"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "d59ea86ccbe0d9db2e2498138acfc9e4"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "20e0896a19005e44c42b15721084f29c"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "84601b335e3a360fa183112af20b511c"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "fb58405be4db4ba82249288ab57a5833"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "0ed4c18e411d3e083e3a696ebc684bdc"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "4cd6d5a4ca2984d54fa8d0fab35d0761"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "c7835c4c059592ca1acad48c5dffeefa"
  },
  {
    "url": "tag/快捷键/index.html",
    "revision": "732223ae3778e62b0527d9f2550fe146"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "c91c0dada08b60d83517031480498931"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "a9490ad4456523141a7516ef1380cd20"
  },
  {
    "url": "tag/类/index.html",
    "revision": "a682d3ffbb386c50e3e268ea1129553f"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "56f4f6e0e248d4c80563021d5eb726c8"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "965ec2d94303870a7c07c20ccfe34de9"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "c6a39b6cfd6acf3e3b61c5b92dde4339"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "878607ea997063220ddf2601261ab842"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "236b25d70393f8311f031be813432414"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "b767d7d44d25b4af8c857e2adb160b39"
  },
  {
    "url": "timeline/index.html",
    "revision": "e439d5046ce26465b3aaef53a51d5841"
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
