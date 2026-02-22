(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();var zr={exports:{}},Ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg=Symbol.for("react.transitional.element"),zg=Symbol.for("react.fragment");function Cr(e,t,l){var a=null;if(l!==void 0&&(a=""+l),t.key!==void 0&&(a=""+t.key),"key"in t){l={};for(var n in t)n!=="key"&&(l[n]=t[n])}else l=t;return t=l.ref,{$$typeof:Eg,type:e,key:a,ref:t!==void 0?t:null,props:l}}Ri.Fragment=zg;Ri.jsx=Cr;Ri.jsxs=Cr;zr.exports=Ri;var c=zr.exports,Dr={exports:{}},B={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu=Symbol.for("react.transitional.element"),Cg=Symbol.for("react.portal"),Dg=Symbol.for("react.fragment"),Og=Symbol.for("react.strict_mode"),_g=Symbol.for("react.profiler"),Mg=Symbol.for("react.consumer"),wg=Symbol.for("react.context"),Ug=Symbol.for("react.forward_ref"),Rg=Symbol.for("react.suspense"),Hg=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),Gg=Symbol.for("react.activity"),Js=Symbol.iterator;function Bg(e){return e===null||typeof e!="object"?null:(e=Js&&e[Js]||e["@@iterator"],typeof e=="function"?e:null)}var _r={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mr=Object.assign,wr={};function ga(e,t,l){this.props=e,this.context=t,this.refs=wr,this.updater=l||_r}ga.prototype.isReactComponent={};ga.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ga.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ur(){}Ur.prototype=ga.prototype;function Qu(e,t,l){this.props=e,this.context=t,this.refs=wr,this.updater=l||_r}var Zu=Qu.prototype=new Ur;Zu.constructor=Qu;Mr(Zu,ga.prototype);Zu.isPureReactComponent=!0;var $s=Array.isArray;function Xc(){}var ie={H:null,A:null,T:null,S:null},Rr=Object.prototype.hasOwnProperty;function Vu(e,t,l){var a=l.ref;return{$$typeof:Xu,type:e,key:t,ref:a!==void 0?a:null,props:l}}function Yg(e,t){return Vu(e.type,t,e.props)}function Ku(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xu}function qg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return t[l]})}var Ws=/\/+/g;function ic(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qg(""+e.key):t.toString(36)}function Lg(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Xc,Xc):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Rl(e,t,l,a,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case Xu:case Cg:u=!0;break;case Or:return u=e._init,Rl(u(e._payload),t,l,a,n)}}if(u)return n=n(e),u=a===""?"."+ic(e,0):a,$s(n)?(l="",u!=null&&(l=u.replace(Ws,"$&/")+"/"),Rl(n,t,l,"",function(d){return d})):n!=null&&(Ku(n)&&(n=Yg(n,l+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Ws,"$&/")+"/")+u)),t.push(n)),1;u=0;var s=a===""?".":a+":";if($s(e))for(var o=0;o<e.length;o++)a=e[o],i=s+ic(a,o),u+=Rl(a,t,l,i,n);else if(o=Bg(e),typeof o=="function")for(e=o.call(e),o=0;!(a=e.next()).done;)a=a.value,i=s+ic(a,o++),u+=Rl(a,t,l,i,n);else if(i==="object"){if(typeof e.then=="function")return Rl(Lg(e),t,l,a,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function Tn(e,t,l){if(e==null)return e;var a=[],n=0;return Rl(e,a,"","",function(i){return t.call(l,i,n++)}),a}function kg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xg={map:Tn,forEach:function(e,t,l){Tn(e,function(){t.apply(this,arguments)},l)},count:function(e){var t=0;return Tn(e,function(){t++}),t},toArray:function(e){return Tn(e,function(t){return t})||[]},only:function(e){if(!Ku(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Activity=Gg;B.Children=Xg;B.Component=ga;B.Fragment=Dg;B.Profiler=_g;B.PureComponent=Qu;B.StrictMode=Og;B.Suspense=Rg;B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie;B.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ie.H.useMemoCache(e)}};B.cache=function(e){return function(){return e.apply(null,arguments)}};B.cacheSignal=function(){return null};B.cloneElement=function(e,t,l){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=Mr({},e.props),n=e.key;if(t!=null)for(i in t.key!==void 0&&(n=""+t.key),t)!Rr.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(a[i]=t[i]);var i=arguments.length-2;if(i===1)a.children=l;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];a.children=u}return Vu(e.type,n,a)};B.createContext=function(e){return e={$$typeof:wg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Mg,_context:e},e};B.createElement=function(e,t,l){var a,n={},i=null;if(t!=null)for(a in t.key!==void 0&&(i=""+t.key),t)Rr.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(n[a]=t[a]);var u=arguments.length-2;if(u===1)n.children=l;else if(1<u){for(var s=Array(u),o=0;o<u;o++)s[o]=arguments[o+2];n.children=s}if(e&&e.defaultProps)for(a in u=e.defaultProps,u)n[a]===void 0&&(n[a]=u[a]);return Vu(e,i,n)};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Ug,render:e}};B.isValidElement=Ku;B.lazy=function(e){return{$$typeof:Or,_payload:{_status:-1,_result:e},_init:kg}};B.memo=function(e,t){return{$$typeof:Hg,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=ie.T,l={};ie.T=l;try{var a=e(),n=ie.S;n!==null&&n(l,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Xc,Fs)}catch(i){Fs(i)}finally{t!==null&&l.types!==null&&(t.types=l.types),ie.T=t}};B.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()};B.use=function(e){return ie.H.use(e)};B.useActionState=function(e,t,l){return ie.H.useActionState(e,t,l)};B.useCallback=function(e,t){return ie.H.useCallback(e,t)};B.useContext=function(e){return ie.H.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e,t){return ie.H.useDeferredValue(e,t)};B.useEffect=function(e,t){return ie.H.useEffect(e,t)};B.useEffectEvent=function(e){return ie.H.useEffectEvent(e)};B.useId=function(){return ie.H.useId()};B.useImperativeHandle=function(e,t,l){return ie.H.useImperativeHandle(e,t,l)};B.useInsertionEffect=function(e,t){return ie.H.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return ie.H.useLayoutEffect(e,t)};B.useMemo=function(e,t){return ie.H.useMemo(e,t)};B.useOptimistic=function(e,t){return ie.H.useOptimistic(e,t)};B.useReducer=function(e,t,l){return ie.H.useReducer(e,t,l)};B.useRef=function(e){return ie.H.useRef(e)};B.useState=function(e){return ie.H.useState(e)};B.useSyncExternalStore=function(e,t,l){return ie.H.useSyncExternalStore(e,t,l)};B.useTransition=function(){return ie.H.useTransition()};B.version="19.2.4";Dr.exports=B;var N=Dr.exports,Hr={exports:{}},Hi={},Gr={exports:{}},Br={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,w){var R=A.length;A.push(w);e:for(;0<R;){var q=R-1>>>1,V=A[q];if(0<n(V,w))A[q]=w,A[R]=V,R=q;else break e}}function l(A){return A.length===0?null:A[0]}function a(A){if(A.length===0)return null;var w=A[0],R=A.pop();if(R!==w){A[0]=R;e:for(var q=0,V=A.length,Oe=V>>>1;q<Oe;){var _e=2*(q+1)-1,Bt=A[_e],be=_e+1,E=A[be];if(0>n(Bt,R))be<V&&0>n(E,Bt)?(A[q]=E,A[be]=R,q=be):(A[q]=Bt,A[_e]=R,q=_e);else if(be<V&&0>n(E,R))A[q]=E,A[be]=R,q=be;else break e}}return w}function n(A,w){var R=A.sortIndex-w.sortIndex;return R!==0?R:A.id-w.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var u=Date,s=u.now();e.unstable_now=function(){return u.now()-s}}var o=[],d=[],h=1,y=null,m=3,g=!1,j=!1,z=!1,_=!1,f=typeof setTimeout=="function"?setTimeout:null,r=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;function v(A){for(var w=l(d);w!==null;){if(w.callback===null)a(d);else if(w.startTime<=A)a(d),w.sortIndex=w.expirationTime,t(o,w);else break;w=l(d)}}function b(A){if(z=!1,v(A),!j)if(l(o)!==null)j=!0,T||(T=!0,le());else{var w=l(d);w!==null&&D(b,w.startTime-A)}}var T=!1,x=-1,C=5,U=-1;function G(){return _?!0:!(e.unstable_now()-U<C)}function se(){if(_=!1,T){var A=e.unstable_now();U=A;var w=!0;try{e:{j=!1,z&&(z=!1,r(x),x=-1),g=!0;var R=m;try{t:{for(v(A),y=l(o);y!==null&&!(y.expirationTime>A&&G());){var q=y.callback;if(typeof q=="function"){y.callback=null,m=y.priorityLevel;var V=q(y.expirationTime<=A);if(A=e.unstable_now(),typeof V=="function"){y.callback=V,v(A),w=!0;break t}y===l(o)&&a(o),v(A)}else a(o);y=l(o)}if(y!==null)w=!0;else{var Oe=l(d);Oe!==null&&D(b,Oe.startTime-A),w=!1}}break e}finally{y=null,m=R,g=!1}w=void 0}}finally{w?le():T=!1}}}var le;if(typeof p=="function")le=function(){p(se)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,ft=Ce.port2;Ce.port1.onmessage=se,le=function(){ft.postMessage(null)}}else le=function(){f(se,0)};function D(A,w){x=f(function(){A(e.unstable_now())},w)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var w=3;break;default:w=m}var R=m;m=w;try{return A()}finally{m=R}},e.unstable_requestPaint=function(){_=!0},e.unstable_runWithPriority=function(A,w){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var R=m;m=A;try{return w()}finally{m=R}},e.unstable_scheduleCallback=function(A,w,R){var q=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?q+R:q):R=q,A){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=R+V,A={id:h++,callback:w,priorityLevel:A,startTime:R,expirationTime:V,sortIndex:-1},R>q?(A.sortIndex=R,t(d,A),l(o)===null&&A===l(d)&&(z?(r(x),x=-1):z=!0,D(b,R-q))):(A.sortIndex=V,t(o,A),j||g||(j=!0,T||(T=!0,le()))),A},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(A){var w=m;return function(){var R=m;m=w;try{return A.apply(this,arguments)}finally{m=R}}}})(Br);Gr.exports=Br;var Qg=Gr.exports,Yr={exports:{}},Ue={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg=N;function qr(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function qt(){}var we={d:{f:qt,r:function(){throw Error(qr(522))},D:qt,C:qt,L:qt,m:qt,X:qt,S:qt,M:qt},p:0,findDOMNode:null},Vg=Symbol.for("react.portal");function Kg(e,t,l){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vg,key:a==null?null:""+a,children:e,containerInfo:t,implementation:l}}var Ha=Zg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Gi(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we;Ue.createPortal=function(e,t){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(qr(299));return Kg(e,t,null,l)};Ue.flushSync=function(e){var t=Ha.T,l=we.p;try{if(Ha.T=null,we.p=2,e)return e()}finally{Ha.T=t,we.p=l,we.d.f()}};Ue.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,we.d.C(e,t))};Ue.prefetchDNS=function(e){typeof e=="string"&&we.d.D(e)};Ue.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var l=t.as,a=Gi(l,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;l==="style"?we.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:n,fetchPriority:i}):l==="script"&&we.d.X(e,{crossOrigin:a,integrity:n,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ue.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var l=Gi(t.as,t.crossOrigin);we.d.M(e,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&we.d.M(e)};Ue.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var l=t.as,a=Gi(l,t.crossOrigin);we.d.L(e,l,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ue.preloadModule=function(e,t){if(typeof e=="string")if(t){var l=Gi(t.as,t.crossOrigin);we.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else we.d.m(e)};Ue.requestFormReset=function(e){we.d.r(e)};Ue.unstable_batchedUpdates=function(e,t){return e(t)};Ue.useFormState=function(e,t,l){return Ha.H.useFormState(e,t,l)};Ue.useFormStatus=function(){return Ha.H.useHostTransitionStatus()};Ue.version="19.2.4";function Lr(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lr)}catch(e){console.error(e)}}Lr(),Yr.exports=Ue;var Jg=Yr.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve=Qg,kr=N,$g=Jg;function S(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Xr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dn(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function Qr(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zr(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Is(e){if(dn(e)!==e)throw Error(S(188))}function Wg(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return Is(n),e;if(i===a)return Is(n),t;i=i.sibling}throw Error(S(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,s=n.child;s;){if(s===l){u=!0,l=n,a=i;break}if(s===a){u=!0,a=n,l=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===l){u=!0,l=i,a=n;break}if(s===a){u=!0,a=i,l=n;break}s=s.sibling}if(!u)throw Error(S(189))}}if(l.alternate!==a)throw Error(S(190))}if(l.tag!==3)throw Error(S(188));return l.stateNode.current===l?e:t}function Vr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Vr(e),t!==null)return t;e=e.sibling}return null}var ce=Object.assign,Fg=Symbol.for("react.element"),En=Symbol.for("react.transitional.element"),_a=Symbol.for("react.portal"),Bl=Symbol.for("react.fragment"),Kr=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),Jr=Symbol.for("react.consumer"),Tt=Symbol.for("react.context"),Ju=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),$u=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Kc=Symbol.for("react.activity"),Ig=Symbol.for("react.memo_cache_sentinel"),Ps=Symbol.iterator;function Aa(e){return e===null||typeof e!="object"?null:(e=Ps&&e[Ps]||e["@@iterator"],typeof e=="function"?e:null)}var Pg=Symbol.for("react.client.reference");function Jc(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pg?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bl:return"Fragment";case Qc:return"Profiler";case Kr:return"StrictMode";case Zc:return"Suspense";case Vc:return"SuspenseList";case Kc:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _a:return"Portal";case Tt:return e.displayName||"Context";case Jr:return(e._context.displayName||"Context")+".Consumer";case Ju:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $u:return t=e.displayName||null,t!==null?t:Jc(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return Jc(e(t))}catch{}}return null}var Ma=Array.isArray,H=kr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=$g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vl={pending:!1,data:null,method:null,action:null},$c=[],Yl=-1;function pt(e){return{current:e}}function Ne(e){0>Yl||(e.current=$c[Yl],$c[Yl]=null,Yl--)}function te(e,t){Yl++,$c[Yl]=e.current,e.current=t}var ht=pt(null),Wa=pt(null),It=pt(null),ai=pt(null);function ni(e,t){switch(te(It,t),te(Wa,e),te(ht,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?cr(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=cr(t),e=hm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ne(ht),te(ht,e)}function aa(){Ne(ht),Ne(Wa),Ne(It)}function Wc(e){e.memoizedState!==null&&te(ai,e);var t=ht.current,l=hm(t,e.type);t!==l&&(te(Wa,e),te(ht,l))}function ii(e){Wa.current===e&&(Ne(ht),Ne(Wa)),ai.current===e&&(Ne(ai),sn._currentValue=vl)}var cc,eo;function gl(e){if(cc===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);cc=t&&t[1]||"",eo=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cc+e+eo}var uc=!1;function sc(e,t){if(!e||uc)return"";uc=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(g){var m=g}Reflect.construct(e,[],y)}else{try{y.call()}catch(g){m=g}e.call(y.prototype)}}else{try{throw Error()}catch(g){m=g}(y=e())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(g){if(g&&m&&typeof g.stack=="string")return[g.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var o=u.split(`
`),d=s.split(`
`);for(n=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(a===o.length||n===d.length)for(a=o.length-1,n=d.length-1;1<=a&&0<=n&&o[a]!==d[n];)n--;for(;1<=a&&0<=n;a--,n--)if(o[a]!==d[n]){if(a!==1||n!==1)do if(a--,n--,0>n||o[a]!==d[n]){var h=`
`+o[a].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=a&&0<=n);break}}}finally{uc=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?gl(l):""}function eh(e,t){switch(e.tag){case 26:case 27:case 5:return gl(e.type);case 16:return gl("Lazy");case 13:return e.child!==t&&t!==null?gl("Suspense Fallback"):gl("Suspense");case 19:return gl("SuspenseList");case 0:case 15:return sc(e.type,!1);case 11:return sc(e.type.render,!1);case 1:return sc(e.type,!0);case 31:return gl("Activity");default:return""}}function to(e){try{var t="",l=null;do t+=eh(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Fc=Object.prototype.hasOwnProperty,Wu=ve.unstable_scheduleCallback,oc=ve.unstable_cancelCallback,th=ve.unstable_shouldYield,lh=ve.unstable_requestPaint,Ve=ve.unstable_now,ah=ve.unstable_getCurrentPriorityLevel,$r=ve.unstable_ImmediatePriority,Wr=ve.unstable_UserBlockingPriority,ci=ve.unstable_NormalPriority,nh=ve.unstable_LowPriority,Fr=ve.unstable_IdlePriority,ih=ve.log,ch=ve.unstable_setDisableYieldValue,mn=null,Ke=null;function Kt(e){if(typeof ih=="function"&&ch(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(mn,e)}catch{}}var Je=Math.clz32?Math.clz32:oh,uh=Math.log,sh=Math.LN2;function oh(e){return e>>>=0,e===0?32:31-(uh(e)/sh|0)|0}var zn=256,Cn=262144,Dn=4194304;function hl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bi(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?n=hl(a):(u&=s,u!==0?n=hl(u):l||(l=s&~e,l!==0&&(n=hl(l))))):(s=a&~i,s!==0?n=hl(s):u!==0?n=hl(u):l||(l=a&~e,l!==0&&(n=hl(l)))),n===0?0:t!==0&&t!==n&&!(t&i)&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function gn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ir(){var e=Dn;return Dn<<=1,!(Dn&62914560)&&(Dn=4194304),e}function rc(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function hn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fh(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,d=e.hiddenUpdates;for(l=u&~l;0<l;){var h=31-Je(l),y=1<<h;s[h]=0,o[h]=-1;var m=d[h];if(m!==null)for(d[h]=null,h=0;h<m.length;h++){var g=m[h];g!==null&&(g.lane&=-536870913)}l&=~y}a!==0&&Pr(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Pr(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Je(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function ef(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-Je(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function tf(e,t){var l=t&-t;return l=l&42?1:Fu(l),l&(e.suspendedLanes|t)?0:l}function Fu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Iu(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lf(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Em(e.type))}function lo(e,t){var l=J.p;try{return J.p=e,t()}finally{J.p=l}}var fl=Math.random().toString(36).slice(2),Ae="__reactFiber$"+fl,qe="__reactProps$"+fl,ha="__reactContainer$"+fl,Ic="__reactEvents$"+fl,dh="__reactListeners$"+fl,mh="__reactHandles$"+fl,ao="__reactResources$"+fl,pn="__reactMarker$"+fl;function Pu(e){delete e[Ae],delete e[qe],delete e[Ic],delete e[dh],delete e[mh]}function ql(e){var t=e[Ae];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ha]||l[Ae]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=fr(e);e!==null;){if(l=e[Ae])return l;e=fr(e)}return t}e=l,l=e.parentNode}return null}function pa(e){if(e=e[Ae]||e[ha]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(S(33))}function Wl(e){var t=e[ao];return t||(t=e[ao]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Se(e){e[pn]=!0}var af=new Set,nf={};function Cl(e,t){na(e,t),na(e+"Capture",t)}function na(e,t){for(nf[e]=t,e=0;e<t.length;e++)af.add(t[e])}var gh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),no={},io={};function hh(e){return Fc.call(io,e)?!0:Fc.call(no,e)?!1:gh.test(e)?io[e]=!0:(no[e]=!0,!1)}function Ln(e,t,l){if(hh(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function On(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function vt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function Pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ph(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pc(e){if(!e._valueTracker){var t=cf(e)?"checked":"value";e._valueTracker=ph(e,t,""+e[t])}}function uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=cf(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var yh=/[\n"\\]/g;function lt(e){return e.replace(yh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function eu(e,t,l,a,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Pe(t)):e.value!==""+Pe(t)&&(e.value=""+Pe(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?tu(e,u,Pe(t)):l!=null?tu(e,u,Pe(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Pe(s):e.removeAttribute("name")}function sf(e,t,l,a,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Pc(e);return}l=l!=null?""+Pe(l):"",t=t!=null?""+Pe(t):l,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Pc(e)}function tu(e,t,l){t==="number"&&ui(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Fl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Pe(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function of(e,t,l){if(t!=null&&(t=""+Pe(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Pe(l):""}function rf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(S(92));if(Ma(a)){if(1<a.length)throw Error(S(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Pe(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Pc(e)}function ia(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var vh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function co(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||vh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function ff(e,t,l){if(t!=null&&typeof t!="object")throw Error(S(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&co(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&co(e,i,t[i])}function es(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kn(e){return xh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Et(){}var lu=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ll=null,Il=null;function uo(e){var t=pa(e);if(t&&(e=t.stateNode)){var l=e[qe]||null;e:switch(e=t.stateNode,t.type){case"input":if(eu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+lt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[qe]||null;if(!n)throw Error(S(90));eu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&uf(a)}break e;case"textarea":of(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Fl(e,!!l.multiple,t,!1)}}}var fc=!1;function df(e,t,l){if(fc)return e(t,l);fc=!0;try{var a=e(t);return a}finally{if(fc=!1,(Ll!==null||Il!==null)&&(Wi(),Ll&&(t=Ll,e=Il,Il=Ll=null,uo(t),e)))for(t=0;t<e.length;t++)uo(e[t])}}function Fa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[qe]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(S(231,t,typeof l));return l}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(Mt)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){au=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{au=!1}var Jt=null,ls=null,Xn=null;function mf(){if(Xn)return Xn;var e,t=ls,l=t.length,a,n="value"in Jt?Jt.value:Jt.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return Xn=n.slice(e,1<a?1-a:void 0)}function Qn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function so(){return!1}function Le(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(l=e[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_n:so,this.isPropagationStopped=so,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var Dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=Le(Dl),yn=ce({},Dl,{view:0,detail:0}),Sh=Le(yn),dc,mc,Ea,qi=ce({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:as,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ea&&(Ea&&e.type==="mousemove"?(dc=e.screenX-Ea.screenX,mc=e.screenY-Ea.screenY):mc=dc=0,Ea=e),dc)},movementY:function(e){return"movementY"in e?e.movementY:mc}}),oo=Le(qi),Nh=ce({},qi,{dataTransfer:0}),jh=Le(Nh),Ah=ce({},yn,{relatedTarget:0}),gc=Le(Ah),Th=ce({},Dl,{animationName:0,elapsedTime:0,pseudoElement:0}),Eh=Le(Th),zh=ce({},Dl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ch=Le(zh),Dh=ce({},Dl,{data:0}),ro=Le(Dh),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_h={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mh[e])?!!t[e]:!1}function as(){return wh}var Uh=ce({},yn,{key:function(e){if(e.key){var t=Oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_h[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:as,charCode:function(e){return e.type==="keypress"?Qn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rh=Le(Uh),Hh=ce({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fo=Le(Hh),Gh=ce({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:as}),Bh=Le(Gh),Yh=ce({},Dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),qh=Le(Yh),Lh=ce({},qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kh=Le(Lh),Xh=ce({},Dl,{newState:0,oldState:0}),Qh=Le(Xh),Zh=[9,13,27,32],ns=Mt&&"CompositionEvent"in window,Ga=null;Mt&&"documentMode"in document&&(Ga=document.documentMode);var Vh=Mt&&"TextEvent"in window&&!Ga,gf=Mt&&(!ns||Ga&&8<Ga&&11>=Ga),mo=" ",go=!1;function hf(e,t){switch(e){case"keyup":return Zh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kl=!1;function Kh(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(go=!0,mo);case"textInput":return e=t.data,e===mo&&go?null:e;default:return null}}function Jh(e,t){if(kl)return e==="compositionend"||!ns&&hf(e,t)?(e=mf(),Xn=ls=Jt=null,kl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gf&&t.locale!=="ko"?null:t.data;default:return null}}var $h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$h[e.type]:t==="textarea"}function yf(e,t,l,a){Ll?Il?Il.push(a):Il=[a]:Ll=a,t=Ti(t,"onChange"),0<t.length&&(l=new Yi("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ba=null,Ia=null;function Wh(e){dm(e,0)}function Li(e){var t=wa(e);if(uf(t))return e}function po(e,t){if(e==="change")return t}var vf=!1;if(Mt){var hc;if(Mt){var pc="oninput"in document;if(!pc){var yo=document.createElement("div");yo.setAttribute("oninput","return;"),pc=typeof yo.oninput=="function"}hc=pc}else hc=!1;vf=hc&&(!document.documentMode||9<document.documentMode)}function vo(){Ba&&(Ba.detachEvent("onpropertychange",bf),Ia=Ba=null)}function bf(e){if(e.propertyName==="value"&&Li(Ia)){var t=[];yf(t,Ia,e,ts(e)),df(Wh,t)}}function Fh(e,t,l){e==="focusin"?(vo(),Ba=t,Ia=l,Ba.attachEvent("onpropertychange",bf)):e==="focusout"&&vo()}function Ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Ia)}function Ph(e,t){if(e==="click")return Li(t)}function ep(e,t){if(e==="input"||e==="change")return Li(t)}function tp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:tp;function Pa(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Fc.call(t,n)||!We(e[n],t[n]))return!1}return!0}function bo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xo(e,t){var l=bo(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=bo(l)}}function xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ui(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=ui(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var lp=Mt&&"documentMode"in document&&11>=document.documentMode,Xl=null,nu=null,Ya=null,iu=!1;function So(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;iu||Xl==null||Xl!==ui(a)||(a=Xl,"selectionStart"in a&&is(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ya&&Pa(Ya,a)||(Ya=a,a=Ti(nu,"onSelect"),0<a.length&&(t=new Yi("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Xl)))}function ml(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Ql={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionrun:ml("Transition","TransitionRun"),transitionstart:ml("Transition","TransitionStart"),transitioncancel:ml("Transition","TransitionCancel"),transitionend:ml("Transition","TransitionEnd")},yc={},Nf={};Mt&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete Ql.animationend.animation,delete Ql.animationiteration.animation,delete Ql.animationstart.animation),"TransitionEvent"in window||delete Ql.transitionend.transition);function Ol(e){if(yc[e])return yc[e];if(!Ql[e])return e;var t=Ql[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Nf)return yc[e]=t[l];return e}var jf=Ol("animationend"),Af=Ol("animationiteration"),Tf=Ol("animationstart"),ap=Ol("transitionrun"),np=Ol("transitionstart"),ip=Ol("transitioncancel"),Ef=Ol("transitionend"),zf=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function rt(e,t){zf.set(e,t),Cl(t,[e])}var si=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ie=[],Zl=0,cs=0;function ki(){for(var e=Zl,t=cs=Zl=0;t<e;){var l=Ie[t];Ie[t++]=null;var a=Ie[t];Ie[t++]=null;var n=Ie[t];Ie[t++]=null;var i=Ie[t];if(Ie[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Cf(l,n,i)}}function Xi(e,t,l,a){Ie[Zl++]=e,Ie[Zl++]=t,Ie[Zl++]=l,Ie[Zl++]=a,cs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function us(e,t,l,a){return Xi(e,t,l,a),oi(e)}function _l(e,t){return Xi(e,null,null,t),oi(e)}function Cf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Je(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function oi(e){if(50<Ja)throw Ja=0,zu=null,Error(S(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Vl={};function cp(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,l,a){return new cp(e,t,l,a)}function ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ct(e,t){var l=e.alternate;return l===null?(l=Qe(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Df(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Zn(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")ss(e)&&(u=1);else if(typeof e=="string")u=fy(e,l,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Kc:return e=Qe(31,l,t,n),e.elementType=Kc,e.lanes=i,e;case Bl:return bl(l.children,n,i,t);case Kr:u=8,n|=24;break;case Qc:return e=Qe(12,l,t,n|2),e.elementType=Qc,e.lanes=i,e;case Zc:return e=Qe(13,l,t,n),e.elementType=Zc,e.lanes=i,e;case Vc:return e=Qe(19,l,t,n),e.elementType=Vc,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tt:u=10;break e;case Jr:u=9;break e;case Ju:u=11;break e;case $u:u=14;break e;case Lt:u=16,a=null;break e}u=29,l=Error(S(130,e===null?"null":typeof e,"")),a=null}return t=Qe(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function bl(e,t,l,a){return e=Qe(7,e,a,t),e.lanes=l,e}function vc(e,t,l){return e=Qe(6,e,null,t),e.lanes=l,e}function Of(e){var t=Qe(18,null,null,0);return t.stateNode=e,t}function bc(e,t,l){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var No=new WeakMap;function at(e,t){if(typeof e=="object"&&e!==null){var l=No.get(e);return l!==void 0?l:(t={value:e,source:t,stack:to(t)},No.set(e,t),t)}return{value:e,source:t,stack:to(t)}}var Kl=[],Jl=0,ri=null,en=0,et=[],tt=0,ul=null,dt=1,mt="";function jt(e,t){Kl[Jl++]=en,Kl[Jl++]=ri,ri=e,en=t}function _f(e,t,l){et[tt++]=dt,et[tt++]=mt,et[tt++]=ul,ul=e;var a=dt;e=mt;var n=32-Je(a)-1;a&=~(1<<n),l+=1;var i=32-Je(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,dt=1<<32-Je(t)+n|l<<n|a,mt=i+e}else dt=1<<i|l<<n|a,mt=e}function os(e){e.return!==null&&(jt(e,1),_f(e,1,0))}function rs(e){for(;e===ri;)ri=Kl[--Jl],Kl[Jl]=null,en=Kl[--Jl],Kl[Jl]=null;for(;e===ul;)ul=et[--tt],et[tt]=null,mt=et[--tt],et[tt]=null,dt=et[--tt],et[tt]=null}function Mf(e,t){et[tt++]=dt,et[tt++]=mt,et[tt++]=ul,dt=t.id,mt=t.overflow,ul=e}var Te=null,ne=null,Z=!1,Pt=null,nt=!1,uu=Error(S(519));function sl(e){var t=Error(S(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tn(at(t,e)),uu}function jo(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ae]=e,t[qe]=a,l){case"dialog":k("cancel",t),k("close",t);break;case"iframe":case"object":case"embed":k("load",t);break;case"video":case"audio":for(l=0;l<cn.length;l++)k(cn[l],t);break;case"source":k("error",t);break;case"img":case"image":case"link":k("error",t),k("load",t);break;case"details":k("toggle",t);break;case"input":k("invalid",t),sf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":k("invalid",t);break;case"textarea":k("invalid",t),rf(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||gm(t.textContent,l)?(a.popover!=null&&(k("beforetoggle",t),k("toggle",t)),a.onScroll!=null&&k("scroll",t),a.onScrollEnd!=null&&k("scrollend",t),a.onClick!=null&&(t.onclick=Et),t=!0):t=!1,t||sl(e,!0)}function Ao(e){for(Te=e.return;Te;)switch(Te.tag){case 5:case 31:case 13:nt=!1;return;case 27:case 3:nt=!0;return;default:Te=Te.return}}function wl(e){if(e!==Te)return!1;if(!Z)return Ao(e),Z=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Mu(e.type,e.memoizedProps)),l=!l),l&&ne&&sl(e),Ao(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));ne=rr(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));ne=rr(e)}else t===27?(t=ne,dl(e.type)?(e=Hu,Hu=null,ne=e):ne=t):ne=Te?ct(e.stateNode.nextSibling):null;return!0}function jl(){ne=Te=null,Z=!1}function xc(){var e=Pt;return e!==null&&(Be===null?Be=e:Be.push.apply(Be,e),Pt=null),e}function tn(e){Pt===null?Pt=[e]:Pt.push(e)}var su=pt(null),Ml=null,zt=null;function Xt(e,t,l){te(su,t._currentValue),t._currentValue=l}function Dt(e){e._currentValue=su.current,Ne(su)}function ou(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function ru(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var o=0;o<t.length;o++)if(s.context===t[o]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),ou(i.return,l,e),a||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(S(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),ou(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ya(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(S(387));if(u=u.memoizedProps,u!==null){var s=n.type;We(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===ai.current){if(u=n.alternate,u===null)throw Error(S(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(sn):e=[sn])}n=n.return}e!==null&&ru(t,e,l,a),t.flags|=262144}function fi(e){for(e=e.firstContext;e!==null;){if(!We(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Al(e){Ml=e,zt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ee(e){return wf(Ml,e)}function Mn(e,t){return Ml===null&&Al(e),wf(e,t)}function wf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},zt===null){if(e===null)throw Error(S(308));zt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zt=zt.next=t;return l}var up=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},sp=ve.unstable_scheduleCallback,op=ve.unstable_NormalPriority,he={$$typeof:Tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fs(){return{controller:new up,data:new Map,refCount:0}}function vn(e){e.refCount--,e.refCount===0&&sp(op,function(){e.controller.abort()})}var qa=null,fu=0,ca=0,Pl=null;function rp(e,t){if(qa===null){var l=qa=[];fu=0,ca=Hs(),Pl={status:"pending",value:void 0,then:function(a){l.push(a)}}}return fu++,t.then(To,To),t}function To(){if(--fu===0&&qa!==null){Pl!==null&&(Pl.status="fulfilled");var e=qa;qa=null,ca=0,Pl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fp(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Eo=H.S;H.S=function(e,t){Kd=Ve(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&rp(e,t),Eo!==null&&Eo(e,t)};var xl=pt(null);function ds(){var e=xl.current;return e!==null?e:ee.pooledCache}function Vn(e,t){t===null?te(xl,xl.current):te(xl,t.pool)}function Uf(){var e=ds();return e===null?null:{parent:he._currentValue,pool:e}}var va=Error(S(460)),ms=Error(S(474)),Qi=Error(S(542)),di={then:function(){}};function zo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rf(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Et,Et),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Do(e),e;default:if(typeof t.status=="string")t.then(Et,Et);else{if(e=ee,e!==null&&100<e.shellSuspendCounter)throw Error(S(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Do(e),e}throw Sl=t,va}}function pl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Sl=l,va):l}}var Sl=null;function Co(){if(Sl===null)throw Error(S(459));var e=Sl;return Sl=null,e}function Do(e){if(e===va||e===Qi)throw Error(S(483))}var ea=null,ln=0;function wn(e){var t=ln;return ln+=1,ea===null&&(ea=[]),Rf(ea,e,t)}function za(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Un(e,t){throw t.$$typeof===Fg?Error(S(525)):(e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hf(e){function t(f,r){if(e){var p=f.deletions;p===null?(f.deletions=[r],f.flags|=16):p.push(r)}}function l(f,r){if(!e)return null;for(;r!==null;)t(f,r),r=r.sibling;return null}function a(f){for(var r=new Map;f!==null;)f.key!==null?r.set(f.key,f):r.set(f.index,f),f=f.sibling;return r}function n(f,r){return f=Ct(f,r),f.index=0,f.sibling=null,f}function i(f,r,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<r?(f.flags|=67108866,r):p):(f.flags|=67108866,r)):(f.flags|=1048576,r)}function u(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function s(f,r,p,v){return r===null||r.tag!==6?(r=vc(p,f.mode,v),r.return=f,r):(r=n(r,p),r.return=f,r)}function o(f,r,p,v){var b=p.type;return b===Bl?h(f,r,p.props.children,v,p.key):r!==null&&(r.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Lt&&pl(b)===r.type)?(r=n(r,p.props),za(r,p),r.return=f,r):(r=Zn(p.type,p.key,p.props,null,f.mode,v),za(r,p),r.return=f,r)}function d(f,r,p,v){return r===null||r.tag!==4||r.stateNode.containerInfo!==p.containerInfo||r.stateNode.implementation!==p.implementation?(r=bc(p,f.mode,v),r.return=f,r):(r=n(r,p.children||[]),r.return=f,r)}function h(f,r,p,v,b){return r===null||r.tag!==7?(r=bl(p,f.mode,v,b),r.return=f,r):(r=n(r,p),r.return=f,r)}function y(f,r,p){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=vc(""+r,f.mode,p),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case En:return p=Zn(r.type,r.key,r.props,null,f.mode,p),za(p,r),p.return=f,p;case _a:return r=bc(r,f.mode,p),r.return=f,r;case Lt:return r=pl(r),y(f,r,p)}if(Ma(r)||Aa(r))return r=bl(r,f.mode,p,null),r.return=f,r;if(typeof r.then=="function")return y(f,wn(r),p);if(r.$$typeof===Tt)return y(f,Mn(f,r),p);Un(f,r)}return null}function m(f,r,p,v){var b=r!==null?r.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return b!==null?null:s(f,r,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case En:return p.key===b?o(f,r,p,v):null;case _a:return p.key===b?d(f,r,p,v):null;case Lt:return p=pl(p),m(f,r,p,v)}if(Ma(p)||Aa(p))return b!==null?null:h(f,r,p,v,null);if(typeof p.then=="function")return m(f,r,wn(p),v);if(p.$$typeof===Tt)return m(f,r,Mn(f,p),v);Un(f,p)}return null}function g(f,r,p,v,b){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(p)||null,s(r,f,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case En:return f=f.get(v.key===null?p:v.key)||null,o(r,f,v,b);case _a:return f=f.get(v.key===null?p:v.key)||null,d(r,f,v,b);case Lt:return v=pl(v),g(f,r,p,v,b)}if(Ma(v)||Aa(v))return f=f.get(p)||null,h(r,f,v,b,null);if(typeof v.then=="function")return g(f,r,p,wn(v),b);if(v.$$typeof===Tt)return g(f,r,p,Mn(r,v),b);Un(r,v)}return null}function j(f,r,p,v){for(var b=null,T=null,x=r,C=r=0,U=null;x!==null&&C<p.length;C++){x.index>C?(U=x,x=null):U=x.sibling;var G=m(f,x,p[C],v);if(G===null){x===null&&(x=U);break}e&&x&&G.alternate===null&&t(f,x),r=i(G,r,C),T===null?b=G:T.sibling=G,T=G,x=U}if(C===p.length)return l(f,x),Z&&jt(f,C),b;if(x===null){for(;C<p.length;C++)x=y(f,p[C],v),x!==null&&(r=i(x,r,C),T===null?b=x:T.sibling=x,T=x);return Z&&jt(f,C),b}for(x=a(x);C<p.length;C++)U=g(x,f,C,p[C],v),U!==null&&(e&&U.alternate!==null&&x.delete(U.key===null?C:U.key),r=i(U,r,C),T===null?b=U:T.sibling=U,T=U);return e&&x.forEach(function(se){return t(f,se)}),Z&&jt(f,C),b}function z(f,r,p,v){if(p==null)throw Error(S(151));for(var b=null,T=null,x=r,C=r=0,U=null,G=p.next();x!==null&&!G.done;C++,G=p.next()){x.index>C?(U=x,x=null):U=x.sibling;var se=m(f,x,G.value,v);if(se===null){x===null&&(x=U);break}e&&x&&se.alternate===null&&t(f,x),r=i(se,r,C),T===null?b=se:T.sibling=se,T=se,x=U}if(G.done)return l(f,x),Z&&jt(f,C),b;if(x===null){for(;!G.done;C++,G=p.next())G=y(f,G.value,v),G!==null&&(r=i(G,r,C),T===null?b=G:T.sibling=G,T=G);return Z&&jt(f,C),b}for(x=a(x);!G.done;C++,G=p.next())G=g(x,f,C,G.value,v),G!==null&&(e&&G.alternate!==null&&x.delete(G.key===null?C:G.key),r=i(G,r,C),T===null?b=G:T.sibling=G,T=G);return e&&x.forEach(function(le){return t(f,le)}),Z&&jt(f,C),b}function _(f,r,p,v){if(typeof p=="object"&&p!==null&&p.type===Bl&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case En:e:{for(var b=p.key;r!==null;){if(r.key===b){if(b=p.type,b===Bl){if(r.tag===7){l(f,r.sibling),v=n(r,p.props.children),v.return=f,f=v;break e}}else if(r.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Lt&&pl(b)===r.type){l(f,r.sibling),v=n(r,p.props),za(v,p),v.return=f,f=v;break e}l(f,r);break}else t(f,r);r=r.sibling}p.type===Bl?(v=bl(p.props.children,f.mode,v,p.key),v.return=f,f=v):(v=Zn(p.type,p.key,p.props,null,f.mode,v),za(v,p),v.return=f,f=v)}return u(f);case _a:e:{for(b=p.key;r!==null;){if(r.key===b)if(r.tag===4&&r.stateNode.containerInfo===p.containerInfo&&r.stateNode.implementation===p.implementation){l(f,r.sibling),v=n(r,p.children||[]),v.return=f,f=v;break e}else{l(f,r);break}else t(f,r);r=r.sibling}v=bc(p,f.mode,v),v.return=f,f=v}return u(f);case Lt:return p=pl(p),_(f,r,p,v)}if(Ma(p))return j(f,r,p,v);if(Aa(p)){if(b=Aa(p),typeof b!="function")throw Error(S(150));return p=b.call(p),z(f,r,p,v)}if(typeof p.then=="function")return _(f,r,wn(p),v);if(p.$$typeof===Tt)return _(f,r,Mn(f,p),v);Un(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,r!==null&&r.tag===6?(l(f,r.sibling),v=n(r,p),v.return=f,f=v):(l(f,r),v=vc(p,f.mode,v),v.return=f,f=v),u(f)):l(f,r)}return function(f,r,p,v){try{ln=0;var b=_(f,r,p,v);return ea=null,b}catch(x){if(x===va||x===Qi)throw x;var T=Qe(29,x,null,f.mode);return T.lanes=v,T.return=f,T}finally{}}}var Tl=Hf(!0),Gf=Hf(!1),kt=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function el(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function tl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,K&2){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=oi(e),Cf(e,null,l),t}return Xi(e,a,t,l),oi(e)}function La(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ef(e,l)}}function Sc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var mu=!1;function ka(){if(mu){var e=Pl;if(e!==null)throw e}}function Xa(e,t,l,a){mu=!1;var n=e.updateQueue;kt=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,d=o.next;o.next=null,u===null?i=d:u.next=d,u=o;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==u&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=o))}if(i!==null){var y=n.baseState;u=0,h=d=o=null,s=i;do{var m=s.lane&-536870913,g=m!==s.lane;if(g?(Q&m)===m:(a&m)===m){m!==0&&m===ca&&(mu=!0),h!==null&&(h=h.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var j=e,z=s;m=t;var _=l;switch(z.tag){case 1:if(j=z.payload,typeof j=="function"){y=j.call(_,y,m);break e}y=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=z.payload,m=typeof j=="function"?j.call(_,y,m):j,m==null)break e;y=ce({},y,m);break e;case 2:kt=!0}}m=s.callback,m!==null&&(e.flags|=64,g&&(e.flags|=8192),g=n.callbacks,g===null?n.callbacks=[m]:g.push(m))}else g={lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=g,o=y):h=h.next=g,u|=m;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;g=s,s=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);h===null&&(o=y),n.baseState=o,n.firstBaseUpdate=d,n.lastBaseUpdate=h,i===null&&(n.shared.lanes=0),rl|=u,e.lanes=u,e.memoizedState=y}}function Bf(e,t){if(typeof e!="function")throw Error(S(191,e));e.call(t)}function Yf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Bf(l[e],t)}var ua=pt(null),mi=pt(0);function Oo(e,t){e=Ht,te(mi,e),te(ua,t),Ht=e|t.baseLanes}function gu(){te(mi,Ht),te(ua,ua.current)}function hs(){Ht=mi.current,Ne(ua),Ne(mi)}var Fe=pt(null),it=null;function Qt(e){var t=e.alternate;te(fe,fe.current&1),te(Fe,e),it===null&&(t===null||ua.current!==null||t.memoizedState!==null)&&(it=e)}function hu(e){te(fe,fe.current),te(Fe,e),it===null&&(it=e)}function qf(e){e.tag===22?(te(fe,fe.current),te(Fe,e),it===null&&(it=e)):Zt()}function Zt(){te(fe,fe.current),te(Fe,Fe.current)}function Xe(e){Ne(Fe),it===e&&(it=null),Ne(fe)}var fe=pt(0);function gi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Uu(l)||Ru(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wt=0,Y=null,I=null,me=null,hi=!1,ta=!1,El=!1,pi=0,an=0,la=null,dp=0;function oe(){throw Error(S(321))}function ps(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!We(e[l],t[l]))return!1;return!0}function ys(e,t,l,a,n,i){return wt=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?yd:Cs,El=!1,i=l(a,n),El=!1,ta&&(i=kf(t,l,a,n)),Lf(e),i}function Lf(e){H.H=nn;var t=I!==null&&I.next!==null;if(wt=0,me=I=Y=null,hi=!1,an=0,la=null,t)throw Error(S(300));e===null||pe||(e=e.dependencies,e!==null&&fi(e)&&(pe=!0))}function kf(e,t,l,a){Y=e;var n=0;do{if(ta&&(la=null),an=0,ta=!1,25<=n)throw Error(S(301));if(n+=1,me=I=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}H.H=vd,i=t(l,a)}while(ta);return i}function mp(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?bn(t):t,e=e.useState()[0],(I!==null?I.memoizedState:null)!==e&&(Y.flags|=1024),t}function vs(){var e=pi!==0;return pi=0,e}function bs(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function xs(e){if(hi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hi=!1}wt=0,me=I=Y=null,ta=!1,an=pi=0,la=null}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?Y.memoizedState=me=e:me=me.next=e,me}function de(){if(I===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=I.next;var t=me===null?Y.memoizedState:me.next;if(t!==null)me=t,I=e;else{if(e===null)throw Y.alternate===null?Error(S(467)):Error(S(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},me===null?Y.memoizedState=me=e:me=me.next=e}return me}function Zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bn(e){var t=an;return an+=1,la===null&&(la=[]),e=Rf(la,e,t),t=Y,(me===null?t.memoizedState:me.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?yd:Cs),e}function Vi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bn(e);if(e.$$typeof===Tt)return Ee(e)}throw Error(S(438,String(e)))}function Ss(e){var t=null,l=Y.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=Y.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Zi(),Y.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Ig;return t.index++,l}function Ut(e,t){return typeof t=="function"?t(e):t}function Kn(e){var t=de();return Ns(t,I,e)}function Ns(e,t,l){var a=e.queue;if(a===null)throw Error(S(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,o=null,d=t,h=!1;do{var y=d.lane&-536870913;if(y!==d.lane?(Q&y)===y:(wt&y)===y){var m=d.revertLane;if(m===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),y===ca&&(h=!0);else if((wt&m)===m){d=d.next,m===ca&&(h=!0);continue}else y={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(s=o=y,u=i):o=o.next=y,Y.lanes|=m,rl|=m;y=d.action,El&&l(i,y),i=d.hasEagerState?d.eagerState:l(i,y)}else m={lane:y,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(s=o=m,u=i):o=o.next=m,Y.lanes|=y,rl|=y;d=d.next}while(d!==null&&d!==t);if(o===null?u=i:o.next=s,!We(i,e.memoizedState)&&(pe=!0,h&&(l=Pl,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=o,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Nc(e){var t=de(),l=t.queue;if(l===null)throw Error(S(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);We(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Xf(e,t,l){var a=Y,n=de(),i=Z;if(i){if(l===void 0)throw Error(S(407));l=l()}else l=t();var u=!We((I||n).memoizedState,l);if(u&&(n.memoizedState=l,pe=!0),n=n.queue,js(Vf.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||me!==null&&me.memoizedState.tag&1){if(a.flags|=2048,sa(9,{destroy:void 0},Zf.bind(null,a,n,l,t),null),ee===null)throw Error(S(349));i||wt&127||Qf(a,t,l)}return l}function Qf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=Y.updateQueue,t===null?(t=Zi(),Y.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Zf(e,t,l,a){t.value=l,t.getSnapshot=a,Kf(t)&&Jf(e)}function Vf(e,t,l){return l(function(){Kf(t)&&Jf(e)})}function Kf(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!We(e,l)}catch{return!0}}function Jf(e){var t=_l(e,2);t!==null&&Ye(t,e,2)}function pu(e){var t=Me();if(typeof e=="function"){var l=e;if(e=l(),El){Kt(!0);try{l()}finally{Kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:e},t}function $f(e,t,l,a){return e.baseState=l,Ns(e,I,typeof a=="function"?a:Ut)}function gp(e,t,l,a,n){if(Ji(e))throw Error(S(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};H.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Wf(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Wf(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=H.T,u={};H.T=u;try{var s=l(n,a),o=H.S;o!==null&&o(u,s),_o(e,t,s)}catch(d){yu(e,t,d)}finally{i!==null&&u.types!==null&&(i.types=u.types),H.T=i}}else try{i=l(n,a),_o(e,t,i)}catch(d){yu(e,t,d)}}function _o(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Mo(e,t,a)},function(a){return yu(e,t,a)}):Mo(e,t,l)}function Mo(e,t,l){t.status="fulfilled",t.value=l,Ff(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Wf(e,l)))}function yu(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Ff(t),t=t.next;while(t!==a)}e.action=null}function Ff(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function If(e,t){return t}function wo(e,t){if(Z){var l=ee.formState;if(l!==null){e:{var a=Y;if(Z){if(ne){t:{for(var n=ne,i=nt;n.nodeType!==8;){if(!i){n=null;break t}if(n=ct(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ne=ct(n.nextSibling),a=n.data==="F!";break e}}sl(a)}a=!1}a&&(t=l[0])}}return l=Me(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:If,lastRenderedState:t},l.queue=a,l=gd.bind(null,Y,a),a.dispatch=l,a=pu(!1),i=zs.bind(null,Y,!1,a.queue),a=Me(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=gp.bind(null,Y,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Uo(e){var t=de();return Pf(t,I,e)}function Pf(e,t,l){if(t=Ns(e,t,If)[0],e=Kn(Ut)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=bn(t)}catch(u){throw u===va?Qi:u}else a=t;t=de();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(Y.flags|=2048,sa(9,{destroy:void 0},hp.bind(null,n,l),null)),[a,i,e]}function hp(e,t){e.action=t}function Ro(e){var t=de(),l=I;if(l!==null)return Pf(t,l,e);de(),t=t.memoizedState,l=de();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function sa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=Y.updateQueue,t===null&&(t=Zi(),Y.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function ed(){return de().memoizedState}function Jn(e,t,l,a){var n=Me();Y.flags|=e,n.memoizedState=sa(1|t,{destroy:void 0},l,a===void 0?null:a)}function Ki(e,t,l,a){var n=de();a=a===void 0?null:a;var i=n.memoizedState.inst;I!==null&&a!==null&&ps(a,I.memoizedState.deps)?n.memoizedState=sa(t,i,l,a):(Y.flags|=e,n.memoizedState=sa(1|t,i,l,a))}function Ho(e,t){Jn(8390656,8,e,t)}function js(e,t){Ki(2048,8,e,t)}function pp(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=Zi(),Y.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function td(e){var t=de().memoizedState;return pp({ref:t,nextImpl:e}),function(){if(K&2)throw Error(S(440));return t.impl.apply(void 0,arguments)}}function ld(e,t){return Ki(4,2,e,t)}function ad(e,t){return Ki(4,4,e,t)}function nd(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function id(e,t,l){l=l!=null?l.concat([e]):null,Ki(4,4,nd.bind(null,t,e),l)}function As(){}function cd(e,t){var l=de();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&ps(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function ud(e,t){var l=de();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&ps(t,a[1]))return a[0];if(a=e(),El){Kt(!0);try{e()}finally{Kt(!1)}}return l.memoizedState=[a,t],a}function Ts(e,t,l){return l===void 0||wt&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=l,e=$d(),Y.lanes|=e,rl|=e,l)}function sd(e,t,l,a){return We(l,t)?l:ua.current!==null?(e=Ts(e,l,a),We(e,t)||(pe=!0),e):!(wt&42)||wt&1073741824&&!(Q&261930)?(pe=!0,e.memoizedState=l):(e=$d(),Y.lanes|=e,rl|=e,t)}function od(e,t,l,a,n){var i=J.p;J.p=i!==0&&8>i?i:8;var u=H.T,s={};H.T=s,zs(e,!1,t,l);try{var o=n(),d=H.S;if(d!==null&&d(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var h=fp(o,a);Qa(e,t,h,$e(e))}else Qa(e,t,a,$e(e))}catch(y){Qa(e,t,{then:function(){},status:"rejected",reason:y},$e())}finally{J.p=i,u!==null&&s.types!==null&&(u.types=s.types),H.T=u}}function yp(){}function vu(e,t,l,a){if(e.tag!==5)throw Error(S(476));var n=rd(e).queue;od(e,n,t,vl,l===null?yp:function(){return fd(e),l(a)})}function rd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:vl,baseState:vl,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:vl},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fd(e){var t=rd(e);t.next===null&&(t=e.alternate.memoizedState),Qa(e,t.next.queue,{},$e())}function Es(){return Ee(sn)}function dd(){return de().memoizedState}function md(){return de().memoizedState}function vp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=$e();e=el(l);var a=tl(t,e,l);a!==null&&(Ye(a,t,l),La(a,t,l)),t={cache:fs()},e.payload=t;return}t=t.return}}function bp(e,t,l){var a=$e();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ji(e)?hd(t,l):(l=us(e,t,l,a),l!==null&&(Ye(l,e,a),pd(l,t,a)))}function gd(e,t,l){var a=$e();Qa(e,t,l,a)}function Qa(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ji(e))hd(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,l);if(n.hasEagerState=!0,n.eagerState=s,We(s,u))return Xi(e,t,n,0),ee===null&&ki(),!1}catch{}finally{}if(l=us(e,t,n,a),l!==null)return Ye(l,e,a),pd(l,t,a),!0}return!1}function zs(e,t,l,a){if(a={lane:2,revertLane:Hs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ji(e)){if(t)throw Error(S(479))}else t=us(e,l,a,2),t!==null&&Ye(t,e,2)}function Ji(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function hd(e,t){ta=hi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function pd(e,t,l){if(l&4194048){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ef(e,l)}}var nn={readContext:Ee,use:Vi,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useLayoutEffect:oe,useInsertionEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useSyncExternalStore:oe,useId:oe,useHostTransitionStatus:oe,useFormState:oe,useActionState:oe,useOptimistic:oe,useMemoCache:oe,useCacheRefresh:oe};nn.useEffectEvent=oe;var yd={readContext:Ee,use:Vi,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Ho,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Jn(4194308,4,nd.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Jn(4194308,4,e,t)},useInsertionEffect:function(e,t){Jn(4,2,e,t)},useMemo:function(e,t){var l=Me();t=t===void 0?null:t;var a=e();if(El){Kt(!0);try{e()}finally{Kt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Me();if(l!==void 0){var n=l(t);if(El){Kt(!0);try{l(t)}finally{Kt(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=bp.bind(null,Y,e),[a.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:function(e){e=pu(e);var t=e.queue,l=gd.bind(null,Y,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:As,useDeferredValue:function(e,t){var l=Me();return Ts(l,e,t)},useTransition:function(){var e=pu(!1);return e=od.bind(null,Y,e.queue,!0,!1),Me().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=Y,n=Me();if(Z){if(l===void 0)throw Error(S(407));l=l()}else{if(l=t(),ee===null)throw Error(S(349));Q&127||Qf(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Ho(Vf.bind(null,a,i,e),[e]),a.flags|=2048,sa(9,{destroy:void 0},Zf.bind(null,a,i,l,t),null),l},useId:function(){var e=Me(),t=ee.identifierPrefix;if(Z){var l=mt,a=dt;l=(a&~(1<<32-Je(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=pi++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=dp++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:wo,useActionState:wo,useOptimistic:function(e){var t=Me();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=zs.bind(null,Y,!0,l),l.dispatch=t,[e,t]},useMemoCache:Ss,useCacheRefresh:function(){return Me().memoizedState=vp.bind(null,Y)},useEffectEvent:function(e){var t=Me(),l={impl:e};return t.memoizedState=l,function(){if(K&2)throw Error(S(440));return l.impl.apply(void 0,arguments)}}},Cs={readContext:Ee,use:Vi,useCallback:cd,useContext:Ee,useEffect:js,useImperativeHandle:id,useInsertionEffect:ld,useLayoutEffect:ad,useMemo:ud,useReducer:Kn,useRef:ed,useState:function(){return Kn(Ut)},useDebugValue:As,useDeferredValue:function(e,t){var l=de();return sd(l,I.memoizedState,e,t)},useTransition:function(){var e=Kn(Ut)[0],t=de().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:Xf,useId:dd,useHostTransitionStatus:Es,useFormState:Uo,useActionState:Uo,useOptimistic:function(e,t){var l=de();return $f(l,I,e,t)},useMemoCache:Ss,useCacheRefresh:md};Cs.useEffectEvent=td;var vd={readContext:Ee,use:Vi,useCallback:cd,useContext:Ee,useEffect:js,useImperativeHandle:id,useInsertionEffect:ld,useLayoutEffect:ad,useMemo:ud,useReducer:Nc,useRef:ed,useState:function(){return Nc(Ut)},useDebugValue:As,useDeferredValue:function(e,t){var l=de();return I===null?Ts(l,e,t):sd(l,I.memoizedState,e,t)},useTransition:function(){var e=Nc(Ut)[0],t=de().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:Xf,useId:dd,useHostTransitionStatus:Es,useFormState:Ro,useActionState:Ro,useOptimistic:function(e,t){var l=de();return I!==null?$f(l,I,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Ss,useCacheRefresh:md};vd.useEffectEvent=td;function jc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:ce({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var bu={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=$e(),n=el(a);n.payload=t,l!=null&&(n.callback=l),t=tl(e,n,a),t!==null&&(Ye(t,e,a),La(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=$e(),n=el(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=tl(e,n,a),t!==null&&(Ye(t,e,a),La(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=$e(),a=el(l);a.tag=2,t!=null&&(a.callback=t),t=tl(e,a,l),t!==null&&(Ye(t,e,l),La(t,e,l))}};function Go(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Pa(l,a)||!Pa(n,i):!0}function Bo(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&bu.enqueueReplaceState(t,t.state,null)}function zl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=ce({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function bd(e){si(e)}function xd(e){console.error(e)}function Sd(e){si(e)}function yi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Yo(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function xu(e,t,l){return l=el(l),l.tag=3,l.payload={element:null},l.callback=function(){yi(e,t)},l}function Nd(e){return e=el(e),e.tag=3,e}function jd(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Yo(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Yo(t,l,a),typeof n!="function"&&(ll===null?ll=new Set([this]):ll.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function xp(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ya(t,l,n,!0),l=Fe.current,l!==null){switch(l.tag){case 31:case 13:return it===null?Ni():l.alternate===null&&re===0&&(re=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===di?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Uc(e,a,n)),!1;case 22:return l.flags|=65536,a===di?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Uc(e,a,n)),!1}throw Error(S(435,l.tag))}return Uc(e,a,n),Ni(),!1}if(Z)return t=Fe.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==uu&&(e=Error(S(422),{cause:a}),tn(at(e,l)))):(a!==uu&&(t=Error(S(423),{cause:a}),tn(at(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=at(a,l),n=xu(e.stateNode,a,n),Sc(e,n),re!==4&&(re=2)),!1;var i=Error(S(520),{cause:a});if(i=at(i,l),Ka===null?Ka=[i]:Ka.push(i),re!==4&&(re=2),t===null)return!0;a=at(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=xu(l.stateNode,a,e),Sc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ll===null||!ll.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Nd(n),jd(n,e,l,a),Sc(l,n),!1}l=l.return}while(l!==null);return!1}var Ds=Error(S(461)),pe=!1;function je(e,t,l,a){t.child=e===null?Gf(t,null,l,a):Tl(t,e.child,l,a)}function qo(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var s in a)s!=="ref"&&(u[s]=a[s])}else u=a;return Al(t),a=ys(e,t,l,u,i,n),s=vs(),e!==null&&!pe?(bs(e,t,n),Rt(e,t,n)):(Z&&s&&os(t),t.flags|=1,je(e,t,a,n),t.child)}function Lo(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!ss(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Ad(e,t,i,a,n)):(e=Zn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Os(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Pa,l(u,a)&&e.ref===t.ref)return Rt(e,t,n)}return t.flags|=1,e=Ct(i,a),e.ref=t.ref,e.return=t,t.child=e}function Ad(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Pa(i,a)&&e.ref===t.ref)if(pe=!1,t.pendingProps=a=i,Os(e,n))e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Rt(e,t,n)}return Su(e,t,l,a,n)}function Td(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return ko(e,t,i,l,a)}if(l&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vn(t,i!==null?i.cachePool:null),i!==null?Oo(t,i):gu(),qf(t);else return a=t.lanes=536870912,ko(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Vn(t,i.cachePool),Oo(t,i),Zt(),t.memoizedState=null):(e!==null&&Vn(t,null),gu(),Zt());return je(e,t,n,l),t.child}function Ua(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ko(e,t,l,a,n){var i=ds();return i=i===null?null:{parent:he._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&Vn(t,null),gu(),qf(t),e!==null&&ya(e,t,a,!0),t.childLanes=n,null}function $n(e,t){return t=vi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Xo(e,t,l){return Tl(t,e.child,null,l),e=$n(t,t.pendingProps),e.flags|=2,Xe(t),t.memoizedState=null,e}function Sp(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Z){if(a.mode==="hidden")return e=$n(t,a),t.lanes=536870912,Ua(null,e);if(hu(t),(e=ne)?(e=ym(e,nt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ul!==null?{id:dt,overflow:mt}:null,retryLane:536870912,hydrationErrors:null},l=Of(e),l.return=t,t.child=l,Te=t,ne=null)):e=null,e===null)throw sl(t);return t.lanes=536870912,null}return $n(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(hu(t),n)if(t.flags&256)t.flags&=-257,t=Xo(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(S(558));else if(pe||ya(e,t,l,!1),n=(l&e.childLanes)!==0,pe||n){if(a=ee,a!==null&&(u=tf(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,_l(e,u),Ye(a,e,u),Ds;Ni(),t=Xo(e,t,l)}else e=i.treeContext,ne=ct(u.nextSibling),Te=t,Z=!0,Pt=null,nt=!1,e!==null&&Mf(t,e),t=$n(t,a),t.flags|=4096;return t}return e=Ct(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wn(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(S(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Su(e,t,l,a,n){return Al(t),l=ys(e,t,l,a,void 0,n),a=vs(),e!==null&&!pe?(bs(e,t,n),Rt(e,t,n)):(Z&&a&&os(t),t.flags|=1,je(e,t,l,n),t.child)}function Qo(e,t,l,a,n,i){return Al(t),t.updateQueue=null,l=kf(t,a,l,n),Lf(e),a=vs(),e!==null&&!pe?(bs(e,t,i),Rt(e,t,i)):(Z&&a&&os(t),t.flags|=1,je(e,t,l,i),t.child)}function Zo(e,t,l,a,n){if(Al(t),t.stateNode===null){var i=Vl,u=l.contextType;typeof u=="object"&&u!==null&&(i=Ee(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=bu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},gs(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?Ee(u):Vl,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(jc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&bu.enqueueReplaceState(i,i.state,null),Xa(t,a,i,n),ka(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,o=zl(l,s);i.props=o;var d=i.context,h=l.contextType;u=Vl,typeof h=="object"&&h!==null&&(u=Ee(h));var y=l.getDerivedStateFromProps;h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||d!==u)&&Bo(t,i,a,u),kt=!1;var m=t.memoizedState;i.state=m,Xa(t,a,i,n),ka(),d=t.memoizedState,s||m!==d||kt?(typeof y=="function"&&(jc(t,l,y,a),d=t.memoizedState),(o=kt||Go(t,l,o,a,m,d,u))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),i.props=a,i.state=d,i.context=u,a=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,du(e,t),u=t.memoizedProps,h=zl(l,u),i.props=h,y=t.pendingProps,m=i.context,d=l.contextType,o=Vl,typeof d=="object"&&d!==null&&(o=Ee(d)),s=l.getDerivedStateFromProps,(d=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==y||m!==o)&&Bo(t,i,a,o),kt=!1,m=t.memoizedState,i.state=m,Xa(t,a,i,n),ka();var g=t.memoizedState;u!==y||m!==g||kt||e!==null&&e.dependencies!==null&&fi(e.dependencies)?(typeof s=="function"&&(jc(t,l,s,a),g=t.memoizedState),(h=kt||Go(t,l,h,a,m,g,o)||e!==null&&e.dependencies!==null&&fi(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,g,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,g,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),i.props=a,i.state=g,i.context=o,a=h):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Wn(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Tl(t,e.child,null,n),t.child=Tl(t,null,l,n)):je(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Rt(e,t,n),e}function Vo(e,t,l,a){return jl(),t.flags|=256,je(e,t,l,a),t.child}var Ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(e){return{baseLanes:e,cachePool:Uf()}}function Ec(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Ze),e}function Ed(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(fe.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Z){if(n?Qt(t):Zt(),(e=ne)?(e=ym(e,nt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ul!==null?{id:dt,overflow:mt}:null,retryLane:536870912,hydrationErrors:null},l=Of(e),l.return=t,t.child=l,Te=t,ne=null)):e=null,e===null)throw sl(t);return Ru(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,n?(Zt(),n=t.mode,s=vi({mode:"hidden",children:s},n),a=bl(a,n,l,null),s.return=t,a.return=t,s.sibling=a,t.child=s,a=t.child,a.memoizedState=Tc(l),a.childLanes=Ec(e,u,l),t.memoizedState=Ac,Ua(null,a)):(Qt(t),Nu(t,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)t.flags&256?(Qt(t),t.flags&=-257,t=zc(e,t,l)):t.memoizedState!==null?(Zt(),t.child=e.child,t.flags|=128,t=null):(Zt(),s=a.fallback,n=t.mode,a=vi({mode:"visible",children:a.children},n),s=bl(s,n,l,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,Tl(t,e.child,null,l),a=t.child,a.memoizedState=Tc(l),a.childLanes=Ec(e,u,l),t.memoizedState=Ac,t=Ua(null,a));else if(Qt(t),Ru(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var d=u.dgst;u=d,a=Error(S(419)),a.stack="",a.digest=u,tn({value:a,source:null,stack:null}),t=zc(e,t,l)}else if(pe||ya(e,t,l,!1),u=(l&e.childLanes)!==0,pe||u){if(u=ee,u!==null&&(a=tf(u,l),a!==0&&a!==o.retryLane))throw o.retryLane=a,_l(e,a),Ye(u,e,a),Ds;Uu(s)||Ni(),t=zc(e,t,l)}else Uu(s)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,ne=ct(s.nextSibling),Te=t,Z=!0,Pt=null,nt=!1,e!==null&&Mf(t,e),t=Nu(t,a.children),t.flags|=4096);return t}return n?(Zt(),s=a.fallback,n=t.mode,o=e.child,d=o.sibling,a=Ct(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,d!==null?s=Ct(d,s):(s=bl(s,n,l,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,Ua(null,a),a=t.child,s=e.child.memoizedState,s===null?s=Tc(l):(n=s.cachePool,n!==null?(o=he._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Uf(),s={baseLanes:s.baseLanes|l,cachePool:n}),a.memoizedState=s,a.childLanes=Ec(e,u,l),t.memoizedState=Ac,Ua(e.child,a)):(Qt(t),l=e.child,e=l.sibling,l=Ct(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Nu(e,t){return t=vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vi(e,t){return e=Qe(22,e,null,t),e.lanes=0,e}function zc(e,t,l){return Tl(t,e.child,null,l),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ko(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ou(e.return,t,l)}function Cc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function zd(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=fe.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,te(fe,u),je(e,t,a,l),a=Z?en:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ko(e,l,t);else if(e.tag===19)Ko(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&gi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Cc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&gi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Cc(t,!0,l,null,i,a);break;case"together":Cc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Rt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),rl|=t.lanes,!(l&t.childLanes))if(e!==null){if(ya(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,l=Ct(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ct(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Os(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&fi(e)))}function Np(e,t,l){switch(t.tag){case 3:ni(t,t.stateNode.containerInfo),Xt(t,he,e.memoizedState.cache),jl();break;case 27:case 5:Wc(t);break;case 4:ni(t,t.stateNode.containerInfo);break;case 10:Xt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,hu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Qt(t),t.flags|=128,null):l&t.child.childLanes?Ed(e,t,l):(Qt(t),e=Rt(e,t,l),e!==null?e.sibling:null);Qt(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ya(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return zd(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),te(fe,fe.current),a)break;return null;case 22:return t.lanes=0,Td(e,t,l,t.pendingProps);case 24:Xt(t,he,e.memoizedState.cache)}return Rt(e,t,l)}function Cd(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)pe=!0;else{if(!Os(e,l)&&!(t.flags&128))return pe=!1,Np(e,t,l);pe=!!(e.flags&131072)}else pe=!1,Z&&t.flags&1048576&&_f(t,en,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=pl(t.elementType),t.type=e,typeof e=="function")ss(e)?(a=zl(e,a),t.tag=1,t=Zo(null,t,e,a,l)):(t.tag=0,t=Su(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===Ju){t.tag=11,t=qo(null,t,e,a,l);break e}else if(n===$u){t.tag=14,t=Lo(null,t,e,a,l);break e}}throw t=Jc(e)||e,Error(S(306,t,""))}}return t;case 0:return Su(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=zl(a,t.pendingProps),Zo(e,t,a,n,l);case 3:e:{if(ni(t,t.stateNode.containerInfo),e===null)throw Error(S(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,du(e,t),Xa(t,a,null,l);var u=t.memoizedState;if(a=u.cache,Xt(t,he,a),a!==i.cache&&ru(t,[he],l,!0),ka(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Vo(e,t,a,l);break e}else if(a!==n){n=at(Error(S(424)),t),tn(n),t=Vo(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ne=ct(e.firstChild),Te=t,Z=!0,Pt=null,nt=!0,l=Gf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(jl(),a===n){t=Rt(e,t,l);break e}je(e,t,a,l)}t=t.child}return t;case 26:return Wn(e,t),e===null?(l=mr(t.type,null,t.pendingProps,null))?t.memoizedState=l:Z||(l=t.type,e=t.pendingProps,a=Ei(It.current).createElement(l),a[Ae]=t,a[qe]=e,ze(a,l,e),Se(a),t.stateNode=a):t.memoizedState=mr(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Wc(t),e===null&&Z&&(a=t.stateNode=vm(t.type,t.pendingProps,It.current),Te=t,nt=!0,n=ne,dl(t.type)?(Hu=n,ne=ct(a.firstChild)):ne=n),je(e,t,t.pendingProps.children,l),Wn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Z&&((n=a=ne)&&(a=Ip(a,t.type,t.pendingProps,nt),a!==null?(t.stateNode=a,Te=t,ne=ct(a.firstChild),nt=!1,n=!0):n=!1),n||sl(t)),Wc(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,Mu(n,i)?a=null:u!==null&&Mu(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=ys(e,t,mp,null,null,l),sn._currentValue=n),Wn(e,t),je(e,t,a,l),t.child;case 6:return e===null&&Z&&((e=l=ne)&&(l=Pp(l,t.pendingProps,nt),l!==null?(t.stateNode=l,Te=t,ne=null,e=!0):e=!1),e||sl(t)),null;case 13:return Ed(e,t,l);case 4:return ni(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Tl(t,null,a,l):je(e,t,a,l),t.child;case 11:return qo(e,t,t.type,t.pendingProps,l);case 7:return je(e,t,t.pendingProps,l),t.child;case 8:return je(e,t,t.pendingProps.children,l),t.child;case 12:return je(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,Xt(t,t.type,a.value),je(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Al(t),n=Ee(n),a=a(n),t.flags|=1,je(e,t,a,l),t.child;case 14:return Lo(e,t,t.type,t.pendingProps,l);case 15:return Ad(e,t,t.type,t.pendingProps,l);case 19:return zd(e,t,l);case 31:return Sp(e,t,l);case 22:return Td(e,t,l,t.pendingProps);case 24:return Al(t),a=Ee(he),e===null?(n=ds(),n===null&&(n=ee,i=fs(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},gs(t),Xt(t,he,n)):(e.lanes&l&&(du(e,t),Xa(t,null,null,l),ka()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Xt(t,he,a)):(a=i.cache,Xt(t,he,a),a!==n.cache&&ru(t,[he],l,!0))),je(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(S(156,t.tag))}function bt(e){e.flags|=4}function Dc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Id())e.flags|=8192;else throw Sl=di,ms}else e.flags&=-16777217}function Jo(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Sm(t))if(Id())e.flags|=8192;else throw Sl=di,ms}function Rn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ir():536870912,e.lanes|=t,oa|=t)}function Ca(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function jp(e,t,l){var a=t.pendingProps;switch(rs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ae(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Dt(he),aa(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(wl(t)?bt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xc())),ae(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(bt(t),i!==null?(ae(t),Jo(t,i)):(ae(t),Dc(t,n,null,a,l))):i?i!==e.memoizedState?(bt(t),ae(t),Jo(t,i)):(ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&bt(t),ae(t),Dc(t,n,e,a,l)),null;case 27:if(ii(t),l=It.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&bt(t);else{if(!a){if(t.stateNode===null)throw Error(S(166));return ae(t),null}e=ht.current,wl(t)?jo(t):(e=vm(n,a,l),t.stateNode=e,bt(t))}return ae(t),null;case 5:if(ii(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&bt(t);else{if(!a){if(t.stateNode===null)throw Error(S(166));return ae(t),null}if(i=ht.current,wl(t))jo(t);else{var u=Ei(It.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Ae]=t,i[qe]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(ze(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&bt(t)}}return ae(t),Dc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&bt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(S(166));if(e=It.current,wl(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Te,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ae]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||gm(e.nodeValue,l)),e||sl(t,!0)}else e=Ei(e).createTextNode(a),e[Ae]=t,t.stateNode=e}return ae(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=wl(t),l!==null){if(e===null){if(!a)throw Error(S(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(557));e[Ae]=t}else jl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),e=!1}else l=xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(Xe(t),t):(Xe(t),null);if(t.flags&128)throw Error(S(558))}return ae(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=wl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(S(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(S(317));n[Ae]=t}else jl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),n=!1}else n=xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Xe(t),t):(Xe(t),null)}return Xe(t),t.flags&128?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Rn(t,t.updateQueue),ae(t),null);case 4:return aa(),e===null&&Gs(t.stateNode.containerInfo),ae(t),null;case 10:return Dt(t.type),ae(t),null;case 19:if(Ne(fe),a=t.memoizedState,a===null)return ae(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)Ca(a,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=gi(e),i!==null){for(t.flags|=128,Ca(a,!1),e=i.updateQueue,t.updateQueue=e,Rn(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Df(l,e),l=l.sibling;return te(fe,fe.current&1|2),Z&&jt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Ve()>xi&&(t.flags|=128,n=!0,Ca(a,!1),t.lanes=4194304)}else{if(!n)if(e=gi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Rn(t,e),Ca(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Z)return ae(t),null}else 2*Ve()-a.renderingStartTime>xi&&l!==536870912&&(t.flags|=128,n=!0,Ca(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ve(),e.sibling=null,l=fe.current,te(fe,n?l&1|2:l&1),Z&&jt(t,a.treeForkCount),e):(ae(t),null);case 22:case 23:return Xe(t),hs(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?l&536870912&&!(t.flags&128)&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),l=t.updateQueue,l!==null&&Rn(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&Ne(xl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Dt(he),ae(t),null;case 25:return null;case 30:return null}throw Error(S(156,t.tag))}function Ap(e,t){switch(rs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dt(he),aa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ii(t),null;case 31:if(t.memoizedState!==null){if(Xe(t),t.alternate===null)throw Error(S(340));jl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xe(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));jl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(fe),null;case 4:return aa(),null;case 10:return Dt(t.type),null;case 22:case 23:return Xe(t),hs(),e!==null&&Ne(xl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Dt(he),null;case 25:return null;default:return null}}function Dd(e,t){switch(rs(t),t.tag){case 3:Dt(he),aa();break;case 26:case 27:case 5:ii(t);break;case 4:aa();break;case 31:t.memoizedState!==null&&Xe(t);break;case 13:Xe(t);break;case 19:Ne(fe);break;case 10:Dt(t.type);break;case 22:case 23:Xe(t),hs(),e!==null&&Ne(xl);break;case 24:Dt(he)}}function xn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(s){W(t,t.return,s)}}function ol(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var o=l,d=s;try{d()}catch(h){W(n,o,h)}}}a=a.next}while(a!==i)}}catch(h){W(t,t.return,h)}}function Od(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Yf(t,l)}catch(a){W(e,e.return,a)}}}function _d(e,t,l){l.props=zl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){W(e,t,a)}}function Za(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){W(e,t,n)}}function gt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){W(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){W(e,t,n)}else l.current=null}function Md(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){W(e,e.return,n)}}function Oc(e,t,l){try{var a=e.stateNode;Vp(a,e.type,l,t),a[qe]=t}catch(n){W(e,e.return,n)}}function wd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&dl(e.type)||e.tag===4}function _c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&dl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ju(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Et));else if(a!==4&&(a===27&&dl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(ju(e,t,l),e=e.sibling;e!==null;)ju(e,t,l),e=e.sibling}function bi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&dl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(bi(e,t,l),e=e.sibling;e!==null;)bi(e,t,l),e=e.sibling}function Ud(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ze(t,a,l),t[Ae]=e,t[qe]=l}catch(i){W(e,e.return,i)}}var At=!1,ge=!1,Mc=!1,$o=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Tp(e,t){if(e=e.containerInfo,Ou=Oi,e=Sf(e),is(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,s=-1,o=-1,d=0,h=0,y=e,m=null;t:for(;;){for(var g;y!==l||n!==0&&y.nodeType!==3||(s=u+n),y!==i||a!==0&&y.nodeType!==3||(o=u+a),y.nodeType===3&&(u+=y.nodeValue.length),(g=y.firstChild)!==null;)m=y,y=g;for(;;){if(y===e)break t;if(m===l&&++d===n&&(s=u),m===i&&++h===a&&(o=u),(g=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=g}l=s===-1||o===-1?null:{start:s,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(_u={focusedElem:e,selectionRange:l},Oi=!1,xe=t;xe!==null;)if(t=xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xe=e;else for(;xe!==null;){switch(t=xe,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var j=zl(l.type,n);e=a.getSnapshotBeforeUpdate(j,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(z){W(l,l.return,z)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)wu(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(S(163))}if(e=t.sibling,e!==null){e.return=t.return,xe=e;break}xe=t.return}}function Rd(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:St(e,l),a&4&&xn(5,l);break;case 1:if(St(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){W(l,l.return,u)}else{var n=zl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){W(l,l.return,u)}}a&64&&Od(l),a&512&&Za(l,l.return);break;case 3:if(St(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Yf(e,t)}catch(u){W(l,l.return,u)}}break;case 27:t===null&&a&4&&Ud(l);case 26:case 5:St(e,l),t===null&&a&4&&Md(l),a&512&&Za(l,l.return);break;case 12:St(e,l);break;case 31:St(e,l),a&4&&Bd(e,l);break;case 13:St(e,l),a&4&&Yd(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Up.bind(null,l),ey(e,l))));break;case 22:if(a=l.memoizedState!==null||At,!a){t=t!==null&&t.memoizedState!==null||ge,n=At;var i=ge;At=a,(ge=t)&&!i?Nt(e,l,(l.subtreeFlags&8772)!==0):St(e,l),At=n,ge=i}break;case 30:break;default:St(e,l)}}function Hd(e){var t=e.alternate;t!==null&&(e.alternate=null,Hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ue=null,Ge=!1;function xt(e,t,l){for(l=l.child;l!==null;)Gd(e,t,l),l=l.sibling}function Gd(e,t,l){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(mn,l)}catch{}switch(l.tag){case 26:ge||gt(l,t),xt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ge||gt(l,t);var a=ue,n=Ge;dl(l.type)&&(ue=l.stateNode,Ge=!1),xt(e,t,l),$a(l.stateNode),ue=a,Ge=n;break;case 5:ge||gt(l,t);case 6:if(a=ue,n=Ge,ue=null,xt(e,t,l),ue=a,Ge=n,ue!==null)if(Ge)try{(ue.nodeType===9?ue.body:ue.nodeName==="HTML"?ue.ownerDocument.body:ue).removeChild(l.stateNode)}catch(i){W(l,t,i)}else try{ue.removeChild(l.stateNode)}catch(i){W(l,t,i)}break;case 18:ue!==null&&(Ge?(e=ue,sr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),ma(e)):sr(ue,l.stateNode));break;case 4:a=ue,n=Ge,ue=l.stateNode.containerInfo,Ge=!0,xt(e,t,l),ue=a,Ge=n;break;case 0:case 11:case 14:case 15:ol(2,l,t),ge||ol(4,l,t),xt(e,t,l);break;case 1:ge||(gt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&_d(l,t,a)),xt(e,t,l);break;case 21:xt(e,t,l);break;case 22:ge=(a=ge)||l.memoizedState!==null,xt(e,t,l),ge=a;break;default:xt(e,t,l)}}function Bd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ma(e)}catch(l){W(t,t.return,l)}}}function Yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ma(e)}catch(l){W(t,t.return,l)}}function Ep(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $o),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $o),t;default:throw Error(S(435,e.tag))}}function Hn(e,t){var l=Ep(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=Rp.bind(null,e,a);a.then(n,n)}})}function Re(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(dl(s.type)){ue=s.stateNode,Ge=!1;break e}break;case 5:ue=s.stateNode,Ge=!1;break e;case 3:case 4:ue=s.stateNode.containerInfo,Ge=!0;break e}s=s.return}if(ue===null)throw Error(S(160));Gd(i,u,n),ue=null,Ge=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}var ot=null;function qd(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Re(t,e),He(e),a&4&&(ol(3,e,e.return),xn(3,e),ol(5,e,e.return));break;case 1:Re(t,e),He(e),a&512&&(ge||l===null||gt(l,l.return)),a&64&&At&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=ot;if(Re(t,e),He(e),a&512&&(ge||l===null||gt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[pn]||i[Ae]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),ze(i,a,l),i[Ae]=e,Se(i),a=i;break e;case"link":var u=hr("link","href",n).get(a+(l.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(a),ze(i,a,l),n.head.appendChild(i);break;case"meta":if(u=hr("meta","content",n).get(a+(l.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(s,1);break t}}i=n.createElement(a),ze(i,a,l),n.head.appendChild(i);break;default:throw Error(S(468,a))}i[Ae]=e,Se(i),a=i}e.stateNode=a}else pr(n,e.type,e.stateNode);else e.stateNode=gr(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?pr(n,e.type,e.stateNode):gr(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Oc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Re(t,e),He(e),a&512&&(ge||l===null||gt(l,l.return)),l!==null&&a&4&&Oc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Re(t,e),He(e),a&512&&(ge||l===null||gt(l,l.return)),e.flags&32){n=e.stateNode;try{ia(n,"")}catch(j){W(e,e.return,j)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Oc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Mc=!0);break;case 6:if(Re(t,e),He(e),a&4){if(e.stateNode===null)throw Error(S(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(j){W(e,e.return,j)}}break;case 3:if(Pn=null,n=ot,ot=zi(t.containerInfo),Re(t,e),ot=n,He(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{ma(t.containerInfo)}catch(j){W(e,e.return,j)}Mc&&(Mc=!1,Ld(e));break;case 4:a=ot,ot=zi(e.stateNode.containerInfo),Re(t,e),He(e),ot=a;break;case 12:Re(t,e),He(e);break;case 31:Re(t,e),He(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hn(e,a)));break;case 13:Re(t,e),He(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&($i=Ve()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hn(e,a)));break;case 22:n=e.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,d=At,h=ge;if(At=d||n,ge=h||o,Re(t,e),ge=h,At=d,He(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||o||At||ge||yl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){o=l=t;try{if(i=o.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=o.stateNode;var y=o.memoizedProps.style,m=y!=null&&y.hasOwnProperty("display")?y.display:null;s.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(j){W(o,o.return,j)}}}else if(t.tag===6){if(l===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(j){W(o,o.return,j)}}}else if(t.tag===18){if(l===null){o=t;try{var g=o.stateNode;n?or(g,!0):or(o.stateNode,!1)}catch(j){W(o,o.return,j)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Hn(e,l))));break;case 19:Re(t,e),He(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hn(e,a)));break;case 30:break;case 21:break;default:Re(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(wd(a)){l=a;break}a=a.return}if(l==null)throw Error(S(160));switch(l.tag){case 27:var n=l.stateNode,i=_c(e);bi(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(ia(u,""),l.flags&=-33);var s=_c(e);bi(e,s,u);break;case 3:case 4:var o=l.stateNode.containerInfo,d=_c(e);ju(e,d,o);break;default:throw Error(S(161))}}catch(h){W(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ld(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ld(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function St(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rd(e,t.alternate,t),t=t.sibling}function yl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ol(4,t,t.return),yl(t);break;case 1:gt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&_d(t,t.return,l),yl(t);break;case 27:$a(t.stateNode);case 26:case 5:gt(t,t.return),yl(t);break;case 22:t.memoizedState===null&&yl(t);break;case 30:yl(t);break;default:yl(t)}e=e.sibling}}function Nt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Nt(n,i,l),xn(4,i);break;case 1:if(Nt(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){W(a,a.return,d)}if(a=i,n=a.updateQueue,n!==null){var s=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Bf(o[n],s)}catch(d){W(a,a.return,d)}}l&&u&64&&Od(i),Za(i,i.return);break;case 27:Ud(i);case 26:case 5:Nt(n,i,l),l&&a===null&&u&4&&Md(i),Za(i,i.return);break;case 12:Nt(n,i,l);break;case 31:Nt(n,i,l),l&&u&4&&Bd(n,i);break;case 13:Nt(n,i,l),l&&u&4&&Yd(n,i);break;case 22:i.memoizedState===null&&Nt(n,i,l),Za(i,i.return);break;case 30:break;default:Nt(n,i,l)}t=t.sibling}}function _s(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&vn(l))}function Ms(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vn(e))}function st(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kd(e,t,l,a),t=t.sibling}function kd(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:st(e,t,l,a),n&2048&&xn(9,t);break;case 1:st(e,t,l,a);break;case 3:st(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vn(e)));break;case 12:if(n&2048){st(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){W(t,t.return,o)}}else st(e,t,l,a);break;case 31:st(e,t,l,a);break;case 13:st(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?st(e,t,l,a):Va(e,t):i._visibility&2?st(e,t,l,a):(i._visibility|=2,Hl(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&_s(u,t);break;case 24:st(e,t,l,a),n&2048&&Ms(t.alternate,t);break;default:st(e,t,l,a)}}function Hl(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=l,o=a,d=u.flags;switch(u.tag){case 0:case 11:case 15:Hl(i,u,s,o,n),xn(8,u);break;case 23:break;case 22:var h=u.stateNode;u.memoizedState!==null?h._visibility&2?Hl(i,u,s,o,n):Va(i,u):(h._visibility|=2,Hl(i,u,s,o,n)),n&&d&2048&&_s(u.alternate,u);break;case 24:Hl(i,u,s,o,n),n&&d&2048&&Ms(u.alternate,u);break;default:Hl(i,u,s,o,n)}t=t.sibling}}function Va(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:Va(l,a),n&2048&&_s(a.alternate,a);break;case 24:Va(l,a),n&2048&&Ms(a.alternate,a);break;default:Va(l,a)}t=t.sibling}}var Ra=8192;function Ul(e,t,l){if(e.subtreeFlags&Ra)for(e=e.child;e!==null;)Xd(e,t,l),e=e.sibling}function Xd(e,t,l){switch(e.tag){case 26:Ul(e,t,l),e.flags&Ra&&e.memoizedState!==null&&dy(l,ot,e.memoizedState,e.memoizedProps);break;case 5:Ul(e,t,l);break;case 3:case 4:var a=ot;ot=zi(e.stateNode.containerInfo),Ul(e,t,l),ot=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ra,Ra=16777216,Ul(e,t,l),Ra=a):Ul(e,t,l));break;default:Ul(e,t,l)}}function Qd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Da(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];xe=a,Vd(a,e)}Qd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zd(e),e=e.sibling}function Zd(e){switch(e.tag){case 0:case 11:case 15:Da(e),e.flags&2048&&ol(9,e,e.return);break;case 3:Da(e);break;case 12:Da(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fn(e)):Da(e);break;default:Da(e)}}function Fn(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];xe=a,Vd(a,e)}Qd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ol(8,t,t.return),Fn(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Fn(t));break;default:Fn(t)}e=e.sibling}}function Vd(e,t){for(;xe!==null;){var l=xe;switch(l.tag){case 0:case 11:case 15:ol(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:vn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,xe=a;else e:for(l=e;xe!==null;){a=xe;var n=a.sibling,i=a.return;if(Hd(a),a===l){xe=null;break e}if(n!==null){n.return=i,xe=n;break e}xe=i}}}var zp={getCacheForType:function(e){var t=Ee(he),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ee(he).controller.signal}},Cp=typeof WeakMap=="function"?WeakMap:Map,K=0,ee=null,X=null,Q=0,$=0,ke=null,$t=!1,ba=!1,ws=!1,Ht=0,re=0,rl=0,Nl=0,Us=0,Ze=0,oa=0,Ka=null,Be=null,Au=!1,$i=0,Kd=0,xi=1/0,Si=null,ll=null,ye=0,al=null,ra=null,Ot=0,Tu=0,Eu=null,Jd=null,Ja=0,zu=null;function $e(){return K&2&&Q!==0?Q&-Q:H.T!==null?Hs():lf()}function $d(){if(Ze===0)if(!(Q&536870912)||Z){var e=Cn;Cn<<=1,!(Cn&3932160)&&(Cn=262144),Ze=e}else Ze=536870912;return e=Fe.current,e!==null&&(e.flags|=32),Ze}function Ye(e,t,l){(e===ee&&($===2||$===9)||e.cancelPendingCommit!==null)&&(fa(e,0),Wt(e,Q,Ze,!1)),hn(e,l),(!(K&2)||e!==ee)&&(e===ee&&(!(K&2)&&(Nl|=l),re===4&&Wt(e,Q,Ze,!1)),yt(e))}function Wd(e,t,l){if(K&6)throw Error(S(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||gn(e,t),n=a?_p(e,t):wc(e,t,!0),i=a;do{if(n===0){ba&&!a&&Wt(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!Dp(l)){n=wc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=Ka;var o=s.current.memoizedState.isDehydrated;if(o&&(fa(s,u).flags|=256),u=wc(s,u,!1),u!==2){if(ws&&!o){s.errorRecoveryDisabledLanes|=i,Nl|=i,n=4;break e}i=Be,Be=n,i!==null&&(Be===null?Be=i:Be.push.apply(Be,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){fa(e,0),Wt(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(S(345));case 4:if((t&4194048)!==t)break;case 6:Wt(a,t,Ze,!$t);break e;case 2:Be=null;break;case 3:case 5:break;default:throw Error(S(329))}if((t&62914560)===t&&(n=$i+300-Ve(),10<n)){if(Wt(a,t,Ze,!$t),Bi(a,0,!0)!==0)break e;Ot=t,a.timeoutHandle=pm(Wo.bind(null,a,l,Be,Si,Au,t,Ze,Nl,oa,$t,i,"Throttled",-0,0),n);break e}Wo(a,l,Be,Si,Au,t,Ze,Nl,oa,$t,i,null,-0,0)}}break}while(!0);yt(e)}function Wo(e,t,l,a,n,i,u,s,o,d,h,y,m,g){if(e.timeoutHandle=-1,y=t.subtreeFlags,y&8192||(y&16785408)===16785408){y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Et},Xd(t,i,y);var j=(i&62914560)===i?$i-Ve():(i&4194048)===i?Kd-Ve():0;if(j=my(y,j),j!==null){Ot=i,e.cancelPendingCommit=j(Io.bind(null,e,t,i,l,a,n,u,s,o,h,y,null,m,g)),Wt(e,i,u,!d);return}}Io(e,t,i,l,a,n,u,s,o)}function Dp(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!We(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t,l,a){t&=~Us,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-Je(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Pr(e,l,t)}function Wi(){return K&6?!0:(Sn(0),!1)}function Rs(){if(X!==null){if($===0)var e=X.return;else e=X,zt=Ml=null,xs(e),ea=null,ln=0,e=X;for(;e!==null;)Dd(e.alternate,e),e=e.return;X=null}}function fa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,$p(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Ot=0,Rs(),ee=e,X=l=Ct(e.current,null),Q=t,$=0,ke=null,$t=!1,ba=gn(e,t),ws=!1,oa=Ze=Us=Nl=rl=re=0,Be=Ka=null,Au=!1,t&8&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-Je(a),i=1<<n;t|=e[n],a&=~i}return Ht=t,ki(),l}function Fd(e,t){Y=null,H.H=nn,t===va||t===Qi?(t=Co(),$=3):t===ms?(t=Co(),$=4):$=t===Ds?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ke=t,X===null&&(re=1,yi(e,at(t,e.current)))}function Id(){var e=Fe.current;return e===null?!0:(Q&4194048)===Q?it===null:(Q&62914560)===Q||Q&536870912?e===it:!1}function Pd(){var e=H.H;return H.H=nn,e===null?nn:e}function em(){var e=H.A;return H.A=zp,e}function Ni(){re=4,$t||(Q&4194048)!==Q&&Fe.current!==null||(ba=!0),!(rl&134217727)&&!(Nl&134217727)||ee===null||Wt(ee,Q,Ze,!1)}function wc(e,t,l){var a=K;K|=2;var n=Pd(),i=em();(ee!==e||Q!==t)&&(Si=null,fa(e,t)),t=!1;var u=re;e:do try{if($!==0&&X!==null){var s=X,o=ke;switch($){case 8:Rs(),u=6;break e;case 3:case 2:case 9:case 6:Fe.current===null&&(t=!0);var d=$;if($=0,ke=null,$l(e,s,o,d),l&&ba){u=0;break e}break;default:d=$,$=0,ke=null,$l(e,s,o,d)}}Op(),u=re;break}catch(h){Fd(e,h)}while(!0);return t&&e.shellSuspendCounter++,zt=Ml=null,K=a,H.H=n,H.A=i,X===null&&(ee=null,Q=0,ki()),u}function Op(){for(;X!==null;)tm(X)}function _p(e,t){var l=K;K|=2;var a=Pd(),n=em();ee!==e||Q!==t?(Si=null,xi=Ve()+500,fa(e,t)):ba=gn(e,t);e:do try{if($!==0&&X!==null){t=X;var i=ke;t:switch($){case 1:$=0,ke=null,$l(e,t,i,1);break;case 2:case 9:if(zo(i)){$=0,ke=null,Fo(t);break}t=function(){$!==2&&$!==9||ee!==e||($=7),yt(e)},i.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:zo(i)?($=0,ke=null,Fo(t)):($=0,ke=null,$l(e,t,i,7));break;case 5:var u=null;switch(X.tag){case 26:u=X.memoizedState;case 5:case 27:var s=X;if(u?Sm(u):s.stateNode.complete){$=0,ke=null;var o=s.sibling;if(o!==null)X=o;else{var d=s.return;d!==null?(X=d,Fi(d)):X=null}break t}}$=0,ke=null,$l(e,t,i,5);break;case 6:$=0,ke=null,$l(e,t,i,6);break;case 8:Rs(),re=6;break e;default:throw Error(S(462))}}Mp();break}catch(h){Fd(e,h)}while(!0);return zt=Ml=null,H.H=a,H.A=n,K=l,X!==null?0:(ee=null,Q=0,ki(),re)}function Mp(){for(;X!==null&&!th();)tm(X)}function tm(e){var t=Cd(e.alternate,e,Ht);e.memoizedProps=e.pendingProps,t===null?Fi(e):X=t}function Fo(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Qo(l,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Qo(l,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:xs(t);default:Dd(l,t),t=X=Df(t,Ht),t=Cd(l,t,Ht)}e.memoizedProps=e.pendingProps,t===null?Fi(e):X=t}function $l(e,t,l,a){zt=Ml=null,xs(t),ea=null,ln=0;var n=t.return;try{if(xp(e,n,t,l,Q)){re=1,yi(e,at(l,e.current)),X=null;return}}catch(i){if(n!==null)throw X=n,i;re=1,yi(e,at(l,e.current)),X=null;return}t.flags&32768?(Z||a===1?e=!0:ba||Q&536870912?e=!1:($t=e=!0,(a===2||a===9||a===3||a===6)&&(a=Fe.current,a!==null&&a.tag===13&&(a.flags|=16384))),lm(t,e)):Fi(t)}function Fi(e){var t=e;do{if(t.flags&32768){lm(t,$t);return}e=t.return;var l=jp(t.alternate,t,Ht);if(l!==null){X=l;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);re===0&&(re=5)}function lm(e,t){do{var l=Ap(e.alternate,e);if(l!==null){l.flags&=32767,X=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){X=e;return}X=e=l}while(e!==null);re=6,X=null}function Io(e,t,l,a,n,i,u,s,o){e.cancelPendingCommit=null;do Ii();while(ye!==0);if(K&6)throw Error(S(327));if(t!==null){if(t===e.current)throw Error(S(177));if(i=t.lanes|t.childLanes,i|=cs,fh(e,l,i,u,s,o),e===ee&&(X=ee=null,Q=0),ra=t,al=e,Ot=l,Tu=i,Eu=n,Jd=a,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Hp(ci,function(){return um(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,t.subtreeFlags&13878||a){a=H.T,H.T=null,n=J.p,J.p=2,u=K,K|=4;try{Tp(e,t,l)}finally{K=u,J.p=n,H.T=a}}ye=1,am(),nm(),im()}}function am(){if(ye===1){ye=0;var e=al,t=ra,l=(t.flags&13878)!==0;if(t.subtreeFlags&13878||l){l=H.T,H.T=null;var a=J.p;J.p=2;var n=K;K|=4;try{qd(t,e);var i=_u,u=Sf(e.containerInfo),s=i.focusedElem,o=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&xf(s.ownerDocument.documentElement,s)){if(o!==null&&is(s)){var d=o.start,h=o.end;if(h===void 0&&(h=d),"selectionStart"in s)s.selectionStart=d,s.selectionEnd=Math.min(h,s.value.length);else{var y=s.ownerDocument||document,m=y&&y.defaultView||window;if(m.getSelection){var g=m.getSelection(),j=s.textContent.length,z=Math.min(o.start,j),_=o.end===void 0?z:Math.min(o.end,j);!g.extend&&z>_&&(u=_,_=z,z=u);var f=xo(s,z),r=xo(s,_);if(f&&r&&(g.rangeCount!==1||g.anchorNode!==f.node||g.anchorOffset!==f.offset||g.focusNode!==r.node||g.focusOffset!==r.offset)){var p=y.createRange();p.setStart(f.node,f.offset),g.removeAllRanges(),z>_?(g.addRange(p),g.extend(r.node,r.offset)):(p.setEnd(r.node,r.offset),g.addRange(p))}}}}for(y=[],g=s;g=g.parentNode;)g.nodeType===1&&y.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<y.length;s++){var v=y[s];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Oi=!!Ou,_u=Ou=null}finally{K=n,J.p=a,H.T=l}}e.current=t,ye=2}}function nm(){if(ye===2){ye=0;var e=al,t=ra,l=(t.flags&8772)!==0;if(t.subtreeFlags&8772||l){l=H.T,H.T=null;var a=J.p;J.p=2;var n=K;K|=4;try{Rd(e,t.alternate,t)}finally{K=n,J.p=a,H.T=l}}ye=3}}function im(){if(ye===4||ye===3){ye=0,lh();var e=al,t=ra,l=Ot,a=Jd;t.subtreeFlags&10256||t.flags&10256?ye=5:(ye=0,ra=al=null,cm(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ll=null),Iu(l),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(mn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=H.T,n=J.p,J.p=2,H.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var s=a[u];i(s.value,{componentStack:s.stack})}}finally{H.T=t,J.p=n}}Ot&3&&Ii(),yt(e),n=e.pendingLanes,l&261930&&n&42?e===zu?Ja++:(Ja=0,zu=e):Ja=0,Sn(0)}}function cm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,vn(t)))}function Ii(){return am(),nm(),im(),um()}function um(){if(ye!==5)return!1;var e=al,t=Tu;Tu=0;var l=Iu(Ot),a=H.T,n=J.p;try{J.p=32>l?32:l,H.T=null,l=Eu,Eu=null;var i=al,u=Ot;if(ye=0,ra=al=null,Ot=0,K&6)throw Error(S(331));var s=K;if(K|=4,Zd(i.current),kd(i,i.current,u,l),K=s,Sn(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(mn,i)}catch{}return!0}finally{J.p=n,H.T=a,cm(e,t)}}function Po(e,t,l){t=at(l,t),t=xu(e.stateNode,t,2),e=tl(e,t,2),e!==null&&(hn(e,2),yt(e))}function W(e,t,l){if(e.tag===3)Po(e,e,l);else for(;t!==null;){if(t.tag===3){Po(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ll===null||!ll.has(a))){e=at(l,e),l=Nd(2),a=tl(t,l,2),a!==null&&(jd(l,a,t,e),hn(a,2),yt(a));break}}t=t.return}}function Uc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Cp;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(ws=!0,n.add(l),e=wp.bind(null,e,t,l),t.then(e,e))}function wp(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ee===e&&(Q&l)===l&&(re===4||re===3&&(Q&62914560)===Q&&300>Ve()-$i?!(K&2)&&fa(e,0):Us|=l,oa===Q&&(oa=0)),yt(e)}function sm(e,t){t===0&&(t=Ir()),e=_l(e,t),e!==null&&(hn(e,t),yt(e))}function Up(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),sm(e,l)}function Rp(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(S(314))}a!==null&&a.delete(t),sm(e,l)}function Hp(e,t){return Wu(e,t)}var ji=null,Gl=null,Cu=!1,Ai=!1,Rc=!1,Ft=0;function yt(e){e!==Gl&&e.next===null&&(Gl===null?ji=Gl=e:Gl=Gl.next=e),Ai=!0,Cu||(Cu=!0,Bp())}function Sn(e,t){if(!Rc&&Ai){Rc=!0;do for(var l=!1,a=ji;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Je(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,er(a,i))}else i=Q,i=Bi(a,a===ee?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(i&3)||gn(a,i)||(l=!0,er(a,i));a=a.next}while(l);Rc=!1}}function Gp(){om()}function om(){Ai=Cu=!1;var e=0;Ft!==0&&Jp()&&(e=Ft);for(var t=Ve(),l=null,a=ji;a!==null;){var n=a.next,i=rm(a,t);i===0?(a.next=null,l===null?ji=n:l.next=n,n===null&&(Gl=l)):(l=a,(e!==0||i&3)&&(Ai=!0)),a=n}ye!==0&&ye!==5||Sn(e),Ft!==0&&(Ft=0)}function rm(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Je(i),s=1<<u,o=n[u];o===-1?(!(s&l)||s&a)&&(n[u]=rh(s,t)):o<=t&&(e.expiredLanes|=s),i&=~s}if(t=ee,l=Q,l=Bi(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&oc(a),e.callbackNode=null,e.callbackPriority=0;if(!(l&3)||gn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&oc(a),Iu(l)){case 2:case 8:l=Wr;break;case 32:l=ci;break;case 268435456:l=Fr;break;default:l=ci}return a=fm.bind(null,e),l=Wu(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&oc(a),e.callbackPriority=2,e.callbackNode=null,2}function fm(e,t){if(ye!==0&&ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Ii()&&e.callbackNode!==l)return null;var a=Q;return a=Bi(e,e===ee?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Wd(e,a,t),rm(e,Ve()),e.callbackNode!=null&&e.callbackNode===l?fm.bind(null,e):null)}function er(e,t){if(Ii())return null;Wd(e,t,!0)}function Bp(){Wp(function(){K&6?Wu($r,Gp):om()})}function Hs(){if(Ft===0){var e=ca;e===0&&(e=zn,zn<<=1,!(zn&261888)&&(zn=256)),Ft=e}return Ft}function tr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kn(""+e)}function lr(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Yp(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=tr((n[qe]||null).action),u=a.submitter;u&&(t=(t=u[qe]||null)?tr(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Yi("action","action",null,a,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ft!==0){var o=u?lr(n,u):new FormData(n);vu(l,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=u?lr(n,u):new FormData(n),vu(l,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var Hc=0;Hc<cu.length;Hc++){var Gc=cu[Hc],qp=Gc.toLowerCase(),Lp=Gc[0].toUpperCase()+Gc.slice(1);rt(qp,"on"+Lp)}rt(jf,"onAnimationEnd");rt(Af,"onAnimationIteration");rt(Tf,"onAnimationStart");rt("dblclick","onDoubleClick");rt("focusin","onFocus");rt("focusout","onBlur");rt(ap,"onTransitionRun");rt(np,"onTransitionStart");rt(ip,"onTransitionCancel");rt(Ef,"onTransitionEnd");na("onMouseEnter",["mouseout","mouseover"]);na("onMouseLeave",["mouseout","mouseover"]);na("onPointerEnter",["pointerout","pointerover"]);na("onPointerLeave",["pointerout","pointerover"]);Cl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cl("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cn));function dm(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var s=a[u],o=s.instance,d=s.currentTarget;if(s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(h){si(h)}n.currentTarget=null,i=o}else for(u=0;u<a.length;u++){if(s=a[u],o=s.instance,d=s.currentTarget,s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(h){si(h)}n.currentTarget=null,i=o}}}}function k(e,t){var l=t[Ic];l===void 0&&(l=t[Ic]=new Set);var a=e+"__bubble";l.has(a)||(mm(t,e,2,!1),l.add(a))}function Bc(e,t,l){var a=0;t&&(a|=4),mm(l,e,a,t)}var Gn="_reactListening"+Math.random().toString(36).slice(2);function Gs(e){if(!e[Gn]){e[Gn]=!0,af.forEach(function(l){l!=="selectionchange"&&(kp.has(l)||Bc(l,!1,e),Bc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gn]||(t[Gn]=!0,Bc("selectionchange",!1,t))}}function mm(e,t,l,a){switch(Em(t)){case 2:var n=py;break;case 8:n=yy;break;default:n=Ls}l=n.bind(null,t,l,e),n=void 0,!au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Yc(e,t,l,a,n){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var s=a.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=a.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=ql(s),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){a=i=u;continue e}s=s.parentNode}}a=a.return}df(function(){var d=i,h=ts(l),y=[];e:{var m=zf.get(e);if(m!==void 0){var g=Yi,j=e;switch(e){case"keypress":if(Qn(l)===0)break e;case"keydown":case"keyup":g=Rh;break;case"focusin":j="focus",g=gc;break;case"focusout":j="blur",g=gc;break;case"beforeblur":case"afterblur":g=gc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Bh;break;case jf:case Af:case Tf:g=Eh;break;case Ef:g=qh;break;case"scroll":case"scrollend":g=Sh;break;case"wheel":g=kh;break;case"copy":case"cut":case"paste":g=Ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=fo;break;case"toggle":case"beforetoggle":g=Qh}var z=(t&4)!==0,_=!z&&(e==="scroll"||e==="scrollend"),f=z?m!==null?m+"Capture":null:m;z=[];for(var r=d,p;r!==null;){var v=r;if(p=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||p===null||f===null||(v=Fa(r,f),v!=null&&z.push(un(r,v,p))),_)break;r=r.return}0<z.length&&(m=new g(m,j,null,l,h),y.push({event:m,listeners:z}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&l!==lu&&(j=l.relatedTarget||l.fromElement)&&(ql(j)||j[ha]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(j=l.relatedTarget||l.toElement,g=d,j=j?ql(j):null,j!==null&&(_=dn(j),z=j.tag,j!==_||z!==5&&z!==27&&z!==6)&&(j=null)):(g=null,j=d),g!==j)){if(z=oo,v="onMouseLeave",f="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(z=fo,v="onPointerLeave",f="onPointerEnter",r="pointer"),_=g==null?m:wa(g),p=j==null?m:wa(j),m=new z(v,r+"leave",g,l,h),m.target=_,m.relatedTarget=p,v=null,ql(h)===d&&(z=new z(f,r+"enter",j,l,h),z.target=p,z.relatedTarget=_,v=z),_=v,g&&j)t:{for(z=Xp,f=g,r=j,p=0,v=f;v;v=z(v))p++;v=0;for(var b=r;b;b=z(b))v++;for(;0<p-v;)f=z(f),p--;for(;0<v-p;)r=z(r),v--;for(;p--;){if(f===r||r!==null&&f===r.alternate){z=f;break t}f=z(f),r=z(r)}z=null}else z=null;g!==null&&ar(y,m,g,z,!1),j!==null&&_!==null&&ar(y,_,j,z,!0)}}e:{if(m=d?wa(d):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var T=po;else if(ho(m))if(vf)T=ep;else{T=Ih;var x=Fh}else g=m.nodeName,!g||g.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&es(d.elementType)&&(T=po):T=Ph;if(T&&(T=T(e,d))){yf(y,T,l,h);break e}x&&x(e,m,d),e==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&tu(m,"number",m.value)}switch(x=d?wa(d):window,e){case"focusin":(ho(x)||x.contentEditable==="true")&&(Xl=x,nu=d,Ya=null);break;case"focusout":Ya=nu=Xl=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,So(y,l,h);break;case"selectionchange":if(lp)break;case"keydown":case"keyup":So(y,l,h)}var C;if(ns)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else kl?hf(e,l)&&(U="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(U="onCompositionStart");U&&(gf&&l.locale!=="ko"&&(kl||U!=="onCompositionStart"?U==="onCompositionEnd"&&kl&&(C=mf()):(Jt=h,ls="value"in Jt?Jt.value:Jt.textContent,kl=!0)),x=Ti(d,U),0<x.length&&(U=new ro(U,e,null,l,h),y.push({event:U,listeners:x}),C?U.data=C:(C=pf(l),C!==null&&(U.data=C)))),(C=Vh?Kh(e,l):Jh(e,l))&&(U=Ti(d,"onBeforeInput"),0<U.length&&(x=new ro("onBeforeInput","beforeinput",null,l,h),y.push({event:x,listeners:U}),x.data=C)),Yp(y,e,d,l,h)}dm(y,t)})}function un(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Ti(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Fa(e,l),n!=null&&a.unshift(un(e,n,i)),n=Fa(e,t),n!=null&&a.push(un(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Xp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ar(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var s=l,o=s.alternate,d=s.stateNode;if(s=s.tag,o!==null&&o===a)break;s!==5&&s!==26&&s!==27||d===null||(o=d,n?(d=Fa(l,i),d!=null&&u.unshift(un(l,d,o))):n||(d=Fa(l,i),d!=null&&u.push(un(l,d,o)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var Qp=/\r\n?/g,Zp=/\u0000|\uFFFD/g;function nr(e){return(typeof e=="string"?e:""+e).replace(Qp,`
`).replace(Zp,"")}function gm(e,t){return t=nr(t),nr(e)===t}function F(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ia(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ia(e,""+a);break;case"className":On(e,"class",a);break;case"tabIndex":On(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":On(e,l,a);break;case"style":ff(e,a,i);break;case"data":if(t!=="object"){On(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=kn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&F(e,t,"name",n.name,n,null),F(e,t,"formEncType",n.formEncType,n,null),F(e,t,"formMethod",n.formMethod,n,null),F(e,t,"formTarget",n.formTarget,n,null)):(F(e,t,"encType",n.encType,n,null),F(e,t,"method",n.method,n,null),F(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=kn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Et);break;case"onScroll":a!=null&&k("scroll",e);break;case"onScrollEnd":a!=null&&k("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(S(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(S(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=kn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":k("beforetoggle",e),k("toggle",e),Ln(e,"popover",a);break;case"xlinkActuate":vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":vt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":vt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":vt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":vt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ln(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=bh.get(l)||l,Ln(e,l,a))}}function Du(e,t,l,a,n,i){switch(l){case"style":ff(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(S(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(S(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ia(e,a):(typeof a=="number"||typeof a=="bigint")&&ia(e,""+a);break;case"onScroll":a!=null&&k("scroll",e);break;case"onScrollEnd":a!=null&&k("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Et);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[qe]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Ln(e,l,a)}}}function ze(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":k("error",e),k("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(S(137,t));default:F(e,t,i,u,l,null)}}n&&F(e,t,"srcSet",l.srcSet,l,null),a&&F(e,t,"src",l.src,l,null);return;case"input":k("invalid",e);var s=i=u=n=null,o=null,d=null;for(a in l)if(l.hasOwnProperty(a)){var h=l[a];if(h!=null)switch(a){case"name":n=h;break;case"type":u=h;break;case"checked":o=h;break;case"defaultChecked":d=h;break;case"value":i=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(S(137,t));break;default:F(e,t,a,h,l,null)}}sf(e,i,s,o,d,u,n,!1);return;case"select":k("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(s=l[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":a=s;default:F(e,t,n,s,l,null)}t=i,l=u,e.multiple=!!a,t!=null?Fl(e,!!a,t,!1):l!=null&&Fl(e,!!a,l,!0);return;case"textarea":k("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":a=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(S(91));break;default:F(e,t,u,s,l,null)}rf(e,a,n,i);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(a=l[o],a!=null))switch(o){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:F(e,t,o,a,l,null)}return;case"dialog":k("beforetoggle",e),k("toggle",e),k("cancel",e),k("close",e);break;case"iframe":case"object":k("load",e);break;case"video":case"audio":for(a=0;a<cn.length;a++)k(cn[a],e);break;case"image":k("error",e),k("load",e);break;case"details":k("toggle",e);break;case"embed":case"source":case"link":k("error",e),k("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in l)if(l.hasOwnProperty(d)&&(a=l[d],a!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(S(137,t));default:F(e,t,d,a,l,null)}return;default:if(es(t)){for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!==void 0&&Du(e,t,h,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&F(e,t,s,a,l,null))}function Vp(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,o=null,d=null,h=null;for(g in l){var y=l[g];if(l.hasOwnProperty(g)&&y!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":o=y;default:a.hasOwnProperty(g)||F(e,t,g,null,a,y)}}for(var m in a){var g=a[m];if(y=l[m],a.hasOwnProperty(m)&&(g!=null||y!=null))switch(m){case"type":i=g;break;case"name":n=g;break;case"checked":d=g;break;case"defaultChecked":h=g;break;case"value":u=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(S(137,t));break;default:g!==y&&F(e,t,m,g,a,y)}}eu(e,u,s,o,d,h,i,n);return;case"select":g=u=s=m=null;for(i in l)if(o=l[i],l.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":g=o;default:a.hasOwnProperty(i)||F(e,t,i,null,a,o)}for(n in a)if(i=a[n],o=l[n],a.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":m=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==o&&F(e,t,n,i,a,o)}t=s,l=u,a=g,m!=null?Fl(e,!!l,m,!1):!!a!=!!l&&(t!=null?Fl(e,!!l,t,!0):Fl(e,!!l,l?[]:"",!1));return;case"textarea":g=m=null;for(s in l)if(n=l[s],l.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:F(e,t,s,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":m=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(S(91));break;default:n!==i&&F(e,t,u,n,a,i)}of(e,m,g);return;case"option":for(var j in l)if(m=l[j],l.hasOwnProperty(j)&&m!=null&&!a.hasOwnProperty(j))switch(j){case"selected":e.selected=!1;break;default:F(e,t,j,null,a,m)}for(o in a)if(m=a[o],g=l[o],a.hasOwnProperty(o)&&m!==g&&(m!=null||g!=null))switch(o){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:F(e,t,o,m,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var z in l)m=l[z],l.hasOwnProperty(z)&&m!=null&&!a.hasOwnProperty(z)&&F(e,t,z,null,a,m);for(d in a)if(m=a[d],g=l[d],a.hasOwnProperty(d)&&m!==g&&(m!=null||g!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(S(137,t));break;default:F(e,t,d,m,a,g)}return;default:if(es(t)){for(var _ in l)m=l[_],l.hasOwnProperty(_)&&m!==void 0&&!a.hasOwnProperty(_)&&Du(e,t,_,void 0,a,m);for(h in a)m=a[h],g=l[h],!a.hasOwnProperty(h)||m===g||m===void 0&&g===void 0||Du(e,t,h,m,a,g);return}}for(var f in l)m=l[f],l.hasOwnProperty(f)&&m!=null&&!a.hasOwnProperty(f)&&F(e,t,f,null,a,m);for(y in a)m=a[y],g=l[y],!a.hasOwnProperty(y)||m===g||m==null&&g==null||F(e,t,y,m,a,g)}function ir(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&ir(u)){for(u=0,s=n.responseEnd,a+=1;a<l.length;a++){var o=l[a],d=o.startTime;if(d>s)break;var h=o.transferSize,y=o.initiatorType;h&&ir(y)&&(o=o.responseEnd,u+=h*(o<s?1:(s-d)/(o-d)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ou=null,_u=null;function Ei(e){return e.nodeType===9?e:e.ownerDocument}function cr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Mu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qc=null;function Jp(){var e=window.event;return e&&e.type==="popstate"?e===qc?!1:(qc=e,!0):(qc=null,!1)}var pm=typeof setTimeout=="function"?setTimeout:void 0,$p=typeof clearTimeout=="function"?clearTimeout:void 0,ur=typeof Promise=="function"?Promise:void 0,Wp=typeof queueMicrotask=="function"?queueMicrotask:typeof ur<"u"?function(e){return ur.resolve(null).then(e).catch(Fp)}:pm;function Fp(e){setTimeout(function(){throw e})}function dl(e){return e==="head"}function sr(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),ma(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")$a(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,$a(l);for(var i=l.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[pn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&$a(e.ownerDocument.body);l=n}while(l);ma(t)}function or(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function wu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":wu(l),Pu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Ip(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[pn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ct(e.nextSibling),e===null)break}return null}function Pp(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=ct(e.nextSibling),e===null))return null;return e}function ym(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ct(e.nextSibling),e===null))return null;return e}function Uu(e){return e.data==="$?"||e.data==="$~"}function Ru(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ey(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hu=null;function rr(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return ct(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function fr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function vm(e,t,l){switch(t=Ei(l),e){case"html":if(e=t.documentElement,!e)throw Error(S(452));return e;case"head":if(e=t.head,!e)throw Error(S(453));return e;case"body":if(e=t.body,!e)throw Error(S(454));return e;default:throw Error(S(451))}}function $a(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pu(e)}var ut=new Map,dr=new Set;function zi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gt=J.d;J.d={f:ty,r:ly,D:ay,C:ny,L:iy,m:cy,X:sy,S:uy,M:oy};function ty(){var e=Gt.f(),t=Wi();return e||t}function ly(e){var t=pa(e);t!==null&&t.tag===5&&t.type==="form"?fd(t):Gt.r(e)}var xa=typeof document>"u"?null:document;function bm(e,t,l){var a=xa;if(a&&typeof t=="string"&&t){var n=lt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),dr.has(n)||(dr.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),ze(t,"link",e),Se(t),a.head.appendChild(t)))}}function ay(e){Gt.D(e),bm("dns-prefetch",e,null)}function ny(e,t){Gt.C(e,t),bm("preconnect",e,t)}function iy(e,t,l){Gt.L(e,t,l);var a=xa;if(a&&e&&t){var n='link[rel="preload"][as="'+lt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+lt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+lt(l.imageSizes)+'"]')):n+='[href="'+lt(e)+'"]';var i=n;switch(t){case"style":i=da(e);break;case"script":i=Sa(e)}ut.has(i)||(e=ce({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),ut.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Nn(i))||t==="script"&&a.querySelector(jn(i))||(t=a.createElement("link"),ze(t,"link",e),Se(t),a.head.appendChild(t)))}}function cy(e,t){Gt.m(e,t);var l=xa;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+lt(a)+'"][href="'+lt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Sa(e)}if(!ut.has(i)&&(e=ce({rel:"modulepreload",href:e},t),ut.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(jn(i)))return}a=l.createElement("link"),ze(a,"link",e),Se(a),l.head.appendChild(a)}}}function uy(e,t,l){Gt.S(e,t,l);var a=xa;if(a&&e){var n=Wl(a).hoistableStyles,i=da(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=a.querySelector(Nn(i)))s.loading=5;else{e=ce({rel:"stylesheet",href:e,"data-precedence":t},l),(l=ut.get(i))&&Bs(e,l);var o=u=a.createElement("link");Se(o),ze(o,"link",e),o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,In(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function sy(e,t){Gt.X(e,t);var l=xa;if(l&&e){var a=Wl(l).hoistableScripts,n=Sa(e),i=a.get(n);i||(i=l.querySelector(jn(n)),i||(e=ce({src:e,async:!0},t),(t=ut.get(n))&&Ys(e,t),i=l.createElement("script"),Se(i),ze(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function oy(e,t){Gt.M(e,t);var l=xa;if(l&&e){var a=Wl(l).hoistableScripts,n=Sa(e),i=a.get(n);i||(i=l.querySelector(jn(n)),i||(e=ce({src:e,async:!0,type:"module"},t),(t=ut.get(n))&&Ys(e,t),i=l.createElement("script"),Se(i),ze(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function mr(e,t,l,a){var n=(n=It.current)?zi(n):null;if(!n)throw Error(S(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=da(l.href),l=Wl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=da(l.href);var i=Wl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Nn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),ut.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ut.set(e,l),i||ry(n,e,l,u.state))),t&&a===null)throw Error(S(528,""));return u}if(t&&a!==null)throw Error(S(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Sa(l),l=Wl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(S(444,e))}}function da(e){return'href="'+lt(e)+'"'}function Nn(e){return'link[rel="stylesheet"]['+e+"]"}function xm(e){return ce({},e,{"data-precedence":e.precedence,precedence:null})}function ry(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ze(t,"link",l),Se(t),e.head.appendChild(t))}function Sa(e){return'[src="'+lt(e)+'"]'}function jn(e){return"script[async]"+e}function gr(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+lt(l.href)+'"]');if(a)return t.instance=a,Se(a),a;var n=ce({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Se(a),ze(a,"style",n),In(a,l.precedence,e),t.instance=a;case"stylesheet":n=da(l.href);var i=e.querySelector(Nn(n));if(i)return t.state.loading|=4,t.instance=i,Se(i),i;a=xm(l),(n=ut.get(n))&&Bs(a,n),i=(e.ownerDocument||e).createElement("link"),Se(i);var u=i;return u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),ze(i,"link",a),t.state.loading|=4,In(i,l.precedence,e),t.instance=i;case"script":return i=Sa(l.src),(n=e.querySelector(jn(i)))?(t.instance=n,Se(n),n):(a=l,(n=ut.get(i))&&(a=ce({},l),Ys(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Se(n),ze(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(S(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,In(a,l.precedence,e));return t.instance}function In(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var s=a[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Bs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ys(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Pn=null;function hr(e,t,l){if(Pn===null){var a=new Map,n=Pn=new Map;n.set(l,a)}else n=Pn,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[pn]||i[Ae]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=a.get(u);s?s.push(i):a.set(u,[i])}}return a}function pr(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function fy(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Sm(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function dy(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var n=da(a.href),i=t.querySelector(Nn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ci.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Se(i);return}i=t.ownerDocument||t,a=xm(a),(n=ut.get(n))&&Bs(a,n),i=i.createElement("link"),Se(i);var u=i;u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),ze(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&!(l.state.loading&3)&&(e.count++,l=Ci.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Lc=0;function my(e,t){return e.stylesheets&&e.count===0&&ei(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&ei(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Lc===0&&(Lc=62500*Kp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ei(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Lc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ci(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ei(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Di=null;function ei(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Di=new Map,t.forEach(gy,e),Di=null,Ci.call(e))}function gy(e,t){if(!(t.state.loading&4)){var l=Di.get(e);if(l)var a=l.get(null);else{l=new Map,Di.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Ci.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var sn={$$typeof:Tt,Provider:null,Consumer:null,_currentValue:vl,_currentValue2:vl,_threadCount:0};function hy(e,t,l,a,n,i,u,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.hiddenUpdates=rc(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Nm(e,t,l,a,n,i,u,s,o,d,h,y){return e=new hy(e,t,l,u,o,d,h,y,s),t=1,i===!0&&(t|=24),i=Qe(3,null,null,t),e.current=i,i.stateNode=e,t=fs(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},gs(i),e}function jm(e){return e?(e=Vl,e):Vl}function Am(e,t,l,a,n,i){n=jm(n),a.context===null?a.context=n:a.pendingContext=n,a=el(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=tl(e,a,t),l!==null&&(Ye(l,e,t),La(l,e,t))}function yr(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function qs(e,t){yr(e,t),(e=e.alternate)&&yr(e,t)}function Tm(e){if(e.tag===13||e.tag===31){var t=_l(e,67108864);t!==null&&Ye(t,e,67108864),qs(e,67108864)}}function vr(e){if(e.tag===13||e.tag===31){var t=$e();t=Fu(t);var l=_l(e,t);l!==null&&Ye(l,e,t),qs(e,t)}}var Oi=!0;function py(e,t,l,a){var n=H.T;H.T=null;var i=J.p;try{J.p=2,Ls(e,t,l,a)}finally{J.p=i,H.T=n}}function yy(e,t,l,a){var n=H.T;H.T=null;var i=J.p;try{J.p=8,Ls(e,t,l,a)}finally{J.p=i,H.T=n}}function Ls(e,t,l,a){if(Oi){var n=Gu(a);if(n===null)Yc(e,t,a,_i,l),br(e,a);else if(by(n,e,t,l,a))a.stopPropagation();else if(br(e,a),t&4&&-1<vy.indexOf(e)){for(;n!==null;){var i=pa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=hl(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var o=1<<31-Je(u);s.entanglements[1]|=o,u&=~o}yt(i),!(K&6)&&(xi=Ve()+500,Sn(0))}}break;case 31:case 13:s=_l(i,2),s!==null&&Ye(s,i,2),Wi(),qs(i,2)}if(i=Gu(a),i===null&&Yc(e,t,a,_i,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Yc(e,t,a,null,l)}}function Gu(e){return e=ts(e),ks(e)}var _i=null;function ks(e){if(_i=null,e=ql(e),e!==null){var t=dn(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=Qr(t),e!==null)return e;e=null}else if(l===31){if(e=Zr(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _i=e,null}function Em(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ah()){case $r:return 2;case Wr:return 8;case ci:case nh:return 32;case Fr:return 268435456;default:return 32}default:return 32}}var Bu=!1,nl=null,il=null,cl=null,on=new Map,rn=new Map,Vt=[],vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function br(e,t){switch(e){case"focusin":case"focusout":nl=null;break;case"dragenter":case"dragleave":il=null;break;case"mouseover":case"mouseout":cl=null;break;case"pointerover":case"pointerout":on.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rn.delete(t.pointerId)}}function Oa(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=pa(t),t!==null&&Tm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function by(e,t,l,a,n){switch(t){case"focusin":return nl=Oa(nl,e,t,l,a,n),!0;case"dragenter":return il=Oa(il,e,t,l,a,n),!0;case"mouseover":return cl=Oa(cl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return on.set(i,Oa(on.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,rn.set(i,Oa(rn.get(i)||null,e,t,l,a,n)),!0}return!1}function zm(e){var t=ql(e.target);if(t!==null){var l=dn(t);if(l!==null){if(t=l.tag,t===13){if(t=Qr(l),t!==null){e.blockedOn=t,lo(e.priority,function(){vr(l)});return}}else if(t===31){if(t=Zr(l),t!==null){e.blockedOn=t,lo(e.priority,function(){vr(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Gu(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);lu=a,l.target.dispatchEvent(a),lu=null}else return t=pa(l),t!==null&&Tm(t),e.blockedOn=l,!1;t.shift()}return!0}function xr(e,t,l){ti(e)&&l.delete(t)}function xy(){Bu=!1,nl!==null&&ti(nl)&&(nl=null),il!==null&&ti(il)&&(il=null),cl!==null&&ti(cl)&&(cl=null),on.forEach(xr),rn.forEach(xr)}function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Bu||(Bu=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,xy)))}var Yn=null;function Sr(e){Yn!==e&&(Yn=e,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,function(){Yn===e&&(Yn=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(ks(a||l)===null)continue;break}var i=pa(l);i!==null&&(e.splice(t,3),t-=3,vu(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function ma(e){function t(o){return Bn(o,e)}nl!==null&&Bn(nl,e),il!==null&&Bn(il,e),cl!==null&&Bn(cl,e),on.forEach(t),rn.forEach(t);for(var l=0;l<Vt.length;l++){var a=Vt[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Vt.length&&(l=Vt[0],l.blockedOn===null);)zm(l),l.blockedOn===null&&Vt.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[qe]||null;if(typeof i=="function")u||Sr(l);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[qe]||null)s=u.formAction;else if(ks(n)!==null)continue}else s=u.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),Sr(l)}}}function Cm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Xs(e){this._internalRoot=e}Pi.prototype.render=Xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));var l=t.current,a=$e();Am(l,a,e,t,null,null)};Pi.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Am(e.current,2,null,e,null,null),Wi(),t[ha]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=lf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Vt.length&&t!==0&&t<Vt[l].priority;l++);Vt.splice(l,0,e),l===0&&zm(e)}};var Nr=kr.version;if(Nr!=="19.2.4")throw Error(S(527,Nr,"19.2.4"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Wg(t),e=e!==null?Vr(e):null,e=e===null?null:e.stateNode,e};var Sy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qn.isDisabled&&qn.supportsFiber)try{mn=qn.inject(Sy),Ke=qn}catch{}}Hi.createRoot=function(e,t){if(!Xr(e))throw Error(S(299));var l=!1,a="",n=bd,i=xd,u=Sd;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Nm(e,1,!1,null,null,l,a,null,n,i,u,Cm),e[ha]=t.current,Gs(e),new Xs(t)};Hi.hydrateRoot=function(e,t,l){if(!Xr(e))throw Error(S(299));var a=!1,n="",i=bd,u=xd,s=Sd,o=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),t=Nm(e,1,!0,t,l??null,a,n,o,i,u,s,Cm),t.context=jm(null),l=t.current,a=$e(),a=Fu(a),n=el(a),n.callback=null,tl(l,n,a),l=a,t.current.lanes=l,hn(t,l),yt(t),e[ha]=t.current,Gs(e),new Pi(t)};Hi.version="19.2.4";function Dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dm)}catch(e){console.error(e)}}Dm(),Hr.exports=Hi;var Ny=Hr.exports;const _t={ACTIONABLE_NOW:"Now",CANDIDATES:"Review",AMBIGUITY:"Clarify",WAITING:"Waiting",TUNING:"Tuning"},fn={CRITICAL:"Critical",HIGH:"High",MEDIUM:"Medium",LOW:"Low"},Mi={DATE_EXACT:"On Date",DATE_WINDOW:"Date Range",EMAIL_REPLY:"Email Reply",MANUAL_CHECK:"Manual Check",WEB_CONDITION:"Web Monitor"},jy="/api";async function M(e,t){const l=await fetch(`${jy}${e}`,{headers:{"Content-Type":"application/json",...t==null?void 0:t.headers},...t});if(!l.ok){const a=await l.json().catch(()=>({message:"Request failed"}));throw new Error(a.message||`HTTP ${l.status}`)}return l.json()}async function Om(){return M("/containers/counts")}async function Qs(e){const t=new URLSearchParams;e&&t.set("container",e);const l=t.toString();return M(`/actions${l?`?${l}`:""}`)}async function _m(e){return M(`/actions/${e}`)}async function Ay(e){return M("/actions",{method:"POST",body:JSON.stringify(e)})}async function Yu(e,t){return M(`/actions/${e}`,{method:"PUT",body:JSON.stringify(t)})}async function Mm(e){return M(`/actions/${e}/complete`,{method:"POST"})}async function li(e,t){return M(`/actions/${e}/move`,{method:"POST",body:JSON.stringify({container:t})})}async function Ty(e){await M(`/actions/${e}`,{method:"DELETE"})}async function wm(e){await M(`/actions/${e}/purge`,{method:"DELETE"})}async function Um(e){await M(`/actions/${e}/acknowledge`,{method:"POST"})}async function Zs(){return M("/system/health")}async function Rm(){return M("/system/run-followups",{method:"POST"})}async function Hm(){return M("/system/run-triggers",{method:"POST"})}async function Gm(e){return M("/parse/preview",{method:"POST",body:JSON.stringify({text:e})})}async function Bm(e){return M("/parse/confirm",{method:"POST",body:JSON.stringify(e)})}async function Ym(e,t){return M("/parse/clarify",{method:"POST",body:JSON.stringify({rawInput:e,answers:t})})}async function qm(e){return M(`/parse/${e}/reparse`,{method:"POST"})}async function Lm(){return M("/sources/gmail/status")}async function km(){return M("/sources/gmail/auth-url")}async function Xm(){await M("/sources/gmail/disconnect",{method:"POST"})}async function Qm(){return M("/sources/gmail/scan",{method:"POST"})}async function Zm(e){const t=new URLSearchParams;e!=null&&e.actionId&&t.set("actionId",e.actionId.toString()),e!=null&&e.pending&&t.set("pending","true");const l=t.toString();return M(`/triggers${l?`?${l}`:""}`)}async function Ey(e){return M(`/triggers/${e}`)}async function wi(e){return M("/triggers",{method:"POST",body:JSON.stringify(e)})}async function zy(e,t){return M(`/triggers/${e}`,{method:"PUT",body:JSON.stringify(t)})}async function Vm(e){await M(`/triggers/${e}`,{method:"DELETE"})}async function Km(e){return M(`/triggers/${e}/fire`,{method:"POST"})}async function Jm(e,t){return M(`/triggers/${e}/check`,{method:"POST",body:JSON.stringify({conditionMet:t})})}async function $m(e){const t=new URLSearchParams;e.q&&t.set("q",e.q),e.container&&t.set("container",e.container),e.urgency&&t.set("urgency",e.urgency),e.includeArchived&&t.set("includeArchived","true"),e.archiveOnly&&t.set("archiveOnly","true"),e.limit&&t.set("limit",e.limit.toString()),e.offset&&t.set("offset",e.offset.toString());const l=t.toString();return M(`/search${l?`?${l}`:""}`)}async function Cy(e){return M(`/search/suggestions?q=${encodeURIComponent(e)}`)}async function Wm(){return M("/groups")}async function Dy(e){return M(`/groups/${e}`)}async function qu(e){return M("/groups",{method:"POST",body:JSON.stringify(e)})}async function Oy(e,t){return M(`/groups/${e}`,{method:"PUT",body:JSON.stringify(t)})}async function Fm(e){return M(`/groups/${e}`,{method:"PUT",body:JSON.stringify({archivedAt:new Date().toISOString()})})}async function Im(e){await M(`/groups/${e}`,{method:"DELETE"})}async function Pm(e,t){return M(`/groups/${e}/actions`,{method:"POST",body:JSON.stringify({actionIds:t})})}async function Lu(e,t){await M(`/groups/${e}/actions/${t}`,{method:"DELETE"})}async function eg(){return M("/groups/suggest",{method:"POST"})}async function tg(e,t){return M("/groups/merge",{method:"POST",body:JSON.stringify({primaryId:e,secondaryId:t})})}async function lg(){return M("/tuning")}async function _y(){return M("/tuning/pending")}async function My(){return M("/tuning/shadow")}async function wy(e){return M(`/tuning/${e}`)}async function Uy(e){return M("/tuning",{method:"POST",body:JSON.stringify(e)})}async function Ry(e,t){return M(`/tuning/${e}`,{method:"PUT",body:JSON.stringify(t)})}async function ag(e){return M(`/tuning/${e}/activate`,{method:"POST"})}async function ng(e,t,l=!1){return M(`/tuning/${e}/reject`,{method:"POST",body:JSON.stringify({feedback:t,dontAskAgain:l})})}async function ig(e){return M(`/tuning/${e}/ask-less`,{method:"POST"})}async function cg(e){await M(`/tuning/${e}`,{method:"DELETE"})}async function ug(){return M("/tuning/stats")}async function sg(){return M("/notifications/vapid-public-key")}async function og(e,t,l){await M("/notifications/subscribe",{method:"POST",body:JSON.stringify({endpoint:e,p256dh:t,auth:l})})}async function rg(e){await M("/notifications/unsubscribe",{method:"DELETE",body:JSON.stringify({endpoint:e})})}async function fg(e,t,l){return M("/tuning/feedback",{method:"POST",body:JSON.stringify({actionId:e,feedbackType:t,correction:l})})}async function dg(){return M("/containers/flag-counts")}async function mg(e){return M(`/actions?${e}=true`)}async function gg(e){return M("/actions/bulk/complete",{method:"POST",body:JSON.stringify({ids:e})})}async function hg(e){return M("/actions/bulk/delete",{method:"POST",body:JSON.stringify({ids:e})})}async function pg(e,t){return M("/actions/bulk/move",{method:"POST",body:JSON.stringify({ids:e,container:t})})}const jr=Object.freeze(Object.defineProperty({__proto__:null,acknowledgeFollowUp:Um,activateTuningRule:ag,addActionsToGroup:Pm,archiveGroup:Fm,askLessOften:ig,bulkCompleteActions:gg,bulkDeleteActions:hg,bulkMoveActions:pg,checkTrigger:Jm,completeAction:Mm,createAction:Ay,createGroup:qu,createTrigger:wi,createTuningRule:Uy,deleteAction:Ty,deleteGroup:Im,deleteTrigger:Vm,deleteTuningRule:cg,disconnectGmail:Xm,fireTrigger:Km,getAction:_m,getActions:Qs,getActionsByFlag:mg,getContainerCounts:Om,getFlagCounts:dg,getGmailAuthUrl:km,getGmailStatus:Lm,getGroup:Dy,getGroupSuggestions:eg,getGroups:Wm,getPendingRules:_y,getSearchSuggestions:Cy,getShadowRules:My,getSystemHealth:Zs,getTrigger:Ey,getTriggers:Zm,getTuningRule:wy,getTuningRules:lg,getTuningStats:ug,getVapidPublicKey:sg,mergeActions:tg,moveAction:li,parseClarify:Ym,parseConfirm:Bm,parsePreview:Gm,purgeAction:wm,rejectTuningRule:ng,removeActionFromGroup:Lu,reparseAction:qm,runFollowUpCheck:Rm,runTriggerCheck:Hm,searchActions:$m,submitTuningFeedback:fg,subscribeToPush:og,triggerGmailScan:Qm,unsubscribeFromPush:rg,updateAction:Yu,updateGroup:Oy,updateTrigger:zy,updateTuningRule:Ry},Symbol.toStringTag,{value:"Module"}));let Ui=null;function ku(){return Ui?Ui():Promise.resolve()}function Hy({activeContainer:e,onContainerChange:t,onFlagFilter:l}){const[a,n]=N.useState({ACTIONABLE_NOW:0,CANDIDATES:0,AMBIGUITY:0,WAITING:0,TUNING:0}),[i,u]=N.useState({needsClarification:0,needsTuning:0}),s=N.useCallback(async()=>{try{const[h,y]=await Promise.all([Om(),dg()]);n(h),u(y)}catch(h){console.error("Failed to load counts:",h)}},[]);N.useEffect(()=>(Ui=s,s(),()=>{Ui=null}),[s]);function o(h){t(e===h?null:h)}function d(h,y){const m=e===h;return c.jsxs("button",{className:`grid-btn grid-btn--${y}${m?" selected":""}`,onClick:()=>o(h),children:[c.jsx("span",{className:"grid-btn-label",children:_t[h]}),c.jsx("span",{className:"grid-btn-badge",children:a[h]})]},h)}return c.jsxs("div",{className:"container-grid",children:[d("ACTIONABLE_NOW","now"),c.jsxs("div",{className:"grid-row",children:[d("CANDIDATES","review"),d("AMBIGUITY","clarify")]}),c.jsx("div",{className:"grid-row",children:d("WAITING","waiting")}),(i.needsClarification>0||i.needsTuning>0)&&c.jsxs("div",{className:"flag-badges",children:[i.needsClarification>0&&c.jsxs("button",{className:"flag-badge flag-badge--clarify",onClick:()=>l==null?void 0:l("needsClarification"),title:"Actions needing clarification",children:[c.jsx("span",{className:"flag-badge-icon",children:"?"}),c.jsx("span",{className:"flag-badge-label",children:"Clarify"}),c.jsx("span",{className:"flag-badge-count",children:i.needsClarification})]}),i.needsTuning>0&&c.jsxs("button",{className:"flag-badge flag-badge--tuning",onClick:()=>l==null?void 0:l("needsTuning"),title:"Actions flagged for tuning",children:[c.jsx("span",{className:"flag-badge-icon",children:"⚙"}),c.jsx("span",{className:"flag-badge-label",children:"Tuning"}),c.jsx("span",{className:"flag-badge-count",children:i.needsTuning})]})]})]})}function Gy({action:e,onClick:t,selectable:l,selected:a,onSelect:n}){var h;const i=e.urgency.toLowerCase();function u(){return e.confidence>=.8?"high":e.confidence>=.5?"medium":"low"}function s(){if(!e.dueDate)return null;const y=new Date(e.dueDate),m=new Date,g=Math.ceil((y.getTime()-m.getTime())/(1e3*60*60*24));return g<0?`${Math.abs(g)}d overdue`:g===0?"Today":g===1?"Tomorrow":g<7?`${g}d`:y.toLocaleDateString("en-US",{month:"short",day:"numeric"})}const o=e.container==="CANDIDATES",d=s();return c.jsxs("div",{className:"action-card",onClick:t,children:[l&&c.jsx("div",{className:"action-checkbox-wrapper",onClick:y=>y.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"action-checkbox",checked:!!a,onChange:()=>n==null?void 0:n(e.id)})}),c.jsx("div",{className:`action-urgency-bar ${i}`}),c.jsxs("div",{className:"action-content",children:[e.needsFollowUp&&c.jsx("div",{className:"action-followup-nudge",children:"Still important? Tap to review."}),c.jsx("div",{className:"action-description",children:e.description}),((h=e.source)==null?void 0:h.type)==="GMAIL"&&(e.source.emailFrom||e.source.emailSubject)&&c.jsxs("div",{className:"action-source-line",children:["From: ",e.source.emailFrom||"Unknown"," · ",e.source.emailSubject||"No subject"]}),e.suggestedAction&&c.jsx("div",{className:"action-suggested",children:e.suggestedAction}),c.jsxs("div",{className:"action-meta",children:[o&&c.jsx("span",{className:"badge badge-unconfirmed",children:"Unconfirmed"}),e.container==="WAITING"&&c.jsx("span",{className:"badge badge-waiting",children:"Waiting"}),e.needsClarification&&c.jsx("span",{className:"badge badge-clarify",children:"Clarify"}),e.needsTuning&&c.jsx("span",{className:"badge badge-tuning",children:"Tuning"}),d&&c.jsx("span",{className:"action-due",children:d}),c.jsxs("span",{className:"action-confidence",children:[c.jsx("span",{className:`confidence-dot ${u()}`}),Math.round(e.confidence*100),"%"]})]})]})]})}function By({onClose:e,onCreated:t}){const[l,a]=N.useState("input"),[n,i]=N.useState(""),[u,s]=N.useState(null),[o,d]=N.useState({}),[h,y]=N.useState(null);async function m(){if(!n.trim()){y("Please enter a description");return}a("parsing"),y(null);try{const f=await Gm(n.trim());s(f),f.container==="AMBIGUITY"&&f.questions.length>0?a("clarify"):a("preview")}catch(f){y("Failed to parse action"),a("input"),console.error(f)}}async function g(){if(u){a("parsing"),y(null);try{const f=await Ym(u.rawInput,o);s(f),f.container==="AMBIGUITY"&&f.questions.length>0?(d({}),a("clarify")):a("preview")}catch(f){y("Failed to clarify"),a("clarify"),console.error(f)}}}async function j(){if(u){a("parsing"),y(null);try{await Bm(u),t()}catch(f){y("Failed to save action"),a("preview"),console.error(f)}}}function z(f,r){u&&s({...u,[f]:r})}function _(){return u?u.confidence>=.8?"var(--success)":u.confidence>=.5?"var(--warning)":"var(--urgency-critical)":"var(--text-secondary)"}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content",onClick:f=>f.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsxs("h2",{className:"modal-title",children:[l==="input"&&"New Action",l==="parsing"&&"Analyzing...",l==="preview"&&"Review Action",l==="clarify"&&"Need More Info"]}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),l==="input"&&c.jsxs("div",{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What needs to be done?"}),c.jsx("textarea",{className:"form-textarea",value:n,onChange:f=>i(f.target.value),placeholder:"e.g., Call John about the project proposal by Friday",autoFocus:!0,rows:3}),c.jsx("p",{className:"form-hint",children:"Include details like who, what, when - AI will extract the action"})]}),h&&c.jsx("div",{className:"form-error",children:h}),c.jsx("button",{type:"button",className:"btn btn-primary btn-block",onClick:m,children:"Parse with AI"})]}),l==="parsing"&&c.jsxs("div",{className:"parsing-state",children:[c.jsx("div",{className:"parsing-spinner"}),c.jsx("p",{children:"Analyzing your input..."})]}),l==="preview"&&u&&c.jsxs("div",{children:[c.jsxs("div",{className:"preview-section",children:[c.jsxs("div",{className:"preview-confidence",style:{color:_()},children:[Math.round(u.confidence*100),"% confident"]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:u.description,onChange:f=>z("description",f.target.value),rows:2})]}),u.suggestedAction&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Suggested Next Step"}),c.jsx("input",{type:"text",className:"form-input",value:u.suggestedAction,onChange:f=>z("suggestedAction",f.target.value)})]}),c.jsxs("div",{className:"preview-meta",children:[c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Container"}),c.jsx("select",{className:"form-select form-select-small",value:u.container,onChange:f=>z("container",f.target.value),children:["ACTIONABLE_NOW","CANDIDATES","WAITING","AMBIGUITY"].map(f=>c.jsx("option",{value:f,children:_t[f]},f))})]}),c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Urgency"}),c.jsx("select",{className:"form-select form-select-small",value:u.urgency,onChange:f=>z("urgency",f.target.value),children:Object.entries(fn).map(([f,r])=>c.jsx("option",{value:f,children:r},f))})]}),u.dueDate&&c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Due"}),c.jsx("input",{type:"date",className:"form-input form-input-small",value:u.dueDate,onChange:f=>z("dueDate",f.target.value)})]})]}),u.parties.length>0&&c.jsxs("div",{className:"preview-parties",children:[c.jsx("span",{className:"preview-meta-label",children:"People:"}),u.parties.map((f,r)=>c.jsx("span",{className:"party-chip",children:f.name},r))]}),u.reasoning&&c.jsxs("div",{className:"preview-reasoning",children:[c.jsx("span",{className:"preview-meta-label",children:"AI Reasoning"}),c.jsx("p",{children:u.reasoning})]})]}),h&&c.jsx("div",{className:"form-error",children:h}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>a("input"),children:"Edit Input"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:j,children:"Save Action"})]})]}),l==="clarify"&&u&&c.jsxs("div",{children:[c.jsx("p",{className:"clarify-intro",children:"Please answer these questions to clarify your action:"}),u.questions.map((f,r)=>c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:f}),c.jsx("input",{type:"text",className:"form-input",value:o[f]||"",onChange:p=>d({...o,[f]:p.target.value}),placeholder:"Your answer..."})]},r)),h&&c.jsx("div",{className:"form-error",children:h}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>a("input"),children:"Start Over"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:g,disabled:Object.keys(o).length===0,children:"Submit Answers"})]})]}),c.jsx("style",{children:`
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
        `})]})})}const Yy="modulepreload",qy=function(e){return"/"+e},Ar={},Tr=function(t,l,a){let n=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),s=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));n=Promise.allSettled(l.map(o=>{if(o=qy(o),o in Ar)return;Ar[o]=!0;const d=o.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${h}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":Yy,d||(y.as="script"),y.crossOrigin="",y.href=o,s&&y.setAttribute("nonce",s),document.head.appendChild(y),d)return new Promise((m,g)=>{y.addEventListener("load",m),y.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})}))}function i(u){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=u,window.dispatchEvent(s),!s.defaultPrevented)throw u}return n.then(u=>{for(const s of u||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},Ly={CREATED:"Created",CONTAINER_CHANGE:"Moved",EDITED:"Edited",MERGED:"Merged",TRIGGER_FIRED:"Trigger fired",AI_REPARSED:"AI re-parsed",COMPLETED:"Completed",ARCHIVED:"Archived",FOLLOW_UP_SENT:"Follow-up sent"};function ky({events:e,aiReasoning:t}){function l(n){return new Date(n).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function a(n){const i=Ly[n.type];if(n.type==="CONTAINER_CHANGE"&&n.fromContainer&&n.toContainer)return`${i} from ${n.fromContainer} to ${n.toContainer}`;if(n.details)try{const u=JSON.parse(n.details);if(u.source)return`${i} via ${u.source}`;if(u.fields)return`${i}: ${u.fields.join(", ")}`}catch{}return i}return c.jsxs("div",{className:"info-panel",children:[t&&c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"AI Reasoning"}),c.jsx("p",{className:"info-reasoning",children:t})]}),c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"History"}),c.jsx("div",{className:"info-timeline",children:e.map(n=>c.jsxs("div",{className:"timeline-item",children:[c.jsx("span",{className:"timeline-time",children:l(n.createdAt)}),c.jsx("span",{className:"timeline-description",children:a(n)})]},n.id))})]}),c.jsx("style",{children:`
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
      `})]})}function Er({trigger:e,onUpdate:t}){const[l,a]=N.useState(!1);function n(h){return h?new Date(h).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""}function i(h){if(!h)return"";const y=new Date(h),m=new Date,g=Math.ceil((y.getTime()-m.getTime())/(1e3*60*60*24));return g<0?`${Math.abs(g)}d ago`:g===0?"Today":g===1?"Tomorrow":g<7?`In ${g}d`:n(h)}function u(){switch(e.type){case"DATE_EXACT":return i(e.triggerDate);case"DATE_WINDOW":return`${n(e.dateWindowStart)} - ${n(e.dateWindowEnd)}`;case"EMAIL_REPLY":return e.emailPattern||"Waiting for reply";case"MANUAL_CHECK":return e.eventDescription||"Check condition";case"WEB_CONDITION":return e.webQuery||"Monitoring web for condition";default:return""}}async function s(){if(confirm("Fire this trigger now? The action will move to Actionable Now.")){a(!0);try{await Km(e.id),t()}catch(h){console.error("Failed to fire trigger:",h),alert("Failed to fire trigger")}finally{a(!1)}}}async function o(h){a(!0);try{(await Jm(e.id,h)).fired&&alert("Condition met! Action moved to Actionable Now."),t()}catch(y){console.error("Failed to check trigger:",y),alert("Failed to check trigger")}finally{a(!1)}}async function d(){if(confirm("Delete this trigger?")){a(!0);try{await Vm(e.id),t()}catch(h){console.error("Failed to delete trigger:",h),alert("Failed to delete trigger")}finally{a(!1)}}}return e.isTriggered?c.jsxs("div",{className:"trigger-card fired",children:[c.jsx("div",{className:"trigger-icon",children:"✓"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:Mi[e.type]}),c.jsxs("div",{className:"trigger-info",children:["Fired ",i(e.triggeredAt)]})]})]}):c.jsxs("div",{className:"trigger-card",children:[c.jsx("div",{className:"trigger-icon",children:"⏳"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:Mi[e.type]}),c.jsx("div",{className:"trigger-info",children:u()}),e.description&&c.jsx("div",{className:"trigger-description",children:e.description}),e.type==="WEB_CONDITION"&&e.webCheckResult&&c.jsxs("div",{className:"trigger-description",children:["Last check: ",e.webCheckResult]}),e.type==="WEB_CONDITION"&&e.lastChecked&&c.jsxs("div",{className:"trigger-description",style:{opacity:.6},children:["Checked ",i(e.lastChecked)," · ",e.checkCount," checks"]})]}),c.jsxs("div",{className:"trigger-actions",children:[e.type==="MANUAL_CHECK"?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"trigger-btn check",onClick:()=>o(!0),disabled:l,title:"Condition met",children:"✓"}),c.jsx("button",{className:"trigger-btn skip",onClick:()=>o(!1),disabled:l,title:"Not yet",children:"↻"})]}):c.jsx("button",{className:"trigger-btn fire",onClick:s,disabled:l,title:"Fire now",children:"▶"}),c.jsx("button",{className:"trigger-btn delete",onClick:d,disabled:l,title:"Delete",children:"✕"})]}),c.jsx("style",{children:`
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
      `})]})}function Xy({actionId:e,onClose:t,onCreated:l}){const[a,n]=N.useState("DATE_EXACT"),[i,u]=N.useState(""),[s,o]=N.useState(""),[d,h]=N.useState(""),[y,m]=N.useState(""),[g,j]=N.useState(""),[z,_]=N.useState(!1),[f,r]=N.useState(null);async function p(T){if(T.preventDefault(),r(null),a==="DATE_EXACT"&&!s){r("Please select a date");return}if(a==="DATE_WINDOW"&&(!d||!y)){r("Please select both start and end dates");return}if(a==="MANUAL_CHECK"&&!g){r("Please describe what to check for");return}_(!0);try{await wi({actionId:e,type:a,description:i||void 0,triggerDate:a==="DATE_EXACT"?s:void 0,dateWindowStart:a==="DATE_WINDOW"?d:void 0,dateWindowEnd:a==="DATE_WINDOW"?y:void 0,eventDescription:a==="MANUAL_CHECK"?g:void 0}),l(),t()}catch(x){r("Failed to create trigger"),console.error(x)}finally{_(!1)}}const v=new Date;v.setDate(v.getDate()+1);const b=v.toISOString().split("T")[0];return c.jsx("div",{className:"trigger-modal-overlay",onClick:t,children:c.jsxs("div",{className:"trigger-modal",onClick:T=>T.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Add Trigger"}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]}),c.jsxs("form",{onSubmit:p,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Type"}),c.jsx("div",{className:"trigger-type-options",children:Object.keys(Mi).map(T=>c.jsx("button",{type:"button",className:`trigger-type-btn ${a===T?"active":""}`,onClick:()=>n(T),children:Mi[T]},T))})]}),a==="DATE_EXACT"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Date"}),c.jsx("input",{type:"date",className:"form-input",value:s,onChange:T=>o(T.target.value),min:b}),c.jsx("p",{className:"form-hint",children:"Action will move to Actionable Now on this date"})]}),a==="DATE_WINDOW"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Start Date"}),c.jsx("input",{type:"date",className:"form-input",value:d,onChange:T=>h(T.target.value),min:b})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"End Date"}),c.jsx("input",{type:"date",className:"form-input",value:y,onChange:T=>m(T.target.value),min:d||b})]}),c.jsx("p",{className:"form-hint",children:"Action will become active when start date is reached"})]}),a==="EMAIL_REPLY"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:T=>u(T.target.value),placeholder:"e.g., Waiting for reply from John"}),c.jsx("p",{className:"form-hint",children:"You'll be prompted to manually check for the reply"})]}),a==="MANUAL_CHECK"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What to check for"}),c.jsx("textarea",{className:"form-textarea",value:g,onChange:T=>j(T.target.value),placeholder:"e.g., 30% trade-in promotion period starts",rows:2}),c.jsx("p",{className:"form-hint",children:"You'll be prompted periodically to check if this condition is met"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Note (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:T=>u(T.target.value),placeholder:"Add a note about this trigger..."})]}),f&&c.jsx("div",{className:"form-error",children:f}),c.jsxs("div",{className:"trigger-modal-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:z,children:z?"Adding...":"Add Trigger"})]})]}),c.jsx("style",{children:`
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
        `})]})})}function Qy(e,t){const l=new Date;if(l.setHours(0,0,0,0),e==="YEARLY"){const a=new Date(t||l);return a.setFullYear(a.getFullYear()+1),a.toISOString().split("T")[0]}if(e.startsWith("YEARLY_")){const a=parseInt(e.split("_")[1])-1,n=new Date(l);n.setMonth(a);const i=t&&t.getMonth()===a?t.getDate():1;return n.setDate(i),n<=l&&(n.setFullYear(n.getFullYear()+1),n.setMonth(a),n.setDate(i)),n.toISOString().split("T")[0]}if(e==="MONTHLY"){const a=new Date(l);return a.setMonth(a.getMonth()+1),a.toISOString().split("T")[0]}if(e==="WEEKLY"){const a=new Date(l);return a.setDate(a.getDate()+7),a.toISOString().split("T")[0]}if(e==="EVERY_6_MONTHS"){const a=new Date(l);return a.setMonth(a.getMonth()+6),a.toISOString().split("T")[0]}if(e==="EVERY_90_DAYS"){const a=new Date(l);return a.setDate(a.getDate()+90),a.toISOString().split("T")[0]}return""}function yg({actionId:e,onClose:t,onUpdate:l}){var Vs,Ks;const[a,n]=N.useState(null),[i,u]=N.useState([]),[s,o]=N.useState(!0),[d,h]=N.useState(!1),[y,m]=N.useState(!1),[g,j]=N.useState(!1),[z,_]=N.useState(!1),[f,r]=N.useState(!1),[p,v]=N.useState(!1),[b,T]=N.useState(""),[x,C]=N.useState("MEDIUM"),[U,G]=N.useState(""),[se,le]=N.useState(!1),[Ce,ft]=N.useState(!1),[D,A]=N.useState(""),[w,R]=N.useState(!1),[q,V]=N.useState(null),[Oe,_e]=N.useState(""),[Bt,be]=N.useState(null),[E,L]=N.useState("");N.useEffect(()=>{if(p&&(a!=null&&a.recurrenceRule)){const O=Qy(a.recurrenceRule,a.dueDate?new Date(a.dueDate):null);O&&A(O)}},[p]),N.useEffect(()=>{P()},[e]);async function P(){try{const[O,De]=await Promise.all([_m(e),Zm({actionId:e})]);n(O),u(De),T(O.description),C(O.urgency),G(O.dueDate?O.dueDate.split("T")[0]:"")}catch(O){console.error("Failed to load action:",O)}finally{o(!1)}}async function Na(){if(a){le(!0);try{await Yu(a.id,{description:b,urgency:x,dueDate:U||null,version:a.version}),h(!1),P(),l()}catch(O){console.error("Failed to save:",O),alert("Failed to save changes")}finally{le(!1)}}}function An(){a&&(T(a.description),C(a.urgency),G(a.dueDate?a.dueDate.split("T")[0]:""),h(!1))}async function Yt(){if(a){ft(!0);try{await qm(a.id),h(!1),P(),l()}catch(O){console.error("Failed to reparse:",O),alert("Failed to re-parse action")}finally{ft(!1)}}}async function ec(O=!1){if(a){try{if(await Mm(a.id),O&&D){const{createAction:De}=await Tr(async()=>{const{createAction:Tg}=await Promise.resolve().then(()=>jr);return{createAction:Tg}},void 0),ja=await De({description:a.description,urgency:a.urgency,dueDate:D});await wi({actionId:ja.id,type:"DATE_EXACT",description:`Repeat of action #${a.id}`,triggerDate:D}),await li(ja.id,"WAITING")}l(),t()}catch(De){console.error("Failed to complete:",De)}v(!1),A("")}}async function vg(){if(a)try{await li(a.id,"ACTIONABLE_NOW"),P(),l()}catch(O){console.error("Failed to confirm:",O)}}function tc(){P(),l()}async function lc(O,De){if(a)try{await fg(a.id,O,De),_(!1),P(),l()}catch(ja){console.error("Failed to submit feedback:",ja)}}function bg(){V("defer"),_e(""),r(!1)}async function xg(){if(!(!a||!Oe))try{await wi({actionId:a.id,type:"DATE_EXACT",description:`Deferred until ${Oe}`,triggerDate:Oe}),V(null),_e(""),P(),l()}catch{alert("Failed to defer action")}}function Sg(){R(!0),r(!1)}async function Ng(O){if(a)try{await li(a.id,O),R(!1),P(),l()}catch{alert("Failed to reclassify action")}}async function jg(){if(a&&confirm(`Permanently delete "${a.description.substring(0,60)}"? This cannot be undone.`)){try{await wm(a.id),l(),t()}catch{alert("Failed to delete action")}r(!1)}}async function Ag(){if(!a)return;const O=prompt("Enter the ID of the action to merge this into:");if(!O)return;const De=parseInt(O);if(isNaN(De)){alert("Invalid ID");return}if(confirm(`Merge this action into action #${De}? This cannot be undone.`)){try{await tg(De,a.id),l(),t()}catch{alert("Failed to merge actions")}r(!1)}}if(s)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsx("div",{className:"modal-content",onClick:O=>O.stopPropagation(),children:c.jsx("p",{children:"Loading..."})})});if(!a)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content",onClick:O=>O.stopPropagation(),children:[c.jsx("p",{children:"Action not found"}),c.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Close"})]})});const ac=i.filter(O=>!O.isTriggered),nc=i.filter(O=>O.isTriggered);return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content action-view",onClick:O=>O.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:d?"Edit Action":"Action Details"}),c.jsxs("div",{className:"action-view-actions",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>m(!y),title:"View history",children:"i"}),c.jsxs("div",{className:"menu-wrapper",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>r(!f),title:"More options",children:"⋯"}),f&&c.jsxs("div",{className:"action-menu",children:[c.jsx("button",{className:"action-menu-item",onClick:bg,children:"Defer"}),c.jsx("button",{className:"action-menu-item",onClick:Sg,children:"Reclassify"}),c.jsx("button",{className:"action-menu-item",onClick:Ag,children:"Merge"}),c.jsx("button",{className:"action-menu-item",onClick:()=>{j(!0),r(!1)},children:"Add to Waiting"}),c.jsx("button",{className:"action-menu-item action-menu-item--danger",onClick:jg,children:"Delete"})]})]}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]})]}),d?c.jsxs("div",{className:"action-edit-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:b,onChange:O=>T(O.target.value)})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Urgency"}),c.jsx("select",{className:"form-select",value:x,onChange:O=>C(O.target.value),children:Object.entries(fn).map(([O,De])=>c.jsx("option",{value:O,children:De},O))})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Due Date"}),c.jsx("input",{type:"date",className:"form-input",value:U,onChange:O=>G(O.target.value)})]}),c.jsxs("div",{className:"action-edit-buttons",children:[c.jsx("button",{className:"btn btn-secondary",onClick:An,children:"Cancel"}),c.jsx("button",{className:"btn btn-secondary",onClick:Yt,disabled:Ce||se,children:Ce?"Parsing...":"Re-parse"}),c.jsx("button",{className:"btn btn-primary",onClick:Na,disabled:se||Ce,children:se?"Saving...":"Save"})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"action-detail-content",children:[c.jsx("div",{className:"action-detail-description",children:a.description}),c.jsx("div",{className:"action-detail-source",children:((Vs=a.source)==null?void 0:Vs.type)==="GMAIL"?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"From"}),c.jsx("span",{className:"detail-value",children:a.source.emailFrom||"Unknown"})]}),c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Subject"}),c.jsx("span",{className:"detail-value",children:a.source.emailSubject||"No subject"})]}),a.source.emailDate&&c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Date"}),c.jsx("span",{className:"detail-value",children:new Date(a.source.emailDate).toLocaleDateString()})]}),a.source.emailId&&c.jsx("div",{className:"source-row",children:c.jsx("a",{href:`https://mail.google.com/mail/u/0/#inbox/${a.source.emailId}`,target:"_blank",rel:"noopener noreferrer",className:"source-gmail-link",children:"View in Gmail"})})]}):((Ks=a.source)==null?void 0:Ks.type)==="SIRI"?c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Via Siri"})]}):c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Manually entered"})]})}),a.suggestedAction&&c.jsxs("div",{className:"action-detail-suggested",children:[c.jsx("span",{className:"detail-label",children:"Next step:"}),a.suggestedAction]}),c.jsxs("div",{className:"action-detail-meta",children:[c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Container"}),c.jsx("span",{className:"detail-value",children:_t[a.container]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Urgency"}),c.jsx("span",{className:`detail-value urgency-${a.urgency.toLowerCase()}`,children:fn[a.urgency]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Confidence"}),c.jsxs("span",{className:"detail-value",children:[Math.round(a.confidence*100),"%"]})]}),a.dueDate&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Due"}),c.jsx("span",{className:"detail-value",children:new Date(a.dueDate).toLocaleDateString()})]})]}),(a.container==="WAITING"||i.length>0)&&c.jsxs("div",{className:"triggers-section",children:[c.jsxs("div",{className:"triggers-header",children:[c.jsx("h3",{children:"Triggers"}),c.jsx("button",{className:"add-trigger-btn",onClick:()=>j(!0),children:"+ Add"})]}),ac.length===0&&nc.length===0?c.jsx("p",{className:"no-triggers",children:"No triggers set. Add one to defer this action."}):c.jsxs(c.Fragment,{children:[ac.map(O=>c.jsx(Er,{trigger:O,onUpdate:tc},O.id)),nc.length>0&&ac.length>0&&c.jsx("div",{className:"triggers-divider"}),nc.map(O=>c.jsx(Er,{trigger:O,onUpdate:tc},O.id))]})]})]}),y&&a.events&&c.jsx(ky,{events:a.events,aiReasoning:a.aiReasoning}),a.needsFollowUp&&c.jsxs("div",{className:"followup-nudge-section",children:[c.jsx("div",{className:"followup-nudge-title",children:"Still important?"}),c.jsx("div",{className:"followup-nudge-subtitle",children:"This action hasn't been touched in a while."}),c.jsxs("div",{className:"followup-nudge-buttons",children:[c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:async()=>{await Um(a.id),P(),l()},children:"Still relevant"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:()=>{V("reschedule"),_e("")},children:"Reschedule"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",style:{color:"var(--text-secondary)"},onClick:async()=>{if(!confirm("Archive this action?"))return;const{deleteAction:O}=await Tr(async()=>{const{deleteAction:De}=await Promise.resolve().then(()=>jr);return{deleteAction:De}},void 0);await O(a.id),l(),t()},children:"Archive"})]})]}),q&&c.jsxs("div",{className:"date-picker-inline",children:[c.jsx("span",{className:"date-picker-label",children:q==="defer"?"Defer until:":"Reschedule to:"}),c.jsx("input",{type:"date",className:"form-input",value:Oe,onChange:O=>_e(O.target.value),style:{padding:"8px 10px",fontSize:"13px",flex:1,minWidth:0}}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!Oe,onClick:async()=>{if(q==="defer")await xg();else if(q==="reschedule"&&a)try{await Yu(a.id,{dueDate:Oe,version:a.version}),V(null),_e(""),P(),l()}catch{alert("Failed to reschedule")}},children:"Confirm"}),c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{V(null),_e("")},children:"Cancel"})]}),c.jsxs("div",{className:"action-view-buttons",children:[a.container==="CANDIDATES"&&c.jsx("button",{className:"btn btn-primary",onClick:vg,children:"Move to Now"}),a.container!=="WAITING"&&c.jsx("button",{className:"btn btn-secondary",onClick:()=>j(!0),children:"Add Trigger"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>h(!0),children:"Edit"}),i.length>0&&!p?c.jsx("button",{className:"btn btn-success",onClick:()=>v(!0),children:"Complete"}):p?null:c.jsx("button",{className:"btn btn-success",onClick:()=>ec(),children:"Complete"}),p&&c.jsxs("div",{className:"repeat-prompt",children:[c.jsx("span",{className:"repeat-prompt-label",children:"Schedule next?"}),c.jsx("input",{type:"date",className:"form-input",value:D,onChange:O=>A(O.target.value),style:{padding:"8px 10px",fontSize:"13px",flex:1,minWidth:0}}),c.jsx("button",{className:"btn btn-secondary repeat-prompt-btn",onClick:()=>ec(!0),disabled:!D,children:"Schedule"}),c.jsx("button",{className:"btn btn-success repeat-prompt-btn",onClick:()=>ec(!1),children:"Done"})]})]}),c.jsx("button",{className:"feedback-btn",onClick:()=>_(!z),children:"AI parsed incorrectly?"}),z&&c.jsxs("div",{className:"feedback-panel",children:[c.jsx("p",{className:"feedback-title",children:"What was wrong?"}),c.jsxs("div",{className:"feedback-options",children:[Bt==="urgency"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct urgency:"}),c.jsxs("select",{className:"form-select feedback-picker-select",value:E,onChange:O=>L(O.target.value),children:[c.jsx("option",{value:"",children:"Select urgency..."}),c.jsx("option",{value:"CRITICAL",children:"Critical"}),c.jsx("option",{value:"HIGH",children:"High"}),c.jsx("option",{value:"MEDIUM",children:"Medium"}),c.jsx("option",{value:"LOW",children:"Low"})]}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{be(null),L("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!E,onClick:()=>{lc("urgency_incorrect",E),be(null),L("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{be("urgency"),L("")},children:"Wrong urgency level"}),Bt==="container"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct container:"}),c.jsxs("select",{className:"form-select feedback-picker-select",value:E,onChange:O=>L(O.target.value),children:[c.jsx("option",{value:"",children:"Select container..."}),c.jsx("option",{value:"ACTIONABLE_NOW",children:"Now"}),c.jsx("option",{value:"CANDIDATES",children:"Review"}),c.jsx("option",{value:"AMBIGUITY",children:"Clarify"}),c.jsx("option",{value:"WAITING",children:"Waiting"})]}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{be(null),L("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!E,onClick:()=>{lc("container_incorrect",E),be(null),L("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{be("container"),L("")},children:"Wrong container"}),c.jsx("button",{className:"feedback-option",onClick:()=>{const O=prompt("What should it say?");lc("parsed_wrong",O||void 0)},children:"Parsed text is wrong"})]})]}),w&&c.jsxs("div",{className:"reclassify-panel",children:[c.jsx("p",{className:"feedback-title",children:"Move to container:"}),c.jsx("div",{className:"reclassify-options",children:["ACTIONABLE_NOW","CANDIDATES","AMBIGUITY","WAITING"].map(O=>c.jsx("button",{className:`reclassify-option${a.container===O?" reclassify-option--current":""}`,disabled:a.container===O,onClick:()=>Ng(O),children:_t[O]},O))}),c.jsx("button",{className:"btn btn-secondary btn-block",style:{marginTop:8},onClick:()=>R(!1),children:"Cancel"})]})]}),g&&c.jsx(Xy,{actionId:e,onClose:()=>j(!1),onCreated:tc}),c.jsx("style",{children:`
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
          .repeat-prompt {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 2;
            flex-wrap: wrap;
          }
          .repeat-prompt-label {
            font-size: 13px;
            color: var(--text-secondary);
            white-space: nowrap;
          }
          .repeat-prompt-btn {
            padding: 10px 14px;
            font-size: 13px;
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
        `})]})})}const kc={needsClarification:"Needs Clarification",needsTuning:"Needs Tuning"},Zy=["ACTIONABLE_NOW","CANDIDATES","WAITING"];function Vy({activeContainer:e,flagFilter:t,onDataChange:l}){const[a,n]=N.useState([]),[i,u]=N.useState(!0),[s,o]=N.useState(!1),[d,h]=N.useState(null),[y,m]=N.useState(!1),[g,j]=N.useState(new Set),[z,_]=N.useState(!1),[f,r]=N.useState(!1);N.useEffect(()=>{p()},[e,t]);async function p(){u(!0);try{let D;t?D=await mg(t):D=await Qs(e),n(D),l==null||l()}catch(D){console.error("Failed to load actions:",D)}finally{u(!1)}}function v(){return t?kc[t]||t:e?_t[e]:"All Actions"}function b(){o(!1),p(),ku()}function T(){y?(m(!1),j(new Set),_(!1)):m(!0)}function x(D){j(A=>{const w=new Set(A);return w.has(D)?w.delete(D):w.add(D),w})}function C(){g.size===a.length?j(new Set):j(new Set(a.map(D=>D.id)))}async function U(){if(g.size!==0){r(!0);try{await gg(Array.from(g)),le()}catch(D){console.error("Bulk complete failed:",D)}finally{r(!1)}}}async function G(){if(g.size!==0){r(!0);try{await hg(Array.from(g)),le()}catch(D){console.error("Bulk delete failed:",D)}finally{r(!1)}}}async function se(D){if(g.size!==0){r(!0),_(!1);try{await pg(Array.from(g),D),le()}catch(A){console.error("Bulk move failed:",A)}finally{r(!1)}}}function le(){m(!1),j(new Set),_(!1),p(),ku()}if(i)return c.jsx("div",{className:"feed",children:c.jsx("div",{className:"feed-empty",children:"Loading..."})});const Ce=g.size,ft=a.length>0&&g.size===a.length;return c.jsxs("div",{className:"feed",children:[c.jsxs("div",{className:"feed-header",children:[c.jsx("h1",{className:"feed-title",children:v()}),a.length>0&&c.jsx("button",{className:"feed-select-toggle",onClick:T,children:y?"Cancel":"Select"})]}),y&&a.length>0&&c.jsx("div",{className:"feed-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:ft,onChange:C}),"Select All (",a.length,")"]})}),a.length===0?c.jsx("div",{className:"feed-empty",children:t?`No items ${kc[t]?"flagged as "+kc[t].toLowerCase():""}`:e?`No items in ${_t[e]}`:"No actions yet. Tap + to add one."}):a.map(D=>c.jsx(Gy,{action:D,selectable:y,selected:g.has(D.id),onSelect:x,onClick:()=>{y?x(D.id):h(D.id)}},D.id)),y&&Ce>0&&c.jsxs("div",{className:"bulk-toolbar",children:[c.jsxs("button",{className:"bulk-btn bulk-complete",onClick:U,disabled:f,children:["Complete (",Ce,")"]}),c.jsxs("button",{className:"bulk-btn bulk-delete",onClick:G,disabled:f,children:["Delete (",Ce,")"]}),c.jsxs("div",{className:"bulk-move-wrapper",children:[c.jsxs("button",{className:"bulk-btn bulk-move",onClick:()=>_(!z),disabled:f,children:["Move (",Ce,")"]}),z&&c.jsx("div",{className:"bulk-move-dropdown",children:Zy.map(D=>c.jsx("button",{className:"bulk-move-option",onClick:()=>se(D),children:_t[D]},D))})]})]}),c.jsx("button",{className:"quick-capture",onClick:()=>o(!0),children:"+"}),s&&c.jsx(By,{onClose:()=>o(!1),onCreated:b}),d&&c.jsx(yg,{actionId:d,onClose:()=>h(null),onUpdate:()=>{p(),h(null)}})]})}function Ky({onClose:e}){const[t,l]=N.useState(null),[a,n]=N.useState(null),[i,u]=N.useState(!0),[s,o]=N.useState(!1),[d,h]=N.useState(null),[y,m]=N.useState("default"),[g,j]=N.useState(!1),[z,_]=N.useState(!1),[f,r]=N.useState(null),[p,v]=N.useState(null);N.useEffect(()=>{b(),U()},[]);async function b(){u(!0);try{const[D,A]=await Promise.all([Zs(),Lm()]);l(D),n(A)}catch(D){console.error("Failed to load settings data:",D)}finally{u(!1)}}async function T(){try{const{url:D}=await km();window.location.href=D}catch(D){console.error("Failed to get auth URL:",D),alert("Failed to start Gmail connection")}}async function x(){if(confirm("Are you sure you want to disconnect Gmail?"))try{await Xm(),await b()}catch(D){console.error("Failed to disconnect Gmail:",D),alert("Failed to disconnect Gmail")}}async function C(){o(!0),h(null);try{const D=await Qm();h(D),await b()}catch(D){console.error("Scan failed:",D),h({success:!1,emailsScanned:0,actionsCreated:0,errors:["Scan failed"]})}finally{o(!1)}}async function U(){if(!("Notification"in window)||!("serviceWorker"in navigator)){m("unsupported");return}if(m(Notification.permission),Notification.permission==="granted"){const D=await navigator.serviceWorker.ready.catch(()=>null);if(D){const A=await D.pushManager.getSubscription();j(!!A)}}}async function G(){_(!0);try{const D=await Notification.requestPermission();if(m(D),D!=="granted")return;const{key:A}=await sg();if(!A){alert("Server not configured for push notifications");return}const q=(await(await navigator.serviceWorker.ready).pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:le(A)})).toJSON();await og(q.endpoint,q.keys.p256dh,q.keys.auth),j(!0)}catch(D){console.error("Failed to enable notifications:",D),alert("Failed to enable notifications")}finally{_(!1)}}async function se(){_(!0);try{const A=await(await navigator.serviceWorker.ready).pushManager.getSubscription();A&&(await rg(A.endpoint),await A.unsubscribe()),j(!1)}catch(D){console.error("Failed to disable notifications:",D)}finally{_(!1)}}function le(D){const A="=".repeat((4-D.length%4)%4),w=(D+A).replace(/-/g,"+").replace(/_/g,"/"),R=window.atob(w);return new Uint8Array([...R].map(V=>V.charCodeAt(0))).buffer}async function Ce(D,A){r(D),v(null);try{const w=await A();v({key:D,...w})}catch{v({key:D,success:!1,message:"Request failed"})}finally{r(null)}}function ft(D){if(!D)return"Never";const A=new Date(D),R=new Date().getTime()-A.getTime(),q=Math.floor(R/6e4),V=Math.floor(q/60),Oe=Math.floor(V/24);return q<1?"Just now":q<60?`${q}m ago`:V<24?`${V}h ago`:`${Oe}d ago`}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content settings-modal",onClick:D=>D.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Settings"}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),i?c.jsx("div",{className:"settings-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Gmail Integration"}),c.jsxs("div",{className:"settings-gmail",children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Status"}),c.jsx("span",{className:`gmail-status-value ${a!=null&&a.connected?"connected":"disconnected"}`,children:a!=null&&a.connected?"Connected":"Not Connected"})]}),a!=null&&a.connected?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Last Scan"}),c.jsx("span",{className:"gmail-status-value",children:ft(a.lastScan)})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Emails Scanned"}),c.jsx("span",{className:"gmail-status-value",children:a.itemsScanned})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Actions Created"}),c.jsx("span",{className:"gmail-status-value",children:a.actionsCreated})]}),a.lastError&&c.jsxs("div",{className:"gmail-error",children:[c.jsx("span",{className:"gmail-error-label",children:"Last Error"}),c.jsx("p",{children:a.lastError})]}),d&&c.jsx("div",{className:`scan-result ${d.success?"success":"error"}`,children:d.success?`Scanned ${d.emailsScanned} emails, created ${d.actionsCreated} actions`:`Scan failed: ${d.errors.join(", ")}`}),c.jsxs("div",{className:"gmail-buttons",children:[c.jsx("button",{className:"btn btn-primary",onClick:C,disabled:s,children:s?"Scanning...":"Scan Now"}),c.jsx("button",{className:"btn btn-secondary",onClick:x,children:"Disconnect"})]})]}):c.jsxs("div",{className:"gmail-connect",children:[c.jsx("p",{className:"gmail-connect-text",children:"Connect your Gmail to automatically scan for actionable emails."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:T,children:"Connect Gmail"})]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Push Notifications"}),c.jsx("div",{className:"settings-notifications",children:y==="unsupported"?c.jsx("p",{className:"notif-note",children:"Push notifications require installing this app and iOS 16.4+."}):y==="denied"?c.jsx("p",{className:"notif-note notif-denied",children:"Notifications blocked. Enable them in device Settings > Safari."}):g?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-status notif-enabled",children:"Notifications enabled"}),c.jsx("button",{className:"btn btn-secondary btn-block",onClick:se,disabled:z,children:z?"Disabling...":"Disable Notifications"})]}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-note",children:"Get notified when triggers fire or actions need attention."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:G,disabled:z,children:z?"Enabling...":"Enable Notifications"})]})})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"System Health"}),c.jsxs("div",{className:"settings-health",children:[c.jsxs("div",{className:"health-row",children:[c.jsx("span",{className:"health-label",children:"Overall Status"}),c.jsx("span",{className:`health-value ${t==null?void 0:t.status}`,children:(t==null?void 0:t.status)==="ok"?"All Systems OK":"Issues Detected"})]}),(t==null?void 0:t.errors)&&t.errors.length>0&&c.jsxs("div",{className:"health-errors",children:[c.jsx("span",{className:"health-errors-label",children:"Errors"}),t.errors.map((D,A)=>c.jsx("p",{className:"health-error",children:D},A))]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Scan Schedule"}),c.jsxs("div",{className:"settings-schedule",children:[c.jsx("p",{children:"Automatic Gmail scans run every 4 hours."}),c.jsx("p",{className:"schedule-note",children:"Trigger checks run hourly. Web conditions checked every 4 hours per trigger. Follow-up reminders sent daily at 9 AM."})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Testing Tools"}),c.jsxs("div",{className:"settings-tools",children:[c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Check for stale actions"}),c.jsx("div",{className:"tool-desc",children:`Looks at all your active actions and flags ones you haven't touched in a while with a "Still important?" prompt. Normally happens automatically every morning at 9 AM.`})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>Ce("followups",Rm),disabled:f!==null,children:f==="followups"?"Running…":"Run now"})]}),c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Fire due triggers & check web conditions"}),c.jsx("div",{className:"tool-desc",children:"Two things in one: (1) promotes any Waiting actions whose due date has arrived into your active list, and (2) searches the web to see if any real-world conditions you're watching — like a store sale or product launch — have come true. Normally runs every hour / every 4 hours."})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>Ce("triggers",Hm),disabled:f!==null,children:f==="triggers"?"Running…":"Run now"})]}),p&&c.jsxs("div",{className:`tool-result ${p.success?"success":"error"}`,children:[p.success?"✓":"✗"," ",p.message]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"About"}),c.jsxs("p",{className:"settings-about",children:["Action Manager v1.0",c.jsx("br",{}),"Your personal commitment tracker"]})]})]}),c.jsx("style",{children:`
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
        `})]})})}function Jy({onClose:e,onSelectAction:t}){const[l,a]=N.useState(""),[n,i]=N.useState([]),[u,s]=N.useState(0),[o,d]=N.useState(!1),[h,y]=N.useState(!1),[m,g]=N.useState(""),[j,z]=N.useState(""),[_,f]=N.useState(!1),[r,p]=N.useState(!1),v=N.useCallback(async(x=!0)=>{d(!0);try{const C=await $m({q:l||void 0,container:m||void 0,urgency:j||void 0,includeArchived:_,archiveOnly:r,limit:20,offset:x?0:n.length});i(x?C.actions:U=>[...U,...C.actions]),s(C.total),y(C.hasMore)}catch(C){console.error("Search failed:",C)}finally{d(!1)}},[l,m,j,_,r,n.length]);N.useEffect(()=>{const x=setTimeout(()=>{v(!0)},300);return()=>clearTimeout(x)},[l,m,j,_,r]);function b(x){return x?new Date(x).toLocaleDateString("en-US",{month:"short",day:"numeric"}):""}function T(){v(!1)}return c.jsxs("div",{className:"search-overlay",children:[c.jsxs("div",{className:"search-container",children:[c.jsxs("div",{className:"search-header",children:[c.jsxs("div",{className:"search-input-wrapper",children:[c.jsx("span",{className:"search-icon",children:"🔍"}),c.jsx("input",{type:"text",className:"search-input",placeholder:"Search actions...",value:l,onChange:x=>a(x.target.value),autoFocus:!0}),l&&c.jsx("button",{className:"search-clear",onClick:()=>a(""),children:"✕"})]}),c.jsx("button",{className:"search-close",onClick:e,children:"Cancel"})]}),c.jsxs("div",{className:"search-filters",children:[c.jsxs("select",{className:"search-filter",value:m,onChange:x=>g(x.target.value),children:[c.jsx("option",{value:"",children:"All Containers"}),Object.entries(_t).map(([x,C])=>c.jsx("option",{value:x,children:C},x))]}),c.jsxs("select",{className:"search-filter",value:j,onChange:x=>z(x.target.value),children:[c.jsx("option",{value:"",children:"All Urgency"}),Object.entries(fn).map(([x,C])=>c.jsx("option",{value:x,children:C},x))]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:_,onChange:x=>{f(x.target.checked),x.target.checked&&p(!1)}}),"Include archived"]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:r,onChange:x=>{p(x.target.checked),x.target.checked&&f(!1)}}),"Archive only"]})]}),c.jsx("div",{className:"search-results",children:o&&n.length===0?c.jsx("div",{className:"search-loading",children:"Searching..."}):n.length===0?c.jsx("div",{className:"search-empty",children:l?"No actions found":"Start typing to search"}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"search-count",children:[u," result",u!==1?"s":""]}),n.map(x=>c.jsxs("div",{className:`search-result ${x.isArchived?"archived":""}`,onClick:()=>t(x.id),children:[c.jsx("div",{className:`result-urgency ${x.urgency.toLowerCase()}`}),c.jsxs("div",{className:"result-content",children:[c.jsx("div",{className:"result-description",children:x.description}),c.jsxs("div",{className:"result-meta",children:[c.jsx("span",{className:"result-container",children:_t[x.container]}),x.dueDate&&c.jsxs("span",{className:"result-date",children:["Due ",b(x.dueDate)]}),x.isArchived&&c.jsx("span",{className:"result-archived",children:"Archived"})]})]})]},x.id)),h&&c.jsx("button",{className:"search-load-more",onClick:T,disabled:o,children:o?"Loading...":"Load more"})]})})]}),c.jsx("style",{children:`
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
      `})]})}function $y({onClose:e,onSelectAction:t}){const[l,a]=N.useState([]),[n,i]=N.useState([]),[u,s]=N.useState(!0),[o,d]=N.useState(!1),[h,y]=N.useState(""),[m,g]=N.useState(""),[j,z]=N.useState(!1),[_,f]=N.useState(null),[r,p]=N.useState(""),[v,b]=N.useState([]),[T,x]=N.useState(new Set),[C,U]=N.useState(new Set),[G,se]=N.useState(!1);N.useEffect(()=>{le()},[]);async function le(){s(!0);try{const[E,L]=await Promise.all([Wm(),eg()]);a(E),i(L.suggestions)}catch(E){console.error("Failed to load groups:",E)}finally{s(!1)}}async function Ce(){if(h.trim())try{await qu({name:h.trim(),description:m.trim()||void 0}),y(""),g(""),d(!1),le()}catch(E){console.error("Failed to create group:",E)}}async function ft(E){try{await qu({name:E.suggestedName,description:E.reason,actionIds:E.actionIds}),le()}catch(L){console.error("Failed to create group from suggestion:",L)}}async function D(E){if(confirm("Delete this group? Actions will be ungrouped."))try{await Im(E),le()}catch(L){console.error("Failed to delete group:",L)}}async function A(E){f(E),p(""),se(!0);try{const P=(await Qs()).filter(Yt=>!Yt.archivedAt&&!Yt.completedAt);b(P);const Na=l.find(Yt=>Yt.id===E),An=new Set((Na==null?void 0:Na.actions.map(Yt=>Yt.id))||[]);x(new Set(An)),U(new Set(An))}catch(L){console.error("Failed to load actions:",L)}finally{se(!1)}}async function w(){if(_!==null)try{const E=[...T].filter(P=>!C.has(P)),L=[...C].filter(P=>!T.has(P));E.length>0&&await Pm(_,E);for(const P of L)await Lu(_,P);f(null),le()}catch(E){console.error("Failed to update group actions:",E)}}function R(E){x(L=>{const P=new Set(L);return P.has(E)?P.delete(E):P.add(E),P})}const q=N.useMemo(()=>{if(!r.trim())return v;const E=r.toLowerCase();return v.filter(L=>L.description.toLowerCase().includes(E))},[v,r]);async function V(E,L){try{await Lu(E,L),le()}catch(P){console.error("Failed to remove action from group:",P)}}async function Oe(E){try{await Fm(E),le()}catch(L){console.error("Failed to archive group:",L)}}function _e(E){return E.actions.filter(L=>L.completedAt!==null).length}function Bt(E){return E.actions.length>0&&_e(E)===E.actions.length}function be(E){return E.toLowerCase()}return c.jsxs("div",{className:"groups-overlay",children:[c.jsxs("div",{className:"groups-container",children:[c.jsxs("div",{className:"groups-header",children:[c.jsx("h2",{className:"groups-title",children:"Action Groups"}),c.jsxs("div",{className:"groups-header-actions",children:[c.jsx("button",{className:"btn btn-primary btn-small",onClick:()=>d(!0),children:"+ New Group"}),c.jsx("button",{className:"groups-close",onClick:e,children:"Done"})]})]}),c.jsx("div",{className:"groups-content",children:u?c.jsx("div",{className:"groups-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:"groups-section",children:[c.jsx("h3",{className:"section-title",children:"Your Groups"}),l.length===0?c.jsx("div",{className:"groups-empty",children:"No groups yet. Create one or accept a suggestion below."}):l.map(E=>c.jsxs("div",{className:"group-card",children:[Bt(E)&&c.jsxs("div",{className:"group-archive-banner",children:[c.jsx("span",{children:"All actions complete! Archive this group?"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>Oe(E.id),children:"Archive"})]}),c.jsxs("div",{className:"group-header",children:[c.jsxs("div",{className:"group-info",children:[c.jsx("div",{className:"group-name",children:E.name}),E.description&&c.jsx("div",{className:"group-description",children:E.description})]}),c.jsxs("div",{className:"group-stats",children:[c.jsx("span",{className:`urgency-badge ${be(E.highestUrgency)}`,children:fn[E.highestUrgency]}),c.jsxs("span",{className:"group-count",children:[E.activeCount,"/",E.actionCount," active"]})]})]}),c.jsxs("div",{className:"group-progress",children:[c.jsxs("div",{className:"progress-text",children:[_e(E)," of ",E.actions.length," complete"]}),c.jsx("div",{className:"progress-bar-track",children:c.jsx("div",{className:"progress-bar-fill",style:{width:E.actions.length>0?`${_e(E)/E.actions.length*100}%`:"0%"}})})]}),c.jsxs("div",{className:"group-actions-list",children:[E.actions.slice(0,3).map(L=>c.jsxs("div",{className:`group-action-item ${L.completedAt?"completed":""}`,children:[c.jsxs("div",{className:"group-action-clickable",onClick:()=>t(L.id),children:[c.jsx("div",{className:`action-urgency-dot ${be(L.urgency)}`}),c.jsx("span",{className:"action-text",children:L.description})]}),c.jsx("button",{className:"action-remove-btn",onClick:P=>{P.stopPropagation(),V(E.id,L.id)},title:"Remove from group",children:"×"})]},L.id)),E.actions.length>3&&c.jsxs("div",{className:"group-more",children:["+",E.actions.length-3," more"]})]}),c.jsxs("div",{className:"group-footer",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>A(E.id),children:"Add Actions"}),c.jsx("button",{className:"btn-link",onClick:()=>D(E.id),children:"Delete Group"})]})]},E.id))]}),n.length>0&&c.jsxs("section",{className:"groups-section suggestions-section",children:[c.jsxs("button",{className:"suggestions-toggle",onClick:()=>z(!j),children:[c.jsxs("h3",{className:"section-title",style:{margin:0},children:["Suggested Groups (",n.length,")"]}),c.jsx("span",{className:"toggle-arrow",children:j?"▲":"▼"})]}),j&&c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"section-subtitle",children:"Based on similar keywords in your ungrouped actions"}),n.map((E,L)=>c.jsxs("div",{className:"suggestion-card",children:[c.jsxs("div",{className:"suggestion-content",children:[c.jsx("div",{className:"suggestion-name",children:E.suggestedName}),c.jsx("div",{className:"suggestion-reason",children:E.reason}),c.jsxs("div",{className:"suggestion-count",children:[E.actionIds.length," actions"]})]}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>ft(E),children:"Create"})]},L))]})]})]})})]}),o&&c.jsx("div",{className:"modal-overlay",onClick:()=>d(!1),children:c.jsxs("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Create Group"}),c.jsx("button",{className:"modal-close",onClick:()=>d(!1),children:"×"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Group Name"}),c.jsx("input",{type:"text",className:"form-input",value:h,onChange:E=>y(E.target.value),placeholder:"e.g., Project Alpha",autoFocus:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("textarea",{className:"form-textarea",value:m,onChange:E=>g(E.target.value),placeholder:"What is this group about?",rows:2})]}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:Ce,disabled:!h.trim(),children:"Create Group"})]})}),_!==null&&c.jsx("div",{className:"modal-overlay",onClick:()=>f(null),children:c.jsxs("div",{className:"modal-content add-actions-modal",onClick:E=>E.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Add Actions to Group"}),c.jsx("button",{className:"modal-close",onClick:()=>f(null),children:"×"})]}),c.jsx("div",{className:"form-group",children:c.jsx("input",{type:"text",className:"form-input",value:r,onChange:E=>p(E.target.value),placeholder:"Search actions...",autoFocus:!0})}),c.jsx("div",{className:"add-actions-list",children:G?c.jsx("div",{className:"groups-loading",children:"Loading actions..."}):q.length===0?c.jsx("div",{className:"groups-empty",children:"No matching actions found."}):q.map(E=>c.jsxs("label",{className:"add-action-row",children:[c.jsx("input",{type:"checkbox",checked:T.has(E.id),onChange:()=>R(E.id)}),c.jsx("div",{className:`action-urgency-dot ${be(E.urgency)}`}),c.jsx("span",{className:"action-text",children:E.description})]},E.id))}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:w,children:"Save"})]})}),c.jsx("style",{children:`
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
      `})]})}function Wy({onClose:e}){const[t,l]=N.useState([]),[a,n]=N.useState(null),[i,u]=N.useState(!0),[s,o]=N.useState("proposed"),[d,h]=N.useState(null),[y,m]=N.useState(null);N.useEffect(()=>{g()},[]);async function g(){u(!0);try{const[b,T]=await Promise.all([lg(),ug()]);l(b),n(T)}catch(b){console.error("Failed to load tuning data:",b)}finally{u(!1)}}async function j(b){try{await ag(b),g()}catch(T){console.error("Failed to activate rule:",T)}}async function z(b,T=!1){const x=T?void 0:prompt("Why are you rejecting this rule? (optional)")||void 0;try{await ng(b,x,T),h(null),g()}catch(C){console.error("Failed to reject rule:",C)}}async function _(b){try{await ig(b),g()}catch(T){console.error("Failed to update threshold:",T)}}async function f(b){if(confirm("Delete this tuning rule?"))try{await cg(b),g()}catch(T){console.error("Failed to delete rule:",T)}}const r=t.filter(b=>{switch(s){case"proposed":return b.status==="PROPOSED";case"shadow":return b.status==="SHADOW";case"active":return b.status==="ACTIVE";case"rejected":return b.status==="REJECTED"}});function p(b){switch(b){case"SHADOW":return"Testing";case"PROPOSED":return"Ready";case"ACTIVE":return"Active";case"REJECTED":return"Rejected";default:return b}}function v(b){return b.shadowCount===0?0:Math.round(b.shadowSuccesses/b.shadowCount*100)}return c.jsxs("div",{className:"tuning-overlay",children:[c.jsxs("div",{className:"tuning-container",children:[c.jsxs("div",{className:"tuning-header",children:[c.jsx("h2",{className:"tuning-title",children:"AI Tuning"}),c.jsx("button",{className:"tuning-close",onClick:e,children:"Done"})]}),a&&c.jsxs("div",{className:"tuning-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:a.counts.active}),c.jsx("span",{className:"stat-label",children:"Active Rules"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:a.counts.proposed}),c.jsx("span",{className:"stat-label",children:"Pending Review"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:a.counts.shadow}),c.jsx("span",{className:"stat-label",children:"Testing"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsxs("span",{className:"stat-value",children:[a.avgSuccessRate,"%"]}),c.jsx("span",{className:"stat-label",children:"Avg Success"})]})]}),c.jsxs("div",{className:"tuning-tabs",children:[c.jsxs("button",{className:`tuning-tab ${s==="proposed"?"active":""}`,onClick:()=>o("proposed"),children:["Pending ",a&&a.counts.proposed>0&&`(${a.counts.proposed})`]}),c.jsx("button",{className:`tuning-tab ${s==="shadow"?"active":""}`,onClick:()=>o("shadow"),children:"Testing"}),c.jsx("button",{className:`tuning-tab ${s==="active"?"active":""}`,onClick:()=>o("active"),children:"Active"}),c.jsx("button",{className:`tuning-tab ${s==="rejected"?"active":""}`,onClick:()=>o("rejected"),children:"Rejected"})]}),c.jsx("div",{className:"tuning-content",children:i?c.jsx("div",{className:"tuning-loading",children:"Loading..."}):r.length===0?c.jsx("div",{className:"tuning-empty",children:t.length===0?c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"No tuning rules yet."}),c.jsx("p",{className:"tuning-hint",children:"Tuning rules help the AI learn from your corrections. When you correct an action's urgency or container, the system creates rules to improve future parsing."})]}):c.jsxs(c.Fragment,{children:[s==="proposed"&&"No rules ready for review.",s==="shadow"&&"No rules currently testing.",s==="active"&&"No active tuning rules.",s==="rejected"&&"No rejected rules.",c.jsx("p",{className:"tuning-hint",children:"Tuning rules are created when you provide feedback on AI-parsed actions."})]})}):r.map(b=>{const T=y===b.id;return c.jsxs("div",{className:`rule-card ${T?"rule-card-expanded":""}`,children:[c.jsxs("div",{className:"rule-collapsed",onClick:()=>m(T?null:b.id),children:[c.jsxs("div",{className:"rule-collapsed-top",children:[c.jsx("span",{className:`rule-category category-${b.category}`,children:b.category}),c.jsx("span",{className:`rule-status status-${b.status.toLowerCase()}`,children:p(b.status)}),c.jsx("span",{className:"rule-expand-icon",children:T?"▲":"▼"})]}),c.jsx("div",{className:"rule-description-collapsed",children:T?b.description:b.description.length>60?b.description.slice(0,60)+"...":b.description}),!T&&(b.status==="SHADOW"||b.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(b.shadowCount/b.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[b.shadowCount,"/",b.shadowThreshold," tests (",v(b),"% success)"]})]})]}),T&&c.jsxs("div",{className:"rule-expanded-body",children:[c.jsxs("div",{className:"rule-details",children:[c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"When:"}),c.jsx("span",{className:"detail-text",children:b.condition})]}),c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"Then:"}),c.jsx("span",{className:"detail-text",children:b.transformation})]})]}),(b.status==="SHADOW"||b.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(b.shadowCount/b.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[b.shadowCount,"/",b.shadowThreshold," tests (",v(b),"% success)"]})]}),b.userFeedback&&c.jsxs("div",{className:"rule-feedback",children:[c.jsx("span",{className:"detail-label",children:"Feedback:"}),b.userFeedback]}),c.jsxs("div",{className:"rule-actions",children:[b.status==="PROPOSED"&&d!==b.id&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-success btn-small",onClick:x=>{x.stopPropagation(),j(b.id)},children:"Activate"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:x=>{x.stopPropagation(),h(b.id)},children:"Reject"})]}),b.status==="PROPOSED"&&d===b.id&&c.jsxs("div",{className:"reject-options",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:x=>{x.stopPropagation(),z(b.id,!1)},children:"Just reject"}),c.jsxs("button",{className:"btn btn-secondary btn-small reject-stop",onClick:x=>{x.stopPropagation(),z(b.id,!0)},children:["Stop ",b.category," suggestions"]}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:x=>{x.stopPropagation(),_(b.id),h(null)},children:"Ask less often"}),c.jsx("button",{className:"btn-link",onClick:x=>{x.stopPropagation(),h(null)},children:"Cancel"})]}),b.status==="SHADOW"&&c.jsx("button",{className:"btn btn-primary btn-small",onClick:x=>{x.stopPropagation(),j(b.id)},children:"Activate Early"}),c.jsx("button",{className:"btn-link danger",onClick:x=>{x.stopPropagation(),f(b.id)},children:"Delete"})]})]})]},b.id)})})]}),c.jsx("style",{children:`
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
      `})]})}function Fy(){const[e,t]=N.useState("ACTIONABLE_NOW"),[l,a]=N.useState(void 0),[n,i]=N.useState(!1),[u,s]=N.useState(!1),[o,d]=N.useState(!1),[h,y]=N.useState(!1),[m,g]=N.useState(null),[j,z]=N.useState(0),[_,f]=N.useState(null);N.useEffect(()=>{r();const C=setInterval(r,5*60*1e3);return()=>clearInterval(C)},[]);async function r(){try{const C=await Zs();f(C)}catch{}}const p=_&&_.errors.length>0;function v(){z(C=>C+1),ku()}function b(C){s(!1),g(C)}function T(C){C==="TUNING"?y(!0):(a(void 0),t(C))}function x(C){t(null),a(C)}return c.jsxs("div",{className:"app",children:[c.jsxs("header",{className:"app-header",children:[c.jsx("button",{className:"search-btn",onClick:()=>s(!0),title:"Search",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("path",{d:"M21 21l-4.35-4.35"})]})}),c.jsx("button",{className:"search-btn",onClick:()=>d(!0),title:"Groups",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]})}),c.jsx("button",{className:`settings-btn ${p?"has-errors":""}`,onClick:()=>i(!0),title:"Settings",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),p&&c.jsx("div",{className:"error-banner",onClick:()=>i(!0),children:"⚠ System issue detected — tap to view in Settings"}),c.jsxs("main",{className:"main-content",children:[c.jsx(Hy,{activeContainer:e,onContainerChange:T,onFlagFilter:x}),c.jsx(Vy,{activeContainer:e,flagFilter:l},j)]}),n&&c.jsx(Ky,{onClose:()=>i(!1)}),u&&c.jsx(Jy,{onClose:()=>s(!1),onSelectAction:b}),o&&c.jsx($y,{onClose:()=>d(!1),onSelectAction:C=>{d(!1),g(C)}}),h&&c.jsx(Wy,{onClose:()=>y(!1)}),m&&c.jsx(yg,{actionId:m,onClose:()=>g(null),onUpdate:()=>{v(),g(null)}})]})}Ny.createRoot(document.getElementById("root")).render(c.jsx(N.StrictMode,{children:c.jsx(Fy,{})}));
