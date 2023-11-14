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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[23],{2773:function(e,t,n){"use strict";n.d(t,"t",function(){return u});var a=n(0),i=n(109),r=n(6),o=n(2225),s=n(375),c=n(1406),d=n(4),l=function(e){function t(t,n){void 0===n&&(n={});var a=e.call(this,t,n)||this;return a._getModule=t.getModule,a._path=t.path,a._getExecutorParams=t.getExecutorParams,d.e.isActivated("9DB5106C-820A-4714-B0C1-1005523DFE8F","07/09/2021","Removes usage of BundeLoader from ExecutorAction to solve race conditions in BundleQueue")&&(a._bundleLoader=a.resources.consume(s.e),a._bundleLoader.queueLoad(a._path,a._getModule).done()),a}return Object(a.__extends)(t,e),t.prototype.execute=function(e,t){var n=this;return this._path?this._loadExecutorType().then(function(a){return"function"!=typeof a?i.n.wrapError(new Error("Cannot create action from ".concat(a,": ").concat(n._path))):i.n.as(n._getExecutorParams()).then(function(r){var o=new(n.resources.injected(a))(r);return i.n.as(o.execute(e,t))})}):i.n.wrapError(new Error("Cannot create action from nothing: ".concat(this._path)))},t.prototype._loadExecutorType=function(){if(d.e.isActivated("9DB5106C-820A-4714-B0C1-1005523DFE8F","07/09/2021","Removes usage of BundeLoader from ExecutorAction to solve race conditions in BundleQueue")){var e=this._bundleLoader.loadNow(this._path,this._getModule);return this._loadExecutorType=function(){return e},e}return this._getModule().then(function(e){return Object(c.e)(e)})},t.dependencies=Object(a.__assign)({},o.n.dependencies),t}(o.n);t.e=l;var u=new r.t({name:"ExecutorLoader",factory:{dependencies:l.dependencies,create:function(e){return{instance:function(t){function n(n){return t.call(this,n,e)||this}return Object(a.__extends)(n,t),n}(l)}}}})},2792:function(e,t,n){"use strict";var a=n(0),i=n(2773),r=function(e){function t(t){void 0===t&&(t={});var n,a=e.call(this,t)||this;return n=a.useGlobalResources()?a.resources.consume(i.t):a.managed(i.e),a._loader=new n({path:a.getExecutorPath(),getModule:a.getModuleFactory(),getExecutorParams:function(){return a.selectionHelper.resolveSelection().then(function(e){return a.getExecutorParameters({selection:e})})}}),a}return Object(a.__extends)(t,e),t.prototype.useGlobalResources=function(){return!1},t.prototype.onExecute=function(e,t){return this._loader.execute(e,t)},t}(n(2952).e);t.e=r},2952:function(e,t,n){"use strict";var a=n(0),i=n(2248),r=n(2393),o=n(2256),s=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;return n.itemCommandHelper=new(n.managed(r.e)),n.selectionHelper=new(n.child(o.e))(Object(a.__assign)(Object(a.__assign)({},n.getSelectionOptions(t)),{overrideItem:t.item})),n}return Object(a.__extends)(t,e),t.prototype.getSelectionOptions=function(e){return void 0===e&&(e={}),{}},t}(i.e);t.e=s},5971:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(109),r=n(52),o=n(2792),s=n(355),c=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;return n.name="Delete",n._currentItem=n.resources.consume(s.r),n}return Object(a.__extends)(t,e),t.prototype.getExecutorPath=function(){return"./DeleteExecutor"},t.prototype.getModuleFactory=function(){return function(){return i.n.resolve(n.ee([24],5190))}},t.prototype.getSelectionOptions=function(){return{allowMultiSelect:!0,canFallback:!1}},t.prototype.getExecutorParameters=function(){return{selectionHelper:this.selectionHelper,currentItem:this._currentItem.peek()}},t.prototype.onIsAvailable=function(){return this._currentItem()&&this.selectionHelper.filterItems(function(e){return!e.list&&r.e.hasItemPermission(e,r.e.deleteListItems)})},t}(o.e);t.default=c}}]);