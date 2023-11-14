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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[1069],{7801:function(e,t,n){"use strict";n.r(t),n.d(t,"resourceKey",function(){return l});var a=n(0),i=n(2229),r=n(2245),o=n(2227),s=n(150),c=Object(s.e)(function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,n.ee(20,3828)];case 1:return[2,e.sent().ShareDialog]}})})}),d=function(e){function t(t,n){var a=e.call(this,t,n)||this;a.addBindingHandlers({control:i.n,react:r.t});var o={getSharingInformation:t.getSharingInformation,getClientId:t.getClientId,initializeShareFrame:t.initializeShareFrame,mode:t.mode,resolve:t.resolve,reject:t.reject,locale:t.locale,itemName:t.itemName||"",onModalClose:t.onModalClose,iFrameFullScreenOverride:!0};return a.reactBindingParams={componentType:c,props:o},a}return Object(a.__extends)(t,e),t}(o.e),l=Object(i.t)({automationName:"od-one-up-sharing-dialog",name:"OneUpSharingDialog",template:'<div id="sharingDialog" data-bind="react:reactBindingParams"></div>',viewModelType:d});t.default=l}}]);