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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[109],{2773:function(e,t,n){"use strict";n.d(t,"t",function(){return u});var a=n(0),i=n(109),r=n(6),o=n(2225),s=n(375),c=n(1406),d=n(4),l=function(e){function t(t,n){void 0===n&&(n={});var a=e.call(this,t,n)||this;return a._getModule=t.getModule,a._path=t.path,a._getExecutorParams=t.getExecutorParams,d.e.isActivated("9DB5106C-820A-4714-B0C1-1005523DFE8F","07/09/2021","Removes usage of BundeLoader from ExecutorAction to solve race conditions in BundleQueue")&&(a._bundleLoader=a.resources.consume(s.e),a._bundleLoader.queueLoad(a._path,a._getModule).done()),a}return Object(a.__extends)(t,e),t.prototype.execute=function(e,t){var n=this;return this._path?this._loadExecutorType().then(function(a){return"function"!=typeof a?i.n.wrapError(new Error("Cannot create action from ".concat(a,": ").concat(n._path))):i.n.as(n._getExecutorParams()).then(function(r){var o=new(n.resources.injected(a))(r);return i.n.as(o.execute(e,t))})}):i.n.wrapError(new Error("Cannot create action from nothing: ".concat(this._path)))},t.prototype._loadExecutorType=function(){if(d.e.isActivated("9DB5106C-820A-4714-B0C1-1005523DFE8F","07/09/2021","Removes usage of BundeLoader from ExecutorAction to solve race conditions in BundleQueue")){var e=this._bundleLoader.loadNow(this._path,this._getModule);return this._loadExecutorType=function(){return e},e}return this._getModule().then(function(e){return Object(c.e)(e)})},t.dependencies=Object(a.__assign)({},o.n.dependencies),t}(o.n);t.e=l;var u=new r.t({name:"ExecutorLoader",factory:{dependencies:l.dependencies,create:function(e){return{instance:function(t){function n(n){return t.call(this,n,e)||this}return Object(a.__extends)(n,t),n}(l)}}}})},3128:function(e,t,n){"use strict";n.d(t,"e",function(){return d});var a=n(0),i=n("knockout-lib"),r=function(e){function t(t){var n=e.call(this,t)||this;return n.memoryContent=i.observable(null),n.serverContent=i.observable(null),n.outDated=i.observable(!1),n.isEditable=i.observable(!1),n.hasConflict=n.createPureComputed(n._computeHasConflict),n.hasPendingSave=n.createPureComputed(n._computeHasPendingSave),n.hasChanges=n.createPureComputed(n._computeHasChanges),n._lastSaved=i.observable(null),n._pendingSave=i.observable(null),n}return Object(a.__extends)(t,e),t.prototype.startingSave=function(){this.hasPendingSave.peek()||this._pendingSave(this.memoryContent.peek().text)},t.prototype.saveFailed=function(){this.hasPendingSave.peek()&&this._pendingSave(null)},t.prototype.saveSucceded=function(){this.hasPendingSave.peek()&&(this.updateETag=!0,this._lastSaved(this._pendingSave.peek()),this._pendingSave(null))},t.prototype._computeHasPendingSave=function(){return!!this._pendingSave()},t.prototype._computeHasChanges=function(){var e=this.memoryContent();if(!e||"string"!=typeof e.text)return!1;var t=this._lastSaved();return null===t?(this._lastSaved(e.text),!1):e.text!==t},t.prototype._computeHasConflict=function(){return!!this.serverContent()},t}(n(2225).n),o=n(663),s=n(57),c=function(){function e(e,t){this._itemContents={}}return e.prototype.getItemContent=function(e){var t=e.key,n=this._itemContents,a=n[t];return a||(a=new r,Object(o.e)(a,function(){delete n[t]}),n[t]=a),a},e.prototype.dispose=function(){this._itemContents={}},e}(),d=Object(s.r)("ItemContentProvider",c,{})},6361:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(109),r=n(2248),o=n(2773),s=n(2256),c=n(355),d=n(3128),l=n(2),u=n(117),f=n(37),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a.__extends)(t,e),t.prototype.getExecutorPath=function(){return"./SaveExecutor"},t.prototype.getModuleFactory=function(){return function(){return i.n.resolve(n.ee([110],7863))}},t}(function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;n.name="Save",n._itemContentsProvider=n.resources.consume(d.e),n._urlDataSource=n.resources.consume(u.he),n._selectionHelper=new(n.child(s.e))({overrideItem:t.item,allowMultiSelect:!1,canFallback:!1});var a=Object(l.Qo)(l.Z)?n._selectionHelper.currentItem.peek():n.resources.consume(c.r).peek(),i=n._urlDataSource.getKeyParams(a.key);return n._urlDataSource.getQueryType(i)===f.e.SharedWithMe&&(a=void 0),n._loader=new(n.managed(o.e))({path:n.getExecutorPath(),getModule:n.getModuleFactory(),getExecutorParams:function(){return{selectionHelper:n._selectionHelper,currentItem:a}}}),n}return Object(a.__extends)(t,e),t.prototype.onIsAvailable=function(){var e=this._selectionHelper.firstItem();if(!e)return!1;var t=this._itemContentsProvider.getItemContent(e);return!!t.isEditable()&&!!t.memoryContent()&&!t.hasConflict()&&!t.hasPendingSave()&&t.hasChanges()},t.prototype.onExecute=function(e){return this._loader.execute(e)},t}(r.e));t.default=p}}]);