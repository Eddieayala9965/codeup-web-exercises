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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[8],{2350:function(e,t,n){"use strict";var a;n.d(t,"e",function(){return a;}),(function(e){__WRAPPED_set(e,e.notConfigured=0,'=',"notConfigured"),__WRAPPED_set(e,e.visible=1,'=',"visible"),__WRAPPED_set(e,e.notVisible=2,'=',"notVisible");}(a||(a={})));},2424:function(e,t,n){"use strict";n.d(t,"e",function(){return o;});var a=n(6),i=n(950),r=n(2350),o=new a.t({name:"".concat("FirstRunExperienceStatus.key",".FirstRunExperienceStatus"),factory:{dependencies:{},create:function(e){return{instance:new i.e(r.e.notConfigured)};}}});},2486:function(e,t,n){"use strict";n.d(t,"e",function(){return a;}),n.d(t,"a",function(){return i;}),n.d(t,"i",function(){return r;}),n.d(t,"n",function(){return o;}),n.d(t,"t",function(){return s;}),n.d(t,"r",function(){return b;}),n.d(t,"o",function(){return g;});var a,i,r,o,s,c=n(0),d=n(3300),l=n(57),u=n(455),f=n(95),p=n(6),m=n(756),_=n("react-lib");!(function(e){__WRAPPED_set(e,e.Off=0,'=',"Off"),__WRAPPED_set(e,e.On=1,'=',"On");}(a||(a={}))),(function(e){e.apiError="apiError",e.viewerInitLoadingError="viewerInitLoadingError",e.actionError="actionError",e.genericViewerLoadingError="genericViewerLoadingError";}(i||(i={}))),(function(e){__WRAPPED_set(e,e.none=0,'=',"none"),__WRAPPED_set(e,e.detailPane=1,'=',"detailPane"),__WRAPPED_set(e,e.versionHistory=2,'=',"versionHistory"),__WRAPPED_set(e,e.copilotPane=3,'=',"copilotPane");}(r||(r={}))),(function(e){__WRAPPED_set(e,e.view=0,'=',"view"),__WRAPPED_set(e,e.edit=1,'=',"edit");}(o||(o={}))),(function(e){__WRAPPED_set(e,e.view=0,'=',"view"),__WRAPPED_set(e,e.edit=1,'=',"edit");}(s||(s={})));var h=(function(e){function t(){return e.call(this,{currentState:{publisher:"init",rightPane:{type:r.none},modal:{showModal:!1},eSignData:{isCreateSidePanelActive:!1},annotationViewerState:{viewerVisiblity:t._defaultAnnotationVisibility,isActive:!1}}})||this;}return Object(c.__extends)(t,e),t.prototype.getViewerState=function(e){var t=this.state.currentState.viewerStates;return null==t?void 0:t.get(e);},t.prototype.getAnnotationViewerState=function(){return this.state.currentState.annotationViewerState;},t.prototype.getESignData=function(){return this.state.currentState.eSignData;},t.prototype.updateViewerState=function(e,t){var n=this.state.currentState.viewerStates||new Map(),a=null==n?void 0:n.get(t.key);t.options=Object(c.__assign)(Object(c.__assign)(Object(c.__assign)({},a),t.options),{pdfViewerStates:Object(c.__assign)(Object(c.__assign)({},null==a?void 0:a.pdfViewerStates),t.options.pdfViewerStates)}),n.set(t.key,t.options),this.update("currentState",{publisher:e,viewerStates:new Map(n)});},t.prototype.updateRightPaneState=function(e,t){t.type!==r.none&&this.updateESignDataState(e,{isCreateSidePanelActive:!1}),this.update("currentState",{publisher:e,rightPane:t});},Object.defineProperty(t.prototype,"rightPaneType",{get:function(){return this.currentAppState.rightPane.type;},enumerable:!1,configurable:!0}),t.prototype.updateModalState=function(e,t){this.update("currentState",{publisher:e,modal:t});},t.prototype.updatePerfButtonState=function(e,t){this.update("currentState",{publisher:e,perfDataReported:t});},t.prototype.updateImageState=function(e,t){this.update("currentState",{publisher:e,imageMode:t});},t.prototype.updatePdfState=function(e,t){this.update("currentState",{publisher:e,pdfAppMode:t});},t.prototype.updateToastState=function(e,t){var n=this.state.currentState.toast;t.timeStamp=Date.now();var a=t.toastKey?t.toastKey:"defaultKeyToDisplayOnlyOneToast";if(n?n.set(a,t):(n=new Map()).set(a,t),!1===t.visible&&n.delete(a),n.size>2){var i="",r=1/0;n.forEach(function(e,t){e.timeStamp&&e.timeStamp<r&&(i=t,r=e.timeStamp);}),n.delete(i);}var o=new Map(n);this.update("currentState",{publisher:e,toast:o});},t.prototype.updateErrorState=function(e,t){this.update("currentState",{publisher:e,errorState:t});},t.prototype.toggleAnnotationViewerVisiblity=function(e){var t=this.state.currentState.annotationViewerState,n=t.viewerVisiblity,i=n===a.Off||void 0===n?a.On:a.Off,r=Object(c.__assign)(Object(c.__assign)({},t),{viewerVisiblity:i,isActive:!t.isActive});this.update("currentState",{publisher:e,annotationViewerState:r});},t.prototype.setAnnotationViewerPreloadSucceeded=function(e,t){var n=this.state.currentState.annotationViewerState;this.update("currentState",{publisher:e,annotationViewerState:Object(c.__assign)(Object(c.__assign)({},n),{hasPreloadSucceeded:t})});},t.prototype.updateDeletedKeysState=function(e,t){this.update("currentState",{publisher:e,deletedKeys:t});},t.prototype.updateESignDataState=function(e,t){t.isCreateSidePanelActive&&this.updateRightPaneState(e,{type:r.none}),this.update("currentState",{publisher:e,eSignData:t});},Object.defineProperty(t.prototype,"currentAppState",{get:function(){return this.state.currentState;},enumerable:!1,configurable:!0}),t.prototype.clean=function(){this.update("currentState",{publisher:"close",rightPane:{type:r.none},errorState:void 0,viewerStates:void 0,imageMode:o.view,annotationViewerState:{viewerVisiblity:t._defaultAnnotationVisibility,hasPreloadSucceeded:!1,isActive:!1},pdfAppMode:d.e.View,toast:void 0,modal:{showModal:!1,content:void 0},eSignData:{isCreateSidePanelActive:!1},perfDataReported:void 0});},t.prototype.navClean=function(){this.update("currentState",{publisher:"nav",eSignData:{isCreateSidePanelActive:!1}});},t._defaultAnnotationVisibility=a.Off,t;}(u.e)),b=new p.t({name:"OneUpStateStore",factory:new l.i(h)});function g(e,t){return(function(e,t,n){var a=Object(_.useState)(),i=a[0],r=a[1],o=Object(_.useState)(function(){var a=__WRAPPED_get(e.state,t),i=n?n(a):a;if(!Object(m.e)(i))return i;i.then(function(e){return c(e);}).catch(function(e){return r(e);});}),s=o[0],c=o[1];return Object(_.useLayoutEffect)(function(){return e.onUpdate(t,function(e){var t=n?n(e.detail):e.detail;Object(m.e)(t)?t.then(function(e){return c(e);}).catch(function(e){return r(e);}):c(t);});},[]),[s,i];}(Object(f.n)().consume(b),e,t));}},2594:function(e,t,n){"use strict";n.d(t,"w",function(){return r;}),n.d(t,"C",function(){return o;}),n.d(t,"v",function(){return s;}),n.d(t,"m",function(){return c;}),n.d(t,"c",function(){return d;}),n.d(t,"y",function(){return l;}),n.d(t,"u",function(){return u;}),n.d(t,"e",function(){return f;}),n.d(t,"a",function(){return p;}),n.d(t,"n",function(){return m;}),n.d(t,"i",function(){return _;}),n.d(t,"t",function(){return h;}),n.d(t,"s",function(){return b;}),n.d(t,"f",function(){return g;}),n.d(t,"h",function(){return v;}),n.d(t,"l",function(){return y;}),n.d(t,"b",function(){return S;}),n.d(t,"g",function(){return D;}),n.d(t,"_",function(){return I;}),n.d(t,"x",function(){return x;}),n.d(t,"I",function(){return C;}),n.d(t,"S",function(){return O;}),n.d(t,"p",function(){return w;}),n.d(t,"O",function(){return E;}),n.d(t,"D",function(){return A;}),n.d(t,"k",function(){return L;}),n.d(t,"d",function(){return k;}),n.d(t,"o",function(){return M;}),n.d(t,"r",function(){return P;}),n.d(t,"E",function(){return T;}),n.d(t,"L",function(){return U;}),n.d(t,"A",function(){return F;});var a=n(218),i=n(4),r=a.a.isFeatureEnabled,o={ODB:817,ODC:!0,OneDrive:!0},s={ODB:60124,ODC:"UseMsPdfViewer",OneDrive:!1,Fallback:!1},c={ODB:60358},d={ODB:1655,ODC:!1,OneDrive:!1,Fallback:!1},l={ECS:1071224},u={ECS:1132624},f={ECS:1082725},p={ECS:1111474},m={ECS:1116309},_={ECS:1125492},h={ECS:1126891},b={ODB:1614,ODC:!1,OneDrive:!1,Fallback:!1},g={ODB:1063,ODC:!1,OneDrive:!1,Fallback:!1},v={ODB:1513,ODC:!1,OneDrive:!1,Fallback:!1},y={ODB:1811,ODC:!1,OneDrive:!1,Fallback:!1},S={ODB:60165},D={ODB:60192},I={ODB:61066},x={ODB:1355,ODC:!1,OneDrive:!1,Fallback:!1},C={ODB:61094,ODC:!1,OneDrive:!1,Fallback:!1},O={ODB:!i.e.isActivated("8a90e09f-a635-4113-897e-402973bce841","10/21/2021","Use pdf viewer to preview tiff files"),ODC:!0},w={ODB:1698};function E(){return!i.e.isActivated("d9c17c13-cdd6-4c12-aec1-e636d97e7a9c","09/25/2023","Scoping context work for copilot pane in oneup");}var A={ODB:!0,OneDrive:!0},L={ODB:61113},k={ODB:61210},M={ODB:60655},P={ODB:61300},T={ODB:61125},U={ODB:61217},F={ODB:61146};},3009:function(e,t,n){"use strict";n.d(t,"e",function(){return S;}),n.d(t,"t",function(){return D;});var a=n(0),i=n(181),r=n(57),o=n(179),s=n(229),c=n(696),d=n(3207),l=n(163),u=n(2594),f=n(3264),p=n(87),m=n(47),_=n(967),h=n(3235),b=n(3146),g=n(3265),v=".pdf",y=["ODBLightSpeedWebPack"],S=(function(){function e(e,t){this.isWorkerVersionMismatch=function(e){var t,n=null===(t=window._spModuleLink)||void 0===t?void 0:t.buildNumber;return"dev"!==n&&!(!e||!n)&&e!==n;},this._enablePdf=Object(u.w)(u.C),this._enableMsPdfviewer=Object(u.w)(u.v),this._enableEmbedMsPdfviewer=Object(u.w)(u.c),this._enableEditPdf=Object(u.w)(u.s),this._enableExtractPdf=Object(u.w)(u.h),this._enablePreviewTif=Object(u.w)(u.S),this._enableHTML=Object(u.w)(u.D)&&(Object(f.e)()||t.platformDetection.isEdge),this._urlDataSource=t.urlDataSource,this._pdfDataSource=t.pdfDataSource,this._navigation=t.navigation,this._viewParams=this._navigation.viewParams,this._platformDetection=t.platformDetection,this._pageContext=t.pageContext,this._embedOptions=t.embedOptions;}return e.isWasmSupported=function(){if(void 0===e._isWasmSupported){var t=!1;try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){var n=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));n instanceof WebAssembly.Module&&(t=new WebAssembly.Instance(n)instanceof WebAssembly.Instance);}}catch(e){}e._isWasmSupported=t;}return e._isWasmSupported;},e.prototype.isNotEmbed=function(){return this._urlDataSource.getPageType(this._viewParams)!==l.e.Embed;},e.prototype.isSupportedFileType=function(e){var t=this._extension(e);return this._enablePdf&&(t===v||".ai"===t||!!e.pdfConversion)&&(this._enablePreviewTif||".tif"!==t&&".tiff"!==t);},e.prototype.isDownloadByRangeEnabled=function(e){if(!(Object(u.w)(u.l)||!this.isNotEmbed()&&Object(g.e)(u.u.ECS))||!e.size)return!1;var t=this._platformDetection.isMobile?10485760:31457280;return e.size>t&&!e.pdfConversion;},e.prototype.isMsPdfViewerSupported=function(e){var t;if(!e)return!1;var n=this._enableMsPdfviewer&&(this.isNotEmbed()||this._enableEmbedMsPdfviewer),a=this._isHostAppTeams()&&Object(g.e)(u.y.ECS),i=!Object(b.i)()&&!Object(g.t)(u.e.ECS)&&!this.isNotEmbed()&&((null===(t=this._embedOptions)||void 0===t?void 0:t.useMsPdf)||!1);return(n||a||i)&&this._isMsPdfViewerSupported(e);},e.prototype.isMsPdfViewerAvailable=function(e){return this.isSupportedFileType(e)&&this._isEnabledInOneUp(e)&&this.isMsPdfViewerSupported(e.size);},e.prototype.isPdfEditAvailable=function(e){return this.isMsPdfViewerAvailable(e)&&(this._enableEditPdf||!this.isNotEmbed()&&!Object(b.t)()&&!Object(g.t)(u.a.ECS))&&this._extension(e)===v;},e.prototype.isPdfExtractAvailable=function(e){return this.hasSyntexLicense()&&this.isMsPdfViewerAvailable(e)&&this.isNotEmbed()&&this._enableExtractPdf;},e.prototype.isPdfExtractable=function(){return this.hasSyntexLicense()&&this._enableExtractPdf;},e.prototype.isPdfEditable=function(e){var t;return e.itemStatus!==i.t.ConditionalAccessViewOnly&&e.itemStatus!==i.t.ConditionalAccessBlocked&&(null===(t=this._pdfDataSource)||void 0===t?void 0:t.canSave({item:e}));},e.prototype.getWorkerManifestName=function(){var e,t=(null===(e=window._spModuleLink)||void 0===e?void 0:e.manifestName)||"";return Object(u.w)(u.m)&&-1!==y.indexOf(t)?"odbmspdfwebworker":"mspdfwebworker";},e.prototype.getEmbedOptions=function(){return this._embedOptions;},e.prototype.hasSyntexLicense=function(){var e,t;return(null===(e=this._pageContext)||void 0===e?void 0:e.canUserUseSyntex)||Object(b.s)()&&(null===(t=this._pageContext)||void 0===t?void 0:t.isUserSyntexV2Licensed)||!1;},e.prototype._isHostAppTeams=function(){if(this.isNotEmbed())return!1;var e=this._getClientId();return!!e&&-1!==["MicrosoftTeams","Microsoft Teams","Microsoft Teams Web Client","Teams Service","Teams Client App","Teams Additional Client App","Teams App"].indexOf(e);},e.prototype._isEnabledInOneUp=function(e){return!(e.officeBundle||e.wopiFrameUrl||this._enableHTML&&e.htmlConversion);},e.prototype._isMsPdfViewerSupported=function(t){if(!t)return!1;var n=t<(performance.memory?performance.memory.jsHeapSizeLimit-performance.memory.totalJSHeapSize:268435456)/4;return e.isWasmSupported()&&n;},e.prototype._extension=function(e){return e&&e.extension&&e.extension.toLowerCase()||"";},e.prototype._getClientId=function(){var e,t=(null===(e=this._pageContext)||void 0===e?void 0:e.authToken)||"",n=Object(c.a)(t);return n&&n.app_displayname||this._getClientIdFromQSP();},e.prototype._getClientIdFromQSP=function(){var e,t=window,n=Object(s.e)((__WRAPPED_get(t,'location').search||"").slice(1)),i=Object(s.e)((__WRAPPED_get(t,'location').hash||"").slice(1)),r=(null===(e=t.PageContext)||void 0===e?void 0:e.scenarioContext.embed)||{};return Object(a.__assign)(Object(a.__assign)(Object(a.__assign)({},n),i),r).client_id;},e.dependencies={},e;}()),D=Object(r.r)("PdfViewerHelper",S,{platformDetection:o.e,urlDataSource:_.e,navigation:p.e,pdfDataSource:h.e,pageContext:m.e.optional,embedOptions:d.e.optional});},3146:function(e,t,n){"use strict";n.d(t,"i",function(){return i;}),n.d(t,"s",function(){return r;}),n.d(t,"t",function(){return o;}),n.d(t,"n",function(){return s;}),n.d(t,"a",function(){return c;}),n.d(t,"r",function(){return d;}),n.d(t,"o",function(){return l;}),n.d(t,"e",function(){return u;});var a=n(4),i=function(){return a.e.isActivated("c3dc126d-70db-4dc6-9ad6-3ce6d59dfaca");},r=function(){return!a.e.isActivated("acc3d562-8099-40b9-ad90-f199e8fcec91","6/15/2023","Syntex V2 License check");},o=function(){return a.e.isActivated("f644d6f3-bfb2-4b67-9ea4-f2bbd98431b0","07/17/2023","Enable editing for mspdf in embed scenarios");},s=function(){return a.e.isActivated("106d45a3-37c3-42cd-95a6-8a04645f8a7b","08/07/2023","Enable host saving for embedded scenarios");},c=function(){return a.e.isActivated("ed408543-0a69-47e8-a898-31bf63f74ce6","08/28/2023","Enable sending PDF related notifications to host for embedded scenarios");},d=function(){return a.e.isActivated("7734ec9d-6955-4473-9ea5-1c21baf2af07","08/31/2023","Fix page content with some Chinese characters cannot be rendered");},l=function(){return a.e.isActivated("facbf24e-8794-4b51-9003-45d3abd49d9b","09/28/2023","Fix sharee can not save pdf change");},u=function(){return a.e.isActivated("58d82ac9-f371-4727-bb77-44cddd470f04","10/19/2023","Allow unloading page with edits for embedded scenarios");};},3149:function(e,t,n){"use strict";n.d(t,"e",function(){return b;});var a=n(0),i=n(33),r=n(2225),o=n(57),s=n(118),c=n(68),d=n(87),l=n(375),u=n(2424),f=n(2350),p=n(188),m="CoachmarkTearDropSeen",_={campaignGuid:"00000000-0000-0000-0000-000000000000",endDate:new Date(1970,1,1),flag:i.Off,isCoachmark:!0},h=(function(e){function t(t,n){void 0===t&&(t={});var a=e.call(this,t,n)||this;a._dataStore=new s.e("CoachmarkProvider",c.e.session),a._currentCampaign=a.createObservable(_),a._isVisible=a.createObservable(!1),a._navigation=n.navigation,a._firstRunExperienceStatus=n.firstRunExperienceStatus,a._currentTeachingBubble=a.createObservable({campaign:a._currentCampaign,isVisible:a._isVisible}),a._navigation.viewParams.resetAllBubbles&&a._dataStore.remove(m);var i=a.resources.consume(p.e);return a._teachingBubbleProviderPromise=i.waitForPLT().then(function(){return a.resources.consume(l.I);}),a;}return Object(a.__extends)(t,e),Object.defineProperty(t.prototype,"isVisible",{get:function(){return this._isVisible;},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"currentCampaign",{get:function(){return this._currentCampaign;},enumerable:!1,configurable:!0}),t.prototype.hideCampaign=function(){this._isVisible(!1),this._currentCampaign(_);},t.prototype.setCampaign=function(e){var t=this;if(!e)return this._currentCampaign(_),void this._isVisible(!1);if(this._firstRunExperienceStatus.get()!==f.e.visible){var n="".concat(e.name).concat(m);this._dataStore.getValue(m)||this._teachingBubbleProviderPromise.then(function(a){a&&a.shouldBubbleBeAdded(e,!1).then(function(a){a&&(t._currentCampaign(e),t._isVisible(!0),t._dataStore.setValue(n,!0));});});}},t.prototype.getCurrentTeachingBubble=function(){return this._currentTeachingBubble;},t.dependencies=Object(a.__assign)(Object(a.__assign)({},r.n.dependencies),{navigation:d.e,firstRunExperienceStatus:u.e}),t;}(r.n)),b=Object(o.r)("CoachmarkProvider",h);},3206:function(e,t,n){"use strict";n.d(t,"t",function(){return d;}),n.d(t,"e",function(){return l;}),n.d(t,"n",function(){return u;});var a=n(57),i=n(2225),r=n(355),o=n(3300),s=n(17),c=n(3009),d=function(e){return"ZXNpZ24"===__WRAPPED_get(e(),s.n.navParamKey);},l=(function(){function e(e,t){var n=this;this.isWorkerVersionMismatch=function(e){return n._corePdfViewerHelper.isWorkerVersionMismatch(e);};var a=t.observablesFactoryType,i=t.viewParams,r=new a();this._corePdfViewerHelper=t.corePdfViewerHelper;var s=this.getEmbedOptions(),c=(null==s?void 0:s.allowEdit)&&(null==s?void 0:s.openInEditMode),l=d(i)?o.e.Esign:c?o.e.Edit:o.e.View;this.state={isOpened:r.create(!1),currentMode:r.create(l),filePickerMode:r.create("close"),protectedPdf:r.create(!1)};}return e.isWasmSupported=function(){return c.e.isWasmSupported();},e.prototype.isMsPdfViewerAvailable=function(e){return this._corePdfViewerHelper.isMsPdfViewerAvailable(this._convertItem(e));},e.prototype.isMsPdfViewerSupported=function(e){return this._corePdfViewerHelper.isMsPdfViewerSupported(e);},e.prototype.isNotEmbed=function(){return this._corePdfViewerHelper.isNotEmbed();},e.prototype.isPdfEditAvailable=function(e){return this._corePdfViewerHelper.isPdfEditAvailable(this._convertItem(e));},e.prototype.isPdfEditable=function(e){return this._corePdfViewerHelper.isPdfEditable(this._convertItem(e));},e.prototype.isSupportedFileType=function(e){return this._corePdfViewerHelper.isSupportedFileType(this._convertItem(e));},e.prototype.isDownloadByRangeEnabled=function(e){return this._corePdfViewerHelper.isDownloadByRangeEnabled(this._convertItem(e));},e.prototype.getWorkerManifestName=function(){return this._corePdfViewerHelper.getWorkerManifestName();},e.prototype.getEmbedOptions=function(){return this._corePdfViewerHelper.getEmbedOptions();},e.prototype.isPdfExtractAvailable=function(e){return this._corePdfViewerHelper.isPdfExtractAvailable(this._convertItem(e));},e.prototype.isPdfExtractable=function(){return this._corePdfViewerHelper.isPdfExtractable();},e.prototype.hasSyntexLicense=function(){return this._corePdfViewerHelper.hasSyntexLicense();},e.prototype._convertItem=function(e){return e;},e.dependencies={observablesFactoryType:i.i,viewParams:r.P,corePdfViewerHelper:c.t},e;}()),u=Object(a.r)("PdfViewerHelper",l);},3207:function(e,t,n){"use strict";n.d(t,"e",function(){return a;});var a=new(n(6)).t("pdfViewerEmbedOptions");},3214:function(e,t,n){"use strict";n.d(t,"e",function(){return c;}),n.d(t,"t",function(){return d;}),n.d(t,"n",function(){return l;});var a=n(0),i=n(30),r={};function o(e){return __WRAPPED_get(r,e);}function s(e,t){__WRAPPED_set(r,e,'=',t);}function c(e){var t=o(e);if(t&&(t.end({resultType:i.t.Failure}),t=void 0),!t){var n={name:e};s(e,t=new i.e(n));}return t;}function d(e){u(e,i.t.Success);}function l(e,t){u(e,i.t.Failure,t);}function u(e,t,n){var i=o(e);if(i){var r={resultType:t};n&&(r=Object(a.__assign)(Object(a.__assign)({},r),{resultCode:n.name||"Unknown",error:n.message||"Unknown",extraData:{errorStackTrace:n.stack}})),i.end(r),s(e,void 0);}}},3235:function(e,t,n){"use strict";n.d(t,"e",function(){return d;});var a=n(0),i=n(57),r=n(52),o=(function(){function e(){}return e.prototype.canSave=function(e){return this.canSaveAsOriginal(e);},e;}()),s=n(47),c=(function(e){function t(t,n){var a=e.call(this)||this;return a._pageContext=n.pageContext,a;}return Object(a.__extends)(t,e),t.prototype.canSaveAsOriginal=function(e){var t,n=e.item;return!!n&&r.e.hasItemPermission(n,r.e.insertListItems)&&r.e.hasItemPermission(n,r.e.editListItems)&&!(null===(t=this._pageContext)||void 0===t?void 0:t.isAnonymousGuestUser);},t;}(o)),d=Object(i.r)("PdfDataSource",c,{pageContext:s.e.optional});},3264:function(e,t,n){"use strict";var a;function i(){return"boolean"!=typeof a&&(a="srcdoc"in document.createElement("iframe")),a;}n.d(t,"e",function(){return i;});},3265:function(e,t,n){"use strict";n.d(t,"e",function(){return a;}),n.d(t,"t",function(){return i;});var a=function(e){var t,n,a,i;if(!e)return!1;var r=(null===(t=window.Flight)||void 0===t?void 0:t.ecsConfig)&&JSON.parse(null===(n=window.Flight)||void 0===n?void 0:n.ecsConfig),o=null===(i=null===(a=null==r?void 0:r.RolloutContext)||void 0===a?void 0:a.settings)||void 0===i?void 0:i.ODSPMicroservices_ODWeb;return o&&!0===__WRAPPED_get(o,e);},i=function(e){return a(e);};},3300:function(e,t,n){"use strict";var a;n.d(t,"e",function(){return a;}),(function(e){__WRAPPED_set(e,e.View=0,'=',"View"),__WRAPPED_set(e,e.Edit=1,'=',"Edit"),__WRAPPED_set(e,e.Extract=2,'=',"Extract"),__WRAPPED_set(e,e.Esign=3,'=',"Esign");}(a||(a={})));},3444:function(e,t,n){"use strict";n.d(t,"e",function(){return a;}),n.d(t,"t",function(){return i;}),n.d(t,"a",function(){return r;}),n.d(t,"n",function(){return o;});var a=function(e,t,n,a){return i(e,t,n)+(a+"\r\n");},i=function(e,t,n){var a="--"+e+"\r\n";return(a+="Content-ID: "+t+"\r\n")+"Content-Type: "+n+"\r\n\r\n";},r=function(e,t,n){var a="--"+e+"\r\n";return(a+="Content-Type: "+t+"\r\n")+"Content-Transfer-Encoding: "+n+"\r\n\r\n";},o=function(e,t,n,a,i){var r=n+" "+a+" HTTP/1.1\r\n";return r+="Content-Type: "+e+"\r\n",r+="Accept: "+t+"\r\n",i&&(r+="Content-Length: "+i+"\r\n\r\n"),r;};},3666:function(e,t,n){"use strict";n.d(t,"e",function(){return i;});var a=n(2225),i=new(n(6)).t({name:"".concat("UniversalAnnotationStateKey",".universalAnnotationState"),factory:{dependencies:{observablesFactoryType:a.i},create:function(e){var t=new(0,e.observablesFactoryType)({});return{instance:{isUniversalAnnotationActive:t.create(!1),hasPreloadSucceeded:t.create(!0)},disposable:t};}}});},3879:function(e,t,n){"use strict";n.d(t,"e",function(){return m;});var a,i,r=n(0),o=n(246),s=n(3444),c=n(145),d=n(57),l=n(1407),u=n(47),f=n(2594);!(function(e){e.Annotation="universalannotations",e.Layer="annotationlayers",e.Batch="$batch";}(a||(a={}))),(function(e){e.MultipartMixedBoundary="multipart/mixed;boundary=",e.JSON="application/json",e.HTTP="application/http";}(i||(i={})));var p=(function(){function e(e,t){this._token=null,this._layerPath="";var n=t.vroomDataRequestor,a=t.pageContext;this._dataRequestor=n,this._pageContext=a;}return e.prototype.update=function(e,t,n){this._getSharePointToken=e,this._basePath="/drives/".concat(n,"/items/").concat(t),this._layerPath="".concat(this._basePath,"/").concat(a.Layer);},e.prototype.createLayer=function(e){var t=e.title,n=e.mainFileVersion,a=void 0===n?"1.0":n,i=e.layerId,r=this._layerPath;return this._sendRequest({path:r,requestType:"POST",data:{title:t,mainFileVersion:a,id:i}});},e.prototype.deleteLayer=function(e){var t=e.layerId,n="".concat(this._layerPath,"/").concat(t);return this._sendRequest({path:n,requestType:"DELETE"});},e.prototype.getLayers=function(){var e=this._layerPath;return this._sendRequest({path:e,requestType:"GET"});},e.prototype.createAnnotation=function(e){var t=e.annotationId,n=e.layerId,a=e.content,i=e.partitionId,r=e.anchor,o=e.contentType,s=this._getAnnotationUrl(n);return this._sendRequest({path:s,requestType:"POST",data:{id:t,content:a,partitionId:i,anchor:r,contentType:o}});},e.prototype.getAnnotations=function(e){var t=e.layerId,n=e.partitionId,a=this._getAnnotationUrl(t);return n&&(a+="?partitionId=".concat(n)),this._sendRequest({path:a,requestType:"GET"});},e.prototype.deleteAnnotation=function(e){var t=e.layerId,n=e.partitionId,a=e.annotationId,i="".concat(this._getAnnotationUrl(t),"/").concat(a,"?partitionId=").concat(n);return this._sendRequest({path:i,requestType:"DELETE"});},e.prototype.batchCreateAnnotations=function(e){var t=e.payload;return Object(r.__awaiter)(this,void 0,void 0,function(){var e,n,o=this;return Object(r.__generator)(this,function(s){return e="batch_"+c.e.generate(),n=this._createBatchBody(e,t.map(function(e){var t=e.id,n=e.layerId,i=e.annotationId,s=Object(r.__rest)(e,["id","layerId","annotationId"]);return{path:"".concat(o._basePath,"/AnnotationLayers('").concat(n,"')/").concat(a.Annotation),requestType:"POST",id:t,data:Object(r.__assign)({id:i},s)};})),[2,this._sendRequest({path:"/".concat(a.Batch),requestType:"POST",headers:{"Content-Type":i.MultipartMixedBoundary+e},data:n})];});});},e.prototype.batchDeleteAnnotations=function(e){var t=e.payload;return Object(r.__awaiter)(this,void 0,void 0,function(){var e,n,o=this;return Object(r.__generator)(this,function(r){return e="batch_"+c.e.generate(),n=this._createBatchBody(e,t.map(function(e){var t=e.id,n=e.annotationId,a=e.layerId,i=e.partitionId;return{path:"".concat(o._getAnnotationUrl(a),"/").concat(n,"?partitionId=").concat(i),requestType:"DELETE",id:t};})),[2,this._sendRequest({path:"/".concat(a.Batch),requestType:"POST",headers:{"Content-Type":i.MultipartMixedBoundary+e},data:n})];});});},Object.defineProperty(e.prototype,"hasLicense",{get:function(){return Object(f.w)(f.I)?Boolean(this._pageContext.canUserUseSyntex)||Boolean(this._pageContext.isUserSyntexV2Licensed):Boolean(this._pageContext.canUserUseSyntex);},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_server",{get:function(){return Object(o.s)(this._pageContext);},enumerable:!1,configurable:!0}),e.prototype._needRefreshToken=function(){return!this._token||!this._token.tokenExpiry||Date.now()>=this._token.tokenExpiry;},e.prototype._getToken=function(){return Object(r.__awaiter)(this,void 0,void 0,function(){var e;return Object(r.__generator)(this,function(t){switch(t.label){case 0:return this._needRefreshToken()&&this._getSharePointToken?[4,this._getSharePointToken(this._server)]:[3,2];case 1:e=t.sent(),this._token=e,t.label=2;case 2:return[2,this._token||void 0];}});});},e.prototype._getAnnotationUrl=function(e){return"".concat(this._layerPath,"/").concat(e,"/").concat(a.Annotation);},e.prototype._createBatchBody=function(e,t){var n,a="\r\n",r="changeset_".concat(c.e.generate()),o=Object(s.a)(e,"".concat(i.MultipartMixedBoundary,'"').concat(r,'"'),"binary")+t.map(function(e){return t=e,n="--"+r+a,n+="Content-Type: "+i.HTTP+a,n+="Content-Transfer-Encoding: binary\r\n",n+="Content-ID: "+t.id+a,n+=a,n+=Object(s.n)(i.JSON,"".concat(i.JSON,";odata=verbose"),t.requestType,t.path),n+=a,t.data&&(n+=JSON.stringify(t.data)+a,n+=a),n;var t,n;}).join("")+(n="--"+r+"--"+a,n+=a,n+="--"+e+"--"+a);return new Blob([o]);},e.prototype._sendRequest=function(e){return Object(r.__awaiter)(this,void 0,void 0,function(){var t,n,a,i,o,s;return Object(r.__generator)(this,function(c){switch(c.label){case 0:return[4,this._getToken()];case 1:return t=c.sent(),n=e.data,a=e.path,i=e.requestType,o=e.headers,s=n?n instanceof Blob?n:JSON.stringify(n):void 0,[2,this._dataRequestor.send({path:a,endpoint:"".concat(this._server,"/_api/v2.1"),headers:Object(r.__assign)({Scenario:"Syntex_UniversalAnnotaion"},o),requestType:i,accessToken:t,apiName:"UniversalAnnotationAPI",apiVersion:"v2.1",postData:s,expectedErrorCodes:{resourceModified:!0}})];}});});},e.dependencies={vroomDataRequestor:l.e,pageContext:u.e},e;}()),m=Object(d.r)("UniversalAnnotationDataSource",p);},4552:function(e,t,n){"use strict";n.d(t,"e",function(){return a;}),n.d(t,"t",function(){return i;}),n.d(t,"n",function(){return c;});var a,i,r=n(0),o=n(90),s=n(30);!(function(e){e.AddAnnotation="OneUpUniversalAnnotation.AddAnnotation",e.DeleteAnnotation="OneUpUniversalAnnotation.DeleteAnnotation",e.Enter="OneUpUniversalAnnotation.EnterUniversalAnnotation",e.Exit="OneUpUniversalAnnotation.ExitUniversalAnnotation",e.Undo="OneUpUniversalAnnotation.UndoOperationOnAnnotations",e.Redo="OneUpUniversalAnnotation.RedoOperationOnAnnotations";}(a||(a={}))),(function(e){e.PullAnnotation="OneUpUniversalAnnotation.PullAnnotation",e.PushAnnotation="OneUpUniversalAnnotation.PushAnnotation",e.PreloadAnnotation="OneUpUniversalAnnotation.PreloadAnnotation";}(i||(i={})));var c=(function(){function e(){}return e.logEngagement=function(t){o.e.logData({name:t,scenario:"1up Universal Annotation with msPdf Viewer",docId:e.itemId});},e.initQosEvent=function(t){var n=e._getEventQos(t);if(n&&(n.end({resultType:s.t.Failure,resultCode:e._prevEventNotEndFailure.name,error:e._prevEventNotEndFailure.message}),n=void 0),!n){var a={name:t};n=new s.e(a),e._setEventQos(t,n);}},e.logQosSuccess=function(t){e._internalLogQosEvent(t,s.t.Success);},e.logQosUnexpectedFailure=function(t,n){e._internalLogQosEvent(t,s.t.Failure,n);},e.logQosExpectedFailure=function(t,n){e._internalLogQosEvent(t,s.t.ExpectedFailure,n);},e._getEventQos=function(t){return __WRAPPED_get(e._eventQosCollection,t);},e._setEventQos=function(t,n){__WRAPPED_set(e._eventQosCollection,t,'=',n);},e._resetEventQos=function(t){__WRAPPED_set(e._eventQosCollection,t,'=',void 0);},e._internalLogQosEvent=function(t,n,a){var i=e._getEventQos(t);if(i){var o={resultType:n};a&&(o=Object(r.__assign)(Object(r.__assign)({},o),{resultCode:a.name||"Unknown",error:a.message||"Unknown",extraData:{errorStackTrace:a.stack,itemId:e.itemId}})),i.end(o),e._resetEventQos(t);}},e.itemId=void 0,e._eventQosCollection={},e._prevEventNotEndFailure={name:"previous qos event does not end",message:"previous qos event does not end while the new qos event of the same time is triggered. Now ends the previous event unexpectedly"},e;}());},5027:function(e,t,n){"use strict";n.d(t,"e",function(){return i;}),n.d(t,"t",function(){return r;});var a=n(2486),i=function(e,t,n,a,i){return!e&&t&&n.hasLicense&&a&&i;},r=function(e){return!!e&&e.viewerVisiblity===a.e.On;};},7337:function(e,t,n){"use strict";n.r(t),n.d(t,"ActivateUniversalAnnotationAction",function(){return g;});var a=n(0),i=n(2248),r=n(109),o=n(30),s=n(3214),c=n(3666),d=n(3840),l=n(4552),u=n(355),f=n(3206),p=n(3879),m=n(3149),_=n(955),h=n(33),b=n(5027),g=(function(e){function t(t,n){void 0===n&&(n={});var a=e.call(this,t,n)||this;return a.name="ActivateUniversalAnnotation",a._universalAnnotationState=a.resources.consume(c.e),a._currentSlideItem=a.resources.consume(u.m),a._pdfViewerHelper=a.resources.consume(f.n),a._universalAnnotationDataSource=a.resources.consume(p.e),a._isEsignPanelActivated=a.resources.consume(d.resourceKey),Object(h.isFeatureEnabled)(h.UseMsPdfViewer)&&Object(h.isFeatureEnabled)(h.UseUniversalAnnotation)&&Object(h.isFeatureEnabled)(h.ERBugFixesEnabledForUniversalAnnotation)&&(a._coachmarkProvider=a.resources.consume(m.e.optional)),a;}return Object(a.__extends)(t,e),t.prototype.onExecute=function(){var e,t=!this._universalAnnotationState.isUniversalAnnotationActive.peek();return t?(s.e("LaunchUniversalAnnotation"),l.n.logEngagement(l.e.Enter)):l.n.logEngagement(l.e.Exit),this._universalAnnotationState.isUniversalAnnotationActive(t),Object(h.isFeatureEnabled)(h.ERBugFixesEnabledForUniversalAnnotation)&&(null===(e=this._coachmarkProvider)||void 0===e?void 0:e.currentCampaign())===_.USE_UNIVERSAL_ANNOTATION&&this._coachmarkProvider.hideCampaign(),r.n.wrap({resultType:o.t.Success});},t.prototype.onIsAvailable=function(){if(!this._currentSlideItem)return!1;var e=this._currentSlideItem();return!!e&&Object(b.e)(this._isEsignPanelActivated(),this._universalAnnotationState.hasPreloadSucceeded(),this._universalAnnotationDataSource,this._pdfViewerHelper.isNotEmbed(),this._pdfViewerHelper.isMsPdfViewerAvailable(e()));},t.prototype.onIsToggled=function(){return this._universalAnnotationState.isUniversalAnnotationActive();},t;}(i.e));t.default=g;}}]);