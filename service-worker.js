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
    "revision": "dac4d702823c6a30278e68061dd6494c"
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
    "url": "assets/js/10.dde7e52d.js",
    "revision": "87f8b8ac5f7d82a3ae34aad1005a33ba"
  },
  {
    "url": "assets/js/11.c82fe0c4.js",
    "revision": "2fcd7c8a8a8468235b01b1c3163ee1f7"
  },
  {
    "url": "assets/js/12.ff91587a.js",
    "revision": "3149b2149415870560ec298aeb177ef1"
  },
  {
    "url": "assets/js/13.f93effcc.js",
    "revision": "4fbe4f7f0b1f3ef33b5ede9a137e750e"
  },
  {
    "url": "assets/js/14.85006ddb.js",
    "revision": "7cd008af201a3f3a7efe1f7a124f7bbf"
  },
  {
    "url": "assets/js/15.bc5ee58d.js",
    "revision": "ca65fea445e891b92b49098b20d84fbd"
  },
  {
    "url": "assets/js/16.f6072e25.js",
    "revision": "02bcbf5a1b893dc574d478331cf6c995"
  },
  {
    "url": "assets/js/17.2aca29f7.js",
    "revision": "3d9dba530dc3172c8e2378db4f5d4433"
  },
  {
    "url": "assets/js/18.d3893afe.js",
    "revision": "2b5911c8cc683516f3dee9223e38558f"
  },
  {
    "url": "assets/js/19.6aaf58ee.js",
    "revision": "5288ccf997583955913110660b2c1eb3"
  },
  {
    "url": "assets/js/20.94110641.js",
    "revision": "d7707f37ada924c207726c34cf014ac8"
  },
  {
    "url": "assets/js/21.b40deb11.js",
    "revision": "0ea6448116fc34debd02b22f988bf85f"
  },
  {
    "url": "assets/js/22.25775464.js",
    "revision": "ff780e8e2589134677f4f44bc1edfa7b"
  },
  {
    "url": "assets/js/23.911c80c3.js",
    "revision": "f5a9b6db1a05daed505619b7264f689a"
  },
  {
    "url": "assets/js/24.47839fa9.js",
    "revision": "1b50c9559074bf903b450b7ab036c48a"
  },
  {
    "url": "assets/js/25.a4aa3e0b.js",
    "revision": "634434bba5f4ab42f80b7d60af833629"
  },
  {
    "url": "assets/js/26.7ef56139.js",
    "revision": "866feb078e7aefe19cf663bc4c3e5955"
  },
  {
    "url": "assets/js/27.450a0a9d.js",
    "revision": "7b761bef60103973ea64263d2b98b2ab"
  },
  {
    "url": "assets/js/28.f699f56c.js",
    "revision": "de6ef1536c1ede9b854bde414d8df155"
  },
  {
    "url": "assets/js/29.37d73a18.js",
    "revision": "fcd2ca76ff212b1ae08144409e541a5b"
  },
  {
    "url": "assets/js/3.81990b42.js",
    "revision": "429c347c6c3c7357bf76d8d48bcdf195"
  },
  {
    "url": "assets/js/30.034c798c.js",
    "revision": "c57f9aa11fedc900b17cc156db16bb75"
  },
  {
    "url": "assets/js/31.2f40fffa.js",
    "revision": "32dd6da281074a4ae9990e6782f8d451"
  },
  {
    "url": "assets/js/32.033841cf.js",
    "revision": "d8af62ed19b9952b0800fd7cdd54c283"
  },
  {
    "url": "assets/js/33.787cf23b.js",
    "revision": "1e4292625821624f292d42fbced8f6ce"
  },
  {
    "url": "assets/js/34.8c74c792.js",
    "revision": "30224be7fd237af677c7bd9732d2a421"
  },
  {
    "url": "assets/js/35.5be3ea35.js",
    "revision": "cfb6bfbb555bcc83f71043518b708489"
  },
  {
    "url": "assets/js/36.6b983107.js",
    "revision": "be222e270c32dd57d1a10746ac887494"
  },
  {
    "url": "assets/js/37.cc08e56f.js",
    "revision": "67aaba73a16d1b62c39ce4f22f4339a3"
  },
  {
    "url": "assets/js/38.8f7b3564.js",
    "revision": "0ac59e2f42d7998d3d40aff3ddb0e5c9"
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
    "url": "assets/js/40.94d75ad3.js",
    "revision": "018d3035dc3a978231dbf99e6c57b491"
  },
  {
    "url": "assets/js/41.6ac41f7e.js",
    "revision": "db813220249361a251a2449788f3d15b"
  },
  {
    "url": "assets/js/42.36e03b64.js",
    "revision": "e7db64812d2abbf40aefa7aa5525c16d"
  },
  {
    "url": "assets/js/43.69cd2b45.js",
    "revision": "ddcdf08fa601cb3a1a043fa183d913c9"
  },
  {
    "url": "assets/js/44.756be7eb.js",
    "revision": "e5a2e23de9a05e7ba324df98e65772f4"
  },
  {
    "url": "assets/js/45.f9c69ac4.js",
    "revision": "3031b33ca6be823048d4be6d64c65aae"
  },
  {
    "url": "assets/js/46.1071e4d1.js",
    "revision": "28691356f1c83bb4a98be329aae082ab"
  },
  {
    "url": "assets/js/47.aa4aa549.js",
    "revision": "a205a96eca478994fa27241776637069"
  },
  {
    "url": "assets/js/48.41e9f072.js",
    "revision": "5e4aeffc24cc4f1a8b2e0ae152a8e8cb"
  },
  {
    "url": "assets/js/49.71fadc72.js",
    "revision": "9ac182e3687005f62a19678fb841652e"
  },
  {
    "url": "assets/js/5.8eb8291d.js",
    "revision": "b7998e1b7c57fae69947d218585d1cae"
  },
  {
    "url": "assets/js/50.7bb9db36.js",
    "revision": "0e352ade0207bb341b2dec62e7a08c1e"
  },
  {
    "url": "assets/js/51.6ae89751.js",
    "revision": "350865a5205bc48fa1ad307faa261cbe"
  },
  {
    "url": "assets/js/52.32afb07f.js",
    "revision": "862d46d7d078413c63c94259764d368b"
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
    "url": "assets/js/app.419d4ab3.js",
    "revision": "2d804b4f53d940089019a7db1ba1009e"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "e77f6ac81bff731be544d92febc07f56"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "c0b4d74bcf9406fb9a79d9856aa12e73"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "ae5294ebc3b904f148553384b632201a"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "d745961112c0d3b42a4bfafa6cb99900"
  },
  {
    "url": "categories/index.html",
    "revision": "a764b2b7ace8b4892c5513969963486e"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8c2f9e576f274fed79c72c96278b1c6b"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "1e67dfd1e341582f446473ac7b2c1540"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "7e21c3f8df494eb348af9c67e3bf0963"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "c2091d17db33874a4f7e807a55e65e3e"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "29c8b1d89055a0ca872936508dac044a"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "6b2107864c490d0086153d294193182c"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "c119128c4fb317d30a73e669e18181bd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4d66d378a9b36d89d632c179bf48fbb4"
  },
  {
    "url": "categories/富文本/index.html",
    "revision": "27ea80b02557d35d654d517e9e2210d7"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "b5e3d13ed16848bdef91fd4061d27cdb"
  },
  {
    "url": "categories/编辑器/index.html",
    "revision": "0912ff06610af76884832c3fb014e0f0"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "c0171079d8c17f94370fd865a8f3dc72"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "d83a1ce74b63fa702b6f9e16a825ba01"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "13a283de30dab267f106287264e0fc74"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "ac442ecb7bb00e1a045b970a9ba8be7e"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "234246ce5e3458694c748622422db9b4"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "6f4339061958a4570a9fcc091aa2bf09"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "775d8c7929e8b7bf4554c55ba71b2785"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "eb0504b393e9af8634e4b96cd536270f"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "c2bc127976629e7c4494b050a5383a5a"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "5d43cc8843147d5a04424614123cb314"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "aac028875e1f83002a46a3e53a8a03de"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "9e77ac74d5c9500fba7675aa96c15613"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "fa62f6b174b2d9788259ac890c72853b"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "b010c91b997d30694b980acb4a2db15e"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "95ee2a2a03db2b3de14fd9040345db2d"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "cc2a91ed662296cb48f2d4498b06068f"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "63f2fb64cffeb277cf8c59a11e936d5e"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "00e0b56063152765f7a3fee4191e30a8"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "d2432b4edc0c970dfba34cdecb7d0ed4"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "5fb29d1606b836e015190ef214359478"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "1d948c2e74522249db88b6ced663784c"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "ca009ef1b5b39df744be8a02d5239d90"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "3bc37725fd5c62bce8a350eb39456905"
  },
  {
    "url": "pages/index.html",
    "revision": "b695c11889d0dc038adc3332264ffbe0"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "d9a30c81a6ac0f468f7677d31c83410e"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "84de15a462e6f1c3e638c36fcb88280e"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "f3933d2af6d2cd15afe4db8be8a1df02"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "02f7e2837df106926c04d37ebf27fa6f"
  },
  {
    "url": "pages/前端/JavaScript 总结.html",
    "revision": "715a15c78b11e8e49605c3ef9568bd89"
  },
  {
    "url": "pages/前端/TypeScript 总结.html",
    "revision": "1cc5931495d2b594a265821da7e50c6a"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "636187f9c6fc6067772ddf3faed79d32"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "3b24cde37eb0d757dc12603d5cb4d80f"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "d0bd89c3f9d3b27b325f1bb691c36e23"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "ab70e6a850037a87bc4b562616cce715"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "d1524acf5617e8d7df5c274350c07a9d"
  },
  {
    "url": "pages/系统/bat批处理指令.html",
    "revision": "dfb6b39e7d12c75c5ab432fa395bd23a"
  },
  {
    "url": "pages/系统/Linux命令学习步骤.html",
    "revision": "6e80e868bb0f88cc565367052d52d444"
  },
  {
    "url": "pages/编辑器/VS 实用快捷键.html",
    "revision": "bb6fc62658815634776c7d03374b971b"
  },
  {
    "url": "pages/编辑器/Vscode 实用操作.html",
    "revision": "519392c4ef2252a8aaacabc304062352"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "ed81b55b0a4144998e8ce684621595ed"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "42d3a8de9a0942bb675b3b13ba5e380f"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "7f62f89fea90db5ce7ecff47931225e1"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "728944293c9072eee2033853cccd46e9"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "89ea48542dc778c1efbf3979dfcdf66c"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "13b5e5522a4834bd484ca44ef98271da"
  },
  {
    "url": "tag/const/index.html",
    "revision": "f900d5f455d6b311b8abfec7d65a2e8c"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "9856faae4d5d77f2c1b649daa6ed4083"
  },
  {
    "url": "tag/help/index.html",
    "revision": "42440cc3d4b5726fd370dde22976fa4b"
  },
  {
    "url": "tag/index.html",
    "revision": "5d79ae820f5a6d0b7913f062da2436fb"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "5ef9eac12df50a8e9f9bdc27e017311e"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "bff24a67605cadb882148e90a938c03d"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "49e655ba75010007f31098233a26e4c2"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "6cc539048aaaf00bf24482df45334de3"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "76e1ff1c1de1854a15d4615ce3c9d242"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "70f3499428022184746e7fd64587726e"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "5085eaa63660f3e3a180d556b912259d"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "9d2fb4160951e6c591fba6a33c783678"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "826488b7ee86cc8b521c4ef69658ab1e"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "50c036af99fe6e333fd09fe47966e425"
  },
  {
    "url": "tag/Vscode/index.html",
    "revision": "41ac1e084ff0e3ce837099fcd42eac0f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "45bc64dae3d80cd769fd9f1a9c62a249"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "90bf611bf1c846e8c638d93b341ea10d"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "47682d799acf821b3eda20d9aed4ef0b"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "a192e229266085eb3720d4bf7a6eaf08"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "c23f445f97a82c762159ed6c49eb0fb0"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "fe8467fc59e2dccfc67907189e85a2e5"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "5fce0690a17b07aa2dca22ef65f28d34"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "64783edd63b9d25f898ea3b0c42bf715"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "af95873d16aa4374d6cbc508d0685e6c"
  },
  {
    "url": "tag/快捷键/index.html",
    "revision": "0c120837683b29a8a402bbfd34d9b65a"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "0c0a9c4f512ce4d2f14abdbb5f1b3783"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "5a389ee63f70289bca52b690bb107c28"
  },
  {
    "url": "tag/类/index.html",
    "revision": "01722ee748631973fdaa7cfcd546644f"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "cfe42acdd7a859239301b1c9ba30ed00"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "050f04e2fc28a82d5aadce2690122561"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "02235a5e14b46f6d365582c2b6c3b4d3"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "6865ae232f6575f94ad539af742ecf97"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "07f2b5e7183361434fdeb9e10b83e838"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "450914afdb664b4293e338acc69822f4"
  },
  {
    "url": "timeline/index.html",
    "revision": "5049f5d6ecf35669b8c7b73626dd1d46"
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
