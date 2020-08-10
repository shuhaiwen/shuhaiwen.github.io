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
    "revision": "2c74abcb42eb6ef3d20b3cfe2b32c2b0"
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
    "url": "assets/js/10.51f0270c.js",
    "revision": "c28bf471d315af04a91fb38f74b85e05"
  },
  {
    "url": "assets/js/11.0b2d6ede.js",
    "revision": "fe70be2db8ebf0fcc7a201e3bbd05116"
  },
  {
    "url": "assets/js/12.eff16258.js",
    "revision": "6b245726577429982a8b12d3b4d374fb"
  },
  {
    "url": "assets/js/13.00fc42a3.js",
    "revision": "89973c3f66c5c7ea8ad61a23dc12fba8"
  },
  {
    "url": "assets/js/14.a2d498fe.js",
    "revision": "15e6d64cb3d66b930048b791567f315c"
  },
  {
    "url": "assets/js/15.88f15e37.js",
    "revision": "12d05fdf35545f065e3cb9cf14b86c17"
  },
  {
    "url": "assets/js/16.09dfb89a.js",
    "revision": "48786051b355bc59c12d1f0e956f13f9"
  },
  {
    "url": "assets/js/17.f5076c94.js",
    "revision": "b4d0a0177d9142d83aa3a25487736ba6"
  },
  {
    "url": "assets/js/18.8e10a877.js",
    "revision": "238699a2d0d82dc3c9ffca117c8dfff7"
  },
  {
    "url": "assets/js/19.ea7bd157.js",
    "revision": "69f13acb3bcf759f3f87d672f0c27117"
  },
  {
    "url": "assets/js/20.90897ee0.js",
    "revision": "b77749409a45a0fd3a1b2aa15023a546"
  },
  {
    "url": "assets/js/21.9f1cfa5e.js",
    "revision": "69d90dd8bc09fe0af08d343d16714ca3"
  },
  {
    "url": "assets/js/22.5f92a123.js",
    "revision": "8242cfa0e415d5d6d4a0fa1246672143"
  },
  {
    "url": "assets/js/23.442b8e8e.js",
    "revision": "c667627ef08407af79fdc7634578c32c"
  },
  {
    "url": "assets/js/24.88c4879f.js",
    "revision": "3659a2f002e5fc31f0139cd9196e4716"
  },
  {
    "url": "assets/js/25.c9203ad1.js",
    "revision": "d9f126d35c185371ea062f1e5cfc406f"
  },
  {
    "url": "assets/js/26.76e0235a.js",
    "revision": "6df06b845712c458318c7e71f9d534e1"
  },
  {
    "url": "assets/js/27.74786992.js",
    "revision": "ef44c3f5fc00cac67c7f3b47c2e25f19"
  },
  {
    "url": "assets/js/28.2234370d.js",
    "revision": "fc31e89642482d99733a453621bd1209"
  },
  {
    "url": "assets/js/29.cd75b64c.js",
    "revision": "c665fd87241e5aa73b42e119ff9c7db0"
  },
  {
    "url": "assets/js/3.81990b42.js",
    "revision": "429c347c6c3c7357bf76d8d48bcdf195"
  },
  {
    "url": "assets/js/30.b70078d4.js",
    "revision": "9a733351fe3183c233c2c9e31faafcd8"
  },
  {
    "url": "assets/js/31.dedd995f.js",
    "revision": "d7274cce07eb199e36828aca3dc2f4d8"
  },
  {
    "url": "assets/js/32.1b2cfe6d.js",
    "revision": "a6d9b77fe88d75cd437e2f90f837c204"
  },
  {
    "url": "assets/js/33.6f9e4bec.js",
    "revision": "0cef2b238ea6c3a18328efc30bb50805"
  },
  {
    "url": "assets/js/34.7820ee57.js",
    "revision": "c8dedb9e67e4e1d403acb9c9218fb48b"
  },
  {
    "url": "assets/js/35.247b81b6.js",
    "revision": "627c290285f6dc366812ed785e69dc53"
  },
  {
    "url": "assets/js/36.132fb124.js",
    "revision": "d930c20818c834b25fa07a667b3ad142"
  },
  {
    "url": "assets/js/37.6134722b.js",
    "revision": "2f8c4eeed46b00f2a1aa582b35e1900f"
  },
  {
    "url": "assets/js/38.77e1f053.js",
    "revision": "bddda3fb6398aea24d5728905ea4bbc4"
  },
  {
    "url": "assets/js/39.d3803009.js",
    "revision": "07560ba4c42d1f0ad48943de86f36225"
  },
  {
    "url": "assets/js/4.e25113ea.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.06b30972.js",
    "revision": "d24dd33028c6e9d71ac5ce28490edf6c"
  },
  {
    "url": "assets/js/41.aeba00af.js",
    "revision": "6a55f23e5442731b846cb6aba8cfbddd"
  },
  {
    "url": "assets/js/42.46e6bd6e.js",
    "revision": "ec95e1d932fb3a06f6855fd1b8dee278"
  },
  {
    "url": "assets/js/43.17df6305.js",
    "revision": "cf8c762e496a3094d541adca5af8bd5a"
  },
  {
    "url": "assets/js/44.5089c8ca.js",
    "revision": "a54596fdd42f82aab32eb6476b756af2"
  },
  {
    "url": "assets/js/45.ccd11239.js",
    "revision": "715aa6ad572498fdd9c135a66b29e56b"
  },
  {
    "url": "assets/js/46.d0baab69.js",
    "revision": "e3ca571418f5afd8ed29c834f8bd81b9"
  },
  {
    "url": "assets/js/47.1b1035d1.js",
    "revision": "6ac74bdbdb3969f534fc81acddee2733"
  },
  {
    "url": "assets/js/48.63c79651.js",
    "revision": "3bbc2df10be1c166d09711d2fde25ee2"
  },
  {
    "url": "assets/js/49.3c76f843.js",
    "revision": "653ffcfc790b376f7fad3c1061486257"
  },
  {
    "url": "assets/js/5.8eb8291d.js",
    "revision": "b7998e1b7c57fae69947d218585d1cae"
  },
  {
    "url": "assets/js/50.e6d98b90.js",
    "revision": "2e3cd997e4d728a3f48d5ccf93b92f16"
  },
  {
    "url": "assets/js/51.55952dbe.js",
    "revision": "358bc8aed4fe3c52d0d8765b41dbd9da"
  },
  {
    "url": "assets/js/52.76a4b0c1.js",
    "revision": "305eb70d79738cb44b4924e6069e4675"
  },
  {
    "url": "assets/js/53.df33667f.js",
    "revision": "994a5a116f38c2123eb2dcc7251bea95"
  },
  {
    "url": "assets/js/54.23ce94e7.js",
    "revision": "68cba8f8275faa6e37c9ef46bbe71c79"
  },
  {
    "url": "assets/js/55.46c98805.js",
    "revision": "b84ce514addac10ac89100774a54e0ff"
  },
  {
    "url": "assets/js/56.42e2ecb6.js",
    "revision": "ff1f69050e1eadb7c92ed1f7ebf79c22"
  },
  {
    "url": "assets/js/57.8303b81f.js",
    "revision": "7e2a9661d22abd579fc5aec8251ac466"
  },
  {
    "url": "assets/js/58.e16013f5.js",
    "revision": "8fb162b1f41dc90d763b7ee81030dc96"
  },
  {
    "url": "assets/js/59.63a92c28.js",
    "revision": "b59ecc100e27adf6d6bb1ed06243a394"
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
    "url": "assets/js/app.67948475.js",
    "revision": "8c84718c0ccbcb9e118aa949e48c39a9"
  },
  {
    "url": "c++/c++11/declvar.html",
    "revision": "c8a7cb293877ec21bc983f93c4a6a850"
  },
  {
    "url": "c++/c++11/ignore.html",
    "revision": "ff2b35ab2ade5fd6c417c6dfa470828c"
  },
  {
    "url": "c++/c++11/initializer_list.html",
    "revision": "cfe0f1b818d74da4fba3990385ec955d"
  },
  {
    "url": "c++/c++11/tie.html",
    "revision": "c64ab5ee5ab1ef52feb596f26d736148"
  },
  {
    "url": "c++/关键字/关键字.html",
    "revision": "f0dbec89114e07396796fd974677f9df"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "8266e2cc3f10f51a97ba2d8e1d3b5d2f"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "2623c63a77d82f326e5ab394ea911cfe"
  },
  {
    "url": "categories/C++11/index.html",
    "revision": "ed08383a9c8f1ed3936817a0fdea2855"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "70f41283f302abf7ed5d793eba3be7ea"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "7d175a59db702f05a0ee11520d35e31b"
  },
  {
    "url": "categories/index.html",
    "revision": "098c806a8812a12717adfba4fe9db188"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "94b45bbe626a9545576eb545778d0e5a"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "b44c0dbe0b9c129a29236e39b54135bb"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "dccc436825c53b1aa545e1750e63a0f7"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "68215c8cf72b60e113518254e6cc6049"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "6431696b48a3b4fc6065b9eb207c7879"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "4b32764031537384584c79b6c618d436"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "6953eaf36b3feb88211827bd9e4ecc10"
  },
  {
    "url": "categories/WebSite/index.html",
    "revision": "6c3f14c8cd843aff951584f660a69f8c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "67152976e0894dcc37a32f470f6c59a5"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "56026777ce529a190cdc6884d368b611"
  },
  {
    "url": "categories/编辑器/index.html",
    "revision": "3c18397cb0805239570f634aa8d3c2a4"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "842c81d6079426a67310e570593fd284"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "7041daf77dc3db8ae85f7957a6e1512e"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "7a41101890cdec5ee692c0d8d3cd2c4f"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "2c98c04e866c6af199ce31f85720772a"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "0dec74bffbb3d5e66812510a074a2502"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "283b60d8f0f4596fed97278f812dff07"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "c2b48b9be2c2ba32142bd9db77ed9c9f"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "f6176a6b2b4f59e970e2408c6c7ed8aa"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "3fe2a3cb54d960da013ca2c9de671aa9"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "46197d1c4f715c5cb461229c80edc37c"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "58ac965fd09b9337dd522cf087da972b"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "012b63a479462519a56486474b16c695"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "31be9785c73f9eb921c0a1ee2f4d31a9"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "9333d2cc693f3ede8a8b75f5316ed673"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "2e846e92b093484537379c0e853bd353"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "12cdfec5997e1cc0420b4177f6a77055"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "a6ed07857a14d6696a5ce5b509e65dfe"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "461ccf1edd2b93e488ee979192440873"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "fd40f8072834c1882ec0665390e92867"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "1670d1bd7706c73c5ce94a935a3380bd"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "6686c689b05428a09eb511004a89c7f6"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "e5ad020a122535ef8d34adcfc82e9dbf"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "a2b8d00bab50f41d50ba17f9939c7553"
  },
  {
    "url": "pages/index.html",
    "revision": "b64c5b5cbb467760d22723664e4cdfc3"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "2dc489d3224aa21d62dc126dd74abcfa"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "3119aca795a530f1d80434ba6ac08d8f"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "8aa6cf2e92235a9455eedfc536c9052b"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "5d50855331ad841064f6035a7cbc5496"
  },
  {
    "url": "pages/前端/JavaScript 总结.html",
    "revision": "479266357d17e082a253ca534d704c62"
  },
  {
    "url": "pages/前端/TypeScript 总结.html",
    "revision": "323dd868b4c938ae178f179c87763449"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "437e91cb8d1f6d34c4519d874f8b9448"
  },
  {
    "url": "pages/前端/vuex.html",
    "revision": "39dfeb2b6a41992d5b6d1dcd81c0ecb4"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "91e7a12e9d06167ede9b8e379b359dfc"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "7bf5ae10620ba861b1a5cf923cbc661a"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "8a2bb66b0a53c0efc378b9c9f20b2d09"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "6b7c0e99688d00b32f0fa054904bbcbb"
  },
  {
    "url": "pages/系统/bat批处理指令.html",
    "revision": "cb975026a3797254aa0847af3b2ad804"
  },
  {
    "url": "pages/系统/Linux命令学习步骤.html",
    "revision": "a2bd1bef5a0e076ebbd60d0eeaca31c1"
  },
  {
    "url": "pages/编辑器/VS 实用快捷键.html",
    "revision": "baabe22a06a1edd57f526c113b241326"
  },
  {
    "url": "pages/编辑器/Vscode 实用操作.html",
    "revision": "89684b5e045fe71da7c88e3ed0139df9"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "a3c7f009f0e7b108e83476a3a28426f2"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "04ec0b0f0cc195dbcba33c8801fb8101"
  },
  {
    "url": "pages/通用/社区网站.html",
    "revision": "9d6badb6c40bab71bec5b69cc5cd74f9"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "06aa5a774d9ba6175b29adc16674305c"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "5b41d46c975e52ecc30789f9b13559c0"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "10a2b2d9c9e2eab2556f5feddb889de2"
  },
  {
    "url": "tag/C++关键字/index.html",
    "revision": "eeb6a9ed3e5aa788621237b99c0ed564"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "3577d734ed06758ff613782999aa6d88"
  },
  {
    "url": "tag/const/index.html",
    "revision": "079c2b4938c3fdc91d94648bad5fb88d"
  },
  {
    "url": "tag/declvar/index.html",
    "revision": "4ba3a29df6b9a58689d19f3695f65c3b"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "58714f3f4b2f1c81d8b7e6d6799936e3"
  },
  {
    "url": "tag/help/index.html",
    "revision": "e516f63769ced0a12b2e8ca730de3fe1"
  },
  {
    "url": "tag/ignore/index.html",
    "revision": "d1f17b1910d551f1196e7e22370c446c"
  },
  {
    "url": "tag/index.html",
    "revision": "3ee6194901278642be972e6ed4bc82cf"
  },
  {
    "url": "tag/initializer_list/index.html",
    "revision": "cd5bdccd63776c110cdc51adcf36322e"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6208746769b610ec4333e78300afde85"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "bf8427af97efa7dae426a3e6705aa90e"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "6ae2e4ae5d6297d1b9b0b9edf0d9715b"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "9f036247fb0cf3e38660a5c0994b7d6a"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "18adf5fa9a714838575d92134371aeec"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "d021dfe8555109065e06eecd9b8ff5bb"
  },
  {
    "url": "tag/tie/index.html",
    "revision": "7b632ca23d680bcfe5f87d40e44d54bd"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "befff981e0e5b1d7640e9e4e3149924e"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "10cf6fcb12eb00d270556ec2f706c239"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "e160f0031c3728a6d28b379e69b2ba88"
  },
  {
    "url": "tag/Vscode/index.html",
    "revision": "3fa2b53867a23e20eb951f1797829784"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "13661a29ad16486f8e8cf9bcbcc9f54d"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "7a262114c5c94c7bf18b20c247a8d1cb"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "0dafb1b20f7a9273176aac187bec005b"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "6aa77d0df8147f5bb2be65f4470dc07d"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "db05ba094712218080b0cb670ef77d62"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "56c48ace157da2233eec237b6df8136e"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "6086dc28f92f588bd74dee3165405eb8"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "a87e7b18049f90ef3ab084ba1e04a5a7"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "dc76dd805265abb2539e7b0de9b7a576"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "8977413104a79d36bd57c5b8e63b2820"
  },
  {
    "url": "tag/快捷键/index.html",
    "revision": "913062c03aec4bac4c4a0683a6dfc467"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "4a48b4850c492506d836412221f1af3b"
  },
  {
    "url": "tag/社区网站/index.html",
    "revision": "a517491ebe9fad00f3204f9ce8396c7d"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "58f4d7325315178d36e8926dafa761da"
  },
  {
    "url": "tag/类/index.html",
    "revision": "1823c736bb3d75946b26e38d0f09ec71"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "f58ff207a070bb3218b084347adca9c7"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "b214f884013dcb7cfef06b30813f6f20"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "aca5c34f7a6fc8c0478fc4406718cb9c"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "9a17860b7cdb287bc5162916eee81858"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "b7911ddc2499c7c2efa12977e499a496"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "f5de18040e0aaebcbf82ddb6db14b8f6"
  },
  {
    "url": "timeline/index.html",
    "revision": "d0b2d14c1bf95a34a22eb4daaea1bc9e"
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
