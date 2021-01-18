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
    "revision": "6498cccf66298c60d363ebb8495780f4"
  },
  {
    "url": "assets/css/0.styles.c270d48f.css",
    "revision": "214d36007d23b208396a65ca6f6c2a4a"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
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
    "url": "assets/js/1.ffa854d7.js",
    "revision": "45d0fceaf484af57f06af062a81233c1"
  },
  {
    "url": "assets/js/10.5bc3ebc6.js",
    "revision": "83dd39ff8c6f392ae59e69067bf4e780"
  },
  {
    "url": "assets/js/100.ce2a6090.js",
    "revision": "07b57c0b42b7c08d312e331aba107f07"
  },
  {
    "url": "assets/js/101.671e91fd.js",
    "revision": "3357a506b146f0d4d9f176d7377deee9"
  },
  {
    "url": "assets/js/102.ec1be1cd.js",
    "revision": "b61afa02eb6906464b09a14232f0030a"
  },
  {
    "url": "assets/js/103.0a4e4d67.js",
    "revision": "7ff60eaa88c5e1282f83b8e2f4cf7926"
  },
  {
    "url": "assets/js/104.8f967303.js",
    "revision": "5b77ae33431fb2c455f97f25d8172223"
  },
  {
    "url": "assets/js/105.9017c2a2.js",
    "revision": "173d49f772c1aba0f709bb134ec1a3cb"
  },
  {
    "url": "assets/js/106.5daf161a.js",
    "revision": "4b5303380b4cf20a7ae04ad0fb654834"
  },
  {
    "url": "assets/js/107.5472919f.js",
    "revision": "e2deed70eebc71ba584ed469ebcefa75"
  },
  {
    "url": "assets/js/108.bdbe5430.js",
    "revision": "9af4ae333721440323af24ebc25fd322"
  },
  {
    "url": "assets/js/109.61093417.js",
    "revision": "b6468f7a2889eba5b3d85cd6f55c7b3a"
  },
  {
    "url": "assets/js/11.bc6aabd7.js",
    "revision": "c9090de0ce9da2baf6e47193093add8b"
  },
  {
    "url": "assets/js/110.7f639cc8.js",
    "revision": "b7e5c5644a1bfe816222db21bdaed2fb"
  },
  {
    "url": "assets/js/111.fb3dcf8c.js",
    "revision": "3a20817d2564734e29854fa4e1aa89c9"
  },
  {
    "url": "assets/js/112.d2fe91fe.js",
    "revision": "41aab574f499772f6e9acfda7f49e2b6"
  },
  {
    "url": "assets/js/12.cc2dfe45.js",
    "revision": "3cfd4859ddaeb6618d4eb4e77282aaa3"
  },
  {
    "url": "assets/js/13.b6a3245d.js",
    "revision": "047c68d6763768406f92fa7e502488b0"
  },
  {
    "url": "assets/js/14.33f3f1ff.js",
    "revision": "438d48ca6c4a61c9e85b5bbe2c5007bf"
  },
  {
    "url": "assets/js/15.82766c3c.js",
    "revision": "d4eba2d98f01c333190ba55c8877f6f4"
  },
  {
    "url": "assets/js/16.bd8a04ad.js",
    "revision": "cbc6c90d865bc31b45c3a7c1e3d6567d"
  },
  {
    "url": "assets/js/17.4eaef710.js",
    "revision": "e2ad98a254e0480987ec0f33b54db9e2"
  },
  {
    "url": "assets/js/18.68b563a5.js",
    "revision": "5ba21781f7aca6fc82ce08d1b8a753bf"
  },
  {
    "url": "assets/js/19.da86be10.js",
    "revision": "20c5ee36a643ce2b05ce7846d0011895"
  },
  {
    "url": "assets/js/20.48b1775c.js",
    "revision": "3ac4fa8b0d9d39dc06be03e03efa1eb0"
  },
  {
    "url": "assets/js/21.c57c40d9.js",
    "revision": "f1d1198d971c83d71e9b631485c8f0e9"
  },
  {
    "url": "assets/js/22.0f3e6d32.js",
    "revision": "e1f6ca3df06c7f0cd29e2afc981e71bb"
  },
  {
    "url": "assets/js/23.88b6e3fc.js",
    "revision": "3107e71bbb5ee4914950169e7e8438a6"
  },
  {
    "url": "assets/js/24.cf7dab3f.js",
    "revision": "1c833c239199aaf308940c180740450d"
  },
  {
    "url": "assets/js/25.dcebf010.js",
    "revision": "e9a4e033226f95811c9c1ed636c149e7"
  },
  {
    "url": "assets/js/26.45f30d11.js",
    "revision": "30ab539a15c4823223512aa926f8a20f"
  },
  {
    "url": "assets/js/27.38f094b4.js",
    "revision": "a0c2b6620ba8824bbcda922cb78ac03e"
  },
  {
    "url": "assets/js/28.a1f040a4.js",
    "revision": "0e02b78b99894fc01ab736ab55c0be1b"
  },
  {
    "url": "assets/js/29.c6d66a55.js",
    "revision": "8f36c3a7acced45817d9f66e3349177e"
  },
  {
    "url": "assets/js/3.ec656bda.js",
    "revision": "c0f0ff5a1323e664de09394069b5f298"
  },
  {
    "url": "assets/js/30.47ed39ac.js",
    "revision": "ea2f8d927d4d62261cf5063cf5003e0e"
  },
  {
    "url": "assets/js/31.d3fac0ea.js",
    "revision": "4b2ee18ff7bf1aea89a79da626026cca"
  },
  {
    "url": "assets/js/32.c8e4dd52.js",
    "revision": "ce125c6d5ce3b467622bf5b9eb35487d"
  },
  {
    "url": "assets/js/33.1f8b1bfc.js",
    "revision": "dcc6595506a4e8f8236fd397730b29e9"
  },
  {
    "url": "assets/js/34.eb6af809.js",
    "revision": "b6ad0d9656c88f27c01c1669dc220190"
  },
  {
    "url": "assets/js/35.0adb268a.js",
    "revision": "df49385f4a0c787125dda353c06ca2a4"
  },
  {
    "url": "assets/js/36.5e91b2ff.js",
    "revision": "af51399fa8f888a9cc45c3b2c4188ed8"
  },
  {
    "url": "assets/js/37.04f408e7.js",
    "revision": "b6f5bdf8764056879d5debc19a12a25f"
  },
  {
    "url": "assets/js/38.59ff7c34.js",
    "revision": "7791bce9545dbdc5f1008e8ba748416a"
  },
  {
    "url": "assets/js/39.86edde73.js",
    "revision": "f7cdeffa3a82393a6e9b73a015e27ddf"
  },
  {
    "url": "assets/js/4.18fdbf25.js",
    "revision": "e5cca9b48beb7664f140c2207b65eab2"
  },
  {
    "url": "assets/js/40.e72d1adb.js",
    "revision": "14a2864b952639187175ccbab2b25efc"
  },
  {
    "url": "assets/js/41.b6e627e5.js",
    "revision": "7f3083cdfdc6f668765664020278dcd2"
  },
  {
    "url": "assets/js/42.54a235a0.js",
    "revision": "8a3be99a586eb5b1acf5f99df57c1167"
  },
  {
    "url": "assets/js/43.af1caff1.js",
    "revision": "cf2b35fd479307620997a8e73198b979"
  },
  {
    "url": "assets/js/44.b0016279.js",
    "revision": "17a30b847c0e22590b10f0f379a5f290"
  },
  {
    "url": "assets/js/45.5e7018b7.js",
    "revision": "ec5288c83cd8dc05f1b8bb234e1214cd"
  },
  {
    "url": "assets/js/46.1f962485.js",
    "revision": "787b94eee7c79e98398c9b7f77dd2dda"
  },
  {
    "url": "assets/js/47.af9e21c1.js",
    "revision": "e16da57671f673943f2038f13d3f1f80"
  },
  {
    "url": "assets/js/48.16559abe.js",
    "revision": "c0489f41e18fd9c86a042afa3851948f"
  },
  {
    "url": "assets/js/49.4ab7b6d7.js",
    "revision": "5545f59af3ca6da2f5aa51a1ba591b45"
  },
  {
    "url": "assets/js/5.23893baf.js",
    "revision": "cadea9d43adf90fe6b33a0bb659e9f6f"
  },
  {
    "url": "assets/js/50.8fa44515.js",
    "revision": "23fdc8315f037536a308f904d8c08e0c"
  },
  {
    "url": "assets/js/51.c62f6446.js",
    "revision": "d53304d9799ea4de6592b3ef6a4c6480"
  },
  {
    "url": "assets/js/52.1f3c497f.js",
    "revision": "3b3a45b3381e9368cf7c0f43926503d8"
  },
  {
    "url": "assets/js/53.72d1bb74.js",
    "revision": "2c2de028d0cadb26319da20b4a9fefd6"
  },
  {
    "url": "assets/js/54.da289f2d.js",
    "revision": "56f962d66e25d94bc757797852be40d7"
  },
  {
    "url": "assets/js/55.91fa23cf.js",
    "revision": "670a2f1d2b6280c5d4b3e08a10620d7d"
  },
  {
    "url": "assets/js/56.50f501d6.js",
    "revision": "8ac1b78753f2626652d2f31bd7803507"
  },
  {
    "url": "assets/js/57.c870e840.js",
    "revision": "7e007902e14bd2d7e26e756250a75155"
  },
  {
    "url": "assets/js/58.cfa2e028.js",
    "revision": "d522e43f16ae1ab6fce44d8bd465971f"
  },
  {
    "url": "assets/js/59.d15ece12.js",
    "revision": "e7c49c1159efb19fd257c507fabbd396"
  },
  {
    "url": "assets/js/6.b6bab6ab.js",
    "revision": "a732a1c211f95c61d7b62f24e7d9e3aa"
  },
  {
    "url": "assets/js/60.edbdd90c.js",
    "revision": "e9102a12e2a4cdd62e270b4e97c91350"
  },
  {
    "url": "assets/js/61.a787f178.js",
    "revision": "bddaf9e893ff582c4a442dc18fcec594"
  },
  {
    "url": "assets/js/62.36b4b6e0.js",
    "revision": "8e255cd10a094199985e38eb86d1a73c"
  },
  {
    "url": "assets/js/63.e1ecc7de.js",
    "revision": "ee4a1377beb9138dd816f4bfc9bd2443"
  },
  {
    "url": "assets/js/64.df3e0f41.js",
    "revision": "b2bd23f7da5c05a05aea4146d6baa9f5"
  },
  {
    "url": "assets/js/65.00803979.js",
    "revision": "96b7f12376e6610e06ed810bad4cf94d"
  },
  {
    "url": "assets/js/66.6b159c1e.js",
    "revision": "b9fce47754ee60b7a9a00a79b920b0c1"
  },
  {
    "url": "assets/js/67.64f02c97.js",
    "revision": "9d2b9a3c266c7726949d1581fecec5f2"
  },
  {
    "url": "assets/js/68.94594dc7.js",
    "revision": "368958c1915fd641215b9be4909df56c"
  },
  {
    "url": "assets/js/69.c3e07224.js",
    "revision": "f0ec4fa73d40e77fa86d2ee6c651b18d"
  },
  {
    "url": "assets/js/7.0a9d7498.js",
    "revision": "51335adf1c3a84e323d843ca51faadc9"
  },
  {
    "url": "assets/js/70.06224e08.js",
    "revision": "fe2007f1239213c63060b2275a33c2fd"
  },
  {
    "url": "assets/js/71.05606b23.js",
    "revision": "bdf71fe97632ad8fc5024caf39be567d"
  },
  {
    "url": "assets/js/72.061b78ea.js",
    "revision": "b408beb665bc7345800bfcde918191b0"
  },
  {
    "url": "assets/js/73.41290de7.js",
    "revision": "a5fbd963eaf9da6a324df47f976961d4"
  },
  {
    "url": "assets/js/74.033b30d9.js",
    "revision": "0d763b798a0b84805bb7bb7c04344cc4"
  },
  {
    "url": "assets/js/75.08105be3.js",
    "revision": "8d52255153bc22d6584c289f4ae4518f"
  },
  {
    "url": "assets/js/76.e6001236.js",
    "revision": "2ce98bab23bd598c4a420667c5148f68"
  },
  {
    "url": "assets/js/77.6c04146f.js",
    "revision": "4ff951befb0a6498db059febf5435e76"
  },
  {
    "url": "assets/js/78.41240a3f.js",
    "revision": "bf6678c48e8c8140a481190539b645b5"
  },
  {
    "url": "assets/js/79.20b0573a.js",
    "revision": "a50e8524358827e9a53d2e89023313f5"
  },
  {
    "url": "assets/js/8.597c5900.js",
    "revision": "b28f960c94b52c5ee2ab6cc0df601cd7"
  },
  {
    "url": "assets/js/80.fed6f85c.js",
    "revision": "b19d7e2ac9b7939c06c2cb0dc95f7491"
  },
  {
    "url": "assets/js/81.d42b4d73.js",
    "revision": "fed513af97adb51079fde0ad28caae32"
  },
  {
    "url": "assets/js/82.1331be30.js",
    "revision": "8c10425e64d0a0a1f3f9daeed12bd918"
  },
  {
    "url": "assets/js/83.03029289.js",
    "revision": "a43b50c0f83953361323d33300c2a358"
  },
  {
    "url": "assets/js/84.0fec23d0.js",
    "revision": "1377e55ffc18ca1bf50f94aa91cb2697"
  },
  {
    "url": "assets/js/85.a1f84d31.js",
    "revision": "3a2338e0e5524b36040a973892bd2a10"
  },
  {
    "url": "assets/js/86.865bd226.js",
    "revision": "a6c4c48933b2f9234822222decf3e823"
  },
  {
    "url": "assets/js/87.e552221b.js",
    "revision": "b746f0c9e40e077410dc0c3a39d0d96c"
  },
  {
    "url": "assets/js/88.19b46df2.js",
    "revision": "efd44875fb5dce15cd1daadcfabcd42f"
  },
  {
    "url": "assets/js/89.72525175.js",
    "revision": "09e7aa8cabfa655ff807cda82e7b23a0"
  },
  {
    "url": "assets/js/9.2409af65.js",
    "revision": "a20b4481fb0364004177421da0f9d2fe"
  },
  {
    "url": "assets/js/90.3d0ab6fe.js",
    "revision": "f2a40d0b2e9d33b19bc16a95a9561dfd"
  },
  {
    "url": "assets/js/91.582d8525.js",
    "revision": "f8560bcc10ad8d1cfb7b681112a17993"
  },
  {
    "url": "assets/js/92.9ad8af51.js",
    "revision": "3faabefdee3bcea7e64cfc5f14e9d932"
  },
  {
    "url": "assets/js/93.25cf3654.js",
    "revision": "d44596b9750f130e1bf9b9c03b5f85e7"
  },
  {
    "url": "assets/js/94.a4933b0b.js",
    "revision": "be4035c212a338468d05f983d747676e"
  },
  {
    "url": "assets/js/95.0119476b.js",
    "revision": "0d8e1ee252ed80e5c7775782a8c7f239"
  },
  {
    "url": "assets/js/96.29ba2067.js",
    "revision": "edad619a83f1f43980aa8da962b694a6"
  },
  {
    "url": "assets/js/97.792b62c4.js",
    "revision": "986330aa8aef66854c46abe7821f0cb5"
  },
  {
    "url": "assets/js/98.e2f3024e.js",
    "revision": "e8c349bb2ee5960bb84cbaf4815d042e"
  },
  {
    "url": "assets/js/99.d5bb9d97.js",
    "revision": "7b6064a4a3947b77c15dc3cdbe64776c"
  },
  {
    "url": "assets/js/app.5c3515c8.js",
    "revision": "bf141486c692c883df3c0a403f69313d"
  },
  {
    "url": "c++/关键字说明符/关键字.html",
    "revision": "72adb70309a621510b8cd18b116e15dc"
  },
  {
    "url": "c++/关键字说明符/说明符.html",
    "revision": "beb4382eb983fa2c9f6f4b8de03a98ce"
  },
  {
    "url": "c++/库/Boost/Asio.html",
    "revision": "3c39b1fea591b92165165a5add59547f"
  },
  {
    "url": "c++/库/Boost/boost.html",
    "revision": "8ec21346fe81bc976521884f50f31da2"
  },
  {
    "url": "c++/库/Boost/Process.html",
    "revision": "22703a6e651e60191bd48fa617e169dd"
  },
  {
    "url": "c++/库/Boost/Serialization.html",
    "revision": "f251b702a96ca459ec39ecb7d1758aba"
  },
  {
    "url": "c++/库/fmt/fmt教程.html",
    "revision": "73b5c03688d35d97838fa09678b39501"
  },
  {
    "url": "c++/库/spdlog/spdlog教程.html",
    "revision": "1818a8a311348a589d9030acc2d3ee2c"
  },
  {
    "url": "c++/系统级工具函数/功能函数库.html",
    "revision": "bcb67d25d0ad962e68c085c4cf222d79"
  },
  {
    "url": "c++/系统级工具函数/getenv.html",
    "revision": "35c8248e0a29679524df7e3e9b8d06a0"
  },
  {
    "url": "c++/系统级工具函数/system.html",
    "revision": "80caf01294d212e3a426682c7b61dca9"
  },
  {
    "url": "c++/杂项/编译器生成的符号.html",
    "revision": "faeb375ecd33b49ef3da8e1746efaff3"
  },
  {
    "url": "c++/杂项/动态库和静态库.html",
    "revision": "9a900f563eb5b2a0e819bda2c1a1d625"
  },
  {
    "url": "c++/杂项/实用处理技巧.html",
    "revision": "8c7965466718a87c9ccddadc290f92c7"
  },
  {
    "url": "c++/杂项/C++调java填坑.html",
    "revision": "2ef84aea55b2fc50f10f8d93fb6493b0"
  },
  {
    "url": "c++/杂项/visual studio错误集.html",
    "revision": "2ffe984c8a154bdc9f6a7734429d4e87"
  },
  {
    "url": "c++/杂项/vs项目文件层级配置.html",
    "revision": "90564dad05fb70f8064dd23a52f5b16c"
  },
  {
    "url": "c++/c++11/函数对象.html",
    "revision": "f7dabe784113fdd1f2c0f536dc9a4cac"
  },
  {
    "url": "c++/c++11/智能指针.html",
    "revision": "40472ebf4c27085b539ecabdc0cd8692"
  },
  {
    "url": "c++/c++11/自定义字面量.html",
    "revision": "eab9beb6c7d8a4701d366fe6f58b72e9"
  },
  {
    "url": "c++/c++11/addressof.html",
    "revision": "05cc1dd65f91652ee09b6da01f41ffb1"
  },
  {
    "url": "c++/c++11/bind.html",
    "revision": "641cb7bad5c8240ae83d533d0d3d72d1"
  },
  {
    "url": "c++/c++11/declval.html",
    "revision": "5d355b901d45c105638b305741532800"
  },
  {
    "url": "c++/c++11/forward.html",
    "revision": "841a0980d4717aeed91958311715eb6f"
  },
  {
    "url": "c++/c++11/function.html",
    "revision": "a54c866beaba3bf594f0c42b1c147966"
  },
  {
    "url": "c++/c++11/hash.html",
    "revision": "a5e439f95623765b992e0b7fe3715b3f"
  },
  {
    "url": "c++/c++11/ignore.html",
    "revision": "3e9c99c152f902466468aa39f9374bf7"
  },
  {
    "url": "c++/c++11/initializer_list.html",
    "revision": "b028b26d8622641c76b7c5b845d71d25"
  },
  {
    "url": "c++/c++11/move.html",
    "revision": "ebd49c9dd1e3f110c322f62ebcbb9eaf"
  },
  {
    "url": "c++/c++11/nullptr_t.html",
    "revision": "aadbd8cfc287376b514fa9b07951230a"
  },
  {
    "url": "c++/c++11/reference_wrapper.html",
    "revision": "598ca0c1e5f55d93c48c2270bd7a5595"
  },
  {
    "url": "c++/c++11/reference.html",
    "revision": "81a28d2cd0246b9fd7efb350ce2c32c4"
  },
  {
    "url": "c++/c++11/static_assert和assert.html",
    "revision": "9d225b8fc817586f9c4790ed0e45979f"
  },
  {
    "url": "c++/c++11/tie.html",
    "revision": "6889b140b51729de5b1bb428fa6ccae5"
  },
  {
    "url": "c++/c++11/type_traits.html",
    "revision": "ac263957ea6bc2d3be180f3623b15e96"
  },
  {
    "url": "c++/c++11前/realloc.html",
    "revision": "543798e200e69012ca8a2d4b724cd7eb"
  },
  {
    "url": "c++/c++11前/void.html",
    "revision": "f75bcf9e66cac3acea8a719b2bf308ef"
  },
  {
    "url": "c++/c++17/结构化绑定.html",
    "revision": "306a64545aa7d09401aeef8f28da2d72"
  },
  {
    "url": "c++/c++17/折叠表达式.html",
    "revision": "fcd81fe77bf9e4097a2b1fa5f760f27b"
  },
  {
    "url": "c++/c++17/any.html",
    "revision": "cb31372e3f7075056f90fe4d93c9517e"
  },
  {
    "url": "c++/c++17/if switch新特性.html",
    "revision": "b9a1b83ccd6a8c90c97f53c59e4bbd9c"
  },
  {
    "url": "c++/c++17/nullopt_t.html",
    "revision": "e67f7f59d80285aaef1862a0be004915"
  },
  {
    "url": "c++/c++17/optional.html",
    "revision": "79950f37dfd34d5e1fd3e06728f1164d"
  },
  {
    "url": "c++/c++17/string_view.html",
    "revision": "665c8431f38bb9ea73c3c682c8b4b3b4"
  },
  {
    "url": "c++/c++17/variant.html",
    "revision": "03926b087f45ca0c7ff87fad37175b8f"
  },
  {
    "url": "c++/c++20/三路比较运算符.html",
    "revision": "64f6b1a653107bfcba78a9d82e22dfb9"
  },
  {
    "url": "c++/c++20/concepts requires.html",
    "revision": "d457c184b12b3bc31192d3d0af814156"
  },
  {
    "url": "c++/c++20/constexpr consteval constinit.html",
    "revision": "311c2ddddc5912f05605dc7d22ee78e3"
  },
  {
    "url": "c++/c++20/for Range新特性.html",
    "revision": "990827bf1b93e50f836b3f4fb119cb1d"
  },
  {
    "url": "c++/c++20/using enum 声明.html",
    "revision": "5765b8df550bde3a4d7b521784af42d8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c0b9955e8e70d898dd150d536f2164bd"
  },
  {
    "url": "categories/通用/index.html",
    "revision": "880d916127a2047e40787d660a57ccf4"
  },
  {
    "url": "categories/Boost/index.html",
    "revision": "5621c4bbe81f7e4197fcd2da22998135"
  },
  {
    "url": "categories/C++/index.html",
    "revision": "9ce8cbb5ef3fb426d75f361550b74905"
  },
  {
    "url": "categories/C++/page/2/index.html",
    "revision": "776a89793c49aebf6cc34f4c62122233"
  },
  {
    "url": "categories/C++/page/3/index.html",
    "revision": "240569305f71f4e4746dd377e78ccc3b"
  },
  {
    "url": "categories/C++11/index.html",
    "revision": "d771ccd38f71e1688dbf03a94ae87d81"
  },
  {
    "url": "categories/C++11/page/2/index.html",
    "revision": "5be43625cfe519fe0c43c240a6c37fd4"
  },
  {
    "url": "categories/C++17/index.html",
    "revision": "d4e61af2cfc05ce82c03a6c33c1c8d50"
  },
  {
    "url": "categories/C++20/index.html",
    "revision": "8967f9f68403927541d5f2ad85811e7a"
  },
  {
    "url": "categories/C++库/index.html",
    "revision": "1bfa644f9926bc0b9eed9735394c6ec7"
  },
  {
    "url": "categories/C++系统级工具函数/index.html",
    "revision": "5c5409de4657c09a6e6b3f41a825f94a"
  },
  {
    "url": "categories/CMake/index.html",
    "revision": "0d82d961fd92e3919147e0a067277af9"
  },
  {
    "url": "categories/Editor/index.html",
    "revision": "ae68fb4c992c2b2d4fd03b6225f1760c"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "1ba1540ba1737be529f2e98ecff5d40e"
  },
  {
    "url": "categories/GO/index.html",
    "revision": "3e201cdab2f76f2c2fc608b0759d934d"
  },
  {
    "url": "categories/index.html",
    "revision": "b4098d90d726e43c4b80175dd799b510"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "2580c48c82ed1dba9f5e53ec7ab704f2"
  },
  {
    "url": "categories/javaScript/index.html",
    "revision": "fbb696cd2bad40802189ae3fb2791646"
  },
  {
    "url": "categories/Kit/index.html",
    "revision": "b08038e7defd2b77bc268a5b3d239359"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "b9e8053701b758bc1cc14bc6c75bc1a0"
  },
  {
    "url": "categories/Markdown/index.html",
    "revision": "29c7c97efc6ced7c1be9638f975fcefe"
  },
  {
    "url": "categories/Nosql/index.html",
    "revision": "c9c749bf48972bd85251a211781a75de"
  },
  {
    "url": "categories/Npm/index.html",
    "revision": "d3a9a5f1e822bd56dd993e3e76a07a49"
  },
  {
    "url": "categories/Solution/index.html",
    "revision": "b39d19f4ab922497768ccec29456b1d7"
  },
  {
    "url": "categories/Sql/index.html",
    "revision": "ba852d2e46ae1be254e16765c583c2eb"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "e4eaab014cedf2c2e8dad4573a4a7c8e"
  },
  {
    "url": "categories/WebSite/index.html",
    "revision": "68913494a164161971a702bfc2fce1f9"
  },
  {
    "url": "categories/Windows/index.html",
    "revision": "7616af7437c2eaf9b438deab2ebd838c"
  },
  {
    "url": "categories/Yarn/index.html",
    "revision": "209be22473ee41d6bafe0b2c019366d9"
  },
  {
    "url": "github.svg",
    "revision": "fc76e800f232b6b5be0fb306676082a4"
  },
  {
    "url": "index.html",
    "revision": "da6c813bbed966e07cad5e2b7642065f"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "pages/包管理/解决npm yarn 包安装失败方法.html",
    "revision": "61541e457b3d8ccdf3713b07b7b48bc3"
  },
  {
    "url": "pages/包管理/npm命令.html",
    "revision": "d135478a3b4de535a6280861963e7cd5"
  },
  {
    "url": "pages/包管理/yarn 命令.html",
    "revision": "56992a200edf1671f26efa949cc2b0ff"
  },
  {
    "url": "pages/编辑器/VS 实用快捷键.html",
    "revision": "08f6aa4debd43f0b0b913ea33055aca4"
  },
  {
    "url": "pages/编辑器/Vscode 实用操作.html",
    "revision": "9900d04d5b74dc816f54757ac64fc177"
  },
  {
    "url": "pages/前端/踩坑electron.html",
    "revision": "5f53c7430da9464ee094c66e24ea64b9"
  },
  {
    "url": "pages/前端/踩坑mongoose.html",
    "revision": "22028f2dbc1d6ea249f7a35bbb10467a"
  },
  {
    "url": "pages/前端/JavaScript 总结.html",
    "revision": "24051bb1cc89fa9eb460c3b931034cc9"
  },
  {
    "url": "pages/前端/TypeScript 总结.html",
    "revision": "4aca588ded4e24259ba4d2fe22a4107e"
  },
  {
    "url": "pages/前端/vuejs.html",
    "revision": "8594e78ec72c6f607285dcf18ab74318"
  },
  {
    "url": "pages/前端/vuex.html",
    "revision": "cf340f60ad893af17b3992238e5d8291"
  },
  {
    "url": "pages/通用/编程术语.html",
    "revision": "d9ff08ad77fb62b614c2e114b7b249c3"
  },
  {
    "url": "pages/通用/并行、并发、同步、异步.html",
    "revision": "b5540d61dfef194d1d698673711589f6"
  },
  {
    "url": "pages/通用/浮点数二进制表示.html",
    "revision": "5594dcda5742ef3885ac973d34f843b3"
  },
  {
    "url": "pages/通用/社区网站.html",
    "revision": "8f5fbcff777a9b5652c4be6a7647d445"
  },
  {
    "url": "pages/通用/位运算总结.html",
    "revision": "a56b54d9740247a149fa94f416e4ef37"
  },
  {
    "url": "pages/通用/我的网站链接.html",
    "revision": "7d1689a363f9195d2a8c2cc81ea3b86e"
  },
  {
    "url": "pages/通用/著名端口号.html",
    "revision": "68c558f328454776642bfc4298672aff"
  },
  {
    "url": "pages/通用/ASCII、ANSI和UNICODE解释.html",
    "revision": "28ff247517da597d574e9570dc98a21d"
  },
  {
    "url": "pages/C++/别名归类.html",
    "revision": "6d11dc52c95d9287bb5cff153ed240c6"
  },
  {
    "url": "pages/C++/宏.html",
    "revision": "ba8bc649fb611779d9bd57f259b7d329"
  },
  {
    "url": "pages/C++/可变参数.html",
    "revision": "3fe90362f221d194286b444ad62b8838"
  },
  {
    "url": "pages/C++/类.html",
    "revision": "d58febf59b5b0815e7cb3f1e76557bee"
  },
  {
    "url": "pages/C++/类型转换.html",
    "revision": "586a48371f62d67dcce09d827c7f09ac"
  },
  {
    "url": "pages/C++/模板.html",
    "revision": "30c1ea05108d284c63d7f97f8c8a2472"
  },
  {
    "url": "pages/C++/容器.html",
    "revision": "5acaa28b40a4a39aab33d57b33e4dfae"
  },
  {
    "url": "pages/C++/时间日期库.html",
    "revision": "c418722141dcc6d19c3a542b6f0d6be3"
  },
  {
    "url": "pages/C++/随机数.html",
    "revision": "bb553b8eea245bd368d96ea37519f51e"
  },
  {
    "url": "pages/C++/移动语义.html",
    "revision": "0befff846e82e05195921f6c427aacbd"
  },
  {
    "url": "pages/C++/异常.html",
    "revision": "9408df669f31f3df66380a26e1fe1c69"
  },
  {
    "url": "pages/C++/指针 引用.html",
    "revision": "fbfb7d14ffd61c0a50e9ef0ef986fccc"
  },
  {
    "url": "pages/C++/c++的奇怪知识点.html",
    "revision": "d208e880aabd1c70b44c8783f17054ac"
  },
  {
    "url": "pages/C++/SFINAE.html",
    "revision": "c1b6246910391581900f91044a4c882d"
  },
  {
    "url": "pages/CMake/cmake 错误汇总.html",
    "revision": "158f986c49e3f957d634b27fb2e51527"
  },
  {
    "url": "pages/CMake/cmake-help.html",
    "revision": "b72f3359862229368e477275b20c4463"
  },
  {
    "url": "pages/CMake/MinGW的注意事项.html",
    "revision": "a00b5878c2223eeebc95bd7ae47205f4"
  },
  {
    "url": "pages/Git/git常用指令.html",
    "revision": "533e084bac804c474ad670e2759a30c2"
  },
  {
    "url": "pages/Go/GO和C++的语法对比.html",
    "revision": "7e3fef968893fc9a2f1713b9de62f728"
  },
  {
    "url": "pages/index.html",
    "revision": "cb113ddc5378bffdd3f602d070ef5cf8"
  },
  {
    "url": "pages/Java/获取签名.html",
    "revision": "3e0900056b0d79f905b380aab81192dd"
  },
  {
    "url": "pages/Java/修改jar包中文件.html",
    "revision": "f67dec3536b54ea2ffdec863dae35e0c"
  },
  {
    "url": "pages/Linux/Linux给软件设置环境变量.html",
    "revision": "5da18f897de1a3a3ad1b85620f1f87bf"
  },
  {
    "url": "pages/Linux/Linux命令.html",
    "revision": "fe83425a8163e2ed45c675b66c42454e"
  },
  {
    "url": "pages/Linux/Linux软件安装.html",
    "revision": "bf4ca99106524d9e5e70625140857c9a"
  },
  {
    "url": "pages/Linux/shell脚本.html",
    "revision": "0d662977e4c32c5dcf88d94eb1c70485"
  },
  {
    "url": "pages/Markdown/Markdown语法.html",
    "revision": "ce8400b1d18838a3fdd026c67b6cd5d6"
  },
  {
    "url": "pages/Windows/bat批处理指令.html",
    "revision": "42844984d1b7a50c20f4f329e7eb81c7"
  },
  {
    "url": "pages/XML/XML-choice all sequence讲解.html",
    "revision": "138b1bf26b3cd13c5012ef9d8db00162"
  },
  {
    "url": "pages/XML/xml-final属性.html",
    "revision": "9d9860617d77d5175b2a0c22e7534659"
  },
  {
    "url": "pages/XML/xml总结.html",
    "revision": "687f76f3344557db8cd7e48f9bb09783"
  },
  {
    "url": "tag/编程术语/index.html",
    "revision": "429d5399d0a50f8137ae9c45d3c34eed"
  },
  {
    "url": "tag/编译/index.html",
    "revision": "8b2a3b004d19debdec93fec9bd3e027c"
  },
  {
    "url": "tag/别名/index.html",
    "revision": "6e92dd9a2d974ddbeb1ce4cef5c6bdd1"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "20394a33a9893fa24961e556cbce15c1"
  },
  {
    "url": "tag/并行/index.html",
    "revision": "062e0098adf66432775f7e422f0934f3"
  },
  {
    "url": "tag/踩坑/index.html",
    "revision": "5cc39357f2de813bbe8b8b62e5e1414a"
  },
  {
    "url": "tag/动态库/index.html",
    "revision": "7f2ff65bcfcf9831014d5c03ab606375"
  },
  {
    "url": "tag/反编译/index.html",
    "revision": "ee6174c5bf706a50ac4b1b88a5597231"
  },
  {
    "url": "tag/浮点数/index.html",
    "revision": "265bc572423fa63eea2bc92c5a700ce5"
  },
  {
    "url": "tag/功能函数库/index.html",
    "revision": "4f545f9bda0d1a2882c865a73df65157"
  },
  {
    "url": "tag/宏/index.html",
    "revision": "0c022703efcad4a7d33caab389638f95"
  },
  {
    "url": "tag/环境变量/index.html",
    "revision": "42acc65f0e636505c2449c649b3f487d"
  },
  {
    "url": "tag/结构化绑定/index.html",
    "revision": "206b18e44b28adc3f4befa1facb507b0"
  },
  {
    "url": "tag/静态库/index.html",
    "revision": "18cc03ebff0ee568df96d6f807e90b88"
  },
  {
    "url": "tag/可变参数/index.html",
    "revision": "6d1505e2621451ebe4170aeb5305e0f6"
  },
  {
    "url": "tag/快捷键/index.html",
    "revision": "9db0cf8ec19f75ee3a2c5b1850ceefbb"
  },
  {
    "url": "tag/类型转换/index.html",
    "revision": "adee7609f30588bcf079367740bfb282"
  },
  {
    "url": "tag/链接/index.html",
    "revision": "d1e2eab85e829b7e1775ae899cb5690c"
  },
  {
    "url": "tag/模板/index.html",
    "revision": "2fbbb04d4a245f7d05cbe737350595ff"
  },
  {
    "url": "tag/内存管理/index.html",
    "revision": "86d7e246fce92288e7c079be9cf589f0"
  },
  {
    "url": "tag/签名/index.html",
    "revision": "f04f2e5edd007ad16d5422925c1052a2"
  },
  {
    "url": "tag/容器/index.html",
    "revision": "3c2f0366897ca0cc338426929b9075fe"
  },
  {
    "url": "tag/三路比较运算符/index.html",
    "revision": "f078db37a6973f768630c7d6465d7df2"
  },
  {
    "url": "tag/社区网站/index.html",
    "revision": "65c54c5489e2a9cc43c652368612aa00"
  },
  {
    "url": "tag/时间日期库/index.html",
    "revision": "82d949bae89060aa97f6061ad8fa3554"
  },
  {
    "url": "tag/实用处理技巧/index.html",
    "revision": "d7bcf3f720b02408d9bab190e25f31a3"
  },
  {
    "url": "tag/随机数/index.html",
    "revision": "af7fac5a7d7fa69968f5ec3c794383d2"
  },
  {
    "url": "tag/同步/index.html",
    "revision": "1bcf83499ab8a96fb82f7fc5fbb3cb48"
  },
  {
    "url": "tag/位运算/index.html",
    "revision": "3e4b24396a2d23bde9711308833e471b"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "55d4ab3eb2e9349fc2687612b052ce37"
  },
  {
    "url": "tag/移动语义/index.html",
    "revision": "5415f3671bc2129eede7982a4b49e79a"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "eb53f1af54e842f43c26c3b113103dba"
  },
  {
    "url": "tag/异常/index.html",
    "revision": "0af6aa21e18ec6570fad6b37b23e02dd"
  },
  {
    "url": "tag/引用/index.html",
    "revision": "a8ea6900f682dc53f3592c8d0ac3fb2b"
  },
  {
    "url": "tag/折叠表达式/index.html",
    "revision": "f415bf61ff1b9d70c5ae26058dd44b35"
  },
  {
    "url": "tag/著名端口号/index.html",
    "revision": "8471ee7560cbbac6ddf4024c5e93229c"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "716c90905a55ea90058861061ee44cda"
  },
  {
    "url": "tag/字符编码/index.html",
    "revision": "4f7df8d8a949e236f42f882121bdbf7f"
  },
  {
    "url": "tag/字面量/index.html",
    "revision": "fbd3e4c6bc38dcc612e7dddbcee9d2f3"
  },
  {
    "url": "tag/addressof/index.html",
    "revision": "b0465b4d61fed167ce60d38fc39fbdc8"
  },
  {
    "url": "tag/any/index.html",
    "revision": "21f829d554ba85281ed2aa5cd272151f"
  },
  {
    "url": "tag/Asio/index.html",
    "revision": "bd5ba9ea902fde5668f3cdcaa8b47b8b"
  },
  {
    "url": "tag/assert/index.html",
    "revision": "f0abb3597fc0730883095418dd8382da"
  },
  {
    "url": "tag/Bat/index.html",
    "revision": "dd6476e8675770f1451856d3a0211612"
  },
  {
    "url": "tag/bind/index.html",
    "revision": "f8924472a16809e2d1d6700a5e082e26"
  },
  {
    "url": "tag/bit_cast/index.html",
    "revision": "43b2338175392e97fadb3ea9d190ab20"
  },
  {
    "url": "tag/C++的奇怪知识点/index.html",
    "revision": "8031d1942051909a8036bfd57a9f20fd"
  },
  {
    "url": "tag/Class/index.html",
    "revision": "4860420b4d4188725f80dcdb28c98bcd"
  },
  {
    "url": "tag/CMake/index.html",
    "revision": "943c3ab19d279630f743722f6523bc48"
  },
  {
    "url": "tag/Cmd/index.html",
    "revision": "4e609981256134eca6aff37b9ae4116e"
  },
  {
    "url": "tag/concepts/index.html",
    "revision": "c717b165369172033ccd0368062a48ff"
  },
  {
    "url": "tag/consteval/index.html",
    "revision": "3a29f57d500f8183619e39e0827604a2"
  },
  {
    "url": "tag/constexpr/index.html",
    "revision": "9a3c6e6f33db969515cab306f22915ff"
  },
  {
    "url": "tag/constinit/index.html",
    "revision": "8ac51c1db4de47758e1ce46b70351a1f"
  },
  {
    "url": "tag/declval/index.html",
    "revision": "3c4d490ed8bc39cedf2d0747c777b739"
  },
  {
    "url": "tag/dynamic_cast/index.html",
    "revision": "38dd392fced84813007a4b7574af649d"
  },
  {
    "url": "tag/electron/index.html",
    "revision": "c574f19d8bb63b59a489a08c7c83913f"
  },
  {
    "url": "tag/enum/index.html",
    "revision": "d530c6ff2bb6f1821fbb251241cb9671"
  },
  {
    "url": "tag/fmt/index.html",
    "revision": "062afeb9305aedd80148a486e59576c3"
  },
  {
    "url": "tag/for Range新特性/index.html",
    "revision": "51bbe8ced72d9309d46fb89bd91dbf74"
  },
  {
    "url": "tag/for/index.html",
    "revision": "0110bb3272d616bab8788551aaefd211"
  },
  {
    "url": "tag/forward/index.html",
    "revision": "1fac7958612de6eec0098d6b3f20e7aa"
  },
  {
    "url": "tag/Function Object/index.html",
    "revision": "15e599254e3e56c3e05583c03de64beb"
  },
  {
    "url": "tag/function/index.html",
    "revision": "b5145338150b647f62f19d4ece2f7b57"
  },
  {
    "url": "tag/getenv/index.html",
    "revision": "7454b1a54e9ea7ff48c39bf14c937ea8"
  },
  {
    "url": "tag/GO和C++的语法对比/index.html",
    "revision": "48c57d4e239bceeaea427b1c98f2d8cb"
  },
  {
    "url": "tag/hash/index.html",
    "revision": "6ae7ecb94e672f290d7a52418d39b51a"
  },
  {
    "url": "tag/help/index.html",
    "revision": "49bc2ebcaa0373030b8c2dd557d2b3b5"
  },
  {
    "url": "tag/if/index.html",
    "revision": "2a88dcdba635bb6679dd6485bf8eb429"
  },
  {
    "url": "tag/ignore/index.html",
    "revision": "ec97eb25dc11739775ff54fa527e6397"
  },
  {
    "url": "tag/index.html",
    "revision": "062b08774c4642a857767ba4b161fb35"
  },
  {
    "url": "tag/initializer_list/index.html",
    "revision": "27c3992c17fbb16d02e2b757e51b0ad3"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "53a60a7d6e0a9e4fca40dd85aa4babc7"
  },
  {
    "url": "tag/JNI/index.html",
    "revision": "90fa55de71ef09ff16deffa7bf06a7eb"
  },
  {
    "url": "tag/keyword/index.html",
    "revision": "48d23a35cc995594310b6fa89066b69c"
  },
  {
    "url": "tag/Linux软件安装/index.html",
    "revision": "b18c319bf596f3358a632c1004687a56"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "29f81af34c018c5c0805fbf50d0a5eda"
  },
  {
    "url": "tag/MinGW/index.html",
    "revision": "38ab93dca8dd1e276b5ceb21084e1659"
  },
  {
    "url": "tag/Mongoose/index.html",
    "revision": "393743933a25443145a28ef9d496bfac"
  },
  {
    "url": "tag/move/index.html",
    "revision": "dba1a6f59eca18d5010ed0a4abddc43f"
  },
  {
    "url": "tag/nullopt_t/index.html",
    "revision": "f19e9f0da1d04cbe505419bdde42c4ad"
  },
  {
    "url": "tag/nullptr_t/index.html",
    "revision": "45ad14543fbbac6763921677b7cbb261"
  },
  {
    "url": "tag/optional/index.html",
    "revision": "ca806cc4290032030d4260b8db8f2eeb"
  },
  {
    "url": "tag/Process/index.html",
    "revision": "8436591a65e2452de161774343bdb648"
  },
  {
    "url": "tag/realloc/index.html",
    "revision": "29ae5a32f2ea3b9ce06c40a90e49fc44"
  },
  {
    "url": "tag/reference_wrapper/index.html",
    "revision": "658280087dcd11331fc4c89efd5ec6c3"
  },
  {
    "url": "tag/reference/index.html",
    "revision": "ad86eff6350b15291b92dcfb79aeeeaf"
  },
  {
    "url": "tag/reinterpret_cast/index.html",
    "revision": "4a37cb3d49fdbcfa423bb94187d88307"
  },
  {
    "url": "tag/requires/index.html",
    "revision": "ef583e67b4ed2549041da510004fb552"
  },
  {
    "url": "tag/Serialization/index.html",
    "revision": "5adcd06cf1bf98674a3ab3658ae858a5"
  },
  {
    "url": "tag/SFINAE/index.html",
    "revision": "23e5f7e3c68ec6cab95d70cb600d0e11"
  },
  {
    "url": "tag/shared_ptr/index.html",
    "revision": "ac00e417bb23faf01024468c2f0e921e"
  },
  {
    "url": "tag/Shell/index.html",
    "revision": "53d73de3410b1ae10b432b30fd226a78"
  },
  {
    "url": "tag/Spdlog/index.html",
    "revision": "57a462dbf75c534c76d3e0e635964036"
  },
  {
    "url": "tag/specifier/index.html",
    "revision": "52182d03ef4a2532a19d68f72d7a0b68"
  },
  {
    "url": "tag/static_assert/index.html",
    "revision": "acf48179d25bdb09b3edb8a950cde686"
  },
  {
    "url": "tag/static_cast/index.html",
    "revision": "f5ec241e7cb27d0ccb698939c3156598"
  },
  {
    "url": "tag/string_view/index.html",
    "revision": "ad6723f00cddb1b742cc3721c6290f91"
  },
  {
    "url": "tag/switch/index.html",
    "revision": "e9b95bac427ddf2e62a12a50e00c0f71"
  },
  {
    "url": "tag/system/index.html",
    "revision": "a4d1ddd95a6e33809245b74c6a1c780a"
  },
  {
    "url": "tag/tie/index.html",
    "revision": "b98f03f70a50cd608858082926f29cca"
  },
  {
    "url": "tag/type_traits/index.html",
    "revision": "f0aee58af57f53f34f8f379f5d2b0e6e"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "543753809a41c9b1e48754bfc1018857"
  },
  {
    "url": "tag/unique_ptr/index.html",
    "revision": "31402472756be58c477d463c28259052"
  },
  {
    "url": "tag/using enum 声明/index.html",
    "revision": "de36d5465eddb901e0b057511b22e048"
  },
  {
    "url": "tag/using/index.html",
    "revision": "9799bf721e61406f36a536ddbabf65af"
  },
  {
    "url": "tag/variant/index.html",
    "revision": "5416c7c3ee1696b5e38ba8ef485643fb"
  },
  {
    "url": "tag/visual studio/index.html",
    "revision": "74f00ac0906d30d36dabd6cd4cc0581c"
  },
  {
    "url": "tag/void/index.html",
    "revision": "bb2bb3d94541083f5921b22f5518c989"
  },
  {
    "url": "tag/VS/index.html",
    "revision": "e657b4f82304be841c20749bb370e24d"
  },
  {
    "url": "tag/Vscode/index.html",
    "revision": "1cf0d63edf8fffbae64d92d631cd8454"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ec41c73b2d8aa5d496879a93a80f6ad9"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "df4033302992c8c2bc14a99569dc1b48"
  },
  {
    "url": "tag/Xml/index.html",
    "revision": "0dd763dc803cd78dc3dc752f0bd3276c"
  },
  {
    "url": "timeline/index.html",
    "revision": "b2b1c49df137e93960cb0a8ff4cb0ccf"
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
