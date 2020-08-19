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
    "revision": "be3ef928a1ca1310590c6d03b859b4a5"
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
    "url": "assets/js/12.d4199f5f.js",
    "revision": "dba162b4de3a34b91298da3cd9fa7453"
  },
  {
    "url": "assets/js/13.576a17c3.js",
    "revision": "3359eaad6c6665f053be08f1c89c1888"
  },
  {
    "url": "assets/js/14.c8a419a0.js",
    "revision": "247a42293bfef62602ed043ae679aac8"
  },
  {
    "url": "assets/js/15.27848589.js",
    "revision": "07715550044e95ef2e557b65764e42cf"
  },
  {
    "url": "assets/js/16.ce5c853e.js",
    "revision": "870d7cf23fff83219989ca025b9ea379"
  },
  {
    "url": "assets/js/17.575f1b57.js",
    "revision": "eacf660313653b12ec694f5b820329a3"
  },
  {
    "url": "assets/js/18.8e10a877.js",
    "revision": "238699a2d0d82dc3c9ffca117c8dfff7"
  },
  {
    "url": "assets/js/19.3be54f69.js",
    "revision": "59c5f20c737a98fa3d1077d40eab4430"
  },
  {
    "url": "assets/js/20.90897ee0.js",
    "revision": "b77749409a45a0fd3a1b2aa15023a546"
  },
  {
    "url": "assets/js/21.e82ee6ac.js",
    "revision": "ccacce0b396557e87c93e437afbf6c92"
  },
  {
    "url": "assets/js/22.1e049436.js",
    "revision": "b22c33ca36ae124a7a83422d0ad6aa08"
  },
  {
    "url": "assets/js/23.e1aa2ad0.js",
    "revision": "25252b45d83d6ea80278b054becfb9c3"
  },
  {
    "url": "assets/js/24.88c4879f.js",
    "revision": "3659a2f002e5fc31f0139cd9196e4716"
  },
  {
    "url": "assets/js/25.3213ec2d.js",
    "revision": "62484d49c11aaf86a4435db4b03da103"
  },
  {
    "url": "assets/js/26.193c2586.js",
    "revision": "6cd20eb250f9b5c91f4d22fe144c9a22"
  },
  {
    "url": "assets/js/27.75e60611.js",
    "revision": "cd58ec848a2acc3764ae88a08f876c12"
  },
  {
    "url": "assets/js/28.bfb22c31.js",
    "revision": "8c68e149a5f77fd2f4114575fa5c8334"
  },
  {
    "url": "assets/js/29.72b50925.js",
    "revision": "4cf0849be264f6367761e5335a08c08a"
  },
  {
    "url": "assets/js/3.81990b42.js",
    "revision": "429c347c6c3c7357bf76d8d48bcdf195"
  },
  {
    "url": "assets/js/30.7870c2ef.js",
    "revision": "7a8a909413fcf4b5aed0caa7ea3ea1ff"
  },
  {
    "url": "assets/js/31.e175c6b7.js",
    "revision": "5e2264e076913a83cf97abc490647a6f"
  },
  {
    "url": "assets/js/32.bc2ed8da.js",
    "revision": "c0f85c4a04ab7939e4fed6f1b2d26a43"
  },
  {
    "url": "assets/js/33.89ca44d0.js",
    "revision": "912f09fa6d8527d8bf4841364c357131"
  },
  {
    "url": "assets/js/34.77e287bf.js",
    "revision": "1ae19ef73f25a6a8075ff6e6f5da5f64"
  },
  {
    "url": "assets/js/35.6e1043bb.js",
    "revision": "b74c2a6afd39b5ef7697e6fdaffb1e7d"
  },
  {
    "url": "assets/js/36.9a78b404.js",
    "revision": "19ef0a3dd79750de8f383b9f3a752d8f"
  },
  {
    "url": "assets/js/37.67d99f4a.js",
    "revision": "aa2a423459b8dd847ab30131c6651139"
  },
  {
    "url": "assets/js/38.0cf04d2d.js",
    "revision": "785d055ff74a3482ab7790a62961b0d0"
  },
  {
    "url": "assets/js/39.d416491b.js",
    "revision": "793e9fea587bdc0b9704710eff92c084"
  },
  {
    "url": "assets/js/4.e25113ea.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.df23df54.js",
    "revision": "c3a7b72c918dec695fd0ecab1c4fd5c0"
  },
  {
    "url": "assets/js/41.2cbf473f.js",
    "revision": "8d19adb946d5a8e31ce5fddadb19ecba"
  },
  {
    "url": "assets/js/42.08a550fc.js",
    "revision": "ead668f51b1957157fcc8ae1974e5037"
  },
  {
    "url": "assets/js/43.2a6444c8.js",
    "revision": "87d72566f4511b39eec250f2ebc54bd5"
  },
  {
    "url": "assets/js/44.8792bce2.js",
    "revision": "69e0bb2ab600e791f0d36eda52037ad5"
  },
  {
    "url": "assets/js/45.1b59a9bb.js",
    "revision": "93b7e026fd7e17cd9198c52a6f0436ac"
  },
  {
    "url": "assets/js/46.da2be049.js",
    "revision": "3f0bb2b32a2e4c9723f2feae4b011b32"
  },
  {
    "url": "assets/js/47.fca85556.js",
    "revision": "dda48be74795299ebeabeeb01aa02100"
  },
  {
    "url": "assets/js/48.02c40292.js",
    "revision": "633dbd83c51dacf624486c9558b1d2be"
  },
  {
    "url": "assets/js/49.5a3f3623.js",
    "revision": "6aba4a9997c1146aa4dcb580c74a00d2"
  },
  {
    "url": "assets/js/5.8eb8291d.js",
    "revision": "b7998e1b7c57fae69947d218585d1cae"
  },
  {
    "url": "assets/js/50.0853f1d6.js",
    "revision": "26b3822a1ed4280f6ddde8b1b10b0ed1"
  },
  {
    "url": "assets/js/51.3659db95.js",
    "revision": "2e3f557d4f359017b39066171f1a64e2"
  },
  {
    "url": "assets/js/52.abac1c14.js",
    "revision": "e7a9d457c553754c81dd28aeb1cbfb8b"
  },
  {
    "url": "assets/js/53.2a552a6a.js",
    "revision": "8d6017c9c97f9f9906e237500e2c8e2b"
  },
  {
    "url": "assets/js/54.e695c1ba.js",
    "revision": "094615e811419e1c9b2e4c0c7e8722e1"
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
    "url": "assets/js/57.2f28bd7d.js",
    "revision": "a8c9cc171b0065835784ea3b4869c282"
  },
  {
    "url": "assets/js/58.bdc10ef9.js",
    "revision": "3b8abab1e1b4701ea77389096aa57709"
  },
  {
    "url": "assets/js/59.661e62a2.js",
    "revision": "2d707dfa59ec1bf00fd412b748c3605f"
  },
  {
    "url": "assets/js/6.e458e168.js",
    "revision": "ba5127f1362d9cd4d6c31b934ce2da53"
  },
  {
    "url": "assets/js/60.c6e647e2.js",
    "revision": "5e77d5638e51180ac92fad21e78efe94"
  },
  {
    "url": "assets/js/61.67ec3624.js",
    "revision": "8f90a929dc0bbf979a69ddc444cc5293"
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
    "url": "assets/js/app.b7254d44.js",
    "revision": "fdbdbaa8376fe497f02f6ed2eecb4ced"
  },
  {
    "url": "c++/c++11/declvar.html",
    "revision": "689c80f71a54c02b4cbfa72564c33f13"
  },
  {
    "url": "c++/c++11/ignore.html",
    "revision": "8ca7a2f84d6e910c8824e57265c54c5c"
  },
  {
    "url": "c++/c++11/initializer_list.html",
    "revision": "10157e5e2e02b193fe39de5e80533d9a"
  },
  {
    "url": "c++/c++11/tie.html",
    "revision": "a8e84f7be60f8f87a8fa2b8811c72cc3"
  },
  {
    "url": "c++/关键字/关键字.html",
    "revision": "8d810b25371948c638b49467e7c8b139"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "819b377c942ddf94a2bf169861cd622b"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "ec5202836eab22136d6ab1cceabd8cd7"
  },
  {
    "url": "categories/C++11/index.html",
    "revision": "ed80bdf51bf70ea5a37b6436e7051f6e"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "4a49f22396583b7e4fa790ea925c17bc"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "51c2ac484b6c8f2eb94428af18a08a7d"
  },
  {
    "url": "categories/index.html",
    "revision": "db4660ae33c28b7df4bdd9341313ecff"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "2f035de5d1ba2371402d818b9a9fe7da"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "e92fe721a65001c0427bcc9fe45bce8d"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "62d32de10c00fb61f810ac9112edf922"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "418270c9a168f745b8faacc791676ba4"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "585621e25f5d1dbaa3a414c31f824d6b"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "0f48d2400ce8d8664bceeb932d68b352"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "dd6252f09a44b2765946155046bf3c1c"
  },
  {
    "url": "categories/WebSite/index.html",
    "revision": "2332b6127db8e4dbd8ed3513e9652f24"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "39359a4b989c2f6556aca7f830902205"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "10d7b190f83a84cdc41b6dbdee30cc3c"
  },
  {
    "url": "categories/编辑器/index.html",
    "revision": "ffda4f78463bbda3646d60b590230adc"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "57da9acd93948d8247e3ce34608d3fee"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "53699b3560ba01cbb6a08ba70711ea0b"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "3b61b07b9fa935b849f401cce31b9ba5"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "95565d04e74db9168aef31edd5408591"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "832c034fd65c209b5ab6fa622f3a1567"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "a2f3da6d9dd7da1a5b118fe4f0a23449"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "3fbf517c2b43bf5fb72f58c893424793"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "de0879d2eb23a9e101ee3900f701920c"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "3121633e4e561005a495a6b9d2d89e4a"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "55252540cafdfbee7242e7f3a4242bbe"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "1cf8ddf0a7922a3690f3e0045ac77831"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "ed5d949bb872dcb3bff4202684ffc73d"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "73d8b6130742b71281cd33c4794d45fd"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "c1a99157fa721e1f3e2337298e99977d"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "9f2cb7c37f0086ac9e006fd669b5d043"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "ac6cebf620dbaf502a2ee93d4b0a8943"
  },
  {
    "url": "pages/C++/模板.html",
    "revision": "befe7cf809bc21be6f9d50686f55adfa"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "2d4c1cc468e9feea32d5a99e6f17f421"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "604563e2b9863a4bbccf52c15b02f6f4"
  },
  {
    "url": "pages/C++/类设计陷阱.html",
    "revision": "ff6cc708946e328988f22cd413e9e40b"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "3bc81f7be43b38994674125f29c79b6a"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "fc54e0d55e4d0ed85adb28fde49b5321"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "2b3b722ed3903cd299fe36f83d6bac25"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "47a08c0b18989c2452c856c20658dd1b"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "d942bf4016ae547e2a498c79a0e8372d"
  },
  {
    "url": "pages/index.html",
    "revision": "4ac7f9d5ea101c3b336577bea87803b9"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "897b357889d06989be202e9e400b927c"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "9d41f1a4cb6b732e31f7122e5ef5e4ab"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "43ff19a5fc28e58874032e3e60552cdc"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "fa7c2f0dc8b6591801b72fd46341245d"
  },
  {
    "url": "pages/前端/JavaScript 总结.html",
    "revision": "fbdf857d20550fa24656d83b9e56c9bf"
  },
  {
    "url": "pages/前端/TypeScript 总结.html",
    "revision": "866cbc1d41bff025ae57261eebf33a6a"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "823e1c8788a5d093b0588c923f76f17e"
  },
  {
    "url": "pages/前端/vuex.html",
    "revision": "7e0c6352e9d95b1b8954b4332a56ef56"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "ba104c26c0c8961a9ca9e6ef57ac14f3"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "23af5d3e959b9f3f9506ad86cc49eeaf"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "2be2e8ad05018a7ce90fe7e240220e53"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "58eeff7315eabb4feb91ce4df58c3692"
  },
  {
    "url": "pages/系统/bat批处理指令.html",
    "revision": "dd4826b8a02293b797534b24ec49dccf"
  },
  {
    "url": "pages/系统/Linux命令学习步骤.html",
    "revision": "cff54817c425095c357c3788415a66f7"
  },
  {
    "url": "pages/编辑器/VS 实用快捷键.html",
    "revision": "fd1c0075042a5d8747d89e0ce9617755"
  },
  {
    "url": "pages/编辑器/Vscode 实用操作.html",
    "revision": "5f3b120bbec69ab7e4fa8e577644461f"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "88639c2b76dde5c7b854a9b3e6ba3799"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "05baef772ef58228139ec5b3eaf1119e"
  },
  {
    "url": "pages/通用/浮点数二进制表示.html",
    "revision": "1e6effd0cfebe8ee4abc7624d16a19c6"
  },
  {
    "url": "pages/通用/社区网站.html",
    "revision": "605da0d714edb37401472807ede9db9b"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "6328cef9156e5576901c9793b9c64293"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "6d50a343464fcc4c431651b27f64f83e"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "a4fe7a6b176cdbe025c110e690a81ca8"
  },
  {
    "url": "tag/C++关键字/index.html",
    "revision": "8265299c3eca9f4dd1efe591f143952a"
  },
  {
    "url": "tag/Class/index.html",
    "revision": "8719de1c66756e89fa0427f0cefad75a"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "66950e906904428d9e9f1422693068bf"
  },
  {
    "url": "tag/const/index.html",
    "revision": "079505ec2eeb7292d4a7934c53742bcc"
  },
  {
    "url": "tag/declvar/index.html",
    "revision": "cbb91dffb92ff0d19f00fc7d25540198"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "6c2bd244ac74536ebb11db8c16eb5e31"
  },
  {
    "url": "tag/help/index.html",
    "revision": "1940833c0405fd5e5ff99e5a490a063e"
  },
  {
    "url": "tag/ignore/index.html",
    "revision": "cd9eb2fe764f0f7bdb501f42177324f1"
  },
  {
    "url": "tag/index.html",
    "revision": "46d04694d13d0b5bbc241a5a24d416fb"
  },
  {
    "url": "tag/initializer_list/index.html",
    "revision": "4d12a441a20d83991b35459d556a6236"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "2387bfd8fcdf37d8d8fd61a6c09ad527"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "3fe1a0852506ca5c1e05b95f47867fc5"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "a151d06f52d8a6c447f25928765bc677"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "a896d1345c9222a27451342261f15f17"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "aed6eeea698881d29083f21d45df525d"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "be881dd27fba28d34beb2f288d785c2a"
  },
  {
    "url": "tag/tie/index.html",
    "revision": "4d2a2f47fa5d2adac9cc4bf34d11c540"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "65fcc0c049e7a2c85bc0b9b8dce44cf6"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "6f0e1bfb98db9c5d210f7dc667659b7b"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "d3f22152ff6938d5a40c9b0de85d78f8"
  },
  {
    "url": "tag/Vscode/index.html",
    "revision": "dfc05289d1527b177b88cfd811f504d6"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "bc242a4ba3fbb9efc7c54d4b141345f5"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "4e73e73a6157113d86060d65a1447640"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "f21831eed9aac3025b1c61ff67159717"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "73718216691efae36730066b254e3eb8"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "2bd818016a371e2f02f4d08cea6c1a62"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "bba3b7c93c1cb73c2cc45c73810d220f"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "decc4dd2346760147e4de3d9ab8a71d6"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "921d4c6160d984de937038392c7ce9d2"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "50cb1c2edb13c878cbfd824007ed42cf"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "8ae64ad50f3955bde1423cd517f858d5"
  },
  {
    "url": "tag/快捷键/index.html",
    "revision": "98061b88c34a38948759930b9ccc68d8"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "dbf21f1bf8ae35cb887ff91a52eeaa0b"
  },
  {
    "url": "tag/模板/index.html",
    "revision": "be04d7d60bb4b5609bdef9781ed29d9b"
  },
  {
    "url": "tag/浮点数/index.html",
    "revision": "51cc9c5ed03d1338553efbabb492f210"
  },
  {
    "url": "tag/社区网站/index.html",
    "revision": "372d7ea677adef10a5d9987c16e6bd3c"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "8f3f24460483eafc13062eb6a974ee94"
  },
  {
    "url": "tag/类/index.html",
    "revision": "a3b2768ab6124a309aadd86f36537bd4"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "043c0ddcc2b21f0acad50b32338ddc31"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "981cae5275bff8eb22ac8eb78166d3df"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "83dc2553ceb0e851b71a19df7c143d58"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "08d4ae95726f563612353a54ef17508f"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "655c2ae6b5f32a8835c4e221594fe5eb"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "668cdb57ba14096dbcaec55bc0f8f614"
  },
  {
    "url": "timeline/index.html",
    "revision": "be6f4e0babde1c08c500adcaa3a0729b"
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
