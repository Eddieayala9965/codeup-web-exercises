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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[1183],{7318:function(e,t,n){"use strict";n.r(t),n.d(t,"resourceKey",function(){return m});var a=n(0),i=n(2225),r=n(57),o=n(259),s=n(51),c=n(169),d=n(50),l=n(152),u=n(237),f=n(603),p=function(e){function t(t,n){void 0===t&&(t={});var a=e.call(this,t,n)||this;a._rawDataSignal=new o.e,a._itemCacheStore=n.itemCacheStore,a._pageContext=n.pageContext;var i=a._itemCacheStore.dispatch(a._getFileHandlerDataFromItemsCacheStore());return i?a.setFileHandlerData(i):a.setFileHandlerData(void 0),a}return Object(a.__extends)(t,e),t.prototype.getFileHandlerData=function(e){return this._rawDataSignal.getPromise().then(function(t){if(t)return e&&e.includePromotedApp!==t.signature.includePromotedApp?void 0:t.data})},t.prototype.setFileHandlerData=function(e){this._rawDataSignal.complete(e)},t.prototype._getFileHandlerDataFromItemsCacheStore=function(){var e=this;return function(t){var n=e._pageContext.webAbsoluteUrl,a=new d.e(n).authority+"/_api/v2.0",i=u.t.serialize({endpoint:a});return t(Object(l.e)(function(e){return e.demandItemFacet(c.c,i)}))}},t.dependencies=Object(a.__assign)(Object(a.__assign)({},i.n.dependencies),{itemCacheStore:f.e,pageContext:s.p}),t}(i.n);t.default=p;var m=Object(r.r)("FileHandlerCacheDataSource",p)}}]);