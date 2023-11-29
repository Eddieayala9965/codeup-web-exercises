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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[543],{3503:function(e,t,n){"use strict";var a,i=n(0),r=n(109),o=n(172);function s(e){return!!e.fileHandler}function c(e){return s(e)&&!!e.promoted}function d(e){return s(e)&&!!e.builtIn}function l(e){return s(e)&&e.hidden}!function(e){e[e.Schema=4]="Schema"}(a||(a={}));var u=/^(?:data|blob|javascript):/i,f=/^(?:data|http|https):/i;function p(e){return!u.test(e)}var m={svg:!0,png1x:!0,png1_5x:!0,png2x:!0};function _(e){var t,n;if(e)for(var a in e)if(m.hasOwnProperty(a)){var i=(n=e[a])&&f.test(n)?n:void 0;i&&(t||(t={}),t[a]=i)}return t}function h(e){return{file:e.file,folder:e.folder,allowMultiSelect:e.allowMultiSelect}}var b=function(){function e(e,t){this._dataRequestor=t.dataRequestor,this._prefetchCache=t.prefetchCache,this._localFileHandlerProvider=t.localFileHandlerProvider}return e.prototype.getFileHandlerData=function(e){return Object(i.__awaiter)(this,void 0,r.n,function(){var t,n,r,u,f,m,b,g,v,y,S,D,I,x,C,O,w,E,A,L=this;return Object(i.__generator)(this,function(k){switch(k.label){case 0:if(n=(t=e||{}).language,r=void 0===n?o.t.language:n,u=t.accessToken,f=void 0===u?void 0:u,m=t.endpoint,b=void 0===m?"":m,g=t.includePromotedApp,v=void 0!==g&&g,y=t.driveId,S=void 0===y?void 0:y,D=t.allowCookies,I=void 0===D?void 0:D,x=b+"/drive",S&&(x="me"===S?"".concat(b,"/me/drive"):"".concat(b,"/drives/").concat(S)),C=function(e){return Object(i.__awaiter)(L,void 0,void 0,function(){var t,n,r,o,u,f,m,b,g,y,S,D,I,x,C,O,w,E,A,L,k,M,P,T,U,F,H,R,N,B,j,V,z;return Object(i.__generator)(this,function(G){switch(G.label){case 0:return t={custom:[],create:[],open:[],preview:[]},n={},this._localFileHandlerProvider?(o=[[]],[4,this._localFileHandlerProvider.getLocalFileHandlers()]):[3,2];case 1:return r=i.__spreadArray.apply(void 0,[i.__spreadArray.apply(void 0,o.concat([G.sent(),!0])),e.value,!0]),[3,3];case 2:r=e.value,G.label=3;case 3:for(u=0,f=r;u<f.length;u++)if(s(m=f[u])&&!l(m)&&(b=v?c(m):void 0,g=d(m),y=m.application,S=m.id,D=m.actions,I=m.fileHandler,D&&(x=I.fileTypeDisplayName,C=I.fileTypeIconUrl,O=I.version)))for(w={id:S,appId:y.id,actionMenuDisplayName:I.actionMenuDisplayName,displayName:y.displayName,appIcon:_(I.appIcon),version:O,fileTypeDisplayName:x,fileTypeIcon:_(I.fileTypeIcon||{png1x:C}),isPromoted:b,isBuiltIn:g},E=0,A=0,L=D;A<L.length;A++)if(k=L[A],(M=k.url)&&p(M)&&(P=k.displayName,T=k.shortDisplayName,U=k.icon,F=k.availableOn)){switch(H="newFile"===k.type?"create":k.type,R={type:H,url:M,displayName:P,icon:_(U),availableOn:h(F),handler:w,id:E},N=F.file,B=N&&N.extensions,H){case"custom":if(!P)continue;if(R.shortDisplayName=T,!N&&!F.folder)continue;break;case"create":if(!B||!B[0])continue;break;case"open":case"preview":if(!N)continue;if(B&&!b)for(j=0,V=B;j<V.length;j++)z=V[j],(n[z]||(n[z]={open:[],preview:[]}))[H].push(R);break;default:continue}t[H].push(R),E++}return[2,{actions:t,preferences:n,version:a.Schema}]}})})},O=x+"/apps?"+(v?"select=*,promoted,builtIn&":"")+"$expand=actions",w="GetDriveApps",E=function(){return Object(i.__awaiter)(L,void 0,void 0,function(){var e;return Object(i.__generator)(this,function(t){switch(t.label){case 0:return[4,this._dataRequestor.send({path:O,apiName:w,headers:{"Accept-Language":r},accessToken:f,useAuthorizationHeaders:!!f,allowCookies:I})];case 1:return e=t.sent(),[4,C(e)];case 2:return[2,t.sent()]}})})},!this._prefetchCache)return[3,5];k.label=1;case 1:return k.trys.push([1,4,,5]),[4,this._prefetchCache.getData({url:O,body:"",qosName:w})];case 2:return A=k.sent(),[4,C(A)];case 3:return[2,k.sent()];case 4:return k.sent(),[3,5];case 5:return[4,E()];case 6:return[2,k.sent()]}})})},e}();t.e=b},7319:function(e,t,n){"use strict";n.r(t),n.d(t,"resourceKey",function(){return s});var a=n(57),i=n(1202),r=n(3503),o=n(1702),s=Object(a.r)("FileHandlerDataSource",r.e,{dataRequestor:i.e,localFileHandlerProvider:o.e})}}]);