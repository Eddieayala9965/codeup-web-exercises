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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[80],{7356:function(e,t,n){"use strict";n.r(t),n.d(t,"LaunchPdfMergeAction",function(){return c});var a=n(0),i=n(109),r=n(30),o=n(2248),s=n(2256),c=function(e){function t(t,n){void 0===n&&(n={});var a=e.call(this,t,n)||this;return a.name="LaunchPdfMergeAction",a._itemSelectionHelper=new(a.child(s.e))({overrideItem:t.item}),a._pdfViewerHelper=t.pdfViewerHelper,a.showHintStar=t.showHintStar,a}return Object(a.__extends)(t,e),t.prototype.onIsAvailable=function(){var e=this._itemSelectionHelper.firstItem();return!!e&&this._pdfViewerHelper.isPdfExtractAvailable(e)&&this._pdfViewerHelper.isPdfEditable(e)},t.prototype.onExecute=function(){return this._pdfViewerHelper.state.filePickerMode("merge"),this.showHintStar.peek()&&this.showHintStar(!1),i.n.wrap({resultType:r.t.Success})},t}(o.e);t.default=c}}]);