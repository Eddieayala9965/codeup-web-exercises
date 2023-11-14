 if (typeof __JSWRAPPER === 'undefined' || (!__JSWRAPPER.initialized())) {
     if ((typeof ServiceWorkerContainer !== 'undefined' && self instanceof ServiceWorkerContainer) || (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)) {
         importScripts('https://mcas-proxyweb.mcas-gov.us/js-bootstrap.js?saasId=11394&type=WORKER&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin));
     } else {
         /* eslint-disable */
         eval(function () {
             var x = (typeof __caac__ !== "undefined" && typeof __caac__.xhr !== "undefined") ? new __caac__.xhr() : new XMLHttpRequest();
             x.open = (typeof __caac__ !== "undefined" && typeof __caac__.xhro !== "undefined") ? __caac__.xhro : x.open;
             x.send = (typeof __caac__ !== "undefined" && typeof __caac__.xhrs !== "undefined") ? __caac__.xhrs : x.send;
             x.open('GET', 'https://mcas-proxyweb.mcas-gov.us/js-bootstrap.js?saasId=11394&type=WINDOW&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin), false);
             x.withCredentials = true;
             x.send();
             return x.responseText;
         }());
         /* eslint-enable */
     }
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[1026],{2646:function(e,t,n){"use strict";var a,i;function r(e,t){return a&&i===e||(a=function(e,t){var n,a=t||window._spPageContextInfo;return a&&(n=e.webThemeProvider(a)),n}(e,t),i=e),a}n.d(t,"e",function(){return r})},5839:function(e,t,n){"use strict";n.r(t),n.d(t,"FontPackagesClient",function(){return d}),n.d(t,"ThemeInitializer",function(){return l});var a=n(92);n.d(t,"flushStyles",function(){return a.t});var i=n(109),r=n(2646),o=n(18),s=n(816),c=n(1213),d={ODB:61259};Object(s.r)("body");var l=function(){function e(){}return e.initializeTheme=function(t,n,s,d,l){window.__loadTheme=o.U,(window.FabricConfig=window.FabricConfig||{}).fontBaseUrl="";var u=window._spModuleLink;if(u&&u.libraries&&u.libraries.length>0&&Object(a.e)(1),e._useOverrideTheme)return i.n.resolve(Object(o.M)());var f=Object(r.e)(t,n);return f?(e._themePromise=f.loadFullFormattedThemeData(s).then(function(e){var t=e||{};if(Object(c.n)()&&t.fontFaces)for(var a=0,i=t.fontFaces;a<i.length;a++){var r=i[a],o=new FontFace(r.fontFamily,"url(".concat(r.path,")"));document.fonts.add(o),o.load()}return Object(c.a)(t,n,d,l),e}),e._themePromise):i.n.resolve(Object(c.a)({},n,d))},e.overrideTheming=function(t,n){t&&Object(c.a)(t,n,!0),e._useOverrideTheme=!0,e._themePromise&&e._themePromise.cancel()},e._useOverrideTheme=!1,e}();window.FabricConfig&&window.FabricConfig.legacyTheme&&l.overrideTheming()}}]);