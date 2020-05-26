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
    "revision": "57e6c1ba1666ecf3b1d55fe239cb6d89"
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
    "url": "assets/js/10.bc5423e1.js",
    "revision": "92b41095e56cd6ac4bf8def4809366ac"
  },
  {
    "url": "assets/js/11.c82fe0c4.js",
    "revision": "2fcd7c8a8a8468235b01b1c3163ee1f7"
  },
  {
    "url": "assets/js/12.56255045.js",
    "revision": "ec61088fc3fa1e51b4c39c2bb31758a1"
  },
  {
    "url": "assets/js/13.fd14fad5.js",
    "revision": "fbc666bc3f75f820ed1fe29fd9eda150"
  },
  {
    "url": "assets/js/14.ba02d69f.js",
    "revision": "f842d10ecdb5b26262935cdd340259b3"
  },
  {
    "url": "assets/js/15.68403477.js",
    "revision": "0ced324bd40fbf1e99215b0da7942dba"
  },
  {
    "url": "assets/js/16.74e33967.js",
    "revision": "56098e5f55cc64b11c059d68ac60c0b7"
  },
  {
    "url": "assets/js/17.ff42dbfc.js",
    "revision": "21929c0952e5d9edcfd633fc19cbe93d"
  },
  {
    "url": "assets/js/18.a899f549.js",
    "revision": "d7c07524cf1b9189888fa11db475a89f"
  },
  {
    "url": "assets/js/19.0a0d0cca.js",
    "revision": "cb83f6b27298f66ee02f5b14db9ecece"
  },
  {
    "url": "assets/js/20.57a1cf0f.js",
    "revision": "9fa17350f733cb5563c251058960d1a7"
  },
  {
    "url": "assets/js/21.32d6dd1c.js",
    "revision": "2b45d7fbfbcad678fb0aed11066671c1"
  },
  {
    "url": "assets/js/22.488cc805.js",
    "revision": "912fe384824ceb6b73091f6801fad10a"
  },
  {
    "url": "assets/js/23.d64a3108.js",
    "revision": "0f25e25e42edbfe1c2314c80bef4a9b5"
  },
  {
    "url": "assets/js/24.1ffa5388.js",
    "revision": "6bc2aff64da298d8ba1ecdd2c07251ae"
  },
  {
    "url": "assets/js/25.c7700e93.js",
    "revision": "16cb3892a29372f35a1619683b64062d"
  },
  {
    "url": "assets/js/26.167a2ff0.js",
    "revision": "dff8170c534e3ea60ebcf1f82950d2b6"
  },
  {
    "url": "assets/js/27.2c26a4d1.js",
    "revision": "52f677aefd03072e17ac638a4f045119"
  },
  {
    "url": "assets/js/28.294dc492.js",
    "revision": "1e5c260f05229bc19f1d983cf4278404"
  },
  {
    "url": "assets/js/29.4958ef84.js",
    "revision": "baa0d9b2503a8a46cbf97b6ea2bf14aa"
  },
  {
    "url": "assets/js/3.ca0c9fbc.js",
    "revision": "429c347c6c3c7357bf76d8d48bcdf195"
  },
  {
    "url": "assets/js/30.d04984fb.js",
    "revision": "f30409f655b6baedbfc013a99033d9e1"
  },
  {
    "url": "assets/js/31.d02aecd6.js",
    "revision": "e87ef63d9a25a42bbfe7c1dd0a2f69da"
  },
  {
    "url": "assets/js/4.d497704b.js",
    "revision": "559368a66ec2f612c43431b146735a92"
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
    "url": "assets/js/9.cf48b2a9.js",
    "revision": "2a4b353e89910964beae658f61e97563"
  },
  {
    "url": "assets/js/app.f13069da.js",
    "revision": "e6dee7187c1f6c6a7349c8744b1aa197"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "11f3f35987ea07277f05852d62394314"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "94ce37d213fca98abd0237e110a3569d"
  },
  {
    "url": "categories/index.html",
    "revision": "58d2029a93378174c6f65224a6ed4f62"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "f62dc9e2e0779cc278ec64eafb2fca04"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "2c7a2981899ce0a71b95241153909702"
  },
  {
    "url": "pages/通用/一些编程名词.html",
    "revision": "d65524caf456a4ec84458a43b0bd6180"
  },
  {
    "url": "pages/通用/my web链接.html",
    "revision": "d14b4527aba8000d77889f47f1f98275"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "b224a786436d4a3879ccc705b45feeec"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "91c7eab0e284bdd12a76abb9723644a6"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "7f35e04c948db92ca9489ed376300712"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "bd3e6e394436b64a3af17f740602fd03"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "71b7e7e2b9b6f0ac3352594ead91cb47"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "1c24705cbbf200aa19c0c2710ce7dbb1"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "58428f70641204494e617ec19a2fbf15"
  },
  {
    "url": "pages/index.html",
    "revision": "2a53fefdf6aa2e68a48f5ef40bba0131"
  },
  {
    "url": "pages/Linux/Linux命令学习步骤.html",
    "revision": "166fb056acd9b83698e90691ee99bf61"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "e15b0665d3c1129b9792347ff4f19d8a"
  },
  {
    "url": "pages/NPM/npm命令.html",
    "revision": "8839512bcf9c469d9678b049b1b7fb44"
  },
  {
    "url": "pages/Vs错误处理/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "ff5e45ccd1ce5dd4f18ec5357d8bc504"
  },
  {
    "url": "pages/windows操作/bat批处理指令.html",
    "revision": "3d284ef3b03453a762a2c848d606188b"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "762fa34ac6e82530e91567426f65e411"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "8dc054a7c08cbf07ec61780b30249bba"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "9ef1e6febab81965b02c79e0876df636"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "eb9419c56845f90890766992c3a7ed42"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "9c828b78f140dfb0620d28904b4e88b2"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "1b60cbc853fada0012671e7f4b7d9a9c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "42e3488075aa09113247fb9c1e36883a"
  },
  {
    "url": "tag/index.html",
    "revision": "d05e45104b66438b519c840a63929111"
  },
  {
    "url": "timeline/index.html",
    "revision": "efe5883d1ee1c6eff512577496aee6bd"
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
