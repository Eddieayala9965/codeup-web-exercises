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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[96],{7375:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenInClipchampAction",function(){return p});var a=n(0),i=n(2248),r=n(117),o=n(2256),s=n(1538),c=n(356),d=n(109),l=n(30),u=n(712),f=n(47),p=function(e){function t(t,n){void 0===t&&(t={}),void 0===n&&(n={});var a=e.call(this,t,n)||this;a.name="OpenInClipchamp";var i=a.resources;a._clientName=a.resources.consume(u.e.optional);var s=n.urlDataSource,d=void 0===s?i.consume(r.he):s,l=n.itemUrlHelper,p=void 0===l?i.consume(c.s):l;return a._urlDataSource=d,a._itemUrlHelper=p,a.itemSelectionHelper=new(a.child(o.e))({overrideItem:t.item}),a._item=a.itemSelectionHelper.firstItem(),a._url=a.createPureComputed(a._computeUrl),a._pageContext=a.resources.consume(f.e),a}return Object(a.__extends)(t,e),t.prototype.onIsAvailable=function(){return!!this._url()&&(e=Object(s.t)(this._pageContext.canUserUseClipchamp)?!(void 0===this._urlDataSource.getClipchampDriveItemUrl):!(void 0===this._urlDataSource.getOpenInClipchampUrl),Object(s.e)(this._item,this._pageContext.canUserUseClipchamp)&&e);var e},t.prototype.onExecute=function(e){return this._item?(window.open(this._url(),"_blank"),d.e.resolve({resultType:l.t.Success})):d.e.resolve({resultType:l.t.Failure})},t.prototype._computeUrl=function(){var e=this._item.key&&this._itemUrlHelper.getItemUrlParts(this._item.key),t={itemWebUrl:null==e?void 0:e.fullWebUrl,referrer:this._clientName,referrerScenario:"OpenInClipchamp"};return Object(s.t)(this._pageContext.canUserUseClipchamp)?this._urlDataSource.getClipchampDriveItemUrl(this._item,t):this._urlDataSource.getOpenInClipchampUrl(this._item,t)},t}(i.e);t.default=p}}]);