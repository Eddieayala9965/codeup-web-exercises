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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([["deferred.odsp-common"],{424:function(e,t,n){"use strict";n.r(t),n.d(t,"getFirstConsistentlyInteractive",function(){return i});var a=n(752);function i(e){return void 0===e&&(e={}),"PerformanceLongTaskTiming"in window?new a.e(e).getFirstConsistentlyInteractive():Promise.resolve(null)}n.d(t,"restartLongTaskObserver",function(){return a.t})},581:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"n",function(){return r}),n.d(t,"t",function(){return o}),n.d(t,"e",function(){return s});var a=n(0),i={unknown:0,subject:1,intent:2,component:3,event:4,error:5},r=function(){function e(e,t,n){void 0===n&&(n={}),this.name=e,this.type=t;var a=n.getEngagementData;a&&(this.getEngagementData=a)}return e.prototype.matches=function(e){return e.part===this},e.prototype.getEngagementData=function(e){return{}},e}(),o=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={});var n=t.engagementSource,a=(void 0===n?{contexts:[]}:n).contexts.slice(0);this.contexts=a}return e.prototype.fromSource=function(e){return e?this.clone(Object(a.o)(Object(a.o)([],e.contexts,!0),this.contexts,!0)):this},e.prototype.withPart=function(e,t){if(void 0===t&&(t={}),e){var n=Object(a.e)(Object(a.e)({},t||{}),{part:e});return this.clone(Object(a.o)(Object(a.o)([],this.contexts,!0),[n],!1))}return this},e.prototype.clone=function(t){return new e({},{engagementSource:{contexts:t}})},e}(),s=new o},752:function(e,t,n){"use strict";n.d(t,"t",function(){return l}),n.d(t,"e",function(){return u});var a=n(0),i=0,r=["img","script","iframe","link","audio","video","source"];function o(e,t){for(var n=0,a=e;n<a.length;n++){var i=a[n];if(t.includes(i.nodeName.toLowerCase())||o(i.children,t))return!0}return!1}function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];c()&&console.log.apply(console,e)}function c(){try{if("sessionStorage"in window&&window.sessionStorage){var e=window.sessionStorage.enableTTILogging;return e&&"true"===e.toLowerCase()&&"undefined"!=typeof console&&!!console}}catch(e){}return!1}function d(e,t){if(e.length>2)return performance.now();for(var n=[],a=0,i=t;a<i.length;a++){var r=i[a];n.push({timestamp:r.start,type:"requestStart"}),n.push({timestamp:r.end,type:"requestEnd"})}for(var o=0,s=e;o<s.length;o++){var c=s[o];n.push({timestamp:c,type:"requestStart"})}n.sort(function(e,t){return e.timestamp-t.timestamp});for(var d=e.length,l=n.length-1;l>=0;l--){var u=n[l];switch(u.type){case"requestStart":d--;break;case"requestEnd":if(++d>2)return u.timestamp;break;default:throw Error("Internal Error: This should never happen")}}return 0}function l(){window.__tti&&window.__tti.o.observe({entryTypes:["longtask"]})}var u=function(){function e(e){void 0===e&&(e={});var t=this;this._useMutationObserver=!!e.useMutationObserver,this._trackNetworkRequests=!!e.trackNetworkRequests,this._minValue=e.minValue||null,this._requiredMainThreadQuietnessDurationInMilliseconds=e.requiredMainThreadQuietnessDurationInMilliseconds||5e3,this._requiredNetworkQuietnessDurationInMilliseconds=e.requiredNetworkQuietnessDurationInMilliseconds||5e3;var n=window.__tti&&window.__tti.e,a=window.__tti&&window.__tti.o;this._longTaskId=0,n?(s("Consuming the long task entries already recorded."),this._longTasks=n.map(function(e){return t._createLongTask(e)}),window.__tti.e=[]):this._longTasks=[],a&&a.disconnect(),this._networkRequests=[],this._incompleteJSInitiatedRequestStartTimes=new Map,this._timerId=void 0,this._timerActivationTime=-1/0,this._scheduleTimerTasks=!1,this._firstConsistentlyInteractiveResolver=null,this._performanceObserver=null,this._mutationObserver=null,this._registerListeners(this._trackNetworkRequests)}return e.prototype.getFirstConsistentlyInteractive=function(){var e=this;return new Promise(function(t,n){e._firstConsistentlyInteractiveResolver=t,"complete"===document.readyState?e.startSchedulingTimerTasks():window.addEventListener("load",function(){e.startSchedulingTimerTasks()})})},e.prototype.startSchedulingTimerTasks=function(){s("Enabling FirstConsistentlyInteractiveDetector"),this._scheduleTimerTasks=!0;var e=this._longTasks.length>0?this._longTasks[this._longTasks.length-1].end:0,t=d(this._incompleteRequestStarts(),this._networkRequests);this._rescheduleTimer(Math.max(this._trackNetworkRequests?t+this._requiredNetworkQuietnessDurationInMilliseconds:0,e))},e.prototype._rescheduleTimer=function(e){var t=this;this._scheduleTimerTasks?(s("Attempting to reschedule FirstConsistentlyInteractive "+"check to ".concat(e)),s("Previous timer activation time: ".concat(this._timerActivationTime)),this._timerActivationTime>e?s("Current activation time is greater than attempted reschedule time. No need to postpone."):(clearTimeout(this._timerId),this._timerId=setTimeout(function(){t._checkTTI()},Math.max(0,e-performance.now())),this._timerActivationTime=e,s("Rescheduled firstConsistentlyInteractive check at ".concat(e)))):s("startSchedulingTimerTasks must be called before calling rescheduleTimer")},e.prototype._disable=function(){s("Disabling FirstConsistentlyInteractiveDetector"),clearTimeout(this._timerId),this._scheduleTimerTasks=!1,this._unregisterListeners()},e.prototype._registerPerformanceObserver=function(e){var t=this;void 0===e&&(e=!0),this._performanceObserver=new PerformanceObserver(function(n){for(var a=0,i=n.getEntries();a<i.length;a++){var r=i[a];"resource"===r.entryType&&e&&t._networkRequestFinishedCallback(r),"longtask"===r.entryType&&t._longTaskFinishedCallback(r)}}),this._performanceObserver.observe({entryTypes:e?["longtask","resource"]:["longtask"]})},e.prototype._registerListeners=function(e){var t,n,a,s,c,d,l,u,f;void 0===e&&(e=!0),e&&(s=this._beforeJSInitiatedRequestCallback.bind(this),c=this._afterJSInitiatedRequestCallback.bind(this),d=XMLHttpRequest.prototype.send,l=i++,XMLHttpRequest.prototype.send=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return s(l.toString()),this.addEventListener("readystatechange",function(){4===e.readyState&&c(l.toString())}),d.apply(this,t)},t=this._beforeJSInitiatedRequestCallback.bind(this),n=this._afterJSInitiatedRequestCallback.bind(this),a=window.fetch,window.fetch=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new Promise(function(r,o){var s=i++;t(s.toString()),a.apply(void 0,e).then(function(e){n(s.toString()),r(e)},function(e){n(e),o(e)})})}),this._registerPerformanceObserver(e),this._useMutationObserver&&(this._mutationObserver=(u=this._mutationObserverCallback.bind(this),(f=new MutationObserver(function(e){for(var t=0,n=e;t<n.length;t++){var a=n[t];("childList"===a.type&&o(a.addedNodes,r)||"attributes"===a.type&&r.includes(a.target.tagName.toLowerCase()))&&u(a)}})).observe(document,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["href","src"]}),f))},e.prototype._unregisterListeners=function(){this._performanceObserver&&this._performanceObserver.disconnect(),this._mutationObserver&&this._mutationObserver.disconnect()},e.prototype._beforeJSInitiatedRequestCallback=function(e){s("Starting JS initiated request. Request ID: ".concat(e)),this._incompleteJSInitiatedRequestStartTimes.set(e,performance.now()),s("Active XHRs: ".concat(this._incompleteJSInitiatedRequestStartTimes.size))},e.prototype._afterJSInitiatedRequestCallback=function(e){s("Completed JS initiated request with request ID: ".concat(e)),this._incompleteJSInitiatedRequestStartTimes.delete(e),s("Active XHRs: ".concat(this._incompleteJSInitiatedRequestStartTimes.size))},e.prototype._networkRequestFinishedCallback=function(e){s("Network request finished",e),this._networkRequests.push({start:e.fetchStart,end:e.responseEnd}),this._rescheduleTimer(d(this._incompleteRequestStarts(),this._networkRequests)+this._requiredNetworkQuietnessDurationInMilliseconds)},e.prototype._longTaskFinishedCallback=function(e){s("Long task finished",e);var t,n=this._createLongTask(e),a="longTaskEnd".concat(n.id);t=a,window.performance&&performance.mark&&performance.mark(t),n.endMarkName=a,this._longTasks.push(n),this._rescheduleTimer(n.end+this._requiredMainThreadQuietnessDurationInMilliseconds)},e.prototype._mutationObserverCallback=function(e){s("Potentially network resource fetching mutation detected",e),s("Pushing back FirstConsistentlyInteractive check by ".concat(this._requiredNetworkQuietnessDurationInMilliseconds," milliseconds.")),this._rescheduleTimer(performance.now()+this._requiredNetworkQuietnessDurationInMilliseconds)},e.prototype._getMinValue=function(){return this._minValue?this._minValue:performance.timing.domContentLoadedEventEnd?performance.timing.domContentLoadedEventEnd-performance.timing.navigationStart:null},e.prototype._createLongTask=function(e){var t=e.startTime+e.duration;return{attribution:e.attribution,name:e.name,start:Math.round(e.startTime),end:Math.round(t),id:this._longTaskId++}},e.prototype._incompleteRequestStarts=function(){return Object(a.o)([],Array.from(this._incompleteJSInitiatedRequestStartTimes.values()),!0)},e.prototype._checkTTI=function(){s("Checking if First Consistently Interactive was reached...");var e=performance.timing.navigationStart,t=d(this._incompleteRequestStarts(),this._networkRequests),n=(window.chrome&&window.chrome.loadTimes?1e3*window.chrome.loadTimes().firstPaintTime-e:0)||performance.timing.domContentLoadedEventEnd-e,a=this._getMinValue(),i=performance.now();if(null===a)return s("No usable minimum value yet. Postponing check."),void this._rescheduleTimer(Math.max(this._trackNetworkRequests?t+this._requiredNetworkQuietnessDurationInMilliseconds:0,i+1e3));s("Parameter values:"),s("NavigationStart",e),s("lastKnownNetwork2Busy",t),s("Search Start",n),s("Min Value",a),s("Last busy",t),s("Current time",i),s("Long tasks",this._longTasks),s("Incomplete JS Request Start Times",this._incompleteRequestStarts()),s("Network requests",this._networkRequests);var r=function(e,t,n,a,i,r,o,s){if(r&&a-n<s)return null;var c=0===i.length?e:i[i.length-1].end;if(a-c<o)return null;if(c&&i.length>0){var d=i[i.length-1].endMarkName;d&&performance.measure("TTI",void 0,d)}return Math.max(c,t)}(n,a,t,i,this._longTasks,this._trackNetworkRequests,this._requiredMainThreadQuietnessDurationInMilliseconds,this._requiredNetworkQuietnessDurationInMilliseconds);r&&this._firstConsistentlyInteractiveResolver?(s("maybeFCI",r),this._firstConsistentlyInteractiveResolver({tti:r,longTasks:this._longTasks}),this._disable()):(s("Could not detect First Consistently Interactive. Retrying in 1 second."),this._rescheduleTimer(performance.now()+1e3))},e}()},868:function(e,t,n){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];i()&&console.log.apply(console,e)}function i(){try{if("sessionStorage"in window&&window.sessionStorage){var e=window.sessionStorage.enableFCILogging;return e&&"true"===e.toLowerCase()&&"undefined"!=typeof console&&!!console}}catch(e){}return!1}n.r(t),n.d(t,"getFirstCPUIdle",function(){return o});var r=function(){function e(e){this._longTaskId=0,this._checkFCIRunId=0,this._isDisposed=!1;var t=e.requiredMainThreadCPUIdleDurationInMilliseconds,n=e.measurementStartTime;this._measurementStartTime=n,this._requiredMainThreadCPUIdleDurationInMilliseconds=t,this._resultResolver={resolve:void 0,reject:void 0},this._fciPromise=void 0,this._longTasks=[],this._processLongTaskPreQueue(),this._registerLongTaskObserver()}return e.prototype.measureFCI=function(){var e=this;if(this._isDisposed)throw"FCIMeasurer is disposed.";return this._fciPromise||(this._fciPromise=new Promise(function(t,n){e._resultResolver.resolve=t,e._resultResolver.reject=n})),this._tryScheduleNextCheck(),this._fciPromise},e.prototype._tryScheduleNextCheck=function(){var e=this;this._checkFCIRunId&&clearTimeout(this._checkFCIRunId);var t=this._findEarlestPossibleCheckTime(),n=performance.now(),a=Math.max(0,t-n);this._checkFCIRunId=setTimeout(function(){e._checkFCI()},a)},e.prototype._findEarlestPossibleCheckTime=function(){var e=this._getLatestLongTask(),t=e&&e.end||-1/0;return Math.max(t+this._requiredMainThreadCPUIdleDurationInMilliseconds,this._measurementStartTime+this._requiredMainThreadCPUIdleDurationInMilliseconds,performance.now())},e.prototype._checkFCI=function(){var e,t=performance.now(),n=this._longTasks?this._longTasks.length:0;if(a("Running checkFCI:"),a("Measurement start time",this._measurementStartTime),a("Current time",t),a("Long tasks",this._longTasks),a("latestLongTaskEndTime",null===(e=this._longTasks[n-1])||void 0===e?void 0:e.end),!this._measurementStartTime||this._measurementStartTime<0)this._onFoundFCI(NaN);else if(0!==n){for(var i=this._longTasks[0],r=1;r<n;r++){var o=this._longTasks[r],s=Math.max(i.end,this._measurementStartTime);if(o.start>=this._measurementStartTime&&o.start-s>=this._requiredMainThreadCPUIdleDurationInMilliseconds)return void this._onFoundFCI(s,i.endMarkName);i=o}if(t-i.end>=this._requiredMainThreadCPUIdleDurationInMilliseconds){var c=i.end>this._measurementStartTime?i.endMarkName:void 0;this._onFoundFCI(Math.max(i.end,this._measurementStartTime),c)}}else t-this._measurementStartTime>=this._requiredMainThreadCPUIdleDurationInMilliseconds&&this._onFoundFCI(this._measurementStartTime)},e.prototype._onFoundFCI=function(e,t){t&&performance.measure("FCI",void 0,t),a("possibleFCI:",e),this._resultResolver.resolve&&this._resultResolver.resolve({fci:e,longTasks:this._longTasks}),this._dispose()},e.prototype._dispose=function(){clearTimeout(this._checkFCIRunId),this._longTaskObserver.disconnect(),this._isDisposed=!0},e.prototype._getLatestLongTask=function(){for(var e=void 0,t=0,n=this._longTasks;t<n.length;t++){var a=n[t];(!e||a.end>e.end)&&(e=a)}return e},e.prototype._processLongTaskPreQueue=function(){if(window.__fci){var e=window.__fci.o,t=window.__fci.e;if(e){for(var n=0,a=t;n<a.length;n++){var i=a[n];if("longtask"===i.entryType){var r=this._createLongTask(i);this._longTasks.push(r)}}e.disconnect()}}},e.prototype._registerLongTaskObserver=function(){var e=this;this._longTaskObserver=new PerformanceObserver(function(t){for(var n=0,a=t.getEntries();n<a.length;n++){var i=a[n];"longtask"===i.entryType&&e._longTaskFinishedCallback(i)}}),this._longTaskObserver.observe({entryTypes:["longtask"]})},e.prototype._createLongTask=function(e){var t=e.startTime+e.duration;return{attribution:e.attribution,name:e.name,start:Math.round(e.startTime),end:Math.round(t),id:this._longTaskId++}},e.prototype._longTaskFinishedCallback=function(e){a("Long task finished: ",e);var t,n=this._createLongTask(e),i="longTaskEnd".concat(n.id);t=i,window.performance&&performance.mark&&performance.mark(t),n.endMarkName=i,this._longTasks.push(n),this._tryScheduleNextCheck()},e}();function o(e){return"PerformanceLongTaskTiming"in window?new r(e).measureFCI():Promise.resolve(null)}},872:function(e,t,n){"use strict";n.r(t),n.d(t,"EngagementHelper",function(){return s}),n.d(t,"mergeEngagementData",function(){return c}),n.d(t,"EngagementPartType",function(){return i.a}),n.d(t,"EngagementPart",function(){return i.n}),n.d(t,"EngagementBuilder",function(){return i.t}),n.d(t,"ENGAGEMENT_ROOT",function(){return i.e}),n.d(t,"clickEngagementPart",function(){return l}),n.d(t,"keyPressEngagementPart",function(){return u}),n.d(t,"dropEngagementPart",function(){return f}),n.d(t,"getMostSpecificMatchingContext",function(){return p});var a=n(0),i=n(581),r=n(221),o=n(287),s=function(e){function t(t,n){void 0===t&&(t={}),void 0===n&&(n={});var a=e.call(this,t,n)||this,i=n.handlers,o=void 0===i?[]:i,s=n.logData,c=void 0===s?function(e){return r.e.logData(e)}:s;return a._handlers=o,a._logData=c,a}return Object(a.a)(t,e),t.prototype.logData=function(e){if(void 0===e&&(e={}),this.contexts.length||e.name){for(var t=this.contexts.map(function(e,t){return{context:e,order:t}}).sort(function(e,t){return e.context.part.type-t.context.part.type||e.order-t.order}).map(function(e){return e.context}),n=e.name,i=void 0===n?t.map(function(e){return e.part.name}).join("."):n,r=e.isIntentional,o=void 0!==r&&r,s=e.extraData,d=void 0===s?{}:s,l=Object(a.r)(d,[]),u=Object(a.r)(e,["name","isIntentional","extraData"]),f=Object(a.e)({name:i,isIntentional:o,extraData:l},u),p=0,m=t;p<m.length;p++){var _=m[p],h=_.part,b=_.extraData,g=void 0===b?{}:b,v={};for(var y in g)v["".concat(h.name,"_").concat(y)]=g[y];c(f,{extraData:v}),c(f,_.part.getEngagementData(_)||{})}for(var S=0,D=this._handlers;S<D.length;S++){var I=D[S],x=I.getEngagementData.apply(I,t);x&&c(f,x)}this._logData(f)}},t.prototype.clone=function(e){return new t({},{engagementSource:{contexts:e},handlers:this._handlers,logData:this._logData})},t}(i.t);function c(e,t){var n=t.extraData,i=void 0===n?{}:n,r=t.experiment;d(e,Object(a.r)(t,["extraData","experiment"])),Object(o.e)(e.extraData,i),void 0!==r&&(e.experiment=r)}function d(e,t){for(var n in t){var a=t[n];if("object"==typeof a&&a){var i="object"==typeof e[n]&&e[n]||{};e[n]=i,d(i,a)}else void 0!==a&&(e[n]=a)}}var l=new i.n("Click",i.a.event),u=new i.n("KeyPress",i.a.event),f=new i.n("Drop",i.a.event);function p(e,t){for(var n=t.length-1;n>=0;n--){var a=t[n];if(e.matches(a))return a}}}}]);