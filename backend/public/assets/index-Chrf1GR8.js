(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();var Ho={exports:{}},Ki={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg=Symbol.for("react.transitional.element"),ug=Symbol.for("react.fragment");function Bo(e,t,l){var a=null;if(l!==void 0&&(a=""+l),t.key!==void 0&&(a=""+t.key),"key"in t){l={};for(var n in t)n!=="key"&&(l[n]=t[n])}else l=t;return t=l.ref,{$$typeof:sg,type:e,key:a,ref:t!==void 0?t:null,props:l}}Ki.Fragment=ug;Ki.jsx=Bo;Ki.jsxs=Bo;Ho.exports=Ki;var c=Ho.exports,Go={exports:{}},Y={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.transitional.element"),rg=Symbol.for("react.portal"),og=Symbol.for("react.fragment"),fg=Symbol.for("react.strict_mode"),dg=Symbol.for("react.profiler"),mg=Symbol.for("react.consumer"),gg=Symbol.for("react.context"),hg=Symbol.for("react.forward_ref"),pg=Symbol.for("react.suspense"),yg=Symbol.for("react.memo"),Lo=Symbol.for("react.lazy"),vg=Symbol.for("react.activity"),nr=Symbol.iterator;function bg(e){return e===null||typeof e!="object"?null:(e=nr&&e[nr]||e["@@iterator"],typeof e=="function"?e:null)}var Yo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qo=Object.assign,Xo={};function Ea(e,t,l){this.props=e,this.context=t,this.refs=Xo,this.updater=l||Yo}Ea.prototype.isReactComponent={};Ea.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ea.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qo(){}Qo.prototype=Ea.prototype;function Ps(e,t,l){this.props=e,this.context=t,this.refs=Xo,this.updater=l||Yo}var eu=Ps.prototype=new Qo;eu.constructor=Ps;qo(eu,Ea.prototype);eu.isPureReactComponent=!0;var ir=Array.isArray;function ls(){}var ue={H:null,A:null,T:null,S:null},Zo=Object.prototype.hasOwnProperty;function tu(e,t,l){var a=l.ref;return{$$typeof:Is,type:e,key:t,ref:a!==void 0?a:null,props:l}}function xg(e,t){return tu(e.type,t,e.props)}function lu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Is}function Ng(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return t[l]})}var cr=/\/+/g;function yc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ng(""+e.key):t.toString(36)}function Sg(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ls,ls):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Vl(e,t,l,a,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Is:case rg:s=!0;break;case Lo:return s=e._init,Vl(s(e._payload),t,l,a,n)}}if(s)return n=n(e),s=a===""?"."+yc(e,0):a,ir(n)?(l="",s!=null&&(l=s.replace(cr,"$&/")+"/"),Vl(n,t,l,"",function(d){return d})):n!=null&&(lu(n)&&(n=xg(n,l+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(cr,"$&/")+"/")+s)),t.push(n)),1;s=0;var u=a===""?".":a+":";if(ir(e))for(var r=0;r<e.length;r++)a=e[r],i=u+yc(a,r),s+=Vl(a,t,l,i,n);else if(r=bg(e),typeof r=="function")for(e=r.call(e),r=0;!(a=e.next()).done;)a=a.value,i=u+yc(a,r++),s+=Vl(a,t,l,i,n);else if(i==="object"){if(typeof e.then=="function")return Vl(Sg(e),t,l,a,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function Hn(e,t,l){if(e==null)return e;var a=[],n=0;return Vl(e,a,"","",function(i){return t.call(l,i,n++)}),a}function jg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var sr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ag={map:Hn,forEach:function(e,t,l){Hn(e,function(){t.apply(this,arguments)},l)},count:function(e){var t=0;return Hn(e,function(){t++}),t},toArray:function(e){return Hn(e,function(t){return t})||[]},only:function(e){if(!lu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Activity=vg;Y.Children=Ag;Y.Component=Ea;Y.Fragment=og;Y.Profiler=dg;Y.PureComponent=Ps;Y.StrictMode=fg;Y.Suspense=pg;Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue;Y.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ue.H.useMemoCache(e)}};Y.cache=function(e){return function(){return e.apply(null,arguments)}};Y.cacheSignal=function(){return null};Y.cloneElement=function(e,t,l){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=qo({},e.props),n=e.key;if(t!=null)for(i in t.key!==void 0&&(n=""+t.key),t)!Zo.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(a[i]=t[i]);var i=arguments.length-2;if(i===1)a.children=l;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];a.children=s}return tu(e.type,n,a)};Y.createContext=function(e){return e={$$typeof:gg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:mg,_context:e},e};Y.createElement=function(e,t,l){var a,n={},i=null;if(t!=null)for(a in t.key!==void 0&&(i=""+t.key),t)Zo.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(n[a]=t[a]);var s=arguments.length-2;if(s===1)n.children=l;else if(1<s){for(var u=Array(s),r=0;r<s;r++)u[r]=arguments[r+2];n.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)n[a]===void 0&&(n[a]=s[a]);return tu(e,i,n)};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:hg,render:e}};Y.isValidElement=lu;Y.lazy=function(e){return{$$typeof:Lo,_payload:{_status:-1,_result:e},_init:jg}};Y.memo=function(e,t){return{$$typeof:yg,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=ue.T,l={};ue.T=l;try{var a=e(),n=ue.S;n!==null&&n(l,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(ls,sr)}catch(i){sr(i)}finally{t!==null&&l.types!==null&&(t.types=l.types),ue.T=t}};Y.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()};Y.use=function(e){return ue.H.use(e)};Y.useActionState=function(e,t,l){return ue.H.useActionState(e,t,l)};Y.useCallback=function(e,t){return ue.H.useCallback(e,t)};Y.useContext=function(e){return ue.H.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e,t){return ue.H.useDeferredValue(e,t)};Y.useEffect=function(e,t){return ue.H.useEffect(e,t)};Y.useEffectEvent=function(e){return ue.H.useEffectEvent(e)};Y.useId=function(){return ue.H.useId()};Y.useImperativeHandle=function(e,t,l){return ue.H.useImperativeHandle(e,t,l)};Y.useInsertionEffect=function(e,t){return ue.H.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return ue.H.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return ue.H.useMemo(e,t)};Y.useOptimistic=function(e,t){return ue.H.useOptimistic(e,t)};Y.useReducer=function(e,t,l){return ue.H.useReducer(e,t,l)};Y.useRef=function(e){return ue.H.useRef(e)};Y.useState=function(e){return ue.H.useState(e)};Y.useSyncExternalStore=function(e,t,l){return ue.H.useSyncExternalStore(e,t,l)};Y.useTransition=function(){return ue.H.useTransition()};Y.version="19.2.4";Go.exports=Y;var S=Go.exports,Vo={exports:{}},Ji={},Ko={exports:{}},Jo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,j){var D=E.length;E.push(j);e:for(;0<D;){var z=D-1>>>1,H=E[z];if(0<n(H,j))E[z]=j,E[D]=H,D=z;else break e}}function l(E){return E.length===0?null:E[0]}function a(E){if(E.length===0)return null;var j=E[0],D=E.pop();if(D!==j){E[0]=D;e:for(var z=0,H=E.length,ne=H>>>1;z<ne;){var ze=2*(z+1)-1,qe=E[ze],we=ze+1,de=E[we];if(0>n(qe,D))we<H&&0>n(de,qe)?(E[z]=de,E[we]=D,z=we):(E[z]=qe,E[ze]=D,z=ze);else if(we<H&&0>n(de,D))E[z]=de,E[we]=D,z=we;else break e}}return j}function n(E,j){var D=E.sortIndex-j.sortIndex;return D!==0?D:E.id-j.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,u=s.now();e.unstable_now=function(){return s.now()-u}}var r=[],d=[],h=1,v=null,m=3,p=!1,b=!1,N=!1,_=!1,o=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function x(E){for(var j=l(d);j!==null;){if(j.callback===null)a(d);else if(j.startTime<=E)a(d),j.sortIndex=j.expirationTime,t(r,j);else break;j=l(d)}}function k(E){if(N=!1,x(E),!b)if(l(r)!==null)b=!0,M||(M=!0,ee());else{var j=l(d);j!==null&&ve(k,j.startTime-E)}}var M=!1,y=-1,O=5,w=-1;function R(){return _?!0:!(e.unstable_now()-w<O)}function P(){if(_=!1,M){var E=e.unstable_now();w=E;var j=!0;try{e:{b=!1,N&&(N=!1,f(y),y=-1),p=!0;var D=m;try{t:{for(x(E),v=l(r);v!==null&&!(v.expirationTime>E&&R());){var z=v.callback;if(typeof z=="function"){v.callback=null,m=v.priorityLevel;var H=z(v.expirationTime<=E);if(E=e.unstable_now(),typeof H=="function"){v.callback=H,x(E),j=!0;break t}v===l(r)&&a(r),x(E)}else a(r);v=l(r)}if(v!==null)j=!0;else{var ne=l(d);ne!==null&&ve(k,ne.startTime-E),j=!1}}break e}finally{v=null,m=D,p=!1}j=void 0}}finally{j?ee():M=!1}}}var ee;if(typeof g=="function")ee=function(){g(P)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,ye=Te.port2;Te.port1.onmessage=P,ee=function(){ye.postMessage(null)}}else ee=function(){o(P,0)};function ve(E,j){y=o(function(){E(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var D=m;m=j;try{return E()}finally{m=D}},e.unstable_requestPaint=function(){_=!0},e.unstable_runWithPriority=function(E,j){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var D=m;m=E;try{return j()}finally{m=D}},e.unstable_scheduleCallback=function(E,j,D){var z=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?z+D:z):D=z,E){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=D+H,E={id:h++,callback:j,priorityLevel:E,startTime:D,expirationTime:H,sortIndex:-1},D>z?(E.sortIndex=D,t(d,E),l(r)===null&&E===l(d)&&(N?(f(y),y=-1):N=!0,ve(k,D-z))):(E.sortIndex=H,t(r,E),b||p||(b=!0,M||(M=!0,ee()))),E},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(E){var j=m;return function(){var D=m;m=j;try{return E.apply(this,arguments)}finally{m=D}}}})(Jo);Ko.exports=Jo;var Tg=Ko.exports,Wo={exports:{}},Ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg=S;function $o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $t(){}var Le={d:{f:$t,r:function(){throw Error($o(522))},D:$t,C:$t,L:$t,m:$t,X:$t,S:$t,M:$t},p:0,findDOMNode:null},Cg=Symbol.for("react.portal");function Dg(e,t,l){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cg,key:a==null?null:""+a,children:e,containerInfo:t,implementation:l}}var Ja=Eg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Wi(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Le;Ye.createPortal=function(e,t){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error($o(299));return Dg(e,t,null,l)};Ye.flushSync=function(e){var t=Ja.T,l=Le.p;try{if(Ja.T=null,Le.p=2,e)return e()}finally{Ja.T=t,Le.p=l,Le.d.f()}};Ye.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Le.d.C(e,t))};Ye.prefetchDNS=function(e){typeof e=="string"&&Le.d.D(e)};Ye.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var l=t.as,a=Wi(l,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;l==="style"?Le.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:n,fetchPriority:i}):l==="script"&&Le.d.X(e,{crossOrigin:a,integrity:n,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ye.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var l=Wi(t.as,t.crossOrigin);Le.d.M(e,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Le.d.M(e)};Ye.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var l=t.as,a=Wi(l,t.crossOrigin);Le.d.L(e,l,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ye.preloadModule=function(e,t){if(typeof e=="string")if(t){var l=Wi(t.as,t.crossOrigin);Le.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Le.d.m(e)};Ye.requestFormReset=function(e){Le.d.r(e)};Ye.unstable_batchedUpdates=function(e,t){return e(t)};Ye.useFormState=function(e,t,l){return Ja.H.useFormState(e,t,l)};Ye.useFormStatus=function(){return Ja.H.useHostTransitionStatus()};Ye.version="19.2.4";function Fo(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fo)}catch(e){console.error(e)}}Fo(),Wo.exports=Ye;var zg=Wo.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=Tg,Io=S,wg=zg;function T(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jn(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ef(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tf(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ur(e){if(jn(e)!==e)throw Error(T(188))}function Og(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return ur(n),e;if(i===a)return ur(n),t;i=i.sibling}throw Error(T(188))}if(l.return!==a.return)l=n,a=i;else{for(var s=!1,u=n.child;u;){if(u===l){s=!0,l=n,a=i;break}if(u===a){s=!0,a=n,l=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===l){s=!0,l=i,a=n;break}if(u===a){s=!0,a=i,l=n;break}u=u.sibling}if(!s)throw Error(T(189))}}if(l.alternate!==a)throw Error(T(190))}if(l.tag!==3)throw Error(T(188));return l.stateNode.current===l?e:t}function lf(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=lf(e),t!==null)return t;e=e.sibling}return null}var re=Object.assign,Mg=Symbol.for("react.element"),Bn=Symbol.for("react.transitional.element"),qa=Symbol.for("react.portal"),Wl=Symbol.for("react.fragment"),af=Symbol.for("react.strict_mode"),as=Symbol.for("react.profiler"),nf=Symbol.for("react.consumer"),Ut=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),ns=Symbol.for("react.suspense"),is=Symbol.for("react.suspense_list"),nu=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),cs=Symbol.for("react.activity"),kg=Symbol.for("react.memo_cache_sentinel"),rr=Symbol.iterator;function Ra(e){return e===null||typeof e!="object"?null:(e=rr&&e[rr]||e["@@iterator"],typeof e=="function"?e:null)}var _g=Symbol.for("react.client.reference");function ss(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_g?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wl:return"Fragment";case as:return"Profiler";case af:return"StrictMode";case ns:return"Suspense";case is:return"SuspenseList";case cs:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case qa:return"Portal";case Ut:return e.displayName||"Context";case nf:return(e._context.displayName||"Context")+".Consumer";case au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nu:return t=e.displayName||null,t!==null?t:ss(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return ss(e(t))}catch{}}return null}var Xa=Array.isArray,L=Io.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=wg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,zl={pending:!1,data:null,method:null,action:null},us=[],$l=-1;function Et(e){return{current:e}}function De(e){0>$l||(e.current=us[$l],us[$l]=null,$l--)}function ie(e,t){$l++,us[$l]=e.current,e.current=t}var At=Et(null),rn=Et(null),ul=Et(null),hi=Et(null);function pi(e,t){switch(ie(ul,t),ie(rn,e),ie(At,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?po(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=po(t),e=Tm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}De(At),ie(At,e)}function ha(){De(At),De(rn),De(ul)}function rs(e){e.memoizedState!==null&&ie(hi,e);var t=At.current,l=Tm(t,e.type);t!==l&&(ie(rn,e),ie(At,l))}function yi(e){rn.current===e&&(De(At),De(rn)),hi.current===e&&(De(hi),xn._currentValue=zl)}var vc,or;function Tl(e){if(vc===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);vc=t&&t[1]||"",or=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vc+e+or}var bc=!1;function xc(e,t){if(!e||bc)return"";bc=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(p){var m=p}Reflect.construct(e,[],v)}else{try{v.call()}catch(p){m=p}e.call(v.prototype)}}else{try{throw Error()}catch(p){m=p}(v=e())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(p){if(p&&m&&typeof p.stack=="string")return[p.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),s=i[0],u=i[1];if(s&&u){var r=s.split(`
`),d=u.split(`
`);for(n=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(a===r.length||n===d.length)for(a=r.length-1,n=d.length-1;1<=a&&0<=n&&r[a]!==d[n];)n--;for(;1<=a&&0<=n;a--,n--)if(r[a]!==d[n]){if(a!==1||n!==1)do if(a--,n--,0>n||r[a]!==d[n]){var h=`
`+r[a].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=a&&0<=n);break}}}finally{bc=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Tl(l):""}function Rg(e,t){switch(e.tag){case 26:case 27:case 5:return Tl(e.type);case 16:return Tl("Lazy");case 13:return e.child!==t&&t!==null?Tl("Suspense Fallback"):Tl("Suspense");case 19:return Tl("SuspenseList");case 0:case 15:return xc(e.type,!1);case 11:return xc(e.type.render,!1);case 1:return xc(e.type,!0);case 31:return Tl("Activity");default:return""}}function fr(e){try{var t="",l=null;do t+=Rg(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var os=Object.prototype.hasOwnProperty,iu=Ae.unstable_scheduleCallback,Nc=Ae.unstable_cancelCallback,Ug=Ae.unstable_shouldYield,Hg=Ae.unstable_requestPaint,et=Ae.unstable_now,Bg=Ae.unstable_getCurrentPriorityLevel,cf=Ae.unstable_ImmediatePriority,sf=Ae.unstable_UserBlockingPriority,vi=Ae.unstable_NormalPriority,Gg=Ae.unstable_LowPriority,uf=Ae.unstable_IdlePriority,Lg=Ae.log,Yg=Ae.unstable_setDisableYieldValue,An=null,tt=null;function al(e){if(typeof Lg=="function"&&Yg(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(An,e)}catch{}}var lt=Math.clz32?Math.clz32:Qg,qg=Math.log,Xg=Math.LN2;function Qg(e){return e>>>=0,e===0?32:31-(qg(e)/Xg|0)|0}var Gn=256,Ln=262144,Yn=4194304;function El(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $i(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?n=El(a):(s&=u,s!==0?n=El(s):l||(l=u&~e,l!==0&&(n=El(l))))):(u=a&~i,u!==0?n=El(u):s!==0?n=El(s):l||(l=a&~e,l!==0&&(n=El(l)))),n===0?0:t!==0&&t!==n&&!(t&i)&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Tn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rf(){var e=Yn;return Yn<<=1,!(Yn&62914560)&&(Yn=4194304),e}function Sc(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function En(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vg(e,t,l,a,n,i){var s=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var u=e.entanglements,r=e.expirationTimes,d=e.hiddenUpdates;for(l=s&~l;0<l;){var h=31-lt(l),v=1<<h;u[h]=0,r[h]=-1;var m=d[h];if(m!==null)for(d[h]=null,h=0;h<m.length;h++){var p=m[h];p!==null&&(p.lane&=-536870913)}l&=~v}a!==0&&of(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function of(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-lt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function ff(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-lt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function df(e,t){var l=t&-t;return l=l&42?1:cu(l),l&(e.suspendedLanes|t)?0:l}function cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function su(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mf(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:Um(e.type))}function dr(e,t){var l=$.p;try{return $.p=e,t()}finally{$.p=l}}var Nl=Math.random().toString(36).slice(2),ke="__reactFiber$"+Nl,Je="__reactProps$"+Nl,Ca="__reactContainer$"+Nl,fs="__reactEvents$"+Nl,Kg="__reactListeners$"+Nl,Jg="__reactHandles$"+Nl,mr="__reactResources$"+Nl,Cn="__reactMarker$"+Nl;function uu(e){delete e[ke],delete e[Je],delete e[fs],delete e[Kg],delete e[Jg]}function Fl(e){var t=e[ke];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ca]||l[ke]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=No(e);e!==null;){if(l=e[ke])return l;e=No(e)}return t}e=l,l=e.parentNode}return null}function Da(e){if(e=e[ke]||e[Ca]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Qa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(T(33))}function sa(e){var t=e[mr];return t||(t=e[mr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[Cn]=!0}var gf=new Set,hf={};function Gl(e,t){pa(e,t),pa(e+"Capture",t)}function pa(e,t){for(hf[e]=t,e=0;e<t.length;e++)gf.add(t[e])}var Wg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gr={},hr={};function $g(e){return os.call(hr,e)?!0:os.call(gr,e)?!1:Wg.test(e)?hr[e]=!0:(gr[e]=!0,!1)}function ei(e,t,l){if($g(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function qn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Dt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fg(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){l=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(s){l=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ds(e){if(!e._valueTracker){var t=pf(e)?"checked":"value";e._valueTracker=Fg(e,t,""+e[t])}}function yf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=pf(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ig=/[\n"\\]/g;function ot(e){return e.replace(Ig,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ms(e,t,l,a,n,i,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?gs(e,s,st(t)):l!=null?gs(e,s,st(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+st(u):e.removeAttribute("name")}function vf(e,t,l,a,n,i,s,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ds(e);return}l=l!=null?""+st(l):"",t=t!=null?""+st(t):l,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),ds(e)}function gs(e,t,l){t==="number"&&bi(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function ua(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+st(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function bf(e,t,l){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+st(l):""}function xf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(T(92));if(Xa(a)){if(1<a.length)throw Error(T(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=st(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),ds(e)}function ya(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Pg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pr(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Pg.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Nf(e,t,l){if(t!=null&&typeof t!="object")throw Error(T(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&pr(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&pr(e,i,t[i])}function ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),th=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(e){return th.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ht(){}var hs=null;function ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,ra=null;function yr(e){var t=Da(e);if(t&&(e=t.stateNode)){var l=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(ms(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ot(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Je]||null;if(!n)throw Error(T(90));ms(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&yf(a)}break e;case"textarea":bf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&ua(e,!!l.multiple,t,!1)}}}var jc=!1;function Sf(e,t,l){if(jc)return e(t,l);jc=!0;try{var a=e(t);return a}finally{if(jc=!1,(Il!==null||ra!==null)&&(uc(),Il&&(t=Il,e=ra,ra=Il=null,yr(t),e)))for(t=0;t<e.length;t++)yr(e[t])}}function on(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Je]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(T(231,t,typeof l));return l}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ps=!1;if(qt)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){ps=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{ps=!1}var nl=null,fu=null,li=null;function jf(){if(li)return li;var e,t=fu,l=t.length,a,n="value"in nl?nl.value:nl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var s=l-e;for(a=1;a<=s&&t[l-a]===n[i-a];a++);return li=n.slice(e,1<a?1-a:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xn(){return!0}function vr(){return!1}function We(e){function t(l,a,n,i,s){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(l=e[u],this[u]=l?l(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xn:vr,this.isPropagationStopped=vr,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),t}var Ll={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fi=We(Ll),Dn=re({},Ll,{view:0,detail:0}),lh=We(Dn),Ac,Tc,Ha,Ii=re({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ha&&(Ha&&e.type==="mousemove"?(Ac=e.screenX-Ha.screenX,Tc=e.screenY-Ha.screenY):Tc=Ac=0,Ha=e),Ac)},movementY:function(e){return"movementY"in e?e.movementY:Tc}}),br=We(Ii),ah=re({},Ii,{dataTransfer:0}),nh=We(ah),ih=re({},Dn,{relatedTarget:0}),Ec=We(ih),ch=re({},Ll,{animationName:0,elapsedTime:0,pseudoElement:0}),sh=We(ch),uh=re({},Ll,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rh=We(uh),oh=re({},Ll,{data:0}),xr=We(oh),fh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mh[e])?!!t[e]:!1}function du(){return gh}var hh=re({},Dn,{key:function(e){if(e.key){var t=fh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ph=We(hh),yh=re({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nr=We(yh),vh=re({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),bh=We(vh),xh=re({},Ll,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nh=We(xh),Sh=re({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jh=We(Sh),Ah=re({},Ll,{newState:0,oldState:0}),Th=We(Ah),Eh=[9,13,27,32],mu=qt&&"CompositionEvent"in window,Wa=null;qt&&"documentMode"in document&&(Wa=document.documentMode);var Ch=qt&&"TextEvent"in window&&!Wa,Af=qt&&(!mu||Wa&&8<Wa&&11>=Wa),Sr=" ",jr=!1;function Tf(e,t){switch(e){case"keyup":return Eh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pl=!1;function Dh(e,t){switch(e){case"compositionend":return Ef(t);case"keypress":return t.which!==32?null:(jr=!0,Sr);case"textInput":return e=t.data,e===Sr&&jr?null:e;default:return null}}function zh(e,t){if(Pl)return e==="compositionend"||!mu&&Tf(e,t)?(e=jf(),li=fu=nl=null,Pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Af&&t.locale!=="ko"?null:t.data;default:return null}}var wh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wh[e.type]:t==="textarea"}function Cf(e,t,l,a){Il?ra?ra.push(a):ra=[a]:Il=a,t=Hi(t,"onChange"),0<t.length&&(l=new Fi("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var $a=null,fn=null;function Oh(e){Sm(e,0)}function Pi(e){var t=Qa(e);if(yf(t))return e}function Tr(e,t){if(e==="change")return t}var Df=!1;if(qt){var Cc;if(qt){var Dc="oninput"in document;if(!Dc){var Er=document.createElement("div");Er.setAttribute("oninput","return;"),Dc=typeof Er.oninput=="function"}Cc=Dc}else Cc=!1;Df=Cc&&(!document.documentMode||9<document.documentMode)}function Cr(){$a&&($a.detachEvent("onpropertychange",zf),fn=$a=null)}function zf(e){if(e.propertyName==="value"&&Pi(fn)){var t=[];Cf(t,fn,e,ou(e)),Sf(Oh,t)}}function Mh(e,t,l){e==="focusin"?(Cr(),$a=t,fn=l,$a.attachEvent("onpropertychange",zf)):e==="focusout"&&Cr()}function kh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pi(fn)}function _h(e,t){if(e==="click")return Pi(t)}function Rh(e,t){if(e==="input"||e==="change")return Pi(t)}function Uh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Uh;function dn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!os.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zr(e,t){var l=Dr(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Dr(l)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Of(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bi(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=bi(e.document)}return t}function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Hh=qt&&"documentMode"in document&&11>=document.documentMode,ea=null,ys=null,Fa=null,vs=!1;function wr(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;vs||ea==null||ea!==bi(a)||(a=ea,"selectionStart"in a&&gu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Fa&&dn(Fa,a)||(Fa=a,a=Hi(ys,"onSelect"),0<a.length&&(t=new Fi("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ea)))}function Al(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ta={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionrun:Al("Transition","TransitionRun"),transitionstart:Al("Transition","TransitionStart"),transitioncancel:Al("Transition","TransitionCancel"),transitionend:Al("Transition","TransitionEnd")},zc={},Mf={};qt&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Yl(e){if(zc[e])return zc[e];if(!ta[e])return e;var t=ta[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Mf)return zc[e]=t[l];return e}var kf=Yl("animationend"),_f=Yl("animationiteration"),Rf=Yl("animationstart"),Bh=Yl("transitionrun"),Gh=Yl("transitionstart"),Lh=Yl("transitioncancel"),Uf=Yl("transitionend"),Hf=new Map,bs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bs.push("scrollEnd");function bt(e,t){Hf.set(e,t),Gl(t,[e])}var xi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],la=0,hu=0;function ec(){for(var e=la,t=hu=la=0;t<e;){var l=ct[t];ct[t++]=null;var a=ct[t];ct[t++]=null;var n=ct[t];ct[t++]=null;var i=ct[t];if(ct[t++]=null,a!==null&&n!==null){var s=a.pending;s===null?n.next=n:(n.next=s.next,s.next=n),a.pending=n}i!==0&&Bf(l,n,i)}}function tc(e,t,l,a){ct[la++]=e,ct[la++]=t,ct[la++]=l,ct[la++]=a,hu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function pu(e,t,l,a){return tc(e,t,l,a),Ni(e)}function ql(e,t){return tc(e,null,null,t),Ni(e)}function Bf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-lt(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Ni(e){if(50<sn)throw sn=0,Ls=null,Error(T(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var aa={};function Yh(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,l,a){return new Yh(e,t,l,a)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var l=e.alternate;return l===null?(l=Ie(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Gf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,l,a,n,i){var s=0;if(a=e,typeof e=="function")yu(e)&&(s=1);else if(typeof e=="string")s=Vp(e,l,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case cs:return e=Ie(31,l,t,n),e.elementType=cs,e.lanes=i,e;case Wl:return wl(l.children,n,i,t);case af:s=8,n|=24;break;case as:return e=Ie(12,l,t,n|2),e.elementType=as,e.lanes=i,e;case ns:return e=Ie(13,l,t,n),e.elementType=ns,e.lanes=i,e;case is:return e=Ie(19,l,t,n),e.elementType=is,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ut:s=10;break e;case nf:s=9;break e;case au:s=11;break e;case nu:s=14;break e;case Ft:s=16,a=null;break e}s=29,l=Error(T(130,e===null?"null":typeof e,"")),a=null}return t=Ie(s,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function wl(e,t,l,a){return e=Ie(7,e,a,t),e.lanes=l,e}function wc(e,t,l){return e=Ie(6,e,null,t),e.lanes=l,e}function Lf(e){var t=Ie(18,null,null,0);return t.stateNode=e,t}function Oc(e,t,l){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Or=new WeakMap;function ft(e,t){if(typeof e=="object"&&e!==null){var l=Or.get(e);return l!==void 0?l:(t={value:e,source:t,stack:fr(t)},Or.set(e,t),t)}return{value:e,source:t,stack:fr(t)}}var na=[],ia=0,Si=null,mn=0,ut=[],rt=0,yl=null,Nt=1,St="";function kt(e,t){na[ia++]=mn,na[ia++]=Si,Si=e,mn=t}function Yf(e,t,l){ut[rt++]=Nt,ut[rt++]=St,ut[rt++]=yl,yl=e;var a=Nt;e=St;var n=32-lt(a)-1;a&=~(1<<n),l+=1;var i=32-lt(t)+n;if(30<i){var s=n-n%5;i=(a&(1<<s)-1).toString(32),a>>=s,n-=s,Nt=1<<32-lt(t)+n|l<<n|a,St=i+e}else Nt=1<<i|l<<n|a,St=e}function vu(e){e.return!==null&&(kt(e,1),Yf(e,1,0))}function bu(e){for(;e===Si;)Si=na[--ia],na[ia]=null,mn=na[--ia],na[ia]=null;for(;e===yl;)yl=ut[--rt],ut[rt]=null,St=ut[--rt],ut[rt]=null,Nt=ut[--rt],ut[rt]=null}function qf(e,t){ut[rt++]=Nt,ut[rt++]=St,ut[rt++]=yl,Nt=t.id,St=t.overflow,yl=e}var _e=null,se=null,K=!1,rl=null,dt=!1,xs=Error(T(519));function vl(e){var t=Error(T(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw gn(ft(t,e)),xs}function Mr(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[ke]=e,t[Je]=a,l){case"dialog":Q("cancel",t),Q("close",t);break;case"iframe":case"object":case"embed":Q("load",t);break;case"video":case"audio":for(l=0;l<vn.length;l++)Q(vn[l],t);break;case"source":Q("error",t);break;case"img":case"image":case"link":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"input":Q("invalid",t),vf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Q("invalid",t);break;case"textarea":Q("invalid",t),xf(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Am(t.textContent,l)?(a.popover!=null&&(Q("beforetoggle",t),Q("toggle",t)),a.onScroll!=null&&Q("scroll",t),a.onScrollEnd!=null&&Q("scrollend",t),a.onClick!=null&&(t.onclick=Ht),t=!0):t=!1,t||vl(e,!0)}function kr(e){for(_e=e.return;_e;)switch(_e.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:_e=_e.return}}function Ql(e){if(e!==_e)return!1;if(!K)return kr(e),K=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Zs(e.type,e.memoizedProps)),l=!l),l&&se&&vl(e),kr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));se=xo(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));se=xo(e)}else t===27?(t=se,Sl(e.type)?(e=Ws,Ws=null,se=e):se=t):se=_e?gt(e.stateNode.nextSibling):null;return!0}function _l(){se=_e=null,K=!1}function Mc(){var e=rl;return e!==null&&(Ve===null?Ve=e:Ve.push.apply(Ve,e),rl=null),e}function gn(e){rl===null?rl=[e]:rl.push(e)}var Ns=Et(null),Xl=null,Bt=null;function Pt(e,t,l){ie(Ns,t._currentValue),t._currentValue=l}function Lt(e){e._currentValue=Ns.current,De(Ns)}function Ss(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function js(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var r=0;r<t.length;r++)if(u.context===t[r]){i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Ss(i.return,l,e),a||(s=null);break e}i=u.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(T(341));s.lanes|=l,i=s.alternate,i!==null&&(i.lanes|=l),Ss(s,l,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function za(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(T(387));if(s=s.memoizedProps,s!==null){var u=n.type;nt(n.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(n===hi.current){if(s=n.alternate,s===null)throw Error(T(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(xn):e=[xn])}n=n.return}e!==null&&js(t,e,l,a),t.flags|=262144}function ji(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rl(e){Xl=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Re(e){return Xf(Xl,e)}function Qn(e,t){return Xl===null&&Rl(e),Xf(e,t)}function Xf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Bt===null){if(e===null)throw Error(T(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return l}var qh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Xh=Ae.unstable_scheduleCallback,Qh=Ae.unstable_NormalPriority,Ne={$$typeof:Ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new qh,data:new Map,refCount:0}}function zn(e){e.refCount--,e.refCount===0&&Xh(Qh,function(){e.controller.abort()})}var Ia=null,As=0,va=0,oa=null;function Zh(e,t){if(Ia===null){var l=Ia=[];As=0,va=Zu(),oa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return As++,t.then(_r,_r),t}function _r(){if(--As===0&&Ia!==null){oa!==null&&(oa.status="fulfilled");var e=Ia;Ia=null,va=0,oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Vh(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Rr=L.S;L.S=function(e,t){am=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zh(e,t),Rr!==null&&Rr(e,t)};var Ol=Et(null);function Nu(){var e=Ol.current;return e!==null?e:ae.pooledCache}function ii(e,t){t===null?ie(Ol,Ol.current):ie(Ol,t.pool)}function Qf(){var e=Nu();return e===null?null:{parent:Ne._currentValue,pool:e}}var wa=Error(T(460)),Su=Error(T(474)),lc=Error(T(542)),Ai={then:function(){}};function Ur(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zf(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Ht,Ht),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Br(e),e;default:if(typeof t.status=="string")t.then(Ht,Ht);else{if(e=ae,e!==null&&100<e.shellSuspendCounter)throw Error(T(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Br(e),e}throw Ml=t,wa}}function Cl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Ml=l,wa):l}}var Ml=null;function Hr(){if(Ml===null)throw Error(T(459));var e=Ml;return Ml=null,e}function Br(e){if(e===wa||e===lc)throw Error(T(483))}var fa=null,hn=0;function Zn(e){var t=hn;return hn+=1,fa===null&&(fa=[]),Zf(fa,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vn(e,t){throw t.$$typeof===Mg?Error(T(525)):(e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vf(e){function t(o,f){if(e){var g=o.deletions;g===null?(o.deletions=[f],o.flags|=16):g.push(f)}}function l(o,f){if(!e)return null;for(;f!==null;)t(o,f),f=f.sibling;return null}function a(o){for(var f=new Map;o!==null;)o.key!==null?f.set(o.key,o):f.set(o.index,o),o=o.sibling;return f}function n(o,f){return o=Gt(o,f),o.index=0,o.sibling=null,o}function i(o,f,g){return o.index=g,e?(g=o.alternate,g!==null?(g=g.index,g<f?(o.flags|=67108866,f):g):(o.flags|=67108866,f)):(o.flags|=1048576,f)}function s(o){return e&&o.alternate===null&&(o.flags|=67108866),o}function u(o,f,g,x){return f===null||f.tag!==6?(f=wc(g,o.mode,x),f.return=o,f):(f=n(f,g),f.return=o,f)}function r(o,f,g,x){var k=g.type;return k===Wl?h(o,f,g.props.children,x,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ft&&Cl(k)===f.type)?(f=n(f,g.props),Ba(f,g),f.return=o,f):(f=ni(g.type,g.key,g.props,null,o.mode,x),Ba(f,g),f.return=o,f)}function d(o,f,g,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Oc(g,o.mode,x),f.return=o,f):(f=n(f,g.children||[]),f.return=o,f)}function h(o,f,g,x,k){return f===null||f.tag!==7?(f=wl(g,o.mode,x,k),f.return=o,f):(f=n(f,g),f.return=o,f)}function v(o,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=wc(""+f,o.mode,g),f.return=o,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bn:return g=ni(f.type,f.key,f.props,null,o.mode,g),Ba(g,f),g.return=o,g;case qa:return f=Oc(f,o.mode,g),f.return=o,f;case Ft:return f=Cl(f),v(o,f,g)}if(Xa(f)||Ra(f))return f=wl(f,o.mode,g,null),f.return=o,f;if(typeof f.then=="function")return v(o,Zn(f),g);if(f.$$typeof===Ut)return v(o,Qn(o,f),g);Vn(o,f)}return null}function m(o,f,g,x){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return k!==null?null:u(o,f,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bn:return g.key===k?r(o,f,g,x):null;case qa:return g.key===k?d(o,f,g,x):null;case Ft:return g=Cl(g),m(o,f,g,x)}if(Xa(g)||Ra(g))return k!==null?null:h(o,f,g,x,null);if(typeof g.then=="function")return m(o,f,Zn(g),x);if(g.$$typeof===Ut)return m(o,f,Qn(o,g),x);Vn(o,g)}return null}function p(o,f,g,x,k){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return o=o.get(g)||null,u(f,o,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bn:return o=o.get(x.key===null?g:x.key)||null,r(f,o,x,k);case qa:return o=o.get(x.key===null?g:x.key)||null,d(f,o,x,k);case Ft:return x=Cl(x),p(o,f,g,x,k)}if(Xa(x)||Ra(x))return o=o.get(g)||null,h(f,o,x,k,null);if(typeof x.then=="function")return p(o,f,g,Zn(x),k);if(x.$$typeof===Ut)return p(o,f,g,Qn(f,x),k);Vn(f,x)}return null}function b(o,f,g,x){for(var k=null,M=null,y=f,O=f=0,w=null;y!==null&&O<g.length;O++){y.index>O?(w=y,y=null):w=y.sibling;var R=m(o,y,g[O],x);if(R===null){y===null&&(y=w);break}e&&y&&R.alternate===null&&t(o,y),f=i(R,f,O),M===null?k=R:M.sibling=R,M=R,y=w}if(O===g.length)return l(o,y),K&&kt(o,O),k;if(y===null){for(;O<g.length;O++)y=v(o,g[O],x),y!==null&&(f=i(y,f,O),M===null?k=y:M.sibling=y,M=y);return K&&kt(o,O),k}for(y=a(y);O<g.length;O++)w=p(y,o,O,g[O],x),w!==null&&(e&&w.alternate!==null&&y.delete(w.key===null?O:w.key),f=i(w,f,O),M===null?k=w:M.sibling=w,M=w);return e&&y.forEach(function(P){return t(o,P)}),K&&kt(o,O),k}function N(o,f,g,x){if(g==null)throw Error(T(151));for(var k=null,M=null,y=f,O=f=0,w=null,R=g.next();y!==null&&!R.done;O++,R=g.next()){y.index>O?(w=y,y=null):w=y.sibling;var P=m(o,y,R.value,x);if(P===null){y===null&&(y=w);break}e&&y&&P.alternate===null&&t(o,y),f=i(P,f,O),M===null?k=P:M.sibling=P,M=P,y=w}if(R.done)return l(o,y),K&&kt(o,O),k;if(y===null){for(;!R.done;O++,R=g.next())R=v(o,R.value,x),R!==null&&(f=i(R,f,O),M===null?k=R:M.sibling=R,M=R);return K&&kt(o,O),k}for(y=a(y);!R.done;O++,R=g.next())R=p(y,o,O,R.value,x),R!==null&&(e&&R.alternate!==null&&y.delete(R.key===null?O:R.key),f=i(R,f,O),M===null?k=R:M.sibling=R,M=R);return e&&y.forEach(function(ee){return t(o,ee)}),K&&kt(o,O),k}function _(o,f,g,x){if(typeof g=="object"&&g!==null&&g.type===Wl&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Bn:e:{for(var k=g.key;f!==null;){if(f.key===k){if(k=g.type,k===Wl){if(f.tag===7){l(o,f.sibling),x=n(f,g.props.children),x.return=o,o=x;break e}}else if(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ft&&Cl(k)===f.type){l(o,f.sibling),x=n(f,g.props),Ba(x,g),x.return=o,o=x;break e}l(o,f);break}else t(o,f);f=f.sibling}g.type===Wl?(x=wl(g.props.children,o.mode,x,g.key),x.return=o,o=x):(x=ni(g.type,g.key,g.props,null,o.mode,x),Ba(x,g),x.return=o,o=x)}return s(o);case qa:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){l(o,f.sibling),x=n(f,g.children||[]),x.return=o,o=x;break e}else{l(o,f);break}else t(o,f);f=f.sibling}x=Oc(g,o.mode,x),x.return=o,o=x}return s(o);case Ft:return g=Cl(g),_(o,f,g,x)}if(Xa(g))return b(o,f,g,x);if(Ra(g)){if(k=Ra(g),typeof k!="function")throw Error(T(150));return g=k.call(g),N(o,f,g,x)}if(typeof g.then=="function")return _(o,f,Zn(g),x);if(g.$$typeof===Ut)return _(o,f,Qn(o,g),x);Vn(o,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(l(o,f.sibling),x=n(f,g),x.return=o,o=x):(l(o,f),x=wc(g,o.mode,x),x.return=o,o=x),s(o)):l(o,f)}return function(o,f,g,x){try{hn=0;var k=_(o,f,g,x);return fa=null,k}catch(y){if(y===wa||y===lc)throw y;var M=Ie(29,y,null,o.mode);return M.lanes=x,M.return=o,M}finally{}}}var Ul=Vf(!0),Kf=Vf(!1),It=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ts(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ol(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,W&2){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Ni(e),Bf(e,null,l),t}return tc(e,a,t,l),Ni(e)}function Pa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ff(e,l)}}function kc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var s={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Es=!1;function en(){if(Es){var e=oa;if(e!==null)throw e}}function tn(e,t,l,a){Es=!1;var n=e.updateQueue;It=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var r=u,d=r.next;r.next=null,s===null?i=d:s.next=d,s=r;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==s&&(u===null?h.firstBaseUpdate=d:u.next=d,h.lastBaseUpdate=r))}if(i!==null){var v=n.baseState;s=0,h=d=r=null,u=i;do{var m=u.lane&-536870913,p=m!==u.lane;if(p?(V&m)===m:(a&m)===m){m!==0&&m===va&&(Es=!0),h!==null&&(h=h.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var b=e,N=u;m=t;var _=l;switch(N.tag){case 1:if(b=N.payload,typeof b=="function"){v=b.call(_,v,m);break e}v=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=N.payload,m=typeof b=="function"?b.call(_,v,m):b,m==null)break e;v=re({},v,m);break e;case 2:It=!0}}m=u.callback,m!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[m]:p.push(m))}else p={lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(d=h=p,r=v):h=h.next=p,s|=m;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;p=u,u=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);h===null&&(r=v),n.baseState=r,n.firstBaseUpdate=d,n.lastBaseUpdate=h,i===null&&(n.shared.lanes=0),xl|=s,e.lanes=s,e.memoizedState=v}}function Jf(e,t){if(typeof e!="function")throw Error(T(191,e));e.call(t)}function Wf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Jf(l[e],t)}var ba=Et(null),Ti=Et(0);function Gr(e,t){e=Vt,ie(Ti,e),ie(ba,t),Vt=e|t.baseLanes}function Cs(){ie(Ti,Vt),ie(ba,ba.current)}function Au(){Vt=Ti.current,De(ba),De(Ti)}var it=Et(null),mt=null;function el(e){var t=e.alternate;ie(he,he.current&1),ie(it,e),mt===null&&(t===null||ba.current!==null||t.memoizedState!==null)&&(mt=e)}function Ds(e){ie(he,he.current),ie(it,e),mt===null&&(mt=e)}function $f(e){e.tag===22?(ie(he,he.current),ie(it,e),mt===null&&(mt=e)):tl()}function tl(){ie(he,he.current),ie(it,it.current)}function Fe(e){De(it),mt===e&&(mt=null),De(he)}var he=Et(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Ks(l)||Js(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,q=null,le=null,be=null,Ci=!1,da=!1,Hl=!1,Di=0,pn=0,ma=null,Kh=0;function me(){throw Error(T(321))}function Tu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!nt(e[l],t[l]))return!1;return!0}function Eu(e,t,l,a,n,i){return Xt=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?Cd:Hu,Hl=!1,i=l(a,n),Hl=!1,da&&(i=If(t,l,a,n)),Ff(e),i}function Ff(e){L.H=yn;var t=le!==null&&le.next!==null;if(Xt=0,be=le=q=null,Ci=!1,pn=0,ma=null,t)throw Error(T(300));e===null||Se||(e=e.dependencies,e!==null&&ji(e)&&(Se=!0))}function If(e,t,l,a){q=e;var n=0;do{if(da&&(ma=null),pn=0,da=!1,25<=n)throw Error(T(301));if(n+=1,be=le=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}L.H=Dd,i=t(l,a)}while(da);return i}function Jh(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?wn(t):t,e=e.useState()[0],(le!==null?le.memoizedState:null)!==e&&(q.flags|=1024),t}function Cu(){var e=Di!==0;return Di=0,e}function Du(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function zu(e){if(Ci){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ci=!1}Xt=0,be=le=q=null,da=!1,pn=Di=0,ma=null}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?q.memoizedState=be=e:be=be.next=e,be}function pe(){if(le===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=be===null?q.memoizedState:be.next;if(t!==null)be=t,le=e;else{if(e===null)throw q.alternate===null?Error(T(467)):Error(T(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},be===null?q.memoizedState=be=e:be=be.next=e}return be}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wn(e){var t=pn;return pn+=1,ma===null&&(ma=[]),e=Zf(ma,e,t),t=q,(be===null?t.memoizedState:be.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?Cd:Hu),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wn(e);if(e.$$typeof===Ut)return Re(e)}throw Error(T(438,String(e)))}function wu(e){var t=null,l=q.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=ac(),q.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=kg;return t.index++,l}function Qt(e,t){return typeof t=="function"?t(e):t}function ci(e){var t=pe();return Ou(t,le,e)}function Ou(e,t,l){var a=e.queue;if(a===null)throw Error(T(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var u=s=null,r=null,d=t,h=!1;do{var v=d.lane&-536870913;if(v!==d.lane?(V&v)===v:(Xt&v)===v){var m=d.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),v===va&&(h=!0);else if((Xt&m)===m){d=d.next,m===va&&(h=!0);continue}else v={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(u=r=v,s=i):r=r.next=v,q.lanes|=m,xl|=m;v=d.action,Hl&&l(i,v),i=d.hasEagerState?d.eagerState:l(i,v)}else m={lane:v,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(u=r=m,s=i):r=r.next=m,q.lanes|=v,xl|=v;d=d.next}while(d!==null&&d!==t);if(r===null?s=i:r.next=u,!nt(i,e.memoizedState)&&(Se=!0,h&&(l=oa,l!==null)))throw l;e.memoizedState=i,e.baseState=s,e.baseQueue=r,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function _c(e){var t=pe(),l=t.queue;if(l===null)throw Error(T(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);nt(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Pf(e,t,l){var a=q,n=pe(),i=K;if(i){if(l===void 0)throw Error(T(407));l=l()}else l=t();var s=!nt((le||n).memoizedState,l);if(s&&(n.memoizedState=l,Se=!0),n=n.queue,Mu(ld.bind(null,a,n,e),[e]),n.getSnapshot!==t||s||be!==null&&be.memoizedState.tag&1){if(a.flags|=2048,xa(9,{destroy:void 0},td.bind(null,a,n,l,t),null),ae===null)throw Error(T(349));i||Xt&127||ed(a,t,l)}return l}function ed(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=q.updateQueue,t===null?(t=ac(),q.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function td(e,t,l,a){t.value=l,t.getSnapshot=a,ad(t)&&nd(e)}function ld(e,t,l){return l(function(){ad(t)&&nd(e)})}function ad(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!nt(e,l)}catch{return!0}}function nd(e){var t=ql(e,2);t!==null&&Ke(t,e,2)}function zs(e){var t=Ge();if(typeof e=="function"){var l=e;if(e=l(),Hl){al(!0);try{l()}finally{al(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},t}function id(e,t,l,a){return e.baseState=l,Ou(e,le,typeof a=="function"?a:Qt)}function Wh(e,t,l,a,n){if(cc(e))throw Error(T(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};L.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,cd(t,i)):(i.next=l.next,t.pending=l.next=i)}}function cd(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=L.T,s={};L.T=s;try{var u=l(n,a),r=L.S;r!==null&&r(s,u),Lr(e,t,u)}catch(d){ws(e,t,d)}finally{i!==null&&s.types!==null&&(i.types=s.types),L.T=i}}else try{i=l(n,a),Lr(e,t,i)}catch(d){ws(e,t,d)}}function Lr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Yr(e,t,a)},function(a){return ws(e,t,a)}):Yr(e,t,l)}function Yr(e,t,l){t.status="fulfilled",t.value=l,sd(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,cd(e,l)))}function ws(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,sd(t),t=t.next;while(t!==a)}e.action=null}function sd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ud(e,t){return t}function qr(e,t){if(K){var l=ae.formState;if(l!==null){e:{var a=q;if(K){if(se){t:{for(var n=se,i=dt;n.nodeType!==8;){if(!i){n=null;break t}if(n=gt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){se=gt(n.nextSibling),a=n.data==="F!";break e}}vl(a)}a=!1}a&&(t=l[0])}}return l=Ge(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ud,lastRenderedState:t},l.queue=a,l=Ad.bind(null,q,a),a.dispatch=l,a=zs(!1),i=Uu.bind(null,q,!1,a.queue),a=Ge(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Wh.bind(null,q,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Xr(e){var t=pe();return rd(t,le,e)}function rd(e,t,l){if(t=Ou(e,t,ud)[0],e=ci(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=wn(t)}catch(s){throw s===wa?lc:s}else a=t;t=pe();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(q.flags|=2048,xa(9,{destroy:void 0},$h.bind(null,n,l),null)),[a,i,e]}function $h(e,t){e.action=t}function Qr(e){var t=pe(),l=le;if(l!==null)return rd(t,l,e);pe(),t=t.memoizedState,l=pe();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function xa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=q.updateQueue,t===null&&(t=ac(),q.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function od(){return pe().memoizedState}function si(e,t,l,a){var n=Ge();q.flags|=e,n.memoizedState=xa(1|t,{destroy:void 0},l,a===void 0?null:a)}function ic(e,t,l,a){var n=pe();a=a===void 0?null:a;var i=n.memoizedState.inst;le!==null&&a!==null&&Tu(a,le.memoizedState.deps)?n.memoizedState=xa(t,i,l,a):(q.flags|=e,n.memoizedState=xa(1|t,i,l,a))}function Zr(e,t){si(8390656,8,e,t)}function Mu(e,t){ic(2048,8,e,t)}function Fh(e){q.flags|=4;var t=q.updateQueue;if(t===null)t=ac(),q.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function fd(e){var t=pe().memoizedState;return Fh({ref:t,nextImpl:e}),function(){if(W&2)throw Error(T(440));return t.impl.apply(void 0,arguments)}}function dd(e,t){return ic(4,2,e,t)}function md(e,t){return ic(4,4,e,t)}function gd(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hd(e,t,l){l=l!=null?l.concat([e]):null,ic(4,4,gd.bind(null,t,e),l)}function ku(){}function pd(e,t){var l=pe();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Tu(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function yd(e,t){var l=pe();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Tu(t,a[1]))return a[0];if(a=e(),Hl){al(!0);try{e()}finally{al(!1)}}return l.memoizedState=[a,t],a}function _u(e,t,l){return l===void 0||Xt&1073741824&&!(V&261930)?e.memoizedState=t:(e.memoizedState=l,e=im(),q.lanes|=e,xl|=e,l)}function vd(e,t,l,a){return nt(l,t)?l:ba.current!==null?(e=_u(e,l,a),nt(e,t)||(Se=!0),e):!(Xt&42)||Xt&1073741824&&!(V&261930)?(Se=!0,e.memoizedState=l):(e=im(),q.lanes|=e,xl|=e,t)}function bd(e,t,l,a,n){var i=$.p;$.p=i!==0&&8>i?i:8;var s=L.T,u={};L.T=u,Uu(e,!1,t,l);try{var r=n(),d=L.S;if(d!==null&&d(u,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var h=Vh(r,a);ln(e,t,h,at(e))}else ln(e,t,a,at(e))}catch(v){ln(e,t,{then:function(){},status:"rejected",reason:v},at())}finally{$.p=i,s!==null&&u.types!==null&&(s.types=u.types),L.T=s}}function Ih(){}function Os(e,t,l,a){if(e.tag!==5)throw Error(T(476));var n=xd(e).queue;bd(e,n,t,zl,l===null?Ih:function(){return Nd(e),l(a)})}function xd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:zl,baseState:zl,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:zl},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nd(e){var t=xd(e);t.next===null&&(t=e.alternate.memoizedState),ln(e,t.next.queue,{},at())}function Ru(){return Re(xn)}function Sd(){return pe().memoizedState}function jd(){return pe().memoizedState}function Ph(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=at();e=ol(l);var a=fl(t,e,l);a!==null&&(Ke(a,t,l),Pa(a,t,l)),t={cache:xu()},e.payload=t;return}t=t.return}}function ep(e,t,l){var a=at();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},cc(e)?Td(t,l):(l=pu(e,t,l,a),l!==null&&(Ke(l,e,a),Ed(l,t,a)))}function Ad(e,t,l){var a=at();ln(e,t,l,a)}function ln(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(cc(e))Td(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,u=i(s,l);if(n.hasEagerState=!0,n.eagerState=u,nt(u,s))return tc(e,t,n,0),ae===null&&ec(),!1}catch{}finally{}if(l=pu(e,t,n,a),l!==null)return Ke(l,e,a),Ed(l,t,a),!0}return!1}function Uu(e,t,l,a){if(a={lane:2,revertLane:Zu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cc(e)){if(t)throw Error(T(479))}else t=pu(e,l,a,2),t!==null&&Ke(t,e,2)}function cc(e){var t=e.alternate;return e===q||t!==null&&t===q}function Td(e,t){da=Ci=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Ed(e,t,l){if(l&4194048){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ff(e,l)}}var yn={readContext:Re,use:nc,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me};yn.useEffectEvent=me;var Cd={readContext:Re,use:nc,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Zr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,si(4194308,4,gd.bind(null,t,e),l)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){si(4,2,e,t)},useMemo:function(e,t){var l=Ge();t=t===void 0?null:t;var a=e();if(Hl){al(!0);try{e()}finally{al(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ge();if(l!==void 0){var n=l(t);if(Hl){al(!0);try{l(t)}finally{al(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=ep.bind(null,q,e),[a.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:function(e){e=zs(e);var t=e.queue,l=Ad.bind(null,q,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:ku,useDeferredValue:function(e,t){var l=Ge();return _u(l,e,t)},useTransition:function(){var e=zs(!1);return e=bd.bind(null,q,e.queue,!0,!1),Ge().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=q,n=Ge();if(K){if(l===void 0)throw Error(T(407));l=l()}else{if(l=t(),ae===null)throw Error(T(349));V&127||ed(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Zr(ld.bind(null,a,i,e),[e]),a.flags|=2048,xa(9,{destroy:void 0},td.bind(null,a,i,l,t),null),l},useId:function(){var e=Ge(),t=ae.identifierPrefix;if(K){var l=St,a=Nt;l=(a&~(1<<32-lt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Di++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Kh++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ru,useFormState:qr,useActionState:qr,useOptimistic:function(e){var t=Ge();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Uu.bind(null,q,!0,l),l.dispatch=t,[e,t]},useMemoCache:wu,useCacheRefresh:function(){return Ge().memoizedState=Ph.bind(null,q)},useEffectEvent:function(e){var t=Ge(),l={impl:e};return t.memoizedState=l,function(){if(W&2)throw Error(T(440));return l.impl.apply(void 0,arguments)}}},Hu={readContext:Re,use:nc,useCallback:pd,useContext:Re,useEffect:Mu,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:md,useMemo:yd,useReducer:ci,useRef:od,useState:function(){return ci(Qt)},useDebugValue:ku,useDeferredValue:function(e,t){var l=pe();return vd(l,le.memoizedState,e,t)},useTransition:function(){var e=ci(Qt)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:wn(e),t]},useSyncExternalStore:Pf,useId:Sd,useHostTransitionStatus:Ru,useFormState:Xr,useActionState:Xr,useOptimistic:function(e,t){var l=pe();return id(l,le,e,t)},useMemoCache:wu,useCacheRefresh:jd};Hu.useEffectEvent=fd;var Dd={readContext:Re,use:nc,useCallback:pd,useContext:Re,useEffect:Mu,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:md,useMemo:yd,useReducer:_c,useRef:od,useState:function(){return _c(Qt)},useDebugValue:ku,useDeferredValue:function(e,t){var l=pe();return le===null?_u(l,e,t):vd(l,le.memoizedState,e,t)},useTransition:function(){var e=_c(Qt)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:wn(e),t]},useSyncExternalStore:Pf,useId:Sd,useHostTransitionStatus:Ru,useFormState:Qr,useActionState:Qr,useOptimistic:function(e,t){var l=pe();return le!==null?id(l,le,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:wu,useCacheRefresh:jd};Dd.useEffectEvent=fd;function Rc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:re({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Ms={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=at(),n=ol(a);n.payload=t,l!=null&&(n.callback=l),t=fl(e,n,a),t!==null&&(Ke(t,e,a),Pa(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=at(),n=ol(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=fl(e,n,a),t!==null&&(Ke(t,e,a),Pa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=at(),a=ol(l);a.tag=2,t!=null&&(a.callback=t),t=fl(e,a,l),t!==null&&(Ke(t,e,l),Pa(t,e,l))}};function Vr(e,t,l,a,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,s):t.prototype&&t.prototype.isPureReactComponent?!dn(l,a)||!dn(n,i):!0}function Kr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Ms.enqueueReplaceState(t,t.state,null)}function Bl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=re({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function zd(e){xi(e)}function wd(e){console.error(e)}function Od(e){xi(e)}function zi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Jr(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ks(e,t,l){return l=ol(l),l.tag=3,l.payload={element:null},l.callback=function(){zi(e,t)},l}function Md(e){return e=ol(e),e.tag=3,e}function kd(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Jr(t,l,a)}}var s=l.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Jr(t,l,a),typeof n!="function"&&(dl===null?dl=new Set([this]):dl.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function tp(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&za(t,l,n,!0),l=it.current,l!==null){switch(l.tag){case 31:case 13:return mt===null?_i():l.alternate===null&&ge===0&&(ge=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Ai?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Vc(e,a,n)),!1;case 22:return l.flags|=65536,a===Ai?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Vc(e,a,n)),!1}throw Error(T(435,l.tag))}return Vc(e,a,n),_i(),!1}if(K)return t=it.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==xs&&(e=Error(T(422),{cause:a}),gn(ft(e,l)))):(a!==xs&&(t=Error(T(423),{cause:a}),gn(ft(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=ft(a,l),n=ks(e.stateNode,a,n),kc(e,n),ge!==4&&(ge=2)),!1;var i=Error(T(520),{cause:a});if(i=ft(i,l),cn===null?cn=[i]:cn.push(i),ge!==4&&(ge=2),t===null)return!0;a=ft(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=ks(l.stateNode,a,e),kc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(dl===null||!dl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Md(n),kd(n,e,l,a),kc(l,n),!1}l=l.return}while(l!==null);return!1}var Bu=Error(T(461)),Se=!1;function Me(e,t,l,a){t.child=e===null?Kf(t,null,l,a):Ul(t,e.child,l,a)}function Wr(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var s={};for(var u in a)u!=="ref"&&(s[u]=a[u])}else s=a;return Rl(t),a=Eu(e,t,l,s,i,n),u=Cu(),e!==null&&!Se?(Du(e,t,n),Zt(e,t,n)):(K&&u&&vu(t),t.flags|=1,Me(e,t,a,n),t.child)}function $r(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!yu(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,_d(e,t,i,a,n)):(e=ni(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Gu(e,n)){var s=i.memoizedProps;if(l=l.compare,l=l!==null?l:dn,l(s,a)&&e.ref===t.ref)return Zt(e,t,n)}return t.flags|=1,e=Gt(i,a),e.ref=t.ref,e.return=t,t.child=e}function _d(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(dn(i,a)&&e.ref===t.ref)if(Se=!1,t.pendingProps=a=i,Gu(e,n))e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,Zt(e,t,n)}return _s(e,t,l,a,n)}function Rd(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Fr(e,t,i,l,a)}if(l&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,i!==null?i.cachePool:null),i!==null?Gr(t,i):Cs(),$f(t);else return a=t.lanes=536870912,Fr(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(ii(t,i.cachePool),Gr(t,i),tl(),t.memoizedState=null):(e!==null&&ii(t,null),Cs(),tl());return Me(e,t,n,l),t.child}function Za(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fr(e,t,l,a,n){var i=Nu();return i=i===null?null:{parent:Ne._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&ii(t,null),Cs(),$f(t),e!==null&&za(e,t,a,!0),t.childLanes=n,null}function ui(e,t){return t=wi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ir(e,t,l){return Ul(t,e.child,null,l),e=ui(t,t.pendingProps),e.flags|=2,Fe(t),t.memoizedState=null,e}function lp(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(K){if(a.mode==="hidden")return e=ui(t,a),t.lanes=536870912,Za(null,e);if(Ds(t),(e=se)?(e=Cm(e,dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yl!==null?{id:Nt,overflow:St}:null,retryLane:536870912,hydrationErrors:null},l=Lf(e),l.return=t,t.child=l,_e=t,se=null)):e=null,e===null)throw vl(t);return t.lanes=536870912,null}return ui(t,a)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(Ds(t),n)if(t.flags&256)t.flags&=-257,t=Ir(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(T(558));else if(Se||za(e,t,l,!1),n=(l&e.childLanes)!==0,Se||n){if(a=ae,a!==null&&(s=df(a,l),s!==0&&s!==i.retryLane))throw i.retryLane=s,ql(e,s),Ke(a,e,s),Bu;_i(),t=Ir(e,t,l)}else e=i.treeContext,se=gt(s.nextSibling),_e=t,K=!0,rl=null,dt=!1,e!==null&&qf(t,e),t=ui(t,a),t.flags|=4096;return t}return e=Gt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ri(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(T(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function _s(e,t,l,a,n){return Rl(t),l=Eu(e,t,l,a,void 0,n),a=Cu(),e!==null&&!Se?(Du(e,t,n),Zt(e,t,n)):(K&&a&&vu(t),t.flags|=1,Me(e,t,l,n),t.child)}function Pr(e,t,l,a,n,i){return Rl(t),t.updateQueue=null,l=If(t,a,l,n),Ff(e),a=Cu(),e!==null&&!Se?(Du(e,t,i),Zt(e,t,i)):(K&&a&&vu(t),t.flags|=1,Me(e,t,l,i),t.child)}function eo(e,t,l,a,n){if(Rl(t),t.stateNode===null){var i=aa,s=l.contextType;typeof s=="object"&&s!==null&&(i=Re(s)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ms,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},ju(t),s=l.contextType,i.context=typeof s=="object"&&s!==null?Re(s):aa,i.state=t.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(Rc(t,l,s,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Ms.enqueueReplaceState(i,i.state,null),tn(t,a,i,n),en(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,r=Bl(l,u);i.props=r;var d=i.context,h=l.contextType;s=aa,typeof h=="object"&&h!==null&&(s=Re(h));var v=l.getDerivedStateFromProps;h=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||d!==s)&&Kr(t,i,a,s),It=!1;var m=t.memoizedState;i.state=m,tn(t,a,i,n),en(),d=t.memoizedState,u||m!==d||It?(typeof v=="function"&&(Rc(t,l,v,a),d=t.memoizedState),(r=It||Vr(t,l,r,a,m,d,s))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),i.props=a,i.state=d,i.context=s,a=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Ts(e,t),s=t.memoizedProps,h=Bl(l,s),i.props=h,v=t.pendingProps,m=i.context,d=l.contextType,r=aa,typeof d=="object"&&d!==null&&(r=Re(d)),u=l.getDerivedStateFromProps,(d=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==v||m!==r)&&Kr(t,i,a,r),It=!1,m=t.memoizedState,i.state=m,tn(t,a,i,n),en();var p=t.memoizedState;s!==v||m!==p||It||e!==null&&e.dependencies!==null&&ji(e.dependencies)?(typeof u=="function"&&(Rc(t,l,u,a),p=t.memoizedState),(h=It||Vr(t,l,h,a,m,p,r)||e!==null&&e.dependencies!==null&&ji(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,p,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,p,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=p),i.props=a,i.state=p,i.context=r,a=h):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,ri(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Ul(t,e.child,null,n),t.child=Ul(t,null,l,n)):Me(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Zt(e,t,n),e}function to(e,t,l,a){return _l(),t.flags|=256,Me(e,t,l,a),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:Qf()}}function Bc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Pe),e}function Ud(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(he.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(K){if(n?el(t):tl(),(e=se)?(e=Cm(e,dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yl!==null?{id:Nt,overflow:St}:null,retryLane:536870912,hydrationErrors:null},l=Lf(e),l.return=t,t.child=l,_e=t,se=null)):e=null,e===null)throw vl(t);return Js(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,n?(tl(),n=t.mode,u=wi({mode:"hidden",children:u},n),a=wl(a,n,l,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=Hc(l),a.childLanes=Bc(e,s,l),t.memoizedState=Uc,Za(null,a)):(el(t),Rs(t,u))}var r=e.memoizedState;if(r!==null&&(u=r.dehydrated,u!==null)){if(i)t.flags&256?(el(t),t.flags&=-257,t=Gc(e,t,l)):t.memoizedState!==null?(tl(),t.child=e.child,t.flags|=128,t=null):(tl(),u=a.fallback,n=t.mode,a=wi({mode:"visible",children:a.children},n),u=wl(u,n,l,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,Ul(t,e.child,null,l),a=t.child,a.memoizedState=Hc(l),a.childLanes=Bc(e,s,l),t.memoizedState=Uc,t=Za(null,a));else if(el(t),Js(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var d=s.dgst;s=d,a=Error(T(419)),a.stack="",a.digest=s,gn({value:a,source:null,stack:null}),t=Gc(e,t,l)}else if(Se||za(e,t,l,!1),s=(l&e.childLanes)!==0,Se||s){if(s=ae,s!==null&&(a=df(s,l),a!==0&&a!==r.retryLane))throw r.retryLane=a,ql(e,a),Ke(s,e,a),Bu;Ks(u)||_i(),t=Gc(e,t,l)}else Ks(u)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,se=gt(u.nextSibling),_e=t,K=!0,rl=null,dt=!1,e!==null&&qf(t,e),t=Rs(t,a.children),t.flags|=4096);return t}return n?(tl(),u=a.fallback,n=t.mode,r=e.child,d=r.sibling,a=Gt(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,d!==null?u=Gt(d,u):(u=wl(u,n,l,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,Za(null,a),a=t.child,u=e.child.memoizedState,u===null?u=Hc(l):(n=u.cachePool,n!==null?(r=Ne._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Qf(),u={baseLanes:u.baseLanes|l,cachePool:n}),a.memoizedState=u,a.childLanes=Bc(e,s,l),t.memoizedState=Uc,Za(e.child,a)):(el(t),l=e.child,e=l.sibling,l=Gt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=l,t.memoizedState=null,l)}function Rs(e,t){return t=wi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wi(e,t){return e=Ie(22,e,null,t),e.lanes=0,e}function Gc(e,t,l){return Ul(t,e.child,null,l),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lo(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ss(e.return,t,l)}function Lc(e,t,l,a,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=l,s.tailMode=n,s.treeForkCount=i)}function Hd(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var s=he.current,u=(s&2)!==0;if(u?(s=s&1|2,t.flags|=128):s&=1,ie(he,s),Me(e,t,a,l),a=K?mn:0,!u&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lo(e,l,t);else if(e.tag===19)lo(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Ei(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Lc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Lc(t,!0,l,null,i,a);break;case"together":Lc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Zt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),xl|=t.lanes,!(l&t.childLanes))if(e!==null){if(za(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,l=Gt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Gt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Gu(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&ji(e)))}function ap(e,t,l){switch(t.tag){case 3:pi(t,t.stateNode.containerInfo),Pt(t,Ne,e.memoizedState.cache),_l();break;case 27:case 5:rs(t);break;case 4:pi(t,t.stateNode.containerInfo);break;case 10:Pt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ds(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(el(t),t.flags|=128,null):l&t.child.childLanes?Ud(e,t,l):(el(t),e=Zt(e,t,l),e!==null?e.sibling:null);el(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(za(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Hd(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ie(he,he.current),a)break;return null;case 22:return t.lanes=0,Rd(e,t,l,t.pendingProps);case 24:Pt(t,Ne,e.memoizedState.cache)}return Zt(e,t,l)}function Bd(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Se=!0;else{if(!Gu(e,l)&&!(t.flags&128))return Se=!1,ap(e,t,l);Se=!!(e.flags&131072)}else Se=!1,K&&t.flags&1048576&&Yf(t,mn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Cl(t.elementType),t.type=e,typeof e=="function")yu(e)?(a=Bl(e,a),t.tag=1,t=eo(null,t,e,a,l)):(t.tag=0,t=_s(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===au){t.tag=11,t=Wr(null,t,e,a,l);break e}else if(n===nu){t.tag=14,t=$r(null,t,e,a,l);break e}}throw t=ss(e)||e,Error(T(306,t,""))}}return t;case 0:return _s(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Bl(a,t.pendingProps),eo(e,t,a,n,l);case 3:e:{if(pi(t,t.stateNode.containerInfo),e===null)throw Error(T(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,Ts(e,t),tn(t,a,null,l);var s=t.memoizedState;if(a=s.cache,Pt(t,Ne,a),a!==i.cache&&js(t,[Ne],l,!0),en(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=to(e,t,a,l);break e}else if(a!==n){n=ft(Error(T(424)),t),gn(n),t=to(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(se=gt(e.firstChild),_e=t,K=!0,rl=null,dt=!0,l=Kf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(_l(),a===n){t=Zt(e,t,l);break e}Me(e,t,a,l)}t=t.child}return t;case 26:return ri(e,t),e===null?(l=jo(t.type,null,t.pendingProps,null))?t.memoizedState=l:K||(l=t.type,e=t.pendingProps,a=Bi(ul.current).createElement(l),a[ke]=t,a[Je]=e,Ue(a,l,e),Ce(a),t.stateNode=a):t.memoizedState=jo(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rs(t),e===null&&K&&(a=t.stateNode=Dm(t.type,t.pendingProps,ul.current),_e=t,dt=!0,n=se,Sl(t.type)?(Ws=n,se=gt(a.firstChild)):se=n),Me(e,t,t.pendingProps.children,l),ri(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((n=a=se)&&(a=kp(a,t.type,t.pendingProps,dt),a!==null?(t.stateNode=a,_e=t,se=gt(a.firstChild),dt=!1,n=!0):n=!1),n||vl(t)),rs(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Zs(n,i)?a=null:s!==null&&Zs(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=Eu(e,t,Jh,null,null,l),xn._currentValue=n),ri(e,t),Me(e,t,a,l),t.child;case 6:return e===null&&K&&((e=l=se)&&(l=_p(l,t.pendingProps,dt),l!==null?(t.stateNode=l,_e=t,se=null,e=!0):e=!1),e||vl(t)),null;case 13:return Ud(e,t,l);case 4:return pi(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ul(t,null,a,l):Me(e,t,a,l),t.child;case 11:return Wr(e,t,t.type,t.pendingProps,l);case 7:return Me(e,t,t.pendingProps,l),t.child;case 8:return Me(e,t,t.pendingProps.children,l),t.child;case 12:return Me(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,Pt(t,t.type,a.value),Me(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Rl(t),n=Re(n),a=a(n),t.flags|=1,Me(e,t,a,l),t.child;case 14:return $r(e,t,t.type,t.pendingProps,l);case 15:return _d(e,t,t.type,t.pendingProps,l);case 19:return Hd(e,t,l);case 31:return lp(e,t,l);case 22:return Rd(e,t,l,t.pendingProps);case 24:return Rl(t),a=Re(Ne),e===null?(n=Nu(),n===null&&(n=ae,i=xu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},ju(t),Pt(t,Ne,n)):(e.lanes&l&&(Ts(e,t),tn(t,null,null,l),en()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Pt(t,Ne,a)):(a=i.cache,Pt(t,Ne,a),a!==n.cache&&js(t,[Ne],l,!0))),Me(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(T(156,t.tag))}function zt(e){e.flags|=4}function Yc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(um())e.flags|=8192;else throw Ml=Ai,Su}else e.flags&=-16777217}function ao(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Om(t))if(um())e.flags|=8192;else throw Ml=Ai,Su}function Kn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?rf():536870912,e.lanes|=t,Na|=t)}function Ga(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function np(e,t,l){var a=t.pendingProps;switch(bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ce(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Lt(Ne),ha(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ql(t)?zt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mc())),ce(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(zt(t),i!==null?(ce(t),ao(t,i)):(ce(t),Yc(t,n,null,a,l))):i?i!==e.memoizedState?(zt(t),ce(t),ao(t,i)):(ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&zt(t),ce(t),Yc(t,n,e,a,l)),null;case 27:if(yi(t),l=ul.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&zt(t);else{if(!a){if(t.stateNode===null)throw Error(T(166));return ce(t),null}e=At.current,Ql(t)?Mr(t):(e=Dm(n,a,l),t.stateNode=e,zt(t))}return ce(t),null;case 5:if(yi(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&zt(t);else{if(!a){if(t.stateNode===null)throw Error(T(166));return ce(t),null}if(i=At.current,Ql(t))Mr(t);else{var s=Bi(ul.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?s.createElement(n,{is:a.is}):s.createElement(n)}}i[ke]=t,i[Je]=a;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(Ue(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&zt(t)}}return ce(t),Yc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&zt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(T(166));if(e=ul.current,Ql(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=_e,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[ke]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Am(e.nodeValue,l)),e||vl(t,!0)}else e=Bi(e).createTextNode(a),e[ke]=t,t.stateNode=e}return ce(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ql(t),l!==null){if(e===null){if(!a)throw Error(T(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(557));e[ke]=t}else _l(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),e=!1}else l=Mc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(Fe(t),t):(Fe(t),null);if(t.flags&128)throw Error(T(558))}return ce(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ql(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(T(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(T(317));n[ke]=t}else _l(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),n=!1}else n=Mc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Fe(t),t):(Fe(t),null)}return Fe(t),t.flags&128?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Kn(t,t.updateQueue),ce(t),null);case 4:return ha(),e===null&&Vu(t.stateNode.containerInfo),ce(t),null;case 10:return Lt(t.type),ce(t),null;case 19:if(De(he),a=t.memoizedState,a===null)return ce(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)Ga(a,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ei(e),i!==null){for(t.flags|=128,Ga(a,!1),e=i.updateQueue,t.updateQueue=e,Kn(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Gf(l,e),l=l.sibling;return ie(he,he.current&1|2),K&&kt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&et()>Mi&&(t.flags|=128,n=!0,Ga(a,!1),t.lanes=4194304)}else{if(!n)if(e=Ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Kn(t,e),Ga(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!K)return ce(t),null}else 2*et()-a.renderingStartTime>Mi&&l!==536870912&&(t.flags|=128,n=!0,Ga(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=et(),e.sibling=null,l=he.current,ie(he,n?l&1|2:l&1),K&&kt(t,a.treeForkCount),e):(ce(t),null);case 22:case 23:return Fe(t),Au(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?l&536870912&&!(t.flags&128)&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),l=t.updateQueue,l!==null&&Kn(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&De(Ol),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Lt(Ne),ce(t),null;case 25:return null;case 30:return null}throw Error(T(156,t.tag))}function ip(e,t){switch(bu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lt(Ne),ha(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yi(t),null;case 31:if(t.memoizedState!==null){if(Fe(t),t.alternate===null)throw Error(T(340));_l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Fe(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));_l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(he),null;case 4:return ha(),null;case 10:return Lt(t.type),null;case 22:case 23:return Fe(t),Au(),e!==null&&De(Ol),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Lt(Ne),null;case 25:return null;default:return null}}function Gd(e,t){switch(bu(t),t.tag){case 3:Lt(Ne),ha();break;case 26:case 27:case 5:yi(t);break;case 4:ha();break;case 31:t.memoizedState!==null&&Fe(t);break;case 13:Fe(t);break;case 19:De(he);break;case 10:Lt(t.type);break;case 22:case 23:Fe(t),Au(),e!==null&&De(Ol);break;case 24:Lt(Ne)}}function On(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,s=l.inst;a=i(),s.destroy=a}l=l.next}while(l!==n)}}catch(u){I(t,t.return,u)}}function bl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var s=a.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,n=t;var r=l,d=u;try{d()}catch(h){I(n,r,h)}}}a=a.next}while(a!==i)}}catch(h){I(t,t.return,h)}}function Ld(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Wf(t,l)}catch(a){I(e,e.return,a)}}}function Yd(e,t,l){l.props=Bl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){I(e,t,a)}}function an(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){I(e,t,n)}}function jt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){I(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){I(e,t,n)}else l.current=null}function qd(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){I(e,e.return,n)}}function qc(e,t,l){try{var a=e.stateNode;Cp(a,e.type,l,t),a[Je]=t}catch(n){I(e,e.return,n)}}function Xd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sl(e.type)||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Us(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Ht));else if(a!==4&&(a===27&&Sl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Us(e,t,l),e=e.sibling;e!==null;)Us(e,t,l),e=e.sibling}function Oi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Sl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Oi(e,t,l),e=e.sibling;e!==null;)Oi(e,t,l),e=e.sibling}function Qd(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ue(t,a,l),t[ke]=e,t[Je]=l}catch(i){I(e,e.return,i)}}var Rt=!1,xe=!1,Qc=!1,no=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function cp(e,t){if(e=e.containerInfo,Xs=qi,e=Of(e),gu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var s=0,u=-1,r=-1,d=0,h=0,v=e,m=null;t:for(;;){for(var p;v!==l||n!==0&&v.nodeType!==3||(u=s+n),v!==i||a!==0&&v.nodeType!==3||(r=s+a),v.nodeType===3&&(s+=v.nodeValue.length),(p=v.firstChild)!==null;)m=v,v=p;for(;;){if(v===e)break t;if(m===l&&++d===n&&(u=s),m===i&&++h===a&&(r=s),(p=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=p}l=u===-1||r===-1?null:{start:u,end:r}}else l=null}l=l||{start:0,end:0}}else l=null;for(Qs={focusedElem:e,selectionRange:l},qi=!1,Ee=t;Ee!==null;)if(t=Ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ee=e;else for(;Ee!==null;){switch(t=Ee,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var b=Bl(l.type,n);e=a.getSnapshotBeforeUpdate(b,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(N){I(l,l.return,N)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Vs(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(T(163))}if(e=t.sibling,e!==null){e.return=t.return,Ee=e;break}Ee=t.return}}function Zd(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Ot(e,l),a&4&&On(5,l);break;case 1:if(Ot(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(s){I(l,l.return,s)}else{var n=Bl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){I(l,l.return,s)}}a&64&&Ld(l),a&512&&an(l,l.return);break;case 3:if(Ot(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Wf(e,t)}catch(s){I(l,l.return,s)}}break;case 27:t===null&&a&4&&Qd(l);case 26:case 5:Ot(e,l),t===null&&a&4&&qd(l),a&512&&an(l,l.return);break;case 12:Ot(e,l);break;case 31:Ot(e,l),a&4&&Jd(e,l);break;case 13:Ot(e,l),a&4&&Wd(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=hp.bind(null,l),Rp(e,l))));break;case 22:if(a=l.memoizedState!==null||Rt,!a){t=t!==null&&t.memoizedState!==null||xe,n=Rt;var i=xe;Rt=a,(xe=t)&&!i?Mt(e,l,(l.subtreeFlags&8772)!==0):Ot(e,l),Rt=n,xe=i}break;case 30:break;default:Ot(e,l)}}function Vd(e){var t=e.alternate;t!==null&&(e.alternate=null,Vd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&uu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var oe=null,Ze=!1;function wt(e,t,l){for(l=l.child;l!==null;)Kd(e,t,l),l=l.sibling}function Kd(e,t,l){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(An,l)}catch{}switch(l.tag){case 26:xe||jt(l,t),wt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:xe||jt(l,t);var a=oe,n=Ze;Sl(l.type)&&(oe=l.stateNode,Ze=!1),wt(e,t,l),un(l.stateNode),oe=a,Ze=n;break;case 5:xe||jt(l,t);case 6:if(a=oe,n=Ze,oe=null,wt(e,t,l),oe=a,Ze=n,oe!==null)if(Ze)try{(oe.nodeType===9?oe.body:oe.nodeName==="HTML"?oe.ownerDocument.body:oe).removeChild(l.stateNode)}catch(i){I(l,t,i)}else try{oe.removeChild(l.stateNode)}catch(i){I(l,t,i)}break;case 18:oe!==null&&(Ze?(e=oe,vo(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ta(e)):vo(oe,l.stateNode));break;case 4:a=oe,n=Ze,oe=l.stateNode.containerInfo,Ze=!0,wt(e,t,l),oe=a,Ze=n;break;case 0:case 11:case 14:case 15:bl(2,l,t),xe||bl(4,l,t),wt(e,t,l);break;case 1:xe||(jt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Yd(l,t,a)),wt(e,t,l);break;case 21:wt(e,t,l);break;case 22:xe=(a=xe)||l.memoizedState!==null,wt(e,t,l),xe=a;break;default:wt(e,t,l)}}function Jd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ta(e)}catch(l){I(t,t.return,l)}}}function Wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ta(e)}catch(l){I(t,t.return,l)}}function sp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new no),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new no),t;default:throw Error(T(435,e.tag))}}function Jn(e,t){var l=sp(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=pp.bind(null,e,a);a.then(n,n)}})}function Xe(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(Sl(u.type)){oe=u.stateNode,Ze=!1;break e}break;case 5:oe=u.stateNode,Ze=!1;break e;case 3:case 4:oe=u.stateNode.containerInfo,Ze=!0;break e}u=u.return}if(oe===null)throw Error(T(160));Kd(i,s,n),oe=null,Ze=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$d(t,e),t=t.sibling}var yt=null;function $d(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),Qe(e),a&4&&(bl(3,e,e.return),On(3,e),bl(5,e,e.return));break;case 1:Xe(t,e),Qe(e),a&512&&(xe||l===null||jt(l,l.return)),a&64&&Rt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=yt;if(Xe(t,e),Qe(e),a&512&&(xe||l===null||jt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Cn]||i[ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ue(i,a,l),i[ke]=e,Ce(i),a=i;break e;case"link":var s=To("link","href",n).get(a+(l.href||""));if(s){for(var u=0;u<s.length;u++)if(i=s[u],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){s.splice(u,1);break t}}i=n.createElement(a),Ue(i,a,l),n.head.appendChild(i);break;case"meta":if(s=To("meta","content",n).get(a+(l.content||""))){for(u=0;u<s.length;u++)if(i=s[u],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){s.splice(u,1);break t}}i=n.createElement(a),Ue(i,a,l),n.head.appendChild(i);break;default:throw Error(T(468,a))}i[ke]=e,Ce(i),a=i}e.stateNode=a}else Eo(n,e.type,e.stateNode);else e.stateNode=Ao(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Eo(n,e.type,e.stateNode):Ao(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&qc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Xe(t,e),Qe(e),a&512&&(xe||l===null||jt(l,l.return)),l!==null&&a&4&&qc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Xe(t,e),Qe(e),a&512&&(xe||l===null||jt(l,l.return)),e.flags&32){n=e.stateNode;try{ya(n,"")}catch(b){I(e,e.return,b)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,qc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Qc=!0);break;case 6:if(Xe(t,e),Qe(e),a&4){if(e.stateNode===null)throw Error(T(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(b){I(e,e.return,b)}}break;case 3:if(di=null,n=yt,yt=Gi(t.containerInfo),Xe(t,e),yt=n,Qe(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ta(t.containerInfo)}catch(b){I(e,e.return,b)}Qc&&(Qc=!1,Fd(e));break;case 4:a=yt,yt=Gi(e.stateNode.containerInfo),Xe(t,e),Qe(e),yt=a;break;case 12:Xe(t,e),Qe(e);break;case 31:Xe(t,e),Qe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Jn(e,a)));break;case 13:Xe(t,e),Qe(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(sc=et()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Jn(e,a)));break;case 22:n=e.memoizedState!==null;var r=l!==null&&l.memoizedState!==null,d=Rt,h=xe;if(Rt=d||n,xe=h||r,Xe(t,e),xe=h,Rt=d,Qe(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||r||Rt||xe||Dl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){r=l=t;try{if(i=r.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=r.stateNode;var v=r.memoizedProps.style,m=v!=null&&v.hasOwnProperty("display")?v.display:null;u.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(b){I(r,r.return,b)}}}else if(t.tag===6){if(l===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(b){I(r,r.return,b)}}}else if(t.tag===18){if(l===null){r=t;try{var p=r.stateNode;n?bo(p,!0):bo(r.stateNode,!1)}catch(b){I(r,r.return,b)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Jn(e,l))));break;case 19:Xe(t,e),Qe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Jn(e,a)));break;case 30:break;case 21:break;default:Xe(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Xd(a)){l=a;break}a=a.return}if(l==null)throw Error(T(160));switch(l.tag){case 27:var n=l.stateNode,i=Xc(e);Oi(e,i,n);break;case 5:var s=l.stateNode;l.flags&32&&(ya(s,""),l.flags&=-33);var u=Xc(e);Oi(e,u,s);break;case 3:case 4:var r=l.stateNode.containerInfo,d=Xc(e);Us(e,d,r);break;default:throw Error(T(161))}}catch(h){I(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ot(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zd(e,t.alternate,t),t=t.sibling}function Dl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:bl(4,t,t.return),Dl(t);break;case 1:jt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Yd(t,t.return,l),Dl(t);break;case 27:un(t.stateNode);case 26:case 5:jt(t,t.return),Dl(t);break;case 22:t.memoizedState===null&&Dl(t);break;case 30:Dl(t);break;default:Dl(t)}e=e.sibling}}function Mt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:Mt(n,i,l),On(4,i);break;case 1:if(Mt(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){I(a,a.return,d)}if(a=i,n=a.updateQueue,n!==null){var u=a.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Jf(r[n],u)}catch(d){I(a,a.return,d)}}l&&s&64&&Ld(i),an(i,i.return);break;case 27:Qd(i);case 26:case 5:Mt(n,i,l),l&&a===null&&s&4&&qd(i),an(i,i.return);break;case 12:Mt(n,i,l);break;case 31:Mt(n,i,l),l&&s&4&&Jd(n,i);break;case 13:Mt(n,i,l),l&&s&4&&Wd(n,i);break;case 22:i.memoizedState===null&&Mt(n,i,l),an(i,i.return);break;case 30:break;default:Mt(n,i,l)}t=t.sibling}}function Lu(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&zn(l))}function Yu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zn(e))}function pt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Id(e,t,l,a),t=t.sibling}function Id(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:pt(e,t,l,a),n&2048&&On(9,t);break;case 1:pt(e,t,l,a);break;case 3:pt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zn(e)));break;case 12:if(n&2048){pt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,u=i.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){I(t,t.return,r)}}else pt(e,t,l,a);break;case 31:pt(e,t,l,a);break;case 13:pt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?pt(e,t,l,a):nn(e,t):i._visibility&2?pt(e,t,l,a):(i._visibility|=2,Kl(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Lu(s,t);break;case 24:pt(e,t,l,a),n&2048&&Yu(t.alternate,t);break;default:pt(e,t,l,a)}}function Kl(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,u=l,r=a,d=s.flags;switch(s.tag){case 0:case 11:case 15:Kl(i,s,u,r,n),On(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?Kl(i,s,u,r,n):nn(i,s):(h._visibility|=2,Kl(i,s,u,r,n)),n&&d&2048&&Lu(s.alternate,s);break;case 24:Kl(i,s,u,r,n),n&&d&2048&&Yu(s.alternate,s);break;default:Kl(i,s,u,r,n)}t=t.sibling}}function nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:nn(l,a),n&2048&&Lu(a.alternate,a);break;case 24:nn(l,a),n&2048&&Yu(a.alternate,a);break;default:nn(l,a)}t=t.sibling}}var Va=8192;function Zl(e,t,l){if(e.subtreeFlags&Va)for(e=e.child;e!==null;)Pd(e,t,l),e=e.sibling}function Pd(e,t,l){switch(e.tag){case 26:Zl(e,t,l),e.flags&Va&&e.memoizedState!==null&&Kp(l,yt,e.memoizedState,e.memoizedProps);break;case 5:Zl(e,t,l);break;case 3:case 4:var a=yt;yt=Gi(e.stateNode.containerInfo),Zl(e,t,l),yt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Va,Va=16777216,Zl(e,t,l),Va=a):Zl(e,t,l));break;default:Zl(e,t,l)}}function em(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function La(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ee=a,lm(a,e)}em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tm(e),e=e.sibling}function tm(e){switch(e.tag){case 0:case 11:case 15:La(e),e.flags&2048&&bl(9,e,e.return);break;case 3:La(e);break;case 12:La(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,oi(e)):La(e);break;default:La(e)}}function oi(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ee=a,lm(a,e)}em(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:bl(8,t,t.return),oi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,oi(t));break;default:oi(t)}e=e.sibling}}function lm(e,t){for(;Ee!==null;){var l=Ee;switch(l.tag){case 0:case 11:case 15:bl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:zn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ee=a;else e:for(l=e;Ee!==null;){a=Ee;var n=a.sibling,i=a.return;if(Vd(a),a===l){Ee=null;break e}if(n!==null){n.return=i,Ee=n;break e}Ee=i}}}var up={getCacheForType:function(e){var t=Re(Ne),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Re(Ne).controller.signal}},rp=typeof WeakMap=="function"?WeakMap:Map,W=0,ae=null,Z=null,V=0,F=0,$e=null,il=!1,Oa=!1,qu=!1,Vt=0,ge=0,xl=0,kl=0,Xu=0,Pe=0,Na=0,cn=null,Ve=null,Hs=!1,sc=0,am=0,Mi=1/0,ki=null,dl=null,je=0,ml=null,Sa=null,Yt=0,Bs=0,Gs=null,nm=null,sn=0,Ls=null;function at(){return W&2&&V!==0?V&-V:L.T!==null?Zu():mf()}function im(){if(Pe===0)if(!(V&536870912)||K){var e=Ln;Ln<<=1,!(Ln&3932160)&&(Ln=262144),Pe=e}else Pe=536870912;return e=it.current,e!==null&&(e.flags|=32),Pe}function Ke(e,t,l){(e===ae&&(F===2||F===9)||e.cancelPendingCommit!==null)&&(ja(e,0),cl(e,V,Pe,!1)),En(e,l),(!(W&2)||e!==ae)&&(e===ae&&(!(W&2)&&(kl|=l),ge===4&&cl(e,V,Pe,!1)),Ct(e))}function cm(e,t,l){if(W&6)throw Error(T(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Tn(e,t),n=a?dp(e,t):Zc(e,t,!0),i=a;do{if(n===0){Oa&&!a&&cl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!op(l)){n=Zc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var u=e;n=cn;var r=u.current.memoizedState.isDehydrated;if(r&&(ja(u,s).flags|=256),s=Zc(u,s,!1),s!==2){if(qu&&!r){u.errorRecoveryDisabledLanes|=i,kl|=i,n=4;break e}i=Ve,Ve=n,i!==null&&(Ve===null?Ve=i:Ve.push.apply(Ve,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){ja(e,0),cl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(T(345));case 4:if((t&4194048)!==t)break;case 6:cl(a,t,Pe,!il);break e;case 2:Ve=null;break;case 3:case 5:break;default:throw Error(T(329))}if((t&62914560)===t&&(n=sc+300-et(),10<n)){if(cl(a,t,Pe,!il),$i(a,0,!0)!==0)break e;Yt=t,a.timeoutHandle=Em(io.bind(null,a,l,Ve,ki,Hs,t,Pe,kl,Na,il,i,"Throttled",-0,0),n);break e}io(a,l,Ve,ki,Hs,t,Pe,kl,Na,il,i,null,-0,0)}}break}while(!0);Ct(e)}function io(e,t,l,a,n,i,s,u,r,d,h,v,m,p){if(e.timeoutHandle=-1,v=t.subtreeFlags,v&8192||(v&16785408)===16785408){v={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ht},Pd(t,i,v);var b=(i&62914560)===i?sc-et():(i&4194048)===i?am-et():0;if(b=Jp(v,b),b!==null){Yt=i,e.cancelPendingCommit=b(so.bind(null,e,t,i,l,a,n,s,u,r,h,v,null,m,p)),cl(e,i,s,!d);return}}so(e,t,i,l,a,n,s,u,r)}function op(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!nt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cl(e,t,l,a){t&=~Xu,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-lt(n),s=1<<i;a[i]=-1,n&=~s}l!==0&&of(e,l,t)}function uc(){return W&6?!0:(Mn(0),!1)}function Qu(){if(Z!==null){if(F===0)var e=Z.return;else e=Z,Bt=Xl=null,zu(e),fa=null,hn=0,e=Z;for(;e!==null;)Gd(e.alternate,e),e=e.return;Z=null}}function ja(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,wp(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Yt=0,Qu(),ae=e,Z=l=Gt(e.current,null),V=t,F=0,$e=null,il=!1,Oa=Tn(e,t),qu=!1,Na=Pe=Xu=kl=xl=ge=0,Ve=cn=null,Hs=!1,t&8&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-lt(a),i=1<<n;t|=e[n],a&=~i}return Vt=t,ec(),l}function sm(e,t){q=null,L.H=yn,t===wa||t===lc?(t=Hr(),F=3):t===Su?(t=Hr(),F=4):F=t===Bu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,$e=t,Z===null&&(ge=1,zi(e,ft(t,e.current)))}function um(){var e=it.current;return e===null?!0:(V&4194048)===V?mt===null:(V&62914560)===V||V&536870912?e===mt:!1}function rm(){var e=L.H;return L.H=yn,e===null?yn:e}function om(){var e=L.A;return L.A=up,e}function _i(){ge=4,il||(V&4194048)!==V&&it.current!==null||(Oa=!0),!(xl&134217727)&&!(kl&134217727)||ae===null||cl(ae,V,Pe,!1)}function Zc(e,t,l){var a=W;W|=2;var n=rm(),i=om();(ae!==e||V!==t)&&(ki=null,ja(e,t)),t=!1;var s=ge;e:do try{if(F!==0&&Z!==null){var u=Z,r=$e;switch(F){case 8:Qu(),s=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var d=F;if(F=0,$e=null,ca(e,u,r,d),l&&Oa){s=0;break e}break;default:d=F,F=0,$e=null,ca(e,u,r,d)}}fp(),s=ge;break}catch(h){sm(e,h)}while(!0);return t&&e.shellSuspendCounter++,Bt=Xl=null,W=a,L.H=n,L.A=i,Z===null&&(ae=null,V=0,ec()),s}function fp(){for(;Z!==null;)fm(Z)}function dp(e,t){var l=W;W|=2;var a=rm(),n=om();ae!==e||V!==t?(ki=null,Mi=et()+500,ja(e,t)):Oa=Tn(e,t);e:do try{if(F!==0&&Z!==null){t=Z;var i=$e;t:switch(F){case 1:F=0,$e=null,ca(e,t,i,1);break;case 2:case 9:if(Ur(i)){F=0,$e=null,co(t);break}t=function(){F!==2&&F!==9||ae!==e||(F=7),Ct(e)},i.then(t,t);break e;case 3:F=7;break e;case 4:F=5;break e;case 7:Ur(i)?(F=0,$e=null,co(t)):(F=0,$e=null,ca(e,t,i,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var u=Z;if(s?Om(s):u.stateNode.complete){F=0,$e=null;var r=u.sibling;if(r!==null)Z=r;else{var d=u.return;d!==null?(Z=d,rc(d)):Z=null}break t}}F=0,$e=null,ca(e,t,i,5);break;case 6:F=0,$e=null,ca(e,t,i,6);break;case 8:Qu(),ge=6;break e;default:throw Error(T(462))}}mp();break}catch(h){sm(e,h)}while(!0);return Bt=Xl=null,L.H=a,L.A=n,W=l,Z!==null?0:(ae=null,V=0,ec(),ge)}function mp(){for(;Z!==null&&!Ug();)fm(Z)}function fm(e){var t=Bd(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?rc(e):Z=t}function co(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Pr(l,t,t.pendingProps,t.type,void 0,V);break;case 11:t=Pr(l,t,t.pendingProps,t.type.render,t.ref,V);break;case 5:zu(t);default:Gd(l,t),t=Z=Gf(t,Vt),t=Bd(l,t,Vt)}e.memoizedProps=e.pendingProps,t===null?rc(e):Z=t}function ca(e,t,l,a){Bt=Xl=null,zu(t),fa=null,hn=0;var n=t.return;try{if(tp(e,n,t,l,V)){ge=1,zi(e,ft(l,e.current)),Z=null;return}}catch(i){if(n!==null)throw Z=n,i;ge=1,zi(e,ft(l,e.current)),Z=null;return}t.flags&32768?(K||a===1?e=!0:Oa||V&536870912?e=!1:(il=e=!0,(a===2||a===9||a===3||a===6)&&(a=it.current,a!==null&&a.tag===13&&(a.flags|=16384))),dm(t,e)):rc(t)}function rc(e){var t=e;do{if(t.flags&32768){dm(t,il);return}e=t.return;var l=np(t.alternate,t,Vt);if(l!==null){Z=l;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ge===0&&(ge=5)}function dm(e,t){do{var l=ip(e.alternate,e);if(l!==null){l.flags&=32767,Z=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=l}while(e!==null);ge=6,Z=null}function so(e,t,l,a,n,i,s,u,r){e.cancelPendingCommit=null;do oc();while(je!==0);if(W&6)throw Error(T(327));if(t!==null){if(t===e.current)throw Error(T(177));if(i=t.lanes|t.childLanes,i|=hu,Vg(e,l,i,s,u,r),e===ae&&(Z=ae=null,V=0),Sa=t,ml=e,Yt=l,Bs=i,Gs=n,nm=a,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,yp(vi,function(){return ym(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,t.subtreeFlags&13878||a){a=L.T,L.T=null,n=$.p,$.p=2,s=W,W|=4;try{cp(e,t,l)}finally{W=s,$.p=n,L.T=a}}je=1,mm(),gm(),hm()}}function mm(){if(je===1){je=0;var e=ml,t=Sa,l=(t.flags&13878)!==0;if(t.subtreeFlags&13878||l){l=L.T,L.T=null;var a=$.p;$.p=2;var n=W;W|=4;try{$d(t,e);var i=Qs,s=Of(e.containerInfo),u=i.focusedElem,r=i.selectionRange;if(s!==u&&u&&u.ownerDocument&&wf(u.ownerDocument.documentElement,u)){if(r!==null&&gu(u)){var d=r.start,h=r.end;if(h===void 0&&(h=d),"selectionStart"in u)u.selectionStart=d,u.selectionEnd=Math.min(h,u.value.length);else{var v=u.ownerDocument||document,m=v&&v.defaultView||window;if(m.getSelection){var p=m.getSelection(),b=u.textContent.length,N=Math.min(r.start,b),_=r.end===void 0?N:Math.min(r.end,b);!p.extend&&N>_&&(s=_,_=N,N=s);var o=zr(u,N),f=zr(u,_);if(o&&f&&(p.rangeCount!==1||p.anchorNode!==o.node||p.anchorOffset!==o.offset||p.focusNode!==f.node||p.focusOffset!==f.offset)){var g=v.createRange();g.setStart(o.node,o.offset),p.removeAllRanges(),N>_?(p.addRange(g),p.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),p.addRange(g))}}}}for(v=[],p=u;p=p.parentNode;)p.nodeType===1&&v.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<v.length;u++){var x=v[u];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}qi=!!Xs,Qs=Xs=null}finally{W=n,$.p=a,L.T=l}}e.current=t,je=2}}function gm(){if(je===2){je=0;var e=ml,t=Sa,l=(t.flags&8772)!==0;if(t.subtreeFlags&8772||l){l=L.T,L.T=null;var a=$.p;$.p=2;var n=W;W|=4;try{Zd(e,t.alternate,t)}finally{W=n,$.p=a,L.T=l}}je=3}}function hm(){if(je===4||je===3){je=0,Hg();var e=ml,t=Sa,l=Yt,a=nm;t.subtreeFlags&10256||t.flags&10256?je=5:(je=0,Sa=ml=null,pm(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(dl=null),su(l),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(An,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=L.T,n=$.p,$.p=2,L.T=null;try{for(var i=e.onRecoverableError,s=0;s<a.length;s++){var u=a[s];i(u.value,{componentStack:u.stack})}}finally{L.T=t,$.p=n}}Yt&3&&oc(),Ct(e),n=e.pendingLanes,l&261930&&n&42?e===Ls?sn++:(sn=0,Ls=e):sn=0,Mn(0)}}function pm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,zn(t)))}function oc(){return mm(),gm(),hm(),ym()}function ym(){if(je!==5)return!1;var e=ml,t=Bs;Bs=0;var l=su(Yt),a=L.T,n=$.p;try{$.p=32>l?32:l,L.T=null,l=Gs,Gs=null;var i=ml,s=Yt;if(je=0,Sa=ml=null,Yt=0,W&6)throw Error(T(331));var u=W;if(W|=4,tm(i.current),Id(i,i.current,s,l),W=u,Mn(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(An,i)}catch{}return!0}finally{$.p=n,L.T=a,pm(e,t)}}function uo(e,t,l){t=ft(l,t),t=ks(e.stateNode,t,2),e=fl(e,t,2),e!==null&&(En(e,2),Ct(e))}function I(e,t,l){if(e.tag===3)uo(e,e,l);else for(;t!==null;){if(t.tag===3){uo(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(dl===null||!dl.has(a))){e=ft(l,e),l=Md(2),a=fl(t,l,2),a!==null&&(kd(l,a,t,e),En(a,2),Ct(a));break}}t=t.return}}function Vc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new rp;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(qu=!0,n.add(l),e=gp.bind(null,e,t,l),t.then(e,e))}function gp(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ae===e&&(V&l)===l&&(ge===4||ge===3&&(V&62914560)===V&&300>et()-sc?!(W&2)&&ja(e,0):Xu|=l,Na===V&&(Na=0)),Ct(e)}function vm(e,t){t===0&&(t=rf()),e=ql(e,t),e!==null&&(En(e,t),Ct(e))}function hp(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),vm(e,l)}function pp(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(T(314))}a!==null&&a.delete(t),vm(e,l)}function yp(e,t){return iu(e,t)}var Ri=null,Jl=null,Ys=!1,Ui=!1,Kc=!1,sl=0;function Ct(e){e!==Jl&&e.next===null&&(Jl===null?Ri=Jl=e:Jl=Jl.next=e),Ui=!0,Ys||(Ys=!0,bp())}function Mn(e,t){if(!Kc&&Ui){Kc=!0;do for(var l=!1,a=Ri;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var s=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-lt(42|e)+1)-1,i&=n&~(s&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,ro(a,i))}else i=V,i=$i(a,a===ae?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(i&3)||Tn(a,i)||(l=!0,ro(a,i));a=a.next}while(l);Kc=!1}}function vp(){bm()}function bm(){Ui=Ys=!1;var e=0;sl!==0&&zp()&&(e=sl);for(var t=et(),l=null,a=Ri;a!==null;){var n=a.next,i=xm(a,t);i===0?(a.next=null,l===null?Ri=n:l.next=n,n===null&&(Jl=l)):(l=a,(e!==0||i&3)&&(Ui=!0)),a=n}je!==0&&je!==5||Mn(e),sl!==0&&(sl=0)}function xm(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-lt(i),u=1<<s,r=n[s];r===-1?(!(u&l)||u&a)&&(n[s]=Zg(u,t)):r<=t&&(e.expiredLanes|=u),i&=~u}if(t=ae,l=V,l=$i(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(F===2||F===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Nc(a),e.callbackNode=null,e.callbackPriority=0;if(!(l&3)||Tn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Nc(a),su(l)){case 2:case 8:l=sf;break;case 32:l=vi;break;case 268435456:l=uf;break;default:l=vi}return a=Nm.bind(null,e),l=iu(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Nc(a),e.callbackPriority=2,e.callbackNode=null,2}function Nm(e,t){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(oc()&&e.callbackNode!==l)return null;var a=V;return a=$i(e,e===ae?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(cm(e,a,t),xm(e,et()),e.callbackNode!=null&&e.callbackNode===l?Nm.bind(null,e):null)}function ro(e,t){if(oc())return null;cm(e,t,!0)}function bp(){Op(function(){W&6?iu(cf,vp):bm()})}function Zu(){if(sl===0){var e=va;e===0&&(e=Gn,Gn<<=1,!(Gn&261888)&&(Gn=256)),sl=e}return sl}function oo(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ti(""+e)}function fo(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function xp(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=oo((n[Je]||null).action),s=a.submitter;s&&(t=(t=s[Je]||null)?oo(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var u=new Fi("action","action",null,a,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(sl!==0){var r=s?fo(n,s):new FormData(n);Os(l,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(u.preventDefault(),r=s?fo(n,s):new FormData(n),Os(l,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Jc=0;Jc<bs.length;Jc++){var Wc=bs[Jc],Np=Wc.toLowerCase(),Sp=Wc[0].toUpperCase()+Wc.slice(1);bt(Np,"on"+Sp)}bt(kf,"onAnimationEnd");bt(_f,"onAnimationIteration");bt(Rf,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(Bh,"onTransitionRun");bt(Gh,"onTransitionStart");bt(Lh,"onTransitionCancel");bt(Uf,"onTransitionEnd");pa("onMouseEnter",["mouseout","mouseover"]);pa("onMouseLeave",["mouseout","mouseover"]);pa("onPointerEnter",["pointerout","pointerover"]);pa("onPointerLeave",["pointerout","pointerover"]);Gl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gl("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn));function Sm(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var s=a.length-1;0<=s;s--){var u=a[s],r=u.instance,d=u.currentTarget;if(u=u.listener,r!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=d;try{i(n)}catch(h){xi(h)}n.currentTarget=null,i=r}else for(s=0;s<a.length;s++){if(u=a[s],r=u.instance,d=u.currentTarget,u=u.listener,r!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=d;try{i(n)}catch(h){xi(h)}n.currentTarget=null,i=r}}}}function Q(e,t){var l=t[fs];l===void 0&&(l=t[fs]=new Set);var a=e+"__bubble";l.has(a)||(jm(t,e,2,!1),l.add(a))}function $c(e,t,l){var a=0;t&&(a|=4),jm(l,e,a,t)}var Wn="_reactListening"+Math.random().toString(36).slice(2);function Vu(e){if(!e[Wn]){e[Wn]=!0,gf.forEach(function(l){l!=="selectionchange"&&(jp.has(l)||$c(l,!1,e),$c(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wn]||(t[Wn]=!0,$c("selectionchange",!1,t))}}function jm(e,t,l,a){switch(Um(t)){case 2:var n=Fp;break;case 8:n=Ip;break;default:n=$u}l=n.bind(null,t,l,e),n=void 0,!ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Fc(e,t,l,a,n){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var u=a.stateNode.containerInfo;if(u===n)break;if(s===4)for(s=a.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;u!==null;){if(s=Fl(u),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){a=i=s;continue e}u=u.parentNode}}a=a.return}Sf(function(){var d=i,h=ou(l),v=[];e:{var m=Hf.get(e);if(m!==void 0){var p=Fi,b=e;switch(e){case"keypress":if(ai(l)===0)break e;case"keydown":case"keyup":p=ph;break;case"focusin":b="focus",p=Ec;break;case"focusout":b="blur",p=Ec;break;case"beforeblur":case"afterblur":p=Ec;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=br;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bh;break;case kf:case _f:case Rf:p=sh;break;case Uf:p=Nh;break;case"scroll":case"scrollend":p=lh;break;case"wheel":p=jh;break;case"copy":case"cut":case"paste":p=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Nr;break;case"toggle":case"beforetoggle":p=Th}var N=(t&4)!==0,_=!N&&(e==="scroll"||e==="scrollend"),o=N?m!==null?m+"Capture":null:m;N=[];for(var f=d,g;f!==null;){var x=f;if(g=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||g===null||o===null||(x=on(f,o),x!=null&&N.push(bn(f,x,g))),_)break;f=f.return}0<N.length&&(m=new p(m,b,null,l,h),v.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",m&&l!==hs&&(b=l.relatedTarget||l.fromElement)&&(Fl(b)||b[Ca]))break e;if((p||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,p?(b=l.relatedTarget||l.toElement,p=d,b=b?Fl(b):null,b!==null&&(_=jn(b),N=b.tag,b!==_||N!==5&&N!==27&&N!==6)&&(b=null)):(p=null,b=d),p!==b)){if(N=br,x="onMouseLeave",o="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(N=Nr,x="onPointerLeave",o="onPointerEnter",f="pointer"),_=p==null?m:Qa(p),g=b==null?m:Qa(b),m=new N(x,f+"leave",p,l,h),m.target=_,m.relatedTarget=g,x=null,Fl(h)===d&&(N=new N(o,f+"enter",b,l,h),N.target=g,N.relatedTarget=_,x=N),_=x,p&&b)t:{for(N=Ap,o=p,f=b,g=0,x=o;x;x=N(x))g++;x=0;for(var k=f;k;k=N(k))x++;for(;0<g-x;)o=N(o),g--;for(;0<x-g;)f=N(f),x--;for(;g--;){if(o===f||f!==null&&o===f.alternate){N=o;break t}o=N(o),f=N(f)}N=null}else N=null;p!==null&&mo(v,m,p,N,!1),b!==null&&_!==null&&mo(v,_,b,N,!0)}}e:{if(m=d?Qa(d):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var M=Tr;else if(Ar(m))if(Df)M=Rh;else{M=kh;var y=Mh}else p=m.nodeName,!p||p.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&ru(d.elementType)&&(M=Tr):M=_h;if(M&&(M=M(e,d))){Cf(v,M,l,h);break e}y&&y(e,m,d),e==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&gs(m,"number",m.value)}switch(y=d?Qa(d):window,e){case"focusin":(Ar(y)||y.contentEditable==="true")&&(ea=y,ys=d,Fa=null);break;case"focusout":Fa=ys=ea=null;break;case"mousedown":vs=!0;break;case"contextmenu":case"mouseup":case"dragend":vs=!1,wr(v,l,h);break;case"selectionchange":if(Hh)break;case"keydown":case"keyup":wr(v,l,h)}var O;if(mu)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Pl?Tf(e,l)&&(w="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(w="onCompositionStart");w&&(Af&&l.locale!=="ko"&&(Pl||w!=="onCompositionStart"?w==="onCompositionEnd"&&Pl&&(O=jf()):(nl=h,fu="value"in nl?nl.value:nl.textContent,Pl=!0)),y=Hi(d,w),0<y.length&&(w=new xr(w,e,null,l,h),v.push({event:w,listeners:y}),O?w.data=O:(O=Ef(l),O!==null&&(w.data=O)))),(O=Ch?Dh(e,l):zh(e,l))&&(w=Hi(d,"onBeforeInput"),0<w.length&&(y=new xr("onBeforeInput","beforeinput",null,l,h),v.push({event:y,listeners:w}),y.data=O)),xp(v,e,d,l,h)}Sm(v,t)})}function bn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Hi(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=on(e,l),n!=null&&a.unshift(bn(e,n,i)),n=on(e,t),n!=null&&a.push(bn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Ap(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mo(e,t,l,a,n){for(var i=t._reactName,s=[];l!==null&&l!==a;){var u=l,r=u.alternate,d=u.stateNode;if(u=u.tag,r!==null&&r===a)break;u!==5&&u!==26&&u!==27||d===null||(r=d,n?(d=on(l,i),d!=null&&s.unshift(bn(l,d,r))):n||(d=on(l,i),d!=null&&s.push(bn(l,d,r)))),l=l.return}s.length!==0&&e.push({event:t,listeners:s})}var Tp=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function go(e){return(typeof e=="string"?e:""+e).replace(Tp,`
`).replace(Ep,"")}function Am(e,t){return t=go(t),go(e)===t}function te(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ya(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ya(e,""+a);break;case"className":qn(e,"class",a);break;case"tabIndex":qn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":qn(e,l,a);break;case"style":Nf(e,a,i);break;case"data":if(t!=="object"){qn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ti(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&te(e,t,"name",n.name,n,null),te(e,t,"formEncType",n.formEncType,n,null),te(e,t,"formMethod",n.formMethod,n,null),te(e,t,"formTarget",n.formTarget,n,null)):(te(e,t,"encType",n.encType,n,null),te(e,t,"method",n.method,n,null),te(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ti(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Ht);break;case"onScroll":a!=null&&Q("scroll",e);break;case"onScrollEnd":a!=null&&Q("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(T(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(T(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=ti(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":Q("beforetoggle",e),Q("toggle",e),ei(e,"popover",a);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ei(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=eh.get(l)||l,ei(e,l,a))}}function qs(e,t,l,a,n,i){switch(l){case"style":Nf(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(T(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(T(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ya(e,a):(typeof a=="number"||typeof a=="bigint")&&ya(e,""+a);break;case"onScroll":a!=null&&Q("scroll",e);break;case"onScrollEnd":a!=null&&Q("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ht);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[Je]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):ei(e,l,a)}}}function Ue(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",e),Q("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];if(s!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(T(137,t));default:te(e,t,i,s,l,null)}}n&&te(e,t,"srcSet",l.srcSet,l,null),a&&te(e,t,"src",l.src,l,null);return;case"input":Q("invalid",e);var u=i=s=n=null,r=null,d=null;for(a in l)if(l.hasOwnProperty(a)){var h=l[a];if(h!=null)switch(a){case"name":n=h;break;case"type":s=h;break;case"checked":r=h;break;case"defaultChecked":d=h;break;case"value":i=h;break;case"defaultValue":u=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(T(137,t));break;default:te(e,t,a,h,l,null)}}vf(e,i,u,r,d,s,n,!1);return;case"select":Q("invalid",e),a=s=i=null;for(n in l)if(l.hasOwnProperty(n)&&(u=l[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":s=u;break;case"multiple":a=u;default:te(e,t,n,u,l,null)}t=i,l=s,e.multiple=!!a,t!=null?ua(e,!!a,t,!1):l!=null&&ua(e,!!a,l,!0);return;case"textarea":Q("invalid",e),i=n=a=null;for(s in l)if(l.hasOwnProperty(s)&&(u=l[s],u!=null))switch(s){case"value":a=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(T(91));break;default:te(e,t,s,u,l,null)}xf(e,a,n,i);return;case"option":for(r in l)if(l.hasOwnProperty(r)&&(a=l[r],a!=null))switch(r){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:te(e,t,r,a,l,null)}return;case"dialog":Q("beforetoggle",e),Q("toggle",e),Q("cancel",e),Q("close",e);break;case"iframe":case"object":Q("load",e);break;case"video":case"audio":for(a=0;a<vn.length;a++)Q(vn[a],e);break;case"image":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"embed":case"source":case"link":Q("error",e),Q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in l)if(l.hasOwnProperty(d)&&(a=l[d],a!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(T(137,t));default:te(e,t,d,a,l,null)}return;default:if(ru(t)){for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!==void 0&&qs(e,t,h,a,l,void 0));return}}for(u in l)l.hasOwnProperty(u)&&(a=l[u],a!=null&&te(e,t,u,a,l,null))}function Cp(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,u=null,r=null,d=null,h=null;for(p in l){var v=l[p];if(l.hasOwnProperty(p)&&v!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":r=v;default:a.hasOwnProperty(p)||te(e,t,p,null,a,v)}}for(var m in a){var p=a[m];if(v=l[m],a.hasOwnProperty(m)&&(p!=null||v!=null))switch(m){case"type":i=p;break;case"name":n=p;break;case"checked":d=p;break;case"defaultChecked":h=p;break;case"value":s=p;break;case"defaultValue":u=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(T(137,t));break;default:p!==v&&te(e,t,m,p,a,v)}}ms(e,s,u,r,d,h,i,n);return;case"select":p=s=u=m=null;for(i in l)if(r=l[i],l.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":p=r;default:a.hasOwnProperty(i)||te(e,t,i,null,a,r)}for(n in a)if(i=a[n],r=l[n],a.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":m=i;break;case"defaultValue":u=i;break;case"multiple":s=i;default:i!==r&&te(e,t,n,i,a,r)}t=u,l=s,a=p,m!=null?ua(e,!!l,m,!1):!!a!=!!l&&(t!=null?ua(e,!!l,t,!0):ua(e,!!l,l?[]:"",!1));return;case"textarea":p=m=null;for(u in l)if(n=l[u],l.hasOwnProperty(u)&&n!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:te(e,t,u,null,a,n)}for(s in a)if(n=a[s],i=l[s],a.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":m=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(T(91));break;default:n!==i&&te(e,t,s,n,a,i)}bf(e,m,p);return;case"option":for(var b in l)if(m=l[b],l.hasOwnProperty(b)&&m!=null&&!a.hasOwnProperty(b))switch(b){case"selected":e.selected=!1;break;default:te(e,t,b,null,a,m)}for(r in a)if(m=a[r],p=l[r],a.hasOwnProperty(r)&&m!==p&&(m!=null||p!=null))switch(r){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:te(e,t,r,m,a,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in l)m=l[N],l.hasOwnProperty(N)&&m!=null&&!a.hasOwnProperty(N)&&te(e,t,N,null,a,m);for(d in a)if(m=a[d],p=l[d],a.hasOwnProperty(d)&&m!==p&&(m!=null||p!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(T(137,t));break;default:te(e,t,d,m,a,p)}return;default:if(ru(t)){for(var _ in l)m=l[_],l.hasOwnProperty(_)&&m!==void 0&&!a.hasOwnProperty(_)&&qs(e,t,_,void 0,a,m);for(h in a)m=a[h],p=l[h],!a.hasOwnProperty(h)||m===p||m===void 0&&p===void 0||qs(e,t,h,m,a,p);return}}for(var o in l)m=l[o],l.hasOwnProperty(o)&&m!=null&&!a.hasOwnProperty(o)&&te(e,t,o,null,a,m);for(v in a)m=a[v],p=l[v],!a.hasOwnProperty(v)||m===p||m==null&&p==null||te(e,t,v,m,a,p)}function ho(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,s=n.initiatorType,u=n.duration;if(i&&u&&ho(s)){for(s=0,u=n.responseEnd,a+=1;a<l.length;a++){var r=l[a],d=r.startTime;if(d>u)break;var h=r.transferSize,v=r.initiatorType;h&&ho(v)&&(r=r.responseEnd,s+=h*(r<u?1:(u-d)/(r-d)))}if(--a,t+=8*(i+s)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xs=null,Qs=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function po(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ic=null;function zp(){var e=window.event;return e&&e.type==="popstate"?e===Ic?!1:(Ic=e,!0):(Ic=null,!1)}var Em=typeof setTimeout=="function"?setTimeout:void 0,wp=typeof clearTimeout=="function"?clearTimeout:void 0,yo=typeof Promise=="function"?Promise:void 0,Op=typeof queueMicrotask=="function"?queueMicrotask:typeof yo<"u"?function(e){return yo.resolve(null).then(e).catch(Mp)}:Em;function Mp(e){setTimeout(function(){throw e})}function Sl(e){return e==="head"}function vo(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ta(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")un(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,un(l);for(var i=l.firstChild;i;){var s=i.nextSibling,u=i.nodeName;i[Cn]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=s}}else l==="body"&&un(e.ownerDocument.body);l=n}while(l);Ta(t)}function bo(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Vs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Vs(l),uu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function kp(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Cn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=gt(e.nextSibling),e===null)break}return null}function _p(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=gt(e.nextSibling),e===null))return null;return e}function Cm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gt(e.nextSibling),e===null))return null;return e}function Ks(e){return e.data==="$?"||e.data==="$~"}function Js(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rp(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ws=null;function xo(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return gt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function No(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Dm(e,t,l){switch(t=Bi(l),e){case"html":if(e=t.documentElement,!e)throw Error(T(452));return e;case"head":if(e=t.head,!e)throw Error(T(453));return e;case"body":if(e=t.body,!e)throw Error(T(454));return e;default:throw Error(T(451))}}function un(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);uu(e)}var ht=new Map,So=new Set;function Gi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=$.d;$.d={f:Up,r:Hp,D:Bp,C:Gp,L:Lp,m:Yp,X:Xp,S:qp,M:Qp};function Up(){var e=Kt.f(),t=uc();return e||t}function Hp(e){var t=Da(e);t!==null&&t.tag===5&&t.type==="form"?Nd(t):Kt.r(e)}var Ma=typeof document>"u"?null:document;function zm(e,t,l){var a=Ma;if(a&&typeof t=="string"&&t){var n=ot(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),So.has(n)||(So.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ue(t,"link",e),Ce(t),a.head.appendChild(t)))}}function Bp(e){Kt.D(e),zm("dns-prefetch",e,null)}function Gp(e,t){Kt.C(e,t),zm("preconnect",e,t)}function Lp(e,t,l){Kt.L(e,t,l);var a=Ma;if(a&&e&&t){var n='link[rel="preload"][as="'+ot(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ot(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ot(l.imageSizes)+'"]')):n+='[href="'+ot(e)+'"]';var i=n;switch(t){case"style":i=Aa(e);break;case"script":i=ka(e)}ht.has(i)||(e=re({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),ht.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(kn(i))||t==="script"&&a.querySelector(_n(i))||(t=a.createElement("link"),Ue(t,"link",e),Ce(t),a.head.appendChild(t)))}}function Yp(e,t){Kt.m(e,t);var l=Ma;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ot(a)+'"][href="'+ot(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ka(e)}if(!ht.has(i)&&(e=re({rel:"modulepreload",href:e},t),ht.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(_n(i)))return}a=l.createElement("link"),Ue(a,"link",e),Ce(a),l.head.appendChild(a)}}}function qp(e,t,l){Kt.S(e,t,l);var a=Ma;if(a&&e){var n=sa(a).hoistableStyles,i=Aa(e);t=t||"default";var s=n.get(i);if(!s){var u={loading:0,preload:null};if(s=a.querySelector(kn(i)))u.loading=5;else{e=re({rel:"stylesheet",href:e,"data-precedence":t},l),(l=ht.get(i))&&Ku(e,l);var r=s=a.createElement("link");Ce(r),Ue(r,"link",e),r._p=new Promise(function(d,h){r.onload=d,r.onerror=h}),r.addEventListener("load",function(){u.loading|=1}),r.addEventListener("error",function(){u.loading|=2}),u.loading|=4,fi(s,t,a)}s={type:"stylesheet",instance:s,count:1,state:u},n.set(i,s)}}}function Xp(e,t){Kt.X(e,t);var l=Ma;if(l&&e){var a=sa(l).hoistableScripts,n=ka(e),i=a.get(n);i||(i=l.querySelector(_n(n)),i||(e=re({src:e,async:!0},t),(t=ht.get(n))&&Ju(e,t),i=l.createElement("script"),Ce(i),Ue(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Qp(e,t){Kt.M(e,t);var l=Ma;if(l&&e){var a=sa(l).hoistableScripts,n=ka(e),i=a.get(n);i||(i=l.querySelector(_n(n)),i||(e=re({src:e,async:!0,type:"module"},t),(t=ht.get(n))&&Ju(e,t),i=l.createElement("script"),Ce(i),Ue(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function jo(e,t,l,a){var n=(n=ul.current)?Gi(n):null;if(!n)throw Error(T(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Aa(l.href),l=sa(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Aa(l.href);var i=sa(n).hoistableStyles,s=i.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=n.querySelector(kn(e)))&&!i._p&&(s.instance=i,s.state.loading=5),ht.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ht.set(e,l),i||Zp(n,e,l,s.state))),t&&a===null)throw Error(T(528,""));return s}if(t&&a!==null)throw Error(T(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ka(l),l=sa(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(T(444,e))}}function Aa(e){return'href="'+ot(e)+'"'}function kn(e){return'link[rel="stylesheet"]['+e+"]"}function wm(e){return re({},e,{"data-precedence":e.precedence,precedence:null})}function Zp(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ue(t,"link",l),Ce(t),e.head.appendChild(t))}function ka(e){return'[src="'+ot(e)+'"]'}function _n(e){return"script[async]"+e}function Ao(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ot(l.href)+'"]');if(a)return t.instance=a,Ce(a),a;var n=re({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ce(a),Ue(a,"style",n),fi(a,l.precedence,e),t.instance=a;case"stylesheet":n=Aa(l.href);var i=e.querySelector(kn(n));if(i)return t.state.loading|=4,t.instance=i,Ce(i),i;a=wm(l),(n=ht.get(n))&&Ku(a,n),i=(e.ownerDocument||e).createElement("link"),Ce(i);var s=i;return s._p=new Promise(function(u,r){s.onload=u,s.onerror=r}),Ue(i,"link",a),t.state.loading|=4,fi(i,l.precedence,e),t.instance=i;case"script":return i=ka(l.src),(n=e.querySelector(_n(i)))?(t.instance=n,Ce(n),n):(a=l,(n=ht.get(i))&&(a=re({},l),Ju(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ce(n),Ue(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(T(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,fi(a,l.precedence,e));return t.instance}function fi(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,s=0;s<a.length;s++){var u=a[s];if(u.dataset.precedence===t)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Ku(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ju(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var di=null;function To(e,t,l){if(di===null){var a=new Map,n=di=new Map;n.set(l,a)}else n=di,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Cn]||i[ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var u=a.get(s);u?u.push(i):a.set(s,[i])}}return a}function Eo(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Vp(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Om(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Kp(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var n=Aa(a.href),i=t.querySelector(kn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Li.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Ce(i);return}i=t.ownerDocument||t,a=wm(a),(n=ht.get(n))&&Ku(a,n),i=i.createElement("link"),Ce(i);var s=i;s._p=new Promise(function(u,r){s.onload=u,s.onerror=r}),Ue(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&!(l.state.loading&3)&&(e.count++,l=Li.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Pc=0;function Jp(e,t){return e.stylesheets&&e.count===0&&mi(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&mi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Pc===0&&(Pc=62500*Dp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Pc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Li(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yi=null;function mi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yi=new Map,t.forEach(Wp,e),Yi=null,Li.call(e))}function Wp(e,t){if(!(t.state.loading&4)){var l=Yi.get(e);if(l)var a=l.get(null);else{l=new Map,Yi.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(l.set(s.dataset.precedence,s),a=s)}a&&l.set(null,a)}n=t.instance,s=n.getAttribute("data-precedence"),i=l.get(s)||a,i===a&&l.set(null,n),l.set(s,n),this.count++,a=Li.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var xn={$$typeof:Ut,Provider:null,Consumer:null,_currentValue:zl,_currentValue2:zl,_threadCount:0};function $p(e,t,l,a,n,i,s,u,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.hiddenUpdates=Sc(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Mm(e,t,l,a,n,i,s,u,r,d,h,v){return e=new $p(e,t,l,s,r,d,h,v,u),t=1,i===!0&&(t|=24),i=Ie(3,null,null,t),e.current=i,i.stateNode=e,t=xu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},ju(i),e}function km(e){return e?(e=aa,e):aa}function _m(e,t,l,a,n,i){n=km(n),a.context===null?a.context=n:a.pendingContext=n,a=ol(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=fl(e,a,t),l!==null&&(Ke(l,e,t),Pa(l,e,t))}function Co(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Wu(e,t){Co(e,t),(e=e.alternate)&&Co(e,t)}function Rm(e){if(e.tag===13||e.tag===31){var t=ql(e,67108864);t!==null&&Ke(t,e,67108864),Wu(e,67108864)}}function Do(e){if(e.tag===13||e.tag===31){var t=at();t=cu(t);var l=ql(e,t);l!==null&&Ke(l,e,t),Wu(e,t)}}var qi=!0;function Fp(e,t,l,a){var n=L.T;L.T=null;var i=$.p;try{$.p=2,$u(e,t,l,a)}finally{$.p=i,L.T=n}}function Ip(e,t,l,a){var n=L.T;L.T=null;var i=$.p;try{$.p=8,$u(e,t,l,a)}finally{$.p=i,L.T=n}}function $u(e,t,l,a){if(qi){var n=$s(a);if(n===null)Fc(e,t,a,Xi,l),zo(e,a);else if(ey(n,e,t,l,a))a.stopPropagation();else if(zo(e,a),t&4&&-1<Pp.indexOf(e)){for(;n!==null;){var i=Da(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=El(i.pendingLanes);if(s!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var r=1<<31-lt(s);u.entanglements[1]|=r,s&=~r}Ct(i),!(W&6)&&(Mi=et()+500,Mn(0))}}break;case 31:case 13:u=ql(i,2),u!==null&&Ke(u,i,2),uc(),Wu(i,2)}if(i=$s(a),i===null&&Fc(e,t,a,Xi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Fc(e,t,a,null,l)}}function $s(e){return e=ou(e),Fu(e)}var Xi=null;function Fu(e){if(Xi=null,e=Fl(e),e!==null){var t=jn(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ef(t),e!==null)return e;e=null}else if(l===31){if(e=tf(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xi=e,null}function Um(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bg()){case cf:return 2;case sf:return 8;case vi:case Gg:return 32;case uf:return 268435456;default:return 32}default:return 32}}var Fs=!1,gl=null,hl=null,pl=null,Nn=new Map,Sn=new Map,ll=[],Pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zo(e,t){switch(e){case"focusin":case"focusout":gl=null;break;case"dragenter":case"dragleave":hl=null;break;case"mouseover":case"mouseout":pl=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function Ya(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Da(t),t!==null&&Rm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function ey(e,t,l,a,n){switch(t){case"focusin":return gl=Ya(gl,e,t,l,a,n),!0;case"dragenter":return hl=Ya(hl,e,t,l,a,n),!0;case"mouseover":return pl=Ya(pl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Nn.set(i,Ya(Nn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Sn.set(i,Ya(Sn.get(i)||null,e,t,l,a,n)),!0}return!1}function Hm(e){var t=Fl(e.target);if(t!==null){var l=jn(t);if(l!==null){if(t=l.tag,t===13){if(t=ef(l),t!==null){e.blockedOn=t,dr(e.priority,function(){Do(l)});return}}else if(t===31){if(t=tf(l),t!==null){e.blockedOn=t,dr(e.priority,function(){Do(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=$s(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);hs=a,l.target.dispatchEvent(a),hs=null}else return t=Da(l),t!==null&&Rm(t),e.blockedOn=l,!1;t.shift()}return!0}function wo(e,t,l){gi(e)&&l.delete(t)}function ty(){Fs=!1,gl!==null&&gi(gl)&&(gl=null),hl!==null&&gi(hl)&&(hl=null),pl!==null&&gi(pl)&&(pl=null),Nn.forEach(wo),Sn.forEach(wo)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,Fs||(Fs=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,ty)))}var Fn=null;function Oo(e){Fn!==e&&(Fn=e,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,function(){Fn===e&&(Fn=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Fu(a||l)===null)continue;break}var i=Da(l);i!==null&&(e.splice(t,3),t-=3,Os(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ta(e){function t(r){return $n(r,e)}gl!==null&&$n(gl,e),hl!==null&&$n(hl,e),pl!==null&&$n(pl,e),Nn.forEach(t),Sn.forEach(t);for(var l=0;l<ll.length;l++){var a=ll[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ll.length&&(l=ll[0],l.blockedOn===null);)Hm(l),l.blockedOn===null&&ll.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],s=n[Je]||null;if(typeof i=="function")s||Oo(l);else if(s){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[Je]||null)u=s.formAction;else if(Fu(n)!==null)continue}else u=s.action;typeof u=="function"?l[a+1]=u:(l.splice(a,3),a-=3),Oo(l)}}}function Bm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Iu(e){this._internalRoot=e}fc.prototype.render=Iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));var l=t.current,a=at();_m(l,a,e,t,null,null)};fc.prototype.unmount=Iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_m(e.current,2,null,e,null,null),uc(),t[Ca]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var t=mf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<ll.length&&t!==0&&t<ll[l].priority;l++);ll.splice(l,0,e),l===0&&Hm(e)}};var Mo=Io.version;if(Mo!=="19.2.4")throw Error(T(527,Mo,"19.2.4"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Og(t),e=e!==null?lf(e):null,e=e===null?null:e.stateNode,e};var ly={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var In=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!In.isDisabled&&In.supportsFiber)try{An=In.inject(ly),tt=In}catch{}}Ji.createRoot=function(e,t){if(!Po(e))throw Error(T(299));var l=!1,a="",n=zd,i=wd,s=Od;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Mm(e,1,!1,null,null,l,a,null,n,i,s,Bm),e[Ca]=t.current,Vu(e),new Iu(t)};Ji.hydrateRoot=function(e,t,l){if(!Po(e))throw Error(T(299));var a=!1,n="",i=zd,s=wd,u=Od,r=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),t=Mm(e,1,!0,t,l??null,a,n,r,i,s,u,Bm),t.context=km(null),l=t.current,a=at(),a=cu(a),n=ol(a),n.callback=null,fl(l,n,a),l=a,t.current.lanes=l,En(t,l),Ct(t),e[Ca]=t.current,Vu(e),new fc(t)};Ji.version="19.2.4";function Gm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gm)}catch(e){console.error(e)}}Gm(),Vo.exports=Ji;var ay=Vo.exports;const Tt={ACTIONABLE_NOW:"Now",CANDIDATES:"Review",AMBIGUITY:"Clarify",WAITING:"Waiting",TUNING:"Tuning"},ga={CRITICAL:"Critical",HIGH:"High",MEDIUM:"Medium",LOW:"Low"},Qi={DATE_EXACT:"On Date",DATE_WINDOW:"Date Range",EMAIL_REPLY:"Email Reply",MANUAL_CHECK:"Manual Check",WEB_CONDITION:"Web Monitor"},ny="/api";async function B(e,t){const l=await fetch(`${ny}${e}`,{headers:{"Content-Type":"application/json",...t==null?void 0:t.headers},...t});if(!l.ok){const a=await l.json().catch(()=>({message:"Request failed"}));throw new Error(a.message||`HTTP ${l.status}`)}return l.json()}async function Lm(){return B("/containers/counts")}async function Ym(e){const t=new URLSearchParams;e&&t.set("container",e);const l=t.toString();return B(`/actions${l?`?${l}`:""}`)}async function iy(e){return B(`/actions/${e}`)}async function _t(e,t){return B(`/actions/${e}`,{method:"PUT",body:JSON.stringify(t)})}async function Pu(e){return B(`/actions/${e}/complete`,{method:"POST"})}async function ko(e,t){return B(`/actions/${e}/move`,{method:"POST",body:JSON.stringify({container:t})})}async function dc(e){await B(`/actions/${e}`,{method:"DELETE"})}async function cy(e){await B(`/actions/${e}/purge`,{method:"DELETE"})}async function sy(e){return B(`/actions/${e}/not-an-action`,{method:"POST"})}async function qm(e){await B(`/actions/${e}/acknowledge`,{method:"POST"})}async function Xm(){return B("/system/health")}async function uy(){return B("/system/run-followups",{method:"POST"})}async function ry(){return B("/system/run-triggers",{method:"POST"})}async function oy(e){return B("/parse/preview",{method:"POST",body:JSON.stringify({text:e})})}async function fy(e){return B("/parse/confirm",{method:"POST",body:JSON.stringify(e)})}async function dy(e,t){return B("/parse/clarify",{method:"POST",body:JSON.stringify({rawInput:e,answers:t})})}async function my(e){return B(`/parse/${e}/reparse`,{method:"POST"})}async function gy(){return B("/sources/gmail/status")}async function hy(){return B("/sources/gmail/auth-url")}async function py(){await B("/sources/gmail/disconnect",{method:"POST"})}async function yy(){return B("/sources/gmail/scan",{method:"POST"})}async function vy(e){const t=new URLSearchParams;e!=null&&e.actionId&&t.set("actionId",e.actionId.toString()),e!=null&&e.pending&&t.set("pending","true");const l=t.toString();return B(`/triggers${l?`?${l}`:""}`)}async function Rn(e){return B("/triggers",{method:"POST",body:JSON.stringify(e)})}async function by(e){await B(`/triggers/${e}`,{method:"DELETE"})}async function xy(e){return B(`/triggers/${e}/fire`,{method:"POST"})}async function Ny(e,t){return B(`/triggers/${e}/check`,{method:"POST",body:JSON.stringify({conditionMet:t})})}async function Sy(e){const t=new URLSearchParams;e.q&&t.set("q",e.q),e.container&&t.set("container",e.container),e.urgency&&t.set("urgency",e.urgency),e.includeArchived&&t.set("includeArchived","true"),e.archiveOnly&&t.set("archiveOnly","true"),e.limit&&t.set("limit",e.limit.toString()),e.offset&&t.set("offset",e.offset.toString());const l=t.toString();return B(`/search${l?`?${l}`:""}`)}async function jy(){return B("/groups")}async function Ay(e){return B("/groups",{method:"POST",body:JSON.stringify(e)})}async function Ty(e){return B(`/groups/${e}`,{method:"PUT",body:JSON.stringify({archivedAt:new Date().toISOString()})})}async function Ey(e){await B(`/groups/${e}`,{method:"DELETE"})}async function Cy(e,t){return B(`/groups/${e}/actions`,{method:"POST",body:JSON.stringify({actionIds:t})})}async function _o(e,t){await B(`/groups/${e}/actions/${t}`,{method:"DELETE"})}async function Dy(){return B("/groups/suggestions")}async function zy(e,t){return B("/groups/suggestions/"+e+"/accept",{method:"POST",body:JSON.stringify({name:t})})}async function wy(e){await B("/groups/suggestions/"+e+"/dismiss",{method:"POST"})}async function Oy(e,t){return B("/groups/merge",{method:"POST",body:JSON.stringify({primaryId:e,secondaryId:t})})}async function My(){return B("/tuning")}async function ky(e){return B(`/tuning/${e}/activate`,{method:"POST"})}async function _y(e,t,l=!1){return B(`/tuning/${e}/reject`,{method:"POST",body:JSON.stringify({feedback:t,dontAskAgain:l})})}async function Ry(e){return B(`/tuning/${e}/ask-less`,{method:"POST"})}async function Uy(e){await B(`/tuning/${e}`,{method:"DELETE"})}async function Hy(){return B("/tuning/stats")}async function By(){return B("/notifications/vapid-public-key")}async function Gy(e,t,l){await B("/notifications/subscribe",{method:"POST",body:JSON.stringify({endpoint:e,p256dh:t,auth:l})})}async function Ly(e){await B("/notifications/unsubscribe",{method:"DELETE",body:JSON.stringify({endpoint:e})})}async function Yy(e,t,l){return B("/tuning/feedback",{method:"POST",body:JSON.stringify({actionId:e,feedbackType:t,correction:l})})}async function qy(){return B("/promises/today")}async function Xy(){return B("/promises/weekly")}async function Qy(){return B("/promises/brief")}async function Zy(e){await B("/system/settings",{method:"PUT",body:JSON.stringify(e)})}async function Vy(){return B("/system/settings")}async function Ky(){return B("/containers/flag-counts")}async function Jy(e){return B(`/actions?${e}=true`)}async function Qm(e){return B("/actions/bulk/complete",{method:"POST",body:JSON.stringify({ids:e})})}async function Zm(e){return B("/actions/bulk/delete",{method:"POST",body:JSON.stringify({ids:e})})}async function Wy(e,t){return B("/actions/bulk/move",{method:"POST",body:JSON.stringify({ids:e,container:t})})}let Zi=null;function Be(){return Zi?Zi():Promise.resolve()}function $y({activeContainer:e,onContainerChange:t,onFlagFilter:l}){const[a,n]=S.useState({ACTIONABLE_NOW:0,CANDIDATES:0,AMBIGUITY:0,WAITING:0,TUNING:0}),[i,s]=S.useState({needsClarification:0,needsTuning:0}),u=S.useCallback(async()=>{try{const[h,v]=await Promise.all([Lm(),Ky()]);n(h),s(v)}catch(h){console.error("Failed to load counts:",h)}},[]);S.useEffect(()=>(Zi=u,u(),()=>{Zi=null}),[u]);function r(h){t(e===h?null:h)}function d(h,v){const m=e===h;return c.jsxs("button",{className:`grid-btn grid-btn--${v}${m?" selected":""}`,onClick:()=>r(h),children:[c.jsx("span",{className:"grid-btn-label",children:Tt[h]}),c.jsx("span",{className:"grid-btn-badge",children:a[h]})]},h)}return c.jsxs("div",{className:"container-grid",children:[d("ACTIONABLE_NOW","now"),c.jsxs("div",{className:"grid-row",children:[d("CANDIDATES","review"),d("WAITING","waiting")]}),(i.needsClarification>0||i.needsTuning>0)&&c.jsxs("div",{className:"flag-badges",children:[i.needsClarification>0&&c.jsxs("button",{className:"flag-badge flag-badge--clarify",onClick:()=>l==null?void 0:l("needsClarification"),title:"Actions needing clarification",children:[c.jsx("span",{className:"flag-badge-icon",children:"?"}),c.jsx("span",{className:"flag-badge-label",children:"Clarify"}),c.jsx("span",{className:"flag-badge-count",children:i.needsClarification})]}),i.needsTuning>0&&c.jsxs("button",{className:"flag-badge flag-badge--tuning",onClick:()=>l==null?void 0:l("needsTuning"),title:"Actions flagged for tuning",children:[c.jsx("span",{className:"flag-badge-icon",children:"⚙"}),c.jsx("span",{className:"flag-badge-label",children:"Tuning"}),c.jsx("span",{className:"flag-badge-count",children:i.needsTuning})]})]})]})}const Ro={SU:"Sunday",MO:"Monday",TU:"Tuesday",WE:"Wednesday",TH:"Thursday",FR:"Friday",SA:"Saturday"},Fy=["January","February","March","April","May","June","July","August","September","October","November","December"];function Iy(e){const t={};for(const a of e.split(";")){const[n,i]=a.split("=");n&&i&&(t[n.trim()]=i.trim())}const l=t.FREQ;return!l||!["DAILY","WEEKLY","MONTHLY","YEARLY"].includes(l)?null:{freq:l,interval:t.INTERVAL&&parseInt(t.INTERVAL)||1,byMonthDay:t.BYMONTHDAY?parseInt(t.BYMONTHDAY):void 0,byMonth:t.BYMONTH?parseInt(t.BYMONTH):void 0,byDay:t.BYDAY||void 0}}function es(e){const t=["th","st","nd","rd"],l=e%100;return e+(t[(l-20)%10]||t[l]||t[0])}function Vi(e){const t=Iy(e);if(!t)return e;switch(t.freq){case"DAILY":return t.interval===1?"Daily":`Every ${t.interval} days`;case"WEEKLY":return t.interval===1?t.byDay&&Ro[t.byDay]?`Weekly on ${Ro[t.byDay]}`:"Weekly":t.interval===2?"Biweekly":`Every ${t.interval} weeks`;case"MONTHLY":return t.interval===1?t.byMonthDay?`Monthly on the ${es(t.byMonthDay)}`:"Monthly":t.interval===3?t.byMonthDay?`Quarterly on the ${es(t.byMonthDay)}`:"Quarterly":t.interval===6?"Every 6 months":`Every ${t.interval} months`;case"YEARLY":if(t.byMonth){const l=Fy[t.byMonth-1];return t.byMonthDay?`Yearly on ${l} ${es(t.byMonthDay)}`:`Yearly in ${l}`}return t.interval===1?"Yearly":`Every ${t.interval} years`}}function Vm({onPostpone:e,onClose:t}){const[l,a]=S.useState(!1),[n,i]=S.useState("");function s(){const d=new Date;return d.setDate(d.getDate()+1),d.toISOString().split("T")[0]}function u(){const d=new Date,h=(8-d.getDay())%7||7;return d.setDate(d.getDate()+h),d.toISOString().split("T")[0]}function r(){const d=new Date;return d.setDate(d.getDate()+1),d.toISOString().split("T")[0]}return c.jsx("div",{className:"postpone-overlay",onClick:t,children:c.jsxs("div",{className:"postpone-popover",onClick:d=>d.stopPropagation(),children:[c.jsx("div",{className:"postpone-title",children:"Push forward to..."}),c.jsx("button",{className:"postpone-option",onClick:()=>e(s()),children:"Tomorrow"}),c.jsx("button",{className:"postpone-option",onClick:()=>e(u()),children:"Next week"}),l?c.jsxs("div",{className:"postpone-date-row",children:[c.jsx("input",{type:"date",className:"postpone-date-input",value:n,min:r(),onChange:d=>i(d.target.value),autoFocus:!0}),c.jsx("button",{className:"postpone-date-confirm",disabled:!n,onClick:()=>n&&e(n),children:"Go"})]}):c.jsx("button",{className:"postpone-option",onClick:()=>a(!0),children:"Pick a date..."})]})})}function Ka({action:e,onClick:t,onDelete:l,onComplete:a,onPostpone:n,selectable:i,selected:s,onSelect:u,personLabel:r}){var j;const d=e.urgency.toLowerCase(),h=S.useRef(null),[v,m]=S.useState(0),[p,b]=S.useState(!1),[N,_]=S.useState(!1),[o,f]=S.useState(!1);function g(){const D=window.getSelection();D&&D.toString().length>0||p||N||t()}function x(){return e.confidence>=.8?"high":e.confidence>=.5?"medium":"low"}function k(){if(!e.dueDate)return null;const D=new Date(e.dueDate),z=new Date,H=Math.ceil((D.getTime()-z.getTime())/(1e3*60*60*24));return H<0?`${Math.abs(H)}d overdue`:H===0?"Today":H===1?"Tomorrow":H<7?`${H}d`:D.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function M(){if(!e.dueDate)return null;const D=new Date(e.dueDate);return Math.ceil((D.getTime()-Date.now())/(1e3*60*60*24))}function y(){const D=M();return D===null?"":D<0?"card-overdue":D===0?"card-due-today":D<=2?"card-due-soon":""}function O(){const D=window.getSelection();return!!(D&&D.toString().length>0)}function w(D){h.current=D.touches[0].clientX}function R(D){if(h.current===null||O())return;const z=D.touches[0].clientX-h.current;z<-10?(b(!0),m(Math.min(0,z))):z>10&&a&&(b(!0),m(Math.max(0,z)))}function P(){if(O()){h.current=null;return}v<-120&&l?(m(-300),setTimeout(()=>l(e.id),200)):v>120&&a?(_(!0),m(0),setTimeout(()=>a(e.id),700)):m(0),h.current=null,setTimeout(()=>b(!1),50)}function ee(D){f(!1),n==null||n(e.id,D)}const Te=e.container==="CANDIDATES",ye=k(),ve=y(),E=(M()??1)<0;return c.jsxs("div",{className:`action-card ${N?"action-card-completing":""}`,onClick:g,children:[v>10&&c.jsx("div",{className:"action-card-complete-bg",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})})}),v<-10&&c.jsx("div",{className:"action-card-delete-bg",children:"Delete"}),N&&c.jsx("div",{className:"completion-overlay",children:c.jsx("svg",{className:"completion-check",width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"var(--success)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})})}),c.jsxs("div",{className:`action-card-inner ${ve}`,style:{transform:v!==0?`translateX(${v}px)`:void 0,transition:p?"none":"transform 0.2s ease"},onTouchStart:w,onTouchMove:R,onTouchEnd:P,children:[i&&c.jsx("div",{className:"action-checkbox-wrapper",onClick:D=>D.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"action-checkbox",checked:!!s,onChange:()=>u==null?void 0:u(e.id)})}),c.jsx("div",{className:`action-urgency-bar ${d}`}),c.jsxs("div",{className:"action-content",children:[e.needsFollowUp&&c.jsx("div",{className:"action-followup-nudge",children:"Still important? Tap to review."}),r&&c.jsx("div",{className:"action-person-label",children:r}),c.jsx("div",{className:"action-description",children:e.shortDescription||e.description}),((j=e.source)==null?void 0:j.type)==="GMAIL"&&(e.source.emailFrom||e.source.emailSubject)&&!r&&c.jsxs("div",{className:"action-source-line",children:["From: ",e.source.emailFrom||"Unknown"," · ",e.source.emailSubject||"No subject"]}),c.jsxs("div",{className:"action-meta",children:[Te&&c.jsx("span",{className:"badge badge-unconfirmed",children:"Unconfirmed"}),e.container==="WAITING"&&c.jsx("span",{className:"badge badge-waiting",children:"Waiting"}),e.needsClarification&&c.jsx("span",{className:"badge badge-clarify",children:e.missingInfo?`Unclear: ${JSON.parse(e.missingInfo).slice(0,2).join(", ")}`:"Clarify"}),e.needsTuning&&c.jsx("span",{className:"badge badge-tuning",children:"Tuning"}),e.recurrenceRule&&c.jsxs("span",{className:"badge badge-recurrence",children:["↻ ",Vi(e.recurrenceRule)]}),ye&&c.jsx("span",{className:`action-due ${E?"action-due-overdue":""}`,children:ye}),n&&c.jsx("button",{className:"postpone-clock-btn",onClick:D=>{D.stopPropagation(),f(!0)},title:"Push forward",children:c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("polyline",{points:"12 6 12 12 16 14"})]})}),c.jsxs("span",{className:"action-confidence",children:[c.jsx("span",{className:`confidence-dot ${x()}`}),Math.round(e.confidence*100),"%"]})]})]})]}),o&&c.jsx(Vm,{onPostpone:ee,onClose:()=>f(!1)})]})}function Km({onClose:e,onCreated:t}){const[l,a]=S.useState("input"),[n,i]=S.useState(""),[s,u]=S.useState(null),[r,d]=S.useState({}),[h,v]=S.useState(null);async function m(){if(!n.trim()){v("Please enter a description");return}a("parsing"),v(null);try{const o=await oy(n.trim());u(o),o.container==="AMBIGUITY"&&o.questions.length>0?a("clarify"):a("preview")}catch(o){v("Failed to parse action"),a("input"),console.error(o)}}async function p(){if(s){a("parsing"),v(null);try{const o=await dy(s.rawInput,r);u(o),o.container==="AMBIGUITY"&&o.questions.length>0?(d({}),a("clarify")):a("preview")}catch(o){v("Failed to clarify"),a("clarify"),console.error(o)}}}async function b(){if(s){a("parsing"),v(null);try{await fy(s),t()}catch(o){v("Failed to save action"),a("preview"),console.error(o)}}}function N(o,f){s&&u({...s,[o]:f})}function _(){return s?s.confidence>=.8?"var(--success)":s.confidence>=.5?"var(--warning)":"var(--urgency-critical)":"var(--text-secondary)"}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsxs("h2",{className:"modal-title",children:[l==="input"&&"New Action",l==="parsing"&&"Analyzing...",l==="preview"&&"Review Action",l==="clarify"&&"Need More Info"]}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),l==="input"&&c.jsxs("div",{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What needs to be done?"}),c.jsx("textarea",{className:"form-textarea",value:n,onChange:o=>i(o.target.value),placeholder:"e.g., Call John about the project proposal by Friday",autoFocus:!0,rows:3}),c.jsx("p",{className:"form-hint",children:"Include details like who, what, when - AI will extract the action"})]}),h&&c.jsx("div",{className:"form-error",children:h}),c.jsx("button",{type:"button",className:"btn btn-primary btn-block",onClick:m,children:"Parse with AI"})]}),l==="parsing"&&c.jsxs("div",{className:"parsing-state",children:[c.jsx("div",{className:"spinner"}),c.jsx("p",{children:"Analyzing your input..."})]}),l==="preview"&&s&&c.jsxs("div",{children:[c.jsxs("div",{className:"preview-section",children:[c.jsxs("div",{className:"preview-confidence",style:{color:_()},children:[Math.round(s.confidence*100),"% confident"]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:s.description,onChange:o=>N("description",o.target.value),rows:2})]}),s.suggestedAction&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Suggested Next Step"}),c.jsx("input",{type:"text",className:"form-input",value:s.suggestedAction,onChange:o=>N("suggestedAction",o.target.value)})]}),c.jsxs("div",{className:"preview-meta",children:[c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Container"}),c.jsx("select",{className:"form-select form-select-small",value:s.container,onChange:o=>N("container",o.target.value),children:["ACTIONABLE_NOW","CANDIDATES","WAITING","AMBIGUITY"].map(o=>c.jsx("option",{value:o,children:Tt[o]},o))})]}),c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Urgency"}),c.jsx("select",{className:"form-select form-select-small",value:s.urgency,onChange:o=>N("urgency",o.target.value),children:Object.entries(ga).map(([o,f])=>c.jsx("option",{value:o,children:f},o))})]}),s.dueDate&&c.jsxs("div",{className:"preview-meta-item",children:[c.jsx("span",{className:"preview-meta-label",children:"Due"}),c.jsx("input",{type:"date",className:"form-input form-input-small",value:s.dueDate,onChange:o=>N("dueDate",o.target.value)})]})]}),s.parties.length>0&&c.jsxs("div",{className:"preview-parties",children:[c.jsx("span",{className:"preview-meta-label",children:"People:"}),s.parties.map((o,f)=>c.jsx("span",{className:"party-chip",children:o.name},f))]}),s.recurrenceRule&&c.jsxs("div",{className:"preview-recurrence",children:[c.jsx("span",{className:"preview-meta-label",children:"Repeats"}),c.jsxs("span",{className:"preview-recurrence-value",children:["↻ ",Vi(s.recurrenceRule)]}),s.leadTimeDays!==void 0&&c.jsxs("span",{className:"preview-lead-time",children:["(surfaces ",s.leadTimeDays," days before due)"]})]}),s.reasoning&&c.jsxs("div",{className:"preview-reasoning",children:[c.jsx("span",{className:"preview-meta-label",children:"AI Reasoning"}),c.jsx("p",{children:s.reasoning})]})]}),h&&c.jsx("div",{className:"form-error",children:h}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>a("input"),children:"Edit Input"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:b,children:"Save Action"})]})]}),l==="clarify"&&s&&c.jsxs("div",{children:[c.jsx("p",{className:"clarify-intro",children:"Please answer these questions to clarify your action:"}),s.questions.map((o,f)=>c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:o}),c.jsx("input",{type:"text",className:"form-input",value:r[o]||"",onChange:g=>d({...r,[o]:g.target.value}),placeholder:"Your answer..."})]},f)),h&&c.jsx("div",{className:"form-error",children:h}),c.jsxs("div",{className:"preview-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>a("input"),children:"Start Over"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:p,disabled:Object.keys(r).length===0,children:"Submit Answers"})]})]}),c.jsx("style",{children:`
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
        `})]})})}const Py={CREATED:"Created",CONTAINER_CHANGE:"Moved",EDITED:"Edited",MERGED:"Merged",TRIGGER_FIRED:"Trigger fired",AI_REPARSED:"AI re-parsed",COMPLETED:"Completed",ARCHIVED:"Archived",FOLLOW_UP_SENT:"Follow-up sent"};function ev({events:e,aiReasoning:t}){function l(n){return new Date(n).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function a(n){const i=Py[n.type];if(n.type==="CONTAINER_CHANGE"&&n.fromContainer&&n.toContainer)return`${i} from ${n.fromContainer} to ${n.toContainer}`;if(n.details)try{const s=JSON.parse(n.details);if(s.source)return`${i} via ${s.source}`;if(s.fields)return`${i}: ${s.fields.join(", ")}`}catch{}return i}return c.jsxs("div",{className:"info-panel",children:[t&&c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"AI Reasoning"}),c.jsx("p",{className:"info-reasoning",children:t})]}),c.jsxs("div",{className:"info-section",children:[c.jsx("h4",{className:"info-section-title",children:"History"}),c.jsx("div",{className:"info-timeline",children:e.map(n=>c.jsxs("div",{className:"timeline-item",children:[c.jsx("span",{className:"timeline-time",children:l(n.createdAt)}),c.jsx("span",{className:"timeline-description",children:a(n)})]},n.id))})]}),c.jsx("style",{children:`
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
      `})]})}function vt({title:e,message:t,confirmLabel:l="Confirm",cancelLabel:a="Cancel",danger:n=!1,inputMode:i=!1,inputPlaceholder:s,inputLabel:u,onConfirm:r,onCancel:d}){const[h,v]=S.useState("");return c.jsxs("div",{className:"confirm-overlay",onClick:d,children:[c.jsxs("div",{className:"confirm-dialog",onClick:m=>m.stopPropagation(),children:[c.jsx("div",{className:"confirm-title",children:e}),c.jsx("div",{className:"confirm-message",children:t}),i&&c.jsxs("div",{className:"confirm-input-group",children:[u&&c.jsx("label",{className:"confirm-input-label",children:u}),c.jsx("input",{type:"text",className:"confirm-input",value:h,onChange:m=>v(m.target.value),placeholder:s,autoFocus:!0})]}),c.jsxs("div",{className:"confirm-actions",children:[c.jsx("button",{className:"confirm-btn confirm-btn-cancel",onClick:d,children:a}),c.jsx("button",{className:`confirm-btn ${n?"confirm-btn-danger":"confirm-btn-primary"}`,onClick:()=>r(i?h:void 0),disabled:i&&!h.trim(),children:l})]})]}),c.jsx("style",{children:`
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
      `})]})}function Uo({trigger:e,onUpdate:t}){const[l,a]=S.useState(!1),[n,i]=S.useState(null);function s(m){return m?new Date(m).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""}function u(m){if(!m)return"";const p=new Date(m),b=new Date,N=Math.ceil((p.getTime()-b.getTime())/(1e3*60*60*24));return N<0?`${Math.abs(N)}d ago`:N===0?"Today":N===1?"Tomorrow":N<7?`In ${N}d`:s(m)}function r(){switch(e.type){case"DATE_EXACT":return u(e.triggerDate);case"DATE_WINDOW":return`${s(e.dateWindowStart)} - ${s(e.dateWindowEnd)}`;case"EMAIL_REPLY":return e.emailPattern||"Waiting for reply";case"MANUAL_CHECK":return e.eventDescription||"Check condition";case"WEB_CONDITION":return e.webQuery||"Monitoring web for condition";default:return""}}async function d(){a(!0);try{await xy(e.id),t()}catch(m){console.error("Failed to fire trigger:",m)}finally{a(!1)}i(null)}async function h(m){a(!0);try{await Ny(e.id,m),t()}catch(p){console.error("Failed to check trigger:",p)}finally{a(!1)}}async function v(){a(!0);try{await by(e.id),t()}catch(m){console.error("Failed to delete trigger:",m)}finally{a(!1)}i(null)}return e.isTriggered?c.jsxs("div",{className:"trigger-card fired",children:[c.jsx("div",{className:"trigger-icon",children:"✓"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:Qi[e.type]}),c.jsxs("div",{className:"trigger-info",children:["Fired ",u(e.triggeredAt)]})]})]}):c.jsxs("div",{className:"trigger-card",children:[c.jsx("div",{className:"trigger-icon",children:"⏳"}),c.jsxs("div",{className:"trigger-content",children:[c.jsx("div",{className:"trigger-type",children:Qi[e.type]}),c.jsx("div",{className:"trigger-info",children:r()}),e.description&&c.jsx("div",{className:"trigger-description",children:e.description}),e.type==="WEB_CONDITION"&&e.webCheckResult&&c.jsxs("div",{className:"trigger-description",children:["Last check: ",e.webCheckResult]}),e.type==="WEB_CONDITION"&&e.lastChecked&&c.jsxs("div",{className:"trigger-description",style:{opacity:.6},children:["Checked ",u(e.lastChecked)," · ",e.checkCount," checks"]})]}),c.jsxs("div",{className:"trigger-actions",children:[e.type==="MANUAL_CHECK"?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"trigger-btn check",onClick:()=>h(!0),disabled:l,title:"Condition met",children:"✓"}),c.jsx("button",{className:"trigger-btn skip",onClick:()=>h(!1),disabled:l,title:"Not yet",children:"↻"})]}):c.jsx("button",{className:"trigger-btn fire",onClick:()=>i("fire"),disabled:l,title:"Fire now",children:"▶"}),c.jsx("button",{className:"trigger-btn delete",onClick:()=>i("delete"),disabled:l,title:"Delete",children:"✕"})]}),n==="fire"&&c.jsx(vt,{title:"Fire Trigger",message:"Fire this trigger now? The action will move to Actionable Now.",confirmLabel:"Fire",onConfirm:d,onCancel:()=>i(null)}),n==="delete"&&c.jsx(vt,{title:"Delete Trigger",message:"Delete this trigger?",confirmLabel:"Delete",danger:!0,onConfirm:v,onCancel:()=>i(null)}),c.jsx("style",{children:`
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
      `})]})}function tv({actionId:e,onClose:t,onCreated:l}){const[a,n]=S.useState("DATE_EXACT"),[i,s]=S.useState(""),[u,r]=S.useState(""),[d,h]=S.useState(""),[v,m]=S.useState(""),[p,b]=S.useState(""),[N,_]=S.useState(!1),[o,f]=S.useState(null);async function g(M){if(M.preventDefault(),f(null),a==="DATE_EXACT"&&!u){f("Please select a date");return}if(a==="DATE_WINDOW"&&(!d||!v)){f("Please select both start and end dates");return}if(a==="MANUAL_CHECK"&&!p){f("Please describe what to check for");return}_(!0);try{await Rn({actionId:e,type:a,description:i||void 0,triggerDate:a==="DATE_EXACT"?u:void 0,dateWindowStart:a==="DATE_WINDOW"?d:void 0,dateWindowEnd:a==="DATE_WINDOW"?v:void 0,eventDescription:a==="MANUAL_CHECK"?p:void 0}),l(),t()}catch(y){f("Failed to create trigger"),console.error(y)}finally{_(!1)}}const x=new Date;x.setDate(x.getDate()+1);const k=x.toISOString().split("T")[0];return c.jsx("div",{className:"trigger-modal-overlay",onClick:t,children:c.jsxs("div",{className:"trigger-modal",onClick:M=>M.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Add Trigger"}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]}),c.jsxs("form",{onSubmit:g,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Type"}),c.jsx("div",{className:"trigger-type-options",children:Object.keys(Qi).map(M=>c.jsx("button",{type:"button",className:`trigger-type-btn ${a===M?"active":""}`,onClick:()=>n(M),children:Qi[M]},M))})]}),a==="DATE_EXACT"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Trigger Date"}),c.jsx("input",{type:"date",className:"form-input",value:u,onChange:M=>r(M.target.value),min:k}),c.jsx("p",{className:"form-hint",children:"Action will move to Actionable Now on this date"})]}),a==="DATE_WINDOW"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Start Date"}),c.jsx("input",{type:"date",className:"form-input",value:d,onChange:M=>h(M.target.value),min:k})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"End Date"}),c.jsx("input",{type:"date",className:"form-input",value:v,onChange:M=>m(M.target.value),min:d||k})]}),c.jsx("p",{className:"form-hint",children:"Action will become active when start date is reached"})]}),a==="EMAIL_REPLY"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:M=>s(M.target.value),placeholder:"e.g., Waiting for reply from John"}),c.jsx("p",{className:"form-hint",children:"You'll be prompted to manually check for the reply"})]}),a==="MANUAL_CHECK"&&c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"What to check for"}),c.jsx("textarea",{className:"form-textarea",value:p,onChange:M=>b(M.target.value),placeholder:"e.g., 30% trade-in promotion period starts",rows:2}),c.jsx("p",{className:"form-hint",children:"You'll be prompted periodically to check if this condition is met"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Note (optional)"}),c.jsx("input",{type:"text",className:"form-input",value:i,onChange:M=>s(M.target.value),placeholder:"Add a note about this trigger..."})]}),o&&c.jsx("div",{className:"form-error",children:o}),c.jsxs("div",{className:"trigger-modal-buttons",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:N,children:N?"Adding...":"Add Trigger"})]})]}),c.jsx("style",{children:`
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
        `})]})})}function er({actionId:e,onClose:t,onUpdate:l}){var lr,ar;const[a,n]=S.useState(null),[i,s]=S.useState([]),[u,r]=S.useState(!0),[d,h]=S.useState(!1),[v,m]=S.useState(!1),[p,b]=S.useState(!1),[N,_]=S.useState(!1),[o,f]=S.useState(!1),[g,x]=S.useState(null),[k,M]=S.useState(!1),[y,O]=S.useState(""),[w,R]=S.useState(null),[P,ee]=S.useState(""),[Te,ye]=S.useState("MEDIUM"),[ve,E]=S.useState(""),[j,D]=S.useState(!1),[z,H]=S.useState(!1),[ne,ze]=S.useState(!1),[qe,we]=S.useState(null),[de,xt]=S.useState(""),[U,J]=S.useState(null),[He,Oe]=S.useState(""),[C,G]=S.useState(!1);S.useEffect(()=>{X()},[e]),S.useEffect(()=>{if(!(o||ne||N||C))return;function fe(){f(!1),ze(!1),_(!1),G(!1),J(null)}const pc=setTimeout(()=>document.addEventListener("click",fe),0);return()=>{clearTimeout(pc),document.removeEventListener("click",fe)}},[o,ne,N,C]);async function X(){try{const[A,fe]=await Promise.all([iy(e),vy({actionId:e})]);n(A),s(fe),ee(A.description),ye(A.urgency),E(A.dueDate?A.dueDate.split("T")[0]:"")}catch(A){console.error("Failed to load action:",A)}finally{r(!1)}}async function Jt(){if(a){D(!0);try{await _t(a.id,{description:P,urgency:Te,dueDate:ve||null,version:a.version}),h(!1),X(),l()}catch(A){console.error("Failed to save:",A)}finally{D(!1)}}}function Un(){a&&(ee(a.description),ye(a.urgency),E(a.dueDate?a.dueDate.split("T")[0]:""),h(!1))}async function Wt(){if(a){H(!0);try{await my(a.id),h(!1),X(),l()}catch(A){console.error("Failed to reparse:",A)}finally{H(!1)}}}async function Jm(){if(a)try{const A=await Pu(a.id);if(A.nextAction){const fe=A.nextAction.dueDate?new Date(A.nextAction.dueDate).toLocaleDateString():"scheduled";x(`Marked complete. Next occurrence scheduled for ${fe}.`),setTimeout(()=>{l(),t()},3e3)}else l(),t()}catch(A){console.error("Failed to complete:",A)}}async function Wm(){if(!a)return;const A=parseInt(y);if(!(isNaN(A)||A<0||A>90))try{await _t(a.id,{leadTimeDays:A,version:a.version}),M(!1),X(),l()}catch(fe){console.error("Failed to update lead time:",fe)}}async function $m(){if(a)try{await ko(a.id,"ACTIONABLE_NOW"),X(),l()}catch(A){console.error("Failed to confirm:",A)}}function mc(){X(),l()}async function gc(A,fe){if(a)try{await Yy(a.id,A,fe),_(!1),X(),l()}catch(pc){console.error("Failed to submit feedback:",pc)}}function Fm(){we("defer"),xt(""),f(!1)}async function Im(){if(!(!a||!de))try{await Rn({actionId:a.id,type:"DATE_EXACT",description:`Deferred until ${de}`,triggerDate:de}),we(null),xt(""),X(),l()}catch(A){console.error("Failed to defer action:",A)}}function Pm(){ze(!0),f(!1)}async function eg(A){if(a)try{await ko(a.id,A),ze(!1),X(),l()}catch(fe){console.error("Failed to reclassify action:",fe)}}function tg(){f(!1),R({type:"delete"})}async function lg(){if(a){try{await cy(a.id),l(),t()}catch(A){console.error("Failed to delete action:",A)}R(null)}}function ag(){f(!1),R({type:"merge-id"})}async function ng(A){if(a){try{await Oy(A,a.id),l(),t()}catch(fe){console.error("Failed to merge actions:",fe)}R(null)}}async function ig(){if(a){try{await dc(a.id),l(),t()}catch(A){console.error("Failed to archive action:",A)}R(null)}}function _a(A){if(w)if(w.type==="delete")lg();else if(w.type==="archive")ig();else if(w.type==="merge-id"){const fe=parseInt(A||"");if(isNaN(fe))return;R({type:"merge-confirm",primaryId:fe})}else w.type==="merge-confirm"?ng(w.primaryId):w.type==="text-correction"&&(A!=null&&A.trim()&&gc("parsed_wrong",A.trim()),R(null))}const tr=["ACTIONABLE_NOW","CANDIDATES","AMBIGUITY","WAITING"],cg=["CRITICAL","HIGH","MEDIUM","LOW"];if(u)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsx("div",{className:"modal-content",onClick:A=>A.stopPropagation(),children:c.jsx("p",{children:"Loading..."})})});if(!a)return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content",onClick:A=>A.stopPropagation(),children:[c.jsx("p",{children:"Action not found"}),c.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Close"})]})});const jl=i.filter(A=>!A.isTriggered),hc=i.filter(A=>A.isTriggered);return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal-content action-view",onClick:A=>A.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:d?"Edit Action":"Action Details"}),c.jsxs("div",{className:"action-view-actions",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>m(!v),title:"View history",children:"i"}),c.jsxs("div",{className:"menu-wrapper",children:[c.jsx("button",{className:"action-info-btn",onClick:()=>f(!o),title:"More options",children:"⋯"}),o&&c.jsxs("div",{className:"action-menu",onClick:A=>A.stopPropagation(),children:[c.jsx("button",{className:"action-menu-item",onClick:Fm,children:"Defer"}),c.jsx("button",{className:"action-menu-item",onClick:Pm,children:"Reclassify"}),c.jsx("button",{className:"action-menu-item",onClick:ag,children:"Merge"}),c.jsx("button",{className:"action-menu-item",onClick:()=>{b(!0),f(!1)},children:"Add to Waiting"}),c.jsx("button",{className:"action-menu-item action-menu-item--danger",onClick:tg,children:"Delete"})]})]}),c.jsx("button",{className:"modal-close",onClick:t,children:"×"})]})]}),d?c.jsxs("div",{className:"action-edit-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description"}),c.jsx("textarea",{className:"form-textarea",value:P,onChange:A=>ee(A.target.value)})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Urgency"}),c.jsx("select",{className:"form-select",value:Te,onChange:A=>ye(A.target.value),children:Object.entries(ga).map(([A,fe])=>c.jsx("option",{value:A,children:fe},A))})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Due Date"}),c.jsx("input",{type:"date",className:"form-input",value:ve,onChange:A=>E(A.target.value)})]}),c.jsxs("div",{className:"action-edit-buttons",children:[c.jsx("button",{className:"btn btn-secondary",onClick:Un,children:"Cancel"}),c.jsx("button",{className:"btn btn-secondary",onClick:Wt,disabled:z||j,children:z?"Parsing...":"Re-parse"}),c.jsx("button",{className:"btn btn-primary",onClick:Jt,disabled:j||z,children:j?"Saving...":"Save"})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"action-detail-content",children:[c.jsx("div",{className:"action-detail-description",children:a.description}),a.needsClarification&&c.jsxs("div",{className:"clarification-banner",children:[c.jsx("div",{className:"clarification-title",children:"I categorized this the best I could, but I'm not confident about:"}),a.missingInfo?c.jsx("ul",{className:"clarification-list",children:JSON.parse(a.missingInfo).map((A,fe)=>c.jsx("li",{className:"clarification-item",children:A},fe))}):a.aiReasoning?c.jsx("div",{className:"clarification-detail",children:a.aiReasoning}):c.jsx("div",{className:"clarification-detail",children:"Review this action and edit any fields that seem off."})]}),a.container==="WAITING"&&(a.recurrenceRule||jl.length>0)&&c.jsx("div",{className:"waiting-summary",children:[a.recurrenceRule&&`↻ ${Vi(a.recurrenceRule)}`,jl.length>0&&jl[0].triggerDate&&`Waiting until ${new Date(jl[0].triggerDate).toLocaleDateString()}`,a.dueDate&&`Due ${new Date(a.dueDate).toLocaleDateString()}`].filter(Boolean).join("  ·  ")}),c.jsx("div",{className:"action-detail-source",children:((lr=a.source)==null?void 0:lr.type)==="GMAIL"?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"From"}),c.jsx("span",{className:"detail-value",children:a.source.emailFrom||"Unknown"})]}),c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Subject"}),c.jsx("span",{className:"detail-value",children:a.source.emailSubject||"No subject"})]}),a.source.emailDate&&c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Date"}),c.jsx("span",{className:"detail-value",children:new Date(a.source.emailDate).toLocaleDateString()})]}),a.source.emailId&&c.jsx("div",{className:"source-row",children:c.jsx("a",{href:`https://mail.google.com/mail/u/0/#inbox/${a.source.emailId}`,target:"_blank",rel:"noopener noreferrer",className:"source-gmail-link",children:"View in Gmail"})})]}):((ar=a.source)==null?void 0:ar.type)==="SIRI"?c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Via Siri"})]}):c.jsxs("div",{className:"source-row",children:[c.jsx("span",{className:"detail-label",children:"Source"}),c.jsx("span",{className:"detail-value",children:"Manually entered"})]})}),a.suggestedAction&&c.jsxs("div",{className:"action-detail-suggested",children:[c.jsx("span",{className:"detail-label",children:"Next step:"}),a.suggestedAction]}),c.jsxs("div",{className:"action-detail-meta",children:[c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Container"}),c.jsx("span",{className:"detail-value",children:Tt[a.container]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Urgency"}),c.jsx("span",{className:`detail-value urgency-${a.urgency.toLowerCase()}`,children:ga[a.urgency]})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Confidence"}),c.jsxs("span",{className:"detail-value",children:[Math.round(a.confidence*100),"%"]})]}),a.dueDate&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Due"}),c.jsx("span",{className:"detail-value",children:new Date(a.dueDate).toLocaleDateString()})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Repeats"}),c.jsx("span",{className:"detail-value detail-value-editable",onClick:()=>G(!C),children:a.recurrenceRule?`↻ ${Vi(a.recurrenceRule)}`:"None"})]}),C&&c.jsx("div",{className:"recurrence-picker-inline",onClick:A=>A.stopPropagation(),children:c.jsx("div",{className:"picker-grid picker-grid--3col",children:[{label:"Weekly",rule:"FREQ=WEEKLY;INTERVAL=1",lead:1},{label:"Biweekly",rule:"FREQ=WEEKLY;INTERVAL=2",lead:1},{label:"Monthly",rule:"FREQ=MONTHLY;INTERVAL=1",lead:3},{label:"Quarterly",rule:"FREQ=MONTHLY;INTERVAL=3",lead:7},{label:"Yearly",rule:"FREQ=YEARLY;INTERVAL=1",lead:21},{label:"None",rule:null,lead:21}].map(A=>c.jsx("button",{className:`picker-grid-btn${a.recurrenceRule===A.rule?" picker-grid-btn--current":""}`,disabled:a.recurrenceRule===A.rule||!a.recurrenceRule&&A.rule===null,onClick:async()=>{try{await _t(a.id,{recurrenceRule:A.rule,version:a.version}),G(!1),X(),l()}catch(fe){console.error("Failed to update recurrence:",fe)}},children:A.label},A.label))})}),a.recurrenceRule&&c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Lead time"}),k?c.jsxs("span",{className:"detail-value lead-time-edit",children:[c.jsx("input",{type:"number",min:"0",max:"90",className:"lead-time-input",value:y,onChange:A=>O(A.target.value),autoFocus:!0}),c.jsx("span",{className:"lead-time-unit",children:"days"}),c.jsx("button",{className:"lead-time-save",onClick:Wm,children:"Save"}),c.jsx("button",{className:"lead-time-cancel",onClick:()=>M(!1),children:"Cancel"})]}):c.jsxs("span",{className:"detail-value detail-value-editable",onClick:()=>{O(String(a.leadTimeDays)),M(!0)},children:[a.leadTimeDays," days"]})]})]}),(a.container==="WAITING"||i.length>0)&&c.jsxs("div",{className:"triggers-section",children:[c.jsxs("div",{className:"triggers-header",children:[c.jsx("h3",{children:"Triggers"}),c.jsx("button",{className:"add-trigger-btn",onClick:()=>b(!0),children:"+ Add"})]}),jl.length===0&&hc.length===0?c.jsx("p",{className:"no-triggers",children:"No triggers set. Add one to defer this action."}):c.jsxs(c.Fragment,{children:[jl.map(A=>c.jsx(Uo,{trigger:A,onUpdate:mc},A.id)),hc.length>0&&jl.length>0&&c.jsx("div",{className:"triggers-divider"}),hc.map(A=>c.jsx(Uo,{trigger:A,onUpdate:mc},A.id))]})]})]}),v&&a.events&&c.jsx(ev,{events:a.events,aiReasoning:a.aiReasoning}),a.needsFollowUp&&c.jsxs("div",{className:"followup-nudge-section",children:[c.jsx("div",{className:"followup-nudge-title",children:"Still important?"}),c.jsx("div",{className:"followup-nudge-subtitle",children:"This action hasn't been touched in a while."}),c.jsxs("div",{className:"followup-nudge-buttons",children:[c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:async()=>{await qm(a.id),X(),l()},children:"Still relevant"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn",onClick:()=>{we("reschedule"),xt("")},children:"Reschedule"}),c.jsx("button",{className:"btn btn-secondary followup-nudge-btn followup-archive-btn",onClick:()=>R({type:"archive"}),children:"Archive"})]})]}),qe&&c.jsxs("div",{className:"date-picker-inline",children:[c.jsx("span",{className:"date-picker-label",children:qe==="defer"?"Defer until:":"Reschedule to:"}),c.jsx("input",{type:"date",className:"form-input",value:de,onChange:A=>xt(A.target.value),style:{padding:"8px 10px",fontSize:"13px",flex:1,minWidth:0}}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!de,onClick:async()=>{if(qe==="defer")await Im();else if(qe==="reschedule"&&a)try{await _t(a.id,{dueDate:de,version:a.version}),we(null),xt(""),X(),l()}catch(A){console.error("Failed to reschedule:",A)}},children:"Confirm"}),c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{we(null),xt("")},children:"Cancel"})]}),c.jsxs("div",{className:"action-view-buttons",children:[c.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Close"}),a.needsTuning&&c.jsx("button",{className:"btn btn-primary",onClick:async()=>{await _t(a.id,{needsTuning:!1,version:a.version}),l==null||l()},children:"Looks Good"}),a.needsClarification&&c.jsx("button",{className:"btn btn-primary",onClick:async()=>{await _t(a.id,{needsClarification:!1,version:a.version}),l==null||l()},children:"Resolved"}),a.container==="CANDIDATES"&&c.jsx("button",{className:"btn btn-primary",onClick:$m,children:"Move to Now"}),(a.container==="CANDIDATES"||a.needsClarification||a.needsTuning)&&c.jsx("button",{className:"btn btn-danger",onClick:async()=>{confirm("Delete this item and teach the system to avoid similar ones?")&&(await sy(a.id),l==null||l())},children:"Not an Action"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>h(!0),children:"Edit"}),c.jsxs("button",{className:"btn btn-success",onClick:Jm,children:["Complete",a.recurrenceRule?" & Next":""]})]}),g&&c.jsx("div",{className:"next-created-banner",children:g}),c.jsx("button",{className:"feedback-btn",onClick:()=>_(!N),children:"AI parsed incorrectly?"}),N&&c.jsxs("div",{className:"feedback-panel",onClick:A=>A.stopPropagation(),children:[c.jsx("p",{className:"feedback-title",children:"What was wrong?"}),c.jsxs("div",{className:"feedback-options",children:[U==="urgency"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct urgency:"}),c.jsx("div",{className:"picker-grid",children:cg.map(A=>c.jsx("button",{className:`picker-grid-btn${He===A?" picker-grid-btn--selected":""}${a.urgency===A?" picker-grid-btn--current":""}`,onClick:()=>Oe(A),disabled:a.urgency===A,children:ga[A]},A))}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{J(null),Oe("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!He,onClick:()=>{gc("urgency_incorrect",He),J(null),Oe("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{J("urgency"),Oe("")},children:"Wrong urgency level"}),U==="container"?c.jsxs("div",{className:"feedback-picker-inline",children:[c.jsx("label",{className:"feedback-picker-label",children:"Correct container:"}),c.jsx("div",{className:"picker-grid",children:tr.map(A=>c.jsx("button",{className:`picker-grid-btn${He===A?" picker-grid-btn--selected":""}${a.container===A?" picker-grid-btn--current":""}`,onClick:()=>Oe(A),disabled:a.container===A,children:Tt[A]},A))}),c.jsxs("div",{className:"feedback-picker-actions",children:[c.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{J(null),Oe("")},children:"Cancel"}),c.jsx("button",{className:"btn btn-primary btn-sm",disabled:!He,onClick:()=>{gc("container_incorrect",He),J(null),Oe("")},children:"Submit"})]})]}):c.jsx("button",{className:"feedback-option",onClick:()=>{J("container"),Oe("")},children:"Wrong container"}),c.jsx("button",{className:"feedback-option",onClick:()=>R({type:"text-correction"}),children:"Parsed text is wrong"})]})]}),ne&&c.jsxs("div",{className:"reclassify-panel",onClick:A=>A.stopPropagation(),children:[c.jsx("p",{className:"feedback-title",children:"Move to container:"}),c.jsx("div",{className:"picker-grid",children:tr.map(A=>c.jsx("button",{className:`picker-grid-btn${a.container===A?" picker-grid-btn--current":""}`,disabled:a.container===A,onClick:()=>eg(A),children:Tt[A]},A))}),c.jsx("button",{className:"btn btn-secondary btn-block",style:{marginTop:8},onClick:()=>ze(!1),children:"Cancel"})]})]}),p&&c.jsx(tv,{actionId:e,onClose:()=>b(!1),onCreated:mc}),w&&w.type==="delete"&&c.jsx(vt,{title:"Delete Action",message:`Permanently delete "${a.description.substring(0,60)}"? This cannot be undone.`,confirmLabel:"Delete",danger:!0,onConfirm:()=>_a(),onCancel:()=>R(null)}),w&&w.type==="archive"&&c.jsx(vt,{title:"Archive Action",message:"Archive this action? You can find it later in search.",confirmLabel:"Archive",onConfirm:()=>_a(),onCancel:()=>R(null)}),w&&w.type==="merge-id"&&c.jsx(vt,{title:"Merge Action",message:"Enter the ID of the action to merge this into.",confirmLabel:"Next",inputMode:!0,inputPlaceholder:"Action ID",inputLabel:"Target action ID:",onConfirm:A=>_a(A),onCancel:()=>R(null)}),w&&w.type==="merge-confirm"&&c.jsx(vt,{title:"Confirm Merge",message:`Merge this action into action #${w.primaryId}? This cannot be undone.`,confirmLabel:"Merge",danger:!0,onConfirm:()=>_a(),onCancel:()=>R(null)}),w&&w.type==="text-correction"&&c.jsx(vt,{title:"Correct Description",message:"What should the parsed text say?",confirmLabel:"Submit",inputMode:!0,inputPlaceholder:"Corrected description...",inputLabel:"Correct text:",onConfirm:A=>_a(A),onCancel:()=>R(null)}),c.jsx("style",{children:`
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
        `})]})})}const ts={needsClarification:"Needs Clarification",needsTuning:"Needs Tuning"},lv=["ACTIONABLE_NOW","CANDIDATES","WAITING"];function av({activeContainer:e,flagFilter:t,onDataChange:l,onOpenGroups:a}){const[n,i]=S.useState([]),[s,u]=S.useState(!0),[r,d]=S.useState(!1),[h,v]=S.useState(null),[m,p]=S.useState(!1),[b,N]=S.useState(new Set),[_,o]=S.useState(!1),[f,g]=S.useState(!1);S.useEffect(()=>{x()},[e,t]);async function x(){u(!0);try{let z;t?z=await Jy(t):z=await Ym(e),i(z),l==null||l()}catch(z){console.error("Failed to load actions:",z)}finally{u(!1)}}function k(){return t?ts[t]||t:e?Tt[e]:"All Actions"}function M(){d(!1),x(),Be()}function y(){m?(p(!1),N(new Set),o(!1)):p(!0)}function O(z){N(H=>{const ne=new Set(H);return ne.has(z)?ne.delete(z):ne.add(z),ne})}function w(){b.size===n.length?N(new Set):N(new Set(n.map(z=>z.id)))}async function R(){if(b.size!==0){g(!0);try{await Qm(Array.from(b)),E()}catch(z){console.error("Bulk complete failed:",z)}finally{g(!1)}}}async function P(){if(b.size!==0){g(!0);try{await Zm(Array.from(b)),E()}catch(z){console.error("Bulk delete failed:",z)}finally{g(!1)}}}async function ee(z){if(b.size!==0){g(!0),o(!1);try{await Wy(Array.from(b),z),E()}catch(H){console.error("Bulk move failed:",H)}finally{g(!1)}}}async function Te(z){i(H=>H.filter(ne=>ne.id!==z));try{await dc(z),Be()}catch(H){console.error("Swipe delete failed:",H),x()}}async function ye(z){i(H=>H.filter(ne=>ne.id!==z));try{await Pu(z),Be()}catch(H){console.error("Swipe complete failed:",H),x()}}async function ve(z,H){try{const ne=n.find(ze=>ze.id===z);if(!ne)return;i(ze=>ze.filter(qe=>qe.id!==z)),await _t(z,{dueDate:H,version:ne.version}),await Rn({actionId:z,type:"DATE_EXACT",triggerDate:H}),Be()}catch(ne){console.error("Postpone failed:",ne),x()}}function E(){p(!1),N(new Set),o(!1),x(),Be()}if(s)return c.jsx("div",{className:"feed",children:c.jsx("div",{className:"feed-empty",children:"Loading..."})});const j=b.size,D=n.length>0&&b.size===n.length;return c.jsxs("div",{className:"feed",children:[c.jsxs("div",{className:"feed-header",children:[c.jsx("h1",{className:"feed-title",children:k()}),n.length>0&&c.jsx("button",{className:"feed-select-toggle",onClick:y,children:m?"Cancel":"Select"})]}),m&&n.length>0&&c.jsx("div",{className:"feed-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:D,onChange:w}),"Select All (",n.length,")"]})}),n.length===0?c.jsx("div",{className:"feed-empty",children:t?`No items ${ts[t]?"flagged as "+ts[t].toLowerCase():""}`:e?`No items in ${Tt[e]}`:"No actions yet. Tap + to add one."}):n.map(z=>c.jsx(Ka,{action:z,onDelete:Te,onComplete:ye,onPostpone:ve,selectable:m,selected:b.has(z.id),onSelect:O,onClick:()=>{m?O(z.id):v(z.id)}},z.id)),m&&j>0&&c.jsxs("div",{className:"bulk-toolbar",children:[c.jsxs("button",{className:"bulk-btn bulk-complete",onClick:R,disabled:f,children:["Complete (",j,")"]}),c.jsxs("button",{className:"bulk-btn bulk-delete",onClick:P,disabled:f,children:["Delete (",j,")"]}),c.jsxs("div",{className:"bulk-move-wrapper",children:[c.jsxs("button",{className:"bulk-btn bulk-move",onClick:()=>o(!_),disabled:f,children:["Move (",j,")"]}),_&&c.jsx("div",{className:"bulk-move-dropdown",children:lv.map(z=>c.jsx("button",{className:"bulk-move-option",onClick:()=>ee(z),children:Tt[z]},z))})]})]}),c.jsx("button",{className:"quick-capture",onClick:()=>d(!0),children:"+"}),r&&c.jsx(Km,{onClose:()=>d(!1),onCreated:M}),h&&c.jsx(er,{actionId:h,onClose:()=>v(null),onUpdate:()=>{x(),Be(),v(null)}})]})}function nv({onShowFeed:e,onShowWeeklyReview:t,showWeeklyBanner:l}){const[a,n]=S.useState(null),[i,s]=S.useState(null),[u,r]=S.useState(!0),[d,h]=S.useState(null),[v,m]=S.useState(!1),[p,b]=S.useState(!1),[N,_]=S.useState(new Set),[o,f]=S.useState(!1);S.useEffect(()=>{g()},[]);async function g(){r(!0);try{const[j,D]=await Promise.all([qy(),Qy()]);n(j),s(D)}catch(j){console.error("Failed to load promises:",j)}finally{r(!1)}}function x(j){var D;if(j.parties&&j.parties.length>0)return`To ${j.parties.map(H=>H.name).slice(0,2).join(" & ")}`;if(((D=j.source)==null?void 0:D.type)==="GMAIL"&&j.source.emailFrom){const z=j.source.emailFrom;return`From ${z.split("<")[0].trim()||z.split("@")[0]}`}}function k(j){n(D=>D?{dueToday:D.dueToday.filter(z=>z.id!==j),becameReady:D.becameReady.filter(z=>z.id!==j),atRisk:D.atRisk.filter(z=>z.id!==j),comingUp:D.comingUp.filter(z=>z.id!==j)}:null)}async function M(j){k(j);try{await Pu(j),Be()}catch(D){console.error("Complete failed:",D),g()}}async function y(j){k(j);try{await dc(j),Be()}catch(D){console.error("Delete failed:",D),g()}}async function O(j,D){try{const z=(a==null?void 0:a.dueToday.find(H=>H.id===j))||(a==null?void 0:a.becameReady.find(H=>H.id===j))||(a==null?void 0:a.atRisk.find(H=>H.id===j))||(a==null?void 0:a.comingUp.find(H=>H.id===j));if(!z)return;k(j),await _t(j,{dueDate:D,version:z.version}),await Rn({actionId:j,type:"DATE_EXACT",triggerDate:D,description:`Postponed to ${new Date(D).toLocaleDateString()}`}),Be()}catch(z){console.error("Postpone failed:",z),g()}}function w(){return a?[...a.dueToday,...a.becameReady,...a.atRisk,...a.comingUp]:[]}function R(j){_(D=>{const z=new Set(D);return z.has(j)?z.delete(j):z.add(j),z})}function P(){const j=w();N.size===j.length?_(new Set):_(new Set(j.map(D=>D.id)))}function ee(){b(!1),_(new Set)}async function Te(){if(N.size===0)return;f(!0);const j=Array.from(N);for(const D of j)k(D);ee();try{await Zm(j),Be()}catch(D){console.error("Bulk delete failed:",D),g()}finally{f(!1)}}async function ye(){if(N.size===0)return;f(!0);const j=Array.from(N);for(const D of j)k(D);ee();try{await Qm(j),Be()}catch(D){console.error("Bulk complete failed:",D),g()}finally{f(!1)}}function ve(){m(!1),g(),Be()}if(u)return c.jsx("div",{className:"promises-view",children:c.jsx("div",{className:"promises-loading",children:"Loading your day..."})});const E=a&&a.dueToday.length===0&&a.becameReady.length===0&&a.atRisk.length===0&&a.comingUp.length===0;return c.jsxs("div",{className:"promises-view",children:[i&&i.summary&&c.jsxs("div",{className:"promises-brief",children:[c.jsx("div",{className:"brief-text",children:i.summary}),i.weekAhead>0&&c.jsxs("div",{className:"brief-week",children:[i.weekAhead," more coming this week"]})]}),l&&c.jsxs("button",{className:"weekly-review-banner",onClick:t,children:[c.jsx("span",{children:"Time for your weekly check-in"}),c.jsx("span",{className:"weekly-review-arrow",children:"›"})]}),!E&&c.jsx("div",{className:"promises-select-header",children:c.jsx("button",{className:"feed-select-toggle",onClick:()=>p?ee():b(!0),children:p?"Cancel":"Select"})}),p&&w().length>0&&c.jsx("div",{className:"feed-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:N.size===w().length,onChange:P}),"Select All (",w().length,")"]})}),E?c.jsxs("div",{className:"promises-empty",children:[c.jsxs("svg",{className:"promises-empty-icon",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"var(--success)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),c.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),c.jsx("div",{className:"promises-empty-title",children:"All clear"}),c.jsx("div",{className:"promises-empty-subtitle",children:"Nothing needs attention today."})]}):c.jsxs(c.Fragment,{children:[a&&a.dueToday.length>0&&c.jsx(Pn,{title:"Due Today",count:a.dueToday.length,accent:"var(--urgency-high)",children:a.dueToday.map(j=>c.jsx(Ka,{action:j,personLabel:x(j),onClick:()=>p?R(j.id):h(j.id),onDelete:y,onComplete:M,onPostpone:O,selectable:p,selected:N.has(j.id),onSelect:R},j.id))}),a&&a.becameReady.length>0&&c.jsx(Pn,{title:"Became Ready",count:a.becameReady.length,accent:"var(--success)",children:a.becameReady.map(j=>c.jsx(Ka,{action:j,personLabel:x(j),onClick:()=>p?R(j.id):h(j.id),onDelete:y,onComplete:M,onPostpone:O,selectable:p,selected:N.has(j.id),onSelect:R},j.id))}),a&&a.atRisk.length>0&&c.jsx(Pn,{title:"At Risk",count:a.atRisk.length,accent:"var(--urgency-critical)",children:a.atRisk.map(j=>c.jsx(Ka,{action:j,personLabel:x(j),onClick:()=>p?R(j.id):h(j.id),onDelete:y,onComplete:M,onPostpone:O,selectable:p,selected:N.has(j.id),onSelect:R},j.id))}),a&&a.comingUp.length>0&&c.jsx(Pn,{title:"Coming Up",count:a.comingUp.length,accent:"var(--color-waiting)",children:a.comingUp.map(j=>c.jsx(Ka,{action:j,personLabel:x(j),onClick:()=>p?R(j.id):h(j.id),onDelete:y,onComplete:M,onPostpone:O,selectable:p,selected:N.has(j.id),onSelect:R},j.id))})]}),c.jsx("button",{className:"promises-show-all",onClick:e,children:"View all actions"}),p&&N.size>0&&c.jsxs("div",{className:"bulk-toolbar",children:[c.jsxs("button",{className:"bulk-btn bulk-complete",onClick:ye,disabled:o,children:["Complete (",N.size,")"]}),c.jsxs("button",{className:"bulk-btn bulk-delete",onClick:Te,disabled:o,children:["Delete (",N.size,")"]})]}),c.jsx("button",{className:"quick-capture",onClick:()=>m(!0),children:"+"}),v&&c.jsx(Km,{onClose:()=>m(!1),onCreated:ve}),d&&c.jsx(er,{actionId:d,onClose:()=>h(null),onUpdate:()=>{g(),Be(),h(null)}})]})}function Pn({title:e,count:t,accent:l,children:a}){return c.jsxs("div",{className:"promises-section",children:[c.jsxs("div",{className:"promises-section-header",children:[c.jsx("span",{className:"promises-section-title",children:e}),c.jsx("span",{className:"promises-section-count",style:{color:l},children:t})]}),c.jsx("div",{className:"promises-section-cards",children:a})]})}function iv({onClose:e}){const[t,l]=S.useState(null),[a,n]=S.useState(!0),[i,s]=S.useState(null);S.useEffect(()=>{u()},[]);async function u(){n(!0);try{const b=await Xy();l(b)}catch(b){console.error("Failed to load weekly review:",b)}finally{n(!1)}}function r(b){var N;if(b.parties&&b.parties.length>0)return b.parties.map(_=>_.name).slice(0,2).join(" & ");if(((N=b.source)==null?void 0:N.type)==="GMAIL"&&b.source.emailFrom)return b.source.emailFrom.split("@")[0].replace(/[._]/g," ")}async function d(b){try{await qm(b),u()}catch(N){console.error("Recommit failed:",N)}}async function h(b){try{await dc(b),u(),Be()}catch(N){console.error("Archive failed:",N)}}async function v(b,N){try{const _=t==null?void 0:t.atRisk.find(o=>o.id===b);if(!_)return;await _t(b,{dueDate:N,version:_.version}),await Rn({actionId:b,type:"DATE_EXACT",triggerDate:N,description:`Postponed to ${new Date(N).toLocaleDateString()}`}),s(null),u(),Be()}catch(_){console.error("Postpone failed:",_)}}function m(b){if(!b)return"";const N=new Date(b);return`${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][N.getDay()]}, ${N.toLocaleDateString("en-US",{month:"short",day:"numeric"})}`}function p(){localStorage.setItem("weeklyReviewDismissed",new Date().toISOString().split("T")[0]),e()}return c.jsx("div",{className:"modal-overlay",onClick:p,children:c.jsxs("div",{className:"modal-content weekly-review",onClick:b=>b.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Weekly Check-in"}),c.jsx("button",{className:"modal-close",onClick:p,children:"×"})]}),a?c.jsx("div",{className:"weekly-loading",children:"Loading your week..."}):t?c.jsxs("div",{className:"weekly-sections",children:[c.jsxs("div",{className:"weekly-section",children:[c.jsxs("h3",{className:"weekly-section-title weekly-section-kept",children:["Completed this week",t.keptThisWeek.length>0&&c.jsx("span",{className:"weekly-section-count",children:t.keptThisWeek.length})]}),t.keptThisWeek.length===0?c.jsx("p",{className:"weekly-empty",children:"Nothing completed this week."}):c.jsx("div",{className:"weekly-kept-list",children:t.keptThisWeek.map(b=>{const N=r(b);return c.jsxs("div",{className:"weekly-kept-item",children:[c.jsx("svg",{className:"weekly-kept-check",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--success)",strokeWidth:"3",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})}),c.jsxs("div",{className:"weekly-kept-text",children:[c.jsx("div",{className:"weekly-kept-desc",children:b.shortDescription||b.description}),N&&c.jsxs("div",{className:"weekly-kept-person",children:["to ",N]})]})]},b.id)})})]}),t.atRisk.length>0&&c.jsxs("div",{className:"weekly-section",children:[c.jsxs("h3",{className:"weekly-section-title weekly-section-risk",children:["At risk",c.jsx("span",{className:"weekly-section-count",children:t.atRisk.length})]}),c.jsx("p",{className:"weekly-section-desc",children:"These have been sitting a while. What would you like to do?"}),c.jsx("div",{className:"weekly-risk-list",children:t.atRisk.map(b=>{const N=r(b),_=Math.floor((Date.now()-new Date(b.updatedAt).getTime())/(1e3*60*60*24));return c.jsxs("div",{className:"weekly-risk-item",children:[c.jsxs("div",{className:"weekly-risk-top",children:[c.jsx("div",{className:"weekly-risk-desc",children:b.shortDescription||b.description}),N&&c.jsxs("div",{className:"weekly-risk-person",children:["to ",N]}),c.jsxs("div",{className:"weekly-risk-age",children:["Untouched for ",_," days"]})]}),c.jsxs("div",{className:"weekly-risk-actions",children:[c.jsx("button",{className:"weekly-risk-btn recommit",onClick:()=>d(b.id),children:"Recommit"}),c.jsx("button",{className:"weekly-risk-btn postpone",onClick:()=>s(b.id),children:"Push forward"}),c.jsx("button",{className:"weekly-risk-btn letgo",onClick:()=>h(b.id),children:"Let go"})]}),i===b.id&&c.jsx(Vm,{onPostpone:o=>v(b.id,o),onClose:()=>s(null)})]},b.id)})})]}),t.comingUp.length>0&&c.jsxs("div",{className:"weekly-section",children:[c.jsxs("h3",{className:"weekly-section-title weekly-section-upcoming",children:["Coming up next week",c.jsx("span",{className:"weekly-section-count",children:t.comingUp.length})]}),c.jsx("div",{className:"weekly-upcoming-list",children:t.comingUp.map(b=>{const N=r(b);return c.jsxs("div",{className:"weekly-upcoming-item",children:[c.jsx("div",{className:"weekly-upcoming-date",children:m(b.dueDate)}),c.jsx("div",{className:"weekly-upcoming-desc",children:b.shortDescription||b.description}),N&&c.jsxs("div",{className:"weekly-upcoming-person",children:["to ",N]})]},b.id)})})]})]}):null,c.jsx("button",{className:"btn btn-primary btn-block weekly-done-btn",onClick:p,children:"Done"})]})})}function cv({onClose:e}){const[t,l]=S.useState(null),[a,n]=S.useState(null),[i,s]=S.useState(!0),[u,r]=S.useState(!1),[d,h]=S.useState(null),[v,m]=S.useState("default"),[p,b]=S.useState(!1),[N,_]=S.useState(!1),[o,f]=S.useState(null),[g,x]=S.useState(null),[k,M]=S.useState(!1),[y,O]=S.useState("08:00"),[w,R]=S.useState(!1),[P,ee]=S.useState("18:00"),[Te,ye]=S.useState("0");S.useEffect(()=>{j(),ne(),ve()},[]);async function ve(){try{const U=await Vy();U.morningBriefTime&&O(U.morningBriefTime),U.eveningBriefEnabled&&R(U.eveningBriefEnabled==="true"),U.eveningBriefTime&&ee(U.eveningBriefTime),U.weeklyReviewDay&&ye(U.weeklyReviewDay)}catch{}}async function E(U,J){try{await Zy({[U]:J})}catch(He){console.error("Failed to save setting:",He)}}async function j(){s(!0);try{const[U,J]=await Promise.all([Xm(),gy()]);l(U),n(J)}catch(U){console.error("Failed to load settings data:",U)}finally{s(!1)}}async function D(){try{const{url:U}=await hy();window.location.href=U}catch(U){console.error("Failed to get auth URL:",U),alert("Failed to start Gmail connection")}}async function z(){try{await py(),M(!1),await j()}catch(U){console.error("Failed to disconnect Gmail:",U)}}async function H(){r(!0),h(null);try{const U=await yy();h(U),await j()}catch(U){console.error("Scan failed:",U),h({success:!1,emailsScanned:0,actionsCreated:0,errors:["Scan failed"]})}finally{r(!1)}}async function ne(){if(!("Notification"in window)||!("serviceWorker"in navigator)){m("unsupported");return}if(m(Notification.permission),Notification.permission==="granted"){const U=await navigator.serviceWorker.ready.catch(()=>null);if(U){const J=await U.pushManager.getSubscription();b(!!J)}}}async function ze(){_(!0);try{const U=await Notification.requestPermission();if(m(U),U!=="granted")return;const{key:J}=await By();if(!J){alert("Server not configured for push notifications");return}const C=(await(await navigator.serviceWorker.ready).pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:we(J)})).toJSON();await Gy(C.endpoint,C.keys.p256dh,C.keys.auth),b(!0)}catch(U){console.error("Failed to enable notifications:",U),alert("Failed to enable notifications")}finally{_(!1)}}async function qe(){_(!0);try{const J=await(await navigator.serviceWorker.ready).pushManager.getSubscription();J&&(await Ly(J.endpoint),await J.unsubscribe()),b(!1)}catch(U){console.error("Failed to disable notifications:",U)}finally{_(!1)}}function we(U){const J="=".repeat((4-U.length%4)%4),He=(U+J).replace(/-/g,"+").replace(/_/g,"/"),Oe=window.atob(He);return new Uint8Array([...Oe].map(G=>G.charCodeAt(0))).buffer}async function de(U,J){f(U),x(null);try{const He=await J();x({key:U,...He})}catch{x({key:U,success:!1,message:"Request failed"})}finally{f(null)}}function xt(U){if(!U)return"Never";const J=new Date(U),Oe=new Date().getTime()-J.getTime(),C=Math.floor(Oe/6e4),G=Math.floor(C/60),X=Math.floor(G/24);return C<1?"Just now":C<60?`${C}m ago`:G<24?`${G}h ago`:`${X}d ago`}return c.jsx("div",{className:"modal-overlay",onClick:e,children:c.jsxs("div",{className:"modal-content settings-modal",onClick:U=>U.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:"Settings"}),c.jsx("button",{className:"modal-close",onClick:e,children:"×"})]}),i?c.jsx("div",{className:"settings-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Gmail Integration"}),c.jsxs("div",{className:"settings-gmail",children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Status"}),c.jsx("span",{className:`gmail-status-value ${a!=null&&a.connected?"connected":"disconnected"}`,children:a!=null&&a.connected?"Connected":"Not Connected"})]}),a!=null&&a.connected?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Last Scan"}),c.jsx("span",{className:"gmail-status-value",children:xt(a.lastScan)})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Emails Scanned"}),c.jsx("span",{className:"gmail-status-value",children:a.itemsScanned})]}),c.jsxs("div",{className:"gmail-status-row",children:[c.jsx("span",{className:"gmail-status-label",children:"Actions Created"}),c.jsx("span",{className:"gmail-status-value",children:a.actionsCreated})]}),a.lastError&&c.jsxs("div",{className:"gmail-error",children:[c.jsx("span",{className:"gmail-error-label",children:"Last Error"}),c.jsx("p",{children:a.lastError})]}),d&&c.jsx("div",{className:`scan-result ${d.success?"success":"error"}`,children:d.success?`Scanned ${d.emailsScanned} emails, created ${d.actionsCreated} actions`:`Scan failed: ${d.errors.join(", ")}`}),c.jsxs("div",{className:"gmail-buttons",children:[c.jsx("button",{className:"btn btn-primary",onClick:H,disabled:u,children:u?"Scanning...":"Scan Now"}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>M(!0),children:"Disconnect"})]})]}):c.jsxs("div",{className:"gmail-connect",children:[c.jsx("p",{className:"gmail-connect-text",children:"Connect your Gmail to automatically scan for actionable emails."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:D,children:"Connect Gmail"})]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Push Notifications"}),c.jsx("div",{className:"settings-notifications",children:v==="unsupported"?c.jsx("p",{className:"notif-note",children:"Push notifications require installing this app and iOS 16.4+."}):v==="denied"?c.jsx("p",{className:"notif-note notif-denied",children:"Notifications blocked. Enable them in device Settings > Safari."}):p?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-status notif-enabled",children:"Notifications enabled"}),c.jsx("button",{className:"btn btn-secondary btn-block",onClick:qe,disabled:N,children:N?"Disabling...":"Disable Notifications"})]}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"notif-note",children:"Get notified when triggers fire or actions need attention."}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:ze,disabled:N,children:N?"Enabling...":"Enable Notifications"})]})})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"System Health"}),c.jsxs("div",{className:"settings-health",children:[c.jsxs("div",{className:"health-row",children:[c.jsx("span",{className:"health-label",children:"Overall Status"}),c.jsx("span",{className:`health-value ${t==null?void 0:t.status}`,children:(t==null?void 0:t.status)==="ok"?"All Systems OK":"Issues Detected"})]}),(t==null?void 0:t.errors)&&t.errors.length>0&&c.jsxs("div",{className:"health-errors",children:[c.jsx("span",{className:"health-errors-label",children:"Errors"}),t.errors.map((U,J)=>c.jsx("p",{className:"health-error",children:U},J))]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Daily Briefs"}),c.jsxs("div",{className:"settings-briefs",children:[c.jsxs("div",{className:"brief-setting-row",children:[c.jsx("span",{className:"brief-setting-label",children:"Morning brief"}),c.jsx("input",{type:"time",className:"brief-time-input",value:y,onChange:U=>{O(U.target.value),E("morningBriefTime",U.target.value)}})]}),c.jsxs("div",{className:"brief-setting-row",children:[c.jsx("span",{className:"brief-setting-label",children:"Evening wrap-up"}),c.jsxs("div",{className:"brief-setting-toggle-group",children:[c.jsx("input",{type:"time",className:"brief-time-input",value:P,disabled:!w,onChange:U=>{ee(U.target.value),E("eveningBriefTime",U.target.value)}}),c.jsxs("label",{className:"brief-toggle-label",children:[c.jsx("input",{type:"checkbox",checked:w,onChange:U=>{R(U.target.checked),E("eveningBriefEnabled",String(U.target.checked))}}),w?"On":"Off"]})]})]}),c.jsxs("div",{className:"brief-setting-row",children:[c.jsx("span",{className:"brief-setting-label",children:"Weekly check-in"}),c.jsxs("select",{className:"brief-day-select",value:Te,onChange:U=>{ye(U.target.value),E("weeklyReviewDay",U.target.value)},children:[c.jsx("option",{value:"0",children:"Sunday"}),c.jsx("option",{value:"1",children:"Monday"}),c.jsx("option",{value:"2",children:"Tuesday"}),c.jsx("option",{value:"3",children:"Wednesday"}),c.jsx("option",{value:"4",children:"Thursday"}),c.jsx("option",{value:"5",children:"Friday"}),c.jsx("option",{value:"6",children:"Saturday"})]})]}),c.jsx("p",{className:"brief-note",children:"Notifications batch overnight and arrive with your morning brief."})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Scan Schedule"}),c.jsxs("div",{className:"settings-schedule",children:[c.jsx("p",{children:"Automatic Gmail scans run every 4 hours."}),c.jsx("p",{className:"schedule-note",children:"Trigger checks every 6 hours. Web conditions every 4 hours per trigger. Follow-up reminders at 9 AM daily."})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"Testing Tools"}),c.jsxs("div",{className:"settings-tools",children:[c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Check for stale actions"}),c.jsx("div",{className:"tool-desc",children:`Looks at all your active actions and flags ones you haven't touched in a while with a "Still important?" prompt. Normally happens automatically every morning at 9 AM.`})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>de("followups",uy),disabled:o!==null,children:o==="followups"?"Running…":"Run now"})]}),c.jsxs("div",{className:"tool-item",children:[c.jsxs("div",{className:"tool-text",children:[c.jsx("div",{className:"tool-label",children:"Fire due triggers & check web conditions"}),c.jsx("div",{className:"tool-desc",children:"Two things in one: (1) promotes any Waiting actions whose due date has arrived into your active list, and (2) searches the web to see if any real-world conditions you're watching — like a store sale or product launch — have come true. Normally runs every hour / every 4 hours."})]}),c.jsx("button",{className:"btn btn-secondary tool-btn",onClick:()=>de("triggers",ry),disabled:o!==null,children:o==="triggers"?"Running…":"Run now"})]}),g&&c.jsxs("div",{className:`tool-result ${g.success?"success":"error"}`,children:[g.success?"✓":"✗"," ",g.message]})]})]}),c.jsxs("div",{className:"settings-section",children:[c.jsx("h3",{className:"settings-section-title",children:"About"}),c.jsxs("p",{className:"settings-about",children:["Action Manager v2.0",c.jsx("br",{}),"Your personal commitment tracker"]})]})]}),k&&c.jsx(vt,{title:"Disconnect Gmail",message:"Are you sure you want to disconnect Gmail? Automatic email scanning will stop.",confirmLabel:"Disconnect",danger:!0,onConfirm:z,onCancel:()=>M(!1)}),c.jsx("style",{children:`
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
        `})]})})}function sv({onClose:e,onSelectAction:t}){const[l,a]=S.useState(""),[n,i]=S.useState([]),[s,u]=S.useState(0),[r,d]=S.useState(!1),[h,v]=S.useState(!1),[m,p]=S.useState(""),[b,N]=S.useState(""),[_,o]=S.useState(!1),[f,g]=S.useState(!1),x=S.useCallback(async(y=!0)=>{d(!0);try{const O=await Sy({q:l||void 0,container:m||void 0,urgency:b||void 0,includeArchived:_,archiveOnly:f,limit:20,offset:y?0:n.length});i(y?O.actions:w=>[...w,...O.actions]),u(O.total),v(O.hasMore)}catch(O){console.error("Search failed:",O)}finally{d(!1)}},[l,m,b,_,f,n.length]);S.useEffect(()=>{const y=setTimeout(()=>{x(!0)},300);return()=>clearTimeout(y)},[l,m,b,_,f]);function k(y){return y?new Date(y).toLocaleDateString("en-US",{month:"short",day:"numeric"}):""}function M(){x(!1)}return c.jsxs("div",{className:"search-overlay",children:[c.jsxs("div",{className:"search-container",children:[c.jsxs("div",{className:"search-header",children:[c.jsxs("div",{className:"search-input-wrapper",children:[c.jsx("span",{className:"search-icon",children:"🔍"}),c.jsx("input",{type:"text",className:"search-input",placeholder:"Search actions...",value:l,onChange:y=>a(y.target.value),autoFocus:!0}),l&&c.jsx("button",{className:"search-clear",onClick:()=>a(""),children:"✕"})]}),c.jsx("button",{className:"search-close",onClick:e,children:"Cancel"})]}),c.jsxs("div",{className:"search-filters",children:[c.jsxs("select",{className:"search-filter",value:m,onChange:y=>p(y.target.value),children:[c.jsx("option",{value:"",children:"All Containers"}),Object.entries(Tt).map(([y,O])=>c.jsx("option",{value:y,children:O},y))]}),c.jsxs("select",{className:"search-filter",value:b,onChange:y=>N(y.target.value),children:[c.jsx("option",{value:"",children:"All Urgency"}),Object.entries(ga).map(([y,O])=>c.jsx("option",{value:y,children:O},y))]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:_,onChange:y=>{o(y.target.checked),y.target.checked&&g(!1)}}),"Include archived"]}),c.jsxs("label",{className:"search-checkbox",children:[c.jsx("input",{type:"checkbox",checked:f,onChange:y=>{g(y.target.checked),y.target.checked&&o(!1)}}),"Archive only"]})]}),c.jsx("div",{className:"search-results",children:r&&n.length===0?c.jsx("div",{className:"search-loading",children:"Searching..."}):n.length===0?c.jsx("div",{className:"search-empty",children:l?"No actions found":"Start typing to search"}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"search-count",children:[s," result",s!==1?"s":""]}),n.map(y=>c.jsxs("div",{className:`search-result ${y.isArchived?"archived":""}`,onClick:()=>t(y.id),children:[c.jsx("div",{className:`result-urgency ${y.urgency.toLowerCase()}`}),c.jsxs("div",{className:"result-content",children:[c.jsx("div",{className:"result-description",children:y.description}),c.jsxs("div",{className:"result-meta",children:[c.jsx("span",{className:"result-container",children:Tt[y.container]}),y.dueDate&&c.jsxs("span",{className:"result-date",children:["Due ",k(y.dueDate)]}),y.isArchived&&c.jsx("span",{className:"result-archived",children:"Archived"})]})]})]},y.id)),h&&c.jsx("button",{className:"search-load-more",onClick:M,disabled:r,children:r?"Loading...":"Load more"})]})})]}),c.jsx("style",{children:`
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
      `})]})}function uv({onClose:e,onSelectAction:t}){const[l,a]=S.useState([]),[n,i]=S.useState([]),[s,u]=S.useState(!0),[r,d]=S.useState(!1),[h,v]=S.useState(""),[m,p]=S.useState(""),[b,N]=S.useState(null),[_,o]=S.useState(""),[f,g]=S.useState(null),[x,k]=S.useState(""),[M,y]=S.useState([]),[O,w]=S.useState(new Set),[R,P]=S.useState(new Set),[ee,Te]=S.useState(!1),[ye,ve]=S.useState(null);S.useEffect(()=>{E()},[]);async function E(){u(!0);try{const[C,G]=await Promise.all([jy(),Dy()]);a(C),i(G.suggestions)}catch(C){console.error("Failed to load groups:",C)}finally{u(!1)}}async function j(){if(h.trim())try{await Ay({name:h.trim(),description:m.trim()||void 0}),v(""),p(""),d(!1),E()}catch(C){console.error("Failed to create group:",C)}}function D(C){N(C.id),o(C.suggestedName)}async function z(C){try{await zy(C,_.trim()||void 0),N(null),E()}catch(G){console.error("Failed to accept suggestion:",G)}}async function H(C){try{await wy(C),i(G=>G.filter(X=>X.id!==C))}catch(G){console.error("Failed to dismiss suggestion:",G)}}async function ne(C){try{await Ey(C),ve(null),E()}catch(G){console.error("Failed to delete group:",G)}}async function ze(C){g(C),k(""),Te(!0);try{const X=(await Ym()).filter(Wt=>!Wt.archivedAt&&!Wt.completedAt);y(X);const Jt=l.find(Wt=>Wt.id===C),Un=new Set((Jt==null?void 0:Jt.actions.map(Wt=>Wt.id))||[]);w(new Set(Un)),P(new Set(Un))}catch(G){console.error("Failed to load actions:",G)}finally{Te(!1)}}async function qe(){if(f!==null)try{const C=[...O].filter(X=>!R.has(X)),G=[...R].filter(X=>!O.has(X));C.length>0&&await Cy(f,C);for(const X of G)await _o(f,X);g(null),E()}catch(C){console.error("Failed to update group actions:",C)}}function we(C){w(G=>{const X=new Set(G);return X.has(C)?X.delete(C):X.add(C),X})}const de=S.useMemo(()=>{if(!x.trim())return M;const C=x.toLowerCase();return M.filter(G=>G.description.toLowerCase().includes(C))},[M,x]);async function xt(C,G){try{await _o(C,G),E()}catch(X){console.error("Failed to remove action from group:",X)}}async function U(C){try{await Ty(C),E()}catch(G){console.error("Failed to archive group:",G)}}function J(C){return C.actions.filter(G=>G.completedAt!==null).length}function He(C){return C.actions.length>0&&J(C)===C.actions.length}function Oe(C){return C.toLowerCase()}return c.jsxs("div",{className:"groups-overlay",children:[c.jsxs("div",{className:"groups-container",children:[c.jsxs("div",{className:"groups-header",children:[c.jsx("h2",{className:"groups-title",children:"Action Groups"}),c.jsxs("div",{className:"groups-header-actions",children:[c.jsx("button",{className:"btn btn-primary btn-small",onClick:()=>d(!0),children:"+ New Group"}),c.jsx("button",{className:"groups-close",onClick:e,children:"Done"})]})]}),c.jsx("div",{className:"groups-content",children:s?c.jsx("div",{className:"groups-loading",children:"Loading..."}):c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:"groups-section",children:[c.jsx("h3",{className:"section-title",children:"Your Groups"}),l.length===0?c.jsx("div",{className:"groups-empty",children:"No groups yet. Create one or accept a suggestion below."}):l.map(C=>c.jsxs("div",{className:"group-card",children:[He(C)&&c.jsxs("div",{className:"group-archive-banner",children:[c.jsx("span",{children:"All actions complete! Archive this group?"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>U(C.id),children:"Archive"})]}),c.jsxs("div",{className:"group-header",children:[c.jsxs("div",{className:"group-info",children:[c.jsx("div",{className:"group-name",children:C.name}),C.description&&c.jsx("div",{className:"group-description",children:C.description})]}),c.jsxs("div",{className:"group-stats",children:[c.jsx("span",{className:`urgency-badge ${Oe(C.highestUrgency)}`,children:ga[C.highestUrgency]}),c.jsxs("span",{className:"group-count",children:[C.activeCount,"/",C.actionCount," active"]})]})]}),c.jsxs("div",{className:"group-progress",children:[c.jsxs("div",{className:"progress-text",children:[J(C)," of ",C.actions.length," complete"]}),c.jsx("div",{className:"progress-bar-track",children:c.jsx("div",{className:"progress-bar-fill",style:{width:C.actions.length>0?`${J(C)/C.actions.length*100}%`:"0%"}})})]}),c.jsxs("div",{className:"group-actions-list",children:[C.actions.slice(0,3).map(G=>c.jsxs("div",{className:`group-action-item ${G.completedAt?"completed":""}`,children:[c.jsxs("div",{className:"group-action-clickable",onClick:()=>t(G.id),children:[c.jsx("div",{className:`action-urgency-dot ${Oe(G.urgency)}`}),c.jsx("span",{className:"action-text",children:G.description})]}),c.jsx("button",{className:"action-remove-btn",onClick:X=>{X.stopPropagation(),xt(C.id,G.id)},title:"Remove from group",children:"×"})]},G.id)),C.actions.length>3&&c.jsxs("div",{className:"group-more",children:["+",C.actions.length-3," more"]})]}),c.jsxs("div",{className:"group-footer",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>ze(C.id),children:"Add Actions"}),c.jsx("button",{className:"btn-link",onClick:()=>ve(C.id),children:"Delete Group"})]})]},C.id))]}),n.length>0&&c.jsxs("section",{className:"groups-section",children:[c.jsx("h3",{className:"section-title",children:"Suggested Groups"}),c.jsx("p",{className:"section-subtitle",children:"AI-detected actions that may be steps toward the same goal"}),n.map(C=>c.jsxs("div",{className:"suggestion-card goal-suggestion",children:[c.jsxs("div",{className:"suggestion-content",children:[b===C.id?c.jsxs("div",{className:"suggestion-edit-name",children:[c.jsx("input",{type:"text",className:"form-input suggestion-name-input",value:_,onChange:G=>o(G.target.value),autoFocus:!0,onKeyDown:G=>{G.key==="Enter"&&z(C.id),G.key==="Escape"&&N(null)}}),c.jsxs("div",{className:"suggestion-edit-actions",children:[c.jsx("button",{className:"btn btn-primary btn-small",onClick:()=>z(C.id),children:"Create"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>N(null),children:"Cancel"})]})]}):c.jsx("div",{className:"suggestion-name",children:C.suggestedName}),c.jsx("div",{className:"suggestion-reason",children:C.reasoning}),c.jsx("div",{className:"suggestion-actions-list",children:C.actions.map(G=>c.jsx("div",{className:"suggestion-action-item",children:G.shortDescription||G.description},G.id))})]}),b!==C.id&&c.jsxs("div",{className:"suggestion-buttons",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:()=>D(C),children:"Group"}),c.jsx("button",{className:"btn-link btn-small",onClick:()=>H(C.id),children:"Dismiss"})]})]},C.id))]})]})})]}),r&&c.jsx("div",{className:"modal-overlay",onClick:()=>d(!1),children:c.jsxs("div",{className:"modal-content",onClick:C=>C.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Create Group"}),c.jsx("button",{className:"modal-close",onClick:()=>d(!1),children:"×"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Group Name"}),c.jsx("input",{type:"text",className:"form-input",value:h,onChange:C=>v(C.target.value),placeholder:"e.g., Project Alpha",autoFocus:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Description (optional)"}),c.jsx("textarea",{className:"form-textarea",value:m,onChange:C=>p(C.target.value),placeholder:"What is this group about?",rows:2})]}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:j,disabled:!h.trim(),children:"Create Group"})]})}),f!==null&&c.jsx("div",{className:"modal-overlay",onClick:()=>g(null),children:c.jsxs("div",{className:"modal-content add-actions-modal",onClick:C=>C.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h3",{className:"modal-title",children:"Add Actions to Group"}),c.jsx("button",{className:"modal-close",onClick:()=>g(null),children:"×"})]}),c.jsx("div",{className:"form-group",children:c.jsx("input",{type:"text",className:"form-input",value:x,onChange:C=>k(C.target.value),placeholder:"Search actions...",autoFocus:!0})}),!ee&&de.length>0&&c.jsx("div",{className:"add-actions-select-all",children:c.jsxs("label",{className:"select-all-label",children:[c.jsx("input",{type:"checkbox",checked:de.every(C=>O.has(C.id)),onChange:()=>{const C=de.every(G=>O.has(G.id));w(G=>{const X=new Set(G);for(const Jt of de)C?X.delete(Jt.id):X.add(Jt.id);return X})}}),"Select All (",de.length,")"]})}),c.jsx("div",{className:"add-actions-list",children:ee?c.jsx("div",{className:"groups-loading",children:"Loading actions..."}):de.length===0?c.jsx("div",{className:"groups-empty",children:"No matching actions found."}):de.map(C=>c.jsxs("label",{className:"add-action-row",children:[c.jsx("input",{type:"checkbox",checked:O.has(C.id),onChange:()=>we(C.id)}),c.jsx("div",{className:`action-urgency-dot ${Oe(C.urgency)}`}),c.jsx("span",{className:"action-text",children:C.description})]},C.id))}),c.jsx("button",{className:"btn btn-primary btn-block",onClick:qe,children:"Save"})]})}),ye!==null&&c.jsx(vt,{title:"Delete Group",message:"Delete this group? Actions will be ungrouped but not deleted.",confirmLabel:"Delete",danger:!0,onConfirm:()=>ne(ye),onCancel:()=>ve(null)}),c.jsx("style",{children:`
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
      `})]})}function rv({onClose:e}){const[t,l]=S.useState([]),[a,n]=S.useState(null),[i,s]=S.useState(!0),[u,r]=S.useState("proposed"),[d,h]=S.useState(null),[v,m]=S.useState(null),[p,b]=S.useState(null);S.useEffect(()=>{N()},[]);async function N(){s(!0);try{const[y,O]=await Promise.all([My(),Hy()]);l(y),n(O)}catch(y){console.error("Failed to load tuning data:",y)}finally{s(!1)}}async function _(y){try{await ky(y),N()}catch(O){console.error("Failed to activate rule:",O)}}async function o(y,O=!1,w){try{await _y(y,w,O),h(null),b(null),N()}catch(R){console.error("Failed to reject rule:",R)}}async function f(y){try{await Ry(y),N()}catch(O){console.error("Failed to update threshold:",O)}}async function g(y){try{await Uy(y),b(null),N()}catch(O){console.error("Failed to delete rule:",O)}}const x=t.filter(y=>{switch(u){case"proposed":return y.status==="PROPOSED";case"shadow":return y.status==="SHADOW";case"active":return y.status==="ACTIVE";case"rejected":return y.status==="REJECTED"}});function k(y){switch(y){case"SHADOW":return"Testing";case"PROPOSED":return"Ready";case"ACTIVE":return"Active";case"REJECTED":return"Rejected";default:return y}}function M(y){return y.shadowCount===0?0:Math.round(y.shadowSuccesses/y.shadowCount*100)}return c.jsxs("div",{className:"tuning-overlay",children:[c.jsxs("div",{className:"tuning-container",children:[c.jsxs("div",{className:"tuning-header",children:[c.jsx("h2",{className:"tuning-title",children:"AI Tuning"}),c.jsx("button",{className:"tuning-close",onClick:e,children:"Done"})]}),a&&c.jsxs("div",{className:"tuning-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:a.counts.active}),c.jsx("span",{className:"stat-label",children:"Active Rules"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:a.counts.proposed}),c.jsx("span",{className:"stat-label",children:"Pending Review"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-value",children:a.counts.shadow}),c.jsx("span",{className:"stat-label",children:"Testing"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsxs("span",{className:"stat-value",children:[a.avgSuccessRate,"%"]}),c.jsx("span",{className:"stat-label",children:"Avg Success"})]})]}),c.jsxs("div",{className:"tuning-tabs",children:[c.jsxs("button",{className:`tuning-tab ${u==="proposed"?"active":""}`,onClick:()=>r("proposed"),children:["Pending ",a&&a.counts.proposed>0&&`(${a.counts.proposed})`]}),c.jsx("button",{className:`tuning-tab ${u==="shadow"?"active":""}`,onClick:()=>r("shadow"),children:"Testing"}),c.jsx("button",{className:`tuning-tab ${u==="active"?"active":""}`,onClick:()=>r("active"),children:"Active"}),c.jsx("button",{className:`tuning-tab ${u==="rejected"?"active":""}`,onClick:()=>r("rejected"),children:"Rejected"})]}),c.jsx("div",{className:"tuning-content",children:i?c.jsx("div",{className:"tuning-loading",children:"Loading..."}):x.length===0?c.jsx("div",{className:"tuning-empty",children:t.length===0?c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"No tuning rules yet."}),c.jsx("p",{className:"tuning-hint",children:"Tuning rules help the AI learn from your corrections. When you correct an action's urgency or container, the system creates rules to improve future parsing."})]}):c.jsxs(c.Fragment,{children:[u==="proposed"&&"No rules ready for review.",u==="shadow"&&"No rules currently testing.",u==="active"&&"No active tuning rules.",u==="rejected"&&"No rejected rules.",c.jsx("p",{className:"tuning-hint",children:"Tuning rules are created when you provide feedback on AI-parsed actions."})]})}):x.map(y=>{const O=v===y.id;return c.jsxs("div",{className:`rule-card ${O?"rule-card-expanded":""}`,children:[c.jsxs("div",{className:"rule-collapsed",onClick:()=>m(O?null:y.id),children:[c.jsxs("div",{className:"rule-collapsed-top",children:[c.jsx("span",{className:`rule-category category-${y.category}`,children:y.category}),c.jsx("span",{className:`rule-status status-${y.status.toLowerCase()}`,children:k(y.status)}),c.jsx("span",{className:"rule-expand-icon",children:O?"▲":"▼"})]}),c.jsx("div",{className:"rule-description-collapsed",children:O?y.description:y.description.length>60?y.description.slice(0,60)+"...":y.description}),!O&&(y.status==="SHADOW"||y.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(y.shadowCount/y.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[y.shadowCount,"/",y.shadowThreshold," tests (",M(y),"% success)"]})]})]}),O&&c.jsxs("div",{className:"rule-expanded-body",children:[c.jsxs("div",{className:"rule-details",children:[c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"When:"}),c.jsx("span",{className:"detail-text",children:y.condition})]}),c.jsxs("div",{className:"rule-detail",children:[c.jsx("span",{className:"detail-label",children:"Then:"}),c.jsx("span",{className:"detail-text",children:y.transformation})]})]}),(y.status==="SHADOW"||y.status==="PROPOSED")&&c.jsxs("div",{className:"rule-progress",children:[c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(y.shadowCount/y.shadowThreshold*100,100)}%`}})}),c.jsxs("span",{className:"progress-text",children:[y.shadowCount,"/",y.shadowThreshold," tests (",M(y),"% success)"]})]}),y.userFeedback&&c.jsxs("div",{className:"rule-feedback",children:[c.jsx("span",{className:"detail-label",children:"Feedback:"}),y.userFeedback]}),c.jsxs("div",{className:"rule-actions",children:[y.status==="PROPOSED"&&d!==y.id&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-success btn-small",onClick:w=>{w.stopPropagation(),_(y.id)},children:"Activate"}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:w=>{w.stopPropagation(),h(y.id)},children:"Reject"})]}),y.status==="PROPOSED"&&d===y.id&&c.jsxs("div",{className:"reject-options",children:[c.jsx("button",{className:"btn btn-secondary btn-small",onClick:w=>{w.stopPropagation(),b({type:"reject-feedback",ruleId:y.id})},children:"Just reject"}),c.jsxs("button",{className:"btn btn-secondary btn-small reject-stop",onClick:w=>{w.stopPropagation(),o(y.id,!0)},children:["Stop ",y.category," suggestions"]}),c.jsx("button",{className:"btn btn-secondary btn-small",onClick:w=>{w.stopPropagation(),f(y.id),h(null)},children:"Ask less often"}),c.jsx("button",{className:"btn-link",onClick:w=>{w.stopPropagation(),h(null)},children:"Cancel"})]}),y.status==="SHADOW"&&c.jsx("button",{className:"btn btn-primary btn-small",onClick:w=>{w.stopPropagation(),_(y.id)},children:"Activate Early"}),c.jsx("button",{className:"btn-link danger",onClick:w=>{w.stopPropagation(),b({type:"delete",ruleId:y.id})},children:"Delete"})]})]})]},y.id)})})]}),(p==null?void 0:p.type)==="delete"&&c.jsx(vt,{title:"Delete Rule",message:"Delete this tuning rule?",confirmLabel:"Delete",danger:!0,onConfirm:()=>g(p.ruleId),onCancel:()=>b(null)}),(p==null?void 0:p.type)==="reject-feedback"&&c.jsx(vt,{title:"Reject Rule",message:"Why are you rejecting this rule?",confirmLabel:"Reject",inputMode:!0,inputPlaceholder:"Reason (optional)",inputLabel:"Feedback:",onConfirm:y=>o(p.ruleId,!1,y||void 0),onCancel:()=>b(null)}),c.jsx("style",{children:`
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
      `})]})}function ov(){const[e,t]=S.useState("today"),[l,a]=S.useState("ACTIONABLE_NOW"),[n,i]=S.useState(void 0),[s,u]=S.useState(!1),[r,d]=S.useState(!1),[h,v]=S.useState(!1),[m,p]=S.useState(!1),[b,N]=S.useState(!1),[_,o]=S.useState(null),[f,g]=S.useState(0),[x,k]=S.useState(null),[M,y]=S.useState(0);S.useEffect(()=>{O(),w();const E=setInterval(()=>{O(),w()},30*60*1e3);return()=>clearInterval(E)},[]);async function O(){try{const E=await Xm();k(E)}catch{}}async function w(){try{const E=await Lm();y(E.goalSuggestions||0)}catch{}}function R(){const E=new Date;if(E.getDay()!==0)return!1;const D=localStorage.getItem("weeklyReviewDismissed");if(!D)return!0;const z=new Date(D);return Math.floor((E.getTime()-z.getTime())/(1e3*60*60*24))>=6}const P=x&&x.errors.length>0;function ee(){g(E=>E+1),Be(),w()}function Te(E){d(!1),o(E)}function ye(E){E==="TUNING"?p(!0):(i(void 0),a(E))}function ve(E){a(null),i(E)}return c.jsxs("div",{className:"app",children:[c.jsxs("header",{className:"app-header",children:[c.jsxs("div",{className:"view-toggle",children:[c.jsx("button",{className:`view-toggle-btn ${e==="today"?"active":""}`,onClick:()=>t("today"),children:"Today"}),c.jsx("button",{className:`view-toggle-btn ${e==="all"?"active":""}`,onClick:()=>t("all"),children:"All"})]}),c.jsxs("div",{className:"header-actions",children:[c.jsx("button",{className:"search-btn",onClick:()=>d(!0),title:"Search",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("path",{d:"M21 21l-4.35-4.35"})]})}),c.jsxs("button",{className:"search-btn groups-btn",onClick:()=>v(!0),title:"Groups",children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),c.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]}),M>0&&c.jsx("span",{className:"groups-badge",children:M})]}),c.jsx("button",{className:`settings-btn ${P?"has-errors":""}`,onClick:()=>u(!0),title:"Settings",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]})]}),P&&c.jsx("div",{className:"error-banner",onClick:()=>u(!0),children:"System issue detected — tap to view in Settings"}),c.jsx("main",{className:"main-content",children:e==="today"?c.jsx(nv,{onShowFeed:()=>t("all"),onShowWeeklyReview:()=>N(!0),showWeeklyBanner:R()},f):c.jsxs(c.Fragment,{children:[c.jsx($y,{activeContainer:l,onContainerChange:ye,onFlagFilter:ve}),c.jsx(av,{activeContainer:l,flagFilter:n,onOpenGroups:()=>v(!0)},f)]})}),s&&c.jsx(cv,{onClose:()=>u(!1)}),r&&c.jsx(sv,{onClose:()=>d(!1),onSelectAction:Te}),h&&c.jsx(uv,{onClose:()=>v(!1),onSelectAction:E=>{v(!1),o(E)}}),m&&c.jsx(rv,{onClose:()=>p(!1)}),b&&c.jsx(iv,{onClose:()=>N(!1)}),_&&c.jsx(er,{actionId:_,onClose:()=>o(null),onUpdate:()=>{ee(),o(null)}})]})}ay.createRoot(document.getElementById("root")).render(c.jsx(S.StrictMode,{children:c.jsx(ov,{})}));
