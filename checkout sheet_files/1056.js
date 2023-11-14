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
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[1056],{2701:function(e,t,n){"use strict";n.d(t,"e",function(){return p;});var a=n(0),i=(n(2274),n("react-lib")),r=n(2229),o=n(6),s=n(2244),c=n(2245),d=n(79),l=n(85),u=n(441);function f(e){var t=e.specification,n=e.placeholder,a=Object(l.n)(),o=Object(s.e)(t),f=Object(d.e)(function(t,i){var s=new u.e();if(e.onApplyBindings){var c=e.onApplyBindings(t);c&&s.attach(c);}return s.attach(new(a.resolved(r.n))({element:t,valueAccessor:function(){return{specification:o,placeholder:n};},bindingContext:i})),s;});return i.createElement(c.e,{applyBindings:f},e.children);}function p(e){var t=e.resources,n=Object(a.__rest)(e,["resources"]),r=i.createElement(f,Object(a.__assign)({},n));return t?i.createElement(l.e,{resources:t},r):r;}t.t=p,new o.t({name:"Knockout",factory:new o.e(p)});},2890:function(e,t,n){"use strict";n.d(t,"e",function(){return r;});var a=n(0),i=n(150),r=Object(i.e)(function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,n.ee([778],2852)];case 1:return[2,e.sent().ColoredFolderFileTypeIconBase];}});});});},3642:function(e,t,n){"use strict";n.d(t,"e",function(){return i;});var a=n(0);function i(e,t){var n=function(n){var i=e.peek(),r=t.peek();t.valueWillMutate(),r.splice.apply(r,Object(a.__spreadArray)([0,r.length],i,!1)),t.valueHasMutated();},i=e.subscribe(n,null,"arrayChange");return n(),i;}},4051:function(e,t,n){"use strict";var a=n(0),i=n("react-lib"),r=n("react-dom-lib"),o=n(376),s=n(442),c=n(1921),d=n(2222),l=n(251),u=n(2225),f=n(737),p=n(593),m=n(4052),_=n(1905),h=n(4),b=n(1348),g=Object(p.e)(),v=(function(e){function t(t){var n=e.call(this,t)||this;n._scope=new o.e();var a=n.props.command.resources;n._observables=n._scope.attach(new(a.consume(u.i))({owner:n}));var i=n.props.isActive,r=void 0===i||i;return n._isActive=n._observables.wrap(r,{equalityComparer:b.n}),n.state={isCalloutVisible:!1,badge:void 0},n;}return Object(a.__extends)(t,e),t.prototype.UNSAFE_componentWillReceiveProps=function(e){"boolean"==typeof e.isActive&&this._isActive(e.isActive);},t.prototype.render=function(){return this.props.item.renderedInOverflow?this._getMenuItem():this._getCommandButton();},t.prototype.componentWillUnmount=function(){this._scope.dispose();},t.prototype.componentDidMount=function(){var e=this,t=this.props.command,n=this._observables.pureCompute(function(){return t.payload.control()&&t.isOpen()&&(!t.action||!t.action.isToggled());},{equalityComparer:b.n});this._observables.compute(function(){var a,i=null===(a=e._isActive.peek())||void 0===a||a;i||e._isActive();var r=t.iconBadge(),o=(h.t.isActivated("264FA7B2-B9C5-11EB-8529-0242AC130003","5/20/2021","Suppress command callouts from inactive modals")||i)&&n(),s=r?r.toString():void 0;e._observables.ignore(function(){e.setState({isCalloutVisible:o,badge:s});});});},t.prototype._getCommandButton=function(){var e=this,t=this.props.item,n=this.state.badge?i.createElement(s.e,{className:"od-error-badge",iconName:this.state.badge}):void 0;return i.createElement(d.e,{ref:function(t){if(t){var n=r.findDOMNode(t);e._target=n;}else e._target=void 0;},className:t.className,text:t.name,role:t.role,ariaLabel:t.ariaLabel,disabled:t.disabled,checked:t.isChecked,title:t.title,iconProps:t.iconProps,menuProps:t.subMenuProps,menuIconProps:t.menuIconProps,styles:t.buttonStyles,onMenuClick:function(e){return t&&t.onClick(e);},onClick:function(e){return t.onClick(e);},"data-automationid":t["data-automationid"]},n,this._getCallout());},t.prototype._getMenuItem=function(){var e=this.props.item,t=g(f.t,{theme:this.props.theme,disabled:e.disabled,expanded:!1,checked:e.isChecked,isAnchorLink:!!e.href,knownIcon:"None"!==e.iconProps.iconName,itemClassName:e.className,dividerClassName:e.itemType===l.e.Divider?e.className:void 0,iconClassName:e.iconProps.className,subMenuClassName:e.submenuIconProps?e.submenuIconProps.className:""});return i.createElement("button",{role:e.role,title:e.title,className:t.root,"aria-label":e.ariaLabel,"aria-checked":e.isChecked,onClick:function(t){return e.onClick(t);}},i.createElement("div",{className:t.linkContent},i.createElement(s.e,{className:t.icon,iconName:e.iconProps.iconName}),i.createElement("span",{className:t.label},e.name)));},t.prototype._getCallout=function(){if(this.state.isCalloutVisible&&!this.context.isMeasured)return i.createElement(m.e,{command:this.props.command,target:this._target});},t.contextType=_.e,Object(a.__decorate)([Object(c.e)("PayloadCommand",["theme"])],t);}(i.Component));t.e=v;},4052:function(e,t,n){"use strict";var a=n(0),i=n("react-lib"),r=n(376),o=n(1455),s=n(2225),c=n(2701),d=(function(e){function t(t){var n=e.call(this,t)||this;n._onDismiss=function(){n.props.command.isOpen(!1);},n._scope=new r.e();var a=n.props.command.resources;return n._observables=n._scope.attach(new(a.consume(s.i))({owner:n})),n.state={payload:void 0},n;}return Object(a.__extends)(t,e),t.prototype.componentWillUnmount=function(){this._scope.dispose();},t.prototype.componentDidMount=function(){var e=this,t=this.props.command;this._observables.compute(function(){e.setState({payload:t.payload.control()});});},t.prototype.render=function(){var e=i.createElement(c.t,{specification:this.state.payload,resources:this.props.command.resources}),t=this.props.command.payload.announce?i.createElement("div",{role:"alert","aria-live":"assertive"},e):i.createElement("div",null,e),n=this.props.command.payload.calloutLayerProps;return i.createElement(o.e,{className:"isFluent",beakWidth:0,gapSpace:0,doNotLayer:!1,directionalHint:this.props.command.payload.directionalHint,target:this.props.target,setInitialFocus:!1,onDismiss:this._onDismiss,layerProps:n,preventDismissOnScroll:this.props.command.payload.preventDismissOnScroll,preventDismissOnLostFocus:this.props.command.payload.preventDismissOnLostFocus,preventDismissOnResize:this.props.command.payload.preventDismissOnResize},t);},t;}(i.PureComponent));t.e=d;},4128:function(e,t,n){"use strict";n.d(t,"e",function(){return A;}),n.d(t,"t",function(){return F;});var a=n(0),i=n(2225),r=n(442),o=n(2501),s=n("react-lib"),c=n(1921),d=n(2222),l=n(251),u=n(737),f=n(593),p=Object(f.e)(),m=(function(e){function t(t){var n=e.call(this,t)||this;return n._onChange=function(e){n.props.command.onInputChange(e),n.props.dismissMenu();},n.state={isCalloutVisible:!1,payload:void 0,badge:void 0},n;}return Object(a.__extends)(t,e),t.prototype.render=function(){var e=this.props.item;return this.props.command.parentCommand&&!this.props.command.parentCommand.isCollapsed.peek()||e.renderedInOverflow?this._getMenuItem():this._getCommandButton();},t.prototype.componentDidMount=function(){this._input&&this.props.command.inputType.peek()===o.e.folderUpload&&(this._input.webkitdirectory=!0);},t.prototype._getCommandButton=function(){var e=this,t=this.props.item,n=this.props.command.inputType.peek()===o.e.folderUpload?"commandFolderInput":"commandFileInput";return s.createElement(d.e,{className:t.className,text:t.name,role:t.role,ariaLabel:t.ariaLabel,checked:t.isChecked,title:t.title,iconProps:t.iconProps,menuIconProps:t.menuIconProps,styles:t.buttonStyles,onClick:function(){return e._input.click();}},s.createElement("input",{type:"file",className:n,multiple:!0,onChange:this._onChange,ref:function(t){return e._input=t;},"data-is-focusable":!1}));},t.prototype._getMenuItem=function(){var e=this,t=this.props.item,n=p(u.t,{theme:this.props.theme,disabled:t.disabled,expanded:!1,checked:t.isChecked,isAnchorLink:!!t.href,knownIcon:"None"!==t.iconProps.iconName,itemClassName:t.className,dividerClassName:t.itemType===l.e.Divider?t.className:void 0,iconClassName:t.iconProps.className,subMenuClassName:t.submenuIconProps?t.submenuIconProps.className:""});return s.createElement("button",{role:t.role,title:t.title,className:n.root,"aria-label":t.ariaLabel,"aria-checked":t.isChecked,onClick:function(){return e._input.click();},"aria-posinset":t["aria-posinset"],"aria-setsize":t["aria-setsize"]},s.createElement("div",{className:n.linkContent},s.createElement(r.e,{className:n.icon,iconName:t.iconProps.iconName}),s.createElement("span",{className:"ms-ContextualMenu-itemText"},t.name)),s.createElement("input",{type:"file",className:"commandFileInput",multiple:!0,onChange:this._onChange,ref:function(t){return e._input=t;},"data-is-focusable":!1}));},Object(a.__decorate)([Object(c.e)("UploadCommand",["theme"])],t);}(s.Component)),_=n(4051),h=n(376),b=n(92);Object(b.n)([{rawString:".ms-ReactCommandManager-iconContainer{position:relative;font-size:16px;margin:0 4px;height:16px;width:16px}.ms-ReactCommandManager-FileTypeIcon-icon{width:16px;height:16px;overflow:visible}.ms-ReactCommandManager-logoFillIcon,.ms-ReactCommandManager-logoIcon{position:absolute;left:0;right:0}.ms-ReactCommandManager-logoFillIcon[data-icon-name=TeamsLogo16],.ms-ReactCommandManager-logoIcon[data-icon-name=TeamsLogo16]{color:#6264a7}.ms-ReactCommandManager-logoFillIcon{color:#fff}.ms-Button-icon[data-icon-name=Sync].is-active{animation:none;animation:rotate-progress 1.1s infinite linear}@keyframes rotate-progress{from{transform:rotate(0)}to{transform:rotate(360deg)}}.alert{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}"}]);var g=(function(e){function t(t){var n=e.call(this,t)||this;n._getAriaAlert=function(e){return s.createElement("span",{className:"alert","aria-live":"polite"},e);},n._scope=new h.e(),n._resources=n.props.command.resources,n._observables=n._scope.attach(new(n._resources.consume(i.i))({owner:n}));var a=n.props.isActive,r=void 0===a||a;return n._isActive=n._observables.wrap(r),n.state={isCalloutVisible:!1,badge:void 0},n;}return Object(a.__extends)(t,e),t.prototype.render=function(){return this.props.item.renderedInOverflow&&console.error("ShowSelection unsuported in overflow"),this._getCommandButton();},t.prototype.componentWillUnmount=function(){this._scope.dispose();},t.prototype.componentDidMount=function(){var e=this,t=this.props.command;this._observables.compute(function(){var n,a=null===(n=e._isActive.peek())||void 0===n||n,i=t.iconBadge();e.setState({isCalloutVisible:a,badge:i?i.toString():void 0});});},t.prototype._getCommandButton=function(){var e=this.props.item;return s.createElement(s.Fragment,null,s.createElement(d.e,Object(a.__assign)({className:e.className,text:e.name,tooltip:e.tooltip,role:e.role,split:e.split,ariaLabel:e.ariaLabel,title:e.title,disabled:e.disabled,iconProps:e.iconProps,styles:e.buttonStyles},e)),this._getAriaAlert(e.ariaLabel));},Object(a.__decorate)([Object(c.e)("ClearSelectionCommand",["theme"])],t);}(s.Component)),v=n(932),y=n(3642),S=n(57),D=n(4),I=n(263),x=n(2890),C=n(722),O=!D.e.isActivated("DECE2E22-B729-48C2-9F8C-E59C64018D1F","08/18/2023","Enable colored folders in the OneUp Command Bar"),w=!D.e.isActivated("FA997DAE-4064-407C-8C1B-C8458DF7A7FF","10/10/2022","Set version history command event target as contenxtual menu target"),E=!D.e.isActivated("56a7c00d-3b78-4fe5-9b4c-dc40ab8541e4","10/03/2022","Add alert to selection command"),A=(function(e){function t(t,n){var i=e.call(this,t,n)||this;i._getCommands=function(){var e=i,t=e._convertCommand,n=e.scope,r=e.observables,o=e.allCommands,s=n.attach(o.filter(function(e){return(function(e){return 0!=(23&__WRAPPED_get(e,'location'));}(e))&&e.isVisible();})),c=n.attach(s.filter(L).map(t)),d=n.attach(o.filter(P).filter(function(e){return e.isVisible();}).map(t)),l=n.attach(s.filter(k).map(t)),u=n.attach(s.filter(M).map(t));return r.pureCompute(function(){var e={items:c().slice(),farItems:u().slice(),overflowItems:d().slice()};return l().length>0?Object(a.__assign)(Object(a.__assign)({},e),{middleItems:l().slice()}):e;}).extend({deferred:!0});},i._convertCommand=function(e){var t,n,a,c,d,l,u,f,p,h,b=e.targetCommand(),v=e.getKey(),y=e.commandClass(),S=e.label(),C=e.isLabelVisible()&&S,A=e.hidesMenuChevron||!e.isLabelVisible(),L=null===(t=e.color)||void 0===t?void 0:t.call(e),k=null===(n=e.fileIconName)||void 0===n?void 0:n.call(e),M=null===(a=e.isShortcut)||void 0===a?void 0:a.call(e),P=null===(c=e.isFolder)||void 0===c?void 0:c.call(e),F=i._convertCommands(b.visibleChildren()),H=F&&F.length,R=b.inputType();R===o.e.htmlFileUpload||R===o.e.folderUpload?p=function(e,t){return s.createElement(m,{item:e,command:b,key:v,dismissMenu:t});}:e.payload?p=function(t){return s.createElement(_.e,{item:t,command:e,key:v,isActive:i._isActive});}:E&&e.action&&"DeferredShowSelection"===e.action.name?p=function(t){return s.createElement(g,{item:t,command:e,key:v,isActive:i._isActive});}:!w||"DeferredshowVersionHistoryShowReactVersionHistory"!==(null===(d=e.action)||void 0===d?void 0:d.name)&&"VersionHistory"!==(null===(l=e.action)||void 0===l?void 0:l.name)?w&&"DeferredlaunchMoveCopyPickerLaunchMoveCopyPicker"===(null===(u=e.action)||void 0===u?void 0:u.name)&&(f=!0):f=!0,e.appIconName?h=function(t,n){return s.createElement("span",{className:"ms-ReactCommandManager-iconContainer"},s.createElement(r.e,{iconName:e.appIconName.logoFill16,className:"ms-ReactCommandManager-logoFillIcon"}),s.createElement(r.e,{iconName:e.appIconName.logo16,className:"ms-ReactCommandManager-logoIcon"}));}:e.onRenderIcon&&(h=e.onRenderIcon),O&&i._isColoredFoldersEnabled()&&P&&void 0!==L&&(h=function(e,t){var n="linkedfolder"===k?I.e.linkedFolder:"sharedfolder"===k?I.e.sharedFolder:I.e.folder;return s.createElement("span",{className:"ms-ReactCommandManager-iconContainer"},s.createElement(x.e,{className:"ms-ReactCommandManager-FileTypeIcon-icon",color:L,fileIconType:n,isShortcut:M,size:16}));});var N=v+(C?"-label":""),B={textContainer:{whiteSpace:"noWrap"}};e.positionIconRight&&(B.flexContainer={flexDirection:"row-reverse"});var j=y?"od-Command--"+y:"";e.isCurrentView&&(j+=" is-pivot",e.isLastPivot&&(j+=" is-last-pivot"),e.isCurrentView()&&(j+=" is-current-view")),e.isToggled()&&(j+=" is-toggled"),C||(j+=" hide-label");var V=e.isDisabled();V&&(e.isInvisibleWhenDisabled?j+=" is-invisible":j+=" is-disabled");var z,G=!D.e.isActivated("E215540A-E611-4D29-B065-54CE606AE801","01/20/2022","Make all visible commands focusable");return z=!e.isDecorative&&(G?e.isVisible():!V),{key:v,data:e,cacheKey:N,role:e.role,name:S,buttonStyles:B,disabled:V,iconOnly:e.isIconOnly,onRender:p,onRenderIcon:h,ariaLabel:e.computedAccessibleLabel(),title:b.tooltip()||e.tooltip()||e.computedAccessibleLabel(),className:j,canCheck:e.isToggleable,isChecked:e.isToggleable?e.isToggled():void 0,menuIconProps:A&H?T:void 0,preferMenuTargetAsEventTarget:f,subMenuProps:H?{items:F,onMenuOpened:e.callback?function(){return e.callback();}:void 0}:void 0,iconProps:U(e),"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded&&e.ariaExpanded(),"aria-haspopup":e.ariaHasPopup,"data-is-focusable":z,"data-automationid":e.automationId||void 0,shortcutProps:{content:e.computedAccessibleLabel(),keySequences:e.keys},onMenuClick:function(e){b.onClick(b,e);},onClick:function(e){e&&e.persist(),b.onClick(b,e);}};},i._convertCommands=function(e){for(var t=[],n=0,a=e;n<a.length;n++){var r=__WRAPPED_get(a,n),o=i._convertCommand(r);o&&(r.hasLineBreakBefore()&&t.push({key:"".concat(o.key,"_before_divider"),itemType:l.e.Divider}),t.push(o),r.hasLineBreakAfter()&&t.push({key:"".concat(o.key,"_after_divider"),itemType:l.e.Divider}));}return t;},i._isColoredFoldersEnabled=n.isColoredFoldersEnabled;var c=t.isActive,d=void 0===c||c,u=i.observables,f=u.wrap(t.commandSet);return i._isActive=u.wrap(d),i.allCommands=u.createArray(),i._replicateCommandSet(f.peek()),u.subscribe(f,function(e){i._replicateCommandSet(e);}),i.commandBarItems=i._getCommands(),i;}return Object(a.__extends)(t,e),t.prototype.getOverFlowHostCommand=function(){return this._overflowHostCommand;},t.prototype._replicateCommandSet=function(e){this._replicationSubscription&&(this._replicationSubscription.dispose(),this._replicationSubscription=void 0),e?(this._replicationSubscription=Object(y.e)(e.commands,this.allCommands),this._overflowHostCommand=e.overflowHostCommand,this.scope.attach(this._replicationSubscription)):(this.allCommands([]),this._overflowHostCommand=void 0);},t.dependencies=Object(a.__assign)(Object(a.__assign)({},i.n.dependencies),{isColoredFoldersEnabled:C.t}),t;}(i.n));function L(e){return 3==(3&__WRAPPED_get(e,'location'));}function k(e){return 16==(16&__WRAPPED_get(e,'location'));}function M(e){return 4==(4&__WRAPPED_get(e,'location'));}function P(e){return 2==(3&__WRAPPED_get(e,'location'));}var T={iconName:null,styles:{root:{display:"none!important"}}};function U(e){var t=e.icon(),n=e.iconSize(),a=(24-n)/2;if(t)return{iconName:t.toString(),className:t.getExtraClasses(),styles:{root:{marginLeft:a,marginRight:a,width:"".concat(n,"px"),height:"".concat(n,"px"),lineHeight:"".concat(n,"px"),selectors:{img:{display:"block",width:"".concat(n,"px"),height:"".concat(n,"px")}}}}};var i=e.iconUrl();return i?{iconType:v.e.Image,imageProps:{src:i,width:"".concat(n,"px"),height:"".concat(n,"px")},styles:{root:{marginLeft:a,marginRight:a,width:"".concat(n,"px!important"),height:"".concat(n,"px!important")}}}:T;}var F=Object(S.o)("ReactCommandManager",A);},4716:function(e,t,n){"use strict";t.e='<div data-bind="element:rootElement,keyboard:keyboardOptions,react:reactBindingParams"></div>';},4717:function(e,t,n){"use strict";var a=n(0),i=n(2227),r=n(2243),o=n(2266),s=n(2250),c=n(2249),d=n(2245),l=n(4128),u=n(150),f=n(4),p=n(33),m=Object(u.e)(function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,n.ee(116,5687)];case 1:return[2,e.sent().ReactCommandBar];}});});}),_=(function(e){function t(t,n){var a=e.call(this,t,n)||this;a._responsiveUI=n.responsiveUI,a.addBindingHandlers({react:d.t,element:s.e,keyboard:c.e,interactionScope:o.t});var i=a.observables.create(!0);a._reactCommandManager=a.scope.attach(new n.reactCommandManagerType({commandSet:t.commandSet,isActive:i})),a.rootElement=a.createObservable(),a.shouldBlockEscKey=a.createObservable(!1),a.keyboardOptions={target:Object(p.isFeatureEnabled)(p.shouldTargetWindow)?window:document,isActive:i,mappings:{},allowButtonEvents:!0,eventFilter:a._getEventFilter()},a._initializeKeyboardMappings();var r=a._getCommandBarProps();return a.reactBindingParams={componentType:m,props:r},a;}return Object(a.__extends)(t,e),t.prototype._getCommandBarProps=function(){var e=this;return this.observables.pureCompute(function(){var t,n=e._reactCommandManager.commandBarItems(),i=n.items,r=n.farItems,o=i,s=n.overflowItems;if(o.length){var c=o[0];"Small"===e._responsiveUI.formFactorSize()?(s=Object(a.__spreadArray)(Object(a.__spreadArray)([],o.slice(1),!0),s,!0),o=[c]):o=Object(a.__spreadArray)([c],o.slice(1),!0);}if(s=s.map(function(e){return Object(a.__assign)(Object(a.__assign)({},e),{renderedInOverflow:!0});}),f.t.isActivated("264FA7B2-B9C5-11EB-8529-0242AC130003","5/20/2021","Suppress command callouts from inactive modals")||e.observables.unwrap(e.keyboardOptions.isActive))for(var d=0,l=s;d<l.length;d++){var u=__WRAPPED_get(l,d).data,p=u.payload;if(p&&p.control()&&u.isOpen()&&(!u.action||!u.action.isToggled())){t=u;break;}}return{mainCommands:o,farCommands:r,overFlowCommands:s,payloadCommand:t,isActive:e.observables.unwrap(e.keyboardOptions.isActive),shouldBlockEscKey:e.shouldBlockEscKey};}).extend({deferred:!0});},t.prototype._initializeKeyboardMappings=function(){var e=this,t=this._reactCommandManager.allCommands,n=function(t){var n={};h(n,t),e.keyboardOptions.mappings=n;};n(t.peek()),this.observables.subscribe(t,n);},t.prototype._getEventFilter=function(){var e=this;return function(t,n,a){var i;if("Left"===t||"Right"===t){var r=e.rootElement.peek();if(a&&r.contains(a.target))return!1;}if(!Object(p.isFeatureEnabled)(p.shouldTargetWindow)&&!f.t.isActivated("b1e3b1a3-c4e6-4d4f-a40d-d456de338f8d","07/05/2021","fixing the escape key problem when commandbar is overflown")&&"Esc"===t&&e.shouldBlockEscKey.peek())return e.shouldBlockEscKey(!1),!1;for(var o=0,s=Array.from(document.querySelectorAll("[data-handle-special-keys]"));o<s.length;o++){var c=__WRAPPED_get(s,o);if(-1!==((null===(i=c.getAttribute("data-handle-special-keys"))||void 0===i?void 0:i.split(" "))||[]).indexOf(t)&&a&&c.contains(a.target))return!1;}return!0;};},t.dependencies=Object(a.__assign)(Object(a.__assign)({},i.e.dependencies),{responsiveUI:r.t,reactCommandManagerType:l.t}),t;}(i.e));function h(e,t){for(var n=function(t){if(t.keys)for(var n=function(e,n){t.onClick(t,n),n.preventDefault();},a=0,i=t.keys;a<i.length;a++){var r=__WRAPPED_get(i,a);__WRAPPED_get(e,r)||__WRAPPED_set(e,r,'=',[]),__WRAPPED_get(e,r).push(n);}var o=t.children.peek();o.length&&h(e,o);},a=0,i=t;a<i.length;a++)n(__WRAPPED_get(i,a));}t.e=_;},7904:function(e,t,n){"use strict";n.r(t),n.d(t,"resourceKey",function(){return b;});var a=n(4716),i=n(0),r=n(2227),o=n(2250),s=n(2245),c=n(4128),d=n(2243),l=n(150),u=n(4717),f=n(4),p=n(375),m=Object(l.e)(function(){return Object(i.__awaiter)(void 0,void 0,void 0,function(){return Object(i.__generator)(this,function(e){switch(e.label){case 0:return[4,n.ee(116,5687)];case 1:return[2,e.sent().ReactCommandBar];}});});}),_=(function(e){function t(t,n){var a=e.call(this,t,n)||this;a._oneUpResponsiveUI=n.responsiveUI,a.addBindingHandlers({react:s.t,element:o.e}),a._oneUpCommandManager=a.scope.attach(new n.reactCommandManagerType({commandSet:t.commandSet})),a.rootElement=a.createObservable();var i=a._getOneUpCommandBarProps();return a.reactBindingParams={componentType:m,props:i},a;}return Object(i.__extends)(t,e),t.prototype._getOneUpCommandBarProps=function(){var e=this;return this.observables.pureCompute(function(){var t=e._oneUpCommandManager.commandBarItems(),n=t.items,a=t.middleItems,r=t.farItems,o=t.overflowItems,s=Object(i.__spreadArray)([],n,!0),c=o,d=a,l=r,u=[],p=e._oneUpResponsiveUI.windowWidth();p>=900&&p<1095?u=s.splice(-1):p>=710&&p<900?(u=s.splice(-2),d=e._shortenTitleInMediumScreen(d)):p>=480&&p<710?(u=s.splice(-3),d=[]):p<480&&(u=s.splice(-4),d=[]),u.length>0&&(c=Object(i.__spreadArray)(Object(i.__spreadArray)([],u,!0),c,!0),l=e._removePageCountInScreenLessThanXLarge(r));var m,_=c.map(function(e){return Object(i.__assign)(Object(i.__assign)({},e),{renderedInOverflow:!0});});if(f.t.isActivated("264FA7B2-B9C5-11EB-8529-0242AC130003","5/20/2021","Suppress command callouts from inactive modals")||e.observables.unwrap(e.keyboardOptions.isActive))for(var h=0,b=c;h<b.length;h++){var g=__WRAPPED_get(b,h).data,v=g.payload;if(v&&v.control()&&g.isOpen()&&(!g.action||!g.action.isToggled())){m=g;break;}}var y=Object(i.__spreadArray)(Object(i.__spreadArray)(Object(i.__spreadArray)(Object(i.__spreadArray)([],s,!0),d,!0),_,!0),l,!0).map(function(e){return e.data;}),S=e._oneUpCommandManager.getOverFlowHostCommand();return S&&y.push(S),e._refreshBubbleQueue(y),{mainCommands:s,middleCommands:d,farCommands:l,overFlowCommands:_,payloadCommand:m,shouldBlockEscKey:e.shouldBlockEscKey,overflowHostCommand:S};}).extend({deferred:!0});},t.prototype._refreshBubbleQueue=function(e){var t,n=this,a=this.resources.consume(p.I.optional);if(a&&0!==e.length){a.clearAllBubbles();var i=void 0;e.forEach(function(e){var t,r=n.observables.unwrap(e.teachingBubble),o=n.observables.unwrap(null==r?void 0:r.isVisible),s=null===(t=null==r?void 0:r.campaign)||void 0===t?void 0:t.call(r);s&&o&&(null==a||a.addBubble({bubble:s}).then(function(e){e&&!i&&(i=s);}));}),i&&(null===(t=a.currentBubble.get())||void 0===t?void 0:t.campaign)!==i&&a.currentBubble.set({campaign:i});}},t.prototype._removePageCountInScreenLessThanXLarge=function(e){return e.filter(function(e){return"oneUpPageCount"!==e["data-automationid"];});},t.prototype._shortenTitleInMediumScreen=function(e){var t,n=Object(i.__assign)({},e[0]);return n.name=null===(t=n.name)||void 0===t?void 0:t.replace(/(.{16}).+(\..+)/,"$1...$2"),[n];},t.dependencies=Object(i.__assign)(Object(i.__assign)({},r.e.dependencies),{responsiveUI:d.t,reactCommandManagerType:c.t}),t;}(u.e)),h=n(2229),b=Object(h.t)({name:"OneUpCommandBar",template:a.e,automationName:"ms-oneup-command-bar-wrapper",viewModelType:_});t.default=b;}}]);