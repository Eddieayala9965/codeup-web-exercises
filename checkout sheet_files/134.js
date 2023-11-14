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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[134],{5984:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(2248),r=n(1364),o=n(355),s=n(2256),c=n(33),d=n(156),l=n(3100),u=function(e){function t(t){var n=e.call(this,t)||this;n.name="ViewInFolderAction";var a=n.resources;return n._actionMap=a.consume(o.e),n._itemSelectionHelper=new(n.child(s.e))({allowMultiSelect:!1,canFallback:!1}),n._navigationAction=new(n.managed(n._actionMap.NavigationAction))({url:n.createPureComputed(function(){return n._itemSelectionHelper.firstItem()&&n._itemSelectionHelper.firstItem().parentLink})}),Object(d.e)()&&(n._openInDesktopAction=new(n.managed(n._actionMap.OpenInDesktopAction))({openRelation:2,item:n._itemSelectionHelper.firstItem,actionType:l.e.OpenFileLocation})),n}return Object(a.__extends)(t,e),t.prototype.onExecute=function(e,t){return this._openInDesktopAction?this._openInDesktopAction.execute(e):this._navigationAction.execute(e)},t.prototype.onIsAvailable=function(){return!(this._openInDesktopAction&&!this._openInDesktopAction.isAvailable())&&Object(c.isFeatureEnabled)(c.EnableViewInFolder)&&this._navigationAction.isAvailable()},t.prototype.getEngagement=function(){return e.prototype.getEngagement.call(this).withPart(r.e,{item:this._itemSelectionHelper.firstItem})},t}(i.e);t.default=u}}]);