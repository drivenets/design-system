import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n}from"./iframe-CcrieA_d.js";import{n as r}from"./classnames-BngcLiyu.js";import{n as i,t as a}from"./ds-icon-bkgZJXmu.js";import{C as o,E as s,St as c,T as l,Y as u,_ as d,_t as f,a as p,b as m,c as h,et as g,f as _,h as ee,ht as v,i as y,m as b,n as te,o as ne,p as re,pt as ie,r as ae,s as oe,t as se,tt as x,u as ce,w as le,xt as ue}from"./normalize-props-BDW4W1cu.js";import{a as de,n as fe,t as pe}from"./raf-D1nJPjhp.js";import{B as me,G as he}from"./ds-tooltip-CQP584wp.js";import{C as ge,_ as _e,a as ve,c as S,g as C,h as w,i as ye,m as be,n as xe,o as Se,p as Ce,r as we,s as T,t as Te,x as Ee}from"./runtime-B00ETiTt.js";import{n as De,t as Oe}from"./dismissable-layer-Dmp4QPyv.js";import{n as ke,t as Ae}from"./resize-observer-8XlAbyDW.js";import{n as je,t as Me}from"./ds-typography-DX_7o2Hd.js";import{n as Ne,t as Pe}from"./ds-button-v3-BlocrNzC.js";import{n as Fe,t as Ie}from"./ds-stack-Zj19mmT6.js";import{n as E,t as Le}from"./ds-button-BQcoEc19.js";var Re,ze,Be,D,Ve,He,Ue;function We(){return(We=e((()=>{Re=Object.defineProperty,ze=e=>{throw TypeError(e)},Be=(e,t,n)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t,n)=>Be(e,typeof t==`symbol`?t:t+``,n),Ve=(e,t,n)=>t.has(e)||ze(`Cannot `+n),He=(e,t,n)=>(Ve(e,t,`read from private field`),n?n.call(e):t.get(e)),Ue=(e,t,n)=>t.has(e)?ze(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n)})))()}function Ge(e,t){let n=new qe(({deltaMs:n})=>{if(n>=t)return e(),!1});return n.start(),()=>n.stop()}var O,Ke,qe;function Je(){return(Je=e((()=>{We(),O=()=>performance.now(),qe=class{constructor(e){D(this,`onTick`,e),D(this,`frameId`,null),D(this,`pausedAtMs`,null),D(this,`context`),D(this,`cancelFrame`,()=>{this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}),D(this,`setStartMs`,e=>{this.context.startMs=e}),D(this,`start`,()=>{if(this.frameId!==null)return;let e=O();this.pausedAtMs===null?this.context.startMs=e:(this.context.startMs+=e-this.pausedAtMs,this.pausedAtMs=null),this.frameId=requestAnimationFrame(He(this,Ke))}),D(this,`pause`,()=>{this.frameId!==null&&(this.cancelFrame(),this.pausedAtMs=O())}),D(this,`stop`,()=>{this.frameId!==null&&(this.cancelFrame(),this.pausedAtMs=null)}),Ue(this,Ke,e=>{this.context.now=e,this.context.deltaMs=e-this.context.startMs,this.onTick(this.context)===!1?this.stop():this.frameId=requestAnimationFrame(He(this,Ke))}),this.context={now:0,startMs:O(),deltaMs:0}}get elapsedMs(){return this.pausedAtMs===null?O()-this.context.startMs:this.pausedAtMs-this.context.startMs}},Ke=new WeakMap})))()}var Ye,k;function Xe(){return(Xe=e((()=>{c(),Ye=ue(`toast`).parts(`group`,`root`,`title`,`description`,`actionTrigger`,`closeTrigger`),k=Ye.build()})))()}function Ze(e,t){let{filter:n=()=>!0,onChange:r,onMutate:i}=t,a=g(e),o=pe.create(),s=()=>o.request(r),c,l=()=>{c?.();let t=Array.from(e.children).filter(n);c=d(...t.map(e=>ke.observe(e,s)))};l();let u=new a.MutationObserver(()=>{o.cancel(),r(),i?.(),l()});return u.observe(e,{childList:!0,subtree:!0,characterData:!0}),()=>{u.disconnect(),c?.(),o.cancel()}}var Qe,A,$e,et,tt,nt,rt,it,at,ot;function j(){return(j=e((()=>{fe(),x(),me(),Ae(),m(),Qe=e=>`toast-group:${e}`,A=(e,t)=>e.getById(`toast-group:${t}`),$e=(e,t)=>he(A(e,t),`[data-scope=toast][data-part=root]`),et=e=>`toast:${e.id}`,tt=e=>e.getById(et(e)),nt=e=>`toast:${e.id}:title`,rt=e=>`toast:${e.id}:description`,it=e=>e.getById(nt(e)),at=e=>e.getById(rt(e)),ot=e=>`toast${e.id}:close`})))()}function st(e,t){return e??pt[t]??pt.DEFAULT}function ct(e,t){let{prop:n,computed:r,context:i}=e,{offsets:a,gap:o}=n(`store`).attrs,s=i.get(`heights`),c=mt(a),l=n(`dir`)===`rtl`,u=t.replace(`-start`,l?`-right`:`-left`).replace(`-end`,l?`-left`:`-right`),d=u.includes(`right`),f=u.includes(`left`),p={position:`fixed`,pointerEvents:r(`count`)>0?void 0:`none`,display:`flex`,flexDirection:`column`,"--gap":`${o}px`,"--first-height":`${s[0]?.height||0}px`,"--viewport-offset-left":c.left,"--viewport-offset-right":c.right,"--viewport-offset-top":c.top,"--viewport-offset-bottom":c.bottom,zIndex:ie},m=`center`;return d&&(m=`flex-end`),f&&(m=`flex-start`),p.alignItems=m,u.includes(`top`)&&(p.top=`max(env(safe-area-inset-top, 0px), ${c.top})`),u.includes(`bottom`)&&(p.bottom=`max(env(safe-area-inset-bottom, 0px), ${c.bottom})`),u.includes(`left`)||(p.insetInlineEnd=`calc(env(safe-area-inset-right, 0px) + ${c.right})`),u.includes(`right`)||(p.insetInlineStart=`calc(env(safe-area-inset-left, 0px) + ${c.left})`),p}function lt(e,t){let{prop:n,context:r,computed:i}=e,a=n(`parent`),o=a.computed(`placement`),{gap:s}=a.prop(`store`).attrs,[c]=o.split(`-`),l=r.get(`mounted`),u=r.get(`remainingTime`),d=i(`height`),f=i(`frontmost`),p=!f,m=n(`parent`).state.matches(`stack`),h=!m,g=n(`type`)===`loading`?2**53-1:u,_=i(`heightIndex`)*s+i(`heightBefore`),ee={position:`absolute`,pointerEvents:`auto`,"--opacity":`0`,"--remove-delay":`${n(`removeDelay`)}ms`,"--duration":`${g}ms`,"--initial-height":`${d}px`,"--offset":`${_}px`,"--index":n(`index`),"--z-index":i(`zIndex`),"--lift-amount":`calc(var(--lift) * var(--gap))`,"--y":`100%`,"--x":`0`},v=e=>Object.assign(ee,e);return c===`top`?v({top:`0`,"--sign":`-1`,"--y":`-100%`,"--lift":`1`}):c===`bottom`&&v({bottom:`0`,"--sign":`1`,"--y":`100%`,"--lift":`-1`}),l&&(v({"--y":`0`,"--opacity":`1`}),m&&v({"--y":`calc(var(--lift) * var(--offset))`,"--height":`var(--initial-height)`})),t||v({"--opacity":`0`,pointerEvents:`none`}),p&&h&&(v({"--base-scale":`var(--index) * 0.05 + 1`,"--y":`calc(var(--lift-amount) * var(--index))`,"--scale":`calc(-1 * var(--base-scale))`,"--height":`var(--first-height)`}),t||v({"--y":`calc(var(--sign) * 40%)`})),p&&m&&!t&&v({"--y":`calc(var(--lift) * var(--offset) + var(--lift) * -100%)`}),f&&!t&&v({"--y":`calc(var(--lift) * -100%)`}),ee}function ut(e,t){let{computed:n}=e,r={position:`absolute`,inset:`0`,scale:`1 2`,pointerEvents:t?`none`:`auto`};return n(`frontmost`)&&!t&&(e=>Object.assign(r,e))({height:`calc(var(--initial-height) + 80%)`}),r}function dt(){return{position:`absolute`,left:`0`,height:`calc(var(--gap) + 2px)`,bottom:`100%`,width:`100%`}}function ft(e,t){let{id:n,height:r}=t;e.context.set(`heights`,t=>{let i=t.find(e=>e.id===n);if(i)return i.height===r?t:t.map(e=>e.id===n?{...e,height:r}:e);let a=e.context.get(`toasts`),o=e=>a.findIndex(t=>t.id===e),s=o(n),c=t.findIndex(e=>{let t=o(e.id);return t===-1||t>s});return c===-1&&(c=t.length),[...t.slice(0,c),{id:n,height:r},...t.slice(c)]})}var pt,mt;function ht(){return(ht=e((()=>{f(),pt={info:5e3,error:5e3,success:2e3,loading:1/0,warning:5e3,DEFAULT:5e3},mt=e=>typeof e==`string`?{left:e,right:e,bottom:e,top:e}:e})))()}function gt(e,t){let{context:n,prop:r,send:i,refs:a,computed:o}=e;return{getCount(){return n.get(`toasts`).length},getToasts(){return n.get(`toasts`)},getGroupProps(n={}){let{label:s=`Notifications`}=n,{hotkey:c}=r(`store`).attrs,l=c.join(`+`).replace(/Key/g,``).replace(/Digit/g,``),d=o(`placement`),[f,p=`center`]=d.split(`-`);return t.element({...k.group.attrs,dir:r(`dir`),tabIndex:-1,role:`region`,"aria-label":`${s}, ${d} (${l})`,id:Qe(d),"data-placement":d,"data-side":f,"data-align":p,"aria-live":`polite`,"aria-relevant":`additions text`,"aria-atomic":`false`,style:ct(e,d),onMouseEnter(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_ENTER`,placement:d})},onMouseMove(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_ENTER`,placement:d})},onMouseLeave(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_LEAVE`,placement:d})},onFocus(e){i({type:`REGION.FOCUS`,target:e.relatedTarget})},onBlur(e){a.get(`isFocusWithin`)&&!u(e.currentTarget,e.relatedTarget)&&queueMicrotask(()=>i({type:`REGION.BLUR`}))}})},subscribe(e){return r(`store`).subscribe(()=>e(n.get(`toasts`)))}}}function _t(){return(_t=e((()=>{x(),Xe(),j(),ht()})))()}function vt(e,t,n){for(let r=t;r>=0&&r<e.length;r+=n)if(e[r].dataset.state===`open`)return e[r];return null}var yt,bt,xt,St;function Ct(){return(Ct=e((()=>{oe(),Oe(),ge(),fe(),x(),m(),j(),{guards:yt,createMachine:bt}=h(),{and:xt}=yt,St=bt({props({props:e}){return{dir:`ltr`,id:le(),...e,store:e.store}},initialState({prop:e}){return e(`store`).attrs.overlap?`overlap`:`stack`},refs(){return{lastFocusedEl:null,isFocusWithin:!1,isPointerWithin:!1,ignoreMouseTimer:pe.create(),dismissableCleanup:void 0}},context({bindable:e}){return{toasts:e(()=>({defaultValue:[],sync:!0,hash:e=>e.map(e=>e.id).join(`,`)})),heights:e(()=>({defaultValue:[],sync:!0}))}},computed:{count:({context:e})=>e.get(`toasts`).length,overlap:({prop:e})=>e(`store`).attrs.overlap,placement:({prop:e})=>e(`store`).attrs.placement},effects:[`subscribeToStore`,`subscribeToLayout`,`trackDocumentVisibility`,`trackHotKeyPress`],watch({track:e,context:t,action:n}){e([()=>t.hash(`toasts`)],()=>{queueMicrotask(()=>{n([`collapsedIfEmpty`,`setDismissableBranch`,`resetInteractionIfEmpty`])})})},exit:[`clearDismissableBranch`,`clearLastFocusedEl`,`clearMouseEventTimer`],on:{PAUSE_ALL:{actions:[`pauseToasts`]},RESUME_ALL:{actions:[`resumeToasts`]},"DOC.HOTKEY":{actions:[`focusRegionEl`]},"REGION.BLUR":[{guard:xt(`isOverlapping`,`isPointerOut`),target:`overlap`,actions:[`resumeToasts`,`restoreFocusIfPointerOut`]},{guard:`isPointerOut`,target:`stack`,actions:[`resumeToasts`,`restoreFocusIfPointerOut`]},{actions:[`clearFocusWithin`]}],"TOAST.DISMISS":{actions:[`moveFocusOnDismiss`]},"TOAST.REMOVE":{actions:[`removeToast`,`removeHeight`,`ignoreMouseEventsTemporarily`]},"TOAST.PAUSE":{actions:[`pauseToasts`]}},states:{stack:{on:{"REGION.POINTER_LEAVE":[{guard:`isOverlapping`,target:`overlap`,actions:[`clearPointerWithin`,`resumeToasts`]},{actions:[`clearPointerWithin`,`resumeToasts`]}],"REGION.OVERLAP":{target:`overlap`},"REGION.FOCUS":{actions:[`setLastFocusedEl`,`pauseToasts`]},"REGION.POINTER_ENTER":{actions:[`setPointerWithin`,`pauseToasts`]}}},overlap:{on:{"REGION.STACK":{target:`stack`},"REGION.POINTER_ENTER":{target:`stack`,actions:[`setPointerWithin`,`pauseToasts`]},"REGION.POINTER_LEAVE":{actions:[`clearPointerWithin`,`resumeToasts`]},"REGION.FOCUS":{target:`stack`,actions:[`setLastFocusedEl`,`pauseToasts`]}}}},implementations:{guards:{isOverlapping:({computed:e})=>e(`overlap`),isPointerOut:({refs:e})=>!e.get(`isPointerWithin`)},effects:{subscribeToStore({context:e,prop:t}){let n=t(`store`);return e.set(`toasts`,n.getVisibleToasts()),n.subscribe(t=>{t.dismiss?e.set(`toasts`,e=>e.filter(e=>e.id!==t.id)):e.set(`toasts`,e=>{let n=e.findIndex(e=>e.id===t.id);return n===-1?[t,...e]:[...e.slice(0,n),{...e[n],...t},...e.slice(n+1)]})})},subscribeToLayout({prop:e,send:t}){return e(`store`).subscribeLayout(e=>{t({type:e?`REGION.STACK`:`REGION.OVERLAP`})})},trackHotKeyPress({prop:e,send:t}){return _e(document,`keydown`,n=>{let{hotkey:r}=e(`store`).attrs;r.every(e=>n[e]||n.code===e)&&t({type:`DOC.HOTKEY`})},{capture:!0})},trackDocumentVisibility({prop:e,send:t,scope:n}){let{pauseOnPageIdle:r}=e(`store`).attrs;if(!r)return;let i=n.getDoc();return i.visibilityState===`hidden`&&t({type:`PAUSE_ALL`}),_e(i,`visibilitychange`,()=>{t({type:i.visibilityState===`hidden`?`PAUSE_ALL`:`RESUME_ALL`})})}},actions:{setDismissableBranch({refs:e,context:t,computed:n,scope:r}){let i=t.get(`toasts`),a=n(`placement`),o=i.length>0;if(!o){e.get(`dismissableCleanup`)?.(),e.set(`dismissableCleanup`,void 0);return}if(o&&e.get(`dismissableCleanup`))return;let s=De(()=>A(r,a),{defer:!0,getRootNode:r.getRootNode});e.set(`dismissableCleanup`,s)},clearDismissableBranch({refs:e}){e.get(`dismissableCleanup`)?.(),e.set(`dismissableCleanup`,void 0)},focusRegionEl({scope:e,computed:t}){queueMicrotask(()=>{A(e,t(`placement`))?.focus()})},pauseToasts({prop:e}){e(`store`).pause()},resumeToasts({prop:e,refs:t,scope:n,event:r}){r.type===`REGION.BLUR`&&t.set(`isFocusWithin`,!1),!(e(`store`).attrs.pauseOnPageIdle&&n.getDoc().visibilityState===`hidden`||t.get(`isPointerWithin`)||t.get(`isFocusWithin`))&&e(`store`).resume()},removeToast({prop:e,event:t}){e(`store`).remove(t.id)},removeHeight({event:e,context:t}){e?.id!=null&&queueMicrotask(()=>{t.set(`heights`,t=>t.filter(t=>t.id!==e.id))})},collapsedIfEmpty({send:e,computed:t}){!t(`overlap`)||t(`count`)>1||e({type:`REGION.OVERLAP`})},setLastFocusedEl({refs:e,event:t}){e.get(`isFocusWithin`)||(e.set(`isFocusWithin`,!0),e.set(`lastFocusedEl`,t.target??null))},moveFocusOnDismiss({refs:e,scope:t,computed:n,event:r}){if(r.focusVisible){let e=$e(t,n(`placement`)),r=e.findIndex(e=>u(e,t.getActiveElement())),i=vt(e,r+1,1)??vt(e,r-1,-1);if(i){i.focus({preventScroll:!0});return}}let i=e.get(`lastFocusedEl`);r.focusVisible&&i?i.focus({preventScroll:!0}):t.getActiveElement()?.blur()},resetInteractionIfEmpty({refs:e,prop:t,scope:n,computed:r}){r(`count`)>0||(e.set(`isFocusWithin`,!1),e.set(`isPointerWithin`,!1),e.set(`lastFocusedEl`,null),t(`store`).attrs.pauseOnPageIdle&&n.getDoc().visibilityState===`hidden`||t(`store`).resume())},restoreFocusIfPointerOut({refs:e}){e.get(`lastFocusedEl`)&&!e.get(`isPointerWithin`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null),e.set(`isFocusWithin`,!1))},setPointerWithin({refs:e}){e.set(`isPointerWithin`,!0)},clearPointerWithin({refs:e}){e.set(`isPointerWithin`,!1),e.get(`lastFocusedEl`)&&!e.get(`isFocusWithin`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null))},clearFocusWithin({refs:e}){e.set(`isFocusWithin`,!1)},clearLastFocusedEl({refs:e}){e.get(`lastFocusedEl`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null),e.set(`isFocusWithin`,!1))},ignoreMouseEventsTemporarily({refs:e,scope:t,computed:n,send:r}){e.get(`ignoreMouseTimer`).request(()=>_e(t.getDoc(),`pointermove`,i=>{if(!e.get(`isPointerWithin`))return;let a=A(t,n(`placement`));u(a,Ee(i))||r({type:`REGION.POINTER_LEAVE`,placement:n(`placement`)})},{once:!0}))},clearMouseEventTimer({refs:e}){e.get(`ignoreMouseTimer`).cancel()}}}})})))()}function wt(e,t){let{state:n,send:r,prop:i,scope:a,context:o,computed:s}=e,c=ee(Tt,i(`translations`)),l=n.hasTag(`visible`),u=n.hasTag(`paused`),d=o.get(`mounted`),f=o.get(`rendered`),p=s(`frontmost`),m=i(`parent`).computed(`placement`),h=i(`type`),g=i(`parent`).state.matches(`stack`),_=i(`title`),y=i(`description`),b=i(`action`),[te,ne=`center`]=m.split(`-`);return{type:h,title:_,description:y,placement:m,visible:l,paused:u,closable:!!i(`closable`),pause(){i(`parent`).prop(`store`).pause(i(`id`))},resume(){i(`parent`).prop(`store`).resume(i(`id`))},dismiss(){r({type:`DISMISS`,src:`programmatic`})},getRootProps(){return t.element({...k.root.attrs,dir:i(`dir`),id:et(a),"data-state":l?`open`:`closed`,"data-type":h,"data-placement":m,"data-align":ne,"data-side":te,"data-mounted":v(d),"data-paused":v(u),"data-first":v(p),"data-sibling":v(!p),"data-stack":v(g),"data-overlap":v(!g),role:`status`,"aria-atomic":`true`,"aria-describedby":y&&f.description?rt(a):void 0,"aria-labelledby":_&&f.title?nt(a):void 0,tabIndex:0,style:lt(e,l),onKeyDown(e){e.defaultPrevented||e.key==`Escape`&&(r({type:`DISMISS`,src:`keyboard`}),e.preventDefault())}})},getGhostBeforeProps(){return t.element({"data-ghost":`before`,style:ut(e,l)})},getGhostAfterProps(){return t.element({"data-ghost":`after`,style:dt()})},getTitleProps(){return t.element({...k.title.attrs,id:nt(a)})},getDescriptionProps(){return t.element({...k.description.attrs,id:rt(a)})},getActionTriggerProps(){return t.button({...k.actionTrigger.attrs,type:`button`,onClick(e){e.defaultPrevented||(b?.onClick?.(),r({type:`DISMISS`,src:`user`}))}})},getCloseTriggerProps(){return t.button({id:ot(a),...k.closeTrigger.attrs,type:`button`,"aria-label":c?.closeTriggerLabel,onClick(e){e.defaultPrevented||r({type:`DISMISS`,src:`user`})}})}}}var Tt;function Et(){return(Et=e((()=>{f(),b(),Xe(),j(),ht(),Tt={closeTriggerLabel:`Dismiss notification`}})))()}function Dt(e){let t=e.style.height;e.style.height=`auto`;let n=e.offsetHeight;return e.style.height=t,n}var Ot,kt,At;function jt(){return(jt=e((()=>{oe(),x(),fe(),Je(),j(),ht(),{not:Ot,and:kt}=p(),At=ne({props({props:e}){return ce(e,[`id`,`type`,`parent`,`removeDelay`],`toast`),{closable:!0,...e,duration:st(e.duration,e.type)}},initialState({prop:e}){return e(`message`)===`DISMISS`?`dismissing`:e(`type`)===`loading`||e(`duration`)===1/0||e(`paused`)?`visible:persist`:`visible`},context({prop:e,bindable:t}){return{remainingTime:t(()=>({defaultValue:st(e(`duration`),e(`type`))})),createdAt:t(()=>({defaultValue:Date.now()})),mounted:t(()=>({defaultValue:!1})),initialHeight:t(()=>({defaultValue:0})),rendered:t(()=>({defaultValue:{title:!0,description:!0}}))}},refs(){return{closeTimerStartTime:Date.now(),lastCloseStartTimerStartTime:0}},computed:{zIndex:({prop:e})=>{let t=e(`parent`).context.get(`toasts`),n=t.findIndex(t=>t.id===e(`id`));return t.length-n},height:({prop:e})=>e(`parent`).context.get(`heights`).find(t=>t.id===e(`id`))?.height??0,heightIndex:({prop:e})=>e(`parent`).context.get(`heights`).findIndex(t=>t.id===e(`id`)),frontmost:({prop:e})=>e(`index`)===0,heightBefore:({prop:e})=>{let t=e(`parent`).context.get(`heights`),n=t.findIndex(t=>t.id===e(`id`));return t.reduce((e,t,r)=>r>=n?e:e+t.height,0)},shouldPersist:({prop:e})=>e(`type`)===`loading`||e(`duration`)===1/0},watch({track:e,prop:t,send:n}){e([()=>t(`message`)],()=>{let e=t(`message`);e&&n({type:e,src:`programmatic`})}),e([()=>t(`paused`)],()=>{n({type:t(`paused`)?`PAUSE`:`RESUME`})}),e([()=>t(`type`),()=>t(`duration`)],()=>{n({type:`UPDATE`})})},on:{UPDATE:[{guard:kt(`isVisible`,`shouldPause`),target:`visible:persist`,actions:[`resetCloseTimer`]},{guard:`isVisible`,target:`visible:updating`,actions:[`resetCloseTimer`]}],MEASURE:{actions:[`measureHeight`]}},entry:[`setMounted`,`measureHeight`,`invokeOnVisible`],effects:[`trackContent`],states:{"visible:updating":{tags:[`visible`,`updating`],effects:[`waitForNextTick`],on:{DISMISS:{target:`dismissing`},PAUSE:{target:`visible:persist`},SHOW:{target:`visible`}}},"visible:persist":{tags:[`visible`,`paused`],on:{RESUME:{guard:Ot(`shouldPause`),target:`visible`,actions:[`setCloseTimer`]},DISMISS:{target:`dismissing`}}},visible:{tags:[`visible`],effects:[`waitForDuration`],on:{DISMISS:{target:`dismissing`},PAUSE:{target:`visible:persist`,actions:[`syncRemainingTime`]}}},dismissing:{entry:[`notifyParentOfDismiss`,`invokeOnDismiss`],effects:[`waitForRemoveDelay`],on:{REMOVE:{target:`unmounted`,actions:[`notifyParentToRemove`]}}},unmounted:{entry:[`invokeOnUnmount`]}},implementations:{effects:{waitForRemoveDelay({prop:e,send:t}){return Ge(()=>{t({type:`REMOVE`,src:`timer`})},e(`removeDelay`))},waitForDuration({send:e,context:t,computed:n}){if(!n(`shouldPersist`))return Ge(()=>{e({type:`DISMISS`,src:`timer`})},t.get(`remainingTime`))},waitForNextTick({send:e}){return Ge(()=>{e({type:`SHOW`,src:`timer`})},0)},trackContent({scope:e,prop:t,context:n,state:r}){return de(()=>{let i=tt(e);if(!i)return;let a=()=>{if(!r.hasTag(`visible`)||!i.isConnected)return;let e=Dt(i);ft(t(`parent`),{id:t(`id`),height:e})},o=()=>{n.set(`rendered`,{title:!!it(e),description:!!at(e)})};return o(),Ze(i,{filter:e=>!e.hasAttribute(`data-ghost`),onChange:a,onMutate:o})})}},guards:{isVisible:({state:e})=>e.hasTag(`visible`),shouldPause:({computed:e,prop:t})=>e(`shouldPersist`)||!!t(`paused`)},actions:{setMounted({context:e}){de(()=>{e.set(`mounted`,!0)})},measureHeight({scope:e,prop:t,context:n}){queueMicrotask(()=>{let r=tt(e);if(!r)return;let i=Dt(r);n.set(`initialHeight`,i);let a={id:t(`id`),height:i};ft(t(`parent`),a)})},setCloseTimer({refs:e}){e.set(`closeTimerStartTime`,Date.now())},resetCloseTimer({context:e,refs:t,prop:n}){t.set(`closeTimerStartTime`,Date.now()),e.set(`remainingTime`,st(n(`duration`),n(`type`)))},syncRemainingTime({context:e,refs:t}){e.set(`remainingTime`,e=>{let n=t.get(`closeTimerStartTime`),r=Date.now()-n;return t.set(`lastCloseStartTimerStartTime`,Date.now()),e-r})},notifyParentToRemove({prop:e}){e(`parent`).send({type:`TOAST.REMOVE`,id:e(`id`)})},notifyParentOfDismiss({prop:e,scope:t}){let n=t.getActiveElement();if(!u(tt(t),n))return;let r=!!n?.matches(`:focus-visible`);e(`parent`).send({type:`TOAST.DISMISS`,focusVisible:r})},invokeOnDismiss({prop:e,event:t}){e(`parent`).prop(`store`).dismiss(e(`id`)),e(`onStatusChange`)?.({status:`dismissing`,src:t.src})},invokeOnUnmount({prop:e}){e(`onStatusChange`)?.({status:`unmounted`})},invokeOnVisible({prop:e}){e(`onStatusChange`)?.({status:`visible`})}}}})})))()}function Mt(e={}){let t=Nt(e,{placement:`bottom`,overlap:!1,max:24,gap:16,offsets:`1rem`,hotkey:[`altKey`,`KeyT`],removeDelay:200,pauseOnPageIdle:!0}),n=[],r=[],i=new Set,a=[],s=new Set,c=new Map,u=!1,d=new Set,f=e=>{n.push(e);let t=!0;return()=>{if(!t)return;t=!1;let r=n.indexOf(e);r!==-1&&n.splice(r,1)}},p=[],m=!1,h=(...e)=>{if(p.push(...e),m)return e;m=!0;try{for(;p.length;){let e=p.shift();n.slice().forEach(t=>t(e))}}finally{m=!1,p.length=0}return e},g=e=>{r.length>=t.max?a.push(e):(r.unshift(e),h(e))},ee=()=>{for(a=Pt(a);a.length>0&&r.length<t.max;){let e=a.shift();if(e){let t={...e,paused:u||e.paused};r.unshift(t),h(t)}}},v=e=>{let n=e.id??`toast:${le()}`,o=r.find(e=>e.id===n)??a.find(e=>e.id===n);if(s.has(n))return n;if(l(e,`promise`)&&e.promise!==o?.promise&&c.delete(n),i.delete(n),o){let t={...o,...e,id:n};r.some(e=>e.id===n)?(r=r.map(e=>e.id===n?t:e),h(t)):a=a.map(e=>e.id===n?t:e)}else{let r={id:n,duration:t.duration,removeDelay:t.removeDelay,type:N,...e,gap:t.gap,paused:u},i=r.priority??P(r.type,!!r.action);g({...r,priority:i})}return n},y=e=>{let t=e==null?[...r,...a]:[...r,...a].filter(t=>t.id===e),n=e==null?r:r.filter(t=>t.id===e);return t.forEach(e=>{i.add(e.id),s.delete(e.id),c.delete(e.id)}),e!=null&&i.add(e),r=e==null?[]:r.filter(t=>t.id!==e),a=e==null?[]:a.filter(t=>t.id!==e),e!=null&&!n.length&&h({id:e,dismiss:!0}),h(...n.map(e=>({id:e.id,dismiss:!0}))),ee(),e},b=e=>v({...e,type:`error`}),te=e=>v({...e,type:`success`}),ne=e=>v({...e,type:`info`}),re=e=>v({...e,type:`warning`}),ie=e=>v({...e,type:`loading`}),ae=()=>r.filter(e=>!i.has(e.id)),oe=()=>r.length,se=(e,t,n={})=>{if(!t||!t.loading){_(`[zag-js > toast] toaster.promise() requires at least a 'loading' option to be specified`);return}let i=v({...n,...t.loading,promise:e,type:`loading`}),l=Symbol();(r.find(e=>e.id===i)??a.find(e=>e.id===i))?.promise===e&&!s.has(i)&&c.set(i,l);let u=()=>c.get(i)===l&&!s.has(i),d=!0,f,p=o(e).then(async e=>{if(f=[`resolve`,e],Ft(e)&&!e.ok){d=!1;let r=o(t.error,`HTTP Error! status: ${e.status}`);u()&&v({...n,...r,id:i,type:`error`})}else if(t.success!==void 0){d=!1;let r=o(t.success,e);u()&&v({...n,...r,id:i,type:r.type??`success`})}}).catch(async e=>{if(f=[`reject`,e],t.error!==void 0){d=!1;let r=o(t.error,e);u()&&v({...n,...r,id:i,type:`error`})}}).finally(()=>{d&&u()&&y(i),c.get(i)===l&&c.delete(i),t.finally?.()});return{id:i,unwrap:()=>new Promise((e,t)=>p.then(()=>f[0]===`reject`?t(f[1]):e(f[1])).catch(t))}},x=(e,t)=>{if(s.has(e))return e;if(typeof t!=`function`)return v({...t,id:e});let n=r.find(t=>t.id===e)??a.find(t=>t.id===e);if(!n)return e;let i={...t({...n}),id:e};return s.has(e)?e:r.some(t=>t.id===e)||a.some(t=>t.id===e)?v(i):e},ce=(e,t)=>{let n=[];r=r.map(r=>{if(t!=null&&r.id!==t||s.has(r.id))return r;let i={...r,...e};return n.push(i),i}),a=a.map(n=>t==null||n.id===t?{...n,...e}:n),h(...n)};return{attrs:t,subscribe:f,create:v,update:x,remove:y,dismiss:e=>{let t=a.filter(t=>e==null||t.id===e);a=a.filter(t=>e!=null&&t.id!==e),t.forEach(e=>{i.add(e.id),c.delete(e.id)});let n=r.filter(t=>(e==null||t.id===e)&&!s.has(t.id));n.forEach(e=>s.add(e.id)),r=r.map(e=>s.has(e.id)?{...e,message:`DISMISS`}:e),h(...n.map(e=>({...e,message:`DISMISS`})))},error:b,success:te,info:ne,warning:re,loading:ie,getVisibleToasts:ae,getCount:oe,promise:se,pause:e=>{e??(u=!0),ce({paused:!0},e)},resume:e=>{e??(u=!1),ce({paused:!1},e)},isVisible:e=>!i.has(e)&&!!r.find(t=>t.id===e),isDismissed:e=>i.has(e),expand:()=>d.forEach(e=>e(!0)),collapse:()=>d.forEach(e=>e(!1)),subscribeLayout:e=>(d.add(e),()=>{d.delete(e)})}}var Nt,M,N,P,Pt,Ft;function It(){return(It=e((()=>{b(),s(),m(),Nt=(e,t)=>({...t,...re(e)}),M={error:[1,2],warning:[3,6],loading:[4,5],success:[5,7],info:[6,8]},N=`info`,P=(e,t)=>{let n=e??N,[r,i]=l(M,n)?M[n]:M[N];return t?r:i},Pt=e=>e.sort((e,t)=>(e.priority??P(e.type,!!e.action))-(t.priority??P(t.type,!!t.action))),Ft=e=>e&&typeof e==`object`&&`ok`in e&&typeof e.ok==`boolean`&&`status`in e&&typeof e.status==`number`})))()}var Lt;function Rt(){return(Rt=e((()=>{_t(),Ct(),Xe(),Et(),jt(),It(),Lt={connect:gt,machine:St}})))()}var zt;function Bt(){return(Bt=e((()=>{Rt(),zt=e=>Mt(e)})))()}var Vt,F;function I(){return(I=e((()=>{be(),[Vt,F]=Ce({name:`ToastContext`,hookName:`useToastContext`,providerName:`<ToastProvider />`})})))()}var Ht,Ut,Wt;function Gt(){return(Gt=e((()=>{S(),I(),Ht=t(),w(),Ut=n(),Wt=(0,Ht.forwardRef)((e,t)=>{let n=F(),r=C(n.getActionTriggerProps(),e);return(0,Ut.jsx)(T.button,{...r,ref:t})}),Wt.displayName=`ToastActionTrigger`})))()}var Kt,qt,Jt;function Yt(){return(Yt=e((()=>{S(),I(),Kt=t(),w(),qt=n(),Jt=(0,Kt.forwardRef)((e,t)=>{let n=F(),r=C(n.getCloseTriggerProps(),e);return(0,qt.jsx)(T.button,{...r,ref:t})}),Jt.displayName=`ToastCloseTrigger`})))()}var Xt;function Zt(){return(Zt=e((()=>{I(),Xt=e=>e.children(F())})))()}var Qt,$t,en;function tn(){return(tn=e((()=>{S(),I(),Qt=t(),w(),$t=n(),en=(0,Qt.forwardRef)((e,t)=>{let n=F(),r=C(n.getDescriptionProps(),e);return(0,$t.jsx)(T.div,{...r,ref:t})}),en.displayName=`ToastDescription`})))()}var L,R,nn;function rn(){return(rn=e((()=>{S(),I(),L=t(),w(),R=n(),nn=(0,L.forwardRef)((e,t)=>{let{asChild:n,children:r,...i}=e,a=F(),o=C(a.getRootProps(),i),s=e=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{...a.getGhostBeforeProps()}),e,(0,R.jsx)(`div`,{...a.getGhostAfterProps()})]}),c=()=>(0,L.isValidElement)(r)?(0,L.cloneElement)(r,void 0,s(r.props.children)):r;return(0,R.jsx)(T.div,{...o,asChild:n,ref:t,children:n?c():s(r)})}),nn.displayName=`ToastRoot`})))()}var an,on,sn;function cn(){return(cn=e((()=>{S(),I(),an=t(),w(),on=n(),sn=(0,an.forwardRef)((e,t)=>{let n=F(),r=C(n.getTitleProps(),e);return(0,on.jsx)(T.div,{...r,ref:t})}),sn.displayName=`ToastTitle`})))()}var ln,un,dn,fn;function pn(){return(pn=e((()=>{S(),ve(),we(),I(),Rt(),ln=t(),w(),se(),ae(),un=n(),dn=(0,ln.forwardRef)((e,t)=>{let{toaster:n,children:r,label:i,dir:a,getRootNode:o,...s}=e,c=ye(),l=Se(),u=y(Lt.machine,{store:n,id:(0,ln.useId)(),dir:a??c?.dir,getRootNode:o??l?.getRootNode}),d=Lt.connect(u,te),f=C(d.getGroupProps({label:i}),s);return(0,un.jsx)(T.div,{...f,ref:t,children:d.getToasts().map((e,t)=>(0,un.jsx)(fn,{value:e,parent:u,index:t,children:e=>r(e)},e.id))})}),dn.displayName=`Toaster`,fn=e=>{let t=Se(),n={...e.value,parent:e.parent,index:e.index,getRootNode:t.getRootNode},r=wt(y(At,{...n}),te);return(0,un.jsx)(Vt,{value:r,children:e.children(e.value)})},fn.displayName=`ToastActor`})))()}var z;function mn(){return(mn=e((()=>{xe(),Gt(),Yt(),Zt(),tn(),rn(),cn(),z=Te({ActionTrigger:()=>Wt,CloseTrigger:()=>Jt,Context:()=>Xt,Description:()=>en,Root:()=>nn,Title:()=>sn})})))()}var hn,gn,_n;function vn(){return(vn=e((()=>{hn=`_actions_ucmh5_46`,gn=`_icon_ucmh5_65`,_n={"slide-in":`_slide-in_ucmh5_1`,"fade-out":`_fade-out_ucmh5_1`,actions:hn,icon:gn}})))()}function yn(e){return(0,B.jsx)(Sn,{...e})}var bn,B,xn,Sn,Cn;function wn(){return(wn=e((()=>{bn=r(),mn(),pn(),vn(),Ne(),a(),Me(),B=n(),xn={success:`check_circle`,info:`info`,warning:`error`,error:`cancel`},Sn=e=>{let t=(0,bn.c)(19),{style:n,className:r,variant:a,title:o,description:s,onDismiss:c,actions:l}=e,u=xn[a===void 0?`info`:a],d;t[0]===u?d=t[1]:(d=(0,B.jsx)(i,{icon:u,size:`small`,filled:!0,className:_n.icon}),t[0]=u,t[1]=d);let f;t[2]===o?f=t[3]:(f=o&&(0,B.jsx)(je,{variant:`body-sm-md`,asChild:!0,children:(0,B.jsx)(z.Title,{children:o})}),t[2]=o,t[3]=f);let p;t[4]===s?p=t[5]:(p=s&&(0,B.jsx)(je,{variant:`body-sm-reg`,asChild:!0,children:(0,B.jsx)(z.Description,{children:s})}),t[4]=s,t[5]=p);let m;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,B.jsx)(Pe,{variant:`tertiary`,color:`light`,size:`small`,icon:`close`}),t[6]=m):m=t[6];let h;t[7]===c?h=t[8]:(h=(0,B.jsx)(z.CloseTrigger,{onClick:c,asChild:!0,children:m}),t[7]=c,t[8]=h);let g;t[9]===l?g=t[10]:(g=l&&(0,B.jsx)(`div`,{className:_n.actions,children:l}),t[9]=l,t[10]=g);let _;return t[11]!==r||t[12]!==n||t[13]!==d||t[14]!==f||t[15]!==p||t[16]!==h||t[17]!==g?(_=(0,B.jsxs)(z.Root,{style:n,className:r,children:[d,f,p,h,g]}),t[11]=r,t[12]=n,t[13]=d,t[14]=f,t[15]=p,t[16]=h,t[17]=g,t[18]=_):_=t[18],_},Cn=e=>{let t=(0,bn.c)(2),{toaster:n}=e,r;return t[0]===n?r=t[1]:(r=(0,B.jsx)(dn,{toaster:n,children:yn}),t[0]=n,t[1]=r),r},Sn.displayName=`DsToast`,Cn.displayName=`DsToastGroup`})))()}var Tn,En,Dn,On,kn,V,H;function An(){return(An=e((()=>{Tn=r(),En=t(),Bt(),wn(),Dn=n(),On=(0,En.createContext)(null),kn=e=>t=>e.create({...t,type:t.variant,duration:t.persistent?1/0:t.duration||6e3}),V=e=>{let t=(0,Tn.c)(17),{children:n,max:r}=e,i=r===void 0?3:r,a,o;t[0]===i?(a=t[1],o=t[2]):(o=zt({placement:`top`,gap:24,max:i}),a=kn(o),t[0]=i,t[1]=a,t[2]=o);let s;t[3]===o?s=t[4]:(s=()=>o.dismiss(),t[3]=o,t[4]=s);let c;t[5]!==a||t[6]!==s||t[7]!==o.dismiss||t[8]!==o.getCount||t[9]!==o.getVisibleToasts?(c={createToast:a,dismissToast:o.dismiss,dismissAllToasts:s,getToasts:o.getVisibleToasts,getToastsCount:o.getCount},t[5]=a,t[6]=s,t[7]=o.dismiss,t[8]=o.getCount,t[9]=o.getVisibleToasts,t[10]=c):c=t[10];let l=c,u;t[11]===o?u=t[12]:(u=(0,Dn.jsx)(Cn,{toaster:o}),t[11]=o,t[12]=u);let d;return t[13]!==n||t[14]!==l||t[15]!==u?(d=(0,Dn.jsxs)(On.Provider,{value:l,children:[n,u]}),t[13]=n,t[14]=l,t[15]=u,t[16]=d):d=t[16],d},H=()=>{let e=(0,En.useContext)(On);if(!e)throw Error(`useToast must be used within a ToastProvider`);return e},V.displayName=`DsToastProvider`})))()}var jn;function Mn(){return(Mn=e((()=>{jn=[`info`,`success`,`warning`,`error`]})))()}var U,W,Nn,G,K,q,J,Y,X,Z,Q,$,Pn;function Fn(){return(Fn=e((()=>{U=r(),wn(),An(),Mn(),Le(),Ne(),Fe(),W=n(),Nn={title:`Components/Toast`,component:Sn,parameters:{layout:`centered`,docs:{description:{component:"Temporary, non-blocking messages surfaced through `DsToastProvider` and the `useToaster` hook. Toasts are created imperatively from an event handler, so every example wraps a trigger in the provider."}}},argTypes:{variant:{control:{type:`select`},options:jn}}},G={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(E,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`success`,title:`Success!`,description:`Your action was completed successfully.`}),children:`Show success toast`}),e[0]=t,e[1]=n),n},{})})},K={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(E,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`info`,title:`Information`,description:`Here is some helpful information for you.`}),children:`Show info toast`}),e[0]=t,e[1]=n),n},{})})},q={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(E,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,title:`Warning`,description:`Please be aware of this important notice.`}),children:`Show warning toast`}),e[0]=t,e[1]=n),n},{})})},J={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(E,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`error`,title:`Error`,description:`Something went wrong. Please try again.`,persistent:!0}),children:`Show error toast`}),e[0]=t,e[1]=n),n},{})})},Y={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(E,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,description:`Something went wrong. Please try again.`}),children:`Show toast without title`}),e[0]=t,e[1]=n),n},{})})},X={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(3),{createToast:t,dismissToast:n}=H(),r;return e[0]!==t||e[1]!==n?(r=(0,W.jsx)(E,{design:`v1.2`,variant:`filled`,onClick:()=>{let e=t({variant:`warning`,title:`File upload failed`,description:`Your file could not be uploaded.`,persistent:!0,actions:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Pe,{variant:`tertiary`,color:`light`,size:`small`,onClick:()=>n(e),children:`Cancel`}),(0,W.jsx)(Pe,{variant:`secondary`,color:`light`,size:`small`,onClick:()=>n(e),children:`Retry`})]})})},children:`Show toast with actions`}),e[0]=t,e[1]=n,e[2]=r):r=e[2],r},{})})},Z={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(E,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,title:`Important notice`,description:`This is a longer message that demonstrates how the toast handles extended content. `.repeat(30),persistent:!0}),children:`Show long content toast`}),e[0]=t,e[1]=n),n},{})})},Q={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(E,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`info`,title:`Sync in progress`,description:`This toast stays until you close it.`,persistent:!0}),children:`Show persistent toast`}),e[0]=t,e[1]=n),n},{})})},$={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(9),{createToast:t,dismissAllToasts:n}=H(),r;e[0]===t?r=e[1]:(r=()=>{t({variant:`success`,title:`First toast`,description:`This is the first message.`}),t({variant:`info`,title:`Second toast`,description:`This is the second message.`}),t({variant:`warning`,title:`Third toast`,description:`This is the third message.`})},e[0]=t,e[1]=r);let i=r,a;e[2]===i?a=e[3]:(a=(0,W.jsx)(E,{design:`v1.2`,variant:`filled`,onClick:i,children:`Show multiple toasts`}),e[2]=i,e[3]=a);let o;e[4]===n?o=e[5]:(o=(0,W.jsx)(E,{design:`v1.2`,variant:`ghost`,onClick:()=>n(),children:`Dismiss all`}),e[4]=n,e[5]=o);let s;return e[6]!==a||e[7]!==o?(s=(0,W.jsxs)(Ie,{direction:`row`,gap:`var(--xs)`,children:[a,o]}),e[6]=a,e[7]=o,e[8]=s):s=e[8],s},{})})},Pn=[`Success`,`Info`,`Warning`,`Error`,`NoTitle`,`WithActions`,`LongContent`,`Persistent`,`MultipleToasts`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'success',
        title: 'Success!',
        description: 'Your action was completed successfully.'
      })}>
                    Show success toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...G.parameters?.docs?.source},description:{story:`Confirms an action completed. Auto-dismisses after the default duration.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'info',
        title: 'Information',
        description: 'Here is some helpful information for you.'
      })}>
                    Show info toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...K.parameters?.docs?.source},description:{story:`Neutral, informational message.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'warning',
        title: 'Warning',
        description: 'Please be aware of this important notice.'
      })}>
                    Show warning toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...q.parameters?.docs?.source},description:{story:`Draws attention to something that may need action but is not an error.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'error',
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        persistent: true
      })}>
                    Show error toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...J.parameters?.docs?.source},description:{story:`Reports a failure. Errors are usually persistent so the user can read and act on them.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'warning',
        description: 'Something went wrong. Please try again.'
      })}>
                    Show toast without title
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"Omit `title` for a compact, single-line toast that shows only the description.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast,
        dismissToast
      } = useToaster();
      const showToast = () => {
        const id = createToast({
          variant: 'warning',
          title: 'File upload failed',
          description: 'Your file could not be uploaded.',
          persistent: true,
          actions: <>
                            <DsButtonV3 variant="tertiary" color="light" size="small" onClick={() => dismissToast(id)}>
                                Cancel
                            </DsButtonV3>
                            <DsButtonV3 variant="secondary" color="light" size="small" onClick={() => dismissToast(id)}>
                                Retry
                            </DsButtonV3>
                        </>
        });
      };
      return <DsButton design="v1.2" variant="filled" onClick={showToast}>
                    Show toast with actions
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...X.parameters?.docs?.source},description:{story:'Pass up to two small `color="light"` `DsButtonV3` actions: tertiary first, secondary last.\nHandlers usually call `dismissToast(id)`; pair actions with `persistent` so the toast waits.',...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'warning',
        title: 'Important notice',
        description: 'This is a longer message that demonstrates how the toast handles extended content. '.repeat(30),
        persistent: true
      })}>
                    Show long content toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`Long descriptions scroll once the toast reaches its 400px max height.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'info',
        title: 'Sync in progress',
        description: 'This toast stays until you close it.',
        persistent: true
      })}>
                    Show persistent toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...Q.parameters?.docs?.source},description:{story:"Set `persistent` to keep a toast open until the user dismisses it. Persistent toasts never\nauto-dismiss, so they cannot also set `duration`.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast,
        dismissAllToasts
      } = useToaster();
      const showToasts = () => {
        createToast({
          variant: 'success',
          title: 'First toast',
          description: 'This is the first message.'
        });
        createToast({
          variant: 'info',
          title: 'Second toast',
          description: 'This is the second message.'
        });
        createToast({
          variant: 'warning',
          title: 'Third toast',
          description: 'This is the third message.'
        });
      };
      return <DsStack direction="row" gap="var(--xs)">
                    <DsButton design="v1.2" variant="filled" onClick={showToasts}>
                        Show multiple toasts
                    </DsButton>
                    <DsButton design="v1.2" variant="ghost" onClick={() => dismissAllToasts()}>
                        Dismiss all
                    </DsButton>
                </DsStack>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...$.parameters?.docs?.source},description:{story:"Toasts stack up to the provider's `max` (default 3). `dismissAllToasts` clears them at once.",...$.parameters?.docs?.description}}}})))()}Fn();export{J as Error,K as Info,Z as LongContent,$ as MultipleToasts,Y as NoTitle,Q as Persistent,G as Success,q as Warning,X as WithActions,Pn as __namedExportsOrder,Nn as default};