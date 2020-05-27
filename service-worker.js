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
    "url": "404.html",
    "revision": "565253cbdb631782170710c2ddbda924"
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
    "url": "assets/js/10.2d96b3ee.js",
    "revision": "d0c2f3139bf437fe13a9edfb7a81b9c1"
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
    "url": "assets/js/13.7725e7c8.js",
    "revision": "2481526e2dd1263892b79ecb9501b71a"
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
    "url": "assets/js/18.4dc786a4.js",
    "revision": "6363e87fe9f95cf7eb64417a82516bee"
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
    "url": "assets/js/21.90971835.js",
    "revision": "5d041d0031df10b80a0e83b15c2bbe23"
  },
  {
    "url": "assets/js/22.6aef2c0d.js",
    "revision": "5f63443ea92111a45f3ce28cb86177f4"
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
    "url": "assets/js/28.befc8838.js",
    "revision": "cb13dfbe0ef593ff8f4f6a00a40597f3"
  },
  {
    "url": "assets/js/29.93d286d3.js",
    "revision": "bf1597b89cf90278797b270675de2e56"
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
    "url": "assets/js/31.2888c9fb.js",
    "revision": "03ff08d2325e3596b6c150d78deb644f"
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
    "url": "assets/js/39.f7cf8aa1.js",
    "revision": "f081961074257e1ea044e3b93160bbc4"
  },
  {
    "url": "assets/js/4.d497704b.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.541c7fd4.js",
    "revision": "2b8a02b2482eddd9ee3ff4f396618c34"
  },
  {
    "url": "assets/js/41.906f21c2.js",
    "revision": "62de7444ba61830ed37758e4d3d569f1"
  },
  {
    "url": "assets/js/42.753eeb28.js",
    "revision": "81cb194b997793e54b57cf525ca40cb7"
  },
  {
    "url": "assets/js/43.333c862f.js",
    "revision": "c2d384495aece457b89b3d30b54ca5e9"
  },
  {
    "url": "assets/js/44.965cdd01.js",
    "revision": "b4b4be8236952d4f648b8ce4c42675e9"
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
    "url": "assets/js/app.feefd324.js",
    "revision": "e4c129f647f734ac46da5b1cab0997ef"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "6016200fa34d5f10b09a003487af8b4d"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "d849637f70a5970e995f4f77362a0ae6"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "0fa660ceecc99f17800e8ec273eb3fc9"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "f66a16e9466b1d79e6bfbecd866eb0dc"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "9b1052adb53c7de25caa84e3d92b2d78"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "860b2433db52cdc4056d6577b2a56894"
  },
  {
    "url": "categories/index.html",
    "revision": "bcd495f4c611c937d33ef0fdb712457f"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "a9667c8d10ab9d191df93845900e2a0b"
  },
  {
    "url": "categories/Markdown/index.html",
    "revision": "24651c36f1294dd8feb8f294103225d4"
  },
  {
    "url": "categories/Npm/index.html",
    "revision": "c13c153a203a5271a186e6932cd0370b"
  },
  {
    "url": "categories/Xml/index.html",
    "revision": "4da3b3d09c5a1d62c45d57ef7f249b85"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "c826bfa0a06b41049c76b266bea17dfa"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "38eb0f817f95957b42331bebdb0fbff1"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "76bf8a9d20438a99c6233ef556976d3a"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "3273cf836a2ce6b9ff096f6df1045262"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "9045c883060552885282965b8eee368f"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "cdecf1d053d8f421ae13d17eac29fa69"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "966808de782156e1ad72dfe75e8a64c7"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "7afa59b16fc8186daa8b56097e0a2e59"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "da132639de08493fe45ea135357b6888"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "82edb1d4123b9e4b5614edc5c7e7926f"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "9fcfc684aef23660923571db00311b3c"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "8de60a5600e51d3e76071b7de3ff0d6d"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "c0cbe2cd9ba389ad14fb262725caf905"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "df7129a17231017567ad00fde3efa52e"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "ef11a4f3e1bc9d452525ec5eca56e179"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "07aa34f8deab118ff3f71dd24154b775"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "c5cbc1d4b9214907024fa45b717f971e"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "db94b4809be3e162a60c708d98f84e35"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "a4c76945548272fbaf4094bb346a451b"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "87e2aece504605eddabc5006782409c4"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "72e8e26512be00096ab0e288c2a9bc24"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "ad1bfd698092d5f79749b659ac2a8b9e"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "c5cd03ade287b4330a3176f16f906a36"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "f04857794c3ca691d693c4c0e2d3c022"
  },
  {
    "url": "pages/index.html",
    "revision": "b118f7569339eda18e6779ed29525fb0"
  },
  {
    "url": "pages/Linux/Linux命令学习步骤.html",
    "revision": "ecbf358757878acb2e9e92edeb973361"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "c8957ddf604f8c5ea231c293c0e7ea68"
  },
  {
    "url": "pages/NPM/npm命令.html",
    "revision": "66c7003ecee6cefb3e41125ffa980e10"
  },
  {
    "url": "pages/Vs错误处理/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "8db55b080daba89cd947711250bee452"
  },
  {
    "url": "pages/windows操作/bat批处理指令.html",
    "revision": "595fe71753e0936cd1ccea0bcc63504d"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "657b9173e9aebb8b5a0239fd14c2d64a"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "443e61132d6a0fdc7827a0aef8faa5fd"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "b88eb419ee80f0b0a975bcaea1918902"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "3ef8b478c15839f47c563c1b6dde1dc0"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "7a065920861cfd5c3b2b75918b3ac784"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "bce6ec79e3f311e3b24e5879b528871b"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "3af2d87becfd701cdd4a708b9a2b51e5"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "3bdd31da2fa7072360d1bcf9a2257ef1"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "f7797c0a72e45ca3aa2f95b02fc4992d"
  },
  {
    "url": "tag/类/index.html",
    "revision": "6c39a5b4e58d850b0de917bdbdd5a1b2"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "3fe6a8eede9268b3b35004c275a7c125"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "c0dd7ab28e69b82cbc5e4bc6532df490"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "4d126cc0c6f56942d1b7424d2807ae9c"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "dd24be16db5e45802150e6b628714cde"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "d15ecfd784f57dc24a94c3188b553793"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "bdad1a17365e6022b2c90f7b1add48c4"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "a77475e33112ef7821d9537ca9944d83"
  },
  {
    "url": "tag/bat/index.html",
    "revision": "f9f03f29d7cc0ac12b5debcb9ebe856e"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "4b4d8618fe8f41eef718d500781a0e40"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "55f88e03a55316c3e6563e4d28d048a6"
  },
  {
    "url": "tag/cmd/index.html",
    "revision": "e8786799f70f77ae5f33424e0f599074"
  },
  {
    "url": "tag/const/index.html",
    "revision": "6e2594946d84140bf85c89ccf64e3404"
  },
  {
    "url": "tag/git/index.html",
    "revision": "023a06d0752c1ad7e87c4d3386c57b63"
  },
  {
    "url": "tag/help/index.html",
    "revision": "1d3983384901d4b59b0b1abd68df8b07"
  },
  {
    "url": "tag/index.html",
    "revision": "9c84229e194df27d45252d815587d3b7"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "cf49924127d857e897355f71720e3cea"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "43ed05ba49180add0a72380bfd68a991"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "f3d30d4ce7576bff4555140567b323f5"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "2b7bd84f7790b09a166fb83a289b49a8"
  },
  {
    "url": "tag/XML/index.html",
    "revision": "a583b5498a211f31f5cafec400494c8f"
  },
  {
    "url": "timeline/index.html",
    "revision": "1539e39ae67b45a64c460547d9b4b536"
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
