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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[78],{3300:function(e,t,n){"use strict";var a;n.d(t,"e",function(){return a}),function(e){e[e.View=0]="View",e[e.Edit=1]="Edit",e[e.Extract=2]="Extract",e[e.Esign=3]="Esign"}(a||(a={}))},7347:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(3300),r=n(109),o=n(30),s=n(2248),c=n(955),d=n(375),l=n(2256),u=function(e){function t(t){var n=e.call(this,t)||this;return n.name="EditPdf",n._itemSelectionHelper=new(n.child(l.e))({overrideItem:t.item}),n._pdfViewerHelper=t.pdfViewerHelper,n._teachingBubbleProvider=n.resources.consume(d.I.optional),n}return Object(a.__extends)(t,e),t.prototype.onIsAvailable=function(){var e=this._itemSelectionHelper.firstItem();return!!e&&this._pdfViewerHelper.isPdfEditAvailable(e)&&this._pdfViewerHelper.isPdfEditable(e)},t.prototype.onExecute=function(){return this._pdfViewerHelper.state.currentMode(i.e.Edit),this._teachingBubbleProvider&&this._teachingBubbleProvider.markBubbleAsDismissed(c.PDF_EDIT),r.n.wrap({resultType:o.t.Success})},t}(s.e);t.default=u}}]);