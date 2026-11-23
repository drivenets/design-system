import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r}from"./iframe-BJBM3kaA.js";import{n as i,t as a}from"./ds-typography-CpFc16Nt.js";import{t as o}from"./ds-spinner-D6Q3o21e.js";import{t as s}from"./ds-spinner-B3kE1yoi.js";import{n as c,t as l}from"./ds-button-v3-CGjWpj2J.js";import{n as u,t as d}from"./ds-stack-DASX2VPV.js";import{n as f,t as p}from"./ds-table-DD2g_A4D.js";import{i as m,n as h,o as g,t as _}from"./cell-editors-DqYx6pH2.js";import{n as ee,o as v,s as te,t as ne}from"./story-decorators-DvWcNqDM.js";import{n as re,r as ie,t as ae}from"./story-data-UTijnOh6.js";import{n as oe,t as se}from"./story-notes-data-Bq75SAxG.js";import{n as ce,t as le}from"./ds-table-editable.stories.module-VORbXvAA.js";import{n as ue,r as de,t as y}from"./story-data-generator-CIgRJsBw.js";var fe,pe,me;function he(){return(he=t((()=>{fe=e(n(),1),r(),pe=fe.createContext(void 0),me=e=>{let t=fe.useContext(pe);if(e)return e;if(!t)throw Error(`No QueryClient set, use QueryClientProvider to set one`);return t}})))()}function ge(e){setTimeout(e,0)}var _e,ve,b;function x(){return(x=t((()=>{_e={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},ve=class{#e=_e;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}},b=new ve})))()}function S(){}function ye(e,t){return typeof e==`function`?e(t):e}function be(e){return typeof e==`number`&&e>=0&&e!==1/0}function xe(e,t){return Math.max(e+(t||0)-Date.now(),0)}function C(e,t){return typeof e==`function`?e(t):e}function Se(e,t){let{type:n=`all`,exact:r,fetchStatus:i,predicate:a,queryKey:o,stale:s}=e;if(o){if(r){if(t.queryHash!==we(o,t.options))return!1}else if(!T(t.queryKey,o))return!1}if(n!==`all`){let e=t.isActive();if(n===`active`&&!e||n===`inactive`&&e)return!1}return!(typeof s==`boolean`&&t.isStale()!==s||i&&i!==t.state.fetchStatus||a&&!a(t))}function Ce(e,t){let{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(w(t.options.mutationKey)!==w(a))return!1}else if(!T(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function we(e,t){return(t?.queryKeyHashFn||w)(e)}function w(e){return JSON.stringify(e,(e,t)=>Oe(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function T(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(e&&t&&typeof e==`object`&&typeof t==`object`){if(Array.isArray(e)&&Array.isArray(t)){if(t.length>e.length)return!1;for(let n=0;n<t.length;n++)if(!T(e[n],t[n]))return!1;return!0}let n=Object.keys(t);for(let r of n)if(!T(e[r],t[r]))return!1;return!0}return!1}function Te(e,t,n=0){if(e===t)return e;if(n>500)return t;let r=De(e)&&De(t);if(!r&&!(Oe(e)&&Oe(t)))return t;let i=(r?e:Object.keys(e)).length,a=r?t:Object.keys(t),o=a.length,s=r?Array(o):{},c=0;for(let l=0;l<o;l++){let o=r?l:a[l],u=e[o],d=t[o];if(u===d){s[o]=u,(r?l<i:ze.call(e,o))&&c++;continue}if(u===null||d===null||typeof u!=`object`||typeof d!=`object`){s[o]=d;continue}let f=Te(u,d,n+1);s[o]=f,f===u&&c++}return i===o&&c===i?e:s}function Ee(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n of Object.keys(e))if(!ze.call(t,n)||e[n]!==t[n])return!1;return!0}function De(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Oe(e){if(!ke(e))return!1;let t=Object.getPrototypeOf(e),n=t?.constructor;if(n===void 0)return!0;if(typeof n!=`function`)return!1;let r=n.prototype;return!(!ke(r)||!r.hasOwnProperty(`isPrototypeOf`)||t!==Object.prototype)}function ke(e){return Object.prototype.toString.call(e)===`[object Object]`}function Ae(e){return new Promise(t=>{b.setTimeout(t,e)})}function je(e,t,n){return typeof n.structuralSharing==`function`?n.structuralSharing(e,t):n.structuralSharing===!1?t:Te(e,t)}function Me(e){return e}function Ne(e,t,n=0){let r=[...e,t];return n&&r.length>n?r.slice(-n):r}function Pe(e,t,n=0){let r=[t,...e];return n&&r.length>n?r.slice(0,n):r}function Fe(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===E?()=>Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function Ie(e,t){return typeof e==`function`?e(...t):!!e}function Le(e,t,n,r){let i=!1,a;return Object.defineProperties(e,{[D]:{value:r},signal:{enumerable:!0,get:()=>(a??=t(),i||(i=!0,a.aborted?n():a.addEventListener(`abort`,n,{once:!0})),a)}}),e}var Re,ze,E,D;function O(){return(O=t((()=>{x(),Re=typeof window>`u`||`Deno`in globalThis,ze=Object.prototype.hasOwnProperty,E=Symbol(),D=Symbol()})))()}var Be,k;function Ve(){return(Ve=t((()=>{O(),Be=()=>Re,k=()=>Be()})))()}var A;function j(){return(j=t((()=>{A=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}})))()}var He,Ue;function We(){return(We=t((()=>{j(),He=class extends A{#e;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e();return window.addEventListener(`visibilitychange`,t,!1),()=>{window.removeEventListener(`visibilitychange`,t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(e=>{typeof e==`boolean`?this.setFocused(e):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e==`boolean`?this.#e:globalThis.document?.visibilityState!==`hidden`}},Ue=new He})))()}function Ge(){let e=[],t=0,n=e=>{e()},r=e=>{e()},i=Ke,a=r=>{t?e.push(r):i(()=>{n(r)})},o=()=>{let t=e;e=[],t.length&&i(()=>{r(()=>{t.forEach(e=>{n(e)})})})};return{batch:e=>{let n;t++;try{n=e()}finally{t--,t||o()}return n},batchCalls:e=>(...t)=>{a(()=>{e(...t)})},schedule:a,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{r=e},setScheduler:e=>{i=e}}}var Ke,M;function N(){return(N=t((()=>{x(),Ke=ge,M=Ge()})))()}var qe,P;function Je(){return(Je=t((()=>{j(),qe=class extends A{#e=!0;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e(!0),n=()=>e(!1);return window.addEventListener(`online`,t,!1),window.addEventListener(`offline`,n,!1),()=>{window.removeEventListener(`online`,t),window.removeEventListener(`offline`,n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#e}},P=new qe})))()}function Ye(e){return Math.min(1e3*2**e,3e4)}function Xe(e){return(e??`online`)!==`online`||P.isOnline()}function Ze(e){let t=!1,n=0,r,i=`pending`,a,o,s=new Promise((e,t)=>{a=e,o=t});s.catch(S);let c=()=>i!==`pending`,l=t=>{if(!c()){let n=new F(t);h(n),e.onCancel?.(n)}},u=()=>{t=!0},d=()=>{t=!1},f=()=>Ue.isFocused()&&(e.networkMode===`always`||P.isOnline())&&e.canRun(),p=()=>Xe(e.networkMode)&&e.canRun(),m=e=>{c()||(r?.(),i=`resolved`,a(e))},h=e=>{c()||(r?.(),i=`rejected`,o(e))},g=t=>new Promise(n=>{r=e=>{(c()||t())&&n(e)},e.onPause?.()}).then(()=>{r=void 0,c()||e.onContinue?.()}),_=()=>{if(c())return;let r,i=n===0?e.initialPromise:void 0;try{r=i??e.fn()}catch(e){r=Promise.reject(e)}Promise.resolve(r).then(m).catch(r=>{if(c())return;let i=e.retry??(k()?0:3),a=e.retryDelay??Ye,o=typeof a==`function`?a(n,r):a,s=i===!0||typeof i==`number`&&n<i||typeof i==`function`&&i(n,r);t||!s?h(r):(n++,e.onFail?.(n,r),Ae(o).then(()=>c()||f()?void 0:g(f)).then(()=>{t?h(r):_()}))})};return{promise:s,status:()=>i,cancel:l,continue:()=>(r?.(),s),cancelRetry:u,continueRetry:d,canStart:p,start:()=>(p()?_():g(p).then(_),s)}}var F;function Qe(){return(Qe=t((()=>{O(),Ve(),We(),Je(),F=class extends Error{constructor(e){super(`CancelledError`),this.revert=e?.revert,this.silent=e?.silent}}})))()}function $e(e){return{onFetch:(t,n)=>{let r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],s={pages:[],pageParams:[]},c=0,l=async()=>{let n=!1,l=t,u=e=>{Le(e,()=>t.signal,()=>n=!0,l[D])},d=Fe(t.options,t.fetchOptions),f=async(e,r,i)=>{if(n)return Promise.reject(t.signal.reason);if(r==null&&e.pages.length)return Promise.resolve(e);let a=(()=>{let e={client:t.client,queryKey:t.queryKey,pageParam:r,direction:i?`backward`:`forward`,meta:t.options.meta};return u(e),e})(),o=await d(a),{maxPages:s}=t.options,c=i?Pe:Ne;return{pages:c(e.pages,o,s),pageParams:c(e.pageParams,r,s)}};if(i&&a.length){let e=i===`backward`,t=e?tt:et,n={pages:a,pageParams:o};s=await f(n,t(r,n),e)}else{let t=e??a.length;do{let e=c===0?o[0]===void 0?r.initialPageParam:o[0]:et(r,s);if(c>0&&e==null)break;s=await f(s,e),c++}while(c<t)}return s};t.fetchFn=t.options.persister?()=>t.options.persister?.(l,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):l}}}function et(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function tt(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}function nt(e,t){return t?et(e,t)!=null:!1}function rt(e,t){return!t||!e.getPreviousPageParam?!1:tt(e,t)!=null}function it(){return(it=t((()=>{O()})))()}var at;function ot(){return(ot=t((()=>{x(),O(),Ve(),at=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),be(this.gcTime)&&(this.#e=b.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(k()?1/0:3e5))}clearGcTimeout(){this.#e!==void 0&&(b.clearTimeout(this.#e),this.#e=void 0)}}})))()}function st(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Xe(t.networkMode)?`fetching`:`paused`,...e===void 0&&{error:null,status:`pending`}}}function ct(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:`success`}}function lt(e){let t=typeof e.initialData==`function`?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt==`function`?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?`success`:`pending`,fetchStatus:`idle`}}var ut;function dt(){return(dt=t((()=>{O(),it(),N(),ot(),Qe(),ut=class extends at{#e;#t;#n;#r;#i;#a;#o;#s;#c;constructor(e){super(),this.#c=!1,this.#s=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#i=e.client,this.#r=this.#i.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#t=lt(this.options),this.state=e.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#e}get promise(){return this.#a?.promise}setOptions(e){if(this.options={...this.#s,...e},e?._type&&(this.#e=e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){let e=lt(this.options);e.data!==void 0&&(this.setState(ct(e.data,e.dataUpdatedAt)),this.#t=e)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus===`idle`&&this.#r.remove(this)}setData(e,t){let n=je(this.state.data,e,this.options);return this.#l({data:n,type:`success`,dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e){this.#l({type:`setState`,state:e})}cancel(e){let t=this.#a?.promise;return this.#a?.cancel(e),t?t.then(S).catch(S):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#t}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>C(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===E||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.state.data!==void 0&&this.getObserversCount()>0&&this.observers.some(e=>C(e.options.staleTime,this)===`static`)}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e===`static`?!1:this.state.isInvalidated?!0:!xe(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(e=>e.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#a?.continue()}onOnline(){this.observers.find(e=>e.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#a?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#r.notify({type:`observerAdded`,query:this,observer:e}))}removeObserver(e){let t=this.observers.indexOf(e);t!==-1&&(this.observers.splice(t,1),this.observers.length||(this.#a&&(this.#c||this.state.fetchStatus===`paused`&&this.state.status===`pending`?this.#a.cancel({revert:!0}):this.#a.cancelRetry()),this.scheduleGc()),this.#r.notify({type:`observerRemoved`,query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#l({type:`invalidate`})}async fetch(e,t){if(this.state.fetchStatus!==`idle`&&this.#a?.status()!==`rejected`){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#a&&this.#o)return this.#a.continueRetry(),this.#o}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let n=new AbortController,r=e=>{Object.defineProperties(e,{[D]:{value:n.signal,enumerable:!0},signal:{enumerable:!0,get:()=>(this.#c=!0,n.signal)}})},i=()=>{let e=Fe(this.options,t),n=(()=>{let e={client:this.#i,queryKey:this.queryKey,meta:this.meta};return r(e),e})();return this.#c=!1,this.options.persister?this.options.persister(e,n,this):e(n)},a=(()=>{let e={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#i,state:this.state,fetchFn:i};return r(e),e})();(this.#e===`infinite`?$e(this.options.pages):this.options.behavior)?.onFetch(a,this),this.#n=this.state,(this.state.fetchStatus===`idle`||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#l({type:`fetch`,meta:a.fetchOptions?.meta});let o=this.#a=Ze({initialPromise:t?.initialPromise,fn:a.fetchFn,onCancel:e=>{e instanceof F&&e.revert&&this.setState({...this.#n,fetchStatus:`idle`}),n.abort()},onFail:(e,t)=>{this.#l({type:`failed`,failureCount:e,error:t})},onPause:()=>{this.#l({type:`pause`})},onContinue:()=>{this.#l({type:`continue`})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}),s=(async()=>{try{let e=await o.promise;if(e===void 0)throw Error(`${this.queryHash} data is undefined`);return this.setData(e),this.#r.config.onSuccess?.(e,this),this.#r.config.onSettled?.(e,this.state.error,this),e}catch(e){if(e instanceof F){if(e.silent){if(this.#a!==o&&this.#o)return this.#o;throw e}if(e.revert){if(this.state.data===void 0)throw e;return this.state.data}}throw this.#l({type:`error`,error:e}),this.#r.config.onError?.(e,this),this.#r.config.onSettled?.(this.state.data,e,this),e}finally{this.#a===o&&(this.#a=void 0,this.#o=void 0),this.scheduleGc()}})();return this.#o=s,o.start(),s}#l(e){let t=t=>{switch(e.type){case`failed`:return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case`pause`:return{...t,fetchStatus:`paused`};case`continue`:return{...t,fetchStatus:`fetching`};case`fetch`:return{...t,...st(t.data,this.options),fetchMeta:e.meta??null};case`success`:{let n={...t,...ct(e.data,e.dataUpdatedAt),dataUpdateCount:t.dataUpdateCount+1,...!e.manual&&{fetchStatus:`idle`,fetchFailureCount:0,fetchFailureReason:null}};return this.#n=e.manual?n:void 0,n}case`error`:{let n=e.error;return{...t,error:n,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:`idle`,status:`error`,isInvalidated:!0}}case`invalidate`:return{...t,isInvalidated:!0};case`setState`:return{...t,...e.state}}};this.state=t(this.state),M.batch(()=>{this.observers.slice().forEach(e=>{e.onQueryUpdate()}),this.#r.notify({query:this,type:`updated`,action:e})})}}})))()}function ft(e,t){return C(t.enabled,e)!==!1&&e.state.data===void 0&&(e.state.status!==`error`||C(t.retryOnMount,e)!==!1)}function pt(e,t){return ft(e,t)||e.state.data!==void 0&&mt(e,t,t.refetchOnMount)}function mt(e,t,n){if(C(t.enabled,e)!==!1&&C(t.staleTime,e)!==`static`){let r=C(n,e);return r===`always`||r!==!1&&gt(e,t)}return!1}function ht(e,t,n,r){return(e!==t||C(r.enabled,e)===!1)&&(!n.suspense||e.state.status!==`error`)&&gt(e,n)}function gt(e,t){return C(t.enabled,e)!==!1&&e.isStaleByTime(C(t.staleTime,e))}var _t;function vt(){return(vt=t((()=>{x(),O(),Ve(),j(),We(),N(),dt(),_t=class extends A{#e;#t=void 0;#n=void 0;#r=void 0;#i;#a;#o;#s;#c;#l;#u;#d;#f;#p=new Set;constructor(e,t){super(),this.options=t,this.#e=e,this.#o=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),pt(this.#t,this.options)?this.#m():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return mt(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return mt(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#b(),this.#x(),this.#t.removeObserver(this)}setOptions(e){let t=this.options,n=this.#t;if(this.options=this.#e.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!=`boolean`&&typeof this.options.enabled!=`function`&&typeof C(this.options.enabled,this.#t)!=`boolean`)throw Error(`Expected enabled to be a boolean or a callback that returns a boolean`);this.#S(),this.#t.setOptions(this.options),t._defaulted&&!Ee(this.options,t)&&this.#e.getQueryCache().notify({type:`observerOptionsUpdated`,query:this.#t,observer:this});let r=this.hasListeners();r&&ht(this.#t,n,this.options,t)&&this.#m(),this.updateResult(),r&&(this.#t!==n||C(this.options.enabled,this.#t)!==C(t.enabled,this.#t)||C(this.options.staleTime,this.#t)!==C(t.staleTime,this.#t))&&this.#g();let i=this.#_();r&&(this.#t!==n||C(this.options.enabled,this.#t)!==C(t.enabled,this.#t)||i!==this.#f)&&this.#v(i)}getOptimisticResult(e){let t=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(t,e);return Ee(this.getCurrentResult(),n)||(this.#r=n,this.#a=this.options,this.#i=this.#t.state),n}getCurrentResult(){return this.#r}trackResult(e,t){return new Proxy(e,{get:(e,n)=>(this.trackProp(n),t?.(n),Reflect.get(e,n))})}trackProp(e){this.#p.add(e)}getCurrentQuery(){return this.#t}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),n=this.#e.getQueryCache().build(this.#e,t),r=()=>{},i,a=new Promise(e=>{i=e,r=this.#e.getQueryCache().subscribe(i=>{i.type===`updated`&&i.query.queryHash===n.queryHash&&n.state.data!==void 0&&(r(),e(this.createResult(n,t)))})});return Promise.race([n.fetch(t).then(()=>{let e=this.createResult(n,t);return i?.(e),e}).finally(()=>{r()}),a])}fetch(e){return this.#m({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#r))}#m(e){this.#S();let t=this.#t.fetch(this.options,e);return e?.throwOnError||(t=t.catch(S)),t}#h(e){return!k()&&C(this.options.enabled,this.#t)!==!1&&be(e)}#g(){this.#b();let e=C(this.options.staleTime,this.#t);if(this.#r.isStale||!this.#h(e))return;let t=xe(this.#r.dataUpdatedAt,e)+1;this.#u=b.setTimeout(()=>{this.#r.isStale||this.updateResult()},t)}#_(){return C(this.options.refetchInterval,this.#t)??!1}#v(e){this.#x(),this.#f=e,this.#f!==0&&this.#h(this.#f)&&(this.#d=b.setInterval(()=>{(this.options.refetchIntervalInBackground||Ue.isFocused())&&this.#m()},this.#f))}#y(){this.#g(),this.#v(this.#_())}#b(){this.#u!==void 0&&(b.clearTimeout(this.#u),this.#u=void 0)}#x(){this.#d!==void 0&&(b.clearInterval(this.#d),this.#d=void 0)}createResult(e,t){let n=this.#t,r=this.options,i=this.#r,a=this.#i,o=this.#a,s=e===n?this.#n:e.state,{state:c}=e,l={...c},u=!1,d;if(t._optimisticResults){let i=this.hasListeners(),a=!i&&pt(e,t),o=i&&ht(e,n,t,r);(a||o)&&(l={...l,...st(c.data,e.options)}),t._optimisticResults===`isRestoring`&&(l.fetchStatus=`idle`)}let{error:f,errorUpdatedAt:p,status:m}=l;d=l.data;let h=!1;if(t.placeholderData!==void 0&&d===void 0&&m===`pending`){let e;i?.isPlaceholderData&&t.placeholderData===o?.placeholderData?(e=i.data,h=!0):e=typeof t.placeholderData==`function`?t.placeholderData(this.#l?.state.data,this.#l):t.placeholderData,e!==void 0&&(m=`success`,d=je(i?.data,e,t),u=!0)}if(t.select&&d!==void 0&&!h){if(i&&d===a?.data&&t.select===this.#s)d=this.#c;else try{this.#s=t.select,d=t.select(d),d=je(i?.data,d,t),this.#c=d,this.#o=null}catch(e){this.#o=e}}else d===void 0&&(this.#o=null);this.#o&&(f=this.#o,d=this.#c,p=i?.error===f?i.errorUpdatedAt:Date.now(),m=`error`,u=!1);let g=l.fetchStatus===`fetching`,_=m===`pending`,ee=m===`error`,v=_&&g,te=d!==void 0;return{status:m,fetchStatus:l.fetchStatus,isPending:_,isSuccess:m===`success`,isError:ee,isInitialLoading:v,isLoading:v,data:d,dataUpdatedAt:l.dataUpdatedAt,error:f,errorUpdatedAt:p,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:l.dataUpdateCount>s.dataUpdateCount||l.errorUpdateCount>s.errorUpdateCount,isFetching:g,isRefetching:g&&!_,isLoadingError:ee&&!te,isPaused:l.fetchStatus===`paused`,isPlaceholderData:u,isRefetchError:ee&&te,isStale:gt(e,t),refetch:this.refetch,isEnabled:C(t.enabled,e)!==!1}}updateResult(){let e=this.#r,t=this.createResult(this.#t,this.options);if(this.#i=this.#t.state,this.#a=this.options,this.#i.data!==void 0&&(this.#l=this.#t),Ee(t,e))return;this.#r=t;let n=(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,n=typeof t==`function`?t():t;if(n===`all`||!n&&!this.#p.size||this.options.throwOnError&&this.#r.error!==e.error)return!0;for(let t of n??this.#p)if(this.#r[t]!==e[t])return!0;return!1})();M.batch(()=>{n&&this.listeners.forEach(e=>{e(this.#r)}),this.#e.getQueryCache().notify({query:this.#t,type:`observerResultsUpdated`})})}#S(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#t)return;let t=this.#t;this.#t=e,this.#n=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}}})))()}var yt;function bt(){return(bt=t((()=>{it(),vt(),yt=class extends _t{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){e._type=`infinite`,super.setOptions(e)}getOptimisticResult(e){return e._type=`infinite`,super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:`forward`}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:`backward`}}})}createResult(e,t){let{state:n}=e,r=super.createResult(e,t),{isFetching:i,isRefetching:a,isError:o,isRefetchError:s}=r,c=n.fetchMeta?.fetchMore?.direction,l=o&&c===`forward`,u=i&&c===`forward`,d=o&&c===`backward`,f=i&&c===`backward`;return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:nt(t,n.data),hasPreviousPage:rt(t,n.data),isFetchNextPageError:l,isFetchingNextPage:u,isFetchPreviousPageError:d,isFetchingPreviousPage:f,isRefetchError:s&&!l&&!d,isRefetching:a&&!u&&!f}}}})))()}function xt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:`idle`,variables:void 0,submittedAt:0}}var St;function Ct(){return(Ct=t((()=>{N(),ot(),Qe(),St=class extends at{#e;#t;#n;#r;constructor(e){super(),this.#e=e.client,this.mutationId=e.mutationId,this.#n=e.mutationCache,this.#t=[],this.state=e.state||xt(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#n.notify({type:`observerAdded`,mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#n.notify({type:`observerRemoved`,mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status===`pending`?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??(this.state.status===`pending`?this.execute(this.state.variables):Promise.resolve())}async execute(e){let t=()=>{this.#i({type:`continue`})},n={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey},r=this.#r=Ze({fn:()=>this.options.mutationFn?this.options.mutationFn(e,n):Promise.reject(Error(`No mutationFn found`)),onFail:(e,t)=>{this.#i({type:`failed`,failureCount:e,error:t})},onPause:()=>{this.#i({type:`pause`})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)}),i=this.state.status===`pending`,a=!r.canStart();try{if(i)t();else{this.#i({type:`pending`,variables:e,isPaused:a}),this.#n.config.onMutate&&await this.#n.config.onMutate(e,this,n);let t=await this.options.onMutate?.(e,n);t!==this.state.context&&this.#i({type:`pending`,context:t,variables:e,isPaused:a})}this.state.isPaused&&r.canStart()&&t();let o=await r.start();return await this.#n.config.onSuccess?.(o,e,this.state.context,this,n),await this.options.onSuccess?.(o,e,this.state.context,n),await this.#n.config.onSettled?.(o,null,this.state.variables,this.state.context,this,n),await this.options.onSettled?.(o,null,e,this.state.context,n),this.#i({type:`success`,data:o}),o}catch(t){try{await this.#n.config.onError?.(t,e,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onError?.(t,e,this.state.context,n)}catch(e){Promise.reject(e)}try{await this.#n.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onSettled?.(void 0,t,e,this.state.context,n)}catch(e){Promise.reject(e)}throw this.#i({type:`error`,error:t}),t}finally{this.#r===r&&(this.#r=void 0),this.#n.runNext(this)}}#i(e){let t=t=>{switch(e.type){case`failed`:return{...t,failureCount:e.failureCount,failureReason:e.error};case`pause`:return{...t,isPaused:!0};case`continue`:return{...t,isPaused:!1};case`pending`:return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:`pending`,variables:e.variables,submittedAt:Date.now()};case`success`:return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:`success`,isPaused:!1};case`error`:return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:`error`}}};this.state=t(this.state),M.batch(()=>{this.#t.forEach(t=>{t.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:`updated`,action:e})})}}})))()}function I(e){return e.options.scope?.id}var wt;function Tt(){return(Tt=t((()=>{O(),j(),N(),Ct(),wt=class extends A{#e;#t;#n;constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}build(e,t,n){let r=new St({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){this.#e.add(e);let t=I(e);if(typeof t==`string`){let n=this.#t.get(t);n?n.push(e):this.#t.set(t,[e])}this.notify({type:`added`,mutation:e})}remove(e){if(this.#e.delete(e)){let t=I(e);if(typeof t==`string`){let n=this.#t.get(t);if(n){if(n.length>1){let t=n.indexOf(e);t!==-1&&n.splice(t,1)}else n[0]===e&&this.#t.delete(t)}}}this.notify({type:`removed`,mutation:e})}canRun(e){let t=I(e);if(typeof t==`string`){let n=this.#t.get(t)?.find(e=>e.state.status===`pending`);return!n||n===e}return!0}runNext(e){let t=I(e);return typeof t==`string`?(this.#t.get(t)?.find(t=>t!==e&&t.state.isPaused))?.continue()??Promise.resolve():Promise.resolve()}clear(){M.batch(()=>{let e=this.getAll();this.#e.clear(),this.#t.clear(),e.forEach(e=>{this.notify({type:`removed`,mutation:e})})})}getAll(){return Array.from(this.#e)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>Ce(t,e))}findAll(e={}){return this.getAll().filter(t=>Ce(e,t))}notify(e){M.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return M.batch(()=>Promise.all(e.map(e=>e.continue().catch(S))))}}})))()}var Et;function Dt(){return(Dt=t((()=>{O(),j(),N(),dt(),Et=class extends A{#e;constructor(e={}){super(),this.config=e,this.#e=new Map}build(e,t,n){let r=t.queryKey,i=t.queryHash??we(r,t),a=this.get(i);return a||(a=new ut({client:e,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:`added`,query:e}))}remove(e){this.#e.get(e.queryHash)===e&&(e.destroy(),this.#e.delete(e.queryHash),this.notify({type:`removed`,query:e}))}clear(){M.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>Se(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>Se(e,t)):t}notify(e){M.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){M.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){M.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}}})))()}var Ot;function kt(){return(kt=t((()=>{O(),We(),N(),Je(),Tt(),Dt(),Ot=class{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e={}){this.#e=e.queryCache||new Et,this.#t=e.mutationCache||new wt,this.#n=e.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#o=Ue.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=P.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#o?.(),this.#o=void 0,this.#s?.(),this.#s=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:`fetching`}).length}isMutating(e){return this.#t.findAll({...e,status:`pending`}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),n=this.#e.build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(C(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=this.#e.get(r.queryHash)?.state.data,a=ye(t,i);if(a!==void 0)return this.#e.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return M.batch(()=>this.#e.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){let t=this.#e;M.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#e;return M.batch(()=>{let r=n.findAll(e),i=new Set(r);return r.forEach(e=>{e.reset()}),this.refetchQueries({type:`active`,predicate:e=>i.has(e)},t)})}cancelQueries(e,t={}){let n={revert:!0,...t},r=M.batch(()=>this.#e.findAll(e).map(e=>e.cancel(n)));return Promise.all(r).then(S).catch(S)}invalidateQueries(e,t={}){return M.batch(()=>(this.#e.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType===`none`?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??`active`},t)))}refetchQueries(e,t={}){let n={...t,cancelRefetch:t.cancelRefetch??!0},r=M.batch(()=>this.#e.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,n),r=e.state.fetchStatus===`paused`;return(!n.throwOnError||r)&&(t=t.catch(S)),r?Promise.resolve():t}));return Promise.all(r).then(S)}async query(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=this.#e.build(this,t),r=n.isStaleByTime(C(t.staleTime,n))?await n.fetch(t):n.state.data,i=t.select;return i?i(r):r}fetchQuery(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=this.#e.build(this,t);return n.isStaleByTime(C(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(S).catch(S)}infiniteQuery(e){return e._type=`infinite`,this.query(e)}fetchInfiniteQuery(e){return e._type=`infinite`,this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(S).catch(S)}ensureInfiniteQueryData(e){return e._type=`infinite`,this.ensureQueryData(e)}resumePausedMutations(){return P.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#r.set(w(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#r.values()],n={};return t.forEach(t=>{T(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){this.#i.set(w(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#i.values()],n={};return t.forEach(t=>{T(e,t.mutationKey)&&Object.assign(n,t.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||=we(t.queryKey,t),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!==`always`),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode=`offlineFirst`),t.queryFn===E&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}}})))()}var At,jt,Mt;function Nt(){return(Nt=t((()=>{At=e(n(),1),jt=At.createContext(!1),Mt=()=>At.useContext(jt),jt.Provider})))()}function Pt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Ft,It,Lt;function Rt(){return(Rt=t((()=>{Ft=e(n(),1),r(),It=Ft.createContext(Pt()),Lt=()=>Ft.useContext(It)})))()}var zt,Bt,Vt,Ht;function Ut(){return(Ut=t((()=>{O(),zt=e(n(),1),Bt=(e,t,n)=>{let r=n?.state.status===`error`&&typeof e.throwOnError==`function`?Ie(e.throwOnError,[n.state.error,n]):e.throwOnError;(e.suspense||r)&&(t.isReset()||(e.retryOnMount=!1))},Vt=e=>{zt.useEffect(()=>{e.clearReset()},[e])},Ht=({result:e,errorResetBoundary:t,throwOnError:n,query:r,suspense:i})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(i&&e.data===void 0||Ie(n,[e.error,r]))})))()}var Wt,Gt,Kt;function qt(){return(qt=t((()=>{Wt=e=>{if(e.suspense){let t=1e3,n=e=>e===`static`?e:Math.max(e??t,t),r=e.staleTime;e.staleTime=typeof r==`function`?(...e)=>n(r(...e)):n(r),typeof e.gcTime==`number`&&(e.gcTime=Math.max(e.gcTime,t))}},Gt=(e,t)=>e?.suspense&&t.isPending,Kt=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()})})))()}function Jt(e,t,n){let r=Mt(),i=Lt(),a=me(n),o=a.defaultQueryOptions(e),s=a.getQueryCache().get(o.queryHash),c=e.subscribed!==!1;o._optimisticResults=r?`isRestoring`:c?`optimistic`:void 0,Wt(o),Bt(o,i,s),Vt(i);let[l]=L.useState(()=>new t(a,o)),u=l.getOptimisticResult(o);L.useEffect(()=>{l.setOptions(o)},[o,l]);let d=!r&&c;if(L.useSyncExternalStore(L.useCallback(e=>{let t=d?l.subscribe(M.batchCalls(e)):S;return l.updateResult(),t},[l,d]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),Gt(o,u))throw Kt(o,l,i);if(Ht({result:u,errorResetBoundary:i,throwOnError:o.throwOnError,query:s,suspense:o.suspense}))throw u.error;return o.notifyOnChangeProps?u:l.trackResult(u)}var L;function Yt(){return(Yt=t((()=>{he(),Nt(),Rt(),Ut(),qt(),O(),N(),L=e(n(),1)})))()}function Xt(e,t){return Jt(e,yt,t)}function Zt(){return(Zt=t((()=>{Yt(),bt()})))()}var R,z,B,Qt,V,H,U,W,G,K,$t,en,q,tn,nn,J,rn,Y,X,Z,Q,an,$,on;function sn(){return(sn=t((()=>{R=n(),O(),kt(),Zt(),f(),_(),s(),u(),c(),a(),ue(),te(),ce(),ie(),ee(),oe(),z=r(),{fn:B}=__STORYBOOK_MODULE_TEST__,Qt={title:`Components/Table/Virtualized`,tags:[`visual`],component:p,parameters:{layout:`fullscreen`,chromatic:{delay:2e3}},args:{columns:ae,data:[],stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:B()},decorators:[e=>ne(()=>(0,z.jsx)(`div`,{className:v.virtualizedStoryHeight,children:(0,z.jsx)(e,{})}))]},V=new Ot({defaultOptions:{queries:{staleTime:3e5,gcTime:6e5,refetchOnWindowFocus:!1}}}),H=async(e,t,n,r)=>de(()=>y(e,t,n,r)),U={args:{virtualized:!0,data:[]}},W={name:`Virtualized Selectable Table`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,R.useState)([]),{data:r,fetchNextPage:a,isFetching:s,isLoading:c}=Xt({queryKey:[`people`,t],queryFn:async({pageParam:e})=>{let n=e*10;return await H(n,10,t)},initialPageParam:0,getNextPageParam:(e,t)=>t.length,placeholderData:Me},V),l=(0,R.useMemo)(()=>r?.pages.flatMap(e=>e.data)??[],[r]),u=r?.pages[0]?.meta.totalRowCount??0,f=l.length<u;return(0,z.jsxs)(`div`,{className:v.virtualizedTableWrapper,children:[(0,z.jsx)(p,{...e,data:l,onSortingChange:n,virtualized:!0,infiniteScroll:{hasMore:f,isLoadingMore:s,onLoadMore:a}}),c&&(0,z.jsx)(`div`,{className:v.loadingOverlay,children:(0,z.jsxs)(d,{direction:`column`,gap:8,alignItems:`center`,children:[(0,z.jsx)(o,{size:`small`}),(0,z.jsx)(i,{variant:`body-sm-reg`,color:`secondary`,children:`Loading data...`})]})})]})},args:{selectable:!0,columns:ae.map(e=>`accessorKey`in e&&e.accessorKey===`age`?{...e,size:100}:e),onScroll:B()}},G={name:`Virtualized Expandable Table`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,R.useState)([]),{data:r,fetchNextPage:a,isFetching:s,isLoading:c}=Xt({queryKey:[`people-expandable`,t],queryFn:async({pageParam:e})=>{let n=e*10;return await H(n,10,t)},initialPageParam:0,getNextPageParam:(e,t)=>t.length,placeholderData:Me},V),l=(0,R.useMemo)(()=>r?.pages.flatMap(e=>e.data)??[],[r]),u=r?.pages[0]?.meta.totalRowCount??0,f=l.length<u;return(0,z.jsxs)(`div`,{className:v.virtualizedTableWrapper,children:[(0,z.jsx)(p,{...e,data:l,onSortingChange:n,virtualized:!0,expandable:!0,infiniteScroll:{hasMore:f,isLoadingMore:s,onLoadMore:a},renderExpandedRow:e=>(0,z.jsxs)(d,{direction:`column`,gap:8,children:[(0,z.jsxs)(d,{direction:`column`,gap:4,children:[(0,z.jsxs)(i,{variant:`heading4`,children:[`Expanded Details for `,e.firstName]}),(0,z.jsxs)(i,{variant:`body-sm-reg`,children:[`ID: `,e.id]}),(0,z.jsxs)(i,{variant:`body-sm-reg`,children:[`Full Name: `,e.firstName,` `,e.lastName]}),(0,z.jsxs)(i,{variant:`body-sm-reg`,children:[`Status: `,e.status]})]}),(0,z.jsx)(p,{columns:[{accessorKey:`id`,header:`ID`},{accessorKey:`firstName`,header:`First Name`},{accessorKey:`lastName`,header:`Last Name`}],data:re.slice(0,3)})]})}),c&&(0,z.jsx)(`div`,{className:v.loadingOverlay,children:(0,z.jsxs)(d,{direction:`column`,gap:8,alignItems:`center`,children:[(0,z.jsx)(o,{size:`small`}),(0,z.jsx)(i,{variant:`body-sm-reg`,color:`secondary`,children:`Loading data...`})]})})]})},args:{columns:ae.map(e=>`accessorKey`in e&&e.accessorKey===`age`?{...e,size:100}:e),onScroll:B()}},K={name:`Virtualized Infinite Scroll`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,R.useState)([]),{data:r,fetchNextPage:i,isFetching:a}=Xt({queryKey:[`people-autofill`,t],queryFn:async({pageParam:e})=>{let n=e*5;return await H(n,5,t,60)},initialPageParam:0,getNextPageParam:(e,t)=>t.length,placeholderData:Me},V),o=(0,R.useMemo)(()=>r?.pages.flatMap(e=>e.data)??[],[r]),s=r?.pages[0]?.meta.totalRowCount??60,c=o.length<s;return(0,z.jsx)(`div`,{className:v.virtualizedTableWrapper,children:(0,z.jsx)(p,{...e,data:o,onSortingChange:n,virtualized:!0,infiniteScroll:{hasMore:c,isLoadingMore:a,onLoadMore:i}})})}},$t=[{label:`Single`,value:`single`},{label:`Relationship`,value:`relationship`},{label:`Complicated`,value:`complicated`}],en={single:`Single`,relationship:`Relationship`,complicated:`Complicated`},q=1e3,tn=(e,t,n,r)=>e.map(e=>e.id===t?{...e,[n]:r}:e),nn=(e,t)=>`accessorKey`in e&&e.accessorKey===t,J=e=>ae.find(t=>nn(t,e))??{accessorKey:e,header:e,cell:e=>e.getValue()},rn=[{accessorKey:`id`,header:`ID`,size:60,cell:e=>(0,z.jsx)(`span`,{className:le.readOnlyCell,children:e.getValue()})},{...J(`firstName`),editCell:e=>(0,z.jsx)(g,{cellContext:e,placeholder:`Enter first name`})},{...J(`lastName`),editCell:e=>(0,z.jsx)(g,{cellContext:e,placeholder:`Enter last name`})},{...J(`age`),size:100,editCell:e=>(0,z.jsx)(m,{cellContext:e,min:0,max:120})},{...J(`visits`),size:100,editCell:e=>(0,z.jsx)(m,{cellContext:e,min:0})},{...J(`status`),size:160,cell:e=>en[e.getValue()],editCell:e=>(0,z.jsx)(h,{cellContext:e,options:$t})},{...J(`progress`),editCell:e=>(0,z.jsx)(m,{cellContext:e,min:0,max:100})}],Y={name:`Virtualized Editable Table`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,R.useState)(()=>y(0,q,[]).data);return(0,z.jsx)(`div`,{className:v.virtualizedTableWrapper,children:(0,z.jsx)(p,{...e,data:t,columns:rn,virtualized:!0,onCellEdit:(e,t,r)=>{n(n=>tn(n,e.id,t,r))}})})}},X={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t]=(0,R.useState)(()=>y(0,q,[]).data);return(0,z.jsx)(p,{...e,data:t,virtualized:!0})},args:{controls:(0,z.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,z.jsx)(l,{variant:`secondary`,size:`small`,children:`RED version V2`}),(0,z.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,z.jsx)(l,{variant:`secondary`,size:`small`,children:`Import RED`}),(0,z.jsx)(l,{variant:`secondary`,size:`small`,children:`Export RED`}),(0,z.jsx)(l,{size:`small`,children:`Actions`})]})]})}},Z={name:`Virtualized Resizable Columns`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t]=(0,R.useState)(()=>y(0,q,[]).data);return(0,z.jsx)(`div`,{className:v.virtualizedTableWrapper,children:(0,z.jsx)(p,{...e,data:t})})},args:{virtualized:!0,resizableColumns:!0}},Q={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t]=(0,R.useState)(()=>y(0,q,[]).data);return(0,z.jsx)(p,{...e,data:t})},args:{virtualized:!0,columnDisplay:!0,reorderableColumns:!0}},an=[{accessorKey:`change`,header:`Change`,cell:e=>e.getValue(),size:140},{accessorKey:`owner`,header:`Owner`,cell:e=>e.getValue(),size:200},{accessorKey:`notes`,header:`Notes`,cell:e=>e.getValue(),size:420}],$={parameters:{docs:{source:{type:`code`}}},render:function(){let[e]=(0,R.useState)(()=>se(q));return(0,z.jsx)(`div`,{className:v.virtualizedTableWrapper,children:(0,z.jsx)(p,{bordered:!0,fullWidth:!0,stickyHeader:!0,virtualized:!0,rowSize:`auto`,data:e,columns:an})})}},on=[`EmptyState`,`VirtualizedSelectable`,`VirtualizedExpandable`,`InfiniteScroll`,`VirtualizedEditable`,`VirtualizedWithControls`,`VirtualizedResizable`,`VirtualizedWithColumnDisplay`,`VirtualizedAutoRowHeight`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    virtualized: true,
    data: []
  }
}`,...U.parameters?.docs?.source},description:{story:`Virtualized table with inferred **no-data** empty state. Headers stay visible.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Virtualized Selectable Table',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const pageSize = 10;
    const [sorting, setSorting] = useState<SortingState>([]);
    const {
      data: infiniteQueryData,
      fetchNextPage,
      isFetching,
      isLoading
    } = useInfiniteQuery({
      queryKey: ['people', sorting],
      queryFn: async ({
        pageParam
      }) => {
        const start = pageParam * pageSize;
        return await fetchData(start, pageSize, sorting);
      },
      initialPageParam: 0,
      getNextPageParam: (_lastGroup, groups) => groups.length,
      placeholderData: keepPreviousData
    }, queryClient);
    const flatData = useMemo(() => infiniteQueryData?.pages.flatMap(page => page.data) ?? [], [infiniteQueryData]);
    const totalRows = infiniteQueryData?.pages[0]?.meta.totalRowCount ?? 0;
    const hasMore = flatData.length < totalRows;
    return <div className={styles.virtualizedTableWrapper}>
                <DsTable {...args} data={flatData} onSortingChange={setSorting} virtualized={true} infiniteScroll={{
        hasMore,
        isLoadingMore: isFetching,
        onLoadMore: fetchNextPage
      }} />
                {isLoading && <div className={styles.loadingOverlay}>
                        <DsStack direction="column" gap={8} alignItems="center">
                            <DsSpinner size="small" />
                            <DsTypography variant="body-sm-reg" color="secondary">
                                Loading data...
                            </DsTypography>
                        </DsStack>
                    </div>}
            </div>;
  },
  args: {
    selectable: true,
    columns: columns.map(col => {
      if ('accessorKey' in col && col.accessorKey === 'age') {
        return {
          ...col,
          size: 100
        };
      }
      return col;
    }),
    onScroll: fn()
  }
}`,...W.parameters?.docs?.source},description:{story:"Row virtualization with selection, backed by TanStack Query infinite scroll.\nKeep the flattened pages in `data`, wire `infiniteScroll` to the query's\n`fetchNextPage` / loading flags, and the table renders only visible rows —\nperformant even for very large datasets.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Virtualized Expandable Table',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const pageSize = 10;
    const [sorting, setSorting] = useState<SortingState>([]);
    const {
      data: infiniteQueryData,
      fetchNextPage,
      isFetching,
      isLoading
    } = useInfiniteQuery({
      queryKey: ['people-expandable', sorting],
      queryFn: async ({
        pageParam
      }) => {
        const start = pageParam * pageSize;
        return await fetchData(start, pageSize, sorting);
      },
      initialPageParam: 0,
      getNextPageParam: (_lastGroup, groups) => groups.length,
      placeholderData: keepPreviousData
    }, queryClient);
    const flatData = useMemo(() => infiniteQueryData?.pages.flatMap(page => page.data) ?? [], [infiniteQueryData]);
    const totalRows = infiniteQueryData?.pages[0]?.meta.totalRowCount ?? 0;
    const hasMore = flatData.length < totalRows;
    return <div className={styles.virtualizedTableWrapper}>
                <DsTable {...args} data={flatData} onSortingChange={setSorting} virtualized={true} expandable={true} infiniteScroll={{
        hasMore,
        isLoadingMore: isFetching,
        onLoadMore: fetchNextPage
      }} renderExpandedRow={row => <DsStack direction="column" gap={8}>
                            <DsStack direction="column" gap={4}>
                                <DsTypography variant="heading4">Expanded Details for {row.firstName}</DsTypography>
                                <DsTypography variant="body-sm-reg">ID: {row.id}</DsTypography>
                                <DsTypography variant="body-sm-reg">
                                    Full Name: {row.firstName} {row.lastName}
                                </DsTypography>
                                <DsTypography variant="body-sm-reg">Status: {row.status}</DsTypography>
                            </DsStack>

                            <DsTable columns={[{
          accessorKey: 'id',
          header: 'ID'
        }, {
          accessorKey: 'firstName',
          header: 'First Name'
        }, {
          accessorKey: 'lastName',
          header: 'Last Name'
        }]} data={defaultData.slice(0, 3)} />
                        </DsStack>} />
                {isLoading && <div className={styles.loadingOverlay}>
                        <DsStack direction="column" gap={8} alignItems="center">
                            <DsSpinner size="small" />
                            <DsTypography variant="body-sm-reg" color="secondary">
                                Loading data...
                            </DsTypography>
                        </DsStack>
                    </div>}
            </div>;
  },
  args: {
    columns: columns.map(col => {
      if ('accessorKey' in col && col.accessorKey === 'age') {
        return {
          ...col,
          size: 100
        };
      }
      return col;
    }),
    onScroll: fn()
  }
}`,...G.parameters?.docs?.source},description:{story:"Combine row virtualization with expandable rows. `renderExpandedRow` supplies\nthe detail content for each expanded row while the body stays virtualized.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Virtualized Infinite Scroll',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const pageSize = 5;
    const totalRows = 60;
    const [sorting, setSorting] = useState<SortingState>([]);
    const {
      data: infiniteQueryData,
      fetchNextPage,
      isFetching
    } = useInfiniteQuery({
      queryKey: ['people-autofill', sorting],
      queryFn: async ({
        pageParam
      }) => {
        const start = pageParam * pageSize;
        return await fetchData(start, pageSize, sorting, totalRows);
      },
      initialPageParam: 0,
      getNextPageParam: (_lastGroup, groups) => groups.length,
      placeholderData: keepPreviousData
    }, queryClient);
    const flatData = useMemo(() => infiniteQueryData?.pages.flatMap(page => page.data) ?? [], [infiniteQueryData]);
    const fetchedTotal = infiniteQueryData?.pages[0]?.meta.totalRowCount ?? totalRows;
    const hasMore = flatData.length < fetchedTotal;
    return <div className={styles.virtualizedTableWrapper}>
                <DsTable {...args} data={flatData} onSortingChange={setSorting} virtualized={true} infiniteScroll={{
        hasMore,
        isLoadingMore: isFetching,
        onLoadMore: fetchNextPage
      }} />
            </div>;
  }
}`,...K.parameters?.docs?.source},description:{story:"When the first page returns too few rows to fill the viewport, `autoFill`\n(on by default) keeps requesting pages until the content becomes scrollable,\nso infinite scroll can take over. Wire `infiniteScroll` to your query's\n`fetchNextPage` and loading flags.",...K.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Virtualized Editable Table',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [data, setData] = useState(() => generatePersonData(0, VIRTUALIZED_ROW_COUNT, []).data);
    return <div className={styles.virtualizedTableWrapper}>
                <DsTable {...args} data={data} columns={editableColumns} virtualized onCellEdit={(row: Person, columnId, value) => {
        setData(rows => updateRow(rows, row.id, columnId as keyof Person, value as never));
      }} />
            </div>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Inline editing works with row virtualization for large datasets. Scroll
through thousands of rows and double-click any editable cell to edit in place;
\`onCellEdit\` reports the row, column, and new value to persist.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [data] = useState(() => generatePersonData(0, VIRTUALIZED_ROW_COUNT, []).data);
    return <DsTable {...args} data={data} virtualized />;
  },
  args: {
    controls: <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                <DsButtonV3 variant="secondary" size="small">
                    RED version V2
                </DsButtonV3>
                <DsStack direction="row" gap={8} alignItems="center">
                    <DsButtonV3 variant="secondary" size="small">
                        Import RED
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small">
                        Export RED
                    </DsButtonV3>
                    <DsButtonV3 size="small">Actions</DsButtonV3>
                </DsStack>
            </DsStack>
  }
}`,...X.parameters?.docs?.source},description:{story:"The pinned `controls` bar stays fixed above the header while the virtualized\nbody scrolls through a large dataset.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Virtualized Resizable Columns',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [data] = useState(() => generatePersonData(0, VIRTUALIZED_ROW_COUNT, []).data);
    return <div className={styles.virtualizedTableWrapper}>
                <DsTable {...args} data={data} />
            </div>;
  },
  args: {
    virtualized: true,
    resizableColumns: true
  }
}`,...Z.parameters?.docs?.source},description:{story:`Row virtualization and column resize work together. Scroll a large
dataset and drag a header edge to resize; widths apply to virtualized
rows. Double-click a handle to restore the snapshotted width.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [data] = useState(() => generatePersonData(0, VIRTUALIZED_ROW_COUNT, []).data);
    return <DsTable {...args} data={data} />;
  },
  args: {
    virtualized: true,
    columnDisplay: true,
    reorderableColumns: true
  }
}`,...Q.parameters?.docs?.source},description:{story:"Row virtualization with the Columns button. Hidden columns drop out of every\nvirtualized row, and `reorderableColumns` lets users reorder columns from the popup.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [data] = useState(() => generateChangeNotes(VIRTUALIZED_ROW_COUNT));
    return <div className={styles.virtualizedTableWrapper}>
                <DsTable bordered fullWidth stickyHeader virtualized rowSize="auto" data={data} columns={changeNoteColumns} />
            </div>;
  }
}`,...$.parameters?.docs?.source},description:{story:'`rowSize="auto"` with row virtualization. Each row is measured as it renders,\nso rows of different heights scroll without overlapping or leaving gaps.',...$.parameters?.docs?.description}}}})))()}sn();export{U as EmptyState,K as InfiniteScroll,$ as VirtualizedAutoRowHeight,Y as VirtualizedEditable,G as VirtualizedExpandable,Z as VirtualizedResizable,W as VirtualizedSelectable,Q as VirtualizedWithColumnDisplay,X as VirtualizedWithControls,on as __namedExportsOrder,Qt as default};