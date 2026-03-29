(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();var Mo={exports:{}},Xi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm=Symbol.for("react.transitional.element"),eg=Symbol.for("react.fragment");function _o(e,t,a){var l=null;if(a!==void 0&&(l=""+a),t.key!==void 0&&(l=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:Pm,type:e,key:l,ref:t!==void 0?t:null,props:a}}Xi.Fragment=eg;Xi.jsx=_o;Xi.jsxs=_o;Mo.exports=Xi;var c=Mo.exports,wo={exports:{}},k={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju=Symbol.for("react.transitional.element"),tg=Symbol.for("react.portal"),ag=Symbol.for("react.fragment"),lg=Symbol.for("react.strict_mode"),ng=Symbol.for("react.profiler"),ig=Symbol.for("react.consumer"),cg=Symbol.for("react.context"),ug=Symbol.for("react.forward_ref"),sg=Symbol.for("react.suspense"),rg=Symbol.for("react.memo"),Ro=Symbol.for("react.lazy"),og=Symbol.for("react.activity"),Is=Symbol.iterator;function fg(e){return e===null||typeof e!="object"?null:(e=Is&&e[Is]||e["@@iterator"],typeof e=="function"?e:null)}var Uo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ho=Object.assign,Go={};function Al(e,t,a){this.props=e,this.context=t,this.refs=Go,this.updater=a||Uo}Al.prototype.isReactComponent={};Al.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Al.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ko(){}ko.prototype=Al.prototype;function $u(e,t,a){this.props=e,this.context=t,this.refs=Go,this.updater=a||Uo}var Wu=$u.prototype=new ko;Wu.constructor=$u;Ho(Wu,Al.prototype);Wu.isPureReactComponent=!0;var Ps=Array.isArray;function Ic(){}var ne={H:null,A:null,T:null,S:null},Yo=Object.prototype.hasOwnProperty;function Fu(e,t,a){var l=a.ref;return{$$typeof:Ju,type:e,key:t,ref:l!==void 0?l:null,props:a}}function dg(e,t){return Fu(e.type,t,e.props)}function Iu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ju}function mg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var er=/\/+/g;function mc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mg(""+e.key):t.toString(36)}function gg(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ic,Ic):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Xa(e,t,a,l,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case Ju:case tg:u=!0;break;case Ro:return u=e._init,Xa(u(e._payload),t,a,l,n)}}if(u)return n=n(e),u=l===""?"."+mc(e,0):l,Ps(n)?(a="",u!=null&&(a=u.replace(er,"$&/")+"/"),Xa(n,t,a,"",function(d){return d})):n!=null&&(Iu(n)&&(n=dg(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(er,"$&/")+"/")+u)),t.push(n)),1;u=0;var s=l===""?".":l+":";if(Ps(e))for(var r=0;r<e.length;r++)l=e[r],i=s+mc(l,r),u+=Xa(l,t,a,i,n);else if(r=fg(e),typeof r=="function")for(e=r.call(e),r=0;!(l=e.next()).done;)l=l.value,i=s+mc(l,r++),u+=Xa(l,t,a,i,n);else if(i==="object"){if(typeof e.then=="function")return Xa(gg(e),t,a,l,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function Un(e,t,a){if(e==null)return e;var l=[],n=0;return Xa(e,l,"","",function(i){return t.call(a,i,n++)}),l}function hg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pg={map:Un,forEach:function(e,t,a){Un(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Un(e,function(){t++}),t},toArray:function(e){return Un(e,function(t){return t})||[]},only:function(e){if(!Iu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};k.Activity=og;k.Children=pg;k.Component=Al;k.Fragment=ag;k.Profiler=ng;k.PureComponent=$u;k.StrictMode=lg;k.Suspense=sg;k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne;k.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ne.H.useMemoCache(e)}};k.cache=function(e){return function(){return e.apply(null,arguments)}};k.cacheSignal=function(){return null};k.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=Ho({},e.props),n=e.key;if(t!=null)for(i in t.key!==void 0&&(n=""+t.key),t)!Yo.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(l[i]=t[i]);var i=arguments.length-2;if(i===1)l.children=a;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];l.children=u}return Fu(e.type,n,l)};k.createContext=function(e){return e={$$typeof:cg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ig,_context:e},e};k.createElement=function(e,t,a){var l,n={},i=null;if(t!=null)for(l in t.key!==void 0&&(i=""+t.key),t)Yo.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=t[l]);var u=arguments.length-2;if(u===1)n.children=a;else if(1<u){for(var s=Array(u),r=0;r<u;r++)s[r]=arguments[r+2];n.children=s}if(e&&e.defaultProps)for(l in u=e.defaultProps,u)n[l]===void 0&&(n[l]=u[l]);return Fu(e,i,n)};k.createRef=function(){return{current:null}};k.forwardRef=function(e){return{$$typeof:ug,render:e}};k.isValidElement=Iu;k.lazy=function(e){return{$$typeof:Ro,_payload:{_status:-1,_result:e},_init:hg}};k.memo=function(e,t){return{$$typeof:rg,type:e,compare:t===void 0?null:t}};k.startTransition=function(e){var t=ne.T,a={};ne.T=a;try{var l=e(),n=ne.S;n!==null&&n(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(Ic,tr)}catch(i){tr(i)}finally{t!==null&&a.types!==null&&(t.types=a.types),ne.T=t}};k.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()};k.use=function(e){return ne.H.use(e)};k.useActionState=function(e,t,a){return ne.H.useActionState(e,t,a)};k.useCallback=function(e,t){return ne.H.useCallback(e,t)};k.useContext=function(e){return ne.H.useContext(e)};k.useDebugValue=function(){};k.useDeferredValue=function(e,t){return ne.H.useDeferredValue(e,t)};k.useEffect=function(e,t){return ne.H.useEffect(e,t)};k.useEffectEvent=function(e){return ne.H.useEffectEvent(e)};k.useId=function(){return ne.H.useId()};k.useImperativeHandle=function(e,t,a){return ne.H.useImperativeHandle(e,t,a)};k.useInsertionEffect=function(e,t){return ne.H.useInsertionEffect(e,t)};k.useLayoutEffect=function(e,t){return ne.H.useLayoutEffect(e,t)};k.useMemo=function(e,t){return ne.H.useMemo(e,t)};k.useOptimistic=function(e,t){return ne.H.useOptimistic(e,t)};k.useReducer=function(e,t,a){return ne.H.useReducer(e,t,a)};k.useRef=function(e){return ne.H.useRef(e)};k.useState=function(e){return ne.H.useState(e)};k.useSyncExternalStore=function(e,t,a){return ne.H.useSyncExternalStore(e,t,a)};k.useTransition=function(){return ne.H.useTransition()};k.version="19.2.4";wo.exports=k;var x=wo.exports,Bo={exports:{}},Zi={},Lo={exports:{}},qo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,A){var _=M.length;M.push(A);e:for(;0<_;){var B=_-1>>>1,F=M[B];if(0<n(F,A))M[B]=A,M[_]=F,_=B;else break e}}function a(M){return M.length===0?null:M[0]}function l(M){if(M.length===0)return null;var A=M[0],_=M.pop();if(_!==A){M[0]=_;e:for(var B=0,F=M.length,de=F>>>1;B<de;){var Te=2*(B+1)-1,et=M[Te],Me=Te+1,ve=M[Me];if(0>n(et,_))Me<F&&0>n(ve,et)?(M[B]=ve,M[Me]=_,B=Me):(M[B]=et,M[Te]=_,B=Te);else if(Me<F&&0>n(ve,_))M[B]=ve,M[Me]=_,B=Me;else break e}}return A}function n(M,A){var _=M.sortIndex-A.sortIndex;return _!==0?_:M.id-A.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var u=Date,s=u.now();e.unstable_now=function(){return u.now()-s}}var r=[],d=[],p=1,v=null,m=3,y=!1,S=!1,T=!1,w=!1,o=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function b(M){for(var A=a(d);A!==null;){if(A.callback===null)l(d);else if(A.startTime<=M)l(d),A.sortIndex=A.expirationTime,t(r,A);else break;A=a(d)}}function O(M){if(T=!1,b(M),!S)if(a(r)!==null)S=!0,z||(z=!0,ye());else{var A=a(d);A!==null&&Se(O,A.startTime-M)}}var z=!1,h=-1,C=5,D=-1;function R(){return w?!0:!(e.unstable_now()-D<C)}function L(){if(w=!1,z){var M=e.unstable_now();D=M;var A=!0;try{e:{S=!1,T&&(T=!1,f(h),h=-1),y=!0;var _=m;try{t:{for(b(M),v=a(r);v!==null&&!(v.expirationTime>M&&R());){var B=v.callback;if(typeof B=="function"){v.callback=null,m=v.priorityLevel;var F=B(v.expirationTime<=M);if(M=e.unstable_now(),typeof F=="function"){v.callback=F,b(M),A=!0;break t}v===a(r)&&l(r),b(M)}else l(r);v=a(r)}if(v!==null)A=!0;else{var de=a(d);de!==null&&Se(O,de.startTime-M),A=!1}}break e}finally{v=null,m=_,y=!1}A=void 0}}finally{A?ye():z=!1}}}var ye;if(typeof g=="function")ye=function(){g(L)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Ue=Pe.port2;Pe.port1.onmessage=L,ye=function(){Ue.postMessage(null)}}else ye=function(){o(L,0)};function Se(M,A){h=o(function(){M(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var _=m;m=A;try{return M()}finally{m=_}},e.unstable_requestPaint=function(){w=!0},e.unstable_runWithPriority=function(M,A){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var _=m;m=M;try{return A()}finally{m=_}},e.unstable_scheduleCallback=function(M,A,_){var B=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?B+_:B):_=B,M){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=_+F,M={id:p++,callback:A,priorityLevel:M,startTime:_,expirationTime:F,sortIndex:-1},_>B?(M.sortIndex=_,t(d,M),a(r)===null&&M===a(d)&&(T?(f(h),h=-1):T=!0,Se(O,_-B))):(M.sortIndex=F,t(r,M),S||y||(S=!0,z||(z=!0,ye()))),M},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(M){var A=m;return function(){var _=m;m=A;try{return M.apply(this,arguments)}finally{m=_}}}})(qo);Lo.exports=qo;var yg=Lo.exports,Qo={exports:{}},Re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg=x;function Xo(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Kt(){}var we={d:{f:Kt,r:function(){throw Error(Xo(522))},D:Kt,C:Kt,L:Kt,m:Kt,X:Kt,S:Kt,M:Kt},p:0,findDOMNode:null},bg=Symbol.for("react.portal");function xg(e,t,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bg,key:l==null?null:""+l,children:e,containerInfo:t,implementation:a}}var Vl=vg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Vi(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we;Re.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Xo(299));return xg(e,t,null,a)};Re.flushSync=function(e){var t=Vl.T,a=we.p;try{if(Vl.T=null,we.p=2,e)return e()}finally{Vl.T=t,we.p=a,we.d.f()}};Re.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,we.d.C(e,t))};Re.prefetchDNS=function(e){typeof e=="string"&&we.d.D(e)};Re.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,l=Vi(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?we.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:i}):a==="script"&&we.d.X(e,{crossOrigin:l,integrity:n,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Re.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Vi(t.as,t.crossOrigin);we.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&we.d.M(e)};Re.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,l=Vi(a,t.crossOrigin);we.d.L(e,a,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Re.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Vi(t.as,t.crossOrigin);we.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else we.d.m(e)};Re.requestFormReset=function(e){we.d.r(e)};Re.unstable_batchedUpdates=function(e,t){return e(t)};Re.useFormState=function(e,t,a){return Vl.H.useFormState(e,t,a)};Re.useFormStatus=function(){return Vl.H.useHostTransitionStatus()};Re.version="19.2.4";function Zo(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zo)}catch(e){console.error(e)}}Zo(),Qo.exports=Re;var Sg=Qo.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=yg,Vo=x,Ng=Sg;function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sn(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Jo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $o(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ar(e){if(Sn(e)!==e)throw Error(j(188))}function jg(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return ar(n),e;if(i===l)return ar(n),t;i=i.sibling}throw Error(j(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(j(189))}}if(a.alternate!==l)throw Error(j(190))}if(a.tag!==3)throw Error(j(188));return a.stateNode.current===a?e:t}function Wo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Wo(e),t!==null)return t;e=e.sibling}return null}var ie=Object.assign,Ag=Symbol.for("react.element"),Hn=Symbol.for("react.transitional.element"),Bl=Symbol.for("react.portal"),Ka=Symbol.for("react.fragment"),Fo=Symbol.for("react.strict_mode"),Pc=Symbol.for("react.profiler"),Io=Symbol.for("react.consumer"),Mt=Symbol.for("react.context"),Pu=Symbol.for("react.forward_ref"),eu=Symbol.for("react.suspense"),tu=Symbol.for("react.suspense_list"),es=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),au=Symbol.for("react.activity"),Tg=Symbol.for("react.memo_cache_sentinel"),lr=Symbol.iterator;function wl(e){return e===null||typeof e!="object"?null:(e=lr&&e[lr]||e["@@iterator"],typeof e=="function"?e:null)}var Eg=Symbol.for("react.client.reference");function lu(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Eg?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ka:return"Fragment";case Pc:return"Profiler";case Fo:return"StrictMode";case eu:return"Suspense";case tu:return"SuspenseList";case au:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Bl:return"Portal";case Mt:return e.displayName||"Context";case Io:return(e._context.displayName||"Context")+".Consumer";case Pu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case es:return t=e.displayName||null,t!==null?t:lu(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return lu(e(t))}catch{}}return null}var Ll=Array.isArray,G=Vo.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=Ng.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ea={pending:!1,data:null,method:null,action:null},nu=[],Ja=-1;function Nt(e){return{current:e}}function Ae(e){0>Ja||(e.current=nu[Ja],nu[Ja]=null,Ja--)}function te(e,t){Ja++,nu[Ja]=e.current,e.current=t}var xt=Nt(null),un=Nt(null),ia=Nt(null),di=Nt(null);function mi(e,t){switch(te(ia,t),te(un,e),te(xt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ro(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ro(t),e=bm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ae(xt),te(xt,e)}function ml(){Ae(xt),Ae(un),Ae(ia)}function iu(e){e.memoizedState!==null&&te(di,e);var t=xt.current,a=bm(t,e.type);t!==a&&(te(un,e),te(xt,a))}function gi(e){un.current===e&&(Ae(xt),Ae(un)),di.current===e&&(Ae(di),vn._currentValue=Ea)}var gc,nr;function Na(e){if(gc===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);gc=t&&t[1]||"",nr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gc+e+nr}var hc=!1;function pc(e,t){if(!e||hc)return"";hc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(y){var m=y}Reflect.construct(e,[],v)}else{try{v.call()}catch(y){m=y}e.call(v.prototype)}}else{try{throw Error()}catch(y){m=y}(v=e())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(y){if(y&&m&&typeof y.stack=="string")return[y.stack,m.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var r=u.split(`
`),d=s.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===d.length)for(l=r.length-1,n=d.length-1;1<=l&&0<=n&&r[l]!==d[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==d[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==d[n]){var p=`
`+r[l].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=l&&0<=n);break}}}finally{hc=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Na(a):""}function zg(e,t){switch(e.tag){case 26:case 27:case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return e.child!==t&&t!==null?Na("Suspense Fallback"):Na("Suspense");case 19:return Na("SuspenseList");case 0:case 15:return pc(e.type,!1);case 11:return pc(e.type.render,!1);case 1:return pc(e.type,!0);case 31:return Na("Activity");default:return""}}function ir(e){try{var t="",a=null;do t+=zg(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var cu=Object.prototype.hasOwnProperty,ts=xe.unstable_scheduleCallback,yc=xe.unstable_cancelCallback,Cg=xe.unstable_shouldYield,Dg=xe.unstable_requestPaint,Ke=xe.unstable_now,Og=xe.unstable_getCurrentPriorityLevel,Po=xe.unstable_ImmediatePriority,ef=xe.unstable_UserBlockingPriority,hi=xe.unstable_NormalPriority,Mg=xe.unstable_LowPriority,tf=xe.unstable_IdlePriority,_g=xe.log,wg=xe.unstable_setDisableYieldValue,Nn=null,Je=null;function ea(e){if(typeof _g=="function"&&wg(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(Nn,e)}catch{}}var $e=Math.clz32?Math.clz32:Hg,Rg=Math.log,Ug=Math.LN2;function Hg(e){return e>>>=0,e===0?32:31-(Rg(e)/Ug|0)|0}var Gn=256,kn=262144,Yn=4194304;function ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ki(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=ja(l):(u&=s,u!==0?n=ja(u):a||(a=s&~e,a!==0&&(n=ja(a))))):(s=l&~i,s!==0?n=ja(s):u!==0?n=ja(u):a||(a=l&~e,a!==0&&(n=ja(a)))),n===0?0:t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function jn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function af(){var e=Yn;return Yn<<=1,!(Yn&62914560)&&(Yn=4194304),e}function vc(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function An(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kg(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,d=e.hiddenUpdates;for(a=u&~a;0<a;){var p=31-$e(a),v=1<<p;s[p]=0,r[p]=-1;var m=d[p];if(m!==null)for(d[p]=null,p=0;p<m.length;p++){var y=m[p];y!==null&&(y.lane&=-536870913)}a&=~v}l!==0&&lf(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function lf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-$e(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function nf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-$e(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function cf(e,t){var a=t&-t;return a=a&42?1:as(a),a&(e.suspendedLanes|t)?0:a}function as(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ls(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function uf(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Om(e.type))}function cr(e,t){var a=J.p;try{return J.p=e,t()}finally{J.p=a}}var va=Math.random().toString(36).slice(2),ze="__reactFiber$"+va,Le="__reactProps$"+va,Tl="__reactContainer$"+va,uu="__reactEvents$"+va,Yg="__reactListeners$"+va,Bg="__reactHandles$"+va,ur="__reactResources$"+va,Tn="__reactMarker$"+va;function ns(e){delete e[ze],delete e[Le],delete e[uu],delete e[Yg],delete e[Bg]}function $a(e){var t=e[ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Tl]||a[ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ho(e);e!==null;){if(a=e[ze])return a;e=ho(e)}return t}e=a,a=e.parentNode}return null}function El(e){if(e=e[ze]||e[Tl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ql(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function il(e){var t=e[ur];return t||(t=e[ur]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[Tn]=!0}var sf=new Set,rf={};function Ha(e,t){gl(e,t),gl(e+"Capture",t)}function gl(e,t){for(rf[e]=t,e=0;e<t.length;e++)sf.add(t[e])}var Lg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sr={},rr={};function qg(e){return cu.call(rr,e)?!0:cu.call(sr,e)?!1:Lg.test(e)?rr[e]=!0:(sr[e]=!0,!1)}function Fn(e,t,a){if(qg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Bn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function At(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function of(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qg(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function su(e){if(!e._valueTracker){var t=of(e)?"checked":"value";e._valueTracker=Qg(e,t,""+e[t])}}function ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=of(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xg=/[\n"\\]/g;function ct(e){return e.replace(Xg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ru(e,t,a,l,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+lt(t)):e.value!==""+lt(t)&&(e.value=""+lt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?ou(e,u,lt(t)):a!=null?ou(e,u,lt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+lt(s):e.removeAttribute("name")}function df(e,t,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){su(e);return}a=a!=null?""+lt(a):"",t=t!=null?""+lt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),su(e)}function ou(e,t,a){t==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+lt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function mf(e,t,a){if(t!=null&&(t=""+lt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+lt(a):""}function gf(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(j(92));if(Ll(l)){if(1<l.length)throw Error(j(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=lt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),su(e)}function hl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Zg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function or(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Zg.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function hf(e,t,a){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&or(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&or(e,i,t[i])}function is(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function In(e){return Kg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _t(){}var fu=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,ul=null;function fr(e){var t=El(e);if(t&&(e=t.stateNode)){var a=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(ru(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ct(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Le]||null;if(!n)throw Error(j(90));ru(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&ff(l)}break e;case"textarea":mf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cl(e,!!a.multiple,t,!1)}}}var bc=!1;function pf(e,t,a){if(bc)return e(t,a);bc=!0;try{var l=e(t);return l}finally{if(bc=!1,(Wa!==null||ul!==null)&&(ic(),Wa&&(t=Wa,e=ul,ul=Wa=null,fr(t),e)))for(t=0;t<e.length;t++)fr(e[t])}}function sn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Le]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(j(231,t,typeof a));return a}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(Gt)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){du=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{du=!1}var ta=null,us=null,Pn=null;function yf(){if(Pn)return Pn;var e,t=us,a=t.length,l,n="value"in ta?ta.value:ta.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Pn=n.slice(e,1<l?1-l:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function dr(){return!1}function qe(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ln:dr,this.isPropagationStopped=dr,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=qe(Ga),En=ie({},Ga,{view:0,detail:0}),Jg=qe(En),xc,Sc,Ul,$i=ie({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ul&&(Ul&&e.type==="mousemove"?(xc=e.screenX-Ul.screenX,Sc=e.screenY-Ul.screenY):Sc=xc=0,Ul=e),xc)},movementY:function(e){return"movementY"in e?e.movementY:Sc}}),mr=qe($i),$g=ie({},$i,{dataTransfer:0}),Wg=qe($g),Fg=ie({},En,{relatedTarget:0}),Nc=qe(Fg),Ig=ie({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Pg=qe(Ig),eh=ie({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),th=qe(eh),ah=ie({},Ga,{data:0}),gr=qe(ah),lh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ch(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ih[e])?!!t[e]:!1}function ss(){return ch}var uh=ie({},En,{key:function(e){if(e.key){var t=lh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sh=qe(uh),rh=ie({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hr=qe(rh),oh=ie({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),fh=qe(oh),dh=ie({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),mh=qe(dh),gh=ie({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hh=qe(gh),ph=ie({},Ga,{newState:0,oldState:0}),yh=qe(ph),vh=[9,13,27,32],rs=Gt&&"CompositionEvent"in window,Kl=null;Gt&&"documentMode"in document&&(Kl=document.documentMode);var bh=Gt&&"TextEvent"in window&&!Kl,vf=Gt&&(!rs||Kl&&8<Kl&&11>=Kl),pr=" ",yr=!1;function bf(e,t){switch(e){case"keyup":return vh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function xh(e,t){switch(e){case"compositionend":return xf(t);case"keypress":return t.which!==32?null:(yr=!0,pr);case"textInput":return e=t.data,e===pr&&yr?null:e;default:return null}}function Sh(e,t){if(Fa)return e==="compositionend"||!rs&&bf(e,t)?(e=yf(),Pn=us=ta=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vf&&t.locale!=="ko"?null:t.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nh[e.type]:t==="textarea"}function Sf(e,t,a,l){Wa?ul?ul.push(l):ul=[l]:Wa=l,t=Ri(t,"onChange"),0<t.length&&(a=new Ji("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Jl=null,rn=null;function jh(e){pm(e,0)}function Wi(e){var t=ql(e);if(ff(t))return e}function br(e,t){if(e==="change")return t}var Nf=!1;if(Gt){var jc;if(Gt){var Ac="oninput"in document;if(!Ac){var xr=document.createElement("div");xr.setAttribute("oninput","return;"),Ac=typeof xr.oninput=="function"}jc=Ac}else jc=!1;Nf=jc&&(!document.documentMode||9<document.documentMode)}function Sr(){Jl&&(Jl.detachEvent("onpropertychange",jf),rn=Jl=null)}function jf(e){if(e.propertyName==="value"&&Wi(rn)){var t=[];Sf(t,rn,e,cs(e)),pf(jh,t)}}function Ah(e,t,a){e==="focusin"?(Sr(),Jl=t,rn=a,Jl.attachEvent("onpropertychange",jf)):e==="focusout"&&Sr()}function Th(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wi(rn)}function Eh(e,t){if(e==="click")return Wi(t)}function zh(e,t){if(e==="input"||e==="change")return Wi(t)}function Ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:Ch;function on(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!cu.call(t,n)||!Fe(e[n],t[n]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var a=Nr(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nr(a)}}function Af(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Af(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=pi(e.document)}return t}function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Dh=Gt&&"documentMode"in document&&11>=document.documentMode,Ia=null,mu=null,$l=null,gu=!1;function Ar(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||Ia==null||Ia!==pi(l)||(l=Ia,"selectionStart"in l&&os(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$l&&on($l,l)||($l=l,l=Ri(mu,"onSelect"),0<l.length&&(t=new Ji("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Ia)))}function Sa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Pa={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},Tc={},Ef={};Gt&&(Ef=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function ka(e){if(Tc[e])return Tc[e];if(!Pa[e])return e;var t=Pa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ef)return Tc[e]=t[a];return e}var zf=ka("animationend"),Cf=ka("animationiteration"),Df=ka("animationstart"),Oh=ka("transitionrun"),Mh=ka("transitionstart"),_h=ka("transitioncancel"),Of=ka("transitionend"),Mf=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function pt(e,t){Mf.set(e,t),Ha(t,[e])}var yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},at=[],el=0,fs=0;function Fi(){for(var e=el,t=fs=el=0;t<e;){var a=at[t];at[t++]=null;var l=at[t];at[t++]=null;var n=at[t];at[t++]=null;var i=at[t];if(at[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&_f(a,n,i)}}function Ii(e,t,a,l){at[el++]=e,at[el++]=t,at[el++]=a,at[el++]=l,fs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ds(e,t,a,l){return Ii(e,t,a,l),vi(e)}function Ya(e,t){return Ii(e,null,null,t),vi(e)}function _f(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-$e(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function vi(e){if(50<nn)throw nn=0,Hu=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tl={};function wh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,a,l){return new wh(e,t,a,l)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rt(e,t){var a=e.alternate;return a===null?(a=Ze(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ti(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")ms(e)&&(u=1);else if(typeof e=="string")u=kp(e,a,xt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case au:return e=Ze(31,a,t,n),e.elementType=au,e.lanes=i,e;case Ka:return za(a.children,n,i,t);case Fo:u=8,n|=24;break;case Pc:return e=Ze(12,a,t,n|2),e.elementType=Pc,e.lanes=i,e;case eu:return e=Ze(13,a,t,n),e.elementType=eu,e.lanes=i,e;case tu:return e=Ze(19,a,t,n),e.elementType=tu,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mt:u=10;break e;case Io:u=9;break e;case Pu:u=11;break e;case es:u=14;break e;case Jt:u=16,l=null;break e}u=29,a=Error(j(130,e===null?"null":typeof e,"")),l=null}return t=Ze(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function za(e,t,a,l){return e=Ze(7,e,l,t),e.lanes=a,e}function Ec(e,t,a){return e=Ze(6,e,null,t),e.lanes=a,e}function Rf(e){var t=Ze(18,null,null,0);return t.stateNode=e,t}function zc(e,t,a){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Tr=new WeakMap;function ut(e,t){if(typeof e=="object"&&e!==null){var a=Tr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ir(t)},Tr.set(e,t),t)}return{value:e,source:t,stack:ir(t)}}var al=[],ll=0,bi=null,fn=0,nt=[],it=0,ga=null,yt=1,vt="";function Dt(e,t){al[ll++]=fn,al[ll++]=bi,bi=e,fn=t}function Uf(e,t,a){nt[it++]=yt,nt[it++]=vt,nt[it++]=ga,ga=e;var l=yt;e=vt;var n=32-$e(l)-1;l&=~(1<<n),a+=1;var i=32-$e(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,yt=1<<32-$e(t)+n|a<<n|l,vt=i+e}else yt=1<<i|a<<n|l,vt=e}function gs(e){e.return!==null&&(Dt(e,1),Uf(e,1,0))}function hs(e){for(;e===bi;)bi=al[--ll],al[ll]=null,fn=al[--ll],al[ll]=null;for(;e===ga;)ga=nt[--it],nt[it]=null,vt=nt[--it],nt[it]=null,yt=nt[--it],nt[it]=null}function Hf(e,t){nt[it++]=yt,nt[it++]=vt,nt[it++]=ga,yt=t.id,vt=t.overflow,ga=e}var Ce=null,le=null,V=!1,ca=null,st=!1,pu=Error(j(519));function ha(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw dn(ut(t,e)),pu}function Er(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[ze]=e,t[Le]=l,a){case"dialog":q("cancel",t),q("close",t);break;case"iframe":case"object":case"embed":q("load",t);break;case"video":case"audio":for(a=0;a<pn.length;a++)q(pn[a],t);break;case"source":q("error",t);break;case"img":case"image":case"link":q("error",t),q("load",t);break;case"details":q("toggle",t);break;case"input":q("invalid",t),df(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":q("invalid",t);break;case"textarea":q("invalid",t),gf(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||vm(t.textContent,a)?(l.popover!=null&&(q("beforetoggle",t),q("toggle",t)),l.onScroll!=null&&q("scroll",t),l.onScrollEnd!=null&&q("scrollend",t),l.onClick!=null&&(t.onclick=_t),t=!0):t=!1,t||ha(e,!0)}function zr(e){for(Ce=e.return;Ce;)switch(Ce.tag){case 5:case 31:case 13:st=!1;return;case 27:case 3:st=!0;return;default:Ce=Ce.return}}function La(e){if(e!==Ce)return!1;if(!V)return zr(e),V=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Lu(e.type,e.memoizedProps)),a=!a),a&&le&&ha(e),zr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));le=go(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));le=go(e)}else t===27?(t=le,ba(e.type)?(e=Zu,Zu=null,le=e):le=t):le=Ce?ot(e.stateNode.nextSibling):null;return!0}function Ma(){le=Ce=null,V=!1}function Cc(){var e=ca;return e!==null&&(Ye===null?Ye=e:Ye.push.apply(Ye,e),ca=null),e}function dn(e){ca===null?ca=[e]:ca.push(e)}var yu=Nt(null),Ba=null,wt=null;function Wt(e,t,a){te(yu,t._currentValue),t._currentValue=a}function Ut(e){e._currentValue=yu.current,Ae(yu)}function vu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function bu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var r=0;r<t.length;r++)if(s.context===t[r]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),vu(i.return,a,e),l||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(j(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),vu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function zl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(j(387));if(u=u.memoizedProps,u!==null){var s=n.type;Fe(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===di.current){if(u=n.alternate,u===null)throw Error(j(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(vn):e=[vn])}n=n.return}e!==null&&bu(t,e,a,l),t.flags|=262144}function xi(e){for(e=e.firstContext;e!==null;){if(!Fe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _a(e){Ba=e,wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function De(e){return Gf(Ba,e)}function qn(e,t){return Ba===null&&_a(e),Gf(e,t)}function Gf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},wt===null){if(e===null)throw Error(j(308));wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wt=wt.next=t;return a}var Rh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Uh=xe.unstable_scheduleCallback,Hh=xe.unstable_NormalPriority,he={$$typeof:Mt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ps(){return{controller:new Rh,data:new Map,refCount:0}}function zn(e){e.refCount--,e.refCount===0&&Uh(Hh,function(){e.controller.abort()})}var Wl=null,xu=0,pl=0,sl=null;function Gh(e,t){if(Wl===null){var a=Wl=[];xu=0,pl=Ls(),sl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return xu++,t.then(Cr,Cr),t}function Cr(){if(--xu===0&&Wl!==null){sl!==null&&(sl.status="fulfilled");var e=Wl;Wl=null,pl=0,sl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Dr=G.S;G.S=function(e,t){Fd=Ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gh(e,t),Dr!==null&&Dr(e,t)};var Ca=Nt(null);function ys(){var e=Ca.current;return e!==null?e:ee.pooledCache}function ai(e,t){t===null?te(Ca,Ca.current):te(Ca,t.pool)}function kf(){var e=ys();return e===null?null:{parent:he._currentValue,pool:e}}var Cl=Error(j(460)),vs=Error(j(474)),Pi=Error(j(542)),Si={then:function(){}};function Or(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(_t,_t),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_r(e),e;default:if(typeof t.status=="string")t.then(_t,_t);else{if(e=ee,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_r(e),e}throw Da=t,Cl}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Da=a,Cl):a}}var Da=null;function Mr(){if(Da===null)throw Error(j(459));var e=Da;return Da=null,e}function _r(e){if(e===Cl||e===Pi)throw Error(j(483))}var rl=null,mn=0;function Qn(e){var t=mn;return mn+=1,rl===null&&(rl=[]),Yf(rl,e,t)}function Hl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Xn(e,t){throw t.$$typeof===Ag?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Bf(e){function t(o,f){if(e){var g=o.deletions;g===null?(o.deletions=[f],o.flags|=16):g.push(f)}}function a(o,f){if(!e)return null;for(;f!==null;)t(o,f),f=f.sibling;return null}function l(o){for(var f=new Map;o!==null;)o.key!==null?f.set(o.key,o):f.set(o.index,o),o=o.sibling;return f}function n(o,f){return o=Rt(o,f),o.index=0,o.sibling=null,o}function i(o,f,g){return o.index=g,e?(g=o.alternate,g!==null?(g=g.index,g<f?(o.flags|=67108866,f):g):(o.flags|=67108866,f)):(o.flags|=1048576,f)}function u(o){return e&&o.alternate===null&&(o.flags|=67108866),o}function s(o,f,g,b){return f===null||f.tag!==6?(f=Ec(g,o.mode,b),f.return=o,f):(f=n(f,g),f.return=o,f)}function r(o,f,g,b){var O=g.type;return O===Ka?p(o,f,g.props.children,b,g.key):f!==null&&(f.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Jt&&Aa(O)===f.type)?(f=n(f,g.props),Hl(f,g),f.return=o,f):(f=ti(g.type,g.key,g.props,null,o.mode,b),Hl(f,g),f.return=o,f)}function d(o,f,g,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=zc(g,o.mode,b),f.return=o,f):(f=n(f,g.children||[]),f.return=o,f)}function p(o,f,g,b,O){return f===null||f.tag!==7?(f=za(g,o.mode,b,O),f.return=o,f):(f=n(f,g),f.return=o,f)}function v(o,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Ec(""+f,o.mode,g),f.return=o,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Hn:return g=ti(f.type,f.key,f.props,null,o.mode,g),Hl(g,f),g.return=o,g;case Bl:return f=zc(f,o.mode,g),f.return=o,f;case Jt:return f=Aa(f),v(o,f,g)}if(Ll(f)||wl(f))return f=za(f,o.mode,g,null),f.return=o,f;if(typeof f.then=="function")return v(o,Qn(f),g);if(f.$$typeof===Mt)return v(o,qn(o,f),g);Xn(o,f)}return null}function m(o,f,g,b){var O=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return O!==null?null:s(o,f,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Hn:return g.key===O?r(o,f,g,b):null;case Bl:return g.key===O?d(o,f,g,b):null;case Jt:return g=Aa(g),m(o,f,g,b)}if(Ll(g)||wl(g))return O!==null?null:p(o,f,g,b,null);if(typeof g.then=="function")return m(o,f,Qn(g),b);if(g.$$typeof===Mt)return m(o,f,qn(o,g),b);Xn(o,g)}return null}function y(o,f,g,b,O){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return o=o.get(g)||null,s(f,o,""+b,O);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Hn:return o=o.get(b.key===null?g:b.key)||null,r(f,o,b,O);case Bl:return o=o.get(b.key===null?g:b.key)||null,d(f,o,b,O);case Jt:return b=Aa(b),y(o,f,g,b,O)}if(Ll(b)||wl(b))return o=o.get(g)||null,p(f,o,b,O,null);if(typeof b.then=="function")return y(o,f,g,Qn(b),O);if(b.$$typeof===Mt)return y(o,f,g,qn(f,b),O);Xn(f,b)}return null}function S(o,f,g,b){for(var O=null,z=null,h=f,C=f=0,D=null;h!==null&&C<g.length;C++){h.index>C?(D=h,h=null):D=h.sibling;var R=m(o,h,g[C],b);if(R===null){h===null&&(h=D);break}e&&h&&R.alternate===null&&t(o,h),f=i(R,f,C),z===null?O=R:z.sibling=R,z=R,h=D}if(C===g.length)return a(o,h),V&&Dt(o,C),O;if(h===null){for(;C<g.length;C++)h=v(o,g[C],b),h!==null&&(f=i(h,f,C),z===null?O=h:z.sibling=h,z=h);return V&&Dt(o,C),O}for(h=l(h);C<g.length;C++)D=y(h,o,C,g[C],b),D!==null&&(e&&D.alternate!==null&&h.delete(D.key===null?C:D.key),f=i(D,f,C),z===null?O=D:z.sibling=D,z=D);return e&&h.forEach(function(L){return t(o,L)}),V&&Dt(o,C),O}function T(o,f,g,b){if(g==null)throw Error(j(151));for(var O=null,z=null,h=f,C=f=0,D=null,R=g.next();h!==null&&!R.done;C++,R=g.next()){h.index>C?(D=h,h=null):D=h.sibling;var L=m(o,h,R.value,b);if(L===null){h===null&&(h=D);break}e&&h&&L.alternate===null&&t(o,h),f=i(L,f,C),z===null?O=L:z.sibling=L,z=L,h=D}if(R.done)return a(o,h),V&&Dt(o,C),O;if(h===null){for(;!R.done;C++,R=g.next())R=v(o,R.value,b),R!==null&&(f=i(R,f,C),z===null?O=R:z.sibling=R,z=R);return V&&Dt(o,C),O}for(h=l(h);!R.done;C++,R=g.next())R=y(h,o,C,R.value,b),R!==null&&(e&&R.alternate!==null&&h.delete(R.key===null?C:R.key),f=i(R,f,C),z===null?O=R:z.sibling=R,z=R);return e&&h.forEach(function(ye){return t(o,ye)}),V&&Dt(o,C),O}function w(o,f,g,b){if(typeof g=="object"&&g!==null&&g.type===Ka&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Hn:e:{for(var O=g.key;f!==null;){if(f.key===O){if(O=g.type,O===Ka){if(f.tag===7){a(o,f.sibling),b=n(f,g.props.children),b.return=o,o=b;break e}}else if(f.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Jt&&Aa(O)===f.type){a(o,f.sibling),b=n(f,g.props),Hl(b,g),b.return=o,o=b;break e}a(o,f);break}else t(o,f);f=f.sibling}g.type===Ka?(b=za(g.props.children,o.mode,b,g.key),b.return=o,o=b):(b=ti(g.type,g.key,g.props,null,o.mode,b),Hl(b,g),b.return=o,o=b)}return u(o);case Bl:e:{for(O=g.key;f!==null;){if(f.key===O)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){a(o,f.sibling),b=n(f,g.children||[]),b.return=o,o=b;break e}else{a(o,f);break}else t(o,f);f=f.sibling}b=zc(g,o.mode,b),b.return=o,o=b}return u(o);case Jt:return g=Aa(g),w(o,f,g,b)}if(Ll(g))return S(o,f,g,b);if(wl(g)){if(O=wl(g),typeof O!="function")throw Error(j(150));return g=O.call(g),T(o,f,g,b)}if(typeof g.then=="function")return w(o,f,Qn(g),b);if(g.$$typeof===Mt)return w(o,f,qn(o,g),b);Xn(o,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(a(o,f.sibling),b=n(f,g),b.return=o,o=b):(a(o,f),b=Ec(g,o.mode,b),b.return=o,o=b),u(o)):a(o,f)}return function(o,f,g,b){try{mn=0;var O=w(o,f,g,b);return rl=null,O}catch(h){if(h===Cl||h===Pi)throw h;var z=Ze(29,h,null,o.mode);return z.lanes=b,z.return=o,z}finally{}}}var wa=Bf(!0),Lf=Bf(!1),$t=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,K&2){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=vi(e),_f(e,null,a),t}return Ii(e,l,t,a),vi(e)}function Fl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,nf(e,a)}}function Dc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Nu=!1;function Il(){if(Nu){var e=sl;if(e!==null)throw e}}function Pl(e,t,a,l){Nu=!1;var n=e.updateQueue;$t=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,d=r.next;r.next=null,u===null?i=d:u.next=d,u=r;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==u&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=r))}if(i!==null){var v=n.baseState;u=0,p=d=r=null,s=i;do{var m=s.lane&-536870913,y=m!==s.lane;if(y?(X&m)===m:(l&m)===m){m!==0&&m===pl&&(Nu=!0),p!==null&&(p=p.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var S=e,T=s;m=t;var w=a;switch(T.tag){case 1:if(S=T.payload,typeof S=="function"){v=S.call(w,v,m);break e}v=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=T.payload,m=typeof S=="function"?S.call(w,v,m):S,m==null)break e;v=ie({},v,m);break e;case 2:$t=!0}}m=s.callback,m!==null&&(e.flags|=64,y&&(e.flags|=8192),y=n.callbacks,y===null?n.callbacks=[m]:y.push(m))}else y={lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=y,r=v):p=p.next=y,u|=m;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;y=s,s=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);p===null&&(r=v),n.baseState=r,n.firstBaseUpdate=d,n.lastBaseUpdate=p,i===null&&(n.shared.lanes=0),ya|=u,e.lanes=u,e.memoizedState=v}}function qf(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function Qf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qf(a[e],t)}var yl=Nt(null),Ni=Nt(0);function wr(e,t){e=Lt,te(Ni,e),te(yl,t),Lt=e|t.baseLanes}function ju(){te(Ni,Lt),te(yl,yl.current)}function xs(){Lt=Ni.current,Ae(yl),Ae(Ni)}var Ie=Nt(null),rt=null;function Ft(e){var t=e.alternate;te(oe,oe.current&1),te(Ie,e),rt===null&&(t===null||yl.current!==null||t.memoizedState!==null)&&(rt=e)}function Au(e){te(oe,oe.current),te(Ie,e),rt===null&&(rt=e)}function Xf(e){e.tag===22?(te(oe,oe.current),te(Ie,e),rt===null&&(rt=e)):It()}function It(){te(oe,oe.current),te(Ie,Ie.current)}function Xe(e){Ae(Ie),rt===e&&(rt=null),Ae(oe)}var oe=Nt(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qu(a)||Xu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kt=0,Y=null,P=null,me=null,Ai=!1,ol=!1,Ra=!1,Ti=0,gn=0,fl=null,Yh=0;function se(){throw Error(j(321))}function Ss(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Fe(e[a],t[a]))return!1;return!0}function Ns(e,t,a,l,n,i){return kt=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,G.H=e===null||e.memoizedState===null?Sd:ws,Ra=!1,i=a(l,n),Ra=!1,ol&&(i=Vf(t,a,l,n)),Zf(e),i}function Zf(e){G.H=hn;var t=P!==null&&P.next!==null;if(kt=0,me=P=Y=null,Ai=!1,gn=0,fl=null,t)throw Error(j(300));e===null||pe||(e=e.dependencies,e!==null&&xi(e)&&(pe=!0))}function Vf(e,t,a,l){Y=e;var n=0;do{if(ol&&(fl=null),gn=0,ol=!1,25<=n)throw Error(j(301));if(n+=1,me=P=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}G.H=Nd,i=t(a,l)}while(ol);return i}function Bh(){var e=G.H,t=e.useState()[0];return t=typeof t.then=="function"?Cn(t):t,e=e.useState()[0],(P!==null?P.memoizedState:null)!==e&&(Y.flags|=1024),t}function js(){var e=Ti!==0;return Ti=0,e}function As(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ts(e){if(Ai){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ai=!1}kt=0,me=P=Y=null,ol=!1,gn=Ti=0,fl=null}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?Y.memoizedState=me=e:me=me.next=e,me}function fe(){if(P===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=P.next;var t=me===null?Y.memoizedState:me.next;if(t!==null)me=t,P=e;else{if(e===null)throw Y.alternate===null?Error(j(467)):Error(j(310));P=e,e={memoizedState:P.memoizedState,baseState:P.baseState,baseQueue:P.baseQueue,queue:P.queue,next:null},me===null?Y.memoizedState=me=e:me=me.next=e}return me}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cn(e){var t=gn;return gn+=1,fl===null&&(fl=[]),e=Yf(fl,e,t),t=Y,(me===null?t.memoizedState:me.next)===null&&(t=t.alternate,G.H=t===null||t.memoizedState===null?Sd:ws),e}function tc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cn(e);if(e.$$typeof===Mt)return De(e)}throw Error(j(438,String(e)))}function Es(e){var t=null,a=Y.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=Y.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ec(),Y.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Tg;return t.index++,a}function Yt(e,t){return typeof t=="function"?t(e):t}function li(e){var t=fe();return zs(t,P,e)}function zs(e,t,a){var l=e.queue;if(l===null)throw Error(j(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,r=null,d=t,p=!1;do{var v=d.lane&-536870913;if(v!==d.lane?(X&v)===v:(kt&v)===v){var m=d.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),v===pl&&(p=!0);else if((kt&m)===m){d=d.next,m===pl&&(p=!0);continue}else v={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=v,u=i):r=r.next=v,Y.lanes|=m,ya|=m;v=d.action,Ra&&a(i,v),i=d.hasEagerState?d.eagerState:a(i,v)}else m={lane:v,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=m,u=i):r=r.next=m,Y.lanes|=v,ya|=v;d=d.next}while(d!==null&&d!==t);if(r===null?u=i:r.next=s,!Fe(i,e.memoizedState)&&(pe=!0,p&&(a=sl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Oc(e){var t=fe(),a=t.queue;if(a===null)throw Error(j(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Fe(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Kf(e,t,a){var l=Y,n=fe(),i=V;if(i){if(a===void 0)throw Error(j(407));a=a()}else a=t();var u=!Fe((P||n).memoizedState,a);if(u&&(n.memoizedState=a,pe=!0),n=n.queue,Cs(Wf.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||me!==null&&me.memoizedState.tag&1){if(l.flags|=2048,vl(9,{destroy:void 0},$f.bind(null,l,n,a,t),null),ee===null)throw Error(j(349));i||kt&127||Jf(l,t,a)}return a}function Jf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Y.updateQueue,t===null?(t=ec(),Y.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function $f(e,t,a,l){t.value=a,t.getSnapshot=l,Ff(t)&&If(e)}function Wf(e,t,a){return a(function(){Ff(t)&&If(e)})}function Ff(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Fe(e,a)}catch{return!0}}function If(e){var t=Ya(e,2);t!==null&&Be(t,e,2)}function Tu(e){var t=_e();if(typeof e=="function"){var a=e;if(e=a(),Ra){ea(!0);try{a()}finally{ea(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function Pf(e,t,a,l){return e.baseState=a,zs(e,P,typeof l=="function"?l:Yt)}function Lh(e,t,a,l,n){if(lc(e))throw Error(j(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};G.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,ed(t,i)):(i.next=a.next,t.pending=a.next=i)}}function ed(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=G.T,u={};G.T=u;try{var s=a(n,l),r=G.S;r!==null&&r(u,s),Rr(e,t,s)}catch(d){Eu(e,t,d)}finally{i!==null&&u.types!==null&&(i.types=u.types),G.T=i}}else try{i=a(n,l),Rr(e,t,i)}catch(d){Eu(e,t,d)}}function Rr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ur(e,t,l)},function(l){return Eu(e,t,l)}):Ur(e,t,a)}function Ur(e,t,a){t.status="fulfilled",t.value=a,td(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ed(e,a)))}function Eu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,td(t),t=t.next;while(t!==l)}e.action=null}function td(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ad(e,t){return t}function Hr(e,t){if(V){var a=ee.formState;if(a!==null){e:{var l=Y;if(V){if(le){t:{for(var n=le,i=st;n.nodeType!==8;){if(!i){n=null;break t}if(n=ot(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){le=ot(n.nextSibling),l=n.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=_e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ad,lastRenderedState:t},a.queue=l,a=vd.bind(null,Y,l),l.dispatch=a,l=Tu(!1),i=_s.bind(null,Y,!1,l.queue),l=_e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Lh.bind(null,Y,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Gr(e){var t=fe();return ld(t,P,e)}function ld(e,t,a){if(t=zs(e,t,ad)[0],e=li(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Cn(t)}catch(u){throw u===Cl?Pi:u}else l=t;t=fe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(Y.flags|=2048,vl(9,{destroy:void 0},qh.bind(null,n,a),null)),[l,i,e]}function qh(e,t){e.action=t}function kr(e){var t=fe(),a=P;if(a!==null)return ld(t,a,e);fe(),t=t.memoizedState,a=fe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function vl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=Y.updateQueue,t===null&&(t=ec(),Y.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function nd(){return fe().memoizedState}function ni(e,t,a,l){var n=_e();Y.flags|=e,n.memoizedState=vl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ac(e,t,a,l){var n=fe();l=l===void 0?null:l;var i=n.memoizedState.inst;P!==null&&l!==null&&Ss(l,P.memoizedState.deps)?n.memoizedState=vl(t,i,a,l):(Y.flags|=e,n.memoizedState=vl(1|t,i,a,l))}function Yr(e,t){ni(8390656,8,e,t)}function Cs(e,t){ac(2048,8,e,t)}function Qh(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=ec(),Y.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function id(e){var t=fe().memoizedState;return Qh({ref:t,nextImpl:e}),function(){if(K&2)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function cd(e,t){return ac(4,2,e,t)}function ud(e,t){return ac(4,4,e,t)}function sd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rd(e,t,a){a=a!=null?a.concat([e]):null,ac(4,4,sd.bind(null,t,e),a)}function Ds(){}function od(e,t){var a=fe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Ss(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function fd(e,t){var a=fe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Ss(t,l[1]))return l[0];if(l=e(),Ra){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l}function Os(e,t,a){return a===void 0||kt&1073741824&&!(X&261930)?e.memoizedState=t:(e.memoizedState=a,e=Pd(),Y.lanes|=e,ya|=e,a)}function dd(e,t,a,l){return Fe(a,t)?a:yl.current!==null?(e=Os(e,a,l),Fe(e,t)||(pe=!0),e):!(kt&42)||kt&1073741824&&!(X&261930)?(pe=!0,e.memoizedState=a):(e=Pd(),Y.lanes|=e,ya|=e,t)}function md(e,t,a,l,n){var i=J.p;J.p=i!==0&&8>i?i:8;var u=G.T,s={};G.T=s,_s(e,!1,t,a);try{var r=n(),d=G.S;if(d!==null&&d(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var p=kh(r,l);en(e,t,p,We(e))}else en(e,t,l,We(e))}catch(v){en(e,t,{then:function(){},status:"rejected",reason:v},We())}finally{J.p=i,u!==null&&s.types!==null&&(u.types=s.types),G.T=u}}function Xh(){}function zu(e,t,a,l){if(e.tag!==5)throw Error(j(476));var n=gd(e).queue;md(e,n,t,Ea,a===null?Xh:function(){return hd(e),a(l)})}function gd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ea,baseState:Ea,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:Ea},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function hd(e){var t=gd(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},We())}function Ms(){return De(vn)}function pd(){return fe().memoizedState}function yd(){return fe().memoizedState}function Zh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=We();e=ua(a);var l=sa(t,e,a);l!==null&&(Be(l,t,a),Fl(l,t,a)),t={cache:ps()},e.payload=t;return}t=t.return}}function Vh(e,t,a){var l=We();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lc(e)?bd(t,a):(a=ds(e,t,a,l),a!==null&&(Be(a,e,l),xd(a,t,l)))}function vd(e,t,a){var l=We();en(e,t,a,l)}function en(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lc(e))bd(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,Fe(s,u))return Ii(e,t,n,0),ee===null&&Fi(),!1}catch{}finally{}if(a=ds(e,t,n,l),a!==null)return Be(a,e,l),xd(a,t,l),!0}return!1}function _s(e,t,a,l){if(l={lane:2,revertLane:Ls(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},lc(e)){if(t)throw Error(j(479))}else t=ds(e,a,l,2),t!==null&&Be(t,e,2)}function lc(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function bd(e,t){ol=Ai=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function xd(e,t,a){if(a&4194048){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,nf(e,a)}}var hn={readContext:De,use:tc,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useLayoutEffect:se,useInsertionEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useSyncExternalStore:se,useId:se,useHostTransitionStatus:se,useFormState:se,useActionState:se,useOptimistic:se,useMemoCache:se,useCacheRefresh:se};hn.useEffectEvent=se;var Sd={readContext:De,use:tc,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Yr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ni(4194308,4,sd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){ni(4,2,e,t)},useMemo:function(e,t){var a=_e();t=t===void 0?null:t;var l=e();if(Ra){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=_e();if(a!==void 0){var n=a(t);if(Ra){ea(!0);try{a(t)}finally{ea(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Vh.bind(null,Y,e),[l.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:function(e){e=Tu(e);var t=e.queue,a=vd.bind(null,Y,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ds,useDeferredValue:function(e,t){var a=_e();return Os(a,e,t)},useTransition:function(){var e=Tu(!1);return e=md.bind(null,Y,e.queue,!0,!1),_e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=Y,n=_e();if(V){if(a===void 0)throw Error(j(407));a=a()}else{if(a=t(),ee===null)throw Error(j(349));X&127||Jf(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Yr(Wf.bind(null,l,i,e),[e]),l.flags|=2048,vl(9,{destroy:void 0},$f.bind(null,l,i,a,t),null),a},useId:function(){var e=_e(),t=ee.identifierPrefix;if(V){var a=vt,l=yt;a=(l&~(1<<32-$e(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ti++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Yh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:Hr,useActionState:Hr,useOptimistic:function(e){var t=_e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=_s.bind(null,Y,!0,a),a.dispatch=t,[e,t]},useMemoCache:Es,useCacheRefresh:function(){return _e().memoizedState=Zh.bind(null,Y)},useEffectEvent:function(e){var t=_e(),a={impl:e};return t.memoizedState=a,function(){if(K&2)throw Error(j(440));return a.impl.apply(void 0,arguments)}}},ws={readContext:De,use:tc,useCallback:od,useContext:De,useEffect:Cs,useImperativeHandle:rd,useInsertionEffect:cd,useLayoutEffect:ud,useMemo:fd,useReducer:li,useRef:nd,useState:function(){return li(Yt)},useDebugValue:Ds,useDeferredValue:function(e,t){var a=fe();return dd(a,P.memoizedState,e,t)},useTransition:function(){var e=li(Yt)[0],t=fe().memoizedState;return[typeof e=="boolean"?e:Cn(e),t]},useSyncExternalStore:Kf,useId:pd,useHostTransitionStatus:Ms,useFormState:Gr,useActionState:Gr,useOptimistic:function(e,t){var a=fe();return Pf(a,P,e,t)},useMemoCache:Es,useCacheRefresh:yd};ws.useEffectEvent=id;var Nd={readContext:De,use:tc,useCallback:od,useContext:De,useEffect:Cs,useImperativeHandle:rd,useInsertionEffect:cd,useLayoutEffect:ud,useMemo:fd,useReducer:Oc,useRef:nd,useState:function(){return Oc(Yt)},useDebugValue:Ds,useDeferredValue:function(e,t){var a=fe();return P===null?Os(a,e,t):dd(a,P.memoizedState,e,t)},useTransition:function(){var e=Oc(Yt)[0],t=fe().memoizedState;return[typeof e=="boolean"?e:Cn(e),t]},useSyncExternalStore:Kf,useId:pd,useHostTransitionStatus:Ms,useFormState:kr,useActionState:kr,useOptimistic:function(e,t){var a=fe();return P!==null?Pf(a,P,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Es,useCacheRefresh:yd};Nd.useEffectEvent=id;function Mc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:ie({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cu={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=We(),n=ua(l);n.payload=t,a!=null&&(n.callback=a),t=sa(e,n,l),t!==null&&(Be(t,e,l),Fl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=We(),n=ua(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=sa(e,n,l),t!==null&&(Be(t,e,l),Fl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=We(),l=ua(a);l.tag=2,t!=null&&(l.callback=t),t=sa(e,l,a),t!==null&&(Be(t,e,a),Fl(t,e,a))}};function Br(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!on(a,l)||!on(n,i):!0}function Lr(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Cu.enqueueReplaceState(t,t.state,null)}function Ua(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=ie({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function jd(e){yi(e)}function Ad(e){console.error(e)}function Td(e){yi(e)}function Ei(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function qr(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Du(e,t,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Ei(e,t)},a}function Ed(e){return e=ua(e),e.tag=3,e}function zd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){qr(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){qr(t,a,l),typeof n!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Kh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&zl(t,a,n,!0),a=Ie.current,a!==null){switch(a.tag){case 31:case 13:return rt===null?Mi():a.alternate===null&&re===0&&(re=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Si?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),qc(e,l,n)),!1;case 22:return a.flags|=65536,l===Si?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),qc(e,l,n)),!1}throw Error(j(435,a.tag))}return qc(e,l,n),Mi(),!1}if(V)return t=Ie.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==pu&&(e=Error(j(422),{cause:l}),dn(ut(e,a)))):(l!==pu&&(t=Error(j(423),{cause:l}),dn(ut(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ut(l,a),n=Du(e.stateNode,l,n),Dc(e,n),re!==4&&(re=2)),!1;var i=Error(j(520),{cause:l});if(i=ut(i,a),ln===null?ln=[i]:ln.push(i),re!==4&&(re=2),t===null)return!0;l=ut(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Du(a.stateNode,l,e),Dc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ra===null||!ra.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ed(n),zd(n,e,a,l),Dc(a,n),!1}a=a.return}while(a!==null);return!1}var Rs=Error(j(461)),pe=!1;function Ee(e,t,a,l){t.child=e===null?Lf(t,null,a,l):wa(t,e.child,a,l)}function Qr(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return _a(t),l=Ns(e,t,a,u,i,n),s=js(),e!==null&&!pe?(As(e,t,n),Bt(e,t,n)):(V&&s&&gs(t),t.flags|=1,Ee(e,t,l,n),t.child)}function Xr(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!ms(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Cd(e,t,i,l,n)):(e=ti(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Us(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:on,a(u,l)&&e.ref===t.ref)return Bt(e,t,n)}return t.flags|=1,e=Rt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Cd(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(on(i,l)&&e.ref===t.ref)if(pe=!1,t.pendingProps=l=i,Us(e,n))e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Bt(e,t,n)}return Ou(e,t,a,l,n)}function Dd(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Zr(e,t,i,a,l)}if(a&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ai(t,i!==null?i.cachePool:null),i!==null?wr(t,i):ju(),Xf(t);else return l=t.lanes=536870912,Zr(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ai(t,i.cachePool),wr(t,i),It(),t.memoizedState=null):(e!==null&&ai(t,null),ju(),It());return Ee(e,t,n,a),t.child}function Ql(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Zr(e,t,a,l,n){var i=ys();return i=i===null?null:{parent:he._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ai(t,null),ju(),Xf(t),e!==null&&zl(e,t,l,!0),t.childLanes=n,null}function ii(e,t){return t=zi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Vr(e,t,a){return wa(t,e.child,null,a),e=ii(t,t.pendingProps),e.flags|=2,Xe(t),t.memoizedState=null,e}function Jh(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(V){if(l.mode==="hidden")return e=ii(t,l),t.lanes=536870912,Ql(null,e);if(Au(t),(e=le)?(e=Sm(e,st),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ga!==null?{id:yt,overflow:vt}:null,retryLane:536870912,hydrationErrors:null},a=Rf(e),a.return=t,t.child=a,Ce=t,le=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return ii(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Au(t),n)if(t.flags&256)t.flags&=-257,t=Vr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(pe||zl(e,t,a,!1),n=(a&e.childLanes)!==0,pe||n){if(l=ee,l!==null&&(u=cf(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ya(e,u),Be(l,e,u),Rs;Mi(),t=Vr(e,t,a)}else e=i.treeContext,le=ot(u.nextSibling),Ce=t,V=!0,ca=null,st=!1,e!==null&&Hf(t,e),t=ii(t,l),t.flags|=4096;return t}return e=Rt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ci(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(j(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ou(e,t,a,l,n){return _a(t),a=Ns(e,t,a,l,void 0,n),l=js(),e!==null&&!pe?(As(e,t,n),Bt(e,t,n)):(V&&l&&gs(t),t.flags|=1,Ee(e,t,a,n),t.child)}function Kr(e,t,a,l,n,i){return _a(t),t.updateQueue=null,a=Vf(t,l,a,n),Zf(e),l=js(),e!==null&&!pe?(As(e,t,i),Bt(e,t,i)):(V&&l&&gs(t),t.flags|=1,Ee(e,t,a,i),t.child)}function Jr(e,t,a,l,n){if(_a(t),t.stateNode===null){var i=tl,u=a.contextType;typeof u=="object"&&u!==null&&(i=De(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},bs(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?De(u):tl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Mc(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Cu.enqueueReplaceState(i,i.state,null),Pl(t,l,i,n),Il(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,r=Ua(a,s);i.props=r;var d=i.context,p=a.contextType;u=tl,typeof p=="object"&&p!==null&&(u=De(p));var v=a.getDerivedStateFromProps;p=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||d!==u)&&Lr(t,i,l,u),$t=!1;var m=t.memoizedState;i.state=m,Pl(t,l,i,n),Il(),d=t.memoizedState,s||m!==d||$t?(typeof v=="function"&&(Mc(t,a,v,l),d=t.memoizedState),(r=$t||Br(t,a,r,l,m,d,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=d),i.props=l,i.state=d,i.context=u,l=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Su(e,t),u=t.memoizedProps,p=Ua(a,u),i.props=p,v=t.pendingProps,m=i.context,d=a.contextType,r=tl,typeof d=="object"&&d!==null&&(r=De(d)),s=a.getDerivedStateFromProps,(d=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||m!==r)&&Lr(t,i,l,r),$t=!1,m=t.memoizedState,i.state=m,Pl(t,l,i,n),Il();var y=t.memoizedState;u!==v||m!==y||$t||e!==null&&e.dependencies!==null&&xi(e.dependencies)?(typeof s=="function"&&(Mc(t,a,s,l),y=t.memoizedState),(p=$t||Br(t,a,p,l,m,y,r)||e!==null&&e.dependencies!==null&&xi(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,y,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,y,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=y),i.props=l,i.state=y,i.context=r,l=p):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ci(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=wa(t,e.child,null,n),t.child=wa(t,null,a,n)):Ee(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Bt(e,t,n),e}function $r(e,t,a,l){return Ma(),t.flags|=256,Ee(e,t,a,l),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:kf()}}function Rc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ve),e}function Od(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(oe.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(V){if(n?Ft(t):It(),(e=le)?(e=Sm(e,st),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ga!==null?{id:yt,overflow:vt}:null,retryLane:536870912,hydrationErrors:null},a=Rf(e),a.return=t,t.child=a,Ce=t,le=null)):e=null,e===null)throw ha(t);return Xu(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(It(),n=t.mode,s=zi({mode:"hidden",children:s},n),l=za(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=wc(a),l.childLanes=Rc(e,u,a),t.memoizedState=_c,Ql(null,l)):(Ft(t),Mu(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(i)t.flags&256?(Ft(t),t.flags&=-257,t=Uc(e,t,a)):t.memoizedState!==null?(It(),t.child=e.child,t.flags|=128,t=null):(It(),s=l.fallback,n=t.mode,l=zi({mode:"visible",children:l.children},n),s=za(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,wa(t,e.child,null,a),l=t.child,l.memoizedState=wc(a),l.childLanes=Rc(e,u,a),t.memoizedState=_c,t=Ql(null,l));else if(Ft(t),Xu(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var d=u.dgst;u=d,l=Error(j(419)),l.stack="",l.digest=u,dn({value:l,source:null,stack:null}),t=Uc(e,t,a)}else if(pe||zl(e,t,a,!1),u=(a&e.childLanes)!==0,pe||u){if(u=ee,u!==null&&(l=cf(u,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,Ya(e,l),Be(u,e,l),Rs;Qu(s)||Mi(),t=Uc(e,t,a)}else Qu(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,le=ot(s.nextSibling),Ce=t,V=!0,ca=null,st=!1,e!==null&&Hf(t,e),t=Mu(t,l.children),t.flags|=4096);return t}return n?(It(),s=l.fallback,n=t.mode,r=e.child,d=r.sibling,l=Rt(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,d!==null?s=Rt(d,s):(s=za(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,Ql(null,l),l=t.child,s=e.child.memoizedState,s===null?s=wc(a):(n=s.cachePool,n!==null?(r=he._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=kf(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=Rc(e,u,a),t.memoizedState=_c,Ql(e.child,l)):(Ft(t),a=e.child,e=a.sibling,a=Rt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Mu(e,t){return t=zi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zi(e,t){return e=Ze(22,e,null,t),e.lanes=0,e}function Uc(e,t,a){return wa(t,e.child,null,a),e=Mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wr(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),vu(e.return,t,a)}function Hc(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Md(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=oe.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,te(oe,u),Ee(e,t,l,a),l=V?fn:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wr(e,a,t);else if(e.tag===19)Wr(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ji(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Hc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ji(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Hc(t,!0,a,null,i,l);break;case"together":Hc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Bt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,!(a&t.childLanes))if(e!==null){if(zl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,a=Rt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Rt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Us(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&xi(e)))}function $h(e,t,a){switch(t.tag){case 3:mi(t,t.stateNode.containerInfo),Wt(t,he,e.memoizedState.cache),Ma();break;case 27:case 5:iu(t);break;case 4:mi(t,t.stateNode.containerInfo);break;case 10:Wt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Au(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ft(t),t.flags|=128,null):a&t.child.childLanes?Od(e,t,a):(Ft(t),e=Bt(e,t,a),e!==null?e.sibling:null);Ft(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(zl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Md(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),te(oe,oe.current),l)break;return null;case 22:return t.lanes=0,Dd(e,t,a,t.pendingProps);case 24:Wt(t,he,e.memoizedState.cache)}return Bt(e,t,a)}function _d(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)pe=!0;else{if(!Us(e,a)&&!(t.flags&128))return pe=!1,$h(e,t,a);pe=!!(e.flags&131072)}else pe=!1,V&&t.flags&1048576&&Uf(t,fn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e=="function")ms(e)?(l=Ua(e,l),t.tag=1,t=Jr(null,t,e,l,a)):(t.tag=0,t=Ou(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Pu){t.tag=11,t=Qr(null,t,e,l,a);break e}else if(n===es){t.tag=14,t=Xr(null,t,e,l,a);break e}}throw t=lu(e)||e,Error(j(306,t,""))}}return t;case 0:return Ou(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ua(l,t.pendingProps),Jr(e,t,l,n,a);case 3:e:{if(mi(t,t.stateNode.containerInfo),e===null)throw Error(j(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Su(e,t),Pl(t,l,null,a);var u=t.memoizedState;if(l=u.cache,Wt(t,he,l),l!==i.cache&&bu(t,[he],a,!0),Il(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=$r(e,t,l,a);break e}else if(l!==n){n=ut(Error(j(424)),t),dn(n),t=$r(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=ot(e.firstChild),Ce=t,V=!0,ca=null,st=!0,a=Lf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ma(),l===n){t=Bt(e,t,a);break e}Ee(e,t,l,a)}t=t.child}return t;case 26:return ci(e,t),e===null?(a=yo(t.type,null,t.pendingProps,null))?t.memoizedState=a:V||(a=t.type,e=t.pendingProps,l=Ui(ia.current).createElement(a),l[ze]=t,l[Le]=e,Oe(l,a,e),je(l),t.stateNode=l):t.memoizedState=yo(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return iu(t),e===null&&V&&(l=t.stateNode=Nm(t.type,t.pendingProps,ia.current),Ce=t,st=!0,n=le,ba(t.type)?(Zu=n,le=ot(l.firstChild)):le=n),Ee(e,t,t.pendingProps.children,a),ci(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((n=l=le)&&(l=Tp(l,t.type,t.pendingProps,st),l!==null?(t.stateNode=l,Ce=t,le=ot(l.firstChild),st=!1,n=!0):n=!1),n||ha(t)),iu(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Lu(n,i)?l=null:u!==null&&Lu(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Ns(e,t,Bh,null,null,a),vn._currentValue=n),ci(e,t),Ee(e,t,l,a),t.child;case 6:return e===null&&V&&((e=a=le)&&(a=Ep(a,t.pendingProps,st),a!==null?(t.stateNode=a,Ce=t,le=null,e=!0):e=!1),e||ha(t)),null;case 13:return Od(e,t,a);case 4:return mi(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=wa(t,null,l,a):Ee(e,t,l,a),t.child;case 11:return Qr(e,t,t.type,t.pendingProps,a);case 7:return Ee(e,t,t.pendingProps,a),t.child;case 8:return Ee(e,t,t.pendingProps.children,a),t.child;case 12:return Ee(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Wt(t,t.type,l.value),Ee(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,_a(t),n=De(n),l=l(n),t.flags|=1,Ee(e,t,l,a),t.child;case 14:return Xr(e,t,t.type,t.pendingProps,a);case 15:return Cd(e,t,t.type,t.pendingProps,a);case 19:return Md(e,t,a);case 31:return Jh(e,t,a);case 22:return Dd(e,t,a,t.pendingProps);case 24:return _a(t),l=De(he),e===null?(n=ys(),n===null&&(n=ee,i=ps(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},bs(t),Wt(t,he,n)):(e.lanes&a&&(Su(e,t),Pl(t,null,null,a),Il()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Wt(t,he,l)):(l=i.cache,Wt(t,he,l),l!==n.cache&&bu(t,[he],a,!0))),Ee(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function Tt(e){e.flags|=4}function Gc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(am())e.flags|=8192;else throw Da=Si,vs}else e.flags&=-16777217}function Fr(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Tm(t))if(am())e.flags|=8192;else throw Da=Si,vs}function Zn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?af():536870912,e.lanes|=t,bl|=t)}function Gl(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Wh(e,t,a){var l=t.pendingProps;switch(hs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ae(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ut(he),ml(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(La(t)?Tt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Cc())),ae(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Tt(t),i!==null?(ae(t),Fr(t,i)):(ae(t),Gc(t,n,null,l,a))):i?i!==e.memoizedState?(Tt(t),ae(t),Fr(t,i)):(ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Tt(t),ae(t),Gc(t,n,e,l,a)),null;case 27:if(gi(t),a=ia.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Tt(t);else{if(!l){if(t.stateNode===null)throw Error(j(166));return ae(t),null}e=xt.current,La(t)?Er(t):(e=Nm(n,l,a),t.stateNode=e,Tt(t))}return ae(t),null;case 5:if(gi(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Tt(t);else{if(!l){if(t.stateNode===null)throw Error(j(166));return ae(t),null}if(i=xt.current,La(t))Er(t);else{var u=Ui(ia.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[ze]=t,i[Le]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Oe(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Tt(t)}}return ae(t),Gc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Tt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(j(166));if(e=ia.current,La(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ce,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||vm(e.nodeValue,a)),e||ha(t,!0)}else e=Ui(e).createTextNode(l),e[ze]=t,t.stateNode=e}return ae(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=La(t),a!==null){if(e===null){if(!l)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[ze]=t}else Ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),e=!1}else a=Cc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Xe(t),t):(Xe(t),null);if(t.flags&128)throw Error(j(558))}return ae(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=La(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(j(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(j(317));n[ze]=t}else Ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),n=!1}else n=Cc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Xe(t),t):(Xe(t),null)}return Xe(t),t.flags&128?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Zn(t,t.updateQueue),ae(t),null);case 4:return ml(),e===null&&qs(t.stateNode.containerInfo),ae(t),null;case 10:return Ut(t.type),ae(t),null;case 19:if(Ae(oe),l=t.memoizedState,l===null)return ae(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Gl(l,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ji(e),i!==null){for(t.flags|=128,Gl(l,!1),e=i.updateQueue,t.updateQueue=e,Zn(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)wf(a,e),a=a.sibling;return te(oe,oe.current&1|2),V&&Dt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Ke()>Di&&(t.flags|=128,n=!0,Gl(l,!1),t.lanes=4194304)}else{if(!n)if(e=ji(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Zn(t,e),Gl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!V)return ae(t),null}else 2*Ke()-l.renderingStartTime>Di&&a!==536870912&&(t.flags|=128,n=!0,Gl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ke(),e.sibling=null,a=oe.current,te(oe,n?a&1|2:a&1),V&&Dt(t,l.treeForkCount),e):(ae(t),null);case 22:case 23:return Xe(t),xs(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?a&536870912&&!(t.flags&128)&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),a=t.updateQueue,a!==null&&Zn(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Ae(Ca),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ut(he),ae(t),null;case 25:return null;case 30:return null}throw Error(j(156,t.tag))}function Fh(e,t){switch(hs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ut(he),ml(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gi(t),null;case 31:if(t.memoizedState!==null){if(Xe(t),t.alternate===null)throw Error(j(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xe(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(oe),null;case 4:return ml(),null;case 10:return Ut(t.type),null;case 22:case 23:return Xe(t),xs(),e!==null&&Ae(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ut(he),null;case 25:return null;default:return null}}function wd(e,t){switch(hs(t),t.tag){case 3:Ut(he),ml();break;case 26:case 27:case 5:gi(t);break;case 4:ml();break;case 31:t.memoizedState!==null&&Xe(t);break;case 13:Xe(t);break;case 19:Ae(oe);break;case 10:Ut(t.type);break;case 22:case 23:Xe(t),xs(),e!==null&&Ae(Ca);break;case 24:Ut(he)}}function Dn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){W(t,t.return,s)}}function pa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var r=a,d=s;try{d()}catch(p){W(n,r,p)}}}l=l.next}while(l!==i)}}catch(p){W(t,t.return,p)}}function Rd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Qf(t,a)}catch(l){W(e,e.return,l)}}}function Ud(e,t,a){a.props=Ua(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){W(e,t,l)}}function tn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){W(e,t,n)}}function bt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){W(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){W(e,t,n)}else a.current=null}function Hd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){W(e,e.return,n)}}function kc(e,t,a){try{var l=e.stateNode;bp(l,e.type,a,t),l[Le]=t}catch(n){W(e,e.return,n)}}function Gd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _u(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=_t));else if(l!==4&&(l===27&&ba(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(_u(e,t,a),e=e.sibling;e!==null;)_u(e,t,a),e=e.sibling}function Ci(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ci(e,t,a),e=e.sibling;e!==null;)Ci(e,t,a),e=e.sibling}function kd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Oe(t,l,a),t[ze]=e,t[Le]=a}catch(i){W(e,e.return,i)}}var Ot=!1,ge=!1,Bc=!1,Ir=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Ih(e,t){if(e=e.containerInfo,Yu=Yi,e=Tf(e),os(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,r=-1,d=0,p=0,v=e,m=null;t:for(;;){for(var y;v!==a||n!==0&&v.nodeType!==3||(s=u+n),v!==i||l!==0&&v.nodeType!==3||(r=u+l),v.nodeType===3&&(u+=v.nodeValue.length),(y=v.firstChild)!==null;)m=v,v=y;for(;;){if(v===e)break t;if(m===a&&++d===n&&(s=u),m===i&&++p===l&&(r=u),(y=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=y}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bu={focusedElem:e,selectionRange:a},Yi=!1,Ne=t;Ne!==null;)if(t=Ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ne=e;else for(;Ne!==null;){switch(t=Ne,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var S=Ua(a.type,n);e=l.getSnapshotBeforeUpdate(S,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(T){W(a,a.return,T)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)qu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(j(163))}if(e=t.sibling,e!==null){e.return=t.return,Ne=e;break}Ne=t.return}}function Yd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:zt(e,a),l&4&&Dn(5,a);break;case 1:if(zt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){W(a,a.return,u)}else{var n=Ua(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){W(a,a.return,u)}}l&64&&Rd(a),l&512&&tn(a,a.return);break;case 3:if(zt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Qf(e,t)}catch(u){W(a,a.return,u)}}break;case 27:t===null&&l&4&&kd(a);case 26:case 5:zt(e,a),t===null&&l&4&&Hd(a),l&512&&tn(a,a.return);break;case 12:zt(e,a);break;case 31:zt(e,a),l&4&&qd(e,a);break;case 13:zt(e,a),l&4&&Qd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=up.bind(null,a),zp(e,a))));break;case 22:if(l=a.memoizedState!==null||Ot,!l){t=t!==null&&t.memoizedState!==null||ge,n=Ot;var i=ge;Ot=l,(ge=t)&&!i?Ct(e,a,(a.subtreeFlags&8772)!==0):zt(e,a),Ot=n,ge=i}break;case 30:break;default:zt(e,a)}}function Bd(e){var t=e.alternate;t!==null&&(e.alternate=null,Bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ns(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,ke=!1;function Et(e,t,a){for(a=a.child;a!==null;)Ld(e,t,a),a=a.sibling}function Ld(e,t,a){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Nn,a)}catch{}switch(a.tag){case 26:ge||bt(a,t),Et(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ge||bt(a,t);var l=ce,n=ke;ba(a.type)&&(ce=a.stateNode,ke=!1),Et(e,t,a),cn(a.stateNode),ce=l,ke=n;break;case 5:ge||bt(a,t);case 6:if(l=ce,n=ke,ce=null,Et(e,t,a),ce=l,ke=n,ce!==null)if(ke)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(a.stateNode)}catch(i){W(a,t,i)}else try{ce.removeChild(a.stateNode)}catch(i){W(a,t,i)}break;case 18:ce!==null&&(ke?(e=ce,fo(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),jl(e)):fo(ce,a.stateNode));break;case 4:l=ce,n=ke,ce=a.stateNode.containerInfo,ke=!0,Et(e,t,a),ce=l,ke=n;break;case 0:case 11:case 14:case 15:pa(2,a,t),ge||pa(4,a,t),Et(e,t,a);break;case 1:ge||(bt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ud(a,t,l)),Et(e,t,a);break;case 21:Et(e,t,a);break;case 22:ge=(l=ge)||a.memoizedState!==null,Et(e,t,a),ge=l;break;default:Et(e,t,a)}}function qd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{jl(e)}catch(a){W(t,t.return,a)}}}function Qd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jl(e)}catch(a){W(t,t.return,a)}}function Ph(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ir),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ir),t;default:throw Error(j(435,e.tag))}}function Vn(e,t){var a=Ph(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=sp.bind(null,e,l);l.then(n,n)}})}function He(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(ba(s.type)){ce=s.stateNode,ke=!1;break e}break;case 5:ce=s.stateNode,ke=!1;break e;case 3:case 4:ce=s.stateNode.containerInfo,ke=!0;break e}s=s.return}if(ce===null)throw Error(j(160));Ld(i,u,n),ce=null,ke=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Xd(t,e),t=t.sibling}var gt=null;function Xd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:He(t,e),Ge(e),l&4&&(pa(3,e,e.return),Dn(3,e),pa(5,e,e.return));break;case 1:He(t,e),Ge(e),l&512&&(ge||a===null||bt(a,a.return)),l&64&&Ot&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=gt;if(He(t,e),Ge(e),l&512&&(ge||a===null||bt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Tn]||i[ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Oe(i,l,a),i[ze]=e,je(i),l=i;break e;case"link":var u=bo("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(l),Oe(i,l,a),n.head.appendChild(i);break;case"meta":if(u=bo("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(l),Oe(i,l,a),n.head.appendChild(i);break;default:throw Error(j(468,l))}i[ze]=e,je(i),l=i}e.stateNode=l}else xo(n,e.type,e.stateNode);else e.stateNode=vo(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?xo(n,e.type,e.stateNode):vo(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&kc(e,e.memoizedProps,a.memoizedProps)}break;case 27:He(t,e),Ge(e),l&512&&(ge||a===null||bt(a,a.return)),a!==null&&l&4&&kc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(He(t,e),Ge(e),l&512&&(ge||a===null||bt(a,a.return)),e.flags&32){n=e.stateNode;try{hl(n,"")}catch(S){W(e,e.return,S)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,kc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Bc=!0);break;case 6:if(He(t,e),Ge(e),l&4){if(e.stateNode===null)throw Error(j(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(S){W(e,e.return,S)}}break;case 3:if(ri=null,n=gt,gt=Hi(t.containerInfo),He(t,e),gt=n,Ge(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{jl(t.containerInfo)}catch(S){W(e,e.return,S)}Bc&&(Bc=!1,Zd(e));break;case 4:l=gt,gt=Hi(e.stateNode.containerInfo),He(t,e),Ge(e),gt=l;break;case 12:He(t,e),Ge(e);break;case 31:He(t,e),Ge(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vn(e,l)));break;case 13:He(t,e),Ge(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=Ke()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vn(e,l)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,d=Ot,p=ge;if(Ot=d||n,ge=p||r,He(t,e),ge=p,Ot=d,Ge(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||r||Ot||ge||Ta(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=r.stateNode;var v=r.memoizedProps.style,m=v!=null&&v.hasOwnProperty("display")?v.display:null;s.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(S){W(r,r.return,S)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(S){W(r,r.return,S)}}}else if(t.tag===18){if(a===null){r=t;try{var y=r.stateNode;n?mo(y,!0):mo(r.stateNode,!1)}catch(S){W(r,r.return,S)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Vn(e,a))));break;case 19:He(t,e),Ge(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vn(e,l)));break;case 30:break;case 21:break;default:He(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Gd(l)){a=l;break}l=l.return}if(a==null)throw Error(j(160));switch(a.tag){case 27:var n=a.stateNode,i=Yc(e);Ci(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(hl(u,""),a.flags&=-33);var s=Yc(e);Ci(e,s,u);break;case 3:case 4:var r=a.stateNode.containerInfo,d=Yc(e);_u(e,d,r);break;default:throw Error(j(161))}}catch(p){W(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function zt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Yd(e,t.alternate,t),t=t.sibling}function Ta(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:pa(4,t,t.return),Ta(t);break;case 1:bt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ud(t,t.return,a),Ta(t);break;case 27:cn(t.stateNode);case 26:case 5:bt(t,t.return),Ta(t);break;case 22:t.memoizedState===null&&Ta(t);break;case 30:Ta(t);break;default:Ta(t)}e=e.sibling}}function Ct(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ct(n,i,a),Dn(4,i);break;case 1:if(Ct(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){W(l,l.return,d)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)qf(r[n],s)}catch(d){W(l,l.return,d)}}a&&u&64&&Rd(i),tn(i,i.return);break;case 27:kd(i);case 26:case 5:Ct(n,i,a),a&&l===null&&u&4&&Hd(i),tn(i,i.return);break;case 12:Ct(n,i,a);break;case 31:Ct(n,i,a),a&&u&4&&qd(n,i);break;case 13:Ct(n,i,a),a&&u&4&&Qd(n,i);break;case 22:i.memoizedState===null&&Ct(n,i,a),tn(i,i.return);break;case 30:break;default:Ct(n,i,a)}t=t.sibling}}function Hs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&zn(a))}function Gs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zn(e))}function mt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vd(e,t,a,l),t=t.sibling}function Vd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:mt(e,t,a,l),n&2048&&Dn(9,t);break;case 1:mt(e,t,a,l);break;case 3:mt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zn(e)));break;case 12:if(n&2048){mt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){W(t,t.return,r)}}else mt(e,t,a,l);break;case 31:mt(e,t,a,l);break;case 13:mt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?mt(e,t,a,l):an(e,t):i._visibility&2?mt(e,t,a,l):(i._visibility|=2,Za(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Hs(u,t);break;case 24:mt(e,t,a,l),n&2048&&Gs(t.alternate,t);break;default:mt(e,t,a,l)}}function Za(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=a,r=l,d=u.flags;switch(u.tag){case 0:case 11:case 15:Za(i,u,s,r,n),Dn(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&2?Za(i,u,s,r,n):an(i,u):(p._visibility|=2,Za(i,u,s,r,n)),n&&d&2048&&Hs(u.alternate,u);break;case 24:Za(i,u,s,r,n),n&&d&2048&&Gs(u.alternate,u);break;default:Za(i,u,s,r,n)}t=t.sibling}}function an(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:an(a,l),n&2048&&Hs(l.alternate,l);break;case 24:an(a,l),n&2048&&Gs(l.alternate,l);break;default:an(a,l)}t=t.sibling}}var Xl=8192;function qa(e,t,a){if(e.subtreeFlags&Xl)for(e=e.child;e!==null;)Kd(e,t,a),e=e.sibling}function Kd(e,t,a){switch(e.tag){case 26:qa(e,t,a),e.flags&Xl&&e.memoizedState!==null&&Yp(a,gt,e.memoizedState,e.memoizedProps);break;case 5:qa(e,t,a);break;case 3:case 4:var l=gt;gt=Hi(e.stateNode.containerInfo),qa(e,t,a),gt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Xl,Xl=16777216,qa(e,t,a),Xl=l):qa(e,t,a));break;default:qa(e,t,a)}}function Jd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ne=l,Wd(l,e)}Jd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$d(e),e=e.sibling}function $d(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&pa(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ui(e)):kl(e);break;default:kl(e)}}function ui(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ne=l,Wd(l,e)}Jd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:pa(8,t,t.return),ui(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ui(t));break;default:ui(t)}e=e.sibling}}function Wd(e,t){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:pa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ne=l;else e:for(a=e;Ne!==null;){l=Ne;var n=l.sibling,i=l.return;if(Bd(l),l===a){Ne=null;break e}if(n!==null){n.return=i,Ne=n;break e}Ne=i}}}var ep={getCacheForType:function(e){var t=De(he),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return De(he).controller.signal}},tp=typeof WeakMap=="function"?WeakMap:Map,K=0,ee=null,Q=null,X=0,$=0,Qe=null,aa=!1,Dl=!1,ks=!1,Lt=0,re=0,ya=0,Oa=0,Ys=0,Ve=0,bl=0,ln=null,Ye=null,wu=!1,nc=0,Fd=0,Di=1/0,Oi=null,ra=null,be=0,oa=null,xl=null,Ht=0,Ru=0,Uu=null,Id=null,nn=0,Hu=null;function We(){return K&2&&X!==0?X&-X:G.T!==null?Ls():uf()}function Pd(){if(Ve===0)if(!(X&536870912)||V){var e=kn;kn<<=1,!(kn&3932160)&&(kn=262144),Ve=e}else Ve=536870912;return e=Ie.current,e!==null&&(e.flags|=32),Ve}function Be(e,t,a){(e===ee&&($===2||$===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),la(e,X,Ve,!1)),An(e,a),(!(K&2)||e!==ee)&&(e===ee&&(!(K&2)&&(Oa|=a),re===4&&la(e,X,Ve,!1)),jt(e))}function em(e,t,a){if(K&6)throw Error(j(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||jn(e,t),n=l?np(e,t):Lc(e,t,!0),i=l;do{if(n===0){Dl&&!l&&la(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!ap(a)){n=Lc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=ln;var r=s.current.memoizedState.isDehydrated;if(r&&(Sl(s,u).flags|=256),u=Lc(s,u,!1),u!==2){if(ks&&!r){s.errorRecoveryDisabledLanes|=i,Oa|=i,n=4;break e}i=Ye,Ye=n,i!==null&&(Ye===null?Ye=i:Ye.push.apply(Ye,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Sl(e,0),la(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t)break;case 6:la(l,t,Ve,!aa);break e;case 2:Ye=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(n=nc+300-Ke(),10<n)){if(la(l,t,Ve,!aa),Ki(l,0,!0)!==0)break e;Ht=t,l.timeoutHandle=xm(Pr.bind(null,l,a,Ye,Oi,wu,t,Ve,Oa,bl,aa,i,"Throttled",-0,0),n);break e}Pr(l,a,Ye,Oi,wu,t,Ve,Oa,bl,aa,i,null,-0,0)}}break}while(!0);jt(e)}function Pr(e,t,a,l,n,i,u,s,r,d,p,v,m,y){if(e.timeoutHandle=-1,v=t.subtreeFlags,v&8192||(v&16785408)===16785408){v={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},Kd(t,i,v);var S=(i&62914560)===i?nc-Ke():(i&4194048)===i?Fd-Ke():0;if(S=Bp(v,S),S!==null){Ht=i,e.cancelPendingCommit=S(to.bind(null,e,t,i,a,l,n,u,s,r,p,v,null,m,y)),la(e,i,u,!d);return}}to(e,t,i,a,l,n,u,s,r)}function ap(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Fe(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function la(e,t,a,l){t&=~Ys,t&=~Oa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-$e(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&lf(e,a,t)}function ic(){return K&6?!0:(On(0),!1)}function Bs(){if(Q!==null){if($===0)var e=Q.return;else e=Q,wt=Ba=null,Ts(e),rl=null,mn=0,e=Q;for(;e!==null;)wd(e.alternate,e),e=e.return;Q=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Np(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ht=0,Bs(),ee=e,Q=a=Rt(e.current,null),X=t,$=0,Qe=null,aa=!1,Dl=jn(e,t),ks=!1,bl=Ve=Ys=Oa=ya=re=0,Ye=ln=null,wu=!1,t&8&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-$e(l),i=1<<n;t|=e[n],l&=~i}return Lt=t,Fi(),a}function tm(e,t){Y=null,G.H=hn,t===Cl||t===Pi?(t=Mr(),$=3):t===vs?(t=Mr(),$=4):$=t===Rs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qe=t,Q===null&&(re=1,Ei(e,ut(t,e.current)))}function am(){var e=Ie.current;return e===null?!0:(X&4194048)===X?rt===null:(X&62914560)===X||X&536870912?e===rt:!1}function lm(){var e=G.H;return G.H=hn,e===null?hn:e}function nm(){var e=G.A;return G.A=ep,e}function Mi(){re=4,aa||(X&4194048)!==X&&Ie.current!==null||(Dl=!0),!(ya&134217727)&&!(Oa&134217727)||ee===null||la(ee,X,Ve,!1)}function Lc(e,t,a){var l=K;K|=2;var n=lm(),i=nm();(ee!==e||X!==t)&&(Oi=null,Sl(e,t)),t=!1;var u=re;e:do try{if($!==0&&Q!==null){var s=Q,r=Qe;switch($){case 8:Bs(),u=6;break e;case 3:case 2:case 9:case 6:Ie.current===null&&(t=!0);var d=$;if($=0,Qe=null,nl(e,s,r,d),a&&Dl){u=0;break e}break;default:d=$,$=0,Qe=null,nl(e,s,r,d)}}lp(),u=re;break}catch(p){tm(e,p)}while(!0);return t&&e.shellSuspendCounter++,wt=Ba=null,K=l,G.H=n,G.A=i,Q===null&&(ee=null,X=0,Fi()),u}function lp(){for(;Q!==null;)im(Q)}function np(e,t){var a=K;K|=2;var l=lm(),n=nm();ee!==e||X!==t?(Oi=null,Di=Ke()+500,Sl(e,t)):Dl=jn(e,t);e:do try{if($!==0&&Q!==null){t=Q;var i=Qe;t:switch($){case 1:$=0,Qe=null,nl(e,t,i,1);break;case 2:case 9:if(Or(i)){$=0,Qe=null,eo(t);break}t=function(){$!==2&&$!==9||ee!==e||($=7),jt(e)},i.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Or(i)?($=0,Qe=null,eo(t)):($=0,Qe=null,nl(e,t,i,7));break;case 5:var u=null;switch(Q.tag){case 26:u=Q.memoizedState;case 5:case 27:var s=Q;if(u?Tm(u):s.stateNode.complete){$=0,Qe=null;var r=s.sibling;if(r!==null)Q=r;else{var d=s.return;d!==null?(Q=d,cc(d)):Q=null}break t}}$=0,Qe=null,nl(e,t,i,5);break;case 6:$=0,Qe=null,nl(e,t,i,6);break;case 8:Bs(),re=6;break e;default:throw Error(j(462))}}ip();break}catch(p){tm(e,p)}while(!0);return wt=Ba=null,G.H=l,G.A=n,K=a,Q!==null?0:(ee=null,X=0,Fi(),re)}function ip(){for(;Q!==null&&!Cg();)im(Q)}function im(e){var t=_d(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?cc(e):Q=t}function eo(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Kr(a,t,t.pendingProps,t.type,void 0,X);break;case 11:t=Kr(a,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:Ts(t);default:wd(a,t),t=Q=wf(t,Lt),t=_d(a,t,Lt)}e.memoizedProps=e.pendingProps,t===null?cc(e):Q=t}function nl(e,t,a,l){wt=Ba=null,Ts(t),rl=null,mn=0;var n=t.return;try{if(Kh(e,n,t,a,X)){re=1,Ei(e,ut(a,e.current)),Q=null;return}}catch(i){if(n!==null)throw Q=n,i;re=1,Ei(e,ut(a,e.current)),Q=null;return}t.flags&32768?(V||l===1?e=!0:Dl||X&536870912?e=!1:(aa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ie.current,l!==null&&l.tag===13&&(l.flags|=16384))),cm(t,e)):cc(t)}function cc(e){var t=e;do{if(t.flags&32768){cm(t,aa);return}e=t.return;var a=Wh(t.alternate,t,Lt);if(a!==null){Q=a;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);re===0&&(re=5)}function cm(e,t){do{var a=Fh(e.alternate,e);if(a!==null){a.flags&=32767,Q=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Q=e;return}Q=e=a}while(e!==null);re=6,Q=null}function to(e,t,a,l,n,i,u,s,r){e.cancelPendingCommit=null;do uc();while(be!==0);if(K&6)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));if(i=t.lanes|t.childLanes,i|=fs,kg(e,a,i,u,s,r),e===ee&&(Q=ee=null,X=0),xl=t,oa=e,Ht=a,Ru=i,Uu=n,Id=l,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,rp(hi,function(){return fm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,t.subtreeFlags&13878||l){l=G.T,G.T=null,n=J.p,J.p=2,u=K,K|=4;try{Ih(e,t,a)}finally{K=u,J.p=n,G.T=l}}be=1,um(),sm(),rm()}}function um(){if(be===1){be=0;var e=oa,t=xl,a=(t.flags&13878)!==0;if(t.subtreeFlags&13878||a){a=G.T,G.T=null;var l=J.p;J.p=2;var n=K;K|=4;try{Xd(t,e);var i=Bu,u=Tf(e.containerInfo),s=i.focusedElem,r=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&Af(s.ownerDocument.documentElement,s)){if(r!==null&&os(s)){var d=r.start,p=r.end;if(p===void 0&&(p=d),"selectionStart"in s)s.selectionStart=d,s.selectionEnd=Math.min(p,s.value.length);else{var v=s.ownerDocument||document,m=v&&v.defaultView||window;if(m.getSelection){var y=m.getSelection(),S=s.textContent.length,T=Math.min(r.start,S),w=r.end===void 0?T:Math.min(r.end,S);!y.extend&&T>w&&(u=w,w=T,T=u);var o=jr(s,T),f=jr(s,w);if(o&&f&&(y.rangeCount!==1||y.anchorNode!==o.node||y.anchorOffset!==o.offset||y.focusNode!==f.node||y.focusOffset!==f.offset)){var g=v.createRange();g.setStart(o.node,o.offset),y.removeAllRanges(),T>w?(y.addRange(g),y.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),y.addRange(g))}}}}for(v=[],y=s;y=y.parentNode;)y.nodeType===1&&v.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<v.length;s++){var b=v[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Yi=!!Yu,Bu=Yu=null}finally{K=n,J.p=l,G.T=a}}e.current=t,be=2}}function sm(){if(be===2){be=0;var e=oa,t=xl,a=(t.flags&8772)!==0;if(t.subtreeFlags&8772||a){a=G.T,G.T=null;var l=J.p;J.p=2;var n=K;K|=4;try{Yd(e,t.alternate,t)}finally{K=n,J.p=l,G.T=a}}be=3}}function rm(){if(be===4||be===3){be=0,Dg();var e=oa,t=xl,a=Ht,l=Id;t.subtreeFlags&10256||t.flags&10256?be=5:(be=0,xl=oa=null,om(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ra=null),ls(a),t=t.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Nn,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=G.T,n=J.p,J.p=2,G.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{G.T=t,J.p=n}}Ht&3&&uc(),jt(e),n=e.pendingLanes,a&261930&&n&42?e===Hu?nn++:(nn=0,Hu=e):nn=0,On(0)}}function om(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,zn(t)))}function uc(){return um(),sm(),rm(),fm()}function fm(){if(be!==5)return!1;var e=oa,t=Ru;Ru=0;var a=ls(Ht),l=G.T,n=J.p;try{J.p=32>a?32:a,G.T=null,a=Uu,Uu=null;var i=oa,u=Ht;if(be=0,xl=oa=null,Ht=0,K&6)throw Error(j(331));var s=K;if(K|=4,$d(i.current),Vd(i,i.current,u,a),K=s,On(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Nn,i)}catch{}return!0}finally{J.p=n,G.T=l,om(e,t)}}function ao(e,t,a){t=ut(a,t),t=Du(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(An(e,2),jt(e))}function W(e,t,a){if(e.tag===3)ao(e,e,a);else for(;t!==null;){if(t.tag===3){ao(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ra===null||!ra.has(l))){e=ut(a,e),a=Ed(2),l=sa(t,a,2),l!==null&&(zd(a,l,t,e),An(l,2),jt(l));break}}t=t.return}}function qc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new tp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(ks=!0,n.add(a),e=cp.bind(null,e,t,a),t.then(e,e))}function cp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ee===e&&(X&a)===a&&(re===4||re===3&&(X&62914560)===X&&300>Ke()-nc?!(K&2)&&Sl(e,0):Ys|=a,bl===X&&(bl=0)),jt(e)}function dm(e,t){t===0&&(t=af()),e=Ya(e,t),e!==null&&(An(e,t),jt(e))}function up(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),dm(e,a)}function sp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(j(314))}l!==null&&l.delete(t),dm(e,a)}function rp(e,t){return ts(e,t)}var _i=null,Va=null,Gu=!1,wi=!1,Qc=!1,na=0;function jt(e){e!==Va&&e.next===null&&(Va===null?_i=Va=e:Va=Va.next=e),wi=!0,Gu||(Gu=!0,fp())}function On(e,t){if(!Qc&&wi){Qc=!0;do for(var a=!1,l=_i;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-$e(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,lo(l,i))}else i=X,i=Ki(l,l===ee?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(i&3)||jn(l,i)||(a=!0,lo(l,i));l=l.next}while(a);Qc=!1}}function op(){mm()}function mm(){wi=Gu=!1;var e=0;na!==0&&Sp()&&(e=na);for(var t=Ke(),a=null,l=_i;l!==null;){var n=l.next,i=gm(l,t);i===0?(l.next=null,a===null?_i=n:a.next=n,n===null&&(Va=a)):(a=l,(e!==0||i&3)&&(wi=!0)),l=n}be!==0&&be!==5||On(e),na!==0&&(na=0)}function gm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-$e(i),s=1<<u,r=n[u];r===-1?(!(s&a)||s&l)&&(n[u]=Gg(s,t)):r<=t&&(e.expiredLanes|=s),i&=~s}if(t=ee,a=X,a=Ki(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&yc(l),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||jn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&yc(l),ls(a)){case 2:case 8:a=ef;break;case 32:a=hi;break;case 268435456:a=tf;break;default:a=hi}return l=hm.bind(null,e),a=ts(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&yc(l),e.callbackPriority=2,e.callbackNode=null,2}function hm(e,t){if(be!==0&&be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(uc()&&e.callbackNode!==a)return null;var l=X;return l=Ki(e,e===ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(em(e,l,t),gm(e,Ke()),e.callbackNode!=null&&e.callbackNode===a?hm.bind(null,e):null)}function lo(e,t){if(uc())return null;em(e,t,!0)}function fp(){jp(function(){K&6?ts(Po,op):mm()})}function Ls(){if(na===0){var e=pl;e===0&&(e=Gn,Gn<<=1,!(Gn&261888)&&(Gn=256)),na=e}return na}function no(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:In(""+e)}function io(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function dp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=no((n[Le]||null).action),u=l.submitter;u&&(t=(t=u[Le]||null)?no(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Ji("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(na!==0){var r=u?io(n,u):new FormData(n);zu(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(s.preventDefault(),r=u?io(n,u):new FormData(n),zu(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Xc=0;Xc<hu.length;Xc++){var Zc=hu[Xc],mp=Zc.toLowerCase(),gp=Zc[0].toUpperCase()+Zc.slice(1);pt(mp,"on"+gp)}pt(zf,"onAnimationEnd");pt(Cf,"onAnimationIteration");pt(Df,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Oh,"onTransitionRun");pt(Mh,"onTransitionStart");pt(_h,"onTransitionCancel");pt(Of,"onTransitionEnd");gl("onMouseEnter",["mouseout","mouseover"]);gl("onMouseLeave",["mouseout","mouseover"]);gl("onPointerEnter",["pointerout","pointerover"]);gl("onPointerLeave",["pointerout","pointerover"]);Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function pm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var s=l[u],r=s.instance,d=s.currentTarget;if(s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(p){yi(p)}n.currentTarget=null,i=r}else for(u=0;u<l.length;u++){if(s=l[u],r=s.instance,d=s.currentTarget,s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(p){yi(p)}n.currentTarget=null,i=r}}}}function q(e,t){var a=t[uu];a===void 0&&(a=t[uu]=new Set);var l=e+"__bubble";a.has(l)||(ym(t,e,2,!1),a.add(l))}function Vc(e,t,a){var l=0;t&&(l|=4),ym(a,e,l,t)}var Kn="_reactListening"+Math.random().toString(36).slice(2);function qs(e){if(!e[Kn]){e[Kn]=!0,sf.forEach(function(a){a!=="selectionchange"&&(hp.has(a)||Vc(a,!1,e),Vc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kn]||(t[Kn]=!0,Vc("selectionchange",!1,t))}}function ym(e,t,a,l){switch(Om(t)){case 2:var n=Qp;break;case 8:n=Xp;break;default:n=Vs}a=n.bind(null,t,a,e),n=void 0,!du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Kc(e,t,a,l,n){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=$a(s),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){l=i=u;continue e}s=s.parentNode}}l=l.return}pf(function(){var d=i,p=cs(a),v=[];e:{var m=Mf.get(e);if(m!==void 0){var y=Ji,S=e;switch(e){case"keypress":if(ei(a)===0)break e;case"keydown":case"keyup":y=sh;break;case"focusin":S="focus",y=Nc;break;case"focusout":S="blur",y=Nc;break;case"beforeblur":case"afterblur":y=Nc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=mr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=fh;break;case zf:case Cf:case Df:y=Pg;break;case Of:y=mh;break;case"scroll":case"scrollend":y=Jg;break;case"wheel":y=hh;break;case"copy":case"cut":case"paste":y=th;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=hr;break;case"toggle":case"beforetoggle":y=yh}var T=(t&4)!==0,w=!T&&(e==="scroll"||e==="scrollend"),o=T?m!==null?m+"Capture":null:m;T=[];for(var f=d,g;f!==null;){var b=f;if(g=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||g===null||o===null||(b=sn(f,o),b!=null&&T.push(yn(f,b,g))),w)break;f=f.return}0<T.length&&(m=new y(m,S,null,a,p),v.push({event:m,listeners:T}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&a!==fu&&(S=a.relatedTarget||a.fromElement)&&($a(S)||S[Tl]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(S=a.relatedTarget||a.toElement,y=d,S=S?$a(S):null,S!==null&&(w=Sn(S),T=S.tag,S!==w||T!==5&&T!==27&&T!==6)&&(S=null)):(y=null,S=d),y!==S)){if(T=mr,b="onMouseLeave",o="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(T=hr,b="onPointerLeave",o="onPointerEnter",f="pointer"),w=y==null?m:ql(y),g=S==null?m:ql(S),m=new T(b,f+"leave",y,a,p),m.target=w,m.relatedTarget=g,b=null,$a(p)===d&&(T=new T(o,f+"enter",S,a,p),T.target=g,T.relatedTarget=w,b=T),w=b,y&&S)t:{for(T=pp,o=y,f=S,g=0,b=o;b;b=T(b))g++;b=0;for(var O=f;O;O=T(O))b++;for(;0<g-b;)o=T(o),g--;for(;0<b-g;)f=T(f),b--;for(;g--;){if(o===f||f!==null&&o===f.alternate){T=o;break t}o=T(o),f=T(f)}T=null}else T=null;y!==null&&co(v,m,y,T,!1),S!==null&&w!==null&&co(v,w,S,T,!0)}}e:{if(m=d?ql(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var z=br;else if(vr(m))if(Nf)z=zh;else{z=Th;var h=Ah}else y=m.nodeName,!y||y.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&is(d.elementType)&&(z=br):z=Eh;if(z&&(z=z(e,d))){Sf(v,z,a,p);break e}h&&h(e,m,d),e==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&ou(m,"number",m.value)}switch(h=d?ql(d):window,e){case"focusin":(vr(h)||h.contentEditable==="true")&&(Ia=h,mu=d,$l=null);break;case"focusout":$l=mu=Ia=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Ar(v,a,p);break;case"selectionchange":if(Dh)break;case"keydown":case"keyup":Ar(v,a,p)}var C;if(rs)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Fa?bf(e,a)&&(D="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(D="onCompositionStart");D&&(vf&&a.locale!=="ko"&&(Fa||D!=="onCompositionStart"?D==="onCompositionEnd"&&Fa&&(C=yf()):(ta=p,us="value"in ta?ta.value:ta.textContent,Fa=!0)),h=Ri(d,D),0<h.length&&(D=new gr(D,e,null,a,p),v.push({event:D,listeners:h}),C?D.data=C:(C=xf(a),C!==null&&(D.data=C)))),(C=bh?xh(e,a):Sh(e,a))&&(D=Ri(d,"onBeforeInput"),0<D.length&&(h=new gr("onBeforeInput","beforeinput",null,a,p),v.push({event:h,listeners:D}),h.data=C)),dp(v,e,d,a,p)}pm(v,t)})}function yn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ri(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=sn(e,a),n!=null&&l.unshift(yn(e,n,i)),n=sn(e,t),n!=null&&l.push(yn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function pp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function co(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var s=a,r=s.alternate,d=s.stateNode;if(s=s.tag,r!==null&&r===l)break;s!==5&&s!==26&&s!==27||d===null||(r=d,n?(d=sn(a,i),d!=null&&u.unshift(yn(a,d,r))):n||(d=sn(a,i),d!=null&&u.push(yn(a,d,r)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var yp=/\r\n?/g,vp=/\u0000|\uFFFD/g;function uo(e){return(typeof e=="string"?e:""+e).replace(yp,`
`).replace(vp,"")}function vm(e,t){return t=uo(t),uo(e)===t}function I(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||hl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&hl(e,""+l);break;case"className":Bn(e,"class",l);break;case"tabIndex":Bn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Bn(e,a,l);break;case"style":hf(e,l,i);break;case"data":if(t!=="object"){Bn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=In(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&I(e,t,"name",n.name,n,null),I(e,t,"formEncType",n.formEncType,n,null),I(e,t,"formMethod",n.formMethod,n,null),I(e,t,"formTarget",n.formTarget,n,null)):(I(e,t,"encType",n.encType,n,null),I(e,t,"method",n.method,n,null),I(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=In(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=_t);break;case"onScroll":l!=null&&q("scroll",e);break;case"onScrollEnd":l!=null&&q("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(j(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(j(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=In(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":q("beforetoggle",e),q("toggle",e),Fn(e,"popover",l);break;case"xlinkActuate":At(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":At(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":At(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":At(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":At(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":At(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":At(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":At(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":At(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Fn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vg.get(a)||a,Fn(e,a,l))}}function ku(e,t,a,l,n,i){switch(a){case"style":hf(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(j(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(j(60));e.innerHTML=a}}break;case"children":typeof l=="string"?hl(e,l):(typeof l=="number"||typeof l=="bigint")&&hl(e,""+l);break;case"onScroll":l!=null&&q("scroll",e);break;case"onScrollEnd":l!=null&&q("scrollend",e);break;case"onClick":l!=null&&(e.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Le]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Fn(e,a,l)}}}function Oe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",e),q("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:I(e,t,i,u,a,null)}}n&&I(e,t,"srcSet",a.srcSet,a,null),l&&I(e,t,"src",a.src,a,null);return;case"input":q("invalid",e);var s=i=u=n=null,r=null,d=null;for(l in a)if(a.hasOwnProperty(l)){var p=a[l];if(p!=null)switch(l){case"name":n=p;break;case"type":u=p;break;case"checked":r=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,t));break;default:I(e,t,l,p,a,null)}}df(e,i,s,r,d,u,n,!1);return;case"select":q("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:I(e,t,n,s,a,null)}t=i,a=u,e.multiple=!!l,t!=null?cl(e,!!l,t,!1):a!=null&&cl(e,!!l,a,!0);return;case"textarea":q("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(j(91));break;default:I(e,t,u,s,a,null)}gf(e,l,n,i);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(l=a[r],l!=null))switch(r){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:I(e,t,r,l,a,null)}return;case"dialog":q("beforetoggle",e),q("toggle",e),q("cancel",e),q("close",e);break;case"iframe":case"object":q("load",e);break;case"video":case"audio":for(l=0;l<pn.length;l++)q(pn[l],e);break;case"image":q("error",e),q("load",e);break;case"details":q("toggle",e);break;case"embed":case"source":case"link":q("error",e),q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(l=a[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:I(e,t,d,l,a,null)}return;default:if(is(t)){for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!==void 0&&ku(e,t,p,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&I(e,t,s,l,a,null))}function bp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,r=null,d=null,p=null;for(y in a){var v=a[y];if(a.hasOwnProperty(y)&&v!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":r=v;default:l.hasOwnProperty(y)||I(e,t,y,null,l,v)}}for(var m in l){var y=l[m];if(v=a[m],l.hasOwnProperty(m)&&(y!=null||v!=null))switch(m){case"type":i=y;break;case"name":n=y;break;case"checked":d=y;break;case"defaultChecked":p=y;break;case"value":u=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(j(137,t));break;default:y!==v&&I(e,t,m,y,l,v)}}ru(e,u,s,r,d,p,i,n);return;case"select":y=u=s=m=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":y=r;default:l.hasOwnProperty(i)||I(e,t,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":m=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==r&&I(e,t,n,i,l,r)}t=s,a=u,l=y,m!=null?cl(e,!!a,m,!1):!!l!=!!a&&(t!=null?cl(e,!!a,t,!0):cl(e,!!a,a?[]:"",!1));return;case"textarea":y=m=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:I(e,t,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":m=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(j(91));break;default:n!==i&&I(e,t,u,n,l,i)}mf(e,m,y);return;case"option":for(var S in a)if(m=a[S],a.hasOwnProperty(S)&&m!=null&&!l.hasOwnProperty(S))switch(S){case"selected":e.selected=!1;break;default:I(e,t,S,null,l,m)}for(r in l)if(m=l[r],y=a[r],l.hasOwnProperty(r)&&m!==y&&(m!=null||y!=null))switch(r){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:I(e,t,r,m,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var T in a)m=a[T],a.hasOwnProperty(T)&&m!=null&&!l.hasOwnProperty(T)&&I(e,t,T,null,l,m);for(d in l)if(m=l[d],y=a[d],l.hasOwnProperty(d)&&m!==y&&(m!=null||y!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(j(137,t));break;default:I(e,t,d,m,l,y)}return;default:if(is(t)){for(var w in a)m=a[w],a.hasOwnProperty(w)&&m!==void 0&&!l.hasOwnProperty(w)&&ku(e,t,w,void 0,l,m);for(p in l)m=l[p],y=a[p],!l.hasOwnProperty(p)||m===y||m===void 0&&y===void 0||ku(e,t,p,m,l,y);return}}for(var o in a)m=a[o],a.hasOwnProperty(o)&&m!=null&&!l.hasOwnProperty(o)&&I(e,t,o,null,l,m);for(v in l)m=l[v],y=a[v],!l.hasOwnProperty(v)||m===y||m==null&&y==null||I(e,t,v,m,l,y)}function so(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&so(u)){for(u=0,s=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],d=r.startTime;if(d>s)break;var p=r.transferSize,v=r.initiatorType;p&&so(v)&&(r=r.responseEnd,u+=p*(r<s?1:(s-d)/(r-d)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yu=null,Bu=null;function Ui(e){return e.nodeType===9?e:e.ownerDocument}function ro(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jc=null;function Sp(){var e=window.event;return e&&e.type==="popstate"?e===Jc?!1:(Jc=e,!0):(Jc=null,!1)}var xm=typeof setTimeout=="function"?setTimeout:void 0,Np=typeof clearTimeout=="function"?clearTimeout:void 0,oo=typeof Promise=="function"?Promise:void 0,jp=typeof queueMicrotask=="function"?queueMicrotask:typeof oo<"u"?function(e){return oo.resolve(null).then(e).catch(Ap)}:xm;function Ap(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function fo(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),jl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")cn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,cn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Tn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&cn(e.ownerDocument.body);a=n}while(a);jl(t)}function mo(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function qu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qu(a),ns(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Tp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Tn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ot(e.nextSibling),e===null)break}return null}function Ep(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ot(e.nextSibling),e===null))return null;return e}function Sm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ot(e.nextSibling),e===null))return null;return e}function Qu(e){return e.data==="$?"||e.data==="$~"}function Xu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zu=null;function go(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ot(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function ho(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Nm(e,t,a){switch(t=Ui(a),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function cn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ns(e)}var ft=new Map,po=new Set;function Hi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qt=J.d;J.d={f:Cp,r:Dp,D:Op,C:Mp,L:_p,m:wp,X:Up,S:Rp,M:Hp};function Cp(){var e=qt.f(),t=ic();return e||t}function Dp(e){var t=El(e);t!==null&&t.tag===5&&t.type==="form"?hd(t):qt.r(e)}var Ol=typeof document>"u"?null:document;function jm(e,t,a){var l=Ol;if(l&&typeof t=="string"&&t){var n=ct(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),po.has(n)||(po.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Oe(t,"link",e),je(t),l.head.appendChild(t)))}}function Op(e){qt.D(e),jm("dns-prefetch",e,null)}function Mp(e,t){qt.C(e,t),jm("preconnect",e,t)}function _p(e,t,a){qt.L(e,t,a);var l=Ol;if(l&&e&&t){var n='link[rel="preload"][as="'+ct(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ct(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ct(a.imageSizes)+'"]')):n+='[href="'+ct(e)+'"]';var i=n;switch(t){case"style":i=Nl(e);break;case"script":i=Ml(e)}ft.has(i)||(e=ie({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ft.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Mn(i))||t==="script"&&l.querySelector(_n(i))||(t=l.createElement("link"),Oe(t,"link",e),je(t),l.head.appendChild(t)))}}function wp(e,t){qt.m(e,t);var a=Ol;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ct(l)+'"][href="'+ct(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ml(e)}if(!ft.has(i)&&(e=ie({rel:"modulepreload",href:e},t),ft.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_n(i)))return}l=a.createElement("link"),Oe(l,"link",e),je(l),a.head.appendChild(l)}}}function Rp(e,t,a){qt.S(e,t,a);var l=Ol;if(l&&e){var n=il(l).hoistableStyles,i=Nl(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(Mn(i)))s.loading=5;else{e=ie({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ft.get(i))&&Qs(e,a);var r=u=l.createElement("link");je(r),Oe(r,"link",e),r._p=new Promise(function(d,p){r.onload=d,r.onerror=p}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,si(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function Up(e,t){qt.X(e,t);var a=Ol;if(a&&e){var l=il(a).hoistableScripts,n=Ml(e),i=l.get(n);i||(i=a.querySelector(_n(n)),i||(e=ie({src:e,async:!0},t),(t=ft.get(n))&&Xs(e,t),i=a.createElement("script"),je(i),Oe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Hp(e,t){qt.M(e,t);var a=Ol;if(a&&e){var l=il(a).hoistableScripts,n=Ml(e),i=l.get(n);i||(i=a.querySelector(_n(n)),i||(e=ie({src:e,async:!0,type:"module"},t),(t=ft.get(n))&&Xs(e,t),i=a.createElement("script"),je(i),Oe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function yo(e,t,a,l){var n=(n=ia.current)?Hi(n):null;if(!n)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Nl(a.href),a=il(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Nl(a.href);var i=il(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Mn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),ft.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ft.set(e,a),i||Gp(n,e,a,u.state))),t&&l===null)throw Error(j(528,""));return u}if(t&&l!==null)throw Error(j(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ml(a),a=il(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function Nl(e){return'href="'+ct(e)+'"'}function Mn(e){return'link[rel="stylesheet"]['+e+"]"}function Am(e){return ie({},e,{"data-precedence":e.precedence,precedence:null})}function Gp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Oe(t,"link",a),je(t),e.head.appendChild(t))}function Ml(e){return'[src="'+ct(e)+'"]'}function _n(e){return"script[async]"+e}function vo(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ct(a.href)+'"]');if(l)return t.instance=l,je(l),l;var n=ie({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),je(l),Oe(l,"style",n),si(l,a.precedence,e),t.instance=l;case"stylesheet":n=Nl(a.href);var i=e.querySelector(Mn(n));if(i)return t.state.loading|=4,t.instance=i,je(i),i;l=Am(a),(n=ft.get(n))&&Qs(l,n),i=(e.ownerDocument||e).createElement("link"),je(i);var u=i;return u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Oe(i,"link",l),t.state.loading|=4,si(i,a.precedence,e),t.instance=i;case"script":return i=Ml(a.src),(n=e.querySelector(_n(i)))?(t.instance=n,je(n),n):(l=a,(n=ft.get(i))&&(l=ie({},a),Xs(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),je(n),Oe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(l=t.instance,t.state.loading|=4,si(l,a.precedence,e));return t.instance}function si(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Qs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ri=null;function bo(e,t,a){if(ri===null){var l=new Map,n=ri=new Map;n.set(a,l)}else n=ri,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Tn]||i[ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function xo(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function kp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Tm(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Yp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=Nl(l.href),i=t.querySelector(Mn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,je(i);return}i=t.ownerDocument||t,l=Am(l),(n=ft.get(n))&&Qs(l,n),i=i.createElement("link"),je(i);var u=i;u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Oe(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&!(a.state.loading&3)&&(e.count++,a=Gi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var $c=0;function Bp(e,t){return e.stylesheets&&e.count===0&&oi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&oi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&$c===0&&($c=62500*xp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>$c?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Gi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ki=null;function oi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ki=new Map,t.forEach(Lp,e),ki=null,Gi.call(e))}function Lp(e,t){if(!(t.state.loading&4)){var a=ki.get(e);if(a)var l=a.get(null);else{a=new Map,ki.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Gi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var vn={$$typeof:Mt,Provider:null,Consumer:null,_currentValue:Ea,_currentValue2:Ea,_threadCount:0};function qp(e,t,a,l,n,i,u,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.hiddenUpdates=vc(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Em(e,t,a,l,n,i,u,s,r,d,p,v){return e=new qp(e,t,a,u,r,d,p,v,s),t=1,i===!0&&(t|=24),i=Ze(3,null,null,t),e.current=i,i.stateNode=e,t=ps(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},bs(i),e}function zm(e){return e?(e=tl,e):tl}function Cm(e,t,a,l,n,i){n=zm(n),l.context===null?l.context=n:l.pendingContext=n,l=ua(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=sa(e,l,t),a!==null&&(Be(a,e,t),Fl(a,e,t))}function So(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Zs(e,t){So(e,t),(e=e.alternate)&&So(e,t)}function Dm(e){if(e.tag===13||e.tag===31){var t=Ya(e,67108864);t!==null&&Be(t,e,67108864),Zs(e,67108864)}}function No(e){if(e.tag===13||e.tag===31){var t=We();t=as(t);var a=Ya(e,t);a!==null&&Be(a,e,t),Zs(e,t)}}var Yi=!0;function Qp(e,t,a,l){var n=G.T;G.T=null;var i=J.p;try{J.p=2,Vs(e,t,a,l)}finally{J.p=i,G.T=n}}function Xp(e,t,a,l){var n=G.T;G.T=null;var i=J.p;try{J.p=8,Vs(e,t,a,l)}finally{J.p=i,G.T=n}}function Vs(e,t,a,l){if(Yi){var n=Vu(l);if(n===null)Kc(e,t,l,Bi,a),jo(e,l);else if(Vp(n,e,t,a,l))l.stopPropagation();else if(jo(e,l),t&4&&-1<Zp.indexOf(e)){for(;n!==null;){var i=El(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=ja(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var r=1<<31-$e(u);s.entanglements[1]|=r,u&=~r}jt(i),!(K&6)&&(Di=Ke()+500,On(0))}}break;case 31:case 13:s=Ya(i,2),s!==null&&Be(s,i,2),ic(),Zs(i,2)}if(i=Vu(l),i===null&&Kc(e,t,l,Bi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Kc(e,t,l,null,a)}}function Vu(e){return e=cs(e),Ks(e)}var Bi=null;function Ks(e){if(Bi=null,e=$a(e),e!==null){var t=Sn(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Jo(t),e!==null)return e;e=null}else if(a===31){if(e=$o(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bi=e,null}function Om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Og()){case Po:return 2;case ef:return 8;case hi:case Mg:return 32;case tf:return 268435456;default:return 32}default:return 32}}var Ku=!1,fa=null,da=null,ma=null,bn=new Map,xn=new Map,Pt=[],Zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jo(e,t){switch(e){case"focusin":case"focusout":fa=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(t.pointerId)}}function Yl(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=El(t),t!==null&&Dm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Vp(e,t,a,l,n){switch(t){case"focusin":return fa=Yl(fa,e,t,a,l,n),!0;case"dragenter":return da=Yl(da,e,t,a,l,n),!0;case"mouseover":return ma=Yl(ma,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,Yl(bn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,xn.set(i,Yl(xn.get(i)||null,e,t,a,l,n)),!0}return!1}function Mm(e){var t=$a(e.target);if(t!==null){var a=Sn(t);if(a!==null){if(t=a.tag,t===13){if(t=Jo(a),t!==null){e.blockedOn=t,cr(e.priority,function(){No(a)});return}}else if(t===31){if(t=$o(a),t!==null){e.blockedOn=t,cr(e.priority,function(){No(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Vu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);fu=l,a.target.dispatchEvent(l),fu=null}else return t=El(a),t!==null&&Dm(t),e.blockedOn=a,!1;t.shift()}return!0}function Ao(e,t,a){fi(e)&&a.delete(t)}function Kp(){Ku=!1,fa!==null&&fi(fa)&&(fa=null),da!==null&&fi(da)&&(da=null),ma!==null&&fi(ma)&&(ma=null),bn.forEach(Ao),xn.forEach(Ao)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ku||(Ku=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,Kp)))}var $n=null;function To(e){$n!==e&&($n=e,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,function(){$n===e&&($n=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Ks(l||a)===null)continue;break}var i=El(a);i!==null&&(e.splice(t,3),t-=3,zu(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function jl(e){function t(r){return Jn(r,e)}fa!==null&&Jn(fa,e),da!==null&&Jn(da,e),ma!==null&&Jn(ma,e),bn.forEach(t),xn.forEach(t);for(var a=0;a<Pt.length;a++){var l=Pt[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Pt.length&&(a=Pt[0],a.blockedOn===null);)Mm(a),a.blockedOn===null&&Pt.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Le]||null;if(typeof i=="function")u||To(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Le]||null)s=u.formAction;else if(Ks(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),To(a)}}}function _m(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Js(e){this._internalRoot=e}sc.prototype.render=Js.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var a=t.current,l=We();Cm(a,l,e,t,null,null)};sc.prototype.unmount=Js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cm(e.current,2,null,e,null,null),ic(),t[Tl]=null}};function sc(e){this._internalRoot=e}sc.prototype.unstable_scheduleHydration=function(e){if(e){var t=uf();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Pt.length&&t!==0&&t<Pt[a].priority;a++);Pt.splice(a,0,e),a===0&&Mm(e)}};var Eo=Vo.version;if(Eo!=="19.2.4")throw Error(j(527,Eo,"19.2.4"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=jg(t),e=e!==null?Wo(e):null,e=e===null?null:e.stateNode,e};var Jp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wn.isDisabled&&Wn.supportsFiber)try{Nn=Wn.inject(Jp),Je=Wn}catch{}}Zi.createRoot=function(e,t){if(!Ko(e))throw Error(j(299));var a=!1,l="",n=jd,i=Ad,u=Td;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Em(e,1,!1,null,null,a,l,null,n,i,u,_m),e[Tl]=t.current,qs(e),new Js(t)};Zi.hydrateRoot=function(e,t,a){if(!Ko(e))throw Error(j(299));var l=!1,n="",i=jd,u=Ad,s=Td,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=Em(e,1,!0,t,a??null,l,n,r,i,u,s,_m),t.context=zm(null),a=t.current,l=We(),l=as(l),n=ua(l),n.callback=null,sa(a,n,l),a=l,t.current.lanes=a,An(t,a),jt(t),e[Tl]=t.current,qs(e),new sc(t)};Zi.version="19.2.4";function wm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wm)}catch(e){console.error(e)}}wm(),Bo.exports=Zi;var $p=Bo.exports;const St={ACTIONABLE_NOW:"Now",CANDIDATES:"Review",AMBIGUITY:"Clarify",WAITING:"Waiting",TUNING:"Tuning"},dl={CRITICAL:"Critical",HIGH:"High",MEDIUM:"Medium",LOW:"Low"},Li={DATE_EXACT:"On Date",DATE_WINDOW:"Date Range",EMAIL_REPLY:"Email Reply",MANUAL_CHECK:"Manual Check",WEB_CONDITION:"Web Monitor"},Wp="/api";async function U(e,t){const a=await fetch(`${Wp}${e}`,{headers:{"Content-Type":"application/json",...t==null?void 0:t.headers},...t});if(!a.ok){const l=await a.json().catch(()=>({message:"Request failed"}));throw new Error(l.message||`HTTP ${a.status}`)}return a.json()}async function Rm(){return U("/containers/counts")}async function Um(e){const t=new URLSearchParams;e&&t.set("container",e);const a=t.toString();return U(`/actions${a?`?${a}`:""}`)}async function Fp(e){return U(`/actions/${e}`)}async function Qa(e,t){return U(`/actions/${e}`,{method:"PUT",body:JSON.stringify(t)})}async function Ip(e){return U(`/actions/${e}/complete`,{method:"POST"})}async function zo(e,t){return U(`/actions/${e}/move`,{method:"POST",body:JSON.stringify({container:t})})}async function Hm(e){await U(`/actions/${e}`,{method:"DELETE"})}async function Pp(e){await U(`/actions/${e}/purge`,{method:"DELETE"})}async function ey(e){return U(`/actions/${e}/not-an-action`,{method:"POST"})}async function ty(e){await U(`/actions/${e}/acknowledge`,{method:"POST"})}async function Gm(){return U("/system/health")}async function ay(){return U("/system/run-followups",{method:"POST"})}async function ly(){return U("/system/run-triggers",{method:"POST"})}async function ny(e){return U("/parse/preview",{method:"POST",body:JSON.stringify({text:e})})}async function iy(e){return U("/parse/confirm",{method:"POST",body:JSON.stringify(e)})}async function cy(e,t){return U("/parse/clarify",{method:"POST",body:JSON.stringify({rawInput:e,answers:t})})}async function uy(e){return U(`/parse/${e}/reparse`,{method:"POST"})}async function sy(){return U("/sources/gmail/status")}async function ry(){return U("/sources/gmail/auth-url")}async function oy(){await U("/sources/gmail/disconnect",{method:"POST"})}async function fy(){return U("/sources/gmail/scan",{method:"POST"})}async function dy(e){const t=new URLSearchParams;e!=null&&e.actionId&&t.set("actionId",e.actionId.toString()),e!=null&&e.pending&&t.set("pending","true");const a=t.toString();return U(`/triggers${a?`?${a}`:""}`)}async function km(e){return U("/triggers",{method:"POST",body:JSON.stringify(e)})}async function my(e){await U(`/triggers/${e}`,{method:"DELETE"})}async function gy(e){return U(`/triggers/${e}/fire`,{method:"POST"})}async function hy(e,t){return U(`/triggers/${e}/check`,{method:"POST",body:JSON.stringify({conditionMet:t})})}async function py(e){const t=new URLSearchParams;e.q&&t.set("q",e.q),e.container&&t.set("container",e.container),e.urgency&&t.set("urgency",e.urgency),e.includeArchived&&t.set("includeArchived","true"),e.archiveOnly&&t.set("archiveOnly","true"),e.limit&&t.set("limit",e.limit.toString()),e.offset&&t.set("offset",e.offset.toString());const a=t.toString();return U(`/search${a?`?${a}`:""}`)}async function yy(){return U("/groups")}async function vy(e){return U("/groups",{method:"POST",body:JSON.stringify(e)})}async function by(e){return U(`/groups/${e}`,{method:"PUT",body:JSON.stringify({archivedAt:new Date().toISOString()})})}async function xy(e){await U(`/groups/${e}`,{method:"DELETE"})}async function Sy(e,t){return U(`/groups/${e}/actions`,{method:"POST",body:JSON.stringify({actionIds:t})})}async function Co(e,t){await U(`/groups/${e}/actions/${t}`,{method:"DELETE"})}async function Ny(){return U("/groups/suggestions")}async function jy(e,t){return U("/groups/suggestions/"+e+"/accept",{method:"POST",body:JSON.stringify({name:t})})}async function Ay(e){await U("/groups/suggestions/"+e+"/dismiss",{method:"POST"})}async function Ty(e,t){return U("/groups/merge",{method:"POST",body:JSON.stringify({primaryId:e,secondaryId:t})})}async function Ey(){return U("/tuning")}async function zy(e){return U(`/tuning/${e}/activate`,{method:"POST"})}async function Cy(e,t,a=!1){return U(`/tuning/${e}/reject`,{method:"POST",body:JSON.stringify({feedback:t,dontAskAgain:a})})}async function Dy(e){return U(`/tuning/${e}/ask-less`,{method:"POST"})}async function Oy(e){await U(`/tuning/${e}`,{method:"DELETE"})}async function My(){return U("/tuning/stats")}async function _y(){return U("/notifications/vapid-public-key")}async function wy(e,t,a){await U("/notifications/subscribe",{method:"POST",body:JSON.stringify({endpoint:e,p256dh:t,auth:a})})}async function Ry(e){await U("/notifications/unsubscribe",{method:"DELETE",body:JSON.stringify({endpoint:e})})}async function Uy(e,t,a){return U("/tuning/feedback",{method:"POST",body:JSON.stringify({actionId:e,feedbackType:t,correction:a})})}async function Hy(){return U("/containers/flag-counts")}async function Gy(e){return U(`/actions?${e}=true`)}async function ky(e){return U("/actions/bulk/complete",{method:"POST",body:JSON.stringify({ids:e})})}async function Yy(e){return U("/actions/bulk/delete",{method:"POST",body:JSON.stringify({ids:e})})}async function By(e,t){return U("/actions/bulk/move",{method:"POST",body:JSON.stringify({ids:e,container:t})})}let qi=null;function Zl(){return qi?qi():Promise.resolve()}function Ly({activeContainer:e,onContainerChange:t,onFlagFilter:a}){const[l,n]=x.useState({ACTIONABLE_NOW:0,CANDIDATES:0,AMBIGUITY:0,WAITING:0,TUNING:0}),[i,u]=x.useState({needsClarification:0,needsTuning:0}),s=x.useCallback(async()=>{try{const[p,v]=await Promise.all([Rm(),Hy()]);n(p),u(v)}catch(p){console.error("Failed to load counts:",p)}},[]);x.useEffect(()=>(qi=s,s(),()=>{qi=null}),[s]);function r(p){t(e===p?null:p)}function d(p,v){const m=e===p;return c.jsxs("button",{className:`grid-btn grid-btn--${v}${m?" selected":""}`,onClick:()=>r(p),children:[c.jsx("span",{className:"grid-btn-label",children:St[p]}),c.jsx("span",{className:"grid-btn-badge",children:l[p]})]},p)}return c.jsxs("div",{className:"container-grid",children:[d("ACTIONABLE_NOW","now"),c.jsxs("div",{className:"grid-row",children:[d("CANDIDATES","review"),d("WAITING","waiting")]}),(i.needsClarification>0||i.needsTuning>0)&&c.jsxs("div",{className:"flag-badges",children:[i.needsClarification>0&&c.jsxs("button",{className:"flag-badge flag-badge--clarify",onClick:()=>a==null?void 0:a("needsClarification"),title:"Actions needing clarification",children:[c.jsx("span",{className:"flag-badge-icon",children:"?"}),c.jsx("span",{className:"flag-badge-label",children:"Clarify"}),c.jsx("span",{className:"flag-badge-count",children:i.needsClarification})]}),i.needsTuning>0&&c.jsxs("button",{className:"flag-badge flag-badge--tuning",onClick:()=>a==null?void 0:a("needsTuning"),title:"Actions flagged for tuning",children:[c.jsx("span",{className:"flag-badge-icon",children:"⚙"}),c.jsx("span",{className:"flag-badge-label",children:"Tuning"}),c.jsx("span",{className:"flag-badge-count",children:i.needsTuning})]})]})]})}const Do={SU:"Sunday",MO:"Monday",TU:"Tuesday",WE:"Wednesday",TH:"Thursday",FR:"Friday",SA:"Saturday"},qy=["January","February","March","April","May","June","July","August","September","October","November","December"];function Qy(e){const t={};for(const l of e.split(";")){const[n,i]=l.split("=");n&&i&&(t[n.trim()]=i.trim())}const a=t.FREQ;return!a||!["DAILY","WEEKLY","MONTHLY","YEARLY"].includes(a)?null:{freq:a,interval:t.INTERVAL&&parseInt(t.INTERVAL)||1,byMonthDay:t.BYMONTHDAY?parseInt(t.BYMONTHDAY):void 0,byMonth:t.BYMONTH?parseInt(t.BYMONTH):void 0,byDay:t.BYDAY||void 0}}function Wc(e){const t=["th","st","nd","rd"],a=e%100;return e+(t[(a-20)%10]||t[a]||t[0])}function Qi(e){const t=Qy(e);if(!t)return e;switch(t.freq){case"DAILY":return t.interval===1?"Daily":`Every ${t.interval} days`;case"WEEKLY":return t.interval===1?t.byDay&&Do[t.byDay]?`Weekly on ${Do[t.byDay]}`:"Weekly":t.interval===2?"Biweekly":`Every ${t.interval} weeks`;case"MONTHLY":return t.interval===1?t.byMonthDay?`Monthly on the ${Wc(t.byMonthDay)}`:"Monthly":t.interval===3?t.byMonthDay?`Quarterly on the ${Wc(t.byMonthDay)}`:"Quarterly":t.interval===6?"Every 6 months":`Every ${t.interval} months`;case"YEARLY":if(t.byMonth){const a=qy[t.byMonth-1];return t.byMonthDay?`Yearly on ${a} ${Wc(t.byMonthDay)}`:`Yearly in ${a}`}return t.interval===1?"Yearly":`Every ${t.interval} years`}}function Xy({action:e,onClick:t,onDelete:a,selectable:l,selected:n,onSelect:i}){var O;const u=e.urgency.toLowerCase(),s=x.useRef(null),[r,d]=x.useState(0),[p,v]=x.useState(!1);function m(){const z=window.getSelection();z&&z.toString().length>0||p||t()}function y(){return e.confidence>=.8?"high":e.confidence>=.5?"medium":"low"}function S(){if(!e.dueDate)return null;const z=new Date(e.dueDate),h=new Date,C=Math.ceil((z.getTime()-h.getTime())/(1e3*60*60*24));return C<0?`${Math.abs(C)}d overdue`:C===0?"Today":C===1?"Tomorrow":C<7?`${C}d`:z.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function T(){const z=window.getSelection();return!!(z&&z.toString().length>0)}function w(z){s.current=z.touches[0].clientX}function o(z){if(s.current===null||T())return;const h=z.touches[0].clientX-s.current;h<-10&&(v(!0),d(Math.min(0,h)))}function f(){if(T()){s.current=null;return}r<-120&&a?(d(-300),setTimeout(()=>{a(e.id)},200)):d(0),s.current=null,setTimeout(()=>v(!1),50)}const g=e.container==="CANDIDATES",b=S();return c.jsxs("div",{className:"action-card",onClick:m,children:[r<-10&&c.jsx("div",{className:"action-card-delete-bg",children:"Delete"}),c.jsxs("div",{className:"action-card-inner",style:{transform:r<0?`translateX(${r}px)`:void 0,transition:p?"none":"transform 0.2s ease"},onTouchStart:w,onTouchMove:o,onTouchEnd:f,children:[l&&c.jsx("div",{className:"action-checkbox-wrapper",onClick:z=>z.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"action-checkbox",checked:!!n,onChange:()=>i==null?void 0:i(e.id)})}),c.jsx("div",{className:`action-urgency-bar ${u}`}),c.jsxs("div",{className:"action-content",children:[e.needsFollowUp&&c.jsx("div",{className:"action-followup-nudge",children:"Still important? Tap to review."}),c.jsx("div",{className:"action-description",children:e.shortDescription||e.description}),((O=e.source)==null?void 0:O.type)==="GMAIL"&&(e.source.emailFrom||e.source.emailSubject)&&c.jsxs("div",{className:"action-source-line",children:["From: ",e.source.emailFrom||"Unknown"," · ",e.source.emailSubject||"No subject"]}),c.jsxs("div",{className:"action-meta",children:[g&&c.jsx("span",{className:"badge badge-unconfirmed",children:"Unconfirmed"}),e.container==="WAITING"&&c.jsx("span",{className:"badge badge-waiting",children:"Waiting"}),e.needsClarification&&c.jsx("span",{className:"badge badge-clarify",children:e.missingInfo?`Unclear: ${JSON.parse(e.missingInfo).slice(0,2).join(", ")}`:"Clarify"}),e.needsTuning&&c.jsx("span",{className:"badge badge-tuning",children:"Tuning"}),e.recurrenceRule&&c.jsxs("span",{className:"badge badge-recurrence",children:["↻ ",Qi(e.recurrenceRule)]}),b&&c.jsx("span",{className:"action-due",children:b}),c.jsxs("span",{className:"action-confidence",children:[c.jsx("span",{className:`confidence-dot ${y()}`}),Math.round(e.confidence*100),"%"]})]})]})]})]})}function Zy({onClose:e,onCreated:t}){const[a,l]=x.useState("input"),[n,i]=x.useState(""),[u,s]=x.useState(null),[r,d]=x.useState({}),[p,v]=x.useState(null);async function m(){if(!n.trim()){v("Please enter a description");return}l("parsing"),v(null);try{const o=await ny(n.trim());s(o),o.container==="AMBIGUITY"&&o.questions.length>0?l("clarify"):l("preview")}catch(o){v("Failed to parse action"),l("input"),console.error(o)}}async function y(){if(u){l("parsing"),v(null);try{const o=await cy(u.rawInput,r);s(o),o.container==="AMBIGUITY"&&o.questions.length>0?(d({}),l("clarify")):l("preview")}catch(o){v("Failed to clarify"),l("clarify"),console.error(o)}}}async function S(){if(u){l("parsing"),v(null);try{await iy(u),t()}catch(o){v("Failed to save action"),l("preview"),console.error(o)}}}function T(o,f){u&&s({...u,[o]:f})}function w(){return u?u.confidence>=.8?"var(--success)":u.confidence>=.5?"var(--warning)":"var(--urgency-critical)":"var(--text-secondary)"}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsxs("h2",{className:"modal-title",children:[a==="input"&&"New Action",a==="parsing"&&"Analyzing...",a==="preview"&&"Review Action",a==="clarify"&&"Need More Info"]}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),a==="input"&&c.jsxs("div",{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What needs to be done?"}),c.jsx("textarea",{className:"form-textarea",value:n,onChange:o=>i(o.target.value),placeholder:"e.g., Call John about the project proposal by Friday",autoFocus:!0,rows:3}),c.jsx("p",{className:"form-hint",children:"Include details like who, what, when - AI will extract the action"})]}),p&&c.jsx("div",{className:"form-error",children:p}),c.jsx("button",{type:"button",className:"btn btn-primary btn-block",onClick:m,children:"Parse with AI"})]}),a==="parsing"&&c.jsxs("div",{className:"parsing-state",children:[c.jsx("div",{className:"spinner"}),c.jsx("p",{children:"Analyzing your input..."})]}),a==="preview"&&u&&c.jsxs("div",{children:[c.jsxs("div",{className:"preview-section",children:[c.jsxs("div",{className:"preview-confidence",style:{color:w()},children:[Math.round(u.confidence*100),"% confident"]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:u.description,onChange:o=>T("description",o.target.value),rows:2})]}),u.suggestedAction&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Suggested Next Step"}),c.jsx("input",{type:"text",className:"form-input",value:u.suggestedAction,onChange:o=>T("suggestedAction",o.target.value)})]}),c.jsxs("div",{className:"preview-meta",children:[c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Container"}),c.jsx("select",{className:"form-select form-select-small",value:u.container,onChange:o=>T("container",o.target.value),children:["ACTIONABLE_NOW","CANDIDATES","WAITING","AMBIGUITY"].map(o=>c.jsx("option",{value:o,children:St[o]},o))})]}),c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Urgency"}),c.jsx("select",{className:"form-select form-select-small",value:u.urgency,onChange:o=>T("urgency",o.target.value),children:Object.entries(dl).map(([o,f])=>c.jsx("option",{value:o,children:f},o))})]}),u.dueDate&&c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Due"}),c.jsx("input",{type:"date",className:"form-input form-input-small",value:u.dueDate,onChange:o=>T("dueDate",o.target.value)})]})]}),u.parties.length>0&&c.jsxs("div",{className:"preview-parties",children:[c.jsx("span",{className:"preview-meta-label",children:"People:"}),u.parties.map((o,f)=>c.jsx("span",{className:"party-chip",children:o.name},f))]}),u.recurrenceRule&&c.jsxs("div",{className:"preview-recurrence",children:[c.jsx("span",{className:"preview-meta-label",children:"Repeats"}),c.jsxs("span",{className:"preview-recurrence-value",children:["↻ ",Qi(u.recurrenceRule)]}),u.leadTimeDays!==void 0&&c.jsxs("span",{className:"preview-lead-time",children:["(surfaces ",u.leadTimeDays," days before due)"]})]}),u.reasoning&&c.jsxs("div",{className:"preview-reasoning",children:[c.jsx("span",{className:"preview-meta-label",children:"AI Reasoning"}),c.jsx("p",{children:u.reasoning})]})]}),p&&c.jsx("div",{className:"form-error",children:p}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>l("input"),children:"Edit Input"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:S,children:"Save Action"})]})]}),a==="clarify"&&u&&c.jsxs("div",{children:[c.jsx("p",{className:"clarify-intro",children:"Please answer these questions to clarify your action:"}),u.questions.map((o,f)=>c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:o}),c.jsx("input",{type:"text",className:"form-input",value:r[o]||"",onChange:g=>d({...r,[o]:g.target.value}),placeholder:"Your answer..."})]},f)),p&&c.jsx("div",{className:"form-error",children:p}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>l("input"),children:"Start Over"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:y,disabled:Object.keys(r).length===0,children:"Submit Answers"})]})]}),c.jsx("style",{children:`
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
        `})]})})}const Vy={CREATED:"Created",CONTAINER_CHANGE:"Moved",EDITED:"Edited",MERGED:"Merged",TRIGGER_FIRED:"Trigger fired",AI_REPARSED:"AI re-parsed",COMPLETED:"Completed",ARCHIVED:"Archived",FOLLOW_UP_SENT:"Follow-up sent"};function Ky({events:e,aiReasoning:t}){function a(n){return new Date(n).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function l(n){const i=Vy[n.type];if(n.type==="CONTAINER_CHANGE"&&n.fromContainer&&n.toContainer)return`${i} from ${n.fromContainer} to ${n.toContainer}`;if(n.details)try{const u=JSON.parse(n.details);if(u.source)return`${i} via ${u.source}`;if(u.fields)return`${i}: ${u.fields.join(", ")}`}catch{}return i}return c.jsxs("div",{className:"info-panel",children:[t&&c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"AI Reasoning"}),c.jsx("p",{className:"info-reasoning",children:t})]}),c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"History"}),c.jsx("div",{className:"info-timeline",children:e.map(n=>c.jsxs("div",{className:"timeline-item",children:[c.jsx("span",{className:"timeline-time",children:a(n.createdAt)}),c.jsx("span",{className:"timeline-description",children:l(n)})]},n.id))})]}),c.jsx("style",{children:`
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
      `})]})}function Oo({trigger:e,onUpdate:t}){const[a,l]=x.useState(!1),[n,i]=x.useState(null);function u(m){return m?new Date(m).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""}function s(m){if(!m)return"";const y=new Date(m),S=new Date,T=Math.ceil((y.getTime()-S.getTime())/(1e3*60*60*24));return T<0?`${Math.abs(T)}d ago`:T===0?"Today":T===1?"Tomorrow":T<7?`In ${T}d`:u(m)}function r(){switch(e.type){case"DATE_EXACT":return s(e.triggerDate);case"DATE_WINDOW":return`${u(e.dateWindowStart)} - ${u(e.dateWindowEnd)}`;case"EMAIL_REPLY":return e.emailPattern||"Waiting for reply";case"MANUAL_CHECK":return e.eventDescription||"Check condition";case"WEB_CONDITION":return e.webQuery||"Monitoring web for condition";default:return""}}async function d(){l(!0);try{await gy(e.id),t()}catch(m){console.error("Failed to fire trigger:",m)}finally{l(!1)}i(null)}async function p(m){l(!0);try{await hy(e.id,m),t()}catch(y){console.error("Failed to check trigger:",y)}finally{l(!1)}}async function v(){l(!0);try{await my(e.id),t()}catch(m){console.error("Failed to delete trigger:",m)}finally{l(!1)}i(null)}return e.isTriggered?c.jsxs("div",{className:"trigger-card fired",children:[c.jsx("div",{className:"trigger-icon",children:"✓"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:Li[e.type]}),c.jsxs("div",{className:"trigger-info",children:["Fired ",s(e.triggeredAt)]})]})]}):c.jsxs("div",{className:"trigger-card",children:[c.jsx("div",{className:"trigger-icon",children:"⏳"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:Li[e.type]}),c.jsx("div",{className:"trigger-info",children:r()}),e.description&&c.jsx("div",{className:"trigger-description",children:e.description}),e.type==="WEB_CONDITION"&&e.webCheckResult&&c.jsxs("div",{className:"trigger-description",children:["Last check: ",e.webCheckResult]}),e.type==="WEB_CONDITION"&&e.lastChecked&&c.jsxs("div",{className:"trigger-description",style:{opacity:.6},children:["Checked ",s(e.lastChecked)," · ",e.checkCount," checks"]})]}),c.jsxs("div",{className:"trigger-actions",children:[e.type==="MANUAL_CHECK"?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"trigger-btn check",onClick:()=>p(!0),disabled:a,title:"Condition met",children:"✓"}),c.jsx("button",{className:"trigger-btn skip",onClick:()=>p(!1),disabled:a,title:"Not yet",children:"↻"})]}):c.jsx("button",{className:"trigger-btn fire",onClick:()=>i("fire"),disabled:a,title:"Fire now",children:"▶"}),c.jsx("button",{className:"trigger-btn delete",onClick:()=>i("delete"),disabled:a,title:"Delete",children:"✕"})]}),n==="fire"&&c.jsx(ht,{title:"Fire Trigger",message:"Fire this trigger now? The action will move to Actionable Now.",confirmLabel:"Fire",onConfirm:d,onCancel:()=>i(null)}),n==="delete"&&c.jsx(ht,{title:"Delete Trigger",message:"Delete this trigger?",confirmLabel:"Delete",danger:!0,onConfirm:v,onCancel:()=>i(null)}),c.jsx("style",{children:`
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
      `})]})}function Jy({actionId:e,onClose:t,onCreated:a}){const[l,n]=x.useState("DATE_EXACT"),[i,u]=x.useState(""),[s,r]=x.useState(""),[d,p]=x.useState(""),[v,m]=x.useState(""),[y,S]=x.useState(""),[T,w]=x.useState(!1),[o,f]=x.useState(null);async function g(z){if(z.preventDefault(),f(null),l==="DATE_EXACT"&&!s){f("Please select a date");return}if(l==="DATE_WINDOW"&&(!d||!v)){f("Please select both start and end dates");return}if(l==="MANUAL_CHECK"&&!y){f("Please describe what to check for");return}w(!0);try{await km({actionId:e,type:l,description:i||void 0,triggerDate:l==="DATE_EXACT"?s:void 0,dateWindowStart:l==="DATE_WINDOW"?d:void 0,dateWindowEnd:l==="DATE_WINDOW"?v:void 0,eventDescription:l==="MANUAL_CHECK"?y:void 0}),a(),t()}catch(h){f("Failed to create trigger"),console.error(h)}finally{w(!1)}}const b=new Date;b.setDate(b.getDate()+1);const O=b.toISOString().split("T")[0];return c.jsx("div",{className:"trigger-modal-overlay",onClick:t,children:c.jsxs("div",{className:"trigger-modal",onClick:z=>z.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Add Trigger"}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]}),c.jsxs("form",{onSubmit:g,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Type"}),c.jsx("div",{className:"trigger-type-options",children:Object.keys(Li).map(z=>c.jsx("button",{type:"button",className:`trigger-type-btn ${l===z?"active":""}`,onClick:()=>n(z),children:Li[z]},z))})]}),l==="DATE_EXACT"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Date"}),c.jsx("input",{type:"date",className:"form-input",value:s,onChange:z=>r(z.target.value),min:O}),c.jsx("p",{className:"form-hint",children:"Action will move to Actionable Now on this date"})]}),l==="DATE_WINDOW"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Start Date"}),c.jsx("input",{type:"date",className:"form-input",value:d,onChange:z=>p(z.target.value),min:O})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"End Date"}),c.jsx("input",{type:"date",className:"form-input",value:v,onChange:z=>m(z.target.value),min:d||O})]}),c.jsx("p",{className:"form-hint",children:"Action will become active when start date is reached"})]}),l==="EMAIL_REPLY"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:z=>u(z.target.value),placeholder:"e.g., Waiting for reply from John"}),c.jsx("p",{className:"form-hint",children:"You'll be prompted to manually check for the reply"})]}),l==="MANUAL_CHECK"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What to check for"}),c.jsx("textarea",{className:"form-textarea",value:y,onChange:z=>S(z.target.value),placeholder:"e.g., 30% trade-in promotion period starts",rows:2}),c.jsx("p",{className:"form-hint",children:"You'll be prompted periodically to check if this condition is met"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Note (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:z=>u(z.target.value),placeholder:"Add a note about this trigger..."})]}),o&&c.jsx("div",{className:"form-error",children:o}),c.jsxs("div",{className:"trigger-modal-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:T,children:T?"Adding...":"Add Trigger"})]})]}),c.jsx("style",{children:`
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
        `})]})})}function Ym({actionId:e,onClose:t,onUpdate:a}){var Ws,Fs;const[l,n]=x.useState(null),[i,u]=x.useState([]),[s,r]=x.useState(!0),[d,p]=x.useState(!1),[v,m]=x.useState(!1),[y,S]=x.useState(!1),[T,w]=x.useState(!1),[o,f]=x.useState(!1),[g,b]=x.useState(null),[O,z]=x.useState(!1),[h,C]=x.useState(""),[D,R]=x.useState(null),[L,ye]=x.useState(""),[Pe,Ue]=x.useState("MEDIUM"),[Se,M]=x.useState(""),[A,_]=x.useState(!1),[B,F]=x.useState(!1),[de,Te]=x.useState(!1),[et,Me]=x.useState(null),[ve,Qt]=x.useState(""),[wn,dt]=x.useState(null),[Xt,tt]=x.useState(""),[E,H]=x.useState(!1);x.useEffect(()=>{Z()},[e]),x.useEffect(()=>{if(!(o||de||T||E))return;function ue(){f(!1),Te(!1),w(!1),H(!1),dt(null)}const dc=setTimeout(()=>document.addEventListener("click",ue),0);return()=>{clearTimeout(dc),document.removeEventListener("click",ue)}},[o,de,T,E]);async function Z(){try{const[N,ue]=await Promise.all([Fp(e),dy({actionId:e})]);n(N),u(ue),ye(N.description),Ue(N.urgency),M(N.dueDate?N.dueDate.split("T")[0]:"")}catch(N){console.error("Failed to load action:",N)}finally{r(!1)}}async function Zt(){if(l){_(!0);try{await Qa(l.id,{description:L,urgency:Pe,dueDate:Se||null,version:l.version}),p(!1),Z(),a()}catch(N){console.error("Failed to save:",N)}finally{_(!1)}}}function Rn(){l&&(ye(l.description),Ue(l.urgency),M(l.dueDate?l.dueDate.split("T")[0]:""),p(!1))}async function Vt(){if(l){F(!0);try{await uy(l.id),p(!1),Z(),a()}catch(N){console.error("Failed to reparse:",N)}finally{F(!1)}}}async function Bm(){if(l)try{const N=await Ip(l.id);if(N.nextAction){const ue=N.nextAction.dueDate?new Date(N.nextAction.dueDate).toLocaleDateString():"scheduled";b(`Marked complete. Next occurrence scheduled for ${ue}.`),setTimeout(()=>{a(),t()},3e3)}else a(),t()}catch(N){console.error("Failed to complete:",N)}}async function Lm(){if(!l)return;const N=parseInt(h);if(!(isNaN(N)||N<0||N>90))try{await Qa(l.id,{leadTimeDays:N,version:l.version}),z(!1),Z(),a()}catch(ue){console.error("Failed to update lead time:",ue)}}async function qm(){if(l)try{await zo(l.id,"ACTIONABLE_NOW"),Z(),a()}catch(N){console.error("Failed to confirm:",N)}}function rc(){Z(),a()}async function oc(N,ue){if(l)try{await Uy(l.id,N,ue),w(!1),Z(),a()}catch(dc){console.error("Failed to submit feedback:",dc)}}function Qm(){Me("defer"),Qt(""),f(!1)}async function Xm(){if(!(!l||!ve))try{await km({actionId:l.id,type:"DATE_EXACT",description:`Deferred until ${ve}`,triggerDate:ve}),Me(null),Qt(""),Z(),a()}catch(N){console.error("Failed to defer action:",N)}}function Zm(){Te(!0),f(!1)}async function Vm(N){if(l)try{await zo(l.id,N),Te(!1),Z(),a()}catch(ue){console.error("Failed to reclassify action:",ue)}}function Km(){f(!1),R({type:"delete"})}async function Jm(){if(l){try{await Pp(l.id),a(),t()}catch(N){console.error("Failed to delete action:",N)}R(null)}}function $m(){f(!1),R({type:"merge-id"})}async function Wm(N){if(l){try{await Ty(N,l.id),a(),t()}catch(ue){console.error("Failed to merge actions:",ue)}R(null)}}async function Fm(){if(l){try{await Hm(l.id),a(),t()}catch(N){console.error("Failed to archive action:",N)}R(null)}}function _l(N){if(D)if(D.type==="delete")Jm();else if(D.type==="archive")Fm();else if(D.type==="merge-id"){const ue=parseInt(N||"");if(isNaN(ue))return;R({type:"merge-confirm",primaryId:ue})}else D.type==="merge-confirm"?Wm(D.primaryId):D.type==="text-correction"&&(N!=null&&N.trim()&&oc("parsed_wrong",N.trim()),R(null))}const $s=["ACTIONABLE_NOW","CANDIDATES","AMBIGUITY","WAITING"],Im=["CRITICAL","HIGH","MEDIUM","LOW"];if(s)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsx("div",{className:"modal-content",onClick:N=>N.stopPropagation(),children:c.jsx("p",{children:"Loading..."})})});if(!l)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content",onClick:N=>N.stopPropagation(),children:[c.jsx("p",{children:"Action not found"}),c.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Close"})]})});const xa=i.filter(N=>!N.isTriggered),fc=i.filter(N=>N.isTriggered);return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content action-view",onClick:N=>N.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:d?"Edit Action":"Action Details"}),c.jsxs("div",{className:"action-view-actions",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>m(!v),title:"View history",children:"i"}),c.jsxs("div",{className:"menu-wrapper",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>f(!o),title:"More options",children:"⋯"}),o&&c.jsxs("div",{className:"action-menu",onClick:N=>N.stopPropagation(),children:[c.jsx("button",{className:"action-menu-item",onClick:Qm,children:"Defer"}),c.jsx("button",{className:"action-menu-item",onClick:Zm,children:"Reclassify"}),c.jsx("button",{className:"action-menu-item",onClick:$m,children:"Merge"}),c.jsx("button",{className:"action-menu-item",onClick:()=>{S(!0),f(!1)},children:"Add to Waiting"}),c.jsx("button",{className:"action-menu-item action-menu-item--danger",onClick:Km,children:"Delete"})]})]}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]})]}),d?c.jsxs("div",{className:"action-edit-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:L,onChange:N=>ye(N.target.value)})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Urgency"}),c.jsx("select",{className:"form-select",value:Pe,onChange:N=>Ue(N.target.value),children:Object.entries(dl).map(([N,ue])=>c.jsx("option",{value:N,children:ue},N))})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Due Date"}),c.jsx("input",{type:"date",className:"form-input",value:Se,onChange:N=>M(N.target.value)})]}),c.jsxs("div",{className:"action-edit-buttons",children:[c.jsx("button",{className:"btn btn-secondary",onClick:Rn,children:"Cancel"}),c.jsx("button",{className:"btn btn-secondary",onClick:Vt,disabled:B||A,children:B?"Parsing...":"Re-parse"}),c.jsx("button",{className:"btn btn-primary",onClick:Zt,disabled:A||B,children:A?"Saving...":"Save"})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"action-detail-content",children:[c.jsx("div",{className:"action-detail-description",children:l.description}),l.needsClarification&&c.jsxs("div",{className:"clarification-banner",children:[c.jsx("div",{className:"clarification-title",children:"I categorized this the best I could, but I'm not confident about:"}),l.missingInfo?c.jsx("ul",{className:"clarification-list",children:JSON.parse(l.missingInfo).map((N,ue)=>c.jsx("li",{className:"clarification-item",children:N},ue))}):l.aiReasoning?c.jsx("div",{className:"clarification-detail",children:l.aiReasoning}):c.jsx("div",{className:"clarification-detail",children:"Review this action and edit any fields that seem off."})]}),l.container==="WAITING"&&(l.recurrenceRule||xa.length>0)&&c.jsx("div",{className:"waiting-summary",children:[l.recurrenceRule&&`↻ ${Qi(l.recurrenceRule)}`,xa.length>0&&xa[0].triggerDate&&`Waiting until ${new Date(xa[0].triggerDate).toLocaleDateString()}`,l.dueDate&&`Due ${new Date(l.dueDate).toLocaleDateString()}`].filter(Boolean).join("  ·  ")}),c.jsx("div",{className:"action-detail-source",children:((Ws=l.source)==null?void 0:Ws.type)==="GMAIL"?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"From"}),c.jsx("span",{className:"detail-value",children:l.source.emailFrom||"Unknown"})]}),c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Subject"}),c.jsx("span",{className:"detail-value",children:l.source.emailSubject||"No subject"})]}),l.source.emailDate&&c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Date"}),c.jsx("span",{className:"detail-value",children:new Date(l.source.emailDate).toLocaleDateString()})]}),l.source.emailId&&c.jsx("div",{className:"source-row",children:c.jsx("a",{href:`https://mail.google.com/mail/u/0/#inbox/${l.source.emailId}`,target:"_blank",rel:"noopener noreferrer",className:"source-gmail-link",children:"View in Gmail"})})]}):((Fs=l.source)==null?void 0:Fs.type)==="SIRI"?c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Via Siri"})]}):c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Manually entered"})]})}),l.suggestedAction&&c.jsxs("div",{className:"action-detail-suggested",children:[c.jsx("span",{className:"detail-label",children:"Next step:"}),l.suggestedAction]}),c.jsxs("div",{className:"action-detail-meta",children:[c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Container"}),c.jsx("span",{className:"detail-value",children:St[l.container]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Urgency"}),c.jsx("span",{className:`detail-value urgency-${l.urgency.toLowerCase()}`,children:dl[l.urgency]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Confidence"}),c.jsxs("span",{className:"detail-value",children:[Math.round(l.confidence*100),"%"]})]}),l.dueDate&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Due"}),c.jsx("span",{className:"detail-value",children:new Date(l.dueDate).toLocaleDateString()})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Repeats"}),c.jsx("span",{className:"detail-value detail-value-editable",onClick:()=>H(!E),children:l.recurrenceRule?`↻ ${Qi(l.recurrenceRule)}`:"None"})]}),E&&c.jsx("div",{className:"recurrence-picker-inline",onClick:N=>N.stopPropagation(),children:c.jsx("div",{className:"picker-grid picker-grid--3col",children:[{label:"Weekly",rule:"FREQ=WEEKLY;INTERVAL=1",lead:1},{label:"Biweekly",rule:"FREQ=WEEKLY;INTERVAL=2",lead:1},{label:"Monthly",rule:"FREQ=MONTHLY;INTERVAL=1",lead:3},{label:"Quarterly",rule:"FREQ=MONTHLY;INTERVAL=3",lead:7},{label:"Yearly",rule:"FREQ=YEARLY;INTERVAL=1",lead:21},{label:"None",rule:null,lead:21}].map(N=>c.jsx("button",{className:`picker-grid-btn${l.recurrenceRule===N.rule?" picker-grid-btn--current":""}`,disabled:l.recurrenceRule===N.rule||!l.recurrenceRule&&N.rule===null,onClick:async()=>{try{await Qa(l.id,{recurrenceRule:N.rule,version:l.version}),H(!1),Z(),a()}catch(ue){console.error("Failed to update recurrence:",ue)}},children:N.label},N.label))})}),l.recurrenceRule&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Lead time"}),O?c.jsxs("span",{className:"detail-value lead-time-edit",children:[c.jsx("input",{type:"number",min:"0",max:"90",className:"lead-time-input",value:h,onChange:N=>C(N.target.value),autoFocus:!0}),c.jsx("span",{className:"lead-time-unit",children:"days"}),c.jsx("button",{className:"lead-time-save",onClick:Lm,children:"Save"}),c.jsx("button",{className:"lead-time-cancel",onClick:()=>z(!1),children:"Cancel"})]}):c.jsxs("span",{className:"detail-value detail-value-editable",onClick:()=>{C(String(l.leadTimeDays)),z(!0)},children:[l.leadTimeDays," days"]})]})]}),(l.container==="WAITING"||i.length>0)&&c.jsxs("div",{className:"triggers-section",children:[c.jsxs("div",{className:"triggers-header",children:[c.jsx("h3",{children:"Triggers"}),c.jsx("button",{className:"add-trigger-btn",onClick:()=>S(!0),children:"+ Add"})]}),xa.length===0&&fc.length===0?c.jsx("p",{className:"no-triggers",children:"No triggers set. Add one to defer this action."}):c.jsxs(c.Fragment,{children:[xa.map(N=>c.jsx(Oo,{trigger:N,onUpdate:rc},N.id)),fc.length>0&&xa.length>0&&c.jsx("div",{className:"triggers-divider"}),fc.map(N=>c.jsx(Oo,{trigger:N,onUpdate:rc},N.id))]})]})]}),v&&l.events&&c.jsx(Ky,{events:l.events,aiReasoning:l.aiReasoning}),l.needsFollowUp&&c.jsxs("div",{className:"followup-nudge-section",children:[c.jsx("div",{className:"followup-nudge-title",children:"Still important?"}),c.jsx("div",{className:"followup-nudge-subtitle",children:"This action hasn't been touched in a while."}),c.jsxs("div",{className:"followup-nudge-buttons",children:[c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:async()=>{await ty(l.id),Z(),a()},children:"Still relevant"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:()=>{Me("reschedule"),Qt("")},children:"Reschedule"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn followup-archive-btn",onClick:()=>R({type:"archive"}),children:"Archive"})]})]}),et&&c.jsxs("div",{className:"date-picker-inline",children:[c.jsx("span",{className:"date-picker-label",children:et==="defer"?"Defer until:":"Reschedule to:"}),c.jsx("input",{type:"date",className:"form-input",value:ve,onChange:N=>Qt(N.target.value),style:{padding:"8px 10px",fontSize:"13px",flex:1,minWidth:0}}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!ve,onClick:async()=>{if(et==="defer")await Xm();else if(et==="reschedule"&&l)try{await Qa(l.id,{dueDate:ve,version:l.version}),Me(null),Qt(""),Z(),a()}catch(N){console.error("Failed to reschedule:",N)}},children:"Confirm"}),c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{Me(null),Qt("")},children:"Cancel"})]}),c.jsxs("div",{className:"action-view-buttons",children:[c.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Close"}),l.needsTuning&&c.jsx("button",{className:"btn btn-primary",onClick:async()=>{await Qa(l.id,{needsTuning:!1,version:l.version}),a==null||a()},children:"Looks Good"}),l.needsClarification&&c.jsx("button",{className:"btn btn-primary",onClick:async()=>{await Qa(l.id,{needsClarification:!1,version:l.version}),a==null||a()},children:"Resolved"}),l.container==="CANDIDATES"&&c.jsx("button",{className:"btn btn-primary",onClick:qm,children:"Move to Now"}),(l.container==="CANDIDATES"||l.needsClarification||l.needsTuning)&&c.jsx("button",{className:"btn btn-danger",onClick:async()=>{confirm("Delete this item and teach the system to avoid similar ones?")&&(await ey(l.id),a==null||a())},children:"Not an Action"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!0),children:"Edit"}),c.jsxs("button",{className:"btn btn-success",onClick:Bm,children:["Mark Complete",l.recurrenceRule?" & Next":""]})]}),g&&c.jsx("div",{className:"next-created-banner",children:g}),c.jsx("button",{className:"feedback-btn",onClick:()=>w(!T),children:"AI parsed incorrectly?"}),T&&c.jsxs("div",{className:"feedback-panel",onClick:N=>N.stopPropagation(),children:[c.jsx("p",{className:"feedback-title",children:"What was wrong?"}),c.jsxs("div",{className:"feedback-options",children:[wn==="urgency"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct urgency:"}),c.jsx("div",{className:"picker-grid",children:Im.map(N=>c.jsx("button",{className:`picker-grid-btn${Xt===N?" picker-grid-btn--selected":""}${l.urgency===N?" picker-grid-btn--current":""}`,onClick:()=>tt(N),disabled:l.urgency===N,children:dl[N]},N))}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{dt(null),tt("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!Xt,onClick:()=>{oc("urgency_incorrect",Xt),dt(null),tt("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{dt("urgency"),tt("")},children:"Wrong urgency level"}),wn==="container"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct container:"}),c.jsx("div",{className:"picker-grid",children:$s.map(N=>c.jsx("button",{className:`picker-grid-btn${Xt===N?" picker-grid-btn--selected":""}${l.container===N?" picker-grid-btn--current":""}`,onClick:()=>tt(N),disabled:l.container===N,children:St[N]},N))}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{dt(null),tt("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!Xt,onClick:()=>{oc("container_incorrect",Xt),dt(null),tt("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{dt("container"),tt("")},children:"Wrong container"}),c.jsx("button",{className:"feedback-option",onClick:()=>R({type:"text-correction"}),children:"Parsed text is wrong"})]})]}),de&&c.jsxs("div",{className:"reclassify-panel",onClick:N=>N.stopPropagation(),children:[c.jsx("p",{className:"feedback-title",children:"Move to container:"}),c.jsx("div",{className:"picker-grid",children:$s.map(N=>c.jsx("button",{className:`picker-grid-btn${l.container===N?" picker-grid-btn--current":""}`,disabled:l.container===N,onClick:()=>Vm(N),children:St[N]},N))}),c.jsx("button",{className:"btn btn-secondary btn-block",style:{marginTop:8},onClick:()=>Te(!1),children:"Cancel"})]})]}),y&&c.jsx(Jy,{actionId:e,onClose:()=>S(!1),onCreated:rc}),D&&D.type==="delete"&&c.jsx(ht,{title:"Delete Action",message:`Permanently delete "${l.description.substring(0,60)}"? This cannot be undone.`,confirmLabel:"Delete",danger:!0,onConfirm:()=>_l(),onCancel:()=>R(null)}),D&&D.type==="archive"&&c.jsx(ht,{title:"Archive Action",message:"Archive this action? You can find it later in search.",confirmLabel:"Archive",onConfirm:()=>_l(),onCancel:()=>R(null)}),D&&D.type==="merge-id"&&c.jsx(ht,{title:"Merge Action",message:"Enter the ID of the action to merge this into.",confirmLabel:"Next",inputMode:!0,inputPlaceholder:"Action ID",inputLabel:"Target action ID:",onConfirm:N=>_l(N),onCancel:()=>R(null)}),D&&D.type==="merge-confirm"&&c.jsx(ht,{title:"Confirm Merge",message:`Merge this action into action #${D.primaryId}? This cannot be undone.`,confirmLabel:"Merge",danger:!0,onConfirm:()=>_l(),onCancel:()=>R(null)}),D&&D.type==="text-correction"&&c.jsx(ht,{title:"Correct Description",message:"What should the parsed text say?",confirmLabel:"Submit",inputMode:!0,inputPlaceholder:"Corrected description...",inputLabel:"Correct text:",onConfirm:N=>_l(N),onCancel:()=>R(null)}),c.jsx("style",{children:`
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
        `})]})})}const Fc={needsClarification:"Needs Clarification",needsTuning:"Needs Tuning"},$y=["ACTIONABLE_NOW","CANDIDATES","WAITING"];function Wy({activeContainer:e,flagFilter:t,onDataChange:a,onOpenGroups:l}){const[n,i]=x.useState([]),[u,s]=x.useState(!0),[r,d]=x.useState(!1),[p,v]=x.useState(null),[m,y]=x.useState(!1),[S,T]=x.useState(new Set),[w,o]=x.useState(!1),[f,g]=x.useState(!1);x.useEffect(()=>{b()},[e,t]);async function b(){s(!0);try{let A;t?A=await Gy(t):A=await Um(e),i(A),a==null||a()}catch(A){console.error("Failed to load actions:",A)}finally{s(!1)}}function O(){return t?Fc[t]||t:e?St[e]:"All Actions"}function z(){d(!1),b(),Zl()}function h(){m?(y(!1),T(new Set),o(!1)):y(!0)}function C(A){T(_=>{const B=new Set(_);return B.has(A)?B.delete(A):B.add(A),B})}function D(){S.size===n.length?T(new Set):T(new Set(n.map(A=>A.id)))}async function R(){if(S.size!==0){g(!0);try{await ky(Array.from(S)),Ue()}catch(A){console.error("Bulk complete failed:",A)}finally{g(!1)}}}async function L(){if(S.size!==0){g(!0);try{await Yy(Array.from(S)),Ue()}catch(A){console.error("Bulk delete failed:",A)}finally{g(!1)}}}async function ye(A){if(S.size!==0){g(!0),o(!1);try{await By(Array.from(S),A),Ue()}catch(_){console.error("Bulk move failed:",_)}finally{g(!1)}}}async function Pe(A){try{await Hm(A),b(),Zl()}catch(_){console.error("Swipe delete failed:",_)}}function Ue(){y(!1),T(new Set),o(!1),b(),Zl()}if(u)return c.jsx("div",{className:"feed",children:c.jsx("div",{className:"feed-empty",children:"Loading..."})});const Se=S.size,M=n.length>0&&S.size===n.length;return c.jsxs("div",{className:"feed",children:[c.jsxs("div",{className:"feed-header",children:[c.jsx("h1",{className:"feed-title",children:O()}),n.length>0&&c.jsx("button",{className:"feed-select-toggle",onClick:h,children:m?"Cancel":"Select"})]}),m&&n.length>0&&c.jsx("div",{className:"feed-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:M,onChange:D}),"Select All (",n.length,")"]})}),n.length===0?c.jsx("div",{className:"feed-empty",children:t?`No items ${Fc[t]?"flagged as "+Fc[t].toLowerCase():""}`:e?`No items in ${St[e]}`:"No actions yet. Tap + to add one."}):n.map(A=>c.jsx(Xy,{action:A,onDelete:Pe,selectable:m,selected:S.has(A.id),onSelect:C,onClick:()=>{m?C(A.id):v(A.id)}},A.id)),m&&Se>0&&c.jsxs("div",{className:"bulk-toolbar",children:[c.jsxs("button",{className:"bulk-btn bulk-complete",onClick:R,disabled:f,children:["Complete (",Se,")"]}),c.jsxs("button",{className:"bulk-btn bulk-delete",onClick:L,disabled:f,children:["Delete (",Se,")"]}),c.jsxs("div",{className:"bulk-move-wrapper",children:[c.jsxs("button",{className:"bulk-btn bulk-move",onClick:()=>o(!w),disabled:f,children:["Move (",Se,")"]}),w&&c.jsx("div",{className:"bulk-move-dropdown",children:$y.map(A=>c.jsx("button",{className:"bulk-move-option",onClick:()=>ye(A),children:St[A]},A))})]})]}),c.jsx("button",{className:"quick-capture",onClick:()=>d(!0),children:"+"}),r&&c.jsx(Zy,{onClose:()=>d(!1),onCreated:z}),p&&c.jsx(Ym,{actionId:p,onClose:()=>v(null),onUpdate:()=>{b(),Zl(),v(null)}})]})}function Fy({onClose:e}){const[t,a]=x.useState(null),[l,n]=x.useState(null),[i,u]=x.useState(!0),[s,r]=x.useState(!1),[d,p]=x.useState(null),[v,m]=x.useState("default"),[y,S]=x.useState(!1),[T,w]=x.useState(!1),[o,f]=x.useState(null),[g,b]=x.useState(null),[O,z]=x.useState(!1);x.useEffect(()=>{h(),L()},[]);async function h(){u(!0);try{const[A,_]=await Promise.all([Gm(),sy()]);a(A),n(_)}catch(A){console.error("Failed to load settings data:",A)}finally{u(!1)}}async function C(){try{const{url:A}=await ry();window.location.href=A}catch(A){console.error("Failed to get auth URL:",A),alert("Failed to start Gmail connection")}}async function D(){try{await oy(),z(!1),await h()}catch(A){console.error("Failed to disconnect Gmail:",A)}}async function R(){r(!0),p(null);try{const A=await fy();p(A),await h()}catch(A){console.error("Scan failed:",A),p({success:!1,emailsScanned:0,actionsCreated:0,errors:["Scan failed"]})}finally{r(!1)}}async function L(){if(!("Notification"in window)||!("serviceWorker"in navigator)){m("unsupported");return}if(m(Notification.permission),Notification.permission==="granted"){const A=await navigator.serviceWorker.ready.catch(()=>null);if(A){const _=await A.pushManager.getSubscription();S(!!_)}}}async function ye(){w(!0);try{const A=await Notification.requestPermission();if(m(A),A!=="granted")return;const{key:_}=await _y();if(!_){alert("Server not configured for push notifications");return}const de=(await(await navigator.serviceWorker.ready).pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ue(_)})).toJSON();await wy(de.endpoint,de.keys.p256dh,de.keys.auth),S(!0)}catch(A){console.error("Failed to enable notifications:",A),alert("Failed to enable notifications")}finally{w(!1)}}async function Pe(){w(!0);try{const _=await(await navigator.serviceWorker.ready).pushManager.getSubscription();_&&(await Ry(_.endpoint),await _.unsubscribe()),S(!1)}catch(A){console.error("Failed to disable notifications:",A)}finally{w(!1)}}function Ue(A){const _="=".repeat((4-A.length%4)%4),B=(A+_).replace(/-/g,"+").replace(/_/g,"/"),F=window.atob(B);return new Uint8Array([...F].map(Te=>Te.charCodeAt(0))).buffer}async function Se(A,_){f(A),b(null);try{const B=await _();b({key:A,...B})}catch{b({key:A,success:!1,message:"Request failed"})}finally{f(null)}}function M(A){if(!A)return"Never";const _=new Date(A),F=new Date().getTime()-_.getTime(),de=Math.floor(F/6e4),Te=Math.floor(de/60),et=Math.floor(Te/24);return de<1?"Just now":de<60?`${de}m ago`:Te<24?`${Te}h ago`:`${et}d ago`}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content settings-modal",onClick:A=>A.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Settings"}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),i?c.jsx("div",{className:"settings-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Gmail Integration"}),c.jsxs("div",{className:"settings-gmail",children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Status"}),c.jsx("span",{className:`gmail-status-value ${l!=null&&l.connected?"connected":"disconnected"}`,children:l!=null&&l.connected?"Connected":"Not Connected"})]}),l!=null&&l.connected?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Last Scan"}),c.jsx("span",{className:"gmail-status-value",children:M(l.lastScan)})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Emails Scanned"}),c.jsx("span",{className:"gmail-status-value",children:l.itemsScanned})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Actions Created"}),c.jsx("span",{className:"gmail-status-value",children:l.actionsCreated})]}),l.lastError&&c.jsxs("div",{className:"gmail-error",children:[c.jsx("span",{className:"gmail-error-label",children:"Last Error"}),c.jsx("p",{children:l.lastError})]}),d&&c.jsx("div",{className:`scan-result ${d.success?"success":"error"}`,children:d.success?`Scanned ${d.emailsScanned} emails, created ${d.actionsCreated} actions`:`Scan failed: ${d.errors.join(", ")}`}),c.jsxs("div",{className:"gmail-buttons",children:[c.jsx("button",{className:"btn btn-primary",onClick:R,disabled:s,children:s?"Scanning...":"Scan Now"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>z(!0),children:"Disconnect"})]})]}):c.jsxs("div",{className:"gmail-connect",children:[c.jsx("p",{className:"gmail-connect-text",children:"Connect your Gmail to automatically scan for actionable emails."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:C,children:"Connect Gmail"})]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Push Notifications"}),c.jsx("div",{className:"settings-notifications",children:v==="unsupported"?c.jsx("p",{className:"notif-note",children:"Push notifications require installing this app and iOS 16.4+."}):v==="denied"?c.jsx("p",{className:"notif-note notif-denied",children:"Notifications blocked. Enable them in device Settings > Safari."}):y?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-status notif-enabled",children:"Notifications enabled"}),c.jsx("button",{className:"btn btn-secondary btn-block",onClick:Pe,disabled:T,children:T?"Disabling...":"Disable Notifications"})]}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-note",children:"Get notified when triggers fire or actions need attention."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:ye,disabled:T,children:T?"Enabling...":"Enable Notifications"})]})})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"System Health"}),c.jsxs("div",{className:"settings-health",children:[c.jsxs("div",{className:"health-row",children:[c.jsx("span",{className:"health-label",children:"Overall Status"}),c.jsx("span",{className:`health-value ${t==null?void 0:t.status}`,children:(t==null?void 0:t.status)==="ok"?"All Systems OK":"Issues Detected"})]}),(t==null?void 0:t.errors)&&t.errors.length>0&&c.jsxs("div",{className:"health-errors",children:[c.jsx("span",{className:"health-errors-label",children:"Errors"}),t.errors.map((A,_)=>c.jsx("p",{className:"health-error",children:A},_))]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Scan Schedule"}),c.jsxs("div",{className:"settings-schedule",children:[c.jsx("p",{children:"Automatic Gmail scans run every 4 hours."}),c.jsx("p",{className:"schedule-note",children:"Trigger checks run hourly. Web conditions checked every 4 hours per trigger. Follow-up reminders sent daily at 9 AM."})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Testing Tools"}),c.jsxs("div",{className:"settings-tools",children:[c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Check for stale actions"}),c.jsx("div",{className:"tool-desc",children:`Looks at all your active actions and flags ones you haven't touched in a while with a "Still important?" prompt. Normally happens automatically every morning at 9 AM.`})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>Se("followups",ay),disabled:o!==null,children:o==="followups"?"Running…":"Run now"})]}),c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Fire due triggers & check web conditions"}),c.jsx("div",{className:"tool-desc",children:"Two things in one: (1) promotes any Waiting actions whose due date has arrived into your active list, and (2) searches the web to see if any real-world conditions you're watching — like a store sale or product launch — have come true. Normally runs every hour / every 4 hours."})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>Se("triggers",ly),disabled:o!==null,children:o==="triggers"?"Running…":"Run now"})]}),g&&c.jsxs("div",{className:`tool-result ${g.success?"success":"error"}`,children:[g.success?"✓":"✗"," ",g.message]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"About"}),c.jsxs("p",{className:"settings-about",children:["Action Manager v1.0",c.jsx("br",{}),"Your personal commitment tracker"]})]})]}),O&&c.jsx(ht,{title:"Disconnect Gmail",message:"Are you sure you want to disconnect Gmail? Automatic email scanning will stop.",confirmLabel:"Disconnect",danger:!0,onConfirm:D,onCancel:()=>z(!1)}),c.jsx("style",{children:`
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
        `})]})})}function Iy({onClose:e,onSelectAction:t}){const[a,l]=x.useState(""),[n,i]=x.useState([]),[u,s]=x.useState(0),[r,d]=x.useState(!1),[p,v]=x.useState(!1),[m,y]=x.useState(""),[S,T]=x.useState(""),[w,o]=x.useState(!1),[f,g]=x.useState(!1),b=x.useCallback(async(h=!0)=>{d(!0);try{const C=await py({q:a||void 0,container:m||void 0,urgency:S||void 0,includeArchived:w,archiveOnly:f,limit:20,offset:h?0:n.length});i(h?C.actions:D=>[...D,...C.actions]),s(C.total),v(C.hasMore)}catch(C){console.error("Search failed:",C)}finally{d(!1)}},[a,m,S,w,f,n.length]);x.useEffect(()=>{const h=setTimeout(()=>{b(!0)},300);return()=>clearTimeout(h)},[a,m,S,w,f]);function O(h){return h?new Date(h).toLocaleDateString("en-US",{month:"short",day:"numeric"}):""}function z(){b(!1)}return c.jsxs("div",{className:"search-overlay",children:[c.jsxs("div",{className:"search-container",children:[c.jsxs("div",{className:"search-header",children:[c.jsxs("div",{className:"search-input-wrapper",children:[c.jsx("span",{className:"search-icon",children:"🔍"}),c.jsx("input",{type:"text",className:"search-input",placeholder:"Search actions...",value:a,onChange:h=>l(h.target.value),autoFocus:!0}),a&&c.jsx("button",{className:"search-clear",onClick:()=>l(""),children:"✕"})]}),c.jsx("button",{className:"search-close",onClick:e,children:"Cancel"})]}),c.jsxs("div",{className:"search-filters",children:[c.jsxs("select",{className:"search-filter",value:m,onChange:h=>y(h.target.value),children:[c.jsx("option",{value:"",children:"All Containers"}),Object.entries(St).map(([h,C])=>c.jsx("option",{value:h,children:C},h))]}),c.jsxs("select",{className:"search-filter",value:S,onChange:h=>T(h.target.value),children:[c.jsx("option",{value:"",children:"All Urgency"}),Object.entries(dl).map(([h,C])=>c.jsx("option",{value:h,children:C},h))]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:w,onChange:h=>{o(h.target.checked),h.target.checked&&g(!1)}}),"Include archived"]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:f,onChange:h=>{g(h.target.checked),h.target.checked&&o(!1)}}),"Archive only"]})]}),c.jsx("div",{className:"search-results",children:r&&n.length===0?c.jsx("div",{className:"search-loading",children:"Searching..."}):n.length===0?c.jsx("div",{className:"search-empty",children:a?"No actions found":"Start typing to search"}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"search-count",children:[u," result",u!==1?"s":""]}),n.map(h=>c.jsxs("div",{className:`search-result ${h.isArchived?"archived":""}`,onClick:()=>t(h.id),children:[c.jsx("div",{className:`result-urgency ${h.urgency.toLowerCase()}`}),c.jsxs("div",{className:"result-content",children:[c.jsx("div",{className:"result-description",children:h.description}),c.jsxs("div",{className:"result-meta",children:[c.jsx("span",{className:"result-container",children:St[h.container]}),h.dueDate&&c.jsxs("span",{className:"result-date",children:["Due ",O(h.dueDate)]}),h.isArchived&&c.jsx("span",{className:"result-archived",children:"Archived"})]})]})]},h.id)),p&&c.jsx("button",{className:"search-load-more",onClick:z,disabled:r,children:r?"Loading...":"Load more"})]})})]}),c.jsx("style",{children:`
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
      `})]})}function Py({onClose:e,onSelectAction:t}){const[a,l]=x.useState([]),[n,i]=x.useState([]),[u,s]=x.useState(!0),[r,d]=x.useState(!1),[p,v]=x.useState(""),[m,y]=x.useState(""),[S,T]=x.useState(null),[w,o]=x.useState(""),[f,g]=x.useState(null),[b,O]=x.useState(""),[z,h]=x.useState([]),[C,D]=x.useState(new Set),[R,L]=x.useState(new Set),[ye,Pe]=x.useState(!1),[Ue,Se]=x.useState(null);x.useEffect(()=>{M()},[]);async function M(){s(!0);try{const[E,H]=await Promise.all([yy(),Ny()]);l(E),i(H.suggestions)}catch(E){console.error("Failed to load groups:",E)}finally{s(!1)}}async function A(){if(p.trim())try{await vy({name:p.trim(),description:m.trim()||void 0}),v(""),y(""),d(!1),M()}catch(E){console.error("Failed to create group:",E)}}function _(E){T(E.id),o(E.suggestedName)}async function B(E){try{await jy(E,w.trim()||void 0),T(null),M()}catch(H){console.error("Failed to accept suggestion:",H)}}async function F(E){try{await Ay(E),i(H=>H.filter(Z=>Z.id!==E))}catch(H){console.error("Failed to dismiss suggestion:",H)}}async function de(E){try{await xy(E),Se(null),M()}catch(H){console.error("Failed to delete group:",H)}}async function Te(E){g(E),O(""),Pe(!0);try{const Z=(await Um()).filter(Vt=>!Vt.archivedAt&&!Vt.completedAt);h(Z);const Zt=a.find(Vt=>Vt.id===E),Rn=new Set((Zt==null?void 0:Zt.actions.map(Vt=>Vt.id))||[]);D(new Set(Rn)),L(new Set(Rn))}catch(H){console.error("Failed to load actions:",H)}finally{Pe(!1)}}async function et(){if(f!==null)try{const E=[...C].filter(Z=>!R.has(Z)),H=[...R].filter(Z=>!C.has(Z));E.length>0&&await Sy(f,E);for(const Z of H)await Co(f,Z);g(null),M()}catch(E){console.error("Failed to update group actions:",E)}}function Me(E){D(H=>{const Z=new Set(H);return Z.has(E)?Z.delete(E):Z.add(E),Z})}const ve=x.useMemo(()=>{if(!b.trim())return z;const E=b.toLowerCase();return z.filter(H=>H.description.toLowerCase().includes(E))},[z,b]);async function Qt(E,H){try{await Co(E,H),M()}catch(Z){console.error("Failed to remove action from group:",Z)}}async function wn(E){try{await by(E),M()}catch(H){console.error("Failed to archive group:",H)}}function dt(E){return E.actions.filter(H=>H.completedAt!==null).length}function Xt(E){return E.actions.length>0&&dt(E)===E.actions.length}function tt(E){return E.toLowerCase()}return c.jsxs("div",{className:"groups-overlay",children:[c.jsxs("div",{className:"groups-container",children:[c.jsxs("div",{className:"groups-header",children:[c.jsx("h2",{className:"groups-title",children:"Action Groups"}),c.jsxs("div",{className:"groups-header-actions",children:[c.jsx("button",{className:"btn btn-primary btn-small",onClick:()=>d(!0),children:"+ New Group"}),c.jsx("button",{className:"groups-close",onClick:e,children:"Done"})]})]}),c.jsx("div",{className:"groups-content",children:u?c.jsx("div",{className:"groups-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:"groups-section",children:[c.jsx("h3",{className:"section-title",children:"Your Groups"}),a.length===0?c.jsx("div",{className:"groups-empty",children:"No groups yet. Create one or accept a suggestion below."}):a.map(E=>c.jsxs("div",{className:"group-card",children:[Xt(E)&&c.jsxs("div",{className:"group-archive-banner",children:[c.jsx("span",{children:"All actions complete! Archive this group?"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>wn(E.id),children:"Archive"})]}),c.jsxs("div",{className:"group-header",children:[c.jsxs("div",{className:"group-info",children:[c.jsx("div",{className:"group-name",children:E.name}),E.description&&c.jsx("div",{className:"group-description",children:E.description})]}),c.jsxs("div",{className:"group-stats",children:[c.jsx("span",{className:`urgency-badge ${tt(E.highestUrgency)}`,children:dl[E.highestUrgency]}),c.jsxs("span",{className:"group-count",children:[E.activeCount,"/",E.actionCount," active"]})]})]}),c.jsxs("div",{className:"group-progress",children:[c.jsxs("div",{className:"progress-text",children:[dt(E)," of ",E.actions.length," complete"]}),c.jsx("div",{className:"progress-bar-track",children:c.jsx("div",{className:"progress-bar-fill",style:{width:E.actions.length>0?`${dt(E)/E.actions.length*100}%`:"0%"}})})]}),c.jsxs("div",{className:"group-actions-list",children:[E.actions.slice(0,3).map(H=>c.jsxs("div",{className:`group-action-item ${H.completedAt?"completed":""}`,children:[c.jsxs("div",{className:"group-action-clickable",onClick:()=>t(H.id),children:[c.jsx("div",{className:`action-urgency-dot ${tt(H.urgency)}`}),c.jsx("span",{className:"action-text",children:H.description})]}),c.jsx("button",{className:"action-remove-btn",onClick:Z=>{Z.stopPropagation(),Qt(E.id,H.id)},title:"Remove from group",children:"×"})]},H.id)),E.actions.length>3&&c.jsxs("div",{className:"group-more",children:["+",E.actions.length-3," more"]})]}),c.jsxs("div",{className:"group-footer",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>Te(E.id),children:"Add Actions"}),c.jsx("button",{className:"btn-link",onClick:()=>Se(E.id),children:"Delete Group"})]})]},E.id))]}),n.length>0&&c.jsxs("section",{className:"groups-section",children:[c.jsx("h3",{className:"section-title",children:"Suggested Groups"}),c.jsx("p",{className:"section-subtitle",children:"AI-detected actions that may be steps toward the same goal"}),n.map(E=>c.jsxs("div",{className:"suggestion-card goal-suggestion",children:[c.jsxs("div",{className:"suggestion-content",children:[S===E.id?c.jsxs("div",{className:"suggestion-edit-name",children:[c.jsx("input",{type:"text",className:"form-input suggestion-name-input",value:w,onChange:H=>o(H.target.value),autoFocus:!0,onKeyDown:H=>{H.key==="Enter"&&B(E.id),H.key==="Escape"&&T(null)}}),c.jsxs("div",{className:"suggestion-edit-actions",children:[c.jsx("button",{className:"btn btn-primary btn-small",onClick:()=>B(E.id),children:"Create"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>T(null),children:"Cancel"})]})]}):c.jsx("div",{className:"suggestion-name",children:E.suggestedName}),c.jsx("div",{className:"suggestion-reason",children:E.reasoning}),c.jsx("div",{className:"suggestion-actions-list",children:E.actions.map(H=>c.jsx("div",{className:"suggestion-action-item",children:H.shortDescription||H.description},H.id))})]}),S!==E.id&&c.jsxs("div",{className:"suggestion-buttons",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>_(E),children:"Group"}),c.jsx("button",{className:"btn-link btn-small",onClick:()=>F(E.id),children:"Dismiss"})]})]},E.id))]})]})})]}),r&&c.jsx("div",{className:"modal-overlay",onClick:()=>d(!1),children:c.jsxs("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Create Group"}),c.jsx("button",{className:"modal-close",onClick:()=>d(!1),children:"×"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Group Name"}),c.jsx("input",{type:"text",className:"form-input",value:p,onChange:E=>v(E.target.value),placeholder:"e.g., Project Alpha",autoFocus:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("textarea",{className:"form-textarea",value:m,onChange:E=>y(E.target.value),placeholder:"What is this group about?",rows:2})]}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:A,disabled:!p.trim(),children:"Create Group"})]})}),f!==null&&c.jsx("div",{className:"modal-overlay",onClick:()=>g(null),children:c.jsxs("div",{className:"modal-content add-actions-modal",onClick:E=>E.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Add Actions to Group"}),c.jsx("button",{className:"modal-close",onClick:()=>g(null),children:"×"})]}),c.jsx("div",{className:"form-group",children:c.jsx("input",{type:"text",className:"form-input",value:b,onChange:E=>O(E.target.value),placeholder:"Search actions...",autoFocus:!0})}),!ye&&ve.length>0&&c.jsx("div",{className:"add-actions-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:ve.every(E=>C.has(E.id)),onChange:()=>{const E=ve.every(H=>C.has(H.id));D(H=>{const Z=new Set(H);for(const Zt of ve)E?Z.delete(Zt.id):Z.add(Zt.id);return Z})}}),"Select All (",ve.length,")"]})}),c.jsx("div",{className:"add-actions-list",children:ye?c.jsx("div",{className:"groups-loading",children:"Loading actions..."}):ve.length===0?c.jsx("div",{className:"groups-empty",children:"No matching actions found."}):ve.map(E=>c.jsxs("label",{className:"add-action-row",children:[c.jsx("input",{type:"checkbox",checked:C.has(E.id),onChange:()=>Me(E.id)}),c.jsx("div",{className:`action-urgency-dot ${tt(E.urgency)}`}),c.jsx("span",{className:"action-text",children:E.description})]},E.id))}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:et,children:"Save"})]})}),Ue!==null&&c.jsx(ht,{title:"Delete Group",message:"Delete this group? Actions will be ungrouped but not deleted.",confirmLabel:"Delete",danger:!0,onConfirm:()=>de(Ue),onCancel:()=>Se(null)}),c.jsx("style",{children:`
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
      `})]})}function ev({onClose:e}){const[t,a]=x.useState([]),[l,n]=x.useState(null),[i,u]=x.useState(!0),[s,r]=x.useState("proposed"),[d,p]=x.useState(null),[v,m]=x.useState(null),[y,S]=x.useState(null);x.useEffect(()=>{T()},[]);async function T(){u(!0);try{const[h,C]=await Promise.all([Ey(),My()]);a(h),n(C)}catch(h){console.error("Failed to load tuning data:",h)}finally{u(!1)}}async function w(h){try{await zy(h),T()}catch(C){console.error("Failed to activate rule:",C)}}async function o(h,C=!1,D){try{await Cy(h,D,C),p(null),S(null),T()}catch(R){console.error("Failed to reject rule:",R)}}async function f(h){try{await Dy(h),T()}catch(C){console.error("Failed to update threshold:",C)}}async function g(h){try{await Oy(h),S(null),T()}catch(C){console.error("Failed to delete rule:",C)}}const b=t.filter(h=>{switch(s){case"proposed":return h.status==="PROPOSED";case"shadow":return h.status==="SHADOW";case"active":return h.status==="ACTIVE";case"rejected":return h.status==="REJECTED"}});function O(h){switch(h){case"SHADOW":return"Testing";case"PROPOSED":return"Ready";case"ACTIVE":return"Active";case"REJECTED":return"Rejected";default:return h}}function z(h){return h.shadowCount===0?0:Math.round(h.shadowSuccesses/h.shadowCount*100)}return c.jsxs("div",{className:"tuning-overlay",children:[c.jsxs("div",{className:"tuning-container",children:[c.jsxs("div",{className:"tuning-header",children:[c.jsx("h2",{className:"tuning-title",children:"AI Tuning"}),c.jsx("button",{className:"tuning-close",onClick:e,children:"Done"})]}),l&&c.jsxs("div",{className:"tuning-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.active}),c.jsx("span",{className:"stat-label",children:"Active Rules"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.proposed}),c.jsx("span",{className:"stat-label",children:"Pending Review"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:l.counts.shadow}),c.jsx("span",{className:"stat-label",children:"Testing"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsxs("span",{className:"stat-value",children:[l.avgSuccessRate,"%"]}),c.jsx("span",{className:"stat-label",children:"Avg Success"})]})]}),c.jsxs("div",{className:"tuning-tabs",children:[c.jsxs("button",{className:`tuning-tab ${s==="proposed"?"active":""}`,onClick:()=>r("proposed"),children:["Pending ",l&&l.counts.proposed>0&&`(${l.counts.proposed})`]}),c.jsx("button",{className:`tuning-tab ${s==="shadow"?"active":""}`,onClick:()=>r("shadow"),children:"Testing"}),c.jsx("button",{className:`tuning-tab ${s==="active"?"active":""}`,onClick:()=>r("active"),children:"Active"}),c.jsx("button",{className:`tuning-tab ${s==="rejected"?"active":""}`,onClick:()=>r("rejected"),children:"Rejected"})]}),c.jsx("div",{className:"tuning-content",children:i?c.jsx("div",{className:"tuning-loading",children:"Loading..."}):b.length===0?c.jsx("div",{className:"tuning-empty",children:t.length===0?c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"No tuning rules yet."}),c.jsx("p",{className:"tuning-hint",children:"Tuning rules help the AI learn from your corrections. When you correct an action's urgency or container, the system creates rules to improve future parsing."})]}):c.jsxs(c.Fragment,{children:[s==="proposed"&&"No rules ready for review.",s==="shadow"&&"No rules currently testing.",s==="active"&&"No active tuning rules.",s==="rejected"&&"No rejected rules.",c.jsx("p",{className:"tuning-hint",children:"Tuning rules are created when you provide feedback on AI-parsed actions."})]})}):b.map(h=>{const C=v===h.id;return c.jsxs("div",{className:`rule-card ${C?"rule-card-expanded":""}`,children:[c.jsxs("div",{className:"rule-collapsed",onClick:()=>m(C?null:h.id),children:[c.jsxs("div",{className:"rule-collapsed-top",children:[c.jsx("span",{className:`rule-category category-${h.category}`,children:h.category}),c.jsx("span",{className:`rule-status status-${h.status.toLowerCase()}`,children:O(h.status)}),c.jsx("span",{className:"rule-expand-icon",children:C?"▲":"▼"})]}),c.jsx("div",{className:"rule-description-collapsed",children:C?h.description:h.description.length>60?h.description.slice(0,60)+"...":h.description}),!C&&(h.status==="SHADOW"||h.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(h.shadowCount/h.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[h.shadowCount,"/",h.shadowThreshold," tests (",z(h),"% success)"]})]})]}),C&&c.jsxs("div",{className:"rule-expanded-body",children:[c.jsxs("div",{className:"rule-details",children:[c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"When:"}),c.jsx("span",{className:"detail-text",children:h.condition})]}),c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"Then:"}),c.jsx("span",{className:"detail-text",children:h.transformation})]})]}),(h.status==="SHADOW"||h.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(h.shadowCount/h.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[h.shadowCount,"/",h.shadowThreshold," tests (",z(h),"% success)"]})]}),h.userFeedback&&c.jsxs("div",{className:"rule-feedback",children:[c.jsx("span",{className:"detail-label",children:"Feedback:"}),h.userFeedback]}),c.jsxs("div",{className:"rule-actions",children:[h.status==="PROPOSED"&&d!==h.id&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-success btn-small",onClick:D=>{D.stopPropagation(),w(h.id)},children:"Activate"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:D=>{D.stopPropagation(),p(h.id)},children:"Reject"})]}),h.status==="PROPOSED"&&d===h.id&&c.jsxs("div",{className:"reject-options",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:D=>{D.stopPropagation(),S({type:"reject-feedback",ruleId:h.id})},children:"Just reject"}),c.jsxs("button",{className:"btn btn-secondary btn-small reject-stop",onClick:D=>{D.stopPropagation(),o(h.id,!0)},children:["Stop ",h.category," suggestions"]}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:D=>{D.stopPropagation(),f(h.id),p(null)},children:"Ask less often"}),c.jsx("button",{className:"btn-link",onClick:D=>{D.stopPropagation(),p(null)},children:"Cancel"})]}),h.status==="SHADOW"&&c.jsx("button",{className:"btn btn-primary btn-small",onClick:D=>{D.stopPropagation(),w(h.id)},children:"Activate Early"}),c.jsx("button",{className:"btn-link danger",onClick:D=>{D.stopPropagation(),S({type:"delete",ruleId:h.id})},children:"Delete"})]})]})]},h.id)})})]}),(y==null?void 0:y.type)==="delete"&&c.jsx(ht,{title:"Delete Rule",message:"Delete this tuning rule?",confirmLabel:"Delete",danger:!0,onConfirm:()=>g(y.ruleId),onCancel:()=>S(null)}),(y==null?void 0:y.type)==="reject-feedback"&&c.jsx(ht,{title:"Reject Rule",message:"Why are you rejecting this rule?",confirmLabel:"Reject",inputMode:!0,inputPlaceholder:"Reason (optional)",inputLabel:"Feedback:",onConfirm:h=>o(y.ruleId,!1,h||void 0),onCancel:()=>S(null)}),c.jsx("style",{children:`
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
      `})]})}function tv(){const[e,t]=x.useState("ACTIONABLE_NOW"),[a,l]=x.useState(void 0),[n,i]=x.useState(!1),[u,s]=x.useState(!1),[r,d]=x.useState(!1),[p,v]=x.useState(!1),[m,y]=x.useState(null),[S,T]=x.useState(0),[w,o]=x.useState(null),[f,g]=x.useState(0);x.useEffect(()=>{b(),O();const L=setInterval(()=>{b(),O()},30*60*1e3);return()=>clearInterval(L)},[]);async function b(){try{const L=await Gm();o(L)}catch{}}async function O(){try{const L=await Rm();g(L.goalSuggestions||0)}catch{}}const z=w&&w.errors.length>0;function h(){T(L=>L+1),Zl(),O()}function C(L){s(!1),y(L)}function D(L){L==="TUNING"?v(!0):(l(void 0),t(L))}function R(L){t(null),l(L)}return c.jsxs("div",{className:"app",children:[c.jsxs("header",{className:"app-header",children:[c.jsx("button",{className:"search-btn",onClick:()=>s(!0),title:"Search",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("path",{d:"M21 21l-4.35-4.35"})]})}),c.jsxs("button",{className:"search-btn groups-btn",onClick:()=>d(!0),title:"Groups",children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]}),f>0&&c.jsx("span",{className:"groups-badge",children:f})]}),c.jsx("button",{className:`settings-btn ${z?"has-errors":""}`,onClick:()=>i(!0),title:"Settings",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),z&&c.jsx("div",{className:"error-banner",onClick:()=>i(!0),children:"⚠ System issue detected — tap to view in Settings"}),c.jsxs("main",{className:"main-content",children:[c.jsx(Ly,{activeContainer:e,onContainerChange:D,onFlagFilter:R}),c.jsx(Wy,{activeContainer:e,flagFilter:a,onOpenGroups:()=>d(!0)},S)]}),n&&c.jsx(Fy,{onClose:()=>i(!1)}),u&&c.jsx(Iy,{onClose:()=>s(!1),onSelectAction:C}),r&&c.jsx(Py,{onClose:()=>d(!1),onSelectAction:L=>{d(!1),y(L)}}),p&&c.jsx(ev,{onClose:()=>v(!1)}),m&&c.jsx(Ym,{actionId:m,onClose:()=>y(null),onUpdate:()=>{h(),y(null)}})]})}$p.createRoot(document.getElementById("root")).render(c.jsx(x.StrictMode,{children:c.jsx(tv,{})}));
