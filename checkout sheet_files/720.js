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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[720],{5018:function(e,t,n){"use strict";n.d(t,"e",function(){return c;});var a=n(4),i=n(57),r=n(50),o=n(47),s=(function(){function e(e,t){this._urlCache={};var n=t.window,a=void 0===n?window:n;this._window=a,this._spDomain=new r.e(t.pageContext.webAbsoluteUrl).authority;}return e.prototype.getWorkerUrl=function(e,t){var n=this._window,i="".concat(__WRAPPED_get(n,'location').protocol,"//").concat(__WRAPPED_get(n,'location').host),o=new r.e(e);if(t||o.authority!==i){if(i===this._spDomain)return t?a.t.isActivated("8D1D231B-1277-4388-8F0B-B05D331C2938","05/30/2022","Use osdpserviceworkerproxy to replace serviceworkerproxy")?"".concat(i,"/_layouts/15/serviceworkerproxy.aspx?swManifestName=").concat(encodeURIComponent(t),"&hasRequireJsDependency=false"):"".concat(i,"/_layouts/15/odspserviceworkerproxy.aspx?swManifestName=").concat(encodeURIComponent(t),"&debug=false&bypass=false"):"".concat(i,"/_layouts/15/serviceworkerproxy.aspx?serviceWorkerUrl=").concat(encodeURIComponent(e));var s=this._urlCache;if(__WRAPPED_get(s,e))return __WRAPPED_get(s,e);var c=n.URL.createObjectURL(new Blob(["importScripts(".concat(JSON.stringify(e),");")],{type:"text/javascript"}));return __WRAPPED_set(s,e,'=',c),c;}return e;},e.prototype.dispose=function(){var e=this._urlCache;for(var t in e)e.hasOwnProperty(t)&&this._window.URL.revokeObjectURL(__WRAPPED_get(e,t));},e;}()),c=Object(i.r)("WorkerDataSource",s,{pageContext:o.e});},7317:function(e,t,n){"use strict";n.r(t);var a=n(5018);n.d(t,"resourceKey",function(){return a.e;});}}]);