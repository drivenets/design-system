import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-BuB_bqSL.js";import{n as r}from"./classnames-DavMFNTn.js";import{n as i,t as a}from"./ds-icon-VntMpOdv.js";import{C as o,J as s,S as c,_t as l,a as u,c as d,et as f,f as p,ft as m,i as h,m as g,n as _,o as v,p as y,pt as ee,r as te,s as ne,t as re,u as ie,ut as ae,vt as oe,y as se}from"./normalize-props-BcfNQKGE.js";import{a as ce,n as le,t as ue}from"./raf-4Vx82Ja0.js";import{n as de,t as fe}from"./dismissable-layer-Bqwgfrke.js";import{C as pe,_ as me,a as he,c as b,g as x,h as S,i as ge,m as _e,n as ve,o as ye,p as be,r as xe,s as C,t as Se}from"./runtime-Bx_NJxHs.js";import{n as Ce,t as we}from"./ds-typography-C77dEuK2.js";import{n as Te,t as Ee}from"./ds-stack-DqnfJsha.js";import{n as w,t as De}from"./ds-button-BsfKlLRy.js";var Oe,T,ke,E,Ae,je,Me;function Ne(){return(Ne=e((()=>{Oe=Object.defineProperty,T=e=>{throw TypeError(e)},ke=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t,n)=>ke(e,typeof t==`symbol`?t:t+``,n),Ae=(e,t,n)=>t.has(e)||T(`Cannot `+n),je=(e,t,n)=>(Ae(e,t,`read from private field`),n?n.call(e):t.get(e)),Me=(e,t,n)=>t.has(e)?T(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n)})))()}function Pe(e,t){let n=new Fe(({deltaMs:n})=>{if(n>=t)return e(),!1});return n.start(),()=>n.stop()}var D,O,Fe;function Ie(){return(Ie=e((()=>{Ne(),D=()=>performance.now(),Fe=class{constructor(e){E(this,`onTick`,e),E(this,`frameId`,null),E(this,`pausedAtMs`,null),E(this,`context`),E(this,`cancelFrame`,()=>{this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}),E(this,`setStartMs`,e=>{this.context.startMs=e}),E(this,`start`,()=>{if(this.frameId!==null)return;let e=D();this.pausedAtMs===null?this.context.startMs=e:(this.context.startMs+=e-this.pausedAtMs,this.pausedAtMs=null),this.frameId=requestAnimationFrame(je(this,O))}),E(this,`pause`,()=>{this.frameId!==null&&(this.cancelFrame(),this.pausedAtMs=D())}),E(this,`stop`,()=>{this.frameId!==null&&(this.cancelFrame(),this.pausedAtMs=null)}),Me(this,O,e=>{if(this.context.now=e,this.context.deltaMs=e-this.context.startMs,this.onTick(this.context)===!1){this.stop();return}this.frameId=requestAnimationFrame(je(this,O))}),this.context={now:0,startMs:D(),deltaMs:0}}get elapsedMs(){return this.pausedAtMs===null?D()-this.context.startMs:this.pausedAtMs-this.context.startMs}},O=new WeakMap})))()}var Le,k;function Re(){return(Re=e((()=>{oe(),Le=l(`toast`).parts(`group`,`root`,`title`,`description`,`actionTrigger`,`closeTrigger`),k=Le.build()})))()}var ze,Be,Ve,He,Ue,We,Ge;function A(){return(A=e((()=>{ze=e=>`toast-group:${e}`,Be=(e,t)=>e.getById(`toast-group:${t}`),Ve=e=>`toast:${e.id}`,He=e=>e.getById(Ve(e)),Ue=e=>`toast:${e.id}:title`,We=e=>`toast:${e.id}:description`,Ge=e=>`toast${e.id}:close`})))()}function Ke(e,t){return e??Ze[t]??Ze.DEFAULT}function qe(e,t){let{prop:n,computed:r,context:i}=e,{offsets:a,gap:o}=n(`store`).attrs,s=i.get(`heights`),c=Qe(a),l=n(`dir`)===`rtl`,u=t.replace(`-start`,l?`-right`:`-left`).replace(`-end`,l?`-left`:`-right`),d=u.includes(`right`),f=u.includes(`left`),p={position:`fixed`,pointerEvents:r(`count`)>0?void 0:`none`,display:`flex`,flexDirection:`column`,"--gap":`${o}px`,"--first-height":`${s[0]?.height||0}px`,"--viewport-offset-left":c.left,"--viewport-offset-right":c.right,"--viewport-offset-top":c.top,"--viewport-offset-bottom":c.bottom,zIndex:ae},m=`center`;return d&&(m=`flex-end`),f&&(m=`flex-start`),p.alignItems=m,u.includes(`top`)&&(p.top=`max(env(safe-area-inset-top, 0px), ${c.top})`),u.includes(`bottom`)&&(p.bottom=`max(env(safe-area-inset-bottom, 0px), ${c.bottom})`),u.includes(`left`)||(p.insetInlineEnd=`calc(env(safe-area-inset-right, 0px) + ${c.right})`),u.includes(`right`)||(p.insetInlineStart=`calc(env(safe-area-inset-left, 0px) + ${c.left})`),p}function Je(e,t){let{prop:n,context:r,computed:i}=e,a=n(`parent`),o=a.computed(`placement`),{gap:s}=a.prop(`store`).attrs,[c]=o.split(`-`),l=r.get(`mounted`),u=r.get(`remainingTime`),d=i(`height`),f=i(`frontmost`),p=!f,m=!n(`stacked`),h=n(`stacked`),g=n(`type`)===`loading`?2**53-1:u,_=i(`heightIndex`)*s+i(`heightBefore`),v={position:`absolute`,pointerEvents:`auto`,"--opacity":`0`,"--remove-delay":`${n(`removeDelay`)}ms`,"--duration":`${g}ms`,"--initial-height":`${d}px`,"--offset":`${_}px`,"--index":n(`index`),"--z-index":i(`zIndex`),"--lift-amount":`calc(var(--lift) * var(--gap))`,"--y":`100%`,"--x":`0`},y=e=>Object.assign(v,e);return c===`top`?y({top:`0`,"--sign":`-1`,"--y":`-100%`,"--lift":`1`}):c===`bottom`&&y({bottom:`0`,"--sign":`1`,"--y":`100%`,"--lift":`-1`}),l&&(y({"--y":`0`,"--opacity":`1`}),h&&y({"--y":`calc(var(--lift) * var(--offset))`,"--height":`var(--initial-height)`})),t||y({"--opacity":`0`,pointerEvents:`none`}),p&&m&&(y({"--base-scale":`var(--index) * 0.05 + 1`,"--y":`calc(var(--lift-amount) * var(--index))`,"--scale":`calc(-1 * var(--base-scale))`,"--height":`var(--first-height)`}),t||y({"--y":`calc(var(--sign) * 40%)`})),p&&h&&!t&&y({"--y":`calc(var(--lift) * var(--offset) + var(--lift) * -100%)`}),f&&!t&&y({"--y":`calc(var(--lift) * -100%)`}),v}function Ye(e,t){let{computed:n}=e,r={position:`absolute`,inset:`0`,scale:`1 2`,pointerEvents:t?`none`:`auto`};return n(`frontmost`)&&!t&&(e=>Object.assign(r,e))({height:`calc(var(--initial-height) + 80%)`}),r}function Xe(){return{position:`absolute`,left:`0`,height:`calc(var(--gap) + 2px)`,bottom:`100%`,width:`100%`}}var Ze,Qe;function j(){return(j=e((()=>{ee(),Ze={info:5e3,error:5e3,success:2e3,loading:1/0,warning:5e3,DEFAULT:5e3},Qe=e=>typeof e==`string`?{left:e,right:e,bottom:e,top:e}:e})))()}function $e(e,t){let{context:n,prop:r,send:i,refs:a,computed:o}=e;return{getCount(){return n.get(`toasts`).length},getToasts(){return n.get(`toasts`)},getGroupProps(n={}){let{label:c=`Notifications`}=n,{hotkey:l}=r(`store`).attrs,u=l.join(`+`).replace(/Key/g,``).replace(/Digit/g,``),d=o(`placement`),[f,p=`center`]=d.split(`-`);return t.element({...k.group.attrs,dir:r(`dir`),tabIndex:-1,role:`region`,"aria-label":`${c}, ${d} (${u})`,id:ze(d),"data-placement":d,"data-side":f,"data-align":p,"aria-live":`polite`,"aria-relevant":`additions text`,"aria-atomic":`false`,style:qe(e,d),onMouseEnter(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_ENTER`,placement:d})},onMouseMove(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_ENTER`,placement:d})},onMouseLeave(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_LEAVE`,placement:d})},onFocus(e){i({type:`REGION.FOCUS`,target:e.relatedTarget})},onBlur(e){a.get(`isFocusWithin`)&&!s(e.currentTarget,e.relatedTarget)&&queueMicrotask(()=>i({type:`REGION.BLUR`}))}})},subscribe(e){return r(`store`).subscribe(()=>e(n.get(`toasts`)))}}}function et(){return(et=e((()=>{f(),Re(),A(),j()})))()}var tt,nt,rt,it;function at(){return(at=e((()=>{ne(),fe(),pe(),le(),se(),A(),{guards:tt,createMachine:nt}=d(),{and:rt}=tt,it=nt({props({props:e}){return{dir:`ltr`,id:o(),...e,store:e.store}},initialState({prop:e}){return e(`store`).attrs.overlap?`overlap`:`stack`},refs(){return{lastFocusedEl:null,isFocusWithin:!1,isPointerWithin:!1,ignoreMouseTimer:ue.create(),dismissableCleanup:void 0}},context({bindable:e}){return{toasts:e(()=>({defaultValue:[],sync:!0,hash:e=>e.map(e=>e.id).join(`,`)})),heights:e(()=>({defaultValue:[],sync:!0}))}},computed:{count:({context:e})=>e.get(`toasts`).length,overlap:({prop:e})=>e(`store`).attrs.overlap,placement:({prop:e})=>e(`store`).attrs.placement},effects:[`subscribeToStore`,`trackDocumentVisibility`,`trackHotKeyPress`],watch({track:e,context:t,action:n}){e([()=>t.hash(`toasts`)],()=>{queueMicrotask(()=>{n([`collapsedIfEmpty`,`setDismissableBranch`])})})},exit:[`clearDismissableBranch`,`clearLastFocusedEl`,`clearMouseEventTimer`],on:{"DOC.HOTKEY":{actions:[`focusRegionEl`]},"REGION.BLUR":[{guard:rt(`isOverlapping`,`isPointerOut`),target:`overlap`,actions:[`collapseToasts`,`resumeToasts`,`restoreFocusIfPointerOut`]},{guard:`isPointerOut`,target:`stack`,actions:[`resumeToasts`,`restoreFocusIfPointerOut`]},{actions:[`clearFocusWithin`]}],"TOAST.REMOVE":{actions:[`removeToast`,`removeHeight`,`ignoreMouseEventsTemporarily`]},"TOAST.PAUSE":{actions:[`pauseToasts`]}},states:{stack:{on:{"REGION.POINTER_LEAVE":[{guard:`isOverlapping`,target:`overlap`,actions:[`clearPointerWithin`,`resumeToasts`,`collapseToasts`]},{actions:[`clearPointerWithin`,`resumeToasts`]}],"REGION.OVERLAP":{target:`overlap`,actions:[`collapseToasts`]},"REGION.FOCUS":{actions:[`setLastFocusedEl`,`pauseToasts`]},"REGION.POINTER_ENTER":{actions:[`setPointerWithin`,`pauseToasts`]}}},overlap:{on:{"REGION.STACK":{target:`stack`,actions:[`expandToasts`]},"REGION.POINTER_ENTER":{target:`stack`,actions:[`setPointerWithin`,`pauseToasts`,`expandToasts`]},"REGION.FOCUS":{target:`stack`,actions:[`setLastFocusedEl`,`pauseToasts`,`expandToasts`]}}}},implementations:{guards:{isOverlapping:({computed:e})=>e(`overlap`),isPointerOut:({refs:e})=>!e.get(`isPointerWithin`)},effects:{subscribeToStore({context:e,prop:t}){let n=t(`store`);return e.set(`toasts`,n.getVisibleToasts()),n.subscribe(t=>{if(t.dismiss){e.set(`toasts`,e=>e.filter(e=>e.id!==t.id));return}e.set(`toasts`,e=>{let n=e.findIndex(e=>e.id===t.id);return n===-1?[t,...e]:[...e.slice(0,n),{...e[n],...t},...e.slice(n+1)]})})},trackHotKeyPress({prop:e,send:t}){return me(document,`keydown`,n=>{let{hotkey:r}=e(`store`).attrs;r.every(e=>n[e]||n.code===e)&&t({type:`DOC.HOTKEY`})},{capture:!0})},trackDocumentVisibility({prop:e,send:t,scope:n}){let{pauseOnPageIdle:r}=e(`store`).attrs;if(!r)return;let i=n.getDoc();return me(i,`visibilitychange`,()=>{t({type:i.visibilityState===`hidden`?`PAUSE_ALL`:`RESUME_ALL`})})}},actions:{setDismissableBranch({refs:e,context:t,computed:n,scope:r}){let i=t.get(`toasts`),a=n(`placement`),o=i.length>0;if(!o){e.get(`dismissableCleanup`)?.();return}if(o&&e.get(`dismissableCleanup`))return;let s=de(()=>Be(r,a),{defer:!0});e.set(`dismissableCleanup`,s)},clearDismissableBranch({refs:e}){e.get(`dismissableCleanup`)?.()},focusRegionEl({scope:e,computed:t}){queueMicrotask(()=>{Be(e,t(`placement`))?.focus()})},pauseToasts({prop:e}){e(`store`).pause()},resumeToasts({prop:e}){e(`store`).resume()},expandToasts({prop:e}){e(`store`).expand()},collapseToasts({prop:e}){e(`store`).collapse()},removeToast({prop:e,event:t}){e(`store`).remove(t.id)},removeHeight({event:e,context:t}){e?.id!=null&&queueMicrotask(()=>{t.set(`heights`,t=>t.filter(t=>t.id!==e.id))})},collapsedIfEmpty({send:e,computed:t}){!t(`overlap`)||t(`count`)>1||e({type:`REGION.OVERLAP`})},setLastFocusedEl({refs:e,event:t}){!e.get(`isFocusWithin`)&&t.target&&(e.set(`isFocusWithin`,!0),e.set(`lastFocusedEl`,t.target))},restoreFocusIfPointerOut({refs:e}){e.get(`lastFocusedEl`)&&!e.get(`isPointerWithin`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null),e.set(`isFocusWithin`,!1))},setPointerWithin({refs:e}){e.set(`isPointerWithin`,!0)},clearPointerWithin({refs:e}){e.set(`isPointerWithin`,!1),e.get(`lastFocusedEl`)&&!e.get(`isFocusWithin`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null))},clearFocusWithin({refs:e}){e.set(`isFocusWithin`,!1)},clearLastFocusedEl({refs:e}){e.get(`lastFocusedEl`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null),e.set(`isFocusWithin`,!1))},ignoreMouseEventsTemporarily({refs:e}){e.get(`ignoreMouseTimer`).request()},clearMouseEventTimer({refs:e}){e.get(`ignoreMouseTimer`).cancel()}}}})})))()}function ot(e,t){let{state:n,send:r,prop:i,scope:a,context:o,computed:s}=e,c=i(`translations`),l=n.hasTag(`visible`),u=n.hasTag(`paused`),d=o.get(`mounted`),f=s(`frontmost`),p=i(`parent`).computed(`placement`),h=i(`type`),g=i(`stacked`),_=i(`title`),v=i(`description`),y=i(`action`),[ee,te=`center`]=p.split(`-`);return{type:h,title:_,description:v,placement:p,visible:l,paused:u,closable:!!i(`closable`),pause(){r({type:`PAUSE`})},resume(){r({type:`RESUME`})},dismiss(){r({type:`DISMISS`,src:`programmatic`})},getRootProps(){return t.element({...k.root.attrs,dir:i(`dir`),id:Ve(a),"data-state":l?`open`:`closed`,"data-type":h,"data-placement":p,"data-align":te,"data-side":ee,"data-mounted":m(d),"data-paused":m(u),"data-first":m(f),"data-sibling":m(!f),"data-stack":m(g),"data-overlap":m(!g),role:`status`,"aria-atomic":`true`,"aria-describedby":v?We(a):void 0,"aria-labelledby":_?Ue(a):void 0,tabIndex:0,style:Je(e,l),onKeyDown(e){e.defaultPrevented||e.key==`Escape`&&(r({type:`DISMISS`,src:`keyboard`}),e.preventDefault())}})},getGhostBeforeProps(){return t.element({"data-ghost":`before`,style:Ye(e,l)})},getGhostAfterProps(){return t.element({"data-ghost":`after`,style:Xe()})},getTitleProps(){return t.element({...k.title.attrs,id:Ue(a)})},getDescriptionProps(){return t.element({...k.description.attrs,id:We(a)})},getActionTriggerProps(){return t.button({...k.actionTrigger.attrs,type:`button`,onClick(e){e.defaultPrevented||(y?.onClick?.(),r({type:`DISMISS`,src:`user`}))}})},getCloseTriggerProps(){return t.button({id:Ge(a),...k.closeTrigger.attrs,type:`button`,"aria-label":c?.closeTriggerLabel,onClick(e){e.defaultPrevented||r({type:`DISMISS`,src:`user`})}})}}}function st(){return(st=e((()=>{ee(),Re(),A(),j()})))()}function ct(e,t){let{id:n,height:r}=t;e.context.set(`heights`,e=>e.find(e=>e.id===n)?e.map(e=>e.id===n?{...e,height:r}:e):[{id:n,height:r},...e])}var lt,ut;function dt(){return(dt=e((()=>{ne(),le(),Ie(),A(),j(),{not:lt}=u(),ut=v({props({props:e}){return ie(e,[`id`,`type`,`parent`,`removeDelay`],`toast`),{closable:!0,...e,translations:{closeTriggerLabel:`Dismiss notification`,...e.translations},duration:Ke(e.duration,e.type)}},initialState({prop:e}){return e(`type`)===`loading`||e(`duration`)===1/0?`visible:persist`:`visible`},context({prop:e,bindable:t}){return{remainingTime:t(()=>({defaultValue:Ke(e(`duration`),e(`type`))})),createdAt:t(()=>({defaultValue:Date.now()})),mounted:t(()=>({defaultValue:!1})),initialHeight:t(()=>({defaultValue:0}))}},refs(){return{closeTimerStartTime:Date.now(),lastCloseStartTimerStartTime:0}},computed:{zIndex:({prop:e})=>{let t=e(`parent`).context.get(`toasts`),n=t.findIndex(t=>t.id===e(`id`));return t.length-n},height:({prop:e})=>e(`parent`).context.get(`heights`).find(t=>t.id===e(`id`))?.height??0,heightIndex:({prop:e})=>e(`parent`).context.get(`heights`).findIndex(t=>t.id===e(`id`)),frontmost:({prop:e})=>e(`index`)===0,heightBefore:({prop:e})=>{let t=e(`parent`).context.get(`heights`),n=t.findIndex(t=>t.id===e(`id`));return t.reduce((e,t,r)=>r>=n?e:e+t.height,0)},shouldPersist:({prop:e})=>e(`type`)===`loading`||e(`duration`)===1/0},watch({track:e,prop:t,send:n}){e([()=>t(`message`)],()=>{let e=t(`message`);e&&n({type:e,src:`programmatic`})}),e([()=>t(`type`),()=>t(`duration`)],()=>{n({type:`UPDATE`})})},on:{UPDATE:[{guard:`shouldPersist`,target:`visible:persist`,actions:[`resetCloseTimer`]},{target:`visible:updating`,actions:[`resetCloseTimer`]}],MEASURE:{actions:[`measureHeight`]}},entry:[`setMounted`,`measureHeight`,`invokeOnVisible`],effects:[`trackHeight`],states:{"visible:updating":{tags:[`visible`,`updating`],effects:[`waitForNextTick`],on:{SHOW:{target:`visible`}}},"visible:persist":{tags:[`visible`,`paused`],on:{RESUME:{guard:lt(`isLoadingType`),target:`visible`,actions:[`setCloseTimer`]},DISMISS:{target:`dismissing`}}},visible:{tags:[`visible`],effects:[`waitForDuration`],on:{DISMISS:{target:`dismissing`},PAUSE:{target:`visible:persist`,actions:[`syncRemainingTime`]}}},dismissing:{entry:[`invokeOnDismiss`],effects:[`waitForRemoveDelay`],on:{REMOVE:{target:`unmounted`,actions:[`notifyParentToRemove`]}}},unmounted:{entry:[`invokeOnUnmount`]}},implementations:{effects:{waitForRemoveDelay({prop:e,send:t}){return Pe(()=>{t({type:`REMOVE`,src:`timer`})},e(`removeDelay`))},waitForDuration({send:e,context:t,computed:n}){if(!n(`shouldPersist`))return Pe(()=>{e({type:`DISMISS`,src:`timer`})},t.get(`remainingTime`))},waitForNextTick({send:e}){return Pe(()=>{e({type:`SHOW`,src:`timer`})},0)},trackHeight({scope:e,prop:t}){let n;return ce(()=>{let r=He(e);if(!r)return;let i=new(e.getWin()).MutationObserver(()=>{let e=r.style.height;r.style.height=`auto`;let n=r.getBoundingClientRect().height;r.style.height=e;let i={id:t(`id`),height:n};ct(t(`parent`),i)});i.observe(r,{childList:!0,subtree:!0,characterData:!0}),n=()=>i.disconnect()}),()=>n?.()}},guards:{isLoadingType:({prop:e})=>e(`type`)===`loading`,shouldPersist:({computed:e})=>e(`shouldPersist`)},actions:{setMounted({context:e}){ce(()=>{e.set(`mounted`,!0)})},measureHeight({scope:e,prop:t,context:n}){queueMicrotask(()=>{let r=He(e);if(!r)return;let i=r.style.height;r.style.height=`auto`;let a=r.getBoundingClientRect().height;r.style.height=i,n.set(`initialHeight`,a);let o={id:t(`id`),height:a};ct(t(`parent`),o)})},setCloseTimer({refs:e}){e.set(`closeTimerStartTime`,Date.now())},resetCloseTimer({context:e,refs:t,prop:n}){t.set(`closeTimerStartTime`,Date.now()),e.set(`remainingTime`,Ke(n(`duration`),n(`type`)))},syncRemainingTime({context:e,refs:t}){e.set(`remainingTime`,e=>{let n=t.get(`closeTimerStartTime`),r=Date.now()-n;return t.set(`lastCloseStartTimerStartTime`,Date.now()),e-r})},notifyParentToRemove({prop:e}){e(`parent`).send({type:`TOAST.REMOVE`,id:e(`id`)})},invokeOnDismiss({prop:e,event:t}){e(`onStatusChange`)?.({status:`dismissing`,src:t.src})},invokeOnUnmount({prop:e}){e(`onStatusChange`)?.({status:`unmounted`})},invokeOnVisible({prop:e}){e(`onStatusChange`)?.({status:`visible`})}}}})})))()}function ft(e={}){let t=pt(e,{placement:`bottom`,overlap:!1,max:24,gap:16,offsets:`1rem`,hotkey:[`altKey`,`KeyT`],removeDelay:200,pauseOnPageIdle:!0}),n=[],r=[],i=new Set,a=[],s=e=>(n.push(e),()=>{let t=n.indexOf(e);n.splice(t,1)}),l=e=>(n.forEach(t=>t(e)),e),u=e=>{if(r.length>=t.max){a.push(e);return}l(e),r.unshift(e)},d=()=>{for(a=gt(a);a.length>0&&r.length<t.max;){let e=a.shift();e&&(l(e),r.unshift(e))}},f=e=>{let n=e.id??`toast:${o()}`,a=r.find(e=>e.id===n);if(i.has(n)&&i.delete(n),a)r=r.map(t=>t.id===n?l({...t,...e,id:n}):t);else{let r={id:n,duration:t.duration,removeDelay:t.removeDelay,type:ht,...e,stacked:!t.overlap,gap:t.gap},i=r.priority??M(r.type,!!r.action);u({...r,priority:i})}return n},m=e=>(i.add(e),e?(n.forEach(t=>t({id:e,dismiss:!0})),r=r.filter(t=>t.id!==e),d()):(r.forEach(e=>{n.forEach(t=>t({id:e.id,dismiss:!0}))}),r=[],a=[]),e);return{attrs:t,subscribe:s,create:f,update:(e,t)=>f({id:e,...t}),remove:m,dismiss:e=>{r=e==null?r.map(e=>l({...e,message:`DISMISS`})):r.map(t=>t.id===e?l({...t,message:`DISMISS`}):t)},error:e=>f({...e,type:`error`}),success:e=>f({...e,type:`success`}),info:e=>f({...e,type:`info`}),warning:e=>f({...e,type:`warning`}),loading:e=>f({...e,type:`loading`}),getVisibleToasts:()=>r.filter(e=>!i.has(e.id)),getCount:()=>r.length,promise:(e,t,n={})=>{if(!t||!t.loading){p(`[zag-js > toast] toaster.promise() requires at least a 'loading' option to be specified`);return}let r=f({...n,...t.loading,promise:e,type:`loading`}),i=!0,a,o=c(e).then(async e=>{if(a=[`resolve`,e],_t(e)&&!e.ok){i=!1;let a=c(t.error,`HTTP Error! status: ${e.status}`);f({...n,...a,id:r,type:`error`})}else if(t.success!==void 0){i=!1;let a=c(t.success,e);f({...n,...a,id:r,type:a.type??`success`})}}).catch(async e=>{if(a=[`reject`,e],t.error!==void 0){i=!1;let a=c(t.error,e);f({...n,...a,id:r,type:`error`})}}).finally(()=>{i&&m(r),t.finally?.()});return{id:r,unwrap:()=>new Promise((e,t)=>o.then(()=>a[0]===`reject`?t(a[1]):e(a[1])).catch(t))}},pause:e=>{r=e==null?r.map(e=>l({...e,message:`PAUSE`})):r.map(t=>t.id===e?l({...t,message:`PAUSE`}):t)},resume:e=>{r=e==null?r.map(e=>l({...e,message:`RESUME`})):r.map(t=>t.id===e?l({...t,message:`RESUME`}):t)},isVisible:e=>!i.has(e)&&!!r.find(t=>t.id===e),isDismissed:e=>i.has(e),expand:()=>{r=r.map(e=>l({...e,stacked:!0}))},collapse:()=>{r=r.map(e=>l({...e,stacked:!1}))}}}var pt,mt,ht,M,gt,_t;function vt(){return(vt=e((()=>{g(),se(),pt=(e,t)=>({...t,...y(e)}),mt={error:[1,2],warning:[3,6],loading:[4,5],success:[5,7],info:[6,8]},ht=`info`,M=(e,t)=>{let[n,r]=mt[e??ht];return t?n:r},gt=e=>e.sort((e,t)=>(e.priority??M(e.type,!!e.action))-(t.priority??M(t.type,!!t.action))),_t=e=>e&&typeof e==`object`&&`ok`in e&&typeof e.ok==`boolean`&&`status`in e&&typeof e.status==`number`})))()}var yt;function bt(){return(bt=e((()=>{et(),at(),st(),dt(),vt(),yt={connect:$e,machine:it}})))()}var xt;function St(){return(St=e((()=>{bt(),xt=e=>ft(e)})))()}var Ct,N;function P(){return(P=e((()=>{_e(),[Ct,N]=be({name:`ToastContext`,hookName:`useToastContext`,providerName:`<ToastProvider />`})})))()}var wt,Tt,Et;function Dt(){return(Dt=e((()=>{b(),P(),wt=t(),S(),Tt=n(),Et=(0,wt.forwardRef)((e,t)=>{let n=x(N().getActionTriggerProps(),e);return(0,Tt.jsx)(C.button,{...n,ref:t})}),Et.displayName=`ToastActionTrigger`})))()}var Ot,kt,At;function jt(){return(jt=e((()=>{b(),P(),Ot=t(),S(),kt=n(),At=(0,Ot.forwardRef)((e,t)=>{let n=x(N().getCloseTriggerProps(),e);return(0,kt.jsx)(C.button,{...n,ref:t})}),At.displayName=`ToastCloseTrigger`})))()}var Mt;function Nt(){return(Nt=e((()=>{P(),Mt=e=>e.children(N())})))()}var Pt,Ft,It;function Lt(){return(Lt=e((()=>{b(),P(),Pt=t(),S(),Ft=n(),It=(0,Pt.forwardRef)((e,t)=>{let n=x(N().getDescriptionProps(),e);return(0,Ft.jsx)(C.div,{...n,ref:t})}),It.displayName=`ToastDescription`})))()}var Rt,F,zt;function Bt(){return(Bt=e((()=>{P(),Rt=t(),S(),F=n(),zt=(0,Rt.forwardRef)((e,t)=>{let n=N();return(0,F.jsxs)(`div`,{...x(n.getRootProps(),e),ref:t,children:[(0,F.jsx)(`div`,{...n.getGhostBeforeProps()}),e.children,(0,F.jsx)(`div`,{...n.getGhostAfterProps()})]})}),zt.displayName=`ToastRoot`})))()}var Vt,Ht,Ut;function Wt(){return(Wt=e((()=>{b(),P(),Vt=t(),S(),Ht=n(),Ut=(0,Vt.forwardRef)((e,t)=>{let n=x(N().getTitleProps(),e);return(0,Ht.jsx)(C.div,{...n,ref:t})}),Ut.displayName=`ToastTitle`})))()}var Gt,I,Kt,qt;function Jt(){return(Jt=e((()=>{b(),he(),xe(),P(),bt(),Gt=t(),S(),re(),te(),I=n(),Kt=(0,Gt.forwardRef)((e,t)=>{let{toaster:n,children:r,...i}=e,a=ge(),o=ye(),s=h(yt.machine,{store:n,id:(0,Gt.useId)(),dir:a?.dir,getRootNode:o?.getRootNode}),c=yt.connect(s,_),l=x(c.getGroupProps(),i);return(0,I.jsx)(C.div,{...l,ref:t,children:c.getToasts().map((e,t)=>(0,I.jsx)(qt,{value:e,parent:s,index:t,children:e=>r(e)},e.id))})}),Kt.displayName=`Toaster`,qt=e=>{let t=ye(),n={...e.value,parent:e.parent,index:e.index,getRootNode:t.getRootNode},r=h(ut,{...n});return(0,I.jsx)(Ct,{value:ot(r,_),children:e.children(e.value)})},qt.displayName=`ToastActor`})))()}var L;function Yt(){return(Yt=e((()=>{ve(),Dt(),jt(),Nt(),Lt(),Bt(),Wt(),L=Se({ActionTrigger:()=>Et,CloseTrigger:()=>At,Context:()=>Mt,Description:()=>It,Root:()=>zt,Title:()=>Ut})})))()}var Xt,Zt,Qt;function $t(){return($t=e((()=>{Xt=`_actions_hdgi1_44`,Zt=`_icon_hdgi1_71`,Qt={"slide-in":`_slide-in_hdgi1_1`,"fade-out":`_fade-out_hdgi1_1`,actions:Xt,icon:Zt}})))()}function en(e){return(0,R.jsx)(z,{...e})}var tn,R,nn,z,rn;function an(){return(an=e((()=>{tn=r(),Yt(),Jt(),$t(),a(),we(),R=n(),nn={success:`check_circle`,info:`info`,warning:`error`,error:`cancel`},z=e=>{let t=(0,tn.c)(19),{style:n,className:r,variant:a,title:o,description:s,onDismiss:c,actions:l}=e,u=nn[a===void 0?`info`:a],d;t[0]===u?d=t[1]:(d=(0,R.jsx)(i,{icon:u,size:`small`,filled:!0,className:Qt.icon}),t[0]=u,t[1]=d);let f;t[2]===o?f=t[3]:(f=o&&(0,R.jsx)(Ce,{variant:`body-sm-md`,asChild:!0,children:(0,R.jsx)(L.Title,{children:o})}),t[2]=o,t[3]=f);let p;t[4]===s?p=t[5]:(p=s&&(0,R.jsx)(Ce,{variant:`body-sm-reg`,asChild:!0,children:(0,R.jsx)(L.Description,{children:s})}),t[4]=s,t[5]=p);let m;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,R.jsx)(i,{icon:`close`,size:`small`}),t[6]=m):m=t[6];let h;t[7]===c?h=t[8]:(h=(0,R.jsx)(L.CloseTrigger,{onClick:c,children:m}),t[7]=c,t[8]=h);let g;t[9]===l?g=t[10]:(g=l&&(0,R.jsx)(`div`,{className:Qt.actions,children:l}),t[9]=l,t[10]=g);let _;return t[11]!==r||t[12]!==n||t[13]!==d||t[14]!==f||t[15]!==p||t[16]!==h||t[17]!==g?(_=(0,R.jsxs)(L.Root,{style:n,className:r,children:[d,f,p,h,g]}),t[11]=r,t[12]=n,t[13]=d,t[14]=f,t[15]=p,t[16]=h,t[17]=g,t[18]=_):_=t[18],_},rn=e=>{let t=(0,tn.c)(2),{toaster:n}=e,r;return t[0]===n?r=t[1]:(r=(0,R.jsx)(Kt,{toaster:n,children:en}),t[0]=n,t[1]=r),r},z.displayName=`DsToast`,rn.displayName=`DsToastGroup`})))()}var on,B,sn,cn,ln,V,H;function un(){return(un=e((()=>{on=r(),B=t(),St(),an(),sn=n(),cn=(0,B.createContext)(null),ln=e=>t=>e.create({...t,type:t.variant,duration:t.persistent?1/0:t.duration||6e3}),V=e=>{let t=(0,on.c)(17),{children:n,max:r}=e,i=r===void 0?3:r,a,o;t[0]===i?(a=t[1],o=t[2]):(o=xt({placement:`top`,gap:24,max:i}),a=ln(o),t[0]=i,t[1]=a,t[2]=o);let s;t[3]===o?s=t[4]:(s=()=>o.dismiss(),t[3]=o,t[4]=s);let c;t[5]!==a||t[6]!==s||t[7]!==o.dismiss||t[8]!==o.getCount||t[9]!==o.getVisibleToasts?(c={createToast:a,dismissToast:o.dismiss,dismissAllToasts:s,getToasts:o.getVisibleToasts,getToastsCount:o.getCount},t[5]=a,t[6]=s,t[7]=o.dismiss,t[8]=o.getCount,t[9]=o.getVisibleToasts,t[10]=c):c=t[10];let l=c,u;t[11]===o?u=t[12]:(u=(0,sn.jsx)(rn,{toaster:o}),t[11]=o,t[12]=u);let d;return t[13]!==n||t[14]!==l||t[15]!==u?(d=(0,sn.jsxs)(cn.Provider,{value:l,children:[n,u]}),t[13]=n,t[14]=l,t[15]=u,t[16]=d):d=t[16],d},H=()=>{let e=(0,B.useContext)(cn);if(!e)throw Error(`useToast must be used within a ToastProvider`);return e},V.displayName=`DsToastProvider`})))()}var dn;function fn(){return(fn=e((()=>{dn=[`info`,`success`,`warning`,`error`]})))()}var U,W,pn,G,K,q,J,Y,X,Z,Q,$,mn;function hn(){return(hn=e((()=>{U=r(),an(),un(),fn(),De(),Te(),W=n(),pn={title:`Components/Toast`,component:z,parameters:{layout:`centered`,docs:{description:{component:"Temporary, non-blocking messages surfaced through `DsToastProvider` and the `useToaster` hook. Toasts are created imperatively from an event handler, so every example wraps a trigger in the provider."}}},argTypes:{variant:{control:{type:`select`},options:dn}}},G={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(w,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`success`,title:`Success!`,description:`Your action was completed successfully.`}),children:`Show success toast`}),e[0]=t,e[1]=n),n},{})})},K={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(w,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`info`,title:`Information`,description:`Here is some helpful information for you.`}),children:`Show info toast`}),e[0]=t,e[1]=n),n},{})})},q={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(w,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,title:`Warning`,description:`Please be aware of this important notice.`}),children:`Show warning toast`}),e[0]=t,e[1]=n),n},{})})},J={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(w,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`error`,title:`Error`,description:`Something went wrong. Please try again.`,persistent:!0}),children:`Show error toast`}),e[0]=t,e[1]=n),n},{})})},Y={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(w,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,description:`Something went wrong. Please try again.`}),children:`Show toast without title`}),e[0]=t,e[1]=n),n},{})})},X={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(3),{createToast:t,dismissToast:n}=H(),r;return e[0]!==t||e[1]!==n?(r=(0,W.jsx)(w,{design:`v1.2`,variant:`filled`,onClick:()=>{let e=t({variant:`warning`,title:`File upload failed`,description:`Your file could not be uploaded.`,persistent:!0,actions:(0,W.jsxs)(Ee,{direction:`row`,gap:`var(--xs)`,justifyContent:`flex-end`,children:[(0,W.jsx)(w,{design:`v1.2`,variant:`ghost`,onClick:()=>n(e),children:`Abort`}),(0,W.jsx)(w,{design:`v1.2`,variant:`danger`,onClick:()=>n(e),children:`Re-try`})]})})},children:`Show toast with actions`}),e[0]=t,e[1]=n,e[2]=r):r=e[2],r},{})})},Z={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(w,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,title:`Important notice`,description:`This is a longer message that demonstrates how the toast handles extended content. The text wraps and stays readable while remaining within the toast boundaries.`}),children:`Show long content toast`}),e[0]=t,e[1]=n),n},{})})},Q={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(w,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`info`,title:`Sync in progress`,description:`This toast stays until you close it.`,persistent:!0}),children:`Show persistent toast`}),e[0]=t,e[1]=n),n},{})})},$={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(9),{createToast:t,dismissAllToasts:n}=H(),r;e[0]===t?r=e[1]:(r=()=>{t({variant:`success`,title:`First toast`,description:`This is the first message.`}),t({variant:`info`,title:`Second toast`,description:`This is the second message.`}),t({variant:`warning`,title:`Third toast`,description:`This is the third message.`})},e[0]=t,e[1]=r);let i=r,a;e[2]===i?a=e[3]:(a=(0,W.jsx)(w,{design:`v1.2`,variant:`filled`,onClick:i,children:`Show multiple toasts`}),e[2]=i,e[3]=a);let o;e[4]===n?o=e[5]:(o=(0,W.jsx)(w,{design:`v1.2`,variant:`ghost`,onClick:()=>n(),children:`Dismiss all`}),e[4]=n,e[5]=o);let s;return e[6]!==a||e[7]!==o?(s=(0,W.jsxs)(Ee,{direction:`row`,gap:`var(--xs)`,children:[a,o]}),e[6]=a,e[7]=o,e[8]=s):s=e[8],s},{})})},mn=[`Success`,`Info`,`Warning`,`Error`,`NoTitle`,`WithActions`,`LongContent`,`Persistent`,`MultipleToasts`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
          actions: <DsStack direction="row" gap="var(--xs)" justifyContent="flex-end">
                            <DsButton design="v1.2" variant="ghost" onClick={() => dismissToast(id)}>
                                Abort
                            </DsButton>
                            <DsButton design="v1.2" variant="danger" onClick={() => dismissToast(id)}>
                                Re-try
                            </DsButton>
                        </DsStack>
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
}`,...X.parameters?.docs?.source},description:{story:"Pass `actions` to render buttons inside the toast. Action handlers typically dismiss the\ntoast with `dismissToast(id)` — pair actions with `persistent` so the toast waits for a choice.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
        description: 'This is a longer message that demonstrates how the toast handles extended content. ' + 'The text wraps and stays readable while remaining within the toast boundaries.'
      })}>
                    Show long content toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`Long descriptions wrap and the toast grows to fit while staying within its max width.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Toasts stack up to the provider's `max` (default 3). `dismissAllToasts` clears them at once.",...$.parameters?.docs?.description}}}})))()}hn();export{J as Error,K as Info,Z as LongContent,$ as MultipleToasts,Y as NoTitle,Q as Persistent,G as Success,q as Warning,X as WithActions,mn as __namedExportsOrder,pn as default};