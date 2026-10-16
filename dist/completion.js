(()=>{var Ob=Object.create;var vd=Object.defineProperty;var Pb=Object.getOwnPropertyDescriptor;var Bb=Object.getOwnPropertyNames;var zb=Object.getPrototypeOf,Fb=Object.prototype.hasOwnProperty;var Hb=(e,t,n)=>t in e?vd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Xi=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Vb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Bb(t))!Fb.call(e,s)&&s!==n&&vd(e,s,{get:()=>t[s],enumerable:!(i=Pb(t,s))||i.enumerable});return e};var Pa=(e,t,n)=>(n=e!=null?Ob(zb(e)):{},Vb(t||!e||!e.__esModule?vd(n,"default",{value:e,enumerable:!0}):n,e));var Z0=(e,t,n)=>Hb(e,typeof t!="symbol"?t+"":t,n);var a_=Xi(Wt=>{"use strict";var Sd=Symbol.for("react.transitional.element"),Gb=Symbol.for("react.portal"),kb=Symbol.for("react.fragment"),Xb=Symbol.for("react.strict_mode"),Wb=Symbol.for("react.profiler"),qb=Symbol.for("react.consumer"),Yb=Symbol.for("react.context"),Zb=Symbol.for("react.forward_ref"),Jb=Symbol.for("react.suspense"),Kb=Symbol.for("react.memo"),$0=Symbol.for("react.lazy"),Qb=Symbol.for("react.activity"),J0=Symbol.iterator;function jb(e){return e===null||typeof e!="object"?null:(e=J0&&e[J0]||e["@@iterator"],typeof e=="function"?e:null)}var t_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},e_=Object.assign,n_={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=n_,this.updater=n||t_}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function i_(){}i_.prototype=Dr.prototype;function Md(e,t,n){this.props=e,this.context=t,this.refs=n_,this.updater=n||t_}var bd=Md.prototype=new i_;bd.constructor=Md;e_(bd,Dr.prototype);bd.isPureReactComponent=!0;var K0=Array.isArray;function xd(){}var Ue={H:null,A:null,T:null,S:null},s_=Object.prototype.hasOwnProperty;function Ed(e,t,n){var i=n.ref;return{$$typeof:Sd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function $b(e,t){return Ed(e.type,t,e.props)}function Td(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sd}function t1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Q0=/\/+/g;function yd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?t1(""+e.key):t.toString(36)}function e1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(xd,xd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Cr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Sd:case Gb:r=!0;break;case $0:return r=e._init,Cr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+yd(e,0):i,K0(s)?(n="",r!=null&&(n=r.replace(Q0,"$&/")+"/"),Cr(s,t,n,"",function(c){return c})):s!=null&&(Td(s)&&(s=$b(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Q0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(K0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+yd(i,l),r+=Cr(i,t,n,a,s);else if(l=jb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+yd(i,l++),r+=Cr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Cr(e1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function jc(e,t,n){if(e==null)return e;var i=[],s=0;return Cr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function n1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},i1={map:jc,forEach:function(e,t,n){jc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jc(e,function(){t++}),t},toArray:function(e){return jc(e,function(t){return t})||[]},only:function(e){if(!Td(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Wt.Activity=Qb;Wt.Children=i1;Wt.Component=Dr;Wt.Fragment=kb;Wt.Profiler=Wb;Wt.PureComponent=Md;Wt.StrictMode=Xb;Wt.Suspense=Jb;Wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ue;Wt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ue.H.useMemoCache(e)}};Wt.cache=function(e){return function(){return e.apply(null,arguments)}};Wt.cacheSignal=function(){return null};Wt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=e_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!s_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Ed(e.type,s,i)};Wt.createContext=function(e){return e={$$typeof:Yb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:qb,_context:e},e};Wt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)s_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Ed(e,a,s)};Wt.createRef=function(){return{current:null}};Wt.forwardRef=function(e){return{$$typeof:Zb,render:e}};Wt.isValidElement=Td;Wt.lazy=function(e){return{$$typeof:$0,_payload:{_status:-1,_result:e},_init:n1}};Wt.memo=function(e,t){return{$$typeof:Kb,type:e,compare:t===void 0?null:t}};Wt.startTransition=function(e){var t=Ue.T,n={};Ue.T=n;try{var i=e(),s=Ue.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(xd,j0)}catch(a){j0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ue.T=t}};Wt.unstable_useCacheRefresh=function(){return Ue.H.useCacheRefresh()};Wt.use=function(e){return Ue.H.use(e)};Wt.useActionState=function(e,t,n){return Ue.H.useActionState(e,t,n)};Wt.useCallback=function(e,t){return Ue.H.useCallback(e,t)};Wt.useContext=function(e){return Ue.H.useContext(e)};Wt.useDebugValue=function(){};Wt.useDeferredValue=function(e,t){return Ue.H.useDeferredValue(e,t)};Wt.useEffect=function(e,t){return Ue.H.useEffect(e,t)};Wt.useEffectEvent=function(e){return Ue.H.useEffectEvent(e)};Wt.useId=function(){return Ue.H.useId()};Wt.useImperativeHandle=function(e,t,n){return Ue.H.useImperativeHandle(e,t,n)};Wt.useInsertionEffect=function(e,t){return Ue.H.useInsertionEffect(e,t)};Wt.useLayoutEffect=function(e,t){return Ue.H.useLayoutEffect(e,t)};Wt.useMemo=function(e,t){return Ue.H.useMemo(e,t)};Wt.useOptimistic=function(e,t){return Ue.H.useOptimistic(e,t)};Wt.useReducer=function(e,t,n){return Ue.H.useReducer(e,t,n)};Wt.useRef=function(e){return Ue.H.useRef(e)};Wt.useState=function(e){return Ue.H.useState(e)};Wt.useSyncExternalStore=function(e,t,n){return Ue.H.useSyncExternalStore(e,t,n)};Wt.useTransition=function(){return Ue.H.useTransition()};Wt.version="19.2.0"});var ul=Xi((f3,r_)=>{"use strict";r_.exports=a_()});var g_=Xi(Be=>{"use strict";function Cd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<$c(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Wi(e){return e.length===0?null:e[0]}function eu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>$c(o,n))l<s&&0>$c(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>$c(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function $c(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Be.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(o_=performance,Be.unstable_now=function(){return o_.now()}):(Ad=Date,l_=Ad.now(),Be.unstable_now=function(){return Ad.now()-l_});var o_,Ad,l_,ls=[],ks=[],s1=1,pi=null,En=3,Dd=!1,hl=!1,fl=!1,Ud=!1,h_=typeof setTimeout=="function"?setTimeout:null,f_=typeof clearTimeout=="function"?clearTimeout:null,c_=typeof setImmediate<"u"?setImmediate:null;function tu(e){for(var t=Wi(ks);t!==null;){if(t.callback===null)eu(ks);else if(t.startTime<=e)eu(ks),t.sortIndex=t.expirationTime,Cd(ls,t);else break;t=Wi(ks)}}function Ld(e){if(fl=!1,tu(e),!hl)if(Wi(ls)!==null)hl=!0,Lr||(Lr=!0,Ur());else{var t=Wi(ks);t!==null&&Nd(Ld,t.startTime-e)}}var Lr=!1,dl=-1,d_=5,p_=-1;function m_(){return Ud?!0:!(Be.unstable_now()-p_<d_)}function wd(){if(Ud=!1,Lr){var e=Be.unstable_now();p_=e;var t=!0;try{t:{hl=!1,fl&&(fl=!1,f_(dl),dl=-1),Dd=!0;var n=En;try{e:{for(tu(e),pi=Wi(ls);pi!==null&&!(pi.expirationTime>e&&m_());){var i=pi.callback;if(typeof i=="function"){pi.callback=null,En=pi.priorityLevel;var s=i(pi.expirationTime<=e);if(e=Be.unstable_now(),typeof s=="function"){pi.callback=s,tu(e),t=!0;break e}pi===Wi(ls)&&eu(ls),tu(e)}else eu(ls);pi=Wi(ls)}if(pi!==null)t=!0;else{var a=Wi(ks);a!==null&&Nd(Ld,a.startTime-e),t=!1}}break t}finally{pi=null,En=n,Dd=!1}t=void 0}}finally{t?Ur():Lr=!1}}}var Ur;typeof c_=="function"?Ur=function(){c_(wd)}:typeof MessageChannel<"u"?(Rd=new MessageChannel,u_=Rd.port2,Rd.port1.onmessage=wd,Ur=function(){u_.postMessage(null)}):Ur=function(){h_(wd,0)};var Rd,u_;function Nd(e,t){dl=h_(function(){e(Be.unstable_now())},t)}Be.unstable_IdlePriority=5;Be.unstable_ImmediatePriority=1;Be.unstable_LowPriority=4;Be.unstable_NormalPriority=3;Be.unstable_Profiling=null;Be.unstable_UserBlockingPriority=2;Be.unstable_cancelCallback=function(e){e.callback=null};Be.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):d_=0<e?Math.floor(1e3/e):5};Be.unstable_getCurrentPriorityLevel=function(){return En};Be.unstable_next=function(e){switch(En){case 1:case 2:case 3:var t=3;break;default:t=En}var n=En;En=t;try{return e()}finally{En=n}};Be.unstable_requestPaint=function(){Ud=!0};Be.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=En;En=e;try{return t()}finally{En=n}};Be.unstable_scheduleCallback=function(e,t,n){var i=Be.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:s1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Cd(ks,e),Wi(ls)===null&&e===Wi(ks)&&(fl?(f_(dl),dl=-1):fl=!0,Nd(Ld,n-i))):(e.sortIndex=s,Cd(ls,e),hl||Dd||(hl=!0,Lr||(Lr=!0,Ur()))),e};Be.unstable_shouldYield=m_;Be.unstable_wrapCallback=function(e){var t=En;return function(){var n=En;En=t;try{return e.apply(this,arguments)}finally{En=n}}}});var v_=Xi((p3,__)=>{"use strict";__.exports=g_()});var x_=Xi(zn=>{"use strict";var a1=ul();function y_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Xs(){}var Bn={d:{f:Xs,r:function(){throw Error(y_(522))},D:Xs,C:Xs,L:Xs,m:Xs,X:Xs,S:Xs,M:Xs},p:0,findDOMNode:null},r1=Symbol.for("react.portal");function o1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r1,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var pl=a1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function nu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Bn;zn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(y_(299));return o1(e,t,null,n)};zn.flushSync=function(e){var t=pl.T,n=Bn.p;try{if(pl.T=null,Bn.p=2,e)return e()}finally{pl.T=t,Bn.p=n,Bn.d.f()}};zn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Bn.d.C(e,t))};zn.prefetchDNS=function(e){typeof e=="string"&&Bn.d.D(e)};zn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=nu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Bn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Bn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};zn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=nu(t.as,t.crossOrigin);Bn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Bn.d.M(e)};zn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=nu(n,t.crossOrigin);Bn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};zn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=nu(t.as,t.crossOrigin);Bn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Bn.d.m(e)};zn.requestFormReset=function(e){Bn.d.r(e)};zn.unstable_batchedUpdates=function(e,t){return e(t)};zn.useFormState=function(e,t,n){return pl.H.useFormState(e,t,n)};zn.useFormStatus=function(){return pl.H.useHostTransitionStatus()};zn.version="19.2.0"});var b_=Xi((g3,M_)=>{"use strict";function S_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S_)}catch(e){console.error(e)}}S_(),M_.exports=x_()});var OS=Xi(wh=>{"use strict";var on=v_(),Jv=ul(),l1=b_();function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Kv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tc(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E_(e){if(tc(e)!==e)throw Error(J(188))}function c1(e){var t=e.alternate;if(!t){if(t=tc(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return E_(s),e;if(a===i)return E_(s),t;a=a.sibling}throw Error(J(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function $v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=$v(e),t!==null)return t;e=e.sibling}return null}var Ie=Object.assign,u1=Symbol.for("react.element"),iu=Symbol.for("react.transitional.element"),Ml=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),ty=Symbol.for("react.strict_mode"),dp=Symbol.for("react.profiler"),ey=Symbol.for("react.consumer"),gs=Symbol.for("react.context"),lm=Symbol.for("react.forward_ref"),pp=Symbol.for("react.suspense"),mp=Symbol.for("react.suspense_list"),cm=Symbol.for("react.memo"),Ws=Symbol.for("react.lazy");Symbol.for("react.scope");var gp=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var h1=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var T_=Symbol.iterator;function ml(e){return e===null||typeof e!="object"?null:(e=T_&&e[T_]||e["@@iterator"],typeof e=="function"?e:null)}var f1=Symbol.for("react.client.reference");function _p(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===f1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zr:return"Fragment";case dp:return"Profiler";case ty:return"StrictMode";case pp:return"Suspense";case mp:return"SuspenseList";case gp:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ml:return"Portal";case gs:return e.displayName||"Context";case ey:return(e._context.displayName||"Context")+".Consumer";case lm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cm:return t=e.displayName||null,t!==null?t:_p(e.type)||"Memo";case Ws:t=e._payload,e=e._init;try{return _p(e(t))}catch{}}return null}var bl=Array.isArray,Ht=Jv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe=l1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ga={pending:!1,data:null,method:null,action:null},vp=[],Fr=-1;function Ki(e){return{current:e}}function pn(e){0>Fr||(e.current=vp[Fr],vp[Fr]=null,Fr--)}function Ce(e,t){Fr++,vp[Fr]=e.current,e.current=t}var Ji=Ki(null),Hl=Ki(null),na=Ki(null),Pu=Ki(null);function Bu(e,t){switch(Ce(na,t),Ce(Hl,e),Ce(Ji,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Lv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Lv(t),e=SS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pn(Ji),Ce(Ji,e)}function io(){pn(Ji),pn(Hl),pn(na)}function yp(e){e.memoizedState!==null&&Ce(Pu,e);var t=Ji.current,n=SS(t,e.type);t!==n&&(Ce(Hl,e),Ce(Ji,n))}function zu(e){Hl.current===e&&(pn(Ji),pn(Hl)),Pu.current===e&&(pn(Pu),Ql._currentValue=Ga)}var Id,A_;function za(e){if(Id===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Id=t&&t[1]||"",A_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Id+e+A_}var Od=!1;function Pd(e,t){if(!e||Od)return"";Od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{Od=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?za(n):""}function d1(e,t){switch(e.tag){case 26:case 27:case 5:return za(e.type);case 16:return za("Lazy");case 13:return e.child!==t&&t!==null?za("Suspense Fallback"):za("Suspense");case 19:return za("SuspenseList");case 0:case 15:return Pd(e.type,!1);case 11:return Pd(e.type.render,!1);case 1:return Pd(e.type,!0);case 31:return za("Activity");default:return""}}function w_(e){try{var t="",n=null;do t+=d1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var xp=Object.prototype.hasOwnProperty,um=on.unstable_scheduleCallback,Bd=on.unstable_cancelCallback,p1=on.unstable_shouldYield,m1=on.unstable_requestPaint,si=on.unstable_now,g1=on.unstable_getCurrentPriorityLevel,ny=on.unstable_ImmediatePriority,iy=on.unstable_UserBlockingPriority,Fu=on.unstable_NormalPriority,_1=on.unstable_LowPriority,sy=on.unstable_IdlePriority,v1=on.log,y1=on.unstable_setDisableYieldValue,ec=null,ai=null;function Qs(e){if(typeof v1=="function"&&y1(e),ai&&typeof ai.setStrictMode=="function")try{ai.setStrictMode(ec,e)}catch{}}var ri=Math.clz32?Math.clz32:M1,x1=Math.log,S1=Math.LN2;function M1(e){return e>>>=0,e===0?32:31-(x1(e)/S1|0)|0}var su=256,au=262144,ru=4194304;function Fa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Fa(i):(r&=o,r!==0?s=Fa(r):n||(n=o&~e,n!==0&&(s=Fa(n))))):(o=i&~a,o!==0?s=Fa(o):r!==0?s=Fa(r):n||(n=i&~e,n!==0&&(s=Fa(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function nc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function b1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ay(){var e=ru;return ru<<=1,(ru&62914560)===0&&(ru=4194304),e}function zd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ic(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function E1(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-ri(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&ry(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function ry(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ri(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function oy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ri(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function ly(e,t){var n=t&-t;return n=(n&42)!==0?1:hm(n),(n&(e.suspendedLanes|t))!==0?0:n}function hm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cy(){var e=pe.p;return e!==0?e:(e=window.event,e===void 0?32:LS(e.type))}function R_(e,t){var n=pe.p;try{return pe.p=e,t()}finally{pe.p=n}}var ma=Math.random().toString(36).slice(2),vn="__reactFiber$"+ma,Zn="__reactProps$"+ma,mo="__reactContainer$"+ma,Sp="__reactEvents$"+ma,T1="__reactListeners$"+ma,A1="__reactHandles$"+ma,C_="__reactResources$"+ma,sc="__reactMarker$"+ma;function dm(e){delete e[vn],delete e[Zn],delete e[Sp],delete e[T1],delete e[A1]}function Hr(e){var t=e[vn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bv(e);e!==null;){if(n=e[vn])return n;e=Bv(e)}return t}e=n,n=e.parentNode}return null}function go(e){if(e=e[vn]||e[mo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function El(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function Kr(e){var t=e[C_];return t||(t=e[C_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function dn(e){e[sc]=!0}var uy=new Set,hy={};function ja(e,t){so(e,t),so(e+"Capture",t)}function so(e,t){for(hy[e]=t,e=0;e<t.length;e++)uy.add(t[e])}var w1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),D_={},U_={};function R1(e){return xp.call(U_,e)?!0:xp.call(D_,e)?!1:w1.test(e)?U_[e]=!0:(D_[e]=!0,!1)}function Su(e,t,n){if(R1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ou(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function cs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function gi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function C1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mp(e){if(!e._valueTracker){var t=fy(e)?"checked":"value";e._valueTracker=C1(e,t,""+e[t])}}function dy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=fy(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Hu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var D1=/[\n"\\]/g;function yi(e){return e.replace(D1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gi(t)):e.value!==""+gi(t)&&(e.value=""+gi(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Ep(e,r,gi(t)):n!=null?Ep(e,r,gi(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+gi(o):e.removeAttribute("name")}function py(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Mp(e);return}n=n!=null?""+gi(n):"",t=t!=null?""+gi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Mp(e)}function Ep(e,t,n){t==="number"&&Hu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Qr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+gi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function my(e,t,n){if(t!=null&&(t=""+gi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+gi(n):""}function gy(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(bl(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=gi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Mp(e)}function ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var U1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function L_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||U1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function _y(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&L_(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&L_(e,a,t[a])}function pm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var L1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),N1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mu(e){return N1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _s(){}var Tp=null;function mm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vr=null,jr=null;function N_(e){var t=go(e);if(t&&(e=t.stateNode)){var n=e[Zn]||null;t:switch(e=t.stateNode,t.type){case"input":if(bp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Zn]||null;if(!s)throw Error(J(90));bp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&dy(i)}break t;case"textarea":my(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Qr(e,!!n.multiple,t,!1)}}}var Fd=!1;function vy(e,t,n){if(Fd)return e(t,n);Fd=!0;try{var i=e(t);return i}finally{if(Fd=!1,(Vr!==null||jr!==null)&&(bh(),Vr&&(t=Vr,e=jr,jr=Vr=null,N_(t),e)))for(t=0;t<e.length;t++)N_(e[t])}}function Vl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Zn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var Ms=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ap=!1;if(Ms)try{Nr={},Object.defineProperty(Nr,"passive",{get:function(){Ap=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Ap=!1}var Nr,js=null,gm=null,bu=null;function yy(){if(bu)return bu;var e,t=gm,n=t.length,i,s="value"in js?js.value:js.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return bu=s.slice(e,1<i?1-i:void 0)}function Eu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lu(){return!0}function I_(){return!1}function Jn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?lu:I_,this.isPropagationStopped=I_,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lu)},persist:function(){},isPersistent:lu}),t}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fh=Jn($a),ac=Ie({},$a,{view:0,detail:0}),I1=Jn(ac),Hd,Vd,gl,dh=Ie({},ac,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_m,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gl&&(gl&&e.type==="mousemove"?(Hd=e.screenX-gl.screenX,Vd=e.screenY-gl.screenY):Vd=Hd=0,gl=e),Hd)},movementY:function(e){return"movementY"in e?e.movementY:Vd}}),O_=Jn(dh),O1=Ie({},dh,{dataTransfer:0}),P1=Jn(O1),B1=Ie({},ac,{relatedTarget:0}),Gd=Jn(B1),z1=Ie({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),F1=Jn(z1),H1=Ie({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V1=Jn(H1),G1=Ie({},$a,{data:0}),P_=Jn(G1),k1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=W1[e])?!!t[e]:!1}function _m(){return q1}var Y1=Ie({},ac,{key:function(e){if(e.key){var t=k1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_m,charCode:function(e){return e.type==="keypress"?Eu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z1=Jn(Y1),J1=Ie({},dh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),B_=Jn(J1),K1=Ie({},ac,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_m}),Q1=Jn(K1),j1=Ie({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),$1=Jn(j1),tE=Ie({},dh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eE=Jn(tE),nE=Ie({},$a,{newState:0,oldState:0}),iE=Jn(nE),sE=[9,13,27,32],vm=Ms&&"CompositionEvent"in window,wl=null;Ms&&"documentMode"in document&&(wl=document.documentMode);var aE=Ms&&"TextEvent"in window&&!wl,xy=Ms&&(!vm||wl&&8<wl&&11>=wl),z_=" ",F_=!1;function Sy(e,t){switch(e){case"keyup":return sE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function My(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function rE(e,t){switch(e){case"compositionend":return My(t);case"keypress":return t.which!==32?null:(F_=!0,z_);case"textInput":return e=t.data,e===z_&&F_?null:e;default:return null}}function oE(e,t){if(Gr)return e==="compositionend"||!vm&&Sy(e,t)?(e=yy(),bu=gm=js=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xy&&t.locale!=="ko"?null:t.data;default:return null}}var lE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lE[e.type]:t==="textarea"}function by(e,t,n,i){Vr?jr?jr.push(i):jr=[i]:Vr=i,t=sh(t,"onChange"),0<t.length&&(n=new fh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Rl=null,Gl=null;function cE(e){vS(e,0)}function ph(e){var t=El(e);if(dy(t))return e}function V_(e,t){if(e==="change")return t}var Ey=!1;Ms&&(Ms?(uu="oninput"in document,uu||(kd=document.createElement("div"),kd.setAttribute("oninput","return;"),uu=typeof kd.oninput=="function"),cu=uu):cu=!1,Ey=cu&&(!document.documentMode||9<document.documentMode));var cu,uu,kd;function G_(){Rl&&(Rl.detachEvent("onpropertychange",Ty),Gl=Rl=null)}function Ty(e){if(e.propertyName==="value"&&ph(Gl)){var t=[];by(t,Gl,e,mm(e)),vy(cE,t)}}function uE(e,t,n){e==="focusin"?(G_(),Rl=t,Gl=n,Rl.attachEvent("onpropertychange",Ty)):e==="focusout"&&G_()}function hE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ph(Gl)}function fE(e,t){if(e==="click")return ph(t)}function dE(e,t){if(e==="input"||e==="change")return ph(t)}function pE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var li=typeof Object.is=="function"?Object.is:pE;function kl(e,t){if(li(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!xp.call(t,s)||!li(e[s],t[s]))return!1}return!0}function k_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function X_(e,t){var n=k_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=k_(n)}}function Ay(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ay(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hu(e.document)}return t}function ym(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mE=Ms&&"documentMode"in document&&11>=document.documentMode,kr=null,wp=null,Cl=null,Rp=!1;function W_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rp||kr==null||kr!==Hu(i)||(i=kr,"selectionStart"in i&&ym(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Cl&&kl(Cl,i)||(Cl=i,i=sh(wp,"onSelect"),0<i.length&&(t=new fh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=kr)))}function Ba(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xr={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},Xd={},Ry={};Ms&&(Ry=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function tr(e){if(Xd[e])return Xd[e];if(!Xr[e])return e;var t=Xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ry)return Xd[e]=t[n];return e}var Cy=tr("animationend"),Dy=tr("animationiteration"),Uy=tr("animationstart"),gE=tr("transitionrun"),_E=tr("transitionstart"),vE=tr("transitioncancel"),Ly=tr("transitionend"),Ny=new Map,Cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cp.push("scrollEnd");function Oi(e,t){Ny.set(e,t),ja(t,[e])}var Vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mi=[],Wr=0,xm=0;function mh(){for(var e=Wr,t=xm=Wr=0;t<e;){var n=mi[t];mi[t++]=null;var i=mi[t];mi[t++]=null;var s=mi[t];mi[t++]=null;var a=mi[t];if(mi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Iy(n,s,a)}}function gh(e,t,n,i){mi[Wr++]=e,mi[Wr++]=t,mi[Wr++]=n,mi[Wr++]=i,xm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Sm(e,t,n,i){return gh(e,t,n,i),Gu(e)}function er(e,t){return gh(e,null,null,t),Gu(e)}function Iy(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-ri(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Gu(e){if(50<zl)throw zl=0,Kp=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var qr={};function yE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,t,n,i){return new yE(e,t,n,i)}function Mm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ys(e,t){var n=e.alternate;return n===null?(n=ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Oy(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Tu(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Mm(e)&&(r=1);else if(typeof e=="string")r=MT(e,n,Ji.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case gp:return e=ni(31,n,t,s),e.elementType=gp,e.lanes=a,e;case zr:return ka(n.children,s,a,t);case ty:r=8,s|=24;break;case dp:return e=ni(12,n,t,s|2),e.elementType=dp,e.lanes=a,e;case pp:return e=ni(13,n,t,s),e.elementType=pp,e.lanes=a,e;case mp:return e=ni(19,n,t,s),e.elementType=mp,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gs:r=10;break t;case ey:r=9;break t;case lm:r=11;break t;case cm:r=14;break t;case Ws:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=ni(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function ka(e,t,n,i){return e=ni(7,e,i,t),e.lanes=n,e}function Wd(e,t,n){return e=ni(6,e,null,t),e.lanes=n,e}function Py(e){var t=ni(18,null,null,0);return t.stateNode=e,t}function qd(e,t,n){return t=ni(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var q_=new WeakMap;function xi(e,t){if(typeof e=="object"&&e!==null){var n=q_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:w_(t)},q_.set(e,t),t)}return{value:e,source:t,stack:w_(t)}}var Yr=[],Zr=0,ku=null,Xl=0,_i=[],vi=0,ha=null,qi=1,Yi="";function ps(e,t){Yr[Zr++]=Xl,Yr[Zr++]=ku,ku=e,Xl=t}function By(e,t,n){_i[vi++]=qi,_i[vi++]=Yi,_i[vi++]=ha,ha=e;var i=qi;e=Yi;var s=32-ri(i)-1;i&=~(1<<s),n+=1;var a=32-ri(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,qi=1<<32-ri(t)+s|n<<s|i,Yi=a+e}else qi=1<<a|n<<s|i,Yi=e}function bm(e){e.return!==null&&(ps(e,1),By(e,1,0))}function Em(e){for(;e===ku;)ku=Yr[--Zr],Yr[Zr]=null,Xl=Yr[--Zr],Yr[Zr]=null;for(;e===ha;)ha=_i[--vi],_i[vi]=null,Yi=_i[--vi],_i[vi]=null,qi=_i[--vi],_i[vi]=null}function zy(e,t){_i[vi++]=qi,_i[vi++]=Yi,_i[vi++]=ha,qi=t.id,Yi=t.overflow,ha=e}var yn=null,Ne=null,ae=!1,ia=null,Si=!1,Dp=Error(J(519));function fa(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wl(xi(t,e)),Dp}function Y_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[vn]=e,t[Zn]=i,n){case"dialog":te("cancel",t),te("close",t);break;case"iframe":case"object":case"embed":te("load",t);break;case"video":case"audio":for(n=0;n<Jl.length;n++)te(Jl[n],t);break;case"source":te("error",t);break;case"img":case"image":case"link":te("error",t),te("load",t);break;case"details":te("toggle",t);break;case"input":te("invalid",t),py(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":te("invalid",t);break;case"textarea":te("invalid",t),gy(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||xS(t.textContent,n)?(i.popover!=null&&(te("beforetoggle",t),te("toggle",t)),i.onScroll!=null&&te("scroll",t),i.onScrollEnd!=null&&te("scrollend",t),i.onClick!=null&&(t.onclick=_s),t=!0):t=!1,t||fa(e,!0)}function Z_(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:yn=yn.return}}function Ir(e){if(e!==yn)return!1;if(!ae)return Z_(e),ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||em(e.type,e.memoizedProps)),n=!n),n&&Ne&&fa(e),Z_(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ne=Pv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ne=Pv(e)}else t===27?(t=Ne,ga(e.type)?(e=am,am=null,Ne=e):Ne=t):Ne=yn?bi(e.stateNode.nextSibling):null;return!0}function Ya(){Ne=yn=null,ae=!1}function Yd(){var e=ia;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),ia=null),e}function Wl(e){ia===null?ia=[e]:ia.push(e)}var Up=Ki(null),nr=null,vs=null;function Ys(e,t,n){Ce(Up,t._currentValue),t._currentValue=n}function xs(e){e._currentValue=Up.current,pn(Up)}function Lp(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Np(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Lp(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(J(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Lp(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function _o(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=s.type;li(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Pu.current){if(r=s.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Ql):e=[Ql])}s=s.return}e!==null&&Np(t,e,n,i),t.flags|=262144}function Xu(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){nr=e,vs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xn(e){return Fy(nr,e)}function hu(e,t){return nr===null&&Za(e),Fy(e,t)}function Fy(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},vs===null){if(e===null)throw Error(J(308));vs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vs=vs.next=t;return n}var xE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},SE=on.unstable_scheduleCallback,ME=on.unstable_NormalPriority,$e={$$typeof:gs,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tm(){return{controller:new xE,data:new Map,refCount:0}}function rc(e){e.refCount--,e.refCount===0&&SE(ME,function(){e.controller.abort()})}var Dl=null,Ip=0,ro=0,$r=null;function bE(e,t){if(Dl===null){var n=Dl=[];Ip=0,ro=Km(),$r={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ip++,t.then(J_,J_),t}function J_(){if(--Ip===0&&Dl!==null){$r!==null&&($r.status="fulfilled");var e=Dl;Dl=null,ro=0,$r=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function EE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var K_=Ht.S;Ht.S=function(e,t){$x=si(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&bE(e,t),K_!==null&&K_(e,t)};var Xa=Ki(null);function Am(){var e=Xa.current;return e!==null?e:Re.pooledCache}function Au(e,t){t===null?Ce(Xa,Xa.current):Ce(Xa,t.pool)}function Hy(){var e=Am();return e===null?null:{parent:$e._currentValue,pool:e}}var vo=Error(J(460)),wm=Error(J(474)),_h=Error(J(542)),Wu={then:function(){}};function Q_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vy(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(_s,_s),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$_(e),e;default:if(typeof t.status=="string")t.then(_s,_s);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$_(e),e}throw Wa=t,vo}}function Ha(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Wa=n,vo):n}}var Wa=null;function j_(){if(Wa===null)throw Error(J(459));var e=Wa;return Wa=null,e}function $_(e){if(e===vo||e===_h)throw Error(J(483))}var to=null,ql=0;function fu(e){var t=ql;return ql+=1,to===null&&(to=[]),Vy(to,e,t)}function _l(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function du(e,t){throw t.$$typeof===u1?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gy(e){function t(u,g){if(e){var y=u.deletions;y===null?(u.deletions=[g],u.flags|=16):y.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function s(u,g){return u=ys(u,g),u.index=0,u.sibling=null,u}function a(u,g,y){return u.index=y,e?(y=u.alternate,y!==null?(y=y.index,y<g?(u.flags|=67108866,g):y):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function r(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,y,v){return g===null||g.tag!==6?(g=Wd(y,u.mode,v),g.return=u,g):(g=s(g,y),g.return=u,g)}function l(u,g,y,v){var w=y.type;return w===zr?h(u,g,y.props.children,v,y.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ws&&Ha(w)===g.type)?(g=s(g,y.props),_l(g,y),g.return=u,g):(g=Tu(y.type,y.key,y.props,null,u.mode,v),_l(g,y),g.return=u,g)}function c(u,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=qd(y,u.mode,v),g.return=u,g):(g=s(g,y.children||[]),g.return=u,g)}function h(u,g,y,v,w){return g===null||g.tag!==7?(g=ka(y,u.mode,v,w),g.return=u,g):(g=s(g,y),g.return=u,g)}function d(u,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Wd(""+g,u.mode,y),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case iu:return y=Tu(g.type,g.key,g.props,null,u.mode,y),_l(y,g),y.return=u,y;case Ml:return g=qd(g,u.mode,y),g.return=u,g;case Ws:return g=Ha(g),d(u,g,y)}if(bl(g)||ml(g))return g=ka(g,u.mode,y,null),g.return=u,g;if(typeof g.then=="function")return d(u,fu(g),y);if(g.$$typeof===gs)return d(u,hu(u,g),y);du(u,g)}return null}function f(u,g,y,v){var w=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return w!==null?null:o(u,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case iu:return y.key===w?l(u,g,y,v):null;case Ml:return y.key===w?c(u,g,y,v):null;case Ws:return y=Ha(y),f(u,g,y,v)}if(bl(y)||ml(y))return w!==null?null:h(u,g,y,v,null);if(typeof y.then=="function")return f(u,g,fu(y),v);if(y.$$typeof===gs)return f(u,g,hu(u,y),v);du(u,y)}return null}function p(u,g,y,v,w){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(y)||null,o(g,u,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case iu:return u=u.get(v.key===null?y:v.key)||null,l(g,u,v,w);case Ml:return u=u.get(v.key===null?y:v.key)||null,c(g,u,v,w);case Ws:return v=Ha(v),p(u,g,y,v,w)}if(bl(v)||ml(v))return u=u.get(y)||null,h(g,u,v,w,null);if(typeof v.then=="function")return p(u,g,y,fu(v),w);if(v.$$typeof===gs)return p(u,g,y,hu(g,v),w);du(g,v)}return null}function _(u,g,y,v){for(var w=null,C=null,R=g,L=g=0,E=null;R!==null&&L<y.length;L++){R.index>L?(E=R,R=null):E=R.sibling;var b=f(u,R,y[L],v);if(b===null){R===null&&(R=E);break}e&&R&&b.alternate===null&&t(u,R),g=a(b,g,L),C===null?w=b:C.sibling=b,C=b,R=E}if(L===y.length)return n(u,R),ae&&ps(u,L),w;if(R===null){for(;L<y.length;L++)R=d(u,y[L],v),R!==null&&(g=a(R,g,L),C===null?w=R:C.sibling=R,C=R);return ae&&ps(u,L),w}for(R=i(R);L<y.length;L++)E=p(R,u,L,y[L],v),E!==null&&(e&&E.alternate!==null&&R.delete(E.key===null?L:E.key),g=a(E,g,L),C===null?w=E:C.sibling=E,C=E);return e&&R.forEach(function(D){return t(u,D)}),ae&&ps(u,L),w}function S(u,g,y,v){if(y==null)throw Error(J(151));for(var w=null,C=null,R=g,L=g=0,E=null,b=y.next();R!==null&&!b.done;L++,b=y.next()){R.index>L?(E=R,R=null):E=R.sibling;var D=f(u,R,b.value,v);if(D===null){R===null&&(R=E);break}e&&R&&D.alternate===null&&t(u,R),g=a(D,g,L),C===null?w=D:C.sibling=D,C=D,R=E}if(b.done)return n(u,R),ae&&ps(u,L),w;if(R===null){for(;!b.done;L++,b=y.next())b=d(u,b.value,v),b!==null&&(g=a(b,g,L),C===null?w=b:C.sibling=b,C=b);return ae&&ps(u,L),w}for(R=i(R);!b.done;L++,b=y.next())b=p(R,u,L,b.value,v),b!==null&&(e&&b.alternate!==null&&R.delete(b.key===null?L:b.key),g=a(b,g,L),C===null?w=b:C.sibling=b,C=b);return e&&R.forEach(function(B){return t(u,B)}),ae&&ps(u,L),w}function m(u,g,y,v){if(typeof y=="object"&&y!==null&&y.type===zr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case iu:t:{for(var w=y.key;g!==null;){if(g.key===w){if(w=y.type,w===zr){if(g.tag===7){n(u,g.sibling),v=s(g,y.props.children),v.return=u,u=v;break t}}else if(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ws&&Ha(w)===g.type){n(u,g.sibling),v=s(g,y.props),_l(v,y),v.return=u,u=v;break t}n(u,g);break}else t(u,g);g=g.sibling}y.type===zr?(v=ka(y.props.children,u.mode,v,y.key),v.return=u,u=v):(v=Tu(y.type,y.key,y.props,null,u.mode,v),_l(v,y),v.return=u,u=v)}return r(u);case Ml:t:{for(w=y.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(u,g.sibling),v=s(g,y.children||[]),v.return=u,u=v;break t}else{n(u,g);break}else t(u,g);g=g.sibling}v=qd(y,u.mode,v),v.return=u,u=v}return r(u);case Ws:return y=Ha(y),m(u,g,y,v)}if(bl(y))return _(u,g,y,v);if(ml(y)){if(w=ml(y),typeof w!="function")throw Error(J(150));return y=w.call(y),S(u,g,y,v)}if(typeof y.then=="function")return m(u,g,fu(y),v);if(y.$$typeof===gs)return m(u,g,hu(u,y),v);du(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(n(u,g.sibling),v=s(g,y),v.return=u,u=v):(n(u,g),v=Wd(y,u.mode,v),v.return=u,u=v),r(u)):n(u,g)}return function(u,g,y,v){try{ql=0;var w=m(u,g,y,v);return to=null,w}catch(R){if(R===vo||R===_h)throw R;var C=ni(29,R,null,u.mode);return C.lanes=v,C.return=u,C}finally{}}}var Ja=Gy(!0),ky=Gy(!1),qs=!1;function Rm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Op(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(de&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Gu(e),Iy(e,null,n),t}return gh(e,i,t,n),Gu(e)}function Ul(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,oy(e,n)}}function Zd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Pp=!1;function Ll(){if(Pp){var e=$r;if(e!==null)throw e}}function Nl(e,t,n,i){Pp=!1;var s=e.updateQueue;qs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,h=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(ne&f)===f:(i&f)===f){f!==0&&f===ro&&(Pp=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,S=o;f=t;var m=n;switch(S.tag){case 1:if(_=S.payload,typeof _=="function"){d=_.call(m,d,f);break t}d=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,f=typeof _=="function"?_.call(m,d,f):_,f==null)break t;d=Ie({},d,f);break t;case 2:qs=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),pa|=r,e.lanes=r,e.memoizedState=d}}function Xy(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function Wy(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xy(n[e],t)}var oo=Ki(null),qu=Ki(0);function tv(e,t){e=As,Ce(qu,e),Ce(oo,t),As=e|t.baseLanes}function Bp(){Ce(qu,As),Ce(oo,oo.current)}function Cm(){As=qu.current,pn(oo),pn(qu)}var ci=Ki(null),Mi=null;function Zs(e){var t=e.alternate;Ce(Ze,Ze.current&1),Ce(ci,e),Mi===null&&(t===null||oo.current!==null||t.memoizedState!==null)&&(Mi=e)}function zp(e){Ce(Ze,Ze.current),Ce(ci,e),Mi===null&&(Mi=e)}function qy(e){e.tag===22?(Ce(Ze,Ze.current),Ce(ci,e),Mi===null&&(Mi=e)):Js(e)}function Js(){Ce(Ze,Ze.current),Ce(ci,ci.current)}function ei(e){pn(ci),Mi===e&&(Mi=null),pn(Ze)}var Ze=Ki(0);function Yu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||im(n)||sm(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bs=0,Yt=null,Te=null,Qe=null,Zu=!1,eo=!1,Ka=!1,Ju=0,Yl=0,no=null,TE=0;function Xe(){throw Error(J(321))}function Dm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!li(e[n],t[n]))return!1;return!0}function Um(e,t,n,i,s,a){return bs=a,Yt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ht.H=e===null||e.memoizedState===null?bx:Gm,Ka=!1,a=n(i,s),Ka=!1,eo&&(a=Zy(t,n,i,s)),Yy(e),a}function Yy(e){Ht.H=Zl;var t=Te!==null&&Te.next!==null;if(bs=0,Qe=Te=Yt=null,Zu=!1,Yl=0,no=null,t)throw Error(J(300));e===null||tn||(e=e.dependencies,e!==null&&Xu(e)&&(tn=!0))}function Zy(e,t,n,i){Yt=e;var s=0;do{if(eo&&(no=null),Yl=0,eo=!1,25<=s)throw Error(J(301));if(s+=1,Qe=Te=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ht.H=Ex,a=t(n,i)}while(eo);return a}function AE(){var e=Ht.H,t=e.useState()[0];return t=typeof t.then=="function"?oc(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(Yt.flags|=1024),t}function Lm(){var e=Ju!==0;return Ju=0,e}function Nm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Im(e){if(Zu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zu=!1}bs=0,Qe=Te=Yt=null,eo=!1,Yl=Ju=0,no=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Yt.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Je(){if(Te===null){var e=Yt.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Qe===null?Yt.memoizedState:Qe.next;if(t!==null)Qe=t,Te=e;else{if(e===null)throw Yt.alternate===null?Error(J(467)):Error(J(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Qe===null?Yt.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function vh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oc(e){var t=Yl;return Yl+=1,no===null&&(no=[]),e=Vy(no,e,t),t=Yt,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,Ht.H=t===null||t.memoizedState===null?bx:Gm),e}function yh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oc(e);if(e.$$typeof===gs)return xn(e)}throw Error(J(438,String(e)))}function Om(e){var t=null,n=Yt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Yt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vh(),Yt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=h1;return t.index++,n}function Es(e,t){return typeof t=="function"?t(e):t}function wu(e){var t=Je();return Pm(t,Te,e)}function Pm(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(ne&d)===d:(bs&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===ro&&(h=!0);else if((bs&f)===f){c=c.next,f===ro&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Yt.lanes|=f,pa|=f;d=c.action,Ka&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Yt.lanes|=d,pa|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!li(a,e.memoizedState)&&(tn=!0,h&&(n=$r,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Jd(e){var t=Je(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);li(a,t.memoizedState)||(tn=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Jy(e,t,n){var i=Yt,s=Je(),a=ae;if(a){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!li((Te||s).memoizedState,n);if(r&&(s.memoizedState=n,tn=!0),s=s.queue,Bm(jy.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Qe!==null&&Qe.memoizedState.tag&1){if(i.flags|=2048,lo(9,{destroy:void 0},Qy.bind(null,i,s,n,t),null),Re===null)throw Error(J(349));a||(bs&127)!==0||Ky(i,t,n)}return n}function Ky(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Yt.updateQueue,t===null?(t=vh(),Yt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qy(e,t,n,i){t.value=n,t.getSnapshot=i,$y(t)&&tx(e)}function jy(e,t,n){return n(function(){$y(t)&&tx(e)})}function $y(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!li(e,n)}catch{return!0}}function tx(e){var t=er(e,2);t!==null&&Yn(t,e,2)}function Fp(e){var t=Fn();if(typeof e=="function"){var n=e;if(e=n(),Ka){Qs(!0);try{n()}finally{Qs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:e},t}function ex(e,t,n,i){return e.baseState=n,Pm(e,Te,typeof i=="function"?i:Es)}function wE(e,t,n,i,s){if(Sh(e))throw Error(J(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ht.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,nx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function nx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ht.T,r={};Ht.T=r;try{var o=n(s,i),l=Ht.S;l!==null&&l(r,o),ev(e,t,o)}catch(c){Hp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ht.T=a}}else try{a=n(s,i),ev(e,t,a)}catch(c){Hp(e,t,c)}}function ev(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){nv(e,t,i)},function(i){return Hp(e,t,i)}):nv(e,t,n)}function nv(e,t,n){t.status="fulfilled",t.value=n,ix(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,nx(e,n)))}function Hp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ix(t),t=t.next;while(t!==i)}e.action=null}function ix(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function sx(e,t){return t}function iv(e,t){if(ae){var n=Re.formState;if(n!==null){t:{var i=Yt;if(ae){if(Ne){e:{for(var s=Ne,a=Si;s.nodeType!==8;){if(!a){s=null;break e}if(s=bi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ne=bi(s.nextSibling),i=s.data==="F!";break t}}fa(i)}i=!1}i&&(t=n[0])}}return n=Fn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sx,lastRenderedState:t},n.queue=i,n=xx.bind(null,Yt,i),i.dispatch=n,i=Fp(!1),a=Vm.bind(null,Yt,!1,i.queue),i=Fn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=wE.bind(null,Yt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function sv(e){var t=Je();return ax(t,Te,e)}function ax(e,t,n){if(t=Pm(e,t,sx)[0],e=wu(Es)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=oc(t)}catch(r){throw r===vo?_h:r}else i=t;t=Je();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Yt.flags|=2048,lo(9,{destroy:void 0},RE.bind(null,s,n),null)),[i,a,e]}function RE(e,t){e.action=t}function av(e){var t=Je(),n=Te;if(n!==null)return ax(t,n,e);Je(),t=t.memoizedState,n=Je();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function lo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Yt.updateQueue,t===null&&(t=vh(),Yt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function rx(){return Je().memoizedState}function Ru(e,t,n,i){var s=Fn();Yt.flags|=e,s.memoizedState=lo(1|t,{destroy:void 0},n,i===void 0?null:i)}function xh(e,t,n,i){var s=Je();i=i===void 0?null:i;var a=s.memoizedState.inst;Te!==null&&i!==null&&Dm(i,Te.memoizedState.deps)?s.memoizedState=lo(t,a,n,i):(Yt.flags|=e,s.memoizedState=lo(1|t,a,n,i))}function rv(e,t){Ru(8390656,8,e,t)}function Bm(e,t){xh(2048,8,e,t)}function CE(e){Yt.flags|=4;var t=Yt.updateQueue;if(t===null)t=vh(),Yt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ox(e){var t=Je().memoizedState;return CE({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function lx(e,t){return xh(4,2,e,t)}function cx(e,t){return xh(4,4,e,t)}function ux(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hx(e,t,n){n=n!=null?n.concat([e]):null,xh(4,4,ux.bind(null,t,e),n)}function zm(){}function fx(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Dm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function dx(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Dm(t,i[1]))return i[0];if(i=e(),Ka){Qs(!0);try{e()}finally{Qs(!1)}}return n.memoizedState=[i,t],i}function Fm(e,t,n){return n===void 0||(bs&1073741824)!==0&&(ne&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=eS(),Yt.lanes|=e,pa|=e,n)}function px(e,t,n,i){return li(n,t)?n:oo.current!==null?(e=Fm(e,n,i),li(e,t)||(tn=!0),e):(bs&42)===0||(bs&1073741824)!==0&&(ne&261930)===0?(tn=!0,e.memoizedState=n):(e=eS(),Yt.lanes|=e,pa|=e,t)}function mx(e,t,n,i,s){var a=pe.p;pe.p=a!==0&&8>a?a:8;var r=Ht.T,o={};Ht.T=o,Vm(e,!1,t,n);try{var l=s(),c=Ht.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=EE(l,i);Il(e,t,h,oi(e))}else Il(e,t,i,oi(e))}catch(d){Il(e,t,{then:function(){},status:"rejected",reason:d},oi())}finally{pe.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ht.T=r}}function DE(){}function Vp(e,t,n,i){if(e.tag!==5)throw Error(J(476));var s=gx(e).queue;mx(e,s,t,Ga,n===null?DE:function(){return _x(e),n(i)})}function gx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ga,baseState:Ga,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:Ga},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _x(e){var t=gx(e);t.next===null&&(t=e.alternate.memoizedState),Il(e,t.next.queue,{},oi())}function Hm(){return xn(Ql)}function vx(){return Je().memoizedState}function yx(){return Je().memoizedState}function UE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=oi();e=sa(n);var i=aa(t,e,n);i!==null&&(Yn(i,t,n),Ul(i,t,n)),t={cache:Tm()},e.payload=t;return}t=t.return}}function LE(e,t,n){var i=oi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Sh(e)?Sx(t,n):(n=Sm(e,t,n,i),n!==null&&(Yn(n,e,i),Mx(n,t,i)))}function xx(e,t,n){var i=oi();Il(e,t,n,i)}function Il(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sh(e))Sx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,li(o,r))return gh(e,t,s,0),Re===null&&mh(),!1}catch{}finally{}if(n=Sm(e,t,s,i),n!==null)return Yn(n,e,i),Mx(n,t,i),!0}return!1}function Vm(e,t,n,i){if(i={lane:2,revertLane:Km(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Sh(e)){if(t)throw Error(J(479))}else t=Sm(e,n,i,2),t!==null&&Yn(t,e,2)}function Sh(e){var t=e.alternate;return e===Yt||t!==null&&t===Yt}function Sx(e,t){eo=Zu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,oy(e,n)}}var Zl={readContext:xn,use:yh,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};Zl.useEffectEvent=Xe;var bx={readContext:xn,use:yh,useCallback:function(e,t){return Fn().memoizedState=[e,t===void 0?null:t],e},useContext:xn,useEffect:rv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ru(4194308,4,ux.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ru(4194308,4,e,t)},useInsertionEffect:function(e,t){Ru(4,2,e,t)},useMemo:function(e,t){var n=Fn();t=t===void 0?null:t;var i=e();if(Ka){Qs(!0);try{e()}finally{Qs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Fn();if(n!==void 0){var s=n(t);if(Ka){Qs(!0);try{n(t)}finally{Qs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=LE.bind(null,Yt,e),[i.memoizedState,e]},useRef:function(e){var t=Fn();return e={current:e},t.memoizedState=e},useState:function(e){e=Fp(e);var t=e.queue,n=xx.bind(null,Yt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zm,useDeferredValue:function(e,t){var n=Fn();return Fm(n,e,t)},useTransition:function(){var e=Fp(!1);return e=mx.bind(null,Yt,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Yt,s=Fn();if(ae){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),Re===null)throw Error(J(349));(ne&127)!==0||Ky(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,rv(jy.bind(null,i,a,e),[e]),i.flags|=2048,lo(9,{destroy:void 0},Qy.bind(null,i,a,n,t),null),n},useId:function(){var e=Fn(),t=Re.identifierPrefix;if(ae){var n=Yi,i=qi;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ju++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=TE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hm,useFormState:iv,useActionState:iv,useOptimistic:function(e){var t=Fn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vm.bind(null,Yt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Om,useCacheRefresh:function(){return Fn().memoizedState=UE.bind(null,Yt)},useEffectEvent:function(e){var t=Fn(),n={impl:e};return t.memoizedState=n,function(){if((de&2)!==0)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},Gm={readContext:xn,use:yh,useCallback:fx,useContext:xn,useEffect:Bm,useImperativeHandle:hx,useInsertionEffect:lx,useLayoutEffect:cx,useMemo:dx,useReducer:wu,useRef:rx,useState:function(){return wu(Es)},useDebugValue:zm,useDeferredValue:function(e,t){var n=Je();return px(n,Te.memoizedState,e,t)},useTransition:function(){var e=wu(Es)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:oc(e),t]},useSyncExternalStore:Jy,useId:vx,useHostTransitionStatus:Hm,useFormState:sv,useActionState:sv,useOptimistic:function(e,t){var n=Je();return ex(n,Te,e,t)},useMemoCache:Om,useCacheRefresh:yx};Gm.useEffectEvent=ox;var Ex={readContext:xn,use:yh,useCallback:fx,useContext:xn,useEffect:Bm,useImperativeHandle:hx,useInsertionEffect:lx,useLayoutEffect:cx,useMemo:dx,useReducer:Jd,useRef:rx,useState:function(){return Jd(Es)},useDebugValue:zm,useDeferredValue:function(e,t){var n=Je();return Te===null?Fm(n,e,t):px(n,Te.memoizedState,e,t)},useTransition:function(){var e=Jd(Es)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:oc(e),t]},useSyncExternalStore:Jy,useId:vx,useHostTransitionStatus:Hm,useFormState:av,useActionState:av,useOptimistic:function(e,t){var n=Je();return Te!==null?ex(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Om,useCacheRefresh:yx};Ex.useEffectEvent=ox;function Kd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=oi(),s=sa(i);s.payload=t,n!=null&&(s.callback=n),t=aa(e,s,i),t!==null&&(Yn(t,e,i),Ul(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=oi(),s=sa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=aa(e,s,i),t!==null&&(Yn(t,e,i),Ul(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oi(),i=sa(n);i.tag=2,t!=null&&(i.callback=t),t=aa(e,i,n),t!==null&&(Yn(t,e,n),Ul(t,e,n))}};function ov(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!kl(n,i)||!kl(s,a):!0}function lv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Gp.enqueueReplaceState(t,t.state,null)}function Qa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ie({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Tx(e){Vu(e)}function Ax(e){console.error(e)}function wx(e){Vu(e)}function Ku(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function cv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function kp(e,t,n){return n=sa(n),n.tag=3,n.payload={element:null},n.callback=function(){Ku(e,t)},n}function Rx(e){return e=sa(e),e.tag=3,e}function Cx(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){cv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){cv(t,n,i),typeof s!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function NE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&_o(t,n,s,!0),n=ci.current,n!==null){switch(n.tag){case 31:case 13:return Mi===null?eh():n.alternate===null&&We===0&&(We=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Wu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),op(e,i,s)),!1;case 22:return n.flags|=65536,i===Wu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),op(e,i,s)),!1}throw Error(J(435,n.tag))}return op(e,i,s),eh(),!1}if(ae)return t=ci.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Dp&&(e=Error(J(422),{cause:i}),Wl(xi(e,n)))):(i!==Dp&&(t=Error(J(423),{cause:i}),Wl(xi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=xi(i,n),s=kp(e.stateNode,i,s),Zd(e,s),We!==4&&(We=2)),!1;var a=Error(J(520),{cause:i});if(a=xi(a,n),Bl===null?Bl=[a]:Bl.push(a),We!==4&&(We=2),t===null)return!0;i=xi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=kp(n.stateNode,i,e),Zd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ra===null||!ra.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Rx(s),Cx(s,e,n,i),Zd(n,s),!1}n=n.return}while(n!==null);return!1}var km=Error(J(461)),tn=!1;function _n(e,t,n,i){t.child=e===null?ky(t,null,n,i):Ja(t,e.child,n,i)}function uv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Za(t),i=Um(e,t,n,r,a,s),o=Lm(),e!==null&&!tn?(Nm(e,t,s),Ts(e,t,s)):(ae&&o&&bm(t),t.flags|=1,_n(e,t,i,s),t.child)}function hv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Mm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Dx(e,t,a,i,s)):(e=Tu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Xm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:kl,n(r,i)&&e.ref===t.ref)return Ts(e,t,s)}return t.flags|=1,e=ys(a,i),e.ref=t.ref,e.return=t,t.child=e}function Dx(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(kl(a,i)&&e.ref===t.ref)if(tn=!1,t.pendingProps=i=a,Xm(e,s))(e.flags&131072)!==0&&(tn=!0);else return t.lanes=e.lanes,Ts(e,t,s)}return Xp(e,t,n,i,s)}function Ux(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return fv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Au(t,a!==null?a.cachePool:null),a!==null?tv(t,a):Bp(),qy(t);else return i=t.lanes=536870912,fv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Au(t,a.cachePool),tv(t,a),Js(t),t.memoizedState=null):(e!==null&&Au(t,null),Bp(),Js(t));return _n(e,t,s,n),t.child}function Tl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fv(e,t,n,i,s){var a=Am();return a=a===null?null:{parent:$e._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Au(t,null),Bp(),qy(t),e!==null&&_o(e,t,i,!0),t.childLanes=s,null}function Cu(e,t){return t=Qu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dv(e,t,n){return Ja(t,e.child,null,n),e=Cu(t,t.pendingProps),e.flags|=2,ei(t),t.memoizedState=null,e}function IE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ae){if(i.mode==="hidden")return e=Cu(t,i),t.lanes=536870912,Tl(null,e);if(zp(t),(e=Ne)?(e=bS(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},n=Py(e),n.return=t,t.child=n,yn=t,Ne=null)):e=null,e===null)throw fa(t);return t.lanes=536870912,null}return Cu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(zp(t),s)if(t.flags&256)t.flags&=-257,t=dv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(tn||_o(e,t,n,!1),s=(n&e.childLanes)!==0,tn||s){if(i=Re,i!==null&&(r=ly(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,er(e,r),Yn(i,e,r),km;eh(),t=dv(e,t,n)}else e=a.treeContext,Ne=bi(r.nextSibling),yn=t,ae=!0,ia=null,Si=!1,e!==null&&zy(t,e),t=Cu(t,i),t.flags|=4096;return t}return e=ys(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Du(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Xp(e,t,n,i,s){return Za(t),n=Um(e,t,n,i,void 0,s),i=Lm(),e!==null&&!tn?(Nm(e,t,s),Ts(e,t,s)):(ae&&i&&bm(t),t.flags|=1,_n(e,t,n,s),t.child)}function pv(e,t,n,i,s,a){return Za(t),t.updateQueue=null,n=Zy(t,i,n,s),Yy(e),i=Lm(),e!==null&&!tn?(Nm(e,t,a),Ts(e,t,a)):(ae&&i&&bm(t),t.flags|=1,_n(e,t,n,a),t.child)}function mv(e,t,n,i,s){if(Za(t),t.stateNode===null){var a=qr,r=n.contextType;typeof r=="object"&&r!==null&&(a=xn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Rm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?xn(r):qr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Kd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Gp.enqueueReplaceState(a,a.state,null),Nl(t,i,a,s),Ll(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Qa(n,o);a.props=l;var c=a.context,h=n.contextType;r=qr,typeof h=="object"&&h!==null&&(r=xn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&lv(t,a,i,r),qs=!1;var f=t.memoizedState;a.state=f,Nl(t,i,a,s),Ll(),c=t.memoizedState,o||f!==c||qs?(typeof d=="function"&&(Kd(t,n,d,i),c=t.memoizedState),(l=qs||ov(t,n,l,i,f,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Op(e,t),r=t.memoizedProps,h=Qa(n,r),a.props=h,d=t.pendingProps,f=a.context,c=n.contextType,l=qr,typeof c=="object"&&c!==null&&(l=xn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&lv(t,a,i,l),qs=!1,f=t.memoizedState,a.state=f,Nl(t,i,a,s),Ll();var p=t.memoizedState;r!==d||f!==p||qs||e!==null&&e.dependencies!==null&&Xu(e.dependencies)?(typeof o=="function"&&(Kd(t,n,o,i),p=t.memoizedState),(h=qs||ov(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&Xu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Du(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Ja(t,e.child,null,s),t.child=Ja(t,null,n,s)):_n(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Ts(e,t,s),e}function gv(e,t,n,i){return Ya(),t.flags|=256,_n(e,t,n,i),t.child}var Qd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jd(e){return{baseLanes:e,cachePool:Hy()}}function $d(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ii),e}function Lx(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ae){if(s?Zs(t):Js(t),(e=Ne)?(e=bS(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},n=Py(e),n.return=t,t.child=n,yn=t,Ne=null)):e=null,e===null)throw fa(t);return sm(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Js(t),s=t.mode,o=Qu({mode:"hidden",children:o},s),i=ka(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=jd(n),i.childLanes=$d(e,r,n),t.memoizedState=Qd,Tl(null,i)):(Zs(t),Wp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Zs(t),t.flags&=-257,t=tp(e,t,n)):t.memoizedState!==null?(Js(t),t.child=e.child,t.flags|=128,t=null):(Js(t),o=i.fallback,s=t.mode,i=Qu({mode:"visible",children:i.children},s),o=ka(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Ja(t,e.child,null,n),i=t.child,i.memoizedState=jd(n),i.childLanes=$d(e,r,n),t.memoizedState=Qd,t=Tl(null,i));else if(Zs(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(J(419)),i.stack="",i.digest=r,Wl({value:i,source:null,stack:null}),t=tp(e,t,n)}else if(tn||_o(e,t,n,!1),r=(n&e.childLanes)!==0,tn||r){if(r=Re,r!==null&&(i=ly(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,er(e,i),Yn(r,e,i),km;im(o)||eh(),t=tp(e,t,n)}else im(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ne=bi(o.nextSibling),yn=t,ae=!0,ia=null,Si=!1,e!==null&&zy(t,e),t=Wp(t,i.children),t.flags|=4096);return t}return s?(Js(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=ys(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ys(c,o):(o=ka(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Tl(null,i),i=t.child,o=e.child.memoizedState,o===null?o=jd(n):(s=o.cachePool,s!==null?(l=$e._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=Hy(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=$d(e,r,n),t.memoizedState=Qd,Tl(e.child,i)):(Zs(t),n=e.child,e=n.sibling,n=ys(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Wp(e,t){return t=Qu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Qu(e,t){return e=ni(22,e,null,t),e.lanes=0,e}function tp(e,t,n){return Ja(t,e.child,null,n),e=Wp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _v(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Lp(e.return,t,n)}function ep(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Nx(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Ze.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ce(Ze,r),_n(e,t,i,n),i=ae?Xl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_v(e,n,t);else if(e.tag===19)_v(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Yu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ep(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Yu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ep(t,!0,n,null,a,i);break;case"together":ep(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ts(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(_o(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=ys(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ys(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xu(e)))}function OE(e,t,n){switch(t.tag){case 3:Bu(t,t.stateNode.containerInfo),Ys(t,$e,e.memoizedState.cache),Ya();break;case 27:case 5:yp(t);break;case 4:Bu(t,t.stateNode.containerInfo);break;case 10:Ys(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,zp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Zs(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Lx(e,t,n):(Zs(t),e=Ts(e,t,n),e!==null?e.sibling:null);Zs(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(_o(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Nx(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ce(Ze,Ze.current),i)break;return null;case 22:return t.lanes=0,Ux(e,t,n,t.pendingProps);case 24:Ys(t,$e,e.memoizedState.cache)}return Ts(e,t,n)}function Ix(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tn=!0;else{if(!Xm(e,n)&&(t.flags&128)===0)return tn=!1,OE(e,t,n);tn=(e.flags&131072)!==0}else tn=!1,ae&&(t.flags&1048576)!==0&&By(t,Xl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ha(t.elementType),t.type=e,typeof e=="function")Mm(e)?(i=Qa(e,i),t.tag=1,t=mv(null,t,e,i,n)):(t.tag=0,t=Xp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===lm){t.tag=11,t=uv(null,t,e,i,n);break t}else if(s===cm){t.tag=14,t=hv(null,t,e,i,n);break t}}throw t=_p(e)||e,Error(J(306,t,""))}}return t;case 0:return Xp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Qa(i,t.pendingProps),mv(e,t,i,s,n);case 3:t:{if(Bu(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Op(e,t),Nl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ys(t,$e,i),i!==a.cache&&Np(t,[$e],n,!0),Ll(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=gv(e,t,i,n);break t}else if(i!==s){s=xi(Error(J(424)),t),Wl(s),t=gv(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=bi(e.firstChild),yn=t,ae=!0,ia=null,Si=!0,n=ky(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ya(),i===s){t=Ts(e,t,n);break t}_n(e,t,i,n)}t=t.child}return t;case 26:return Du(e,t),e===null?(n=Fv(t.type,null,t.pendingProps,null))?t.memoizedState=n:ae||(n=t.type,e=t.pendingProps,i=ah(na.current).createElement(n),i[vn]=t,i[Zn]=e,Sn(i,n,e),dn(i),t.stateNode=i):t.memoizedState=Fv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return yp(t),e===null&&ae&&(i=t.stateNode=ES(t.type,t.pendingProps,na.current),yn=t,Si=!0,s=Ne,ga(t.type)?(am=s,Ne=bi(i.firstChild)):Ne=s),_n(e,t,t.pendingProps.children,n),Du(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ae&&((s=i=Ne)&&(i=cT(i,t.type,t.pendingProps,Si),i!==null?(t.stateNode=i,yn=t,Ne=bi(i.firstChild),Si=!1,s=!0):s=!1),s||fa(t)),yp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,em(s,a)?i=null:r!==null&&em(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Um(e,t,AE,null,null,n),Ql._currentValue=s),Du(e,t),_n(e,t,i,n),t.child;case 6:return e===null&&ae&&((e=n=Ne)&&(n=uT(n,t.pendingProps,Si),n!==null?(t.stateNode=n,yn=t,Ne=null,e=!0):e=!1),e||fa(t)),null;case 13:return Lx(e,t,n);case 4:return Bu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ja(t,null,i,n):_n(e,t,i,n),t.child;case 11:return uv(e,t,t.type,t.pendingProps,n);case 7:return _n(e,t,t.pendingProps,n),t.child;case 8:return _n(e,t,t.pendingProps.children,n),t.child;case 12:return _n(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ys(t,t.type,i.value),_n(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Za(t),s=xn(s),i=i(s),t.flags|=1,_n(e,t,i,n),t.child;case 14:return hv(e,t,t.type,t.pendingProps,n);case 15:return Dx(e,t,t.type,t.pendingProps,n);case 19:return Nx(e,t,n);case 31:return IE(e,t,n);case 22:return Ux(e,t,n,t.pendingProps);case 24:return Za(t),i=xn($e),e===null?(s=Am(),s===null&&(s=Re,a=Tm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Rm(t),Ys(t,$e,s)):((e.lanes&n)!==0&&(Op(e,t),Nl(t,null,null,n),Ll()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ys(t,$e,i)):(i=a.cache,Ys(t,$e,i),i!==s.cache&&Np(t,[$e],n,!0))),_n(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function us(e){e.flags|=4}function np(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(sS())e.flags|=8192;else throw Wa=Wu,wm}else e.flags&=-16777217}function vv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wS(t))if(sS())e.flags|=8192;else throw Wa=Wu,wm}function pu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ay():536870912,e.lanes|=t,co|=t)}function vl(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function PE(e,t,n){var i=t.pendingProps;switch(Em(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),xs($e),io(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ir(t)?us(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yd())),Le(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(us(t),a!==null?(Le(t),vv(t,a)):(Le(t),np(t,s,null,i,n))):a?a!==e.memoizedState?(us(t),Le(t),vv(t,a)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&us(t),Le(t),np(t,s,e,i,n)),null;case 27:if(zu(t),n=na.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Le(t),null}e=Ji.current,Ir(t)?Y_(t,e):(e=ES(s,i,n),t.stateNode=e,us(t))}return Le(t),null;case 5:if(zu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Le(t),null}if(a=Ji.current,Ir(t))Y_(t,a);else{var r=ah(na.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[vn]=t,a[Zn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(Sn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&us(t)}}return Le(t),np(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&us(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=na.current,Ir(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=yn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[vn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||xS(e.nodeValue,n)),e||fa(t,!0)}else e=ah(e).createTextNode(i),e[vn]=t,t.stateNode=e}return Le(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ir(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[vn]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else n=Yd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ei(t),t):(ei(t),null);if((t.flags&128)!==0)throw Error(J(558))}return Le(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ir(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(J(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[vn]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),s=!1}else s=Yd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(ei(t),t):(ei(t),null)}return ei(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),pu(t,t.updateQueue),Le(t),null);case 4:return io(),e===null&&Qm(t.stateNode.containerInfo),Le(t),null;case 10:return xs(t.type),Le(t),null;case 19:if(pn(Ze),i=t.memoizedState,i===null)return Le(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)vl(i,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Yu(e),a!==null){for(t.flags|=128,vl(i,!1),e=a.updateQueue,t.updateQueue=e,pu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Oy(n,e),n=n.sibling;return Ce(Ze,Ze.current&1|2),ae&&ps(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&si()>$u&&(t.flags|=128,s=!0,vl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Yu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,pu(t,e),vl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ae)return Le(t),null}else 2*si()-i.renderingStartTime>$u&&n!==536870912&&(t.flags|=128,s=!0,vl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=si(),e.sibling=null,n=Ze.current,Ce(Ze,s?n&1|2:n&1),ae&&ps(t,i.treeForkCount),e):(Le(t),null);case 22:case 23:return ei(t),Cm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&pu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&pn(Xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xs($e),Le(t),null;case 25:return null;case 30:return null}throw Error(J(156,t.tag))}function BE(e,t){switch(Em(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xs($e),io(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zu(t),null;case 31:if(t.memoizedState!==null){if(ei(t),t.alternate===null)throw Error(J(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ei(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pn(Ze),null;case 4:return io(),null;case 10:return xs(t.type),null;case 22:case 23:return ei(t),Cm(),e!==null&&pn(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xs($e),null;case 25:return null;default:return null}}function Ox(e,t){switch(Em(t),t.tag){case 3:xs($e),io();break;case 26:case 27:case 5:zu(t);break;case 4:io();break;case 31:t.memoizedState!==null&&ei(t);break;case 13:ei(t);break;case 19:pn(Ze);break;case 10:xs(t.type);break;case 22:case 23:ei(t),Cm(),e!==null&&pn(Xa);break;case 24:xs($e)}}function lc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){xe(t,t.return,o)}}function da(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){xe(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){xe(t,t.return,h)}}function Px(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wy(t,n)}catch(i){xe(e,e.return,i)}}}function Bx(e,t,n){n.props=Qa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){xe(e,t,i)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){xe(e,t,s)}}function Zi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){xe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){xe(e,t,s)}else n.current=null}function zx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){xe(e,e.return,s)}}function ip(e,t,n){try{var i=e.stateNode;iT(i,e.type,n,t),i[Zn]=t}catch(s){xe(e,e.return,s)}}function Fx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function sp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_s));else if(i!==4&&(i===27&&ga(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(qp(e,t,n),e=e.sibling;e!==null;)qp(e,t,n),e=e.sibling}function ju(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ga(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ju(e,t,n),e=e.sibling;e!==null;)ju(e,t,n),e=e.sibling}function Hx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Sn(t,i,n),t[vn]=e,t[Zn]=n}catch(a){xe(e,e.return,a)}}var ms=!1,je=!1,ap=!1,yv=typeof WeakSet=="function"?WeakSet:Set,fn=null;function zE(e,t){if(e=e.containerInfo,$p=ch,e=wy(e),ym(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(o=r+s),d!==a||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===s&&(o=r),f===a&&++h===i&&(l=r),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tm={focusedElem:e,selectionRange:n},ch=!1,fn=t;fn!==null;)if(t=fn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,fn=e;else for(;fn!==null;){switch(t=fn,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=Qa(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(S){xe(n,n.return,S)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nm(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(J(163))}if(e=t.sibling,e!==null){e.return=t.return,fn=e;break}fn=t.return}}function Vx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fs(e,n),i&4&&lc(5,n);break;case 1:if(fs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){xe(n,n.return,r)}else{var s=Qa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){xe(n,n.return,r)}}i&64&&Px(n),i&512&&Ol(n,n.return);break;case 3:if(fs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wy(e,t)}catch(r){xe(n,n.return,r)}}break;case 27:t===null&&i&4&&Hx(n);case 26:case 5:fs(e,n),t===null&&i&4&&zx(n),i&512&&Ol(n,n.return);break;case 12:fs(e,n);break;case 31:fs(e,n),i&4&&Xx(e,n);break;case 13:fs(e,n),i&4&&Wx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=YE.bind(null,n),hT(e,n))));break;case 22:if(i=n.memoizedState!==null||ms,!i){t=t!==null&&t.memoizedState!==null||je,s=ms;var a=je;ms=i,(je=t)&&!a?ds(e,n,(n.subtreeFlags&8772)!==0):fs(e,n),ms=s,je=a}break;case 30:break;default:fs(e,n)}}function Gx(e){var t=e.alternate;t!==null&&(e.alternate=null,Gx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&dm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,Wn=!1;function hs(e,t,n){for(n=n.child;n!==null;)kx(e,t,n),n=n.sibling}function kx(e,t,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(ec,n)}catch{}switch(n.tag){case 26:je||Zi(n,t),hs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:je||Zi(n,t);var i=ze,s=Wn;ga(n.type)&&(ze=n.stateNode,Wn=!1),hs(e,t,n),Fl(n.stateNode),ze=i,Wn=s;break;case 5:je||Zi(n,t);case 6:if(i=ze,s=Wn,ze=null,hs(e,t,n),ze=i,Wn=s,ze!==null)if(Wn)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(n.stateNode)}catch(a){xe(n,t,a)}else try{ze.removeChild(n.stateNode)}catch(a){xe(n,t,a)}break;case 18:ze!==null&&(Wn?(e=ze,Iv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),po(e)):Iv(ze,n.stateNode));break;case 4:i=ze,s=Wn,ze=n.stateNode.containerInfo,Wn=!0,hs(e,t,n),ze=i,Wn=s;break;case 0:case 11:case 14:case 15:da(2,n,t),je||da(4,n,t),hs(e,t,n);break;case 1:je||(Zi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Bx(n,t,i)),hs(e,t,n);break;case 21:hs(e,t,n);break;case 22:je=(i=je)||n.memoizedState!==null,hs(e,t,n),je=i;break;default:hs(e,t,n)}}function Xx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{po(e)}catch(n){xe(t,t.return,n)}}}function Wx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{po(e)}catch(n){xe(t,t.return,n)}}function FE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new yv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new yv),t;default:throw Error(J(435,e.tag))}}function mu(e,t){var n=FE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=ZE.bind(null,e,i);i.then(s,s)}})}function kn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(ga(o.type)){ze=o.stateNode,Wn=!1;break t}break;case 5:ze=o.stateNode,Wn=!1;break t;case 3:case 4:ze=o.stateNode.containerInfo,Wn=!0;break t}o=o.return}if(ze===null)throw Error(J(160));kx(a,r,s),ze=null,Wn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qx(t,e),t=t.sibling}var Ii=null;function qx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(t,e),Xn(e),i&4&&(da(3,e,e.return),lc(3,e),da(5,e,e.return));break;case 1:kn(t,e),Xn(e),i&512&&(je||n===null||Zi(n,n.return)),i&64&&ms&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Ii;if(kn(t,e),Xn(e),i&512&&(je||n===null||Zi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[sc]||a[vn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),Sn(a,i,n),a[vn]=e,dn(a),i=a;break t;case"link":var r=Vv("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),Sn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=Vv("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),Sn(a,i,n),s.head.appendChild(a);break;default:throw Error(J(468,i))}a[vn]=e,dn(a),i=a}e.stateNode=i}else Gv(s,e.type,e.stateNode);else e.stateNode=Hv(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?Gv(s,e.type,e.stateNode):Hv(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ip(e,e.memoizedProps,n.memoizedProps)}break;case 27:kn(t,e),Xn(e),i&512&&(je||n===null||Zi(n,n.return)),n!==null&&i&4&&ip(e,e.memoizedProps,n.memoizedProps);break;case 5:if(kn(t,e),Xn(e),i&512&&(je||n===null||Zi(n,n.return)),e.flags&32){s=e.stateNode;try{ao(s,"")}catch(_){xe(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,ip(e,s,n!==null?n.memoizedProps:s)),i&1024&&(ap=!0);break;case 6:if(kn(t,e),Xn(e),i&4){if(e.stateNode===null)throw Error(J(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){xe(e,e.return,_)}}break;case 3:if(Nu=null,s=Ii,Ii=rh(t.containerInfo),kn(t,e),Ii=s,Xn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{po(t.containerInfo)}catch(_){xe(e,e.return,_)}ap&&(ap=!1,Yx(e));break;case 4:i=Ii,Ii=rh(e.stateNode.containerInfo),kn(t,e),Xn(e),Ii=i;break;case 12:kn(t,e),Xn(e);break;case 31:kn(t,e),Xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mu(e,i)));break;case 13:kn(t,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Mh=si()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mu(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ms,h=je;if(ms=c||s,je=h||l,kn(t,e),je=h,ms=c,Xn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||ms||je||Va(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(_){xe(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){xe(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?Ov(p,!0):Ov(l.stateNode,!1)}catch(_){xe(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,mu(e,n))));break;case 19:kn(t,e),Xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mu(e,i)));break;case 30:break;case 21:break;default:kn(t,e),Xn(e)}}function Xn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Fx(i)){n=i;break}i=i.return}if(n==null)throw Error(J(160));switch(n.tag){case 27:var s=n.stateNode,a=sp(e);ju(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(ao(r,""),n.flags&=-33);var o=sp(e);ju(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=sp(e);qp(e,c,l);break;default:throw Error(J(161))}}catch(h){xe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Yx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vx(e,t.alternate,t),t=t.sibling}function Va(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Va(t);break;case 1:Zi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Bx(t,t.return,n),Va(t);break;case 27:Fl(t.stateNode);case 26:case 5:Zi(t,t.return),Va(t);break;case 22:t.memoizedState===null&&Va(t);break;case 30:Va(t);break;default:Va(t)}e=e.sibling}}function ds(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:ds(s,a,n),lc(4,a);break;case 1:if(ds(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){xe(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Xy(l[s],o)}catch(c){xe(i,i.return,c)}}n&&r&64&&Px(a),Ol(a,a.return);break;case 27:Hx(a);case 26:case 5:ds(s,a,n),n&&i===null&&r&4&&zx(a),Ol(a,a.return);break;case 12:ds(s,a,n);break;case 31:ds(s,a,n),n&&r&4&&Xx(s,a);break;case 13:ds(s,a,n),n&&r&4&&Wx(s,a);break;case 22:a.memoizedState===null&&ds(s,a,n),Ol(a,a.return);break;case 30:break;default:ds(s,a,n)}t=t.sibling}}function Wm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&rc(n))}function qm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rc(e))}function Ni(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zx(e,t,n,i),t=t.sibling}function Zx(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ni(e,t,n,i),s&2048&&lc(9,t);break;case 1:Ni(e,t,n,i);break;case 3:Ni(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rc(e)));break;case 12:if(s&2048){Ni(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){xe(t,t.return,l)}}else Ni(e,t,n,i);break;case 31:Ni(e,t,n,i);break;case 13:Ni(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?Ni(e,t,n,i):Pl(e,t):a._visibility&2?Ni(e,t,n,i):(a._visibility|=2,Pr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Wm(r,t);break;case 24:Ni(e,t,n,i),s&2048&&qm(t.alternate,t);break;default:Ni(e,t,n,i)}}function Pr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Pr(a,r,o,l,s),lc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Pr(a,r,o,l,s):Pl(a,r):(h._visibility|=2,Pr(a,r,o,l,s)),s&&c&2048&&Wm(r.alternate,r);break;case 24:Pr(a,r,o,l,s),s&&c&2048&&qm(r.alternate,r);break;default:Pr(a,r,o,l,s)}t=t.sibling}}function Pl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Pl(n,i),s&2048&&Wm(i.alternate,i);break;case 24:Pl(n,i),s&2048&&qm(i.alternate,i);break;default:Pl(n,i)}t=t.sibling}}var Al=8192;function Or(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Jx(e,t,n),e=e.sibling}function Jx(e,t,n){switch(e.tag){case 26:Or(e,t,n),e.flags&Al&&e.memoizedState!==null&&bT(n,Ii,e.memoizedState,e.memoizedProps);break;case 5:Or(e,t,n);break;case 3:case 4:var i=Ii;Ii=rh(e.stateNode.containerInfo),Or(e,t,n),Ii=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Al,Al=16777216,Or(e,t,n),Al=i):Or(e,t,n));break;default:Or(e,t,n)}}function Kx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];fn=i,jx(i,e)}Kx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qx(e),e=e.sibling}function Qx(e){switch(e.tag){case 0:case 11:case 15:yl(e),e.flags&2048&&da(9,e,e.return);break;case 3:yl(e);break;case 12:yl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Uu(e)):yl(e);break;default:yl(e)}}function Uu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];fn=i,jx(i,e)}Kx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),Uu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Uu(t));break;default:Uu(t)}e=e.sibling}}function jx(e,t){for(;fn!==null;){var n=fn;switch(n.tag){case 0:case 11:case 15:da(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:rc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,fn=i;else t:for(n=e;fn!==null;){i=fn;var s=i.sibling,a=i.return;if(Gx(i),i===n){fn=null;break t}if(s!==null){s.return=a,fn=s;break t}fn=a}}}var HE={getCacheForType:function(e){var t=xn($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return xn($e).controller.signal}},VE=typeof WeakMap=="function"?WeakMap:Map,de=0,Re=null,ee=null,ne=0,ye=0,ti=null,$s=!1,yo=!1,Ym=!1,As=0,We=0,pa=0,qa=0,Zm=0,ii=0,co=0,Bl=null,qn=null,Yp=!1,Mh=0,$x=0,$u=1/0,th=null,ra=null,rn=0,oa=null,uo=null,Ss=0,Zp=0,Jp=null,tS=null,zl=0,Kp=null;function oi(){return(de&2)!==0&&ne!==0?ne&-ne:Ht.T!==null?Km():cy()}function eS(){if(ii===0)if((ne&536870912)===0||ae){var e=au;au<<=1,(au&3932160)===0&&(au=262144),ii=e}else ii=536870912;return e=ci.current,e!==null&&(e.flags|=32),ii}function Yn(e,t,n){(e===Re&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(ho(e,0),ta(e,ne,ii,!1)),ic(e,n),((de&2)===0||e!==Re)&&(e===Re&&((de&2)===0&&(qa|=n),We===4&&ta(e,ne,ii,!1)),Qi(e))}function nS(e,t,n){if((de&6)!==0)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||nc(e,t),s=i?XE(e,t):rp(e,t,!0),a=i;do{if(s===0){yo&&!i&&ta(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!GE(n)){s=rp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Bl;var l=o.current.memoizedState.isDehydrated;if(l&&(ho(o,r).flags|=256),r=rp(o,r,!1),r!==2){if(Ym&&!l){o.errorRecoveryDisabledLanes|=a,qa|=a,s=4;break t}a=qn,qn=s,a!==null&&(qn===null?qn=a:qn.push.apply(qn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){ho(e,0),ta(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t)break;case 6:ta(i,t,ii,!$s);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(s=Mh+300-si(),10<s)){if(ta(i,t,ii,!$s),hh(i,0,!0)!==0)break t;Ss=t,i.timeoutHandle=MS(xv.bind(null,i,n,qn,th,Yp,t,ii,qa,co,$s,a,"Throttled",-0,0),s);break t}xv(i,n,qn,th,Yp,t,ii,qa,co,$s,a,null,-0,0)}}break}while(!0);Qi(e)}function xv(e,t,n,i,s,a,r,o,l,c,h,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_s},Jx(t,a,d);var _=(a&62914560)===a?Mh-si():(a&4194048)===a?$x-si():0;if(_=ET(d,_),_!==null){Ss=a,e.cancelPendingCommit=_(Mv.bind(null,e,t,a,n,i,s,r,o,l,h,d,null,f,p)),ta(e,a,r,!c);return}}Mv(e,t,a,n,i,s,r,o,l)}function GE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!li(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ta(e,t,n,i){t&=~Zm,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-ri(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&ry(e,n,t)}function bh(){return(de&6)===0?(cc(0,!1),!1):!0}function Jm(){if(ee!==null){if(ye===0)var e=ee.return;else e=ee,vs=nr=null,Im(e),to=null,ql=0,e=ee;for(;e!==null;)Ox(e.alternate,e),e=e.return;ee=null}}function ho(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,rT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ss=0,Jm(),Re=e,ee=n=ys(e.current,null),ne=t,ye=0,ti=null,$s=!1,yo=nc(e,t),Ym=!1,co=ii=Zm=qa=pa=We=0,qn=Bl=null,Yp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-ri(i),a=1<<s;t|=e[s],i&=~a}return As=t,mh(),n}function iS(e,t){Yt=null,Ht.H=Zl,t===vo||t===_h?(t=j_(),ye=3):t===wm?(t=j_(),ye=4):ye=t===km?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ti=t,ee===null&&(We=1,Ku(e,xi(t,e.current)))}function sS(){var e=ci.current;return e===null?!0:(ne&4194048)===ne?Mi===null:(ne&62914560)===ne||(ne&536870912)!==0?e===Mi:!1}function aS(){var e=Ht.H;return Ht.H=Zl,e===null?Zl:e}function rS(){var e=Ht.A;return Ht.A=HE,e}function eh(){We=4,$s||(ne&4194048)!==ne&&ci.current!==null||(yo=!0),(pa&134217727)===0&&(qa&134217727)===0||Re===null||ta(Re,ne,ii,!1)}function rp(e,t,n){var i=de;de|=2;var s=aS(),a=rS();(Re!==e||ne!==t)&&(th=null,ho(e,t)),t=!1;var r=We;t:do try{if(ye!==0&&ee!==null){var o=ee,l=ti;switch(ye){case 8:Jm(),r=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(t=!0);var c=ye;if(ye=0,ti=null,Jr(e,o,l,c),n&&yo){r=0;break t}break;default:c=ye,ye=0,ti=null,Jr(e,o,l,c)}}kE(),r=We;break}catch(h){iS(e,h)}while(!0);return t&&e.shellSuspendCounter++,vs=nr=null,de=i,Ht.H=s,Ht.A=a,ee===null&&(Re=null,ne=0,mh()),r}function kE(){for(;ee!==null;)oS(ee)}function XE(e,t){var n=de;de|=2;var i=aS(),s=rS();Re!==e||ne!==t?(th=null,$u=si()+500,ho(e,t)):yo=nc(e,t);t:do try{if(ye!==0&&ee!==null){t=ee;var a=ti;e:switch(ye){case 1:ye=0,ti=null,Jr(e,t,a,1);break;case 2:case 9:if(Q_(a)){ye=0,ti=null,Sv(t);break}t=function(){ye!==2&&ye!==9||Re!==e||(ye=7),Qi(e)},a.then(t,t);break t;case 3:ye=7;break t;case 4:ye=5;break t;case 7:Q_(a)?(ye=0,ti=null,Sv(t)):(ye=0,ti=null,Jr(e,t,a,7));break;case 5:var r=null;switch(ee.tag){case 26:r=ee.memoizedState;case 5:case 27:var o=ee;if(r?wS(r):o.stateNode.complete){ye=0,ti=null;var l=o.sibling;if(l!==null)ee=l;else{var c=o.return;c!==null?(ee=c,Eh(c)):ee=null}break e}}ye=0,ti=null,Jr(e,t,a,5);break;case 6:ye=0,ti=null,Jr(e,t,a,6);break;case 8:Jm(),We=6;break t;default:throw Error(J(462))}}WE();break}catch(h){iS(e,h)}while(!0);return vs=nr=null,Ht.H=i,Ht.A=s,de=n,ee!==null?0:(Re=null,ne=0,mh(),We)}function WE(){for(;ee!==null&&!p1();)oS(ee)}function oS(e){var t=Ix(e.alternate,e,As);e.memoizedProps=e.pendingProps,t===null?Eh(e):ee=t}function Sv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pv(n,t,t.pendingProps,t.type,void 0,ne);break;case 11:t=pv(n,t,t.pendingProps,t.type.render,t.ref,ne);break;case 5:Im(t);default:Ox(n,t),t=ee=Oy(t,As),t=Ix(n,t,As)}e.memoizedProps=e.pendingProps,t===null?Eh(e):ee=t}function Jr(e,t,n,i){vs=nr=null,Im(t),to=null,ql=0;var s=t.return;try{if(NE(e,s,t,n,ne)){We=1,Ku(e,xi(n,e.current)),ee=null;return}}catch(a){if(s!==null)throw ee=s,a;We=1,Ku(e,xi(n,e.current)),ee=null;return}t.flags&32768?(ae||i===1?e=!0:yo||(ne&536870912)!==0?e=!1:($s=e=!0,(i===2||i===9||i===3||i===6)&&(i=ci.current,i!==null&&i.tag===13&&(i.flags|=16384))),lS(t,e)):Eh(t)}function Eh(e){var t=e;do{if((t.flags&32768)!==0){lS(t,$s);return}e=t.return;var n=PE(t.alternate,t,As);if(n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);We===0&&(We=5)}function lS(e,t){do{var n=BE(e.alternate,e);if(n!==null){n.flags&=32767,ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ee=e;return}ee=e=n}while(e!==null);We=6,ee=null}function Mv(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do Th();while(rn!==0);if((de&6)!==0)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));if(a=t.lanes|t.childLanes,a|=xm,E1(e,n,a,r,o,l),e===Re&&(ee=Re=null,ne=0),uo=t,oa=e,Ss=n,Zp=a,Jp=s,tS=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,JE(Fu,function(){return dS(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ht.T,Ht.T=null,s=pe.p,pe.p=2,r=de,de|=4;try{zE(e,t,n)}finally{de=r,pe.p=s,Ht.T=i}}rn=1,cS(),uS(),hS()}}function cS(){if(rn===1){rn=0;var e=oa,t=uo,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Ht.T,Ht.T=null;var i=pe.p;pe.p=2;var s=de;de|=4;try{qx(t,e);var a=tm,r=wy(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Ay(o.ownerDocument.documentElement,o)){if(l!==null&&ym(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),_=o.textContent.length,S=Math.min(l.start,_),m=l.end===void 0?S:Math.min(l.end,_);!p.extend&&S>m&&(r=m,m=S,S=r);var u=X_(o,S),g=X_(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var y=d.createRange();y.setStart(u.node,u.offset),p.removeAllRanges(),S>m?(p.addRange(y),p.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),p.addRange(y))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}ch=!!$p,tm=$p=null}finally{de=s,pe.p=i,Ht.T=n}}e.current=t,rn=2}}function uS(){if(rn===2){rn=0;var e=oa,t=uo,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ht.T,Ht.T=null;var i=pe.p;pe.p=2;var s=de;de|=4;try{Vx(e,t.alternate,t)}finally{de=s,pe.p=i,Ht.T=n}}rn=3}}function hS(){if(rn===4||rn===3){rn=0,m1();var e=oa,t=uo,n=Ss,i=tS;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rn=5:(rn=0,uo=oa=null,fS(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ra=null),fm(n),t=t.stateNode,ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(ec,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ht.T,s=pe.p,pe.p=2,Ht.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Ht.T=t,pe.p=s}}(Ss&3)!==0&&Th(),Qi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Kp?zl++:(zl=0,Kp=e):zl=0,cc(0,!1)}}function fS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rc(t)))}function Th(){return cS(),uS(),hS(),dS()}function dS(){if(rn!==5)return!1;var e=oa,t=Zp;Zp=0;var n=fm(Ss),i=Ht.T,s=pe.p;try{pe.p=32>n?32:n,Ht.T=null,n=Jp,Jp=null;var a=oa,r=Ss;if(rn=0,uo=oa=null,Ss=0,(de&6)!==0)throw Error(J(331));var o=de;if(de|=4,Qx(a.current),Zx(a,a.current,r,n),de=o,cc(0,!1),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(ec,a)}catch{}return!0}finally{pe.p=s,Ht.T=i,fS(e,t)}}function bv(e,t,n){t=xi(n,t),t=kp(e.stateNode,t,2),e=aa(e,t,2),e!==null&&(ic(e,2),Qi(e))}function xe(e,t,n){if(e.tag===3)bv(e,e,n);else for(;t!==null;){if(t.tag===3){bv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ra===null||!ra.has(i))){e=xi(n,e),n=Rx(2),i=aa(t,n,2),i!==null&&(Cx(n,i,t,e),ic(i,2),Qi(i));break}}t=t.return}}function op(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new VE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Ym=!0,s.add(n),e=qE.bind(null,e,t,n),t.then(e,e))}function qE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Re===e&&(ne&n)===n&&(We===4||We===3&&(ne&62914560)===ne&&300>si()-Mh?(de&2)===0&&ho(e,0):Zm|=n,co===ne&&(co=0)),Qi(e)}function pS(e,t){t===0&&(t=ay()),e=er(e,t),e!==null&&(ic(e,t),Qi(e))}function YE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pS(e,n)}function ZE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),pS(e,n)}function JE(e,t){return um(e,t)}var nh=null,Br=null,Qp=!1,ih=!1,lp=!1,ea=0;function Qi(e){e!==Br&&e.next===null&&(Br===null?nh=Br=e:Br=Br.next=e),ih=!0,Qp||(Qp=!0,QE())}function cc(e,t){if(!lp&&ih){lp=!0;do for(var n=!1,i=nh;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-ri(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Ev(i,a))}else a=ne,a=hh(i,i===Re?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||nc(i,a)||(n=!0,Ev(i,a));i=i.next}while(n);lp=!1}}function KE(){mS()}function mS(){ih=Qp=!1;var e=0;ea!==0&&aT()&&(e=ea);for(var t=si(),n=null,i=nh;i!==null;){var s=i.next,a=gS(i,t);a===0?(i.next=null,n===null?nh=s:n.next=s,s===null&&(Br=n)):(n=i,(e!==0||(a&3)!==0)&&(ih=!0)),i=s}rn!==0&&rn!==5||cc(e,!1),ea!==0&&(ea=0)}function gS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-ri(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=b1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Re,n=ne,n=hh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Bd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||nc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Bd(i),fm(n)){case 2:case 8:n=iy;break;case 32:n=Fu;break;case 268435456:n=sy;break;default:n=Fu}return i=_S.bind(null,e),n=um(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Bd(i),e.callbackPriority=2,e.callbackNode=null,2}function _S(e,t){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Th()&&e.callbackNode!==n)return null;var i=ne;return i=hh(e,e===Re?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(nS(e,i,t),gS(e,si()),e.callbackNode!=null&&e.callbackNode===n?_S.bind(null,e):null)}function Ev(e,t){if(Th())return null;nS(e,t,!0)}function QE(){oT(function(){(de&6)!==0?um(ny,KE):mS()})}function Km(){if(ea===0){var e=ro;e===0&&(e=su,su<<=1,(su&261888)===0&&(su=256)),ea=e}return ea}function Tv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mu(""+e)}function Av(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function jE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Tv((s[Zn]||null).action),r=i.submitter;r&&(t=(t=r[Zn]||null)?Tv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new fh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ea!==0){var l=r?Av(s,r):new FormData(s);Vp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?Av(s,r):new FormData(s),Vp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(gu=0;gu<Cp.length;gu++)_u=Cp[gu],wv=_u.toLowerCase(),Rv=_u[0].toUpperCase()+_u.slice(1),Oi(wv,"on"+Rv);var _u,wv,Rv,gu;Oi(Cy,"onAnimationEnd");Oi(Dy,"onAnimationIteration");Oi(Uy,"onAnimationStart");Oi("dblclick","onDoubleClick");Oi("focusin","onFocus");Oi("focusout","onBlur");Oi(gE,"onTransitionRun");Oi(_E,"onTransitionStart");Oi(vE,"onTransitionCancel");Oi(Ly,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);ja("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ja("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ja("onBeforeInput",["compositionend","keypress","textInput","paste"]);ja("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ja("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ja("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$E=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jl));function vS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Vu(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Vu(h)}s.currentTarget=null,a=l}}}}function te(e,t){var n=t[Sp];n===void 0&&(n=t[Sp]=new Set);var i=e+"__bubble";n.has(i)||(yS(t,e,2,!1),n.add(i))}function cp(e,t,n){var i=0;t&&(i|=4),yS(n,e,i,t)}var vu="_reactListening"+Math.random().toString(36).slice(2);function Qm(e){if(!e[vu]){e[vu]=!0,uy.forEach(function(n){n!=="selectionchange"&&($E.has(n)||cp(n,!1,e),cp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vu]||(t[vu]=!0,cp("selectionchange",!1,t))}}function yS(e,t,n,i){switch(LS(t)){case 2:var s=wT;break;case 8:s=RT;break;default:s=eg}n=s.bind(null,t,n,e),s=void 0,!Ap||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function up(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Hr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}vy(function(){var c=a,h=mm(n),d=[];t:{var f=Ny.get(e);if(f!==void 0){var p=fh,_=e;switch(e){case"keypress":if(Eu(n)===0)break t;case"keydown":case"keyup":p=Z1;break;case"focusin":_="focus",p=Gd;break;case"focusout":_="blur",p=Gd;break;case"beforeblur":case"afterblur":p=Gd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=O_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=P1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Q1;break;case Cy:case Dy:case Uy:p=F1;break;case Ly:p=$1;break;case"scroll":case"scrollend":p=I1;break;case"wheel":p=eE;break;case"copy":case"cut":case"paste":p=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=B_;break;case"toggle":case"beforetoggle":p=iE}var S=(t&4)!==0,m=!S&&(e==="scroll"||e==="scrollend"),u=S?f!==null?f+"Capture":null:f;S=[];for(var g=c,y;g!==null;){var v=g;if(y=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||y===null||u===null||(v=Vl(g,u),v!=null&&S.push(Kl(g,v,y))),m)break;g=g.return}0<S.length&&(f=new p(f,_,null,n,h),d.push({event:f,listeners:S}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Tp&&(_=n.relatedTarget||n.fromElement)&&(Hr(_)||_[mo]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Hr(_):null,_!==null&&(m=tc(_),S=_.tag,_!==m||S!==5&&S!==27&&S!==6)&&(_=null)):(p=null,_=c),p!==_)){if(S=O_,v="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(S=B_,v="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:El(p),y=_==null?f:El(_),f=new S(v,g+"leave",p,n,h),f.target=m,f.relatedTarget=y,v=null,Hr(h)===c&&(S=new S(u,g+"enter",_,n,h),S.target=y,S.relatedTarget=m,v=S),m=v,p&&_)e:{for(S=tT,u=p,g=_,y=0,v=u;v;v=S(v))y++;v=0;for(var w=g;w;w=S(w))v++;for(;0<y-v;)u=S(u),y--;for(;0<v-y;)g=S(g),v--;for(;y--;){if(u===g||g!==null&&u===g.alternate){S=u;break e}u=S(u),g=S(g)}S=null}else S=null;p!==null&&Cv(d,f,p,S,!1),_!==null&&m!==null&&Cv(d,m,_,S,!0)}}t:{if(f=c?El(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=V_;else if(H_(f))if(Ey)C=dE;else{C=hE;var R=uE}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&pm(c.elementType)&&(C=V_):C=fE;if(C&&(C=C(e,c))){by(d,C,n,h);break t}R&&R(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Ep(f,"number",f.value)}switch(R=c?El(c):window,e){case"focusin":(H_(R)||R.contentEditable==="true")&&(kr=R,wp=c,Cl=null);break;case"focusout":Cl=wp=kr=null;break;case"mousedown":Rp=!0;break;case"contextmenu":case"mouseup":case"dragend":Rp=!1,W_(d,n,h);break;case"selectionchange":if(mE)break;case"keydown":case"keyup":W_(d,n,h)}var L;if(vm)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else Gr?Sy(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(xy&&n.locale!=="ko"&&(Gr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Gr&&(L=yy()):(js=h,gm="value"in js?js.value:js.textContent,Gr=!0)),R=sh(c,E),0<R.length&&(E=new P_(E,e,null,n,h),d.push({event:E,listeners:R}),L?E.data=L:(L=My(n),L!==null&&(E.data=L)))),(L=aE?rE(e,n):oE(e,n))&&(E=sh(c,"onBeforeInput"),0<E.length&&(R=new P_("onBeforeInput","beforeinput",null,n,h),d.push({event:R,listeners:E}),R.data=L)),jE(d,e,c,n,h)}vS(d,t)})}function Kl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Vl(e,n),s!=null&&i.unshift(Kl(e,s,a)),s=Vl(e,t),s!=null&&i.push(Kl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function tT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Vl(n,a),c!=null&&r.unshift(Kl(n,c,l))):s||(c=Vl(n,a),c!=null&&r.push(Kl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var eT=/\r\n?/g,nT=/\u0000|\uFFFD/g;function Dv(e){return(typeof e=="string"?e:""+e).replace(eT,`
`).replace(nT,"")}function xS(e,t){return t=Dv(t),Dv(e)===t}function Ee(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ao(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ao(e,""+i);break;case"className":ou(e,"class",i);break;case"tabIndex":ou(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ou(e,n,i);break;case"style":_y(e,i,a);break;case"data":if(t!=="object"){ou(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Mu(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&Ee(e,t,"name",s.name,s,null),Ee(e,t,"formEncType",s.formEncType,s,null),Ee(e,t,"formMethod",s.formMethod,s,null),Ee(e,t,"formTarget",s.formTarget,s,null)):(Ee(e,t,"encType",s.encType,s,null),Ee(e,t,"method",s.method,s,null),Ee(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Mu(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=_s);break;case"onScroll":i!=null&&te("scroll",e);break;case"onScrollEnd":i!=null&&te("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Mu(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":te("beforetoggle",e),te("toggle",e),Su(e,"popover",i);break;case"xlinkActuate":cs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":cs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":cs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":cs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":cs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":cs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":cs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":cs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":cs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Su(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=L1.get(n)||n,Su(e,n,i))}}function jp(e,t,n,i,s,a){switch(n){case"style":_y(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ao(e,i):(typeof i=="number"||typeof i=="bigint")&&ao(e,""+i);break;case"onScroll":i!=null&&te("scroll",e);break;case"onScrollEnd":i!=null&&te("scrollend",e);break;case"onClick":i!=null&&(e.onclick=_s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Zn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Su(e,n,i)}}}function Sn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":te("error",e),te("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:Ee(e,t,a,r,n,null)}}s&&Ee(e,t,"srcSet",n.srcSet,n,null),i&&Ee(e,t,"src",n.src,n,null);return;case"input":te("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,t));break;default:Ee(e,t,i,h,n,null)}}py(e,a,o,l,c,r,s,!1);return;case"select":te("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Ee(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Qr(e,!!i,t,!1):n!=null&&Qr(e,!!i,n,!0);return;case"textarea":te("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:Ee(e,t,r,o,n,null)}gy(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ee(e,t,l,i,n,null)}return;case"dialog":te("beforetoggle",e),te("toggle",e),te("cancel",e),te("close",e);break;case"iframe":case"object":te("load",e);break;case"video":case"audio":for(i=0;i<Jl.length;i++)te(Jl[i],e);break;case"image":te("error",e),te("load",e);break;case"details":te("toggle",e);break;case"embed":case"source":case"link":te("error",e),te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:Ee(e,t,c,i,n,null)}return;default:if(pm(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&jp(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Ee(e,t,o,i,n,null))}function iT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||Ee(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":a=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,t));break;default:p!==d&&Ee(e,t,f,p,i,d)}}bp(e,r,o,l,c,h,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||Ee(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":f=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&Ee(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?Qr(e,!!n,f,!1):!!i!=!!n&&(t!=null?Qr(e,!!n,t,!0):Qr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ee(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":f=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(J(91));break;default:s!==a&&Ee(e,t,r,s,i,a)}my(e,f,p);return;case"option":for(var _ in n)if(f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:Ee(e,t,_,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Ee(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)f=n[S],n.hasOwnProperty(S)&&f!=null&&!i.hasOwnProperty(S)&&Ee(e,t,S,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(J(137,t));break;default:Ee(e,t,c,f,i,p)}return;default:if(pm(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&jp(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||jp(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&Ee(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||Ee(e,t,d,f,i,p)}function Uv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Uv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&Uv(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $p=null,tm=null;function ah(e){return e.nodeType===9?e:e.ownerDocument}function Lv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function SS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function em(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hp=null;function aT(){var e=window.event;return e&&e.type==="popstate"?e===hp?!1:(hp=e,!0):(hp=null,!1)}var MS=typeof setTimeout=="function"?setTimeout:void 0,rT=typeof clearTimeout=="function"?clearTimeout:void 0,Nv=typeof Promise=="function"?Promise:void 0,oT=typeof queueMicrotask=="function"?queueMicrotask:typeof Nv<"u"?function(e){return Nv.resolve(null).then(e).catch(lT)}:MS;function lT(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function Iv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),po(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Fl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Fl(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[sc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Fl(e.ownerDocument.body);n=s}while(n);po(t)}function Ov(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":nm(n),dm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function cT(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[sc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function uT(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bi(e.nextSibling),e===null))return null;return e}function bS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bi(e.nextSibling),e===null))return null;return e}function im(e){return e.data==="$?"||e.data==="$~"}function sm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hT(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function bi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var am=null;function Pv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return bi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Bv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ES(e,t,n){switch(t=ah(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function Fl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);dm(e)}var Ei=new Map,zv=new Set;function rh(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ws=pe.d;pe.d={f:fT,r:dT,D:pT,C:mT,L:gT,m:_T,X:yT,S:vT,M:xT};function fT(){var e=ws.f(),t=bh();return e||t}function dT(e){var t=go(e);t!==null&&t.tag===5&&t.type==="form"?_x(t):ws.r(e)}var xo=typeof document>"u"?null:document;function TS(e,t,n){var i=xo;if(i&&typeof t=="string"&&t){var s=yi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),zv.has(s)||(zv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Sn(t,"link",e),dn(t),i.head.appendChild(t)))}}function pT(e){ws.D(e),TS("dns-prefetch",e,null)}function mT(e,t){ws.C(e,t),TS("preconnect",e,t)}function gT(e,t,n){ws.L(e,t,n);var i=xo;if(i&&e&&t){var s='link[rel="preload"][as="'+yi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+yi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+yi(n.imageSizes)+'"]')):s+='[href="'+yi(e)+'"]';var a=s;switch(t){case"style":a=fo(e);break;case"script":a=So(e)}Ei.has(a)||(e=Ie({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ei.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(uc(a))||t==="script"&&i.querySelector(hc(a))||(t=i.createElement("link"),Sn(t,"link",e),dn(t),i.head.appendChild(t)))}}function _T(e,t){ws.m(e,t);var n=xo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+yi(i)+'"][href="'+yi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=So(e)}if(!Ei.has(a)&&(e=Ie({rel:"modulepreload",href:e},t),Ei.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(hc(a)))return}i=n.createElement("link"),Sn(i,"link",e),dn(i),n.head.appendChild(i)}}}function vT(e,t,n){ws.S(e,t,n);var i=xo;if(i&&e){var s=Kr(i).hoistableStyles,a=fo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(uc(a)))o.loading=5;else{e=Ie({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ei.get(a))&&jm(e,n);var l=r=i.createElement("link");dn(l),Sn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Lu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function yT(e,t){ws.X(e,t);var n=xo;if(n&&e){var i=Kr(n).hoistableScripts,s=So(e),a=i.get(s);a||(a=n.querySelector(hc(s)),a||(e=Ie({src:e,async:!0},t),(t=Ei.get(s))&&$m(e,t),a=n.createElement("script"),dn(a),Sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function xT(e,t){ws.M(e,t);var n=xo;if(n&&e){var i=Kr(n).hoistableScripts,s=So(e),a=i.get(s);a||(a=n.querySelector(hc(s)),a||(e=Ie({src:e,async:!0,type:"module"},t),(t=Ei.get(s))&&$m(e,t),a=n.createElement("script"),dn(a),Sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Fv(e,t,n,i){var s=(s=na.current)?rh(s):null;if(!s)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=fo(n.href),n=Kr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=fo(n.href);var a=Kr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(uc(e)))&&!a._p&&(r.instance=a,r.state.loading=5),Ei.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ei.set(e,n),a||ST(s,e,n,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=So(n),n=Kr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function fo(e){return'href="'+yi(e)+'"'}function uc(e){return'link[rel="stylesheet"]['+e+"]"}function AS(e){return Ie({},e,{"data-precedence":e.precedence,precedence:null})}function ST(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Sn(t,"link",n),dn(t),e.head.appendChild(t))}function So(e){return'[src="'+yi(e)+'"]'}function hc(e){return"script[async]"+e}function Hv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+yi(n.href)+'"]');if(i)return t.instance=i,dn(i),i;var s=Ie({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),dn(i),Sn(i,"style",s),Lu(i,n.precedence,e),t.instance=i;case"stylesheet":s=fo(n.href);var a=e.querySelector(uc(s));if(a)return t.state.loading|=4,t.instance=a,dn(a),a;i=AS(n),(s=Ei.get(s))&&jm(i,s),a=(e.ownerDocument||e).createElement("link"),dn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Sn(a,"link",i),t.state.loading|=4,Lu(a,n.precedence,e),t.instance=a;case"script":return a=So(n.src),(s=e.querySelector(hc(a)))?(t.instance=s,dn(s),s):(i=n,(s=Ei.get(a))&&(i=Ie({},n),$m(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),dn(s),Sn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Lu(i,n.precedence,e));return t.instance}function Lu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function jm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $m(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Nu=null;function Vv(e,t,n){if(Nu===null){var i=new Map,s=Nu=new Map;s.set(n,i)}else s=Nu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[sc]||a[vn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Gv(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function MT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function bT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=fo(i.href),a=t.querySelector(uc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=oh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,dn(a);return}a=t.ownerDocument||t,i=AS(i),(s=Ei.get(s))&&jm(i,s),a=a.createElement("link"),dn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Sn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=oh.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var fp=0;function ET(e,t){return e.stylesheets&&e.count===0&&Iu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Iu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&fp===0&&(fp=62500*sT());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Iu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>fp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function oh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Iu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lh=null;function Iu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lh=new Map,t.forEach(TT,e),lh=null,oh.call(e))}function TT(e,t){if(!(t.state.loading&4)){var n=lh.get(e);if(n)var i=n.get(null);else{n=new Map,lh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=oh.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Ql={$$typeof:gs,Provider:null,Consumer:null,_currentValue:Ga,_currentValue2:Ga,_threadCount:0};function AT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zd(0),this.hiddenUpdates=zd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function RS(e,t,n,i,s,a,r,o,l,c,h,d){return e=new AT(e,t,n,r,l,c,h,d,o),t=1,a===!0&&(t|=24),a=ni(3,null,null,t),e.current=a,a.stateNode=e,t=Tm(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Rm(a),e}function CS(e){return e?(e=qr,e):qr}function DS(e,t,n,i,s,a){s=CS(s),i.context===null?i.context=s:i.pendingContext=s,i=sa(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=aa(e,i,t),n!==null&&(Yn(n,e,t),Ul(n,e,t))}function kv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tg(e,t){kv(e,t),(e=e.alternate)&&kv(e,t)}function US(e){if(e.tag===13||e.tag===31){var t=er(e,67108864);t!==null&&Yn(t,e,67108864),tg(e,67108864)}}function Xv(e){if(e.tag===13||e.tag===31){var t=oi();t=hm(t);var n=er(e,t);n!==null&&Yn(n,e,t),tg(e,t)}}var ch=!0;function wT(e,t,n,i){var s=Ht.T;Ht.T=null;var a=pe.p;try{pe.p=2,eg(e,t,n,i)}finally{pe.p=a,Ht.T=s}}function RT(e,t,n,i){var s=Ht.T;Ht.T=null;var a=pe.p;try{pe.p=8,eg(e,t,n,i)}finally{pe.p=a,Ht.T=s}}function eg(e,t,n,i){if(ch){var s=rm(i);if(s===null)up(e,t,i,uh,n),Wv(e,i);else if(DT(s,e,t,n,i))i.stopPropagation();else if(Wv(e,i),t&4&&-1<CT.indexOf(e)){for(;s!==null;){var a=go(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Fa(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ri(r);o.entanglements[1]|=l,r&=~l}Qi(a),(de&6)===0&&($u=si()+500,cc(0,!1))}}break;case 31:case 13:o=er(a,2),o!==null&&Yn(o,a,2),bh(),tg(a,2)}if(a=rm(i),a===null&&up(e,t,i,uh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else up(e,t,i,null,n)}}function rm(e){return e=mm(e),ng(e)}var uh=null;function ng(e){if(uh=null,e=Hr(e),e!==null){var t=tc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Qv(t),e!==null)return e;e=null}else if(n===31){if(e=jv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return uh=e,null}function LS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(g1()){case ny:return 2;case iy:return 8;case Fu:case _1:return 32;case sy:return 268435456;default:return 32}default:return 32}}var om=!1,la=null,ca=null,ua=null,jl=new Map,$l=new Map,Ks=[],CT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wv(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":jl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(t.pointerId)}}function xl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=go(t),t!==null&&US(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function DT(e,t,n,i,s){switch(t){case"focusin":return la=xl(la,e,t,n,i,s),!0;case"dragenter":return ca=xl(ca,e,t,n,i,s),!0;case"mouseover":return ua=xl(ua,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return jl.set(a,xl(jl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,$l.set(a,xl($l.get(a)||null,e,t,n,i,s)),!0}return!1}function NS(e){var t=Hr(e.target);if(t!==null){var n=tc(t);if(n!==null){if(t=n.tag,t===13){if(t=Qv(n),t!==null){e.blockedOn=t,R_(e.priority,function(){Xv(n)});return}}else if(t===31){if(t=jv(n),t!==null){e.blockedOn=t,R_(e.priority,function(){Xv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ou(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Tp=i,n.target.dispatchEvent(i),Tp=null}else return t=go(n),t!==null&&US(t),e.blockedOn=n,!1;t.shift()}return!0}function qv(e,t,n){Ou(e)&&n.delete(t)}function UT(){om=!1,la!==null&&Ou(la)&&(la=null),ca!==null&&Ou(ca)&&(ca=null),ua!==null&&Ou(ua)&&(ua=null),jl.forEach(qv),$l.forEach(qv)}function yu(e,t){e.blockedOn===t&&(e.blockedOn=null,om||(om=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,UT)))}var xu=null;function Yv(e){xu!==e&&(xu=e,on.unstable_scheduleCallback(on.unstable_NormalPriority,function(){xu===e&&(xu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(ng(i||n)===null)continue;break}var a=go(n);a!==null&&(e.splice(t,3),t-=3,Vp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function po(e){function t(l){return yu(l,e)}la!==null&&yu(la,e),ca!==null&&yu(ca,e),ua!==null&&yu(ua,e),jl.forEach(t),$l.forEach(t);for(var n=0;n<Ks.length;n++){var i=Ks[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ks.length&&(n=Ks[0],n.blockedOn===null);)NS(n),n.blockedOn===null&&Ks.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Zn]||null;if(typeof a=="function")r||Yv(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Zn]||null)o=r.formAction;else if(ng(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Yv(n)}}}function IS(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function ig(e){this._internalRoot=e}Ah.prototype.render=ig.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=oi();DS(n,i,e,t,null,null)};Ah.prototype.unmount=ig.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;DS(e.current,2,null,e,null,null),bh(),t[mo]=null}};function Ah(e){this._internalRoot=e}Ah.prototype.unstable_scheduleHydration=function(e){if(e){var t=cy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ks.length&&t!==0&&t<Ks[n].priority;n++);Ks.splice(n,0,e),n===0&&NS(e)}};var Zv=Jv.version;if(Zv!=="19.2.0")throw Error(J(527,Zv,"19.2.0"));pe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=c1(t),e=e!==null?$v(e):null,e=e===null?null:e.stateNode,e};var LT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Ht,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Sl.isDisabled&&Sl.supportsFiber))try{ec=Sl.inject(LT),ai=Sl}catch{}var Sl;wh.createRoot=function(e,t){if(!Kv(e))throw Error(J(299));var n=!1,i="",s=Tx,a=Ax,r=wx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=RS(e,1,!1,null,null,n,i,null,s,a,r,IS),e[mo]=t.current,Qm(e),new ig(t)};wh.hydrateRoot=function(e,t,n){if(!Kv(e))throw Error(J(299));var i=!1,s="",a=Tx,r=Ax,o=wx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=RS(e,1,!0,t,n??null,i,s,l,a,r,o,IS),t.context=CS(null),n=t.current,i=oi(),i=hm(i),s=sa(i),s.callback=null,aa(n,s,i),n=i,t.current.lanes=n,ic(t,n),Qi(t),e[mo]=t.current,Qm(e),new Ah(t)};wh.version="19.2.0"});var zS=Xi((v3,BS)=>{"use strict";function PS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(PS)}catch(e){console.error(e)}}PS(),BS.exports=OS()});var Ab=Xi(pd=>{"use strict";var n3=Symbol.for("react.transitional.element"),i3=Symbol.for("react.fragment");function Tb(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:n3,type:e,key:i,ref:t!==void 0?t:null,props:n}}pd.Fragment=i3;pd.jsx=Tb;pd.jsxs=Tb});var Yc=Xi((qL,wb)=>{"use strict";wb.exports=Ab()});var Ci=Pa(ul(),1),Lb=Pa(zS(),1);var jn=Pa(ul(),1);var oM=0,Og=1,lM=2;var Pg=1,mf=2,ns=3,Hi=0,bn=1,wi=2,zs=0,lr=1,Bg=2,zg=3,Fg=4,cM=5,Ea=100,uM=101,hM=102,fM=103,dM=104,pM=200,mM=201,gM=202,_M=203,Zh=204,Jh=205,vM=206,yM=207,xM=208,SM=209,MM=210,bM=211,EM=212,TM=213,AM=214,gf=0,_f=1,vf=2,cr=3,yf=4,xf=5,Sf=6,Mf=7,Hg=0,wM=1,RM=2,Fs=0,CM=1,DM=2,UM=3,LM=4,NM=5,IM=6,OM=7;var Vg=300,dr=301,pr=302,bf=303,Ef=304,Hc=306,Bo=1e3,ba=1001,Kh=1002,Kn=1003,PM=1004;var Vc=1005;var Qn=1006,Tf=1007;var Ra=1008;var ki=1009,Gg=1010,kg=1011,Qo=1012,Af=1013,Ca=1014,is=1015,jo=1016,wf=1017,Rf=1018,$o=1020,Xg=35902,Wg=35899,qg=1021,Yg=1022,Ri=1023,zo=1026,tl=1027,Zg=1028,Cf=1029,Jg=1030,Df=1031;var Uf=1033,Gc=33776,kc=33777,Xc=33778,Wc=33779,Lf=35840,Nf=35841,If=35842,Of=35843,Pf=36196,Bf=37492,zf=37496,Ff=37808,Hf=37809,Vf=37810,Gf=37811,kf=37812,Xf=37813,Wf=37814,qf=37815,Yf=37816,Zf=37817,Jf=37818,Kf=37819,Qf=37820,jf=37821,$f=36492,td=36494,ed=36495,nd=36283,id=36284,sd=36285,ad=36286;var vc=2300,Qh=2301,qh=2302,Ag=2400,wg=2401,Rg=2402;var BM=3200,rd=3201;var Kg=0,zM=1,Hs="",wn="srgb",ur="srgb-linear",yc="linear",Se="srgb";var or=7680;var Cg=519,FM=512,HM=513,VM=514,Qg=515,GM=516,kM=517,XM=518,WM=519,Dg=35044,od=35048;var jg="300 es",Fi=2e3,xc=2001;var Os=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],FS=1234567,gc=Math.PI/180,Fo=180/Math.PI;function el(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[e&255]+Tn[e>>8&255]+Tn[e>>16&255]+Tn[e>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[n&63|128]+Tn[n>>8&255]+"-"+Tn[n>>16&255]+Tn[n>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function ie(e,t,n){return Math.max(t,Math.min(n,e))}function $g(e,t){return(e%t+t)%t}function NT(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function IT(e,t,n){return e!==t?(n-e)/(t-e):0}function _c(e,t,n){return(1-n)*e+n*t}function OT(e,t,n,i){return _c(e,t,1-Math.exp(-n*i))}function PT(e,t=1){return t-Math.abs($g(e,t*2)-t)}function BT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function zT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function FT(e,t){return e+Math.floor(Math.random()*(t-e+1))}function HT(e,t){return e+Math.random()*(t-e)}function VT(e){return e*(.5-Math.random())}function GT(e){e!==void 0&&(FS=e);let t=FS+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kT(e){return e*gc}function XT(e){return e*Fo}function WT(e){return(e&e-1)===0&&e!==0}function qT(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function YT(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function ZT(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),h=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":e.set(o*h,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*_,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*_,o*c);break;case"ZYZ":e.set(l*_,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Oo(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Hn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Da={DEG2RAD:gc,RAD2DEG:Fo,generateUUID:el,clamp:ie,euclideanModulo:$g,mapLinear:NT,inverseLerp:IT,lerp:_c,damp:OT,pingpong:PT,smoothstep:BT,smootherstep:zT,randInt:FT,randFloat:HT,randFloatSpread:VT,seededRandom:GT,degToRad:kT,radToDeg:XT,isPowerOfTwo:WT,ceilPowerOfTwo:qT,floorPowerOfTwo:YT,setQuaternionFromProperEuler:ZT,normalize:Hn,denormalize:Oo},oe=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ps=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],_=a[r+2],S=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=_,t[n+3]=S;return}if(d!==S||l!==f||c!==p||h!==_){let m=1-o,u=l*f+c*p+h*_+d*S,g=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let w=Math.sqrt(y),C=Math.atan2(w,u*g);m=Math.sin(m*C)/w,o=Math.sin(o*C)/w}let v=o*g;if(l=l*m+f*v,c=c*m+p*v,h=h*m+_*v,d=d*m+S*v,m===1-o){let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],f=a[r+1],p=a[r+2],_=a[r+3];return t[n]=o*_+h*d+l*p-c*f,t[n+1]=l*_+h*f+c*d-o*p,t[n+2]=c*_+h*p+o*f-l*d,t[n+3]=h*_-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"YZX":this._x=f*h*d+c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d-f*p*_;break;case"XZY":this._x=f*h*d-c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(HS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(HS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return sg.copy(this).projectOnVector(t),this.sub(sg)}reflect(t){return this.sub(sg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sg=new V,HS=new Ps,Zt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],_=i[8],S=s[0],m=s[3],u=s[6],g=s[1],y=s[4],v=s[7],w=s[2],C=s[5],R=s[8];return a[0]=r*S+o*g+l*w,a[3]=r*m+o*y+l*C,a[6]=r*u+o*v+l*R,a[1]=c*S+h*g+d*w,a[4]=c*m+h*y+d*C,a[7]=c*u+h*v+d*R,a[2]=f*S+p*g+_*w,a[5]=f*m+p*y+_*C,a[8]=f*u+p*v+_*R,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,f=o*l-h*a,p=c*a-r*l,_=n*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=d*S,t[1]=(s*c-h*i)*S,t[2]=(o*i-s*r)*S,t[3]=f*S,t[4]=(h*n-s*l)*S,t[5]=(s*a-o*n)*S,t[6]=p*S,t[7]=(i*l-c*n)*S,t[8]=(r*n-i*a)*S,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(ag.makeScale(t,n)),this}rotate(t){return this.premultiply(ag.makeRotation(-t)),this}translate(t,n){return this.premultiply(ag.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ag=new Zt;function t0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ho(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function qM(){let e=Ho("canvas");return e.style.display="block",e}var VS={};function Vo(e){e in VS||(VS[e]=!0,console.warn(e))}function YM(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var GS=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kS=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JT(){let e={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Se&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Se&&(s.r=Po(s.r),s.g=Po(s.g),s.b=Po(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hs?yc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Vo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Vo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ur]:{primaries:t,whitePoint:i,transfer:yc,toXYZ:GS,fromXYZ:kS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:GS,fromXYZ:kS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),e}var ce=JT();function Is(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Po(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Mo,jh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Mo===void 0&&(Mo=Ho("canvas")),Mo.width=t.width,Mo.height=t.height;let s=Mo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Mo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Ho("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Is(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},KT=0,Go=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=el(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(rg(s[r].image)):a.push(rg(s[r]))}else a=rg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function rg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?jh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var QT=0,og=new V,Vn=class e extends Os{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ba,s=ba,a=Qn,r=Ra,o=Ri,l=ki,c=e.DEFAULT_ANISOTROPY,h=Hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=el(),this.name="",this.source=new Go(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(og).x}get height(){return this.source.getSize(og).y}get depth(){return this.source.getSize(og).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bo:t.x=t.x-Math.floor(t.x);break;case ba:t.x=t.x<0?0:1;break;case Kh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bo:t.y=t.y-Math.floor(t.y);break;case ba:t.y=t.y<0?0:1;break;case Kh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Vg;Vn.DEFAULT_ANISOTROPY=1;var He=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,v=(p+1)/2,w=(u+1)/2,C=(h+f)/4,R=(d+S)/4,L=(_+m)/4;return y>v&&y>w?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=C/i,a=R/i):v>w?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=C/s,a=L/s):w<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(w),i=R/a,s=L/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-S)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this.w=ie(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this.w=ie(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$h=class extends Os{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new He(0,0,t,n),this.scissorTest=!1,this.viewport=new He(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new Vn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Go(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ts=class extends $h{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Sc=class extends Vn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tf=class extends Vn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ta=class{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Pi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Pi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Pi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Pi):Pi.fromBufferAttribute(a,r),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rh.copy(i.boundingBox)),Rh.applyMatrix4(t.matrixWorld),this.union(Rh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fc),Ch.subVectors(this.max,fc),bo.subVectors(t.a,fc),Eo.subVectors(t.b,fc),To.subVectors(t.c,fc),_a.subVectors(Eo,bo),va.subVectors(To,Eo),ir.subVectors(bo,To);let n=[0,-_a.z,_a.y,0,-va.z,va.y,0,-ir.z,ir.y,_a.z,0,-_a.x,va.z,0,-va.x,ir.z,0,-ir.x,-_a.y,_a.x,0,-va.y,va.x,0,-ir.y,ir.x,0];return!lg(n,bo,Eo,To,Ch)||(n=[1,0,0,0,1,0,0,0,1],!lg(n,bo,Eo,To,Ch))?!1:(Dh.crossVectors(_a,va),n=[Dh.x,Dh.y,Dh.z],lg(n,bo,Eo,To,Ch))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Rs=[new V,new V,new V,new V,new V,new V,new V,new V],Pi=new V,Rh=new Ta,bo=new V,Eo=new V,To=new V,_a=new V,va=new V,ir=new V,fc=new V,Ch=new V,Dh=new V,sr=new V;function lg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){sr.fromArray(e,a);let o=s.x*Math.abs(sr.x)+s.y*Math.abs(sr.y)+s.z*Math.abs(sr.z),l=t.dot(sr),c=n.dot(sr),h=i.dot(sr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var jT=new Ta,dc=new V,cg=new V,ko=class{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):jT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dc.subVectors(t,this.center);let n=dc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(dc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dc.copy(t.center).add(cg)),this.expandByPoint(dc.copy(t.center).sub(cg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Cs=new V,ug=new V,Uh=new V,ya=new V,hg=new V,Lh=new V,fg=new V,Mc=class{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Cs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Cs.copy(this.origin).addScaledVector(this.direction,n),Cs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){ug.copy(t).add(n).multiplyScalar(.5),Uh.copy(n).sub(t).normalize(),ya.copy(this.origin).sub(ug);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Uh),o=ya.dot(this.direction),l=-ya.dot(Uh),c=ya.lengthSq(),h=Math.abs(1-r*r),d,f,p,_;if(h>0)if(d=r*l-o,f=r*o-l,_=a*h,d>=0)if(f>=-_)if(f<=_){let S=1/h;d*=S,f*=S,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ug).addScaledVector(Uh,f),p}intersectSphere(t,n){Cs.subVectors(t.center,this.origin);let i=Cs.dot(this.direction),s=Cs.dot(Cs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Cs)!==null}intersectTriangle(t,n,i,s,a){hg.subVectors(n,t),Lh.subVectors(i,t),fg.crossVectors(hg,Lh);let r=this.direction.dot(fg),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ya.subVectors(this.origin,t);let l=o*this.direction.dot(Lh.crossVectors(ya,Lh));if(l<0)return null;let c=o*this.direction.dot(hg.cross(ya));if(c<0||l+c>r)return null;let h=-o*ya.dot(fg);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class e{constructor(t,n,i,s,a,r,o,l,c,h,d,f,p,_,S,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,d,f,p,_,S,m)}set(t,n,i,s,a,r,o,l,c,h,d,f,p,_,S,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Ao.setFromMatrixColumn(t,0).length(),a=1/Ao.setFromMatrixColumn(t,1).length(),r=1/Ao.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*h,p=r*d,_=o*h,S=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-S*c,n[9]=-o*l,n[2]=S-f*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,_=c*h,S=c*d;n[0]=f+S*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-_,n[6]=S+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,_=c*h,S=c*d;n[0]=f-S*o,n[4]=-r*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*h,n[9]=S-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*h,p=r*d,_=o*h,S=o*d;n[0]=l*h,n[4]=_*c-p,n[8]=f*c+S,n[1]=l*d,n[5]=S*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,_=o*l,S=o*c;n[0]=l*h,n[4]=S-f*d,n[8]=_*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+_,n[10]=f-S*d}else if(t.order==="XZY"){let f=r*l,p=r*c,_=o*l,S=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+S,n[5]=r*h,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*h,n[10]=S*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose($T,t,tA)}lookAt(t,n,i){let s=this.elements;return ui.subVectors(t,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),xa.crossVectors(i,ui),xa.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),xa.crossVectors(i,ui)),xa.normalize(),Nh.crossVectors(ui,xa),s[0]=xa.x,s[4]=Nh.x,s[8]=ui.x,s[1]=xa.y,s[5]=Nh.y,s[9]=ui.y,s[2]=xa.z,s[6]=Nh.z,s[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],_=i[2],S=i[6],m=i[10],u=i[14],g=i[3],y=i[7],v=i[11],w=i[15],C=s[0],R=s[4],L=s[8],E=s[12],b=s[1],D=s[5],B=s[9],F=s[13],k=s[2],O=s[6],H=s[10],Q=s[14],z=s[3],$=s[7],ot=s[11],pt=s[15];return a[0]=r*C+o*b+l*k+c*z,a[4]=r*R+o*D+l*O+c*$,a[8]=r*L+o*B+l*H+c*ot,a[12]=r*E+o*F+l*Q+c*pt,a[1]=h*C+d*b+f*k+p*z,a[5]=h*R+d*D+f*O+p*$,a[9]=h*L+d*B+f*H+p*ot,a[13]=h*E+d*F+f*Q+p*pt,a[2]=_*C+S*b+m*k+u*z,a[6]=_*R+S*D+m*O+u*$,a[10]=_*L+S*B+m*H+u*ot,a[14]=_*E+S*F+m*Q+u*pt,a[3]=g*C+y*b+v*k+w*z,a[7]=g*R+y*D+v*O+w*$,a[11]=g*L+y*B+v*H+w*ot,a[15]=g*E+y*F+v*Q+w*pt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],_=t[3],S=t[7],m=t[11],u=t[15];return _*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+S*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*h-a*l*h)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*h-i*c*h)+u*(-s*o*h-n*l*d+n*o*f+s*r*d-i*r*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],_=t[12],S=t[13],m=t[14],u=t[15],g=d*m*c-S*f*c+S*l*p-o*m*p-d*l*u+o*f*u,y=_*f*c-h*m*c-_*l*p+r*m*p+h*l*u-r*f*u,v=h*S*c-_*d*c+_*o*p-r*S*p-h*o*u+r*d*u,w=_*d*l-h*S*l-_*o*f+r*S*f+h*o*m-r*d*m,C=n*g+i*y+s*v+a*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=g*R,t[1]=(S*f*a-d*m*a-S*s*p+i*m*p+d*s*u-i*f*u)*R,t[2]=(o*m*a-S*l*a+S*s*c-i*m*c-o*s*u+i*l*u)*R,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*R,t[4]=y*R,t[5]=(h*m*a-_*f*a+_*s*p-n*m*p-h*s*u+n*f*u)*R,t[6]=(_*l*a-r*m*a-_*s*c+n*m*c+r*s*u-n*l*u)*R,t[7]=(r*f*a-h*l*a+h*s*c-n*f*c-r*s*p+n*l*p)*R,t[8]=v*R,t[9]=(_*d*a-h*S*a-_*i*p+n*S*p+h*i*u-n*d*u)*R,t[10]=(r*S*a-_*o*a+_*i*c-n*S*c-r*i*u+n*o*u)*R,t[11]=(h*o*a-r*d*a-h*i*c+n*d*c+r*i*p-n*o*p)*R,t[12]=w*R,t[13]=(h*S*s-_*d*s+_*i*f-n*S*f-h*i*m+n*d*m)*R,t[14]=(_*o*s-r*S*s-_*i*l+n*S*l+r*i*m-n*o*m)*R,t[15]=(r*d*s-h*o*s+h*i*l-n*d*l-r*i*f+n*o*f)*R,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,d=o+o,f=a*c,p=a*h,_=a*d,S=r*h,m=r*d,u=o*d,g=l*c,y=l*h,v=l*d,w=i.x,C=i.y,R=i.z;return s[0]=(1-(S+u))*w,s[1]=(p+v)*w,s[2]=(_-y)*w,s[3]=0,s[4]=(p-v)*C,s[5]=(1-(f+u))*C,s[6]=(m+g)*C,s[7]=0,s[8]=(_+y)*R,s[9]=(m-g)*R,s[10]=(1-(f+S))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=Ao.set(s[0],s[1],s[2]).length(),r=Ao.set(s[4],s[5],s[6]).length(),o=Ao.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Bi.copy(this);let c=1/a,h=1/r,d=1/o;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=d,Bi.elements[9]*=d,Bi.elements[10]*=d,n.setFromRotationMatrix(Bi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Fi,l=!1){let c=this.elements,h=2*a/(n-t),d=2*a/(i-s),f=(n+t)/(n-t),p=(i+s)/(i-s),_,S;if(l)_=a/(r-a),S=r*a/(r-a);else if(o===Fi)_=-(r+a)/(r-a),S=-2*r*a/(r-a);else if(o===xc)_=-r/(r-a),S=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Fi,l=!1){let c=this.elements,h=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),p=-(i+s)/(i-s),_,S;if(l)_=1/(r-a),S=r/(r-a);else if(o===Fi)_=-2/(r-a),S=-(r+a)/(r-a);else if(o===xc)_=-1/(r-a),S=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Ao=new V,Bi=new qe,$T=new V(0,0,0),tA=new V(1,1,1),xa=new V,Nh=new V,ui=new V,XS=new qe,WS=new Ps,Vi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return XS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(XS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return WS.setFromEuler(this),this.setFromQuaternion(WS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var Xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},eA=0,qS=new V,wo=new Ps,Ds=new qe,Ih=new V,pc=new V,nA=new V,iA=new Ps,YS=new V(1,0,0),ZS=new V(0,1,0),JS=new V(0,0,1),KS={type:"added"},sA={type:"removed"},Ro={type:"childadded",child:null},dg={type:"childremoved",child:null},Cn=class e extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eA++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Vi,i=new Ps,s=new V(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Zt}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return wo.setFromAxisAngle(t,n),this.quaternion.multiply(wo),this}rotateOnWorldAxis(t,n){return wo.setFromAxisAngle(t,n),this.quaternion.premultiply(wo),this}rotateX(t){return this.rotateOnAxis(YS,t)}rotateY(t){return this.rotateOnAxis(ZS,t)}rotateZ(t){return this.rotateOnAxis(JS,t)}translateOnAxis(t,n){return qS.copy(t).applyQuaternion(this.quaternion),this.position.add(qS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(YS,t)}translateY(t){return this.translateOnAxis(ZS,t)}translateZ(t){return this.translateOnAxis(JS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ds.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ih.copy(t):Ih.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),pc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ds.lookAt(pc,Ih,this.up):Ds.lookAt(Ih,pc,this.up),this.quaternion.setFromRotationMatrix(Ds),s&&(Ds.extractRotation(s.matrixWorld),wo.setFromRotationMatrix(Ds),this.quaternion.premultiply(wo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(KS),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(sA),dg.child=t,this.dispatchEvent(dg),dg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(KS),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pc,t,nA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pc,iA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Cn.DEFAULT_UP=new V(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zi=new V,Us=new V,pg=new V,Ls=new V,Co=new V,Do=new V,QS=new V,mg=new V,gg=new V,_g=new V,vg=new He,yg=new He,xg=new He,ji=class e{constructor(t=new V,n=new V,i=new V){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),zi.subVectors(t,n),s.cross(zi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){zi.subVectors(s,n),Us.subVectors(i,n),pg.subVectors(t,n);let r=zi.dot(zi),o=zi.dot(Us),l=zi.dot(pg),c=Us.dot(Us),h=Us.dot(pg),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,_=(r*h-o*l)*f;return a.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ls)===null?!1:Ls.x>=0&&Ls.y>=0&&Ls.x+Ls.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ls.x),l.addScaledVector(r,Ls.y),l.addScaledVector(o,Ls.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return vg.setScalar(0),yg.setScalar(0),xg.setScalar(0),vg.fromBufferAttribute(t,n),yg.fromBufferAttribute(t,i),xg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(vg,a.x),r.addScaledVector(yg,a.y),r.addScaledVector(xg,a.z),r}static isFrontFacing(t,n,i,s){return zi.subVectors(i,n),Us.subVectors(t,n),zi.cross(Us).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),Us.subVectors(this.a,this.b),zi.cross(Us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Co.subVectors(s,i),Do.subVectors(a,i),mg.subVectors(t,i);let l=Co.dot(mg),c=Do.dot(mg);if(l<=0&&c<=0)return n.copy(i);gg.subVectors(t,s);let h=Co.dot(gg),d=Do.dot(gg);if(h>=0&&d<=h)return n.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Co,r);_g.subVectors(t,a);let p=Co.dot(_g),_=Do.dot(_g);if(_>=0&&p<=_)return n.copy(a);let S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Do,o);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return QS.subVectors(a,s),o=(d-h)/(d-h+(p-_)),n.copy(s).addScaledVector(QS,o);let u=1/(m+S+f);return r=S*u,o=f*u,n.copy(i).addScaledVector(Co,r).addScaledVector(Do,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ZM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sa={h:0,s:0,l:0},Oh={h:0,s:0,l:0};function Sg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var se=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ce.workingColorSpace){return this.r=t,this.g=n,this.b=i,ce.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ce.workingColorSpace){if(t=$g(t,1),n=ie(n,0,1),i=ie(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Sg(r,a,t+1/3),this.g=Sg(r,a,t),this.b=Sg(r,a,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,n=wn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=wn){let i=ZM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}copyLinearToSRGB(t){return this.r=Po(t.r),this.g=Po(t.g),this.b=Po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return ce.workingToColorSpace(An.copy(this),t),Math.round(ie(An.r*255,0,255))*65536+Math.round(ie(An.g*255,0,255))*256+Math.round(ie(An.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ce.workingColorSpace){ce.workingToColorSpace(An.copy(this),n);let i=An.r,s=An.g,a=An.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ce.workingColorSpace){return ce.workingToColorSpace(An.copy(this),n),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=wn){ce.workingToColorSpace(An.copy(this),t);let n=An.r,i=An.g,s=An.b;return t!==wn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Sa),this.setHSL(Sa.h+t,Sa.s+n,Sa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Sa),t.getHSL(Oh);let i=_c(Sa.h,Oh.h,n),s=_c(Sa.s,Oh.s,n),a=_c(Sa.l,Oh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new se;se.NAMES=ZM;var aA=0,Bs=class extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=el(),this.name="",this.type="Material",this.blending=lr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Jh,this.blendEquation=Ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zh&&(i.blendSrc=this.blendSrc),this.blendDst!==Jh&&(i.blendDst=this.blendDst),this.blendEquation!==Ea&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},bc=class extends Bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var en=new V,Ph=new oe,rA=0,Mn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Dg,this.updateRanges=[],this.gpuType=is,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ph.fromBufferAttribute(this,n),Ph.applyMatrix3(t),this.setXY(n,Ph.x,Ph.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix3(t),this.setXYZ(n,en.x,en.y,en.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(t),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(t),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(t),this.setXYZ(n,en.x,en.y,en.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Oo(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Oo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Oo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Oo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Oo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),i=Hn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),i=Hn(i,this.array),s=Hn(s,this.array),a=Hn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dg&&(t.usage=this.usage),t}};var Ec=class extends Mn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Tc=class extends Mn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var $i=class extends Mn{constructor(t,n,i){super(new Float32Array(t),n,i)}},oA=0,Ti=new qe,Mg=new Cn,Uo=new V,hi=new Ta,mc=new Ta,mn=new V,es=class e extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oA++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t0(t)?Tc:Ec)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Zt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,n,i){return Ti.makeTranslation(t,n,i),this.applyMatrix4(Ti),this}scale(t,n,i){return Ti.makeScale(t,n,i),this.applyMatrix4(Ti),this}lookAt(t){return Mg.lookAt(t),Mg.updateMatrix(),this.applyMatrix4(Mg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new $i(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ta);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];hi.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];mc.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(hi.min,mc.min),hi.expandByPoint(mn),mn.addVectors(hi.max,mc.max),hi.expandByPoint(mn)):(hi.expandByPoint(mc.min),hi.expandByPoint(mc.max))}hi.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)mn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(mn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mn.fromBufferAttribute(o,c),l&&(Uo.fromBufferAttribute(t,c),mn.add(Uo)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new V,l[L]=new V;let c=new V,h=new V,d=new V,f=new oe,p=new oe,_=new oe,S=new V,m=new V;function u(L,E,b){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,b),f.fromBufferAttribute(a,L),p.fromBufferAttribute(a,E),_.fromBufferAttribute(a,b),h.sub(c),d.sub(c),p.sub(f),_.sub(f);let D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(D),o[L].add(S),o[E].add(S),o[b].add(S),l[L].add(m),l[E].add(m),l[b].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let L=0,E=g.length;L<E;++L){let b=g[L],D=b.start,B=b.count;for(let F=D,k=D+B;F<k;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new V,v=new V,w=new V,C=new V;function R(L){w.fromBufferAttribute(s,L),C.copy(w);let E=o[L];y.copy(E),y.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(C,E);let D=v.dot(l[L])<0?-1:1;r.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,E=g.length;L<E;++L){let b=g[L],D=b.start,B=b.count;for(let F=D,k=D+B;F<k;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new V,a=new V,r=new V,o=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)mn.fromBufferAttribute(t,n),mn.normalize(),t.setXYZ(n,mn.x,mn.y,mn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let u=0;u<h;u++)f[_++]=c[p++]}return new Mn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],d=a[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jS=new qe,ar=new Mc,Bh=new ko,$S=new V,zh=new V,Fh=new V,Hh=new V,bg=new V,Vh=new V,tM=new V,Gh=new V,Dn=class extends Cn{constructor(t=new es,n=new bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Vh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],d=a[l];h!==0&&(bg.fromBufferAttribute(d,t),r?Vh.addScaledVector(bg,h):Vh.addScaledVector(bg.sub(n),h))}n.add(Vh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bh.copy(i.boundingSphere),Bh.applyMatrix4(a),ar.copy(t.ray).recast(t.near),!(Bh.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Bh,$S)===null||ar.origin.distanceToSquared($S)>(t.far-t.near)**2))&&(jS.copy(a).invert(),ar.copy(t.ray).applyMatrix4(jS),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ar)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,S=f.length;_<S;_++){let m=f[_],u=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,w=y;v<w;v+=3){let C=o.getX(v),R=o.getX(v+1),L=o.getX(v+2);s=kh(this,u,t,i,c,h,d,C,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){let g=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=kh(this,r,t,i,c,h,d,g,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,S=f.length;_<S;_++){let m=f[_],u=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,w=y;v<w;v+=3){let C=v,R=v+1,L=v+2;s=kh(this,u,t,i,c,h,d,C,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){let g=m,y=m+1,v=m+2;s=kh(this,r,t,i,c,h,d,g,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function lA(e,t,n,i,s,a,r,o){let l;if(t.side===bn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Hi,o),l===null)return null;Gh.copy(o),Gh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Gh);return c<n.near||c>n.far?null:{distance:c,point:Gh.clone(),object:e}}function kh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,zh),e.getVertexPosition(l,Fh),e.getVertexPosition(c,Hh);let h=lA(e,t,n,i,zh,Fh,Hh,tM);if(h){let d=new V;ji.getBarycoord(tM,zh,Fh,Hh,d),s&&(h.uv=ji.getInterpolatedAttribute(s,o,l,c,d,new oe)),a&&(h.uv1=ji.getInterpolatedAttribute(a,o,l,c,d,new oe)),r&&(h.normal=ji.getInterpolatedAttribute(r,o,l,c,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new V,materialIndex:0};ji.getNormal(zh,Fh,Hh,f.normal),h.face=f,h.barycoord=d}return h}var Wo=class e extends es{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],d=[],f=0,p=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new $i(c,3)),this.setAttribute("normal",new $i(h,3)),this.setAttribute("uv",new $i(d,2));function _(S,m,u,g,y,v,w,C,R,L,E){let b=v/R,D=w/L,B=v/2,F=w/2,k=C/2,O=R+1,H=L+1,Q=0,z=0,$=new V;for(let ot=0;ot<H;ot++){let pt=ot*D-F;for(let Ut=0;Ut<O;Ut++){let qt=Ut*b-B;$[S]=qt*g,$[m]=pt*y,$[u]=k,c.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[u]=C>0?1:-1,h.push($.x,$.y,$.z),d.push(Ut/R),d.push(1-ot/L),Q+=1}}for(let ot=0;ot<L;ot++)for(let pt=0;pt<R;pt++){let Ut=f+pt+O*ot,qt=f+pt+O*(ot+1),Vt=f+(pt+1)+O*(ot+1),Xt=f+(pt+1)+O*ot;l.push(Ut,qt,Xt),l.push(qt,Vt,Xt),z+=6}o.addGroup(p,z,E),p+=z,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function mr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function Un(e){let t={};for(let n=0;n<e.length;n++){let i=mr(e[n]);for(let s in i)t[s]=i[s]}return t}function cA(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function e0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var JM={clone:mr,merge:Un},uA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gi=class extends Bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uA,this.fragmentShader=hA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=cA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Ac=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ma=new V,eM=new oe,nM=new oe,Rn=class extends Ac{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Fo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ma.x,Ma.y).multiplyScalar(-t/Ma.z),Ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ma.x,Ma.y).multiplyScalar(-t/Ma.z)}getViewSize(t,n){return this.getViewBounds(t,eM,nM),n.subVectors(nM,eM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(gc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Lo=-90,No=1,ef=class extends Cn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(Lo,No,t,n);s.layers=this.layers,this.add(s);let a=new Rn(Lo,No,t,n);a.layers=this.layers,this.add(a);let r=new Rn(Lo,No,t,n);r.layers=this.layers,this.add(r);let o=new Rn(Lo,No,t,n);o.layers=this.layers,this.add(o);let l=new Rn(Lo,No,t,n);l.layers=this.layers,this.add(l);let c=new Rn(Lo,No,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},wc=class extends Vn{constructor(t=[],n=dr,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nf=class extends ts{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new wc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wo(5,5,5),a=new Gi({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:zs});a.uniforms.tEquirect.value=n;let r=new Dn(s,a),o=n.minFilter;return n.minFilter===Ra&&(n.minFilter=Qn),new ef(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Ns=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},fA={type:"move"},qo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let S of t.hand.values()){let m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ns;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var Rc=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Cc=class extends Vn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Kn,h=Kn,d,f){super(null,r,o,l,c,h,s,a,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Eg=new V,dA=new V,pA=new Zt,Ai=class{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Eg.subVectors(i,n).cross(dA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Eg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||pA.getNormalMatrix(t),s=this.coplanarPoint(Eg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new ko,mA=new oe(.5,.5),Xh=new V,Yo=class{constructor(t=new Ai,n=new Ai,i=new Ai,s=new Ai,a=new Ai,r=new Ai){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Fi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],f=a[6],p=a[7],_=a[8],S=a[9],m=a[10],u=a[11],g=a[12],y=a[13],v=a[14],w=a[15];if(s[0].setComponents(c-r,p-h,u-_,w-g).normalize(),s[1].setComponents(c+r,p+h,u+_,w+g).normalize(),s[2].setComponents(c+o,p+d,u+S,w+y).normalize(),s[3].setComponents(c-o,p-d,u-S,w-y).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,p-f,u-m,w-v).normalize();else if(s[4].setComponents(c-l,p-f,u-m,w-v).normalize(),n===Fi)s[5].setComponents(c+l,p+f,u+m,w+v).normalize();else if(n===xc)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){rr.center.set(0,0,0);let n=mA.distanceTo(t.center);return rr.radius=.7071067811865476+n,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Xh.x=s.normal.x>0?t.max.x:t.min.x,Xh.y=s.normal.y>0?t.max.y:t.min.y,Xh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Dc=class extends Vn{constructor(t,n,i=Ca,s,a,r,o=Kn,l=Kn,c,h=zo,d=1){if(h!==zo&&h!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Uc=class extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var hr=class e extends es{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=n/l,p=[],_=[],S=[],m=[];for(let u=0;u<h;u++){let g=u*f-r;for(let y=0;y<c;y++){let v=y*d-a;_.push(v,-g,0),S.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let y=g+c*u,v=g+c*(u+1),w=g+1+c*(u+1),C=g+1+c*u;p.push(y,v,C),p.push(v,w,C)}this.setIndex(p),this.setAttribute("position",new $i(_,3)),this.setAttribute("normal",new $i(S,3)),this.setAttribute("uv",new $i(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Lc=class extends Bs{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new se(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Zo=class extends Bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kg,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Jo=class extends Bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sf=class extends Bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function gA(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var fr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},af=class extends fr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ag,endingEnd:Ag}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case wg:a=t,o=2*n-i;break;case Rg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wg:r=t,l=2*i-n;break;case Rg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),S=_*_,m=S*_,u=-f*m+2*f*S-f*_,g=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*_+1,y=(-1-p)*m+(1.5+p)*S+.5*_,v=p*m-p*S;for(let w=0;w!==o;++w)a[w]=u*r[h+w]+g*r[c+w]+y*r[l+w]+v*r[d+w];return a}},rf=class extends fr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*h;return a}},of=class extends fr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wh(n,this.TimeBufferType),this.values=Wh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Wh(t.times,Array),values:Wh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new of(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new af(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case vc:n=this.InterpolantFactoryMethodDiscrete;break;case Qh:n=this.InterpolantFactoryMethodLinear;break;case qh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vc;case this.InterpolantFactoryMethodLinear:return Qh;case this.InterpolantFactoryMethodSmooth:return qh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&gA(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){let S=n[d+_];if(S!==n[f+_]||S!==n[p+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Qh;var Aa=class extends fi{constructor(t,n,i){super(t,n,i)}};Aa.prototype.ValueTypeName="bool";Aa.prototype.ValueBufferType=Array;Aa.prototype.DefaultInterpolation=vc;Aa.prototype.InterpolantFactoryMethodLinear=void 0;Aa.prototype.InterpolantFactoryMethodSmooth=void 0;var lf=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}};lf.prototype.ValueTypeName="color";var cf=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}};cf.prototype.ValueTypeName="number";var uf=class extends fr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)Ps.slerpFlat(a,0,r,c-o,r,c,l);return a}},Nc=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new uf(this.times,this.values,this.getValueSize(),t)}};Nc.prototype.ValueTypeName="quaternion";Nc.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends fi{constructor(t,n,i){super(t,n,i)}};wa.prototype.ValueTypeName="string";wa.prototype.ValueBufferType=Array;wa.prototype.DefaultInterpolation=vc;wa.prototype.InterpolantFactoryMethodLinear=void 0;wa.prototype.InterpolantFactoryMethodSmooth=void 0;var hf=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}};hf.prototype.ValueTypeName="vector";var Yh={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},ff=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},KM=new ff,Ko=class{constructor(t){this.manager=t!==void 0?t:KM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var Io=new WeakMap,df=class extends Ko{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=Yh.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let d=Io.get(r);d===void 0&&(d=[],Io.set(r,d)),d.push({onLoad:n,onError:s})}return r}let o=Ho("img");function l(){h(),n&&n(this);let d=Io.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onLoad&&p.onLoad(this)}Io.delete(this),a.manager.itemEnd(t)}function c(d){h(),s&&s(d),Yh.remove(`image:${t}`);let f=Io.get(this)||[];for(let p=0;p<f.length;p++){let _=f[p];_.onError&&_.onError(d)}Io.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Yh.add(`image:${t}`,o),a.manager.itemStart(t),o.src=t,o}};var Ic=class extends Ko{constructor(t){super(t)}load(t,n,i,s){let a=new Vn,r=new df(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}},Oc=class extends Cn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},Pc=class extends Oc{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},Tg=new qe,iM=new V,sM=new V,Ug=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=ki,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;iM.setFromMatrixPosition(t.matrixWorld),n.position.copy(iM),sM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(sM),n.updateMatrixWorld(),Tg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tg,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tg)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Bc=class extends Ac{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Lg=class extends Ug{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zc=class extends Oc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new Lg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var pf=class extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var n0="\\[\\]\\.:\\/",_A=new RegExp("["+n0+"]","g"),i0="[^"+n0+"]",vA="[^"+n0.replace("\\.","")+"]",yA=/((?:WC+[\/:])*)/.source.replace("WC",i0),xA=/(WCOD+)?/.source.replace("WCOD",vA),SA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",i0),MA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",i0),bA=new RegExp("^"+yA+xA+SA+MA+"$"),EA=["material","materials","bones","map"],Ng=class{constructor(t,n,i){let s=i||Oe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Oe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_A,"")}static parseTrackName(t){let n=bA.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);EA.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Ng;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y3=new Float32Array(1);var aM=new qe,Fc=class{constructor(t,n,i=0,s=1/0){this.ray=new Mc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return aM.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(aM),this}intersectObject(t,n=!0,i=[]){return Ig(t,this,i,n),i.sort(rM),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)Ig(t[s],this,i,n);return i.sort(rM),i}};function rM(e,t){return e.distance-t.distance}function Ig(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)Ig(a[r],t,n,!0)}}function s0(e,t,n,i){let s=TA(i);switch(n){case qg:return e*t;case Zg:return e*t/s.components*s.byteLength;case Cf:return e*t/s.components*s.byteLength;case Jg:return e*t*2/s.components*s.byteLength;case Df:return e*t*2/s.components*s.byteLength;case Yg:return e*t*3/s.components*s.byteLength;case Ri:return e*t*4/s.components*s.byteLength;case Uf:return e*t*4/s.components*s.byteLength;case Gc:case kc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Nf:case Of:return Math.max(e,16)*Math.max(t,8)/4;case Lf:case If:return Math.max(e,8)*Math.max(t,8)/2;case Pf:case Bf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case zf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ff:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Vf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Gf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case kf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Xf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Wf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case qf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Yf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Zf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Jf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Kf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Qf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case jf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case $f:case td:case ed:return Math.ceil(e/4)*Math.ceil(t/4)*16;case nd:case id:return Math.ceil(e/4)*Math.ceil(t/4)*8;case sd:case ad:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TA(e){switch(e){case ki:case Gg:return{byteLength:1,components:1};case Qo:case kg:case jo:return{byteLength:2,components:1};case wf:case Rf:return{byteLength:2,components:4};case Ca:case Af:case is:return{byteLength:4,components:1};case Xg:case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function xb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function wA(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,d[f]=S)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let S=d[p];e.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var RA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,BA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,XA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$A=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ew=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",aw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_w=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ew=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Aw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ww=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ow=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$w=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_R=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ER=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$R=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:RA,alphahash_pars_fragment:CA,alphamap_fragment:DA,alphamap_pars_fragment:UA,alphatest_fragment:LA,alphatest_pars_fragment:NA,aomap_fragment:IA,aomap_pars_fragment:OA,batching_pars_vertex:PA,batching_vertex:BA,begin_vertex:zA,beginnormal_vertex:FA,bsdfs:HA,iridescence_fragment:VA,bumpmap_pars_fragment:GA,clipping_planes_fragment:kA,clipping_planes_pars_fragment:XA,clipping_planes_pars_vertex:WA,clipping_planes_vertex:qA,color_fragment:YA,color_pars_fragment:ZA,color_pars_vertex:JA,color_vertex:KA,common:QA,cube_uv_reflection_fragment:jA,defaultnormal_vertex:$A,displacementmap_pars_vertex:tw,displacementmap_vertex:ew,emissivemap_fragment:nw,emissivemap_pars_fragment:iw,colorspace_fragment:sw,colorspace_pars_fragment:aw,envmap_fragment:rw,envmap_common_pars_fragment:ow,envmap_pars_fragment:lw,envmap_pars_vertex:cw,envmap_physical_pars_fragment:xw,envmap_vertex:uw,fog_vertex:hw,fog_pars_vertex:fw,fog_fragment:dw,fog_pars_fragment:pw,gradientmap_pars_fragment:mw,lightmap_pars_fragment:gw,lights_lambert_fragment:_w,lights_lambert_pars_fragment:vw,lights_pars_begin:yw,lights_toon_fragment:Sw,lights_toon_pars_fragment:Mw,lights_phong_fragment:bw,lights_phong_pars_fragment:Ew,lights_physical_fragment:Tw,lights_physical_pars_fragment:Aw,lights_fragment_begin:ww,lights_fragment_maps:Rw,lights_fragment_end:Cw,logdepthbuf_fragment:Dw,logdepthbuf_pars_fragment:Uw,logdepthbuf_pars_vertex:Lw,logdepthbuf_vertex:Nw,map_fragment:Iw,map_pars_fragment:Ow,map_particle_fragment:Pw,map_particle_pars_fragment:Bw,metalnessmap_fragment:zw,metalnessmap_pars_fragment:Fw,morphinstance_vertex:Hw,morphcolor_vertex:Vw,morphnormal_vertex:Gw,morphtarget_pars_vertex:kw,morphtarget_vertex:Xw,normal_fragment_begin:Ww,normal_fragment_maps:qw,normal_pars_fragment:Yw,normal_pars_vertex:Zw,normal_vertex:Jw,normalmap_pars_fragment:Kw,clearcoat_normal_fragment_begin:Qw,clearcoat_normal_fragment_maps:jw,clearcoat_pars_fragment:$w,iridescence_pars_fragment:tR,opaque_fragment:eR,packing:nR,premultiplied_alpha_fragment:iR,project_vertex:sR,dithering_fragment:aR,dithering_pars_fragment:rR,roughnessmap_fragment:oR,roughnessmap_pars_fragment:lR,shadowmap_pars_fragment:cR,shadowmap_pars_vertex:uR,shadowmap_vertex:hR,shadowmask_pars_fragment:fR,skinbase_vertex:dR,skinning_pars_vertex:pR,skinning_vertex:mR,skinnormal_vertex:gR,specularmap_fragment:_R,specularmap_pars_fragment:vR,tonemapping_fragment:yR,tonemapping_pars_fragment:xR,transmission_fragment:SR,transmission_pars_fragment:MR,uv_pars_fragment:bR,uv_pars_vertex:ER,uv_vertex:TR,worldpos_vertex:AR,background_vert:wR,background_frag:RR,backgroundCube_vert:CR,backgroundCube_frag:DR,cube_vert:UR,cube_frag:LR,depth_vert:NR,depth_frag:IR,distanceRGBA_vert:OR,distanceRGBA_frag:PR,equirect_vert:BR,equirect_frag:zR,linedashed_vert:FR,linedashed_frag:HR,meshbasic_vert:VR,meshbasic_frag:GR,meshlambert_vert:kR,meshlambert_frag:XR,meshmatcap_vert:WR,meshmatcap_frag:qR,meshnormal_vert:YR,meshnormal_frag:ZR,meshphong_vert:JR,meshphong_frag:KR,meshphysical_vert:QR,meshphysical_frag:jR,meshtoon_vert:$R,meshtoon_frag:tC,points_vert:eC,points_frag:nC,shadow_vert:iC,shadow_frag:sC,sprite_vert:aC,sprite_frag:rC},mt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ss={basic:{uniforms:Un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new se(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Un([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Un([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new se(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Un([mt.points,mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Un([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Un([mt.common,mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Un([mt.sprite,mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Un([mt.common,mt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Un([mt.lights,mt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};ss.physical={uniforms:Un([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var ld={r:0,b:0,g:0},gr=new Vi,oC=new qe;function lC(e,t,n,i,s,a,r){let o=new se(0),l=a===!0?0:1,c,h,d=null,f=0,p=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:t).get(v)),v}function S(y){let v=!1,w=_(y);w===null?u(o,l):w&&w.isColor&&(u(w,1),v=!0);let C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,v){let w=_(v);w&&(w.isCubeTexture||w.mapping===Hc)?(h===void 0&&(h=new Dn(new Wo(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:mr(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gr.copy(v.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(oC.makeRotationFromEuler(gr)),h.material.toneMapped=ce.getTransfer(w.colorSpace)!==Se,(d!==w||f!==w.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Dn(new hr(2,2),new Gi({name:"BackgroundMaterial",uniforms:mr(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ce.getTransfer(w.colorSpace)!==Se,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,v){y.getRGB(ld,e0(e)),i.buffers.color.setClear(ld.r,ld.g,ld.b,v,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:S,addToRenderList:m,dispose:g}}function cC(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(b,D,B,F,k){let O=!1,H=d(F,B,D);a!==H&&(a=H,c(a.object)),O=p(b,F,B,k),O&&_(b,F,B,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,v(b,D,B,F),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function h(b){return e.deleteVertexArray(b)}function d(b,D,B){let F=B.wireframe===!0,k=i[b.id];k===void 0&&(k={},i[b.id]=k);let O=k[D.id];O===void 0&&(O={},k[D.id]=O);let H=O[F];return H===void 0&&(H=f(l()),O[F]=H),H}function f(b){let D=[],B=[],F=[];for(let k=0;k<n;k++)D[k]=0,B[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:F,object:b,attributes:{},index:null}}function p(b,D,B,F){let k=a.attributes,O=D.attributes,H=0,Q=B.getAttributes();for(let z in Q)if(Q[z].location>=0){let ot=k[z],pt=O[z];if(pt===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor)),ot===void 0||ot.attribute!==pt||pt&&ot.data!==pt.data)return!0;H++}return a.attributesNum!==H||a.index!==F}function _(b,D,B,F){let k={},O=D.attributes,H=0,Q=B.getAttributes();for(let z in Q)if(Q[z].location>=0){let ot=O[z];ot===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor));let pt={};pt.attribute=ot,ot&&ot.data&&(pt.data=ot.data),k[z]=pt,H++}a.attributes=k,a.attributesNum=H,a.index=F}function S(){let b=a.newAttributes;for(let D=0,B=b.length;D<B;D++)b[D]=0}function m(b){u(b,0)}function u(b,D){let B=a.newAttributes,F=a.enabledAttributes,k=a.attributeDivisors;B[b]=1,F[b]===0&&(e.enableVertexAttribArray(b),F[b]=1),k[b]!==D&&(e.vertexAttribDivisor(b,D),k[b]=D)}function g(){let b=a.newAttributes,D=a.enabledAttributes;for(let B=0,F=D.length;B<F;B++)D[B]!==b[B]&&(e.disableVertexAttribArray(B),D[B]=0)}function y(b,D,B,F,k,O,H){H===!0?e.vertexAttribIPointer(b,D,B,k,O):e.vertexAttribPointer(b,D,B,F,k,O)}function v(b,D,B,F){S();let k=F.attributes,O=B.getAttributes(),H=D.defaultAttributeValues;for(let Q in O){let z=O[Q];if(z.location>=0){let $=k[Q];if($===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),$!==void 0){let ot=$.normalized,pt=$.itemSize,Ut=t.get($);if(Ut===void 0)continue;let qt=Ut.buffer,Vt=Ut.type,Xt=Ut.bytesPerElement,Y=Vt===e.INT||Vt===e.UNSIGNED_INT||$.gpuType===Af;if($.isInterleavedBufferAttribute){let j=$.data,gt=j.stride,bt=$.offset;if(j.isInstancedInterleavedBuffer){for(let wt=0;wt<z.locationSize;wt++)u(z.location+wt,j.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let wt=0;wt<z.locationSize;wt++)m(z.location+wt);e.bindBuffer(e.ARRAY_BUFFER,qt);for(let wt=0;wt<z.locationSize;wt++)y(z.location+wt,pt/z.locationSize,Vt,ot,gt*Xt,(bt+pt/z.locationSize*wt)*Xt,Y)}else{if($.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)u(z.location+j,$.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let j=0;j<z.locationSize;j++)m(z.location+j);e.bindBuffer(e.ARRAY_BUFFER,qt);for(let j=0;j<z.locationSize;j++)y(z.location+j,pt/z.locationSize,Vt,ot,pt*Xt,pt/z.locationSize*j*Xt,Y)}}else if(H!==void 0){let ot=H[Q];if(ot!==void 0)switch(ot.length){case 2:e.vertexAttrib2fv(z.location,ot);break;case 3:e.vertexAttrib3fv(z.location,ot);break;case 4:e.vertexAttrib4fv(z.location,ot);break;default:e.vertexAttrib1fv(z.location,ot)}}}}g()}function w(){L();for(let b in i){let D=i[b];for(let B in D){let F=D[B];for(let k in F)h(F[k].object),delete F[k];delete D[B]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;let D=i[b.id];for(let B in D){let F=D[B];for(let k in F)h(F[k].object),delete F[k];delete D[B]}delete i[b.id]}function R(b){for(let D in i){let B=i[D];if(B[b.id]===void 0)continue;let F=B[b.id];for(let k in F)h(F[k].object),delete F[k];delete B[b.id]}}function L(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function uC(e,t,n){let i;function s(c){i=c}function a(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function r(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)r(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let _=0;for(let S=0;S<d;S++)_+=h[S]*f[S];n.update(_,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hC(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==Ri&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let L=R===jo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ki&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==is&&!L)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:w,maxSamples:C}}function fC(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ai,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||_===null||_.length===0||a&&!m)a?h(null):c();else{let g=a?0:i,y=g*4,v=u.clippingState||null;l.value=v,v=h(_,f,y,p);for(let w=0;w!==y;++w)v[w]=n[w];u.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,_){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,_!==!0||m===null){let u=p+S*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,v=p;y!==S;++y,v+=4)r.copy(d[y]).applyMatrix4(g,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function dC(e){let t=new WeakMap;function n(r,o){return o===bf?r.mapping=dr:o===Ef&&(r.mapping=pr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===bf||o===Ef)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new nf(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var il=4,QM=[.125,.215,.35,.446,.526,.582],yr=20,a0=new Bc,jM=new se,r0=null,o0=0,l0=0,c0=!1,vr=(1+Math.sqrt(5))/2,nl=1/vr,$M=[new V(-vr,nl,0),new V(vr,nl,0),new V(-nl,0,vr),new V(nl,0,vr),new V(0,vr,-nl),new V(0,vr,nl),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],pC=new V,hd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=pC}=a;r0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),l0=this._renderer.getActiveMipmapLevel(),c0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(r0,o0,l0),this._renderer.xr.enabled=c0,t.scissorTest=!1,cd(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===dr||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),r0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),l0=this._renderer.getActiveMipmapLevel(),c0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:jo,format:Ri,colorSpace:ur,depthBuffer:!1},s=tb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mC(a)),this._blurMaterial=gC(a,t,n)}return s}_compileMaterial(t){let n=new Dn(this._lodPlanes[0],t);this._renderer.compile(n,a0)}_sceneToCubeUV(t,n,i,s,a){let l=new Rn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(jM),d.toneMapping=Fs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let S=new bc({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),m=new Dn(new Wo,S),u=!1,g=t.background;g?g.isColor&&(S.color.copy(g),t.background=null,u=!0):(S.color.copy(jM),u=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[y],a.y,a.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[y],a.z)):(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[y]));let w=this._cubeSize;cd(s,v*w,y>2?w:0,w,w),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===dr||t.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Dn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;cd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,a0)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=$M[(s-a-1)%$M.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Dn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*yr-1),S=a/_,m=isFinite(a)?1+Math.floor(h*S):yr;m>yr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);let u=[],g=0;for(let R=0;R<yr;++R){let L=R/S,E=Math.exp(-L*L/2);u.push(E),R===0?g+=E:R<m&&(g+=2*E)}for(let R=0;R<u.length;R++)u[R]=u[R]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;let v=this._sizeLods[s],w=3*v*(s>y-il?s-y+il:0),C=4*(this._cubeSize-v);cd(n,w,C,3*v,2*v),l.setRenderTarget(n),l.render(d,a0)}};function mC(e){let t=[],n=[],i=[],s=e,a=e-il+1+QM.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-il?l=QM[r-e+il-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,S=3,m=2,u=1,g=new Float32Array(S*_*p),y=new Float32Array(m*_*p),v=new Float32Array(u*_*p);for(let C=0;C<p;C++){let R=C%3*2/3-1,L=C>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];g.set(E,S*_*C),y.set(f,m*_*C);let b=[C,C,C,C,C,C];v.set(b,u*_*C)}let w=new es;w.setAttribute("position",new Mn(g,S)),w.setAttribute("uv",new Mn(y,m)),w.setAttribute("faceIndex",new Mn(v,u)),t.push(w),s>il&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function tb(e,t,n){let i=new ts(e,t,n);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cd(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function gC(e,t,n){let i=new Float32Array(yr),s=new V(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:y0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function eb(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:y0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function nb(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:y0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function y0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _C(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===bf||l===Ef,h=l===dr||l===pr;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new hd(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(n===null&&(n=new hd(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function vC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Vo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function yC(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,_=d.attributes.position,S=0;if(p!==null){let g=p.array;S=p.version;for(let y=0,v=g.length;y<v;y+=3){let w=g[y+0],C=g[y+1],R=g[y+2];f.push(w,C,C,R,R,w)}}else if(_!==void 0){let g=_.array;S=_.version;for(let y=0,v=g.length/3-1;y<v;y+=3){let w=y+0,C=y+1,R=y+2;f.push(w,C,C,R,R,w)}}else return;let m=new(t0(f)?Tc:Ec)(f,1);m.version=S;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function h(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function xC(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){e.drawElements(i,p,a,f*r),n.update(p,i,1)}function c(f,p,_){_!==0&&(e.drawElementsInstanced(i,p,a,f*r,_),n.update(p,i,_))}function h(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function d(f,p,_,S){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,S,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*S[g];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function SC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function MC(e,t,n){let i=new WeakMap,s=new He;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let E=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],y=0;p===!0&&(y=1),_===!0&&(y=2),S===!0&&(y=3);let v=o.attributes.position.count*y,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let C=new Float32Array(v*w*4*d),R=new Sc(C,v,w,d);R.type=is,R.needsUpdate=!0;let L=y*4;for(let b=0;b<d;b++){let D=m[b],B=u[b],F=g[b],k=v*w*4*b;for(let O=0;O<D.count;O++){let H=O*L;p===!0&&(s.fromBufferAttribute(D,O),C[k+H+0]=s.x,C[k+H+1]=s.y,C[k+H+2]=s.z,C[k+H+3]=0),_===!0&&(s.fromBufferAttribute(B,O),C[k+H+4]=s.x,C[k+H+5]=s.y,C[k+H+6]=s.z,C[k+H+7]=0),S===!0&&(s.fromBufferAttribute(F,O),C[k+H+8]=s.x,C[k+H+9]=s.y,C[k+H+10]=s.z,C[k+H+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new oe(v,w)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function bC(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var Sb=new Vn,ib=new Dc(1,1),Mb=new Sc,bb=new tf,Eb=new wc,sb=[],ab=[],rb=new Float32Array(16),ob=new Float32Array(9),lb=new Float32Array(4);function al(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=sb[s];if(a===void 0&&(a=new Float32Array(s),sb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function ln(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function cn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function dd(e,t){let n=ab[t];n===void 0&&(n=new Int32Array(t),ab[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function EC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function TC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ln(n,t))return;e.uniform2fv(this.addr,t),cn(n,t)}}function AC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ln(n,t))return;e.uniform3fv(this.addr,t),cn(n,t)}}function wC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ln(n,t))return;e.uniform4fv(this.addr,t),cn(n,t)}}function RC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ln(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),cn(n,t)}else{if(ln(n,i))return;lb.set(i),e.uniformMatrix2fv(this.addr,!1,lb),cn(n,i)}}function CC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ln(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),cn(n,t)}else{if(ln(n,i))return;ob.set(i),e.uniformMatrix3fv(this.addr,!1,ob),cn(n,i)}}function DC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ln(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),cn(n,t)}else{if(ln(n,i))return;rb.set(i),e.uniformMatrix4fv(this.addr,!1,rb),cn(n,i)}}function UC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function LC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ln(n,t))return;e.uniform2iv(this.addr,t),cn(n,t)}}function NC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ln(n,t))return;e.uniform3iv(this.addr,t),cn(n,t)}}function IC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ln(n,t))return;e.uniform4iv(this.addr,t),cn(n,t)}}function OC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function PC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ln(n,t))return;e.uniform2uiv(this.addr,t),cn(n,t)}}function BC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ln(n,t))return;e.uniform3uiv(this.addr,t),cn(n,t)}}function zC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ln(n,t))return;e.uniform4uiv(this.addr,t),cn(n,t)}}function FC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(ib.compareFunction=Qg,a=ib):a=Sb,n.setTexture2D(t||a,s)}function HC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||bb,s)}function VC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Eb,s)}function GC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Mb,s)}function kC(e){switch(e){case 5126:return EC;case 35664:return TC;case 35665:return AC;case 35666:return wC;case 35674:return RC;case 35675:return CC;case 35676:return DC;case 5124:case 35670:return UC;case 35667:case 35671:return LC;case 35668:case 35672:return NC;case 35669:case 35673:return IC;case 5125:return OC;case 36294:return PC;case 36295:return BC;case 36296:return zC;case 35678:case 36198:case 36298:case 36306:case 35682:return FC;case 35679:case 36299:case 36307:return HC;case 35680:case 36300:case 36308:case 36293:return VC;case 36289:case 36303:case 36311:case 36292:return GC}}function XC(e,t){e.uniform1fv(this.addr,t)}function WC(e,t){let n=al(t,this.size,2);e.uniform2fv(this.addr,n)}function qC(e,t){let n=al(t,this.size,3);e.uniform3fv(this.addr,n)}function YC(e,t){let n=al(t,this.size,4);e.uniform4fv(this.addr,n)}function ZC(e,t){let n=al(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function JC(e,t){let n=al(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function KC(e,t){let n=al(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function QC(e,t){e.uniform1iv(this.addr,t)}function jC(e,t){e.uniform2iv(this.addr,t)}function $C(e,t){e.uniform3iv(this.addr,t)}function t2(e,t){e.uniform4iv(this.addr,t)}function e2(e,t){e.uniform1uiv(this.addr,t)}function n2(e,t){e.uniform2uiv(this.addr,t)}function i2(e,t){e.uniform3uiv(this.addr,t)}function s2(e,t){e.uniform4uiv(this.addr,t)}function a2(e,t,n){let i=this.cache,s=t.length,a=dd(n,s);ln(i,a)||(e.uniform1iv(this.addr,a),cn(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||Sb,a[r])}function r2(e,t,n){let i=this.cache,s=t.length,a=dd(n,s);ln(i,a)||(e.uniform1iv(this.addr,a),cn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||bb,a[r])}function o2(e,t,n){let i=this.cache,s=t.length,a=dd(n,s);ln(i,a)||(e.uniform1iv(this.addr,a),cn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Eb,a[r])}function l2(e,t,n){let i=this.cache,s=t.length,a=dd(n,s);ln(i,a)||(e.uniform1iv(this.addr,a),cn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Mb,a[r])}function c2(e){switch(e){case 5126:return XC;case 35664:return WC;case 35665:return qC;case 35666:return YC;case 35674:return ZC;case 35675:return JC;case 35676:return KC;case 5124:case 35670:return QC;case 35667:case 35671:return jC;case 35668:case 35672:return $C;case 35669:case 35673:return t2;case 5125:return e2;case 36294:return n2;case 36295:return i2;case 36296:return s2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return r2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return l2}}var h0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kC(n.type)}},f0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=c2(n.type)}},d0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},u0=/(\w+)(\])?(\[|\.)?/g;function cb(e,t){e.seq.push(t),e.map[t.id]=t}function u2(e,t,n){let i=e.name,s=i.length;for(u0.lastIndex=0;;){let a=u0.exec(i),r=u0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){cb(n,c===void 0?new h0(o,e,t):new f0(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new d0(o),cb(n,d)),n=d}}}var sl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);u2(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function ub(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var h2=37297,f2=0;function d2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var hb=new Zt;function p2(e){ce._getMatrix(hb,ce.workingColorSpace,e);let t=`mat3( ${hb.elements.map(n=>n.toFixed(4))} )`;switch(ce.getTransfer(e)){case yc:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function fb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+d2(e.getShaderSource(t),o)}else return a}function m2(e,t){let n=p2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function g2(e,t){let n;switch(t){case CM:n="Linear";break;case DM:n="Reinhard";break;case UM:n="Cineon";break;case LM:n="ACESFilmic";break;case IM:n="AgX";break;case OM:n="Neutral";break;case NM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ud=new V;function _2(){ce.getLuminanceCoefficients(ud);let e=ud.x.toFixed(4),t=ud.y.toFixed(4),n=ud.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qc).join(`
`)}function y2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function x2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function qc(e){return e!==""}function db(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var S2=/^[ \t]*#include +<([\w\d./]+)>/gm;function p0(e){return e.replace(S2,b2)}var M2=new Map;function b2(e,t){let n=Qt[t];if(n===void 0){let i=M2.get(t);if(i!==void 0)n=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return p0(n)}var E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mb(e){return e.replace(E2,T2)}function T2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function gb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function A2(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Pg?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===mf?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ns&&(t="SHADOWMAP_TYPE_VSM"),t}function w2(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case dr:case pr:t="ENVMAP_TYPE_CUBE";break;case Hc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function R2(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case pr:t="ENVMAP_MODE_REFRACTION";break}return t}function C2(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Hg:t="ENVMAP_BLENDING_MULTIPLY";break;case wM:t="ENVMAP_BLENDING_MIX";break;case RM:t="ENVMAP_BLENDING_ADD";break}return t}function D2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function U2(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=A2(n),c=w2(n),h=R2(n),d=C2(n),f=D2(n),p=v2(n),_=y2(a),S=s.createProgram(),m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(qc).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(qc).join(`
`),u.length>0&&(u+=`
`)):(m=[gb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qc).join(`
`),u=[gb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fs?"#define TONE_MAPPING":"",n.toneMapping!==Fs?Qt.tonemapping_pars_fragment:"",n.toneMapping!==Fs?g2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,m2("linearToOutputTexel",n.outputColorSpace),_2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qc).join(`
`)),r=p0(r),r=db(r,n),r=pb(r,n),o=p0(o),o=db(o,n),o=pb(o,n),r=mb(r),o=mb(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=g+m+r,v=g+u+o,w=ub(s,s.VERTEX_SHADER,y),C=ub(s,s.FRAGMENT_SHADER,v);s.attachShader(S,w),s.attachShader(S,C),n.index0AttributeName!==void 0?s.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(D){if(e.debug.checkShaderErrors){let B=s.getProgramInfoLog(S)||"",F=s.getShaderInfoLog(w)||"",k=s.getShaderInfoLog(C)||"",O=B.trim(),H=F.trim(),Q=k.trim(),z=!0,$=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,S,w,C);else{let ot=fb(s,w,"vertex"),pt=fb(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+ot+`
`+pt)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||Q==="")&&($=!1);$&&(D.diagnostics={runnable:z,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:Q,prefix:u}})}s.deleteShader(w),s.deleteShader(C),L=new sl(s,S),E=x2(s,S)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(S,h2)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=f2++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=C,this}var L2=0,m0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new g0(t),n.set(t,i)),i}},g0=class{constructor(t){this.id=L2++,this.code=t,this.usedTimes=0}};function N2(e,t,n,i,s,a,r){let o=new Xo,l=new m0,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,D,B,F){let k=B.fog,O=F.geometry,H=E.isMeshStandardMaterial?B.environment:null,Q=(E.isMeshStandardMaterial?n:t).get(E.envMap||H),z=Q&&Q.mapping===Hc?Q.image.height:null,$=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ot=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,pt=ot!==void 0?ot.length:0,Ut=0;O.morphAttributes.position!==void 0&&(Ut=1),O.morphAttributes.normal!==void 0&&(Ut=2),O.morphAttributes.color!==void 0&&(Ut=3);let qt,Vt,Xt,Y;if($){let le=ss[$];qt=le.vertexShader,Vt=le.fragmentShader}else qt=E.vertexShader,Vt=E.fragmentShader,l.update(E),Xt=l.getVertexShaderID(E),Y=l.getFragmentShaderID(E);let j=e.getRenderTarget(),gt=e.state.buffers.depth.getReversed(),bt=F.isInstancedMesh===!0,wt=F.isBatchedMesh===!0,Bt=!!E.map,De=!!E.matcap,A=!!Q,_e=!!E.aoMap,zt=!!E.lightMap,Dt=!!E.bumpMap,xt=!!E.normalMap,jt=!!E.displacementMap,lt=!!E.emissiveMap,Ft=!!E.metalnessMap,me=!!E.roughnessMap,ve=E.anisotropy>0,T=E.clearcoat>0,x=E.dispersion>0,P=E.iridescence>0,q=E.sheen>0,tt=E.transmission>0,W=ve&&!!E.anisotropyMap,At=T&&!!E.clearcoatMap,at=T&&!!E.clearcoatNormalMap,_t=T&&!!E.clearcoatRoughnessMap,ut=P&&!!E.iridescenceMap,rt=P&&!!E.iridescenceThicknessMap,nt=q&&!!E.sheenColorMap,Lt=q&&!!E.sheenRoughnessMap,vt=!!E.specularMap,ft=!!E.specularColorMap,Gt=!!E.specularIntensityMap,U=tt&&!!E.transmissionMap,et=tt&&!!E.thicknessMap,ct=!!E.gradientMap,ht=!!E.alphaMap,it=E.alphaTest>0,Z=!!E.alphaHash,Tt=!!E.extensions,Pt=Fs;E.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pt=e.toneMapping);let re={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:qt,fragmentShader:Vt,defines:E.defines,customVertexShaderID:Xt,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:wt,batchingColor:wt&&F._colorsTexture!==null,instancing:bt,instancingColor:bt&&F.instanceColor!==null,instancingMorph:bt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ur,alphaToCoverage:!!E.alphaToCoverage,map:Bt,matcap:De,envMap:A,envMapMode:A&&Q.mapping,envMapCubeUVHeight:z,aoMap:_e,lightMap:zt,bumpMap:Dt,normalMap:xt,displacementMap:f&&jt,emissiveMap:lt,normalMapObjectSpace:xt&&E.normalMapType===zM,normalMapTangentSpace:xt&&E.normalMapType===Kg,metalnessMap:Ft,roughnessMap:me,anisotropy:ve,anisotropyMap:W,clearcoat:T,clearcoatMap:At,clearcoatNormalMap:at,clearcoatRoughnessMap:_t,dispersion:x,iridescence:P,iridescenceMap:ut,iridescenceThicknessMap:rt,sheen:q,sheenColorMap:nt,sheenRoughnessMap:Lt,specularMap:vt,specularColorMap:ft,specularIntensityMap:Gt,transmission:tt,transmissionMap:U,thicknessMap:et,gradientMap:ct,opaque:E.transparent===!1&&E.blending===lr&&E.alphaToCoverage===!1,alphaMap:ht,alphaTest:it,alphaHash:Z,combine:E.combine,mapUv:Bt&&S(E.map.channel),aoMapUv:_e&&S(E.aoMap.channel),lightMapUv:zt&&S(E.lightMap.channel),bumpMapUv:Dt&&S(E.bumpMap.channel),normalMapUv:xt&&S(E.normalMap.channel),displacementMapUv:jt&&S(E.displacementMap.channel),emissiveMapUv:lt&&S(E.emissiveMap.channel),metalnessMapUv:Ft&&S(E.metalnessMap.channel),roughnessMapUv:me&&S(E.roughnessMap.channel),anisotropyMapUv:W&&S(E.anisotropyMap.channel),clearcoatMapUv:At&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:at&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&S(E.sheenRoughnessMap.channel),specularMapUv:vt&&S(E.specularMap.channel),specularColorMapUv:ft&&S(E.specularColorMap.channel),specularIntensityMapUv:Gt&&S(E.specularIntensityMap.channel),transmissionMapUv:U&&S(E.transmissionMap.channel),thicknessMapUv:et&&S(E.thicknessMap.channel),alphaMapUv:ht&&S(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xt||ve),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Bt||ht),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Ut,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Bt&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===Se,decodeVideoTextureEmissive:lt&&E.emissiveMap.isVideoTexture===!0&&ce.getTransfer(E.emissiveMap.colorSpace)===Se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wi,flipSided:E.side===bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Tt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&E.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function u(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)b.push(D),b.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(g(b,E),y(b,E),b.push(e.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function g(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function y(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){let b=_[E.type],D;if(b){let B=ss[b];D=JM.clone(B.uniforms)}else D=E.uniforms;return D}function w(E,b){let D;for(let B=0,F=h.length;B<F;B++){let k=h[B];if(k.cacheKey===b){D=k,++D.usedTimes;break}}return D===void 0&&(D=new U2(e,b,E,a),h.push(D)),D}function C(E){if(--E.usedTimes===0){let b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:w,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:L}}function I2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function O2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function _b(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function vb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,_,S,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:S,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=S,u.group=m),t++,u}function o(d,f,p,_,S,m){let u=r(d,f,p,_,S,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,f,p,_,S,m){let u=r(d,f,p,_,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||O2),i.length>1&&i.sort(f||_b),s.length>1&&s.sort(f||_b)}function h(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function P2(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new vb,e.set(i,[r])):s>=a.length?(r=new vb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function B2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new V,color:new se};break;case"SpotLight":n={position:new V,direction:new V,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function z2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var F2=0;function H2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function V2(e){let t=new B2,n=z2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,a=new qe,r=new qe;function o(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,S=0,m=0,u=0,g=0,y=0,v=0,w=0,C=0,R=0;c.sort(H2);for(let E=0,b=c.length;E<b;E++){let D=c[E],B=D.color,F=D.intensity,k=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*F,d+=B.g*F,f+=B.b*F;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],F);R++}else if(D.isDirectionalLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,z=n.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=H,p++}else if(D.isSpotLight){let H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(B).multiplyScalar(F),H.distance=k,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[S]=H;let Q=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,Q.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[S]=Q.matrix,D.castShadow){let z=n.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.spotShadow[S]=z,i.spotShadowMap[S]=O,v++}S++}else if(D.isRectAreaLight){let H=t.get(D);H.color.copy(B).multiplyScalar(F),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=H,m++}else if(D.isPointLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let Q=D.shadow,z=n.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=D.shadow.matrix,y++}i.point[_]=H,_++}else if(D.isHemisphereLight){let H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(F),H.groundColor.copy(D.groundColor).multiplyScalar(F),i.hemi[u]=H,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==S||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==g||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==w||L.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,L.directionalLength=p,L.pointLength=_,L.spotLength=S,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=g,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=w,L.numLightProbes=R,i.version=F2++)}function l(c,h){let d=0,f=0,p=0,_=0,S=0,m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let y=c[u];if(y.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let v=i.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),_++}else if(y.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let v=i.hemi[S];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function yb(e){let t=new V2(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function a(h){n.push(h)}function r(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function G2(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new yb(e),t.set(s,[o])):a>=r.length?(o=new yb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var k2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W2(e,t,n){let i=new Yo,s=new oe,a=new oe,r=new He,o=new Jo({depthPacking:rd}),l=new sf,c={},h=n.maxTextureSize,d={[Hi]:bn,[bn]:Hi,[wi]:wi},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:k2,fragmentShader:X2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new es;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Dn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pg;let u=this.type;this.render=function(C,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let E=e.getRenderTarget(),b=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),B=e.state;B.setBlending(zs),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=u!==ns&&this.type===ns,k=u===ns&&this.type!==ns;for(let O=0,H=C.length;O<H;O++){let Q=C[O],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let $=z.getFrameExtents();if(s.multiply($),a.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/$.x),s.x=a.x*$.x,z.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/$.y),s.y=a.y*$.y,z.mapSize.y=a.y)),z.map===null||F===!0||k===!0){let pt=this.type!==ns?{minFilter:Kn,magFilter:Kn}:{};z.map!==null&&z.map.dispose(),z.map=new ts(s.x,s.y,pt),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}e.setRenderTarget(z.map),e.clear();let ot=z.getViewportCount();for(let pt=0;pt<ot;pt++){let Ut=z.getViewport(pt);r.set(a.x*Ut.x,a.y*Ut.y,a.x*Ut.z,a.y*Ut.w),B.viewport(r),z.updateMatrices(Q,pt),i=z.getFrustum(),v(R,L,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===ns&&g(z,L),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,b,D)};function g(C,R){let L=t.update(S);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ts(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(R,null,L,f,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(R,null,L,p,S,null)}function y(C,R,L,E){let b=null,D=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)b=D;else if(b=L.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=b.uuid,F=R.uuid,k=c[B];k===void 0&&(k={},c[B]=k);let O=k[F];O===void 0&&(O=b.clone(),k[F]=O,R.addEventListener("dispose",w)),b=O}if(b.visible=R.visible,b.wireframe=R.wireframe,E===ns?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=e.properties.get(b);B.light=L}return b}function v(C,R,L,E,b){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===ns)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);let F=t.update(C),k=C.material;if(Array.isArray(k)){let O=F.groups;for(let H=0,Q=O.length;H<Q;H++){let z=O[H],$=k[z.materialIndex];if($&&$.visible){let ot=y(C,$,E,b);C.onBeforeShadow(e,C,R,L,F,ot,z),e.renderBufferDirect(L,null,F,ot,C,z),C.onAfterShadow(e,C,R,L,F,ot,z)}}}else if(k.visible){let O=y(C,k,E,b);C.onBeforeShadow(e,C,R,L,F,O,null),e.renderBufferDirect(L,null,F,O,C,null),C.onAfterShadow(e,C,R,L,F,O,null)}}let B=C.children;for(let F=0,k=B.length;F<k;F++)v(B[F],R,L,E,b)}function w(C){C.target.removeEventListener("dispose",w);for(let L in c){let E=c[L],b=C.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var q2={[gf]:_f,[vf]:Sf,[yf]:Mf,[cr]:xf,[_f]:gf,[Sf]:vf,[Mf]:yf,[xf]:cr};function Y2(e,t){function n(){let U=!1,et=new He,ct=null,ht=new He(0,0,0,0);return{setMask:function(it){ct!==it&&!U&&(e.colorMask(it,it,it,it),ct=it)},setLocked:function(it){U=it},setClear:function(it,Z,Tt,Pt,re){re===!0&&(it*=Pt,Z*=Pt,Tt*=Pt),et.set(it,Z,Tt,Pt),ht.equals(et)===!1&&(e.clearColor(it,Z,Tt,Pt),ht.copy(et))},reset:function(){U=!1,ct=null,ht.set(-1,0,0,0)}}}function i(){let U=!1,et=!1,ct=null,ht=null,it=null;return{setReversed:function(Z){if(et!==Z){let Tt=t.get("EXT_clip_control");Z?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),et=Z;let Pt=it;it=null,this.setClear(Pt)}},getReversed:function(){return et},setTest:function(Z){Z?j(e.DEPTH_TEST):gt(e.DEPTH_TEST)},setMask:function(Z){ct!==Z&&!U&&(e.depthMask(Z),ct=Z)},setFunc:function(Z){if(et&&(Z=q2[Z]),ht!==Z){switch(Z){case gf:e.depthFunc(e.NEVER);break;case _f:e.depthFunc(e.ALWAYS);break;case vf:e.depthFunc(e.LESS);break;case cr:e.depthFunc(e.LEQUAL);break;case yf:e.depthFunc(e.EQUAL);break;case xf:e.depthFunc(e.GEQUAL);break;case Sf:e.depthFunc(e.GREATER);break;case Mf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ht=Z}},setLocked:function(Z){U=Z},setClear:function(Z){it!==Z&&(et&&(Z=1-Z),e.clearDepth(Z),it=Z)},reset:function(){U=!1,ct=null,ht=null,it=null,et=!1}}}function s(){let U=!1,et=null,ct=null,ht=null,it=null,Z=null,Tt=null,Pt=null,re=null;return{setTest:function(le){U||(le?j(e.STENCIL_TEST):gt(e.STENCIL_TEST))},setMask:function(le){et!==le&&!U&&(e.stencilMask(le),et=le)},setFunc:function(le,Ln,Ge){(ct!==le||ht!==Ln||it!==Ge)&&(e.stencilFunc(le,Ln,Ge),ct=le,ht=Ln,it=Ge)},setOp:function(le,Ln,Ge){(Z!==le||Tt!==Ln||Pt!==Ge)&&(e.stencilOp(le,Ln,Ge),Z=le,Tt=Ln,Pt=Ge)},setLocked:function(le){U=le},setClear:function(le){re!==le&&(e.clearStencil(le),re=le)},reset:function(){U=!1,et=null,ct=null,ht=null,it=null,Z=null,Tt=null,Pt=null,re=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],_=null,S=!1,m=null,u=null,g=null,y=null,v=null,w=null,C=null,R=new se(0,0,0),L=0,E=!1,b=null,D=null,B=null,F=null,k=null,O=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,z=e.getParameter(e.VERSION);z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=Q>=1):z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=Q>=2);let $=null,ot={},pt=e.getParameter(e.SCISSOR_BOX),Ut=e.getParameter(e.VIEWPORT),qt=new He().fromArray(pt),Vt=new He().fromArray(Ut);function Xt(U,et,ct,ht){let it=new Uint8Array(4),Z=e.createTexture();e.bindTexture(U,Z),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Tt=0;Tt<ct;Tt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(et,0,e.RGBA,1,1,ht,0,e.RGBA,e.UNSIGNED_BYTE,it):e.texImage2D(et+Tt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,it);return Z}let Y={};Y[e.TEXTURE_2D]=Xt(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=Xt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=Xt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=Xt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),j(e.DEPTH_TEST),r.setFunc(cr),Dt(!1),xt(Og),j(e.CULL_FACE),_e(zs);function j(U){h[U]!==!0&&(e.enable(U),h[U]=!0)}function gt(U){h[U]!==!1&&(e.disable(U),h[U]=!1)}function bt(U,et){return d[U]!==et?(e.bindFramebuffer(U,et),d[U]=et,U===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=et),U===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=et),!0):!1}function wt(U,et){let ct=p,ht=!1;if(U){ct=f.get(et),ct===void 0&&(ct=[],f.set(et,ct));let it=U.textures;if(ct.length!==it.length||ct[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,Tt=it.length;Z<Tt;Z++)ct[Z]=e.COLOR_ATTACHMENT0+Z;ct.length=it.length,ht=!0}}else ct[0]!==e.BACK&&(ct[0]=e.BACK,ht=!0);ht&&e.drawBuffers(ct)}function Bt(U){return _!==U?(e.useProgram(U),_=U,!0):!1}let De={[Ea]:e.FUNC_ADD,[uM]:e.FUNC_SUBTRACT,[hM]:e.FUNC_REVERSE_SUBTRACT};De[fM]=e.MIN,De[dM]=e.MAX;let A={[pM]:e.ZERO,[mM]:e.ONE,[gM]:e.SRC_COLOR,[Zh]:e.SRC_ALPHA,[MM]:e.SRC_ALPHA_SATURATE,[xM]:e.DST_COLOR,[vM]:e.DST_ALPHA,[_M]:e.ONE_MINUS_SRC_COLOR,[Jh]:e.ONE_MINUS_SRC_ALPHA,[SM]:e.ONE_MINUS_DST_COLOR,[yM]:e.ONE_MINUS_DST_ALPHA,[bM]:e.CONSTANT_COLOR,[EM]:e.ONE_MINUS_CONSTANT_COLOR,[TM]:e.CONSTANT_ALPHA,[AM]:e.ONE_MINUS_CONSTANT_ALPHA};function _e(U,et,ct,ht,it,Z,Tt,Pt,re,le){if(U===zs){S===!0&&(gt(e.BLEND),S=!1);return}if(S===!1&&(j(e.BLEND),S=!0),U!==cM){if(U!==m||le!==E){if((u!==Ea||v!==Ea)&&(e.blendEquation(e.FUNC_ADD),u=Ea,v=Ea),le)switch(U){case lr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Bg:e.blendFunc(e.ONE,e.ONE);break;case zg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Fg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case lr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Bg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case zg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,y=null,w=null,C=null,R.set(0,0,0),L=0,m=U,E=le}return}it=it||et,Z=Z||ct,Tt=Tt||ht,(et!==u||it!==v)&&(e.blendEquationSeparate(De[et],De[it]),u=et,v=it),(ct!==g||ht!==y||Z!==w||Tt!==C)&&(e.blendFuncSeparate(A[ct],A[ht],A[Z],A[Tt]),g=ct,y=ht,w=Z,C=Tt),(Pt.equals(R)===!1||re!==L)&&(e.blendColor(Pt.r,Pt.g,Pt.b,re),R.copy(Pt),L=re),m=U,E=!1}function zt(U,et){U.side===wi?gt(e.CULL_FACE):j(e.CULL_FACE);let ct=U.side===bn;et&&(ct=!ct),Dt(ct),U.blending===lr&&U.transparent===!1?_e(zs):_e(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let ht=U.stencilWrite;o.setTest(ht),ht&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(e.SAMPLE_ALPHA_TO_COVERAGE):gt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(U){b!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),b=U)}function xt(U){U!==oM?(j(e.CULL_FACE),U!==D&&(U===Og?e.cullFace(e.BACK):U===lM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):gt(e.CULL_FACE),D=U}function jt(U){U!==B&&(H&&e.lineWidth(U),B=U)}function lt(U,et,ct){U?(j(e.POLYGON_OFFSET_FILL),(F!==et||k!==ct)&&(e.polygonOffset(et,ct),F=et,k=ct)):gt(e.POLYGON_OFFSET_FILL)}function Ft(U){U?j(e.SCISSOR_TEST):gt(e.SCISSOR_TEST)}function me(U){U===void 0&&(U=e.TEXTURE0+O-1),$!==U&&(e.activeTexture(U),$=U)}function ve(U,et,ct){ct===void 0&&($===null?ct=e.TEXTURE0+O-1:ct=$);let ht=ot[ct];ht===void 0&&(ht={type:void 0,texture:void 0},ot[ct]=ht),(ht.type!==U||ht.texture!==et)&&($!==ct&&(e.activeTexture(ct),$=ct),e.bindTexture(U,et||Y[U]),ht.type=U,ht.texture=et)}function T(){let U=ot[$];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{e.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{e.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{e.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{e.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{e.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{e.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{e.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{e.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{e.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(U){qt.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),qt.copy(U))}function Lt(U){Vt.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Vt.copy(U))}function vt(U,et){let ct=c.get(et);ct===void 0&&(ct=new WeakMap,c.set(et,ct));let ht=ct.get(U);ht===void 0&&(ht=e.getUniformBlockIndex(et,U.name),ct.set(U,ht))}function ft(U,et){let ht=c.get(et).get(U);l.get(et)!==ht&&(e.uniformBlockBinding(et,ht,U.__bindingPointIndex),l.set(et,ht))}function Gt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},$=null,ot={},d={},f=new WeakMap,p=[],_=null,S=!1,m=null,u=null,g=null,y=null,v=null,w=null,C=null,R=new se(0,0,0),L=0,E=!1,b=null,D=null,B=null,F=null,k=null,qt.set(0,0,e.canvas.width,e.canvas.height),Vt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:j,disable:gt,bindFramebuffer:bt,drawBuffers:wt,useProgram:Bt,setBlending:_e,setMaterial:zt,setFlipSided:Dt,setCullFace:xt,setLineWidth:jt,setPolygonOffset:lt,setScissorTest:Ft,activeTexture:me,bindTexture:ve,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:P,texImage2D:ut,texImage3D:rt,updateUBOMapping:vt,uniformBlockBinding:ft,texStorage2D:at,texStorage3D:_t,texSubImage2D:q,texSubImage3D:tt,compressedTexSubImage2D:W,compressedTexSubImage3D:At,scissor:nt,viewport:Lt,reset:Gt}}function Z2(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return p?new OffscreenCanvas(T,x):Ho("canvas")}function S(T,x,P){let q=1,tt=ve(T);if((tt.width>P||tt.height>P)&&(q=P/Math.max(tt.width,tt.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let W=Math.floor(q*tt.width),At=Math.floor(q*tt.height);d===void 0&&(d=_(W,At));let at=x?_(W,At):d;return at.width=W,at.height=At,at.getContext("2d").drawImage(T,0,0,W,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+W+"x"+At+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){e.generateMipmap(T)}function g(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(T,x,P,q,tt=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=x;if(x===e.RED&&(P===e.FLOAT&&(W=e.R32F),P===e.HALF_FLOAT&&(W=e.R16F),P===e.UNSIGNED_BYTE&&(W=e.R8)),x===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.R8UI),P===e.UNSIGNED_SHORT&&(W=e.R16UI),P===e.UNSIGNED_INT&&(W=e.R32UI),P===e.BYTE&&(W=e.R8I),P===e.SHORT&&(W=e.R16I),P===e.INT&&(W=e.R32I)),x===e.RG&&(P===e.FLOAT&&(W=e.RG32F),P===e.HALF_FLOAT&&(W=e.RG16F),P===e.UNSIGNED_BYTE&&(W=e.RG8)),x===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.RG8UI),P===e.UNSIGNED_SHORT&&(W=e.RG16UI),P===e.UNSIGNED_INT&&(W=e.RG32UI),P===e.BYTE&&(W=e.RG8I),P===e.SHORT&&(W=e.RG16I),P===e.INT&&(W=e.RG32I)),x===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.RGB8UI),P===e.UNSIGNED_SHORT&&(W=e.RGB16UI),P===e.UNSIGNED_INT&&(W=e.RGB32UI),P===e.BYTE&&(W=e.RGB8I),P===e.SHORT&&(W=e.RGB16I),P===e.INT&&(W=e.RGB32I)),x===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),P===e.UNSIGNED_INT&&(W=e.RGBA32UI),P===e.BYTE&&(W=e.RGBA8I),P===e.SHORT&&(W=e.RGBA16I),P===e.INT&&(W=e.RGBA32I)),x===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),x===e.RGBA){let At=tt?yc:ce.getTransfer(q);P===e.FLOAT&&(W=e.RGBA32F),P===e.HALF_FLOAT&&(W=e.RGBA16F),P===e.UNSIGNED_BYTE&&(W=At===Se?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(T,x){let P;return T?x===null||x===Ca||x===$o?P=e.DEPTH24_STENCIL8:x===is?P=e.DEPTH32F_STENCIL8:x===Qo&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ca||x===$o?P=e.DEPTH_COMPONENT24:x===is?P=e.DEPTH_COMPONENT32F:x===Qo&&(P=e.DEPTH_COMPONENT16),P}function w(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Kn&&T.minFilter!==Qn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){let x=T.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&h.delete(x)}function R(T){let x=T.target;x.removeEventListener("dispose",R),b(x)}function L(T){let x=i.get(T);if(x.__webglInit===void 0)return;let P=T.source,q=f.get(P);if(q){let tt=q[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(T),Object.keys(q).length===0&&f.delete(P)}i.remove(T)}function E(T){let x=i.get(T);e.deleteTexture(x.__webglTexture);let P=T.source,q=f.get(P);delete q[x.__cacheKey],r.memory.textures--}function b(T){let x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let tt=0;tt<x.__webglFramebuffer[q].length;tt++)e.deleteFramebuffer(x.__webglFramebuffer[q][tt]);else e.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)e.deleteFramebuffer(x.__webglFramebuffer[q]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let P=T.textures;for(let q=0,tt=P.length;q<tt;q++){let W=i.get(P[q]);W.__webglTexture&&(e.deleteTexture(W.__webglTexture),r.memory.textures--),i.remove(P[q])}i.remove(T)}let D=0;function B(){D=0}function F(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function k(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function O(T,x){let P=i.get(T);if(T.isVideoTexture&&Ft(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&P.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(P,T,x);return}}else T.isExternalTexture&&(P.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+x)}function H(T,x){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){Y(P,T,x);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+x)}function Q(T,x){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){Y(P,T,x);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+x)}function z(T,x){let P=i.get(T);if(T.version>0&&P.__version!==T.version){j(P,T,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+x)}let $={[Bo]:e.REPEAT,[ba]:e.CLAMP_TO_EDGE,[Kh]:e.MIRRORED_REPEAT},ot={[Kn]:e.NEAREST,[PM]:e.NEAREST_MIPMAP_NEAREST,[Vc]:e.NEAREST_MIPMAP_LINEAR,[Qn]:e.LINEAR,[Tf]:e.LINEAR_MIPMAP_NEAREST,[Ra]:e.LINEAR_MIPMAP_LINEAR},pt={[FM]:e.NEVER,[WM]:e.ALWAYS,[HM]:e.LESS,[Qg]:e.LEQUAL,[VM]:e.EQUAL,[XM]:e.GEQUAL,[GM]:e.GREATER,[kM]:e.NOTEQUAL};function Ut(T,x){if(x.type===is&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Qn||x.magFilter===Tf||x.magFilter===Vc||x.magFilter===Ra||x.minFilter===Qn||x.minFilter===Tf||x.minFilter===Vc||x.minFilter===Ra)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,$[x.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,$[x.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,$[x.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,ot[x.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,ot[x.minFilter]),x.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Kn||x.minFilter!==Vc&&x.minFilter!==Ra||x.type===is&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function qt(T,x){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));let q=x.source,tt=f.get(q);tt===void 0&&(tt={},f.set(q,tt));let W=k(x);if(W!==T.__cacheKey){tt[W]===void 0&&(tt[W]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),tt[W].usedTimes++;let At=tt[T.__cacheKey];At!==void 0&&(tt[T.__cacheKey].usedTimes--,At.usedTimes===0&&E(x)),T.__cacheKey=W,T.__webglTexture=tt[W].texture}return P}function Vt(T,x,P){return Math.floor(Math.floor(T/P)/x)}function Xt(T,x,P,q){let W=T.updateRanges;if(W.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,P,q,x.data);else{W.sort((rt,nt)=>rt.start-nt.start);let At=0;for(let rt=1;rt<W.length;rt++){let nt=W[At],Lt=W[rt],vt=nt.start+nt.count,ft=Vt(Lt.start,x.width,4),Gt=Vt(nt.start,x.width,4);Lt.start<=vt+1&&ft===Gt&&Vt(Lt.start+Lt.count-1,x.width,4)===ft?nt.count=Math.max(nt.count,Lt.start+Lt.count-nt.start):(++At,W[At]=Lt)}W.length=At+1;let at=e.getParameter(e.UNPACK_ROW_LENGTH),_t=e.getParameter(e.UNPACK_SKIP_PIXELS),ut=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let rt=0,nt=W.length;rt<nt;rt++){let Lt=W[rt],vt=Math.floor(Lt.start/4),ft=Math.ceil(Lt.count/4),Gt=vt%x.width,U=Math.floor(vt/x.width),et=ft,ct=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Gt,U,et,ct,P,q,x.data)}T.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,at),e.pixelStorei(e.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(e.UNPACK_SKIP_ROWS,ut)}}function Y(T,x,P){let q=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=e.TEXTURE_3D);let tt=qt(T,x),W=x.source;n.bindTexture(q,T.__webglTexture,e.TEXTURE0+P);let At=i.get(W);if(W.version!==At.__version||tt===!0){n.activeTexture(e.TEXTURE0+P);let at=ce.getPrimaries(ce.workingColorSpace),_t=x.colorSpace===Hs?null:ce.getPrimaries(x.colorSpace),ut=x.colorSpace===Hs||at===_t?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let rt=S(x.image,!1,s.maxTextureSize);rt=me(x,rt);let nt=a.convert(x.format,x.colorSpace),Lt=a.convert(x.type),vt=y(x.internalFormat,nt,Lt,x.colorSpace,x.isVideoTexture);Ut(q,x);let ft,Gt=x.mipmaps,U=x.isVideoTexture!==!0,et=At.__version===void 0||tt===!0,ct=W.dataReady,ht=w(x,rt);if(x.isDepthTexture)vt=v(x.format===tl,x.type),et&&(U?n.texStorage2D(e.TEXTURE_2D,1,vt,rt.width,rt.height):n.texImage2D(e.TEXTURE_2D,0,vt,rt.width,rt.height,0,nt,Lt,null));else if(x.isDataTexture)if(Gt.length>0){U&&et&&n.texStorage2D(e.TEXTURE_2D,ht,vt,Gt[0].width,Gt[0].height);for(let it=0,Z=Gt.length;it<Z;it++)ft=Gt[it],U?ct&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,ft.width,ft.height,nt,Lt,ft.data):n.texImage2D(e.TEXTURE_2D,it,vt,ft.width,ft.height,0,nt,Lt,ft.data);x.generateMipmaps=!1}else U?(et&&n.texStorage2D(e.TEXTURE_2D,ht,vt,rt.width,rt.height),ct&&Xt(x,rt,nt,Lt)):n.texImage2D(e.TEXTURE_2D,0,vt,rt.width,rt.height,0,nt,Lt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&et&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ht,vt,Gt[0].width,Gt[0].height,rt.depth);for(let it=0,Z=Gt.length;it<Z;it++)if(ft=Gt[it],x.format!==Ri)if(nt!==null)if(U){if(ct)if(x.layerUpdates.size>0){let Tt=s0(ft.width,ft.height,x.format,x.type);for(let Pt of x.layerUpdates){let re=ft.data.subarray(Pt*Tt/ft.data.BYTES_PER_ELEMENT,(Pt+1)*Tt/ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,Pt,ft.width,ft.height,1,nt,re)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,rt.depth,nt,ft.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,it,vt,ft.width,ft.height,rt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ct&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,rt.depth,nt,Lt,ft.data):n.texImage3D(e.TEXTURE_2D_ARRAY,it,vt,ft.width,ft.height,rt.depth,0,nt,Lt,ft.data)}else{U&&et&&n.texStorage2D(e.TEXTURE_2D,ht,vt,Gt[0].width,Gt[0].height);for(let it=0,Z=Gt.length;it<Z;it++)ft=Gt[it],x.format!==Ri?nt!==null?U?ct&&n.compressedTexSubImage2D(e.TEXTURE_2D,it,0,0,ft.width,ft.height,nt,ft.data):n.compressedTexImage2D(e.TEXTURE_2D,it,vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ct&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,ft.width,ft.height,nt,Lt,ft.data):n.texImage2D(e.TEXTURE_2D,it,vt,ft.width,ft.height,0,nt,Lt,ft.data)}else if(x.isDataArrayTexture)if(U){if(et&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ht,vt,rt.width,rt.height,rt.depth),ct)if(x.layerUpdates.size>0){let it=s0(rt.width,rt.height,x.format,x.type);for(let Z of x.layerUpdates){let Tt=rt.data.subarray(Z*it/rt.data.BYTES_PER_ELEMENT,(Z+1)*it/rt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,rt.width,rt.height,1,nt,Lt,Tt)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,nt,Lt,rt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,vt,rt.width,rt.height,rt.depth,0,nt,Lt,rt.data);else if(x.isData3DTexture)U?(et&&n.texStorage3D(e.TEXTURE_3D,ht,vt,rt.width,rt.height,rt.depth),ct&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,nt,Lt,rt.data)):n.texImage3D(e.TEXTURE_3D,0,vt,rt.width,rt.height,rt.depth,0,nt,Lt,rt.data);else if(x.isFramebufferTexture){if(et)if(U)n.texStorage2D(e.TEXTURE_2D,ht,vt,rt.width,rt.height);else{let it=rt.width,Z=rt.height;for(let Tt=0;Tt<ht;Tt++)n.texImage2D(e.TEXTURE_2D,Tt,vt,it,Z,0,nt,Lt,null),it>>=1,Z>>=1}}else if(Gt.length>0){if(U&&et){let it=ve(Gt[0]);n.texStorage2D(e.TEXTURE_2D,ht,vt,it.width,it.height)}for(let it=0,Z=Gt.length;it<Z;it++)ft=Gt[it],U?ct&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,nt,Lt,ft):n.texImage2D(e.TEXTURE_2D,it,vt,nt,Lt,ft);x.generateMipmaps=!1}else if(U){if(et){let it=ve(rt);n.texStorage2D(e.TEXTURE_2D,ht,vt,it.width,it.height)}ct&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,nt,Lt,rt)}else n.texImage2D(e.TEXTURE_2D,0,vt,nt,Lt,rt);m(x)&&u(q),At.__version=W.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function j(T,x,P){if(x.image.length!==6)return;let q=qt(T,x),tt=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+P);let W=i.get(tt);if(tt.version!==W.__version||q===!0){n.activeTexture(e.TEXTURE0+P);let At=ce.getPrimaries(ce.workingColorSpace),at=x.colorSpace===Hs?null:ce.getPrimaries(x.colorSpace),_t=x.colorSpace===Hs||At===at?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let ut=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,nt=[];for(let Z=0;Z<6;Z++)!ut&&!rt?nt[Z]=S(x.image[Z],!0,s.maxCubemapSize):nt[Z]=rt?x.image[Z].image:x.image[Z],nt[Z]=me(x,nt[Z]);let Lt=nt[0],vt=a.convert(x.format,x.colorSpace),ft=a.convert(x.type),Gt=y(x.internalFormat,vt,ft,x.colorSpace),U=x.isVideoTexture!==!0,et=W.__version===void 0||q===!0,ct=tt.dataReady,ht=w(x,Lt);Ut(e.TEXTURE_CUBE_MAP,x);let it;if(ut){U&&et&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Gt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){it=nt[Z].mipmaps;for(let Tt=0;Tt<it.length;Tt++){let Pt=it[Tt];x.format!==Ri?vt!==null?U?ct&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Tt,0,0,Pt.width,Pt.height,vt,Pt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Tt,Gt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Tt,0,0,Pt.width,Pt.height,vt,ft,Pt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Tt,Gt,Pt.width,Pt.height,0,vt,ft,Pt.data)}}}else{if(it=x.mipmaps,U&&et){it.length>0&&ht++;let Z=ve(nt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Gt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(rt){U?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,nt[Z].width,nt[Z].height,vt,ft,nt[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,nt[Z].width,nt[Z].height,0,vt,ft,nt[Z].data);for(let Tt=0;Tt<it.length;Tt++){let re=it[Tt].image[Z].image;U?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Tt+1,0,0,re.width,re.height,vt,ft,re.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Tt+1,Gt,re.width,re.height,0,vt,ft,re.data)}}else{U?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,vt,ft,nt[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,vt,ft,nt[Z]);for(let Tt=0;Tt<it.length;Tt++){let Pt=it[Tt];U?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Tt+1,0,0,vt,ft,Pt.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Tt+1,Gt,vt,ft,Pt.image[Z])}}}m(x)&&u(e.TEXTURE_CUBE_MAP),W.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function gt(T,x,P,q,tt,W){let At=a.convert(P.format,P.colorSpace),at=a.convert(P.type),_t=y(P.internalFormat,At,at,P.colorSpace),ut=i.get(x),rt=i.get(P);if(rt.__renderTarget=x,!ut.__hasExternalTextures){let nt=Math.max(1,x.width>>W),Lt=Math.max(1,x.height>>W);tt===e.TEXTURE_3D||tt===e.TEXTURE_2D_ARRAY?n.texImage3D(tt,W,_t,nt,Lt,x.depth,0,At,at,null):n.texImage2D(tt,W,_t,nt,Lt,0,At,at,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),lt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,tt,rt.__webglTexture,0,jt(x)):(tt===e.TEXTURE_2D||tt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,tt,rt.__webglTexture,W),n.bindFramebuffer(e.FRAMEBUFFER,null)}function bt(T,x,P){if(e.bindRenderbuffer(e.RENDERBUFFER,T),x.depthBuffer){let q=x.depthTexture,tt=q&&q.isDepthTexture?q.type:null,W=v(x.stencilBuffer,tt),At=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=jt(x);lt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,at,W,x.width,x.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,at,W,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,W,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,At,e.RENDERBUFFER,T)}else{let q=x.textures;for(let tt=0;tt<q.length;tt++){let W=q[tt],At=a.convert(W.format,W.colorSpace),at=a.convert(W.type),_t=y(W.internalFormat,At,at,W.colorSpace),ut=jt(x);P&&lt(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ut,_t,x.width,x.height):lt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ut,_t,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,_t,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function wt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),O(x.depthTexture,0);let tt=q.__webglTexture,W=jt(x);if(x.depthTexture.format===zo)lt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0);else if(x.depthTexture.format===tl)lt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Bt(T){let x=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",tt)};q.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let q=T.texture.mipmaps;q&&q.length>0?wt(x.__webglFramebuffer[0],T):wt(x.__webglFramebuffer,T)}else if(P){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=e.createRenderbuffer(),bt(x.__webglDepthbuffer[q],T,!1);else{let tt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,tt,e.RENDERBUFFER,W)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),bt(x.__webglDepthbuffer,T,!1);else{let tt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,tt,e.RENDERBUFFER,W)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(T,x,P){let q=i.get(T);x!==void 0&&gt(q.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Bt(T)}function A(T){let x=T.texture,P=i.get(T),q=i.get(x);T.addEventListener("dispose",R);let tt=T.textures,W=T.isWebGLCubeRenderTarget===!0,At=tt.length>1;if(At||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=x.version,r.memory.textures++),W){P.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer[at]=[];for(let _t=0;_t<x.mipmaps.length;_t++)P.__webglFramebuffer[at][_t]=e.createFramebuffer()}else P.__webglFramebuffer[at]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)P.__webglFramebuffer[at]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(At)for(let at=0,_t=tt.length;at<_t;at++){let ut=i.get(tt[at]);ut.__webglTexture===void 0&&(ut.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&lt(T)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){let _t=tt[at];P.__webglColorRenderbuffer[at]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[at]);let ut=a.convert(_t.format,_t.colorSpace),rt=a.convert(_t.type),nt=y(_t.internalFormat,ut,rt,_t.colorSpace,T.isXRRenderTarget===!0),Lt=jt(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,Lt,nt,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+at,e.RENDERBUFFER,P.__webglColorRenderbuffer[at])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),bt(P.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(W){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Ut(e.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)gt(P.__webglFramebuffer[at][_t],T,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t);else gt(P.__webglFramebuffer[at],T,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(At){for(let at=0,_t=tt.length;at<_t;at++){let ut=tt[at],rt=i.get(ut),nt=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(nt=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(nt,rt.__webglTexture),Ut(nt,ut),gt(P.__webglFramebuffer,T,ut,e.COLOR_ATTACHMENT0+at,nt,0),m(ut)&&u(nt)}n.unbindTexture()}else{let at=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(at,q.__webglTexture),Ut(at,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)gt(P.__webglFramebuffer[_t],T,x,e.COLOR_ATTACHMENT0,at,_t);else gt(P.__webglFramebuffer,T,x,e.COLOR_ATTACHMENT0,at,0);m(x)&&u(at),n.unbindTexture()}T.depthBuffer&&Bt(T)}function _e(T){let x=T.textures;for(let P=0,q=x.length;P<q;P++){let tt=x[P];if(m(tt)){let W=g(T),At=i.get(tt).__webglTexture;n.bindTexture(W,At),u(W),n.unbindTexture()}}}let zt=[],Dt=[];function xt(T){if(T.samples>0){if(lt(T)===!1){let x=T.textures,P=T.width,q=T.height,tt=e.COLOR_BUFFER_BIT,W=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,At=i.get(T),at=x.length>1;if(at)for(let ut=0;ut<x.length;ut++)n.bindFramebuffer(e.FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,At.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);let _t=T.texture.mipmaps;_t&&_t.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=e.STENCIL_BUFFER_BIT)),at){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,At.__webglColorRenderbuffer[ut]);let rt=i.get(x[ut]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,rt,0)}e.blitFramebuffer(0,0,P,q,0,0,P,q,tt,e.NEAREST),l===!0&&(zt.length=0,Dt.length=0,zt.push(e.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(zt.push(W),Dt.push(W),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Dt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,zt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<x.length;ut++){n.bindFramebuffer(e.FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,At.__webglColorRenderbuffer[ut]);let rt=i.get(x[ut]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,At.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,rt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function jt(T){return Math.min(s.maxSamples,T.samples)}function lt(T){let x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ft(T){let x=r.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function me(T,x){let P=T.colorSpace,q=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==ur&&P!==Hs&&(ce.getTransfer(P)===Se?(q!==Ri||tt!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),x}function ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=O,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=z,this.rebindTextures=De,this.setupRenderTarget=A,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=lt}function J2(e,t){function n(i,s=Hs){let a,r=ce.getTransfer(s);if(i===ki)return e.UNSIGNED_BYTE;if(i===wf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Rf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Xg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Wg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gg)return e.BYTE;if(i===kg)return e.SHORT;if(i===Qo)return e.UNSIGNED_SHORT;if(i===Af)return e.INT;if(i===Ca)return e.UNSIGNED_INT;if(i===is)return e.FLOAT;if(i===jo)return e.HALF_FLOAT;if(i===qg)return e.ALPHA;if(i===Yg)return e.RGB;if(i===Ri)return e.RGBA;if(i===zo)return e.DEPTH_COMPONENT;if(i===tl)return e.DEPTH_STENCIL;if(i===Zg)return e.RED;if(i===Cf)return e.RED_INTEGER;if(i===Jg)return e.RG;if(i===Df)return e.RG_INTEGER;if(i===Uf)return e.RGBA_INTEGER;if(i===Gc||i===kc||i===Xc||i===Wc)if(r===Se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Gc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Gc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lf||i===Nf||i===If||i===Of)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Lf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===If)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Of)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pf||i===Bf||i===zf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Pf||i===Bf)return r===Se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===zf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ff||i===Hf||i===Vf||i===Gf||i===kf||i===Xf||i===Wf||i===qf||i===Yf||i===Zf||i===Jf||i===Kf||i===Qf||i===jf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ff)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jf)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$f||i===td||i===ed)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===$f)return r===Se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===td)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ed)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nd||i===id||i===sd||i===ad)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===nd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===id)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ad)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$o?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var K2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Uc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Gi({vertexShader:K2,fragmentShader:Q2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Dn(new hr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},v0=class extends Os{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,_=null,S=typeof XRWebGLBinding<"u",m=new _0,u={},g=n.getContextAttributes(),y=null,v=null,w=[],C=[],R=new oe,L=null,E=new Rn;E.viewport=new He;let b=new Rn;b.viewport=new He;let D=[E,b],B=new pf,F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=w[Y];return j===void 0&&(j=new qo,w[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=w[Y];return j===void 0&&(j=new qo,w[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=w[Y];return j===void 0&&(j=new qo,w[Y]=j),j.getHandSpace()};function O(Y){let j=C.indexOf(Y.inputSource);if(j===-1)return;let gt=w[j];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||r),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<w.length;Y++){let j=C[Y];j!==null&&(C[Y]=null,w[Y].disconnect(j))}F=null,k=null,m.reset();for(let Y in u)delete u[Y];t.setRenderTarget(y),p=null,f=null,d=null,s=null,v=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await n.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,bt=null,wt=null;g.depth&&(wt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,gt=g.stencil?tl:zo,bt=g.stencil?$o:Ca);let Bt={colorFormat:n.RGBA8,depthFormat:wt,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ts(f.textureWidth,f.textureHeight,{format:Ri,type:ki,depthTexture:new Dc(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let gt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,gt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ts(p.framebufferWidth,p.framebufferHeight,{format:Ri,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Y){for(let j=0;j<Y.removed.length;j++){let gt=Y.removed[j],bt=C.indexOf(gt);bt>=0&&(C[bt]=null,w[bt].disconnect(gt))}for(let j=0;j<Y.added.length;j++){let gt=Y.added[j],bt=C.indexOf(gt);if(bt===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=C.length){C.push(gt),bt=Bt;break}else if(C[Bt]===null){C[Bt]=gt,bt=Bt;break}if(bt===-1)break}let wt=w[bt];wt&&wt.connect(gt)}}let z=new V,$=new V;function ot(Y,j,gt){z.setFromMatrixPosition(j.matrixWorld),$.setFromMatrixPosition(gt.matrixWorld);let bt=z.distanceTo($),wt=j.projectionMatrix.elements,Bt=gt.projectionMatrix.elements,De=wt[14]/(wt[10]-1),A=wt[14]/(wt[10]+1),_e=(wt[9]+1)/wt[5],zt=(wt[9]-1)/wt[5],Dt=(wt[8]-1)/wt[0],xt=(Bt[8]+1)/Bt[0],jt=De*Dt,lt=De*xt,Ft=bt/(-Dt+xt),me=Ft*-Dt;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(me),Y.translateZ(Ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let ve=De+Ft,T=A+Ft,x=jt-me,P=lt+(bt-me),q=_e*A/T*ve,tt=zt*A/T*ve;Y.projectionMatrix.makePerspective(x,P,q,tt,ve,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pt(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,gt=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),B.near=b.near=E.near=j,B.far=b.far=E.far=gt,(F!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,k=B.far),B.layers.mask=Y.layers.mask|6,E.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;let bt=Y.parent,wt=B.cameras;pt(B,bt);for(let Bt=0;Bt<wt.length;Bt++)pt(wt[Bt],bt);wt.length===2?ot(B,E,b):B.projectionMatrix.copy(E.projectionMatrix),Ut(Y,B,bt)};function Ut(Y,j,gt){gt===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return u[Y]};let qt=null;function Vt(Y,j){if(h=j.getViewerPose(c||r),_=j,h!==null){let gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let bt=!1;gt.length!==B.cameras.length&&(B.cameras.length=0,bt=!0);for(let A=0;A<gt.length;A++){let _e=gt[A],zt=null;if(p!==null)zt=p.getViewport(_e);else{let xt=d.getViewSubImage(f,_e);zt=xt.viewport,A===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let Dt=D[A];Dt===void 0&&(Dt=new Rn,Dt.layers.enable(A),Dt.viewport=new He,D[A]=Dt),Dt.matrix.fromArray(_e.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(_e.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(zt.x,zt.y,zt.width,zt.height),A===0&&(B.matrix.copy(Dt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),bt===!0&&B.cameras.push(Dt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let A=d.getDepthInformation(gt[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(wt&&wt.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let A=0;A<gt.length;A++){let _e=gt[A].camera;if(_e){let zt=u[_e];zt||(zt=new Uc,u[_e]=zt);let Dt=d.getCameraImage(_e);zt.sourceTexture=Dt}}}}for(let gt=0;gt<w.length;gt++){let bt=C[gt],wt=w[gt];bt!==null&&wt!==void 0&&wt.update(bt,j,c||r)}qt&&qt(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}let Xt=new xb;Xt.setAnimationLoop(Vt),this.setAnimationLoop=function(Y){qt=Y},this.dispose=function(){}}},_r=new Vi,j2=new qe;function $2(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,e0(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,y,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(a(m,u),_(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),S(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===bn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===bn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),y=g.envMap,v=g.envMapRotation;y&&(m.envMap.value=y,_r.copy(v),_r.x*=-1,_r.y*=-1,_r.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),m.envMapRotation.value.setFromMatrix4(j2.makeRotationFromEuler(_r)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===bn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function t3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){let v=y.program;i.uniformBlockBinding(g,v)}function c(g,y){let v=s[g.id];v===void 0&&(_(g),v=h(g),s[g.id]=v,g.addEventListener("dispose",m));let w=y.program;i.updateUBOMapping(g,w);let C=t.render.frame;a[g.id]!==C&&(f(g),a[g.id]=C)}function h(g){let y=d();g.__bindingPointIndex=y;let v=e.createBuffer(),w=g.__size,C=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,w,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,v),v}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let y=s[g.id],v=g.uniforms,w=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let C=0,R=v.length;C<R;C++){let L=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,b=L.length;E<b;E++){let D=L[E];if(p(D,C,E,w)===!0){let B=D.__offset,F=Array.isArray(D.value)?D.value:[D.value],k=0;for(let O=0;O<F.length;O++){let H=F[O],Q=S(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,e.bufferSubData(e.UNIFORM_BUFFER,B+k,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,y,v,w){let C=g.value,R=y+"_"+v;if(w[R]===void 0)return typeof C=="number"||typeof C=="boolean"?w[R]=C:w[R]=C.clone(),!0;{let L=w[R];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return w[R]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function _(g){let y=g.uniforms,v=0,w=16;for(let R=0,L=y.length;R<L;R++){let E=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,D=E.length;b<D;b++){let B=E[b],F=Array.isArray(B.value)?B.value:[B.value];for(let k=0,O=F.length;k<O;k++){let H=F[k],Q=S(H),z=v%w,$=z%Q.boundary,ot=z+$;v+=$,ot!==0&&w-ot<Q.storage&&(v+=w-ot),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Q.storage}}}let C=v%w;return C>0&&(v+=w-C),g.__size=v,g.__cache={},this}function S(g){let y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){let y=g.target;y.removeEventListener("dispose",m);let v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function u(){for(let g in s)e.deleteBuffer(s[g]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var fd=class{constructor(t={}){let{canvas:n=qM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let _=new Uint32Array(4),S=new Int32Array(4),m=null,u=null,g=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,w=!1;this._outputColorSpace=wn;let C=0,R=0,L=null,E=-1,b=null,D=new He,B=new He,F=null,k=new se(0),O=0,H=n.width,Q=n.height,z=1,$=null,ot=null,pt=new He(0,0,H,Q),Ut=new He(0,0,H,Q),qt=!1,Vt=new Yo,Xt=!1,Y=!1,j=new qe,gt=new V,bt=new He,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function De(){return L===null?z:1}let A=i;function _e(M,N){return n.getContext(M,N)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ct,!1),n.addEventListener("webglcontextrestored",ht,!1),n.addEventListener("webglcontextcreationerror",it,!1),A===null){let N="webgl2";if(A=_e(N,M),A===null)throw _e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let zt,Dt,xt,jt,lt,Ft,me,ve,T,x,P,q,tt,W,At,at,_t,ut,rt,nt,Lt,vt,ft,Gt;function U(){zt=new vC(A),zt.init(),vt=new J2(A,zt),Dt=new hC(A,zt,t,vt),xt=new Y2(A,zt),Dt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),jt=new SC(A),lt=new I2,Ft=new Z2(A,zt,xt,lt,Dt,vt,jt),me=new dC(v),ve=new _C(v),T=new wA(A),ft=new cC(A,T),x=new yC(A,T,jt,ft),P=new bC(A,x,T,jt),rt=new MC(A,Dt,Ft),at=new fC(lt),q=new N2(v,me,ve,zt,Dt,ft,at),tt=new $2(v,lt),W=new P2,At=new G2(zt),ut=new lC(v,me,ve,xt,P,p,l),_t=new W2(v,P,Dt),Gt=new t3(A,jt,Dt,xt),nt=new uC(A,zt,jt),Lt=new xC(A,zt,jt),jt.programs=q.programs,v.capabilities=Dt,v.extensions=zt,v.properties=lt,v.renderLists=W,v.shadowMap=_t,v.state=xt,v.info=jt}U();let et=new v0(v,A);this.xr=et,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let M=zt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=zt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(H,Q,!1))},this.getSize=function(M){return M.set(H,Q)},this.setSize=function(M,N,X=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,Q=N,n.width=Math.floor(M*z),n.height=Math.floor(N*z),X===!0&&(n.style.width=M+"px",n.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(H*z,Q*z).floor()},this.setDrawingBufferSize=function(M,N,X){H=M,Q=N,z=X,n.width=Math.floor(M*X),n.height=Math.floor(N*X),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(pt)},this.setViewport=function(M,N,X,G){M.isVector4?pt.set(M.x,M.y,M.z,M.w):pt.set(M,N,X,G),xt.viewport(D.copy(pt).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Ut)},this.setScissor=function(M,N,X,G){M.isVector4?Ut.set(M.x,M.y,M.z,M.w):Ut.set(M,N,X,G),xt.scissor(B.copy(Ut).multiplyScalar(z).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(M){xt.setScissorTest(qt=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){ot=M},this.getClearColor=function(M){return M.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,X=!0){let G=0;if(M){let I=!1;if(L!==null){let st=L.texture.format;I=st===Uf||st===Df||st===Cf}if(I){let st=L.texture.type,dt=st===ki||st===Ca||st===Qo||st===$o||st===wf||st===Rf,Et=ut.getClearColor(),yt=ut.getClearAlpha(),Nt=Et.r,Ot=Et.g,St=Et.b;dt?(_[0]=Nt,_[1]=Ot,_[2]=St,_[3]=yt,A.clearBufferuiv(A.COLOR,0,_)):(S[0]=Nt,S[1]=Ot,S[2]=St,S[3]=yt,A.clearBufferiv(A.COLOR,0,S))}else G|=A.COLOR_BUFFER_BIT}N&&(G|=A.DEPTH_BUFFER_BIT),X&&(G|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",it,!1),ut.dispose(),W.dispose(),At.dispose(),lt.dispose(),me.dispose(),ve.dispose(),P.dispose(),ft.dispose(),Gt.dispose(),q.dispose(),et.dispose(),et.removeEventListener("sessionstart",Ge),et.removeEventListener("sessionend",Vs),Di.stop()};function ct(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let M=jt.autoReset,N=_t.enabled,X=_t.autoUpdate,G=_t.needsUpdate,I=_t.type;U(),jt.autoReset=M,_t.enabled=N,_t.autoUpdate=X,_t.needsUpdate=G,_t.type=I}function it(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Z(M){let N=M.target;N.removeEventListener("dispose",Z),Tt(N)}function Tt(M){Pt(M),lt.remove(M)}function Pt(M){let N=lt.get(M).programs;N!==void 0&&(N.forEach(function(X){q.releaseProgram(X)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,X,G,I,st){N===null&&(N=wt);let dt=I.isMesh&&I.matrixWorld.determinant()<0,Et=Li(M,N,X,G,I);xt.setMaterial(G,dt);let yt=X.index,Nt=1;if(G.wireframe===!0){if(yt=x.getWireframeAttribute(X),yt===void 0)return;Nt=2}let Ot=X.drawRange,St=X.attributes.position,It=Ot.start*Nt,Kt=(Ot.start+Ot.count)*Nt;st!==null&&(It=Math.max(It,st.start*Nt),Kt=Math.min(Kt,(st.start+st.count)*Nt)),yt!==null?(It=Math.max(It,0),Kt=Math.min(Kt,yt.count)):St!=null&&(It=Math.max(It,0),Kt=Math.min(Kt,St.count));let Ae=Kt-It;if(Ae<0||Ae===1/0)return;ft.setup(I,G,Et,X,yt);let ge,ue=nt;if(yt!==null&&(ge=T.get(yt),ue=Lt,ue.setIndex(ge)),I.isMesh)G.wireframe===!0?(xt.setLineWidth(G.wireframeLinewidth*De()),ue.setMode(A.LINES)):ue.setMode(A.TRIANGLES);else if(I.isLine){let Rt=G.linewidth;Rt===void 0&&(Rt=1),xt.setLineWidth(Rt*De()),I.isLineSegments?ue.setMode(A.LINES):I.isLineLoop?ue.setMode(A.LINE_LOOP):ue.setMode(A.LINE_STRIP)}else I.isPoints?ue.setMode(A.POINTS):I.isSprite&&ue.setMode(A.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))ue.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Rt=I._multiDrawStarts,Me=I._multiDrawCounts,$t=I._multiDrawCount,hn=yt?T.get(yt).bytesPerElement:1,gn=lt.get(G).currentProgram.getUniforms();for(let Fe=0;Fe<$t;Fe++)gn.setValue(A,"_gl_DrawID",Fe),ue.render(Rt[Fe]/hn,Me[Fe])}else if(I.isInstancedMesh)ue.renderInstances(It,Ae,I.count);else if(X.isInstancedBufferGeometry){let Rt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Me=Math.min(X.instanceCount,Rt);ue.renderInstances(It,Ae,Me)}else ue.render(It,Ae)};function re(M,N,X){M.transparent===!0&&M.side===wi&&M.forceSinglePass===!1?(M.side=bn,M.needsUpdate=!0,La(M,N,X),M.side=Hi,M.needsUpdate=!0,La(M,N,X),M.side=wi):La(M,N,X)}this.compile=function(M,N,X=null){X===null&&(X=M),u=At.get(X),u.init(N),y.push(u),X.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),M!==X&&M.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();let G=new Set;return M.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let st=I.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){let Et=st[dt];re(Et,X,I),G.add(Et)}else re(st,X,I),G.add(st)}),u=y.pop(),G},this.compileAsync=function(M,N,X=null){let G=this.compile(M,N,X);return new Promise(I=>{function st(){if(G.forEach(function(dt){lt.get(dt).currentProgram.isReady()&&G.delete(dt)}),G.size===0){I(M);return}setTimeout(st,10)}zt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let le=null;function Ln(M){le&&le(M)}function Ge(){Di.stop()}function Vs(){Di.start()}let Di=new xb;Di.setAnimationLoop(Ln),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(M){le=M,et.setAnimationLoop(M),M===null?Di.stop():Di.start()},et.addEventListener("sessionstart",Ge),et.addEventListener("sessionend",Vs),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(N),N=et.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,N,L),u=At.get(M,y.length),u.init(N),y.push(u),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Vt.setFromProjectionMatrix(j,Fi,N.reversedDepth),Y=this.localClippingEnabled,Xt=at.init(this.clippingPlanes,Y),m=W.get(M,g.length),m.init(),g.push(m),et.enabled===!0&&et.isPresenting===!0){let st=v.xr.getDepthSensingMesh();st!==null&&as(st,N,-1/0,v.sortObjects)}as(M,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,ot),Bt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Bt&&ut.addToRenderList(m,M),this.info.render.frame++,Xt===!0&&at.beginShadows();let X=u.state.shadowsArray;_t.render(X,M,N),Xt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,I=m.transmissive;if(u.setupLights(),N.isArrayCamera){let st=N.cameras;if(I.length>0)for(let dt=0,Et=st.length;dt<Et;dt++){let yt=st[dt];Zc(G,I,M,yt)}Bt&&ut.render(M);for(let dt=0,Et=st.length;dt<Et;dt++){let yt=st[dt];Ui(m,M,yt,yt.viewport)}}else I.length>0&&Zc(G,I,M,N),Bt&&ut.render(M),Ui(m,M,N);L!==null&&R===0&&(Ft.updateMultisampleRenderTarget(L),Ft.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(v,M,N),ft.resetDefaultState(),E=-1,b=null,y.pop(),y.length>0?(u=y[y.length-1],Xt===!0&&at.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function as(M,N,X,G){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Vt.intersectsSprite(M)){G&&bt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);let dt=P.update(M),Et=M.material;Et.visible&&m.push(M,dt,Et,X,bt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Vt.intersectsObject(M))){let dt=P.update(M),Et=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),bt.copy(M.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),bt.copy(dt.boundingSphere.center)),bt.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(Et)){let yt=dt.groups;for(let Nt=0,Ot=yt.length;Nt<Ot;Nt++){let St=yt[Nt],It=Et[St.materialIndex];It&&It.visible&&m.push(M,dt,It,X,bt.z,St)}}else Et.visible&&m.push(M,dt,Et,X,bt.z,null)}}let st=M.children;for(let dt=0,Et=st.length;dt<Et;dt++)as(st[dt],N,X,G)}function Ui(M,N,X,G){let I=M.opaque,st=M.transmissive,dt=M.transparent;u.setupLightsView(X),Xt===!0&&at.setGlobalState(v.clippingPlanes,X),G&&xt.viewport(D.copy(G)),I.length>0&&Ye(I,N,X),st.length>0&&Ye(st,N,X),dt.length>0&&Ye(dt,N,X),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Zc(M,N,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new ts(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?jo:ki,minFilter:Ra,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let st=u.state.transmissionRenderTarget[G.id],dt=G.viewport||D;st.setSize(dt.z*v.transmissionResolutionScale,dt.w*v.transmissionResolutionScale);let Et=v.getRenderTarget(),yt=v.getActiveCubeFace(),Nt=v.getActiveMipmapLevel();v.setRenderTarget(st),v.getClearColor(k),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),Bt&&ut.render(X);let Ot=v.toneMapping;v.toneMapping=Fs;let St=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),Xt===!0&&at.setGlobalState(v.clippingPlanes,G),Ye(M,X,G),Ft.updateMultisampleRenderTarget(st),Ft.updateRenderTargetMipmap(st),zt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Kt=0,Ae=N.length;Kt<Ae;Kt++){let ge=N[Kt],ue=ge.object,Rt=ge.geometry,Me=ge.material,$t=ge.group;if(Me.side===wi&&ue.layers.test(G.layers)){let hn=Me.side;Me.side=bn,Me.needsUpdate=!0,ol(ue,X,G,Rt,Me,$t),Me.side=hn,Me.needsUpdate=!0,It=!0}}It===!0&&(Ft.updateMultisampleRenderTarget(st),Ft.updateRenderTargetMipmap(st))}v.setRenderTarget(Et,yt,Nt),v.setClearColor(k,O),St!==void 0&&(G.viewport=St),v.toneMapping=Ot}function Ye(M,N,X){let G=N.isScene===!0?N.overrideMaterial:null;for(let I=0,st=M.length;I<st;I++){let dt=M[I],Et=dt.object,yt=dt.geometry,Nt=dt.group,Ot=dt.material;Ot.allowOverride===!0&&G!==null&&(Ot=G),Et.layers.test(X.layers)&&ol(Et,N,X,yt,Ot,Nt)}}function ol(M,N,X,G,I,st){M.onBeforeRender(v,N,X,G,I,st),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(v,N,X,G,M,st),I.transparent===!0&&I.side===wi&&I.forceSinglePass===!1?(I.side=bn,I.needsUpdate=!0,v.renderBufferDirect(X,N,G,I,M,st),I.side=Hi,I.needsUpdate=!0,v.renderBufferDirect(X,N,G,I,M,st),I.side=wi):v.renderBufferDirect(X,N,G,I,M,st),M.onAfterRender(v,N,X,G,I,st)}function La(M,N,X){N.isScene!==!0&&(N=wt);let G=lt.get(M),I=u.state.lights,st=u.state.shadowsArray,dt=I.state.version,Et=q.getParameters(M,I.state,st,N,X),yt=q.getProgramCacheKey(Et),Nt=G.programs;G.environment=M.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(M.isMeshStandardMaterial?ve:me).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",Z),Nt=new Map,G.programs=Nt);let Ot=Nt.get(yt);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===dt)return un(M,Et),Ot}else Et.uniforms=q.getUniforms(M),M.onBeforeCompile(Et,v),Ot=q.acquireProgram(Et,yt),Nt.set(yt,Ot),G.uniforms=Et.uniforms;let St=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(St.clippingPlanes=at.uniform),un(M,Et),G.needsLights=In(M),G.lightsStateVersion=dt,G.needsLights&&(St.ambientLightColor.value=I.state.ambient,St.lightProbe.value=I.state.probe,St.directionalLights.value=I.state.directional,St.directionalLightShadows.value=I.state.directionalShadow,St.spotLights.value=I.state.spot,St.spotLightShadows.value=I.state.spotShadow,St.rectAreaLights.value=I.state.rectArea,St.ltc_1.value=I.state.rectAreaLTC1,St.ltc_2.value=I.state.rectAreaLTC2,St.pointLights.value=I.state.point,St.pointLightShadows.value=I.state.pointShadow,St.hemisphereLights.value=I.state.hemi,St.directionalShadowMap.value=I.state.directionalShadowMap,St.directionalShadowMatrix.value=I.state.directionalShadowMatrix,St.spotShadowMap.value=I.state.spotShadowMap,St.spotLightMatrix.value=I.state.spotLightMatrix,St.spotLightMap.value=I.state.spotLightMap,St.pointShadowMap.value=I.state.pointShadowMap,St.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function rs(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=sl.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function un(M,N){let X=lt.get(M);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Li(M,N,X,G,I){N.isScene!==!0&&(N=wt),Ft.resetTextureUnits();let st=N.fog,dt=G.isMeshStandardMaterial?N.environment:null,Et=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ur,yt=(G.isMeshStandardMaterial?ve:me).get(G.envMap||dt),Nt=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ot=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!X.morphAttributes.position,It=!!X.morphAttributes.normal,Kt=!!X.morphAttributes.color,Ae=Fs;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ae=v.toneMapping);let ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=ge!==void 0?ge.length:0,Rt=lt.get(G),Me=u.state.lights;if(Xt===!0&&(Y===!0||M!==b)){let Ke=M===b&&G.id===E;at.setState(G,M,Ke)}let $t=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Me.state.version||Rt.outputColorSpace!==Et||I.isBatchedMesh&&Rt.batching===!1||!I.isBatchedMesh&&Rt.batching===!0||I.isBatchedMesh&&Rt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Rt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Rt.instancing===!1||!I.isInstancedMesh&&Rt.instancing===!0||I.isSkinnedMesh&&Rt.skinning===!1||!I.isSkinnedMesh&&Rt.skinning===!0||I.isInstancedMesh&&Rt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Rt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Rt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Rt.instancingMorph===!1&&I.morphTexture!==null||Rt.envMap!==yt||G.fog===!0&&Rt.fog!==st||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==at.numPlanes||Rt.numIntersection!==at.numIntersection)||Rt.vertexAlphas!==Nt||Rt.vertexTangents!==Ot||Rt.morphTargets!==St||Rt.morphNormals!==It||Rt.morphColors!==Kt||Rt.toneMapping!==Ae||Rt.morphTargetsCount!==ue)&&($t=!0):($t=!0,Rt.__version=G.version);let hn=Rt.currentProgram;$t===!0&&(hn=La(G,N,I));let gn=!1,Fe=!1,On=!1,he=hn.getUniforms(),nn=Rt.uniforms;if(xt.useProgram(hn.program)&&(gn=!0,Fe=!0,On=!0),G.id!==E&&(E=G.id,Fe=!0),gn||b!==M){xt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),he.setValue(A,"projectionMatrix",M.projectionMatrix),he.setValue(A,"viewMatrix",M.matrixWorldInverse);let an=he.map.cameraPosition;an!==void 0&&an.setValue(A,gt.setFromMatrixPosition(M.matrixWorld)),Dt.logarithmicDepthBuffer&&he.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&he.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Fe=!0,On=!0)}if(I.isSkinnedMesh){he.setOptional(A,I,"bindMatrix"),he.setOptional(A,I,"bindMatrixInverse");let Ke=I.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),he.setValue(A,"boneTexture",Ke.boneTexture,Ft))}I.isBatchedMesh&&(he.setOptional(A,I,"batchingTexture"),he.setValue(A,"batchingTexture",I._matricesTexture,Ft),he.setOptional(A,I,"batchingIdTexture"),he.setValue(A,"batchingIdTexture",I._indirectTexture,Ft),he.setOptional(A,I,"batchingColorTexture"),I._colorsTexture!==null&&he.setValue(A,"batchingColorTexture",I._colorsTexture,Ft));let sn=X.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&rt.update(I,X,hn),(Fe||Rt.receiveShadow!==I.receiveShadow)&&(Rt.receiveShadow=I.receiveShadow,he.setValue(A,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(nn.envMap.value=yt,nn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(nn.envMapIntensity.value=N.environmentIntensity),Fe&&(he.setValue(A,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&Nn(nn,On),st&&G.fog===!0&&tt.refreshFogUniforms(nn,st),tt.refreshMaterialUniforms(nn,G,z,Q,u.state.transmissionRenderTarget[M.id]),sl.upload(A,rs(Rt),nn,Ft)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(sl.upload(A,rs(Rt),nn,Ft),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&he.setValue(A,"center",I.center),he.setValue(A,"modelViewMatrix",I.modelViewMatrix),he.setValue(A,"normalMatrix",I.normalMatrix),he.setValue(A,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ke=G.uniformsGroups;for(let an=0,Gs=Ke.length;an<Gs;an++){let $n=Ke[an];Gt.update($n,hn),Gt.bind($n,hn)}}return hn}function Nn(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function In(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,N,X){let G=lt.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),lt.get(M.texture).__webglTexture=N,lt.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let X=lt.get(M);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};let Na=A.createFramebuffer();this.setRenderTarget=function(M,N=0,X=0){L=M,C=N,R=X;let G=!0,I=null,st=!1,dt=!1;if(M){let yt=lt.get(M);if(yt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(A.FRAMEBUFFER,null),G=!1;else if(yt.__webglFramebuffer===void 0)Ft.setupRenderTarget(M);else if(yt.__hasExternalTextures)Ft.rebindTextures(M,lt.get(M.texture).__webglTexture,lt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let St=M.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&lt.has(St)&&(M.width!==St.image.width||M.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(M)}}let Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(dt=!0);let Ot=lt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[N])?I=Ot[N][X]:I=Ot[N],st=!0):M.samples>0&&Ft.useMultisampledRTT(M)===!1?I=lt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?I=Ot[X]:I=Ot,D.copy(M.viewport),B.copy(M.scissor),F=M.scissorTest}else D.copy(pt).multiplyScalar(z).floor(),B.copy(Ut).multiplyScalar(z).floor(),F=qt;if(X!==0&&(I=Na),xt.bindFramebuffer(A.FRAMEBUFFER,I)&&G&&xt.drawBuffers(M,I),xt.viewport(D),xt.scissor(B),xt.setScissorTest(F),st){let yt=lt.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,X)}else if(dt){let yt=N;for(let Nt=0;Nt<M.textures.length;Nt++){let Ot=lt.get(M.textures[Nt]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Nt,Ot.__webglTexture,X,yt)}}else if(M!==null&&X!==0){let yt=lt.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,yt.__webglTexture,X)}E=-1},this.readRenderTargetPixels=function(M,N,X,G,I,st,dt,Et=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=lt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){xt.bindFramebuffer(A.FRAMEBUFFER,yt);try{let Nt=M.textures[Et],Ot=Nt.format,St=Nt.type;if(!Dt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-G&&X>=0&&X<=M.height-I&&(M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Et),A.readPixels(N,X,G,I,vt.convert(Ot),vt.convert(St),st))}finally{let Nt=L!==null?lt.get(L).__webglFramebuffer:null;xt.bindFramebuffer(A.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(M,N,X,G,I,st,dt,Et=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=lt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt)if(N>=0&&N<=M.width-G&&X>=0&&X<=M.height-I){xt.bindFramebuffer(A.FRAMEBUFFER,yt);let Nt=M.textures[Et],Ot=Nt.format,St=Nt.type;if(!Dt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,It),A.bufferData(A.PIXEL_PACK_BUFFER,st.byteLength,A.STREAM_READ),M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Et),A.readPixels(N,X,G,I,vt.convert(Ot),vt.convert(St),0);let Kt=L!==null?lt.get(L).__webglFramebuffer:null;xt.bindFramebuffer(A.FRAMEBUFFER,Kt);let Ae=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await YM(A,Ae,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,It),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,st),A.deleteBuffer(It),A.deleteSync(Ae),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,X=0){let G=Math.pow(2,-X),I=Math.floor(M.image.width*G),st=Math.floor(M.image.height*G),dt=N!==null?N.x:0,Et=N!==null?N.y:0;Ft.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,X,0,0,dt,Et,I,st),xt.unbindTexture()};let Ia=A.createFramebuffer(),ll=A.createFramebuffer();this.copyTextureToTexture=function(M,N,X=null,G=null,I=0,st=null){st===null&&(I!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=I,I=0):st=0);let dt,Et,yt,Nt,Ot,St,It,Kt,Ae,ge=M.isCompressedTexture?M.mipmaps[st]:M.image;if(X!==null)dt=X.max.x-X.min.x,Et=X.max.y-X.min.y,yt=X.isBox3?X.max.z-X.min.z:1,Nt=X.min.x,Ot=X.min.y,St=X.isBox3?X.min.z:0;else{let sn=Math.pow(2,-I);dt=Math.floor(ge.width*sn),Et=Math.floor(ge.height*sn),M.isDataArrayTexture?yt=ge.depth:M.isData3DTexture?yt=Math.floor(ge.depth*sn):yt=1,Nt=0,Ot=0,St=0}G!==null?(It=G.x,Kt=G.y,Ae=G.z):(It=0,Kt=0,Ae=0);let ue=vt.convert(N.format),Rt=vt.convert(N.type),Me;N.isData3DTexture?(Ft.setTexture3D(N,0),Me=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ft.setTexture2DArray(N,0),Me=A.TEXTURE_2D_ARRAY):(Ft.setTexture2D(N,0),Me=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);let $t=A.getParameter(A.UNPACK_ROW_LENGTH),hn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),gn=A.getParameter(A.UNPACK_SKIP_PIXELS),Fe=A.getParameter(A.UNPACK_SKIP_ROWS),On=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ge.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ge.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Nt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ot),A.pixelStorei(A.UNPACK_SKIP_IMAGES,St);let he=M.isDataArrayTexture||M.isData3DTexture,nn=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let sn=lt.get(M),Ke=lt.get(N),an=lt.get(sn.__renderTarget),Gs=lt.get(Ke.__renderTarget);xt.bindFramebuffer(A.READ_FRAMEBUFFER,an.__webglFramebuffer),xt.bindFramebuffer(A.DRAW_FRAMEBUFFER,Gs.__webglFramebuffer);for(let $n=0;$n<yt;$n++)he&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,lt.get(M).__webglTexture,I,St+$n),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,lt.get(N).__webglTexture,st,Ae+$n)),A.blitFramebuffer(Nt,Ot,dt,Et,It,Kt,dt,Et,A.DEPTH_BUFFER_BIT,A.NEAREST);xt.bindFramebuffer(A.READ_FRAMEBUFFER,null),xt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(I!==0||M.isRenderTargetTexture||lt.has(M)){let sn=lt.get(M),Ke=lt.get(N);xt.bindFramebuffer(A.READ_FRAMEBUFFER,Ia),xt.bindFramebuffer(A.DRAW_FRAMEBUFFER,ll);for(let an=0;an<yt;an++)he?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,sn.__webglTexture,I,St+an):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,sn.__webglTexture,I),nn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ke.__webglTexture,st,Ae+an):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ke.__webglTexture,st),I!==0?A.blitFramebuffer(Nt,Ot,dt,Et,It,Kt,dt,Et,A.COLOR_BUFFER_BIT,A.NEAREST):nn?A.copyTexSubImage3D(Me,st,It,Kt,Ae+an,Nt,Ot,dt,Et):A.copyTexSubImage2D(Me,st,It,Kt,Nt,Ot,dt,Et);xt.bindFramebuffer(A.READ_FRAMEBUFFER,null),xt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else nn?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Me,st,It,Kt,Ae,dt,Et,yt,ue,Rt,ge.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(Me,st,It,Kt,Ae,dt,Et,yt,ue,ge.data):A.texSubImage3D(Me,st,It,Kt,Ae,dt,Et,yt,ue,Rt,ge):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,st,It,Kt,dt,Et,ue,Rt,ge.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,st,It,Kt,ge.width,ge.height,ue,ge.data):A.texSubImage2D(A.TEXTURE_2D,st,It,Kt,dt,Et,ue,Rt,ge);A.pixelStorei(A.UNPACK_ROW_LENGTH,$t),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,hn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,gn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Fe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,On),st===0&&N.generateMipmaps&&A.generateMipmap(Me),xt.unbindTexture()},this.initRenderTarget=function(M){lt.get(M).__webglFramebuffer===void 0&&Ft.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ft.setTextureCube(M,0):M.isData3DTexture?Ft.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ft.setTexture2DArray(M,0):Ft.setTexture2D(M,0),xt.unbindTexture()},this.resetState=function(){C=0,R=0,L=null,xt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=ce._getUnpackColorSpace()}};var Ua=Pa(Yc(),1),rl=(e=0)=>({value:e,target:e,velocity:0}),Ve=(e,t,n)=>Math.min(n,Math.max(t,e)),Pe=(e,t)=>Number.isFinite(e)?e:t;function x0(e,t,n,i){if(i||n<=0)return e.value=e.target,e.velocity=0,!1;let s=8/Math.max(.06,n),a=e.value-e.target,r=e.velocity+s*a,o=Math.exp(-s*t);return e.value=e.target+(a+r*t)*o,e.velocity=(e.velocity-s*r*t)*o,Math.abs(e.value-e.target)<1e-4&&Math.abs(e.velocity)<.001?(e.value=e.target,e.velocity=0,!1):!0}function Rb(e){let t=e|0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function s3(e,t,n,i,s,a,r){let o=e.length/3,l=Float64Array.from(e),c=Float64Array.from(e),h=Float64Array.from(e),d=[],f=[],p=new Map,_=Rb(r),S=Array.from({length:i},()=>{let D=_()*Math.PI*2;return{x:Math.cos(D),y:Math.sin(D),phase:_()*Math.PI*2,weight:_()*.6+.4}});for(let D=0;D<t.length;D+=3)for(let B=0;B<3;B++){let F=t[D+B],k=t[D+(B+1)%3],O=t[D+(B+2)%3],H=Math.min(F,k)*o+Math.max(F,k),Q=p.get(H);if(Q){let z=Q.opposite*3,$=O*3,ot=Math.hypot(e[z]-e[$],e[z+1]-e[$+1]),pt=(e[z]+e[$])*.5,Ut=(e[z+1]+e[$+1])*.5,qt=0;for(let Vt of S){let Xt=Math.abs(Math.sin((pt*Vt.x+Ut*Vt.y)/n*4+Vt.phase));qt=Math.max(qt,Math.exp(-Xt*Xt*80)*Vt.weight)}f.push(z,$,ot,.12+(1-qt)*.75)}else{p.set(H,{a:F,b:k,opposite:O});let z=Math.hypot(e[F*3]-e[k*3],e[F*3+1]-e[k*3+1]);d.push(F*3,k*3,z)}}let m=Math.sqrt(n*n/o),u=n*.008,g=[e.slice()],y=64,v=3,w=y*v,C=0;for(let D=0;D<e.length;D+=3)C=Math.max(C,Math.hypot(e[D]/.94,e[D+1]/1.02));C*=1.02;function R(D,B,F,k){for(let O=0;O<D.length;O+=B){let H=k?D.length-B-O:O,Q=D[H],z=D[H+1],$=l[z]-l[Q],ot=l[z+1]-l[Q+1],pt=l[z+2]-l[Q+2],Ut=Math.sqrt($*$+ot*ot+pt*pt);if(Ut<1e-6)continue;let qt=B===4?D[H+3]:1,Vt=(1-D[H+2]/Ut)*.5*F*qt;l[Q]+=$*Vt,l[z]-=$*Vt,l[Q+1]+=ot*Vt,l[z+1]-=ot*Vt,l[Q+2]+=pt*Vt,l[z+2]-=pt*Vt}}function L(){let D=u*2;for(let B=0;B<t.length;B+=3){let F=t[B]*3,k=t[B+1]*3,O=t[B+2]*3,H=l[F],Q=l[F+1],z=l[F+2],$=l[k]-H,ot=l[k+1]-Q,pt=l[k+2]-z,Ut=l[O]-H,qt=l[O+1]-Q,Vt=l[O+2]-z,Xt=ot*Vt-pt*qt,Y=pt*Ut-$*Vt,j=$*qt-ot*Ut,gt=Math.hypot(Xt,Y,j);if(gt<1e-7)continue;Xt/=gt,Y/=gt,j/=gt;let bt=Math.min(H,l[k],l[O])-D,wt=Math.max(H,l[k],l[O])+D,Bt=Math.min(Q,l[k+1],l[O+1])-D,De=Math.max(Q,l[k+1],l[O+1])+D,A=Math.min(z,l[k+2],l[O+2])-D,_e=Math.max(z,l[k+2],l[O+2])+D,zt=$*$+ot*ot+pt*pt,Dt=Ut*Ut+qt*qt+Vt*Vt,xt=$*Ut+ot*qt+pt*Vt,jt=zt*Dt-xt*xt;if(!(jt<1e-10))for(let lt=0;lt<l.length;lt+=3){if(lt===F||lt===k||lt===O||l[lt]<bt||l[lt]>wt||l[lt+1]<Bt||l[lt+1]>De||l[lt+2]<A||l[lt+2]>_e)continue;let Ft=e[lt]-(e[F]+e[k]+e[O])/3,me=e[lt+1]-(e[F+1]+e[k+1]+e[O+1])/3;if(Ft*Ft+me*me<m*m*6)continue;let ve=l[lt]-H,T=l[lt+1]-Q,x=l[lt+2]-z,P=ve*Xt+T*Y+x*j,tt=(h[lt]-h[F])*Xt+(h[lt+1]-h[F+1])*Y+(h[lt+2]-h[F+2])*j>=0?1:-1;if(P*tt>=u||Math.abs(P)>D)continue;let W=ve*$+T*ot+x*pt,At=ve*Ut+T*qt+x*Vt,at=(Dt*W-xt*At)/jt,_t=(zt*At-xt*W)/jt;if(at<0||_t<0||at+_t>1)continue;let ut=1-at-_t,rt=(u*tt-P)/(1+ut*ut+at*at+_t*_t);for(let nt=0;nt<3;nt++){let vt=(nt===0?Xt:nt===1?Y:j)*rt;l[lt+nt]+=vt,l[F+nt]-=vt*ut,l[k+nt]-=vt*at,l[O+nt]-=vt*_t}}}}for(let D=1;D<=w;D++){let B=D/w,F=B*B*(3-2*B),k=C*(1-F)+n*(.19-a*.025)*F;h.set(l);for(let O=0;O<l.length;O+=3){let H=e[O]/n,Q=e[O+1]/n,z=0;for(let $ of S)z+=Math.sin((H*$.x+Q*$.y)*5+$.phase)*$.weight;for(let $=0;$<3;$++){let ot=(l[O+$]-c[O+$])*.55;c[O+$]=l[O+$],l[O+$]+=Ve(ot,-m*.15,m*.15)}l[O+2]+=z/i*n*7e-4*Math.sin(B*Math.PI)}for(let O=0;O<18;O++){R(f,4,.45*(1-s*.4),O%2===0);for(let H=0;H<l.length;H+=3){let Q=l[H]/.94,z=l[H+1]/1.02,$=l[H+2]/.86,ot=Math.hypot(Q,z,$);if(ot>k){let pt=(1-k/ot)*.55;l[H]-=l[H]*pt,l[H+1]-=l[H+1]*pt,l[H+2]-=l[H+2]*pt}}R(d,3,1,O%2!==0),(O===8||O===17)&&L()}for(let O=0;O<f.length;O+=4){let H=f[O],Q=f[O+1],z=Math.hypot(l[H]-l[Q],l[H+1]-l[Q+1],l[H+2]-l[Q+2]);z<f[O+2]*.86&&(f[O+2]+=(z-f[O+2])*.12)}D%v===0&&g.push(Float32Array.from(l))}let E=Float64Array.from(l);for(let D=1;D<=80;D++){let B=D/80,F=B*B*(3-2*B);for(let k=0;k<12;k++){for(let O=0;O<l.length;O++){let H=E[O]+(e[O]-E[O])*F;l[O]+=(H-l[O])*(O%3===2?.04:.22)}R(f,4,.7,k%2===0),R(d,3,1,k%2!==0)}}let b=Float32Array.from(l);return{samples:g,creased:b}}var a3=({src:e,alt:t="Crumplable image",backSrc:n="",width:i=320,height:s=400,sceneHeight:a=560,imageFit:r="cover",releaseBehavior:o="restore",crumpleAmount:l=.85,crumpleDuration:c=.55,releaseDuration:h=.4,foldCount:d=6,foldSharpness:f=.6,wrinkleDepth:p=.65,creaseStrength:_=.18,paperColor:S="#f4f0e8",roughness:m=.92,paperTexture:u=.08,lightIntensity:g=1.8,lightAngle:y=-35,shadow:v=!0,shadowOpacity:w=.08,draggable:C=!0,dragRotation:R=10,dragRadius:L=180,returnToOrigin:E=!0,rotation:b=0,seed:D=7,detail:B=64,disabled:F=!1,resetKey:k=0,onStateChange:O,onError:H,autoCrumple:Q=!1,onReady:z,className:$="",style:ot})=>{let pt=(0,jn.useRef)(null),Ut=(0,jn.useRef)(null),qt=(0,jn.useRef)(null),Vt=(0,jn.useRef)(null),Xt=(0,jn.useRef)(null),Y=(0,jn.useRef)(null),[j,gt]=(0,jn.useState)("loading"),bt=(0,jn.useRef)({releaseBehavior:o,crumpleAmount:l,crumpleDuration:c,releaseDuration:h,creaseStrength:_,draggable:C,dragRotation:R,dragRadius:L,returnToOrigin:E,disabled:F,onStateChange:O,onError:H,onReady:z});bt.current={releaseBehavior:o,crumpleAmount:l,crumpleDuration:c,releaseDuration:h,creaseStrength:_,draggable:C,dragRotation:R,dragRadius:L,returnToOrigin:E,disabled:F,onStateChange:O,onError:H,onReady:z},(0,jn.useEffect)(()=>{let Bt=Ut.current,De=qt.current,A=Vt.current;if(!Bt||!De||!A)return;gt("loading"),A.disabled=!0,A.dataset.held="false",A.setAttribute("aria-pressed","false");let _e=Bt.getBoundingClientRect(),zt=Math.max(1,Pe(i,320)),Dt=Math.max(1,Pe(s,400)),xt=Math.min(1,Math.max(1,_e.width-48)/zt,Math.max(1,_e.height-48)/Dt);Bt.style.setProperty("--pc-image-width",`${zt*xt}px`),Bt.style.setProperty("--pc-image-height",`${Dt*xt}px`);let jt;try{jt=new fd({canvas:De,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch(K){gt("error"),bt.current.onError?.(K instanceof Error?K:new Error("WebGL is unavailable."));return}let lt=Math.max(1,Pe(i,320)),Ft=Math.max(1,Pe(s,400)),me=Ft/lt,ve=Math.min(1,me),T=Math.round(Ve(Pe(B,64)/4,8,24)),x=Math.max(8,Math.round(T/Math.max(1,me))),P=Math.max(8,Math.round(T*Math.min(1,me))),q=Rb(Pe(D,7)),tt=Ve(Pe(f,.6),0,1),W=Math.round(Ve(Pe(d,6),3,16)),At=Ve(Pe(p,.65),0,2),at=(x+1)*(P+1),_t=new Float32Array(at*3),ut=new Float32Array(at*3),rt=new Float32Array(at*2),nt=[];for(let K=0;K<=P;K++)for(let Mt=0;Mt<=x;Mt++){let Jt=K*(x+1)+Mt,kt=(Mt+(Mt>0&&Mt<x?(q()-.5)*.5:0))/x,we=(K+(K>0&&K<P?(q()-.5)*.5:0))/P,fe=kt-.5,be=(we-.5)*me;if(_t[Jt*3]=fe,_t[Jt*3+1]=be,rt[Jt*2]=kt,rt[Jt*2+1]=we,Mt<x&&K<P){let Ct=Jt,ke=Jt+1,Pn=Jt+x+1,Gn=Pn+1;q()>.5?nt.push(Ct,ke,Gn,Ct,Gn,Pn):nt.push(Ct,ke,Pn,ke,Gn,Pn)}}let Lt=JSON.stringify([lt,Ft,T,W,tt,At,D]);pt.current?.key!==Lt&&(pt.current={key:Lt,value:s3(_t,nt,ve,W,tt,At,Pe(D,7))});let vt=pt.current.value,ft=new Float32Array(nt.length*3),Gt=new Float32Array(nt.length*3),U=new Float32Array(nt.length*2),et=new Float32Array(nt.length),ct=Array.from({length:at},()=>[]);for(let K=0;K<nt.length;K++)U[K*2]=rt[nt[K]*2],U[K*2+1]=rt[nt[K]*2+1],ct[nt[K]].push(Math.floor(K/3)*3);let ht=new es;ht.setAttribute("position",new Mn(ft,3).setUsage(od)),ht.setAttribute("normal",new Mn(Gt,3).setUsage(od)),ht.setAttribute("uv",new Mn(U,2));let it=new Uint8Array(16384*4);for(let K=0;K<it.length;K+=4){let Mt=100+Math.floor(q()*155);it[K]=it[K+1]=it[K+2]=Mt,it[K+3]=255}let Z=new Cc(it,128,128);Z.wrapS=Z.wrapT=Bo,Z.repeat.set(5,5*me),Z.magFilter=Qn,Z.minFilter=Qn,Z.needsUpdate=!0;let Tt={roughness:Ve(Pe(m,.92),0,1),metalness:0,bumpMap:Z,bumpScale:Ve(Pe(u,.08),0,1)*.32,alphaTest:.04,alphaToCoverage:!0,flatShading:!1},Pt=new Zo({...Tt,side:Hi}),re=new Zo({...Tt,side:bn,color:n?"#ffffff":S}),le={value:0};for(let K of[Pt,re])K.onBeforeCompile=Mt=>{Mt.uniforms.paperLighting=le,Mt.fragmentShader=`uniform float paperLighting;
`+Mt.fragmentShader,Mt.fragmentShader=Mt.fragmentShader.replace("#include <map_fragment>",`
          #include <map_fragment>
          #ifdef USE_MAP
            if (vMapUv.x < 0.0 || vMapUv.x > 1.0 || vMapUv.y < 0.0 || vMapUv.y > 1.0) discard;
            ${K===re&&!n?"diffuseColor.rgb = diffuse;":""}
          #endif
        `),Mt.fragmentShader=Mt.fragmentShader.replace("#include <opaque_fragment>",`
          outgoingLight = mix(diffuseColor.rgb, outgoingLight, paperLighting);
          #include <opaque_fragment>
        `)},K.customProgramCacheKey=()=>`paper-${K===re&&!n?"stock":"print"}`;let Ln=new Jo({depthPacking:rd,alphaTest:.04,side:wi});Ln.onBeforeCompile=K=>{K.fragmentShader=K.fragmentShader.replace("#include <map_fragment>",`
        #include <map_fragment>
        #ifdef USE_MAP
          if (vMapUv.x < 0.0 || vMapUv.x > 1.0 || vMapUv.y < 0.0 || vMapUv.y > 1.0) discard;
        #endif
      `)};let Ge=new Ns,Vs=new Dn(ht,Pt),Di=new Dn(ht,re);Vs.castShadow=v,Vs.receiveShadow=v,Di.receiveShadow=v,Vs.customDepthMaterial=Ln,Ge.add(Vs,Di);let as=new Rc;as.add(Ge);let Ui=new Rn(35,1,.1,1e4),Zc=new Pc(16777215,10789040,1.35);as.add(Zc);let Ye=new zc(16775920,Math.max(0,Pe(g,1.8)));Ye.castShadow=v,Ye.shadow.mapSize.set(1024,1024),Ye.shadow.bias=-2e-4,Ye.shadow.normalBias=.6,Ye.shadow.radius=3,as.add(Ye,Ye.target);let ol=new hr(1,1),La=new Lc({opacity:Ve(Pe(w,.08),0,1),depthWrite:!1}),rs=new Dn(ol,La);rs.receiveShadow=!0,rs.visible=v,as.add(rs),jt.setClearColor(0,0),jt.outputColorSpace=wn,jt.shadowMap.enabled=v,jt.shadowMap.type=mf;let un=rl(),Li=rl(),Nn=rl(),In=rl(),Na=rl(),Ia=rl(),ll=[un,Li,Nn,In,Na,Ia],M=new Fc,N=new oe,X=new Ai(new V(0,0,1),0),G=new V,I=new V,st=new V,dt=new V,Et=new V,yt=new V,Nt=new V(1,0,0),Ot=[Math.floor(at/2),0,0],St=1,It=1,Kt=lt,Ae=0,ge=0,ue=0,Rt=0,Me=0,$t=0,hn=0,gn=!1,Fe=!1,On=null,he=0,nn=!1,sn=!1,Ke=!0,an=!1,Gs=0,$n=0,b0="flat",E0=new Set,Jc=window.matchMedia("(prefers-reduced-motion: reduce)"),Oa=Jc.matches,T0=-1,A0=-1,cl=Da.degToRad(Pe(b,0));function md(K){K!==b0&&(b0=K,bt.current.onStateChange?.(K))}function w0(){if(un.value===T0&&Li.value===A0)return;T0=un.value,A0=Li.value;let K=Ve(un.value,0,1),Mt=K*(vt.samples.length-1),Jt=Math.floor(Mt),kt=Math.min(Jt+1,vt.samples.length-1),we=Mt-Jt,fe=vt.samples[Jt],be=vt.samples[kt];for(let Ct=0;Ct<ut.length;Ct++)ut[Ct]=fe[Ct]+(be[Ct]-fe[Ct])*we,ut[Ct]+=(vt.creased[Ct]-_t[Ct])*Li.value*(1-K);for(let Ct=0;Ct<nt.length;Ct+=3){let ke=nt[Ct]*3,Pn=nt[Ct+1]*3,Gn=nt[Ct+2]*3,Tr=ut[Pn]-ut[ke],Ar=ut[Pn+1]-ut[ke+1],wr=ut[Pn+2]-ut[ke+2],os=ut[Gn]-ut[ke],Qc=ut[Gn+1]-ut[ke+1],Rr=ut[Gn+2]-ut[ke+2],W0=Ar*Rr-wr*Qc,q0=wr*os-Tr*Rr,Y0=Tr*Qc-Ar*os,_d=Math.hypot(W0,q0,Y0)||1;et[Ct]=W0/_d,et[Ct+1]=q0/_d,et[Ct+2]=Y0/_d}for(let Ct=0;Ct<nt.length;Ct++){let ke=nt[Ct]*3,Pn=Math.floor(Ct/3)*3,Gn=0,Tr=0,Ar=0;for(let os of ct[nt[Ct]]){let Qc=et[Pn]*et[os]+et[Pn+1]*et[os+1]+et[Pn+2]*et[os+2],Rr=Da.smoothstep(Qc,.88-(1-tt)*.18,.98);Gn+=et[os]*Rr,Tr+=et[os+1]*Rr,Ar+=et[os+2]*Rr}let wr=Math.hypot(Gn,Tr,Ar)||1;ft[Ct*3]=ut[ke],ft[Ct*3+1]=ut[ke+1],ft[Ct*3+2]=ut[ke+2],Gt[Ct*3]=Gn/wr,Gt[Ct*3+1]=Tr/wr,Gt[Ct*3+2]=Ar/wr}ht.attributes.position.needsUpdate=!0,ht.attributes.normal.needsUpdate=!0,ht.computeBoundingSphere(),ht.computeBoundingBox(),le.value=Da.smoothstep(K+Li.value,0,.4)}function Nb(){let K=ht.boundingBox;if(!K)return;let Mt=1/0,Jt=1/0,kt=-1/0,we=-1/0;for(let fe=0;fe<8;fe++){st.set(fe&1?K.max.x:K.min.x,fe&2?K.max.y:K.min.y,fe&4?K.max.z:K.min.z),st.applyMatrix4(Ge.matrixWorld).project(Ui);let be=(st.x+1)*St/2,Ct=(1-st.y)*It/2;Mt=Math.min(Mt,be),kt=Math.max(kt,be),Jt=Math.min(Jt,Ct),we=Math.max(we,Ct)}A.style.transform=`translate3d(${Mt}px, ${Jt}px, 0)`,A.style.width=`${Math.max(24,kt-Mt)}px`,A.style.height=`${Math.max(24,we-Jt)}px`}function R0(K,Mt){N.set(K/St*2-1,1-Mt/It*2),M.setFromCamera(N,Ui)}function Ib(K){if(Gs=0,nn||!sn||an||!Ke||document.hidden)return;let Mt=$n?Math.min(.04,(K-$n)/1e3):1/60;$n=K;let Jt=bt.current,kt=!1,we=gn?Pe(Jt.crumpleDuration,.55):Pe(Jt.releaseDuration,.4);for(let be of ll)kt=x0(be,Mt,be===un||be===Li?we:.42,Oa||Fe)||kt;if(he=Math.max(he,un.value),w0(),Ge.rotation.set(Na.value,Ia.value,cl),gn&&!Fe&&Jt.draggable){let be=ht.attributes.position;G.set(0,0,0);for(let Ct=0;Ct<3;Ct++)dt.fromBufferAttribute(be,Ot[Ct]),G.addScaledVector(dt,Nt.getComponent(Ct));G.multiplyScalar(Kt).applyEuler(Ge.rotation),X.constant=-G.z,R0(Ae,ge),M.ray.intersectPlane(X,I)&&(Nn.value=Nn.target=I.x-G.x,In.value=In.target=I.y-G.y,Nn.velocity=In.velocity=0)}Ge.position.set(Nn.value,In.value,0),Ge.updateMatrixWorld(!0);let fe=ht.boundingBox;if(fe){let be=1/0;for(let Ct=0;Ct<8;Ct++)st.set(Ct&1?fe.max.x:fe.min.x,Ct&2?fe.max.y:fe.min.y,Ct&4?fe.max.z:fe.min.z),st.applyMatrix4(Ge.matrixWorld),be=Math.min(be,st.z);rs.position.z=be-Kt*ve*.08}jt.render(as,Ui),Nb(),kt&&di()}function di(){!Gs&&!nn&&sn&&Ke&&!document.hidden&&!an&&(Gs=requestAnimationFrame(Ib))}function C0(){let K=Bt.getBoundingClientRect();St=Math.max(1,K.width),It=Math.max(1,K.height),Kt=lt*Math.min(1,Math.max(1,St-48)/lt,Math.max(1,It-48)/Ft),Ge.scale.setScalar(Kt),Ui.aspect=St/It,Ui.position.z=It/(2*Math.tan(Da.degToRad(Ui.fov/2))),Ui.updateProjectionMatrix(),Ui.updateMatrixWorld(),jt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),jt.setSize(St,It,!1);let Mt=Math.max(St,It),Jt=Da.degToRad(Pe(y,-35));if(Ye.position.set(Math.sin(Jt)*Mt,Math.cos(Jt)*Mt,Mt*4),Ye.shadow.camera.left=Ye.shadow.camera.bottom=-Mt,Ye.shadow.camera.right=Ye.shadow.camera.top=Mt,Ye.shadow.camera.near=1,Ye.shadow.camera.far=Mt*6,Ye.shadow.camera.updateProjectionMatrix(),rs.position.z=-Kt*ve*.12,rs.scale.set(St*4,It*4,1),Bt.style.setProperty("--pc-image-width",`${Kt}px`),Bt.style.setProperty("--pc-image-height",`${Kt*me}px`),!gn){let kt=Math.max(0,(St-Kt)/2-16),we=Math.max(0,(It-Kt*me)/2-16);Nn.value=Nn.target=Ve(Nn.value,-kt,kt),In.value=In.target=Ve(In.value,-we,we)}di()}function br(K=!1){if(!gn)return;let Mt=bt.current;gn=!1,A.setAttribute("aria-pressed","false"),A.dataset.held="false";let Jt=On;if(On=null,Jt!==null&&A.hasPointerCapture(Jt)&&A.releasePointerCapture(Jt),Mt.releaseBehavior==="stay"?(un.target=un.value,un.velocity=0):(un.target=0,Li.target=Mt.releaseBehavior==="creased"?Math.max(Li.value,he*Ve(Pe(Mt.creaseStrength,.18),0,1)):0),Na.target=Ia.target=0,Mt.returnToOrigin&&Mt.releaseBehavior!=="stay")Nn.target=In.target=0;else{let kt=ht.boundingBox,we=Mt.releaseBehavior==="stay"&&kt?kt.max.x-kt.min.x:1,fe=Mt.releaseBehavior==="stay"&&kt?kt.max.y-kt.min.y:me,be=(Math.abs(Math.cos(cl))*we+Math.abs(Math.sin(cl))*fe)*Kt/2,Ct=(Math.abs(Math.sin(cl))*we+Math.abs(Math.cos(cl))*fe)*Kt/2,ke=Math.min(Math.max(0,Pe(Mt.dragRadius,180)),Math.max(0,St/2-be-16)),Pn=Math.min(Math.max(0,Pe(Mt.dragRadius,180)),Math.max(0,It/2-Ct-16)),Gn=!Oa&&!Fe&&performance.now()-Me<90?.06:0;Nn.target=Ve(Nn.value+$t*Gn,-ke,ke),In.target=Ve(In.value-hn*Gn,-Pn,Pn)}if(K||Fe||Oa)for(let kt of ll)x0(kt,0,0,!0);Fe=!1,md(Mt.releaseBehavior==="stay"&&un.target>.001?"crumpled":Li.target>.001?"creased":"flat"),di()}function D0(){br(!0);for(let K of ll)K.target=K.value=K.velocity=0;he=0,md("flat"),di()}Xt.current=D0,Y.current=()=>br(!0);function gd(){gn=!0,he=un.value,un.target=Ve(Pe(bt.current.crumpleAmount,.85),0,1),A.setAttribute("aria-pressed","true"),A.dataset.held="true",md("holding"),di()}function U0(K){if(!sn||bt.current.disabled||gn||K.button!==0||!K.isPrimary)return;let Mt=Bt.getBoundingClientRect();Ae=ue=K.clientX-Mt.left,ge=Rt=K.clientY-Mt.top,R0(Ae,ge),Ge.updateMatrixWorld(!0);let Jt=M.intersectObjects([Vs,Di],!1)[0];if(!Jt?.face)return;K.preventDefault(),A.dataset.pointer="true",A.focus({preventScroll:!0});let{face:kt}=Jt;Ot=[kt.a,kt.b,kt.c];let we=ht.attributes.position;dt.fromBufferAttribute(we,kt.a),Et.fromBufferAttribute(we,kt.b),yt.fromBufferAttribute(we,kt.c),ji.getBarycoord(Ge.worldToLocal(Jt.point.clone()),dt,Et,yt,Nt),Fe=!1,On=K.pointerId,$t=hn=0,Me=performance.now(),A.setPointerCapture(K.pointerId),gd()}function L0(K){if(!gn||K.pointerId!==On||!bt.current.draggable)return;let Mt=Bt.getBoundingClientRect(),Jt=performance.now(),kt=K.clientX-Mt.left,we=K.clientY-Mt.top,fe=Math.max(.008,(Jt-Me)/1e3);$t=(kt-ue)/fe,hn=(we-Rt)/fe,ue=kt,Rt=we,Me=Jt,Ae=Ve(kt,12,St-12),ge=Ve(we,12,It-12);let be=Oa?0:Da.degToRad(Ve(Pe(bt.current.dragRotation,10),0,60));Na.target=Ve(hn/1800,-1,1)*be,Ia.target=Ve($t/1800,-1,1)*be,di()}function Kc(K){K.pointerId===On&&br()}function N0(K){K.pointerId===On&&br(!0)}function Er(){br(!0)}function I0(){A.dataset.pointer="false",Er()}function O0(K){if(!(bt.current.disabled||!sn)){if(A.dataset.pointer="false",K.key==="Escape"){K.preventDefault(),D0();return}if(K.key===" "||K.key==="Enter"){if(K.preventDefault(),K.repeat||gn)return;Fe=!0,gd(),x0(un,0,0,!0),he=Math.max(he,un.value)}else if(gn&&Fe&&bt.current.draggable&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(K.key)){K.preventDefault();let Mt=K.shiftKey?30:12,Jt=Math.max(0,Pe(bt.current.dragRadius,180));Nn.target=Ve(Nn.target+(K.key==="ArrowRight"?Mt:K.key==="ArrowLeft"?-Mt:0),-Math.min(Jt,St/3),Math.min(Jt,St/3)),In.target=Ve(In.target+(K.key==="ArrowUp"?Mt:K.key==="ArrowDown"?-Mt:0),-Math.min(Jt,It/3),Math.min(Jt,It/3)),di()}}}function P0(K){Fe&&(K.key===" "||K.key==="Enter")&&(K.preventDefault(),br(!0))}function B0(){$n=0,document.hidden?Er():di()}function z0(){Oa=Jc.matches,Oa&&(Na.target=Ia.target=0),di()}function F0(K){K.preventDefault(),an=!0,Er(),A.disabled=!0,gt("error"),bt.current.onError?.(new Error("The WebGL context was lost."))}function H0(){an=!1,sn&&(gt("ready"),A.disabled=bt.current.disabled,di())}A.addEventListener("pointerdown",U0),A.addEventListener("pointermove",L0),A.addEventListener("pointerup",Kc),A.addEventListener("pointercancel",N0),A.addEventListener("lostpointercapture",Kc),A.addEventListener("keydown",O0),A.addEventListener("keyup",P0),A.addEventListener("blur",I0),window.addEventListener("blur",Er),document.addEventListener("visibilitychange",B0),Jc.addEventListener("change",z0),De.addEventListener("webglcontextlost",F0),De.addEventListener("webglcontextrestored",H0);let V0=new ResizeObserver(C0);V0.observe(Bt);let G0=new IntersectionObserver(K=>{Ke=K[0].isIntersecting,$n=0,Ke?di():Er()});G0.observe(Bt),w0(),C0();let k0=new Ic;k0.setCrossOrigin("anonymous");function X0(K){return new Promise((Mt,Jt)=>{k0.load(K,kt=>{if(nn){kt.dispose(),Mt(kt);return}E0.add(kt),kt.colorSpace=wn,kt.anisotropy=Math.min(8,jt.capabilities.getMaxAnisotropy());let we=kt.image,fe=we.width/we.height,be=lt/Ft,Ct=1,ke=1;r==="cover"?fe>be?Ct=be/fe:ke=fe/be:fe>be?ke=fe/be:Ct=be/fe,kt.repeat.set(Ct,ke),kt.offset.set((1-Ct)/2,(1-ke)/2),Mt(kt)},void 0,()=>Jt(new Error(`Unable to load paper image: ${K}. Remote images must allow CORS.`)))})}return e?Promise.all([X0(e),n?X0(n):Promise.resolve(null)]).then(([K,Mt])=>{nn||(Mt&&(Mt.repeat.x*=-1,Mt.offset.x=1-Mt.offset.x),Pt.map=K,re.map=Mt||K,Ln.map=K,Pt.needsUpdate=re.needsUpdate=Ln.needsUpdate=!0,sn=!0,gt("ready"),A.disabled=bt.current.disabled,di(),Q&&!Oa&&gd(),bt.current.onReady?.())}).catch(K=>{nn||(gt("error"),bt.current.onError?.(K))}):(gt("error"),bt.current.onError?.(new Error("PaperCrumple requires an image src."))),()=>{nn=!0,cancelAnimationFrame(Gs),On!==null&&A.hasPointerCapture(On)&&A.releasePointerCapture(On),Xt.current=Y.current=null,V0.disconnect(),G0.disconnect(),A.removeEventListener("pointerdown",U0),A.removeEventListener("pointermove",L0),A.removeEventListener("pointerup",Kc),A.removeEventListener("pointercancel",N0),A.removeEventListener("lostpointercapture",Kc),A.removeEventListener("keydown",O0),A.removeEventListener("keyup",P0),A.removeEventListener("blur",I0),window.removeEventListener("blur",Er),document.removeEventListener("visibilitychange",B0),Jc.removeEventListener("change",z0),De.removeEventListener("webglcontextlost",F0),De.removeEventListener("webglcontextrestored",H0),ht.dispose(),ol.dispose(),Pt.dispose(),re.dispose(),Ln.dispose(),La.dispose(),Z.dispose(),E0.forEach(K=>K.dispose()),Ye.shadow.dispose(),jt.dispose()}},[e,n,i,s,r,d,f,p,S,m,u,g,y,v,w,b,D,B,Q]),(0,jn.useEffect)(()=>{Xt.current?.()},[k]),(0,jn.useEffect)(()=>{F&&Y.current?.()},[F]);let wt=v?`drop-shadow(0 6px 10px rgb(0 0 0 / ${Ve(Pe(w,.08),0,1)}))`:void 0;return(0,Ua.jsxs)("div",{ref:Ut,className:`paper-crumple ${$}`,style:{height:a,...ot},"data-status":j,children:[(0,Ua.jsx)("canvas",{ref:qt,className:"paper-crumple-canvas","aria-hidden":"true",style:{visibility:j==="ready"?"visible":"hidden",filter:wt}}),j!=="ready"&&(0,Ua.jsx)("img",{className:"paper-crumple-fallback",src:e||void 0,alt:t,draggable:!1,style:{objectFit:r,transform:`translate(-50%, -50%) rotate(${b}deg)`,filter:wt}}),(0,Ua.jsx)("button",{ref:Vt,type:"button",className:"paper-crumple-hit",disabled:F||j!=="ready","aria-label":`${t}. Hold to crumple and drag. Keyboard: hold Space or Enter, arrow keys to move, Escape to reset.`,"aria-pressed":"false",style:{visibility:j==="ready"?"visible":"hidden"}}),(0,Ua.jsx)("span",{className:"paper-crumple-focus","aria-hidden":"true"}),(0,Ua.jsx)("span",{className:"paper-crumple-sr",role:"status",children:j==="loading"?"Loading interactive paper.":j==="error"?"Interactive paper unavailable. Showing the original image.":""})]})},Cb=a3;var Mr=Pa(Yc(),1),Db=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,xr=[],Sr=null,S0=()=>{},r3=0;function o3(e){let t=document.createElement("canvas");t.width=560,t.height=560;let n=t.getContext("2d");n.fillStyle="#fafafa",n.fillRect(0,0,560,560),n.strokeStyle="#e5e5e5";for(let o=182;o<520;o+=42)n.beginPath(),n.moveTo(38,o),n.lineTo(522,o),n.stroke();n.fillStyle="#737373",n.font="500 17px sans-serif",n.fillText(e.subject.slice(0,40).toUpperCase(),38,70),n.fillStyle="#171717",n.font="600 30px sans-serif";let i=e.title.split(/\s+/),s="",a=146,r=0;for(let o of i)if(n.measureText(`${s} ${o}`).width>465&&s){if(n.fillText(s,38,a),a+=42,r++,s=o,r===4)break}else s+=(s?" ":"")+o;return n.fillText(s.slice(0,45),38,a),n.font="400 18px sans-serif",n.fillStyle="#737373",n.fillText(`DONE  /  ${e.deadline}`,38,515),t.toDataURL("image/png")}var M0=class extends Ci.Component{constructor(){super(...arguments);Z0(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?this.props.fallback:this.props.children}};function l3({src:e,done:t}){return(0,Ci.useEffect)(()=>{let n=setTimeout(t,650);return()=>clearTimeout(n)},[t]),(0,Mr.jsx)("img",{className:"crumple-fallback",src:e,alt:""})}function c3({job:e,done:t}){let n=(0,Ci.useRef)(null),[i,s]=(0,Ci.useState)(!1),[a,r]=(0,Ci.useState)(!1),o=(0,Ci.useRef)(!1),l=(0,Ci.useRef)([]);(0,Ci.useEffect)(()=>{let _=matchMedia("(prefers-reduced-motion: reduce)"),S=()=>{_.matches&&t()};return _.addEventListener("change",S),l.current.push(setTimeout(()=>s(!0),2200)),()=>{l.current.forEach(clearTimeout),_.removeEventListener("change",S)}},[t]);function c(){o.current||(o.current=!0,l.current.forEach(clearTimeout),l.current=[setTimeout(()=>r(!0),900),setTimeout(t,1200)])}let h=Math.min(360,innerWidth-20),d=Math.max(10,Math.min(innerWidth-h-10,e.rect.left+e.rect.width/2-h/2)),f=Math.max(10,Math.min(innerHeight-h-10,e.rect.top+e.rect.height/2-h/2)),p=(0,Mr.jsx)(l3,{src:e.src,done:t});return(0,Mr.jsx)("div",{ref:n,className:`completion-paper ${a?"leaving":""}`,style:{left:d,top:f,width:h,height:h},"aria-hidden":"true",children:(0,Mr.jsx)(M0,{fallback:p,children:i?p:(0,Mr.jsx)(Cb,{src:e.src,width:270,height:270,sceneHeight:h,autoCrumple:!0,onReady:c,onError:()=>s(!0),crumpleAmount:1,crumpleDuration:.5,releaseBehavior:"stay",draggable:!1,detail:32,foldCount:6,paperColor:"#fafafa",paperTexture:.06,shadow:!1,lightIntensity:1.6})})})}var Ub=document.getElementById("paper-effects-root");if(Ub){let n=function(){xr.length=0,Sr=null,S0()},e=(0,Lb.createRoot)(Ub),t=()=>{Db()&&(xr.length=0),Sr=xr.shift()||null,S0()};S0=()=>e.render(Sr?(0,Mr.jsx)(c3,{job:Sr,done:t},Sr.key):null),window.FocusFlowPaper={complete({task:i,rect:s}){if(!Db())try{let a={key:++r3,id:i.id,rect:s,src:o3(i)};xr.push(a),Sr||t()}catch{}},cancel(i){for(let s=xr.length-1;s>=0;s--)xr[s].id===i&&xr.splice(s,1);Sr?.id===i&&t()}},window.addEventListener("pagehide",n),document.addEventListener("visibilitychange",()=>{document.hidden&&n()})}})();
/*! For license information please see completion.js.LEGAL.txt */
