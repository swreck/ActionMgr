(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();var Do={exports:{}},Li={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg=Symbol.for("react.transitional.element"),tg=Symbol.for("react.fragment");function Oo(e,t,l){var a=null;if(l!==void 0&&(a=""+l),t.key!==void 0&&(a=""+t.key),"key"in t){l={};for(var n in t)n!=="key"&&(l[n]=t[n])}else l=t;return t=l.ref,{$$typeof:eg,type:e,key:a,ref:t!==void 0?t:null,props:l}}Li.Fragment=tg;Li.jsx=Oo;Li.jsxs=Oo;Do.exports=Li;var c=Do.exports,Mo={exports:{}},k={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu=Symbol.for("react.transitional.element"),lg=Symbol.for("react.portal"),ag=Symbol.for("react.fragment"),ng=Symbol.for("react.strict_mode"),ig=Symbol.for("react.profiler"),cg=Symbol.for("react.consumer"),ug=Symbol.for("react.context"),sg=Symbol.for("react.forward_ref"),rg=Symbol.for("react.suspense"),og=Symbol.for("react.memo"),_o=Symbol.for("react.lazy"),fg=Symbol.for("react.activity"),$s=Symbol.iterator;function dg(e){return e===null||typeof e!="object"?null:(e=$s&&e[$s]||e["@@iterator"],typeof e=="function"?e:null)}var wo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uo=Object.assign,Ro={};function Na(e,t,l){this.props=e,this.context=t,this.refs=Ro,this.updater=l||wo}Na.prototype.isReactComponent={};Na.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Na.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ho(){}Ho.prototype=Na.prototype;function Vu(e,t,l){this.props=e,this.context=t,this.refs=Ro,this.updater=l||wo}var Ku=Vu.prototype=new Ho;Ku.constructor=Vu;Uo(Ku,Na.prototype);Ku.isPureReactComponent=!0;var Ws=Array.isArray;function $c(){}var ne={H:null,A:null,T:null,S:null},Go=Object.prototype.hasOwnProperty;function Ju(e,t,l){var a=l.ref;return{$$typeof:Zu,type:e,key:t,ref:a!==void 0?a:null,props:l}}function mg(e,t){return Ju(e.type,t,e.props)}function $u(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zu}function gg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return t[l]})}var Fs=/\/+/g;function oc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gg(""+e.key):t.toString(36)}function hg(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then($c,$c):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ql(e,t,l,a,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case Zu:case lg:u=!0;break;case _o:return u=e._init,ql(u(e._payload),t,l,a,n)}}if(u)return n=n(e),u=a===""?"."+oc(e,0):a,Ws(n)?(l="",u!=null&&(l=u.replace(Fs,"$&/")+"/"),ql(n,t,l,"",function(d){return d})):n!=null&&($u(n)&&(n=mg(n,l+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Fs,"$&/")+"/")+u)),t.push(n)),1;u=0;var s=a===""?".":a+":";if(Ws(e))for(var r=0;r<e.length;r++)a=e[r],i=s+oc(a,r),u+=ql(a,t,l,i,n);else if(r=dg(e),typeof r=="function")for(e=r.call(e),r=0;!(a=e.next()).done;)a=a.value,i=s+oc(a,r++),u+=ql(a,t,l,i,n);else if(i==="object"){if(typeof e.then=="function")return ql(hg(e),t,l,a,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function On(e,t,l){if(e==null)return e;var a=[],n=0;return ql(e,a,"","",function(i){return t.call(l,i,n++)}),a}function pg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Is=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yg={map:On,forEach:function(e,t,l){On(e,function(){t.apply(this,arguments)},l)},count:function(e){var t=0;return On(e,function(){t++}),t},toArray:function(e){return On(e,function(t){return t})||[]},only:function(e){if(!$u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};k.Activity=fg;k.Children=yg;k.Component=Na;k.Fragment=ag;k.Profiler=ig;k.PureComponent=Vu;k.StrictMode=ng;k.Suspense=rg;k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne;k.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ne.H.useMemoCache(e)}};k.cache=function(e){return function(){return e.apply(null,arguments)}};k.cacheSignal=function(){return null};k.cloneElement=function(e,t,l){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=Uo({},e.props),n=e.key;if(t!=null)for(i in t.key!==void 0&&(n=""+t.key),t)!Go.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(a[i]=t[i]);var i=arguments.length-2;if(i===1)a.children=l;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];a.children=u}return Ju(e.type,n,a)};k.createContext=function(e){return e={$$typeof:ug,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:cg,_context:e},e};k.createElement=function(e,t,l){var a,n={},i=null;if(t!=null)for(a in t.key!==void 0&&(i=""+t.key),t)Go.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(n[a]=t[a]);var u=arguments.length-2;if(u===1)n.children=l;else if(1<u){for(var s=Array(u),r=0;r<u;r++)s[r]=arguments[r+2];n.children=s}if(e&&e.defaultProps)for(a in u=e.defaultProps,u)n[a]===void 0&&(n[a]=u[a]);return Ju(e,i,n)};k.createRef=function(){return{current:null}};k.forwardRef=function(e){return{$$typeof:sg,render:e}};k.isValidElement=$u;k.lazy=function(e){return{$$typeof:_o,_payload:{_status:-1,_result:e},_init:pg}};k.memo=function(e,t){return{$$typeof:og,type:e,compare:t===void 0?null:t}};k.startTransition=function(e){var t=ne.T,l={};ne.T=l;try{var a=e(),n=ne.S;n!==null&&n(l,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then($c,Is)}catch(i){Is(i)}finally{t!==null&&l.types!==null&&(t.types=l.types),ne.T=t}};k.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()};k.use=function(e){return ne.H.use(e)};k.useActionState=function(e,t,l){return ne.H.useActionState(e,t,l)};k.useCallback=function(e,t){return ne.H.useCallback(e,t)};k.useContext=function(e){return ne.H.useContext(e)};k.useDebugValue=function(){};k.useDeferredValue=function(e,t){return ne.H.useDeferredValue(e,t)};k.useEffect=function(e,t){return ne.H.useEffect(e,t)};k.useEffectEvent=function(e){return ne.H.useEffectEvent(e)};k.useId=function(){return ne.H.useId()};k.useImperativeHandle=function(e,t,l){return ne.H.useImperativeHandle(e,t,l)};k.useInsertionEffect=function(e,t){return ne.H.useInsertionEffect(e,t)};k.useLayoutEffect=function(e,t){return ne.H.useLayoutEffect(e,t)};k.useMemo=function(e,t){return ne.H.useMemo(e,t)};k.useOptimistic=function(e,t){return ne.H.useOptimistic(e,t)};k.useReducer=function(e,t,l){return ne.H.useReducer(e,t,l)};k.useRef=function(e){return ne.H.useRef(e)};k.useState=function(e){return ne.H.useState(e)};k.useSyncExternalStore=function(e,t,l){return ne.H.useSyncExternalStore(e,t,l)};k.useTransition=function(){return ne.H.useTransition()};k.version="19.2.4";Mo.exports=k;var x=Mo.exports,ko={exports:{}},qi={},Yo={exports:{}},Bo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,z){var w=M.length;M.push(z);e:for(;0<w;){var U=w-1>>>1,Q=M[U];if(0<n(Q,z))M[U]=z,M[w]=Q,w=U;else break e}}function l(M){return M.length===0?null:M[0]}function a(M){if(M.length===0)return null;var z=M[0],w=M.pop();if(w!==z){M[0]=w;e:for(var U=0,Q=M.length,V=Q>>>1;U<V;){var Ae=2*(U+1)-1,tt=M[Ae],Te=Ae+1,Xe=M[Te];if(0>n(tt,w))Te<Q&&0>n(Xe,tt)?(M[U]=Xe,M[Te]=w,U=Te):(M[U]=tt,M[Ae]=w,U=Ae);else if(Te<Q&&0>n(Xe,w))M[U]=Xe,M[Te]=w,U=Te;else break e}}return z}function n(M,z){var w=M.sortIndex-z.sortIndex;return w!==0?w:M.id-z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var u=Date,s=u.now();e.unstable_now=function(){return u.now()-s}}var r=[],d=[],p=1,v=null,m=3,y=!1,j=!1,T=!1,_=!1,o=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;function b(M){for(var z=l(d);z!==null;){if(z.callback===null)a(d);else if(z.startTime<=M)a(d),z.sortIndex=z.expirationTime,t(r,z);else break;z=l(d)}}function D(M){if(T=!1,b(M),!j)if(l(r)!==null)j=!0,E||(E=!0,ye());else{var z=l(d);z!==null&&Qe(D,z.startTime-M)}}var E=!1,g=-1,A=5,O=-1;function R(){return _?!0:!(e.unstable_now()-O<A)}function se(){if(_=!1,E){var M=e.unstable_now();O=M;var z=!0;try{e:{j=!1,T&&(T=!1,f(g),g=-1),y=!0;var w=m;try{t:{for(b(M),v=l(r);v!==null&&!(v.expirationTime>M&&R());){var U=v.callback;if(typeof U=="function"){v.callback=null,m=v.priorityLevel;var Q=U(v.expirationTime<=M);if(M=e.unstable_now(),typeof Q=="function"){v.callback=Q,b(M),z=!0;break t}v===l(r)&&a(r),b(M)}else a(r);v=l(r)}if(v!==null)z=!0;else{var V=l(d);V!==null&&Qe(D,V.startTime-M),z=!1}}break e}finally{v=null,m=w,y=!1}z=void 0}}finally{z?ye():E=!1}}}var ye;if(typeof h=="function")ye=function(){h(se)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,je=qe.port2;qe.port1.onmessage=se,ye=function(){je.postMessage(null)}}else ye=function(){o(se,0)};function Qe(M,z){g=o(function(){M(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var w=m;m=z;try{return M()}finally{m=w}},e.unstable_requestPaint=function(){_=!0},e.unstable_runWithPriority=function(M,z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var w=m;m=M;try{return z()}finally{m=w}},e.unstable_scheduleCallback=function(M,z,w){var U=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?U+w:U):w=U,M){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=w+Q,M={id:p++,callback:z,priorityLevel:M,startTime:w,expirationTime:Q,sortIndex:-1},w>U?(M.sortIndex=w,t(d,M),l(r)===null&&M===l(d)&&(T?(f(g),g=-1):T=!0,Qe(D,w-U))):(M.sortIndex=Q,t(r,M),j||y||(j=!0,E||(E=!0,ye()))),M},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(M){var z=m;return function(){var w=m;m=z;try{return M.apply(this,arguments)}finally{m=w}}}})(Bo);Yo.exports=Bo;var vg=Yo.exports,Lo={exports:{}},Ue={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg=x;function qo(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Zt(){}var we={d:{f:Zt,r:function(){throw Error(qo(522))},D:Zt,C:Zt,L:Zt,m:Zt,X:Zt,S:Zt,M:Zt},p:0,findDOMNode:null},xg=Symbol.for("react.portal");function Sg(e,t,l){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xg,key:a==null?null:""+a,children:e,containerInfo:t,implementation:l}}var Qa=bg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Qi(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we;Ue.createPortal=function(e,t){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(qo(299));return Sg(e,t,null,l)};Ue.flushSync=function(e){var t=Qa.T,l=we.p;try{if(Qa.T=null,we.p=2,e)return e()}finally{Qa.T=t,we.p=l,we.d.f()}};Ue.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,we.d.C(e,t))};Ue.prefetchDNS=function(e){typeof e=="string"&&we.d.D(e)};Ue.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var l=t.as,a=Qi(l,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;l==="style"?we.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:n,fetchPriority:i}):l==="script"&&we.d.X(e,{crossOrigin:a,integrity:n,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ue.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var l=Qi(t.as,t.crossOrigin);we.d.M(e,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&we.d.M(e)};Ue.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var l=t.as,a=Qi(l,t.crossOrigin);we.d.L(e,l,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ue.preloadModule=function(e,t){if(typeof e=="string")if(t){var l=Qi(t.as,t.crossOrigin);we.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else we.d.m(e)};Ue.requestFormReset=function(e){we.d.r(e)};Ue.unstable_batchedUpdates=function(e,t){return e(t)};Ue.useFormState=function(e,t,l){return Qa.H.useFormState(e,t,l)};Ue.useFormStatus=function(){return Qa.H.useHostTransitionStatus()};Ue.version="19.2.4";function Qo(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qo)}catch(e){console.error(e)}}Qo(),Lo.exports=Ue;var Ng=Lo.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var be=vg,Xo=x,jg=Ng;function N(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vn(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function Vo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ko(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ps(e){if(vn(e)!==e)throw Error(N(188))}function Ag(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return Ps(n),e;if(i===a)return Ps(n),t;i=i.sibling}throw Error(N(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,s=n.child;s;){if(s===l){u=!0,l=n,a=i;break}if(s===a){u=!0,a=n,l=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===l){u=!0,l=i,a=n;break}if(s===a){u=!0,a=i,l=n;break}s=s.sibling}if(!u)throw Error(N(189))}}if(l.alternate!==a)throw Error(N(190))}if(l.tag!==3)throw Error(N(188));return l.stateNode.current===l?e:t}function Jo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Jo(e),t!==null)return t;e=e.sibling}return null}var ie=Object.assign,Tg=Symbol.for("react.element"),Mn=Symbol.for("react.transitional.element"),ka=Symbol.for("react.portal"),Zl=Symbol.for("react.fragment"),$o=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),Wo=Symbol.for("react.consumer"),wt=Symbol.for("react.context"),Wu=Symbol.for("react.forward_ref"),Fc=Symbol.for("react.suspense"),Ic=Symbol.for("react.suspense_list"),Fu=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Pc=Symbol.for("react.activity"),Eg=Symbol.for("react.memo_cache_sentinel"),er=Symbol.iterator;function Ma(e){return e===null||typeof e!="object"?null:(e=er&&e[er]||e["@@iterator"],typeof e=="function"?e:null)}var zg=Symbol.for("react.client.reference");function eu(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zg?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zl:return"Fragment";case Wc:return"Profiler";case $o:return"StrictMode";case Fc:return"Suspense";case Ic:return"SuspenseList";case Pc:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ka:return"Portal";case wt:return e.displayName||"Context";case Wo:return(e._context.displayName||"Context")+".Consumer";case Wu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fu:return t=e.displayName||null,t!==null?t:eu(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return eu(e(t))}catch{}}return null}var Ya=Array.isArray,G=Xo.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=jg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Tl={pending:!1,data:null,method:null,action:null},tu=[],Vl=-1;function At(e){return{current:e}}function Ne(e){0>Vl||(e.current=tu[Vl],tu[Vl]=null,Vl--)}function te(e,t){Vl++,tu[Vl]=e.current,e.current=t}var Nt=At(null),an=At(null),al=At(null),ri=At(null);function oi(e,t){switch(te(al,t),te(an,e),te(Nt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?co(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=co(t),e=ym(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ne(Nt),te(Nt,e)}function fa(){Ne(Nt),Ne(an),Ne(al)}function lu(e){e.memoizedState!==null&&te(ri,e);var t=Nt.current,l=ym(t,e.type);t!==l&&(te(an,e),te(Nt,l))}function fi(e){an.current===e&&(Ne(Nt),Ne(an)),ri.current===e&&(Ne(ri),hn._currentValue=Tl)}var fc,tr;function Sl(e){if(fc===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);fc=t&&t[1]||"",tr=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fc+e+tr}var dc=!1;function mc(e,t){if(!e||dc)return"";dc=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(y){var m=y}Reflect.construct(e,[],v)}else{try{v.call()}catch(y){m=y}e.call(v.prototype)}}else{try{throw Error()}catch(y){m=y}(v=e())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(y){if(y&&m&&typeof y.stack=="string")return[y.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var r=u.split(`
`),d=s.split(`
`);for(n=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(a===r.length||n===d.length)for(a=r.length-1,n=d.length-1;1<=a&&0<=n&&r[a]!==d[n];)n--;for(;1<=a&&0<=n;a--,n--)if(r[a]!==d[n]){if(a!==1||n!==1)do if(a--,n--,0>n||r[a]!==d[n]){var p=`
`+r[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=n);break}}}finally{dc=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Sl(l):""}function Cg(e,t){switch(e.tag){case 26:case 27:case 5:return Sl(e.type);case 16:return Sl("Lazy");case 13:return e.child!==t&&t!==null?Sl("Suspense Fallback"):Sl("Suspense");case 19:return Sl("SuspenseList");case 0:case 15:return mc(e.type,!1);case 11:return mc(e.type.render,!1);case 1:return mc(e.type,!0);case 31:return Sl("Activity");default:return""}}function lr(e){try{var t="",l=null;do t+=Cg(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var au=Object.prototype.hasOwnProperty,Iu=be.unstable_scheduleCallback,gc=be.unstable_cancelCallback,Dg=be.unstable_shouldYield,Og=be.unstable_requestPaint,$e=be.unstable_now,Mg=be.unstable_getCurrentPriorityLevel,Fo=be.unstable_ImmediatePriority,Io=be.unstable_UserBlockingPriority,di=be.unstable_NormalPriority,_g=be.unstable_LowPriority,Po=be.unstable_IdlePriority,wg=be.log,Ug=be.unstable_setDisableYieldValue,bn=null,We=null;function It(e){if(typeof wg=="function"&&Ug(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(bn,e)}catch{}}var Fe=Math.clz32?Math.clz32:Gg,Rg=Math.log,Hg=Math.LN2;function Gg(e){return e>>>=0,e===0?32:31-(Rg(e)/Hg|0)|0}var _n=256,wn=262144,Un=4194304;function Nl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xi(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?n=Nl(a):(u&=s,u!==0?n=Nl(u):l||(l=s&~e,l!==0&&(n=Nl(l))))):(s=a&~i,s!==0?n=Nl(s):u!==0?n=Nl(u):l||(l=a&~e,l!==0&&(n=Nl(l)))),n===0?0:t!==0&&t!==n&&!(t&i)&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function xn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function kg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(){var e=Un;return Un<<=1,!(Un&62914560)&&(Un=4194304),e}function hc(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Sn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yg(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,d=e.hiddenUpdates;for(l=u&~l;0<l;){var p=31-Fe(l),v=1<<p;s[p]=0,r[p]=-1;var m=d[p];if(m!==null)for(d[p]=null,p=0;p<m.length;p++){var y=m[p];y!==null&&(y.lane&=-536870913)}l&=~v}a!==0&&tf(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function tf(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Fe(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function lf(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-Fe(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function af(e,t){var l=t&-t;return l=l&42?1:Pu(l),l&(e.suspendedLanes|t)?0:l}function Pu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function es(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function nf(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Cm(e.type))}function ar(e,t){var l=J.p;try{return J.p=e,t()}finally{J.p=l}}var pl=Math.random().toString(36).slice(2),ze="__reactFiber$"+pl,Be="__reactProps$"+pl,ja="__reactContainer$"+pl,nu="__reactEvents$"+pl,Bg="__reactListeners$"+pl,Lg="__reactHandles$"+pl,nr="__reactResources$"+pl,Nn="__reactMarker$"+pl;function ts(e){delete e[ze],delete e[Be],delete e[nu],delete e[Bg],delete e[Lg]}function Kl(e){var t=e[ze];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ja]||l[ze]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=fo(e);e!==null;){if(l=e[ze])return l;e=fo(e)}return t}e=l,l=e.parentNode}return null}function Aa(e){if(e=e[ze]||e[ja]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ba(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(N(33))}function aa(e){var t=e[nr];return t||(t=e[nr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Se(e){e[Nn]=!0}var cf=new Set,uf={};function Rl(e,t){da(e,t),da(e+"Capture",t)}function da(e,t){for(uf[e]=t,e=0;e<t.length;e++)cf.add(t[e])}var qg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ir={},cr={};function Qg(e){return au.call(cr,e)?!0:au.call(ir,e)?!1:qg.test(e)?cr[e]=!0:(ir[e]=!0,!1)}function Kn(e,t,l){if(Qg(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Rn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Et(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xg(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function iu(e){if(!e._valueTracker){var t=sf(e)?"checked":"value";e._valueTracker=Xg(e,t,""+e[t])}}function rf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=sf(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zg=/[\n"\\]/g;function ut(e){return e.replace(Zg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function cu(e,t,l,a,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+nt(t)):e.value!==""+nt(t)&&(e.value=""+nt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?uu(e,u,nt(t)):l!=null?uu(e,u,nt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+nt(s):e.removeAttribute("name")}function of(e,t,l,a,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){iu(e);return}l=l!=null?""+nt(l):"",t=t!=null?""+nt(t):l,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),iu(e)}function uu(e,t,l){t==="number"&&mi(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function na(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+nt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function ff(e,t,l){if(t!=null&&(t=""+nt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+nt(l):""}function df(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(N(92));if(Ya(a)){if(1<a.length)throw Error(N(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=nt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),iu(e)}function ma(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Vg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ur(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Vg.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function mf(e,t,l){if(t!=null&&typeof t!="object")throw Error(N(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&ur(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&ur(e,i,t[i])}function ls(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jn(e){return Jg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ut(){}var su=null;function as(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,ia=null;function sr(e){var t=Aa(e);if(t&&(e=t.stateNode)){var l=e[Be]||null;e:switch(e=t.stateNode,t.type){case"input":if(cu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Be]||null;if(!n)throw Error(N(90));cu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&rf(a)}break e;case"textarea":ff(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&na(e,!!l.multiple,t,!1)}}}var pc=!1;function gf(e,t,l){if(pc)return e(t,l);pc=!0;try{var a=e(t);return a}finally{if(pc=!1,(Jl!==null||ia!==null)&&(lc(),Jl&&(t=Jl,e=ia,ia=Jl=null,sr(t),e)))for(t=0;t<e.length;t++)sr(e[t])}}function nn(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Be]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(N(231,t,typeof l));return l}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(Yt)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){ru=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{ru=!1}var Pt=null,ns=null,$n=null;function hf(){if($n)return $n;var e,t=ns,l=t.length,a,n="value"in Pt?Pt.value:Pt.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return $n=n.slice(e,1<a?1-a:void 0)}function Wn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function rr(){return!1}function Le(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(l=e[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hn:rr,this.isPropagationStopped=rr,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Hl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Le(Hl),jn=ie({},Hl,{view:0,detail:0}),$g=Le(jn),yc,vc,wa,Vi=ie({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wa&&(wa&&e.type==="mousemove"?(yc=e.screenX-wa.screenX,vc=e.screenY-wa.screenY):vc=yc=0,wa=e),yc)},movementY:function(e){return"movementY"in e?e.movementY:vc}}),or=Le(Vi),Wg=ie({},Vi,{dataTransfer:0}),Fg=Le(Wg),Ig=ie({},jn,{relatedTarget:0}),bc=Le(Ig),Pg=ie({},Hl,{animationName:0,elapsedTime:0,pseudoElement:0}),eh=Le(Pg),th=ie({},Hl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lh=Le(th),ah=ie({},Hl,{data:0}),fr=Le(ah),nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ch[e])?!!t[e]:!1}function is(){return uh}var sh=ie({},jn,{key:function(e){if(e.key){var t=nh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rh=Le(sh),oh=ie({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dr=Le(oh),fh=ie({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),dh=Le(fh),mh=ie({},Hl,{propertyName:0,elapsedTime:0,pseudoElement:0}),gh=Le(mh),hh=ie({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ph=Le(hh),yh=ie({},Hl,{newState:0,oldState:0}),vh=Le(yh),bh=[9,13,27,32],cs=Yt&&"CompositionEvent"in window,Xa=null;Yt&&"documentMode"in document&&(Xa=document.documentMode);var xh=Yt&&"TextEvent"in window&&!Xa,pf=Yt&&(!cs||Xa&&8<Xa&&11>=Xa),mr=" ",gr=!1;function yf(e,t){switch(e){case"keyup":return bh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $l=!1;function Sh(e,t){switch(e){case"compositionend":return vf(t);case"keypress":return t.which!==32?null:(gr=!0,mr);case"textInput":return e=t.data,e===mr&&gr?null:e;default:return null}}function Nh(e,t){if($l)return e==="compositionend"||!cs&&yf(e,t)?(e=hf(),$n=ns=Pt=null,$l=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pf&&t.locale!=="ko"?null:t.data;default:return null}}var jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jh[e.type]:t==="textarea"}function bf(e,t,l,a){Jl?ia?ia.push(a):ia=[a]:Jl=a,t=Mi(t,"onChange"),0<t.length&&(l=new Zi("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Za=null,cn=null;function Ah(e){gm(e,0)}function Ki(e){var t=Ba(e);if(rf(t))return e}function pr(e,t){if(e==="change")return t}var xf=!1;if(Yt){var xc;if(Yt){var Sc="oninput"in document;if(!Sc){var yr=document.createElement("div");yr.setAttribute("oninput","return;"),Sc=typeof yr.oninput=="function"}xc=Sc}else xc=!1;xf=xc&&(!document.documentMode||9<document.documentMode)}function vr(){Za&&(Za.detachEvent("onpropertychange",Sf),cn=Za=null)}function Sf(e){if(e.propertyName==="value"&&Ki(cn)){var t=[];bf(t,cn,e,as(e)),gf(Ah,t)}}function Th(e,t,l){e==="focusin"?(vr(),Za=t,cn=l,Za.attachEvent("onpropertychange",Sf)):e==="focusout"&&vr()}function Eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(cn)}function zh(e,t){if(e==="click")return Ki(t)}function Ch(e,t){if(e==="input"||e==="change")return Ki(t)}function Dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:Dh;function un(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!au.call(t,n)||!Pe(e[n],t[n]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var l=br(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=br(l)}}function Nf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=mi(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=mi(e.document)}return t}function us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Oh=Yt&&"documentMode"in document&&11>=document.documentMode,Wl=null,ou=null,Va=null,fu=!1;function Sr(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;fu||Wl==null||Wl!==mi(a)||(a=Wl,"selectionStart"in a&&us(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Va&&un(Va,a)||(Va=a,a=Mi(ou,"onSelect"),0<a.length&&(t=new Zi("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Wl)))}function xl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Fl={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionrun:xl("Transition","TransitionRun"),transitionstart:xl("Transition","TransitionStart"),transitioncancel:xl("Transition","TransitionCancel"),transitionend:xl("Transition","TransitionEnd")},Nc={},Af={};Yt&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete Fl.animationend.animation,delete Fl.animationiteration.animation,delete Fl.animationstart.animation),"TransitionEvent"in window||delete Fl.transitionend.transition);function Gl(e){if(Nc[e])return Nc[e];if(!Fl[e])return e;var t=Fl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Af)return Nc[e]=t[l];return e}var Tf=Gl("animationend"),Ef=Gl("animationiteration"),zf=Gl("animationstart"),Mh=Gl("transitionrun"),_h=Gl("transitionstart"),wh=Gl("transitioncancel"),Cf=Gl("transitionend"),Df=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function pt(e,t){Df.set(e,t),Rl(t,[e])}var gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},at=[],Il=0,ss=0;function Ji(){for(var e=Il,t=ss=Il=0;t<e;){var l=at[t];at[t++]=null;var a=at[t];at[t++]=null;var n=at[t];at[t++]=null;var i=at[t];if(at[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Of(l,n,i)}}function $i(e,t,l,a){at[Il++]=e,at[Il++]=t,at[Il++]=l,at[Il++]=a,ss|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function rs(e,t,l,a){return $i(e,t,l,a),hi(e)}function kl(e,t){return $i(e,null,null,t),hi(e)}function Of(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Fe(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function hi(e){if(50<tn)throw tn=0,wu=null,Error(N(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pl={};function Uh(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,l,a){return new Uh(e,t,l,a)}function os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var l=e.alternate;return l===null?(l=Ke(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Mf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fn(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")os(e)&&(u=1);else if(typeof e=="string")u=Yp(e,l,Nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Pc:return e=Ke(31,l,t,n),e.elementType=Pc,e.lanes=i,e;case Zl:return El(l.children,n,i,t);case $o:u=8,n|=24;break;case Wc:return e=Ke(12,l,t,n|2),e.elementType=Wc,e.lanes=i,e;case Fc:return e=Ke(13,l,t,n),e.elementType=Fc,e.lanes=i,e;case Ic:return e=Ke(19,l,t,n),e.elementType=Ic,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wt:u=10;break e;case Wo:u=9;break e;case Wu:u=11;break e;case Fu:u=14;break e;case Vt:u=16,a=null;break e}u=29,l=Error(N(130,e===null?"null":typeof e,"")),a=null}return t=Ke(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function El(e,t,l,a){return e=Ke(7,e,a,t),e.lanes=l,e}function jc(e,t,l){return e=Ke(6,e,null,t),e.lanes=l,e}function _f(e){var t=Ke(18,null,null,0);return t.stateNode=e,t}function Ac(e,t,l){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nr=new WeakMap;function st(e,t){if(typeof e=="object"&&e!==null){var l=Nr.get(e);return l!==void 0?l:(t={value:e,source:t,stack:lr(t)},Nr.set(e,t),t)}return{value:e,source:t,stack:lr(t)}}var ea=[],ta=0,pi=null,sn=0,it=[],ct=0,dl=null,bt=1,xt="";function Mt(e,t){ea[ta++]=sn,ea[ta++]=pi,pi=e,sn=t}function wf(e,t,l){it[ct++]=bt,it[ct++]=xt,it[ct++]=dl,dl=e;var a=bt;e=xt;var n=32-Fe(a)-1;a&=~(1<<n),l+=1;var i=32-Fe(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,bt=1<<32-Fe(t)+n|l<<n|a,xt=i+e}else bt=1<<i|l<<n|a,xt=e}function fs(e){e.return!==null&&(Mt(e,1),wf(e,1,0))}function ds(e){for(;e===pi;)pi=ea[--ta],ea[ta]=null,sn=ea[--ta],ea[ta]=null;for(;e===dl;)dl=it[--ct],it[ct]=null,xt=it[--ct],it[ct]=null,bt=it[--ct],it[ct]=null}function Uf(e,t){it[ct++]=bt,it[ct++]=xt,it[ct++]=dl,bt=t.id,xt=t.overflow,dl=e}var Ce=null,ae=null,Z=!1,nl=null,rt=!1,mu=Error(N(519));function ml(e){var t=Error(N(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rn(st(t,e)),mu}function jr(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[ze]=e,t[Be]=a,l){case"dialog":L("cancel",t),L("close",t);break;case"iframe":case"object":case"embed":L("load",t);break;case"video":case"audio":for(l=0;l<mn.length;l++)L(mn[l],t);break;case"source":L("error",t);break;case"img":case"image":case"link":L("error",t),L("load",t);break;case"details":L("toggle",t);break;case"input":L("invalid",t),of(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":L("invalid",t);break;case"textarea":L("invalid",t),df(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||pm(t.textContent,l)?(a.popover!=null&&(L("beforetoggle",t),L("toggle",t)),a.onScroll!=null&&L("scroll",t),a.onScrollEnd!=null&&L("scrollend",t),a.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ml(e,!0)}function Ar(e){for(Ce=e.return;Ce;)switch(Ce.tag){case 5:case 31:case 13:rt=!1;return;case 27:case 3:rt=!0;return;default:Ce=Ce.return}}function Bl(e){if(e!==Ce)return!1;if(!Z)return Ar(e),Z=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||ku(e.type,e.memoizedProps)),l=!l),l&&ae&&ml(e),Ar(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));ae=oo(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));ae=oo(e)}else t===27?(t=ae,yl(e.type)?(e=qu,qu=null,ae=e):ae=t):ae=Ce?ft(e.stateNode.nextSibling):null;return!0}function Ol(){ae=Ce=null,Z=!1}function Tc(){var e=nl;return e!==null&&(ke===null?ke=e:ke.push.apply(ke,e),nl=null),e}function rn(e){nl===null?nl=[e]:nl.push(e)}var gu=At(null),Yl=null,Rt=null;function Jt(e,t,l){te(gu,t._currentValue),t._currentValue=l}function Gt(e){e._currentValue=gu.current,Ne(gu)}function hu(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function pu(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var r=0;r<t.length;r++)if(s.context===t[r]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),hu(i.return,l,e),a||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(N(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),hu(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Ta(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(N(387));if(u=u.memoizedProps,u!==null){var s=n.type;Pe(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===ri.current){if(u=n.alternate,u===null)throw Error(N(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(hn):e=[hn])}n=n.return}e!==null&&pu(t,e,l,a),t.flags|=262144}function yi(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ml(e){Yl=e,Rt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function De(e){return Rf(Yl,e)}function Gn(e,t){return Yl===null&&Ml(e),Rf(e,t)}function Rf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Rt===null){if(e===null)throw Error(N(308));Rt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rt=Rt.next=t;return l}var Rh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Hh=be.unstable_scheduleCallback,Gh=be.unstable_NormalPriority,he={$$typeof:wt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ms(){return{controller:new Rh,data:new Map,refCount:0}}function An(e){e.refCount--,e.refCount===0&&Hh(Gh,function(){e.controller.abort()})}var Ka=null,yu=0,ga=0,ca=null;function kh(e,t){if(Ka===null){var l=Ka=[];yu=0,ga=ks(),ca={status:"pending",value:void 0,then:function(a){l.push(a)}}}return yu++,t.then(Tr,Tr),t}function Tr(){if(--yu===0&&Ka!==null){ca!==null&&(ca.status="fulfilled");var e=Ka;Ka=null,ga=0,ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Yh(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Er=G.S;G.S=function(e,t){$d=$e(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&kh(e,t),Er!==null&&Er(e,t)};var zl=At(null);function gs(){var e=zl.current;return e!==null?e:ee.pooledCache}function In(e,t){t===null?te(zl,zl.current):te(zl,t.pool)}function Hf(){var e=gs();return e===null?null:{parent:he._currentValue,pool:e}}var Ea=Error(N(460)),hs=Error(N(474)),Wi=Error(N(542)),vi={then:function(){}};function zr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gf(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Ut,Ut),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dr(e),e;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(e=ee,e!==null&&100<e.shellSuspendCounter)throw Error(N(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dr(e),e}throw Cl=t,Ea}}function jl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Cl=l,Ea):l}}var Cl=null;function Cr(){if(Cl===null)throw Error(N(459));var e=Cl;return Cl=null,e}function Dr(e){if(e===Ea||e===Wi)throw Error(N(483))}var ua=null,on=0;function kn(e){var t=on;return on+=1,ua===null&&(ua=[]),Gf(ua,e,t)}function Ua(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Yn(e,t){throw t.$$typeof===Tg?Error(N(525)):(e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function kf(e){function t(o,f){if(e){var h=o.deletions;h===null?(o.deletions=[f],o.flags|=16):h.push(f)}}function l(o,f){if(!e)return null;for(;f!==null;)t(o,f),f=f.sibling;return null}function a(o){for(var f=new Map;o!==null;)o.key!==null?f.set(o.key,o):f.set(o.index,o),o=o.sibling;return f}function n(o,f){return o=Ht(o,f),o.index=0,o.sibling=null,o}function i(o,f,h){return o.index=h,e?(h=o.alternate,h!==null?(h=h.index,h<f?(o.flags|=67108866,f):h):(o.flags|=67108866,f)):(o.flags|=1048576,f)}function u(o){return e&&o.alternate===null&&(o.flags|=67108866),o}function s(o,f,h,b){return f===null||f.tag!==6?(f=jc(h,o.mode,b),f.return=o,f):(f=n(f,h),f.return=o,f)}function r(o,f,h,b){var D=h.type;return D===Zl?p(o,f,h.props.children,b,h.key):f!==null&&(f.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Vt&&jl(D)===f.type)?(f=n(f,h.props),Ua(f,h),f.return=o,f):(f=Fn(h.type,h.key,h.props,null,o.mode,b),Ua(f,h),f.return=o,f)}function d(o,f,h,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ac(h,o.mode,b),f.return=o,f):(f=n(f,h.children||[]),f.return=o,f)}function p(o,f,h,b,D){return f===null||f.tag!==7?(f=El(h,o.mode,b,D),f.return=o,f):(f=n(f,h),f.return=o,f)}function v(o,f,h){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=jc(""+f,o.mode,h),f.return=o,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Mn:return h=Fn(f.type,f.key,f.props,null,o.mode,h),Ua(h,f),h.return=o,h;case ka:return f=Ac(f,o.mode,h),f.return=o,f;case Vt:return f=jl(f),v(o,f,h)}if(Ya(f)||Ma(f))return f=El(f,o.mode,h,null),f.return=o,f;if(typeof f.then=="function")return v(o,kn(f),h);if(f.$$typeof===wt)return v(o,Gn(o,f),h);Yn(o,f)}return null}function m(o,f,h,b){var D=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return D!==null?null:s(o,f,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Mn:return h.key===D?r(o,f,h,b):null;case ka:return h.key===D?d(o,f,h,b):null;case Vt:return h=jl(h),m(o,f,h,b)}if(Ya(h)||Ma(h))return D!==null?null:p(o,f,h,b,null);if(typeof h.then=="function")return m(o,f,kn(h),b);if(h.$$typeof===wt)return m(o,f,Gn(o,h),b);Yn(o,h)}return null}function y(o,f,h,b,D){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return o=o.get(h)||null,s(f,o,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Mn:return o=o.get(b.key===null?h:b.key)||null,r(f,o,b,D);case ka:return o=o.get(b.key===null?h:b.key)||null,d(f,o,b,D);case Vt:return b=jl(b),y(o,f,h,b,D)}if(Ya(b)||Ma(b))return o=o.get(h)||null,p(f,o,b,D,null);if(typeof b.then=="function")return y(o,f,h,kn(b),D);if(b.$$typeof===wt)return y(o,f,h,Gn(f,b),D);Yn(f,b)}return null}function j(o,f,h,b){for(var D=null,E=null,g=f,A=f=0,O=null;g!==null&&A<h.length;A++){g.index>A?(O=g,g=null):O=g.sibling;var R=m(o,g,h[A],b);if(R===null){g===null&&(g=O);break}e&&g&&R.alternate===null&&t(o,g),f=i(R,f,A),E===null?D=R:E.sibling=R,E=R,g=O}if(A===h.length)return l(o,g),Z&&Mt(o,A),D;if(g===null){for(;A<h.length;A++)g=v(o,h[A],b),g!==null&&(f=i(g,f,A),E===null?D=g:E.sibling=g,E=g);return Z&&Mt(o,A),D}for(g=a(g);A<h.length;A++)O=y(g,o,A,h[A],b),O!==null&&(e&&O.alternate!==null&&g.delete(O.key===null?A:O.key),f=i(O,f,A),E===null?D=O:E.sibling=O,E=O);return e&&g.forEach(function(se){return t(o,se)}),Z&&Mt(o,A),D}function T(o,f,h,b){if(h==null)throw Error(N(151));for(var D=null,E=null,g=f,A=f=0,O=null,R=h.next();g!==null&&!R.done;A++,R=h.next()){g.index>A?(O=g,g=null):O=g.sibling;var se=m(o,g,R.value,b);if(se===null){g===null&&(g=O);break}e&&g&&se.alternate===null&&t(o,g),f=i(se,f,A),E===null?D=se:E.sibling=se,E=se,g=O}if(R.done)return l(o,g),Z&&Mt(o,A),D;if(g===null){for(;!R.done;A++,R=h.next())R=v(o,R.value,b),R!==null&&(f=i(R,f,A),E===null?D=R:E.sibling=R,E=R);return Z&&Mt(o,A),D}for(g=a(g);!R.done;A++,R=h.next())R=y(g,o,A,R.value,b),R!==null&&(e&&R.alternate!==null&&g.delete(R.key===null?A:R.key),f=i(R,f,A),E===null?D=R:E.sibling=R,E=R);return e&&g.forEach(function(ye){return t(o,ye)}),Z&&Mt(o,A),D}function _(o,f,h,b){if(typeof h=="object"&&h!==null&&h.type===Zl&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Mn:e:{for(var D=h.key;f!==null;){if(f.key===D){if(D=h.type,D===Zl){if(f.tag===7){l(o,f.sibling),b=n(f,h.props.children),b.return=o,o=b;break e}}else if(f.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Vt&&jl(D)===f.type){l(o,f.sibling),b=n(f,h.props),Ua(b,h),b.return=o,o=b;break e}l(o,f);break}else t(o,f);f=f.sibling}h.type===Zl?(b=El(h.props.children,o.mode,b,h.key),b.return=o,o=b):(b=Fn(h.type,h.key,h.props,null,o.mode,b),Ua(b,h),b.return=o,o=b)}return u(o);case ka:e:{for(D=h.key;f!==null;){if(f.key===D)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){l(o,f.sibling),b=n(f,h.children||[]),b.return=o,o=b;break e}else{l(o,f);break}else t(o,f);f=f.sibling}b=Ac(h,o.mode,b),b.return=o,o=b}return u(o);case Vt:return h=jl(h),_(o,f,h,b)}if(Ya(h))return j(o,f,h,b);if(Ma(h)){if(D=Ma(h),typeof D!="function")throw Error(N(150));return h=D.call(h),T(o,f,h,b)}if(typeof h.then=="function")return _(o,f,kn(h),b);if(h.$$typeof===wt)return _(o,f,Gn(o,h),b);Yn(o,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,f!==null&&f.tag===6?(l(o,f.sibling),b=n(f,h),b.return=o,o=b):(l(o,f),b=jc(h,o.mode,b),b.return=o,o=b),u(o)):l(o,f)}return function(o,f,h,b){try{on=0;var D=_(o,f,h,b);return ua=null,D}catch(g){if(g===Ea||g===Wi)throw g;var E=Ke(29,g,null,o.mode);return E.lanes=b,E.return=o,E}finally{}}}var _l=kf(!0),Yf=kf(!1),Kt=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function il(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,K&2){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=hi(e),Of(e,null,l),t}return $i(e,a,t,l),hi(e)}function Ja(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,lf(e,l)}}function Ec(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var bu=!1;function $a(){if(bu){var e=ca;if(e!==null)throw e}}function Wa(e,t,l,a){bu=!1;var n=e.updateQueue;Kt=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,d=r.next;r.next=null,u===null?i=d:u.next=d,u=r;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==u&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=r))}if(i!==null){var v=n.baseState;u=0,p=d=r=null,s=i;do{var m=s.lane&-536870913,y=m!==s.lane;if(y?(X&m)===m:(a&m)===m){m!==0&&m===ga&&(bu=!0),p!==null&&(p=p.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var j=e,T=s;m=t;var _=l;switch(T.tag){case 1:if(j=T.payload,typeof j=="function"){v=j.call(_,v,m);break e}v=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=T.payload,m=typeof j=="function"?j.call(_,v,m):j,m==null)break e;v=ie({},v,m);break e;case 2:Kt=!0}}m=s.callback,m!==null&&(e.flags|=64,y&&(e.flags|=8192),y=n.callbacks,y===null?n.callbacks=[m]:y.push(m))}else y={lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=y,r=v):p=p.next=y,u|=m;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;y=s,s=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);p===null&&(r=v),n.baseState=r,n.firstBaseUpdate=d,n.lastBaseUpdate=p,i===null&&(n.shared.lanes=0),hl|=u,e.lanes=u,e.memoizedState=v}}function Bf(e,t){if(typeof e!="function")throw Error(N(191,e));e.call(t)}function Lf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Bf(l[e],t)}var ha=At(null),bi=At(0);function Or(e,t){e=Qt,te(bi,e),te(ha,t),Qt=e|t.baseLanes}function xu(){te(bi,Qt),te(ha,ha.current)}function ys(){Qt=bi.current,Ne(ha),Ne(bi)}var et=At(null),ot=null;function $t(e){var t=e.alternate;te(fe,fe.current&1),te(et,e),ot===null&&(t===null||ha.current!==null||t.memoizedState!==null)&&(ot=e)}function Su(e){te(fe,fe.current),te(et,e),ot===null&&(ot=e)}function qf(e){e.tag===22?(te(fe,fe.current),te(et,e),ot===null&&(ot=e)):Wt()}function Wt(){te(fe,fe.current),te(et,et.current)}function Ve(e){Ne(et),ot===e&&(ot=null),Ne(fe)}var fe=At(0);function xi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Bu(l)||Lu(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bt=0,Y=null,I=null,me=null,Si=!1,sa=!1,wl=!1,Ni=0,fn=0,ra=null,Bh=0;function re(){throw Error(N(321))}function vs(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Pe(e[l],t[l]))return!1;return!0}function bs(e,t,l,a,n,i){return Bt=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,G.H=e===null||e.memoizedState===null?bd:Os,wl=!1,i=l(a,n),wl=!1,sa&&(i=Xf(t,l,a,n)),Qf(e),i}function Qf(e){G.H=dn;var t=I!==null&&I.next!==null;if(Bt=0,me=I=Y=null,Si=!1,fn=0,ra=null,t)throw Error(N(300));e===null||pe||(e=e.dependencies,e!==null&&yi(e)&&(pe=!0))}function Xf(e,t,l,a){Y=e;var n=0;do{if(sa&&(ra=null),fn=0,sa=!1,25<=n)throw Error(N(301));if(n+=1,me=I=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}G.H=xd,i=t(l,a)}while(sa);return i}function Lh(){var e=G.H,t=e.useState()[0];return t=typeof t.then=="function"?Tn(t):t,e=e.useState()[0],(I!==null?I.memoizedState:null)!==e&&(Y.flags|=1024),t}function xs(){var e=Ni!==0;return Ni=0,e}function Ss(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Ns(e){if(Si){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Si=!1}Bt=0,me=I=Y=null,sa=!1,fn=Ni=0,ra=null}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?Y.memoizedState=me=e:me=me.next=e,me}function de(){if(I===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=I.next;var t=me===null?Y.memoizedState:me.next;if(t!==null)me=t,I=e;else{if(e===null)throw Y.alternate===null?Error(N(467)):Error(N(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},me===null?Y.memoizedState=me=e:me=me.next=e}return me}function Fi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tn(e){var t=fn;return fn+=1,ra===null&&(ra=[]),e=Gf(ra,e,t),t=Y,(me===null?t.memoizedState:me.next)===null&&(t=t.alternate,G.H=t===null||t.memoizedState===null?bd:Os),e}function Ii(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Tn(e);if(e.$$typeof===wt)return De(e)}throw Error(N(438,String(e)))}function js(e){var t=null,l=Y.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=Y.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Fi(),Y.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Eg;return t.index++,l}function Lt(e,t){return typeof t=="function"?t(e):t}function Pn(e){var t=de();return As(t,I,e)}function As(e,t,l){var a=e.queue;if(a===null)throw Error(N(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,r=null,d=t,p=!1;do{var v=d.lane&-536870913;if(v!==d.lane?(X&v)===v:(Bt&v)===v){var m=d.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),v===ga&&(p=!0);else if((Bt&m)===m){d=d.next,m===ga&&(p=!0);continue}else v={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=v,u=i):r=r.next=v,Y.lanes|=m,hl|=m;v=d.action,wl&&l(i,v),i=d.hasEagerState?d.eagerState:l(i,v)}else m={lane:v,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=m,u=i):r=r.next=m,Y.lanes|=v,hl|=v;d=d.next}while(d!==null&&d!==t);if(r===null?u=i:r.next=s,!Pe(i,e.memoizedState)&&(pe=!0,p&&(l=ca,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=r,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function zc(e){var t=de(),l=t.queue;if(l===null)throw Error(N(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Pe(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Zf(e,t,l){var a=Y,n=de(),i=Z;if(i){if(l===void 0)throw Error(N(407));l=l()}else l=t();var u=!Pe((I||n).memoizedState,l);if(u&&(n.memoizedState=l,pe=!0),n=n.queue,Ts(Jf.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||me!==null&&me.memoizedState.tag&1){if(a.flags|=2048,pa(9,{destroy:void 0},Kf.bind(null,a,n,l,t),null),ee===null)throw Error(N(349));i||Bt&127||Vf(a,t,l)}return l}function Vf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=Y.updateQueue,t===null?(t=Fi(),Y.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Kf(e,t,l,a){t.value=l,t.getSnapshot=a,$f(t)&&Wf(e)}function Jf(e,t,l){return l(function(){$f(t)&&Wf(e)})}function $f(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Pe(e,l)}catch{return!0}}function Wf(e){var t=kl(e,2);t!==null&&Ye(t,e,2)}function Nu(e){var t=_e();if(typeof e=="function"){var l=e;if(e=l(),wl){It(!0);try{l()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function Ff(e,t,l,a){return e.baseState=l,As(e,I,typeof a=="function"?a:Lt)}function qh(e,t,l,a,n){if(ec(e))throw Error(N(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};G.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,If(t,i)):(i.next=l.next,t.pending=l.next=i)}}function If(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=G.T,u={};G.T=u;try{var s=l(n,a),r=G.S;r!==null&&r(u,s),Mr(e,t,s)}catch(d){ju(e,t,d)}finally{i!==null&&u.types!==null&&(i.types=u.types),G.T=i}}else try{i=l(n,a),Mr(e,t,i)}catch(d){ju(e,t,d)}}function Mr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){_r(e,t,a)},function(a){return ju(e,t,a)}):_r(e,t,l)}function _r(e,t,l){t.status="fulfilled",t.value=l,Pf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,If(e,l)))}function ju(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Pf(t),t=t.next;while(t!==a)}e.action=null}function Pf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ed(e,t){return t}function wr(e,t){if(Z){var l=ee.formState;if(l!==null){e:{var a=Y;if(Z){if(ae){t:{for(var n=ae,i=rt;n.nodeType!==8;){if(!i){n=null;break t}if(n=ft(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ae=ft(n.nextSibling),a=n.data==="F!";break e}}ml(a)}a=!1}a&&(t=l[0])}}return l=_e(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ed,lastRenderedState:t},l.queue=a,l=pd.bind(null,Y,a),a.dispatch=l,a=Nu(!1),i=Ds.bind(null,Y,!1,a.queue),a=_e(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=qh.bind(null,Y,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Ur(e){var t=de();return td(t,I,e)}function td(e,t,l){if(t=As(e,t,ed)[0],e=Pn(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Tn(t)}catch(u){throw u===Ea?Wi:u}else a=t;t=de();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(Y.flags|=2048,pa(9,{destroy:void 0},Qh.bind(null,n,l),null)),[a,i,e]}function Qh(e,t){e.action=t}function Rr(e){var t=de(),l=I;if(l!==null)return td(t,l,e);de(),t=t.memoizedState,l=de();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function pa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=Y.updateQueue,t===null&&(t=Fi(),Y.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function ld(){return de().memoizedState}function ei(e,t,l,a){var n=_e();Y.flags|=e,n.memoizedState=pa(1|t,{destroy:void 0},l,a===void 0?null:a)}function Pi(e,t,l,a){var n=de();a=a===void 0?null:a;var i=n.memoizedState.inst;I!==null&&a!==null&&vs(a,I.memoizedState.deps)?n.memoizedState=pa(t,i,l,a):(Y.flags|=e,n.memoizedState=pa(1|t,i,l,a))}function Hr(e,t){ei(8390656,8,e,t)}function Ts(e,t){Pi(2048,8,e,t)}function Xh(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=Fi(),Y.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function ad(e){var t=de().memoizedState;return Xh({ref:t,nextImpl:e}),function(){if(K&2)throw Error(N(440));return t.impl.apply(void 0,arguments)}}function nd(e,t){return Pi(4,2,e,t)}function id(e,t){return Pi(4,4,e,t)}function cd(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ud(e,t,l){l=l!=null?l.concat([e]):null,Pi(4,4,cd.bind(null,t,e),l)}function Es(){}function sd(e,t){var l=de();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&vs(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function rd(e,t){var l=de();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&vs(t,a[1]))return a[0];if(a=e(),wl){It(!0);try{e()}finally{It(!1)}}return l.memoizedState=[a,t],a}function zs(e,t,l){return l===void 0||Bt&1073741824&&!(X&261930)?e.memoizedState=t:(e.memoizedState=l,e=Fd(),Y.lanes|=e,hl|=e,l)}function od(e,t,l,a){return Pe(l,t)?l:ha.current!==null?(e=zs(e,l,a),Pe(e,t)||(pe=!0),e):!(Bt&42)||Bt&1073741824&&!(X&261930)?(pe=!0,e.memoizedState=l):(e=Fd(),Y.lanes|=e,hl|=e,t)}function fd(e,t,l,a,n){var i=J.p;J.p=i!==0&&8>i?i:8;var u=G.T,s={};G.T=s,Ds(e,!1,t,l);try{var r=n(),d=G.S;if(d!==null&&d(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var p=Yh(r,a);Fa(e,t,p,Ie(e))}else Fa(e,t,a,Ie(e))}catch(v){Fa(e,t,{then:function(){},status:"rejected",reason:v},Ie())}finally{J.p=i,u!==null&&s.types!==null&&(u.types=s.types),G.T=u}}function Zh(){}function Au(e,t,l,a){if(e.tag!==5)throw Error(N(476));var n=dd(e).queue;fd(e,n,t,Tl,l===null?Zh:function(){return md(e),l(a)})}function dd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Tl,baseState:Tl,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:Tl},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function md(e){var t=dd(e);t.next===null&&(t=e.alternate.memoizedState),Fa(e,t.next.queue,{},Ie())}function Cs(){return De(hn)}function gd(){return de().memoizedState}function hd(){return de().memoizedState}function Vh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Ie();e=il(l);var a=cl(t,e,l);a!==null&&(Ye(a,t,l),Ja(a,t,l)),t={cache:ms()},e.payload=t;return}t=t.return}}function Kh(e,t,l){var a=Ie();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ec(e)?yd(t,l):(l=rs(e,t,l,a),l!==null&&(Ye(l,e,a),vd(l,t,a)))}function pd(e,t,l){var a=Ie();Fa(e,t,l,a)}function Fa(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ec(e))yd(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,l);if(n.hasEagerState=!0,n.eagerState=s,Pe(s,u))return $i(e,t,n,0),ee===null&&Ji(),!1}catch{}finally{}if(l=rs(e,t,n,a),l!==null)return Ye(l,e,a),vd(l,t,a),!0}return!1}function Ds(e,t,l,a){if(a={lane:2,revertLane:ks(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ec(e)){if(t)throw Error(N(479))}else t=rs(e,l,a,2),t!==null&&Ye(t,e,2)}function ec(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function yd(e,t){sa=Si=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function vd(e,t,l){if(l&4194048){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,lf(e,l)}}var dn={readContext:De,use:Ii,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useLayoutEffect:re,useInsertionEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useSyncExternalStore:re,useId:re,useHostTransitionStatus:re,useFormState:re,useActionState:re,useOptimistic:re,useMemoCache:re,useCacheRefresh:re};dn.useEffectEvent=re;var bd={readContext:De,use:Ii,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Hr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,ei(4194308,4,cd.bind(null,t,e),l)},useLayoutEffect:function(e,t){return ei(4194308,4,e,t)},useInsertionEffect:function(e,t){ei(4,2,e,t)},useMemo:function(e,t){var l=_e();t=t===void 0?null:t;var a=e();if(wl){It(!0);try{e()}finally{It(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=_e();if(l!==void 0){var n=l(t);if(wl){It(!0);try{l(t)}finally{It(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Kh.bind(null,Y,e),[a.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:function(e){e=Nu(e);var t=e.queue,l=pd.bind(null,Y,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Es,useDeferredValue:function(e,t){var l=_e();return zs(l,e,t)},useTransition:function(){var e=Nu(!1);return e=fd.bind(null,Y,e.queue,!0,!1),_e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=Y,n=_e();if(Z){if(l===void 0)throw Error(N(407));l=l()}else{if(l=t(),ee===null)throw Error(N(349));X&127||Vf(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Hr(Jf.bind(null,a,i,e),[e]),a.flags|=2048,pa(9,{destroy:void 0},Kf.bind(null,a,i,l,t),null),l},useId:function(){var e=_e(),t=ee.identifierPrefix;if(Z){var l=xt,a=bt;l=(a&~(1<<32-Fe(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Ni++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Bh++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Cs,useFormState:wr,useActionState:wr,useOptimistic:function(e){var t=_e();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Ds.bind(null,Y,!0,l),l.dispatch=t,[e,t]},useMemoCache:js,useCacheRefresh:function(){return _e().memoizedState=Vh.bind(null,Y)},useEffectEvent:function(e){var t=_e(),l={impl:e};return t.memoizedState=l,function(){if(K&2)throw Error(N(440));return l.impl.apply(void 0,arguments)}}},Os={readContext:De,use:Ii,useCallback:sd,useContext:De,useEffect:Ts,useImperativeHandle:ud,useInsertionEffect:nd,useLayoutEffect:id,useMemo:rd,useReducer:Pn,useRef:ld,useState:function(){return Pn(Lt)},useDebugValue:Es,useDeferredValue:function(e,t){var l=de();return od(l,I.memoizedState,e,t)},useTransition:function(){var e=Pn(Lt)[0],t=de().memoizedState;return[typeof e=="boolean"?e:Tn(e),t]},useSyncExternalStore:Zf,useId:gd,useHostTransitionStatus:Cs,useFormState:Ur,useActionState:Ur,useOptimistic:function(e,t){var l=de();return Ff(l,I,e,t)},useMemoCache:js,useCacheRefresh:hd};Os.useEffectEvent=ad;var xd={readContext:De,use:Ii,useCallback:sd,useContext:De,useEffect:Ts,useImperativeHandle:ud,useInsertionEffect:nd,useLayoutEffect:id,useMemo:rd,useReducer:zc,useRef:ld,useState:function(){return zc(Lt)},useDebugValue:Es,useDeferredValue:function(e,t){var l=de();return I===null?zs(l,e,t):od(l,I.memoizedState,e,t)},useTransition:function(){var e=zc(Lt)[0],t=de().memoizedState;return[typeof e=="boolean"?e:Tn(e),t]},useSyncExternalStore:Zf,useId:gd,useHostTransitionStatus:Cs,useFormState:Rr,useActionState:Rr,useOptimistic:function(e,t){var l=de();return I!==null?Ff(l,I,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:js,useCacheRefresh:hd};xd.useEffectEvent=ad;function Cc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:ie({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Tu={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=Ie(),n=il(a);n.payload=t,l!=null&&(n.callback=l),t=cl(e,n,a),t!==null&&(Ye(t,e,a),Ja(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=Ie(),n=il(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=cl(e,n,a),t!==null&&(Ye(t,e,a),Ja(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Ie(),a=il(l);a.tag=2,t!=null&&(a.callback=t),t=cl(e,a,l),t!==null&&(Ye(t,e,l),Ja(t,e,l))}};function Gr(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!un(l,a)||!un(n,i):!0}function kr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Tu.enqueueReplaceState(t,t.state,null)}function Ul(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=ie({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Sd(e){gi(e)}function Nd(e){console.error(e)}function jd(e){gi(e)}function ji(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Yr(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Eu(e,t,l){return l=il(l),l.tag=3,l.payload={element:null},l.callback=function(){ji(e,t)},l}function Ad(e){return e=il(e),e.tag=3,e}function Td(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Yr(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Yr(t,l,a),typeof n!="function"&&(ul===null?ul=new Set([this]):ul.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Jh(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Ta(t,l,n,!0),l=et.current,l!==null){switch(l.tag){case 31:case 13:return ot===null?Ci():l.alternate===null&&oe===0&&(oe=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===vi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Yc(e,a,n)),!1;case 22:return l.flags|=65536,a===vi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Yc(e,a,n)),!1}throw Error(N(435,l.tag))}return Yc(e,a,n),Ci(),!1}if(Z)return t=et.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==mu&&(e=Error(N(422),{cause:a}),rn(st(e,l)))):(a!==mu&&(t=Error(N(423),{cause:a}),rn(st(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=st(a,l),n=Eu(e.stateNode,a,n),Ec(e,n),oe!==4&&(oe=2)),!1;var i=Error(N(520),{cause:a});if(i=st(i,l),en===null?en=[i]:en.push(i),oe!==4&&(oe=2),t===null)return!0;a=st(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Eu(l.stateNode,a,e),Ec(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ul===null||!ul.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Ad(n),Td(n,e,l,a),Ec(l,n),!1}l=l.return}while(l!==null);return!1}var Ms=Error(N(461)),pe=!1;function Ee(e,t,l,a){t.child=e===null?Yf(t,null,l,a):_l(t,e.child,l,a)}function Br(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var s in a)s!=="ref"&&(u[s]=a[s])}else u=a;return Ml(t),a=bs(e,t,l,u,i,n),s=xs(),e!==null&&!pe?(Ss(e,t,n),qt(e,t,n)):(Z&&s&&fs(t),t.flags|=1,Ee(e,t,a,n),t.child)}function Lr(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!os(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Ed(e,t,i,a,n)):(e=Fn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!_s(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:un,l(u,a)&&e.ref===t.ref)return qt(e,t,n)}return t.flags|=1,e=Ht(i,a),e.ref=t.ref,e.return=t,t.child=e}function Ed(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(un(i,a)&&e.ref===t.ref)if(pe=!1,t.pendingProps=a=i,_s(e,n))e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,qt(e,t,n)}return zu(e,t,l,a,n)}function zd(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return qr(e,t,i,l,a)}if(l&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&In(t,i!==null?i.cachePool:null),i!==null?Or(t,i):xu(),qf(t);else return a=t.lanes=536870912,qr(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(In(t,i.cachePool),Or(t,i),Wt(),t.memoizedState=null):(e!==null&&In(t,null),xu(),Wt());return Ee(e,t,n,l),t.child}function La(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function qr(e,t,l,a,n){var i=gs();return i=i===null?null:{parent:he._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&In(t,null),xu(),qf(t),e!==null&&Ta(e,t,a,!0),t.childLanes=n,null}function ti(e,t){return t=Ai({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Qr(e,t,l){return _l(t,e.child,null,l),e=ti(t,t.pendingProps),e.flags|=2,Ve(t),t.memoizedState=null,e}function $h(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Z){if(a.mode==="hidden")return e=ti(t,a),t.lanes=536870912,La(null,e);if(Su(t),(e=ae)?(e=bm(e,rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:dl!==null?{id:bt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},l=_f(e),l.return=t,t.child=l,Ce=t,ae=null)):e=null,e===null)throw ml(t);return t.lanes=536870912,null}return ti(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Su(t),n)if(t.flags&256)t.flags&=-257,t=Qr(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(N(558));else if(pe||Ta(e,t,l,!1),n=(l&e.childLanes)!==0,pe||n){if(a=ee,a!==null&&(u=af(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,kl(e,u),Ye(a,e,u),Ms;Ci(),t=Qr(e,t,l)}else e=i.treeContext,ae=ft(u.nextSibling),Ce=t,Z=!0,nl=null,rt=!1,e!==null&&Uf(t,e),t=ti(t,a),t.flags|=4096;return t}return e=Ht(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function li(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(N(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function zu(e,t,l,a,n){return Ml(t),l=bs(e,t,l,a,void 0,n),a=xs(),e!==null&&!pe?(Ss(e,t,n),qt(e,t,n)):(Z&&a&&fs(t),t.flags|=1,Ee(e,t,l,n),t.child)}function Xr(e,t,l,a,n,i){return Ml(t),t.updateQueue=null,l=Xf(t,a,l,n),Qf(e),a=xs(),e!==null&&!pe?(Ss(e,t,i),qt(e,t,i)):(Z&&a&&fs(t),t.flags|=1,Ee(e,t,l,i),t.child)}function Zr(e,t,l,a,n){if(Ml(t),t.stateNode===null){var i=Pl,u=l.contextType;typeof u=="object"&&u!==null&&(i=De(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Tu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},ps(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?De(u):Pl,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Cc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Tu.enqueueReplaceState(i,i.state,null),Wa(t,a,i,n),$a(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,r=Ul(l,s);i.props=r;var d=i.context,p=l.contextType;u=Pl,typeof p=="object"&&p!==null&&(u=De(p));var v=l.getDerivedStateFromProps;p=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||d!==u)&&kr(t,i,a,u),Kt=!1;var m=t.memoizedState;i.state=m,Wa(t,a,i,n),$a(),d=t.memoizedState,s||m!==d||Kt?(typeof v=="function"&&(Cc(t,l,v,a),d=t.memoizedState),(r=Kt||Gr(t,l,r,a,m,d,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),i.props=a,i.state=d,i.context=u,a=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,vu(e,t),u=t.memoizedProps,p=Ul(l,u),i.props=p,v=t.pendingProps,m=i.context,d=l.contextType,r=Pl,typeof d=="object"&&d!==null&&(r=De(d)),s=l.getDerivedStateFromProps,(d=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||m!==r)&&kr(t,i,a,r),Kt=!1,m=t.memoizedState,i.state=m,Wa(t,a,i,n),$a();var y=t.memoizedState;u!==v||m!==y||Kt||e!==null&&e.dependencies!==null&&yi(e.dependencies)?(typeof s=="function"&&(Cc(t,l,s,a),y=t.memoizedState),(p=Kt||Gr(t,l,p,a,m,y,r)||e!==null&&e.dependencies!==null&&yi(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=y),i.props=a,i.state=y,i.context=r,a=p):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,li(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=_l(t,e.child,null,n),t.child=_l(t,null,l,n)):Ee(e,t,l,n),t.memoizedState=i.state,e=t.child):e=qt(e,t,n),e}function Vr(e,t,l,a){return Ol(),t.flags|=256,Ee(e,t,l,a),t.child}var Dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oc(e){return{baseLanes:e,cachePool:Hf()}}function Mc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Je),e}function Cd(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(fe.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Z){if(n?$t(t):Wt(),(e=ae)?(e=bm(e,rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:dl!==null?{id:bt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},l=_f(e),l.return=t,t.child=l,Ce=t,ae=null)):e=null,e===null)throw ml(t);return Lu(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,n?(Wt(),n=t.mode,s=Ai({mode:"hidden",children:s},n),a=El(a,n,l,null),s.return=t,a.return=t,s.sibling=a,t.child=s,a=t.child,a.memoizedState=Oc(l),a.childLanes=Mc(e,u,l),t.memoizedState=Dc,La(null,a)):($t(t),Cu(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(i)t.flags&256?($t(t),t.flags&=-257,t=_c(e,t,l)):t.memoizedState!==null?(Wt(),t.child=e.child,t.flags|=128,t=null):(Wt(),s=a.fallback,n=t.mode,a=Ai({mode:"visible",children:a.children},n),s=El(s,n,l,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,_l(t,e.child,null,l),a=t.child,a.memoizedState=Oc(l),a.childLanes=Mc(e,u,l),t.memoizedState=Dc,t=La(null,a));else if($t(t),Lu(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var d=u.dgst;u=d,a=Error(N(419)),a.stack="",a.digest=u,rn({value:a,source:null,stack:null}),t=_c(e,t,l)}else if(pe||Ta(e,t,l,!1),u=(l&e.childLanes)!==0,pe||u){if(u=ee,u!==null&&(a=af(u,l),a!==0&&a!==r.retryLane))throw r.retryLane=a,kl(e,a),Ye(u,e,a),Ms;Bu(s)||Ci(),t=_c(e,t,l)}else Bu(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,ae=ft(s.nextSibling),Ce=t,Z=!0,nl=null,rt=!1,e!==null&&Uf(t,e),t=Cu(t,a.children),t.flags|=4096);return t}return n?(Wt(),s=a.fallback,n=t.mode,r=e.child,d=r.sibling,a=Ht(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,d!==null?s=Ht(d,s):(s=El(s,n,l,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,La(null,a),a=t.child,s=e.child.memoizedState,s===null?s=Oc(l):(n=s.cachePool,n!==null?(r=he._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Hf(),s={baseLanes:s.baseLanes|l,cachePool:n}),a.memoizedState=s,a.childLanes=Mc(e,u,l),t.memoizedState=Dc,La(e.child,a)):($t(t),l=e.child,e=l.sibling,l=Ht(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Cu(e,t){return t=Ai({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ai(e,t){return e=Ke(22,e,null,t),e.lanes=0,e}function _c(e,t,l){return _l(t,e.child,null,l),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kr(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),hu(e.return,t,l)}function wc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Dd(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=fe.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,te(fe,u),Ee(e,t,a,l),a=Z?sn:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kr(e,l,t);else if(e.tag===19)Kr(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&xi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),wc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&xi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}wc(t,!0,l,null,i,a);break;case"together":wc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function qt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),hl|=t.lanes,!(l&t.childLanes))if(e!==null){if(Ta(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,l=Ht(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ht(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function _s(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&yi(e)))}function Wh(e,t,l){switch(t.tag){case 3:oi(t,t.stateNode.containerInfo),Jt(t,he,e.memoizedState.cache),Ol();break;case 27:case 5:lu(t);break;case 4:oi(t,t.stateNode.containerInfo);break;case 10:Jt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Su(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?($t(t),t.flags|=128,null):l&t.child.childLanes?Cd(e,t,l):($t(t),e=qt(e,t,l),e!==null?e.sibling:null);$t(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Ta(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Dd(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),te(fe,fe.current),a)break;return null;case 22:return t.lanes=0,zd(e,t,l,t.pendingProps);case 24:Jt(t,he,e.memoizedState.cache)}return qt(e,t,l)}function Od(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)pe=!0;else{if(!_s(e,l)&&!(t.flags&128))return pe=!1,Wh(e,t,l);pe=!!(e.flags&131072)}else pe=!1,Z&&t.flags&1048576&&wf(t,sn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=jl(t.elementType),t.type=e,typeof e=="function")os(e)?(a=Ul(e,a),t.tag=1,t=Zr(null,t,e,a,l)):(t.tag=0,t=zu(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===Wu){t.tag=11,t=Br(null,t,e,a,l);break e}else if(n===Fu){t.tag=14,t=Lr(null,t,e,a,l);break e}}throw t=eu(e)||e,Error(N(306,t,""))}}return t;case 0:return zu(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Ul(a,t.pendingProps),Zr(e,t,a,n,l);case 3:e:{if(oi(t,t.stateNode.containerInfo),e===null)throw Error(N(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,vu(e,t),Wa(t,a,null,l);var u=t.memoizedState;if(a=u.cache,Jt(t,he,a),a!==i.cache&&pu(t,[he],l,!0),$a(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Vr(e,t,a,l);break e}else if(a!==n){n=st(Error(N(424)),t),rn(n),t=Vr(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ae=ft(e.firstChild),Ce=t,Z=!0,nl=null,rt=!0,l=Yf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ol(),a===n){t=qt(e,t,l);break e}Ee(e,t,a,l)}t=t.child}return t;case 26:return li(e,t),e===null?(l=go(t.type,null,t.pendingProps,null))?t.memoizedState=l:Z||(l=t.type,e=t.pendingProps,a=_i(al.current).createElement(l),a[ze]=t,a[Be]=e,Oe(a,l,e),Se(a),t.stateNode=a):t.memoizedState=go(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lu(t),e===null&&Z&&(a=t.stateNode=xm(t.type,t.pendingProps,al.current),Ce=t,rt=!0,n=ae,yl(t.type)?(qu=n,ae=ft(a.firstChild)):ae=n),Ee(e,t,t.pendingProps.children,l),li(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Z&&((n=a=ae)&&(a=Ep(a,t.type,t.pendingProps,rt),a!==null?(t.stateNode=a,Ce=t,ae=ft(a.firstChild),rt=!1,n=!0):n=!1),n||ml(t)),lu(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,ku(n,i)?a=null:u!==null&&ku(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=bs(e,t,Lh,null,null,l),hn._currentValue=n),li(e,t),Ee(e,t,a,l),t.child;case 6:return e===null&&Z&&((e=l=ae)&&(l=zp(l,t.pendingProps,rt),l!==null?(t.stateNode=l,Ce=t,ae=null,e=!0):e=!1),e||ml(t)),null;case 13:return Cd(e,t,l);case 4:return oi(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=_l(t,null,a,l):Ee(e,t,a,l),t.child;case 11:return Br(e,t,t.type,t.pendingProps,l);case 7:return Ee(e,t,t.pendingProps,l),t.child;case 8:return Ee(e,t,t.pendingProps.children,l),t.child;case 12:return Ee(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,Jt(t,t.type,a.value),Ee(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Ml(t),n=De(n),a=a(n),t.flags|=1,Ee(e,t,a,l),t.child;case 14:return Lr(e,t,t.type,t.pendingProps,l);case 15:return Ed(e,t,t.type,t.pendingProps,l);case 19:return Dd(e,t,l);case 31:return $h(e,t,l);case 22:return zd(e,t,l,t.pendingProps);case 24:return Ml(t),a=De(he),e===null?(n=gs(),n===null&&(n=ee,i=ms(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},ps(t),Jt(t,he,n)):(e.lanes&l&&(vu(e,t),Wa(t,null,null,l),$a()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Jt(t,he,a)):(a=i.cache,Jt(t,he,a),a!==n.cache&&pu(t,[he],l,!0))),Ee(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(N(156,t.tag))}function zt(e){e.flags|=4}function Uc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(em())e.flags|=8192;else throw Cl=vi,hs}else e.flags&=-16777217}function Jr(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!jm(t))if(em())e.flags|=8192;else throw Cl=vi,hs}function Bn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ef():536870912,e.lanes|=t,ya|=t)}function Ra(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Fh(e,t,l){var a=t.pendingProps;switch(ds(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return le(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Gt(he),fa(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Bl(t)?zt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tc())),le(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(zt(t),i!==null?(le(t),Jr(t,i)):(le(t),Uc(t,n,null,a,l))):i?i!==e.memoizedState?(zt(t),le(t),Jr(t,i)):(le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&zt(t),le(t),Uc(t,n,e,a,l)),null;case 27:if(fi(t),l=al.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&zt(t);else{if(!a){if(t.stateNode===null)throw Error(N(166));return le(t),null}e=Nt.current,Bl(t)?jr(t):(e=xm(n,a,l),t.stateNode=e,zt(t))}return le(t),null;case 5:if(fi(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&zt(t);else{if(!a){if(t.stateNode===null)throw Error(N(166));return le(t),null}if(i=Nt.current,Bl(t))jr(t);else{var u=_i(al.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[ze]=t,i[Be]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Oe(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&zt(t)}}return le(t),Uc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&zt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(N(166));if(e=al.current,Bl(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Ce,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[ze]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||pm(e.nodeValue,l)),e||ml(t,!0)}else e=_i(e).createTextNode(a),e[ze]=t,t.stateNode=e}return le(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Bl(t),l!==null){if(e===null){if(!a)throw Error(N(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(557));e[ze]=t}else Ol(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),e=!1}else l=Tc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(Ve(t),t):(Ve(t),null);if(t.flags&128)throw Error(N(558))}return le(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Bl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(N(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(N(317));n[ze]=t}else Ol(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),n=!1}else n=Tc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ve(t),t):(Ve(t),null)}return Ve(t),t.flags&128?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Bn(t,t.updateQueue),le(t),null);case 4:return fa(),e===null&&Ys(t.stateNode.containerInfo),le(t),null;case 10:return Gt(t.type),le(t),null;case 19:if(Ne(fe),a=t.memoizedState,a===null)return le(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)Ra(a,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=xi(e),i!==null){for(t.flags|=128,Ra(a,!1),e=i.updateQueue,t.updateQueue=e,Bn(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Mf(l,e),l=l.sibling;return te(fe,fe.current&1|2),Z&&Mt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&$e()>Ei&&(t.flags|=128,n=!0,Ra(a,!1),t.lanes=4194304)}else{if(!n)if(e=xi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Bn(t,e),Ra(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Z)return le(t),null}else 2*$e()-a.renderingStartTime>Ei&&l!==536870912&&(t.flags|=128,n=!0,Ra(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=$e(),e.sibling=null,l=fe.current,te(fe,n?l&1|2:l&1),Z&&Mt(t,a.treeForkCount),e):(le(t),null);case 22:case 23:return Ve(t),ys(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?l&536870912&&!(t.flags&128)&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),l=t.updateQueue,l!==null&&Bn(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&Ne(zl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Gt(he),le(t),null;case 25:return null;case 30:return null}throw Error(N(156,t.tag))}function Ih(e,t){switch(ds(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gt(he),fa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fi(t),null;case 31:if(t.memoizedState!==null){if(Ve(t),t.alternate===null)throw Error(N(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ve(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(fe),null;case 4:return fa(),null;case 10:return Gt(t.type),null;case 22:case 23:return Ve(t),ys(),e!==null&&Ne(zl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gt(he),null;case 25:return null;default:return null}}function Md(e,t){switch(ds(t),t.tag){case 3:Gt(he),fa();break;case 26:case 27:case 5:fi(t);break;case 4:fa();break;case 31:t.memoizedState!==null&&Ve(t);break;case 13:Ve(t);break;case 19:Ne(fe);break;case 10:Gt(t.type);break;case 22:case 23:Ve(t),ys(),e!==null&&Ne(zl);break;case 24:Gt(he)}}function En(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(s){W(t,t.return,s)}}function gl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var r=l,d=s;try{d()}catch(p){W(n,r,p)}}}a=a.next}while(a!==i)}}catch(p){W(t,t.return,p)}}function _d(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Lf(t,l)}catch(a){W(e,e.return,a)}}}function wd(e,t,l){l.props=Ul(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){W(e,t,a)}}function Ia(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){W(e,t,n)}}function St(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){W(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){W(e,t,n)}else l.current=null}function Ud(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){W(e,e.return,n)}}function Rc(e,t,l){try{var a=e.stateNode;xp(a,e.type,l,t),a[Be]=t}catch(n){W(e,e.return,n)}}function Rd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yl(e.type)||e.tag===4}function Hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Du(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Ut));else if(a!==4&&(a===27&&yl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Du(e,t,l),e=e.sibling;e!==null;)Du(e,t,l),e=e.sibling}function Ti(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&yl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ti(e,t,l),e=e.sibling;e!==null;)Ti(e,t,l),e=e.sibling}function Hd(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Oe(t,a,l),t[ze]=e,t[Be]=l}catch(i){W(e,e.return,i)}}var _t=!1,ge=!1,Gc=!1,$r=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ph(e,t){if(e=e.containerInfo,Hu=Hi,e=jf(e),us(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,s=-1,r=-1,d=0,p=0,v=e,m=null;t:for(;;){for(var y;v!==l||n!==0&&v.nodeType!==3||(s=u+n),v!==i||a!==0&&v.nodeType!==3||(r=u+a),v.nodeType===3&&(u+=v.nodeValue.length),(y=v.firstChild)!==null;)m=v,v=y;for(;;){if(v===e)break t;if(m===l&&++d===n&&(s=u),m===i&&++p===a&&(r=u),(y=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=y}l=s===-1||r===-1?null:{start:s,end:r}}else l=null}l=l||{start:0,end:0}}else l=null;for(Gu={focusedElem:e,selectionRange:l},Hi=!1,xe=t;xe!==null;)if(t=xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xe=e;else for(;xe!==null;){switch(t=xe,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var j=Ul(l.type,n);e=a.getSnapshotBeforeUpdate(j,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(T){W(l,l.return,T)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Yu(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(N(163))}if(e=t.sibling,e!==null){e.return=t.return,xe=e;break}xe=t.return}}function Gd(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Dt(e,l),a&4&&En(5,l);break;case 1:if(Dt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){W(l,l.return,u)}else{var n=Ul(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){W(l,l.return,u)}}a&64&&_d(l),a&512&&Ia(l,l.return);break;case 3:if(Dt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Lf(e,t)}catch(u){W(l,l.return,u)}}break;case 27:t===null&&a&4&&Hd(l);case 26:case 5:Dt(e,l),t===null&&a&4&&Ud(l),a&512&&Ia(l,l.return);break;case 12:Dt(e,l);break;case 31:Dt(e,l),a&4&&Bd(e,l);break;case 13:Dt(e,l),a&4&&Ld(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=sp.bind(null,l),Cp(e,l))));break;case 22:if(a=l.memoizedState!==null||_t,!a){t=t!==null&&t.memoizedState!==null||ge,n=_t;var i=ge;_t=a,(ge=t)&&!i?Ot(e,l,(l.subtreeFlags&8772)!==0):Dt(e,l),_t=n,ge=i}break;case 30:break;default:Dt(e,l)}}function kd(e){var t=e.alternate;t!==null&&(e.alternate=null,kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ts(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,Ge=!1;function Ct(e,t,l){for(l=l.child;l!==null;)Yd(e,t,l),l=l.sibling}function Yd(e,t,l){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(bn,l)}catch{}switch(l.tag){case 26:ge||St(l,t),Ct(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ge||St(l,t);var a=ce,n=Ge;yl(l.type)&&(ce=l.stateNode,Ge=!1),Ct(e,t,l),ln(l.stateNode),ce=a,Ge=n;break;case 5:ge||St(l,t);case 6:if(a=ce,n=Ge,ce=null,Ct(e,t,l),ce=a,Ge=n,ce!==null)if(Ge)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(l.stateNode)}catch(i){W(l,t,i)}else try{ce.removeChild(l.stateNode)}catch(i){W(l,t,i)}break;case 18:ce!==null&&(Ge?(e=ce,so(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Sa(e)):so(ce,l.stateNode));break;case 4:a=ce,n=Ge,ce=l.stateNode.containerInfo,Ge=!0,Ct(e,t,l),ce=a,Ge=n;break;case 0:case 11:case 14:case 15:gl(2,l,t),ge||gl(4,l,t),Ct(e,t,l);break;case 1:ge||(St(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&wd(l,t,a)),Ct(e,t,l);break;case 21:Ct(e,t,l);break;case 22:ge=(a=ge)||l.memoizedState!==null,Ct(e,t,l),ge=a;break;default:Ct(e,t,l)}}function Bd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Sa(e)}catch(l){W(t,t.return,l)}}}function Ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sa(e)}catch(l){W(t,t.return,l)}}function ep(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $r),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $r),t;default:throw Error(N(435,e.tag))}}function Ln(e,t){var l=ep(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=rp.bind(null,e,a);a.then(n,n)}})}function Re(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(yl(s.type)){ce=s.stateNode,Ge=!1;break e}break;case 5:ce=s.stateNode,Ge=!1;break e;case 3:case 4:ce=s.stateNode.containerInfo,Ge=!0;break e}s=s.return}if(ce===null)throw Error(N(160));Yd(i,u,n),ce=null,Ge=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}var gt=null;function qd(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Re(t,e),He(e),a&4&&(gl(3,e,e.return),En(3,e),gl(5,e,e.return));break;case 1:Re(t,e),He(e),a&512&&(ge||l===null||St(l,l.return)),a&64&&_t&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=gt;if(Re(t,e),He(e),a&512&&(ge||l===null||St(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Nn]||i[ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Oe(i,a,l),i[ze]=e,Se(i),a=i;break e;case"link":var u=po("link","href",n).get(a+(l.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(a),Oe(i,a,l),n.head.appendChild(i);break;case"meta":if(u=po("meta","content",n).get(a+(l.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(s,1);break t}}i=n.createElement(a),Oe(i,a,l),n.head.appendChild(i);break;default:throw Error(N(468,a))}i[ze]=e,Se(i),a=i}e.stateNode=a}else yo(n,e.type,e.stateNode);else e.stateNode=ho(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?yo(n,e.type,e.stateNode):ho(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Rc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Re(t,e),He(e),a&512&&(ge||l===null||St(l,l.return)),l!==null&&a&4&&Rc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Re(t,e),He(e),a&512&&(ge||l===null||St(l,l.return)),e.flags&32){n=e.stateNode;try{ma(n,"")}catch(j){W(e,e.return,j)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Rc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Gc=!0);break;case 6:if(Re(t,e),He(e),a&4){if(e.stateNode===null)throw Error(N(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(j){W(e,e.return,j)}}break;case 3:if(ii=null,n=gt,gt=wi(t.containerInfo),Re(t,e),gt=n,He(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Sa(t.containerInfo)}catch(j){W(e,e.return,j)}Gc&&(Gc=!1,Qd(e));break;case 4:a=gt,gt=wi(e.stateNode.containerInfo),Re(t,e),He(e),gt=a;break;case 12:Re(t,e),He(e);break;case 31:Re(t,e),He(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ln(e,a)));break;case 13:Re(t,e),He(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(tc=$e()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ln(e,a)));break;case 22:n=e.memoizedState!==null;var r=l!==null&&l.memoizedState!==null,d=_t,p=ge;if(_t=d||n,ge=p||r,Re(t,e),ge=p,_t=d,He(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||r||_t||ge||Al(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){r=l=t;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=r.stateNode;var v=r.memoizedProps.style,m=v!=null&&v.hasOwnProperty("display")?v.display:null;s.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(j){W(r,r.return,j)}}}else if(t.tag===6){if(l===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(j){W(r,r.return,j)}}}else if(t.tag===18){if(l===null){r=t;try{var y=r.stateNode;n?ro(y,!0):ro(r.stateNode,!1)}catch(j){W(r,r.return,j)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Ln(e,l))));break;case 19:Re(t,e),He(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ln(e,a)));break;case 30:break;case 21:break;default:Re(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Rd(a)){l=a;break}a=a.return}if(l==null)throw Error(N(160));switch(l.tag){case 27:var n=l.stateNode,i=Hc(e);Ti(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(ma(u,""),l.flags&=-33);var s=Hc(e);Ti(e,s,u);break;case 3:case 4:var r=l.stateNode.containerInfo,d=Hc(e);Du(e,d,r);break;default:throw Error(N(161))}}catch(p){W(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Qd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Dt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Gd(e,t.alternate,t),t=t.sibling}function Al(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:gl(4,t,t.return),Al(t);break;case 1:St(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&wd(t,t.return,l),Al(t);break;case 27:ln(t.stateNode);case 26:case 5:St(t,t.return),Al(t);break;case 22:t.memoizedState===null&&Al(t);break;case 30:Al(t);break;default:Al(t)}e=e.sibling}}function Ot(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ot(n,i,l),En(4,i);break;case 1:if(Ot(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){W(a,a.return,d)}if(a=i,n=a.updateQueue,n!==null){var s=a.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Bf(r[n],s)}catch(d){W(a,a.return,d)}}l&&u&64&&_d(i),Ia(i,i.return);break;case 27:Hd(i);case 26:case 5:Ot(n,i,l),l&&a===null&&u&4&&Ud(i),Ia(i,i.return);break;case 12:Ot(n,i,l);break;case 31:Ot(n,i,l),l&&u&4&&Bd(n,i);break;case 13:Ot(n,i,l),l&&u&4&&Ld(n,i);break;case 22:i.memoizedState===null&&Ot(n,i,l),Ia(i,i.return);break;case 30:break;default:Ot(n,i,l)}t=t.sibling}}function ws(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&An(l))}function Us(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&An(e))}function mt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xd(e,t,l,a),t=t.sibling}function Xd(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:mt(e,t,l,a),n&2048&&En(9,t);break;case 1:mt(e,t,l,a);break;case 3:mt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&An(e)));break;case 12:if(n&2048){mt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){W(t,t.return,r)}}else mt(e,t,l,a);break;case 31:mt(e,t,l,a);break;case 13:mt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?mt(e,t,l,a):Pa(e,t):i._visibility&2?mt(e,t,l,a):(i._visibility|=2,Ql(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ws(u,t);break;case 24:mt(e,t,l,a),n&2048&&Us(t.alternate,t);break;default:mt(e,t,l,a)}}function Ql(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=l,r=a,d=u.flags;switch(u.tag){case 0:case 11:case 15:Ql(i,u,s,r,n),En(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&2?Ql(i,u,s,r,n):Pa(i,u):(p._visibility|=2,Ql(i,u,s,r,n)),n&&d&2048&&ws(u.alternate,u);break;case 24:Ql(i,u,s,r,n),n&&d&2048&&Us(u.alternate,u);break;default:Ql(i,u,s,r,n)}t=t.sibling}}function Pa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:Pa(l,a),n&2048&&ws(a.alternate,a);break;case 24:Pa(l,a),n&2048&&Us(a.alternate,a);break;default:Pa(l,a)}t=t.sibling}}var qa=8192;function Ll(e,t,l){if(e.subtreeFlags&qa)for(e=e.child;e!==null;)Zd(e,t,l),e=e.sibling}function Zd(e,t,l){switch(e.tag){case 26:Ll(e,t,l),e.flags&qa&&e.memoizedState!==null&&Bp(l,gt,e.memoizedState,e.memoizedProps);break;case 5:Ll(e,t,l);break;case 3:case 4:var a=gt;gt=wi(e.stateNode.containerInfo),Ll(e,t,l),gt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=qa,qa=16777216,Ll(e,t,l),qa=a):Ll(e,t,l));break;default:Ll(e,t,l)}}function Vd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ha(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];xe=a,Jd(a,e)}Vd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kd(e),e=e.sibling}function Kd(e){switch(e.tag){case 0:case 11:case 15:Ha(e),e.flags&2048&&gl(9,e,e.return);break;case 3:Ha(e);break;case 12:Ha(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ai(e)):Ha(e);break;default:Ha(e)}}function ai(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];xe=a,Jd(a,e)}Vd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:gl(8,t,t.return),ai(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,ai(t));break;default:ai(t)}e=e.sibling}}function Jd(e,t){for(;xe!==null;){var l=xe;switch(l.tag){case 0:case 11:case 15:gl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:An(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,xe=a;else e:for(l=e;xe!==null;){a=xe;var n=a.sibling,i=a.return;if(kd(a),a===l){xe=null;break e}if(n!==null){n.return=i,xe=n;break e}xe=i}}}var tp={getCacheForType:function(e){var t=De(he),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return De(he).controller.signal}},lp=typeof WeakMap=="function"?WeakMap:Map,K=0,ee=null,q=null,X=0,$=0,Ze=null,el=!1,za=!1,Rs=!1,Qt=0,oe=0,hl=0,Dl=0,Hs=0,Je=0,ya=0,en=null,ke=null,Ou=!1,tc=0,$d=0,Ei=1/0,zi=null,ul=null,ve=0,sl=null,va=null,kt=0,Mu=0,_u=null,Wd=null,tn=0,wu=null;function Ie(){return K&2&&X!==0?X&-X:G.T!==null?ks():nf()}function Fd(){if(Je===0)if(!(X&536870912)||Z){var e=wn;wn<<=1,!(wn&3932160)&&(wn=262144),Je=e}else Je=536870912;return e=et.current,e!==null&&(e.flags|=32),Je}function Ye(e,t,l){(e===ee&&($===2||$===9)||e.cancelPendingCommit!==null)&&(ba(e,0),tl(e,X,Je,!1)),Sn(e,l),(!(K&2)||e!==ee)&&(e===ee&&(!(K&2)&&(Dl|=l),oe===4&&tl(e,X,Je,!1)),Tt(e))}function Id(e,t,l){if(K&6)throw Error(N(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||xn(e,t),n=a?ip(e,t):kc(e,t,!0),i=a;do{if(n===0){za&&!a&&tl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!ap(l)){n=kc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=en;var r=s.current.memoizedState.isDehydrated;if(r&&(ba(s,u).flags|=256),u=kc(s,u,!1),u!==2){if(Rs&&!r){s.errorRecoveryDisabledLanes|=i,Dl|=i,n=4;break e}i=ke,ke=n,i!==null&&(ke===null?ke=i:ke.push.apply(ke,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){ba(e,0),tl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(N(345));case 4:if((t&4194048)!==t)break;case 6:tl(a,t,Je,!el);break e;case 2:ke=null;break;case 3:case 5:break;default:throw Error(N(329))}if((t&62914560)===t&&(n=tc+300-$e(),10<n)){if(tl(a,t,Je,!el),Xi(a,0,!0)!==0)break e;kt=t,a.timeoutHandle=vm(Wr.bind(null,a,l,ke,zi,Ou,t,Je,Dl,ya,el,i,"Throttled",-0,0),n);break e}Wr(a,l,ke,zi,Ou,t,Je,Dl,ya,el,i,null,-0,0)}}break}while(!0);Tt(e)}function Wr(e,t,l,a,n,i,u,s,r,d,p,v,m,y){if(e.timeoutHandle=-1,v=t.subtreeFlags,v&8192||(v&16785408)===16785408){v={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},Zd(t,i,v);var j=(i&62914560)===i?tc-$e():(i&4194048)===i?$d-$e():0;if(j=Lp(v,j),j!==null){kt=i,e.cancelPendingCommit=j(Ir.bind(null,e,t,i,l,a,n,u,s,r,p,v,null,m,y)),tl(e,i,u,!d);return}}Ir(e,t,i,l,a,n,u,s,r)}function ap(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!Pe(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tl(e,t,l,a){t&=~Hs,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-Fe(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&tf(e,l,t)}function lc(){return K&6?!0:(zn(0),!1)}function Gs(){if(q!==null){if($===0)var e=q.return;else e=q,Rt=Yl=null,Ns(e),ua=null,on=0,e=q;for(;e!==null;)Md(e.alternate,e),e=e.return;q=null}}function ba(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,jp(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),kt=0,Gs(),ee=e,q=l=Ht(e.current,null),X=t,$=0,Ze=null,el=!1,za=xn(e,t),Rs=!1,ya=Je=Hs=Dl=hl=oe=0,ke=en=null,Ou=!1,t&8&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-Fe(a),i=1<<n;t|=e[n],a&=~i}return Qt=t,Ji(),l}function Pd(e,t){Y=null,G.H=dn,t===Ea||t===Wi?(t=Cr(),$=3):t===hs?(t=Cr(),$=4):$=t===Ms?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ze=t,q===null&&(oe=1,ji(e,st(t,e.current)))}function em(){var e=et.current;return e===null?!0:(X&4194048)===X?ot===null:(X&62914560)===X||X&536870912?e===ot:!1}function tm(){var e=G.H;return G.H=dn,e===null?dn:e}function lm(){var e=G.A;return G.A=tp,e}function Ci(){oe=4,el||(X&4194048)!==X&&et.current!==null||(za=!0),!(hl&134217727)&&!(Dl&134217727)||ee===null||tl(ee,X,Je,!1)}function kc(e,t,l){var a=K;K|=2;var n=tm(),i=lm();(ee!==e||X!==t)&&(zi=null,ba(e,t)),t=!1;var u=oe;e:do try{if($!==0&&q!==null){var s=q,r=Ze;switch($){case 8:Gs(),u=6;break e;case 3:case 2:case 9:case 6:et.current===null&&(t=!0);var d=$;if($=0,Ze=null,la(e,s,r,d),l&&za){u=0;break e}break;default:d=$,$=0,Ze=null,la(e,s,r,d)}}np(),u=oe;break}catch(p){Pd(e,p)}while(!0);return t&&e.shellSuspendCounter++,Rt=Yl=null,K=a,G.H=n,G.A=i,q===null&&(ee=null,X=0,Ji()),u}function np(){for(;q!==null;)am(q)}function ip(e,t){var l=K;K|=2;var a=tm(),n=lm();ee!==e||X!==t?(zi=null,Ei=$e()+500,ba(e,t)):za=xn(e,t);e:do try{if($!==0&&q!==null){t=q;var i=Ze;t:switch($){case 1:$=0,Ze=null,la(e,t,i,1);break;case 2:case 9:if(zr(i)){$=0,Ze=null,Fr(t);break}t=function(){$!==2&&$!==9||ee!==e||($=7),Tt(e)},i.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:zr(i)?($=0,Ze=null,Fr(t)):($=0,Ze=null,la(e,t,i,7));break;case 5:var u=null;switch(q.tag){case 26:u=q.memoizedState;case 5:case 27:var s=q;if(u?jm(u):s.stateNode.complete){$=0,Ze=null;var r=s.sibling;if(r!==null)q=r;else{var d=s.return;d!==null?(q=d,ac(d)):q=null}break t}}$=0,Ze=null,la(e,t,i,5);break;case 6:$=0,Ze=null,la(e,t,i,6);break;case 8:Gs(),oe=6;break e;default:throw Error(N(462))}}cp();break}catch(p){Pd(e,p)}while(!0);return Rt=Yl=null,G.H=a,G.A=n,K=l,q!==null?0:(ee=null,X=0,Ji(),oe)}function cp(){for(;q!==null&&!Dg();)am(q)}function am(e){var t=Od(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?ac(e):q=t}function Fr(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Xr(l,t,t.pendingProps,t.type,void 0,X);break;case 11:t=Xr(l,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:Ns(t);default:Md(l,t),t=q=Mf(t,Qt),t=Od(l,t,Qt)}e.memoizedProps=e.pendingProps,t===null?ac(e):q=t}function la(e,t,l,a){Rt=Yl=null,Ns(t),ua=null,on=0;var n=t.return;try{if(Jh(e,n,t,l,X)){oe=1,ji(e,st(l,e.current)),q=null;return}}catch(i){if(n!==null)throw q=n,i;oe=1,ji(e,st(l,e.current)),q=null;return}t.flags&32768?(Z||a===1?e=!0:za||X&536870912?e=!1:(el=e=!0,(a===2||a===9||a===3||a===6)&&(a=et.current,a!==null&&a.tag===13&&(a.flags|=16384))),nm(t,e)):ac(t)}function ac(e){var t=e;do{if(t.flags&32768){nm(t,el);return}e=t.return;var l=Fh(t.alternate,t,Qt);if(l!==null){q=l;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);oe===0&&(oe=5)}function nm(e,t){do{var l=Ih(e.alternate,e);if(l!==null){l.flags&=32767,q=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=l}while(e!==null);oe=6,q=null}function Ir(e,t,l,a,n,i,u,s,r){e.cancelPendingCommit=null;do nc();while(ve!==0);if(K&6)throw Error(N(327));if(t!==null){if(t===e.current)throw Error(N(177));if(i=t.lanes|t.childLanes,i|=ss,Yg(e,l,i,u,s,r),e===ee&&(q=ee=null,X=0),va=t,sl=e,kt=l,Mu=i,_u=n,Wd=a,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,op(di,function(){return rm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,t.subtreeFlags&13878||a){a=G.T,G.T=null,n=J.p,J.p=2,u=K,K|=4;try{Ph(e,t,l)}finally{K=u,J.p=n,G.T=a}}ve=1,im(),cm(),um()}}function im(){if(ve===1){ve=0;var e=sl,t=va,l=(t.flags&13878)!==0;if(t.subtreeFlags&13878||l){l=G.T,G.T=null;var a=J.p;J.p=2;var n=K;K|=4;try{qd(t,e);var i=Gu,u=jf(e.containerInfo),s=i.focusedElem,r=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&Nf(s.ownerDocument.documentElement,s)){if(r!==null&&us(s)){var d=r.start,p=r.end;if(p===void 0&&(p=d),"selectionStart"in s)s.selectionStart=d,s.selectionEnd=Math.min(p,s.value.length);else{var v=s.ownerDocument||document,m=v&&v.defaultView||window;if(m.getSelection){var y=m.getSelection(),j=s.textContent.length,T=Math.min(r.start,j),_=r.end===void 0?T:Math.min(r.end,j);!y.extend&&T>_&&(u=_,_=T,T=u);var o=xr(s,T),f=xr(s,_);if(o&&f&&(y.rangeCount!==1||y.anchorNode!==o.node||y.anchorOffset!==o.offset||y.focusNode!==f.node||y.focusOffset!==f.offset)){var h=v.createRange();h.setStart(o.node,o.offset),y.removeAllRanges(),T>_?(y.addRange(h),y.extend(f.node,f.offset)):(h.setEnd(f.node,f.offset),y.addRange(h))}}}}for(v=[],y=s;y=y.parentNode;)y.nodeType===1&&v.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<v.length;s++){var b=v[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Hi=!!Hu,Gu=Hu=null}finally{K=n,J.p=a,G.T=l}}e.current=t,ve=2}}function cm(){if(ve===2){ve=0;var e=sl,t=va,l=(t.flags&8772)!==0;if(t.subtreeFlags&8772||l){l=G.T,G.T=null;var a=J.p;J.p=2;var n=K;K|=4;try{Gd(e,t.alternate,t)}finally{K=n,J.p=a,G.T=l}}ve=3}}function um(){if(ve===4||ve===3){ve=0,Og();var e=sl,t=va,l=kt,a=Wd;t.subtreeFlags&10256||t.flags&10256?ve=5:(ve=0,va=sl=null,sm(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ul=null),es(l),t=t.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(bn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=G.T,n=J.p,J.p=2,G.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var s=a[u];i(s.value,{componentStack:s.stack})}}finally{G.T=t,J.p=n}}kt&3&&nc(),Tt(e),n=e.pendingLanes,l&261930&&n&42?e===wu?tn++:(tn=0,wu=e):tn=0,zn(0)}}function sm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,An(t)))}function nc(){return im(),cm(),um(),rm()}function rm(){if(ve!==5)return!1;var e=sl,t=Mu;Mu=0;var l=es(kt),a=G.T,n=J.p;try{J.p=32>l?32:l,G.T=null,l=_u,_u=null;var i=sl,u=kt;if(ve=0,va=sl=null,kt=0,K&6)throw Error(N(331));var s=K;if(K|=4,Kd(i.current),Xd(i,i.current,u,l),K=s,zn(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(bn,i)}catch{}return!0}finally{J.p=n,G.T=a,sm(e,t)}}function Pr(e,t,l){t=st(l,t),t=Eu(e.stateNode,t,2),e=cl(e,t,2),e!==null&&(Sn(e,2),Tt(e))}function W(e,t,l){if(e.tag===3)Pr(e,e,l);else for(;t!==null;){if(t.tag===3){Pr(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ul===null||!ul.has(a))){e=st(l,e),l=Ad(2),a=cl(t,l,2),a!==null&&(Td(l,a,t,e),Sn(a,2),Tt(a));break}}t=t.return}}function Yc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new lp;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Rs=!0,n.add(l),e=up.bind(null,e,t,l),t.then(e,e))}function up(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ee===e&&(X&l)===l&&(oe===4||oe===3&&(X&62914560)===X&&300>$e()-tc?!(K&2)&&ba(e,0):Hs|=l,ya===X&&(ya=0)),Tt(e)}function om(e,t){t===0&&(t=ef()),e=kl(e,t),e!==null&&(Sn(e,t),Tt(e))}function sp(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),om(e,l)}function rp(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(N(314))}a!==null&&a.delete(t),om(e,l)}function op(e,t){return Iu(e,t)}var Di=null,Xl=null,Uu=!1,Oi=!1,Bc=!1,ll=0;function Tt(e){e!==Xl&&e.next===null&&(Xl===null?Di=Xl=e:Xl=Xl.next=e),Oi=!0,Uu||(Uu=!0,dp())}function zn(e,t){if(!Bc&&Oi){Bc=!0;do for(var l=!1,a=Di;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Fe(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,eo(a,i))}else i=X,i=Xi(a,a===ee?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(i&3)||xn(a,i)||(l=!0,eo(a,i));a=a.next}while(l);Bc=!1}}function fp(){fm()}function fm(){Oi=Uu=!1;var e=0;ll!==0&&Np()&&(e=ll);for(var t=$e(),l=null,a=Di;a!==null;){var n=a.next,i=dm(a,t);i===0?(a.next=null,l===null?Di=n:l.next=n,n===null&&(Xl=l)):(l=a,(e!==0||i&3)&&(Oi=!0)),a=n}ve!==0&&ve!==5||zn(e),ll!==0&&(ll=0)}function dm(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Fe(i),s=1<<u,r=n[u];r===-1?(!(s&l)||s&a)&&(n[u]=kg(s,t)):r<=t&&(e.expiredLanes|=s),i&=~s}if(t=ee,l=X,l=Xi(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&gc(a),e.callbackNode=null,e.callbackPriority=0;if(!(l&3)||xn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&gc(a),es(l)){case 2:case 8:l=Io;break;case 32:l=di;break;case 268435456:l=Po;break;default:l=di}return a=mm.bind(null,e),l=Iu(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&gc(a),e.callbackPriority=2,e.callbackNode=null,2}function mm(e,t){if(ve!==0&&ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(nc()&&e.callbackNode!==l)return null;var a=X;return a=Xi(e,e===ee?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Id(e,a,t),dm(e,$e()),e.callbackNode!=null&&e.callbackNode===l?mm.bind(null,e):null)}function eo(e,t){if(nc())return null;Id(e,t,!0)}function dp(){Ap(function(){K&6?Iu(Fo,fp):fm()})}function ks(){if(ll===0){var e=ga;e===0&&(e=_n,_n<<=1,!(_n&261888)&&(_n=256)),ll=e}return ll}function to(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jn(""+e)}function lo(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function mp(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=to((n[Be]||null).action),u=a.submitter;u&&(t=(t=u[Be]||null)?to(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Zi("action","action",null,a,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ll!==0){var r=u?lo(n,u):new FormData(n);Au(l,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(s.preventDefault(),r=u?lo(n,u):new FormData(n),Au(l,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Lc=0;Lc<du.length;Lc++){var qc=du[Lc],gp=qc.toLowerCase(),hp=qc[0].toUpperCase()+qc.slice(1);pt(gp,"on"+hp)}pt(Tf,"onAnimationEnd");pt(Ef,"onAnimationIteration");pt(zf,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Mh,"onTransitionRun");pt(_h,"onTransitionStart");pt(wh,"onTransitionCancel");pt(Cf,"onTransitionEnd");da("onMouseEnter",["mouseout","mouseover"]);da("onMouseLeave",["mouseout","mouseover"]);da("onPointerEnter",["pointerout","pointerover"]);da("onPointerLeave",["pointerout","pointerover"]);Rl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rl("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function gm(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var s=a[u],r=s.instance,d=s.currentTarget;if(s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(p){gi(p)}n.currentTarget=null,i=r}else for(u=0;u<a.length;u++){if(s=a[u],r=s.instance,d=s.currentTarget,s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(p){gi(p)}n.currentTarget=null,i=r}}}}function L(e,t){var l=t[nu];l===void 0&&(l=t[nu]=new Set);var a=e+"__bubble";l.has(a)||(hm(t,e,2,!1),l.add(a))}function Qc(e,t,l){var a=0;t&&(a|=4),hm(l,e,a,t)}var qn="_reactListening"+Math.random().toString(36).slice(2);function Ys(e){if(!e[qn]){e[qn]=!0,cf.forEach(function(l){l!=="selectionchange"&&(pp.has(l)||Qc(l,!1,e),Qc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qn]||(t[qn]=!0,Qc("selectionchange",!1,t))}}function hm(e,t,l,a){switch(Cm(t)){case 2:var n=Xp;break;case 8:n=Zp;break;default:n=Qs}l=n.bind(null,t,l,e),n=void 0,!ru||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Xc(e,t,l,a,n){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var s=a.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=a.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Kl(s),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){a=i=u;continue e}s=s.parentNode}}a=a.return}gf(function(){var d=i,p=as(l),v=[];e:{var m=Df.get(e);if(m!==void 0){var y=Zi,j=e;switch(e){case"keypress":if(Wn(l)===0)break e;case"keydown":case"keyup":y=rh;break;case"focusin":j="focus",y=bc;break;case"focusout":j="blur",y=bc;break;case"beforeblur":case"afterblur":y=bc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=or;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=dh;break;case Tf:case Ef:case zf:y=eh;break;case Cf:y=gh;break;case"scroll":case"scrollend":y=$g;break;case"wheel":y=ph;break;case"copy":case"cut":case"paste":y=lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=dr;break;case"toggle":case"beforetoggle":y=vh}var T=(t&4)!==0,_=!T&&(e==="scroll"||e==="scrollend"),o=T?m!==null?m+"Capture":null:m;T=[];for(var f=d,h;f!==null;){var b=f;if(h=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||h===null||o===null||(b=nn(f,o),b!=null&&T.push(gn(f,b,h))),_)break;f=f.return}0<T.length&&(m=new y(m,j,null,l,p),v.push({event:m,listeners:T}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&l!==su&&(j=l.relatedTarget||l.fromElement)&&(Kl(j)||j[ja]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(j=l.relatedTarget||l.toElement,y=d,j=j?Kl(j):null,j!==null&&(_=vn(j),T=j.tag,j!==_||T!==5&&T!==27&&T!==6)&&(j=null)):(y=null,j=d),y!==j)){if(T=or,b="onMouseLeave",o="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(T=dr,b="onPointerLeave",o="onPointerEnter",f="pointer"),_=y==null?m:Ba(y),h=j==null?m:Ba(j),m=new T(b,f+"leave",y,l,p),m.target=_,m.relatedTarget=h,b=null,Kl(p)===d&&(T=new T(o,f+"enter",j,l,p),T.target=h,T.relatedTarget=_,b=T),_=b,y&&j)t:{for(T=yp,o=y,f=j,h=0,b=o;b;b=T(b))h++;b=0;for(var D=f;D;D=T(D))b++;for(;0<h-b;)o=T(o),h--;for(;0<b-h;)f=T(f),b--;for(;h--;){if(o===f||f!==null&&o===f.alternate){T=o;break t}o=T(o),f=T(f)}T=null}else T=null;y!==null&&ao(v,m,y,T,!1),j!==null&&_!==null&&ao(v,_,j,T,!0)}}e:{if(m=d?Ba(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var E=pr;else if(hr(m))if(xf)E=Ch;else{E=Eh;var g=Th}else y=m.nodeName,!y||y.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&ls(d.elementType)&&(E=pr):E=zh;if(E&&(E=E(e,d))){bf(v,E,l,p);break e}g&&g(e,m,d),e==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&uu(m,"number",m.value)}switch(g=d?Ba(d):window,e){case"focusin":(hr(g)||g.contentEditable==="true")&&(Wl=g,ou=d,Va=null);break;case"focusout":Va=ou=Wl=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Sr(v,l,p);break;case"selectionchange":if(Oh)break;case"keydown":case"keyup":Sr(v,l,p)}var A;if(cs)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else $l?yf(e,l)&&(O="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(O="onCompositionStart");O&&(pf&&l.locale!=="ko"&&($l||O!=="onCompositionStart"?O==="onCompositionEnd"&&$l&&(A=hf()):(Pt=p,ns="value"in Pt?Pt.value:Pt.textContent,$l=!0)),g=Mi(d,O),0<g.length&&(O=new fr(O,e,null,l,p),v.push({event:O,listeners:g}),A?O.data=A:(A=vf(l),A!==null&&(O.data=A)))),(A=xh?Sh(e,l):Nh(e,l))&&(O=Mi(d,"onBeforeInput"),0<O.length&&(g=new fr("onBeforeInput","beforeinput",null,l,p),v.push({event:g,listeners:O}),g.data=A)),mp(v,e,d,l,p)}gm(v,t)})}function gn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Mi(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=nn(e,l),n!=null&&a.unshift(gn(e,n,i)),n=nn(e,t),n!=null&&a.push(gn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function yp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ao(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var s=l,r=s.alternate,d=s.stateNode;if(s=s.tag,r!==null&&r===a)break;s!==5&&s!==26&&s!==27||d===null||(r=d,n?(d=nn(l,i),d!=null&&u.unshift(gn(l,d,r))):n||(d=nn(l,i),d!=null&&u.push(gn(l,d,r)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var vp=/\r\n?/g,bp=/\u0000|\uFFFD/g;function no(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(bp,"")}function pm(e,t){return t=no(t),no(e)===t}function F(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ma(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ma(e,""+a);break;case"className":Rn(e,"class",a);break;case"tabIndex":Rn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(e,l,a);break;case"style":mf(e,a,i);break;case"data":if(t!=="object"){Rn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Jn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&F(e,t,"name",n.name,n,null),F(e,t,"formEncType",n.formEncType,n,null),F(e,t,"formMethod",n.formMethod,n,null),F(e,t,"formTarget",n.formTarget,n,null)):(F(e,t,"encType",n.encType,n,null),F(e,t,"method",n.method,n,null),F(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Jn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Ut);break;case"onScroll":a!=null&&L("scroll",e);break;case"onScrollEnd":a!=null&&L("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(N(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(N(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Jn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":L("beforetoggle",e),L("toggle",e),Kn(e,"popover",a);break;case"xlinkActuate":Et(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Et(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Et(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Et(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Et(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Et(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Et(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Et(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Et(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Kn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Kg.get(l)||l,Kn(e,l,a))}}function Ru(e,t,l,a,n,i){switch(l){case"style":mf(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(N(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(N(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ma(e,a):(typeof a=="number"||typeof a=="bigint")&&ma(e,""+a);break;case"onScroll":a!=null&&L("scroll",e);break;case"onScrollEnd":a!=null&&L("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[Be]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Kn(e,l,a)}}}function Oe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":L("error",e),L("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(N(137,t));default:F(e,t,i,u,l,null)}}n&&F(e,t,"srcSet",l.srcSet,l,null),a&&F(e,t,"src",l.src,l,null);return;case"input":L("invalid",e);var s=i=u=n=null,r=null,d=null;for(a in l)if(l.hasOwnProperty(a)){var p=l[a];if(p!=null)switch(a){case"name":n=p;break;case"type":u=p;break;case"checked":r=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(N(137,t));break;default:F(e,t,a,p,l,null)}}of(e,i,s,r,d,u,n,!1);return;case"select":L("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(s=l[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":a=s;default:F(e,t,n,s,l,null)}t=i,l=u,e.multiple=!!a,t!=null?na(e,!!a,t,!1):l!=null&&na(e,!!a,l,!0);return;case"textarea":L("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":a=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(N(91));break;default:F(e,t,u,s,l,null)}df(e,a,n,i);return;case"option":for(r in l)if(l.hasOwnProperty(r)&&(a=l[r],a!=null))switch(r){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:F(e,t,r,a,l,null)}return;case"dialog":L("beforetoggle",e),L("toggle",e),L("cancel",e),L("close",e);break;case"iframe":case"object":L("load",e);break;case"video":case"audio":for(a=0;a<mn.length;a++)L(mn[a],e);break;case"image":L("error",e),L("load",e);break;case"details":L("toggle",e);break;case"embed":case"source":case"link":L("error",e),L("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in l)if(l.hasOwnProperty(d)&&(a=l[d],a!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(N(137,t));default:F(e,t,d,a,l,null)}return;default:if(ls(t)){for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!==void 0&&Ru(e,t,p,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&F(e,t,s,a,l,null))}function xp(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,r=null,d=null,p=null;for(y in l){var v=l[y];if(l.hasOwnProperty(y)&&v!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":r=v;default:a.hasOwnProperty(y)||F(e,t,y,null,a,v)}}for(var m in a){var y=a[m];if(v=l[m],a.hasOwnProperty(m)&&(y!=null||v!=null))switch(m){case"type":i=y;break;case"name":n=y;break;case"checked":d=y;break;case"defaultChecked":p=y;break;case"value":u=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(N(137,t));break;default:y!==v&&F(e,t,m,y,a,v)}}cu(e,u,s,r,d,p,i,n);return;case"select":y=u=s=m=null;for(i in l)if(r=l[i],l.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":y=r;default:a.hasOwnProperty(i)||F(e,t,i,null,a,r)}for(n in a)if(i=a[n],r=l[n],a.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":m=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==r&&F(e,t,n,i,a,r)}t=s,l=u,a=y,m!=null?na(e,!!l,m,!1):!!a!=!!l&&(t!=null?na(e,!!l,t,!0):na(e,!!l,l?[]:"",!1));return;case"textarea":y=m=null;for(s in l)if(n=l[s],l.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:F(e,t,s,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":m=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(N(91));break;default:n!==i&&F(e,t,u,n,a,i)}ff(e,m,y);return;case"option":for(var j in l)if(m=l[j],l.hasOwnProperty(j)&&m!=null&&!a.hasOwnProperty(j))switch(j){case"selected":e.selected=!1;break;default:F(e,t,j,null,a,m)}for(r in a)if(m=a[r],y=l[r],a.hasOwnProperty(r)&&m!==y&&(m!=null||y!=null))switch(r){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:F(e,t,r,m,a,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var T in l)m=l[T],l.hasOwnProperty(T)&&m!=null&&!a.hasOwnProperty(T)&&F(e,t,T,null,a,m);for(d in a)if(m=a[d],y=l[d],a.hasOwnProperty(d)&&m!==y&&(m!=null||y!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(N(137,t));break;default:F(e,t,d,m,a,y)}return;default:if(ls(t)){for(var _ in l)m=l[_],l.hasOwnProperty(_)&&m!==void 0&&!a.hasOwnProperty(_)&&Ru(e,t,_,void 0,a,m);for(p in a)m=a[p],y=l[p],!a.hasOwnProperty(p)||m===y||m===void 0&&y===void 0||Ru(e,t,p,m,a,y);return}}for(var o in l)m=l[o],l.hasOwnProperty(o)&&m!=null&&!a.hasOwnProperty(o)&&F(e,t,o,null,a,m);for(v in a)m=a[v],y=l[v],!a.hasOwnProperty(v)||m===y||m==null&&y==null||F(e,t,v,m,a,y)}function io(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&io(u)){for(u=0,s=n.responseEnd,a+=1;a<l.length;a++){var r=l[a],d=r.startTime;if(d>s)break;var p=r.transferSize,v=r.initiatorType;p&&io(v)&&(r=r.responseEnd,u+=p*(r<s?1:(s-d)/(r-d)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hu=null,Gu=null;function _i(e){return e.nodeType===9?e:e.ownerDocument}function co(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ym(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ku(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zc=null;function Np(){var e=window.event;return e&&e.type==="popstate"?e===Zc?!1:(Zc=e,!0):(Zc=null,!1)}var vm=typeof setTimeout=="function"?setTimeout:void 0,jp=typeof clearTimeout=="function"?clearTimeout:void 0,uo=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof uo<"u"?function(e){return uo.resolve(null).then(e).catch(Tp)}:vm;function Tp(e){setTimeout(function(){throw e})}function yl(e){return e==="head"}function so(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Sa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")ln(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,ln(l);for(var i=l.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Nn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&ln(e.ownerDocument.body);l=n}while(l);Sa(t)}function ro(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Yu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Yu(l),ts(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Ep(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Nn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ft(e.nextSibling),e===null)break}return null}function zp(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=ft(e.nextSibling),e===null))return null;return e}function bm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ft(e.nextSibling),e===null))return null;return e}function Bu(e){return e.data==="$?"||e.data==="$~"}function Lu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cp(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var qu=null;function oo(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return ft(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function fo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function xm(e,t,l){switch(t=_i(l),e){case"html":if(e=t.documentElement,!e)throw Error(N(452));return e;case"head":if(e=t.head,!e)throw Error(N(453));return e;case"body":if(e=t.body,!e)throw Error(N(454));return e;default:throw Error(N(451))}}function ln(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ts(e)}var dt=new Map,mo=new Set;function wi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xt=J.d;J.d={f:Dp,r:Op,D:Mp,C:_p,L:wp,m:Up,X:Hp,S:Rp,M:Gp};function Dp(){var e=Xt.f(),t=lc();return e||t}function Op(e){var t=Aa(e);t!==null&&t.tag===5&&t.type==="form"?md(t):Xt.r(e)}var Ca=typeof document>"u"?null:document;function Sm(e,t,l){var a=Ca;if(a&&typeof t=="string"&&t){var n=ut(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),mo.has(n)||(mo.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Oe(t,"link",e),Se(t),a.head.appendChild(t)))}}function Mp(e){Xt.D(e),Sm("dns-prefetch",e,null)}function _p(e,t){Xt.C(e,t),Sm("preconnect",e,t)}function wp(e,t,l){Xt.L(e,t,l);var a=Ca;if(a&&e&&t){var n='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ut(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ut(l.imageSizes)+'"]')):n+='[href="'+ut(e)+'"]';var i=n;switch(t){case"style":i=xa(e);break;case"script":i=Da(e)}dt.has(i)||(e=ie({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),dt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Cn(i))||t==="script"&&a.querySelector(Dn(i))||(t=a.createElement("link"),Oe(t,"link",e),Se(t),a.head.appendChild(t)))}}function Up(e,t){Xt.m(e,t);var l=Ca;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ut(a)+'"][href="'+ut(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Da(e)}if(!dt.has(i)&&(e=ie({rel:"modulepreload",href:e},t),dt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Dn(i)))return}a=l.createElement("link"),Oe(a,"link",e),Se(a),l.head.appendChild(a)}}}function Rp(e,t,l){Xt.S(e,t,l);var a=Ca;if(a&&e){var n=aa(a).hoistableStyles,i=xa(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=a.querySelector(Cn(i)))s.loading=5;else{e=ie({rel:"stylesheet",href:e,"data-precedence":t},l),(l=dt.get(i))&&Bs(e,l);var r=u=a.createElement("link");Se(r),Oe(r,"link",e),r._p=new Promise(function(d,p){r.onload=d,r.onerror=p}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,ni(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function Hp(e,t){Xt.X(e,t);var l=Ca;if(l&&e){var a=aa(l).hoistableScripts,n=Da(e),i=a.get(n);i||(i=l.querySelector(Dn(n)),i||(e=ie({src:e,async:!0},t),(t=dt.get(n))&&Ls(e,t),i=l.createElement("script"),Se(i),Oe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Gp(e,t){Xt.M(e,t);var l=Ca;if(l&&e){var a=aa(l).hoistableScripts,n=Da(e),i=a.get(n);i||(i=l.querySelector(Dn(n)),i||(e=ie({src:e,async:!0,type:"module"},t),(t=dt.get(n))&&Ls(e,t),i=l.createElement("script"),Se(i),Oe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function go(e,t,l,a){var n=(n=al.current)?wi(n):null;if(!n)throw Error(N(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=xa(l.href),l=aa(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=xa(l.href);var i=aa(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Cn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),dt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},dt.set(e,l),i||kp(n,e,l,u.state))),t&&a===null)throw Error(N(528,""));return u}if(t&&a!==null)throw Error(N(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Da(l),l=aa(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(N(444,e))}}function xa(e){return'href="'+ut(e)+'"'}function Cn(e){return'link[rel="stylesheet"]['+e+"]"}function Nm(e){return ie({},e,{"data-precedence":e.precedence,precedence:null})}function kp(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Oe(t,"link",l),Se(t),e.head.appendChild(t))}function Da(e){return'[src="'+ut(e)+'"]'}function Dn(e){return"script[async]"+e}function ho(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ut(l.href)+'"]');if(a)return t.instance=a,Se(a),a;var n=ie({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Se(a),Oe(a,"style",n),ni(a,l.precedence,e),t.instance=a;case"stylesheet":n=xa(l.href);var i=e.querySelector(Cn(n));if(i)return t.state.loading|=4,t.instance=i,Se(i),i;a=Nm(l),(n=dt.get(n))&&Bs(a,n),i=(e.ownerDocument||e).createElement("link"),Se(i);var u=i;return u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Oe(i,"link",a),t.state.loading|=4,ni(i,l.precedence,e),t.instance=i;case"script":return i=Da(l.src),(n=e.querySelector(Dn(i)))?(t.instance=n,Se(n),n):(a=l,(n=dt.get(i))&&(a=ie({},l),Ls(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Se(n),Oe(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(N(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,ni(a,l.precedence,e));return t.instance}function ni(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var s=a[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Bs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ls(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ii=null;function po(e,t,l){if(ii===null){var a=new Map,n=ii=new Map;n.set(l,a)}else n=ii,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Nn]||i[ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=a.get(u);s?s.push(i):a.set(u,[i])}}return a}function yo(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Yp(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jm(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Bp(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var n=xa(a.href),i=t.querySelector(Cn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ui.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Se(i);return}i=t.ownerDocument||t,a=Nm(a),(n=dt.get(n))&&Bs(a,n),i=i.createElement("link"),Se(i);var u=i;u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Oe(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&!(l.state.loading&3)&&(e.count++,l=Ui.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Vc=0;function Lp(e,t){return e.stylesheets&&e.count===0&&ci(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&ci(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Vc===0&&(Vc=62500*Sp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ci(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Vc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ci(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ri=null;function ci(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ri=new Map,t.forEach(qp,e),Ri=null,Ui.call(e))}function qp(e,t){if(!(t.state.loading&4)){var l=Ri.get(e);if(l)var a=l.get(null);else{l=new Map,Ri.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Ui.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var hn={$$typeof:wt,Provider:null,Consumer:null,_currentValue:Tl,_currentValue2:Tl,_threadCount:0};function Qp(e,t,l,a,n,i,u,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.hiddenUpdates=hc(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Am(e,t,l,a,n,i,u,s,r,d,p,v){return e=new Qp(e,t,l,u,r,d,p,v,s),t=1,i===!0&&(t|=24),i=Ke(3,null,null,t),e.current=i,i.stateNode=e,t=ms(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},ps(i),e}function Tm(e){return e?(e=Pl,e):Pl}function Em(e,t,l,a,n,i){n=Tm(n),a.context===null?a.context=n:a.pendingContext=n,a=il(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=cl(e,a,t),l!==null&&(Ye(l,e,t),Ja(l,e,t))}function vo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function qs(e,t){vo(e,t),(e=e.alternate)&&vo(e,t)}function zm(e){if(e.tag===13||e.tag===31){var t=kl(e,67108864);t!==null&&Ye(t,e,67108864),qs(e,67108864)}}function bo(e){if(e.tag===13||e.tag===31){var t=Ie();t=Pu(t);var l=kl(e,t);l!==null&&Ye(l,e,t),qs(e,t)}}var Hi=!0;function Xp(e,t,l,a){var n=G.T;G.T=null;var i=J.p;try{J.p=2,Qs(e,t,l,a)}finally{J.p=i,G.T=n}}function Zp(e,t,l,a){var n=G.T;G.T=null;var i=J.p;try{J.p=8,Qs(e,t,l,a)}finally{J.p=i,G.T=n}}function Qs(e,t,l,a){if(Hi){var n=Qu(a);if(n===null)Xc(e,t,a,Gi,l),xo(e,a);else if(Kp(n,e,t,l,a))a.stopPropagation();else if(xo(e,a),t&4&&-1<Vp.indexOf(e)){for(;n!==null;){var i=Aa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Nl(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var r=1<<31-Fe(u);s.entanglements[1]|=r,u&=~r}Tt(i),!(K&6)&&(Ei=$e()+500,zn(0))}}break;case 31:case 13:s=kl(i,2),s!==null&&Ye(s,i,2),lc(),qs(i,2)}if(i=Qu(a),i===null&&Xc(e,t,a,Gi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Xc(e,t,a,null,l)}}function Qu(e){return e=as(e),Xs(e)}var Gi=null;function Xs(e){if(Gi=null,e=Kl(e),e!==null){var t=vn(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=Vo(t),e!==null)return e;e=null}else if(l===31){if(e=Ko(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gi=e,null}function Cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mg()){case Fo:return 2;case Io:return 8;case di:case _g:return 32;case Po:return 268435456;default:return 32}default:return 32}}var Xu=!1,rl=null,ol=null,fl=null,pn=new Map,yn=new Map,Ft=[],Vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xo(e,t){switch(e){case"focusin":case"focusout":rl=null;break;case"dragenter":case"dragleave":ol=null;break;case"mouseover":case"mouseout":fl=null;break;case"pointerover":case"pointerout":pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(t.pointerId)}}function Ga(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Aa(t),t!==null&&zm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Kp(e,t,l,a,n){switch(t){case"focusin":return rl=Ga(rl,e,t,l,a,n),!0;case"dragenter":return ol=Ga(ol,e,t,l,a,n),!0;case"mouseover":return fl=Ga(fl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return pn.set(i,Ga(pn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,yn.set(i,Ga(yn.get(i)||null,e,t,l,a,n)),!0}return!1}function Dm(e){var t=Kl(e.target);if(t!==null){var l=vn(t);if(l!==null){if(t=l.tag,t===13){if(t=Vo(l),t!==null){e.blockedOn=t,ar(e.priority,function(){bo(l)});return}}else if(t===31){if(t=Ko(l),t!==null){e.blockedOn=t,ar(e.priority,function(){bo(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Qu(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);su=a,l.target.dispatchEvent(a),su=null}else return t=Aa(l),t!==null&&zm(t),e.blockedOn=l,!1;t.shift()}return!0}function So(e,t,l){ui(e)&&l.delete(t)}function Jp(){Xu=!1,rl!==null&&ui(rl)&&(rl=null),ol!==null&&ui(ol)&&(ol=null),fl!==null&&ui(fl)&&(fl=null),pn.forEach(So),yn.forEach(So)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Xu||(Xu=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Jp)))}var Xn=null;function No(e){Xn!==e&&(Xn=e,be.unstable_scheduleCallback(be.unstable_NormalPriority,function(){Xn===e&&(Xn=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Xs(a||l)===null)continue;break}var i=Aa(l);i!==null&&(e.splice(t,3),t-=3,Au(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Sa(e){function t(r){return Qn(r,e)}rl!==null&&Qn(rl,e),ol!==null&&Qn(ol,e),fl!==null&&Qn(fl,e),pn.forEach(t),yn.forEach(t);for(var l=0;l<Ft.length;l++){var a=Ft[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ft.length&&(l=Ft[0],l.blockedOn===null);)Dm(l),l.blockedOn===null&&Ft.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Be]||null;if(typeof i=="function")u||No(l);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Be]||null)s=u.formAction;else if(Xs(n)!==null)continue}else s=u.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),No(l)}}}function Om(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Zs(e){this._internalRoot=e}ic.prototype.render=Zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));var l=t.current,a=Ie();Em(l,a,e,t,null,null)};ic.prototype.unmount=Zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Em(e.current,2,null,e,null,null),lc(),t[ja]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var t=nf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Ft.length&&t!==0&&t<Ft[l].priority;l++);Ft.splice(l,0,e),l===0&&Dm(e)}};var jo=Xo.version;if(jo!=="19.2.4")throw Error(N(527,jo,"19.2.4"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Ag(t),e=e!==null?Jo(e):null,e=e===null?null:e.stateNode,e};var $p={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zn.isDisabled&&Zn.supportsFiber)try{bn=Zn.inject($p),We=Zn}catch{}}qi.createRoot=function(e,t){if(!Zo(e))throw Error(N(299));var l=!1,a="",n=Sd,i=Nd,u=jd;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Am(e,1,!1,null,null,l,a,null,n,i,u,Om),e[ja]=t.current,Ys(e),new Zs(t)};qi.hydrateRoot=function(e,t,l){if(!Zo(e))throw Error(N(299));var a=!1,n="",i=Sd,u=Nd,s=jd,r=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),t=Am(e,1,!0,t,l??null,a,n,r,i,u,s,Om),t.context=Tm(null),l=t.current,a=Ie(),a=Pu(a),n=il(a),n.callback=null,cl(l,n,a),l=a,t.current.lanes=l,Sn(t,l),Tt(t),e[ja]=t.current,Ys(e),new ic(t)};qi.version="19.2.4";function Mm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mm)}catch(e){console.error(e)}}Mm(),ko.exports=qi;var Wp=ko.exports;const jt={ACTIONABLE_NOW:"Now",CANDIDATES:"Review",AMBIGUITY:"Clarify",WAITING:"Waiting",TUNING:"Tuning"},oa={CRITICAL:"Critical",HIGH:"High",MEDIUM:"Medium",LOW:"Low"},ki={DATE_EXACT:"On Date",DATE_WINDOW:"Date Range",EMAIL_REPLY:"Email Reply",MANUAL_CHECK:"Manual Check",WEB_CONDITION:"Web Monitor"},Fp="/api";async function H(e,t){const l=await fetch(`${Fp}${e}`,{headers:{"Content-Type":"application/json",...t==null?void 0:t.headers},...t});if(!l.ok){const a=await l.json().catch(()=>({message:"Request failed"}));throw new Error(a.message||`HTTP ${l.status}`)}return l.json()}async function Ip(){return H("/containers/counts")}async function _m(e){const t=new URLSearchParams;e&&t.set("container",e);const l=t.toString();return H(`/actions${l?`?${l}`:""}`)}async function Pp(e){return H(`/actions/${e}`)}async function Vn(e,t){return H(`/actions/${e}`,{method:"PUT",body:JSON.stringify(t)})}async function ey(e){return H(`/actions/${e}/complete`,{method:"POST"})}async function Ao(e,t){return H(`/actions/${e}/move`,{method:"POST",body:JSON.stringify({container:t})})}async function wm(e){await H(`/actions/${e}`,{method:"DELETE"})}async function ty(e){await H(`/actions/${e}/purge`,{method:"DELETE"})}async function ly(e){await H(`/actions/${e}/acknowledge`,{method:"POST"})}async function Um(){return H("/system/health")}async function ay(){return H("/system/run-followups",{method:"POST"})}async function ny(){return H("/system/run-triggers",{method:"POST"})}async function iy(e){return H("/parse/preview",{method:"POST",body:JSON.stringify({text:e})})}async function cy(e){return H("/parse/confirm",{method:"POST",body:JSON.stringify(e)})}async function uy(e,t){return H("/parse/clarify",{method:"POST",body:JSON.stringify({rawInput:e,answers:t})})}async function sy(e){return H(`/parse/${e}/reparse`,{method:"POST"})}async function ry(){return H("/sources/gmail/status")}async function oy(){return H("/sources/gmail/auth-url")}async function fy(){await H("/sources/gmail/disconnect",{method:"POST"})}async function dy(){return H("/sources/gmail/scan",{method:"POST"})}async function my(e){const t=new URLSearchParams;e!=null&&e.actionId&&t.set("actionId",e.actionId.toString()),e!=null&&e.pending&&t.set("pending","true");const l=t.toString();return H(`/triggers${l?`?${l}`:""}`)}async function Rm(e){return H("/triggers",{method:"POST",body:JSON.stringify(e)})}async function gy(e){await H(`/triggers/${e}`,{method:"DELETE"})}async function hy(e){return H(`/triggers/${e}/fire`,{method:"POST"})}async function py(e,t){return H(`/triggers/${e}/check`,{method:"POST",body:JSON.stringify({conditionMet:t})})}async function yy(e){const t=new URLSearchParams;e.q&&t.set("q",e.q),e.container&&t.set("container",e.container),e.urgency&&t.set("urgency",e.urgency),e.includeArchived&&t.set("includeArchived","true"),e.archiveOnly&&t.set("archiveOnly","true"),e.limit&&t.set("limit",e.limit.toString()),e.offset&&t.set("offset",e.offset.toString());const l=t.toString();return H(`/search${l?`?${l}`:""}`)}async function vy(){return H("/groups")}async function To(e){return H("/groups",{method:"POST",body:JSON.stringify(e)})}async function by(e){return H(`/groups/${e}`,{method:"PUT",body:JSON.stringify({archivedAt:new Date().toISOString()})})}async function xy(e){await H(`/groups/${e}`,{method:"DELETE"})}async function Sy(e,t){return H(`/groups/${e}/actions`,{method:"POST",body:JSON.stringify({actionIds:t})})}async function Eo(e,t){await H(`/groups/${e}/actions/${t}`,{method:"DELETE"})}async function Hm(){return H("/groups/suggestions")}async function Ny(e,t){return H("/groups/merge",{method:"POST",body:JSON.stringify({primaryId:e,secondaryId:t})})}async function jy(){return H("/tuning")}async function Ay(e){return H(`/tuning/${e}/activate`,{method:"POST"})}async function Ty(e,t,l=!1){return H(`/tuning/${e}/reject`,{method:"POST",body:JSON.stringify({feedback:t,dontAskAgain:l})})}async function Ey(e){return H(`/tuning/${e}/ask-less`,{method:"POST"})}async function zy(e){await H(`/tuning/${e}`,{method:"DELETE"})}async function Cy(){return H("/tuning/stats")}async function Dy(){return H("/notifications/vapid-public-key")}async function Oy(e,t,l){await H("/notifications/subscribe",{method:"POST",body:JSON.stringify({endpoint:e,p256dh:t,auth:l})})}async function My(e){await H("/notifications/unsubscribe",{method:"DELETE",body:JSON.stringify({endpoint:e})})}async function _y(e,t,l){return H("/tuning/feedback",{method:"POST",body:JSON.stringify({actionId:e,feedbackType:t,correction:l})})}async function wy(){return H("/containers/flag-counts")}async function Uy(e){return H(`/actions?${e}=true`)}async function Ry(e){return H("/actions/bulk/complete",{method:"POST",body:JSON.stringify({ids:e})})}async function Hy(e){return H("/actions/bulk/delete",{method:"POST",body:JSON.stringify({ids:e})})}async function Gy(e,t){return H("/actions/bulk/move",{method:"POST",body:JSON.stringify({ids:e,container:t})})}let Yi=null;function si(){return Yi?Yi():Promise.resolve()}function ky({activeContainer:e,onContainerChange:t,onFlagFilter:l}){const[a,n]=x.useState({ACTIONABLE_NOW:0,CANDIDATES:0,AMBIGUITY:0,WAITING:0,TUNING:0}),[i,u]=x.useState({needsClarification:0,needsTuning:0}),s=x.useCallback(async()=>{try{const[p,v]=await Promise.all([Ip(),wy()]);n(p),u(v)}catch(p){console.error("Failed to load counts:",p)}},[]);x.useEffect(()=>(Yi=s,s(),()=>{Yi=null}),[s]);function r(p){t(e===p?null:p)}function d(p,v){const m=e===p;return c.jsxs("button",{className:`grid-btn grid-btn--${v}${m?" selected":""}`,onClick:()=>r(p),children:[c.jsx("span",{className:"grid-btn-label",children:jt[p]}),c.jsx("span",{className:"grid-btn-badge",children:a[p]})]},p)}return c.jsxs("div",{className:"container-grid",children:[d("ACTIONABLE_NOW","now"),c.jsxs("div",{className:"grid-row",children:[d("CANDIDATES","review"),d("WAITING","waiting")]}),(i.needsClarification>0||i.needsTuning>0)&&c.jsxs("div",{className:"flag-badges",children:[i.needsClarification>0&&c.jsxs("button",{className:"flag-badge flag-badge--clarify",onClick:()=>l==null?void 0:l("needsClarification"),title:"Actions needing clarification",children:[c.jsx("span",{className:"flag-badge-icon",children:"?"}),c.jsx("span",{className:"flag-badge-label",children:"Clarify"}),c.jsx("span",{className:"flag-badge-count",children:i.needsClarification})]}),i.needsTuning>0&&c.jsxs("button",{className:"flag-badge flag-badge--tuning",onClick:()=>l==null?void 0:l("needsTuning"),title:"Actions flagged for tuning",children:[c.jsx("span",{className:"flag-badge-icon",children:"⚙"}),c.jsx("span",{className:"flag-badge-label",children:"Tuning"}),c.jsx("span",{className:"flag-badge-count",children:i.needsTuning})]})]})]})}const zo={SU:"Sunday",MO:"Monday",TU:"Tuesday",WE:"Wednesday",TH:"Thursday",FR:"Friday",SA:"Saturday"},Yy=["January","February","March","April","May","June","July","August","September","October","November","December"];function By(e){const t={};for(const a of e.split(";")){const[n,i]=a.split("=");n&&i&&(t[n.trim()]=i.trim())}const l=t.FREQ;return!l||!["DAILY","WEEKLY","MONTHLY","YEARLY"].includes(l)?null:{freq:l,interval:t.INTERVAL&&parseInt(t.INTERVAL)||1,byMonthDay:t.BYMONTHDAY?parseInt(t.BYMONTHDAY):void 0,byMonth:t.BYMONTH?parseInt(t.BYMONTH):void 0,byDay:t.BYDAY||void 0}}function Kc(e){const t=["th","st","nd","rd"],l=e%100;return e+(t[(l-20)%10]||t[l]||t[0])}function Bi(e){const t=By(e);if(!t)return e;switch(t.freq){case"DAILY":return t.interval===1?"Daily":`Every ${t.interval} days`;case"WEEKLY":return t.interval===1?t.byDay&&zo[t.byDay]?`Weekly on ${zo[t.byDay]}`:"Weekly":t.interval===2?"Biweekly":`Every ${t.interval} weeks`;case"MONTHLY":return t.interval===1?t.byMonthDay?`Monthly on the ${Kc(t.byMonthDay)}`:"Monthly":t.interval===3?t.byMonthDay?`Quarterly on the ${Kc(t.byMonthDay)}`:"Quarterly":t.interval===6?"Every 6 months":`Every ${t.interval} months`;case"YEARLY":if(t.byMonth){const l=Yy[t.byMonth-1];return t.byMonthDay?`Yearly on ${l} ${Kc(t.byMonthDay)}`:`Yearly in ${l}`}return t.interval===1?"Yearly":`Every ${t.interval} years`}}function Ly({action:e,onClick:t,onDelete:l,selectable:a,selected:n,onSelect:i}){var D;const u=e.urgency.toLowerCase(),s=x.useRef(null),[r,d]=x.useState(0),[p,v]=x.useState(!1);function m(){const E=window.getSelection();E&&E.toString().length>0||p||t()}function y(){return e.confidence>=.8?"high":e.confidence>=.5?"medium":"low"}function j(){if(!e.dueDate)return null;const E=new Date(e.dueDate),g=new Date,A=Math.ceil((E.getTime()-g.getTime())/(1e3*60*60*24));return A<0?`${Math.abs(A)}d overdue`:A===0?"Today":A===1?"Tomorrow":A<7?`${A}d`:E.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function T(){const E=window.getSelection();return!!(E&&E.toString().length>0)}function _(E){s.current=E.touches[0].clientX}function o(E){if(s.current===null||T())return;const g=E.touches[0].clientX-s.current;g<-10&&(v(!0),d(Math.min(0,g)))}function f(){if(T()){s.current=null;return}r<-120&&l?(d(-300),setTimeout(()=>{l(e.id)},200)):d(0),s.current=null,setTimeout(()=>v(!1),50)}const h=e.container==="CANDIDATES",b=j();return c.jsxs("div",{className:"action-card",onClick:m,children:[r<-10&&c.jsx("div",{className:"action-card-delete-bg",children:"Delete"}),c.jsxs("div",{className:"action-card-inner",style:{transform:r<0?`translateX(${r}px)`:void 0,transition:p?"none":"transform 0.2s ease"},onTouchStart:_,onTouchMove:o,onTouchEnd:f,children:[a&&c.jsx("div",{className:"action-checkbox-wrapper",onClick:E=>E.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"action-checkbox",checked:!!n,onChange:()=>i==null?void 0:i(e.id)})}),c.jsx("div",{className:`action-urgency-bar ${u}`}),c.jsxs("div",{className:"action-content",children:[e.needsFollowUp&&c.jsx("div",{className:"action-followup-nudge",children:"Still important? Tap to review."}),c.jsx("div",{className:"action-description",children:e.shortDescription||e.description}),((D=e.source)==null?void 0:D.type)==="GMAIL"&&(e.source.emailFrom||e.source.emailSubject)&&c.jsxs("div",{className:"action-source-line",children:["From: ",e.source.emailFrom||"Unknown"," · ",e.source.emailSubject||"No subject"]}),c.jsxs("div",{className:"action-meta",children:[h&&c.jsx("span",{className:"badge badge-unconfirmed",children:"Unconfirmed"}),e.container==="WAITING"&&c.jsx("span",{className:"badge badge-waiting",children:"Waiting"}),e.needsClarification&&c.jsx("span",{className:"badge badge-clarify",children:e.missingInfo?`Unclear: ${JSON.parse(e.missingInfo).slice(0,2).join(", ")}`:"Clarify"}),e.needsTuning&&c.jsx("span",{className:"badge badge-tuning",children:"Tuning"}),e.recurrenceRule&&c.jsxs("span",{className:"badge badge-recurrence",children:["↻ ",Bi(e.recurrenceRule)]}),b&&c.jsx("span",{className:"action-due",children:b}),c.jsxs("span",{className:"action-confidence",children:[c.jsx("span",{className:`confidence-dot ${y()}`}),Math.round(e.confidence*100),"%"]})]})]})]})]})}function qy({onClose:e,onCreated:t}){const[l,a]=x.useState("input"),[n,i]=x.useState(""),[u,s]=x.useState(null),[r,d]=x.useState({}),[p,v]=x.useState(null);async function m(){if(!n.trim()){v("Please enter a description");return}a("parsing"),v(null);try{const o=await iy(n.trim());s(o),o.container==="AMBIGUITY"&&o.questions.length>0?a("clarify"):a("preview")}catch(o){v("Failed to parse action"),a("input"),console.error(o)}}async function y(){if(u){a("parsing"),v(null);try{const o=await uy(u.rawInput,r);s(o),o.container==="AMBIGUITY"&&o.questions.length>0?(d({}),a("clarify")):a("preview")}catch(o){v("Failed to clarify"),a("clarify"),console.error(o)}}}async function j(){if(u){a("parsing"),v(null);try{await cy(u),t()}catch(o){v("Failed to save action"),a("preview"),console.error(o)}}}function T(o,f){u&&s({...u,[o]:f})}function _(){return u?u.confidence>=.8?"var(--success)":u.confidence>=.5?"var(--warning)":"var(--urgency-critical)":"var(--text-secondary)"}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsxs("h2",{className:"modal-title",children:[l==="input"&&"New Action",l==="parsing"&&"Analyzing...",l==="preview"&&"Review Action",l==="clarify"&&"Need More Info"]}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),l==="input"&&c.jsxs("div",{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What needs to be done?"}),c.jsx("textarea",{className:"form-textarea",value:n,onChange:o=>i(o.target.value),placeholder:"e.g., Call John about the project proposal by Friday",autoFocus:!0,rows:3}),c.jsx("p",{className:"form-hint",children:"Include details like who, what, when - AI will extract the action"})]}),p&&c.jsx("div",{className:"form-error",children:p}),c.jsx("button",{type:"button",className:"btn btn-primary btn-block",onClick:m,children:"Parse with AI"})]}),l==="parsing"&&c.jsxs("div",{className:"parsing-state",children:[c.jsx("div",{className:"spinner"}),c.jsx("p",{children:"Analyzing your input..."})]}),l==="preview"&&u&&c.jsxs("div",{children:[c.jsxs("div",{className:"preview-section",children:[c.jsxs("div",{className:"preview-confidence",style:{color:_()},children:[Math.round(u.confidence*100),"% confident"]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:u.description,onChange:o=>T("description",o.target.value),rows:2})]}),u.suggestedAction&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Suggested Next Step"}),c.jsx("input",{type:"text",className:"form-input",value:u.suggestedAction,onChange:o=>T("suggestedAction",o.target.value)})]}),c.jsxs("div",{className:"preview-meta",children:[c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Container"}),c.jsx("select",{className:"form-select form-select-small",value:u.container,onChange:o=>T("container",o.target.value),children:["ACTIONABLE_NOW","CANDIDATES","WAITING","AMBIGUITY"].map(o=>c.jsx("option",{value:o,children:jt[o]},o))})]}),c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Urgency"}),c.jsx("select",{className:"form-select form-select-small",value:u.urgency,onChange:o=>T("urgency",o.target.value),children:Object.entries(oa).map(([o,f])=>c.jsx("option",{value:o,children:f},o))})]}),u.dueDate&&c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Due"}),c.jsx("input",{type:"date",className:"form-input form-input-small",value:u.dueDate,onChange:o=>T("dueDate",o.target.value)})]})]}),u.parties.length>0&&c.jsxs("div",{className:"preview-parties",children:[c.jsx("span",{className:"preview-meta-label",children:"People:"}),u.parties.map((o,f)=>c.jsx("span",{className:"party-chip",children:o.name},f))]}),u.recurrenceRule&&c.jsxs("div",{className:"preview-recurrence",children:[c.jsx("span",{className:"preview-meta-label",children:"Repeats"}),c.jsxs("span",{className:"preview-recurrence-value",children:["↻ ",Bi(u.recurrenceRule)]}),u.leadTimeDays!==void 0&&c.jsxs("span",{className:"preview-lead-time",children:["(surfaces ",u.leadTimeDays," days before due)"]})]}),u.reasoning&&c.jsxs("div",{className:"preview-reasoning",children:[c.jsx("span",{className:"preview-meta-label",children:"AI Reasoning"}),c.jsx("p",{children:u.reasoning})]})]}),p&&c.jsx("div",{className:"form-error",children:p}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>a("input"),children:"Edit Input"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:j,children:"Save Action"})]})]}),l==="clarify"&&u&&c.jsxs("div",{children:[c.jsx("p",{className:"clarify-intro",children:"Please answer these questions to clarify your action:"}),u.questions.map((o,f)=>c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:o}),c.jsx("input",{type:"text",className:"form-input",value:r[o]||"",onChange:h=>d({...r,[o]:h.target.value}),placeholder:"Your answer..."})]},f)),p&&c.jsx("div",{className:"form-error",children:p}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>a("input"),children:"Start Over"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:y,disabled:Object.keys(r).length===0,children:"Submit Answers"})]})]}),c.jsx("style",{children:`
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
        `})]})})}const Qy={CREATED:"Created",CONTAINER_CHANGE:"Moved",EDITED:"Edited",MERGED:"Merged",TRIGGER_FIRED:"Trigger fired",AI_REPARSED:"AI re-parsed",COMPLETED:"Completed",ARCHIVED:"Archived",FOLLOW_UP_SENT:"Follow-up sent"};function Xy({events:e,aiReasoning:t}){function l(n){return new Date(n).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function a(n){const i=Qy[n.type];if(n.type==="CONTAINER_CHANGE"&&n.fromContainer&&n.toContainer)return`${i} from ${n.fromContainer} to ${n.toContainer}`;if(n.details)try{const u=JSON.parse(n.details);if(u.source)return`${i} via ${u.source}`;if(u.fields)return`${i}: ${u.fields.join(", ")}`}catch{}return i}return c.jsxs("div",{className:"info-panel",children:[t&&c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"AI Reasoning"}),c.jsx("p",{className:"info-reasoning",children:t})]}),c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"History"}),c.jsx("div",{className:"info-timeline",children:e.map(n=>c.jsxs("div",{className:"timeline-item",children:[c.jsx("span",{className:"timeline-time",children:l(n.createdAt)}),c.jsx("span",{className:"timeline-description",children:a(n)})]},n.id))})]}),c.jsx("style",{children:`
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
      `})]})}function ht({title:e,message:t,confirmLabel:l="Confirm",cancelLabel:a="Cancel",danger:n=!1,inputMode:i=!1,inputPlaceholder:u,inputLabel:s,onConfirm:r,onCancel:d}){const[p,v]=x.useState("");return c.jsxs("div",{className:"confirm-overlay",onClick:d,children:[c.jsxs("div",{className:"confirm-dialog",onClick:m=>m.stopPropagation(),children:[c.jsx("div",{className:"confirm-title",children:e}),c.jsx("div",{className:"confirm-message",children:t}),i&&c.jsxs("div",{className:"confirm-input-group",children:[s&&c.jsx("label",{className:"confirm-input-label",children:s}),c.jsx("input",{type:"text",className:"confirm-input",value:p,onChange:m=>v(m.target.value),placeholder:u,autoFocus:!0})]}),c.jsxs("div",{className:"confirm-actions",children:[c.jsx("button",{className:"confirm-btn confirm-btn-cancel",onClick:d,children:a}),c.jsx("button",{className:`confirm-btn ${n?"confirm-btn-danger":"confirm-btn-primary"}`,onClick:()=>r(i?p:void 0),disabled:i&&!p.trim(),children:l})]})]}),c.jsx("style",{children:`
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
      `})]})}function Co({trigger:e,onUpdate:t}){const[l,a]=x.useState(!1),[n,i]=x.useState(null);function u(m){return m?new Date(m).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""}function s(m){if(!m)return"";const y=new Date(m),j=new Date,T=Math.ceil((y.getTime()-j.getTime())/(1e3*60*60*24));return T<0?`${Math.abs(T)}d ago`:T===0?"Today":T===1?"Tomorrow":T<7?`In ${T}d`:u(m)}function r(){switch(e.type){case"DATE_EXACT":return s(e.triggerDate);case"DATE_WINDOW":return`${u(e.dateWindowStart)} - ${u(e.dateWindowEnd)}`;case"EMAIL_REPLY":return e.emailPattern||"Waiting for reply";case"MANUAL_CHECK":return e.eventDescription||"Check condition";case"WEB_CONDITION":return e.webQuery||"Monitoring web for condition";default:return""}}async function d(){a(!0);try{await hy(e.id),t()}catch(m){console.error("Failed to fire trigger:",m)}finally{a(!1)}i(null)}async function p(m){a(!0);try{await py(e.id,m),t()}catch(y){console.error("Failed to check trigger:",y)}finally{a(!1)}}async function v(){a(!0);try{await gy(e.id),t()}catch(m){console.error("Failed to delete trigger:",m)}finally{a(!1)}i(null)}return e.isTriggered?c.jsxs("div",{className:"trigger-card fired",children:[c.jsx("div",{className:"trigger-icon",children:"✓"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:ki[e.type]}),c.jsxs("div",{className:"trigger-info",children:["Fired ",s(e.triggeredAt)]})]})]}):c.jsxs("div",{className:"trigger-card",children:[c.jsx("div",{className:"trigger-icon",children:"⏳"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:ki[e.type]}),c.jsx("div",{className:"trigger-info",children:r()}),e.description&&c.jsx("div",{className:"trigger-description",children:e.description}),e.type==="WEB_CONDITION"&&e.webCheckResult&&c.jsxs("div",{className:"trigger-description",children:["Last check: ",e.webCheckResult]}),e.type==="WEB_CONDITION"&&e.lastChecked&&c.jsxs("div",{className:"trigger-description",style:{opacity:.6},children:["Checked ",s(e.lastChecked)," · ",e.checkCount," checks"]})]}),c.jsxs("div",{className:"trigger-actions",children:[e.type==="MANUAL_CHECK"?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"trigger-btn check",onClick:()=>p(!0),disabled:l,title:"Condition met",children:"✓"}),c.jsx("button",{className:"trigger-btn skip",onClick:()=>p(!1),disabled:l,title:"Not yet",children:"↻"})]}):c.jsx("button",{className:"trigger-btn fire",onClick:()=>i("fire"),disabled:l,title:"Fire now",children:"▶"}),c.jsx("button",{className:"trigger-btn delete",onClick:()=>i("delete"),disabled:l,title:"Delete",children:"✕"})]}),n==="fire"&&c.jsx(ht,{title:"Fire Trigger",message:"Fire this trigger now? The action will move to Actionable Now.",confirmLabel:"Fire",onConfirm:d,onCancel:()=>i(null)}),n==="delete"&&c.jsx(ht,{title:"Delete Trigger",message:"Delete this trigger?",confirmLabel:"Delete",danger:!0,onConfirm:v,onCancel:()=>i(null)}),c.jsx("style",{children:`
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
      `})]})}function Zy({actionId:e,onClose:t,onCreated:l}){const[a,n]=x.useState("DATE_EXACT"),[i,u]=x.useState(""),[s,r]=x.useState(""),[d,p]=x.useState(""),[v,m]=x.useState(""),[y,j]=x.useState(""),[T,_]=x.useState(!1),[o,f]=x.useState(null);async function h(E){if(E.preventDefault(),f(null),a==="DATE_EXACT"&&!s){f("Please select a date");return}if(a==="DATE_WINDOW"&&(!d||!v)){f("Please select both start and end dates");return}if(a==="MANUAL_CHECK"&&!y){f("Please describe what to check for");return}_(!0);try{await Rm({actionId:e,type:a,description:i||void 0,triggerDate:a==="DATE_EXACT"?s:void 0,dateWindowStart:a==="DATE_WINDOW"?d:void 0,dateWindowEnd:a==="DATE_WINDOW"?v:void 0,eventDescription:a==="MANUAL_CHECK"?y:void 0}),l(),t()}catch(g){f("Failed to create trigger"),console.error(g)}finally{_(!1)}}const b=new Date;b.setDate(b.getDate()+1);const D=b.toISOString().split("T")[0];return c.jsx("div",{className:"trigger-modal-overlay",onClick:t,children:c.jsxs("div",{className:"trigger-modal",onClick:E=>E.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Add Trigger"}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]}),c.jsxs("form",{onSubmit:h,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Type"}),c.jsx("div",{className:"trigger-type-options",children:Object.keys(ki).map(E=>c.jsx("button",{type:"button",className:`trigger-type-btn ${a===E?"active":""}`,onClick:()=>n(E),children:ki[E]},E))})]}),a==="DATE_EXACT"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Date"}),c.jsx("input",{type:"date",className:"form-input",value:s,onChange:E=>r(E.target.value),min:D}),c.jsx("p",{className:"form-hint",children:"Action will move to Actionable Now on this date"})]}),a==="DATE_WINDOW"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Start Date"}),c.jsx("input",{type:"date",className:"form-input",value:d,onChange:E=>p(E.target.value),min:D})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"End Date"}),c.jsx("input",{type:"date",className:"form-input",value:v,onChange:E=>m(E.target.value),min:d||D})]}),c.jsx("p",{className:"form-hint",children:"Action will become active when start date is reached"})]}),a==="EMAIL_REPLY"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:E=>u(E.target.value),placeholder:"e.g., Waiting for reply from John"}),c.jsx("p",{className:"form-hint",children:"You'll be prompted to manually check for the reply"})]}),a==="MANUAL_CHECK"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What to check for"}),c.jsx("textarea",{className:"form-textarea",value:y,onChange:E=>j(E.target.value),placeholder:"e.g., 30% trade-in promotion period starts",rows:2}),c.jsx("p",{className:"form-hint",children:"You'll be prompted periodically to check if this condition is met"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Note (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:E=>u(E.target.value),placeholder:"Add a note about this trigger..."})]}),o&&c.jsx("div",{className:"form-error",children:o}),c.jsxs("div",{className:"trigger-modal-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:T,children:T?"Adding...":"Add Trigger"})]})]}),c.jsx("style",{children:`
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
        `})]})})}function Gm({actionId:e,onClose:t,onUpdate:l}){var Ks,Js;const[a,n]=x.useState(null),[i,u]=x.useState([]),[s,r]=x.useState(!0),[d,p]=x.useState(!1),[v,m]=x.useState(!1),[y,j]=x.useState(!1),[T,_]=x.useState(!1),[o,f]=x.useState(!1),[h,b]=x.useState(null),[D,E]=x.useState(!1),[g,A]=x.useState(""),[O,R]=x.useState(null),[se,ye]=x.useState(""),[qe,je]=x.useState("MEDIUM"),[Qe,M]=x.useState(""),[z,w]=x.useState(!1),[U,Q]=x.useState(!1),[V,Ae]=x.useState(!1),[tt,Te]=x.useState(null),[Xe,yt]=x.useState(""),[C,B]=x.useState(null),[P,Me]=x.useState(""),[vl,vt]=x.useState(!1);x.useEffect(()=>{lt()},[e]),x.useEffect(()=>{if(!(o||V||T||vl))return;function ue(){f(!1),Ae(!1),_(!1),vt(!1),B(null)}const rc=setTimeout(()=>document.addEventListener("click",ue),0);return()=>{clearTimeout(rc),document.removeEventListener("click",ue)}},[o,V,T,vl]);async function lt(){try{const[S,ue]=await Promise.all([Pp(e),my({actionId:e})]);n(S),u(ue),ye(S.description),je(S.urgency),M(S.dueDate?S.dueDate.split("T")[0]:"")}catch(S){console.error("Failed to load action:",S)}finally{r(!1)}}async function km(){if(a){w(!0);try{await Vn(a.id,{description:se,urgency:qe,dueDate:Qe||null,version:a.version}),p(!1),lt(),l()}catch(S){console.error("Failed to save:",S)}finally{w(!1)}}}function Ym(){a&&(ye(a.description),je(a.urgency),M(a.dueDate?a.dueDate.split("T")[0]:""),p(!1))}async function Bm(){if(a){Q(!0);try{await sy(a.id),p(!1),lt(),l()}catch(S){console.error("Failed to reparse:",S)}finally{Q(!1)}}}async function Lm(){if(a)try{const S=await ey(a.id);if(S.nextAction){const ue=S.nextAction.dueDate?new Date(S.nextAction.dueDate).toLocaleDateString():"scheduled";b(`Marked complete. Next occurrence scheduled for ${ue}.`),setTimeout(()=>{l(),t()},3e3)}else l(),t()}catch(S){console.error("Failed to complete:",S)}}async function qm(){if(!a)return;const S=parseInt(g);if(!(isNaN(S)||S<0||S>90))try{await Vn(a.id,{leadTimeDays:S,version:a.version}),E(!1),lt(),l()}catch(ue){console.error("Failed to update lead time:",ue)}}async function Qm(){if(a)try{await Ao(a.id,"ACTIONABLE_NOW"),lt(),l()}catch(S){console.error("Failed to confirm:",S)}}function cc(){lt(),l()}async function uc(S,ue){if(a)try{await _y(a.id,S,ue),_(!1),lt(),l()}catch(rc){console.error("Failed to submit feedback:",rc)}}function Xm(){Te("defer"),yt(""),f(!1)}async function Zm(){if(!(!a||!Xe))try{await Rm({actionId:a.id,type:"DATE_EXACT",description:`Deferred until ${Xe}`,triggerDate:Xe}),Te(null),yt(""),lt(),l()}catch(S){console.error("Failed to defer action:",S)}}function Vm(){Ae(!0),f(!1)}async function Km(S){if(a)try{await Ao(a.id,S),Ae(!1),lt(),l()}catch(ue){console.error("Failed to reclassify action:",ue)}}function Jm(){f(!1),R({type:"delete"})}async function $m(){if(a){try{await ty(a.id),l(),t()}catch(S){console.error("Failed to delete action:",S)}R(null)}}function Wm(){f(!1),R({type:"merge-id"})}async function Fm(S){if(a){try{await Ny(S,a.id),l(),t()}catch(ue){console.error("Failed to merge actions:",ue)}R(null)}}async function Im(){if(a){try{await wm(a.id),l(),t()}catch(S){console.error("Failed to archive action:",S)}R(null)}}function Oa(S){if(O)if(O.type==="delete")$m();else if(O.type==="archive")Im();else if(O.type==="merge-id"){const ue=parseInt(S||"");if(isNaN(ue))return;R({type:"merge-confirm",primaryId:ue})}else O.type==="merge-confirm"?Fm(O.primaryId):O.type==="text-correction"&&(S!=null&&S.trim()&&uc("parsed_wrong",S.trim()),R(null))}const Vs=["ACTIONABLE_NOW","CANDIDATES","AMBIGUITY","WAITING"],Pm=["CRITICAL","HIGH","MEDIUM","LOW"];if(s)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsx("div",{className:"modal-content",onClick:S=>S.stopPropagation(),children:c.jsx("p",{children:"Loading..."})})});if(!a)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content",onClick:S=>S.stopPropagation(),children:[c.jsx("p",{children:"Action not found"}),c.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Close"})]})});const bl=i.filter(S=>!S.isTriggered),sc=i.filter(S=>S.isTriggered);return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content action-view",onClick:S=>S.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:d?"Edit Action":"Action Details"}),c.jsxs("div",{className:"action-view-actions",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>m(!v),title:"View history",children:"i"}),c.jsxs("div",{className:"menu-wrapper",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>f(!o),title:"More options",children:"⋯"}),o&&c.jsxs("div",{className:"action-menu",onClick:S=>S.stopPropagation(),children:[c.jsx("button",{className:"action-menu-item",onClick:Xm,children:"Defer"}),c.jsx("button",{className:"action-menu-item",onClick:Vm,children:"Reclassify"}),c.jsx("button",{className:"action-menu-item",onClick:Wm,children:"Merge"}),c.jsx("button",{className:"action-menu-item",onClick:()=>{j(!0),f(!1)},children:"Add to Waiting"}),c.jsx("button",{className:"action-menu-item action-menu-item--danger",onClick:Jm,children:"Delete"})]})]}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]})]}),d?c.jsxs("div",{className:"action-edit-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:se,onChange:S=>ye(S.target.value)})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Urgency"}),c.jsx("select",{className:"form-select",value:qe,onChange:S=>je(S.target.value),children:Object.entries(oa).map(([S,ue])=>c.jsx("option",{value:S,children:ue},S))})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Due Date"}),c.jsx("input",{type:"date",className:"form-input",value:Qe,onChange:S=>M(S.target.value)})]}),c.jsxs("div",{className:"action-edit-buttons",children:[c.jsx("button",{className:"btn btn-secondary",onClick:Ym,children:"Cancel"}),c.jsx("button",{className:"btn btn-secondary",onClick:Bm,disabled:U||z,children:U?"Parsing...":"Re-parse"}),c.jsx("button",{className:"btn btn-primary",onClick:km,disabled:z||U,children:z?"Saving...":"Save"})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"action-detail-content",children:[c.jsx("div",{className:"action-detail-description",children:a.description}),a.needsClarification&&c.jsxs("div",{className:"clarification-banner",children:[c.jsx("div",{className:"clarification-title",children:"I categorized this the best I could, but I'm not confident about:"}),a.missingInfo?c.jsx("ul",{className:"clarification-list",children:JSON.parse(a.missingInfo).map((S,ue)=>c.jsx("li",{className:"clarification-item",children:S},ue))}):a.aiReasoning?c.jsx("div",{className:"clarification-detail",children:a.aiReasoning}):c.jsx("div",{className:"clarification-detail",children:"Review this action and edit any fields that seem off."})]}),a.container==="WAITING"&&(a.recurrenceRule||bl.length>0)&&c.jsx("div",{className:"waiting-summary",children:[a.recurrenceRule&&`↻ ${Bi(a.recurrenceRule)}`,bl.length>0&&bl[0].triggerDate&&`Waiting until ${new Date(bl[0].triggerDate).toLocaleDateString()}`,a.dueDate&&`Due ${new Date(a.dueDate).toLocaleDateString()}`].filter(Boolean).join("  ·  ")}),c.jsx("div",{className:"action-detail-source",children:((Ks=a.source)==null?void 0:Ks.type)==="GMAIL"?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"From"}),c.jsx("span",{className:"detail-value",children:a.source.emailFrom||"Unknown"})]}),c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Subject"}),c.jsx("span",{className:"detail-value",children:a.source.emailSubject||"No subject"})]}),a.source.emailDate&&c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Date"}),c.jsx("span",{className:"detail-value",children:new Date(a.source.emailDate).toLocaleDateString()})]}),a.source.emailId&&c.jsx("div",{className:"source-row",children:c.jsx("a",{href:`https://mail.google.com/mail/u/0/#inbox/${a.source.emailId}`,target:"_blank",rel:"noopener noreferrer",className:"source-gmail-link",children:"View in Gmail"})})]}):((Js=a.source)==null?void 0:Js.type)==="SIRI"?c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Via Siri"})]}):c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Manually entered"})]})}),a.suggestedAction&&c.jsxs("div",{className:"action-detail-suggested",children:[c.jsx("span",{className:"detail-label",children:"Next step:"}),a.suggestedAction]}),c.jsxs("div",{className:"action-detail-meta",children:[c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Container"}),c.jsx("span",{className:"detail-value",children:jt[a.container]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Urgency"}),c.jsx("span",{className:`detail-value urgency-${a.urgency.toLowerCase()}`,children:oa[a.urgency]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Confidence"}),c.jsxs("span",{className:"detail-value",children:[Math.round(a.confidence*100),"%"]})]}),a.dueDate&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Due"}),c.jsx("span",{className:"detail-value",children:new Date(a.dueDate).toLocaleDateString()})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Repeats"}),c.jsx("span",{className:"detail-value detail-value-editable",onClick:()=>vt(!vl),children:a.recurrenceRule?`↻ ${Bi(a.recurrenceRule)}`:"None"})]}),vl&&c.jsx("div",{className:"recurrence-picker-inline",onClick:S=>S.stopPropagation(),children:c.jsx("div",{className:"picker-grid picker-grid--3col",children:[{label:"Weekly",rule:"FREQ=WEEKLY;INTERVAL=1",lead:1},{label:"Biweekly",rule:"FREQ=WEEKLY;INTERVAL=2",lead:1},{label:"Monthly",rule:"FREQ=MONTHLY;INTERVAL=1",lead:3},{label:"Quarterly",rule:"FREQ=MONTHLY;INTERVAL=3",lead:7},{label:"Yearly",rule:"FREQ=YEARLY;INTERVAL=1",lead:21},{label:"None",rule:null,lead:21}].map(S=>c.jsx("button",{className:`picker-grid-btn${a.recurrenceRule===S.rule?" picker-grid-btn--current":""}`,disabled:a.recurrenceRule===S.rule||!a.recurrenceRule&&S.rule===null,onClick:async()=>{try{await Vn(a.id,{recurrenceRule:S.rule,version:a.version}),vt(!1),lt(),l()}catch(ue){console.error("Failed to update recurrence:",ue)}},children:S.label},S.label))})}),a.recurrenceRule&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Lead time"}),D?c.jsxs("span",{className:"detail-value lead-time-edit",children:[c.jsx("input",{type:"number",min:"0",max:"90",className:"lead-time-input",value:g,onChange:S=>A(S.target.value),autoFocus:!0}),c.jsx("span",{className:"lead-time-unit",children:"days"}),c.jsx("button",{className:"lead-time-save",onClick:qm,children:"Save"}),c.jsx("button",{className:"lead-time-cancel",onClick:()=>E(!1),children:"Cancel"})]}):c.jsxs("span",{className:"detail-value detail-value-editable",onClick:()=>{A(String(a.leadTimeDays)),E(!0)},children:[a.leadTimeDays," days"]})]})]}),(a.container==="WAITING"||i.length>0)&&c.jsxs("div",{className:"triggers-section",children:[c.jsxs("div",{className:"triggers-header",children:[c.jsx("h3",{children:"Triggers"}),c.jsx("button",{className:"add-trigger-btn",onClick:()=>j(!0),children:"+ Add"})]}),bl.length===0&&sc.length===0?c.jsx("p",{className:"no-triggers",children:"No triggers set. Add one to defer this action."}):c.jsxs(c.Fragment,{children:[bl.map(S=>c.jsx(Co,{trigger:S,onUpdate:cc},S.id)),sc.length>0&&bl.length>0&&c.jsx("div",{className:"triggers-divider"}),sc.map(S=>c.jsx(Co,{trigger:S,onUpdate:cc},S.id))]})]})]}),v&&a.events&&c.jsx(Xy,{events:a.events,aiReasoning:a.aiReasoning}),a.needsFollowUp&&c.jsxs("div",{className:"followup-nudge-section",children:[c.jsx("div",{className:"followup-nudge-title",children:"Still important?"}),c.jsx("div",{className:"followup-nudge-subtitle",children:"This action hasn't been touched in a while."}),c.jsxs("div",{className:"followup-nudge-buttons",children:[c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:async()=>{await ly(a.id),lt(),l()},children:"Still relevant"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:()=>{Te("reschedule"),yt("")},children:"Reschedule"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn followup-archive-btn",onClick:()=>R({type:"archive"}),children:"Archive"})]})]}),tt&&c.jsxs("div",{className:"date-picker-inline",children:[c.jsx("span",{className:"date-picker-label",children:tt==="defer"?"Defer until:":"Reschedule to:"}),c.jsx("input",{type:"date",className:"form-input",value:Xe,onChange:S=>yt(S.target.value),style:{padding:"8px 10px",fontSize:"13px",flex:1,minWidth:0}}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!Xe,onClick:async()=>{if(tt==="defer")await Zm();else if(tt==="reschedule"&&a)try{await Vn(a.id,{dueDate:Xe,version:a.version}),Te(null),yt(""),lt(),l()}catch(S){console.error("Failed to reschedule:",S)}},children:"Confirm"}),c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{Te(null),yt("")},children:"Cancel"})]}),c.jsxs("div",{className:"action-view-buttons",children:[c.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Done"}),a.container==="CANDIDATES"&&c.jsx("button",{className:"btn btn-primary",onClick:Qm,children:"Move to Now"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!0),children:"Edit"}),c.jsxs("button",{className:"btn btn-success",onClick:Lm,children:["Mark Complete",a.recurrenceRule?" & Next":""]})]}),h&&c.jsx("div",{className:"next-created-banner",children:h}),c.jsx("button",{className:"feedback-btn",onClick:()=>_(!T),children:"AI parsed incorrectly?"}),T&&c.jsxs("div",{className:"feedback-panel",onClick:S=>S.stopPropagation(),children:[c.jsx("p",{className:"feedback-title",children:"What was wrong?"}),c.jsxs("div",{className:"feedback-options",children:[C==="urgency"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct urgency:"}),c.jsx("div",{className:"picker-grid",children:Pm.map(S=>c.jsx("button",{className:`picker-grid-btn${P===S?" picker-grid-btn--selected":""}${a.urgency===S?" picker-grid-btn--current":""}`,onClick:()=>Me(S),disabled:a.urgency===S,children:oa[S]},S))}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{B(null),Me("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!P,onClick:()=>{uc("urgency_incorrect",P),B(null),Me("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{B("urgency"),Me("")},children:"Wrong urgency level"}),C==="container"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct container:"}),c.jsx("div",{className:"picker-grid",children:Vs.map(S=>c.jsx("button",{className:`picker-grid-btn${P===S?" picker-grid-btn--selected":""}${a.container===S?" picker-grid-btn--current":""}`,onClick:()=>Me(S),disabled:a.container===S,children:jt[S]},S))}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{B(null),Me("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!P,onClick:()=>{uc("container_incorrect",P),B(null),Me("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{B("container"),Me("")},children:"Wrong container"}),c.jsx("button",{className:"feedback-option",onClick:()=>R({type:"text-correction"}),children:"Parsed text is wrong"})]})]}),V&&c.jsxs("div",{className:"reclassify-panel",onClick:S=>S.stopPropagation(),children:[c.jsx("p",{className:"feedback-title",children:"Move to container:"}),c.jsx("div",{className:"picker-grid",children:Vs.map(S=>c.jsx("button",{className:`picker-grid-btn${a.container===S?" picker-grid-btn--current":""}`,disabled:a.container===S,onClick:()=>Km(S),children:jt[S]},S))}),c.jsx("button",{className:"btn btn-secondary btn-block",style:{marginTop:8},onClick:()=>Ae(!1),children:"Cancel"})]})]}),y&&c.jsx(Zy,{actionId:e,onClose:()=>j(!1),onCreated:cc}),O&&O.type==="delete"&&c.jsx(ht,{title:"Delete Action",message:`Permanently delete "${a.description.substring(0,60)}"? This cannot be undone.`,confirmLabel:"Delete",danger:!0,onConfirm:()=>Oa(),onCancel:()=>R(null)}),O&&O.type==="archive"&&c.jsx(ht,{title:"Archive Action",message:"Archive this action? You can find it later in search.",confirmLabel:"Archive",onConfirm:()=>Oa(),onCancel:()=>R(null)}),O&&O.type==="merge-id"&&c.jsx(ht,{title:"Merge Action",message:"Enter the ID of the action to merge this into.",confirmLabel:"Next",inputMode:!0,inputPlaceholder:"Action ID",inputLabel:"Target action ID:",onConfirm:S=>Oa(S),onCancel:()=>R(null)}),O&&O.type==="merge-confirm"&&c.jsx(ht,{title:"Confirm Merge",message:`Merge this action into action #${O.primaryId}? This cannot be undone.`,confirmLabel:"Merge",danger:!0,onConfirm:()=>Oa(),onCancel:()=>R(null)}),O&&O.type==="text-correction"&&c.jsx(ht,{title:"Correct Description",message:"What should the parsed text say?",confirmLabel:"Submit",inputMode:!0,inputPlaceholder:"Corrected description...",inputLabel:"Correct text:",onConfirm:S=>Oa(S),onCancel:()=>R(null)}),c.jsx("style",{children:`
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
        `})]})})}const Jc={needsClarification:"Needs Clarification",needsTuning:"Needs Tuning"},Vy=["ACTIONABLE_NOW","CANDIDATES","WAITING"];function Ky({activeContainer:e,flagFilter:t,onDataChange:l,onOpenGroups:a}){const[n,i]=x.useState([]),[u,s]=x.useState(!0),[r,d]=x.useState(!1),[p,v]=x.useState(null),[m,y]=x.useState([]),[j,T]=x.useState(!1),[_,o]=x.useState(new Set),[f,h]=x.useState(!1),[b,D]=x.useState(!1);x.useEffect(()=>{E()},[e,t]);async function E(){s(!0);try{let U;if(t?U=await Uy(t):U=await _m(e),i(U),l==null||l(),e==="CANDIDATES")try{const{suggestions:Q}=await Hm();y(Q)}catch{y([])}else y([])}catch(U){console.error("Failed to load actions:",U)}finally{s(!1)}}function g(){return t?Jc[t]||t:e?jt[e]:"All Actions"}function A(){d(!1),E(),si()}function O(){j?(T(!1),o(new Set),h(!1)):T(!0)}function R(U){o(Q=>{const V=new Set(Q);return V.has(U)?V.delete(U):V.add(U),V})}function se(){_.size===n.length?o(new Set):o(new Set(n.map(U=>U.id)))}async function ye(){if(_.size!==0){D(!0);try{await Ry(Array.from(_)),M()}catch(U){console.error("Bulk complete failed:",U)}finally{D(!1)}}}async function qe(){if(_.size!==0){D(!0);try{await Hy(Array.from(_)),M()}catch(U){console.error("Bulk delete failed:",U)}finally{D(!1)}}}async function je(U){if(_.size!==0){D(!0),h(!1);try{await Gy(Array.from(_),U),M()}catch(Q){console.error("Bulk move failed:",Q)}finally{D(!1)}}}async function Qe(U){try{await wm(U),E(),si()}catch(Q){console.error("Swipe delete failed:",Q)}}function M(){T(!1),o(new Set),h(!1),E(),si()}if(u)return c.jsx("div",{className:"feed",children:c.jsx("div",{className:"feed-empty",children:"Loading..."})});const z=_.size,w=n.length>0&&_.size===n.length;return c.jsxs("div",{className:"feed",children:[c.jsxs("div",{className:"feed-header",children:[c.jsx("h1",{className:"feed-title",children:g()}),n.length>0&&c.jsx("button",{className:"feed-select-toggle",onClick:O,children:j?"Cancel":"Select"})]}),m.length>0&&a&&c.jsxs("div",{className:"group-suggestion-banner",onClick:a,children:[c.jsx("span",{className:"group-suggestion-icon",children:"📋"}),c.jsxs("span",{className:"group-suggestion-text",children:[m.length," group ",m.length===1?"suggestion":"suggestions"," available"]}),c.jsx("span",{className:"group-suggestion-arrow",children:"›"})]}),j&&n.length>0&&c.jsx("div",{className:"feed-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:w,onChange:se}),"Select All (",n.length,")"]})}),n.length===0?c.jsx("div",{className:"feed-empty",children:t?`No items ${Jc[t]?"flagged as "+Jc[t].toLowerCase():""}`:e?`No items in ${jt[e]}`:"No actions yet. Tap + to add one."}):n.map(U=>c.jsx(Ly,{action:U,onDelete:Qe,selectable:j,selected:_.has(U.id),onSelect:R,onClick:()=>{j?R(U.id):v(U.id)}},U.id)),j&&z>0&&c.jsxs("div",{className:"bulk-toolbar",children:[c.jsxs("button",{className:"bulk-btn bulk-complete",onClick:ye,disabled:b,children:["Complete (",z,")"]}),c.jsxs("button",{className:"bulk-btn bulk-delete",onClick:qe,disabled:b,children:["Delete (",z,")"]}),c.jsxs("div",{className:"bulk-move-wrapper",children:[c.jsxs("button",{className:"bulk-btn bulk-move",onClick:()=>h(!f),disabled:b,children:["Move (",z,")"]}),f&&c.jsx("div",{className:"bulk-move-dropdown",children:Vy.map(U=>c.jsx("button",{className:"bulk-move-option",onClick:()=>je(U),children:jt[U]},U))})]})]}),c.jsx("button",{className:"quick-capture",onClick:()=>d(!0),children:"+"}),r&&c.jsx(qy,{onClose:()=>d(!1),onCreated:A}),p&&c.jsx(Gm,{actionId:p,onClose:()=>v(null),onUpdate:()=>{E(),v(null)}})]})}function Jy({onClose:e}){const[t,l]=x.useState(null),[a,n]=x.useState(null),[i,u]=x.useState(!0),[s,r]=x.useState(!1),[d,p]=x.useState(null),[v,m]=x.useState("default"),[y,j]=x.useState(!1),[T,_]=x.useState(!1),[o,f]=x.useState(null),[h,b]=x.useState(null),[D,E]=x.useState(!1);x.useEffect(()=>{g(),se()},[]);async function g(){u(!0);try{const[z,w]=await Promise.all([Um(),ry()]);l(z),n(w)}catch(z){console.error("Failed to load settings data:",z)}finally{u(!1)}}async function A(){try{const{url:z}=await oy();window.location.href=z}catch(z){console.error("Failed to get auth URL:",z),alert("Failed to start Gmail connection")}}async function O(){try{await fy(),E(!1),await g()}catch(z){console.error("Failed to disconnect Gmail:",z)}}async function R(){r(!0),p(null);try{const z=await dy();p(z),await g()}catch(z){console.error("Scan failed:",z),p({success:!1,emailsScanned:0,actionsCreated:0,errors:["Scan failed"]})}finally{r(!1)}}async function se(){if(!("Notification"in window)||!("serviceWorker"in navigator)){m("unsupported");return}if(m(Notification.permission),Notification.permission==="granted"){const z=await navigator.serviceWorker.ready.catch(()=>null);if(z){const w=await z.pushManager.getSubscription();j(!!w)}}}async function ye(){_(!0);try{const z=await Notification.requestPermission();if(m(z),z!=="granted")return;const{key:w}=await Dy();if(!w){alert("Server not configured for push notifications");return}const V=(await(await navigator.serviceWorker.ready).pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:je(w)})).toJSON();await Oy(V.endpoint,V.keys.p256dh,V.keys.auth),j(!0)}catch(z){console.error("Failed to enable notifications:",z),alert("Failed to enable notifications")}finally{_(!1)}}async function qe(){_(!0);try{const w=await(await navigator.serviceWorker.ready).pushManager.getSubscription();w&&(await My(w.endpoint),await w.unsubscribe()),j(!1)}catch(z){console.error("Failed to disable notifications:",z)}finally{_(!1)}}function je(z){const w="=".repeat((4-z.length%4)%4),U=(z+w).replace(/-/g,"+").replace(/_/g,"/"),Q=window.atob(U);return new Uint8Array([...Q].map(Ae=>Ae.charCodeAt(0))).buffer}async function Qe(z,w){f(z),b(null);try{const U=await w();b({key:z,...U})}catch{b({key:z,success:!1,message:"Request failed"})}finally{f(null)}}function M(z){if(!z)return"Never";const w=new Date(z),Q=new Date().getTime()-w.getTime(),V=Math.floor(Q/6e4),Ae=Math.floor(V/60),tt=Math.floor(Ae/24);return V<1?"Just now":V<60?`${V}m ago`:Ae<24?`${Ae}h ago`:`${tt}d ago`}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content settings-modal",onClick:z=>z.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Settings"}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),i?c.jsx("div",{className:"settings-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Gmail Integration"}),c.jsxs("div",{className:"settings-gmail",children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Status"}),c.jsx("span",{className:`gmail-status-value ${a!=null&&a.connected?"connected":"disconnected"}`,children:a!=null&&a.connected?"Connected":"Not Connected"})]}),a!=null&&a.connected?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Last Scan"}),c.jsx("span",{className:"gmail-status-value",children:M(a.lastScan)})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Emails Scanned"}),c.jsx("span",{className:"gmail-status-value",children:a.itemsScanned})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Actions Created"}),c.jsx("span",{className:"gmail-status-value",children:a.actionsCreated})]}),a.lastError&&c.jsxs("div",{className:"gmail-error",children:[c.jsx("span",{className:"gmail-error-label",children:"Last Error"}),c.jsx("p",{children:a.lastError})]}),d&&c.jsx("div",{className:`scan-result ${d.success?"success":"error"}`,children:d.success?`Scanned ${d.emailsScanned} emails, created ${d.actionsCreated} actions`:`Scan failed: ${d.errors.join(", ")}`}),c.jsxs("div",{className:"gmail-buttons",children:[c.jsx("button",{className:"btn btn-primary",onClick:R,disabled:s,children:s?"Scanning...":"Scan Now"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>E(!0),children:"Disconnect"})]})]}):c.jsxs("div",{className:"gmail-connect",children:[c.jsx("p",{className:"gmail-connect-text",children:"Connect your Gmail to automatically scan for actionable emails."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:A,children:"Connect Gmail"})]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Push Notifications"}),c.jsx("div",{className:"settings-notifications",children:v==="unsupported"?c.jsx("p",{className:"notif-note",children:"Push notifications require installing this app and iOS 16.4+."}):v==="denied"?c.jsx("p",{className:"notif-note notif-denied",children:"Notifications blocked. Enable them in device Settings > Safari."}):y?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-status notif-enabled",children:"Notifications enabled"}),c.jsx("button",{className:"btn btn-secondary btn-block",onClick:qe,disabled:T,children:T?"Disabling...":"Disable Notifications"})]}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-note",children:"Get notified when triggers fire or actions need attention."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:ye,disabled:T,children:T?"Enabling...":"Enable Notifications"})]})})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"System Health"}),c.jsxs("div",{className:"settings-health",children:[c.jsxs("div",{className:"health-row",children:[c.jsx("span",{className:"health-label",children:"Overall Status"}),c.jsx("span",{className:`health-value ${t==null?void 0:t.status}`,children:(t==null?void 0:t.status)==="ok"?"All Systems OK":"Issues Detected"})]}),(t==null?void 0:t.errors)&&t.errors.length>0&&c.jsxs("div",{className:"health-errors",children:[c.jsx("span",{className:"health-errors-label",children:"Errors"}),t.errors.map((z,w)=>c.jsx("p",{className:"health-error",children:z},w))]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Scan Schedule"}),c.jsxs("div",{className:"settings-schedule",children:[c.jsx("p",{children:"Automatic Gmail scans run every 4 hours."}),c.jsx("p",{className:"schedule-note",children:"Trigger checks run hourly. Web conditions checked every 4 hours per trigger. Follow-up reminders sent daily at 9 AM."})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Testing Tools"}),c.jsxs("div",{className:"settings-tools",children:[c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Check for stale actions"}),c.jsx("div",{className:"tool-desc",children:`Looks at all your active actions and flags ones you haven't touched in a while with a "Still important?" prompt. Normally happens automatically every morning at 9 AM.`})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>Qe("followups",ay),disabled:o!==null,children:o==="followups"?"Running…":"Run now"})]}),c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Fire due triggers & check web conditions"}),c.jsx("div",{className:"tool-desc",children:"Two things in one: (1) promotes any Waiting actions whose due date has arrived into your active list, and (2) searches the web to see if any real-world conditions you're watching — like a store sale or product launch — have come true. Normally runs every hour / every 4 hours."})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>Qe("triggers",ny),disabled:o!==null,children:o==="triggers"?"Running…":"Run now"})]}),h&&c.jsxs("div",{className:`tool-result ${h.success?"success":"error"}`,children:[h.success?"✓":"✗"," ",h.message]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"About"}),c.jsxs("p",{className:"settings-about",children:["Action Manager v1.0",c.jsx("br",{}),"Your personal commitment tracker"]})]})]}),D&&c.jsx(ht,{title:"Disconnect Gmail",message:"Are you sure you want to disconnect Gmail? Automatic email scanning will stop.",confirmLabel:"Disconnect",danger:!0,onConfirm:O,onCancel:()=>E(!1)}),c.jsx("style",{children:`
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
        `})]})})}function $y({onClose:e,onSelectAction:t}){const[l,a]=x.useState(""),[n,i]=x.useState([]),[u,s]=x.useState(0),[r,d]=x.useState(!1),[p,v]=x.useState(!1),[m,y]=x.useState(""),[j,T]=x.useState(""),[_,o]=x.useState(!1),[f,h]=x.useState(!1),b=x.useCallback(async(g=!0)=>{d(!0);try{const A=await yy({q:l||void 0,container:m||void 0,urgency:j||void 0,includeArchived:_,archiveOnly:f,limit:20,offset:g?0:n.length});i(g?A.actions:O=>[...O,...A.actions]),s(A.total),v(A.hasMore)}catch(A){console.error("Search failed:",A)}finally{d(!1)}},[l,m,j,_,f,n.length]);x.useEffect(()=>{const g=setTimeout(()=>{b(!0)},300);return()=>clearTimeout(g)},[l,m,j,_,f]);function D(g){return g?new Date(g).toLocaleDateString("en-US",{month:"short",day:"numeric"}):""}function E(){b(!1)}return c.jsxs("div",{className:"search-overlay",children:[c.jsxs("div",{className:"search-container",children:[c.jsxs("div",{className:"search-header",children:[c.jsxs("div",{className:"search-input-wrapper",children:[c.jsx("span",{className:"search-icon",children:"🔍"}),c.jsx("input",{type:"text",className:"search-input",placeholder:"Search actions...",value:l,onChange:g=>a(g.target.value),autoFocus:!0}),l&&c.jsx("button",{className:"search-clear",onClick:()=>a(""),children:"✕"})]}),c.jsx("button",{className:"search-close",onClick:e,children:"Cancel"})]}),c.jsxs("div",{className:"search-filters",children:[c.jsxs("select",{className:"search-filter",value:m,onChange:g=>y(g.target.value),children:[c.jsx("option",{value:"",children:"All Containers"}),Object.entries(jt).map(([g,A])=>c.jsx("option",{value:g,children:A},g))]}),c.jsxs("select",{className:"search-filter",value:j,onChange:g=>T(g.target.value),children:[c.jsx("option",{value:"",children:"All Urgency"}),Object.entries(oa).map(([g,A])=>c.jsx("option",{value:g,children:A},g))]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:_,onChange:g=>{o(g.target.checked),g.target.checked&&h(!1)}}),"Include archived"]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:f,onChange:g=>{h(g.target.checked),g.target.checked&&o(!1)}}),"Archive only"]})]}),c.jsx("div",{className:"search-results",children:r&&n.length===0?c.jsx("div",{className:"search-loading",children:"Searching..."}):n.length===0?c.jsx("div",{className:"search-empty",children:l?"No actions found":"Start typing to search"}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"search-count",children:[u," result",u!==1?"s":""]}),n.map(g=>c.jsxs("div",{className:`search-result ${g.isArchived?"archived":""}`,onClick:()=>t(g.id),children:[c.jsx("div",{className:`result-urgency ${g.urgency.toLowerCase()}`}),c.jsxs("div",{className:"result-content",children:[c.jsx("div",{className:"result-description",children:g.description}),c.jsxs("div",{className:"result-meta",children:[c.jsx("span",{className:"result-container",children:jt[g.container]}),g.dueDate&&c.jsxs("span",{className:"result-date",children:["Due ",D(g.dueDate)]}),g.isArchived&&c.jsx("span",{className:"result-archived",children:"Archived"})]})]})]},g.id)),p&&c.jsx("button",{className:"search-load-more",onClick:E,disabled:r,children:r?"Loading...":"Load more"})]})})]}),c.jsx("style",{children:`
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
      `})]})}function Wy({onClose:e,onSelectAction:t}){const[l,a]=x.useState([]),[n,i]=x.useState([]),[u,s]=x.useState(!0),[r,d]=x.useState(!1),[p,v]=x.useState(""),[m,y]=x.useState(""),[j,T]=x.useState(!1),[_,o]=x.useState(null),[f,h]=x.useState(""),[b,D]=x.useState([]),[E,g]=x.useState(new Set),[A,O]=x.useState(new Set),[R,se]=x.useState(!1),[ye,qe]=x.useState(null);x.useEffect(()=>{je()},[]);async function je(){s(!0);try{const[C,B]=await Promise.all([vy(),Hm()]);a(C),i(B.suggestions)}catch(C){console.error("Failed to load groups:",C)}finally{s(!1)}}async function Qe(){if(p.trim())try{await To({name:p.trim(),description:m.trim()||void 0}),v(""),y(""),d(!1),je()}catch(C){console.error("Failed to create group:",C)}}async function M(C){try{await To({name:C.suggestedName,description:C.reason,actionIds:C.actionIds}),je()}catch(B){console.error("Failed to create group from suggestion:",B)}}async function z(C){try{await xy(C),qe(null),je()}catch(B){console.error("Failed to delete group:",B)}}async function w(C){o(C),h(""),se(!0);try{const P=(await _m()).filter(vt=>!vt.archivedAt&&!vt.completedAt);D(P);const Me=l.find(vt=>vt.id===C),vl=new Set((Me==null?void 0:Me.actions.map(vt=>vt.id))||[]);g(new Set(vl)),O(new Set(vl))}catch(B){console.error("Failed to load actions:",B)}finally{se(!1)}}async function U(){if(_!==null)try{const C=[...E].filter(P=>!A.has(P)),B=[...A].filter(P=>!E.has(P));C.length>0&&await Sy(_,C);for(const P of B)await Eo(_,P);o(null),je()}catch(C){console.error("Failed to update group actions:",C)}}function Q(C){g(B=>{const P=new Set(B);return P.has(C)?P.delete(C):P.add(C),P})}const V=x.useMemo(()=>{if(!f.trim())return b;const C=f.toLowerCase();return b.filter(B=>B.description.toLowerCase().includes(C))},[b,f]);async function Ae(C,B){try{await Eo(C,B),je()}catch(P){console.error("Failed to remove action from group:",P)}}async function tt(C){try{await by(C),je()}catch(B){console.error("Failed to archive group:",B)}}function Te(C){return C.actions.filter(B=>B.completedAt!==null).length}function Xe(C){return C.actions.length>0&&Te(C)===C.actions.length}function yt(C){return C.toLowerCase()}return c.jsxs("div",{className:"groups-overlay",children:[c.jsxs("div",{className:"groups-container",children:[c.jsxs("div",{className:"groups-header",children:[c.jsx("h2",{className:"groups-title",children:"Action Groups"}),c.jsxs("div",{className:"groups-header-actions",children:[c.jsx("button",{className:"btn btn-primary btn-small",onClick:()=>d(!0),children:"+ New Group"}),c.jsx("button",{className:"groups-close",onClick:e,children:"Done"})]})]}),c.jsx("div",{className:"groups-content",children:u?c.jsx("div",{className:"groups-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:"groups-section",children:[c.jsx("h3",{className:"section-title",children:"Your Groups"}),l.length===0?c.jsx("div",{className:"groups-empty",children:"No groups yet. Create one or accept a suggestion below."}):l.map(C=>c.jsxs("div",{className:"group-card",children:[Xe(C)&&c.jsxs("div",{className:"group-archive-banner",children:[c.jsx("span",{children:"All actions complete! Archive this group?"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>tt(C.id),children:"Archive"})]}),c.jsxs("div",{className:"group-header",children:[c.jsxs("div",{className:"group-info",children:[c.jsx("div",{className:"group-name",children:C.name}),C.description&&c.jsx("div",{className:"group-description",children:C.description})]}),c.jsxs("div",{className:"group-stats",children:[c.jsx("span",{className:`urgency-badge ${yt(C.highestUrgency)}`,children:oa[C.highestUrgency]}),c.jsxs("span",{className:"group-count",children:[C.activeCount,"/",C.actionCount," active"]})]})]}),c.jsxs("div",{className:"group-progress",children:[c.jsxs("div",{className:"progress-text",children:[Te(C)," of ",C.actions.length," complete"]}),c.jsx("div",{className:"progress-bar-track",children:c.jsx("div",{className:"progress-bar-fill",style:{width:C.actions.length>0?`${Te(C)/C.actions.length*100}%`:"0%"}})})]}),c.jsxs("div",{className:"group-actions-list",children:[C.actions.slice(0,3).map(B=>c.jsxs("div",{className:`group-action-item ${B.completedAt?"completed":""}`,children:[c.jsxs("div",{className:"group-action-clickable",onClick:()=>t(B.id),children:[c.jsx("div",{className:`action-urgency-dot ${yt(B.urgency)}`}),c.jsx("span",{className:"action-text",children:B.description})]}),c.jsx("button",{className:"action-remove-btn",onClick:P=>{P.stopPropagation(),Ae(C.id,B.id)},title:"Remove from group",children:"×"})]},B.id)),C.actions.length>3&&c.jsxs("div",{className:"group-more",children:["+",C.actions.length-3," more"]})]}),c.jsxs("div",{className:"group-footer",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>w(C.id),children:"Add Actions"}),c.jsx("button",{className:"btn-link",onClick:()=>qe(C.id),children:"Delete Group"})]})]},C.id))]}),n.length>0&&c.jsxs("section",{className:"groups-section suggestions-section",children:[c.jsxs("button",{className:"suggestions-toggle",onClick:()=>T(!j),children:[c.jsxs("h3",{className:"section-title",style:{margin:0},children:["Suggested Groups (",n.length,")"]}),c.jsx("span",{className:"toggle-arrow",children:j?"▲":"▼"})]}),j&&c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"section-subtitle",children:"Based on similar keywords in your ungrouped actions"}),n.map((C,B)=>c.jsxs("div",{className:"suggestion-card",children:[c.jsxs("div",{className:"suggestion-content",children:[c.jsx("div",{className:"suggestion-name",children:C.suggestedName}),c.jsx("div",{className:"suggestion-reason",children:C.reason}),c.jsxs("div",{className:"suggestion-count",children:[C.actionIds.length," actions"]})]}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>M(C),children:"Create"})]},B))]})]})]})})]}),r&&c.jsx("div",{className:"modal-overlay",onClick:()=>d(!1),children:c.jsxs("div",{className:"modal-content",onClick:C=>C.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Create Group"}),c.jsx("button",{className:"modal-close",onClick:()=>d(!1),children:"×"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Group Name"}),c.jsx("input",{type:"text",className:"form-input",value:p,onChange:C=>v(C.target.value),placeholder:"e.g., Project Alpha",autoFocus:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("textarea",{className:"form-textarea",value:m,onChange:C=>y(C.target.value),placeholder:"What is this group about?",rows:2})]}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:Qe,disabled:!p.trim(),children:"Create Group"})]})}),_!==null&&c.jsx("div",{className:"modal-overlay",onClick:()=>o(null),children:c.jsxs("div",{className:"modal-content add-actions-modal",onClick:C=>C.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Add Actions to Group"}),c.jsx("button",{className:"modal-close",onClick:()=>o(null),children:"×"})]}),c.jsx("div",{className:"form-group",children:c.jsx("input",{type:"text",className:"form-input",value:f,onChange:C=>h(C.target.value),placeholder:"Search actions...",autoFocus:!0})}),!R&&V.length>0&&c.jsx("div",{className:"add-actions-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:V.every(C=>E.has(C.id)),onChange:()=>{const C=V.every(B=>E.has(B.id));g(B=>{const P=new Set(B);for(const Me of V)C?P.delete(Me.id):P.add(Me.id);return P})}}),"Select All (",V.length,")"]})}),c.jsx("div",{className:"add-actions-list",children:R?c.jsx("div",{className:"groups-loading",children:"Loading actions..."}):V.length===0?c.jsx("div",{className:"groups-empty",children:"No matching actions found."}):V.map(C=>c.jsxs("label",{className:"add-action-row",children:[c.jsx("input",{type:"checkbox",checked:E.has(C.id),onChange:()=>Q(C.id)}),c.jsx("div",{className:`action-urgency-dot ${yt(C.urgency)}`}),c.jsx("span",{className:"action-text",children:C.description})]},C.id))}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:U,children:"Save"})]})}),ye!==null&&c.jsx(ht,{title:"Delete Group",message:"Delete this group? Actions will be ungrouped but not deleted.",confirmLabel:"Delete",danger:!0,onConfirm:()=>z(ye),onCancel:()=>qe(null)}),c.jsx("style",{children:`
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
      `})]})}function Fy({onClose:e}){const[t,l]=x.useState([]),[a,n]=x.useState(null),[i,u]=x.useState(!0),[s,r]=x.useState("proposed"),[d,p]=x.useState(null),[v,m]=x.useState(null),[y,j]=x.useState(null);x.useEffect(()=>{T()},[]);async function T(){u(!0);try{const[g,A]=await Promise.all([jy(),Cy()]);l(g),n(A)}catch(g){console.error("Failed to load tuning data:",g)}finally{u(!1)}}async function _(g){try{await Ay(g),T()}catch(A){console.error("Failed to activate rule:",A)}}async function o(g,A=!1,O){try{await Ty(g,O,A),p(null),j(null),T()}catch(R){console.error("Failed to reject rule:",R)}}async function f(g){try{await Ey(g),T()}catch(A){console.error("Failed to update threshold:",A)}}async function h(g){try{await zy(g),j(null),T()}catch(A){console.error("Failed to delete rule:",A)}}const b=t.filter(g=>{switch(s){case"proposed":return g.status==="PROPOSED";case"shadow":return g.status==="SHADOW";case"active":return g.status==="ACTIVE";case"rejected":return g.status==="REJECTED"}});function D(g){switch(g){case"SHADOW":return"Testing";case"PROPOSED":return"Ready";case"ACTIVE":return"Active";case"REJECTED":return"Rejected";default:return g}}function E(g){return g.shadowCount===0?0:Math.round(g.shadowSuccesses/g.shadowCount*100)}return c.jsxs("div",{className:"tuning-overlay",children:[c.jsxs("div",{className:"tuning-container",children:[c.jsxs("div",{className:"tuning-header",children:[c.jsx("h2",{className:"tuning-title",children:"AI Tuning"}),c.jsx("button",{className:"tuning-close",onClick:e,children:"Done"})]}),a&&c.jsxs("div",{className:"tuning-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:a.counts.active}),c.jsx("span",{className:"stat-label",children:"Active Rules"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:a.counts.proposed}),c.jsx("span",{className:"stat-label",children:"Pending Review"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:a.counts.shadow}),c.jsx("span",{className:"stat-label",children:"Testing"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsxs("span",{className:"stat-value",children:[a.avgSuccessRate,"%"]}),c.jsx("span",{className:"stat-label",children:"Avg Success"})]})]}),c.jsxs("div",{className:"tuning-tabs",children:[c.jsxs("button",{className:`tuning-tab ${s==="proposed"?"active":""}`,onClick:()=>r("proposed"),children:["Pending ",a&&a.counts.proposed>0&&`(${a.counts.proposed})`]}),c.jsx("button",{className:`tuning-tab ${s==="shadow"?"active":""}`,onClick:()=>r("shadow"),children:"Testing"}),c.jsx("button",{className:`tuning-tab ${s==="active"?"active":""}`,onClick:()=>r("active"),children:"Active"}),c.jsx("button",{className:`tuning-tab ${s==="rejected"?"active":""}`,onClick:()=>r("rejected"),children:"Rejected"})]}),c.jsx("div",{className:"tuning-content",children:i?c.jsx("div",{className:"tuning-loading",children:"Loading..."}):b.length===0?c.jsx("div",{className:"tuning-empty",children:t.length===0?c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"No tuning rules yet."}),c.jsx("p",{className:"tuning-hint",children:"Tuning rules help the AI learn from your corrections. When you correct an action's urgency or container, the system creates rules to improve future parsing."})]}):c.jsxs(c.Fragment,{children:[s==="proposed"&&"No rules ready for review.",s==="shadow"&&"No rules currently testing.",s==="active"&&"No active tuning rules.",s==="rejected"&&"No rejected rules.",c.jsx("p",{className:"tuning-hint",children:"Tuning rules are created when you provide feedback on AI-parsed actions."})]})}):b.map(g=>{const A=v===g.id;return c.jsxs("div",{className:`rule-card ${A?"rule-card-expanded":""}`,children:[c.jsxs("div",{className:"rule-collapsed",onClick:()=>m(A?null:g.id),children:[c.jsxs("div",{className:"rule-collapsed-top",children:[c.jsx("span",{className:`rule-category category-${g.category}`,children:g.category}),c.jsx("span",{className:`rule-status status-${g.status.toLowerCase()}`,children:D(g.status)}),c.jsx("span",{className:"rule-expand-icon",children:A?"▲":"▼"})]}),c.jsx("div",{className:"rule-description-collapsed",children:A?g.description:g.description.length>60?g.description.slice(0,60)+"...":g.description}),!A&&(g.status==="SHADOW"||g.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(g.shadowCount/g.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[g.shadowCount,"/",g.shadowThreshold," tests (",E(g),"% success)"]})]})]}),A&&c.jsxs("div",{className:"rule-expanded-body",children:[c.jsxs("div",{className:"rule-details",children:[c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"When:"}),c.jsx("span",{className:"detail-text",children:g.condition})]}),c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"Then:"}),c.jsx("span",{className:"detail-text",children:g.transformation})]})]}),(g.status==="SHADOW"||g.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(g.shadowCount/g.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[g.shadowCount,"/",g.shadowThreshold," tests (",E(g),"% success)"]})]}),g.userFeedback&&c.jsxs("div",{className:"rule-feedback",children:[c.jsx("span",{className:"detail-label",children:"Feedback:"}),g.userFeedback]}),c.jsxs("div",{className:"rule-actions",children:[g.status==="PROPOSED"&&d!==g.id&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-success btn-small",onClick:O=>{O.stopPropagation(),_(g.id)},children:"Activate"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:O=>{O.stopPropagation(),p(g.id)},children:"Reject"})]}),g.status==="PROPOSED"&&d===g.id&&c.jsxs("div",{className:"reject-options",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:O=>{O.stopPropagation(),j({type:"reject-feedback",ruleId:g.id})},children:"Just reject"}),c.jsxs("button",{className:"btn btn-secondary btn-small reject-stop",onClick:O=>{O.stopPropagation(),o(g.id,!0)},children:["Stop ",g.category," suggestions"]}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:O=>{O.stopPropagation(),f(g.id),p(null)},children:"Ask less often"}),c.jsx("button",{className:"btn-link",onClick:O=>{O.stopPropagation(),p(null)},children:"Cancel"})]}),g.status==="SHADOW"&&c.jsx("button",{className:"btn btn-primary btn-small",onClick:O=>{O.stopPropagation(),_(g.id)},children:"Activate Early"}),c.jsx("button",{className:"btn-link danger",onClick:O=>{O.stopPropagation(),j({type:"delete",ruleId:g.id})},children:"Delete"})]})]})]},g.id)})})]}),(y==null?void 0:y.type)==="delete"&&c.jsx(ht,{title:"Delete Rule",message:"Delete this tuning rule?",confirmLabel:"Delete",danger:!0,onConfirm:()=>h(y.ruleId),onCancel:()=>j(null)}),(y==null?void 0:y.type)==="reject-feedback"&&c.jsx(ht,{title:"Reject Rule",message:"Why are you rejecting this rule?",confirmLabel:"Reject",inputMode:!0,inputPlaceholder:"Reason (optional)",inputLabel:"Feedback:",onConfirm:g=>o(y.ruleId,!1,g||void 0),onCancel:()=>j(null)}),c.jsx("style",{children:`
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
      `})]})}function Iy(){const[e,t]=x.useState("ACTIONABLE_NOW"),[l,a]=x.useState(void 0),[n,i]=x.useState(!1),[u,s]=x.useState(!1),[r,d]=x.useState(!1),[p,v]=x.useState(!1),[m,y]=x.useState(null),[j,T]=x.useState(0),[_,o]=x.useState(null);x.useEffect(()=>{f();const A=setInterval(f,5*60*1e3);return()=>clearInterval(A)},[]);async function f(){try{const A=await Um();o(A)}catch{}}const h=_&&_.errors.length>0;function b(){T(A=>A+1),si()}function D(A){s(!1),y(A)}function E(A){A==="TUNING"?v(!0):(a(void 0),t(A))}function g(A){t(null),a(A)}return c.jsxs("div",{className:"app",children:[c.jsxs("header",{className:"app-header",children:[c.jsx("button",{className:"search-btn",onClick:()=>s(!0),title:"Search",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("path",{d:"M21 21l-4.35-4.35"})]})}),c.jsx("button",{className:"search-btn",onClick:()=>d(!0),title:"Groups",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]})}),c.jsx("button",{className:`settings-btn ${h?"has-errors":""}`,onClick:()=>i(!0),title:"Settings",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),h&&c.jsx("div",{className:"error-banner",onClick:()=>i(!0),children:"⚠ System issue detected — tap to view in Settings"}),c.jsxs("main",{className:"main-content",children:[c.jsx(ky,{activeContainer:e,onContainerChange:E,onFlagFilter:g}),c.jsx(Ky,{activeContainer:e,flagFilter:l,onOpenGroups:()=>d(!0)},j)]}),n&&c.jsx(Jy,{onClose:()=>i(!1)}),u&&c.jsx($y,{onClose:()=>s(!1),onSelectAction:D}),r&&c.jsx(Wy,{onClose:()=>d(!1),onSelectAction:A=>{d(!1),y(A)}}),p&&c.jsx(Fy,{onClose:()=>v(!1)}),m&&c.jsx(Gm,{actionId:m,onClose:()=>y(null),onUpdate:()=>{b(),y(null)}})]})}Wp.createRoot(document.getElementById("root")).render(c.jsx(x.StrictMode,{children:c.jsx(Iy,{})}));
