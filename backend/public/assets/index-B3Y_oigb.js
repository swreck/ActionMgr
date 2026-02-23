(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();var zo={exports:{}},Ui={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh=Symbol.for("react.transitional.element"),Mh=Symbol.for("react.fragment");function Do(e,t,a){var l=null;if(a!==void 0&&(l=""+a),t.key!==void 0&&(l=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:Oh,type:e,key:l,ref:t!==void 0?t:null,props:a}}Ui.Fragment=Mh;Ui.jsx=Do;Ui.jsxs=Do;zo.exports=Ui;var c=zo.exports,Co={exports:{}},G={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=Symbol.for("react.transitional.element"),_h=Symbol.for("react.portal"),wh=Symbol.for("react.fragment"),Uh=Symbol.for("react.strict_mode"),Rh=Symbol.for("react.profiler"),Hh=Symbol.for("react.consumer"),Bh=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),Yh=Symbol.for("react.suspense"),qh=Symbol.for("react.memo"),Oo=Symbol.for("react.lazy"),Lh=Symbol.for("react.activity"),$s=Symbol.iterator;function kh(e){return e===null||typeof e!="object"?null:(e=$s&&e[$s]||e["@@iterator"],typeof e=="function"?e:null)}var Mo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_o=Object.assign,wo={};function pl(e,t,a){this.props=e,this.context=t,this.refs=wo,this.updater=a||Mo}pl.prototype.isReactComponent={};pl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Uo(){}Uo.prototype=pl.prototype;function ku(e,t,a){this.props=e,this.context=t,this.refs=wo,this.updater=a||Mo}var Xu=ku.prototype=new Uo;Xu.constructor=ku;_o(Xu,pl.prototype);Xu.isPureReactComponent=!0;var Ws=Array.isArray;function kc(){}var le={H:null,A:null,T:null,S:null},Ro=Object.prototype.hasOwnProperty;function Qu(e,t,a){var l=a.ref;return{$$typeof:Lu,type:e,key:t,ref:l!==void 0?l:null,props:a}}function Xh(e,t){return Qu(e.type,t,e.props)}function Zu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lu}function Qh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Fs=/\/+/g;function lc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qh(""+e.key):t.toString(36)}function Zh(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(kc,kc):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ba(e,t,a,l,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case Lu:case _h:u=!0;break;case Oo:return u=e._init,Ba(u(e._payload),t,a,l,n)}}if(u)return n=n(e),u=l===""?"."+lc(e,0):l,Ws(n)?(a="",u!=null&&(a=u.replace(Fs,"$&/")+"/"),Ba(n,t,a,"",function(d){return d})):n!=null&&(Zu(n)&&(n=Xh(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Fs,"$&/")+"/")+u)),t.push(n)),1;u=0;var s=l===""?".":l+":";if(Ws(e))for(var r=0;r<e.length;r++)l=e[r],i=s+lc(l,r),u+=Ba(l,t,a,i,n);else if(r=kh(e),typeof r=="function")for(e=r.call(e),r=0;!(l=e.next()).done;)l=l.value,i=s+lc(l,r++),u+=Ba(l,t,a,i,n);else if(i==="object"){if(typeof e.then=="function")return Ba(Zh(e),t,a,l,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function An(e,t,a){if(e==null)return e;var l=[],n=0;return Ba(e,l,"","",function(i){return t.call(a,i,n++)}),l}function Vh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Is=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Kh={map:An,forEach:function(e,t,a){An(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return An(e,function(){t++}),t},toArray:function(e){return An(e,function(t){return t})||[]},only:function(e){if(!Zu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Activity=Lh;G.Children=Kh;G.Component=pl;G.Fragment=wh;G.Profiler=Rh;G.PureComponent=ku;G.StrictMode=Uh;G.Suspense=Yh;G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le;G.__COMPILER_RUNTIME={__proto__:null,c:function(e){return le.H.useMemoCache(e)}};G.cache=function(e){return function(){return e.apply(null,arguments)}};G.cacheSignal=function(){return null};G.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=_o({},e.props),n=e.key;if(t!=null)for(i in t.key!==void 0&&(n=""+t.key),t)!Ro.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(l[i]=t[i]);var i=arguments.length-2;if(i===1)l.children=a;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];l.children=u}return Qu(e.type,n,l)};G.createContext=function(e){return e={$$typeof:Bh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Hh,_context:e},e};G.createElement=function(e,t,a){var l,n={},i=null;if(t!=null)for(l in t.key!==void 0&&(i=""+t.key),t)Ro.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=t[l]);var u=arguments.length-2;if(u===1)n.children=a;else if(1<u){for(var s=Array(u),r=0;r<u;r++)s[r]=arguments[r+2];n.children=s}if(e&&e.defaultProps)for(l in u=e.defaultProps,u)n[l]===void 0&&(n[l]=u[l]);return Qu(e,i,n)};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Gh,render:e}};G.isValidElement=Zu;G.lazy=function(e){return{$$typeof:Oo,_payload:{_status:-1,_result:e},_init:Vh}};G.memo=function(e,t){return{$$typeof:qh,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=le.T,a={};le.T=a;try{var l=e(),n=le.S;n!==null&&n(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(kc,Is)}catch(i){Is(i)}finally{t!==null&&a.types!==null&&(t.types=a.types),le.T=t}};G.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()};G.use=function(e){return le.H.use(e)};G.useActionState=function(e,t,a){return le.H.useActionState(e,t,a)};G.useCallback=function(e,t){return le.H.useCallback(e,t)};G.useContext=function(e){return le.H.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e,t){return le.H.useDeferredValue(e,t)};G.useEffect=function(e,t){return le.H.useEffect(e,t)};G.useEffectEvent=function(e){return le.H.useEffectEvent(e)};G.useId=function(){return le.H.useId()};G.useImperativeHandle=function(e,t,a){return le.H.useImperativeHandle(e,t,a)};G.useInsertionEffect=function(e,t){return le.H.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return le.H.useLayoutEffect(e,t)};G.useMemo=function(e,t){return le.H.useMemo(e,t)};G.useOptimistic=function(e,t){return le.H.useOptimistic(e,t)};G.useReducer=function(e,t,a){return le.H.useReducer(e,t,a)};G.useRef=function(e){return le.H.useRef(e)};G.useState=function(e){return le.H.useState(e)};G.useSyncExternalStore=function(e,t,a){return le.H.useSyncExternalStore(e,t,a)};G.useTransition=function(){return le.H.useTransition()};G.version="19.2.4";Co.exports=G;var A=Co.exports,Ho={exports:{}},Ri={},Bo={exports:{}},Go={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,M){var _=S.length;S.push(M);e:for(;0<_;){var k=_-1>>>1,J=S[k];if(0<n(J,M))S[k]=M,S[_]=J,_=k;else break e}}function a(S){return S.length===0?null:S[0]}function l(S){if(S.length===0)return null;var M=S[0],_=S.pop();if(_!==M){S[0]=_;e:for(var k=0,J=S.length,Xe=J>>>1;k<Xe;){var Ue=2*(k+1)-1,et=S[Ue],be=Ue+1,D=S[be];if(0>n(et,_))be<J&&0>n(D,et)?(S[k]=D,S[be]=_,k=be):(S[k]=et,S[Ue]=_,k=Ue);else if(be<J&&0>n(D,_))S[k]=D,S[be]=_,k=be;else break e}}return M}function n(S,M){var _=S.sortIndex-M.sortIndex;return _!==0?_:S.id-M.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var u=Date,s=u.now();e.unstable_now=function(){return u.now()-s}}var r=[],d=[],h=1,y=null,m=3,p=!1,T=!1,E=!1,O=!1,f=typeof setTimeout=="function"?setTimeout:null,o=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function v(S){for(var M=a(d);M!==null;){if(M.callback===null)l(d);else if(M.startTime<=S)l(d),M.sortIndex=M.expirationTime,t(r,M);else break;M=a(d)}}function b(S){if(E=!1,v(S),!T)if(a(r)!==null)T=!0,j||(j=!0,ie());else{var M=a(d);M!==null&&U(b,M.startTime-S)}}var j=!1,x=-1,z=5,w=-1;function B(){return O?!0:!(e.unstable_now()-w<z)}function se(){if(O=!1,j){var S=e.unstable_now();w=S;var M=!0;try{e:{T=!1,E&&(E=!1,o(x),x=-1),p=!0;var _=m;try{t:{for(v(S),y=a(r);y!==null&&!(y.expirationTime>S&&B());){var k=y.callback;if(typeof k=="function"){y.callback=null,m=y.priorityLevel;var J=k(y.expirationTime<=S);if(S=e.unstable_now(),typeof J=="function"){y.callback=J,v(S),M=!0;break t}y===a(r)&&l(r),v(S)}else l(r);y=a(r)}if(y!==null)M=!0;else{var Xe=a(d);Xe!==null&&U(b,Xe.startTime-S),M=!1}}break e}finally{y=null,m=_,p=!1}M=void 0}}finally{M?ie():j=!1}}}var ie;if(typeof g=="function")ie=function(){g(se)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,we=_e.port2;_e.port1.onmessage=se,ie=function(){we.postMessage(null)}}else ie=function(){f(se,0)};function U(S,M){x=f(function(){S(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var _=m;m=M;try{return S()}finally{m=_}},e.unstable_requestPaint=function(){O=!0},e.unstable_runWithPriority=function(S,M){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var _=m;m=S;try{return M()}finally{m=_}},e.unstable_scheduleCallback=function(S,M,_){var k=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?k+_:k):_=k,S){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=_+J,S={id:h++,callback:M,priorityLevel:S,startTime:_,expirationTime:J,sortIndex:-1},_>k?(S.sortIndex=_,t(d,S),a(r)===null&&S===a(d)&&(E?(o(x),x=-1):E=!0,U(b,_-k))):(S.sortIndex=J,t(r,S),T||p||(T=!0,j||(j=!0,ie()))),S},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(S){var M=m;return function(){var _=m;m=M;try{return S.apply(this,arguments)}finally{m=_}}}})(Go);Bo.exports=Go;var Jh=Bo.exports,Yo={exports:{}},Me={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h=A;function qo(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function kt(){}var Oe={d:{f:kt,r:function(){throw Error(qo(522))},D:kt,C:kt,L:kt,m:kt,X:kt,S:kt,M:kt},p:0,findDOMNode:null},Wh=Symbol.for("react.portal");function Fh(e,t,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wh,key:l==null?null:""+l,children:e,containerInfo:t,implementation:a}}var Hl=$h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Hi(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Oe;Me.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(qo(299));return Fh(e,t,null,a)};Me.flushSync=function(e){var t=Hl.T,a=Oe.p;try{if(Hl.T=null,Oe.p=2,e)return e()}finally{Hl.T=t,Oe.p=a,Oe.d.f()}};Me.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Oe.d.C(e,t))};Me.prefetchDNS=function(e){typeof e=="string"&&Oe.d.D(e)};Me.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,l=Hi(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Oe.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:i}):a==="script"&&Oe.d.X(e,{crossOrigin:l,integrity:n,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Me.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Hi(t.as,t.crossOrigin);Oe.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Oe.d.M(e)};Me.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,l=Hi(a,t.crossOrigin);Oe.d.L(e,a,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Me.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Hi(t.as,t.crossOrigin);Oe.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Oe.d.m(e)};Me.requestFormReset=function(e){Oe.d.r(e)};Me.unstable_batchedUpdates=function(e,t){return e(t)};Me.useFormState=function(e,t,a){return Hl.H.useFormState(e,t,a)};Me.useFormStatus=function(){return Hl.H.useHostTransitionStatus()};Me.version="19.2.4";function Lo(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lo)}catch(e){console.error(e)}}Lo(),Yo.exports=Me;var Ih=Yo.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve=Jh,ko=A,Ph=Ih;function N(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dn(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Qo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zo(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ps(e){if(dn(e)!==e)throw Error(N(188))}function eg(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return Ps(n),e;if(i===l)return Ps(n),t;i=i.sibling}throw Error(N(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(N(189))}}if(a.alternate!==l)throw Error(N(190))}if(a.tag!==3)throw Error(N(188));return a.stateNode.current===a?e:t}function Vo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Vo(e),t!==null)return t;e=e.sibling}return null}var ne=Object.assign,tg=Symbol.for("react.element"),Tn=Symbol.for("react.transitional.element"),Ml=Symbol.for("react.portal"),qa=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),Jo=Symbol.for("react.consumer"),Dt=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),Ku=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Vc=Symbol.for("react.activity"),ag=Symbol.for("react.memo_cache_sentinel"),er=Symbol.iterator;function Al(e){return e===null||typeof e!="object"?null:(e=er&&e[er]||e["@@iterator"],typeof e=="function"?e:null)}var lg=Symbol.for("react.client.reference");function Kc(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lg?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qa:return"Fragment";case Xc:return"Profiler";case Ko:return"StrictMode";case Qc:return"Suspense";case Zc:return"SuspenseList";case Vc:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ml:return"Portal";case Dt:return e.displayName||"Context";case Jo:return(e._context.displayName||"Context")+".Consumer";case Vu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ku:return t=e.displayName||null,t!==null?t:Kc(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return Kc(e(t))}catch{}}return null}var _l=Array.isArray,H=ko.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=Ph.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xa={pending:!1,data:null,method:null,action:null},Jc=[],La=-1;function bt(e){return{current:e}}function Ne(e){0>La||(e.current=Jc[La],Jc[La]=null,La--)}function ee(e,t){La++,Jc[La]=e.current,e.current=t}var vt=bt(null),Wl=bt(null),ea=bt(null),li=bt(null);function ni(e,t){switch(ee(ea,t),ee(Wl,e),ee(vt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?co(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=co(t),e=gm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ne(vt),ee(vt,e)}function il(){Ne(vt),Ne(Wl),Ne(ea)}function $c(e){e.memoizedState!==null&&ee(li,e);var t=vt.current,a=gm(t,e.type);t!==a&&(ee(Wl,e),ee(vt,a))}function ii(e){Wl.current===e&&(Ne(vt),Ne(Wl)),li.current===e&&(Ne(li),sn._currentValue=xa)}var nc,tr;function pa(e){if(nc===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);nc=t&&t[1]||"",tr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nc+e+tr}var ic=!1;function cc(e,t){if(!e||ic)return"";ic=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(p){var m=p}Reflect.construct(e,[],y)}else{try{y.call()}catch(p){m=p}e.call(y.prototype)}}else{try{throw Error()}catch(p){m=p}(y=e())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(p){if(p&&m&&typeof p.stack=="string")return[p.stack,m.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var r=u.split(`
`),d=s.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===d.length)for(l=r.length-1,n=d.length-1;1<=l&&0<=n&&r[l]!==d[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==d[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==d[n]){var h=`
`+r[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=n);break}}}finally{ic=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pa(a):""}function ng(e,t){switch(e.tag){case 26:case 27:case 5:return pa(e.type);case 16:return pa("Lazy");case 13:return e.child!==t&&t!==null?pa("Suspense Fallback"):pa("Suspense");case 19:return pa("SuspenseList");case 0:case 15:return cc(e.type,!1);case 11:return cc(e.type.render,!1);case 1:return cc(e.type,!0);case 31:return pa("Activity");default:return""}}function ar(e){try{var t="",a=null;do t+=ng(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Wc=Object.prototype.hasOwnProperty,Ju=ve.unstable_scheduleCallback,uc=ve.unstable_cancelCallback,ig=ve.unstable_shouldYield,cg=ve.unstable_requestPaint,Je=ve.unstable_now,ug=ve.unstable_getCurrentPriorityLevel,$o=ve.unstable_ImmediatePriority,Wo=ve.unstable_UserBlockingPriority,ci=ve.unstable_NormalPriority,sg=ve.unstable_LowPriority,Fo=ve.unstable_IdlePriority,rg=ve.log,og=ve.unstable_setDisableYieldValue,mn=null,$e=null;function $t(e){if(typeof rg=="function"&&og(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(mn,e)}catch{}}var We=Math.clz32?Math.clz32:mg,fg=Math.log,dg=Math.LN2;function mg(e){return e>>>=0,e===0?32:31-(fg(e)/dg|0)|0}var En=256,zn=262144,Dn=4194304;function ya(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=ya(l):(u&=s,u!==0?n=ya(u):a||(a=s&~e,a!==0&&(n=ya(a))))):(s=l&~i,s!==0?n=ya(s):u!==0?n=ya(u):a||(a=l&~e,a!==0&&(n=ya(a)))),n===0?0:t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function hn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Io(){var e=Dn;return Dn<<=1,!(Dn&62914560)&&(Dn=4194304),e}function sc(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function gn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gg(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,d=e.hiddenUpdates;for(a=u&~a;0<a;){var h=31-We(a),y=1<<h;s[h]=0,r[h]=-1;var m=d[h];if(m!==null)for(d[h]=null,h=0;h<m.length;h++){var p=m[h];p!==null&&(p.lane&=-536870913)}a&=~y}l!==0&&Po(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Po(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-We(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ef(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-We(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function tf(e,t){var a=t&-t;return a=a&42?1:$u(a),a&(e.suspendedLanes|t)?0:a}function $u(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wu(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function af(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Em(e.type))}function lr(e,t){var a=K.p;try{return K.p=e,t()}finally{K.p=a}}var ma=Math.random().toString(36).slice(2),Ae="__reactFiber$"+ma,Le="__reactProps$"+ma,yl="__reactContainer$"+ma,Fc="__reactEvents$"+ma,pg="__reactListeners$"+ma,yg="__reactHandles$"+ma,nr="__reactResources$"+ma,pn="__reactMarker$"+ma;function Fu(e){delete e[Ae],delete e[Le],delete e[Fc],delete e[pg],delete e[yg]}function ka(e){var t=e[Ae];if(t)return t;for(var a=e.parentNode;a;){if(t=a[yl]||a[Ae]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=fo(e);e!==null;){if(a=e[Ae])return a;e=fo(e)}return t}e=a,a=e.parentNode}return null}function vl(e){if(e=e[Ae]||e[yl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(N(33))}function Ia(e){var t=e[nr];return t||(t=e[nr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Se(e){e[pn]=!0}var lf=new Set,nf={};function Oa(e,t){cl(e,t),cl(e+"Capture",t)}function cl(e,t){for(nf[e]=t,e=0;e<t.length;e++)lf.add(t[e])}var vg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ir={},cr={};function bg(e){return Wc.call(cr,e)?!0:Wc.call(ir,e)?!1:vg.test(e)?cr[e]=!0:(ir[e]=!0,!1)}function qn(e,t,a){if(bg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Cn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function St(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xg(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ic(e){if(!e._valueTracker){var t=cf(e)?"checked":"value";e._valueTracker=xg(e,t,""+e[t])}}function uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=cf(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sg=/[\n"\\]/g;function ct(e){return e.replace(Sg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pc(e,t,a,l,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+lt(t)):e.value!==""+lt(t)&&(e.value=""+lt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?eu(e,u,lt(t)):a!=null?eu(e,u,lt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+lt(s):e.removeAttribute("name")}function sf(e,t,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ic(e);return}a=a!=null?""+lt(a):"",t=t!=null?""+lt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Ic(e)}function eu(e,t,a){t==="number"&&ui(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Pa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+lt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function rf(e,t,a){if(t!=null&&(t=""+lt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+lt(a):""}function of(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(N(92));if(_l(l)){if(1<l.length)throw Error(N(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=lt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ic(e)}function ul(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ng=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ur(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Ng.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ff(e,t,a){if(t!=null&&typeof t!="object")throw Error(N(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&ur(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&ur(e,i,t[i])}function Iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ag=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ln(e){return Ag.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ct(){}var tu=null;function Pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,el=null;function sr(e){var t=vl(e);if(t&&(e=t.stateNode)){var a=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ct(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Le]||null;if(!n)throw Error(N(90));Pc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&uf(l)}break e;case"textarea":rf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Pa(e,!!a.multiple,t,!1)}}}var rc=!1;function df(e,t,a){if(rc)return e(t,a);rc=!0;try{var l=e(t);return l}finally{if(rc=!1,(Xa!==null||el!==null)&&($i(),Xa&&(t=Xa,e=el,el=Xa=null,sr(t),e)))for(t=0;t<e.length;t++)sr(e[t])}}function Fl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Le]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(N(231,t,typeof a));return a}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(Rt)try{var Tl={};Object.defineProperty(Tl,"passive",{get:function(){au=!0}}),window.addEventListener("test",Tl,Tl),window.removeEventListener("test",Tl,Tl)}catch{au=!1}var Wt=null,es=null,kn=null;function mf(){if(kn)return kn;var e,t=es,a=t.length,l,n="value"in Wt?Wt.value:Wt.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return kn=n.slice(e,1<l?1-l:void 0)}function Xn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function rr(){return!1}function ke(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?On:rr,this.isPropagationStopped=rr,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=ke(Ma),yn=ne({},Ma,{view:0,detail:0}),Tg=ke(yn),oc,fc,El,Yi=ne({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ts,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==El&&(El&&e.type==="mousemove"?(oc=e.screenX-El.screenX,fc=e.screenY-El.screenY):fc=oc=0,El=e),oc)},movementY:function(e){return"movementY"in e?e.movementY:fc}}),or=ke(Yi),Eg=ne({},Yi,{dataTransfer:0}),zg=ke(Eg),Dg=ne({},yn,{relatedTarget:0}),dc=ke(Dg),Cg=ne({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=ke(Cg),Mg=ne({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_g=ke(Mg),wg=ne({},Ma,{data:0}),fr=ke(wg),Ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hg[e])?!!t[e]:!1}function ts(){return Bg}var Gg=ne({},yn,{key:function(e){if(e.key){var t=Ug[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ts,charCode:function(e){return e.type==="keypress"?Xn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yg=ke(Gg),qg=ne({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dr=ke(qg),Lg=ne({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ts}),kg=ke(Lg),Xg=ne({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qg=ke(Xg),Zg=ne({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vg=ke(Zg),Kg=ne({},Ma,{newState:0,oldState:0}),Jg=ke(Kg),$g=[9,13,27,32],as=Rt&&"CompositionEvent"in window,Bl=null;Rt&&"documentMode"in document&&(Bl=document.documentMode);var Wg=Rt&&"TextEvent"in window&&!Bl,hf=Rt&&(!as||Bl&&8<Bl&&11>=Bl),mr=" ",hr=!1;function gf(e,t){switch(e){case"keyup":return $g.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qa=!1;function Fg(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(hr=!0,mr);case"textInput":return e=t.data,e===mr&&hr?null:e;default:return null}}function Ig(e,t){if(Qa)return e==="compositionend"||!as&&gf(e,t)?(e=mf(),kn=es=Wt=null,Qa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hf&&t.locale!=="ko"?null:t.data;default:return null}}var Pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pg[e.type]:t==="textarea"}function yf(e,t,a,l){Xa?el?el.push(l):el=[l]:Xa=l,t=Ti(t,"onChange"),0<t.length&&(a=new Gi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Gl=null,Il=null;function ep(e){dm(e,0)}function qi(e){var t=wl(e);if(uf(t))return e}function pr(e,t){if(e==="change")return t}var vf=!1;if(Rt){var mc;if(Rt){var hc="oninput"in document;if(!hc){var yr=document.createElement("div");yr.setAttribute("oninput","return;"),hc=typeof yr.oninput=="function"}mc=hc}else mc=!1;vf=mc&&(!document.documentMode||9<document.documentMode)}function vr(){Gl&&(Gl.detachEvent("onpropertychange",bf),Il=Gl=null)}function bf(e){if(e.propertyName==="value"&&qi(Il)){var t=[];yf(t,Il,e,Pu(e)),df(ep,t)}}function tp(e,t,a){e==="focusin"?(vr(),Gl=t,Il=a,Gl.attachEvent("onpropertychange",bf)):e==="focusout"&&vr()}function ap(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Il)}function lp(e,t){if(e==="click")return qi(t)}function np(e,t){if(e==="input"||e==="change")return qi(t)}function ip(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:ip;function Pl(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Wc.call(t,n)||!Ie(e[n],t[n]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var a=br(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=br(a)}}function xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ui(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ui(e.document)}return t}function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var cp=Rt&&"documentMode"in document&&11>=document.documentMode,Za=null,lu=null,Yl=null,nu=!1;function Sr(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Za==null||Za!==ui(l)||(l=Za,"selectionStart"in l&&ls(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yl&&Pl(Yl,l)||(Yl=l,l=Ti(lu,"onSelect"),0<l.length&&(t=new Gi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Za)))}function ga(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Va={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionrun:ga("Transition","TransitionRun"),transitionstart:ga("Transition","TransitionStart"),transitioncancel:ga("Transition","TransitionCancel"),transitionend:ga("Transition","TransitionEnd")},gc={},Nf={};Rt&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function _a(e){if(gc[e])return gc[e];if(!Va[e])return e;var t=Va[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Nf)return gc[e]=t[a];return e}var jf=_a("animationend"),Af=_a("animationiteration"),Tf=_a("animationstart"),up=_a("transitionrun"),sp=_a("transitionstart"),rp=_a("transitioncancel"),Ef=_a("transitionend"),zf=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function ht(e,t){zf.set(e,t),Oa(t,[e])}var si=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},at=[],Ka=0,ns=0;function Li(){for(var e=Ka,t=ns=Ka=0;t<e;){var a=at[t];at[t++]=null;var l=at[t];at[t++]=null;var n=at[t];at[t++]=null;var i=at[t];if(at[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Df(a,n,i)}}function ki(e,t,a,l){at[Ka++]=e,at[Ka++]=t,at[Ka++]=a,at[Ka++]=l,ns|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function is(e,t,a,l){return ki(e,t,a,l),ri(e)}function wa(e,t){return ki(e,null,null,t),ri(e)}function Df(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-We(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ri(e){if(50<Jl)throw Jl=0,Eu=null,Error(N(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ja={};function op(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,a,l){return new op(e,t,a,l)}function cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mt(e,t){var a=e.alternate;return a===null?(a=Ve(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qn(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")cs(e)&&(u=1);else if(typeof e=="string")u=gy(e,a,vt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Vc:return e=Ve(31,a,t,n),e.elementType=Vc,e.lanes=i,e;case qa:return Sa(a.children,n,i,t);case Ko:u=8,n|=24;break;case Xc:return e=Ve(12,a,t,n|2),e.elementType=Xc,e.lanes=i,e;case Qc:return e=Ve(13,a,t,n),e.elementType=Qc,e.lanes=i,e;case Zc:return e=Ve(19,a,t,n),e.elementType=Zc,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dt:u=10;break e;case Jo:u=9;break e;case Vu:u=11;break e;case Ku:u=14;break e;case Xt:u=16,l=null;break e}u=29,a=Error(N(130,e===null?"null":typeof e,"")),l=null}return t=Ve(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Sa(e,t,a,l){return e=Ve(7,e,l,t),e.lanes=a,e}function pc(e,t,a){return e=Ve(6,e,null,t),e.lanes=a,e}function Of(e){var t=Ve(18,null,null,0);return t.stateNode=e,t}function yc(e,t,a){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nr=new WeakMap;function ut(e,t){if(typeof e=="object"&&e!==null){var a=Nr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ar(t)},Nr.set(e,t),t)}return{value:e,source:t,stack:ar(t)}}var $a=[],Wa=0,oi=null,en=0,nt=[],it=0,ra=null,gt=1,pt="";function Et(e,t){$a[Wa++]=en,$a[Wa++]=oi,oi=e,en=t}function Mf(e,t,a){nt[it++]=gt,nt[it++]=pt,nt[it++]=ra,ra=e;var l=gt;e=pt;var n=32-We(l)-1;l&=~(1<<n),a+=1;var i=32-We(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,gt=1<<32-We(t)+n|a<<n|l,pt=i+e}else gt=1<<i|a<<n|l,pt=e}function us(e){e.return!==null&&(Et(e,1),Mf(e,1,0))}function ss(e){for(;e===oi;)oi=$a[--Wa],$a[Wa]=null,en=$a[--Wa],$a[Wa]=null;for(;e===ra;)ra=nt[--it],nt[it]=null,pt=nt[--it],nt[it]=null,gt=nt[--it],nt[it]=null}function _f(e,t){nt[it++]=gt,nt[it++]=pt,nt[it++]=ra,gt=t.id,pt=t.overflow,ra=e}var Te=null,ae=null,Z=!1,ta=null,st=!1,cu=Error(N(519));function oa(e){var t=Error(N(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tn(ut(t,e)),cu}function jr(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ae]=e,t[Le]=l,a){case"dialog":q("cancel",t),q("close",t);break;case"iframe":case"object":case"embed":q("load",t);break;case"video":case"audio":for(a=0;a<cn.length;a++)q(cn[a],t);break;case"source":q("error",t);break;case"img":case"image":case"link":q("error",t),q("load",t);break;case"details":q("toggle",t);break;case"input":q("invalid",t),sf(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":q("invalid",t);break;case"textarea":q("invalid",t),of(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||hm(t.textContent,a)?(l.popover!=null&&(q("beforetoggle",t),q("toggle",t)),l.onScroll!=null&&q("scroll",t),l.onScrollEnd!=null&&q("scrollend",t),l.onClick!=null&&(t.onclick=Ct),t=!0):t=!1,t||oa(e,!0)}function Ar(e){for(Te=e.return;Te;)switch(Te.tag){case 5:case 31:case 13:st=!1;return;case 27:case 3:st=!0;return;default:Te=Te.return}}function Ra(e){if(e!==Te)return!1;if(!Z)return Ar(e),Z=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Mu(e.type,e.memoizedProps)),a=!a),a&&ae&&oa(e),Ar(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));ae=oo(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));ae=oo(e)}else t===27?(t=ae,ha(e.type)?(e=Ru,Ru=null,ae=e):ae=t):ae=Te?ot(e.stateNode.nextSibling):null;return!0}function Ta(){ae=Te=null,Z=!1}function vc(){var e=ta;return e!==null&&(Ye===null?Ye=e:Ye.push.apply(Ye,e),ta=null),e}function tn(e){ta===null?ta=[e]:ta.push(e)}var uu=bt(null),Ua=null,Ot=null;function Zt(e,t,a){ee(uu,t._currentValue),t._currentValue=a}function _t(e){e._currentValue=uu.current,Ne(uu)}function su(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function ru(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var r=0;r<t.length;r++)if(s.context===t[r]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),su(i.return,a,e),l||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(N(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),su(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function bl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(N(387));if(u=u.memoizedProps,u!==null){var s=n.type;Ie(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===li.current){if(u=n.alternate,u===null)throw Error(N(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(sn):e=[sn])}n=n.return}e!==null&&ru(t,e,a,l),t.flags|=262144}function fi(e){for(e=e.firstContext;e!==null;){if(!Ie(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ea(e){Ua=e,Ot=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ee(e){return wf(Ua,e)}function Mn(e,t){return Ua===null&&Ea(e),wf(e,t)}function wf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ot===null){if(e===null)throw Error(N(308));Ot=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ot=Ot.next=t;return a}var fp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},dp=ve.unstable_scheduleCallback,mp=ve.unstable_NormalPriority,ge={$$typeof:Dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rs(){return{controller:new fp,data:new Map,refCount:0}}function vn(e){e.refCount--,e.refCount===0&&dp(mp,function(){e.controller.abort()})}var ql=null,ou=0,sl=0,tl=null;function hp(e,t){if(ql===null){var a=ql=[];ou=0,sl=Us(),tl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ou++,t.then(Tr,Tr),t}function Tr(){if(--ou===0&&ql!==null){tl!==null&&(tl.status="fulfilled");var e=ql;ql=null,sl=0,tl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Er=H.S;H.S=function(e,t){Kd=Je(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&hp(e,t),Er!==null&&Er(e,t)};var Na=bt(null);function os(){var e=Na.current;return e!==null?e:P.pooledCache}function Zn(e,t){t===null?ee(Na,Na.current):ee(Na,t.pool)}function Uf(){var e=os();return e===null?null:{parent:ge._currentValue,pool:e}}var xl=Error(N(460)),fs=Error(N(474)),Xi=Error(N(542)),di={then:function(){}};function zr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ct,Ct),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cr(e),e;default:if(typeof t.status=="string")t.then(Ct,Ct);else{if(e=P,e!==null&&100<e.shellSuspendCounter)throw Error(N(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cr(e),e}throw ja=t,xl}}function va(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ja=a,xl):a}}var ja=null;function Dr(){if(ja===null)throw Error(N(459));var e=ja;return ja=null,e}function Cr(e){if(e===xl||e===Xi)throw Error(N(483))}var al=null,an=0;function _n(e){var t=an;return an+=1,al===null&&(al=[]),Rf(al,e,t)}function zl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wn(e,t){throw t.$$typeof===tg?Error(N(525)):(e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hf(e){function t(f,o){if(e){var g=f.deletions;g===null?(f.deletions=[o],f.flags|=16):g.push(o)}}function a(f,o){if(!e)return null;for(;o!==null;)t(f,o),o=o.sibling;return null}function l(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function n(f,o){return f=Mt(f,o),f.index=0,f.sibling=null,f}function i(f,o,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<o?(f.flags|=67108866,o):g):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function u(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function s(f,o,g,v){return o===null||o.tag!==6?(o=pc(g,f.mode,v),o.return=f,o):(o=n(o,g),o.return=f,o)}function r(f,o,g,v){var b=g.type;return b===qa?h(f,o,g.props.children,v,g.key):o!==null&&(o.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Xt&&va(b)===o.type)?(o=n(o,g.props),zl(o,g),o.return=f,o):(o=Qn(g.type,g.key,g.props,null,f.mode,v),zl(o,g),o.return=f,o)}function d(f,o,g,v){return o===null||o.tag!==4||o.stateNode.containerInfo!==g.containerInfo||o.stateNode.implementation!==g.implementation?(o=yc(g,f.mode,v),o.return=f,o):(o=n(o,g.children||[]),o.return=f,o)}function h(f,o,g,v,b){return o===null||o.tag!==7?(o=Sa(g,f.mode,v,b),o.return=f,o):(o=n(o,g),o.return=f,o)}function y(f,o,g){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=pc(""+o,f.mode,g),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Tn:return g=Qn(o.type,o.key,o.props,null,f.mode,g),zl(g,o),g.return=f,g;case Ml:return o=yc(o,f.mode,g),o.return=f,o;case Xt:return o=va(o),y(f,o,g)}if(_l(o)||Al(o))return o=Sa(o,f.mode,g,null),o.return=f,o;if(typeof o.then=="function")return y(f,_n(o),g);if(o.$$typeof===Dt)return y(f,Mn(f,o),g);wn(f,o)}return null}function m(f,o,g,v){var b=o!==null?o.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return b!==null?null:s(f,o,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tn:return g.key===b?r(f,o,g,v):null;case Ml:return g.key===b?d(f,o,g,v):null;case Xt:return g=va(g),m(f,o,g,v)}if(_l(g)||Al(g))return b!==null?null:h(f,o,g,v,null);if(typeof g.then=="function")return m(f,o,_n(g),v);if(g.$$typeof===Dt)return m(f,o,Mn(f,g),v);wn(f,g)}return null}function p(f,o,g,v,b){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(g)||null,s(o,f,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Tn:return f=f.get(v.key===null?g:v.key)||null,r(o,f,v,b);case Ml:return f=f.get(v.key===null?g:v.key)||null,d(o,f,v,b);case Xt:return v=va(v),p(f,o,g,v,b)}if(_l(v)||Al(v))return f=f.get(g)||null,h(o,f,v,b,null);if(typeof v.then=="function")return p(f,o,g,_n(v),b);if(v.$$typeof===Dt)return p(f,o,g,Mn(o,v),b);wn(o,v)}return null}function T(f,o,g,v){for(var b=null,j=null,x=o,z=o=0,w=null;x!==null&&z<g.length;z++){x.index>z?(w=x,x=null):w=x.sibling;var B=m(f,x,g[z],v);if(B===null){x===null&&(x=w);break}e&&x&&B.alternate===null&&t(f,x),o=i(B,o,z),j===null?b=B:j.sibling=B,j=B,x=w}if(z===g.length)return a(f,x),Z&&Et(f,z),b;if(x===null){for(;z<g.length;z++)x=y(f,g[z],v),x!==null&&(o=i(x,o,z),j===null?b=x:j.sibling=x,j=x);return Z&&Et(f,z),b}for(x=l(x);z<g.length;z++)w=p(x,f,z,g[z],v),w!==null&&(e&&w.alternate!==null&&x.delete(w.key===null?z:w.key),o=i(w,o,z),j===null?b=w:j.sibling=w,j=w);return e&&x.forEach(function(se){return t(f,se)}),Z&&Et(f,z),b}function E(f,o,g,v){if(g==null)throw Error(N(151));for(var b=null,j=null,x=o,z=o=0,w=null,B=g.next();x!==null&&!B.done;z++,B=g.next()){x.index>z?(w=x,x=null):w=x.sibling;var se=m(f,x,B.value,v);if(se===null){x===null&&(x=w);break}e&&x&&se.alternate===null&&t(f,x),o=i(se,o,z),j===null?b=se:j.sibling=se,j=se,x=w}if(B.done)return a(f,x),Z&&Et(f,z),b;if(x===null){for(;!B.done;z++,B=g.next())B=y(f,B.value,v),B!==null&&(o=i(B,o,z),j===null?b=B:j.sibling=B,j=B);return Z&&Et(f,z),b}for(x=l(x);!B.done;z++,B=g.next())B=p(x,f,z,B.value,v),B!==null&&(e&&B.alternate!==null&&x.delete(B.key===null?z:B.key),o=i(B,o,z),j===null?b=B:j.sibling=B,j=B);return e&&x.forEach(function(ie){return t(f,ie)}),Z&&Et(f,z),b}function O(f,o,g,v){if(typeof g=="object"&&g!==null&&g.type===qa&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Tn:e:{for(var b=g.key;o!==null;){if(o.key===b){if(b=g.type,b===qa){if(o.tag===7){a(f,o.sibling),v=n(o,g.props.children),v.return=f,f=v;break e}}else if(o.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Xt&&va(b)===o.type){a(f,o.sibling),v=n(o,g.props),zl(v,g),v.return=f,f=v;break e}a(f,o);break}else t(f,o);o=o.sibling}g.type===qa?(v=Sa(g.props.children,f.mode,v,g.key),v.return=f,f=v):(v=Qn(g.type,g.key,g.props,null,f.mode,v),zl(v,g),v.return=f,f=v)}return u(f);case Ml:e:{for(b=g.key;o!==null;){if(o.key===b)if(o.tag===4&&o.stateNode.containerInfo===g.containerInfo&&o.stateNode.implementation===g.implementation){a(f,o.sibling),v=n(o,g.children||[]),v.return=f,f=v;break e}else{a(f,o);break}else t(f,o);o=o.sibling}v=yc(g,f.mode,v),v.return=f,f=v}return u(f);case Xt:return g=va(g),O(f,o,g,v)}if(_l(g))return T(f,o,g,v);if(Al(g)){if(b=Al(g),typeof b!="function")throw Error(N(150));return g=b.call(g),E(f,o,g,v)}if(typeof g.then=="function")return O(f,o,_n(g),v);if(g.$$typeof===Dt)return O(f,o,Mn(f,g),v);wn(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,o!==null&&o.tag===6?(a(f,o.sibling),v=n(o,g),v.return=f,f=v):(a(f,o),v=pc(g,f.mode,v),v.return=f,f=v),u(f)):a(f,o)}return function(f,o,g,v){try{an=0;var b=O(f,o,g,v);return al=null,b}catch(x){if(x===xl||x===Xi)throw x;var j=Ve(29,x,null,f.mode);return j.lanes=v,j.return=f,j}finally{}}}var za=Hf(!0),Bf=Hf(!1),Qt=!1;function ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,V&2){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ri(e),Df(e,null,a),t}return ki(e,l,t,a),ri(e)}function Ll(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ef(e,a)}}function bc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var du=!1;function kl(){if(du){var e=tl;if(e!==null)throw e}}function Xl(e,t,a,l){du=!1;var n=e.updateQueue;Qt=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,d=r.next;r.next=null,u===null?i=d:u.next=d,u=r;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==u&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=r))}if(i!==null){var y=n.baseState;u=0,h=d=r=null,s=i;do{var m=s.lane&-536870913,p=m!==s.lane;if(p?(Q&m)===m:(l&m)===m){m!==0&&m===sl&&(du=!0),h!==null&&(h=h.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var T=e,E=s;m=t;var O=a;switch(E.tag){case 1:if(T=E.payload,typeof T=="function"){y=T.call(O,y,m);break e}y=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=E.payload,m=typeof T=="function"?T.call(O,y,m):T,m==null)break e;y=ne({},y,m);break e;case 2:Qt=!0}}m=s.callback,m!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[m]:p.push(m))}else p={lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=p,r=y):h=h.next=p,u|=m;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;p=s,s=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);h===null&&(r=y),n.baseState=r,n.firstBaseUpdate=d,n.lastBaseUpdate=h,i===null&&(n.shared.lanes=0),da|=u,e.lanes=u,e.memoizedState=y}}function Gf(e,t){if(typeof e!="function")throw Error(N(191,e));e.call(t)}function Yf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gf(a[e],t)}var rl=bt(null),mi=bt(0);function Or(e,t){e=Yt,ee(mi,e),ee(rl,t),Yt=e|t.baseLanes}function mu(){ee(mi,Yt),ee(rl,rl.current)}function ms(){Yt=mi.current,Ne(rl),Ne(mi)}var Pe=bt(null),rt=null;function Vt(e){var t=e.alternate;ee(fe,fe.current&1),ee(Pe,e),rt===null&&(t===null||rl.current!==null||t.memoizedState!==null)&&(rt=e)}function hu(e){ee(fe,fe.current),ee(Pe,e),rt===null&&(rt=e)}function qf(e){e.tag===22?(ee(fe,fe.current),ee(Pe,e),rt===null&&(rt=e)):Kt()}function Kt(){ee(fe,fe.current),ee(Pe,Pe.current)}function Ze(e){Ne(Pe),rt===e&&(rt=null),Ne(fe)}var fe=bt(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wu(a)||Uu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ht=0,Y=null,I=null,me=null,gi=!1,ll=!1,Da=!1,pi=0,ln=0,nl=null,pp=0;function re(){throw Error(N(321))}function hs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ie(e[a],t[a]))return!1;return!0}function gs(e,t,a,l,n,i){return Ht=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?yd:Es,Da=!1,i=a(l,n),Da=!1,ll&&(i=kf(t,a,l,n)),Lf(e),i}function Lf(e){H.H=nn;var t=I!==null&&I.next!==null;if(Ht=0,me=I=Y=null,gi=!1,ln=0,nl=null,t)throw Error(N(300));e===null||pe||(e=e.dependencies,e!==null&&fi(e)&&(pe=!0))}function kf(e,t,a,l){Y=e;var n=0;do{if(ll&&(nl=null),ln=0,ll=!1,25<=n)throw Error(N(301));if(n+=1,me=I=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}H.H=vd,i=t(a,l)}while(ll);return i}function yp(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?bn(t):t,e=e.useState()[0],(I!==null?I.memoizedState:null)!==e&&(Y.flags|=1024),t}function ps(){var e=pi!==0;return pi=0,e}function ys(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function vs(e){if(gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gi=!1}Ht=0,me=I=Y=null,ll=!1,ln=pi=0,nl=null}function Ce(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?Y.memoizedState=me=e:me=me.next=e,me}function de(){if(I===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=I.next;var t=me===null?Y.memoizedState:me.next;if(t!==null)me=t,I=e;else{if(e===null)throw Y.alternate===null?Error(N(467)):Error(N(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},me===null?Y.memoizedState=me=e:me=me.next=e}return me}function Qi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bn(e){var t=ln;return ln+=1,nl===null&&(nl=[]),e=Rf(nl,e,t),t=Y,(me===null?t.memoizedState:me.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?yd:Es),e}function Zi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bn(e);if(e.$$typeof===Dt)return Ee(e)}throw Error(N(438,String(e)))}function bs(e){var t=null,a=Y.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=Y.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Qi(),Y.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ag;return t.index++,a}function Bt(e,t){return typeof t=="function"?t(e):t}function Vn(e){var t=de();return xs(t,I,e)}function xs(e,t,a){var l=e.queue;if(l===null)throw Error(N(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,r=null,d=t,h=!1;do{var y=d.lane&-536870913;if(y!==d.lane?(Q&y)===y:(Ht&y)===y){var m=d.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),y===sl&&(h=!0);else if((Ht&m)===m){d=d.next,m===sl&&(h=!0);continue}else y={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=y,u=i):r=r.next=y,Y.lanes|=m,da|=m;y=d.action,Da&&a(i,y),i=d.hasEagerState?d.eagerState:a(i,y)}else m={lane:y,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=m,u=i):r=r.next=m,Y.lanes|=y,da|=y;d=d.next}while(d!==null&&d!==t);if(r===null?u=i:r.next=s,!Ie(i,e.memoizedState)&&(pe=!0,h&&(a=tl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function xc(e){var t=de(),a=t.queue;if(a===null)throw Error(N(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Ie(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Xf(e,t,a){var l=Y,n=de(),i=Z;if(i){if(a===void 0)throw Error(N(407));a=a()}else a=t();var u=!Ie((I||n).memoizedState,a);if(u&&(n.memoizedState=a,pe=!0),n=n.queue,Ss(Vf.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||me!==null&&me.memoizedState.tag&1){if(l.flags|=2048,ol(9,{destroy:void 0},Zf.bind(null,l,n,a,t),null),P===null)throw Error(N(349));i||Ht&127||Qf(l,t,a)}return a}function Qf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Y.updateQueue,t===null?(t=Qi(),Y.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Zf(e,t,a,l){t.value=a,t.getSnapshot=l,Kf(t)&&Jf(e)}function Vf(e,t,a){return a(function(){Kf(t)&&Jf(e)})}function Kf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ie(e,a)}catch{return!0}}function Jf(e){var t=wa(e,2);t!==null&&qe(t,e,2)}function gu(e){var t=Ce();if(typeof e=="function"){var a=e;if(e=a(),Da){$t(!0);try{a()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:e},t}function $f(e,t,a,l){return e.baseState=a,xs(e,I,typeof l=="function"?l:Bt)}function vp(e,t,a,l,n){if(Ki(e))throw Error(N(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};H.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Wf(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Wf(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=H.T,u={};H.T=u;try{var s=a(n,l),r=H.S;r!==null&&r(u,s),Mr(e,t,s)}catch(d){pu(e,t,d)}finally{i!==null&&u.types!==null&&(i.types=u.types),H.T=i}}else try{i=a(n,l),Mr(e,t,i)}catch(d){pu(e,t,d)}}function Mr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){_r(e,t,l)},function(l){return pu(e,t,l)}):_r(e,t,a)}function _r(e,t,a){t.status="fulfilled",t.value=a,Ff(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Wf(e,a)))}function pu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ff(t),t=t.next;while(t!==l)}e.action=null}function Ff(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function If(e,t){return t}function wr(e,t){if(Z){var a=P.formState;if(a!==null){e:{var l=Y;if(Z){if(ae){t:{for(var n=ae,i=st;n.nodeType!==8;){if(!i){n=null;break t}if(n=ot(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ae=ot(n.nextSibling),l=n.data==="F!";break e}}oa(l)}l=!1}l&&(t=a[0])}}return a=Ce(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:If,lastRenderedState:t},a.queue=l,a=hd.bind(null,Y,l),l.dispatch=a,l=gu(!1),i=Ts.bind(null,Y,!1,l.queue),l=Ce(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=vp.bind(null,Y,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Ur(e){var t=de();return Pf(t,I,e)}function Pf(e,t,a){if(t=xs(e,t,If)[0],e=Vn(Bt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=bn(t)}catch(u){throw u===xl?Xi:u}else l=t;t=de();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(Y.flags|=2048,ol(9,{destroy:void 0},bp.bind(null,n,a),null)),[l,i,e]}function bp(e,t){e.action=t}function Rr(e){var t=de(),a=I;if(a!==null)return Pf(t,a,e);de(),t=t.memoizedState,a=de();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function ol(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=Y.updateQueue,t===null&&(t=Qi(),Y.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function ed(){return de().memoizedState}function Kn(e,t,a,l){var n=Ce();Y.flags|=e,n.memoizedState=ol(1|t,{destroy:void 0},a,l===void 0?null:l)}function Vi(e,t,a,l){var n=de();l=l===void 0?null:l;var i=n.memoizedState.inst;I!==null&&l!==null&&hs(l,I.memoizedState.deps)?n.memoizedState=ol(t,i,a,l):(Y.flags|=e,n.memoizedState=ol(1|t,i,a,l))}function Hr(e,t){Kn(8390656,8,e,t)}function Ss(e,t){Vi(2048,8,e,t)}function xp(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=Qi(),Y.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function td(e){var t=de().memoizedState;return xp({ref:t,nextImpl:e}),function(){if(V&2)throw Error(N(440));return t.impl.apply(void 0,arguments)}}function ad(e,t){return Vi(4,2,e,t)}function ld(e,t){return Vi(4,4,e,t)}function nd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function id(e,t,a){a=a!=null?a.concat([e]):null,Vi(4,4,nd.bind(null,t,e),a)}function Ns(){}function cd(e,t){var a=de();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&hs(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function ud(e,t){var a=de();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&hs(t,l[1]))return l[0];if(l=e(),Da){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[l,t],l}function js(e,t,a){return a===void 0||Ht&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=a,e=$d(),Y.lanes|=e,da|=e,a)}function sd(e,t,a,l){return Ie(a,t)?a:rl.current!==null?(e=js(e,a,l),Ie(e,t)||(pe=!0),e):!(Ht&42)||Ht&1073741824&&!(Q&261930)?(pe=!0,e.memoizedState=a):(e=$d(),Y.lanes|=e,da|=e,t)}function rd(e,t,a,l,n){var i=K.p;K.p=i!==0&&8>i?i:8;var u=H.T,s={};H.T=s,Ts(e,!1,t,a);try{var r=n(),d=H.S;if(d!==null&&d(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var h=gp(r,l);Ql(e,t,h,Fe(e))}else Ql(e,t,l,Fe(e))}catch(y){Ql(e,t,{then:function(){},status:"rejected",reason:y},Fe())}finally{K.p=i,u!==null&&s.types!==null&&(u.types=s.types),H.T=u}}function Sp(){}function yu(e,t,a,l){if(e.tag!==5)throw Error(N(476));var n=od(e).queue;rd(e,n,t,xa,a===null?Sp:function(){return fd(e),a(l)})}function od(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:xa,baseState:xa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:xa},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fd(e){var t=od(e);t.next===null&&(t=e.alternate.memoizedState),Ql(e,t.next.queue,{},Fe())}function As(){return Ee(sn)}function dd(){return de().memoizedState}function md(){return de().memoizedState}function Np(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Fe();e=aa(a);var l=la(t,e,a);l!==null&&(qe(l,t,a),Ll(l,t,a)),t={cache:rs()},e.payload=t;return}t=t.return}}function jp(e,t,a){var l=Fe();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ki(e)?gd(t,a):(a=is(e,t,a,l),a!==null&&(qe(a,e,l),pd(a,t,l)))}function hd(e,t,a){var l=Fe();Ql(e,t,a,l)}function Ql(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ki(e))gd(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,Ie(s,u))return ki(e,t,n,0),P===null&&Li(),!1}catch{}finally{}if(a=is(e,t,n,l),a!==null)return qe(a,e,l),pd(a,t,l),!0}return!1}function Ts(e,t,a,l){if(l={lane:2,revertLane:Us(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ki(e)){if(t)throw Error(N(479))}else t=is(e,a,l,2),t!==null&&qe(t,e,2)}function Ki(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function gd(e,t){ll=gi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function pd(e,t,a){if(a&4194048){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ef(e,a)}}var nn={readContext:Ee,use:Zi,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useLayoutEffect:re,useInsertionEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useSyncExternalStore:re,useId:re,useHostTransitionStatus:re,useFormState:re,useActionState:re,useOptimistic:re,useMemoCache:re,useCacheRefresh:re};nn.useEffectEvent=re;var yd={readContext:Ee,use:Zi,useCallback:function(e,t){return Ce().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Hr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Kn(4194308,4,nd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Kn(4194308,4,e,t)},useInsertionEffect:function(e,t){Kn(4,2,e,t)},useMemo:function(e,t){var a=Ce();t=t===void 0?null:t;var l=e();if(Da){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ce();if(a!==void 0){var n=a(t);if(Da){$t(!0);try{a(t)}finally{$t(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=jp.bind(null,Y,e),[l.memoizedState,e]},useRef:function(e){var t=Ce();return e={current:e},t.memoizedState=e},useState:function(e){e=gu(e);var t=e.queue,a=hd.bind(null,Y,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ns,useDeferredValue:function(e,t){var a=Ce();return js(a,e,t)},useTransition:function(){var e=gu(!1);return e=rd.bind(null,Y,e.queue,!0,!1),Ce().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=Y,n=Ce();if(Z){if(a===void 0)throw Error(N(407));a=a()}else{if(a=t(),P===null)throw Error(N(349));Q&127||Qf(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Hr(Vf.bind(null,l,i,e),[e]),l.flags|=2048,ol(9,{destroy:void 0},Zf.bind(null,l,i,a,t),null),a},useId:function(){var e=Ce(),t=P.identifierPrefix;if(Z){var a=pt,l=gt;a=(l&~(1<<32-We(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=pi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=pp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:As,useFormState:wr,useActionState:wr,useOptimistic:function(e){var t=Ce();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ts.bind(null,Y,!0,a),a.dispatch=t,[e,t]},useMemoCache:bs,useCacheRefresh:function(){return Ce().memoizedState=Np.bind(null,Y)},useEffectEvent:function(e){var t=Ce(),a={impl:e};return t.memoizedState=a,function(){if(V&2)throw Error(N(440));return a.impl.apply(void 0,arguments)}}},Es={readContext:Ee,use:Zi,useCallback:cd,useContext:Ee,useEffect:Ss,useImperativeHandle:id,useInsertionEffect:ad,useLayoutEffect:ld,useMemo:ud,useReducer:Vn,useRef:ed,useState:function(){return Vn(Bt)},useDebugValue:Ns,useDeferredValue:function(e,t){var a=de();return sd(a,I.memoizedState,e,t)},useTransition:function(){var e=Vn(Bt)[0],t=de().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:Xf,useId:dd,useHostTransitionStatus:As,useFormState:Ur,useActionState:Ur,useOptimistic:function(e,t){var a=de();return $f(a,I,e,t)},useMemoCache:bs,useCacheRefresh:md};Es.useEffectEvent=td;var vd={readContext:Ee,use:Zi,useCallback:cd,useContext:Ee,useEffect:Ss,useImperativeHandle:id,useInsertionEffect:ad,useLayoutEffect:ld,useMemo:ud,useReducer:xc,useRef:ed,useState:function(){return xc(Bt)},useDebugValue:Ns,useDeferredValue:function(e,t){var a=de();return I===null?js(a,e,t):sd(a,I.memoizedState,e,t)},useTransition:function(){var e=xc(Bt)[0],t=de().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:Xf,useId:dd,useHostTransitionStatus:As,useFormState:Rr,useActionState:Rr,useOptimistic:function(e,t){var a=de();return I!==null?$f(a,I,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:bs,useCacheRefresh:md};vd.useEffectEvent=td;function Sc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:ne({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vu={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Fe(),n=aa(l);n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(qe(t,e,l),Ll(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Fe(),n=aa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(qe(t,e,l),Ll(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Fe(),l=aa(a);l.tag=2,t!=null&&(l.callback=t),t=la(e,l,a),t!==null&&(qe(t,e,a),Ll(t,e,a))}};function Br(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Pl(a,l)||!Pl(n,i):!0}function Gr(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&vu.enqueueReplaceState(t,t.state,null)}function Ca(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=ne({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function bd(e){si(e)}function xd(e){console.error(e)}function Sd(e){si(e)}function yi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Yr(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function bu(e,t,a){return a=aa(a),a.tag=3,a.payload={element:null},a.callback=function(){yi(e,t)},a}function Nd(e){return e=aa(e),e.tag=3,e}function jd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Yr(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Yr(t,a,l),typeof n!="function"&&(na===null?na=new Set([this]):na.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Ap(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&bl(t,a,n,!0),a=Pe.current,a!==null){switch(a.tag){case 31:case 13:return rt===null?Ni():a.alternate===null&&oe===0&&(oe=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===di?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),_c(e,l,n)),!1;case 22:return a.flags|=65536,l===di?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),_c(e,l,n)),!1}throw Error(N(435,a.tag))}return _c(e,l,n),Ni(),!1}if(Z)return t=Pe.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==cu&&(e=Error(N(422),{cause:l}),tn(ut(e,a)))):(l!==cu&&(t=Error(N(423),{cause:l}),tn(ut(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ut(l,a),n=bu(e.stateNode,l,n),bc(e,n),oe!==4&&(oe=2)),!1;var i=Error(N(520),{cause:l});if(i=ut(i,a),Kl===null?Kl=[i]:Kl.push(i),oe!==4&&(oe=2),t===null)return!0;l=ut(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=bu(a.stateNode,l,e),bc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(na===null||!na.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Nd(n),jd(n,e,a,l),bc(a,n),!1}a=a.return}while(a!==null);return!1}var zs=Error(N(461)),pe=!1;function je(e,t,a,l){t.child=e===null?Bf(t,null,a,l):za(t,e.child,a,l)}function qr(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return Ea(t),l=gs(e,t,a,u,i,n),s=ps(),e!==null&&!pe?(ys(e,t,n),Gt(e,t,n)):(Z&&s&&us(t),t.flags|=1,je(e,t,l,n),t.child)}function Lr(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!cs(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Ad(e,t,i,l,n)):(e=Qn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ds(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Pl,a(u,l)&&e.ref===t.ref)return Gt(e,t,n)}return t.flags|=1,e=Mt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Ad(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Pl(i,l)&&e.ref===t.ref)if(pe=!1,t.pendingProps=l=i,Ds(e,n))e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Gt(e,t,n)}return xu(e,t,a,l,n)}function Td(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return kr(e,t,i,a,l)}if(a&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zn(t,i!==null?i.cachePool:null),i!==null?Or(t,i):mu(),qf(t);else return l=t.lanes=536870912,kr(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Zn(t,i.cachePool),Or(t,i),Kt(),t.memoizedState=null):(e!==null&&Zn(t,null),mu(),Kt());return je(e,t,n,a),t.child}function Ul(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function kr(e,t,a,l,n){var i=os();return i=i===null?null:{parent:ge._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Zn(t,null),mu(),qf(t),e!==null&&bl(e,t,l,!0),t.childLanes=n,null}function Jn(e,t){return t=vi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Xr(e,t,a){return za(t,e.child,null,a),e=Jn(t,t.pendingProps),e.flags|=2,Ze(t),t.memoizedState=null,e}function Tp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Z){if(l.mode==="hidden")return e=Jn(t,l),t.lanes=536870912,Ul(null,e);if(hu(t),(e=ae)?(e=ym(e,st),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:gt,overflow:pt}:null,retryLane:536870912,hydrationErrors:null},a=Of(e),a.return=t,t.child=a,Te=t,ae=null)):e=null,e===null)throw oa(t);return t.lanes=536870912,null}return Jn(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(hu(t),n)if(t.flags&256)t.flags&=-257,t=Xr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(N(558));else if(pe||bl(e,t,a,!1),n=(a&e.childLanes)!==0,pe||n){if(l=P,l!==null&&(u=tf(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,wa(e,u),qe(l,e,u),zs;Ni(),t=Xr(e,t,a)}else e=i.treeContext,ae=ot(u.nextSibling),Te=t,Z=!0,ta=null,st=!1,e!==null&&_f(t,e),t=Jn(t,l),t.flags|=4096;return t}return e=Mt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function $n(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(N(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function xu(e,t,a,l,n){return Ea(t),a=gs(e,t,a,l,void 0,n),l=ps(),e!==null&&!pe?(ys(e,t,n),Gt(e,t,n)):(Z&&l&&us(t),t.flags|=1,je(e,t,a,n),t.child)}function Qr(e,t,a,l,n,i){return Ea(t),t.updateQueue=null,a=kf(t,l,a,n),Lf(e),l=ps(),e!==null&&!pe?(ys(e,t,i),Gt(e,t,i)):(Z&&l&&us(t),t.flags|=1,je(e,t,a,i),t.child)}function Zr(e,t,a,l,n){if(Ea(t),t.stateNode===null){var i=Ja,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ee(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=vu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ds(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ee(u):Ja,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Sc(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&vu.enqueueReplaceState(i,i.state,null),Xl(t,l,i,n),kl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,r=Ca(a,s);i.props=r;var d=i.context,h=a.contextType;u=Ja,typeof h=="object"&&h!==null&&(u=Ee(h));var y=a.getDerivedStateFromProps;h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||d!==u)&&Gr(t,i,l,u),Qt=!1;var m=t.memoizedState;i.state=m,Xl(t,l,i,n),kl(),d=t.memoizedState,s||m!==d||Qt?(typeof y=="function"&&(Sc(t,a,y,l),d=t.memoizedState),(r=Qt||Br(t,a,r,l,m,d,u))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=d),i.props=l,i.state=d,i.context=u,l=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,fu(e,t),u=t.memoizedProps,h=Ca(a,u),i.props=h,y=t.pendingProps,m=i.context,d=a.contextType,r=Ja,typeof d=="object"&&d!==null&&(r=Ee(d)),s=a.getDerivedStateFromProps,(d=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==y||m!==r)&&Gr(t,i,l,r),Qt=!1,m=t.memoizedState,i.state=m,Xl(t,l,i,n),kl();var p=t.memoizedState;u!==y||m!==p||Qt||e!==null&&e.dependencies!==null&&fi(e.dependencies)?(typeof s=="function"&&(Sc(t,a,s,l),p=t.memoizedState),(h=Qt||Br(t,a,h,l,m,p,r)||e!==null&&e.dependencies!==null&&fi(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,p,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,p,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=p),i.props=l,i.state=p,i.context=r,l=h):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,$n(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=za(t,e.child,null,n),t.child=za(t,null,a,n)):je(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Gt(e,t,n),e}function Vr(e,t,a,l){return Ta(),t.flags|=256,je(e,t,a,l),t.child}var Nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jc(e){return{baseLanes:e,cachePool:Uf()}}function Ac(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ke),e}function Ed(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(fe.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Z){if(n?Vt(t):Kt(),(e=ae)?(e=ym(e,st),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:gt,overflow:pt}:null,retryLane:536870912,hydrationErrors:null},a=Of(e),a.return=t,t.child=a,Te=t,ae=null)):e=null,e===null)throw oa(t);return Uu(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(Kt(),n=t.mode,s=vi({mode:"hidden",children:s},n),l=Sa(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=jc(a),l.childLanes=Ac(e,u,a),t.memoizedState=Nc,Ul(null,l)):(Vt(t),Su(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(i)t.flags&256?(Vt(t),t.flags&=-257,t=Tc(e,t,a)):t.memoizedState!==null?(Kt(),t.child=e.child,t.flags|=128,t=null):(Kt(),s=l.fallback,n=t.mode,l=vi({mode:"visible",children:l.children},n),s=Sa(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,za(t,e.child,null,a),l=t.child,l.memoizedState=jc(a),l.childLanes=Ac(e,u,a),t.memoizedState=Nc,t=Ul(null,l));else if(Vt(t),Uu(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var d=u.dgst;u=d,l=Error(N(419)),l.stack="",l.digest=u,tn({value:l,source:null,stack:null}),t=Tc(e,t,a)}else if(pe||bl(e,t,a,!1),u=(a&e.childLanes)!==0,pe||u){if(u=P,u!==null&&(l=tf(u,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,wa(e,l),qe(u,e,l),zs;wu(s)||Ni(),t=Tc(e,t,a)}else wu(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,ae=ot(s.nextSibling),Te=t,Z=!0,ta=null,st=!1,e!==null&&_f(t,e),t=Su(t,l.children),t.flags|=4096);return t}return n?(Kt(),s=l.fallback,n=t.mode,r=e.child,d=r.sibling,l=Mt(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,d!==null?s=Mt(d,s):(s=Sa(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,Ul(null,l),l=t.child,s=e.child.memoizedState,s===null?s=jc(a):(n=s.cachePool,n!==null?(r=ge._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Uf(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=Ac(e,u,a),t.memoizedState=Nc,Ul(e.child,l)):(Vt(t),a=e.child,e=a.sibling,a=Mt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Su(e,t){return t=vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vi(e,t){return e=Ve(22,e,null,t),e.lanes=0,e}function Tc(e,t,a){return za(t,e.child,null,a),e=Su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kr(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),su(e.return,t,a)}function Ec(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function zd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=fe.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,ee(fe,u),je(e,t,l,a),l=Z?en:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kr(e,a,t);else if(e.tag===19)Kr(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&hi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Ec(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&hi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Ec(t,!0,a,null,i,l);break;case"together":Ec(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,!(a&t.childLanes))if(e!==null){if(bl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,a=Mt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Mt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ds(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&fi(e)))}function Ep(e,t,a){switch(t.tag){case 3:ni(t,t.stateNode.containerInfo),Zt(t,ge,e.memoizedState.cache),Ta();break;case 27:case 5:$c(t);break;case 4:ni(t,t.stateNode.containerInfo);break;case 10:Zt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,hu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Vt(t),t.flags|=128,null):a&t.child.childLanes?Ed(e,t,a):(Vt(t),e=Gt(e,t,a),e!==null?e.sibling:null);Vt(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(bl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return zd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ee(fe,fe.current),l)break;return null;case 22:return t.lanes=0,Td(e,t,a,t.pendingProps);case 24:Zt(t,ge,e.memoizedState.cache)}return Gt(e,t,a)}function Dd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)pe=!0;else{if(!Ds(e,a)&&!(t.flags&128))return pe=!1,Ep(e,t,a);pe=!!(e.flags&131072)}else pe=!1,Z&&t.flags&1048576&&Mf(t,en,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=va(t.elementType),t.type=e,typeof e=="function")cs(e)?(l=Ca(e,l),t.tag=1,t=Zr(null,t,e,l,a)):(t.tag=0,t=xu(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Vu){t.tag=11,t=qr(null,t,e,l,a);break e}else if(n===Ku){t.tag=14,t=Lr(null,t,e,l,a);break e}}throw t=Kc(e)||e,Error(N(306,t,""))}}return t;case 0:return xu(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ca(l,t.pendingProps),Zr(e,t,l,n,a);case 3:e:{if(ni(t,t.stateNode.containerInfo),e===null)throw Error(N(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,fu(e,t),Xl(t,l,null,a);var u=t.memoizedState;if(l=u.cache,Zt(t,ge,l),l!==i.cache&&ru(t,[ge],a,!0),kl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Vr(e,t,l,a);break e}else if(l!==n){n=ut(Error(N(424)),t),tn(n),t=Vr(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ae=ot(e.firstChild),Te=t,Z=!0,ta=null,st=!0,a=Bf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ta(),l===n){t=Gt(e,t,a);break e}je(e,t,l,a)}t=t.child}return t;case 26:return $n(e,t),e===null?(a=ho(t.type,null,t.pendingProps,null))?t.memoizedState=a:Z||(a=t.type,e=t.pendingProps,l=Ei(ea.current).createElement(a),l[Ae]=t,l[Le]=e,ze(l,a,e),Se(l),t.stateNode=l):t.memoizedState=ho(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $c(t),e===null&&Z&&(l=t.stateNode=vm(t.type,t.pendingProps,ea.current),Te=t,st=!0,n=ae,ha(t.type)?(Ru=n,ae=ot(l.firstChild)):ae=n),je(e,t,t.pendingProps.children,a),$n(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Z&&((n=l=ae)&&(l=ay(l,t.type,t.pendingProps,st),l!==null?(t.stateNode=l,Te=t,ae=ot(l.firstChild),st=!1,n=!0):n=!1),n||oa(t)),$c(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Mu(n,i)?l=null:u!==null&&Mu(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=gs(e,t,yp,null,null,a),sn._currentValue=n),$n(e,t),je(e,t,l,a),t.child;case 6:return e===null&&Z&&((e=a=ae)&&(a=ly(a,t.pendingProps,st),a!==null?(t.stateNode=a,Te=t,ae=null,e=!0):e=!1),e||oa(t)),null;case 13:return Ed(e,t,a);case 4:return ni(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=za(t,null,l,a):je(e,t,l,a),t.child;case 11:return qr(e,t,t.type,t.pendingProps,a);case 7:return je(e,t,t.pendingProps,a),t.child;case 8:return je(e,t,t.pendingProps.children,a),t.child;case 12:return je(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Zt(t,t.type,l.value),je(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ea(t),n=Ee(n),l=l(n),t.flags|=1,je(e,t,l,a),t.child;case 14:return Lr(e,t,t.type,t.pendingProps,a);case 15:return Ad(e,t,t.type,t.pendingProps,a);case 19:return zd(e,t,a);case 31:return Tp(e,t,a);case 22:return Td(e,t,a,t.pendingProps);case 24:return Ea(t),l=Ee(ge),e===null?(n=os(),n===null&&(n=P,i=rs(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ds(t),Zt(t,ge,n)):(e.lanes&a&&(fu(e,t),Xl(t,null,null,a),kl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Zt(t,ge,l)):(l=i.cache,Zt(t,ge,l),l!==n.cache&&ru(t,[ge],a,!0))),je(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(N(156,t.tag))}function Nt(e){e.flags|=4}function zc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Id())e.flags|=8192;else throw ja=di,fs}else e.flags&=-16777217}function Jr(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Sm(t))if(Id())e.flags|=8192;else throw ja=di,fs}function Un(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Io():536870912,e.lanes|=t,fl|=t)}function Dl(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function zp(e,t,a){var l=t.pendingProps;switch(ss(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return te(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),_t(ge),il(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ra(t)?Nt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vc())),te(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Nt(t),i!==null?(te(t),Jr(t,i)):(te(t),zc(t,n,null,l,a))):i?i!==e.memoizedState?(Nt(t),te(t),Jr(t,i)):(te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Nt(t),te(t),zc(t,n,e,l,a)),null;case 27:if(ii(t),a=ea.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Nt(t);else{if(!l){if(t.stateNode===null)throw Error(N(166));return te(t),null}e=vt.current,Ra(t)?jr(t):(e=vm(n,l,a),t.stateNode=e,Nt(t))}return te(t),null;case 5:if(ii(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Nt(t);else{if(!l){if(t.stateNode===null)throw Error(N(166));return te(t),null}if(i=vt.current,Ra(t))jr(t);else{var u=Ei(ea.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Ae]=t,i[Le]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(ze(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Nt(t)}}return te(t),zc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Nt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(N(166));if(e=ea.current,Ra(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Te,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ae]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||hm(e.nodeValue,a)),e||oa(t,!0)}else e=Ei(e).createTextNode(l),e[Ae]=t,t.stateNode=e}return te(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ra(t),a!==null){if(e===null){if(!l)throw Error(N(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(557));e[Ae]=t}else Ta(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;te(t),e=!1}else a=vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ze(t),t):(Ze(t),null);if(t.flags&128)throw Error(N(558))}return te(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ra(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(N(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(N(317));n[Ae]=t}else Ta(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;te(t),n=!1}else n=vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ze(t),t):(Ze(t),null)}return Ze(t),t.flags&128?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Un(t,t.updateQueue),te(t),null);case 4:return il(),e===null&&Rs(t.stateNode.containerInfo),te(t),null;case 10:return _t(t.type),te(t),null;case 19:if(Ne(fe),l=t.memoizedState,l===null)return te(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Dl(l,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=hi(e),i!==null){for(t.flags|=128,Dl(l,!1),e=i.updateQueue,t.updateQueue=e,Un(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Cf(a,e),a=a.sibling;return ee(fe,fe.current&1|2),Z&&Et(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Je()>xi&&(t.flags|=128,n=!0,Dl(l,!1),t.lanes=4194304)}else{if(!n)if(e=hi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Un(t,e),Dl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Z)return te(t),null}else 2*Je()-l.renderingStartTime>xi&&a!==536870912&&(t.flags|=128,n=!0,Dl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Je(),e.sibling=null,a=fe.current,ee(fe,n?a&1|2:a&1),Z&&Et(t,l.treeForkCount),e):(te(t),null);case 22:case 23:return Ze(t),ms(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?a&536870912&&!(t.flags&128)&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),a=t.updateQueue,a!==null&&Un(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Ne(Na),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),_t(ge),te(t),null;case 25:return null;case 30:return null}throw Error(N(156,t.tag))}function Dp(e,t){switch(ss(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _t(ge),il(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ii(t),null;case 31:if(t.memoizedState!==null){if(Ze(t),t.alternate===null)throw Error(N(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ze(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(fe),null;case 4:return il(),null;case 10:return _t(t.type),null;case 22:case 23:return Ze(t),ms(),e!==null&&Ne(Na),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _t(ge),null;case 25:return null;default:return null}}function Cd(e,t){switch(ss(t),t.tag){case 3:_t(ge),il();break;case 26:case 27:case 5:ii(t);break;case 4:il();break;case 31:t.memoizedState!==null&&Ze(t);break;case 13:Ze(t);break;case 19:Ne(fe);break;case 10:_t(t.type);break;case 22:case 23:Ze(t),ms(),e!==null&&Ne(Na);break;case 24:_t(ge)}}function xn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){W(t,t.return,s)}}function fa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var r=a,d=s;try{d()}catch(h){W(n,r,h)}}}l=l.next}while(l!==i)}}catch(h){W(t,t.return,h)}}function Od(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Yf(t,a)}catch(l){W(e,e.return,l)}}}function Md(e,t,a){a.props=Ca(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){W(e,t,l)}}function Zl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){W(e,t,n)}}function yt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){W(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){W(e,t,n)}else a.current=null}function _d(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){W(e,e.return,n)}}function Dc(e,t,a){try{var l=e.stateNode;Wp(l,e.type,a,t),l[Le]=t}catch(n){W(e,e.return,n)}}function wd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ct));else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Nu(e,t,a),e=e.sibling;e!==null;)Nu(e,t,a),e=e.sibling}function bi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bi(e,t,a),e=e.sibling;e!==null;)bi(e,t,a),e=e.sibling}function Ud(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ze(t,l,a),t[Ae]=e,t[Le]=a}catch(i){W(e,e.return,i)}}var zt=!1,he=!1,Oc=!1,$r=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Cp(e,t){if(e=e.containerInfo,Cu=Oi,e=Sf(e),ls(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,r=-1,d=0,h=0,y=e,m=null;t:for(;;){for(var p;y!==a||n!==0&&y.nodeType!==3||(s=u+n),y!==i||l!==0&&y.nodeType!==3||(r=u+l),y.nodeType===3&&(u+=y.nodeValue.length),(p=y.firstChild)!==null;)m=y,y=p;for(;;){if(y===e)break t;if(m===a&&++d===n&&(s=u),m===i&&++h===l&&(r=u),(p=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=p}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ou={focusedElem:e,selectionRange:a},Oi=!1,xe=t;xe!==null;)if(t=xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xe=e;else for(;xe!==null;){switch(t=xe,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var T=Ca(a.type,n);e=l.getSnapshotBeforeUpdate(T,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(E){W(a,a.return,E)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)_u(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_u(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(N(163))}if(e=t.sibling,e!==null){e.return=t.return,xe=e;break}xe=t.return}}function Rd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:At(e,a),l&4&&xn(5,a);break;case 1:if(At(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){W(a,a.return,u)}else{var n=Ca(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){W(a,a.return,u)}}l&64&&Od(a),l&512&&Zl(a,a.return);break;case 3:if(At(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Yf(e,t)}catch(u){W(a,a.return,u)}}break;case 27:t===null&&l&4&&Ud(a);case 26:case 5:At(e,a),t===null&&l&4&&_d(a),l&512&&Zl(a,a.return);break;case 12:At(e,a);break;case 31:At(e,a),l&4&&Gd(e,a);break;case 13:At(e,a),l&4&&Yd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Gp.bind(null,a),ny(e,a))));break;case 22:if(l=a.memoizedState!==null||zt,!l){t=t!==null&&t.memoizedState!==null||he,n=zt;var i=he;zt=l,(he=t)&&!i?Tt(e,a,(a.subtreeFlags&8772)!==0):At(e,a),zt=n,he=i}break;case 30:break;default:At(e,a)}}function Hd(e){var t=e.alternate;t!==null&&(e.alternate=null,Hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,Ge=!1;function jt(e,t,a){for(a=a.child;a!==null;)Bd(e,t,a),a=a.sibling}function Bd(e,t,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(mn,a)}catch{}switch(a.tag){case 26:he||yt(a,t),jt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:he||yt(a,t);var l=ce,n=Ge;ha(a.type)&&(ce=a.stateNode,Ge=!1),jt(e,t,a),$l(a.stateNode),ce=l,Ge=n;break;case 5:he||yt(a,t);case 6:if(l=ce,n=Ge,ce=null,jt(e,t,a),ce=l,Ge=n,ce!==null)if(Ge)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(a.stateNode)}catch(i){W(a,t,i)}else try{ce.removeChild(a.stateNode)}catch(i){W(a,t,i)}break;case 18:ce!==null&&(Ge?(e=ce,so(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gl(e)):so(ce,a.stateNode));break;case 4:l=ce,n=Ge,ce=a.stateNode.containerInfo,Ge=!0,jt(e,t,a),ce=l,Ge=n;break;case 0:case 11:case 14:case 15:fa(2,a,t),he||fa(4,a,t),jt(e,t,a);break;case 1:he||(yt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Md(a,t,l)),jt(e,t,a);break;case 21:jt(e,t,a);break;case 22:he=(l=he)||a.memoizedState!==null,jt(e,t,a),he=l;break;default:jt(e,t,a)}}function Gd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gl(e)}catch(a){W(t,t.return,a)}}}function Yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gl(e)}catch(a){W(t,t.return,a)}}function Op(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $r),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $r),t;default:throw Error(N(435,e.tag))}}function Rn(e,t){var a=Op(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Yp.bind(null,e,l);l.then(n,n)}})}function He(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(ha(s.type)){ce=s.stateNode,Ge=!1;break e}break;case 5:ce=s.stateNode,Ge=!1;break e;case 3:case 4:ce=s.stateNode.containerInfo,Ge=!0;break e}s=s.return}if(ce===null)throw Error(N(160));Bd(i,u,n),ce=null,Ge=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}var mt=null;function qd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:He(t,e),Be(e),l&4&&(fa(3,e,e.return),xn(3,e),fa(5,e,e.return));break;case 1:He(t,e),Be(e),l&512&&(he||a===null||yt(a,a.return)),l&64&&zt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=mt;if(He(t,e),Be(e),l&512&&(he||a===null||yt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[pn]||i[Ae]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),ze(i,l,a),i[Ae]=e,Se(i),l=i;break e;case"link":var u=po("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(l),ze(i,l,a),n.head.appendChild(i);break;case"meta":if(u=po("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(l),ze(i,l,a),n.head.appendChild(i);break;default:throw Error(N(468,l))}i[Ae]=e,Se(i),l=i}e.stateNode=l}else yo(n,e.type,e.stateNode);else e.stateNode=go(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?yo(n,e.type,e.stateNode):go(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Dc(e,e.memoizedProps,a.memoizedProps)}break;case 27:He(t,e),Be(e),l&512&&(he||a===null||yt(a,a.return)),a!==null&&l&4&&Dc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(He(t,e),Be(e),l&512&&(he||a===null||yt(a,a.return)),e.flags&32){n=e.stateNode;try{ul(n,"")}catch(T){W(e,e.return,T)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Dc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Oc=!0);break;case 6:if(He(t,e),Be(e),l&4){if(e.stateNode===null)throw Error(N(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(T){W(e,e.return,T)}}break;case 3:if(In=null,n=mt,mt=zi(t.containerInfo),He(t,e),mt=n,Be(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{gl(t.containerInfo)}catch(T){W(e,e.return,T)}Oc&&(Oc=!1,Ld(e));break;case 4:l=mt,mt=zi(e.stateNode.containerInfo),He(t,e),Be(e),mt=l;break;case 12:He(t,e),Be(e);break;case 31:He(t,e),Be(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rn(e,l)));break;case 13:He(t,e),Be(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ji=Je()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rn(e,l)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,d=zt,h=he;if(zt=d||n,he=h||r,He(t,e),he=h,zt=d,Be(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||r||zt||he||ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=r.stateNode;var y=r.memoizedProps.style,m=y!=null&&y.hasOwnProperty("display")?y.display:null;s.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(T){W(r,r.return,T)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(T){W(r,r.return,T)}}}else if(t.tag===18){if(a===null){r=t;try{var p=r.stateNode;n?ro(p,!0):ro(r.stateNode,!1)}catch(T){W(r,r.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Rn(e,a))));break;case 19:He(t,e),Be(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rn(e,l)));break;case 30:break;case 21:break;default:He(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(wd(l)){a=l;break}l=l.return}if(a==null)throw Error(N(160));switch(a.tag){case 27:var n=a.stateNode,i=Cc(e);bi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(ul(u,""),a.flags&=-33);var s=Cc(e);bi(e,s,u);break;case 3:case 4:var r=a.stateNode.containerInfo,d=Cc(e);Nu(e,d,r);break;default:throw Error(N(161))}}catch(h){W(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ld(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ld(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function At(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rd(e,t.alternate,t),t=t.sibling}function ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:fa(4,t,t.return),ba(t);break;case 1:yt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Md(t,t.return,a),ba(t);break;case 27:$l(t.stateNode);case 26:case 5:yt(t,t.return),ba(t);break;case 22:t.memoizedState===null&&ba(t);break;case 30:ba(t);break;default:ba(t)}e=e.sibling}}function Tt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Tt(n,i,a),xn(4,i);break;case 1:if(Tt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){W(l,l.return,d)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Gf(r[n],s)}catch(d){W(l,l.return,d)}}a&&u&64&&Od(i),Zl(i,i.return);break;case 27:Ud(i);case 26:case 5:Tt(n,i,a),a&&l===null&&u&4&&_d(i),Zl(i,i.return);break;case 12:Tt(n,i,a);break;case 31:Tt(n,i,a),a&&u&4&&Gd(n,i);break;case 13:Tt(n,i,a),a&&u&4&&Yd(n,i);break;case 22:i.memoizedState===null&&Tt(n,i,a),Zl(i,i.return);break;case 30:break;default:Tt(n,i,a)}t=t.sibling}}function Cs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&vn(a))}function Os(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vn(e))}function dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kd(e,t,a,l),t=t.sibling}function kd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:dt(e,t,a,l),n&2048&&xn(9,t);break;case 1:dt(e,t,a,l);break;case 3:dt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vn(e)));break;case 12:if(n&2048){dt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){W(t,t.return,r)}}else dt(e,t,a,l);break;case 31:dt(e,t,a,l);break;case 13:dt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?dt(e,t,a,l):Vl(e,t):i._visibility&2?dt(e,t,a,l):(i._visibility|=2,Ga(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Cs(u,t);break;case 24:dt(e,t,a,l),n&2048&&Os(t.alternate,t);break;default:dt(e,t,a,l)}}function Ga(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=a,r=l,d=u.flags;switch(u.tag){case 0:case 11:case 15:Ga(i,u,s,r,n),xn(8,u);break;case 23:break;case 22:var h=u.stateNode;u.memoizedState!==null?h._visibility&2?Ga(i,u,s,r,n):Vl(i,u):(h._visibility|=2,Ga(i,u,s,r,n)),n&&d&2048&&Cs(u.alternate,u);break;case 24:Ga(i,u,s,r,n),n&&d&2048&&Os(u.alternate,u);break;default:Ga(i,u,s,r,n)}t=t.sibling}}function Vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Vl(a,l),n&2048&&Cs(l.alternate,l);break;case 24:Vl(a,l),n&2048&&Os(l.alternate,l);break;default:Vl(a,l)}t=t.sibling}}var Rl=8192;function Ha(e,t,a){if(e.subtreeFlags&Rl)for(e=e.child;e!==null;)Xd(e,t,a),e=e.sibling}function Xd(e,t,a){switch(e.tag){case 26:Ha(e,t,a),e.flags&Rl&&e.memoizedState!==null&&py(a,mt,e.memoizedState,e.memoizedProps);break;case 5:Ha(e,t,a);break;case 3:case 4:var l=mt;mt=zi(e.stateNode.containerInfo),Ha(e,t,a),mt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Rl,Rl=16777216,Ha(e,t,a),Rl=l):Ha(e,t,a));break;default:Ha(e,t,a)}}function Qd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];xe=l,Vd(l,e)}Qd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zd(e),e=e.sibling}function Zd(e){switch(e.tag){case 0:case 11:case 15:Cl(e),e.flags&2048&&fa(9,e,e.return);break;case 3:Cl(e);break;case 12:Cl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wn(e)):Cl(e);break;default:Cl(e)}}function Wn(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];xe=l,Vd(l,e)}Qd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:fa(8,t,t.return),Wn(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Wn(t));break;default:Wn(t)}e=e.sibling}}function Vd(e,t){for(;xe!==null;){var a=xe;switch(a.tag){case 0:case 11:case 15:fa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:vn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,xe=l;else e:for(a=e;xe!==null;){l=xe;var n=l.sibling,i=l.return;if(Hd(l),l===a){xe=null;break e}if(n!==null){n.return=i,xe=n;break e}xe=i}}}var Mp={getCacheForType:function(e){var t=Ee(ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ee(ge).controller.signal}},_p=typeof WeakMap=="function"?WeakMap:Map,V=0,P=null,L=null,Q=0,$=0,Qe=null,Ft=!1,Sl=!1,Ms=!1,Yt=0,oe=0,da=0,Aa=0,_s=0,Ke=0,fl=0,Kl=null,Ye=null,ju=!1,Ji=0,Kd=0,xi=1/0,Si=null,na=null,ye=0,ia=null,dl=null,wt=0,Au=0,Tu=null,Jd=null,Jl=0,Eu=null;function Fe(){return V&2&&Q!==0?Q&-Q:H.T!==null?Us():af()}function $d(){if(Ke===0)if(!(Q&536870912)||Z){var e=zn;zn<<=1,!(zn&3932160)&&(zn=262144),Ke=e}else Ke=536870912;return e=Pe.current,e!==null&&(e.flags|=32),Ke}function qe(e,t,a){(e===P&&($===2||$===9)||e.cancelPendingCommit!==null)&&(ml(e,0),It(e,Q,Ke,!1)),gn(e,a),(!(V&2)||e!==P)&&(e===P&&(!(V&2)&&(Aa|=a),oe===4&&It(e,Q,Ke,!1)),xt(e))}function Wd(e,t,a){if(V&6)throw Error(N(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||hn(e,t),n=l?Rp(e,t):Mc(e,t,!0),i=l;do{if(n===0){Sl&&!l&&It(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!wp(a)){n=Mc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=Kl;var r=s.current.memoizedState.isDehydrated;if(r&&(ml(s,u).flags|=256),u=Mc(s,u,!1),u!==2){if(Ms&&!r){s.errorRecoveryDisabledLanes|=i,Aa|=i,n=4;break e}i=Ye,Ye=n,i!==null&&(Ye===null?Ye=i:Ye.push.apply(Ye,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){ml(e,0),It(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(N(345));case 4:if((t&4194048)!==t)break;case 6:It(l,t,Ke,!Ft);break e;case 2:Ye=null;break;case 3:case 5:break;default:throw Error(N(329))}if((t&62914560)===t&&(n=Ji+300-Je(),10<n)){if(It(l,t,Ke,!Ft),Bi(l,0,!0)!==0)break e;wt=t,l.timeoutHandle=pm(Wr.bind(null,l,a,Ye,Si,ju,t,Ke,Aa,fl,Ft,i,"Throttled",-0,0),n);break e}Wr(l,a,Ye,Si,ju,t,Ke,Aa,fl,Ft,i,null,-0,0)}}break}while(!0);xt(e)}function Wr(e,t,a,l,n,i,u,s,r,d,h,y,m,p){if(e.timeoutHandle=-1,y=t.subtreeFlags,y&8192||(y&16785408)===16785408){y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ct},Xd(t,i,y);var T=(i&62914560)===i?Ji-Je():(i&4194048)===i?Kd-Je():0;if(T=yy(y,T),T!==null){wt=i,e.cancelPendingCommit=T(Ir.bind(null,e,t,i,a,l,n,u,s,r,h,y,null,m,p)),It(e,i,u,!d);return}}Ir(e,t,i,a,l,n,u,s,r)}function wp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Ie(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t,a,l){t&=~_s,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-We(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Po(e,a,t)}function $i(){return V&6?!0:(Sn(0),!1)}function ws(){if(L!==null){if($===0)var e=L.return;else e=L,Ot=Ua=null,vs(e),al=null,an=0,e=L;for(;e!==null;)Cd(e.alternate,e),e=e.return;L=null}}function ml(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Pp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),wt=0,ws(),P=e,L=a=Mt(e.current,null),Q=t,$=0,Qe=null,Ft=!1,Sl=hn(e,t),Ms=!1,fl=Ke=_s=Aa=da=oe=0,Ye=Kl=null,ju=!1,t&8&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-We(l),i=1<<n;t|=e[n],l&=~i}return Yt=t,Li(),a}function Fd(e,t){Y=null,H.H=nn,t===xl||t===Xi?(t=Dr(),$=3):t===fs?(t=Dr(),$=4):$=t===zs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qe=t,L===null&&(oe=1,yi(e,ut(t,e.current)))}function Id(){var e=Pe.current;return e===null?!0:(Q&4194048)===Q?rt===null:(Q&62914560)===Q||Q&536870912?e===rt:!1}function Pd(){var e=H.H;return H.H=nn,e===null?nn:e}function em(){var e=H.A;return H.A=Mp,e}function Ni(){oe=4,Ft||(Q&4194048)!==Q&&Pe.current!==null||(Sl=!0),!(da&134217727)&&!(Aa&134217727)||P===null||It(P,Q,Ke,!1)}function Mc(e,t,a){var l=V;V|=2;var n=Pd(),i=em();(P!==e||Q!==t)&&(Si=null,ml(e,t)),t=!1;var u=oe;e:do try{if($!==0&&L!==null){var s=L,r=Qe;switch($){case 8:ws(),u=6;break e;case 3:case 2:case 9:case 6:Pe.current===null&&(t=!0);var d=$;if($=0,Qe=null,Fa(e,s,r,d),a&&Sl){u=0;break e}break;default:d=$,$=0,Qe=null,Fa(e,s,r,d)}}Up(),u=oe;break}catch(h){Fd(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ot=Ua=null,V=l,H.H=n,H.A=i,L===null&&(P=null,Q=0,Li()),u}function Up(){for(;L!==null;)tm(L)}function Rp(e,t){var a=V;V|=2;var l=Pd(),n=em();P!==e||Q!==t?(Si=null,xi=Je()+500,ml(e,t)):Sl=hn(e,t);e:do try{if($!==0&&L!==null){t=L;var i=Qe;t:switch($){case 1:$=0,Qe=null,Fa(e,t,i,1);break;case 2:case 9:if(zr(i)){$=0,Qe=null,Fr(t);break}t=function(){$!==2&&$!==9||P!==e||($=7),xt(e)},i.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:zr(i)?($=0,Qe=null,Fr(t)):($=0,Qe=null,Fa(e,t,i,7));break;case 5:var u=null;switch(L.tag){case 26:u=L.memoizedState;case 5:case 27:var s=L;if(u?Sm(u):s.stateNode.complete){$=0,Qe=null;var r=s.sibling;if(r!==null)L=r;else{var d=s.return;d!==null?(L=d,Wi(d)):L=null}break t}}$=0,Qe=null,Fa(e,t,i,5);break;case 6:$=0,Qe=null,Fa(e,t,i,6);break;case 8:ws(),oe=6;break e;default:throw Error(N(462))}}Hp();break}catch(h){Fd(e,h)}while(!0);return Ot=Ua=null,H.H=l,H.A=n,V=a,L!==null?0:(P=null,Q=0,Li(),oe)}function Hp(){for(;L!==null&&!ig();)tm(L)}function tm(e){var t=Dd(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?Wi(e):L=t}function Fr(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Qr(a,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Qr(a,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:vs(t);default:Cd(a,t),t=L=Cf(t,Yt),t=Dd(a,t,Yt)}e.memoizedProps=e.pendingProps,t===null?Wi(e):L=t}function Fa(e,t,a,l){Ot=Ua=null,vs(t),al=null,an=0;var n=t.return;try{if(Ap(e,n,t,a,Q)){oe=1,yi(e,ut(a,e.current)),L=null;return}}catch(i){if(n!==null)throw L=n,i;oe=1,yi(e,ut(a,e.current)),L=null;return}t.flags&32768?(Z||l===1?e=!0:Sl||Q&536870912?e=!1:(Ft=e=!0,(l===2||l===9||l===3||l===6)&&(l=Pe.current,l!==null&&l.tag===13&&(l.flags|=16384))),am(t,e)):Wi(t)}function Wi(e){var t=e;do{if(t.flags&32768){am(t,Ft);return}e=t.return;var a=zp(t.alternate,t,Yt);if(a!==null){L=a;return}if(t=t.sibling,t!==null){L=t;return}L=t=e}while(t!==null);oe===0&&(oe=5)}function am(e,t){do{var a=Dp(e.alternate,e);if(a!==null){a.flags&=32767,L=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){L=e;return}L=e=a}while(e!==null);oe=6,L=null}function Ir(e,t,a,l,n,i,u,s,r){e.cancelPendingCommit=null;do Fi();while(ye!==0);if(V&6)throw Error(N(327));if(t!==null){if(t===e.current)throw Error(N(177));if(i=t.lanes|t.childLanes,i|=ns,gg(e,a,i,u,s,r),e===P&&(L=P=null,Q=0),dl=t,ia=e,wt=a,Au=i,Tu=n,Jd=l,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,qp(ci,function(){return um(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,t.subtreeFlags&13878||l){l=H.T,H.T=null,n=K.p,K.p=2,u=V,V|=4;try{Cp(e,t,a)}finally{V=u,K.p=n,H.T=l}}ye=1,lm(),nm(),im()}}function lm(){if(ye===1){ye=0;var e=ia,t=dl,a=(t.flags&13878)!==0;if(t.subtreeFlags&13878||a){a=H.T,H.T=null;var l=K.p;K.p=2;var n=V;V|=4;try{qd(t,e);var i=Ou,u=Sf(e.containerInfo),s=i.focusedElem,r=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&xf(s.ownerDocument.documentElement,s)){if(r!==null&&ls(s)){var d=r.start,h=r.end;if(h===void 0&&(h=d),"selectionStart"in s)s.selectionStart=d,s.selectionEnd=Math.min(h,s.value.length);else{var y=s.ownerDocument||document,m=y&&y.defaultView||window;if(m.getSelection){var p=m.getSelection(),T=s.textContent.length,E=Math.min(r.start,T),O=r.end===void 0?E:Math.min(r.end,T);!p.extend&&E>O&&(u=O,O=E,E=u);var f=xr(s,E),o=xr(s,O);if(f&&o&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==o.node||p.focusOffset!==o.offset)){var g=y.createRange();g.setStart(f.node,f.offset),p.removeAllRanges(),E>O?(p.addRange(g),p.extend(o.node,o.offset)):(g.setEnd(o.node,o.offset),p.addRange(g))}}}}for(y=[],p=s;p=p.parentNode;)p.nodeType===1&&y.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<y.length;s++){var v=y[s];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Oi=!!Cu,Ou=Cu=null}finally{V=n,K.p=l,H.T=a}}e.current=t,ye=2}}function nm(){if(ye===2){ye=0;var e=ia,t=dl,a=(t.flags&8772)!==0;if(t.subtreeFlags&8772||a){a=H.T,H.T=null;var l=K.p;K.p=2;var n=V;V|=4;try{Rd(e,t.alternate,t)}finally{V=n,K.p=l,H.T=a}}ye=3}}function im(){if(ye===4||ye===3){ye=0,cg();var e=ia,t=dl,a=wt,l=Jd;t.subtreeFlags&10256||t.flags&10256?ye=5:(ye=0,dl=ia=null,cm(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(na=null),Wu(a),t=t.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(mn,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=H.T,n=K.p,K.p=2,H.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{H.T=t,K.p=n}}wt&3&&Fi(),xt(e),n=e.pendingLanes,a&261930&&n&42?e===Eu?Jl++:(Jl=0,Eu=e):Jl=0,Sn(0)}}function cm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,vn(t)))}function Fi(){return lm(),nm(),im(),um()}function um(){if(ye!==5)return!1;var e=ia,t=Au;Au=0;var a=Wu(wt),l=H.T,n=K.p;try{K.p=32>a?32:a,H.T=null,a=Tu,Tu=null;var i=ia,u=wt;if(ye=0,dl=ia=null,wt=0,V&6)throw Error(N(331));var s=V;if(V|=4,Zd(i.current),kd(i,i.current,u,a),V=s,Sn(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(mn,i)}catch{}return!0}finally{K.p=n,H.T=l,cm(e,t)}}function Pr(e,t,a){t=ut(a,t),t=bu(e.stateNode,t,2),e=la(e,t,2),e!==null&&(gn(e,2),xt(e))}function W(e,t,a){if(e.tag===3)Pr(e,e,a);else for(;t!==null;){if(t.tag===3){Pr(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(na===null||!na.has(l))){e=ut(a,e),a=Nd(2),l=la(t,a,2),l!==null&&(jd(a,l,t,e),gn(l,2),xt(l));break}}t=t.return}}function _c(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new _p;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Ms=!0,n.add(a),e=Bp.bind(null,e,t,a),t.then(e,e))}function Bp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,P===e&&(Q&a)===a&&(oe===4||oe===3&&(Q&62914560)===Q&&300>Je()-Ji?!(V&2)&&ml(e,0):_s|=a,fl===Q&&(fl=0)),xt(e)}function sm(e,t){t===0&&(t=Io()),e=wa(e,t),e!==null&&(gn(e,t),xt(e))}function Gp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sm(e,a)}function Yp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(N(314))}l!==null&&l.delete(t),sm(e,a)}function qp(e,t){return Ju(e,t)}var ji=null,Ya=null,zu=!1,Ai=!1,wc=!1,Pt=0;function xt(e){e!==Ya&&e.next===null&&(Ya===null?ji=Ya=e:Ya=Ya.next=e),Ai=!0,zu||(zu=!0,kp())}function Sn(e,t){if(!wc&&Ai){wc=!0;do for(var a=!1,l=ji;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-We(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,eo(l,i))}else i=Q,i=Bi(l,l===P?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(i&3)||hn(l,i)||(a=!0,eo(l,i));l=l.next}while(a);wc=!1}}function Lp(){rm()}function rm(){Ai=zu=!1;var e=0;Pt!==0&&Ip()&&(e=Pt);for(var t=Je(),a=null,l=ji;l!==null;){var n=l.next,i=om(l,t);i===0?(l.next=null,a===null?ji=n:a.next=n,n===null&&(Ya=a)):(a=l,(e!==0||i&3)&&(Ai=!0)),l=n}ye!==0&&ye!==5||Sn(e),Pt!==0&&(Pt=0)}function om(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-We(i),s=1<<u,r=n[u];r===-1?(!(s&a)||s&l)&&(n[u]=hg(s,t)):r<=t&&(e.expiredLanes|=s),i&=~s}if(t=P,a=Q,a=Bi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&uc(l),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||hn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&uc(l),Wu(a)){case 2:case 8:a=Wo;break;case 32:a=ci;break;case 268435456:a=Fo;break;default:a=ci}return l=fm.bind(null,e),a=Ju(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&uc(l),e.callbackPriority=2,e.callbackNode=null,2}function fm(e,t){if(ye!==0&&ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fi()&&e.callbackNode!==a)return null;var l=Q;return l=Bi(e,e===P?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Wd(e,l,t),om(e,Je()),e.callbackNode!=null&&e.callbackNode===a?fm.bind(null,e):null)}function eo(e,t){if(Fi())return null;Wd(e,t,!0)}function kp(){ey(function(){V&6?Ju($o,Lp):rm()})}function Us(){if(Pt===0){var e=sl;e===0&&(e=En,En<<=1,!(En&261888)&&(En=256)),Pt=e}return Pt}function to(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ln(""+e)}function ao(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Xp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=to((n[Le]||null).action),u=l.submitter;u&&(t=(t=u[Le]||null)?to(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Gi("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Pt!==0){var r=u?ao(n,u):new FormData(n);yu(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(s.preventDefault(),r=u?ao(n,u):new FormData(n),yu(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Uc=0;Uc<iu.length;Uc++){var Rc=iu[Uc],Qp=Rc.toLowerCase(),Zp=Rc[0].toUpperCase()+Rc.slice(1);ht(Qp,"on"+Zp)}ht(jf,"onAnimationEnd");ht(Af,"onAnimationIteration");ht(Tf,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(up,"onTransitionRun");ht(sp,"onTransitionStart");ht(rp,"onTransitionCancel");ht(Ef,"onTransitionEnd");cl("onMouseEnter",["mouseout","mouseover"]);cl("onMouseLeave",["mouseout","mouseover"]);cl("onPointerEnter",["pointerout","pointerover"]);cl("onPointerLeave",["pointerout","pointerover"]);Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cn));function dm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var s=l[u],r=s.instance,d=s.currentTarget;if(s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(h){si(h)}n.currentTarget=null,i=r}else for(u=0;u<l.length;u++){if(s=l[u],r=s.instance,d=s.currentTarget,s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(h){si(h)}n.currentTarget=null,i=r}}}}function q(e,t){var a=t[Fc];a===void 0&&(a=t[Fc]=new Set);var l=e+"__bubble";a.has(l)||(mm(t,e,2,!1),a.add(l))}function Hc(e,t,a){var l=0;t&&(l|=4),mm(a,e,l,t)}var Hn="_reactListening"+Math.random().toString(36).slice(2);function Rs(e){if(!e[Hn]){e[Hn]=!0,lf.forEach(function(a){a!=="selectionchange"&&(Vp.has(a)||Hc(a,!1,e),Hc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hn]||(t[Hn]=!0,Hc("selectionchange",!1,t))}}function mm(e,t,a,l){switch(Em(t)){case 2:var n=xy;break;case 8:n=Sy;break;default:n=Ys}a=n.bind(null,t,a,e),n=void 0,!au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Bc(e,t,a,l,n){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=ka(s),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){l=i=u;continue e}s=s.parentNode}}l=l.return}df(function(){var d=i,h=Pu(a),y=[];e:{var m=zf.get(e);if(m!==void 0){var p=Gi,T=e;switch(e){case"keypress":if(Xn(a)===0)break e;case"keydown":case"keyup":p=Yg;break;case"focusin":T="focus",p=dc;break;case"focusout":T="blur",p=dc;break;case"beforeblur":case"afterblur":p=dc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=or;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kg;break;case jf:case Af:case Tf:p=Og;break;case Ef:p=Qg;break;case"scroll":case"scrollend":p=Tg;break;case"wheel":p=Vg;break;case"copy":case"cut":case"paste":p=_g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dr;break;case"toggle":case"beforetoggle":p=Jg}var E=(t&4)!==0,O=!E&&(e==="scroll"||e==="scrollend"),f=E?m!==null?m+"Capture":null:m;E=[];for(var o=d,g;o!==null;){var v=o;if(g=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||g===null||f===null||(v=Fl(o,f),v!=null&&E.push(un(o,v,g))),O)break;o=o.return}0<E.length&&(m=new p(m,T,null,a,h),y.push({event:m,listeners:E}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",m&&a!==tu&&(T=a.relatedTarget||a.fromElement)&&(ka(T)||T[yl]))break e;if((p||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,p?(T=a.relatedTarget||a.toElement,p=d,T=T?ka(T):null,T!==null&&(O=dn(T),E=T.tag,T!==O||E!==5&&E!==27&&E!==6)&&(T=null)):(p=null,T=d),p!==T)){if(E=or,v="onMouseLeave",f="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(E=dr,v="onPointerLeave",f="onPointerEnter",o="pointer"),O=p==null?m:wl(p),g=T==null?m:wl(T),m=new E(v,o+"leave",p,a,h),m.target=O,m.relatedTarget=g,v=null,ka(h)===d&&(E=new E(f,o+"enter",T,a,h),E.target=g,E.relatedTarget=O,v=E),O=v,p&&T)t:{for(E=Kp,f=p,o=T,g=0,v=f;v;v=E(v))g++;v=0;for(var b=o;b;b=E(b))v++;for(;0<g-v;)f=E(f),g--;for(;0<v-g;)o=E(o),v--;for(;g--;){if(f===o||o!==null&&f===o.alternate){E=f;break t}f=E(f),o=E(o)}E=null}else E=null;p!==null&&lo(y,m,p,E,!1),T!==null&&O!==null&&lo(y,O,T,E,!0)}}e:{if(m=d?wl(d):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var j=pr;else if(gr(m))if(vf)j=np;else{j=ap;var x=tp}else p=m.nodeName,!p||p.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&Iu(d.elementType)&&(j=pr):j=lp;if(j&&(j=j(e,d))){yf(y,j,a,h);break e}x&&x(e,m,d),e==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&eu(m,"number",m.value)}switch(x=d?wl(d):window,e){case"focusin":(gr(x)||x.contentEditable==="true")&&(Za=x,lu=d,Yl=null);break;case"focusout":Yl=lu=Za=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Sr(y,a,h);break;case"selectionchange":if(cp)break;case"keydown":case"keyup":Sr(y,a,h)}var z;if(as)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Qa?gf(e,a)&&(w="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(w="onCompositionStart");w&&(hf&&a.locale!=="ko"&&(Qa||w!=="onCompositionStart"?w==="onCompositionEnd"&&Qa&&(z=mf()):(Wt=h,es="value"in Wt?Wt.value:Wt.textContent,Qa=!0)),x=Ti(d,w),0<x.length&&(w=new fr(w,e,null,a,h),y.push({event:w,listeners:x}),z?w.data=z:(z=pf(a),z!==null&&(w.data=z)))),(z=Wg?Fg(e,a):Ig(e,a))&&(w=Ti(d,"onBeforeInput"),0<w.length&&(x=new fr("onBeforeInput","beforeinput",null,a,h),y.push({event:x,listeners:w}),x.data=z)),Xp(y,e,d,a,h)}dm(y,t)})}function un(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ti(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Fl(e,a),n!=null&&l.unshift(un(e,n,i)),n=Fl(e,t),n!=null&&l.push(un(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Kp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lo(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var s=a,r=s.alternate,d=s.stateNode;if(s=s.tag,r!==null&&r===l)break;s!==5&&s!==26&&s!==27||d===null||(r=d,n?(d=Fl(a,i),d!=null&&u.unshift(un(a,d,r))):n||(d=Fl(a,i),d!=null&&u.push(un(a,d,r)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Jp=/\r\n?/g,$p=/\u0000|\uFFFD/g;function no(e){return(typeof e=="string"?e:""+e).replace(Jp,`
`).replace($p,"")}function hm(e,t){return t=no(t),no(e)===t}function F(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ul(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ul(e,""+l);break;case"className":Cn(e,"class",l);break;case"tabIndex":Cn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(e,a,l);break;case"style":ff(e,l,i);break;case"data":if(t!=="object"){Cn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ln(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&F(e,t,"name",n.name,n,null),F(e,t,"formEncType",n.formEncType,n,null),F(e,t,"formMethod",n.formMethod,n,null),F(e,t,"formTarget",n.formTarget,n,null)):(F(e,t,"encType",n.encType,n,null),F(e,t,"method",n.method,n,null),F(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ln(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ct);break;case"onScroll":l!=null&&q("scroll",e);break;case"onScrollEnd":l!=null&&q("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(N(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(N(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Ln(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":q("beforetoggle",e),q("toggle",e),qn(e,"popover",l);break;case"xlinkActuate":St(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":St(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":St(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":St(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":St(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":St(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":St(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":St(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":St(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":qn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=jg.get(a)||a,qn(e,a,l))}}function Du(e,t,a,l,n,i){switch(a){case"style":ff(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(N(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(N(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ul(e,l):(typeof l=="number"||typeof l=="bigint")&&ul(e,""+l);break;case"onScroll":l!=null&&q("scroll",e);break;case"onScrollEnd":l!=null&&q("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ct);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Le]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):qn(e,a,l)}}}function ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",e),q("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(N(137,t));default:F(e,t,i,u,a,null)}}n&&F(e,t,"srcSet",a.srcSet,a,null),l&&F(e,t,"src",a.src,a,null);return;case"input":q("invalid",e);var s=i=u=n=null,r=null,d=null;for(l in a)if(a.hasOwnProperty(l)){var h=a[l];if(h!=null)switch(l){case"name":n=h;break;case"type":u=h;break;case"checked":r=h;break;case"defaultChecked":d=h;break;case"value":i=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(N(137,t));break;default:F(e,t,l,h,a,null)}}sf(e,i,s,r,d,u,n,!1);return;case"select":q("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:F(e,t,n,s,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Pa(e,!!l,t,!1):a!=null&&Pa(e,!!l,a,!0);return;case"textarea":q("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(N(91));break;default:F(e,t,u,s,a,null)}of(e,l,n,i);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(l=a[r],l!=null))switch(r){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:F(e,t,r,l,a,null)}return;case"dialog":q("beforetoggle",e),q("toggle",e),q("cancel",e),q("close",e);break;case"iframe":case"object":q("load",e);break;case"video":case"audio":for(l=0;l<cn.length;l++)q(cn[l],e);break;case"image":q("error",e),q("load",e);break;case"details":q("toggle",e);break;case"embed":case"source":case"link":q("error",e),q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(l=a[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(N(137,t));default:F(e,t,d,l,a,null)}return;default:if(Iu(t)){for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!==void 0&&Du(e,t,h,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&F(e,t,s,l,a,null))}function Wp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,r=null,d=null,h=null;for(p in a){var y=a[p];if(a.hasOwnProperty(p)&&y!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":r=y;default:l.hasOwnProperty(p)||F(e,t,p,null,l,y)}}for(var m in l){var p=l[m];if(y=a[m],l.hasOwnProperty(m)&&(p!=null||y!=null))switch(m){case"type":i=p;break;case"name":n=p;break;case"checked":d=p;break;case"defaultChecked":h=p;break;case"value":u=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(N(137,t));break;default:p!==y&&F(e,t,m,p,l,y)}}Pc(e,u,s,r,d,h,i,n);return;case"select":p=u=s=m=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":p=r;default:l.hasOwnProperty(i)||F(e,t,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":m=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==r&&F(e,t,n,i,l,r)}t=s,a=u,l=p,m!=null?Pa(e,!!a,m,!1):!!l!=!!a&&(t!=null?Pa(e,!!a,t,!0):Pa(e,!!a,a?[]:"",!1));return;case"textarea":p=m=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:F(e,t,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":m=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(N(91));break;default:n!==i&&F(e,t,u,n,l,i)}rf(e,m,p);return;case"option":for(var T in a)if(m=a[T],a.hasOwnProperty(T)&&m!=null&&!l.hasOwnProperty(T))switch(T){case"selected":e.selected=!1;break;default:F(e,t,T,null,l,m)}for(r in l)if(m=l[r],p=a[r],l.hasOwnProperty(r)&&m!==p&&(m!=null||p!=null))switch(r){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:F(e,t,r,m,l,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in a)m=a[E],a.hasOwnProperty(E)&&m!=null&&!l.hasOwnProperty(E)&&F(e,t,E,null,l,m);for(d in l)if(m=l[d],p=a[d],l.hasOwnProperty(d)&&m!==p&&(m!=null||p!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(N(137,t));break;default:F(e,t,d,m,l,p)}return;default:if(Iu(t)){for(var O in a)m=a[O],a.hasOwnProperty(O)&&m!==void 0&&!l.hasOwnProperty(O)&&Du(e,t,O,void 0,l,m);for(h in l)m=l[h],p=a[h],!l.hasOwnProperty(h)||m===p||m===void 0&&p===void 0||Du(e,t,h,m,l,p);return}}for(var f in a)m=a[f],a.hasOwnProperty(f)&&m!=null&&!l.hasOwnProperty(f)&&F(e,t,f,null,l,m);for(y in l)m=l[y],p=a[y],!l.hasOwnProperty(y)||m===p||m==null&&p==null||F(e,t,y,m,l,p)}function io(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&io(u)){for(u=0,s=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],d=r.startTime;if(d>s)break;var h=r.transferSize,y=r.initiatorType;h&&io(y)&&(r=r.responseEnd,u+=h*(r<s?1:(s-d)/(r-d)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cu=null,Ou=null;function Ei(e){return e.nodeType===9?e:e.ownerDocument}function co(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Mu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gc=null;function Ip(){var e=window.event;return e&&e.type==="popstate"?e===Gc?!1:(Gc=e,!0):(Gc=null,!1)}var pm=typeof setTimeout=="function"?setTimeout:void 0,Pp=typeof clearTimeout=="function"?clearTimeout:void 0,uo=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof uo<"u"?function(e){return uo.resolve(null).then(e).catch(ty)}:pm;function ty(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function so(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),gl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")$l(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,$l(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[pn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&$l(e.ownerDocument.body);a=n}while(a);gl(t)}function ro(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function _u(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_u(a),Fu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ay(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[pn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ot(e.nextSibling),e===null)break}return null}function ly(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ot(e.nextSibling),e===null))return null;return e}function ym(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ot(e.nextSibling),e===null))return null;return e}function wu(e){return e.data==="$?"||e.data==="$~"}function Uu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ny(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ru=null;function oo(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ot(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function fo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function vm(e,t,a){switch(t=Ei(a),e){case"html":if(e=t.documentElement,!e)throw Error(N(452));return e;case"head":if(e=t.head,!e)throw Error(N(453));return e;case"body":if(e=t.body,!e)throw Error(N(454));return e;default:throw Error(N(451))}}function $l(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fu(e)}var ft=new Map,mo=new Set;function zi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qt=K.d;K.d={f:iy,r:cy,D:uy,C:sy,L:ry,m:oy,X:dy,S:fy,M:my};function iy(){var e=qt.f(),t=$i();return e||t}function cy(e){var t=vl(e);t!==null&&t.tag===5&&t.type==="form"?fd(t):qt.r(e)}var Nl=typeof document>"u"?null:document;function bm(e,t,a){var l=Nl;if(l&&typeof t=="string"&&t){var n=ct(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),mo.has(n)||(mo.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),ze(t,"link",e),Se(t),l.head.appendChild(t)))}}function uy(e){qt.D(e),bm("dns-prefetch",e,null)}function sy(e,t){qt.C(e,t),bm("preconnect",e,t)}function ry(e,t,a){qt.L(e,t,a);var l=Nl;if(l&&e&&t){var n='link[rel="preload"][as="'+ct(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ct(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ct(a.imageSizes)+'"]')):n+='[href="'+ct(e)+'"]';var i=n;switch(t){case"style":i=hl(e);break;case"script":i=jl(e)}ft.has(i)||(e=ne({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ft.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Nn(i))||t==="script"&&l.querySelector(jn(i))||(t=l.createElement("link"),ze(t,"link",e),Se(t),l.head.appendChild(t)))}}function oy(e,t){qt.m(e,t);var a=Nl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ct(l)+'"][href="'+ct(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=jl(e)}if(!ft.has(i)&&(e=ne({rel:"modulepreload",href:e},t),ft.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jn(i)))return}l=a.createElement("link"),ze(l,"link",e),Se(l),a.head.appendChild(l)}}}function fy(e,t,a){qt.S(e,t,a);var l=Nl;if(l&&e){var n=Ia(l).hoistableStyles,i=hl(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(Nn(i)))s.loading=5;else{e=ne({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ft.get(i))&&Hs(e,a);var r=u=l.createElement("link");Se(r),ze(r,"link",e),r._p=new Promise(function(d,h){r.onload=d,r.onerror=h}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Fn(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function dy(e,t){qt.X(e,t);var a=Nl;if(a&&e){var l=Ia(a).hoistableScripts,n=jl(e),i=l.get(n);i||(i=a.querySelector(jn(n)),i||(e=ne({src:e,async:!0},t),(t=ft.get(n))&&Bs(e,t),i=a.createElement("script"),Se(i),ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function my(e,t){qt.M(e,t);var a=Nl;if(a&&e){var l=Ia(a).hoistableScripts,n=jl(e),i=l.get(n);i||(i=a.querySelector(jn(n)),i||(e=ne({src:e,async:!0,type:"module"},t),(t=ft.get(n))&&Bs(e,t),i=a.createElement("script"),Se(i),ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function ho(e,t,a,l){var n=(n=ea.current)?zi(n):null;if(!n)throw Error(N(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=hl(a.href),a=Ia(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=hl(a.href);var i=Ia(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Nn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),ft.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ft.set(e,a),i||hy(n,e,a,u.state))),t&&l===null)throw Error(N(528,""));return u}if(t&&l!==null)throw Error(N(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=jl(a),a=Ia(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(N(444,e))}}function hl(e){return'href="'+ct(e)+'"'}function Nn(e){return'link[rel="stylesheet"]['+e+"]"}function xm(e){return ne({},e,{"data-precedence":e.precedence,precedence:null})}function hy(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ze(t,"link",a),Se(t),e.head.appendChild(t))}function jl(e){return'[src="'+ct(e)+'"]'}function jn(e){return"script[async]"+e}function go(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ct(a.href)+'"]');if(l)return t.instance=l,Se(l),l;var n=ne({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Se(l),ze(l,"style",n),Fn(l,a.precedence,e),t.instance=l;case"stylesheet":n=hl(a.href);var i=e.querySelector(Nn(n));if(i)return t.state.loading|=4,t.instance=i,Se(i),i;l=xm(a),(n=ft.get(n))&&Hs(l,n),i=(e.ownerDocument||e).createElement("link"),Se(i);var u=i;return u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),ze(i,"link",l),t.state.loading|=4,Fn(i,a.precedence,e),t.instance=i;case"script":return i=jl(a.src),(n=e.querySelector(jn(i)))?(t.instance=n,Se(n),n):(l=a,(n=ft.get(i))&&(l=ne({},a),Bs(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Se(n),ze(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(N(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(l=t.instance,t.state.loading|=4,Fn(l,a.precedence,e));return t.instance}function Fn(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Hs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var In=null;function po(e,t,a){if(In===null){var l=new Map,n=In=new Map;n.set(a,l)}else n=In,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[pn]||i[Ae]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function yo(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function gy(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Sm(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function py(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=hl(l.href),i=t.querySelector(Nn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Di.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Se(i);return}i=t.ownerDocument||t,l=xm(l),(n=ft.get(n))&&Hs(l,n),i=i.createElement("link"),Se(i);var u=i;u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),ze(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&!(a.state.loading&3)&&(e.count++,a=Di.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Yc=0;function yy(e,t){return e.stylesheets&&e.count===0&&Pn(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Pn(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Yc===0&&(Yc=62500*Fp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Pn(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Yc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Di(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ci=null;function Pn(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ci=new Map,t.forEach(vy,e),Ci=null,Di.call(e))}function vy(e,t){if(!(t.state.loading&4)){var a=Ci.get(e);if(a)var l=a.get(null);else{a=new Map,Ci.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Di.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var sn={$$typeof:Dt,Provider:null,Consumer:null,_currentValue:xa,_currentValue2:xa,_threadCount:0};function by(e,t,a,l,n,i,u,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.hiddenUpdates=sc(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Nm(e,t,a,l,n,i,u,s,r,d,h,y){return e=new by(e,t,a,u,r,d,h,y,s),t=1,i===!0&&(t|=24),i=Ve(3,null,null,t),e.current=i,i.stateNode=e,t=rs(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ds(i),e}function jm(e){return e?(e=Ja,e):Ja}function Am(e,t,a,l,n,i){n=jm(n),l.context===null?l.context=n:l.pendingContext=n,l=aa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=la(e,l,t),a!==null&&(qe(a,e,t),Ll(a,e,t))}function vo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Gs(e,t){vo(e,t),(e=e.alternate)&&vo(e,t)}function Tm(e){if(e.tag===13||e.tag===31){var t=wa(e,67108864);t!==null&&qe(t,e,67108864),Gs(e,67108864)}}function bo(e){if(e.tag===13||e.tag===31){var t=Fe();t=$u(t);var a=wa(e,t);a!==null&&qe(a,e,t),Gs(e,t)}}var Oi=!0;function xy(e,t,a,l){var n=H.T;H.T=null;var i=K.p;try{K.p=2,Ys(e,t,a,l)}finally{K.p=i,H.T=n}}function Sy(e,t,a,l){var n=H.T;H.T=null;var i=K.p;try{K.p=8,Ys(e,t,a,l)}finally{K.p=i,H.T=n}}function Ys(e,t,a,l){if(Oi){var n=Hu(l);if(n===null)Bc(e,t,l,Mi,a),xo(e,l);else if(jy(n,e,t,a,l))l.stopPropagation();else if(xo(e,l),t&4&&-1<Ny.indexOf(e)){for(;n!==null;){var i=vl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=ya(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var r=1<<31-We(u);s.entanglements[1]|=r,u&=~r}xt(i),!(V&6)&&(xi=Je()+500,Sn(0))}}break;case 31:case 13:s=wa(i,2),s!==null&&qe(s,i,2),$i(),Gs(i,2)}if(i=Hu(l),i===null&&Bc(e,t,l,Mi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Bc(e,t,l,null,a)}}function Hu(e){return e=Pu(e),qs(e)}var Mi=null;function qs(e){if(Mi=null,e=ka(e),e!==null){var t=dn(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Qo(t),e!==null)return e;e=null}else if(a===31){if(e=Zo(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Mi=e,null}function Em(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ug()){case $o:return 2;case Wo:return 8;case ci:case sg:return 32;case Fo:return 268435456;default:return 32}default:return 32}}var Bu=!1,ca=null,ua=null,sa=null,rn=new Map,on=new Map,Jt=[],Ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xo(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":on.delete(t.pointerId)}}function Ol(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=vl(t),t!==null&&Tm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function jy(e,t,a,l,n){switch(t){case"focusin":return ca=Ol(ca,e,t,a,l,n),!0;case"dragenter":return ua=Ol(ua,e,t,a,l,n),!0;case"mouseover":return sa=Ol(sa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return rn.set(i,Ol(rn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,on.set(i,Ol(on.get(i)||null,e,t,a,l,n)),!0}return!1}function zm(e){var t=ka(e.target);if(t!==null){var a=dn(t);if(a!==null){if(t=a.tag,t===13){if(t=Qo(a),t!==null){e.blockedOn=t,lr(e.priority,function(){bo(a)});return}}else if(t===31){if(t=Zo(a),t!==null){e.blockedOn=t,lr(e.priority,function(){bo(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Hu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);tu=l,a.target.dispatchEvent(l),tu=null}else return t=vl(a),t!==null&&Tm(t),e.blockedOn=a,!1;t.shift()}return!0}function So(e,t,a){ei(e)&&a.delete(t)}function Ay(){Bu=!1,ca!==null&&ei(ca)&&(ca=null),ua!==null&&ei(ua)&&(ua=null),sa!==null&&ei(sa)&&(sa=null),rn.forEach(So),on.forEach(So)}function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Bu||(Bu=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,Ay)))}var Gn=null;function No(e){Gn!==e&&(Gn=e,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,function(){Gn===e&&(Gn=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(qs(l||a)===null)continue;break}var i=vl(a);i!==null&&(e.splice(t,3),t-=3,yu(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function gl(e){function t(r){return Bn(r,e)}ca!==null&&Bn(ca,e),ua!==null&&Bn(ua,e),sa!==null&&Bn(sa,e),rn.forEach(t),on.forEach(t);for(var a=0;a<Jt.length;a++){var l=Jt[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Jt.length&&(a=Jt[0],a.blockedOn===null);)zm(a),a.blockedOn===null&&Jt.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Le]||null;if(typeof i=="function")u||No(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Le]||null)s=u.formAction;else if(qs(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),No(a)}}}function Dm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ls(e){this._internalRoot=e}Ii.prototype.render=Ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));var a=t.current,l=Fe();Am(a,l,e,t,null,null)};Ii.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Am(e.current,2,null,e,null,null),$i(),t[yl]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=af();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Jt.length&&t!==0&&t<Jt[a].priority;a++);Jt.splice(a,0,e),a===0&&zm(e)}};var jo=ko.version;if(jo!=="19.2.4")throw Error(N(527,jo,"19.2.4"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=eg(t),e=e!==null?Vo(e):null,e=e===null?null:e.stateNode,e};var Ty={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yn.isDisabled&&Yn.supportsFiber)try{mn=Yn.inject(Ty),$e=Yn}catch{}}Ri.createRoot=function(e,t){if(!Xo(e))throw Error(N(299));var a=!1,l="",n=bd,i=xd,u=Sd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Nm(e,1,!1,null,null,a,l,null,n,i,u,Dm),e[yl]=t.current,Rs(e),new Ls(t)};Ri.hydrateRoot=function(e,t,a){if(!Xo(e))throw Error(N(299));var l=!1,n="",i=bd,u=xd,s=Sd,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=Nm(e,1,!0,t,a??null,l,n,r,i,u,s,Dm),t.context=jm(null),a=t.current,l=Fe(),l=$u(l),n=aa(l),n.callback=null,la(a,n,l),a=l,t.current.lanes=a,gn(t,a),xt(t),e[yl]=t.current,Rs(e),new Ii(t)};Ri.version="19.2.4";function Cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cm)}catch(e){console.error(e)}}Cm(),Ho.exports=Ri;var Ey=Ho.exports;const Ut={ACTIONABLE_NOW:"Now",CANDIDATES:"Review",AMBIGUITY:"Clarify",WAITING:"Waiting",TUNING:"Tuning"},fn={CRITICAL:"Critical",HIGH:"High",MEDIUM:"Medium",LOW:"Low"},_i={DATE_EXACT:"On Date",DATE_WINDOW:"Date Range",EMAIL_REPLY:"Email Reply",MANUAL_CHECK:"Manual Check",WEB_CONDITION:"Web Monitor"},zy="/api";async function R(e,t){const a=await fetch(`${zy}${e}`,{headers:{"Content-Type":"application/json",...t==null?void 0:t.headers},...t});if(!a.ok){const l=await a.json().catch(()=>({message:"Request failed"}));throw new Error(l.message||`HTTP ${a.status}`)}return a.json()}async function Om(){return R("/containers/counts")}async function ks(e){const t=new URLSearchParams;e&&t.set("container",e);const a=t.toString();return R(`/actions${a?`?${a}`:""}`)}async function Mm(e){return R(`/actions/${e}`)}async function ti(e,t){return R(`/actions/${e}`,{method:"PUT",body:JSON.stringify(t)})}async function _m(e){return R(`/actions/${e}/complete`,{method:"POST"})}async function Gu(e,t){return R(`/actions/${e}/move`,{method:"POST",body:JSON.stringify({container:t})})}async function wm(e){await R(`/actions/${e}`,{method:"DELETE"})}async function Um(e){await R(`/actions/${e}/purge`,{method:"DELETE"})}async function Rm(e){await R(`/actions/${e}/acknowledge`,{method:"POST"})}async function Xs(){return R("/system/health")}async function Hm(){return R("/system/run-followups",{method:"POST"})}async function Bm(){return R("/system/run-triggers",{method:"POST"})}async function Gm(e){return R("/parse/preview",{method:"POST",body:JSON.stringify({text:e})})}async function Ym(e){return R("/parse/confirm",{method:"POST",body:JSON.stringify(e)})}async function qm(e,t){return R("/parse/clarify",{method:"POST",body:JSON.stringify({rawInput:e,answers:t})})}async function Lm(e){return R(`/parse/${e}/reparse`,{method:"POST"})}async function km(){return R("/sources/gmail/status")}async function Xm(){return R("/sources/gmail/auth-url")}async function Qm(){await R("/sources/gmail/disconnect",{method:"POST"})}async function Zm(){return R("/sources/gmail/scan",{method:"POST"})}async function Vm(e){const t=new URLSearchParams;e!=null&&e.actionId&&t.set("actionId",e.actionId.toString()),e!=null&&e.pending&&t.set("pending","true");const a=t.toString();return R(`/triggers${a?`?${a}`:""}`)}async function Qs(e){return R("/triggers",{method:"POST",body:JSON.stringify(e)})}async function Km(e){await R(`/triggers/${e}`,{method:"DELETE"})}async function Jm(e){return R(`/triggers/${e}/fire`,{method:"POST"})}async function $m(e,t){return R(`/triggers/${e}/check`,{method:"POST",body:JSON.stringify({conditionMet:t})})}async function Wm(e){const t=new URLSearchParams;e.q&&t.set("q",e.q),e.container&&t.set("container",e.container),e.urgency&&t.set("urgency",e.urgency),e.includeArchived&&t.set("includeArchived","true"),e.archiveOnly&&t.set("archiveOnly","true"),e.limit&&t.set("limit",e.limit.toString()),e.offset&&t.set("offset",e.offset.toString());const a=t.toString();return R(`/search${a?`?${a}`:""}`)}async function Fm(){return R("/groups")}async function Yu(e){return R("/groups",{method:"POST",body:JSON.stringify(e)})}async function Im(e){return R(`/groups/${e}`,{method:"PUT",body:JSON.stringify({archivedAt:new Date().toISOString()})})}async function Pm(e){await R(`/groups/${e}`,{method:"DELETE"})}async function eh(e,t){return R(`/groups/${e}/actions`,{method:"POST",body:JSON.stringify({actionIds:t})})}async function qu(e,t){await R(`/groups/${e}/actions/${t}`,{method:"DELETE"})}async function th(){return R("/groups/suggest",{method:"POST"})}async function ah(e,t){return R("/groups/merge",{method:"POST",body:JSON.stringify({primaryId:e,secondaryId:t})})}async function lh(){return R("/tuning")}async function nh(e){return R(`/tuning/${e}/activate`,{method:"POST"})}async function ih(e,t,a=!1){return R(`/tuning/${e}/reject`,{method:"POST",body:JSON.stringify({feedback:t,dontAskAgain:a})})}async function ch(e){return R(`/tuning/${e}/ask-less`,{method:"POST"})}async function uh(e){await R(`/tuning/${e}`,{method:"DELETE"})}async function sh(){return R("/tuning/stats")}async function rh(){return R("/notifications/vapid-public-key")}async function oh(e,t,a){await R("/notifications/subscribe",{method:"POST",body:JSON.stringify({endpoint:e,p256dh:t,auth:a})})}async function fh(e){await R("/notifications/unsubscribe",{method:"DELETE",body:JSON.stringify({endpoint:e})})}async function dh(e,t,a){return R("/tuning/feedback",{method:"POST",body:JSON.stringify({actionId:e,feedbackType:t,correction:a})})}async function mh(){return R("/containers/flag-counts")}async function hh(e){return R(`/actions?${e}=true`)}async function gh(e){return R("/actions/bulk/complete",{method:"POST",body:JSON.stringify({ids:e})})}async function ph(e){return R("/actions/bulk/delete",{method:"POST",body:JSON.stringify({ids:e})})}async function yh(e,t){return R("/actions/bulk/move",{method:"POST",body:JSON.stringify({ids:e,container:t})})}const Dy=Object.freeze(Object.defineProperty({__proto__:null,acknowledgeFollowUp:Rm,activateTuningRule:nh,addActionsToGroup:eh,archiveGroup:Im,askLessOften:ch,bulkCompleteActions:gh,bulkDeleteActions:ph,bulkMoveActions:yh,checkTrigger:$m,completeAction:_m,createGroup:Yu,createTrigger:Qs,deleteAction:wm,deleteGroup:Pm,deleteTrigger:Km,deleteTuningRule:uh,disconnectGmail:Qm,fireTrigger:Jm,getAction:Mm,getActions:ks,getActionsByFlag:hh,getContainerCounts:Om,getFlagCounts:mh,getGmailAuthUrl:Xm,getGmailStatus:km,getGroupSuggestions:th,getGroups:Fm,getSystemHealth:Xs,getTriggers:Vm,getTuningRules:lh,getTuningStats:sh,getVapidPublicKey:rh,mergeActions:ah,moveAction:Gu,parseClarify:qm,parseConfirm:Ym,parsePreview:Gm,purgeAction:Um,rejectTuningRule:ih,removeActionFromGroup:qu,reparseAction:Lm,runFollowUpCheck:Hm,runTriggerCheck:Bm,searchActions:Wm,submitTuningFeedback:dh,subscribeToPush:oh,triggerGmailScan:Zm,unsubscribeFromPush:fh,updateAction:ti},Symbol.toStringTag,{value:"Module"}));let wi=null;function ai(){return wi?wi():Promise.resolve()}function Cy({activeContainer:e,onContainerChange:t,onFlagFilter:a}){const[l,n]=A.useState({ACTIONABLE_NOW:0,CANDIDATES:0,AMBIGUITY:0,WAITING:0,TUNING:0}),[i,u]=A.useState({needsClarification:0,needsTuning:0}),s=A.useCallback(async()=>{try{const[h,y]=await Promise.all([Om(),mh()]);n(h),u(y)}catch(h){console.error("Failed to load counts:",h)}},[]);A.useEffect(()=>(wi=s,s(),()=>{wi=null}),[s]);function r(h){t(e===h?null:h)}function d(h,y){const m=e===h;return c.jsxs("button",{className:`grid-btn grid-btn--${y}${m?" selected":""}`,onClick:()=>r(h),children:[c.jsx("span",{className:"grid-btn-label",children:Ut[h]}),c.jsx("span",{className:"grid-btn-badge",children:l[h]})]},h)}return c.jsxs("div",{className:"container-grid",children:[d("ACTIONABLE_NOW","now"),c.jsxs("div",{className:"grid-row",children:[d("CANDIDATES","review"),d("AMBIGUITY","clarify")]}),c.jsx("div",{className:"grid-row",children:d("WAITING","waiting")}),(i.needsClarification>0||i.needsTuning>0)&&c.jsxs("div",{className:"flag-badges",children:[i.needsClarification>0&&c.jsxs("button",{className:"flag-badge flag-badge--clarify",onClick:()=>a==null?void 0:a("needsClarification"),title:"Actions needing clarification",children:[c.jsx("span",{className:"flag-badge-icon",children:"?"}),c.jsx("span",{className:"flag-badge-label",children:"Clarify"}),c.jsx("span",{className:"flag-badge-count",children:i.needsClarification})]}),i.needsTuning>0&&c.jsxs("button",{className:"flag-badge flag-badge--tuning",onClick:()=>a==null?void 0:a("needsTuning"),title:"Actions flagged for tuning",children:[c.jsx("span",{className:"flag-badge-icon",children:"⚙"}),c.jsx("span",{className:"flag-badge-label",children:"Tuning"}),c.jsx("span",{className:"flag-badge-count",children:i.needsTuning})]})]})]})}const Ao={SU:"Sunday",MO:"Monday",TU:"Tuesday",WE:"Wednesday",TH:"Thursday",FR:"Friday",SA:"Saturday"},Oy=["January","February","March","April","May","June","July","August","September","October","November","December"];function My(e){const t={};for(const l of e.split(";")){const[n,i]=l.split("=");n&&i&&(t[n.trim()]=i.trim())}const a=t.FREQ;return!a||!["DAILY","WEEKLY","MONTHLY","YEARLY"].includes(a)?null:{freq:a,interval:t.INTERVAL&&parseInt(t.INTERVAL)||1,byMonthDay:t.BYMONTHDAY?parseInt(t.BYMONTHDAY):void 0,byMonth:t.BYMONTH?parseInt(t.BYMONTH):void 0,byDay:t.BYDAY||void 0}}function qc(e){const t=["th","st","nd","rd"],a=e%100;return e+(t[(a-20)%10]||t[a]||t[0])}function Zs(e){const t=My(e);if(!t)return e;switch(t.freq){case"DAILY":return t.interval===1?"Daily":`Every ${t.interval} days`;case"WEEKLY":return t.interval===1?t.byDay&&Ao[t.byDay]?`Weekly on ${Ao[t.byDay]}`:"Weekly":t.interval===2?"Biweekly":`Every ${t.interval} weeks`;case"MONTHLY":return t.interval===1?t.byMonthDay?`Monthly on the ${qc(t.byMonthDay)}`:"Monthly":t.interval===3?t.byMonthDay?`Quarterly on the ${qc(t.byMonthDay)}`:"Quarterly":t.interval===6?"Every 6 months":`Every ${t.interval} months`;case"YEARLY":if(t.byMonth){const a=Oy[t.byMonth-1];return t.byMonthDay?`Yearly on ${a} ${qc(t.byMonthDay)}`:`Yearly in ${a}`}return t.interval===1?"Yearly":`Every ${t.interval} years`}}function _y({action:e,onClick:t,onDelete:a,selectable:l,selected:n,onSelect:i}){var b;const u=e.urgency.toLowerCase(),s=A.useRef(null),[r,d]=A.useState(0),[h,y]=A.useState(!1);function m(){const j=window.getSelection();j&&j.toString().length>0||h||t()}function p(){return e.confidence>=.8?"high":e.confidence>=.5?"medium":"low"}function T(){if(!e.dueDate)return null;const j=new Date(e.dueDate),x=new Date,z=Math.ceil((j.getTime()-x.getTime())/(1e3*60*60*24));return z<0?`${Math.abs(z)}d overdue`:z===0?"Today":z===1?"Tomorrow":z<7?`${z}d`:j.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function E(){const j=window.getSelection();return!!(j&&j.toString().length>0)}function O(j){s.current=j.touches[0].clientX}function f(j){if(s.current===null||E())return;const x=j.touches[0].clientX-s.current;x<-10&&(y(!0),d(Math.min(0,x)))}function o(){if(E()){s.current=null;return}r<-120&&a?(d(-300),setTimeout(()=>{a(e.id)},200)):d(0),s.current=null,setTimeout(()=>y(!1),50)}const g=e.container==="CANDIDATES",v=T();return c.jsxs("div",{className:"action-card",onClick:m,children:[r<-10&&c.jsx("div",{className:"action-card-delete-bg",children:"Delete"}),c.jsxs("div",{className:"action-card-inner",style:{transform:r<0?`translateX(${r}px)`:void 0,transition:h?"none":"transform 0.2s ease"},onTouchStart:O,onTouchMove:f,onTouchEnd:o,children:[l&&c.jsx("div",{className:"action-checkbox-wrapper",onClick:j=>j.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"action-checkbox",checked:!!n,onChange:()=>i==null?void 0:i(e.id)})}),c.jsx("div",{className:`action-urgency-bar ${u}`}),c.jsxs("div",{className:"action-content",children:[e.needsFollowUp&&c.jsx("div",{className:"action-followup-nudge",children:"Still important? Tap to review."}),c.jsx("div",{className:"action-description",children:e.shortDescription||e.description}),((b=e.source)==null?void 0:b.type)==="GMAIL"&&(e.source.emailFrom||e.source.emailSubject)&&c.jsxs("div",{className:"action-source-line",children:["From: ",e.source.emailFrom||"Unknown"," · ",e.source.emailSubject||"No subject"]}),c.jsxs("div",{className:"action-meta",children:[g&&c.jsx("span",{className:"badge badge-unconfirmed",children:"Unconfirmed"}),e.container==="WAITING"&&c.jsx("span",{className:"badge badge-waiting",children:"Waiting"}),e.needsClarification&&c.jsx("span",{className:"badge badge-clarify",children:"Clarify"}),e.needsTuning&&c.jsx("span",{className:"badge badge-tuning",children:"Tuning"}),e.recurrenceRule&&c.jsxs("span",{className:"badge badge-recurrence",children:["↻ ",Zs(e.recurrenceRule)]}),v&&c.jsx("span",{className:"action-due",children:v}),c.jsxs("span",{className:"action-confidence",children:[c.jsx("span",{className:`confidence-dot ${p()}`}),Math.round(e.confidence*100),"%"]})]})]})]})]})}function wy({onClose:e,onCreated:t}){const[a,l]=A.useState("input"),[n,i]=A.useState(""),[u,s]=A.useState(null),[r,d]=A.useState({}),[h,y]=A.useState(null);async function m(){if(!n.trim()){y("Please enter a description");return}l("parsing"),y(null);try{const f=await Gm(n.trim());s(f),f.container==="AMBIGUITY"&&f.questions.length>0?l("clarify"):l("preview")}catch(f){y("Failed to parse action"),l("input"),console.error(f)}}async function p(){if(u){l("parsing"),y(null);try{const f=await qm(u.rawInput,r);s(f),f.container==="AMBIGUITY"&&f.questions.length>0?(d({}),l("clarify")):l("preview")}catch(f){y("Failed to clarify"),l("clarify"),console.error(f)}}}async function T(){if(u){l("parsing"),y(null);try{await Ym(u),t()}catch(f){y("Failed to save action"),l("preview"),console.error(f)}}}function E(f,o){u&&s({...u,[f]:o})}function O(){return u?u.confidence>=.8?"var(--success)":u.confidence>=.5?"var(--warning)":"var(--urgency-critical)":"var(--text-secondary)"}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content",onClick:f=>f.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsxs("h2",{className:"modal-title",children:[a==="input"&&"New Action",a==="parsing"&&"Analyzing...",a==="preview"&&"Review Action",a==="clarify"&&"Need More Info"]}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),a==="input"&&c.jsxs("div",{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What needs to be done?"}),c.jsx("textarea",{className:"form-textarea",value:n,onChange:f=>i(f.target.value),placeholder:"e.g., Call John about the project proposal by Friday",autoFocus:!0,rows:3}),c.jsx("p",{className:"form-hint",children:"Include details like who, what, when - AI will extract the action"})]}),h&&c.jsx("div",{className:"form-error",children:h}),c.jsx("button",{type:"button",className:"btn btn-primary btn-block",onClick:m,children:"Parse with AI"})]}),a==="parsing"&&c.jsxs("div",{className:"parsing-state",children:[c.jsx("div",{className:"parsing-spinner"}),c.jsx("p",{children:"Analyzing your input..."})]}),a==="preview"&&u&&c.jsxs("div",{children:[c.jsxs("div",{className:"preview-section",children:[c.jsxs("div",{className:"preview-confidence",style:{color:O()},children:[Math.round(u.confidence*100),"% confident"]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:u.description,onChange:f=>E("description",f.target.value),rows:2})]}),u.suggestedAction&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Suggested Next Step"}),c.jsx("input",{type:"text",className:"form-input",value:u.suggestedAction,onChange:f=>E("suggestedAction",f.target.value)})]}),c.jsxs("div",{className:"preview-meta",children:[c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Container"}),c.jsx("select",{className:"form-select form-select-small",value:u.container,onChange:f=>E("container",f.target.value),children:["ACTIONABLE_NOW","CANDIDATES","WAITING","AMBIGUITY"].map(f=>c.jsx("option",{value:f,children:Ut[f]},f))})]}),c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Urgency"}),c.jsx("select",{className:"form-select form-select-small",value:u.urgency,onChange:f=>E("urgency",f.target.value),children:Object.entries(fn).map(([f,o])=>c.jsx("option",{value:f,children:o},f))})]}),u.dueDate&&c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Due"}),c.jsx("input",{type:"date",className:"form-input form-input-small",value:u.dueDate,onChange:f=>E("dueDate",f.target.value)})]})]}),u.parties.length>0&&c.jsxs("div",{className:"preview-parties",children:[c.jsx("span",{className:"preview-meta-label",children:"People:"}),u.parties.map((f,o)=>c.jsx("span",{className:"party-chip",children:f.name},o))]}),u.recurrenceRule&&c.jsxs("div",{className:"preview-recurrence",children:[c.jsx("span",{className:"preview-meta-label",children:"Repeats"}),c.jsxs("span",{className:"preview-recurrence-value",children:["↻ ",Zs(u.recurrenceRule)]}),u.leadTimeDays!==void 0&&c.jsxs("span",{className:"preview-lead-time",children:["(surfaces ",u.leadTimeDays," days before due)"]})]}),u.reasoning&&c.jsxs("div",{className:"preview-reasoning",children:[c.jsx("span",{className:"preview-meta-label",children:"AI Reasoning"}),c.jsx("p",{children:u.reasoning})]})]}),h&&c.jsx("div",{className:"form-error",children:h}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>l("input"),children:"Edit Input"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:T,children:"Save Action"})]})]}),a==="clarify"&&u&&c.jsxs("div",{children:[c.jsx("p",{className:"clarify-intro",children:"Please answer these questions to clarify your action:"}),u.questions.map((f,o)=>c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:f}),c.jsx("input",{type:"text",className:"form-input",value:r[f]||"",onChange:g=>d({...r,[f]:g.target.value}),placeholder:"Your answer..."})]},o)),h&&c.jsx("div",{className:"form-error",children:h}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>l("input"),children:"Start Over"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:p,disabled:Object.keys(r).length===0,children:"Submit Answers"})]})]}),c.jsx("style",{children:`
          .form-hint {
            font-size: 12px;
            color: var(--text-secondary);
            margin-top: 6px;
          }
          .form-error {
            color: var(--urgency-critical);
            margin-bottom: 16px;
            font-size: 14px;
          }
          .parsing-state {
            text-align: center;
            padding: 32px;
          }
          .parsing-spinner {
            width: 32px;
            height: 32px;
            border: 3px solid var(--bg-card);
            border-top-color: var(--accent);
            border-radius: 50%;
            margin: 0 auto 16px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .preview-section {
            margin-bottom: 16px;
          }
          .preview-confidence {
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 12px;
          }
          .preview-meta {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-top: 12px;
          }
          .preview-meta-item {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .preview-meta-label {
            font-size: 11px;
            color: var(--text-secondary);
            text-transform: uppercase;
          }
          .preview-meta-value {
            font-size: 14px;
            font-weight: 500;
          }
          .form-select-small,
          .form-input-small {
            padding: 6px 8px;
            font-size: 13px;
          }
          .preview-parties {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 12px;
            flex-wrap: wrap;
          }
          .party-chip {
            background: var(--bg-card);
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 13px;
          }
          .preview-recurrence {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: 12px;
            padding: 10px 12px;
            background: var(--bg-card);
            border-radius: 8px;
          }
          .preview-recurrence-value {
            font-size: 14px;
            font-weight: 500;
          }
          .preview-lead-time {
            font-size: 12px;
            color: var(--text-secondary);
          }
          .preview-reasoning {
            margin-top: 16px;
            padding: 12px;
            background: var(--bg-card);
            border-radius: 8px;
          }
          .preview-reasoning p {
            font-size: 13px;
            color: var(--text-secondary);
            margin-top: 4px;
            line-height: 1.5;
          }
          .preview-buttons {
            display: flex;
            gap: 8px;
          }
          .preview-buttons .btn {
            flex: 1;
          }
          .clarify-intro {
            font-size: 14px;
            color: var(--text-secondary);
            margin-bottom: 16px;
          }
        `})]})})}const Uy="modulepreload",Ry=function(e){return"/"+e},To={},Hy=function(t,a,l){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),s=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));n=Promise.allSettled(a.map(r=>{if(r=Ry(r),r in To)return;To[r]=!0;const d=r.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${h}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":Uy,d||(y.as="script"),y.crossOrigin="",y.href=r,s&&y.setAttribute("nonce",s),document.head.appendChild(y),d)return new Promise((m,p)=>{y.addEventListener("load",m),y.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})}))}function i(u){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=u,window.dispatchEvent(s),!s.defaultPrevented)throw u}return n.then(u=>{for(const s of u||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},By={CREATED:"Created",CONTAINER_CHANGE:"Moved",EDITED:"Edited",MERGED:"Merged",TRIGGER_FIRED:"Trigger fired",AI_REPARSED:"AI re-parsed",COMPLETED:"Completed",ARCHIVED:"Archived",FOLLOW_UP_SENT:"Follow-up sent"};function Gy({events:e,aiReasoning:t}){function a(n){return new Date(n).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function l(n){const i=By[n.type];if(n.type==="CONTAINER_CHANGE"&&n.fromContainer&&n.toContainer)return`${i} from ${n.fromContainer} to ${n.toContainer}`;if(n.details)try{const u=JSON.parse(n.details);if(u.source)return`${i} via ${u.source}`;if(u.fields)return`${i}: ${u.fields.join(", ")}`}catch{}return i}return c.jsxs("div",{className:"info-panel",children:[t&&c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"AI Reasoning"}),c.jsx("p",{className:"info-reasoning",children:t})]}),c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"History"}),c.jsx("div",{className:"info-timeline",children:e.map(n=>c.jsxs("div",{className:"timeline-item",children:[c.jsx("span",{className:"timeline-time",children:a(n.createdAt)}),c.jsx("span",{className:"timeline-description",children:l(n)})]},n.id))})]}),c.jsx("style",{children:`
        .info-panel {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .info-section {
          margin-bottom: 16px;
        }
        .info-section-title {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .info-reasoning {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
          padding: 12px;
          background: var(--bg-card);
          border-radius: 8px;
        }
        .info-timeline {
          background: var(--bg-card);
          border-radius: 8px;
          padding: 8px 12px;
        }
        .timeline-item {
          display: flex;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: 13px;
        }
        .timeline-item:last-child {
          border-bottom: none;
        }
        .timeline-time {
          color: var(--text-secondary);
          flex-shrink: 0;
          width: 100px;
        }
        .timeline-description {
          color: var(--text-primary);
        }
      `})]})}function Eo({trigger:e,onUpdate:t}){const[a,l]=A.useState(!1);function n(h){return h?new Date(h).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""}function i(h){if(!h)return"";const y=new Date(h),m=new Date,p=Math.ceil((y.getTime()-m.getTime())/(1e3*60*60*24));return p<0?`${Math.abs(p)}d ago`:p===0?"Today":p===1?"Tomorrow":p<7?`In ${p}d`:n(h)}function u(){switch(e.type){case"DATE_EXACT":return i(e.triggerDate);case"DATE_WINDOW":return`${n(e.dateWindowStart)} - ${n(e.dateWindowEnd)}`;case"EMAIL_REPLY":return e.emailPattern||"Waiting for reply";case"MANUAL_CHECK":return e.eventDescription||"Check condition";case"WEB_CONDITION":return e.webQuery||"Monitoring web for condition";default:return""}}async function s(){if(confirm("Fire this trigger now? The action will move to Actionable Now.")){l(!0);try{await Jm(e.id),t()}catch(h){console.error("Failed to fire trigger:",h),alert("Failed to fire trigger")}finally{l(!1)}}}async function r(h){l(!0);try{(await $m(e.id,h)).fired&&alert("Condition met! Action moved to Actionable Now."),t()}catch(y){console.error("Failed to check trigger:",y),alert("Failed to check trigger")}finally{l(!1)}}async function d(){if(confirm("Delete this trigger?")){l(!0);try{await Km(e.id),t()}catch(h){console.error("Failed to delete trigger:",h),alert("Failed to delete trigger")}finally{l(!1)}}}return e.isTriggered?c.jsxs("div",{className:"trigger-card fired",children:[c.jsx("div",{className:"trigger-icon",children:"✓"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:_i[e.type]}),c.jsxs("div",{className:"trigger-info",children:["Fired ",i(e.triggeredAt)]})]})]}):c.jsxs("div",{className:"trigger-card",children:[c.jsx("div",{className:"trigger-icon",children:"⏳"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:_i[e.type]}),c.jsx("div",{className:"trigger-info",children:u()}),e.description&&c.jsx("div",{className:"trigger-description",children:e.description}),e.type==="WEB_CONDITION"&&e.webCheckResult&&c.jsxs("div",{className:"trigger-description",children:["Last check: ",e.webCheckResult]}),e.type==="WEB_CONDITION"&&e.lastChecked&&c.jsxs("div",{className:"trigger-description",style:{opacity:.6},children:["Checked ",i(e.lastChecked)," · ",e.checkCount," checks"]})]}),c.jsxs("div",{className:"trigger-actions",children:[e.type==="MANUAL_CHECK"?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"trigger-btn check",onClick:()=>r(!0),disabled:a,title:"Condition met",children:"✓"}),c.jsx("button",{className:"trigger-btn skip",onClick:()=>r(!1),disabled:a,title:"Not yet",children:"↻"})]}):c.jsx("button",{className:"trigger-btn fire",onClick:s,disabled:a,title:"Fire now",children:"▶"}),c.jsx("button",{className:"trigger-btn delete",onClick:d,disabled:a,title:"Delete",children:"✕"})]}),c.jsx("style",{children:`
        .trigger-card {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          background: var(--bg-card);
          border-radius: 8px;
          margin-top: 8px;
        }
        .trigger-card.fired {
          opacity: 0.6;
        }
        .trigger-icon {
          font-size: 16px;
          width: 24px;
          text-align: center;
          flex-shrink: 0;
        }
        .trigger-content {
          flex: 1;
          min-width: 0;
        }
        .trigger-type {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .trigger-info {
          font-size: 14px;
          margin-top: 2px;
        }
        .trigger-description {
          font-size: 13px;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .trigger-actions {
          display: flex;
          gap: 4px;
          flex-shrink: 0;
        }
        .trigger-btn {
          width: 28px;
          height: 28px;
          border-radius: 14px;
          border: none;
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s;
        }
        .trigger-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .trigger-btn.fire,
        .trigger-btn.check {
          background: var(--success);
          color: var(--bg-primary);
        }
        .trigger-btn.skip {
          background: var(--bg-secondary);
          color: var(--text-secondary);
        }
        .trigger-btn.delete {
          background: transparent;
          color: var(--text-secondary);
        }
        .trigger-btn.delete:hover {
          color: var(--urgency-critical);
        }
      `})]})}function Yy({actionId:e,onClose:t,onCreated:a}){const[l,n]=A.useState("DATE_EXACT"),[i,u]=A.useState(""),[s,r]=A.useState(""),[d,h]=A.useState(""),[y,m]=A.useState(""),[p,T]=A.useState(""),[E,O]=A.useState(!1),[f,o]=A.useState(null);async function g(j){if(j.preventDefault(),o(null),l==="DATE_EXACT"&&!s){o("Please select a date");return}if(l==="DATE_WINDOW"&&(!d||!y)){o("Please select both start and end dates");return}if(l==="MANUAL_CHECK"&&!p){o("Please describe what to check for");return}O(!0);try{await Qs({actionId:e,type:l,description:i||void 0,triggerDate:l==="DATE_EXACT"?s:void 0,dateWindowStart:l==="DATE_WINDOW"?d:void 0,dateWindowEnd:l==="DATE_WINDOW"?y:void 0,eventDescription:l==="MANUAL_CHECK"?p:void 0}),a(),t()}catch(x){o("Failed to create trigger"),console.error(x)}finally{O(!1)}}const v=new Date;v.setDate(v.getDate()+1);const b=v.toISOString().split("T")[0];return c.jsx("div",{className:"trigger-modal-overlay",onClick:t,children:c.jsxs("div",{className:"trigger-modal",onClick:j=>j.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Add Trigger"}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]}),c.jsxs("form",{onSubmit:g,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Type"}),c.jsx("div",{className:"trigger-type-options",children:Object.keys(_i).map(j=>c.jsx("button",{type:"button",className:`trigger-type-btn ${l===j?"active":""}`,onClick:()=>n(j),children:_i[j]},j))})]}),l==="DATE_EXACT"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Date"}),c.jsx("input",{type:"date",className:"form-input",value:s,onChange:j=>r(j.target.value),min:b}),c.jsx("p",{className:"form-hint",children:"Action will move to Actionable Now on this date"})]}),l==="DATE_WINDOW"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Start Date"}),c.jsx("input",{type:"date",className:"form-input",value:d,onChange:j=>h(j.target.value),min:b})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"End Date"}),c.jsx("input",{type:"date",className:"form-input",value:y,onChange:j=>m(j.target.value),min:d||b})]}),c.jsx("p",{className:"form-hint",children:"Action will become active when start date is reached"})]}),l==="EMAIL_REPLY"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:j=>u(j.target.value),placeholder:"e.g., Waiting for reply from John"}),c.jsx("p",{className:"form-hint",children:"You'll be prompted to manually check for the reply"})]}),l==="MANUAL_CHECK"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What to check for"}),c.jsx("textarea",{className:"form-textarea",value:p,onChange:j=>T(j.target.value),placeholder:"e.g., 30% trade-in promotion period starts",rows:2}),c.jsx("p",{className:"form-hint",children:"You'll be prompted periodically to check if this condition is met"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Note (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:j=>u(j.target.value),placeholder:"Add a note about this trigger..."})]}),f&&c.jsx("div",{className:"form-error",children:f}),c.jsxs("div",{className:"trigger-modal-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:E,children:E?"Adding...":"Add Trigger"})]})]}),c.jsx("style",{children:`
          .trigger-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 200;
            padding: 16px;
          }
          .trigger-modal {
            background: var(--bg-secondary);
            border-radius: 12px;
            padding: 20px;
            width: 100%;
            max-width: 400px;
            max-height: 80vh;
            overflow-y: auto;
          }
          .trigger-type-options {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .trigger-type-btn {
            padding: 10px;
            background: var(--bg-card);
            border: 2px solid transparent;
            border-radius: 8px;
            color: var(--text-secondary);
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
          }
          .trigger-type-btn.active {
            border-color: var(--accent);
            color: var(--text-primary);
          }
          .trigger-type-btn:not(.active):hover {
            background: rgba(255,255,255,0.05);
          }
          .form-hint {
            font-size: 12px;
            color: var(--text-secondary);
            margin-top: 6px;
          }
          .form-error {
            color: var(--urgency-critical);
            font-size: 14px;
            margin-bottom: 16px;
          }
          .trigger-modal-buttons {
            display: flex;
            gap: 8px;
            margin-top: 16px;
          }
          .trigger-modal-buttons .btn {
            flex: 1;
          }
        `})]})})}function vh({actionId:e,onClose:t,onUpdate:a}){var Vs,Ks;const[l,n]=A.useState(null),[i,u]=A.useState([]),[s,r]=A.useState(!0),[d,h]=A.useState(!1),[y,m]=A.useState(!1),[p,T]=A.useState(!1),[E,O]=A.useState(!1),[f,o]=A.useState(!1),[g,v]=A.useState(null),[b,j]=A.useState(!1),[x,z]=A.useState(""),[w,B]=A.useState(""),[se,ie]=A.useState("MEDIUM"),[_e,we]=A.useState(""),[U,S]=A.useState(!1),[M,_]=A.useState(!1),[k,J]=A.useState(!1),[Xe,Ue]=A.useState(null),[et,be]=A.useState(""),[D,X]=A.useState(null),[ue,tt]=A.useState("");A.useEffect(()=>{Re()},[e]);async function Re(){try{const[C,De]=await Promise.all([Mm(e),Vm({actionId:e})]);n(C),u(De),B(C.description),ie(C.urgency),we(C.dueDate?C.dueDate.split("T")[0]:"")}catch(C){console.error("Failed to load action:",C)}finally{r(!1)}}async function Lt(){if(l){S(!0);try{await ti(l.id,{description:w,urgency:se,dueDate:_e||null,version:l.version}),h(!1),Re(),a()}catch(C){console.error("Failed to save:",C),alert("Failed to save changes")}finally{S(!1)}}}function bh(){l&&(B(l.description),ie(l.urgency),we(l.dueDate?l.dueDate.split("T")[0]:""),h(!1))}async function xh(){if(l){_(!0);try{await Lm(l.id),h(!1),Re(),a()}catch(C){console.error("Failed to reparse:",C),alert("Failed to re-parse action")}finally{_(!1)}}}async function Sh(){if(l)try{const C=await _m(l.id);if(C.nextAction){const De=C.nextAction.dueDate?new Date(C.nextAction.dueDate).toLocaleDateString():"scheduled";v(`Next occurrence created (due ${De})`),setTimeout(()=>{a(),t()},2e3)}else a(),t()}catch(C){console.error("Failed to complete:",C)}}async function Nh(){if(!l)return;const C=parseInt(x);if(!(isNaN(C)||C<0||C>90))try{await ti(l.id,{leadTimeDays:C,version:l.version}),j(!1),Re(),a()}catch(De){console.error("Failed to update lead time:",De)}}async function jh(){if(l)try{await Gu(l.id,"ACTIONABLE_NOW"),Re(),a()}catch(C){console.error("Failed to confirm:",C)}}function Pi(){Re(),a()}async function ec(C,De){if(l)try{await dh(l.id,C,De),O(!1),Re(),a()}catch(Js){console.error("Failed to submit feedback:",Js)}}function Ah(){Ue("defer"),be(""),o(!1)}async function Th(){if(!(!l||!et))try{await Qs({actionId:l.id,type:"DATE_EXACT",description:`Deferred until ${et}`,triggerDate:et}),Ue(null),be(""),Re(),a()}catch{alert("Failed to defer action")}}function Eh(){J(!0),o(!1)}async function zh(C){if(l)try{await Gu(l.id,C),J(!1),Re(),a()}catch{alert("Failed to reclassify action")}}async function Dh(){if(l&&confirm(`Permanently delete "${l.description.substring(0,60)}"? This cannot be undone.`)){try{await Um(l.id),a(),t()}catch{alert("Failed to delete action")}o(!1)}}async function Ch(){if(!l)return;const C=prompt("Enter the ID of the action to merge this into:");if(!C)return;const De=parseInt(C);if(isNaN(De)){alert("Invalid ID");return}if(confirm(`Merge this action into action #${De}? This cannot be undone.`)){try{await ah(De,l.id),a(),t()}catch{alert("Failed to merge actions")}o(!1)}}if(s)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsx("div",{className:"modal-content",onClick:C=>C.stopPropagation(),children:c.jsx("p",{children:"Loading..."})})});if(!l)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content",onClick:C=>C.stopPropagation(),children:[c.jsx("p",{children:"Action not found"}),c.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Close"})]})});const tc=i.filter(C=>!C.isTriggered),ac=i.filter(C=>C.isTriggered);return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content action-view",onClick:C=>C.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:d?"Edit Action":"Action Details"}),c.jsxs("div",{className:"action-view-actions",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>m(!y),title:"View history",children:"i"}),c.jsxs("div",{className:"menu-wrapper",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>o(!f),title:"More options",children:"⋯"}),f&&c.jsxs("div",{className:"action-menu",children:[c.jsx("button",{className:"action-menu-item",onClick:Ah,children:"Defer"}),c.jsx("button",{className:"action-menu-item",onClick:Eh,children:"Reclassify"}),c.jsx("button",{className:"action-menu-item",onClick:Ch,children:"Merge"}),c.jsx("button",{className:"action-menu-item",onClick:()=>{T(!0),o(!1)},children:"Add to Waiting"}),c.jsx("button",{className:"action-menu-item action-menu-item--danger",onClick:Dh,children:"Delete"})]})]}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]})]}),d?c.jsxs("div",{className:"action-edit-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:w,onChange:C=>B(C.target.value)})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Urgency"}),c.jsx("select",{className:"form-select",value:se,onChange:C=>ie(C.target.value),children:Object.entries(fn).map(([C,De])=>c.jsx("option",{value:C,children:De},C))})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Due Date"}),c.jsx("input",{type:"date",className:"form-input",value:_e,onChange:C=>we(C.target.value)})]}),c.jsxs("div",{className:"action-edit-buttons",children:[c.jsx("button",{className:"btn btn-secondary",onClick:bh,children:"Cancel"}),c.jsx("button",{className:"btn btn-secondary",onClick:xh,disabled:M||U,children:M?"Parsing...":"Re-parse"}),c.jsx("button",{className:"btn btn-primary",onClick:Lt,disabled:U||M,children:U?"Saving...":"Save"})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"action-detail-content",children:[c.jsx("div",{className:"action-detail-description",children:l.description}),c.jsx("div",{className:"action-detail-source",children:((Vs=l.source)==null?void 0:Vs.type)==="GMAIL"?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"From"}),c.jsx("span",{className:"detail-value",children:l.source.emailFrom||"Unknown"})]}),c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Subject"}),c.jsx("span",{className:"detail-value",children:l.source.emailSubject||"No subject"})]}),l.source.emailDate&&c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Date"}),c.jsx("span",{className:"detail-value",children:new Date(l.source.emailDate).toLocaleDateString()})]}),l.source.emailId&&c.jsx("div",{className:"source-row",children:c.jsx("a",{href:`https://mail.google.com/mail/u/0/#inbox/${l.source.emailId}`,target:"_blank",rel:"noopener noreferrer",className:"source-gmail-link",children:"View in Gmail"})})]}):((Ks=l.source)==null?void 0:Ks.type)==="SIRI"?c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Via Siri"})]}):c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Manually entered"})]})}),l.suggestedAction&&c.jsxs("div",{className:"action-detail-suggested",children:[c.jsx("span",{className:"detail-label",children:"Next step:"}),l.suggestedAction]}),c.jsxs("div",{className:"action-detail-meta",children:[c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Container"}),c.jsx("span",{className:"detail-value",children:Ut[l.container]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Urgency"}),c.jsx("span",{className:`detail-value urgency-${l.urgency.toLowerCase()}`,children:fn[l.urgency]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Confidence"}),c.jsxs("span",{className:"detail-value",children:[Math.round(l.confidence*100),"%"]})]}),l.dueDate&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Due"}),c.jsx("span",{className:"detail-value",children:new Date(l.dueDate).toLocaleDateString()})]}),l.recurrenceRule&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Repeats"}),c.jsxs("span",{className:"detail-value",children:["↻ ",Zs(l.recurrenceRule)]})]}),l.recurrenceRule&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Lead time"}),b?c.jsxs("span",{className:"detail-value lead-time-edit",children:[c.jsx("input",{type:"number",min:"0",max:"90",className:"lead-time-input",value:x,onChange:C=>z(C.target.value),autoFocus:!0}),c.jsx("span",{className:"lead-time-unit",children:"days"}),c.jsx("button",{className:"lead-time-save",onClick:Nh,children:"Save"}),c.jsx("button",{className:"lead-time-cancel",onClick:()=>j(!1),children:"Cancel"})]}):c.jsxs("span",{className:"detail-value detail-value-editable",onClick:()=>{z(String(l.leadTimeDays)),j(!0)},children:[l.leadTimeDays," days"]})]})]}),(l.container==="WAITING"||i.length>0)&&c.jsxs("div",{className:"triggers-section",children:[c.jsxs("div",{className:"triggers-header",children:[c.jsx("h3",{children:"Triggers"}),c.jsx("button",{className:"add-trigger-btn",onClick:()=>T(!0),children:"+ Add"})]}),tc.length===0&&ac.length===0?c.jsx("p",{className:"no-triggers",children:"No triggers set. Add one to defer this action."}):c.jsxs(c.Fragment,{children:[tc.map(C=>c.jsx(Eo,{trigger:C,onUpdate:Pi},C.id)),ac.length>0&&tc.length>0&&c.jsx("div",{className:"triggers-divider"}),ac.map(C=>c.jsx(Eo,{trigger:C,onUpdate:Pi},C.id))]})]})]}),y&&l.events&&c.jsx(Gy,{events:l.events,aiReasoning:l.aiReasoning}),l.needsFollowUp&&c.jsxs("div",{className:"followup-nudge-section",children:[c.jsx("div",{className:"followup-nudge-title",children:"Still important?"}),c.jsx("div",{className:"followup-nudge-subtitle",children:"This action hasn't been touched in a while."}),c.jsxs("div",{className:"followup-nudge-buttons",children:[c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:async()=>{await Rm(l.id),Re(),a()},children:"Still relevant"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:()=>{Ue("reschedule"),be("")},children:"Reschedule"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",style:{color:"var(--text-secondary)"},onClick:async()=>{if(!confirm("Archive this action?"))return;const{deleteAction:C}=await Hy(async()=>{const{deleteAction:De}=await Promise.resolve().then(()=>Dy);return{deleteAction:De}},void 0);await C(l.id),a(),t()},children:"Archive"})]})]}),Xe&&c.jsxs("div",{className:"date-picker-inline",children:[c.jsx("span",{className:"date-picker-label",children:Xe==="defer"?"Defer until:":"Reschedule to:"}),c.jsx("input",{type:"date",className:"form-input",value:et,onChange:C=>be(C.target.value),style:{padding:"8px 10px",fontSize:"13px",flex:1,minWidth:0}}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!et,onClick:async()=>{if(Xe==="defer")await Th();else if(Xe==="reschedule"&&l)try{await ti(l.id,{dueDate:et,version:l.version}),Ue(null),be(""),Re(),a()}catch{alert("Failed to reschedule")}},children:"Confirm"}),c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{Ue(null),be("")},children:"Cancel"})]}),c.jsxs("div",{className:"action-view-buttons",children:[l.container==="CANDIDATES"&&c.jsx("button",{className:"btn btn-primary",onClick:jh,children:"Move to Now"}),l.container!=="WAITING"&&c.jsx("button",{className:"btn btn-secondary",onClick:()=>T(!0),children:"Add Trigger"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>h(!0),children:"Edit"}),c.jsxs("button",{className:"btn btn-success",onClick:Sh,children:["Complete",l.recurrenceRule?" & Schedule Next":""]})]}),g&&c.jsx("div",{className:"next-created-banner",children:g}),c.jsx("button",{className:"feedback-btn",onClick:()=>O(!E),children:"AI parsed incorrectly?"}),E&&c.jsxs("div",{className:"feedback-panel",children:[c.jsx("p",{className:"feedback-title",children:"What was wrong?"}),c.jsxs("div",{className:"feedback-options",children:[D==="urgency"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct urgency:"}),c.jsxs("select",{className:"form-select feedback-picker-select",value:ue,onChange:C=>tt(C.target.value),children:[c.jsx("option",{value:"",children:"Select urgency..."}),c.jsx("option",{value:"CRITICAL",children:"Critical"}),c.jsx("option",{value:"HIGH",children:"High"}),c.jsx("option",{value:"MEDIUM",children:"Medium"}),c.jsx("option",{value:"LOW",children:"Low"})]}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{X(null),tt("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!ue,onClick:()=>{ec("urgency_incorrect",ue),X(null),tt("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{X("urgency"),tt("")},children:"Wrong urgency level"}),D==="container"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct container:"}),c.jsxs("select",{className:"form-select feedback-picker-select",value:ue,onChange:C=>tt(C.target.value),children:[c.jsx("option",{value:"",children:"Select container..."}),c.jsx("option",{value:"ACTIONABLE_NOW",children:"Now"}),c.jsx("option",{value:"CANDIDATES",children:"Review"}),c.jsx("option",{value:"AMBIGUITY",children:"Clarify"}),c.jsx("option",{value:"WAITING",children:"Waiting"})]}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{X(null),tt("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!ue,onClick:()=>{ec("container_incorrect",ue),X(null),tt("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{X("container"),tt("")},children:"Wrong container"}),c.jsx("button",{className:"feedback-option",onClick:()=>{const C=prompt("What should it say?");ec("parsed_wrong",C||void 0)},children:"Parsed text is wrong"})]})]}),k&&c.jsxs("div",{className:"reclassify-panel",children:[c.jsx("p",{className:"feedback-title",children:"Move to container:"}),c.jsx("div",{className:"reclassify-options",children:["ACTIONABLE_NOW","CANDIDATES","AMBIGUITY","WAITING"].map(C=>c.jsx("button",{className:`reclassify-option${l.container===C?" reclassify-option--current":""}`,disabled:l.container===C,onClick:()=>zh(C),children:Ut[C]},C))}),c.jsx("button",{className:"btn btn-secondary btn-block",style:{marginTop:8},onClick:()=>J(!1),children:"Cancel"})]})]}),p&&c.jsx(Yy,{actionId:e,onClose:()=>T(!1),onCreated:Pi}),c.jsx("style",{children:`
          .action-view {
            max-height: 85vh;
          }
          .action-view-actions {
            display: flex;
            gap: 8px;
            align-items: center;
          }
          .menu-wrapper {
            position: relative;
          }
          .action-menu {
            position: absolute;
            top: 36px;
            right: 0;
            background: var(--bg-secondary);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 8px;
            z-index: 10;
            min-width: 140px;
            overflow: hidden;
          }
          .action-menu-item {
            display: block;
            width: 100%;
            padding: 12px 16px;
            background: none;
            border: none;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            color: var(--text-primary);
            font-size: 14px;
            text-align: left;
            cursor: pointer;
          }
          .action-menu-item:last-child {
            border-bottom: none;
          }
          .action-menu-item:hover {
            background: rgba(255,255,255,0.05);
          }
          .action-menu-item--danger {
            color: var(--urgency-critical);
          }
          .action-menu-item--danger:hover {
            background: rgba(239, 68, 68, 0.1);
          }
          .action-info-btn {
            width: 28px;
            height: 28px;
            border-radius: 14px;
            border: 1px solid var(--text-secondary);
            background: transparent;
            color: var(--text-secondary);
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
          }
          .action-detail-content {
            margin-bottom: 16px;
          }
          .action-detail-description {
            font-size: 17px;
            line-height: 1.5;
            margin-bottom: 12px;
          }
          .action-detail-suggested {
            font-size: 14px;
            color: var(--text-secondary);
            padding: 12px;
            background: var(--bg-card);
            border-radius: 8px;
            margin-bottom: 16px;
          }
          .action-detail-meta {
            background: var(--bg-card);
            border-radius: 8px;
            padding: 8px 12px;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .detail-label {
            color: var(--text-secondary);
            font-size: 14px;
          }
          .detail-value {
            font-weight: 500;
            font-size: 14px;
          }
          .urgency-critical { color: var(--urgency-critical); }
          .urgency-high { color: var(--urgency-high); }
          .urgency-medium { color: var(--urgency-medium); }
          .urgency-low { color: var(--urgency-low); }
          .triggers-section {
            margin-top: 16px;
          }
          .triggers-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
          }
          .triggers-header h3 {
            font-size: 14px;
            font-weight: 600;
            color: var(--text-secondary);
          }
          .add-trigger-btn {
            background: none;
            border: none;
            color: var(--accent);
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
          }
          .no-triggers {
            font-size: 13px;
            color: var(--text-secondary);
            padding: 12px;
            background: var(--bg-card);
            border-radius: 8px;
            text-align: center;
          }
          .triggers-divider {
            height: 1px;
            background: rgba(255,255,255,0.1);
            margin: 8px 0;
          }
          .detail-value-editable {
            cursor: pointer;
            border-bottom: 1px dashed var(--text-secondary);
          }
          .detail-value-editable:hover {
            color: var(--accent);
            border-bottom-color: var(--accent);
          }
          .lead-time-edit {
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .lead-time-input {
            width: 50px;
            padding: 4px 6px;
            font-size: 13px;
            border: 1px solid var(--separator);
            border-radius: 4px;
            background: var(--bg-elevated);
            color: var(--text-primary);
            text-align: center;
          }
          .lead-time-unit {
            font-size: 13px;
            color: var(--text-secondary);
          }
          .lead-time-save, .lead-time-cancel {
            padding: 3px 8px;
            font-size: 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .lead-time-save {
            background: var(--accent);
            color: white;
          }
          .lead-time-cancel {
            background: transparent;
            color: var(--text-secondary);
          }
          .next-created-banner {
            background: rgba(52, 199, 89, 0.15);
            border: 1px solid rgba(52, 199, 89, 0.3);
            border-radius: 8px;
            padding: 10px 12px;
            margin-top: 12px;
            font-size: 13px;
            color: var(--success);
            text-align: center;
            font-weight: 500;
          }
          .followup-nudge-section {
            background: rgba(251, 191, 36, 0.1);
            border: 1px solid rgba(251, 191, 36, 0.3);
            border-radius: 8px;
            padding: 12px;
            margin-top: 16px;
          }
          .followup-nudge-title {
            font-size: 15px;
            font-weight: 600;
            color: var(--warning);
            margin-bottom: 4px;
          }
          .followup-nudge-subtitle {
            font-size: 13px;
            color: var(--text-secondary);
            margin-bottom: 10px;
          }
          .followup-nudge-buttons {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }
          .followup-nudge-btn {
            flex: 1;
            min-width: 80px;
            padding: 8px 12px;
            font-size: 13px;
          }
          .action-view-buttons {
            display: flex;
            gap: 8px;
            margin-top: 16px;
            flex-wrap: wrap;
          }
          .action-view-buttons .btn {
            flex: 1;
            min-width: 80px;
          }
          .action-edit-buttons {
            display: flex;
            gap: 8px;
          }
          .action-edit-buttons .btn {
            flex: 1;
          }
          .feedback-btn {
            display: block;
            width: 100%;
            text-align: center;
            margin-top: 16px;
            padding: 8px;
            background: none;
            border: none;
            color: var(--text-secondary);
            font-size: 13px;
            cursor: pointer;
          }
          .feedback-btn:hover {
            color: var(--text-primary);
          }
          .feedback-panel {
            background: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
            margin-top: 8px;
          }
          .feedback-title {
            font-size: 13px;
            font-weight: 500;
            margin-bottom: 8px;
          }
          .feedback-options {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .feedback-option {
            padding: 10px 12px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
            color: var(--text-primary);
            font-size: 13px;
            text-align: left;
            cursor: pointer;
            transition: background 0.2s;
          }
          .feedback-option:hover {
            background: rgba(255,255,255,0.1);
          }
          .reclassify-panel {
            background: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
            margin-top: 8px;
          }
          .reclassify-options {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 4px;
          }
          .reclassify-option {
            padding: 12px;
            border: 1px solid var(--separator);
            border-radius: 8px;
            background: var(--bg-elevated);
            color: var(--text-primary);
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            text-align: center;
            font-family: inherit;
          }
          .reclassify-option:hover:not(:disabled) {
            background: rgba(0, 122, 255, 0.1);
            border-color: var(--color-now);
          }
          .reclassify-option--current {
            opacity: 0.35;
            cursor: default;
          }
          .action-detail-source {
            background: var(--bg-card);
            border-radius: 8px;
            padding: 8px 12px;
            margin-bottom: 12px;
          }
          .source-row {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .source-row:last-child {
            border-bottom: none;
          }
          .source-gmail-link {
            color: var(--accent);
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
          }
          .source-gmail-link:hover {
            text-decoration: underline;
          }
          .date-picker-inline {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            background: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
            margin-top: 12px;
          }
          .date-picker-label {
            font-size: 13px;
            color: var(--text-secondary);
            white-space: nowrap;
          }
          .btn-sm {
            padding: 6px 12px;
            font-size: 12px;
          }
          .feedback-picker-inline {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 10px 12px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
          }
          .feedback-picker-label {
            font-size: 13px;
            color: var(--text-secondary);
          }
          .feedback-picker-select {
            font-size: 13px;
            padding: 8px 10px;
          }
          .feedback-picker-actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
          }
        `})]})})}const Lc={needsClarification:"Needs Clarification",needsTuning:"Needs Tuning"},qy=["ACTIONABLE_NOW","CANDIDATES","WAITING"];function Ly({activeContainer:e,flagFilter:t,onDataChange:a}){const[l,n]=A.useState([]),[i,u]=A.useState(!0),[s,r]=A.useState(!1),[d,h]=A.useState(null),[y,m]=A.useState(!1),[p,T]=A.useState(new Set),[E,O]=A.useState(!1),[f,o]=A.useState(!1);A.useEffect(()=>{g()},[e,t]);async function g(){u(!0);try{let S;t?S=await hh(t):S=await ks(e),n(S),a==null||a()}catch(S){console.error("Failed to load actions:",S)}finally{u(!1)}}function v(){return t?Lc[t]||t:e?Ut[e]:"All Actions"}function b(){r(!1),g(),ai()}function j(){y?(m(!1),T(new Set),O(!1)):m(!0)}function x(S){T(M=>{const _=new Set(M);return _.has(S)?_.delete(S):_.add(S),_})}function z(){p.size===l.length?T(new Set):T(new Set(l.map(S=>S.id)))}async function w(){if(p.size!==0){o(!0);try{await gh(Array.from(p)),_e()}catch(S){console.error("Bulk complete failed:",S)}finally{o(!1)}}}async function B(){if(p.size!==0){o(!0);try{await ph(Array.from(p)),_e()}catch(S){console.error("Bulk delete failed:",S)}finally{o(!1)}}}async function se(S){if(p.size!==0){o(!0),O(!1);try{await yh(Array.from(p),S),_e()}catch(M){console.error("Bulk move failed:",M)}finally{o(!1)}}}async function ie(S){try{await wm(S),g(),ai()}catch(M){console.error("Swipe delete failed:",M)}}function _e(){m(!1),T(new Set),O(!1),g(),ai()}if(i)return c.jsx("div",{className:"feed",children:c.jsx("div",{className:"feed-empty",children:"Loading..."})});const we=p.size,U=l.length>0&&p.size===l.length;return c.jsxs("div",{className:"feed",children:[c.jsxs("div",{className:"feed-header",children:[c.jsx("h1",{className:"feed-title",children:v()}),l.length>0&&c.jsx("button",{className:"feed-select-toggle",onClick:j,children:y?"Cancel":"Select"})]}),y&&l.length>0&&c.jsx("div",{className:"feed-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:U,onChange:z}),"Select All (",l.length,")"]})}),l.length===0?c.jsx("div",{className:"feed-empty",children:t?`No items ${Lc[t]?"flagged as "+Lc[t].toLowerCase():""}`:e?`No items in ${Ut[e]}`:"No actions yet. Tap + to add one."}):l.map(S=>c.jsx(_y,{action:S,onDelete:ie,selectable:y,selected:p.has(S.id),onSelect:x,onClick:()=>{y?x(S.id):h(S.id)}},S.id)),y&&we>0&&c.jsxs("div",{className:"bulk-toolbar",children:[c.jsxs("button",{className:"bulk-btn bulk-complete",onClick:w,disabled:f,children:["Complete (",we,")"]}),c.jsxs("button",{className:"bulk-btn bulk-delete",onClick:B,disabled:f,children:["Delete (",we,")"]}),c.jsxs("div",{className:"bulk-move-wrapper",children:[c.jsxs("button",{className:"bulk-btn bulk-move",onClick:()=>O(!E),disabled:f,children:["Move (",we,")"]}),E&&c.jsx("div",{className:"bulk-move-dropdown",children:qy.map(S=>c.jsx("button",{className:"bulk-move-option",onClick:()=>se(S),children:Ut[S]},S))})]})]}),c.jsx("button",{className:"quick-capture",onClick:()=>r(!0),children:"+"}),s&&c.jsx(wy,{onClose:()=>r(!1),onCreated:b}),d&&c.jsx(vh,{actionId:d,onClose:()=>h(null),onUpdate:()=>{g(),h(null)}})]})}function ky({onClose:e}){const[t,a]=A.useState(null),[l,n]=A.useState(null),[i,u]=A.useState(!0),[s,r]=A.useState(!1),[d,h]=A.useState(null),[y,m]=A.useState("default"),[p,T]=A.useState(!1),[E,O]=A.useState(!1),[f,o]=A.useState(null),[g,v]=A.useState(null);A.useEffect(()=>{b(),w()},[]);async function b(){u(!0);try{const[U,S]=await Promise.all([Xs(),km()]);a(U),n(S)}catch(U){console.error("Failed to load settings data:",U)}finally{u(!1)}}async function j(){try{const{url:U}=await Xm();window.location.href=U}catch(U){console.error("Failed to get auth URL:",U),alert("Failed to start Gmail connection")}}async function x(){if(confirm("Are you sure you want to disconnect Gmail?"))try{await Qm(),await b()}catch(U){console.error("Failed to disconnect Gmail:",U),alert("Failed to disconnect Gmail")}}async function z(){r(!0),h(null);try{const U=await Zm();h(U),await b()}catch(U){console.error("Scan failed:",U),h({success:!1,emailsScanned:0,actionsCreated:0,errors:["Scan failed"]})}finally{r(!1)}}async function w(){if(!("Notification"in window)||!("serviceWorker"in navigator)){m("unsupported");return}if(m(Notification.permission),Notification.permission==="granted"){const U=await navigator.serviceWorker.ready.catch(()=>null);if(U){const S=await U.pushManager.getSubscription();T(!!S)}}}async function B(){O(!0);try{const U=await Notification.requestPermission();if(m(U),U!=="granted")return;const{key:S}=await rh();if(!S){alert("Server not configured for push notifications");return}const k=(await(await navigator.serviceWorker.ready).pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ie(S)})).toJSON();await oh(k.endpoint,k.keys.p256dh,k.keys.auth),T(!0)}catch(U){console.error("Failed to enable notifications:",U),alert("Failed to enable notifications")}finally{O(!1)}}async function se(){O(!0);try{const S=await(await navigator.serviceWorker.ready).pushManager.getSubscription();S&&(await fh(S.endpoint),await S.unsubscribe()),T(!1)}catch(U){console.error("Failed to disable notifications:",U)}finally{O(!1)}}function ie(U){const S="=".repeat((4-U.length%4)%4),M=(U+S).replace(/-/g,"+").replace(/_/g,"/"),_=window.atob(M);return new Uint8Array([..._].map(J=>J.charCodeAt(0))).buffer}async function _e(U,S){o(U),v(null);try{const M=await S();v({key:U,...M})}catch{v({key:U,success:!1,message:"Request failed"})}finally{o(null)}}function we(U){if(!U)return"Never";const S=new Date(U),_=new Date().getTime()-S.getTime(),k=Math.floor(_/6e4),J=Math.floor(k/60),Xe=Math.floor(J/24);return k<1?"Just now":k<60?`${k}m ago`:J<24?`${J}h ago`:`${Xe}d ago`}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content settings-modal",onClick:U=>U.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Settings"}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),i?c.jsx("div",{className:"settings-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Gmail Integration"}),c.jsxs("div",{className:"settings-gmail",children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Status"}),c.jsx("span",{className:`gmail-status-value ${l!=null&&l.connected?"connected":"disconnected"}`,children:l!=null&&l.connected?"Connected":"Not Connected"})]}),l!=null&&l.connected?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Last Scan"}),c.jsx("span",{className:"gmail-status-value",children:we(l.lastScan)})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Emails Scanned"}),c.jsx("span",{className:"gmail-status-value",children:l.itemsScanned})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Actions Created"}),c.jsx("span",{className:"gmail-status-value",children:l.actionsCreated})]}),l.lastError&&c.jsxs("div",{className:"gmail-error",children:[c.jsx("span",{className:"gmail-error-label",children:"Last Error"}),c.jsx("p",{children:l.lastError})]}),d&&c.jsx("div",{className:`scan-result ${d.success?"success":"error"}`,children:d.success?`Scanned ${d.emailsScanned} emails, created ${d.actionsCreated} actions`:`Scan failed: ${d.errors.join(", ")}`}),c.jsxs("div",{className:"gmail-buttons",children:[c.jsx("button",{className:"btn btn-primary",onClick:z,disabled:s,children:s?"Scanning...":"Scan Now"}),c.jsx("button",{className:"btn btn-secondary",onClick:x,children:"Disconnect"})]})]}):c.jsxs("div",{className:"gmail-connect",children:[c.jsx("p",{className:"gmail-connect-text",children:"Connect your Gmail to automatically scan for actionable emails."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:j,children:"Connect Gmail"})]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Push Notifications"}),c.jsx("div",{className:"settings-notifications",children:y==="unsupported"?c.jsx("p",{className:"notif-note",children:"Push notifications require installing this app and iOS 16.4+."}):y==="denied"?c.jsx("p",{className:"notif-note notif-denied",children:"Notifications blocked. Enable them in device Settings > Safari."}):p?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-status notif-enabled",children:"Notifications enabled"}),c.jsx("button",{className:"btn btn-secondary btn-block",onClick:se,disabled:E,children:E?"Disabling...":"Disable Notifications"})]}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-note",children:"Get notified when triggers fire or actions need attention."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:B,disabled:E,children:E?"Enabling...":"Enable Notifications"})]})})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"System Health"}),c.jsxs("div",{className:"settings-health",children:[c.jsxs("div",{className:"health-row",children:[c.jsx("span",{className:"health-label",children:"Overall Status"}),c.jsx("span",{className:`health-value ${t==null?void 0:t.status}`,children:(t==null?void 0:t.status)==="ok"?"All Systems OK":"Issues Detected"})]}),(t==null?void 0:t.errors)&&t.errors.length>0&&c.jsxs("div",{className:"health-errors",children:[c.jsx("span",{className:"health-errors-label",children:"Errors"}),t.errors.map((U,S)=>c.jsx("p",{className:"health-error",children:U},S))]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Scan Schedule"}),c.jsxs("div",{className:"settings-schedule",children:[c.jsx("p",{children:"Automatic Gmail scans run every 4 hours."}),c.jsx("p",{className:"schedule-note",children:"Trigger checks run hourly. Web conditions checked every 4 hours per trigger. Follow-up reminders sent daily at 9 AM."})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Testing Tools"}),c.jsxs("div",{className:"settings-tools",children:[c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Check for stale actions"}),c.jsx("div",{className:"tool-desc",children:`Looks at all your active actions and flags ones you haven't touched in a while with a "Still important?" prompt. Normally happens automatically every morning at 9 AM.`})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>_e("followups",Hm),disabled:f!==null,children:f==="followups"?"Running…":"Run now"})]}),c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Fire due triggers & check web conditions"}),c.jsx("div",{className:"tool-desc",children:"Two things in one: (1) promotes any Waiting actions whose due date has arrived into your active list, and (2) searches the web to see if any real-world conditions you're watching — like a store sale or product launch — have come true. Normally runs every hour / every 4 hours."})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>_e("triggers",Bm),disabled:f!==null,children:f==="triggers"?"Running…":"Run now"})]}),g&&c.jsxs("div",{className:`tool-result ${g.success?"success":"error"}`,children:[g.success?"✓":"✗"," ",g.message]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"About"}),c.jsxs("p",{className:"settings-about",children:["Action Manager v1.0",c.jsx("br",{}),"Your personal commitment tracker"]})]})]}),c.jsx("style",{children:`
          .settings-modal {
            max-height: 85vh;
          }
          .settings-loading {
            text-align: center;
            padding: 32px;
            color: var(--text-secondary);
          }
          .settings-section {
            margin-bottom: 24px;
          }
          .settings-section-title {
            font-size: 12px;
            font-weight: 600;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 12px;
          }
          .settings-gmail,
          .settings-health {
            background-color: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
          }
          .gmail-status-row,
          .health-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .gmail-status-row:last-of-type,
          .health-row:last-of-type {
            border-bottom: none;
          }
          .gmail-status-label,
          .health-label {
            color: var(--text-secondary);
            font-size: 14px;
          }
          .gmail-status-value,
          .health-value {
            font-weight: 500;
            font-size: 14px;
          }
          .gmail-status-value.connected {
            color: var(--success);
          }
          .gmail-status-value.disconnected {
            color: var(--text-secondary);
          }
          .health-value.ok {
            color: var(--success);
          }
          .health-value.error {
            color: var(--urgency-critical);
          }
          .gmail-error {
            margin-top: 12px;
            padding: 12px;
            background: rgba(239, 68, 68, 0.1);
            border-radius: 6px;
          }
          .gmail-error-label {
            font-size: 11px;
            color: var(--urgency-critical);
            text-transform: uppercase;
          }
          .gmail-error p {
            font-size: 13px;
            color: var(--text-secondary);
            margin-top: 4px;
          }
          .scan-result {
            margin-top: 12px;
            padding: 12px;
            border-radius: 6px;
            font-size: 13px;
          }
          .scan-result.success {
            background: rgba(74, 222, 128, 0.1);
            color: var(--success);
          }
          .scan-result.error {
            background: rgba(239, 68, 68, 0.1);
            color: var(--urgency-critical);
          }
          .gmail-buttons {
            display: flex;
            gap: 8px;
            margin-top: 16px;
          }
          .gmail-buttons .btn {
            flex: 1;
          }
          .gmail-connect {
            margin-top: 8px;
          }
          .gmail-connect-text {
            font-size: 14px;
            color: var(--text-secondary);
            margin-bottom: 12px;
            line-height: 1.5;
          }
          .health-errors {
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid rgba(255,255,255,0.1);
          }
          .health-errors-label {
            font-size: 11px;
            color: var(--urgency-critical);
            text-transform: uppercase;
          }
          .health-error {
            font-size: 13px;
            color: var(--text-secondary);
            margin-top: 4px;
          }
          .settings-tools {
            background-color: var(--bg-card);
            border-radius: 8px;
            overflow: hidden;
          }
          .tool-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px 12px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .tool-item:last-of-type {
            border-bottom: none;
          }
          .tool-text {
            flex: 1;
          }
          .tool-label {
            font-size: 14px;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 4px;
          }
          .tool-desc {
            font-size: 12px;
            color: var(--text-secondary);
            line-height: 1.5;
          }
          .tool-btn {
            flex-shrink: 0;
            padding: 8px 14px;
            font-size: 13px;
            white-space: nowrap;
            align-self: center;
          }
          .tool-result {
            margin: 0 12px 12px;
            padding: 10px 12px;
            border-radius: 6px;
            font-size: 13px;
          }
          .tool-result.success {
            background: rgba(74, 222, 128, 0.1);
            color: var(--success);
          }
          .tool-result.error {
            background: rgba(239, 68, 68, 0.1);
            color: var(--urgency-critical);
          }
          .settings-notifications {
            background-color: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
          }
          .notif-note {
            font-size: 14px;
            color: var(--text-secondary);
            margin-bottom: 12px;
            line-height: 1.5;
          }
          .notif-denied {
            color: var(--urgency-critical);
          }
          .notif-status {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 12px;
          }
          .notif-enabled {
            color: var(--success);
          }
          .settings-schedule {
            background-color: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
            font-size: 14px;
          }
          .settings-schedule ul {
            margin: 8px 0;
            padding-left: 20px;
          }
          .settings-schedule li {
            margin: 4px 0;
          }
          .schedule-note {
            font-size: 12px;
            color: var(--text-secondary);
            margin-top: 8px;
          }
          .settings-about {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.6;
          }
        `})]})})}function Xy({onClose:e,onSelectAction:t}){const[a,l]=A.useState(""),[n,i]=A.useState([]),[u,s]=A.useState(0),[r,d]=A.useState(!1),[h,y]=A.useState(!1),[m,p]=A.useState(""),[T,E]=A.useState(""),[O,f]=A.useState(!1),[o,g]=A.useState(!1),v=A.useCallback(async(x=!0)=>{d(!0);try{const z=await Wm({q:a||void 0,container:m||void 0,urgency:T||void 0,includeArchived:O,archiveOnly:o,limit:20,offset:x?0:n.length});i(x?z.actions:w=>[...w,...z.actions]),s(z.total),y(z.hasMore)}catch(z){console.error("Search failed:",z)}finally{d(!1)}},[a,m,T,O,o,n.length]);A.useEffect(()=>{const x=setTimeout(()=>{v(!0)},300);return()=>clearTimeout(x)},[a,m,T,O,o]);function b(x){return x?new Date(x).toLocaleDateString("en-US",{month:"short",day:"numeric"}):""}function j(){v(!1)}return c.jsxs("div",{className:"search-overlay",children:[c.jsxs("div",{className:"search-container",children:[c.jsxs("div",{className:"search-header",children:[c.jsxs("div",{className:"search-input-wrapper",children:[c.jsx("span",{className:"search-icon",children:"🔍"}),c.jsx("input",{type:"text",className:"search-input",placeholder:"Search actions...",value:a,onChange:x=>l(x.target.value),autoFocus:!0}),a&&c.jsx("button",{className:"search-clear",onClick:()=>l(""),children:"✕"})]}),c.jsx("button",{className:"search-close",onClick:e,children:"Cancel"})]}),c.jsxs("div",{className:"search-filters",children:[c.jsxs("select",{className:"search-filter",value:m,onChange:x=>p(x.target.value),children:[c.jsx("option",{value:"",children:"All Containers"}),Object.entries(Ut).map(([x,z])=>c.jsx("option",{value:x,children:z},x))]}),c.jsxs("select",{className:"search-filter",value:T,onChange:x=>E(x.target.value),children:[c.jsx("option",{value:"",children:"All Urgency"}),Object.entries(fn).map(([x,z])=>c.jsx("option",{value:x,children:z},x))]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:O,onChange:x=>{f(x.target.checked),x.target.checked&&g(!1)}}),"Include archived"]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:o,onChange:x=>{g(x.target.checked),x.target.checked&&f(!1)}}),"Archive only"]})]}),c.jsx("div",{className:"search-results",children:r&&n.length===0?c.jsx("div",{className:"search-loading",children:"Searching..."}):n.length===0?c.jsx("div",{className:"search-empty",children:a?"No actions found":"Start typing to search"}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"search-count",children:[u," result",u!==1?"s":""]}),n.map(x=>c.jsxs("div",{className:`search-result ${x.isArchived?"archived":""}`,onClick:()=>t(x.id),children:[c.jsx("div",{className:`result-urgency ${x.urgency.toLowerCase()}`}),c.jsxs("div",{className:"result-content",children:[c.jsx("div",{className:"result-description",children:x.description}),c.jsxs("div",{className:"result-meta",children:[c.jsx("span",{className:"result-container",children:Ut[x.container]}),x.dueDate&&c.jsxs("span",{className:"result-date",children:["Due ",b(x.dueDate)]}),x.isArchived&&c.jsx("span",{className:"result-archived",children:"Archived"})]})]})]},x.id)),h&&c.jsx("button",{className:"search-load-more",onClick:j,disabled:r,children:r?"Loading...":"Load more"})]})})]}),c.jsx("style",{children:`
        .search-overlay {
          position: fixed;
          inset: 0;
          background: var(--bg-primary);
          z-index: 100;
          display: flex;
          flex-direction: column;
        }
        .search-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding-top: env(safe-area-inset-top);
        }
        .search-header {
          display: flex;
          gap: 12px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .search-input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-card);
          border-radius: 8px;
          padding: 0 12px;
        }
        .search-icon {
          font-size: 14px;
          opacity: 0.5;
        }
        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 16px;
          padding: 10px 0;
          outline: none;
        }
        .search-input::placeholder {
          color: var(--text-secondary);
        }
        .search-clear {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 14px;
          cursor: pointer;
          padding: 4px;
        }
        .search-close {
          background: none;
          border: none;
          color: var(--accent);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
        }
        .search-filters {
          display: flex;
          gap: 8px;
          padding: 12px 16px;
          overflow-x: auto;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .search-filter {
          background: var(--bg-card);
          border: none;
          border-radius: 6px;
          color: var(--text-primary);
          font-size: 13px;
          padding: 6px 10px;
          flex-shrink: 0;
        }
        .search-checkbox {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-secondary);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .search-checkbox input {
          margin: 0;
        }
        .search-results {
          flex: 1;
          overflow-y: auto;
          padding: 8px 16px;
        }
        .search-loading,
        .search-empty {
          text-align: center;
          padding: 48px 16px;
          color: var(--text-secondary);
        }
        .search-count {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        .search-result {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: var(--bg-card);
          border-radius: 8px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: transform 0.1s;
        }
        .search-result:active {
          transform: scale(0.98);
        }
        .search-result.archived {
          opacity: 0.6;
        }
        .result-urgency {
          width: 4px;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .result-urgency.critical { background: var(--urgency-critical); }
        .result-urgency.high { background: var(--urgency-high); }
        .result-urgency.medium { background: var(--urgency-medium); }
        .result-urgency.low { background: var(--urgency-low); }
        .result-content {
          flex: 1;
          min-width: 0;
        }
        .result-description {
          font-size: 15px;
          margin-bottom: 4px;
          line-height: 1.4;
        }
        .result-meta {
          display: flex;
          gap: 12px;
          font-size: 12px;
          color: var(--text-secondary);
        }
        .result-archived {
          color: var(--warning);
        }
        .search-load-more {
          width: 100%;
          padding: 12px;
          background: var(--bg-card);
          border: none;
          border-radius: 8px;
          color: var(--accent);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          margin-top: 8px;
        }
        .search-load-more:disabled {
          opacity: 0.5;
        }
      `})]})}function Qy({onClose:e,onSelectAction:t}){const[a,l]=A.useState([]),[n,i]=A.useState([]),[u,s]=A.useState(!0),[r,d]=A.useState(!1),[h,y]=A.useState(""),[m,p]=A.useState(""),[T,E]=A.useState(!1),[O,f]=A.useState(null),[o,g]=A.useState(""),[v,b]=A.useState([]),[j,x]=A.useState(new Set),[z,w]=A.useState(new Set),[B,se]=A.useState(!1);A.useEffect(()=>{ie()},[]);async function ie(){s(!0);try{const[D,X]=await Promise.all([Fm(),th()]);l(D),i(X.suggestions)}catch(D){console.error("Failed to load groups:",D)}finally{s(!1)}}async function _e(){if(h.trim())try{await Yu({name:h.trim(),description:m.trim()||void 0}),y(""),p(""),d(!1),ie()}catch(D){console.error("Failed to create group:",D)}}async function we(D){try{await Yu({name:D.suggestedName,description:D.reason,actionIds:D.actionIds}),ie()}catch(X){console.error("Failed to create group from suggestion:",X)}}async function U(D){if(confirm("Delete this group? Actions will be ungrouped."))try{await Pm(D),ie()}catch(X){console.error("Failed to delete group:",X)}}async function S(D){f(D),g(""),se(!0);try{const ue=(await ks()).filter(Lt=>!Lt.archivedAt&&!Lt.completedAt);b(ue);const tt=a.find(Lt=>Lt.id===D),Re=new Set((tt==null?void 0:tt.actions.map(Lt=>Lt.id))||[]);x(new Set(Re)),w(new Set(Re))}catch(X){console.error("Failed to load actions:",X)}finally{se(!1)}}async function M(){if(O!==null)try{const D=[...j].filter(ue=>!z.has(ue)),X=[...z].filter(ue=>!j.has(ue));D.length>0&&await eh(O,D);for(const ue of X)await qu(O,ue);f(null),ie()}catch(D){console.error("Failed to update group actions:",D)}}function _(D){x(X=>{const ue=new Set(X);return ue.has(D)?ue.delete(D):ue.add(D),ue})}const k=A.useMemo(()=>{if(!o.trim())return v;const D=o.toLowerCase();return v.filter(X=>X.description.toLowerCase().includes(D))},[v,o]);async function J(D,X){try{await qu(D,X),ie()}catch(ue){console.error("Failed to remove action from group:",ue)}}async function Xe(D){try{await Im(D),ie()}catch(X){console.error("Failed to archive group:",X)}}function Ue(D){return D.actions.filter(X=>X.completedAt!==null).length}function et(D){return D.actions.length>0&&Ue(D)===D.actions.length}function be(D){return D.toLowerCase()}return c.jsxs("div",{className:"groups-overlay",children:[c.jsxs("div",{className:"groups-container",children:[c.jsxs("div",{className:"groups-header",children:[c.jsx("h2",{className:"groups-title",children:"Action Groups"}),c.jsxs("div",{className:"groups-header-actions",children:[c.jsx("button",{className:"btn btn-primary btn-small",onClick:()=>d(!0),children:"+ New Group"}),c.jsx("button",{className:"groups-close",onClick:e,children:"Done"})]})]}),c.jsx("div",{className:"groups-content",children:u?c.jsx("div",{className:"groups-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:"groups-section",children:[c.jsx("h3",{className:"section-title",children:"Your Groups"}),a.length===0?c.jsx("div",{className:"groups-empty",children:"No groups yet. Create one or accept a suggestion below."}):a.map(D=>c.jsxs("div",{className:"group-card",children:[et(D)&&c.jsxs("div",{className:"group-archive-banner",children:[c.jsx("span",{children:"All actions complete! Archive this group?"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>Xe(D.id),children:"Archive"})]}),c.jsxs("div",{className:"group-header",children:[c.jsxs("div",{className:"group-info",children:[c.jsx("div",{className:"group-name",children:D.name}),D.description&&c.jsx("div",{className:"group-description",children:D.description})]}),c.jsxs("div",{className:"group-stats",children:[c.jsx("span",{className:`urgency-badge ${be(D.highestUrgency)}`,children:fn[D.highestUrgency]}),c.jsxs("span",{className:"group-count",children:[D.activeCount,"/",D.actionCount," active"]})]})]}),c.jsxs("div",{className:"group-progress",children:[c.jsxs("div",{className:"progress-text",children:[Ue(D)," of ",D.actions.length," complete"]}),c.jsx("div",{className:"progress-bar-track",children:c.jsx("div",{className:"progress-bar-fill",style:{width:D.actions.length>0?`${Ue(D)/D.actions.length*100}%`:"0%"}})})]}),c.jsxs("div",{className:"group-actions-list",children:[D.actions.slice(0,3).map(X=>c.jsxs("div",{className:`group-action-item ${X.completedAt?"completed":""}`,children:[c.jsxs("div",{className:"group-action-clickable",onClick:()=>t(X.id),children:[c.jsx("div",{className:`action-urgency-dot ${be(X.urgency)}`}),c.jsx("span",{className:"action-text",children:X.description})]}),c.jsx("button",{className:"action-remove-btn",onClick:ue=>{ue.stopPropagation(),J(D.id,X.id)},title:"Remove from group",children:"×"})]},X.id)),D.actions.length>3&&c.jsxs("div",{className:"group-more",children:["+",D.actions.length-3," more"]})]}),c.jsxs("div",{className:"group-footer",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>S(D.id),children:"Add Actions"}),c.jsx("button",{className:"btn-link",onClick:()=>U(D.id),children:"Delete Group"})]})]},D.id))]}),n.length>0&&c.jsxs("section",{className:"groups-section suggestions-section",children:[c.jsxs("button",{className:"suggestions-toggle",onClick:()=>E(!T),children:[c.jsxs("h3",{className:"section-title",style:{margin:0},children:["Suggested Groups (",n.length,")"]}),c.jsx("span",{className:"toggle-arrow",children:T?"▲":"▼"})]}),T&&c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"section-subtitle",children:"Based on similar keywords in your ungrouped actions"}),n.map((D,X)=>c.jsxs("div",{className:"suggestion-card",children:[c.jsxs("div",{className:"suggestion-content",children:[c.jsx("div",{className:"suggestion-name",children:D.suggestedName}),c.jsx("div",{className:"suggestion-reason",children:D.reason}),c.jsxs("div",{className:"suggestion-count",children:[D.actionIds.length," actions"]})]}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>we(D),children:"Create"})]},X))]})]})]})})]}),r&&c.jsx("div",{className:"modal-overlay",onClick:()=>d(!1),children:c.jsxs("div",{className:"modal-content",onClick:D=>D.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Create Group"}),c.jsx("button",{className:"modal-close",onClick:()=>d(!1),children:"×"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Group Name"}),c.jsx("input",{type:"text",className:"form-input",value:h,onChange:D=>y(D.target.value),placeholder:"e.g., Project Alpha",autoFocus:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("textarea",{className:"form-textarea",value:m,onChange:D=>p(D.target.value),placeholder:"What is this group about?",rows:2})]}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:_e,disabled:!h.trim(),children:"Create Group"})]})}),O!==null&&c.jsx("div",{className:"modal-overlay",onClick:()=>f(null),children:c.jsxs("div",{className:"modal-content add-actions-modal",onClick:D=>D.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Add Actions to Group"}),c.jsx("button",{className:"modal-close",onClick:()=>f(null),children:"×"})]}),c.jsx("div",{className:"form-group",children:c.jsx("input",{type:"text",className:"form-input",value:o,onChange:D=>g(D.target.value),placeholder:"Search actions...",autoFocus:!0})}),c.jsx("div",{className:"add-actions-list",children:B?c.jsx("div",{className:"groups-loading",children:"Loading actions..."}):k.length===0?c.jsx("div",{className:"groups-empty",children:"No matching actions found."}):k.map(D=>c.jsxs("label",{className:"add-action-row",children:[c.jsx("input",{type:"checkbox",checked:j.has(D.id),onChange:()=>_(D.id)}),c.jsx("div",{className:`action-urgency-dot ${be(D.urgency)}`}),c.jsx("span",{className:"action-text",children:D.description})]},D.id))}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:M,children:"Save"})]})}),c.jsx("style",{children:`
        .groups-overlay {
          position: fixed;
          inset: 0;
          background: var(--bg-primary);
          z-index: 100;
          display: flex;
          flex-direction: column;
        }
        .groups-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding-top: env(safe-area-inset-top);
        }
        .groups-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .groups-title {
          font-size: 18px;
          font-weight: 600;
        }
        .groups-header-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .groups-close {
          background: none;
          border: none;
          color: var(--accent);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
        }
        .groups-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }
        .groups-loading,
        .groups-empty {
          text-align: center;
          padding: 48px 16px;
          color: var(--text-secondary);
        }
        .groups-section {
          margin-bottom: 24px;
        }
        .section-title {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }
        .section-subtitle {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }
        .suggestion-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-card);
          border-radius: 8px;
          margin-bottom: 8px;
          border-left: 3px solid var(--accent);
        }
        .suggestion-content {
          flex: 1;
        }
        .suggestion-name {
          font-weight: 600;
          margin-bottom: 2px;
        }
        .suggestion-reason {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .suggestion-count {
          font-size: 12px;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .group-card {
          background: var(--bg-card);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
        }
        .group-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        .group-info {
          flex: 1;
        }
        .group-name {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .group-description {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .group-stats {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }
        .urgency-badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .urgency-badge.critical { background: rgba(239,68,68,0.2); color: var(--urgency-critical); }
        .urgency-badge.high { background: rgba(249,115,22,0.2); color: var(--urgency-high); }
        .urgency-badge.medium { background: rgba(234,179,8,0.2); color: var(--urgency-medium); }
        .urgency-badge.low { background: rgba(107,114,128,0.2); color: var(--urgency-low); }
        .group-count {
          font-size: 12px;
          color: var(--text-secondary);
        }
        .group-actions-list {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 12px;
        }
        .group-action-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 0;
        }
        .group-action-clickable {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          min-width: 0;
          cursor: pointer;
        }
        .group-action-item.completed .group-action-clickable {
          opacity: 0.5;
          text-decoration: line-through;
        }
        .action-remove-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 18px;
          cursor: pointer;
          padding: 0 4px;
          flex-shrink: 0;
          line-height: 1;
        }
        .action-remove-btn:hover {
          color: var(--urgency-critical);
        }
        .action-urgency-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .action-urgency-dot.critical { background: var(--urgency-critical); }
        .action-urgency-dot.high { background: var(--urgency-high); }
        .action-urgency-dot.medium { background: var(--urgency-medium); }
        .action-urgency-dot.low { background: var(--urgency-low); }
        .action-text {
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .group-more {
          font-size: 12px;
          color: var(--text-secondary);
          padding: 4px 0;
        }
        .group-footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 12px;
          margin-top: 8px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .btn-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 13px;
          cursor: pointer;
          padding: 0;
        }
        .btn-link:hover {
          color: var(--urgency-critical);
        }
        .btn-small {
          padding: 6px 12px;
          font-size: 13px;
        }
        .group-progress {
          margin-bottom: 12px;
        }
        .progress-text {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }
        .progress-bar-track {
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .group-archive-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(34,197,94,0.15);
          border: 1px solid rgba(34,197,94,0.3);
          border-radius: 8px;
          padding: 10px 12px;
          margin-bottom: 12px;
          font-size: 13px;
          color: #22c55e;
        }
        .suggestions-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          padding: 8px 0;
        }
        .toggle-arrow {
          font-size: 12px;
          color: var(--text-secondary);
        }
        .suggestions-section .section-subtitle {
          margin-top: 4px;
        }
        .add-actions-modal {
          max-height: 80vh;
          display: flex;
          flex-direction: column;
        }
        .add-actions-list {
          flex: 1;
          overflow-y: auto;
          max-height: 50vh;
          margin-bottom: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
        }
        .add-action-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          cursor: pointer;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .add-action-row:last-child {
          border-bottom: none;
        }
        .add-action-row:hover {
          background: rgba(255,255,255,0.05);
        }
        .add-action-row input[type="checkbox"] {
          flex-shrink: 0;
        }
        .add-action-row .action-text {
          flex: 1;
          min-width: 0;
        }
      `})]})}function Zy({onClose:e}){const[t,a]=A.useState([]),[l,n]=A.useState(null),[i,u]=A.useState(!0),[s,r]=A.useState("proposed"),[d,h]=A.useState(null),[y,m]=A.useState(null);A.useEffect(()=>{p()},[]);async function p(){u(!0);try{const[b,j]=await Promise.all([lh(),sh()]);a(b),n(j)}catch(b){console.error("Failed to load tuning data:",b)}finally{u(!1)}}async function T(b){try{await nh(b),p()}catch(j){console.error("Failed to activate rule:",j)}}async function E(b,j=!1){const x=j?void 0:prompt("Why are you rejecting this rule? (optional)")||void 0;try{await ih(b,x,j),h(null),p()}catch(z){console.error("Failed to reject rule:",z)}}async function O(b){try{await ch(b),p()}catch(j){console.error("Failed to update threshold:",j)}}async function f(b){if(confirm("Delete this tuning rule?"))try{await uh(b),p()}catch(j){console.error("Failed to delete rule:",j)}}const o=t.filter(b=>{switch(s){case"proposed":return b.status==="PROPOSED";case"shadow":return b.status==="SHADOW";case"active":return b.status==="ACTIVE";case"rejected":return b.status==="REJECTED"}});function g(b){switch(b){case"SHADOW":return"Testing";case"PROPOSED":return"Ready";case"ACTIVE":return"Active";case"REJECTED":return"Rejected";default:return b}}function v(b){return b.shadowCount===0?0:Math.round(b.shadowSuccesses/b.shadowCount*100)}return c.jsxs("div",{className:"tuning-overlay",children:[c.jsxs("div",{className:"tuning-container",children:[c.jsxs("div",{className:"tuning-header",children:[c.jsx("h2",{className:"tuning-title",children:"AI Tuning"}),c.jsx("button",{className:"tuning-close",onClick:e,children:"Done"})]}),l&&c.jsxs("div",{className:"tuning-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.active}),c.jsx("span",{className:"stat-label",children:"Active Rules"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.proposed}),c.jsx("span",{className:"stat-label",children:"Pending Review"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.shadow}),c.jsx("span",{className:"stat-label",children:"Testing"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsxs("span",{className:"stat-value",children:[l.avgSuccessRate,"%"]}),c.jsx("span",{className:"stat-label",children:"Avg Success"})]})]}),c.jsxs("div",{className:"tuning-tabs",children:[c.jsxs("button",{className:`tuning-tab ${s==="proposed"?"active":""}`,onClick:()=>r("proposed"),children:["Pending ",l&&l.counts.proposed>0&&`(${l.counts.proposed})`]}),c.jsx("button",{className:`tuning-tab ${s==="shadow"?"active":""}`,onClick:()=>r("shadow"),children:"Testing"}),c.jsx("button",{className:`tuning-tab ${s==="active"?"active":""}`,onClick:()=>r("active"),children:"Active"}),c.jsx("button",{className:`tuning-tab ${s==="rejected"?"active":""}`,onClick:()=>r("rejected"),children:"Rejected"})]}),c.jsx("div",{className:"tuning-content",children:i?c.jsx("div",{className:"tuning-loading",children:"Loading..."}):o.length===0?c.jsx("div",{className:"tuning-empty",children:t.length===0?c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"No tuning rules yet."}),c.jsx("p",{className:"tuning-hint",children:"Tuning rules help the AI learn from your corrections. When you correct an action's urgency or container, the system creates rules to improve future parsing."})]}):c.jsxs(c.Fragment,{children:[s==="proposed"&&"No rules ready for review.",s==="shadow"&&"No rules currently testing.",s==="active"&&"No active tuning rules.",s==="rejected"&&"No rejected rules.",c.jsx("p",{className:"tuning-hint",children:"Tuning rules are created when you provide feedback on AI-parsed actions."})]})}):o.map(b=>{const j=y===b.id;return c.jsxs("div",{className:`rule-card ${j?"rule-card-expanded":""}`,children:[c.jsxs("div",{className:"rule-collapsed",onClick:()=>m(j?null:b.id),children:[c.jsxs("div",{className:"rule-collapsed-top",children:[c.jsx("span",{className:`rule-category category-${b.category}`,children:b.category}),c.jsx("span",{className:`rule-status status-${b.status.toLowerCase()}`,children:g(b.status)}),c.jsx("span",{className:"rule-expand-icon",children:j?"▲":"▼"})]}),c.jsx("div",{className:"rule-description-collapsed",children:j?b.description:b.description.length>60?b.description.slice(0,60)+"...":b.description}),!j&&(b.status==="SHADOW"||b.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(b.shadowCount/b.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[b.shadowCount,"/",b.shadowThreshold," tests (",v(b),"% success)"]})]})]}),j&&c.jsxs("div",{className:"rule-expanded-body",children:[c.jsxs("div",{className:"rule-details",children:[c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"When:"}),c.jsx("span",{className:"detail-text",children:b.condition})]}),c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"Then:"}),c.jsx("span",{className:"detail-text",children:b.transformation})]})]}),(b.status==="SHADOW"||b.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(b.shadowCount/b.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[b.shadowCount,"/",b.shadowThreshold," tests (",v(b),"% success)"]})]}),b.userFeedback&&c.jsxs("div",{className:"rule-feedback",children:[c.jsx("span",{className:"detail-label",children:"Feedback:"}),b.userFeedback]}),c.jsxs("div",{className:"rule-actions",children:[b.status==="PROPOSED"&&d!==b.id&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-success btn-small",onClick:x=>{x.stopPropagation(),T(b.id)},children:"Activate"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:x=>{x.stopPropagation(),h(b.id)},children:"Reject"})]}),b.status==="PROPOSED"&&d===b.id&&c.jsxs("div",{className:"reject-options",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:x=>{x.stopPropagation(),E(b.id,!1)},children:"Just reject"}),c.jsxs("button",{className:"btn btn-secondary btn-small reject-stop",onClick:x=>{x.stopPropagation(),E(b.id,!0)},children:["Stop ",b.category," suggestions"]}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:x=>{x.stopPropagation(),O(b.id),h(null)},children:"Ask less often"}),c.jsx("button",{className:"btn-link",onClick:x=>{x.stopPropagation(),h(null)},children:"Cancel"})]}),b.status==="SHADOW"&&c.jsx("button",{className:"btn btn-primary btn-small",onClick:x=>{x.stopPropagation(),T(b.id)},children:"Activate Early"}),c.jsx("button",{className:"btn-link danger",onClick:x=>{x.stopPropagation(),f(b.id)},children:"Delete"})]})]})]},b.id)})})]}),c.jsx("style",{children:`
        .tuning-overlay {
          position: fixed;
          inset: 0;
          background: var(--bg-primary);
          z-index: 100;
          display: flex;
          flex-direction: column;
        }
        .tuning-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding-top: env(safe-area-inset-top);
        }
        .tuning-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .tuning-title {
          font-size: 18px;
          font-weight: 600;
        }
        .tuning-close {
          background: none;
          border: none;
          color: var(--accent);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
        }
        .tuning-stats {
          display: flex;
          gap: 8px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .stat-item {
          flex: 1;
          text-align: center;
          padding: 8px;
          background: var(--bg-card);
          border-radius: 8px;
        }
        .stat-value {
          display: block;
          font-size: 20px;
          font-weight: 600;
          color: var(--accent);
        }
        .stat-label {
          font-size: 11px;
          color: var(--text-secondary);
        }
        .tuning-tabs {
          display: flex;
          padding: 0 16px;
          gap: 4px;
          background: var(--bg-secondary);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .tuning-tab {
          flex: 1;
          padding: 12px 8px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tuning-tab.active {
          color: var(--accent);
          border-bottom-color: var(--accent);
        }
        .tuning-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }
        .tuning-loading,
        .tuning-empty {
          text-align: center;
          padding: 48px 16px;
          color: var(--text-secondary);
        }
        .tuning-hint {
          margin-top: 12px;
          font-size: 13px;
        }
        .rule-card {
          background: var(--bg-card);
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .rule-card-expanded {
          border: 1px solid rgba(255,255,255,0.1);
        }
        .rule-collapsed {
          padding: 16px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .rule-collapsed:active {
          background: rgba(255,255,255,0.03);
        }
        .rule-collapsed-top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .rule-expand-icon {
          margin-left: auto;
          font-size: 10px;
          color: var(--text-secondary);
        }
        .rule-description-collapsed {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.4;
        }
        .rule-expanded-body {
          padding: 0 16px 16px;
        }
        .rule-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .rule-category {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          background: rgba(255,255,255,0.1);
        }
        .category-urgency { background: rgba(249,115,22,0.2); color: var(--urgency-high); }
        .category-container { background: rgba(139,92,246,0.2); color: #a78bfa; }
        .category-extraction { background: rgba(59,130,246,0.2); color: #60a5fa; }
        .rule-status {
          font-size: 11px;
          font-weight: 500;
        }
        .status-shadow { color: var(--text-secondary); }
        .status-proposed { color: var(--warning); }
        .status-active { color: var(--success); }
        .status-rejected { color: var(--urgency-critical); }
        .rule-description {
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 12px;
        }
        .rule-details {
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 12px;
        }
        .rule-detail {
          font-size: 13px;
          margin-bottom: 8px;
        }
        .rule-detail:last-child {
          margin-bottom: 0;
        }
        .detail-label {
          color: var(--text-secondary);
          margin-right: 8px;
        }
        .detail-text {
          color: var(--text-primary);
        }
        .rule-progress {
          margin-bottom: 12px;
        }
        .progress-bar {
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 4px;
        }
        .progress-fill {
          height: 100%;
          background: var(--accent);
          transition: width 0.3s;
        }
        .progress-text {
          font-size: 11px;
          color: var(--text-secondary);
        }
        .rule-feedback {
          font-size: 13px;
          padding: 8px;
          background: rgba(251,191,36,0.1);
          border-radius: 6px;
          margin-bottom: 12px;
        }
        .rule-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          align-items: center;
        }
        .btn-small {
          padding: 6px 12px;
          font-size: 13px;
        }
        .btn-link.danger {
          color: var(--urgency-critical);
        }
        .btn-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 13px;
          cursor: pointer;
          padding: 4px;
        }
        .reject-options {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          align-items: center;
        }
        .reject-stop {
          color: var(--urgency-critical);
          border-color: rgba(239,68,68,0.3);
        }
        .category-meta {
          background: rgba(255,255,255,0.1);
          color: var(--text-secondary);
        }
      `})]})}function Vy(){const[e,t]=A.useState("ACTIONABLE_NOW"),[a,l]=A.useState(void 0),[n,i]=A.useState(!1),[u,s]=A.useState(!1),[r,d]=A.useState(!1),[h,y]=A.useState(!1),[m,p]=A.useState(null),[T,E]=A.useState(0),[O,f]=A.useState(null);A.useEffect(()=>{o();const z=setInterval(o,5*60*1e3);return()=>clearInterval(z)},[]);async function o(){try{const z=await Xs();f(z)}catch{}}const g=O&&O.errors.length>0;function v(){E(z=>z+1),ai()}function b(z){s(!1),p(z)}function j(z){z==="TUNING"?y(!0):(l(void 0),t(z))}function x(z){t(null),l(z)}return c.jsxs("div",{className:"app",children:[c.jsxs("header",{className:"app-header",children:[c.jsx("button",{className:"search-btn",onClick:()=>s(!0),title:"Search",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("path",{d:"M21 21l-4.35-4.35"})]})}),c.jsx("button",{className:"search-btn",onClick:()=>d(!0),title:"Groups",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]})}),c.jsx("button",{className:`settings-btn ${g?"has-errors":""}`,onClick:()=>i(!0),title:"Settings",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),g&&c.jsx("div",{className:"error-banner",onClick:()=>i(!0),children:"⚠ System issue detected — tap to view in Settings"}),c.jsxs("main",{className:"main-content",children:[c.jsx(Cy,{activeContainer:e,onContainerChange:j,onFlagFilter:x}),c.jsx(Ly,{activeContainer:e,flagFilter:a},T)]}),n&&c.jsx(ky,{onClose:()=>i(!1)}),u&&c.jsx(Xy,{onClose:()=>s(!1),onSelectAction:b}),r&&c.jsx(Qy,{onClose:()=>d(!1),onSelectAction:z=>{d(!1),p(z)}}),h&&c.jsx(Zy,{onClose:()=>y(!1)}),m&&c.jsx(vh,{actionId:m,onClose:()=>p(null),onUpdate:()=>{v(),p(null)}})]})}Ey.createRoot(document.getElementById("root")).render(c.jsx(A.StrictMode,{children:c.jsx(Vy,{})}));
