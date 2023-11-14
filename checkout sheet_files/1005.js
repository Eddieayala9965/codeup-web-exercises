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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[1005],{2419:function(e,t,n){"use strict";n.r(t),n.d(t,"DataBatchOperationHelper",function(){return o});var a=n(145),i=n(210),r=n(158),o=function(){function e(){}return e.getBatchOperationUrl=function(e,t){return new i.t({webAbsoluteUrl:!e&&t?new r.e(t).authority:e}).build().segment("$batch").toString()},e.processErrorResponse=function(e,t){var n={id:t};if((e=e.error?e.error:e)&&e.code){var a=e.code?e.code.split(","):e.error.code.split(","),i=Number(a[0]),r=e.message.value;n.error={code:i,message:r}}return{items:[n]}},e.getBatchResponseText=function(e){var t,n,a,i=[];if(e.split("\n").length>0&&(t=e.split("\n")[0]),t){n=(e=e.replace(t.trim()+"--","")).split(t);for(var r=1;r<n.length;r++)(a=n[r].split("\n\r")).length>2&&i.push(a[2])}return i},e.processBatchResponse=function(e,t,n){var a,i,r,o,s=[],c=!1;if(e&&e.split("\n").length>0&&(a=e.split("\n")[0]),a){i=(e=e.replace(a.trim()+"--","")).split(a);for(var d=1;d<i.length;d++)if((r=i[d].split("\n\r")).length>2){try{o=JSON.parse(r[2])}catch(e){o=r[2]}var l=t&&t[d-1],u=l?{key:l.key,id:l.id,newId:n?n+"/"+l.name:null}:{};if((o=o.error?o.error:o)&&o.code){var f=o.code?o.code.split(","):o.error.code.split(","),p=Number(f[0]),m=o.message.value;u.error={code:p,message:m},c=!0}s.push(u)}}return{items:s,hasError:c}},e.getBatchContent=function(e,t,n,i){for(var r=[],o=0;o<t.length;o++){for(var s=t[o],c=a.e.generate(),d=[],l=0;l<s.length;l++){var u=s[l];d.push("--changeset_"+c),d.push("Content-Type: application/http"),d.push("Content-Transfer-Encoding: binary"),d.push(""),d.push(n+" "+u+" HTTP/1.1"),d.push(i),d.push("")}d.push("--changeset_"+c+"--");var f=d.join("\r\n");r.push("--batch_"+e),r.push('Content-Type: multipart/mixed; boundary="changeset_'+c+'"'),r.push("Content-Length: "+f.length),r.push("Content-Transfer-Encoding: binary"),r.push(""),r.push(f),r.push("")}return r.push("--batch_"+e+"--"),r.join("\r\n")},e.getBatchContentExtended=function(e,t,n,i,r,o,s){var c=a.e.generate(),d=[];r&&r.length!==t.length&&(r=null);for(var l=0;l<t.length;l++){var u=t[l];d.push("--changeset_"+c),d.push("Content-Type: application/http"),d.push("Content-Transfer-Encoding: binary"),d.push(""),s?d.push(s[l]+" "+u+" HTTP/1.1"):d.push(n+" "+u+" HTTP/1.1"),d.push(i),o&&d.push(o),r&&(d.push(""),d.push(r[l])),d.push("")}d.push("--changeset_"+c+"--");var f=d.join("\r\n");return(d=[]).push("--batch_"+e),d.push('Content-Type: multipart/mixed; boundary="changeset_'+c+'"'),d.push("Content-Length: "+f.length),d.push("Content-Transfer-Encoding: binary"),d.push(""),d.push(f),d.push(""),d.push("--batch_"+e+"--"),d.join("\r\n")},e.defaultBatchRequestPostData="Content-Type: application/json;odata=verbose",e.defaultBatchAcceptData="accept: application/json;odata=verbose",e}();t.default=o},4086:function(e,t,n){"use strict";n.d(t,"e",function(){return f});var a=n(0),i=n(327),r=n(109),o=n(246),s=n(2419),c=n(145),d=n(1354),l=n(582),u=n(4),f=function(e){function t(t){var n=e.call(this,{dataSourceName:"UserExpirationDataSource",id:"UserExpirationDataSource"},{pageContext:t.pageContext})||this;n._dataRequestor=new i.t({qosName:"UserExpirationDataSource",pageContext:t.pageContext});var a=Object(o.o)(t.pageContext);return n._getExpiringUsersUrl=a+"/_api/web/SiteUserInfoList/GetItems",n._setUserExpirationUrl=a+"/_api/web/SiteUsers/GetById(@a)",n._expireUserUrl=a+"/_api/web/SiteUsers/GetById(@a)/Expire",n._externalUserExpirationPolicyUrl=a+"/_api/Site/ExternalUserExpirationInDays",n}return Object(a.__extends)(t,e),t.prototype.setUserExpiration=function(e,t){var n=this;if(!e||e.length<1)return r.n.reject([!1]);if(e.length>1){var a=c.e.generate(),i="multipart/mixed; boundary=batch_"+a,o=[],d=[],l=[];e.forEach(function(e){o.push(n._setUserExpirationUrl+"?@a="+e.id),d.push(JSON.stringify({__metadata:{type:"SP.User"},Expiration:t?t.toISOString():""})),l.push("PATCH")});var u=this._dataRequestor.getData({url:s.default.getBatchOperationUrl(this._pageContext.webAbsoluteUrl),parseResponse:function(e){return e},qosName:"SetUserExpirations",additionalPostData:s.default.getBatchContentExtended(a,o,"PATCH",s.default.defaultBatchRequestPostData,d,s.default.defaultBatchAcceptData,l),method:"POST",contentType:i,noRedirect:!0,needsRequestDigest:!0});return this.flushCache(),u.then(function(e){var t=s.default.processBatchResponse(e);return t.hasError?r.n.reject(t):t}).then(function(e){return e.items.map(function(){return!0})},function(e){return e.items.map(function(e){return!e.error})})}var f=this._setUserExpirationUrl+"?@a="+e[0].id,p={__metadata:{type:"SP.User"},Expiration:t?t.toISOString():""};return this.flushCache(),this._dataRequestor.getData({url:f,parseResponse:function(e){return[!e]},qosName:"SetUserExpiration",additionalPostData:JSON.stringify(p),method:"POST",additionalHeaders:{"X-HTTP-Method":"PATCH"},noRedirect:!0,needsRequestDigest:!0})},t.prototype.expireUser=function(e){var t=this;if(!e||e.length<1)return r.n.reject([!1]);if(e.length>1){var n=c.e.generate(),a="multipart/mixed; boundary=batch_"+n,i=[],o=[];e.forEach(function(e){i.push(t._expireUserUrl+"?@a="+e.id),o.push("POST")});var d=this._dataRequestor.getData({url:s.default.getBatchOperationUrl(this._pageContext.webAbsoluteUrl),parseResponse:function(e){return e},qosName:"BatchExpireUser",additionalPostData:s.default.getBatchContentExtended(n,i,"POST",s.default.defaultBatchRequestPostData,[],s.default.defaultBatchAcceptData,o),method:"POST",contentType:a});return this.flushCache(),d.then(function(e){var t=s.default.processBatchResponse(e);return t.hasError?r.n.reject(t):t}).then(function(e){return e.items.map(function(){return!0})},function(e){return e.items.map(function(e){return!e.error})})}var l=this._expireUserUrl+"?@a="+e[0].id;return this.flushCache(),this._dataRequestor.getData({url:l,parseResponse:function(e){if(e){var t=JSON.parse(e);if(t&&t.d)return[!0]}return[!1]},qosName:"ExpireUser",method:"POST"})},t.prototype.getUsersWithExpirationsWithCache=function(e,t,n,a,i,r){var o=[];n&&o.push("$top="+n),a&&o.push("$skip="+a),e&&o.push("$orderby=".concat(e," ").concat(t?"asc":"desc")),i&&o.push("$filter="+i),o.push("$select=Title,ID,Name,UserExpiration,IsSiteAdmin,EMail");var s=this._getExpiringUsersUrl;return o.length>0&&(s+="?"+o.join("&")),this.getDataUtilizingPersistentCache({url:s,parseResponse:function(e){var t=JSON.parse(e);return t&&t.d&&t.d.results?t.d.results.map(function(e){return{id:e.ID,loginName:e.Name,email:e.EMail,expiration:new Date(e.UserExpiration),title:e.Title,isSiteAdmin:e.IsSiteAdmin}}):e},qosName:"GetUsersWithExpirations",additionalPostData:JSON.stringify({query:{__metadata:{type:"SP.CamlQuery"},ViewXml:"<View><Query><Where><IsNotNull><FieldRef Name='UserExpiration'/></IsNotNull></Where></Query></View>"}}),method:"POST",cachingStrategy:r})},t.prototype.getUsersWithExpirations=function(e,t,n,a,i){var r=this;return this.getUsersWithExpirationsWithCache(e,t,n,a,i,l.e.useCacheIfNotExpired).then(function(o){var s=r.hasSiteUsersExpiringSoon(o),c=r._pageContext.HasSiteUsersExpiringSoon===s;return u.t.isActivated("8A69325A-D039-420F-A576-FA103612FAD5","7/29/2021","Bypass cache to match pageContext expiringUser count")||0!==a||c?o:r.getUsersWithExpirationsWithCache(e,t,n,a,i,l.e.bypassCache)})},t.prototype.hasSiteUsersExpiringSoon=function(e){var t=new Date;return t.setDate(t.getDate()+21),e&&e.some(function(e){return e.expiration&&e.expiration<t})},t.prototype.getExternalUserExpirationPolicy=function(){return this._dataRequestor.getData({url:this._externalUserExpirationPolicyUrl,parseResponse:function(e){if(e){var t=JSON.parse(e);if(t&&t.d&&t.d.ExternalUserExpirationInDays)return t.d.ExternalUserExpirationInDays}return 0},qosName:"GetExternalUserExpirationPolicy",method:"GET",needsRequestDigest:!0})},t}(d.t);t.t=f},7331:function(e,t,n){"use strict";n.r(t),n.d(t,"resourceKey",function(){return s});var a=n(6),i=n(51),r=n(4086),o={pageContext:i.p},s=new a.t({name:"UserExpirationDataSource",factory:{dependencies:o,create:function(e){var t=e.pageContext,n=new r.t({pageContext:t});return{instance:n,disposable:n}}}})}}]);