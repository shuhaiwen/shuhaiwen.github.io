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
    "revision": "5e390ae71cad93449e1bab5467923819"
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
    "url": "assets/js/10.604decb9.js",
    "revision": "50fb9d3249086af5cd0402afd463a1c6"
  },
  {
    "url": "assets/js/11.cb47558d.js",
    "revision": "f42bc349c7353663258dc7ec032023bd"
  },
  {
    "url": "assets/js/12.71ab8c28.js",
    "revision": "bf5f8ece3af519f79a3a753af63a64ab"
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
    "url": "assets/js/17.d757e2ac.js",
    "revision": "0cc6e926768f6a44030a27705037e4ae"
  },
  {
    "url": "assets/js/18.e815fb7e.js",
    "revision": "128d26fabe0120763e85e44e4ec9e17e"
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
    "url": "assets/js/21.48706f99.js",
    "revision": "8e50b369a9cc25dffd508dc58d02c72a"
  },
  {
    "url": "assets/js/22.8ed79474.js",
    "revision": "8efba8f3658d53f86a8e159fde8d0ffb"
  },
  {
    "url": "assets/js/23.fcc29ba5.js",
    "revision": "b519939a4ed4604bc974c20cb7f95473"
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
    "url": "assets/js/28.caba8764.js",
    "revision": "cd8d0b21b16a39e724be8227e59c0df6"
  },
  {
    "url": "assets/js/29.653dcc1b.js",
    "revision": "879947a2836d35e646b6ef6a7d42eb01"
  },
  {
    "url": "assets/js/3.81990b42.js",
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
    "url": "assets/js/38.0ddcc6a5.js",
    "revision": "12301522a4eb030f1c4a2220bd369b27"
  },
  {
    "url": "assets/js/39.de0612a9.js",
    "revision": "b39b5adf1f27e1ff00ff747f52d94b22"
  },
  {
    "url": "assets/js/4.e25113ea.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.3d9d440c.js",
    "revision": "9985043a206999c3d95aac6680b4f9d9"
  },
  {
    "url": "assets/js/41.4583ddbc.js",
    "revision": "2d01e40bb507912d46aa5ff33978d3a6"
  },
  {
    "url": "assets/js/42.3455ca2d.js",
    "revision": "94266f7ef43b99ad8d30c8c9a5cb50a0"
  },
  {
    "url": "assets/js/43.3eeeb6b1.js",
    "revision": "0534bd68eafd6e5cb32a139a167e1bff"
  },
  {
    "url": "assets/js/44.c9e0777f.js",
    "revision": "780e1da4d1beb98f78767633a2da57c0"
  },
  {
    "url": "assets/js/45.d64a354d.js",
    "revision": "3b4b941faab5638ca53cbbbe8832f8af"
  },
  {
    "url": "assets/js/46.cffb33ec.js",
    "revision": "a41d32fffd16e6e4c60f807fcc56d13a"
  },
  {
    "url": "assets/js/47.b6d039c2.js",
    "revision": "7868605906277d4fe813efadb331fc31"
  },
  {
    "url": "assets/js/48.a7f7d6b4.js",
    "revision": "4de050a027cbd2800118d9accbb444c6"
  },
  {
    "url": "assets/js/49.598439a9.js",
    "revision": "786f765c7108875802ac61809e42176c"
  },
  {
    "url": "assets/js/5.8eb8291d.js",
    "revision": "b7998e1b7c57fae69947d218585d1cae"
  },
  {
    "url": "assets/js/50.8090693d.js",
    "revision": "249d2e1e27c8233725f0482738628051"
  },
  {
    "url": "assets/js/51.b9073b23.js",
    "revision": "20e727c1fa4232550ba77762d4501f28"
  },
  {
    "url": "assets/js/52.91a215d8.js",
    "revision": "ef72f496868c77d7587cc3713ea7e056"
  },
  {
    "url": "assets/js/53.c77696c3.js",
    "revision": "6a2426ff296728bf485b7a0bddbc0371"
  },
  {
    "url": "assets/js/54.9bfa0384.js",
    "revision": "37e25f15438b6724eececbaa7d1f0861"
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
    "url": "assets/js/app.53e4b28d.js",
    "revision": "0c91d8784a7f8d7b91b6c8d73201f5fc"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "13677fe39572840d2d4aca971fd1f068"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "2478569f6af0600e7692d9e1e4efe428"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "008d80bcd8bf4278e3076e41ec93d2e7"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "18886d518a8f855b154b624d31f2bb85"
  },
  {
    "url": "categories/index.html",
    "revision": "b5906b9ac00353333c0dac78e14eecf8"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "fc1b470f02d175d6ee73791d4316aec9"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "0ed85056b008523afbfdcc1b238f3010"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "48b9e01b8471c59ef0e01f788581910b"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "195358cb2dc09cd24ce52b0ce36d2605"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "29ea857e99f360ea96b0a25716df1268"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "25964737c54fd7d0e37807abfe5007c2"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "8eed85ea1517ea03bd31e80f1f06fe4e"
  },
  {
    "url": "categories/WebSite/index.html",
    "revision": "e14d4f44bb7c8af392f1fbdc94b0972a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "69851ca7874e09af2aaabfe48d5cba8f"
  },
  {
    "url": "categories/富文本/index.html",
    "revision": "e95b11a9210c9dc8bf989b74fadeaed2"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "60f321d375aacf86b2750c0e2fd3f9e0"
  },
  {
    "url": "categories/编辑器/index.html",
    "revision": "11d42b7569145fc66929d2cd5dbdebe0"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "8cd285f752fe086ae4dd3311ff22b3f1"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "f381790201870a67a4083a38599a32d2"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "d7babb55dac6fb15eb879772ad25b344"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "6ee8e8d0b6429de4d03aad16f1614ed6"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "713bc844092b6786b9dc027a7b40f9d7"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "bace863aee082a82e6ad9ee7664485fe"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "a97b1a1d01da598f08de175137078377"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "37dd74290d8bb72730cd58c338cdb06b"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "6644d877c00a639814adbcfabbd723f2"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "3257282133c9803f8ab94343ddf5b581"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "ea4fbaee39c330e48706c6abb24dacef"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "3a5faa84da16b16d9ecc99a0e2f77afb"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "934d643a6f80601b803725b31eddfad7"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "a1ded19bd9e51ca5680cfe02ad702ba8"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "08daa429b926fae89dea56acaece55cf"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "72e407b897cfeb9facad3f9474cd764c"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "8d41e3b14ddfb4bccec530ea6c2937d1"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "6b4e71d85c8a80657678125af109cd16"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "e86b5d49b31985e433c22bb7340660a6"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "eb139cc9e50b22f6fa0c04192dfe117e"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "d09bdfca765fad6636a8aafd274abb15"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "29e552b9f78e385d95c809b175e50dc0"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "71d927e0896f3e4dccefdc0df2963ea5"
  },
  {
    "url": "pages/index.html",
    "revision": "1111c7727ff7e52301c93aa918374d88"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "5d355780bccd6b4f8a0d22ff80f9af4a"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "884d276b0a2072b28c473d17089d9e4f"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "7b64ec1e5771d80ccb03a0f9aa23ca60"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "a82b1e81def7095ffe09582506a42227"
  },
  {
    "url": "pages/前端/JavaScript 总结.html",
    "revision": "51e515a6b540f19e4d48fe5a70a2a5f5"
  },
  {
    "url": "pages/前端/TypeScript 总结.html",
    "revision": "ba6c320412aca764bf4557f461eda631"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "4f246e286b9ef85dc9ee23fdbdac11fa"
  },
  {
    "url": "pages/前端/vuex.html",
    "revision": "cf9ebe31645e6f2e0a19ea03b4ba42f6"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "408d38eecefce5c8aec6c32d3dbdafcb"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "12b29a15a255dc732de690b3aff29f0c"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "70348bbb7fa6b5b11d7c4c309c2b2ebb"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "ab19f0b21017521a347f7e0efeafc793"
  },
  {
    "url": "pages/系统/bat批处理指令.html",
    "revision": "2e75729e8978121be104f918eff7bfb6"
  },
  {
    "url": "pages/系统/Linux命令学习步骤.html",
    "revision": "d2e0c027c7ac872a2ecd319422598ef9"
  },
  {
    "url": "pages/编辑器/VS 实用快捷键.html",
    "revision": "c49598a066ea80968606808e022aee32"
  },
  {
    "url": "pages/编辑器/Vscode 实用操作.html",
    "revision": "6304fa22ad3fff22be22afb63df93e65"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "0e471bc021a163ed5279c73754b4b32a"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "8c3be5ccac4482ccd72d704eeb3a328d"
  },
  {
    "url": "pages/通用/社区网站.html",
    "revision": "7040bf2d6e703ed5ed8c77dc89a50979"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "0c73e617584ddc6e17075a00a16d28f8"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "2cc8181445c40fffb0abfdbedade3f09"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "eaead52341f609b9ac38a703b68ec4d3"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "84321bfa0c741c2774435a669da78318"
  },
  {
    "url": "tag/const/index.html",
    "revision": "c1e614600a4fd29f90927d2dfdde1055"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "49380d03dea3f1f5f31ead0faad3a7c6"
  },
  {
    "url": "tag/help/index.html",
    "revision": "46125dc70ad2189fed17fda56f75ddfe"
  },
  {
    "url": "tag/index.html",
    "revision": "3e0a1541c38f293e4da874a9f2c8b75d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "c668f7f2496211f86938cfc125f85fce"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "79a5ee3ee0e195b54e03664e544ad14e"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "2a6ecca2fc37e1a65c1b08077bbe4c10"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "cc98944e3b3c58d8513340effe97bae7"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "648a4f01a3c8608996cb97a8df3afb87"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "f3831b8c2acf1c273298de8127fb281b"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "eb46708cb337ccea5b43096e197fb138"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "d231cf4a117b07bdbd68ca89a308b5e5"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "dfb283431acbcfd12459d11e79946b80"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "c001c1cc8140246f7fe7ff2be8ea5b49"
  },
  {
    "url": "tag/Vscode/index.html",
    "revision": "a3f5b04687a359333aab50d99bc3ae07"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "f602e5cbf14bea250b76a517860fc834"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "94dc46842add1ea0b6d3ee74ede260dc"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "71c59e4eb605f95d9a63d34b5d1b694e"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "bbddc2c508f43ab5d08dc1d972fd7152"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "ffc1ff2d402683c317add6f31c4f313a"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "d733876163d328277e8683f3dda7bc92"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "96e4a255d738639dcbf5c3d7d5de0d93"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "e473349a4dcd264dac660bdfe5f54fb7"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "227e42aab78378d53567700ffb33dca0"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "2e9689def3a2e51f612cf77119bdbba9"
  },
  {
    "url": "tag/快捷键/index.html",
    "revision": "27e5a35a244dc52a908105089b46a699"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "093cb953d2edcdd49d0b7ced1f68c402"
  },
  {
    "url": "tag/社区网站/index.html",
    "revision": "76b956acc466bfbed992e76048fde1b9"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "64e04e3b7e7ad975e68b0a11e00b7c47"
  },
  {
    "url": "tag/类/index.html",
    "revision": "2e75a6ff14aa84267008523e72dca093"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "c54d5d75697155c7b29b24e47d7a1af2"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "a4b823c485fd3c15d3f2e5e676a1ea86"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "c9de700fdc253002382d10f0d2709b26"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "8da15055ecea228baf661288a46aca66"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "76cd0bad087d93acf415a69067b8664c"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "99a0c00794cf262e8b340d5dfb7db128"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d32836fe3a360ac129c4951a8e826d2"
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
