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
    "revision": "945f2c6bf37b193d3fda44d668528a87"
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
    "url": "assets/js/10.dde7e52d.js",
    "revision": "87f8b8ac5f7d82a3ae34aad1005a33ba"
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
    "url": "assets/js/13.8c3d56e4.js",
    "revision": "f7e2a0027889ba089006b03b8dbcd179"
  },
  {
    "url": "assets/js/14.64bf3499.js",
    "revision": "411f0dc477220341e0838ccfa0dcd987"
  },
  {
    "url": "assets/js/15.105e06e1.js",
    "revision": "0729692c61552590dd45ea3921815690"
  },
  {
    "url": "assets/js/16.208c238d.js",
    "revision": "4213d89235d37b48a56629ebbe3abb63"
  },
  {
    "url": "assets/js/17.ceb23c69.js",
    "revision": "05f99c40fa76b51dc5ea922ab10c315d"
  },
  {
    "url": "assets/js/18.1b9ed963.js",
    "revision": "19da740dae6d7b96e0a9e9f9d341f290"
  },
  {
    "url": "assets/js/19.9f9b78e4.js",
    "revision": "a8bca38e44cba24b6e0550bd54c41f73"
  },
  {
    "url": "assets/js/20.43844371.js",
    "revision": "f7c717cee603dccc105b24eeea082a02"
  },
  {
    "url": "assets/js/21.1fbe2f89.js",
    "revision": "a811438209559104c9f2d69640216620"
  },
  {
    "url": "assets/js/22.91c3debb.js",
    "revision": "4f4c0be6b3d54e0cb663fed59d25453c"
  },
  {
    "url": "assets/js/23.7e931550.js",
    "revision": "dfe64c8428dc41b643452e4a3ba82b78"
  },
  {
    "url": "assets/js/24.ed3a379b.js",
    "revision": "a96bc7b75a5c588e47d10fd613e6c2f7"
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
    "url": "assets/js/27.d5f86c0b.js",
    "revision": "22b770b4827c57b8b61e7379a844c034"
  },
  {
    "url": "assets/js/28.3f5e4c5e.js",
    "revision": "8a48a347ce4958c64e582da8a09fecf3"
  },
  {
    "url": "assets/js/29.475b45cf.js",
    "revision": "101901b1f9732d5f27e3eebfad89d461"
  },
  {
    "url": "assets/js/3.ca0c9fbc.js",
    "revision": "429c347c6c3c7357bf76d8d48bcdf195"
  },
  {
    "url": "assets/js/30.2f6f016f.js",
    "revision": "858b538eb140b5050500de267a44ad5f"
  },
  {
    "url": "assets/js/31.c4ca97ec.js",
    "revision": "532af0e068391448b6fba1c5ea08fb25"
  },
  {
    "url": "assets/js/32.c60c21ef.js",
    "revision": "8727be5905810327183853767625b269"
  },
  {
    "url": "assets/js/33.2dec3848.js",
    "revision": "e5276676649e57f80924ac6cc28f220a"
  },
  {
    "url": "assets/js/34.08379ff1.js",
    "revision": "634ce8a041e6daef54c70ff055c84412"
  },
  {
    "url": "assets/js/35.57a3fd90.js",
    "revision": "aafb2b20cfee9566ed6f2f762e9752a0"
  },
  {
    "url": "assets/js/36.4b51278c.js",
    "revision": "3bd8e3dfe790dfc8648c353160e7b7d5"
  },
  {
    "url": "assets/js/37.e7e69133.js",
    "revision": "455446c7c17ff84ad4657645fdbc45ac"
  },
  {
    "url": "assets/js/38.b0c1ab7b.js",
    "revision": "047ff6b53f1b330d7d12e6e42195a1d2"
  },
  {
    "url": "assets/js/39.9b9512e7.js",
    "revision": "81e803bfd8232126faf5cde1c0d49910"
  },
  {
    "url": "assets/js/4.d497704b.js",
    "revision": "559368a66ec2f612c43431b146735a92"
  },
  {
    "url": "assets/js/40.dc24b97e.js",
    "revision": "e108a831e23ebb42433fada3d960e48c"
  },
  {
    "url": "assets/js/41.cf358781.js",
    "revision": "a5747205f25fd8ce27797a2914deb9d2"
  },
  {
    "url": "assets/js/42.8084bf23.js",
    "revision": "9c46fd4b1bbf37d64c81fe9fa01fca31"
  },
  {
    "url": "assets/js/43.69cd2b45.js",
    "revision": "ddcdf08fa601cb3a1a043fa183d913c9"
  },
  {
    "url": "assets/js/44.5251c495.js",
    "revision": "c1f6891bc3864028a8a00453b3267575"
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
    "url": "assets/js/47.ea03d305.js",
    "revision": "70cd85ab9955d78ec6adf96af1ba1c84"
  },
  {
    "url": "assets/js/48.b06170ab.js",
    "revision": "6b71a6d1640341a67b57354e09e296dd"
  },
  {
    "url": "assets/js/49.f92e9987.js",
    "revision": "bdd9b6bc9538de0451736f4ab84d5a8b"
  },
  {
    "url": "assets/js/5.859c23b6.js",
    "revision": "b7998e1b7c57fae69947d218585d1cae"
  },
  {
    "url": "assets/js/50.50261352.js",
    "revision": "3e2ef993929fb83401c0deed9cb1aa9c"
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
    "url": "assets/js/app.053cd1dd.js",
    "revision": "09bf0efdfd563ecf30fe5099654fcd9b"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "e2d5cc824d263f8e1db8d16548e0e92f"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "c94bdfacdaa24b942f3bdf326e902a86"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "f56f4755bbaaf008a49fb5d960a59a70"
  },
  {
    "url": "categories/Cmd/index.html",
    "revision": "38781585954c0288ad49b48ce1fed4c2"
  },
  {
    "url": "categories/index.html",
    "revision": "0df6f58d9c43d229e71017e40c8ee829"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "219f6f14b29a686a2c47efbdd1299c17"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "dc1c7ed177333e85d7aae16b2757734c"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "897b60830bbffba32f166ffe0756cc3f"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "041dfe4a0c870737efc99dd2ea77e9a9"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "a61b55fb9ea12af1431df7ee97fea6fa"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "432b4c94601777ff5f385a8bfc294e5d"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "2aee56079790624cd803f9c290421063"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0432c71bc1eaf4c9c28e2dfd6c090e85"
  },
  {
    "url": "categories/富文本/index.html",
    "revision": "8b8dc8fe9e28cefe32bf7e642066b692"
  },
  {
    "url": "categories/版本控制/index.html",
    "revision": "03463d9f0f816ad9dc61e3853144335b"
  },
  {
    "url": "categories/编辑器/index.html",
    "revision": "0baeed1950eec3e8372cfedbdc5d7cca"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "7be705e26ede0032d4ba2092ca8872bc"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "41952d67b5158c1fa5b26beb9f775e98"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/C++/boost库常用部分.html",
    "revision": "3922f916a63970839b276b439a30d1c2"
  },
  {
    "url": "pages/C++/boost库编译.html",
    "revision": "10a03d3aa213fb88e3d90ddc953a2f32"
  },
  {
    "url": "pages/C++/c++ 异常.html",
    "revision": "c2f3e83044a6514e21c9684c3f68295b"
  },
  {
    "url": "pages/C++/c++ 引用和指针运用多态特性.html",
    "revision": "b3511cbfbaa12a2a4ea2fc606d8b69e9"
  },
  {
    "url": "pages/C++/c++ 指针.html",
    "revision": "b5f64ba760eb8e9cf1b865429ef3069c"
  },
  {
    "url": "pages/C++/c++动态库和静态库.html",
    "revision": "9b54dcf786f1a4ddb1c874a3c6e6e8de"
  },
  {
    "url": "pages/C++/C++可以在头文件中放全局变量吗.html",
    "revision": "34ca1dc6abdcde46085a74abd527992b"
  },
  {
    "url": "pages/C++/c++随机数.html",
    "revision": "e61918c668c2c04f23858db55759d772"
  },
  {
    "url": "pages/C++/const和指针的关系.html",
    "revision": "11b2552dfbe0a448ebc501fa1b3ec97d"
  },
  {
    "url": "pages/C++/fatal error LNK1149 输出文件名匹配输入文件名.html",
    "revision": "131cfc8ec2d98300c2b2ec3c02f399ac"
  },
  {
    "url": "pages/C++/vs项目文件层级配置.html",
    "revision": "f91a6fa161bf4d5fc4c6641b4da40b67"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "0d44c2c28099fbbf0708493b9653baf5"
  },
  {
    "url": "pages/C++/如何把函数存进容器中.html",
    "revision": "9eceb0641b4d50276a27c7d6bd442ac9"
  },
  {
    "url": "pages/C++/如何设计一个类仅有一个实例.html",
    "revision": "ef3dc07cdab0a8c86ffe15a2c110c1bf"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "e96bc6e0d95013a8682203cf6c73afe7"
  },
  {
    "url": "pages/C++/类中成员变量为类自身.html",
    "revision": "e65021ff364bb369dd8c535c4e235e46"
  },
  {
    "url": "pages/C++/编译器生成的符号.html",
    "revision": "7fb6a1c5ea6dee4da5759708db254e70"
  },
  {
    "url": "pages/cmake/cmake 错误汇总.html",
    "revision": "f55126497c2ca1b1b9de793b96d97344"
  },
  {
    "url": "pages/cmake/cmake-help.html",
    "revision": "b01cacea30d43c267d2b823e31dcca2f"
  },
  {
    "url": "pages/cmake/MinGW的注意事项.html",
    "revision": "6c33d5b17bcd2232fe25528b2db2710a"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "9c99102b4cbfc99b06cfbc8da7d3e69d"
  },
  {
    "url": "pages/index.html",
    "revision": "2275eade3962689a0c85fcf9b1cb3de1"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "86b2326b24cf01e7155096ccfc8ae6a3"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "ef52b12e0e09a01ee86d3c0c01d16c29"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "97a6745e1cdebe06c2d49b4f6f453312"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "de1d27cc9fd0512bf390d3801186e075"
  },
  {
    "url": "pages/前端/JavaScript 总结.html",
    "revision": "6580fff0ad40a12fa96174cf93eaaac9"
  },
  {
    "url": "pages/前端/TypeScript 总结.html",
    "revision": "14ab6ac18ad9d5e055c6d3e6c7d0f9a1"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "99e8e4edfd6f94e189a19921765a3d65"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "bd1242400f860b2db3ee6e045e63cea5"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "36da0f131c13a3d0f34c74af3dd3f6d7"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "f132da7ca22bcb60cbe1b61b8c4c49e0"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "7a9631712b3812e956fd72b80a53f899"
  },
  {
    "url": "pages/系统/bat批处理指令.html",
    "revision": "247e6357a49a5d38726f744f7394c1c7"
  },
  {
    "url": "pages/系统/Linux命令学习步骤.html",
    "revision": "2d5b29ff901c59ac09a6d713f65283eb"
  },
  {
    "url": "pages/编辑器/VS 实用快捷键.html",
    "revision": "a9537b47a8ca023b9dbf4d12f69f0459"
  },
  {
    "url": "pages/编辑器/Vscode 实用快捷键.html",
    "revision": "2ad11f0b443de31243e0dd17a445a129"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "77befc0672f9acd073224ac66038f5d3"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "c84d41312807b0497928aaac5bfcb7e9"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "384d6233befe3f93bd82f594c26de741"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "681faf4b0a90ce3eacaf37e87dd02217"
  },
  {
    "url": "tag/boost/index.html",
    "revision": "1f5f25d91f2ee95ed0d5d21f76f7c82e"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "dd9c86e1a6c4bdc936e0c207a70e3a68"
  },
  {
    "url": "tag/const/index.html",
    "revision": "9d379f56b19884d256bcc5995e48d3a5"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "ac4acb9c36e52a9ec0f35c90fb21ee14"
  },
  {
    "url": "tag/help/index.html",
    "revision": "9a5f53cc578f3d8b68f480f23cdb93ae"
  },
  {
    "url": "tag/index.html",
    "revision": "241f9fc7114191a3ab5ab40c902878d5"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "f30a3abc3b5c822f58a1a4c20d0956aa"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "be65d71d3d1049d7e1610f9cbae75979"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "ec55ac486bd2b2be136ac15f0727d0cb"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "3eae46e596dd460d6f0969e8469a5876"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "4ecd64666f2f9d32a47693ff938bf282"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "91ef1ab8034da1d74216e983dae8ae63"
  },
  {
    "url": "tag/Npm/index.html",
    "revision": "8b5db9dc214cf794902dcb986c02b01a"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "91f9bf05bcf513c6487e8fbd18d1fd38"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "0a3d0d2c84b6588a56ecfb08b403bfcd"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "12d5ef92fd9c6ee567886ade6ebfca3b"
  },
  {
    "url": "tag/Vscode/index.html",
    "revision": "7517eb0793d1e2dfac8ecf69e076d48e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ee2ceba41650c8d1b784a7dff9a99635"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "5c381e5efc0b322bafecf31338240b77"
  },
  {
    "url": "tag/Yarn/index.html",
    "revision": "ba7efdbf17e037149f7e3409ae4d09fc"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "e9c08677173dae84cba36310d9c7eb66"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "37ba26009cee400cc3dd923355505289"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "674eddfc97f48dacd29bd7d1e3bd17bc"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "74946e295368c558c9f4c242405e3b33"
  },
  {
    "url": "tag/多态/index.html",
    "revision": "f7a94078f23568822868c9cc3882467d"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "c034fed2f34f787e9ebaf577f9eafea8"
  },
  {
    "url": "tag/快捷键/index.html",
    "revision": "91719170f296c423efc94f4a2a7e14f8"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "5053306036126431fa53c41bfa01ab8f"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "6244997a5a671614fefedeb13bb53579"
  },
  {
    "url": "tag/类/index.html",
    "revision": "2005c9f8c2f2e7057b70a8423c8e3a6a"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "5596e8a818c84162061179bb1c95ffd2"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "bcd09a54b5c7baf5521983641d008394"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "bf479d490392d67b1280e66e333e9d07"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "11804bbebe0952248af0b3d0a7c21ca6"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "d25435c8d940f5b5b49e73e89e0476b6"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "a022289e365df18fb83dc068f8b2ada9"
  },
  {
    "url": "timeline/index.html",
    "revision": "35ce3dc7c86dacd3f45877aaa346e5c0"
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
