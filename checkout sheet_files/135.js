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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[135],{5301:function(e,t,n){"use strict";n.d(t,"e",function(){return i});var a=n(2544),i=(new a.e("play"),new a.e("rotate"),new a.e("editCaption"),new a.e("editTags"),new a.e("removeTags"),new a.e("viewOriginal"));new a.e("applyOfficeLens"),new a.e("removeOfficeLens"),new a.e("addToAlbum"),new a.e("removeFromAlbum"),new a.e("addPhotosToAlbum")},7370:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(109),r=n(2248),o=n(2393),s=n(2256),c=n(3204),d=n(5301),l=function(e){function t(t){var n=e.call(this,t)||this;return n.name="ViewOriginal",n._itemCommandHelper=new(n.managed(o.e)),n._selectionHelper=new(n.child(s.e))({allowMultiSelect:!1,canFallback:!1,overrideItem:t.item}),n._url=n.observables.pureCompute(function(){var e=n._selectionHelper.firstItem(),t=e&&e.photo&&e.photo.originalUrl;return t&&t.replace(/#/g,"%23")}),n._navigationAction=new(n.managed(c.e))({url:n._url,target:"_blank"}),n}return Object(a.__extends)(t,e),t.prototype.onIsAvailable=function(){var e=this._selectionHelper.firstItem();return!!e&&!!this._url()&&this._itemCommandHelper.isCommandSupported(e,d.e)},t.prototype.onExecute=function(e,t){return this._url.peek()?this._navigationAction.execute(e):i.n.reject({})},t}(r.e);t.default=l}}]);