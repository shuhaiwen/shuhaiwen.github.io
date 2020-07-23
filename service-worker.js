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
    "revision": "7f56a9502baf22dc96593d86f2cb02bb"
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
    "url": "assets/js/10.0580d2fd.js",
    "revision": "6460e2e34a980a8590be098ab3138505"
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
    "url": "assets/js/24.aa8c2f92.js",
    "revision": "9c8d80b00195f1936cc570b0800ad5a9"
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
    "url": "assets/js/27.fea839a2.js",
    "revision": "8fc3647e24df714186549b8b67a09708"
  },
  {
    "url": "assets/js/28.ab27f725.js",
    "revision": "aaccf82e636de67479f16266e9df8761"
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
    "url": "assets/js/30.a21bf592.js",
    "revision": "7eab1e83ec45feacbca765888b3c7c57"
  },
  {
    "url": "assets/js/31.4dca7316.js",
    "revision": "050bb66c9301691a2e5173c576d80d73"
  },
  {
    "url": "assets/js/32.12de523c.js",
    "revision": "910046a99b7b2aaf0a91ccaeb731ae99"
  },
  {
    "url": "assets/js/33.787cf23b.js",
    "revision": "1e4292625821624f292d42fbced8f6ce"
  },
  {
    "url": "assets/js/34.8cd8478e.js",
    "revision": "77548af39ef60744b922d869c26cdc32"
  },
  {
    "url": "assets/js/35.ef4cc16c.js",
    "revision": "5f922b34f54a6643b0626c170ab695ba"
  },
  {
    "url": "assets/js/36.cf7bd8d2.js",
    "revision": "4198f1a6268567774ecf8ae1772e14e7"
  },
  {
    "url": "assets/js/37.a4d5df66.js",
    "revision": "5b8baa36014eb15e0e22d799d3ea3678"
  },
  {
    "url": "assets/js/38.ba3afa25.js",
    "revision": "90008b0d41fce71a9b55852aab434a16"
  },
  {
    "url": "assets/js/39.4c6f0bba.js",
    "revision": "5eec7289d9c2b2a11c90fc9c407927a6"
  },
  {
    "url": "assets/js/4.e25113ea.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.5a77bcd8.js",
    "revision": "59b76ce3169d65853dbfede80233d4ae"
  },
  {
    "url": "assets/js/41.1c676610.js",
    "revision": "60f29a995af5115663e48c63587567e6"
  },
  {
    "url": "assets/js/42.3455ca2d.js",
    "revision": "94266f7ef43b99ad8d30c8c9a5cb50a0"
  },
  {
    "url": "assets/js/43.a2e1a656.js",
    "revision": "09dcfda4223c9b9a46b1bf0260eeaaa3"
  },
  {
    "url": "assets/js/44.76883708.js",
    "revision": "027b4a10432ef7c5e889c876319d974b"
  },
  {
    "url": "assets/js/45.0519b1f0.js",
    "revision": "d3d5687829ea60cb4d238e95f3cc064d"
  },
  {
    "url": "assets/js/46.4ca42034.js",
    "revision": "9b6b08a6b1143e71e8ce6f07478c4d69"
  },
  {
    "url": "assets/js/47.2db77cd9.js",
    "revision": "d847020d69c2e72ecd551d89b83a07fd"
  },
  {
    "url": "assets/js/48.5b79d00c.js",
    "revision": "3118d39194daa961f249d86d873fd6ec"
  },
  {
    "url": "assets/js/49.a7d822f7.js",
    "revision": "706a4a9d96d133653d9a020e9bf98302"
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
    "url": "assets/js/51.3a198645.js",
    "revision": "f303a4bd083e6286bafc13f40f2b6bcb"
  },
  {
    "url": "assets/js/52.3955c5a8.js",
    "revision": "59a77a33b1b1a7a641b512922ef7f409"
  },
  {
    "url": "assets/js/53.60d502aa.js",
    "revision": "2f4e596545acc5568d32a5d55e3d5c10"
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
    "url": "assets/js/app.2cfc195e.js",
    "revision": "20804fec763d152bb0c10d830dc1f24e"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "ccec56f02912af9a9d1b0d1de51808bb"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "90be991f1a0c258c4ea47211879702e7"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "5bfaaa4b3b3b68807f478e8c22c247d0"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "ec98eeda689d07ff940381aafc61f8c0"
  },
  {
    "url": "categories/index.html",
    "revision": "6fcc333f57c7792ac6986cafd0b498b6"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8596f264c673491c465205f5b2c2d80c"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "81d85bfa83947bcccd531176a1d58893"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "8231ee73d7f5a6668cd9600fff17e587"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "65bc830db39375d711eae596ec0b84d1"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "c459b7e8302857bce30da4f41629e7f1"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "d4eed1c3b2026f90dd34f81437bf64c4"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "1f97a108d73f95225d167ee5c7ce295a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "18a2618512577e65ed03b57c8295f41d"
  },
  {
    "url": "categories/富文本/index.html",
    "revision": "1d7992b0e3cc23fb6d6fbd80d7a6f44d"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "ae43be7cb342f50ae7c968a34cb549b6"
  },
  {
    "url": "categories/编辑器/index.html",
    "revision": "32b2d887e44e08fd22d1569a41c27b11"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "2f38d89f6c5a0f1118e63567b1f5025a"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "122021c6bc012d1825352d10492464cc"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "f4edb88f6a355a5b55681a1517de0852"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "d4d6b1aa47b53cd56d3f43f5855610aa"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "d4b493dae7270460eb5a92cd17faa0b6"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "07b92f3ff3d7a5c59ad707a0fbc8592b"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "ba79730820df0b495e984b77adb7a59c"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "86f86d398ac875c428c5f70f47dd1dbe"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "866324d74988aa6bbcb50b439a612e15"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "2882a820380d50bdca3b8f79e7ecffc4"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "599c7f4c18d00d7475c0360763f64fb6"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "13cf565de68bd61c4aa5263a20bb1e64"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "bba11784ae543a01395cc1c2045db123"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "08080270ec292c453e9eb4f4407f8a3d"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "ab4996901369c5ce1a008a2980a93a2a"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "8425ac7e382ee14a7802a1141118f8c8"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "af193ab724ca0aacddca0acc9e73e652"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "404bb8fea09d8046d79ae37f38076420"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "1a508f6735a93943eb31aad8c9077a67"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "444b9a2ab64302ca09ce5813f4884313"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "ab468be10d070a984af972e2ff41f254"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "06b4d77b50cbfe470659be8649a62741"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "7094aaae11d6bc6b214ab6c0fd661332"
  },
  {
    "url": "pages/index.html",
    "revision": "33c711c82e9df889c6b515fdc17230d8"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "86d2c0b03aa21aea1e79333bd763b33e"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "6289792d477f68c6ab04e8a72110a46a"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "3e0381097f9588e0290c5147996fadf5"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "1d0fbb3b3d590745e413664ba9befed0"
  },
  {
    "url": "pages/前端/JavaScript 总结.html",
    "revision": "0bb2664fec809be8270fdfea8f560837"
  },
  {
    "url": "pages/前端/TypeScript 总结.html",
    "revision": "7d29962ea6fcb9ba4b6b9cfd9cd58046"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "415a4ecc97d21ef2449036343cab296d"
  },
  {
    "url": "pages/前端/vuex.html",
    "revision": "f630cb533545baefc667df0169b66351"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "814d36c7fbe9af730f0e3fbc73197b86"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "54a225ca4d3690933704c6a1ddd33a91"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "c274754a232386d4ce035be828bd3c73"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "b4c9d41f2496320b280d6fff84d90fb0"
  },
  {
    "url": "pages/系统/bat批处理指令.html",
    "revision": "a8c2f69630a3e53e58d33535ccbb7540"
  },
  {
    "url": "pages/系统/Linux命令学习步骤.html",
    "revision": "2102277412bf68d0c8827cdc166c9316"
  },
  {
    "url": "pages/编辑器/VS 实用快捷键.html",
    "revision": "389e6c5596f32b8efd1d8769d93dd551"
  },
  {
    "url": "pages/编辑器/Vscode 实用操作.html",
    "revision": "df88d96e96d6115c8dd542339ab0e466"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "602a93c6101979de50163002aae04cc0"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "214472f7b5e1a9ac793acd1d80cabf42"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "6297a60fe7cb9481a5fcd1e7b2b98c35"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "7b7cd87573949818349484cc435362ef"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "82ce3eaa87b840fbce7c8a8c7ad42a9e"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "02af9bad77fcc78fc730da043ee421ff"
  },
  {
    "url": "tag/const/index.html",
    "revision": "0adbb1ac49397378053be227ba7ea958"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "3c37bf034705005cf99d12950900e8a6"
  },
  {
    "url": "tag/help/index.html",
    "revision": "296f179a6a50d790bf2dbb544c81e7d7"
  },
  {
    "url": "tag/index.html",
    "revision": "0ebe409352d2b08d294485cfe9ac81d6"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "1c1ca113cf1b26b84db492b02edcb071"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "4a2fade2a44236da6a8a0c775c794d94"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "a32f159c1b0d808906c0d2deb1402e11"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "186600d1354ac04efdfe6746a9dc2219"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "4a8498d51294305834a9bd26944f19af"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "abeef25b40556aa00e7e300dce0ec596"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "9e66f76582bc8863ffda0ef2b9b6158a"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "fdfee669eb77fd5da930342c451600fa"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "796b08aefd7a0dfe235389b0b4bad199"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "1e59f350037aa7a554e9e49997c5e1aa"
  },
  {
    "url": "tag/Vscode/index.html",
    "revision": "3cf2e780ca1c2ffebe54b8a0996e730a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "27ef13a80be28b8d3c4e4c86f91b77fa"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "13b264f2adbff4f8c8cf868c1a63333d"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "312931806cc9932f8347601949a77bc8"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "0599e787124b795afce3c6d7cf31e72a"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "89cc23b22a7360c3c77223e6e9cbf635"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "62948fd12ac89c7eb6f667308c6eaf30"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "d9b4bf6dd1a2c800edb74fa2ed0c2daa"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "2d0432bd22c8a789bbdf3a07b9c4a868"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "a5ac023980d9f91888eb070f4e835bd3"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "50f75b3de2d9a0669d804ce16d1d8ae4"
  },
  {
    "url": "tag/快捷键/index.html",
    "revision": "2e2e4d95933dff8ae91a53944f7ef8ff"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "f69b0a7e1e3864616753f111c15c82e4"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "6fdcde6e2472551947c8943f6f8a48af"
  },
  {
    "url": "tag/类/index.html",
    "revision": "120e7cd3edf8e8ed782bc779598682c3"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "31da31167fb17fd6ec94f9806af6f369"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "9f57deaf5d182aa4154cb36bfab659a6"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "59b0cac70f2c9ea0139515b3e3801d97"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "bfb084338914161959863d40734364b4"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "107b466c09bb51b49723a98fa7049b57"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "ec4a4e876ccc077b92133255b75fd5c4"
  },
  {
    "url": "timeline/index.html",
    "revision": "b3d25f142716f67e18137d530d230151"
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
