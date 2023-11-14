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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[72],{7354:function(e,t,n){"use strict";n.r(t),n.d(t,"LaunchMoveCopyPickerHandler",function(){return u});var a=n(0),i=n(109),r=n(2225),o=n(4),s=n(52),c=n(2726),d=n(2256),l=o.e.isActivated("27f9c6a6-8575-4c8f-a864-61fb7dbcd5f4","09/05/2023","check for permission for copy to command in one up"),u=function(e){function t(t){var n=e.call(this,t)||this;if(n._isMove=!!t.isMove,n._itemSelectionHelper=new(n.resources.consume(d.e))({allowMultiSelect:!1,canFallback:!0}),l)n.state=n.createObservable({isAvailable:!0});else{var a=n._itemSelectionHelper.currentItem(),i=s.e.hasItemPermission(a,s.e.openItems);n.state=n.createObservable({isAvailable:i})}return n}return Object(a.__extends)(t,e),t.prototype.getParams=function(){return Object(a.__awaiter)(this,void 0,i.n,function(){var e;return Object(a.__generator)(this,function(t){switch(t.label){case 0:return e={isMove:this._isMove},[4,this._itemSelectionHelper.resolveSelection()];case 1:return[2,(e.currentItem=t.sent(),e)]}})})},t}(r.n),f=Object(c.e)({name:"LaunchMoveCopyPicker",source:{moduleDefinition:{path:"./LaunchMoveCopyPickerExecutor",getModule:function(){return Promise.resolve(n.ee([73,"odsp.react.lib"],7030))}}},useLocalBindingContext:!0,handlerType:u});t.default=f}}]);