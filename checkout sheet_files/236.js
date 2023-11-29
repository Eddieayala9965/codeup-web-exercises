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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[236],{3883:function(e,t,n){"use strict";function a(e){var t=e.serverRelativeItemUrl,n=e.dataRequestor,a=e.webApiUrl,i=e.duration,r=void 0===i?1:i,o=e.authToken,s=a;return s=(s=s.methodWithAliases("GetFileByServerRelativePath",{DecodedUrl:t})).method("GetPreAuthorizedAccessUrl",r),n.getData({url:s.toString(),method:"GET",authToken:o,qosName:"ItemDataSource.getDownloadUrl"}).then(function(e){return e.d.GetPreAuthorizedAccessUrl;});}n.d(t,"e",function(){return a;});},4933:function(e,t,n){"use strict";var a,i=n(0),r=n(1344),o=n(109);!(function(e){__WRAPPED_set(e,e.download=0,'=',"download"),__WRAPPED_set(e,e.view=1,'=',"view"),__WRAPPED_set(e,e.load=2,'=',"load"),__WRAPPED_set(e,e.share=3,'=',"share");}(a||(a={})));var s=a,c=n(180),d=n(129),l=n(490),u=n(210),f=n(202),p=n(3883),m=n(1199),_=n(4),h=(function(e){function t(t){var n=e.call(this,{},{pageContext:t})||this;return n._itemUrlHelper=new c.e({},{pageContext:t}),n._apiUrlHelper=new l.e({},{pageContext:t,itemUrlHelper:n._itemUrlHelper}),n;}return Object(i.__extends)(t,e),t.prototype.downloadItems=function(e){var t=e.items[0];return this.getDownloadUrl(t,null,{downloadType:s.download}).then(function(e){__WRAPPED_get(window,'location').href=e;});},t.prototype.getDownloadUrl=function(e,t,n){var a=this;void 0===n&&(n={});var i=n.downloadType,r=void 0===i?s.download:i,c=this._itemUrlHelper.getItemUrlParts(e.key);if(r===s.view)return o.n.resolve(Object(m.e)(c.fullItemUrl));if(r===s.share){var l;l=e.video?24:1;var h=this._apiUrlHelper.build().webByItemUrl(c);return Object(p.e)({dataRequestor:this.dataRequestor,webApiUrl:h,duration:l,serverRelativeItemUrl:c.serverRelativeItemUrl});}if(r===s.load)return c.isCrossDomain&&n.authToken?this.dataRequestor.getData({url:this._apiUrlHelper.contextInfoUrl(c.fullItemUrl),method:"POST",qosName:"GetContextInfo",authToken:n.authToken}).then(function(e){var t=e.d.GetContextWebInformation.WebFullUrl,n=new u.t({webAbsoluteUrl:t}).build().segment("web").methodWithAliases("GetFileByServerRelativePath",{DecodedUrl:c.serverRelativeItemUrl}).segment("OpenBinaryStream");return o.n.resolve(n.toString());}):o.n.resolve(this.getBinaryStreamApiUrl(c).toString());var b=void 0;if(t||c.siteRelation===d.a.sameSite){var g;g=t?this._itemUrlHelper.getItemUrlParts(t.key).fullItemUrl:this._pageContext.webAbsoluteUrl,b=o.n.resolve(g);}else b=!_.t.isActivated("3dd660dc-b6bd-411f-ae14-1f8134830f62","03/08/2023","Add feature to allow adding auth to getDownloadUrl for download type: Download.download scenario")&&n&&n.authToken&&c.isCrossDomain?this.dataRequestor.getData({url:this._apiUrlHelper.contextInfoUrl(c.fullItemUrl),method:"POST",qosName:"GetContextInfo",authToken:n.authToken}).then(function(e){return e.d.GetContextWebInformation.WebFullUrl;}):this.dataRequestor.getData({url:this._apiUrlHelper.contextInfoUrl(c.fullItemUrl),method:"POST",qosName:"GetContextInfo"}).then(function(e){return e.d.GetContextWebInformation.WebFullUrl;});return b.then(function(e){return"".concat(e,"/").concat(a._pageContext.layoutsUrl,"/download.aspx?").concat(Object(f.e)({SourceUrl:c.serverRelativeItemUrl}));});},t.prototype.getBinaryStreamApiUrl=function(e){var t=this._apiUrlHelper.build().webByItemUrl(e);t=(t=t.methodWithAliases("GetFileByServerRelativePath",{DecodedUrl:e.serverRelativeItemUrl})).segment("OpenBinaryStream");var n=this._pageContext.authToken;return n&&(t=t.oDataParameter("access_token",n)),t;},t;}(r.t));t.e=h;},5969:function(e,t,n){"use strict";n.r(t),n.d(t,"resourceKey",function(){return v;});var a=n(4933),i=n(1347),r=n(87),o=n(57),s=n(2388),c=n(2255),d=n(117),l=n(51),u=n(33),f=n(2643),p=n(356),m=n(158),_=n(290),h=n(52),b=n(10),g=(function(){function e(e,t){this._common=new a.e(t.pageContext),this._dataRequestor=new t.dataRequestorType({}),this._graphDataSource=t.graphDataSource,this._itemParentHelper=t.itemParentHelper,this._navigation=t.navigation,this._itemUrlHelper=t.itemUrlHelper,this._identityDataSource=t.identityDataSource;}return e.prototype.getDownloadUrl=function(e,t){void 0===t&&(t={});var n=Object(i.a)(this._itemParentHelper.getFacetedAncestorOrSelf(e,"subsite"));return this._common.getDownloadUrl(Object(f.n)(e),Object(f.n)(n),t);},e.prototype.getItemContents=function(e){var t=this;return this.getDownloadRequestParameters(e).then(function(e){var n=e.headers,a=n&&n.Authorization,i=a&&a.slice(7);return t._dataRequestor.getData({url:e.url,method:"GET",noRedirect:!0,qosName:"ItemDataSource.getItemContents",responseType:"blob",needsRequestDigest:!1,authToken:i});});},e.prototype.getDownloadRequestParameters=function(e,t){var n=this,a=this._itemUrlHelper.getItemUrlParts(e.key),i=new m.e(a.normalizedItemUrl);return a.isCrossDomain?this._identityDataSource.getSharePointToken(i.authority).then(function(t){var a=t.accessToken;return n.getDownloadUrl(e,{downloadType:2,authToken:a}).then(function(e){return{url:e,headers:{Authorization:"bearer ".concat(a)}};});}):this.getDownloadUrl(e,{downloadType:2}).then(function(e){return{url:e,withCredentials:!0};});},e.prototype.downloadItems=function(e){var t=this,n=e.items[0];return(Object(u.isFeatureEnabled)(u.UseVroomDownload)?this._graphDataSource.getDownloadUrl(n,{useDirectEndpoint:!0}):this.getDownloadUrl(n,{downloadType:0})).then(function(e){if(b.e.isActivated("f00a3568-c0f5-401d-b8da-584dfc24d99f","06/28/2021","Excel download issue"))t._navigation.navigateTo(e);else{var n=t._initIframe(e);setTimeout(function(){window.document.body.removeChild(n);},2e4);}});},e.prototype.isDownloadBlocked=function(e){return!h.e.hasPermission(e.permissions,h.e.openItems);},e.prototype._initIframe=function(e){var t=document.createElement("iframe");return t.src=e,t.style.display="none",window.document.body.appendChild(t),t;},e;}());t.default=g;var v=Object(o.r)("DownloadDataSource",g,{dataRequestorType:s.t,graphDataSource:d.y,itemParentHelper:c.e,navigation:r.e,pageContext:l.p,itemUrlHelper:p.s,identityDataSource:_.resourceKey});}}]);