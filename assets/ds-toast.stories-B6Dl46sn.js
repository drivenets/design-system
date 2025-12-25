import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-DJPW-05a.js";import{D as nt}from"./ds-icon-KpcpguMC.js";import{D as at}from"./ds-typography-BFv-GORc.js";import{J as kt,c as Ot,w as jt,av as L,W as Tt,f as it,aw as Nt,D as Ft,o as At,v as Mt,am as Wt,as as _t,r as rt,ax as tt,ay as Lt,E as C,A as F,z as ft,V as yt}from"./index-CQ-JdYCr.js";import{a as Vt}from"./index-CzxmrzRX.js";import{c as Ht,a as Q,d as Gt,u as vt}from"./use-locale-context-BlISPb9c.js";import{D as B}from"./ds-button-DObM0JZQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUbhxwPU.js";import"./index-DI_1bvzY.js";import"./index-DgjjHQxi.js";import"./index-CKS76wfi.js";import"./index-BOlOYjNG.js";import"./ds-button-legacy-BESCcEeu.js";import"./ds-button-new-CoVRtZtg.js";var Ut=Ft("toast").parts("group","root","title","description","actionTrigger","closeTrigger"),R=Ut.build(),qt=t=>`toast-group:${t}`,ct=(t,e)=>t.getById(`toast-group:${e}`),xt=t=>`toast:${t.id}`,lt=t=>t.getById(xt(t)),dt=t=>`toast:${t.id}:title`,ut=t=>`toast:${t.id}:description`,$t=t=>`toast${t.id}:close`,pt={info:5e3,error:5e3,success:2e3,loading:1/0,DEFAULT:5e3};function et(t,e){return t??pt[e]??pt.DEFAULT}var Kt=t=>typeof t=="string"?{left:t,right:t,bottom:t,top:t}:t;function Yt(t,e){const{prop:o,computed:s,context:n}=t,{offsets:r,gap:l}=o("store").attrs,u=n.get("heights"),d=Kt(r),T=o("dir")==="rtl",p=e.replace("-start",T?"-right":"-left").replace("-end",T?"-left":"-right"),m=p.includes("right"),x=p.includes("left"),f={position:"fixed",pointerEvents:s("count")>0?void 0:"none",display:"flex",flexDirection:"column","--gap":`${l}px`,"--first-height":`${u[0]?.height||0}px`,"--viewport-offset-left":d.left,"--viewport-offset-right":d.right,"--viewport-offset-top":d.top,"--viewport-offset-bottom":d.bottom,zIndex:Wt};let y="center";if(m&&(y="flex-end"),x&&(y="flex-start"),f.alignItems=y,p.includes("top")){const v=d.top;f.top=`max(env(safe-area-inset-top, 0px), ${v})`}if(p.includes("bottom")){const v=d.bottom;f.bottom=`max(env(safe-area-inset-bottom, 0px), ${v})`}if(!p.includes("left")){const v=d.right;f.insetInlineEnd=`calc(env(safe-area-inset-right, 0px) + ${v})`}if(!p.includes("right")){const v=d.left;f.insetInlineStart=`calc(env(safe-area-inset-left, 0px) + ${v})`}return f}function zt(t,e){const{prop:o,context:s,computed:n}=t,r=o("parent"),l=r.computed("placement"),{gap:u}=r.prop("store").attrs,[d]=l.split("-"),T=s.get("mounted"),p=s.get("remainingTime"),m=n("height"),x=n("frontmost"),f=!x,y=!o("stacked"),v=o("stacked"),M=o("type")==="loading"?Number.MAX_SAFE_INTEGER:p,W=n("heightIndex")*u+n("heightBefore"),j={position:"absolute",pointerEvents:"auto","--opacity":"0","--remove-delay":`${o("removeDelay")}ms`,"--duration":`${M}ms`,"--initial-height":`${m}px`,"--offset":`${W}px`,"--index":o("index"),"--z-index":n("zIndex"),"--lift-amount":"calc(var(--lift) * var(--gap))","--y":"100%","--x":"0"},g=ot=>Object.assign(j,ot);return d==="top"?g({top:"0","--sign":"-1","--y":"-100%","--lift":"1"}):d==="bottom"&&g({bottom:"0","--sign":"1","--y":"100%","--lift":"-1"}),T&&(g({"--y":"0","--opacity":"1"}),v&&g({"--y":"calc(var(--lift) * var(--offset))","--height":"var(--initial-height)"})),e||g({"--opacity":"0",pointerEvents:"none"}),f&&y&&(g({"--base-scale":"var(--index) * 0.05 + 1","--y":"calc(var(--lift-amount) * var(--index))","--scale":"calc(-1 * var(--base-scale))","--height":"var(--first-height)"}),e||g({"--y":"calc(var(--sign) * 40%)"})),f&&v&&!e&&g({"--y":"calc(var(--lift) * var(--offset) + var(--lift) * -100%)"}),x&&!e&&g({"--y":"calc(var(--lift) * -100%)"}),j}function Xt(t,e){const{computed:o}=t,s={position:"absolute",inset:"0",scale:"1 2",pointerEvents:e?"none":"auto"},n=r=>Object.assign(s,r);return o("frontmost")&&!e&&n({height:"calc(var(--initial-height) + 80%)"}),s}function Qt(){return{position:"absolute",left:"0",height:"calc(var(--gap) + 2px)",bottom:"100%",width:"100%"}}function Jt(t,e){const{context:o,prop:s,send:n,refs:r,computed:l}=t;return{getCount(){return o.get("toasts").length},getToasts(){return o.get("toasts")},getGroupProps(u={}){const{label:d="Notifications"}=u,{hotkey:T}=s("store").attrs,p=T.join("+").replace(/Key/g,"").replace(/Digit/g,""),m=l("placement"),[x,f="center"]=m.split("-");return e.element({...R.group.attrs,dir:s("dir"),tabIndex:-1,"aria-label":`${m} ${d} ${p}`,id:qt(m),"data-placement":m,"data-side":x,"data-align":f,"aria-live":"polite",role:"region",style:Yt(t,m),onMouseEnter(){r.get("ignoreMouseTimer").isActive()||n({type:"REGION.POINTER_ENTER",placement:m})},onMouseMove(){r.get("ignoreMouseTimer").isActive()||n({type:"REGION.POINTER_ENTER",placement:m})},onMouseLeave(){r.get("ignoreMouseTimer").isActive()||n({type:"REGION.POINTER_LEAVE",placement:m})},onFocus(y){n({type:"REGION.FOCUS",target:y.relatedTarget})},onBlur(y){r.get("isFocusWithin")&&!At(y.currentTarget,y.relatedTarget)&&queueMicrotask(()=>n({type:"REGION.BLUR"}))}})},subscribe(u){return s("store").subscribe(()=>u(o.get("toasts")))}}}var{guards:Zt,createMachine:te}=kt(),{and:ee}=Zt,se=te({props({props:t}){return{dir:"ltr",id:Tt(),...t,store:t.store}},initialState({prop:t}){return t("store").attrs.overlap?"overlap":"stack"},refs(){return{lastFocusedEl:null,isFocusWithin:!1,isPointerWithin:!1,ignoreMouseTimer:Nt.create(),dismissableCleanup:void 0}},context({bindable:t}){return{toasts:t(()=>({defaultValue:[],sync:!0,hash:e=>e.map(o=>o.id).join(",")})),heights:t(()=>({defaultValue:[],sync:!0}))}},computed:{count:({context:t})=>t.get("toasts").length,overlap:({prop:t})=>t("store").attrs.overlap,placement:({prop:t})=>t("store").attrs.placement},effects:["subscribeToStore","trackDocumentVisibility","trackHotKeyPress"],watch({track:t,context:e,action:o}){t([()=>e.hash("toasts")],()=>{queueMicrotask(()=>{o(["collapsedIfEmpty","setDismissableBranch"])})})},exit:["clearDismissableBranch","clearLastFocusedEl","clearMouseEventTimer"],on:{"DOC.HOTKEY":{actions:["focusRegionEl"]},"REGION.BLUR":[{guard:ee("isOverlapping","isPointerOut"),target:"overlap",actions:["collapseToasts","resumeToasts","restoreFocusIfPointerOut"]},{guard:"isPointerOut",target:"stack",actions:["resumeToasts","restoreFocusIfPointerOut"]},{actions:["clearFocusWithin"]}],"TOAST.REMOVE":{actions:["removeToast","removeHeight","ignoreMouseEventsTemporarily"]},"TOAST.PAUSE":{actions:["pauseToasts"]}},states:{stack:{on:{"REGION.POINTER_LEAVE":[{guard:"isOverlapping",target:"overlap",actions:["clearPointerWithin","resumeToasts","collapseToasts"]},{actions:["clearPointerWithin","resumeToasts"]}],"REGION.OVERLAP":{target:"overlap",actions:["collapseToasts"]},"REGION.FOCUS":{actions:["setLastFocusedEl","pauseToasts"]},"REGION.POINTER_ENTER":{actions:["setPointerWithin","pauseToasts"]}}},overlap:{on:{"REGION.STACK":{target:"stack",actions:["expandToasts"]},"REGION.POINTER_ENTER":{target:"stack",actions:["setPointerWithin","pauseToasts","expandToasts"]},"REGION.FOCUS":{target:"stack",actions:["setLastFocusedEl","pauseToasts","expandToasts"]}}}},implementations:{guards:{isOverlapping:({computed:t})=>t("overlap"),isPointerOut:({refs:t})=>!t.get("isPointerWithin")},effects:{subscribeToStore({context:t,prop:e}){return e("store").subscribe(o=>{if(o.dismiss){t.set("toasts",s=>s.filter(n=>n.id!==o.id));return}t.set("toasts",s=>{const n=s.findIndex(r=>r.id===o.id);return n!==-1?[...s.slice(0,n),{...s[n],...o},...s.slice(n+1)]:[o,...s]})})},trackHotKeyPress({prop:t,send:e}){return it(document,"keydown",s=>{const{hotkey:n}=t("store").attrs;n.every(l=>s[l]||s.code===l)&&e({type:"DOC.HOTKEY"})},{capture:!0})},trackDocumentVisibility({prop:t,send:e,scope:o}){const{pauseOnPageIdle:s}=t("store").attrs;if(!s)return;const n=o.getDoc();return it(n,"visibilitychange",()=>{const r=n.visibilityState==="hidden";e({type:r?"PAUSE_ALL":"RESUME_ALL"})})}},actions:{setDismissableBranch({refs:t,context:e,computed:o,scope:s}){const n=e.get("toasts"),r=o("placement"),l=n.length>0;if(!l){t.get("dismissableCleanup")?.();return}if(l&&t.get("dismissableCleanup"))return;const d=Vt(()=>ct(s,r),{defer:!0});t.set("dismissableCleanup",d)},clearDismissableBranch({refs:t}){t.get("dismissableCleanup")?.()},focusRegionEl({scope:t,computed:e}){queueMicrotask(()=>{ct(t,e("placement"))?.focus()})},pauseToasts({prop:t}){t("store").pause()},resumeToasts({prop:t}){t("store").resume()},expandToasts({prop:t}){t("store").expand()},collapseToasts({prop:t}){t("store").collapse()},removeToast({prop:t,event:e}){t("store").remove(e.id)},removeHeight({event:t,context:e}){t?.id!=null&&queueMicrotask(()=>{e.set("heights",o=>o.filter(s=>s.id!==t.id))})},collapsedIfEmpty({send:t,computed:e}){!e("overlap")||e("count")>1||t({type:"REGION.OVERLAP"})},setLastFocusedEl({refs:t,event:e}){t.get("isFocusWithin")||!e.target||(t.set("isFocusWithin",!0),t.set("lastFocusedEl",e.target))},restoreFocusIfPointerOut({refs:t}){!t.get("lastFocusedEl")||t.get("isPointerWithin")||(t.get("lastFocusedEl")?.focus({preventScroll:!0}),t.set("lastFocusedEl",null),t.set("isFocusWithin",!1))},setPointerWithin({refs:t}){t.set("isPointerWithin",!0)},clearPointerWithin({refs:t}){t.set("isPointerWithin",!1),t.get("lastFocusedEl")&&!t.get("isFocusWithin")&&(t.get("lastFocusedEl")?.focus({preventScroll:!0}),t.set("lastFocusedEl",null))},clearFocusWithin({refs:t}){t.set("isFocusWithin",!1)},clearLastFocusedEl({refs:t}){t.get("lastFocusedEl")&&(t.get("lastFocusedEl")?.focus({preventScroll:!0}),t.set("lastFocusedEl",null),t.set("isFocusWithin",!1))},ignoreMouseEventsTemporarily({refs:t}){t.get("ignoreMouseTimer").request()},clearMouseEventTimer({refs:t}){t.get("ignoreMouseTimer").cancel()}}}});function oe(t,e){const{state:o,send:s,prop:n,scope:r,context:l,computed:u}=t,d=o.hasTag("visible"),T=o.hasTag("paused"),p=l.get("mounted"),m=u("frontmost"),x=n("parent").computed("placement"),f=n("type"),y=n("stacked"),v=n("title"),A=n("description"),M=n("action"),[W,j="center"]=x.split("-");return{type:f,title:v,description:A,placement:x,visible:d,paused:T,closable:!!n("closable"),pause(){s({type:"PAUSE"})},resume(){s({type:"RESUME"})},dismiss(){s({type:"DISMISS",src:"programmatic"})},getRootProps(){return e.element({...R.root.attrs,dir:n("dir"),id:xt(r),"data-state":d?"open":"closed","data-type":f,"data-placement":x,"data-align":j,"data-side":W,"data-mounted":C(p),"data-paused":C(T),"data-first":C(m),"data-sibling":C(!m),"data-stack":C(y),"data-overlap":C(!y),role:"status","aria-atomic":"true","aria-describedby":A?ut(r):void 0,"aria-labelledby":v?dt(r):void 0,tabIndex:0,style:zt(t,d),onKeyDown(g){g.defaultPrevented||g.key=="Escape"&&(s({type:"DISMISS",src:"keyboard"}),g.preventDefault())}})},getGhostBeforeProps(){return e.element({"data-ghost":"before",style:Xt(t,d)})},getGhostAfterProps(){return e.element({"data-ghost":"after",style:Qt()})},getTitleProps(){return e.element({...R.title.attrs,id:dt(r)})},getDescriptionProps(){return e.element({...R.description.attrs,id:ut(r)})},getActionTriggerProps(){return e.button({...R.actionTrigger.attrs,type:"button",onClick(g){g.defaultPrevented||(M?.onClick?.(),s({type:"DISMISS",src:"user"}))}})},getCloseTriggerProps(){return e.button({id:$t(r),...R.closeTrigger.attrs,type:"button","aria-label":"Dismiss notification",onClick(g){g.defaultPrevented||s({type:"DISMISS",src:"user"})}})}}}var{not:ne}=_t(),ae=Mt({props({props:t}){return Lt(t,["id","type","parent","removeDelay"],"toast"),{closable:!0,...t,duration:et(t.duration,t.type)}},initialState({prop:t}){return t("type")==="loading"||t("duration")===1/0?"visible:persist":"visible"},context({prop:t,bindable:e}){return{remainingTime:e(()=>({defaultValue:et(t("duration"),t("type"))})),createdAt:e(()=>({defaultValue:Date.now()})),mounted:e(()=>({defaultValue:!1})),initialHeight:e(()=>({defaultValue:0}))}},refs(){return{closeTimerStartTime:Date.now(),lastCloseStartTimerStartTime:0}},computed:{zIndex:({prop:t})=>{const e=t("parent").context.get("toasts"),o=e.findIndex(s=>s.id===t("id"));return e.length-o},height:({prop:t})=>t("parent").context.get("heights").find(s=>s.id===t("id"))?.height??0,heightIndex:({prop:t})=>t("parent").context.get("heights").findIndex(o=>o.id===t("id")),frontmost:({prop:t})=>t("index")===0,heightBefore:({prop:t})=>{const e=t("parent").context.get("heights"),o=e.findIndex(s=>s.id===t("id"));return e.reduce((s,n,r)=>r>=o?s:s+n.height,0)},shouldPersist:({prop:t})=>t("type")==="loading"||t("duration")===1/0},watch({track:t,prop:e,send:o}){t([()=>e("message")],()=>{const s=e("message");s&&o({type:s,src:"programmatic"})}),t([()=>e("type"),()=>e("duration")],()=>{o({type:"UPDATE"})})},on:{UPDATE:[{guard:"shouldPersist",target:"visible:persist",actions:["resetCloseTimer"]},{target:"visible:updating",actions:["resetCloseTimer"]}],MEASURE:{actions:["measureHeight"]}},entry:["setMounted","measureHeight","invokeOnVisible"],effects:["trackHeight"],states:{"visible:updating":{tags:["visible","updating"],effects:["waitForNextTick"],on:{SHOW:{target:"visible"}}},"visible:persist":{tags:["visible","paused"],on:{RESUME:{guard:ne("isLoadingType"),target:"visible",actions:["setCloseTimer"]},DISMISS:{target:"dismissing"}}},visible:{tags:["visible"],effects:["waitForDuration"],on:{DISMISS:{target:"dismissing"},PAUSE:{target:"visible:persist",actions:["syncRemainingTime"]}}},dismissing:{entry:["invokeOnDismiss"],effects:["waitForRemoveDelay"],on:{REMOVE:{target:"unmounted",actions:["notifyParentToRemove"]}}},unmounted:{entry:["invokeOnUnmount"]}},implementations:{effects:{waitForRemoveDelay({prop:t,send:e}){return tt(()=>{e({type:"REMOVE",src:"timer"})},t("removeDelay"))},waitForDuration({send:t,context:e,computed:o}){if(!o("shouldPersist"))return tt(()=>{t({type:"DISMISS",src:"timer"})},e.get("remainingTime"))},waitForNextTick({send:t}){return tt(()=>{t({type:"SHOW",src:"timer"})},0)},trackHeight({scope:t,prop:e}){let o;return rt(()=>{const s=lt(t);if(!s)return;const n=()=>{const u=s.style.height;s.style.height="auto";const d=s.getBoundingClientRect().height;s.style.height=u;const T={id:e("id"),height:d};mt(e("parent"),T)},r=t.getWin(),l=new r.MutationObserver(n);l.observe(s,{childList:!0,subtree:!0,characterData:!0}),o=()=>l.disconnect()}),()=>o?.()}},guards:{isLoadingType:({prop:t})=>t("type")==="loading",shouldPersist:({computed:t})=>t("shouldPersist")},actions:{setMounted({context:t}){rt(()=>{t.set("mounted",!0)})},measureHeight({scope:t,prop:e,context:o}){queueMicrotask(()=>{const s=lt(t);if(!s)return;const n=s.style.height;s.style.height="auto";const r=s.getBoundingClientRect().height;s.style.height=n,o.set("initialHeight",r);const l={id:e("id"),height:r};mt(e("parent"),l)})},setCloseTimer({refs:t}){t.set("closeTimerStartTime",Date.now())},resetCloseTimer({context:t,refs:e,prop:o}){e.set("closeTimerStartTime",Date.now()),t.set("remainingTime",et(o("duration"),o("type")))},syncRemainingTime({context:t,refs:e}){t.set("remainingTime",o=>{const s=e.get("closeTimerStartTime"),n=Date.now()-s;return e.set("lastCloseStartTimerStartTime",Date.now()),o-n})},notifyParentToRemove({prop:t}){t("parent").send({type:"TOAST.REMOVE",id:t("id")})},invokeOnDismiss({prop:t,event:e}){t("onStatusChange")?.({status:"dismissing",src:e.src})},invokeOnUnmount({prop:t}){t("onStatusChange")?.({status:"unmounted"})},invokeOnVisible({prop:t}){t("onStatusChange")?.({status:"visible"})}}}});function mt(t,e){const{id:o,height:s}=e;t.context.set("heights",n=>n.find(l=>l.id===o)?n.map(l=>l.id===o?{...l,height:s}:l):[{id:o,height:s},...n])}var ie=(t,e)=>({...e,...Ot(t)});function re(t={}){const e=ie(t,{placement:"bottom",overlap:!1,max:24,gap:16,offsets:"1rem",hotkey:["altKey","KeyT"],removeDelay:200,pauseOnPageIdle:!0});let o=[],s=[],n=new Set,r=[];const l=i=>(o.push(i),()=>{const c=o.indexOf(i);o.splice(c,1)}),u=i=>(o.forEach(c=>c(i)),i),d=i=>{if(s.length>=e.max){r.push(i);return}u(i),s.unshift(i)},T=()=>{for(;r.length>0&&s.length<e.max;){const i=r.shift();i&&(u(i),s.unshift(i))}},p=i=>{const c=i.id??`toast:${Tt()}`,E=s.find(w=>w.id===c);return n.has(c)&&n.delete(c),E?s=s.map(w=>w.id===c?u({...w,...i,id:c}):w):d({id:c,duration:e.duration,removeDelay:e.removeDelay,type:"info",...i,stacked:!e.overlap,gap:e.gap}),c},m=i=>(n.add(i),i?(o.forEach(c=>c({id:i,dismiss:!0})),s=s.filter(c=>c.id!==i),T()):(s.forEach(c=>{o.forEach(E=>E({id:c.id,dismiss:!0}))}),s=[],r=[]),i);return{attrs:e,subscribe:l,create:p,update:(i,c)=>p({id:i,...c}),remove:m,dismiss:i=>{i!=null?s=s.map(c=>c.id===i?u({...c,message:"DISMISS"}):c):s=s.map(c=>u({...c,message:"DISMISS"}))},error:i=>p({...i,type:"error"}),success:i=>p({...i,type:"success"}),info:i=>p({...i,type:"info"}),warning:i=>p({...i,type:"warning"}),loading:i=>p({...i,type:"loading"}),getVisibleToasts:()=>s.filter(i=>!n.has(i.id)),getCount:()=>s.length,promise:(i,c,E={})=>{if(!c||!c.loading){jt("[zag-js > toast] toaster.promise() requires at least a 'loading' option to be specified");return}const w=p({...E,...c.loading,promise:i,type:"loading"});let _=!0,N;const Rt=L(i).then(async D=>{if(N=["resolve",D],ce(D)&&!D.ok){_=!1;const S=L(c.error,`HTTP Error! status: ${D.status}`);p({...E,...S,id:w,type:"error"})}else if(c.success!==void 0){_=!1;const S=L(c.success,D);p({...E,...S,id:w,type:"success"})}}).catch(async D=>{if(N=["reject",D],c.error!==void 0){_=!1;const S=L(c.error,D);p({...E,...S,id:w,type:"error"})}}).finally(()=>{_&&m(w),c.finally?.()});return{id:w,unwrap:()=>new Promise((D,S)=>Rt.then(()=>N[0]==="reject"?S(N[1]):D(N[1])).catch(S))}},pause:i=>{i!=null?s=s.map(c=>c.id===i?u({...c,message:"PAUSE"}):c):s=s.map(c=>u({...c,message:"PAUSE"}))},resume:i=>{i!=null?s=s.map(c=>c.id===i?u({...c,message:"RESUME"}):c):s=s.map(c=>u({...c,message:"RESUME"}))},isVisible:i=>!n.has(i)&&!!s.find(c=>c.id===i),isDismissed:i=>n.has(i),expand:()=>{s=s.map(i=>u({...i,stacked:!0}))},collapse:()=>{s=s.map(i=>u({...i,stacked:!1}))}}}var ce=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",gt={connect:Jt,machine:se};const le=t=>re(t),[de,J]=Ht({name:"ToastContext",hookName:"useToastContext",providerName:"<ToastProvider />"}),wt=b.forwardRef((t,e)=>{const o=J(),s=F(o.getCloseTriggerProps(),t);return a.jsx(Q.button,{...s,ref:e})});wt.displayName="ToastCloseTrigger";const Dt=b.forwardRef((t,e)=>{const o=J(),s=F(o.getDescriptionProps(),t);return a.jsx(Q.div,{...s,ref:e})});Dt.displayName="ToastDescription";const bt=b.forwardRef((t,e)=>{const o=J(),s=F(o.getRootProps(),t);return a.jsxs("div",{...s,ref:e,children:[a.jsx("div",{...o.getGhostBeforeProps()}),t.children,a.jsx("div",{...o.getGhostAfterProps()})]})});bt.displayName="ToastRoot";const It=b.forwardRef((t,e)=>{const o=J(),s=F(o.getTitleProps(),t);return a.jsx(Q.div,{...s,ref:e})});It.displayName="ToastTitle";const Et=b.forwardRef((t,e)=>{const{toaster:o,children:s,...n}=t,r=Gt(),l=vt(),u=ft(gt.machine,{store:o,id:b.useId(),dir:r?.dir,getRootNode:l?.getRootNode}),d=gt.connect(u,yt),T=F(d.getGroupProps(),n);return a.jsx(Q.div,{...T,ref:e,children:d.getToasts().map((p,m)=>a.jsx(St,{value:p,parent:u,index:m,children:x=>s(x)},p.id))})});Et.displayName="Toaster";const St=t=>{const e=vt(),o={...t.value,parent:t.parent,index:t.index,getRootNode:e.getRootNode},s=ft(ae,{...o}),n=oe(s,yt);return a.jsx(de,{value:n,children:t.children(t.value)})};St.displayName="ToastActor";const ue="_actions_1w3ao_44",pe="_icon_1w3ao_71",ht={actions:ue,icon:pe},me={success:"check_circle",info:"info",warning:"error",error:"cancel"},st=({style:t,className:e,variant:o="info",title:s,description:n,onDismiss:r,actions:l})=>a.jsxs(bt,{style:t,className:e,children:[a.jsx(nt,{icon:me[o],size:"small",filled:!0,className:ht.icon}),s&&a.jsx(at,{variant:"body-sm-md",asChild:!0,children:a.jsx(It,{children:s})}),n&&a.jsx(at,{variant:"body-sm-reg",asChild:!0,children:a.jsx(Dt,{children:n})}),a.jsx(wt,{onClick:r,children:a.jsx(nt,{icon:"close",size:"small"})}),l&&a.jsx("div",{className:ht.actions,children:l})]}),Pt=({toaster:t})=>a.jsx(Et,{toaster:t,children:e=>a.jsx(st,{...e})});st.__docgenInfo={description:`Design system Toast component
This component is used within the Toaster render function`,methods:[],displayName:"DsToast",props:{variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof toastVariants)[number]"},description:"Toast type that determines styling and icon",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Toast title"},description:{required:!1,tsType:{name:"ReactNode"},description:"Toast description/message"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional styles to apply to the component"},actions:{required:!1,tsType:{name:"ReactNode"},description:"Optional action buttons to be rendered inside the component"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when toast is dismissed"}}};Pt.__docgenInfo={description:"Design system Toast Group component that wraps the Toaster",methods:[],displayName:"DsToastGroup",props:{toaster:{required:!0,tsType:{name:"CreateToasterReturn"},description:""}}};const Bt=b.createContext(null),ge=t=>e=>t.create({...e,type:e.variant,duration:e.persistent?1/0:e.duration||6e3}),I=({children:t,max:e=3})=>{const o=le({placement:"top",gap:24,max:e}),s={createToast:ge(o),dismissToast:o.dismiss,dismissAllToasts:()=>o.dismiss(),getToasts:o.getVisibleToasts,getToastsCount:o.getCount};return a.jsxs(Bt.Provider,{value:s,children:[t,a.jsx(Pt,{toaster:o})]})},Z=()=>{const t=b.useContext(Bt);if(!t)throw new Error("useToast must be used within a ToastProvider");return t};I.__docgenInfo={description:"",methods:[],displayName:"DsToastProvider",props:{max:{required:!1,tsType:{name:"number"},description:`The maximum number of toasts to display (recommended 3 - 5)
@default 3`,defaultValue:{value:"3",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"The children of the toast provider"}}};const he=["info","success","warning","error"],Te="_demoContainer_13d69_1",fe="_actionButtonsContainer_13d69_8",ye="_buttonGroup_13d69_13",k={demoContainer:Te,actionButtonsContainer:fe,buttonGroup:ye},{expect:h,userEvent:X,waitFor:P,within:Ct}=__STORYBOOK_MODULE_TEST__,Ge={title:"Design System/Toast",component:st,parameters:{layout:"centered",docs:{description:{component:"A toast component for displaying temporary messages with different variants and actions."}}},argTypes:{variant:{control:{type:"select"},options:he,description:"The visual variant of the toast"},title:{control:{type:"text"},description:"The title of the toast"},description:{control:{type:"text"},description:"The description text of the toast"},persistent:{control:{type:"boolean"},description:"Whether the toast should persist until manually dismissed"},duration:{control:{type:"number"},description:"Duration in milliseconds before auto-dismiss (ignored if persistent is true)"},onDismiss:{control:!1,description:"Callback function called when the toast is dismissed"}}},O=({variant:t,title:e,description:o,persistent:s,actions:n})=>{const{createToast:r}=Z(),l=()=>{r({variant:t,title:e,description:o,persistent:s,actions:n})};return a.jsxs("div",{className:k.demoContainer,children:[a.jsxs("h3",{children:[t.charAt(0).toUpperCase()+t.slice(1)," Toast"]}),a.jsxs(B,{design:"v1.2",onClick:l,variant:"filled",children:["Show ",t.charAt(0).toUpperCase()+t.slice(1)," Toast"]})]})},V={render:()=>a.jsx(I,{children:a.jsx(O,{variant:"success",title:"Success!",description:"Your action was completed successfully."})})},H={render:()=>a.jsx(I,{children:a.jsx(O,{variant:"info",title:"Information",description:"Here is some helpful information for you."})})},G={render:()=>a.jsx(I,{children:a.jsx(O,{variant:"warning",title:"Warning",description:"Please be aware of this important notice."})})},U={render:()=>a.jsx(I,{children:a.jsx(O,{variant:"warning",description:"Something went wrong. Please try again.",persistent:!0})})},q={render:()=>a.jsx(I,{children:a.jsx(O,{variant:"warning",description:"Something went wrong. Please try again.",actions:a.jsx(B,{design:"v1.2",variant:"danger",children:"Restart"}),persistent:!0})})},$={render:()=>{const t=()=>{const{createToast:e,dismissToast:o}=Z(),[s,n]=b.useState(),r=()=>{const l=e({title:"File upload failed",description:"Your file could not be uploaded.",variant:"warning",actions:a.jsxs("div",{className:k.actionButtonsContainer,children:[a.jsx(B,{"data-testid":"abort-button",design:"v1.2",onClick:()=>{n("abort"),o(l)},variant:"ghost",children:"Abort"}),a.jsx(B,{"data-testid":"retry-button",design:"v1.2",onClick:()=>{n("retry"),o(l)},variant:"danger",children:"Re-try"})]}),persistent:!0})};return a.jsxs("div",{className:k.demoContainer,children:[a.jsx("h3",{children:"Toast with Action"}),a.jsx(B,{"data-testid":"show-toast-button",design:"v1.2",onClick:r,variant:"filled",children:"Show Toast with Actions"}),s&&a.jsx("p",{"data-testid":"action-result",children:s})]})};return a.jsx(I,{children:a.jsx(t,{})})},play:async({canvasElement:t})=>{const e=Ct(t);await X.click(e.getByTestId("show-toast-button")),await P(async()=>{await h(e.getByText("File upload failed")).toBeInTheDocument(),await h(e.getByText("Your file could not be uploaded.")).toBeInTheDocument()}),await h(e.getByTestId("abort-button")).toBeInTheDocument(),await h(e.getByTestId("retry-button")).toBeInTheDocument(),await X.click(e.getByTestId("abort-button")),await P(()=>h(e.getByTestId("action-result")).toHaveTextContent("abort")),await P(()=>h(e.queryByText("File upload failed")).not.toBeInTheDocument(),{timeout:1e3})}},K={render:()=>a.jsx(I,{children:a.jsx(O,{variant:"error",title:"Error",description:"Something went wrong. Please try again.",persistent:!0})})},Y={render:()=>{const t=()=>{const{createToast:e}=Z(),o=()=>{e({title:"Important Notice",description:"This is a longer message that demonstrates how the toast component handles extended content. The text will wrap appropriately and maintain good readability while staying within the toast boundaries.",variant:"warning",duration:8e3})};return a.jsxs("div",{className:k.demoContainer,children:[a.jsx("h3",{children:"Long Content Toast"}),a.jsx(B,{design:"v1.2",onClick:o,variant:"filled",children:"Show Long Content Toast"})]})};return a.jsx(I,{children:a.jsx(t,{})})}},ve=()=>{const{createToast:t,dismissAllToasts:e,getToastsCount:o}=Z(),[s,n]=b.useState(o()),r=(d,T=0)=>{setTimeout(()=>{t(d),n(o())},T)},l=()=>{e(),setTimeout(()=>{n(o())},500)},u=()=>{r({variant:"success",title:"First Toast",description:"This is the first toast message."}),r({variant:"info",title:"Second Toast",description:"This is the second toast message."},500),r({variant:"warning",title:"Third Toast",description:"This is the third toast message."},1e3)};return a.jsxs("div",{className:k.demoContainer,children:[a.jsx("h3",{children:"Multiple Toasts Demo"}),a.jsxs("div",{className:k.buttonGroup,children:[a.jsx(B,{"data-testid":"create-multiple-button",design:"v1.2",onClick:u,variant:"filled",children:"Create Multiple Toasts"}),a.jsx(B,{design:"v1.2",onClick:l,variant:"ghost","data-testid":"dismiss-all-button",children:"Dismiss All"})]}),"Count: ",a.jsx("span",{"data-testid":"toast-count",children:s})]})},z={render:()=>a.jsx(I,{children:a.jsx(ve,{})}),parameters:{docs:{description:{story:"Demo showing multiple toasts stacked together with dismiss all functionality."}}},play:async({canvasElement:t})=>{const e=Ct(t);await h(e.getByTestId("toast-count")).toHaveTextContent("0"),await X.click(e.getByTestId("create-multiple-button")),await P(()=>h(e.getByText("First Toast")).toBeInTheDocument()),await P(()=>h(e.getByText("Second Toast")).toBeInTheDocument(),{timeout:1e3}),await P(()=>h(e.getByText("Third Toast")).toBeInTheDocument(),{timeout:1500}),await h(e.getByText("First Toast")).toBeInTheDocument(),await h(e.getByText("Second Toast")).toBeInTheDocument(),await h(e.getByText("Third Toast")).toBeInTheDocument(),await h(e.getByTestId("toast-count")).toHaveTextContent("3"),await X.click(e.getByTestId("dismiss-all-button")),await P(async()=>{await h(e.queryByText("First Toast")).not.toBeInTheDocument(),await h(e.queryByText("Second Toast")).not.toBeInTheDocument(),await h(e.queryByText("Third Toast")).not.toBeInTheDocument()}),await P(()=>h(e.getByTestId("toast-count")).toHaveTextContent("0"),{timeout:1e3})}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="success" title="Success!" description="Your action was completed successfully." />
        </DsToastProvider>
}`,...V.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="info" title="Information" description="Here is some helpful information for you." />
        </DsToastProvider>
}`,...H.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" title="Warning" description="Please be aware of this important notice." />
        </DsToastProvider>
}`,...G.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" description="Something went wrong. Please try again." persistent />
        </DsToastProvider>
}`,...U.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" description="Something went wrong. Please try again." actions={<DsButton design="v1.2" variant="danger">
                        Restart
                    </DsButton>} persistent></ToastDemo>
        </DsToastProvider>
}`,...q.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="error" title="Error" description="Something went wrong. Please try again." persistent // No auto-dismiss
    />
        </DsToastProvider>
}`,...K.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};const Ue=["Success","Info","Warning","WarningNoTitle","WarningNoTitleAction","WarningWithActions","Error","LongContent","MultipleToasts"];export{K as Error,H as Info,Y as LongContent,z as MultipleToasts,V as Success,G as Warning,U as WarningNoTitle,q as WarningNoTitleAction,$ as WarningWithActions,Ue as __namedExportsOrder,Ge as default};
