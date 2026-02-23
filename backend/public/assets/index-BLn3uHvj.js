(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();var zo={exports:{}},Gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im=Symbol.for("react.transitional.element"),Pm=Symbol.for("react.fragment");function Co(e,t,a){var l=null;if(a!==void 0&&(l=""+a),t.key!==void 0&&(l=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:Im,type:e,key:l,ref:t!==void 0?t:null,props:a}}Gi.Fragment=Pm;Gi.jsx=Co;Gi.jsxs=Co;zo.exports=Gi;var c=zo.exports,Do={exports:{}},B={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu=Symbol.for("react.transitional.element"),eg=Symbol.for("react.portal"),tg=Symbol.for("react.fragment"),ag=Symbol.for("react.strict_mode"),lg=Symbol.for("react.profiler"),ng=Symbol.for("react.consumer"),ig=Symbol.for("react.context"),cg=Symbol.for("react.forward_ref"),ug=Symbol.for("react.suspense"),sg=Symbol.for("react.memo"),Oo=Symbol.for("react.lazy"),rg=Symbol.for("react.activity"),Ks=Symbol.iterator;function og(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}var Mo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_o=Object.assign,wo={};function xl(e,t,a){this.props=e,this.context=t,this.refs=wo,this.updater=a||Mo}xl.prototype.isReactComponent={};xl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Uo(){}Uo.prototype=xl.prototype;function Xu(e,t,a){this.props=e,this.context=t,this.refs=wo,this.updater=a||Mo}var Qu=Xu.prototype=new Uo;Qu.constructor=Xu;_o(Qu,xl.prototype);Qu.isPureReactComponent=!0;var Js=Array.isArray;function Vc(){}var ne={H:null,A:null,T:null,S:null},Ro=Object.prototype.hasOwnProperty;function Zu(e,t,a){var l=a.ref;return{$$typeof:qu,type:e,key:t,ref:l!==void 0?l:null,props:a}}function fg(e,t){return Zu(e.type,t,e.props)}function Vu(e){return typeof e=="object"&&e!==null&&e.$$typeof===qu}function dg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var $s=/\/+/g;function cc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dg(""+e.key):t.toString(36)}function mg(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Vc,Vc):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ka(e,t,a,l,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case qu:case eg:u=!0;break;case Oo:return u=e._init,ka(u(e._payload),t,a,l,n)}}if(u)return n=n(e),u=l===""?"."+cc(e,0):l,Js(n)?(a="",u!=null&&(a=u.replace($s,"$&/")+"/"),ka(n,t,a,"",function(d){return d})):n!=null&&(Vu(n)&&(n=fg(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace($s,"$&/")+"/")+u)),t.push(n)),1;u=0;var s=l===""?".":l+":";if(Js(e))for(var r=0;r<e.length;r++)l=e[r],i=s+cc(l,r),u+=ka(l,t,a,i,n);else if(r=og(e),typeof r=="function")for(e=r.call(e),r=0;!(l=e.next()).done;)l=l.value,i=s+cc(l,r++),u+=ka(l,t,a,i,n);else if(i==="object"){if(typeof e.then=="function")return ka(mg(e),t,a,l,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function Cn(e,t,a){if(e==null)return e;var l=[],n=0;return ka(e,l,"","",function(i){return t.call(a,i,n++)}),l}function gg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ws=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hg={map:Cn,forEach:function(e,t,a){Cn(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Cn(e,function(){t++}),t},toArray:function(e){return Cn(e,function(t){return t})||[]},only:function(e){if(!Vu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Activity=rg;B.Children=hg;B.Component=xl;B.Fragment=tg;B.Profiler=lg;B.PureComponent=Xu;B.StrictMode=ag;B.Suspense=ug;B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne;B.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ne.H.useMemoCache(e)}};B.cache=function(e){return function(){return e.apply(null,arguments)}};B.cacheSignal=function(){return null};B.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=_o({},e.props),n=e.key;if(t!=null)for(i in t.key!==void 0&&(n=""+t.key),t)!Ro.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(l[i]=t[i]);var i=arguments.length-2;if(i===1)l.children=a;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];l.children=u}return Zu(e.type,n,l)};B.createContext=function(e){return e={$$typeof:ig,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ng,_context:e},e};B.createElement=function(e,t,a){var l,n={},i=null;if(t!=null)for(l in t.key!==void 0&&(i=""+t.key),t)Ro.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=t[l]);var u=arguments.length-2;if(u===1)n.children=a;else if(1<u){for(var s=Array(u),r=0;r<u;r++)s[r]=arguments[r+2];n.children=s}if(e&&e.defaultProps)for(l in u=e.defaultProps,u)n[l]===void 0&&(n[l]=u[l]);return Zu(e,i,n)};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:cg,render:e}};B.isValidElement=Vu;B.lazy=function(e){return{$$typeof:Oo,_payload:{_status:-1,_result:e},_init:gg}};B.memo=function(e,t){return{$$typeof:sg,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=ne.T,a={};ne.T=a;try{var l=e(),n=ne.S;n!==null&&n(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(Vc,Ws)}catch(i){Ws(i)}finally{t!==null&&a.types!==null&&(t.types=a.types),ne.T=t}};B.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()};B.use=function(e){return ne.H.use(e)};B.useActionState=function(e,t,a){return ne.H.useActionState(e,t,a)};B.useCallback=function(e,t){return ne.H.useCallback(e,t)};B.useContext=function(e){return ne.H.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e,t){return ne.H.useDeferredValue(e,t)};B.useEffect=function(e,t){return ne.H.useEffect(e,t)};B.useEffectEvent=function(e){return ne.H.useEffectEvent(e)};B.useId=function(){return ne.H.useId()};B.useImperativeHandle=function(e,t,a){return ne.H.useImperativeHandle(e,t,a)};B.useInsertionEffect=function(e,t){return ne.H.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return ne.H.useLayoutEffect(e,t)};B.useMemo=function(e,t){return ne.H.useMemo(e,t)};B.useOptimistic=function(e,t){return ne.H.useOptimistic(e,t)};B.useReducer=function(e,t,a){return ne.H.useReducer(e,t,a)};B.useRef=function(e){return ne.H.useRef(e)};B.useState=function(e){return ne.H.useState(e)};B.useSyncExternalStore=function(e,t,a){return ne.H.useSyncExternalStore(e,t,a)};B.useTransition=function(){return ne.H.useTransition()};B.version="19.2.4";Do.exports=B;var x=Do.exports,Ho={exports:{}},Bi={},Go={exports:{}},Bo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,z){var w=M.length;M.push(z);e:for(;0<w;){var U=w-1>>>1,X=M[U];if(0<n(X,z))M[U]=z,M[w]=X,w=U;else break e}}function a(M){return M.length===0?null:M[0]}function l(M){if(M.length===0)return null;var z=M[0],w=M.pop();if(w!==z){M[0]=w;e:for(var U=0,X=M.length,J=X>>>1;U<J;){var Oe=2*(U+1)-1,at=M[Oe],Ae=Oe+1,Ze=M[Ae];if(0>n(at,w))Ae<X&&0>n(Ze,at)?(M[U]=Ze,M[Ae]=w,U=Ae):(M[U]=at,M[Oe]=w,U=Oe);else if(Ae<X&&0>n(Ze,w))M[U]=Ze,M[Ae]=w,U=Ae;else break e}}return z}function n(M,z){var w=M.sortIndex-z.sortIndex;return w!==0?w:M.id-z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var u=Date,s=u.now();e.unstable_now=function(){return u.now()-s}}var r=[],d=[],p=1,v=null,m=3,y=!1,N=!1,T=!1,_=!1,o=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;function b(M){for(var z=a(d);z!==null;){if(z.callback===null)l(d);else if(z.startTime<=M)l(d),z.sortIndex=z.expirationTime,t(r,z);else break;z=a(d)}}function D(M){if(T=!1,b(M),!N)if(a(r)!==null)N=!0,A||(A=!0,pe());else{var z=a(d);z!==null&&Qe(D,z.startTime-M)}}var A=!1,g=-1,j=5,O=-1;function R(){return _?!0:!(e.unstable_now()-O<j)}function ue(){if(_=!1,A){var M=e.unstable_now();O=M;var z=!0;try{e:{N=!1,T&&(T=!1,f(g),g=-1),y=!0;var w=m;try{t:{for(b(M),v=a(r);v!==null&&!(v.expirationTime>M&&R());){var U=v.callback;if(typeof U=="function"){v.callback=null,m=v.priorityLevel;var X=U(v.expirationTime<=M);if(M=e.unstable_now(),typeof X=="function"){v.callback=X,b(M),z=!0;break t}v===a(r)&&l(r),b(M)}else l(r);v=a(r)}if(v!==null)z=!0;else{var J=a(d);J!==null&&Qe(D,J.startTime-M),z=!1}}break e}finally{v=null,m=w,y=!1}z=void 0}}finally{z?pe():A=!1}}}var pe;if(typeof h=="function")pe=function(){h(ue)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,je=Xe.port2;Xe.port1.onmessage=ue,pe=function(){je.postMessage(null)}}else pe=function(){o(ue,0)};function Qe(M,z){g=o(function(){M(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var w=m;m=z;try{return M()}finally{m=w}},e.unstable_requestPaint=function(){_=!0},e.unstable_runWithPriority=function(M,z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var w=m;m=M;try{return z()}finally{m=w}},e.unstable_scheduleCallback=function(M,z,w){var U=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?U+w:U):w=U,M){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=w+X,M={id:p++,callback:z,priorityLevel:M,startTime:w,expirationTime:X,sortIndex:-1},w>U?(M.sortIndex=w,t(d,M),a(r)===null&&M===a(d)&&(T?(f(g),g=-1):T=!0,Qe(D,w-U))):(M.sortIndex=X,t(r,M),N||y||(N=!0,A||(A=!0,pe()))),M},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(M){var z=m;return function(){var w=m;m=z;try{return M.apply(this,arguments)}finally{m=w}}}})(Bo);Go.exports=Bo;var pg=Go.exports,Yo={exports:{}},Ue={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg=x;function ko(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Zt(){}var we={d:{f:Zt,r:function(){throw Error(ko(522))},D:Zt,C:Zt,L:Zt,m:Zt,X:Zt,S:Zt,M:Zt},p:0,findDOMNode:null},vg=Symbol.for("react.portal");function bg(e,t,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vg,key:l==null?null:""+l,children:e,containerInfo:t,implementation:a}}var Ll=yg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Yi(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we;Ue.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(ko(299));return bg(e,t,null,a)};Ue.flushSync=function(e){var t=Ll.T,a=we.p;try{if(Ll.T=null,we.p=2,e)return e()}finally{Ll.T=t,we.p=a,we.d.f()}};Ue.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,we.d.C(e,t))};Ue.prefetchDNS=function(e){typeof e=="string"&&we.d.D(e)};Ue.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,l=Yi(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?we.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:i}):a==="script"&&we.d.X(e,{crossOrigin:l,integrity:n,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ue.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Yi(t.as,t.crossOrigin);we.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&we.d.M(e)};Ue.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,l=Yi(a,t.crossOrigin);we.d.L(e,a,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ue.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Yi(t.as,t.crossOrigin);we.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else we.d.m(e)};Ue.requestFormReset=function(e){we.d.r(e)};Ue.unstable_batchedUpdates=function(e,t){return e(t)};Ue.useFormState=function(e,t,a){return Ll.H.useFormState(e,t,a)};Ue.useFormStatus=function(){return Ll.H.useHostTransitionStatus()};Ue.version="19.2.4";function Lo(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lo)}catch(e){console.error(e)}}Lo(),Yo.exports=Ue;var xg=Yo.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve=pg,qo=x,Sg=xg;function S(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pn(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Qo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zo(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fs(e){if(pn(e)!==e)throw Error(S(188))}function Ng(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return Fs(n),e;if(i===l)return Fs(n),t;i=i.sibling}throw Error(S(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(S(189))}}if(a.alternate!==l)throw Error(S(190))}if(a.tag!==3)throw Error(S(188));return a.stateNode.current===a?e:t}function Vo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Vo(e),t!==null)return t;e=e.sibling}return null}var ie=Object.assign,jg=Symbol.for("react.element"),Dn=Symbol.for("react.transitional.element"),Hl=Symbol.for("react.portal"),Xa=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),Jo=Symbol.for("react.consumer"),_t=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),$c=Symbol.for("react.suspense_list"),Ju=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Wc=Symbol.for("react.activity"),Ag=Symbol.for("react.memo_cache_sentinel"),Is=Symbol.iterator;function Dl(e){return e===null||typeof e!="object"?null:(e=Is&&e[Is]||e["@@iterator"],typeof e=="function"?e:null)}var Tg=Symbol.for("react.client.reference");function Fc(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Tg?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xa:return"Fragment";case Kc:return"Profiler";case Ko:return"StrictMode";case Jc:return"Suspense";case $c:return"SuspenseList";case Wc:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Hl:return"Portal";case _t:return e.displayName||"Context";case Jo:return(e._context.displayName||"Context")+".Consumer";case Ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ju:return t=e.displayName||null,t!==null?t:Fc(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Fc(e(t))}catch{}}return null}var Gl=Array.isArray,G=qo.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=Sg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ja={pending:!1,data:null,method:null,action:null},Ic=[],Qa=-1;function jt(e){return{current:e}}function Ne(e){0>Qa||(e.current=Ic[Qa],Ic[Qa]=null,Qa--)}function te(e,t){Qa++,Ic[Qa]=e.current,e.current=t}var St=jt(null),tn=jt(null),la=jt(null),ci=jt(null);function ui(e,t){switch(te(la,t),te(tn,e),te(St,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?no(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=no(t),e=hm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ne(St),te(St,e)}function rl(){Ne(St),Ne(tn),Ne(la)}function Pc(e){e.memoizedState!==null&&te(ci,e);var t=St.current,a=hm(t,e.type);t!==a&&(te(tn,e),te(St,a))}function si(e){tn.current===e&&(Ne(St),Ne(tn)),ci.current===e&&(Ne(ci),mn._currentValue=ja)}var uc,Ps;function ba(e){if(uc===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);uc=t&&t[1]||"",Ps=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+uc+e+Ps}var sc=!1;function rc(e,t){if(!e||sc)return"";sc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(y){var m=y}Reflect.construct(e,[],v)}else{try{v.call()}catch(y){m=y}e.call(v.prototype)}}else{try{throw Error()}catch(y){m=y}(v=e())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(y){if(y&&m&&typeof y.stack=="string")return[y.stack,m.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var r=u.split(`
`),d=s.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===d.length)for(l=r.length-1,n=d.length-1;1<=l&&0<=n&&r[l]!==d[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==d[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==d[n]){var p=`
`+r[l].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=l&&0<=n);break}}}finally{sc=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ba(a):""}function Eg(e,t){switch(e.tag){case 26:case 27:case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return e.child!==t&&t!==null?ba("Suspense Fallback"):ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return rc(e.type,!1);case 11:return rc(e.type.render,!1);case 1:return rc(e.type,!0);case 31:return ba("Activity");default:return""}}function er(e){try{var t="",a=null;do t+=Eg(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var eu=Object.prototype.hasOwnProperty,$u=ve.unstable_scheduleCallback,oc=ve.unstable_cancelCallback,zg=ve.unstable_shouldYield,Cg=ve.unstable_requestPaint,We=ve.unstable_now,Dg=ve.unstable_getCurrentPriorityLevel,$o=ve.unstable_ImmediatePriority,Wo=ve.unstable_UserBlockingPriority,ri=ve.unstable_NormalPriority,Og=ve.unstable_LowPriority,Fo=ve.unstable_IdlePriority,Mg=ve.log,_g=ve.unstable_setDisableYieldValue,yn=null,Fe=null;function It(e){if(typeof Mg=="function"&&_g(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(yn,e)}catch{}}var Ie=Math.clz32?Math.clz32:Rg,wg=Math.log,Ug=Math.LN2;function Rg(e){return e>>>=0,e===0?32:31-(wg(e)/Ug|0)|0}var On=256,Mn=262144,_n=4194304;function xa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ki(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=xa(l):(u&=s,u!==0?n=xa(u):a||(a=s&~e,a!==0&&(n=xa(a))))):(s=l&~i,s!==0?n=xa(s):u!==0?n=xa(u):a||(a=l&~e,a!==0&&(n=xa(a)))),n===0?0:t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function vn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Io(){var e=_n;return _n<<=1,!(_n&62914560)&&(_n=4194304),e}function fc(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function bn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gg(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,d=e.hiddenUpdates;for(a=u&~a;0<a;){var p=31-Ie(a),v=1<<p;s[p]=0,r[p]=-1;var m=d[p];if(m!==null)for(d[p]=null,p=0;p<m.length;p++){var y=m[p];y!==null&&(y.lane&=-536870913)}a&=~v}l!==0&&Po(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Po(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ie(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ef(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ie(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function tf(e,t){var a=t&-t;return a=a&42?1:Wu(a),a&(e.suspendedLanes|t)?0:a}function Wu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fu(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function af(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Em(e.type))}function tr(e,t){var a=K.p;try{return K.p=e,t()}finally{K.p=a}}var pa=Math.random().toString(36).slice(2),Ee="__reactFiber$"+pa,Le="__reactProps$"+pa,Sl="__reactContainer$"+pa,tu="__reactEvents$"+pa,Bg="__reactListeners$"+pa,Yg="__reactHandles$"+pa,ar="__reactResources$"+pa,xn="__reactMarker$"+pa;function Iu(e){delete e[Ee],delete e[Le],delete e[tu],delete e[Bg],delete e[Yg]}function Za(e){var t=e[Ee];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Sl]||a[Ee]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ro(e);e!==null;){if(a=e[Ee])return a;e=ro(e)}return t}e=a,a=e.parentNode}return null}function Nl(e){if(e=e[Ee]||e[Sl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(S(33))}function tl(e){var t=e[ar];return t||(t=e[ar]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Se(e){e[xn]=!0}var lf=new Set,nf={};function wa(e,t){ol(e,t),ol(e+"Capture",t)}function ol(e,t){for(nf[e]=t,e=0;e<t.length;e++)lf.add(t[e])}var kg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lr={},nr={};function Lg(e){return eu.call(nr,e)?!0:eu.call(lr,e)?!1:kg.test(e)?nr[e]=!0:(lr[e]=!0,!1)}function Qn(e,t,a){if(Lg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function wn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Tt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qg(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function au(e){if(!e._valueTracker){var t=cf(e)?"checked":"value";e._valueTracker=qg(e,t,""+e[t])}}function uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=cf(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xg=/[\n"\\]/g;function ut(e){return e.replace(Xg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function lu(e,t,a,l,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+nt(t)):e.value!==""+nt(t)&&(e.value=""+nt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?nu(e,u,nt(t)):a!=null?nu(e,u,nt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+nt(s):e.removeAttribute("name")}function sf(e,t,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){au(e);return}a=a!=null?""+nt(a):"",t=t!=null?""+nt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),au(e)}function nu(e,t,a){t==="number"&&oi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function al(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+nt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function rf(e,t,a){if(t!=null&&(t=""+nt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+nt(a):""}function of(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(S(92));if(Gl(l)){if(1<l.length)throw Error(S(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=nt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),au(e)}function fl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ir(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Qg.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ff(e,t,a){if(t!=null&&typeof t!="object")throw Error(S(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&ir(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&ir(e,i,t[i])}function Pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(e){return Vg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function wt(){}var iu=null;function es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Va=null,ll=null;function cr(e){var t=Nl(e);if(t&&(e=t.stateNode)){var a=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(lu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Le]||null;if(!n)throw Error(S(90));lu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&uf(l)}break e;case"textarea":rf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&al(e,!!a.multiple,t,!1)}}}var dc=!1;function df(e,t,a){if(dc)return e(t,a);dc=!0;try{var l=e(t);return l}finally{if(dc=!1,(Va!==null||ll!==null)&&(Ii(),Va&&(t=Va,e=ll,ll=Va=null,cr(t),e)))for(t=0;t<e.length;t++)cr(e[t])}}function an(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Le]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(S(231,t,typeof a));return a}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(Bt)try{var Ol={};Object.defineProperty(Ol,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Ol,Ol),window.removeEventListener("test",Ol,Ol)}catch{cu=!1}var Pt=null,ts=null,Vn=null;function mf(){if(Vn)return Vn;var e,t=ts,a=t.length,l,n="value"in Pt?Pt.value:Pt.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Vn=n.slice(e,1<l?1-l:void 0)}function Kn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Un(){return!0}function ur(){return!1}function qe(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Un:ur,this.isPropagationStopped=ur,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=qe(Ua),Sn=ie({},Ua,{view:0,detail:0}),Kg=qe(Sn),mc,gc,Ml,qi=ie({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:as,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ml&&(Ml&&e.type==="mousemove"?(mc=e.screenX-Ml.screenX,gc=e.screenY-Ml.screenY):gc=mc=0,Ml=e),mc)},movementY:function(e){return"movementY"in e?e.movementY:gc}}),sr=qe(qi),Jg=ie({},qi,{dataTransfer:0}),$g=qe(Jg),Wg=ie({},Sn,{relatedTarget:0}),hc=qe(Wg),Fg=ie({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=qe(Fg),Pg=ie({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eh=qe(Pg),th=ie({},Ua,{data:0}),rr=qe(th),ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ih(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nh[e])?!!t[e]:!1}function as(){return ih}var ch=ie({},Sn,{key:function(e){if(e.key){var t=ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:as,charCode:function(e){return e.type==="keypress"?Kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uh=qe(ch),sh=ie({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),or=qe(sh),rh=ie({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:as}),oh=qe(rh),fh=ie({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=qe(fh),mh=ie({},qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gh=qe(mh),hh=ie({},Ua,{newState:0,oldState:0}),ph=qe(hh),yh=[9,13,27,32],ls=Bt&&"CompositionEvent"in window,ql=null;Bt&&"documentMode"in document&&(ql=document.documentMode);var vh=Bt&&"TextEvent"in window&&!ql,gf=Bt&&(!ls||ql&&8<ql&&11>=ql),fr=" ",dr=!1;function hf(e,t){switch(e){case"keyup":return yh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function bh(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(dr=!0,fr);case"textInput":return e=t.data,e===fr&&dr?null:e;default:return null}}function xh(e,t){if(Ka)return e==="compositionend"||!ls&&hf(e,t)?(e=mf(),Vn=ts=Pt=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gf&&t.locale!=="ko"?null:t.data;default:return null}}var Sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sh[e.type]:t==="textarea"}function yf(e,t,a,l){Va?ll?ll.push(l):ll=[l]:Va=l,t=Ci(t,"onChange"),0<t.length&&(a=new Li("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Xl=null,ln=null;function Nh(e){dm(e,0)}function Xi(e){var t=Bl(e);if(uf(t))return e}function gr(e,t){if(e==="change")return t}var vf=!1;if(Bt){var pc;if(Bt){var yc="oninput"in document;if(!yc){var hr=document.createElement("div");hr.setAttribute("oninput","return;"),yc=typeof hr.oninput=="function"}pc=yc}else pc=!1;vf=pc&&(!document.documentMode||9<document.documentMode)}function pr(){Xl&&(Xl.detachEvent("onpropertychange",bf),ln=Xl=null)}function bf(e){if(e.propertyName==="value"&&Xi(ln)){var t=[];yf(t,ln,e,es(e)),df(Nh,t)}}function jh(e,t,a){e==="focusin"?(pr(),Xl=t,ln=a,Xl.attachEvent("onpropertychange",bf)):e==="focusout"&&pr()}function Ah(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xi(ln)}function Th(e,t){if(e==="click")return Xi(t)}function Eh(e,t){if(e==="input"||e==="change")return Xi(t)}function zh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:zh;function nn(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!eu.call(t,n)||!et(e[n],t[n]))return!1}return!0}function yr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vr(e,t){var a=yr(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yr(a)}}function xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=oi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=oi(e.document)}return t}function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ch=Bt&&"documentMode"in document&&11>=document.documentMode,Ja=null,uu=null,Ql=null,su=!1;function br(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Ja==null||Ja!==oi(l)||(l=Ja,"selectionStart"in l&&ns(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ql&&nn(Ql,l)||(Ql=l,l=Ci(uu,"onSelect"),0<l.length&&(t=new Li("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Ja)))}function va(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var $a={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},vc={},Nf={};Bt&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function Ra(e){if(vc[e])return vc[e];if(!$a[e])return e;var t=$a[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Nf)return vc[e]=t[a];return e}var jf=Ra("animationend"),Af=Ra("animationiteration"),Tf=Ra("animationstart"),Dh=Ra("transitionrun"),Oh=Ra("transitionstart"),Mh=Ra("transitioncancel"),Ef=Ra("transitionend"),zf=new Map,ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ru.push("scrollEnd");function pt(e,t){zf.set(e,t),wa(t,[e])}var fi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},lt=[],Wa=0,is=0;function Qi(){for(var e=Wa,t=is=Wa=0;t<e;){var a=lt[t];lt[t++]=null;var l=lt[t];lt[t++]=null;var n=lt[t];lt[t++]=null;var i=lt[t];if(lt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Cf(a,n,i)}}function Zi(e,t,a,l){lt[Wa++]=e,lt[Wa++]=t,lt[Wa++]=a,lt[Wa++]=l,is|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function cs(e,t,a,l){return Zi(e,t,a,l),di(e)}function Ha(e,t){return Zi(e,null,null,t),di(e)}function Cf(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Ie(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function di(e){if(50<Pl)throw Pl=0,Ou=null,Error(S(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fa={};function _h(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,a,l){return new _h(e,t,a,l)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rt(e,t){var a=e.alternate;return a===null?(a=Je(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Df(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Jn(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")us(e)&&(u=1);else if(typeof e=="string")u=Gp(e,a,St.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Wc:return e=Je(31,a,t,n),e.elementType=Wc,e.lanes=i,e;case Xa:return Aa(a.children,n,i,t);case Ko:u=8,n|=24;break;case Kc:return e=Je(12,a,t,n|2),e.elementType=Kc,e.lanes=i,e;case Jc:return e=Je(13,a,t,n),e.elementType=Jc,e.lanes=i,e;case $c:return e=Je(19,a,t,n),e.elementType=$c,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _t:u=10;break e;case Jo:u=9;break e;case Ku:u=11;break e;case Ju:u=14;break e;case Vt:u=16,l=null;break e}u=29,a=Error(S(130,e===null?"null":typeof e,"")),l=null}return t=Je(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Aa(e,t,a,l){return e=Je(7,e,l,t),e.lanes=a,e}function bc(e,t,a){return e=Je(6,e,null,t),e.lanes=a,e}function Of(e){var t=Je(18,null,null,0);return t.stateNode=e,t}function xc(e,t,a){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xr=new WeakMap;function st(e,t){if(typeof e=="object"&&e!==null){var a=xr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:er(t)},xr.set(e,t),t)}return{value:e,source:t,stack:er(t)}}var Ia=[],Pa=0,mi=null,cn=0,it=[],ct=0,da=null,vt=1,bt="";function Ot(e,t){Ia[Pa++]=cn,Ia[Pa++]=mi,mi=e,cn=t}function Mf(e,t,a){it[ct++]=vt,it[ct++]=bt,it[ct++]=da,da=e;var l=vt;e=bt;var n=32-Ie(l)-1;l&=~(1<<n),a+=1;var i=32-Ie(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,vt=1<<32-Ie(t)+n|a<<n|l,bt=i+e}else vt=1<<i|a<<n|l,bt=e}function ss(e){e.return!==null&&(Ot(e,1),Mf(e,1,0))}function rs(e){for(;e===mi;)mi=Ia[--Pa],Ia[Pa]=null,cn=Ia[--Pa],Ia[Pa]=null;for(;e===da;)da=it[--ct],it[ct]=null,bt=it[--ct],it[ct]=null,vt=it[--ct],it[ct]=null}function _f(e,t){it[ct++]=vt,it[ct++]=bt,it[ct++]=da,vt=t.id,bt=t.overflow,da=e}var ze=null,le=null,Z=!1,na=null,rt=!1,ou=Error(S(519));function ma(e){var t=Error(S(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw un(st(t,e)),ou}function Sr(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ee]=e,t[Le]=l,a){case"dialog":L("cancel",t),L("close",t);break;case"iframe":case"object":case"embed":L("load",t);break;case"video":case"audio":for(a=0;a<fn.length;a++)L(fn[a],t);break;case"source":L("error",t);break;case"img":case"image":case"link":L("error",t),L("load",t);break;case"details":L("toggle",t);break;case"input":L("invalid",t),sf(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":L("invalid",t);break;case"textarea":L("invalid",t),of(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||gm(t.textContent,a)?(l.popover!=null&&(L("beforetoggle",t),L("toggle",t)),l.onScroll!=null&&L("scroll",t),l.onScrollEnd!=null&&L("scrollend",t),l.onClick!=null&&(t.onclick=wt),t=!0):t=!1,t||ma(e,!0)}function Nr(e){for(ze=e.return;ze;)switch(ze.tag){case 5:case 31:case 13:rt=!1;return;case 27:case 3:rt=!0;return;default:ze=ze.return}}function Ba(e){if(e!==ze)return!1;if(!Z)return Nr(e),Z=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ru(e.type,e.memoizedProps)),a=!a),a&&le&&ma(e),Nr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));le=so(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));le=so(e)}else t===27?(t=le,ya(e.type)?(e=Yu,Yu=null,le=e):le=t):le=ze?ft(e.stateNode.nextSibling):null;return!0}function Ca(){le=ze=null,Z=!1}function Sc(){var e=na;return e!==null&&(Ye===null?Ye=e:Ye.push.apply(Ye,e),na=null),e}function un(e){na===null?na=[e]:na.push(e)}var fu=jt(null),Ga=null,Ut=null;function Jt(e,t,a){te(fu,t._currentValue),t._currentValue=a}function Ht(e){e._currentValue=fu.current,Ne(fu)}function du(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function mu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var r=0;r<t.length;r++)if(s.context===t[r]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),du(i.return,a,e),l||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(S(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),du(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function jl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(S(387));if(u=u.memoizedProps,u!==null){var s=n.type;et(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===ci.current){if(u=n.alternate,u===null)throw Error(S(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(mn):e=[mn])}n=n.return}e!==null&&mu(t,e,a,l),t.flags|=262144}function gi(e){for(e=e.firstContext;e!==null;){if(!et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Da(e){Ga=e,Ut=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ce(e){return wf(Ga,e)}function Rn(e,t){return Ga===null&&Da(e),wf(e,t)}function wf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ut===null){if(e===null)throw Error(S(308));Ut=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ut=Ut.next=t;return a}var wh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Uh=ve.unstable_scheduleCallback,Rh=ve.unstable_NormalPriority,ge={$$typeof:_t,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function os(){return{controller:new wh,data:new Map,refCount:0}}function Nn(e){e.refCount--,e.refCount===0&&Uh(Rh,function(){e.controller.abort()})}var Zl=null,gu=0,dl=0,nl=null;function Hh(e,t){if(Zl===null){var a=Zl=[];gu=0,dl=Rs(),nl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return gu++,t.then(jr,jr),t}function jr(){if(--gu===0&&Zl!==null){nl!==null&&(nl.status="fulfilled");var e=Zl;Zl=null,dl=0,nl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ar=G.S;G.S=function(e,t){Kd=We(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hh(e,t),Ar!==null&&Ar(e,t)};var Ta=jt(null);function fs(){var e=Ta.current;return e!==null?e:ee.pooledCache}function $n(e,t){t===null?te(Ta,Ta.current):te(Ta,t.pool)}function Uf(){var e=fs();return e===null?null:{parent:ge._currentValue,pool:e}}var Al=Error(S(460)),ds=Error(S(474)),Vi=Error(S(542)),hi={then:function(){}};function Tr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(wt,wt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zr(e),e;default:if(typeof t.status=="string")t.then(wt,wt);else{if(e=ee,e!==null&&100<e.shellSuspendCounter)throw Error(S(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zr(e),e}throw Ea=t,Al}}function Sa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ea=a,Al):a}}var Ea=null;function Er(){if(Ea===null)throw Error(S(459));var e=Ea;return Ea=null,e}function zr(e){if(e===Al||e===Vi)throw Error(S(483))}var il=null,sn=0;function Hn(e){var t=sn;return sn+=1,il===null&&(il=[]),Rf(il,e,t)}function _l(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gn(e,t){throw t.$$typeof===jg?Error(S(525)):(e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hf(e){function t(o,f){if(e){var h=o.deletions;h===null?(o.deletions=[f],o.flags|=16):h.push(f)}}function a(o,f){if(!e)return null;for(;f!==null;)t(o,f),f=f.sibling;return null}function l(o){for(var f=new Map;o!==null;)o.key!==null?f.set(o.key,o):f.set(o.index,o),o=o.sibling;return f}function n(o,f){return o=Rt(o,f),o.index=0,o.sibling=null,o}function i(o,f,h){return o.index=h,e?(h=o.alternate,h!==null?(h=h.index,h<f?(o.flags|=67108866,f):h):(o.flags|=67108866,f)):(o.flags|=1048576,f)}function u(o){return e&&o.alternate===null&&(o.flags|=67108866),o}function s(o,f,h,b){return f===null||f.tag!==6?(f=bc(h,o.mode,b),f.return=o,f):(f=n(f,h),f.return=o,f)}function r(o,f,h,b){var D=h.type;return D===Xa?p(o,f,h.props.children,b,h.key):f!==null&&(f.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Vt&&Sa(D)===f.type)?(f=n(f,h.props),_l(f,h),f.return=o,f):(f=Jn(h.type,h.key,h.props,null,o.mode,b),_l(f,h),f.return=o,f)}function d(o,f,h,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=xc(h,o.mode,b),f.return=o,f):(f=n(f,h.children||[]),f.return=o,f)}function p(o,f,h,b,D){return f===null||f.tag!==7?(f=Aa(h,o.mode,b,D),f.return=o,f):(f=n(f,h),f.return=o,f)}function v(o,f,h){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=bc(""+f,o.mode,h),f.return=o,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Dn:return h=Jn(f.type,f.key,f.props,null,o.mode,h),_l(h,f),h.return=o,h;case Hl:return f=xc(f,o.mode,h),f.return=o,f;case Vt:return f=Sa(f),v(o,f,h)}if(Gl(f)||Dl(f))return f=Aa(f,o.mode,h,null),f.return=o,f;if(typeof f.then=="function")return v(o,Hn(f),h);if(f.$$typeof===_t)return v(o,Rn(o,f),h);Gn(o,f)}return null}function m(o,f,h,b){var D=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return D!==null?null:s(o,f,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Dn:return h.key===D?r(o,f,h,b):null;case Hl:return h.key===D?d(o,f,h,b):null;case Vt:return h=Sa(h),m(o,f,h,b)}if(Gl(h)||Dl(h))return D!==null?null:p(o,f,h,b,null);if(typeof h.then=="function")return m(o,f,Hn(h),b);if(h.$$typeof===_t)return m(o,f,Rn(o,h),b);Gn(o,h)}return null}function y(o,f,h,b,D){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return o=o.get(h)||null,s(f,o,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Dn:return o=o.get(b.key===null?h:b.key)||null,r(f,o,b,D);case Hl:return o=o.get(b.key===null?h:b.key)||null,d(f,o,b,D);case Vt:return b=Sa(b),y(o,f,h,b,D)}if(Gl(b)||Dl(b))return o=o.get(h)||null,p(f,o,b,D,null);if(typeof b.then=="function")return y(o,f,h,Hn(b),D);if(b.$$typeof===_t)return y(o,f,h,Rn(f,b),D);Gn(f,b)}return null}function N(o,f,h,b){for(var D=null,A=null,g=f,j=f=0,O=null;g!==null&&j<h.length;j++){g.index>j?(O=g,g=null):O=g.sibling;var R=m(o,g,h[j],b);if(R===null){g===null&&(g=O);break}e&&g&&R.alternate===null&&t(o,g),f=i(R,f,j),A===null?D=R:A.sibling=R,A=R,g=O}if(j===h.length)return a(o,g),Z&&Ot(o,j),D;if(g===null){for(;j<h.length;j++)g=v(o,h[j],b),g!==null&&(f=i(g,f,j),A===null?D=g:A.sibling=g,A=g);return Z&&Ot(o,j),D}for(g=l(g);j<h.length;j++)O=y(g,o,j,h[j],b),O!==null&&(e&&O.alternate!==null&&g.delete(O.key===null?j:O.key),f=i(O,f,j),A===null?D=O:A.sibling=O,A=O);return e&&g.forEach(function(ue){return t(o,ue)}),Z&&Ot(o,j),D}function T(o,f,h,b){if(h==null)throw Error(S(151));for(var D=null,A=null,g=f,j=f=0,O=null,R=h.next();g!==null&&!R.done;j++,R=h.next()){g.index>j?(O=g,g=null):O=g.sibling;var ue=m(o,g,R.value,b);if(ue===null){g===null&&(g=O);break}e&&g&&ue.alternate===null&&t(o,g),f=i(ue,f,j),A===null?D=ue:A.sibling=ue,A=ue,g=O}if(R.done)return a(o,g),Z&&Ot(o,j),D;if(g===null){for(;!R.done;j++,R=h.next())R=v(o,R.value,b),R!==null&&(f=i(R,f,j),A===null?D=R:A.sibling=R,A=R);return Z&&Ot(o,j),D}for(g=l(g);!R.done;j++,R=h.next())R=y(g,o,j,R.value,b),R!==null&&(e&&R.alternate!==null&&g.delete(R.key===null?j:R.key),f=i(R,f,j),A===null?D=R:A.sibling=R,A=R);return e&&g.forEach(function(pe){return t(o,pe)}),Z&&Ot(o,j),D}function _(o,f,h,b){if(typeof h=="object"&&h!==null&&h.type===Xa&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Dn:e:{for(var D=h.key;f!==null;){if(f.key===D){if(D=h.type,D===Xa){if(f.tag===7){a(o,f.sibling),b=n(f,h.props.children),b.return=o,o=b;break e}}else if(f.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Vt&&Sa(D)===f.type){a(o,f.sibling),b=n(f,h.props),_l(b,h),b.return=o,o=b;break e}a(o,f);break}else t(o,f);f=f.sibling}h.type===Xa?(b=Aa(h.props.children,o.mode,b,h.key),b.return=o,o=b):(b=Jn(h.type,h.key,h.props,null,o.mode,b),_l(b,h),b.return=o,o=b)}return u(o);case Hl:e:{for(D=h.key;f!==null;){if(f.key===D)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){a(o,f.sibling),b=n(f,h.children||[]),b.return=o,o=b;break e}else{a(o,f);break}else t(o,f);f=f.sibling}b=xc(h,o.mode,b),b.return=o,o=b}return u(o);case Vt:return h=Sa(h),_(o,f,h,b)}if(Gl(h))return N(o,f,h,b);if(Dl(h)){if(D=Dl(h),typeof D!="function")throw Error(S(150));return h=D.call(h),T(o,f,h,b)}if(typeof h.then=="function")return _(o,f,Hn(h),b);if(h.$$typeof===_t)return _(o,f,Rn(o,h),b);Gn(o,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,f!==null&&f.tag===6?(a(o,f.sibling),b=n(f,h),b.return=o,o=b):(a(o,f),b=bc(h,o.mode,b),b.return=o,o=b),u(o)):a(o,f)}return function(o,f,h,b){try{sn=0;var D=_(o,f,h,b);return il=null,D}catch(g){if(g===Al||g===Vi)throw g;var A=Je(29,g,null,o.mode);return A.lanes=b,A.return=o,A}finally{}}}var Oa=Hf(!0),Gf=Hf(!1),Kt=!1;function ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ca(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,V&2){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=di(e),Cf(e,null,a),t}return Zi(e,l,t,a),di(e)}function Vl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ef(e,a)}}function Nc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var pu=!1;function Kl(){if(pu){var e=nl;if(e!==null)throw e}}function Jl(e,t,a,l){pu=!1;var n=e.updateQueue;Kt=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,d=r.next;r.next=null,u===null?i=d:u.next=d,u=r;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==u&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=r))}if(i!==null){var v=n.baseState;u=0,p=d=r=null,s=i;do{var m=s.lane&-536870913,y=m!==s.lane;if(y?(Q&m)===m:(l&m)===m){m!==0&&m===dl&&(pu=!0),p!==null&&(p=p.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var N=e,T=s;m=t;var _=a;switch(T.tag){case 1:if(N=T.payload,typeof N=="function"){v=N.call(_,v,m);break e}v=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=T.payload,m=typeof N=="function"?N.call(_,v,m):N,m==null)break e;v=ie({},v,m);break e;case 2:Kt=!0}}m=s.callback,m!==null&&(e.flags|=64,y&&(e.flags|=8192),y=n.callbacks,y===null?n.callbacks=[m]:y.push(m))}else y={lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=y,r=v):p=p.next=y,u|=m;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;y=s,s=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);p===null&&(r=v),n.baseState=r,n.firstBaseUpdate=d,n.lastBaseUpdate=p,i===null&&(n.shared.lanes=0),ha|=u,e.lanes=u,e.memoizedState=v}}function Bf(e,t){if(typeof e!="function")throw Error(S(191,e));e.call(t)}function Yf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Bf(a[e],t)}var ml=jt(null),pi=jt(0);function Cr(e,t){e=qt,te(pi,e),te(ml,t),qt=e|t.baseLanes}function yu(){te(pi,qt),te(ml,ml.current)}function gs(){qt=pi.current,Ne(ml),Ne(pi)}var tt=jt(null),ot=null;function $t(e){var t=e.alternate;te(oe,oe.current&1),te(tt,e),ot===null&&(t===null||ml.current!==null||t.memoizedState!==null)&&(ot=e)}function vu(e){te(oe,oe.current),te(tt,e),ot===null&&(ot=e)}function kf(e){e.tag===22?(te(oe,oe.current),te(tt,e),ot===null&&(ot=e)):Wt()}function Wt(){te(oe,oe.current),te(tt,tt.current)}function Ke(e){Ne(tt),ot===e&&(ot=null),Ne(oe)}var oe=jt(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gu(a)||Bu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yt=0,Y=null,I=null,de=null,vi=!1,cl=!1,Ma=!1,bi=0,rn=0,ul=null,Bh=0;function se(){throw Error(S(321))}function hs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!et(e[a],t[a]))return!1;return!0}function ps(e,t,a,l,n,i){return Yt=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,G.H=e===null||e.memoizedState===null?yd:zs,Ma=!1,i=a(l,n),Ma=!1,cl&&(i=qf(t,a,l,n)),Lf(e),i}function Lf(e){G.H=on;var t=I!==null&&I.next!==null;if(Yt=0,de=I=Y=null,vi=!1,rn=0,ul=null,t)throw Error(S(300));e===null||he||(e=e.dependencies,e!==null&&gi(e)&&(he=!0))}function qf(e,t,a,l){Y=e;var n=0;do{if(cl&&(ul=null),rn=0,cl=!1,25<=n)throw Error(S(301));if(n+=1,de=I=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}G.H=vd,i=t(a,l)}while(cl);return i}function Yh(){var e=G.H,t=e.useState()[0];return t=typeof t.then=="function"?jn(t):t,e=e.useState()[0],(I!==null?I.memoizedState:null)!==e&&(Y.flags|=1024),t}function ys(){var e=bi!==0;return bi=0,e}function vs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function bs(e){if(vi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vi=!1}Yt=0,de=I=Y=null,cl=!1,rn=bi=0,ul=null}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Y.memoizedState=de=e:de=de.next=e,de}function fe(){if(I===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=I.next;var t=de===null?Y.memoizedState:de.next;if(t!==null)de=t,I=e;else{if(e===null)throw Y.alternate===null?Error(S(467)):Error(S(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},de===null?Y.memoizedState=de=e:de=de.next=e}return de}function Ki(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jn(e){var t=rn;return rn+=1,ul===null&&(ul=[]),e=Rf(ul,e,t),t=Y,(de===null?t.memoizedState:de.next)===null&&(t=t.alternate,G.H=t===null||t.memoizedState===null?yd:zs),e}function Ji(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jn(e);if(e.$$typeof===_t)return Ce(e)}throw Error(S(438,String(e)))}function xs(e){var t=null,a=Y.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=Y.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ki(),Y.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ag;return t.index++,a}function kt(e,t){return typeof t=="function"?t(e):t}function Wn(e){var t=fe();return Ss(t,I,e)}function Ss(e,t,a){var l=e.queue;if(l===null)throw Error(S(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,r=null,d=t,p=!1;do{var v=d.lane&-536870913;if(v!==d.lane?(Q&v)===v:(Yt&v)===v){var m=d.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),v===dl&&(p=!0);else if((Yt&m)===m){d=d.next,m===dl&&(p=!0);continue}else v={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=v,u=i):r=r.next=v,Y.lanes|=m,ha|=m;v=d.action,Ma&&a(i,v),i=d.hasEagerState?d.eagerState:a(i,v)}else m={lane:v,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=m,u=i):r=r.next=m,Y.lanes|=v,ha|=v;d=d.next}while(d!==null&&d!==t);if(r===null?u=i:r.next=s,!et(i,e.memoizedState)&&(he=!0,p&&(a=nl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function jc(e){var t=fe(),a=t.queue;if(a===null)throw Error(S(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);et(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Xf(e,t,a){var l=Y,n=fe(),i=Z;if(i){if(a===void 0)throw Error(S(407));a=a()}else a=t();var u=!et((I||n).memoizedState,a);if(u&&(n.memoizedState=a,he=!0),n=n.queue,Ns(Vf.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||de!==null&&de.memoizedState.tag&1){if(l.flags|=2048,gl(9,{destroy:void 0},Zf.bind(null,l,n,a,t),null),ee===null)throw Error(S(349));i||Yt&127||Qf(l,t,a)}return a}function Qf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Y.updateQueue,t===null?(t=Ki(),Y.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Zf(e,t,a,l){t.value=a,t.getSnapshot=l,Kf(t)&&Jf(e)}function Vf(e,t,a){return a(function(){Kf(t)&&Jf(e)})}function Kf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!et(e,a)}catch{return!0}}function Jf(e){var t=Ha(e,2);t!==null&&ke(t,e,2)}function bu(e){var t=_e();if(typeof e=="function"){var a=e;if(e=a(),Ma){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},t}function $f(e,t,a,l){return e.baseState=a,Ss(e,I,typeof l=="function"?l:kt)}function kh(e,t,a,l,n){if(Wi(e))throw Error(S(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};G.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Wf(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Wf(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=G.T,u={};G.T=u;try{var s=a(n,l),r=G.S;r!==null&&r(u,s),Dr(e,t,s)}catch(d){xu(e,t,d)}finally{i!==null&&u.types!==null&&(i.types=u.types),G.T=i}}else try{i=a(n,l),Dr(e,t,i)}catch(d){xu(e,t,d)}}function Dr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Or(e,t,l)},function(l){return xu(e,t,l)}):Or(e,t,a)}function Or(e,t,a){t.status="fulfilled",t.value=a,Ff(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Wf(e,a)))}function xu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ff(t),t=t.next;while(t!==l)}e.action=null}function Ff(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function If(e,t){return t}function Mr(e,t){if(Z){var a=ee.formState;if(a!==null){e:{var l=Y;if(Z){if(le){t:{for(var n=le,i=rt;n.nodeType!==8;){if(!i){n=null;break t}if(n=ft(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){le=ft(n.nextSibling),l=n.data==="F!";break e}}ma(l)}l=!1}l&&(t=a[0])}}return a=_e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:If,lastRenderedState:t},a.queue=l,a=gd.bind(null,Y,l),l.dispatch=a,l=bu(!1),i=Es.bind(null,Y,!1,l.queue),l=_e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=kh.bind(null,Y,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function _r(e){var t=fe();return Pf(t,I,e)}function Pf(e,t,a){if(t=Ss(e,t,If)[0],e=Wn(kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=jn(t)}catch(u){throw u===Al?Vi:u}else l=t;t=fe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(Y.flags|=2048,gl(9,{destroy:void 0},Lh.bind(null,n,a),null)),[l,i,e]}function Lh(e,t){e.action=t}function wr(e){var t=fe(),a=I;if(a!==null)return Pf(t,a,e);fe(),t=t.memoizedState,a=fe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function gl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=Y.updateQueue,t===null&&(t=Ki(),Y.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function ed(){return fe().memoizedState}function Fn(e,t,a,l){var n=_e();Y.flags|=e,n.memoizedState=gl(1|t,{destroy:void 0},a,l===void 0?null:l)}function $i(e,t,a,l){var n=fe();l=l===void 0?null:l;var i=n.memoizedState.inst;I!==null&&l!==null&&hs(l,I.memoizedState.deps)?n.memoizedState=gl(t,i,a,l):(Y.flags|=e,n.memoizedState=gl(1|t,i,a,l))}function Ur(e,t){Fn(8390656,8,e,t)}function Ns(e,t){$i(2048,8,e,t)}function qh(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=Ki(),Y.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function td(e){var t=fe().memoizedState;return qh({ref:t,nextImpl:e}),function(){if(V&2)throw Error(S(440));return t.impl.apply(void 0,arguments)}}function ad(e,t){return $i(4,2,e,t)}function ld(e,t){return $i(4,4,e,t)}function nd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function id(e,t,a){a=a!=null?a.concat([e]):null,$i(4,4,nd.bind(null,t,e),a)}function js(){}function cd(e,t){var a=fe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&hs(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function ud(e,t){var a=fe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&hs(t,l[1]))return l[0];if(l=e(),Ma){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[l,t],l}function As(e,t,a){return a===void 0||Yt&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=a,e=$d(),Y.lanes|=e,ha|=e,a)}function sd(e,t,a,l){return et(a,t)?a:ml.current!==null?(e=As(e,a,l),et(e,t)||(he=!0),e):!(Yt&42)||Yt&1073741824&&!(Q&261930)?(he=!0,e.memoizedState=a):(e=$d(),Y.lanes|=e,ha|=e,t)}function rd(e,t,a,l,n){var i=K.p;K.p=i!==0&&8>i?i:8;var u=G.T,s={};G.T=s,Es(e,!1,t,a);try{var r=n(),d=G.S;if(d!==null&&d(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var p=Gh(r,l);$l(e,t,p,Pe(e))}else $l(e,t,l,Pe(e))}catch(v){$l(e,t,{then:function(){},status:"rejected",reason:v},Pe())}finally{K.p=i,u!==null&&s.types!==null&&(u.types=s.types),G.T=u}}function Xh(){}function Su(e,t,a,l){if(e.tag!==5)throw Error(S(476));var n=od(e).queue;rd(e,n,t,ja,a===null?Xh:function(){return fd(e),a(l)})}function od(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ja,baseState:ja,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:ja},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fd(e){var t=od(e);t.next===null&&(t=e.alternate.memoizedState),$l(e,t.next.queue,{},Pe())}function Ts(){return Ce(mn)}function dd(){return fe().memoizedState}function md(){return fe().memoizedState}function Qh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Pe();e=ia(a);var l=ca(t,e,a);l!==null&&(ke(l,t,a),Vl(l,t,a)),t={cache:os()},e.payload=t;return}t=t.return}}function Zh(e,t,a){var l=Pe();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wi(e)?hd(t,a):(a=cs(e,t,a,l),a!==null&&(ke(a,e,l),pd(a,t,l)))}function gd(e,t,a){var l=Pe();$l(e,t,a,l)}function $l(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wi(e))hd(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,et(s,u))return Zi(e,t,n,0),ee===null&&Qi(),!1}catch{}finally{}if(a=cs(e,t,n,l),a!==null)return ke(a,e,l),pd(a,t,l),!0}return!1}function Es(e,t,a,l){if(l={lane:2,revertLane:Rs(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Wi(e)){if(t)throw Error(S(479))}else t=cs(e,a,l,2),t!==null&&ke(t,e,2)}function Wi(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function hd(e,t){cl=vi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function pd(e,t,a){if(a&4194048){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ef(e,a)}}var on={readContext:Ce,use:Ji,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useLayoutEffect:se,useInsertionEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useSyncExternalStore:se,useId:se,useHostTransitionStatus:se,useFormState:se,useActionState:se,useOptimistic:se,useMemoCache:se,useCacheRefresh:se};on.useEffectEvent=se;var yd={readContext:Ce,use:Ji,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Ur,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Fn(4194308,4,nd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Fn(4194308,4,e,t)},useInsertionEffect:function(e,t){Fn(4,2,e,t)},useMemo:function(e,t){var a=_e();t=t===void 0?null:t;var l=e();if(Ma){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=_e();if(a!==void 0){var n=a(t);if(Ma){It(!0);try{a(t)}finally{It(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Zh.bind(null,Y,e),[l.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:function(e){e=bu(e);var t=e.queue,a=gd.bind(null,Y,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:js,useDeferredValue:function(e,t){var a=_e();return As(a,e,t)},useTransition:function(){var e=bu(!1);return e=rd.bind(null,Y,e.queue,!0,!1),_e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=Y,n=_e();if(Z){if(a===void 0)throw Error(S(407));a=a()}else{if(a=t(),ee===null)throw Error(S(349));Q&127||Qf(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Ur(Vf.bind(null,l,i,e),[e]),l.flags|=2048,gl(9,{destroy:void 0},Zf.bind(null,l,i,a,t),null),a},useId:function(){var e=_e(),t=ee.identifierPrefix;if(Z){var a=bt,l=vt;a=(l&~(1<<32-Ie(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=bi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Bh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Mr,useActionState:Mr,useOptimistic:function(e){var t=_e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Es.bind(null,Y,!0,a),a.dispatch=t,[e,t]},useMemoCache:xs,useCacheRefresh:function(){return _e().memoizedState=Qh.bind(null,Y)},useEffectEvent:function(e){var t=_e(),a={impl:e};return t.memoizedState=a,function(){if(V&2)throw Error(S(440));return a.impl.apply(void 0,arguments)}}},zs={readContext:Ce,use:Ji,useCallback:cd,useContext:Ce,useEffect:Ns,useImperativeHandle:id,useInsertionEffect:ad,useLayoutEffect:ld,useMemo:ud,useReducer:Wn,useRef:ed,useState:function(){return Wn(kt)},useDebugValue:js,useDeferredValue:function(e,t){var a=fe();return sd(a,I.memoizedState,e,t)},useTransition:function(){var e=Wn(kt)[0],t=fe().memoizedState;return[typeof e=="boolean"?e:jn(e),t]},useSyncExternalStore:Xf,useId:dd,useHostTransitionStatus:Ts,useFormState:_r,useActionState:_r,useOptimistic:function(e,t){var a=fe();return $f(a,I,e,t)},useMemoCache:xs,useCacheRefresh:md};zs.useEffectEvent=td;var vd={readContext:Ce,use:Ji,useCallback:cd,useContext:Ce,useEffect:Ns,useImperativeHandle:id,useInsertionEffect:ad,useLayoutEffect:ld,useMemo:ud,useReducer:jc,useRef:ed,useState:function(){return jc(kt)},useDebugValue:js,useDeferredValue:function(e,t){var a=fe();return I===null?As(a,e,t):sd(a,I.memoizedState,e,t)},useTransition:function(){var e=jc(kt)[0],t=fe().memoizedState;return[typeof e=="boolean"?e:jn(e),t]},useSyncExternalStore:Xf,useId:dd,useHostTransitionStatus:Ts,useFormState:wr,useActionState:wr,useOptimistic:function(e,t){var a=fe();return I!==null?$f(a,I,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:xs,useCacheRefresh:md};vd.useEffectEvent=td;function Ac(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:ie({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Nu={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Pe(),n=ia(l);n.payload=t,a!=null&&(n.callback=a),t=ca(e,n,l),t!==null&&(ke(t,e,l),Vl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Pe(),n=ia(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ca(e,n,l),t!==null&&(ke(t,e,l),Vl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Pe(),l=ia(a);l.tag=2,t!=null&&(l.callback=t),t=ca(e,l,a),t!==null&&(ke(t,e,a),Vl(t,e,a))}};function Rr(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!nn(a,l)||!nn(n,i):!0}function Hr(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Nu.enqueueReplaceState(t,t.state,null)}function _a(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=ie({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function bd(e){fi(e)}function xd(e){console.error(e)}function Sd(e){fi(e)}function xi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Gr(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ju(e,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){xi(e,t)},a}function Nd(e){return e=ia(e),e.tag=3,e}function jd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Gr(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Gr(t,a,l),typeof n!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Vh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&jl(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return ot===null?Ti():a.alternate===null&&re===0&&(re=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===hi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Rc(e,l,n)),!1;case 22:return a.flags|=65536,l===hi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Rc(e,l,n)),!1}throw Error(S(435,a.tag))}return Rc(e,l,n),Ti(),!1}if(Z)return t=tt.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==ou&&(e=Error(S(422),{cause:l}),un(st(e,a)))):(l!==ou&&(t=Error(S(423),{cause:l}),un(st(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=st(l,a),n=ju(e.stateNode,l,n),Nc(e,n),re!==4&&(re=2)),!1;var i=Error(S(520),{cause:l});if(i=st(i,a),Il===null?Il=[i]:Il.push(i),re!==4&&(re=2),t===null)return!0;l=st(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=ju(a.stateNode,l,e),Nc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ua===null||!ua.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Nd(n),jd(n,e,a,l),Nc(a,n),!1}a=a.return}while(a!==null);return!1}var Cs=Error(S(461)),he=!1;function Te(e,t,a,l){t.child=e===null?Gf(t,null,a,l):Oa(t,e.child,a,l)}function Br(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return Da(t),l=ps(e,t,a,u,i,n),s=ys(),e!==null&&!he?(vs(e,t,n),Lt(e,t,n)):(Z&&s&&ss(t),t.flags|=1,Te(e,t,l,n),t.child)}function Yr(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!us(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Ad(e,t,i,l,n)):(e=Jn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ds(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:nn,a(u,l)&&e.ref===t.ref)return Lt(e,t,n)}return t.flags|=1,e=Rt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Ad(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(nn(i,l)&&e.ref===t.ref)if(he=!1,t.pendingProps=l=i,Ds(e,n))e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Lt(e,t,n)}return Au(e,t,a,l,n)}function Td(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return kr(e,t,i,a,l)}if(a&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$n(t,i!==null?i.cachePool:null),i!==null?Cr(t,i):yu(),kf(t);else return l=t.lanes=536870912,kr(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?($n(t,i.cachePool),Cr(t,i),Wt(),t.memoizedState=null):(e!==null&&$n(t,null),yu(),Wt());return Te(e,t,n,a),t.child}function Yl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function kr(e,t,a,l,n){var i=fs();return i=i===null?null:{parent:ge._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&$n(t,null),yu(),kf(t),e!==null&&jl(e,t,l,!0),t.childLanes=n,null}function In(e,t){return t=Si({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lr(e,t,a){return Oa(t,e.child,null,a),e=In(t,t.pendingProps),e.flags|=2,Ke(t),t.memoizedState=null,e}function Kh(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Z){if(l.mode==="hidden")return e=In(t,l),t.lanes=536870912,Yl(null,e);if(vu(t),(e=le)?(e=ym(e,rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:vt,overflow:bt}:null,retryLane:536870912,hydrationErrors:null},a=Of(e),a.return=t,t.child=a,ze=t,le=null)):e=null,e===null)throw ma(t);return t.lanes=536870912,null}return In(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(vu(t),n)if(t.flags&256)t.flags&=-257,t=Lr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(S(558));else if(he||jl(e,t,a,!1),n=(a&e.childLanes)!==0,he||n){if(l=ee,l!==null&&(u=tf(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ha(e,u),ke(l,e,u),Cs;Ti(),t=Lr(e,t,a)}else e=i.treeContext,le=ft(u.nextSibling),ze=t,Z=!0,na=null,rt=!1,e!==null&&_f(t,e),t=In(t,l),t.flags|=4096;return t}return e=Rt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Pn(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(S(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Au(e,t,a,l,n){return Da(t),a=ps(e,t,a,l,void 0,n),l=ys(),e!==null&&!he?(vs(e,t,n),Lt(e,t,n)):(Z&&l&&ss(t),t.flags|=1,Te(e,t,a,n),t.child)}function qr(e,t,a,l,n,i){return Da(t),t.updateQueue=null,a=qf(t,l,a,n),Lf(e),l=ys(),e!==null&&!he?(vs(e,t,i),Lt(e,t,i)):(Z&&l&&ss(t),t.flags|=1,Te(e,t,a,i),t.child)}function Xr(e,t,a,l,n){if(Da(t),t.stateNode===null){var i=Fa,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ce(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Nu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ms(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ce(u):Fa,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Ac(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Nu.enqueueReplaceState(i,i.state,null),Jl(t,l,i,n),Kl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,r=_a(a,s);i.props=r;var d=i.context,p=a.contextType;u=Fa,typeof p=="object"&&p!==null&&(u=Ce(p));var v=a.getDerivedStateFromProps;p=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||d!==u)&&Hr(t,i,l,u),Kt=!1;var m=t.memoizedState;i.state=m,Jl(t,l,i,n),Kl(),d=t.memoizedState,s||m!==d||Kt?(typeof v=="function"&&(Ac(t,a,v,l),d=t.memoizedState),(r=Kt||Rr(t,a,r,l,m,d,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=d),i.props=l,i.state=d,i.context=u,l=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,hu(e,t),u=t.memoizedProps,p=_a(a,u),i.props=p,v=t.pendingProps,m=i.context,d=a.contextType,r=Fa,typeof d=="object"&&d!==null&&(r=Ce(d)),s=a.getDerivedStateFromProps,(d=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||m!==r)&&Hr(t,i,l,r),Kt=!1,m=t.memoizedState,i.state=m,Jl(t,l,i,n),Kl();var y=t.memoizedState;u!==v||m!==y||Kt||e!==null&&e.dependencies!==null&&gi(e.dependencies)?(typeof s=="function"&&(Ac(t,a,s,l),y=t.memoizedState),(p=Kt||Rr(t,a,p,l,m,y,r)||e!==null&&e.dependencies!==null&&gi(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,y,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,y,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=y),i.props=l,i.state=y,i.context=r,l=p):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Pn(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Oa(t,e.child,null,n),t.child=Oa(t,null,a,n)):Te(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Lt(e,t,n),e}function Qr(e,t,a,l){return Ca(),t.flags|=256,Te(e,t,a,l),t.child}var Tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ec(e){return{baseLanes:e,cachePool:Uf()}}function zc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=$e),e}function Ed(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(oe.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Z){if(n?$t(t):Wt(),(e=le)?(e=ym(e,rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:vt,overflow:bt}:null,retryLane:536870912,hydrationErrors:null},a=Of(e),a.return=t,t.child=a,ze=t,le=null)):e=null,e===null)throw ma(t);return Bu(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(Wt(),n=t.mode,s=Si({mode:"hidden",children:s},n),l=Aa(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=Ec(a),l.childLanes=zc(e,u,a),t.memoizedState=Tc,Yl(null,l)):($t(t),Tu(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(i)t.flags&256?($t(t),t.flags&=-257,t=Cc(e,t,a)):t.memoizedState!==null?(Wt(),t.child=e.child,t.flags|=128,t=null):(Wt(),s=l.fallback,n=t.mode,l=Si({mode:"visible",children:l.children},n),s=Aa(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Oa(t,e.child,null,a),l=t.child,l.memoizedState=Ec(a),l.childLanes=zc(e,u,a),t.memoizedState=Tc,t=Yl(null,l));else if($t(t),Bu(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var d=u.dgst;u=d,l=Error(S(419)),l.stack="",l.digest=u,un({value:l,source:null,stack:null}),t=Cc(e,t,a)}else if(he||jl(e,t,a,!1),u=(a&e.childLanes)!==0,he||u){if(u=ee,u!==null&&(l=tf(u,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,Ha(e,l),ke(u,e,l),Cs;Gu(s)||Ti(),t=Cc(e,t,a)}else Gu(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,le=ft(s.nextSibling),ze=t,Z=!0,na=null,rt=!1,e!==null&&_f(t,e),t=Tu(t,l.children),t.flags|=4096);return t}return n?(Wt(),s=l.fallback,n=t.mode,r=e.child,d=r.sibling,l=Rt(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,d!==null?s=Rt(d,s):(s=Aa(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,Yl(null,l),l=t.child,s=e.child.memoizedState,s===null?s=Ec(a):(n=s.cachePool,n!==null?(r=ge._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Uf(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=zc(e,u,a),t.memoizedState=Tc,Yl(e.child,l)):($t(t),a=e.child,e=a.sibling,a=Rt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Tu(e,t){return t=Si({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Si(e,t){return e=Je(22,e,null,t),e.lanes=0,e}function Cc(e,t,a){return Oa(t,e.child,null,a),e=Tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zr(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),du(e.return,t,a)}function Dc(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function zd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=oe.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,te(oe,u),Te(e,t,l,a),l=Z?cn:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zr(e,a,t);else if(e.tag===19)Zr(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&yi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Dc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&yi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Dc(t,!0,a,null,i,l);break;case"together":Dc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Lt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,!(a&t.childLanes))if(e!==null){if(jl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,a=Rt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Rt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ds(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&gi(e)))}function Jh(e,t,a){switch(t.tag){case 3:ui(t,t.stateNode.containerInfo),Jt(t,ge,e.memoizedState.cache),Ca();break;case 27:case 5:Pc(t);break;case 4:ui(t,t.stateNode.containerInfo);break;case 10:Jt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?($t(t),t.flags|=128,null):a&t.child.childLanes?Ed(e,t,a):($t(t),e=Lt(e,t,a),e!==null?e.sibling:null);$t(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(jl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return zd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),te(oe,oe.current),l)break;return null;case 22:return t.lanes=0,Td(e,t,a,t.pendingProps);case 24:Jt(t,ge,e.memoizedState.cache)}return Lt(e,t,a)}function Cd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)he=!0;else{if(!Ds(e,a)&&!(t.flags&128))return he=!1,Jh(e,t,a);he=!!(e.flags&131072)}else he=!1,Z&&t.flags&1048576&&Mf(t,cn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Sa(t.elementType),t.type=e,typeof e=="function")us(e)?(l=_a(e,l),t.tag=1,t=Xr(null,t,e,l,a)):(t.tag=0,t=Au(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Ku){t.tag=11,t=Br(null,t,e,l,a);break e}else if(n===Ju){t.tag=14,t=Yr(null,t,e,l,a);break e}}throw t=Fc(e)||e,Error(S(306,t,""))}}return t;case 0:return Au(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=_a(l,t.pendingProps),Xr(e,t,l,n,a);case 3:e:{if(ui(t,t.stateNode.containerInfo),e===null)throw Error(S(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,hu(e,t),Jl(t,l,null,a);var u=t.memoizedState;if(l=u.cache,Jt(t,ge,l),l!==i.cache&&mu(t,[ge],a,!0),Kl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Qr(e,t,l,a);break e}else if(l!==n){n=st(Error(S(424)),t),un(n),t=Qr(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=ft(e.firstChild),ze=t,Z=!0,na=null,rt=!0,a=Gf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ca(),l===n){t=Lt(e,t,a);break e}Te(e,t,l,a)}t=t.child}return t;case 26:return Pn(e,t),e===null?(a=fo(t.type,null,t.pendingProps,null))?t.memoizedState=a:Z||(a=t.type,e=t.pendingProps,l=Di(la.current).createElement(a),l[Ee]=t,l[Le]=e,De(l,a,e),Se(l),t.stateNode=l):t.memoizedState=fo(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pc(t),e===null&&Z&&(l=t.stateNode=vm(t.type,t.pendingProps,la.current),ze=t,rt=!0,n=le,ya(t.type)?(Yu=n,le=ft(l.firstChild)):le=n),Te(e,t,t.pendingProps.children,a),Pn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Z&&((n=l=le)&&(l=Ap(l,t.type,t.pendingProps,rt),l!==null?(t.stateNode=l,ze=t,le=ft(l.firstChild),rt=!1,n=!0):n=!1),n||ma(t)),Pc(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Ru(n,i)?l=null:u!==null&&Ru(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=ps(e,t,Yh,null,null,a),mn._currentValue=n),Pn(e,t),Te(e,t,l,a),t.child;case 6:return e===null&&Z&&((e=a=le)&&(a=Tp(a,t.pendingProps,rt),a!==null?(t.stateNode=a,ze=t,le=null,e=!0):e=!1),e||ma(t)),null;case 13:return Ed(e,t,a);case 4:return ui(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Oa(t,null,l,a):Te(e,t,l,a),t.child;case 11:return Br(e,t,t.type,t.pendingProps,a);case 7:return Te(e,t,t.pendingProps,a),t.child;case 8:return Te(e,t,t.pendingProps.children,a),t.child;case 12:return Te(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Jt(t,t.type,l.value),Te(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Da(t),n=Ce(n),l=l(n),t.flags|=1,Te(e,t,l,a),t.child;case 14:return Yr(e,t,t.type,t.pendingProps,a);case 15:return Ad(e,t,t.type,t.pendingProps,a);case 19:return zd(e,t,a);case 31:return Kh(e,t,a);case 22:return Td(e,t,a,t.pendingProps);case 24:return Da(t),l=Ce(ge),e===null?(n=fs(),n===null&&(n=ee,i=os(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ms(t),Jt(t,ge,n)):(e.lanes&a&&(hu(e,t),Jl(t,null,null,a),Kl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Jt(t,ge,l)):(l=i.cache,Jt(t,ge,l),l!==n.cache&&mu(t,[ge],a,!0))),Te(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(S(156,t.tag))}function Et(e){e.flags|=4}function Oc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Id())e.flags|=8192;else throw Ea=hi,ds}else e.flags&=-16777217}function Vr(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Sm(t))if(Id())e.flags|=8192;else throw Ea=hi,ds}function Bn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Io():536870912,e.lanes|=t,hl|=t)}function wl(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function $h(e,t,a){var l=t.pendingProps;switch(rs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ae(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ht(ge),rl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ba(t)?Et(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Sc())),ae(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Et(t),i!==null?(ae(t),Vr(t,i)):(ae(t),Oc(t,n,null,l,a))):i?i!==e.memoizedState?(Et(t),ae(t),Vr(t,i)):(ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Et(t),ae(t),Oc(t,n,e,l,a)),null;case 27:if(si(t),a=la.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Et(t);else{if(!l){if(t.stateNode===null)throw Error(S(166));return ae(t),null}e=St.current,Ba(t)?Sr(t):(e=vm(n,l,a),t.stateNode=e,Et(t))}return ae(t),null;case 5:if(si(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Et(t);else{if(!l){if(t.stateNode===null)throw Error(S(166));return ae(t),null}if(i=St.current,Ba(t))Sr(t);else{var u=Di(la.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Ee]=t,i[Le]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(De(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Et(t)}}return ae(t),Oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Et(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(S(166));if(e=la.current,Ba(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=ze,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ee]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||gm(e.nodeValue,a)),e||ma(t,!0)}else e=Di(e).createTextNode(l),e[Ee]=t,t.stateNode=e}return ae(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ba(t),a!==null){if(e===null){if(!l)throw Error(S(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(557));e[Ee]=t}else Ca(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),e=!1}else a=Sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ke(t),t):(Ke(t),null);if(t.flags&128)throw Error(S(558))}return ae(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ba(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(S(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(S(317));n[Ee]=t}else Ca(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),n=!1}else n=Sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ke(t),t):(Ke(t),null)}return Ke(t),t.flags&128?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Bn(t,t.updateQueue),ae(t),null);case 4:return rl(),e===null&&Hs(t.stateNode.containerInfo),ae(t),null;case 10:return Ht(t.type),ae(t),null;case 19:if(Ne(oe),l=t.memoizedState,l===null)return ae(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)wl(l,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=yi(e),i!==null){for(t.flags|=128,wl(l,!1),e=i.updateQueue,t.updateQueue=e,Bn(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Df(a,e),a=a.sibling;return te(oe,oe.current&1|2),Z&&Ot(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&We()>ji&&(t.flags|=128,n=!0,wl(l,!1),t.lanes=4194304)}else{if(!n)if(e=yi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Bn(t,e),wl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Z)return ae(t),null}else 2*We()-l.renderingStartTime>ji&&a!==536870912&&(t.flags|=128,n=!0,wl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=We(),e.sibling=null,a=oe.current,te(oe,n?a&1|2:a&1),Z&&Ot(t,l.treeForkCount),e):(ae(t),null);case 22:case 23:return Ke(t),gs(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?a&536870912&&!(t.flags&128)&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),a=t.updateQueue,a!==null&&Bn(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Ne(Ta),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ht(ge),ae(t),null;case 25:return null;case 30:return null}throw Error(S(156,t.tag))}function Wh(e,t){switch(rs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ht(ge),rl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return si(t),null;case 31:if(t.memoizedState!==null){if(Ke(t),t.alternate===null)throw Error(S(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ke(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(oe),null;case 4:return rl(),null;case 10:return Ht(t.type),null;case 22:case 23:return Ke(t),gs(),e!==null&&Ne(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ht(ge),null;case 25:return null;default:return null}}function Dd(e,t){switch(rs(t),t.tag){case 3:Ht(ge),rl();break;case 26:case 27:case 5:si(t);break;case 4:rl();break;case 31:t.memoizedState!==null&&Ke(t);break;case 13:Ke(t);break;case 19:Ne(oe);break;case 10:Ht(t.type);break;case 22:case 23:Ke(t),gs(),e!==null&&Ne(Ta);break;case 24:Ht(ge)}}function An(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){W(t,t.return,s)}}function ga(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var r=a,d=s;try{d()}catch(p){W(n,r,p)}}}l=l.next}while(l!==i)}}catch(p){W(t,t.return,p)}}function Od(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Yf(t,a)}catch(l){W(e,e.return,l)}}}function Md(e,t,a){a.props=_a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){W(e,t,l)}}function Wl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){W(e,t,n)}}function xt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){W(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){W(e,t,n)}else a.current=null}function _d(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){W(e,e.return,n)}}function Mc(e,t,a){try{var l=e.stateNode;vp(l,e.type,a,t),l[Le]=t}catch(n){W(e,e.return,n)}}function wd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function _c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=wt));else if(l!==4&&(l===27&&ya(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Eu(e,t,a),e=e.sibling;e!==null;)Eu(e,t,a),e=e.sibling}function Ni(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ni(e,t,a),e=e.sibling;e!==null;)Ni(e,t,a),e=e.sibling}function Ud(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);De(t,l,a),t[Ee]=e,t[Le]=a}catch(i){W(e,e.return,i)}}var Mt=!1,me=!1,wc=!1,Kr=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Fh(e,t){if(e=e.containerInfo,wu=wi,e=Sf(e),ns(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,r=-1,d=0,p=0,v=e,m=null;t:for(;;){for(var y;v!==a||n!==0&&v.nodeType!==3||(s=u+n),v!==i||l!==0&&v.nodeType!==3||(r=u+l),v.nodeType===3&&(u+=v.nodeValue.length),(y=v.firstChild)!==null;)m=v,v=y;for(;;){if(v===e)break t;if(m===a&&++d===n&&(s=u),m===i&&++p===l&&(r=u),(y=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=y}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uu={focusedElem:e,selectionRange:a},wi=!1,xe=t;xe!==null;)if(t=xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xe=e;else for(;xe!==null;){switch(t=xe,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var N=_a(a.type,n);e=l.getSnapshotBeforeUpdate(N,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(T){W(a,a.return,T)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Hu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(S(163))}if(e=t.sibling,e!==null){e.return=t.return,xe=e;break}xe=t.return}}function Rd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ct(e,a),l&4&&An(5,a);break;case 1:if(Ct(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){W(a,a.return,u)}else{var n=_a(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){W(a,a.return,u)}}l&64&&Od(a),l&512&&Wl(a,a.return);break;case 3:if(Ct(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Yf(e,t)}catch(u){W(a,a.return,u)}}break;case 27:t===null&&l&4&&Ud(a);case 26:case 5:Ct(e,a),t===null&&l&4&&_d(a),l&512&&Wl(a,a.return);break;case 12:Ct(e,a);break;case 31:Ct(e,a),l&4&&Bd(e,a);break;case 13:Ct(e,a),l&4&&Yd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=cp.bind(null,a),Ep(e,a))));break;case 22:if(l=a.memoizedState!==null||Mt,!l){t=t!==null&&t.memoizedState!==null||me,n=Mt;var i=me;Mt=l,(me=t)&&!i?Dt(e,a,(a.subtreeFlags&8772)!==0):Ct(e,a),Mt=n,me=i}break;case 30:break;default:Ct(e,a)}}function Hd(e){var t=e.alternate;t!==null&&(e.alternate=null,Hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Iu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,Be=!1;function zt(e,t,a){for(a=a.child;a!==null;)Gd(e,t,a),a=a.sibling}function Gd(e,t,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(yn,a)}catch{}switch(a.tag){case 26:me||xt(a,t),zt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:me||xt(a,t);var l=ce,n=Be;ya(a.type)&&(ce=a.stateNode,Be=!1),zt(e,t,a),en(a.stateNode),ce=l,Be=n;break;case 5:me||xt(a,t);case 6:if(l=ce,n=Be,ce=null,zt(e,t,a),ce=l,Be=n,ce!==null)if(Be)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(a.stateNode)}catch(i){W(a,t,i)}else try{ce.removeChild(a.stateNode)}catch(i){W(a,t,i)}break;case 18:ce!==null&&(Be?(e=ce,co(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bl(e)):co(ce,a.stateNode));break;case 4:l=ce,n=Be,ce=a.stateNode.containerInfo,Be=!0,zt(e,t,a),ce=l,Be=n;break;case 0:case 11:case 14:case 15:ga(2,a,t),me||ga(4,a,t),zt(e,t,a);break;case 1:me||(xt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Md(a,t,l)),zt(e,t,a);break;case 21:zt(e,t,a);break;case 22:me=(l=me)||a.memoizedState!==null,zt(e,t,a),me=l;break;default:zt(e,t,a)}}function Bd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bl(e)}catch(a){W(t,t.return,a)}}}function Yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bl(e)}catch(a){W(t,t.return,a)}}function Ih(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Kr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Kr),t;default:throw Error(S(435,e.tag))}}function Yn(e,t){var a=Ih(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=up.bind(null,e,l);l.then(n,n)}})}function He(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(ya(s.type)){ce=s.stateNode,Be=!1;break e}break;case 5:ce=s.stateNode,Be=!1;break e;case 3:case 4:ce=s.stateNode.containerInfo,Be=!0;break e}s=s.return}if(ce===null)throw Error(S(160));Gd(i,u,n),ce=null,Be=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)kd(t,e),t=t.sibling}var gt=null;function kd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:He(t,e),Ge(e),l&4&&(ga(3,e,e.return),An(3,e),ga(5,e,e.return));break;case 1:He(t,e),Ge(e),l&512&&(me||a===null||xt(a,a.return)),l&64&&Mt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=gt;if(He(t,e),Ge(e),l&512&&(me||a===null||xt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[xn]||i[Ee]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),De(i,l,a),i[Ee]=e,Se(i),l=i;break e;case"link":var u=go("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(l),De(i,l,a),n.head.appendChild(i);break;case"meta":if(u=go("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(l),De(i,l,a),n.head.appendChild(i);break;default:throw Error(S(468,l))}i[Ee]=e,Se(i),l=i}e.stateNode=l}else ho(n,e.type,e.stateNode);else e.stateNode=mo(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?ho(n,e.type,e.stateNode):mo(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Mc(e,e.memoizedProps,a.memoizedProps)}break;case 27:He(t,e),Ge(e),l&512&&(me||a===null||xt(a,a.return)),a!==null&&l&4&&Mc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(He(t,e),Ge(e),l&512&&(me||a===null||xt(a,a.return)),e.flags&32){n=e.stateNode;try{fl(n,"")}catch(N){W(e,e.return,N)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Mc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(wc=!0);break;case 6:if(He(t,e),Ge(e),l&4){if(e.stateNode===null)throw Error(S(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(N){W(e,e.return,N)}}break;case 3:if(ai=null,n=gt,gt=Oi(t.containerInfo),He(t,e),gt=n,Ge(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{bl(t.containerInfo)}catch(N){W(e,e.return,N)}wc&&(wc=!1,Ld(e));break;case 4:l=gt,gt=Oi(e.stateNode.containerInfo),He(t,e),Ge(e),gt=l;break;case 12:He(t,e),Ge(e);break;case 31:He(t,e),Ge(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yn(e,l)));break;case 13:He(t,e),Ge(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fi=We()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yn(e,l)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,d=Mt,p=me;if(Mt=d||n,me=p||r,He(t,e),me=p,Mt=d,Ge(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||r||Mt||me||Na(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=r.stateNode;var v=r.memoizedProps.style,m=v!=null&&v.hasOwnProperty("display")?v.display:null;s.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(N){W(r,r.return,N)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(N){W(r,r.return,N)}}}else if(t.tag===18){if(a===null){r=t;try{var y=r.stateNode;n?uo(y,!0):uo(r.stateNode,!1)}catch(N){W(r,r.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Yn(e,a))));break;case 19:He(t,e),Ge(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yn(e,l)));break;case 30:break;case 21:break;default:He(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(wd(l)){a=l;break}l=l.return}if(a==null)throw Error(S(160));switch(a.tag){case 27:var n=a.stateNode,i=_c(e);Ni(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(fl(u,""),a.flags&=-33);var s=_c(e);Ni(e,s,u);break;case 3:case 4:var r=a.stateNode.containerInfo,d=_c(e);Eu(e,d,r);break;default:throw Error(S(161))}}catch(p){W(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ld(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ld(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ct(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rd(e,t.alternate,t),t=t.sibling}function Na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),Na(t);break;case 1:xt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Md(t,t.return,a),Na(t);break;case 27:en(t.stateNode);case 26:case 5:xt(t,t.return),Na(t);break;case 22:t.memoizedState===null&&Na(t);break;case 30:Na(t);break;default:Na(t)}e=e.sibling}}function Dt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Dt(n,i,a),An(4,i);break;case 1:if(Dt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){W(l,l.return,d)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Bf(r[n],s)}catch(d){W(l,l.return,d)}}a&&u&64&&Od(i),Wl(i,i.return);break;case 27:Ud(i);case 26:case 5:Dt(n,i,a),a&&l===null&&u&4&&_d(i),Wl(i,i.return);break;case 12:Dt(n,i,a);break;case 31:Dt(n,i,a),a&&u&4&&Bd(n,i);break;case 13:Dt(n,i,a),a&&u&4&&Yd(n,i);break;case 22:i.memoizedState===null&&Dt(n,i,a),Wl(i,i.return);break;case 30:break;default:Dt(n,i,a)}t=t.sibling}}function Os(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Nn(a))}function Ms(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Nn(e))}function mt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qd(e,t,a,l),t=t.sibling}function qd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:mt(e,t,a,l),n&2048&&An(9,t);break;case 1:mt(e,t,a,l);break;case 3:mt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Nn(e)));break;case 12:if(n&2048){mt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){W(t,t.return,r)}}else mt(e,t,a,l);break;case 31:mt(e,t,a,l);break;case 13:mt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?mt(e,t,a,l):Fl(e,t):i._visibility&2?mt(e,t,a,l):(i._visibility|=2,La(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Os(u,t);break;case 24:mt(e,t,a,l),n&2048&&Ms(t.alternate,t);break;default:mt(e,t,a,l)}}function La(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=a,r=l,d=u.flags;switch(u.tag){case 0:case 11:case 15:La(i,u,s,r,n),An(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&2?La(i,u,s,r,n):Fl(i,u):(p._visibility|=2,La(i,u,s,r,n)),n&&d&2048&&Os(u.alternate,u);break;case 24:La(i,u,s,r,n),n&&d&2048&&Ms(u.alternate,u);break;default:La(i,u,s,r,n)}t=t.sibling}}function Fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Fl(a,l),n&2048&&Os(l.alternate,l);break;case 24:Fl(a,l),n&2048&&Ms(l.alternate,l);break;default:Fl(a,l)}t=t.sibling}}var kl=8192;function Ya(e,t,a){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)Xd(e,t,a),e=e.sibling}function Xd(e,t,a){switch(e.tag){case 26:Ya(e,t,a),e.flags&kl&&e.memoizedState!==null&&Bp(a,gt,e.memoizedState,e.memoizedProps);break;case 5:Ya(e,t,a);break;case 3:case 4:var l=gt;gt=Oi(e.stateNode.containerInfo),Ya(e,t,a),gt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=kl,kl=16777216,Ya(e,t,a),kl=l):Ya(e,t,a));break;default:Ya(e,t,a)}}function Qd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ul(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];xe=l,Vd(l,e)}Qd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zd(e),e=e.sibling}function Zd(e){switch(e.tag){case 0:case 11:case 15:Ul(e),e.flags&2048&&ga(9,e,e.return);break;case 3:Ul(e);break;case 12:Ul(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ei(e)):Ul(e);break;default:Ul(e)}}function ei(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];xe=l,Vd(l,e)}Qd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),ei(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ei(t));break;default:ei(t)}e=e.sibling}}function Vd(e,t){for(;xe!==null;){var a=xe;switch(a.tag){case 0:case 11:case 15:ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Nn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,xe=l;else e:for(a=e;xe!==null;){l=xe;var n=l.sibling,i=l.return;if(Hd(l),l===a){xe=null;break e}if(n!==null){n.return=i,xe=n;break e}xe=i}}}var Ph={getCacheForType:function(e){var t=Ce(ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ce(ge).controller.signal}},ep=typeof WeakMap=="function"?WeakMap:Map,V=0,ee=null,q=null,Q=0,$=0,Ve=null,ea=!1,Tl=!1,_s=!1,qt=0,re=0,ha=0,za=0,ws=0,$e=0,hl=0,Il=null,Ye=null,zu=!1,Fi=0,Kd=0,ji=1/0,Ai=null,ua=null,ye=0,sa=null,pl=null,Gt=0,Cu=0,Du=null,Jd=null,Pl=0,Ou=null;function Pe(){return V&2&&Q!==0?Q&-Q:G.T!==null?Rs():af()}function $d(){if($e===0)if(!(Q&536870912)||Z){var e=Mn;Mn<<=1,!(Mn&3932160)&&(Mn=262144),$e=e}else $e=536870912;return e=tt.current,e!==null&&(e.flags|=32),$e}function ke(e,t,a){(e===ee&&($===2||$===9)||e.cancelPendingCommit!==null)&&(yl(e,0),ta(e,Q,$e,!1)),bn(e,a),(!(V&2)||e!==ee)&&(e===ee&&(!(V&2)&&(za|=a),re===4&&ta(e,Q,$e,!1)),At(e))}function Wd(e,t,a){if(V&6)throw Error(S(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||vn(e,t),n=l?lp(e,t):Uc(e,t,!0),i=l;do{if(n===0){Tl&&!l&&ta(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!tp(a)){n=Uc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=Il;var r=s.current.memoizedState.isDehydrated;if(r&&(yl(s,u).flags|=256),u=Uc(s,u,!1),u!==2){if(_s&&!r){s.errorRecoveryDisabledLanes|=i,za|=i,n=4;break e}i=Ye,Ye=n,i!==null&&(Ye===null?Ye=i:Ye.push.apply(Ye,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){yl(e,0),ta(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(S(345));case 4:if((t&4194048)!==t)break;case 6:ta(l,t,$e,!ea);break e;case 2:Ye=null;break;case 3:case 5:break;default:throw Error(S(329))}if((t&62914560)===t&&(n=Fi+300-We(),10<n)){if(ta(l,t,$e,!ea),ki(l,0,!0)!==0)break e;Gt=t,l.timeoutHandle=pm(Jr.bind(null,l,a,Ye,Ai,zu,t,$e,za,hl,ea,i,"Throttled",-0,0),n);break e}Jr(l,a,Ye,Ai,zu,t,$e,za,hl,ea,i,null,-0,0)}}break}while(!0);At(e)}function Jr(e,t,a,l,n,i,u,s,r,d,p,v,m,y){if(e.timeoutHandle=-1,v=t.subtreeFlags,v&8192||(v&16785408)===16785408){v={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wt},Xd(t,i,v);var N=(i&62914560)===i?Fi-We():(i&4194048)===i?Kd-We():0;if(N=Yp(v,N),N!==null){Gt=i,e.cancelPendingCommit=N(Wr.bind(null,e,t,i,a,l,n,u,s,r,p,v,null,m,y)),ta(e,i,u,!d);return}}Wr(e,t,i,a,l,n,u,s,r)}function tp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!et(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ta(e,t,a,l){t&=~ws,t&=~za,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-Ie(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Po(e,a,t)}function Ii(){return V&6?!0:(Tn(0),!1)}function Us(){if(q!==null){if($===0)var e=q.return;else e=q,Ut=Ga=null,bs(e),il=null,sn=0,e=q;for(;e!==null;)Dd(e.alternate,e),e=e.return;q=null}}function yl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Sp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Gt=0,Us(),ee=e,q=a=Rt(e.current,null),Q=t,$=0,Ve=null,ea=!1,Tl=vn(e,t),_s=!1,hl=$e=ws=za=ha=re=0,Ye=Il=null,zu=!1,t&8&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Ie(l),i=1<<n;t|=e[n],l&=~i}return qt=t,Qi(),a}function Fd(e,t){Y=null,G.H=on,t===Al||t===Vi?(t=Er(),$=3):t===ds?(t=Er(),$=4):$=t===Cs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ve=t,q===null&&(re=1,xi(e,st(t,e.current)))}function Id(){var e=tt.current;return e===null?!0:(Q&4194048)===Q?ot===null:(Q&62914560)===Q||Q&536870912?e===ot:!1}function Pd(){var e=G.H;return G.H=on,e===null?on:e}function em(){var e=G.A;return G.A=Ph,e}function Ti(){re=4,ea||(Q&4194048)!==Q&&tt.current!==null||(Tl=!0),!(ha&134217727)&&!(za&134217727)||ee===null||ta(ee,Q,$e,!1)}function Uc(e,t,a){var l=V;V|=2;var n=Pd(),i=em();(ee!==e||Q!==t)&&(Ai=null,yl(e,t)),t=!1;var u=re;e:do try{if($!==0&&q!==null){var s=q,r=Ve;switch($){case 8:Us(),u=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var d=$;if($=0,Ve=null,el(e,s,r,d),a&&Tl){u=0;break e}break;default:d=$,$=0,Ve=null,el(e,s,r,d)}}ap(),u=re;break}catch(p){Fd(e,p)}while(!0);return t&&e.shellSuspendCounter++,Ut=Ga=null,V=l,G.H=n,G.A=i,q===null&&(ee=null,Q=0,Qi()),u}function ap(){for(;q!==null;)tm(q)}function lp(e,t){var a=V;V|=2;var l=Pd(),n=em();ee!==e||Q!==t?(Ai=null,ji=We()+500,yl(e,t)):Tl=vn(e,t);e:do try{if($!==0&&q!==null){t=q;var i=Ve;t:switch($){case 1:$=0,Ve=null,el(e,t,i,1);break;case 2:case 9:if(Tr(i)){$=0,Ve=null,$r(t);break}t=function(){$!==2&&$!==9||ee!==e||($=7),At(e)},i.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Tr(i)?($=0,Ve=null,$r(t)):($=0,Ve=null,el(e,t,i,7));break;case 5:var u=null;switch(q.tag){case 26:u=q.memoizedState;case 5:case 27:var s=q;if(u?Sm(u):s.stateNode.complete){$=0,Ve=null;var r=s.sibling;if(r!==null)q=r;else{var d=s.return;d!==null?(q=d,Pi(d)):q=null}break t}}$=0,Ve=null,el(e,t,i,5);break;case 6:$=0,Ve=null,el(e,t,i,6);break;case 8:Us(),re=6;break e;default:throw Error(S(462))}}np();break}catch(p){Fd(e,p)}while(!0);return Ut=Ga=null,G.H=l,G.A=n,V=a,q!==null?0:(ee=null,Q=0,Qi(),re)}function np(){for(;q!==null&&!zg();)tm(q)}function tm(e){var t=Cd(e.alternate,e,qt);e.memoizedProps=e.pendingProps,t===null?Pi(e):q=t}function $r(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=qr(a,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=qr(a,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:bs(t);default:Dd(a,t),t=q=Df(t,qt),t=Cd(a,t,qt)}e.memoizedProps=e.pendingProps,t===null?Pi(e):q=t}function el(e,t,a,l){Ut=Ga=null,bs(t),il=null,sn=0;var n=t.return;try{if(Vh(e,n,t,a,Q)){re=1,xi(e,st(a,e.current)),q=null;return}}catch(i){if(n!==null)throw q=n,i;re=1,xi(e,st(a,e.current)),q=null;return}t.flags&32768?(Z||l===1?e=!0:Tl||Q&536870912?e=!1:(ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),am(t,e)):Pi(t)}function Pi(e){var t=e;do{if(t.flags&32768){am(t,ea);return}e=t.return;var a=$h(t.alternate,t,qt);if(a!==null){q=a;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);re===0&&(re=5)}function am(e,t){do{var a=Wh(e.alternate,e);if(a!==null){a.flags&=32767,q=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=a}while(e!==null);re=6,q=null}function Wr(e,t,a,l,n,i,u,s,r){e.cancelPendingCommit=null;do ec();while(ye!==0);if(V&6)throw Error(S(327));if(t!==null){if(t===e.current)throw Error(S(177));if(i=t.lanes|t.childLanes,i|=is,Gg(e,a,i,u,s,r),e===ee&&(q=ee=null,Q=0),pl=t,sa=e,Gt=a,Cu=i,Du=n,Jd=l,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,sp(ri,function(){return um(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,t.subtreeFlags&13878||l){l=G.T,G.T=null,n=K.p,K.p=2,u=V,V|=4;try{Fh(e,t,a)}finally{V=u,K.p=n,G.T=l}}ye=1,lm(),nm(),im()}}function lm(){if(ye===1){ye=0;var e=sa,t=pl,a=(t.flags&13878)!==0;if(t.subtreeFlags&13878||a){a=G.T,G.T=null;var l=K.p;K.p=2;var n=V;V|=4;try{kd(t,e);var i=Uu,u=Sf(e.containerInfo),s=i.focusedElem,r=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&xf(s.ownerDocument.documentElement,s)){if(r!==null&&ns(s)){var d=r.start,p=r.end;if(p===void 0&&(p=d),"selectionStart"in s)s.selectionStart=d,s.selectionEnd=Math.min(p,s.value.length);else{var v=s.ownerDocument||document,m=v&&v.defaultView||window;if(m.getSelection){var y=m.getSelection(),N=s.textContent.length,T=Math.min(r.start,N),_=r.end===void 0?T:Math.min(r.end,N);!y.extend&&T>_&&(u=_,_=T,T=u);var o=vr(s,T),f=vr(s,_);if(o&&f&&(y.rangeCount!==1||y.anchorNode!==o.node||y.anchorOffset!==o.offset||y.focusNode!==f.node||y.focusOffset!==f.offset)){var h=v.createRange();h.setStart(o.node,o.offset),y.removeAllRanges(),T>_?(y.addRange(h),y.extend(f.node,f.offset)):(h.setEnd(f.node,f.offset),y.addRange(h))}}}}for(v=[],y=s;y=y.parentNode;)y.nodeType===1&&v.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<v.length;s++){var b=v[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}wi=!!wu,Uu=wu=null}finally{V=n,K.p=l,G.T=a}}e.current=t,ye=2}}function nm(){if(ye===2){ye=0;var e=sa,t=pl,a=(t.flags&8772)!==0;if(t.subtreeFlags&8772||a){a=G.T,G.T=null;var l=K.p;K.p=2;var n=V;V|=4;try{Rd(e,t.alternate,t)}finally{V=n,K.p=l,G.T=a}}ye=3}}function im(){if(ye===4||ye===3){ye=0,Cg();var e=sa,t=pl,a=Gt,l=Jd;t.subtreeFlags&10256||t.flags&10256?ye=5:(ye=0,pl=sa=null,cm(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ua=null),Fu(a),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(yn,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=G.T,n=K.p,K.p=2,G.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{G.T=t,K.p=n}}Gt&3&&ec(),At(e),n=e.pendingLanes,a&261930&&n&42?e===Ou?Pl++:(Pl=0,Ou=e):Pl=0,Tn(0)}}function cm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Nn(t)))}function ec(){return lm(),nm(),im(),um()}function um(){if(ye!==5)return!1;var e=sa,t=Cu;Cu=0;var a=Fu(Gt),l=G.T,n=K.p;try{K.p=32>a?32:a,G.T=null,a=Du,Du=null;var i=sa,u=Gt;if(ye=0,pl=sa=null,Gt=0,V&6)throw Error(S(331));var s=V;if(V|=4,Zd(i.current),qd(i,i.current,u,a),V=s,Tn(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(yn,i)}catch{}return!0}finally{K.p=n,G.T=l,cm(e,t)}}function Fr(e,t,a){t=st(a,t),t=ju(e.stateNode,t,2),e=ca(e,t,2),e!==null&&(bn(e,2),At(e))}function W(e,t,a){if(e.tag===3)Fr(e,e,a);else for(;t!==null;){if(t.tag===3){Fr(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ua===null||!ua.has(l))){e=st(a,e),a=Nd(2),l=ca(t,a,2),l!==null&&(jd(a,l,t,e),bn(l,2),At(l));break}}t=t.return}}function Rc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ep;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(_s=!0,n.add(a),e=ip.bind(null,e,t,a),t.then(e,e))}function ip(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ee===e&&(Q&a)===a&&(re===4||re===3&&(Q&62914560)===Q&&300>We()-Fi?!(V&2)&&yl(e,0):ws|=a,hl===Q&&(hl=0)),At(e)}function sm(e,t){t===0&&(t=Io()),e=Ha(e,t),e!==null&&(bn(e,t),At(e))}function cp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sm(e,a)}function up(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(S(314))}l!==null&&l.delete(t),sm(e,a)}function sp(e,t){return $u(e,t)}var Ei=null,qa=null,Mu=!1,zi=!1,Hc=!1,aa=0;function At(e){e!==qa&&e.next===null&&(qa===null?Ei=qa=e:qa=qa.next=e),zi=!0,Mu||(Mu=!0,op())}function Tn(e,t){if(!Hc&&zi){Hc=!0;do for(var a=!1,l=Ei;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-Ie(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Ir(l,i))}else i=Q,i=ki(l,l===ee?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(i&3)||vn(l,i)||(a=!0,Ir(l,i));l=l.next}while(a);Hc=!1}}function rp(){rm()}function rm(){zi=Mu=!1;var e=0;aa!==0&&xp()&&(e=aa);for(var t=We(),a=null,l=Ei;l!==null;){var n=l.next,i=om(l,t);i===0?(l.next=null,a===null?Ei=n:a.next=n,n===null&&(qa=a)):(a=l,(e!==0||i&3)&&(zi=!0)),l=n}ye!==0&&ye!==5||Tn(e),aa!==0&&(aa=0)}function om(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Ie(i),s=1<<u,r=n[u];r===-1?(!(s&a)||s&l)&&(n[u]=Hg(s,t)):r<=t&&(e.expiredLanes|=s),i&=~s}if(t=ee,a=Q,a=ki(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&oc(l),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||vn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&oc(l),Fu(a)){case 2:case 8:a=Wo;break;case 32:a=ri;break;case 268435456:a=Fo;break;default:a=ri}return l=fm.bind(null,e),a=$u(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&oc(l),e.callbackPriority=2,e.callbackNode=null,2}function fm(e,t){if(ye!==0&&ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var l=Q;return l=ki(e,e===ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Wd(e,l,t),om(e,We()),e.callbackNode!=null&&e.callbackNode===a?fm.bind(null,e):null)}function Ir(e,t){if(ec())return null;Wd(e,t,!0)}function op(){Np(function(){V&6?$u($o,rp):rm()})}function Rs(){if(aa===0){var e=dl;e===0&&(e=On,On<<=1,!(On&261888)&&(On=256)),aa=e}return aa}function Pr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zn(""+e)}function eo(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function fp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Pr((n[Le]||null).action),u=l.submitter;u&&(t=(t=u[Le]||null)?Pr(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Li("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(aa!==0){var r=u?eo(n,u):new FormData(n);Su(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(s.preventDefault(),r=u?eo(n,u):new FormData(n),Su(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Gc=0;Gc<ru.length;Gc++){var Bc=ru[Gc],dp=Bc.toLowerCase(),mp=Bc[0].toUpperCase()+Bc.slice(1);pt(dp,"on"+mp)}pt(jf,"onAnimationEnd");pt(Af,"onAnimationIteration");pt(Tf,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Dh,"onTransitionRun");pt(Oh,"onTransitionStart");pt(Mh,"onTransitionCancel");pt(Ef,"onTransitionEnd");ol("onMouseEnter",["mouseout","mouseover"]);ol("onMouseLeave",["mouseout","mouseover"]);ol("onPointerEnter",["pointerout","pointerover"]);ol("onPointerLeave",["pointerout","pointerover"]);wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wa("onBeforeInput",["compositionend","keypress","textInput","paste"]);wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fn));function dm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var s=l[u],r=s.instance,d=s.currentTarget;if(s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(p){fi(p)}n.currentTarget=null,i=r}else for(u=0;u<l.length;u++){if(s=l[u],r=s.instance,d=s.currentTarget,s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(p){fi(p)}n.currentTarget=null,i=r}}}}function L(e,t){var a=t[tu];a===void 0&&(a=t[tu]=new Set);var l=e+"__bubble";a.has(l)||(mm(t,e,2,!1),a.add(l))}function Yc(e,t,a){var l=0;t&&(l|=4),mm(a,e,l,t)}var kn="_reactListening"+Math.random().toString(36).slice(2);function Hs(e){if(!e[kn]){e[kn]=!0,lf.forEach(function(a){a!=="selectionchange"&&(gp.has(a)||Yc(a,!1,e),Yc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kn]||(t[kn]=!0,Yc("selectionchange",!1,t))}}function mm(e,t,a,l){switch(Em(t)){case 2:var n=qp;break;case 8:n=Xp;break;default:n=ks}a=n.bind(null,t,a,e),n=void 0,!cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function kc(e,t,a,l,n){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Za(s),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){l=i=u;continue e}s=s.parentNode}}l=l.return}df(function(){var d=i,p=es(a),v=[];e:{var m=zf.get(e);if(m!==void 0){var y=Li,N=e;switch(e){case"keypress":if(Kn(a)===0)break e;case"keydown":case"keyup":y=uh;break;case"focusin":N="focus",y=hc;break;case"focusout":N="blur",y=hc;break;case"beforeblur":case"afterblur":y=hc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=sr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=$g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=oh;break;case jf:case Af:case Tf:y=Ig;break;case Ef:y=dh;break;case"scroll":case"scrollend":y=Kg;break;case"wheel":y=gh;break;case"copy":case"cut":case"paste":y=eh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=or;break;case"toggle":case"beforetoggle":y=ph}var T=(t&4)!==0,_=!T&&(e==="scroll"||e==="scrollend"),o=T?m!==null?m+"Capture":null:m;T=[];for(var f=d,h;f!==null;){var b=f;if(h=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||h===null||o===null||(b=an(f,o),b!=null&&T.push(dn(f,b,h))),_)break;f=f.return}0<T.length&&(m=new y(m,N,null,a,p),v.push({event:m,listeners:T}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&a!==iu&&(N=a.relatedTarget||a.fromElement)&&(Za(N)||N[Sl]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(N=a.relatedTarget||a.toElement,y=d,N=N?Za(N):null,N!==null&&(_=pn(N),T=N.tag,N!==_||T!==5&&T!==27&&T!==6)&&(N=null)):(y=null,N=d),y!==N)){if(T=sr,b="onMouseLeave",o="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(T=or,b="onPointerLeave",o="onPointerEnter",f="pointer"),_=y==null?m:Bl(y),h=N==null?m:Bl(N),m=new T(b,f+"leave",y,a,p),m.target=_,m.relatedTarget=h,b=null,Za(p)===d&&(T=new T(o,f+"enter",N,a,p),T.target=h,T.relatedTarget=_,b=T),_=b,y&&N)t:{for(T=hp,o=y,f=N,h=0,b=o;b;b=T(b))h++;b=0;for(var D=f;D;D=T(D))b++;for(;0<h-b;)o=T(o),h--;for(;0<b-h;)f=T(f),b--;for(;h--;){if(o===f||f!==null&&o===f.alternate){T=o;break t}o=T(o),f=T(f)}T=null}else T=null;y!==null&&to(v,m,y,T,!1),N!==null&&_!==null&&to(v,_,N,T,!0)}}e:{if(m=d?Bl(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var A=gr;else if(mr(m))if(vf)A=Eh;else{A=Ah;var g=jh}else y=m.nodeName,!y||y.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&Pu(d.elementType)&&(A=gr):A=Th;if(A&&(A=A(e,d))){yf(v,A,a,p);break e}g&&g(e,m,d),e==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&nu(m,"number",m.value)}switch(g=d?Bl(d):window,e){case"focusin":(mr(g)||g.contentEditable==="true")&&(Ja=g,uu=d,Ql=null);break;case"focusout":Ql=uu=Ja=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,br(v,a,p);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":br(v,a,p)}var j;if(ls)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ka?hf(e,a)&&(O="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(O="onCompositionStart");O&&(gf&&a.locale!=="ko"&&(Ka||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ka&&(j=mf()):(Pt=p,ts="value"in Pt?Pt.value:Pt.textContent,Ka=!0)),g=Ci(d,O),0<g.length&&(O=new rr(O,e,null,a,p),v.push({event:O,listeners:g}),j?O.data=j:(j=pf(a),j!==null&&(O.data=j)))),(j=vh?bh(e,a):xh(e,a))&&(O=Ci(d,"onBeforeInput"),0<O.length&&(g=new rr("onBeforeInput","beforeinput",null,a,p),v.push({event:g,listeners:O}),g.data=j)),fp(v,e,d,a,p)}dm(v,t)})}function dn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ci(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=an(e,a),n!=null&&l.unshift(dn(e,n,i)),n=an(e,t),n!=null&&l.push(dn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function hp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function to(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var s=a,r=s.alternate,d=s.stateNode;if(s=s.tag,r!==null&&r===l)break;s!==5&&s!==26&&s!==27||d===null||(r=d,n?(d=an(a,i),d!=null&&u.unshift(dn(a,d,r))):n||(d=an(a,i),d!=null&&u.push(dn(a,d,r)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var pp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function ao(e){return(typeof e=="string"?e:""+e).replace(pp,`
`).replace(yp,"")}function gm(e,t){return t=ao(t),ao(e)===t}function F(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||fl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&fl(e,""+l);break;case"className":wn(e,"class",l);break;case"tabIndex":wn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":wn(e,a,l);break;case"style":ff(e,l,i);break;case"data":if(t!=="object"){wn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&F(e,t,"name",n.name,n,null),F(e,t,"formEncType",n.formEncType,n,null),F(e,t,"formMethod",n.formMethod,n,null),F(e,t,"formTarget",n.formTarget,n,null)):(F(e,t,"encType",n.encType,n,null),F(e,t,"method",n.method,n,null),F(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=wt);break;case"onScroll":l!=null&&L("scroll",e);break;case"onScrollEnd":l!=null&&L("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(S(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(S(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Zn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":L("beforetoggle",e),L("toggle",e),Qn(e,"popover",l);break;case"xlinkActuate":Tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Tt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Tt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Tt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Tt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Qn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zg.get(a)||a,Qn(e,a,l))}}function _u(e,t,a,l,n,i){switch(a){case"style":ff(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(S(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(S(60));e.innerHTML=a}}break;case"children":typeof l=="string"?fl(e,l):(typeof l=="number"||typeof l=="bigint")&&fl(e,""+l);break;case"onScroll":l!=null&&L("scroll",e);break;case"onScrollEnd":l!=null&&L("scrollend",e);break;case"onClick":l!=null&&(e.onclick=wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Le]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Qn(e,a,l)}}}function De(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":L("error",e),L("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(S(137,t));default:F(e,t,i,u,a,null)}}n&&F(e,t,"srcSet",a.srcSet,a,null),l&&F(e,t,"src",a.src,a,null);return;case"input":L("invalid",e);var s=i=u=n=null,r=null,d=null;for(l in a)if(a.hasOwnProperty(l)){var p=a[l];if(p!=null)switch(l){case"name":n=p;break;case"type":u=p;break;case"checked":r=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(S(137,t));break;default:F(e,t,l,p,a,null)}}sf(e,i,s,r,d,u,n,!1);return;case"select":L("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:F(e,t,n,s,a,null)}t=i,a=u,e.multiple=!!l,t!=null?al(e,!!l,t,!1):a!=null&&al(e,!!l,a,!0);return;case"textarea":L("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(S(91));break;default:F(e,t,u,s,a,null)}of(e,l,n,i);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(l=a[r],l!=null))switch(r){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:F(e,t,r,l,a,null)}return;case"dialog":L("beforetoggle",e),L("toggle",e),L("cancel",e),L("close",e);break;case"iframe":case"object":L("load",e);break;case"video":case"audio":for(l=0;l<fn.length;l++)L(fn[l],e);break;case"image":L("error",e),L("load",e);break;case"details":L("toggle",e);break;case"embed":case"source":case"link":L("error",e),L("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(l=a[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(S(137,t));default:F(e,t,d,l,a,null)}return;default:if(Pu(t)){for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!==void 0&&_u(e,t,p,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&F(e,t,s,l,a,null))}function vp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,r=null,d=null,p=null;for(y in a){var v=a[y];if(a.hasOwnProperty(y)&&v!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":r=v;default:l.hasOwnProperty(y)||F(e,t,y,null,l,v)}}for(var m in l){var y=l[m];if(v=a[m],l.hasOwnProperty(m)&&(y!=null||v!=null))switch(m){case"type":i=y;break;case"name":n=y;break;case"checked":d=y;break;case"defaultChecked":p=y;break;case"value":u=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(S(137,t));break;default:y!==v&&F(e,t,m,y,l,v)}}lu(e,u,s,r,d,p,i,n);return;case"select":y=u=s=m=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":y=r;default:l.hasOwnProperty(i)||F(e,t,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":m=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==r&&F(e,t,n,i,l,r)}t=s,a=u,l=y,m!=null?al(e,!!a,m,!1):!!l!=!!a&&(t!=null?al(e,!!a,t,!0):al(e,!!a,a?[]:"",!1));return;case"textarea":y=m=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:F(e,t,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":m=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(S(91));break;default:n!==i&&F(e,t,u,n,l,i)}rf(e,m,y);return;case"option":for(var N in a)if(m=a[N],a.hasOwnProperty(N)&&m!=null&&!l.hasOwnProperty(N))switch(N){case"selected":e.selected=!1;break;default:F(e,t,N,null,l,m)}for(r in l)if(m=l[r],y=a[r],l.hasOwnProperty(r)&&m!==y&&(m!=null||y!=null))switch(r){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:F(e,t,r,m,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var T in a)m=a[T],a.hasOwnProperty(T)&&m!=null&&!l.hasOwnProperty(T)&&F(e,t,T,null,l,m);for(d in l)if(m=l[d],y=a[d],l.hasOwnProperty(d)&&m!==y&&(m!=null||y!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(S(137,t));break;default:F(e,t,d,m,l,y)}return;default:if(Pu(t)){for(var _ in a)m=a[_],a.hasOwnProperty(_)&&m!==void 0&&!l.hasOwnProperty(_)&&_u(e,t,_,void 0,l,m);for(p in l)m=l[p],y=a[p],!l.hasOwnProperty(p)||m===y||m===void 0&&y===void 0||_u(e,t,p,m,l,y);return}}for(var o in a)m=a[o],a.hasOwnProperty(o)&&m!=null&&!l.hasOwnProperty(o)&&F(e,t,o,null,l,m);for(v in l)m=l[v],y=a[v],!l.hasOwnProperty(v)||m===y||m==null&&y==null||F(e,t,v,m,l,y)}function lo(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&lo(u)){for(u=0,s=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],d=r.startTime;if(d>s)break;var p=r.transferSize,v=r.initiatorType;p&&lo(v)&&(r=r.responseEnd,u+=p*(r<s?1:(s-d)/(r-d)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wu=null,Uu=null;function Di(e){return e.nodeType===9?e:e.ownerDocument}function no(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ru(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lc=null;function xp(){var e=window.event;return e&&e.type==="popstate"?e===Lc?!1:(Lc=e,!0):(Lc=null,!1)}var pm=typeof setTimeout=="function"?setTimeout:void 0,Sp=typeof clearTimeout=="function"?clearTimeout:void 0,io=typeof Promise=="function"?Promise:void 0,Np=typeof queueMicrotask=="function"?queueMicrotask:typeof io<"u"?function(e){return io.resolve(null).then(e).catch(jp)}:pm;function jp(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function co(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),bl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")en(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,en(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[xn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&en(e.ownerDocument.body);a=n}while(a);bl(t)}function uo(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Hu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hu(a),Iu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ap(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[xn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ft(e.nextSibling),e===null)break}return null}function Tp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ft(e.nextSibling),e===null))return null;return e}function ym(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ft(e.nextSibling),e===null))return null;return e}function Gu(e){return e.data==="$?"||e.data==="$~"}function Bu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ep(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Yu=null;function so(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ft(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function ro(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function vm(e,t,a){switch(t=Di(a),e){case"html":if(e=t.documentElement,!e)throw Error(S(452));return e;case"head":if(e=t.head,!e)throw Error(S(453));return e;case"body":if(e=t.body,!e)throw Error(S(454));return e;default:throw Error(S(451))}}function en(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Iu(e)}var dt=new Map,oo=new Set;function Oi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xt=K.d;K.d={f:zp,r:Cp,D:Dp,C:Op,L:Mp,m:_p,X:Up,S:wp,M:Rp};function zp(){var e=Xt.f(),t=Ii();return e||t}function Cp(e){var t=Nl(e);t!==null&&t.tag===5&&t.type==="form"?fd(t):Xt.r(e)}var El=typeof document>"u"?null:document;function bm(e,t,a){var l=El;if(l&&typeof t=="string"&&t){var n=ut(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),oo.has(n)||(oo.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),De(t,"link",e),Se(t),l.head.appendChild(t)))}}function Dp(e){Xt.D(e),bm("dns-prefetch",e,null)}function Op(e,t){Xt.C(e,t),bm("preconnect",e,t)}function Mp(e,t,a){Xt.L(e,t,a);var l=El;if(l&&e&&t){var n='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ut(a.imageSizes)+'"]')):n+='[href="'+ut(e)+'"]';var i=n;switch(t){case"style":i=vl(e);break;case"script":i=zl(e)}dt.has(i)||(e=ie({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),dt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(En(i))||t==="script"&&l.querySelector(zn(i))||(t=l.createElement("link"),De(t,"link",e),Se(t),l.head.appendChild(t)))}}function _p(e,t){Xt.m(e,t);var a=El;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ut(l)+'"][href="'+ut(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=zl(e)}if(!dt.has(i)&&(e=ie({rel:"modulepreload",href:e},t),dt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zn(i)))return}l=a.createElement("link"),De(l,"link",e),Se(l),a.head.appendChild(l)}}}function wp(e,t,a){Xt.S(e,t,a);var l=El;if(l&&e){var n=tl(l).hoistableStyles,i=vl(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(En(i)))s.loading=5;else{e=ie({rel:"stylesheet",href:e,"data-precedence":t},a),(a=dt.get(i))&&Gs(e,a);var r=u=l.createElement("link");Se(r),De(r,"link",e),r._p=new Promise(function(d,p){r.onload=d,r.onerror=p}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,ti(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function Up(e,t){Xt.X(e,t);var a=El;if(a&&e){var l=tl(a).hoistableScripts,n=zl(e),i=l.get(n);i||(i=a.querySelector(zn(n)),i||(e=ie({src:e,async:!0},t),(t=dt.get(n))&&Bs(e,t),i=a.createElement("script"),Se(i),De(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Rp(e,t){Xt.M(e,t);var a=El;if(a&&e){var l=tl(a).hoistableScripts,n=zl(e),i=l.get(n);i||(i=a.querySelector(zn(n)),i||(e=ie({src:e,async:!0,type:"module"},t),(t=dt.get(n))&&Bs(e,t),i=a.createElement("script"),Se(i),De(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function fo(e,t,a,l){var n=(n=la.current)?Oi(n):null;if(!n)throw Error(S(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=vl(a.href),a=tl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vl(a.href);var i=tl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(En(e)))&&!i._p&&(u.instance=i,u.state.loading=5),dt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},dt.set(e,a),i||Hp(n,e,a,u.state))),t&&l===null)throw Error(S(528,""));return u}if(t&&l!==null)throw Error(S(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=zl(a),a=tl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(S(444,e))}}function vl(e){return'href="'+ut(e)+'"'}function En(e){return'link[rel="stylesheet"]['+e+"]"}function xm(e){return ie({},e,{"data-precedence":e.precedence,precedence:null})}function Hp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),De(t,"link",a),Se(t),e.head.appendChild(t))}function zl(e){return'[src="'+ut(e)+'"]'}function zn(e){return"script[async]"+e}function mo(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ut(a.href)+'"]');if(l)return t.instance=l,Se(l),l;var n=ie({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Se(l),De(l,"style",n),ti(l,a.precedence,e),t.instance=l;case"stylesheet":n=vl(a.href);var i=e.querySelector(En(n));if(i)return t.state.loading|=4,t.instance=i,Se(i),i;l=xm(a),(n=dt.get(n))&&Gs(l,n),i=(e.ownerDocument||e).createElement("link"),Se(i);var u=i;return u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),De(i,"link",l),t.state.loading|=4,ti(i,a.precedence,e),t.instance=i;case"script":return i=zl(a.src),(n=e.querySelector(zn(i)))?(t.instance=n,Se(n),n):(l=a,(n=dt.get(i))&&(l=ie({},a),Bs(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Se(n),De(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(S(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(l=t.instance,t.state.loading|=4,ti(l,a.precedence,e));return t.instance}function ti(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ai=null;function go(e,t,a){if(ai===null){var l=new Map,n=ai=new Map;n.set(a,l)}else n=ai,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[xn]||i[Ee]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function ho(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Gp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Sm(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Bp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=vl(l.href),i=t.querySelector(En(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Mi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Se(i);return}i=t.ownerDocument||t,l=xm(l),(n=dt.get(n))&&Gs(l,n),i=i.createElement("link"),Se(i);var u=i;u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),De(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&!(a.state.loading&3)&&(e.count++,a=Mi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var qc=0;function Yp(e,t){return e.stylesheets&&e.count===0&&li(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&li(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&qc===0&&(qc=62500*bp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&li(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>qc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Mi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)li(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _i=null;function li(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_i=new Map,t.forEach(kp,e),_i=null,Mi.call(e))}function kp(e,t){if(!(t.state.loading&4)){var a=_i.get(e);if(a)var l=a.get(null);else{a=new Map,_i.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Mi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var mn={$$typeof:_t,Provider:null,Consumer:null,_currentValue:ja,_currentValue2:ja,_threadCount:0};function Lp(e,t,a,l,n,i,u,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.hiddenUpdates=fc(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Nm(e,t,a,l,n,i,u,s,r,d,p,v){return e=new Lp(e,t,a,u,r,d,p,v,s),t=1,i===!0&&(t|=24),i=Je(3,null,null,t),e.current=i,i.stateNode=e,t=os(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ms(i),e}function jm(e){return e?(e=Fa,e):Fa}function Am(e,t,a,l,n,i){n=jm(n),l.context===null?l.context=n:l.pendingContext=n,l=ia(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ca(e,l,t),a!==null&&(ke(a,e,t),Vl(a,e,t))}function po(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ys(e,t){po(e,t),(e=e.alternate)&&po(e,t)}function Tm(e){if(e.tag===13||e.tag===31){var t=Ha(e,67108864);t!==null&&ke(t,e,67108864),Ys(e,67108864)}}function yo(e){if(e.tag===13||e.tag===31){var t=Pe();t=Wu(t);var a=Ha(e,t);a!==null&&ke(a,e,t),Ys(e,t)}}var wi=!0;function qp(e,t,a,l){var n=G.T;G.T=null;var i=K.p;try{K.p=2,ks(e,t,a,l)}finally{K.p=i,G.T=n}}function Xp(e,t,a,l){var n=G.T;G.T=null;var i=K.p;try{K.p=8,ks(e,t,a,l)}finally{K.p=i,G.T=n}}function ks(e,t,a,l){if(wi){var n=ku(l);if(n===null)kc(e,t,l,Ui,a),vo(e,l);else if(Zp(n,e,t,a,l))l.stopPropagation();else if(vo(e,l),t&4&&-1<Qp.indexOf(e)){for(;n!==null;){var i=Nl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=xa(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var r=1<<31-Ie(u);s.entanglements[1]|=r,u&=~r}At(i),!(V&6)&&(ji=We()+500,Tn(0))}}break;case 31:case 13:s=Ha(i,2),s!==null&&ke(s,i,2),Ii(),Ys(i,2)}if(i=ku(l),i===null&&kc(e,t,l,Ui,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else kc(e,t,l,null,a)}}function ku(e){return e=es(e),Ls(e)}var Ui=null;function Ls(e){if(Ui=null,e=Za(e),e!==null){var t=pn(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Qo(t),e!==null)return e;e=null}else if(a===31){if(e=Zo(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ui=e,null}function Em(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dg()){case $o:return 2;case Wo:return 8;case ri:case Og:return 32;case Fo:return 268435456;default:return 32}default:return 32}}var Lu=!1,ra=null,oa=null,fa=null,gn=new Map,hn=new Map,Ft=[],Qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vo(e,t){switch(e){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(t.pointerId)}}function Rl(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Nl(t),t!==null&&Tm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Zp(e,t,a,l,n){switch(t){case"focusin":return ra=Rl(ra,e,t,a,l,n),!0;case"dragenter":return oa=Rl(oa,e,t,a,l,n),!0;case"mouseover":return fa=Rl(fa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return gn.set(i,Rl(gn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,hn.set(i,Rl(hn.get(i)||null,e,t,a,l,n)),!0}return!1}function zm(e){var t=Za(e.target);if(t!==null){var a=pn(t);if(a!==null){if(t=a.tag,t===13){if(t=Qo(a),t!==null){e.blockedOn=t,tr(e.priority,function(){yo(a)});return}}else if(t===31){if(t=Zo(a),t!==null){e.blockedOn=t,tr(e.priority,function(){yo(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ku(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);iu=l,a.target.dispatchEvent(l),iu=null}else return t=Nl(a),t!==null&&Tm(t),e.blockedOn=a,!1;t.shift()}return!0}function bo(e,t,a){ni(e)&&a.delete(t)}function Vp(){Lu=!1,ra!==null&&ni(ra)&&(ra=null),oa!==null&&ni(oa)&&(oa=null),fa!==null&&ni(fa)&&(fa=null),gn.forEach(bo),hn.forEach(bo)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,Lu||(Lu=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,Vp)))}var qn=null;function xo(e){qn!==e&&(qn=e,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,function(){qn===e&&(qn=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Ls(l||a)===null)continue;break}var i=Nl(a);i!==null&&(e.splice(t,3),t-=3,Su(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function bl(e){function t(r){return Ln(r,e)}ra!==null&&Ln(ra,e),oa!==null&&Ln(oa,e),fa!==null&&Ln(fa,e),gn.forEach(t),hn.forEach(t);for(var a=0;a<Ft.length;a++){var l=Ft[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ft.length&&(a=Ft[0],a.blockedOn===null);)zm(a),a.blockedOn===null&&Ft.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Le]||null;if(typeof i=="function")u||xo(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Le]||null)s=u.formAction;else if(Ls(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),xo(a)}}}function Cm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function qs(e){this._internalRoot=e}tc.prototype.render=qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));var a=t.current,l=Pe();Am(a,l,e,t,null,null)};tc.prototype.unmount=qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Am(e.current,2,null,e,null,null),Ii(),t[Sl]=null}};function tc(e){this._internalRoot=e}tc.prototype.unstable_scheduleHydration=function(e){if(e){var t=af();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ft.length&&t!==0&&t<Ft[a].priority;a++);Ft.splice(a,0,e),a===0&&zm(e)}};var So=qo.version;if(So!=="19.2.4")throw Error(S(527,So,"19.2.4"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Ng(t),e=e!==null?Vo(e):null,e=e===null?null:e.stateNode,e};var Kp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xn.isDisabled&&Xn.supportsFiber)try{yn=Xn.inject(Kp),Fe=Xn}catch{}}Bi.createRoot=function(e,t){if(!Xo(e))throw Error(S(299));var a=!1,l="",n=bd,i=xd,u=Sd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Nm(e,1,!1,null,null,a,l,null,n,i,u,Cm),e[Sl]=t.current,Hs(e),new qs(t)};Bi.hydrateRoot=function(e,t,a){if(!Xo(e))throw Error(S(299));var l=!1,n="",i=bd,u=xd,s=Sd,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=Nm(e,1,!0,t,a??null,l,n,r,i,u,s,Cm),t.context=jm(null),a=t.current,l=Pe(),l=Wu(l),n=ia(l),n.callback=null,ca(a,n,l),a=l,t.current.lanes=a,bn(t,a),At(t),e[Sl]=t.current,Hs(e),new tc(t)};Bi.version="19.2.4";function Dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dm)}catch(e){console.error(e)}}Dm(),Ho.exports=Bi;var Jp=Ho.exports;const Nt={ACTIONABLE_NOW:"Now",CANDIDATES:"Review",AMBIGUITY:"Clarify",WAITING:"Waiting",TUNING:"Tuning"},sl={CRITICAL:"Critical",HIGH:"High",MEDIUM:"Medium",LOW:"Low"},Ri={DATE_EXACT:"On Date",DATE_WINDOW:"Date Range",EMAIL_REPLY:"Email Reply",MANUAL_CHECK:"Manual Check",WEB_CONDITION:"Web Monitor"},$p="/api";async function H(e,t){const a=await fetch(`${$p}${e}`,{headers:{"Content-Type":"application/json",...t==null?void 0:t.headers},...t});if(!a.ok){const l=await a.json().catch(()=>({message:"Request failed"}));throw new Error(l.message||`HTTP ${a.status}`)}return a.json()}async function Wp(){return H("/containers/counts")}async function Om(e){const t=new URLSearchParams;e&&t.set("container",e);const a=t.toString();return H(`/actions${a?`?${a}`:""}`)}async function Fp(e){return H(`/actions/${e}`)}async function Xc(e,t){return H(`/actions/${e}`,{method:"PUT",body:JSON.stringify(t)})}async function Ip(e){return H(`/actions/${e}/complete`,{method:"POST"})}async function No(e,t){return H(`/actions/${e}/move`,{method:"POST",body:JSON.stringify({container:t})})}async function Mm(e){await H(`/actions/${e}`,{method:"DELETE"})}async function Pp(e){await H(`/actions/${e}/purge`,{method:"DELETE"})}async function ey(e){await H(`/actions/${e}/acknowledge`,{method:"POST"})}async function _m(){return H("/system/health")}async function ty(){return H("/system/run-followups",{method:"POST"})}async function ay(){return H("/system/run-triggers",{method:"POST"})}async function ly(e){return H("/parse/preview",{method:"POST",body:JSON.stringify({text:e})})}async function ny(e){return H("/parse/confirm",{method:"POST",body:JSON.stringify(e)})}async function iy(e,t){return H("/parse/clarify",{method:"POST",body:JSON.stringify({rawInput:e,answers:t})})}async function cy(e){return H(`/parse/${e}/reparse`,{method:"POST"})}async function uy(){return H("/sources/gmail/status")}async function sy(){return H("/sources/gmail/auth-url")}async function ry(){await H("/sources/gmail/disconnect",{method:"POST"})}async function oy(){return H("/sources/gmail/scan",{method:"POST"})}async function fy(e){const t=new URLSearchParams;e!=null&&e.actionId&&t.set("actionId",e.actionId.toString()),e!=null&&e.pending&&t.set("pending","true");const a=t.toString();return H(`/triggers${a?`?${a}`:""}`)}async function wm(e){return H("/triggers",{method:"POST",body:JSON.stringify(e)})}async function dy(e){await H(`/triggers/${e}`,{method:"DELETE"})}async function my(e){return H(`/triggers/${e}/fire`,{method:"POST"})}async function gy(e,t){return H(`/triggers/${e}/check`,{method:"POST",body:JSON.stringify({conditionMet:t})})}async function hy(e){const t=new URLSearchParams;e.q&&t.set("q",e.q),e.container&&t.set("container",e.container),e.urgency&&t.set("urgency",e.urgency),e.includeArchived&&t.set("includeArchived","true"),e.archiveOnly&&t.set("archiveOnly","true"),e.limit&&t.set("limit",e.limit.toString()),e.offset&&t.set("offset",e.offset.toString());const a=t.toString();return H(`/search${a?`?${a}`:""}`)}async function py(){return H("/groups")}async function jo(e){return H("/groups",{method:"POST",body:JSON.stringify(e)})}async function yy(e){return H(`/groups/${e}`,{method:"PUT",body:JSON.stringify({archivedAt:new Date().toISOString()})})}async function vy(e){await H(`/groups/${e}`,{method:"DELETE"})}async function by(e,t){return H(`/groups/${e}/actions`,{method:"POST",body:JSON.stringify({actionIds:t})})}async function Ao(e,t){await H(`/groups/${e}/actions/${t}`,{method:"DELETE"})}async function Um(){return H("/groups/suggestions")}async function xy(e,t){return H("/groups/merge",{method:"POST",body:JSON.stringify({primaryId:e,secondaryId:t})})}async function Sy(){return H("/tuning")}async function Ny(e){return H(`/tuning/${e}/activate`,{method:"POST"})}async function jy(e,t,a=!1){return H(`/tuning/${e}/reject`,{method:"POST",body:JSON.stringify({feedback:t,dontAskAgain:a})})}async function Ay(e){return H(`/tuning/${e}/ask-less`,{method:"POST"})}async function Ty(e){await H(`/tuning/${e}`,{method:"DELETE"})}async function Ey(){return H("/tuning/stats")}async function zy(){return H("/notifications/vapid-public-key")}async function Cy(e,t,a){await H("/notifications/subscribe",{method:"POST",body:JSON.stringify({endpoint:e,p256dh:t,auth:a})})}async function Dy(e){await H("/notifications/unsubscribe",{method:"DELETE",body:JSON.stringify({endpoint:e})})}async function Oy(e,t,a){return H("/tuning/feedback",{method:"POST",body:JSON.stringify({actionId:e,feedbackType:t,correction:a})})}async function My(){return H("/containers/flag-counts")}async function _y(e){return H(`/actions?${e}=true`)}async function wy(e){return H("/actions/bulk/complete",{method:"POST",body:JSON.stringify({ids:e})})}async function Uy(e){return H("/actions/bulk/delete",{method:"POST",body:JSON.stringify({ids:e})})}async function Ry(e,t){return H("/actions/bulk/move",{method:"POST",body:JSON.stringify({ids:e,container:t})})}let Hi=null;function ii(){return Hi?Hi():Promise.resolve()}function Hy({activeContainer:e,onContainerChange:t,onFlagFilter:a}){const[l,n]=x.useState({ACTIONABLE_NOW:0,CANDIDATES:0,AMBIGUITY:0,WAITING:0,TUNING:0}),[i,u]=x.useState({needsClarification:0,needsTuning:0}),s=x.useCallback(async()=>{try{const[p,v]=await Promise.all([Wp(),My()]);n(p),u(v)}catch(p){console.error("Failed to load counts:",p)}},[]);x.useEffect(()=>(Hi=s,s(),()=>{Hi=null}),[s]);function r(p){t(e===p?null:p)}function d(p,v){const m=e===p;return c.jsxs("button",{className:`grid-btn grid-btn--${v}${m?" selected":""}`,onClick:()=>r(p),children:[c.jsx("span",{className:"grid-btn-label",children:Nt[p]}),c.jsx("span",{className:"grid-btn-badge",children:l[p]})]},p)}return c.jsxs("div",{className:"container-grid",children:[d("ACTIONABLE_NOW","now"),c.jsxs("div",{className:"grid-row",children:[d("CANDIDATES","review"),d("WAITING","waiting")]}),(i.needsClarification>0||i.needsTuning>0)&&c.jsxs("div",{className:"flag-badges",children:[i.needsClarification>0&&c.jsxs("button",{className:"flag-badge flag-badge--clarify",onClick:()=>a==null?void 0:a("needsClarification"),title:"Actions needing clarification",children:[c.jsx("span",{className:"flag-badge-icon",children:"?"}),c.jsx("span",{className:"flag-badge-label",children:"Clarify"}),c.jsx("span",{className:"flag-badge-count",children:i.needsClarification})]}),i.needsTuning>0&&c.jsxs("button",{className:"flag-badge flag-badge--tuning",onClick:()=>a==null?void 0:a("needsTuning"),title:"Actions flagged for tuning",children:[c.jsx("span",{className:"flag-badge-icon",children:"⚙"}),c.jsx("span",{className:"flag-badge-label",children:"Tuning"}),c.jsx("span",{className:"flag-badge-count",children:i.needsTuning})]})]})]})}const To={SU:"Sunday",MO:"Monday",TU:"Tuesday",WE:"Wednesday",TH:"Thursday",FR:"Friday",SA:"Saturday"},Gy=["January","February","March","April","May","June","July","August","September","October","November","December"];function By(e){const t={};for(const l of e.split(";")){const[n,i]=l.split("=");n&&i&&(t[n.trim()]=i.trim())}const a=t.FREQ;return!a||!["DAILY","WEEKLY","MONTHLY","YEARLY"].includes(a)?null:{freq:a,interval:t.INTERVAL&&parseInt(t.INTERVAL)||1,byMonthDay:t.BYMONTHDAY?parseInt(t.BYMONTHDAY):void 0,byMonth:t.BYMONTH?parseInt(t.BYMONTH):void 0,byDay:t.BYDAY||void 0}}function Qc(e){const t=["th","st","nd","rd"],a=e%100;return e+(t[(a-20)%10]||t[a]||t[0])}function Xs(e){const t=By(e);if(!t)return e;switch(t.freq){case"DAILY":return t.interval===1?"Daily":`Every ${t.interval} days`;case"WEEKLY":return t.interval===1?t.byDay&&To[t.byDay]?`Weekly on ${To[t.byDay]}`:"Weekly":t.interval===2?"Biweekly":`Every ${t.interval} weeks`;case"MONTHLY":return t.interval===1?t.byMonthDay?`Monthly on the ${Qc(t.byMonthDay)}`:"Monthly":t.interval===3?t.byMonthDay?`Quarterly on the ${Qc(t.byMonthDay)}`:"Quarterly":t.interval===6?"Every 6 months":`Every ${t.interval} months`;case"YEARLY":if(t.byMonth){const a=Gy[t.byMonth-1];return t.byMonthDay?`Yearly on ${a} ${Qc(t.byMonthDay)}`:`Yearly in ${a}`}return t.interval===1?"Yearly":`Every ${t.interval} years`}}function Yy({action:e,onClick:t,onDelete:a,selectable:l,selected:n,onSelect:i}){var D;const u=e.urgency.toLowerCase(),s=x.useRef(null),[r,d]=x.useState(0),[p,v]=x.useState(!1);function m(){const A=window.getSelection();A&&A.toString().length>0||p||t()}function y(){return e.confidence>=.8?"high":e.confidence>=.5?"medium":"low"}function N(){if(!e.dueDate)return null;const A=new Date(e.dueDate),g=new Date,j=Math.ceil((A.getTime()-g.getTime())/(1e3*60*60*24));return j<0?`${Math.abs(j)}d overdue`:j===0?"Today":j===1?"Tomorrow":j<7?`${j}d`:A.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function T(){const A=window.getSelection();return!!(A&&A.toString().length>0)}function _(A){s.current=A.touches[0].clientX}function o(A){if(s.current===null||T())return;const g=A.touches[0].clientX-s.current;g<-10&&(v(!0),d(Math.min(0,g)))}function f(){if(T()){s.current=null;return}r<-120&&a?(d(-300),setTimeout(()=>{a(e.id)},200)):d(0),s.current=null,setTimeout(()=>v(!1),50)}const h=e.container==="CANDIDATES",b=N();return c.jsxs("div",{className:"action-card",onClick:m,children:[r<-10&&c.jsx("div",{className:"action-card-delete-bg",children:"Delete"}),c.jsxs("div",{className:"action-card-inner",style:{transform:r<0?`translateX(${r}px)`:void 0,transition:p?"none":"transform 0.2s ease"},onTouchStart:_,onTouchMove:o,onTouchEnd:f,children:[l&&c.jsx("div",{className:"action-checkbox-wrapper",onClick:A=>A.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"action-checkbox",checked:!!n,onChange:()=>i==null?void 0:i(e.id)})}),c.jsx("div",{className:`action-urgency-bar ${u}`}),c.jsxs("div",{className:"action-content",children:[e.needsFollowUp&&c.jsx("div",{className:"action-followup-nudge",children:"Still important? Tap to review."}),c.jsx("div",{className:"action-description",children:e.shortDescription||e.description}),((D=e.source)==null?void 0:D.type)==="GMAIL"&&(e.source.emailFrom||e.source.emailSubject)&&c.jsxs("div",{className:"action-source-line",children:["From: ",e.source.emailFrom||"Unknown"," · ",e.source.emailSubject||"No subject"]}),c.jsxs("div",{className:"action-meta",children:[h&&c.jsx("span",{className:"badge badge-unconfirmed",children:"Unconfirmed"}),e.container==="WAITING"&&c.jsx("span",{className:"badge badge-waiting",children:"Waiting"}),e.needsClarification&&c.jsx("span",{className:"badge badge-clarify",children:e.missingInfo?`Unclear: ${JSON.parse(e.missingInfo).slice(0,2).join(", ")}`:"Clarify"}),e.needsTuning&&c.jsx("span",{className:"badge badge-tuning",children:"Tuning"}),e.recurrenceRule&&c.jsxs("span",{className:"badge badge-recurrence",children:["↻ ",Xs(e.recurrenceRule)]}),b&&c.jsx("span",{className:"action-due",children:b}),c.jsxs("span",{className:"action-confidence",children:[c.jsx("span",{className:`confidence-dot ${y()}`}),Math.round(e.confidence*100),"%"]})]})]})]})]})}function ky({onClose:e,onCreated:t}){const[a,l]=x.useState("input"),[n,i]=x.useState(""),[u,s]=x.useState(null),[r,d]=x.useState({}),[p,v]=x.useState(null);async function m(){if(!n.trim()){v("Please enter a description");return}l("parsing"),v(null);try{const o=await ly(n.trim());s(o),o.container==="AMBIGUITY"&&o.questions.length>0?l("clarify"):l("preview")}catch(o){v("Failed to parse action"),l("input"),console.error(o)}}async function y(){if(u){l("parsing"),v(null);try{const o=await iy(u.rawInput,r);s(o),o.container==="AMBIGUITY"&&o.questions.length>0?(d({}),l("clarify")):l("preview")}catch(o){v("Failed to clarify"),l("clarify"),console.error(o)}}}async function N(){if(u){l("parsing"),v(null);try{await ny(u),t()}catch(o){v("Failed to save action"),l("preview"),console.error(o)}}}function T(o,f){u&&s({...u,[o]:f})}function _(){return u?u.confidence>=.8?"var(--success)":u.confidence>=.5?"var(--warning)":"var(--urgency-critical)":"var(--text-secondary)"}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsxs("h2",{className:"modal-title",children:[a==="input"&&"New Action",a==="parsing"&&"Analyzing...",a==="preview"&&"Review Action",a==="clarify"&&"Need More Info"]}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),a==="input"&&c.jsxs("div",{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What needs to be done?"}),c.jsx("textarea",{className:"form-textarea",value:n,onChange:o=>i(o.target.value),placeholder:"e.g., Call John about the project proposal by Friday",autoFocus:!0,rows:3}),c.jsx("p",{className:"form-hint",children:"Include details like who, what, when - AI will extract the action"})]}),p&&c.jsx("div",{className:"form-error",children:p}),c.jsx("button",{type:"button",className:"btn btn-primary btn-block",onClick:m,children:"Parse with AI"})]}),a==="parsing"&&c.jsxs("div",{className:"parsing-state",children:[c.jsx("div",{className:"spinner"}),c.jsx("p",{children:"Analyzing your input..."})]}),a==="preview"&&u&&c.jsxs("div",{children:[c.jsxs("div",{className:"preview-section",children:[c.jsxs("div",{className:"preview-confidence",style:{color:_()},children:[Math.round(u.confidence*100),"% confident"]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:u.description,onChange:o=>T("description",o.target.value),rows:2})]}),u.suggestedAction&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Suggested Next Step"}),c.jsx("input",{type:"text",className:"form-input",value:u.suggestedAction,onChange:o=>T("suggestedAction",o.target.value)})]}),c.jsxs("div",{className:"preview-meta",children:[c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Container"}),c.jsx("select",{className:"form-select form-select-small",value:u.container,onChange:o=>T("container",o.target.value),children:["ACTIONABLE_NOW","CANDIDATES","WAITING","AMBIGUITY"].map(o=>c.jsx("option",{value:o,children:Nt[o]},o))})]}),c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Urgency"}),c.jsx("select",{className:"form-select form-select-small",value:u.urgency,onChange:o=>T("urgency",o.target.value),children:Object.entries(sl).map(([o,f])=>c.jsx("option",{value:o,children:f},o))})]}),u.dueDate&&c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Due"}),c.jsx("input",{type:"date",className:"form-input form-input-small",value:u.dueDate,onChange:o=>T("dueDate",o.target.value)})]})]}),u.parties.length>0&&c.jsxs("div",{className:"preview-parties",children:[c.jsx("span",{className:"preview-meta-label",children:"People:"}),u.parties.map((o,f)=>c.jsx("span",{className:"party-chip",children:o.name},f))]}),u.recurrenceRule&&c.jsxs("div",{className:"preview-recurrence",children:[c.jsx("span",{className:"preview-meta-label",children:"Repeats"}),c.jsxs("span",{className:"preview-recurrence-value",children:["↻ ",Xs(u.recurrenceRule)]}),u.leadTimeDays!==void 0&&c.jsxs("span",{className:"preview-lead-time",children:["(surfaces ",u.leadTimeDays," days before due)"]})]}),u.reasoning&&c.jsxs("div",{className:"preview-reasoning",children:[c.jsx("span",{className:"preview-meta-label",children:"AI Reasoning"}),c.jsx("p",{children:u.reasoning})]})]}),p&&c.jsx("div",{className:"form-error",children:p}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>l("input"),children:"Edit Input"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:N,children:"Save Action"})]})]}),a==="clarify"&&u&&c.jsxs("div",{children:[c.jsx("p",{className:"clarify-intro",children:"Please answer these questions to clarify your action:"}),u.questions.map((o,f)=>c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:o}),c.jsx("input",{type:"text",className:"form-input",value:r[o]||"",onChange:h=>d({...r,[o]:h.target.value}),placeholder:"Your answer..."})]},f)),p&&c.jsx("div",{className:"form-error",children:p}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>l("input"),children:"Start Over"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:y,disabled:Object.keys(r).length===0,children:"Submit Answers"})]})]}),c.jsx("style",{children:`
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
        `})]})})}const Ly={CREATED:"Created",CONTAINER_CHANGE:"Moved",EDITED:"Edited",MERGED:"Merged",TRIGGER_FIRED:"Trigger fired",AI_REPARSED:"AI re-parsed",COMPLETED:"Completed",ARCHIVED:"Archived",FOLLOW_UP_SENT:"Follow-up sent"};function qy({events:e,aiReasoning:t}){function a(n){return new Date(n).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function l(n){const i=Ly[n.type];if(n.type==="CONTAINER_CHANGE"&&n.fromContainer&&n.toContainer)return`${i} from ${n.fromContainer} to ${n.toContainer}`;if(n.details)try{const u=JSON.parse(n.details);if(u.source)return`${i} via ${u.source}`;if(u.fields)return`${i}: ${u.fields.join(", ")}`}catch{}return i}return c.jsxs("div",{className:"info-panel",children:[t&&c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"AI Reasoning"}),c.jsx("p",{className:"info-reasoning",children:t})]}),c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"History"}),c.jsx("div",{className:"info-timeline",children:e.map(n=>c.jsxs("div",{className:"timeline-item",children:[c.jsx("span",{className:"timeline-time",children:a(n.createdAt)}),c.jsx("span",{className:"timeline-description",children:l(n)})]},n.id))})]}),c.jsx("style",{children:`
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
      `})]})}function ht({title:e,message:t,confirmLabel:a="Confirm",cancelLabel:l="Cancel",danger:n=!1,inputMode:i=!1,inputPlaceholder:u,inputLabel:s,onConfirm:r,onCancel:d}){const[p,v]=x.useState("");return c.jsxs("div",{className:"confirm-overlay",onClick:d,children:[c.jsxs("div",{className:"confirm-dialog",onClick:m=>m.stopPropagation(),children:[c.jsx("div",{className:"confirm-title",children:e}),c.jsx("div",{className:"confirm-message",children:t}),i&&c.jsxs("div",{className:"confirm-input-group",children:[s&&c.jsx("label",{className:"confirm-input-label",children:s}),c.jsx("input",{type:"text",className:"confirm-input",value:p,onChange:m=>v(m.target.value),placeholder:u,autoFocus:!0})]}),c.jsxs("div",{className:"confirm-actions",children:[c.jsx("button",{className:"confirm-btn confirm-btn-cancel",onClick:d,children:l}),c.jsx("button",{className:`confirm-btn ${n?"confirm-btn-danger":"confirm-btn-primary"}`,onClick:()=>r(i?p:void 0),disabled:i&&!p.trim(),children:a})]})]}),c.jsx("style",{children:`
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
      `})]})}function Eo({trigger:e,onUpdate:t}){const[a,l]=x.useState(!1),[n,i]=x.useState(null);function u(m){return m?new Date(m).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""}function s(m){if(!m)return"";const y=new Date(m),N=new Date,T=Math.ceil((y.getTime()-N.getTime())/(1e3*60*60*24));return T<0?`${Math.abs(T)}d ago`:T===0?"Today":T===1?"Tomorrow":T<7?`In ${T}d`:u(m)}function r(){switch(e.type){case"DATE_EXACT":return s(e.triggerDate);case"DATE_WINDOW":return`${u(e.dateWindowStart)} - ${u(e.dateWindowEnd)}`;case"EMAIL_REPLY":return e.emailPattern||"Waiting for reply";case"MANUAL_CHECK":return e.eventDescription||"Check condition";case"WEB_CONDITION":return e.webQuery||"Monitoring web for condition";default:return""}}async function d(){l(!0);try{await my(e.id),t()}catch(m){console.error("Failed to fire trigger:",m)}finally{l(!1)}i(null)}async function p(m){l(!0);try{await gy(e.id,m),t()}catch(y){console.error("Failed to check trigger:",y)}finally{l(!1)}}async function v(){l(!0);try{await dy(e.id),t()}catch(m){console.error("Failed to delete trigger:",m)}finally{l(!1)}i(null)}return e.isTriggered?c.jsxs("div",{className:"trigger-card fired",children:[c.jsx("div",{className:"trigger-icon",children:"✓"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:Ri[e.type]}),c.jsxs("div",{className:"trigger-info",children:["Fired ",s(e.triggeredAt)]})]})]}):c.jsxs("div",{className:"trigger-card",children:[c.jsx("div",{className:"trigger-icon",children:"⏳"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:Ri[e.type]}),c.jsx("div",{className:"trigger-info",children:r()}),e.description&&c.jsx("div",{className:"trigger-description",children:e.description}),e.type==="WEB_CONDITION"&&e.webCheckResult&&c.jsxs("div",{className:"trigger-description",children:["Last check: ",e.webCheckResult]}),e.type==="WEB_CONDITION"&&e.lastChecked&&c.jsxs("div",{className:"trigger-description",style:{opacity:.6},children:["Checked ",s(e.lastChecked)," · ",e.checkCount," checks"]})]}),c.jsxs("div",{className:"trigger-actions",children:[e.type==="MANUAL_CHECK"?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"trigger-btn check",onClick:()=>p(!0),disabled:a,title:"Condition met",children:"✓"}),c.jsx("button",{className:"trigger-btn skip",onClick:()=>p(!1),disabled:a,title:"Not yet",children:"↻"})]}):c.jsx("button",{className:"trigger-btn fire",onClick:()=>i("fire"),disabled:a,title:"Fire now",children:"▶"}),c.jsx("button",{className:"trigger-btn delete",onClick:()=>i("delete"),disabled:a,title:"Delete",children:"✕"})]}),n==="fire"&&c.jsx(ht,{title:"Fire Trigger",message:"Fire this trigger now? The action will move to Actionable Now.",confirmLabel:"Fire",onConfirm:d,onCancel:()=>i(null)}),n==="delete"&&c.jsx(ht,{title:"Delete Trigger",message:"Delete this trigger?",confirmLabel:"Delete",danger:!0,onConfirm:v,onCancel:()=>i(null)}),c.jsx("style",{children:`
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
      `})]})}function Xy({actionId:e,onClose:t,onCreated:a}){const[l,n]=x.useState("DATE_EXACT"),[i,u]=x.useState(""),[s,r]=x.useState(""),[d,p]=x.useState(""),[v,m]=x.useState(""),[y,N]=x.useState(""),[T,_]=x.useState(!1),[o,f]=x.useState(null);async function h(A){if(A.preventDefault(),f(null),l==="DATE_EXACT"&&!s){f("Please select a date");return}if(l==="DATE_WINDOW"&&(!d||!v)){f("Please select both start and end dates");return}if(l==="MANUAL_CHECK"&&!y){f("Please describe what to check for");return}_(!0);try{await wm({actionId:e,type:l,description:i||void 0,triggerDate:l==="DATE_EXACT"?s:void 0,dateWindowStart:l==="DATE_WINDOW"?d:void 0,dateWindowEnd:l==="DATE_WINDOW"?v:void 0,eventDescription:l==="MANUAL_CHECK"?y:void 0}),a(),t()}catch(g){f("Failed to create trigger"),console.error(g)}finally{_(!1)}}const b=new Date;b.setDate(b.getDate()+1);const D=b.toISOString().split("T")[0];return c.jsx("div",{className:"trigger-modal-overlay",onClick:t,children:c.jsxs("div",{className:"trigger-modal",onClick:A=>A.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Add Trigger"}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]}),c.jsxs("form",{onSubmit:h,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Type"}),c.jsx("div",{className:"trigger-type-options",children:Object.keys(Ri).map(A=>c.jsx("button",{type:"button",className:`trigger-type-btn ${l===A?"active":""}`,onClick:()=>n(A),children:Ri[A]},A))})]}),l==="DATE_EXACT"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Date"}),c.jsx("input",{type:"date",className:"form-input",value:s,onChange:A=>r(A.target.value),min:D}),c.jsx("p",{className:"form-hint",children:"Action will move to Actionable Now on this date"})]}),l==="DATE_WINDOW"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Start Date"}),c.jsx("input",{type:"date",className:"form-input",value:d,onChange:A=>p(A.target.value),min:D})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"End Date"}),c.jsx("input",{type:"date",className:"form-input",value:v,onChange:A=>m(A.target.value),min:d||D})]}),c.jsx("p",{className:"form-hint",children:"Action will become active when start date is reached"})]}),l==="EMAIL_REPLY"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:A=>u(A.target.value),placeholder:"e.g., Waiting for reply from John"}),c.jsx("p",{className:"form-hint",children:"You'll be prompted to manually check for the reply"})]}),l==="MANUAL_CHECK"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What to check for"}),c.jsx("textarea",{className:"form-textarea",value:y,onChange:A=>N(A.target.value),placeholder:"e.g., 30% trade-in promotion period starts",rows:2}),c.jsx("p",{className:"form-hint",children:"You'll be prompted periodically to check if this condition is met"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Note (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:A=>u(A.target.value),placeholder:"Add a note about this trigger..."})]}),o&&c.jsx("div",{className:"form-error",children:o}),c.jsxs("div",{className:"trigger-modal-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:T,children:T?"Adding...":"Add Trigger"})]})]}),c.jsx("style",{children:`
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
        `})]})})}function Rm({actionId:e,onClose:t,onUpdate:a}){var Zs,Vs;const[l,n]=x.useState(null),[i,u]=x.useState([]),[s,r]=x.useState(!0),[d,p]=x.useState(!1),[v,m]=x.useState(!1),[y,N]=x.useState(!1),[T,_]=x.useState(!1),[o,f]=x.useState(!1),[h,b]=x.useState(null),[D,A]=x.useState(!1),[g,j]=x.useState(""),[O,R]=x.useState(null),[ue,pe]=x.useState(""),[Xe,je]=x.useState("MEDIUM"),[Qe,M]=x.useState(""),[z,w]=x.useState(!1),[U,X]=x.useState(!1),[J,Oe]=x.useState(!1),[at,Ae]=x.useState(null),[Ze,yt]=x.useState(""),[C,k]=x.useState(null),[P,Me]=x.useState("");x.useEffect(()=>{Re()},[e]);async function Re(){try{const[E,be]=await Promise.all([Fp(e),fy({actionId:e})]);n(E),u(be),pe(E.description),je(E.urgency),M(E.dueDate?E.dueDate.split("T")[0]:"")}catch(E){console.error("Failed to load action:",E)}finally{r(!1)}}async function Qt(){if(l){w(!0);try{await Xc(l.id,{description:ue,urgency:Xe,dueDate:Qe||null,version:l.version}),p(!1),Re(),a()}catch(E){console.error("Failed to save:",E)}finally{w(!1)}}}function Hm(){l&&(pe(l.description),je(l.urgency),M(l.dueDate?l.dueDate.split("T")[0]:""),p(!1))}async function Gm(){if(l){X(!0);try{await cy(l.id),p(!1),Re(),a()}catch(E){console.error("Failed to reparse:",E)}finally{X(!1)}}}async function Bm(){if(l)try{const E=await Ip(l.id);if(E.nextAction){const be=E.nextAction.dueDate?new Date(E.nextAction.dueDate).toLocaleDateString():"scheduled";b(`Next occurrence created (due ${be})`),setTimeout(()=>{a(),t()},2e3)}else a(),t()}catch(E){console.error("Failed to complete:",E)}}async function Ym(){if(!l)return;const E=parseInt(g);if(!(isNaN(E)||E<0||E>90))try{await Xc(l.id,{leadTimeDays:E,version:l.version}),A(!1),Re(),a()}catch(be){console.error("Failed to update lead time:",be)}}async function km(){if(l)try{await No(l.id,"ACTIONABLE_NOW"),Re(),a()}catch(E){console.error("Failed to confirm:",E)}}function ac(){Re(),a()}async function lc(E,be){if(l)try{await Oy(l.id,E,be),_(!1),Re(),a()}catch(Fm){console.error("Failed to submit feedback:",Fm)}}function Lm(){Ae("defer"),yt(""),f(!1)}async function qm(){if(!(!l||!Ze))try{await wm({actionId:l.id,type:"DATE_EXACT",description:`Deferred until ${Ze}`,triggerDate:Ze}),Ae(null),yt(""),Re(),a()}catch(E){console.error("Failed to defer action:",E)}}function Xm(){Oe(!0),f(!1)}async function Qm(E){if(l)try{await No(l.id,E),Oe(!1),Re(),a()}catch(be){console.error("Failed to reclassify action:",be)}}function Zm(){f(!1),R({type:"delete"})}async function Vm(){if(l){try{await Pp(l.id),a(),t()}catch(E){console.error("Failed to delete action:",E)}R(null)}}function Km(){f(!1),R({type:"merge-id"})}async function Jm(E){if(l){try{await xy(E,l.id),a(),t()}catch(be){console.error("Failed to merge actions:",be)}R(null)}}async function $m(){if(l){try{await Mm(l.id),a(),t()}catch(E){console.error("Failed to archive action:",E)}R(null)}}function Cl(E){if(O)if(O.type==="delete")Vm();else if(O.type==="archive")$m();else if(O.type==="merge-id"){const be=parseInt(E||"");if(isNaN(be))return;R({type:"merge-confirm",primaryId:be})}else O.type==="merge-confirm"?Jm(O.primaryId):O.type==="text-correction"&&(E!=null&&E.trim()&&lc("parsed_wrong",E.trim()),R(null))}const Qs=["ACTIONABLE_NOW","CANDIDATES","AMBIGUITY","WAITING"],Wm=["CRITICAL","HIGH","MEDIUM","LOW"];if(s)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsx("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:c.jsx("p",{children:"Loading..."})})});if(!l)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:[c.jsx("p",{children:"Action not found"}),c.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Close"})]})});const nc=i.filter(E=>!E.isTriggered),ic=i.filter(E=>E.isTriggered);return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content action-view",onClick:E=>E.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:d?"Edit Action":"Action Details"}),c.jsxs("div",{className:"action-view-actions",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>m(!v),title:"View history",children:"i"}),c.jsxs("div",{className:"menu-wrapper",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>f(!o),title:"More options",children:"⋯"}),o&&c.jsxs("div",{className:"action-menu",children:[c.jsx("button",{className:"action-menu-item",onClick:Lm,children:"Defer"}),c.jsx("button",{className:"action-menu-item",onClick:Xm,children:"Reclassify"}),c.jsx("button",{className:"action-menu-item",onClick:Km,children:"Merge"}),c.jsx("button",{className:"action-menu-item",onClick:()=>{N(!0),f(!1)},children:"Add to Waiting"}),c.jsx("button",{className:"action-menu-item action-menu-item--danger",onClick:Zm,children:"Delete"})]})]}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]})]}),d?c.jsxs("div",{className:"action-edit-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:ue,onChange:E=>pe(E.target.value)})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Urgency"}),c.jsx("select",{className:"form-select",value:Xe,onChange:E=>je(E.target.value),children:Object.entries(sl).map(([E,be])=>c.jsx("option",{value:E,children:be},E))})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Due Date"}),c.jsx("input",{type:"date",className:"form-input",value:Qe,onChange:E=>M(E.target.value)})]}),c.jsxs("div",{className:"action-edit-buttons",children:[c.jsx("button",{className:"btn btn-secondary",onClick:Hm,children:"Cancel"}),c.jsx("button",{className:"btn btn-secondary",onClick:Gm,disabled:U||z,children:U?"Parsing...":"Re-parse"}),c.jsx("button",{className:"btn btn-primary",onClick:Qt,disabled:z||U,children:z?"Saving...":"Save"})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"action-detail-content",children:[c.jsx("div",{className:"action-detail-description",children:l.description}),l.needsClarification&&c.jsxs("div",{className:"clarification-banner",children:[c.jsx("div",{className:"clarification-title",children:"I categorized this the best I could, but I'm not confident about:"}),l.missingInfo?c.jsx("ul",{className:"clarification-list",children:JSON.parse(l.missingInfo).map((E,be)=>c.jsx("li",{className:"clarification-item",children:E},be))}):l.aiReasoning?c.jsx("div",{className:"clarification-detail",children:l.aiReasoning}):c.jsx("div",{className:"clarification-detail",children:"Review this action and edit any fields that seem off."})]}),c.jsx("div",{className:"action-detail-source",children:((Zs=l.source)==null?void 0:Zs.type)==="GMAIL"?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"From"}),c.jsx("span",{className:"detail-value",children:l.source.emailFrom||"Unknown"})]}),c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Subject"}),c.jsx("span",{className:"detail-value",children:l.source.emailSubject||"No subject"})]}),l.source.emailDate&&c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Date"}),c.jsx("span",{className:"detail-value",children:new Date(l.source.emailDate).toLocaleDateString()})]}),l.source.emailId&&c.jsx("div",{className:"source-row",children:c.jsx("a",{href:`https://mail.google.com/mail/u/0/#inbox/${l.source.emailId}`,target:"_blank",rel:"noopener noreferrer",className:"source-gmail-link",children:"View in Gmail"})})]}):((Vs=l.source)==null?void 0:Vs.type)==="SIRI"?c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Via Siri"})]}):c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Manually entered"})]})}),l.suggestedAction&&c.jsxs("div",{className:"action-detail-suggested",children:[c.jsx("span",{className:"detail-label",children:"Next step:"}),l.suggestedAction]}),c.jsxs("div",{className:"action-detail-meta",children:[c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Container"}),c.jsx("span",{className:"detail-value",children:Nt[l.container]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Urgency"}),c.jsx("span",{className:`detail-value urgency-${l.urgency.toLowerCase()}`,children:sl[l.urgency]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Confidence"}),c.jsxs("span",{className:"detail-value",children:[Math.round(l.confidence*100),"%"]})]}),l.dueDate&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Due"}),c.jsx("span",{className:"detail-value",children:new Date(l.dueDate).toLocaleDateString()})]}),l.recurrenceRule&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Repeats"}),c.jsxs("span",{className:"detail-value",children:["↻ ",Xs(l.recurrenceRule)]})]}),l.recurrenceRule&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Lead time"}),D?c.jsxs("span",{className:"detail-value lead-time-edit",children:[c.jsx("input",{type:"number",min:"0",max:"90",className:"lead-time-input",value:g,onChange:E=>j(E.target.value),autoFocus:!0}),c.jsx("span",{className:"lead-time-unit",children:"days"}),c.jsx("button",{className:"lead-time-save",onClick:Ym,children:"Save"}),c.jsx("button",{className:"lead-time-cancel",onClick:()=>A(!1),children:"Cancel"})]}):c.jsxs("span",{className:"detail-value detail-value-editable",onClick:()=>{j(String(l.leadTimeDays)),A(!0)},children:[l.leadTimeDays," days"]})]})]}),(l.container==="WAITING"||i.length>0)&&c.jsxs("div",{className:"triggers-section",children:[c.jsxs("div",{className:"triggers-header",children:[c.jsx("h3",{children:"Triggers"}),c.jsx("button",{className:"add-trigger-btn",onClick:()=>N(!0),children:"+ Add"})]}),nc.length===0&&ic.length===0?c.jsx("p",{className:"no-triggers",children:"No triggers set. Add one to defer this action."}):c.jsxs(c.Fragment,{children:[nc.map(E=>c.jsx(Eo,{trigger:E,onUpdate:ac},E.id)),ic.length>0&&nc.length>0&&c.jsx("div",{className:"triggers-divider"}),ic.map(E=>c.jsx(Eo,{trigger:E,onUpdate:ac},E.id))]})]})]}),v&&l.events&&c.jsx(qy,{events:l.events,aiReasoning:l.aiReasoning}),l.needsFollowUp&&c.jsxs("div",{className:"followup-nudge-section",children:[c.jsx("div",{className:"followup-nudge-title",children:"Still important?"}),c.jsx("div",{className:"followup-nudge-subtitle",children:"This action hasn't been touched in a while."}),c.jsxs("div",{className:"followup-nudge-buttons",children:[c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:async()=>{await ey(l.id),Re(),a()},children:"Still relevant"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:()=>{Ae("reschedule"),yt("")},children:"Reschedule"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn followup-archive-btn",onClick:()=>R({type:"archive"}),children:"Archive"})]})]}),at&&c.jsxs("div",{className:"date-picker-inline",children:[c.jsx("span",{className:"date-picker-label",children:at==="defer"?"Defer until:":"Reschedule to:"}),c.jsx("input",{type:"date",className:"form-input",value:Ze,onChange:E=>yt(E.target.value),style:{padding:"8px 10px",fontSize:"13px",flex:1,minWidth:0}}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!Ze,onClick:async()=>{if(at==="defer")await qm();else if(at==="reschedule"&&l)try{await Xc(l.id,{dueDate:Ze,version:l.version}),Ae(null),yt(""),Re(),a()}catch(E){console.error("Failed to reschedule:",E)}},children:"Confirm"}),c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{Ae(null),yt("")},children:"Cancel"})]}),c.jsxs("div",{className:"action-view-buttons",children:[l.container==="CANDIDATES"&&c.jsx("button",{className:"btn btn-primary",onClick:km,children:"Move to Now"}),l.container!=="WAITING"&&c.jsx("button",{className:"btn btn-secondary",onClick:()=>N(!0),children:"Add Trigger"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!0),children:"Edit"}),c.jsxs("button",{className:"btn btn-success",onClick:Bm,children:["Complete",l.recurrenceRule?" & Schedule Next":""]})]}),h&&c.jsx("div",{className:"next-created-banner",children:h}),c.jsx("button",{className:"feedback-btn",onClick:()=>_(!T),children:"AI parsed incorrectly?"}),T&&c.jsxs("div",{className:"feedback-panel",children:[c.jsx("p",{className:"feedback-title",children:"What was wrong?"}),c.jsxs("div",{className:"feedback-options",children:[C==="urgency"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct urgency:"}),c.jsx("div",{className:"picker-grid",children:Wm.map(E=>c.jsx("button",{className:`picker-grid-btn${P===E?" picker-grid-btn--selected":""}${l.urgency===E?" picker-grid-btn--current":""}`,onClick:()=>Me(E),disabled:l.urgency===E,children:sl[E]},E))}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{k(null),Me("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!P,onClick:()=>{lc("urgency_incorrect",P),k(null),Me("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{k("urgency"),Me("")},children:"Wrong urgency level"}),C==="container"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct container:"}),c.jsx("div",{className:"picker-grid",children:Qs.map(E=>c.jsx("button",{className:`picker-grid-btn${P===E?" picker-grid-btn--selected":""}${l.container===E?" picker-grid-btn--current":""}`,onClick:()=>Me(E),disabled:l.container===E,children:Nt[E]},E))}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{k(null),Me("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!P,onClick:()=>{lc("container_incorrect",P),k(null),Me("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{k("container"),Me("")},children:"Wrong container"}),c.jsx("button",{className:"feedback-option",onClick:()=>R({type:"text-correction"}),children:"Parsed text is wrong"})]})]}),J&&c.jsxs("div",{className:"reclassify-panel",children:[c.jsx("p",{className:"feedback-title",children:"Move to container:"}),c.jsx("div",{className:"picker-grid",children:Qs.map(E=>c.jsx("button",{className:`picker-grid-btn${l.container===E?" picker-grid-btn--current":""}`,disabled:l.container===E,onClick:()=>Qm(E),children:Nt[E]},E))}),c.jsx("button",{className:"btn btn-secondary btn-block",style:{marginTop:8},onClick:()=>Oe(!1),children:"Cancel"})]})]}),y&&c.jsx(Xy,{actionId:e,onClose:()=>N(!1),onCreated:ac}),O&&O.type==="delete"&&c.jsx(ht,{title:"Delete Action",message:`Permanently delete "${l.description.substring(0,60)}"? This cannot be undone.`,confirmLabel:"Delete",danger:!0,onConfirm:()=>Cl(),onCancel:()=>R(null)}),O&&O.type==="archive"&&c.jsx(ht,{title:"Archive Action",message:"Archive this action? You can find it later in search.",confirmLabel:"Archive",onConfirm:()=>Cl(),onCancel:()=>R(null)}),O&&O.type==="merge-id"&&c.jsx(ht,{title:"Merge Action",message:"Enter the ID of the action to merge this into.",confirmLabel:"Next",inputMode:!0,inputPlaceholder:"Action ID",inputLabel:"Target action ID:",onConfirm:E=>Cl(E),onCancel:()=>R(null)}),O&&O.type==="merge-confirm"&&c.jsx(ht,{title:"Confirm Merge",message:`Merge this action into action #${O.primaryId}? This cannot be undone.`,confirmLabel:"Merge",danger:!0,onConfirm:()=>Cl(),onCancel:()=>R(null)}),O&&O.type==="text-correction"&&c.jsx(ht,{title:"Correct Description",message:"What should the parsed text say?",confirmLabel:"Submit",inputMode:!0,inputPlaceholder:"Corrected description...",inputLabel:"Correct text:",onConfirm:E=>Cl(E),onCancel:()=>R(null)}),c.jsx("style",{children:`
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
          .clarification-banner {
            background: rgba(251, 191, 36, 0.1);
            border: 1px solid rgba(251, 191, 36, 0.3);
            border-radius: 8px;
            padding: 12px;
            margin-bottom: 12px;
          }
          .clarification-title {
            font-size: 14px;
            font-weight: 600;
            color: var(--warning);
            margin-bottom: 4px;
          }
          .clarification-list {
            margin: 4px 0 0 0;
            padding-left: 20px;
          }
          .clarification-item {
            font-size: 13px;
            color: var(--text-primary);
            line-height: 1.6;
          }
          .clarification-detail {
            font-size: 13px;
            color: var(--text-secondary);
            line-height: 1.4;
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
          .picker-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 4px;
          }
          .picker-grid-btn {
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
          .feedback-picker-actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
          }
        `})]})})}const Zc={needsClarification:"Needs Clarification",needsTuning:"Needs Tuning"},Qy=["ACTIONABLE_NOW","CANDIDATES","WAITING"];function Zy({activeContainer:e,flagFilter:t,onDataChange:a,onOpenGroups:l}){const[n,i]=x.useState([]),[u,s]=x.useState(!0),[r,d]=x.useState(!1),[p,v]=x.useState(null),[m,y]=x.useState([]),[N,T]=x.useState(!1),[_,o]=x.useState(new Set),[f,h]=x.useState(!1),[b,D]=x.useState(!1);x.useEffect(()=>{A()},[e,t]);async function A(){s(!0);try{let U;if(t?U=await _y(t):U=await Om(e),i(U),a==null||a(),e==="CANDIDATES")try{const{suggestions:X}=await Um();y(X)}catch{y([])}else y([])}catch(U){console.error("Failed to load actions:",U)}finally{s(!1)}}function g(){return t?Zc[t]||t:e?Nt[e]:"All Actions"}function j(){d(!1),A(),ii()}function O(){N?(T(!1),o(new Set),h(!1)):T(!0)}function R(U){o(X=>{const J=new Set(X);return J.has(U)?J.delete(U):J.add(U),J})}function ue(){_.size===n.length?o(new Set):o(new Set(n.map(U=>U.id)))}async function pe(){if(_.size!==0){D(!0);try{await wy(Array.from(_)),M()}catch(U){console.error("Bulk complete failed:",U)}finally{D(!1)}}}async function Xe(){if(_.size!==0){D(!0);try{await Uy(Array.from(_)),M()}catch(U){console.error("Bulk delete failed:",U)}finally{D(!1)}}}async function je(U){if(_.size!==0){D(!0),h(!1);try{await Ry(Array.from(_),U),M()}catch(X){console.error("Bulk move failed:",X)}finally{D(!1)}}}async function Qe(U){try{await Mm(U),A(),ii()}catch(X){console.error("Swipe delete failed:",X)}}function M(){T(!1),o(new Set),h(!1),A(),ii()}if(u)return c.jsx("div",{className:"feed",children:c.jsx("div",{className:"feed-empty",children:"Loading..."})});const z=_.size,w=n.length>0&&_.size===n.length;return c.jsxs("div",{className:"feed",children:[c.jsxs("div",{className:"feed-header",children:[c.jsx("h1",{className:"feed-title",children:g()}),n.length>0&&c.jsx("button",{className:"feed-select-toggle",onClick:O,children:N?"Cancel":"Select"})]}),m.length>0&&l&&c.jsxs("div",{className:"group-suggestion-banner",onClick:l,children:[c.jsx("span",{className:"group-suggestion-icon",children:"📋"}),c.jsxs("span",{className:"group-suggestion-text",children:[m.length," group ",m.length===1?"suggestion":"suggestions"," available"]}),c.jsx("span",{className:"group-suggestion-arrow",children:"›"})]}),N&&n.length>0&&c.jsx("div",{className:"feed-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:w,onChange:ue}),"Select All (",n.length,")"]})}),n.length===0?c.jsx("div",{className:"feed-empty",children:t?`No items ${Zc[t]?"flagged as "+Zc[t].toLowerCase():""}`:e?`No items in ${Nt[e]}`:"No actions yet. Tap + to add one."}):n.map(U=>c.jsx(Yy,{action:U,onDelete:Qe,selectable:N,selected:_.has(U.id),onSelect:R,onClick:()=>{N?R(U.id):v(U.id)}},U.id)),N&&z>0&&c.jsxs("div",{className:"bulk-toolbar",children:[c.jsxs("button",{className:"bulk-btn bulk-complete",onClick:pe,disabled:b,children:["Complete (",z,")"]}),c.jsxs("button",{className:"bulk-btn bulk-delete",onClick:Xe,disabled:b,children:["Delete (",z,")"]}),c.jsxs("div",{className:"bulk-move-wrapper",children:[c.jsxs("button",{className:"bulk-btn bulk-move",onClick:()=>h(!f),disabled:b,children:["Move (",z,")"]}),f&&c.jsx("div",{className:"bulk-move-dropdown",children:Qy.map(U=>c.jsx("button",{className:"bulk-move-option",onClick:()=>je(U),children:Nt[U]},U))})]})]}),c.jsx("button",{className:"quick-capture",onClick:()=>d(!0),children:"+"}),r&&c.jsx(ky,{onClose:()=>d(!1),onCreated:j}),p&&c.jsx(Rm,{actionId:p,onClose:()=>v(null),onUpdate:()=>{A(),v(null)}})]})}function Vy({onClose:e}){const[t,a]=x.useState(null),[l,n]=x.useState(null),[i,u]=x.useState(!0),[s,r]=x.useState(!1),[d,p]=x.useState(null),[v,m]=x.useState("default"),[y,N]=x.useState(!1),[T,_]=x.useState(!1),[o,f]=x.useState(null),[h,b]=x.useState(null),[D,A]=x.useState(!1);x.useEffect(()=>{g(),ue()},[]);async function g(){u(!0);try{const[z,w]=await Promise.all([_m(),uy()]);a(z),n(w)}catch(z){console.error("Failed to load settings data:",z)}finally{u(!1)}}async function j(){try{const{url:z}=await sy();window.location.href=z}catch(z){console.error("Failed to get auth URL:",z),alert("Failed to start Gmail connection")}}async function O(){try{await ry(),A(!1),await g()}catch(z){console.error("Failed to disconnect Gmail:",z)}}async function R(){r(!0),p(null);try{const z=await oy();p(z),await g()}catch(z){console.error("Scan failed:",z),p({success:!1,emailsScanned:0,actionsCreated:0,errors:["Scan failed"]})}finally{r(!1)}}async function ue(){if(!("Notification"in window)||!("serviceWorker"in navigator)){m("unsupported");return}if(m(Notification.permission),Notification.permission==="granted"){const z=await navigator.serviceWorker.ready.catch(()=>null);if(z){const w=await z.pushManager.getSubscription();N(!!w)}}}async function pe(){_(!0);try{const z=await Notification.requestPermission();if(m(z),z!=="granted")return;const{key:w}=await zy();if(!w){alert("Server not configured for push notifications");return}const J=(await(await navigator.serviceWorker.ready).pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:je(w)})).toJSON();await Cy(J.endpoint,J.keys.p256dh,J.keys.auth),N(!0)}catch(z){console.error("Failed to enable notifications:",z),alert("Failed to enable notifications")}finally{_(!1)}}async function Xe(){_(!0);try{const w=await(await navigator.serviceWorker.ready).pushManager.getSubscription();w&&(await Dy(w.endpoint),await w.unsubscribe()),N(!1)}catch(z){console.error("Failed to disable notifications:",z)}finally{_(!1)}}function je(z){const w="=".repeat((4-z.length%4)%4),U=(z+w).replace(/-/g,"+").replace(/_/g,"/"),X=window.atob(U);return new Uint8Array([...X].map(Oe=>Oe.charCodeAt(0))).buffer}async function Qe(z,w){f(z),b(null);try{const U=await w();b({key:z,...U})}catch{b({key:z,success:!1,message:"Request failed"})}finally{f(null)}}function M(z){if(!z)return"Never";const w=new Date(z),X=new Date().getTime()-w.getTime(),J=Math.floor(X/6e4),Oe=Math.floor(J/60),at=Math.floor(Oe/24);return J<1?"Just now":J<60?`${J}m ago`:Oe<24?`${Oe}h ago`:`${at}d ago`}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content settings-modal",onClick:z=>z.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Settings"}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),i?c.jsx("div",{className:"settings-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Gmail Integration"}),c.jsxs("div",{className:"settings-gmail",children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Status"}),c.jsx("span",{className:`gmail-status-value ${l!=null&&l.connected?"connected":"disconnected"}`,children:l!=null&&l.connected?"Connected":"Not Connected"})]}),l!=null&&l.connected?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Last Scan"}),c.jsx("span",{className:"gmail-status-value",children:M(l.lastScan)})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Emails Scanned"}),c.jsx("span",{className:"gmail-status-value",children:l.itemsScanned})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Actions Created"}),c.jsx("span",{className:"gmail-status-value",children:l.actionsCreated})]}),l.lastError&&c.jsxs("div",{className:"gmail-error",children:[c.jsx("span",{className:"gmail-error-label",children:"Last Error"}),c.jsx("p",{children:l.lastError})]}),d&&c.jsx("div",{className:`scan-result ${d.success?"success":"error"}`,children:d.success?`Scanned ${d.emailsScanned} emails, created ${d.actionsCreated} actions`:`Scan failed: ${d.errors.join(", ")}`}),c.jsxs("div",{className:"gmail-buttons",children:[c.jsx("button",{className:"btn btn-primary",onClick:R,disabled:s,children:s?"Scanning...":"Scan Now"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>A(!0),children:"Disconnect"})]})]}):c.jsxs("div",{className:"gmail-connect",children:[c.jsx("p",{className:"gmail-connect-text",children:"Connect your Gmail to automatically scan for actionable emails."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:j,children:"Connect Gmail"})]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Push Notifications"}),c.jsx("div",{className:"settings-notifications",children:v==="unsupported"?c.jsx("p",{className:"notif-note",children:"Push notifications require installing this app and iOS 16.4+."}):v==="denied"?c.jsx("p",{className:"notif-note notif-denied",children:"Notifications blocked. Enable them in device Settings > Safari."}):y?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-status notif-enabled",children:"Notifications enabled"}),c.jsx("button",{className:"btn btn-secondary btn-block",onClick:Xe,disabled:T,children:T?"Disabling...":"Disable Notifications"})]}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-note",children:"Get notified when triggers fire or actions need attention."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:pe,disabled:T,children:T?"Enabling...":"Enable Notifications"})]})})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"System Health"}),c.jsxs("div",{className:"settings-health",children:[c.jsxs("div",{className:"health-row",children:[c.jsx("span",{className:"health-label",children:"Overall Status"}),c.jsx("span",{className:`health-value ${t==null?void 0:t.status}`,children:(t==null?void 0:t.status)==="ok"?"All Systems OK":"Issues Detected"})]}),(t==null?void 0:t.errors)&&t.errors.length>0&&c.jsxs("div",{className:"health-errors",children:[c.jsx("span",{className:"health-errors-label",children:"Errors"}),t.errors.map((z,w)=>c.jsx("p",{className:"health-error",children:z},w))]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Scan Schedule"}),c.jsxs("div",{className:"settings-schedule",children:[c.jsx("p",{children:"Automatic Gmail scans run every 4 hours."}),c.jsx("p",{className:"schedule-note",children:"Trigger checks run hourly. Web conditions checked every 4 hours per trigger. Follow-up reminders sent daily at 9 AM."})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Testing Tools"}),c.jsxs("div",{className:"settings-tools",children:[c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Check for stale actions"}),c.jsx("div",{className:"tool-desc",children:`Looks at all your active actions and flags ones you haven't touched in a while with a "Still important?" prompt. Normally happens automatically every morning at 9 AM.`})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>Qe("followups",ty),disabled:o!==null,children:o==="followups"?"Running…":"Run now"})]}),c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Fire due triggers & check web conditions"}),c.jsx("div",{className:"tool-desc",children:"Two things in one: (1) promotes any Waiting actions whose due date has arrived into your active list, and (2) searches the web to see if any real-world conditions you're watching — like a store sale or product launch — have come true. Normally runs every hour / every 4 hours."})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>Qe("triggers",ay),disabled:o!==null,children:o==="triggers"?"Running…":"Run now"})]}),h&&c.jsxs("div",{className:`tool-result ${h.success?"success":"error"}`,children:[h.success?"✓":"✗"," ",h.message]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"About"}),c.jsxs("p",{className:"settings-about",children:["Action Manager v1.0",c.jsx("br",{}),"Your personal commitment tracker"]})]})]}),D&&c.jsx(ht,{title:"Disconnect Gmail",message:"Are you sure you want to disconnect Gmail? Automatic email scanning will stop.",confirmLabel:"Disconnect",danger:!0,onConfirm:O,onCancel:()=>A(!1)}),c.jsx("style",{children:`
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
        `})]})})}function Ky({onClose:e,onSelectAction:t}){const[a,l]=x.useState(""),[n,i]=x.useState([]),[u,s]=x.useState(0),[r,d]=x.useState(!1),[p,v]=x.useState(!1),[m,y]=x.useState(""),[N,T]=x.useState(""),[_,o]=x.useState(!1),[f,h]=x.useState(!1),b=x.useCallback(async(g=!0)=>{d(!0);try{const j=await hy({q:a||void 0,container:m||void 0,urgency:N||void 0,includeArchived:_,archiveOnly:f,limit:20,offset:g?0:n.length});i(g?j.actions:O=>[...O,...j.actions]),s(j.total),v(j.hasMore)}catch(j){console.error("Search failed:",j)}finally{d(!1)}},[a,m,N,_,f,n.length]);x.useEffect(()=>{const g=setTimeout(()=>{b(!0)},300);return()=>clearTimeout(g)},[a,m,N,_,f]);function D(g){return g?new Date(g).toLocaleDateString("en-US",{month:"short",day:"numeric"}):""}function A(){b(!1)}return c.jsxs("div",{className:"search-overlay",children:[c.jsxs("div",{className:"search-container",children:[c.jsxs("div",{className:"search-header",children:[c.jsxs("div",{className:"search-input-wrapper",children:[c.jsx("span",{className:"search-icon",children:"🔍"}),c.jsx("input",{type:"text",className:"search-input",placeholder:"Search actions...",value:a,onChange:g=>l(g.target.value),autoFocus:!0}),a&&c.jsx("button",{className:"search-clear",onClick:()=>l(""),children:"✕"})]}),c.jsx("button",{className:"search-close",onClick:e,children:"Cancel"})]}),c.jsxs("div",{className:"search-filters",children:[c.jsxs("select",{className:"search-filter",value:m,onChange:g=>y(g.target.value),children:[c.jsx("option",{value:"",children:"All Containers"}),Object.entries(Nt).map(([g,j])=>c.jsx("option",{value:g,children:j},g))]}),c.jsxs("select",{className:"search-filter",value:N,onChange:g=>T(g.target.value),children:[c.jsx("option",{value:"",children:"All Urgency"}),Object.entries(sl).map(([g,j])=>c.jsx("option",{value:g,children:j},g))]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:_,onChange:g=>{o(g.target.checked),g.target.checked&&h(!1)}}),"Include archived"]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:f,onChange:g=>{h(g.target.checked),g.target.checked&&o(!1)}}),"Archive only"]})]}),c.jsx("div",{className:"search-results",children:r&&n.length===0?c.jsx("div",{className:"search-loading",children:"Searching..."}):n.length===0?c.jsx("div",{className:"search-empty",children:a?"No actions found":"Start typing to search"}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"search-count",children:[u," result",u!==1?"s":""]}),n.map(g=>c.jsxs("div",{className:`search-result ${g.isArchived?"archived":""}`,onClick:()=>t(g.id),children:[c.jsx("div",{className:`result-urgency ${g.urgency.toLowerCase()}`}),c.jsxs("div",{className:"result-content",children:[c.jsx("div",{className:"result-description",children:g.description}),c.jsxs("div",{className:"result-meta",children:[c.jsx("span",{className:"result-container",children:Nt[g.container]}),g.dueDate&&c.jsxs("span",{className:"result-date",children:["Due ",D(g.dueDate)]}),g.isArchived&&c.jsx("span",{className:"result-archived",children:"Archived"})]})]})]},g.id)),p&&c.jsx("button",{className:"search-load-more",onClick:A,disabled:r,children:r?"Loading...":"Load more"})]})})]}),c.jsx("style",{children:`
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
      `})]})}function Jy({onClose:e,onSelectAction:t}){const[a,l]=x.useState([]),[n,i]=x.useState([]),[u,s]=x.useState(!0),[r,d]=x.useState(!1),[p,v]=x.useState(""),[m,y]=x.useState(""),[N,T]=x.useState(!1),[_,o]=x.useState(null),[f,h]=x.useState(""),[b,D]=x.useState([]),[A,g]=x.useState(new Set),[j,O]=x.useState(new Set),[R,ue]=x.useState(!1),[pe,Xe]=x.useState(null);x.useEffect(()=>{je()},[]);async function je(){s(!0);try{const[C,k]=await Promise.all([py(),Um()]);l(C),i(k.suggestions)}catch(C){console.error("Failed to load groups:",C)}finally{s(!1)}}async function Qe(){if(p.trim())try{await jo({name:p.trim(),description:m.trim()||void 0}),v(""),y(""),d(!1),je()}catch(C){console.error("Failed to create group:",C)}}async function M(C){try{await jo({name:C.suggestedName,description:C.reason,actionIds:C.actionIds}),je()}catch(k){console.error("Failed to create group from suggestion:",k)}}async function z(C){try{await vy(C),Xe(null),je()}catch(k){console.error("Failed to delete group:",k)}}async function w(C){o(C),h(""),ue(!0);try{const P=(await Om()).filter(Qt=>!Qt.archivedAt&&!Qt.completedAt);D(P);const Me=a.find(Qt=>Qt.id===C),Re=new Set((Me==null?void 0:Me.actions.map(Qt=>Qt.id))||[]);g(new Set(Re)),O(new Set(Re))}catch(k){console.error("Failed to load actions:",k)}finally{ue(!1)}}async function U(){if(_!==null)try{const C=[...A].filter(P=>!j.has(P)),k=[...j].filter(P=>!A.has(P));C.length>0&&await by(_,C);for(const P of k)await Ao(_,P);o(null),je()}catch(C){console.error("Failed to update group actions:",C)}}function X(C){g(k=>{const P=new Set(k);return P.has(C)?P.delete(C):P.add(C),P})}const J=x.useMemo(()=>{if(!f.trim())return b;const C=f.toLowerCase();return b.filter(k=>k.description.toLowerCase().includes(C))},[b,f]);async function Oe(C,k){try{await Ao(C,k),je()}catch(P){console.error("Failed to remove action from group:",P)}}async function at(C){try{await yy(C),je()}catch(k){console.error("Failed to archive group:",k)}}function Ae(C){return C.actions.filter(k=>k.completedAt!==null).length}function Ze(C){return C.actions.length>0&&Ae(C)===C.actions.length}function yt(C){return C.toLowerCase()}return c.jsxs("div",{className:"groups-overlay",children:[c.jsxs("div",{className:"groups-container",children:[c.jsxs("div",{className:"groups-header",children:[c.jsx("h2",{className:"groups-title",children:"Action Groups"}),c.jsxs("div",{className:"groups-header-actions",children:[c.jsx("button",{className:"btn btn-primary btn-small",onClick:()=>d(!0),children:"+ New Group"}),c.jsx("button",{className:"groups-close",onClick:e,children:"Done"})]})]}),c.jsx("div",{className:"groups-content",children:u?c.jsx("div",{className:"groups-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:"groups-section",children:[c.jsx("h3",{className:"section-title",children:"Your Groups"}),a.length===0?c.jsx("div",{className:"groups-empty",children:"No groups yet. Create one or accept a suggestion below."}):a.map(C=>c.jsxs("div",{className:"group-card",children:[Ze(C)&&c.jsxs("div",{className:"group-archive-banner",children:[c.jsx("span",{children:"All actions complete! Archive this group?"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>at(C.id),children:"Archive"})]}),c.jsxs("div",{className:"group-header",children:[c.jsxs("div",{className:"group-info",children:[c.jsx("div",{className:"group-name",children:C.name}),C.description&&c.jsx("div",{className:"group-description",children:C.description})]}),c.jsxs("div",{className:"group-stats",children:[c.jsx("span",{className:`urgency-badge ${yt(C.highestUrgency)}`,children:sl[C.highestUrgency]}),c.jsxs("span",{className:"group-count",children:[C.activeCount,"/",C.actionCount," active"]})]})]}),c.jsxs("div",{className:"group-progress",children:[c.jsxs("div",{className:"progress-text",children:[Ae(C)," of ",C.actions.length," complete"]}),c.jsx("div",{className:"progress-bar-track",children:c.jsx("div",{className:"progress-bar-fill",style:{width:C.actions.length>0?`${Ae(C)/C.actions.length*100}%`:"0%"}})})]}),c.jsxs("div",{className:"group-actions-list",children:[C.actions.slice(0,3).map(k=>c.jsxs("div",{className:`group-action-item ${k.completedAt?"completed":""}`,children:[c.jsxs("div",{className:"group-action-clickable",onClick:()=>t(k.id),children:[c.jsx("div",{className:`action-urgency-dot ${yt(k.urgency)}`}),c.jsx("span",{className:"action-text",children:k.description})]}),c.jsx("button",{className:"action-remove-btn",onClick:P=>{P.stopPropagation(),Oe(C.id,k.id)},title:"Remove from group",children:"×"})]},k.id)),C.actions.length>3&&c.jsxs("div",{className:"group-more",children:["+",C.actions.length-3," more"]})]}),c.jsxs("div",{className:"group-footer",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>w(C.id),children:"Add Actions"}),c.jsx("button",{className:"btn-link",onClick:()=>Xe(C.id),children:"Delete Group"})]})]},C.id))]}),n.length>0&&c.jsxs("section",{className:"groups-section suggestions-section",children:[c.jsxs("button",{className:"suggestions-toggle",onClick:()=>T(!N),children:[c.jsxs("h3",{className:"section-title",style:{margin:0},children:["Suggested Groups (",n.length,")"]}),c.jsx("span",{className:"toggle-arrow",children:N?"▲":"▼"})]}),N&&c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"section-subtitle",children:"Based on similar keywords in your ungrouped actions"}),n.map((C,k)=>c.jsxs("div",{className:"suggestion-card",children:[c.jsxs("div",{className:"suggestion-content",children:[c.jsx("div",{className:"suggestion-name",children:C.suggestedName}),c.jsx("div",{className:"suggestion-reason",children:C.reason}),c.jsxs("div",{className:"suggestion-count",children:[C.actionIds.length," actions"]})]}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>M(C),children:"Create"})]},k))]})]})]})})]}),r&&c.jsx("div",{className:"modal-overlay",onClick:()=>d(!1),children:c.jsxs("div",{className:"modal-content",onClick:C=>C.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Create Group"}),c.jsx("button",{className:"modal-close",onClick:()=>d(!1),children:"×"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Group Name"}),c.jsx("input",{type:"text",className:"form-input",value:p,onChange:C=>v(C.target.value),placeholder:"e.g., Project Alpha",autoFocus:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("textarea",{className:"form-textarea",value:m,onChange:C=>y(C.target.value),placeholder:"What is this group about?",rows:2})]}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:Qe,disabled:!p.trim(),children:"Create Group"})]})}),_!==null&&c.jsx("div",{className:"modal-overlay",onClick:()=>o(null),children:c.jsxs("div",{className:"modal-content add-actions-modal",onClick:C=>C.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Add Actions to Group"}),c.jsx("button",{className:"modal-close",onClick:()=>o(null),children:"×"})]}),c.jsx("div",{className:"form-group",children:c.jsx("input",{type:"text",className:"form-input",value:f,onChange:C=>h(C.target.value),placeholder:"Search actions...",autoFocus:!0})}),!R&&J.length>0&&c.jsx("div",{className:"add-actions-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:J.every(C=>A.has(C.id)),onChange:()=>{const C=J.every(k=>A.has(k.id));g(k=>{const P=new Set(k);for(const Me of J)C?P.delete(Me.id):P.add(Me.id);return P})}}),"Select All (",J.length,")"]})}),c.jsx("div",{className:"add-actions-list",children:R?c.jsx("div",{className:"groups-loading",children:"Loading actions..."}):J.length===0?c.jsx("div",{className:"groups-empty",children:"No matching actions found."}):J.map(C=>c.jsxs("label",{className:"add-action-row",children:[c.jsx("input",{type:"checkbox",checked:A.has(C.id),onChange:()=>X(C.id)}),c.jsx("div",{className:`action-urgency-dot ${yt(C.urgency)}`}),c.jsx("span",{className:"action-text",children:C.description})]},C.id))}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:U,children:"Save"})]})}),pe!==null&&c.jsx(ht,{title:"Delete Group",message:"Delete this group? Actions will be ungrouped but not deleted.",confirmLabel:"Delete",danger:!0,onConfirm:()=>z(pe),onCancel:()=>Xe(null)}),c.jsx("style",{children:`
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
      `})]})}function $y({onClose:e}){const[t,a]=x.useState([]),[l,n]=x.useState(null),[i,u]=x.useState(!0),[s,r]=x.useState("proposed"),[d,p]=x.useState(null),[v,m]=x.useState(null),[y,N]=x.useState(null);x.useEffect(()=>{T()},[]);async function T(){u(!0);try{const[g,j]=await Promise.all([Sy(),Ey()]);a(g),n(j)}catch(g){console.error("Failed to load tuning data:",g)}finally{u(!1)}}async function _(g){try{await Ny(g),T()}catch(j){console.error("Failed to activate rule:",j)}}async function o(g,j=!1,O){try{await jy(g,O,j),p(null),N(null),T()}catch(R){console.error("Failed to reject rule:",R)}}async function f(g){try{await Ay(g),T()}catch(j){console.error("Failed to update threshold:",j)}}async function h(g){try{await Ty(g),N(null),T()}catch(j){console.error("Failed to delete rule:",j)}}const b=t.filter(g=>{switch(s){case"proposed":return g.status==="PROPOSED";case"shadow":return g.status==="SHADOW";case"active":return g.status==="ACTIVE";case"rejected":return g.status==="REJECTED"}});function D(g){switch(g){case"SHADOW":return"Testing";case"PROPOSED":return"Ready";case"ACTIVE":return"Active";case"REJECTED":return"Rejected";default:return g}}function A(g){return g.shadowCount===0?0:Math.round(g.shadowSuccesses/g.shadowCount*100)}return c.jsxs("div",{className:"tuning-overlay",children:[c.jsxs("div",{className:"tuning-container",children:[c.jsxs("div",{className:"tuning-header",children:[c.jsx("h2",{className:"tuning-title",children:"AI Tuning"}),c.jsx("button",{className:"tuning-close",onClick:e,children:"Done"})]}),l&&c.jsxs("div",{className:"tuning-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.active}),c.jsx("span",{className:"stat-label",children:"Active Rules"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.proposed}),c.jsx("span",{className:"stat-label",children:"Pending Review"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.shadow}),c.jsx("span",{className:"stat-label",children:"Testing"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsxs("span",{className:"stat-value",children:[l.avgSuccessRate,"%"]}),c.jsx("span",{className:"stat-label",children:"Avg Success"})]})]}),c.jsxs("div",{className:"tuning-tabs",children:[c.jsxs("button",{className:`tuning-tab ${s==="proposed"?"active":""}`,onClick:()=>r("proposed"),children:["Pending ",l&&l.counts.proposed>0&&`(${l.counts.proposed})`]}),c.jsx("button",{className:`tuning-tab ${s==="shadow"?"active":""}`,onClick:()=>r("shadow"),children:"Testing"}),c.jsx("button",{className:`tuning-tab ${s==="active"?"active":""}`,onClick:()=>r("active"),children:"Active"}),c.jsx("button",{className:`tuning-tab ${s==="rejected"?"active":""}`,onClick:()=>r("rejected"),children:"Rejected"})]}),c.jsx("div",{className:"tuning-content",children:i?c.jsx("div",{className:"tuning-loading",children:"Loading..."}):b.length===0?c.jsx("div",{className:"tuning-empty",children:t.length===0?c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"No tuning rules yet."}),c.jsx("p",{className:"tuning-hint",children:"Tuning rules help the AI learn from your corrections. When you correct an action's urgency or container, the system creates rules to improve future parsing."})]}):c.jsxs(c.Fragment,{children:[s==="proposed"&&"No rules ready for review.",s==="shadow"&&"No rules currently testing.",s==="active"&&"No active tuning rules.",s==="rejected"&&"No rejected rules.",c.jsx("p",{className:"tuning-hint",children:"Tuning rules are created when you provide feedback on AI-parsed actions."})]})}):b.map(g=>{const j=v===g.id;return c.jsxs("div",{className:`rule-card ${j?"rule-card-expanded":""}`,children:[c.jsxs("div",{className:"rule-collapsed",onClick:()=>m(j?null:g.id),children:[c.jsxs("div",{className:"rule-collapsed-top",children:[c.jsx("span",{className:`rule-category category-${g.category}`,children:g.category}),c.jsx("span",{className:`rule-status status-${g.status.toLowerCase()}`,children:D(g.status)}),c.jsx("span",{className:"rule-expand-icon",children:j?"▲":"▼"})]}),c.jsx("div",{className:"rule-description-collapsed",children:j?g.description:g.description.length>60?g.description.slice(0,60)+"...":g.description}),!j&&(g.status==="SHADOW"||g.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(g.shadowCount/g.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[g.shadowCount,"/",g.shadowThreshold," tests (",A(g),"% success)"]})]})]}),j&&c.jsxs("div",{className:"rule-expanded-body",children:[c.jsxs("div",{className:"rule-details",children:[c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"When:"}),c.jsx("span",{className:"detail-text",children:g.condition})]}),c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"Then:"}),c.jsx("span",{className:"detail-text",children:g.transformation})]})]}),(g.status==="SHADOW"||g.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(g.shadowCount/g.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[g.shadowCount,"/",g.shadowThreshold," tests (",A(g),"% success)"]})]}),g.userFeedback&&c.jsxs("div",{className:"rule-feedback",children:[c.jsx("span",{className:"detail-label",children:"Feedback:"}),g.userFeedback]}),c.jsxs("div",{className:"rule-actions",children:[g.status==="PROPOSED"&&d!==g.id&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-success btn-small",onClick:O=>{O.stopPropagation(),_(g.id)},children:"Activate"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:O=>{O.stopPropagation(),p(g.id)},children:"Reject"})]}),g.status==="PROPOSED"&&d===g.id&&c.jsxs("div",{className:"reject-options",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:O=>{O.stopPropagation(),N({type:"reject-feedback",ruleId:g.id})},children:"Just reject"}),c.jsxs("button",{className:"btn btn-secondary btn-small reject-stop",onClick:O=>{O.stopPropagation(),o(g.id,!0)},children:["Stop ",g.category," suggestions"]}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:O=>{O.stopPropagation(),f(g.id),p(null)},children:"Ask less often"}),c.jsx("button",{className:"btn-link",onClick:O=>{O.stopPropagation(),p(null)},children:"Cancel"})]}),g.status==="SHADOW"&&c.jsx("button",{className:"btn btn-primary btn-small",onClick:O=>{O.stopPropagation(),_(g.id)},children:"Activate Early"}),c.jsx("button",{className:"btn-link danger",onClick:O=>{O.stopPropagation(),N({type:"delete",ruleId:g.id})},children:"Delete"})]})]})]},g.id)})})]}),(y==null?void 0:y.type)==="delete"&&c.jsx(ht,{title:"Delete Rule",message:"Delete this tuning rule?",confirmLabel:"Delete",danger:!0,onConfirm:()=>h(y.ruleId),onCancel:()=>N(null)}),(y==null?void 0:y.type)==="reject-feedback"&&c.jsx(ht,{title:"Reject Rule",message:"Why are you rejecting this rule?",confirmLabel:"Reject",inputMode:!0,inputPlaceholder:"Reason (optional)",inputLabel:"Feedback:",onConfirm:g=>o(y.ruleId,!1,g||void 0),onCancel:()=>N(null)}),c.jsx("style",{children:`
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
      `})]})}function Wy(){const[e,t]=x.useState("ACTIONABLE_NOW"),[a,l]=x.useState(void 0),[n,i]=x.useState(!1),[u,s]=x.useState(!1),[r,d]=x.useState(!1),[p,v]=x.useState(!1),[m,y]=x.useState(null),[N,T]=x.useState(0),[_,o]=x.useState(null);x.useEffect(()=>{f();const j=setInterval(f,5*60*1e3);return()=>clearInterval(j)},[]);async function f(){try{const j=await _m();o(j)}catch{}}const h=_&&_.errors.length>0;function b(){T(j=>j+1),ii()}function D(j){s(!1),y(j)}function A(j){j==="TUNING"?v(!0):(l(void 0),t(j))}function g(j){t(null),l(j)}return c.jsxs("div",{className:"app",children:[c.jsxs("header",{className:"app-header",children:[c.jsx("button",{className:"search-btn",onClick:()=>s(!0),title:"Search",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("path",{d:"M21 21l-4.35-4.35"})]})}),c.jsx("button",{className:"search-btn",onClick:()=>d(!0),title:"Groups",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]})}),c.jsx("button",{className:`settings-btn ${h?"has-errors":""}`,onClick:()=>i(!0),title:"Settings",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),h&&c.jsx("div",{className:"error-banner",onClick:()=>i(!0),children:"⚠ System issue detected — tap to view in Settings"}),c.jsxs("main",{className:"main-content",children:[c.jsx(Hy,{activeContainer:e,onContainerChange:A,onFlagFilter:g}),c.jsx(Zy,{activeContainer:e,flagFilter:a,onOpenGroups:()=>d(!0)},N)]}),n&&c.jsx(Vy,{onClose:()=>i(!1)}),u&&c.jsx(Ky,{onClose:()=>s(!1),onSelectAction:D}),r&&c.jsx(Jy,{onClose:()=>d(!1),onSelectAction:j=>{d(!1),y(j)}}),p&&c.jsx($y,{onClose:()=>v(!1)}),m&&c.jsx(Rm,{actionId:m,onClose:()=>y(null),onUpdate:()=>{b(),y(null)}})]})}Jp.createRoot(document.getElementById("root")).render(c.jsx(x.StrictMode,{children:c.jsx(Wy,{})}));
