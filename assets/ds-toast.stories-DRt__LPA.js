import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n}from"./iframe-BUfpyP-J.js";import{n as r}from"./classnames-BngcLiyu.js";import{n as i,t as a}from"./ds-icon-Bkp4tLuH.js";import{C as o,E as s,St as c,T as l,Y as u,_ as d,_t as f,a as p,b as m,c as h,et as g,f as _,h as v,ht as y,i as b,m as ee,n as x,o as te,p as ne,pt as re,r as ie,s as ae,t as oe,tt as S,u as se,w as ce,xt as le}from"./normalize-props-BDW4W1cu.js";import{a as ue,n as de,t as fe}from"./raf-D1nJPjhp.js";import{B as pe,G as me}from"./ds-tooltip-BzsjEG2u.js";import{C as he,_ as ge,a as _e,c as C,g as w,h as T,i as ve,m as ye,n as be,o as xe,p as Se,r as Ce,s as E,t as we,x as Te}from"./runtime-B00ETiTt.js";import{n as Ee,t as De}from"./dismissable-layer-Ryk4Th5b.js";import{n as Oe,t as ke}from"./resize-observer-8XlAbyDW.js";import{n as Ae,t as je}from"./ds-typography-Cu8kQI9H.js";import{n as Me,t as Ne}from"./ds-stack-CI9fJJ0W.js";import{n as D,t as Pe}from"./ds-button-D1nlTJUe.js";var Fe,Ie,Le,O,Re,ze,Be;function Ve(){return(Ve=e((()=>{Fe=Object.defineProperty,Ie=e=>{throw TypeError(e)},Le=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t,n)=>Le(e,typeof t==`symbol`?t:t+``,n),Re=(e,t,n)=>t.has(e)||Ie(`Cannot `+n),ze=(e,t,n)=>(Re(e,t,`read from private field`),n?n.call(e):t.get(e)),Be=(e,t,n)=>t.has(e)?Ie(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n)})))()}function He(e,t){let n=new Ue(({deltaMs:n})=>{if(n>=t)return e(),!1});return n.start(),()=>n.stop()}var k,A,Ue;function We(){return(We=e((()=>{Ve(),k=()=>performance.now(),Ue=class{constructor(e){O(this,`onTick`,e),O(this,`frameId`,null),O(this,`pausedAtMs`,null),O(this,`context`),O(this,`cancelFrame`,()=>{this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}),O(this,`setStartMs`,e=>{this.context.startMs=e}),O(this,`start`,()=>{if(this.frameId!==null)return;let e=k();this.pausedAtMs===null?this.context.startMs=e:(this.context.startMs+=e-this.pausedAtMs,this.pausedAtMs=null),this.frameId=requestAnimationFrame(ze(this,A))}),O(this,`pause`,()=>{this.frameId!==null&&(this.cancelFrame(),this.pausedAtMs=k())}),O(this,`stop`,()=>{this.frameId!==null&&(this.cancelFrame(),this.pausedAtMs=null)}),Be(this,A,e=>{this.context.now=e,this.context.deltaMs=e-this.context.startMs,this.onTick(this.context)===!1?this.stop():this.frameId=requestAnimationFrame(ze(this,A))}),this.context={now:0,startMs:k(),deltaMs:0}}get elapsedMs(){return this.pausedAtMs===null?k()-this.context.startMs:this.pausedAtMs-this.context.startMs}},A=new WeakMap})))()}var Ge,j;function M(){return(M=e((()=>{c(),Ge=le(`toast`).parts(`group`,`root`,`title`,`description`,`actionTrigger`,`closeTrigger`),j=Ge.build()})))()}function Ke(e,t){let{filter:n=()=>!0,onChange:r,onMutate:i}=t,a=g(e),o=fe.create(),s=()=>o.request(r),c,l=()=>{c?.();let t=Array.from(e.children).filter(n);c=d(...t.map(e=>Oe.observe(e,s)))};l();let u=new a.MutationObserver(()=>{o.cancel(),r(),i?.(),l()});return u.observe(e,{childList:!0,subtree:!0,characterData:!0}),()=>{u.disconnect(),c?.(),o.cancel()}}var qe,N,Je,Ye,Xe,Ze,Qe,$e,et,tt;function P(){return(P=e((()=>{de(),S(),pe(),ke(),m(),qe=e=>`toast-group:${e}`,N=(e,t)=>e.getById(`toast-group:${t}`),Je=(e,t)=>me(N(e,t),`[data-scope=toast][data-part=root]`),Ye=e=>`toast:${e.id}`,Xe=e=>e.getById(Ye(e)),Ze=e=>`toast:${e.id}:title`,Qe=e=>`toast:${e.id}:description`,$e=e=>e.getById(Ze(e)),et=e=>e.getById(Qe(e)),tt=e=>`toast${e.id}:close`})))()}function nt(e,t){return e??ct[t]??ct.DEFAULT}function rt(e,t){let{prop:n,computed:r,context:i}=e,{offsets:a,gap:o}=n(`store`).attrs,s=i.get(`heights`),c=lt(a),l=n(`dir`)===`rtl`,u=t.replace(`-start`,l?`-right`:`-left`).replace(`-end`,l?`-left`:`-right`),d=u.includes(`right`),f=u.includes(`left`),p={position:`fixed`,pointerEvents:r(`count`)>0?void 0:`none`,display:`flex`,flexDirection:`column`,"--gap":`${o}px`,"--first-height":`${s[0]?.height||0}px`,"--viewport-offset-left":c.left,"--viewport-offset-right":c.right,"--viewport-offset-top":c.top,"--viewport-offset-bottom":c.bottom,zIndex:re},m=`center`;return d&&(m=`flex-end`),f&&(m=`flex-start`),p.alignItems=m,u.includes(`top`)&&(p.top=`max(env(safe-area-inset-top, 0px), ${c.top})`),u.includes(`bottom`)&&(p.bottom=`max(env(safe-area-inset-bottom, 0px), ${c.bottom})`),u.includes(`left`)||(p.insetInlineEnd=`calc(env(safe-area-inset-right, 0px) + ${c.right})`),u.includes(`right`)||(p.insetInlineStart=`calc(env(safe-area-inset-left, 0px) + ${c.left})`),p}function it(e,t){let{prop:n,context:r,computed:i}=e,a=n(`parent`),o=a.computed(`placement`),{gap:s}=a.prop(`store`).attrs,[c]=o.split(`-`),l=r.get(`mounted`),u=r.get(`remainingTime`),d=i(`height`),f=i(`frontmost`),p=!f,m=n(`parent`).state.matches(`stack`),h=!m,g=n(`type`)===`loading`?2**53-1:u,_=i(`heightIndex`)*s+i(`heightBefore`),v={position:`absolute`,pointerEvents:`auto`,"--opacity":`0`,"--remove-delay":`${n(`removeDelay`)}ms`,"--duration":`${g}ms`,"--initial-height":`${d}px`,"--offset":`${_}px`,"--index":n(`index`),"--z-index":i(`zIndex`),"--lift-amount":`calc(var(--lift) * var(--gap))`,"--y":`100%`,"--x":`0`},y=e=>Object.assign(v,e);return c===`top`?y({top:`0`,"--sign":`-1`,"--y":`-100%`,"--lift":`1`}):c===`bottom`&&y({bottom:`0`,"--sign":`1`,"--y":`100%`,"--lift":`-1`}),l&&(y({"--y":`0`,"--opacity":`1`}),m&&y({"--y":`calc(var(--lift) * var(--offset))`,"--height":`var(--initial-height)`})),t||y({"--opacity":`0`,pointerEvents:`none`}),p&&h&&(y({"--base-scale":`var(--index) * 0.05 + 1`,"--y":`calc(var(--lift-amount) * var(--index))`,"--scale":`calc(-1 * var(--base-scale))`,"--height":`var(--first-height)`}),t||y({"--y":`calc(var(--sign) * 40%)`})),p&&m&&!t&&y({"--y":`calc(var(--lift) * var(--offset) + var(--lift) * -100%)`}),f&&!t&&y({"--y":`calc(var(--lift) * -100%)`}),v}function at(e,t){let{computed:n}=e,r={position:`absolute`,inset:`0`,scale:`1 2`,pointerEvents:t?`none`:`auto`};return n(`frontmost`)&&!t&&(e=>Object.assign(r,e))({height:`calc(var(--initial-height) + 80%)`}),r}function ot(){return{position:`absolute`,left:`0`,height:`calc(var(--gap) + 2px)`,bottom:`100%`,width:`100%`}}function st(e,t){let{id:n,height:r}=t;e.context.set(`heights`,t=>{let i=t.find(e=>e.id===n);if(i)return i.height===r?t:t.map(e=>e.id===n?{...e,height:r}:e);let a=e.context.get(`toasts`),o=e=>a.findIndex(t=>t.id===e),s=o(n),c=t.findIndex(e=>{let t=o(e.id);return t===-1||t>s});return c===-1&&(c=t.length),[...t.slice(0,c),{id:n,height:r},...t.slice(c)]})}var ct,lt;function ut(){return(ut=e((()=>{f(),ct={info:5e3,error:5e3,success:2e3,loading:1/0,warning:5e3,DEFAULT:5e3},lt=e=>typeof e==`string`?{left:e,right:e,bottom:e,top:e}:e})))()}function dt(e,t){let{context:n,prop:r,send:i,refs:a,computed:o}=e;return{getCount(){return n.get(`toasts`).length},getToasts(){return n.get(`toasts`)},getGroupProps(n={}){let{label:s=`Notifications`}=n,{hotkey:c}=r(`store`).attrs,l=c.join(`+`).replace(/Key/g,``).replace(/Digit/g,``),d=o(`placement`),[f,p=`center`]=d.split(`-`);return t.element({...j.group.attrs,dir:r(`dir`),tabIndex:-1,role:`region`,"aria-label":`${s}, ${d} (${l})`,id:qe(d),"data-placement":d,"data-side":f,"data-align":p,"aria-live":`polite`,"aria-relevant":`additions text`,"aria-atomic":`false`,style:rt(e,d),onMouseEnter(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_ENTER`,placement:d})},onMouseMove(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_ENTER`,placement:d})},onMouseLeave(){a.get(`ignoreMouseTimer`).isActive()||i({type:`REGION.POINTER_LEAVE`,placement:d})},onFocus(e){i({type:`REGION.FOCUS`,target:e.relatedTarget})},onBlur(e){a.get(`isFocusWithin`)&&!u(e.currentTarget,e.relatedTarget)&&queueMicrotask(()=>i({type:`REGION.BLUR`}))}})},subscribe(e){return r(`store`).subscribe(()=>e(n.get(`toasts`)))}}}function ft(){return(ft=e((()=>{S(),M(),P(),ut()})))()}function pt(e,t,n){for(let r=t;r>=0&&r<e.length;r+=n)if(e[r].dataset.state===`open`)return e[r];return null}var mt,ht,gt,_t;function vt(){return(vt=e((()=>{ae(),De(),he(),de(),S(),m(),P(),{guards:mt,createMachine:ht}=h(),{and:gt}=mt,_t=ht({props({props:e}){return{dir:`ltr`,id:ce(),...e,store:e.store}},initialState({prop:e}){return e(`store`).attrs.overlap?`overlap`:`stack`},refs(){return{lastFocusedEl:null,isFocusWithin:!1,isPointerWithin:!1,ignoreMouseTimer:fe.create(),dismissableCleanup:void 0}},context({bindable:e}){return{toasts:e(()=>({defaultValue:[],sync:!0,hash:e=>e.map(e=>e.id).join(`,`)})),heights:e(()=>({defaultValue:[],sync:!0}))}},computed:{count:({context:e})=>e.get(`toasts`).length,overlap:({prop:e})=>e(`store`).attrs.overlap,placement:({prop:e})=>e(`store`).attrs.placement},effects:[`subscribeToStore`,`subscribeToLayout`,`trackDocumentVisibility`,`trackHotKeyPress`],watch({track:e,context:t,action:n}){e([()=>t.hash(`toasts`)],()=>{queueMicrotask(()=>{n([`collapsedIfEmpty`,`setDismissableBranch`,`resetInteractionIfEmpty`])})})},exit:[`clearDismissableBranch`,`clearLastFocusedEl`,`clearMouseEventTimer`],on:{PAUSE_ALL:{actions:[`pauseToasts`]},RESUME_ALL:{actions:[`resumeToasts`]},"DOC.HOTKEY":{actions:[`focusRegionEl`]},"REGION.BLUR":[{guard:gt(`isOverlapping`,`isPointerOut`),target:`overlap`,actions:[`resumeToasts`,`restoreFocusIfPointerOut`]},{guard:`isPointerOut`,target:`stack`,actions:[`resumeToasts`,`restoreFocusIfPointerOut`]},{actions:[`clearFocusWithin`]}],"TOAST.DISMISS":{actions:[`moveFocusOnDismiss`]},"TOAST.REMOVE":{actions:[`removeToast`,`removeHeight`,`ignoreMouseEventsTemporarily`]},"TOAST.PAUSE":{actions:[`pauseToasts`]}},states:{stack:{on:{"REGION.POINTER_LEAVE":[{guard:`isOverlapping`,target:`overlap`,actions:[`clearPointerWithin`,`resumeToasts`]},{actions:[`clearPointerWithin`,`resumeToasts`]}],"REGION.OVERLAP":{target:`overlap`},"REGION.FOCUS":{actions:[`setLastFocusedEl`,`pauseToasts`]},"REGION.POINTER_ENTER":{actions:[`setPointerWithin`,`pauseToasts`]}}},overlap:{on:{"REGION.STACK":{target:`stack`},"REGION.POINTER_ENTER":{target:`stack`,actions:[`setPointerWithin`,`pauseToasts`]},"REGION.POINTER_LEAVE":{actions:[`clearPointerWithin`,`resumeToasts`]},"REGION.FOCUS":{target:`stack`,actions:[`setLastFocusedEl`,`pauseToasts`]}}}},implementations:{guards:{isOverlapping:({computed:e})=>e(`overlap`),isPointerOut:({refs:e})=>!e.get(`isPointerWithin`)},effects:{subscribeToStore({context:e,prop:t}){let n=t(`store`);return e.set(`toasts`,n.getVisibleToasts()),n.subscribe(t=>{t.dismiss?e.set(`toasts`,e=>e.filter(e=>e.id!==t.id)):e.set(`toasts`,e=>{let n=e.findIndex(e=>e.id===t.id);return n===-1?[t,...e]:[...e.slice(0,n),{...e[n],...t},...e.slice(n+1)]})})},subscribeToLayout({prop:e,send:t}){return e(`store`).subscribeLayout(e=>{t({type:e?`REGION.STACK`:`REGION.OVERLAP`})})},trackHotKeyPress({prop:e,send:t}){return ge(document,`keydown`,n=>{let{hotkey:r}=e(`store`).attrs;r.every(e=>n[e]||n.code===e)&&t({type:`DOC.HOTKEY`})},{capture:!0})},trackDocumentVisibility({prop:e,send:t,scope:n}){let{pauseOnPageIdle:r}=e(`store`).attrs;if(!r)return;let i=n.getDoc();return i.visibilityState===`hidden`&&t({type:`PAUSE_ALL`}),ge(i,`visibilitychange`,()=>{t({type:i.visibilityState===`hidden`?`PAUSE_ALL`:`RESUME_ALL`})})}},actions:{setDismissableBranch({refs:e,context:t,computed:n,scope:r}){let i=t.get(`toasts`),a=n(`placement`),o=i.length>0;if(!o){e.get(`dismissableCleanup`)?.(),e.set(`dismissableCleanup`,void 0);return}if(o&&e.get(`dismissableCleanup`))return;let s=Ee(()=>N(r,a),{defer:!0,getRootNode:r.getRootNode});e.set(`dismissableCleanup`,s)},clearDismissableBranch({refs:e}){e.get(`dismissableCleanup`)?.(),e.set(`dismissableCleanup`,void 0)},focusRegionEl({scope:e,computed:t}){queueMicrotask(()=>{N(e,t(`placement`))?.focus()})},pauseToasts({prop:e}){e(`store`).pause()},resumeToasts({prop:e,refs:t,scope:n,event:r}){r.type===`REGION.BLUR`&&t.set(`isFocusWithin`,!1),!(e(`store`).attrs.pauseOnPageIdle&&n.getDoc().visibilityState===`hidden`||t.get(`isPointerWithin`)||t.get(`isFocusWithin`))&&e(`store`).resume()},removeToast({prop:e,event:t}){e(`store`).remove(t.id)},removeHeight({event:e,context:t}){e?.id!=null&&queueMicrotask(()=>{t.set(`heights`,t=>t.filter(t=>t.id!==e.id))})},collapsedIfEmpty({send:e,computed:t}){!t(`overlap`)||t(`count`)>1||e({type:`REGION.OVERLAP`})},setLastFocusedEl({refs:e,event:t}){e.get(`isFocusWithin`)||(e.set(`isFocusWithin`,!0),e.set(`lastFocusedEl`,t.target??null))},moveFocusOnDismiss({refs:e,scope:t,computed:n,event:r}){if(r.focusVisible){let e=Je(t,n(`placement`)),r=e.findIndex(e=>u(e,t.getActiveElement())),i=pt(e,r+1,1)??pt(e,r-1,-1);if(i){i.focus({preventScroll:!0});return}}let i=e.get(`lastFocusedEl`);r.focusVisible&&i?i.focus({preventScroll:!0}):t.getActiveElement()?.blur()},resetInteractionIfEmpty({refs:e,prop:t,scope:n,computed:r}){r(`count`)>0||(e.set(`isFocusWithin`,!1),e.set(`isPointerWithin`,!1),e.set(`lastFocusedEl`,null),t(`store`).attrs.pauseOnPageIdle&&n.getDoc().visibilityState===`hidden`||t(`store`).resume())},restoreFocusIfPointerOut({refs:e}){e.get(`lastFocusedEl`)&&!e.get(`isPointerWithin`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null),e.set(`isFocusWithin`,!1))},setPointerWithin({refs:e}){e.set(`isPointerWithin`,!0)},clearPointerWithin({refs:e}){e.set(`isPointerWithin`,!1),e.get(`lastFocusedEl`)&&!e.get(`isFocusWithin`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null))},clearFocusWithin({refs:e}){e.set(`isFocusWithin`,!1)},clearLastFocusedEl({refs:e}){e.get(`lastFocusedEl`)&&(e.get(`lastFocusedEl`)?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null),e.set(`isFocusWithin`,!1))},ignoreMouseEventsTemporarily({refs:e,scope:t,computed:n,send:r}){e.get(`ignoreMouseTimer`).request(()=>ge(t.getDoc(),`pointermove`,i=>{if(!e.get(`isPointerWithin`))return;let a=N(t,n(`placement`));u(a,Te(i))||r({type:`REGION.POINTER_LEAVE`,placement:n(`placement`)})},{once:!0}))},clearMouseEventTimer({refs:e}){e.get(`ignoreMouseTimer`).cancel()}}}})})))()}function yt(e,t){let{state:n,send:r,prop:i,scope:a,context:o,computed:s}=e,c=v(bt,i(`translations`)),l=n.hasTag(`visible`),u=n.hasTag(`paused`),d=o.get(`mounted`),f=o.get(`rendered`),p=s(`frontmost`),m=i(`parent`).computed(`placement`),h=i(`type`),g=i(`parent`).state.matches(`stack`),_=i(`title`),b=i(`description`),ee=i(`action`),[x,te=`center`]=m.split(`-`);return{type:h,title:_,description:b,placement:m,visible:l,paused:u,closable:!!i(`closable`),pause(){i(`parent`).prop(`store`).pause(i(`id`))},resume(){i(`parent`).prop(`store`).resume(i(`id`))},dismiss(){r({type:`DISMISS`,src:`programmatic`})},getRootProps(){return t.element({...j.root.attrs,dir:i(`dir`),id:Ye(a),"data-state":l?`open`:`closed`,"data-type":h,"data-placement":m,"data-align":te,"data-side":x,"data-mounted":y(d),"data-paused":y(u),"data-first":y(p),"data-sibling":y(!p),"data-stack":y(g),"data-overlap":y(!g),role:`status`,"aria-atomic":`true`,"aria-describedby":b&&f.description?Qe(a):void 0,"aria-labelledby":_&&f.title?Ze(a):void 0,tabIndex:0,style:it(e,l),onKeyDown(e){e.defaultPrevented||e.key==`Escape`&&(r({type:`DISMISS`,src:`keyboard`}),e.preventDefault())}})},getGhostBeforeProps(){return t.element({"data-ghost":`before`,style:at(e,l)})},getGhostAfterProps(){return t.element({"data-ghost":`after`,style:ot()})},getTitleProps(){return t.element({...j.title.attrs,id:Ze(a)})},getDescriptionProps(){return t.element({...j.description.attrs,id:Qe(a)})},getActionTriggerProps(){return t.button({...j.actionTrigger.attrs,type:`button`,onClick(e){e.defaultPrevented||(ee?.onClick?.(),r({type:`DISMISS`,src:`user`}))}})},getCloseTriggerProps(){return t.button({id:tt(a),...j.closeTrigger.attrs,type:`button`,"aria-label":c?.closeTriggerLabel,onClick(e){e.defaultPrevented||r({type:`DISMISS`,src:`user`})}})}}}var bt;function xt(){return(xt=e((()=>{f(),ee(),M(),P(),ut(),bt={closeTriggerLabel:`Dismiss notification`}})))()}function St(e){let t=e.style.height;e.style.height=`auto`;let n=e.offsetHeight;return e.style.height=t,n}var Ct,wt,Tt;function Et(){return(Et=e((()=>{ae(),S(),de(),We(),P(),ut(),{not:Ct,and:wt}=p(),Tt=te({props({props:e}){return se(e,[`id`,`type`,`parent`,`removeDelay`],`toast`),{closable:!0,...e,duration:nt(e.duration,e.type)}},initialState({prop:e}){return e(`message`)===`DISMISS`?`dismissing`:e(`type`)===`loading`||e(`duration`)===1/0||e(`paused`)?`visible:persist`:`visible`},context({prop:e,bindable:t}){return{remainingTime:t(()=>({defaultValue:nt(e(`duration`),e(`type`))})),createdAt:t(()=>({defaultValue:Date.now()})),mounted:t(()=>({defaultValue:!1})),initialHeight:t(()=>({defaultValue:0})),rendered:t(()=>({defaultValue:{title:!0,description:!0}}))}},refs(){return{closeTimerStartTime:Date.now(),lastCloseStartTimerStartTime:0}},computed:{zIndex:({prop:e})=>{let t=e(`parent`).context.get(`toasts`),n=t.findIndex(t=>t.id===e(`id`));return t.length-n},height:({prop:e})=>e(`parent`).context.get(`heights`).find(t=>t.id===e(`id`))?.height??0,heightIndex:({prop:e})=>e(`parent`).context.get(`heights`).findIndex(t=>t.id===e(`id`)),frontmost:({prop:e})=>e(`index`)===0,heightBefore:({prop:e})=>{let t=e(`parent`).context.get(`heights`),n=t.findIndex(t=>t.id===e(`id`));return t.reduce((e,t,r)=>r>=n?e:e+t.height,0)},shouldPersist:({prop:e})=>e(`type`)===`loading`||e(`duration`)===1/0},watch({track:e,prop:t,send:n}){e([()=>t(`message`)],()=>{let e=t(`message`);e&&n({type:e,src:`programmatic`})}),e([()=>t(`paused`)],()=>{n({type:t(`paused`)?`PAUSE`:`RESUME`})}),e([()=>t(`type`),()=>t(`duration`)],()=>{n({type:`UPDATE`})})},on:{UPDATE:[{guard:wt(`isVisible`,`shouldPause`),target:`visible:persist`,actions:[`resetCloseTimer`]},{guard:`isVisible`,target:`visible:updating`,actions:[`resetCloseTimer`]}],MEASURE:{actions:[`measureHeight`]}},entry:[`setMounted`,`measureHeight`,`invokeOnVisible`],effects:[`trackContent`],states:{"visible:updating":{tags:[`visible`,`updating`],effects:[`waitForNextTick`],on:{DISMISS:{target:`dismissing`},PAUSE:{target:`visible:persist`},SHOW:{target:`visible`}}},"visible:persist":{tags:[`visible`,`paused`],on:{RESUME:{guard:Ct(`shouldPause`),target:`visible`,actions:[`setCloseTimer`]},DISMISS:{target:`dismissing`}}},visible:{tags:[`visible`],effects:[`waitForDuration`],on:{DISMISS:{target:`dismissing`},PAUSE:{target:`visible:persist`,actions:[`syncRemainingTime`]}}},dismissing:{entry:[`notifyParentOfDismiss`,`invokeOnDismiss`],effects:[`waitForRemoveDelay`],on:{REMOVE:{target:`unmounted`,actions:[`notifyParentToRemove`]}}},unmounted:{entry:[`invokeOnUnmount`]}},implementations:{effects:{waitForRemoveDelay({prop:e,send:t}){return He(()=>{t({type:`REMOVE`,src:`timer`})},e(`removeDelay`))},waitForDuration({send:e,context:t,computed:n}){if(!n(`shouldPersist`))return He(()=>{e({type:`DISMISS`,src:`timer`})},t.get(`remainingTime`))},waitForNextTick({send:e}){return He(()=>{e({type:`SHOW`,src:`timer`})},0)},trackContent({scope:e,prop:t,context:n,state:r}){return ue(()=>{let i=Xe(e);if(!i)return;let a=()=>{if(!r.hasTag(`visible`)||!i.isConnected)return;let e=St(i);st(t(`parent`),{id:t(`id`),height:e})},o=()=>{n.set(`rendered`,{title:!!$e(e),description:!!et(e)})};return o(),Ke(i,{filter:e=>!e.hasAttribute(`data-ghost`),onChange:a,onMutate:o})})}},guards:{isVisible:({state:e})=>e.hasTag(`visible`),shouldPause:({computed:e,prop:t})=>e(`shouldPersist`)||!!t(`paused`)},actions:{setMounted({context:e}){ue(()=>{e.set(`mounted`,!0)})},measureHeight({scope:e,prop:t,context:n}){queueMicrotask(()=>{let r=Xe(e);if(!r)return;let i=St(r);n.set(`initialHeight`,i);let a={id:t(`id`),height:i};st(t(`parent`),a)})},setCloseTimer({refs:e}){e.set(`closeTimerStartTime`,Date.now())},resetCloseTimer({context:e,refs:t,prop:n}){t.set(`closeTimerStartTime`,Date.now()),e.set(`remainingTime`,nt(n(`duration`),n(`type`)))},syncRemainingTime({context:e,refs:t}){e.set(`remainingTime`,e=>{let n=t.get(`closeTimerStartTime`),r=Date.now()-n;return t.set(`lastCloseStartTimerStartTime`,Date.now()),e-r})},notifyParentToRemove({prop:e}){e(`parent`).send({type:`TOAST.REMOVE`,id:e(`id`)})},notifyParentOfDismiss({prop:e,scope:t}){let n=t.getActiveElement();if(!u(Xe(t),n))return;let r=!!n?.matches(`:focus-visible`);e(`parent`).send({type:`TOAST.DISMISS`,focusVisible:r})},invokeOnDismiss({prop:e,event:t}){e(`parent`).prop(`store`).dismiss(e(`id`)),e(`onStatusChange`)?.({status:`dismissing`,src:t.src})},invokeOnUnmount({prop:e}){e(`onStatusChange`)?.({status:`unmounted`})},invokeOnVisible({prop:e}){e(`onStatusChange`)?.({status:`visible`})}}}})})))()}function Dt(e={}){let t=Ot(e,{placement:`bottom`,overlap:!1,max:24,gap:16,offsets:`1rem`,hotkey:[`altKey`,`KeyT`],removeDelay:200,pauseOnPageIdle:!0}),n=[],r=[],i=new Set,a=[],s=new Set,c=new Map,u=!1,d=new Set,f=e=>{n.push(e);let t=!0;return()=>{if(!t)return;t=!1;let r=n.indexOf(e);r!==-1&&n.splice(r,1)}},p=[],m=!1,h=(...e)=>{if(p.push(...e),m)return e;m=!0;try{for(;p.length;){let e=p.shift();n.slice().forEach(t=>t(e))}}finally{m=!1,p.length=0}return e},g=e=>{r.length>=t.max?a.push(e):(r.unshift(e),h(e))},v=()=>{for(a=Mt(a);a.length>0&&r.length<t.max;){let e=a.shift();if(e){let t={...e,paused:u||e.paused};r.unshift(t),h(t)}}},y=e=>{let n=e.id??`toast:${ce()}`,o=r.find(e=>e.id===n)??a.find(e=>e.id===n);if(s.has(n))return n;if(l(e,`promise`)&&e.promise!==o?.promise&&c.delete(n),i.delete(n),o){let t={...o,...e,id:n};r.some(e=>e.id===n)?(r=r.map(e=>e.id===n?t:e),h(t)):a=a.map(e=>e.id===n?t:e)}else{let r={id:n,duration:t.duration,removeDelay:t.removeDelay,type:At,...e,gap:t.gap,paused:u},i=r.priority??jt(r.type,!!r.action);g({...r,priority:i})}return n},b=e=>{let t=e==null?[...r,...a]:[...r,...a].filter(t=>t.id===e),n=e==null?r:r.filter(t=>t.id===e);return t.forEach(e=>{i.add(e.id),s.delete(e.id),c.delete(e.id)}),e!=null&&i.add(e),r=e==null?[]:r.filter(t=>t.id!==e),a=e==null?[]:a.filter(t=>t.id!==e),e!=null&&!n.length&&h({id:e,dismiss:!0}),h(...n.map(e=>({id:e.id,dismiss:!0}))),v(),e},ee=e=>y({...e,type:`error`}),x=e=>y({...e,type:`success`}),te=e=>y({...e,type:`info`}),ne=e=>y({...e,type:`warning`}),re=e=>y({...e,type:`loading`}),ie=()=>r.filter(e=>!i.has(e.id)),ae=()=>r.length,oe=(e,t,n={})=>{if(!t||!t.loading){_(`[zag-js > toast] toaster.promise() requires at least a 'loading' option to be specified`);return}let i=y({...n,...t.loading,promise:e,type:`loading`}),l=Symbol();(r.find(e=>e.id===i)??a.find(e=>e.id===i))?.promise===e&&!s.has(i)&&c.set(i,l);let u=()=>c.get(i)===l&&!s.has(i),d=!0,f,p=o(e).then(async e=>{if(f=[`resolve`,e],Nt(e)&&!e.ok){d=!1;let r=o(t.error,`HTTP Error! status: ${e.status}`);u()&&y({...n,...r,id:i,type:`error`})}else if(t.success!==void 0){d=!1;let r=o(t.success,e);u()&&y({...n,...r,id:i,type:r.type??`success`})}}).catch(async e=>{if(f=[`reject`,e],t.error!==void 0){d=!1;let r=o(t.error,e);u()&&y({...n,...r,id:i,type:`error`})}}).finally(()=>{d&&u()&&b(i),c.get(i)===l&&c.delete(i),t.finally?.()});return{id:i,unwrap:()=>new Promise((e,t)=>p.then(()=>f[0]===`reject`?t(f[1]):e(f[1])).catch(t))}},S=(e,t)=>{if(s.has(e))return e;if(typeof t!=`function`)return y({...t,id:e});let n=r.find(t=>t.id===e)??a.find(t=>t.id===e);if(!n)return e;let i={...t({...n}),id:e};return s.has(e)?e:r.some(t=>t.id===e)||a.some(t=>t.id===e)?y(i):e},se=(e,t)=>{let n=[];r=r.map(r=>{if(t!=null&&r.id!==t||s.has(r.id))return r;let i={...r,...e};return n.push(i),i}),a=a.map(n=>t==null||n.id===t?{...n,...e}:n),h(...n)};return{attrs:t,subscribe:f,create:y,update:S,remove:b,dismiss:e=>{let t=a.filter(t=>e==null||t.id===e);a=a.filter(t=>e!=null&&t.id!==e),t.forEach(e=>{i.add(e.id),c.delete(e.id)});let n=r.filter(t=>(e==null||t.id===e)&&!s.has(t.id));n.forEach(e=>s.add(e.id)),r=r.map(e=>s.has(e.id)?{...e,message:`DISMISS`}:e),h(...n.map(e=>({...e,message:`DISMISS`})))},error:ee,success:x,info:te,warning:ne,loading:re,getVisibleToasts:ie,getCount:ae,promise:oe,pause:e=>{e??(u=!0),se({paused:!0},e)},resume:e=>{e??(u=!1),se({paused:!1},e)},isVisible:e=>!i.has(e)&&!!r.find(t=>t.id===e),isDismissed:e=>i.has(e),expand:()=>d.forEach(e=>e(!0)),collapse:()=>d.forEach(e=>e(!1)),subscribeLayout:e=>(d.add(e),()=>{d.delete(e)})}}var Ot,kt,At,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{ee(),s(),m(),Ot=(e,t)=>({...t,...ne(e)}),kt={error:[1,2],warning:[3,6],loading:[4,5],success:[5,7],info:[6,8]},At=`info`,jt=(e,t)=>{let n=e??At,[r,i]=l(kt,n)?kt[n]:kt[At];return t?r:i},Mt=e=>e.sort((e,t)=>(e.priority??jt(e.type,!!e.action))-(t.priority??jt(t.type,!!t.action))),Nt=e=>e&&typeof e==`object`&&`ok`in e&&typeof e.ok==`boolean`&&`status`in e&&typeof e.status==`number`})))()}var Ft;function It(){return(It=e((()=>{ft(),vt(),M(),xt(),Et(),Pt(),Ft={connect:dt,machine:_t}})))()}var Lt;function Rt(){return(Rt=e((()=>{It(),Lt=e=>Dt(e)})))()}var zt,F;function I(){return(I=e((()=>{ye(),[zt,F]=Se({name:`ToastContext`,hookName:`useToastContext`,providerName:`<ToastProvider />`})})))()}var Bt,Vt,Ht;function Ut(){return(Ut=e((()=>{C(),I(),Bt=t(),T(),Vt=n(),Ht=(0,Bt.forwardRef)((e,t)=>{let n=F(),r=w(n.getActionTriggerProps(),e);return(0,Vt.jsx)(E.button,{...r,ref:t})}),Ht.displayName=`ToastActionTrigger`})))()}var Wt,Gt,Kt;function qt(){return(qt=e((()=>{C(),I(),Wt=t(),T(),Gt=n(),Kt=(0,Wt.forwardRef)((e,t)=>{let n=F(),r=w(n.getCloseTriggerProps(),e);return(0,Gt.jsx)(E.button,{...r,ref:t})}),Kt.displayName=`ToastCloseTrigger`})))()}var Jt;function Yt(){return(Yt=e((()=>{I(),Jt=e=>e.children(F())})))()}var Xt,Zt,Qt;function $t(){return($t=e((()=>{C(),I(),Xt=t(),T(),Zt=n(),Qt=(0,Xt.forwardRef)((e,t)=>{let n=F(),r=w(n.getDescriptionProps(),e);return(0,Zt.jsx)(E.div,{...r,ref:t})}),Qt.displayName=`ToastDescription`})))()}var en,L,tn;function nn(){return(nn=e((()=>{C(),I(),en=t(),T(),L=n(),tn=(0,en.forwardRef)((e,t)=>{let{asChild:n,children:r,...i}=e,a=F(),o=w(a.getRootProps(),i),s=e=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{...a.getGhostBeforeProps()}),e,(0,L.jsx)(`div`,{...a.getGhostAfterProps()})]}),c=()=>(0,en.isValidElement)(r)?(0,en.cloneElement)(r,void 0,s(r.props.children)):r;return(0,L.jsx)(E.div,{...o,asChild:n,ref:t,children:n?c():s(r)})}),tn.displayName=`ToastRoot`})))()}var rn,an,on;function sn(){return(sn=e((()=>{C(),I(),rn=t(),T(),an=n(),on=(0,rn.forwardRef)((e,t)=>{let n=F(),r=w(n.getTitleProps(),e);return(0,an.jsx)(E.div,{...r,ref:t})}),on.displayName=`ToastTitle`})))()}var cn,ln,un,dn;function fn(){return(fn=e((()=>{C(),_e(),Ce(),I(),It(),cn=t(),T(),oe(),ie(),ln=n(),un=(0,cn.forwardRef)((e,t)=>{let{toaster:n,children:r,label:i,dir:a,getRootNode:o,...s}=e,c=ve(),l=xe(),u=b(Ft.machine,{store:n,id:(0,cn.useId)(),dir:a??c?.dir,getRootNode:o??l?.getRootNode}),d=Ft.connect(u,x),f=w(d.getGroupProps({label:i}),s);return(0,ln.jsx)(E.div,{...f,ref:t,children:d.getToasts().map((e,t)=>(0,ln.jsx)(dn,{value:e,parent:u,index:t,children:e=>r(e)},e.id))})}),un.displayName=`Toaster`,dn=e=>{let t=xe(),n={...e.value,parent:e.parent,index:e.index,getRootNode:t.getRootNode},r=yt(b(Tt,{...n}),x);return(0,ln.jsx)(zt,{value:r,children:e.children(e.value)})},dn.displayName=`ToastActor`})))()}var R;function pn(){return(pn=e((()=>{be(),Ut(),qt(),Yt(),$t(),nn(),sn(),R=we({ActionTrigger:()=>Ht,CloseTrigger:()=>Kt,Context:()=>Jt,Description:()=>Qt,Root:()=>tn,Title:()=>on})})))()}var mn,hn,gn;function _n(){return(_n=e((()=>{mn=`_actions_1bz76_46`,hn=`_icon_1bz76_75`,gn={"slide-in":`_slide-in_1bz76_1`,"fade-out":`_fade-out_1bz76_1`,actions:mn,icon:hn}})))()}function vn(e){return(0,z.jsx)(B,{...e})}var yn,z,bn,B,xn;function Sn(){return(Sn=e((()=>{yn=r(),pn(),fn(),_n(),a(),je(),z=n(),bn={success:`check_circle`,info:`info`,warning:`error`,error:`cancel`},B=e=>{let t=(0,yn.c)(19),{style:n,className:r,variant:a,title:o,description:s,onDismiss:c,actions:l}=e,u=bn[a===void 0?`info`:a],d;t[0]===u?d=t[1]:(d=(0,z.jsx)(i,{icon:u,size:`small`,filled:!0,className:gn.icon}),t[0]=u,t[1]=d);let f;t[2]===o?f=t[3]:(f=o&&(0,z.jsx)(Ae,{variant:`body-sm-md`,asChild:!0,children:(0,z.jsx)(R.Title,{children:o})}),t[2]=o,t[3]=f);let p;t[4]===s?p=t[5]:(p=s&&(0,z.jsx)(Ae,{variant:`body-sm-reg`,asChild:!0,children:(0,z.jsx)(R.Description,{children:s})}),t[4]=s,t[5]=p);let m;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,z.jsx)(i,{icon:`close`,size:`small`}),t[6]=m):m=t[6];let h;t[7]===c?h=t[8]:(h=(0,z.jsx)(R.CloseTrigger,{onClick:c,children:m}),t[7]=c,t[8]=h);let g;t[9]===l?g=t[10]:(g=l&&(0,z.jsx)(`div`,{className:gn.actions,children:l}),t[9]=l,t[10]=g);let _;return t[11]!==r||t[12]!==n||t[13]!==d||t[14]!==f||t[15]!==p||t[16]!==h||t[17]!==g?(_=(0,z.jsxs)(R.Root,{style:n,className:r,children:[d,f,p,h,g]}),t[11]=r,t[12]=n,t[13]=d,t[14]=f,t[15]=p,t[16]=h,t[17]=g,t[18]=_):_=t[18],_},xn=e=>{let t=(0,yn.c)(2),{toaster:n}=e,r;return t[0]===n?r=t[1]:(r=(0,z.jsx)(un,{toaster:n,children:vn}),t[0]=n,t[1]=r),r},B.displayName=`DsToast`,xn.displayName=`DsToastGroup`})))()}var Cn,wn,Tn,En,Dn,V,H;function On(){return(On=e((()=>{Cn=r(),wn=t(),Rt(),Sn(),Tn=n(),En=(0,wn.createContext)(null),Dn=e=>t=>e.create({...t,type:t.variant,duration:t.persistent?1/0:t.duration||6e3}),V=e=>{let t=(0,Cn.c)(17),{children:n,max:r}=e,i=r===void 0?3:r,a,o;t[0]===i?(a=t[1],o=t[2]):(o=Lt({placement:`top`,gap:24,max:i}),a=Dn(o),t[0]=i,t[1]=a,t[2]=o);let s;t[3]===o?s=t[4]:(s=()=>o.dismiss(),t[3]=o,t[4]=s);let c;t[5]!==a||t[6]!==s||t[7]!==o.dismiss||t[8]!==o.getCount||t[9]!==o.getVisibleToasts?(c={createToast:a,dismissToast:o.dismiss,dismissAllToasts:s,getToasts:o.getVisibleToasts,getToastsCount:o.getCount},t[5]=a,t[6]=s,t[7]=o.dismiss,t[8]=o.getCount,t[9]=o.getVisibleToasts,t[10]=c):c=t[10];let l=c,u;t[11]===o?u=t[12]:(u=(0,Tn.jsx)(xn,{toaster:o}),t[11]=o,t[12]=u);let d;return t[13]!==n||t[14]!==l||t[15]!==u?(d=(0,Tn.jsxs)(En.Provider,{value:l,children:[n,u]}),t[13]=n,t[14]=l,t[15]=u,t[16]=d):d=t[16],d},H=()=>{let e=(0,wn.useContext)(En);if(!e)throw Error(`useToast must be used within a ToastProvider`);return e},V.displayName=`DsToastProvider`})))()}var kn;function An(){return(An=e((()=>{kn=[`info`,`success`,`warning`,`error`]})))()}var U,W,jn,G,K,q,J,Y,X,Z,Q,$,Mn;function Nn(){return(Nn=e((()=>{U=r(),Sn(),On(),An(),Pe(),Me(),W=n(),jn={title:`Components/Toast`,component:B,parameters:{layout:`centered`,docs:{description:{component:"Temporary, non-blocking messages surfaced through `DsToastProvider` and the `useToaster` hook. Toasts are created imperatively from an event handler, so every example wraps a trigger in the provider."}}},argTypes:{variant:{control:{type:`select`},options:kn}}},G={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(D,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`success`,title:`Success!`,description:`Your action was completed successfully.`}),children:`Show success toast`}),e[0]=t,e[1]=n),n},{})})},K={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(D,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`info`,title:`Information`,description:`Here is some helpful information for you.`}),children:`Show info toast`}),e[0]=t,e[1]=n),n},{})})},q={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(D,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,title:`Warning`,description:`Please be aware of this important notice.`}),children:`Show warning toast`}),e[0]=t,e[1]=n),n},{})})},J={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(D,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`error`,title:`Error`,description:`Something went wrong. Please try again.`,persistent:!0}),children:`Show error toast`}),e[0]=t,e[1]=n),n},{})})},Y={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(D,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,description:`Something went wrong. Please try again.`}),children:`Show toast without title`}),e[0]=t,e[1]=n),n},{})})},X={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(3),{createToast:t,dismissToast:n}=H(),r;return e[0]!==t||e[1]!==n?(r=(0,W.jsx)(D,{design:`v1.2`,variant:`filled`,onClick:()=>{let e=t({variant:`warning`,title:`File upload failed`,description:`Your file could not be uploaded.`,persistent:!0,actions:(0,W.jsxs)(Ne,{direction:`row`,gap:`var(--xs)`,justifyContent:`flex-end`,children:[(0,W.jsx)(D,{design:`v1.2`,variant:`ghost`,onClick:()=>n(e),children:`Abort`}),(0,W.jsx)(D,{design:`v1.2`,variant:`danger`,onClick:()=>n(e),children:`Re-try`})]})})},children:`Show toast with actions`}),e[0]=t,e[1]=n,e[2]=r):r=e[2],r},{})})},Z={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(D,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,title:`Important notice`,description:`This is a longer message that demonstrates how the toast handles extended content. `.repeat(30),persistent:!0}),children:`Show long content toast`}),e[0]=t,e[1]=n),n},{})})},Q={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(2),{createToast:t}=H(),n;return e[0]===t?n=e[1]:(n=(0,W.jsx)(D,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`info`,title:`Sync in progress`,description:`This toast stays until you close it.`,persistent:!0}),children:`Show persistent toast`}),e[0]=t,e[1]=n),n},{})})},$={parameters:{docs:{source:{type:`code`}}},render:()=>(0,W.jsx)(V,{children:(0,W.jsx)(()=>{let e=(0,U.c)(9),{createToast:t,dismissAllToasts:n}=H(),r;e[0]===t?r=e[1]:(r=()=>{t({variant:`success`,title:`First toast`,description:`This is the first message.`}),t({variant:`info`,title:`Second toast`,description:`This is the second message.`}),t({variant:`warning`,title:`Third toast`,description:`This is the third message.`})},e[0]=t,e[1]=r);let i=r,a;e[2]===i?a=e[3]:(a=(0,W.jsx)(D,{design:`v1.2`,variant:`filled`,onClick:i,children:`Show multiple toasts`}),e[2]=i,e[3]=a);let o;e[4]===n?o=e[5]:(o=(0,W.jsx)(D,{design:`v1.2`,variant:`ghost`,onClick:()=>n(),children:`Dismiss all`}),e[4]=n,e[5]=o);let s;return e[6]!==a||e[7]!==o?(s=(0,W.jsxs)(Ne,{direction:`row`,gap:`var(--xs)`,children:[a,o]}),e[6]=a,e[7]=o,e[8]=s):s=e[8],s},{})})},Mn=[`Success`,`Info`,`Warning`,`Error`,`NoTitle`,`WithActions`,`LongContent`,`Persistent`,`MultipleToasts`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Toasts stack up to the provider's `max` (default 3). `dismissAllToasts` clears them at once.",...$.parameters?.docs?.description}}}})))()}Nn();export{J as Error,K as Info,Z as LongContent,$ as MultipleToasts,Y as NoTitle,Q as Persistent,G as Success,q as Warning,X as WithActions,Mn as __namedExportsOrder,jn as default};