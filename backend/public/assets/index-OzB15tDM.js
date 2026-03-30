(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();var Ho={exports:{}},Ki={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig=Symbol.for("react.transitional.element"),cg=Symbol.for("react.fragment");function Bo(e,t,a){var l=null;if(a!==void 0&&(l=""+a),t.key!==void 0&&(l=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:ig,type:e,key:l,ref:t!==void 0?t:null,props:a}}Ki.Fragment=cg;Ki.jsx=Bo;Ki.jsxs=Bo;Ho.exports=Ki;var c=Ho.exports,Go={exports:{}},Y={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.transitional.element"),sg=Symbol.for("react.portal"),ug=Symbol.for("react.fragment"),rg=Symbol.for("react.strict_mode"),og=Symbol.for("react.profiler"),fg=Symbol.for("react.consumer"),dg=Symbol.for("react.context"),mg=Symbol.for("react.forward_ref"),gg=Symbol.for("react.suspense"),hg=Symbol.for("react.memo"),Lo=Symbol.for("react.lazy"),pg=Symbol.for("react.activity"),nr=Symbol.iterator;function yg(e){return e===null||typeof e!="object"?null:(e=nr&&e[nr]||e["@@iterator"],typeof e=="function"?e:null)}var Yo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qo=Object.assign,Xo={};function El(e,t,a){this.props=e,this.context=t,this.refs=Xo,this.updater=a||Yo}El.prototype.isReactComponent={};El.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};El.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qo(){}Qo.prototype=El.prototype;function Ps(e,t,a){this.props=e,this.context=t,this.refs=Xo,this.updater=a||Yo}var eu=Ps.prototype=new Qo;eu.constructor=Ps;qo(eu,El.prototype);eu.isPureReactComponent=!0;var ir=Array.isArray;function as(){}var se={H:null,A:null,T:null,S:null},Zo=Object.prototype.hasOwnProperty;function tu(e,t,a){var l=a.ref;return{$$typeof:Is,type:e,key:t,ref:l!==void 0?l:null,props:a}}function vg(e,t){return tu(e.type,t,e.props)}function au(e){return typeof e=="object"&&e!==null&&e.$$typeof===Is}function bg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var cr=/\/+/g;function yc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bg(""+e.key):t.toString(36)}function xg(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(as,as):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Va(e,t,a,l,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Is:case sg:s=!0;break;case Lo:return s=e._init,Va(s(e._payload),t,a,l,n)}}if(s)return n=n(e),s=l===""?"."+yc(e,0):l,ir(n)?(a="",s!=null&&(a=s.replace(cr,"$&/")+"/"),Va(n,t,a,"",function(d){return d})):n!=null&&(au(n)&&(n=vg(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(cr,"$&/")+"/")+s)),t.push(n)),1;s=0;var u=l===""?".":l+":";if(ir(e))for(var r=0;r<e.length;r++)l=e[r],i=u+yc(l,r),s+=Va(l,t,a,i,n);else if(r=yg(e),typeof r=="function")for(e=r.call(e),r=0;!(l=e.next()).done;)l=l.value,i=u+yc(l,r++),s+=Va(l,t,a,i,n);else if(i==="object"){if(typeof e.then=="function")return Va(xg(e),t,a,l,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function Hn(e,t,a){if(e==null)return e;var l=[],n=0;return Va(e,l,"","",function(i){return t.call(a,i,n++)}),l}function Ng(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var sr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Sg={map:Hn,forEach:function(e,t,a){Hn(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Hn(e,function(){t++}),t},toArray:function(e){return Hn(e,function(t){return t})||[]},only:function(e){if(!au(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Activity=pg;Y.Children=Sg;Y.Component=El;Y.Fragment=ug;Y.Profiler=og;Y.PureComponent=Ps;Y.StrictMode=rg;Y.Suspense=gg;Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se;Y.__COMPILER_RUNTIME={__proto__:null,c:function(e){return se.H.useMemoCache(e)}};Y.cache=function(e){return function(){return e.apply(null,arguments)}};Y.cacheSignal=function(){return null};Y.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=qo({},e.props),n=e.key;if(t!=null)for(i in t.key!==void 0&&(n=""+t.key),t)!Zo.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(l[i]=t[i]);var i=arguments.length-2;if(i===1)l.children=a;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];l.children=s}return tu(e.type,n,l)};Y.createContext=function(e){return e={$$typeof:dg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:fg,_context:e},e};Y.createElement=function(e,t,a){var l,n={},i=null;if(t!=null)for(l in t.key!==void 0&&(i=""+t.key),t)Zo.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=t[l]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var u=Array(s),r=0;r<s;r++)u[r]=arguments[r+2];n.children=u}if(e&&e.defaultProps)for(l in s=e.defaultProps,s)n[l]===void 0&&(n[l]=s[l]);return tu(e,i,n)};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:mg,render:e}};Y.isValidElement=au;Y.lazy=function(e){return{$$typeof:Lo,_payload:{_status:-1,_result:e},_init:Ng}};Y.memo=function(e,t){return{$$typeof:hg,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=se.T,a={};se.T=a;try{var l=e(),n=se.S;n!==null&&n(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(as,sr)}catch(i){sr(i)}finally{t!==null&&a.types!==null&&(t.types=a.types),se.T=t}};Y.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()};Y.use=function(e){return se.H.use(e)};Y.useActionState=function(e,t,a){return se.H.useActionState(e,t,a)};Y.useCallback=function(e,t){return se.H.useCallback(e,t)};Y.useContext=function(e){return se.H.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e,t){return se.H.useDeferredValue(e,t)};Y.useEffect=function(e,t){return se.H.useEffect(e,t)};Y.useEffectEvent=function(e){return se.H.useEffectEvent(e)};Y.useId=function(){return se.H.useId()};Y.useImperativeHandle=function(e,t,a){return se.H.useImperativeHandle(e,t,a)};Y.useInsertionEffect=function(e,t){return se.H.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return se.H.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return se.H.useMemo(e,t)};Y.useOptimistic=function(e,t){return se.H.useOptimistic(e,t)};Y.useReducer=function(e,t,a){return se.H.useReducer(e,t,a)};Y.useRef=function(e){return se.H.useRef(e)};Y.useState=function(e){return se.H.useState(e)};Y.useSyncExternalStore=function(e,t,a){return se.H.useSyncExternalStore(e,t,a)};Y.useTransition=function(){return se.H.useTransition()};Y.version="19.2.4";Go.exports=Y;var N=Go.exports,Vo={exports:{}},Ji={},Ko={exports:{}},Jo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,H){var _=E.length;E.push(H);e:for(;0<_;){var M=_-1>>>1,G=E[M];if(0<n(G,H))E[M]=H,E[_]=G,_=M;else break e}}function a(E){return E.length===0?null:E[0]}function l(E){if(E.length===0)return null;var H=E[0],_=E.pop();if(_!==H){E[0]=_;e:for(var M=0,G=E.length,le=G>>>1;M<le;){var Ce=2*(M+1)-1,Ye=E[Ce],ze=Ce+1,de=E[ze];if(0>n(Ye,_))ze<G&&0>n(de,Ye)?(E[M]=de,E[ze]=_,M=ze):(E[M]=Ye,E[Ce]=_,M=Ce);else if(ze<G&&0>n(de,_))E[M]=de,E[ze]=_,M=ze;else break e}}return H}function n(E,H){var _=E.sortIndex-H.sortIndex;return _!==0?_:E.id-H.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,u=s.now();e.unstable_now=function(){return s.now()-u}}var r=[],d=[],h=1,v=null,m=3,y=!1,b=!1,S=!1,O=!1,o=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;function x(E){for(var H=a(d);H!==null;){if(H.callback===null)l(d);else if(H.startTime<=E)l(d),H.sortIndex=H.expirationTime,t(r,H);else break;H=a(d)}}function j(E){if(S=!1,x(E),!b)if(a(r)!==null)b=!0,C||(C=!0,re());else{var H=a(d);H!==null&&Ae(j,H.startTime-E)}}var C=!1,g=-1,z=5,w=-1;function R(){return O?!0:!(e.unstable_now()-w<z)}function ae(){if(O=!1,C){var E=e.unstable_now();w=E;var H=!0;try{e:{b=!1,S&&(S=!1,f(g),g=-1),y=!0;var _=m;try{t:{for(x(E),v=a(r);v!==null&&!(v.expirationTime>E&&R());){var M=v.callback;if(typeof M=="function"){v.callback=null,m=v.priorityLevel;var G=M(v.expirationTime<=E);if(E=e.unstable_now(),typeof G=="function"){v.callback=G,x(E),H=!0;break t}v===a(r)&&l(r),x(E)}else l(r);v=a(r)}if(v!==null)H=!0;else{var le=a(d);le!==null&&Ae(j,le.startTime-E),H=!1}}break e}finally{v=null,m=_,y=!1}H=void 0}}finally{H?re():C=!1}}}var re;if(typeof p=="function")re=function(){p(ae)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,je=Ue.port2;Ue.port1.onmessage=ae,re=function(){je.postMessage(null)}}else re=function(){o(ae,0)};function Ae(E,H){g=o(function(){E(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var _=m;m=H;try{return E()}finally{m=_}},e.unstable_requestPaint=function(){O=!0},e.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var _=m;m=E;try{return H()}finally{m=_}},e.unstable_scheduleCallback=function(E,H,_){var M=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?M+_:M):_=M,E){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=_+G,E={id:h++,callback:H,priorityLevel:E,startTime:_,expirationTime:G,sortIndex:-1},_>M?(E.sortIndex=_,t(d,E),a(r)===null&&E===a(d)&&(S?(f(g),g=-1):S=!0,Ae(j,_-M))):(E.sortIndex=G,t(r,E),b||y||(b=!0,C||(C=!0,re()))),E},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(E){var H=m;return function(){var _=m;m=H;try{return E.apply(this,arguments)}finally{m=_}}}})(Jo);Ko.exports=Jo;var jg=Ko.exports,Wo={exports:{}},Le={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag=N;function $o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $t(){}var Ge={d:{f:$t,r:function(){throw Error($o(522))},D:$t,C:$t,L:$t,m:$t,X:$t,S:$t,M:$t},p:0,findDOMNode:null},Tg=Symbol.for("react.portal");function Eg(e,t,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tg,key:l==null?null:""+l,children:e,containerInfo:t,implementation:a}}var Jl=Ag.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Wi(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ge;Le.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error($o(299));return Eg(e,t,null,a)};Le.flushSync=function(e){var t=Jl.T,a=Ge.p;try{if(Jl.T=null,Ge.p=2,e)return e()}finally{Jl.T=t,Ge.p=a,Ge.d.f()}};Le.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ge.d.C(e,t))};Le.prefetchDNS=function(e){typeof e=="string"&&Ge.d.D(e)};Le.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,l=Wi(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Ge.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:i}):a==="script"&&Ge.d.X(e,{crossOrigin:l,integrity:n,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Le.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Wi(t.as,t.crossOrigin);Ge.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ge.d.M(e)};Le.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,l=Wi(a,t.crossOrigin);Ge.d.L(e,a,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Le.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Wi(t.as,t.crossOrigin);Ge.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ge.d.m(e)};Le.requestFormReset=function(e){Ge.d.r(e)};Le.unstable_batchedUpdates=function(e,t){return e(t)};Le.useFormState=function(e,t,a){return Jl.H.useFormState(e,t,a)};Le.useFormStatus=function(){return Jl.H.useHostTransitionStatus()};Le.version="19.2.4";function Fo(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fo)}catch(e){console.error(e)}}Fo(),Wo.exports=Le;var Dg=Wo.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se=jg,Io=N,Cg=Dg;function T(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jn(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function ef(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tf(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ur(e){if(jn(e)!==e)throw Error(T(188))}function zg(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return ur(n),e;if(i===l)return ur(n),t;i=i.sibling}throw Error(T(188))}if(a.return!==l.return)a=n,l=i;else{for(var s=!1,u=n.child;u;){if(u===a){s=!0,a=n,l=i;break}if(u===l){s=!0,l=n,a=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===a){s=!0,a=i,l=n;break}if(u===l){s=!0,l=i,a=n;break}u=u.sibling}if(!s)throw Error(T(189))}}if(a.alternate!==l)throw Error(T(190))}if(a.tag!==3)throw Error(T(188));return a.stateNode.current===a?e:t}function af(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=af(e),t!==null)return t;e=e.sibling}return null}var ue=Object.assign,wg=Symbol.for("react.element"),Bn=Symbol.for("react.transitional.element"),ql=Symbol.for("react.portal"),Wa=Symbol.for("react.fragment"),lf=Symbol.for("react.strict_mode"),ls=Symbol.for("react.profiler"),nf=Symbol.for("react.consumer"),Ut=Symbol.for("react.context"),lu=Symbol.for("react.forward_ref"),ns=Symbol.for("react.suspense"),is=Symbol.for("react.suspense_list"),nu=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),cs=Symbol.for("react.activity"),Og=Symbol.for("react.memo_cache_sentinel"),rr=Symbol.iterator;function Rl(e){return e===null||typeof e!="object"?null:(e=rr&&e[rr]||e["@@iterator"],typeof e=="function"?e:null)}var Mg=Symbol.for("react.client.reference");function ss(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Mg?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wa:return"Fragment";case ls:return"Profiler";case lf:return"StrictMode";case ns:return"Suspense";case is:return"SuspenseList";case cs:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ql:return"Portal";case Ut:return e.displayName||"Context";case nf:return(e._context.displayName||"Context")+".Consumer";case lu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nu:return t=e.displayName||null,t!==null?t:ss(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return ss(e(t))}catch{}}return null}var Xl=Array.isArray,L=Io.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=Cg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,za={pending:!1,data:null,method:null,action:null},us=[],$a=-1;function Et(e){return{current:e}}function De(e){0>$a||(e.current=us[$a],us[$a]=null,$a--)}function ne(e,t){$a++,us[$a]=e.current,e.current=t}var At=Et(null),rn=Et(null),ua=Et(null),hi=Et(null);function pi(e,t){switch(ne(ua,t),ne(rn,e),ne(At,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?po(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=po(t),e=Tm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}De(At),ne(At,e)}function hl(){De(At),De(rn),De(ua)}function rs(e){e.memoizedState!==null&&ne(hi,e);var t=At.current,a=Tm(t,e.type);t!==a&&(ne(rn,e),ne(At,a))}function yi(e){rn.current===e&&(De(At),De(rn)),hi.current===e&&(De(hi),xn._currentValue=za)}var vc,or;function Ta(e){if(vc===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);vc=t&&t[1]||"",or=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vc+e+or}var bc=!1;function xc(e,t){if(!e||bc)return"";bc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(y){var m=y}Reflect.construct(e,[],v)}else{try{v.call()}catch(y){m=y}e.call(v.prototype)}}else{try{throw Error()}catch(y){m=y}(v=e())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(y){if(y&&m&&typeof y.stack=="string")return[y.stack,m.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],u=i[1];if(s&&u){var r=s.split(`
`),d=u.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===d.length)for(l=r.length-1,n=d.length-1;1<=l&&0<=n&&r[l]!==d[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==d[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==d[n]){var h=`
`+r[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=n);break}}}finally{bc=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function _g(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return xc(e.type,!1);case 11:return xc(e.type.render,!1);case 1:return xc(e.type,!0);case 31:return Ta("Activity");default:return""}}function fr(e){try{var t="",a=null;do t+=_g(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var os=Object.prototype.hasOwnProperty,iu=Se.unstable_scheduleCallback,Nc=Se.unstable_cancelCallback,kg=Se.unstable_shouldYield,Rg=Se.unstable_requestPaint,et=Se.unstable_now,Ug=Se.unstable_getCurrentPriorityLevel,cf=Se.unstable_ImmediatePriority,sf=Se.unstable_UserBlockingPriority,vi=Se.unstable_NormalPriority,Hg=Se.unstable_LowPriority,uf=Se.unstable_IdlePriority,Bg=Se.log,Gg=Se.unstable_setDisableYieldValue,An=null,tt=null;function la(e){if(typeof Bg=="function"&&Gg(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(An,e)}catch{}}var at=Math.clz32?Math.clz32:qg,Lg=Math.log,Yg=Math.LN2;function qg(e){return e>>>=0,e===0?32:31-(Lg(e)/Yg|0)|0}var Gn=256,Ln=262144,Yn=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $i(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?n=Ea(l):(s&=u,s!==0?n=Ea(s):a||(a=u&~e,a!==0&&(n=Ea(a))))):(u=l&~i,u!==0?n=Ea(u):s!==0?n=Ea(s):a||(a=l&~e,a!==0&&(n=Ea(a)))),n===0?0:t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Tn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rf(){var e=Yn;return Yn<<=1,!(Yn&62914560)&&(Yn=4194304),e}function Sc(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function En(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qg(e,t,a,l,n,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,r=e.expirationTimes,d=e.hiddenUpdates;for(a=s&~a;0<a;){var h=31-at(a),v=1<<h;u[h]=0,r[h]=-1;var m=d[h];if(m!==null)for(d[h]=null,h=0;h<m.length;h++){var y=m[h];y!==null&&(y.lane&=-536870913)}a&=~v}l!==0&&of(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function of(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-at(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ff(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-at(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function df(e,t){var a=t&-t;return a=a&42?1:cu(a),a&(e.suspendedLanes|t)?0:a}function cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function su(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mf(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:Um(e.type))}function dr(e,t){var a=$.p;try{return $.p=e,t()}finally{$.p=a}}var Na=Math.random().toString(36).slice(2),Me="__reactFiber$"+Na,Je="__reactProps$"+Na,Dl="__reactContainer$"+Na,fs="__reactEvents$"+Na,Zg="__reactListeners$"+Na,Vg="__reactHandles$"+Na,mr="__reactResources$"+Na,Dn="__reactMarker$"+Na;function uu(e){delete e[Me],delete e[Je],delete e[fs],delete e[Zg],delete e[Vg]}function Fa(e){var t=e[Me];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Dl]||a[Me]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=No(e);e!==null;){if(a=e[Me])return a;e=No(e)}return t}e=a,a=e.parentNode}return null}function Cl(e){if(e=e[Me]||e[Dl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ql(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(T(33))}function sl(e){var t=e[mr];return t||(t=e[mr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ee(e){e[Dn]=!0}var gf=new Set,hf={};function Ga(e,t){pl(e,t),pl(e+"Capture",t)}function pl(e,t){for(hf[e]=t,e=0;e<t.length;e++)gf.add(t[e])}var Kg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gr={},hr={};function Jg(e){return os.call(hr,e)?!0:os.call(gr,e)?!1:Kg.test(e)?hr[e]=!0:(gr[e]=!0,!1)}function ei(e,t,a){if(Jg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function qn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ct(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wg(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ds(e){if(!e._valueTracker){var t=pf(e)?"checked":"value";e._valueTracker=Wg(e,t,""+e[t])}}function yf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=pf(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $g=/[\n"\\]/g;function ot(e){return e.replace($g,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ms(e,t,a,l,n,i,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?gs(e,s,st(t)):a!=null?gs(e,s,st(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+st(u):e.removeAttribute("name")}function vf(e,t,a,l,n,i,s,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ds(e);return}a=a!=null?""+st(a):"",t=t!=null?""+st(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),ds(e)}function gs(e,t,a){t==="number"&&bi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ul(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+st(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function bf(e,t,a){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+st(a):""}function xf(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(T(92));if(Xl(l)){if(1<l.length)throw Error(T(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=st(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ds(e)}function yl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pr(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Fg.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Nf(e,t,a){if(t!=null&&typeof t!="object")throw Error(T(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&pr(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&pr(e,i,t[i])}function ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ig=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(e){return Pg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ht(){}var hs=null;function ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,rl=null;function yr(e){var t=Cl(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(ms(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Je]||null;if(!n)throw Error(T(90));ms(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&yf(l)}break e;case"textarea":bf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ul(e,!!a.multiple,t,!1)}}}var jc=!1;function Sf(e,t,a){if(jc)return e(t,a);jc=!0;try{var l=e(t);return l}finally{if(jc=!1,(Ia!==null||rl!==null)&&(uc(),Ia&&(t=Ia,e=rl,rl=Ia=null,yr(t),e)))for(t=0;t<e.length;t++)yr(e[t])}}function on(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Je]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(T(231,t,typeof a));return a}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ps=!1;if(qt)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){ps=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{ps=!1}var na=null,fu=null,ai=null;function jf(){if(ai)return ai;var e,t=fu,a=t.length,l,n="value"in na?na.value:na.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var s=a-e;for(l=1;l<=s&&t[a-l]===n[i-l];l++);return ai=n.slice(e,1<l?1-l:void 0)}function li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xn(){return!0}function vr(){return!1}function We(e){function t(a,l,n,i,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xn:vr,this.isPropagationStopped=vr,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),t}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fi=We(La),Cn=ue({},La,{view:0,detail:0}),eh=We(Cn),Ac,Tc,Hl,Ii=ue({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hl&&(Hl&&e.type==="mousemove"?(Ac=e.screenX-Hl.screenX,Tc=e.screenY-Hl.screenY):Tc=Ac=0,Hl=e),Ac)},movementY:function(e){return"movementY"in e?e.movementY:Tc}}),br=We(Ii),th=ue({},Ii,{dataTransfer:0}),ah=We(th),lh=ue({},Cn,{relatedTarget:0}),Ec=We(lh),nh=ue({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),ih=We(nh),ch=ue({},La,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sh=We(ch),uh=ue({},La,{data:0}),xr=We(uh),rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fh[e])?!!t[e]:!1}function du(){return dh}var mh=ue({},Cn,{key:function(e){if(e.key){var t=rh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gh=We(mh),hh=ue({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nr=We(hh),ph=ue({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),yh=We(ph),vh=ue({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=We(vh),xh=ue({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nh=We(xh),Sh=ue({},La,{newState:0,oldState:0}),jh=We(Sh),Ah=[9,13,27,32],mu=qt&&"CompositionEvent"in window,Wl=null;qt&&"documentMode"in document&&(Wl=document.documentMode);var Th=qt&&"TextEvent"in window&&!Wl,Af=qt&&(!mu||Wl&&8<Wl&&11>=Wl),Sr=" ",jr=!1;function Tf(e,t){switch(e){case"keyup":return Ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function Eh(e,t){switch(e){case"compositionend":return Ef(t);case"keypress":return t.which!==32?null:(jr=!0,Sr);case"textInput":return e=t.data,e===Sr&&jr?null:e;default:return null}}function Dh(e,t){if(Pa)return e==="compositionend"||!mu&&Tf(e,t)?(e=jf(),ai=fu=na=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Af&&t.locale!=="ko"?null:t.data;default:return null}}var Ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ch[e.type]:t==="textarea"}function Df(e,t,a,l){Ia?rl?rl.push(l):rl=[l]:Ia=l,t=Hi(t,"onChange"),0<t.length&&(a=new Fi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var $l=null,fn=null;function zh(e){Sm(e,0)}function Pi(e){var t=Ql(e);if(yf(t))return e}function Tr(e,t){if(e==="change")return t}var Cf=!1;if(qt){var Dc;if(qt){var Cc="oninput"in document;if(!Cc){var Er=document.createElement("div");Er.setAttribute("oninput","return;"),Cc=typeof Er.oninput=="function"}Dc=Cc}else Dc=!1;Cf=Dc&&(!document.documentMode||9<document.documentMode)}function Dr(){$l&&($l.detachEvent("onpropertychange",zf),fn=$l=null)}function zf(e){if(e.propertyName==="value"&&Pi(fn)){var t=[];Df(t,fn,e,ou(e)),Sf(zh,t)}}function wh(e,t,a){e==="focusin"?(Dr(),$l=t,fn=a,$l.attachEvent("onpropertychange",zf)):e==="focusout"&&Dr()}function Oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pi(fn)}function Mh(e,t){if(e==="click")return Pi(t)}function _h(e,t){if(e==="input"||e==="change")return Pi(t)}function kh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:kh;function dn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!os.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function Cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zr(e,t){var a=Cr(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cr(a)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Of(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=bi(e.document)}return t}function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Rh=qt&&"documentMode"in document&&11>=document.documentMode,el=null,ys=null,Fl=null,vs=!1;function wr(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vs||el==null||el!==bi(l)||(l=el,"selectionStart"in l&&gu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Fl&&dn(Fl,l)||(Fl=l,l=Hi(ys,"onSelect"),0<l.length&&(t=new Fi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function Aa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},zc={},Mf={};qt&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Ya(e){if(zc[e])return zc[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Mf)return zc[e]=t[a];return e}var _f=Ya("animationend"),kf=Ya("animationiteration"),Rf=Ya("animationstart"),Uh=Ya("transitionrun"),Hh=Ya("transitionstart"),Bh=Ya("transitioncancel"),Uf=Ya("transitionend"),Hf=new Map,bs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bs.push("scrollEnd");function bt(e,t){Hf.set(e,t),Ga(t,[e])}var xi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],al=0,hu=0;function ec(){for(var e=al,t=hu=al=0;t<e;){var a=ct[t];ct[t++]=null;var l=ct[t];ct[t++]=null;var n=ct[t];ct[t++]=null;var i=ct[t];if(ct[t++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&Bf(a,n,i)}}function tc(e,t,a,l){ct[al++]=e,ct[al++]=t,ct[al++]=a,ct[al++]=l,hu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function pu(e,t,a,l){return tc(e,t,a,l),Ni(e)}function qa(e,t){return tc(e,null,null,t),Ni(e)}function Bf(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-at(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Ni(e){if(50<sn)throw sn=0,Ls=null,Error(T(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ll={};function Gh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,a,l){return new Gh(e,t,a,l)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=Ie(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Gf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,a,l,n,i){var s=0;if(l=e,typeof e=="function")yu(e)&&(s=1);else if(typeof e=="string")s=Qp(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case cs:return e=Ie(31,a,t,n),e.elementType=cs,e.lanes=i,e;case Wa:return wa(a.children,n,i,t);case lf:s=8,n|=24;break;case ls:return e=Ie(12,a,t,n|2),e.elementType=ls,e.lanes=i,e;case ns:return e=Ie(13,a,t,n),e.elementType=ns,e.lanes=i,e;case is:return e=Ie(19,a,t,n),e.elementType=is,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ut:s=10;break e;case nf:s=9;break e;case lu:s=11;break e;case nu:s=14;break e;case Ft:s=16,l=null;break e}s=29,a=Error(T(130,e===null?"null":typeof e,"")),l=null}return t=Ie(s,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function wa(e,t,a,l){return e=Ie(7,e,l,t),e.lanes=a,e}function wc(e,t,a){return e=Ie(6,e,null,t),e.lanes=a,e}function Lf(e){var t=Ie(18,null,null,0);return t.stateNode=e,t}function Oc(e,t,a){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Or=new WeakMap;function ft(e,t){if(typeof e=="object"&&e!==null){var a=Or.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fr(t)},Or.set(e,t),t)}return{value:e,source:t,stack:fr(t)}}var nl=[],il=0,Si=null,mn=0,ut=[],rt=0,ya=null,Nt=1,St="";function _t(e,t){nl[il++]=mn,nl[il++]=Si,Si=e,mn=t}function Yf(e,t,a){ut[rt++]=Nt,ut[rt++]=St,ut[rt++]=ya,ya=e;var l=Nt;e=St;var n=32-at(l)-1;l&=~(1<<n),a+=1;var i=32-at(t)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,Nt=1<<32-at(t)+n|a<<n|l,St=i+e}else Nt=1<<i|a<<n|l,St=e}function vu(e){e.return!==null&&(_t(e,1),Yf(e,1,0))}function bu(e){for(;e===Si;)Si=nl[--il],nl[il]=null,mn=nl[--il],nl[il]=null;for(;e===ya;)ya=ut[--rt],ut[rt]=null,St=ut[--rt],ut[rt]=null,Nt=ut[--rt],ut[rt]=null}function qf(e,t){ut[rt++]=Nt,ut[rt++]=St,ut[rt++]=ya,Nt=t.id,St=t.overflow,ya=e}var _e=null,ce=null,K=!1,ra=null,dt=!1,xs=Error(T(519));function va(e){var t=Error(T(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw gn(ft(t,e)),xs}function Mr(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Me]=e,t[Je]=l,a){case"dialog":Q("cancel",t),Q("close",t);break;case"iframe":case"object":case"embed":Q("load",t);break;case"video":case"audio":for(a=0;a<vn.length;a++)Q(vn[a],t);break;case"source":Q("error",t);break;case"img":case"image":case"link":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"input":Q("invalid",t),vf(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Q("invalid",t);break;case"textarea":Q("invalid",t),xf(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Am(t.textContent,a)?(l.popover!=null&&(Q("beforetoggle",t),Q("toggle",t)),l.onScroll!=null&&Q("scroll",t),l.onScrollEnd!=null&&Q("scrollend",t),l.onClick!=null&&(t.onclick=Ht),t=!0):t=!1,t||va(e,!0)}function _r(e){for(_e=e.return;_e;)switch(_e.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:_e=_e.return}}function Qa(e){if(e!==_e)return!1;if(!K)return _r(e),K=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zs(e.type,e.memoizedProps)),a=!a),a&&ce&&va(e),_r(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));ce=xo(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));ce=xo(e)}else t===27?(t=ce,Sa(e.type)?(e=Ws,Ws=null,ce=e):ce=t):ce=_e?gt(e.stateNode.nextSibling):null;return!0}function ka(){ce=_e=null,K=!1}function Mc(){var e=ra;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),ra=null),e}function gn(e){ra===null?ra=[e]:ra.push(e)}var Ns=Et(null),Xa=null,Bt=null;function Pt(e,t,a){ne(Ns,t._currentValue),t._currentValue=a}function Lt(e){e._currentValue=Ns.current,De(Ns)}function Ss(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function js(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var r=0;r<t.length;r++)if(u.context===t[r]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Ss(i.return,a,e),l||(s=null);break e}i=u.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(T(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Ss(s,a,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function zl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(T(387));if(s=s.memoizedProps,s!==null){var u=n.type;nt(n.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(n===hi.current){if(s=n.alternate,s===null)throw Error(T(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(xn):e=[xn])}n=n.return}e!==null&&js(t,e,a,l),t.flags|=262144}function ji(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){Xa=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ke(e){return Xf(Xa,e)}function Qn(e,t){return Xa===null&&Ra(e),Xf(e,t)}function Xf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Bt===null){if(e===null)throw Error(T(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return a}var Lh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Yh=Se.unstable_scheduleCallback,qh=Se.unstable_NormalPriority,be={$$typeof:Ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new Lh,data:new Map,refCount:0}}function zn(e){e.refCount--,e.refCount===0&&Yh(qh,function(){e.controller.abort()})}var Il=null,As=0,vl=0,ol=null;function Xh(e,t){if(Il===null){var a=Il=[];As=0,vl=Zu(),ol={status:"pending",value:void 0,then:function(l){a.push(l)}}}return As++,t.then(kr,kr),t}function kr(){if(--As===0&&Il!==null){ol!==null&&(ol.status="fulfilled");var e=Il;Il=null,vl=0,ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Rr=L.S;L.S=function(e,t){lm=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Xh(e,t),Rr!==null&&Rr(e,t)};var Oa=Et(null);function Nu(){var e=Oa.current;return e!==null?e:te.pooledCache}function ii(e,t){t===null?ne(Oa,Oa.current):ne(Oa,t.pool)}function Qf(){var e=Nu();return e===null?null:{parent:be._currentValue,pool:e}}var wl=Error(T(460)),Su=Error(T(474)),ac=Error(T(542)),Ai={then:function(){}};function Ur(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ht,Ht),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Br(e),e;default:if(typeof t.status=="string")t.then(Ht,Ht);else{if(e=te,e!==null&&100<e.shellSuspendCounter)throw Error(T(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Br(e),e}throw Ma=t,wl}}function Da(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ma=a,wl):a}}var Ma=null;function Hr(){if(Ma===null)throw Error(T(459));var e=Ma;return Ma=null,e}function Br(e){if(e===wl||e===ac)throw Error(T(483))}var fl=null,hn=0;function Zn(e){var t=hn;return hn+=1,fl===null&&(fl=[]),Zf(fl,e,t)}function Bl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vn(e,t){throw t.$$typeof===wg?Error(T(525)):(e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vf(e){function t(o,f){if(e){var p=o.deletions;p===null?(o.deletions=[f],o.flags|=16):p.push(f)}}function a(o,f){if(!e)return null;for(;f!==null;)t(o,f),f=f.sibling;return null}function l(o){for(var f=new Map;o!==null;)o.key!==null?f.set(o.key,o):f.set(o.index,o),o=o.sibling;return f}function n(o,f){return o=Gt(o,f),o.index=0,o.sibling=null,o}function i(o,f,p){return o.index=p,e?(p=o.alternate,p!==null?(p=p.index,p<f?(o.flags|=67108866,f):p):(o.flags|=67108866,f)):(o.flags|=1048576,f)}function s(o){return e&&o.alternate===null&&(o.flags|=67108866),o}function u(o,f,p,x){return f===null||f.tag!==6?(f=wc(p,o.mode,x),f.return=o,f):(f=n(f,p),f.return=o,f)}function r(o,f,p,x){var j=p.type;return j===Wa?h(o,f,p.props.children,x,p.key):f!==null&&(f.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ft&&Da(j)===f.type)?(f=n(f,p.props),Bl(f,p),f.return=o,f):(f=ni(p.type,p.key,p.props,null,o.mode,x),Bl(f,p),f.return=o,f)}function d(o,f,p,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Oc(p,o.mode,x),f.return=o,f):(f=n(f,p.children||[]),f.return=o,f)}function h(o,f,p,x,j){return f===null||f.tag!==7?(f=wa(p,o.mode,x,j),f.return=o,f):(f=n(f,p),f.return=o,f)}function v(o,f,p){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=wc(""+f,o.mode,p),f.return=o,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bn:return p=ni(f.type,f.key,f.props,null,o.mode,p),Bl(p,f),p.return=o,p;case ql:return f=Oc(f,o.mode,p),f.return=o,f;case Ft:return f=Da(f),v(o,f,p)}if(Xl(f)||Rl(f))return f=wa(f,o.mode,p,null),f.return=o,f;if(typeof f.then=="function")return v(o,Zn(f),p);if(f.$$typeof===Ut)return v(o,Qn(o,f),p);Vn(o,f)}return null}function m(o,f,p,x){var j=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return j!==null?null:u(o,f,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Bn:return p.key===j?r(o,f,p,x):null;case ql:return p.key===j?d(o,f,p,x):null;case Ft:return p=Da(p),m(o,f,p,x)}if(Xl(p)||Rl(p))return j!==null?null:h(o,f,p,x,null);if(typeof p.then=="function")return m(o,f,Zn(p),x);if(p.$$typeof===Ut)return m(o,f,Qn(o,p),x);Vn(o,p)}return null}function y(o,f,p,x,j){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return o=o.get(p)||null,u(f,o,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bn:return o=o.get(x.key===null?p:x.key)||null,r(f,o,x,j);case ql:return o=o.get(x.key===null?p:x.key)||null,d(f,o,x,j);case Ft:return x=Da(x),y(o,f,p,x,j)}if(Xl(x)||Rl(x))return o=o.get(p)||null,h(f,o,x,j,null);if(typeof x.then=="function")return y(o,f,p,Zn(x),j);if(x.$$typeof===Ut)return y(o,f,p,Qn(f,x),j);Vn(f,x)}return null}function b(o,f,p,x){for(var j=null,C=null,g=f,z=f=0,w=null;g!==null&&z<p.length;z++){g.index>z?(w=g,g=null):w=g.sibling;var R=m(o,g,p[z],x);if(R===null){g===null&&(g=w);break}e&&g&&R.alternate===null&&t(o,g),f=i(R,f,z),C===null?j=R:C.sibling=R,C=R,g=w}if(z===p.length)return a(o,g),K&&_t(o,z),j;if(g===null){for(;z<p.length;z++)g=v(o,p[z],x),g!==null&&(f=i(g,f,z),C===null?j=g:C.sibling=g,C=g);return K&&_t(o,z),j}for(g=l(g);z<p.length;z++)w=y(g,o,z,p[z],x),w!==null&&(e&&w.alternate!==null&&g.delete(w.key===null?z:w.key),f=i(w,f,z),C===null?j=w:C.sibling=w,C=w);return e&&g.forEach(function(ae){return t(o,ae)}),K&&_t(o,z),j}function S(o,f,p,x){if(p==null)throw Error(T(151));for(var j=null,C=null,g=f,z=f=0,w=null,R=p.next();g!==null&&!R.done;z++,R=p.next()){g.index>z?(w=g,g=null):w=g.sibling;var ae=m(o,g,R.value,x);if(ae===null){g===null&&(g=w);break}e&&g&&ae.alternate===null&&t(o,g),f=i(ae,f,z),C===null?j=ae:C.sibling=ae,C=ae,g=w}if(R.done)return a(o,g),K&&_t(o,z),j;if(g===null){for(;!R.done;z++,R=p.next())R=v(o,R.value,x),R!==null&&(f=i(R,f,z),C===null?j=R:C.sibling=R,C=R);return K&&_t(o,z),j}for(g=l(g);!R.done;z++,R=p.next())R=y(g,o,z,R.value,x),R!==null&&(e&&R.alternate!==null&&g.delete(R.key===null?z:R.key),f=i(R,f,z),C===null?j=R:C.sibling=R,C=R);return e&&g.forEach(function(re){return t(o,re)}),K&&_t(o,z),j}function O(o,f,p,x){if(typeof p=="object"&&p!==null&&p.type===Wa&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Bn:e:{for(var j=p.key;f!==null;){if(f.key===j){if(j=p.type,j===Wa){if(f.tag===7){a(o,f.sibling),x=n(f,p.props.children),x.return=o,o=x;break e}}else if(f.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ft&&Da(j)===f.type){a(o,f.sibling),x=n(f,p.props),Bl(x,p),x.return=o,o=x;break e}a(o,f);break}else t(o,f);f=f.sibling}p.type===Wa?(x=wa(p.props.children,o.mode,x,p.key),x.return=o,o=x):(x=ni(p.type,p.key,p.props,null,o.mode,x),Bl(x,p),x.return=o,o=x)}return s(o);case ql:e:{for(j=p.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){a(o,f.sibling),x=n(f,p.children||[]),x.return=o,o=x;break e}else{a(o,f);break}else t(o,f);f=f.sibling}x=Oc(p,o.mode,x),x.return=o,o=x}return s(o);case Ft:return p=Da(p),O(o,f,p,x)}if(Xl(p))return b(o,f,p,x);if(Rl(p)){if(j=Rl(p),typeof j!="function")throw Error(T(150));return p=j.call(p),S(o,f,p,x)}if(typeof p.then=="function")return O(o,f,Zn(p),x);if(p.$$typeof===Ut)return O(o,f,Qn(o,p),x);Vn(o,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,f!==null&&f.tag===6?(a(o,f.sibling),x=n(f,p),x.return=o,o=x):(a(o,f),x=wc(p,o.mode,x),x.return=o,o=x),s(o)):a(o,f)}return function(o,f,p,x){try{hn=0;var j=O(o,f,p,x);return fl=null,j}catch(g){if(g===wl||g===ac)throw g;var C=Ie(29,g,null,o.mode);return C.lanes=x,C.return=o,C}finally{}}}var Ua=Vf(!0),Kf=Vf(!1),It=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ts(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,W&2){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Ni(e),Bf(e,null,a),t}return tc(e,l,t,a),Ni(e)}function Pl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ff(e,a)}}function _c(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Es=!1;function en(){if(Es){var e=ol;if(e!==null)throw e}}function tn(e,t,a,l){Es=!1;var n=e.updateQueue;It=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var r=u,d=r.next;r.next=null,s===null?i=d:s.next=d,s=r;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==s&&(u===null?h.firstBaseUpdate=d:u.next=d,h.lastBaseUpdate=r))}if(i!==null){var v=n.baseState;s=0,h=d=r=null,u=i;do{var m=u.lane&-536870913,y=m!==u.lane;if(y?(V&m)===m:(l&m)===m){m!==0&&m===vl&&(Es=!0),h!==null&&(h=h.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var b=e,S=u;m=t;var O=a;switch(S.tag){case 1:if(b=S.payload,typeof b=="function"){v=b.call(O,v,m);break e}v=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=S.payload,m=typeof b=="function"?b.call(O,v,m):b,m==null)break e;v=ue({},v,m);break e;case 2:It=!0}}m=u.callback,m!==null&&(e.flags|=64,y&&(e.flags|=8192),y=n.callbacks,y===null?n.callbacks=[m]:y.push(m))}else y={lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(d=h=y,r=v):h=h.next=y,s|=m;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;y=u,u=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);h===null&&(r=v),n.baseState=r,n.firstBaseUpdate=d,n.lastBaseUpdate=h,i===null&&(n.shared.lanes=0),xa|=s,e.lanes=s,e.memoizedState=v}}function Jf(e,t){if(typeof e!="function")throw Error(T(191,e));e.call(t)}function Wf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jf(a[e],t)}var bl=Et(null),Ti=Et(0);function Gr(e,t){e=Vt,ne(Ti,e),ne(bl,t),Vt=e|t.baseLanes}function Ds(){ne(Ti,Vt),ne(bl,bl.current)}function Au(){Vt=Ti.current,De(bl),De(Ti)}var it=Et(null),mt=null;function ea(e){var t=e.alternate;ne(he,he.current&1),ne(it,e),mt===null&&(t===null||bl.current!==null||t.memoizedState!==null)&&(mt=e)}function Cs(e){ne(he,he.current),ne(it,e),mt===null&&(mt=e)}function $f(e){e.tag===22?(ne(he,he.current),ne(it,e),mt===null&&(mt=e)):ta()}function ta(){ne(he,he.current),ne(it,it.current)}function Fe(e){De(it),mt===e&&(mt=null),De(he)}var he=Et(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ks(a)||Js(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,q=null,ee=null,ye=null,Di=!1,dl=!1,Ha=!1,Ci=0,pn=0,ml=null,Zh=0;function me(){throw Error(T(321))}function Tu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function Eu(e,t,a,l,n,i){return Xt=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?Dd:Hu,Ha=!1,i=a(l,n),Ha=!1,dl&&(i=If(t,a,l,n)),Ff(e),i}function Ff(e){L.H=yn;var t=ee!==null&&ee.next!==null;if(Xt=0,ye=ee=q=null,Di=!1,pn=0,ml=null,t)throw Error(T(300));e===null||xe||(e=e.dependencies,e!==null&&ji(e)&&(xe=!0))}function If(e,t,a,l){q=e;var n=0;do{if(dl&&(ml=null),pn=0,dl=!1,25<=n)throw Error(T(301));if(n+=1,ye=ee=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}L.H=Cd,i=t(a,l)}while(dl);return i}function Vh(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?wn(t):t,e=e.useState()[0],(ee!==null?ee.memoizedState:null)!==e&&(q.flags|=1024),t}function Du(){var e=Ci!==0;return Ci=0,e}function Cu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function zu(e){if(Di){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Di=!1}Xt=0,ye=ee=q=null,dl=!1,pn=Ci=0,ml=null}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?q.memoizedState=ye=e:ye=ye.next=e,ye}function pe(){if(ee===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ye===null?q.memoizedState:ye.next;if(t!==null)ye=t,ee=e;else{if(e===null)throw q.alternate===null?Error(T(467)):Error(T(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ye===null?q.memoizedState=ye=e:ye=ye.next=e}return ye}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wn(e){var t=pn;return pn+=1,ml===null&&(ml=[]),e=Zf(ml,e,t),t=q,(ye===null?t.memoizedState:ye.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?Dd:Hu),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wn(e);if(e.$$typeof===Ut)return ke(e)}throw Error(T(438,String(e)))}function wu(e){var t=null,a=q.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=q.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=lc(),q.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Og;return t.index++,a}function Qt(e,t){return typeof t=="function"?t(e):t}function ci(e){var t=pe();return Ou(t,ee,e)}function Ou(e,t,a){var l=e.queue;if(l===null)throw Error(T(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var u=s=null,r=null,d=t,h=!1;do{var v=d.lane&-536870913;if(v!==d.lane?(V&v)===v:(Xt&v)===v){var m=d.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),v===vl&&(h=!0);else if((Xt&m)===m){d=d.next,m===vl&&(h=!0);continue}else v={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(u=r=v,s=i):r=r.next=v,q.lanes|=m,xa|=m;v=d.action,Ha&&a(i,v),i=d.hasEagerState?d.eagerState:a(i,v)}else m={lane:v,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(u=r=m,s=i):r=r.next=m,q.lanes|=v,xa|=v;d=d.next}while(d!==null&&d!==t);if(r===null?s=i:r.next=u,!nt(i,e.memoizedState)&&(xe=!0,h&&(a=ol,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function kc(e){var t=pe(),a=t.queue;if(a===null)throw Error(T(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);nt(i,t.memoizedState)||(xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Pf(e,t,a){var l=q,n=pe(),i=K;if(i){if(a===void 0)throw Error(T(407));a=a()}else a=t();var s=!nt((ee||n).memoizedState,a);if(s&&(n.memoizedState=a,xe=!0),n=n.queue,Mu(ad.bind(null,l,n,e),[e]),n.getSnapshot!==t||s||ye!==null&&ye.memoizedState.tag&1){if(l.flags|=2048,xl(9,{destroy:void 0},td.bind(null,l,n,a,t),null),te===null)throw Error(T(349));i||Xt&127||ed(l,t,a)}return a}function ed(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=q.updateQueue,t===null?(t=lc(),q.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function td(e,t,a,l){t.value=a,t.getSnapshot=l,ld(t)&&nd(e)}function ad(e,t,a){return a(function(){ld(t)&&nd(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function nd(e){var t=qa(e,2);t!==null&&Ke(t,e,2)}function zs(e){var t=Be();if(typeof e=="function"){var a=e;if(e=a(),Ha){la(!0);try{a()}finally{la(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},t}function id(e,t,a,l){return e.baseState=a,Ou(e,ee,typeof l=="function"?l:Qt)}function Kh(e,t,a,l,n){if(cc(e))throw Error(T(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};L.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,cd(t,i)):(i.next=a.next,t.pending=a.next=i)}}function cd(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=L.T,s={};L.T=s;try{var u=a(n,l),r=L.S;r!==null&&r(s,u),Lr(e,t,u)}catch(d){ws(e,t,d)}finally{i!==null&&s.types!==null&&(i.types=s.types),L.T=i}}else try{i=a(n,l),Lr(e,t,i)}catch(d){ws(e,t,d)}}function Lr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Yr(e,t,l)},function(l){return ws(e,t,l)}):Yr(e,t,a)}function Yr(e,t,a){t.status="fulfilled",t.value=a,sd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,cd(e,a)))}function ws(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,sd(t),t=t.next;while(t!==l)}e.action=null}function sd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ud(e,t){return t}function qr(e,t){if(K){var a=te.formState;if(a!==null){e:{var l=q;if(K){if(ce){t:{for(var n=ce,i=dt;n.nodeType!==8;){if(!i){n=null;break t}if(n=gt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ce=gt(n.nextSibling),l=n.data==="F!";break e}}va(l)}l=!1}l&&(t=a[0])}}return a=Be(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ud,lastRenderedState:t},a.queue=l,a=Ad.bind(null,q,l),l.dispatch=a,l=zs(!1),i=Uu.bind(null,q,!1,l.queue),l=Be(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Kh.bind(null,q,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Xr(e){var t=pe();return rd(t,ee,e)}function rd(e,t,a){if(t=Ou(e,t,ud)[0],e=ci(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=wn(t)}catch(s){throw s===wl?ac:s}else l=t;t=pe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(q.flags|=2048,xl(9,{destroy:void 0},Jh.bind(null,n,a),null)),[l,i,e]}function Jh(e,t){e.action=t}function Qr(e){var t=pe(),a=ee;if(a!==null)return rd(t,a,e);pe(),t=t.memoizedState,a=pe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function xl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=q.updateQueue,t===null&&(t=lc(),q.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function od(){return pe().memoizedState}function si(e,t,a,l){var n=Be();q.flags|=e,n.memoizedState=xl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ic(e,t,a,l){var n=pe();l=l===void 0?null:l;var i=n.memoizedState.inst;ee!==null&&l!==null&&Tu(l,ee.memoizedState.deps)?n.memoizedState=xl(t,i,a,l):(q.flags|=e,n.memoizedState=xl(1|t,i,a,l))}function Zr(e,t){si(8390656,8,e,t)}function Mu(e,t){ic(2048,8,e,t)}function Wh(e){q.flags|=4;var t=q.updateQueue;if(t===null)t=lc(),q.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function fd(e){var t=pe().memoizedState;return Wh({ref:t,nextImpl:e}),function(){if(W&2)throw Error(T(440));return t.impl.apply(void 0,arguments)}}function dd(e,t){return ic(4,2,e,t)}function md(e,t){return ic(4,4,e,t)}function gd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hd(e,t,a){a=a!=null?a.concat([e]):null,ic(4,4,gd.bind(null,t,e),a)}function _u(){}function pd(e,t){var a=pe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Tu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function yd(e,t){var a=pe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Tu(t,l[1]))return l[0];if(l=e(),Ha){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[l,t],l}function ku(e,t,a){return a===void 0||Xt&1073741824&&!(V&261930)?e.memoizedState=t:(e.memoizedState=a,e=im(),q.lanes|=e,xa|=e,a)}function vd(e,t,a,l){return nt(a,t)?a:bl.current!==null?(e=ku(e,a,l),nt(e,t)||(xe=!0),e):!(Xt&42)||Xt&1073741824&&!(V&261930)?(xe=!0,e.memoizedState=a):(e=im(),q.lanes|=e,xa|=e,t)}function bd(e,t,a,l,n){var i=$.p;$.p=i!==0&&8>i?i:8;var s=L.T,u={};L.T=u,Uu(e,!1,t,a);try{var r=n(),d=L.S;if(d!==null&&d(u,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var h=Qh(r,l);an(e,t,h,lt(e))}else an(e,t,l,lt(e))}catch(v){an(e,t,{then:function(){},status:"rejected",reason:v},lt())}finally{$.p=i,s!==null&&u.types!==null&&(s.types=u.types),L.T=s}}function $h(){}function Os(e,t,a,l){if(e.tag!==5)throw Error(T(476));var n=xd(e).queue;bd(e,n,t,za,a===null?$h:function(){return Nd(e),a(l)})}function xd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:za,baseState:za,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:za},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nd(e){var t=xd(e);t.next===null&&(t=e.alternate.memoizedState),an(e,t.next.queue,{},lt())}function Ru(){return ke(xn)}function Sd(){return pe().memoizedState}function jd(){return pe().memoizedState}function Fh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=lt();e=oa(a);var l=fa(t,e,a);l!==null&&(Ke(l,t,a),Pl(l,t,a)),t={cache:xu()},e.payload=t;return}t=t.return}}function Ih(e,t,a){var l=lt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cc(e)?Td(t,a):(a=pu(e,t,a,l),a!==null&&(Ke(a,e,l),Ed(a,t,l)))}function Ad(e,t,a){var l=lt();an(e,t,a,l)}function an(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cc(e))Td(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,u=i(s,a);if(n.hasEagerState=!0,n.eagerState=u,nt(u,s))return tc(e,t,n,0),te===null&&ec(),!1}catch{}finally{}if(a=pu(e,t,n,l),a!==null)return Ke(a,e,l),Ed(a,t,l),!0}return!1}function Uu(e,t,a,l){if(l={lane:2,revertLane:Zu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},cc(e)){if(t)throw Error(T(479))}else t=pu(e,a,l,2),t!==null&&Ke(t,e,2)}function cc(e){var t=e.alternate;return e===q||t!==null&&t===q}function Td(e,t){dl=Di=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ed(e,t,a){if(a&4194048){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ff(e,a)}}var yn={readContext:ke,use:nc,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me};yn.useEffectEvent=me;var Dd={readContext:ke,use:nc,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:Zr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,si(4194308,4,gd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){si(4,2,e,t)},useMemo:function(e,t){var a=Be();t=t===void 0?null:t;var l=e();if(Ha){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Be();if(a!==void 0){var n=a(t);if(Ha){la(!0);try{a(t)}finally{la(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Ih.bind(null,q,e),[l.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:function(e){e=zs(e);var t=e.queue,a=Ad.bind(null,q,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:_u,useDeferredValue:function(e,t){var a=Be();return ku(a,e,t)},useTransition:function(){var e=zs(!1);return e=bd.bind(null,q,e.queue,!0,!1),Be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=q,n=Be();if(K){if(a===void 0)throw Error(T(407));a=a()}else{if(a=t(),te===null)throw Error(T(349));V&127||ed(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Zr(ad.bind(null,l,i,e),[e]),l.flags|=2048,xl(9,{destroy:void 0},td.bind(null,l,i,a,t),null),a},useId:function(){var e=Be(),t=te.identifierPrefix;if(K){var a=St,l=Nt;a=(l&~(1<<32-at(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ci++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Zh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ru,useFormState:qr,useActionState:qr,useOptimistic:function(e){var t=Be();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Uu.bind(null,q,!0,a),a.dispatch=t,[e,t]},useMemoCache:wu,useCacheRefresh:function(){return Be().memoizedState=Fh.bind(null,q)},useEffectEvent:function(e){var t=Be(),a={impl:e};return t.memoizedState=a,function(){if(W&2)throw Error(T(440));return a.impl.apply(void 0,arguments)}}},Hu={readContext:ke,use:nc,useCallback:pd,useContext:ke,useEffect:Mu,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:md,useMemo:yd,useReducer:ci,useRef:od,useState:function(){return ci(Qt)},useDebugValue:_u,useDeferredValue:function(e,t){var a=pe();return vd(a,ee.memoizedState,e,t)},useTransition:function(){var e=ci(Qt)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:wn(e),t]},useSyncExternalStore:Pf,useId:Sd,useHostTransitionStatus:Ru,useFormState:Xr,useActionState:Xr,useOptimistic:function(e,t){var a=pe();return id(a,ee,e,t)},useMemoCache:wu,useCacheRefresh:jd};Hu.useEffectEvent=fd;var Cd={readContext:ke,use:nc,useCallback:pd,useContext:ke,useEffect:Mu,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:md,useMemo:yd,useReducer:kc,useRef:od,useState:function(){return kc(Qt)},useDebugValue:_u,useDeferredValue:function(e,t){var a=pe();return ee===null?ku(a,e,t):vd(a,ee.memoizedState,e,t)},useTransition:function(){var e=kc(Qt)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:wn(e),t]},useSyncExternalStore:Pf,useId:Sd,useHostTransitionStatus:Ru,useFormState:Qr,useActionState:Qr,useOptimistic:function(e,t){var a=pe();return ee!==null?id(a,ee,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wu,useCacheRefresh:jd};Cd.useEffectEvent=fd;function Rc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:ue({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ms={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=lt(),n=oa(l);n.payload=t,a!=null&&(n.callback=a),t=fa(e,n,l),t!==null&&(Ke(t,e,l),Pl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=lt(),n=oa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=fa(e,n,l),t!==null&&(Ke(t,e,l),Pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=lt(),l=oa(a);l.tag=2,t!=null&&(l.callback=t),t=fa(e,l,a),t!==null&&(Ke(t,e,a),Pl(t,e,a))}};function Vr(e,t,a,l,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,s):t.prototype&&t.prototype.isPureReactComponent?!dn(a,l)||!dn(n,i):!0}function Kr(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ms.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=ue({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function zd(e){xi(e)}function wd(e){console.error(e)}function Od(e){xi(e)}function zi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Jr(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function _s(e,t,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){zi(e,t)},a}function Md(e){return e=oa(e),e.tag=3,e}function _d(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Jr(t,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Jr(t,a,l),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Ph(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&zl(t,a,n,!0),a=it.current,a!==null){switch(a.tag){case 31:case 13:return mt===null?ki():a.alternate===null&&ge===0&&(ge=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ai?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Vc(e,l,n)),!1;case 22:return a.flags|=65536,l===Ai?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Vc(e,l,n)),!1}throw Error(T(435,a.tag))}return Vc(e,l,n),ki(),!1}if(K)return t=it.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==xs&&(e=Error(T(422),{cause:l}),gn(ft(e,a)))):(l!==xs&&(t=Error(T(423),{cause:l}),gn(ft(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ft(l,a),n=_s(e.stateNode,l,n),_c(e,n),ge!==4&&(ge=2)),!1;var i=Error(T(520),{cause:l});if(i=ft(i,a),cn===null?cn=[i]:cn.push(i),ge!==4&&(ge=2),t===null)return!0;l=ft(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=_s(a.stateNode,l,e),_c(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Md(n),_d(n,e,a,l),_c(a,n),!1}a=a.return}while(a!==null);return!1}var Bu=Error(T(461)),xe=!1;function Oe(e,t,a,l){t.child=e===null?Kf(t,null,a,l):Ua(t,e.child,a,l)}function Wr(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var s={};for(var u in l)u!=="ref"&&(s[u]=l[u])}else s=l;return Ra(t),l=Eu(e,t,a,s,i,n),u=Du(),e!==null&&!xe?(Cu(e,t,n),Zt(e,t,n)):(K&&u&&vu(t),t.flags|=1,Oe(e,t,l,n),t.child)}function $r(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!yu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,kd(e,t,i,l,n)):(e=ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Gu(e,n)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:dn,a(s,l)&&e.ref===t.ref)return Zt(e,t,n)}return t.flags|=1,e=Gt(i,l),e.ref=t.ref,e.return=t,t.child=e}function kd(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(dn(i,l)&&e.ref===t.ref)if(xe=!1,t.pendingProps=l=i,Gu(e,n))e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,Zt(e,t,n)}return ks(e,t,a,l,n)}function Rd(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Fr(e,t,i,a,l)}if(a&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,i!==null?i.cachePool:null),i!==null?Gr(t,i):Ds(),$f(t);else return l=t.lanes=536870912,Fr(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ii(t,i.cachePool),Gr(t,i),ta(),t.memoizedState=null):(e!==null&&ii(t,null),Ds(),ta());return Oe(e,t,n,a),t.child}function Zl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fr(e,t,a,l,n){var i=Nu();return i=i===null?null:{parent:be._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ii(t,null),Ds(),$f(t),e!==null&&zl(e,t,l,!0),t.childLanes=n,null}function ui(e,t){return t=wi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ir(e,t,a){return Ua(t,e.child,null,a),e=ui(t,t.pendingProps),e.flags|=2,Fe(t),t.memoizedState=null,e}function ep(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(K){if(l.mode==="hidden")return e=ui(t,l),t.lanes=536870912,Zl(null,e);if(Cs(t),(e=ce)?(e=Dm(e,dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Nt,overflow:St}:null,retryLane:536870912,hydrationErrors:null},a=Lf(e),a.return=t,t.child=a,_e=t,ce=null)):e=null,e===null)throw va(t);return t.lanes=536870912,null}return ui(t,l)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(Cs(t),n)if(t.flags&256)t.flags&=-257,t=Ir(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(T(558));else if(xe||zl(e,t,a,!1),n=(a&e.childLanes)!==0,xe||n){if(l=te,l!==null&&(s=df(l,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,qa(e,s),Ke(l,e,s),Bu;ki(),t=Ir(e,t,a)}else e=i.treeContext,ce=gt(s.nextSibling),_e=t,K=!0,ra=null,dt=!1,e!==null&&qf(t,e),t=ui(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ri(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(T(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ks(e,t,a,l,n){return Ra(t),a=Eu(e,t,a,l,void 0,n),l=Du(),e!==null&&!xe?(Cu(e,t,n),Zt(e,t,n)):(K&&l&&vu(t),t.flags|=1,Oe(e,t,a,n),t.child)}function Pr(e,t,a,l,n,i){return Ra(t),t.updateQueue=null,a=If(t,l,a,n),Ff(e),l=Du(),e!==null&&!xe?(Cu(e,t,i),Zt(e,t,i)):(K&&l&&vu(t),t.flags|=1,Oe(e,t,a,i),t.child)}function eo(e,t,a,l,n){if(Ra(t),t.stateNode===null){var i=ll,s=a.contextType;typeof s=="object"&&s!==null&&(i=ke(s)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ms,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ju(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?ke(s):ll,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Rc(t,a,s,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Ms.enqueueReplaceState(i,i.state,null),tn(t,l,i,n),en(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,r=Ba(a,u);i.props=r;var d=i.context,h=a.contextType;s=ll,typeof h=="object"&&h!==null&&(s=ke(h));var v=a.getDerivedStateFromProps;h=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||d!==s)&&Kr(t,i,l,s),It=!1;var m=t.memoizedState;i.state=m,tn(t,l,i,n),en(),d=t.memoizedState,u||m!==d||It?(typeof v=="function"&&(Rc(t,a,v,l),d=t.memoizedState),(r=It||Vr(t,a,r,l,m,d,s))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=d),i.props=l,i.state=d,i.context=s,l=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Ts(e,t),s=t.memoizedProps,h=Ba(a,s),i.props=h,v=t.pendingProps,m=i.context,d=a.contextType,r=ll,typeof d=="object"&&d!==null&&(r=ke(d)),u=a.getDerivedStateFromProps,(d=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==v||m!==r)&&Kr(t,i,l,r),It=!1,m=t.memoizedState,i.state=m,tn(t,l,i,n),en();var y=t.memoizedState;s!==v||m!==y||It||e!==null&&e.dependencies!==null&&ji(e.dependencies)?(typeof u=="function"&&(Rc(t,a,u,l),y=t.memoizedState),(h=It||Vr(t,a,h,l,m,y,r)||e!==null&&e.dependencies!==null&&ji(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,y,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,y,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=y),i.props=l,i.state=y,i.context=r,l=h):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ri(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ua(t,e.child,null,n),t.child=Ua(t,null,a,n)):Oe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Zt(e,t,n),e}function to(e,t,a,l){return ka(),t.flags|=256,Oe(e,t,a,l),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:Qf()}}function Bc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Pe),e}function Ud(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(he.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(K){if(n?ea(t):ta(),(e=ce)?(e=Dm(e,dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Nt,overflow:St}:null,retryLane:536870912,hydrationErrors:null},a=Lf(e),a.return=t,t.child=a,_e=t,ce=null)):e=null,e===null)throw va(t);return Js(e)?t.lanes=32:t.lanes=536870912,null}var u=l.children;return l=l.fallback,n?(ta(),n=t.mode,u=wi({mode:"hidden",children:u},n),l=wa(l,n,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,l=t.child,l.memoizedState=Hc(a),l.childLanes=Bc(e,s,a),t.memoizedState=Uc,Zl(null,l)):(ea(t),Rs(t,u))}var r=e.memoizedState;if(r!==null&&(u=r.dehydrated,u!==null)){if(i)t.flags&256?(ea(t),t.flags&=-257,t=Gc(e,t,a)):t.memoizedState!==null?(ta(),t.child=e.child,t.flags|=128,t=null):(ta(),u=l.fallback,n=t.mode,l=wi({mode:"visible",children:l.children},n),u=wa(u,n,a,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,Ua(t,e.child,null,a),l=t.child,l.memoizedState=Hc(a),l.childLanes=Bc(e,s,a),t.memoizedState=Uc,t=Zl(null,l));else if(ea(t),Js(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var d=s.dgst;s=d,l=Error(T(419)),l.stack="",l.digest=s,gn({value:l,source:null,stack:null}),t=Gc(e,t,a)}else if(xe||zl(e,t,a,!1),s=(a&e.childLanes)!==0,xe||s){if(s=te,s!==null&&(l=df(s,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,qa(e,l),Ke(s,e,l),Bu;Ks(u)||ki(),t=Gc(e,t,a)}else Ks(u)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,ce=gt(u.nextSibling),_e=t,K=!0,ra=null,dt=!1,e!==null&&qf(t,e),t=Rs(t,l.children),t.flags|=4096);return t}return n?(ta(),u=l.fallback,n=t.mode,r=e.child,d=r.sibling,l=Gt(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,d!==null?u=Gt(d,u):(u=wa(u,n,a,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,Zl(null,l),l=t.child,u=e.child.memoizedState,u===null?u=Hc(a):(n=u.cachePool,n!==null?(r=be._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Qf(),u={baseLanes:u.baseLanes|a,cachePool:n}),l.memoizedState=u,l.childLanes=Bc(e,s,a),t.memoizedState=Uc,Zl(e.child,l)):(ea(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Rs(e,t){return t=wi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wi(e,t){return e=Ie(22,e,null,t),e.lanes=0,e}function Gc(e,t,a){return Ua(t,e.child,null,a),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ao(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ss(e.return,t,a)}function Lc(e,t,a,l,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=a,s.tailMode=n,s.treeForkCount=i)}function Hd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var s=he.current,u=(s&2)!==0;if(u?(s=s&1|2,t.flags|=128):s&=1,ne(he,s),Oe(e,t,l,a),l=K?mn:0,!u&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ao(e,a,t);else if(e.tag===19)ao(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ei(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Lc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Lc(t,!0,a,null,i,l);break;case"together":Lc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Zt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),xa|=t.lanes,!(a&t.childLanes))if(e!==null){if(zl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Gu(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&ji(e)))}function tp(e,t,a){switch(t.tag){case 3:pi(t,t.stateNode.containerInfo),Pt(t,be,e.memoizedState.cache),ka();break;case 27:case 5:rs(t);break;case 4:pi(t,t.stateNode.containerInfo);break;case 10:Pt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Cs(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ea(t),t.flags|=128,null):a&t.child.childLanes?Ud(e,t,a):(ea(t),e=Zt(e,t,a),e!==null?e.sibling:null);ea(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(zl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Hd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ne(he,he.current),l)break;return null;case 22:return t.lanes=0,Rd(e,t,a,t.pendingProps);case 24:Pt(t,be,e.memoizedState.cache)}return Zt(e,t,a)}function Bd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)xe=!0;else{if(!Gu(e,a)&&!(t.flags&128))return xe=!1,tp(e,t,a);xe=!!(e.flags&131072)}else xe=!1,K&&t.flags&1048576&&Yf(t,mn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e=="function")yu(e)?(l=Ba(e,l),t.tag=1,t=eo(null,t,e,l,a)):(t.tag=0,t=ks(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===lu){t.tag=11,t=Wr(null,t,e,l,a);break e}else if(n===nu){t.tag=14,t=$r(null,t,e,l,a);break e}}throw t=ss(e)||e,Error(T(306,t,""))}}return t;case 0:return ks(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ba(l,t.pendingProps),eo(e,t,l,n,a);case 3:e:{if(pi(t,t.stateNode.containerInfo),e===null)throw Error(T(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Ts(e,t),tn(t,l,null,a);var s=t.memoizedState;if(l=s.cache,Pt(t,be,l),l!==i.cache&&js(t,[be],a,!0),en(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=to(e,t,l,a);break e}else if(l!==n){n=ft(Error(T(424)),t),gn(n),t=to(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ce=gt(e.firstChild),_e=t,K=!0,ra=null,dt=!0,a=Kf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ka(),l===n){t=Zt(e,t,a);break e}Oe(e,t,l,a)}t=t.child}return t;case 26:return ri(e,t),e===null?(a=jo(t.type,null,t.pendingProps,null))?t.memoizedState=a:K||(a=t.type,e=t.pendingProps,l=Bi(ua.current).createElement(a),l[Me]=t,l[Je]=e,Re(l,a,e),Ee(l),t.stateNode=l):t.memoizedState=jo(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rs(t),e===null&&K&&(l=t.stateNode=Cm(t.type,t.pendingProps,ua.current),_e=t,dt=!0,n=ce,Sa(t.type)?(Ws=n,ce=gt(l.firstChild)):ce=n),Oe(e,t,t.pendingProps.children,a),ri(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((n=l=ce)&&(l=Op(l,t.type,t.pendingProps,dt),l!==null?(t.stateNode=l,_e=t,ce=gt(l.firstChild),dt=!1,n=!0):n=!1),n||va(t)),rs(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Zs(n,i)?l=null:s!==null&&Zs(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=Eu(e,t,Vh,null,null,a),xn._currentValue=n),ri(e,t),Oe(e,t,l,a),t.child;case 6:return e===null&&K&&((e=a=ce)&&(a=Mp(a,t.pendingProps,dt),a!==null?(t.stateNode=a,_e=t,ce=null,e=!0):e=!1),e||va(t)),null;case 13:return Ud(e,t,a);case 4:return pi(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ua(t,null,l,a):Oe(e,t,l,a),t.child;case 11:return Wr(e,t,t.type,t.pendingProps,a);case 7:return Oe(e,t,t.pendingProps,a),t.child;case 8:return Oe(e,t,t.pendingProps.children,a),t.child;case 12:return Oe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Pt(t,t.type,l.value),Oe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ra(t),n=ke(n),l=l(n),t.flags|=1,Oe(e,t,l,a),t.child;case 14:return $r(e,t,t.type,t.pendingProps,a);case 15:return kd(e,t,t.type,t.pendingProps,a);case 19:return Hd(e,t,a);case 31:return ep(e,t,a);case 22:return Rd(e,t,a,t.pendingProps);case 24:return Ra(t),l=ke(be),e===null?(n=Nu(),n===null&&(n=te,i=xu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ju(t),Pt(t,be,n)):(e.lanes&a&&(Ts(e,t),tn(t,null,null,a),en()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Pt(t,be,l)):(l=i.cache,Pt(t,be,l),l!==n.cache&&js(t,[be],a,!0))),Oe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(T(156,t.tag))}function zt(e){e.flags|=4}function Yc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(um())e.flags|=8192;else throw Ma=Ai,Su}else e.flags&=-16777217}function lo(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Om(t))if(um())e.flags|=8192;else throw Ma=Ai,Su}function Kn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?rf():536870912,e.lanes|=t,Nl|=t)}function Gl(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function ap(e,t,a){var l=t.pendingProps;switch(bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ie(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Lt(be),hl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qa(t)?zt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mc())),ie(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(zt(t),i!==null?(ie(t),lo(t,i)):(ie(t),Yc(t,n,null,l,a))):i?i!==e.memoizedState?(zt(t),ie(t),lo(t,i)):(ie(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&zt(t),ie(t),Yc(t,n,e,l,a)),null;case 27:if(yi(t),a=ua.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(!l){if(t.stateNode===null)throw Error(T(166));return ie(t),null}e=At.current,Qa(t)?Mr(t):(e=Cm(n,l,a),t.stateNode=e,zt(t))}return ie(t),null;case 5:if(yi(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(!l){if(t.stateNode===null)throw Error(T(166));return ie(t),null}if(i=At.current,Qa(t))Mr(t);else{var s=Bi(ua.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?s.createElement(n,{is:l.is}):s.createElement(n)}}i[Me]=t,i[Je]=l;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(Re(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&zt(t)}}return ie(t),Yc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(T(166));if(e=ua.current,Qa(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=_e,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Me]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Am(e.nodeValue,a)),e||va(t,!0)}else e=Bi(e).createTextNode(l),e[Me]=t,t.stateNode=e}return ie(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Qa(t),a!==null){if(e===null){if(!l)throw Error(T(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(557));e[Me]=t}else ka(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),e=!1}else a=Mc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Fe(t),t):(Fe(t),null);if(t.flags&128)throw Error(T(558))}return ie(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Qa(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(T(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(T(317));n[Me]=t}else ka(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),n=!1}else n=Mc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Fe(t),t):(Fe(t),null)}return Fe(t),t.flags&128?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Kn(t,t.updateQueue),ie(t),null);case 4:return hl(),e===null&&Vu(t.stateNode.containerInfo),ie(t),null;case 10:return Lt(t.type),ie(t),null;case 19:if(De(he),l=t.memoizedState,l===null)return ie(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Gl(l,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ei(e),i!==null){for(t.flags|=128,Gl(l,!1),e=i.updateQueue,t.updateQueue=e,Kn(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Gf(a,e),a=a.sibling;return ne(he,he.current&1|2),K&&_t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&et()>Mi&&(t.flags|=128,n=!0,Gl(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Kn(t,e),Gl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!K)return ie(t),null}else 2*et()-l.renderingStartTime>Mi&&a!==536870912&&(t.flags|=128,n=!0,Gl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=et(),e.sibling=null,a=he.current,ne(he,n?a&1|2:a&1),K&&_t(t,l.treeForkCount),e):(ie(t),null);case 22:case 23:return Fe(t),Au(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?a&536870912&&!(t.flags&128)&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),a=t.updateQueue,a!==null&&Kn(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&De(Oa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Lt(be),ie(t),null;case 25:return null;case 30:return null}throw Error(T(156,t.tag))}function lp(e,t){switch(bu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lt(be),hl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yi(t),null;case 31:if(t.memoizedState!==null){if(Fe(t),t.alternate===null)throw Error(T(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Fe(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(he),null;case 4:return hl(),null;case 10:return Lt(t.type),null;case 22:case 23:return Fe(t),Au(),e!==null&&De(Oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Lt(be),null;case 25:return null;default:return null}}function Gd(e,t){switch(bu(t),t.tag){case 3:Lt(be),hl();break;case 26:case 27:case 5:yi(t);break;case 4:hl();break;case 31:t.memoizedState!==null&&Fe(t);break;case 13:Fe(t);break;case 19:De(he);break;case 10:Lt(t.type);break;case 22:case 23:Fe(t),Au(),e!==null&&De(Oa);break;case 24:Lt(be)}}function On(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,s=a.inst;l=i(),s.destroy=l}a=a.next}while(a!==n)}}catch(u){I(t,t.return,u)}}function ba(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var s=l.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,n=t;var r=a,d=u;try{d()}catch(h){I(n,r,h)}}}l=l.next}while(l!==i)}}catch(h){I(t,t.return,h)}}function Ld(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Wf(t,a)}catch(l){I(e,e.return,l)}}}function Yd(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){I(e,t,l)}}function ln(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){I(e,t,n)}}function jt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){I(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){I(e,t,n)}else a.current=null}function qd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){I(e,e.return,n)}}function qc(e,t,a){try{var l=e.stateNode;Tp(l,e.type,a,t),l[Je]=t}catch(n){I(e,e.return,n)}}function Xd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Us(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ht));else if(l!==4&&(l===27&&Sa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Us(e,t,a),e=e.sibling;e!==null;)Us(e,t,a),e=e.sibling}function Oi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Sa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Oi(e,t,a),e=e.sibling;e!==null;)Oi(e,t,a),e=e.sibling}function Qd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Re(t,l,a),t[Me]=e,t[Je]=a}catch(i){I(e,e.return,i)}}var Rt=!1,ve=!1,Qc=!1,no=typeof WeakSet=="function"?WeakSet:Set,Te=null;function np(e,t){if(e=e.containerInfo,Xs=qi,e=Of(e),gu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,u=-1,r=-1,d=0,h=0,v=e,m=null;t:for(;;){for(var y;v!==a||n!==0&&v.nodeType!==3||(u=s+n),v!==i||l!==0&&v.nodeType!==3||(r=s+l),v.nodeType===3&&(s+=v.nodeValue.length),(y=v.firstChild)!==null;)m=v,v=y;for(;;){if(v===e)break t;if(m===a&&++d===n&&(u=s),m===i&&++h===l&&(r=s),(y=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=y}a=u===-1||r===-1?null:{start:u,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qs={focusedElem:e,selectionRange:a},qi=!1,Te=t;Te!==null;)if(t=Te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Te=e;else for(;Te!==null;){switch(t=Te,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var b=Ba(a.type,n);e=l.getSnapshotBeforeUpdate(b,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(S){I(a,a.return,S)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(T(163))}if(e=t.sibling,e!==null){e.return=t.return,Te=e;break}Te=t.return}}function Zd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ot(e,a),l&4&&On(5,a);break;case 1:if(Ot(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){I(a,a.return,s)}else{var n=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){I(a,a.return,s)}}l&64&&Ld(a),l&512&&ln(a,a.return);break;case 3:if(Ot(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Wf(e,t)}catch(s){I(a,a.return,s)}}break;case 27:t===null&&l&4&&Qd(a);case 26:case 5:Ot(e,a),t===null&&l&4&&qd(a),l&512&&ln(a,a.return);break;case 12:Ot(e,a);break;case 31:Ot(e,a),l&4&&Jd(e,a);break;case 13:Ot(e,a),l&4&&Wd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=mp.bind(null,a),_p(e,a))));break;case 22:if(l=a.memoizedState!==null||Rt,!l){t=t!==null&&t.memoizedState!==null||ve,n=Rt;var i=ve;Rt=l,(ve=t)&&!i?Mt(e,a,(a.subtreeFlags&8772)!==0):Ot(e,a),Rt=n,ve=i}break;case 30:break;default:Ot(e,a)}}function Vd(e){var t=e.alternate;t!==null&&(e.alternate=null,Vd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&uu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var oe=null,Qe=!1;function wt(e,t,a){for(a=a.child;a!==null;)Kd(e,t,a),a=a.sibling}function Kd(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(An,a)}catch{}switch(a.tag){case 26:ve||jt(a,t),wt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ve||jt(a,t);var l=oe,n=Qe;Sa(a.type)&&(oe=a.stateNode,Qe=!1),wt(e,t,a),un(a.stateNode),oe=l,Qe=n;break;case 5:ve||jt(a,t);case 6:if(l=oe,n=Qe,oe=null,wt(e,t,a),oe=l,Qe=n,oe!==null)if(Qe)try{(oe.nodeType===9?oe.body:oe.nodeName==="HTML"?oe.ownerDocument.body:oe).removeChild(a.stateNode)}catch(i){I(a,t,i)}else try{oe.removeChild(a.stateNode)}catch(i){I(a,t,i)}break;case 18:oe!==null&&(Qe?(e=oe,vo(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tl(e)):vo(oe,a.stateNode));break;case 4:l=oe,n=Qe,oe=a.stateNode.containerInfo,Qe=!0,wt(e,t,a),oe=l,Qe=n;break;case 0:case 11:case 14:case 15:ba(2,a,t),ve||ba(4,a,t),wt(e,t,a);break;case 1:ve||(jt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Yd(a,t,l)),wt(e,t,a);break;case 21:wt(e,t,a);break;case 22:ve=(l=ve)||a.memoizedState!==null,wt(e,t,a),ve=l;break;default:wt(e,t,a)}}function Jd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tl(e)}catch(a){I(t,t.return,a)}}}function Wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tl(e)}catch(a){I(t,t.return,a)}}function ip(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new no),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new no),t;default:throw Error(T(435,e.tag))}}function Jn(e,t){var a=ip(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=gp.bind(null,e,l);l.then(n,n)}})}function qe(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(Sa(u.type)){oe=u.stateNode,Qe=!1;break e}break;case 5:oe=u.stateNode,Qe=!1;break e;case 3:case 4:oe=u.stateNode.containerInfo,Qe=!0;break e}u=u.return}if(oe===null)throw Error(T(160));Kd(i,s,n),oe=null,Qe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$d(t,e),t=t.sibling}var yt=null;function $d(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qe(t,e),Xe(e),l&4&&(ba(3,e,e.return),On(3,e),ba(5,e,e.return));break;case 1:qe(t,e),Xe(e),l&512&&(ve||a===null||jt(a,a.return)),l&64&&Rt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=yt;if(qe(t,e),Xe(e),l&512&&(ve||a===null||jt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Dn]||i[Me]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Re(i,l,a),i[Me]=e,Ee(i),l=i;break e;case"link":var s=To("link","href",n).get(l+(a.href||""));if(s){for(var u=0;u<s.length;u++)if(i=s[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(u,1);break t}}i=n.createElement(l),Re(i,l,a),n.head.appendChild(i);break;case"meta":if(s=To("meta","content",n).get(l+(a.content||""))){for(u=0;u<s.length;u++)if(i=s[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(u,1);break t}}i=n.createElement(l),Re(i,l,a),n.head.appendChild(i);break;default:throw Error(T(468,l))}i[Me]=e,Ee(i),l=i}e.stateNode=l}else Eo(n,e.type,e.stateNode);else e.stateNode=Ao(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Eo(n,e.type,e.stateNode):Ao(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&qc(e,e.memoizedProps,a.memoizedProps)}break;case 27:qe(t,e),Xe(e),l&512&&(ve||a===null||jt(a,a.return)),a!==null&&l&4&&qc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qe(t,e),Xe(e),l&512&&(ve||a===null||jt(a,a.return)),e.flags&32){n=e.stateNode;try{yl(n,"")}catch(b){I(e,e.return,b)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,qc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Qc=!0);break;case 6:if(qe(t,e),Xe(e),l&4){if(e.stateNode===null)throw Error(T(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(b){I(e,e.return,b)}}break;case 3:if(di=null,n=yt,yt=Gi(t.containerInfo),qe(t,e),yt=n,Xe(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Tl(t.containerInfo)}catch(b){I(e,e.return,b)}Qc&&(Qc=!1,Fd(e));break;case 4:l=yt,yt=Gi(e.stateNode.containerInfo),qe(t,e),Xe(e),yt=l;break;case 12:qe(t,e),Xe(e);break;case 31:qe(t,e),Xe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Jn(e,l)));break;case 13:qe(t,e),Xe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(sc=et()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Jn(e,l)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,d=Rt,h=ve;if(Rt=d||n,ve=h||r,qe(t,e),ve=h,Rt=d,Xe(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||r||Rt||ve||Ca(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(i=r.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=r.stateNode;var v=r.memoizedProps.style,m=v!=null&&v.hasOwnProperty("display")?v.display:null;u.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(b){I(r,r.return,b)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(b){I(r,r.return,b)}}}else if(t.tag===18){if(a===null){r=t;try{var y=r.stateNode;n?bo(y,!0):bo(r.stateNode,!1)}catch(b){I(r,r.return,b)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Jn(e,a))));break;case 19:qe(t,e),Xe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Jn(e,l)));break;case 30:break;case 21:break;default:qe(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Xd(l)){a=l;break}l=l.return}if(a==null)throw Error(T(160));switch(a.tag){case 27:var n=a.stateNode,i=Xc(e);Oi(e,i,n);break;case 5:var s=a.stateNode;a.flags&32&&(yl(s,""),a.flags&=-33);var u=Xc(e);Oi(e,u,s);break;case 3:case 4:var r=a.stateNode.containerInfo,d=Xc(e);Us(e,d,r);break;default:throw Error(T(161))}}catch(h){I(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ot(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zd(e,t.alternate,t),t=t.sibling}function Ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ba(4,t,t.return),Ca(t);break;case 1:jt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Yd(t,t.return,a),Ca(t);break;case 27:un(t.stateNode);case 26:case 5:jt(t,t.return),Ca(t);break;case 22:t.memoizedState===null&&Ca(t);break;case 30:Ca(t);break;default:Ca(t)}e=e.sibling}}function Mt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:Mt(n,i,a),On(4,i);break;case 1:if(Mt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){I(l,l.return,d)}if(l=i,n=l.updateQueue,n!==null){var u=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Jf(r[n],u)}catch(d){I(l,l.return,d)}}a&&s&64&&Ld(i),ln(i,i.return);break;case 27:Qd(i);case 26:case 5:Mt(n,i,a),a&&l===null&&s&4&&qd(i),ln(i,i.return);break;case 12:Mt(n,i,a);break;case 31:Mt(n,i,a),a&&s&4&&Jd(n,i);break;case 13:Mt(n,i,a),a&&s&4&&Wd(n,i);break;case 22:i.memoizedState===null&&Mt(n,i,a),ln(i,i.return);break;case 30:break;default:Mt(n,i,a)}t=t.sibling}}function Lu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&zn(a))}function Yu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zn(e))}function pt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Id(e,t,a,l),t=t.sibling}function Id(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:pt(e,t,a,l),n&2048&&On(9,t);break;case 1:pt(e,t,a,l);break;case 3:pt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zn(e)));break;case 12:if(n&2048){pt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,u=i.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){I(t,t.return,r)}}else pt(e,t,a,l);break;case 31:pt(e,t,a,l);break;case 13:pt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?pt(e,t,a,l):nn(e,t):i._visibility&2?pt(e,t,a,l):(i._visibility|=2,Ka(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Lu(s,t);break;case 24:pt(e,t,a,l),n&2048&&Yu(t.alternate,t);break;default:pt(e,t,a,l)}}function Ka(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,u=a,r=l,d=s.flags;switch(s.tag){case 0:case 11:case 15:Ka(i,s,u,r,n),On(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?Ka(i,s,u,r,n):nn(i,s):(h._visibility|=2,Ka(i,s,u,r,n)),n&&d&2048&&Lu(s.alternate,s);break;case 24:Ka(i,s,u,r,n),n&&d&2048&&Yu(s.alternate,s);break;default:Ka(i,s,u,r,n)}t=t.sibling}}function nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:nn(a,l),n&2048&&Lu(l.alternate,l);break;case 24:nn(a,l),n&2048&&Yu(l.alternate,l);break;default:nn(a,l)}t=t.sibling}}var Vl=8192;function Za(e,t,a){if(e.subtreeFlags&Vl)for(e=e.child;e!==null;)Pd(e,t,a),e=e.sibling}function Pd(e,t,a){switch(e.tag){case 26:Za(e,t,a),e.flags&Vl&&e.memoizedState!==null&&Zp(a,yt,e.memoizedState,e.memoizedProps);break;case 5:Za(e,t,a);break;case 3:case 4:var l=yt;yt=Gi(e.stateNode.containerInfo),Za(e,t,a),yt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Vl,Vl=16777216,Za(e,t,a),Vl=l):Za(e,t,a));break;default:Za(e,t,a)}}function em(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Te=l,am(l,e)}em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tm(e),e=e.sibling}function tm(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&ba(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,oi(e)):Ll(e);break;default:Ll(e)}}function oi(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Te=l,am(l,e)}em(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ba(8,t,t.return),oi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,oi(t));break;default:oi(t)}e=e.sibling}}function am(e,t){for(;Te!==null;){var a=Te;switch(a.tag){case 0:case 11:case 15:ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Te=l;else e:for(a=e;Te!==null;){l=Te;var n=l.sibling,i=l.return;if(Vd(l),l===a){Te=null;break e}if(n!==null){n.return=i,Te=n;break e}Te=i}}}var cp={getCacheForType:function(e){var t=ke(be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ke(be).controller.signal}},sp=typeof WeakMap=="function"?WeakMap:Map,W=0,te=null,Z=null,V=0,F=0,$e=null,ia=!1,Ol=!1,qu=!1,Vt=0,ge=0,xa=0,_a=0,Xu=0,Pe=0,Nl=0,cn=null,Ze=null,Hs=!1,sc=0,lm=0,Mi=1/0,_i=null,da=null,Ne=0,ma=null,Sl=null,Yt=0,Bs=0,Gs=null,nm=null,sn=0,Ls=null;function lt(){return W&2&&V!==0?V&-V:L.T!==null?Zu():mf()}function im(){if(Pe===0)if(!(V&536870912)||K){var e=Ln;Ln<<=1,!(Ln&3932160)&&(Ln=262144),Pe=e}else Pe=536870912;return e=it.current,e!==null&&(e.flags|=32),Pe}function Ke(e,t,a){(e===te&&(F===2||F===9)||e.cancelPendingCommit!==null)&&(jl(e,0),ca(e,V,Pe,!1)),En(e,a),(!(W&2)||e!==te)&&(e===te&&(!(W&2)&&(_a|=a),ge===4&&ca(e,V,Pe,!1)),Dt(e))}function cm(e,t,a){if(W&6)throw Error(T(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Tn(e,t),n=l?op(e,t):Zc(e,t,!0),i=l;do{if(n===0){Ol&&!l&&ca(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!up(a)){n=Zc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var u=e;n=cn;var r=u.current.memoizedState.isDehydrated;if(r&&(jl(u,s).flags|=256),s=Zc(u,s,!1),s!==2){if(qu&&!r){u.errorRecoveryDisabledLanes|=i,_a|=i,n=4;break e}i=Ze,Ze=n,i!==null&&(Ze===null?Ze=i:Ze.push.apply(Ze,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){jl(e,0),ca(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(T(345));case 4:if((t&4194048)!==t)break;case 6:ca(l,t,Pe,!ia);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(T(329))}if((t&62914560)===t&&(n=sc+300-et(),10<n)){if(ca(l,t,Pe,!ia),$i(l,0,!0)!==0)break e;Yt=t,l.timeoutHandle=Em(io.bind(null,l,a,Ze,_i,Hs,t,Pe,_a,Nl,ia,i,"Throttled",-0,0),n);break e}io(l,a,Ze,_i,Hs,t,Pe,_a,Nl,ia,i,null,-0,0)}}break}while(!0);Dt(e)}function io(e,t,a,l,n,i,s,u,r,d,h,v,m,y){if(e.timeoutHandle=-1,v=t.subtreeFlags,v&8192||(v&16785408)===16785408){v={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ht},Pd(t,i,v);var b=(i&62914560)===i?sc-et():(i&4194048)===i?lm-et():0;if(b=Vp(v,b),b!==null){Yt=i,e.cancelPendingCommit=b(so.bind(null,e,t,i,a,l,n,s,u,r,h,v,null,m,y)),ca(e,i,s,!d);return}}so(e,t,i,a,l,n,s,u,r)}function up(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!nt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ca(e,t,a,l){t&=~Xu,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-at(n),s=1<<i;l[i]=-1,n&=~s}a!==0&&of(e,a,t)}function uc(){return W&6?!0:(Mn(0),!1)}function Qu(){if(Z!==null){if(F===0)var e=Z.return;else e=Z,Bt=Xa=null,zu(e),fl=null,hn=0,e=Z;for(;e!==null;)Gd(e.alternate,e),e=e.return;Z=null}}function jl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Cp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Yt=0,Qu(),te=e,Z=a=Gt(e.current,null),V=t,F=0,$e=null,ia=!1,Ol=Tn(e,t),qu=!1,Nl=Pe=Xu=_a=xa=ge=0,Ze=cn=null,Hs=!1,t&8&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-at(l),i=1<<n;t|=e[n],l&=~i}return Vt=t,ec(),a}function sm(e,t){q=null,L.H=yn,t===wl||t===ac?(t=Hr(),F=3):t===Su?(t=Hr(),F=4):F=t===Bu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,$e=t,Z===null&&(ge=1,zi(e,ft(t,e.current)))}function um(){var e=it.current;return e===null?!0:(V&4194048)===V?mt===null:(V&62914560)===V||V&536870912?e===mt:!1}function rm(){var e=L.H;return L.H=yn,e===null?yn:e}function om(){var e=L.A;return L.A=cp,e}function ki(){ge=4,ia||(V&4194048)!==V&&it.current!==null||(Ol=!0),!(xa&134217727)&&!(_a&134217727)||te===null||ca(te,V,Pe,!1)}function Zc(e,t,a){var l=W;W|=2;var n=rm(),i=om();(te!==e||V!==t)&&(_i=null,jl(e,t)),t=!1;var s=ge;e:do try{if(F!==0&&Z!==null){var u=Z,r=$e;switch(F){case 8:Qu(),s=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var d=F;if(F=0,$e=null,cl(e,u,r,d),a&&Ol){s=0;break e}break;default:d=F,F=0,$e=null,cl(e,u,r,d)}}rp(),s=ge;break}catch(h){sm(e,h)}while(!0);return t&&e.shellSuspendCounter++,Bt=Xa=null,W=l,L.H=n,L.A=i,Z===null&&(te=null,V=0,ec()),s}function rp(){for(;Z!==null;)fm(Z)}function op(e,t){var a=W;W|=2;var l=rm(),n=om();te!==e||V!==t?(_i=null,Mi=et()+500,jl(e,t)):Ol=Tn(e,t);e:do try{if(F!==0&&Z!==null){t=Z;var i=$e;t:switch(F){case 1:F=0,$e=null,cl(e,t,i,1);break;case 2:case 9:if(Ur(i)){F=0,$e=null,co(t);break}t=function(){F!==2&&F!==9||te!==e||(F=7),Dt(e)},i.then(t,t);break e;case 3:F=7;break e;case 4:F=5;break e;case 7:Ur(i)?(F=0,$e=null,co(t)):(F=0,$e=null,cl(e,t,i,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var u=Z;if(s?Om(s):u.stateNode.complete){F=0,$e=null;var r=u.sibling;if(r!==null)Z=r;else{var d=u.return;d!==null?(Z=d,rc(d)):Z=null}break t}}F=0,$e=null,cl(e,t,i,5);break;case 6:F=0,$e=null,cl(e,t,i,6);break;case 8:Qu(),ge=6;break e;default:throw Error(T(462))}}fp();break}catch(h){sm(e,h)}while(!0);return Bt=Xa=null,L.H=l,L.A=n,W=a,Z!==null?0:(te=null,V=0,ec(),ge)}function fp(){for(;Z!==null&&!kg();)fm(Z)}function fm(e){var t=Bd(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?rc(e):Z=t}function co(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Pr(a,t,t.pendingProps,t.type,void 0,V);break;case 11:t=Pr(a,t,t.pendingProps,t.type.render,t.ref,V);break;case 5:zu(t);default:Gd(a,t),t=Z=Gf(t,Vt),t=Bd(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?rc(e):Z=t}function cl(e,t,a,l){Bt=Xa=null,zu(t),fl=null,hn=0;var n=t.return;try{if(Ph(e,n,t,a,V)){ge=1,zi(e,ft(a,e.current)),Z=null;return}}catch(i){if(n!==null)throw Z=n,i;ge=1,zi(e,ft(a,e.current)),Z=null;return}t.flags&32768?(K||l===1?e=!0:Ol||V&536870912?e=!1:(ia=e=!0,(l===2||l===9||l===3||l===6)&&(l=it.current,l!==null&&l.tag===13&&(l.flags|=16384))),dm(t,e)):rc(t)}function rc(e){var t=e;do{if(t.flags&32768){dm(t,ia);return}e=t.return;var a=ap(t.alternate,t,Vt);if(a!==null){Z=a;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ge===0&&(ge=5)}function dm(e,t){do{var a=lp(e.alternate,e);if(a!==null){a.flags&=32767,Z=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=a}while(e!==null);ge=6,Z=null}function so(e,t,a,l,n,i,s,u,r){e.cancelPendingCommit=null;do oc();while(Ne!==0);if(W&6)throw Error(T(327));if(t!==null){if(t===e.current)throw Error(T(177));if(i=t.lanes|t.childLanes,i|=hu,Qg(e,a,i,s,u,r),e===te&&(Z=te=null,V=0),Sl=t,ma=e,Yt=a,Bs=i,Gs=n,nm=l,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,hp(vi,function(){return ym(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,t.subtreeFlags&13878||l){l=L.T,L.T=null,n=$.p,$.p=2,s=W,W|=4;try{np(e,t,a)}finally{W=s,$.p=n,L.T=l}}Ne=1,mm(),gm(),hm()}}function mm(){if(Ne===1){Ne=0;var e=ma,t=Sl,a=(t.flags&13878)!==0;if(t.subtreeFlags&13878||a){a=L.T,L.T=null;var l=$.p;$.p=2;var n=W;W|=4;try{$d(t,e);var i=Qs,s=Of(e.containerInfo),u=i.focusedElem,r=i.selectionRange;if(s!==u&&u&&u.ownerDocument&&wf(u.ownerDocument.documentElement,u)){if(r!==null&&gu(u)){var d=r.start,h=r.end;if(h===void 0&&(h=d),"selectionStart"in u)u.selectionStart=d,u.selectionEnd=Math.min(h,u.value.length);else{var v=u.ownerDocument||document,m=v&&v.defaultView||window;if(m.getSelection){var y=m.getSelection(),b=u.textContent.length,S=Math.min(r.start,b),O=r.end===void 0?S:Math.min(r.end,b);!y.extend&&S>O&&(s=O,O=S,S=s);var o=zr(u,S),f=zr(u,O);if(o&&f&&(y.rangeCount!==1||y.anchorNode!==o.node||y.anchorOffset!==o.offset||y.focusNode!==f.node||y.focusOffset!==f.offset)){var p=v.createRange();p.setStart(o.node,o.offset),y.removeAllRanges(),S>O?(y.addRange(p),y.extend(f.node,f.offset)):(p.setEnd(f.node,f.offset),y.addRange(p))}}}}for(v=[],y=u;y=y.parentNode;)y.nodeType===1&&v.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<v.length;u++){var x=v[u];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}qi=!!Xs,Qs=Xs=null}finally{W=n,$.p=l,L.T=a}}e.current=t,Ne=2}}function gm(){if(Ne===2){Ne=0;var e=ma,t=Sl,a=(t.flags&8772)!==0;if(t.subtreeFlags&8772||a){a=L.T,L.T=null;var l=$.p;$.p=2;var n=W;W|=4;try{Zd(e,t.alternate,t)}finally{W=n,$.p=l,L.T=a}}Ne=3}}function hm(){if(Ne===4||Ne===3){Ne=0,Rg();var e=ma,t=Sl,a=Yt,l=nm;t.subtreeFlags&10256||t.flags&10256?Ne=5:(Ne=0,Sl=ma=null,pm(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(da=null),su(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(An,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=L.T,n=$.p,$.p=2,L.T=null;try{for(var i=e.onRecoverableError,s=0;s<l.length;s++){var u=l[s];i(u.value,{componentStack:u.stack})}}finally{L.T=t,$.p=n}}Yt&3&&oc(),Dt(e),n=e.pendingLanes,a&261930&&n&42?e===Ls?sn++:(sn=0,Ls=e):sn=0,Mn(0)}}function pm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,zn(t)))}function oc(){return mm(),gm(),hm(),ym()}function ym(){if(Ne!==5)return!1;var e=ma,t=Bs;Bs=0;var a=su(Yt),l=L.T,n=$.p;try{$.p=32>a?32:a,L.T=null,a=Gs,Gs=null;var i=ma,s=Yt;if(Ne=0,Sl=ma=null,Yt=0,W&6)throw Error(T(331));var u=W;if(W|=4,tm(i.current),Id(i,i.current,s,a),W=u,Mn(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(An,i)}catch{}return!0}finally{$.p=n,L.T=l,pm(e,t)}}function uo(e,t,a){t=ft(a,t),t=_s(e.stateNode,t,2),e=fa(e,t,2),e!==null&&(En(e,2),Dt(e))}function I(e,t,a){if(e.tag===3)uo(e,e,a);else for(;t!==null;){if(t.tag===3){uo(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))){e=ft(a,e),a=Md(2),l=fa(t,a,2),l!==null&&(_d(a,l,t,e),En(l,2),Dt(l));break}}t=t.return}}function Vc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new sp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(qu=!0,n.add(a),e=dp.bind(null,e,t,a),t.then(e,e))}function dp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,te===e&&(V&a)===a&&(ge===4||ge===3&&(V&62914560)===V&&300>et()-sc?!(W&2)&&jl(e,0):Xu|=a,Nl===V&&(Nl=0)),Dt(e)}function vm(e,t){t===0&&(t=rf()),e=qa(e,t),e!==null&&(En(e,t),Dt(e))}function mp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),vm(e,a)}function gp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(T(314))}l!==null&&l.delete(t),vm(e,a)}function hp(e,t){return iu(e,t)}var Ri=null,Ja=null,Ys=!1,Ui=!1,Kc=!1,sa=0;function Dt(e){e!==Ja&&e.next===null&&(Ja===null?Ri=Ja=e:Ja=Ja.next=e),Ui=!0,Ys||(Ys=!0,yp())}function Mn(e,t){if(!Kc&&Ui){Kc=!0;do for(var a=!1,l=Ri;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-at(42|e)+1)-1,i&=n&~(s&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,ro(l,i))}else i=V,i=$i(l,l===te?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(i&3)||Tn(l,i)||(a=!0,ro(l,i));l=l.next}while(a);Kc=!1}}function pp(){bm()}function bm(){Ui=Ys=!1;var e=0;sa!==0&&Dp()&&(e=sa);for(var t=et(),a=null,l=Ri;l!==null;){var n=l.next,i=xm(l,t);i===0?(l.next=null,a===null?Ri=n:a.next=n,n===null&&(Ja=a)):(a=l,(e!==0||i&3)&&(Ui=!0)),l=n}Ne!==0&&Ne!==5||Mn(e),sa!==0&&(sa=0)}function xm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-at(i),u=1<<s,r=n[s];r===-1?(!(u&a)||u&l)&&(n[s]=Xg(u,t)):r<=t&&(e.expiredLanes|=u),i&=~u}if(t=te,a=V,a=$i(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(F===2||F===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Nc(l),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||Tn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Nc(l),su(a)){case 2:case 8:a=sf;break;case 32:a=vi;break;case 268435456:a=uf;break;default:a=vi}return l=Nm.bind(null,e),a=iu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Nc(l),e.callbackPriority=2,e.callbackNode=null,2}function Nm(e,t){if(Ne!==0&&Ne!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(oc()&&e.callbackNode!==a)return null;var l=V;return l=$i(e,e===te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(cm(e,l,t),xm(e,et()),e.callbackNode!=null&&e.callbackNode===a?Nm.bind(null,e):null)}function ro(e,t){if(oc())return null;cm(e,t,!0)}function yp(){zp(function(){W&6?iu(cf,pp):bm()})}function Zu(){if(sa===0){var e=vl;e===0&&(e=Gn,Gn<<=1,!(Gn&261888)&&(Gn=256)),sa=e}return sa}function oo(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ti(""+e)}function fo(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function vp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=oo((n[Je]||null).action),s=l.submitter;s&&(t=(t=s[Je]||null)?oo(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var u=new Fi("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(sa!==0){var r=s?fo(n,s):new FormData(n);Os(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(u.preventDefault(),r=s?fo(n,s):new FormData(n),Os(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Jc=0;Jc<bs.length;Jc++){var Wc=bs[Jc],bp=Wc.toLowerCase(),xp=Wc[0].toUpperCase()+Wc.slice(1);bt(bp,"on"+xp)}bt(_f,"onAnimationEnd");bt(kf,"onAnimationIteration");bt(Rf,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(Uh,"onTransitionRun");bt(Hh,"onTransitionStart");bt(Bh,"onTransitionCancel");bt(Uf,"onTransitionEnd");pl("onMouseEnter",["mouseout","mouseover"]);pl("onMouseLeave",["mouseout","mouseover"]);pl("onPointerEnter",["pointerout","pointerover"]);pl("onPointerLeave",["pointerout","pointerover"]);Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Np=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn));function Sm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var s=l.length-1;0<=s;s--){var u=l[s],r=u.instance,d=u.currentTarget;if(u=u.listener,r!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=d;try{i(n)}catch(h){xi(h)}n.currentTarget=null,i=r}else for(s=0;s<l.length;s++){if(u=l[s],r=u.instance,d=u.currentTarget,u=u.listener,r!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=d;try{i(n)}catch(h){xi(h)}n.currentTarget=null,i=r}}}}function Q(e,t){var a=t[fs];a===void 0&&(a=t[fs]=new Set);var l=e+"__bubble";a.has(l)||(jm(t,e,2,!1),a.add(l))}function $c(e,t,a){var l=0;t&&(l|=4),jm(a,e,l,t)}var Wn="_reactListening"+Math.random().toString(36).slice(2);function Vu(e){if(!e[Wn]){e[Wn]=!0,gf.forEach(function(a){a!=="selectionchange"&&(Np.has(a)||$c(a,!1,e),$c(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wn]||(t[Wn]=!0,$c("selectionchange",!1,t))}}function jm(e,t,a,l){switch(Um(t)){case 2:var n=Wp;break;case 8:n=$p;break;default:n=$u}a=n.bind(null,t,a,e),n=void 0,!ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Fc(e,t,a,l,n){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var u=l.stateNode.containerInfo;if(u===n)break;if(s===4)for(s=l.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;u!==null;){if(s=Fa(u),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){l=i=s;continue e}u=u.parentNode}}l=l.return}Sf(function(){var d=i,h=ou(a),v=[];e:{var m=Hf.get(e);if(m!==void 0){var y=Fi,b=e;switch(e){case"keypress":if(li(a)===0)break e;case"keydown":case"keyup":y=gh;break;case"focusin":b="focus",y=Ec;break;case"focusout":b="blur",y=Ec;break;case"beforeblur":case"afterblur":y=Ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=br;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=yh;break;case _f:case kf:case Rf:y=ih;break;case Uf:y=bh;break;case"scroll":case"scrollend":y=eh;break;case"wheel":y=Nh;break;case"copy":case"cut":case"paste":y=sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Nr;break;case"toggle":case"beforetoggle":y=jh}var S=(t&4)!==0,O=!S&&(e==="scroll"||e==="scrollend"),o=S?m!==null?m+"Capture":null:m;S=[];for(var f=d,p;f!==null;){var x=f;if(p=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||p===null||o===null||(x=on(f,o),x!=null&&S.push(bn(f,x,p))),O)break;f=f.return}0<S.length&&(m=new y(m,b,null,a,h),v.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&a!==hs&&(b=a.relatedTarget||a.fromElement)&&(Fa(b)||b[Dl]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(b=a.relatedTarget||a.toElement,y=d,b=b?Fa(b):null,b!==null&&(O=jn(b),S=b.tag,b!==O||S!==5&&S!==27&&S!==6)&&(b=null)):(y=null,b=d),y!==b)){if(S=br,x="onMouseLeave",o="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=Nr,x="onPointerLeave",o="onPointerEnter",f="pointer"),O=y==null?m:Ql(y),p=b==null?m:Ql(b),m=new S(x,f+"leave",y,a,h),m.target=O,m.relatedTarget=p,x=null,Fa(h)===d&&(S=new S(o,f+"enter",b,a,h),S.target=p,S.relatedTarget=O,x=S),O=x,y&&b)t:{for(S=Sp,o=y,f=b,p=0,x=o;x;x=S(x))p++;x=0;for(var j=f;j;j=S(j))x++;for(;0<p-x;)o=S(o),p--;for(;0<x-p;)f=S(f),x--;for(;p--;){if(o===f||f!==null&&o===f.alternate){S=o;break t}o=S(o),f=S(f)}S=null}else S=null;y!==null&&mo(v,m,y,S,!1),b!==null&&O!==null&&mo(v,O,b,S,!0)}}e:{if(m=d?Ql(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var C=Tr;else if(Ar(m))if(Cf)C=_h;else{C=Oh;var g=wh}else y=m.nodeName,!y||y.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&ru(d.elementType)&&(C=Tr):C=Mh;if(C&&(C=C(e,d))){Df(v,C,a,h);break e}g&&g(e,m,d),e==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&gs(m,"number",m.value)}switch(g=d?Ql(d):window,e){case"focusin":(Ar(g)||g.contentEditable==="true")&&(el=g,ys=d,Fl=null);break;case"focusout":Fl=ys=el=null;break;case"mousedown":vs=!0;break;case"contextmenu":case"mouseup":case"dragend":vs=!1,wr(v,a,h);break;case"selectionchange":if(Rh)break;case"keydown":case"keyup":wr(v,a,h)}var z;if(mu)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Pa?Tf(e,a)&&(w="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(w="onCompositionStart");w&&(Af&&a.locale!=="ko"&&(Pa||w!=="onCompositionStart"?w==="onCompositionEnd"&&Pa&&(z=jf()):(na=h,fu="value"in na?na.value:na.textContent,Pa=!0)),g=Hi(d,w),0<g.length&&(w=new xr(w,e,null,a,h),v.push({event:w,listeners:g}),z?w.data=z:(z=Ef(a),z!==null&&(w.data=z)))),(z=Th?Eh(e,a):Dh(e,a))&&(w=Hi(d,"onBeforeInput"),0<w.length&&(g=new xr("onBeforeInput","beforeinput",null,a,h),v.push({event:g,listeners:w}),g.data=z)),vp(v,e,d,a,h)}Sm(v,t)})}function bn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Hi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=on(e,a),n!=null&&l.unshift(bn(e,n,i)),n=on(e,t),n!=null&&l.push(bn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Sp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mo(e,t,a,l,n){for(var i=t._reactName,s=[];a!==null&&a!==l;){var u=a,r=u.alternate,d=u.stateNode;if(u=u.tag,r!==null&&r===l)break;u!==5&&u!==26&&u!==27||d===null||(r=d,n?(d=on(a,i),d!=null&&s.unshift(bn(a,d,r))):n||(d=on(a,i),d!=null&&s.push(bn(a,d,r)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var jp=/\r\n?/g,Ap=/\u0000|\uFFFD/g;function go(e){return(typeof e=="string"?e:""+e).replace(jp,`
`).replace(Ap,"")}function Am(e,t){return t=go(t),go(e)===t}function P(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||yl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&yl(e,""+l);break;case"className":qn(e,"class",l);break;case"tabIndex":qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qn(e,a,l);break;case"style":Nf(e,l,i);break;case"data":if(t!=="object"){qn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ti(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&P(e,t,"name",n.name,n,null),P(e,t,"formEncType",n.formEncType,n,null),P(e,t,"formMethod",n.formMethod,n,null),P(e,t,"formTarget",n.formTarget,n,null)):(P(e,t,"encType",n.encType,n,null),P(e,t,"method",n.method,n,null),P(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ti(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ht);break;case"onScroll":l!=null&&Q("scroll",e);break;case"onScrollEnd":l!=null&&Q("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(T(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(T(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ti(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Q("beforetoggle",e),Q("toggle",e),ei(e,"popover",l);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ei(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ig.get(a)||a,ei(e,a,l))}}function qs(e,t,a,l,n,i){switch(a){case"style":Nf(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(T(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(T(60));e.innerHTML=a}}break;case"children":typeof l=="string"?yl(e,l):(typeof l=="number"||typeof l=="bigint")&&yl(e,""+l);break;case"onScroll":l!=null&&Q("scroll",e);break;case"onScrollEnd":l!=null&&Q("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ht);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Je]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ei(e,a,l)}}}function Re(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",e),Q("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(T(137,t));default:P(e,t,i,s,a,null)}}n&&P(e,t,"srcSet",a.srcSet,a,null),l&&P(e,t,"src",a.src,a,null);return;case"input":Q("invalid",e);var u=i=s=n=null,r=null,d=null;for(l in a)if(a.hasOwnProperty(l)){var h=a[l];if(h!=null)switch(l){case"name":n=h;break;case"type":s=h;break;case"checked":r=h;break;case"defaultChecked":d=h;break;case"value":i=h;break;case"defaultValue":u=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(T(137,t));break;default:P(e,t,l,h,a,null)}}vf(e,i,u,r,d,s,n,!1);return;case"select":Q("invalid",e),l=s=i=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":s=u;break;case"multiple":l=u;default:P(e,t,n,u,a,null)}t=i,a=s,e.multiple=!!l,t!=null?ul(e,!!l,t,!1):a!=null&&ul(e,!!l,a,!0);return;case"textarea":Q("invalid",e),i=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":l=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(T(91));break;default:P(e,t,s,u,a,null)}xf(e,l,n,i);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(l=a[r],l!=null))switch(r){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:P(e,t,r,l,a,null)}return;case"dialog":Q("beforetoggle",e),Q("toggle",e),Q("cancel",e),Q("close",e);break;case"iframe":case"object":Q("load",e);break;case"video":case"audio":for(l=0;l<vn.length;l++)Q(vn[l],e);break;case"image":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"embed":case"source":case"link":Q("error",e),Q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(l=a[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(T(137,t));default:P(e,t,d,l,a,null)}return;default:if(ru(t)){for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!==void 0&&qs(e,t,h,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&P(e,t,u,l,a,null))}function Tp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,u=null,r=null,d=null,h=null;for(y in a){var v=a[y];if(a.hasOwnProperty(y)&&v!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":r=v;default:l.hasOwnProperty(y)||P(e,t,y,null,l,v)}}for(var m in l){var y=l[m];if(v=a[m],l.hasOwnProperty(m)&&(y!=null||v!=null))switch(m){case"type":i=y;break;case"name":n=y;break;case"checked":d=y;break;case"defaultChecked":h=y;break;case"value":s=y;break;case"defaultValue":u=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(T(137,t));break;default:y!==v&&P(e,t,m,y,l,v)}}ms(e,s,u,r,d,h,i,n);return;case"select":y=s=u=m=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":y=r;default:l.hasOwnProperty(i)||P(e,t,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":m=i;break;case"defaultValue":u=i;break;case"multiple":s=i;default:i!==r&&P(e,t,n,i,l,r)}t=u,a=s,l=y,m!=null?ul(e,!!a,m,!1):!!l!=!!a&&(t!=null?ul(e,!!a,t,!0):ul(e,!!a,a?[]:"",!1));return;case"textarea":y=m=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:P(e,t,u,null,l,n)}for(s in l)if(n=l[s],i=a[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":m=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(T(91));break;default:n!==i&&P(e,t,s,n,l,i)}bf(e,m,y);return;case"option":for(var b in a)if(m=a[b],a.hasOwnProperty(b)&&m!=null&&!l.hasOwnProperty(b))switch(b){case"selected":e.selected=!1;break;default:P(e,t,b,null,l,m)}for(r in l)if(m=l[r],y=a[r],l.hasOwnProperty(r)&&m!==y&&(m!=null||y!=null))switch(r){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:P(e,t,r,m,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in a)m=a[S],a.hasOwnProperty(S)&&m!=null&&!l.hasOwnProperty(S)&&P(e,t,S,null,l,m);for(d in l)if(m=l[d],y=a[d],l.hasOwnProperty(d)&&m!==y&&(m!=null||y!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(T(137,t));break;default:P(e,t,d,m,l,y)}return;default:if(ru(t)){for(var O in a)m=a[O],a.hasOwnProperty(O)&&m!==void 0&&!l.hasOwnProperty(O)&&qs(e,t,O,void 0,l,m);for(h in l)m=l[h],y=a[h],!l.hasOwnProperty(h)||m===y||m===void 0&&y===void 0||qs(e,t,h,m,l,y);return}}for(var o in a)m=a[o],a.hasOwnProperty(o)&&m!=null&&!l.hasOwnProperty(o)&&P(e,t,o,null,l,m);for(v in l)m=l[v],y=a[v],!l.hasOwnProperty(v)||m===y||m==null&&y==null||P(e,t,v,m,l,y)}function ho(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ep(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,s=n.initiatorType,u=n.duration;if(i&&u&&ho(s)){for(s=0,u=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],d=r.startTime;if(d>u)break;var h=r.transferSize,v=r.initiatorType;h&&ho(v)&&(r=r.responseEnd,s+=h*(r<u?1:(u-d)/(r-d)))}if(--l,t+=8*(i+s)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xs=null,Qs=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function po(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ic=null;function Dp(){var e=window.event;return e&&e.type==="popstate"?e===Ic?!1:(Ic=e,!0):(Ic=null,!1)}var Em=typeof setTimeout=="function"?setTimeout:void 0,Cp=typeof clearTimeout=="function"?clearTimeout:void 0,yo=typeof Promise=="function"?Promise:void 0,zp=typeof queueMicrotask=="function"?queueMicrotask:typeof yo<"u"?function(e){return yo.resolve(null).then(e).catch(wp)}:Em;function wp(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function vo(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Tl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")un(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,un(a);for(var i=a.firstChild;i;){var s=i.nextSibling,u=i.nodeName;i[Dn]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&un(e.ownerDocument.body);a=n}while(a);Tl(t)}function bo(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Vs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vs(a),uu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Op(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Dn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=gt(e.nextSibling),e===null)break}return null}function Mp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gt(e.nextSibling),e===null))return null;return e}function Dm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gt(e.nextSibling),e===null))return null;return e}function Ks(e){return e.data==="$?"||e.data==="$~"}function Js(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _p(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ws=null;function xo(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return gt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function No(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Cm(e,t,a){switch(t=Bi(a),e){case"html":if(e=t.documentElement,!e)throw Error(T(452));return e;case"head":if(e=t.head,!e)throw Error(T(453));return e;case"body":if(e=t.body,!e)throw Error(T(454));return e;default:throw Error(T(451))}}function un(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);uu(e)}var ht=new Map,So=new Set;function Gi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=$.d;$.d={f:kp,r:Rp,D:Up,C:Hp,L:Bp,m:Gp,X:Yp,S:Lp,M:qp};function kp(){var e=Kt.f(),t=uc();return e||t}function Rp(e){var t=Cl(e);t!==null&&t.tag===5&&t.type==="form"?Nd(t):Kt.r(e)}var Ml=typeof document>"u"?null:document;function zm(e,t,a){var l=Ml;if(l&&typeof t=="string"&&t){var n=ot(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),So.has(n)||(So.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Re(t,"link",e),Ee(t),l.head.appendChild(t)))}}function Up(e){Kt.D(e),zm("dns-prefetch",e,null)}function Hp(e,t){Kt.C(e,t),zm("preconnect",e,t)}function Bp(e,t,a){Kt.L(e,t,a);var l=Ml;if(l&&e&&t){var n='link[rel="preload"][as="'+ot(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ot(a.imageSizes)+'"]')):n+='[href="'+ot(e)+'"]';var i=n;switch(t){case"style":i=Al(e);break;case"script":i=_l(e)}ht.has(i)||(e=ue({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ht.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(_n(i))||t==="script"&&l.querySelector(kn(i))||(t=l.createElement("link"),Re(t,"link",e),Ee(t),l.head.appendChild(t)))}}function Gp(e,t){Kt.m(e,t);var a=Ml;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ot(l)+'"][href="'+ot(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=_l(e)}if(!ht.has(i)&&(e=ue({rel:"modulepreload",href:e},t),ht.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(kn(i)))return}l=a.createElement("link"),Re(l,"link",e),Ee(l),a.head.appendChild(l)}}}function Lp(e,t,a){Kt.S(e,t,a);var l=Ml;if(l&&e){var n=sl(l).hoistableStyles,i=Al(e);t=t||"default";var s=n.get(i);if(!s){var u={loading:0,preload:null};if(s=l.querySelector(_n(i)))u.loading=5;else{e=ue({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ht.get(i))&&Ku(e,a);var r=s=l.createElement("link");Ee(r),Re(r,"link",e),r._p=new Promise(function(d,h){r.onload=d,r.onerror=h}),r.addEventListener("load",function(){u.loading|=1}),r.addEventListener("error",function(){u.loading|=2}),u.loading|=4,fi(s,t,l)}s={type:"stylesheet",instance:s,count:1,state:u},n.set(i,s)}}}function Yp(e,t){Kt.X(e,t);var a=Ml;if(a&&e){var l=sl(a).hoistableScripts,n=_l(e),i=l.get(n);i||(i=a.querySelector(kn(n)),i||(e=ue({src:e,async:!0},t),(t=ht.get(n))&&Ju(e,t),i=a.createElement("script"),Ee(i),Re(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function qp(e,t){Kt.M(e,t);var a=Ml;if(a&&e){var l=sl(a).hoistableScripts,n=_l(e),i=l.get(n);i||(i=a.querySelector(kn(n)),i||(e=ue({src:e,async:!0,type:"module"},t),(t=ht.get(n))&&Ju(e,t),i=a.createElement("script"),Ee(i),Re(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function jo(e,t,a,l){var n=(n=ua.current)?Gi(n):null;if(!n)throw Error(T(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Al(a.href),a=sl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Al(a.href);var i=sl(n).hoistableStyles,s=i.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=n.querySelector(_n(e)))&&!i._p&&(s.instance=i,s.state.loading=5),ht.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ht.set(e,a),i||Xp(n,e,a,s.state))),t&&l===null)throw Error(T(528,""));return s}if(t&&l!==null)throw Error(T(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_l(a),a=sl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(T(444,e))}}function Al(e){return'href="'+ot(e)+'"'}function _n(e){return'link[rel="stylesheet"]['+e+"]"}function wm(e){return ue({},e,{"data-precedence":e.precedence,precedence:null})}function Xp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Re(t,"link",a),Ee(t),e.head.appendChild(t))}function _l(e){return'[src="'+ot(e)+'"]'}function kn(e){return"script[async]"+e}function Ao(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ot(a.href)+'"]');if(l)return t.instance=l,Ee(l),l;var n=ue({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ee(l),Re(l,"style",n),fi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Al(a.href);var i=e.querySelector(_n(n));if(i)return t.state.loading|=4,t.instance=i,Ee(i),i;l=wm(a),(n=ht.get(n))&&Ku(l,n),i=(e.ownerDocument||e).createElement("link"),Ee(i);var s=i;return s._p=new Promise(function(u,r){s.onload=u,s.onerror=r}),Re(i,"link",l),t.state.loading|=4,fi(i,a.precedence,e),t.instance=i;case"script":return i=_l(a.src),(n=e.querySelector(kn(i)))?(t.instance=n,Ee(n),n):(l=a,(n=ht.get(i))&&(l=ue({},a),Ju(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ee(n),Re(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(T(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(l=t.instance,t.state.loading|=4,fi(l,a.precedence,e));return t.instance}function fi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var u=l[s];if(u.dataset.precedence===t)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ku(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ju(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var di=null;function To(e,t,a){if(di===null){var l=new Map,n=di=new Map;n.set(a,l)}else n=di,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Dn]||i[Me]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var u=l.get(s);u?u.push(i):l.set(s,[i])}}return l}function Eo(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Qp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Om(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Zp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=Al(l.href),i=t.querySelector(_n(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Li.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ee(i);return}i=t.ownerDocument||t,l=wm(l),(n=ht.get(n))&&Ku(l,n),i=i.createElement("link"),Ee(i);var s=i;s._p=new Promise(function(u,r){s.onload=u,s.onerror=r}),Re(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&!(a.state.loading&3)&&(e.count++,a=Li.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Pc=0;function Vp(e,t){return e.stylesheets&&e.count===0&&mi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&mi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Pc===0&&(Pc=62500*Ep());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Pc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Li(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yi=null;function mi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yi=new Map,t.forEach(Kp,e),Yi=null,Li.call(e))}function Kp(e,t){if(!(t.state.loading&4)){var a=Yi.get(e);if(a)var l=a.get(null);else{a=new Map,Yi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=t.instance,s=n.getAttribute("data-precedence"),i=a.get(s)||l,i===l&&a.set(null,n),a.set(s,n),this.count++,l=Li.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var xn={$$typeof:Ut,Provider:null,Consumer:null,_currentValue:za,_currentValue2:za,_threadCount:0};function Jp(e,t,a,l,n,i,s,u,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.hiddenUpdates=Sc(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Mm(e,t,a,l,n,i,s,u,r,d,h,v){return e=new Jp(e,t,a,s,r,d,h,v,u),t=1,i===!0&&(t|=24),i=Ie(3,null,null,t),e.current=i,i.stateNode=e,t=xu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ju(i),e}function _m(e){return e?(e=ll,e):ll}function km(e,t,a,l,n,i){n=_m(n),l.context===null?l.context=n:l.pendingContext=n,l=oa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=fa(e,l,t),a!==null&&(Ke(a,e,t),Pl(a,e,t))}function Do(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Wu(e,t){Do(e,t),(e=e.alternate)&&Do(e,t)}function Rm(e){if(e.tag===13||e.tag===31){var t=qa(e,67108864);t!==null&&Ke(t,e,67108864),Wu(e,67108864)}}function Co(e){if(e.tag===13||e.tag===31){var t=lt();t=cu(t);var a=qa(e,t);a!==null&&Ke(a,e,t),Wu(e,t)}}var qi=!0;function Wp(e,t,a,l){var n=L.T;L.T=null;var i=$.p;try{$.p=2,$u(e,t,a,l)}finally{$.p=i,L.T=n}}function $p(e,t,a,l){var n=L.T;L.T=null;var i=$.p;try{$.p=8,$u(e,t,a,l)}finally{$.p=i,L.T=n}}function $u(e,t,a,l){if(qi){var n=$s(l);if(n===null)Fc(e,t,l,Xi,a),zo(e,l);else if(Ip(n,e,t,a,l))l.stopPropagation();else if(zo(e,l),t&4&&-1<Fp.indexOf(e)){for(;n!==null;){var i=Cl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ea(i.pendingLanes);if(s!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var r=1<<31-at(s);u.entanglements[1]|=r,s&=~r}Dt(i),!(W&6)&&(Mi=et()+500,Mn(0))}}break;case 31:case 13:u=qa(i,2),u!==null&&Ke(u,i,2),uc(),Wu(i,2)}if(i=$s(l),i===null&&Fc(e,t,l,Xi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Fc(e,t,l,null,a)}}function $s(e){return e=ou(e),Fu(e)}var Xi=null;function Fu(e){if(Xi=null,e=Fa(e),e!==null){var t=jn(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=ef(t),e!==null)return e;e=null}else if(a===31){if(e=tf(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xi=e,null}function Um(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ug()){case cf:return 2;case sf:return 8;case vi:case Hg:return 32;case uf:return 268435456;default:return 32}default:return 32}}var Fs=!1,ga=null,ha=null,pa=null,Nn=new Map,Sn=new Map,aa=[],Fp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zo(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":ha=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function Yl(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Cl(t),t!==null&&Rm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Ip(e,t,a,l,n){switch(t){case"focusin":return ga=Yl(ga,e,t,a,l,n),!0;case"dragenter":return ha=Yl(ha,e,t,a,l,n),!0;case"mouseover":return pa=Yl(pa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Nn.set(i,Yl(Nn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Sn.set(i,Yl(Sn.get(i)||null,e,t,a,l,n)),!0}return!1}function Hm(e){var t=Fa(e.target);if(t!==null){var a=jn(t);if(a!==null){if(t=a.tag,t===13){if(t=ef(a),t!==null){e.blockedOn=t,dr(e.priority,function(){Co(a)});return}}else if(t===31){if(t=tf(a),t!==null){e.blockedOn=t,dr(e.priority,function(){Co(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=$s(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);hs=l,a.target.dispatchEvent(l),hs=null}else return t=Cl(a),t!==null&&Rm(t),e.blockedOn=a,!1;t.shift()}return!0}function wo(e,t,a){gi(e)&&a.delete(t)}function Pp(){Fs=!1,ga!==null&&gi(ga)&&(ga=null),ha!==null&&gi(ha)&&(ha=null),pa!==null&&gi(pa)&&(pa=null),Nn.forEach(wo),Sn.forEach(wo)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,Fs||(Fs=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Pp)))}var Fn=null;function Oo(e){Fn!==e&&(Fn=e,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,function(){Fn===e&&(Fn=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Fu(l||a)===null)continue;break}var i=Cl(a);i!==null&&(e.splice(t,3),t-=3,Os(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Tl(e){function t(r){return $n(r,e)}ga!==null&&$n(ga,e),ha!==null&&$n(ha,e),pa!==null&&$n(pa,e),Nn.forEach(t),Sn.forEach(t);for(var a=0;a<aa.length;a++){var l=aa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<aa.length&&(a=aa[0],a.blockedOn===null);)Hm(a),a.blockedOn===null&&aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],s=n[Je]||null;if(typeof i=="function")s||Oo(a);else if(s){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[Je]||null)u=s.formAction;else if(Fu(n)!==null)continue}else u=s.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),Oo(a)}}}function Bm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Iu(e){this._internalRoot=e}fc.prototype.render=Iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));var a=t.current,l=lt();km(a,l,e,t,null,null)};fc.prototype.unmount=Iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;km(e.current,2,null,e,null,null),uc(),t[Dl]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var t=mf();e={blockedOn:null,target:e,priority:t};for(var a=0;a<aa.length&&t!==0&&t<aa[a].priority;a++);aa.splice(a,0,e),a===0&&Hm(e)}};var Mo=Io.version;if(Mo!=="19.2.4")throw Error(T(527,Mo,"19.2.4"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=zg(t),e=e!==null?af(e):null,e=e===null?null:e.stateNode,e};var ey={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var In=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!In.isDisabled&&In.supportsFiber)try{An=In.inject(ey),tt=In}catch{}}Ji.createRoot=function(e,t){if(!Po(e))throw Error(T(299));var a=!1,l="",n=zd,i=wd,s=Od;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Mm(e,1,!1,null,null,a,l,null,n,i,s,Bm),e[Dl]=t.current,Vu(e),new Iu(t)};Ji.hydrateRoot=function(e,t,a){if(!Po(e))throw Error(T(299));var l=!1,n="",i=zd,s=wd,u=Od,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=Mm(e,1,!0,t,a??null,l,n,r,i,s,u,Bm),t.context=_m(null),a=t.current,l=lt(),l=cu(l),n=oa(l),n.callback=null,fa(a,n,l),a=l,t.current.lanes=a,En(t,a),Dt(t),e[Dl]=t.current,Vu(e),new fc(t)};Ji.version="19.2.4";function Gm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gm)}catch(e){console.error(e)}}Gm(),Vo.exports=Ji;var ty=Vo.exports;const Tt={ACTIONABLE_NOW:"Now",CANDIDATES:"Review",AMBIGUITY:"Clarify",WAITING:"Waiting",TUNING:"Tuning"},gl={CRITICAL:"Critical",HIGH:"High",MEDIUM:"Medium",LOW:"Low"},Qi={DATE_EXACT:"On Date",DATE_WINDOW:"Date Range",EMAIL_REPLY:"Email Reply",MANUAL_CHECK:"Manual Check",WEB_CONDITION:"Web Monitor"},ay="/api";async function U(e,t){const a=await fetch(`${ay}${e}`,{headers:{"Content-Type":"application/json",...t==null?void 0:t.headers},...t});if(!a.ok){const l=await a.json().catch(()=>({message:"Request failed"}));throw new Error(l.message||`HTTP ${a.status}`)}return a.json()}async function Lm(){return U("/containers/counts")}async function Ym(e){const t=new URLSearchParams;e&&t.set("container",e);const a=t.toString();return U(`/actions${a?`?${a}`:""}`)}async function ly(e){return U(`/actions/${e}`)}async function kt(e,t){return U(`/actions/${e}`,{method:"PUT",body:JSON.stringify(t)})}async function Pu(e){return U(`/actions/${e}/complete`,{method:"POST"})}async function _o(e,t){return U(`/actions/${e}/move`,{method:"POST",body:JSON.stringify({container:t})})}async function dc(e){await U(`/actions/${e}`,{method:"DELETE"})}async function ny(e){await U(`/actions/${e}/purge`,{method:"DELETE"})}async function iy(e){return U(`/actions/${e}/not-an-action`,{method:"POST"})}async function qm(e){await U(`/actions/${e}/acknowledge`,{method:"POST"})}async function Xm(){return U("/system/health")}async function cy(){return U("/system/run-followups",{method:"POST"})}async function sy(){return U("/system/run-triggers",{method:"POST"})}async function uy(e){return U("/parse/preview",{method:"POST",body:JSON.stringify({text:e})})}async function ry(e){return U("/parse/confirm",{method:"POST",body:JSON.stringify(e)})}async function oy(e,t){return U("/parse/clarify",{method:"POST",body:JSON.stringify({rawInput:e,answers:t})})}async function fy(e){return U(`/parse/${e}/reparse`,{method:"POST"})}async function dy(){return U("/sources/gmail/status")}async function my(){return U("/sources/gmail/auth-url")}async function gy(){await U("/sources/gmail/disconnect",{method:"POST"})}async function hy(){return U("/sources/gmail/scan",{method:"POST"})}async function py(e){const t=new URLSearchParams;e!=null&&e.actionId&&t.set("actionId",e.actionId.toString()),e!=null&&e.pending&&t.set("pending","true");const a=t.toString();return U(`/triggers${a?`?${a}`:""}`)}async function Rn(e){return U("/triggers",{method:"POST",body:JSON.stringify(e)})}async function yy(e){await U(`/triggers/${e}`,{method:"DELETE"})}async function vy(e){return U(`/triggers/${e}/fire`,{method:"POST"})}async function by(e,t){return U(`/triggers/${e}/check`,{method:"POST",body:JSON.stringify({conditionMet:t})})}async function xy(e){const t=new URLSearchParams;e.q&&t.set("q",e.q),e.container&&t.set("container",e.container),e.urgency&&t.set("urgency",e.urgency),e.includeArchived&&t.set("includeArchived","true"),e.archiveOnly&&t.set("archiveOnly","true"),e.limit&&t.set("limit",e.limit.toString()),e.offset&&t.set("offset",e.offset.toString());const a=t.toString();return U(`/search${a?`?${a}`:""}`)}async function Ny(){return U("/groups")}async function Sy(e){return U("/groups",{method:"POST",body:JSON.stringify(e)})}async function jy(e){return U(`/groups/${e}`,{method:"PUT",body:JSON.stringify({archivedAt:new Date().toISOString()})})}async function Ay(e){await U(`/groups/${e}`,{method:"DELETE"})}async function Ty(e,t){return U(`/groups/${e}/actions`,{method:"POST",body:JSON.stringify({actionIds:t})})}async function ko(e,t){await U(`/groups/${e}/actions/${t}`,{method:"DELETE"})}async function Ey(){return U("/groups/suggestions")}async function Dy(e,t){return U("/groups/suggestions/"+e+"/accept",{method:"POST",body:JSON.stringify({name:t})})}async function Cy(e){await U("/groups/suggestions/"+e+"/dismiss",{method:"POST"})}async function zy(e,t){return U("/groups/merge",{method:"POST",body:JSON.stringify({primaryId:e,secondaryId:t})})}async function wy(){return U("/tuning")}async function Oy(e){return U(`/tuning/${e}/activate`,{method:"POST"})}async function My(e,t,a=!1){return U(`/tuning/${e}/reject`,{method:"POST",body:JSON.stringify({feedback:t,dontAskAgain:a})})}async function _y(e){return U(`/tuning/${e}/ask-less`,{method:"POST"})}async function ky(e){await U(`/tuning/${e}`,{method:"DELETE"})}async function Ry(){return U("/tuning/stats")}async function Uy(){return U("/notifications/vapid-public-key")}async function Hy(e,t,a){await U("/notifications/subscribe",{method:"POST",body:JSON.stringify({endpoint:e,p256dh:t,auth:a})})}async function By(e){await U("/notifications/unsubscribe",{method:"DELETE",body:JSON.stringify({endpoint:e})})}async function Gy(e,t,a){return U("/tuning/feedback",{method:"POST",body:JSON.stringify({actionId:e,feedbackType:t,correction:a})})}async function Ly(){return U("/promises/today")}async function Yy(){return U("/promises/weekly")}async function qy(){return U("/promises/brief")}async function Xy(e){await U("/system/settings",{method:"PUT",body:JSON.stringify(e)})}async function Qy(){return U("/system/settings")}async function Zy(){return U("/containers/flag-counts")}async function Vy(e){return U(`/actions?${e}=true`)}async function Ky(e){return U("/actions/bulk/complete",{method:"POST",body:JSON.stringify({ids:e})})}async function Jy(e){return U("/actions/bulk/delete",{method:"POST",body:JSON.stringify({ids:e})})}async function Wy(e,t){return U("/actions/bulk/move",{method:"POST",body:JSON.stringify({ids:e,container:t})})}let Zi=null;function Ve(){return Zi?Zi():Promise.resolve()}function $y({activeContainer:e,onContainerChange:t,onFlagFilter:a}){const[l,n]=N.useState({ACTIONABLE_NOW:0,CANDIDATES:0,AMBIGUITY:0,WAITING:0,TUNING:0}),[i,s]=N.useState({needsClarification:0,needsTuning:0}),u=N.useCallback(async()=>{try{const[h,v]=await Promise.all([Lm(),Zy()]);n(h),s(v)}catch(h){console.error("Failed to load counts:",h)}},[]);N.useEffect(()=>(Zi=u,u(),()=>{Zi=null}),[u]);function r(h){t(e===h?null:h)}function d(h,v){const m=e===h;return c.jsxs("button",{className:`grid-btn grid-btn--${v}${m?" selected":""}`,onClick:()=>r(h),children:[c.jsx("span",{className:"grid-btn-label",children:Tt[h]}),c.jsx("span",{className:"grid-btn-badge",children:l[h]})]},h)}return c.jsxs("div",{className:"container-grid",children:[d("ACTIONABLE_NOW","now"),c.jsxs("div",{className:"grid-row",children:[d("CANDIDATES","review"),d("WAITING","waiting")]}),(i.needsClarification>0||i.needsTuning>0)&&c.jsxs("div",{className:"flag-badges",children:[i.needsClarification>0&&c.jsxs("button",{className:"flag-badge flag-badge--clarify",onClick:()=>a==null?void 0:a("needsClarification"),title:"Actions needing clarification",children:[c.jsx("span",{className:"flag-badge-icon",children:"?"}),c.jsx("span",{className:"flag-badge-label",children:"Clarify"}),c.jsx("span",{className:"flag-badge-count",children:i.needsClarification})]}),i.needsTuning>0&&c.jsxs("button",{className:"flag-badge flag-badge--tuning",onClick:()=>a==null?void 0:a("needsTuning"),title:"Actions flagged for tuning",children:[c.jsx("span",{className:"flag-badge-icon",children:"⚙"}),c.jsx("span",{className:"flag-badge-label",children:"Tuning"}),c.jsx("span",{className:"flag-badge-count",children:i.needsTuning})]})]})]})}const Ro={SU:"Sunday",MO:"Monday",TU:"Tuesday",WE:"Wednesday",TH:"Thursday",FR:"Friday",SA:"Saturday"},Fy=["January","February","March","April","May","June","July","August","September","October","November","December"];function Iy(e){const t={};for(const l of e.split(";")){const[n,i]=l.split("=");n&&i&&(t[n.trim()]=i.trim())}const a=t.FREQ;return!a||!["DAILY","WEEKLY","MONTHLY","YEARLY"].includes(a)?null:{freq:a,interval:t.INTERVAL&&parseInt(t.INTERVAL)||1,byMonthDay:t.BYMONTHDAY?parseInt(t.BYMONTHDAY):void 0,byMonth:t.BYMONTH?parseInt(t.BYMONTH):void 0,byDay:t.BYDAY||void 0}}function es(e){const t=["th","st","nd","rd"],a=e%100;return e+(t[(a-20)%10]||t[a]||t[0])}function Vi(e){const t=Iy(e);if(!t)return e;switch(t.freq){case"DAILY":return t.interval===1?"Daily":`Every ${t.interval} days`;case"WEEKLY":return t.interval===1?t.byDay&&Ro[t.byDay]?`Weekly on ${Ro[t.byDay]}`:"Weekly":t.interval===2?"Biweekly":`Every ${t.interval} weeks`;case"MONTHLY":return t.interval===1?t.byMonthDay?`Monthly on the ${es(t.byMonthDay)}`:"Monthly":t.interval===3?t.byMonthDay?`Quarterly on the ${es(t.byMonthDay)}`:"Quarterly":t.interval===6?"Every 6 months":`Every ${t.interval} months`;case"YEARLY":if(t.byMonth){const a=Fy[t.byMonth-1];return t.byMonthDay?`Yearly on ${a} ${es(t.byMonthDay)}`:`Yearly in ${a}`}return t.interval===1?"Yearly":`Every ${t.interval} years`}}function Qm({onPostpone:e,onClose:t}){const[a,l]=N.useState(!1),[n,i]=N.useState("");function s(){const d=new Date;return d.setDate(d.getDate()+1),d.toISOString().split("T")[0]}function u(){const d=new Date,h=(8-d.getDay())%7||7;return d.setDate(d.getDate()+h),d.toISOString().split("T")[0]}function r(){const d=new Date;return d.setDate(d.getDate()+1),d.toISOString().split("T")[0]}return c.jsx("div",{className:"postpone-overlay",onClick:t,children:c.jsxs("div",{className:"postpone-popover",onClick:d=>d.stopPropagation(),children:[c.jsx("div",{className:"postpone-title",children:"Push forward to..."}),c.jsx("button",{className:"postpone-option",onClick:()=>e(s()),children:"Tomorrow"}),c.jsx("button",{className:"postpone-option",onClick:()=>e(u()),children:"Next week"}),a?c.jsxs("div",{className:"postpone-date-row",children:[c.jsx("input",{type:"date",className:"postpone-date-input",value:n,min:r(),onChange:d=>i(d.target.value),autoFocus:!0}),c.jsx("button",{className:"postpone-date-confirm",disabled:!n,onClick:()=>n&&e(n),children:"Go"})]}):c.jsx("button",{className:"postpone-option",onClick:()=>l(!0),children:"Pick a date..."})]})})}function Kl({action:e,onClick:t,onDelete:a,onComplete:l,onPostpone:n,selectable:i,selected:s,onSelect:u,personLabel:r}){var H;const d=e.urgency.toLowerCase(),h=N.useRef(null),[v,m]=N.useState(0),[y,b]=N.useState(!1),[S,O]=N.useState(!1),[o,f]=N.useState(!1);function p(){const _=window.getSelection();_&&_.toString().length>0||y||S||t()}function x(){return e.confidence>=.8?"high":e.confidence>=.5?"medium":"low"}function j(){if(!e.dueDate)return null;const _=new Date(e.dueDate),M=new Date,G=Math.ceil((_.getTime()-M.getTime())/(1e3*60*60*24));return G<0?`${Math.abs(G)}d overdue`:G===0?"Today":G===1?"Tomorrow":G<7?`${G}d`:_.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function C(){if(!e.dueDate)return null;const _=new Date(e.dueDate);return Math.ceil((_.getTime()-Date.now())/(1e3*60*60*24))}function g(){const _=C();return _===null?"":_<0?"card-overdue":_===0?"card-due-today":_<=2?"card-due-soon":""}function z(){const _=window.getSelection();return!!(_&&_.toString().length>0)}function w(_){h.current=_.touches[0].clientX}function R(_){if(h.current===null||z())return;const M=_.touches[0].clientX-h.current;M<-10?(b(!0),m(Math.min(0,M))):M>10&&l&&(b(!0),m(Math.max(0,M)))}function ae(){if(z()){h.current=null;return}v<-120&&a?(m(-300),setTimeout(()=>a(e.id),200)):v>120&&l?(O(!0),m(0),setTimeout(()=>l(e.id),700)):m(0),h.current=null,setTimeout(()=>b(!1),50)}function re(_){f(!1),n==null||n(e.id,_)}const Ue=e.container==="CANDIDATES",je=j(),Ae=g(),E=(C()??1)<0;return c.jsxs("div",{className:`action-card ${S?"action-card-completing":""}`,onClick:p,children:[v>10&&c.jsx("div",{className:"action-card-complete-bg",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})})}),v<-10&&c.jsx("div",{className:"action-card-delete-bg",children:"Delete"}),S&&c.jsx("div",{className:"completion-overlay",children:c.jsx("svg",{className:"completion-check",width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"var(--success)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})})}),c.jsxs("div",{className:`action-card-inner ${Ae}`,style:{transform:v!==0?`translateX(${v}px)`:void 0,transition:y?"none":"transform 0.2s ease"},onTouchStart:w,onTouchMove:R,onTouchEnd:ae,children:[i&&c.jsx("div",{className:"action-checkbox-wrapper",onClick:_=>_.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"action-checkbox",checked:!!s,onChange:()=>u==null?void 0:u(e.id)})}),c.jsx("div",{className:`action-urgency-bar ${d}`}),c.jsxs("div",{className:"action-content",children:[e.needsFollowUp&&c.jsx("div",{className:"action-followup-nudge",children:"Still important? Tap to review."}),r&&c.jsx("div",{className:"action-person-label",children:r}),c.jsx("div",{className:"action-description",children:e.shortDescription||e.description}),((H=e.source)==null?void 0:H.type)==="GMAIL"&&(e.source.emailFrom||e.source.emailSubject)&&!r&&c.jsxs("div",{className:"action-source-line",children:["From: ",e.source.emailFrom||"Unknown"," · ",e.source.emailSubject||"No subject"]}),c.jsxs("div",{className:"action-meta",children:[Ue&&c.jsx("span",{className:"badge badge-unconfirmed",children:"Unconfirmed"}),e.container==="WAITING"&&c.jsx("span",{className:"badge badge-waiting",children:"Waiting"}),e.needsClarification&&c.jsx("span",{className:"badge badge-clarify",children:e.missingInfo?`Unclear: ${JSON.parse(e.missingInfo).slice(0,2).join(", ")}`:"Clarify"}),e.needsTuning&&c.jsx("span",{className:"badge badge-tuning",children:"Tuning"}),e.recurrenceRule&&c.jsxs("span",{className:"badge badge-recurrence",children:["↻ ",Vi(e.recurrenceRule)]}),je&&c.jsx("span",{className:`action-due ${E?"action-due-overdue":""}`,children:je}),n&&c.jsx("button",{className:"postpone-clock-btn",onClick:_=>{_.stopPropagation(),f(!0)},title:"Push forward",children:c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("polyline",{points:"12 6 12 12 16 14"})]})}),c.jsxs("span",{className:"action-confidence",children:[c.jsx("span",{className:`confidence-dot ${x()}`}),Math.round(e.confidence*100),"%"]})]})]})]}),o&&c.jsx(Qm,{onPostpone:re,onClose:()=>f(!1)})]})}function Zm({onClose:e,onCreated:t}){const[a,l]=N.useState("input"),[n,i]=N.useState(""),[s,u]=N.useState(null),[r,d]=N.useState({}),[h,v]=N.useState(null);async function m(){if(!n.trim()){v("Please enter a description");return}l("parsing"),v(null);try{const o=await uy(n.trim());u(o),o.container==="AMBIGUITY"&&o.questions.length>0?l("clarify"):l("preview")}catch(o){v("Failed to parse action"),l("input"),console.error(o)}}async function y(){if(s){l("parsing"),v(null);try{const o=await oy(s.rawInput,r);u(o),o.container==="AMBIGUITY"&&o.questions.length>0?(d({}),l("clarify")):l("preview")}catch(o){v("Failed to clarify"),l("clarify"),console.error(o)}}}async function b(){if(s){l("parsing"),v(null);try{await ry(s),t()}catch(o){v("Failed to save action"),l("preview"),console.error(o)}}}function S(o,f){s&&u({...s,[o]:f})}function O(){return s?s.confidence>=.8?"var(--success)":s.confidence>=.5?"var(--warning)":"var(--urgency-critical)":"var(--text-secondary)"}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsxs("h2",{className:"modal-title",children:[a==="input"&&"New Action",a==="parsing"&&"Analyzing...",a==="preview"&&"Review Action",a==="clarify"&&"Need More Info"]}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),a==="input"&&c.jsxs("div",{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What needs to be done?"}),c.jsx("textarea",{className:"form-textarea",value:n,onChange:o=>i(o.target.value),placeholder:"e.g., Call John about the project proposal by Friday",autoFocus:!0,rows:3}),c.jsx("p",{className:"form-hint",children:"Include details like who, what, when - AI will extract the action"})]}),h&&c.jsx("div",{className:"form-error",children:h}),c.jsx("button",{type:"button",className:"btn btn-primary btn-block",onClick:m,children:"Parse with AI"})]}),a==="parsing"&&c.jsxs("div",{className:"parsing-state",children:[c.jsx("div",{className:"spinner"}),c.jsx("p",{children:"Analyzing your input..."})]}),a==="preview"&&s&&c.jsxs("div",{children:[c.jsxs("div",{className:"preview-section",children:[c.jsxs("div",{className:"preview-confidence",style:{color:O()},children:[Math.round(s.confidence*100),"% confident"]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:s.description,onChange:o=>S("description",o.target.value),rows:2})]}),s.suggestedAction&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Suggested Next Step"}),c.jsx("input",{type:"text",className:"form-input",value:s.suggestedAction,onChange:o=>S("suggestedAction",o.target.value)})]}),c.jsxs("div",{className:"preview-meta",children:[c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Container"}),c.jsx("select",{className:"form-select form-select-small",value:s.container,onChange:o=>S("container",o.target.value),children:["ACTIONABLE_NOW","CANDIDATES","WAITING","AMBIGUITY"].map(o=>c.jsx("option",{value:o,children:Tt[o]},o))})]}),c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Urgency"}),c.jsx("select",{className:"form-select form-select-small",value:s.urgency,onChange:o=>S("urgency",o.target.value),children:Object.entries(gl).map(([o,f])=>c.jsx("option",{value:o,children:f},o))})]}),s.dueDate&&c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Due"}),c.jsx("input",{type:"date",className:"form-input form-input-small",value:s.dueDate,onChange:o=>S("dueDate",o.target.value)})]})]}),s.parties.length>0&&c.jsxs("div",{className:"preview-parties",children:[c.jsx("span",{className:"preview-meta-label",children:"People:"}),s.parties.map((o,f)=>c.jsx("span",{className:"party-chip",children:o.name},f))]}),s.recurrenceRule&&c.jsxs("div",{className:"preview-recurrence",children:[c.jsx("span",{className:"preview-meta-label",children:"Repeats"}),c.jsxs("span",{className:"preview-recurrence-value",children:["↻ ",Vi(s.recurrenceRule)]}),s.leadTimeDays!==void 0&&c.jsxs("span",{className:"preview-lead-time",children:["(surfaces ",s.leadTimeDays," days before due)"]})]}),s.reasoning&&c.jsxs("div",{className:"preview-reasoning",children:[c.jsx("span",{className:"preview-meta-label",children:"AI Reasoning"}),c.jsx("p",{children:s.reasoning})]})]}),h&&c.jsx("div",{className:"form-error",children:h}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>l("input"),children:"Edit Input"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:b,children:"Save Action"})]})]}),a==="clarify"&&s&&c.jsxs("div",{children:[c.jsx("p",{className:"clarify-intro",children:"Please answer these questions to clarify your action:"}),s.questions.map((o,f)=>c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:o}),c.jsx("input",{type:"text",className:"form-input",value:r[o]||"",onChange:p=>d({...r,[o]:p.target.value}),placeholder:"Your answer..."})]},f)),h&&c.jsx("div",{className:"form-error",children:h}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>l("input"),children:"Start Over"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:y,disabled:Object.keys(r).length===0,children:"Submit Answers"})]})]}),c.jsx("style",{children:`
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
        `})]})})}const Py={CREATED:"Created",CONTAINER_CHANGE:"Moved",EDITED:"Edited",MERGED:"Merged",TRIGGER_FIRED:"Trigger fired",AI_REPARSED:"AI re-parsed",COMPLETED:"Completed",ARCHIVED:"Archived",FOLLOW_UP_SENT:"Follow-up sent"};function ev({events:e,aiReasoning:t}){function a(n){return new Date(n).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function l(n){const i=Py[n.type];if(n.type==="CONTAINER_CHANGE"&&n.fromContainer&&n.toContainer)return`${i} from ${n.fromContainer} to ${n.toContainer}`;if(n.details)try{const s=JSON.parse(n.details);if(s.source)return`${i} via ${s.source}`;if(s.fields)return`${i}: ${s.fields.join(", ")}`}catch{}return i}return c.jsxs("div",{className:"info-panel",children:[t&&c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"AI Reasoning"}),c.jsx("p",{className:"info-reasoning",children:t})]}),c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"History"}),c.jsx("div",{className:"info-timeline",children:e.map(n=>c.jsxs("div",{className:"timeline-item",children:[c.jsx("span",{className:"timeline-time",children:a(n.createdAt)}),c.jsx("span",{className:"timeline-description",children:l(n)})]},n.id))})]}),c.jsx("style",{children:`
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
      `})]})}function vt({title:e,message:t,confirmLabel:a="Confirm",cancelLabel:l="Cancel",danger:n=!1,inputMode:i=!1,inputPlaceholder:s,inputLabel:u,onConfirm:r,onCancel:d}){const[h,v]=N.useState("");return c.jsxs("div",{className:"confirm-overlay",onClick:d,children:[c.jsxs("div",{className:"confirm-dialog",onClick:m=>m.stopPropagation(),children:[c.jsx("div",{className:"confirm-title",children:e}),c.jsx("div",{className:"confirm-message",children:t}),i&&c.jsxs("div",{className:"confirm-input-group",children:[u&&c.jsx("label",{className:"confirm-input-label",children:u}),c.jsx("input",{type:"text",className:"confirm-input",value:h,onChange:m=>v(m.target.value),placeholder:s,autoFocus:!0})]}),c.jsxs("div",{className:"confirm-actions",children:[c.jsx("button",{className:"confirm-btn confirm-btn-cancel",onClick:d,children:l}),c.jsx("button",{className:`confirm-btn ${n?"confirm-btn-danger":"confirm-btn-primary"}`,onClick:()=>r(i?h:void 0),disabled:i&&!h.trim(),children:a})]})]}),c.jsx("style",{children:`
        .confirm-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 24px;
        }
        .confirm-dialog {
          background: var(--bg-secondary);
          border-radius: 14px;
          padding: 20px;
          max-width: 320px;
          width: 100%;
        }
        .confirm-title {
          font-size: 17px;
          font-weight: 600;
          text-align: center;
          margin-bottom: 8px;
        }
        .confirm-message {
          font-size: 14px;
          color: var(--text-secondary);
          text-align: center;
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .confirm-input-group {
          margin-bottom: 16px;
        }
        .confirm-input-label {
          display: block;
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }
        .confirm-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          background: var(--bg-card);
          color: var(--text-primary);
          font-size: 14px;
          font-family: inherit;
          box-sizing: border-box;
        }
        .confirm-input:focus {
          outline: none;
          border-color: var(--accent);
        }
        .confirm-actions {
          display: flex;
          gap: 8px;
        }
        .confirm-btn {
          flex: 1;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
        }
        .confirm-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .confirm-btn-cancel {
          background: var(--bg-card);
          color: var(--accent);
        }
        .confirm-btn-primary {
          background: var(--accent);
          color: white;
        }
        .confirm-btn-danger {
          background: var(--urgency-critical);
          color: white;
        }
      `})]})}function Uo({trigger:e,onUpdate:t}){const[a,l]=N.useState(!1),[n,i]=N.useState(null);function s(m){return m?new Date(m).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""}function u(m){if(!m)return"";const y=new Date(m),b=new Date,S=Math.ceil((y.getTime()-b.getTime())/(1e3*60*60*24));return S<0?`${Math.abs(S)}d ago`:S===0?"Today":S===1?"Tomorrow":S<7?`In ${S}d`:s(m)}function r(){switch(e.type){case"DATE_EXACT":return u(e.triggerDate);case"DATE_WINDOW":return`${s(e.dateWindowStart)} - ${s(e.dateWindowEnd)}`;case"EMAIL_REPLY":return e.emailPattern||"Waiting for reply";case"MANUAL_CHECK":return e.eventDescription||"Check condition";case"WEB_CONDITION":return e.webQuery||"Monitoring web for condition";default:return""}}async function d(){l(!0);try{await vy(e.id),t()}catch(m){console.error("Failed to fire trigger:",m)}finally{l(!1)}i(null)}async function h(m){l(!0);try{await by(e.id,m),t()}catch(y){console.error("Failed to check trigger:",y)}finally{l(!1)}}async function v(){l(!0);try{await yy(e.id),t()}catch(m){console.error("Failed to delete trigger:",m)}finally{l(!1)}i(null)}return e.isTriggered?c.jsxs("div",{className:"trigger-card fired",children:[c.jsx("div",{className:"trigger-icon",children:"✓"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:Qi[e.type]}),c.jsxs("div",{className:"trigger-info",children:["Fired ",u(e.triggeredAt)]})]})]}):c.jsxs("div",{className:"trigger-card",children:[c.jsx("div",{className:"trigger-icon",children:"⏳"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:Qi[e.type]}),c.jsx("div",{className:"trigger-info",children:r()}),e.description&&c.jsx("div",{className:"trigger-description",children:e.description}),e.type==="WEB_CONDITION"&&e.webCheckResult&&c.jsxs("div",{className:"trigger-description",children:["Last check: ",e.webCheckResult]}),e.type==="WEB_CONDITION"&&e.lastChecked&&c.jsxs("div",{className:"trigger-description",style:{opacity:.6},children:["Checked ",u(e.lastChecked)," · ",e.checkCount," checks"]})]}),c.jsxs("div",{className:"trigger-actions",children:[e.type==="MANUAL_CHECK"?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"trigger-btn check",onClick:()=>h(!0),disabled:a,title:"Condition met",children:"✓"}),c.jsx("button",{className:"trigger-btn skip",onClick:()=>h(!1),disabled:a,title:"Not yet",children:"↻"})]}):c.jsx("button",{className:"trigger-btn fire",onClick:()=>i("fire"),disabled:a,title:"Fire now",children:"▶"}),c.jsx("button",{className:"trigger-btn delete",onClick:()=>i("delete"),disabled:a,title:"Delete",children:"✕"})]}),n==="fire"&&c.jsx(vt,{title:"Fire Trigger",message:"Fire this trigger now? The action will move to Actionable Now.",confirmLabel:"Fire",onConfirm:d,onCancel:()=>i(null)}),n==="delete"&&c.jsx(vt,{title:"Delete Trigger",message:"Delete this trigger?",confirmLabel:"Delete",danger:!0,onConfirm:v,onCancel:()=>i(null)}),c.jsx("style",{children:`
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
      `})]})}function tv({actionId:e,onClose:t,onCreated:a}){const[l,n]=N.useState("DATE_EXACT"),[i,s]=N.useState(""),[u,r]=N.useState(""),[d,h]=N.useState(""),[v,m]=N.useState(""),[y,b]=N.useState(""),[S,O]=N.useState(!1),[o,f]=N.useState(null);async function p(C){if(C.preventDefault(),f(null),l==="DATE_EXACT"&&!u){f("Please select a date");return}if(l==="DATE_WINDOW"&&(!d||!v)){f("Please select both start and end dates");return}if(l==="MANUAL_CHECK"&&!y){f("Please describe what to check for");return}O(!0);try{await Rn({actionId:e,type:l,description:i||void 0,triggerDate:l==="DATE_EXACT"?u:void 0,dateWindowStart:l==="DATE_WINDOW"?d:void 0,dateWindowEnd:l==="DATE_WINDOW"?v:void 0,eventDescription:l==="MANUAL_CHECK"?y:void 0}),a(),t()}catch(g){f("Failed to create trigger"),console.error(g)}finally{O(!1)}}const x=new Date;x.setDate(x.getDate()+1);const j=x.toISOString().split("T")[0];return c.jsx("div",{className:"trigger-modal-overlay",onClick:t,children:c.jsxs("div",{className:"trigger-modal",onClick:C=>C.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Add Trigger"}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]}),c.jsxs("form",{onSubmit:p,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Type"}),c.jsx("div",{className:"trigger-type-options",children:Object.keys(Qi).map(C=>c.jsx("button",{type:"button",className:`trigger-type-btn ${l===C?"active":""}`,onClick:()=>n(C),children:Qi[C]},C))})]}),l==="DATE_EXACT"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Date"}),c.jsx("input",{type:"date",className:"form-input",value:u,onChange:C=>r(C.target.value),min:j}),c.jsx("p",{className:"form-hint",children:"Action will move to Actionable Now on this date"})]}),l==="DATE_WINDOW"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Start Date"}),c.jsx("input",{type:"date",className:"form-input",value:d,onChange:C=>h(C.target.value),min:j})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"End Date"}),c.jsx("input",{type:"date",className:"form-input",value:v,onChange:C=>m(C.target.value),min:d||j})]}),c.jsx("p",{className:"form-hint",children:"Action will become active when start date is reached"})]}),l==="EMAIL_REPLY"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:C=>s(C.target.value),placeholder:"e.g., Waiting for reply from John"}),c.jsx("p",{className:"form-hint",children:"You'll be prompted to manually check for the reply"})]}),l==="MANUAL_CHECK"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What to check for"}),c.jsx("textarea",{className:"form-textarea",value:y,onChange:C=>b(C.target.value),placeholder:"e.g., 30% trade-in promotion period starts",rows:2}),c.jsx("p",{className:"form-hint",children:"You'll be prompted periodically to check if this condition is met"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Note (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:C=>s(C.target.value),placeholder:"Add a note about this trigger..."})]}),o&&c.jsx("div",{className:"form-error",children:o}),c.jsxs("div",{className:"trigger-modal-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:S,children:S?"Adding...":"Add Trigger"})]})]}),c.jsx("style",{children:`
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
            padding: 14px;
            background: var(--bg-card);
            border: 2px solid transparent;
            border-radius: 8px;
            color: var(--text-secondary);
            font-size: 16px;
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
            font-size: 15px;
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
        `})]})})}function er({actionId:e,onClose:t,onUpdate:a}){var ar,lr;const[l,n]=N.useState(null),[i,s]=N.useState([]),[u,r]=N.useState(!0),[d,h]=N.useState(!1),[v,m]=N.useState(!1),[y,b]=N.useState(!1),[S,O]=N.useState(!1),[o,f]=N.useState(!1),[p,x]=N.useState(null),[j,C]=N.useState(!1),[g,z]=N.useState(""),[w,R]=N.useState(null),[ae,re]=N.useState(""),[Ue,je]=N.useState("MEDIUM"),[Ae,E]=N.useState(""),[H,_]=N.useState(!1),[M,G]=N.useState(!1),[le,Ce]=N.useState(!1),[Ye,ze]=N.useState(null),[de,xt]=N.useState(""),[k,J]=N.useState(null),[He,we]=N.useState(""),[D,B]=N.useState(!1);N.useEffect(()=>{X()},[e]),N.useEffect(()=>{if(!(o||le||S||D))return;function fe(){f(!1),Ce(!1),O(!1),B(!1),J(null)}const pc=setTimeout(()=>document.addEventListener("click",fe),0);return()=>{clearTimeout(pc),document.removeEventListener("click",fe)}},[o,le,S,D]);async function X(){try{const[A,fe]=await Promise.all([ly(e),py({actionId:e})]);n(A),s(fe),re(A.description),je(A.urgency),E(A.dueDate?A.dueDate.split("T")[0]:"")}catch(A){console.error("Failed to load action:",A)}finally{r(!1)}}async function Jt(){if(l){_(!0);try{await kt(l.id,{description:ae,urgency:Ue,dueDate:Ae||null,version:l.version}),h(!1),X(),a()}catch(A){console.error("Failed to save:",A)}finally{_(!1)}}}function Un(){l&&(re(l.description),je(l.urgency),E(l.dueDate?l.dueDate.split("T")[0]:""),h(!1))}async function Wt(){if(l){G(!0);try{await fy(l.id),h(!1),X(),a()}catch(A){console.error("Failed to reparse:",A)}finally{G(!1)}}}async function Vm(){if(l)try{const A=await Pu(l.id);if(A.nextAction){const fe=A.nextAction.dueDate?new Date(A.nextAction.dueDate).toLocaleDateString():"scheduled";x(`Marked complete. Next occurrence scheduled for ${fe}.`),setTimeout(()=>{a(),t()},3e3)}else a(),t()}catch(A){console.error("Failed to complete:",A)}}async function Km(){if(!l)return;const A=parseInt(g);if(!(isNaN(A)||A<0||A>90))try{await kt(l.id,{leadTimeDays:A,version:l.version}),C(!1),X(),a()}catch(fe){console.error("Failed to update lead time:",fe)}}async function Jm(){if(l)try{await _o(l.id,"ACTIONABLE_NOW"),X(),a()}catch(A){console.error("Failed to confirm:",A)}}function mc(){X(),a()}async function gc(A,fe){if(l)try{await Gy(l.id,A,fe),O(!1),X(),a()}catch(pc){console.error("Failed to submit feedback:",pc)}}function Wm(){ze("defer"),xt(""),f(!1)}async function $m(){if(!(!l||!de))try{await Rn({actionId:l.id,type:"DATE_EXACT",description:`Deferred until ${de}`,triggerDate:de}),ze(null),xt(""),X(),a()}catch(A){console.error("Failed to defer action:",A)}}function Fm(){Ce(!0),f(!1)}async function Im(A){if(l)try{await _o(l.id,A),Ce(!1),X(),a()}catch(fe){console.error("Failed to reclassify action:",fe)}}function Pm(){f(!1),R({type:"delete"})}async function eg(){if(l){try{await ny(l.id),a(),t()}catch(A){console.error("Failed to delete action:",A)}R(null)}}function tg(){f(!1),R({type:"merge-id"})}async function ag(A){if(l){try{await zy(A,l.id),a(),t()}catch(fe){console.error("Failed to merge actions:",fe)}R(null)}}async function lg(){if(l){try{await dc(l.id),a(),t()}catch(A){console.error("Failed to archive action:",A)}R(null)}}function kl(A){if(w)if(w.type==="delete")eg();else if(w.type==="archive")lg();else if(w.type==="merge-id"){const fe=parseInt(A||"");if(isNaN(fe))return;R({type:"merge-confirm",primaryId:fe})}else w.type==="merge-confirm"?ag(w.primaryId):w.type==="text-correction"&&(A!=null&&A.trim()&&gc("parsed_wrong",A.trim()),R(null))}const tr=["ACTIONABLE_NOW","CANDIDATES","AMBIGUITY","WAITING"],ng=["CRITICAL","HIGH","MEDIUM","LOW"];if(u)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsx("div",{className:"modal-content",onClick:A=>A.stopPropagation(),children:c.jsx("p",{children:"Loading..."})})});if(!l)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content",onClick:A=>A.stopPropagation(),children:[c.jsx("p",{children:"Action not found"}),c.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Close"})]})});const ja=i.filter(A=>!A.isTriggered),hc=i.filter(A=>A.isTriggered);return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content action-view",onClick:A=>A.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:d?"Edit Action":"Action Details"}),c.jsxs("div",{className:"action-view-actions",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>m(!v),title:"View history",children:"i"}),c.jsxs("div",{className:"menu-wrapper",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>f(!o),title:"More options",children:"⋯"}),o&&c.jsxs("div",{className:"action-menu",onClick:A=>A.stopPropagation(),children:[c.jsx("button",{className:"action-menu-item",onClick:Wm,children:"Defer"}),c.jsx("button",{className:"action-menu-item",onClick:Fm,children:"Reclassify"}),c.jsx("button",{className:"action-menu-item",onClick:tg,children:"Merge"}),c.jsx("button",{className:"action-menu-item",onClick:()=>{b(!0),f(!1)},children:"Add to Waiting"}),c.jsx("button",{className:"action-menu-item action-menu-item--danger",onClick:Pm,children:"Delete"})]})]}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]})]}),d?c.jsxs("div",{className:"action-edit-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:ae,onChange:A=>re(A.target.value)})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Urgency"}),c.jsx("select",{className:"form-select",value:Ue,onChange:A=>je(A.target.value),children:Object.entries(gl).map(([A,fe])=>c.jsx("option",{value:A,children:fe},A))})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Due Date"}),c.jsx("input",{type:"date",className:"form-input",value:Ae,onChange:A=>E(A.target.value)})]}),c.jsxs("div",{className:"action-edit-buttons",children:[c.jsx("button",{className:"btn btn-secondary",onClick:Un,children:"Cancel"}),c.jsx("button",{className:"btn btn-secondary",onClick:Wt,disabled:M||H,children:M?"Parsing...":"Re-parse"}),c.jsx("button",{className:"btn btn-primary",onClick:Jt,disabled:H||M,children:H?"Saving...":"Save"})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"action-detail-content",children:[c.jsx("div",{className:"action-detail-description",children:l.description}),l.needsClarification&&c.jsxs("div",{className:"clarification-banner",children:[c.jsx("div",{className:"clarification-title",children:"I categorized this the best I could, but I'm not confident about:"}),l.missingInfo?c.jsx("ul",{className:"clarification-list",children:JSON.parse(l.missingInfo).map((A,fe)=>c.jsx("li",{className:"clarification-item",children:A},fe))}):l.aiReasoning?c.jsx("div",{className:"clarification-detail",children:l.aiReasoning}):c.jsx("div",{className:"clarification-detail",children:"Review this action and edit any fields that seem off."})]}),l.container==="WAITING"&&(l.recurrenceRule||ja.length>0)&&c.jsx("div",{className:"waiting-summary",children:[l.recurrenceRule&&`↻ ${Vi(l.recurrenceRule)}`,ja.length>0&&ja[0].triggerDate&&`Waiting until ${new Date(ja[0].triggerDate).toLocaleDateString()}`,l.dueDate&&`Due ${new Date(l.dueDate).toLocaleDateString()}`].filter(Boolean).join("  ·  ")}),c.jsx("div",{className:"action-detail-source",children:((ar=l.source)==null?void 0:ar.type)==="GMAIL"?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"From"}),c.jsx("span",{className:"detail-value",children:l.source.emailFrom||"Unknown"})]}),c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Subject"}),c.jsx("span",{className:"detail-value",children:l.source.emailSubject||"No subject"})]}),l.source.emailDate&&c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Date"}),c.jsx("span",{className:"detail-value",children:new Date(l.source.emailDate).toLocaleDateString()})]}),l.source.emailId&&c.jsx("div",{className:"source-row",children:c.jsx("a",{href:`https://mail.google.com/mail/u/0/#inbox/${l.source.emailId}`,target:"_blank",rel:"noopener noreferrer",className:"source-gmail-link",children:"View in Gmail"})})]}):((lr=l.source)==null?void 0:lr.type)==="SIRI"?c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Via Siri"})]}):c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Manually entered"})]})}),l.suggestedAction&&c.jsxs("div",{className:"action-detail-suggested",children:[c.jsx("span",{className:"detail-label",children:"Next step:"}),l.suggestedAction]}),c.jsxs("div",{className:"action-detail-meta",children:[c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Container"}),c.jsx("span",{className:"detail-value",children:Tt[l.container]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Urgency"}),c.jsx("span",{className:`detail-value urgency-${l.urgency.toLowerCase()}`,children:gl[l.urgency]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Confidence"}),c.jsxs("span",{className:"detail-value",children:[Math.round(l.confidence*100),"%"]})]}),l.dueDate&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Due"}),c.jsx("span",{className:"detail-value",children:new Date(l.dueDate).toLocaleDateString()})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Repeats"}),c.jsx("span",{className:"detail-value detail-value-editable",onClick:()=>B(!D),children:l.recurrenceRule?`↻ ${Vi(l.recurrenceRule)}`:"None"})]}),D&&c.jsx("div",{className:"recurrence-picker-inline",onClick:A=>A.stopPropagation(),children:c.jsx("div",{className:"picker-grid picker-grid--3col",children:[{label:"Weekly",rule:"FREQ=WEEKLY;INTERVAL=1",lead:1},{label:"Biweekly",rule:"FREQ=WEEKLY;INTERVAL=2",lead:1},{label:"Monthly",rule:"FREQ=MONTHLY;INTERVAL=1",lead:3},{label:"Quarterly",rule:"FREQ=MONTHLY;INTERVAL=3",lead:7},{label:"Yearly",rule:"FREQ=YEARLY;INTERVAL=1",lead:21},{label:"None",rule:null,lead:21}].map(A=>c.jsx("button",{className:`picker-grid-btn${l.recurrenceRule===A.rule?" picker-grid-btn--current":""}`,disabled:l.recurrenceRule===A.rule||!l.recurrenceRule&&A.rule===null,onClick:async()=>{try{await kt(l.id,{recurrenceRule:A.rule,version:l.version}),B(!1),X(),a()}catch(fe){console.error("Failed to update recurrence:",fe)}},children:A.label},A.label))})}),l.recurrenceRule&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Lead time"}),j?c.jsxs("span",{className:"detail-value lead-time-edit",children:[c.jsx("input",{type:"number",min:"0",max:"90",className:"lead-time-input",value:g,onChange:A=>z(A.target.value),autoFocus:!0}),c.jsx("span",{className:"lead-time-unit",children:"days"}),c.jsx("button",{className:"lead-time-save",onClick:Km,children:"Save"}),c.jsx("button",{className:"lead-time-cancel",onClick:()=>C(!1),children:"Cancel"})]}):c.jsxs("span",{className:"detail-value detail-value-editable",onClick:()=>{z(String(l.leadTimeDays)),C(!0)},children:[l.leadTimeDays," days"]})]})]}),(l.container==="WAITING"||i.length>0)&&c.jsxs("div",{className:"triggers-section",children:[c.jsxs("div",{className:"triggers-header",children:[c.jsx("h3",{children:"Triggers"}),c.jsx("button",{className:"add-trigger-btn",onClick:()=>b(!0),children:"+ Add"})]}),ja.length===0&&hc.length===0?c.jsx("p",{className:"no-triggers",children:"No triggers set. Add one to defer this action."}):c.jsxs(c.Fragment,{children:[ja.map(A=>c.jsx(Uo,{trigger:A,onUpdate:mc},A.id)),hc.length>0&&ja.length>0&&c.jsx("div",{className:"triggers-divider"}),hc.map(A=>c.jsx(Uo,{trigger:A,onUpdate:mc},A.id))]})]})]}),v&&l.events&&c.jsx(ev,{events:l.events,aiReasoning:l.aiReasoning}),l.needsFollowUp&&c.jsxs("div",{className:"followup-nudge-section",children:[c.jsx("div",{className:"followup-nudge-title",children:"Still important?"}),c.jsx("div",{className:"followup-nudge-subtitle",children:"This action hasn't been touched in a while."}),c.jsxs("div",{className:"followup-nudge-buttons",children:[c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:async()=>{await qm(l.id),X(),a()},children:"Still relevant"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:()=>{ze("reschedule"),xt("")},children:"Reschedule"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn followup-archive-btn",onClick:()=>R({type:"archive"}),children:"Archive"})]})]}),Ye&&c.jsxs("div",{className:"date-picker-inline",children:[c.jsx("span",{className:"date-picker-label",children:Ye==="defer"?"Defer until:":"Reschedule to:"}),c.jsx("input",{type:"date",className:"form-input",value:de,onChange:A=>xt(A.target.value),style:{padding:"8px 10px",fontSize:"13px",flex:1,minWidth:0}}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!de,onClick:async()=>{if(Ye==="defer")await $m();else if(Ye==="reschedule"&&l)try{await kt(l.id,{dueDate:de,version:l.version}),ze(null),xt(""),X(),a()}catch(A){console.error("Failed to reschedule:",A)}},children:"Confirm"}),c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{ze(null),xt("")},children:"Cancel"})]}),c.jsxs("div",{className:"action-view-buttons",children:[c.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Close"}),l.needsTuning&&c.jsx("button",{className:"btn btn-primary",onClick:async()=>{await kt(l.id,{needsTuning:!1,version:l.version}),a==null||a()},children:"Looks Good"}),l.needsClarification&&c.jsx("button",{className:"btn btn-primary",onClick:async()=>{await kt(l.id,{needsClarification:!1,version:l.version}),a==null||a()},children:"Resolved"}),l.container==="CANDIDATES"&&c.jsx("button",{className:"btn btn-primary",onClick:Jm,children:"Move to Now"}),(l.container==="CANDIDATES"||l.needsClarification||l.needsTuning)&&c.jsx("button",{className:"btn btn-danger",onClick:async()=>{confirm("Delete this item and teach the system to avoid similar ones?")&&(await iy(l.id),a==null||a())},children:"Not an Action"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>h(!0),children:"Edit"}),c.jsxs("button",{className:"btn btn-success",onClick:Vm,children:["Promise Kept",l.recurrenceRule?" — Next":""]})]}),p&&c.jsx("div",{className:"next-created-banner",children:p}),c.jsx("button",{className:"feedback-btn",onClick:()=>O(!S),children:"AI parsed incorrectly?"}),S&&c.jsxs("div",{className:"feedback-panel",onClick:A=>A.stopPropagation(),children:[c.jsx("p",{className:"feedback-title",children:"What was wrong?"}),c.jsxs("div",{className:"feedback-options",children:[k==="urgency"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct urgency:"}),c.jsx("div",{className:"picker-grid",children:ng.map(A=>c.jsx("button",{className:`picker-grid-btn${He===A?" picker-grid-btn--selected":""}${l.urgency===A?" picker-grid-btn--current":""}`,onClick:()=>we(A),disabled:l.urgency===A,children:gl[A]},A))}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{J(null),we("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!He,onClick:()=>{gc("urgency_incorrect",He),J(null),we("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{J("urgency"),we("")},children:"Wrong urgency level"}),k==="container"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct container:"}),c.jsx("div",{className:"picker-grid",children:tr.map(A=>c.jsx("button",{className:`picker-grid-btn${He===A?" picker-grid-btn--selected":""}${l.container===A?" picker-grid-btn--current":""}`,onClick:()=>we(A),disabled:l.container===A,children:Tt[A]},A))}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{J(null),we("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!He,onClick:()=>{gc("container_incorrect",He),J(null),we("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{J("container"),we("")},children:"Wrong container"}),c.jsx("button",{className:"feedback-option",onClick:()=>R({type:"text-correction"}),children:"Parsed text is wrong"})]})]}),le&&c.jsxs("div",{className:"reclassify-panel",onClick:A=>A.stopPropagation(),children:[c.jsx("p",{className:"feedback-title",children:"Move to container:"}),c.jsx("div",{className:"picker-grid",children:tr.map(A=>c.jsx("button",{className:`picker-grid-btn${l.container===A?" picker-grid-btn--current":""}`,disabled:l.container===A,onClick:()=>Im(A),children:Tt[A]},A))}),c.jsx("button",{className:"btn btn-secondary btn-block",style:{marginTop:8},onClick:()=>Ce(!1),children:"Cancel"})]})]}),y&&c.jsx(tv,{actionId:e,onClose:()=>b(!1),onCreated:mc}),w&&w.type==="delete"&&c.jsx(vt,{title:"Delete Action",message:`Permanently delete "${l.description.substring(0,60)}"? This cannot be undone.`,confirmLabel:"Delete",danger:!0,onConfirm:()=>kl(),onCancel:()=>R(null)}),w&&w.type==="archive"&&c.jsx(vt,{title:"Archive Action",message:"Archive this action? You can find it later in search.",confirmLabel:"Archive",onConfirm:()=>kl(),onCancel:()=>R(null)}),w&&w.type==="merge-id"&&c.jsx(vt,{title:"Merge Action",message:"Enter the ID of the action to merge this into.",confirmLabel:"Next",inputMode:!0,inputPlaceholder:"Action ID",inputLabel:"Target action ID:",onConfirm:A=>kl(A),onCancel:()=>R(null)}),w&&w.type==="merge-confirm"&&c.jsx(vt,{title:"Confirm Merge",message:`Merge this action into action #${w.primaryId}? This cannot be undone.`,confirmLabel:"Merge",danger:!0,onConfirm:()=>kl(),onCancel:()=>R(null)}),w&&w.type==="text-correction"&&c.jsx(vt,{title:"Correct Description",message:"What should the parsed text say?",confirmLabel:"Submit",inputMode:!0,inputPlaceholder:"Corrected description...",inputLabel:"Correct text:",onConfirm:A=>kl(A),onCancel:()=>R(null)}),c.jsx("style",{children:`
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
            padding: 16px 20px;
            background: none;
            border: none;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            color: var(--text-primary);
            font-size: 16px;
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
            width: 38px;
            height: 38px;
            border-radius: 19px;
            border: 1px solid var(--text-secondary);
            background: transparent;
            color: var(--text-secondary);
            font-size: 16px;
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
          .clarification-banner {
            background: rgba(251, 191, 36, 0.1);
            border: 1px solid rgba(251, 191, 36, 0.3);
            border-radius: 8px;
            padding: 12px;
            margin-bottom: 12px;
          }
          .clarification-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--warning);
            margin-bottom: 4px;
          }
          .clarification-list {
            margin: 4px 0 0 0;
            padding-left: 20px;
          }
          .clarification-item {
            font-size: 16px;
            color: var(--text-primary);
            line-height: 1.6;
          }
          .clarification-detail {
            font-size: 16px;
            color: var(--text-secondary);
            line-height: 1.4;
          }
          .action-detail-suggested {
            font-size: 16px;
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
            font-size: 16px;
          }
          .detail-value {
            font-weight: 500;
            font-size: 16px;
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
            font-size: 16px;
            font-weight: 600;
            color: var(--text-secondary);
          }
          .add-trigger-btn {
            background: none;
            border: none;
            color: var(--accent);
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          }
          .no-triggers {
            font-size: 16px;
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
            width: 60px;
            padding: 6px 8px;
            font-size: 16px;
            border: 1px solid var(--separator);
            border-radius: 4px;
            background: var(--bg-elevated);
            color: var(--text-primary);
            text-align: center;
          }
          .lead-time-unit {
            font-size: 16px;
            color: var(--text-secondary);
          }
          .lead-time-save, .lead-time-cancel {
            padding: 6px 12px;
            font-size: 16px;
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
            padding: 14px 16px;
            margin-top: 12px;
            font-size: 16px;
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
            font-size: 16px;
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
            padding: 12px 16px;
            font-size: 16px;
          }
          .followup-archive-btn {
            color: var(--text-secondary);
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
            padding: 12px;
            background: none;
            border: none;
            color: var(--text-secondary);
            font-size: 16px;
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
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 8px;
          }
          .feedback-options {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .feedback-option {
            padding: 14px 16px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
            color: var(--text-primary);
            font-size: 16px;
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
          .picker-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 4px;
          }
          .picker-grid--3col {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .recurrence-picker-inline {
            padding: 8px 0 4px;
          }
          .picker-grid-btn {
            padding: 16px;
            border: 1px solid var(--separator);
            border-radius: 8px;
            background: var(--bg-elevated);
            color: var(--text-primary);
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            text-align: center;
            font-family: inherit;
            transition: all 0.15s;
          }
          .picker-grid-btn:hover:not(:disabled) {
            background: rgba(0, 122, 255, 0.1);
            border-color: var(--color-now);
          }
          .picker-grid-btn--current {
            opacity: 0.35;
            cursor: default;
          }
          .picker-grid-btn--selected {
            background: rgba(0, 122, 255, 0.15);
            border-color: var(--accent);
            color: var(--accent);
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
            font-size: 16px;
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
            font-size: 16px;
            color: var(--text-secondary);
            white-space: nowrap;
          }
          .btn-sm {
            padding: 10px 16px;
            font-size: 16px;
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
            font-size: 16px;
            color: var(--text-secondary);
          }
          .feedback-picker-actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
          }
          .waiting-summary {
            background: rgba(50, 173, 230, 0.1);
            border: 1px solid rgba(50, 173, 230, 0.3);
            border-radius: 8px;
            padding: 12px 14px;
            margin-bottom: 12px;
            font-size: 15px;
            font-weight: 500;
            color: var(--color-waiting);
            text-align: center;
          }
        `})]})})}const ts={needsClarification:"Needs Clarification",needsTuning:"Needs Tuning"},av=["ACTIONABLE_NOW","CANDIDATES","WAITING"];function lv({activeContainer:e,flagFilter:t,onDataChange:a,onOpenGroups:l}){const[n,i]=N.useState([]),[s,u]=N.useState(!0),[r,d]=N.useState(!1),[h,v]=N.useState(null),[m,y]=N.useState(!1),[b,S]=N.useState(new Set),[O,o]=N.useState(!1),[f,p]=N.useState(!1);N.useEffect(()=>{x()},[e,t]);async function x(){u(!0);try{let M;t?M=await Vy(t):M=await Ym(e),i(M),a==null||a()}catch(M){console.error("Failed to load actions:",M)}finally{u(!1)}}function j(){return t?ts[t]||t:e?Tt[e]:"All Actions"}function C(){d(!1),x(),Ve()}function g(){m?(y(!1),S(new Set),o(!1)):y(!0)}function z(M){S(G=>{const le=new Set(G);return le.has(M)?le.delete(M):le.add(M),le})}function w(){b.size===n.length?S(new Set):S(new Set(n.map(M=>M.id)))}async function R(){if(b.size!==0){p(!0);try{await Ky(Array.from(b)),E()}catch(M){console.error("Bulk complete failed:",M)}finally{p(!1)}}}async function ae(){if(b.size!==0){p(!0);try{await Jy(Array.from(b)),E()}catch(M){console.error("Bulk delete failed:",M)}finally{p(!1)}}}async function re(M){if(b.size!==0){p(!0),o(!1);try{await Wy(Array.from(b),M),E()}catch(G){console.error("Bulk move failed:",G)}finally{p(!1)}}}async function Ue(M){i(G=>G.filter(le=>le.id!==M));try{await dc(M),Ve()}catch(G){console.error("Swipe delete failed:",G),x()}}async function je(M){i(G=>G.filter(le=>le.id!==M));try{await Pu(M),Ve()}catch(G){console.error("Swipe complete failed:",G),x()}}async function Ae(M,G){try{const le=n.find(Ce=>Ce.id===M);if(!le)return;i(Ce=>Ce.filter(Ye=>Ye.id!==M)),await kt(M,{dueDate:G,version:le.version}),await Rn({actionId:M,type:"DATE_EXACT",triggerDate:G}),Ve()}catch(le){console.error("Postpone failed:",le),x()}}function E(){y(!1),S(new Set),o(!1),x(),Ve()}if(s)return c.jsx("div",{className:"feed",children:c.jsx("div",{className:"feed-empty",children:"Loading..."})});const H=b.size,_=n.length>0&&b.size===n.length;return c.jsxs("div",{className:"feed",children:[c.jsxs("div",{className:"feed-header",children:[c.jsx("h1",{className:"feed-title",children:j()}),n.length>0&&c.jsx("button",{className:"feed-select-toggle",onClick:g,children:m?"Cancel":"Select"})]}),m&&n.length>0&&c.jsx("div",{className:"feed-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:_,onChange:w}),"Select All (",n.length,")"]})}),n.length===0?c.jsx("div",{className:"feed-empty",children:t?`No items ${ts[t]?"flagged as "+ts[t].toLowerCase():""}`:e?`No items in ${Tt[e]}`:"No actions yet. Tap + to add one."}):n.map(M=>c.jsx(Kl,{action:M,onDelete:Ue,onComplete:je,onPostpone:Ae,selectable:m,selected:b.has(M.id),onSelect:z,onClick:()=>{m?z(M.id):v(M.id)}},M.id)),m&&H>0&&c.jsxs("div",{className:"bulk-toolbar",children:[c.jsxs("button",{className:"bulk-btn bulk-complete",onClick:R,disabled:f,children:["Kept (",H,")"]}),c.jsxs("button",{className:"bulk-btn bulk-delete",onClick:ae,disabled:f,children:["Delete (",H,")"]}),c.jsxs("div",{className:"bulk-move-wrapper",children:[c.jsxs("button",{className:"bulk-btn bulk-move",onClick:()=>o(!O),disabled:f,children:["Move (",H,")"]}),O&&c.jsx("div",{className:"bulk-move-dropdown",children:av.map(M=>c.jsx("button",{className:"bulk-move-option",onClick:()=>re(M),children:Tt[M]},M))})]})]}),c.jsx("button",{className:"quick-capture",onClick:()=>d(!0),children:"+"}),r&&c.jsx(Zm,{onClose:()=>d(!1),onCreated:C}),h&&c.jsx(er,{actionId:h,onClose:()=>v(null),onUpdate:()=>{x(),Ve(),v(null)}})]})}function nv({onShowFeed:e,onShowWeeklyReview:t,showWeeklyBanner:a}){const[l,n]=N.useState(null),[i,s]=N.useState(null),[u,r]=N.useState(!0),[d,h]=N.useState(null),[v,m]=N.useState(!1);N.useEffect(()=>{y()},[]);async function y(){r(!0);try{const[j,C]=await Promise.all([Ly(),qy()]);n(j),s(C)}catch(j){console.error("Failed to load promises:",j)}finally{r(!1)}}function b(j){var C;if(j.parties&&j.parties.length>0)return`Promise to ${j.parties.map(z=>z.name).slice(0,2).join(" & ")}`;if(((C=j.source)==null?void 0:C.type)==="GMAIL"&&j.source.emailFrom){const g=j.source.emailFrom;return`From ${g.split("<")[0].trim()||g.split("@")[0]}`}}function S(j){n(C=>C?{dueToday:C.dueToday.filter(g=>g.id!==j),becameReady:C.becameReady.filter(g=>g.id!==j),atRisk:C.atRisk.filter(g=>g.id!==j),comingUp:C.comingUp.filter(g=>g.id!==j)}:null)}async function O(j){S(j);try{await Pu(j),Ve()}catch(C){console.error("Complete failed:",C),y()}}async function o(j){S(j);try{await dc(j),Ve()}catch(C){console.error("Delete failed:",C),y()}}async function f(j,C){try{const g=(l==null?void 0:l.dueToday.find(z=>z.id===j))||(l==null?void 0:l.becameReady.find(z=>z.id===j))||(l==null?void 0:l.atRisk.find(z=>z.id===j))||(l==null?void 0:l.comingUp.find(z=>z.id===j));if(!g)return;S(j),await kt(j,{dueDate:C,version:g.version}),await Rn({actionId:j,type:"DATE_EXACT",triggerDate:C,description:`Postponed to ${new Date(C).toLocaleDateString()}`}),Ve()}catch(g){console.error("Postpone failed:",g),y()}}function p(){m(!1),y(),Ve()}if(u)return c.jsx("div",{className:"promises-view",children:c.jsx("div",{className:"promises-loading",children:"Loading your day..."})});const x=l&&l.dueToday.length===0&&l.becameReady.length===0&&l.atRisk.length===0&&l.comingUp.length===0;return c.jsxs("div",{className:"promises-view",children:[i&&i.summary&&c.jsxs("div",{className:"promises-brief",children:[c.jsx("div",{className:"brief-text",children:i.summary}),i.weekAhead>0&&c.jsxs("div",{className:"brief-week",children:[i.weekAhead," more coming this week"]})]}),a&&c.jsxs("button",{className:"weekly-review-banner",onClick:t,children:[c.jsx("span",{children:"Time for your weekly check-in"}),c.jsx("span",{className:"weekly-review-arrow",children:"›"})]}),x?c.jsxs("div",{className:"promises-empty",children:[c.jsxs("svg",{className:"promises-empty-icon",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"var(--success)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),c.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),c.jsx("div",{className:"promises-empty-title",children:"All clear"}),c.jsx("div",{className:"promises-empty-subtitle",children:"No promises need attention today."})]}):c.jsxs(c.Fragment,{children:[l&&l.dueToday.length>0&&c.jsx(Pn,{title:"Due Today",count:l.dueToday.length,accent:"var(--urgency-high)",children:l.dueToday.map(j=>c.jsx(Kl,{action:j,personLabel:b(j),onClick:()=>h(j.id),onDelete:o,onComplete:O,onPostpone:f},j.id))}),l&&l.becameReady.length>0&&c.jsx(Pn,{title:"Became Ready",count:l.becameReady.length,accent:"var(--success)",children:l.becameReady.map(j=>c.jsx(Kl,{action:j,personLabel:b(j),onClick:()=>h(j.id),onDelete:o,onComplete:O,onPostpone:f},j.id))}),l&&l.atRisk.length>0&&c.jsx(Pn,{title:"At Risk",count:l.atRisk.length,accent:"var(--urgency-critical)",children:l.atRisk.map(j=>c.jsx(Kl,{action:j,personLabel:b(j),onClick:()=>h(j.id),onDelete:o,onComplete:O,onPostpone:f},j.id))}),l&&l.comingUp.length>0&&c.jsx(Pn,{title:"Coming Up",count:l.comingUp.length,accent:"var(--color-waiting)",children:l.comingUp.map(j=>c.jsx(Kl,{action:j,personLabel:b(j),onClick:()=>h(j.id),onDelete:o,onComplete:O,onPostpone:f},j.id))})]}),c.jsx("button",{className:"promises-show-all",onClick:e,children:"View all actions"}),c.jsx("button",{className:"quick-capture",onClick:()=>m(!0),children:"+"}),v&&c.jsx(Zm,{onClose:()=>m(!1),onCreated:p}),d&&c.jsx(er,{actionId:d,onClose:()=>h(null),onUpdate:()=>{y(),Ve(),h(null)}})]})}function Pn({title:e,count:t,accent:a,children:l}){return c.jsxs("div",{className:"promises-section",children:[c.jsxs("div",{className:"promises-section-header",children:[c.jsx("span",{className:"promises-section-title",children:e}),c.jsx("span",{className:"promises-section-count",style:{color:a},children:t})]}),c.jsx("div",{className:"promises-section-cards",children:l})]})}function iv({onClose:e}){const[t,a]=N.useState(null),[l,n]=N.useState(!0),[i,s]=N.useState(null);N.useEffect(()=>{u()},[]);async function u(){n(!0);try{const b=await Yy();a(b)}catch(b){console.error("Failed to load weekly review:",b)}finally{n(!1)}}function r(b){var S;if(b.parties&&b.parties.length>0)return b.parties.map(O=>O.name).slice(0,2).join(" & ");if(((S=b.source)==null?void 0:S.type)==="GMAIL"&&b.source.emailFrom)return b.source.emailFrom.split("@")[0].replace(/[._]/g," ")}async function d(b){try{await qm(b),u()}catch(S){console.error("Recommit failed:",S)}}async function h(b){try{await dc(b),u(),Ve()}catch(S){console.error("Archive failed:",S)}}async function v(b,S){try{const O=t==null?void 0:t.atRisk.find(o=>o.id===b);if(!O)return;await kt(b,{dueDate:S,version:O.version}),await Rn({actionId:b,type:"DATE_EXACT",triggerDate:S,description:`Postponed to ${new Date(S).toLocaleDateString()}`}),s(null),u(),Ve()}catch(O){console.error("Postpone failed:",O)}}function m(b){if(!b)return"";const S=new Date(b);return`${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][S.getDay()]}, ${S.toLocaleDateString("en-US",{month:"short",day:"numeric"})}`}function y(){localStorage.setItem("weeklyReviewDismissed",new Date().toISOString().split("T")[0]),e()}return c.jsx("div",{className:"modal-overlay",onClick:y,children:c.jsxs("div",{className:"modal-content weekly-review",onClick:b=>b.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Weekly Check-in"}),c.jsx("button",{className:"modal-close",onClick:y,children:"×"})]}),l?c.jsx("div",{className:"weekly-loading",children:"Loading your week..."}):t?c.jsxs("div",{className:"weekly-sections",children:[c.jsxs("div",{className:"weekly-section",children:[c.jsxs("h3",{className:"weekly-section-title weekly-section-kept",children:["Promises you kept",t.keptThisWeek.length>0&&c.jsx("span",{className:"weekly-section-count",children:t.keptThisWeek.length})]}),t.keptThisWeek.length===0?c.jsx("p",{className:"weekly-empty",children:"No promises completed this week."}):c.jsx("div",{className:"weekly-kept-list",children:t.keptThisWeek.map(b=>{const S=r(b);return c.jsxs("div",{className:"weekly-kept-item",children:[c.jsx("svg",{className:"weekly-kept-check",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--success)",strokeWidth:"3",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})}),c.jsxs("div",{className:"weekly-kept-text",children:[c.jsx("div",{className:"weekly-kept-desc",children:b.shortDescription||b.description}),S&&c.jsxs("div",{className:"weekly-kept-person",children:["to ",S]})]})]},b.id)})})]}),t.atRisk.length>0&&c.jsxs("div",{className:"weekly-section",children:[c.jsxs("h3",{className:"weekly-section-title weekly-section-risk",children:["Promises at risk",c.jsx("span",{className:"weekly-section-count",children:t.atRisk.length})]}),c.jsx("p",{className:"weekly-section-desc",children:"These have been sitting a while. What would you like to do?"}),c.jsx("div",{className:"weekly-risk-list",children:t.atRisk.map(b=>{const S=r(b),O=Math.floor((Date.now()-new Date(b.updatedAt).getTime())/(1e3*60*60*24));return c.jsxs("div",{className:"weekly-risk-item",children:[c.jsxs("div",{className:"weekly-risk-top",children:[c.jsx("div",{className:"weekly-risk-desc",children:b.shortDescription||b.description}),S&&c.jsxs("div",{className:"weekly-risk-person",children:["to ",S]}),c.jsxs("div",{className:"weekly-risk-age",children:["Untouched for ",O," days"]})]}),c.jsxs("div",{className:"weekly-risk-actions",children:[c.jsx("button",{className:"weekly-risk-btn recommit",onClick:()=>d(b.id),children:"Recommit"}),c.jsx("button",{className:"weekly-risk-btn postpone",onClick:()=>s(b.id),children:"Push forward"}),c.jsx("button",{className:"weekly-risk-btn letgo",onClick:()=>h(b.id),children:"Let go"})]}),i===b.id&&c.jsx(Qm,{onPostpone:o=>v(b.id,o),onClose:()=>s(null)})]},b.id)})})]}),t.comingUp.length>0&&c.jsxs("div",{className:"weekly-section",children:[c.jsxs("h3",{className:"weekly-section-title weekly-section-upcoming",children:["Coming up next week",c.jsx("span",{className:"weekly-section-count",children:t.comingUp.length})]}),c.jsx("div",{className:"weekly-upcoming-list",children:t.comingUp.map(b=>{const S=r(b);return c.jsxs("div",{className:"weekly-upcoming-item",children:[c.jsx("div",{className:"weekly-upcoming-date",children:m(b.dueDate)}),c.jsx("div",{className:"weekly-upcoming-desc",children:b.shortDescription||b.description}),S&&c.jsxs("div",{className:"weekly-upcoming-person",children:["to ",S]})]},b.id)})})]})]}):null,c.jsx("button",{className:"btn btn-primary btn-block weekly-done-btn",onClick:y,children:"Done"})]})})}function cv({onClose:e}){const[t,a]=N.useState(null),[l,n]=N.useState(null),[i,s]=N.useState(!0),[u,r]=N.useState(!1),[d,h]=N.useState(null),[v,m]=N.useState("default"),[y,b]=N.useState(!1),[S,O]=N.useState(!1),[o,f]=N.useState(null),[p,x]=N.useState(null),[j,C]=N.useState(!1),[g,z]=N.useState("08:00"),[w,R]=N.useState(!1),[ae,re]=N.useState("18:00"),[Ue,je]=N.useState("0");N.useEffect(()=>{H(),le(),Ae()},[]);async function Ae(){try{const k=await Qy();k.morningBriefTime&&z(k.morningBriefTime),k.eveningBriefEnabled&&R(k.eveningBriefEnabled==="true"),k.eveningBriefTime&&re(k.eveningBriefTime),k.weeklyReviewDay&&je(k.weeklyReviewDay)}catch{}}async function E(k,J){try{await Xy({[k]:J})}catch(He){console.error("Failed to save setting:",He)}}async function H(){s(!0);try{const[k,J]=await Promise.all([Xm(),dy()]);a(k),n(J)}catch(k){console.error("Failed to load settings data:",k)}finally{s(!1)}}async function _(){try{const{url:k}=await my();window.location.href=k}catch(k){console.error("Failed to get auth URL:",k),alert("Failed to start Gmail connection")}}async function M(){try{await gy(),C(!1),await H()}catch(k){console.error("Failed to disconnect Gmail:",k)}}async function G(){r(!0),h(null);try{const k=await hy();h(k),await H()}catch(k){console.error("Scan failed:",k),h({success:!1,emailsScanned:0,actionsCreated:0,errors:["Scan failed"]})}finally{r(!1)}}async function le(){if(!("Notification"in window)||!("serviceWorker"in navigator)){m("unsupported");return}if(m(Notification.permission),Notification.permission==="granted"){const k=await navigator.serviceWorker.ready.catch(()=>null);if(k){const J=await k.pushManager.getSubscription();b(!!J)}}}async function Ce(){O(!0);try{const k=await Notification.requestPermission();if(m(k),k!=="granted")return;const{key:J}=await Uy();if(!J){alert("Server not configured for push notifications");return}const D=(await(await navigator.serviceWorker.ready).pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ze(J)})).toJSON();await Hy(D.endpoint,D.keys.p256dh,D.keys.auth),b(!0)}catch(k){console.error("Failed to enable notifications:",k),alert("Failed to enable notifications")}finally{O(!1)}}async function Ye(){O(!0);try{const J=await(await navigator.serviceWorker.ready).pushManager.getSubscription();J&&(await By(J.endpoint),await J.unsubscribe()),b(!1)}catch(k){console.error("Failed to disable notifications:",k)}finally{O(!1)}}function ze(k){const J="=".repeat((4-k.length%4)%4),He=(k+J).replace(/-/g,"+").replace(/_/g,"/"),we=window.atob(He);return new Uint8Array([...we].map(B=>B.charCodeAt(0))).buffer}async function de(k,J){f(k),x(null);try{const He=await J();x({key:k,...He})}catch{x({key:k,success:!1,message:"Request failed"})}finally{f(null)}}function xt(k){if(!k)return"Never";const J=new Date(k),we=new Date().getTime()-J.getTime(),D=Math.floor(we/6e4),B=Math.floor(D/60),X=Math.floor(B/24);return D<1?"Just now":D<60?`${D}m ago`:B<24?`${B}h ago`:`${X}d ago`}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content settings-modal",onClick:k=>k.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Settings"}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),i?c.jsx("div",{className:"settings-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Gmail Integration"}),c.jsxs("div",{className:"settings-gmail",children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Status"}),c.jsx("span",{className:`gmail-status-value ${l!=null&&l.connected?"connected":"disconnected"}`,children:l!=null&&l.connected?"Connected":"Not Connected"})]}),l!=null&&l.connected?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Last Scan"}),c.jsx("span",{className:"gmail-status-value",children:xt(l.lastScan)})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Emails Scanned"}),c.jsx("span",{className:"gmail-status-value",children:l.itemsScanned})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Actions Created"}),c.jsx("span",{className:"gmail-status-value",children:l.actionsCreated})]}),l.lastError&&c.jsxs("div",{className:"gmail-error",children:[c.jsx("span",{className:"gmail-error-label",children:"Last Error"}),c.jsx("p",{children:l.lastError})]}),d&&c.jsx("div",{className:`scan-result ${d.success?"success":"error"}`,children:d.success?`Scanned ${d.emailsScanned} emails, created ${d.actionsCreated} actions`:`Scan failed: ${d.errors.join(", ")}`}),c.jsxs("div",{className:"gmail-buttons",children:[c.jsx("button",{className:"btn btn-primary",onClick:G,disabled:u,children:u?"Scanning...":"Scan Now"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>C(!0),children:"Disconnect"})]})]}):c.jsxs("div",{className:"gmail-connect",children:[c.jsx("p",{className:"gmail-connect-text",children:"Connect your Gmail to automatically scan for actionable emails."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:_,children:"Connect Gmail"})]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Push Notifications"}),c.jsx("div",{className:"settings-notifications",children:v==="unsupported"?c.jsx("p",{className:"notif-note",children:"Push notifications require installing this app and iOS 16.4+."}):v==="denied"?c.jsx("p",{className:"notif-note notif-denied",children:"Notifications blocked. Enable them in device Settings > Safari."}):y?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-status notif-enabled",children:"Notifications enabled"}),c.jsx("button",{className:"btn btn-secondary btn-block",onClick:Ye,disabled:S,children:S?"Disabling...":"Disable Notifications"})]}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-note",children:"Get notified when triggers fire or actions need attention."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:Ce,disabled:S,children:S?"Enabling...":"Enable Notifications"})]})})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"System Health"}),c.jsxs("div",{className:"settings-health",children:[c.jsxs("div",{className:"health-row",children:[c.jsx("span",{className:"health-label",children:"Overall Status"}),c.jsx("span",{className:`health-value ${t==null?void 0:t.status}`,children:(t==null?void 0:t.status)==="ok"?"All Systems OK":"Issues Detected"})]}),(t==null?void 0:t.errors)&&t.errors.length>0&&c.jsxs("div",{className:"health-errors",children:[c.jsx("span",{className:"health-errors-label",children:"Errors"}),t.errors.map((k,J)=>c.jsx("p",{className:"health-error",children:k},J))]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Daily Briefs"}),c.jsxs("div",{className:"settings-briefs",children:[c.jsxs("div",{className:"brief-setting-row",children:[c.jsx("span",{className:"brief-setting-label",children:"Morning brief"}),c.jsx("input",{type:"time",className:"brief-time-input",value:g,onChange:k=>{z(k.target.value),E("morningBriefTime",k.target.value)}})]}),c.jsxs("div",{className:"brief-setting-row",children:[c.jsx("span",{className:"brief-setting-label",children:"Evening wrap-up"}),c.jsxs("div",{className:"brief-setting-toggle-group",children:[c.jsx("input",{type:"time",className:"brief-time-input",value:ae,disabled:!w,onChange:k=>{re(k.target.value),E("eveningBriefTime",k.target.value)}}),c.jsxs("label",{className:"brief-toggle-label",children:[c.jsx("input",{type:"checkbox",checked:w,onChange:k=>{R(k.target.checked),E("eveningBriefEnabled",String(k.target.checked))}}),w?"On":"Off"]})]})]}),c.jsxs("div",{className:"brief-setting-row",children:[c.jsx("span",{className:"brief-setting-label",children:"Weekly check-in"}),c.jsxs("select",{className:"brief-day-select",value:Ue,onChange:k=>{je(k.target.value),E("weeklyReviewDay",k.target.value)},children:[c.jsx("option",{value:"0",children:"Sunday"}),c.jsx("option",{value:"1",children:"Monday"}),c.jsx("option",{value:"2",children:"Tuesday"}),c.jsx("option",{value:"3",children:"Wednesday"}),c.jsx("option",{value:"4",children:"Thursday"}),c.jsx("option",{value:"5",children:"Friday"}),c.jsx("option",{value:"6",children:"Saturday"})]})]}),c.jsx("p",{className:"brief-note",children:"Notifications batch overnight and arrive with your morning brief."})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Scan Schedule"}),c.jsxs("div",{className:"settings-schedule",children:[c.jsx("p",{children:"Automatic Gmail scans run every 4 hours."}),c.jsx("p",{className:"schedule-note",children:"Trigger checks every 6 hours. Web conditions every 4 hours per trigger. Follow-up reminders at 9 AM daily."})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Testing Tools"}),c.jsxs("div",{className:"settings-tools",children:[c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Check for stale actions"}),c.jsx("div",{className:"tool-desc",children:`Looks at all your active actions and flags ones you haven't touched in a while with a "Still important?" prompt. Normally happens automatically every morning at 9 AM.`})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>de("followups",cy),disabled:o!==null,children:o==="followups"?"Running…":"Run now"})]}),c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Fire due triggers & check web conditions"}),c.jsx("div",{className:"tool-desc",children:"Two things in one: (1) promotes any Waiting actions whose due date has arrived into your active list, and (2) searches the web to see if any real-world conditions you're watching — like a store sale or product launch — have come true. Normally runs every hour / every 4 hours."})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>de("triggers",sy),disabled:o!==null,children:o==="triggers"?"Running…":"Run now"})]}),p&&c.jsxs("div",{className:`tool-result ${p.success?"success":"error"}`,children:[p.success?"✓":"✗"," ",p.message]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"About"}),c.jsxs("p",{className:"settings-about",children:["Action Manager v2.0",c.jsx("br",{}),"Your promise-keeping partner"]})]})]}),j&&c.jsx(vt,{title:"Disconnect Gmail",message:"Are you sure you want to disconnect Gmail? Automatic email scanning will stop.",confirmLabel:"Disconnect",danger:!0,onConfirm:M,onCancel:()=>C(!1)}),c.jsx("style",{children:`
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
          .settings-briefs {
            background-color: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
          }
          .brief-setting-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .brief-setting-row:last-of-type {
            border-bottom: none;
          }
          .brief-setting-label {
            color: var(--text-secondary);
            font-size: 14px;
          }
          .brief-time-input {
            padding: 6px 10px;
            background: var(--bg-elevated);
            border: 1px solid var(--separator);
            border-radius: 8px;
            color: var(--text-primary);
            font-size: 14px;
            font-family: inherit;
          }
          .brief-setting-toggle-group {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .brief-toggle-label {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 13px;
            color: var(--text-secondary);
            cursor: pointer;
          }
          .brief-day-select {
            padding: 6px 10px;
            background: var(--bg-elevated);
            border: 1px solid var(--separator);
            border-radius: 8px;
            color: var(--text-primary);
            font-size: 14px;
            font-family: inherit;
          }
          .brief-note {
            font-size: 12px;
            color: var(--text-secondary);
            margin-top: 8px;
            line-height: 1.5;
          }
        `})]})})}function sv({onClose:e,onSelectAction:t}){const[a,l]=N.useState(""),[n,i]=N.useState([]),[s,u]=N.useState(0),[r,d]=N.useState(!1),[h,v]=N.useState(!1),[m,y]=N.useState(""),[b,S]=N.useState(""),[O,o]=N.useState(!1),[f,p]=N.useState(!1),x=N.useCallback(async(g=!0)=>{d(!0);try{const z=await xy({q:a||void 0,container:m||void 0,urgency:b||void 0,includeArchived:O,archiveOnly:f,limit:20,offset:g?0:n.length});i(g?z.actions:w=>[...w,...z.actions]),u(z.total),v(z.hasMore)}catch(z){console.error("Search failed:",z)}finally{d(!1)}},[a,m,b,O,f,n.length]);N.useEffect(()=>{const g=setTimeout(()=>{x(!0)},300);return()=>clearTimeout(g)},[a,m,b,O,f]);function j(g){return g?new Date(g).toLocaleDateString("en-US",{month:"short",day:"numeric"}):""}function C(){x(!1)}return c.jsxs("div",{className:"search-overlay",children:[c.jsxs("div",{className:"search-container",children:[c.jsxs("div",{className:"search-header",children:[c.jsxs("div",{className:"search-input-wrapper",children:[c.jsx("span",{className:"search-icon",children:"🔍"}),c.jsx("input",{type:"text",className:"search-input",placeholder:"Search actions...",value:a,onChange:g=>l(g.target.value),autoFocus:!0}),a&&c.jsx("button",{className:"search-clear",onClick:()=>l(""),children:"✕"})]}),c.jsx("button",{className:"search-close",onClick:e,children:"Cancel"})]}),c.jsxs("div",{className:"search-filters",children:[c.jsxs("select",{className:"search-filter",value:m,onChange:g=>y(g.target.value),children:[c.jsx("option",{value:"",children:"All Containers"}),Object.entries(Tt).map(([g,z])=>c.jsx("option",{value:g,children:z},g))]}),c.jsxs("select",{className:"search-filter",value:b,onChange:g=>S(g.target.value),children:[c.jsx("option",{value:"",children:"All Urgency"}),Object.entries(gl).map(([g,z])=>c.jsx("option",{value:g,children:z},g))]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:O,onChange:g=>{o(g.target.checked),g.target.checked&&p(!1)}}),"Include archived"]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:f,onChange:g=>{p(g.target.checked),g.target.checked&&o(!1)}}),"Archive only"]})]}),c.jsx("div",{className:"search-results",children:r&&n.length===0?c.jsx("div",{className:"search-loading",children:"Searching..."}):n.length===0?c.jsx("div",{className:"search-empty",children:a?"No actions found":"Start typing to search"}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"search-count",children:[s," result",s!==1?"s":""]}),n.map(g=>c.jsxs("div",{className:`search-result ${g.isArchived?"archived":""}`,onClick:()=>t(g.id),children:[c.jsx("div",{className:`result-urgency ${g.urgency.toLowerCase()}`}),c.jsxs("div",{className:"result-content",children:[c.jsx("div",{className:"result-description",children:g.description}),c.jsxs("div",{className:"result-meta",children:[c.jsx("span",{className:"result-container",children:Tt[g.container]}),g.dueDate&&c.jsxs("span",{className:"result-date",children:["Due ",j(g.dueDate)]}),g.isArchived&&c.jsx("span",{className:"result-archived",children:"Archived"})]})]})]},g.id)),h&&c.jsx("button",{className:"search-load-more",onClick:C,disabled:r,children:r?"Loading...":"Load more"})]})})]}),c.jsx("style",{children:`
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
      `})]})}function uv({onClose:e,onSelectAction:t}){const[a,l]=N.useState([]),[n,i]=N.useState([]),[s,u]=N.useState(!0),[r,d]=N.useState(!1),[h,v]=N.useState(""),[m,y]=N.useState(""),[b,S]=N.useState(null),[O,o]=N.useState(""),[f,p]=N.useState(null),[x,j]=N.useState(""),[C,g]=N.useState([]),[z,w]=N.useState(new Set),[R,ae]=N.useState(new Set),[re,Ue]=N.useState(!1),[je,Ae]=N.useState(null);N.useEffect(()=>{E()},[]);async function E(){u(!0);try{const[D,B]=await Promise.all([Ny(),Ey()]);l(D),i(B.suggestions)}catch(D){console.error("Failed to load groups:",D)}finally{u(!1)}}async function H(){if(h.trim())try{await Sy({name:h.trim(),description:m.trim()||void 0}),v(""),y(""),d(!1),E()}catch(D){console.error("Failed to create group:",D)}}function _(D){S(D.id),o(D.suggestedName)}async function M(D){try{await Dy(D,O.trim()||void 0),S(null),E()}catch(B){console.error("Failed to accept suggestion:",B)}}async function G(D){try{await Cy(D),i(B=>B.filter(X=>X.id!==D))}catch(B){console.error("Failed to dismiss suggestion:",B)}}async function le(D){try{await Ay(D),Ae(null),E()}catch(B){console.error("Failed to delete group:",B)}}async function Ce(D){p(D),j(""),Ue(!0);try{const X=(await Ym()).filter(Wt=>!Wt.archivedAt&&!Wt.completedAt);g(X);const Jt=a.find(Wt=>Wt.id===D),Un=new Set((Jt==null?void 0:Jt.actions.map(Wt=>Wt.id))||[]);w(new Set(Un)),ae(new Set(Un))}catch(B){console.error("Failed to load actions:",B)}finally{Ue(!1)}}async function Ye(){if(f!==null)try{const D=[...z].filter(X=>!R.has(X)),B=[...R].filter(X=>!z.has(X));D.length>0&&await Ty(f,D);for(const X of B)await ko(f,X);p(null),E()}catch(D){console.error("Failed to update group actions:",D)}}function ze(D){w(B=>{const X=new Set(B);return X.has(D)?X.delete(D):X.add(D),X})}const de=N.useMemo(()=>{if(!x.trim())return C;const D=x.toLowerCase();return C.filter(B=>B.description.toLowerCase().includes(D))},[C,x]);async function xt(D,B){try{await ko(D,B),E()}catch(X){console.error("Failed to remove action from group:",X)}}async function k(D){try{await jy(D),E()}catch(B){console.error("Failed to archive group:",B)}}function J(D){return D.actions.filter(B=>B.completedAt!==null).length}function He(D){return D.actions.length>0&&J(D)===D.actions.length}function we(D){return D.toLowerCase()}return c.jsxs("div",{className:"groups-overlay",children:[c.jsxs("div",{className:"groups-container",children:[c.jsxs("div",{className:"groups-header",children:[c.jsx("h2",{className:"groups-title",children:"Action Groups"}),c.jsxs("div",{className:"groups-header-actions",children:[c.jsx("button",{className:"btn btn-primary btn-small",onClick:()=>d(!0),children:"+ New Group"}),c.jsx("button",{className:"groups-close",onClick:e,children:"Done"})]})]}),c.jsx("div",{className:"groups-content",children:s?c.jsx("div",{className:"groups-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:"groups-section",children:[c.jsx("h3",{className:"section-title",children:"Your Groups"}),a.length===0?c.jsx("div",{className:"groups-empty",children:"No groups yet. Create one or accept a suggestion below."}):a.map(D=>c.jsxs("div",{className:"group-card",children:[He(D)&&c.jsxs("div",{className:"group-archive-banner",children:[c.jsx("span",{children:"All actions complete! Archive this group?"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>k(D.id),children:"Archive"})]}),c.jsxs("div",{className:"group-header",children:[c.jsxs("div",{className:"group-info",children:[c.jsx("div",{className:"group-name",children:D.name}),D.description&&c.jsx("div",{className:"group-description",children:D.description})]}),c.jsxs("div",{className:"group-stats",children:[c.jsx("span",{className:`urgency-badge ${we(D.highestUrgency)}`,children:gl[D.highestUrgency]}),c.jsxs("span",{className:"group-count",children:[D.activeCount,"/",D.actionCount," active"]})]})]}),c.jsxs("div",{className:"group-progress",children:[c.jsxs("div",{className:"progress-text",children:[J(D)," of ",D.actions.length," complete"]}),c.jsx("div",{className:"progress-bar-track",children:c.jsx("div",{className:"progress-bar-fill",style:{width:D.actions.length>0?`${J(D)/D.actions.length*100}%`:"0%"}})})]}),c.jsxs("div",{className:"group-actions-list",children:[D.actions.slice(0,3).map(B=>c.jsxs("div",{className:`group-action-item ${B.completedAt?"completed":""}`,children:[c.jsxs("div",{className:"group-action-clickable",onClick:()=>t(B.id),children:[c.jsx("div",{className:`action-urgency-dot ${we(B.urgency)}`}),c.jsx("span",{className:"action-text",children:B.description})]}),c.jsx("button",{className:"action-remove-btn",onClick:X=>{X.stopPropagation(),xt(D.id,B.id)},title:"Remove from group",children:"×"})]},B.id)),D.actions.length>3&&c.jsxs("div",{className:"group-more",children:["+",D.actions.length-3," more"]})]}),c.jsxs("div",{className:"group-footer",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>Ce(D.id),children:"Add Actions"}),c.jsx("button",{className:"btn-link",onClick:()=>Ae(D.id),children:"Delete Group"})]})]},D.id))]}),n.length>0&&c.jsxs("section",{className:"groups-section",children:[c.jsx("h3",{className:"section-title",children:"Suggested Groups"}),c.jsx("p",{className:"section-subtitle",children:"AI-detected actions that may be steps toward the same goal"}),n.map(D=>c.jsxs("div",{className:"suggestion-card goal-suggestion",children:[c.jsxs("div",{className:"suggestion-content",children:[b===D.id?c.jsxs("div",{className:"suggestion-edit-name",children:[c.jsx("input",{type:"text",className:"form-input suggestion-name-input",value:O,onChange:B=>o(B.target.value),autoFocus:!0,onKeyDown:B=>{B.key==="Enter"&&M(D.id),B.key==="Escape"&&S(null)}}),c.jsxs("div",{className:"suggestion-edit-actions",children:[c.jsx("button",{className:"btn btn-primary btn-small",onClick:()=>M(D.id),children:"Create"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>S(null),children:"Cancel"})]})]}):c.jsx("div",{className:"suggestion-name",children:D.suggestedName}),c.jsx("div",{className:"suggestion-reason",children:D.reasoning}),c.jsx("div",{className:"suggestion-actions-list",children:D.actions.map(B=>c.jsx("div",{className:"suggestion-action-item",children:B.shortDescription||B.description},B.id))})]}),b!==D.id&&c.jsxs("div",{className:"suggestion-buttons",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>_(D),children:"Group"}),c.jsx("button",{className:"btn-link btn-small",onClick:()=>G(D.id),children:"Dismiss"})]})]},D.id))]})]})})]}),r&&c.jsx("div",{className:"modal-overlay",onClick:()=>d(!1),children:c.jsxs("div",{className:"modal-content",onClick:D=>D.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Create Group"}),c.jsx("button",{className:"modal-close",onClick:()=>d(!1),children:"×"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Group Name"}),c.jsx("input",{type:"text",className:"form-input",value:h,onChange:D=>v(D.target.value),placeholder:"e.g., Project Alpha",autoFocus:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("textarea",{className:"form-textarea",value:m,onChange:D=>y(D.target.value),placeholder:"What is this group about?",rows:2})]}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:H,disabled:!h.trim(),children:"Create Group"})]})}),f!==null&&c.jsx("div",{className:"modal-overlay",onClick:()=>p(null),children:c.jsxs("div",{className:"modal-content add-actions-modal",onClick:D=>D.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Add Actions to Group"}),c.jsx("button",{className:"modal-close",onClick:()=>p(null),children:"×"})]}),c.jsx("div",{className:"form-group",children:c.jsx("input",{type:"text",className:"form-input",value:x,onChange:D=>j(D.target.value),placeholder:"Search actions...",autoFocus:!0})}),!re&&de.length>0&&c.jsx("div",{className:"add-actions-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:de.every(D=>z.has(D.id)),onChange:()=>{const D=de.every(B=>z.has(B.id));w(B=>{const X=new Set(B);for(const Jt of de)D?X.delete(Jt.id):X.add(Jt.id);return X})}}),"Select All (",de.length,")"]})}),c.jsx("div",{className:"add-actions-list",children:re?c.jsx("div",{className:"groups-loading",children:"Loading actions..."}):de.length===0?c.jsx("div",{className:"groups-empty",children:"No matching actions found."}):de.map(D=>c.jsxs("label",{className:"add-action-row",children:[c.jsx("input",{type:"checkbox",checked:z.has(D.id),onChange:()=>ze(D.id)}),c.jsx("div",{className:`action-urgency-dot ${we(D.urgency)}`}),c.jsx("span",{className:"action-text",children:D.description})]},D.id))}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:Ye,children:"Save"})]})}),je!==null&&c.jsx(vt,{title:"Delete Group",message:"Delete this group? Actions will be ungrouped but not deleted.",confirmLabel:"Delete",danger:!0,onConfirm:()=>le(je),onCancel:()=>Ae(null)}),c.jsx("style",{children:`
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
        .goal-suggestion {
          flex-direction: column;
          align-items: stretch;
        }
        .goal-suggestion .suggestion-content {
          flex: 1;
        }
        .suggestion-actions-list {
          margin-top: 8px;
          padding-left: 8px;
          border-left: 2px solid rgba(255,255,255,0.1);
        }
        .suggestion-action-item {
          font-size: 13px;
          color: var(--text-primary);
          padding: 3px 0;
        }
        .suggestion-buttons {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 10px;
        }
        .suggestion-edit-name {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 4px;
        }
        .suggestion-name-input {
          font-size: 15px;
          font-weight: 600;
          padding: 6px 8px;
        }
        .suggestion-edit-actions {
          display: flex;
          gap: 8px;
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
        .add-actions-modal {
          max-height: 80vh;
          display: flex;
          flex-direction: column;
        }
        .add-actions-select-all {
          padding: 8px 12px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .add-actions-select-all .select-all-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-secondary);
          cursor: pointer;
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
      `})]})}function rv({onClose:e}){const[t,a]=N.useState([]),[l,n]=N.useState(null),[i,s]=N.useState(!0),[u,r]=N.useState("proposed"),[d,h]=N.useState(null),[v,m]=N.useState(null),[y,b]=N.useState(null);N.useEffect(()=>{S()},[]);async function S(){s(!0);try{const[g,z]=await Promise.all([wy(),Ry()]);a(g),n(z)}catch(g){console.error("Failed to load tuning data:",g)}finally{s(!1)}}async function O(g){try{await Oy(g),S()}catch(z){console.error("Failed to activate rule:",z)}}async function o(g,z=!1,w){try{await My(g,w,z),h(null),b(null),S()}catch(R){console.error("Failed to reject rule:",R)}}async function f(g){try{await _y(g),S()}catch(z){console.error("Failed to update threshold:",z)}}async function p(g){try{await ky(g),b(null),S()}catch(z){console.error("Failed to delete rule:",z)}}const x=t.filter(g=>{switch(u){case"proposed":return g.status==="PROPOSED";case"shadow":return g.status==="SHADOW";case"active":return g.status==="ACTIVE";case"rejected":return g.status==="REJECTED"}});function j(g){switch(g){case"SHADOW":return"Testing";case"PROPOSED":return"Ready";case"ACTIVE":return"Active";case"REJECTED":return"Rejected";default:return g}}function C(g){return g.shadowCount===0?0:Math.round(g.shadowSuccesses/g.shadowCount*100)}return c.jsxs("div",{className:"tuning-overlay",children:[c.jsxs("div",{className:"tuning-container",children:[c.jsxs("div",{className:"tuning-header",children:[c.jsx("h2",{className:"tuning-title",children:"AI Tuning"}),c.jsx("button",{className:"tuning-close",onClick:e,children:"Done"})]}),l&&c.jsxs("div",{className:"tuning-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.active}),c.jsx("span",{className:"stat-label",children:"Active Rules"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.proposed}),c.jsx("span",{className:"stat-label",children:"Pending Review"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.shadow}),c.jsx("span",{className:"stat-label",children:"Testing"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsxs("span",{className:"stat-value",children:[l.avgSuccessRate,"%"]}),c.jsx("span",{className:"stat-label",children:"Avg Success"})]})]}),c.jsxs("div",{className:"tuning-tabs",children:[c.jsxs("button",{className:`tuning-tab ${u==="proposed"?"active":""}`,onClick:()=>r("proposed"),children:["Pending ",l&&l.counts.proposed>0&&`(${l.counts.proposed})`]}),c.jsx("button",{className:`tuning-tab ${u==="shadow"?"active":""}`,onClick:()=>r("shadow"),children:"Testing"}),c.jsx("button",{className:`tuning-tab ${u==="active"?"active":""}`,onClick:()=>r("active"),children:"Active"}),c.jsx("button",{className:`tuning-tab ${u==="rejected"?"active":""}`,onClick:()=>r("rejected"),children:"Rejected"})]}),c.jsx("div",{className:"tuning-content",children:i?c.jsx("div",{className:"tuning-loading",children:"Loading..."}):x.length===0?c.jsx("div",{className:"tuning-empty",children:t.length===0?c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"No tuning rules yet."}),c.jsx("p",{className:"tuning-hint",children:"Tuning rules help the AI learn from your corrections. When you correct an action's urgency or container, the system creates rules to improve future parsing."})]}):c.jsxs(c.Fragment,{children:[u==="proposed"&&"No rules ready for review.",u==="shadow"&&"No rules currently testing.",u==="active"&&"No active tuning rules.",u==="rejected"&&"No rejected rules.",c.jsx("p",{className:"tuning-hint",children:"Tuning rules are created when you provide feedback on AI-parsed actions."})]})}):x.map(g=>{const z=v===g.id;return c.jsxs("div",{className:`rule-card ${z?"rule-card-expanded":""}`,children:[c.jsxs("div",{className:"rule-collapsed",onClick:()=>m(z?null:g.id),children:[c.jsxs("div",{className:"rule-collapsed-top",children:[c.jsx("span",{className:`rule-category category-${g.category}`,children:g.category}),c.jsx("span",{className:`rule-status status-${g.status.toLowerCase()}`,children:j(g.status)}),c.jsx("span",{className:"rule-expand-icon",children:z?"▲":"▼"})]}),c.jsx("div",{className:"rule-description-collapsed",children:z?g.description:g.description.length>60?g.description.slice(0,60)+"...":g.description}),!z&&(g.status==="SHADOW"||g.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(g.shadowCount/g.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[g.shadowCount,"/",g.shadowThreshold," tests (",C(g),"% success)"]})]})]}),z&&c.jsxs("div",{className:"rule-expanded-body",children:[c.jsxs("div",{className:"rule-details",children:[c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"When:"}),c.jsx("span",{className:"detail-text",children:g.condition})]}),c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"Then:"}),c.jsx("span",{className:"detail-text",children:g.transformation})]})]}),(g.status==="SHADOW"||g.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(g.shadowCount/g.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[g.shadowCount,"/",g.shadowThreshold," tests (",C(g),"% success)"]})]}),g.userFeedback&&c.jsxs("div",{className:"rule-feedback",children:[c.jsx("span",{className:"detail-label",children:"Feedback:"}),g.userFeedback]}),c.jsxs("div",{className:"rule-actions",children:[g.status==="PROPOSED"&&d!==g.id&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-success btn-small",onClick:w=>{w.stopPropagation(),O(g.id)},children:"Activate"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:w=>{w.stopPropagation(),h(g.id)},children:"Reject"})]}),g.status==="PROPOSED"&&d===g.id&&c.jsxs("div",{className:"reject-options",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:w=>{w.stopPropagation(),b({type:"reject-feedback",ruleId:g.id})},children:"Just reject"}),c.jsxs("button",{className:"btn btn-secondary btn-small reject-stop",onClick:w=>{w.stopPropagation(),o(g.id,!0)},children:["Stop ",g.category," suggestions"]}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:w=>{w.stopPropagation(),f(g.id),h(null)},children:"Ask less often"}),c.jsx("button",{className:"btn-link",onClick:w=>{w.stopPropagation(),h(null)},children:"Cancel"})]}),g.status==="SHADOW"&&c.jsx("button",{className:"btn btn-primary btn-small",onClick:w=>{w.stopPropagation(),O(g.id)},children:"Activate Early"}),c.jsx("button",{className:"btn-link danger",onClick:w=>{w.stopPropagation(),b({type:"delete",ruleId:g.id})},children:"Delete"})]})]})]},g.id)})})]}),(y==null?void 0:y.type)==="delete"&&c.jsx(vt,{title:"Delete Rule",message:"Delete this tuning rule?",confirmLabel:"Delete",danger:!0,onConfirm:()=>p(y.ruleId),onCancel:()=>b(null)}),(y==null?void 0:y.type)==="reject-feedback"&&c.jsx(vt,{title:"Reject Rule",message:"Why are you rejecting this rule?",confirmLabel:"Reject",inputMode:!0,inputPlaceholder:"Reason (optional)",inputLabel:"Feedback:",onConfirm:g=>o(y.ruleId,!1,g||void 0),onCancel:()=>b(null)}),c.jsx("style",{children:`
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
      `})]})}function ov(){const[e,t]=N.useState("today"),[a,l]=N.useState("ACTIONABLE_NOW"),[n,i]=N.useState(void 0),[s,u]=N.useState(!1),[r,d]=N.useState(!1),[h,v]=N.useState(!1),[m,y]=N.useState(!1),[b,S]=N.useState(!1),[O,o]=N.useState(null),[f,p]=N.useState(0),[x,j]=N.useState(null),[C,g]=N.useState(0);N.useEffect(()=>{z(),w();const E=setInterval(()=>{z(),w()},30*60*1e3);return()=>clearInterval(E)},[]);async function z(){try{const E=await Xm();j(E)}catch{}}async function w(){try{const E=await Lm();g(E.goalSuggestions||0)}catch{}}function R(){const E=new Date;if(E.getDay()!==0)return!1;const _=localStorage.getItem("weeklyReviewDismissed");if(!_)return!0;const M=new Date(_);return Math.floor((E.getTime()-M.getTime())/(1e3*60*60*24))>=6}const ae=x&&x.errors.length>0;function re(){p(E=>E+1),Ve(),w()}function Ue(E){d(!1),o(E)}function je(E){E==="TUNING"?y(!0):(i(void 0),l(E))}function Ae(E){l(null),i(E)}return c.jsxs("div",{className:"app",children:[c.jsxs("header",{className:"app-header",children:[c.jsxs("div",{className:"view-toggle",children:[c.jsx("button",{className:`view-toggle-btn ${e==="today"?"active":""}`,onClick:()=>t("today"),children:"Today"}),c.jsx("button",{className:`view-toggle-btn ${e==="all"?"active":""}`,onClick:()=>t("all"),children:"All"})]}),c.jsxs("div",{className:"header-actions",children:[c.jsx("button",{className:"search-btn",onClick:()=>d(!0),title:"Search",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("path",{d:"M21 21l-4.35-4.35"})]})}),c.jsxs("button",{className:"search-btn groups-btn",onClick:()=>v(!0),title:"Groups",children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]}),C>0&&c.jsx("span",{className:"groups-badge",children:C})]}),c.jsx("button",{className:`settings-btn ${ae?"has-errors":""}`,onClick:()=>u(!0),title:"Settings",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]})]}),ae&&c.jsx("div",{className:"error-banner",onClick:()=>u(!0),children:"System issue detected — tap to view in Settings"}),c.jsx("main",{className:"main-content",children:e==="today"?c.jsx(nv,{onShowFeed:()=>t("all"),onShowWeeklyReview:()=>S(!0),showWeeklyBanner:R()},f):c.jsxs(c.Fragment,{children:[c.jsx($y,{activeContainer:a,onContainerChange:je,onFlagFilter:Ae}),c.jsx(lv,{activeContainer:a,flagFilter:n,onOpenGroups:()=>v(!0)},f)]})}),s&&c.jsx(cv,{onClose:()=>u(!1)}),r&&c.jsx(sv,{onClose:()=>d(!1),onSelectAction:Ue}),h&&c.jsx(uv,{onClose:()=>v(!1),onSelectAction:E=>{v(!1),o(E)}}),m&&c.jsx(rv,{onClose:()=>y(!1)}),b&&c.jsx(iv,{onClose:()=>S(!1)}),O&&c.jsx(er,{actionId:O,onClose:()=>o(null),onUpdate:()=>{re(),o(null)}})]})}ty.createRoot(document.getElementById("root")).render(c.jsx(N.StrictMode,{children:c.jsx(ov,{})}));
