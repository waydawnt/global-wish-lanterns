(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Mh={exports:{}},Ho={};var c0;function AS(){if(c0)return Ho;c0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=n,Ho.jsxs=n,Ho}var u0;function RS(){return u0||(u0=1,Mh.exports=AS()),Mh.exports}var Di=RS(),Eh={exports:{}},se={};var f0;function CS(){if(f0)return se;f0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function y(O,Y,gt){this.props=O,this.context=Y,this.refs=S,this.updater=gt||b}y.prototype.isReactComponent={},y.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=y.prototype;function P(O,Y,gt){this.props=O,this.context=Y,this.refs=S,this.updater=gt||b}var U=P.prototype=new D;U.constructor=P,w(U,y.prototype),U.isPureReactComponent=!0;var z=Array.isArray;function F(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function C(O,Y,gt){var At=gt.ref;return{$$typeof:r,type:O,key:Y,ref:At!==void 0?At:null,props:gt}}function ct(O,Y){return C(O.type,Y,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function Z(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(gt){return Y[gt]})}var tt=/\/+/g;function st(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?Z(""+O.key):Y.toString(36)}function K(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function N(O,Y,gt,At,Bt){var it=typeof O;(it==="undefined"||it==="boolean")&&(O=null);var vt=!1;if(O===null)vt=!0;else switch(it){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(O.$$typeof){case r:case t:vt=!0;break;case v:return vt=O._init,N(vt(O._payload),Y,gt,At,Bt)}}if(vt)return Bt=Bt(O),vt=At===""?"."+st(O,0):At,z(Bt)?(gt="",vt!=null&&(gt=vt.replace(tt,"$&/")+"/"),N(Bt,Y,gt,"",function(Zt){return Zt})):Bt!=null&&(H(Bt)&&(Bt=ct(Bt,gt+(Bt.key==null||O&&O.key===Bt.key?"":(""+Bt.key).replace(tt,"$&/")+"/")+vt)),Y.push(Bt)),1;vt=0;var bt=At===""?".":At+":";if(z(O))for(var Vt=0;Vt<O.length;Vt++)At=O[Vt],it=bt+st(At,Vt),vt+=N(At,Y,gt,it,Bt);else if(Vt=E(O),typeof Vt=="function")for(O=Vt.call(O),Vt=0;!(At=O.next()).done;)At=At.value,it=bt+st(At,Vt++),vt+=N(At,Y,gt,it,Bt);else if(it==="object"){if(typeof O.then=="function")return N(K(O),Y,gt,At,Bt);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return vt}function I(O,Y,gt){if(O==null)return O;var At=[],Bt=0;return N(O,At,"","",function(it){return Y.call(gt,it,Bt++)}),At}function lt(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(gt){(O._status===0||O._status===-1)&&(O._status=1,O._result=gt)},function(gt){(O._status===0||O._status===-1)&&(O._status=2,O._result=gt)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var dt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:I,forEach:function(O,Y,gt){I(O,function(){Y.apply(this,arguments)},gt)},count:function(O){var Y=0;return I(O,function(){Y++}),Y},toArray:function(O){return I(O,function(Y){return Y})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return se.Activity=x,se.Children=Et,se.Component=y,se.Fragment=n,se.Profiler=l,se.PureComponent=P,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(O,Y,gt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=w({},O.props),Bt=O.key;if(Y!=null)for(it in Y.key!==void 0&&(Bt=""+Y.key),Y)!T.call(Y,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&Y.ref===void 0||(At[it]=Y[it]);var it=arguments.length-2;if(it===1)At.children=gt;else if(1<it){for(var vt=Array(it),bt=0;bt<it;bt++)vt[bt]=arguments[bt+2];At.children=vt}return C(O.type,Bt,At)},se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},se.createElement=function(O,Y,gt){var At,Bt={},it=null;if(Y!=null)for(At in Y.key!==void 0&&(it=""+Y.key),Y)T.call(Y,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Bt[At]=Y[At]);var vt=arguments.length-2;if(vt===1)Bt.children=gt;else if(1<vt){for(var bt=Array(vt),Vt=0;Vt<vt;Vt++)bt[Vt]=arguments[Vt+2];Bt.children=bt}if(O&&O.defaultProps)for(At in vt=O.defaultProps,vt)Bt[At]===void 0&&(Bt[At]=vt[At]);return C(O,it,Bt)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:p,render:O}},se.isValidElement=H,se.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:lt}},se.memo=function(O,Y){return{$$typeof:d,type:O,compare:Y===void 0?null:Y}},se.startTransition=function(O){var Y=B.T,gt={};B.T=gt;try{var At=O(),Bt=B.S;Bt!==null&&Bt(gt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(F,dt)}catch(it){dt(it)}finally{Y!==null&&gt.types!==null&&(Y.types=gt.types),B.T=Y}},se.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},se.use=function(O){return B.H.use(O)},se.useActionState=function(O,Y,gt){return B.H.useActionState(O,Y,gt)},se.useCallback=function(O,Y){return B.H.useCallback(O,Y)},se.useContext=function(O){return B.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,Y){return B.H.useDeferredValue(O,Y)},se.useEffect=function(O,Y){return B.H.useEffect(O,Y)},se.useEffectEvent=function(O){return B.H.useEffectEvent(O)},se.useId=function(){return B.H.useId()},se.useImperativeHandle=function(O,Y,gt){return B.H.useImperativeHandle(O,Y,gt)},se.useInsertionEffect=function(O,Y){return B.H.useInsertionEffect(O,Y)},se.useLayoutEffect=function(O,Y){return B.H.useLayoutEffect(O,Y)},se.useMemo=function(O,Y){return B.H.useMemo(O,Y)},se.useOptimistic=function(O,Y){return B.H.useOptimistic(O,Y)},se.useReducer=function(O,Y,gt){return B.H.useReducer(O,Y,gt)},se.useRef=function(O){return B.H.useRef(O)},se.useState=function(O){return B.H.useState(O)},se.useSyncExternalStore=function(O,Y,gt){return B.H.useSyncExternalStore(O,Y,gt)},se.useTransition=function(){return B.H.useTransition()},se.version="19.2.4",se}var h0;function fp(){return h0||(h0=1,Eh.exports=CS()),Eh.exports}var $o=fp(),bh={exports:{}},Go={},Th={exports:{}},Ah={};var d0;function wS(){return d0||(d0=1,(function(r){function t(N,I){var lt=N.length;N.push(I);t:for(;0<lt;){var dt=lt-1>>>1,Et=N[dt];if(0<l(Et,I))N[dt]=I,N[lt]=Et,lt=dt;else break t}}function n(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var I=N[0],lt=N.pop();if(lt!==I){N[0]=lt;t:for(var dt=0,Et=N.length,O=Et>>>1;dt<O;){var Y=2*(dt+1)-1,gt=N[Y],At=Y+1,Bt=N[At];if(0>l(gt,lt))At<Et&&0>l(Bt,gt)?(N[dt]=Bt,N[At]=lt,dt=At):(N[dt]=gt,N[Y]=lt,dt=Y);else if(At<Et&&0>l(Bt,lt))N[dt]=Bt,N[At]=lt,dt=At;else break t}}return I}function l(N,I){var lt=N.sortIndex-I.sortIndex;return lt!==0?lt:N.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,x=null,g=3,E=!1,b=!1,w=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(N){for(var I=n(d);I!==null;){if(I.callback===null)s(d);else if(I.startTime<=N)s(d),I.sortIndex=I.expirationTime,t(m,I);else break;I=n(d)}}function z(N){if(w=!1,U(N),!b)if(n(m)!==null)b=!0,F||(F=!0,Z());else{var I=n(d);I!==null&&K(z,I.startTime-N)}}var F=!1,B=-1,T=5,C=-1;function ct(){return S?!0:!(r.unstable_now()-C<T)}function H(){if(S=!1,F){var N=r.unstable_now();C=N;var I=!0;try{t:{b=!1,w&&(w=!1,D(B),B=-1),E=!0;var lt=g;try{e:{for(U(N),x=n(m);x!==null&&!(x.expirationTime>N&&ct());){var dt=x.callback;if(typeof dt=="function"){x.callback=null,g=x.priorityLevel;var Et=dt(x.expirationTime<=N);if(N=r.unstable_now(),typeof Et=="function"){x.callback=Et,U(N),I=!0;break e}x===n(m)&&s(m),U(N)}else s(m);x=n(m)}if(x!==null)I=!0;else{var O=n(d);O!==null&&K(z,O.startTime-N),I=!1}}break t}finally{x=null,g=lt,E=!1}I=void 0}}finally{I?Z():F=!1}}}var Z;if(typeof P=="function")Z=function(){P(H)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,st=tt.port2;tt.port1.onmessage=H,Z=function(){st.postMessage(null)}}else Z=function(){y(H,0)};function K(N,I){B=y(function(){N(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(N){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var lt=g;g=I;try{return N()}finally{g=lt}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var lt=g;g=N;try{return I()}finally{g=lt}},r.unstable_scheduleCallback=function(N,I,lt){var dt=r.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?dt+lt:dt):lt=dt,N){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=lt+Et,N={id:v++,callback:I,priorityLevel:N,startTime:lt,expirationTime:Et,sortIndex:-1},lt>dt?(N.sortIndex=lt,t(d,N),n(m)===null&&N===n(d)&&(w?(D(B),B=-1):w=!0,K(z,lt-dt))):(N.sortIndex=Et,t(m,N),b||E||(b=!0,F||(F=!0,Z()))),N},r.unstable_shouldYield=ct,r.unstable_wrapCallback=function(N){var I=g;return function(){var lt=g;g=I;try{return N.apply(this,arguments)}finally{g=lt}}}})(Ah)),Ah}var p0;function DS(){return p0||(p0=1,Th.exports=wS()),Th.exports}var Rh={exports:{}},Rn={};var m0;function US(){if(m0)return Rn;m0=1;var r=fp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,v)},Rn.flushSync=function(m){var d=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=v,s.d.f()}},Rn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Rn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Rn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Rn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,d){return m(d)},Rn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var _0;function LS(){if(_0)return Rh.exports;_0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Rh.exports=US(),Rh.exports}var g0;function NS(){if(g0)return Go;g0=1;var r=DS(),t=fp(),n=LS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function h(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),i;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,o=f;break}if(A===o){_=!0,o=u,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,o=u;break}if(A===o){_=!0,o=f,a=u;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function v(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=v(e),i!==null)return i;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case z:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case P:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return i=e.displayName||null,i!==null?i:st(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return st(e(i))}catch{}}return null}var K=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},dt=[],Et=-1;function O(e){return{current:e}}function Y(e){0>Et||(e.current=dt[Et],dt[Et]=null,Et--)}function gt(e,i){Et++,dt[Et]=e.current,e.current=i}var At=O(null),Bt=O(null),it=O(null),vt=O(null);function bt(e,i){switch(gt(it,i),gt(Bt,e),gt(At,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Lg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Lg(i),e=Ng(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(At),gt(At,e)}function Vt(){Y(At),Y(Bt),Y(it)}function Zt(e){e.memoizedState!==null&&gt(vt,e);var i=At.current,a=Ng(i,e.type);i!==a&&(gt(Bt,e),gt(At,a))}function Jt(e){Bt.current===e&&(Y(At),Y(Bt)),vt.current===e&&(Y(vt),Bo._currentValue=lt)}var Je,ve;function pe(e){if(Je===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Je=i&&i[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+e+ve}var De=!1;function re(e,i){if(!e||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var at=ot}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ot){at=ot}e.call(_t.prototype)}}else{try{throw Error()}catch(ot){at=ot}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&at&&typeof ot.stack=="string")return[ot.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var G=_.split(`
`),et=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===et.length)for(o=G.length-1,u=et.length-1;1<=o&&0<=u&&G[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==et[u]){var ht=`
`+G[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{De=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pe(a):""}function Qe(e,i){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==i&&i!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return pe("Activity");default:return""}}function V(e){try{var i="",a=null;do i+=Qe(e,a),a=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var We=Object.prototype.hasOwnProperty,Ee=r.unstable_scheduleCallback,Le=r.unstable_cancelCallback,qt=r.unstable_shouldYield,L=r.unstable_requestPaint,M=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,xt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,kt=r.unstable_LowPriority,Ct=r.unstable_IdlePriority,jt=r.log,$t=r.unstable_setDisableYieldValue,Mt=null,yt=null;function Nt(e){if(typeof jt=="function"&&$t(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Mt,e)}catch{}}var Lt=Math.clz32?Math.clz32:q,Ot=Math.log,ce=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Ot(e)/ce|0)|0}var Rt=256,Tt=262144,Pt=4194304;function St(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=St(o):(_&=A,_!==0?u=St(_):a||(a=A&~e,a!==0&&(u=St(a))))):(A=o&~f,A!==0?u=St(A):_!==0?u=St(_):a||(a=o&~e,a!==0&&(u=St(a)))),u===0?0:i!==0&&i!==u&&(i&f)===0&&(f=u&-u,a=i&-i,f>=a||f===32&&(a&4194048)!==0)?i:u}function It(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ee(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function be(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Un(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yi(e,i,a,o,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,et=e.hiddenUpdates;for(a=_&~a;0<a;){var ht=31-Lt(a),_t=1<<ht;A[ht]=0,G[ht]=-1;var at=et[ht];if(at!==null)for(et[ht]=null,ht=0;ht<at.length;ht++){var ot=at[ht];ot!==null&&(ot.lane&=-536870913)}a&=~_t}o!==0&&Kr(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~i))}function Kr(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Lt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ks(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Lt(a),u=1<<o;u&i|e[o]&i&&(e[o]|=i),a&=~u}}function cl(e,i){var a=i&-i;return a=(a&42)!==0?1:Xs(a),(a&(e.suspendedLanes|i))!==0?0:a}function Xs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pi(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:n0(e.type))}function Ws(e,i){var a=I.p;try{return I.p=e,i()}finally{I.p=a}}var Si=Math.random().toString(36).slice(2),sn="__reactFiber$"+Si,pn="__reactProps$"+Si,Ji="__reactContainer$"+Si,wa="__reactEvents$"+Si,ul="__reactListeners$"+Si,fl="__reactHandles$"+Si,hl="__reactResources$"+Si,ds="__reactMarker$"+Si;function Qr(e){delete e[sn],delete e[pn],delete e[wa],delete e[ul],delete e[fl]}function Da(e){var i=e[sn];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Ji]||a[sn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=Hg(e);e!==null;){if(a=e[sn])return a;e=Hg(e)}return i}e=a,a=e.parentNode}return null}function Ua(e){if(e=e[sn]||e[Ji]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ps(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function R(e){var i=e[hl];return i||(i=e[hl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function X(e){e[ds]=!0}var rt=new Set,nt={};function Q(e,i){wt(e,i),wt(e+"Capture",i)}function wt(e,i){for(nt[e]=i,e=0;e<i.length;e++)rt.add(i[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dt={},Xt={};function Yt(e){return We.call(Xt,e)?!0:We.call(Dt,e)?!1:Ft.test(e)?Xt[e]=!0:(Dt[e]=!0,!1)}function te(e,i,a){if(Yt(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function ae(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function zt(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function ue(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(e,i,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Re(e){if(!e._valueTracker){var i=Ye(e)?"checked":"value";e._valueTracker=je(e,i,""+e[i])}}function mn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=Ye(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function Gt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function ne(e){return e.replace(Ln,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Nn(e,i,a,o,u,f,_,A){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),i!=null?_==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ue(i)):e.value!==""+ue(i)&&(e.value=""+ue(i)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),i!=null?Mi(e,_,ue(i)):a!=null?Mi(e,_,ue(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ue(A):e.removeAttribute("name")}function jn(e,i,a,o,u,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),i!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||i!=null)){Re(e);return}a=a!=null?""+ue(a):"",i=i!=null?""+ue(i):a,A||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Re(e)}function Mi(e,i,a){i==="number"&&Gt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Zn(e,i,a,o){if(e=e.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=i.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ue(a),i=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Ne(e,i,a){if(i!=null&&(i=""+ue(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+ue(a):""}function rn(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(K(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=ue(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Re(e)}function On(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var on=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ei(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||on.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function $i(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&Ei(e,u,o)}else for(var f in i)i.hasOwnProperty(f)&&Ei(e,f,i[f])}function Ys(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ex=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return Ex.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var vu=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,Zs=null;function Up(e){var i=Ua(e);if(i&&(e=i.stateNode)){var a=e[pn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Nn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ne(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var u=o[pn]||null;if(!u)throw Error(s(90));Nn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&mn(o)}break t;case"textarea":Ne(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Zn(e,!!a.multiple,i,!1)}}}var yu=!1;function Lp(e,i,a){if(yu)return e(i,a);yu=!0;try{var o=e(i);return o}finally{if(yu=!1,(js!==null||Zs!==null)&&(tc(),js&&(i=js,e=Zs,Zs=js=null,Up(i),e)))for(i=0;i<e.length;i++)Up(e[i])}}function Jr(e,i){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(ea)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Su=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Su=!1}var La=null,Mu=null,pl=null;function Np(){if(pl)return pl;var e,i=Mu,a=i.length,o,u="value"in La?La.value:La.textContent,f=u.length;for(e=0;e<a&&i[e]===u[e];e++);var _=a-e;for(o=1;o<=_&&i[a-o]===u[f-o];o++);return pl=u.slice(e,1<o?1-o:void 0)}function ml(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function Op(){return!1}function zn(e){function i(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?_l:Op,this.isPropagationStopped=Op,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=zn(ms),to=x({},ms,{view:0,detail:0}),bx=zn(to),Eu,bu,eo,vl=x({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(Eu=e.screenX-eo.screenX,bu=e.screenY-eo.screenY):bu=Eu=0,eo=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),Pp=zn(vl),Tx=x({},vl,{dataTransfer:0}),Ax=zn(Tx),Rx=x({},to,{relatedTarget:0}),Tu=zn(Rx),Cx=x({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),wx=zn(Cx),Dx=x({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ux=zn(Dx),Lx=x({},ms,{data:0}),Bp=zn(Lx),Nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Px[e])?!!i[e]:!1}function Au(){return Bx}var Fx=x({},to,{key:function(e){if(e.key){var i=Nx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ox[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ix=zn(Fx),zx=x({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=zn(zx),Hx=x({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Gx=zn(Hx),Vx=x({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=zn(Vx),Xx=x({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qx=zn(Xx),Wx=x({},ms,{newState:0,oldState:0}),Yx=zn(Wx),jx=[9,13,27,32],Ru=ea&&"CompositionEvent"in window,no=null;ea&&"documentMode"in document&&(no=document.documentMode);var Zx=ea&&"TextEvent"in window&&!no,Ip=ea&&(!Ru||no&&8<no&&11>=no),zp=" ",Hp=!1;function Gp(e,i){switch(e){case"keyup":return jx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function Kx(e,i){switch(e){case"compositionend":return Vp(i);case"keypress":return i.which!==32?null:(Hp=!0,zp);case"textInput":return e=i.data,e===zp&&Hp?null:e;default:return null}}function Qx(e,i){if(Ks)return e==="compositionend"||!Ru&&Gp(e,i)?(e=Np(),pl=Mu=La=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ip&&i.locale!=="ko"?null:i.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Jx[e.type]:i==="textarea"}function Xp(e,i,a,o){js?Zs?Zs.push(o):Zs=[o]:js=o,i=oc(i,"onChange"),0<i.length&&(a=new gl("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var io=null,ao=null;function $x(e){Ag(e,0)}function xl(e){var i=ps(e);if(mn(i))return e}function qp(e,i){if(e==="change")return i}var Wp=!1;if(ea){var Cu;if(ea){var wu="oninput"in document;if(!wu){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),wu=typeof Yp.oninput=="function"}Cu=wu}else Cu=!1;Wp=Cu&&(!document.documentMode||9<document.documentMode)}function jp(){io&&(io.detachEvent("onpropertychange",Zp),ao=io=null)}function Zp(e){if(e.propertyName==="value"&&xl(ao)){var i=[];Xp(i,ao,e,xu(e)),Lp($x,i)}}function ty(e,i,a){e==="focusin"?(jp(),io=i,ao=a,io.attachEvent("onpropertychange",Zp)):e==="focusout"&&jp()}function ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(ao)}function ny(e,i){if(e==="click")return xl(i)}function iy(e,i){if(e==="input"||e==="change")return xl(i)}function ay(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Kn=typeof Object.is=="function"?Object.is:ay;function so(e,i){if(Kn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!We.call(i,u)||!Kn(e[u],i[u]))return!1}return!0}function Kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qp(e,i){var a=Kp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Kp(a)}}function Jp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Jp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function $p(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Gt(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=Gt(e.document)}return i}function Du(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var sy=ea&&"documentMode"in document&&11>=document.documentMode,Qs=null,Uu=null,ro=null,Lu=!1;function tm(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||Qs==null||Qs!==Gt(o)||(o=Qs,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&so(ro,o)||(ro=o,o=oc(Uu,"onSelect"),0<o.length&&(i=new gl("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=Qs)))}function _s(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Js={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},Nu={},em={};ea&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function gs(e){if(Nu[e])return Nu[e];if(!Js[e])return e;var i=Js[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in em)return Nu[e]=i[a];return e}var nm=gs("animationend"),im=gs("animationiteration"),am=gs("animationstart"),ry=gs("transitionrun"),oy=gs("transitionstart"),ly=gs("transitioncancel"),sm=gs("transitionend"),rm=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function bi(e,i){rm.set(e,i),Q(i,[e])}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],$s=0,Pu=0;function Sl(){for(var e=$s,i=Pu=$s=0;i<e;){var a=li[i];li[i++]=null;var o=li[i];li[i++]=null;var u=li[i];li[i++]=null;var f=li[i];if(li[i++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&om(a,u,f)}}function Ml(e,i,a,o){li[$s++]=e,li[$s++]=i,li[$s++]=a,li[$s++]=o,Pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Bu(e,i,a,o){return Ml(e,i,a,o),El(e)}function vs(e,i){return Ml(e,null,null,i),El(e)}function om(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&i!==null&&(u=31-Lt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=a|536870912),f):null}function El(e){if(50<wo)throw wo=0,Wf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var tr={};function cy(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,i,a,o){return new cy(e,i,a,o)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,i){var a=e.alternate;return a===null?(a=Qn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lm(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function bl(e,i,a,o,u,f){var _=0;if(o=e,typeof e=="function")Fu(e)&&(_=1);else if(typeof e=="string")_=pS(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Qn(31,a,i,u),e.elementType=C,e.lanes=f,e;case w:return xs(a.children,u,f,i);case S:_=8,u|=24;break;case y:return e=Qn(12,a,i,u|2),e.elementType=y,e.lanes=f,e;case z:return e=Qn(13,a,i,u),e.elementType=z,e.lanes=f,e;case F:return e=Qn(19,a,i,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:_=10;break t;case D:_=9;break t;case U:_=11;break t;case B:_=14;break t;case T:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=Qn(_,a,i,u),i.elementType=e,i.type=o,i.lanes=f,i}function xs(e,i,a,o){return e=Qn(7,e,o,i),e.lanes=a,e}function Iu(e,i,a){return e=Qn(6,e,null,i),e.lanes=a,e}function cm(e){var i=Qn(18,null,null,0);return i.stateNode=e,i}function zu(e,i,a){return i=Qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var um=new WeakMap;function ci(e,i){if(typeof e=="object"&&e!==null){var a=um.get(e);return a!==void 0?a:(i={value:e,source:i,stack:V(i)},um.set(e,i),i)}return{value:e,source:i,stack:V(i)}}var er=[],nr=0,Tl=null,oo=0,ui=[],fi=0,Na=null,Bi=1,Fi="";function ia(e,i){er[nr++]=oo,er[nr++]=Tl,Tl=e,oo=i}function fm(e,i,a){ui[fi++]=Bi,ui[fi++]=Fi,ui[fi++]=Na,Na=e;var o=Bi;e=Fi;var u=32-Lt(o)-1;o&=~(1<<u),a+=1;var f=32-Lt(i)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Bi=1<<32-Lt(i)+u|a<<u|o,Fi=f+e}else Bi=1<<f|a<<u|o,Fi=e}function Hu(e){e.return!==null&&(ia(e,1),fm(e,1,0))}function Gu(e){for(;e===Tl;)Tl=er[--nr],er[nr]=null,oo=er[--nr],er[nr]=null;for(;e===Na;)Na=ui[--fi],ui[fi]=null,Fi=ui[--fi],ui[fi]=null,Bi=ui[--fi],ui[fi]=null}function hm(e,i){ui[fi++]=Bi,ui[fi++]=Fi,ui[fi++]=Na,Bi=i.id,Fi=i.overflow,Na=e}var Mn=null,Xe=null,Se=!1,Oa=null,hi=!1,Vu=Error(s(519));function Pa(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(ci(i,e)),Vu}function dm(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[sn]=e,i[pn]=o,a){case"dialog":_e("cancel",i),_e("close",i);break;case"iframe":case"object":case"embed":_e("load",i);break;case"video":case"audio":for(a=0;a<Uo.length;a++)_e(Uo[a],i);break;case"source":_e("error",i);break;case"img":case"image":case"link":_e("error",i),_e("load",i);break;case"details":_e("toggle",i);break;case"input":_e("invalid",i),jn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_e("invalid",i);break;case"textarea":_e("invalid",i),rn(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||Dg(i.textContent,a)?(o.popover!=null&&(_e("beforetoggle",i),_e("toggle",i)),o.onScroll!=null&&_e("scroll",i),o.onScrollEnd!=null&&_e("scrollend",i),o.onClick!=null&&(i.onclick=ta),i=!0):i=!1,i||Pa(e,!0)}function pm(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Mn=Mn.return}}function ir(e){if(e!==Mn)return!1;if(!Se)return pm(e),Se=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||oh(e.type,e.memoizedProps)),a=!a),a&&Xe&&Pa(e),pm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xe=zg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xe=zg(e)}else i===27?(i=Xe,Za(e.type)?(e=hh,hh=null,Xe=e):Xe=i):Xe=Mn?pi(e.stateNode.nextSibling):null;return!0}function ys(){Xe=Mn=null,Se=!1}function ku(){var e=Oa;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),Oa=null),e}function lo(e){Oa===null?Oa=[e]:Oa.push(e)}var Xu=O(null),Ss=null,aa=null;function Ba(e,i,a){gt(Xu,i._currentValue),i._currentValue=a}function sa(e){e._currentValue=Xu.current,Y(Xu)}function qu(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function Wu(e,i,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<i.length;G++)if(A.context===i[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),qu(f.return,a,e),o||(_=null);break t}f=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),qu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function ar(e,i,a,o){e=null;for(var u=i,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=u.type;Kn(u.pendingProps.value,_.value)||(e!==null?e.push(A):e=[A])}}else if(u===vt.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Wu(i,e,a,o),i.flags|=262144}function Al(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ms(e){Ss=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return mm(Ss,e)}function Rl(e,i){return Ss===null&&Ms(e),mm(e,i)}function mm(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(s(308));aa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else aa=aa.next=i;return a}var uy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},fy=r.unstable_scheduleCallback,hy=r.unstable_NormalPriority,ln={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new uy,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&fy(hy,function(){e.controller.abort()})}var uo=null,ju=0,sr=0,rr=null;function dy(e,i){if(uo===null){var a=uo=[];ju=0,sr=Jf(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ju++,i.then(_m,_m),i}function _m(){if(--ju===0&&uo!==null){rr!==null&&(rr.status="fulfilled");var e=uo;uo=null,sr=0,rr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function py(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var gm=N.S;N.S=function(e,i){tg=M(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&dy(e,i),gm!==null&&gm(e,i)};var Es=O(null);function Zu(){var e=Es.current;return e!==null?e:ke.pooledCache}function Cl(e,i){i===null?gt(Es,Es.current):gt(Es,i.pool)}function vm(){var e=Zu();return e===null?null:{parent:ln._currentValue,pool:e}}var or=Error(s(460)),Ku=Error(s(474)),wl=Error(s(542)),Dl={then:function(){}};function xm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ym(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(ta,ta),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Mm(e),e;default:if(typeof i.status=="string")i.then(ta,ta);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Mm(e),e}throw Ts=i,or}}function bs(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ts=a,or):a}}var Ts=null;function Sm(){if(Ts===null)throw Error(s(459));var e=Ts;return Ts=null,e}function Mm(e){if(e===or||e===wl)throw Error(s(483))}var lr=null,fo=0;function Ul(e){var i=fo;return fo+=1,lr===null&&(lr=[]),ym(lr,e,i)}function ho(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ll(e,i){throw i.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Em(e){function i(j,k){if(e){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)i(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=na(j,k),j.index=0,j.sibling=null,j}function f(j,k,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function _(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,$,mt){return k===null||k.tag!==6?(k=Iu($,j.mode,mt),k.return=j,k):(k=u(k,$),k.return=j,k)}function G(j,k,$,mt){var Kt=$.type;return Kt===w?ht(j,k,$.props.children,mt,$.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&bs(Kt)===k.type)?(k=u(k,$.props),ho(k,$),k.return=j,k):(k=bl($.type,$.key,$.props,null,j.mode,mt),ho(k,$),k.return=j,k)}function et(j,k,$,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=zu($,j.mode,mt),k.return=j,k):(k=u(k,$.children||[]),k.return=j,k)}function ht(j,k,$,mt,Kt){return k===null||k.tag!==7?(k=xs($,j.mode,mt,Kt),k.return=j,k):(k=u(k,$),k.return=j,k)}function _t(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Iu(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return $=bl(k.type,k.key,k.props,null,j.mode,$),ho($,k),$.return=j,$;case b:return k=zu(k,j.mode,$),k.return=j,k;case T:return k=bs(k),_t(j,k,$)}if(K(k)||Z(k))return k=xs(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return _t(j,Ul(k),$);if(k.$$typeof===P)return _t(j,Rl(j,k),$);Ll(j,k)}return null}function at(j,k,$,mt){var Kt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Kt!==null?null:A(j,k,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===Kt?G(j,k,$,mt):null;case b:return $.key===Kt?et(j,k,$,mt):null;case T:return $=bs($),at(j,k,$,mt)}if(K($)||Z($))return Kt!==null?null:ht(j,k,$,mt,null);if(typeof $.then=="function")return at(j,k,Ul($),mt);if($.$$typeof===P)return at(j,k,Rl(j,$),mt);Ll(j,$)}return null}function ot(j,k,$,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get($)||null,A(k,j,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case E:return j=j.get(mt.key===null?$:mt.key)||null,G(k,j,mt,Kt);case b:return j=j.get(mt.key===null?$:mt.key)||null,et(k,j,mt,Kt);case T:return mt=bs(mt),ot(j,k,$,mt,Kt)}if(K(mt)||Z(mt))return j=j.get($)||null,ht(k,j,mt,Kt,null);if(typeof mt.then=="function")return ot(j,k,$,Ul(mt),Kt);if(mt.$$typeof===P)return ot(j,k,$,Rl(k,mt),Kt);Ll(k,mt)}return null}function Ht(j,k,$,mt){for(var Kt=null,Ce=null,Wt=k,fe=k=0,ye=null;Wt!==null&&fe<$.length;fe++){Wt.index>fe?(ye=Wt,Wt=null):ye=Wt.sibling;var we=at(j,Wt,$[fe],mt);if(we===null){Wt===null&&(Wt=ye);break}e&&Wt&&we.alternate===null&&i(j,Wt),k=f(we,k,fe),Ce===null?Kt=we:Ce.sibling=we,Ce=we,Wt=ye}if(fe===$.length)return a(j,Wt),Se&&ia(j,fe),Kt;if(Wt===null){for(;fe<$.length;fe++)Wt=_t(j,$[fe],mt),Wt!==null&&(k=f(Wt,k,fe),Ce===null?Kt=Wt:Ce.sibling=Wt,Ce=Wt);return Se&&ia(j,fe),Kt}for(Wt=o(Wt);fe<$.length;fe++)ye=ot(Wt,j,fe,$[fe],mt),ye!==null&&(e&&ye.alternate!==null&&Wt.delete(ye.key===null?fe:ye.key),k=f(ye,k,fe),Ce===null?Kt=ye:Ce.sibling=ye,Ce=ye);return e&&Wt.forEach(function(ts){return i(j,ts)}),Se&&ia(j,fe),Kt}function Qt(j,k,$,mt){if($==null)throw Error(s(151));for(var Kt=null,Ce=null,Wt=k,fe=k=0,ye=null,we=$.next();Wt!==null&&!we.done;fe++,we=$.next()){Wt.index>fe?(ye=Wt,Wt=null):ye=Wt.sibling;var ts=at(j,Wt,we.value,mt);if(ts===null){Wt===null&&(Wt=ye);break}e&&Wt&&ts.alternate===null&&i(j,Wt),k=f(ts,k,fe),Ce===null?Kt=ts:Ce.sibling=ts,Ce=ts,Wt=ye}if(we.done)return a(j,Wt),Se&&ia(j,fe),Kt;if(Wt===null){for(;!we.done;fe++,we=$.next())we=_t(j,we.value,mt),we!==null&&(k=f(we,k,fe),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return Se&&ia(j,fe),Kt}for(Wt=o(Wt);!we.done;fe++,we=$.next())we=ot(Wt,j,fe,we.value,mt),we!==null&&(e&&we.alternate!==null&&Wt.delete(we.key===null?fe:we.key),k=f(we,k,fe),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return e&&Wt.forEach(function(TS){return i(j,TS)}),Se&&ia(j,fe),Kt}function Ge(j,k,$,mt){if(typeof $=="object"&&$!==null&&$.type===w&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:t:{for(var Kt=$.key;k!==null;){if(k.key===Kt){if(Kt=$.type,Kt===w){if(k.tag===7){a(j,k.sibling),mt=u(k,$.props.children),mt.return=j,j=mt;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&bs(Kt)===k.type){a(j,k.sibling),mt=u(k,$.props),ho(mt,$),mt.return=j,j=mt;break t}a(j,k);break}else i(j,k);k=k.sibling}$.type===w?(mt=xs($.props.children,j.mode,mt,$.key),mt.return=j,j=mt):(mt=bl($.type,$.key,$.props,null,j.mode,mt),ho(mt,$),mt.return=j,j=mt)}return _(j);case b:t:{for(Kt=$.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(j,k.sibling),mt=u(k,$.children||[]),mt.return=j,j=mt;break t}else{a(j,k);break}else i(j,k);k=k.sibling}mt=zu($,j.mode,mt),mt.return=j,j=mt}return _(j);case T:return $=bs($),Ge(j,k,$,mt)}if(K($))return Ht(j,k,$,mt);if(Z($)){if(Kt=Z($),typeof Kt!="function")throw Error(s(150));return $=Kt.call($),Qt(j,k,$,mt)}if(typeof $.then=="function")return Ge(j,k,Ul($),mt);if($.$$typeof===P)return Ge(j,k,Rl(j,$),mt);Ll(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(j,k.sibling),mt=u(k,$),mt.return=j,j=mt):(a(j,k),mt=Iu($,j.mode,mt),mt.return=j,j=mt),_(j)):a(j,k)}return function(j,k,$,mt){try{fo=0;var Kt=Ge(j,k,$,mt);return lr=null,Kt}catch(Wt){if(Wt===or||Wt===wl)throw Wt;var Ce=Qn(29,Wt,null,j.mode);return Ce.lanes=mt,Ce.return=j,Ce}}}var As=Em(!0),bm=Em(!1),Fa=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=El(e),om(e,null,a),i}return Ml(e,o,i,a),El(e)}function po(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,ks(e,a)}}function $u(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=i:f=f.next=i}else u=f=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var tf=!1;function mo(){if(tf){var e=rr;if(e!==null)throw e}}function _o(e,i,a,o){tf=!1;var u=e.updateQueue;Fa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,et=G.next;G.next=null,_===null?f=et:_.next=et,_=G;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==_&&(A===null?ht.firstBaseUpdate=et:A.next=et,ht.lastBaseUpdate=G))}if(f!==null){var _t=u.baseState;_=0,ht=et=G=null,A=f;do{var at=A.lane&-536870913,ot=at!==A.lane;if(ot?(xe&at)===at:(o&at)===at){at!==0&&at===sr&&(tf=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ht=e,Qt=A;at=i;var Ge=a;switch(Qt.tag){case 1:if(Ht=Qt.payload,typeof Ht=="function"){_t=Ht.call(Ge,_t,at);break t}_t=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Qt.payload,at=typeof Ht=="function"?Ht.call(Ge,_t,at):Ht,at==null)break t;_t=x({},_t,at);break t;case 2:Fa=!0}}at=A.callback,at!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[at]:ot.push(at))}else ot={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(et=ht=ot,G=_t):ht=ht.next=ot,_|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ht===null&&(G=_t),u.baseState=G,u.firstBaseUpdate=et,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Xa|=_,e.lanes=_,e.memoizedState=_t}}function Tm(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Am(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Tm(a[e],i)}var cr=O(null),Nl=O(0);function Rm(e,i){e=pa,gt(Nl,e),gt(cr,i),pa=e|i.baseLanes}function ef(){gt(Nl,pa),gt(cr,cr.current)}function nf(){pa=Nl.current,Y(cr),Y(Nl)}var Jn=O(null),di=null;function Ha(e){var i=e.alternate;gt(nn,nn.current&1),gt(Jn,e),di===null&&(i===null||cr.current!==null||i.memoizedState!==null)&&(di=e)}function af(e){gt(nn,nn.current),gt(Jn,e),di===null&&(di=e)}function Cm(e){e.tag===22?(gt(nn,nn.current),gt(Jn,e),di===null&&(di=e)):Ga()}function Ga(){gt(nn,nn.current),gt(Jn,Jn.current)}function $n(e){Y(Jn),di===e&&(di=null),Y(nn)}var nn=O(0);function Ol(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||uh(a)||fh(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ra=0,le=null,ze=null,cn=null,Pl=!1,ur=!1,Rs=!1,Bl=0,go=0,fr=null,my=0;function $e(){throw Error(s(321))}function sf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!Kn(e[a],i[a]))return!1;return!0}function rf(e,i,a,o,u,f){return ra=f,le=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,N.H=e===null||e.memoizedState===null?f_:Sf,Rs=!1,f=a(o,u),Rs=!1,ur&&(f=Dm(i,a,o,u)),wm(e),f}function wm(e){N.H=yo;var i=ze!==null&&ze.next!==null;if(ra=0,cn=ze=le=null,Pl=!1,go=0,fr=null,i)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&Al(e)&&(un=!0))}function Dm(e,i,a,o){le=e;var u=0;do{if(ur&&(fr=null),go=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,cn=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=h_,f=i(a,o)}while(ur);return f}function _y(){var e=N.H,i=e.useState()[0];return i=typeof i.then=="function"?vo(i):i,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(le.flags|=1024),i}function of(){var e=Bl!==0;return Bl=0,e}function lf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function cf(e){if(Pl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Pl=!1}ra=0,cn=ze=le=null,ur=!1,go=Bl=0,fr=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?le.memoizedState=cn=e:cn=cn.next=e,cn}function an(){if(ze===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var i=cn===null?le.memoizedState:cn.next;if(i!==null)cn=i,ze=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},cn===null?le.memoizedState=cn=e:cn=cn.next=e}return cn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var i=go;return go+=1,fr===null&&(fr=[]),e=ym(fr,e,i),i=le,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,N.H=i===null||i.memoizedState===null?f_:Sf),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===P)return En(e)}throw Error(s(438,String(e)))}function uf(e){var i=null,a=le.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Fl(),le.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=ct;return i.index++,a}function oa(e,i){return typeof i=="function"?i(e):i}function zl(e){var i=an();return ff(i,ze,e)}function ff(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}i.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{i=u.next;var A=_=null,G=null,et=i,ht=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(xe&_t)===_t:(ra&_t)===_t){var at=et.revertLane;if(at===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===sr&&(ht=!0);else if((ra&at)===at){et=et.next,at===sr&&(ht=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(A=G=_t,_=f):G=G.next=_t,le.lanes|=at,Xa|=at;_t=et.action,Rs&&a(f,_t),f=et.hasEagerState?et.eagerState:a(f,_t)}else at={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(A=G=at,_=f):G=G.next=at,le.lanes|=_t,Xa|=_t;et=et.next}while(et!==null&&et!==i);if(G===null?_=f:G.next=A,!Kn(f,e.memoizedState)&&(un=!0,ht&&(a=rr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function hf(e){var i=an(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=i.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);Kn(f,i.memoizedState)||(un=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,o]}function Um(e,i,a){var o=le,u=an(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!Kn((ze||u).memoizedState,a);if(_&&(u.memoizedState=a,un=!0),u=u.queue,mf(Om.bind(null,o,u,e),[e]),u.getSnapshot!==i||_||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Nm.bind(null,o,u,a,i),null),ke===null)throw Error(s(349));f||(ra&127)!==0||Lm(o,i,a)}return a}function Lm(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=le.updateQueue,i===null?(i=Fl(),le.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Nm(e,i,a,o){i.value=a,i.getSnapshot=o,Pm(i)&&Bm(e)}function Om(e,i,a){return a(function(){Pm(i)&&Bm(e)})}function Pm(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!Kn(e,a)}catch{return!0}}function Bm(e){var i=vs(e,2);i!==null&&Xn(i,e,2)}function df(e){var i=Pn();if(typeof e=="function"){var a=e;if(e=a(),Rs){Nt(!0);try{a()}finally{Nt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},i}function Fm(e,i,a,o){return e.baseState=a,ff(e,ze,typeof o=="function"?o:oa)}function gy(e,i,a,o,u){if(Vl(e))throw Error(s(485));if(e=i.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=i.pending,a===null?(f.next=i.pending=f,Im(i,f)):(f.next=a.next,i.pending=a.next=f)}}function Im(e,i){var a=i.action,o=i.payload,u=e.state;if(i.isTransition){var f=N.T,_={};N.T=_;try{var A=a(u,o),G=N.S;G!==null&&G(_,A),zm(e,i,A)}catch(et){pf(e,i,et)}finally{f!==null&&_.types!==null&&(f.types=_.types),N.T=f}}else try{f=a(u,o),zm(e,i,f)}catch(et){pf(e,i,et)}}function zm(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Hm(e,i,o)},function(o){return pf(e,i,o)}):Hm(e,i,a)}function Hm(e,i,a){i.status="fulfilled",i.value=a,Gm(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Im(e,a)))}function pf(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Gm(i),i=i.next;while(i!==o)}e.action=null}function Gm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Vm(e,i){return i}function km(e,i){if(Se){var a=ke.formState;if(a!==null){t:{var o=le;if(Se){if(Xe){e:{for(var u=Xe,f=hi;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Xe=pi(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(i=a[0])}}return a=Pn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vm,lastRenderedState:i},a.queue=o,a=l_.bind(null,le,o),o.dispatch=a,o=df(!1),f=yf.bind(null,le,!1,o.queue),o=Pn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,a=gy.bind(null,le,u,f,a),u.dispatch=a,o.memoizedState=e,[i,a,!1]}function Xm(e){var i=an();return qm(i,ze,e)}function qm(e,i,a){if(i=ff(e,i,Vm)[0],e=zl(oa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=vo(i)}catch(_){throw _===or?wl:_}else o=i;i=an();var u=i.queue,f=u.dispatch;return a!==i.memoizedState&&(le.flags|=2048,hr(9,{destroy:void 0},vy.bind(null,u,a),null)),[o,f,e]}function vy(e,i){e.action=i}function Wm(e){var i=an(),a=ze;if(a!==null)return qm(i,a,e);an(),i=i.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function hr(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=le.updateQueue,i===null&&(i=Fl(),le.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Ym(){return an().memoizedState}function Hl(e,i,a,o){var u=Pn();le.flags|=e,u.memoizedState=hr(1|i,{destroy:void 0},a,o===void 0?null:o)}function Gl(e,i,a,o){var u=an();o=o===void 0?null:o;var f=u.memoizedState.inst;ze!==null&&o!==null&&sf(o,ze.memoizedState.deps)?u.memoizedState=hr(i,f,a,o):(le.flags|=e,u.memoizedState=hr(1|i,f,a,o))}function jm(e,i){Hl(8390656,8,e,i)}function mf(e,i){Gl(2048,8,e,i)}function xy(e){le.flags|=4;var i=le.updateQueue;if(i===null)i=Fl(),le.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function Zm(e){var i=an().memoizedState;return xy({ref:i,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function Km(e,i){return Gl(4,2,e,i)}function Qm(e,i){return Gl(4,4,e,i)}function Jm(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function $m(e,i,a){a=a!=null?a.concat([e]):null,Gl(4,4,Jm.bind(null,i,e),a)}function _f(){}function t_(e,i){var a=an();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&sf(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function e_(e,i){var a=an();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&sf(i,o[1]))return o[0];if(o=e(),Rs){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[o,i],o}function gf(e,i,a){return a===void 0||(ra&1073741824)!==0&&(xe&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=ng(),le.lanes|=e,Xa|=e,a)}function n_(e,i,a,o){return Kn(a,i)?a:cr.current!==null?(e=gf(e,a,o),Kn(e,i)||(un=!0),e):(ra&42)===0||(ra&1073741824)!==0&&(xe&261930)===0?(un=!0,e.memoizedState=a):(e=ng(),le.lanes|=e,Xa|=e,i)}function i_(e,i,a,o,u){var f=I.p;I.p=f!==0&&8>f?f:8;var _=N.T,A={};N.T=A,yf(e,!1,i,a);try{var G=u(),et=N.S;if(et!==null&&et(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ht=py(G,o);xo(e,i,ht,ni(e))}else xo(e,i,o,ni(e))}catch(_t){xo(e,i,{then:function(){},status:"rejected",reason:_t},ni())}finally{I.p=f,_!==null&&A.types!==null&&(_.types=A.types),N.T=_}}function yy(){}function vf(e,i,a,o){if(e.tag!==5)throw Error(s(476));var u=a_(e).queue;i_(e,u,i,lt,a===null?yy:function(){return s_(e),a(o)})}function a_(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:lt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function s_(e){var i=a_(e);i.next===null&&(i=e.alternate.memoizedState),xo(e,i.next.queue,{},ni())}function xf(){return En(Bo)}function r_(){return an().memoizedState}function o_(){return an().memoizedState}function Sy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=ni();e=Ia(a);var o=za(i,e,a);o!==null&&(Xn(o,i,a),po(o,i,a)),i={cache:Yu()},e.payload=i;return}i=i.return}}function My(e,i,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(e)?c_(i,a):(a=Bu(e,i,a,o),a!==null&&(Xn(a,e,o),u_(a,i,o)))}function l_(e,i,a){var o=ni();xo(e,i,a,o)}function xo(e,i,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(e))c_(i,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var _=i.lastRenderedState,A=f(_,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,_))return Ml(e,i,u,0),ke===null&&Sl(),!1}catch{}if(a=Bu(e,i,u,o),a!==null)return Xn(a,e,o),u_(a,i,o),!0}return!1}function yf(e,i,a,o){if(o={lane:2,revertLane:Jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(e)){if(i)throw Error(s(479))}else i=Bu(e,a,o,2),i!==null&&Xn(i,e,2)}function Vl(e){var i=e.alternate;return e===le||i!==null&&i===le}function c_(e,i){ur=Pl=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function u_(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,ks(e,a)}}var yo={readContext:En,use:Il,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};yo.useEffectEvent=$e;var f_={readContext:En,use:Il,useCallback:function(e,i){return Pn().memoizedState=[e,i===void 0?null:i],e},useContext:En,useEffect:jm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Hl(4194308,4,Jm.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Hl(4194308,4,e,i)},useInsertionEffect:function(e,i){Hl(4,2,e,i)},useMemo:function(e,i){var a=Pn();i=i===void 0?null:i;var o=e();if(Rs){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=Pn();if(a!==void 0){var u=a(i);if(Rs){Nt(!0);try{a(i)}finally{Nt(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=My.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var i=Pn();return e={current:e},i.memoizedState=e},useState:function(e){e=df(e);var i=e.queue,a=l_.bind(null,le,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:_f,useDeferredValue:function(e,i){var a=Pn();return gf(a,e,i)},useTransition:function(){var e=df(!1);return e=i_.bind(null,le,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=le,u=Pn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),ke===null)throw Error(s(349));(xe&127)!==0||Lm(o,i,a)}u.memoizedState=a;var f={value:a,getSnapshot:i};return u.queue=f,jm(Om.bind(null,o,f,e),[e]),o.flags|=2048,hr(9,{destroy:void 0},Nm.bind(null,o,f,a,i),null),a},useId:function(){var e=Pn(),i=ke.identifierPrefix;if(Se){var a=Fi,o=Bi;a=(o&~(1<<32-Lt(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Bl++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=my++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:xf,useFormState:km,useActionState:km,useOptimistic:function(e){var i=Pn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=yf.bind(null,le,!0,a),a.dispatch=i,[e,i]},useMemoCache:uf,useCacheRefresh:function(){return Pn().memoizedState=Sy.bind(null,le)},useEffectEvent:function(e){var i=Pn(),a={impl:e};return i.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:En,use:Il,useCallback:t_,useContext:En,useEffect:mf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:e_,useReducer:zl,useRef:Ym,useState:function(){return zl(oa)},useDebugValue:_f,useDeferredValue:function(e,i){var a=an();return n_(a,ze.memoizedState,e,i)},useTransition:function(){var e=zl(oa)[0],i=an().memoizedState;return[typeof e=="boolean"?e:vo(e),i]},useSyncExternalStore:Um,useId:r_,useHostTransitionStatus:xf,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,i){var a=an();return Fm(a,ze,e,i)},useMemoCache:uf,useCacheRefresh:o_};Sf.useEffectEvent=Zm;var h_={readContext:En,use:Il,useCallback:t_,useContext:En,useEffect:mf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:e_,useReducer:hf,useRef:Ym,useState:function(){return hf(oa)},useDebugValue:_f,useDeferredValue:function(e,i){var a=an();return ze===null?gf(a,e,i):n_(a,ze.memoizedState,e,i)},useTransition:function(){var e=hf(oa)[0],i=an().memoizedState;return[typeof e=="boolean"?e:vo(e),i]},useSyncExternalStore:Um,useId:r_,useHostTransitionStatus:xf,useFormState:Wm,useActionState:Wm,useOptimistic:function(e,i){var a=an();return ze!==null?Fm(a,ze,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uf,useCacheRefresh:o_};h_.useEffectEvent=Zm;function Mf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:x({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ef={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=ni(),u=Ia(o);u.payload=i,a!=null&&(u.callback=a),i=za(e,u,o),i!==null&&(Xn(i,e,o),po(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=ni(),u=Ia(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=za(e,u,o),i!==null&&(Xn(i,e,o),po(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=ni(),o=Ia(a);o.tag=2,i!=null&&(o.callback=i),i=za(e,o,a),i!==null&&(Xn(i,e,a),po(i,e,a))}};function d_(e,i,a,o,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):i.prototype&&i.prototype.isPureReactComponent?!so(a,o)||!so(u,f):!0}function p_(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&Ef.enqueueReplaceState(i,i.state,null)}function Cs(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function m_(e){yl(e)}function __(e){console.error(e)}function g_(e){yl(e)}function kl(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function v_(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(e,i,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(e,i)},a}function x_(e){return e=Ia(e),e.tag=3,e}function y_(e,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){v_(i,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){v_(i,a,o),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Ey(e,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&ar(i,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?ec():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Zf(e,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Zf(e,o,u)),!1}throw Error(s(435,a.tag))}return Zf(e,o,u),ec(),!1}if(Se)return i=Jn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Vu&&(e=Error(s(422),{cause:o}),lo(ci(e,a)))):(o!==Vu&&(i=Error(s(423),{cause:o}),lo(ci(i,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ci(o,a),u=bf(e.stateNode,o,u),$u(e,u),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:o});if(f=ci(f,a),Co===null?Co=[f]:Co.push(f),tn!==4&&(tn=2),i===null)return!0;o=ci(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=bf(a.stateNode,o,e),$u(a,e),!1;case 1:if(i=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=x_(u),y_(u,e,a,o),$u(a,u),!1}a=a.return}while(a!==null);return!1}var Tf=Error(s(461)),un=!1;function bn(e,i,a,o){i.child=e===null?bm(i,null,a,o):As(i,e.child,a,o)}function S_(e,i,a,o,u){a=a.render;var f=i.ref;if("ref"in o){var _={};for(var A in o)A!=="ref"&&(_[A]=o[A])}else _=o;return Ms(i),o=rf(e,i,a,_,f,u),A=of(),e!==null&&!un?(lf(e,i,u),la(e,i,u)):(Se&&A&&Hu(i),i.flags|=1,bn(e,i,o,u),i.child)}function M_(e,i,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Fu(f)&&f.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=f,E_(e,i,f,o,u)):(e=bl(a.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(f=e.child,!Nf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(_,o)&&e.ref===i.ref)return la(e,i,u)}return i.flags|=1,e=na(f,o),e.ref=i.ref,e.return=i,i.child=e}function E_(e,i,a,o,u){if(e!==null){var f=e.memoizedProps;if(so(f,o)&&e.ref===i.ref)if(un=!1,i.pendingProps=o=f,Nf(e,u))(e.flags&131072)!==0&&(un=!0);else return i.lanes=e.lanes,la(e,i,u)}return Af(e,i,a,o,u)}function b_(e,i,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,i.child=null;return T_(e,i,f,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cl(i,f!==null?f.cachePool:null),f!==null?Rm(i,f):ef(),Cm(i);else return o=i.lanes=536870912,T_(e,i,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Cl(i,f.cachePool),Rm(i,f),Ga(),i.memoizedState=null):(e!==null&&Cl(i,null),ef(),Ga());return bn(e,i,u,a),i.child}function So(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function T_(e,i,a,o,u){var f=Zu();return f=f===null?null:{parent:ln._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},e!==null&&Cl(i,null),ef(),Cm(i),e!==null&&ar(e,i,o,!0),i.childLanes=u,null}function Xl(e,i){return i=Wl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function A_(e,i,a){return As(i,e.child,null,a),e=Xl(i,i.pendingProps),e.flags|=2,$n(i),i.memoizedState=null,e}function by(e,i,a){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=Xl(i,o),i.lanes=536870912,So(null,e);if(af(i),(e=Xe)?(e=Ig(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=cm(e),a.return=i,i.child=a,Mn=i,Xe=null)):e=null,e===null)throw Pa(i);return i.lanes=536870912,null}return Xl(i,o)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(af(i),u)if(i.flags&256)i.flags&=-257,i=A_(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(un||ar(e,i,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=ke,o!==null&&(_=cl(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,vs(e,_),Xn(o,e,_),Tf;ec(),i=A_(e,i,a)}else e=f.treeContext,Xe=pi(_.nextSibling),Mn=i,Se=!0,Oa=null,hi=!1,e!==null&&hm(i,e),i=Xl(i,o),i.flags|=4096;return i}return e=na(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function ql(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Af(e,i,a,o,u){return Ms(i),a=rf(e,i,a,o,void 0,u),o=of(),e!==null&&!un?(lf(e,i,u),la(e,i,u)):(Se&&o&&Hu(i),i.flags|=1,bn(e,i,a,u),i.child)}function R_(e,i,a,o,u,f){return Ms(i),i.updateQueue=null,a=Dm(i,o,a,u),wm(e),o=of(),e!==null&&!un?(lf(e,i,f),la(e,i,f)):(Se&&o&&Hu(i),i.flags|=1,bn(e,i,a,f),i.child)}function C_(e,i,a,o,u){if(Ms(i),i.stateNode===null){var f=tr,_=a.contextType;typeof _=="object"&&_!==null&&(f=En(_)),f=new a(o,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ef,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=o,f.state=i.memoizedState,f.refs={},Qu(i),_=a.contextType,f.context=typeof _=="object"&&_!==null?En(_):tr,f.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Mf(i,a,_,o),f.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Ef.enqueueReplaceState(f,f.state,null),_o(i,o,f,u),mo(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){f=i.stateNode;var A=i.memoizedProps,G=Cs(a,A);f.props=G;var et=f.context,ht=a.contextType;_=tr,typeof ht=="object"&&ht!==null&&(_=En(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||et!==_)&&p_(i,f,o,_),Fa=!1;var at=i.memoizedState;f.state=at,_o(i,o,f,u),mo(),et=i.memoizedState,A||at!==et||Fa?(typeof _t=="function"&&(Mf(i,a,_t,o),et=i.memoizedState),(G=Fa||d_(i,a,G,o,at,et,_))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=et),f.props=o,f.state=et,f.context=_,o=G):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{f=i.stateNode,Ju(e,i),_=i.memoizedProps,ht=Cs(a,_),f.props=ht,_t=i.pendingProps,at=f.context,et=a.contextType,G=tr,typeof et=="object"&&et!==null&&(G=En(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==_t||at!==G)&&p_(i,f,o,G),Fa=!1,at=i.memoizedState,f.state=at,_o(i,o,f,u),mo();var ot=i.memoizedState;_!==_t||at!==ot||Fa||e!==null&&e.dependencies!==null&&Al(e.dependencies)?(typeof A=="function"&&(Mf(i,a,A,o),ot=i.memoizedState),(ht=Fa||d_(i,a,ht,o,at,ot,G)||e!==null&&e.dependencies!==null&&Al(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,G)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ot),f.props=o,f.state=ot,f.context=G,o=ht):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),o=!1)}return f=o,ql(e,i),o=(i.flags&128)!==0,f||o?(f=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,e!==null&&o?(i.child=As(i,e.child,null,u),i.child=As(i,null,a,u)):bn(e,i,a,u),i.memoizedState=f.state,e=i.child):e=la(e,i,u),e}function w_(e,i,a,o){return ys(),i.flags|=256,bn(e,i,a,o),i.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(e){return{baseLanes:e,cachePool:vm()}}function wf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=ei),e}function D_(e,i,a){var o=i.pendingProps,u=!1,f=(i.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),_&&(u=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,e===null){if(Se){if(u?Ha(i):Ga(),(e=Xe)?(e=Ig(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=cm(e),a.return=i,i.child=a,Mn=i,Xe=null)):e=null,e===null)throw Pa(i);return fh(e)?i.lanes=32:i.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ga(),u=i.mode,A=Wl({mode:"hidden",children:A},u),o=xs(o,u,a,null),A.return=i,o.return=i,A.sibling=o,i.child=A,o=i.child,o.memoizedState=Cf(a),o.childLanes=wf(e,_,a),i.memoizedState=Rf,So(null,o)):(Ha(i),Df(i,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)i.flags&256?(Ha(i),i.flags&=-257,i=Uf(e,i,a)):i.memoizedState!==null?(Ga(),i.child=e.child,i.flags|=128,i=null):(Ga(),A=o.fallback,u=i.mode,o=Wl({mode:"visible",children:o.children},u),A=xs(A,u,a,null),A.flags|=2,o.return=i,A.return=i,o.sibling=A,i.child=o,As(i,e.child,null,a),o=i.child,o.memoizedState=Cf(a),o.childLanes=wf(e,_,a),i.memoizedState=Rf,i=So(null,o));else if(Ha(i),fh(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var et=_.dgst;_=et,o=Error(s(419)),o.stack="",o.digest=_,lo({value:o,source:null,stack:null}),i=Uf(e,i,a)}else if(un||ar(e,i,a,!1),_=(a&e.childLanes)!==0,un||_){if(_=ke,_!==null&&(o=cl(_,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,vs(e,o),Xn(_,e,o),Tf;uh(A)||ec(),i=Uf(e,i,a)}else uh(A)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,Xe=pi(A.nextSibling),Mn=i,Se=!0,Oa=null,hi=!1,e!==null&&hm(i,e),i=Df(i,o.children),i.flags|=4096);return i}return u?(Ga(),A=o.fallback,u=i.mode,G=e.child,et=G.sibling,o=na(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,et!==null?A=na(et,A):(A=xs(A,u,a,null),A.flags|=2),A.return=i,o.return=i,o.sibling=A,i.child=o,So(null,o),o=i.child,A=e.child.memoizedState,A===null?A=Cf(a):(u=A.cachePool,u!==null?(G=ln._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=vm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=wf(e,_,a),i.memoizedState=Rf,So(e.child,o)):(Ha(i),a=e.child,e=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(_=i.deletions,_===null?(i.deletions=[e],i.flags|=16):_.push(e)),i.child=a,i.memoizedState=null,a)}function Df(e,i){return i=Wl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Wl(e,i){return e=Qn(22,e,null,i),e.lanes=0,e}function Uf(e,i,a){return As(i,e.child,null,a),e=Df(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function U_(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),qu(e.return,i,a)}function Lf(e,i,a,o,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function L_(e,i,a){var o=i.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=nn.current,A=(_&2)!==0;if(A?(_=_&1|2,i.flags|=128):_&=1,gt(nn,_),bn(e,i,o,a),o=Se?oo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&U_(e,a,i);else if(e.tag===19)U_(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=i.child,u=null;a!==null;)e=a.alternate,e!==null&&Ol(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Lf(i,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Ol(e)===null){i.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Lf(i,!0,a,null,f,o);break;case"together":Lf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function la(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Xa|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(ar(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=na(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=na(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Nf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Al(e)))}function Ty(e,i,a){switch(i.tag){case 3:bt(i,i.stateNode.containerInfo),Ba(i,ln,e.memoizedState.cache),ys();break;case 27:case 5:Zt(i);break;case 4:bt(i,i.stateNode.containerInfo);break;case 10:Ba(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,af(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(i),i.flags|=128,null):(a&i.child.childLanes)!==0?D_(e,i,a):(Ha(i),e=la(e,i,a),e!==null?e.sibling:null);Ha(i);break;case 19:var u=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(ar(e,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return L_(e,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(nn,nn.current),o)break;return null;case 22:return i.lanes=0,b_(e,i,a,i.pendingProps);case 24:Ba(i,ln,e.memoizedState.cache)}return la(e,i,a)}function N_(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)un=!0;else{if(!Nf(e,a)&&(i.flags&128)===0)return un=!1,Ty(e,i,a);un=(e.flags&131072)!==0}else un=!1,Se&&(i.flags&1048576)!==0&&fm(i,oo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=bs(i.elementType),i.type=e,typeof e=="function")Fu(e)?(o=Cs(e,o),i.tag=1,i=C_(null,i,e,o,a)):(i.tag=0,i=Af(null,i,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){i.tag=11,i=S_(null,i,e,o,a);break t}else if(u===B){i.tag=14,i=M_(null,i,e,o,a);break t}}throw i=st(e)||e,Error(s(306,i,""))}}return i;case 0:return Af(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=Cs(o,i.pendingProps),C_(e,i,o,u,a);case 3:t:{if(bt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var f=i.memoizedState;u=f.element,Ju(e,i),_o(i,o,null,a);var _=i.memoizedState;if(o=_.cache,Ba(i,ln,o),o!==f.cache&&Wu(i,[ln],a,!0),mo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=w_(e,i,o,a);break t}else if(o!==u){u=ci(Error(s(424)),i),lo(u),i=w_(e,i,o,a);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Xe=pi(e.firstChild),Mn=i,Se=!0,Oa=null,hi=!0,a=bm(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ys(),o===u){i=la(e,i,a);break t}bn(e,i,o,a)}i=i.child}return i;case 26:return ql(e,i),e===null?(a=Xg(i.type,null,i.pendingProps,null))?i.memoizedState=a:Se||(a=i.type,e=i.pendingProps,o=lc(it.current).createElement(a),o[sn]=i,o[pn]=e,Tn(o,a,e),X(o),i.stateNode=o):i.memoizedState=Xg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Zt(i),e===null&&Se&&(o=i.stateNode=Gg(i.type,i.pendingProps,it.current),Mn=i,hi=!0,u=Xe,Za(i.type)?(hh=u,Xe=pi(o.firstChild)):Xe=u),bn(e,i,i.pendingProps.children,a),ql(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Se&&((u=o=Xe)&&(o=eS(o,i.type,i.pendingProps,hi),o!==null?(i.stateNode=o,Mn=i,Xe=pi(o.firstChild),hi=!1,u=!0):u=!1),u||Pa(i)),Zt(i),u=i.type,f=i.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,oh(u,f)?o=null:_!==null&&oh(u,_)&&(i.flags|=32),i.memoizedState!==null&&(u=rf(e,i,_y,null,null,a),Bo._currentValue=u),ql(e,i),bn(e,i,o,a),i.child;case 6:return e===null&&Se&&((e=a=Xe)&&(a=nS(a,i.pendingProps,hi),a!==null?(i.stateNode=a,Mn=i,Xe=null,e=!0):e=!1),e||Pa(i)),null;case 13:return D_(e,i,a);case 4:return bt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=As(i,null,o,a):bn(e,i,o,a),i.child;case 11:return S_(e,i,i.type,i.pendingProps,a);case 7:return bn(e,i,i.pendingProps,a),i.child;case 8:return bn(e,i,i.pendingProps.children,a),i.child;case 12:return bn(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Ba(i,i.type,o.value),bn(e,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Ms(i),u=En(u),o=o(u),i.flags|=1,bn(e,i,o,a),i.child;case 14:return M_(e,i,i.type,i.pendingProps,a);case 15:return E_(e,i,i.type,i.pendingProps,a);case 19:return L_(e,i,a);case 31:return by(e,i,a);case 22:return b_(e,i,a,i.pendingProps);case 24:return Ms(i),o=En(ln),e===null?(u=Zu(),u===null&&(u=ke,f=Yu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),i.memoizedState={parent:o,cache:u},Qu(i),Ba(i,ln,u)):((e.lanes&a)!==0&&(Ju(e,i),_o(i,null,null,a),mo()),u=e.memoizedState,f=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ba(i,ln,o)):(o=f.cache,Ba(i,ln,o),o!==u.cache&&Wu(i,[ln],a,!0))),bn(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ca(e){e.flags|=4}function Of(e,i,a,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(rg())e.flags|=8192;else throw Ts=Dl,Ku}else e.flags&=-16777217}function O_(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zg(i))if(rg())e.flags|=8192;else throw Ts=Dl,Ku}function Yl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Pe():536870912,e.lanes|=i,_r|=i)}function Mo(e,i){if(!Se)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function Ay(e,i,a){var o=i.pendingProps;switch(Gu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(i),null;case 1:return qe(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),sa(ln),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(i)?ca(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ku())),qe(i),null;case 26:var u=i.type,f=i.memoizedState;return e===null?(ca(i),f!==null?(qe(i),O_(i,f)):(qe(i),Of(i,u,null,o,a))):f?f!==e.memoizedState?(ca(i),qe(i),O_(i,f)):(qe(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&ca(i),qe(i),Of(i,u,e,o,a)),null;case 27:if(Jt(i),a=it.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ca(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return qe(i),null}e=At.current,ir(i)?dm(i):(e=Gg(u,o,a),i.stateNode=e,ca(i))}return qe(i),null;case 5:if(Jt(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ca(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return qe(i),null}if(f=At.current,ir(i))dm(i);else{var _=lc(it.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[sn]=i,f[pn]=o;t:for(_=i.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===i)break t;for(;_.sibling===null;){if(_.return===null||_.return===i)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}i.stateNode=f;t:switch(Tn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ca(i)}}return qe(i),Of(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ca(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=it.current,ir(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Dg(e.nodeValue,a)),e||Pa(i,!0)}else e=lc(e).createTextNode(o),e[sn]=i,i.stateNode=e}return qe(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(o=ir(i),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[sn]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qe(i),e=!1}else a=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?($n(i),i):($n(i),null);if((i.flags&128)!==0)throw Error(s(558))}return qe(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ir(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qe(i),u=!1}else u=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?($n(i),i):($n(i),null)}return $n(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),Yl(i,i.updateQueue),qe(i),null);case 4:return Vt(),e===null&&nh(i.stateNode.containerInfo),qe(i),null;case 10:return sa(i.type),qe(i),null;case 19:if(Y(nn),o=i.memoizedState,o===null)return qe(i),null;if(u=(i.flags&128)!==0,f=o.rendering,f===null)if(u)Mo(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(f=Ol(e),f!==null){for(i.flags|=128,Mo(o,!1),e=f.updateQueue,i.updateQueue=e,Yl(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)lm(a,e),a=a.sibling;return gt(nn,nn.current&1|2),Se&&ia(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&M()>Jl&&(i.flags|=128,u=!0,Mo(o,!1),i.lanes=4194304)}else{if(!u)if(e=Ol(f),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,Yl(i,e),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Se)return qe(i),null}else 2*M()-o.renderingStartTime>Jl&&a!==536870912&&(i.flags|=128,u=!0,Mo(o,!1),i.lanes=4194304);o.isBackwards?(f.sibling=i.child,i.child=f):(e=o.last,e!==null?e.sibling=f:i.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=M(),e.sibling=null,a=nn.current,gt(nn,u?a&1|2:a&1),Se&&ia(i,o.treeForkCount),e):(qe(i),null);case 22:case 23:return $n(i),nf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(qe(i),i.subtreeFlags&6&&(i.flags|=8192)):qe(i),a=i.updateQueue,a!==null&&Yl(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&Y(Es),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),sa(ln),qe(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Ry(e,i){switch(Gu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return sa(ln),Vt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Jt(i),null;case 31:if(i.memoizedState!==null){if($n(i),i.alternate===null)throw Error(s(340));ys()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if($n(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ys()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Y(nn),null;case 4:return Vt(),null;case 10:return sa(i.type),null;case 22:case 23:return $n(i),nf(),e!==null&&Y(Es),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return sa(ln),null;case 25:return null;default:return null}}function P_(e,i){switch(Gu(i),i.tag){case 3:sa(ln),Vt();break;case 26:case 27:case 5:Jt(i);break;case 4:Vt();break;case 31:i.memoizedState!==null&&$n(i);break;case 13:$n(i);break;case 19:Y(nn);break;case 10:sa(i.type);break;case 22:case 23:$n(i),nf(),e!==null&&Y(Es);break;case 24:sa(ln)}}function Eo(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(A){Fe(i,i.return,A)}}function Va(e,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var _=o.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=i;var G=a,et=A;try{et()}catch(ht){Fe(u,G,ht)}}}o=o.next}while(o!==f)}}catch(ht){Fe(i,i.return,ht)}}function B_(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Am(i,a)}catch(o){Fe(e,e.return,o)}}}function F_(e,i,a){a.props=Cs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,i,o)}}function bo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,i,u)}}function Ii(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,i,u)}else a.current=null}function I_(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function Pf(e,i,a){try{var o=e.stateNode;Zy(o,e.type,a,i),o[pn]=i}catch(u){Fe(e,e.return,u)}}function z_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function Bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||z_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ta));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Ff(e,i,a),e=e.sibling;e!==null;)Ff(e,i,a),e=e.sibling}function jl(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,i,a),e=e.sibling;e!==null;)jl(e,i,a),e=e.sibling}function H_(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Tn(i,o,a),i[sn]=e,i[pn]=a}catch(f){Fe(e,e.return,f)}}var ua=!1,fn=!1,If=!1,G_=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Cy(e,i){if(e=e.containerInfo,sh=mc,e=$p(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,A=-1,G=-1,et=0,ht=0,_t=e,at=null;e:for(;;){for(var ot;_t!==a||u!==0&&_t.nodeType!==3||(A=_+u),_t!==f||o!==0&&_t.nodeType!==3||(G=_+o),_t.nodeType===3&&(_+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)at=_t,_t=ot;for(;;){if(_t===e)break e;if(at===a&&++et===u&&(A=_),at===f&&++ht===o&&(G=_),(ot=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=ot}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(rh={focusedElem:e,selectionRange:a},mc=!1,yn=i;yn!==null;)if(i=yn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,yn=e;else for(;yn!==null;){switch(i=yn,f=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=i,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ht=Cs(a.type,u);e=o.getSnapshotBeforeUpdate(Ht,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){Fe(a,a.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)ch(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,yn=e;break}yn=i.return}}function V_(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),o&4&&Eo(5,a);break;case 1:if(ha(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(_){Fe(a,a.return,_)}else{var u=Cs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Fe(a,a.return,_)}}o&64&&B_(a),o&512&&bo(a,a.return);break;case 3:if(ha(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Am(e,i)}catch(_){Fe(a,a.return,_)}}break;case 27:i===null&&o&4&&H_(a);case 26:case 5:ha(e,a),i===null&&o&4&&I_(a),o&512&&bo(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),o&4&&q_(e,a);break;case 13:ha(e,a),o&4&&W_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Fy.bind(null,a),iS(e,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){i=i!==null&&i.memoizedState!==null||fn,u=ua;var f=fn;ua=o,(fn=i)&&!f?da(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),ua=u,fn=f}break;case 30:break;default:ha(e,a)}}function k_(e){var i=e.alternate;i!==null&&(e.alternate=null,k_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Qr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Hn=!1;function fa(e,i,a){for(a=a.child;a!==null;)X_(e,i,a),a=a.sibling}function X_(e,i,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:fn||Ii(a,i),fa(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ii(a,i);var o=Ze,u=Hn;Za(a.type)&&(Ze=a.stateNode,Hn=!1),fa(e,i,a),No(a.stateNode),Ze=o,Hn=u;break;case 5:fn||Ii(a,i);case 6:if(o=Ze,u=Hn,Ze=null,fa(e,i,a),Ze=o,Hn=u,Ze!==null)if(Hn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Fe(a,i,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Fe(a,i,f)}break;case 18:Ze!==null&&(Hn?(e=Ze,Bg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),br(e)):Bg(Ze,a.stateNode));break;case 4:o=Ze,u=Hn,Ze=a.stateNode.containerInfo,Hn=!0,fa(e,i,a),Ze=o,Hn=u;break;case 0:case 11:case 14:case 15:Va(2,a,i),fn||Va(4,a,i),fa(e,i,a);break;case 1:fn||(Ii(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&F_(a,i,o)),fa(e,i,a);break;case 21:fa(e,i,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,fa(e,i,a),fn=o;break;default:fa(e,i,a)}}function q_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{br(e)}catch(a){Fe(i,i.return,a)}}}function W_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{br(e)}catch(a){Fe(i,i.return,a)}}function wy(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new G_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new G_),i;default:throw Error(s(435,e.tag))}}function Zl(e,i){var a=wy(e);i.forEach(function(o){if(!a.has(o)){a.add(o);var u=Iy.bind(null,e,o);o.then(u,u)}})}function Gn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,_=i,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Za(A.type)){Ze=A.stateNode,Hn=!1;break t}break;case 5:Ze=A.stateNode,Hn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Hn=!0;break t}A=A.return}if(Ze===null)throw Error(s(160));X_(f,_,u),Ze=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Y_(i,e),i=i.sibling}var Ti=null;function Y_(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(i,e),Vn(e),o&4&&(Va(3,e,e.return),Eo(3,e),Va(5,e,e.return));break;case 1:Gn(i,e),Vn(e),o&512&&(fn||a===null||Ii(a,a.return)),o&64&&ua&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Gn(i,e),Vn(e),o&512&&(fn||a===null||Ii(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ds]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Tn(f,o,a),f[sn]=e,X(f),o=f;break t;case"link":var _=Yg("link","href",u).get(o+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break e}}f=u.createElement(o),Tn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=Yg("meta","content",u).get(o+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break e}}f=u.createElement(o),Tn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[sn]=e,X(f),o=f}e.stateNode=o}else jg(u,e.type,e.stateNode);else e.stateNode=Wg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?jg(u,e.type,e.stateNode):Wg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(i,e),Vn(e),o&512&&(fn||a===null||Ii(a,a.return)),a!==null&&o&4&&Pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(i,e),Vn(e),o&512&&(fn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{On(u,"")}catch(Ht){Fe(e,e.return,Ht)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(Gn(i,e),Vn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ht){Fe(e,e.return,Ht)}}break;case 3:if(fc=null,u=Ti,Ti=cc(i.containerInfo),Gn(i,e),Ti=u,Vn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{br(i.containerInfo)}catch(Ht){Fe(e,e.return,Ht)}If&&(If=!1,j_(e));break;case 4:o=Ti,Ti=cc(e.stateNode.containerInfo),Gn(i,e),Vn(e),Ti=o;break;case 12:Gn(i,e),Vn(e);break;case 31:Gn(i,e),Vn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 13:Gn(i,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=M()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,et=ua,ht=fn;if(ua=et||u,fn=ht||G,Gn(i,e),fn=ht,ua=et,Vn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||G||ua||fn||ws(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){G=a=i;try{if(f=G.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=G.stateNode;var _t=G.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Ht){Fe(G,G.return,Ht)}}}else if(i.tag===6){if(a===null){G=i;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Ht){Fe(G,G.return,Ht)}}}else if(i.tag===18){if(a===null){G=i;try{var ot=G.stateNode;u?Fg(ot,!0):Fg(G.stateNode,!1)}catch(Ht){Fe(G,G.return,Ht)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(e,a))));break;case 19:Gn(i,e),Vn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 30:break;case 21:break;default:Gn(i,e),Vn(e)}}function Vn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(z_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Bf(e);jl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(On(_,""),a.flags&=-33);var A=Bf(e);jl(e,A,_);break;case 3:case 4:var G=a.stateNode.containerInfo,et=Bf(e);Ff(e,et,G);break;default:throw Error(s(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function j_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;j_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ha(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)V_(e,i.alternate,i),i=i.sibling}function ws(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Va(4,i,i.return),ws(i);break;case 1:Ii(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&F_(i,i.return,a),ws(i);break;case 27:No(i.stateNode);case 26:case 5:Ii(i,i.return),ws(i);break;case 22:i.memoizedState===null&&ws(i);break;case 30:ws(i);break;default:ws(i)}e=e.sibling}}function da(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,f=i,_=f.flags;switch(f.tag){case 0:case 11:case 15:da(u,f,a),Eo(4,f);break;case 1:if(da(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Fe(o,o.return,et)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Tm(G[u],A)}catch(et){Fe(o,o.return,et)}}a&&_&64&&B_(f),bo(f,f.return);break;case 27:H_(f);case 26:case 5:da(u,f,a),a&&o===null&&_&4&&I_(f),bo(f,f.return);break;case 12:da(u,f,a);break;case 31:da(u,f,a),a&&_&4&&q_(u,f);break;case 13:da(u,f,a),a&&_&4&&W_(u,f);break;case 22:f.memoizedState===null&&da(u,f,a),bo(f,f.return);break;case 30:break;default:da(u,f,a)}i=i.sibling}}function zf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Hf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&co(e))}function Ai(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Z_(e,i,a,o),i=i.sibling}function Z_(e,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ai(e,i,a,o),u&2048&&Eo(9,i);break;case 1:Ai(e,i,a,o);break;case 3:Ai(e,i,a,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){Ai(e,i,a,o),e=i.stateNode;try{var f=i.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Fe(i,i.return,G)}}else Ai(e,i,a,o);break;case 31:Ai(e,i,a,o);break;case 13:Ai(e,i,a,o);break;case 23:break;case 22:f=i.stateNode,_=i.alternate,i.memoizedState!==null?f._visibility&2?Ai(e,i,a,o):To(e,i):f._visibility&2?Ai(e,i,a,o):(f._visibility|=2,dr(e,i,a,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&zf(_,i);break;case 24:Ai(e,i,a,o),u&2048&&Hf(i.alternate,i);break;default:Ai(e,i,a,o)}}function dr(e,i,a,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var f=e,_=i,A=a,G=o,et=_.flags;switch(_.tag){case 0:case 11:case 15:dr(f,_,A,G,u),Eo(8,_);break;case 23:break;case 22:var ht=_.stateNode;_.memoizedState!==null?ht._visibility&2?dr(f,_,A,G,u):To(f,_):(ht._visibility|=2,dr(f,_,A,G,u)),u&&et&2048&&zf(_.alternate,_);break;case 24:dr(f,_,A,G,u),u&&et&2048&&Hf(_.alternate,_);break;default:dr(f,_,A,G,u)}i=i.sibling}}function To(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,u=o.flags;switch(o.tag){case 22:To(a,o),u&2048&&zf(o.alternate,o);break;case 24:To(a,o),u&2048&&Hf(o.alternate,o);break;default:To(a,o)}i=i.sibling}}var Ao=8192;function pr(e,i,a){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)K_(e,i,a),e=e.sibling}function K_(e,i,a){switch(e.tag){case 26:pr(e,i,a),e.flags&Ao&&e.memoizedState!==null&&mS(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:pr(e,i,a);break;case 3:case 4:var o=Ti;Ti=cc(e.stateNode.containerInfo),pr(e,i,a),Ti=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ao,Ao=16777216,pr(e,i,a),Ao=o):pr(e,i,a));break;default:pr(e,i,a)}}function Q_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ro(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];yn=o,$_(o,e)}Q_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)J_(e),e=e.sibling}function J_(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Kl(e)):Ro(e);break;default:Ro(e)}}function Kl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];yn=o,$_(o,e)}Q_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Va(8,i,i.return),Kl(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(i));break;default:Kl(i)}e=e.sibling}}function $_(e,i){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Va(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(k_(o),o===a){yn=null;break t}if(u!==null){u.return=f,yn=u;break t}yn=f}}}var Dy={getCacheForType:function(e){var i=En(ln),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return En(ln).controller.signal}},Uy=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,me=null,xe=0,Be=0,ti=null,ka=!1,mr=!1,Gf=!1,pa=0,tn=0,Xa=0,Ds=0,Vf=0,ei=0,_r=0,Co=null,kn=null,kf=!1,Ql=0,tg=0,Jl=1/0,$l=null,qa=null,_n=0,Wa=null,gr=null,ma=0,Xf=0,qf=null,eg=null,wo=0,Wf=null;function ni(){return(Ue&2)!==0&&xe!==0?xe&-xe:N.T!==null?Jf():Pi()}function ng(){if(ei===0)if((xe&536870912)===0||Se){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function Xn(e,i,a){(e===ke&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(vr(e,0),Ya(e,xe,ei,!1)),Un(e,a),((Ue&2)===0||e!==ke)&&(e===ke&&((Ue&2)===0&&(Ds|=a),tn===4&&Ya(e,xe,ei,!1)),zi(e))}function ig(e,i,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&e.expiredLanes)===0||It(e,i),u=o?Oy(e,i):jf(e,i,!0),f=o;do{if(u===0){mr&&!o&&Ya(e,i,0,!1);break}else{if(a=e.current.alternate,f&&!Ly(a)){u=jf(e,i,!1),f=!1;continue}if(u===2){if(f=i,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;t:{var A=e;u=Co;var G=A.current.memoizedState.isDehydrated;if(G&&(vr(A,_).flags|=256),_=jf(A,_,!1),_!==2){if(Gf&&!G){A.errorRecoveryDisabledLanes|=f,Ds|=f,u=4;break t}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){vr(e,0),Ya(e,i,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ya(o,i,ei,!ka);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=Ql+300-M(),10<u)){if(Ya(o,i,ei,!ka),ut(o,0,!0)!==0)break t;ma=i,o.timeoutHandle=Og(ag.bind(null,o,a,kn,$l,kf,i,ei,Ds,_r,ka,f,"Throttled",-0,0),u);break t}ag(o,a,kn,$l,kf,i,ei,Ds,_r,ka,f,null,-0,0)}}break}while(!0);zi(e)}function ag(e,i,a,o,u,f,_,A,G,et,ht,_t,at,ot){if(e.timeoutHandle=-1,_t=i.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},K_(i,f,_t);var Ht=(f&62914560)===f?Ql-M():(f&4194048)===f?tg-M():0;if(Ht=_S(_t,Ht),Ht!==null){ma=f,e.cancelPendingCommit=Ht(hg.bind(null,e,i,f,a,o,u,_,A,G,ht,_t,null,at,ot)),Ya(e,f,_,!et);return}}hg(e,i,f,a,o,u,_,A,G)}function Ly(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ya(e,i,a,o){i&=~Vf,i&=~Ds,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var f=31-Lt(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Kr(e,a,i)}function tc(){return(Ue&6)===0?(Do(0),!1):!0}function Yf(){if(me!==null){if(Be===0)var e=me.return;else e=me,aa=Ss=null,cf(e),lr=null,fo=0,e=me;for(;e!==null;)P_(e.alternate,e),e=e.return;me=null}}function vr(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Jy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ma=0,Yf(),ke=e,me=a=na(e.current,null),xe=i,Be=0,ti=null,ka=!1,mr=It(e,i),Gf=!1,_r=ei=Vf=Ds=Xa=tn=0,kn=Co=null,kf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Lt(o),f=1<<u;i|=e[u],o&=~f}return pa=i,Sl(),a}function sg(e,i){le=null,N.H=yo,i===or||i===wl?(i=Sm(),Be=3):i===Ku?(i=Sm(),Be=4):Be=i===Tf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ti=i,me===null&&(tn=1,kl(e,ci(i,e.current)))}function rg(){var e=Jn.current;return e===null?!0:(xe&4194048)===xe?di===null:(xe&62914560)===xe||(xe&536870912)!==0?e===di:!1}function og(){var e=N.H;return N.H=yo,e===null?yo:e}function lg(){var e=N.A;return N.A=Dy,e}function ec(){tn=4,ka||(xe&4194048)!==xe&&Jn.current!==null||(mr=!0),(Xa&134217727)===0&&(Ds&134217727)===0||ke===null||Ya(ke,xe,ei,!1)}function jf(e,i,a){var o=Ue;Ue|=2;var u=og(),f=lg();(ke!==e||xe!==i)&&($l=null,vr(e,i)),i=!1;var _=tn;t:do try{if(Be!==0&&me!==null){var A=me,G=ti;switch(Be){case 8:Yf(),_=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(i=!0);var et=Be;if(Be=0,ti=null,xr(e,A,G,et),a&&mr){_=0;break t}break;default:et=Be,Be=0,ti=null,xr(e,A,G,et)}}Ny(),_=tn;break}catch(ht){sg(e,ht)}while(!0);return i&&e.shellSuspendCounter++,aa=Ss=null,Ue=o,N.H=u,N.A=f,me===null&&(ke=null,xe=0,Sl()),_}function Ny(){for(;me!==null;)cg(me)}function Oy(e,i){var a=Ue;Ue|=2;var o=og(),u=lg();ke!==e||xe!==i?($l=null,Jl=M()+500,vr(e,i)):mr=It(e,i);t:do try{if(Be!==0&&me!==null){i=me;var f=ti;e:switch(Be){case 1:Be=0,ti=null,xr(e,i,f,1);break;case 2:case 9:if(xm(f)){Be=0,ti=null,ug(i);break}i=function(){Be!==2&&Be!==9||ke!==e||(Be=7),zi(e)},f.then(i,i);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:xm(f)?(Be=0,ti=null,ug(i)):(Be=0,ti=null,xr(e,i,f,7));break;case 5:var _=null;switch(me.tag){case 26:_=me.memoizedState;case 5:case 27:var A=me;if(_?Zg(_):A.stateNode.complete){Be=0,ti=null;var G=A.sibling;if(G!==null)me=G;else{var et=A.return;et!==null?(me=et,nc(et)):me=null}break e}}Be=0,ti=null,xr(e,i,f,5);break;case 6:Be=0,ti=null,xr(e,i,f,6);break;case 8:Yf(),tn=6;break t;default:throw Error(s(462))}}Py();break}catch(ht){sg(e,ht)}while(!0);return aa=Ss=null,N.H=o,N.A=u,Ue=a,me!==null?0:(ke=null,xe=0,Sl(),tn)}function Py(){for(;me!==null&&!qt();)cg(me)}function cg(e){var i=N_(e.alternate,e,pa);e.memoizedProps=e.pendingProps,i===null?nc(e):me=i}function ug(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=R_(a,i,i.pendingProps,i.type,void 0,xe);break;case 11:i=R_(a,i,i.pendingProps,i.type.render,i.ref,xe);break;case 5:cf(i);default:P_(a,i),i=me=lm(i,pa),i=N_(a,i,pa)}e.memoizedProps=e.pendingProps,i===null?nc(e):me=i}function xr(e,i,a,o){aa=Ss=null,cf(i),lr=null,fo=0;var u=i.return;try{if(Ey(e,u,i,a,xe)){tn=1,kl(e,ci(a,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;tn=1,kl(e,ci(a,e.current)),me=null;return}i.flags&32768?(Se||o===1?e=!0:mr||(xe&536870912)!==0?e=!1:(ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),fg(i,e)):nc(i)}function nc(e){var i=e;do{if((i.flags&32768)!==0){fg(i,ka);return}e=i.return;var a=Ay(i.alternate,i,pa);if(a!==null){me=a;return}if(i=i.sibling,i!==null){me=i;return}me=i=e}while(i!==null);tn===0&&(tn=5)}function fg(e,i){do{var a=Ry(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);tn=6,me=null}function hg(e,i,a,o,u,f,_,A,G){e.cancelPendingCommit=null;do ic();while(_n!==0);if((Ue&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(f=i.lanes|i.childLanes,f|=Pu,yi(e,a,f,_,A,G),e===ke&&(me=ke=null,xe=0),gr=i,Wa=e,ma=a,Xf=f,qf=u,eg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zy(ft,function(){return gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=I.p,I.p=2,_=Ue,Ue|=4;try{Cy(e,i,a)}finally{Ue=_,I.p=u,N.T=o}}_n=1,dg(),pg(),mg()}}function dg(){if(_n===1){_n=0;var e=Wa,i=gr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=I.p;I.p=2;var u=Ue;Ue|=4;try{Y_(i,e);var f=rh,_=$p(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&Jp(A.ownerDocument.documentElement,A)){if(G!==null&&Du(A)){var et=G.start,ht=G.end;if(ht===void 0&&(ht=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(ht,A.value.length);else{var _t=A.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var ot=at.getSelection(),Ht=A.textContent.length,Qt=Math.min(G.start,Ht),Ge=G.end===void 0?Qt:Math.min(G.end,Ht);!ot.extend&&Qt>Ge&&(_=Ge,Ge=Qt,Qt=_);var j=Qp(A,Qt),k=Qp(A,Ge);if(j&&k&&(ot.rangeCount!==1||ot.anchorNode!==j.node||ot.anchorOffset!==j.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var $=_t.createRange();$.setStart(j.node,j.offset),ot.removeAllRanges(),Qt>Ge?(ot.addRange($),ot.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ot.addRange($))}}}}for(_t=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var mt=_t[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}mc=!!sh,rh=sh=null}finally{Ue=u,I.p=o,N.T=a}}e.current=i,_n=2}}function pg(){if(_n===2){_n=0;var e=Wa,i=gr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=I.p;I.p=2;var u=Ue;Ue|=4;try{V_(e,i.alternate,i)}finally{Ue=u,I.p=o,N.T=a}}_n=3}}function mg(){if(_n===4||_n===3){_n=0,L();var e=Wa,i=gr,a=ma,o=eg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,gr=Wa=null,_g(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(qa=null),qs(a),i=i.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Mt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=N.T,u=I.p,I.p=2,N.T=null;try{for(var f=e.onRecoverableError,_=0;_<o.length;_++){var A=o[_];f(A.value,{componentStack:A.stack})}}finally{N.T=i,I.p=u}}(ma&3)!==0&&ic(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Wf?wo++:(wo=0,Wf=e):wo=0,Do(0)}}function _g(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,co(i)))}function ic(){return dg(),pg(),mg(),gg()}function gg(){if(_n!==5)return!1;var e=Wa,i=Xf;Xf=0;var a=qs(ma),o=N.T,u=I.p;try{I.p=32>a?32:a,N.T=null,a=qf,qf=null;var f=Wa,_=ma;if(_n=0,gr=Wa=null,ma=0,(Ue&6)!==0)throw Error(s(331));var A=Ue;if(Ue|=4,J_(f.current),Z_(f,f.current,_,a),Ue=A,Do(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{I.p=u,N.T=o,_g(e,i)}}function vg(e,i,a){i=ci(a,i),i=bf(e.stateNode,i,2),e=za(e,i,2),e!==null&&(Un(e,2),zi(e))}function Fe(e,i,a){if(e.tag===3)vg(e,e,a);else for(;i!==null;){if(i.tag===3){vg(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){e=ci(a,e),a=x_(2),o=za(i,a,2),o!==null&&(y_(a,o,i,e),Un(o,2),zi(o));break}}i=i.return}}function Zf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Uy;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||(Gf=!0,u.add(a),e=By.bind(null,e,i,a),i.then(e,e))}function By(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(xe&a)===a&&(tn===4||tn===3&&(xe&62914560)===xe&&300>M()-Ql?(Ue&2)===0&&vr(e,0):Vf|=a,_r===xe&&(_r=0)),zi(e)}function xg(e,i){i===0&&(i=Pe()),e=vs(e,i),e!==null&&(Un(e,i),zi(e))}function Fy(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),xg(e,a)}function Iy(e,i){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),xg(e,a)}function zy(e,i){return Ee(e,i)}var ac=null,yr=null,Kf=!1,sc=!1,Qf=!1,ja=0;function zi(e){e!==yr&&e.next===null&&(yr===null?ac=yr=e:yr=yr.next=e),sc=!0,Kf||(Kf=!0,Gy())}function Do(e,i){if(!Qf&&sc){Qf=!0;do for(var a=!1,o=ac;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Lt(42|e)+1)-1,f&=u&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Eg(o,f))}else f=xe,f=ut(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||It(o,f)||(a=!0,Eg(o,f));o=o.next}while(a);Qf=!1}}function Hy(){yg()}function yg(){sc=Kf=!1;var e=0;ja!==0&&Qy()&&(e=ja);for(var i=M(),a=null,o=ac;o!==null;){var u=o.next,f=Sg(o,i);f===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(yr=a)):(a=o,(e!==0||(f&3)!==0)&&(sc=!0)),o=u}_n!==0&&_n!==5||Do(e),ja!==0&&(ja=0)}function Sg(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Lt(f),A=1<<_,G=u[_];G===-1?((A&a)===0||(A&o)!==0)&&(u[_]=ee(A,i)):G<=i&&(e.expiredLanes|=A),f&=~A}if(i=ke,a=xe,a=ut(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||It(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&Le(o),qs(a)){case 2:case 8:a=xt;break;case 32:a=ft;break;case 268435456:a=Ct;break;default:a=ft}return o=Mg.bind(null,e),a=Ee(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&Le(o),e.callbackPriority=2,e.callbackNode=null,2}function Mg(e,i){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ic()&&e.callbackNode!==a)return null;var o=xe;return o=ut(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ig(e,o,i),Sg(e,M()),e.callbackNode!=null&&e.callbackNode===a?Mg.bind(null,e):null)}function Eg(e,i){if(ic())return null;ig(e,i,!0)}function Gy(){$y(function(){(Ue&6)!==0?Ee(pt,Hy):yg()})}function Jf(){if(ja===0){var e=sr;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),ja=e}return ja}function bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function Tg(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function Vy(e,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var f=bg((u[pn]||null).action),_=o.submitter;_&&(i=(i=_[pn]||null)?bg(i.formAction):_.getAttribute("formAction"),i!==null&&(f=i,_=null));var A=new gl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var G=_?Tg(u,_):new FormData(u);vf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=_?Tg(u,_):new FormData(u),vf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var $f=0;$f<Ou.length;$f++){var th=Ou[$f],ky=th.toLowerCase(),Xy=th[0].toUpperCase()+th.slice(1);bi(ky,"on"+Xy)}bi(nm,"onAnimationEnd"),bi(im,"onAnimationIteration"),bi(am,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(ry,"onTransitionRun"),bi(oy,"onTransitionStart"),bi(ly,"onTransitionCancel"),bi(sm,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function Ag(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(i)for(var _=o.length-1;0<=_;_--){var A=o[_],G=A.instance,et=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(ht){yl(ht)}u.currentTarget=null,f=G}else for(_=0;_<o.length;_++){if(A=o[_],G=A.instance,et=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(ht){yl(ht)}u.currentTarget=null,f=G}}}}function _e(e,i){var a=i[wa];a===void 0&&(a=i[wa]=new Set);var o=e+"__bubble";a.has(o)||(Rg(i,e,2,!1),a.add(o))}function eh(e,i,a){var o=0;i&&(o|=4),Rg(a,e,o,i)}var rc="_reactListening"+Math.random().toString(36).slice(2);function nh(e){if(!e[rc]){e[rc]=!0,rt.forEach(function(a){a!=="selectionchange"&&(qy.has(a)||eh(a,!1,e),eh(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[rc]||(i[rc]=!0,eh("selectionchange",!1,i))}}function Rg(e,i,a,o){switch(n0(i)){case 2:var u=xS;break;case 8:u=yS;break;default:u=gh}a=u.bind(null,i,a,e),u=void 0,!Su||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,a,{capture:!0,passive:u}):e.addEventListener(i,a,!0):u!==void 0?e.addEventListener(i,a,{passive:u}):e.addEventListener(i,a,!1)}function ih(e,i,a,o,u){var f=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var A=o.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=o.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=Da(A),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){o=f=_;continue t}A=A.parentNode}}o=o.return}Lp(function(){var et=f,ht=xu(a),_t=[];t:{var at=rm.get(e);if(at!==void 0){var ot=gl,Ht=e;switch(e){case"keypress":if(ml(a)===0)break t;case"keydown":case"keyup":ot=Ix;break;case"focusin":Ht="focus",ot=Tu;break;case"focusout":Ht="blur",ot=Tu;break;case"beforeblur":case"afterblur":ot=Tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Gx;break;case nm:case im:case am:ot=wx;break;case sm:ot=kx;break;case"scroll":case"scrollend":ot=bx;break;case"wheel":ot=qx;break;case"copy":case"cut":case"paste":ot=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Fp;break;case"toggle":case"beforetoggle":ot=Yx}var Qt=(i&4)!==0,Ge=!Qt&&(e==="scroll"||e==="scrollend"),j=Qt?at!==null?at+"Capture":null:at;Qt=[];for(var k=et,$;k!==null;){var mt=k;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||j===null||(mt=Jr(k,j),mt!=null&&Qt.push(Lo(k,mt,$))),Ge)break;k=k.return}0<Qt.length&&(at=new ot(at,Ht,null,a,ht),_t.push({event:at,listeners:Qt}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",at&&a!==vu&&(Ht=a.relatedTarget||a.fromElement)&&(Da(Ht)||Ht[Ji]))break t;if((ot||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,ot?(Ht=a.relatedTarget||a.toElement,ot=et,Ht=Ht?Da(Ht):null,Ht!==null&&(Ge=c(Ht),Qt=Ht.tag,Ht!==Ge||Qt!==5&&Qt!==27&&Qt!==6)&&(Ht=null)):(ot=null,Ht=et),ot!==Ht)){if(Qt=Pp,mt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=Fp,mt="onPointerLeave",j="onPointerEnter",k="pointer"),Ge=ot==null?at:ps(ot),$=Ht==null?at:ps(Ht),at=new Qt(mt,k+"leave",ot,a,ht),at.target=Ge,at.relatedTarget=$,mt=null,Da(ht)===et&&(Qt=new Qt(j,k+"enter",Ht,a,ht),Qt.target=$,Qt.relatedTarget=Ge,mt=Qt),Ge=mt,ot&&Ht)e:{for(Qt=Wy,j=ot,k=Ht,$=0,mt=j;mt;mt=Qt(mt))$++;mt=0;for(var Kt=k;Kt;Kt=Qt(Kt))mt++;for(;0<$-mt;)j=Qt(j),$--;for(;0<mt-$;)k=Qt(k),mt--;for(;$--;){if(j===k||k!==null&&j===k.alternate){Qt=j;break e}j=Qt(j),k=Qt(k)}Qt=null}else Qt=null;ot!==null&&Cg(_t,at,ot,Qt,!1),Ht!==null&&Ge!==null&&Cg(_t,Ge,Ht,Qt,!0)}}t:{if(at=et?ps(et):window,ot=at.nodeName&&at.nodeName.toLowerCase(),ot==="select"||ot==="input"&&at.type==="file")var Ce=qp;else if(kp(at))if(Wp)Ce=iy;else{Ce=ey;var Wt=ty}else ot=at.nodeName,!ot||ot.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&Ys(et.elementType)&&(Ce=qp):Ce=ny;if(Ce&&(Ce=Ce(e,et))){Xp(_t,Ce,a,ht);break t}Wt&&Wt(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&Mi(at,"number",at.value)}switch(Wt=et?ps(et):window,e){case"focusin":(kp(Wt)||Wt.contentEditable==="true")&&(Qs=Wt,Uu=et,ro=null);break;case"focusout":ro=Uu=Qs=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,tm(_t,a,ht);break;case"selectionchange":if(sy)break;case"keydown":case"keyup":tm(_t,a,ht)}var fe;if(Ru)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Ks?Gp(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Ip&&a.locale!=="ko"&&(Ks||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ks&&(fe=Np()):(La=ht,Mu="value"in La?La.value:La.textContent,Ks=!0)),Wt=oc(et,ye),0<Wt.length&&(ye=new Bp(ye,e,null,a,ht),_t.push({event:ye,listeners:Wt}),fe?ye.data=fe:(fe=Vp(a),fe!==null&&(ye.data=fe)))),(fe=Zx?Kx(e,a):Qx(e,a))&&(ye=oc(et,"onBeforeInput"),0<ye.length&&(Wt=new Bp("onBeforeInput","beforeinput",null,a,ht),_t.push({event:Wt,listeners:ye}),Wt.data=fe)),Vy(_t,e,et,a,ht)}Ag(_t,i)})}function Lo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function oc(e,i){for(var a=i+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Jr(e,a),u!=null&&o.unshift(Lo(e,u,f)),u=Jr(e,i),u!=null&&o.push(Lo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Wy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cg(e,i,a,o,u){for(var f=i._reactName,_=[];a!==null&&a!==o;){var A=a,G=A.alternate,et=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||et===null||(G=et,u?(et=Jr(a,f),et!=null&&_.unshift(Lo(a,et,G))):u||(et=Jr(a,f),et!=null&&_.push(Lo(a,et,G)))),a=a.return}_.length!==0&&e.push({event:i,listeners:_})}var Yy=/\r\n?/g,jy=/\u0000|\uFFFD/g;function wg(e){return(typeof e=="string"?e:""+e).replace(Yy,`
`).replace(jy,"")}function Dg(e,i){return i=wg(i),wg(e)===i}function He(e,i,a,o,u,f){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||On(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&On(e,""+o);break;case"className":ae(e,"class",o);break;case"tabIndex":ae(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(e,a,o);break;case"style":$i(e,o,f);break;case"data":if(i!=="object"){ae(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(i!=="input"&&He(e,i,"name",u.name,u,null),He(e,i,"formEncType",u.formEncType,u,null),He(e,i,"formMethod",u.formMethod,u,null),He(e,i,"formTarget",u.formTarget,u,null)):(He(e,i,"encType",u.encType,u,null),He(e,i,"method",u.method,u,null),He(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ta);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),te(e,"popover",o);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":te(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mx.get(a)||a,te(e,a,o))}}function ah(e,i,a,o,u,f){switch(a){case"style":$i(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?On(e,o):(typeof o=="number"||typeof o=="bigint")&&On(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(i,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):te(e,a,o)}}}function Tn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:He(e,i,f,_,a,null)}}u&&He(e,i,"srcSet",a.srcSet,a,null),o&&He(e,i,"src",a.src,a,null);return;case"input":_e("invalid",e);var A=f=_=u=null,G=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":_=ht;break;case"checked":G=ht;break;case"defaultChecked":et=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,i));break;default:He(e,i,o,ht,a,null)}}jn(e,f,A,G,et,_,u,!1);return;case"select":_e("invalid",e),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":o=A;default:He(e,i,u,A,a,null)}i=f,a=_,e.multiple=!!o,i!=null?Zn(e,!!o,i,!1):a!=null&&Zn(e,!!o,a,!0);return;case"textarea":_e("invalid",e),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:He(e,i,_,A,a,null)}rn(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":He(e,i,G,o,a,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<Uo.length;o++)_e(Uo[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:He(e,i,et,o,a,null)}return;default:if(Ys(i)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&ah(e,i,ht,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&He(e,i,A,o,a,null))}function Zy(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,A=null,G=null,et=null,ht=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":G=_t;default:o.hasOwnProperty(ot)||He(e,i,ot,null,o,_t)}}for(var at in o){var ot=o[at];if(_t=a[at],o.hasOwnProperty(at)&&(ot!=null||_t!=null))switch(at){case"type":f=ot;break;case"name":u=ot;break;case"checked":et=ot;break;case"defaultChecked":ht=ot;break;case"value":_=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,i));break;default:ot!==_t&&He(e,i,at,ot,o,_t)}}Nn(e,_,A,G,et,ht,f,u);return;case"select":ot=_=A=at=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ot=G;default:o.hasOwnProperty(f)||He(e,i,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":at=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==G&&He(e,i,u,f,o,G)}i=A,a=_,o=ot,at!=null?Zn(e,!!a,at,!1):!!o!=!!a&&(i!=null?Zn(e,!!a,i,!0):Zn(e,!!a,a?[]:"",!1));return;case"textarea":ot=at=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,i,A,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":at=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&He(e,i,_,u,o,f)}Ne(e,at,ot);return;case"option":for(var Ht in a)at=a[Ht],a.hasOwnProperty(Ht)&&at!=null&&!o.hasOwnProperty(Ht)&&(Ht==="selected"?e.selected=!1:He(e,i,Ht,null,o,at));for(G in o)at=o[G],ot=a[G],o.hasOwnProperty(G)&&at!==ot&&(at!=null||ot!=null)&&(G==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":He(e,i,G,at,o,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)at=a[Qt],a.hasOwnProperty(Qt)&&at!=null&&!o.hasOwnProperty(Qt)&&He(e,i,Qt,null,o,at);for(et in o)if(at=o[et],ot=a[et],o.hasOwnProperty(et)&&at!==ot&&(at!=null||ot!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,i));break;default:He(e,i,et,at,o,ot)}return;default:if(Ys(i)){for(var Ge in a)at=a[Ge],a.hasOwnProperty(Ge)&&at!==void 0&&!o.hasOwnProperty(Ge)&&ah(e,i,Ge,void 0,o,at);for(ht in o)at=o[ht],ot=a[ht],!o.hasOwnProperty(ht)||at===ot||at===void 0&&ot===void 0||ah(e,i,ht,at,o,ot);return}}for(var j in a)at=a[j],a.hasOwnProperty(j)&&at!=null&&!o.hasOwnProperty(j)&&He(e,i,j,null,o,at);for(_t in o)at=o[_t],ot=a[_t],!o.hasOwnProperty(_t)||at===ot||at==null&&ot==null||He(e,i,_t,at,o,ot)}function Ug(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ky(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,A=u.duration;if(f&&A&&Ug(_)){for(_=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],et=G.startTime;if(et>A)break;var ht=G.transferSize,_t=G.initiatorType;ht&&Ug(_t)&&(G=G.responseEnd,_+=ht*(G<A?1:(A-et)/(G-et)))}if(--o,i+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sh=null,rh=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function Lg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ng(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function oh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lh=null;function Qy(){var e=window.event;return e&&e.type==="popstate"?e===lh?!1:(lh=e,!0):(lh=null,!1)}var Og=typeof setTimeout=="function"?setTimeout:void 0,Jy=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(e){return Pg.resolve(null).then(e).catch(tS)}:Og;function tS(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function Bg(e,i){var a=i,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),br(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")No(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,No(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[ds]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&No(e.ownerDocument.body);a=u}while(a);br(i)}function Fg(e,i){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ch(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ch(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function eS(e,i,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ds])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function nS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function Ig(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=pi(e.nextSibling),e===null))return null;return e}function uh(e){return e.data==="$?"||e.data==="$~"}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iS(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function pi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var hh=null;function zg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return pi(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function Hg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function Gg(e,i,a){switch(i=lc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function No(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Qr(e)}var mi=new Map,Vg=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=I.d;I.d={f:aS,r:sS,D:rS,C:oS,L:lS,m:cS,X:fS,S:uS,M:hS};function aS(){var e=_a.f(),i=tc();return e||i}function sS(e){var i=Ua(e);i!==null&&i.tag===5&&i.type==="form"?s_(i):_a.r(e)}var Sr=typeof document>"u"?null:document;function kg(e,i,a){var o=Sr;if(o&&typeof i=="string"&&i){var u=ne(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Vg.has(u)||(Vg.add(u),e={rel:e,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Tn(i,"link",e),X(i),o.head.appendChild(i)))}}function rS(e){_a.D(e),kg("dns-prefetch",e,null)}function oS(e,i){_a.C(e,i),kg("preconnect",e,i)}function lS(e,i,a){_a.L(e,i,a);var o=Sr;if(o&&e&&i){var u='link[rel="preload"][as="'+ne(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ne(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ne(a.imageSizes)+'"]')):u+='[href="'+ne(e)+'"]';var f=u;switch(i){case"style":f=Mr(e);break;case"script":f=Er(e)}mi.has(f)||(e=x({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),mi.set(f,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(Oo(f))||i==="script"&&o.querySelector(Po(f))||(i=o.createElement("link"),Tn(i,"link",e),X(i),o.head.appendChild(i)))}}function cS(e,i){_a.m(e,i);var a=Sr;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+ne(o)+'"][href="'+ne(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(e)}if(!mi.has(f)&&(e=x({rel:"modulepreload",href:e},i),mi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(f)))return}o=a.createElement("link"),Tn(o,"link",e),X(o),a.head.appendChild(o)}}}function uS(e,i,a){_a.S(e,i,a);var o=Sr;if(o&&e){var u=R(o).hoistableStyles,f=Mr(e);i=i||"default";var _=u.get(f);if(!_){var A={loading:0,preload:null};if(_=o.querySelector(Oo(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":i},a),(a=mi.get(f))&&dh(e,a);var G=_=o.createElement("link");X(G),Tn(G,"link",e),G._p=new Promise(function(et,ht){G.onload=et,G.onerror=ht}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,uc(_,i,o)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(f,_)}}}function fS(e,i){_a.X(e,i);var a=Sr;if(a&&e){var o=R(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Po(u)),f||(e=x({src:e,async:!0},i),(i=mi.get(u))&&ph(e,i),f=a.createElement("script"),X(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function hS(e,i){_a.M(e,i);var a=Sr;if(a&&e){var o=R(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Po(u)),f||(e=x({src:e,async:!0,type:"module"},i),(i=mi.get(u))&&ph(e,i),f=a.createElement("script"),X(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Xg(e,i,a,o){var u=(u=it.current)?cc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Mr(a.href),a=R(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Mr(a.href);var f=R(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Oo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||dS(u,e,a,_.state))),i&&o===null)throw Error(s(528,""));return _}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Er(a),a=R(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Mr(e){return'href="'+ne(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function qg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function dS(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Tn(i,"link",a),X(i),e.head.appendChild(i))}function Er(e){return'[src="'+ne(e)+'"]'}function Po(e){return"script[async]"+e}function Wg(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+ne(a.href)+'"]');if(o)return i.instance=o,X(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),Tn(o,"style",u),uc(o,a.precedence,e),i.instance=o;case"stylesheet":u=Mr(a.href);var f=e.querySelector(Oo(u));if(f)return i.state.loading|=4,i.instance=f,X(f),f;o=qg(a),(u=mi.get(u))&&dh(o,u),f=(e.ownerDocument||e).createElement("link"),X(f);var _=f;return _._p=new Promise(function(A,G){_.onload=A,_.onerror=G}),Tn(f,"link",o),i.state.loading|=4,uc(f,a.precedence,e),i.instance=f;case"script":return f=Er(a.src),(u=e.querySelector(Po(f)))?(i.instance=u,X(u),u):(o=a,(u=mi.get(f))&&(o=x({},a),ph(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),Tn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,uc(o,a.precedence,e));return i.instance}function uc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var A=o[_];if(A.dataset.precedence===i)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function dh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ph(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var fc=null;function Yg(e,i,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ds]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(i)||"";_=e+_;var A=o.get(_);A?A.push(f):o.set(_,[f])}}return o}function jg(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function pS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function mS(e,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Mr(o.href),f=i.querySelector(Oo(u));if(f){i=f._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=hc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=f,X(f);return}f=i.ownerDocument||i,o=qg(o),(u=mi.get(u))&&dh(o,u),f=f.createElement("link"),X(f);var _=f;_._p=new Promise(function(A,G){_.onload=A,_.onerror=G}),Tn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var mh=0;function _S(e,i){return e.stylesheets&&e.count===0&&pc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+i);0<e.imgBytes&&mh===0&&(mh=62500*Ky());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>mh?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function pc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,i.forEach(gS,e),dc=null,hc.call(e))}function gS(e,i){if(!(i.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=i.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Bo={$$typeof:P,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function vS(e,i,a,o,u,f,_,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Kg(e,i,a,o,u,f,_,A,G,et,ht,_t){return e=new vS(e,i,a,_,G,et,ht,_t,A),i=1,f===!0&&(i|=24),f=Qn(3,null,null,i),e.current=f,f.stateNode=e,i=Yu(),i.refCount++,e.pooledCache=i,i.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:i},Qu(f),e}function Qg(e){return e?(e=tr,e):tr}function Jg(e,i,a,o,u,f){u=Qg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(i),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(e,o,i),a!==null&&(Xn(a,e,i),po(a,e,i))}function $g(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function _h(e,i){$g(e,i),(e=e.alternate)&&$g(e,i)}function t0(e){if(e.tag===13||e.tag===31){var i=vs(e,67108864);i!==null&&Xn(i,e,67108864),_h(e,67108864)}}function e0(e){if(e.tag===13||e.tag===31){var i=ni();i=Xs(i);var a=vs(e,i);a!==null&&Xn(a,e,i),_h(e,i)}}var mc=!0;function xS(e,i,a,o){var u=N.T;N.T=null;var f=I.p;try{I.p=2,gh(e,i,a,o)}finally{I.p=f,N.T=u}}function yS(e,i,a,o){var u=N.T;N.T=null;var f=I.p;try{I.p=8,gh(e,i,a,o)}finally{I.p=f,N.T=u}}function gh(e,i,a,o){if(mc){var u=vh(o);if(u===null)ih(e,i,o,_c,a),i0(e,o);else if(MS(u,e,i,a,o))o.stopPropagation();else if(i0(e,o),i&4&&-1<SS.indexOf(e)){for(;u!==null;){var f=Ua(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=St(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var G=1<<31-Lt(_);A.entanglements[1]|=G,_&=~G}zi(f),(Ue&6)===0&&(Jl=M()+500,Do(0))}}break;case 31:case 13:A=vs(f,2),A!==null&&Xn(A,f,2),tc(),_h(f,2)}if(f=vh(o),f===null&&ih(e,i,o,_c,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ih(e,i,o,null,a)}}function vh(e){return e=xu(e),xh(e)}var _c=null;function xh(e){if(_c=null,e=Da(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=h(i),e!==null)return e;e=null}else if(a===31){if(e=p(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return _c=e,null}function n0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case pt:return 2;case xt:return 8;case ft:case kt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var yh=!1,Ka=null,Qa=null,Ja=null,Fo=new Map,Io=new Map,$a=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i0(e,i){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(i.pointerId)}}function zo(e,i,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},i!==null&&(i=Ua(i),i!==null&&t0(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function MS(e,i,a,o,u){switch(i){case"focusin":return Ka=zo(Ka,e,i,a,o,u),!0;case"dragenter":return Qa=zo(Qa,e,i,a,o,u),!0;case"mouseover":return Ja=zo(Ja,e,i,a,o,u),!0;case"pointerover":var f=u.pointerId;return Fo.set(f,zo(Fo.get(f)||null,e,i,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Io.set(f,zo(Io.get(f)||null,e,i,a,o,u)),!0}return!1}function a0(e){var i=Da(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){e.blockedOn=i,Ws(e.priority,function(){e0(a)});return}}else if(i===31){if(i=p(a),i!==null){e.blockedOn=i,Ws(e.priority,function(){e0(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=vh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return i=Ua(a),i!==null&&t0(i),e.blockedOn=a,!1;i.shift()}return!0}function s0(e,i,a){gc(e)&&a.delete(i)}function ES(){yh=!1,Ka!==null&&gc(Ka)&&(Ka=null),Qa!==null&&gc(Qa)&&(Qa=null),Ja!==null&&gc(Ja)&&(Ja=null),Fo.forEach(s0),Io.forEach(s0)}function vc(e,i){e.blockedOn===i&&(e.blockedOn=null,yh||(yh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ES)))}var xc=null;function r0(e){xc!==e&&(xc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===e&&(xc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(xh(o||a)===null)continue;break}var f=Ua(a);f!==null&&(e.splice(i,3),i-=3,vf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function br(e){function i(G){return vc(G,e)}Ka!==null&&vc(Ka,e),Qa!==null&&vc(Qa,e),Ja!==null&&vc(Ja,e),Fo.forEach(i),Io.forEach(i);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)a0(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[pn]||null;if(typeof f=="function")_||r0(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[pn]||null)A=_.formAction;else if(xh(u)!==null)continue}else A=_.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),r0(a)}}}function o0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Sh(e){this._internalRoot=e}yc.prototype.render=Sh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=ni();Jg(a,o,e,i,null,null)},yc.prototype.unmount=Sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Jg(e.current,2,null,e,null,null),tc(),i[Ji]=null}};function yc(e){this._internalRoot=e}yc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Pi();e={blockedOn:null,target:e,priority:i};for(var a=0;a<$a.length&&i!==0&&i<$a[a].priority;a++);$a.splice(a,0,e),a===0&&a0(e)}};var l0=t.version;if(l0!=="19.2.4")throw Error(s(527,l0,"19.2.4"));I.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(i),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var bS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{Mt=Sc.inject(bS),yt=Sc}catch{}}return Go.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",u=m_,f=__,_=g_;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError)),i=Kg(e,1,!1,null,null,a,o,null,u,f,_,o0),e[Ji]=i.current,nh(e),new Sh(i)},Go.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=m_,_=__,A=g_,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),i=Kg(e,1,!0,i,a??null,o,u,G,f,_,A,o0),i.context=Qg(null),a=i.current,o=ni(),o=Xs(o),u=Ia(o),u.callback=null,za(a,u,o),a=o,i.current.lanes=a,Un(i,a),zi(i),e[Ji]=i.current,nh(e),new yc(i)},Go.version="19.2.4",Go}var v0;function OS(){if(v0)return bh.exports;v0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bh.exports=NS(),bh.exports}var PS=OS();const Zi=Object.create(null);Zi.open="0";Zi.close="1";Zi.ping="2";Zi.pong="3";Zi.message="4";Zi.upgrade="5";Zi.noop="6";const Kc=Object.create(null);Object.keys(Zi).forEach(r=>{Kc[Zi[r]]=r});const fd={type:"error",data:"parser error"},wv=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Dv=typeof ArrayBuffer=="function",Uv=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,hp=({type:r,data:t},n,s)=>wv&&t instanceof Blob?n?s(t):x0(t,s):Dv&&(t instanceof ArrayBuffer||Uv(t))?n?s(t):x0(new Blob([t]),s):s(Zi[r]+(t||"")),x0=(r,t)=>{const n=new FileReader;return n.onload=function(){const s=n.result.split(",")[1];t("b"+(s||""))},n.readAsDataURL(r)};function y0(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let Ch;function BS(r,t){if(wv&&r.data instanceof Blob)return r.data.arrayBuffer().then(y0).then(t);if(Dv&&(r.data instanceof ArrayBuffer||Uv(r.data)))return t(y0(r.data));hp(r,!1,n=>{Ch||(Ch=new TextEncoder),t(Ch.encode(n))})}const S0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ko=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<S0.length;r++)Ko[S0.charCodeAt(r)]=r;const FS=r=>{let t=r.length*.75,n=r.length,s,l=0,c,h,p,m;r[r.length-1]==="="&&(t--,r[r.length-2]==="="&&t--);const d=new ArrayBuffer(t),v=new Uint8Array(d);for(s=0;s<n;s+=4)c=Ko[r.charCodeAt(s)],h=Ko[r.charCodeAt(s+1)],p=Ko[r.charCodeAt(s+2)],m=Ko[r.charCodeAt(s+3)],v[l++]=c<<2|h>>4,v[l++]=(h&15)<<4|p>>2,v[l++]=(p&3)<<6|m&63;return d},IS=typeof ArrayBuffer=="function",dp=(r,t)=>{if(typeof r!="string")return{type:"message",data:Lv(r,t)};const n=r.charAt(0);return n==="b"?{type:"message",data:zS(r.substring(1),t)}:Kc[n]?r.length>1?{type:Kc[n],data:r.substring(1)}:{type:Kc[n]}:fd},zS=(r,t)=>{if(IS){const n=FS(r);return Lv(n,t)}else return{base64:!0,data:r}},Lv=(r,t)=>t==="blob"?r instanceof Blob?r:new Blob([r]):r instanceof ArrayBuffer?r:r.buffer,Nv="",HS=(r,t)=>{const n=r.length,s=new Array(n);let l=0;r.forEach((c,h)=>{hp(c,!1,p=>{s[h]=p,++l===n&&t(s.join(Nv))})})},GS=(r,t)=>{const n=r.split(Nv),s=[];for(let l=0;l<n.length;l++){const c=dp(n[l],t);if(s.push(c),c.type==="error")break}return s};function VS(){return new TransformStream({transform(r,t){BS(r,n=>{const s=n.length;let l;if(s<126)l=new Uint8Array(1),new DataView(l.buffer).setUint8(0,s);else if(s<65536){l=new Uint8Array(3);const c=new DataView(l.buffer);c.setUint8(0,126),c.setUint16(1,s)}else{l=new Uint8Array(9);const c=new DataView(l.buffer);c.setUint8(0,127),c.setBigUint64(1,BigInt(s))}r.data&&typeof r.data!="string"&&(l[0]|=128),t.enqueue(l),t.enqueue(n)})}})}let wh;function Mc(r){return r.reduce((t,n)=>t+n.length,0)}function Ec(r,t){if(r[0].length===t)return r.shift();const n=new Uint8Array(t);let s=0;for(let l=0;l<t;l++)n[l]=r[0][s++],s===r[0].length&&(r.shift(),s=0);return r.length&&s<r[0].length&&(r[0]=r[0].slice(s)),n}function kS(r,t){wh||(wh=new TextDecoder);const n=[];let s=0,l=-1,c=!1;return new TransformStream({transform(h,p){for(n.push(h);;){if(s===0){if(Mc(n)<1)break;const m=Ec(n,1);c=(m[0]&128)===128,l=m[0]&127,l<126?s=3:l===126?s=1:s=2}else if(s===1){if(Mc(n)<2)break;const m=Ec(n,2);l=new DataView(m.buffer,m.byteOffset,m.length).getUint16(0),s=3}else if(s===2){if(Mc(n)<8)break;const m=Ec(n,8),d=new DataView(m.buffer,m.byteOffset,m.length),v=d.getUint32(0);if(v>Math.pow(2,21)-1){p.enqueue(fd);break}l=v*Math.pow(2,32)+d.getUint32(4),s=3}else{if(Mc(n)<l)break;const m=Ec(n,l);p.enqueue(dp(c?m:wh.decode(m),t)),s=0}if(l===0||l>r){p.enqueue(fd);break}}}})}const Ov=4;function dn(r){if(r)return XS(r)}function XS(r){for(var t in dn.prototype)r[t]=dn.prototype[t];return r}dn.prototype.on=dn.prototype.addEventListener=function(r,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(t),this};dn.prototype.once=function(r,t){function n(){this.off(r,n),t.apply(this,arguments)}return n.fn=t,this.on(r,n),this};dn.prototype.off=dn.prototype.removeListener=dn.prototype.removeAllListeners=dn.prototype.removeEventListener=function(r,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+r];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var s,l=0;l<n.length;l++)if(s=n[l],s===t||s.fn===t){n.splice(l,1);break}return n.length===0&&delete this._callbacks["$"+r],this};dn.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+r],s=1;s<arguments.length;s++)t[s-1]=arguments[s];if(n){n=n.slice(0);for(var s=0,l=n.length;s<l;++s)n[s].apply(this,t)}return this};dn.prototype.emitReserved=dn.prototype.emit;dn.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};dn.prototype.hasListeners=function(r){return!!this.listeners(r).length};const fu=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,n)=>n(t,0),vi=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),qS="arraybuffer";function Pv(r,...t){return t.reduce((n,s)=>(r.hasOwnProperty(s)&&(n[s]=r[s]),n),{})}const WS=vi.setTimeout,YS=vi.clearTimeout;function hu(r,t){t.useNativeTimers?(r.setTimeoutFn=WS.bind(vi),r.clearTimeoutFn=YS.bind(vi)):(r.setTimeoutFn=vi.setTimeout.bind(vi),r.clearTimeoutFn=vi.clearTimeout.bind(vi))}const jS=1.33;function ZS(r){return typeof r=="string"?KS(r):Math.ceil((r.byteLength||r.size)*jS)}function KS(r){let t=0,n=0;for(let s=0,l=r.length;s<l;s++)t=r.charCodeAt(s),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(s++,n+=4);return n}function Bv(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function QS(r){let t="";for(let n in r)r.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(r[n]));return t}function JS(r){let t={},n=r.split("&");for(let s=0,l=n.length;s<l;s++){let c=n[s].split("=");t[decodeURIComponent(c[0])]=decodeURIComponent(c[1])}return t}class $S extends Error{constructor(t,n,s){super(t),this.description=n,this.context=s,this.type="TransportError"}}class pp extends dn{constructor(t){super(),this.writable=!1,hu(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,n,s){return super.emitReserved("error",new $S(t,n,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const n=dp(t,this.socket.binaryType);this.onPacket(n)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,n={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const n=QS(t);return n.length?"?"+n:""}}class tM extends pp{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const n=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let s=0;this._polling&&(s++,this.once("pollComplete",function(){--s||n()})),this.writable||(s++,this.once("drain",function(){--s||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const n=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};GS(t,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,HS(t,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Bv()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(t,n)}}let Fv=!1;try{Fv=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const eM=Fv;function nM(){}class iM extends tM{constructor(t){if(super(t),typeof location<"u"){const n=location.protocol==="https:";let s=location.port;s||(s=n?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||s!==t.port}}doWrite(t,n){const s=this.request({method:"POST",data:t});s.on("success",n),s.on("error",(l,c)=>{this.onError("xhr post error",l,c)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(n,s)=>{this.onError("xhr poll error",n,s)}),this.pollXhr=t}}class qi extends dn{constructor(t,n,s){super(),this.createRequest=t,hu(this,s),this._opts=s,this._method=s.method||"GET",this._uri=n,this._data=s.data!==void 0?s.data:null,this._create()}_create(){var t;const n=Pv(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const s=this._xhr=this.createRequest(n);try{s.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let l in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(l)&&s.setRequestHeader(l,this._opts.extraHeaders[l])}}catch{}if(this._method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{s.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(s),"withCredentials"in s&&(s.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(s.timeout=this._opts.requestTimeout),s.onreadystatechange=()=>{var l;s.readyState===3&&((l=this._opts.cookieJar)===null||l===void 0||l.parseCookies(s.getResponseHeader("set-cookie"))),s.readyState===4&&(s.status===200||s.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof s.status=="number"?s.status:0)},0))},s.send(this._data)}catch(l){this.setTimeoutFn(()=>{this._onError(l)},0);return}typeof document<"u"&&(this._index=qi.requestsCount++,qi.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=nM,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete qi.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}qi.requestsCount=0;qi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",M0);else if(typeof addEventListener=="function"){const r="onpagehide"in vi?"pagehide":"unload";addEventListener(r,M0,!1)}}function M0(){for(let r in qi.requests)qi.requests.hasOwnProperty(r)&&qi.requests[r].abort()}const aM=(function(){const r=Iv({xdomain:!1});return r&&r.responseType!==null})();class sM extends iM{constructor(t){super(t);const n=t&&t.forceBase64;this.supportsBinary=aM&&!n}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new qi(Iv,this.uri(),t)}}function Iv(r){const t=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||eM))return new XMLHttpRequest}catch{}if(!t)try{return new vi[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const zv=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class rM extends pp{get name(){return"websocket"}doOpen(){const t=this.uri(),n=this.opts.protocols,s=zv?{}:Pv(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,n,s)}catch(l){return this.emitReserved("error",l)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const s=t[n],l=n===t.length-1;hp(s,this.supportsBinary,c=>{try{this.doWrite(s,c)}catch{}l&&fu(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Bv()),this.supportsBinary||(n.b64=1),this.createUri(t,n)}}const Dh=vi.WebSocket||vi.MozWebSocket;class oM extends rM{createSocket(t,n,s){return zv?new Dh(t,n,s):n?new Dh(t,n):new Dh(t)}doWrite(t,n){this.ws.send(n)}}class lM extends pp{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const n=kS(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=t.readable.pipeThrough(n).getReader(),l=VS();l.readable.pipeTo(t.writable),this._writer=l.writable.getWriter();const c=()=>{s.read().then(({done:p,value:m})=>{p||(this.onPacket(m),c())}).catch(p=>{})};c();const h={type:"open"};this.query.sid&&(h.data=`{"sid":"${this.query.sid}"}`),this._writer.write(h).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const s=t[n],l=n===t.length-1;this._writer.write(s).then(()=>{l&&fu(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const cM={websocket:oM,webtransport:lM,polling:sM},uM=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,fM=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function hd(r){if(r.length>8e3)throw"URI too long";const t=r,n=r.indexOf("["),s=r.indexOf("]");n!=-1&&s!=-1&&(r=r.substring(0,n)+r.substring(n,s).replace(/:/g,";")+r.substring(s,r.length));let l=uM.exec(r||""),c={},h=14;for(;h--;)c[fM[h]]=l[h]||"";return n!=-1&&s!=-1&&(c.source=t,c.host=c.host.substring(1,c.host.length-1).replace(/;/g,":"),c.authority=c.authority.replace("[","").replace("]","").replace(/;/g,":"),c.ipv6uri=!0),c.pathNames=hM(c,c.path),c.queryKey=dM(c,c.query),c}function hM(r,t){const n=/\/{2,9}/g,s=t.replace(n,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&s.splice(0,1),t.slice(-1)=="/"&&s.splice(s.length-1,1),s}function dM(r,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,l,c){l&&(n[l]=c)}),n}const dd=typeof addEventListener=="function"&&typeof removeEventListener=="function",Qc=[];dd&&addEventListener("offline",()=>{Qc.forEach(r=>r())},!1);class us extends dn{constructor(t,n){if(super(),this.binaryType=qS,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(n=t,t=null),t){const s=hd(t);n.hostname=s.host,n.secure=s.protocol==="https"||s.protocol==="wss",n.port=s.port,s.query&&(n.query=s.query)}else n.host&&(n.hostname=hd(n.host).host);hu(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(s=>{const l=s.prototype.name;this.transports.push(l),this._transportsByName[l]=s}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=JS(this.opts.query)),dd&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Qc.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const n=Object.assign({},this.opts.query);n.EIO=Ov,n.transport=t,this.id&&(n.sid=this.id);const s=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](s)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&us.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(t);n.open(),this.setTransport(n)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",us.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=t.data,this._onError(n);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let s=0;s<this.writeBuffer.length;s++){const l=this.writeBuffer[s].data;if(l&&(n+=ZS(l)),s>0&&n>this._maxPayload)return this.writeBuffer.slice(0,s);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,fu(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,n,s){return this._sendPacket("message",t,n,s),this}send(t,n,s){return this._sendPacket("message",t,n,s),this}_sendPacket(t,n,s,l){if(typeof n=="function"&&(l=n,n=void 0),typeof s=="function"&&(l=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const c={type:t,data:n,options:s};this.emitReserved("packetCreate",c),this.writeBuffer.push(c),l&&this.once("flush",l),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),t()},s=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():t()}):this.upgrading?s():t()),this}_onError(t){if(us.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),dd&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const s=Qc.indexOf(this._offlineEventListener);s!==-1&&Qc.splice(s,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,n),this.writeBuffer=[],this._prevBufferLen=0}}}us.protocol=Ov;class pM extends us{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let n=this.createTransport(t),s=!1;us.priorWebsocketSuccess=!1;const l=()=>{s||(n.send([{type:"ping",data:"probe"}]),n.once("packet",x=>{if(!s)if(x.type==="pong"&&x.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;us.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(v(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const g=new Error("probe error");g.transport=n.name,this.emitReserved("upgradeError",g)}}))};function c(){s||(s=!0,v(),n.close(),n=null)}const h=x=>{const g=new Error("probe error: "+x);g.transport=n.name,c(),this.emitReserved("upgradeError",g)};function p(){h("transport closed")}function m(){h("socket closed")}function d(x){n&&x.name!==n.name&&c()}const v=()=>{n.removeListener("open",l),n.removeListener("error",h),n.removeListener("close",p),this.off("close",m),this.off("upgrading",d)};n.once("open",l),n.once("error",h),n.once("close",p),this.once("close",m),this.once("upgrading",d),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{s||n.open()},200):n.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const n=[];for(let s=0;s<t.length;s++)~this.transports.indexOf(t[s])&&n.push(t[s]);return n}}let mM=class extends pM{constructor(t,n={}){const s=typeof t=="object"?t:n;(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(l=>cM[l]).filter(l=>!!l)),super(t,s)}};function _M(r,t="",n){let s=r;n=n||typeof location<"u"&&location,r==null&&(r=n.protocol+"//"+n.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=n.protocol+r:r=n.host+r),/^(https?|wss?):\/\//.test(r)||(typeof n<"u"?r=n.protocol+"//"+r:r="https://"+r),s=hd(r)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const c=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+c+":"+s.port+t,s.href=s.protocol+"://"+c+(n&&n.port===s.port?"":":"+s.port),s}const gM=typeof ArrayBuffer=="function",vM=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,Hv=Object.prototype.toString,xM=typeof Blob=="function"||typeof Blob<"u"&&Hv.call(Blob)==="[object BlobConstructor]",yM=typeof File=="function"||typeof File<"u"&&Hv.call(File)==="[object FileConstructor]";function mp(r){return gM&&(r instanceof ArrayBuffer||vM(r))||xM&&r instanceof Blob||yM&&r instanceof File}function Jc(r,t){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let n=0,s=r.length;n<s;n++)if(Jc(r[n]))return!0;return!1}if(mp(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return Jc(r.toJSON(),!0);for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)&&Jc(r[n]))return!0;return!1}function SM(r){const t=[],n=r.data,s=r;return s.data=pd(n,t),s.attachments=t.length,{packet:s,buffers:t}}function pd(r,t){if(!r)return r;if(mp(r)){const n={_placeholder:!0,num:t.length};return t.push(r),n}else if(Array.isArray(r)){const n=new Array(r.length);for(let s=0;s<r.length;s++)n[s]=pd(r[s],t);return n}else if(typeof r=="object"&&!(r instanceof Date)){const n={};for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=pd(r[s],t));return n}return r}function MM(r,t){return r.data=md(r.data,t),delete r.attachments,r}function md(r,t){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<t.length)return t[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let n=0;n<r.length;n++)r[n]=md(r[n],t);else if(typeof r=="object")for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(r[n]=md(r[n],t));return r}const EM=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Me;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(Me||(Me={}));class bM{constructor(t){this.replacer=t}encode(t){return(t.type===Me.EVENT||t.type===Me.ACK)&&Jc(t)?this.encodeAsBinary({type:t.type===Me.EVENT?Me.BINARY_EVENT:Me.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let n=""+t.type;return(t.type===Me.BINARY_EVENT||t.type===Me.BINARY_ACK)&&(n+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(n+=t.nsp+","),t.id!=null&&(n+=t.id),t.data!=null&&(n+=JSON.stringify(t.data,this.replacer)),n}encodeAsBinary(t){const n=SM(t),s=this.encodeAsString(n.packet),l=n.buffers;return l.unshift(s),l}}class _p extends dn{constructor(t){super(),this.reviver=t}add(t){let n;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(t);const s=n.type===Me.BINARY_EVENT;s||n.type===Me.BINARY_ACK?(n.type=s?Me.EVENT:Me.ACK,this.reconstructor=new TM(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(mp(t)||t.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let n=0;const s={type:Number(t.charAt(0))};if(Me[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===Me.BINARY_EVENT||s.type===Me.BINARY_ACK){const c=n+1;for(;t.charAt(++n)!=="-"&&n!=t.length;);const h=t.substring(c,n);if(h!=Number(h)||t.charAt(n)!=="-")throw new Error("Illegal attachments");s.attachments=Number(h)}if(t.charAt(n+1)==="/"){const c=n+1;for(;++n&&!(t.charAt(n)===","||n===t.length););s.nsp=t.substring(c,n)}else s.nsp="/";const l=t.charAt(n+1);if(l!==""&&Number(l)==l){const c=n+1;for(;++n;){const h=t.charAt(n);if(h==null||Number(h)!=h){--n;break}if(n===t.length)break}s.id=Number(t.substring(c,n+1))}if(t.charAt(++n)){const c=this.tryParse(t.substr(n));if(_p.isPayloadValid(s.type,c))s.data=c;else throw new Error("invalid payload")}return s}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,n){switch(t){case Me.CONNECT:return E0(n);case Me.DISCONNECT:return n===void 0;case Me.CONNECT_ERROR:return typeof n=="string"||E0(n);case Me.EVENT:case Me.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&EM.indexOf(n[0])===-1);case Me.ACK:case Me.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class TM{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const n=MM(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function E0(r){return Object.prototype.toString.call(r)==="[object Object]"}const AM=Object.freeze(Object.defineProperty({__proto__:null,Decoder:_p,Encoder:bM,get PacketType(){return Me}},Symbol.toStringTag,{value:"Module"}));function Ui(r,t,n){return r.on(t,n),function(){r.off(t,n)}}const RM=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Gv extends dn{constructor(t,n,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=n,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Ui(t,"open",this.onopen.bind(this)),Ui(t,"packet",this.onpacket.bind(this)),Ui(t,"error",this.onerror.bind(this)),Ui(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...n){var s,l,c;if(RM.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(n.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const h={type:Me.EVENT,data:n};if(h.options={},h.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const v=this.ids++,x=n.pop();this._registerAckCallback(v,x),h.id=v}const p=(l=(s=this.io.engine)===null||s===void 0?void 0:s.transport)===null||l===void 0?void 0:l.writable,m=this.connected&&!(!((c=this.io.engine)===null||c===void 0)&&c._hasPingExpired());return this.flags.volatile&&!p||(m?(this.notifyOutgoingListeners(h),this.packet(h)):this.sendBuffer.push(h)),this.flags={},this}_registerAckCallback(t,n){var s;const l=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(l===void 0){this.acks[t]=n;return}const c=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let p=0;p<this.sendBuffer.length;p++)this.sendBuffer[p].id===t&&this.sendBuffer.splice(p,1);n.call(this,new Error("operation has timed out"))},l),h=(...p)=>{this.io.clearTimeoutFn(c),n.apply(this,p)};h.withError=!0,this.acks[t]=h}emitWithAck(t,...n){return new Promise((s,l)=>{const c=(h,p)=>h?l(h):s(p);c.withError=!0,n.push(c),this.emit(t,...n)})}_addToQueue(t){let n;typeof t[t.length-1]=="function"&&(n=t.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((l,...c)=>(this._queue[0],l!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(l)):(this._queue.shift(),n&&n(null,...c)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!t||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Me.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(s=>String(s.id)===t)){const s=this.acks[t];delete this.acks[t],s.withError&&s.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Me.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Me.EVENT:case Me.BINARY_EVENT:this.onevent(t);break;case Me.ACK:case Me.BINARY_ACK:this.onack(t);break;case Me.DISCONNECT:this.ondisconnect();break;case Me.CONNECT_ERROR:this.destroy();const s=new Error(t.data.message);s.data=t.data.data,this.emitReserved("connect_error",s);break}}onevent(t){const n=t.data||[];t.id!=null&&n.push(this.ack(t.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const s of n)s.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const n=this;let s=!1;return function(...l){s||(s=!0,n.packet({type:Me.ACK,id:t,data:l}))}}onack(t){const n=this.acks[t.id];typeof n=="function"&&(delete this.acks[t.id],n.withError&&t.data.unshift(null),n.apply(this,t.data))}onconnect(t,n){this.id=t,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Me.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const n=this._anyListeners;for(let s=0;s<n.length;s++)if(t===n[s])return n.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const n=this._anyOutgoingListeners;for(let s=0;s<n.length;s++)if(t===n[s])return n.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const s of n)s.apply(this,t.data)}}}function jr(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}jr.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*r);r=(Math.floor(t*10)&1)==0?r-n:r+n}return Math.min(r,this.max)|0};jr.prototype.reset=function(){this.attempts=0};jr.prototype.setMin=function(r){this.ms=r};jr.prototype.setMax=function(r){this.max=r};jr.prototype.setJitter=function(r){this.jitter=r};class _d extends dn{constructor(t,n){var s;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(n=t,t=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,hu(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((s=n.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new jr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=t;const l=n.parser||AM;this.encoder=new l.Encoder,this.decoder=new l.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var n;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(n=this.backoff)===null||n===void 0||n.setMin(t),this)}randomizationFactor(t){var n;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(n=this.backoff)===null||n===void 0||n.setJitter(t),this)}reconnectionDelayMax(t){var n;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(n=this.backoff)===null||n===void 0||n.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new mM(this.uri,this.opts);const n=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const l=Ui(n,"open",function(){s.onopen(),t&&t()}),c=p=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",p),t?t(p):this.maybeReconnectOnOpen()},h=Ui(n,"error",c);if(this._timeout!==!1){const p=this._timeout,m=this.setTimeoutFn(()=>{l(),c(new Error("timeout")),n.close()},p);this.opts.autoUnref&&m.unref(),this.subs.push(()=>{this.clearTimeoutFn(m)})}return this.subs.push(l),this.subs.push(h),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Ui(t,"ping",this.onping.bind(this)),Ui(t,"data",this.ondata.bind(this)),Ui(t,"error",this.onerror.bind(this)),Ui(t,"close",this.onclose.bind(this)),Ui(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(n){this.onclose("parse error",n)}}ondecoded(t){fu(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,n){let s=this.nsps[t];return s?this._autoConnect&&!s.active&&s.connect():(s=new Gv(this,t,n),this.nsps[t]=s),s}_destroy(t){const n=Object.keys(this.nsps);for(const s of n)if(this.nsps[s].active)return;this._close()}_packet(t){const n=this.encoder.encode(t);for(let s=0;s<n.length;s++)this.engine.write(n[s],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,n){var s;this.cleanup(),(s=this.engine)===null||s===void 0||s.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(l=>{l?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",l)):t.onreconnect()}))},n);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Vo={};function $c(r,t){typeof r=="object"&&(t=r,r=void 0),t=t||{};const n=_M(r,t.path||"/socket.io"),s=n.source,l=n.id,c=n.path,h=Vo[l]&&c in Vo[l].nsps,p=t.forceNew||t["force new connection"]||t.multiplex===!1||h;let m;return p?m=new _d(s,t):(Vo[l]||(Vo[l]=new _d(s,t)),m=Vo[l]),n.query&&!t.query&&(t.query=n.queryKey),m.socket(n.path,t)}Object.assign($c,{Manager:_d,Socket:Gv,io:$c,connect:$c});const gp="183",Hr={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CM=0,b0=1,wM=2,tu=1,DM=2,Qo=3,fs=0,Yn=1,Ma=2,ba=0,Gr=1,T0=2,A0=3,R0=4,UM=5,Fs=100,LM=101,NM=102,OM=103,PM=104,BM=200,FM=201,IM=202,zM=203,gd=204,vd=205,HM=206,GM=207,VM=208,kM=209,XM=210,qM=211,WM=212,YM=213,jM=214,xd=0,yd=1,Sd=2,kr=3,Md=4,Ed=5,bd=6,Td=7,Vv=0,ZM=1,KM=2,Wi=0,kv=1,Xv=2,qv=3,Wv=4,Yv=5,jv=6,Zv=7,Kv=300,Gs=301,Xr=302,Uh=303,Lh=304,du=306,Ad=1e3,Ea=1001,Rd=1002,An=1003,QM=1004,bc=1005,Dn=1006,Nh=1007,zs=1008,ri=1009,Qv=1010,Jv=1011,tl=1012,vp=1013,Ki=1014,ki=1015,Aa=1016,xp=1017,yp=1018,el=1020,$v=35902,tx=35899,ex=1021,nx=1022,Ni=1023,Ra=1026,Hs=1027,ix=1028,Sp=1029,qr=1030,Mp=1031,Ep=1033,eu=33776,nu=33777,iu=33778,au=33779,Cd=35840,wd=35841,Dd=35842,Ud=35843,Ld=36196,Nd=37492,Od=37496,Pd=37488,Bd=37489,Fd=37490,Id=37491,zd=37808,Hd=37809,Gd=37810,Vd=37811,kd=37812,Xd=37813,qd=37814,Wd=37815,Yd=37816,jd=37817,Zd=37818,Kd=37819,Qd=37820,Jd=37821,$d=36492,tp=36494,ep=36495,np=36283,ip=36284,ap=36285,sp=36286,JM=3200,$M=0,tE=1,ls="",gi="srgb",Wr="srgb-linear",ou="linear",Ie="srgb",Tr=7680,C0=519,eE=512,nE=513,iE=514,bp=515,aE=516,sE=517,Tp=518,rE=519,w0=35044,D0="300 es",Xi=2e3,nl=2001;function oE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lE(){const r=lu("canvas");return r.style.display="block",r}const U0={};function L0(...r){const t="THREE."+r.shift();console.log(t,...r)}function ax(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ie(...r){r=ax(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...r)}}function Te(...r){r=ax(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...r)}}function cu(...r){const t=r.join(" ");t in U0||(U0[t]=!0,ie(...r))}function cE(r,t,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const uE={[xd]:yd,[Sd]:bd,[Md]:Td,[kr]:Ed,[yd]:xd,[bd]:Sd,[Td]:Md,[Ed]:kr};class Vs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=Math.PI/180,rp=180/Math.PI;function al(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[n&63|128]+Cn[n>>8&255]+"-"+Cn[n>>16&255]+Cn[n>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function ge(r,t,n){return Math.max(t,Math.min(n,r))}function fE(r,t){return(r%t+t)%t}function Oh(r,t,n){return(1-n)*r+n*t}function ko(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hE={DEG2RAD:su};class oe{constructor(t=0,n=0){oe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ge(this.x,t.x,n.x),this.y=ge(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ge(this.x,t,n),this.y=ge(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hs{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,h,p){let m=s[l+0],d=s[l+1],v=s[l+2],x=s[l+3],g=c[h+0],E=c[h+1],b=c[h+2],w=c[h+3];if(x!==w||m!==g||d!==E||v!==b){let S=m*g+d*E+v*b+x*w;S<0&&(g=-g,E=-E,b=-b,w=-w,S=-S);let y=1-p;if(S<.9995){const D=Math.acos(S),P=Math.sin(D);y=Math.sin(y*D)/P,p=Math.sin(p*D)/P,m=m*y+g*p,d=d*y+E*p,v=v*y+b*p,x=x*y+w*p}else{m=m*y+g*p,d=d*y+E*p,v=v*y+b*p,x=x*y+w*p;const D=1/Math.sqrt(m*m+d*d+v*v+x*x);m*=D,d*=D,v*=D,x*=D}}t[n]=m,t[n+1]=d,t[n+2]=v,t[n+3]=x}static multiplyQuaternionsFlat(t,n,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],v=s[l+3],x=c[h],g=c[h+1],E=c[h+2],b=c[h+3];return t[n]=p*b+v*x+m*E-d*g,t[n+1]=m*b+v*g+d*x-p*E,t[n+2]=d*b+v*E+p*g-m*x,t[n+3]=v*b-p*x-m*g-d*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),v=p(l/2),x=p(c/2),g=m(s/2),E=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=g*v*x+d*E*b,this._y=d*E*x-g*v*b,this._z=d*v*b+g*E*x,this._w=d*v*x-g*E*b;break;case"YXZ":this._x=g*v*x+d*E*b,this._y=d*E*x-g*v*b,this._z=d*v*b-g*E*x,this._w=d*v*x+g*E*b;break;case"ZXY":this._x=g*v*x-d*E*b,this._y=d*E*x+g*v*b,this._z=d*v*b+g*E*x,this._w=d*v*x-g*E*b;break;case"ZYX":this._x=g*v*x-d*E*b,this._y=d*E*x+g*v*b,this._z=d*v*b-g*E*x,this._w=d*v*x+g*E*b;break;case"YZX":this._x=g*v*x+d*E*b,this._y=d*E*x+g*v*b,this._z=d*v*b-g*E*x,this._w=d*v*x-g*E*b;break;case"XZY":this._x=g*v*x-d*E*b,this._y=d*E*x-g*v*b,this._z=d*v*b+g*E*x,this._w=d*v*x+g*E*b;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],h=n[1],p=n[5],m=n[9],d=n[2],v=n[6],x=n[10],g=s+p+x;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-d)*E,this._z=(h-l)*E}else if(s>p&&s>x){const E=2*Math.sqrt(1+s-p-x);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+d)/E}else if(p>x){const E=2*Math.sqrt(1+p-s-x);this._w=(c-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+x-s-p);this._w=(h-l)/E,this._x=(c+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,h=t._w,p=n._x,m=n._y,d=n._z,v=n._w;return this._x=s*v+h*p+l*d-c*m,this._y=l*v+h*m+c*p-s*d,this._z=c*v+h*d+s*m-l*p,this._w=h*v-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,n){let s=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-n;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,n=Math.sin(n*d)/v,this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+h*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+h*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,n=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(N0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(N0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),v=2*(p*n-c*l),x=2*(c*s-h*n);return this.x=n+m*d+h*x-p*v,this.y=s+m*v+p*d-c*x,this.z=l+m*x+c*v-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ge(this.x,t.x,n.x),this.y=ge(this.y,t.y,n.y),this.z=ge(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ge(this.x,t,n),this.y=ge(this.y,t,n),this.z=ge(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,h=n.x,p=n.y,m=n.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ph.copy(this).projectOnVector(t),this.sub(Ph)}reflect(t){return this.sub(Ph.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ph=new J,N0=new hs;class he{constructor(t,n,s,l,c,h,p,m,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,h,p,m,d)}set(t,n,s,l,c,h,p,m,d){const v=this.elements;return v[0]=t,v[1]=l,v[2]=p,v[3]=n,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],v=s[4],x=s[7],g=s[2],E=s[5],b=s[8],w=l[0],S=l[3],y=l[6],D=l[1],P=l[4],U=l[7],z=l[2],F=l[5],B=l[8];return c[0]=h*w+p*D+m*z,c[3]=h*S+p*P+m*F,c[6]=h*y+p*U+m*B,c[1]=d*w+v*D+x*z,c[4]=d*S+v*P+x*F,c[7]=d*y+v*U+x*B,c[2]=g*w+E*D+b*z,c[5]=g*S+E*P+b*F,c[8]=g*y+E*U+b*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8];return n*h*v-n*p*d-s*c*v+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8],x=v*h-p*d,g=p*m-v*c,E=d*c-h*m,b=n*x+s*g+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=x*w,t[1]=(l*d-v*s)*w,t[2]=(p*s-l*h)*w,t[3]=g*w,t[4]=(v*n-l*m)*w,t[5]=(l*c-p*n)*w,t[6]=E*w,t[7]=(s*m-d*n)*w,t[8]=(h*n-s*c)*w,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+n,0,0,1),this}scale(t,n){return this.premultiply(Bh.makeScale(t,n)),this}rotate(t){return this.premultiply(Bh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Bh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new he,O0=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P0=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dE(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ls?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return cu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return cu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wr]:{primaries:t,whitePoint:s,transfer:ou,toXYZ:O0,fromXYZ:P0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:O0,fromXYZ:P0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}const Ae=dE();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class pE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ar===void 0&&(Ar=lu("canvas")),Ar.width=t.width,Ar.height=t.height;const l=Ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ar}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=lu("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ta(c[h]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Ta(n[s]/255)*255):n[s]=Ta(n[s]);return{data:n,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mE=0;class Ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=al(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Fh(l[h].image)):c.push(Fh(l[h]))}else c=Fh(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function Fh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let _E=0;const Ih=new J;class Fn extends Vs{constructor(t=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,s=Ea,l=Ea,c=Dn,h=zs,p=Ni,m=ri,d=Fn.DEFAULT_ANISOTROPY,v=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=al(),this.name="",this.source=new Ap(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ie(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ad:t.x=t.x-Math.floor(t.x);break;case Ea:t.x=t.x<0?0:1;break;case Rd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ad:t.y=t.y-Math.floor(t.y);break;case Ea:t.y=t.y<0?0:1;break;case Rd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Kv;Fn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,n=0,s=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*n+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*n+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*n+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*n+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const m=t.elements,d=m[0],v=m[4],x=m[8],g=m[1],E=m[5],b=m[9],w=m[2],S=m[6],y=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+w)<.1&&Math.abs(b+S)<.1&&Math.abs(d+E+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(d+1)/2,U=(E+1)/2,z=(y+1)/2,F=(v+g)/4,B=(x+w)/4,T=(b+S)/4;return P>U&&P>z?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=F/s,c=B/s):U>z?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=F/l,c=T/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=B/c,l=T/c),this.set(s,l,c,n),this}let D=Math.sqrt((S-b)*(S-b)+(x-w)*(x-w)+(g-v)*(g-v));return Math.abs(D)<.001&&(D=1),this.x=(S-b)/D,this.y=(x-w)/D,this.z=(g-v)/D,this.w=Math.acos((d+E+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ge(this.x,t.x,n.x),this.y=ge(this.y,t.y,n.y),this.z=ge(this.z,t.z,n.z),this.w=ge(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ge(this.x,t,n),this.y=ge(this.y,t,n),this.z=ge(this.z,t,n),this.w=ge(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gE extends Vs{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new en(0,0,t,n),this.scissorTest=!1,this.viewport=new en(0,0,t,n),this.textures=[];const l={width:t,height:n,depth:s.depth},c=new Fn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Ap(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends gE{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class sx extends Fn{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends Fn{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t,n,s,l,c,h,p,m,d,v,x,g,E,b,w,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,h,p,m,d,v,x,g,E,b,w,S)}set(t,n,s,l,c,h,p,m,d,v,x,g,E,b,w,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=s,y[12]=l,y[1]=c,y[5]=h,y[9]=p,y[13]=m,y[2]=d,y[6]=v,y[10]=x,y[14]=g,y[3]=E,y[7]=b,y[11]=w,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),h=1/Rr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*h,n[9]=s[9]*h,n[10]=s[10]*h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*v,E=h*x,b=p*v,w=p*x;n[0]=m*v,n[4]=-m*x,n[8]=d,n[1]=E+b*d,n[5]=g-w*d,n[9]=-p*m,n[2]=w-g*d,n[6]=b+E*d,n[10]=h*m}else if(t.order==="YXZ"){const g=m*v,E=m*x,b=d*v,w=d*x;n[0]=g+w*p,n[4]=b*p-E,n[8]=h*d,n[1]=h*x,n[5]=h*v,n[9]=-p,n[2]=E*p-b,n[6]=w+g*p,n[10]=h*m}else if(t.order==="ZXY"){const g=m*v,E=m*x,b=d*v,w=d*x;n[0]=g-w*p,n[4]=-h*x,n[8]=b+E*p,n[1]=E+b*p,n[5]=h*v,n[9]=w-g*p,n[2]=-h*d,n[6]=p,n[10]=h*m}else if(t.order==="ZYX"){const g=h*v,E=h*x,b=p*v,w=p*x;n[0]=m*v,n[4]=b*d-E,n[8]=g*d+w,n[1]=m*x,n[5]=w*d+g,n[9]=E*d-b,n[2]=-d,n[6]=p*m,n[10]=h*m}else if(t.order==="YZX"){const g=h*m,E=h*d,b=p*m,w=p*d;n[0]=m*v,n[4]=w-g*x,n[8]=b*x+E,n[1]=x,n[5]=h*v,n[9]=-p*v,n[2]=-d*v,n[6]=E*x+b,n[10]=g-w*x}else if(t.order==="XZY"){const g=h*m,E=h*d,b=p*m,w=p*d;n[0]=m*v,n[4]=-x,n[8]=d*v,n[1]=g*x+w,n[5]=h*v,n[9]=E*x-b,n[2]=b*x-E,n[6]=p*v,n[10]=w*x+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xE,t,yE)}lookAt(t,n,s){const l=this.elements;return ii.subVectors(t,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),es.crossVectors(s,ii),es.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),es.crossVectors(s,ii)),es.normalize(),Tc.crossVectors(ii,es),l[0]=es.x,l[4]=Tc.x,l[8]=ii.x,l[1]=es.y,l[5]=Tc.y,l[9]=ii.y,l[2]=es.z,l[6]=Tc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],v=s[1],x=s[5],g=s[9],E=s[13],b=s[2],w=s[6],S=s[10],y=s[14],D=s[3],P=s[7],U=s[11],z=s[15],F=l[0],B=l[4],T=l[8],C=l[12],ct=l[1],H=l[5],Z=l[9],tt=l[13],st=l[2],K=l[6],N=l[10],I=l[14],lt=l[3],dt=l[7],Et=l[11],O=l[15];return c[0]=h*F+p*ct+m*st+d*lt,c[4]=h*B+p*H+m*K+d*dt,c[8]=h*T+p*Z+m*N+d*Et,c[12]=h*C+p*tt+m*I+d*O,c[1]=v*F+x*ct+g*st+E*lt,c[5]=v*B+x*H+g*K+E*dt,c[9]=v*T+x*Z+g*N+E*Et,c[13]=v*C+x*tt+g*I+E*O,c[2]=b*F+w*ct+S*st+y*lt,c[6]=b*B+w*H+S*K+y*dt,c[10]=b*T+w*Z+S*N+y*Et,c[14]=b*C+w*tt+S*I+y*O,c[3]=D*F+P*ct+U*st+z*lt,c[7]=D*B+P*H+U*K+z*dt,c[11]=D*T+P*Z+U*N+z*Et,c[15]=D*C+P*tt+U*I+z*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],v=t[2],x=t[6],g=t[10],E=t[14],b=t[3],w=t[7],S=t[11],y=t[15],D=m*E-d*g,P=p*E-d*x,U=p*g-m*x,z=h*E-d*v,F=h*g-m*v,B=h*x-p*v;return n*(w*D-S*P+y*U)-s*(b*D-S*z+y*F)+l*(b*P-w*z+y*B)-c*(b*U-w*F+S*B)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8],x=t[9],g=t[10],E=t[11],b=t[12],w=t[13],S=t[14],y=t[15],D=n*p-s*h,P=n*m-l*h,U=n*d-c*h,z=s*m-l*p,F=s*d-c*p,B=l*d-c*m,T=v*w-x*b,C=v*S-g*b,ct=v*y-E*b,H=x*S-g*w,Z=x*y-E*w,tt=g*y-E*S,st=D*tt-P*Z+U*H+z*ct-F*C+B*T;if(st===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/st;return t[0]=(p*tt-m*Z+d*H)*K,t[1]=(l*Z-s*tt-c*H)*K,t[2]=(w*B-S*F+y*z)*K,t[3]=(g*F-x*B-E*z)*K,t[4]=(m*ct-h*tt-d*C)*K,t[5]=(n*tt-l*ct+c*C)*K,t[6]=(S*U-b*B-y*P)*K,t[7]=(v*B-g*U+E*P)*K,t[8]=(h*Z-p*ct+d*T)*K,t[9]=(s*ct-n*Z-c*T)*K,t[10]=(b*F-w*U+y*D)*K,t[11]=(x*U-v*F-E*D)*K,t[12]=(p*C-h*H-m*T)*K,t[13]=(n*H-s*C+l*T)*K,t[14]=(w*P-b*z-S*D)*K,t[15]=(v*z-x*P+g*D)*K,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,v=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+s,v*m-l*h,0,d*m-l*p,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,h=n._y,p=n._z,m=n._w,d=c+c,v=h+h,x=p+p,g=c*d,E=c*v,b=c*x,w=h*v,S=h*x,y=p*x,D=m*d,P=m*v,U=m*x,z=s.x,F=s.y,B=s.z;return l[0]=(1-(w+y))*z,l[1]=(E+U)*z,l[2]=(b-P)*z,l[3]=0,l[4]=(E-U)*F,l[5]=(1-(g+y))*F,l[6]=(S+D)*F,l[7]=0,l[8]=(b+P)*B,l[9]=(S-D)*B,l[10]=(1-(g+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),n.identity(),this;let h=Rr.set(l[0],l[1],l[2]).length();const p=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ri.copy(this);const d=1/h,v=1/p,x=1/m;return Ri.elements[0]*=d,Ri.elements[1]*=d,Ri.elements[2]*=d,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=x,Ri.elements[9]*=x,Ri.elements[10]*=x,n.setFromRotationMatrix(Ri),s.x=h,s.y=p,s.z=m,this}makePerspective(t,n,s,l,c,h,p=Xi,m=!1){const d=this.elements,v=2*c/(n-t),x=2*c/(s-l),g=(n+t)/(n-t),E=(s+l)/(s-l);let b,w;if(m)b=c/(h-c),w=h*c/(h-c);else if(p===Xi)b=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(p===nl)b=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,s,l,c,h,p=Xi,m=!1){const d=this.elements,v=2/(n-t),x=2/(s-l),g=-(n+t)/(n-t),E=-(s+l)/(s-l);let b,w;if(m)b=1/(h-c),w=h/(h-c);else if(p===Xi)b=-2/(h-c),w=-(h+c)/(h-c);else if(p===nl)b=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Rr=new J,Ri=new Ke,xE=new J(0,0,0),yE=new J(1,1,1),es=new J,Tc=new J,ii=new J,B0=new Ke,F0=new hs;class Ca{constructor(t=0,n=0,s=0,l=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],x=l[2],g=l[6],E=l[10];switch(n){case"XYZ":this._y=Math.asin(ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ge(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(ge(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return B0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(B0,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return F0.setFromEuler(this),this.setFromQuaternion(F0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class Rp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SE=0;const I0=new J,Cr=new hs,ga=new Ke,Ac=new J,Xo=new J,ME=new J,EE=new hs,z0=new J(1,0,0),H0=new J(0,1,0),G0=new J(0,0,1),V0={type:"added"},bE={type:"removed"},wr={type:"childadded",child:null},zh={type:"childremoved",child:null};class In extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new J,n=new Ca,s=new hs,l=new J(1,1,1);function c(){s.setFromEuler(n,!1)}function h(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new he}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Cr.setFromAxisAngle(t,n),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,n){return Cr.setFromAxisAngle(t,n),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(z0,t)}rotateY(t){return this.rotateOnAxis(H0,t)}rotateZ(t){return this.rotateOnAxis(G0,t)}translateOnAxis(t,n){return I0.copy(t).applyQuaternion(this.quaternion),this.position.add(I0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(z0,t)}translateY(t){return this.translateOnAxis(H0,t)}translateZ(t){return this.translateOnAxis(G0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Ac.copy(t):Ac.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Xo,Ac,this.up):ga.lookAt(Ac,Xo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(ga),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(V0),wr.child=t,this.dispatchEvent(wr),wr.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(bE),zh.child=t,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(V0),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,n);if(h!==void 0)return h}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,ME),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,EE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*s-c[8]*l,c[13]+=s-c[1]*n-c[5]*s-c[9]*l,c[14]+=l-c[2]*n-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const x=m[d];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(n){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),v=h(t.images),x=h(t.shapes),g=h(t.skeletons),E=h(t.animations),b=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new J(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rc extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const w of t.hand.values()){const S=n.getJointPose(w,s),y=this._getHandJoint(d,w);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=v.position.distanceTo(x.position),E=.02,b=.005;d.inputState.pinching&&g>E+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=E-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Rc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}const rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Gh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Oe{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=Ae.workingColorSpace){if(t=fE(t,1),n=ge(n,0,1),s=ge(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,h=2*s-c;this.r=Gh(h,c,t+1/3),this.g=Gh(h,c,t),this.b=Gh(h,c,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,n=gi){function s(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ie("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(h===6)return this.setHex(parseInt(c,16),n);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=gi){const s=rx[t.toLowerCase()];return s!==void 0?this.setHex(s,n):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Ae.workingToColorSpace(wn.copy(this),t),Math.round(ge(wn.r*255,0,255))*65536+Math.round(ge(wn.g*255,0,255))*256+Math.round(ge(wn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(wn.copy(this),n);const s=wn.r,l=wn.g,c=wn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=v<=.5?x/(h+p):x/(2-h-p),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=d,t.l=v,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(wn.copy(this),n),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=gi){Ae.workingToColorSpace(wn.copy(this),t);const n=wn.r,s=wn.g,l=wn.b;return t!==gi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+n,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(ns),t.getHSL(Cc);const s=Oh(ns.h,Cc.h,n),l=Oh(ns.s,Cc.s,n),c=Oh(ns.l,Cc.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Oe;Oe.NAMES=rx;class AE extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ci=new J,va=new J,Vh=new J,xa=new J,Dr=new J,Ur=new J,k0=new J,kh=new J,Xh=new J,qh=new J,Wh=new en,Yh=new en,jh=new en;class Li{constructor(t=new J,n=new J,s=new J){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),Ci.subVectors(t,n),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){Ci.subVectors(l,n),va.subVectors(s,n),Vh.subVectors(t,n);const h=Ci.dot(Ci),p=Ci.dot(va),m=Ci.dot(Vh),d=va.dot(va),v=va.dot(Vh),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,E=(d*m-p*v)*g,b=(h*v-p*m)*g;return c.set(1-E-b,b,E)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,n,s,l,c,h,p,m){return this.getBarycoord(t,n,s,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(h,xa.y),m.addScaledVector(p,xa.z),m)}static getInterpolatedAttribute(t,n,s,l,c,h){return Wh.setScalar(0),Yh.setScalar(0),jh.setScalar(0),Wh.fromBufferAttribute(t,n),Yh.fromBufferAttribute(t,s),jh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Wh,c.x),h.addScaledVector(Yh,c.y),h.addScaledVector(jh,c.z),h}static isFrontFacing(t,n,s,l){return Ci.subVectors(s,n),va.subVectors(t,n),Ci.cross(va).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ci.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Li.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return Li.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return Li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let h,p;Dr.subVectors(l,s),Ur.subVectors(c,s),kh.subVectors(t,s);const m=Dr.dot(kh),d=Ur.dot(kh);if(m<=0&&d<=0)return n.copy(s);Xh.subVectors(t,l);const v=Dr.dot(Xh),x=Ur.dot(Xh);if(v>=0&&x<=v)return n.copy(l);const g=m*x-v*d;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),n.copy(s).addScaledVector(Dr,h);qh.subVectors(t,c);const E=Dr.dot(qh),b=Ur.dot(qh);if(b>=0&&E<=b)return n.copy(c);const w=E*d-m*b;if(w<=0&&d>=0&&b<=0)return p=d/(d-b),n.copy(s).addScaledVector(Ur,p);const S=v*b-E*x;if(S<=0&&x-v>=0&&E-b>=0)return k0.subVectors(c,l),p=(x-v)/(x-v+(E-b)),n.copy(l).addScaledVector(k0,p);const y=1/(S+w+g);return h=w*y,p=g*y,n.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class sl{constructor(t=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,wi):wi.fromBufferAttribute(c,h),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(t.matrixWorld),this.union(wc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),Dc.subVectors(this.max,qo),Lr.subVectors(t.a,qo),Nr.subVectors(t.b,qo),Or.subVectors(t.c,qo),is.subVectors(Nr,Lr),as.subVectors(Or,Nr),Us.subVectors(Lr,Or);let n=[0,-is.z,is.y,0,-as.z,as.y,0,-Us.z,Us.y,is.z,0,-is.x,as.z,0,-as.x,Us.z,0,-Us.x,-is.y,is.x,0,-as.y,as.x,0,-Us.y,Us.x,0];return!Zh(n,Lr,Nr,Or,Dc)||(n=[1,0,0,0,1,0,0,0,1],!Zh(n,Lr,Nr,Or,Dc))?!1:(Uc.crossVectors(is,as),n=[Uc.x,Uc.y,Uc.z],Zh(n,Lr,Nr,Or,Dc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ya=[new J,new J,new J,new J,new J,new J,new J,new J],wi=new J,wc=new sl,Lr=new J,Nr=new J,Or=new J,is=new J,as=new J,Us=new J,qo=new J,Dc=new J,Uc=new J,Ls=new J;function Zh(r,t,n,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ls.fromArray(r,c);const p=l.x*Math.abs(Ls.x)+l.y*Math.abs(Ls.y)+l.z*Math.abs(Ls.z),m=t.dot(Ls),d=n.dot(Ls),v=s.dot(Ls);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const hn=new J,Lc=new oe;let RE=0;class ji{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=w0,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Lc.fromBufferAttribute(this,n),Lc.applyMatrix3(t),this.setXY(n,Lc.x,Lc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=ko(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=qn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ko(n,this.array)),n}setX(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ko(n,this.array)),n}setY(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ko(n,this.array)),n}setZ(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ko(n,this.array)),n}setW(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=qn(n,this.array),s=qn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=qn(n,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=qn(n,this.array),s=qn(s,this.array),l=qn(l,this.array),c=qn(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==w0&&(t.usage=this.usage),t}}class ox extends ji{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class lx extends ji{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class oi extends ji{constructor(t,n,s){super(new Float32Array(t),n,s)}}const CE=new sl,Wo=new J,Kh=new J;class pu{constructor(t=new J,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):CE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wo.subVectors(t,this.center);const n=Wo.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wo.copy(t.center).add(Kh)),this.expandByPoint(Wo.copy(t.center).sub(Kh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let wE=0;const _i=new Ke,Qh=new In,Pr=new J,ai=new sl,Yo=new sl,Sn=new J;class xi extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oE(t)?lx:ox)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,n,s){return _i.makeTranslation(t,n,s),this.applyMatrix4(_i),this}scale(t,n,s){return _i.makeScale(t,n,s),this.applyMatrix4(_i),this}lookAt(t){return Qh.lookAt(t),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new oi(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),n)for(let c=0,h=n.length;c<h;c++){const p=n[c];Yo.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors(ai.min,Yo.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,Yo.max),ai.expandByPoint(Sn)):(ai.expandByPoint(Yo.min),ai.expandByPoint(Yo.max))}ai.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(n)for(let c=0,h=n.length;c<h;c++){const p=n[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)Sn.fromBufferAttribute(p,d),m&&(Pr.fromBufferAttribute(t,d),Sn.add(Pr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new J,m[T]=new J;const d=new J,v=new J,x=new J,g=new oe,E=new oe,b=new oe,w=new J,S=new J;function y(T,C,ct){d.fromBufferAttribute(s,T),v.fromBufferAttribute(s,C),x.fromBufferAttribute(s,ct),g.fromBufferAttribute(c,T),E.fromBufferAttribute(c,C),b.fromBufferAttribute(c,ct),v.sub(d),x.sub(d),E.sub(g),b.sub(g);const H=1/(E.x*b.y-b.x*E.y);isFinite(H)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(x,-E.y).multiplyScalar(H),S.copy(x).multiplyScalar(E.x).addScaledVector(v,-b.x).multiplyScalar(H),p[T].add(w),p[C].add(w),p[ct].add(w),m[T].add(S),m[C].add(S),m[ct].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,C=D.length;T<C;++T){const ct=D[T],H=ct.start,Z=ct.count;for(let tt=H,st=H+Z;tt<st;tt+=3)y(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const P=new J,U=new J,z=new J,F=new J;function B(T){z.fromBufferAttribute(l,T),F.copy(z);const C=p[T];P.copy(C),P.sub(z.multiplyScalar(z.dot(C))).normalize(),U.crossVectors(F,C);const H=U.dot(m[T])<0?-1:1;h.setXYZW(T,P.x,P.y,P.z,H)}for(let T=0,C=D.length;T<C;++T){const ct=D[T],H=ct.start,Z=ct.count;for(let tt=H,st=H+Z;tt<st;tt+=3)B(t.getX(tt+0)),B(t.getX(tt+1)),B(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ji(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new J,c=new J,h=new J,p=new J,m=new J,d=new J,v=new J,x=new J;if(t)for(let g=0,E=t.count;g<E;g+=3){const b=t.getX(g+0),w=t.getX(g+1),S=t.getX(g+2);l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,S),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,S),p.add(v),m.add(v),d.add(v),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,E=n.count;g<E;g+=3)l.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),h.fromBufferAttribute(n,g+2),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)Sn.fromBufferAttribute(t,n),Sn.normalize(),t.setXYZ(n,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(p,m){const d=p.array,v=p.itemSize,x=p.normalized,g=new d.constructor(m.length*v);let E=0,b=0;for(let w=0,S=m.length;w<S;w++){p.isInterleavedBufferAttribute?E=m[w]*p.data.stride+p.offset:E=m[w]*v;for(let y=0;y<v;y++)g[b++]=d[E++]}return new ji(g,v,x)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);n.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,x=d.length;v<x;v++){const g=d[v],E=t(g,s);m.push(E)}n.morphAttributes[p]=m}n.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let x=0,g=d.length;x<g;x++){const E=d[x];v.push(E.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(n))}const c=t.morphAttributes;for(const d in c){const v=[],x=c[d];for(let g=0,E=x.length;g<E;g++)v.push(x[g].clone(n));this.morphAttributes[d]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,v=h.length;d<v;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let DE=0;class rl extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Gr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=vd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){ie(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gd&&(s.blendSrc=this.blendSrc),this.blendDst!==vd&&(s.blendDst=this.blendDst),this.blendEquation!==Fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(n){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Sa=new J,Jh=new J,Nc=new J,ss=new J,$h=new J,Oc=new J,td=new J;class mu{constructor(t=new J,n=new J(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Sa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Sa.copy(this.origin).addScaledVector(this.direction,n),Sa.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){Jh.copy(t).add(n).multiplyScalar(.5),Nc.copy(n).sub(t).normalize(),ss.copy(this.origin).sub(Jh);const c=t.distanceTo(n)*.5,h=-this.direction.dot(Nc),p=ss.dot(this.direction),m=-ss.dot(Nc),d=ss.lengthSq(),v=Math.abs(1-h*h);let x,g,E,b;if(v>0)if(x=h*m-p,g=h*p-m,b=c*v,x>=0)if(g>=-b)if(g<=b){const w=1/v;x*=w,g*=w,E=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=c,x=Math.max(0,-(h*g+p)),E=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(h*g+p)),E=-x*x+g*(g+2*m)+d;else g<=-b?(x=Math.max(0,-(-h*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),E=-x*x+g*(g+2*m)+d):g<=b?(x=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+d):(x=Math.max(0,-(h*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),E=-x*x+g*(g+2*m)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+p)),E=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Jh).addScaledVector(Nc,g),E}intersectSphere(t,n){Sa.subVectors(t.center,this.origin);const s=Sa.dot(this.direction),l=Sa.dot(Sa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,n):this.at(p,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),v>=0?(c=(t.min.y-g.y)*v,h=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,h=(t.min.y-g.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(p=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,Sa)!==null}intersectTriangle(t,n,s,l,c){$h.subVectors(n,t),Oc.subVectors(s,t),td.crossVectors($h,Oc);let h=this.direction.dot(td),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;ss.subVectors(this.origin,t);const m=p*this.direction.dot(Oc.crossVectors(ss,Oc));if(m<0)return null;const d=p*this.direction.dot($h.cross(ss));if(d<0||m+d>h)return null;const v=-p*ss.dot(td);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uu extends rl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=Vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const X0=new Ke,Ns=new mu,Pc=new pu,q0=new J,Bc=new J,Fc=new J,Ic=new J,ed=new J,zc=new J,W0=new J,Hc=new J;class Oi extends In{constructor(t=new xi,n=new uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){zc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],x=c[m];v!==0&&(ed.fromBufferAttribute(x,t),h?zc.addScaledVector(ed,v):zc.addScaledVector(ed.sub(n),v))}n.add(zc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(c),Ns.copy(t.ray).recast(t.near),!(Pc.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Pc,q0)===null||Ns.origin.distanceToSquared(q0)>(t.far-t.near)**2))&&(X0.copy(c).invert(),Ns.copy(t.ray).applyMatrix4(X0),!(s.boundingBox!==null&&Ns.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Ns)))}_computeIntersections(t,n,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const S=g[b],y=h[S.materialIndex],D=Math.max(S.start,E.start),P=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let U=D,z=P;U<z;U+=3){const F=p.getX(U),B=p.getX(U+1),T=p.getX(U+2);l=Gc(this,y,t,s,d,v,x,F,B,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const b=Math.max(0,E.start),w=Math.min(p.count,E.start+E.count);for(let S=b,y=w;S<y;S+=3){const D=p.getX(S),P=p.getX(S+1),U=p.getX(S+2);l=Gc(this,h,t,s,d,v,x,D,P,U),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const S=g[b],y=h[S.materialIndex],D=Math.max(S.start,E.start),P=Math.min(m.count,Math.min(S.start+S.count,E.start+E.count));for(let U=D,z=P;U<z;U+=3){const F=U,B=U+1,T=U+2;l=Gc(this,y,t,s,d,v,x,F,B,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const b=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let S=b,y=w;S<y;S+=3){const D=S,P=S+1,U=S+2;l=Gc(this,h,t,s,d,v,x,D,P,U),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}}}function UE(r,t,n,s,l,c,h,p){let m;if(t.side===Yn?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===fs,p),m===null)return null;Hc.copy(p),Hc.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(Hc);return d<n.near||d>n.far?null:{distance:d,point:Hc.clone(),object:r}}function Gc(r,t,n,s,l,c,h,p,m,d){r.getVertexPosition(p,Bc),r.getVertexPosition(m,Fc),r.getVertexPosition(d,Ic);const v=UE(r,t,n,s,Bc,Fc,Ic,W0);if(v){const x=new J;Li.getBarycoord(W0,Bc,Fc,Ic,x),l&&(v.uv=Li.getInterpolatedAttribute(l,p,m,d,x,new oe)),c&&(v.uv1=Li.getInterpolatedAttribute(c,p,m,d,x,new oe)),h&&(v.normal=Li.getInterpolatedAttribute(h,p,m,d,x,new J),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new J,materialIndex:0};Li.getNormal(Bc,Fc,Ic,g.normal),v.face=g,v.barycoord=x}return v}class LE extends Fn{constructor(t=null,n=1,s=1,l,c,h,p,m,d=An,v=An,x,g){super(null,h,p,m,d,v,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nd=new J,NE=new J,OE=new he;class os{constructor(t=new J(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=nd.subVectors(s,n).cross(NE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(nd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||OE.getNormalMatrix(t),l=this.coplanarPoint(nd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new pu,PE=new oe(.5,.5),Vc=new J;class Cp{constructor(t=new os,n=new os,s=new os,l=new os,c=new os,h=new os){this.planes=[t,n,s,l,c,h]}set(t,n,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(n),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Xi,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],x=c[5],g=c[6],E=c[7],b=c[8],w=c[9],S=c[10],y=c[11],D=c[12],P=c[13],U=c[14],z=c[15];if(l[0].setComponents(d-h,E-v,y-b,z-D).normalize(),l[1].setComponents(d+h,E+v,y+b,z+D).normalize(),l[2].setComponents(d+p,E+x,y+w,z+P).normalize(),l[3].setComponents(d-p,E-x,y-w,z-P).normalize(),s)l[4].setComponents(m,g,S,U).normalize(),l[5].setComponents(d-m,E-g,y-S,z-U).normalize();else if(l[4].setComponents(d-m,E-g,y-S,z-U).normalize(),n===Xi)l[5].setComponents(d+m,E+g,y+S,z+U).normalize();else if(n===nl)l[5].setComponents(m,g,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);const n=PE.distanceTo(t.center);return Os.radius=.7071067811865476+n,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(Vc.x=l.normal.x>0?t.max.x:t.min.x,Vc.y=l.normal.y>0?t.max.y:t.min.y,Vc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cx extends rl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Y0=new Ke,op=new mu,kc=new pu,Xc=new J;class BE extends In{constructor(t=new xi,n=new cx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,t.ray.intersectsSphere(kc)===!1)return;Y0.copy(l).invert(),op.copy(t.ray).applyMatrix4(Y0);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,x=s.attributes.position;if(d!==null){const g=Math.max(0,h.start),E=Math.min(d.count,h.start+h.count);for(let b=g,w=E;b<w;b++){const S=d.getX(b);Xc.fromBufferAttribute(x,S),j0(Xc,S,m,l,t,n,this)}}else{const g=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let b=g,w=E;b<w;b++)Xc.fromBufferAttribute(x,b),j0(Xc,b,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function j0(r,t,n,s,l,c,h){const p=op.distanceSqToPoint(r);if(p<n){const m=new J;op.closestPointToPoint(r,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class ux extends Fn{constructor(t=[],n=Gs,s,l,c,h,p,m,d,v){super(t,n,s,l,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class il extends Fn{constructor(t,n,s=Ki,l,c,h,p=An,m=An,d,v=Ra,x=1){if(v!==Ra&&v!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:x};super(g,l,c,h,p,m,v,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ap(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class FE extends il{constructor(t,n=Ki,s=Gs,l,c,h=An,p=An,m,d=Ra){const v={width:t,height:t,depth:1},x=[v,v,v,v,v,v];super(t,t,n,s,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fx extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ol extends xi{constructor(t=1,n=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],x=[];let g=0,E=0;b("z","y","x",-1,-1,s,n,t,h,c,0),b("z","y","x",1,-1,s,n,-t,h,c,1),b("x","z","y",1,1,t,s,n,l,h,2),b("x","z","y",1,-1,t,s,-n,l,h,3),b("x","y","z",1,-1,t,n,s,l,c,4),b("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new oi(d,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(x,2));function b(w,S,y,D,P,U,z,F,B,T,C){const ct=U/B,H=z/T,Z=U/2,tt=z/2,st=F/2,K=B+1,N=T+1;let I=0,lt=0;const dt=new J;for(let Et=0;Et<N;Et++){const O=Et*H-tt;for(let Y=0;Y<K;Y++){const gt=Y*ct-Z;dt[w]=gt*D,dt[S]=O*P,dt[y]=st,d.push(dt.x,dt.y,dt.z),dt[w]=0,dt[S]=0,dt[y]=F>0?1:-1,v.push(dt.x,dt.y,dt.z),x.push(Y/B),x.push(1-Et/T),I+=1}}for(let Et=0;Et<T;Et++)for(let O=0;O<B;O++){const Y=g+O+K*Et,gt=g+O+K*(Et+1),At=g+(O+1)+K*(Et+1),Bt=g+(O+1)+K*Et;m.push(Y,gt,Bt),m.push(gt,At,Bt),lt+=6}p.addGroup(E,lt,C),E+=lt,g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class wp extends xi{constructor(t=1,n=1,s=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const v=[],x=[],g=[],E=[];let b=0;const w=[],S=s/2;let y=0;D(),h===!1&&(t>0&&P(!0),n>0&&P(!1)),this.setIndex(v),this.setAttribute("position",new oi(x,3)),this.setAttribute("normal",new oi(g,3)),this.setAttribute("uv",new oi(E,2));function D(){const U=new J,z=new J;let F=0;const B=(n-t)/s;for(let T=0;T<=c;T++){const C=[],ct=T/c,H=ct*(n-t)+t;for(let Z=0;Z<=l;Z++){const tt=Z/l,st=tt*m+p,K=Math.sin(st),N=Math.cos(st);z.x=H*K,z.y=-ct*s+S,z.z=H*N,x.push(z.x,z.y,z.z),U.set(K,B,N).normalize(),g.push(U.x,U.y,U.z),E.push(tt,1-ct),C.push(b++)}w.push(C)}for(let T=0;T<l;T++)for(let C=0;C<c;C++){const ct=w[C][T],H=w[C+1][T],Z=w[C+1][T+1],tt=w[C][T+1];(t>0||C!==0)&&(v.push(ct,H,tt),F+=3),(n>0||C!==c-1)&&(v.push(H,Z,tt),F+=3)}d.addGroup(y,F,0),y+=F}function P(U){const z=b,F=new oe,B=new J;let T=0;const C=U===!0?t:n,ct=U===!0?1:-1;for(let Z=1;Z<=l;Z++)x.push(0,S*ct,0),g.push(0,ct,0),E.push(.5,.5),b++;const H=b;for(let Z=0;Z<=l;Z++){const st=Z/l*m+p,K=Math.cos(st),N=Math.sin(st);B.x=C*N,B.y=S*ct,B.z=C*K,x.push(B.x,B.y,B.z),g.push(0,ct,0),F.x=K*.5+.5,F.y=N*.5*ct+.5,E.push(F.x,F.y),b++}for(let Z=0;Z<l;Z++){const tt=z+Z,st=H+Z;U===!0?v.push(st,st+1,tt):v.push(st+1,st,tt),T+=3}d.addGroup(y,T,U===!0?1:2),y+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ll extends xi{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,h=n/2,p=Math.floor(s),m=Math.floor(l),d=p+1,v=m+1,x=t/p,g=n/m,E=[],b=[],w=[],S=[];for(let y=0;y<v;y++){const D=y*g-h;for(let P=0;P<d;P++){const U=P*x-c;b.push(U,-D,0),w.push(0,0,1),S.push(P/p),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let D=0;D<p;D++){const P=D+d*y,U=D+d*(y+1),z=D+1+d*(y+1),F=D+1+d*y;E.push(P,U,F),E.push(U,z,F)}this.setIndex(E),this.setAttribute("position",new oi(b,3)),this.setAttribute("normal",new oi(w,3)),this.setAttribute("uv",new oi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.widthSegments,t.heightSegments)}}function Yr(r){const t={};for(const n in r){t[n]={};for(const s in r[n]){const l=r[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone():Array.isArray(l)?t[n][s]=l.slice():t[n][s]=l}}return t}function Bn(r){const t={};for(let n=0;n<r.length;n++){const s=Yr(r[n]);for(const l in s)t[l]=s[l]}return t}function IE(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function hx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const zE={clone:Yr,merge:Bn};var HE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends rl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HE,this.fragmentShader=GE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=IE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?n.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?n.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?n.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?n.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?n.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?n.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?n.uniforms[l]={type:"m4",value:h.toArray()}:n.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class VE extends Qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kE extends rl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XE extends rl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class qE extends In{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const id=new Ke,Z0=new J,K0=new J;class WE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cp,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;Z0.setFromMatrixPosition(t.matrixWorld),n.position.copy(Z0),K0.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(K0),n.updateMatrixWorld(),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===nl||n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(id)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qc=new J,Wc=new hs,Hi=new J;class dx extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qc,Wc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Wc,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(qc,Wc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Wc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new J,Q0=new oe,J0=new oe;class si extends dx{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=rp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(su*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,n){return this.getViewBounds(t,Q0,J0),n.subVectors(J0,Q0)}setViewOffset(t,n,s,l,c,h){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(su*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,n-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class YE extends WE{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class jE extends qE{constructor(t,n,s=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new YE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class px extends dx{constructor(t=-1,n=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Br=-90,Fr=1;class ZE extends In{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Br,Fr,t,n);l.layers=this.layers,this.add(l);const c=new si(Br,Fr,t,n);c.layers=this.layers,this.add(c);const h=new si(Br,Fr,t,n);h.layers=this.layers,this.add(h);const p=new si(Br,Fr,t,n);p.layers=this.layers,this.add(p);const m=new si(Br,Fr,t,n);m.layers=this.layers,this.add(m);const d=new si(Br,Fr,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,h,p,m]=n;for(const d of n)this.remove(d);if(t===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,v),t.setRenderTarget(x,g,E),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class KE extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const $0=new Ke;class QE{constructor(t,n,s=0,l=1/0){this.ray=new mu(t,n),this.near=s,this.far=l,this.camera=null,this.layers=new Rp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Te("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return $0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($0),this}intersectObject(t,n=!0,s=[]){return lp(t,this,s,n),s.sort(tv),s}intersectObjects(t,n=!0,s=[]){for(let l=0,c=t.length;l<c;l++)lp(t[l],this,s,n);return s.sort(tv),s}}function tv(r,t){return r.distance-t.distance}function lp(r,t,n,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,p=c.length;h<p;h++)lp(c[h],t,n,!0)}}class ev{constructor(t=1,n=0,s=0){this.radius=t,this.phi=n,this.theta=s}set(t,n,s){return this.radius=t,this.phi=n,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,s){return this.radius=Math.sqrt(t*t+n*n+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ge(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class JE extends Vs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function nv(r,t,n,s){const l=$E(s);switch(n){case ex:return r*t;case ix:return r*t/l.components*l.byteLength;case Sp:return r*t/l.components*l.byteLength;case qr:return r*t*2/l.components*l.byteLength;case Mp:return r*t*2/l.components*l.byteLength;case nx:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case Ep:return r*t*4/l.components*l.byteLength;case eu:case nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case iu:case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:case Ud:return Math.max(r,16)*Math.max(t,8)/4;case Cd:case Dd:return Math.max(r,8)*Math.max(t,8)/2;case Ld:case Nd:case Pd:case Bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Od:case Fd:case Id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case zd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case kd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case qd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Qd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case $d:case tp:case ep:return Math.ceil(r/4)*Math.ceil(t/4)*16;case np:case ip:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ap:case sp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $E(r){switch(r){case ri:case Qv:return{byteLength:1,components:1};case tl:case Jv:case Aa:return{byteLength:2,components:1};case xp:case yp:return{byteLength:2,components:4};case Ki:case vp:case ki:return{byteLength:4,components:1};case $v:case tx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);function mx(){let r=null,t=!1,n=null,s=null;function l(c,h){n(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function tb(r){const t=new WeakMap;function n(p,m){const d=p.array,v=p.usage,x=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=r.SHORT;else if(d instanceof Uint32Array)E=r.UNSIGNED_INT;else if(d instanceof Int32Array)E=r.INT;else if(d instanceof Int8Array)E=r.BYTE;else if(d instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const v=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,v);else{x.sort((E,b)=>E.start-b.start);let g=0;for(let E=1;E<x.length;E++){const b=x[g],w=x[E];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,x[g]=w)}x.length=g+1;for(let E=0,b=x.length;E<b;E++){const w=x[E];r.bufferSubData(d,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,n(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var eb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nb=`#ifdef USE_ALPHAHASH
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
#endif`,ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ob=`#ifdef USE_AOMAP
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
#endif`,lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cb=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,db=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pb=`#ifdef USE_IRIDESCENCE
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
#endif`,mb=`#ifdef USE_BUMPMAP
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
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bb=`#define PI 3.141592653589793
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
} // validated`,Tb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ab=`vec3 transformedNormal = objectNormal;
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
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nb=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vb=`#ifdef USE_GRADIENTMAP
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
}`,kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wb=`uniform bool receiveShadow;
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
#endif`,Yb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,$b=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tT=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,eT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,nT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uT=`#if defined( USE_POINTS_UV )
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
#endif`,fT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_T=`#ifdef USE_MORPHTARGETS
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
#endif`,gT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ET=`#ifdef USE_NORMALMAP
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
#endif`,bT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,DT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zT=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,HT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GT=`#ifdef USE_SKINNING
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
#endif`,VT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kT=`#ifdef USE_SKINNING
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
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZT=`#ifdef USE_TRANSMISSION
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
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
}`,oA=`#if DEPTH_PACKING == 3200
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
}`,lA=`#define DISTANCE
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
}`,cA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`uniform float scale;
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
}`,dA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 diffuse;
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
}`,_A=`#define LAMBERT
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
}`,gA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,vA=`#define MATCAP
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
}`,xA=`#define MATCAP
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
}`,yA=`#define NORMAL
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
}`,SA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MA=`#define PHONG
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
}`,EA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,bA=`#define STANDARD
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
}`,TA=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,AA=`#define TOON
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
}`,RA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,CA=`uniform float size;
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
}`,wA=`uniform vec3 diffuse;
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
}`,DA=`#include <common>
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
}`,UA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,LA=`uniform float rotation;
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
}`,NA=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:eb,alphahash_pars_fragment:nb,alphamap_fragment:ib,alphamap_pars_fragment:ab,alphatest_fragment:sb,alphatest_pars_fragment:rb,aomap_fragment:ob,aomap_pars_fragment:lb,batching_pars_vertex:cb,batching_vertex:ub,begin_vertex:fb,beginnormal_vertex:hb,bsdfs:db,iridescence_fragment:pb,bumpmap_pars_fragment:mb,clipping_planes_fragment:_b,clipping_planes_pars_fragment:gb,clipping_planes_pars_vertex:vb,clipping_planes_vertex:xb,color_fragment:yb,color_pars_fragment:Sb,color_pars_vertex:Mb,color_vertex:Eb,common:bb,cube_uv_reflection_fragment:Tb,defaultnormal_vertex:Ab,displacementmap_pars_vertex:Rb,displacementmap_vertex:Cb,emissivemap_fragment:wb,emissivemap_pars_fragment:Db,colorspace_fragment:Ub,colorspace_pars_fragment:Lb,envmap_fragment:Nb,envmap_common_pars_fragment:Ob,envmap_pars_fragment:Pb,envmap_pars_vertex:Bb,envmap_physical_pars_fragment:Yb,envmap_vertex:Fb,fog_vertex:Ib,fog_pars_vertex:zb,fog_fragment:Hb,fog_pars_fragment:Gb,gradientmap_pars_fragment:Vb,lightmap_pars_fragment:kb,lights_lambert_fragment:Xb,lights_lambert_pars_fragment:qb,lights_pars_begin:Wb,lights_toon_fragment:jb,lights_toon_pars_fragment:Zb,lights_phong_fragment:Kb,lights_phong_pars_fragment:Qb,lights_physical_fragment:Jb,lights_physical_pars_fragment:$b,lights_fragment_begin:tT,lights_fragment_maps:eT,lights_fragment_end:nT,logdepthbuf_fragment:iT,logdepthbuf_pars_fragment:aT,logdepthbuf_pars_vertex:sT,logdepthbuf_vertex:rT,map_fragment:oT,map_pars_fragment:lT,map_particle_fragment:cT,map_particle_pars_fragment:uT,metalnessmap_fragment:fT,metalnessmap_pars_fragment:hT,morphinstance_vertex:dT,morphcolor_vertex:pT,morphnormal_vertex:mT,morphtarget_pars_vertex:_T,morphtarget_vertex:gT,normal_fragment_begin:vT,normal_fragment_maps:xT,normal_pars_fragment:yT,normal_pars_vertex:ST,normal_vertex:MT,normalmap_pars_fragment:ET,clearcoat_normal_fragment_begin:bT,clearcoat_normal_fragment_maps:TT,clearcoat_pars_fragment:AT,iridescence_pars_fragment:RT,opaque_fragment:CT,packing:wT,premultiplied_alpha_fragment:DT,project_vertex:UT,dithering_fragment:LT,dithering_pars_fragment:NT,roughnessmap_fragment:OT,roughnessmap_pars_fragment:PT,shadowmap_pars_fragment:BT,shadowmap_pars_vertex:FT,shadowmap_vertex:IT,shadowmask_pars_fragment:zT,skinbase_vertex:HT,skinning_pars_vertex:GT,skinning_vertex:VT,skinnormal_vertex:kT,specularmap_fragment:XT,specularmap_pars_fragment:qT,tonemapping_fragment:WT,tonemapping_pars_fragment:YT,transmission_fragment:jT,transmission_pars_fragment:ZT,uv_pars_fragment:KT,uv_pars_vertex:QT,uv_vertex:JT,worldpos_vertex:$T,background_vert:tA,background_frag:eA,backgroundCube_vert:nA,backgroundCube_frag:iA,cube_vert:aA,cube_frag:sA,depth_vert:rA,depth_frag:oA,distance_vert:lA,distance_frag:cA,equirect_vert:uA,equirect_frag:fA,linedashed_vert:hA,linedashed_frag:dA,meshbasic_vert:pA,meshbasic_frag:mA,meshlambert_vert:_A,meshlambert_frag:gA,meshmatcap_vert:vA,meshmatcap_frag:xA,meshnormal_vert:yA,meshnormal_frag:SA,meshphong_vert:MA,meshphong_frag:EA,meshphysical_vert:bA,meshphysical_frag:TA,meshtoon_vert:AA,meshtoon_frag:RA,points_vert:CA,points_frag:wA,shadow_vert:DA,shadow_frag:UA,sprite_vert:LA,sprite_frag:NA},Ut={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Vi={basic:{uniforms:Bn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Bn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Bn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Bn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Bn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Oe(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Bn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Bn([Ut.points,Ut.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Bn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Bn([Ut.common,Ut.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Bn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Bn([Ut.sprite,Ut.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Bn([Ut.common,Ut.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Bn([Ut.lights,Ut.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Vi.physical={uniforms:Bn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Yc={r:0,b:0,g:0},Ps=new Ca,OA=new Ke;function PA(r,t,n,s,l,c){const h=new Oe(0);let p=l===!0?0:1,m,d,v=null,x=0,g=null;function E(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const U=D.backgroundBlurriness>0;P=t.get(P,U)}return P}function b(D){let P=!1;const U=E(D);U===null?S(h,p):U&&U.isColor&&(S(U,1),P=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(D,P){const U=E(P);U&&(U.isCubeTexture||U.mapping===du)?(d===void 0&&(d=new Oi(new ol(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Yr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,F,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Ps.copy(P.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(OA.makeRotationFromEuler(Ps)),d.material.toneMapped=Ae.getTransfer(U.colorSpace)!==Ie,(v!==U||x!==U.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,v=U,x=U.version,g=r.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Oi(new ll(2,2),new Qi({name:"BackgroundMaterial",uniforms:Yr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Ae.getTransfer(U.colorSpace)!==Ie,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||x!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=U,x=U.version,g=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function S(D,P){D.getRGB(Yc,hx(r)),n.buffers.color.setClear(Yc.r,Yc.g,Yc.b,P,c)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,P=1){h.set(D),p=P,S(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,S(h,p)},render:b,addToRenderList:w,dispose:y}}function BA(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(H,Z,tt,st,K){let N=!1;const I=x(H,st,tt,Z);c!==I&&(c=I,d(c.object)),N=E(H,st,tt,K),N&&b(H,st,tt,K),K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),(N||h)&&(h=!1,U(H,Z,tt,st),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function m(){return r.createVertexArray()}function d(H){return r.bindVertexArray(H)}function v(H){return r.deleteVertexArray(H)}function x(H,Z,tt,st){const K=st.wireframe===!0;let N=s[Z.id];N===void 0&&(N={},s[Z.id]=N);const I=H.isInstancedMesh===!0?H.id:0;let lt=N[I];lt===void 0&&(lt={},N[I]=lt);let dt=lt[tt.id];dt===void 0&&(dt={},lt[tt.id]=dt);let Et=dt[K];return Et===void 0&&(Et=g(m()),dt[K]=Et),Et}function g(H){const Z=[],tt=[],st=[];for(let K=0;K<n;K++)Z[K]=0,tt[K]=0,st[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:tt,attributeDivisors:st,object:H,attributes:{},index:null}}function E(H,Z,tt,st){const K=c.attributes,N=Z.attributes;let I=0;const lt=tt.getAttributes();for(const dt in lt)if(lt[dt].location>=0){const O=K[dt];let Y=N[dt];if(Y===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;I++}return c.attributesNum!==I||c.index!==st}function b(H,Z,tt,st){const K={},N=Z.attributes;let I=0;const lt=tt.getAttributes();for(const dt in lt)if(lt[dt].location>=0){let O=N[dt];O===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),K[dt]=Y,I++}c.attributes=K,c.attributesNum=I,c.index=st}function w(){const H=c.newAttributes;for(let Z=0,tt=H.length;Z<tt;Z++)H[Z]=0}function S(H){y(H,0)}function y(H,Z){const tt=c.newAttributes,st=c.enabledAttributes,K=c.attributeDivisors;tt[H]=1,st[H]===0&&(r.enableVertexAttribArray(H),st[H]=1),K[H]!==Z&&(r.vertexAttribDivisor(H,Z),K[H]=Z)}function D(){const H=c.newAttributes,Z=c.enabledAttributes;for(let tt=0,st=Z.length;tt<st;tt++)Z[tt]!==H[tt]&&(r.disableVertexAttribArray(tt),Z[tt]=0)}function P(H,Z,tt,st,K,N,I){I===!0?r.vertexAttribIPointer(H,Z,tt,K,N):r.vertexAttribPointer(H,Z,tt,st,K,N)}function U(H,Z,tt,st){w();const K=st.attributes,N=tt.getAttributes(),I=Z.defaultAttributeValues;for(const lt in N){const dt=N[lt];if(dt.location>=0){let Et=K[lt];if(Et===void 0&&(lt==="instanceMatrix"&&H.instanceMatrix&&(Et=H.instanceMatrix),lt==="instanceColor"&&H.instanceColor&&(Et=H.instanceColor)),Et!==void 0){const O=Et.normalized,Y=Et.itemSize,gt=t.get(Et);if(gt===void 0)continue;const At=gt.buffer,Bt=gt.type,it=gt.bytesPerElement,vt=Bt===r.INT||Bt===r.UNSIGNED_INT||Et.gpuType===vp;if(Et.isInterleavedBufferAttribute){const bt=Et.data,Vt=bt.stride,Zt=Et.offset;if(bt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<dt.locationSize;Jt++)y(dt.location+Jt,bt.meshPerAttribute);H.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Jt=0;Jt<dt.locationSize;Jt++)S(dt.location+Jt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let Jt=0;Jt<dt.locationSize;Jt++)P(dt.location+Jt,Y/dt.locationSize,Bt,O,Vt*it,(Zt+Y/dt.locationSize*Jt)*it,vt)}else{if(Et.isInstancedBufferAttribute){for(let bt=0;bt<dt.locationSize;bt++)y(dt.location+bt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let bt=0;bt<dt.locationSize;bt++)S(dt.location+bt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let bt=0;bt<dt.locationSize;bt++)P(dt.location+bt,Y/dt.locationSize,Bt,O,Y*it,Y/dt.locationSize*bt*it,vt)}}else if(I!==void 0){const O=I[lt];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(dt.location,O);break;case 3:r.vertexAttrib3fv(dt.location,O);break;case 4:r.vertexAttrib4fv(dt.location,O);break;default:r.vertexAttrib1fv(dt.location,O)}}}}D()}function z(){C();for(const H in s){const Z=s[H];for(const tt in Z){const st=Z[tt];for(const K in st){const N=st[K];for(const I in N)v(N[I].object),delete N[I];delete st[K]}}delete s[H]}}function F(H){if(s[H.id]===void 0)return;const Z=s[H.id];for(const tt in Z){const st=Z[tt];for(const K in st){const N=st[K];for(const I in N)v(N[I].object),delete N[I];delete st[K]}}delete s[H.id]}function B(H){for(const Z in s){const tt=s[Z];for(const st in tt){const K=tt[st];if(K[H.id]===void 0)continue;const N=K[H.id];for(const I in N)v(N[I].object),delete N[I];delete K[H.id]}}}function T(H){for(const Z in s){const tt=s[Z],st=H.isInstancedMesh===!0?H.id:0,K=tt[st];if(K!==void 0){for(const N in K){const I=K[N];for(const lt in I)v(I[lt].object),delete I[lt];delete K[N]}delete tt[st],Object.keys(tt).length===0&&delete s[Z]}}}function C(){ct(),h=!0,c!==l&&(c=l,d(c.object))}function ct(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:C,resetDefaultState:ct,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:S,disableUnusedAttributes:D}}function FA(r,t,n){let s;function l(d){s=d}function c(d,v){r.drawArrays(s,d,v),n.update(v,s,1)}function h(d,v,x){x!==0&&(r.drawArraysInstanced(s,d,v,x),n.update(v,s,x))}function p(d,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,v,0,x);let E=0;for(let b=0;b<x;b++)E+=v[b];n.update(E,s,1)}function m(d,v,x,g){if(x===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<d.length;b++)h(d[b],v[b],g[b]);else{E.multiDrawArraysInstancedWEBGL(s,d,0,v,0,g,0,x);let b=0;for(let w=0;w<x;w++)b+=v[w]*g[w];n.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function IA(r,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Ni&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const T=B===Aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ri&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ki&&!T)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const v=m(d);v!==d&&(ie("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const x=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:U,maxSamples:z,samples:F}}function zA(r){const t=this;let n=null,s=0,l=!1,c=!1;const h=new os,p=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const E=x.length!==0||g||s!==0||l;return l=g,s=x.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){n=v(x,g,0)},this.setState=function(x,g,E){const b=x.clippingPlanes,w=x.clipIntersection,S=x.clipShadows,y=r.get(x);if(!l||b===null||b.length===0||c&&!S)c?v(null):d();else{const D=c?0:s,P=D*4;let U=y.clippingState||null;m.value=U,U=v(b,g,P,E);for(let z=0;z!==P;++z)U[z]=n[z];y.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(x,g,E,b){const w=x!==null?x.length:0;let S=null;if(w!==0){if(S=m.value,b!==!0||S===null){const y=E+w*4,D=g.matrixWorldInverse;p.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,U=E;P!==w;++P,U+=4)h.copy(x[P]).applyMatrix4(D,p),h.normal.toArray(S,U),S[U+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,S}}const cs=4,iv=[.125,.215,.35,.446,.526,.582],Is=20,HA=256,jo=new px,av=new Oe;let ad=null,sd=0,rd=0,od=!1;const GA=new J;class sv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,l=100,c={}){const{size:h=256,position:p=GA}=c;ad=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ad,sd,rd),this._renderer.xr.enabled=od,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Gs||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ad=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Aa,format:Ni,colorSpace:Wr,depthBuffer:!1},l=rv(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rv(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=VA(c)),this._blurMaterial=XA(c,t,n),this._ggxMaterial=kA(c,t,n)}return l}_compileMaterial(t){const n=new Oi(new xi,t);this._renderer.compile(n,jo)}_sceneToCubeUV(t,n,s,l,c){const m=new si(90,1,n,s),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,E=x.toneMapping;x.getClearColor(av),x.toneMapping=Wi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new ol,new uu({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let y=!1;const D=t.background;D?D.isColor&&(S.color.copy(D),t.background=null,y=!0):(S.color.copy(av),y=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[P],c.y,c.z)):U===1?(m.up.set(0,0,d[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[P],c.z)):(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[P]));const z=this._cubeSize;Ir(l,U*z,P>2?z:0,z,z),x.setRenderTarget(l),y&&x.render(w,m),x.render(t,m)}x.toneMapping=E,x.autoClear=g,t.background=D}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===Gs||t.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ov());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Ir(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(h,jo)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),x=Math.sqrt(d*d-v*v),g=0+d*1.25,E=x*g,{_lodMax:b}=this,w=this._sizeLods[s],S=3*w*(s>b-cs?s-b+cs:0),y=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=b-n,Ir(c,S,y,3*w,2*w),l.setRenderTarget(c),l.render(p,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Ir(t,S,y,3*w,2*w),l.setRenderTarget(t),l.render(p,jo)}_blur(t,n,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,n,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,E=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Is-1),w=c/b,S=isFinite(c)?1+Math.floor(v*w):Is;S>Is&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Is}`);const y=[];let D=0;for(let B=0;B<Is;++B){const T=B/w,C=Math.exp(-T*T/2);y.push(C),B===0?D+=C:B<S&&(D+=2*C)}for(let B=0;B<y.length;B++)y[B]=y[B]/D;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:P}=this;g.dTheta.value=b,g.mipInt.value=P-s;const U=this._sizeLods[l],z=3*U*(l>P-cs?l-P+cs:0),F=4*(this._cubeSize-U);Ir(n,z,F,3*U,2*U),m.setRenderTarget(n),m.render(x,jo)}}function VA(r){const t=[],n=[],s=[];let l=r;const c=r-cs+1+iv.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>r-cs?m=iv[h-r+cs-1]:h===0&&(m=0),n.push(m);const d=1/(p-2),v=-d,x=1+d,g=[v,v,x,v,x,x,v,v,x,x,v,x],E=6,b=6,w=3,S=2,y=1,D=new Float32Array(w*b*E),P=new Float32Array(S*b*E),U=new Float32Array(y*b*E);for(let F=0;F<E;F++){const B=F%3*2/3-1,T=F>2?0:-1,C=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];D.set(C,w*b*F),P.set(g,S*b*F);const ct=[F,F,F,F,F,F];U.set(ct,y*b*F)}const z=new xi;z.setAttribute("position",new ji(D,w)),z.setAttribute("uv",new ji(P,S)),z.setAttribute("faceIndex",new ji(U,y)),s.push(new Oi(z,null)),l>cs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function rv(r,t,n){const s=new Yi(r,t,n);return s.texture.mapping=du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ir(r,t,n,s,l){r.viewport.set(t,n,s,l),r.scissor.set(t,n,s,l)}function kA(r,t,n){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_u(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function XA(r,t,n){const s=new Float32Array(Is),l=new J(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_u(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function ov(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function lv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}class _x extends Yi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new ux(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ol(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:Yr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:ba});c.uniforms.tEquirect.value=n;const h=new Oi(l,c),p=n.minFilter;return n.minFilter===zs&&(n.minFilter=Dn),new ZE(1,10,this).update(t,h),n.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(n,s,l);t.setRenderTarget(c)}}function qA(r){let t=new WeakMap,n=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?h(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===Uh||E===Lh)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new _x(b.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const E=g.mapping,b=E===Uh||E===Lh,w=E===Gs||E===Xr;if(b||w){let S=n.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new sv(r)),S=b?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),S.texture;if(S!==void 0)return S.texture;{const D=g.image;return b&&D&&D.height>0||w&&D&&m(D)?(s===null&&(s=new sv(r)),S=b?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function p(g,E){return E===Uh?g.mapping=Gs:E===Lh&&(g.mapping=Xr),g}function m(g){let E=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&E++;return E===b}function d(g){const E=g.target;E.removeEventListener("dispose",d);const b=t.get(E);b!==void 0&&(t.delete(E),b.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const b=n.get(E);b!==void 0&&(n.delete(E),b.dispose())}function x(){t=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function WA(r){const t={};function n(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&cu("WebGLRenderer: "+s+" extension not supported."),l}}}function YA(r,t,n,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",h),delete l[g.id];const E=c.get(g);E&&(t.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,n.memory.geometries++),g}function m(x){const g=x.attributes;for(const E in g)t.update(g[E],r.ARRAY_BUFFER)}function d(x){const g=[],E=x.index,b=x.attributes.position;let w=0;if(b===void 0)return;if(E!==null){const D=E.array;w=E.version;for(let P=0,U=D.length;P<U;P+=3){const z=D[P+0],F=D[P+1],B=D[P+2];g.push(z,F,F,B,B,z)}}else{const D=b.array;w=b.version;for(let P=0,U=D.length/3-1;P<U;P+=3){const z=P+0,F=P+1,B=P+2;g.push(z,F,F,B,B,z)}}const S=new(b.count>=65535?lx:ox)(g,1);S.version=w;const y=c.get(x);y&&t.remove(y),c.set(x,S)}function v(x){const g=c.get(x);if(g){const E=x.index;E!==null&&g.version<E.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function jA(r,t,n){let s;function l(g){s=g}let c,h;function p(g){c=g.type,h=g.bytesPerElement}function m(g,E){r.drawElements(s,E,c,g*h),n.update(E,s,1)}function d(g,E,b){b!==0&&(r.drawElementsInstanced(s,E,c,g*h,b),n.update(E,s,b))}function v(g,E,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,g,0,b);let S=0;for(let y=0;y<b;y++)S+=E[y];n.update(S,s,1)}function x(g,E,b,w){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<g.length;y++)d(g[y]/h,E[y],w[y]);else{S.multiDrawElementsInstancedWEBGL(s,E,0,c,g,0,w,0,b);let y=0;for(let D=0;D<b;D++)y+=E[D]*w[D];n.update(y,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function ZA(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(n.calls++,h){case r.TRIANGLES:n.triangles+=p*(c/3);break;case r.LINES:n.lines+=p*(c/2);break;case r.LINE_STRIP:n.lines+=p*(c-1);break;case r.LINE_LOOP:n.lines+=p*c;break;case r.POINTS:n.points+=p*c;break;default:Te("WebGLInfo: Unknown draw mode:",h);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function KA(r,t,n){const s=new WeakMap,l=new en;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let ct=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",ct)};var E=ct;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let U=0;b===!0&&(U=1),w===!0&&(U=2),S===!0&&(U=3);let z=p.attributes.position.count*U,F=1;z>t.maxTextureSize&&(F=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const B=new Float32Array(z*F*4*x),T=new sx(B,z,F,x);T.type=ki,T.needsUpdate=!0;const C=U*4;for(let H=0;H<x;H++){const Z=y[H],tt=D[H],st=P[H],K=z*F*4*H;for(let N=0;N<Z.count;N++){const I=N*C;b===!0&&(l.fromBufferAttribute(Z,N),B[K+I+0]=l.x,B[K+I+1]=l.y,B[K+I+2]=l.z,B[K+I+3]=0),w===!0&&(l.fromBufferAttribute(tt,N),B[K+I+4]=l.x,B[K+I+5]=l.y,B[K+I+6]=l.z,B[K+I+7]=0),S===!0&&(l.fromBufferAttribute(st,N),B[K+I+8]=l.x,B[K+I+9]=l.y,B[K+I+10]=l.z,B[K+I+11]=st.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new oe(z,F)},s.set(p,g),p.addEventListener("dispose",ct)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,n);else{let b=0;for(let S=0;S<d.length;S++)b+=d[S];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function QA(r,t,n,s,l){let c=new WeakMap;function h(d){const v=l.render.frame,x=d.geometry,g=t.get(d,x);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:h,dispose:p}}const JA={[kv]:"LINEAR_TONE_MAPPING",[Xv]:"REINHARD_TONE_MAPPING",[qv]:"CINEON_TONE_MAPPING",[Wv]:"ACES_FILMIC_TONE_MAPPING",[jv]:"AGX_TONE_MAPPING",[Zv]:"NEUTRAL_TONE_MAPPING",[Yv]:"CUSTOM_TONE_MAPPING"};function $A(r,t,n,s,l){const c=new Yi(t,n,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Yi(t,n,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),p=new xi;p.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new oi([0,2,0,0,2,0],2));const m=new VE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Oi(p,m),v=new px(-1,1,1,-1,0,1);let x=null,g=null,E=!1,b,w=null,S=[],y=!1;this.setSize=function(D,P){c.setSize(D,P),h.setSize(D,P);for(let U=0;U<S.length;U++){const z=S[U];z.setSize&&z.setSize(D,P)}},this.setEffects=function(D){S=D,y=S.length>0&&S[0].isRenderPass===!0;const P=c.width,U=c.height;for(let z=0;z<S.length;z++){const F=S[z];F.setSize&&F.setSize(P,U)}},this.begin=function(D,P){if(E||D.toneMapping===Wi&&S.length===0)return!1;if(w=P,P!==null){const U=P.width,z=P.height;(c.width!==U||c.height!==z)&&this.setSize(U,z)}return y===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=Wi,!0},this.hasRenderPass=function(){return y},this.end=function(D,P){D.toneMapping=b,E=!0;let U=c,z=h;for(let F=0;F<S.length;F++){const B=S[F];if(B.enabled!==!1&&(B.render(D,z,U,P),B.needsSwap!==!1)){const T=U;U=z,z=T}}if(x!==D.outputColorSpace||g!==D.toneMapping){x=D.outputColorSpace,g=D.toneMapping,m.defines={},Ae.getTransfer(x)===Ie&&(m.defines.SRGB_TRANSFER="");const F=JA[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(w),D.render(d,v),w=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const gx=new Fn,cp=new il(1,1),vx=new sx,xx=new vE,yx=new ux,cv=[],uv=[],fv=new Float32Array(16),hv=new Float32Array(9),dv=new Float32Array(4);function Zr(r,t,n){const s=r[0];if(s<=0||s>0)return r;const l=t*n;let c=cv[l];if(c===void 0&&(c=new Float32Array(l),cv[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=n,r[h].toArray(c,p)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==t[n])return!1;return!0}function xn(r,t){for(let n=0,s=t.length;n<s;n++)r[n]=t[n]}function gu(r,t){let n=uv[t];n===void 0&&(n=new Int32Array(t),uv[t]=n);for(let s=0;s!==t;++s)n[s]=r.allocateTextureUnit();return n}function t1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function e1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;r.uniform2fv(this.addr,t),xn(n,t)}}function n1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(vn(n,t))return;r.uniform3fv(this.addr,t),xn(n,t)}}function i1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;r.uniform4fv(this.addr,t),xn(n,t)}}function a1(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(vn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(n,t)}else{if(vn(n,s))return;dv.set(s),r.uniformMatrix2fv(this.addr,!1,dv),xn(n,s)}}function s1(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(vn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(n,t)}else{if(vn(n,s))return;hv.set(s),r.uniformMatrix3fv(this.addr,!1,hv),xn(n,s)}}function r1(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(vn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(n,t)}else{if(vn(n,s))return;fv.set(s),r.uniformMatrix4fv(this.addr,!1,fv),xn(n,s)}}function o1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function l1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;r.uniform2iv(this.addr,t),xn(n,t)}}function c1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;r.uniform3iv(this.addr,t),xn(n,t)}}function u1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;r.uniform4iv(this.addr,t),xn(n,t)}}function f1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function h1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;r.uniform2uiv(this.addr,t),xn(n,t)}}function d1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;r.uniform3uiv(this.addr,t),xn(n,t)}}function p1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;r.uniform4uiv(this.addr,t),xn(n,t)}}function m1(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(cp.compareFunction=n.isReversedDepthBuffer()?Tp:bp,c=cp):c=gx,n.setTexture2D(t||c,l)}function _1(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||xx,l)}function g1(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||yx,l)}function v1(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||vx,l)}function x1(r){switch(r){case 5126:return t1;case 35664:return e1;case 35665:return n1;case 35666:return i1;case 35674:return a1;case 35675:return s1;case 35676:return r1;case 5124:case 35670:return o1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return f1;case 36294:return h1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return v1}}function y1(r,t){r.uniform1fv(this.addr,t)}function S1(r,t){const n=Zr(t,this.size,2);r.uniform2fv(this.addr,n)}function M1(r,t){const n=Zr(t,this.size,3);r.uniform3fv(this.addr,n)}function E1(r,t){const n=Zr(t,this.size,4);r.uniform4fv(this.addr,n)}function b1(r,t){const n=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function T1(r,t){const n=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function A1(r,t){const n=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function R1(r,t){r.uniform1iv(this.addr,t)}function C1(r,t){r.uniform2iv(this.addr,t)}function w1(r,t){r.uniform3iv(this.addr,t)}function D1(r,t){r.uniform4iv(this.addr,t)}function U1(r,t){r.uniform1uiv(this.addr,t)}function L1(r,t){r.uniform2uiv(this.addr,t)}function N1(r,t){r.uniform3uiv(this.addr,t)}function O1(r,t){r.uniform4uiv(this.addr,t)}function P1(r,t,n){const s=this.cache,l=t.length,c=gu(n,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=cp:h=gx;for(let p=0;p!==l;++p)n.setTexture2D(t[p]||h,c[p])}function B1(r,t,n){const s=this.cache,l=t.length,c=gu(n,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)n.setTexture3D(t[h]||xx,c[h])}function F1(r,t,n){const s=this.cache,l=t.length,c=gu(n,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)n.setTextureCube(t[h]||yx,c[h])}function I1(r,t,n){const s=this.cache,l=t.length,c=gu(n,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)n.setTexture2DArray(t[h]||vx,c[h])}function z1(r){switch(r){case 5126:return y1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return b1;case 35675:return T1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return w1;case 35669:case 35673:return D1;case 5125:return U1;case 36294:return L1;case 36295:return N1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return I1}}class H1{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=x1(n.type)}}class G1{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=z1(n.type)}}class V1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,n[p.id],s)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function pv(r,t){r.seq.push(t),r.map[t.id]=t}function k1(r,t,n){const s=r.name,l=s.length;for(ld.lastIndex=0;;){const c=ld.exec(s),h=ld.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){pv(n,d===void 0?new H1(p,r,t):new G1(p,r,t));break}else{let x=n.map[p];x===void 0&&(x=new V1(p),pv(n,x)),n=x}}}class ru{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=t.getActiveUniform(n,h),m=t.getUniformLocation(n,p.name);k1(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,h=n.length;c!==h;++c){const p=n[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in n&&s.push(h)}return s}}function mv(r,t,n){const s=r.createShader(t);return r.shaderSource(s,n),r.compileShader(s),s}const X1=37297;let q1=0;function W1(r,t){const n=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${n[h]}`)}return s.join(`
`)}const _v=new he;function Y1(r){Ae._getMatrix(_v,Ae.workingColorSpace,r);const t=`mat3( ${_v.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(r)){case ou:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function gv(r,t,n){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return n.toUpperCase()+`

`+c+`

`+W1(r.getShaderSource(t),p)}else return c}function j1(r,t){const n=Y1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Z1={[kv]:"Linear",[Xv]:"Reinhard",[qv]:"Cineon",[Wv]:"ACESFilmic",[jv]:"AgX",[Zv]:"Neutral",[Yv]:"Custom"};function K1(r,t){const n=Z1[t];return n===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jc=new J;function Q1(){Ae.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),t=jc.y.toFixed(4),n=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function $1(r){const t=[];for(const n in r){const s=r[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function tR(r,t){const n={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),n[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:p}}return n}function Jo(r){return r!==""}function vv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eR=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(r){return r.replace(eR,iR)}const nR=new Map;function iR(r,t){let n=de[t];if(n===void 0){const s=nR.get(t);if(s!==void 0)n=de[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return up(n)}const aR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yv(r){return r.replace(aR,sR)}function sR(r,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Sv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const rR={[tu]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function oR(r){return rR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lR={[Gs]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function cR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":lR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const uR={[Xr]:"ENVMAP_MODE_REFRACTION"};function fR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":uR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hR={[Vv]:"ENVMAP_BLENDING_MULTIPLY",[ZM]:"ENVMAP_BLENDING_MIX",[KM]:"ENVMAP_BLENDING_ADD"};function dR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":hR[r.combine]||"ENVMAP_BLENDING_NONE"}function pR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function mR(r,t,n,s){const l=r.getContext(),c=n.defines;let h=n.vertexShader,p=n.fragmentShader;const m=oR(n),d=cR(n),v=fR(n),x=dR(n),g=pR(n),E=J1(n),b=$1(c),w=l.createProgram();let S,y,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Jo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Jo).join(`
`),y.length>0&&(y+=`
`)):(S=[Sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),y=[Sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?de.tonemapping_pars_fragment:"",n.toneMapping!==Wi?K1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,j1("linearToOutputTexel",n.outputColorSpace),Q1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jo).join(`
`)),h=up(h),h=vv(h,n),h=xv(h,n),p=up(p),p=vv(p,n),p=xv(p,n),h=yv(h),p=yv(p),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===D0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===D0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=D+S+h,U=D+y+p,z=mv(l,l.VERTEX_SHADER,P),F=mv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,z),l.attachShader(w,F),n.index0AttributeName!==void 0?l.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(H){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(w)||"",tt=l.getShaderInfoLog(z)||"",st=l.getShaderInfoLog(F)||"",K=Z.trim(),N=tt.trim(),I=st.trim();let lt=!0,dt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(lt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,z,F);else{const Et=gv(l,z,"vertex"),O=gv(l,F,"fragment");Te("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+K+`
`+Et+`
`+O)}else K!==""?ie("WebGLProgram: Program Info Log:",K):(N===""||I==="")&&(dt=!1);dt&&(H.diagnostics={runnable:lt,programLog:K,vertexShader:{log:N,prefix:S},fragmentShader:{log:I,prefix:y}})}l.deleteShader(z),l.deleteShader(F),T=new ru(l,w),C=tR(l,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let ct=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ct===!1&&(ct=l.getProgramParameter(w,X1)),ct},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=q1++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=F,this}let _R=0;class gR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new vR(t),n.set(t,s)),s}}class vR{constructor(t){this.id=_R++,this.code=t,this.usedTimes=0}}function xR(r,t,n,s,l,c){const h=new Rp,p=new gR,m=new Set,d=[],v=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,C,ct,H,Z){const tt=H.fog,st=Z.geometry,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,N=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,I=t.get(T.envMap||K,N),lt=I&&I.mapping===du?I.image.height:null,dt=E[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ie("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Et=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,O=Et!==void 0?Et.length:0;let Y=0;st.morphAttributes.position!==void 0&&(Y=1),st.morphAttributes.normal!==void 0&&(Y=2),st.morphAttributes.color!==void 0&&(Y=3);let gt,At,Bt,it;if(dt){const be=Vi[dt];gt=be.vertexShader,At=be.fragmentShader}else gt=T.vertexShader,At=T.fragmentShader,p.update(T),Bt=p.getVertexShaderID(T),it=p.getFragmentShaderID(T);const vt=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Vt=Z.isInstancedMesh===!0,Zt=Z.isBatchedMesh===!0,Jt=!!T.map,Je=!!T.matcap,ve=!!I,pe=!!T.aoMap,De=!!T.lightMap,re=!!T.bumpMap,Qe=!!T.normalMap,V=!!T.displacementMap,We=!!T.emissiveMap,Ee=!!T.metalnessMap,Le=!!T.roughnessMap,qt=T.anisotropy>0,L=T.clearcoat>0,M=T.dispersion>0,W=T.iridescence>0,pt=T.sheen>0,xt=T.transmission>0,ft=qt&&!!T.anisotropyMap,kt=L&&!!T.clearcoatMap,Ct=L&&!!T.clearcoatNormalMap,jt=L&&!!T.clearcoatRoughnessMap,$t=W&&!!T.iridescenceMap,Mt=W&&!!T.iridescenceThicknessMap,yt=pt&&!!T.sheenColorMap,Nt=pt&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Ot=!!T.specularColorMap,ce=!!T.specularIntensityMap,q=xt&&!!T.transmissionMap,Rt=xt&&!!T.thicknessMap,Tt=!!T.gradientMap,Pt=!!T.alphaMap,St=T.alphaTest>0,ut=!!T.alphaHash,It=!!T.extensions;let ee=Wi;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ee=r.toneMapping);const Pe={shaderID:dt,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:At,defines:T.defines,customVertexShaderID:Bt,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Zt,batchingColor:Zt&&Z._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&Z.instanceColor!==null,instancingMorph:Vt&&Z.morphTexture!==null,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Wr,alphaToCoverage:!!T.alphaToCoverage,map:Jt,matcap:Je,envMap:ve,envMapMode:ve&&I.mapping,envMapCubeUVHeight:lt,aoMap:pe,lightMap:De,bumpMap:re,normalMap:Qe,displacementMap:V,emissiveMap:We,normalMapObjectSpace:Qe&&T.normalMapType===tE,normalMapTangentSpace:Qe&&T.normalMapType===$M,metalnessMap:Ee,roughnessMap:Le,anisotropy:qt,anisotropyMap:ft,clearcoat:L,clearcoatMap:kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:M,iridescence:W,iridescenceMap:$t,iridescenceThicknessMap:Mt,sheen:pt,sheenColorMap:yt,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:Ot,specularIntensityMap:ce,transmission:xt,transmissionMap:q,thicknessMap:Rt,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===Gr&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:ut,combine:T.combine,mapUv:Jt&&b(T.map.channel),aoMapUv:pe&&b(T.aoMap.channel),lightMapUv:De&&b(T.lightMap.channel),bumpMapUv:re&&b(T.bumpMap.channel),normalMapUv:Qe&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:We&&b(T.emissiveMap.channel),metalnessMapUv:Ee&&b(T.metalnessMap.channel),roughnessMapUv:Le&&b(T.roughnessMap.channel),anisotropyMapUv:ft&&b(T.anisotropyMap.channel),clearcoatMapUv:kt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&b(T.sheenRoughnessMap.channel),specularMapUv:Lt&&b(T.specularMap.channel),specularColorMapUv:Ot&&b(T.specularColorMap.channel),specularIntensityMapUv:ce&&b(T.specularIntensityMap.channel),transmissionMapUv:q&&b(T.transmissionMap.channel),thicknessMapUv:Rt&&b(T.thicknessMap.channel),alphaMapUv:Pt&&b(T.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Qe||qt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!st.attributes.uv&&(Jt||Pt),fog:!!tt,useFog:T.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||st.attributes.normal===void 0&&Qe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:bt,skinning:Z.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ct.length>0,shadowMapType:r.shadowMap.type,toneMapping:ee,decodeVideoTexture:Jt&&T.map.isVideoTexture===!0&&Ae.getTransfer(T.map.colorSpace)===Ie,decodeVideoTextureEmissive:We&&T.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(T.emissiveMap.colorSpace)===Ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ma,flipSided:T.side===Yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:It&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&T.extensions.multiDraw===!0||Zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pe.vertexUv1s=m.has(1),Pe.vertexUv2s=m.has(2),Pe.vertexUv3s=m.has(3),m.clear(),Pe}function S(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ct in T.defines)C.push(ct),C.push(T.defines[ct]);return T.isRawShaderMaterial===!1&&(y(C,T),D(C,T),C.push(r.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function y(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function D(T,C){h.disableAll(),C.instancing&&h.enable(0),C.instancingColor&&h.enable(1),C.instancingMorph&&h.enable(2),C.matcap&&h.enable(3),C.envMap&&h.enable(4),C.normalMapObjectSpace&&h.enable(5),C.normalMapTangentSpace&&h.enable(6),C.clearcoat&&h.enable(7),C.iridescence&&h.enable(8),C.alphaTest&&h.enable(9),C.vertexColors&&h.enable(10),C.vertexAlphas&&h.enable(11),C.vertexUv1s&&h.enable(12),C.vertexUv2s&&h.enable(13),C.vertexUv3s&&h.enable(14),C.vertexTangents&&h.enable(15),C.anisotropy&&h.enable(16),C.alphaHash&&h.enable(17),C.batching&&h.enable(18),C.dispersion&&h.enable(19),C.batchingColor&&h.enable(20),C.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),T.push(h.mask)}function P(T){const C=E[T.type];let ct;if(C){const H=Vi[C];ct=zE.clone(H.uniforms)}else ct=T.uniforms;return ct}function U(T,C){let ct=v.get(C);return ct!==void 0?++ct.usedTimes:(ct=new mR(r,C,T,l),d.push(ct),v.set(C,ct)),ct}function z(T){if(--T.usedTimes===0){const C=d.indexOf(T);d[C]=d[d.length-1],d.pop(),v.delete(T.cacheKey),T.destroy()}}function F(T){p.remove(T)}function B(){p.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:P,acquireProgram:U,releaseProgram:z,releaseShaderCache:F,programs:d,dispose:B}}function yR(){let r=new WeakMap;function t(h){return r.has(h)}function n(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function SR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Mv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ev(){const r=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function h(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function p(g,E,b,w,S,y){let D=r[t];return D===void 0?(D={id:g.id,object:g,geometry:E,material:b,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:S,group:y},r[t]=D):(D.id=g.id,D.object=g,D.geometry=E,D.material=b,D.materialVariant=h(g),D.groupOrder=w,D.renderOrder=g.renderOrder,D.z=S,D.group=y),t++,D}function m(g,E,b,w,S,y){const D=p(g,E,b,w,S,y);b.transmission>0?s.push(D):b.transparent===!0?l.push(D):n.push(D)}function d(g,E,b,w,S,y){const D=p(g,E,b,w,S,y);b.transmission>0?s.unshift(D):b.transparent===!0?l.unshift(D):n.unshift(D)}function v(g,E){n.length>1&&n.sort(g||SR),s.length>1&&s.sort(E||Mv),l.length>1&&l.sort(E||Mv)}function x(){for(let g=t,E=r.length;g<E;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:v}}function MR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Ev,r.set(s,[h])):l>=c.length?(h=new Ev,c.push(h)):h=c[l],h}function n(){r=new WeakMap}return{get:t,dispose:n}}function ER(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new J,color:new Oe};break;case"SpotLight":n={position:new J,direction:new J,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=n,n}}}function bR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let TR=0;function AR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function RR(r){const t=new ER,n=bR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new J);const l=new J,c=new Ke,h=new Ke;function p(d){let v=0,x=0,g=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let E=0,b=0,w=0,S=0,y=0,D=0,P=0,U=0,z=0,F=0,B=0;d.sort(AR);for(let C=0,ct=d.length;C<ct;C++){const H=d[C],Z=H.color,tt=H.intensity,st=H.distance;let K=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===qr?K=H.shadow.map.texture:K=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=Z.r*tt,x+=Z.g*tt,g+=Z.b*tt;else if(H.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(H.sh.coefficients[N],tt);B++}else if(H.isDirectionalLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const I=H.shadow,lt=n.get(H);lt.shadowIntensity=I.intensity,lt.shadowBias=I.bias,lt.shadowNormalBias=I.normalBias,lt.shadowRadius=I.radius,lt.shadowMapSize=I.mapSize,s.directionalShadow[E]=lt,s.directionalShadowMap[E]=K,s.directionalShadowMatrix[E]=H.shadow.matrix,D++}s.directional[E]=N,E++}else if(H.isSpotLight){const N=t.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(Z).multiplyScalar(tt),N.distance=st,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,s.spot[w]=N;const I=H.shadow;if(H.map&&(s.spotLightMap[z]=H.map,z++,I.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[w]=I.matrix,H.castShadow){const lt=n.get(H);lt.shadowIntensity=I.intensity,lt.shadowBias=I.bias,lt.shadowNormalBias=I.normalBias,lt.shadowRadius=I.radius,lt.shadowMapSize=I.mapSize,s.spotShadow[w]=lt,s.spotShadowMap[w]=K,U++}w++}else if(H.isRectAreaLight){const N=t.get(H);N.color.copy(Z).multiplyScalar(tt),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=N,S++}else if(H.isPointLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const I=H.shadow,lt=n.get(H);lt.shadowIntensity=I.intensity,lt.shadowBias=I.bias,lt.shadowNormalBias=I.normalBias,lt.shadowRadius=I.radius,lt.shadowMapSize=I.mapSize,lt.shadowCameraNear=I.camera.near,lt.shadowCameraFar=I.camera.far,s.pointShadow[b]=lt,s.pointShadowMap[b]=K,s.pointShadowMatrix[b]=H.shadow.matrix,P++}s.point[b]=N,b++}else if(H.isHemisphereLight){const N=t.get(H);N.skyColor.copy(H.color).multiplyScalar(tt),N.groundColor.copy(H.groundColor).multiplyScalar(tt),s.hemi[y]=N,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==E||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==D||T.numPointShadows!==P||T.numSpotShadows!==U||T.numSpotMaps!==z||T.numLightProbes!==B)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=S,s.point.length=b,s.hemi.length=y,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=U+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=B,T.directionalLength=E,T.pointLength=b,T.spotLength=w,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=D,T.numPointShadows=P,T.numSpotShadows=U,T.numSpotMaps=z,T.numLightProbes=B,s.version=TR++)}function m(d,v){let x=0,g=0,E=0,b=0,w=0;const S=v.matrixWorldInverse;for(let y=0,D=d.length;y<D;y++){const P=d[y];if(P.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),x++}else if(P.isSpotLight){const U=s.spot[E];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),E++}else if(P.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),h.identity(),c.copy(P.matrixWorld),c.premultiply(S),h.extractRotation(c),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),g++}else if(P.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(S),w++}}}return{setup:p,setupView:m,state:s}}function bv(r){const t=new RR(r),n=[],s=[];function l(v){d.camera=v,n.length=0,s.length=0}function c(v){n.push(v)}function h(v){s.push(v)}function p(){t.setup(n)}function m(v){t.setupView(n,v)}const d={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:h}}function CR(r){let t=new WeakMap;function n(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new bv(r),t.set(l,[p])):c>=h.length?(p=new bv(r),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:n,dispose:s}}const wR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,UR=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],LR=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Tv=new Ke,Zo=new J,cd=new J;function NR(r,t,n){let s=new Cp;const l=new oe,c=new oe,h=new en,p=new kE,m=new XE,d={},v=n.maxTextureSize,x={[fs]:Yn,[Yn]:fs,[Ma]:Ma},g=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:wR,fragmentShader:DR}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const b=new xi;b.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Oi(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let y=this.type;this.render=function(F,B,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;this.type===DM&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tu);const C=r.getRenderTarget(),ct=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(ba),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const tt=y!==this.type;tt&&B.traverse(function(st){st.material&&(Array.isArray(st.material)?st.material.forEach(K=>K.needsUpdate=!0):st.material.needsUpdate=!0)});for(let st=0,K=F.length;st<K;st++){const N=F[st],I=N.shadow;if(I===void 0){ie("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const lt=I.getFrameExtents();l.multiply(lt),c.copy(I.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/lt.x),l.x=c.x*lt.x,I.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/lt.y),l.y=c.y*lt.y,I.mapSize.y=c.y));const dt=r.state.buffers.depth.getReversed();if(I.camera._reversedDepth=dt,I.map===null||tt===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Qo){if(N.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Yi(l.x,l.y,{format:qr,type:Aa,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new il(l.x,l.y,ki),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=Ra,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=An,I.map.depthTexture.magFilter=An}else N.isPointLight?(I.map=new _x(l.x),I.map.depthTexture=new FE(l.x,Ki)):(I.map=new Yi(l.x,l.y),I.map.depthTexture=new il(l.x,l.y,Ki)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=Ra,this.type===tu?(I.map.depthTexture.compareFunction=dt?Tp:bp,I.map.depthTexture.minFilter=Dn,I.map.depthTexture.magFilter=Dn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=An,I.map.depthTexture.magFilter=An);I.camera.updateProjectionMatrix()}const Et=I.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Et;O++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,O),r.clear();else{O===0&&(r.setRenderTarget(I.map),r.clear());const Y=I.getViewport(O);h.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),Z.viewport(h)}if(N.isPointLight){const Y=I.camera,gt=I.matrix,At=N.distance||Y.far;At!==Y.far&&(Y.far=At,Y.updateProjectionMatrix()),Zo.setFromMatrixPosition(N.matrixWorld),Y.position.copy(Zo),cd.copy(Y.position),cd.add(UR[O]),Y.up.copy(LR[O]),Y.lookAt(cd),Y.updateMatrixWorld(),gt.makeTranslation(-Zo.x,-Zo.y,-Zo.z),Tv.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Tv,Y.coordinateSystem,Y.reversedDepth)}else I.updateMatrices(N);s=I.getFrustum(),U(B,T,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===Qo&&D(I,T),I.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(C,ct,H)};function D(F,B){const T=t.update(w);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,E.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Yi(l.x,l.y,{format:qr,type:Aa})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(B,null,T,g,w,null),E.uniforms.shadow_pass.value=F.mapPass.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(B,null,T,E,w,null)}function P(F,B,T,C){let ct=null;const H=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)ct=H;else if(ct=T.isPointLight===!0?m:p,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=ct.uuid,tt=B.uuid;let st=d[Z];st===void 0&&(st={},d[Z]=st);let K=st[tt];K===void 0&&(K=ct.clone(),st[tt]=K,B.addEventListener("dispose",z)),ct=K}if(ct.visible=B.visible,ct.wireframe=B.wireframe,C===Qo?ct.side=B.shadowSide!==null?B.shadowSide:B.side:ct.side=B.shadowSide!==null?B.shadowSide:x[B.side],ct.alphaMap=B.alphaMap,ct.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,ct.map=B.map,ct.clipShadows=B.clipShadows,ct.clippingPlanes=B.clippingPlanes,ct.clipIntersection=B.clipIntersection,ct.displacementMap=B.displacementMap,ct.displacementScale=B.displacementScale,ct.displacementBias=B.displacementBias,ct.wireframeLinewidth=B.wireframeLinewidth,ct.linewidth=B.linewidth,T.isPointLight===!0&&ct.isMeshDistanceMaterial===!0){const Z=r.properties.get(ct);Z.light=T}return ct}function U(F,B,T,C,ct){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&ct===Qo)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const tt=t.update(F),st=F.material;if(Array.isArray(st)){const K=tt.groups;for(let N=0,I=K.length;N<I;N++){const lt=K[N],dt=st[lt.materialIndex];if(dt&&dt.visible){const Et=P(F,dt,C,ct);F.onBeforeShadow(r,F,B,T,tt,Et,lt),r.renderBufferDirect(T,null,tt,Et,F,lt),F.onAfterShadow(r,F,B,T,tt,Et,lt)}}}else if(st.visible){const K=P(F,st,C,ct);F.onBeforeShadow(r,F,B,T,tt,K,null),r.renderBufferDirect(T,null,tt,K,F,null),F.onAfterShadow(r,F,B,T,tt,K,null)}}const Z=F.children;for(let tt=0,st=Z.length;tt<st;tt++)U(Z[tt],B,T,C,ct)}function z(F){F.target.removeEventListener("dispose",z);for(const T in d){const C=d[T],ct=F.target.uuid;ct in C&&(C[ct].dispose(),delete C[ct])}}}function OR(r,t){function n(){let q=!1;const Rt=new en;let Tt=null;const Pt=new en(0,0,0,0);return{setMask:function(St){Tt!==St&&!q&&(r.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){q=St},setClear:function(St,ut,It,ee,Pe){Pe===!0&&(St*=ee,ut*=ee,It*=ee),Rt.set(St,ut,It,ee),Pt.equals(Rt)===!1&&(r.clearColor(St,ut,It,ee),Pt.copy(Rt))},reset:function(){q=!1,Tt=null,Pt.set(-1,0,0,0)}}}function s(){let q=!1,Rt=!1,Tt=null,Pt=null,St=null;return{setReversed:function(ut){if(Rt!==ut){const It=t.get("EXT_clip_control");ut?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Rt=ut;const ee=St;St=null,this.setClear(ee)}},getReversed:function(){return Rt},setTest:function(ut){ut?vt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(ut){Tt!==ut&&!q&&(r.depthMask(ut),Tt=ut)},setFunc:function(ut){if(Rt&&(ut=uE[ut]),Pt!==ut){switch(ut){case xd:r.depthFunc(r.NEVER);break;case yd:r.depthFunc(r.ALWAYS);break;case Sd:r.depthFunc(r.LESS);break;case kr:r.depthFunc(r.LEQUAL);break;case Md:r.depthFunc(r.EQUAL);break;case Ed:r.depthFunc(r.GEQUAL);break;case bd:r.depthFunc(r.GREATER);break;case Td:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pt=ut}},setLocked:function(ut){q=ut},setClear:function(ut){St!==ut&&(St=ut,Rt&&(ut=1-ut),r.clearDepth(ut))},reset:function(){q=!1,Tt=null,Pt=null,St=null,Rt=!1}}}function l(){let q=!1,Rt=null,Tt=null,Pt=null,St=null,ut=null,It=null,ee=null,Pe=null;return{setTest:function(be){q||(be?vt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(be){Rt!==be&&!q&&(r.stencilMask(be),Rt=be)},setFunc:function(be,Un,yi){(Tt!==be||Pt!==Un||St!==yi)&&(r.stencilFunc(be,Un,yi),Tt=be,Pt=Un,St=yi)},setOp:function(be,Un,yi){(ut!==be||It!==Un||ee!==yi)&&(r.stencilOp(be,Un,yi),ut=be,It=Un,ee=yi)},setLocked:function(be){q=be},setClear:function(be){Pe!==be&&(r.clearStencil(be),Pe=be)},reset:function(){q=!1,Rt=null,Tt=null,Pt=null,St=null,ut=null,It=null,ee=null,Pe=null}}}const c=new n,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let v={},x={},g=new WeakMap,E=[],b=null,w=!1,S=null,y=null,D=null,P=null,U=null,z=null,F=null,B=new Oe(0,0,0),T=0,C=!1,ct=null,H=null,Z=null,tt=null,st=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const lt=r.getParameter(r.VERSION);lt.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(lt)[1]),N=I>=1):lt.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),N=I>=2);let dt=null,Et={};const O=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),gt=new en().fromArray(O),At=new en().fromArray(Y);function Bt(q,Rt,Tt,Pt){const St=new Uint8Array(4),ut=r.createTexture();r.bindTexture(q,ut),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let It=0;It<Tt;It++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Pt,0,r.RGBA,r.UNSIGNED_BYTE,St):r.texImage2D(Rt+It,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,St);return ut}const it={};it[r.TEXTURE_2D]=Bt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Bt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Bt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Bt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),vt(r.DEPTH_TEST),h.setFunc(kr),re(!1),Qe(b0),vt(r.CULL_FACE),pe(ba);function vt(q){v[q]!==!0&&(r.enable(q),v[q]=!0)}function bt(q){v[q]!==!1&&(r.disable(q),v[q]=!1)}function Vt(q,Rt){return x[q]!==Rt?(r.bindFramebuffer(q,Rt),x[q]=Rt,q===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Rt),q===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Zt(q,Rt){let Tt=E,Pt=!1;if(q){Tt=g.get(Rt),Tt===void 0&&(Tt=[],g.set(Rt,Tt));const St=q.textures;if(Tt.length!==St.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,It=St.length;ut<It;ut++)Tt[ut]=r.COLOR_ATTACHMENT0+ut;Tt.length=St.length,Pt=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,Pt=!0);Pt&&r.drawBuffers(Tt)}function Jt(q){return b!==q?(r.useProgram(q),b=q,!0):!1}const Je={[Fs]:r.FUNC_ADD,[LM]:r.FUNC_SUBTRACT,[NM]:r.FUNC_REVERSE_SUBTRACT};Je[OM]=r.MIN,Je[PM]=r.MAX;const ve={[BM]:r.ZERO,[FM]:r.ONE,[IM]:r.SRC_COLOR,[gd]:r.SRC_ALPHA,[XM]:r.SRC_ALPHA_SATURATE,[VM]:r.DST_COLOR,[HM]:r.DST_ALPHA,[zM]:r.ONE_MINUS_SRC_COLOR,[vd]:r.ONE_MINUS_SRC_ALPHA,[kM]:r.ONE_MINUS_DST_COLOR,[GM]:r.ONE_MINUS_DST_ALPHA,[qM]:r.CONSTANT_COLOR,[WM]:r.ONE_MINUS_CONSTANT_COLOR,[YM]:r.CONSTANT_ALPHA,[jM]:r.ONE_MINUS_CONSTANT_ALPHA};function pe(q,Rt,Tt,Pt,St,ut,It,ee,Pe,be){if(q===ba){w===!0&&(bt(r.BLEND),w=!1);return}if(w===!1&&(vt(r.BLEND),w=!0),q!==UM){if(q!==S||be!==C){if((y!==Fs||U!==Fs)&&(r.blendEquation(r.FUNC_ADD),y=Fs,U=Fs),be)switch(q){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case T0:r.blendFunc(r.ONE,r.ONE);break;case A0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case R0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Te("WebGLState: Invalid blending: ",q);break}else switch(q){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case T0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case A0:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R0:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",q);break}D=null,P=null,z=null,F=null,B.set(0,0,0),T=0,S=q,C=be}return}St=St||Rt,ut=ut||Tt,It=It||Pt,(Rt!==y||St!==U)&&(r.blendEquationSeparate(Je[Rt],Je[St]),y=Rt,U=St),(Tt!==D||Pt!==P||ut!==z||It!==F)&&(r.blendFuncSeparate(ve[Tt],ve[Pt],ve[ut],ve[It]),D=Tt,P=Pt,z=ut,F=It),(ee.equals(B)===!1||Pe!==T)&&(r.blendColor(ee.r,ee.g,ee.b,Pe),B.copy(ee),T=Pe),S=q,C=!1}function De(q,Rt){q.side===Ma?bt(r.CULL_FACE):vt(r.CULL_FACE);let Tt=q.side===Yn;Rt&&(Tt=!Tt),re(Tt),q.blending===Gr&&q.transparent===!1?pe(ba):pe(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const Pt=q.stencilWrite;p.setTest(Pt),Pt&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),We(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function re(q){ct!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),ct=q)}function Qe(q){q!==CM?(vt(r.CULL_FACE),q!==H&&(q===b0?r.cullFace(r.BACK):q===wM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),H=q}function V(q){q!==Z&&(N&&r.lineWidth(q),Z=q)}function We(q,Rt,Tt){q?(vt(r.POLYGON_OFFSET_FILL),(tt!==Rt||st!==Tt)&&(tt=Rt,st=Tt,h.getReversed()&&(Rt=-Rt),r.polygonOffset(Rt,Tt))):bt(r.POLYGON_OFFSET_FILL)}function Ee(q){q?vt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function Le(q){q===void 0&&(q=r.TEXTURE0+K-1),dt!==q&&(r.activeTexture(q),dt=q)}function qt(q,Rt,Tt){Tt===void 0&&(dt===null?Tt=r.TEXTURE0+K-1:Tt=dt);let Pt=Et[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Et[Tt]=Pt),(Pt.type!==q||Pt.texture!==Rt)&&(dt!==Tt&&(r.activeTexture(Tt),dt=Tt),r.bindTexture(q,Rt||it[q]),Pt.type=q,Pt.texture=Rt)}function L(){const q=Et[dt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(q){Te("WebGLState:",q)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(q){Te("WebGLState:",q)}}function pt(){try{r.texSubImage2D(...arguments)}catch(q){Te("WebGLState:",q)}}function xt(){try{r.texSubImage3D(...arguments)}catch(q){Te("WebGLState:",q)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Te("WebGLState:",q)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Te("WebGLState:",q)}}function Ct(){try{r.texStorage2D(...arguments)}catch(q){Te("WebGLState:",q)}}function jt(){try{r.texStorage3D(...arguments)}catch(q){Te("WebGLState:",q)}}function $t(){try{r.texImage2D(...arguments)}catch(q){Te("WebGLState:",q)}}function Mt(){try{r.texImage3D(...arguments)}catch(q){Te("WebGLState:",q)}}function yt(q){gt.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),gt.copy(q))}function Nt(q){At.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),At.copy(q))}function Lt(q,Rt){let Tt=d.get(Rt);Tt===void 0&&(Tt=new WeakMap,d.set(Rt,Tt));let Pt=Tt.get(q);Pt===void 0&&(Pt=r.getUniformBlockIndex(Rt,q.name),Tt.set(q,Pt))}function Ot(q,Rt){const Pt=d.get(Rt).get(q);m.get(Rt)!==Pt&&(r.uniformBlockBinding(Rt,Pt,q.__bindingPointIndex),m.set(Rt,Pt))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},dt=null,Et={},x={},g=new WeakMap,E=[],b=null,w=!1,S=null,y=null,D=null,P=null,U=null,z=null,F=null,B=new Oe(0,0,0),T=0,C=!1,ct=null,H=null,Z=null,tt=null,st=null,gt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:vt,disable:bt,bindFramebuffer:Vt,drawBuffers:Zt,useProgram:Jt,setBlending:pe,setMaterial:De,setFlipSided:re,setCullFace:Qe,setLineWidth:V,setPolygonOffset:We,setScissorTest:Ee,activeTexture:Le,bindTexture:qt,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:$t,texImage3D:Mt,updateUBOMapping:Lt,uniformBlockBinding:Ot,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ft,compressedTexSubImage3D:kt,scissor:yt,viewport:Nt,reset:ce}}function PR(r,t,n,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new oe,v=new WeakMap;let x;const g=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,M){return E?new OffscreenCanvas(L,M):lu("canvas")}function w(L,M,W){let pt=1;const xt=qt(L);if((xt.width>W||xt.height>W)&&(pt=W/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ft=Math.floor(pt*xt.width),kt=Math.floor(pt*xt.height);x===void 0&&(x=b(ft,kt));const Ct=M?b(ft,kt):x;return Ct.width=ft,Ct.height=kt,Ct.getContext("2d").drawImage(L,0,0,ft,kt),ie("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ft+"x"+kt+")."),Ct}else return"data"in L&&ie("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){r.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(L,M,W,pt,xt=!1){if(L!==null){if(r[L]!==void 0)return r[L];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=M;if(M===r.RED&&(W===r.FLOAT&&(ft=r.R32F),W===r.HALF_FLOAT&&(ft=r.R16F),W===r.UNSIGNED_BYTE&&(ft=r.R8)),M===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.R8UI),W===r.UNSIGNED_SHORT&&(ft=r.R16UI),W===r.UNSIGNED_INT&&(ft=r.R32UI),W===r.BYTE&&(ft=r.R8I),W===r.SHORT&&(ft=r.R16I),W===r.INT&&(ft=r.R32I)),M===r.RG&&(W===r.FLOAT&&(ft=r.RG32F),W===r.HALF_FLOAT&&(ft=r.RG16F),W===r.UNSIGNED_BYTE&&(ft=r.RG8)),M===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.RG8UI),W===r.UNSIGNED_SHORT&&(ft=r.RG16UI),W===r.UNSIGNED_INT&&(ft=r.RG32UI),W===r.BYTE&&(ft=r.RG8I),W===r.SHORT&&(ft=r.RG16I),W===r.INT&&(ft=r.RG32I)),M===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),W===r.UNSIGNED_INT&&(ft=r.RGB32UI),W===r.BYTE&&(ft=r.RGB8I),W===r.SHORT&&(ft=r.RGB16I),W===r.INT&&(ft=r.RGB32I)),M===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),W===r.UNSIGNED_INT&&(ft=r.RGBA32UI),W===r.BYTE&&(ft=r.RGBA8I),W===r.SHORT&&(ft=r.RGBA16I),W===r.INT&&(ft=r.RGBA32I)),M===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),M===r.RGBA){const kt=xt?ou:Ae.getTransfer(pt);W===r.FLOAT&&(ft=r.RGBA32F),W===r.HALF_FLOAT&&(ft=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ft=kt===Ie?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function U(L,M){let W;return L?M===null||M===Ki||M===el?W=r.DEPTH24_STENCIL8:M===ki?W=r.DEPTH32F_STENCIL8:M===tl&&(W=r.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ki||M===el?W=r.DEPTH_COMPONENT24:M===ki?W=r.DEPTH_COMPONENT32F:M===tl&&(W=r.DEPTH_COMPONENT16),W}function z(L,M){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==An&&L.minFilter!==Dn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function F(L){const M=L.target;M.removeEventListener("dispose",F),T(M),M.isVideoTexture&&v.delete(M)}function B(L){const M=L.target;M.removeEventListener("dispose",B),ct(M)}function T(L){const M=s.get(L);if(M.__webglInit===void 0)return;const W=L.source,pt=g.get(W);if(pt){const xt=pt[M.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(L),Object.keys(pt).length===0&&g.delete(W)}s.remove(L)}function C(L){const M=s.get(L);r.deleteTexture(M.__webglTexture);const W=L.source,pt=g.get(W);delete pt[M.__cacheKey],h.memory.textures--}function ct(L){const M=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(M.__webglFramebuffer[pt]))for(let xt=0;xt<M.__webglFramebuffer[pt].length;xt++)r.deleteFramebuffer(M.__webglFramebuffer[pt][xt]);else r.deleteFramebuffer(M.__webglFramebuffer[pt]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[pt])}else{if(Array.isArray(M.__webglFramebuffer))for(let pt=0;pt<M.__webglFramebuffer.length;pt++)r.deleteFramebuffer(M.__webglFramebuffer[pt]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pt=0;pt<M.__webglColorRenderbuffer.length;pt++)M.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[pt]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=L.textures;for(let pt=0,xt=W.length;pt<xt;pt++){const ft=s.get(W[pt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),h.memory.textures--),s.remove(W[pt])}s.remove(L)}let H=0;function Z(){H=0}function tt(){const L=H;return L>=l.maxTextures&&ie("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function st(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function K(L,M){const W=s.get(L);if(L.isVideoTexture&&Ee(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const pt=L.image;if(pt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{it(W,L,M);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+M)}function N(L,M){const W=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){it(W,L,M);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+M)}function I(L,M){const W=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){it(W,L,M);return}n.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+M)}function lt(L,M){const W=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){vt(W,L,M);return}n.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+M)}const dt={[Ad]:r.REPEAT,[Ea]:r.CLAMP_TO_EDGE,[Rd]:r.MIRRORED_REPEAT},Et={[An]:r.NEAREST,[QM]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Nh]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},O={[eE]:r.NEVER,[rE]:r.ALWAYS,[nE]:r.LESS,[bp]:r.LEQUAL,[iE]:r.EQUAL,[Tp]:r.GEQUAL,[aE]:r.GREATER,[sE]:r.NOTEQUAL};function Y(L,M){if(M.type===ki&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Dn||M.magFilter===Nh||M.magFilter===bc||M.magFilter===zs||M.minFilter===Dn||M.minFilter===Nh||M.minFilter===bc||M.minFilter===zs)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,dt[M.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,dt[M.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,dt[M.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Et[M.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Et[M.minFilter]),M.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==bc&&M.minFilter!==zs||M.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function gt(L,M){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",F));const pt=M.source;let xt=g.get(pt);xt===void 0&&(xt={},g.set(pt,xt));const ft=st(M);if(ft!==L.__cacheKey){xt[ft]===void 0&&(xt[ft]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,W=!0),xt[ft].usedTimes++;const kt=xt[L.__cacheKey];kt!==void 0&&(xt[L.__cacheKey].usedTimes--,kt.usedTimes===0&&C(M)),L.__cacheKey=ft,L.__webglTexture=xt[ft].texture}return W}function At(L,M,W){return Math.floor(Math.floor(L/W)/M)}function Bt(L,M,W,pt){const ft=L.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,W,pt,M.data);else{ft.sort((Mt,yt)=>Mt.start-yt.start);let kt=0;for(let Mt=1;Mt<ft.length;Mt++){const yt=ft[kt],Nt=ft[Mt],Lt=yt.start+yt.count,Ot=At(Nt.start,M.width,4),ce=At(yt.start,M.width,4);Nt.start<=Lt+1&&Ot===ce&&At(Nt.start+Nt.count-1,M.width,4)===Ot?yt.count=Math.max(yt.count,Nt.start+Nt.count-yt.start):(++kt,ft[kt]=Nt)}ft.length=kt+1;const Ct=r.getParameter(r.UNPACK_ROW_LENGTH),jt=r.getParameter(r.UNPACK_SKIP_PIXELS),$t=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Mt=0,yt=ft.length;Mt<yt;Mt++){const Nt=ft[Mt],Lt=Math.floor(Nt.start/4),Ot=Math.ceil(Nt.count/4),ce=Lt%M.width,q=Math.floor(Lt/M.width),Rt=Ot,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),n.texSubImage2D(r.TEXTURE_2D,0,ce,q,Rt,Tt,W,pt,M.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,$t)}}function it(L,M,W){let pt=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pt=r.TEXTURE_3D);const xt=gt(L,M),ft=M.source;n.bindTexture(pt,L.__webglTexture,r.TEXTURE0+W);const kt=s.get(ft);if(ft.version!==kt.__version||xt===!0){n.activeTexture(r.TEXTURE0+W);const Ct=Ae.getPrimaries(Ae.workingColorSpace),jt=M.colorSpace===ls?null:Ae.getPrimaries(M.colorSpace),$t=M.colorSpace===ls||Ct===jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Mt=w(M.image,!1,l.maxTextureSize);Mt=Le(M,Mt);const yt=c.convert(M.format,M.colorSpace),Nt=c.convert(M.type);let Lt=P(M.internalFormat,yt,Nt,M.colorSpace,M.isVideoTexture);Y(pt,M);let Ot;const ce=M.mipmaps,q=M.isVideoTexture!==!0,Rt=kt.__version===void 0||xt===!0,Tt=ft.dataReady,Pt=z(M,Mt);if(M.isDepthTexture)Lt=U(M.format===Hs,M.type),Rt&&(q?n.texStorage2D(r.TEXTURE_2D,1,Lt,Mt.width,Mt.height):n.texImage2D(r.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,yt,Nt,null));else if(M.isDataTexture)if(ce.length>0){q&&Rt&&n.texStorage2D(r.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let St=0,ut=ce.length;St<ut;St++)Ot=ce[St],q?Tt&&n.texSubImage2D(r.TEXTURE_2D,St,0,0,Ot.width,Ot.height,yt,Nt,Ot.data):n.texImage2D(r.TEXTURE_2D,St,Lt,Ot.width,Ot.height,0,yt,Nt,Ot.data);M.generateMipmaps=!1}else q?(Rt&&n.texStorage2D(r.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height),Tt&&Bt(M,Mt,yt,Nt)):n.texImage2D(r.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,yt,Nt,Mt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){q&&Rt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Lt,ce[0].width,ce[0].height,Mt.depth);for(let St=0,ut=ce.length;St<ut;St++)if(Ot=ce[St],M.format!==Ni)if(yt!==null)if(q){if(Tt)if(M.layerUpdates.size>0){const It=nv(Ot.width,Ot.height,M.format,M.type);for(const ee of M.layerUpdates){const Pe=Ot.data.subarray(ee*It/Ot.data.BYTES_PER_ELEMENT,(ee+1)*It/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,ee,Ot.width,Ot.height,1,yt,Pe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Ot.width,Ot.height,Mt.depth,yt,Ot.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,St,Lt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Tt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Ot.width,Ot.height,Mt.depth,yt,Nt,Ot.data):n.texImage3D(r.TEXTURE_2D_ARRAY,St,Lt,Ot.width,Ot.height,Mt.depth,0,yt,Nt,Ot.data)}else{q&&Rt&&n.texStorage2D(r.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let St=0,ut=ce.length;St<ut;St++)Ot=ce[St],M.format!==Ni?yt!==null?q?Tt&&n.compressedTexSubImage2D(r.TEXTURE_2D,St,0,0,Ot.width,Ot.height,yt,Ot.data):n.compressedTexImage2D(r.TEXTURE_2D,St,Lt,Ot.width,Ot.height,0,Ot.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Tt&&n.texSubImage2D(r.TEXTURE_2D,St,0,0,Ot.width,Ot.height,yt,Nt,Ot.data):n.texImage2D(r.TEXTURE_2D,St,Lt,Ot.width,Ot.height,0,yt,Nt,Ot.data)}else if(M.isDataArrayTexture)if(q){if(Rt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Lt,Mt.width,Mt.height,Mt.depth),Tt)if(M.layerUpdates.size>0){const St=nv(Mt.width,Mt.height,M.format,M.type);for(const ut of M.layerUpdates){const It=Mt.data.subarray(ut*St/Mt.data.BYTES_PER_ELEMENT,(ut+1)*St/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ut,Mt.width,Mt.height,1,yt,Nt,It)}M.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,yt,Nt,Mt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,Mt.width,Mt.height,Mt.depth,0,yt,Nt,Mt.data);else if(M.isData3DTexture)q?(Rt&&n.texStorage3D(r.TEXTURE_3D,Pt,Lt,Mt.width,Mt.height,Mt.depth),Tt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,yt,Nt,Mt.data)):n.texImage3D(r.TEXTURE_3D,0,Lt,Mt.width,Mt.height,Mt.depth,0,yt,Nt,Mt.data);else if(M.isFramebufferTexture){if(Rt)if(q)n.texStorage2D(r.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height);else{let St=Mt.width,ut=Mt.height;for(let It=0;It<Pt;It++)n.texImage2D(r.TEXTURE_2D,It,Lt,St,ut,0,yt,Nt,null),St>>=1,ut>>=1}}else if(ce.length>0){if(q&&Rt){const St=qt(ce[0]);n.texStorage2D(r.TEXTURE_2D,Pt,Lt,St.width,St.height)}for(let St=0,ut=ce.length;St<ut;St++)Ot=ce[St],q?Tt&&n.texSubImage2D(r.TEXTURE_2D,St,0,0,yt,Nt,Ot):n.texImage2D(r.TEXTURE_2D,St,Lt,yt,Nt,Ot);M.generateMipmaps=!1}else if(q){if(Rt){const St=qt(Mt);n.texStorage2D(r.TEXTURE_2D,Pt,Lt,St.width,St.height)}Tt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,Nt,Mt)}else n.texImage2D(r.TEXTURE_2D,0,Lt,yt,Nt,Mt);S(M)&&y(pt),kt.__version=ft.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function vt(L,M,W){if(M.image.length!==6)return;const pt=gt(L,M),xt=M.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+W);const ft=s.get(xt);if(xt.version!==ft.__version||pt===!0){n.activeTexture(r.TEXTURE0+W);const kt=Ae.getPrimaries(Ae.workingColorSpace),Ct=M.colorSpace===ls?null:Ae.getPrimaries(M.colorSpace),jt=M.colorSpace===ls||kt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const $t=M.isCompressedTexture||M.image[0].isCompressedTexture,Mt=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let ut=0;ut<6;ut++)!$t&&!Mt?yt[ut]=w(M.image[ut],!0,l.maxCubemapSize):yt[ut]=Mt?M.image[ut].image:M.image[ut],yt[ut]=Le(M,yt[ut]);const Nt=yt[0],Lt=c.convert(M.format,M.colorSpace),Ot=c.convert(M.type),ce=P(M.internalFormat,Lt,Ot,M.colorSpace),q=M.isVideoTexture!==!0,Rt=ft.__version===void 0||pt===!0,Tt=xt.dataReady;let Pt=z(M,Nt);Y(r.TEXTURE_CUBE_MAP,M);let St;if($t){q&&Rt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,ce,Nt.width,Nt.height);for(let ut=0;ut<6;ut++){St=yt[ut].mipmaps;for(let It=0;It<St.length;It++){const ee=St[It];M.format!==Ni?Lt!==null?q?Tt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,ee.width,ee.height,Lt,ee.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,ce,ee.width,ee.height,0,ee.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,ee.width,ee.height,Lt,Ot,ee.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,ce,ee.width,ee.height,0,Lt,Ot,ee.data)}}}else{if(St=M.mipmaps,q&&Rt){St.length>0&&Pt++;const ut=qt(yt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,ce,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Mt){q?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,yt[ut].width,yt[ut].height,Lt,Ot,yt[ut].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ce,yt[ut].width,yt[ut].height,0,Lt,Ot,yt[ut].data);for(let It=0;It<St.length;It++){const Pe=St[It].image[ut].image;q?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,Pe.width,Pe.height,Lt,Ot,Pe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,ce,Pe.width,Pe.height,0,Lt,Ot,Pe.data)}}else{q?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Lt,Ot,yt[ut]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ce,Lt,Ot,yt[ut]);for(let It=0;It<St.length;It++){const ee=St[It];q?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,Lt,Ot,ee.image[ut]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,ce,Lt,Ot,ee.image[ut])}}}S(M)&&y(r.TEXTURE_CUBE_MAP),ft.__version=xt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function bt(L,M,W,pt,xt,ft){const kt=c.convert(W.format,W.colorSpace),Ct=c.convert(W.type),jt=P(W.internalFormat,kt,Ct,W.colorSpace),$t=s.get(M),Mt=s.get(W);if(Mt.__renderTarget=M,!$t.__hasExternalTextures){const yt=Math.max(1,M.width>>ft),Nt=Math.max(1,M.height>>ft);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?n.texImage3D(xt,ft,jt,yt,Nt,M.depth,0,kt,Ct,null):n.texImage2D(xt,ft,jt,yt,Nt,0,kt,Ct,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),We(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,xt,Mt.__webglTexture,0,V(M)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,xt,Mt.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(L,M,W){if(r.bindRenderbuffer(r.RENDERBUFFER,L),M.depthBuffer){const pt=M.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ft=U(M.stencilBuffer,xt),kt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;We(M)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(M),ft,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(M),ft,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ft,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,kt,r.RENDERBUFFER,L)}else{const pt=M.textures;for(let xt=0;xt<pt.length;xt++){const ft=pt[xt],kt=c.convert(ft.format,ft.colorSpace),Ct=c.convert(ft.type),jt=P(ft.internalFormat,kt,Ct,ft.colorSpace);We(M)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(M),jt,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(M),jt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,jt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Zt(L,M,W){const pt=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(M.depthTexture);if(xt.__renderTarget=M,(!xt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),xt.__webglTexture===void 0){xt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),Y(r.TEXTURE_CUBE_MAP,M.depthTexture);const $t=c.convert(M.depthTexture.format),Mt=c.convert(M.depthTexture.type);let yt;M.depthTexture.format===Ra?yt=r.DEPTH_COMPONENT24:M.depthTexture.format===Hs&&(yt=r.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,yt,M.width,M.height,0,$t,Mt,null)}}else K(M.depthTexture,0);const ft=xt.__webglTexture,kt=V(M),Ct=pt?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,jt=M.depthTexture.format===Hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ra)We(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Ct,ft,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Ct,ft,0);else if(M.depthTexture.format===Hs)We(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Ct,ft,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Ct,ft,0);else throw new Error("Unknown depthTexture format")}function Jt(L){const M=s.get(L),W=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pt){const xt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),M.__depthDisposeCallback=xt}M.__boundDepthTexture=pt}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let pt=0;pt<6;pt++)Zt(M.__webglFramebuffer[pt],L,pt);else{const pt=L.texture.mipmaps;pt&&pt.length>0?Zt(M.__webglFramebuffer[0],L,0):Zt(M.__webglFramebuffer,L,0)}else if(W){M.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[pt]),M.__webglDepthbuffer[pt]===void 0)M.__webglDepthbuffer[pt]=r.createRenderbuffer(),Vt(M.__webglDepthbuffer[pt],L,!1);else{const xt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ft)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Vt(M.__webglDepthbuffer,L,!1);else{const xt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(L,M,W){const pt=s.get(L);M!==void 0&&bt(pt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Jt(L)}function ve(L){const M=L.texture,W=s.get(L),pt=s.get(M);L.addEventListener("dispose",B);const xt=L.textures,ft=L.isWebGLCubeRenderTarget===!0,kt=xt.length>1;if(kt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=M.version,h.memory.textures++),ft){W.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Ct]=[];for(let jt=0;jt<M.mipmaps.length;jt++)W.__webglFramebuffer[Ct][jt]=r.createFramebuffer()}else W.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)W.__webglFramebuffer[Ct]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(kt)for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=s.get(xt[Ct]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&We(L)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const jt=xt[Ct];W.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Ct]);const $t=c.convert(jt.format,jt.colorSpace),Mt=c.convert(jt.type),yt=P(jt.internalFormat,$t,Mt,jt.colorSpace,L.isXRRenderTarget===!0),Nt=V(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,yt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,W.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(W.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),Y(r.TEXTURE_CUBE_MAP,M);for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let jt=0;jt<M.mipmaps.length;jt++)bt(W.__webglFramebuffer[Ct][jt],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else bt(W.__webglFramebuffer[Ct],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);S(M)&&y(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(kt){for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=xt[Ct],Mt=s.get($t);let yt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(yt,Mt.__webglTexture),Y(yt,$t),bt(W.__webglFramebuffer,L,$t,r.COLOR_ATTACHMENT0+Ct,yt,0),S($t)&&y(yt)}n.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ct,pt.__webglTexture),Y(Ct,M),M.mipmaps&&M.mipmaps.length>0)for(let jt=0;jt<M.mipmaps.length;jt++)bt(W.__webglFramebuffer[jt],L,M,r.COLOR_ATTACHMENT0,Ct,jt);else bt(W.__webglFramebuffer,L,M,r.COLOR_ATTACHMENT0,Ct,0);S(M)&&y(Ct),n.unbindTexture()}L.depthBuffer&&Jt(L)}function pe(L){const M=L.textures;for(let W=0,pt=M.length;W<pt;W++){const xt=M[W];if(S(xt)){const ft=D(L),kt=s.get(xt).__webglTexture;n.bindTexture(ft,kt),y(ft),n.unbindTexture()}}}const De=[],re=[];function Qe(L){if(L.samples>0){if(We(L)===!1){const M=L.textures,W=L.width,pt=L.height;let xt=r.COLOR_BUFFER_BIT;const ft=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,kt=s.get(L),Ct=M.length>1;if(Ct)for(let $t=0;$t<M.length;$t++)n.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const jt=L.texture.mipmaps;jt&&jt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let $t=0;$t<M.length;$t++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,kt.__webglColorRenderbuffer[$t]);const Mt=s.get(M[$t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,W,pt,0,0,W,pt,xt,r.NEAREST),m===!0&&(De.length=0,re.length=0,De.push(r.COLOR_ATTACHMENT0+$t),L.depthBuffer&&L.resolveDepthBuffer===!1&&(De.push(ft),re.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let $t=0;$t<M.length;$t++){n.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,kt.__webglColorRenderbuffer[$t]);const Mt=s.get(M[$t]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,Mt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const M=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function We(L){const M=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ee(L){const M=h.render.frame;v.get(L)!==M&&(v.set(L,M),L.update())}function Le(L,M){const W=L.colorSpace,pt=L.format,xt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Wr&&W!==ls&&(Ae.getTransfer(W)===Ie?(pt!==Ni||xt!==ri)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",W)),M}function qt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=tt,this.resetTextureUnits=Z,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=I,this.setTextureCube=lt,this.rebindTextures=Je,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function BR(r,t){function n(s,l=ls){let c;const h=Ae.getTransfer(l);if(s===ri)return r.UNSIGNED_BYTE;if(s===xp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===yp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$v)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===tx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Qv)return r.BYTE;if(s===Jv)return r.SHORT;if(s===tl)return r.UNSIGNED_SHORT;if(s===vp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===ex)return r.ALPHA;if(s===nx)return r.RGB;if(s===Ni)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===Hs)return r.DEPTH_STENCIL;if(s===ix)return r.RED;if(s===Sp)return r.RED_INTEGER;if(s===qr)return r.RG;if(s===Mp)return r.RG_INTEGER;if(s===Ep)return r.RGBA_INTEGER;if(s===eu||s===nu||s===iu||s===au)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===eu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===eu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cd||s===wd||s===Dd||s===Ud)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ld||s===Nd||s===Od||s===Pd||s===Bd||s===Fd||s===Id)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ld||s===Nd)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Od)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Pd)return c.COMPRESSED_R11_EAC;if(s===Bd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Fd)return c.COMPRESSED_RG11_EAC;if(s===Id)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===zd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===qd||s===Wd||s===Yd||s===jd||s===Zd||s===Kd||s===Qd||s===Jd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===zd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$d||s===tp||s===ep)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===$d)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ep)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===np||s===ip||s===ap||s===sp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===np)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const FR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IR=`
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

}`;class zR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new fx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Qi({vertexShader:FR,fragmentShader:IR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Oi(new ll(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HR extends Vs{constructor(t,n){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,x=null,g=null,E=null,b=null;const w=typeof XRWebGLBinding<"u",S=new zR,y={},D=n.getContextAttributes();let P=null,U=null;const z=[],F=[],B=new oe;let T=null;const C=new si;C.viewport=new en;const ct=new si;ct.viewport=new en;const H=[C,ct],Z=new KE;let tt=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let vt=z[it];return vt===void 0&&(vt=new Hh,z[it]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(it){let vt=z[it];return vt===void 0&&(vt=new Hh,z[it]=vt),vt.getGripSpace()},this.getHand=function(it){let vt=z[it];return vt===void 0&&(vt=new Hh,z[it]=vt),vt.getHandSpace()};function K(it){const vt=F.indexOf(it.inputSource);if(vt===-1)return;const bt=z[vt];bt!==void 0&&(bt.update(it.inputSource,it.frame,d||h),bt.dispatchEvent({type:it.type,data:it.inputSource}))}function N(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",I);for(let it=0;it<z.length;it++){const vt=F[it];vt!==null&&(F[it]=null,z[it].disconnect(vt))}tt=null,st=null,S.reset();for(const it in y)delete y[it];t.setRenderTarget(P),E=null,g=null,x=null,l=null,U=null,Bt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){p=it,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,n)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",N),l.addEventListener("inputsourceschange",I),D.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Vt=null,Zt=null;D.depth&&(Zt=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,bt=D.stencil?Hs:Ra,Vt=D.stencil?el:Ki);const Jt={colorFormat:n.RGBA8,depthFormat:Zt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Jt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new Yi(g.textureWidth,g.textureHeight,{format:Ni,type:ri,depthTexture:new il(g.textureWidth,g.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const bt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,n,bt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new Yi(E.framebufferWidth,E.framebufferHeight,{format:Ni,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Bt.setContext(l),Bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function I(it){for(let vt=0;vt<it.removed.length;vt++){const bt=it.removed[vt],Vt=F.indexOf(bt);Vt>=0&&(F[Vt]=null,z[Vt].disconnect(bt))}for(let vt=0;vt<it.added.length;vt++){const bt=it.added[vt];let Vt=F.indexOf(bt);if(Vt===-1){for(let Jt=0;Jt<z.length;Jt++)if(Jt>=F.length){F.push(bt),Vt=Jt;break}else if(F[Jt]===null){F[Jt]=bt,Vt=Jt;break}if(Vt===-1)break}const Zt=z[Vt];Zt&&Zt.connect(bt)}}const lt=new J,dt=new J;function Et(it,vt,bt){lt.setFromMatrixPosition(vt.matrixWorld),dt.setFromMatrixPosition(bt.matrixWorld);const Vt=lt.distanceTo(dt),Zt=vt.projectionMatrix.elements,Jt=bt.projectionMatrix.elements,Je=Zt[14]/(Zt[10]-1),ve=Zt[14]/(Zt[10]+1),pe=(Zt[9]+1)/Zt[5],De=(Zt[9]-1)/Zt[5],re=(Zt[8]-1)/Zt[0],Qe=(Jt[8]+1)/Jt[0],V=Je*re,We=Je*Qe,Ee=Vt/(-re+Qe),Le=Ee*-re;if(vt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Le),it.translateZ(Ee),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Zt[10]===-1)it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const qt=Je+Ee,L=ve+Ee,M=V-Le,W=We+(Vt-Le),pt=pe*ve/L*qt,xt=De*ve/L*qt;it.projectionMatrix.makePerspective(M,W,pt,xt,qt,L),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function O(it,vt){vt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(vt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let vt=it.near,bt=it.far;S.texture!==null&&(S.depthNear>0&&(vt=S.depthNear),S.depthFar>0&&(bt=S.depthFar)),Z.near=ct.near=C.near=vt,Z.far=ct.far=C.far=bt,(tt!==Z.near||st!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),tt=Z.near,st=Z.far),Z.layers.mask=it.layers.mask|6,C.layers.mask=Z.layers.mask&-5,ct.layers.mask=Z.layers.mask&-3;const Vt=it.parent,Zt=Z.cameras;O(Z,Vt);for(let Jt=0;Jt<Zt.length;Jt++)O(Zt[Jt],Vt);Zt.length===2?Et(Z,C,ct):Z.projectionMatrix.copy(C.projectionMatrix),Y(it,Z,Vt)};function Y(it,vt,bt){bt===null?it.matrix.copy(vt.matrixWorld):(it.matrix.copy(bt.matrixWorld),it.matrix.invert(),it.matrix.multiply(vt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=rp*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(it){m=it,g!==null&&(g.fixedFoveation=it),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(it){return y[it]};let gt=null;function At(it,vt){if(v=vt.getViewerPose(d||h),b=vt,v!==null){const bt=v.views;E!==null&&(t.setRenderTargetFramebuffer(U,E.framebuffer),t.setRenderTarget(U));let Vt=!1;bt.length!==Z.cameras.length&&(Z.cameras.length=0,Vt=!0);for(let ve=0;ve<bt.length;ve++){const pe=bt[ve];let De=null;if(E!==null)De=E.getViewport(pe);else{const Qe=x.getViewSubImage(g,pe);De=Qe.viewport,ve===0&&(t.setRenderTargetTextures(U,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(U))}let re=H[ve];re===void 0&&(re=new si,re.layers.enable(ve),re.viewport=new en,H[ve]=re),re.matrix.fromArray(pe.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(pe.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(De.x,De.y,De.width,De.height),ve===0&&(Z.matrix.copy(re.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Vt===!0&&Z.cameras.push(re)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const ve=x.getDepthInformation(bt[0]);ve&&ve.isValid&&ve.texture&&S.init(ve,l.renderState)}if(Zt&&Zt.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let ve=0;ve<bt.length;ve++){const pe=bt[ve].camera;if(pe){let De=y[pe];De||(De=new fx,y[pe]=De);const re=x.getCameraImage(pe);De.sourceTexture=re}}}}for(let bt=0;bt<z.length;bt++){const Vt=F[bt],Zt=z[bt];Vt!==null&&Zt!==void 0&&Zt.update(Vt,vt,d||h)}gt&&gt(it,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),b=null}const Bt=new mx;Bt.setAnimationLoop(At),this.setAnimationLoop=function(it){gt=it},this.dispose=function(){}}}const Bs=new Ca,GR=new Ke;function VR(r,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,hx(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,D,P,U){y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),x(S,y)):y.isMeshPhongMaterial?(c(S,y),v(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),g(S,y),y.isMeshPhysicalMaterial&&E(S,y,U)):y.isMeshMatcapMaterial?(c(S,y),b(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),w(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(h(S,y),y.isLineDashedMaterial&&p(S,y)):y.isPointsMaterial?m(S,y,D,P):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Yn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Yn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=t.get(y),P=D.envMap,U=D.envMapRotation;P&&(S.envMap.value=P,Bs.copy(U),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),S.envMapRotation.value.setFromMatrix4(GR.makeRotationFromEuler(Bs)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function p(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,D,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=P*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function x(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function E(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,y){y.matcap&&(S.matcap.value=y.matcap)}function w(S,y){const D=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function kR(r,t,n,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,P){const U=P.program;s.uniformBlockBinding(D,U)}function d(D,P){let U=l[D.id];U===void 0&&(b(D),U=v(D),l[D.id]=U,D.addEventListener("dispose",S));const z=P.program;s.updateUBOMapping(D,z);const F=t.render.frame;c[D.id]!==F&&(g(D),c[D.id]=F)}function v(D){const P=x();D.__bindingPointIndex=P;const U=r.createBuffer(),z=D.__size,F=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,z,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,U),U}function x(){for(let D=0;D<p;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const P=l[D.id],U=D.uniforms,z=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let F=0,B=U.length;F<B;F++){const T=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,ct=T.length;C<ct;C++){const H=T[C];if(E(H,F,C,z)===!0){const Z=H.__offset,tt=Array.isArray(H.value)?H.value:[H.value];let st=0;for(let K=0;K<tt.length;K++){const N=tt[K],I=w(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,Z+st,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,st),st+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(D,P,U,z){const F=D.value,B=P+"_"+U;if(z[B]===void 0)return typeof F=="number"||typeof F=="boolean"?z[B]=F:z[B]=F.clone(),!0;{const T=z[B];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return z[B]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function b(D){const P=D.uniforms;let U=0;const z=16;for(let B=0,T=P.length;B<T;B++){const C=Array.isArray(P[B])?P[B]:[P[B]];for(let ct=0,H=C.length;ct<H;ct++){const Z=C[ct],tt=Array.isArray(Z.value)?Z.value:[Z.value];for(let st=0,K=tt.length;st<K;st++){const N=tt[st],I=w(N),lt=U%z,dt=lt%I.boundary,Et=lt+dt;U+=dt,Et!==0&&z-Et<I.storage&&(U+=z-Et),Z.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=U,U+=I.storage}}}const F=U%z;return F>0&&(U+=z-F),D.__size=U,D.__cache={},this}function w(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",D),P}function S(D){const P=D.target;P.removeEventListener("dispose",S);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function y(){for(const D in l)r.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:d,dispose:y}}const XR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function qR(){return Gi===null&&(Gi=new LE(XR,16,16,qr,Aa),Gi.name="DFG_LUT",Gi.minFilter=Dn,Gi.magFilter=Dn,Gi.wrapS=Ea,Gi.wrapT=Ea,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class WR{constructor(t={}){const{canvas:n=lE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:E=ri}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const w=E,S=new Set([Ep,Mp,Sp]),y=new Set([ri,Ki,tl,el,xp,yp]),D=new Uint32Array(4),P=new Int32Array(4);let U=null,z=null;const F=[],B=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let ct=!1;this._outputColorSpace=gi;let H=0,Z=0,tt=null,st=-1,K=null;const N=new en,I=new en;let lt=null;const dt=new Oe(0);let Et=0,O=n.width,Y=n.height,gt=1,At=null,Bt=null;const it=new en(0,0,O,Y),vt=new en(0,0,O,Y);let bt=!1;const Vt=new Cp;let Zt=!1,Jt=!1;const Je=new Ke,ve=new J,pe=new en,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Qe(){return tt===null?gt:1}let V=s;function We(R,X){return n.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gp}`),n.addEventListener("webglcontextlost",It,!1),n.addEventListener("webglcontextrestored",ee,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),V===null){const X="webgl2";if(V=We(X,R),V===null)throw We(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Te("WebGLRenderer: "+R.message),R}let Ee,Le,qt,L,M,W,pt,xt,ft,kt,Ct,jt,$t,Mt,yt,Nt,Lt,Ot,ce,q,Rt,Tt,Pt;function St(){Ee=new WA(V),Ee.init(),Rt=new BR(V,Ee),Le=new IA(V,Ee,t,Rt),qt=new OR(V,Ee),Le.reversedDepthBuffer&&g&&qt.buffers.depth.setReversed(!0),L=new ZA(V),M=new yR,W=new PR(V,Ee,qt,M,Le,Rt,L),pt=new qA(C),xt=new tb(V),Tt=new BA(V,xt),ft=new YA(V,xt,L,Tt),kt=new QA(V,ft,xt,Tt,L),Ot=new KA(V,Le,W),yt=new zA(M),Ct=new xR(C,pt,Ee,Le,Tt,yt),jt=new VR(C,M),$t=new MR,Mt=new CR(Ee),Lt=new PA(C,pt,qt,kt,b,m),Nt=new NR(C,kt,Le),Pt=new kR(V,L,Le,qt),ce=new FA(V,Ee,L),q=new jA(V,Ee,L),L.programs=Ct.programs,C.capabilities=Le,C.extensions=Ee,C.properties=M,C.renderLists=$t,C.shadowMap=Nt,C.state=qt,C.info=L}St(),w!==ri&&(T=new $A(w,n.width,n.height,l,c));const ut=new HR(C,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(O,Y,!1))},this.getSize=function(R){return R.set(O,Y)},this.setSize=function(R,X,rt=!0){if(ut.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Y=X,n.width=Math.floor(R*gt),n.height=Math.floor(X*gt),rt===!0&&(n.style.width=R+"px",n.style.height=X+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(O*gt,Y*gt).floor()},this.setDrawingBufferSize=function(R,X,rt){O=R,Y=X,gt=rt,n.width=Math.floor(R*rt),n.height=Math.floor(X*rt),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(w===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,X,rt,nt){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,X,rt,nt),qt.viewport(N.copy(it).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,X,rt,nt){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,X,rt,nt),qt.scissor(I.copy(vt).multiplyScalar(gt).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(R){qt.setScissorTest(bt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Bt=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,rt=!0){let nt=0;if(R){let Q=!1;if(tt!==null){const wt=tt.texture.format;Q=S.has(wt)}if(Q){const wt=tt.texture.type,Ft=y.has(wt),Dt=Lt.getClearColor(),Xt=Lt.getClearAlpha(),Yt=Dt.r,te=Dt.g,ae=Dt.b;Ft?(D[0]=Yt,D[1]=te,D[2]=ae,D[3]=Xt,V.clearBufferuiv(V.COLOR,0,D)):(P[0]=Yt,P[1]=te,P[2]=ae,P[3]=Xt,V.clearBufferiv(V.COLOR,0,P))}else nt|=V.COLOR_BUFFER_BIT}X&&(nt|=V.DEPTH_BUFFER_BIT),rt&&(nt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&V.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",It,!1),n.removeEventListener("webglcontextrestored",ee,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Lt.dispose(),$t.dispose(),Mt.dispose(),M.dispose(),pt.dispose(),kt.dispose(),Tt.dispose(),Pt.dispose(),Ct.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Xs),ut.removeEventListener("sessionend",qs),Pi.stop()};function It(R){R.preventDefault(),L0("WebGLRenderer: Context Lost."),ct=!0}function ee(){L0("WebGLRenderer: Context Restored."),ct=!1;const R=L.autoReset,X=Nt.enabled,rt=Nt.autoUpdate,nt=Nt.needsUpdate,Q=Nt.type;St(),L.autoReset=R,Nt.enabled=X,Nt.autoUpdate=rt,Nt.needsUpdate=nt,Nt.type=Q}function Pe(R){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){const X=R.target;X.removeEventListener("dispose",be),Un(X)}function Un(R){yi(R),M.remove(R)}function yi(R){const X=M.get(R).programs;X!==void 0&&(X.forEach(function(rt){Ct.releaseProgram(rt)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,rt,nt,Q,wt){X===null&&(X=De);const Ft=Q.isMesh&&Q.matrixWorld.determinant()<0,Dt=hl(R,X,rt,nt,Q);qt.setMaterial(nt,Ft);let Xt=rt.index,Yt=1;if(nt.wireframe===!0){if(Xt=ft.getWireframeAttribute(rt),Xt===void 0)return;Yt=2}const te=rt.drawRange,ae=rt.attributes.position;let zt=te.start*Yt,ue=(te.start+te.count)*Yt;wt!==null&&(zt=Math.max(zt,wt.start*Yt),ue=Math.min(ue,(wt.start+wt.count)*Yt)),Xt!==null?(zt=Math.max(zt,0),ue=Math.min(ue,Xt.count)):ae!=null&&(zt=Math.max(zt,0),ue=Math.min(ue,ae.count));const Ye=ue-zt;if(Ye<0||Ye===1/0)return;Tt.setup(Q,nt,Dt,rt,Xt);let je,Re=ce;if(Xt!==null&&(je=xt.get(Xt),Re=q,Re.setIndex(je)),Q.isMesh)nt.wireframe===!0?(qt.setLineWidth(nt.wireframeLinewidth*Qe()),Re.setMode(V.LINES)):Re.setMode(V.TRIANGLES);else if(Q.isLine){let mn=nt.linewidth;mn===void 0&&(mn=1),qt.setLineWidth(mn*Qe()),Q.isLineSegments?Re.setMode(V.LINES):Q.isLineLoop?Re.setMode(V.LINE_LOOP):Re.setMode(V.LINE_STRIP)}else Q.isPoints?Re.setMode(V.POINTS):Q.isSprite&&Re.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)cu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Re.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const mn=Q._multiDrawStarts,Gt=Q._multiDrawCounts,Ln=Q._multiDrawCount,ne=Xt?xt.get(Xt).bytesPerElement:1,Nn=M.get(nt).currentProgram.getUniforms();for(let jn=0;jn<Ln;jn++)Nn.setValue(V,"_gl_DrawID",jn),Re.render(mn[jn]/ne,Gt[jn])}else if(Q.isInstancedMesh)Re.renderInstances(zt,Ye,Q.count);else if(rt.isInstancedBufferGeometry){const mn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Gt=Math.min(rt.instanceCount,mn);Re.renderInstances(zt,Ye,Gt)}else Re.render(zt,Ye)};function Kr(R,X,rt){R.transparent===!0&&R.side===Ma&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,wa(R,X,rt),R.side=fs,R.needsUpdate=!0,wa(R,X,rt),R.side=Ma):wa(R,X,rt)}this.compile=function(R,X,rt=null){rt===null&&(rt=R),z=Mt.get(rt),z.init(X),B.push(z),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),R!==rt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),z.setupLights();const nt=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const wt=Q.material;if(wt)if(Array.isArray(wt))for(let Ft=0;Ft<wt.length;Ft++){const Dt=wt[Ft];Kr(Dt,rt,Q),nt.add(Dt)}else Kr(wt,rt,Q),nt.add(wt)}),z=B.pop(),nt},this.compileAsync=function(R,X,rt=null){const nt=this.compile(R,X,rt);return new Promise(Q=>{function wt(){if(nt.forEach(function(Ft){M.get(Ft).currentProgram.isReady()&&nt.delete(Ft)}),nt.size===0){Q(R);return}setTimeout(wt,10)}Ee.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let ks=null;function cl(R){ks&&ks(R)}function Xs(){Pi.stop()}function qs(){Pi.start()}const Pi=new mx;Pi.setAnimationLoop(cl),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){ks=R,ut.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},ut.addEventListener("sessionstart",Xs),ut.addEventListener("sessionend",qs),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ct===!0)return;const rt=ut.enabled===!0&&ut.isPresenting===!0,nt=T!==null&&(tt===null||rt)&&T.begin(C,tt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(X),X=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,X,tt),z=Mt.get(R,B.length),z.init(X),B.push(z),Je.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Vt.setFromProjectionMatrix(Je,Xi,X.reversedDepth),Jt=this.localClippingEnabled,Zt=yt.init(this.clippingPlanes,Jt),U=$t.get(R,F.length),U.init(),F.push(U),ut.enabled===!0&&ut.isPresenting===!0){const Ft=C.xr.getDepthSensingMesh();Ft!==null&&Ws(Ft,X,-1/0,C.sortObjects)}Ws(R,X,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(At,Bt),re=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,re&&Lt.addToRenderList(U,R),this.info.render.frame++,Zt===!0&&yt.beginShadows();const Q=z.state.shadowsArray;if(Nt.render(Q,R,X),Zt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&T.hasRenderPass())===!1){const Ft=U.opaque,Dt=U.transmissive;if(z.setupLights(),X.isArrayCamera){const Xt=X.cameras;if(Dt.length>0)for(let Yt=0,te=Xt.length;Yt<te;Yt++){const ae=Xt[Yt];sn(Ft,Dt,R,ae)}re&&Lt.render(R);for(let Yt=0,te=Xt.length;Yt<te;Yt++){const ae=Xt[Yt];Si(U,R,ae,ae.viewport)}}else Dt.length>0&&sn(Ft,Dt,R,X),re&&Lt.render(R),Si(U,R,X)}tt!==null&&Z===0&&(W.updateMultisampleRenderTarget(tt),W.updateRenderTargetMipmap(tt)),nt&&T.end(C),R.isScene===!0&&R.onAfterRender(C,R,X),Tt.resetDefaultState(),st=-1,K=null,B.pop(),B.length>0?(z=B[B.length-1],Zt===!0&&yt.setGlobalState(C.clippingPlanes,z.state.camera)):z=null,F.pop(),F.length>0?U=F[F.length-1]:U=null};function Ws(R,X,rt,nt){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)z.pushLight(R),R.castShadow&&z.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){nt&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const Ft=kt.update(R),Dt=R.material;Dt.visible&&U.push(R,Ft,Dt,rt,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const Ft=kt.update(R),Dt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),pe.copy(Ft.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(Dt)){const Xt=Ft.groups;for(let Yt=0,te=Xt.length;Yt<te;Yt++){const ae=Xt[Yt],zt=Dt[ae.materialIndex];zt&&zt.visible&&U.push(R,Ft,zt,rt,pe.z,ae)}}else Dt.visible&&U.push(R,Ft,Dt,rt,pe.z,null)}}const wt=R.children;for(let Ft=0,Dt=wt.length;Ft<Dt;Ft++)Ws(wt[Ft],X,rt,nt)}function Si(R,X,rt,nt){const{opaque:Q,transmissive:wt,transparent:Ft}=R;z.setupLightsView(rt),Zt===!0&&yt.setGlobalState(C.clippingPlanes,rt),nt&&qt.viewport(N.copy(nt)),Q.length>0&&pn(Q,X,rt),wt.length>0&&pn(wt,X,rt),Ft.length>0&&pn(Ft,X,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function sn(R,X,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[nt.id]===void 0){const zt=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[nt.id]=new Yi(1,1,{generateMipmaps:!0,type:zt?Aa:ri,minFilter:zs,samples:Le.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const wt=z.state.transmissionRenderTarget[nt.id],Ft=nt.viewport||N;wt.setSize(Ft.z*C.transmissionResolutionScale,Ft.w*C.transmissionResolutionScale);const Dt=C.getRenderTarget(),Xt=C.getActiveCubeFace(),Yt=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(dt),Et=C.getClearAlpha(),Et<1&&C.setClearColor(16777215,.5),C.clear(),re&&Lt.render(rt);const te=C.toneMapping;C.toneMapping=Wi;const ae=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),z.setupLightsView(nt),Zt===!0&&yt.setGlobalState(C.clippingPlanes,nt),pn(R,rt,nt),W.updateMultisampleRenderTarget(wt),W.updateRenderTargetMipmap(wt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let ue=0,Ye=X.length;ue<Ye;ue++){const je=X[ue],{object:Re,geometry:mn,material:Gt,group:Ln}=je;if(Gt.side===Ma&&Re.layers.test(nt.layers)){const ne=Gt.side;Gt.side=Yn,Gt.needsUpdate=!0,Ji(Re,rt,nt,mn,Gt,Ln),Gt.side=ne,Gt.needsUpdate=!0,zt=!0}}zt===!0&&(W.updateMultisampleRenderTarget(wt),W.updateRenderTargetMipmap(wt))}C.setRenderTarget(Dt,Xt,Yt),C.setClearColor(dt,Et),ae!==void 0&&(nt.viewport=ae),C.toneMapping=te}function pn(R,X,rt){const nt=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,wt=R.length;Q<wt;Q++){const Ft=R[Q],{object:Dt,geometry:Xt,group:Yt}=Ft;let te=Ft.material;te.allowOverride===!0&&nt!==null&&(te=nt),Dt.layers.test(rt.layers)&&Ji(Dt,X,rt,Xt,te,Yt)}}function Ji(R,X,rt,nt,Q,wt){R.onBeforeRender(C,X,rt,nt,Q,wt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(C,X,rt,nt,R,wt),Q.transparent===!0&&Q.side===Ma&&Q.forceSinglePass===!1?(Q.side=Yn,Q.needsUpdate=!0,C.renderBufferDirect(rt,X,nt,Q,R,wt),Q.side=fs,Q.needsUpdate=!0,C.renderBufferDirect(rt,X,nt,Q,R,wt),Q.side=Ma):C.renderBufferDirect(rt,X,nt,Q,R,wt),R.onAfterRender(C,X,rt,nt,Q,wt)}function wa(R,X,rt){X.isScene!==!0&&(X=De);const nt=M.get(R),Q=z.state.lights,wt=z.state.shadowsArray,Ft=Q.state.version,Dt=Ct.getParameters(R,Q.state,wt,X,rt),Xt=Ct.getProgramCacheKey(Dt);let Yt=nt.programs;nt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,nt.fog=X.fog;const te=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;nt.envMap=pt.get(R.envMap||nt.environment,te),nt.envMapRotation=nt.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",be),Yt=new Map,nt.programs=Yt);let ae=Yt.get(Xt);if(ae!==void 0){if(nt.currentProgram===ae&&nt.lightsStateVersion===Ft)return fl(R,Dt),ae}else Dt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Dt,C),ae=Ct.acquireProgram(Dt,Xt),Yt.set(Xt,ae),nt.uniforms=Dt.uniforms;const zt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=yt.uniform),fl(R,Dt),nt.needsLights=Qr(R),nt.lightsStateVersion=Ft,nt.needsLights&&(zt.ambientLightColor.value=Q.state.ambient,zt.lightProbe.value=Q.state.probe,zt.directionalLights.value=Q.state.directional,zt.directionalLightShadows.value=Q.state.directionalShadow,zt.spotLights.value=Q.state.spot,zt.spotLightShadows.value=Q.state.spotShadow,zt.rectAreaLights.value=Q.state.rectArea,zt.ltc_1.value=Q.state.rectAreaLTC1,zt.ltc_2.value=Q.state.rectAreaLTC2,zt.pointLights.value=Q.state.point,zt.pointLightShadows.value=Q.state.pointShadow,zt.hemisphereLights.value=Q.state.hemi,zt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,zt.spotLightMatrix.value=Q.state.spotLightMatrix,zt.spotLightMap.value=Q.state.spotLightMap,zt.pointShadowMatrix.value=Q.state.pointShadowMatrix),nt.currentProgram=ae,nt.uniformsList=null,ae}function ul(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=ru.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function fl(R,X){const rt=M.get(R);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function hl(R,X,rt,nt,Q){X.isScene!==!0&&(X=De),W.resetTextureUnits();const wt=X.fog,Ft=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?X.environment:null,Dt=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Wr,Xt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Yt=pt.get(nt.envMap||Ft,Xt),te=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ae=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),zt=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,Ye=!!rt.morphAttributes.color;let je=Wi;nt.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(je=C.toneMapping);const Re=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,mn=Re!==void 0?Re.length:0,Gt=M.get(nt),Ln=z.state.lights;if(Zt===!0&&(Jt===!0||R!==K)){const on=R===K&&nt.id===st;yt.setState(nt,R,on)}let ne=!1;nt.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Ln.state.version||Gt.outputColorSpace!==Dt||Q.isBatchedMesh&&Gt.batching===!1||!Q.isBatchedMesh&&Gt.batching===!0||Q.isBatchedMesh&&Gt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Gt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Gt.instancing===!1||!Q.isInstancedMesh&&Gt.instancing===!0||Q.isSkinnedMesh&&Gt.skinning===!1||!Q.isSkinnedMesh&&Gt.skinning===!0||Q.isInstancedMesh&&Gt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Gt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Gt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Gt.instancingMorph===!1&&Q.morphTexture!==null||Gt.envMap!==Yt||nt.fog===!0&&Gt.fog!==wt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==yt.numPlanes||Gt.numIntersection!==yt.numIntersection)||Gt.vertexAlphas!==te||Gt.vertexTangents!==ae||Gt.morphTargets!==zt||Gt.morphNormals!==ue||Gt.morphColors!==Ye||Gt.toneMapping!==je||Gt.morphTargetsCount!==mn)&&(ne=!0):(ne=!0,Gt.__version=nt.version);let Nn=Gt.currentProgram;ne===!0&&(Nn=wa(nt,X,Q));let jn=!1,Mi=!1,Zn=!1;const Ne=Nn.getUniforms(),rn=Gt.uniforms;if(qt.useProgram(Nn.program)&&(jn=!0,Mi=!0,Zn=!0),nt.id!==st&&(st=nt.id,Mi=!0),jn||K!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ne.setValue(V,"projectionMatrix",R.projectionMatrix),Ne.setValue(V,"viewMatrix",R.matrixWorldInverse);const Ei=Ne.map.cameraPosition;Ei!==void 0&&Ei.setValue(V,ve.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Ne.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ne.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,Mi=!0,Zn=!0)}if(Gt.needsLights&&(Ln.state.directionalShadowMap.length>0&&Ne.setValue(V,"directionalShadowMap",Ln.state.directionalShadowMap,W),Ln.state.spotShadowMap.length>0&&Ne.setValue(V,"spotShadowMap",Ln.state.spotShadowMap,W),Ln.state.pointShadowMap.length>0&&Ne.setValue(V,"pointShadowMap",Ln.state.pointShadowMap,W)),Q.isSkinnedMesh){Ne.setOptional(V,Q,"bindMatrix"),Ne.setOptional(V,Q,"bindMatrixInverse");const on=Q.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ne.setValue(V,"boneTexture",on.boneTexture,W))}Q.isBatchedMesh&&(Ne.setOptional(V,Q,"batchingTexture"),Ne.setValue(V,"batchingTexture",Q._matricesTexture,W),Ne.setOptional(V,Q,"batchingIdTexture"),Ne.setValue(V,"batchingIdTexture",Q._indirectTexture,W),Ne.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ne.setValue(V,"batchingColorTexture",Q._colorsTexture,W));const On=rt.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ot.update(Q,rt,Nn),(Mi||Gt.receiveShadow!==Q.receiveShadow)&&(Gt.receiveShadow=Q.receiveShadow,Ne.setValue(V,"receiveShadow",Q.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&X.environment!==null&&(rn.envMapIntensity.value=X.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=qR()),Mi&&(Ne.setValue(V,"toneMappingExposure",C.toneMappingExposure),Gt.needsLights&&ds(rn,Zn),wt&&nt.fog===!0&&jt.refreshFogUniforms(rn,wt),jt.refreshMaterialUniforms(rn,nt,gt,Y,z.state.transmissionRenderTarget[R.id]),ru.upload(V,ul(Gt),rn,W)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(ru.upload(V,ul(Gt),rn,W),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ne.setValue(V,"center",Q.center),Ne.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ne.setValue(V,"normalMatrix",Q.normalMatrix),Ne.setValue(V,"modelMatrix",Q.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const on=nt.uniformsGroups;for(let Ei=0,$i=on.length;Ei<$i;Ei++){const Ys=on[Ei];Pt.update(Ys,Nn),Pt.bind(Ys,Nn)}}return Nn}function ds(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Qr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(R,X,rt){const nt=M.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=X,M.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const rt=M.get(R);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0};const Da=V.createFramebuffer();this.setRenderTarget=function(R,X=0,rt=0){tt=R,H=X,Z=rt;let nt=null,Q=!1,wt=!1;if(R){const Dt=M.get(R);if(Dt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(V.FRAMEBUFFER,Dt.__webglFramebuffer),N.copy(R.viewport),I.copy(R.scissor),lt=R.scissorTest,qt.viewport(N),qt.scissor(I),qt.setScissorTest(lt),st=-1;return}else if(Dt.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Dt.__hasExternalTextures)W.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Dt.__boundDepthTexture!==te){if(te!==null&&M.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(wt=!0);const Yt=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[X])?nt=Yt[X][rt]:nt=Yt[X],Q=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?nt=M.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?nt=Yt[rt]:nt=Yt,N.copy(R.viewport),I.copy(R.scissor),lt=R.scissorTest}else N.copy(it).multiplyScalar(gt).floor(),I.copy(vt).multiplyScalar(gt).floor(),lt=bt;if(rt!==0&&(nt=Da),qt.bindFramebuffer(V.FRAMEBUFFER,nt)&&qt.drawBuffers(R,nt),qt.viewport(N),qt.scissor(I),qt.setScissorTest(lt),Q){const Dt=M.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Dt.__webglTexture,rt)}else if(wt){const Dt=X;for(let Xt=0;Xt<R.textures.length;Xt++){const Yt=M.get(R.textures[Xt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xt,Yt.__webglTexture,rt,Dt)}}else if(R!==null&&rt!==0){const Dt=M.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Dt.__webglTexture,rt)}st=-1},this.readRenderTargetPixels=function(R,X,rt,nt,Q,wt,Ft,Dt=0){if(!(R&&R.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Xt=Xt[Ft]),Xt){qt.bindFramebuffer(V.FRAMEBUFFER,Xt);try{const Yt=R.textures[Dt],te=Yt.format,ae=Yt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Dt),!Le.textureFormatReadable(te)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(ae)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-nt&&rt>=0&&rt<=R.height-Q&&V.readPixels(X,rt,nt,Q,Rt.convert(te),Rt.convert(ae),wt)}finally{const Yt=tt!==null?M.get(tt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,X,rt,nt,Q,wt,Ft,Dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Xt=Xt[Ft]),Xt)if(X>=0&&X<=R.width-nt&&rt>=0&&rt<=R.height-Q){qt.bindFramebuffer(V.FRAMEBUFFER,Xt);const Yt=R.textures[Dt],te=Yt.format,ae=Yt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Dt),!Le.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,zt),V.bufferData(V.PIXEL_PACK_BUFFER,wt.byteLength,V.STREAM_READ),V.readPixels(X,rt,nt,Q,Rt.convert(te),Rt.convert(ae),0);const ue=tt!==null?M.get(tt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,ue);const Ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await cE(V,Ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,zt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,wt),V.deleteBuffer(zt),V.deleteSync(Ye),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,rt=0){const nt=Math.pow(2,-rt),Q=Math.floor(R.image.width*nt),wt=Math.floor(R.image.height*nt),Ft=X!==null?X.x:0,Dt=X!==null?X.y:0;W.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,Ft,Dt,Q,wt),qt.unbindTexture()};const Ua=V.createFramebuffer(),ps=V.createFramebuffer();this.copyTextureToTexture=function(R,X,rt=null,nt=null,Q=0,wt=0){let Ft,Dt,Xt,Yt,te,ae,zt,ue,Ye;const je=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(rt!==null)Ft=rt.max.x-rt.min.x,Dt=rt.max.y-rt.min.y,Xt=rt.isBox3?rt.max.z-rt.min.z:1,Yt=rt.min.x,te=rt.min.y,ae=rt.isBox3?rt.min.z:0;else{const rn=Math.pow(2,-Q);Ft=Math.floor(je.width*rn),Dt=Math.floor(je.height*rn),R.isDataArrayTexture?Xt=je.depth:R.isData3DTexture?Xt=Math.floor(je.depth*rn):Xt=1,Yt=0,te=0,ae=0}nt!==null?(zt=nt.x,ue=nt.y,Ye=nt.z):(zt=0,ue=0,Ye=0);const Re=Rt.convert(X.format),mn=Rt.convert(X.type);let Gt;X.isData3DTexture?(W.setTexture3D(X,0),Gt=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(W.setTexture2DArray(X,0),Gt=V.TEXTURE_2D_ARRAY):(W.setTexture2D(X,0),Gt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Ln=V.getParameter(V.UNPACK_ROW_LENGTH),ne=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Nn=V.getParameter(V.UNPACK_SKIP_PIXELS),jn=V.getParameter(V.UNPACK_SKIP_ROWS),Mi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,je.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,je.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yt),V.pixelStorei(V.UNPACK_SKIP_ROWS,te),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ae);const Zn=R.isDataArrayTexture||R.isData3DTexture,Ne=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const rn=M.get(R),On=M.get(X),on=M.get(rn.__renderTarget),Ei=M.get(On.__renderTarget);qt.bindFramebuffer(V.READ_FRAMEBUFFER,on.__webglFramebuffer),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let $i=0;$i<Xt;$i++)Zn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(R).__webglTexture,Q,ae+$i),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(X).__webglTexture,wt,Ye+$i)),V.blitFramebuffer(Yt,te,Ft,Dt,zt,ue,Ft,Dt,V.DEPTH_BUFFER_BIT,V.NEAREST);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||M.has(R)){const rn=M.get(R),On=M.get(X);qt.bindFramebuffer(V.READ_FRAMEBUFFER,Ua),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ps);for(let on=0;on<Xt;on++)Zn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,rn.__webglTexture,Q,ae+on):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,rn.__webglTexture,Q),Ne?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,On.__webglTexture,wt,Ye+on):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,On.__webglTexture,wt),Q!==0?V.blitFramebuffer(Yt,te,Ft,Dt,zt,ue,Ft,Dt,V.COLOR_BUFFER_BIT,V.NEAREST):Ne?V.copyTexSubImage3D(Gt,wt,zt,ue,Ye+on,Yt,te,Ft,Dt):V.copyTexSubImage2D(Gt,wt,zt,ue,Yt,te,Ft,Dt);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ne?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Gt,wt,zt,ue,Ye,Ft,Dt,Xt,Re,mn,je.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Gt,wt,zt,ue,Ye,Ft,Dt,Xt,Re,je.data):V.texSubImage3D(Gt,wt,zt,ue,Ye,Ft,Dt,Xt,Re,mn,je):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,wt,zt,ue,Ft,Dt,Re,mn,je.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,wt,zt,ue,je.width,je.height,Re,je.data):V.texSubImage2D(V.TEXTURE_2D,wt,zt,ue,Ft,Dt,Re,mn,je);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ln),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ne),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Nn),V.pixelStorei(V.UNPACK_SKIP_ROWS,jn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Mi),wt===0&&X.generateMipmaps&&V.generateMipmap(Gt),qt.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){H=0,Z=0,tt=null,qt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}const Av={type:"change"},Dp={type:"start"},Sx={type:"end"},Zc=new mu,Rv=new os,YR=Math.cos(70*hE.DEG2RAD),gn=new J,Wn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ud=1e-6;class jR extends JE{constructor(t,n=null){super(t,n),this.state=Ve.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new hs,this._lastTargetPosition=new J,this._quat=new hs().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ev,this._sphericalDelta=new ev,this._scale=1,this._panOffset=new J,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new J,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KR.bind(this),this._onPointerDown=ZR.bind(this),this._onPointerUp=QR.bind(this),this._onContextMenu=aC.bind(this),this._onMouseWheel=tC.bind(this),this._onKeyDown=eC.bind(this),this._onTouchStart=nC.bind(this),this._onTouchMove=iC.bind(this),this._onMouseDown=JR.bind(this),this._onMouseMove=$R.bind(this),this._interceptControlDown=sC.bind(this),this._interceptControlUp=rC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Av),this.update(),this.state=Ve.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;gn.copy(n).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),l<-Math.PI?l+=Wn:l>Math.PI&&(l-=Wn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),n.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=gn.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Zc.origin.copy(this.object.position),Zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zc.direction))<YR?this.object.lookAt(this.target):(Rv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zc.intersectPlane(Rv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ud||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ud||this._lastTargetPosition.distanceToSquared(this.target)>ud?(this.dispatchEvent(Av),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Wn/60*this.autoRotateSpeed*t:Wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){gn.setFromMatrixColumn(n,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,n){this.screenSpacePanning===!0?gn.setFromMatrixColumn(n,1):(gn.setFromMatrixColumn(n,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,n){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*n*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=n-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+n.x)*.5,p=(t.pageY+n.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new oe,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function ZR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function KR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function QR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sx),this.state=Ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function JR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ve.DOLLY;break;case Hr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ve.ROTATE}break;case Hr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Dp)}function $R(r){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function tC(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(r.preventDefault(),this.dispatchEvent(Dp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Sx))}function eC(r){this.enabled!==!1&&this._handleKeyDown(r)}function nC(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ve.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ve.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Dp)}function iC(r){switch(this._trackPointer(r),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ve.NONE}}function aC(r){this.enabled!==!1&&r.preventDefault()}function sC(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rC(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const oC=({socket:r,onLanternClick:t})=>{const n=$o.useRef(null);return $o.useEffect(()=>{const s=new AE,l=new si(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.set(0,5,15);const c=new WR({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),n.current.appendChild(c.domElement);const h=new jR(l,c.domElement);h.enableDamping=!0,h.maxPolarAngle=Math.PI/2-.05;const p=new ll(300,300),m=new uu({color:7695}),d=new Oi(p,m);d.rotation.x=-Math.PI/2,s.add(d);const v=new xi,x=new cx({color:16777215,size:.1}),g=[];for(let z=0;z<2e3;z++){const F=(Math.random()-.5)*300,B=Math.random()*100+5,T=(Math.random()-.5)*300;g.push(F,B,T)}v.setAttribute("position",new oi(g,3));const E=new BE(v,x);s.add(E);const b=[],w=(z,F,B,T)=>{const C=new wp(.5,.5,1.5,16),ct=new uu({color:16755200,transparent:!0,opacity:.85}),H=new Oi(C,ct),Z=new jE(16755200,2,10);H.add(Z),H.position.set(z,F,B),H.userData={message:T||"A silent wish..."},s.add(H),b.push(H)},S=()=>{requestAnimationFrame(S),h.update(),c.render(s,l)};S();const y=new QE,D=new oe,P=z=>{D.x=z.clientX/window.innerWidth*2-1,D.y=-(z.clientY/window.innerHeight)*2+1,y.setFromCamera(D,l);const F=y.intersectObjects(b);if(F.length>0){const B=F[0].object.userData.message;t(B)}};window.addEventListener("click",P),window.addEventListener("touchstart",z=>P(z.touches[0]));const U=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",U),r&&(r.on("new_wish",z=>{w(z.x,z.y,z.z,z.message)}),r.on("initial_wishes",z=>{z.forEach(F=>w(F.x,F.y,F.z,F.message))})),()=>{window.removeEventListener("resize",U),n.current&&n.current.removeChild(c.domElement),r&&(window.removeEventListener("resize",U),window.removeEventListener("click",P),window.removeEventListener("touchstart",P),r.off("new_wish"),r.off("initial_wishes"))}},[r]),Di.jsx("div",{ref:n,style:{position:"absolute",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1}})},Cv=$c("https://global-wish-lanterns-api.onrender.com");function lC(){const[r,t]=$o.useState(""),[n,s]=$o.useState(null),l=()=>{if(!r.trim())return;const c={message:r,x:(Math.random()-.5)*40,y:.75,z:(Math.random()-.5)*40};Cv.emit("send_wish",c),t("")};return Di.jsxs("div",{className:"App",children:[Di.jsx(oC,{socket:Cv,onLanternClick:c=>s(c)}),Di.jsxs("div",{className:"ui-container",children:[Di.jsx("input",{type:"text",placeholder:"Type a wish for the world...",value:r,onChange:c=>t(c.target.value)}),Di.jsx("button",{onClick:l,children:"Release Lantern 🏮"})]}),n&&Di.jsxs("div",{className:"message-popup",onClick:()=>s(null),children:[Di.jsxs("p",{children:['"',n,'"']}),Di.jsx("small",{children:"(Tap to close)"})]})]})}PS.createRoot(document.getElementById("root")).render(Di.jsx($o.StrictMode,{children:Di.jsx(lC,{})}));
