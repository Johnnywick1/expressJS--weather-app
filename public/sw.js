if(!self.define){let s,e={};const i=(i,a)=>(i=new URL(i+".js",a).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(a,n)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let o={};const r=s=>i(s,c),d={module:{uri:c},exports:o,require:r};e[c]=Promise.all(a.map((s=>d[s]||r(s)))).then((s=>(n(...s),o)))}}define(["./workbox-1997932c"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"css/splidejs/splide.min.css",revision:"f6a86e8018fc1f6ae254b339acbd1cdd"},{url:"css/style.css",revision:"168d5354bf3cf1f5a1b010d45b2dbce8"},{url:"img/assets/icons/10days.svg",revision:"94425be282405212ef21bee938b9eac6"},{url:"img/assets/icons/appIcon.svg",revision:"3475c070bb31265ed28376dcd676cb7e"},{url:"img/assets/icons/arrow-right.svg",revision:"8cf3c74145e9e2bacc5dc92185193435"},{url:"img/assets/icons/bi_phone-fill.svg",revision:"4b2271220d9ceaee0d232b9dc8a8d3a0"},{url:"img/assets/icons/blank.png",revision:"65ba416dabc03b32323da62e336974e5"},{url:"img/assets/icons/calendar.svg",revision:"5a9423ea1ac7e1b53b5fbb52ce8ee7ec"},{url:"img/assets/icons/check_circle.svg",revision:"327c60ef9d87e2b2dee324049346e504"},{url:"img/assets/icons/clarity_compass-line.svg",revision:"b1b8cc6faab04ac3a3ca997274ca8a68"},{url:"img/assets/icons/clear-day_sun.svg",revision:"f44c9db4e31fc709387547732e8e8cfe"},{url:"img/assets/icons/clear-day2.svg",revision:"b83df25441c9c5639ef186c76043c616"},{url:"img/assets/icons/clear-night.svg",revision:"5c757c0083c3516430187713a3c5c7f5"},{url:"img/assets/icons/close.svg",revision:"f6d56c9fd9e8999794a2012dfa652da9"},{url:"img/assets/icons/cyan_cloud.svg",revision:"acd74cdde009ecf701891234247c5ad5"},{url:"img/assets/icons/dark_cloud.svg",revision:"0fa509b834ba717095acc9f5528d8694"},{url:"img/assets/icons/delete.svg",revision:"ec0368ee5eae4834ab703d3c90675fe9"},{url:"img/assets/icons/down.svg",revision:"69c36af3f33b2c4198ca47dbb8f56913"},{url:"img/assets/icons/dragicon.svg",revision:"4c6558c8d33fd4ef3d66aa4222efc8c5"},{url:"img/assets/icons/emptypic.svg",revision:"96810db7c632983a5764cd2f8b91613f"},{url:"img/assets/icons/face_sun.svg",revision:"c863a25b7f3fac8d5bde1c5ce97847d4"},{url:"img/assets/icons/feels-like.svg",revision:"7689597c716926741b23ec8258381b8d"},{url:"img/assets/icons/fluent_weather-partly-cloudy-day-24-regular.svg",revision:"b85df3de7ffe7975e4858b715240a4b2"},{url:"img/assets/icons/globe.svg",revision:"cf588dbd6c0820e3247d9a13424288a5"},{url:"img/assets/icons/home-icon-h.svg",revision:"9e20d39923fe44ed05b025e1aa4985d5"},{url:"img/assets/icons/ion_water-outline.svg",revision:"ec1623e38941cb8c7a6acb38dc633db3"},{url:"img/assets/icons/Line 14.svg",revision:"740748932029115596cbb50071263d04"},{url:"img/assets/icons/loading_circle.svg",revision:"7594831850603b6734a263afd41f8c8d"},{url:"img/assets/icons/location-icon.svg",revision:"da81f86299fec1e19d1b2b3b6421c385"},{url:"img/assets/icons/location-marker.svg",revision:"6f6bac6074f066299bc7f0c1d3374035"},{url:"img/assets/icons/locations-icon-h.svg",revision:"6a0bb8dfa8b23aa4166eec94d1fd39f0"},{url:"img/assets/icons/map-pin.svg",revision:"238a669f6db01642ddb59dbd42083a53"},{url:"img/assets/icons/moonphases/firstquarter.svg",revision:"7574f9cfbaa7fb73c67f14e12f4266a9"},{url:"img/assets/icons/moonphases/fullmoon.svg",revision:"4a5011c62a811251df2d67bc7e44de38"},{url:"img/assets/icons/moonphases/lastquarter.svg",revision:"22b10330a7e8890a28edff759125ffb6"},{url:"img/assets/icons/moonphases/new.svg",revision:"f4ff61b41c3f7188e986fe6c15efc04a"},{url:"img/assets/icons/moonphases/waningcrescent.svg",revision:"4d4fca3b9404d413d13327c1c0d91d80"},{url:"img/assets/icons/moonphases/waninggibbous.svg",revision:"481dbb62c2d3cb2132760ed5e374c97d"},{url:"img/assets/icons/moonphases/waxingcrescent.svg",revision:"6cb59160b29e2c286b127fea76dd12f2"},{url:"img/assets/icons/moonphases/waxinggibbous.svg",revision:"1dd29571698bf5e9115c03d6e8a8dfd7"},{url:"img/assets/icons/my-location.svg",revision:"3e576c043b8653578aa5caaa2537d65d"},{url:"img/assets/icons/noticeIcons/error.svg",revision:"63b1f8d33dc459f9c33a0a7340e266c0"},{url:"img/assets/icons/noticeIcons/info.svg",revision:"ec8b6d2751c87363cf860c1f140cfb82"},{url:"img/assets/icons/noticeIcons/success.svg",revision:"c0541c5ce185ad2e25c1b155dc5de89d"},{url:"img/assets/icons/noticeIcons/warning.svg",revision:"a54c056a3f0c79324988abef13e0c5ad"},{url:"img/assets/icons/phoneRotateDark.svg",revision:"711224b5a117eb746ed836da535a1e17"},{url:"img/assets/icons/phoneRotateLight.svg",revision:"1a6d14c3ac17b7d5d84fbf3aa4eff11a"},{url:"img/assets/icons/phoneStatusBar/_battery.svg",revision:"32d0c813e49dac374982ec315064d33d"},{url:"img/assets/icons/phoneStatusBar/reception.svg",revision:"7fe270554c9b6f9e3be19dd604b64d8c"},{url:"img/assets/icons/phoneStatusBar/wifi.svg",revision:"1b8d54cc9d46db93f3d97338928a8192"},{url:"img/assets/icons/rain-percent.svg",revision:"ecfe4bf1b9e97564118466cce45c2c38"},{url:"img/assets/icons/rename.svg",revision:"a40ed5283a183b08ef9bb50ba9cdada1"},{url:"img/assets/icons/settings-icon-h.svg",revision:"79c089a4c88e412c7663f620bddb546a"},{url:"img/assets/icons/settings-icon.svg",revision:"efba1a77200d43fc840f9bd55192cd17"},{url:"img/assets/icons/settings-marker.svg",revision:"56e1d4c6ded93be2fb4666e9d1c0c736"},{url:"img/assets/icons/sunrise.svg",revision:"238e132a4263e92267782c34a8c439c9"},{url:"img/assets/icons/sunrise2.svg",revision:"afb20fc71e5ed87f6404af19f911a70c"},{url:"img/assets/icons/sunset.svg",revision:"e54658882c050e941271081269dfb5a9"},{url:"img/assets/icons/sunset2.svg",revision:"9b4f92451cace8e48c1be88509b82b48"},{url:"img/assets/icons/theme_system.svg",revision:"a9943f48f8193429c2469f4a24caeb9f"},{url:"img/assets/icons/trash.svg",revision:"4dfb550a09042013acdc975147e9d151"},{url:"img/assets/icons/ufo.svg",revision:"1f0ccd22ada93bfa5a642674d6783cb3"},{url:"img/assets/icons/uvindexSun/uv0.svg",revision:"e395ec6231a0279ccd813aaa41c1a14a"},{url:"img/assets/icons/uvindexSun/uv11.svg",revision:"282dbe9597f983658ecc52cfe7c436c4"},{url:"img/assets/icons/uvindexSun/uv3.svg",revision:"cc412e4a47da09e91b6256fdf3e01898"},{url:"img/assets/icons/uvindexSun/uv6.svg",revision:"263482fe2a942d5039c47f345eb52ca4"},{url:"img/assets/icons/uvindexSun/uv8.svg",revision:"79f845c6c22a53c4b13723902025cf3a"},{url:"img/assets/icons/weather-conditions/clear-day.svg",revision:"e22c919e1647d9acbfb7546fc0d01b6e"},{url:"img/assets/icons/weather-conditions/clear-night.svg",revision:"fed7f0c69e2bbeb3fda40da366d4f634"},{url:"img/assets/icons/weather-conditions/cloudy-night.svg",revision:"ec5ed50bb17d28bfafeb1f5ba8d9027d"},{url:"img/assets/icons/weather-conditions/cloudy.svg",revision:"699f874f5f7f7512512f4b53f7846455"},{url:"img/assets/icons/weather-conditions/fog-night.svg",revision:"a9275dfdd28865fcbb36421c044f8953"},{url:"img/assets/icons/weather-conditions/fog.svg",revision:"88d1a2c39cf3a53314541fcda9dd48a8"},{url:"img/assets/icons/weather-conditions/hail-night.svg",revision:"e0aac7705cad94bf1f494711e2923dd0"},{url:"img/assets/icons/weather-conditions/hail.svg",revision:"bd1537532e2e428c2df1e0bad6fefaee"},{url:"img/assets/icons/weather-conditions/partly-cloudy-day.svg",revision:"e2e56ec22bf11f20ea336088b0b0fd4a"},{url:"img/assets/icons/weather-conditions/partly-cloudy-night.svg",revision:"34c2836dc3bf8ec2e751c4f9535851e0"},{url:"img/assets/icons/weather-conditions/rain-night.svg",revision:"382e7a99ff7282a88f1613ed4b725403"},{url:"img/assets/icons/weather-conditions/rain-snow-night.svg",revision:"9ccec634897a3780b32eefee9f0b6471"},{url:"img/assets/icons/weather-conditions/rain-snow-showers-day.svg",revision:"c8acdb4ff73769d1e818b50f1cf9ae92"},{url:"img/assets/icons/weather-conditions/rain-snow-showers-night.svg",revision:"643f43108f5d4265c81dc36824dcc736"},{url:"img/assets/icons/weather-conditions/rain-snow.svg",revision:"84d12ddc19ca3e366321317ea216416b"},{url:"img/assets/icons/weather-conditions/rain.svg",revision:"1699afbc3dbc3a5a36eb1c232e5664dd"},{url:"img/assets/icons/weather-conditions/showers-day.svg",revision:"25f3b8125cbe056504acf2bece4788d0"},{url:"img/assets/icons/weather-conditions/showers-night.svg",revision:"2581301ecc847a2d48124388515f4485"},{url:"img/assets/icons/weather-conditions/sleet-night.svg",revision:"4f7fe8a9adbf7814abf7f5cb8e1ffc74"},{url:"img/assets/icons/weather-conditions/sleet.svg",revision:"eeaff24a2b874c268594e98e0f10cfae"},{url:"img/assets/icons/weather-conditions/small/clear-day.svg",revision:"76756775866516b8bfe70d01ae5d78a9"},{url:"img/assets/icons/weather-conditions/small/clear-night.svg",revision:"03bd2e199767712107e2fa73dfd01fb6"},{url:"img/assets/icons/weather-conditions/small/cloudy-night.svg",revision:"be7a19c8ac3ea1909a55afe71176dd68"},{url:"img/assets/icons/weather-conditions/small/cloudy.svg",revision:"e06954f2d1e9dcb482d2ef134737b9d2"},{url:"img/assets/icons/weather-conditions/small/fog-night.svg",revision:"ad5c20b81b07e229b9bd039bc631864d"},{url:"img/assets/icons/weather-conditions/small/fog.svg",revision:"46012129257ad3e8edf061900f634976"},{url:"img/assets/icons/weather-conditions/small/hail-night.svg",revision:"4c0c9f4096b1c848bd6f0b11a79467ba"},{url:"img/assets/icons/weather-conditions/small/hail.svg",revision:"b85470ddfac3404829c725bd4a154e18"},{url:"img/assets/icons/weather-conditions/small/partly-cloudy-day.svg",revision:"7f67e8e5745d1796797828d10916981e"},{url:"img/assets/icons/weather-conditions/small/partly-cloudy-night.svg",revision:"ec29ed1fdc0d69ffb0aa2a2cc80080c0"},{url:"img/assets/icons/weather-conditions/small/rain-night.svg",revision:"c8b028e459a68b3ec20cecf245b6b94a"},{url:"img/assets/icons/weather-conditions/small/rain-snow-night.svg",revision:"b2c24609fb42dd16d3946b8ac3bf18f3"},{url:"img/assets/icons/weather-conditions/small/rain-snow-showers-day.svg",revision:"52375d390f5230fc7cedfb711a121904"},{url:"img/assets/icons/weather-conditions/small/rain-snow-showers-night.svg",revision:"45c3375fd07fa7420e69ef3aa1118f05"},{url:"img/assets/icons/weather-conditions/small/rain-snow.svg",revision:"a3f5de377c48279b4c28c688e16fb03a"},{url:"img/assets/icons/weather-conditions/small/rain.svg",revision:"b1ab60dba47ee38b30024a932516a89e"},{url:"img/assets/icons/weather-conditions/small/showers-day.svg",revision:"8cbcf2d00e0f858ec794d631e5506d93"},{url:"img/assets/icons/weather-conditions/small/showers-night.svg",revision:"2dc72dacffe4d609d8b348c1ac602e6c"},{url:"img/assets/icons/weather-conditions/small/sleet-night.svg",revision:"a88c8a6921de746189a64da1792bd824"},{url:"img/assets/icons/weather-conditions/small/sleet.svg",revision:"a81260af97b06d9080bd2d26039f76b1"},{url:"img/assets/icons/weather-conditions/small/snow-night.svg",revision:"51e499802441ec59fa38ee43ee484a87"},{url:"img/assets/icons/weather-conditions/small/snow-showers-day.svg",revision:"9142fb38116dff8e2813716b733c2b88"},{url:"img/assets/icons/weather-conditions/small/snow-showers-night.svg",revision:"e93a6551ea7714c890c1ba2d33b02754"},{url:"img/assets/icons/weather-conditions/small/snow.svg",revision:"037755c6876a364915972ae3429ea35d"},{url:"img/assets/icons/weather-conditions/small/thunder-night.svg",revision:"288e04b6e0508129cdf276cdb684c035"},{url:"img/assets/icons/weather-conditions/small/thunder-rain-night.svg",revision:"7a563cda32a8c19e7ef492e7a344188f"},{url:"img/assets/icons/weather-conditions/small/thunder-rain.svg",revision:"aa0bc0a211b3f18df82995ef95f0a256"},{url:"img/assets/icons/weather-conditions/small/thunder-showers-day.svg",revision:"bf824faeeb001020ff3510e37065d09e"},{url:"img/assets/icons/weather-conditions/small/thunder-showers-night.svg",revision:"691fedd66f9493e54f11e40409c0064f"},{url:"img/assets/icons/weather-conditions/small/thunder.svg",revision:"ba7408d5375cc437211384f950030872"},{url:"img/assets/icons/weather-conditions/small/wind-night.svg",revision:"d2a7f7c560c4f6aedfd4a9036d2f0d30"},{url:"img/assets/icons/weather-conditions/small/wind.svg",revision:"31dfc6ba36db6a65867234edc8d8bf62"},{url:"img/assets/icons/weather-conditions/snow-night.svg",revision:"31fc23fbc05d054ef62b9e66f10a1534"},{url:"img/assets/icons/weather-conditions/snow-showers-day.svg",revision:"088f7c18888d0fffa5faa1c1eeb9c029"},{url:"img/assets/icons/weather-conditions/snow-showers-night.svg",revision:"5b7743b385b274fed679063a0d42e7e2"},{url:"img/assets/icons/weather-conditions/snow.svg",revision:"6f079ed0e77023cdffb96ce4d08862bc"},{url:"img/assets/icons/weather-conditions/thunder-night.svg",revision:"b7b9838d2814403f91eeca9bfb5f0db2"},{url:"img/assets/icons/weather-conditions/thunder-rain-night.svg",revision:"734c38f7c884deb68c0d3e4dd82b83d6"},{url:"img/assets/icons/weather-conditions/thunder-rain.svg",revision:"e5365648846415256fbaf5760edd09a9"},{url:"img/assets/icons/weather-conditions/thunder-showers-day.svg",revision:"d6a36e09ad3afdbcde31962fa41a0e3e"},{url:"img/assets/icons/weather-conditions/thunder-showers-night.svg",revision:"7d469bb79c3221a1ddcbac5096291e25"},{url:"img/assets/icons/weather-conditions/thunder.svg",revision:"330461ba5111a427006e360ebe2d3b93"},{url:"img/assets/icons/weather-conditions/wind-night.svg",revision:"07054a1f81123e5e4efcc1f3237b86f1"},{url:"img/assets/icons/weather-conditions/wind.svg",revision:"628321c0b57509a4dd4b35bd60e4e15a"},{url:"img/assets/icons/wi_barometer.svg",revision:"551e3892c53e6f3642dd7495676d565c"},{url:"img/assets/icons/wind.svg",revision:"e2c1b325d1759cb72482d64c33ec6db7"},{url:"img/assets/pwa/icons/icon-128x128.png",revision:"b32250bc57de9f80dcd8b3182ceef893"},{url:"img/assets/pwa/icons/icon-144x144.png",revision:"cf744f9f4ff996905e843b8d759a4845"},{url:"img/assets/pwa/icons/icon-152x152.png",revision:"ce34f0271325e252f7215434282af85a"},{url:"img/assets/pwa/icons/icon-192x192.png",revision:"15bd8068002426398cc396d92b124359"},{url:"img/assets/pwa/icons/icon-384x384.png",revision:"638f5dd374b9406395c1f95c97c07087"},{url:"img/assets/pwa/icons/icon-48x48.png",revision:"1df294ad8d497ae9d3d480eee414290b"},{url:"img/assets/pwa/icons/icon-512x512.png",revision:"2814ef5116307d34fc9798188a4b3d82"},{url:"img/assets/pwa/icons/icon-72x72.png",revision:"f5baf183d8d9f175c794520e71380b19"},{url:"img/assets/pwa/icons/icon-96x96.png",revision:"ae3904affc5021b189c2999617fe2053"},{url:"img/assets/pwa/splash_screens/10.2__iPad_landscape.png",revision:"88b0601c607aff9fc04ee94829c61230"},{url:"img/assets/pwa/splash_screens/10.2__iPad_portrait.png",revision:"600930eb2ec7aa2c3d6e5636a3ec1efe"},{url:"img/assets/pwa/splash_screens/10.5__iPad_Air_landscape.png",revision:"55e4617097e16dd96fa7af4311f21a4e"},{url:"img/assets/pwa/splash_screens/10.5__iPad_Air_portrait.png",revision:"7c22a949968a3324edb9b7a50111bdae"},{url:"img/assets/pwa/splash_screens/10.9__iPad_Air_landscape.png",revision:"aacd065dbfe9d6518ea37b10d1417f86"},{url:"img/assets/pwa/splash_screens/10.9__iPad_Air_portrait.png",revision:"e50e542a0154148738680a50f1439bcb"},{url:"img/assets/pwa/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"ae6b078c328fc9fbb988b54c8578c870"},{url:"img/assets/pwa/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"d902165cdfc1b7f84964d986a255cebb"},{url:"img/assets/pwa/splash_screens/12.9__iPad_Pro_landscape.png",revision:"3507d149dbe67024e940108d93e2531e"},{url:"img/assets/pwa/splash_screens/12.9__iPad_Pro_portrait.png",revision:"a2dee26e52290819ffcb80ecaba7d0a0"},{url:"img/assets/pwa/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"0b7f99928f8257a452fd515980063dac"},{url:"img/assets/pwa/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"416d1634233c47be7837275f796dcd52"},{url:"img/assets/pwa/splash_screens/8.3__iPad_Mini_landscape.png",revision:"8dbe3f17f827a0cad5edd2bf895b0e75"},{url:"img/assets/pwa/splash_screens/8.3__iPad_Mini_portrait.png",revision:"03cbb79dd732d9e74ae5012f531df2ac"},{url:"img/assets/pwa/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"a49f7c090b7e081551d4a21f6966a7c0"},{url:"img/assets/pwa/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"43a5ead14a32ecc062924679663daa63"},{url:"img/assets/pwa/splash_screens/iPhone_11__iPhone_XR_landscape.png",revision:"ace7d8d91b804753ea050bb82e14c873"},{url:"img/assets/pwa/splash_screens/iPhone_11__iPhone_XR_portrait.png",revision:"db8ce2f0bb47d5a4ef303bc2fc31ce68"},{url:"img/assets/pwa/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"18cb6947eb8c853f163ad4492442e3d9"},{url:"img/assets/pwa/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"7487824cfe18241eb9c9acbc9dace632"},{url:"img/assets/pwa/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"adb492ce826da4a32764188b3614c434"},{url:"img/assets/pwa/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"4e88139ec62c216b265ba32d149f0511"},{url:"img/assets/pwa/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"1605888debd6476d51750b8e4079b57b"},{url:"img/assets/pwa/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"224b8b8585f5568d51b08fc400bb2c65"},{url:"img/assets/pwa/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"fbdb3484e39c97d8809aab8940a16333"},{url:"img/assets/pwa/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"15d9326b370b8f8d6824b357dd548aed"},{url:"img/assets/pwa/splash_screens/iPhone_14_Pro_landscape.png",revision:"151aa8ce15dc949daca8883c4e8a6e17"},{url:"img/assets/pwa/splash_screens/iPhone_14_Pro_Max_landscape.png",revision:"e81e5da8a759d7421cea8a6b2b0c8b7a"},{url:"img/assets/pwa/splash_screens/iPhone_14_Pro_Max_portrait.png",revision:"80cdbcedd147287f0bdb6017d5a93ede"},{url:"img/assets/pwa/splash_screens/iPhone_14_Pro_portrait.png",revision:"6591c2e9f12fd784384a94cba81caac3"},{url:"img/assets/pwa/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"7596e14903a9d94b9daee11a064c8f21"},{url:"img/assets/pwa/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"99a4624fe3513be3a5945193724da82f"},{url:"img/assets/pwa/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"b5f4eabdc6f2e10588df0e01d61ccfe9"},{url:"img/assets/pwa/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"583155323dd4cee6d365e7cc11d793f6"},{url:"img/assets/qr-code.svg",revision:"94374c31e06d2022e90544fd89718656"},{url:"img/favicons/favicon-114.png",revision:"1861cb2d4c8a8fe6cad9834f2e6ab892"},{url:"img/favicons/favicon-120.png",revision:"90e1df8665ac32b78d9ef3628416e70d"},{url:"img/favicons/favicon-144.png",revision:"197729e04f40c8b3f1e734b8fa1365fb"},{url:"img/favicons/favicon-150.png",revision:"ebf54863a327632d1dcf217d6e5d77f3"},{url:"img/favicons/favicon-152.png",revision:"81cc06d5f1f01f420ba6edb98488d6bf"},{url:"img/favicons/favicon-16.png",revision:"040fda1d970cf4c8532731c7e9c5bfd7"},{url:"img/favicons/favicon-160.png",revision:"9897cb0f6d97273076bced544cf6ebe2"},{url:"img/favicons/favicon-180.png",revision:"9731b08e09f64083ab8b8672f0042342"},{url:"img/favicons/favicon-192.png",revision:"167351fc8b39459f9a163004b2a79beb"},{url:"img/favicons/favicon-310.png",revision:"64a92825e946b417e1963e5f2487fcd2"},{url:"img/favicons/favicon-32.png",revision:"29f154e473036213ec6c9677ac146bc2"},{url:"img/favicons/favicon-57.png",revision:"ab6301b8431959e762bd70a88dc775e8"},{url:"img/favicons/favicon-60.png",revision:"b4ac7653055668a698caf7baa21fefbd"},{url:"img/favicons/favicon-64.png",revision:"762a645054f1b6289b8e8f4fde774a5e"},{url:"img/favicons/favicon-70.png",revision:"c3ee74474eae4661609cda762999c787"},{url:"img/favicons/favicon-72.png",revision:"1144c3bc069fbc2a78acb246ea6f8b07"},{url:"img/favicons/favicon-76.png",revision:"483daae6a10f38d5a87e2995ae693ca7"},{url:"img/favicons/favicon-96.png",revision:"deeb5b0f55356bae475a44b3d00d355d"},{url:"img/favicons/favicon.ico",revision:"a6af9d9ec3c6a8a800efc9f4966e8a5e"},{url:"index.html",revision:"1af6da242ff8a858741cee648f6293da"},{url:"js/alpine/alpine.min.js",revision:"4b5643f7d8641662eb58a3eee6009752"},{url:"js/alpine/i18n.min.js",revision:"753be9a5d046ce8ad63c84ab1d36b5e8"},{url:"js/alpine/timeout.min.js",revision:"fa1e44c82d3d31dbe5e1d97290f98435"},{url:"js/api.js",revision:"ce71ac56f2f9aefc7c3d19f9d0d8b303"},{url:"js/axios/axios.min.js",revision:"279e7f8937e4a0e8f5239bbb1533e7ce"},{url:"js/i18n.js",revision:"09e374db01a5d6866f3a89136c94b81f"},{url:"js/init.js",revision:"24c610e300c4dd9212e1e52353c3ed13"},{url:"js/installPromo.js",revision:"467f65e2c801ce23aa8c22fae8453df7"},{url:"js/moment/locales/ru.min.js",revision:"370194943c0b3b27923efcbfdd364573"},{url:"js/moment/moment.min.js",revision:"6c0a2330b0d8d6ea185d4669a0eddeab"},{url:"js/script.js",revision:"f05770501f1a1a2596a8dfa4cbcaf6af"},{url:"js/slip/slip.min.js",revision:"d9e035f83055ce57c0894350e12ba0ba"},{url:"js/splide/splide.min.js",revision:"0758be5332e68750471d7862fe1a6942"},{url:"js/sw/pusher.js",revision:"671a1d463000f9644886997d65b05606"},{url:"js/utils/domUtils.js",revision:"019aadb03b2034df675d7e888ea984c9"},{url:"js/utils/handlers.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/utils/objectUtils.js",revision:"7b2787ad668248f0119f161dbd5b09c6"},{url:"js/utils/request.js",revision:"db1790126c03b1957ef8fdaaa77e6f14"},{url:"js/utils/theme.js",revision:"5b54ef3bd575e049039ce866641d4404"},{url:"js/utils/translit.js",revision:"787b46317968193bef54f058c0671c35"},{url:"js/utils/weatherAPI.js",revision:"dcb62fe23f071788ab44200264d7073c"},{url:"manifest.webmanifest",revision:"7d201375d1954cd1a4ead3cb25de1911"},{url:"offline.html",revision:"b52ce52579b2d883f12f5f373c68a9c3"},{url:"safari-pinned-tab.svg",revision:"609bd5f23fbc03e8afcfbdf7913d469b"},{url:"service-worker.js",revision:"84a05688ceef3ddec28abefeae6fd803"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
