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
    "revision": "7e9a6b6d9a1c95ec8d12fa30538e203f"
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
    "url": "assets/js/11.cb47558d.js",
    "revision": "f42bc349c7353663258dc7ec032023bd"
  },
  {
    "url": "assets/js/12.ff91587a.js",
    "revision": "3149b2149415870560ec298aeb177ef1"
  },
  {
    "url": "assets/js/13.218866c1.js",
    "revision": "6d6f5d9eca6506e9d6711ec12d60be55"
  },
  {
    "url": "assets/js/14.64bf3499.js",
    "revision": "411f0dc477220341e0838ccfa0dcd987"
  },
  {
    "url": "assets/js/15.13f3c218.js",
    "revision": "88066663778fac5fcc8b57fd47f749ab"
  },
  {
    "url": "assets/js/16.b2211e8c.js",
    "revision": "37ae8a72b75e16b7c8ed9faf56d9f9ef"
  },
  {
    "url": "assets/js/17.d757e2ac.js",
    "revision": "0cc6e926768f6a44030a27705037e4ae"
  },
  {
    "url": "assets/js/18.78f893bf.js",
    "revision": "f7ec6d6b43ca841454050f5098f34f60"
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
    "url": "assets/js/21.3b0bac49.js",
    "revision": "ce060abd2d945694a99bdbec5183088d"
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
    "url": "assets/js/24.2aad57a9.js",
    "revision": "6f7d0a4790982433b448f318feeacc3f"
  },
  {
    "url": "assets/js/25.040a4d18.js",
    "revision": "701b98d2ec8592da509308106237bec5"
  },
  {
    "url": "assets/js/26.40967c3c.js",
    "revision": "00e34f4fe7012133f9d25ed43d93dc43"
  },
  {
    "url": "assets/js/27.13c4088e.js",
    "revision": "03bb866652712166f86da4328f20b58f"
  },
  {
    "url": "assets/js/28.9b70c82c.js",
    "revision": "731b7ebd81fb1501aa055f3fb1bcc46b"
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
    "url": "assets/js/30.0e3fac02.js",
    "revision": "327a8eb88d561241292f88185c08d272"
  },
  {
    "url": "assets/js/31.e401235b.js",
    "revision": "4ba8a6550f279138b5109cdfc24ff58b"
  },
  {
    "url": "assets/js/32.564c49c3.js",
    "revision": "70620cc3d9adfac427b8565e7f72f8ed"
  },
  {
    "url": "assets/js/33.a0fed4fd.js",
    "revision": "7403ed7a2fc5e9a825e66827d02ed82f"
  },
  {
    "url": "assets/js/34.42749cac.js",
    "revision": "48aad93e6b9cb24218956d3c8c43377e"
  },
  {
    "url": "assets/js/35.bf4ccb2d.js",
    "revision": "1dfd34353bb142bf773b6354e8654af3"
  },
  {
    "url": "assets/js/36.8c9e2a6c.js",
    "revision": "23a4665f4ffe58ad0df9add51975c63b"
  },
  {
    "url": "assets/js/37.2f7ebe46.js",
    "revision": "a0c3ff2a1f10c48c1ab9f994022c0811"
  },
  {
    "url": "assets/js/38.58fdaea5.js",
    "revision": "beda521353e76413fbd3f3c3c0ce17b9"
  },
  {
    "url": "assets/js/39.b7f77b2f.js",
    "revision": "c0d8810138397a5652386382093b832f"
  },
  {
    "url": "assets/js/4.d497704b.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.dd9a5e32.js",
    "revision": "2c4453403bafa09799f141b16ba87fb1"
  },
  {
    "url": "assets/js/41.6621220d.js",
    "revision": "c7cff5262c8a2bf6e3ff531494bf5b8e"
  },
  {
    "url": "assets/js/42.94348184.js",
    "revision": "85500c33a653f5a0d2c7b4f1224d8888"
  },
  {
    "url": "assets/js/43.c362a9fb.js",
    "revision": "38f0c9ebda698e48fdac493b052e1169"
  },
  {
    "url": "assets/js/44.96c334e3.js",
    "revision": "4815ff33d2fc1203f2e604dfa384263d"
  },
  {
    "url": "assets/js/45.c903fc2b.js",
    "revision": "5c4e3ed973f053508bd518300782478f"
  },
  {
    "url": "assets/js/46.b6dbba3d.js",
    "revision": "1cbb470bac548ecce28efa19444db480"
  },
  {
    "url": "assets/js/47.0b7cb4e4.js",
    "revision": "dc0cd3b367effff1697e6f6b3f8d8a21"
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
    "url": "assets/js/app.17bc0828.js",
    "revision": "80259e6e097260605eb8dd11bbe4b0ed"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "08508a482329f91e5c3af14b57019c2a"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "218c710a9d7951265aba8d7ed11d24fe"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "b56828b2df9ff82e5a59026ea1c81bbf"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "a5aada2c84568d85037106c58f5eeb97"
  },
  {
    "url": "categories/index.html",
    "revision": "c6346cae07987c40cc098b1bfe4c6f9d"
  },
  {
    "url": "categories/javaScript/index.html",
    "revision": "cb3207197e28f962ab8994b769828ebe"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "a0c9a5d1607439692dabb8f8668c1261"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "7a0ec76f688f4bc8c548c904a3570a54"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "7320e69c2bc31e5023e26ba213bba243"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "892ff0243987e30d2c2bfe80d5f086de"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "f00eb9a62c62be73c93548da3f3455a1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5cbf59b665f1cb863d2f0318a5a6c42b"
  },
  {
    "url": "categories/富文本/index.html",
    "revision": "a526f996e4c821802bfdf1ebe0d316c7"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "67a1b571aac825cd15af797f290df35c"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "2c7ce229a3dcb83a690440031a071fab"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "560aa5d81344152ead95926f053412e3"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "d5c0f2f6c6ce399b8c24be7a5fa9e843"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "827bee475b956b76c06689acc7f9ce1d"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "85069f893a1f54eb3c239f9ee9111f3b"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "b27b619eec221a8773a0999a5915a277"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "43e19fffb910254f5375d1eb7c2cfe14"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "fb92f0548e02589afc8e39ec901d1e5d"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "15f19c5457cced318abddfb4ae9362d1"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "9d006c1b2a9c6cb08dc6968220ca9f4e"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "937700d84587bae3442228eba5e6364e"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "032549d54ddbdf9a0524213433871c6a"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "6aa0113956a6c9ff51368257f45a0b91"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "cd7c3a891251660bd0a93fe2013e0b16"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "db135e4f9f024e776703e9cb218814be"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "c08d50bd7299d470ed8cfa96514b99b5"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "6dc002de117f879e69f9774d14a54751"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "b0848e0370056222c7544f2b74980f65"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "bb5642c1c0ba2931e754a5cef2c753d9"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "f32f39fd25ea3d4c825c07c5b620fae5"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "199e46096480083ab4c72fa5155db0b3"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "c5939fb5f30aa2bb25b324b948deaec2"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "8cc824e5e79cdea34700105a9ec826e6"
  },
  {
    "url": "pages/index.html",
    "revision": "da341c99c20e56e43db5b45a83081852"
  },
  {
    "url": "pages/Linux/Linux命令学习步骤.html",
    "revision": "5bbb12fddcd1e9e66e680c4c71bd5ff1"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "6cfca5abd8163524aadc8f083f41d579"
  },
  {
    "url": "pages/windows操作/bat批处理指令.html",
    "revision": "227294ebcf756468ae0bac9b9bf5c5d1"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "9cc066d1112ed0ae30ebe3c21805db73"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "1e7555047e905a6d286ea54113f2cb49"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "0165d0a305826f9422e11e4f180ff1d4"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "2d970bdb15f3b28faa02c22cb7a391ad"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "fa97f65bc37fc74aacf01d1cd6751476"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "ef9be5fc24e4e60d488d1f2e1126c747"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "865129325cba33f2076a281ad792929f"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "82a668c4a84f6d9c06dc4c487cfb9c9a"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "579a70abaa5ade10a2cb2dff940273d6"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "83bd715bb98a4f840162fa180d3ae22f"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "9286a93a84a810032e6d47b69d6470cd"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "bb21e4785e2394fbf4b57fe691cbafe4"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "b1bfcb8ae309e5e8dbd7e43e011b24c0"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "24fc0a073c0f7e700638a06b1543f5f5"
  },
  {
    "url": "tag/const/index.html",
    "revision": "c770e9a666a87462b65601fb81b064d4"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "f6f6b9084f4ebd9833020a79fa55aed4"
  },
  {
    "url": "tag/help/index.html",
    "revision": "62cf74540d40d2e0e1a2bd1297b9c4de"
  },
  {
    "url": "tag/index.html",
    "revision": "2b4739e063854f241d8a9990519583a1"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "a408dc615d230bfd5dd8a13005a80c55"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "b2e390466ddd264f9dc38c00ac234499"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "83bfda4843295374cf54c20879ab7877"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "83a05e0b97ce98035b5bb15232afe2e2"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "f7636a932dd03709832cff3f26080b3c"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "552f535d4ad12033ac6181de60f7881e"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "1bb480d8a8a260989308ed98a37391d8"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "61661666416f3177daf8fb3d2420971b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ea55367524834ef75cadef119cf0a2a1"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "e65fafb997a05d3a975b205c8483d63e"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "2d8568674962bd4abbdd9590e38e2035"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "616870d5aae3994230f8cecfaa3c9957"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "54013f8b0985922d0b23febcd8a7833b"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "3f05e1ccb686ce7c84e12fa4c2b270d8"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "bcd50deb094029dbc49a4958285aab72"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "1f5d84b5b1150d672928a758ff66fa9f"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "383c84fee7e2be5aa56709da48241327"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "c7cfad0503f881ee0e4f3e9bdd9af351"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "92b1446c60660dc49e25bd00c1dddfe0"
  },
  {
    "url": "tag/类/index.html",
    "revision": "475ba0d14ab70ba6b440fa214189b931"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "67d402476cf4da391c8ac57266d5d50c"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "f4581f42e9985536c1da3992af00a64e"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "c6f7abe2a19c8bc9aefe2b9101a103ab"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "ed1c31b9681bc36ef020de86b28336f8"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "07b9eeb7e390a37a1866c4dd99bbaf22"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "ae85dc56330bb001d22adb8700d94a3c"
  },
  {
    "url": "timeline/index.html",
    "revision": "05be1c52e9dc95435758d75a1eb6c487"
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
