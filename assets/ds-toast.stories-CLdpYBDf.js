import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-DgcHsVlP.js";import{D as rt}from"./ds-icon-B3lZEtKg.js";import{D as ct}from"./ds-typography-By_uor2z.js";import{k as Nt,M as jt,C as _t,J as xt,H as Wt,l as R,m as Lt,Q as Vt,o as Ht,r as Gt,D as qt,R as V,v as wt,y as Dt}from"./create-anatomy-Z-S6lVO3.js";import{A as Ut,r as lt}from"./raf-CC9hSMXO.js";import{b as $t}from"./dismissable-layer-TfhJM1ba.js";import{e as dt}from"./event-CBXSxTbR.js";import{c as Kt,m as N,a as tt,b as Yt,u as bt}from"./use-locale-context-DuuBKTIn.js";import{D as B}from"./ds-button-DM7MP3KQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BR8FvmX8.js";import"./index-Dv_rP5y3.js";import"./index-BOsPfo-f.js";import"./index-t-Kfj9fc.js";import"./index-Bl6FkOfk.js";import"./set-DPCYxM8_.js";import"./ds-button-legacy-CQi4N2_R.js";import"./ds-button-new-B983F6cH.js";var Qt=Object.defineProperty,It=t=>{throw TypeError(t)},Xt=(t,e,o)=>e in t?Qt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,P=(t,e,o)=>Xt(t,typeof e!="symbol"?e+"":e,o),zt=(t,e,o)=>e.has(t)||It("Cannot "+o),ut=(t,e,o)=>(zt(t,e,"read from private field"),e.get(t)),Jt=(t,e,o)=>e.has(t)?It("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),H=()=>performance.now(),J,Zt=class{constructor(t){this.onTick=t,P(this,"frameId",null),P(this,"pausedAtMs",null),P(this,"context"),P(this,"cancelFrame",()=>{this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}),P(this,"setStartMs",e=>{this.context.startMs=e}),P(this,"start",()=>{if(this.frameId!==null)return;const e=H();this.pausedAtMs!==null?(this.context.startMs+=e-this.pausedAtMs,this.pausedAtMs=null):this.context.startMs=e,this.frameId=requestAnimationFrame(ut(this,J))}),P(this,"pause",()=>{this.frameId!==null&&(this.cancelFrame(),this.pausedAtMs=H())}),P(this,"stop",()=>{this.frameId!==null&&(this.cancelFrame(),this.pausedAtMs=null)}),Jt(this,J,e=>{if(this.context.now=e,this.context.deltaMs=e-this.context.startMs,this.onTick(this.context)===!1){this.stop();return}this.frameId=requestAnimationFrame(ut(this,J))}),this.context={now:0,startMs:H(),deltaMs:0}}get elapsedMs(){return this.pausedAtMs!==null?this.pausedAtMs-this.context.startMs:H()-this.context.startMs}};J=new WeakMap;function ot(t,e){const o=new Zt(({deltaMs:s})=>{if(s>=e)return t(),!1});return o.start(),()=>o.stop()}var te=Nt("toast").parts("group","root","title","description","actionTrigger","closeTrigger"),k=te.build(),ee=t=>`toast-group:${t}`,pt=(t,e)=>t.getById(`toast-group:${e}`),Et=t=>`toast:${t.id}`,mt=t=>t.getById(Et(t)),gt=t=>`toast:${t.id}:title`,ht=t=>`toast:${t.id}:description`,se=t=>`toast${t.id}:close`,Tt={info:5e3,error:5e3,success:2e3,loading:1/0,DEFAULT:5e3};function nt(t,e){return t??Tt[e]??Tt.DEFAULT}var oe=t=>typeof t=="string"?{left:t,right:t,bottom:t,top:t}:t;function ne(t,e){const{prop:o,computed:s,context:n}=t,{offsets:r,gap:l}=o("store").attrs,u=n.get("heights"),d=oe(r),T=o("dir")==="rtl",p=e.replace("-start",T?"-right":"-left").replace("-end",T?"-left":"-right"),m=p.includes("right"),x=p.includes("left"),f={position:"fixed",pointerEvents:s("count")>0?void 0:"none",display:"flex",flexDirection:"column","--gap":`${l}px`,"--first-height":`${u[0]?.height||0}px`,"--viewport-offset-left":d.left,"--viewport-offset-right":d.right,"--viewport-offset-top":d.top,"--viewport-offset-bottom":d.bottom,zIndex:jt};let y="center";if(m&&(y="flex-end"),x&&(y="flex-start"),f.alignItems=y,p.includes("top")){const v=d.top;f.top=`max(env(safe-area-inset-top, 0px), ${v})`}if(p.includes("bottom")){const v=d.bottom;f.bottom=`max(env(safe-area-inset-bottom, 0px), ${v})`}if(!p.includes("left")){const v=d.right;f.insetInlineEnd=`calc(env(safe-area-inset-right, 0px) + ${v})`}if(!p.includes("right")){const v=d.left;f.insetInlineStart=`calc(env(safe-area-inset-left, 0px) + ${v})`}return f}function ae(t,e){const{prop:o,context:s,computed:n}=t,r=o("parent"),l=r.computed("placement"),{gap:u}=r.prop("store").attrs,[d]=l.split("-"),T=s.get("mounted"),p=s.get("remainingTime"),m=n("height"),x=n("frontmost"),f=!x,y=!o("stacked"),v=o("stacked"),_=o("type")==="loading"?Number.MAX_SAFE_INTEGER:p,W=n("heightIndex")*u+n("heightBefore"),F={position:"absolute",pointerEvents:"auto","--opacity":"0","--remove-delay":`${o("removeDelay")}ms`,"--duration":`${_}ms`,"--initial-height":`${m}px`,"--offset":`${W}px`,"--index":o("index"),"--z-index":n("zIndex"),"--lift-amount":"calc(var(--lift) * var(--gap))","--y":"100%","--x":"0"},g=it=>Object.assign(F,it);return d==="top"?g({top:"0","--sign":"-1","--y":"-100%","--lift":"1"}):d==="bottom"&&g({bottom:"0","--sign":"1","--y":"100%","--lift":"-1"}),T&&(g({"--y":"0","--opacity":"1"}),v&&g({"--y":"calc(var(--lift) * var(--offset))","--height":"var(--initial-height)"})),e||g({"--opacity":"0",pointerEvents:"none"}),f&&y&&(g({"--base-scale":"var(--index) * 0.05 + 1","--y":"calc(var(--lift-amount) * var(--index))","--scale":"calc(-1 * var(--base-scale))","--height":"var(--first-height)"}),e||g({"--y":"calc(var(--sign) * 40%)"})),f&&v&&!e&&g({"--y":"calc(var(--lift) * var(--offset) + var(--lift) * -100%)"}),x&&!e&&g({"--y":"calc(var(--lift) * -100%)"}),F}function ie(t,e){const{computed:o}=t,s={position:"absolute",inset:"0",scale:"1 2",pointerEvents:e?"none":"auto"},n=r=>Object.assign(s,r);return o("frontmost")&&!e&&n({height:"calc(var(--initial-height) + 80%)"}),s}function re(){return{position:"absolute",left:"0",height:"calc(var(--gap) + 2px)",bottom:"100%",width:"100%"}}function ce(t,e){const{context:o,prop:s,send:n,refs:r,computed:l}=t;return{getCount(){return o.get("toasts").length},getToasts(){return o.get("toasts")},getGroupProps(u={}){const{label:d="Notifications"}=u,{hotkey:T}=s("store").attrs,p=T.join("+").replace(/Key/g,"").replace(/Digit/g,""),m=l("placement"),[x,f="center"]=m.split("-");return e.element({...k.group.attrs,dir:s("dir"),tabIndex:-1,"aria-label":`${m} ${d} ${p}`,id:ee(m),"data-placement":m,"data-side":x,"data-align":f,"aria-live":"polite",role:"region",style:ne(t,m),onMouseEnter(){r.get("ignoreMouseTimer").isActive()||n({type:"REGION.POINTER_ENTER",placement:m})},onMouseMove(){r.get("ignoreMouseTimer").isActive()||n({type:"REGION.POINTER_ENTER",placement:m})},onMouseLeave(){r.get("ignoreMouseTimer").isActive()||n({type:"REGION.POINTER_LEAVE",placement:m})},onFocus(y){n({type:"REGION.FOCUS",target:y.relatedTarget})},onBlur(y){r.get("isFocusWithin")&&!_t(y.currentTarget,y.relatedTarget)&&queueMicrotask(()=>n({type:"REGION.BLUR"}))}})},subscribe(u){return s("store").subscribe(()=>u(o.get("toasts")))}}}var{guards:le,createMachine:de}=Wt(),{and:ue}=le,pe=de({props({props:t}){return{dir:"ltr",id:xt(),...t,store:t.store}},initialState({prop:t}){return t("store").attrs.overlap?"overlap":"stack"},refs(){return{lastFocusedEl:null,isFocusWithin:!1,isPointerWithin:!1,ignoreMouseTimer:Ut.create(),dismissableCleanup:void 0}},context({bindable:t}){return{toasts:t(()=>({defaultValue:[],sync:!0,hash:e=>e.map(o=>o.id).join(",")})),heights:t(()=>({defaultValue:[],sync:!0}))}},computed:{count:({context:t})=>t.get("toasts").length,overlap:({prop:t})=>t("store").attrs.overlap,placement:({prop:t})=>t("store").attrs.placement},effects:["subscribeToStore","trackDocumentVisibility","trackHotKeyPress"],watch({track:t,context:e,action:o}){t([()=>e.hash("toasts")],()=>{queueMicrotask(()=>{o(["collapsedIfEmpty","setDismissableBranch"])})})},exit:["clearDismissableBranch","clearLastFocusedEl","clearMouseEventTimer"],on:{"DOC.HOTKEY":{actions:["focusRegionEl"]},"REGION.BLUR":[{guard:ue("isOverlapping","isPointerOut"),target:"overlap",actions:["collapseToasts","resumeToasts","restoreFocusIfPointerOut"]},{guard:"isPointerOut",target:"stack",actions:["resumeToasts","restoreFocusIfPointerOut"]},{actions:["clearFocusWithin"]}],"TOAST.REMOVE":{actions:["removeToast","removeHeight","ignoreMouseEventsTemporarily"]},"TOAST.PAUSE":{actions:["pauseToasts"]}},states:{stack:{on:{"REGION.POINTER_LEAVE":[{guard:"isOverlapping",target:"overlap",actions:["clearPointerWithin","resumeToasts","collapseToasts"]},{actions:["clearPointerWithin","resumeToasts"]}],"REGION.OVERLAP":{target:"overlap",actions:["collapseToasts"]},"REGION.FOCUS":{actions:["setLastFocusedEl","pauseToasts"]},"REGION.POINTER_ENTER":{actions:["setPointerWithin","pauseToasts"]}}},overlap:{on:{"REGION.STACK":{target:"stack",actions:["expandToasts"]},"REGION.POINTER_ENTER":{target:"stack",actions:["setPointerWithin","pauseToasts","expandToasts"]},"REGION.FOCUS":{target:"stack",actions:["setLastFocusedEl","pauseToasts","expandToasts"]}}}},implementations:{guards:{isOverlapping:({computed:t})=>t("overlap"),isPointerOut:({refs:t})=>!t.get("isPointerWithin")},effects:{subscribeToStore({context:t,prop:e}){const o=e("store");return t.set("toasts",o.getVisibleToasts()),o.subscribe(s=>{if(s.dismiss){t.set("toasts",n=>n.filter(r=>r.id!==s.id));return}t.set("toasts",n=>{const r=n.findIndex(l=>l.id===s.id);return r!==-1?[...n.slice(0,r),{...n[r],...s},...n.slice(r+1)]:[s,...n]})})},trackHotKeyPress({prop:t,send:e}){return dt(document,"keydown",s=>{const{hotkey:n}=t("store").attrs;n.every(l=>s[l]||s.code===l)&&e({type:"DOC.HOTKEY"})},{capture:!0})},trackDocumentVisibility({prop:t,send:e,scope:o}){const{pauseOnPageIdle:s}=t("store").attrs;if(!s)return;const n=o.getDoc();return dt(n,"visibilitychange",()=>{const r=n.visibilityState==="hidden";e({type:r?"PAUSE_ALL":"RESUME_ALL"})})}},actions:{setDismissableBranch({refs:t,context:e,computed:o,scope:s}){const n=e.get("toasts"),r=o("placement"),l=n.length>0;if(!l){t.get("dismissableCleanup")?.();return}if(l&&t.get("dismissableCleanup"))return;const d=$t(()=>pt(s,r),{defer:!0});t.set("dismissableCleanup",d)},clearDismissableBranch({refs:t}){t.get("dismissableCleanup")?.()},focusRegionEl({scope:t,computed:e}){queueMicrotask(()=>{pt(t,e("placement"))?.focus()})},pauseToasts({prop:t}){t("store").pause()},resumeToasts({prop:t}){t("store").resume()},expandToasts({prop:t}){t("store").expand()},collapseToasts({prop:t}){t("store").collapse()},removeToast({prop:t,event:e}){t("store").remove(e.id)},removeHeight({event:t,context:e}){t?.id!=null&&queueMicrotask(()=>{e.set("heights",o=>o.filter(s=>s.id!==t.id))})},collapsedIfEmpty({send:t,computed:e}){!e("overlap")||e("count")>1||t({type:"REGION.OVERLAP"})},setLastFocusedEl({refs:t,event:e}){t.get("isFocusWithin")||!e.target||(t.set("isFocusWithin",!0),t.set("lastFocusedEl",e.target))},restoreFocusIfPointerOut({refs:t}){!t.get("lastFocusedEl")||t.get("isPointerWithin")||(t.get("lastFocusedEl")?.focus({preventScroll:!0}),t.set("lastFocusedEl",null),t.set("isFocusWithin",!1))},setPointerWithin({refs:t}){t.set("isPointerWithin",!0)},clearPointerWithin({refs:t}){t.set("isPointerWithin",!1),t.get("lastFocusedEl")&&!t.get("isFocusWithin")&&(t.get("lastFocusedEl")?.focus({preventScroll:!0}),t.set("lastFocusedEl",null))},clearFocusWithin({refs:t}){t.set("isFocusWithin",!1)},clearLastFocusedEl({refs:t}){t.get("lastFocusedEl")&&(t.get("lastFocusedEl")?.focus({preventScroll:!0}),t.set("lastFocusedEl",null),t.set("isFocusWithin",!1))},ignoreMouseEventsTemporarily({refs:t}){t.get("ignoreMouseTimer").request()},clearMouseEventTimer({refs:t}){t.get("ignoreMouseTimer").cancel()}}}});function me(t,e){const{state:o,send:s,prop:n,scope:r,context:l,computed:u}=t,d=o.hasTag("visible"),T=o.hasTag("paused"),p=l.get("mounted"),m=u("frontmost"),x=n("parent").computed("placement"),f=n("type"),y=n("stacked"),v=n("title"),j=n("description"),_=n("action"),[W,F="center"]=x.split("-");return{type:f,title:v,description:j,placement:x,visible:d,paused:T,closable:!!n("closable"),pause(){s({type:"PAUSE"})},resume(){s({type:"RESUME"})},dismiss(){s({type:"DISMISS",src:"programmatic"})},getRootProps(){return e.element({...k.root.attrs,dir:n("dir"),id:Et(r),"data-state":d?"open":"closed","data-type":f,"data-placement":x,"data-align":F,"data-side":W,"data-mounted":R(p),"data-paused":R(T),"data-first":R(m),"data-sibling":R(!m),"data-stack":R(y),"data-overlap":R(!y),role:"status","aria-atomic":"true","aria-describedby":j?ht(r):void 0,"aria-labelledby":v?gt(r):void 0,tabIndex:0,style:ae(t,d),onKeyDown(g){g.defaultPrevented||g.key=="Escape"&&(s({type:"DISMISS",src:"keyboard"}),g.preventDefault())}})},getGhostBeforeProps(){return e.element({"data-ghost":"before",style:ie(t,d)})},getGhostAfterProps(){return e.element({"data-ghost":"after",style:re()})},getTitleProps(){return e.element({...k.title.attrs,id:gt(r)})},getDescriptionProps(){return e.element({...k.description.attrs,id:ht(r)})},getActionTriggerProps(){return e.button({...k.actionTrigger.attrs,type:"button",onClick(g){g.defaultPrevented||(_?.onClick?.(),s({type:"DISMISS",src:"user"}))}})},getCloseTriggerProps(){return e.button({id:se(r),...k.closeTrigger.attrs,type:"button","aria-label":"Dismiss notification",onClick(g){g.defaultPrevented||s({type:"DISMISS",src:"user"})}})}}}var{not:ge}=Ht(),he=Lt({props({props:t}){return Vt(t,["id","type","parent","removeDelay"],"toast"),{closable:!0,...t,duration:nt(t.duration,t.type)}},initialState({prop:t}){return t("type")==="loading"||t("duration")===1/0?"visible:persist":"visible"},context({prop:t,bindable:e}){return{remainingTime:e(()=>({defaultValue:nt(t("duration"),t("type"))})),createdAt:e(()=>({defaultValue:Date.now()})),mounted:e(()=>({defaultValue:!1})),initialHeight:e(()=>({defaultValue:0}))}},refs(){return{closeTimerStartTime:Date.now(),lastCloseStartTimerStartTime:0}},computed:{zIndex:({prop:t})=>{const e=t("parent").context.get("toasts"),o=e.findIndex(s=>s.id===t("id"));return e.length-o},height:({prop:t})=>t("parent").context.get("heights").find(s=>s.id===t("id"))?.height??0,heightIndex:({prop:t})=>t("parent").context.get("heights").findIndex(o=>o.id===t("id")),frontmost:({prop:t})=>t("index")===0,heightBefore:({prop:t})=>{const e=t("parent").context.get("heights"),o=e.findIndex(s=>s.id===t("id"));return e.reduce((s,n,r)=>r>=o?s:s+n.height,0)},shouldPersist:({prop:t})=>t("type")==="loading"||t("duration")===1/0},watch({track:t,prop:e,send:o}){t([()=>e("message")],()=>{const s=e("message");s&&o({type:s,src:"programmatic"})}),t([()=>e("type"),()=>e("duration")],()=>{o({type:"UPDATE"})})},on:{UPDATE:[{guard:"shouldPersist",target:"visible:persist",actions:["resetCloseTimer"]},{target:"visible:updating",actions:["resetCloseTimer"]}],MEASURE:{actions:["measureHeight"]}},entry:["setMounted","measureHeight","invokeOnVisible"],effects:["trackHeight"],states:{"visible:updating":{tags:["visible","updating"],effects:["waitForNextTick"],on:{SHOW:{target:"visible"}}},"visible:persist":{tags:["visible","paused"],on:{RESUME:{guard:ge("isLoadingType"),target:"visible",actions:["setCloseTimer"]},DISMISS:{target:"dismissing"}}},visible:{tags:["visible"],effects:["waitForDuration"],on:{DISMISS:{target:"dismissing"},PAUSE:{target:"visible:persist",actions:["syncRemainingTime"]}}},dismissing:{entry:["invokeOnDismiss"],effects:["waitForRemoveDelay"],on:{REMOVE:{target:"unmounted",actions:["notifyParentToRemove"]}}},unmounted:{entry:["invokeOnUnmount"]}},implementations:{effects:{waitForRemoveDelay({prop:t,send:e}){return ot(()=>{e({type:"REMOVE",src:"timer"})},t("removeDelay"))},waitForDuration({send:t,context:e,computed:o}){if(!o("shouldPersist"))return ot(()=>{t({type:"DISMISS",src:"timer"})},e.get("remainingTime"))},waitForNextTick({send:t}){return ot(()=>{t({type:"SHOW",src:"timer"})},0)},trackHeight({scope:t,prop:e}){let o;return lt(()=>{const s=mt(t);if(!s)return;const n=()=>{const u=s.style.height;s.style.height="auto";const d=s.getBoundingClientRect().height;s.style.height=u;const T={id:e("id"),height:d};ft(e("parent"),T)},r=t.getWin(),l=new r.MutationObserver(n);l.observe(s,{childList:!0,subtree:!0,characterData:!0}),o=()=>l.disconnect()}),()=>o?.()}},guards:{isLoadingType:({prop:t})=>t("type")==="loading",shouldPersist:({computed:t})=>t("shouldPersist")},actions:{setMounted({context:t}){lt(()=>{t.set("mounted",!0)})},measureHeight({scope:t,prop:e,context:o}){queueMicrotask(()=>{const s=mt(t);if(!s)return;const n=s.style.height;s.style.height="auto";const r=s.getBoundingClientRect().height;s.style.height=n,o.set("initialHeight",r);const l={id:e("id"),height:r};ft(e("parent"),l)})},setCloseTimer({refs:t}){t.set("closeTimerStartTime",Date.now())},resetCloseTimer({context:t,refs:e,prop:o}){e.set("closeTimerStartTime",Date.now()),t.set("remainingTime",nt(o("duration"),o("type")))},syncRemainingTime({context:t,refs:e}){t.set("remainingTime",o=>{const s=e.get("closeTimerStartTime"),n=Date.now()-s;return e.set("lastCloseStartTimerStartTime",Date.now()),o-n})},notifyParentToRemove({prop:t}){t("parent").send({type:"TOAST.REMOVE",id:t("id")})},invokeOnDismiss({prop:t,event:e}){t("onStatusChange")?.({status:"dismissing",src:e.src})},invokeOnUnmount({prop:t}){t("onStatusChange")?.({status:"unmounted"})},invokeOnVisible({prop:t}){t("onStatusChange")?.({status:"visible"})}}}});function ft(t,e){const{id:o,height:s}=e;t.context.set("heights",n=>n.find(l=>l.id===o)?n.map(l=>l.id===o?{...l,height:s}:l):[{id:o,height:s},...n])}var Te=(t,e)=>({...e,...Gt(t)});function fe(t={}){const e=Te(t,{placement:"bottom",overlap:!1,max:24,gap:16,offsets:"1rem",hotkey:["altKey","KeyT"],removeDelay:200,pauseOnPageIdle:!0});let o=[],s=[],n=new Set,r=[];const l=i=>(o.push(i),()=>{const c=o.indexOf(i);o.splice(c,1)}),u=i=>(o.forEach(c=>c(i)),i),d=i=>{if(s.length>=e.max){r.push(i);return}u(i),s.unshift(i)},T=()=>{for(;r.length>0&&s.length<e.max;){const i=r.shift();i&&(u(i),s.unshift(i))}},p=i=>{const c=i.id??`toast:${xt()}`,E=s.find(w=>w.id===c);return n.has(c)&&n.delete(c),E?s=s.map(w=>w.id===c?u({...w,...i,id:c}):w):d({id:c,duration:e.duration,removeDelay:e.removeDelay,type:"info",...i,stacked:!e.overlap,gap:e.gap}),c},m=i=>(n.add(i),i?(o.forEach(c=>c({id:i,dismiss:!0})),s=s.filter(c=>c.id!==i),T()):(s.forEach(c=>{o.forEach(E=>E({id:c.id,dismiss:!0}))}),s=[],r=[]),i);return{attrs:e,subscribe:l,create:p,update:(i,c)=>p({id:i,...c}),remove:m,dismiss:i=>{i!=null?s=s.map(c=>c.id===i?u({...c,message:"DISMISS"}):c):s=s.map(c=>u({...c,message:"DISMISS"}))},error:i=>p({...i,type:"error"}),success:i=>p({...i,type:"success"}),info:i=>p({...i,type:"info"}),warning:i=>p({...i,type:"warning"}),loading:i=>p({...i,type:"loading"}),getVisibleToasts:()=>s.filter(i=>!n.has(i.id)),getCount:()=>s.length,promise:(i,c,E={})=>{if(!c||!c.loading){qt("[zag-js > toast] toaster.promise() requires at least a 'loading' option to be specified");return}const w=p({...E,...c.loading,promise:i,type:"loading"});let L=!0,O;const Ot=V(i).then(async D=>{if(O=["resolve",D],ye(D)&&!D.ok){L=!1;const S=V(c.error,`HTTP Error! status: ${D.status}`);p({...E,...S,id:w,type:"error"})}else if(c.success!==void 0){L=!1;const S=V(c.success,D);p({...E,...S,id:w,type:"success"})}}).catch(async D=>{if(O=["reject",D],c.error!==void 0){L=!1;const S=V(c.error,D);p({...E,...S,id:w,type:"error"})}}).finally(()=>{L&&m(w),c.finally?.()});return{id:w,unwrap:()=>new Promise((D,S)=>Ot.then(()=>O[0]==="reject"?S(O[1]):D(O[1])).catch(S))}},pause:i=>{i!=null?s=s.map(c=>c.id===i?u({...c,message:"PAUSE"}):c):s=s.map(c=>u({...c,message:"PAUSE"}))},resume:i=>{i!=null?s=s.map(c=>c.id===i?u({...c,message:"RESUME"}):c):s=s.map(c=>u({...c,message:"RESUME"}))},isVisible:i=>!n.has(i)&&!!s.find(c=>c.id===i),isDismissed:i=>n.has(i),expand:()=>{s=s.map(i=>u({...i,stacked:!0}))},collapse:()=>{s=s.map(i=>u({...i,stacked:!1}))}}}var ye=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",yt={connect:ce,machine:pe};const ve=t=>fe(t),[xe,et]=Kt({name:"ToastContext",hookName:"useToastContext",providerName:"<ToastProvider />"}),St=b.forwardRef((t,e)=>{const o=et(),s=N(o.getCloseTriggerProps(),t);return a.jsx(tt.button,{...s,ref:e})});St.displayName="ToastCloseTrigger";const Pt=b.forwardRef((t,e)=>{const o=et(),s=N(o.getDescriptionProps(),t);return a.jsx(tt.div,{...s,ref:e})});Pt.displayName="ToastDescription";const Ct=b.forwardRef((t,e)=>{const o=et(),s=N(o.getRootProps(),t);return a.jsxs("div",{...s,ref:e,children:[a.jsx("div",{...o.getGhostBeforeProps()}),t.children,a.jsx("div",{...o.getGhostAfterProps()})]})});Ct.displayName="ToastRoot";const Bt=b.forwardRef((t,e)=>{const o=et(),s=N(o.getTitleProps(),t);return a.jsx(tt.div,{...s,ref:e})});Bt.displayName="ToastTitle";const Rt=b.forwardRef((t,e)=>{const{toaster:o,children:s,...n}=t,r=Yt(),l=bt(),u=wt(yt.machine,{store:o,id:b.useId(),dir:r?.dir,getRootNode:l?.getRootNode}),d=yt.connect(u,Dt),T=N(d.getGroupProps(),n);return a.jsx(tt.div,{...T,ref:e,children:d.getToasts().map((p,m)=>a.jsx(kt,{value:p,parent:u,index:m,children:x=>s(x)},p.id))})});Rt.displayName="Toaster";const kt=t=>{const e=bt(),o={...t.value,parent:t.parent,index:t.index,getRootNode:e.getRootNode},s=wt(he,{...o}),n=me(s,Dt);return a.jsx(xe,{value:n,children:t.children(t.value)})};kt.displayName="ToastActor";const we="_actions_1w3ao_44",De="_icon_1w3ao_71",vt={actions:we,icon:De},be={success:"check_circle",info:"info",warning:"error",error:"cancel"},at=({style:t,className:e,variant:o="info",title:s,description:n,onDismiss:r,actions:l})=>a.jsxs(Ct,{style:t,className:e,children:[a.jsx(rt,{icon:be[o],size:"small",filled:!0,className:vt.icon}),s&&a.jsx(ct,{variant:"body-sm-md",asChild:!0,children:a.jsx(Bt,{children:s})}),n&&a.jsx(ct,{variant:"body-sm-reg",asChild:!0,children:a.jsx(Pt,{children:n})}),a.jsx(St,{onClick:r,children:a.jsx(rt,{icon:"close",size:"small"})}),l&&a.jsx("div",{className:vt.actions,children:l})]}),At=({toaster:t})=>a.jsx(Rt,{toaster:t,children:e=>a.jsx(at,{...e})});at.__docgenInfo={description:`Design system Toast component
This component is used within the Toaster render function`,methods:[],displayName:"DsToast",props:{variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof toastVariants)[number]"},description:"Toast type that determines styling and icon",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Toast title"},description:{required:!1,tsType:{name:"ReactNode"},description:"Toast description/message"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional styles to apply to the component"},actions:{required:!1,tsType:{name:"ReactNode"},description:"Optional action buttons to be rendered inside the component"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when toast is dismissed"}}};At.__docgenInfo={description:"Design system Toast Group component that wraps the Toaster",methods:[],displayName:"DsToastGroup",props:{toaster:{required:!0,tsType:{name:"CreateToasterReturn"},description:""}}};const Mt=b.createContext(null),Ie=t=>e=>t.create({...e,type:e.variant,duration:e.persistent?1/0:e.duration||6e3}),I=({children:t,max:e=3})=>{const o=ve({placement:"top",gap:24,max:e}),s={createToast:Ie(o),dismissToast:o.dismiss,dismissAllToasts:()=>o.dismiss(),getToasts:o.getVisibleToasts,getToastsCount:o.getCount};return a.jsxs(Mt.Provider,{value:s,children:[t,a.jsx(At,{toaster:o})]})},st=()=>{const t=b.useContext(Mt);if(!t)throw new Error("useToast must be used within a ToastProvider");return t};I.__docgenInfo={description:"",methods:[],displayName:"DsToastProvider",props:{max:{required:!1,tsType:{name:"number"},description:`The maximum number of toasts to display (recommended 3 - 5)
@default 3`,defaultValue:{value:"3",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"The children of the toast provider"}}};const Ee=["info","success","warning","error"],Se="_demoContainer_13d69_1",Pe="_actionButtonsContainer_13d69_8",Ce="_buttonGroup_13d69_13",A={demoContainer:Se,actionButtonsContainer:Pe,buttonGroup:Ce},{expect:h,userEvent:Z,waitFor:C,within:Ft}=__STORYBOOK_MODULE_TEST__,ss={title:"Design System/Toast",component:at,parameters:{layout:"centered",docs:{description:{component:"A toast component for displaying temporary messages with different variants and actions."}}},argTypes:{variant:{control:{type:"select"},options:Ee,description:"The visual variant of the toast"},title:{control:{type:"text"},description:"The title of the toast"},description:{control:{type:"text"},description:"The description text of the toast"},persistent:{control:{type:"boolean"},description:"Whether the toast should persist until manually dismissed"},duration:{control:{type:"number"},description:"Duration in milliseconds before auto-dismiss (ignored if persistent is true)"},onDismiss:{control:!1,description:"Callback function called when the toast is dismissed"}}},M=({variant:t,title:e,description:o,persistent:s,actions:n})=>{const{createToast:r}=st(),l=()=>{r({variant:t,title:e,description:o,persistent:s,actions:n})};return a.jsxs("div",{className:A.demoContainer,children:[a.jsxs("h3",{children:[t.charAt(0).toUpperCase()+t.slice(1)," Toast"]}),a.jsxs(B,{design:"v1.2",onClick:l,variant:"filled",children:["Show ",t.charAt(0).toUpperCase()+t.slice(1)," Toast"]})]})},G={render:()=>a.jsx(I,{children:a.jsx(M,{variant:"success",title:"Success!",description:"Your action was completed successfully."})})},q={render:()=>a.jsx(I,{children:a.jsx(M,{variant:"info",title:"Information",description:"Here is some helpful information for you."})})},U={render:()=>a.jsx(I,{children:a.jsx(M,{variant:"warning",title:"Warning",description:"Please be aware of this important notice."})})},$={render:()=>a.jsx(I,{children:a.jsx(M,{variant:"warning",description:"Something went wrong. Please try again.",persistent:!0})})},K={render:()=>a.jsx(I,{children:a.jsx(M,{variant:"warning",description:"Something went wrong. Please try again.",actions:a.jsx(B,{design:"v1.2",variant:"danger",children:"Restart"}),persistent:!0})})},Y={render:()=>{const t=()=>{const{createToast:e,dismissToast:o}=st(),[s,n]=b.useState(),r=()=>{const l=e({title:"File upload failed",description:"Your file could not be uploaded.",variant:"warning",actions:a.jsxs("div",{className:A.actionButtonsContainer,children:[a.jsx(B,{"data-testid":"abort-button",design:"v1.2",onClick:()=>{n("abort"),o(l)},variant:"ghost",children:"Abort"}),a.jsx(B,{"data-testid":"retry-button",design:"v1.2",onClick:()=>{n("retry"),o(l)},variant:"danger",children:"Re-try"})]}),persistent:!0})};return a.jsxs("div",{className:A.demoContainer,children:[a.jsx("h3",{children:"Toast with Action"}),a.jsx(B,{"data-testid":"show-toast-button",design:"v1.2",onClick:r,variant:"filled",children:"Show Toast with Actions"}),s&&a.jsx("p",{"data-testid":"action-result",children:s})]})};return a.jsx(I,{children:a.jsx(t,{})})},play:async({canvasElement:t})=>{const e=Ft(t);await Z.click(e.getByTestId("show-toast-button")),await C(async()=>{await h(e.getByText("File upload failed")).toBeInTheDocument(),await h(e.getByText("Your file could not be uploaded.")).toBeInTheDocument()}),await h(e.getByTestId("abort-button")).toBeInTheDocument(),await h(e.getByTestId("retry-button")).toBeInTheDocument(),await Z.click(e.getByTestId("abort-button")),await C(()=>h(e.getByTestId("action-result")).toHaveTextContent("abort")),await C(()=>h(e.queryByText("File upload failed")).not.toBeInTheDocument(),{timeout:1e3})}},Q={render:()=>a.jsx(I,{children:a.jsx(M,{variant:"error",title:"Error",description:"Something went wrong. Please try again.",persistent:!0})})},X={render:()=>{const t=()=>{const{createToast:e}=st(),o=()=>{e({title:"Important Notice",description:"This is a longer message that demonstrates how the toast component handles extended content. The text will wrap appropriately and maintain good readability while staying within the toast boundaries.",variant:"warning",duration:8e3})};return a.jsxs("div",{className:A.demoContainer,children:[a.jsx("h3",{children:"Long Content Toast"}),a.jsx(B,{design:"v1.2",onClick:o,variant:"filled",children:"Show Long Content Toast"})]})};return a.jsx(I,{children:a.jsx(t,{})})}},Be=()=>{const{createToast:t,dismissAllToasts:e,getToastsCount:o}=st(),[s,n]=b.useState(o()),r=(d,T=0)=>{setTimeout(()=>{t(d),n(o())},T)},l=()=>{e(),setTimeout(()=>{n(o())},500)},u=()=>{r({variant:"success",title:"First Toast",description:"This is the first toast message."}),r({variant:"info",title:"Second Toast",description:"This is the second toast message."},500),r({variant:"warning",title:"Third Toast",description:"This is the third toast message."},1e3)};return a.jsxs("div",{className:A.demoContainer,children:[a.jsx("h3",{children:"Multiple Toasts Demo"}),a.jsxs("div",{className:A.buttonGroup,children:[a.jsx(B,{"data-testid":"create-multiple-button",design:"v1.2",onClick:u,variant:"filled",children:"Create Multiple Toasts"}),a.jsx(B,{design:"v1.2",onClick:l,variant:"ghost","data-testid":"dismiss-all-button",children:"Dismiss All"})]}),"Count: ",a.jsx("span",{"data-testid":"toast-count",children:s})]})},z={render:()=>a.jsx(I,{children:a.jsx(Be,{})}),parameters:{docs:{description:{story:"Demo showing multiple toasts stacked together with dismiss all functionality."}}},play:async({canvasElement:t})=>{const e=Ft(t);await h(e.getByTestId("toast-count")).toHaveTextContent("0"),await Z.click(e.getByTestId("create-multiple-button")),await C(()=>h(e.getByText("First Toast")).toBeInTheDocument()),await C(()=>h(e.getByText("Second Toast")).toBeInTheDocument(),{timeout:1e3}),await C(()=>h(e.getByText("Third Toast")).toBeInTheDocument(),{timeout:1500}),await h(e.getByText("First Toast")).toBeInTheDocument(),await h(e.getByText("Second Toast")).toBeInTheDocument(),await h(e.getByText("Third Toast")).toBeInTheDocument(),await h(e.getByTestId("toast-count")).toHaveTextContent("3"),await Z.click(e.getByTestId("dismiss-all-button")),await C(async()=>{await h(e.queryByText("First Toast")).not.toBeInTheDocument(),await h(e.queryByText("Second Toast")).not.toBeInTheDocument(),await h(e.queryByText("Third Toast")).not.toBeInTheDocument()}),await C(()=>h(e.getByTestId("toast-count")).toHaveTextContent("0"),{timeout:1e3})}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="success" title="Success!" description="Your action was completed successfully." />
        </DsToastProvider>
}`,...G.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="info" title="Information" description="Here is some helpful information for you." />
        </DsToastProvider>
}`,...q.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" title="Warning" description="Please be aware of this important notice." />
        </DsToastProvider>
}`,...U.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" description="Something went wrong. Please try again." persistent />
        </DsToastProvider>
}`,...$.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" description="Something went wrong. Please try again." actions={<DsButton design="v1.2" variant="danger">
                        Restart
                    </DsButton>} persistent></ToastDemo>
        </DsToastProvider>
}`,...K.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const WithActionsDemo = () => {
      const {
        createToast,
        dismissToast
      } = useToaster();
      const [action, setAction] = useState<string>();
      const showToastWithAction = () => {
        const toastId = createToast({
          title: 'File upload failed',
          description: 'Your file could not be uploaded.',
          variant: 'warning',
          actions: <div className={styles.actionButtonsContainer}>
                            <DsButton data-testid="abort-button" design="v1.2" onClick={() => {
              setAction('abort');
              dismissToast(toastId);
            }} variant="ghost">
                                Abort
                            </DsButton>
                            <DsButton data-testid="retry-button" design="v1.2" onClick={() => {
              setAction('retry');
              dismissToast(toastId);
            }} variant="danger">
                                Re-try
                            </DsButton>
                        </div>,
          persistent: true // No auto-dismiss
        });
      };
      return <div className={styles.demoContainer}>
                    <h3>Toast with Action</h3>
                    <DsButton data-testid="show-toast-button" design="v1.2" onClick={showToastWithAction} variant="filled">
                        Show Toast with Actions
                    </DsButton>
                    {action && <p data-testid="action-result">{action}</p>}
                </div>;
    };
    return <DsToastProvider>
                <WithActionsDemo />
            </DsToastProvider>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Test toast creation with actions
    await userEvent.click(canvas.getByTestId('show-toast-button'));

    // Wait for toast to appear and verify content
    await waitFor(async () => {
      await expect(canvas.getByText('File upload failed')).toBeInTheDocument();
      await expect(canvas.getByText('Your file could not be uploaded.')).toBeInTheDocument();
    });

    // Verify action buttons are present
    await expect(canvas.getByTestId('abort-button')).toBeInTheDocument();
    await expect(canvas.getByTestId('retry-button')).toBeInTheDocument();

    // Test abort button functionality
    await userEvent.click(canvas.getByTestId('abort-button'));

    // Verify toast is dismissed and action is recorded
    await waitFor(() => {
      return expect(canvas.getByTestId('action-result')).toHaveTextContent('abort');
    });

    // Wait a bit to ensure toast is dismissed
    await waitFor(() => {
      return expect(canvas.queryByText('File upload failed')).not.toBeInTheDocument();
    }, {
      timeout: 1000
    });
  }
}`,...Y.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="error" title="Error" description="Something went wrong. Please try again." persistent // No auto-dismiss
    />
        </DsToastProvider>
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const LongContentDemo = () => {
      const {
        createToast
      } = useToaster();
      const showLongToast = () => {
        createToast({
          title: 'Important Notice',
          description: 'This is a longer message that demonstrates how the toast component handles extended content. The text will wrap appropriately and maintain good readability while staying within the toast boundaries.',
          variant: 'warning',
          duration: 8000
        });
      };
      return <div className={styles.demoContainer}>
                    <h3>Long Content Toast</h3>
                    <DsButton design="v1.2" onClick={showLongToast} variant="filled">
                        Show Long Content Toast
                    </DsButton>
                </div>;
    };
    return <DsToastProvider>
                <LongContentDemo />
            </DsToastProvider>;
  }
}`,...X.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <MultipleToastsDemo />
        </DsToastProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Demo showing multiple toasts stacked together with dismiss all functionality.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify initial state
    await expect(canvas.getByTestId('toast-count')).toHaveTextContent('0');

    // Test creating multiple toasts
    await userEvent.click(canvas.getByTestId('create-multiple-button'));

    // First toast should appear immediately
    await waitFor(() => {
      return expect(canvas.getByText('First Toast')).toBeInTheDocument();
    });

    // Wait for second toast (500ms delay)
    await waitFor(() => {
      return expect(canvas.getByText('Second Toast')).toBeInTheDocument();
    }, {
      timeout: 1000
    });

    // Wait for third toast (1000ms delay)
    await waitFor(() => {
      return expect(canvas.getByText('Third Toast')).toBeInTheDocument();
    }, {
      timeout: 1500
    });

    // Verify all toasts are visible
    await expect(canvas.getByText('First Toast')).toBeInTheDocument();
    await expect(canvas.getByText('Second Toast')).toBeInTheDocument();
    await expect(canvas.getByText('Third Toast')).toBeInTheDocument();

    // Verify count shows 3 toasts
    await expect(canvas.getByTestId('toast-count')).toHaveTextContent('3');

    // Test dismiss all functionality
    await userEvent.click(canvas.getByTestId('dismiss-all-button'));

    // Verify all toasts are dismissed
    await waitFor(async () => {
      await expect(canvas.queryByText('First Toast')).not.toBeInTheDocument();
      await expect(canvas.queryByText('Second Toast')).not.toBeInTheDocument();
      await expect(canvas.queryByText('Third Toast')).not.toBeInTheDocument();
    });

    // Verify count is back to 0
    await waitFor(() => {
      return expect(canvas.getByTestId('toast-count')).toHaveTextContent('0');
    }, {
      timeout: 1000
    });
  }
}`,...z.parameters?.docs?.source}}};const os=["Success","Info","Warning","WarningNoTitle","WarningNoTitleAction","WarningWithActions","Error","LongContent","MultipleToasts"];export{Q as Error,q as Info,X as LongContent,z as MultipleToasts,G as Success,U as Warning,$ as WarningNoTitle,K as WarningNoTitleAction,Y as WarningWithActions,os as __namedExportsOrder,ss as default};
