(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Oh={exports:{}},Zo={};var T0;function XS(){if(T0)return Zo;T0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:h,ref:l!==void 0?l:null,props:c}}return Zo.Fragment=t,Zo.jsx=n,Zo.jsxs=n,Zo}var A0;function WS(){return A0||(A0=1,Oh.exports=XS()),Oh.exports}var xi=WS(),Ph={exports:{}},re={};var R0;function qS(){if(R0)return re;R0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function y(O,j,_t){this.props=O,this.context=j,this.refs=S,this.updater=_t||b}y.prototype.isReactComponent={},y.prototype.setState=function(O,j){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,j,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=y.prototype;function P(O,j,_t){this.props=O,this.context=j,this.refs=S,this.updater=_t||b}var U=P.prototype=new D;U.constructor=P,w(U,y.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function C(O,j,_t){var At=_t.ref;return{$$typeof:r,type:O,key:j,ref:At!==void 0?At:null,props:_t}}function ot(O,j){return C(O.type,j,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function q(O){var j={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(_t){return j[_t]})}var J=/\/+/g;function st(O,j){return typeof O=="object"&&O!==null&&O.key!=null?q(""+O.key):j.toString(36)}function Q(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(j){O.status==="pending"&&(O.status="fulfilled",O.value=j)},function(j){O.status==="pending"&&(O.status="rejected",O.reason=j)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function N(O,j,_t,At,Bt){var it=typeof O;(it==="undefined"||it==="boolean")&&(O=null);var vt=!1;if(O===null)vt=!0;else switch(it){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(O.$$typeof){case r:case t:vt=!0;break;case v:return vt=O._init,N(vt(O._payload),j,_t,At,Bt)}}if(vt)return Bt=Bt(O),vt=At===""?"."+st(O,0):At,F(Bt)?(_t="",vt!=null&&(_t=vt.replace(J,"$&/")+"/"),N(Bt,j,_t,"",function(Zt){return Zt})):Bt!=null&&(H(Bt)&&(Bt=ot(Bt,_t+(Bt.key==null||O&&O.key===Bt.key?"":(""+Bt.key).replace(J,"$&/")+"/")+vt)),j.push(Bt)),1;vt=0;var bt=At===""?".":At+":";if(F(O))for(var Vt=0;Vt<O.length;Vt++)At=O[Vt],it=bt+st(At,Vt),vt+=N(At,j,_t,it,Bt);else if(Vt=E(O),typeof Vt=="function")for(O=Vt.call(O),Vt=0;!(At=O.next()).done;)At=At.value,it=bt+st(At,Vt++),vt+=N(At,j,_t,it,Bt);else if(it==="object"){if(typeof O.then=="function")return N(Q(O),j,_t,At,Bt);throw j=String(O),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return vt}function I(O,j,_t){if(O==null)return O;var At=[],Bt=0;return N(O,At,"","",function(it){return j.call(_t,it,Bt++)}),At}function ct(O){if(O._status===-1){var j=O._result;j=j(),j.then(function(_t){(O._status===0||O._status===-1)&&(O._status=1,O._result=_t)},function(_t){(O._status===0||O._status===-1)&&(O._status=2,O._result=_t)}),O._status===-1&&(O._status=0,O._result=j)}if(O._status===1)return O._result.default;throw O._result}var dt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:I,forEach:function(O,j,_t){I(O,function(){j.apply(this,arguments)},_t)},count:function(O){var j=0;return I(O,function(){j++}),j},toArray:function(O){return I(O,function(j){return j})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return re.Activity=x,re.Children=Et,re.Component=y,re.Fragment=n,re.Profiler=l,re.PureComponent=P,re.StrictMode=a,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},re.cache=function(O){return function(){return O.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(O,j,_t){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=w({},O.props),Bt=O.key;if(j!=null)for(it in j.key!==void 0&&(Bt=""+j.key),j)!T.call(j,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&j.ref===void 0||(At[it]=j[it]);var it=arguments.length-2;if(it===1)At.children=_t;else if(1<it){for(var vt=Array(it),bt=0;bt<it;bt++)vt[bt]=arguments[bt+2];At.children=vt}return C(O.type,Bt,At)},re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},re.createElement=function(O,j,_t){var At,Bt={},it=null;if(j!=null)for(At in j.key!==void 0&&(it=""+j.key),j)T.call(j,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Bt[At]=j[At]);var vt=arguments.length-2;if(vt===1)Bt.children=_t;else if(1<vt){for(var bt=Array(vt),Vt=0;Vt<vt;Vt++)bt[Vt]=arguments[Vt+2];Bt.children=bt}if(O&&O.defaultProps)for(At in vt=O.defaultProps,vt)Bt[At]===void 0&&(Bt[At]=vt[At]);return C(O,it,Bt)},re.createRef=function(){return{current:null}},re.forwardRef=function(O){return{$$typeof:p,render:O}},re.isValidElement=H,re.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ct}},re.memo=function(O,j){return{$$typeof:d,type:O,compare:j===void 0?null:j}},re.startTransition=function(O){var j=z.T,_t={};z.T=_t;try{var At=O(),Bt=z.S;Bt!==null&&Bt(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(B,dt)}catch(it){dt(it)}finally{j!==null&&_t.types!==null&&(j.types=_t.types),z.T=j}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(O){return z.H.use(O)},re.useActionState=function(O,j,_t){return z.H.useActionState(O,j,_t)},re.useCallback=function(O,j){return z.H.useCallback(O,j)},re.useContext=function(O){return z.H.useContext(O)},re.useDebugValue=function(){},re.useDeferredValue=function(O,j){return z.H.useDeferredValue(O,j)},re.useEffect=function(O,j){return z.H.useEffect(O,j)},re.useEffectEvent=function(O){return z.H.useEffectEvent(O)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(O,j,_t){return z.H.useImperativeHandle(O,j,_t)},re.useInsertionEffect=function(O,j){return z.H.useInsertionEffect(O,j)},re.useLayoutEffect=function(O,j){return z.H.useLayoutEffect(O,j)},re.useMemo=function(O,j){return z.H.useMemo(O,j)},re.useOptimistic=function(O,j){return z.H.useOptimistic(O,j)},re.useReducer=function(O,j,_t){return z.H.useReducer(O,j,_t)},re.useRef=function(O){return z.H.useRef(O)},re.useState=function(O){return z.H.useState(O)},re.useSyncExternalStore=function(O,j,_t){return z.H.useSyncExternalStore(O,j,_t)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.4",re}var C0;function Tp(){return C0||(C0=1,Ph.exports=qS()),Ph.exports}var qr=Tp(),Bh={exports:{}},Ko={},zh={exports:{}},Ih={};var w0;function YS(){return w0||(w0=1,(function(r){function t(N,I){var ct=N.length;N.push(I);t:for(;0<ct;){var dt=ct-1>>>1,Et=N[dt];if(0<l(Et,I))N[dt]=I,N[ct]=Et,ct=dt;else break t}}function n(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var I=N[0],ct=N.pop();if(ct!==I){N[0]=ct;t:for(var dt=0,Et=N.length,O=Et>>>1;dt<O;){var j=2*(dt+1)-1,_t=N[j],At=j+1,Bt=N[At];if(0>l(_t,ct))At<Et&&0>l(Bt,_t)?(N[dt]=Bt,N[At]=ct,dt=At):(N[dt]=_t,N[j]=ct,dt=j);else if(At<Et&&0>l(Bt,ct))N[dt]=Bt,N[At]=ct,dt=At;else break t}}return I}function l(N,I){var ct=N.sortIndex-I.sortIndex;return ct!==0?ct:N.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,x=null,_=3,E=!1,b=!1,w=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(N){for(var I=n(d);I!==null;){if(I.callback===null)a(d);else if(I.startTime<=N)a(d),I.sortIndex=I.expirationTime,t(m,I);else break;I=n(d)}}function F(N){if(w=!1,U(N),!b)if(n(m)!==null)b=!0,B||(B=!0,q());else{var I=n(d);I!==null&&Q(F,I.startTime-N)}}var B=!1,z=-1,T=5,C=-1;function ot(){return S?!0:!(r.unstable_now()-C<T)}function H(){if(S=!1,B){var N=r.unstable_now();C=N;var I=!0;try{t:{b=!1,w&&(w=!1,D(z),z=-1),E=!0;var ct=_;try{e:{for(U(N),x=n(m);x!==null&&!(x.expirationTime>N&&ot());){var dt=x.callback;if(typeof dt=="function"){x.callback=null,_=x.priorityLevel;var Et=dt(x.expirationTime<=N);if(N=r.unstable_now(),typeof Et=="function"){x.callback=Et,U(N),I=!0;break e}x===n(m)&&a(m),U(N)}else a(m);x=n(m)}if(x!==null)I=!0;else{var O=n(d);O!==null&&Q(F,O.startTime-N),I=!1}}break t}finally{x=null,_=ct,E=!1}I=void 0}}finally{I?q():B=!1}}}var q;if(typeof P=="function")q=function(){P(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,st=J.port2;J.port1.onmessage=H,q=function(){st.postMessage(null)}}else q=function(){y(H,0)};function Q(N,I){z=y(function(){N(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(N){switch(_){case 1:case 2:case 3:var I=3;break;default:I=_}var ct=_;_=I;try{return N()}finally{_=ct}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ct=_;_=N;try{return I()}finally{_=ct}},r.unstable_scheduleCallback=function(N,I,ct){var dt=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?dt+ct:dt):ct=dt,N){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ct+Et,N={id:v++,callback:I,priorityLevel:N,startTime:ct,expirationTime:Et,sortIndex:-1},ct>dt?(N.sortIndex=ct,t(d,N),n(m)===null&&N===n(d)&&(w?(D(z),z=-1):w=!0,Q(F,ct-dt))):(N.sortIndex=Et,t(m,N),b||E||(b=!0,B||(B=!0,q()))),N},r.unstable_shouldYield=ot,r.unstable_wrapCallback=function(N){var I=_;return function(){var ct=_;_=I;try{return N.apply(this,arguments)}finally{_=ct}}}})(Ih)),Ih}var D0;function jS(){return D0||(D0=1,zh.exports=YS()),zh.exports}var Fh={exports:{}},Cn={};var U0;function ZS(){if(U0)return Cn;U0=1;var r=Tp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Cn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,v)},Cn.flushSync=function(m){var d=h.T,v=a.p;try{if(h.T=null,a.p=2,m)return m()}finally{h.T=d,a.p=v,a.d.f()}},Cn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(m,d))},Cn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Cn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?a.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:E}):v==="script"&&a.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Cn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(m)},Cn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin);a.d.L(m,v,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Cn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);a.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(m)},Cn.requestFormReset=function(m){a.d.r(m)},Cn.unstable_batchedUpdates=function(m,d){return m(d)},Cn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.2.4",Cn}var L0;function KS(){if(L0)return Fh.exports;L0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Fh.exports=ZS(),Fh.exports}var N0;function QS(){if(N0)return Ko;N0=1;var r=jS(),t=Tp(),n=KS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function h(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var u=s.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===s)return m(u),e;if(f===o)return m(u),i;f=f.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=f;else{for(var g=!1,A=u.child;A;){if(A===s){g=!0,s=u,o=f;break}if(A===o){g=!0,o=u,s=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===s){g=!0,s=f,o=u;break}if(A===o){g=!0,o=f,s=u;break}A=A.sibling}if(!g)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function v(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=v(e),i!==null)return i;e=e.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),ot=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case P:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:st(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return st(e(i))}catch{}}return null}var Q=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},dt=[],Et=-1;function O(e){return{current:e}}function j(e){0>Et||(e.current=dt[Et],dt[Et]=null,Et--)}function _t(e,i){Et++,dt[Et]=e.current,e.current=i}var At=O(null),Bt=O(null),it=O(null),vt=O(null);function bt(e,i){switch(_t(it,i),_t(Bt,e),_t(At,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?j_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=j_(i),e=Z_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(At),_t(At,e)}function Vt(){j(At),j(Bt),j(it)}function Zt(e){e.memoizedState!==null&&_t(vt,e);var i=At.current,s=Z_(i,e.type);i!==s&&(_t(Bt,e),_t(At,s))}function Jt(e){Bt.current===e&&(j(At),j(Bt)),vt.current===e&&(j(vt),Wo._currentValue=ct)}var $e,ve;function pe(e){if($e===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);$e=i&&i[1]||"",ve=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+ve}var Ue=!1;function oe(e,i){if(!e||Ue)return"";Ue=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(lt){var at=lt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(lt){at=lt}e.call(gt.prototype)}}else{try{throw Error()}catch(lt){at=lt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var G=g.split(`
`),et=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===et.length)for(o=G.length-1,u=et.length-1;1<=o&&0<=u&&G[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==et[u]){var ht=`
`+G[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{Ue=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?pe(s):""}function Je(e,i){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==i&&i!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return pe("Activity");default:return""}}function V(e){try{var i="",s=null;do i+=Je(e,s),s=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var je=Object.prototype.hasOwnProperty,Ee=r.unstable_scheduleCallback,Ne=r.unstable_cancelCallback,Wt=r.unstable_shouldYield,L=r.unstable_requestPaint,M=r.unstable_now,Y=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,xt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,kt=r.unstable_LowPriority,Ct=r.unstable_IdlePriority,jt=r.log,$t=r.unstable_setDisableYieldValue,Mt=null,yt=null;function Nt(e){if(typeof jt=="function"&&$t(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Mt,e)}catch{}}var Lt=Math.clz32?Math.clz32:W,Ot=Math.log,ce=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ot(e)/ce|0)|0}var Rt=256,Tt=262144,Pt=4194304;function St(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=St(o):(g&=A,g!==0?u=St(g):s||(s=A&~e,s!==0&&(u=St(s))))):(A=o&~f,A!==0?u=St(A):g!==0?u=St(g):s||(s=o&~e,s!==0&&(u=St(s)))),u===0?0:i!==0&&i!==u&&(i&f)===0&&(f=u&-u,s=i&-i,f>=s||f===32&&(s&4194048)!==0)?i:u}function It(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ne(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Te(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function On(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ei(e,i,s,o,u,f){var g=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,et=e.hiddenUpdates;for(s=g&~s;0<s;){var ht=31-Lt(s),gt=1<<ht;A[ht]=0,G[ht]=-1;var at=et[ht];if(at!==null)for(et[ht]=null,ht=0;ht<at.length;ht++){var lt=at[ht];lt!==null&&(lt.lane&=-536870913)}s&=~gt}o!==0&&so(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~i))}function so(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Lt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function qs(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-Lt(s),u=1<<o;u&i|e[o]&i&&(e[o]|=i),s&=~u}}function _l(e,i){var s=i&-i;return s=(s&42)!==0?1:Ys(s),(s&(e.suspendedLanes|i))!==0?0:s}function Ys(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function js(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bi(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:v0(e.type))}function Zs(e,i){var s=I.p;try{return I.p=e,i()}finally{I.p=s}}var bi=Math.random().toString(36).slice(2),rn="__reactFiber$"+bi,mn="__reactProps$"+bi,ta="__reactContainer$"+bi,Ua="__reactEvents$"+bi,vl="__reactListeners$"+bi,xl="__reactHandles$"+bi,yl="__reactResources$"+bi,gs="__reactMarker$"+bi;function ro(e){delete e[rn],delete e[mn],delete e[Ua],delete e[vl],delete e[xl]}function La(e){var i=e[rn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[ta]||s[rn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=n0(e);e!==null;){if(s=e[rn])return s;e=n0(e)}return i}e=s,s=e.parentNode}return null}function Na(e){if(e=e[rn]||e[ta]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function _s(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function R(e){var i=e[yl];return i||(i=e[yl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function X(e){e[gs]=!0}var rt=new Set,nt={};function $(e,i){wt(e,i),wt(e+"Capture",i)}function wt(e,i){for(nt[e]=i,e=0;e<i.length;e++)rt.add(i[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dt={},Xt={};function Yt(e){return je.call(Xt,e)?!0:je.call(Dt,e)?!1:zt.test(e)?Xt[e]=!0:(Dt[e]=!0,!1)}function ee(e,i,s){if(Yt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function se(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Ft(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}function ue(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ze(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(e,i,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(g){s=""+g,f.call(this,g)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(g){s=""+g},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Re(e){if(!e._valueTracker){var i=Ze(e)?"checked":"value";e._valueTracker=Ke(e,i,""+e[i])}}function gn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Ze(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function Gt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function ie(e){return e.replace(Pn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Bn(e,i,s,o,u,f,g,A){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),i!=null?g==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ue(i)):e.value!==""+ue(i)&&(e.value=""+ue(i)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),i!=null?Ti(e,g,ue(i)):s!=null?Ti(e,g,ue(s)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ue(A):e.removeAttribute("name")}function Zn(e,i,s,o,u,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),i!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||i!=null)){Re(e);return}s=s!=null?""+ue(s):"",i=i!=null?""+ue(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Re(e)}function Ti(e,i,s){i==="number"&&Gt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Kn(e,i,s,o){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&o&&(e[s].defaultSelected=!0)}else{for(s=""+ue(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Oe(e,i,s){if(i!=null&&(i=""+ue(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ue(s):""}function on(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(Q(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=ue(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),Re(e)}function zn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ln=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ai(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||ln.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function ea(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&Ai(e,u,o)}else for(var f in i)i.hasOwnProperty(f)&&Ai(e,f,i[f])}function Ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sl(e){return Gx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var Du=null;function Uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,Js=null;function Yp(e){var i=Na(e);if(i&&(e=i.stateNode)){var s=e[mn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Bn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ie(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var u=o[mn]||null;if(!u)throw Error(a(90));Bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&gn(o)}break t;case"textarea":Oe(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Kn(e,!!s.multiple,i,!1)}}}var Lu=!1;function jp(e,i,s){if(Lu)return e(i,s);Lu=!0;try{var o=e(i);return o}finally{if(Lu=!1,(Qs!==null||Js!==null)&&(lc(),Qs&&(i=Qs,e=Js,Js=Qs=null,Yp(i),e)))for(i=0;i<e.length;i++)Yp(e[i])}}function oo(e,i){var s=e.stateNode;if(s===null)return null;var o=s[mn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(ia)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Nu=!1}var Oa=null,Ou=null,Ml=null;function Zp(){if(Ml)return Ml;var e,i=Ou,s=i.length,o,u="value"in Oa?Oa.value:Oa.textContent,f=u.length;for(e=0;e<s&&i[e]===u[e];e++);var g=s-e;for(o=1;o<=g&&i[s-o]===u[f-o];o++);return Ml=u.slice(e,1<o?1-o:void 0)}function El(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function Kp(){return!1}function Gn(e){function i(s,o,u,f,g){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?bl:Kp,this.isPropagationStopped=Kp,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),i}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Gn(vs),co=x({},vs,{view:0,detail:0}),Vx=Gn(co),Pu,Bu,uo,Al=x({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==uo&&(uo&&e.type==="mousemove"?(Pu=e.screenX-uo.screenX,Bu=e.screenY-uo.screenY):Bu=Pu=0,uo=e),Pu)},movementY:function(e){return"movementY"in e?e.movementY:Bu}}),Qp=Gn(Al),kx=x({},Al,{dataTransfer:0}),Xx=Gn(kx),Wx=x({},co,{relatedTarget:0}),zu=Gn(Wx),qx=x({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Yx=Gn(qx),jx=x({},vs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zx=Gn(jx),Kx=x({},vs,{data:0}),Jp=Gn(Kx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ty(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=$x[e])?!!i[e]:!1}function Iu(){return ty}var ey=x({},co,{key:function(e){if(e.key){var i=Qx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=El(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(e){return e.type==="keypress"?El(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?El(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ny=Gn(ey),iy=x({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Gn(iy),ay=x({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),sy=Gn(ay),ry=x({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=Gn(ry),ly=x({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=Gn(ly),uy=x({},vs,{newState:0,oldState:0}),fy=Gn(uy),hy=[9,13,27,32],Fu=ia&&"CompositionEvent"in window,fo=null;ia&&"documentMode"in document&&(fo=document.documentMode);var dy=ia&&"TextEvent"in window&&!fo,tm=ia&&(!Fu||fo&&8<fo&&11>=fo),em=" ",nm=!1;function im(e,i){switch(e){case"keyup":return hy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $s=!1;function py(e,i){switch(e){case"compositionend":return am(i);case"keypress":return i.which!==32?null:(nm=!0,em);case"textInput":return e=i.data,e===em&&nm?null:e;default:return null}}function my(e,i){if($s)return e==="compositionend"||!Fu&&im(e,i)?(e=Zp(),Ml=Ou=Oa=null,$s=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return tm&&i.locale!=="ko"?null:i.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!gy[e.type]:i==="textarea"}function rm(e,i,s,o){Qs?Js?Js.push(o):Js=[o]:Qs=o,i=mc(i,"onChange"),0<i.length&&(s=new Tl("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var ho=null,po=null;function _y(e){V_(e,0)}function Rl(e){var i=_s(e);if(gn(i))return e}function om(e,i){if(e==="change")return i}var lm=!1;if(ia){var Hu;if(ia){var Gu="oninput"in document;if(!Gu){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),Gu=typeof cm.oninput=="function"}Hu=Gu}else Hu=!1;lm=Hu&&(!document.documentMode||9<document.documentMode)}function um(){ho&&(ho.detachEvent("onpropertychange",fm),po=ho=null)}function fm(e){if(e.propertyName==="value"&&Rl(po)){var i=[];rm(i,po,e,Uu(e)),jp(_y,i)}}function vy(e,i,s){e==="focusin"?(um(),ho=i,po=s,ho.attachEvent("onpropertychange",fm)):e==="focusout"&&um()}function xy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(po)}function yy(e,i){if(e==="click")return Rl(i)}function Sy(e,i){if(e==="input"||e==="change")return Rl(i)}function My(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Qn=typeof Object.is=="function"?Object.is:My;function mo(e,i){if(Qn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!je.call(i,u)||!Qn(e[u],i[u]))return!1}return!0}function hm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dm(e,i){var s=hm(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=hm(s)}}function pm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?pm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function mm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Gt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Gt(e.document)}return i}function Vu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Ey=ia&&"documentMode"in document&&11>=document.documentMode,tr=null,ku=null,go=null,Xu=!1;function gm(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Xu||tr==null||tr!==Gt(o)||(o=tr,"selectionStart"in o&&Vu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),go&&mo(go,o)||(go=o,o=mc(ku,"onSelect"),0<o.length&&(i=new Tl("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=tr)))}function xs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var er={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},Wu={},_m={};ia&&(_m=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function ys(e){if(Wu[e])return Wu[e];if(!er[e])return e;var i=er[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in _m)return Wu[e]=i[s];return e}var vm=ys("animationend"),xm=ys("animationiteration"),ym=ys("animationstart"),by=ys("transitionrun"),Ty=ys("transitionstart"),Ay=ys("transitioncancel"),Sm=ys("transitionend"),Mm=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function Ri(e,i){Mm.set(e,i),$(i,[e])}var Cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],nr=0,Yu=0;function wl(){for(var e=nr,i=Yu=nr=0;i<e;){var s=ui[i];ui[i++]=null;var o=ui[i];ui[i++]=null;var u=ui[i];ui[i++]=null;var f=ui[i];if(ui[i++]=null,o!==null&&u!==null){var g=o.pending;g===null?u.next=u:(u.next=g.next,g.next=u),o.pending=u}f!==0&&Em(s,u,f)}}function Dl(e,i,s,o){ui[nr++]=e,ui[nr++]=i,ui[nr++]=s,ui[nr++]=o,Yu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ju(e,i,s,o){return Dl(e,i,s,o),Ul(e)}function Ss(e,i){return Dl(e,null,null,i),Ul(e)}function Em(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var u=!1,f=e.return;f!==null;)f.childLanes|=s,o=f.alternate,o!==null&&(o.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&i!==null&&(u=31-Lt(s),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=s|536870912),f):null}function Ul(e){if(50<Io)throw Io=0,ah=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ir={};function Ry(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,i,s,o){return new Ry(e,i,s,o)}function Zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,i){var s=e.alternate;return s===null?(s=Jn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function bm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ll(e,i,s,o,u,f){var g=0;if(o=e,typeof e=="function")Zu(e)&&(g=1);else if(typeof e=="string")g=LS(e,s,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Jn(31,s,i,u),e.elementType=C,e.lanes=f,e;case w:return Ms(s.children,u,f,i);case S:g=8,u|=24;break;case y:return e=Jn(12,s,i,u|2),e.elementType=y,e.lanes=f,e;case F:return e=Jn(13,s,i,u),e.elementType=F,e.lanes=f,e;case B:return e=Jn(19,s,i,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:g=10;break t;case D:g=9;break t;case U:g=11;break t;case z:g=14;break t;case T:g=16,o=null;break t}g=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=Jn(g,s,i,u),i.elementType=e,i.type=o,i.lanes=f,i}function Ms(e,i,s,o){return e=Jn(7,e,o,i),e.lanes=s,e}function Ku(e,i,s){return e=Jn(6,e,null,i),e.lanes=s,e}function Tm(e){var i=Jn(18,null,null,0);return i.stateNode=e,i}function Qu(e,i,s){return i=Jn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Am=new WeakMap;function fi(e,i){if(typeof e=="object"&&e!==null){var s=Am.get(e);return s!==void 0?s:(i={value:e,source:i,stack:V(i)},Am.set(e,i),i)}return{value:e,source:i,stack:V(i)}}var ar=[],sr=0,Nl=null,_o=0,hi=[],di=0,Pa=null,zi=1,Ii="";function sa(e,i){ar[sr++]=_o,ar[sr++]=Nl,Nl=e,_o=i}function Rm(e,i,s){hi[di++]=zi,hi[di++]=Ii,hi[di++]=Pa,Pa=e;var o=zi;e=Ii;var u=32-Lt(o)-1;o&=~(1<<u),s+=1;var f=32-Lt(i)+u;if(30<f){var g=u-u%5;f=(o&(1<<g)-1).toString(32),o>>=g,u-=g,zi=1<<32-Lt(i)+u|s<<u|o,Ii=f+e}else zi=1<<f|s<<u|o,Ii=e}function Ju(e){e.return!==null&&(sa(e,1),Rm(e,1,0))}function $u(e){for(;e===Nl;)Nl=ar[--sr],ar[sr]=null,_o=ar[--sr],ar[sr]=null;for(;e===Pa;)Pa=hi[--di],hi[di]=null,Ii=hi[--di],hi[di]=null,zi=hi[--di],hi[di]=null}function Cm(e,i){hi[di++]=zi,hi[di++]=Ii,hi[di++]=Pa,zi=i.id,Ii=i.overflow,Pa=e}var En=null,We=null,Se=!1,Ba=null,pi=!1,tf=Error(a(519));function za(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(fi(i,e)),tf}function wm(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[rn]=e,i[mn]=o,s){case"dialog":ge("cancel",i),ge("close",i);break;case"iframe":case"object":case"embed":ge("load",i);break;case"video":case"audio":for(s=0;s<Ho.length;s++)ge(Ho[s],i);break;case"source":ge("error",i);break;case"img":case"image":case"link":ge("error",i),ge("load",i);break;case"details":ge("toggle",i);break;case"input":ge("invalid",i),Zn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",i);break;case"textarea":ge("invalid",i),on(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||q_(i.textContent,s)?(o.popover!=null&&(ge("beforetoggle",i),ge("toggle",i)),o.onScroll!=null&&ge("scroll",i),o.onScrollEnd!=null&&ge("scrollend",i),o.onClick!=null&&(i.onclick=na),i=!0):i=!1,i||za(e,!0)}function Dm(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:En=En.return}}function rr(e){if(e!==En)return!1;if(!Se)return Dm(e),Se=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||xh(e.type,e.memoizedProps)),s=!s),s&&We&&za(e),Dm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=e0(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=e0(e)}else i===27?(i=We,Qa(e.type)?(e=bh,bh=null,We=e):We=i):We=En?gi(e.stateNode.nextSibling):null;return!0}function Es(){We=En=null,Se=!1}function ef(){var e=Ba;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Ba=null),e}function vo(e){Ba===null?Ba=[e]:Ba.push(e)}var nf=O(null),bs=null,ra=null;function Ia(e,i,s){_t(nf,i._currentValue),i._currentValue=s}function oa(e){e._currentValue=nf.current,j(nf)}function af(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function sf(e,i,s,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<i.length;G++)if(A.context===i[G]){f.lanes|=s,A=f.alternate,A!==null&&(A.lanes|=s),af(f.return,s,e),o||(g=null);break t}f=A.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(a(341));g.lanes|=s,f=g.alternate,f!==null&&(f.lanes|=s),af(g,s,e),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===e){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function or(e,i,s,o){e=null;for(var u=i,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(a(387));if(g=g.memoizedProps,g!==null){var A=u.type;Qn(u.pendingProps.value,g.value)||(e!==null?e.push(A):e=[A])}}else if(u===vt.current){if(g=u.alternate,g===null)throw Error(a(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Wo):e=[Wo])}u=u.return}e!==null&&sf(i,e,s,o),i.flags|=262144}function Ol(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ts(e){bs=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return Um(bs,e)}function Pl(e,i){return bs===null&&Ts(e),Um(e,i)}function Um(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ra===null){if(e===null)throw Error(a(308));ra=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ra=ra.next=i;return s}var Cy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},wy=r.unstable_scheduleCallback,Dy=r.unstable_NormalPriority,cn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new Cy,data:new Map,refCount:0}}function xo(e){e.refCount--,e.refCount===0&&wy(Dy,function(){e.controller.abort()})}var yo=null,of=0,lr=0,cr=null;function Uy(e,i){if(yo===null){var s=yo=[];of=0,lr=uh(),cr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return of++,i.then(Lm,Lm),i}function Lm(){if(--of===0&&yo!==null){cr!==null&&(cr.status="fulfilled");var e=yo;yo=null,lr=0,cr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Ly(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var Nm=N.S;N.S=function(e,i){g_=M(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Uy(e,i),Nm!==null&&Nm(e,i)};var As=O(null);function lf(){var e=As.current;return e!==null?e:Xe.pooledCache}function Bl(e,i){i===null?_t(As,As.current):_t(As,i.pool)}function Om(){var e=lf();return e===null?null:{parent:cn._currentValue,pool:e}}var ur=Error(a(460)),cf=Error(a(474)),zl=Error(a(542)),Il={then:function(){}};function Pm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(na,na),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Im(e),e;default:if(typeof i.status=="string")i.then(na,na);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Im(e),e}throw Cs=i,ur}}function Rs(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Cs=s,ur):s}}var Cs=null;function zm(){if(Cs===null)throw Error(a(459));var e=Cs;return Cs=null,e}function Im(e){if(e===ur||e===zl)throw Error(a(483))}var fr=null,So=0;function Fl(e){var i=So;return So+=1,fr===null&&(fr=[]),Bm(fr,e,i)}function Mo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Hl(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Fm(e){function i(Z,k){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[k],Z.flags|=16):tt.push(k)}}function s(Z,k){if(!e)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=aa(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<k?(Z.flags|=67108866,k):tt):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function g(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,tt,mt){return k===null||k.tag!==6?(k=Ku(tt,Z.mode,mt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function G(Z,k,tt,mt){var Kt=tt.type;return Kt===w?ht(Z,k,tt.props.children,mt,tt.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&Rs(Kt)===k.type)?(k=u(k,tt.props),Mo(k,tt),k.return=Z,k):(k=Ll(tt.type,tt.key,tt.props,null,Z.mode,mt),Mo(k,tt),k.return=Z,k)}function et(Z,k,tt,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=Qu(tt,Z.mode,mt),k.return=Z,k):(k=u(k,tt.children||[]),k.return=Z,k)}function ht(Z,k,tt,mt,Kt){return k===null||k.tag!==7?(k=Ms(tt,Z.mode,mt,Kt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function gt(Z,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ku(""+k,Z.mode,tt),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return tt=Ll(k.type,k.key,k.props,null,Z.mode,tt),Mo(tt,k),tt.return=Z,tt;case b:return k=Qu(k,Z.mode,tt),k.return=Z,k;case T:return k=Rs(k),gt(Z,k,tt)}if(Q(k)||q(k))return k=Ms(k,Z.mode,tt,null),k.return=Z,k;if(typeof k.then=="function")return gt(Z,Fl(k),tt);if(k.$$typeof===P)return gt(Z,Pl(Z,k),tt);Hl(Z,k)}return null}function at(Z,k,tt,mt){var Kt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Kt!==null?null:A(Z,k,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case E:return tt.key===Kt?G(Z,k,tt,mt):null;case b:return tt.key===Kt?et(Z,k,tt,mt):null;case T:return tt=Rs(tt),at(Z,k,tt,mt)}if(Q(tt)||q(tt))return Kt!==null?null:ht(Z,k,tt,mt,null);if(typeof tt.then=="function")return at(Z,k,Fl(tt),mt);if(tt.$$typeof===P)return at(Z,k,Pl(Z,tt),mt);Hl(Z,tt)}return null}function lt(Z,k,tt,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(tt)||null,A(k,Z,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case E:return Z=Z.get(mt.key===null?tt:mt.key)||null,G(k,Z,mt,Kt);case b:return Z=Z.get(mt.key===null?tt:mt.key)||null,et(k,Z,mt,Kt);case T:return mt=Rs(mt),lt(Z,k,tt,mt,Kt)}if(Q(mt)||q(mt))return Z=Z.get(tt)||null,ht(k,Z,mt,Kt,null);if(typeof mt.then=="function")return lt(Z,k,tt,Fl(mt),Kt);if(mt.$$typeof===P)return lt(Z,k,tt,Pl(k,mt),Kt);Hl(k,mt)}return null}function Ht(Z,k,tt,mt){for(var Kt=null,Ce=null,qt=k,fe=k=0,ye=null;qt!==null&&fe<tt.length;fe++){qt.index>fe?(ye=qt,qt=null):ye=qt.sibling;var we=at(Z,qt,tt[fe],mt);if(we===null){qt===null&&(qt=ye);break}e&&qt&&we.alternate===null&&i(Z,qt),k=f(we,k,fe),Ce===null?Kt=we:Ce.sibling=we,Ce=we,qt=ye}if(fe===tt.length)return s(Z,qt),Se&&sa(Z,fe),Kt;if(qt===null){for(;fe<tt.length;fe++)qt=gt(Z,tt[fe],mt),qt!==null&&(k=f(qt,k,fe),Ce===null?Kt=qt:Ce.sibling=qt,Ce=qt);return Se&&sa(Z,fe),Kt}for(qt=o(qt);fe<tt.length;fe++)ye=lt(qt,Z,fe,tt[fe],mt),ye!==null&&(e&&ye.alternate!==null&&qt.delete(ye.key===null?fe:ye.key),k=f(ye,k,fe),Ce===null?Kt=ye:Ce.sibling=ye,Ce=ye);return e&&qt.forEach(function(ns){return i(Z,ns)}),Se&&sa(Z,fe),Kt}function Qt(Z,k,tt,mt){if(tt==null)throw Error(a(151));for(var Kt=null,Ce=null,qt=k,fe=k=0,ye=null,we=tt.next();qt!==null&&!we.done;fe++,we=tt.next()){qt.index>fe?(ye=qt,qt=null):ye=qt.sibling;var ns=at(Z,qt,we.value,mt);if(ns===null){qt===null&&(qt=ye);break}e&&qt&&ns.alternate===null&&i(Z,qt),k=f(ns,k,fe),Ce===null?Kt=ns:Ce.sibling=ns,Ce=ns,qt=ye}if(we.done)return s(Z,qt),Se&&sa(Z,fe),Kt;if(qt===null){for(;!we.done;fe++,we=tt.next())we=gt(Z,we.value,mt),we!==null&&(k=f(we,k,fe),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return Se&&sa(Z,fe),Kt}for(qt=o(qt);!we.done;fe++,we=tt.next())we=lt(qt,Z,fe,we.value,mt),we!==null&&(e&&we.alternate!==null&&qt.delete(we.key===null?fe:we.key),k=f(we,k,fe),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return e&&qt.forEach(function(kS){return i(Z,kS)}),Se&&sa(Z,fe),Kt}function Ge(Z,k,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===w&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case E:t:{for(var Kt=tt.key;k!==null;){if(k.key===Kt){if(Kt=tt.type,Kt===w){if(k.tag===7){s(Z,k.sibling),mt=u(k,tt.props.children),mt.return=Z,Z=mt;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&Rs(Kt)===k.type){s(Z,k.sibling),mt=u(k,tt.props),Mo(mt,tt),mt.return=Z,Z=mt;break t}s(Z,k);break}else i(Z,k);k=k.sibling}tt.type===w?(mt=Ms(tt.props.children,Z.mode,mt,tt.key),mt.return=Z,Z=mt):(mt=Ll(tt.type,tt.key,tt.props,null,Z.mode,mt),Mo(mt,tt),mt.return=Z,Z=mt)}return g(Z);case b:t:{for(Kt=tt.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){s(Z,k.sibling),mt=u(k,tt.children||[]),mt.return=Z,Z=mt;break t}else{s(Z,k);break}else i(Z,k);k=k.sibling}mt=Qu(tt,Z.mode,mt),mt.return=Z,Z=mt}return g(Z);case T:return tt=Rs(tt),Ge(Z,k,tt,mt)}if(Q(tt))return Ht(Z,k,tt,mt);if(q(tt)){if(Kt=q(tt),typeof Kt!="function")throw Error(a(150));return tt=Kt.call(tt),Qt(Z,k,tt,mt)}if(typeof tt.then=="function")return Ge(Z,k,Fl(tt),mt);if(tt.$$typeof===P)return Ge(Z,k,Pl(Z,tt),mt);Hl(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(s(Z,k.sibling),mt=u(k,tt),mt.return=Z,Z=mt):(s(Z,k),mt=Ku(tt,Z.mode,mt),mt.return=Z,Z=mt),g(Z)):s(Z,k)}return function(Z,k,tt,mt){try{So=0;var Kt=Ge(Z,k,tt,mt);return fr=null,Kt}catch(qt){if(qt===ur||qt===zl)throw qt;var Ce=Jn(29,qt,null,Z.mode);return Ce.lanes=mt,Ce.return=Z,Ce}}}var ws=Fm(!0),Hm=Fm(!1),Fa=!1;function uf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Ul(e),Em(e,null,s),i}return Dl(e,o,i,s),Ul(e)}function Eo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,qs(e,s)}}function hf(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var g={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,s=s.next}while(s!==null);f===null?u=f=i:f=f.next=i}else u=f=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var df=!1;function bo(){if(df){var e=cr;if(e!==null)throw e}}function To(e,i,s,o){df=!1;var u=e.updateQueue;Fa=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,et=G.next;G.next=null,g===null?f=et:g.next=et,g=G;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==g&&(A===null?ht.firstBaseUpdate=et:A.next=et,ht.lastBaseUpdate=G))}if(f!==null){var gt=u.baseState;g=0,ht=et=G=null,A=f;do{var at=A.lane&-536870913,lt=at!==A.lane;if(lt?(xe&at)===at:(o&at)===at){at!==0&&at===lr&&(df=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ht=e,Qt=A;at=i;var Ge=s;switch(Qt.tag){case 1:if(Ht=Qt.payload,typeof Ht=="function"){gt=Ht.call(Ge,gt,at);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Qt.payload,at=typeof Ht=="function"?Ht.call(Ge,gt,at):Ht,at==null)break t;gt=x({},gt,at);break t;case 2:Fa=!0}}at=A.callback,at!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(et=ht=lt,G=gt):ht=ht.next=lt,g|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ht===null&&(G=gt),u.baseState=G,u.firstBaseUpdate=et,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),qa|=g,e.lanes=g,e.memoizedState=gt}}function Gm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Vm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Gm(s[e],i)}var hr=O(null),Gl=O(0);function km(e,i){e=ga,_t(Gl,e),_t(hr,i),ga=e|i.baseLanes}function pf(){_t(Gl,ga),_t(hr,hr.current)}function mf(){ga=Gl.current,j(hr),j(Gl)}var $n=O(null),mi=null;function Va(e){var i=e.alternate;_t(an,an.current&1),_t($n,e),mi===null&&(i===null||hr.current!==null||i.memoizedState!==null)&&(mi=e)}function gf(e){_t(an,an.current),_t($n,e),mi===null&&(mi=e)}function Xm(e){e.tag===22?(_t(an,an.current),_t($n,e),mi===null&&(mi=e)):ka()}function ka(){_t(an,an.current),_t($n,$n.current)}function ti(e){j($n),mi===e&&(mi=null),j(an)}var an=O(0);function Vl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Mh(s)||Eh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var la=0,le=null,Fe=null,un=null,kl=!1,dr=!1,Ds=!1,Xl=0,Ao=0,pr=null,Ny=0;function tn(){throw Error(a(321))}function _f(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Qn(e[s],i[s]))return!1;return!0}function vf(e,i,s,o,u,f){return la=f,le=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,N.H=e===null||e.memoizedState===null?Rg:Nf,Ds=!1,f=s(o,u),Ds=!1,dr&&(f=qm(i,s,o,u)),Wm(e),f}function Wm(e){N.H=wo;var i=Fe!==null&&Fe.next!==null;if(la=0,un=Fe=le=null,kl=!1,Ao=0,pr=null,i)throw Error(a(300));e===null||fn||(e=e.dependencies,e!==null&&Ol(e)&&(fn=!0))}function qm(e,i,s,o){le=e;var u=0;do{if(dr&&(pr=null),Ao=0,dr=!1,25<=u)throw Error(a(301));if(u+=1,un=Fe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Cg,f=i(s,o)}while(dr);return f}function Oy(){var e=N.H,i=e.useState()[0];return i=typeof i.then=="function"?Ro(i):i,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(le.flags|=1024),i}function xf(){var e=Xl!==0;return Xl=0,e}function yf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Sf(e){if(kl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}kl=!1}la=0,un=Fe=le=null,dr=!1,Ao=Xl=0,pr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?le.memoizedState=un=e:un=un.next=e,un}function sn(){if(Fe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var i=un===null?le.memoizedState:un.next;if(i!==null)un=i,Fe=e;else{if(e===null)throw le.alternate===null?Error(a(467)):Error(a(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},un===null?le.memoizedState=un=e:un=un.next=e}return un}function Wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(e){var i=Ao;return Ao+=1,pr===null&&(pr=[]),e=Bm(pr,e,i),i=le,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,N.H=i===null||i.memoizedState===null?Rg:Nf),e}function ql(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ro(e);if(e.$$typeof===P)return bn(e)}throw Error(a(438,String(e)))}function Mf(e){var i=null,s=le.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Wl(),le.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=ot;return i.index++,s}function ca(e,i){return typeof i=="function"?i(e):i}function Yl(e){var i=sn();return Ef(i,Fe,e)}function Ef(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}i.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{i=u.next;var A=g=null,G=null,et=i,ht=!1;do{var gt=et.lane&-536870913;if(gt!==et.lane?(xe&gt)===gt:(la&gt)===gt){var at=et.revertLane;if(at===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),gt===lr&&(ht=!0);else if((la&at)===at){et=et.next,at===lr&&(ht=!0);continue}else gt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(A=G=gt,g=f):G=G.next=gt,le.lanes|=at,qa|=at;gt=et.action,Ds&&s(f,gt),f=et.hasEagerState?et.eagerState:s(f,gt)}else at={lane:gt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(A=G=at,g=f):G=G.next=at,le.lanes|=gt,qa|=gt;et=et.next}while(et!==null&&et!==i);if(G===null?g=f:G.next=A,!Qn(f,e.memoizedState)&&(fn=!0,ht&&(s=cr,s!==null)))throw s;e.memoizedState=f,e.baseState=g,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function bf(e){var i=sn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,u=s.pending,f=i.memoizedState;if(u!==null){s.pending=null;var g=u=u.next;do f=e(f,g.action),g=g.next;while(g!==u);Qn(f,i.memoizedState)||(fn=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),s.lastRenderedState=f}return[f,o]}function Ym(e,i,s){var o=le,u=sn(),f=Se;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=i();var g=!Qn((Fe||u).memoizedState,s);if(g&&(u.memoizedState=s,fn=!0),u=u.queue,Rf(Km.bind(null,o,u,e),[e]),u.getSnapshot!==i||g||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,mr(9,{destroy:void 0},Zm.bind(null,o,u,s,i),null),Xe===null)throw Error(a(349));f||(la&127)!==0||jm(o,i,s)}return s}function jm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=le.updateQueue,i===null?(i=Wl(),le.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Zm(e,i,s,o){i.value=s,i.getSnapshot=o,Qm(i)&&Jm(e)}function Km(e,i,s){return s(function(){Qm(i)&&Jm(e)})}function Qm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Qn(e,s)}catch{return!0}}function Jm(e){var i=Ss(e,2);i!==null&&qn(i,e,2)}function Tf(e){var i=In();if(typeof e=="function"){var s=e;if(e=s(),Ds){Nt(!0);try{s()}finally{Nt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},i}function $m(e,i,s,o){return e.baseState=s,Ef(e,Fe,typeof o=="function"?o:ca)}function Py(e,i,s,o,u){if(Kl(e))throw Error(a(485));if(e=i.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};N.T!==null?s(!0):f.isTransition=!1,o(f),s=i.pending,s===null?(f.next=i.pending=f,tg(i,f)):(f.next=s.next,i.pending=s.next=f)}}function tg(e,i){var s=i.action,o=i.payload,u=e.state;if(i.isTransition){var f=N.T,g={};N.T=g;try{var A=s(u,o),G=N.S;G!==null&&G(g,A),eg(e,i,A)}catch(et){Af(e,i,et)}finally{f!==null&&g.types!==null&&(f.types=g.types),N.T=f}}else try{f=s(u,o),eg(e,i,f)}catch(et){Af(e,i,et)}}function eg(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){ng(e,i,o)},function(o){return Af(e,i,o)}):ng(e,i,s)}function ng(e,i,s){i.status="fulfilled",i.value=s,ig(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,tg(e,s)))}function Af(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,ig(i),i=i.next;while(i!==o)}e.action=null}function ig(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function ag(e,i){return i}function sg(e,i){if(Se){var s=Xe.formState;if(s!==null){t:{var o=le;if(Se){if(We){e:{for(var u=We,f=pi;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=gi(u.nextSibling),o=u.data==="F!";break t}}za(o)}o=!1}o&&(i=s[0])}}return s=In(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ag,lastRenderedState:i},s.queue=o,s=bg.bind(null,le,o),o.dispatch=s,o=Tf(!1),f=Lf.bind(null,le,!1,o.queue),o=In(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,s=Py.bind(null,le,u,f,s),u.dispatch=s,o.memoizedState=e,[i,s,!1]}function rg(e){var i=sn();return og(i,Fe,e)}function og(e,i,s){if(i=Ef(e,i,ag)[0],e=Yl(ca)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Ro(i)}catch(g){throw g===ur?zl:g}else o=i;i=sn();var u=i.queue,f=u.dispatch;return s!==i.memoizedState&&(le.flags|=2048,mr(9,{destroy:void 0},By.bind(null,u,s),null)),[o,f,e]}function By(e,i){e.action=i}function lg(e){var i=sn(),s=Fe;if(s!==null)return og(i,s,e);sn(),i=i.memoizedState,s=sn();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function mr(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=le.updateQueue,i===null&&(i=Wl(),le.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function cg(){return sn().memoizedState}function jl(e,i,s,o){var u=In();le.flags|=e,u.memoizedState=mr(1|i,{destroy:void 0},s,o===void 0?null:o)}function Zl(e,i,s,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Fe!==null&&o!==null&&_f(o,Fe.memoizedState.deps)?u.memoizedState=mr(i,f,s,o):(le.flags|=e,u.memoizedState=mr(1|i,f,s,o))}function ug(e,i){jl(8390656,8,e,i)}function Rf(e,i){Zl(2048,8,e,i)}function zy(e){le.flags|=4;var i=le.updateQueue;if(i===null)i=Wl(),le.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function fg(e){var i=sn().memoizedState;return zy({ref:i,nextImpl:e}),function(){if((Le&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function hg(e,i){return Zl(4,2,e,i)}function dg(e,i){return Zl(4,4,e,i)}function pg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function mg(e,i,s){s=s!=null?s.concat([e]):null,Zl(4,4,pg.bind(null,i,e),s)}function Cf(){}function gg(e,i){var s=sn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&_f(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function _g(e,i){var s=sn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&_f(i,o[1]))return o[0];if(o=e(),Ds){Nt(!0);try{e()}finally{Nt(!1)}}return s.memoizedState=[o,i],o}function wf(e,i,s){return s===void 0||(la&1073741824)!==0&&(xe&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=v_(),le.lanes|=e,qa|=e,s)}function vg(e,i,s,o){return Qn(s,i)?s:hr.current!==null?(e=wf(e,s,o),Qn(e,i)||(fn=!0),e):(la&42)===0||(la&1073741824)!==0&&(xe&261930)===0?(fn=!0,e.memoizedState=s):(e=v_(),le.lanes|=e,qa|=e,i)}function xg(e,i,s,o,u){var f=I.p;I.p=f!==0&&8>f?f:8;var g=N.T,A={};N.T=A,Lf(e,!1,i,s);try{var G=u(),et=N.S;if(et!==null&&et(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ht=Ly(G,o);Co(e,i,ht,ii(e))}else Co(e,i,o,ii(e))}catch(gt){Co(e,i,{then:function(){},status:"rejected",reason:gt},ii())}finally{I.p=f,g!==null&&A.types!==null&&(g.types=A.types),N.T=g}}function Iy(){}function Df(e,i,s,o){if(e.tag!==5)throw Error(a(476));var u=yg(e).queue;xg(e,u,i,ct,s===null?Iy:function(){return Sg(e),s(o)})}function yg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:ct},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Sg(e){var i=yg(e);i.next===null&&(i=e.alternate.memoizedState),Co(e,i.next.queue,{},ii())}function Uf(){return bn(Wo)}function Mg(){return sn().memoizedState}function Eg(){return sn().memoizedState}function Fy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ii();e=Ha(s);var o=Ga(i,e,s);o!==null&&(qn(o,i,s),Eo(o,i,s)),i={cache:rf()},e.payload=i;return}i=i.return}}function Hy(e,i,s){var o=ii();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Kl(e)?Tg(i,s):(s=ju(e,i,s,o),s!==null&&(qn(s,e,o),Ag(s,i,o)))}function bg(e,i,s){var o=ii();Co(e,i,s,o)}function Co(e,i,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Kl(e))Tg(i,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var g=i.lastRenderedState,A=f(g,s);if(u.hasEagerState=!0,u.eagerState=A,Qn(A,g))return Dl(e,i,u,0),Xe===null&&wl(),!1}catch{}if(s=ju(e,i,u,o),s!==null)return qn(s,e,o),Ag(s,i,o),!0}return!1}function Lf(e,i,s,o){if(o={lane:2,revertLane:uh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Kl(e)){if(i)throw Error(a(479))}else i=ju(e,s,o,2),i!==null&&qn(i,e,2)}function Kl(e){var i=e.alternate;return e===le||i!==null&&i===le}function Tg(e,i){dr=kl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Ag(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,qs(e,s)}}var wo={readContext:bn,use:ql,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};wo.useEffectEvent=tn;var Rg={readContext:bn,use:ql,useCallback:function(e,i){return In().memoizedState=[e,i===void 0?null:i],e},useContext:bn,useEffect:ug,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,jl(4194308,4,pg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return jl(4194308,4,e,i)},useInsertionEffect:function(e,i){jl(4,2,e,i)},useMemo:function(e,i){var s=In();i=i===void 0?null:i;var o=e();if(Ds){Nt(!0);try{e()}finally{Nt(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=In();if(s!==void 0){var u=s(i);if(Ds){Nt(!0);try{s(i)}finally{Nt(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Hy.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var i=In();return e={current:e},i.memoizedState=e},useState:function(e){e=Tf(e);var i=e.queue,s=bg.bind(null,le,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Cf,useDeferredValue:function(e,i){var s=In();return wf(s,e,i)},useTransition:function(){var e=Tf(!1);return e=xg.bind(null,le,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=le,u=In();if(Se){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Xe===null)throw Error(a(349));(xe&127)!==0||jm(o,i,s)}u.memoizedState=s;var f={value:s,getSnapshot:i};return u.queue=f,ug(Km.bind(null,o,f,e),[e]),o.flags|=2048,mr(9,{destroy:void 0},Zm.bind(null,o,f,s,i),null),s},useId:function(){var e=In(),i=Xe.identifierPrefix;if(Se){var s=Ii,o=zi;s=(o&~(1<<32-Lt(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Xl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Ny++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Uf,useFormState:sg,useActionState:sg,useOptimistic:function(e){var i=In();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Lf.bind(null,le,!0,s),s.dispatch=i,[e,i]},useMemoCache:Mf,useCacheRefresh:function(){return In().memoizedState=Fy.bind(null,le)},useEffectEvent:function(e){var i=In(),s={impl:e};return i.memoizedState=s,function(){if((Le&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Nf={readContext:bn,use:ql,useCallback:gg,useContext:bn,useEffect:Rf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:_g,useReducer:Yl,useRef:cg,useState:function(){return Yl(ca)},useDebugValue:Cf,useDeferredValue:function(e,i){var s=sn();return vg(s,Fe.memoizedState,e,i)},useTransition:function(){var e=Yl(ca)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:Ro(e),i]},useSyncExternalStore:Ym,useId:Mg,useHostTransitionStatus:Uf,useFormState:rg,useActionState:rg,useOptimistic:function(e,i){var s=sn();return $m(s,Fe,e,i)},useMemoCache:Mf,useCacheRefresh:Eg};Nf.useEffectEvent=fg;var Cg={readContext:bn,use:ql,useCallback:gg,useContext:bn,useEffect:Rf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:_g,useReducer:bf,useRef:cg,useState:function(){return bf(ca)},useDebugValue:Cf,useDeferredValue:function(e,i){var s=sn();return Fe===null?wf(s,e,i):vg(s,Fe.memoizedState,e,i)},useTransition:function(){var e=bf(ca)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:Ro(e),i]},useSyncExternalStore:Ym,useId:Mg,useHostTransitionStatus:Uf,useFormState:lg,useActionState:lg,useOptimistic:function(e,i){var s=sn();return Fe!==null?$m(s,Fe,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:Eg};Cg.useEffectEvent=fg;function Of(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:x({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Pf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=ii(),u=Ha(o);u.payload=i,s!=null&&(u.callback=s),i=Ga(e,u,o),i!==null&&(qn(i,e,o),Eo(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=ii(),u=Ha(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Ga(e,u,o),i!==null&&(qn(i,e,o),Eo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ii(),o=Ha(s);o.tag=2,i!=null&&(o.callback=i),i=Ga(e,o,s),i!==null&&(qn(i,e,s),Eo(i,e,s))}};function wg(e,i,s,o,u,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,g):i.prototype&&i.prototype.isPureReactComponent?!mo(s,o)||!mo(u,f):!0}function Dg(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&Pf.enqueueReplaceState(i,i.state,null)}function Us(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=x({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}function Ug(e){Cl(e)}function Lg(e){console.error(e)}function Ng(e){Cl(e)}function Ql(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Og(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Bf(e,i,s){return s=Ha(s),s.tag=3,s.payload={element:null},s.callback=function(){Ql(e,i)},s}function Pg(e){return e=Ha(e),e.tag=3,e}function Bg(e,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Og(i,s,o)}}var g=s.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Og(i,s,o),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Gy(e,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&or(i,s,u,!0),s=$n.current,s!==null){switch(s.tag){case 31:case 13:return mi===null?cc():s.alternate===null&&en===0&&(en=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===Il?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),oh(e,o,u)),!1;case 22:return s.flags|=65536,o===Il?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),oh(e,o,u)),!1}throw Error(a(435,s.tag))}return oh(e,o,u),cc(),!1}if(Se)return i=$n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==tf&&(e=Error(a(422),{cause:o}),vo(fi(e,s)))):(o!==tf&&(i=Error(a(423),{cause:o}),vo(fi(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,s),u=Bf(e.stateNode,o,u),hf(e,u),en!==4&&(en=2)),!1;var f=Error(a(520),{cause:o});if(f=fi(f,s),zo===null?zo=[f]:zo.push(f),en!==4&&(en=2),i===null)return!0;o=fi(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=Bf(s.stateNode,o,e),hf(s,e),!1;case 1:if(i=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ya===null||!Ya.has(f))))return s.flags|=65536,u&=-u,s.lanes|=u,u=Pg(u),Bg(u,e,s,o),hf(s,u),!1}s=s.return}while(s!==null);return!1}var zf=Error(a(461)),fn=!1;function Tn(e,i,s,o){i.child=e===null?Hm(i,null,s,o):ws(i,e.child,s,o)}function zg(e,i,s,o,u){s=s.render;var f=i.ref;if("ref"in o){var g={};for(var A in o)A!=="ref"&&(g[A]=o[A])}else g=o;return Ts(i),o=vf(e,i,s,g,f,u),A=xf(),e!==null&&!fn?(yf(e,i,u),ua(e,i,u)):(Se&&A&&Ju(i),i.flags|=1,Tn(e,i,o,u),i.child)}function Ig(e,i,s,o,u){if(e===null){var f=s.type;return typeof f=="function"&&!Zu(f)&&f.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=f,Fg(e,i,f,o,u)):(e=Ll(s.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(f=e.child,!Wf(e,u)){var g=f.memoizedProps;if(s=s.compare,s=s!==null?s:mo,s(g,o)&&e.ref===i.ref)return ua(e,i,u)}return i.flags|=1,e=aa(f,o),e.ref=i.ref,e.return=i,i.child=e}function Fg(e,i,s,o,u){if(e!==null){var f=e.memoizedProps;if(mo(f,o)&&e.ref===i.ref)if(fn=!1,i.pendingProps=o=f,Wf(e,u))(e.flags&131072)!==0&&(fn=!0);else return i.lanes=e.lanes,ua(e,i,u)}return If(e,i,s,o,u)}function Hg(e,i,s,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(f=f!==null?f.baseLanes|s:s,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,i.child=null;return Gg(e,i,f,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(i,f!==null?f.cachePool:null),f!==null?km(i,f):pf(),Xm(i);else return o=i.lanes=536870912,Gg(e,i,f!==null?f.baseLanes|s:s,s,o)}else f!==null?(Bl(i,f.cachePool),km(i,f),ka(),i.memoizedState=null):(e!==null&&Bl(i,null),pf(),ka());return Tn(e,i,u,s),i.child}function Do(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Gg(e,i,s,o,u){var f=lf();return f=f===null?null:{parent:cn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},e!==null&&Bl(i,null),pf(),Xm(i),e!==null&&or(e,i,o,!0),i.childLanes=u,null}function Jl(e,i){return i=tc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Vg(e,i,s){return ws(i,e.child,null,s),e=Jl(i,i.pendingProps),e.flags|=2,ti(i),i.memoizedState=null,e}function Vy(e,i,s){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=Jl(i,o),i.lanes=536870912,Do(null,e);if(gf(i),(e=We)?(e=t0(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},s=Tm(e),s.return=i,i.child=s,En=i,We=null)):e=null,e===null)throw za(i);return i.lanes=536870912,null}return Jl(i,o)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(gf(i),u)if(i.flags&256)i.flags&=-257,i=Vg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(fn||or(e,i,s,!1),u=(s&e.childLanes)!==0,fn||u){if(o=Xe,o!==null&&(g=_l(o,s),g!==0&&g!==f.retryLane))throw f.retryLane=g,Ss(e,g),qn(o,e,g),zf;cc(),i=Vg(e,i,s)}else e=f.treeContext,We=gi(g.nextSibling),En=i,Se=!0,Ba=null,pi=!1,e!==null&&Cm(i,e),i=Jl(i,o),i.flags|=4096;return i}return e=aa(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function $l(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function If(e,i,s,o,u){return Ts(i),s=vf(e,i,s,o,void 0,u),o=xf(),e!==null&&!fn?(yf(e,i,u),ua(e,i,u)):(Se&&o&&Ju(i),i.flags|=1,Tn(e,i,s,u),i.child)}function kg(e,i,s,o,u,f){return Ts(i),i.updateQueue=null,s=qm(i,o,s,u),Wm(e),o=xf(),e!==null&&!fn?(yf(e,i,f),ua(e,i,f)):(Se&&o&&Ju(i),i.flags|=1,Tn(e,i,s,f),i.child)}function Xg(e,i,s,o,u){if(Ts(i),i.stateNode===null){var f=ir,g=s.contextType;typeof g=="object"&&g!==null&&(f=bn(g)),f=new s(o,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Pf,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=o,f.state=i.memoizedState,f.refs={},uf(i),g=s.contextType,f.context=typeof g=="object"&&g!==null?bn(g):ir,f.state=i.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Of(i,s,g,o),f.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Pf.enqueueReplaceState(f,f.state,null),To(i,o,f,u),bo(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){f=i.stateNode;var A=i.memoizedProps,G=Us(s,A);f.props=G;var et=f.context,ht=s.contextType;g=ir,typeof ht=="object"&&ht!==null&&(g=bn(ht));var gt=s.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||et!==g)&&Dg(i,f,o,g),Fa=!1;var at=i.memoizedState;f.state=at,To(i,o,f,u),bo(),et=i.memoizedState,A||at!==et||Fa?(typeof gt=="function"&&(Of(i,s,gt,o),et=i.memoizedState),(G=Fa||wg(i,s,G,o,at,et,g))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=et),f.props=o,f.state=et,f.context=g,o=G):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{f=i.stateNode,ff(e,i),g=i.memoizedProps,ht=Us(s,g),f.props=ht,gt=i.pendingProps,at=f.context,et=s.contextType,G=ir,typeof et=="object"&&et!==null&&(G=bn(et)),A=s.getDerivedStateFromProps,(et=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==gt||at!==G)&&Dg(i,f,o,G),Fa=!1,at=i.memoizedState,f.state=at,To(i,o,f,u),bo();var lt=i.memoizedState;g!==gt||at!==lt||Fa||e!==null&&e.dependencies!==null&&Ol(e.dependencies)?(typeof A=="function"&&(Of(i,s,A,o),lt=i.memoizedState),(ht=Fa||wg(i,s,ht,o,at,lt,G)||e!==null&&e.dependencies!==null&&Ol(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,lt,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,lt,G)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=lt),f.props=o,f.state=lt,f.context=G,o=ht):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),o=!1)}return f=o,$l(e,i),o=(i.flags&128)!==0,f||o?(f=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,e!==null&&o?(i.child=ws(i,e.child,null,u),i.child=ws(i,null,s,u)):Tn(e,i,s,u),i.memoizedState=f.state,e=i.child):e=ua(e,i,u),e}function Wg(e,i,s,o){return Es(),i.flags|=256,Tn(e,i,s,o),i.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:Om()}}function Gf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=ni),e}function qg(e,i,s){var o=i.pendingProps,u=!1,f=(i.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),g&&(u=!0,i.flags&=-129),g=(i.flags&32)!==0,i.flags&=-33,e===null){if(Se){if(u?Va(i):ka(),(e=We)?(e=t0(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},s=Tm(e),s.return=i,i.child=s,En=i,We=null)):e=null,e===null)throw za(i);return Eh(e)?i.lanes=32:i.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(ka(),u=i.mode,A=tc({mode:"hidden",children:A},u),o=Ms(o,u,s,null),A.return=i,o.return=i,A.sibling=o,i.child=A,o=i.child,o.memoizedState=Hf(s),o.childLanes=Gf(e,g,s),i.memoizedState=Ff,Do(null,o)):(Va(i),Vf(i,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)i.flags&256?(Va(i),i.flags&=-257,i=kf(e,i,s)):i.memoizedState!==null?(ka(),i.child=e.child,i.flags|=128,i=null):(ka(),A=o.fallback,u=i.mode,o=tc({mode:"visible",children:o.children},u),A=Ms(A,u,s,null),A.flags|=2,o.return=i,A.return=i,o.sibling=A,i.child=o,ws(i,e.child,null,s),o=i.child,o.memoizedState=Hf(s),o.childLanes=Gf(e,g,s),i.memoizedState=Ff,i=Do(null,o));else if(Va(i),Eh(A)){if(g=A.nextSibling&&A.nextSibling.dataset,g)var et=g.dgst;g=et,o=Error(a(419)),o.stack="",o.digest=g,vo({value:o,source:null,stack:null}),i=kf(e,i,s)}else if(fn||or(e,i,s,!1),g=(s&e.childLanes)!==0,fn||g){if(g=Xe,g!==null&&(o=_l(g,s),o!==0&&o!==G.retryLane))throw G.retryLane=o,Ss(e,o),qn(g,e,o),zf;Mh(A)||cc(),i=kf(e,i,s)}else Mh(A)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,We=gi(A.nextSibling),En=i,Se=!0,Ba=null,pi=!1,e!==null&&Cm(i,e),i=Vf(i,o.children),i.flags|=4096);return i}return u?(ka(),A=o.fallback,u=i.mode,G=e.child,et=G.sibling,o=aa(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,et!==null?A=aa(et,A):(A=Ms(A,u,s,null),A.flags|=2),A.return=i,o.return=i,o.sibling=A,i.child=o,Do(null,o),o=i.child,A=e.child.memoizedState,A===null?A=Hf(s):(u=A.cachePool,u!==null?(G=cn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Om(),A={baseLanes:A.baseLanes|s,cachePool:u}),o.memoizedState=A,o.childLanes=Gf(e,g,s),i.memoizedState=Ff,Do(e.child,o)):(Va(i),s=e.child,e=s.sibling,s=aa(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(g=i.deletions,g===null?(i.deletions=[e],i.flags|=16):g.push(e)),i.child=s,i.memoizedState=null,s)}function Vf(e,i){return i=tc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function tc(e,i){return e=Jn(22,e,null,i),e.lanes=0,e}function kf(e,i,s){return ws(i,e.child,null,s),e=Vf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Yg(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),af(e.return,i,s)}function Xf(e,i,s,o,u,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=s,g.tailMode=u,g.treeForkCount=f)}function jg(e,i,s){var o=i.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var g=an.current,A=(g&2)!==0;if(A?(g=g&1|2,i.flags|=128):g&=1,_t(an,g),Tn(e,i,o,s),o=Se?_o:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yg(e,s,i);else if(e.tag===19)Yg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&Vl(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Xf(i,!1,u,s,f,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Vl(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}Xf(i,!0,s,null,f,o);break;case"together":Xf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function ua(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),qa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(or(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=aa(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=aa(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Wf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ol(e)))}function ky(e,i,s){switch(i.tag){case 3:bt(i,i.stateNode.containerInfo),Ia(i,cn,e.memoizedState.cache),Es();break;case 27:case 5:Zt(i);break;case 4:bt(i,i.stateNode.containerInfo);break;case 10:Ia(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,gf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(i),i.flags|=128,null):(s&i.child.childLanes)!==0?qg(e,i,s):(Va(i),e=ua(e,i,s),e!==null?e.sibling:null);Va(i);break;case 19:var u=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(or(e,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return jg(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(an,an.current),o)break;return null;case 22:return i.lanes=0,Hg(e,i,s,i.pendingProps);case 24:Ia(i,cn,e.memoizedState.cache)}return ua(e,i,s)}function Zg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)fn=!0;else{if(!Wf(e,s)&&(i.flags&128)===0)return fn=!1,ky(e,i,s);fn=(e.flags&131072)!==0}else fn=!1,Se&&(i.flags&1048576)!==0&&Rm(i,_o,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=Rs(i.elementType),i.type=e,typeof e=="function")Zu(e)?(o=Us(e,o),i.tag=1,i=Xg(null,i,e,o,s)):(i.tag=0,i=If(null,i,e,o,s));else{if(e!=null){var u=e.$$typeof;if(u===U){i.tag=11,i=zg(null,i,e,o,s);break t}else if(u===z){i.tag=14,i=Ig(null,i,e,o,s);break t}}throw i=st(e)||e,Error(a(306,i,""))}}return i;case 0:return If(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=Us(o,i.pendingProps),Xg(e,i,o,u,s);case 3:t:{if(bt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var f=i.memoizedState;u=f.element,ff(e,i),To(i,o,null,s);var g=i.memoizedState;if(o=g.cache,Ia(i,cn,o),o!==f.cache&&sf(i,[cn],s,!0),bo(),o=g.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:g.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=Wg(e,i,o,s);break t}else if(o!==u){u=fi(Error(a(424)),i),vo(u),i=Wg(e,i,o,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=gi(e.firstChild),En=i,Se=!0,Ba=null,pi=!0,s=Hm(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Es(),o===u){i=ua(e,i,s);break t}Tn(e,i,o,s)}i=i.child}return i;case 26:return $l(e,i),e===null?(s=r0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Se||(s=i.type,e=i.pendingProps,o=gc(it.current).createElement(s),o[rn]=i,o[mn]=e,An(o,s,e),X(o),i.stateNode=o):i.memoizedState=r0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Zt(i),e===null&&Se&&(o=i.stateNode=i0(i.type,i.pendingProps,it.current),En=i,pi=!0,u=We,Qa(i.type)?(bh=u,We=gi(o.firstChild)):We=u),Tn(e,i,i.pendingProps.children,s),$l(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Se&&((u=o=We)&&(o=xS(o,i.type,i.pendingProps,pi),o!==null?(i.stateNode=o,En=i,We=gi(o.firstChild),pi=!1,u=!0):u=!1),u||za(i)),Zt(i),u=i.type,f=i.pendingProps,g=e!==null?e.memoizedProps:null,o=f.children,xh(u,f)?o=null:g!==null&&xh(u,g)&&(i.flags|=32),i.memoizedState!==null&&(u=vf(e,i,Oy,null,null,s),Wo._currentValue=u),$l(e,i),Tn(e,i,o,s),i.child;case 6:return e===null&&Se&&((e=s=We)&&(s=yS(s,i.pendingProps,pi),s!==null?(i.stateNode=s,En=i,We=null,e=!0):e=!1),e||za(i)),null;case 13:return qg(e,i,s);case 4:return bt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=ws(i,null,o,s):Tn(e,i,o,s),i.child;case 11:return zg(e,i,i.type,i.pendingProps,s);case 7:return Tn(e,i,i.pendingProps,s),i.child;case 8:return Tn(e,i,i.pendingProps.children,s),i.child;case 12:return Tn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Ia(i,i.type,o.value),Tn(e,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Ts(i),u=bn(u),o=o(u),i.flags|=1,Tn(e,i,o,s),i.child;case 14:return Ig(e,i,i.type,i.pendingProps,s);case 15:return Fg(e,i,i.type,i.pendingProps,s);case 19:return jg(e,i,s);case 31:return Vy(e,i,s);case 22:return Hg(e,i,s,i.pendingProps);case 24:return Ts(i),o=bn(cn),e===null?(u=lf(),u===null&&(u=Xe,f=rf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=s),u=f),i.memoizedState={parent:o,cache:u},uf(i),Ia(i,cn,u)):((e.lanes&s)!==0&&(ff(e,i),To(i,null,null,s),bo()),u=e.memoizedState,f=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ia(i,cn,o)):(o=f.cache,Ia(i,cn,o),o!==u.cache&&sf(i,[cn],s,!0))),Tn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function fa(e){e.flags|=4}function qf(e,i,s,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(M_())e.flags|=8192;else throw Cs=Il,cf}else e.flags&=-16777217}function Kg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f0(i))if(M_())e.flags|=8192;else throw Cs=Il,cf}function ec(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Pe():536870912,e.lanes|=i,xr|=i)}function Uo(e,i){if(!Se)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function Xy(e,i,s){var o=i.pendingProps;switch($u(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(i),null;case 1:return qe(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),oa(cn),Vt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(rr(i)?fa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ef())),qe(i),null;case 26:var u=i.type,f=i.memoizedState;return e===null?(fa(i),f!==null?(qe(i),Kg(i,f)):(qe(i),qf(i,u,null,o,s))):f?f!==e.memoizedState?(fa(i),qe(i),Kg(i,f)):(qe(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&fa(i),qe(i),qf(i,u,e,o,s)),null;case 27:if(Jt(i),s=it.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&fa(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return qe(i),null}e=At.current,rr(i)?wm(i):(e=i0(u,o,s),i.stateNode=e,fa(i))}return qe(i),null;case 5:if(Jt(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&fa(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return qe(i),null}if(f=At.current,rr(i))wm(i);else{var g=gc(it.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?g.createElement(u,{is:o.is}):g.createElement(u)}}f[rn]=i,f[mn]=o;t:for(g=i.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===i)break t;for(;g.sibling===null;){if(g.return===null||g.return===i)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}i.stateNode=f;t:switch(An(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&fa(i)}}return qe(i),qf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&fa(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,rr(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[rn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||q_(e.nodeValue,s)),e||za(i,!0)}else e=gc(e).createTextNode(o),e[rn]=i,i.stateNode=e}return qe(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(o=rr(i),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[rn]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qe(i),e=!1}else s=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(ti(i),i):(ti(i),null);if((i.flags&128)!==0)throw Error(a(558))}return qe(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=rr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[rn]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qe(i),u=!1}else u=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ti(i),i):(ti(i),null)}return ti(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),ec(i,i.updateQueue),qe(i),null);case 4:return Vt(),e===null&&ph(i.stateNode.containerInfo),qe(i),null;case 10:return oa(i.type),qe(i),null;case 19:if(j(an),o=i.memoizedState,o===null)return qe(i),null;if(u=(i.flags&128)!==0,f=o.rendering,f===null)if(u)Uo(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(f=Vl(e),f!==null){for(i.flags|=128,Uo(o,!1),e=f.updateQueue,i.updateQueue=e,ec(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)bm(s,e),s=s.sibling;return _t(an,an.current&1|2),Se&&sa(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&M()>rc&&(i.flags|=128,u=!0,Uo(o,!1),i.lanes=4194304)}else{if(!u)if(e=Vl(f),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,ec(i,e),Uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Se)return qe(i),null}else 2*M()-o.renderingStartTime>rc&&s!==536870912&&(i.flags|=128,u=!0,Uo(o,!1),i.lanes=4194304);o.isBackwards?(f.sibling=i.child,i.child=f):(e=o.last,e!==null?e.sibling=f:i.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=M(),e.sibling=null,s=an.current,_t(an,u?s&1|2:s&1),Se&&sa(i,o.treeForkCount),e):(qe(i),null);case 22:case 23:return ti(i),mf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(qe(i),i.subtreeFlags&6&&(i.flags|=8192)):qe(i),s=i.updateQueue,s!==null&&ec(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&j(As),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),oa(cn),qe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Wy(e,i){switch($u(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return oa(cn),Vt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Jt(i),null;case 31:if(i.memoizedState!==null){if(ti(i),i.alternate===null)throw Error(a(340));Es()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ti(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Es()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return j(an),null;case 4:return Vt(),null;case 10:return oa(i.type),null;case 22:case 23:return ti(i),mf(),e!==null&&j(As),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return oa(cn),null;case 25:return null;default:return null}}function Qg(e,i){switch($u(i),i.tag){case 3:oa(cn),Vt();break;case 26:case 27:case 5:Jt(i);break;case 4:Vt();break;case 31:i.memoizedState!==null&&ti(i);break;case 13:ti(i);break;case 19:j(an);break;case 10:oa(i.type);break;case 22:case 23:ti(i),mf(),e!==null&&j(As);break;case 24:oa(cn)}}function Lo(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){o=void 0;var f=s.create,g=s.inst;o=f(),g.destroy=o}s=s.next}while(s!==u)}}catch(A){ze(i,i.return,A)}}function Xa(e,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var g=o.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,u=i;var G=s,et=A;try{et()}catch(ht){ze(u,G,ht)}}}o=o.next}while(o!==f)}}catch(ht){ze(i,i.return,ht)}}function Jg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Vm(i,s)}catch(o){ze(e,e.return,o)}}}function $g(e,i,s){s.props=Us(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){ze(e,i,o)}}function No(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(u){ze(e,i,u)}}function Fi(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){ze(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){ze(e,i,u)}else s.current=null}function t_(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){ze(e,e.return,u)}}function Yf(e,i,s){try{var o=e.stateNode;dS(o,e.type,s,i),o[mn]=i}catch(u){ze(e,e.return,u)}}function e_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function jf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||e_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zf(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=na));else if(o!==4&&(o===27&&Qa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Zf(e,i,s),e=e.sibling;e!==null;)Zf(e,i,s),e=e.sibling}function nc(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&Qa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(nc(e,i,s),e=e.sibling;e!==null;)nc(e,i,s),e=e.sibling}function n_(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);An(i,o,s),i[rn]=e,i[mn]=s}catch(f){ze(e,e.return,f)}}var ha=!1,hn=!1,Kf=!1,i_=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function qy(e,i){if(e=e.containerInfo,_h=Ec,e=mm(e),Vu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var g=0,A=-1,G=-1,et=0,ht=0,gt=e,at=null;e:for(;;){for(var lt;gt!==s||u!==0&&gt.nodeType!==3||(A=g+u),gt!==f||o!==0&&gt.nodeType!==3||(G=g+o),gt.nodeType===3&&(g+=gt.nodeValue.length),(lt=gt.firstChild)!==null;)at=gt,gt=lt;for(;;){if(gt===e)break e;if(at===s&&++et===u&&(A=g),at===f&&++ht===o&&(G=g),(lt=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=lt}s=A===-1||G===-1?null:{start:A,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(vh={focusedElem:e,selectionRange:s},Ec=!1,Sn=i;Sn!==null;)if(i=Sn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Sn=e;else for(;Sn!==null;){switch(i=Sn,f=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)u=e[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=i,u=f.memoizedProps,f=f.memoizedState,o=s.stateNode;try{var Ht=Us(s.type,u);e=o.getSnapshotBeforeUpdate(Ht,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){ze(s,s.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Sh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Sn=e;break}Sn=i.return}}function a_(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:pa(e,s),o&4&&Lo(5,s);break;case 1:if(pa(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(g){ze(s,s.return,g)}else{var u=Us(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(g){ze(s,s.return,g)}}o&64&&Jg(s),o&512&&No(s,s.return);break;case 3:if(pa(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Vm(e,i)}catch(g){ze(s,s.return,g)}}break;case 27:i===null&&o&4&&n_(s);case 26:case 5:pa(e,s),i===null&&o&4&&t_(s),o&512&&No(s,s.return);break;case 12:pa(e,s);break;case 31:pa(e,s),o&4&&o_(e,s);break;case 13:pa(e,s),o&4&&l_(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=eS.bind(null,s),SS(e,s))));break;case 22:if(o=s.memoizedState!==null||ha,!o){i=i!==null&&i.memoizedState!==null||hn,u=ha;var f=hn;ha=o,(hn=i)&&!f?ma(e,s,(s.subtreeFlags&8772)!==0):pa(e,s),ha=u,hn=f}break;case 30:break;default:pa(e,s)}}function s_(e){var i=e.alternate;i!==null&&(e.alternate=null,s_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ro(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Vn=!1;function da(e,i,s){for(s=s.child;s!==null;)r_(e,i,s),s=s.sibling}function r_(e,i,s){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Mt,s)}catch{}switch(s.tag){case 26:hn||Fi(s,i),da(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:hn||Fi(s,i);var o=Qe,u=Vn;Qa(s.type)&&(Qe=s.stateNode,Vn=!1),da(e,i,s),Vo(s.stateNode),Qe=o,Vn=u;break;case 5:hn||Fi(s,i);case 6:if(o=Qe,u=Vn,Qe=null,da(e,i,s),Qe=o,Vn=u,Qe!==null)if(Vn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(s.stateNode)}catch(f){ze(s,i,f)}else try{Qe.removeChild(s.stateNode)}catch(f){ze(s,i,f)}break;case 18:Qe!==null&&(Vn?(e=Qe,J_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Rr(e)):J_(Qe,s.stateNode));break;case 4:o=Qe,u=Vn,Qe=s.stateNode.containerInfo,Vn=!0,da(e,i,s),Qe=o,Vn=u;break;case 0:case 11:case 14:case 15:Xa(2,s,i),hn||Xa(4,s,i),da(e,i,s);break;case 1:hn||(Fi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&$g(s,i,o)),da(e,i,s);break;case 21:da(e,i,s);break;case 22:hn=(o=hn)||s.memoizedState!==null,da(e,i,s),hn=o;break;default:da(e,i,s)}}function o_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rr(e)}catch(s){ze(i,i.return,s)}}}function l_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rr(e)}catch(s){ze(i,i.return,s)}}function Yy(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new i_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new i_),i;default:throw Error(a(435,e.tag))}}function ic(e,i){var s=Yy(e);i.forEach(function(o){if(!s.has(o)){s.add(o);var u=nS.bind(null,e,o);o.then(u,u)}})}function kn(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],f=e,g=i,A=g;t:for(;A!==null;){switch(A.tag){case 27:if(Qa(A.type)){Qe=A.stateNode,Vn=!1;break t}break;case 5:Qe=A.stateNode,Vn=!1;break t;case 3:case 4:Qe=A.stateNode.containerInfo,Vn=!0;break t}A=A.return}if(Qe===null)throw Error(a(160));r_(f,g,u),Qe=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)c_(i,e),i=i.sibling}var Ci=null;function c_(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(i,e),Xn(e),o&4&&(Xa(3,e,e.return),Lo(3,e),Xa(5,e,e.return));break;case 1:kn(i,e),Xn(e),o&512&&(hn||s===null||Fi(s,s.return)),o&64&&ha&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Ci;if(kn(i,e),Xn(e),o&512&&(hn||s===null||Fi(s,s.return)),o&4){var f=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[gs]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),An(f,o,s),f[rn]=e,X(f),o=f;break t;case"link":var g=c0("link","href",u).get(o+(s.href||""));if(g){for(var A=0;A<g.length;A++)if(f=g[A],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){g.splice(A,1);break e}}f=u.createElement(o),An(f,o,s),u.head.appendChild(f);break;case"meta":if(g=c0("meta","content",u).get(o+(s.content||""))){for(A=0;A<g.length;A++)if(f=g[A],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){g.splice(A,1);break e}}f=u.createElement(o),An(f,o,s),u.head.appendChild(f);break;default:throw Error(a(468,o))}f[rn]=e,X(f),o=f}e.stateNode=o}else u0(u,e.type,e.stateNode);else e.stateNode=l0(u,o,e.memoizedProps);else f!==o?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,o===null?u0(u,e.type,e.stateNode):l0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Yf(e,e.memoizedProps,s.memoizedProps)}break;case 27:kn(i,e),Xn(e),o&512&&(hn||s===null||Fi(s,s.return)),s!==null&&o&4&&Yf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(kn(i,e),Xn(e),o&512&&(hn||s===null||Fi(s,s.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(Ht){ze(e,e.return,Ht)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Yf(e,u,s!==null?s.memoizedProps:u)),o&1024&&(Kf=!0);break;case 6:if(kn(i,e),Xn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(Ht){ze(e,e.return,Ht)}}break;case 3:if(xc=null,u=Ci,Ci=_c(i.containerInfo),kn(i,e),Ci=u,Xn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Rr(i.containerInfo)}catch(Ht){ze(e,e.return,Ht)}Kf&&(Kf=!1,u_(e));break;case 4:o=Ci,Ci=_c(e.stateNode.containerInfo),kn(i,e),Xn(e),Ci=o;break;case 12:kn(i,e),Xn(e);break;case 31:kn(i,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ic(e,o)));break;case 13:kn(i,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(sc=M()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ic(e,o)));break;case 22:u=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,et=ha,ht=hn;if(ha=et||u,hn=ht||G,kn(i,e),hn=ht,ha=et,Xn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||G||ha||hn||Ls(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(f=G.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{A=G.stateNode;var gt=G.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Ht){ze(G,G.return,Ht)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Ht){ze(G,G.return,Ht)}}}else if(i.tag===18){if(s===null){G=i;try{var lt=G.stateNode;u?$_(lt,!0):$_(G.stateNode,!1)}catch(Ht){ze(G,G.return,Ht)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,ic(e,s))));break;case 19:kn(i,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ic(e,o)));break;case 30:break;case 21:break;default:kn(i,e),Xn(e)}}function Xn(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(e_(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,f=jf(e);nc(e,f,u);break;case 5:var g=s.stateNode;s.flags&32&&(zn(g,""),s.flags&=-33);var A=jf(e);nc(e,A,g);break;case 3:case 4:var G=s.stateNode.containerInfo,et=jf(e);Zf(e,et,G);break;default:throw Error(a(161))}}catch(ht){ze(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function u_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;u_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function pa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)a_(e,i.alternate,i),i=i.sibling}function Ls(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Xa(4,i,i.return),Ls(i);break;case 1:Fi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&$g(i,i.return,s),Ls(i);break;case 27:Vo(i.stateNode);case 26:case 5:Fi(i,i.return),Ls(i);break;case 22:i.memoizedState===null&&Ls(i);break;case 30:Ls(i);break;default:Ls(i)}e=e.sibling}}function ma(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,f=i,g=f.flags;switch(f.tag){case 0:case 11:case 15:ma(u,f,s),Lo(4,f);break;case 1:if(ma(u,f,s),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){ze(o,o.return,et)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Gm(G[u],A)}catch(et){ze(o,o.return,et)}}s&&g&64&&Jg(f),No(f,f.return);break;case 27:n_(f);case 26:case 5:ma(u,f,s),s&&o===null&&g&4&&t_(f),No(f,f.return);break;case 12:ma(u,f,s);break;case 31:ma(u,f,s),s&&g&4&&o_(u,f);break;case 13:ma(u,f,s),s&&g&4&&l_(u,f);break;case 22:f.memoizedState===null&&ma(u,f,s),No(f,f.return);break;case 30:break;default:ma(u,f,s)}i=i.sibling}}function Qf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&xo(s))}function Jf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&xo(e))}function wi(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)f_(e,i,s,o),i=i.sibling}function f_(e,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:wi(e,i,s,o),u&2048&&Lo(9,i);break;case 1:wi(e,i,s,o);break;case 3:wi(e,i,s,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&xo(e)));break;case 12:if(u&2048){wi(e,i,s,o),e=i.stateNode;try{var f=i.memoizedProps,g=f.id,A=f.onPostCommit;typeof A=="function"&&A(g,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){ze(i,i.return,G)}}else wi(e,i,s,o);break;case 31:wi(e,i,s,o);break;case 13:wi(e,i,s,o);break;case 23:break;case 22:f=i.stateNode,g=i.alternate,i.memoizedState!==null?f._visibility&2?wi(e,i,s,o):Oo(e,i):f._visibility&2?wi(e,i,s,o):(f._visibility|=2,gr(e,i,s,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&Qf(g,i);break;case 24:wi(e,i,s,o),u&2048&&Jf(i.alternate,i);break;default:wi(e,i,s,o)}}function gr(e,i,s,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var f=e,g=i,A=s,G=o,et=g.flags;switch(g.tag){case 0:case 11:case 15:gr(f,g,A,G,u),Lo(8,g);break;case 23:break;case 22:var ht=g.stateNode;g.memoizedState!==null?ht._visibility&2?gr(f,g,A,G,u):Oo(f,g):(ht._visibility|=2,gr(f,g,A,G,u)),u&&et&2048&&Qf(g.alternate,g);break;case 24:gr(f,g,A,G,u),u&&et&2048&&Jf(g.alternate,g);break;default:gr(f,g,A,G,u)}i=i.sibling}}function Oo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,u=o.flags;switch(o.tag){case 22:Oo(s,o),u&2048&&Qf(o.alternate,o);break;case 24:Oo(s,o),u&2048&&Jf(o.alternate,o);break;default:Oo(s,o)}i=i.sibling}}var Po=8192;function _r(e,i,s){if(e.subtreeFlags&Po)for(e=e.child;e!==null;)h_(e,i,s),e=e.sibling}function h_(e,i,s){switch(e.tag){case 26:_r(e,i,s),e.flags&Po&&e.memoizedState!==null&&NS(s,Ci,e.memoizedState,e.memoizedProps);break;case 5:_r(e,i,s);break;case 3:case 4:var o=Ci;Ci=_c(e.stateNode.containerInfo),_r(e,i,s),Ci=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Po,Po=16777216,_r(e,i,s),Po=o):_r(e,i,s));break;default:_r(e,i,s)}}function d_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Bo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Sn=o,m_(o,e)}d_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)p_(e),e=e.sibling}function p_(e){switch(e.tag){case 0:case 11:case 15:Bo(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Bo(e);break;case 12:Bo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ac(e)):Bo(e);break;default:Bo(e)}}function ac(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Sn=o,m_(o,e)}d_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Xa(8,i,i.return),ac(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ac(i));break;default:ac(i)}e=e.sibling}}function m_(e,i){for(;Sn!==null;){var s=Sn;switch(s.tag){case 0:case 11:case 15:Xa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Sn=o;else t:for(s=e;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(s_(o),o===s){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var jy={getCacheForType:function(e){var i=bn(cn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return bn(cn).controller.signal}},Zy=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,me=null,xe=0,Be=0,ei=null,Wa=!1,vr=!1,$f=!1,ga=0,en=0,qa=0,Ns=0,th=0,ni=0,xr=0,zo=null,Wn=null,eh=!1,sc=0,g_=0,rc=1/0,oc=null,Ya=null,_n=0,ja=null,yr=null,_a=0,nh=0,ih=null,__=null,Io=0,ah=null;function ii(){return(Le&2)!==0&&xe!==0?xe&-xe:N.T!==null?uh():Bi()}function v_(){if(ni===0)if((xe&536870912)===0||Se){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function qn(e,i,s){(e===Xe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Sr(e,0),Za(e,xe,ni,!1)),On(e,s),((Le&2)===0||e!==Xe)&&(e===Xe&&((Le&2)===0&&(Ns|=s),en===4&&Za(e,xe,ni,!1)),Hi(e))}function x_(e,i,s){if((Le&6)!==0)throw Error(a(327));var o=!s&&(i&127)===0&&(i&e.expiredLanes)===0||It(e,i),u=o?Jy(e,i):rh(e,i,!0),f=o;do{if(u===0){vr&&!o&&Za(e,i,0,!1);break}else{if(s=e.current.alternate,f&&!Ky(s)){u=rh(e,i,!1),f=!1;continue}if(u===2){if(f=i,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){i=g;t:{var A=e;u=zo;var G=A.current.memoizedState.isDehydrated;if(G&&(Sr(A,g).flags|=256),g=rh(A,g,!1),g!==2){if($f&&!G){A.errorRecoveryDisabledLanes|=f,Ns|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){Sr(e,0),Za(e,i,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Za(o,i,ni,!Wa);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=sc+300-M(),10<u)){if(Za(o,i,ni,!Wa),ut(o,0,!0)!==0)break t;_a=i,o.timeoutHandle=K_(y_.bind(null,o,s,Wn,oc,eh,i,ni,Ns,xr,Wa,f,"Throttled",-0,0),u);break t}y_(o,s,Wn,oc,eh,i,ni,Ns,xr,Wa,f,null,-0,0)}}break}while(!0);Hi(e)}function y_(e,i,s,o,u,f,g,A,G,et,ht,gt,at,lt){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},h_(i,f,gt);var Ht=(f&62914560)===f?sc-M():(f&4194048)===f?g_-M():0;if(Ht=OS(gt,Ht),Ht!==null){_a=f,e.cancelPendingCommit=Ht(C_.bind(null,e,i,f,s,o,u,g,A,G,ht,gt,null,at,lt)),Za(e,f,g,!et);return}}C_(e,i,f,s,o,u,g,A,G)}function Ky(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Za(e,i,s,o){i&=~th,i&=~Ns,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var f=31-Lt(u),g=1<<f;o[f]=-1,u&=~g}s!==0&&so(e,s,i)}function lc(){return(Le&6)===0?(Fo(0),!1):!0}function sh(){if(me!==null){if(Be===0)var e=me.return;else e=me,ra=bs=null,Sf(e),fr=null,So=0,e=me;for(;e!==null;)Qg(e.alternate,e),e=e.return;me=null}}function Sr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,gS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),_a=0,sh(),Xe=e,me=s=aa(e.current,null),xe=i,Be=0,ei=null,Wa=!1,vr=It(e,i),$f=!1,xr=ni=th=Ns=qa=en=0,Wn=zo=null,eh=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Lt(o),f=1<<u;i|=e[u],o&=~f}return ga=i,wl(),s}function S_(e,i){le=null,N.H=wo,i===ur||i===zl?(i=zm(),Be=3):i===cf?(i=zm(),Be=4):Be=i===zf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ei=i,me===null&&(en=1,Ql(e,fi(i,e.current)))}function M_(){var e=$n.current;return e===null?!0:(xe&4194048)===xe?mi===null:(xe&62914560)===xe||(xe&536870912)!==0?e===mi:!1}function E_(){var e=N.H;return N.H=wo,e===null?wo:e}function b_(){var e=N.A;return N.A=jy,e}function cc(){en=4,Wa||(xe&4194048)!==xe&&$n.current!==null||(vr=!0),(qa&134217727)===0&&(Ns&134217727)===0||Xe===null||Za(Xe,xe,ni,!1)}function rh(e,i,s){var o=Le;Le|=2;var u=E_(),f=b_();(Xe!==e||xe!==i)&&(oc=null,Sr(e,i)),i=!1;var g=en;t:do try{if(Be!==0&&me!==null){var A=me,G=ei;switch(Be){case 8:sh(),g=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(i=!0);var et=Be;if(Be=0,ei=null,Mr(e,A,G,et),s&&vr){g=0;break t}break;default:et=Be,Be=0,ei=null,Mr(e,A,G,et)}}Qy(),g=en;break}catch(ht){S_(e,ht)}while(!0);return i&&e.shellSuspendCounter++,ra=bs=null,Le=o,N.H=u,N.A=f,me===null&&(Xe=null,xe=0,wl()),g}function Qy(){for(;me!==null;)T_(me)}function Jy(e,i){var s=Le;Le|=2;var o=E_(),u=b_();Xe!==e||xe!==i?(oc=null,rc=M()+500,Sr(e,i)):vr=It(e,i);t:do try{if(Be!==0&&me!==null){i=me;var f=ei;e:switch(Be){case 1:Be=0,ei=null,Mr(e,i,f,1);break;case 2:case 9:if(Pm(f)){Be=0,ei=null,A_(i);break}i=function(){Be!==2&&Be!==9||Xe!==e||(Be=7),Hi(e)},f.then(i,i);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Pm(f)?(Be=0,ei=null,A_(i)):(Be=0,ei=null,Mr(e,i,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var A=me;if(g?f0(g):A.stateNode.complete){Be=0,ei=null;var G=A.sibling;if(G!==null)me=G;else{var et=A.return;et!==null?(me=et,uc(et)):me=null}break e}}Be=0,ei=null,Mr(e,i,f,5);break;case 6:Be=0,ei=null,Mr(e,i,f,6);break;case 8:sh(),en=6;break t;default:throw Error(a(462))}}$y();break}catch(ht){S_(e,ht)}while(!0);return ra=bs=null,N.H=o,N.A=u,Le=s,me!==null?0:(Xe=null,xe=0,wl(),en)}function $y(){for(;me!==null&&!Wt();)T_(me)}function T_(e){var i=Zg(e.alternate,e,ga);e.memoizedProps=e.pendingProps,i===null?uc(e):me=i}function A_(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=kg(s,i,i.pendingProps,i.type,void 0,xe);break;case 11:i=kg(s,i,i.pendingProps,i.type.render,i.ref,xe);break;case 5:Sf(i);default:Qg(s,i),i=me=bm(i,ga),i=Zg(s,i,ga)}e.memoizedProps=e.pendingProps,i===null?uc(e):me=i}function Mr(e,i,s,o){ra=bs=null,Sf(i),fr=null,So=0;var u=i.return;try{if(Gy(e,u,i,s,xe)){en=1,Ql(e,fi(s,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;en=1,Ql(e,fi(s,e.current)),me=null;return}i.flags&32768?(Se||o===1?e=!0:vr||(xe&536870912)!==0?e=!1:(Wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),R_(i,e)):uc(i)}function uc(e){var i=e;do{if((i.flags&32768)!==0){R_(i,Wa);return}e=i.return;var s=Xy(i.alternate,i,ga);if(s!==null){me=s;return}if(i=i.sibling,i!==null){me=i;return}me=i=e}while(i!==null);en===0&&(en=5)}function R_(e,i){do{var s=Wy(e.alternate,e);if(s!==null){s.flags&=32767,me=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){me=e;return}me=e=s}while(e!==null);en=6,me=null}function C_(e,i,s,o,u,f,g,A,G){e.cancelPendingCommit=null;do fc();while(_n!==0);if((Le&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(f=i.lanes|i.childLanes,f|=Yu,Ei(e,s,f,g,A,G),e===Xe&&(me=Xe=null,xe=0),yr=i,ja=e,_a=s,nh=f,ih=u,__=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iS(ft,function(){return N_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=I.p,I.p=2,g=Le,Le|=4;try{qy(e,i,s)}finally{Le=g,I.p=u,N.T=o}}_n=1,w_(),D_(),U_()}}function w_(){if(_n===1){_n=0;var e=ja,i=yr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var o=I.p;I.p=2;var u=Le;Le|=4;try{c_(i,e);var f=vh,g=mm(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(g!==A&&A&&A.ownerDocument&&pm(A.ownerDocument.documentElement,A)){if(G!==null&&Vu(A)){var et=G.start,ht=G.end;if(ht===void 0&&(ht=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(ht,A.value.length);else{var gt=A.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var lt=at.getSelection(),Ht=A.textContent.length,Qt=Math.min(G.start,Ht),Ge=G.end===void 0?Qt:Math.min(G.end,Ht);!lt.extend&&Qt>Ge&&(g=Ge,Ge=Qt,Qt=g);var Z=dm(A,Qt),k=dm(A,Ge);if(Z&&k&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var tt=gt.createRange();tt.setStart(Z.node,Z.offset),lt.removeAllRanges(),Qt>Ge?(lt.addRange(tt),lt.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),lt.addRange(tt))}}}}for(gt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&gt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Ec=!!_h,vh=_h=null}finally{Le=u,I.p=o,N.T=s}}e.current=i,_n=2}}function D_(){if(_n===2){_n=0;var e=ja,i=yr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var o=I.p;I.p=2;var u=Le;Le|=4;try{a_(e,i.alternate,i)}finally{Le=u,I.p=o,N.T=s}}_n=3}}function U_(){if(_n===4||_n===3){_n=0,L();var e=ja,i=yr,s=_a,o=__;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,yr=ja=null,L_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ya=null),js(s),i=i.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Mt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=N.T,u=I.p,I.p=2,N.T=null;try{for(var f=e.onRecoverableError,g=0;g<o.length;g++){var A=o[g];f(A.value,{componentStack:A.stack})}}finally{N.T=i,I.p=u}}(_a&3)!==0&&fc(),Hi(e),u=e.pendingLanes,(s&261930)!==0&&(u&42)!==0?e===ah?Io++:(Io=0,ah=e):Io=0,Fo(0)}}function L_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,xo(i)))}function fc(){return w_(),D_(),U_(),N_()}function N_(){if(_n!==5)return!1;var e=ja,i=nh;nh=0;var s=js(_a),o=N.T,u=I.p;try{I.p=32>s?32:s,N.T=null,s=ih,ih=null;var f=ja,g=_a;if(_n=0,yr=ja=null,_a=0,(Le&6)!==0)throw Error(a(331));var A=Le;if(Le|=4,p_(f.current),f_(f,f.current,g,s),Le=A,Fo(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{I.p=u,N.T=o,L_(e,i)}}function O_(e,i,s){i=fi(s,i),i=Bf(e.stateNode,i,2),e=Ga(e,i,2),e!==null&&(On(e,2),Hi(e))}function ze(e,i,s){if(e.tag===3)O_(e,e,s);else for(;i!==null;){if(i.tag===3){O_(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){e=fi(s,e),s=Pg(2),o=Ga(i,s,2),o!==null&&(Bg(s,o,i,e),On(o,2),Hi(o));break}}i=i.return}}function oh(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new Zy;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||($f=!0,u.add(s),e=tS.bind(null,e,i,s),i.then(e,e))}function tS(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Xe===e&&(xe&s)===s&&(en===4||en===3&&(xe&62914560)===xe&&300>M()-sc?(Le&2)===0&&Sr(e,0):th|=s,xr===xe&&(xr=0)),Hi(e)}function P_(e,i){i===0&&(i=Pe()),e=Ss(e,i),e!==null&&(On(e,i),Hi(e))}function eS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),P_(e,s)}function nS(e,i){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),P_(e,s)}function iS(e,i){return Ee(e,i)}var hc=null,Er=null,lh=!1,dc=!1,ch=!1,Ka=0;function Hi(e){e!==Er&&e.next===null&&(Er===null?hc=Er=e:Er=Er.next=e),dc=!0,lh||(lh=!0,sS())}function Fo(e,i){if(!ch&&dc){ch=!0;do for(var s=!1,o=hc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var g=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Lt(42|e)+1)-1,f&=u&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,F_(o,f))}else f=xe,f=ut(o,o===Xe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||It(o,f)||(s=!0,F_(o,f));o=o.next}while(s);ch=!1}}function aS(){B_()}function B_(){dc=lh=!1;var e=0;Ka!==0&&mS()&&(e=Ka);for(var i=M(),s=null,o=hc;o!==null;){var u=o.next,f=z_(o,i);f===0?(o.next=null,s===null?hc=u:s.next=u,u===null&&(Er=s)):(s=o,(e!==0||(f&3)!==0)&&(dc=!0)),o=u}_n!==0&&_n!==5||Fo(e),Ka!==0&&(Ka=0)}function z_(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Lt(f),A=1<<g,G=u[g];G===-1?((A&s)===0||(A&o)!==0)&&(u[g]=ne(A,i)):G<=i&&(e.expiredLanes|=A),f&=~A}if(i=Xe,s=xe,s=ut(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ne(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||It(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&Ne(o),js(s)){case 2:case 8:s=xt;break;case 32:s=ft;break;case 268435456:s=Ct;break;default:s=ft}return o=I_.bind(null,e),s=Ee(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&Ne(o),e.callbackPriority=2,e.callbackNode=null,2}function I_(e,i){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(fc()&&e.callbackNode!==s)return null;var o=xe;return o=ut(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(x_(e,o,i),z_(e,M()),e.callbackNode!=null&&e.callbackNode===s?I_.bind(null,e):null)}function F_(e,i){if(fc())return null;x_(e,i,!0)}function sS(){_S(function(){(Le&6)!==0?Ee(pt,aS):B_()})}function uh(){if(Ka===0){var e=lr;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ka=e}return Ka}function H_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Sl(""+e)}function G_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function rS(e,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var f=H_((u[mn]||null).action),g=o.submitter;g&&(i=(i=g[mn]||null)?H_(i.formAction):g.getAttribute("formAction"),i!==null&&(f=i,g=null));var A=new Tl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var G=g?G_(u,g):new FormData(u);Df(s,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=g?G_(u,g):new FormData(u),Df(s,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var fh=0;fh<qu.length;fh++){var hh=qu[fh],oS=hh.toLowerCase(),lS=hh[0].toUpperCase()+hh.slice(1);Ri(oS,"on"+lS)}Ri(vm,"onAnimationEnd"),Ri(xm,"onAnimationIteration"),Ri(ym,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(by,"onTransitionRun"),Ri(Ty,"onTransitionStart"),Ri(Ay,"onTransitionCancel"),Ri(Sm,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function V_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],u=o.event;o=o.listeners;t:{var f=void 0;if(i)for(var g=o.length-1;0<=g;g--){var A=o[g],G=A.instance,et=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(ht){Cl(ht)}u.currentTarget=null,f=G}else for(g=0;g<o.length;g++){if(A=o[g],G=A.instance,et=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(ht){Cl(ht)}u.currentTarget=null,f=G}}}}function ge(e,i){var s=i[Ua];s===void 0&&(s=i[Ua]=new Set);var o=e+"__bubble";s.has(o)||(k_(i,e,2,!1),s.add(o))}function dh(e,i,s){var o=0;i&&(o|=4),k_(s,e,o,i)}var pc="_reactListening"+Math.random().toString(36).slice(2);function ph(e){if(!e[pc]){e[pc]=!0,rt.forEach(function(s){s!=="selectionchange"&&(cS.has(s)||dh(s,!1,e),dh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[pc]||(i[pc]=!0,dh("selectionchange",!1,i))}}function k_(e,i,s,o){switch(v0(i)){case 2:var u=zS;break;case 8:u=IS;break;default:u=wh}s=u.bind(null,i,s,e),u=void 0,!Nu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function mh(e,i,s,o,u){var f=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var A=o.stateNode.containerInfo;if(A===u)break;if(g===4)for(g=o.return;g!==null;){var G=g.tag;if((G===3||G===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;A!==null;){if(g=La(A),g===null)return;if(G=g.tag,G===5||G===6||G===26||G===27){o=f=g;continue t}A=A.parentNode}}o=o.return}jp(function(){var et=f,ht=Uu(s),gt=[];t:{var at=Mm.get(e);if(at!==void 0){var lt=Tl,Ht=e;switch(e){case"keypress":if(El(s)===0)break t;case"keydown":case"keyup":lt=ny;break;case"focusin":Ht="focus",lt=zu;break;case"focusout":Ht="blur",lt=zu;break;case"beforeblur":case"afterblur":lt=zu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=sy;break;case vm:case xm:case ym:lt=Yx;break;case Sm:lt=oy;break;case"scroll":case"scrollend":lt=Vx;break;case"wheel":lt=cy;break;case"copy":case"cut":case"paste":lt=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=$p;break;case"toggle":case"beforetoggle":lt=fy}var Qt=(i&4)!==0,Ge=!Qt&&(e==="scroll"||e==="scrollend"),Z=Qt?at!==null?at+"Capture":null:at;Qt=[];for(var k=et,tt;k!==null;){var mt=k;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||Z===null||(mt=oo(k,Z),mt!=null&&Qt.push(Go(k,mt,tt))),Ge)break;k=k.return}0<Qt.length&&(at=new lt(at,Ht,null,s,ht),gt.push({event:at,listeners:Qt}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",at&&s!==Du&&(Ht=s.relatedTarget||s.fromElement)&&(La(Ht)||Ht[ta]))break t;if((lt||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(Ht=s.relatedTarget||s.toElement,lt=et,Ht=Ht?La(Ht):null,Ht!==null&&(Ge=c(Ht),Qt=Ht.tag,Ht!==Ge||Qt!==5&&Qt!==27&&Qt!==6)&&(Ht=null)):(lt=null,Ht=et),lt!==Ht)){if(Qt=Qp,mt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=$p,mt="onPointerLeave",Z="onPointerEnter",k="pointer"),Ge=lt==null?at:_s(lt),tt=Ht==null?at:_s(Ht),at=new Qt(mt,k+"leave",lt,s,ht),at.target=Ge,at.relatedTarget=tt,mt=null,La(ht)===et&&(Qt=new Qt(Z,k+"enter",Ht,s,ht),Qt.target=tt,Qt.relatedTarget=Ge,mt=Qt),Ge=mt,lt&&Ht)e:{for(Qt=uS,Z=lt,k=Ht,tt=0,mt=Z;mt;mt=Qt(mt))tt++;mt=0;for(var Kt=k;Kt;Kt=Qt(Kt))mt++;for(;0<tt-mt;)Z=Qt(Z),tt--;for(;0<mt-tt;)k=Qt(k),mt--;for(;tt--;){if(Z===k||k!==null&&Z===k.alternate){Qt=Z;break e}Z=Qt(Z),k=Qt(k)}Qt=null}else Qt=null;lt!==null&&X_(gt,at,lt,Qt,!1),Ht!==null&&Ge!==null&&X_(gt,Ge,Ht,Qt,!0)}}t:{if(at=et?_s(et):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var Ce=om;else if(sm(at))if(lm)Ce=Sy;else{Ce=xy;var qt=vy}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&Ks(et.elementType)&&(Ce=om):Ce=yy;if(Ce&&(Ce=Ce(e,et))){rm(gt,Ce,s,ht);break t}qt&&qt(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&Ti(at,"number",at.value)}switch(qt=et?_s(et):window,e){case"focusin":(sm(qt)||qt.contentEditable==="true")&&(tr=qt,ku=et,go=null);break;case"focusout":go=ku=tr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,gm(gt,s,ht);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":gm(gt,s,ht)}var fe;if(Fu)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else $s?im(e,s)&&(ye="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ye="onCompositionStart");ye&&(tm&&s.locale!=="ko"&&($s||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&$s&&(fe=Zp()):(Oa=ht,Ou="value"in Oa?Oa.value:Oa.textContent,$s=!0)),qt=mc(et,ye),0<qt.length&&(ye=new Jp(ye,e,null,s,ht),gt.push({event:ye,listeners:qt}),fe?ye.data=fe:(fe=am(s),fe!==null&&(ye.data=fe)))),(fe=dy?py(e,s):my(e,s))&&(ye=mc(et,"onBeforeInput"),0<ye.length&&(qt=new Jp("onBeforeInput","beforeinput",null,s,ht),gt.push({event:qt,listeners:ye}),qt.data=fe)),rS(gt,e,et,s,ht)}V_(gt,i)})}function Go(e,i,s){return{instance:e,listener:i,currentTarget:s}}function mc(e,i){for(var s=i+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=oo(e,s),u!=null&&o.unshift(Go(e,u,f)),u=oo(e,i),u!=null&&o.push(Go(e,u,f))),e.tag===3)return o;e=e.return}return[]}function uS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function X_(e,i,s,o,u){for(var f=i._reactName,g=[];s!==null&&s!==o;){var A=s,G=A.alternate,et=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||et===null||(G=et,u?(et=oo(s,f),et!=null&&g.unshift(Go(s,et,G))):u||(et=oo(s,f),et!=null&&g.push(Go(s,et,G)))),s=s.return}g.length!==0&&e.push({event:i,listeners:g})}var fS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function W_(e){return(typeof e=="string"?e:""+e).replace(fS,`
`).replace(hS,"")}function q_(e,i){return i=W_(i),W_(e)===i}function He(e,i,s,o,u,f){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&zn(e,""+o);break;case"className":se(e,"class",o);break;case"tabIndex":se(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":se(e,s,o);break;case"style":ea(e,o,f);break;case"data":if(i!=="object"){se(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Sl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(i!=="input"&&He(e,i,"name",u.name,u,null),He(e,i,"formEncType",u.formEncType,u,null),He(e,i,"formMethod",u.formMethod,u,null),He(e,i,"formTarget",u.formTarget,u,null)):(He(e,i,"encType",u.encType,u,null),He(e,i,"method",u.method,u,null),He(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Sl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=na);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=Sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),ee(e,"popover",o);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ee(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Hx.get(s)||s,ee(e,s,o))}}function gh(e,i,s,o,u,f){switch(s){case"style":ea(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),f=e[mn]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(i,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,u);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):ee(e,s,o)}}}function An(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,f;for(f in s)if(s.hasOwnProperty(f)){var g=s[f];if(g!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(e,i,f,g,s,null)}}u&&He(e,i,"srcSet",s.srcSet,s,null),o&&He(e,i,"src",s.src,s,null);return;case"input":ge("invalid",e);var A=f=g=u=null,G=null,et=null;for(o in s)if(s.hasOwnProperty(o)){var ht=s[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":g=ht;break;case"checked":G=ht;break;case"defaultChecked":et=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:He(e,i,o,ht,s,null)}}Zn(e,f,A,G,et,g,u,!1);return;case"select":ge("invalid",e),o=g=f=null;for(u in s)if(s.hasOwnProperty(u)&&(A=s[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":o=A;default:He(e,i,u,A,s,null)}i=f,s=g,e.multiple=!!o,i!=null?Kn(e,!!o,i,!1):s!=null&&Kn(e,!!o,s,!0);return;case"textarea":ge("invalid",e),f=u=o=null;for(g in s)if(s.hasOwnProperty(g)&&(A=s[g],A!=null))switch(g){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:He(e,i,g,A,s,null)}on(e,o,u,f);return;case"option":for(G in s)s.hasOwnProperty(G)&&(o=s[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":He(e,i,G,o,s,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<Ho.length;o++)ge(Ho[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in s)if(s.hasOwnProperty(et)&&(o=s[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(e,i,et,o,s,null)}return;default:if(Ks(i)){for(ht in s)s.hasOwnProperty(ht)&&(o=s[ht],o!==void 0&&gh(e,i,ht,o,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(o=s[A],o!=null&&He(e,i,A,o,s,null))}function dS(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,A=null,G=null,et=null,ht=null;for(lt in s){var gt=s[lt];if(s.hasOwnProperty(lt)&&gt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":G=gt;default:o.hasOwnProperty(lt)||He(e,i,lt,null,o,gt)}}for(var at in o){var lt=o[at];if(gt=s[at],o.hasOwnProperty(at)&&(lt!=null||gt!=null))switch(at){case"type":f=lt;break;case"name":u=lt;break;case"checked":et=lt;break;case"defaultChecked":ht=lt;break;case"value":g=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:lt!==gt&&He(e,i,at,lt,o,gt)}}Bn(e,g,A,G,et,ht,f,u);return;case"select":lt=g=A=at=null;for(f in s)if(G=s[f],s.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":lt=G;default:o.hasOwnProperty(f)||He(e,i,f,null,o,G)}for(u in o)if(f=o[u],G=s[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":at=f;break;case"defaultValue":A=f;break;case"multiple":g=f;default:f!==G&&He(e,i,u,f,o,G)}i=A,s=g,o=lt,at!=null?Kn(e,!!s,at,!1):!!o!=!!s&&(i!=null?Kn(e,!!s,i,!0):Kn(e,!!s,s?[]:"",!1));return;case"textarea":lt=at=null;for(A in s)if(u=s[A],s.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,i,A,null,o,u)}for(g in o)if(u=o[g],f=s[g],o.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":at=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==f&&He(e,i,g,u,o,f)}Oe(e,at,lt);return;case"option":for(var Ht in s)at=s[Ht],s.hasOwnProperty(Ht)&&at!=null&&!o.hasOwnProperty(Ht)&&(Ht==="selected"?e.selected=!1:He(e,i,Ht,null,o,at));for(G in o)at=o[G],lt=s[G],o.hasOwnProperty(G)&&at!==lt&&(at!=null||lt!=null)&&(G==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":He(e,i,G,at,o,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in s)at=s[Qt],s.hasOwnProperty(Qt)&&at!=null&&!o.hasOwnProperty(Qt)&&He(e,i,Qt,null,o,at);for(et in o)if(at=o[et],lt=s[et],o.hasOwnProperty(et)&&at!==lt&&(at!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:He(e,i,et,at,o,lt)}return;default:if(Ks(i)){for(var Ge in s)at=s[Ge],s.hasOwnProperty(Ge)&&at!==void 0&&!o.hasOwnProperty(Ge)&&gh(e,i,Ge,void 0,o,at);for(ht in o)at=o[ht],lt=s[ht],!o.hasOwnProperty(ht)||at===lt||at===void 0&&lt===void 0||gh(e,i,ht,at,o,lt);return}}for(var Z in s)at=s[Z],s.hasOwnProperty(Z)&&at!=null&&!o.hasOwnProperty(Z)&&He(e,i,Z,null,o,at);for(gt in o)at=o[gt],lt=s[gt],!o.hasOwnProperty(gt)||at===lt||at==null&&lt==null||He(e,i,gt,at,o,lt)}function Y_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],f=u.transferSize,g=u.initiatorType,A=u.duration;if(f&&A&&Y_(g)){for(g=0,A=u.responseEnd,o+=1;o<s.length;o++){var G=s[o],et=G.startTime;if(et>A)break;var ht=G.transferSize,gt=G.initiatorType;ht&&Y_(gt)&&(G=G.responseEnd,g+=ht*(G<A?1:(A-et)/(G-et)))}if(--o,i+=8*(f+g)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _h=null,vh=null;function gc(e){return e.nodeType===9?e:e.ownerDocument}function j_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function xh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yh=null;function mS(){var e=window.event;return e&&e.type==="popstate"?e===yh?!1:(yh=e,!0):(yh=null,!1)}var K_=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,Q_=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof Q_<"u"?function(e){return Q_.resolve(null).then(e).catch(vS)}:K_;function vS(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function J_(e,i){var s=i,o=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(u),Rr(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")Vo(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Vo(s);for(var f=s.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[gs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||s.removeChild(f),f=g}}else s==="body"&&Vo(e.ownerDocument.body);s=u}while(s);Rr(i)}function $_(e,i){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function Sh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Sh(s),ro(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function xS(e,i,s,o){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[gs])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function yS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=gi(e.nextSibling),e===null))return null;return e}function t0(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=gi(e.nextSibling),e===null))return null;return e}function Mh(e){return e.data==="$?"||e.data==="$~"}function Eh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function SS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var bh=null;function e0(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return gi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function n0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function i0(e,i,s){switch(i=gc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Vo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ro(e)}var _i=new Map,a0=new Set;function _c(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=I.d;I.d={f:MS,r:ES,D:bS,C:TS,L:AS,m:RS,X:wS,S:CS,M:DS};function MS(){var e=va.f(),i=lc();return e||i}function ES(e){var i=Na(e);i!==null&&i.tag===5&&i.type==="form"?Sg(i):va.r(e)}var br=typeof document>"u"?null:document;function s0(e,i,s){var o=br;if(o&&typeof i=="string"&&i){var u=ie(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),a0.has(u)||(a0.add(u),e={rel:e,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),An(i,"link",e),X(i),o.head.appendChild(i)))}}function bS(e){va.D(e),s0("dns-prefetch",e,null)}function TS(e,i){va.C(e,i),s0("preconnect",e,i)}function AS(e,i,s){va.L(e,i,s);var o=br;if(o&&e&&i){var u='link[rel="preload"][as="'+ie(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+ie(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+ie(s.imageSizes)+'"]')):u+='[href="'+ie(e)+'"]';var f=u;switch(i){case"style":f=Tr(e);break;case"script":f=Ar(e)}_i.has(f)||(e=x({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),_i.set(f,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(ko(f))||i==="script"&&o.querySelector(Xo(f))||(i=o.createElement("link"),An(i,"link",e),X(i),o.head.appendChild(i)))}}function RS(e,i){va.m(e,i);var s=br;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+ie(o)+'"][href="'+ie(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ar(e)}if(!_i.has(f)&&(e=x({rel:"modulepreload",href:e},i),_i.set(f,e),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Xo(f)))return}o=s.createElement("link"),An(o,"link",e),X(o),s.head.appendChild(o)}}}function CS(e,i,s){va.S(e,i,s);var o=br;if(o&&e){var u=R(o).hoistableStyles,f=Tr(e);i=i||"default";var g=u.get(f);if(!g){var A={loading:0,preload:null};if(g=o.querySelector(ko(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":i},s),(s=_i.get(f))&&Th(e,s);var G=g=o.createElement("link");X(G),An(G,"link",e),G._p=new Promise(function(et,ht){G.onload=et,G.onerror=ht}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,vc(g,i,o)}g={type:"stylesheet",instance:g,count:1,state:A},u.set(f,g)}}}function wS(e,i){va.X(e,i);var s=br;if(s&&e){var o=R(s).hoistableScripts,u=Ar(e),f=o.get(u);f||(f=s.querySelector(Xo(u)),f||(e=x({src:e,async:!0},i),(i=_i.get(u))&&Ah(e,i),f=s.createElement("script"),X(f),An(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function DS(e,i){va.M(e,i);var s=br;if(s&&e){var o=R(s).hoistableScripts,u=Ar(e),f=o.get(u);f||(f=s.querySelector(Xo(u)),f||(e=x({src:e,async:!0,type:"module"},i),(i=_i.get(u))&&Ah(e,i),f=s.createElement("script"),X(f),An(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function r0(e,i,s,o){var u=(u=it.current)?_c(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Tr(s.href),s=R(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Tr(s.href);var f=R(u).hoistableStyles,g=f.get(e);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=u.querySelector(ko(e)))&&!f._p&&(g.instance=f,g.state.loading=5),_i.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},_i.set(e,s),f||US(u,e,s,g.state))),i&&o===null)throw Error(a(528,""));return g}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ar(s),s=R(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Tr(e){return'href="'+ie(e)+'"'}function ko(e){return'link[rel="stylesheet"]['+e+"]"}function o0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function US(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),An(i,"link",s),X(i),e.head.appendChild(i))}function Ar(e){return'[src="'+ie(e)+'"]'}function Xo(e){return"script[async]"+e}function l0(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+ie(s.href)+'"]');if(o)return i.instance=o,X(o),o;var u=x({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),An(o,"style",u),vc(o,s.precedence,e),i.instance=o;case"stylesheet":u=Tr(s.href);var f=e.querySelector(ko(u));if(f)return i.state.loading|=4,i.instance=f,X(f),f;o=o0(s),(u=_i.get(u))&&Th(o,u),f=(e.ownerDocument||e).createElement("link"),X(f);var g=f;return g._p=new Promise(function(A,G){g.onload=A,g.onerror=G}),An(f,"link",o),i.state.loading|=4,vc(f,s.precedence,e),i.instance=f;case"script":return f=Ar(s.src),(u=e.querySelector(Xo(f)))?(i.instance=u,X(u),u):(o=s,(u=_i.get(f))&&(o=x({},s),Ah(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),An(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,vc(o,s.precedence,e));return i.instance}function vc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,g=0;g<o.length;g++){var A=o[g];if(A.dataset.precedence===i)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Th(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Ah(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var xc=null;function c0(e,i,s){if(xc===null){var o=new Map,u=xc=new Map;u.set(s,o)}else u=xc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var f=s[u];if(!(f[gs]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(i)||"";g=e+g;var A=o.get(g);A?A.push(f):o.set(g,[f])}}return o}function u0(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function LS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function f0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function NS(e,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Tr(o.href),f=i.querySelector(ko(u));if(f){i=f._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=yc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=f,X(f);return}f=i.ownerDocument||i,o=o0(o),(u=_i.get(u))&&Th(o,u),f=f.createElement("link"),X(f);var g=f;g._p=new Promise(function(A,G){g.onload=A,g.onerror=G}),An(f,"link",o),s.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=yc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Rh=0;function OS(e,i){return e.stylesheets&&e.count===0&&Mc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&Mc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+i);0<e.imgBytes&&Rh===0&&(Rh=62500*pS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Rh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function yc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Sc=null;function Mc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sc=new Map,i.forEach(PS,e),Sc=null,yc.call(e))}function PS(e,i){if(!(i.state.loading&4)){var s=Sc.get(e);if(s)var o=s.get(null);else{s=new Map,Sc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(s.set(g.dataset.precedence,g),o=g)}o&&s.set(null,o)}u=i.instance,g=u.getAttribute("data-precedence"),f=s.get(g)||o,f===o&&s.set(null,u),s.set(g,u),this.count++,o=yc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Wo={$$typeof:P,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function BS(e,i,s,o,u,f,g,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function h0(e,i,s,o,u,f,g,A,G,et,ht,gt){return e=new BS(e,i,s,g,G,et,ht,gt,A),i=1,f===!0&&(i|=24),f=Jn(3,null,null,i),e.current=f,f.stateNode=e,i=rf(),i.refCount++,e.pooledCache=i,i.refCount++,f.memoizedState={element:o,isDehydrated:s,cache:i},uf(f),e}function d0(e){return e?(e=ir,e):ir}function p0(e,i,s,o,u,f){u=d0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(i),o.payload={element:s},f=f===void 0?null:f,f!==null&&(o.callback=f),s=Ga(e,o,i),s!==null&&(qn(s,e,i),Eo(s,e,i))}function m0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Ch(e,i){m0(e,i),(e=e.alternate)&&m0(e,i)}function g0(e){if(e.tag===13||e.tag===31){var i=Ss(e,67108864);i!==null&&qn(i,e,67108864),Ch(e,67108864)}}function _0(e){if(e.tag===13||e.tag===31){var i=ii();i=Ys(i);var s=Ss(e,i);s!==null&&qn(s,e,i),Ch(e,i)}}var Ec=!0;function zS(e,i,s,o){var u=N.T;N.T=null;var f=I.p;try{I.p=2,wh(e,i,s,o)}finally{I.p=f,N.T=u}}function IS(e,i,s,o){var u=N.T;N.T=null;var f=I.p;try{I.p=8,wh(e,i,s,o)}finally{I.p=f,N.T=u}}function wh(e,i,s,o){if(Ec){var u=Dh(o);if(u===null)mh(e,i,o,bc,s),x0(e,o);else if(HS(u,e,i,s,o))o.stopPropagation();else if(x0(e,o),i&4&&-1<FS.indexOf(e)){for(;u!==null;){var f=Na(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=St(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var G=1<<31-Lt(g);A.entanglements[1]|=G,g&=~G}Hi(f),(Le&6)===0&&(rc=M()+500,Fo(0))}}break;case 31:case 13:A=Ss(f,2),A!==null&&qn(A,f,2),lc(),Ch(f,2)}if(f=Dh(o),f===null&&mh(e,i,o,bc,s),f===u)break;u=f}u!==null&&o.stopPropagation()}else mh(e,i,o,null,s)}}function Dh(e){return e=Uu(e),Uh(e)}var bc=null;function Uh(e){if(bc=null,e=La(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=h(i),e!==null)return e;e=null}else if(s===31){if(e=p(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return bc=e,null}function v0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case pt:return 2;case xt:return 8;case ft:case kt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Lh=!1,Ja=null,$a=null,ts=null,qo=new Map,Yo=new Map,es=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x0(e,i){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":qo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(i.pointerId)}}function jo(e,i,s,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},i!==null&&(i=Na(i),i!==null&&g0(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function HS(e,i,s,o,u){switch(i){case"focusin":return Ja=jo(Ja,e,i,s,o,u),!0;case"dragenter":return $a=jo($a,e,i,s,o,u),!0;case"mouseover":return ts=jo(ts,e,i,s,o,u),!0;case"pointerover":var f=u.pointerId;return qo.set(f,jo(qo.get(f)||null,e,i,s,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Yo.set(f,jo(Yo.get(f)||null,e,i,s,o,u)),!0}return!1}function y0(e){var i=La(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=h(s),i!==null){e.blockedOn=i,Zs(e.priority,function(){_0(s)});return}}else if(i===31){if(i=p(s),i!==null){e.blockedOn=i,Zs(e.priority,function(){_0(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Dh(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Du=o,s.target.dispatchEvent(o),Du=null}else return i=Na(s),i!==null&&g0(i),e.blockedOn=s,!1;i.shift()}return!0}function S0(e,i,s){Tc(e)&&s.delete(i)}function GS(){Lh=!1,Ja!==null&&Tc(Ja)&&(Ja=null),$a!==null&&Tc($a)&&($a=null),ts!==null&&Tc(ts)&&(ts=null),qo.forEach(S0),Yo.forEach(S0)}function Ac(e,i){e.blockedOn===i&&(e.blockedOn=null,Lh||(Lh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,GS)))}var Rc=null;function M0(e){Rc!==e&&(Rc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Rc===e&&(Rc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(Uh(o||s)===null)continue;break}var f=Na(s);f!==null&&(e.splice(i,3),i-=3,Df(f,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Rr(e){function i(G){return Ac(G,e)}Ja!==null&&Ac(Ja,e),$a!==null&&Ac($a,e),ts!==null&&Ac(ts,e),qo.forEach(i),Yo.forEach(i);for(var s=0;s<es.length;s++){var o=es[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<es.length&&(s=es[0],s.blockedOn===null);)y0(s),s.blockedOn===null&&es.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],f=s[o+1],g=u[mn]||null;if(typeof f=="function")g||M0(s);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[mn]||null)A=g.formAction;else if(Uh(u)!==null)continue}else A=g.action;typeof A=="function"?s[o+1]=A:(s.splice(o,3),o-=3),M0(s)}}}function E0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Nh(e){this._internalRoot=e}Cc.prototype.render=Nh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=ii();p0(s,o,e,i,null,null)},Cc.prototype.unmount=Nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;p0(e.current,2,null,e,null,null),lc(),i[ta]=null}};function Cc(e){this._internalRoot=e}Cc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Bi();e={blockedOn:null,target:e,priority:i};for(var s=0;s<es.length&&i!==0&&i<es[s].priority;s++);es.splice(s,0,e),s===0&&y0(e)}};var b0=t.version;if(b0!=="19.2.4")throw Error(a(527,b0,"19.2.4"));I.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var VS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{Mt=wc.inject(VS),yt=wc}catch{}}return Ko.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",u=Ug,f=Lg,g=Ng;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(g=i.onRecoverableError)),i=h0(e,1,!1,null,null,s,o,null,u,f,g,E0),e[ta]=i.current,ph(e),new Nh(i)},Ko.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,u="",f=Ug,g=Lg,A=Ng,G=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=h0(e,1,!0,i,s??null,o,u,G,f,g,A,E0),i.context=d0(null),s=i.current,o=ii(),o=Ys(o),u=Ha(o),u.callback=null,Ga(s,u,o),s=o,i.current.lanes=s,On(i,s),Hi(i),e[ta]=i.current,ph(e),new Cc(i)},Ko.version="19.2.4",Ko}var O0;function JS(){if(O0)return Bh.exports;O0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Bh.exports=QS(),Bh.exports}var $S=JS();const Ki=Object.create(null);Ki.open="0";Ki.close="1";Ki.ping="2";Ki.pong="3";Ki.message="4";Ki.upgrade="5";Ki.noop="6";const ru=Object.create(null);Object.keys(Ki).forEach(r=>{ru[Ki[r]]=r});const bd={type:"error",data:"parser error"},Wv=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",qv=typeof ArrayBuffer=="function",Yv=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,Ap=({type:r,data:t},n,a)=>Wv&&t instanceof Blob?n?a(t):P0(t,a):qv&&(t instanceof ArrayBuffer||Yv(t))?n?a(t):P0(new Blob([t]),a):a(Ki[r]+(t||"")),P0=(r,t)=>{const n=new FileReader;return n.onload=function(){const a=n.result.split(",")[1];t("b"+(a||""))},n.readAsDataURL(r)};function B0(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let Hh;function tM(r,t){if(Wv&&r.data instanceof Blob)return r.data.arrayBuffer().then(B0).then(t);if(qv&&(r.data instanceof ArrayBuffer||Yv(r.data)))return t(B0(r.data));Ap(r,!1,n=>{Hh||(Hh=new TextEncoder),t(Hh.encode(n))})}const z0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ol=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<z0.length;r++)ol[z0.charCodeAt(r)]=r;const eM=r=>{let t=r.length*.75,n=r.length,a,l=0,c,h,p,m;r[r.length-1]==="="&&(t--,r[r.length-2]==="="&&t--);const d=new ArrayBuffer(t),v=new Uint8Array(d);for(a=0;a<n;a+=4)c=ol[r.charCodeAt(a)],h=ol[r.charCodeAt(a+1)],p=ol[r.charCodeAt(a+2)],m=ol[r.charCodeAt(a+3)],v[l++]=c<<2|h>>4,v[l++]=(h&15)<<4|p>>2,v[l++]=(p&3)<<6|m&63;return d},nM=typeof ArrayBuffer=="function",Rp=(r,t)=>{if(typeof r!="string")return{type:"message",data:jv(r,t)};const n=r.charAt(0);return n==="b"?{type:"message",data:iM(r.substring(1),t)}:ru[n]?r.length>1?{type:ru[n],data:r.substring(1)}:{type:ru[n]}:bd},iM=(r,t)=>{if(nM){const n=eM(r);return jv(n,t)}else return{base64:!0,data:r}},jv=(r,t)=>t==="blob"?r instanceof Blob?r:new Blob([r]):r instanceof ArrayBuffer?r:r.buffer,Zv="",aM=(r,t)=>{const n=r.length,a=new Array(n);let l=0;r.forEach((c,h)=>{Ap(c,!1,p=>{a[h]=p,++l===n&&t(a.join(Zv))})})},sM=(r,t)=>{const n=r.split(Zv),a=[];for(let l=0;l<n.length;l++){const c=Rp(n[l],t);if(a.push(c),c.type==="error")break}return a};function rM(){return new TransformStream({transform(r,t){tM(r,n=>{const a=n.length;let l;if(a<126)l=new Uint8Array(1),new DataView(l.buffer).setUint8(0,a);else if(a<65536){l=new Uint8Array(3);const c=new DataView(l.buffer);c.setUint8(0,126),c.setUint16(1,a)}else{l=new Uint8Array(9);const c=new DataView(l.buffer);c.setUint8(0,127),c.setBigUint64(1,BigInt(a))}r.data&&typeof r.data!="string"&&(l[0]|=128),t.enqueue(l),t.enqueue(n)})}})}let Gh;function Dc(r){return r.reduce((t,n)=>t+n.length,0)}function Uc(r,t){if(r[0].length===t)return r.shift();const n=new Uint8Array(t);let a=0;for(let l=0;l<t;l++)n[l]=r[0][a++],a===r[0].length&&(r.shift(),a=0);return r.length&&a<r[0].length&&(r[0]=r[0].slice(a)),n}function oM(r,t){Gh||(Gh=new TextDecoder);const n=[];let a=0,l=-1,c=!1;return new TransformStream({transform(h,p){for(n.push(h);;){if(a===0){if(Dc(n)<1)break;const m=Uc(n,1);c=(m[0]&128)===128,l=m[0]&127,l<126?a=3:l===126?a=1:a=2}else if(a===1){if(Dc(n)<2)break;const m=Uc(n,2);l=new DataView(m.buffer,m.byteOffset,m.length).getUint16(0),a=3}else if(a===2){if(Dc(n)<8)break;const m=Uc(n,8),d=new DataView(m.buffer,m.byteOffset,m.length),v=d.getUint32(0);if(v>Math.pow(2,21)-1){p.enqueue(bd);break}l=v*Math.pow(2,32)+d.getUint32(4),a=3}else{if(Dc(n)<l)break;const m=Uc(n,l);p.enqueue(Rp(c?m:Gh.decode(m),t)),a=0}if(l===0||l>r){p.enqueue(bd);break}}}})}const Kv=4;function pn(r){if(r)return lM(r)}function lM(r){for(var t in pn.prototype)r[t]=pn.prototype[t];return r}pn.prototype.on=pn.prototype.addEventListener=function(r,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(t),this};pn.prototype.once=function(r,t){function n(){this.off(r,n),t.apply(this,arguments)}return n.fn=t,this.on(r,n),this};pn.prototype.off=pn.prototype.removeListener=pn.prototype.removeAllListeners=pn.prototype.removeEventListener=function(r,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+r];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var a,l=0;l<n.length;l++)if(a=n[l],a===t||a.fn===t){n.splice(l,1);break}return n.length===0&&delete this._callbacks["$"+r],this};pn.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+r],a=1;a<arguments.length;a++)t[a-1]=arguments[a];if(n){n=n.slice(0);for(var a=0,l=n.length;a<l;++a)n[a].apply(this,t)}return this};pn.prototype.emitReserved=pn.prototype.emit;pn.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};pn.prototype.hasListeners=function(r){return!!this.listeners(r).length};const Mu=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,n)=>n(t,0),Si=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),cM="arraybuffer";function Qv(r,...t){return t.reduce((n,a)=>(r.hasOwnProperty(a)&&(n[a]=r[a]),n),{})}const uM=Si.setTimeout,fM=Si.clearTimeout;function Eu(r,t){t.useNativeTimers?(r.setTimeoutFn=uM.bind(Si),r.clearTimeoutFn=fM.bind(Si)):(r.setTimeoutFn=Si.setTimeout.bind(Si),r.clearTimeoutFn=Si.clearTimeout.bind(Si))}const hM=1.33;function dM(r){return typeof r=="string"?pM(r):Math.ceil((r.byteLength||r.size)*hM)}function pM(r){let t=0,n=0;for(let a=0,l=r.length;a<l;a++)t=r.charCodeAt(a),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(a++,n+=4);return n}function Jv(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function mM(r){let t="";for(let n in r)r.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(r[n]));return t}function gM(r){let t={},n=r.split("&");for(let a=0,l=n.length;a<l;a++){let c=n[a].split("=");t[decodeURIComponent(c[0])]=decodeURIComponent(c[1])}return t}class _M extends Error{constructor(t,n,a){super(t),this.description=n,this.context=a,this.type="TransportError"}}class Cp extends pn{constructor(t){super(),this.writable=!1,Eu(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,n,a){return super.emitReserved("error",new _M(t,n,a)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const n=Rp(t,this.socket.binaryType);this.onPacket(n)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,n={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const n=mM(t);return n.length?"?"+n:""}}class vM extends Cp{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const n=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let a=0;this._polling&&(a++,this.once("pollComplete",function(){--a||n()})),this.writable||(a++,this.once("drain",function(){--a||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const n=a=>{if(this.readyState==="opening"&&a.type==="open"&&this.onOpen(),a.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(a)};sM(t,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,aM(t,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Jv()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(t,n)}}let $v=!1;try{$v=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const xM=$v;function yM(){}class SM extends vM{constructor(t){if(super(t),typeof location<"u"){const n=location.protocol==="https:";let a=location.port;a||(a=n?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||a!==t.port}}doWrite(t,n){const a=this.request({method:"POST",data:t});a.on("success",n),a.on("error",(l,c)=>{this.onError("xhr post error",l,c)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(n,a)=>{this.onError("xhr poll error",n,a)}),this.pollXhr=t}}class Yi extends pn{constructor(t,n,a){super(),this.createRequest=t,Eu(this,a),this._opts=a,this._method=a.method||"GET",this._uri=n,this._data=a.data!==void 0?a.data:null,this._create()}_create(){var t;const n=Qv(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const a=this._xhr=this.createRequest(n);try{a.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){a.setDisableHeaderCheck&&a.setDisableHeaderCheck(!0);for(let l in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(l)&&a.setRequestHeader(l,this._opts.extraHeaders[l])}}catch{}if(this._method==="POST")try{a.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{a.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(a),"withCredentials"in a&&(a.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(a.timeout=this._opts.requestTimeout),a.onreadystatechange=()=>{var l;a.readyState===3&&((l=this._opts.cookieJar)===null||l===void 0||l.parseCookies(a.getResponseHeader("set-cookie"))),a.readyState===4&&(a.status===200||a.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof a.status=="number"?a.status:0)},0))},a.send(this._data)}catch(l){this.setTimeoutFn(()=>{this._onError(l)},0);return}typeof document<"u"&&(this._index=Yi.requestsCount++,Yi.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=yM,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Yi.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Yi.requestsCount=0;Yi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",I0);else if(typeof addEventListener=="function"){const r="onpagehide"in Si?"pagehide":"unload";addEventListener(r,I0,!1)}}function I0(){for(let r in Yi.requests)Yi.requests.hasOwnProperty(r)&&Yi.requests[r].abort()}const MM=(function(){const r=tx({xdomain:!1});return r&&r.responseType!==null})();class EM extends SM{constructor(t){super(t);const n=t&&t.forceBase64;this.supportsBinary=MM&&!n}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Yi(tx,this.uri(),t)}}function tx(r){const t=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||xM))return new XMLHttpRequest}catch{}if(!t)try{return new Si[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ex=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class bM extends Cp{get name(){return"websocket"}doOpen(){const t=this.uri(),n=this.opts.protocols,a=ex?{}:Qv(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(a.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,n,a)}catch(l){return this.emitReserved("error",l)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const a=t[n],l=n===t.length-1;Ap(a,this.supportsBinary,c=>{try{this.doWrite(a,c)}catch{}l&&Mu(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Jv()),this.supportsBinary||(n.b64=1),this.createUri(t,n)}}const Vh=Si.WebSocket||Si.MozWebSocket;class TM extends bM{createSocket(t,n,a){return ex?new Vh(t,n,a):n?new Vh(t,n):new Vh(t)}doWrite(t,n){this.ws.send(n)}}class AM extends Cp{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const n=oM(Number.MAX_SAFE_INTEGER,this.socket.binaryType),a=t.readable.pipeThrough(n).getReader(),l=rM();l.readable.pipeTo(t.writable),this._writer=l.writable.getWriter();const c=()=>{a.read().then(({done:p,value:m})=>{p||(this.onPacket(m),c())}).catch(p=>{})};c();const h={type:"open"};this.query.sid&&(h.data=`{"sid":"${this.query.sid}"}`),this._writer.write(h).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const a=t[n],l=n===t.length-1;this._writer.write(a).then(()=>{l&&Mu(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const RM={websocket:TM,webtransport:AM,polling:EM},CM=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,wM=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Td(r){if(r.length>8e3)throw"URI too long";const t=r,n=r.indexOf("["),a=r.indexOf("]");n!=-1&&a!=-1&&(r=r.substring(0,n)+r.substring(n,a).replace(/:/g,";")+r.substring(a,r.length));let l=CM.exec(r||""),c={},h=14;for(;h--;)c[wM[h]]=l[h]||"";return n!=-1&&a!=-1&&(c.source=t,c.host=c.host.substring(1,c.host.length-1).replace(/;/g,":"),c.authority=c.authority.replace("[","").replace("]","").replace(/;/g,":"),c.ipv6uri=!0),c.pathNames=DM(c,c.path),c.queryKey=UM(c,c.query),c}function DM(r,t){const n=/\/{2,9}/g,a=t.replace(n,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&a.splice(0,1),t.slice(-1)=="/"&&a.splice(a.length-1,1),a}function UM(r,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,l,c){l&&(n[l]=c)}),n}const Ad=typeof addEventListener=="function"&&typeof removeEventListener=="function",ou=[];Ad&&addEventListener("offline",()=>{ou.forEach(r=>r())},!1);class hs extends pn{constructor(t,n){if(super(),this.binaryType=cM,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(n=t,t=null),t){const a=Td(t);n.hostname=a.host,n.secure=a.protocol==="https"||a.protocol==="wss",n.port=a.port,a.query&&(n.query=a.query)}else n.host&&(n.hostname=Td(n.host).host);Eu(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(a=>{const l=a.prototype.name;this.transports.push(l),this._transportsByName[l]=a}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=gM(this.opts.query)),Ad&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ou.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const n=Object.assign({},this.opts.query);n.EIO=Kv,n.transport=t,this.id&&(n.sid=this.id);const a=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](a)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&hs.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(t);n.open(),this.setTransport(n)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",hs.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=t.data,this._onError(n);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let a=0;a<this.writeBuffer.length;a++){const l=this.writeBuffer[a].data;if(l&&(n+=dM(l)),a>0&&n>this._maxPayload)return this.writeBuffer.slice(0,a);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Mu(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,n,a){return this._sendPacket("message",t,n,a),this}send(t,n,a){return this._sendPacket("message",t,n,a),this}_sendPacket(t,n,a,l){if(typeof n=="function"&&(l=n,n=void 0),typeof a=="function"&&(l=a,a=null),this.readyState==="closing"||this.readyState==="closed")return;a=a||{},a.compress=a.compress!==!1;const c={type:t,data:n,options:a};this.emitReserved("packetCreate",c),this.writeBuffer.push(c),l&&this.once("flush",l),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),t()},a=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?a():t()}):this.upgrading?a():t()),this}_onError(t){if(hs.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ad&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const a=ou.indexOf(this._offlineEventListener);a!==-1&&ou.splice(a,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,n),this.writeBuffer=[],this._prevBufferLen=0}}}hs.protocol=Kv;class LM extends hs{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let n=this.createTransport(t),a=!1;hs.priorWebsocketSuccess=!1;const l=()=>{a||(n.send([{type:"ping",data:"probe"}]),n.once("packet",x=>{if(!a)if(x.type==="pong"&&x.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;hs.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{a||this.readyState!=="closed"&&(v(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const _=new Error("probe error");_.transport=n.name,this.emitReserved("upgradeError",_)}}))};function c(){a||(a=!0,v(),n.close(),n=null)}const h=x=>{const _=new Error("probe error: "+x);_.transport=n.name,c(),this.emitReserved("upgradeError",_)};function p(){h("transport closed")}function m(){h("socket closed")}function d(x){n&&x.name!==n.name&&c()}const v=()=>{n.removeListener("open",l),n.removeListener("error",h),n.removeListener("close",p),this.off("close",m),this.off("upgrading",d)};n.once("open",l),n.once("error",h),n.once("close",p),this.once("close",m),this.once("upgrading",d),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{a||n.open()},200):n.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const n=[];for(let a=0;a<t.length;a++)~this.transports.indexOf(t[a])&&n.push(t[a]);return n}}let NM=class extends LM{constructor(t,n={}){const a=typeof t=="object"?t:n;(!a.transports||a.transports&&typeof a.transports[0]=="string")&&(a.transports=(a.transports||["polling","websocket","webtransport"]).map(l=>RM[l]).filter(l=>!!l)),super(t,a)}};function OM(r,t="",n){let a=r;n=n||typeof location<"u"&&location,r==null&&(r=n.protocol+"//"+n.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=n.protocol+r:r=n.host+r),/^(https?|wss?):\/\//.test(r)||(typeof n<"u"?r=n.protocol+"//"+r:r="https://"+r),a=Td(r)),a.port||(/^(http|ws)$/.test(a.protocol)?a.port="80":/^(http|ws)s$/.test(a.protocol)&&(a.port="443")),a.path=a.path||"/";const c=a.host.indexOf(":")!==-1?"["+a.host+"]":a.host;return a.id=a.protocol+"://"+c+":"+a.port+t,a.href=a.protocol+"://"+c+(n&&n.port===a.port?"":":"+a.port),a}const PM=typeof ArrayBuffer=="function",BM=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,nx=Object.prototype.toString,zM=typeof Blob=="function"||typeof Blob<"u"&&nx.call(Blob)==="[object BlobConstructor]",IM=typeof File=="function"||typeof File<"u"&&nx.call(File)==="[object FileConstructor]";function wp(r){return PM&&(r instanceof ArrayBuffer||BM(r))||zM&&r instanceof Blob||IM&&r instanceof File}function lu(r,t){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let n=0,a=r.length;n<a;n++)if(lu(r[n]))return!0;return!1}if(wp(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return lu(r.toJSON(),!0);for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)&&lu(r[n]))return!0;return!1}function FM(r){const t=[],n=r.data,a=r;return a.data=Rd(n,t),a.attachments=t.length,{packet:a,buffers:t}}function Rd(r,t){if(!r)return r;if(wp(r)){const n={_placeholder:!0,num:t.length};return t.push(r),n}else if(Array.isArray(r)){const n=new Array(r.length);for(let a=0;a<r.length;a++)n[a]=Rd(r[a],t);return n}else if(typeof r=="object"&&!(r instanceof Date)){const n={};for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=Rd(r[a],t));return n}return r}function HM(r,t){return r.data=Cd(r.data,t),delete r.attachments,r}function Cd(r,t){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<t.length)return t[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let n=0;n<r.length;n++)r[n]=Cd(r[n],t);else if(typeof r=="object")for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(r[n]=Cd(r[n],t));return r}const GM=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Me;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(Me||(Me={}));class VM{constructor(t){this.replacer=t}encode(t){return(t.type===Me.EVENT||t.type===Me.ACK)&&lu(t)?this.encodeAsBinary({type:t.type===Me.EVENT?Me.BINARY_EVENT:Me.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let n=""+t.type;return(t.type===Me.BINARY_EVENT||t.type===Me.BINARY_ACK)&&(n+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(n+=t.nsp+","),t.id!=null&&(n+=t.id),t.data!=null&&(n+=JSON.stringify(t.data,this.replacer)),n}encodeAsBinary(t){const n=FM(t),a=this.encodeAsString(n.packet),l=n.buffers;return l.unshift(a),l}}class Dp extends pn{constructor(t){super(),this.reviver=t}add(t){let n;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(t);const a=n.type===Me.BINARY_EVENT;a||n.type===Me.BINARY_ACK?(n.type=a?Me.EVENT:Me.ACK,this.reconstructor=new kM(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(wp(t)||t.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let n=0;const a={type:Number(t.charAt(0))};if(Me[a.type]===void 0)throw new Error("unknown packet type "+a.type);if(a.type===Me.BINARY_EVENT||a.type===Me.BINARY_ACK){const c=n+1;for(;t.charAt(++n)!=="-"&&n!=t.length;);const h=t.substring(c,n);if(h!=Number(h)||t.charAt(n)!=="-")throw new Error("Illegal attachments");a.attachments=Number(h)}if(t.charAt(n+1)==="/"){const c=n+1;for(;++n&&!(t.charAt(n)===","||n===t.length););a.nsp=t.substring(c,n)}else a.nsp="/";const l=t.charAt(n+1);if(l!==""&&Number(l)==l){const c=n+1;for(;++n;){const h=t.charAt(n);if(h==null||Number(h)!=h){--n;break}if(n===t.length)break}a.id=Number(t.substring(c,n+1))}if(t.charAt(++n)){const c=this.tryParse(t.substr(n));if(Dp.isPayloadValid(a.type,c))a.data=c;else throw new Error("invalid payload")}return a}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,n){switch(t){case Me.CONNECT:return F0(n);case Me.DISCONNECT:return n===void 0;case Me.CONNECT_ERROR:return typeof n=="string"||F0(n);case Me.EVENT:case Me.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&GM.indexOf(n[0])===-1);case Me.ACK:case Me.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class kM{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const n=HM(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function F0(r){return Object.prototype.toString.call(r)==="[object Object]"}const XM=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Dp,Encoder:VM,get PacketType(){return Me}},Symbol.toStringTag,{value:"Module"}));function Ni(r,t,n){return r.on(t,n),function(){r.off(t,n)}}const WM=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ix extends pn{constructor(t,n,a){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=n,a&&a.auth&&(this.auth=a.auth),this._opts=Object.assign({},a),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Ni(t,"open",this.onopen.bind(this)),Ni(t,"packet",this.onpacket.bind(this)),Ni(t,"error",this.onerror.bind(this)),Ni(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...n){var a,l,c;if(WM.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(n.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const h={type:Me.EVENT,data:n};if(h.options={},h.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const v=this.ids++,x=n.pop();this._registerAckCallback(v,x),h.id=v}const p=(l=(a=this.io.engine)===null||a===void 0?void 0:a.transport)===null||l===void 0?void 0:l.writable,m=this.connected&&!(!((c=this.io.engine)===null||c===void 0)&&c._hasPingExpired());return this.flags.volatile&&!p||(m?(this.notifyOutgoingListeners(h),this.packet(h)):this.sendBuffer.push(h)),this.flags={},this}_registerAckCallback(t,n){var a;const l=(a=this.flags.timeout)!==null&&a!==void 0?a:this._opts.ackTimeout;if(l===void 0){this.acks[t]=n;return}const c=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let p=0;p<this.sendBuffer.length;p++)this.sendBuffer[p].id===t&&this.sendBuffer.splice(p,1);n.call(this,new Error("operation has timed out"))},l),h=(...p)=>{this.io.clearTimeoutFn(c),n.apply(this,p)};h.withError=!0,this.acks[t]=h}emitWithAck(t,...n){return new Promise((a,l)=>{const c=(h,p)=>h?l(h):a(p);c.withError=!0,n.push(c),this.emit(t,...n)})}_addToQueue(t){let n;typeof t[t.length-1]=="function"&&(n=t.pop());const a={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((l,...c)=>(this._queue[0],l!==null?a.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(l)):(this._queue.shift(),n&&n(null,...c)),a.pending=!1,this._drainQueue())),this._queue.push(a),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!t||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Me.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(a=>String(a.id)===t)){const a=this.acks[t];delete this.acks[t],a.withError&&a.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Me.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Me.EVENT:case Me.BINARY_EVENT:this.onevent(t);break;case Me.ACK:case Me.BINARY_ACK:this.onack(t);break;case Me.DISCONNECT:this.ondisconnect();break;case Me.CONNECT_ERROR:this.destroy();const a=new Error(t.data.message);a.data=t.data.data,this.emitReserved("connect_error",a);break}}onevent(t){const n=t.data||[];t.id!=null&&n.push(this.ack(t.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const a of n)a.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const n=this;let a=!1;return function(...l){a||(a=!0,n.packet({type:Me.ACK,id:t,data:l}))}}onack(t){const n=this.acks[t.id];typeof n=="function"&&(delete this.acks[t.id],n.withError&&t.data.unshift(null),n.apply(this,t.data))}onconnect(t,n){this.id=t,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Me.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const n=this._anyListeners;for(let a=0;a<n.length;a++)if(t===n[a])return n.splice(a,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const n=this._anyOutgoingListeners;for(let a=0;a<n.length;a++)if(t===n[a])return n.splice(a,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const a of n)a.apply(this,t.data)}}}function no(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}no.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*r);r=(Math.floor(t*10)&1)==0?r-n:r+n}return Math.min(r,this.max)|0};no.prototype.reset=function(){this.attempts=0};no.prototype.setMin=function(r){this.ms=r};no.prototype.setMax=function(r){this.max=r};no.prototype.setJitter=function(r){this.jitter=r};class wd extends pn{constructor(t,n){var a;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(n=t,t=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Eu(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((a=n.randomizationFactor)!==null&&a!==void 0?a:.5),this.backoff=new no({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=t;const l=n.parser||XM;this.encoder=new l.Encoder,this.decoder=new l.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var n;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(n=this.backoff)===null||n===void 0||n.setMin(t),this)}randomizationFactor(t){var n;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(n=this.backoff)===null||n===void 0||n.setJitter(t),this)}reconnectionDelayMax(t){var n;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(n=this.backoff)===null||n===void 0||n.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new NM(this.uri,this.opts);const n=this.engine,a=this;this._readyState="opening",this.skipReconnect=!1;const l=Ni(n,"open",function(){a.onopen(),t&&t()}),c=p=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",p),t?t(p):this.maybeReconnectOnOpen()},h=Ni(n,"error",c);if(this._timeout!==!1){const p=this._timeout,m=this.setTimeoutFn(()=>{l(),c(new Error("timeout")),n.close()},p);this.opts.autoUnref&&m.unref(),this.subs.push(()=>{this.clearTimeoutFn(m)})}return this.subs.push(l),this.subs.push(h),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Ni(t,"ping",this.onping.bind(this)),Ni(t,"data",this.ondata.bind(this)),Ni(t,"error",this.onerror.bind(this)),Ni(t,"close",this.onclose.bind(this)),Ni(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(n){this.onclose("parse error",n)}}ondecoded(t){Mu(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,n){let a=this.nsps[t];return a?this._autoConnect&&!a.active&&a.connect():(a=new ix(this,t,n),this.nsps[t]=a),a}_destroy(t){const n=Object.keys(this.nsps);for(const a of n)if(this.nsps[a].active)return;this._close()}_packet(t){const n=this.encoder.encode(t);for(let a=0;a<n.length;a++)this.engine.write(n[a],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,n){var a;this.cleanup(),(a=this.engine)===null||a===void 0||a.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const a=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(l=>{l?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",l)):t.onreconnect()}))},n);this.opts.autoUnref&&a.unref(),this.subs.push(()=>{this.clearTimeoutFn(a)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Qo={};function cu(r,t){typeof r=="object"&&(t=r,r=void 0),t=t||{};const n=OM(r,t.path||"/socket.io"),a=n.source,l=n.id,c=n.path,h=Qo[l]&&c in Qo[l].nsps,p=t.forceNew||t["force new connection"]||t.multiplex===!1||h;let m;return p?m=new wd(a,t):(Qo[l]||(Qo[l]=new wd(a,t)),m=Qo[l]),n.query&&!t.query&&(t.query=n.queryKey),m.socket(n.path,t)}Object.assign(cu,{Manager:wd,Socket:ix,io:cu,connect:cu});const Up="183",jr={ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qM=0,H0=1,YM=2,uu=1,jM=2,ll=3,ps=0,jn=1,ba=2,Aa=0,Zr=1,G0=2,V0=3,k0=4,ZM=5,Hs=100,KM=101,QM=102,JM=103,$M=104,tE=200,eE=201,nE=202,iE=203,Dd=204,Ud=205,aE=206,sE=207,rE=208,oE=209,lE=210,cE=211,uE=212,fE=213,hE=214,Ld=0,Nd=1,Od=2,Qr=3,Pd=4,Bd=5,zd=6,Id=7,ax=0,dE=1,pE=2,ji=0,sx=1,rx=2,ox=3,lx=4,cx=5,ux=6,fx=7,hx=300,Xs=301,Jr=302,kh=303,Xh=304,bu=306,Fd=1e3,Ta=1001,Hd=1002,Rn=1003,mE=1004,Lc=1005,Un=1006,Wh=1007,Vs=1008,oi=1009,dx=1010,px=1011,fl=1012,Lp=1013,Qi=1014,Wi=1015,Ca=1016,Np=1017,Op=1018,hl=1020,mx=35902,gx=35899,_x=1021,vx=1022,Oi=1023,wa=1026,ks=1027,xx=1028,Pp=1029,$r=1030,Bp=1031,zp=1033,fu=33776,hu=33777,du=33778,pu=33779,Gd=35840,Vd=35841,kd=35842,Xd=35843,Wd=36196,qd=37492,Yd=37496,jd=37488,Zd=37489,Kd=37490,Qd=37491,Jd=37808,$d=37809,tp=37810,ep=37811,np=37812,ip=37813,ap=37814,sp=37815,rp=37816,op=37817,lp=37818,cp=37819,up=37820,fp=37821,hp=36492,dp=36494,pp=36495,mp=36283,gp=36284,_p=36285,vp=36286,gE=3200,_E=0,vE=1,us="",yi="srgb",to="srgb-linear",_u="linear",Ie="srgb",Cr=7680,X0=519,xE=512,yE=513,SE=514,Ip=515,ME=516,EE=517,Fp=518,bE=519,xp=35044,W0="300 es",qi=2e3,dl=2001;function TE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function vu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function AE(){const r=vu("canvas");return r.style.display="block",r}const q0={};function xu(...r){const t="THREE."+r.shift();console.log(t,...r)}function yx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ae(...r){r=yx(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...r)}}function be(...r){r=yx(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...r)}}function yu(...r){const t=r.join(" ");t in q0||(q0[t]=!0,ae(...r))}function RE(r,t,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const CE={[Ld]:Nd,[Od]:zd,[Pd]:Id,[Qr]:Bd,[Nd]:Ld,[zd]:Od,[Id]:Pd,[Bd]:Qr};class Ws{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mu=Math.PI/180,yp=180/Math.PI;function ds(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[a&255]+wn[a>>8&255]+wn[a>>16&255]+wn[a>>24&255]).toLowerCase()}function _e(r,t,n){return Math.max(t,Math.min(n,r))}function wE(r,t){return(r%t+t)%t}function qh(r,t,n){return(1-n)*r+n*t}function Xi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ve(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const DE={DEG2RAD:mu};class te{constructor(t=0,n=0){te.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_e(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(_e(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-t.x,h=this.y-t.y;return this.x=c*a-h*l+t.x,this.y=c*l+h*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ms{constructor(t=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=l}static slerpFlat(t,n,a,l,c,h,p){let m=a[l+0],d=a[l+1],v=a[l+2],x=a[l+3],_=c[h+0],E=c[h+1],b=c[h+2],w=c[h+3];if(x!==w||m!==_||d!==E||v!==b){let S=m*_+d*E+v*b+x*w;S<0&&(_=-_,E=-E,b=-b,w=-w,S=-S);let y=1-p;if(S<.9995){const D=Math.acos(S),P=Math.sin(D);y=Math.sin(y*D)/P,p=Math.sin(p*D)/P,m=m*y+_*p,d=d*y+E*p,v=v*y+b*p,x=x*y+w*p}else{m=m*y+_*p,d=d*y+E*p,v=v*y+b*p,x=x*y+w*p;const D=1/Math.sqrt(m*m+d*d+v*v+x*x);m*=D,d*=D,v*=D,x*=D}}t[n]=m,t[n+1]=d,t[n+2]=v,t[n+3]=x}static multiplyQuaternionsFlat(t,n,a,l,c,h){const p=a[l],m=a[l+1],d=a[l+2],v=a[l+3],x=c[h],_=c[h+1],E=c[h+2],b=c[h+3];return t[n]=p*b+v*x+m*E-d*_,t[n+1]=m*b+v*_+d*x-p*E,t[n+2]=d*b+v*E+p*_-m*x,t[n+3]=v*b-p*x-m*_-d*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,l){return this._x=t,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(a/2),v=p(l/2),x=p(c/2),_=m(a/2),E=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=_*v*x+d*E*b,this._y=d*E*x-_*v*b,this._z=d*v*b+_*E*x,this._w=d*v*x-_*E*b;break;case"YXZ":this._x=_*v*x+d*E*b,this._y=d*E*x-_*v*b,this._z=d*v*b-_*E*x,this._w=d*v*x+_*E*b;break;case"ZXY":this._x=_*v*x-d*E*b,this._y=d*E*x+_*v*b,this._z=d*v*b+_*E*x,this._w=d*v*x-_*E*b;break;case"ZYX":this._x=_*v*x-d*E*b,this._y=d*E*x+_*v*b,this._z=d*v*b-_*E*x,this._w=d*v*x+_*E*b;break;case"YZX":this._x=_*v*x+d*E*b,this._y=d*E*x+_*v*b,this._z=d*v*b-_*E*x,this._w=d*v*x-_*E*b;break;case"XZY":this._x=_*v*x-d*E*b,this._y=d*E*x-_*v*b,this._z=d*v*b+_*E*x,this._w=d*v*x+_*E*b;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],l=n[4],c=n[8],h=n[1],p=n[5],m=n[9],d=n[2],v=n[6],x=n[10],_=a+p+x;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-d)*E,this._z=(h-l)*E}else if(a>p&&a>x){const E=2*Math.sqrt(1+a-p-x);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+d)/E}else if(p>x){const E=2*Math.sqrt(1+p-a-x);this._w=(c-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+x-a-p);this._w=(h-l)/E,this._x=(c+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,l=t._y,c=t._z,h=t._w,p=n._x,m=n._y,d=n._z,v=n._w;return this._x=a*v+h*p+l*d-c*m,this._y=l*v+h*m+c*p-a*d,this._z=c*v+h*d+a*m-l*p,this._w=h*v-a*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(a=-a,l=-l,c=-c,h=-h,p=-p);let m=1-n;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,n=Math.sin(n*d)/v,this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+h*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+h*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,n=0,a=0){K.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Y0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Y0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=t.elements,h=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*h,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*h,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*h,this}applyQuaternion(t){const n=this.x,a=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*a),v=2*(p*n-c*l),x=2*(c*a-h*n);return this.x=n+m*d+h*x-p*v,this.y=a+m*v+p*d-c*x,this.z=l+m*x+c*v-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this.z=_e(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this.z=_e(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_e(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,l=t.y,c=t.z,h=n.x,p=n.y,m=n.z;return this.x=l*m-c*p,this.y=c*h-a*m,this.z=a*p-l*h,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Yh.copy(this).projectOnVector(t),this.sub(Yh)}reflect(t){return this.sub(Yh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(_e(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return n*n+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const l=Math.sin(n)*t;return this.x=l*Math.sin(a),this.y=Math.cos(n)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yh=new K,Y0=new ms;class he{constructor(t,n,a,l,c,h,p,m,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,h,p,m,d)}set(t,n,a,l,c,h,p,m,d){const v=this.elements;return v[0]=t,v[1]=l,v[2]=p,v[3]=n,v[4]=c,v[5]=m,v[6]=a,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,h=a[0],p=a[3],m=a[6],d=a[1],v=a[4],x=a[7],_=a[2],E=a[5],b=a[8],w=l[0],S=l[3],y=l[6],D=l[1],P=l[4],U=l[7],F=l[2],B=l[5],z=l[8];return c[0]=h*w+p*D+m*F,c[3]=h*S+p*P+m*B,c[6]=h*y+p*U+m*z,c[1]=d*w+v*D+x*F,c[4]=d*S+v*P+x*B,c[7]=d*y+v*U+x*z,c[2]=_*w+E*D+b*F,c[5]=_*S+E*P+b*B,c[8]=_*y+E*U+b*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8];return n*h*v-n*p*d-a*c*v+a*p*m+l*c*d-l*h*m}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8],x=v*h-p*d,_=p*m-v*c,E=d*c-h*m,b=n*x+a*_+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=x*w,t[1]=(l*d-v*a)*w,t[2]=(p*a-l*h)*w,t[3]=_*w,t[4]=(v*n-l*m)*w,t[5]=(l*c-p*n)*w,t[6]=E*w,t[7]=(a*m-d*n)*w,t[8]=(h*n-a*c)*w,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(a*m,a*d,-a*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+n,0,0,1),this}scale(t,n){return this.premultiply(jh.makeScale(t,n)),this}rotate(t){return this.premultiply(jh.makeRotation(-t)),this}translate(t,n){return this.premultiply(jh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jh=new he,j0=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z0=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UE(){const r={enabled:!0,workingColorSpace:to,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Kr(l.r),l.g=Kr(l.g),l.b=Kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?_u:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return yu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return yu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[to]:{primaries:t,whitePoint:a,transfer:_u,toXYZ:j0,fromXYZ:Z0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:a,transfer:Ie,toXYZ:j0,fromXYZ:Z0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),r}const Ae=UE();function Ra(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wr;class LE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{wr===void 0&&(wr=vu("canvas")),wr.width=t.width,wr.height=t.height;const l=wr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=wr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=vu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ra(c[h]/255)*255;return a.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ra(n[a]/255)*255):n[a]=Ra(n[a]);return{data:n,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let NE=0;class Hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Zh(l[h].image)):c.push(Zh(l[h]))}else c=Zh(l);a.url=c}return n||(t.images[this.uuid]=a),a}}function Zh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let OE=0;const Kh=new K;class Ln extends Ws{constructor(t=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,a=Ta,l=Ta,c=Un,h=Vs,p=Oi,m=oi,d=Ln.DEFAULT_ANISOTROPY,v=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=ds(),this.name="",this.source=new Hp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kh).x}get height(){return this.source.getSize(Kh).y}get depth(){return this.source.getSize(Kh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){ae(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ae(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fd:t.x=t.x-Math.floor(t.x);break;case Ta:t.x=t.x<0?0:1;break;case Hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fd:t.y=t.y-Math.floor(t.y);break;case Ta:t.y=t.y<0?0:1;break;case Hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=hx;Ln.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,n=0,a=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,l){return this.x=t,this.y=n,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*n+h[4]*a+h[8]*l+h[12]*c,this.y=h[1]*n+h[5]*a+h[9]*l+h[13]*c,this.z=h[2]*n+h[6]*a+h[10]*l+h[14]*c,this.w=h[3]*n+h[7]*a+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,l,c;const m=t.elements,d=m[0],v=m[4],x=m[8],_=m[1],E=m[5],b=m[9],w=m[2],S=m[6],y=m[10];if(Math.abs(v-_)<.01&&Math.abs(x-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+w)<.1&&Math.abs(b+S)<.1&&Math.abs(d+E+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(d+1)/2,U=(E+1)/2,F=(y+1)/2,B=(v+_)/4,z=(x+w)/4,T=(b+S)/4;return P>U&&P>F?P<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(P),l=B/a,c=z/a):U>F?U<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),a=B/l,c=T/l):F<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),a=z/c,l=T/c),this.set(a,l,c,n),this}let D=Math.sqrt((S-b)*(S-b)+(x-w)*(x-w)+(_-v)*(_-v));return Math.abs(D)<.001&&(D=1),this.x=(S-b)/D,this.y=(x-w)/D,this.z=(_-v)/D,this.w=Math.acos((d+E+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this.z=_e(this.z,t.z,n.z),this.w=_e(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this.z=_e(this.z,t,n),this.w=_e(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_e(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PE extends Ws{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new nn(0,0,t,n),this.scissorTest=!1,this.viewport=new nn(0,0,t,n),this.textures=[];const l={width:t,height:n,depth:a.depth},c=new Ln(l),h=a.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Hp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends PE{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Sx extends Ln{constructor(t=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends Ln{constructor(t=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ye{constructor(t,n,a,l,c,h,p,m,d,v,x,_,E,b,w,S){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,h,p,m,d,v,x,_,E,b,w,S)}set(t,n,a,l,c,h,p,m,d,v,x,_,E,b,w,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=l,y[1]=c,y[5]=h,y[9]=p,y[13]=m,y[2]=d,y[6]=v,y[10]=x,y[14]=_,y[3]=E,y[7]=b,y[11]=w,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,l=1/Dr.setFromMatrixColumn(t,0).length(),c=1/Dr.setFromMatrixColumn(t,1).length(),h=1/Dr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*h,n[9]=a[9]*h,n[10]=a[10]*h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,l=t.y,c=t.z,h=Math.cos(a),p=Math.sin(a),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const _=h*v,E=h*x,b=p*v,w=p*x;n[0]=m*v,n[4]=-m*x,n[8]=d,n[1]=E+b*d,n[5]=_-w*d,n[9]=-p*m,n[2]=w-_*d,n[6]=b+E*d,n[10]=h*m}else if(t.order==="YXZ"){const _=m*v,E=m*x,b=d*v,w=d*x;n[0]=_+w*p,n[4]=b*p-E,n[8]=h*d,n[1]=h*x,n[5]=h*v,n[9]=-p,n[2]=E*p-b,n[6]=w+_*p,n[10]=h*m}else if(t.order==="ZXY"){const _=m*v,E=m*x,b=d*v,w=d*x;n[0]=_-w*p,n[4]=-h*x,n[8]=b+E*p,n[1]=E+b*p,n[5]=h*v,n[9]=w-_*p,n[2]=-h*d,n[6]=p,n[10]=h*m}else if(t.order==="ZYX"){const _=h*v,E=h*x,b=p*v,w=p*x;n[0]=m*v,n[4]=b*d-E,n[8]=_*d+w,n[1]=m*x,n[5]=w*d+_,n[9]=E*d-b,n[2]=-d,n[6]=p*m,n[10]=h*m}else if(t.order==="YZX"){const _=h*m,E=h*d,b=p*m,w=p*d;n[0]=m*v,n[4]=w-_*x,n[8]=b*x+E,n[1]=x,n[5]=h*v,n[9]=-p*v,n[2]=-d*v,n[6]=E*x+b,n[10]=_-w*x}else if(t.order==="XZY"){const _=h*m,E=h*d,b=p*m,w=p*d;n[0]=m*v,n[4]=-x,n[8]=d*v,n[1]=_*x+w,n[5]=h*v,n[9]=E*x-b,n[2]=b*x-E,n[6]=p*v,n[10]=w*x+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zE,t,IE)}lookAt(t,n,a){const l=this.elements;return ai.subVectors(t,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),is.crossVectors(a,ai),is.lengthSq()===0&&(Math.abs(a.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),is.crossVectors(a,ai)),is.normalize(),Nc.crossVectors(ai,is),l[0]=is.x,l[4]=Nc.x,l[8]=ai.x,l[1]=is.y,l[5]=Nc.y,l[9]=ai.y,l[2]=is.z,l[6]=Nc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,h=a[0],p=a[4],m=a[8],d=a[12],v=a[1],x=a[5],_=a[9],E=a[13],b=a[2],w=a[6],S=a[10],y=a[14],D=a[3],P=a[7],U=a[11],F=a[15],B=l[0],z=l[4],T=l[8],C=l[12],ot=l[1],H=l[5],q=l[9],J=l[13],st=l[2],Q=l[6],N=l[10],I=l[14],ct=l[3],dt=l[7],Et=l[11],O=l[15];return c[0]=h*B+p*ot+m*st+d*ct,c[4]=h*z+p*H+m*Q+d*dt,c[8]=h*T+p*q+m*N+d*Et,c[12]=h*C+p*J+m*I+d*O,c[1]=v*B+x*ot+_*st+E*ct,c[5]=v*z+x*H+_*Q+E*dt,c[9]=v*T+x*q+_*N+E*Et,c[13]=v*C+x*J+_*I+E*O,c[2]=b*B+w*ot+S*st+y*ct,c[6]=b*z+w*H+S*Q+y*dt,c[10]=b*T+w*q+S*N+y*Et,c[14]=b*C+w*J+S*I+y*O,c[3]=D*B+P*ot+U*st+F*ct,c[7]=D*z+P*H+U*Q+F*dt,c[11]=D*T+P*q+U*N+F*Et,c[15]=D*C+P*J+U*I+F*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],v=t[2],x=t[6],_=t[10],E=t[14],b=t[3],w=t[7],S=t[11],y=t[15],D=m*E-d*_,P=p*E-d*x,U=p*_-m*x,F=h*E-d*v,B=h*_-m*v,z=h*x-p*v;return n*(w*D-S*P+y*U)-a*(b*D-S*F+y*B)+l*(b*P-w*F+y*z)-c*(b*U-w*B+S*z)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],v=t[8],x=t[9],_=t[10],E=t[11],b=t[12],w=t[13],S=t[14],y=t[15],D=n*p-a*h,P=n*m-l*h,U=n*d-c*h,F=a*m-l*p,B=a*d-c*p,z=l*d-c*m,T=v*w-x*b,C=v*S-_*b,ot=v*y-E*b,H=x*S-_*w,q=x*y-E*w,J=_*y-E*S,st=D*J-P*q+U*H+F*ot-B*C+z*T;if(st===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/st;return t[0]=(p*J-m*q+d*H)*Q,t[1]=(l*q-a*J-c*H)*Q,t[2]=(w*z-S*B+y*F)*Q,t[3]=(_*B-x*z-E*F)*Q,t[4]=(m*ot-h*J-d*C)*Q,t[5]=(n*J-l*ot+c*C)*Q,t[6]=(S*U-b*z-y*P)*Q,t[7]=(v*z-_*U+E*P)*Q,t[8]=(h*q-p*ot+d*T)*Q,t[9]=(a*ot-n*q-c*T)*Q,t[10]=(b*B-w*U+y*D)*Q,t[11]=(x*U-v*B-E*D)*Q,t[12]=(p*C-h*H-m*T)*Q,t[13]=(n*H-a*C+l*T)*Q,t[14]=(w*P-b*F-S*D)*Q,t[15]=(v*F-x*P+_*D)*Q,this}scale(t){const n=this.elements,a=t.x,l=t.y,c=t.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,h=t.x,p=t.y,m=t.z,d=c*h,v=c*p;return this.set(d*h+a,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+a,v*m-l*h,0,d*m-l*p,v*m+l*h,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,l,c,h){return this.set(1,a,c,0,t,1,h,0,n,l,1,0,0,0,0,1),this}compose(t,n,a){const l=this.elements,c=n._x,h=n._y,p=n._z,m=n._w,d=c+c,v=h+h,x=p+p,_=c*d,E=c*v,b=c*x,w=h*v,S=h*x,y=p*x,D=m*d,P=m*v,U=m*x,F=a.x,B=a.y,z=a.z;return l[0]=(1-(w+y))*F,l[1]=(E+U)*F,l[2]=(b-P)*F,l[3]=0,l[4]=(E-U)*B,l[5]=(1-(_+y))*B,l[6]=(S+D)*B,l[7]=0,l[8]=(b+P)*z,l[9]=(S-D)*z,l[10]=(1-(_+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,a){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return a.set(1,1,1),n.identity(),this;let h=Dr.set(l[0],l[1],l[2]).length();const p=Dr.set(l[4],l[5],l[6]).length(),m=Dr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Di.copy(this);const d=1/h,v=1/p,x=1/m;return Di.elements[0]*=d,Di.elements[1]*=d,Di.elements[2]*=d,Di.elements[4]*=v,Di.elements[5]*=v,Di.elements[6]*=v,Di.elements[8]*=x,Di.elements[9]*=x,Di.elements[10]*=x,n.setFromRotationMatrix(Di),a.x=h,a.y=p,a.z=m,this}makePerspective(t,n,a,l,c,h,p=qi,m=!1){const d=this.elements,v=2*c/(n-t),x=2*c/(a-l),_=(n+t)/(n-t),E=(a+l)/(a-l);let b,w;if(m)b=c/(h-c),w=h*c/(h-c);else if(p===qi)b=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(p===dl)b=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=x,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,l,c,h,p=qi,m=!1){const d=this.elements,v=2/(n-t),x=2/(a-l),_=-(n+t)/(n-t),E=-(a+l)/(a-l);let b,w;if(m)b=1/(h-c),w=h/(h-c);else if(p===qi)b=-2/(h-c),w=-(h+c)/(h-c);else if(p===dl)b=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=x,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Dr=new K,Di=new Ye,zE=new K(0,0,0),IE=new K(1,1,1),is=new K,Nc=new K,ai=new K,K0=new Ye,Q0=new ms;class Da{constructor(t=0,n=0,a=0,l=Da.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,l=this._order){return this._x=t,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],x=l[2],_=l[6],E=l[10];switch(n){case"XYZ":this._y=Math.asin(_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return K0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(K0,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Q0.setFromEuler(this),this.setFromQuaternion(Q0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Da.DEFAULT_ORDER="XYZ";class Gp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let FE=0;const J0=new K,Ur=new ms,xa=new Ye,Oc=new K,Jo=new K,HE=new K,GE=new ms,$0=new K(1,0,0),tv=new K(0,1,0),ev=new K(0,0,1),nv={type:"added"},VE={type:"removed"},Lr={type:"childadded",child:null},Qh={type:"childremoved",child:null};class Nn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new K,n=new Da,a=new ms,l=new K(1,1,1);function c(){a.setFromEuler(n,!1)}function h(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new he}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ur.setFromAxisAngle(t,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(t,n){return Ur.setFromAxisAngle(t,n),this.quaternion.premultiply(Ur),this}rotateX(t){return this.rotateOnAxis($0,t)}rotateY(t){return this.rotateOnAxis(tv,t)}rotateZ(t){return this.rotateOnAxis(ev,t)}translateOnAxis(t,n){return J0.copy(t).applyQuaternion(this.quaternion),this.position.add(J0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis($0,t)}translateY(t){return this.translateOnAxis(tv,t)}translateZ(t){return this.translateOnAxis(ev,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Oc.copy(t):Oc.set(t,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(Jo,Oc,this.up):xa.lookAt(Oc,Jo,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),Ur.setFromRotationMatrix(xa),this.quaternion.premultiply(Ur.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nv),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(VE),Qh.child=t,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xa.multiply(t.parent.matrixWorld)),t.applyMatrix4(xa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nv),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const h=this.children[a].getObjectByProperty(t,n);if(h!==void 0)return h}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,HE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,GE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,l=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*l,c[13]+=a-c[1]*n-c[5]*a-c[9]*l,c[14]+=l-c[2]*n-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const x=m[d];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(n){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),v=h(t.images),x=h(t.shapes),_=h(t.skeletons),E=h(t.animations),b=h(t.nodes);p.length>0&&(a.geometries=p),m.length>0&&(a.materials=m),d.length>0&&(a.textures=d),v.length>0&&(a.images=v),x.length>0&&(a.shapes=x),_.length>0&&(a.skeletons=_),E.length>0&&(a.animations=E),b.length>0&&(a.nodes=b)}return a.object=l,a;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new K(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cl extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class Jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const w of t.hand.values()){const S=n.getJointPose(w,a),y=this._getHandJoint(d,w);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],_=v.position.distanceTo(x.position),E=.02,b=.005;d.inputState.pinching&&_>E+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=E-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=n.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new cl;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const Mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function $h(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class De{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,a,l=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ae.colorSpaceToWorking(this,l),this}setHSL(t,n,a,l=Ae.workingColorSpace){if(t=wE(t,1),n=_e(n,0,1),a=_e(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,h=2*a-c;this.r=$h(h,c,t+1/3),this.g=$h(h,c,t),this.b=$h(h,c,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,n=yi){function a(c){c!==void 0&&parseFloat(c)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ae("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(h===6)return this.setHex(parseInt(c,16),n);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=yi){const a=Mx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ra(t.r),this.g=Ra(t.g),this.b=Ra(t.b),this}copyLinearToSRGB(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Ae.workingToColorSpace(Dn.copy(this),t),Math.round(_e(Dn.r*255,0,255))*65536+Math.round(_e(Dn.g*255,0,255))*256+Math.round(_e(Dn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(Dn.copy(this),n);const a=Dn.r,l=Dn.g,c=Dn.b,h=Math.max(a,l,c),p=Math.min(a,l,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=v<=.5?x/(h+p):x/(2-h-p),h){case a:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-a)/x+2;break;case c:m=(a-l)/x+4;break}m/=6}return t.h=m,t.s=d,t.l=v,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(Dn.copy(this),n),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=yi){Ae.workingToColorSpace(Dn.copy(this),t);const n=Dn.r,a=Dn.g,l=Dn.b;return t!==yi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,n,a){return this.getHSL(as),this.setHSL(as.h+t,as.s+n,as.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(as),t.getHSL(Pc);const a=qh(as.h,Pc.h,n),l=qh(as.s,Pc.s,n),c=qh(as.l,Pc.l,n);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new De;De.NAMES=Mx;class Vp{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(t),this.density=n}clone(){return new Vp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class XE extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Da,this.environmentIntensity=1,this.environmentRotation=new Da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ui=new K,ya=new K,td=new K,Sa=new K,Nr=new K,Or=new K,iv=new K,ed=new K,nd=new K,id=new K,ad=new nn,sd=new nn,rd=new nn;class Mi{constructor(t=new K,n=new K,a=new K){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,l){l.subVectors(a,n),Ui.subVectors(t,n),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,a,l,c){Ui.subVectors(l,n),ya.subVectors(a,n),td.subVectors(t,n);const h=Ui.dot(Ui),p=Ui.dot(ya),m=Ui.dot(td),d=ya.dot(ya),v=ya.dot(td),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const _=1/x,E=(d*m-p*v)*_,b=(h*v-p*m)*_;return c.set(1-E-b,b,E)}static containsPoint(t,n,a,l){return this.getBarycoord(t,n,a,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(t,n,a,l,c,h,p,m){return this.getBarycoord(t,n,a,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(h,Sa.y),m.addScaledVector(p,Sa.z),m)}static getInterpolatedAttribute(t,n,a,l,c,h){return ad.setScalar(0),sd.setScalar(0),rd.setScalar(0),ad.fromBufferAttribute(t,n),sd.fromBufferAttribute(t,a),rd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ad,c.x),h.addScaledVector(sd,c.y),h.addScaledVector(rd,c.z),h}static isFrontFacing(t,n,a,l){return Ui.subVectors(a,n),ya.subVectors(t,n),Ui.cross(ya).dot(l)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,l){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,a,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Ui.cross(ya).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Mi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,n,a,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,l=this.b,c=this.c;let h,p;Nr.subVectors(l,a),Or.subVectors(c,a),ed.subVectors(t,a);const m=Nr.dot(ed),d=Or.dot(ed);if(m<=0&&d<=0)return n.copy(a);nd.subVectors(t,l);const v=Nr.dot(nd),x=Or.dot(nd);if(v>=0&&x<=v)return n.copy(l);const _=m*x-v*d;if(_<=0&&m>=0&&v<=0)return h=m/(m-v),n.copy(a).addScaledVector(Nr,h);id.subVectors(t,c);const E=Nr.dot(id),b=Or.dot(id);if(b>=0&&E<=b)return n.copy(c);const w=E*d-m*b;if(w<=0&&d>=0&&b<=0)return p=d/(d-b),n.copy(a).addScaledVector(Or,p);const S=v*b-E*x;if(S<=0&&x-v>=0&&E-b>=0)return iv.subVectors(c,l),p=(x-v)/(x-v+(E-b)),n.copy(l).addScaledVector(iv,p);const y=1/(S+w+_);return h=w*y,p=_*y,n.copy(a).addScaledVector(Nr,h).addScaledVector(Or,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ml{constructor(t=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Li.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Li.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Li.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,Li):Li.fromBufferAttribute(c,h),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Bc.copy(a.boundingBox)),Bc.applyMatrix4(t.matrixWorld),this.union(Bc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),zc.subVectors(this.max,$o),Pr.subVectors(t.a,$o),Br.subVectors(t.b,$o),zr.subVectors(t.c,$o),ss.subVectors(Br,Pr),rs.subVectors(zr,Br),Os.subVectors(Pr,zr);let n=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Os.z,Os.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Os.z,0,-Os.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Os.y,Os.x,0];return!od(n,Pr,Br,zr,zc)||(n=[1,0,0,0,1,0,0,0,1],!od(n,Pr,Br,zr,zc))?!1:(Ic.crossVectors(ss,rs),n=[Ic.x,Ic.y,Ic.z],od(n,Pr,Br,zr,zc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ma=[new K,new K,new K,new K,new K,new K,new K,new K],Li=new K,Bc=new ml,Pr=new K,Br=new K,zr=new K,ss=new K,rs=new K,Os=new K,$o=new K,zc=new K,Ic=new K,Ps=new K;function od(r,t,n,a,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ps.fromArray(r,c);const p=l.x*Math.abs(Ps.x)+l.y*Math.abs(Ps.y)+l.z*Math.abs(Ps.z),m=t.dot(Ps),d=n.dot(Ps),v=a.dot(Ps);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const dn=new K,Fc=new te;let WE=0;class Pi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=xp,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Fc.fromBufferAttribute(this,n),Fc.applyMatrix3(t),this.setXY(n,Fc.x,Fc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Xi(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Ve(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Xi(n,this.array)),n}setX(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Xi(n,this.array)),n}setY(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Xi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Xi(n,this.array)),n}setW(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,l){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array),l=Ve(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xp&&(t.usage=this.usage),t}}class Ex extends Pi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class bx extends Pi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class li extends Pi{constructor(t,n,a){super(new Float32Array(t),n,a)}}const qE=new ml,tl=new K,ld=new K;class Tu{constructor(t=new K,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):qE.setFromPoints(t).getCenter(a);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tl.subVectors(t,this.center);const n=tl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(tl,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tl.copy(t.center).add(ld)),this.expandByPoint(tl.copy(t.center).sub(ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let YE=0;const vi=new Ye,cd=new Nn,Ir=new K,si=new ml,el=new ml,Mn=new K;class ci extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(TE(t)?bx:Ex)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new he().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,n,a){return vi.makeTranslation(t,n,a),this.applyMatrix4(vi),this}scale(t,n,a){return vi.makeScale(t,n,a),this.applyMatrix4(vi),this}lookAt(t){return cd.lookAt(t),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];a.push(h.x,h.y,h.z||0)}this.setAttribute("position",new li(a,3))}else{const a=Math.min(t.length,n.count);for(let l=0;l<a;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const a=this.boundingSphere.center;if(si.setFromBufferAttribute(t),n)for(let c=0,h=n.length;c<h;c++){const p=n[c];el.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(si.min,el.min),si.expandByPoint(Mn),Mn.addVectors(si.max,el.max),si.expandByPoint(Mn)):(si.expandByPoint(el.min),si.expandByPoint(el.max))}si.getCenter(a);let l=0;for(let c=0,h=t.count;c<h;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(Mn));if(n)for(let c=0,h=n.length;c<h;c++){const p=n[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)Mn.fromBufferAttribute(p,d),m&&(Ir.fromBufferAttribute(t,d),Mn.add(Ir)),l=Math.max(l,a.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*a.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<a.count;T++)p[T]=new K,m[T]=new K;const d=new K,v=new K,x=new K,_=new te,E=new te,b=new te,w=new K,S=new K;function y(T,C,ot){d.fromBufferAttribute(a,T),v.fromBufferAttribute(a,C),x.fromBufferAttribute(a,ot),_.fromBufferAttribute(c,T),E.fromBufferAttribute(c,C),b.fromBufferAttribute(c,ot),v.sub(d),x.sub(d),E.sub(_),b.sub(_);const H=1/(E.x*b.y-b.x*E.y);isFinite(H)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(x,-E.y).multiplyScalar(H),S.copy(x).multiplyScalar(E.x).addScaledVector(v,-b.x).multiplyScalar(H),p[T].add(w),p[C].add(w),p[ot].add(w),m[T].add(S),m[C].add(S),m[ot].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,C=D.length;T<C;++T){const ot=D[T],H=ot.start,q=ot.count;for(let J=H,st=H+q;J<st;J+=3)y(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const P=new K,U=new K,F=new K,B=new K;function z(T){F.fromBufferAttribute(l,T),B.copy(F);const C=p[T];P.copy(C),P.sub(F.multiplyScalar(F.dot(C))).normalize(),U.crossVectors(B,C);const H=U.dot(m[T])<0?-1:1;h.setXYZW(T,P.x,P.y,P.z,H)}for(let T=0,C=D.length;T<C;++T){const ot=D[T],H=ot.start,q=ot.count;for(let J=H,st=H+q;J<st;J+=3)z(t.getX(J+0)),z(t.getX(J+1)),z(t.getX(J+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,E=a.count;_<E;_++)a.setXYZ(_,0,0,0);const l=new K,c=new K,h=new K,p=new K,m=new K,d=new K,v=new K,x=new K;if(t)for(let _=0,E=t.count;_<E;_+=3){const b=t.getX(_+0),w=t.getX(_+1),S=t.getX(_+2);l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,S),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),p.fromBufferAttribute(a,b),m.fromBufferAttribute(a,w),d.fromBufferAttribute(a,S),p.add(v),m.add(v),d.add(v),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(w,m.x,m.y,m.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,E=n.count;_<E;_+=3)l.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),h.fromBufferAttribute(n,_+2),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),a.setXYZ(_+0,v.x,v.y,v.z),a.setXYZ(_+1,v.x,v.y,v.z),a.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Mn.fromBufferAttribute(t,n),Mn.normalize(),t.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(p,m){const d=p.array,v=p.itemSize,x=p.normalized,_=new d.constructor(m.length*v);let E=0,b=0;for(let w=0,S=m.length;w<S;w++){p.isInterleavedBufferAttribute?E=m[w]*p.data.stride+p.offset:E=m[w]*v;for(let y=0;y<v;y++)_[b++]=d[E++]}return new Pi(_,v,x)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ci,a=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,a);n.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,x=d.length;v<x;v++){const _=d[v],E=t(_,a);m.push(E)}n.morphAttributes[p]=m}n.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const d=a[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let x=0,_=d.length;x<_;x++){const E=d[x];v.push(E.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(n))}const c=t.morphAttributes;for(const d in c){const v=[],x=c[d];for(let _=0,E=x.length;_<E;_++)v.push(x[_].clone(n));this.morphAttributes[d]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,v=h.length;d<v;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jE{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=xp,this.updateRanges=[],this.version=0,this.uuid=ds()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=n.array[a+l];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ds()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ds()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new K;class Su{constructor(t,n,a,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)Fn.fromBufferAttribute(this,n),Fn.applyMatrix4(t),this.setXYZ(n,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Fn.fromBufferAttribute(this,n),Fn.applyNormalMatrix(t),this.setXYZ(n,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Fn.fromBufferAttribute(this,n),Fn.transformDirection(t),this.setXYZ(n,Fn.x,Fn.y,Fn.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=Xi(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Ve(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Xi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Xi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Xi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Xi(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,l){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array),l=Ve(l,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){xu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return new Pi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Su(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){xu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ZE=0;class io extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=Zr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Ud,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){ae(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ae(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(a.blending=this.blending),this.side!==ps&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Dd&&(a.blendSrc=this.blendSrc),this.blendDst!==Ud&&(a.blendDst=this.blendDst),this.blendEquation!==Hs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(n){const c=l(t.textures),h=l(t.images);c.length>0&&(a.textures=c),h.length>0&&(a.images=h)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Tx extends io{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fr;const nl=new K,Hr=new K,Gr=new K,Vr=new te,il=new te,Ax=new Ye,Hc=new K,al=new K,Gc=new K,av=new te,ud=new te,sv=new te;class KE extends Nn{constructor(t=new Tx){if(super(),this.isSprite=!0,this.type="Sprite",Fr===void 0){Fr=new ci;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new jE(n,5);Fr.setIndex([0,1,2,0,2,3]),Fr.setAttribute("position",new Su(a,3,0,!1)),Fr.setAttribute("uv",new Su(a,2,3,!1))}this.geometry=Fr,this.material=t,this.center=new te(.5,.5),this.count=1}raycast(t,n){t.camera===null&&be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),Ax.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Gr.z);const a=this.material.rotation;let l,c;a!==0&&(c=Math.cos(a),l=Math.sin(a));const h=this.center;Vc(Hc.set(-.5,-.5,0),Gr,h,Hr,l,c),Vc(al.set(.5,-.5,0),Gr,h,Hr,l,c),Vc(Gc.set(.5,.5,0),Gr,h,Hr,l,c),av.set(0,0),ud.set(1,0),sv.set(1,1);let p=t.ray.intersectTriangle(Hc,al,Gc,!1,nl);if(p===null&&(Vc(al.set(-.5,.5,0),Gr,h,Hr,l,c),ud.set(0,1),p=t.ray.intersectTriangle(Hc,Gc,al,!1,nl),p===null))return;const m=t.ray.origin.distanceTo(nl);m<t.near||m>t.far||n.push({distance:m,point:nl.clone(),uv:Mi.getInterpolation(nl,Hc,al,Gc,av,ud,sv,new te),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vc(r,t,n,a,l,c){Vr.subVectors(r,n).addScalar(.5).multiply(a),l!==void 0?(il.x=c*Vr.x-l*Vr.y,il.y=l*Vr.x+c*Vr.y):il.copy(Vr),r.copy(t),r.x+=il.x,r.y+=il.y,r.applyMatrix4(Ax)}const Ea=new K,fd=new K,kc=new K,os=new K,hd=new K,Xc=new K,dd=new K;class Au{constructor(t=new K,n=new K(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ea)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ea.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ea.copy(this.origin).addScaledVector(this.direction,n),Ea.distanceToSquared(t))}distanceSqToSegment(t,n,a,l){fd.copy(t).add(n).multiplyScalar(.5),kc.copy(n).sub(t).normalize(),os.copy(this.origin).sub(fd);const c=t.distanceTo(n)*.5,h=-this.direction.dot(kc),p=os.dot(this.direction),m=-os.dot(kc),d=os.lengthSq(),v=Math.abs(1-h*h);let x,_,E,b;if(v>0)if(x=h*m-p,_=h*p-m,b=c*v,x>=0)if(_>=-b)if(_<=b){const w=1/v;x*=w,_*=w,E=x*(x+h*_+2*p)+_*(h*x+_+2*m)+d}else _=c,x=Math.max(0,-(h*_+p)),E=-x*x+_*(_+2*m)+d;else _=-c,x=Math.max(0,-(h*_+p)),E=-x*x+_*(_+2*m)+d;else _<=-b?(x=Math.max(0,-(-h*c+p)),_=x>0?-c:Math.min(Math.max(-c,-m),c),E=-x*x+_*(_+2*m)+d):_<=b?(x=0,_=Math.min(Math.max(-c,-m),c),E=_*(_+2*m)+d):(x=Math.max(0,-(h*c+p)),_=x>0?c:Math.min(Math.max(-c,-m),c),E=-x*x+_*(_+2*m)+d);else _=h>0?-c:c,x=Math.max(0,-(h*_+p)),E=-x*x+_*(_+2*m)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(fd).addScaledVector(kc,_),E}intersectSphere(t,n){Ea.subVectors(t.center,this.origin);const a=Ea.dot(this.direction),l=Ea.dot(Ea)-a*a,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=a-h,m=a+h;return m<0?null:p<0?this.at(m,n):this.at(p,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,l,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return d>=0?(a=(t.min.x-_.x)*d,l=(t.max.x-_.x)*d):(a=(t.max.x-_.x)*d,l=(t.min.x-_.x)*d),v>=0?(c=(t.min.y-_.y)*v,h=(t.max.y-_.y)*v):(c=(t.max.y-_.y)*v,h=(t.min.y-_.y)*v),a>h||c>l||((c>a||isNaN(a))&&(a=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(t.min.z-_.z)*x,m=(t.max.z-_.z)*x):(p=(t.max.z-_.z)*x,m=(t.min.z-_.z)*x),a>m||p>l)||((p>a||a!==a)&&(a=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(t){return this.intersectBox(t,Ea)!==null}intersectTriangle(t,n,a,l,c){hd.subVectors(n,t),Xc.subVectors(a,t),dd.crossVectors(hd,Xc);let h=this.direction.dot(dd),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;os.subVectors(this.origin,t);const m=p*this.direction.dot(Xc.crossVectors(os,Xc));if(m<0)return null;const d=p*this.direction.dot(hd.cross(os));if(d<0||m+d>h)return null;const v=-p*os.dot(dd);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kp extends io{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.combine=ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rv=new Ye,Bs=new Au,Wc=new Tu,ov=new K,qc=new K,Yc=new K,jc=new K,pd=new K,Zc=new K,lv=new K,Kc=new K;class Ji extends Nn{constructor(t=new ci,n=new kp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,h=a.morphTargetsRelative;n.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Zc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],x=c[m];v!==0&&(pd.fromBufferAttribute(x,t),h?Zc.addScaledVector(pd,v):Zc.addScaledVector(pd.sub(n),v))}n.add(Zc)}return n}raycast(t,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Wc.copy(a.boundingSphere),Wc.applyMatrix4(c),Bs.copy(t.ray).recast(t.near),!(Wc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Wc,ov)===null||Bs.origin.distanceToSquared(ov)>(t.far-t.near)**2))&&(rv.copy(c).invert(),Bs.copy(t.ray).applyMatrix4(rv),!(a.boundingBox!==null&&Bs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Bs)))}_computeIntersections(t,n,a){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,_=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,w=_.length;b<w;b++){const S=_[b],y=h[S.materialIndex],D=Math.max(S.start,E.start),P=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let U=D,F=P;U<F;U+=3){const B=p.getX(U),z=p.getX(U+1),T=p.getX(U+2);l=Qc(this,y,t,a,d,v,x,B,z,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const b=Math.max(0,E.start),w=Math.min(p.count,E.start+E.count);for(let S=b,y=w;S<y;S+=3){const D=p.getX(S),P=p.getX(S+1),U=p.getX(S+2);l=Qc(this,h,t,a,d,v,x,D,P,U),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=_.length;b<w;b++){const S=_[b],y=h[S.materialIndex],D=Math.max(S.start,E.start),P=Math.min(m.count,Math.min(S.start+S.count,E.start+E.count));for(let U=D,F=P;U<F;U+=3){const B=U,z=U+1,T=U+2;l=Qc(this,y,t,a,d,v,x,B,z,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const b=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let S=b,y=w;S<y;S+=3){const D=S,P=S+1,U=S+2;l=Qc(this,h,t,a,d,v,x,D,P,U),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}}}function QE(r,t,n,a,l,c,h,p){let m;if(t.side===jn?m=a.intersectTriangle(h,c,l,!0,p):m=a.intersectTriangle(l,c,h,t.side===ps,p),m===null)return null;Kc.copy(p),Kc.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(Kc);return d<n.near||d>n.far?null:{distance:d,point:Kc.clone(),object:r}}function Qc(r,t,n,a,l,c,h,p,m,d){r.getVertexPosition(p,qc),r.getVertexPosition(m,Yc),r.getVertexPosition(d,jc);const v=QE(r,t,n,a,qc,Yc,jc,lv);if(v){const x=new K;Mi.getBarycoord(lv,qc,Yc,jc,x),l&&(v.uv=Mi.getInterpolatedAttribute(l,p,m,d,x,new te)),c&&(v.uv1=Mi.getInterpolatedAttribute(c,p,m,d,x,new te)),h&&(v.normal=Mi.getInterpolatedAttribute(h,p,m,d,x,new K),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new K,materialIndex:0};Mi.getNormal(qc,Yc,jc,_.normal),v.face=_,v.barycoord=x}return v}class JE extends Ln{constructor(t=null,n=1,a=1,l,c,h,p,m,d=Rn,v=Rn,x,_){super(null,h,p,m,d,v,l,c,x,_),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const md=new K,$E=new K,tb=new he;class cs{constructor(t=new K(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,l){return this.normal.set(t,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const l=md.subVectors(a,n).cross($E.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(md),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||tb.getNormalMatrix(t),l=this.coplanarPoint(md).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Tu,eb=new te(.5,.5),Jc=new K;class Xp{constructor(t=new cs,n=new cs,a=new cs,l=new cs,c=new cs,h=new cs){this.planes=[t,n,a,l,c,h]}set(t,n,a,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(n),p[2].copy(a),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=qi,a=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],x=c[5],_=c[6],E=c[7],b=c[8],w=c[9],S=c[10],y=c[11],D=c[12],P=c[13],U=c[14],F=c[15];if(l[0].setComponents(d-h,E-v,y-b,F-D).normalize(),l[1].setComponents(d+h,E+v,y+b,F+D).normalize(),l[2].setComponents(d+p,E+x,y+w,F+P).normalize(),l[3].setComponents(d-p,E-x,y-w,F-P).normalize(),a)l[4].setComponents(m,_,S,U).normalize(),l[5].setComponents(d-m,E-_,y-S,F-U).normalize();else if(l[4].setComponents(d-m,E-_,y-S,F-U).normalize(),n===qi)l[5].setComponents(d+m,E+_,y+S,F+U).normalize();else if(n===dl)l[5].setComponents(m,_,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(t){zs.center.set(0,0,0);const n=eb.distanceTo(t.center);return zs.radius=.7071067811865476+n,zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(t){const n=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(Jc.x=l.normal.x>0?t.max.x:t.min.x,Jc.y=l.normal.y>0?t.max.y:t.min.y,Jc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rx extends io{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const cv=new Ye,Sp=new Au,$c=new Tu,tu=new K;class nb extends Nn{constructor(t=new ci,n=new Rx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),$c.copy(a.boundingSphere),$c.applyMatrix4(l),$c.radius+=c,t.ray.intersectsSphere($c)===!1)return;cv.copy(l).invert(),Sp.copy(t.ray).applyMatrix4(cv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=a.index,x=a.attributes.position;if(d!==null){const _=Math.max(0,h.start),E=Math.min(d.count,h.start+h.count);for(let b=_,w=E;b<w;b++){const S=d.getX(b);tu.fromBufferAttribute(x,S),uv(tu,S,m,l,t,n,this)}}else{const _=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let b=_,w=E;b<w;b++)tu.fromBufferAttribute(x,b),uv(tu,b,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function uv(r,t,n,a,l,c,h){const p=Sp.distanceSqToPoint(r);if(p<n){const m=new K;Sp.closestPointToPoint(r,m),m.applyMatrix4(a);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Cx extends Ln{constructor(t=[],n=Xs,a,l,c,h,p,m,d,v){super(t,n,a,l,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ib extends Ln{constructor(t,n,a,l,c,h,p,m,d){super(t,n,a,l,c,h,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pl extends Ln{constructor(t,n,a=Qi,l,c,h,p=Rn,m=Rn,d,v=wa,x=1){if(v!==wa&&v!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:x};super(_,l,c,h,p,m,v,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ab extends pl{constructor(t,n=Qi,a=Xs,l,c,h=Rn,p=Rn,m,d=wa){const v={width:t,height:t,depth:1},x=[v,v,v,v,v,v];super(t,t,n,a,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wx extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gl extends ci{constructor(t=1,n=1,a=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],x=[];let _=0,E=0;b("z","y","x",-1,-1,a,n,t,h,c,0),b("z","y","x",1,-1,a,n,-t,h,c,1),b("x","z","y",1,1,t,a,n,l,h,2),b("x","z","y",1,-1,t,a,-n,l,h,3),b("x","y","z",1,-1,t,n,a,l,c,4),b("x","y","z",-1,-1,t,n,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new li(d,3)),this.setAttribute("normal",new li(v,3)),this.setAttribute("uv",new li(x,2));function b(w,S,y,D,P,U,F,B,z,T,C){const ot=U/z,H=F/T,q=U/2,J=F/2,st=B/2,Q=z+1,N=T+1;let I=0,ct=0;const dt=new K;for(let Et=0;Et<N;Et++){const O=Et*H-J;for(let j=0;j<Q;j++){const _t=j*ot-q;dt[w]=_t*D,dt[S]=O*P,dt[y]=st,d.push(dt.x,dt.y,dt.z),dt[w]=0,dt[S]=0,dt[y]=B>0?1:-1,v.push(dt.x,dt.y,dt.z),x.push(j/z),x.push(1-Et/T),I+=1}}for(let Et=0;Et<T;Et++)for(let O=0;O<z;O++){const j=_+O+Q*Et,_t=_+O+Q*(Et+1),At=_+(O+1)+Q*(Et+1),Bt=_+(O+1)+Q*Et;m.push(j,_t,Bt),m.push(_t,At,Bt),ct+=6}p.addGroup(E,ct,C),E+=ct,_+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Wp extends ci{constructor(t=1,n=1,a=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const v=[],x=[],_=[],E=[];let b=0;const w=[],S=a/2;let y=0;D(),h===!1&&(t>0&&P(!0),n>0&&P(!1)),this.setIndex(v),this.setAttribute("position",new li(x,3)),this.setAttribute("normal",new li(_,3)),this.setAttribute("uv",new li(E,2));function D(){const U=new K,F=new K;let B=0;const z=(n-t)/a;for(let T=0;T<=c;T++){const C=[],ot=T/c,H=ot*(n-t)+t;for(let q=0;q<=l;q++){const J=q/l,st=J*m+p,Q=Math.sin(st),N=Math.cos(st);F.x=H*Q,F.y=-ot*a+S,F.z=H*N,x.push(F.x,F.y,F.z),U.set(Q,z,N).normalize(),_.push(U.x,U.y,U.z),E.push(J,1-ot),C.push(b++)}w.push(C)}for(let T=0;T<l;T++)for(let C=0;C<c;C++){const ot=w[C][T],H=w[C+1][T],q=w[C+1][T+1],J=w[C][T+1];(t>0||C!==0)&&(v.push(ot,H,J),B+=3),(n>0||C!==c-1)&&(v.push(H,q,J),B+=3)}d.addGroup(y,B,0),y+=B}function P(U){const F=b,B=new te,z=new K;let T=0;const C=U===!0?t:n,ot=U===!0?1:-1;for(let q=1;q<=l;q++)x.push(0,S*ot,0),_.push(0,ot,0),E.push(.5,.5),b++;const H=b;for(let q=0;q<=l;q++){const st=q/l*m+p,Q=Math.cos(st),N=Math.sin(st);z.x=C*N,z.y=S*ot,z.z=C*Q,x.push(z.x,z.y,z.z),_.push(0,ot,0),B.x=Q*.5+.5,B.y=N*.5*ot+.5,E.push(B.x,B.y),b++}for(let q=0;q<l;q++){const J=F+q,st=H+q;U===!0?v.push(st,st+1,J):v.push(st+1,st,J),T+=3}d.addGroup(y,T,U===!0?1:2),y+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ru extends ci{constructor(t=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:l};const c=t/2,h=n/2,p=Math.floor(a),m=Math.floor(l),d=p+1,v=m+1,x=t/p,_=n/m,E=[],b=[],w=[],S=[];for(let y=0;y<v;y++){const D=y*_-h;for(let P=0;P<d;P++){const U=P*x-c;b.push(U,-D,0),w.push(0,0,1),S.push(P/p),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let D=0;D<p;D++){const P=D+d*y,U=D+d*(y+1),F=D+1+d*(y+1),B=D+1+d*y;E.push(P,U,B),E.push(U,F,B)}this.setIndex(E),this.setAttribute("position",new li(b,3)),this.setAttribute("normal",new li(w,3)),this.setAttribute("uv",new li(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ru(t.width,t.height,t.widthSegments,t.heightSegments)}}function eo(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const l=r[n][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=l.clone():Array.isArray(l)?t[n][a]=l.slice():t[n][a]=l}}return t}function Hn(r){const t={};for(let n=0;n<r.length;n++){const a=eo(r[n]);for(const l in a)t[l]=a[l]}return t}function sb(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Dx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const rb={clone:eo,merge:Hn};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends io{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=eo(t.uniforms),this.uniformsGroups=sb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?n.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?n.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?n.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?n.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?n.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?n.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?n.uniforms[l]={type:"m4",value:h.toArray()}:n.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class cb extends $i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ub extends io{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fb extends io{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hb extends Nn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const gd=new Ye,fv=new K,hv=new K;class db{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xp,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;fv.setFromMatrixPosition(t.matrixWorld),n.position.copy(fv),hv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(hv),n.updateMatrixWorld(),gd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===dl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(gd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const eu=new K,nu=new ms,Gi=new K;class Ux extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(eu,nu,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eu,nu,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(eu,nu,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eu,nu,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new K,dv=new te,pv=new te;class ri extends Ux{constructor(t=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=yp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yp*2*Math.atan(Math.tan(mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,n){return this.getViewBounds(t,dv,pv),n.subVectors(pv,dv)}setViewOffset(t,n,a,l,c,h){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(mu*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,n-=h.offsetY*a/d,l*=h.width/m,a*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class pb extends db{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0}}class mb extends hb{constructor(t,n,a=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new pb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Lx extends Ux{constructor(t=-1,n=1,a=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,h=a+t,p=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const kr=-90,Xr=1;class gb extends Nn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(kr,Xr,t,n);l.layers=this.layers,this.add(l);const c=new ri(kr,Xr,t,n);c.layers=this.layers,this.add(c);const h=new ri(kr,Xr,t,n);h.layers=this.layers,this.add(h);const p=new ri(kr,Xr,t,n);p.layers=this.layers,this.add(p);const m=new ri(kr,Xr,t,n);m.layers=this.layers,this.add(m);const d=new ri(kr,Xr,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,l,c,h,p,m]=n;for(const d of n)this.remove(d);if(t===qi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===dl)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,x=t.getRenderTarget(),_=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(a,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(a,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(a,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=w,t.setRenderTarget(a,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,v),t.setRenderTarget(x,_,E),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class _b extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const mv=new Ye;class vb{constructor(t,n,a=0,l=1/0){this.ray=new Au(t,n),this.near=a,this.far=l,this.camera=null,this.layers=new Gp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):be("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return mv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mv),this}intersectObject(t,n=!0,a=[]){return Mp(t,this,a,n),a.sort(gv),a}intersectObjects(t,n=!0,a=[]){for(let l=0,c=t.length;l<c;l++)Mp(t[l],this,a,n);return a.sort(gv),a}}function gv(r,t){return r.distance-t.distance}function Mp(r,t,n,a){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(l=!1),l===!0&&a===!0){const c=r.children;for(let h=0,p=c.length;h<p;h++)Mp(c[h],t,n,!0)}}class _v{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(_e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xb extends Ws{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function vv(r,t,n,a){const l=yb(a);switch(n){case _x:return r*t;case xx:return r*t/l.components*l.byteLength;case Pp:return r*t/l.components*l.byteLength;case $r:return r*t*2/l.components*l.byteLength;case Bp:return r*t*2/l.components*l.byteLength;case vx:return r*t*3/l.components*l.byteLength;case Oi:return r*t*4/l.components*l.byteLength;case zp:return r*t*4/l.components*l.byteLength;case fu:case hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case du:case pu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vd:case Xd:return Math.max(r,16)*Math.max(t,8)/4;case Gd:case kd:return Math.max(r,8)*Math.max(t,8)/2;case Wd:case qd:case jd:case Zd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yd:case Kd:case Qd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $d:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case tp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ep:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case np:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ap:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case sp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case rp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case op:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case lp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case cp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case up:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case fp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case hp:case dp:case pp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case mp:case gp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case _p:case vp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yb(r){switch(r){case oi:case dx:return{byteLength:1,components:1};case fl:case px:case Ca:return{byteLength:2,components:1};case Np:case Op:return{byteLength:2,components:4};case Qi:case Lp:case Wi:return{byteLength:4,components:1};case mx:case gx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);function Nx(){let r=null,t=!1,n=null,a=null;function l(c,h){n(c,h),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function Sb(r){const t=new WeakMap;function n(p,m){const d=p.array,v=p.usage,x=d.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=r.SHORT;else if(d instanceof Uint32Array)E=r.UNSIGNED_INT;else if(d instanceof Int32Array)E=r.INT;else if(d instanceof Int8Array)E=r.BYTE;else if(d instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function a(p,m,d){const v=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,v);else{x.sort((E,b)=>E.start-b.start);let _=0;for(let E=1;E<x.length;E++){const b=x[_],w=x[E];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++_,x[_]=w)}x.length=_+1;for(let E=0,b=x.length;E<b;E++){const w=x[E];r.bufferSubData(d,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,n(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eb=`#ifdef USE_ALPHAHASH
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
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cb=`#ifdef USE_AOMAP
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
#endif`,wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Db=`#ifdef USE_BATCHING
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
#endif`,Ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ob=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pb=`#ifdef USE_IRIDESCENCE
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
#endif`,Bb=`#ifdef USE_BUMPMAP
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
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wb=`#define PI 3.141592653589793
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
} // validated`,qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yb=`vec3 transformedNormal = objectNormal;
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
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",$b=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tT=`#ifdef USE_ENVMAP
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
#endif`,eT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cT=`#ifdef USE_GRADIENTMAP
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
}`,uT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dT=`uniform bool receiveShadow;
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
#endif`,pT=`#ifdef USE_ENVMAP
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
#endif`,mT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xT=`PhysicalMaterial material;
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
#endif`,yT=`uniform sampler2D dfgLUT;
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
}`,ST=`
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
#endif`,MT=`#if defined( RE_IndirectDiffuse )
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
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UT=`#if defined( USE_POINTS_UV )
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
#endif`,LT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zT=`#ifdef USE_MORPHTARGETS
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
#endif`,IT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XT=`#ifdef USE_NORMALMAP
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
#endif`,WT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rA=`float getShadowMask() {
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
}`,oA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lA=`#ifdef USE_SKINNING
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
#endif`,cA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uA=`#ifdef USE_SKINNING
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
#endif`,fA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mA=`#ifdef USE_TRANSMISSION
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
#endif`,gA=`#ifdef USE_TRANSMISSION
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
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MA=`uniform sampler2D t2D;
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
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`#include <common>
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
}`,CA=`#if DEPTH_PACKING == 3200
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
}`,wA=`#define DISTANCE
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
}`,DA=`#define DISTANCE
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
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`uniform float scale;
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
}`,OA=`uniform vec3 diffuse;
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
}`,PA=`#include <common>
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
}`,BA=`uniform vec3 diffuse;
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
}`,zA=`#define LAMBERT
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
}`,IA=`#define LAMBERT
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
}`,FA=`#define MATCAP
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
}`,HA=`#define MATCAP
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
}`,GA=`#define NORMAL
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
}`,VA=`#define NORMAL
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
}`,kA=`#define PHONG
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
}`,XA=`#define PHONG
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
}`,WA=`#define STANDARD
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
}`,qA=`#define STANDARD
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
}`,YA=`#define TOON
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
}`,jA=`#define TOON
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
}`,ZA=`uniform float size;
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
}`,KA=`uniform vec3 diffuse;
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
}`,QA=`#include <common>
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
}`,JA=`uniform vec3 color;
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
}`,$A=`uniform float rotation;
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
}`,t1=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Mb,alphahash_pars_fragment:Eb,alphamap_fragment:bb,alphamap_pars_fragment:Tb,alphatest_fragment:Ab,alphatest_pars_fragment:Rb,aomap_fragment:Cb,aomap_pars_fragment:wb,batching_pars_vertex:Db,batching_vertex:Ub,begin_vertex:Lb,beginnormal_vertex:Nb,bsdfs:Ob,iridescence_fragment:Pb,bumpmap_pars_fragment:Bb,clipping_planes_fragment:zb,clipping_planes_pars_fragment:Ib,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:Hb,color_fragment:Gb,color_pars_fragment:Vb,color_pars_vertex:kb,color_vertex:Xb,common:Wb,cube_uv_reflection_fragment:qb,defaultnormal_vertex:Yb,displacementmap_pars_vertex:jb,displacementmap_vertex:Zb,emissivemap_fragment:Kb,emissivemap_pars_fragment:Qb,colorspace_fragment:Jb,colorspace_pars_fragment:$b,envmap_fragment:tT,envmap_common_pars_fragment:eT,envmap_pars_fragment:nT,envmap_pars_vertex:iT,envmap_physical_pars_fragment:pT,envmap_vertex:aT,fog_vertex:sT,fog_pars_vertex:rT,fog_fragment:oT,fog_pars_fragment:lT,gradientmap_pars_fragment:cT,lightmap_pars_fragment:uT,lights_lambert_fragment:fT,lights_lambert_pars_fragment:hT,lights_pars_begin:dT,lights_toon_fragment:mT,lights_toon_pars_fragment:gT,lights_phong_fragment:_T,lights_phong_pars_fragment:vT,lights_physical_fragment:xT,lights_physical_pars_fragment:yT,lights_fragment_begin:ST,lights_fragment_maps:MT,lights_fragment_end:ET,logdepthbuf_fragment:bT,logdepthbuf_pars_fragment:TT,logdepthbuf_pars_vertex:AT,logdepthbuf_vertex:RT,map_fragment:CT,map_pars_fragment:wT,map_particle_fragment:DT,map_particle_pars_fragment:UT,metalnessmap_fragment:LT,metalnessmap_pars_fragment:NT,morphinstance_vertex:OT,morphcolor_vertex:PT,morphnormal_vertex:BT,morphtarget_pars_vertex:zT,morphtarget_vertex:IT,normal_fragment_begin:FT,normal_fragment_maps:HT,normal_pars_fragment:GT,normal_pars_vertex:VT,normal_vertex:kT,normalmap_pars_fragment:XT,clearcoat_normal_fragment_begin:WT,clearcoat_normal_fragment_maps:qT,clearcoat_pars_fragment:YT,iridescence_pars_fragment:jT,opaque_fragment:ZT,packing:KT,premultiplied_alpha_fragment:QT,project_vertex:JT,dithering_fragment:$T,dithering_pars_fragment:tA,roughnessmap_fragment:eA,roughnessmap_pars_fragment:nA,shadowmap_pars_fragment:iA,shadowmap_pars_vertex:aA,shadowmap_vertex:sA,shadowmask_pars_fragment:rA,skinbase_vertex:oA,skinning_pars_vertex:lA,skinning_vertex:cA,skinnormal_vertex:uA,specularmap_fragment:fA,specularmap_pars_fragment:hA,tonemapping_fragment:dA,tonemapping_pars_fragment:pA,transmission_fragment:mA,transmission_pars_fragment:gA,uv_pars_fragment:_A,uv_pars_vertex:vA,uv_vertex:xA,worldpos_vertex:yA,background_vert:SA,background_frag:MA,backgroundCube_vert:EA,backgroundCube_frag:bA,cube_vert:TA,cube_frag:AA,depth_vert:RA,depth_frag:CA,distance_vert:wA,distance_frag:DA,equirect_vert:UA,equirect_frag:LA,linedashed_vert:NA,linedashed_frag:OA,meshbasic_vert:PA,meshbasic_frag:BA,meshlambert_vert:zA,meshlambert_frag:IA,meshmatcap_vert:FA,meshmatcap_frag:HA,meshnormal_vert:GA,meshnormal_frag:VA,meshphong_vert:kA,meshphong_frag:XA,meshphysical_vert:WA,meshphysical_frag:qA,meshtoon_vert:YA,meshtoon_frag:jA,points_vert:ZA,points_frag:KA,shadow_vert:QA,shadow_frag:JA,sprite_vert:$A,sprite_frag:t1},Ut={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ki={basic:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Hn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Hn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new De(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Hn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Hn([Ut.points,Ut.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Hn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Hn([Ut.common,Ut.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Hn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Hn([Ut.sprite,Ut.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Hn([Ut.common,Ut.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Hn([Ut.lights,Ut.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};ki.physical={uniforms:Hn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const iu={r:0,b:0,g:0},Is=new Da,e1=new Ye;function n1(r,t,n,a,l,c){const h=new De(0);let p=l===!0?0:1,m,d,v=null,x=0,_=null;function E(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const U=D.backgroundBlurriness>0;P=t.get(P,U)}return P}function b(D){let P=!1;const U=E(D);U===null?S(h,p):U&&U.isColor&&(S(U,1),P=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(D,P){const U=E(P);U&&(U.isCubeTexture||U.mapping===bu)?(d===void 0&&(d=new Ji(new gl(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:eo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Is.copy(P.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(e1.makeRotationFromEuler(Is)),d.material.toneMapped=Ae.getTransfer(U.colorSpace)!==Ie,(v!==U||x!==U.version||_!==r.toneMapping)&&(d.material.needsUpdate=!0,v=U,x=U.version,_=r.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Ji(new Ru(2,2),new $i({name:"BackgroundMaterial",uniforms:eo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Ae.getTransfer(U.colorSpace)!==Ie,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||x!==U.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,v=U,x=U.version,_=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function S(D,P){D.getRGB(iu,Dx(r)),n.buffers.color.setClear(iu.r,iu.g,iu.b,P,c)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,P=1){h.set(D),p=P,S(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,S(h,p)},render:b,addToRenderList:w,dispose:y}}function i1(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=_(null);let c=l,h=!1;function p(H,q,J,st,Q){let N=!1;const I=x(H,st,J,q);c!==I&&(c=I,d(c.object)),N=E(H,st,J,Q),N&&b(H,st,J,Q),Q!==null&&t.update(Q,r.ELEMENT_ARRAY_BUFFER),(N||h)&&(h=!1,U(H,q,J,st),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return r.createVertexArray()}function d(H){return r.bindVertexArray(H)}function v(H){return r.deleteVertexArray(H)}function x(H,q,J,st){const Q=st.wireframe===!0;let N=a[q.id];N===void 0&&(N={},a[q.id]=N);const I=H.isInstancedMesh===!0?H.id:0;let ct=N[I];ct===void 0&&(ct={},N[I]=ct);let dt=ct[J.id];dt===void 0&&(dt={},ct[J.id]=dt);let Et=dt[Q];return Et===void 0&&(Et=_(m()),dt[Q]=Et),Et}function _(H){const q=[],J=[],st=[];for(let Q=0;Q<n;Q++)q[Q]=0,J[Q]=0,st[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:J,attributeDivisors:st,object:H,attributes:{},index:null}}function E(H,q,J,st){const Q=c.attributes,N=q.attributes;let I=0;const ct=J.getAttributes();for(const dt in ct)if(ct[dt].location>=0){const O=Q[dt];let j=N[dt];if(j===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(j=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(j=H.instanceColor)),O===void 0||O.attribute!==j||j&&O.data!==j.data)return!0;I++}return c.attributesNum!==I||c.index!==st}function b(H,q,J,st){const Q={},N=q.attributes;let I=0;const ct=J.getAttributes();for(const dt in ct)if(ct[dt].location>=0){let O=N[dt];O===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const j={};j.attribute=O,O&&O.data&&(j.data=O.data),Q[dt]=j,I++}c.attributes=Q,c.attributesNum=I,c.index=st}function w(){const H=c.newAttributes;for(let q=0,J=H.length;q<J;q++)H[q]=0}function S(H){y(H,0)}function y(H,q){const J=c.newAttributes,st=c.enabledAttributes,Q=c.attributeDivisors;J[H]=1,st[H]===0&&(r.enableVertexAttribArray(H),st[H]=1),Q[H]!==q&&(r.vertexAttribDivisor(H,q),Q[H]=q)}function D(){const H=c.newAttributes,q=c.enabledAttributes;for(let J=0,st=q.length;J<st;J++)q[J]!==H[J]&&(r.disableVertexAttribArray(J),q[J]=0)}function P(H,q,J,st,Q,N,I){I===!0?r.vertexAttribIPointer(H,q,J,Q,N):r.vertexAttribPointer(H,q,J,st,Q,N)}function U(H,q,J,st){w();const Q=st.attributes,N=J.getAttributes(),I=q.defaultAttributeValues;for(const ct in N){const dt=N[ct];if(dt.location>=0){let Et=Q[ct];if(Et===void 0&&(ct==="instanceMatrix"&&H.instanceMatrix&&(Et=H.instanceMatrix),ct==="instanceColor"&&H.instanceColor&&(Et=H.instanceColor)),Et!==void 0){const O=Et.normalized,j=Et.itemSize,_t=t.get(Et);if(_t===void 0)continue;const At=_t.buffer,Bt=_t.type,it=_t.bytesPerElement,vt=Bt===r.INT||Bt===r.UNSIGNED_INT||Et.gpuType===Lp;if(Et.isInterleavedBufferAttribute){const bt=Et.data,Vt=bt.stride,Zt=Et.offset;if(bt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<dt.locationSize;Jt++)y(dt.location+Jt,bt.meshPerAttribute);H.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Jt=0;Jt<dt.locationSize;Jt++)S(dt.location+Jt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let Jt=0;Jt<dt.locationSize;Jt++)P(dt.location+Jt,j/dt.locationSize,Bt,O,Vt*it,(Zt+j/dt.locationSize*Jt)*it,vt)}else{if(Et.isInstancedBufferAttribute){for(let bt=0;bt<dt.locationSize;bt++)y(dt.location+bt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let bt=0;bt<dt.locationSize;bt++)S(dt.location+bt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let bt=0;bt<dt.locationSize;bt++)P(dt.location+bt,j/dt.locationSize,Bt,O,j*it,j/dt.locationSize*bt*it,vt)}}else if(I!==void 0){const O=I[ct];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(dt.location,O);break;case 3:r.vertexAttrib3fv(dt.location,O);break;case 4:r.vertexAttrib4fv(dt.location,O);break;default:r.vertexAttrib1fv(dt.location,O)}}}}D()}function F(){C();for(const H in a){const q=a[H];for(const J in q){const st=q[J];for(const Q in st){const N=st[Q];for(const I in N)v(N[I].object),delete N[I];delete st[Q]}}delete a[H]}}function B(H){if(a[H.id]===void 0)return;const q=a[H.id];for(const J in q){const st=q[J];for(const Q in st){const N=st[Q];for(const I in N)v(N[I].object),delete N[I];delete st[Q]}}delete a[H.id]}function z(H){for(const q in a){const J=a[q];for(const st in J){const Q=J[st];if(Q[H.id]===void 0)continue;const N=Q[H.id];for(const I in N)v(N[I].object),delete N[I];delete Q[H.id]}}}function T(H){for(const q in a){const J=a[q],st=H.isInstancedMesh===!0?H.id:0,Q=J[st];if(Q!==void 0){for(const N in Q){const I=Q[N];for(const ct in I)v(I[ct].object),delete I[ct];delete Q[N]}delete J[st],Object.keys(J).length===0&&delete a[q]}}}function C(){ot(),h=!0,c!==l&&(c=l,d(c.object))}function ot(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:C,resetDefaultState:ot,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:S,disableUnusedAttributes:D}}function a1(r,t,n){let a;function l(d){a=d}function c(d,v){r.drawArrays(a,d,v),n.update(v,a,1)}function h(d,v,x){x!==0&&(r.drawArraysInstanced(a,d,v,x),n.update(v,a,x))}function p(d,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,v,0,x);let E=0;for(let b=0;b<x;b++)E+=v[b];n.update(E,a,1)}function m(d,v,x,_){if(x===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<d.length;b++)h(d[b],v[b],_[b]);else{E.multiDrawArraysInstancedWEBGL(a,d,0,v,0,_,0,x);let b=0;for(let w=0;w<x;w++)b+=v[w]*_[w];n.update(b,a,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function s1(r,t,n,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Oi&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===Ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==oi&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Wi&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const v=m(d);v!==d&&(ae("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const x=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:U,maxSamples:F,samples:B}}function r1(r){const t=this;let n=null,a=0,l=!1,c=!1;const h=new cs,p=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const E=x.length!==0||_||a!==0||l;return l=_,a=x.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){n=v(x,_,0)},this.setState=function(x,_,E){const b=x.clippingPlanes,w=x.clipIntersection,S=x.clipShadows,y=r.get(x);if(!l||b===null||b.length===0||c&&!S)c?v(null):d();else{const D=c?0:a,P=D*4;let U=y.clippingState||null;m.value=U,U=v(b,_,P,E);for(let F=0;F!==P;++F)U[F]=n[F];y.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function v(x,_,E,b){const w=x!==null?x.length:0;let S=null;if(w!==0){if(S=m.value,b!==!0||S===null){const y=E+w*4,D=_.matrixWorldInverse;p.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,U=E;P!==w;++P,U+=4)h.copy(x[P]).applyMatrix4(D,p),h.normal.toArray(S,U),S[U+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,S}}const fs=4,xv=[.125,.215,.35,.446,.526,.582],Gs=20,o1=256,sl=new Lx,yv=new De;let _d=null,vd=0,xd=0,yd=!1;const l1=new K;class Sv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,l=100,c={}){const{size:h=256,position:p=l1}=c;_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,l,m,p),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_d,vd,xd),this._renderer.xr.enabled=yd,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Xs||t.mapping===Jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ca,format:Oi,colorSpace:to,depthBuffer:!1},l=Mv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mv(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=c1(c)),this._blurMaterial=f1(c,t,n),this._ggxMaterial=u1(c,t,n)}return l}_compileMaterial(t){const n=new Ji(new ci,t);this._renderer.compile(n,sl)}_sceneToCubeUV(t,n,a,l,c){const m=new ri(90,1,n,a),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,E=x.toneMapping;x.getClearColor(yv),x.toneMapping=ji,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ji(new gl,new kp({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let y=!1;const D=t.background;D?D.isColor&&(S.color.copy(D),t.background=null,y=!0):(S.color.copy(yv),y=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[P],c.y,c.z)):U===1?(m.up.set(0,0,d[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[P],c.z)):(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[P]));const F=this._cubeSize;Wr(l,U*F,P>2?F:0,F,F),x.setRenderTarget(l),y&&x.render(w,m),x.render(t,m)}x.toneMapping=E,x.autoClear=_,t.background=D}_textureToCubeUV(t,n){const a=this._renderer,l=t.mapping===Xs||t.mapping===Jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=bv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ev());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Wr(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(h,sl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[a];p.material=h;const m=h.uniforms,d=a/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),x=Math.sqrt(d*d-v*v),_=0+d*1.25,E=x*_,{_lodMax:b}=this,w=this._sizeLods[a],S=3*w*(a>b-fs?a-b+fs:0),y=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=b-n,Wr(c,S,y,3*w,2*w),l.setRenderTarget(c),l.render(p,sl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-a,Wr(t,S,y,3*w,2*w),l.setRenderTarget(t),l.render(p,sl)}_blur(t,n,a,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,n,a,l,"latitudinal",c),this._halfBlur(h,t,a,a,l,"longitudinal",c)}_halfBlur(t,n,a,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=d;const _=d.uniforms,E=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Gs-1),w=c/b,S=isFinite(c)?1+Math.floor(v*w):Gs;S>Gs&&ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Gs}`);const y=[];let D=0;for(let z=0;z<Gs;++z){const T=z/w,C=Math.exp(-T*T/2);y.push(C),z===0?D+=C:z<S&&(D+=2*C)}for(let z=0;z<y.length;z++)y[z]=y[z]/D;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=h==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=b,_.mipInt.value=P-a;const U=this._sizeLods[l],F=3*U*(l>P-fs?l-P+fs:0),B=4*(this._cubeSize-U);Wr(n,F,B,3*U,2*U),m.setRenderTarget(n),m.render(x,sl)}}function c1(r){const t=[],n=[],a=[];let l=r;const c=r-fs+1+xv.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>r-fs?m=xv[h-r+fs-1]:h===0&&(m=0),n.push(m);const d=1/(p-2),v=-d,x=1+d,_=[v,v,x,v,x,x,v,v,x,x,v,x],E=6,b=6,w=3,S=2,y=1,D=new Float32Array(w*b*E),P=new Float32Array(S*b*E),U=new Float32Array(y*b*E);for(let B=0;B<E;B++){const z=B%3*2/3-1,T=B>2?0:-1,C=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];D.set(C,w*b*B),P.set(_,S*b*B);const ot=[B,B,B,B,B,B];U.set(ot,y*b*B)}const F=new ci;F.setAttribute("position",new Pi(D,w)),F.setAttribute("uv",new Pi(P,S)),F.setAttribute("faceIndex",new Pi(U,y)),a.push(new Ji(F,null)),l>fs&&l--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function Mv(r,t,n){const a=new Zi(r,t,n);return a.texture.mapping=bu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Wr(r,t,n,a,l){r.viewport.set(t,n,a,l),r.scissor.set(t,n,a,l)}function u1(r,t,n){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function f1(r,t,n){const a=new Float32Array(Gs),l=new K(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Ev(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function bv(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}class Ox extends Zi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new Cx(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new gl(5,5,5),c=new $i({name:"CubemapFromEquirect",uniforms:eo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:Aa});c.uniforms.tEquirect.value=n;const h=new Ji(l,c),p=n.minFilter;return n.minFilter===Vs&&(n.minFilter=Un),new gb(1,10,this).update(t,h),n.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,n=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(n,a,l);t.setRenderTarget(c)}}function h1(r){let t=new WeakMap,n=new WeakMap,a=null;function l(_,E=!1){return _==null?null:E?h(_):c(_)}function c(_){if(_&&_.isTexture){const E=_.mapping;if(E===kh||E===Xh)if(t.has(_)){const b=t.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const w=new Ox(b.height);return w.fromEquirectangularTexture(r,_),t.set(_,w),_.addEventListener("dispose",d),p(w.texture,_.mapping)}else return null}}return _}function h(_){if(_&&_.isTexture){const E=_.mapping,b=E===kh||E===Xh,w=E===Xs||E===Jr;if(b||w){let S=n.get(_);const y=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return a===null&&(a=new Sv(r)),S=b?a.fromEquirectangular(_,S):a.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,n.set(_,S),S.texture;if(S!==void 0)return S.texture;{const D=_.image;return b&&D&&D.height>0||w&&D&&m(D)?(a===null&&(a=new Sv(r)),S=b?a.fromEquirectangular(_):a.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,n.set(_,S),_.addEventListener("dispose",v),S.texture):null}}}return _}function p(_,E){return E===kh?_.mapping=Xs:E===Xh&&(_.mapping=Jr),_}function m(_){let E=0;const b=6;for(let w=0;w<b;w++)_[w]!==void 0&&E++;return E===b}function d(_){const E=_.target;E.removeEventListener("dispose",d);const b=t.get(E);b!==void 0&&(t.delete(E),b.dispose())}function v(_){const E=_.target;E.removeEventListener("dispose",v);const b=n.get(E);b!==void 0&&(n.delete(E),b.dispose())}function x(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:x}}function d1(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const l=r.getExtension(a);return t[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&yu("WebGLRenderer: "+a+" extension not supported."),l}}}function p1(r,t,n,a){const l={},c=new WeakMap;function h(x){const _=x.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",h),delete l[_.id];const E=c.get(_);E&&(t.remove(E),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function p(x,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,n.memory.geometries++),_}function m(x){const _=x.attributes;for(const E in _)t.update(_[E],r.ARRAY_BUFFER)}function d(x){const _=[],E=x.index,b=x.attributes.position;let w=0;if(b===void 0)return;if(E!==null){const D=E.array;w=E.version;for(let P=0,U=D.length;P<U;P+=3){const F=D[P+0],B=D[P+1],z=D[P+2];_.push(F,B,B,z,z,F)}}else{const D=b.array;w=b.version;for(let P=0,U=D.length/3-1;P<U;P+=3){const F=P+0,B=P+1,z=P+2;_.push(F,B,B,z,z,F)}}const S=new(b.count>=65535?bx:Ex)(_,1);S.version=w;const y=c.get(x);y&&t.remove(y),c.set(x,S)}function v(x){const _=c.get(x);if(_){const E=x.index;E!==null&&_.version<E.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function m1(r,t,n){let a;function l(_){a=_}let c,h;function p(_){c=_.type,h=_.bytesPerElement}function m(_,E){r.drawElements(a,E,c,_*h),n.update(E,a,1)}function d(_,E,b){b!==0&&(r.drawElementsInstanced(a,E,c,_*h,b),n.update(E,a,b))}function v(_,E,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,E,0,c,_,0,b);let S=0;for(let y=0;y<b;y++)S+=E[y];n.update(S,a,1)}function x(_,E,b,w){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)d(_[y]/h,E[y],w[y]);else{S.multiDrawElementsInstancedWEBGL(a,E,0,c,_,0,w,0,b);let y=0;for(let D=0;D<b;D++)y+=E[D]*w[D];n.update(y,a,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function g1(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,h,p){switch(n.calls++,h){case r.TRIANGLES:n.triangles+=p*(c/3);break;case r.LINES:n.lines+=p*(c/2);break;case r.LINE_STRIP:n.lines+=p*(c-1);break;case r.LINE_LOOP:n.lines+=p*c;break;case r.POINTS:n.points+=p*c;break;default:be("WebGLInfo: Unknown draw mode:",h);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:a}}function _1(r,t,n){const a=new WeakMap,l=new nn;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let _=a.get(p);if(_===void 0||_.count!==x){let ot=function(){T.dispose(),a.delete(p),p.removeEventListener("dispose",ot)};var E=ot;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let U=0;b===!0&&(U=1),w===!0&&(U=2),S===!0&&(U=3);let F=p.attributes.position.count*U,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*B*4*x),T=new Sx(z,F,B,x);T.type=Wi,T.needsUpdate=!0;const C=U*4;for(let H=0;H<x;H++){const q=y[H],J=D[H],st=P[H],Q=F*B*4*H;for(let N=0;N<q.count;N++){const I=N*C;b===!0&&(l.fromBufferAttribute(q,N),z[Q+I+0]=l.x,z[Q+I+1]=l.y,z[Q+I+2]=l.z,z[Q+I+3]=0),w===!0&&(l.fromBufferAttribute(J,N),z[Q+I+4]=l.x,z[Q+I+5]=l.y,z[Q+I+6]=l.z,z[Q+I+7]=0),S===!0&&(l.fromBufferAttribute(st,N),z[Q+I+8]=l.x,z[Q+I+9]=l.y,z[Q+I+10]=l.z,z[Q+I+11]=st.itemSize===4?l.w:1)}}_={count:x,texture:T,size:new te(F,B)},a.set(p,_),p.addEventListener("dispose",ot)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,n);else{let b=0;for(let S=0;S<d.length;S++)b+=d[S];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function v1(r,t,n,a,l){let c=new WeakMap;function h(d){const v=l.render.frame,x=d.geometry,_=t.get(d,x);if(c.get(_)!==v&&(t.update(_),c.set(_,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return _}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),a.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:h,dispose:p}}const x1={[sx]:"LINEAR_TONE_MAPPING",[rx]:"REINHARD_TONE_MAPPING",[ox]:"CINEON_TONE_MAPPING",[lx]:"ACES_FILMIC_TONE_MAPPING",[ux]:"AGX_TONE_MAPPING",[fx]:"NEUTRAL_TONE_MAPPING",[cx]:"CUSTOM_TONE_MAPPING"};function y1(r,t,n,a,l){const c=new Zi(t,n,{type:r,depthBuffer:a,stencilBuffer:l}),h=new Zi(t,n,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),p=new ci;p.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new li([0,2,0,0,2,0],2));const m=new cb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ji(p,m),v=new Lx(-1,1,1,-1,0,1);let x=null,_=null,E=!1,b,w=null,S=[],y=!1;this.setSize=function(D,P){c.setSize(D,P),h.setSize(D,P);for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(D,P)}},this.setEffects=function(D){S=D,y=S.length>0&&S[0].isRenderPass===!0;const P=c.width,U=c.height;for(let F=0;F<S.length;F++){const B=S[F];B.setSize&&B.setSize(P,U)}},this.begin=function(D,P){if(E||D.toneMapping===ji&&S.length===0)return!1;if(w=P,P!==null){const U=P.width,F=P.height;(c.width!==U||c.height!==F)&&this.setSize(U,F)}return y===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=ji,!0},this.hasRenderPass=function(){return y},this.end=function(D,P){D.toneMapping=b,E=!0;let U=c,F=h;for(let B=0;B<S.length;B++){const z=S[B];if(z.enabled!==!1&&(z.render(D,F,U,P),z.needsSwap!==!1)){const T=U;U=F,F=T}}if(x!==D.outputColorSpace||_!==D.toneMapping){x=D.outputColorSpace,_=D.toneMapping,m.defines={},Ae.getTransfer(x)===Ie&&(m.defines.SRGB_TRANSFER="");const B=x1[_];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(w),D.render(d,v),w=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const Px=new Ln,Ep=new pl(1,1),Bx=new Sx,zx=new BE,Ix=new Cx,Tv=[],Av=[],Rv=new Float32Array(16),Cv=new Float32Array(9),wv=new Float32Array(4);function ao(r,t,n){const a=r[0];if(a<=0||a>0)return r;const l=t*n;let c=Tv[l];if(c===void 0&&(c=new Float32Array(l),Tv[l]=c),t!==0){a.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=n,r[h].toArray(c,p)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function yn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function wu(r,t){let n=Av[t];n===void 0&&(n=new Int32Array(t),Av[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function S1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function M1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2fv(this.addr,t),yn(n,t)}}function E1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xn(n,t))return;r.uniform3fv(this.addr,t),yn(n,t)}}function b1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4fv(this.addr,t),yn(n,t)}}function T1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;wv.set(a),r.uniformMatrix2fv(this.addr,!1,wv),yn(n,a)}}function A1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;Cv.set(a),r.uniformMatrix3fv(this.addr,!1,Cv),yn(n,a)}}function R1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(n,t)}else{if(xn(n,a))return;Rv.set(a),r.uniformMatrix4fv(this.addr,!1,Rv),yn(n,a)}}function C1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function w1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2iv(this.addr,t),yn(n,t)}}function D1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;r.uniform3iv(this.addr,t),yn(n,t)}}function U1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4iv(this.addr,t),yn(n,t)}}function L1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function N1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;r.uniform2uiv(this.addr,t),yn(n,t)}}function O1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;r.uniform3uiv(this.addr,t),yn(n,t)}}function P1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;r.uniform4uiv(this.addr,t),yn(n,t)}}function B1(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Ep.compareFunction=n.isReversedDepthBuffer()?Fp:Ip,c=Ep):c=Px,n.setTexture2D(t||c,l)}function z1(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(t||zx,l)}function I1(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(t||Ix,l)}function F1(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(t||Bx,l)}function H1(r){switch(r){case 5126:return S1;case 35664:return M1;case 35665:return E1;case 35666:return b1;case 35674:return T1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return w1;case 35668:case 35672:return D1;case 35669:case 35673:return U1;case 5125:return L1;case 36294:return N1;case 36295:return O1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return F1}}function G1(r,t){r.uniform1fv(this.addr,t)}function V1(r,t){const n=ao(t,this.size,2);r.uniform2fv(this.addr,n)}function k1(r,t){const n=ao(t,this.size,3);r.uniform3fv(this.addr,n)}function X1(r,t){const n=ao(t,this.size,4);r.uniform4fv(this.addr,n)}function W1(r,t){const n=ao(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function q1(r,t){const n=ao(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function Y1(r,t){const n=ao(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function j1(r,t){r.uniform1iv(this.addr,t)}function Z1(r,t){r.uniform2iv(this.addr,t)}function K1(r,t){r.uniform3iv(this.addr,t)}function Q1(r,t){r.uniform4iv(this.addr,t)}function J1(r,t){r.uniform1uiv(this.addr,t)}function $1(r,t){r.uniform2uiv(this.addr,t)}function tR(r,t){r.uniform3uiv(this.addr,t)}function eR(r,t){r.uniform4uiv(this.addr,t)}function nR(r,t,n){const a=this.cache,l=t.length,c=wu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Ep:h=Px;for(let p=0;p!==l;++p)n.setTexture2D(t[p]||h,c[p])}function iR(r,t,n){const a=this.cache,l=t.length,c=wu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let h=0;h!==l;++h)n.setTexture3D(t[h]||zx,c[h])}function aR(r,t,n){const a=this.cache,l=t.length,c=wu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let h=0;h!==l;++h)n.setTextureCube(t[h]||Ix,c[h])}function sR(r,t,n){const a=this.cache,l=t.length,c=wu(n,l);xn(a,c)||(r.uniform1iv(this.addr,c),yn(a,c));for(let h=0;h!==l;++h)n.setTexture2DArray(t[h]||Bx,c[h])}function rR(r){switch(r){case 5126:return G1;case 35664:return V1;case 35665:return k1;case 35666:return X1;case 35674:return W1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return j1;case 35667:case 35671:return Z1;case 35668:case 35672:return K1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return $1;case 36295:return tR;case 36296:return eR;case 35678:case 36198:case 36298:case 36306:case 35682:return nR;case 35679:case 36299:case 36307:return iR;case 35680:case 36300:case 36308:case 36293:return aR;case 36289:case 36303:case 36311:case 36292:return sR}}class oR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=H1(n.type)}}class lR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rR(n.type)}}class cR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,n[p.id],a)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function Dv(r,t){r.seq.push(t),r.map[t.id]=t}function uR(r,t,n){const a=r.name,l=a.length;for(Sd.lastIndex=0;;){const c=Sd.exec(a),h=Sd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){Dv(n,d===void 0?new oR(p,r,t):new lR(p,r,t));break}else{let x=n.map[p];x===void 0&&(x=new cR(p),Dv(n,x)),n=x}}}class gu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let h=0;h<a;++h){const p=t.getActiveUniform(n,h),m=t.getUniformLocation(n,p.name);uR(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(t,a,l)}setOptional(t,n,a){const l=n[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,n,a,l){for(let c=0,h=n.length;c!==h;++c){const p=n[c],m=a[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,n){const a=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in n&&a.push(h)}return a}}function Uv(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const fR=37297;let hR=0;function dR(r,t){const n=r.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let h=l;h<c;h++){const p=h+1;a.push(`${p===t?">":" "} ${p}: ${n[h]}`)}return a.join(`
`)}const Lv=new he;function pR(r){Ae._getMatrix(Lv,Ae.workingColorSpace,r);const t=`mat3( ${Lv.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(r)){case _u:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Nv(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return n.toUpperCase()+`

`+c+`

`+dR(r.getShaderSource(t),p)}else return c}function mR(r,t){const n=pR(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const gR={[sx]:"Linear",[rx]:"Reinhard",[ox]:"Cineon",[lx]:"ACESFilmic",[ux]:"AgX",[fx]:"Neutral",[cx]:"Custom"};function _R(r,t){const n=gR[t];return n===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const au=new K;function vR(){Ae.getLuminanceCoefficients(au);const r=au.x.toFixed(4),t=au.y.toFixed(4),n=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function yR(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function SR(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(t,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),n[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:p}}return n}function ul(r){return r!==""}function Ov(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MR=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(r){return r.replace(MR,bR)}const ER=new Map;function bR(r,t){let n=de[t];if(n===void 0){const a=ER.get(t);if(a!==void 0)n=de[a],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return bp(n)}const TR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bv(r){return r.replace(TR,AR)}function AR(r,t,n,a){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function zv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const RR={[uu]:"SHADOWMAP_TYPE_PCF",[ll]:"SHADOWMAP_TYPE_VSM"};function CR(r){return RR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wR={[Xs]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[bu]:"ENVMAP_TYPE_CUBE_UV"};function DR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":wR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const UR={[Jr]:"ENVMAP_MODE_REFRACTION"};function LR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":UR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NR={[ax]:"ENVMAP_BLENDING_MULTIPLY",[dE]:"ENVMAP_BLENDING_MIX",[pE]:"ENVMAP_BLENDING_ADD"};function OR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":NR[r.combine]||"ENVMAP_BLENDING_NONE"}function PR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function BR(r,t,n,a){const l=r.getContext(),c=n.defines;let h=n.vertexShader,p=n.fragmentShader;const m=CR(n),d=DR(n),v=LR(n),x=OR(n),_=PR(n),E=xR(n),b=yR(c),w=l.createProgram();let S,y,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ul).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ul).join(`
`),y.length>0&&(y+=`
`)):(S=[zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),y=[zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?de.tonemapping_pars_fragment:"",n.toneMapping!==ji?_R("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,mR("linearToOutputTexel",n.outputColorSpace),vR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),h=bp(h),h=Ov(h,n),h=Pv(h,n),p=bp(p),p=Ov(p,n),p=Pv(p,n),h=Bv(h),p=Bv(p),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===W0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===W0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=D+S+h,U=D+y+p,F=Uv(l,l.VERTEX_SHADER,P),B=Uv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,F),l.attachShader(w,B),n.index0AttributeName!==void 0?l.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(H){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(w)||"",J=l.getShaderInfoLog(F)||"",st=l.getShaderInfoLog(B)||"",Q=q.trim(),N=J.trim(),I=st.trim();let ct=!0,dt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ct=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,F,B);else{const Et=Nv(l,F,"vertex"),O=Nv(l,B,"fragment");be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+Et+`
`+O)}else Q!==""?ae("WebGLProgram: Program Info Log:",Q):(N===""||I==="")&&(dt=!1);dt&&(H.diagnostics={runnable:ct,programLog:Q,vertexShader:{log:N,prefix:S},fragmentShader:{log:I,prefix:y}})}l.deleteShader(F),l.deleteShader(B),T=new gu(l,w),C=SR(l,w)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let ot=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ot===!1&&(ot=l.getProgramParameter(w,fR)),ot},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hR++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=B,this}let zR=0;class IR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(a),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new FR(t),n.set(t,a)),a}}class FR{constructor(t){this.id=zR++,this.code=t,this.usedTimes=0}}function HR(r,t,n,a,l,c){const h=new Gp,p=new IR,m=new Set,d=[],v=new Map,x=a.logarithmicDepthBuffer;let _=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,C,ot,H,q){const J=H.fog,st=q.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,N=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,I=t.get(T.envMap||Q,N),ct=I&&I.mapping===bu?I.image.height:null,dt=E[T.type];T.precision!==null&&(_=a.getMaxPrecision(T.precision),_!==T.precision&&ae("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const Et=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,O=Et!==void 0?Et.length:0;let j=0;st.morphAttributes.position!==void 0&&(j=1),st.morphAttributes.normal!==void 0&&(j=2),st.morphAttributes.color!==void 0&&(j=3);let _t,At,Bt,it;if(dt){const Te=ki[dt];_t=Te.vertexShader,At=Te.fragmentShader}else _t=T.vertexShader,At=T.fragmentShader,p.update(T),Bt=p.getVertexShaderID(T),it=p.getFragmentShaderID(T);const vt=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Vt=q.isInstancedMesh===!0,Zt=q.isBatchedMesh===!0,Jt=!!T.map,$e=!!T.matcap,ve=!!I,pe=!!T.aoMap,Ue=!!T.lightMap,oe=!!T.bumpMap,Je=!!T.normalMap,V=!!T.displacementMap,je=!!T.emissiveMap,Ee=!!T.metalnessMap,Ne=!!T.roughnessMap,Wt=T.anisotropy>0,L=T.clearcoat>0,M=T.dispersion>0,Y=T.iridescence>0,pt=T.sheen>0,xt=T.transmission>0,ft=Wt&&!!T.anisotropyMap,kt=L&&!!T.clearcoatMap,Ct=L&&!!T.clearcoatNormalMap,jt=L&&!!T.clearcoatRoughnessMap,$t=Y&&!!T.iridescenceMap,Mt=Y&&!!T.iridescenceThicknessMap,yt=pt&&!!T.sheenColorMap,Nt=pt&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Ot=!!T.specularColorMap,ce=!!T.specularIntensityMap,W=xt&&!!T.transmissionMap,Rt=xt&&!!T.thicknessMap,Tt=!!T.gradientMap,Pt=!!T.alphaMap,St=T.alphaTest>0,ut=!!T.alphaHash,It=!!T.extensions;let ne=ji;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ne=r.toneMapping);const Pe={shaderID:dt,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:At,defines:T.defines,customVertexShaderID:Bt,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Zt,batchingColor:Zt&&q._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&q.instanceColor!==null,instancingMorph:Vt&&q.morphTexture!==null,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:to,alphaToCoverage:!!T.alphaToCoverage,map:Jt,matcap:$e,envMap:ve,envMapMode:ve&&I.mapping,envMapCubeUVHeight:ct,aoMap:pe,lightMap:Ue,bumpMap:oe,normalMap:Je,displacementMap:V,emissiveMap:je,normalMapObjectSpace:Je&&T.normalMapType===vE,normalMapTangentSpace:Je&&T.normalMapType===_E,metalnessMap:Ee,roughnessMap:Ne,anisotropy:Wt,anisotropyMap:ft,clearcoat:L,clearcoatMap:kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:M,iridescence:Y,iridescenceMap:$t,iridescenceThicknessMap:Mt,sheen:pt,sheenColorMap:yt,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:Ot,specularIntensityMap:ce,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===Zr&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:ut,combine:T.combine,mapUv:Jt&&b(T.map.channel),aoMapUv:pe&&b(T.aoMap.channel),lightMapUv:Ue&&b(T.lightMap.channel),bumpMapUv:oe&&b(T.bumpMap.channel),normalMapUv:Je&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:je&&b(T.emissiveMap.channel),metalnessMapUv:Ee&&b(T.metalnessMap.channel),roughnessMapUv:Ne&&b(T.roughnessMap.channel),anisotropyMapUv:ft&&b(T.anisotropyMap.channel),clearcoatMapUv:kt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&b(T.sheenRoughnessMap.channel),specularMapUv:Lt&&b(T.specularMap.channel),specularColorMapUv:Ot&&b(T.specularColorMap.channel),specularIntensityMapUv:ce&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:Rt&&b(T.thicknessMap.channel),alphaMapUv:Pt&&b(T.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Je||Wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!st.attributes.uv&&(Jt||Pt),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||st.attributes.normal===void 0&&Je===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:bt,skinning:q.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:j,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ot.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,decodeVideoTexture:Jt&&T.map.isVideoTexture===!0&&Ae.getTransfer(T.map.colorSpace)===Ie,decodeVideoTextureEmissive:je&&T.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(T.emissiveMap.colorSpace)===Ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ba,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:It&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&T.extensions.multiDraw===!0||Zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pe.vertexUv1s=m.has(1),Pe.vertexUv2s=m.has(2),Pe.vertexUv3s=m.has(3),m.clear(),Pe}function S(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ot in T.defines)C.push(ot),C.push(T.defines[ot]);return T.isRawShaderMaterial===!1&&(y(C,T),D(C,T),C.push(r.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function y(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function D(T,C){h.disableAll(),C.instancing&&h.enable(0),C.instancingColor&&h.enable(1),C.instancingMorph&&h.enable(2),C.matcap&&h.enable(3),C.envMap&&h.enable(4),C.normalMapObjectSpace&&h.enable(5),C.normalMapTangentSpace&&h.enable(6),C.clearcoat&&h.enable(7),C.iridescence&&h.enable(8),C.alphaTest&&h.enable(9),C.vertexColors&&h.enable(10),C.vertexAlphas&&h.enable(11),C.vertexUv1s&&h.enable(12),C.vertexUv2s&&h.enable(13),C.vertexUv3s&&h.enable(14),C.vertexTangents&&h.enable(15),C.anisotropy&&h.enable(16),C.alphaHash&&h.enable(17),C.batching&&h.enable(18),C.dispersion&&h.enable(19),C.batchingColor&&h.enable(20),C.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),T.push(h.mask)}function P(T){const C=E[T.type];let ot;if(C){const H=ki[C];ot=rb.clone(H.uniforms)}else ot=T.uniforms;return ot}function U(T,C){let ot=v.get(C);return ot!==void 0?++ot.usedTimes:(ot=new BR(r,C,T,l),d.push(ot),v.set(C,ot)),ot}function F(T){if(--T.usedTimes===0){const C=d.indexOf(T);d[C]=d[d.length-1],d.pop(),v.delete(T.cacheKey),T.destroy()}}function B(T){p.remove(T)}function z(){p.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:P,acquireProgram:U,releaseProgram:F,releaseShaderCache:B,programs:d,dispose:z}}function GR(){let r=new WeakMap;function t(h){return r.has(h)}function n(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function a(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:l,dispose:c}}function VR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Iv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Fv(){const r=[];let t=0;const n=[],a=[],l=[];function c(){t=0,n.length=0,a.length=0,l.length=0}function h(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,b,w,S,y){let D=r[t];return D===void 0?(D={id:_.id,object:_,geometry:E,material:b,materialVariant:h(_),groupOrder:w,renderOrder:_.renderOrder,z:S,group:y},r[t]=D):(D.id=_.id,D.object=_,D.geometry=E,D.material=b,D.materialVariant=h(_),D.groupOrder=w,D.renderOrder=_.renderOrder,D.z=S,D.group=y),t++,D}function m(_,E,b,w,S,y){const D=p(_,E,b,w,S,y);b.transmission>0?a.push(D):b.transparent===!0?l.push(D):n.push(D)}function d(_,E,b,w,S,y){const D=p(_,E,b,w,S,y);b.transmission>0?a.unshift(D):b.transparent===!0?l.unshift(D):n.unshift(D)}function v(_,E){n.length>1&&n.sort(_||VR),a.length>1&&a.sort(E||Iv),l.length>1&&l.sort(E||Iv)}function x(){for(let _=t,E=r.length;_<E;_++){const b=r[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:m,unshift:d,finish:x,sort:v}}function kR(){let r=new WeakMap;function t(a,l){const c=r.get(a);let h;return c===void 0?(h=new Fv,r.set(a,[h])):l>=c.length?(h=new Fv,c.push(h)):h=c[l],h}function n(){r=new WeakMap}return{get:t,dispose:n}}function XR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new K,color:new De};break;case"SpotLight":n={position:new K,direction:new K,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=n,n}}}function WR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let qR=0;function YR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function jR(r){const t=new XR,n=WR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new K);const l=new K,c=new Ye,h=new Ye;function p(d){let v=0,x=0,_=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let E=0,b=0,w=0,S=0,y=0,D=0,P=0,U=0,F=0,B=0,z=0;d.sort(YR);for(let C=0,ot=d.length;C<ot;C++){const H=d[C],q=H.color,J=H.intensity,st=H.distance;let Q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===$r?Q=H.shadow.map.texture:Q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=q.r*J,x+=q.g*J,_+=q.b*J;else if(H.isLightProbe){for(let N=0;N<9;N++)a.probe[N].addScaledVector(H.sh.coefficients[N],J);z++}else if(H.isDirectionalLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const I=H.shadow,ct=n.get(H);ct.shadowIntensity=I.intensity,ct.shadowBias=I.bias,ct.shadowNormalBias=I.normalBias,ct.shadowRadius=I.radius,ct.shadowMapSize=I.mapSize,a.directionalShadow[E]=ct,a.directionalShadowMap[E]=Q,a.directionalShadowMatrix[E]=H.shadow.matrix,D++}a.directional[E]=N,E++}else if(H.isSpotLight){const N=t.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(q).multiplyScalar(J),N.distance=st,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,a.spot[w]=N;const I=H.shadow;if(H.map&&(a.spotLightMap[F]=H.map,F++,I.updateMatrices(H),H.castShadow&&B++),a.spotLightMatrix[w]=I.matrix,H.castShadow){const ct=n.get(H);ct.shadowIntensity=I.intensity,ct.shadowBias=I.bias,ct.shadowNormalBias=I.normalBias,ct.shadowRadius=I.radius,ct.shadowMapSize=I.mapSize,a.spotShadow[w]=ct,a.spotShadowMap[w]=Q,U++}w++}else if(H.isRectAreaLight){const N=t.get(H);N.color.copy(q).multiplyScalar(J),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=N,S++}else if(H.isPointLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const I=H.shadow,ct=n.get(H);ct.shadowIntensity=I.intensity,ct.shadowBias=I.bias,ct.shadowNormalBias=I.normalBias,ct.shadowRadius=I.radius,ct.shadowMapSize=I.mapSize,ct.shadowCameraNear=I.camera.near,ct.shadowCameraFar=I.camera.far,a.pointShadow[b]=ct,a.pointShadowMap[b]=Q,a.pointShadowMatrix[b]=H.shadow.matrix,P++}a.point[b]=N,b++}else if(H.isHemisphereLight){const N=t.get(H);N.skyColor.copy(H.color).multiplyScalar(J),N.groundColor.copy(H.groundColor).multiplyScalar(J),a.hemi[y]=N,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ut.LTC_FLOAT_1,a.rectAreaLTC2=Ut.LTC_FLOAT_2):(a.rectAreaLTC1=Ut.LTC_HALF_1,a.rectAreaLTC2=Ut.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=x,a.ambient[2]=_;const T=a.hash;(T.directionalLength!==E||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==D||T.numPointShadows!==P||T.numSpotShadows!==U||T.numSpotMaps!==F||T.numLightProbes!==z)&&(a.directional.length=E,a.spot.length=w,a.rectArea.length=S,a.point.length=b,a.hemi.length=y,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=P,a.pointShadowMap.length=P,a.spotShadow.length=U,a.spotShadowMap.length=U,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=P,a.spotLightMatrix.length=U+F-B,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=z,T.directionalLength=E,T.pointLength=b,T.spotLength=w,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=D,T.numPointShadows=P,T.numSpotShadows=U,T.numSpotMaps=F,T.numLightProbes=z,a.version=qR++)}function m(d,v){let x=0,_=0,E=0,b=0,w=0;const S=v.matrixWorldInverse;for(let y=0,D=d.length;y<D;y++){const P=d[y];if(P.isDirectionalLight){const U=a.directional[x];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),x++}else if(P.isSpotLight){const U=a.spot[E];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),E++}else if(P.isRectAreaLight){const U=a.rectArea[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),h.identity(),c.copy(P.matrixWorld),c.premultiply(S),h.extractRotation(c),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const U=a.point[_];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),_++}else if(P.isHemisphereLight){const U=a.hemi[w];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(S),w++}}}return{setup:p,setupView:m,state:a}}function Hv(r){const t=new jR(r),n=[],a=[];function l(v){d.camera=v,n.length=0,a.length=0}function c(v){n.push(v)}function h(v){a.push(v)}function p(){t.setup(n)}function m(v){t.setupView(n,v)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:h}}function ZR(r){let t=new WeakMap;function n(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new Hv(r),t.set(l,[p])):c>=h.length?(p=new Hv(r),h.push(p)):p=h[c],p}function a(){t=new WeakMap}return{get:n,dispose:a}}const KR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QR=`uniform sampler2D shadow_pass;
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
}`,JR=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],$R=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Gv=new Ye,rl=new K,Md=new K;function tC(r,t,n){let a=new Xp;const l=new te,c=new te,h=new nn,p=new ub,m=new fb,d={},v=n.maxTextureSize,x={[ps]:jn,[jn]:ps,[ba]:ba},_=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:KR,fragmentShader:QR}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const b=new ci;b.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ji(b,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let y=this.type;this.render=function(B,z,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;this.type===jM&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=uu);const C=r.getRenderTarget(),ot=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Aa),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const J=y!==this.type;J&&z.traverse(function(st){st.material&&(Array.isArray(st.material)?st.material.forEach(Q=>Q.needsUpdate=!0):st.material.needsUpdate=!0)});for(let st=0,Q=B.length;st<Q;st++){const N=B[st],I=N.shadow;if(I===void 0){ae("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const ct=I.getFrameExtents();l.multiply(ct),c.copy(I.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ct.x),l.x=c.x*ct.x,I.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ct.y),l.y=c.y*ct.y,I.mapSize.y=c.y));const dt=r.state.buffers.depth.getReversed();if(I.camera._reversedDepth=dt,I.map===null||J===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===ll){if(N.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Zi(l.x,l.y,{format:$r,type:Ca,minFilter:Un,magFilter:Un,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new pl(l.x,l.y,Wi),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=wa,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Rn,I.map.depthTexture.magFilter=Rn}else N.isPointLight?(I.map=new Ox(l.x),I.map.depthTexture=new ab(l.x,Qi)):(I.map=new Zi(l.x,l.y),I.map.depthTexture=new pl(l.x,l.y,Qi)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=wa,this.type===uu?(I.map.depthTexture.compareFunction=dt?Fp:Ip,I.map.depthTexture.minFilter=Un,I.map.depthTexture.magFilter=Un):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Rn,I.map.depthTexture.magFilter=Rn);I.camera.updateProjectionMatrix()}const Et=I.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Et;O++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,O),r.clear();else{O===0&&(r.setRenderTarget(I.map),r.clear());const j=I.getViewport(O);h.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),q.viewport(h)}if(N.isPointLight){const j=I.camera,_t=I.matrix,At=N.distance||j.far;At!==j.far&&(j.far=At,j.updateProjectionMatrix()),rl.setFromMatrixPosition(N.matrixWorld),j.position.copy(rl),Md.copy(j.position),Md.add(JR[O]),j.up.copy($R[O]),j.lookAt(Md),j.updateMatrixWorld(),_t.makeTranslation(-rl.x,-rl.y,-rl.z),Gv.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Gv,j.coordinateSystem,j.reversedDepth)}else I.updateMatrices(N);a=I.getFrustum(),U(z,T,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===ll&&D(I,T),I.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(C,ot,H)};function D(B,z){const T=t.update(w);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Zi(l.x,l.y,{format:$r,type:Ca})),_.uniforms.shadow_pass.value=B.map.depthTexture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,T,_,w,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,T,E,w,null)}function P(B,z,T,C){let ot=null;const H=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)ot=H;else if(ot=T.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=ot.uuid,J=z.uuid;let st=d[q];st===void 0&&(st={},d[q]=st);let Q=st[J];Q===void 0&&(Q=ot.clone(),st[J]=Q,z.addEventListener("dispose",F)),ot=Q}if(ot.visible=z.visible,ot.wireframe=z.wireframe,C===ll?ot.side=z.shadowSide!==null?z.shadowSide:z.side:ot.side=z.shadowSide!==null?z.shadowSide:x[z.side],ot.alphaMap=z.alphaMap,ot.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,ot.map=z.map,ot.clipShadows=z.clipShadows,ot.clippingPlanes=z.clippingPlanes,ot.clipIntersection=z.clipIntersection,ot.displacementMap=z.displacementMap,ot.displacementScale=z.displacementScale,ot.displacementBias=z.displacementBias,ot.wireframeLinewidth=z.wireframeLinewidth,ot.linewidth=z.linewidth,T.isPointLight===!0&&ot.isMeshDistanceMaterial===!0){const q=r.properties.get(ot);q.light=T}return ot}function U(B,z,T,C,ot){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&ot===ll)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const J=t.update(B),st=B.material;if(Array.isArray(st)){const Q=J.groups;for(let N=0,I=Q.length;N<I;N++){const ct=Q[N],dt=st[ct.materialIndex];if(dt&&dt.visible){const Et=P(B,dt,C,ot);B.onBeforeShadow(r,B,z,T,J,Et,ct),r.renderBufferDirect(T,null,J,Et,B,ct),B.onAfterShadow(r,B,z,T,J,Et,ct)}}}else if(st.visible){const Q=P(B,st,C,ot);B.onBeforeShadow(r,B,z,T,J,Q,null),r.renderBufferDirect(T,null,J,Q,B,null),B.onAfterShadow(r,B,z,T,J,Q,null)}}const q=B.children;for(let J=0,st=q.length;J<st;J++)U(q[J],z,T,C,ot)}function F(B){B.target.removeEventListener("dispose",F);for(const T in d){const C=d[T],ot=B.target.uuid;ot in C&&(C[ot].dispose(),delete C[ot])}}}function eC(r,t){function n(){let W=!1;const Rt=new nn;let Tt=null;const Pt=new nn(0,0,0,0);return{setMask:function(St){Tt!==St&&!W&&(r.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){W=St},setClear:function(St,ut,It,ne,Pe){Pe===!0&&(St*=ne,ut*=ne,It*=ne),Rt.set(St,ut,It,ne),Pt.equals(Rt)===!1&&(r.clearColor(St,ut,It,ne),Pt.copy(Rt))},reset:function(){W=!1,Tt=null,Pt.set(-1,0,0,0)}}}function a(){let W=!1,Rt=!1,Tt=null,Pt=null,St=null;return{setReversed:function(ut){if(Rt!==ut){const It=t.get("EXT_clip_control");ut?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Rt=ut;const ne=St;St=null,this.setClear(ne)}},getReversed:function(){return Rt},setTest:function(ut){ut?vt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(ut){Tt!==ut&&!W&&(r.depthMask(ut),Tt=ut)},setFunc:function(ut){if(Rt&&(ut=CE[ut]),Pt!==ut){switch(ut){case Ld:r.depthFunc(r.NEVER);break;case Nd:r.depthFunc(r.ALWAYS);break;case Od:r.depthFunc(r.LESS);break;case Qr:r.depthFunc(r.LEQUAL);break;case Pd:r.depthFunc(r.EQUAL);break;case Bd:r.depthFunc(r.GEQUAL);break;case zd:r.depthFunc(r.GREATER);break;case Id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pt=ut}},setLocked:function(ut){W=ut},setClear:function(ut){St!==ut&&(St=ut,Rt&&(ut=1-ut),r.clearDepth(ut))},reset:function(){W=!1,Tt=null,Pt=null,St=null,Rt=!1}}}function l(){let W=!1,Rt=null,Tt=null,Pt=null,St=null,ut=null,It=null,ne=null,Pe=null;return{setTest:function(Te){W||(Te?vt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!W&&(r.stencilMask(Te),Rt=Te)},setFunc:function(Te,On,Ei){(Tt!==Te||Pt!==On||St!==Ei)&&(r.stencilFunc(Te,On,Ei),Tt=Te,Pt=On,St=Ei)},setOp:function(Te,On,Ei){(ut!==Te||It!==On||ne!==Ei)&&(r.stencilOp(Te,On,Ei),ut=Te,It=On,ne=Ei)},setLocked:function(Te){W=Te},setClear:function(Te){Pe!==Te&&(r.clearStencil(Te),Pe=Te)},reset:function(){W=!1,Rt=null,Tt=null,Pt=null,St=null,ut=null,It=null,ne=null,Pe=null}}}const c=new n,h=new a,p=new l,m=new WeakMap,d=new WeakMap;let v={},x={},_=new WeakMap,E=[],b=null,w=!1,S=null,y=null,D=null,P=null,U=null,F=null,B=null,z=new De(0,0,0),T=0,C=!1,ot=null,H=null,q=null,J=null,st=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const ct=r.getParameter(r.VERSION);ct.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(ct)[1]),N=I>=1):ct.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),N=I>=2);let dt=null,Et={};const O=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),_t=new nn().fromArray(O),At=new nn().fromArray(j);function Bt(W,Rt,Tt,Pt){const St=new Uint8Array(4),ut=r.createTexture();r.bindTexture(W,ut),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let It=0;It<Tt;It++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Pt,0,r.RGBA,r.UNSIGNED_BYTE,St):r.texImage2D(Rt+It,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,St);return ut}const it={};it[r.TEXTURE_2D]=Bt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Bt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Bt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Bt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),vt(r.DEPTH_TEST),h.setFunc(Qr),oe(!1),Je(H0),vt(r.CULL_FACE),pe(Aa);function vt(W){v[W]!==!0&&(r.enable(W),v[W]=!0)}function bt(W){v[W]!==!1&&(r.disable(W),v[W]=!1)}function Vt(W,Rt){return x[W]!==Rt?(r.bindFramebuffer(W,Rt),x[W]=Rt,W===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Rt),W===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Zt(W,Rt){let Tt=E,Pt=!1;if(W){Tt=_.get(Rt),Tt===void 0&&(Tt=[],_.set(Rt,Tt));const St=W.textures;if(Tt.length!==St.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,It=St.length;ut<It;ut++)Tt[ut]=r.COLOR_ATTACHMENT0+ut;Tt.length=St.length,Pt=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,Pt=!0);Pt&&r.drawBuffers(Tt)}function Jt(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const $e={[Hs]:r.FUNC_ADD,[KM]:r.FUNC_SUBTRACT,[QM]:r.FUNC_REVERSE_SUBTRACT};$e[JM]=r.MIN,$e[$M]=r.MAX;const ve={[tE]:r.ZERO,[eE]:r.ONE,[nE]:r.SRC_COLOR,[Dd]:r.SRC_ALPHA,[lE]:r.SRC_ALPHA_SATURATE,[rE]:r.DST_COLOR,[aE]:r.DST_ALPHA,[iE]:r.ONE_MINUS_SRC_COLOR,[Ud]:r.ONE_MINUS_SRC_ALPHA,[oE]:r.ONE_MINUS_DST_COLOR,[sE]:r.ONE_MINUS_DST_ALPHA,[cE]:r.CONSTANT_COLOR,[uE]:r.ONE_MINUS_CONSTANT_COLOR,[fE]:r.CONSTANT_ALPHA,[hE]:r.ONE_MINUS_CONSTANT_ALPHA};function pe(W,Rt,Tt,Pt,St,ut,It,ne,Pe,Te){if(W===Aa){w===!0&&(bt(r.BLEND),w=!1);return}if(w===!1&&(vt(r.BLEND),w=!0),W!==ZM){if(W!==S||Te!==C){if((y!==Hs||U!==Hs)&&(r.blendEquation(r.FUNC_ADD),y=Hs,U=Hs),Te)switch(W){case Zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case G0:r.blendFunc(r.ONE,r.ONE);break;case V0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case k0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:be("WebGLState: Invalid blending: ",W);break}else switch(W){case Zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case G0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case V0:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k0:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",W);break}D=null,P=null,F=null,B=null,z.set(0,0,0),T=0,S=W,C=Te}return}St=St||Rt,ut=ut||Tt,It=It||Pt,(Rt!==y||St!==U)&&(r.blendEquationSeparate($e[Rt],$e[St]),y=Rt,U=St),(Tt!==D||Pt!==P||ut!==F||It!==B)&&(r.blendFuncSeparate(ve[Tt],ve[Pt],ve[ut],ve[It]),D=Tt,P=Pt,F=ut,B=It),(ne.equals(z)===!1||Pe!==T)&&(r.blendColor(ne.r,ne.g,ne.b,Pe),z.copy(ne),T=Pe),S=W,C=!1}function Ue(W,Rt){W.side===ba?bt(r.CULL_FACE):vt(r.CULL_FACE);let Tt=W.side===jn;Rt&&(Tt=!Tt),oe(Tt),W.blending===Zr&&W.transparent===!1?pe(Aa):pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Pt=W.stencilWrite;p.setTest(Pt),Pt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),je(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){ot!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),ot=W)}function Je(W){W!==qM?(vt(r.CULL_FACE),W!==H&&(W===H0?r.cullFace(r.BACK):W===YM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),H=W}function V(W){W!==q&&(N&&r.lineWidth(W),q=W)}function je(W,Rt,Tt){W?(vt(r.POLYGON_OFFSET_FILL),(J!==Rt||st!==Tt)&&(J=Rt,st=Tt,h.getReversed()&&(Rt=-Rt),r.polygonOffset(Rt,Tt))):bt(r.POLYGON_OFFSET_FILL)}function Ee(W){W?vt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function Ne(W){W===void 0&&(W=r.TEXTURE0+Q-1),dt!==W&&(r.activeTexture(W),dt=W)}function Wt(W,Rt,Tt){Tt===void 0&&(dt===null?Tt=r.TEXTURE0+Q-1:Tt=dt);let Pt=Et[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Et[Tt]=Pt),(Pt.type!==W||Pt.texture!==Rt)&&(dt!==Tt&&(r.activeTexture(Tt),dt=Tt),r.bindTexture(W,Rt||it[W]),Pt.type=W,Pt.texture=Rt)}function L(){const W=Et[dt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function pt(){try{r.texSubImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function xt(){try{r.texSubImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function Ct(){try{r.texStorage2D(...arguments)}catch(W){be("WebGLState:",W)}}function jt(){try{r.texStorage3D(...arguments)}catch(W){be("WebGLState:",W)}}function $t(){try{r.texImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function Mt(){try{r.texImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function yt(W){_t.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Nt(W){At.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Lt(W,Rt){let Tt=d.get(Rt);Tt===void 0&&(Tt=new WeakMap,d.set(Rt,Tt));let Pt=Tt.get(W);Pt===void 0&&(Pt=r.getUniformBlockIndex(Rt,W.name),Tt.set(W,Pt))}function Ot(W,Rt){const Pt=d.get(Rt).get(W);m.get(Rt)!==Pt&&(r.uniformBlockBinding(Rt,Pt,W.__bindingPointIndex),m.set(Rt,Pt))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},dt=null,Et={},x={},_=new WeakMap,E=[],b=null,w=!1,S=null,y=null,D=null,P=null,U=null,F=null,B=null,z=new De(0,0,0),T=0,C=!1,ot=null,H=null,q=null,J=null,st=null,_t.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:vt,disable:bt,bindFramebuffer:Vt,drawBuffers:Zt,useProgram:Jt,setBlending:pe,setMaterial:Ue,setFlipSided:oe,setCullFace:Je,setLineWidth:V,setPolygonOffset:je,setScissorTest:Ee,activeTexture:Ne,bindTexture:Wt,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:Y,texImage2D:$t,texImage3D:Mt,updateUBOMapping:Lt,uniformBlockBinding:Ot,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ft,compressedTexSubImage3D:kt,scissor:yt,viewport:Nt,reset:ce}}function nC(r,t,n,a,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new te,v=new WeakMap;let x;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,M){return E?new OffscreenCanvas(L,M):vu("canvas")}function w(L,M,Y){let pt=1;const xt=Wt(L);if((xt.width>Y||xt.height>Y)&&(pt=Y/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ft=Math.floor(pt*xt.width),kt=Math.floor(pt*xt.height);x===void 0&&(x=b(ft,kt));const Ct=M?b(ft,kt):x;return Ct.width=ft,Ct.height=kt,Ct.getContext("2d").drawImage(L,0,0,ft,kt),ae("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ft+"x"+kt+")."),Ct}else return"data"in L&&ae("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){r.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(L,M,Y,pt,xt=!1){if(L!==null){if(r[L]!==void 0)return r[L];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=M;if(M===r.RED&&(Y===r.FLOAT&&(ft=r.R32F),Y===r.HALF_FLOAT&&(ft=r.R16F),Y===r.UNSIGNED_BYTE&&(ft=r.R8)),M===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ft=r.R8UI),Y===r.UNSIGNED_SHORT&&(ft=r.R16UI),Y===r.UNSIGNED_INT&&(ft=r.R32UI),Y===r.BYTE&&(ft=r.R8I),Y===r.SHORT&&(ft=r.R16I),Y===r.INT&&(ft=r.R32I)),M===r.RG&&(Y===r.FLOAT&&(ft=r.RG32F),Y===r.HALF_FLOAT&&(ft=r.RG16F),Y===r.UNSIGNED_BYTE&&(ft=r.RG8)),M===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ft=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ft=r.RG16UI),Y===r.UNSIGNED_INT&&(ft=r.RG32UI),Y===r.BYTE&&(ft=r.RG8I),Y===r.SHORT&&(ft=r.RG16I),Y===r.INT&&(ft=r.RG32I)),M===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),Y===r.UNSIGNED_INT&&(ft=r.RGB32UI),Y===r.BYTE&&(ft=r.RGB8I),Y===r.SHORT&&(ft=r.RGB16I),Y===r.INT&&(ft=r.RGB32I)),M===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ft=r.RGBA32UI),Y===r.BYTE&&(ft=r.RGBA8I),Y===r.SHORT&&(ft=r.RGBA16I),Y===r.INT&&(ft=r.RGBA32I)),M===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),M===r.RGBA){const kt=xt?_u:Ae.getTransfer(pt);Y===r.FLOAT&&(ft=r.RGBA32F),Y===r.HALF_FLOAT&&(ft=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ft=kt===Ie?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function U(L,M){let Y;return L?M===null||M===Qi||M===hl?Y=r.DEPTH24_STENCIL8:M===Wi?Y=r.DEPTH32F_STENCIL8:M===fl&&(Y=r.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Qi||M===hl?Y=r.DEPTH_COMPONENT24:M===Wi?Y=r.DEPTH_COMPONENT32F:M===fl&&(Y=r.DEPTH_COMPONENT16),Y}function F(L,M){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Rn&&L.minFilter!==Un?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function B(L){const M=L.target;M.removeEventListener("dispose",B),T(M),M.isVideoTexture&&v.delete(M)}function z(L){const M=L.target;M.removeEventListener("dispose",z),ot(M)}function T(L){const M=a.get(L);if(M.__webglInit===void 0)return;const Y=L.source,pt=_.get(Y);if(pt){const xt=pt[M.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(L),Object.keys(pt).length===0&&_.delete(Y)}a.remove(L)}function C(L){const M=a.get(L);r.deleteTexture(M.__webglTexture);const Y=L.source,pt=_.get(Y);delete pt[M.__cacheKey],h.memory.textures--}function ot(L){const M=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(M.__webglFramebuffer[pt]))for(let xt=0;xt<M.__webglFramebuffer[pt].length;xt++)r.deleteFramebuffer(M.__webglFramebuffer[pt][xt]);else r.deleteFramebuffer(M.__webglFramebuffer[pt]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[pt])}else{if(Array.isArray(M.__webglFramebuffer))for(let pt=0;pt<M.__webglFramebuffer.length;pt++)r.deleteFramebuffer(M.__webglFramebuffer[pt]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pt=0;pt<M.__webglColorRenderbuffer.length;pt++)M.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[pt]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=L.textures;for(let pt=0,xt=Y.length;pt<xt;pt++){const ft=a.get(Y[pt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),h.memory.textures--),a.remove(Y[pt])}a.remove(L)}let H=0;function q(){H=0}function J(){const L=H;return L>=l.maxTextures&&ae("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function st(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function Q(L,M){const Y=a.get(L);if(L.isVideoTexture&&Ee(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){const pt=L.image;if(pt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{it(Y,L,M);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+M)}function N(L,M){const Y=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){it(Y,L,M);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+M)}function I(L,M){const Y=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){it(Y,L,M);return}n.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+M)}function ct(L,M){const Y=a.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Y.__version!==L.version){vt(Y,L,M);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+M)}const dt={[Fd]:r.REPEAT,[Ta]:r.CLAMP_TO_EDGE,[Hd]:r.MIRRORED_REPEAT},Et={[Rn]:r.NEAREST,[mE]:r.NEAREST_MIPMAP_NEAREST,[Lc]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[Wh]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},O={[xE]:r.NEVER,[bE]:r.ALWAYS,[yE]:r.LESS,[Ip]:r.LEQUAL,[SE]:r.EQUAL,[Fp]:r.GEQUAL,[ME]:r.GREATER,[EE]:r.NOTEQUAL};function j(L,M){if(M.type===Wi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Un||M.magFilter===Wh||M.magFilter===Lc||M.magFilter===Vs||M.minFilter===Un||M.minFilter===Wh||M.minFilter===Lc||M.minFilter===Vs)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,dt[M.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,dt[M.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,dt[M.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Et[M.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Et[M.minFilter]),M.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rn||M.minFilter!==Lc&&M.minFilter!==Vs||M.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function _t(L,M){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",B));const pt=M.source;let xt=_.get(pt);xt===void 0&&(xt={},_.set(pt,xt));const ft=st(M);if(ft!==L.__cacheKey){xt[ft]===void 0&&(xt[ft]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),xt[ft].usedTimes++;const kt=xt[L.__cacheKey];kt!==void 0&&(xt[L.__cacheKey].usedTimes--,kt.usedTimes===0&&C(M)),L.__cacheKey=ft,L.__webglTexture=xt[ft].texture}return Y}function At(L,M,Y){return Math.floor(Math.floor(L/Y)/M)}function Bt(L,M,Y,pt){const ft=L.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,Y,pt,M.data);else{ft.sort((Mt,yt)=>Mt.start-yt.start);let kt=0;for(let Mt=1;Mt<ft.length;Mt++){const yt=ft[kt],Nt=ft[Mt],Lt=yt.start+yt.count,Ot=At(Nt.start,M.width,4),ce=At(yt.start,M.width,4);Nt.start<=Lt+1&&Ot===ce&&At(Nt.start+Nt.count-1,M.width,4)===Ot?yt.count=Math.max(yt.count,Nt.start+Nt.count-yt.start):(++kt,ft[kt]=Nt)}ft.length=kt+1;const Ct=r.getParameter(r.UNPACK_ROW_LENGTH),jt=r.getParameter(r.UNPACK_SKIP_PIXELS),$t=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Mt=0,yt=ft.length;Mt<yt;Mt++){const Nt=ft[Mt],Lt=Math.floor(Nt.start/4),Ot=Math.ceil(Nt.count/4),ce=Lt%M.width,W=Math.floor(Lt/M.width),Rt=Ot,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,ce,W,Rt,Tt,Y,pt,M.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,$t)}}function it(L,M,Y){let pt=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pt=r.TEXTURE_3D);const xt=_t(L,M),ft=M.source;n.bindTexture(pt,L.__webglTexture,r.TEXTURE0+Y);const kt=a.get(ft);if(ft.version!==kt.__version||xt===!0){n.activeTexture(r.TEXTURE0+Y);const Ct=Ae.getPrimaries(Ae.workingColorSpace),jt=M.colorSpace===us?null:Ae.getPrimaries(M.colorSpace),$t=M.colorSpace===us||Ct===jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Mt=w(M.image,!1,l.maxTextureSize);Mt=Ne(M,Mt);const yt=c.convert(M.format,M.colorSpace),Nt=c.convert(M.type);let Lt=P(M.internalFormat,yt,Nt,M.colorSpace,M.isVideoTexture);j(pt,M);let Ot;const ce=M.mipmaps,W=M.isVideoTexture!==!0,Rt=kt.__version===void 0||xt===!0,Tt=ft.dataReady,Pt=F(M,Mt);if(M.isDepthTexture)Lt=U(M.format===ks,M.type),Rt&&(W?n.texStorage2D(r.TEXTURE_2D,1,Lt,Mt.width,Mt.height):n.texImage2D(r.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,yt,Nt,null));else if(M.isDataTexture)if(ce.length>0){W&&Rt&&n.texStorage2D(r.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let St=0,ut=ce.length;St<ut;St++)Ot=ce[St],W?Tt&&n.texSubImage2D(r.TEXTURE_2D,St,0,0,Ot.width,Ot.height,yt,Nt,Ot.data):n.texImage2D(r.TEXTURE_2D,St,Lt,Ot.width,Ot.height,0,yt,Nt,Ot.data);M.generateMipmaps=!1}else W?(Rt&&n.texStorage2D(r.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height),Tt&&Bt(M,Mt,yt,Nt)):n.texImage2D(r.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,yt,Nt,Mt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){W&&Rt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Lt,ce[0].width,ce[0].height,Mt.depth);for(let St=0,ut=ce.length;St<ut;St++)if(Ot=ce[St],M.format!==Oi)if(yt!==null)if(W){if(Tt)if(M.layerUpdates.size>0){const It=vv(Ot.width,Ot.height,M.format,M.type);for(const ne of M.layerUpdates){const Pe=Ot.data.subarray(ne*It/Ot.data.BYTES_PER_ELEMENT,(ne+1)*It/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,ne,Ot.width,Ot.height,1,yt,Pe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Ot.width,Ot.height,Mt.depth,yt,Ot.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,St,Lt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Ot.width,Ot.height,Mt.depth,yt,Nt,Ot.data):n.texImage3D(r.TEXTURE_2D_ARRAY,St,Lt,Ot.width,Ot.height,Mt.depth,0,yt,Nt,Ot.data)}else{W&&Rt&&n.texStorage2D(r.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let St=0,ut=ce.length;St<ut;St++)Ot=ce[St],M.format!==Oi?yt!==null?W?Tt&&n.compressedTexSubImage2D(r.TEXTURE_2D,St,0,0,Ot.width,Ot.height,yt,Ot.data):n.compressedTexImage2D(r.TEXTURE_2D,St,Lt,Ot.width,Ot.height,0,Ot.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&n.texSubImage2D(r.TEXTURE_2D,St,0,0,Ot.width,Ot.height,yt,Nt,Ot.data):n.texImage2D(r.TEXTURE_2D,St,Lt,Ot.width,Ot.height,0,yt,Nt,Ot.data)}else if(M.isDataArrayTexture)if(W){if(Rt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Lt,Mt.width,Mt.height,Mt.depth),Tt)if(M.layerUpdates.size>0){const St=vv(Mt.width,Mt.height,M.format,M.type);for(const ut of M.layerUpdates){const It=Mt.data.subarray(ut*St/Mt.data.BYTES_PER_ELEMENT,(ut+1)*St/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ut,Mt.width,Mt.height,1,yt,Nt,It)}M.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,yt,Nt,Mt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,Mt.width,Mt.height,Mt.depth,0,yt,Nt,Mt.data);else if(M.isData3DTexture)W?(Rt&&n.texStorage3D(r.TEXTURE_3D,Pt,Lt,Mt.width,Mt.height,Mt.depth),Tt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,yt,Nt,Mt.data)):n.texImage3D(r.TEXTURE_3D,0,Lt,Mt.width,Mt.height,Mt.depth,0,yt,Nt,Mt.data);else if(M.isFramebufferTexture){if(Rt)if(W)n.texStorage2D(r.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height);else{let St=Mt.width,ut=Mt.height;for(let It=0;It<Pt;It++)n.texImage2D(r.TEXTURE_2D,It,Lt,St,ut,0,yt,Nt,null),St>>=1,ut>>=1}}else if(ce.length>0){if(W&&Rt){const St=Wt(ce[0]);n.texStorage2D(r.TEXTURE_2D,Pt,Lt,St.width,St.height)}for(let St=0,ut=ce.length;St<ut;St++)Ot=ce[St],W?Tt&&n.texSubImage2D(r.TEXTURE_2D,St,0,0,yt,Nt,Ot):n.texImage2D(r.TEXTURE_2D,St,Lt,yt,Nt,Ot);M.generateMipmaps=!1}else if(W){if(Rt){const St=Wt(Mt);n.texStorage2D(r.TEXTURE_2D,Pt,Lt,St.width,St.height)}Tt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,Nt,Mt)}else n.texImage2D(r.TEXTURE_2D,0,Lt,yt,Nt,Mt);S(M)&&y(pt),kt.__version=ft.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function vt(L,M,Y){if(M.image.length!==6)return;const pt=_t(L,M),xt=M.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Y);const ft=a.get(xt);if(xt.version!==ft.__version||pt===!0){n.activeTexture(r.TEXTURE0+Y);const kt=Ae.getPrimaries(Ae.workingColorSpace),Ct=M.colorSpace===us?null:Ae.getPrimaries(M.colorSpace),jt=M.colorSpace===us||kt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const $t=M.isCompressedTexture||M.image[0].isCompressedTexture,Mt=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let ut=0;ut<6;ut++)!$t&&!Mt?yt[ut]=w(M.image[ut],!0,l.maxCubemapSize):yt[ut]=Mt?M.image[ut].image:M.image[ut],yt[ut]=Ne(M,yt[ut]);const Nt=yt[0],Lt=c.convert(M.format,M.colorSpace),Ot=c.convert(M.type),ce=P(M.internalFormat,Lt,Ot,M.colorSpace),W=M.isVideoTexture!==!0,Rt=ft.__version===void 0||pt===!0,Tt=xt.dataReady;let Pt=F(M,Nt);j(r.TEXTURE_CUBE_MAP,M);let St;if($t){W&&Rt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,ce,Nt.width,Nt.height);for(let ut=0;ut<6;ut++){St=yt[ut].mipmaps;for(let It=0;It<St.length;It++){const ne=St[It];M.format!==Oi?Lt!==null?W?Tt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,ne.width,ne.height,Lt,ne.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,ce,ne.width,ne.height,0,ne.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,ne.width,ne.height,Lt,Ot,ne.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,ce,ne.width,ne.height,0,Lt,Ot,ne.data)}}}else{if(St=M.mipmaps,W&&Rt){St.length>0&&Pt++;const ut=Wt(yt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,ce,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Mt){W?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,yt[ut].width,yt[ut].height,Lt,Ot,yt[ut].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ce,yt[ut].width,yt[ut].height,0,Lt,Ot,yt[ut].data);for(let It=0;It<St.length;It++){const Pe=St[It].image[ut].image;W?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,Pe.width,Pe.height,Lt,Ot,Pe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,ce,Pe.width,Pe.height,0,Lt,Ot,Pe.data)}}else{W?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Lt,Ot,yt[ut]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ce,Lt,Ot,yt[ut]);for(let It=0;It<St.length;It++){const ne=St[It];W?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,Lt,Ot,ne.image[ut]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,ce,Lt,Ot,ne.image[ut])}}}S(M)&&y(r.TEXTURE_CUBE_MAP),ft.__version=xt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function bt(L,M,Y,pt,xt,ft){const kt=c.convert(Y.format,Y.colorSpace),Ct=c.convert(Y.type),jt=P(Y.internalFormat,kt,Ct,Y.colorSpace),$t=a.get(M),Mt=a.get(Y);if(Mt.__renderTarget=M,!$t.__hasExternalTextures){const yt=Math.max(1,M.width>>ft),Nt=Math.max(1,M.height>>ft);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?n.texImage3D(xt,ft,jt,yt,Nt,M.depth,0,kt,Ct,null):n.texImage2D(xt,ft,jt,yt,Nt,0,kt,Ct,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),je(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,xt,Mt.__webglTexture,0,V(M)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,xt,Mt.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(L,M,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,L),M.depthBuffer){const pt=M.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ft=U(M.stencilBuffer,xt),kt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;je(M)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(M),ft,M.width,M.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(M),ft,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ft,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,kt,r.RENDERBUFFER,L)}else{const pt=M.textures;for(let xt=0;xt<pt.length;xt++){const ft=pt[xt],kt=c.convert(ft.format,ft.colorSpace),Ct=c.convert(ft.type),jt=P(ft.internalFormat,kt,Ct,ft.colorSpace);je(M)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(M),jt,M.width,M.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(M),jt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,jt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Zt(L,M,Y){const pt=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=a.get(M.depthTexture);if(xt.__renderTarget=M,(!xt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),xt.__webglTexture===void 0){xt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),j(r.TEXTURE_CUBE_MAP,M.depthTexture);const $t=c.convert(M.depthTexture.format),Mt=c.convert(M.depthTexture.type);let yt;M.depthTexture.format===wa?yt=r.DEPTH_COMPONENT24:M.depthTexture.format===ks&&(yt=r.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,yt,M.width,M.height,0,$t,Mt,null)}}else Q(M.depthTexture,0);const ft=xt.__webglTexture,kt=V(M),Ct=pt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,jt=M.depthTexture.format===ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===wa)je(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Ct,ft,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Ct,ft,0);else if(M.depthTexture.format===ks)je(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Ct,ft,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Ct,ft,0);else throw new Error("Unknown depthTexture format")}function Jt(L){const M=a.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pt){const xt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),M.__depthDisposeCallback=xt}M.__boundDepthTexture=pt}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let pt=0;pt<6;pt++)Zt(M.__webglFramebuffer[pt],L,pt);else{const pt=L.texture.mipmaps;pt&&pt.length>0?Zt(M.__webglFramebuffer[0],L,0):Zt(M.__webglFramebuffer,L,0)}else if(Y){M.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[pt]),M.__webglDepthbuffer[pt]===void 0)M.__webglDepthbuffer[pt]=r.createRenderbuffer(),Vt(M.__webglDepthbuffer[pt],L,!1);else{const xt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ft)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Vt(M.__webglDepthbuffer,L,!1);else{const xt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(L,M,Y){const pt=a.get(L);M!==void 0&&bt(pt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Jt(L)}function ve(L){const M=L.texture,Y=a.get(L),pt=a.get(M);L.addEventListener("dispose",z);const xt=L.textures,ft=L.isWebGLCubeRenderTarget===!0,kt=xt.length>1;if(kt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=M.version,h.memory.textures++),ft){Y.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[Ct]=[];for(let jt=0;jt<M.mipmaps.length;jt++)Y.__webglFramebuffer[Ct][jt]=r.createFramebuffer()}else Y.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)Y.__webglFramebuffer[Ct]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(kt)for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=a.get(xt[Ct]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&je(L)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const jt=xt[Ct];Y.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct]);const $t=c.convert(jt.format,jt.colorSpace),Mt=c.convert(jt.type),yt=P(jt.internalFormat,$t,Mt,jt.colorSpace,L.isXRRenderTarget===!0),Nt=V(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,yt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(Y.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),j(r.TEXTURE_CUBE_MAP,M);for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let jt=0;jt<M.mipmaps.length;jt++)bt(Y.__webglFramebuffer[Ct][jt],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else bt(Y.__webglFramebuffer[Ct],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);S(M)&&y(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(kt){for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=xt[Ct],Mt=a.get($t);let yt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(yt,Mt.__webglTexture),j(yt,$t),bt(Y.__webglFramebuffer,L,$t,r.COLOR_ATTACHMENT0+Ct,yt,0),S($t)&&y(yt)}n.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ct,pt.__webglTexture),j(Ct,M),M.mipmaps&&M.mipmaps.length>0)for(let jt=0;jt<M.mipmaps.length;jt++)bt(Y.__webglFramebuffer[jt],L,M,r.COLOR_ATTACHMENT0,Ct,jt);else bt(Y.__webglFramebuffer,L,M,r.COLOR_ATTACHMENT0,Ct,0);S(M)&&y(Ct),n.unbindTexture()}L.depthBuffer&&Jt(L)}function pe(L){const M=L.textures;for(let Y=0,pt=M.length;Y<pt;Y++){const xt=M[Y];if(S(xt)){const ft=D(L),kt=a.get(xt).__webglTexture;n.bindTexture(ft,kt),y(ft),n.unbindTexture()}}}const Ue=[],oe=[];function Je(L){if(L.samples>0){if(je(L)===!1){const M=L.textures,Y=L.width,pt=L.height;let xt=r.COLOR_BUFFER_BIT;const ft=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,kt=a.get(L),Ct=M.length>1;if(Ct)for(let $t=0;$t<M.length;$t++)n.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const jt=L.texture.mipmaps;jt&&jt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let $t=0;$t<M.length;$t++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,kt.__webglColorRenderbuffer[$t]);const Mt=a.get(M[$t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,Y,pt,0,0,Y,pt,xt,r.NEAREST),m===!0&&(Ue.length=0,oe.length=0,Ue.push(r.COLOR_ATTACHMENT0+$t),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ue.push(ft),oe.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let $t=0;$t<M.length;$t++){n.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,kt.__webglColorRenderbuffer[$t]);const Mt=a.get(M[$t]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,Mt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const M=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function je(L){const M=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ee(L){const M=h.render.frame;v.get(L)!==M&&(v.set(L,M),L.update())}function Ne(L,M){const Y=L.colorSpace,pt=L.format,xt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==to&&Y!==us&&(Ae.getTransfer(Y)===Ie?(pt!==Oi||xt!==oi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",Y)),M}function Wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=N,this.setTexture3D=I,this.setTextureCube=ct,this.rebindTextures=$e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iC(r,t){function n(a,l=us){let c;const h=Ae.getTransfer(l);if(a===oi)return r.UNSIGNED_BYTE;if(a===Np)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Op)return r.UNSIGNED_SHORT_5_5_5_1;if(a===mx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===gx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===dx)return r.BYTE;if(a===px)return r.SHORT;if(a===fl)return r.UNSIGNED_SHORT;if(a===Lp)return r.INT;if(a===Qi)return r.UNSIGNED_INT;if(a===Wi)return r.FLOAT;if(a===Ca)return r.HALF_FLOAT;if(a===_x)return r.ALPHA;if(a===vx)return r.RGB;if(a===Oi)return r.RGBA;if(a===wa)return r.DEPTH_COMPONENT;if(a===ks)return r.DEPTH_STENCIL;if(a===xx)return r.RED;if(a===Pp)return r.RED_INTEGER;if(a===$r)return r.RG;if(a===Bp)return r.RG_INTEGER;if(a===zp)return r.RGBA_INTEGER;if(a===fu||a===hu||a===du||a===pu)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===fu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===fu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===hu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===pu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Gd||a===Vd||a===kd||a===Xd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Vd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===kd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Wd||a===qd||a===Yd||a===jd||a===Zd||a===Kd||a===Qd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Wd||a===qd)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Yd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===jd)return c.COMPRESSED_R11_EAC;if(a===Zd)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Kd)return c.COMPRESSED_RG11_EAC;if(a===Qd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Jd||a===$d||a===tp||a===ep||a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp||a===cp||a===up||a===fp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Jd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===$d)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===tp)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ep)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===np)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ip)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ap)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===sp)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===rp)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===op)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===lp)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===cp)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===up)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===fp)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===hp||a===dp||a===pp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===hp)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===dp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===pp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===mp||a===gp||a===_p||a===vp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===mp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===gp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===_p)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===vp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===hl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const aC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sC=`
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

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new wx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new $i({vertexShader:aC,fragmentShader:sC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ji(new Ru(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends Ws{constructor(t,n){super();const a=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,x=null,_=null,E=null,b=null;const w=typeof XRWebGLBinding<"u",S=new rC,y={},D=n.getContextAttributes();let P=null,U=null;const F=[],B=[],z=new te;let T=null;const C=new ri;C.viewport=new nn;const ot=new ri;ot.viewport=new nn;const H=[C,ot],q=new _b;let J=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let vt=F[it];return vt===void 0&&(vt=new Jh,F[it]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(it){let vt=F[it];return vt===void 0&&(vt=new Jh,F[it]=vt),vt.getGripSpace()},this.getHand=function(it){let vt=F[it];return vt===void 0&&(vt=new Jh,F[it]=vt),vt.getHandSpace()};function Q(it){const vt=B.indexOf(it.inputSource);if(vt===-1)return;const bt=F[vt];bt!==void 0&&(bt.update(it.inputSource,it.frame,d||h),bt.dispatchEvent({type:it.type,data:it.inputSource}))}function N(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",I);for(let it=0;it<F.length;it++){const vt=B[it];vt!==null&&(B[it]=null,F[it].disconnect(vt))}J=null,st=null,S.reset();for(const it in y)delete y[it];t.setRenderTarget(P),E=null,_=null,x=null,l=null,U=null,Bt.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,a.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){p=it,a.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,n)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",N),l.addEventListener("inputsourceschange",I),D.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Vt=null,Zt=null;D.depth&&(Zt=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,bt=D.stencil?ks:wa,Vt=D.stencil?hl:Qi);const Jt={colorFormat:n.RGBA8,depthFormat:Zt,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(Jt),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new Zi(_.textureWidth,_.textureHeight,{format:Oi,type:oi,depthTexture:new pl(_.textureWidth,_.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const bt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,n,bt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new Zi(E.framebufferWidth,E.framebufferHeight,{format:Oi,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Bt.setContext(l),Bt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function I(it){for(let vt=0;vt<it.removed.length;vt++){const bt=it.removed[vt],Vt=B.indexOf(bt);Vt>=0&&(B[Vt]=null,F[Vt].disconnect(bt))}for(let vt=0;vt<it.added.length;vt++){const bt=it.added[vt];let Vt=B.indexOf(bt);if(Vt===-1){for(let Jt=0;Jt<F.length;Jt++)if(Jt>=B.length){B.push(bt),Vt=Jt;break}else if(B[Jt]===null){B[Jt]=bt,Vt=Jt;break}if(Vt===-1)break}const Zt=F[Vt];Zt&&Zt.connect(bt)}}const ct=new K,dt=new K;function Et(it,vt,bt){ct.setFromMatrixPosition(vt.matrixWorld),dt.setFromMatrixPosition(bt.matrixWorld);const Vt=ct.distanceTo(dt),Zt=vt.projectionMatrix.elements,Jt=bt.projectionMatrix.elements,$e=Zt[14]/(Zt[10]-1),ve=Zt[14]/(Zt[10]+1),pe=(Zt[9]+1)/Zt[5],Ue=(Zt[9]-1)/Zt[5],oe=(Zt[8]-1)/Zt[0],Je=(Jt[8]+1)/Jt[0],V=$e*oe,je=$e*Je,Ee=Vt/(-oe+Je),Ne=Ee*-oe;if(vt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ne),it.translateZ(Ee),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Zt[10]===-1)it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Wt=$e+Ee,L=ve+Ee,M=V-Ne,Y=je+(Vt-Ne),pt=pe*ve/L*Wt,xt=Ue*ve/L*Wt;it.projectionMatrix.makePerspective(M,Y,pt,xt,Wt,L),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function O(it,vt){vt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(vt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let vt=it.near,bt=it.far;S.texture!==null&&(S.depthNear>0&&(vt=S.depthNear),S.depthFar>0&&(bt=S.depthFar)),q.near=ot.near=C.near=vt,q.far=ot.far=C.far=bt,(J!==q.near||st!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),J=q.near,st=q.far),q.layers.mask=it.layers.mask|6,C.layers.mask=q.layers.mask&-5,ot.layers.mask=q.layers.mask&-3;const Vt=it.parent,Zt=q.cameras;O(q,Vt);for(let Jt=0;Jt<Zt.length;Jt++)O(Zt[Jt],Vt);Zt.length===2?Et(q,C,ot):q.projectionMatrix.copy(C.projectionMatrix),j(it,q,Vt)};function j(it,vt,bt){bt===null?it.matrix.copy(vt.matrixWorld):(it.matrix.copy(bt.matrixWorld),it.matrix.invert(),it.matrix.multiply(vt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=yp*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(it){m=it,_!==null&&(_.fixedFoveation=it),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(it){return y[it]};let _t=null;function At(it,vt){if(v=vt.getViewerPose(d||h),b=vt,v!==null){const bt=v.views;E!==null&&(t.setRenderTargetFramebuffer(U,E.framebuffer),t.setRenderTarget(U));let Vt=!1;bt.length!==q.cameras.length&&(q.cameras.length=0,Vt=!0);for(let ve=0;ve<bt.length;ve++){const pe=bt[ve];let Ue=null;if(E!==null)Ue=E.getViewport(pe);else{const Je=x.getViewSubImage(_,pe);Ue=Je.viewport,ve===0&&(t.setRenderTargetTextures(U,Je.colorTexture,Je.depthStencilTexture),t.setRenderTarget(U))}let oe=H[ve];oe===void 0&&(oe=new ri,oe.layers.enable(ve),oe.viewport=new nn,H[ve]=oe),oe.matrix.fromArray(pe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(pe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ve===0&&(q.matrix.copy(oe.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Vt===!0&&q.cameras.push(oe)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=a.getBinding();const ve=x.getDepthInformation(bt[0]);ve&&ve.isValid&&ve.texture&&S.init(ve,l.renderState)}if(Zt&&Zt.includes("camera-access")&&w){t.state.unbindTexture(),x=a.getBinding();for(let ve=0;ve<bt.length;ve++){const pe=bt[ve].camera;if(pe){let Ue=y[pe];Ue||(Ue=new wx,y[pe]=Ue);const oe=x.getCameraImage(pe);Ue.sourceTexture=oe}}}}for(let bt=0;bt<F.length;bt++){const Vt=B[bt],Zt=F[bt];Vt!==null&&Zt!==void 0&&Zt.update(Vt,vt,d||h)}_t&&_t(it,vt),vt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:vt}),b=null}const Bt=new Nx;Bt.setAnimationLoop(At),this.setAnimationLoop=function(it){_t=it},this.dispose=function(){}}}const Fs=new Da,lC=new Ye;function cC(r,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,Dx(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,D,P,U){y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),x(S,y)):y.isMeshPhongMaterial?(c(S,y),v(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),_(S,y),y.isMeshPhysicalMaterial&&E(S,y,U)):y.isMeshMatcapMaterial?(c(S,y),b(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),w(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(h(S,y),y.isLineDashedMaterial&&p(S,y)):y.isPointsMaterial?m(S,y,D,P):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===jn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===jn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=t.get(y),P=D.envMap,U=D.envMapRotation;P&&(S.envMap.value=P,Fs.copy(U),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),S.envMapRotation.value.setFromMatrix4(lC.makeRotationFromEuler(Fs)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function p(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,D,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=P*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function x(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function E(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===jn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,y){y.matcap&&(S.matcap.value=y.matcap)}function w(S,y){const D=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function uC(r,t,n,a){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,P){const U=P.program;a.uniformBlockBinding(D,U)}function d(D,P){let U=l[D.id];U===void 0&&(b(D),U=v(D),l[D.id]=U,D.addEventListener("dispose",S));const F=P.program;a.updateUBOMapping(D,F);const B=t.render.frame;c[D.id]!==B&&(_(D),c[D.id]=B)}function v(D){const P=x();D.__bindingPointIndex=P;const U=r.createBuffer(),F=D.__size,B=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,U),U}function x(){for(let D=0;D<p;D++)if(h.indexOf(D)===-1)return h.push(D),D;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const P=l[D.id],U=D.uniforms,F=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let B=0,z=U.length;B<z;B++){const T=Array.isArray(U[B])?U[B]:[U[B]];for(let C=0,ot=T.length;C<ot;C++){const H=T[C];if(E(H,B,C,F)===!0){const q=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let st=0;for(let Q=0;Q<J.length;Q++){const N=J[Q],I=w(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,q+st,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,st),st+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(D,P,U,F){const B=D.value,z=P+"_"+U;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const T=F[z];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return F[z]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function b(D){const P=D.uniforms;let U=0;const F=16;for(let z=0,T=P.length;z<T;z++){const C=Array.isArray(P[z])?P[z]:[P[z]];for(let ot=0,H=C.length;ot<H;ot++){const q=C[ot],J=Array.isArray(q.value)?q.value:[q.value];for(let st=0,Q=J.length;st<Q;st++){const N=J[st],I=w(N),ct=U%F,dt=ct%I.boundary,Et=ct+dt;U+=dt,Et!==0&&F-Et<I.storage&&(U+=F-Et),q.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=U,U+=I.storage}}}const B=U%F;return B>0&&(U+=F-B),D.__size=U,D.__cache={},this}function w(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",D),P}function S(D){const P=D.target;P.removeEventListener("dispose",S);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function y(){for(const D in l)r.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:d,dispose:y}}const fC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function hC(){return Vi===null&&(Vi=new JE(fC,16,16,$r,Ca),Vi.name="DFG_LUT",Vi.minFilter=Un,Vi.magFilter=Un,Vi.wrapS=Ta,Vi.wrapT=Ta,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class dC{constructor(t={}){const{canvas:n=AE(),context:a=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:E=oi}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=h;const w=E,S=new Set([zp,Bp,Pp]),y=new Set([oi,Qi,fl,hl,Np,Op]),D=new Uint32Array(4),P=new Int32Array(4);let U=null,F=null;const B=[],z=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let ot=!1;this._outputColorSpace=yi;let H=0,q=0,J=null,st=-1,Q=null;const N=new nn,I=new nn;let ct=null;const dt=new De(0);let Et=0,O=n.width,j=n.height,_t=1,At=null,Bt=null;const it=new nn(0,0,O,j),vt=new nn(0,0,O,j);let bt=!1;const Vt=new Xp;let Zt=!1,Jt=!1;const $e=new Ye,ve=new K,pe=new nn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Je(){return J===null?_t:1}let V=a;function je(R,X){return n.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Up}`),n.addEventListener("webglcontextlost",It,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),V===null){const X="webgl2";if(V=je(X,R),V===null)throw je(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw be("WebGLRenderer: "+R.message),R}let Ee,Ne,Wt,L,M,Y,pt,xt,ft,kt,Ct,jt,$t,Mt,yt,Nt,Lt,Ot,ce,W,Rt,Tt,Pt;function St(){Ee=new d1(V),Ee.init(),Rt=new iC(V,Ee),Ne=new s1(V,Ee,t,Rt),Wt=new eC(V,Ee),Ne.reversedDepthBuffer&&_&&Wt.buffers.depth.setReversed(!0),L=new g1(V),M=new GR,Y=new nC(V,Ee,Wt,M,Ne,Rt,L),pt=new h1(C),xt=new Sb(V),Tt=new i1(V,xt),ft=new p1(V,xt,L,Tt),kt=new v1(V,ft,xt,Tt,L),Ot=new _1(V,Ne,Y),yt=new r1(M),Ct=new HR(C,pt,Ee,Ne,Tt,yt),jt=new cC(C,M),$t=new kR,Mt=new ZR(Ee),Lt=new n1(C,pt,Wt,kt,b,m),Nt=new tC(C,kt,Ne),Pt=new uC(V,L,Ne,Wt),ce=new a1(V,Ee,L),W=new m1(V,Ee,L),L.programs=Ct.programs,C.capabilities=Ne,C.extensions=Ee,C.properties=M,C.renderLists=$t,C.shadowMap=Nt,C.state=Wt,C.info=L}St(),w!==oi&&(T=new y1(w,n.width,n.height,l,c));const ut=new oC(C,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(O,j,!1))},this.getSize=function(R){return R.set(O,j)},this.setSize=function(R,X,rt=!0){if(ut.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,j=X,n.width=Math.floor(R*_t),n.height=Math.floor(X*_t),rt===!0&&(n.style.width=R+"px",n.style.height=X+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(O*_t,j*_t).floor()},this.setDrawingBufferSize=function(R,X,rt){O=R,j=X,_t=rt,n.width=Math.floor(R*rt),n.height=Math.floor(X*rt),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(w===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,X,rt,nt){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,X,rt,nt),Wt.viewport(N.copy(it).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,X,rt,nt){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,X,rt,nt),Wt.scissor(I.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(R){Wt.setScissorTest(bt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Bt=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,rt=!0){let nt=0;if(R){let $=!1;if(J!==null){const wt=J.texture.format;$=S.has(wt)}if($){const wt=J.texture.type,zt=y.has(wt),Dt=Lt.getClearColor(),Xt=Lt.getClearAlpha(),Yt=Dt.r,ee=Dt.g,se=Dt.b;zt?(D[0]=Yt,D[1]=ee,D[2]=se,D[3]=Xt,V.clearBufferuiv(V.COLOR,0,D)):(P[0]=Yt,P[1]=ee,P[2]=se,P[3]=Xt,V.clearBufferiv(V.COLOR,0,P))}else nt|=V.COLOR_BUFFER_BIT}X&&(nt|=V.DEPTH_BUFFER_BIT),rt&&(nt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&V.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",It,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Lt.dispose(),$t.dispose(),Mt.dispose(),M.dispose(),pt.dispose(),kt.dispose(),Tt.dispose(),Pt.dispose(),Ct.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ys),ut.removeEventListener("sessionend",js),Bi.stop()};function It(R){R.preventDefault(),xu("WebGLRenderer: Context Lost."),ot=!0}function ne(){xu("WebGLRenderer: Context Restored."),ot=!1;const R=L.autoReset,X=Nt.enabled,rt=Nt.autoUpdate,nt=Nt.needsUpdate,$=Nt.type;St(),L.autoReset=R,Nt.enabled=X,Nt.autoUpdate=rt,Nt.needsUpdate=nt,Nt.type=$}function Pe(R){be("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Te(R){const X=R.target;X.removeEventListener("dispose",Te),On(X)}function On(R){Ei(R),M.remove(R)}function Ei(R){const X=M.get(R).programs;X!==void 0&&(X.forEach(function(rt){Ct.releaseProgram(rt)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,rt,nt,$,wt){X===null&&(X=Ue);const zt=$.isMesh&&$.matrixWorld.determinant()<0,Dt=yl(R,X,rt,nt,$);Wt.setMaterial(nt,zt);let Xt=rt.index,Yt=1;if(nt.wireframe===!0){if(Xt=ft.getWireframeAttribute(rt),Xt===void 0)return;Yt=2}const ee=rt.drawRange,se=rt.attributes.position;let Ft=ee.start*Yt,ue=(ee.start+ee.count)*Yt;wt!==null&&(Ft=Math.max(Ft,wt.start*Yt),ue=Math.min(ue,(wt.start+wt.count)*Yt)),Xt!==null?(Ft=Math.max(Ft,0),ue=Math.min(ue,Xt.count)):se!=null&&(Ft=Math.max(Ft,0),ue=Math.min(ue,se.count));const Ze=ue-Ft;if(Ze<0||Ze===1/0)return;Tt.setup($,nt,Dt,rt,Xt);let Ke,Re=ce;if(Xt!==null&&(Ke=xt.get(Xt),Re=W,Re.setIndex(Ke)),$.isMesh)nt.wireframe===!0?(Wt.setLineWidth(nt.wireframeLinewidth*Je()),Re.setMode(V.LINES)):Re.setMode(V.TRIANGLES);else if($.isLine){let gn=nt.linewidth;gn===void 0&&(gn=1),Wt.setLineWidth(gn*Je()),$.isLineSegments?Re.setMode(V.LINES):$.isLineLoop?Re.setMode(V.LINE_LOOP):Re.setMode(V.LINE_STRIP)}else $.isPoints?Re.setMode(V.POINTS):$.isSprite&&Re.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)yu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Re.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const gn=$._multiDrawStarts,Gt=$._multiDrawCounts,Pn=$._multiDrawCount,ie=Xt?xt.get(Xt).bytesPerElement:1,Bn=M.get(nt).currentProgram.getUniforms();for(let Zn=0;Zn<Pn;Zn++)Bn.setValue(V,"_gl_DrawID",Zn),Re.render(gn[Zn]/ie,Gt[Zn])}else if($.isInstancedMesh)Re.renderInstances(Ft,Ze,$.count);else if(rt.isInstancedBufferGeometry){const gn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Gt=Math.min(rt.instanceCount,gn);Re.renderInstances(Ft,Ze,Gt)}else Re.render(Ft,Ze)};function so(R,X,rt){R.transparent===!0&&R.side===ba&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,Ua(R,X,rt),R.side=ps,R.needsUpdate=!0,Ua(R,X,rt),R.side=ba):Ua(R,X,rt)}this.compile=function(R,X,rt=null){rt===null&&(rt=R),F=Mt.get(rt),F.init(X),z.push(F),rt.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),R!==rt&&R.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),F.setupLights();const nt=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const wt=$.material;if(wt)if(Array.isArray(wt))for(let zt=0;zt<wt.length;zt++){const Dt=wt[zt];so(Dt,rt,$),nt.add(Dt)}else so(wt,rt,$),nt.add(wt)}),F=z.pop(),nt},this.compileAsync=function(R,X,rt=null){const nt=this.compile(R,X,rt);return new Promise($=>{function wt(){if(nt.forEach(function(zt){M.get(zt).currentProgram.isReady()&&nt.delete(zt)}),nt.size===0){$(R);return}setTimeout(wt,10)}Ee.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let qs=null;function _l(R){qs&&qs(R)}function Ys(){Bi.stop()}function js(){Bi.start()}const Bi=new Nx;Bi.setAnimationLoop(_l),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(R){qs=R,ut.setAnimationLoop(R),R===null?Bi.stop():Bi.start()},ut.addEventListener("sessionstart",Ys),ut.addEventListener("sessionend",js),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ot===!0)return;const rt=ut.enabled===!0&&ut.isPresenting===!0,nt=T!==null&&(J===null||rt)&&T.begin(C,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(X),X=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,X,J),F=Mt.get(R,z.length),F.init(X),z.push(F),$e.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Vt.setFromProjectionMatrix($e,qi,X.reversedDepth),Jt=this.localClippingEnabled,Zt=yt.init(this.clippingPlanes,Jt),U=$t.get(R,B.length),U.init(),B.push(U),ut.enabled===!0&&ut.isPresenting===!0){const zt=C.xr.getDepthSensingMesh();zt!==null&&Zs(zt,X,-1/0,C.sortObjects)}Zs(R,X,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(At,Bt),oe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,oe&&Lt.addToRenderList(U,R),this.info.render.frame++,Zt===!0&&yt.beginShadows();const $=F.state.shadowsArray;if(Nt.render($,R,X),Zt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&T.hasRenderPass())===!1){const zt=U.opaque,Dt=U.transmissive;if(F.setupLights(),X.isArrayCamera){const Xt=X.cameras;if(Dt.length>0)for(let Yt=0,ee=Xt.length;Yt<ee;Yt++){const se=Xt[Yt];rn(zt,Dt,R,se)}oe&&Lt.render(R);for(let Yt=0,ee=Xt.length;Yt<ee;Yt++){const se=Xt[Yt];bi(U,R,se,se.viewport)}}else Dt.length>0&&rn(zt,Dt,R,X),oe&&Lt.render(R),bi(U,R,X)}J!==null&&q===0&&(Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J)),nt&&T.end(C),R.isScene===!0&&R.onAfterRender(C,R,X),Tt.resetDefaultState(),st=-1,Q=null,z.pop(),z.length>0?(F=z[z.length-1],Zt===!0&&yt.setGlobalState(C.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?U=B[B.length-1]:U=null};function Zs(R,X,rt,nt){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){nt&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4($e);const zt=kt.update(R),Dt=R.material;Dt.visible&&U.push(R,zt,Dt,rt,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const zt=kt.update(R),Dt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),pe.copy(zt.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4($e)),Array.isArray(Dt)){const Xt=zt.groups;for(let Yt=0,ee=Xt.length;Yt<ee;Yt++){const se=Xt[Yt],Ft=Dt[se.materialIndex];Ft&&Ft.visible&&U.push(R,zt,Ft,rt,pe.z,se)}}else Dt.visible&&U.push(R,zt,Dt,rt,pe.z,null)}}const wt=R.children;for(let zt=0,Dt=wt.length;zt<Dt;zt++)Zs(wt[zt],X,rt,nt)}function bi(R,X,rt,nt){const{opaque:$,transmissive:wt,transparent:zt}=R;F.setupLightsView(rt),Zt===!0&&yt.setGlobalState(C.clippingPlanes,rt),nt&&Wt.viewport(N.copy(nt)),$.length>0&&mn($,X,rt),wt.length>0&&mn(wt,X,rt),zt.length>0&&mn(zt,X,rt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function rn(R,X,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[nt.id]===void 0){const Ft=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[nt.id]=new Zi(1,1,{generateMipmaps:!0,type:Ft?Ca:oi,minFilter:Vs,samples:Ne.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const wt=F.state.transmissionRenderTarget[nt.id],zt=nt.viewport||N;wt.setSize(zt.z*C.transmissionResolutionScale,zt.w*C.transmissionResolutionScale);const Dt=C.getRenderTarget(),Xt=C.getActiveCubeFace(),Yt=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(dt),Et=C.getClearAlpha(),Et<1&&C.setClearColor(16777215,.5),C.clear(),oe&&Lt.render(rt);const ee=C.toneMapping;C.toneMapping=ji;const se=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),F.setupLightsView(nt),Zt===!0&&yt.setGlobalState(C.clippingPlanes,nt),mn(R,rt,nt),Y.updateMultisampleRenderTarget(wt),Y.updateRenderTargetMipmap(wt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ue=0,Ze=X.length;ue<Ze;ue++){const Ke=X[ue],{object:Re,geometry:gn,material:Gt,group:Pn}=Ke;if(Gt.side===ba&&Re.layers.test(nt.layers)){const ie=Gt.side;Gt.side=jn,Gt.needsUpdate=!0,ta(Re,rt,nt,gn,Gt,Pn),Gt.side=ie,Gt.needsUpdate=!0,Ft=!0}}Ft===!0&&(Y.updateMultisampleRenderTarget(wt),Y.updateRenderTargetMipmap(wt))}C.setRenderTarget(Dt,Xt,Yt),C.setClearColor(dt,Et),se!==void 0&&(nt.viewport=se),C.toneMapping=ee}function mn(R,X,rt){const nt=X.isScene===!0?X.overrideMaterial:null;for(let $=0,wt=R.length;$<wt;$++){const zt=R[$],{object:Dt,geometry:Xt,group:Yt}=zt;let ee=zt.material;ee.allowOverride===!0&&nt!==null&&(ee=nt),Dt.layers.test(rt.layers)&&ta(Dt,X,rt,Xt,ee,Yt)}}function ta(R,X,rt,nt,$,wt){R.onBeforeRender(C,X,rt,nt,$,wt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(C,X,rt,nt,R,wt),$.transparent===!0&&$.side===ba&&$.forceSinglePass===!1?($.side=jn,$.needsUpdate=!0,C.renderBufferDirect(rt,X,nt,$,R,wt),$.side=ps,$.needsUpdate=!0,C.renderBufferDirect(rt,X,nt,$,R,wt),$.side=ba):C.renderBufferDirect(rt,X,nt,$,R,wt),R.onAfterRender(C,X,rt,nt,$,wt)}function Ua(R,X,rt){X.isScene!==!0&&(X=Ue);const nt=M.get(R),$=F.state.lights,wt=F.state.shadowsArray,zt=$.state.version,Dt=Ct.getParameters(R,$.state,wt,X,rt),Xt=Ct.getProgramCacheKey(Dt);let Yt=nt.programs;nt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,nt.fog=X.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;nt.envMap=pt.get(R.envMap||nt.environment,ee),nt.envMapRotation=nt.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",Te),Yt=new Map,nt.programs=Yt);let se=Yt.get(Xt);if(se!==void 0){if(nt.currentProgram===se&&nt.lightsStateVersion===zt)return xl(R,Dt),se}else Dt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Dt,C),se=Ct.acquireProgram(Dt,Xt),Yt.set(Xt,se),nt.uniforms=Dt.uniforms;const Ft=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ft.clippingPlanes=yt.uniform),xl(R,Dt),nt.needsLights=ro(R),nt.lightsStateVersion=zt,nt.needsLights&&(Ft.ambientLightColor.value=$.state.ambient,Ft.lightProbe.value=$.state.probe,Ft.directionalLights.value=$.state.directional,Ft.directionalLightShadows.value=$.state.directionalShadow,Ft.spotLights.value=$.state.spot,Ft.spotLightShadows.value=$.state.spotShadow,Ft.rectAreaLights.value=$.state.rectArea,Ft.ltc_1.value=$.state.rectAreaLTC1,Ft.ltc_2.value=$.state.rectAreaLTC2,Ft.pointLights.value=$.state.point,Ft.pointLightShadows.value=$.state.pointShadow,Ft.hemisphereLights.value=$.state.hemi,Ft.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ft.spotLightMatrix.value=$.state.spotLightMatrix,Ft.spotLightMap.value=$.state.spotLightMap,Ft.pointShadowMatrix.value=$.state.pointShadowMatrix),nt.currentProgram=se,nt.uniformsList=null,se}function vl(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=gu.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function xl(R,X){const rt=M.get(R);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function yl(R,X,rt,nt,$){X.isScene!==!0&&(X=Ue),Y.resetTextureUnits();const wt=X.fog,zt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?X.environment:null,Dt=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:to,Xt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Yt=pt.get(nt.envMap||zt,Xt),ee=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,se=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ft=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,Ze=!!rt.morphAttributes.color;let Ke=ji;nt.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ke=C.toneMapping);const Re=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,gn=Re!==void 0?Re.length:0,Gt=M.get(nt),Pn=F.state.lights;if(Zt===!0&&(Jt===!0||R!==Q)){const ln=R===Q&&nt.id===st;yt.setState(nt,R,ln)}let ie=!1;nt.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Pn.state.version||Gt.outputColorSpace!==Dt||$.isBatchedMesh&&Gt.batching===!1||!$.isBatchedMesh&&Gt.batching===!0||$.isBatchedMesh&&Gt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Gt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Gt.instancing===!1||!$.isInstancedMesh&&Gt.instancing===!0||$.isSkinnedMesh&&Gt.skinning===!1||!$.isSkinnedMesh&&Gt.skinning===!0||$.isInstancedMesh&&Gt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Gt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Gt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Gt.instancingMorph===!1&&$.morphTexture!==null||Gt.envMap!==Yt||nt.fog===!0&&Gt.fog!==wt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==yt.numPlanes||Gt.numIntersection!==yt.numIntersection)||Gt.vertexAlphas!==ee||Gt.vertexTangents!==se||Gt.morphTargets!==Ft||Gt.morphNormals!==ue||Gt.morphColors!==Ze||Gt.toneMapping!==Ke||Gt.morphTargetsCount!==gn)&&(ie=!0):(ie=!0,Gt.__version=nt.version);let Bn=Gt.currentProgram;ie===!0&&(Bn=Ua(nt,X,$));let Zn=!1,Ti=!1,Kn=!1;const Oe=Bn.getUniforms(),on=Gt.uniforms;if(Wt.useProgram(Bn.program)&&(Zn=!0,Ti=!0,Kn=!0),nt.id!==st&&(st=nt.id,Ti=!0),Zn||Q!==R){Wt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Oe.setValue(V,"projectionMatrix",R.projectionMatrix),Oe.setValue(V,"viewMatrix",R.matrixWorldInverse);const Ai=Oe.map.cameraPosition;Ai!==void 0&&Ai.setValue(V,ve.setFromMatrixPosition(R.matrixWorld)),Ne.logarithmicDepthBuffer&&Oe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Oe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,Ti=!0,Kn=!0)}if(Gt.needsLights&&(Pn.state.directionalShadowMap.length>0&&Oe.setValue(V,"directionalShadowMap",Pn.state.directionalShadowMap,Y),Pn.state.spotShadowMap.length>0&&Oe.setValue(V,"spotShadowMap",Pn.state.spotShadowMap,Y),Pn.state.pointShadowMap.length>0&&Oe.setValue(V,"pointShadowMap",Pn.state.pointShadowMap,Y)),$.isSkinnedMesh){Oe.setOptional(V,$,"bindMatrix"),Oe.setOptional(V,$,"bindMatrixInverse");const ln=$.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Oe.setValue(V,"boneTexture",ln.boneTexture,Y))}$.isBatchedMesh&&(Oe.setOptional(V,$,"batchingTexture"),Oe.setValue(V,"batchingTexture",$._matricesTexture,Y),Oe.setOptional(V,$,"batchingIdTexture"),Oe.setValue(V,"batchingIdTexture",$._indirectTexture,Y),Oe.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Oe.setValue(V,"batchingColorTexture",$._colorsTexture,Y));const zn=rt.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Ot.update($,rt,Bn),(Ti||Gt.receiveShadow!==$.receiveShadow)&&(Gt.receiveShadow=$.receiveShadow,Oe.setValue(V,"receiveShadow",$.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&X.environment!==null&&(on.envMapIntensity.value=X.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=hC()),Ti&&(Oe.setValue(V,"toneMappingExposure",C.toneMappingExposure),Gt.needsLights&&gs(on,Kn),wt&&nt.fog===!0&&jt.refreshFogUniforms(on,wt),jt.refreshMaterialUniforms(on,nt,_t,j,F.state.transmissionRenderTarget[R.id]),gu.upload(V,vl(Gt),on,Y)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(gu.upload(V,vl(Gt),on,Y),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Oe.setValue(V,"center",$.center),Oe.setValue(V,"modelViewMatrix",$.modelViewMatrix),Oe.setValue(V,"normalMatrix",$.normalMatrix),Oe.setValue(V,"modelMatrix",$.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const ln=nt.uniformsGroups;for(let Ai=0,ea=ln.length;Ai<ea;Ai++){const Ks=ln[Ai];Pt.update(Ks,Bn),Pt.bind(Ks,Bn)}}return Bn}function gs(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function ro(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,X,rt){const nt=M.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=X,M.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const rt=M.get(R);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0};const La=V.createFramebuffer();this.setRenderTarget=function(R,X=0,rt=0){J=R,H=X,q=rt;let nt=null,$=!1,wt=!1;if(R){const Dt=M.get(R);if(Dt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(V.FRAMEBUFFER,Dt.__webglFramebuffer),N.copy(R.viewport),I.copy(R.scissor),ct=R.scissorTest,Wt.viewport(N),Wt.scissor(I),Wt.setScissorTest(ct),st=-1;return}else if(Dt.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(Dt.__hasExternalTextures)Y.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Dt.__boundDepthTexture!==ee){if(ee!==null&&M.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(wt=!0);const Yt=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[X])?nt=Yt[X][rt]:nt=Yt[X],$=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?nt=M.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?nt=Yt[rt]:nt=Yt,N.copy(R.viewport),I.copy(R.scissor),ct=R.scissorTest}else N.copy(it).multiplyScalar(_t).floor(),I.copy(vt).multiplyScalar(_t).floor(),ct=bt;if(rt!==0&&(nt=La),Wt.bindFramebuffer(V.FRAMEBUFFER,nt)&&Wt.drawBuffers(R,nt),Wt.viewport(N),Wt.scissor(I),Wt.setScissorTest(ct),$){const Dt=M.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Dt.__webglTexture,rt)}else if(wt){const Dt=X;for(let Xt=0;Xt<R.textures.length;Xt++){const Yt=M.get(R.textures[Xt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xt,Yt.__webglTexture,rt,Dt)}}else if(R!==null&&rt!==0){const Dt=M.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Dt.__webglTexture,rt)}st=-1},this.readRenderTargetPixels=function(R,X,rt,nt,$,wt,zt,Dt=0){if(!(R&&R.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Xt=Xt[zt]),Xt){Wt.bindFramebuffer(V.FRAMEBUFFER,Xt);try{const Yt=R.textures[Dt],ee=Yt.format,se=Yt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Dt),!Ne.textureFormatReadable(ee)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(se)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-nt&&rt>=0&&rt<=R.height-$&&V.readPixels(X,rt,nt,$,Rt.convert(ee),Rt.convert(se),wt)}finally{const Yt=J!==null?M.get(J).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,X,rt,nt,$,wt,zt,Dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Xt=Xt[zt]),Xt)if(X>=0&&X<=R.width-nt&&rt>=0&&rt<=R.height-$){Wt.bindFramebuffer(V.FRAMEBUFFER,Xt);const Yt=R.textures[Dt],ee=Yt.format,se=Yt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Dt),!Ne.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ft=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ft),V.bufferData(V.PIXEL_PACK_BUFFER,wt.byteLength,V.STREAM_READ),V.readPixels(X,rt,nt,$,Rt.convert(ee),Rt.convert(se),0);const ue=J!==null?M.get(J).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,ue);const Ze=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await RE(V,Ze,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ft),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,wt),V.deleteBuffer(Ft),V.deleteSync(Ze),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,rt=0){const nt=Math.pow(2,-rt),$=Math.floor(R.image.width*nt),wt=Math.floor(R.image.height*nt),zt=X!==null?X.x:0,Dt=X!==null?X.y:0;Y.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,zt,Dt,$,wt),Wt.unbindTexture()};const Na=V.createFramebuffer(),_s=V.createFramebuffer();this.copyTextureToTexture=function(R,X,rt=null,nt=null,$=0,wt=0){let zt,Dt,Xt,Yt,ee,se,Ft,ue,Ze;const Ke=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(rt!==null)zt=rt.max.x-rt.min.x,Dt=rt.max.y-rt.min.y,Xt=rt.isBox3?rt.max.z-rt.min.z:1,Yt=rt.min.x,ee=rt.min.y,se=rt.isBox3?rt.min.z:0;else{const on=Math.pow(2,-$);zt=Math.floor(Ke.width*on),Dt=Math.floor(Ke.height*on),R.isDataArrayTexture?Xt=Ke.depth:R.isData3DTexture?Xt=Math.floor(Ke.depth*on):Xt=1,Yt=0,ee=0,se=0}nt!==null?(Ft=nt.x,ue=nt.y,Ze=nt.z):(Ft=0,ue=0,Ze=0);const Re=Rt.convert(X.format),gn=Rt.convert(X.type);let Gt;X.isData3DTexture?(Y.setTexture3D(X,0),Gt=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Y.setTexture2DArray(X,0),Gt=V.TEXTURE_2D_ARRAY):(Y.setTexture2D(X,0),Gt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Pn=V.getParameter(V.UNPACK_ROW_LENGTH),ie=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Bn=V.getParameter(V.UNPACK_SKIP_PIXELS),Zn=V.getParameter(V.UNPACK_SKIP_ROWS),Ti=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ke.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ke.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,se);const Kn=R.isDataArrayTexture||R.isData3DTexture,Oe=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const on=M.get(R),zn=M.get(X),ln=M.get(on.__renderTarget),Ai=M.get(zn.__renderTarget);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,ln.__webglFramebuffer),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let ea=0;ea<Xt;ea++)Kn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(R).__webglTexture,$,se+ea),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(X).__webglTexture,wt,Ze+ea)),V.blitFramebuffer(Yt,ee,zt,Dt,Ft,ue,zt,Dt,V.DEPTH_BUFFER_BIT,V.NEAREST);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||M.has(R)){const on=M.get(R),zn=M.get(X);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,Na),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,_s);for(let ln=0;ln<Xt;ln++)Kn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,on.__webglTexture,$,se+ln):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,on.__webglTexture,$),Oe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zn.__webglTexture,wt,Ze+ln):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zn.__webglTexture,wt),$!==0?V.blitFramebuffer(Yt,ee,zt,Dt,Ft,ue,zt,Dt,V.COLOR_BUFFER_BIT,V.NEAREST):Oe?V.copyTexSubImage3D(Gt,wt,Ft,ue,Ze+ln,Yt,ee,zt,Dt):V.copyTexSubImage2D(Gt,wt,Ft,ue,Yt,ee,zt,Dt);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Oe?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Gt,wt,Ft,ue,Ze,zt,Dt,Xt,Re,gn,Ke.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Gt,wt,Ft,ue,Ze,zt,Dt,Xt,Re,Ke.data):V.texSubImage3D(Gt,wt,Ft,ue,Ze,zt,Dt,Xt,Re,gn,Ke):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,wt,Ft,ue,zt,Dt,Re,gn,Ke.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,wt,Ft,ue,Ke.width,Ke.height,Re,Ke.data):V.texSubImage2D(V.TEXTURE_2D,wt,Ft,ue,zt,Dt,Re,gn,Ke);V.pixelStorei(V.UNPACK_ROW_LENGTH,Pn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ie),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Bn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Zn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ti),wt===0&&X.generateMipmaps&&V.generateMipmap(Gt),Wt.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){H=0,q=0,J=null,Wt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}const Vv={type:"change"},qp={type:"start"},Fx={type:"end"},su=new Au,kv=new cs,pC=Math.cos(70*DE.DEG2RAD),vn=new K,Yn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ed=1e-6;class mC extends xb{constructor(t,n=null){super(t,n),this.state=ke.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new ms,this._lastTargetPosition=new K,this._quat=new ms().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _v,this._sphericalDelta=new _v,this._scale=1,this._panOffset=new K,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new K,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_C.bind(this),this._onPointerDown=gC.bind(this),this._onPointerUp=vC.bind(this),this._onContextMenu=TC.bind(this),this._onMouseWheel=SC.bind(this),this._onKeyDown=MC.bind(this),this._onTouchStart=EC.bind(this),this._onTouchMove=bC.bind(this),this._onMouseDown=xC.bind(this),this._onMouseMove=yC.bind(this),this._interceptControlDown=AC.bind(this),this._interceptControlUp=RC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vv),this.update(),this.state=ke.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;vn.copy(n).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(a)&&isFinite(l)&&(a<-Math.PI?a+=Yn:a>Math.PI&&(a-=Yn),l<-Math.PI?l+=Yn:l>Math.PI&&(l-=Yn),a<=l?this._spherical.theta=Math.max(a,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+l)/2?Math.max(a,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),n.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=vn.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(su.origin.copy(this.object.position),su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(su.direction))<pC?this.object.lookAt(this.target):(kv.setFromNormalAndCoplanarPoint(this.object.up,this.target),su.intersectPlane(kv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Ed||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ed||this._lastTargetPosition.distanceToSquared(this.target)>Ed?(this.dispatchEvent(Vv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Yn/60*this.autoRotateSpeed*t:Yn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){vn.setFromMatrixColumn(n,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,n){this.screenSpacePanning===!0?vn.setFromMatrixColumn(n,1):(vn.setFromMatrixColumn(n,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let c=vn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),l=t-a.left,c=n-a.top,h=a.width,p=a.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(a,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(a,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(a*a+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),l=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(a,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(a*a+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+n.x)*.5,p=(t.pageY+n.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new te,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function gC(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _C(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function vC(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fx),this.state=ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function xC(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ke.DOLLY;break;case jr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}break;case jr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(qp)}function yC(r){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function SC(r){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(r.preventDefault(),this.dispatchEvent(qp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Fx))}function MC(r){this.enabled!==!1&&this._handleKeyDown(r)}function EC(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ke.TOUCH_ROTATE;break;case Yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ke.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(qp)}function bC(r){switch(this._trackPointer(r),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ke.NONE}}function TC(r){this.enabled!==!1&&r.preventDefault()}function AC(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RC(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const CC=({socket:r,onLanternClick:t,updateLanternCount:n})=>{const a=qr.useRef(null);return qr.useEffect(()=>{const l=new XE;l.fog=new Vp(0,.005);const c=new ri(75,window.innerWidth/window.innerHeight,.1,5e3);c.position.set(0,0,40);const h=new dC({antialias:!0});h.setSize(window.innerWidth,window.innerHeight),h.setClearColor(0),a.current.appendChild(h.domElement);const p=new mC(c,h.domElement);p.enableDamping=!0,p.dampingFactor=.05;const m=new ci,d=new Rx({color:16777215,size:.15,transparent:!0,opacity:.8}),v=[];for(let F=0;F<8e3;F++)v.push((Math.random()-.5)*4e3,(Math.random()-.5)*4e3,(Math.random()-.5)*4e3);m.setAttribute("position",new li(v,3));const x=new nb(m,d);l.add(x);const _=[],E=(F,B,z,T,C=512,ot=6)=>{const H=document.createElement("canvas");H.width=C,H.height=128;const q=H.getContext("2d");q.font=`Bold ${z}px Arial`,q.fillStyle=T,q.textAlign="center",q.shadowColor="rgba(0,0,0,1)",q.shadowBlur=8,q.fillText(F,C/2,64);const J=new ib(H),st=new Tx({map:J,transparent:!0}),Q=new KE(st);return Q.scale.set(ot,1.5,1),Q.position.y=B,Q},b=(F,B,z,T=!1)=>{const C=new cl,ot=new Wp(.5,.5,1.5,16),H=new kp({color:16755200,transparent:!0,opacity:.9}),q=new Ji(ot,H),J=new mb(16755200,2,10),st=B||"Anonymous",Q=F||"A silent wish...",I=(z?new Date(z):new Date).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),ct=E(st,1.6,40,"#ffaa00"),dt=E(I,-1.4,24,"#aaaaaa",1024,12);if(C.add(q),C.add(J),C.add(ct),C.add(dt),T){const O=new K;c.getWorldDirection(O),C.position.copy(c.position).add(O.multiplyScalar(20)),C.position.y-=3}else C.position.set((Math.random()-.5)*150,(Math.random()-.5)*150,(Math.random()-.5)*150);C.userData={message:Q,author:st,time:I,floatSpeed:Math.random()*.03+.01,swaySpeed:Math.random()*.02+.01,swayOffset:Math.random()*Math.PI*2},l.add(C),_.push(C)},w=()=>{requestAnimationFrame(w),p.update();const F=Date.now()*.001;_.forEach(B=>{B.position.y+=B.userData.floatSpeed,B.position.x+=Math.sin(F*B.userData.swaySpeed+B.userData.swayOffset)*.02,B.position.y>100&&(B.position.y=-100)}),x.rotation.y+=1e-4,x.rotation.x+=5e-5,h.render(l,c)};w();const S=new vb,y=new te,D=h.domElement,P=F=>{const B=F.touches?F.touches[0].clientX:F.clientX,z=F.touches?F.touches[0].clientY:F.clientY;y.x=B/window.innerWidth*2-1,y.y=-(z/window.innerHeight)*2+1,S.setFromCamera(y,c);const T=S.intersectObjects(_,!0);if(T.length>0){const ot=T[0].object.parent;if(ot&&ot.userData.message){const H=ot.userData.message,q=ot.userData.author,J=ot.userData.time;t(`"${H}"
— ${q}
(${J})`)}}else t(null)};D.addEventListener("click",P),D.addEventListener("touchstart",P,{passive:!1});const U=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",U),r&&(r.on("new_wish",F=>{b(F.message,F.author,F.createdAt,!0),typeof n=="function"&&n(B=>B+1)}),r.on("initial_wishes",F=>{F.forEach(B=>b(B.message,B.author,B.createdAt,!1)),typeof n=="function"&&n(F.length)})),()=>{window.removeEventListener("resize",U),D.removeEventListener("click",P),D.removeEventListener("touchstart",P),a.current&&a.current.contains(h.domElement)&&a.current.removeChild(h.domElement),r&&(r.off("new_wish"),r.off("initial_wishes")),h.dispose()}},[r]),xi.jsx("div",{ref:a,style:{position:"absolute",top:0,left:0,width:"100vw",height:"100vh"}})},Xv=cu("https://global-wish-lanterns-api.onrender.com");function wC(){const[r,t]=qr.useState(""),[n,a]=qr.useState(""),[l,c]=qr.useState(null),[h,p]=qr.useState(0),m=()=>{if(!r.trim())return;const d={message:r,author:n.trim()||"Anonymous",x:0,y:0,z:0};Xv.emit("send_wish",d),t("")};return xi.jsxs("div",{className:"App",children:[xi.jsxs("div",{className:"lantern-count",children:["🏮 Global Wishes: ",h]}),xi.jsx(CC,{socket:Xv,onLanternClick:d=>c(d),updateLanternCount:p}),xi.jsxs("div",{className:"ui-container",children:[xi.jsx("input",{type:"text",placeholder:"Your Name (Optional)",value:n,onChange:d=>a(d.target.value)}),xi.jsx("input",{type:"text",placeholder:"Type a wish for the world...",value:r,onChange:d=>t(d.target.value)}),xi.jsx("button",{onClick:m,children:"Release Lantern 🏮"})]}),l&&xi.jsxs("div",{className:"message-popup",onClick:()=>c(null),children:[xi.jsx("p",{style:{whiteSpace:"pre-line",margin:0,fontWeight:"bold"},children:l}),xi.jsx("small",{style:{display:"block",marginTop:"12px",color:"#555"},children:"(Tap here to close)"})]})]})}$S.createRoot(document.getElementById("root")).render(xi.jsx(wC,{}));
