import{j as i}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-CawOWBk2.js";import{c as ve}from"./index-D5F6wOnQ.js";import{D as be}from"./ds-icon-B5OOc0_-.js";import{D as A}from"./ds-smart-tabs-tN6OPuc3.js";import{D as Be}from"./ds-checkbox-C2WaUxTP.js";import{D as He}from"./ds-drawer-DAixNUBE.js";import{D as T}from"./ds-table-BfhBTYHm.js";import{D as Ge}from"./ds-spinner-CoG241ZC.js";import{s as u}from"./ds-table.stories.module-DepcHETJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYHmtHLW.js";import"./index-DmO0xR7V.js";import"./index-CyED3uAL.js";import"./index-olW93a_3.js";import"./index-BklTZ3e4.js";import"./ds-typography-BUQyJK_s.js";import"./index-DhSz79bo.js";import"./portal-oXecsMcd.js";import"./create-split-props-u5h9OPvL.js";import"./index-tySxGykU.js";import"./use-locale-context-BVAtCfJX.js";import"./dialog-title-Bdw9vPSm.js";import"./render-strategy-DsSB-ku4.js";import"./use-presence-Bw0p3Iu3.js";import"./index-BL3UM9yq.js";import"./ds-button-DFnm-zIm.js";import"./ds-button-legacy-VsU78c9Z.js";import"./ds-button-new-ZtLT4X9M.js";import"./ds-dropdown-menu-mO93LmnR.js";import"./index-DtTbUTvY.js";import"./Combination-BnjEUC0z.js";import"./index-DEF00Z1k.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-DpOyFrPx.js";import"./ds-text-input-CPKbpA8T.js";import"./index-BPPhAumR.js";var V=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},We={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},$e=class{#e=We;#t=!1;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}},I=new $e;function Je(e){setTimeout(e,0)}var M=typeof window>"u"||"Deno"in globalThis;function C(){}function Ye(e,t){return typeof e=="function"?e(t):e}function ue(e){return typeof e=="number"&&e>=0&&e!==1/0}function Me(e,t){return Math.max(e+(t||0)-Date.now(),0)}function j(e,t){return typeof e=="function"?e(t):e}function N(e,t){return typeof e=="function"?e(t):e}function Ne(e,t){const{type:s="all",exact:r,fetchStatus:a,predicate:o,queryKey:l,stale:n}=e;if(l){if(r){if(t.queryHash!==we(l,t.options))return!1}else if(!Q(t.queryKey,l))return!1}if(s!=="all"){const d=t.isActive();if(s==="active"&&!d||s==="inactive"&&d)return!1}return!(typeof n=="boolean"&&t.isStale()!==n||a&&a!==t.state.fetchStatus||o&&!o(t))}function Pe(e,t){const{exact:s,status:r,predicate:a,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(s){if(_(t.options.mutationKey)!==_(o))return!1}else if(!Q(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||a&&!a(t))}function we(e,t){return(t?.queryKeyHashFn||_)(e)}function _(e){return JSON.stringify(e,(t,s)=>he(s)?Object.keys(s).sort().reduce((r,a)=>(r[a]=s[a],r),{}):s)}function Q(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(s=>Q(e[s],t[s])):!1}var Ze=Object.prototype.hasOwnProperty;function Ee(e,t){if(e===t)return e;const s=xe(e)&&xe(t);if(!s&&!(he(e)&&he(t)))return t;const a=(s?e:Object.keys(e)).length,o=s?t:Object.keys(t),l=o.length,n=s?new Array(l):{};let d=0;for(let f=0;f<l;f++){const c=s?f:o[f],h=e[c],p=t[c];if(h===p){n[c]=h,(s?f<a:Ze.call(e,c))&&d++;continue}if(h===null||p===null||typeof h!="object"||typeof p!="object"){n[c]=p;continue}const w=Ee(h,p);n[c]=w,w===h&&d++}return a===l&&d===a?e:n}function de(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(e[s]!==t[s])return!1;return!0}function xe(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function he(e){if(!Oe(e))return!1;const t=e.constructor;if(t===void 0)return!0;const s=t.prototype;return!(!Oe(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Oe(e){return Object.prototype.toString.call(e)==="[object Object]"}function Xe(e){return new Promise(t=>{I.setTimeout(t,e)})}function me(e,t,s){return typeof s.structuralSharing=="function"?s.structuralSharing(e,t):s.structuralSharing!==!1?Ee(e,t):t}function et(e){return e}function tt(e,t,s=0){const r=[...e,t];return s&&r.length>s?r.slice(1):r}function st(e,t,s=0){const r=[t,...e];return s&&r.length>s?r.slice(0,-1):r}var Se=Symbol();function Ae(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===Se?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function rt(e,t){return typeof e=="function"?e(...t):!!e}var at=class extends V{#e;#t;#s;constructor(){super(),this.#s=e=>{if(!M&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#s=e,this.#t?.(),this.#t=e(t=>{typeof t=="boolean"?this.setFocused(t):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Ce=new at;function fe(){let e,t;const s=new Promise((a,o)=>{e=a,t=o});s.status="pending",s.catch(()=>{});function r(a){Object.assign(s,a),delete s.resolve,delete s.reject}return s.resolve=a=>{r({status:"fulfilled",value:a}),e(a)},s.reject=a=>{r({status:"rejected",reason:a}),t(a)},s}var it=Je;function nt(){let e=[],t=0,s=n=>{n()},r=n=>{n()},a=it;const o=n=>{t?e.push(n):a(()=>{s(n)})},l=()=>{const n=e;e=[],n.length&&a(()=>{r(()=>{n.forEach(d=>{s(d)})})})};return{batch:n=>{let d;t++;try{d=n()}finally{t--,t||l()}return d},batchCalls:n=>(...d)=>{o(()=>{n(...d)})},schedule:o,setNotifyFunction:n=>{s=n},setBatchNotifyFunction:n=>{r=n},setScheduler:n=>{a=n}}}var b=nt(),ot=class extends V{#e=!0;#t;#s;constructor(){super(),this.#s=e=>{if(!M&&window.addEventListener){const t=()=>e(!0),s=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#t||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#s=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(s=>{s(e)}))}isOnline(){return this.#e}},oe=new ot;function lt(e){return Math.min(1e3*2**e,3e4)}function _e(e){return(e??"online")==="online"?oe.isOnline():!0}var pe=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function Qe(e){let t=!1,s=0,r;const a=fe(),o=()=>a.status!=="pending",l=m=>{if(!o()){const v=new pe(m);p(v),e.onCancel?.(v)}},n=()=>{t=!0},d=()=>{t=!1},f=()=>Ce.isFocused()&&(e.networkMode==="always"||oe.isOnline())&&e.canRun(),c=()=>_e(e.networkMode)&&e.canRun(),h=m=>{o()||(r?.(),a.resolve(m))},p=m=>{o()||(r?.(),a.reject(m))},w=()=>new Promise(m=>{r=v=>{(o()||f())&&m(v)},e.onPause?.()}).then(()=>{r=void 0,o()||e.onContinue?.()}),g=()=>{if(o())return;let m;const v=s===0?e.initialPromise:void 0;try{m=v??e.fn()}catch(S){m=Promise.reject(S)}Promise.resolve(m).then(h).catch(S=>{if(o())return;const D=e.retry??(M?0:3),P=e.retryDelay??lt,F=typeof P=="function"?P(s,S):P,k=D===!0||typeof D=="number"&&s<D||typeof D=="function"&&D(s,S);if(t||!k){p(S);return}s++,e.onFail?.(s,S),Xe(F).then(()=>f()?void 0:w()).then(()=>{t?p(S):g()})})};return{promise:a,status:()=>a.status,cancel:l,continue:()=>(r?.(),a),cancelRetry:n,continueRetry:d,canStart:c,start:()=>(c()?g():w().then(g),a)}}var Ve=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ue(this.gcTime)&&(this.#e=I.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(M?1/0:300*1e3))}clearGcTimeout(){this.#e&&(I.clearTimeout(this.#e),this.#e=void 0)}},ct=class extends Ve{#e;#t;#s;#a;#r;#o;#n;constructor(e){super(),this.#n=!1,this.#o=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#a=e.client,this.#s=this.#a.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=Te(this.options),this.state=e.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#r?.promise}setOptions(e){if(this.options={...this.#o,...e},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const t=Te(this.options);t.data!==void 0&&(this.setState(Fe(t.data,t.dataUpdatedAt)),this.#e=t)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#s.remove(this)}setData(e,t){const s=me(this.state.data,e,this.options);return this.#i({data:s,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),s}setState(e,t){this.#i({type:"setState",state:e,setStateOptions:t})}cancel(e){const t=this.#r?.promise;return this.#r?.cancel(e),t?t.then(C).catch(C):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(e=>N(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Se||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>j(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!Me(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(t=>t.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){this.observers.find(t=>t.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#r&&(this.#n?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#s.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#i({type:"invalidate"})}async fetch(e,t){if(this.state.fetchStatus!=="idle"&&this.#r?.status()!=="rejected"){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(e&&this.setOptions(e),!this.options.queryFn){const n=this.observers.find(d=>d.options.queryFn);n&&this.setOptions(n.options)}const s=new AbortController,r=n=>{Object.defineProperty(n,"signal",{enumerable:!0,get:()=>(this.#n=!0,s.signal)})},a=()=>{const n=Ae(this.options,t),f=(()=>{const c={client:this.#a,queryKey:this.queryKey,meta:this.meta};return r(c),c})();return this.#n=!1,this.options.persister?this.options.persister(n,f,this):n(f)},l=(()=>{const n={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#a,state:this.state,fetchFn:a};return r(n),n})();this.options.behavior?.onFetch(l,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==l.fetchOptions?.meta)&&this.#i({type:"fetch",meta:l.fetchOptions?.meta}),this.#r=Qe({initialPromise:t?.initialPromise,fn:l.fetchFn,onCancel:n=>{n instanceof pe&&n.revert&&this.setState({...this.#t,fetchStatus:"idle"}),s.abort()},onFail:(n,d)=>{this.#i({type:"failed",failureCount:n,error:d})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0});try{const n=await this.#r.start();if(n===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(n),this.#s.config.onSuccess?.(n,this),this.#s.config.onSettled?.(n,this.state.error,this),n}catch(n){if(n instanceof pe){if(n.silent)return this.#r.promise;if(n.revert){if(this.state.data===void 0)throw n;return this.state.data}}throw this.#i({type:"error",error:n}),this.#s.config.onError?.(n,this),this.#s.config.onSettled?.(this.state.data,n,this),n}finally{this.scheduleGc()}}#i(e){const t=s=>{switch(e.type){case"failed":return{...s,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...Ke(s.data,this.options),fetchMeta:e.meta??null};case"success":const r={...s,...Fe(e.data,e.dataUpdatedAt),dataUpdateCount:s.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#t=e.manual?r:void 0,r;case"error":const a=e.error;return{...s,error:a,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...e.state}}};this.state=t(this.state),b.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),this.#s.notify({query:this,type:"updated",action:e})})}};function Ke(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:_e(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Fe(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Te(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,s=t!==void 0,r=s?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:s?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var ut=class extends V{constructor(e,t){super(),this.options=t,this.#e=e,this.#i=null,this.#n=fe(),this.bindMethods(),this.setOptions(t)}#e;#t=void 0;#s=void 0;#a=void 0;#r;#o;#n;#i;#p;#h;#m;#c;#u;#l;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),je(this.#t,this.options)?this.#d():this.updateResult(),this.#b())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ge(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ge(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#w(),this.#S(),this.#t.removeObserver(this)}setOptions(e){const t=this.options,s=this.#t;if(this.options=this.#e.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof N(this.options.enabled,this.#t)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#C(),this.#t.setOptions(this.options),t._defaulted&&!de(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this});const r=this.hasListeners();r&&ke(this.#t,s,this.options,t)&&this.#d(),this.updateResult(),r&&(this.#t!==s||N(this.options.enabled,this.#t)!==N(t.enabled,this.#t)||j(this.options.staleTime,this.#t)!==j(t.staleTime,this.#t))&&this.#g();const a=this.#y();r&&(this.#t!==s||N(this.options.enabled,this.#t)!==N(t.enabled,this.#t)||a!==this.#l)&&this.#v(a)}getOptimisticResult(e){const t=this.#e.getQueryCache().build(this.#e,e),s=this.createResult(t,e);return ht(this,s)&&(this.#a=s,this.#o=this.options,this.#r=this.#t.state),s}getCurrentResult(){return this.#a}trackResult(e,t){return new Proxy(e,{get:(s,r)=>(this.trackProp(r),t?.(r),r==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&this.#n.status==="pending"&&this.#n.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(s,r))})}trackProp(e){this.#f.add(e)}getCurrentQuery(){return this.#t}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const t=this.#e.defaultQueryOptions(e),s=this.#e.getQueryCache().build(this.#e,t);return s.fetch().then(()=>this.createResult(s,t))}fetch(e){return this.#d({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#a))}#d(e){this.#C();let t=this.#t.fetch(this.options,e);return e?.throwOnError||(t=t.catch(C)),t}#g(){this.#w();const e=j(this.options.staleTime,this.#t);if(M||this.#a.isStale||!ue(e))return;const s=Me(this.#a.dataUpdatedAt,e)+1;this.#c=I.setTimeout(()=>{this.#a.isStale||this.updateResult()},s)}#y(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#v(e){this.#S(),this.#l=e,!(M||N(this.options.enabled,this.#t)===!1||!ue(this.#l)||this.#l===0)&&(this.#u=I.setInterval(()=>{(this.options.refetchIntervalInBackground||Ce.isFocused())&&this.#d()},this.#l))}#b(){this.#g(),this.#v(this.#y())}#w(){this.#c&&(I.clearTimeout(this.#c),this.#c=void 0)}#S(){this.#u&&(I.clearInterval(this.#u),this.#u=void 0)}createResult(e,t){const s=this.#t,r=this.options,a=this.#a,o=this.#r,l=this.#o,d=e!==s?e.state:this.#s,{state:f}=e;let c={...f},h=!1,p;if(t._optimisticResults){const R=this.hasListeners(),K=!R&&je(e,t),E=R&&ke(e,s,t,r);(K||E)&&(c={...c,...Ke(f.data,e.options)}),t._optimisticResults==="isRestoring"&&(c.fetchStatus="idle")}let{error:w,errorUpdatedAt:g,status:m}=c;p=c.data;let v=!1;if(t.placeholderData!==void 0&&p===void 0&&m==="pending"){let R;a?.isPlaceholderData&&t.placeholderData===l?.placeholderData?(R=a.data,v=!0):R=typeof t.placeholderData=="function"?t.placeholderData(this.#m?.state.data,this.#m):t.placeholderData,R!==void 0&&(m="success",p=me(a?.data,R,t),h=!0)}if(t.select&&p!==void 0&&!v)if(a&&p===o?.data&&t.select===this.#p)p=this.#h;else try{this.#p=t.select,p=t.select(p),p=me(a?.data,p,t),this.#h=p,this.#i=null}catch(R){this.#i=R}this.#i&&(w=this.#i,p=this.#h,g=Date.now(),m="error");const S=c.fetchStatus==="fetching",D=m==="pending",P=m==="error",F=D&&S,k=p!==void 0,x={status:m,fetchStatus:c.fetchStatus,isPending:D,isSuccess:m==="success",isError:P,isInitialLoading:F,isLoading:F,data:p,dataUpdatedAt:c.dataUpdatedAt,error:w,errorUpdatedAt:g,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>d.dataUpdateCount||c.errorUpdateCount>d.errorUpdateCount,isFetching:S,isRefetching:S&&!D,isLoadingError:P&&!k,isPaused:c.fetchStatus==="paused",isPlaceholderData:h,isRefetchError:P&&k,isStale:De(e,t),refetch:this.refetch,promise:this.#n,isEnabled:N(t.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const R=L=>{x.status==="error"?L.reject(x.error):x.data!==void 0&&L.resolve(x.data)},K=()=>{const L=this.#n=x.promise=fe();R(L)},E=this.#n;switch(E.status){case"pending":e.queryHash===s.queryHash&&R(E);break;case"fulfilled":(x.status==="error"||x.data!==E.value)&&K();break;case"rejected":(x.status!=="error"||x.error!==E.reason)&&K();break}}return x}updateResult(){const e=this.#a,t=this.createResult(this.#t,this.options);if(this.#r=this.#t.state,this.#o=this.options,this.#r.data!==void 0&&(this.#m=this.#t),de(t,e))return;this.#a=t;const s=()=>{if(!e)return!0;const{notifyOnChangeProps:r}=this.options,a=typeof r=="function"?r():r;if(a==="all"||!a&&!this.#f.size)return!0;const o=new Set(a??this.#f);return this.options.throwOnError&&o.add("error"),Object.keys(this.#a).some(l=>{const n=l;return this.#a[n]!==e[n]&&o.has(n)})};this.#D({listeners:s()})}#C(){const e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#t)return;const t=this.#t;this.#t=e,this.#s=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#b()}#D(e){b.batch(()=>{e.listeners&&this.listeners.forEach(t=>{t(this.#a)}),this.#e.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function dt(e,t){return N(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function je(e,t){return dt(e,t)||e.state.data!==void 0&&ge(e,t,t.refetchOnMount)}function ge(e,t,s){if(N(t.enabled,e)!==!1&&j(t.staleTime,e)!=="static"){const r=typeof s=="function"?s(e):s;return r==="always"||r!==!1&&De(e,t)}return!1}function ke(e,t,s,r){return(e!==t||N(r.enabled,e)===!1)&&(!s.suspense||e.state.status!=="error")&&De(e,s)}function De(e,t){return N(t.enabled,e)!==!1&&e.isStaleByTime(j(t.staleTime,e))}function ht(e,t){return!de(e.getCurrentResult(),t)}function le(e){return{onFetch:(t,s)=>{const r=t.options,a=t.fetchOptions?.meta?.fetchMore?.direction,o=t.state.data?.pages||[],l=t.state.data?.pageParams||[];let n={pages:[],pageParams:[]},d=0;const f=async()=>{let c=!1;const h=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(t.signal.aborted?c=!0:t.signal.addEventListener("abort",()=>{c=!0}),t.signal)})},p=Ae(t.options,t.fetchOptions),w=async(g,m,v)=>{if(c)return Promise.reject();if(m==null&&g.pages.length)return Promise.resolve(g);const D=(()=>{const ce={client:t.client,queryKey:t.queryKey,pageParam:m,direction:v?"backward":"forward",meta:t.options.meta};return h(ce),ce})(),P=await p(D),{maxPages:F}=t.options,k=v?st:tt;return{pages:k(g.pages,P,F),pageParams:k(g.pageParams,m,F)}};if(a&&o.length){const g=a==="backward",m=g?Le:ye,v={pages:o,pageParams:l},S=m(r,v);n=await w(v,S,g)}else{const g=e??o.length;do{const m=d===0?l[0]??r.initialPageParam:ye(r,n);if(d>0&&m==null)break;n=await w(n,m),d++}while(d<g)}return n};t.options.persister?t.fetchFn=()=>t.options.persister?.(f,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=f}}}function ye(e,{pages:t,pageParams:s}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,s[r],s):void 0}function Le(e,{pages:t,pageParams:s}){return t.length>0?e.getPreviousPageParam?.(t[0],t,s[0],s):void 0}function mt(e,t){return t?ye(e,t)!=null:!1}function ft(e,t){return!t||!e.getPreviousPageParam?!1:Le(e,t)!=null}var pt=class extends ut{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:le()})}getOptimisticResult(e){return e.behavior=le(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:s}=e,r=super.createResult(e,t),{isFetching:a,isRefetching:o,isError:l,isRefetchError:n}=r,d=s.fetchMeta?.fetchMore?.direction,f=l&&d==="forward",c=a&&d==="forward",h=l&&d==="backward",p=a&&d==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:mt(t,s.data),hasPreviousPage:ft(t,s.data),isFetchNextPageError:f,isFetchingNextPage:c,isFetchPreviousPageError:h,isFetchingPreviousPage:p,isRefetchError:n&&!f&&!h,isRefetching:o&&!c&&!p}}},gt=class extends Ve{#e;#t;#s;#a;constructor(e){super(),this.#e=e.client,this.mutationId=e.mutationId,this.#s=e.mutationCache,this.#t=[],this.state=e.state||yt(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#s.remove(this))}continue(){return this.#a?.continue()??this.execute(this.state.variables)}async execute(e){const t=()=>{this.#r({type:"continue"})},s={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#a=Qe({fn:()=>this.options.mutationFn?this.options.mutationFn(e,s):Promise.reject(new Error("No mutationFn found")),onFail:(o,l)=>{this.#r({type:"failed",failureCount:o,error:l})},onPause:()=>{this.#r({type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});const r=this.state.status==="pending",a=!this.#a.canStart();try{if(r)t();else{this.#r({type:"pending",variables:e,isPaused:a}),await this.#s.config.onMutate?.(e,this,s);const l=await this.options.onMutate?.(e,s);l!==this.state.context&&this.#r({type:"pending",context:l,variables:e,isPaused:a})}const o=await this.#a.start();return await this.#s.config.onSuccess?.(o,e,this.state.context,this,s),await this.options.onSuccess?.(o,e,this.state.context,s),await this.#s.config.onSettled?.(o,null,this.state.variables,this.state.context,this,s),await this.options.onSettled?.(o,null,e,this.state.context,s),this.#r({type:"success",data:o}),o}catch(o){try{throw await this.#s.config.onError?.(o,e,this.state.context,this,s),await this.options.onError?.(o,e,this.state.context,s),await this.#s.config.onSettled?.(void 0,o,this.state.variables,this.state.context,this,s),await this.options.onSettled?.(void 0,o,e,this.state.context,s),o}finally{this.#r({type:"error",error:o})}}finally{this.#s.runNext(this)}}#r(e){const t=s=>{switch(e.type){case"failed":return{...s,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...s,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:e.error,failureCount:s.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=t(this.state),b.batch(()=>{this.#t.forEach(s=>{s.onMutationUpdate(e)}),this.#s.notify({mutation:this,type:"updated",action:e})})}};function yt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var vt=class extends V{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#s=0}#e;#t;#s;build(e,t,s){const r=new gt({client:e,mutationCache:this,mutationId:++this.#s,options:e.defaultMutationOptions(t),state:s});return this.add(r),r}add(e){this.#e.add(e);const t=q(e);if(typeof t=="string"){const s=this.#t.get(t);s?s.push(e):this.#t.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#e.delete(e)){const t=q(e);if(typeof t=="string"){const s=this.#t.get(t);if(s)if(s.length>1){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}else s[0]===e&&this.#t.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=q(e);if(typeof t=="string"){const r=this.#t.get(t)?.find(a=>a.state.status==="pending");return!r||r===e}else return!0}runNext(e){const t=q(e);return typeof t=="string"?this.#t.get(t)?.find(r=>r!==e&&r.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){b.batch(()=>{this.#e.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){const t={exact:!0,...e};return this.getAll().find(s=>Pe(t,s))}findAll(e={}){return this.getAll().filter(t=>Pe(e,t))}notify(e){b.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return b.batch(()=>Promise.all(e.map(t=>t.continue().catch(C))))}};function q(e){return e.options.scope?.id}var bt=class extends V{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,s){const r=t.queryKey,a=t.queryHash??we(r,t);let o=this.get(a);return o||(o=new ct({client:e,queryKey:r,queryHash:a,options:e.defaultQueryOptions(t),state:s,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){b.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){const t={exact:!0,...e};return this.getAll().find(s=>Ne(t,s))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(s=>Ne(e,s)):t}notify(e){b.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){b.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){b.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},wt=class{#e;#t;#s;#a;#r;#o;#n;#i;constructor(e={}){this.#e=e.queryCache||new bt,this.#t=e.mutationCache||new vt,this.#s=e.defaultOptions||{},this.#a=new Map,this.#r=new Map,this.#o=0}mount(){this.#o++,this.#o===1&&(this.#n=Ce.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#i=oe.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#o--,this.#o===0&&(this.#n?.(),this.#n=void 0,this.#i?.(),this.#i=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),s=this.#e.build(this,t),r=s.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&s.isStaleByTime(j(t.staleTime,s))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:t,state:s})=>{const r=s.data;return[t,r]})}setQueryData(e,t,s){const r=this.defaultQueryOptions({queryKey:e}),o=this.#e.get(r.queryHash)?.state.data,l=Ye(t,o);if(l!==void 0)return this.#e.build(this,r).setData(l,{...s,manual:!0})}setQueriesData(e,t,s){return b.batch(()=>this.#e.findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,s)]))}getQueryState(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){const t=this.#e;b.batch(()=>{t.findAll(e).forEach(s=>{t.remove(s)})})}resetQueries(e,t){const s=this.#e;return b.batch(()=>(s.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const s={revert:!0,...t},r=b.batch(()=>this.#e.findAll(e).map(a=>a.cancel(s)));return Promise.all(r).then(C).catch(C)}invalidateQueries(e,t={}){return b.batch(()=>(this.#e.findAll(e).forEach(s=>{s.invalidate()}),e?.refetchType==="none"?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t)))}refetchQueries(e,t={}){const s={...t,cancelRefetch:t.cancelRefetch??!0},r=b.batch(()=>this.#e.findAll(e).filter(a=>!a.isDisabled()&&!a.isStatic()).map(a=>{let o=a.fetch(void 0,s);return s.throwOnError||(o=o.catch(C)),a.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(C)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const s=this.#e.build(this,t);return s.isStaleByTime(j(t.staleTime,s))?s.fetch(t):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(C).catch(C)}fetchInfiniteQuery(e){return e.behavior=le(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(C).catch(C)}ensureInfiniteQueryData(e){return e.behavior=le(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return oe.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#s}setDefaultOptions(e){this.#s=e}setQueryDefaults(e,t){this.#a.set(_(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...this.#a.values()],s={};return t.forEach(r=>{Q(e,r.queryKey)&&Object.assign(s,r.defaultOptions)}),s}setMutationDefaults(e,t){this.#r.set(_(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...this.#r.values()],s={};return t.forEach(r=>{Q(e,r.mutationKey)&&Object.assign(s,r.defaultOptions)}),s}defaultQueryOptions(e){if(e._defaulted)return e;const t={...this.#s.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=we(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Se&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#s.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},St=y.createContext(void 0),Ct=e=>{const t=y.useContext(St);if(e)return e;if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},qe=y.createContext(!1),Dt=()=>y.useContext(qe);qe.Provider;function Rt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Nt=y.createContext(Rt()),Pt=()=>y.useContext(Nt),xt=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},Ot=e=>{y.useEffect(()=>{e.clearReset()},[e])},Ft=({result:e,errorResetBoundary:t,throwOnError:s,query:r,suspense:a})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(a&&e.data===void 0||rt(s,[e.error,r])),Tt=e=>{if(e.suspense){const s=a=>a==="static"?a:Math.max(a??1e3,1e3),r=e.staleTime;e.staleTime=typeof r=="function"?(...a)=>s(r(...a)):s(r),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},jt=(e,t)=>e.isLoading&&e.isFetching&&!t,kt=(e,t)=>e?.suspense&&t.isPending,Ie=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function It(e,t,s){const r=Dt(),a=Pt(),o=Ct(s),l=o.defaultQueryOptions(e);o.getDefaultOptions().queries?._experimental_beforeQuery?.(l),l._optimisticResults=r?"isRestoring":"optimistic",Tt(l),xt(l,a),Ot(a);const n=!o.getQueryCache().get(l.queryHash),[d]=y.useState(()=>new t(o,l)),f=d.getOptimisticResult(l),c=!r&&e.subscribed!==!1;if(y.useSyncExternalStore(y.useCallback(h=>{const p=c?d.subscribe(b.batchCalls(h)):C;return d.updateResult(),p},[d,c]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),y.useEffect(()=>{d.setOptions(l)},[l,d]),kt(l,f))throw Ie(l,d,a);if(Ft({result:f,errorResetBoundary:a,throwOnError:l.throwOnError,query:o.getQueryCache().get(l.queryHash),suspense:l.suspense}))throw f.error;return o.getDefaultOptions().queries?._experimental_afterQuery?.(l,f),l.experimental_prefetchInRender&&!M&&jt(f,r)&&(n?Ie(l,d,a):o.getQueryCache().get(l.queryHash)?.promise)?.catch(C).finally(()=>{d.updateResult()}),l.notifyOnChangeProps?f:d.trackResult(f)}function Mt(e,t){return It(e,pt,t)}const Et=(e,t,s,r=1e4)=>{const a=["Alice","Bob","Charlie","Diana","Eve","Frank","Grace","Henry","Ivy","Jack"],o=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],l=["single","relationship","complicated"],d=[...Array.from({length:r}).map((f,c)=>{const h=c+1;return{id:h.toString(),firstName:a[h%a.length],lastName:o[h%o.length],age:20+h%50,visits:Math.floor(Math.random()*500)+1,status:l[h%l.length],progress:Math.floor(Math.random()*100)+1}})];if(s.length){const f=s[0],{id:c,desc:h}=f;d.sort((p,w)=>{const g=p[c],m=w[c];return h?g<m?1:-1:g>m?1:-1})}return{data:d.slice(e,e+t),meta:{totalRowCount:d.length}}},At=async(e,t=200)=>(await _t(t),e()),_t=e=>new Promise(t=>setTimeout(t,e)),Qt="_statusItem_cq8fb_1",Vt={statusItem:Qt},ze=({icon:e,label:t})=>i.jsxs("div",{className:Vt.statusItem,children:[i.jsx(be,{icon:e,size:"small"}),i.jsx("span",{children:t})]});ze.__docgenInfo={description:"",methods:[],displayName:"StatusItem",props:{icon:{required:!0,tsType:{name:"union",raw:"IconName | React.FunctionComponent<React.SVGProps<SVGSVGElement>>",elements:[{name:"unknown"},{name:"ReactFunctionComponent",raw:"React.FunctionComponent<React.SVGProps<SVGSVGElement>>",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}]}]},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};const Ue=({value:e})=>{const t=ve(u.bar,{[u["bar--high"]]:e>70,[u["bar--medium"]]:e>40&&e<=70,[u["bar--low"]]:e<=40});return i.jsx("div",{className:u.progressInfographic,children:i.jsxs("div",{className:t,style:{width:`${String(e)}%`},children:[e,"%"]})})},Re=[{accessorKey:"firstName",header:"First Name",cell:e=>e.getValue()},{accessorKey:"lastName",header:"Last Name",cell:e=>e.getValue()},{accessorKey:"age",header:"Age",cell:e=>e.getValue()},{accessorKey:"visits",header:"Visits",cell:e=>e.getValue()},{accessorKey:"status",header:"Status",cell:e=>e.getValue()},{accessorKey:"progress",header:"Profile Progress",cell:e=>`${String(e.getValue())}%`}],O=[{id:"1",firstName:"Tanner",lastName:"Linsley",age:33,visits:100,status:"single",progress:75},{id:"2",firstName:"Kevin",lastName:"Fine",age:28,visits:200,status:"relationship",progress:50},{id:"3",firstName:"John",lastName:"Doe",age:45,visits:50,status:"complicated",progress:90},{id:"4",firstName:"Jane",lastName:"Smith",age:30,visits:150,status:"single",progress:60},{id:"5",firstName:"Peter",lastName:"Jones",age:22,visits:250,status:"relationship",progress:30},{id:"6",firstName:"Mary",lastName:"Jane",age:38,visits:80,status:"complicated",progress:85},{id:"7",firstName:"David",lastName:"Williams",age:50,visits:120,status:"single",progress:40},{id:"8",firstName:"Sarah",lastName:"Brown",age:25,visits:180,status:"relationship",progress:70},{id:"9",firstName:"Michael",lastName:"Davis",age:41,visits:95,status:"complicated",progress:20},{id:"10",firstName:"Emily",lastName:"Miller",age:36,visits:110,status:"single",progress:55},{id:"11",firstName:"Daniel",lastName:"Wilson",age:29,visits:220,status:"relationship",progress:80},{id:"12",firstName:"Olivia",lastName:"Moore",age:48,visits:65,status:"complicated",progress:15},{id:"13",firstName:"James",lastName:"Taylor",age:31,visits:135,status:"single",progress:95},{id:"14",firstName:"Sophia",lastName:"Anderson",age:27,visits:170,status:"relationship",progress:25},{id:"15",firstName:"Robert",lastName:"Thomas",age:43,visits:88,status:"complicated",progress:50}],Ds={title:"Design System/Table",component:T,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{},args:{columns:Re,data:O,stickyHeader:!0,bordered:!0,fullWidth:!0,highlightOnHover:!0,expandable:!1,emptyState:i.jsxs("div",{className:u.emptyStateContainer,children:[i.jsx(be,{icon:"info",size:"large"}),i.jsx("p",{className:u.emptyStateContainer__text,children:"No matching records found."})]}),onRowClick:e=>console.log("Row clicked:",e)},decorators:[e=>i.jsxs("div",{className:u.storyPadding,children:[i.jsx("style",{children:`
            #storybook-root, html, body { height: 100%; }
          `}),i.jsx(e,{})]})]},z={args:{}},U={args:{}},B={args:{data:O.slice(0,5),expandable:e=>e.firstName!=="Tanner",renderExpandedRow:e=>i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:u.expandedRowDetails,children:[i.jsxs("h4",{children:["Expanded Details for ",e.firstName]}),i.jsxs("p",{children:["ID: ",e.id]}),i.jsxs("p",{children:["Full Name: ",e.firstName," ",e.lastName]}),i.jsxs("p",{children:["Status: ",e.status]})]}),i.jsx(T,{columns:[{accessorKey:"id",header:"ID"},{accessorKey:"firstName",header:"First Name"},{accessorKey:"lastName",header:"Last Name"}],data:O.slice(0,3)})]})}},H={args:{data:[]}},G={args:{virtualized:!0,data:[]}},W={args:{bordered:!1}},$={args:{selectable:!0,onSelectionChange:e=>console.log("Selected rows:",e)}},J={args:{selectable:!0,showSelectAllCheckbox:!1,stickyHeader:!0,onSelectionChange:e=>console.log("Selected rows:",e)},render:function(t){const s=y.useRef(null),[r,a]=y.useState([]),o=c=>{s.current?.selectRow(c)},l=()=>{s.current?.selectAllRows()},n=()=>{s.current?.deselectAllRows()},d=()=>{s.current?.selectRows(["1","2","3"])},f=c=>{const h=Object.keys(c);a(h)};return i.jsxs("div",{children:[i.jsxs("div",{className:u.programmaticSelectionDemo,children:[i.jsx("h4",{className:u.programmaticSelectionDemo__title,children:"Programmatic Row Selection Demo"}),i.jsx("p",{className:u.programmaticSelectionDemo__description,children:"Use the buttons below to programmatically control row selection using TanStack Table v8 APIs."}),i.jsxs("p",{className:u.programmaticSelectionDemo__selectedRows,children:["Selected rows: ",r.length>0?r.join(", "):"None"]})]}),i.jsxs("div",{className:u.programmaticSelectionControls,children:[i.jsx("button",{onClick:()=>o("1"),className:u.programmaticSelectionButton,children:"Select Row 1"}),i.jsx("button",{onClick:()=>o("2"),className:u.programmaticSelectionButton,children:"Select Row 2"}),i.jsx("button",{onClick:()=>o("3"),className:u.programmaticSelectionButton,children:"Select Row 3"}),i.jsx("button",{onClick:l,className:u.programmaticSelectionButton,children:"Select All"}),i.jsx("button",{onClick:n,className:u.programmaticSelectionButton,children:"Deselect All"}),i.jsx("button",{onClick:d,className:u.programmaticSelectionButton,children:"Select First 3 Rows"})]}),i.jsx(T,{...t,ref:s,onSelectionChange:f})]})}},Y={name:"Max N Selections",args:{showSelectAllCheckbox:!1,onSelectionChange:e=>console.log("Selected rows:",e)},render:function(t){const[s,r]=y.useState({}),a=2,o=Object.keys(s).filter(n=>s[n]).length,l=n=>{r(n),t.onSelectionChange?.(n)};return i.jsxs("div",{children:[i.jsxs("div",{className:u.programmaticSelectionDemo,children:[i.jsx("h4",{className:u.programmaticSelectionDemo__title,children:"Max Selection Limit Demo"}),i.jsxs("p",{className:u.programmaticSelectionDemo__description,children:["You can select at most ",a," rows. Once the limit is reached, checkboxes for other rows are disabled."]}),i.jsxs("p",{className:u.programmaticSelectionDemo__selectedRows,children:["Selected: ",o," / ",a]})]}),i.jsx(T,{...t,onSelectionChange:l,selectable:n=>s[n.id]||o<a})]})}},Z={args:{data:O.slice(0,5),reorderable:!0,onOrderChange:e=>console.log("Reordered row:",e)}},X={args:{onRowClick:e=>{console.log("Row clicked",e)},primaryRowActions:[{icon:"edit",label:"Edit",onClick:e=>{alert(`Row edit ${JSON.stringify(e)}`)}},{icon:"open_in_new",label:"Open in New Window",disabled:e=>e.firstName==="Tanner",onClick:e=>{console.log("Open in New Window",e),alert(`Open in New Window ${JSON.stringify(e)}`)}}],secondaryRowActions:[{icon:"delete_outline",label:"Delete",tooltip:"Delete this row",disabled:e=>e.status==="single",onClick:e=>{alert(`Delete action for ${e.firstName}`)}},{icon:"info",label:"Details",tooltip:"Show details",onClick:e=>{alert(`Details for ${e.firstName}`)}},{icon:"call",label:e=>`Call ${e.firstName}`,onClick:e=>{alert(`Calling ${e.firstName} ${e.lastName}`)}}]}},ee={args:{selectable:!0,actions:[{icon:"alarm",label:"Notify",onClick:e=>{console.log("Bulk actions",e)}},{icon:"folder_open",label:"Folder",onClick:e=>{console.log("Bulk actions",e)}},{icon:"delete_outline",label:"Delete",onClick:e=>{console.log("Bulk actions",e)}}]}},te={name:"Active Row with Drawer",args:{data:O.slice(0,10)},render:function(t){const[s,r]=y.useState(null),a=s?.id,o=!!a,l=n=>{const d=a===n.id;r(d?null:n)};return i.jsxs("div",{children:[i.jsxs("div",{className:u.programmaticSelectionDemo,children:[i.jsx("h4",{className:u.programmaticSelectionDemo__title,children:"Active Row with Drawer Demo"}),i.jsx("p",{className:u.programmaticSelectionDemo__description,children:"Click on any row to open a drawer with detailed information. The clicked row will remain highlighted to indicate which record the drawer is displaying."})]}),i.jsx(T,{...t,activeRowId:a,onRowClick:l,highlightOnHover:!0}),i.jsx(He,{open:o,onOpenChange:n=>{n||r(null)},columns:4,position:"end",children:s&&i.jsxs("div",{className:u.drawerContent,children:[i.jsxs("div",{className:u.drawerHeader,children:[i.jsx("h2",{className:u.drawerTitle,children:"Person Details"}),i.jsx("button",{onClick:()=>r(null),className:u.drawerCloseButton,"aria-label":"Close drawer",children:i.jsx(be,{icon:"close",size:"medium"})})]}),i.jsxs("div",{className:u.drawerDetails,children:[i.jsxs("div",{className:u.drawerDetailItem,children:[i.jsx("strong",{className:u.drawerDetailLabel,children:"Full Name"}),i.jsxs("p",{className:u.drawerDetailValue,children:[s.firstName," ",s.lastName]})]}),i.jsxs("div",{className:u.drawerDetailItem,children:[i.jsx("strong",{className:u.drawerDetailLabel,children:"Age"}),i.jsxs("p",{className:u.drawerDetailValue,children:[s.age," years old"]})]}),i.jsxs("div",{className:u.drawerDetailItem,children:[i.jsx("strong",{className:u.drawerDetailLabel,children:"Visits"}),i.jsxs("p",{className:u.drawerDetailValue,children:[s.visits," visits"]})]}),i.jsxs("div",{className:u.drawerDetailItem,children:[i.jsx("strong",{className:u.drawerDetailLabel,children:"Status"}),i.jsx("p",{className:ve(u.drawerDetailValue,u.drawerDetailValueCapitalized),children:s.status})]}),i.jsxs("div",{className:u.drawerDetailItem,children:[i.jsx("strong",{className:u.drawerDetailLabel,children:"Profile Progress"}),i.jsx("div",{className:u.drawerProgressContainer,children:i.jsx(Ue,{value:s.progress})})]}),i.jsx("div",{className:u.drawerNote,children:i.jsxs("p",{children:[i.jsx("strong",{children:"Note:"})," The row in the table remains highlighted while this drawer is open, helping you keep track of which record you're viewing."]})})]})]})})]})}},se={name:"Progress as Infographic",args:{columns:Re.map(e=>"accessorKey"in e&&e.accessorKey==="progress"?{...e,header:"Profile Progress",cell:t=>i.jsx(Ue,{value:t.getValue()})}:"accessorKey"in e&&e.accessorKey==="status"?{...e,header:"Status",cell:t=>i.jsx("span",{className:ve(u.statusCell,u[`statusCell--${t.getValue()}`]),children:t.getValue()})}:e),data:O}},re={name:"With External Global Search",render:function(t){const[s,r]=y.useState(""),a=y.useMemo(()=>{if(!s)return t.data;const o=s.toLowerCase();return t.data.filter(l=>Object.values(l).some(n=>String(n).toLowerCase().includes(o)))},[s,t.data]);return i.jsxs("div",{children:[i.jsx("div",{style:{marginBottom:"1rem"},children:i.jsx("input",{type:"text",value:s,onChange:o=>r(o.target.value),placeholder:"Search all columns...",style:{padding:"0.5rem",width:"300px"}})}),i.jsx(T,{...t,data:a})]})},args:{}},ae={name:"With Tab Filters",render:function(t){const[s,r]=y.useState([]),[a,o]=y.useState("all"),l=c=>{const h=c;o(h),r(h==="all"?[]:[{id:"status",value:h}])},n=c=>{switch(c){case"relationship":return"favorite";case"complicated":return"psychology";default:return"person"}},d={accessorKey:"status",header:"Status",cell:c=>{const h=c.getValue(),p=n(h);return i.jsx(ze,{icon:p,label:h})}},f=t.columns.map(c=>c.accessorKey==="status"?d:c);return i.jsxs("div",{className:u.tableFilterContainer,children:[i.jsxs(A,{activeTab:a,onTabClick:l,children:[i.jsx(A.Tab,{label:"All People",value:"all",icon:"groups",color:"dark-blue",content:O.length}),i.jsx(A.Tab,{label:"In a Relationship",value:"relationship",icon:"favorite",color:"green",content:O.filter(c=>c.status==="relationship").length}),i.jsx(A.Tab,{label:"It's Complicated",value:"complicated",icon:"psychology",color:"red",content:O.filter(c=>c.status==="complicated").length}),i.jsx(A.Tab,{label:"Single",value:"single",icon:"person",color:"gray",content:O.filter(c=>c.status==="single").length})]}),i.jsx(T,{...t,columns:f,columnFilters:s,onColumnFiltersChange:r})]})},args:{}},ie={render:function(t){const s=[{id:"age",label:"Age"},{id:"visits",label:"Visits"},{id:"status",label:"Status"},{id:"progress",label:"Profile Progress"}],[r,a]=y.useState({age:!0,visits:!0,status:!0,progress:!0}),o=l=>{a(n=>({...n,[l]:!n[l]}))};return i.jsxs("div",{children:[i.jsxs("div",{className:u.programmaticSelectionDemo,children:[i.jsx("h4",{className:u.programmaticSelectionDemo__title,children:"Column Hiding Demo"}),i.jsx("p",{className:u.programmaticSelectionDemo__description,children:"Use the checkboxes below to show or hide specific columns dynamically. This is useful for customizable table views or responsive layouts."})]}),i.jsx("div",{className:u.programmaticSelectionControls,children:s.map(l=>i.jsx(Be,{label:l.label,checked:r[l.id],onCheckedChange:()=>o(l.id)},l.id))}),i.jsx(T,{...t,columnVisibility:r,onColumnVisibilityChange:a})]})},args:{}},ne={name:"Virtualized Table (Large Dataset)",render:function(t){const s=async(g,m,v)=>At(()=>Et(g,m,v)),[a,o]=y.useState([]),{data:l,fetchNextPage:n,isFetching:d,isLoading:f}=Mt({queryKey:["people",a],queryFn:async({pageParam:g})=>{const m=g*50;return await s(m,50,a)},initialPageParam:0,getNextPageParam:(g,m)=>m.length,placeholderData:et},new wt({defaultOptions:{queries:{staleTime:300*1e3,gcTime:600*1e3,refetchOnWindowFocus:!1}}})),c=y.useMemo(()=>l?.pages.flatMap(g=>g.data)??[],[l]),h=l?.pages[0]?.meta.totalRowCount??0,p=c.length,w=async({scrollOffset:g,totalContentHeight:m,viewportHeight:v})=>{const S=p>=h,F=m-g-v<=500;!d&&!S&&F&&await n()};return i.jsxs("div",{className:u.virtualizedDemoContainer,children:[i.jsxs("div",{className:u.virtualizedDemoHeader,children:[i.jsx("h4",{className:u.virtualizedDemoHeader__title,children:"Virtualized Table Demo"}),i.jsx("p",{className:u.virtualizedDemoHeader__description,children:"This table uses infinite query to fetch data as you scroll, making it performant even with large datasets. Try scrolling to see the data loading!"}),i.jsxs("p",{className:u.virtualizedDemoHeader__stats,children:["(",c.length," of ",h," rows fetched)"]})]}),!1,i.jsxs("div",{className:u.virtualizedTableWrapper,children:[i.jsx(T,{...t,data:c,onSortingChange:o,onScroll:w,virtualized:!0}),f&&i.jsx("div",{className:u.loadingOverlay,children:i.jsxs("div",{className:u.loadingContent,children:[i.jsx(Ge,{size:"small"}),i.jsx("span",{className:u.loadingText,children:"Loading data..."})]})})]})]})},args:{selectable:!0,columns:Re.map(e=>"accessorKey"in e&&e.accessorKey==="age"?{...e,size:100}:e)}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    // Override default args here if needed
  }
}`,...z.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    // Sorting is enabled by default based on component code (getSortedRowModel)
    // No specific args needed unless you want to set initial sort state
  }
}`,...U.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    expandable: row => row.firstName !== 'Tanner',
    renderExpandedRow: row => <>
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
            </>
  }
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    data: [] // Provide empty data array
  }
}`,...H.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    virtualized: true,
    data: [] // Provide empty data array
  }
}`,...G.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false
  }
}`,...W.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    onSelectionChange: selectedRows => console.log('Selected rows:', selectedRows)
  }
}`,...$.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    showSelectAllCheckbox: false,
    stickyHeader: true,
    onSelectionChange: selectedRows => console.log('Selected rows:', selectedRows)
  },
  render: function Render(args) {
    const tableRef = useRef<DsTableApi<Person>>(null);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const selectRow = (rowId: string) => {
      tableRef.current?.selectRow(rowId);
    };
    const selectAllRows = () => {
      tableRef.current?.selectAllRows();
    };
    const deselectAllRows = () => {
      tableRef.current?.deselectAllRows();
    };
    const selectSpecificRows = () => {
      tableRef.current?.selectRows(['1', '2', '3']);
    };
    const handleSelectionChange = (selection: Record<string, boolean>) => {
      const selectedIds = Object.keys(selection);
      setSelectedRows(selectedIds);
    };
    return <div>
                <div className={styles.programmaticSelectionDemo}>
                    <h4 className={styles.programmaticSelectionDemo__title}>Programmatic Row Selection Demo</h4>
                    <p className={styles.programmaticSelectionDemo__description}>
                        Use the buttons below to programmatically control row selection using TanStack Table v8 APIs.
                    </p>
                    <p className={styles.programmaticSelectionDemo__selectedRows}>
                        Selected rows: {selectedRows.length > 0 ? selectedRows.join(', ') : 'None'}
                    </p>
                </div>

                <div className={styles.programmaticSelectionControls}>
                    <button onClick={() => selectRow('1')} className={styles.programmaticSelectionButton}>
                        Select Row 1
                    </button>
                    <button onClick={() => selectRow('2')} className={styles.programmaticSelectionButton}>
                        Select Row 2
                    </button>
                    <button onClick={() => selectRow('3')} className={styles.programmaticSelectionButton}>
                        Select Row 3
                    </button>
                    <button onClick={selectAllRows} className={styles.programmaticSelectionButton}>
                        Select All
                    </button>
                    <button onClick={deselectAllRows} className={styles.programmaticSelectionButton}>
                        Deselect All
                    </button>
                    <button onClick={selectSpecificRows} className={styles.programmaticSelectionButton}>
                        Select First 3 Rows
                    </button>
                </div>

                <DsTable {...args} ref={tableRef} onSelectionChange={handleSelectionChange} />
            </div>;
  }
}`,...J.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Max N Selections',
  args: {
    showSelectAllCheckbox: false,
    onSelectionChange: selectedRows => console.log('Selected rows:', selectedRows)
  },
  render: function Render(args) {
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
    const maxSelections = 2;
    const selectedCount = Object.keys(rowSelection).filter(id => rowSelection[id]).length;
    const handleSelectionChange = (selection: Record<string, boolean>) => {
      setRowSelection(selection);
      args.onSelectionChange?.(selection);
    };
    return <div>
                <div className={styles.programmaticSelectionDemo}>
                    <h4 className={styles.programmaticSelectionDemo__title}>Max Selection Limit Demo</h4>
                    <p className={styles.programmaticSelectionDemo__description}>
                        You can select at most {maxSelections} rows. Once the limit is reached, checkboxes for other rows
                        are disabled.
                    </p>
                    <p className={styles.programmaticSelectionDemo__selectedRows}>
                        Selected: {selectedCount} / {maxSelections}
                    </p>
                </div>

                <DsTable {...args} onSelectionChange={handleSelectionChange} selectable={rowData => {
        return rowSelection[rowData.id] || selectedCount < maxSelections;
      }} />
            </div>;
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    reorderable: true,
    onOrderChange: rows => console.log('Reordered row:', rows)
  }
}`,...Z.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    onRowClick: data => {
      console.log('Row clicked', data);
    },
    primaryRowActions: [{
      icon: 'edit',
      label: 'Edit',
      onClick: data => {
        alert(\`Row edit \${JSON.stringify(data)}\`);
      }
    }, {
      icon: 'open_in_new',
      label: 'Open in New Window',
      disabled: data => {
        return data.firstName === 'Tanner'; // Example condition to disable action
      },
      onClick: data => {
        console.log('Open in New Window', data);
        alert(\`Open in New Window \${JSON.stringify(data)}\`);
      }
    }],
    secondaryRowActions: [{
      icon: 'delete_outline',
      label: 'Delete',
      tooltip: 'Delete this row',
      disabled: data => data.status === 'single',
      onClick: data => {
        alert(\`Delete action for \${data.firstName}\`);
      }
    }, {
      icon: 'info',
      label: 'Details',
      tooltip: 'Show details',
      onClick: data => {
        alert(\`Details for \${data.firstName}\`);
      }
    }, {
      icon: 'call',
      label: row => \`Call \${row.firstName}\`,
      onClick: data => {
        alert(\`Calling \${data.firstName} \${data.lastName}\`);
      }
    }]
  }
}`,...X.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    actions: [{
      icon: 'alarm',
      label: 'Notify',
      onClick: args => {
        console.log('Bulk actions', args);
      }
    }, {
      icon: 'folder_open',
      label: 'Folder',
      onClick: args => {
        console.log('Bulk actions', args);
      }
    }, {
      icon: 'delete_outline',
      label: 'Delete',
      onClick: args => {
        console.log('Bulk actions', args);
      }
    }]
  }
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  name: 'Active Row with Drawer',
  args: {
    data: defaultData.slice(0, 10)
  },
  render: function Render(args) {
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
    const activeRowId = selectedPerson?.id;
    const isDrawerOpen = !!activeRowId;
    const handleRowClick = (person: Person) => {
      const isSameRow = activeRowId === person.id;
      setSelectedPerson(isSameRow ? null : person);
    };
    return <div>
                <div className={styles.programmaticSelectionDemo}>
                    <h4 className={styles.programmaticSelectionDemo__title}>Active Row with Drawer Demo</h4>
                    <p className={styles.programmaticSelectionDemo__description}>
                        Click on any row to open a drawer with detailed information. The clicked row will remain
                        highlighted to indicate which record the drawer is displaying.
                    </p>
                </div>

                <DsTable {...args} activeRowId={activeRowId} onRowClick={handleRowClick} highlightOnHover />

                <DsDrawer open={isDrawerOpen} onOpenChange={open => {
        if (!open) {
          setSelectedPerson(null);
        }
      }} columns={4} position="end">
                    {selectedPerson && <div className={styles.drawerContent}>
                            <div className={styles.drawerHeader}>
                                <h2 className={styles.drawerTitle}>Person Details</h2>
                                <button onClick={() => setSelectedPerson(null)} className={styles.drawerCloseButton} aria-label="Close drawer">
                                    <DsIcon icon="close" size="medium" />
                                </button>
                            </div>

                            <div className={styles.drawerDetails}>
                                <div className={styles.drawerDetailItem}>
                                    <strong className={styles.drawerDetailLabel}>Full Name</strong>
                                    <p className={styles.drawerDetailValue}>
                                        {selectedPerson.firstName} {selectedPerson.lastName}
                                    </p>
                                </div>

                                <div className={styles.drawerDetailItem}>
                                    <strong className={styles.drawerDetailLabel}>Age</strong>
                                    <p className={styles.drawerDetailValue}>{selectedPerson.age} years old</p>
                                </div>

                                <div className={styles.drawerDetailItem}>
                                    <strong className={styles.drawerDetailLabel}>Visits</strong>
                                    <p className={styles.drawerDetailValue}>{selectedPerson.visits} visits</p>
                                </div>

                                <div className={styles.drawerDetailItem}>
                                    <strong className={styles.drawerDetailLabel}>Status</strong>
                                    <p className={classnames(styles.drawerDetailValue, styles.drawerDetailValueCapitalized)}>
                                        {selectedPerson.status}
                                    </p>
                                </div>

                                <div className={styles.drawerDetailItem}>
                                    <strong className={styles.drawerDetailLabel}>Profile Progress</strong>
                                    <div className={styles.drawerProgressContainer}>
                                        <ProgressInfographic value={selectedPerson.progress} />
                                    </div>
                                </div>

                                <div className={styles.drawerNote}>
                                    <p>
                                        <strong>Note:</strong> The row in the table remains highlighted while this drawer is open,
                                        helping you keep track of which record you&#39;re viewing.
                                    </p>
                                </div>
                            </div>
                        </div>}
                </DsDrawer>
            </div>;
  }
}`,...te.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  name: 'Progress as Infographic',
  args: {
    columns: columns.map(col => {
      if ('accessorKey' in col && col.accessorKey === 'progress') {
        return {
          ...col,
          header: 'Profile Progress',
          cell: info => <ProgressInfographic value={info.getValue() as number} />
        } as ColumnDef<Person>;
      } else if ('accessorKey' in col && col.accessorKey === 'status') {
        return {
          ...col,
          header: 'Status',
          cell: info => <span className={classnames(styles.statusCell, styles[\`statusCell--\${info.getValue() as Status}\`])}>
                            {info.getValue() as string}
                        </span>
        } as ColumnDef<Person>;
      }
      return col;
    }),
    data: defaultData
  }
}`,...se.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  name: 'With External Global Search',
  render: function Render(args) {
    const [globalFilter, setGlobalFilter] = useState('');
    const filteredData = useMemo(() => {
      if (!globalFilter) {
        return args.data;
      }
      const lowercasedFilter = globalFilter.toLowerCase();
      return args.data.filter(row => {
        return Object.values(row).some(value => String(value).toLowerCase().includes(lowercasedFilter));
      });
    }, [globalFilter, args.data]);
    return <div>
                <div style={{
        marginBottom: '1rem'
      }}>
                    <input type="text" value={globalFilter} onChange={e => setGlobalFilter(e.target.value)} placeholder="Search all columns..." style={{
          padding: '0.5rem',
          width: '300px'
        }} />
                </div>
                <DsTable {...args} data={filteredData} />
            </div>;
  },
  args: {}
}`,...re.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  name: 'With Tab Filters',
  render: function Render(args) {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [activeTab, setActiveTab] = useState<Status | 'all'>('all');
    const handleTabClick = (tabValue: string) => {
      const typedValue = tabValue as Status | 'all';
      setActiveTab(typedValue);
      if (typedValue === 'all') {
        setColumnFilters([]);
      } else {
        setColumnFilters([{
          id: 'status',
          value: typedValue
        }]);
      }
    };
    const getStatusIcon = (status: Status): IconType => {
      switch (status) {
        case 'relationship':
          return 'favorite';
        case 'complicated':
          return 'psychology';
        default:
          return 'person';
      }
    };
    const statusColumnDef: ColumnDef<Person> = {
      accessorKey: 'status',
      header: 'Status',
      cell: info => {
        const status = info.getValue() as Status;
        const icon = getStatusIcon(status);
        return <StatusItem icon={icon} label={status} />;
      }
    };
    const tableColumns = args.columns.map(col => (col as {
      accessorKey: string;
    }).accessorKey === 'status' ? statusColumnDef : col);
    return <div className={styles.tableFilterContainer}>
                <DsSmartTabs activeTab={activeTab} onTabClick={handleTabClick}>
                    <DsSmartTabs.Tab label="All People" value="all" icon="groups" color="dark-blue" content={defaultData.length} />
                    <DsSmartTabs.Tab label="In a Relationship" value={'relationship'} icon="favorite" color="green" content={defaultData.filter(row => row.status === 'relationship').length} />
                    <DsSmartTabs.Tab label="It's Complicated" value={'complicated'} icon="psychology" color="red" content={defaultData.filter(row => row.status === 'complicated').length} />
                    <DsSmartTabs.Tab label="Single" value={'single'} icon="person" color="gray" content={defaultData.filter(row => row.status === 'single').length} />
                </DsSmartTabs>
                <DsTable {...args} columns={tableColumns} columnFilters={columnFilters} onColumnFiltersChange={setColumnFilters} />
            </div>;
  },
  args: {}
}`,...ae.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const columnsToToggle = [{
      id: 'age',
      label: 'Age'
    }, {
      id: 'visits',
      label: 'Visits'
    }, {
      id: 'status',
      label: 'Status'
    }, {
      id: 'progress',
      label: 'Profile Progress'
    }];
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
      age: true,
      visits: true,
      status: true,
      progress: true
    });
    const toggleColumn = (columnId: string) => {
      setColumnVisibility(prev => ({
        ...prev,
        [columnId]: !prev[columnId]
      }));
    };
    return <div>
                <div className={styles.programmaticSelectionDemo}>
                    <h4 className={styles.programmaticSelectionDemo__title}>Column Hiding Demo</h4>
                    <p className={styles.programmaticSelectionDemo__description}>
                        Use the checkboxes below to show or hide specific columns dynamically. This is useful for
                        customizable table views or responsive layouts.
                    </p>
                </div>

                <div className={styles.programmaticSelectionControls}>
                    {columnsToToggle.map(column => <DsCheckbox key={column.id} label={column.label} checked={columnVisibility[column.id]} onCheckedChange={() => toggleColumn(column.id)} />)}
                </div>

                <DsTable {...args} columnVisibility={columnVisibility} onColumnVisibilityChange={setColumnVisibility} />
            </div>;
  },
  args: {}
}`,...ie.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  name: 'Virtualized Table (Large Dataset)',
  render: function Render(args) {
    // Simulate API call using the utility function
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
      queryKey: ['people', sorting // refetch when sorting changes
      ],
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
          // 5 minutes
          gcTime: 10 * 60 * 1000,
          // 10 minutes
          refetchOnWindowFocus: false
        }
      }
    }));
    const flatData = useMemo(() => infiniteQueryData?.pages.flatMap(page => page.data) ?? [], [infiniteQueryData]);
    const totalRows = infiniteQueryData?.pages[0]?.meta.totalRowCount ?? 0;
    const totalFetched = flatData.length;
    const fetchMoreOnBottomReached = async ({
      scrollOffset,
      totalContentHeight,
      viewportHeight
    }: ScrollParams) => {
      const finishedFetching = totalFetched >= totalRows;
      const scrollThreshold = 500;
      const distanceFromBottom = totalContentHeight - scrollOffset - viewportHeight;
      const shouldFetchMore = distanceFromBottom <= scrollThreshold;
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
    })
  }
}`,...ne.parameters?.docs?.source}}};const Rs=["Default","Sortable","Expandable","EmptyState","EmptyStateVirtualized","NoBorder","Selectable","ProgrammaticRowSelection","MaxSelectionLimit","Reorderable","WithRowActions","WithBulkActions","WithDrawerAndActiveRow","WithProgressInfographic","AdvancedSearch","TabFilters","ColumnHiding","Virtualized"];export{re as AdvancedSearch,ie as ColumnHiding,z as Default,H as EmptyState,G as EmptyStateVirtualized,B as Expandable,Y as MaxSelectionLimit,W as NoBorder,J as ProgrammaticRowSelection,Z as Reorderable,$ as Selectable,U as Sortable,ae as TabFilters,ne as Virtualized,ee as WithBulkActions,te as WithDrawerAndActiveRow,se as WithProgressInfographic,X as WithRowActions,Rs as __namedExportsOrder,Ds as default};
