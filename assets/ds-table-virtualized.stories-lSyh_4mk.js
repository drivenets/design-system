import{j as p}from"./jsx-runtime-u17CrQMm.js";import{r as C}from"./iframe-Ca930D_M.js";import{D as G}from"./ds-table-DVJNVLvD.js";import{D as be}from"./ds-spinner-CoXn0m4t.js";import{s as b}from"./ds-table.stories.module-D_XXzStM.js";import{f as Ae,c as re,d as _e,T as qe}from"./table-empty-state-CGoz8w5H.js";import{g as we}from"./story-test-helpers-PqH2Bcxs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVZjy8fd.js";import"./core-table-BEMGUNNh.js";import"./ds-button-Bcy2zDAS.js";import"./ds-button-legacy-ClVdhyHt.js";import"./ds-button-new-BRMG-mD0.js";import"./ds-icon-Bydwx35M.js";import"./ds-typography-DWfjLM4L.js";import"./index-jPuvLe1W.js";import"./index-CMVVcfYw.js";import"./ds-checkbox-D4pXdglc.js";import"./index-BERAKyIn.js";import"./index-BEtRqAt4.js";import"./index-YQ5BxtHB.js";import"./index-DCben6BA.js";import"./ds-dropdown-menu-DzHm1Wuf.js";import"./index-QipU9QbB.js";import"./Combination-CuL2QCBR.js";import"./index-Dtn-s4dR.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-DCpVwIGC.js";import"./ds-text-input-Cy_kDadB.js";import"./portal-FTCtN5ck.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DNulMZY0.js";import"./create-anatomy-BivAtX8-.js";import"./use-presence-Bo4y-bsM.js";import"./set-B7r0y80y.js";import"./raf-CC9hSMXO.js";import"./computed-style-DHZafkbz.js";import"./event-CBXSxTbR.js";import"./index-DlWMcqjy.js";import"./get-styles-DkpXY9MT.js";import"./typeahead-DKe3aJTu.js";import"./query-CjgVAlRR.js";import"./initial-focus-DdiF8sAH.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-DNYSeug_.js";import"./navigate-B-Cd_Yvi.js";import"./merge-refs-DX9dreSa.js";var B=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},He={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},Ue=class{#e=He;#t=!1;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}},Q=new Ue;function Ke(e){setTimeout(e,0)}var I=typeof window>"u"||"Deno"in globalThis;function D(){}function Le(e,t){return typeof e=="function"?e(t):e}function Y(e){return typeof e=="number"&&e>=0&&e!==1/0}function Se(e,t){return Math.max(e+(t||0)-Date.now(),0)}function E(e,t){return typeof e=="function"?e(t):e}function R(e,t){return typeof e=="function"?e(t):e}function ue(e,t){const{type:s="all",exact:i,fetchStatus:r,predicate:a,queryKey:o,stale:n}=e;if(o){if(i){if(t.queryHash!==ae(o,t.options))return!1}else if(!j(t.queryKey,o))return!1}if(s!=="all"){const h=t.isActive();if(s==="active"&&!h||s==="inactive"&&h)return!1}return!(typeof n=="boolean"&&t.isStale()!==n||r&&r!==t.state.fetchStatus||a&&!a(t))}function he(e,t){const{exact:s,status:i,predicate:r,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(s){if(z(t.options.mutationKey)!==z(a))return!1}else if(!j(t.options.mutationKey,a))return!1}return!(i&&t.state.status!==i||r&&!r(t))}function ae(e,t){return(t?.queryKeyHashFn||z)(e)}function z(e){return JSON.stringify(e,(t,s)=>Z(s)?Object.keys(s).sort().reduce((i,r)=>(i[r]=s[r],i),{}):s)}function j(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(s=>j(e[s],t[s])):!1}var Ge=Object.prototype.hasOwnProperty;function xe(e,t,s=0){if(e===t)return e;if(s>500)return t;const i=de(e)&&de(t);if(!i&&!(Z(e)&&Z(t)))return t;const a=(i?e:Object.keys(e)).length,o=i?t:Object.keys(t),n=o.length,h=i?new Array(n):{};let f=0;for(let c=0;c<n;c++){const m=i?c:o[c],d=e[m],y=t[m];if(d===y){h[m]=d,(i?c<a:Ge.call(e,m))&&f++;continue}if(d===null||y===null||typeof d!="object"||typeof y!="object"){h[m]=y;continue}const l=xe(d,y,s+1);h[m]=l,l===d&&f++}return a===n&&f===a?e:h}function $(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(e[s]!==t[s])return!1;return!0}function de(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Z(e){if(!fe(e))return!1;const t=e.constructor;if(t===void 0)return!0;const s=t.prototype;return!(!fe(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function fe(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ve(e){return new Promise(t=>{Q.setTimeout(t,e)})}function X(e,t,s){return typeof s.structuralSharing=="function"?s.structuralSharing(e,t):s.structuralSharing!==!1?xe(e,t):t}function Ce(e){return e}function We(e,t,s=0){const i=[...e,t];return s&&i.length>s?i.slice(1):i}function Je(e,t,s=0){const i=[t,...e];return s&&i.length>s?i.slice(0,-1):i}var ne=Symbol();function De(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===ne?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function Pe(e,t){return typeof e=="function"?e(...t):!!e}function Ye(e,t,s){let i=!1,r;return Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(r??=t(),i||(i=!0,r.aborted?s():r.addEventListener("abort",s,{once:!0})),r)}),e}var $e=class extends B{#e;#t;#s;constructor(){super(),this.#s=e=>{if(!I&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#s=e,this.#t?.(),this.#t=e(t=>{typeof t=="boolean"?this.setFocused(t):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},oe=new $e;function ee(){let e,t;const s=new Promise((r,a)=>{e=r,t=a});s.status="pending",s.catch(()=>{});function i(r){Object.assign(s,r),delete s.resolve,delete s.reject}return s.resolve=r=>{i({status:"fulfilled",value:r}),e(r)},s.reject=r=>{i({status:"rejected",reason:r}),t(r)},s}var Ze=Ke;function Xe(){let e=[],t=0,s=n=>{n()},i=n=>{n()},r=Ze;const a=n=>{t?e.push(n):r(()=>{s(n)})},o=()=>{const n=e;e=[],n.length&&r(()=>{i(()=>{n.forEach(h=>{s(h)})})})};return{batch:n=>{let h;t++;try{h=n()}finally{t--,t||o()}return h},batchCalls:n=>(...h)=>{a(()=>{n(...h)})},schedule:a,setNotifyFunction:n=>{s=n},setBatchNotifyFunction:n=>{i=n},setScheduler:n=>{r=n}}}var w=Xe(),et=class extends B{#e=!0;#t;#s;constructor(){super(),this.#s=e=>{if(!I&&window.addEventListener){const t=()=>e(!0),s=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#t||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#s=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(s=>{s(e)}))}isOnline(){return this.#e}},V=new et;function tt(e){return Math.min(1e3*2**e,3e4)}function Re(e){return(e??"online")==="online"?V.isOnline():!0}var te=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function Oe(e){let t=!1,s=0,i;const r=ee(),a=()=>r.status!=="pending",o=u=>{if(!a()){const g=new te(u);d(g),e.onCancel?.(g)}},n=()=>{t=!0},h=()=>{t=!1},f=()=>oe.isFocused()&&(e.networkMode==="always"||V.isOnline())&&e.canRun(),c=()=>Re(e.networkMode)&&e.canRun(),m=u=>{a()||(i?.(),r.resolve(u))},d=u=>{a()||(i?.(),r.reject(u))},y=()=>new Promise(u=>{i=g=>{(a()||f())&&u(g)},e.onPause?.()}).then(()=>{i=void 0,a()||e.onContinue?.()}),l=()=>{if(a())return;let u;const g=s===0?e.initialPromise:void 0;try{u=g??e.fn()}catch(S){u=Promise.reject(S)}Promise.resolve(u).then(m).catch(S=>{if(a())return;const x=e.retry??(I?0:3),T=e.retryDelay??tt,M=typeof T=="function"?T(s,S):T,N=x===!0||typeof x=="number"&&s<x||typeof x=="function"&&x(s,S);if(t||!N){d(S);return}s++,e.onFail?.(s,S),Ve(M).then(()=>f()?void 0:y()).then(()=>{t?d(S):l()})})};return{promise:r,status:()=>r.status,cancel:o,continue:()=>(i?.(),r),cancelRetry:n,continueRetry:h,canStart:c,start:()=>(c()?l():y().then(l),r)}}var Te=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Y(this.gcTime)&&(this.#e=Q.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(I?1/0:300*1e3))}clearGcTimeout(){this.#e&&(Q.clearTimeout(this.#e),this.#e=void 0)}},st=class extends Te{#e;#t;#s;#r;#i;#o;#n;constructor(e){super(),this.#n=!1,this.#o=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#r=e.client,this.#s=this.#r.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=me(this.options),this.state=e.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(e){if(this.options={...this.#o,...e},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const t=me(this.options);t.data!==void 0&&(this.setState(pe(t.data,t.dataUpdatedAt)),this.#e=t)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#s.remove(this)}setData(e,t){const s=X(this.state.data,e,this.options);return this.#a({data:s,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),s}setState(e,t){this.#a({type:"setState",state:e,setStateOptions:t})}cancel(e){const t=this.#i?.promise;return this.#i?.cancel(e),t?t.then(D).catch(D):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(e=>R(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===ne||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>E(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!Se(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(t=>t.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){this.observers.find(t=>t.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#i&&(this.#n?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#s.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#a({type:"invalidate"})}async fetch(e,t){if(this.state.fetchStatus!=="idle"&&this.#i?.status()!=="rejected"){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(e&&this.setOptions(e),!this.options.queryFn){const n=this.observers.find(h=>h.options.queryFn);n&&this.setOptions(n.options)}const s=new AbortController,i=n=>{Object.defineProperty(n,"signal",{enumerable:!0,get:()=>(this.#n=!0,s.signal)})},r=()=>{const n=De(this.options,t),f=(()=>{const c={client:this.#r,queryKey:this.queryKey,meta:this.meta};return i(c),c})();return this.#n=!1,this.options.persister?this.options.persister(n,f,this):n(f)},o=(()=>{const n={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#r,state:this.state,fetchFn:r};return i(n),n})();this.options.behavior?.onFetch(o,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#a({type:"fetch",meta:o.fetchOptions?.meta}),this.#i=Oe({initialPromise:t?.initialPromise,fn:o.fetchFn,onCancel:n=>{n instanceof te&&n.revert&&this.setState({...this.#t,fetchStatus:"idle"}),s.abort()},onFail:(n,h)=>{this.#a({type:"failed",failureCount:n,error:h})},onPause:()=>{this.#a({type:"pause"})},onContinue:()=>{this.#a({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0});try{const n=await this.#i.start();if(n===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(n),this.#s.config.onSuccess?.(n,this),this.#s.config.onSettled?.(n,this.state.error,this),n}catch(n){if(n instanceof te){if(n.silent)return this.#i.promise;if(n.revert){if(this.state.data===void 0)throw n;return this.state.data}}throw this.#a({type:"error",error:n}),this.#s.config.onError?.(n,this),this.#s.config.onSettled?.(this.state.data,n,this),n}finally{this.scheduleGc()}}#a(e){const t=s=>{switch(e.type){case"failed":return{...s,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...Fe(s.data,this.options),fetchMeta:e.meta??null};case"success":const i={...s,...pe(e.data,e.dataUpdatedAt),dataUpdateCount:s.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#t=e.manual?i:void 0,i;case"error":const r=e.error;return{...s,error:r,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...e.state}}};this.state=t(this.state),w.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),this.#s.notify({query:this,type:"updated",action:e})})}};function Fe(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Re(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function pe(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function me(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,s=t!==void 0,i=s?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var it=class extends B{constructor(e,t){super(),this.options=t,this.#e=e,this.#a=null,this.#n=ee(),this.bindMethods(),this.setOptions(t)}#e;#t=void 0;#s=void 0;#r=void 0;#i;#o;#n;#a;#m;#d;#f;#l;#u;#c;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),ye(this.#t,this.options)?this.#h():this.updateResult(),this.#b())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return se(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return se(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#w(),this.#S(),this.#t.removeObserver(this)}setOptions(e){const t=this.options,s=this.#t;if(this.options=this.#e.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof R(this.options.enabled,this.#t)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#x(),this.#t.setOptions(this.options),t._defaulted&&!$(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this});const i=this.hasListeners();i&&ge(this.#t,s,this.options,t)&&this.#h(),this.updateResult(),i&&(this.#t!==s||R(this.options.enabled,this.#t)!==R(t.enabled,this.#t)||E(this.options.staleTime,this.#t)!==E(t.staleTime,this.#t))&&this.#y();const r=this.#g();i&&(this.#t!==s||R(this.options.enabled,this.#t)!==R(t.enabled,this.#t)||r!==this.#c)&&this.#v(r)}getOptimisticResult(e){const t=this.#e.getQueryCache().build(this.#e,e),s=this.createResult(t,e);return at(this,s)&&(this.#r=s,this.#o=this.options,this.#i=this.#t.state),s}getCurrentResult(){return this.#r}trackResult(e,t){return new Proxy(e,{get:(s,i)=>(this.trackProp(i),t?.(i),i==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&this.#n.status==="pending"&&this.#n.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(s,i))})}trackProp(e){this.#p.add(e)}getCurrentQuery(){return this.#t}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const t=this.#e.defaultQueryOptions(e),s=this.#e.getQueryCache().build(this.#e,t);return s.fetch().then(()=>this.createResult(s,t))}fetch(e){return this.#h({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#r))}#h(e){this.#x();let t=this.#t.fetch(this.options,e);return e?.throwOnError||(t=t.catch(D)),t}#y(){this.#w();const e=E(this.options.staleTime,this.#t);if(I||this.#r.isStale||!Y(e))return;const s=Se(this.#r.dataUpdatedAt,e)+1;this.#l=Q.setTimeout(()=>{this.#r.isStale||this.updateResult()},s)}#g(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#v(e){this.#S(),this.#c=e,!(I||R(this.options.enabled,this.#t)===!1||!Y(this.#c)||this.#c===0)&&(this.#u=Q.setInterval(()=>{(this.options.refetchIntervalInBackground||oe.isFocused())&&this.#h()},this.#c))}#b(){this.#y(),this.#v(this.#g())}#w(){this.#l&&(Q.clearTimeout(this.#l),this.#l=void 0)}#S(){this.#u&&(Q.clearInterval(this.#u),this.#u=void 0)}createResult(e,t){const s=this.#t,i=this.options,r=this.#r,a=this.#i,o=this.#o,h=e!==s?e.state:this.#s,{state:f}=e;let c={...f},m=!1,d;if(t._optimisticResults){const P=this.hasListeners(),k=!P&&ye(e,t),A=P&&ge(e,s,t,i);(k||A)&&(c={...c,...Fe(f.data,e.options)}),t._optimisticResults==="isRestoring"&&(c.fetchStatus="idle")}let{error:y,errorUpdatedAt:l,status:u}=c;d=c.data;let g=!1;if(t.placeholderData!==void 0&&d===void 0&&u==="pending"){let P;r?.isPlaceholderData&&t.placeholderData===o?.placeholderData?(P=r.data,g=!0):P=typeof t.placeholderData=="function"?t.placeholderData(this.#f?.state.data,this.#f):t.placeholderData,P!==void 0&&(u="success",d=X(r?.data,P,t),m=!0)}if(t.select&&d!==void 0&&!g)if(r&&d===a?.data&&t.select===this.#m)d=this.#d;else try{this.#m=t.select,d=t.select(d),d=X(r?.data,d,t),this.#d=d,this.#a=null}catch(P){this.#a=P}this.#a&&(y=this.#a,d=this.#d,l=Date.now(),u="error");const S=c.fetchStatus==="fetching",x=u==="pending",T=u==="error",M=x&&S,N=d!==void 0,F={status:u,fetchStatus:c.fetchStatus,isPending:x,isSuccess:u==="success",isError:T,isInitialLoading:M,isLoading:M,data:d,dataUpdatedAt:c.dataUpdatedAt,error:y,errorUpdatedAt:l,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>h.dataUpdateCount||c.errorUpdateCount>h.errorUpdateCount,isFetching:S,isRefetching:S&&!x,isLoadingError:T&&!N,isPaused:c.fetchStatus==="paused",isPlaceholderData:m,isRefetchError:T&&N,isStale:ce(e,t),refetch:this.refetch,promise:this.#n,isEnabled:R(t.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const P=F.data!==void 0,k=F.status==="error"&&!P,A=q=>{k?q.reject(F.error):P&&q.resolve(F.data)},le=()=>{const q=this.#n=F.promise=ee();A(q)},_=this.#n;switch(_.status){case"pending":e.queryHash===s.queryHash&&A(_);break;case"fulfilled":(k||F.data!==_.value)&&le();break;case"rejected":(!k||F.error!==_.reason)&&le();break}}return F}updateResult(){const e=this.#r,t=this.createResult(this.#t,this.options);if(this.#i=this.#t.state,this.#o=this.options,this.#i.data!==void 0&&(this.#f=this.#t),$(t,e))return;this.#r=t;const s=()=>{if(!e)return!0;const{notifyOnChangeProps:i}=this.options,r=typeof i=="function"?i():i;if(r==="all"||!r&&!this.#p.size)return!0;const a=new Set(r??this.#p);return this.options.throwOnError&&a.add("error"),Object.keys(this.#r).some(o=>{const n=o;return this.#r[n]!==e[n]&&a.has(n)})};this.#C({listeners:s()})}#x(){const e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#t)return;const t=this.#t;this.#t=e,this.#s=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#b()}#C(e){w.batch(()=>{e.listeners&&this.listeners.forEach(t=>{t(this.#r)}),this.#e.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function rt(e,t){return R(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function ye(e,t){return rt(e,t)||e.state.data!==void 0&&se(e,t,t.refetchOnMount)}function se(e,t,s){if(R(t.enabled,e)!==!1&&E(t.staleTime,e)!=="static"){const i=typeof s=="function"?s(e):s;return i==="always"||i!==!1&&ce(e,t)}return!1}function ge(e,t,s,i){return(e!==t||R(i.enabled,e)===!1)&&(!s.suspense||e.state.status!=="error")&&ce(e,s)}function ce(e,t){return R(t.enabled,e)!==!1&&e.isStaleByTime(E(t.staleTime,e))}function at(e,t){return!$(e.getCurrentResult(),t)}function W(e){return{onFetch:(t,s)=>{const i=t.options,r=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[];let n={pages:[],pageParams:[]},h=0;const f=async()=>{let c=!1;const m=l=>{Ye(l,()=>t.signal,()=>c=!0)},d=De(t.options,t.fetchOptions),y=async(l,u,g)=>{if(c)return Promise.reject();if(u==null&&l.pages.length)return Promise.resolve(l);const x=(()=>{const J={client:t.client,queryKey:t.queryKey,pageParam:u,direction:g?"backward":"forward",meta:t.options.meta};return m(J),J})(),T=await d(x),{maxPages:M}=t.options,N=g?Je:We;return{pages:N(l.pages,T,M),pageParams:N(l.pageParams,u,M)}};if(r&&a.length){const l=r==="backward",u=l?Ee:ie,g={pages:a,pageParams:o},S=u(i,g);n=await y(g,S,l)}else{const l=e??a.length;do{const u=h===0?o[0]??i.initialPageParam:ie(i,n);if(h>0&&u==null)break;n=await y(n,u),h++}while(h<l)}return n};t.options.persister?t.fetchFn=()=>t.options.persister?.(f,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=f}}}function ie(e,{pages:t,pageParams:s}){const i=t.length-1;return t.length>0?e.getNextPageParam(t[i],t,s[i],s):void 0}function Ee(e,{pages:t,pageParams:s}){return t.length>0?e.getPreviousPageParam?.(t[0],t,s[0],s):void 0}function nt(e,t){return t?ie(e,t)!=null:!1}function ot(e,t){return!t||!e.getPreviousPageParam?!1:Ee(e,t)!=null}var ct=class extends it{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:W()})}getOptimisticResult(e){return e.behavior=W(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:s}=e,i=super.createResult(e,t),{isFetching:r,isRefetching:a,isError:o,isRefetchError:n}=i,h=s.fetchMeta?.fetchMore?.direction,f=o&&h==="forward",c=r&&h==="forward",m=o&&h==="backward",d=r&&h==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:nt(t,s.data),hasPreviousPage:ot(t,s.data),isFetchNextPageError:f,isFetchingNextPage:c,isFetchPreviousPageError:m,isFetchingPreviousPage:d,isRefetchError:n&&!f&&!m,isRefetching:a&&!c&&!d}}},lt=class extends Te{#e;#t;#s;#r;constructor(e){super(),this.#e=e.client,this.mutationId=e.mutationId,this.#s=e.mutationCache,this.#t=[],this.state=e.state||ut(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#s.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){const t=()=>{this.#i({type:"continue"})},s={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#r=Oe({fn:()=>this.options.mutationFn?this.options.mutationFn(e,s):Promise.reject(new Error("No mutationFn found")),onFail:(a,o)=>{this.#i({type:"failed",failureCount:a,error:o})},onPause:()=>{this.#i({type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});const i=this.state.status==="pending",r=!this.#r.canStart();try{if(i)t();else{this.#i({type:"pending",variables:e,isPaused:r}),this.#s.config.onMutate&&await this.#s.config.onMutate(e,this,s);const o=await this.options.onMutate?.(e,s);o!==this.state.context&&this.#i({type:"pending",context:o,variables:e,isPaused:r})}const a=await this.#r.start();return await this.#s.config.onSuccess?.(a,e,this.state.context,this,s),await this.options.onSuccess?.(a,e,this.state.context,s),await this.#s.config.onSettled?.(a,null,this.state.variables,this.state.context,this,s),await this.options.onSettled?.(a,null,e,this.state.context,s),this.#i({type:"success",data:a}),a}catch(a){try{await this.#s.config.onError?.(a,e,this.state.context,this,s)}catch(o){Promise.reject(o)}try{await this.options.onError?.(a,e,this.state.context,s)}catch(o){Promise.reject(o)}try{await this.#s.config.onSettled?.(void 0,a,this.state.variables,this.state.context,this,s)}catch(o){Promise.reject(o)}try{await this.options.onSettled?.(void 0,a,e,this.state.context,s)}catch(o){Promise.reject(o)}throw this.#i({type:"error",error:a}),a}finally{this.#s.runNext(this)}}#i(e){const t=s=>{switch(e.type){case"failed":return{...s,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...s,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:e.error,failureCount:s.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=t(this.state),w.batch(()=>{this.#t.forEach(s=>{s.onMutationUpdate(e)}),this.#s.notify({mutation:this,type:"updated",action:e})})}};function ut(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ht=class extends B{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#s=0}#e;#t;#s;build(e,t,s){const i=new lt({client:e,mutationCache:this,mutationId:++this.#s,options:e.defaultMutationOptions(t),state:s});return this.add(i),i}add(e){this.#e.add(e);const t=H(e);if(typeof t=="string"){const s=this.#t.get(t);s?s.push(e):this.#t.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#e.delete(e)){const t=H(e);if(typeof t=="string"){const s=this.#t.get(t);if(s)if(s.length>1){const i=s.indexOf(e);i!==-1&&s.splice(i,1)}else s[0]===e&&this.#t.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=H(e);if(typeof t=="string"){const i=this.#t.get(t)?.find(r=>r.state.status==="pending");return!i||i===e}else return!0}runNext(e){const t=H(e);return typeof t=="string"?this.#t.get(t)?.find(i=>i!==e&&i.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){w.batch(()=>{this.#e.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){const t={exact:!0,...e};return this.getAll().find(s=>he(t,s))}findAll(e={}){return this.getAll().filter(t=>he(e,t))}notify(e){w.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return w.batch(()=>Promise.all(e.map(t=>t.continue().catch(D))))}};function H(e){return e.options.scope?.id}var dt=class extends B{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,s){const i=t.queryKey,r=t.queryHash??ae(i,t);let a=this.get(r);return a||(a=new st({client:e,queryKey:i,queryHash:r,options:e.defaultQueryOptions(t),state:s,defaultOptions:e.getQueryDefaults(i)}),this.add(a)),a}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){w.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){const t={exact:!0,...e};return this.getAll().find(s=>ue(t,s))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(s=>ue(e,s)):t}notify(e){w.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){w.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){w.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Me=class{#e;#t;#s;#r;#i;#o;#n;#a;constructor(e={}){this.#e=e.queryCache||new dt,this.#t=e.mutationCache||new ht,this.#s=e.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#o=0}mount(){this.#o++,this.#o===1&&(this.#n=oe.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#a=V.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#o--,this.#o===0&&(this.#n?.(),this.#n=void 0,this.#a?.(),this.#a=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),s=this.#e.build(this,t),i=s.state.data;return i===void 0?this.fetchQuery(e):(e.revalidateIfStale&&s.isStaleByTime(E(t.staleTime,s))&&this.prefetchQuery(t),Promise.resolve(i))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:t,state:s})=>{const i=s.data;return[t,i]})}setQueryData(e,t,s){const i=this.defaultQueryOptions({queryKey:e}),a=this.#e.get(i.queryHash)?.state.data,o=Le(t,a);if(o!==void 0)return this.#e.build(this,i).setData(o,{...s,manual:!0})}setQueriesData(e,t,s){return w.batch(()=>this.#e.findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,t,s)]))}getQueryState(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){const t=this.#e;w.batch(()=>{t.findAll(e).forEach(s=>{t.remove(s)})})}resetQueries(e,t){const s=this.#e;return w.batch(()=>(s.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const s={revert:!0,...t},i=w.batch(()=>this.#e.findAll(e).map(r=>r.cancel(s)));return Promise.all(i).then(D).catch(D)}invalidateQueries(e,t={}){return w.batch(()=>(this.#e.findAll(e).forEach(s=>{s.invalidate()}),e?.refetchType==="none"?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t)))}refetchQueries(e,t={}){const s={...t,cancelRefetch:t.cancelRefetch??!0},i=w.batch(()=>this.#e.findAll(e).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let a=r.fetch(void 0,s);return s.throwOnError||(a=a.catch(D)),r.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(i).then(D)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const s=this.#e.build(this,t);return s.isStaleByTime(E(t.staleTime,s))?s.fetch(t):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(D).catch(D)}fetchInfiniteQuery(e){return e.behavior=W(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(D).catch(D)}ensureInfiniteQueryData(e){return e.behavior=W(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return V.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#s}setDefaultOptions(e){this.#s=e}setQueryDefaults(e,t){this.#r.set(z(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...this.#r.values()],s={};return t.forEach(i=>{j(e,i.queryKey)&&Object.assign(s,i.defaultOptions)}),s}setMutationDefaults(e,t){this.#i.set(z(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...this.#i.values()],s={};return t.forEach(i=>{j(e,i.mutationKey)&&Object.assign(s,i.defaultOptions)}),s}defaultQueryOptions(e){if(e._defaulted)return e;const t={...this.#s.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=ae(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===ne&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#s.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},ft=C.createContext(void 0),pt=e=>{const t=C.useContext(ft);if(e)return e;if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Ne=C.createContext(!1),mt=()=>C.useContext(Ne);Ne.Provider;function yt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var gt=C.createContext(yt()),vt=()=>C.useContext(gt),bt=(e,t,s)=>{const i=s?.state.error&&typeof e.throwOnError=="function"?Pe(e.throwOnError,[s.state.error,s]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||i)&&(t.isReset()||(e.retryOnMount=!1))},wt=e=>{C.useEffect(()=>{e.clearReset()},[e])},St=({result:e,errorResetBoundary:t,throwOnError:s,query:i,suspense:r})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&(r&&e.data===void 0||Pe(s,[e.error,i])),xt=e=>{if(e.suspense){const s=r=>r==="static"?r:Math.max(r??1e3,1e3),i=e.staleTime;e.staleTime=typeof i=="function"?(...r)=>s(i(...r)):s(i),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},Ct=(e,t)=>e.isLoading&&e.isFetching&&!t,Dt=(e,t)=>e?.suspense&&t.isPending,ve=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function Pt(e,t,s){const i=mt(),r=vt(),a=pt(s),o=a.defaultQueryOptions(e);a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);const n=a.getQueryCache().get(o.queryHash);o._optimisticResults=i?"isRestoring":"optimistic",xt(o),bt(o,r,n),wt(r);const h=!a.getQueryCache().get(o.queryHash),[f]=C.useState(()=>new t(a,o)),c=f.getOptimisticResult(o),m=!i&&e.subscribed!==!1;if(C.useSyncExternalStore(C.useCallback(d=>{const y=m?f.subscribe(w.batchCalls(d)):D;return f.updateResult(),y},[f,m]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),C.useEffect(()=>{f.setOptions(o)},[o,f]),Dt(o,c))throw ve(o,f,r);if(St({result:c,errorResetBoundary:r,throwOnError:o.throwOnError,query:n,suspense:o.suspense}))throw c.error;return a.getDefaultOptions().queries?._experimental_afterQuery?.(o,c),o.experimental_prefetchInRender&&!I&&Ct(c,i)&&(h?ve(o,f,r):n?.promise)?.catch(D).finally(()=>{f.updateResult()}),o.notifyOnChangeProps?c:f.trackResult(c)}function Qe(e,t){return Pt(e,ct,t)}const Ie=(e,t,s,i=1e4)=>{const r=["Alice","Bob","Charlie","Diana","Eve","Frank","Grace","Henry","Ivy","Jack"],a=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],o=["single","relationship","complicated"],h=[...Array.from({length:i}).map((c,m)=>{const d=m+1;return{id:d.toString(),firstName:r[d%r.length],lastName:a[d%a.length],age:20+d%50,visits:Math.floor(Math.random()*500)+1,status:o[d%o.length],progress:Math.floor(Math.random()*100)+1}})],f=s[0];if(f){const{id:c,desc:m}=f;h.sort((d,y)=>{const l=d[c],u=y[c];return m?l<u?1:-1:l>u?1:-1})}return{data:h.slice(e,e+t),meta:{totalRowCount:h.length}}},ke=async(e,t=200)=>(await Rt(t),e()),Rt=e=>new Promise(t=>setTimeout(t,e)),{expect:v,fn:ze,userEvent:je,waitFor:O,within:Be}=__STORYBOOK_MODULE_TEST__,Ss={title:"Design System/Table/Virtualized",component:G,parameters:{layout:"fullscreen"},args:{columns:re,data:[],stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:p.jsx(qe,{}),onRowClick:e=>console.log("Row clicked:",e)},decorators:[Ae]},U={args:{virtualized:!0,data:[]},play:async({canvas:e})=>{await v(e.getByText(/no matching records found/i)).toBeInTheDocument()}},K={name:"Virtualized Selectable Table",render:function(t){const s=async(l,u,g)=>ke(()=>Ie(l,u,g)),[r,a]=C.useState([]),{data:o,fetchNextPage:n,isFetching:h,isLoading:f}=Qe({queryKey:["people",r],queryFn:async({pageParam:l})=>{const u=l*50;return await s(u,50,r)},initialPageParam:0,getNextPageParam:(l,u)=>u.length,placeholderData:Ce},new Me({defaultOptions:{queries:{staleTime:300*1e3,gcTime:600*1e3,refetchOnWindowFocus:!1}}})),c=C.useMemo(()=>o?.pages.flatMap(l=>l.data)??[],[o]),m=o?.pages[0]?.meta.totalRowCount??0,d=c.length,y=async l=>{t.onScroll?.(l);const{bottomOffset:u}=l,g=d>=m,x=u<=500;!h&&!g&&x&&await n()};return p.jsxs("div",{className:b.virtualizedDemoContainer,children:[p.jsxs("div",{className:b.virtualizedDemoHeader,children:[p.jsx("h4",{className:b.virtualizedDemoHeader__title,children:"Virtualized Table Demo"}),p.jsx("p",{className:b.virtualizedDemoHeader__description,children:"This table uses infinite query to fetch data as you scroll, making it performant even with large datasets. Try scrolling to see the data loading!"}),p.jsxs("p",{className:b.virtualizedDemoHeader__stats,children:["(",c.length," of ",m," rows fetched)"]})]}),!1,p.jsxs("div",{className:b.virtualizedTableWrapper,children:[p.jsx(G,{...t,data:c,onSortingChange:a,onScroll:y,virtualized:!0}),f&&p.jsx("div",{className:b.loadingOverlay,children:p.jsxs("div",{className:b.loadingContent,children:[p.jsx(be,{size:"small"}),p.jsx("span",{className:b.loadingText,children:"Loading data..."})]})})]})]})},args:{selectable:!0,columns:re.map(e=>"accessorKey"in e&&e.accessorKey==="age"?{...e,size:100}:e),onScroll:ze()},play:async({canvasElement:e,args:t})=>{const s=Be(e);await O(()=>v(s.getByText(/of 10000 rows fetched/i)).toBeInTheDocument(),{timeout:5e3});const i=we(s);await v(i.length).toBeGreaterThan(0);const a=s.getAllByRole("checkbox")[1];await je.click(a),await O(()=>v(a).toBeChecked(),{timeout:1e3});const o=e.querySelector('[class*="virtualizedContainer"]');await v(o).toBeInTheDocument(),o.scrollTop=o.scrollHeight,await O(()=>v(t.onScroll).toHaveBeenCalled(),{timeout:2e3}),await O(()=>v(s.queryAllByRole("checkbox",{checked:!0})).toHaveLength(0),{timeout:1e3}),o.scrollTop=0,await O(()=>{const n=s.getAllByRole("checkbox");return v(n[1]).toBeChecked()},{timeout:1e3})}},L={name:"Virtualized Expandable Table",render:function(t){const s=async(l,u,g)=>ke(()=>Ie(l,u,g)),[r,a]=C.useState([]),{data:o,fetchNextPage:n,isFetching:h,isLoading:f}=Qe({queryKey:["people-expandable",r],queryFn:async({pageParam:l})=>{const u=l*50;return await s(u,50,r)},initialPageParam:0,getNextPageParam:(l,u)=>u.length,placeholderData:Ce},new Me({defaultOptions:{queries:{staleTime:300*1e3,gcTime:600*1e3,refetchOnWindowFocus:!1}}})),c=C.useMemo(()=>o?.pages.flatMap(l=>l.data)??[],[o]),m=o?.pages[0]?.meta.totalRowCount??0,d=c.length,y=async l=>{t.onScroll?.(l);const{bottomOffset:u}=l,g=d>=m,x=u<=500;!h&&!g&&x&&await n()};return p.jsxs("div",{className:b.virtualizedDemoContainer,children:[p.jsxs("div",{className:b.virtualizedDemoHeader,children:[p.jsx("h4",{className:b.virtualizedDemoHeader__title,children:"Virtualized Table with Expandable Rows"}),p.jsx("p",{className:b.virtualizedDemoHeader__description,children:"This table combines virtualization for large datasets with expandable rows. Click the chevron to expand rows and see additional details."}),p.jsxs("p",{className:b.virtualizedDemoHeader__stats,children:["(",c.length," of ",m," rows fetched)"]})]}),!1,p.jsxs("div",{className:b.virtualizedTableWrapper,children:[p.jsx(G,{...t,data:c,onSortingChange:a,onScroll:y,virtualized:!0,expandable:!0,renderExpandedRow:l=>p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:b.expandedRowDetails,children:[p.jsxs("h4",{children:["Expanded Details for ",l.firstName]}),p.jsxs("p",{children:["ID: ",l.id]}),p.jsxs("p",{children:["Full Name: ",l.firstName," ",l.lastName]}),p.jsxs("p",{children:["Status: ",l.status]})]}),p.jsx(G,{columns:[{accessorKey:"id",header:"ID"},{accessorKey:"firstName",header:"First Name"},{accessorKey:"lastName",header:"Last Name"}],data:_e.slice(0,3)})]})}),f&&p.jsx("div",{className:b.loadingOverlay,children:p.jsxs("div",{className:b.loadingContent,children:[p.jsx(be,{size:"small"}),p.jsx("span",{className:b.loadingText,children:"Loading data..."})]})})]})]})},args:{columns:re.map(e=>"accessorKey"in e&&e.accessorKey==="age"?{...e,size:100}:e),onScroll:ze()},play:async({canvasElement:e,args:t})=>{const s=Be(e);await O(()=>v(s.getByText(/of 10000 rows fetched/i)).toBeInTheDocument(),{timeout:2e3});const i=we(s);await v(i.length).toBeGreaterThan(0);const r=s.getAllByRole("button",{name:/chevron_right/i});await v(r.length).toBeGreaterThan(0),await je.click(r[0]),await O(()=>v(s.getByText(/expanded details for/i)).toBeInTheDocument(),{timeout:1e3});const a=e.querySelector('[class*="virtualizedContainer"]');await v(a).toBeInTheDocument(),a.scrollTop=a.scrollHeight,await O(()=>v(t.onScroll).toHaveBeenCalledWith(v.objectContaining({scrollOffset:a.scrollTop,viewportHeight:a.clientHeight,scrollDirection:"forward"})),{timeout:1e3}),await O(()=>v(s.queryByText(/expanded details for/i)).not.toBeInTheDocument(),{timeout:1e3}),a.scrollTop=0,await O(()=>v(t.onScroll).toHaveBeenCalledWith(v.objectContaining({scrollOffset:a.scrollTop,viewportHeight:a.clientHeight,scrollDirection:"backward"})),{timeout:1e3}),await O(()=>v(s.getByText(/expanded details for/i)).toBeInTheDocument(),{timeout:1e3})}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    virtualized: true,
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(/no matching records found/i)).toBeInTheDocument();
  }
}`,...U.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const xs=["EmptyState","VirtualizedSelectable","VirtualizedExpandable"];export{U as EmptyState,L as VirtualizedExpandable,K as VirtualizedSelectable,xs as __namedExportsOrder,Ss as default};
