import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Cvn64zKl.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{r as i}from"./ds-spinner.types-AJp-MFoK.js";import{t as a}from"./ds-spinner-348ukaVM.js";import{n as o,t as s}from"./ds-table-b-GeZA2j.js";import{n as c,t as l}from"./ds-table.stories.module-BQO6U9br.js";import{c as u,l as d,n as f,o as p,s as m,t as h,u as g}from"./components-DvoQfwmr.js";import{n as _,t as v}from"./story-test-helpers-mSAzD2Wl.js";var y,b=t((()=>{y=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}})),x,S,C=t((()=>{b(),x=class extends y{#e;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e();return window.addEventListener(`visibilitychange`,t,!1),()=>{window.removeEventListener(`visibilitychange`,t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(e=>{typeof e==`boolean`?this.setFocused(e):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e==`boolean`?this.#e:globalThis.document?.visibilityState!==`hidden`}},S=new x}));function ee(e){setTimeout(e,0)}var te,ne,w,T=t((()=>{te={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},ne=class{#e=te;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}},w=new ne}));function E(){}function re(e,t){return typeof e==`function`?e(t):e}function D(e){return typeof e==`number`&&e>=0&&e!==1/0}function ie(e,t){return Math.max(e+(t||0)-Date.now(),0)}function O(e,t){return typeof e==`function`?e(t):e}function k(e,t){return typeof e==`function`?e(t):e}function ae(e,t){let{type:n=`all`,exact:r,fetchStatus:i,predicate:a,queryKey:o,stale:s}=e;if(o){if(r){if(t.queryHash!==A(o,t.options))return!1}else if(!M(t.queryKey,o))return!1}if(n!==`all`){let e=t.isActive();if(n===`active`&&!e||n===`inactive`&&e)return!1}return!(typeof s==`boolean`&&t.isStale()!==s||i&&i!==t.state.fetchStatus||a&&!a(t))}function oe(e,t){let{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(j(t.options.mutationKey)!==j(a))return!1}else if(!M(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function A(e,t){return(t?.queryKeyHashFn||j)(e)}function j(e){return JSON.stringify(e,(e,t)=>le(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function M(e,t){return e===t?!0:typeof e==typeof t&&e&&t&&typeof e==`object`&&typeof t==`object`?Object.keys(t).every(n=>M(e[n],t[n])):!1}function se(e,t,n=0){if(e===t)return e;if(n>500)return t;let r=ce(e)&&ce(t);if(!r&&!(le(e)&&le(t)))return t;let i=(r?e:Object.keys(e)).length,a=r?t:Object.keys(t),o=a.length,s=r?Array(o):{},c=0;for(let l=0;l<o;l++){let o=r?l:a[l],u=e[o],d=t[o];if(u===d){s[o]=u,(r?l<i:be.call(e,o))&&c++;continue}if(u===null||d===null||typeof u!=`object`||typeof d!=`object`){s[o]=d;continue}let f=se(u,d,n+1);s[o]=f,f===u&&c++}return i===o&&c===i?e:s}function N(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function ce(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function le(e){if(!ue(e))return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(!ue(n)||!n.hasOwnProperty(`isPrototypeOf`)||Object.getPrototypeOf(e)!==Object.prototype)}function ue(e){return Object.prototype.toString.call(e)===`[object Object]`}function de(e){return new Promise(t=>{w.setTimeout(t,e)})}function fe(e,t,n){return typeof n.structuralSharing==`function`?n.structuralSharing(e,t):n.structuralSharing===!1?t:se(e,t)}function pe(e){return e}function me(e,t,n=0){let r=[...e,t];return n&&r.length>n?r.slice(1):r}function he(e,t,n=0){let r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}function ge(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===P?()=>Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function _e(e,t){return typeof e==`function`?e(...t):!!e}function ve(e,t,n){let r=!1,i;return Object.defineProperty(e,`signal`,{enumerable:!0,get:()=>(i??=t(),r?i:(r=!0,i.aborted?n():i.addEventListener(`abort`,n,{once:!0}),i))}),e}var ye,be,P,F=t((()=>{T(),ye=typeof window>`u`||`Deno`in globalThis,be=Object.prototype.hasOwnProperty,P=Symbol()})),I,L=t((()=>{F(),I=(()=>{let e=()=>ye;return{isServer(){return e()},setIsServer(t){e=t}}})()}));function R(){let e,t,n=new Promise((n,r)=>{e=n,t=r});n.status=`pending`,n.catch(()=>{});function r(e){Object.assign(n,e),delete n.resolve,delete n.reject}return n.resolve=t=>{r({status:`fulfilled`,value:t}),e(t)},n.reject=e=>{r({status:`rejected`,reason:e}),t(e)},n}var xe=t((()=>{}));function Se(){let e=[],t=0,n=e=>{e()},r=e=>{e()},i=Ce,a=r=>{t?e.push(r):i(()=>{n(r)})},o=()=>{let t=e;e=[],t.length&&i(()=>{r(()=>{t.forEach(e=>{n(e)})})})};return{batch:e=>{let n;t++;try{n=e()}finally{t--,t||o()}return n},batchCalls:e=>(...t)=>{a(()=>{e(...t)})},schedule:a,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{r=e},setScheduler:e=>{i=e}}}var Ce,z,B=t((()=>{T(),Ce=ee,z=Se()})),we,V,Te=t((()=>{b(),we=class extends y{#e=!0;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e(!0),n=()=>e(!1);return window.addEventListener(`online`,t,!1),window.addEventListener(`offline`,n,!1),()=>{window.removeEventListener(`online`,t),window.removeEventListener(`offline`,n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#e}},V=new we}));function Ee(e){return Math.min(1e3*2**e,3e4)}function De(e){return(e??`online`)===`online`?V.isOnline():!0}function Oe(e){let t=!1,n=0,r,i=R(),a=()=>i.status!==`pending`,o=t=>{if(!a()){let n=new H(t);f(n),e.onCancel?.(n)}},s=()=>{t=!0},c=()=>{t=!1},l=()=>S.isFocused()&&(e.networkMode===`always`||V.isOnline())&&e.canRun(),u=()=>De(e.networkMode)&&e.canRun(),d=e=>{a()||(r?.(),i.resolve(e))},f=e=>{a()||(r?.(),i.reject(e))},p=()=>new Promise(t=>{r=e=>{(a()||l())&&t(e)},e.onPause?.()}).then(()=>{r=void 0,a()||e.onContinue?.()}),m=()=>{if(a())return;let r,i=n===0?e.initialPromise:void 0;try{r=i??e.fn()}catch(e){r=Promise.reject(e)}Promise.resolve(r).then(d).catch(r=>{if(a())return;let i=e.retry??(I.isServer()?0:3),o=e.retryDelay??Ee,s=typeof o==`function`?o(n,r):o,c=i===!0||typeof i==`number`&&n<i||typeof i==`function`&&i(n,r);if(t||!c){f(r);return}n++,e.onFail?.(n,r),de(s).then(()=>l()?void 0:p()).then(()=>{t?f(r):m()})})};return{promise:i,status:()=>i.status,cancel:o,continue:()=>(r?.(),i),cancelRetry:s,continueRetry:c,canStart:u,start:()=>(u()?m():p().then(m),i)}}var H,ke=t((()=>{C(),Te(),xe(),L(),F(),H=class extends Error{constructor(e){super(`CancelledError`),this.revert=e?.revert,this.silent=e?.silent}}})),Ae,je=t((()=>{T(),L(),F(),Ae=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),D(this.gcTime)&&(this.#e=w.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(I.isServer()?1/0:300*1e3))}clearGcTimeout(){this.#e&&=(w.clearTimeout(this.#e),void 0)}}}));function Me(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:De(t.networkMode)?`fetching`:`paused`,...e===void 0&&{error:null,status:`pending`}}}function Ne(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:`success`}}function Pe(e){let t=typeof e.initialData==`function`?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt==`function`?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?`success`:`pending`,fetchStatus:`idle`}}var Fe,Ie=t((()=>{F(),B(),ke(),je(),Fe=class extends Ae{#e;#t;#n;#r;#i;#a;#o;constructor(e){super(),this.#o=!1,this.#a=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#r=e.client,this.#n=this.#r.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=Pe(this.options),this.state=e.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(e){if(this.options={...this.#a,...e},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){let e=Pe(this.options);e.data!==void 0&&(this.setState(Ne(e.data,e.dataUpdatedAt)),this.#e=e)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus===`idle`&&this.#n.remove(this)}setData(e,t){let n=fe(this.state.data,e,this.options);return this.#c({data:n,type:`success`,dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e,t){this.#c({type:`setState`,state:e,setStateOptions:t})}cancel(e){let t=this.#i?.promise;return this.#i?.cancel(e),t?t.then(E).catch(E):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#e}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>k(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===P||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>O(e.options.staleTime,this)===`static`):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e===`static`?!1:this.state.isInvalidated?!0:!ie(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(e=>e.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){this.observers.find(e=>e.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#n.notify({type:`observerAdded`,query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#i&&(this.#o||this.#s()?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#n.notify({type:`observerRemoved`,query:this,observer:e}))}getObserversCount(){return this.observers.length}#s(){return this.state.fetchStatus===`paused`&&this.state.status===`pending`}invalidate(){this.state.isInvalidated||this.#c({type:`invalidate`})}async fetch(e,t){if(this.state.fetchStatus!==`idle`&&this.#i?.status()!==`rejected`){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let n=new AbortController,r=e=>{Object.defineProperty(e,`signal`,{enumerable:!0,get:()=>(this.#o=!0,n.signal)})},i=()=>{let e=ge(this.options,t),n=(()=>{let e={client:this.#r,queryKey:this.queryKey,meta:this.meta};return r(e),e})();return this.#o=!1,this.options.persister?this.options.persister(e,n,this):e(n)},a=(()=>{let e={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#r,state:this.state,fetchFn:i};return r(e),e})();this.options.behavior?.onFetch(a,this),this.#t=this.state,(this.state.fetchStatus===`idle`||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#c({type:`fetch`,meta:a.fetchOptions?.meta}),this.#i=Oe({initialPromise:t?.initialPromise,fn:a.fetchFn,onCancel:e=>{e instanceof H&&e.revert&&this.setState({...this.#t,fetchStatus:`idle`}),n.abort()},onFail:(e,t)=>{this.#c({type:`failed`,failureCount:e,error:t})},onPause:()=>{this.#c({type:`pause`})},onContinue:()=>{this.#c({type:`continue`})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0});try{let e=await this.#i.start();if(e===void 0)throw Error(`${this.queryHash} data is undefined`);return this.setData(e),this.#n.config.onSuccess?.(e,this),this.#n.config.onSettled?.(e,this.state.error,this),e}catch(e){if(e instanceof H){if(e.silent)return this.#i.promise;if(e.revert){if(this.state.data===void 0)throw e;return this.state.data}}throw this.#c({type:`error`,error:e}),this.#n.config.onError?.(e,this),this.#n.config.onSettled?.(this.state.data,e,this),e}finally{this.scheduleGc()}}#c(e){this.state=(t=>{switch(e.type){case`failed`:return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case`pause`:return{...t,fetchStatus:`paused`};case`continue`:return{...t,fetchStatus:`fetching`};case`fetch`:return{...t,...Me(t.data,this.options),fetchMeta:e.meta??null};case`success`:let n={...t,...Ne(e.data,e.dataUpdatedAt),dataUpdateCount:t.dataUpdateCount+1,...!e.manual&&{fetchStatus:`idle`,fetchFailureCount:0,fetchFailureReason:null}};return this.#t=e.manual?n:void 0,n;case`error`:let r=e.error;return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:`idle`,status:`error`,isInvalidated:!0};case`invalidate`:return{...t,isInvalidated:!0};case`setState`:return{...t,...e.state}}})(this.state),z.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#n.notify({query:this,type:`updated`,action:e})})}}}));function Le(e,t){return k(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status===`error`&&t.retryOnMount===!1)}function Re(e,t){return Le(e,t)||e.state.data!==void 0&&ze(e,t,t.refetchOnMount)}function ze(e,t,n){if(k(t.enabled,e)!==!1&&O(t.staleTime,e)!==`static`){let r=typeof n==`function`?n(e):n;return r===`always`||r!==!1&&Ve(e,t)}return!1}function Be(e,t,n,r){return(e!==t||k(r.enabled,e)===!1)&&(!n.suspense||e.state.status!==`error`)&&Ve(e,n)}function Ve(e,t){return k(t.enabled,e)!==!1&&e.isStaleByTime(O(t.staleTime,e))}function He(e,t){return!N(e.getCurrentResult(),t)}var Ue,We=t((()=>{C(),L(),B(),Ie(),b(),xe(),F(),T(),Ue=class extends y{constructor(e,t){super(),this.options=t,this.#e=e,this.#s=null,this.#o=R(),this.bindMethods(),this.setOptions(t)}#e;#t=void 0;#n=void 0;#r=void 0;#i;#a;#o;#s;#c;#l;#u;#d;#f;#p;#m=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),Re(this.#t,this.options)?this.#h():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ze(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ze(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#b(),this.#x(),this.#t.removeObserver(this)}setOptions(e){let t=this.options,n=this.#t;if(this.options=this.#e.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!=`boolean`&&typeof this.options.enabled!=`function`&&typeof k(this.options.enabled,this.#t)!=`boolean`)throw Error(`Expected enabled to be a boolean or a callback that returns a boolean`);this.#S(),this.#t.setOptions(this.options),t._defaulted&&!N(this.options,t)&&this.#e.getQueryCache().notify({type:`observerOptionsUpdated`,query:this.#t,observer:this});let r=this.hasListeners();r&&Be(this.#t,n,this.options,t)&&this.#h(),this.updateResult(),r&&(this.#t!==n||k(this.options.enabled,this.#t)!==k(t.enabled,this.#t)||O(this.options.staleTime,this.#t)!==O(t.staleTime,this.#t))&&this.#g();let i=this.#_();r&&(this.#t!==n||k(this.options.enabled,this.#t)!==k(t.enabled,this.#t)||i!==this.#p)&&this.#v(i)}getOptimisticResult(e){let t=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(t,e);return He(this,n)&&(this.#r=n,this.#a=this.options,this.#i=this.#t.state),n}getCurrentResult(){return this.#r}trackResult(e,t){return new Proxy(e,{get:(e,n)=>(this.trackProp(n),t?.(n),n===`promise`&&(this.trackProp(`data`),!this.options.experimental_prefetchInRender&&this.#o.status===`pending`&&this.#o.reject(Error(`experimental_prefetchInRender feature flag is not enabled`))),Reflect.get(e,n))})}trackProp(e){this.#m.add(e)}getCurrentQuery(){return this.#t}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),n=this.#e.getQueryCache().build(this.#e,t);return n.fetch().then(()=>this.createResult(n,t))}fetch(e){return this.#h({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#r))}#h(e){this.#S();let t=this.#t.fetch(this.options,e);return e?.throwOnError||(t=t.catch(E)),t}#g(){this.#b();let e=O(this.options.staleTime,this.#t);if(I.isServer()||this.#r.isStale||!D(e))return;let t=ie(this.#r.dataUpdatedAt,e)+1;this.#d=w.setTimeout(()=>{this.#r.isStale||this.updateResult()},t)}#_(){return(typeof this.options.refetchInterval==`function`?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#v(e){this.#x(),this.#p=e,!(I.isServer()||k(this.options.enabled,this.#t)===!1||!D(this.#p)||this.#p===0)&&(this.#f=w.setInterval(()=>{(this.options.refetchIntervalInBackground||S.isFocused())&&this.#h()},this.#p))}#y(){this.#g(),this.#v(this.#_())}#b(){this.#d&&=(w.clearTimeout(this.#d),void 0)}#x(){this.#f&&=(w.clearInterval(this.#f),void 0)}createResult(e,t){let n=this.#t,r=this.options,i=this.#r,a=this.#i,o=this.#a,s=e===n?this.#n:e.state,{state:c}=e,l={...c},u=!1,d;if(t._optimisticResults){let i=this.hasListeners(),a=!i&&Re(e,t),o=i&&Be(e,n,t,r);(a||o)&&(l={...l,...Me(c.data,e.options)}),t._optimisticResults===`isRestoring`&&(l.fetchStatus=`idle`)}let{error:f,errorUpdatedAt:p,status:m}=l;d=l.data;let h=!1;if(t.placeholderData!==void 0&&d===void 0&&m===`pending`){let e;i?.isPlaceholderData&&t.placeholderData===o?.placeholderData?(e=i.data,h=!0):e=typeof t.placeholderData==`function`?t.placeholderData(this.#u?.state.data,this.#u):t.placeholderData,e!==void 0&&(m=`success`,d=fe(i?.data,e,t),u=!0)}if(t.select&&d!==void 0&&!h)if(i&&d===a?.data&&t.select===this.#c)d=this.#l;else try{this.#c=t.select,d=t.select(d),d=fe(i?.data,d,t),this.#l=d,this.#s=null}catch(e){this.#s=e}this.#s&&(f=this.#s,d=this.#l,p=Date.now(),m=`error`);let g=l.fetchStatus===`fetching`,_=m===`pending`,v=m===`error`,y=_&&g,b=d!==void 0,x={status:m,fetchStatus:l.fetchStatus,isPending:_,isSuccess:m===`success`,isError:v,isInitialLoading:y,isLoading:y,data:d,dataUpdatedAt:l.dataUpdatedAt,error:f,errorUpdatedAt:p,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:l.dataUpdateCount>s.dataUpdateCount||l.errorUpdateCount>s.errorUpdateCount,isFetching:g,isRefetching:g&&!_,isLoadingError:v&&!b,isPaused:l.fetchStatus===`paused`,isPlaceholderData:u,isRefetchError:v&&b,isStale:Ve(e,t),refetch:this.refetch,promise:this.#o,isEnabled:k(t.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){let t=x.data!==void 0,r=x.status===`error`&&!t,i=e=>{r?e.reject(x.error):t&&e.resolve(x.data)},a=()=>{i(this.#o=x.promise=R())},o=this.#o;switch(o.status){case`pending`:e.queryHash===n.queryHash&&i(o);break;case`fulfilled`:(r||x.data!==o.value)&&a();break;case`rejected`:(!r||x.error!==o.reason)&&a();break}}return x}updateResult(){let e=this.#r,t=this.createResult(this.#t,this.options);this.#i=this.#t.state,this.#a=this.options,this.#i.data!==void 0&&(this.#u=this.#t),!N(t,e)&&(this.#r=t,this.#C({listeners:(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,n=typeof t==`function`?t():t;if(n===`all`||!n&&!this.#m.size)return!0;let r=new Set(n??this.#m);return this.options.throwOnError&&r.add(`error`),Object.keys(this.#r).some(t=>{let n=t;return this.#r[n]!==e[n]&&r.has(n)})})()}))}#S(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#t)return;let t=this.#t;this.#t=e,this.#n=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#C(e){z.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#r)}),this.#e.getQueryCache().notify({query:this.#t,type:`observerResultsUpdated`})})}}}));function U(e){return{onFetch:(t,n)=>{let r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],s={pages:[],pageParams:[]},c=0,l=async()=>{let n=!1,l=e=>{ve(e,()=>t.signal,()=>n=!0)},u=ge(t.options,t.fetchOptions),d=async(e,r,i)=>{if(n)return Promise.reject();if(r==null&&e.pages.length)return Promise.resolve(e);let a=await u((()=>{let e={client:t.client,queryKey:t.queryKey,pageParam:r,direction:i?`backward`:`forward`,meta:t.options.meta};return l(e),e})()),{maxPages:o}=t.options,s=i?he:me;return{pages:s(e.pages,a,o),pageParams:s(e.pageParams,r,o)}};if(i&&a.length){let e=i===`backward`,t=e?Ke:Ge,n={pages:a,pageParams:o};s=await d(n,t(r,n),e)}else{let t=e??a.length;do{let e=c===0?o[0]??r.initialPageParam:Ge(r,s);if(c>0&&e==null)break;s=await d(s,e),c++}while(c<t)}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(l,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=l}}}function Ge(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Ke(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}function qe(e,t){return t?Ge(e,t)!=null:!1}function Je(e,t){return!t||!e.getPreviousPageParam?!1:Ke(e,t)!=null}var Ye=t((()=>{F()})),Xe,Ze=t((()=>{We(),Ye(),Xe=class extends Ue{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:U()})}getOptimisticResult(e){return e.behavior=U(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:`forward`}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:`backward`}}})}createResult(e,t){let{state:n}=e,r=super.createResult(e,t),{isFetching:i,isRefetching:a,isError:o,isRefetchError:s}=r,c=n.fetchMeta?.fetchMore?.direction,l=o&&c===`forward`,u=i&&c===`forward`,d=o&&c===`backward`,f=i&&c===`backward`;return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:qe(t,n.data),hasPreviousPage:Je(t,n.data),isFetchNextPageError:l,isFetchingNextPage:u,isFetchPreviousPageError:d,isFetchingPreviousPage:f,isRefetchError:s&&!l&&!d,isRefetching:a&&!u&&!f}}}}));function Qe(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:`idle`,variables:void 0,submittedAt:0}}var $e,et=t((()=>{B(),je(),ke(),$e=class extends Ae{#e;#t;#n;#r;constructor(e){super(),this.#e=e.client,this.mutationId=e.mutationId,this.#n=e.mutationCache,this.#t=[],this.state=e.state||Qe(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#n.notify({type:`observerAdded`,mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#n.notify({type:`observerRemoved`,mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status===`pending`?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){let t=()=>{this.#i({type:`continue`})},n={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#r=Oe({fn:()=>this.options.mutationFn?this.options.mutationFn(e,n):Promise.reject(Error(`No mutationFn found`)),onFail:(e,t)=>{this.#i({type:`failed`,failureCount:e,error:t})},onPause:()=>{this.#i({type:`pause`})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});let r=this.state.status===`pending`,i=!this.#r.canStart();try{if(r)t();else{this.#i({type:`pending`,variables:e,isPaused:i}),this.#n.config.onMutate&&await this.#n.config.onMutate(e,this,n);let t=await this.options.onMutate?.(e,n);t!==this.state.context&&this.#i({type:`pending`,context:t,variables:e,isPaused:i})}let a=await this.#r.start();return await this.#n.config.onSuccess?.(a,e,this.state.context,this,n),await this.options.onSuccess?.(a,e,this.state.context,n),await this.#n.config.onSettled?.(a,null,this.state.variables,this.state.context,this,n),await this.options.onSettled?.(a,null,e,this.state.context,n),this.#i({type:`success`,data:a}),a}catch(t){try{await this.#n.config.onError?.(t,e,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onError?.(t,e,this.state.context,n)}catch(e){Promise.reject(e)}try{await this.#n.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onSettled?.(void 0,t,e,this.state.context,n)}catch(e){Promise.reject(e)}throw this.#i({type:`error`,error:t}),t}finally{this.#n.runNext(this)}}#i(e){this.state=(t=>{switch(e.type){case`failed`:return{...t,failureCount:e.failureCount,failureReason:e.error};case`pause`:return{...t,isPaused:!0};case`continue`:return{...t,isPaused:!1};case`pending`:return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:`pending`,variables:e.variables,submittedAt:Date.now()};case`success`:return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:`success`,isPaused:!1};case`error`:return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:`error`}}})(this.state),z.batch(()=>{this.#t.forEach(t=>{t.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:`updated`,action:e})})}}}));function W(e){return e.options.scope?.id}var tt,nt=t((()=>{B(),et(),F(),b(),tt=class extends y{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,t,n){let r=new $e({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){this.#e.add(e);let t=W(e);if(typeof t==`string`){let n=this.#t.get(t);n?n.push(e):this.#t.set(t,[e])}this.notify({type:`added`,mutation:e})}remove(e){if(this.#e.delete(e)){let t=W(e);if(typeof t==`string`){let n=this.#t.get(t);if(n)if(n.length>1){let t=n.indexOf(e);t!==-1&&n.splice(t,1)}else n[0]===e&&this.#t.delete(t)}}this.notify({type:`removed`,mutation:e})}canRun(e){let t=W(e);if(typeof t==`string`){let n=this.#t.get(t)?.find(e=>e.state.status===`pending`);return!n||n===e}else return!0}runNext(e){let t=W(e);return typeof t==`string`?(this.#t.get(t)?.find(t=>t!==e&&t.state.isPaused))?.continue()??Promise.resolve():Promise.resolve()}clear(){z.batch(()=>{this.#e.forEach(e=>{this.notify({type:`removed`,mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>oe(t,e))}findAll(e={}){return this.getAll().filter(t=>oe(e,t))}notify(e){z.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return z.batch(()=>Promise.all(e.map(e=>e.continue().catch(E))))}}})),rt,it=t((()=>{F(),Ie(),B(),b(),rt=class extends y{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let r=t.queryKey,i=t.queryHash??A(r,t),a=this.get(i);return a||(a=new Fe({client:e,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:`added`,query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:`removed`,query:e}))}clear(){z.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>ae(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>ae(e,t)):t}notify(e){z.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){z.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){z.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}}})),at,ot=t((()=>{F(),it(),nt(),C(),Te(),B(),Ye(),at=class{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e={}){this.#e=e.queryCache||new rt,this.#t=e.mutationCache||new tt,this.#n=e.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#o=S.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=V.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#o?.(),this.#o=void 0,this.#s?.(),this.#s=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:`fetching`}).length}isMutating(e){return this.#t.findAll({...e,status:`pending`}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),n=this.#e.build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(O(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=this.#e.get(r.queryHash)?.state.data,a=re(t,i);if(a!==void 0)return this.#e.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return z.batch(()=>this.#e.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){let t=this.#e;z.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#e;return z.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:`active`,...e},t)))}cancelQueries(e,t={}){let n={revert:!0,...t},r=z.batch(()=>this.#e.findAll(e).map(e=>e.cancel(n)));return Promise.all(r).then(E).catch(E)}invalidateQueries(e,t={}){return z.batch(()=>(this.#e.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType===`none`?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??`active`},t)))}refetchQueries(e,t={}){let n={...t,cancelRefetch:t.cancelRefetch??!0},r=z.batch(()=>this.#e.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(E)),e.state.fetchStatus===`paused`?Promise.resolve():t}));return Promise.all(r).then(E)}fetchQuery(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=this.#e.build(this,t);return n.isStaleByTime(O(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(E).catch(E)}fetchInfiniteQuery(e){return e.behavior=U(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(E).catch(E)}ensureInfiniteQueryData(e){return e.behavior=U(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return V.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#r.set(j(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#r.values()],n={};return t.forEach(t=>{M(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){this.#i.set(j(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#i.values()],n={};return t.forEach(t=>{M(e,t.mutationKey)&&Object.assign(n,t.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||=A(t.queryKey,t),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!==`always`),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode=`offlineFirst`),t.queryFn===P&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}}})),st=t((()=>{})),G=t((()=>{L(),Ze(),B(),ot(),F(),st()})),ct=t((()=>{})),lt,ut,dt,ft=t((()=>{lt=e(n(),1),r(),ut=lt.createContext(void 0),dt=e=>{let t=lt.useContext(ut);if(e)return e;if(!t)throw Error(`No QueryClient set, use QueryClientProvider to set one`);return t}})),pt,mt,ht,gt=t((()=>{pt=e(n(),1),mt=pt.createContext(!1),ht=()=>pt.useContext(mt),mt.Provider}));function _t(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var vt,yt,bt,xt=t((()=>{vt=e(n(),1),r(),yt=vt.createContext(_t()),bt=()=>vt.useContext(yt)})),St,Ct,wt,Tt,Et=t((()=>{St=e(n(),1),G(),Ct=(e,t,n)=>{let r=n?.state.error&&typeof e.throwOnError==`function`?_e(e.throwOnError,[n.state.error,n]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||r)&&(t.isReset()||(e.retryOnMount=!1))},wt=e=>{St.useEffect(()=>{e.clearReset()},[e])},Tt=({result:e,errorResetBoundary:t,throwOnError:n,query:r,suspense:i})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(i&&e.data===void 0||_e(n,[e.error,r]))})),Dt,Ot,kt,At,jt=t((()=>{Dt=e=>{if(e.suspense){let t=1e3,n=e=>e===`static`?e:Math.max(e??t,t),r=e.staleTime;e.staleTime=typeof r==`function`?(...e)=>n(r(...e)):n(r),typeof e.gcTime==`number`&&(e.gcTime=Math.max(e.gcTime,t))}},Ot=(e,t)=>e.isLoading&&e.isFetching&&!t,kt=(e,t)=>e?.suspense&&t.isPending,At=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()})}));function Mt(e,t,n){let r=ht(),i=bt(),a=dt(n),o=a.defaultQueryOptions(e);a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);let s=a.getQueryCache().get(o.queryHash);o._optimisticResults=r?`isRestoring`:`optimistic`,Dt(o),Ct(o,i,s),wt(i);let c=!a.getQueryCache().get(o.queryHash),[l]=K.useState(()=>new t(a,o)),u=l.getOptimisticResult(o),d=!r&&e.subscribed!==!1;if(K.useSyncExternalStore(K.useCallback(e=>{let t=d?l.subscribe(z.batchCalls(e)):E;return l.updateResult(),t},[l,d]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),K.useEffect(()=>{l.setOptions(o)},[o,l]),kt(o,u))throw At(o,l,i);if(Tt({result:u,errorResetBoundary:i,throwOnError:o.throwOnError,query:s,suspense:o.suspense}))throw u.error;return a.getDefaultOptions().queries?._experimental_afterQuery?.(o,u),o.experimental_prefetchInRender&&!I.isServer()&&Ot(u,r)&&(c?At(o,l,i):s?.promise)?.catch(E).finally(()=>{l.updateResult()}),o.notifyOnChangeProps?u:l.trackResult(u)}var K,Nt=t((()=>{K=e(n(),1),G(),ft(),xt(),Et(),gt(),jt()}));function Pt(e,t){return Mt(e,Xe,t)}var Ft=t((()=>{G(),Nt()})),It=t((()=>{G(),ct(),Ft()})),Lt,Rt,zt,Bt=t((()=>{Lt=(e,t,n,r=1e4)=>{let i=[`Alice`,`Bob`,`Charlie`,`Diana`,`Eve`,`Frank`,`Grace`,`Henry`,`Ivy`,`Jack`],a=[`Smith`,`Johnson`,`Williams`,`Brown`,`Jones`,`Garcia`,`Miller`,`Davis`,`Rodriguez`,`Martinez`],o=[`single`,`relationship`,`complicated`],s=[...Array.from({length:r}).map((e,t)=>{let n=t+1;return{id:n.toString(),firstName:i[n%i.length],lastName:a[n%a.length],age:20+n%50,visits:Math.floor(Math.random()*500)+1,status:o[n%o.length],progress:Math.floor(Math.random()*100)+1}})],c=n[0];if(c){let{id:e,desc:t}=c;s.sort((n,r)=>{let i=n[e],a=r[e];return t?i<a?1:-1:i>a?1:-1})}return{data:s.slice(e,e+t),meta:{totalRowCount:s.length}}},Rt=async(e,t=200)=>(await zt(t),e()),zt=e=>new Promise(t=>setTimeout(t,e))})),q,J,Y,Vt,Ht,X,Ut,Wt,Z,Q,$,Gt;t((()=>{q=e(n(),1),It(),o(),a(),Bt(),c(),g(),m(),_(),h(),J=r(),{expect:Y,fn:Vt,userEvent:Ht,waitFor:X,within:Ut}=__STORYBOOK_MODULE_TEST__,Wt={title:`Design System/Table/Virtualized`,component:s,parameters:{layout:`fullscreen`},args:{columns:u,data:[],stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,J.jsx)(f,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[p]},Z={args:{virtualized:!0,data:[]},play:async({canvas:e})=>{await Y(e.getByText(/no matching records found/i)).toBeInTheDocument()}},Q={name:`Virtualized Selectable Table`,render:function(e){let t=async(e,t,n)=>Rt(()=>Lt(e,t,n)),[n,r]=(0,q.useState)([]),{data:a,fetchNextPage:o,isFetching:c,isLoading:u}=Pt({queryKey:[`people`,n],queryFn:async({pageParam:e})=>await t(e*50,50,n),initialPageParam:0,getNextPageParam:(e,t)=>t.length,placeholderData:pe},new at({defaultOptions:{queries:{staleTime:300*1e3,gcTime:600*1e3,refetchOnWindowFocus:!1}}})),d=(0,q.useMemo)(()=>a?.pages.flatMap(e=>e.data)??[],[a]),f=a?.pages[0]?.meta.totalRowCount??0,p=d.length,m=async t=>{e.onScroll?.(t);let{bottomOffset:n}=t;!c&&!(p>=f)&&n<=500&&await o()};return(0,J.jsxs)(`div`,{className:l.virtualizedDemoContainer,children:[(0,J.jsxs)(`div`,{className:l.virtualizedDemoHeader,children:[(0,J.jsx)(`h4`,{className:l.virtualizedDemoHeader__title,children:`Virtualized Table Demo`}),(0,J.jsx)(`p`,{className:l.virtualizedDemoHeader__description,children:`This table uses infinite query to fetch data as you scroll, making it performant even with large datasets. Try scrolling to see the data loading!`}),(0,J.jsxs)(`p`,{className:l.virtualizedDemoHeader__stats,children:[`(`,d.length,` of `,f,` rows fetched)`]})]}),!1,(0,J.jsxs)(`div`,{className:l.virtualizedTableWrapper,children:[(0,J.jsx)(s,{...e,data:d,onSortingChange:r,onScroll:m,virtualized:!0}),u&&(0,J.jsx)(`div`,{className:l.loadingOverlay,children:(0,J.jsxs)(`div`,{className:l.loadingContent,children:[(0,J.jsx)(i,{size:`small`}),(0,J.jsx)(`span`,{className:l.loadingText,children:`Loading data...`})]})})]})]})},args:{selectable:!0,columns:u.map(e=>`accessorKey`in e&&e.accessorKey===`age`?{...e,size:100}:e),onScroll:Vt()},play:async({canvasElement:e,args:t})=>{let n=Ut(e);await X(()=>Y(n.getByText(/of 10000 rows fetched/i)).toBeInTheDocument(),{timeout:5e3}),await Y(v(n).length).toBeGreaterThan(0);let r=n.getAllByRole(`checkbox`)[1];await Ht.click(r),await X(()=>Y(r).toBeChecked(),{timeout:1e3});let i=e.querySelector(`[class*="virtualizedContainer"]`);await Y(i).toBeInTheDocument(),i.scrollTop=i.scrollHeight,await X(()=>Y(t.onScroll).toHaveBeenCalled(),{timeout:2e3}),await X(()=>Y(n.queryAllByRole(`checkbox`,{checked:!0})).toHaveLength(0),{timeout:1e3}),i.scrollTop=0,await X(()=>Y(n.getAllByRole(`checkbox`)[1]).toBeChecked(),{timeout:1e3})}},$={name:`Virtualized Expandable Table`,render:function(e){let t=async(e,t,n)=>Rt(()=>Lt(e,t,n)),[n,r]=(0,q.useState)([]),{data:a,fetchNextPage:o,isFetching:c,isLoading:u}=Pt({queryKey:[`people-expandable`,n],queryFn:async({pageParam:e})=>await t(e*50,50,n),initialPageParam:0,getNextPageParam:(e,t)=>t.length,placeholderData:pe},new at({defaultOptions:{queries:{staleTime:300*1e3,gcTime:600*1e3,refetchOnWindowFocus:!1}}})),f=(0,q.useMemo)(()=>a?.pages.flatMap(e=>e.data)??[],[a]),p=a?.pages[0]?.meta.totalRowCount??0,m=f.length,h=async t=>{e.onScroll?.(t);let{bottomOffset:n}=t;!c&&!(m>=p)&&n<=500&&await o()};return(0,J.jsxs)(`div`,{className:l.virtualizedDemoContainer,children:[(0,J.jsxs)(`div`,{className:l.virtualizedDemoHeader,children:[(0,J.jsx)(`h4`,{className:l.virtualizedDemoHeader__title,children:`Virtualized Table with Expandable Rows`}),(0,J.jsx)(`p`,{className:l.virtualizedDemoHeader__description,children:`This table combines virtualization for large datasets with expandable rows. Click the chevron to expand rows and see additional details.`}),(0,J.jsxs)(`p`,{className:l.virtualizedDemoHeader__stats,children:[`(`,f.length,` of `,p,` rows fetched)`]})]}),!1,(0,J.jsxs)(`div`,{className:l.virtualizedTableWrapper,children:[(0,J.jsx)(s,{...e,data:f,onSortingChange:r,onScroll:h,virtualized:!0,expandable:!0,renderExpandedRow:e=>(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`div`,{className:l.expandedRowDetails,children:[(0,J.jsxs)(`h4`,{children:[`Expanded Details for `,e.firstName]}),(0,J.jsxs)(`p`,{children:[`ID: `,e.id]}),(0,J.jsxs)(`p`,{children:[`Full Name: `,e.firstName,` `,e.lastName]}),(0,J.jsxs)(`p`,{children:[`Status: `,e.status]})]}),(0,J.jsx)(s,{columns:[{accessorKey:`id`,header:`ID`},{accessorKey:`firstName`,header:`First Name`},{accessorKey:`lastName`,header:`Last Name`}],data:d.slice(0,3)})]})}),u&&(0,J.jsx)(`div`,{className:l.loadingOverlay,children:(0,J.jsxs)(`div`,{className:l.loadingContent,children:[(0,J.jsx)(i,{size:`small`}),(0,J.jsx)(`span`,{className:l.loadingText,children:`Loading data...`})]})})]})]})},args:{columns:u.map(e=>`accessorKey`in e&&e.accessorKey===`age`?{...e,size:100}:e),onScroll:Vt()},play:async({canvasElement:e,args:t})=>{let n=Ut(e);await X(()=>Y(n.getByText(/of 10000 rows fetched/i)).toBeInTheDocument(),{timeout:2e3}),await Y(v(n).length).toBeGreaterThan(0);let r=n.getAllByRole(`button`,{name:/chevron_right/i});await Y(r.length).toBeGreaterThan(0),await Ht.click(r[0]),await X(()=>Y(n.getByText(/expanded details for/i)).toBeInTheDocument(),{timeout:1e3});let i=e.querySelector(`[class*="virtualizedContainer"]`);await Y(i).toBeInTheDocument(),i.scrollTop=i.scrollHeight,await X(()=>Y(t.onScroll).toHaveBeenCalledWith(Y.objectContaining({scrollOffset:i.scrollTop,viewportHeight:i.clientHeight,scrollDirection:`forward`})),{timeout:1e3}),await X(()=>Y(n.queryByText(/expanded details for/i)).not.toBeInTheDocument(),{timeout:1e3}),i.scrollTop=0,await X(()=>Y(t.onScroll).toHaveBeenCalledWith(Y.objectContaining({scrollOffset:i.scrollTop,viewportHeight:i.clientHeight,scrollDirection:`backward`})),{timeout:1e3}),await X(()=>Y(n.getByText(/expanded details for/i)).toBeInTheDocument(),{timeout:1e3})}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    virtualized: true,
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(/no matching records found/i)).toBeInTheDocument();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Virtualized Selectable Table',
  render: function Render(args) {
    const fetchData = async (start: number, size: number, sorting: SortingState) => {
      return simulateApiCall(() => generatePersonData(start, size, sorting));
    };
    const pageSize = 50;
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
    },
    // assuming the app is wrapped inside QueryClientProvider below is no longer needed
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 5 * 60 * 1000,
          gcTime: 10 * 60 * 1000,
          refetchOnWindowFocus: false
        }
      }
    }));
    const flatData = useMemo(() => infiniteQueryData?.pages.flatMap(page => page.data) ?? [], [infiniteQueryData]);
    const totalRows = infiniteQueryData?.pages[0]?.meta.totalRowCount ?? 0;
    const totalFetched = flatData.length;
    const fetchMoreOnBottomReached = async (params: ScrollParams) => {
      args.onScroll?.(params);
      const {
        bottomOffset
      } = params;
      const finishedFetching = totalFetched >= totalRows;
      const scrollThreshold = 500;
      const shouldFetchMore = bottomOffset <= scrollThreshold;
      if (!isFetching && !finishedFetching && shouldFetchMore) {
        await fetchNextPage();
      }
    };
    return <div className={styles.virtualizedDemoContainer}>
                <div className={styles.virtualizedDemoHeader}>
                    <h4 className={styles.virtualizedDemoHeader__title}>Virtualized Table Demo</h4>
                    <p className={styles.virtualizedDemoHeader__description}>
                        This table uses infinite query to fetch data as you scroll, making it performant even with large
                        datasets. Try scrolling to see the data loading!
                    </p>
                    <p className={styles.virtualizedDemoHeader__stats}>
                        ({flatData.length} of {totalRows} rows fetched)
                    </p>
                </div>

                {import.meta.env.NODE_ENV === 'development' && <p className={styles.developmentNotice}>
                        <strong>Notice:</strong> You are currently running React in development mode. Virtualized
                        rendering performance will be slightly degraded until this application is built for production.
                    </p>}

                <div className={styles.virtualizedTableWrapper}>
                    <DsTable {...args} data={flatData} onSortingChange={setSorting} onScroll={fetchMoreOnBottomReached} virtualized={true} />
                    {isLoading && <div className={styles.loadingOverlay}>
                            <div className={styles.loadingContent}>
                                <DsSpinner size="small" />
                                <span className={styles.loadingText}>Loading data...</span>
                            </div>
                        </div>}
                </div>
            </div>;
  },
  args: {
    selectable: true,
    columns: columns.map(col => {
      if ('accessorKey' in col && col.accessorKey === 'age') {
        return {
          ...col,
          size: 100
        } as ColumnDef<Person>;
      }
      return col;
    }),
    onScroll: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      return expect(canvas.getByText(/of 10000 rows fetched/i)).toBeInTheDocument();
    }, {
      timeout: 5000
    });
    const dataRows = getDataRows(canvas);
    await expect(dataRows.length).toBeGreaterThan(0);
    const checkboxes = canvas.getAllByRole('checkbox');
    const firstRowCheckbox = checkboxes[1] as HTMLElement;
    await userEvent.click(firstRowCheckbox);
    await waitFor(() => expect(firstRowCheckbox).toBeChecked(), {
      timeout: 1000
    });
    const scrollContainer = canvasElement.querySelector('[class*="virtualizedContainer"]') as Element;
    await expect(scrollContainer).toBeInTheDocument();
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
    await waitFor(() => expect(args.onScroll).toHaveBeenCalled(), {
      timeout: 2000
    });

    // check that the row with checked checkbox is unmounted (virtualized out)
    await waitFor(() => {
      return expect(canvas.queryAllByRole('checkbox', {
        checked: true
      })).toHaveLength(0);
    }, {
      timeout: 1000
    });
    scrollContainer.scrollTop = 0;

    // check that the first row is still checked after scrolling back to top
    await waitFor(() => {
      const checkboxesAfterScroll = canvas.getAllByRole('checkbox');
      return expect(checkboxesAfterScroll[1]).toBeChecked();
    }, {
      timeout: 1000
    });
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Virtualized Expandable Table',
  render: function Render(args) {
    const fetchData = async (start: number, size: number, sorting: SortingState) => {
      return simulateApiCall(() => generatePersonData(start, size, sorting));
    };
    const pageSize = 50;
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
    }, new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 5 * 60 * 1000,
          gcTime: 10 * 60 * 1000,
          refetchOnWindowFocus: false
        }
      }
    }));
    const flatData = useMemo(() => infiniteQueryData?.pages.flatMap(page => page.data) ?? [], [infiniteQueryData]);
    const totalRows = infiniteQueryData?.pages[0]?.meta.totalRowCount ?? 0;
    const totalFetched = flatData.length;
    const fetchMoreOnBottomReached = async (params: ScrollParams) => {
      args.onScroll?.(params);
      const {
        bottomOffset
      } = params;
      const finishedFetching = totalFetched >= totalRows;
      const scrollThreshold = 500;
      const shouldFetchMore = bottomOffset <= scrollThreshold;
      if (!isFetching && !finishedFetching && shouldFetchMore) {
        await fetchNextPage();
      }
    };
    return <div className={styles.virtualizedDemoContainer}>
                <div className={styles.virtualizedDemoHeader}>
                    <h4 className={styles.virtualizedDemoHeader__title}>Virtualized Table with Expandable Rows</h4>
                    <p className={styles.virtualizedDemoHeader__description}>
                        This table combines virtualization for large datasets with expandable rows. Click the chevron to
                        expand rows and see additional details.
                    </p>
                    <p className={styles.virtualizedDemoHeader__stats}>
                        ({flatData.length} of {totalRows} rows fetched)
                    </p>
                </div>

                {import.meta.env.NODE_ENV === 'development' && <p className={styles.developmentNotice}>
                        <strong>Notice:</strong> You are currently running React in development mode. Virtualized
                        rendering performance will be slightly degraded until this application is built for production.
                    </p>}

                <div className={styles.virtualizedTableWrapper}>
                    <DsTable {...args} data={flatData} onSortingChange={setSorting} onScroll={fetchMoreOnBottomReached} virtualized={true} expandable={true} renderExpandedRow={row => <>
                                <div className={styles.expandedRowDetails}>
                                    <h4>Expanded Details for {row.firstName}</h4>
                                    <p>ID: {row.id}</p>
                                    <p>
                                        Full Name: {row.firstName} {row.lastName}
                                    </p>
                                    <p>Status: {row.status}</p>
                                </div>

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
                            </>} />
                    {isLoading && <div className={styles.loadingOverlay}>
                            <div className={styles.loadingContent}>
                                <DsSpinner size="small" />
                                <span className={styles.loadingText}>Loading data...</span>
                            </div>
                        </div>}
                </div>
            </div>;
  },
  args: {
    columns: columns.map(col => {
      if ('accessorKey' in col && col.accessorKey === 'age') {
        return {
          ...col,
          size: 100
        } as ColumnDef<Person>;
      }
      return col;
    }),
    onScroll: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      return expect(canvas.getByText(/of 10000 rows fetched/i)).toBeInTheDocument();
    }, {
      timeout: 2000
    });
    const dataRows = getDataRows(canvas);
    await expect(dataRows.length).toBeGreaterThan(0);
    const expandButtons = canvas.getAllByRole('button', {
      name: /chevron_right/i
    });
    await expect(expandButtons.length).toBeGreaterThan(0);
    await userEvent.click(expandButtons[0] as HTMLElement);
    await waitFor(() => {
      return expect(canvas.getByText(/expanded details for/i)).toBeInTheDocument();
    }, {
      timeout: 1000
    });
    const scrollContainer = canvasElement.querySelector('[class*="virtualizedContainer"]') as Element;
    await expect(scrollContainer).toBeInTheDocument();
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
    await waitFor(() => expect(args.onScroll).toHaveBeenCalledWith(expect.objectContaining({
      scrollOffset: scrollContainer.scrollTop,
      viewportHeight: scrollContainer.clientHeight,
      scrollDirection: 'forward'
    })), {
      timeout: 1000
    });

    // check that the expanded row is unmounted
    await waitFor(() => {
      return expect(canvas.queryByText(/expanded details for/i)).not.toBeInTheDocument();
    }, {
      timeout: 1000
    });
    scrollContainer.scrollTop = 0;
    await waitFor(() => expect(args.onScroll).toHaveBeenCalledWith(expect.objectContaining({
      scrollOffset: scrollContainer.scrollTop,
      viewportHeight: scrollContainer.clientHeight,
      scrollDirection: 'backward'
    })), {
      timeout: 1000
    });

    // check that the expanded row is still expanded after scrolling to the top
    await waitFor(() => {
      return expect(canvas.getByText(/expanded details for/i)).toBeInTheDocument();
    }, {
      timeout: 1000
    });
  }
}`,...$.parameters?.docs?.source}}},Gt=[`EmptyState`,`VirtualizedSelectable`,`VirtualizedExpandable`]}))();export{Z as EmptyState,$ as VirtualizedExpandable,Q as VirtualizedSelectable,Gt as __namedExportsOrder,Wt as default};