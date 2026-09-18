import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-BE6vsRJN.js";import{n as r}from"./classnames-DavMFNTn.js";import{n as i,t as a}from"./ds-icon-BB8SEsRp.js";import{C as o,Y as s,a as c,b as l,bt as u,c as d,dt as f,f as p,h as m,ht as h,i as g,m as _,n as v,o as y,p as ee,pt as b,r as te,s as ne,t as re,tt as ie,u as ae,w as oe,yt as se}from"./normalize-props-DcwXv4di.js";import{a as ce,n as le,t as ue}from"./raf-4Vx82Ja0.js";import{n as de,t as fe}from"./dismissable-layer-DCvLcn0H.js";import{C as pe,_ as me,a as he,c as x,g as S,h as C,i as ge,m as _e,n as ve,o as ye,p as be,r as xe,s as w,t as Se}from"./runtime-VY5RFx8v.js";import{n as Ce,t as we}from"./ds-typography-CBXzX4k5.js";import{n as Te,t as Ee}from"./ds-stack-BCUF7Byn.js";import{n as T,t as De}from"./ds-button-BcrOqCu7.js";var Oe,ke,Ae,E,je,Me,Ne;function Pe(){return(Pe=e((()=>{Oe=Object.defineProperty,ke=e=>{throw TypeError(e)},Ae=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t,n)=>Ae(e,typeof t==`symbol`?t:t+``,n),je=(e,t,n)=>t.has(e)||ke(`Cannot `+n),Me=(e,t,n)=>(je(e,t,`read from private field`),n?n.call(e):t.get(e)),Ne=(e,t,n)=>t.has(e)?ke(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n)})))()}function Fe(e,t){let n=new Ie(({deltaMs:n})=>{if(n>=t)return e(),!1});return n.start(),()=>n.stop()}var D,O,Ie;function Le(){return(Le=e((()=>{Pe(),D=()=>performance.now(),Ie=class{constructor(e){E(this,`onTick`,e),E(this,`frameId`,null),E(this,`pausedAtMs`,null),E(this,`context`),E(this,`cancelFrame`,()=>{this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}),E(this,`setStartMs`,e=>{this.context.startMs=e}),E(this,`start`,()=>{if(this.frameId!==null)return;let e=D();this.pausedAtMs===null?this.context.startMs=e:(this.context.startMs+=e-this.pausedAtMs,this.pausedAtMs=null),this.frameId=requestAnimationFrame(Me(this,O))}),E(this,`pause`,()=>{this.frameId!==null&&(this.cancelFrame(),this.pausedAtMs=D())}),E(this,`stop`,()=>{this.frameId!==null&&(this.cancelFrame(),this.pausedAtMs=null)}),Ne(this,O,e=>{if(this.context.now=e,this.context.deltaMs=e-this.context.startMs,this.onTick(this.context)===!1){this.stop();return}this.frameId=requestAnimationFrame(Me(this,O))}),this.context={now:0,startMs:D(),deltaMs:0}}get elapsedMs(){return this.pausedAtMs===null?D()-this.context.startMs:this.pausedAtMs-this.context.startMs}},O=new WeakMap})))()}var Re,k;function ze(){return(ze=e((()=>{u(),Re=se(`toast`).parts(`group`,`root`,`title`,`description`,`actionTrigger`,`closeTrigger`),k=Re.build()})))()}var Be,Ve,He,Ue,We,Ge,Ke;function A(){return(A=e((()=>{Be=e=>`toast-group:${e}`,Ve=(e,t)=>e.getById(`toast-group:${t}`),He=e=>`toast:${e.id}`,Ue=e=>e.getById(He(e)),We=e=>`toast:${e.id}:title`,Ge=e=>`toast:${e.id}:description`,Ke=e=>`toast${e.id}:close`})))()}function qe(e,t){return e??Qe[t]??Qe.DEFAULT}function Je(e,t){let{prop:n,computed:r,context:i}=e,{offsets:a,gap:o}=n(`store`).attrs,s=i.get(`heights`),c=$e(a),l=n(`dir`)===`rtl`,u=t.replace(`-start`,l?`-right`:`-left`).replace(`-end`,l?`-left`:`-right`),d=u.includes(`right`),p=u.includes(`left`),m={position:`fixed`,pointerEvents:r(`count`)>0?void 0:`none`,display:`flex`,flexDirection:`column`,"--gap":`${o}px`,"--first-height":`${s[0]?.height||0}px`,"--viewport-offset-left":c.left,"--viewport-offset-right":c.right,"--viewport-offset-top":c.top,"--viewport-offset-bottom":c.bottom,zIndex:f},h=`center`;return d&&(h=`flex-end`),p&&(h=`flex-start`),m.alignItems=h,u.includes(`top`)&&(m.top=`max(env(safe-area-inset-top, 0px), ${c.top})`),u.includes(`bottom`)&&(m.bottom=`max(env(safe-area-inset-bottom, 0px), ${c.bottom})`),u.includes(`left`)||(m.insetInlineEnd=`calc(env(safe-area-inset-right, 0px) + ${c.right})`),u.includes(`right`)||(m.insetInlineStart=`calc(env(safe-area-inset-left, 0px) + ${c.left})`),m}function Ye(e,t){let{prop:n,context:r,computed:i}=e,a=n(`parent`),o=a.computed(`placement`),{gap:s}=a.prop(`store`).attrs,[c]=o.split(`-`),l=r.get(`mounted`),u=r.get(`remainingTime`),d=i(`height`),f=i(`frontmost`),p=!f,m=!n(`stacked`),h=n(`stacked`),g=n(`type`)===`loading`?2**53-1:u,_=i(`heightIndex`)*s+i(`heightBefore`),v={position:`absolute`,pointerEvents:`auto`,"--opacity":`0`,"--remove-delay":`${n(`removeDelay`)}ms`,"--duration":`${g}ms`,"--initial-height":`${d}px`,"--offset":`${_}px`,"--index":n(`index`),"--z-index":i(`zIndex`),"--lift-amount":`calc(var(--lift) * var(--gap))`,"--y":`100%`,"--x":`0`},y=e=>Object.assign(v,e);return c===`top`?y({top:`0`,"--sign":`-1`,"--y":`-100%`,"--lift":`1`}):c===`bottom`&&y({bottom:`0`,"--sign":`1`,"--y":`100%`,"--lift":`-1`}),l&&(y({"--y":`0`,"--opacity":`1`}),h&&y({"--y":`calc(var(--lift) * var(--offset))`,"--height":`var(--initial-height)`})),t||y({"--opacity":`0`,pointerEvents:`none`}),p&&m&&(y({"--base-scale":`var(--index) * 0.05 + 1`,"--y":`calc(var(--lift-amount) * var(--index))`,"--scale":`calc(-1 * var(--base-scale))`,"--height":`var(--first-height)`}),t||y({"--y":`calc(var(--sign) * 40%)`})),p&&h&&!t&&y({"--y":`calc(var(--lift) * var(--offset) + var(--lift) * -100%)`}),f&&!t&&y({"--y":`calc(var(--lift) * -100%)`}),v}function Xe(e,t){let{computed:n}=e,r={position:`absolute`,inset:`0`,scale:`1 2`,pointerEvents:t?`none`:`auto`};return n(`frontmost`)&&!t&&(e=>Object.assign(r,e))({height:`calc(var(--initial-height) + 80%)`}),r}function Ze(){return{position:`absolute`,left:`0`,height:`calc(var(--gap) + 2px)`,bottom:`100%`,width:`100%`}}var Qe,$e;function j(){return(j=e((()=>{h(),Qe={info:5e3,error:5e3,success:2e3,loading:1/0,warning:5e3,DEFAULT:5e3},$e=e=>typeof e==`string`?{left:e,right:e,bottom:e,top:e}:e})))()}function et(e,t){let{context:n,prop:r,send:i,refs:a,computed:o}=e;return{getCount(){return n.get(`toasts`).length},getToasts(){return n.get(`toasts`)},getGroupProps(n={}){let{label:c=`Notifications`}=n,{hotkey:l}=r(`store`).attrs,u=l.join(`+`).replace(/Key/g,``).replace(/Digit/g,``),d=o(`placement`),[f,p=`center`]=d.split(`-`);return t.element({...k.group.attrs,dir:r(`dir`),tabIndex:-1,role:`region`,"aria-label":`${c}, ${d} (${u})`,id:Be(d),"data-placement":d,"data-side":f,"data-align":p,"aria-live":`polite`,"aria-relevant":`additions text`,"aria-atomic":`false`,style:Je(e,d),onMouseEnter(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_ENTER`,placement:d})},onMouseMove(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_ENTER`,placement:d})},onMouseLeave(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_LEAVE`,placement:d})},onFocus(e){i({type:`REGION.FOCUS`,target:e.relatedTarget})},onBlur(e){a.get(`isFocusWithin`)&&!s(e.currentTarget,e.relatedTarget)&&queueMicrotask(()=>i({type:`REGION.BLUR`}))}})},subscribe(e){return r(`store`).subscribe(()=>e(n.get(`toasts`)))}}}function tt(){return(tt=e((()=>{ie(),ze(),A(),j()})))()}var nt,rt,it,at;function ot(){return(ot=e((()=>{ne(),fe(),pe(),le(),l(),A(),{guards:nt,createMachine:rt}=d(),{and:it}=nt,at=rt({props({props:e}){return{dir:`ltr`,id:oe(),...e,store:e.store}},initialState({prop:e}){return e(`store`).attrs.overlap?`overlap`:`stack`},refs(){return{lastFocusedEl:null,isFocusWithin:!1,isPointerWithin:!1,ignoreMouseTimer:ue.create(),dismissableCleanup:void 0}},context({bindable:e}){return{toasts:e(()=>({defaultValue:[],sync:!0,hash:e=>e.map(e=>e.id).join(`,`)})),heights:e(()=>({defaultValue:[],sync:!0}))}},computed:{count:({context:e})=>e.get(`toasts`).length,overlap:({prop:e})=>e(`store`).attrs.overlap,placement:({prop:e})=>e(`store`).attrs.placement},effects:[`subscribeToStore`,`trackDocumentVisibility`,`trackHotKeyPress`],watch({track:e,context:t,action:n}){e([()=>t.hash(`toasts`)],()=>{queueMicrotask(()=>{n([`collapsedIfEmpty`,`setDismissableBranch`])})})},exit:[`clearDismissableBranch`,`clearLastFocusedEl`,`clearMouseEventTimer`],on:{"DOC.HOTKEY":{actions:[`focusRegionEl`]},"REGION.BLUR":[{guard:it(`isOverlapping`,`isPointerOut`),target:`overlap`,actions:[`collapseToasts`,`resumeToasts`,`restoreFocusIfPointerOut`]},{guard:`isPointerOut`,target:`stack`,actions:[`resumeToasts`,`restoreFocusIfPointerOut`]},{actions:[`clearFocusWithin`]}],"TOAST.REMOVE":{actions:[`removeToast`,`removeHeight`,`ignoreMouseEventsTemporarily`]},"TOAST.PAUSE":{actions:[`pauseToasts`]}},states:{stack:{on:{"REGION.POINTER_LEAVE":[{guard:`isOverlapping`,target:`overlap`,actions:[`clearPointerWithin`,`resumeToasts`,`collapseToasts`]},{actions:[`clearPointerWithin`,`resumeToasts`]}],"REGION.OVERLAP":{target:`overlap`,actions:[`collapseToasts`]},"REGION.FOCUS":{actions:[`setLastFocusedEl`,`pauseToasts`]},"REGION.POINTER_ENTER":{actions:[`setPointerWithin`,`pauseToasts`]}}},overlap:{on:{"REGION.STACK":{target:`stack`,actions:[`expandToasts`]},"REGION.POINTER_ENTER":{target:`stack`,actions:[`setPointerWithin`,`pauseToasts`,`expandToasts`]},"REGION.FOCUS":{target:`stack`,actions:[`setLastFocusedEl`,`pauseToasts`,`expandToasts`]}}}},implementations:{guards:{isOverlapping:({computed:e})=>e(`overlap`),isPointerOut:({refs:e})=>!e.get(`isPointerWithin`)},effects:{subscribeToStore({context:e,prop:t}){let n=t(`store`);return e.set(`toasts`,n.getVisibleToasts()),n.subscribe(t=>{if(t.dismiss){e.set(`toasts`,e=>e.filter(e=>e.id!==t.id));return}e.set(`toasts`,e=>{let n=e.findIndex(e=>e.id===t.id);return n===-1?[t,...e]:[...e.slice(0,n),{...e[n],...t},...e.slice(n+1)]})})},trackHotKeyPress({prop:e,send:t}){return me(document,`keydown`,n=>{let{hotkey:r}=e(`store`).attrs;r.every(e=>n[e]||n.code===e)&&t({type:`DOC.HOTKEY`})},{capture:!0})},trackDocumentVisibility({prop:e,send:t,scope:n}){let{pauseOnPageIdle:r}=e(`store`).attrs;if(!r)return;let i=n.getDoc();return me(i,`visibilitychange`,()=>{t({type:i.visibilityState===`hidden`?`PAUSE_ALL`:`RESUME_ALL`})})}},actions:{setDismissableBranch({refs:e,context:t,computed:n,scope:r}){let i=t.get(`toasts`),a=n(`placement`),o=i.length>0;if(!o){e.get(`dismissableCleanup`)?.();return}if(o&&e.get(`dismissableCleanup`))return;let s=de(()=>Ve(r,a),{defer:!0});e.set(`dismissableCleanup`,s)},clearDismissableBranch({refs:e}){e.get(`dismissableCleanup`)?.()},focusRegionEl({scope:e,computed:t}){queueMicrotask(()=>{Ve(e,t(`placement`))?.focus()})},pauseToasts({prop:e}){e(`store`).pause()},resumeToasts({prop:e}){e(`store`).resume()},expandToasts({prop:e}){e(`store`).expand()},collapseToasts({prop:e}){e(`store`).collapse()},removeToast({prop:e,event:t}){e(`store`).remove(t.id)},removeHeight({event:e,context:t}){e?.id!=null&&queueMicrotask(()=>{t.set(`heights`,t=>t.filter(t=>t.id!==e.id))})},collapsedIfEmpty({send:e,computed:t}){!t(`overlap`)||t(`count`)>1||e({type:`REGION.OVERLAP`})},setLastFocusedEl({refs:e,event:t}){!e.get(`isFocusWithin`)&&t.target&&(e.set(`isFocusWithin`,!0),e.set(`lastFocusedEl`,t.target))},restoreFocusIfPointerOut({refs:e}){e.get(`lastFocusedEl`)&&!e.get(`isPointerWithin`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null),e.set(`isFocusWithin`,!1))},setPointerWithin({refs:e}){e.set(`isPointerWithin`,!0)},clearPointerWithin({refs:e}){e.set(`isPointerWithin`,!1),e.get(`lastFocusedEl`)&&!e.get(`isFocusWithin`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null))},clearFocusWithin({refs:e}){e.set(`isFocusWithin`,!1)},clearLastFocusedEl({refs:e}){e.get(`lastFocusedEl`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null),e.set(`isFocusWithin`,!1))},ignoreMouseEventsTemporarily({refs:e}){e.get(`ignoreMouseTimer`).request()},clearMouseEventTimer({refs:e}){e.get(`ignoreMouseTimer`).cancel()}}}})})))()}function st(e,t){let{state:n,send:r,prop:i,scope:a,context:o,computed:s}=e,c=m(ct,i(`translations`)),l=n.hasTag(`visible`),u=n.hasTag(`paused`),d=o.get(`mounted`),f=s(`frontmost`),p=i(`parent`).computed(`placement`),h=i(`type`),g=i(`stacked`),_=i(`title`),v=i(`description`),y=i(`action`),[ee,te=`center`]=p.split(`-`);return{type:h,title:_,description:v,placement:p,visible:l,paused:u,closable:!!i(`closable`),pause(){r({type:`PAUSE`})},resume(){r({type:`RESUME`})},dismiss(){r({type:`DISMISS`,src:`programmatic`})},getRootProps(){return t.element({...k.root.attrs,dir:i(`dir`),id:He(a),"data-state":l?`open`:`closed`,"data-type":h,"data-placement":p,"data-align":te,"data-side":ee,"data-mounted":b(d),"data-paused":b(u),"data-first":b(f),"data-sibling":b(!f),"data-stack":b(g),"data-overlap":b(!g),role:`status`,"aria-atomic":`true`,"aria-describedby":v?Ge(a):void 0,"aria-labelledby":_?We(a):void 0,tabIndex:0,style:Ye(e,l),onKeyDown(e){e.defaultPrevented||e.key==`Escape`&&(r({type:`DISMISS`,src:`keyboard`}),e.preventDefault())}})},getGhostBeforeProps(){return t.element({"data-ghost":`before`,style:Xe(e,l)})},getGhostAfterProps(){return t.element({"data-ghost":`after`,style:Ze()})},getTitleProps(){return t.element({...k.title.attrs,id:We(a)})},getDescriptionProps(){return t.element({...k.description.attrs,id:Ge(a)})},getActionTriggerProps(){return t.button({...k.actionTrigger.attrs,type:`button`,onClick(e){e.defaultPrevented||(y?.onClick?.(),r({type:`DISMISS`,src:`user`}))}})},getCloseTriggerProps(){return t.button({id:Ke(a),...k.closeTrigger.attrs,type:`button`,"aria-label":c?.closeTriggerLabel,onClick(e){e.defaultPrevented||r({type:`DISMISS`,src:`user`})}})}}}var ct;function lt(){return(lt=e((()=>{h(),_(),ze(),A(),j(),ct={closeTriggerLabel:`Dismiss notification`}})))()}function ut(e){let t=e.style.height;e.style.height=`auto`;let n=e.offsetHeight;return e.style.height=t,n}function dt(e,t){let{id:n,height:r}=t;e.context.set(`heights`,e=>e.find(e=>e.id===n)?e.map(e=>e.id===n?{...e,height:r}:e):[{id:n,height:r},...e])}var ft,pt;function mt(){return(mt=e((()=>{ne(),le(),Le(),A(),j(),{not:ft}=c(),pt=y({props({props:e}){return ae(e,[`id`,`type`,`parent`,`removeDelay`],`toast`),{closable:!0,...e,duration:qe(e.duration,e.type)}},initialState({prop:e}){return e(`type`)===`loading`||e(`duration`)===1/0?`visible:persist`:`visible`},context({prop:e,bindable:t}){return{remainingTime:t(()=>({defaultValue:qe(e(`duration`),e(`type`))})),createdAt:t(()=>({defaultValue:Date.now()})),mounted:t(()=>({defaultValue:!1})),initialHeight:t(()=>({defaultValue:0}))}},refs(){return{closeTimerStartTime:Date.now(),lastCloseStartTimerStartTime:0}},computed:{zIndex:({prop:e})=>{let t=e(`parent`).context.get(`toasts`),n=t.findIndex(t=>t.id===e(`id`));return t.length-n},height:({prop:e})=>e(`parent`).context.get(`heights`).find(t=>t.id===e(`id`))?.height??0,heightIndex:({prop:e})=>e(`parent`).context.get(`heights`).findIndex(t=>t.id===e(`id`)),frontmost:({prop:e})=>e(`index`)===0,heightBefore:({prop:e})=>{let t=e(`parent`).context.get(`heights`),n=t.findIndex(t=>t.id===e(`id`));return t.reduce((e,t,r)=>r>=n?e:e+t.height,0)},shouldPersist:({prop:e})=>e(`type`)===`loading`||e(`duration`)===1/0},watch({track:e,prop:t,send:n}){e([()=>t(`message`)],()=>{let e=t(`message`);e&&n({type:e,src:`programmatic`})}),e([()=>t(`type`),()=>t(`duration`)],()=>{n({type:`UPDATE`})})},on:{UPDATE:[{guard:`shouldPersist`,target:`visible:persist`,actions:[`resetCloseTimer`]},{target:`visible:updating`,actions:[`resetCloseTimer`]}],MEASURE:{actions:[`measureHeight`]}},entry:[`setMounted`,`measureHeight`,`invokeOnVisible`],effects:[`trackHeight`],states:{"visible:updating":{tags:[`visible`,`updating`],effects:[`waitForNextTick`],on:{SHOW:{target:`visible`}}},"visible:persist":{tags:[`visible`,`paused`],on:{RESUME:{guard:ft(`isLoadingType`),target:`visible`,actions:[`setCloseTimer`]},DISMISS:{target:`dismissing`}}},visible:{tags:[`visible`],effects:[`waitForDuration`],on:{DISMISS:{target:`dismissing`},PAUSE:{target:`visible:persist`,actions:[`syncRemainingTime`]}}},dismissing:{entry:[`invokeOnDismiss`],effects:[`waitForRemoveDelay`],on:{REMOVE:{target:`unmounted`,actions:[`notifyParentToRemove`]}}},unmounted:{entry:[`invokeOnUnmount`]}},implementations:{effects:{waitForRemoveDelay({prop:e,send:t}){return Fe(()=>{t({type:`REMOVE`,src:`timer`})},e(`removeDelay`))},waitForDuration({send:e,context:t,computed:n}){if(!n(`shouldPersist`))return Fe(()=>{e({type:`DISMISS`,src:`timer`})},t.get(`remainingTime`))},waitForNextTick({send:e}){return Fe(()=>{e({type:`SHOW`,src:`timer`})},0)},trackHeight({scope:e,prop:t}){let n;return ce(()=>{let r=Ue(e);if(!r)return;let i=new(e.getWin()).MutationObserver(()=>{let e=ut(r),n={id:t(`id`),height:e};dt(t(`parent`),n)});i.observe(r,{childList:!0,subtree:!0,characterData:!0}),n=()=>i.disconnect()}),()=>n?.()}},guards:{isLoadingType:({prop:e})=>e(`type`)===`loading`,shouldPersist:({computed:e})=>e(`shouldPersist`)},actions:{setMounted({context:e}){ce(()=>{e.set(`mounted`,!0)})},measureHeight({scope:e,prop:t,context:n}){queueMicrotask(()=>{let r=Ue(e);if(!r)return;let i=ut(r);n.set(`initialHeight`,i);let a={id:t(`id`),height:i};dt(t(`parent`),a)})},setCloseTimer({refs:e}){e.set(`closeTimerStartTime`,Date.now())},resetCloseTimer({context:e,refs:t,prop:n}){t.set(`closeTimerStartTime`,Date.now()),e.set(`remainingTime`,qe(n(`duration`),n(`type`)))},syncRemainingTime({context:e,refs:t}){e.set(`remainingTime`,e=>{let n=t.get(`closeTimerStartTime`),r=Date.now()-n;return t.set(`lastCloseStartTimerStartTime`,Date.now()),e-r})},notifyParentToRemove({prop:e}){e(`parent`).send({type:`TOAST.REMOVE`,id:e(`id`)})},invokeOnDismiss({prop:e,event:t}){e(`onStatusChange`)?.({status:`dismissing`,src:t.src})},invokeOnUnmount({prop:e}){e(`onStatusChange`)?.({status:`unmounted`})},invokeOnVisible({prop:e}){e(`onStatusChange`)?.({status:`visible`})}}}})})))()}function ht(e={}){let t=gt(e,{placement:`bottom`,overlap:!1,max:24,gap:16,offsets:`1rem`,hotkey:[`altKey`,`KeyT`],removeDelay:200,pauseOnPageIdle:!0}),n=[],r=[],i=new Set,a=[],s=e=>(n.push(e),()=>{let t=n.indexOf(e);n.splice(t,1)}),c=e=>(n.forEach(t=>t(e)),e),l=e=>{if(r.length>=t.max){a.push(e);return}c(e),r.unshift(e)},u=()=>{for(a=yt(a);a.length>0&&r.length<t.max;){let e=a.shift();e&&(c(e),r.unshift(e))}},d=e=>{let n=e.id??`toast:${oe()}`,a=r.find(e=>e.id===n);if(i.has(n)&&i.delete(n),a)r=r.map(t=>t.id===n?c({...t,...e,id:n}):t);else{let r={id:n,duration:t.duration,removeDelay:t.removeDelay,type:vt,...e,stacked:!t.overlap,gap:t.gap},i=r.priority??M(r.type,!!r.action);l({...r,priority:i})}return n},f=e=>(i.add(e),e?(n.forEach(t=>t({id:e,dismiss:!0})),r=r.filter(t=>t.id!==e),u()):(r.forEach(e=>{n.forEach(t=>t({id:e.id,dismiss:!0}))}),r=[],a=[]),e);return{attrs:t,subscribe:s,create:d,update:(e,t)=>d({id:e,...t}),remove:f,dismiss:e=>{r=e==null?r.map(e=>c({...e,message:`DISMISS`})):r.map(t=>t.id===e?c({...t,message:`DISMISS`}):t)},error:e=>d({...e,type:`error`}),success:e=>d({...e,type:`success`}),info:e=>d({...e,type:`info`}),warning:e=>d({...e,type:`warning`}),loading:e=>d({...e,type:`loading`}),getVisibleToasts:()=>r.filter(e=>!i.has(e.id)),getCount:()=>r.length,promise:(e,t,n={})=>{if(!t||!t.loading){p(`[zag-js > toast] toaster.promise() requires at least a 'loading' option to be specified`);return}let r=d({...n,...t.loading,promise:e,type:`loading`}),i=!0,a,s=o(e).then(async e=>{if(a=[`resolve`,e],bt(e)&&!e.ok){i=!1;let a=o(t.error,`HTTP Error! status: ${e.status}`);d({...n,...a,id:r,type:`error`})}else if(t.success!==void 0){i=!1;let a=o(t.success,e);d({...n,...a,id:r,type:a.type??`success`})}}).catch(async e=>{if(a=[`reject`,e],t.error!==void 0){i=!1;let a=o(t.error,e);d({...n,...a,id:r,type:`error`})}}).finally(()=>{i&&f(r),t.finally?.()});return{id:r,unwrap:()=>new Promise((e,t)=>s.then(()=>a[0]===`reject`?t(a[1]):e(a[1])).catch(t))}},pause:e=>{r=e==null?r.map(e=>c({...e,message:`PAUSE`})):r.map(t=>t.id===e?c({...t,message:`PAUSE`}):t)},resume:e=>{r=e==null?r.map(e=>c({...e,message:`RESUME`})):r.map(t=>t.id===e?c({...t,message:`RESUME`}):t)},isVisible:e=>!i.has(e)&&!!r.find(t=>t.id===e),isDismissed:e=>i.has(e),expand:()=>{r=r.map(e=>c({...e,stacked:!0}))},collapse:()=>{r=r.map(e=>c({...e,stacked:!1}))}}}var gt,_t,vt,M,yt,bt;function xt(){return(xt=e((()=>{_(),l(),gt=(e,t)=>({...t,...ee(e)}),_t={error:[1,2],warning:[3,6],loading:[4,5],success:[5,7],info:[6,8]},vt=`info`,M=(e,t)=>{let[n,r]=_t[e??vt];return t?n:r},yt=e=>e.sort((e,t)=>(e.priority??M(e.type,!!e.action))-(t.priority??M(t.type,!!t.action))),bt=e=>e&&typeof e==`object`&&`ok`in e&&typeof e.ok==`boolean`&&`status`in e&&typeof e.status==`number`})))()}var St;function Ct(){return(Ct=e((()=>{tt(),ot(),lt(),mt(),xt(),St={connect:et,machine:at}})))()}var wt;function Tt(){return(Tt=e((()=>{Ct(),wt=e=>ht(e)})))()}var Et,N;function P(){return(P=e((()=>{_e(),[Et,N]=be({name:`ToastContext`,hookName:`useToastContext`,providerName:`<ToastProvider />`})})))()}var Dt,Ot,kt;function At(){return(At=e((()=>{x(),P(),Dt=t(),C(),Ot=n(),kt=(0,Dt.forwardRef)((e,t)=>{let n=N(),r=S(n.getActionTriggerProps(),e);return(0,Ot.jsx)(w.button,{...r,ref:t})}),kt.displayName=`ToastActionTrigger`})))()}var jt,Mt,Nt;function Pt(){return(Pt=e((()=>{x(),P(),jt=t(),C(),Mt=n(),Nt=(0,jt.forwardRef)((e,t)=>{let n=N(),r=S(n.getCloseTriggerProps(),e);return(0,Mt.jsx)(w.button,{...r,ref:t})}),Nt.displayName=`ToastCloseTrigger`})))()}var Ft;function It(){return(It=e((()=>{P(),Ft=e=>e.children(N())})))()}var Lt,Rt,zt;function Bt(){return(Bt=e((()=>{x(),P(),Lt=t(),C(),Rt=n(),zt=(0,Lt.forwardRef)((e,t)=>{let n=N(),r=S(n.getDescriptionProps(),e);return(0,Rt.jsx)(w.div,{...r,ref:t})}),zt.displayName=`ToastDescription`})))()}var Vt,F,Ht;function Ut(){return(Ut=e((()=>{P(),Vt=t(),C(),F=n(),Ht=(0,Vt.forwardRef)((e,t)=>{let n=N(),r=S(n.getRootProps(),e);return(0,F.jsxs)(`div`,{...r,ref:t,children:[(0,F.jsx)(`div`,{...n.getGhostBeforeProps()}),e.children,(0,F.jsx)(`div`,{...n.getGhostAfterProps()})]})}),Ht.displayName=`ToastRoot`})))()}var Wt,Gt,Kt;function qt(){return(qt=e((()=>{x(),P(),Wt=t(),C(),Gt=n(),Kt=(0,Wt.forwardRef)((e,t)=>{let n=N(),r=S(n.getTitleProps(),e);return(0,Gt.jsx)(w.div,{...r,ref:t})}),Kt.displayName=`ToastTitle`})))()}var Jt,I,Yt,Xt;function Zt(){return(Zt=e((()=>{x(),he(),xe(),P(),Ct(),Jt=t(),C(),re(),te(),I=n(),Yt=(0,Jt.forwardRef)((e,t)=>{let{toaster:n,children:r,...i}=e,a=ge(),o=ye(),s=g(St.machine,{store:n,id:(0,Jt.useId)(),dir:a?.dir,getRootNode:o?.getRootNode}),c=St.connect(s,v),l=S(c.getGroupProps(),i);return(0,I.jsx)(w.div,{...l,ref:t,children:c.getToasts().map((e,t)=>(0,I.jsx)(Xt,{value:e,parent:s,index:t,children:e=>r(e)},e.id))})}),Yt.displayName=`Toaster`,Xt=e=>{let t=ye(),n={...e.value,parent:e.parent,index:e.index,getRootNode:t.getRootNode},r=st(g(pt,{...n}),v);return(0,I.jsx)(Et,{value:r,children:e.children(e.value)})},Xt.displayName=`ToastActor`})))()}var L;function Qt(){return(Qt=e((()=>{ve(),At(),Pt(),It(),Bt(),Ut(),qt(),L=Se({ActionTrigger:()=>kt,CloseTrigger:()=>Nt,Context:()=>Ft,Description:()=>zt,Root:()=>Ht,Title:()=>Kt})})))()}var $t,en,tn;function nn(){return(nn=e((()=>{$t=`_actions_hdgi1_44`,en=`_icon_hdgi1_71`,tn={"slide-in":`_slide-in_hdgi1_1`,"fade-out":`_fade-out_hdgi1_1`,actions:$t,icon:en}})))()}function rn(e){return(0,R.jsx)(z,{...e})}var an,R,on,z,B;function sn(){return(sn=e((()=>{an=r(),Qt(),Zt(),nn(),a(),we(),R=n(),on={success:`check_circle`,info:`info`,warning:`error`,error:`cancel`},z=e=>{let t=(0,an.c)(19),{style:n,className:r,variant:a,title:o,description:s,onDismiss:c,actions:l}=e,u=on[a===void 0?`info`:a],d;t[0]===u?d=t[1]:(d=(0,R.jsx)(i,{icon:u,size:`small`,filled:!0,className:tn.icon}),t[0]=u,t[1]=d);let f;t[2]===o?f=t[3]:(f=o&&(0,R.jsx)(Ce,{variant:`body-sm-md`,asChild:!0,children:(0,R.jsx)(L.Title,{children:o})}),t[2]=o,t[3]=f);let p;t[4]===s?p=t[5]:(p=s&&(0,R.jsx)(Ce,{variant:`body-sm-reg`,asChild:!0,children:(0,R.jsx)(L.Description,{children:s})}),t[4]=s,t[5]=p);let m;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,R.jsx)(i,{icon:`close`,size:`small`}),t[6]=m):m=t[6];let h;t[7]===c?h=t[8]:(h=(0,R.jsx)(L.CloseTrigger,{onClick:c,children:m}),t[7]=c,t[8]=h);let g;t[9]===l?g=t[10]:(g=l&&(0,R.jsx)(`div`,{className:tn.actions,children:l}),t[9]=l,t[10]=g);let _;return t[11]!==r||t[12]!==n||t[13]!==d||t[14]!==f||t[15]!==p||t[16]!==h||t[17]!==g?(_=(0,R.jsxs)(L.Root,{style:n,className:r,children:[d,f,p,h,g]}),t[11]=r,t[12]=n,t[13]=d,t[14]=f,t[15]=p,t[16]=h,t[17]=g,t[18]=_):_=t[18],_},B=e=>{let t=(0,an.c)(2),{toaster:n}=e,r;return t[0]===n?r=t[1]:(r=(0,R.jsx)(Yt,{toaster:n,children:rn}),t[0]=n,t[1]=r),r},z.displayName=`DsToast`,B.displayName=`DsToastGroup`})))()}var cn,ln,un,dn,fn,V,H;function pn(){return(pn=e((()=>{cn=r(),ln=t(),Tt(),sn(),un=n(),dn=(0,ln.createContext)(null),fn=e=>t=>e.create({...t,type:t.variant,duration:t.persistent?1/0:t.duration||6e3}),V=e=>{let t=(0,cn.c)(17),{children:n,max:r}=e,i=r===void 0?3:r,a,o;t[0]===i?(a=t[1],o=t[2]):(o=wt({placement:`top`,gap:24,max:i}),a=fn(o),t[0]=i,t[1]=a,t[2]=o);let s;t[3]===o?s=t[4]:(s=()=>o.dismiss(),t[3]=o,t[4]=s);let c;t[5]!==a||t[6]!==s||t[7]!==o.dismiss||t[8]!==o.getCount||t[9]!==o.getVisibleToasts?(c={createToast:a,dismissToast:o.dismiss,dismissAllToasts:s,getToasts:o.getVisibleToasts,getToastsCount:o.getCount},t[5]=a,t[6]=s,t[7]=o.dismiss,t[8]=o.getCount,t[9]=o.getVisibleToasts,t[10]=c):c=t[10];let l=c,u;t[11]===o?u=t[12]:(u=(0,un.jsx)(B,{toaster:o}),t[11]=o,t[12]=u);let d;return t[13]!==n||t[14]!==l||t[15]!==u?(d=(0,un.jsxs)(dn.Provider,{value:l,children:[n,u]}),t[13]=n,t[14]=l,t[15]=u,t[16]=d):d=t[16],d},H=()=>{let e=(0,ln.useContext)(dn);if(!e)throw Error(`useToast must be used within a ToastProvider`);return e},V.displayName=`DsToastProvider`})))()}var mn;function hn(){return(hn=e((()=>{mn=[`info`,`success`,`warning`,`error`]})))()}var U,W,gn,G,K,q,J,Y,X,Z,Q,$,_n;function vn(){return(vn=e((()=>{U=r(),sn(),pn(),hn(),De(),Te(),W=n(),gn={title:`Components/Toast`,component:z,parameters:{layout:`centered`,docs:{description:{component:"Temporary, non-blocking messages surfaced through `DsToastProvider` and the `useToaster` hook. Toasts are created imperatively from an event handler, so every example wraps a trigger in the provider."}}},argTypes:{variant:{control:{type:`select`},options:mn}}},G={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(T,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`success`,title:`Success!`,description:`Your action was completed successfully.`}),children:`Show success toast`}),e[0]=t,e[1]=n),n},{})})},K={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(T,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`info`,title:`Information`,description:`Here is some helpful information for you.`}),children:`Show info toast`}),e[0]=t,e[1]=n),n},{})})},q={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(T,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,title:`Warning`,description:`Please be aware of this important notice.`}),children:`Show warning toast`}),e[0]=t,e[1]=n),n},{})})},J={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(T,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`error`,title:`Error`,description:`Something went wrong. Please try again.`,persistent:!0}),children:`Show error toast`}),e[0]=t,e[1]=n),n},{})})},Y={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(T,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,description:`Something went wrong. Please try again.`}),children:`Show toast without title`}),e[0]=t,e[1]=n),n},{})})},X={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(3),{createToast:t,dismissToast:n}=H(),r;return e[0]!==t||e[1]!==n?(r=(0,W.jsx)(T,{design:`v1.2`,variant:`filled`,onClick:()=>{let e=t({variant:`warning`,title:`File upload failed`,description:`Your file could not be uploaded.`,persistent:!0,actions:(0,W.jsxs)(Ee,{direction:`row`,gap:`var(--xs)`,justifyContent:`flex-end`,children:[(0,W.jsx)(T,{design:`v1.2`,variant:`ghost`,onClick:()=>n(e),children:`Abort`}),(0,W.jsx)(T,{design:`v1.2`,variant:`danger`,onClick:()=>n(e),children:`Re-try`})]})})},children:`Show toast with actions`}),e[0]=t,e[1]=n,e[2]=r):r=e[2],r},{})})},Z={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(T,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,title:`Important notice`,description:`This is a longer message that demonstrates how the toast handles extended content. The text wraps and stays readable while remaining within the toast boundaries.`}),children:`Show long content toast`}),e[0]=t,e[1]=n),n},{})})},Q={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(T,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`info`,title:`Sync in progress`,description:`This toast stays until you close it.`,persistent:!0}),children:`Show persistent toast`}),e[0]=t,e[1]=n),n},{})})},$={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(9),{createToast:t,dismissAllToasts:n}=H(),r;e[0]===t?r=e[1]:(r=()=>{t({variant:`success`,title:`First toast`,description:`This is the first message.`}),t({variant:`info`,title:`Second toast`,description:`This is the second message.`}),t({variant:`warning`,title:`Third toast`,description:`This is the third message.`})},e[0]=t,e[1]=r);let i=r,a;e[2]===i?a=e[3]:(a=(0,W.jsx)(T,{design:`v1.2`,variant:`filled`,onClick:i,children:`Show multiple toasts`}),e[2]=i,e[3]=a);let o;e[4]===n?o=e[5]:(o=(0,W.jsx)(T,{design:`v1.2`,variant:`ghost`,onClick:()=>n(),children:`Dismiss all`}),e[4]=n,e[5]=o);let s;return e[6]!==a||e[7]!==o?(s=(0,W.jsxs)(Ee,{direction:`row`,gap:`var(--xs)`,children:[a,o]}),e[6]=a,e[7]=o,e[8]=s):s=e[8],s},{})})},_n=[`Success`,`Info`,`Warning`,`Error`,`NoTitle`,`WithActions`,`LongContent`,`Persistent`,`MultipleToasts`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Toasts stack up to the provider's `max` (default 3). `dismissAllToasts` clears them at once.",...$.parameters?.docs?.description}}}})))()}vn();export{J as Error,K as Info,Z as LongContent,$ as MultipleToasts,Y as NoTitle,Q as Persistent,G as Success,q as Warning,X as WithActions,_n as __namedExportsOrder,gn as default};