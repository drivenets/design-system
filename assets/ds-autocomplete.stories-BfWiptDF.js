import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r}from"./iframe-B1nxX9F7.js";import{n as i,t as a}from"./classnames-BngcLiyu.js";import{n as o,t as s}from"./ds-icon-CZDK-FHq.js";import{E as c,F as l,K as u,O as d,St as f,V as ee,_t as p,b as m,c as h,h as te,ht as g,i as ne,l as re,m as _,mt as v,n as y,r as b,rt as ie,s as ae,t as oe,tt as x,x as S,xt as se}from"./normalize-props-BDW4W1cu.js";import{a as C,n as w,r as T,t as E}from"./raf-D1nJPjhp.js";import{B as ce,S as le,W as D,a as ue,b as de,c as O,d as fe,f as pe,i as me,l as he,m as ge,o as _e,p as ve,s as ye,u as be,v as xe,x as Se,y as Ce}from"./ds-tooltip-ZGHKjOgS.js";import{C as we,D as k,M as Te,N as Ee,T as De,a as Oe,c as A,d as j,f as M,g as N,h as P,i as F,l as ke,m as I,n as Ae,o as je,p as Me,r as Ne,s as L,t as Pe,u as Fe,v as Ie,w as Le}from"./runtime-B00ETiTt.js";import{n as Re,t as ze}from"./caret-OM1hl62y.js";import{r as Be,t as Ve}from"./dismissable-layer-BHLt1YC3.js";import{n as He,r as Ue}from"./mutation-observer-DEAESj4t.js";import{n as We,r as Ge,t as Ke}from"./navigate-SzFJPNE_.js";import{n as qe,t as Je}from"./scroll-Bsykz83y.js";import{n as Ye,t as Xe}from"./equal-COyPOATC.js";import{i as Ze,o as Qe,r as $e,s as et}from"./use-event-Dv3-2P24.js";import{a as tt,c as nt,i as rt,n as it,o as at,r as ot,s as st,t as ct}from"./list-collection-DKPjRuOv.js";import{n as lt,t as ut}from"./dist-bdyaRVo6.js";import{t as dt}from"./cache-BupmKqjL.js";import{n as ft,t as pt}from"./use-field-context-HkzxdP0o.js";import{n as mt,t as ht}from"./use-highlight-Dgo6P7U0.js";import{n as R,t as gt}from"./ds-typography-kM_xVLCn.js";import{n as _t,t as vt}from"./ds-button-v3-CcLqz1Lg.js";import{n as yt,t as z}from"./ds-stack-DxTew-n7.js";import{t as bt}from"./ds-modal-CEPIuZNV.js";import{t as xt}from"./ds-modal-DnF2Iu__.js";import{t as St}from"./ds-tag-BE6VBYUS.js";import{t as Ct}from"./ds-tag-DNvueuaL.js";var wt,B;function Tt(){return(Tt=t((()=>{f(),wt=se(`combobox`).parts(`root`,`clearTrigger`,`content`,`control`,`input`,`item`,`itemGroup`,`itemGroupLabel`,`itemIndicator`,`itemText`,`label`,`list`,`positioner`,`trigger`),B=wt.build()})))()}var Et;function Dt(){return(Dt=t((()=>{nt(),Et=e=>new st(e),Et.empty=()=>new st({items:[]})})))()}var Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,V,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt;function Jt(){return(Jt=t((()=>{ce(),ze(),Ot=e=>e.ids?.root??`combobox:${e.id}`,kt=e=>e.ids?.label??`combobox:${e.id}:label`,At=e=>e.ids?.control??`combobox:${e.id}:control`,jt=e=>e.ids?.input??`combobox:${e.id}:input`,Mt=e=>e.ids?.content??`combobox:${e.id}:content`,Nt=e=>e.ids?.positioner??`combobox:${e.id}:popper`,Pt=e=>e.ids?.trigger??`combobox:${e.id}:toggle-btn`,Ft=e=>e.ids?.clearTrigger??`combobox:${e.id}:clear-btn`,It=(e,t)=>e.ids?.itemGroup?.(t)??`combobox:${e.id}:optgroup:${t}`,Lt=(e,t)=>e.ids?.itemGroupLabel?.(t)??`combobox:${e.id}:optgroup-label:${t}`,Rt=(e,t)=>e.ids?.item?.(t)??`combobox:${e.id}:option:${t}`,zt=e=>e.getById(Ot(e)),V=e=>e.getById(Mt(e)),Bt=e=>e.getById(jt(e)),Vt=e=>e.getById(Nt(e)),Ht=e=>e.getById(At(e)),Ut=e=>e.getById(Pt(e)),Wt=e=>e.getById(Ft(e)),Gt=(e,t)=>{if(t==null)return null;let n=`[role=option][data-value="${CSS.escape(t)}"]`;return D(V(e),n)},Kt=e=>{let t=Bt(e);e.isActiveElement(t)||t?.focus({preventScroll:!0}),Re(t)},qt=e=>{let t=Ut(e);e.isActiveElement(t)||t?.focus({preventScroll:!0})}})))()}var Yt;function Xt(){return(Xt=t((()=>{Yt={triggerLabel:`Toggle suggestions`,clearTriggerLabel:`Clear value`,resultsCount:e=>e===1?`1 result`:`${e} results`,noResults:`No results`,loading:`Loading results`}})))()}function Zt(e,t){let{context:n,prop:r,state:i,send:a,scope:o,computed:s}=e,c=te(Yt,r(`translations`)),l=r(`collection`),u=!!r(`disabled`),d=s(`isInteractive`),f=!!r(`invalid`),ee=!!r(`required`),p=!!r(`readOnly`),m=i.hasTag(`open`),h=!!r(`loading`),ne=i.hasTag(`focused`),_=r(`composite`),y=n.get(`highlightedValue`),b=n.get(`currentPlacement`),ae=b?le(b):void 0,oe=xe({...r(`positioning`),placement:b});function x(e){let t=l.getItemDisabled(e.item),r=l.getItemValue(e.item);return re(r,()=>`[zag-js] No value found for item ${JSON.stringify(e.item)}`),{value:r,disabled:!!(u||t),highlighted:y===r,selected:n.get(`value`).includes(r)}}return{focused:ne,open:m,loading:h,inputValue:n.get(`inputValue`),highlightedValue:y,highlightedItem:n.get(`highlightedItem`),value:n.get(`value`),valueAsString:s(`valueAsString`),hasSelectedItems:s(`hasSelectedItems`),selectedItems:s(`selectedItems`),collection:r(`collection`),multiple:!!r(`multiple`),disabled:!!u,syncSelectedItems(){a({type:`SELECTED_ITEMS.SYNC`})},reposition(e={}){a({type:`POSITIONING.SET`,options:e})},setHighlightValue(e){a({type:`HIGHLIGHTED_VALUE.SET`,value:e})},clearHighlightValue(){a({type:`HIGHLIGHTED_VALUE.CLEAR`})},selectValue(e){a({type:`ITEM.SELECT`,value:e})},setValue(e){a({type:`VALUE.SET`,value:e})},setInputValue(e,t=`script`){a({type:`INPUT_VALUE.SET`,value:e,src:t})},clearValue(e){a(e==null?{type:`VALUE.CLEAR`}:{type:`ITEM.CLEAR`,value:e})},focus(){Bt(o)?.focus()},setOpen(e,t=`script`){a({type:e?`OPEN`:`CLOSE`,src:t,replaces:`open`})},getRootProps(){return t.element({...B.root.attrs,dir:r(`dir`),id:Ot(o),"data-invalid":g(f),"data-readonly":g(p)})},getLabelProps(){return t.label({...B.label.attrs,dir:r(`dir`),htmlFor:jt(o),id:kt(o),"data-readonly":g(p),"data-disabled":g(u),"data-invalid":g(f),"data-required":g(ee),"data-focus":g(ne),onClick(e){_||(e.preventDefault(),Ut(o)?.focus({preventScroll:!0}))}})},getControlProps(){return t.element({...B.control.attrs,dir:r(`dir`),id:At(o),"data-state":m?`open`:`closed`,"data-focus":g(ne),"data-disabled":g(u),"data-invalid":g(f)})},getPositionerProps(){return t.element({...B.positioner.attrs,dir:r(`dir`),id:Nt(o),style:oe.floating})},getInputProps(){return t.input({...B.input.attrs,dir:r(`dir`),"aria-invalid":v(f),"data-invalid":g(f),"data-autofocus":g(r(`autoFocus`)),name:r(`name`),form:r(`form`),disabled:u,required:r(`required`),autoComplete:`off`,autoCorrect:`off`,autoCapitalize:`none`,spellCheck:`false`,readOnly:p,placeholder:r(`placeholder`),id:jt(o),type:`text`,role:`combobox`,defaultValue:n.get(`inputValue`),"aria-autocomplete":s(`autoComplete`)?`both`:`list`,"aria-controls":Mt(o),"aria-expanded":m,"data-state":m?`open`:`closed`,"aria-activedescendant":y?Rt(o,y):void 0,onClick(e){e.defaultPrevented||r(`openOnClick`)&&d&&a({type:`INPUT.CLICK`,src:`input-click`})},onFocus(){u||a({type:`INPUT.FOCUS`})},onBlur(){u||a({type:`INPUT.BLUR`})},onChange(e){a({type:`INPUT.CHANGE`,value:e.currentTarget.value,src:`input-change`})},onKeyDown(e){if(e.defaultPrevented||!d||Le(e)||(e.ctrlKey||e.shiftKey)&&e.key!==`Enter`)return;let t=r(`openOnKeyPress`),n=e.ctrlKey||e.metaKey||e.shiftKey,i={ArrowDown(e){(t||m)&&(a({type:e.altKey?`OPEN`:`INPUT.ARROW_DOWN`,keypress:!0,src:`arrow-key`}),e.preventDefault())},ArrowUp(){(t||m)&&(a({type:e.altKey?`CLOSE`:`INPUT.ARROW_UP`,keypress:!0,src:`arrow-key`}),e.preventDefault())},Home(e){n||(a({type:`INPUT.HOME`,keypress:!0}),m&&e.preventDefault())},End(e){n||(a({type:`INPUT.END`,keypress:!0}),m&&e.preventDefault())},Enter(e){a({type:`INPUT.ENTER`,keypress:!0,src:`item-select`,modifiers:We(e)});let t=y!=null,n=r(`alwaysSubmitOnEnter`),i=s(`isCustomValue`)&&!r(`allowCustomValue`);if(m&&!n&&(t||i)&&e.preventDefault(),y==null)return;let c=Gt(o,y);ie(c)&&r(`navigate`)?.({value:y,node:c,href:c.href,modifiers:We(e)})},Escape(){a({type:`INPUT.ESCAPE`,keypress:!0,src:`escape-key`}),e.preventDefault()}}[Ie(e,{dir:r(`dir`)})];i?.(e)}})},getTriggerProps(e={}){return t.button({...B.trigger.attrs,dir:r(`dir`),id:Pt(o),"aria-haspopup":_?`listbox`:`dialog`,type:`button`,tabIndex:e.focusable?void 0:-1,"aria-label":c.triggerLabel,"aria-expanded":m,"data-state":m?`open`:`closed`,"aria-controls":m?Mt(o):void 0,disabled:u,"data-invalid":g(f),"data-focusable":g(e.focusable),"data-readonly":g(p),"data-disabled":g(u),onFocus(){e.focusable&&a({type:`INPUT.FOCUS`,src:`trigger`})},onClick(e){e.defaultPrevented||d&&k(e)&&a({type:`TRIGGER.CLICK`,src:`trigger-click`})},onPointerDown(e){d&&e.pointerType!==`touch`&&k(e)&&(e.preventDefault(),queueMicrotask(()=>{Kt(o)}))},onKeyDown(e){if(e.defaultPrevented||_)return;let t={ArrowDown(){a({type:`INPUT.ARROW_DOWN`,src:`arrow-key`})},ArrowUp(){a({type:`INPUT.ARROW_UP`,src:`arrow-key`})}}[Ie(e,{dir:r(`dir`)})];t&&(t(e),e.preventDefault())}})},getContentProps(){return t.element({...B.content.attrs,dir:r(`dir`),id:Mt(o),role:_?`listbox`:`dialog`,tabIndex:-1,hidden:!m,"data-state":m?`open`:`closed`,"data-placement":b,"data-side":ae,"aria-labelledby":kt(o),"aria-multiselectable":r(`multiple`)&&_?!0:void 0,"aria-busy":_?v(h):void 0,"data-empty":g(l.size===0),"data-loading":g(h),onPointerDown(e){k(e)&&e.preventDefault()}})},getListProps(){return t.element({...B.list.attrs,role:_?void 0:`listbox`,"data-empty":g(l.size===0),"aria-labelledby":kt(o),"aria-multiselectable":r(`multiple`)&&!_?!0:void 0,"aria-busy":_?void 0:v(h),"data-loading":g(h)})},getClearTriggerProps(){return t.button({...B.clearTrigger.attrs,dir:r(`dir`),id:Ft(o),type:`button`,tabIndex:-1,disabled:u,"data-invalid":g(f),"aria-label":c.clearTriggerLabel,"aria-controls":jt(o),hidden:!n.get(`value`).length,onPointerDown(e){k(e)&&e.preventDefault()},onClick(e){e.defaultPrevented||d&&a({type:`VALUE.CLEAR`,src:`clear-trigger`})}})},getItemState:x,getItemProps(e){let n=x(e),i=n.value;return t.element({...B.item.attrs,dir:r(`dir`),id:Rt(o,i),role:`option`,tabIndex:-1,"data-highlighted":g(n.highlighted),"data-state":n.selected?`checked`:`unchecked`,"aria-selected":n.selected,"aria-disabled":v(n.disabled),"data-disabled":g(n.disabled),"data-value":n.value,onPointerMove(){n.disabled||$e()===`pointer`&&(n.highlighted||a({type:`ITEM.POINTER_MOVE`,value:i}))},onPointerLeave(){e.persistFocus||n.disabled||$e()===`pointer`&&a({type:`ITEM.POINTER_LEAVE`,value:i})},onClick(e){De(e)||n.disabled||a({type:`ITEM.CLICK`,src:`item-select`,value:i,modifiers:We(e)})}})},getItemTextProps(e){let n=x(e);return t.element({...B.itemText.attrs,dir:r(`dir`),"data-state":n.selected?`checked`:`unchecked`,"data-disabled":g(n.disabled),"data-highlighted":g(n.highlighted)})},getItemIndicatorProps(e){let n=x(e);return t.element({"aria-hidden":!0,...B.itemIndicator.attrs,dir:r(`dir`),"data-state":n.selected?`checked`:`unchecked`,hidden:!n.selected})},getItemGroupProps(e){let{id:n}=e;return t.element({...B.itemGroup.attrs,dir:r(`dir`),id:It(o,n),"aria-labelledby":Lt(o,n),"data-empty":g(l.size===0),role:`group`})},getItemGroupLabelProps(e){let{htmlFor:n}=e;return t.element({...B.itemGroupLabel.attrs,dir:r(`dir`),id:Lt(o,n),role:`presentation`})}}}function Qt(){return(Qt=t((()=>{p(),we(),Ge(),x(),Ze(),Ce(),_(),Tt(),Jt(),Xt()})))()}function $t(e){return(e.previousEvent||e).src}function en(e){let t=te(Yt,e(`translations`));if(e(`loading`))return t.loading;let n=e(`collection`).size;return n===0?t.noResults:t.resultsCount(n)}var tn,nn,rn,H,U,an,on;function sn(){return(sn=t((()=>{tt(),ae(),Ve(),w(),Ge(),Te(),He(),Je(),ze(),Ze(),lt(),Se(),ee(),c(),Xe(),m(),_(),Dt(),Jt(),Xt(),{guards:tn,createMachine:nn,choose:rn}=h(),{and:H,not:U}=tn,an=1e3,on=nn({props({props:e}){return{loopFocus:!0,openOnClick:!1,defaultValue:[],defaultInputValue:``,closeOnSelect:!e.multiple,allowCustomValue:!1,alwaysSubmitOnEnter:!1,inputBehavior:`none`,selectionBehavior:e.multiple?`clear`:`replace`,openOnKeyPress:!0,openOnChange:!0,composite:!0,navigate(e){Ke(e.node,e.modifiers)},collection:Et.empty(),...e,positioning:{placement:`bottom`,sameWidth:!0,...e.positioning}}},initialState({prop:e}){return e(`open`)||e(`defaultOpen`)?`open.suggesting`:`closed.idle`},refs(){return{liveRegion:null,resultsRegion:null,finalFocusFrame:E.create(),highlightFrame:E.create()}},exit:[`cancelFinalFocus`,`cancelHighlightFrame`],context({prop:e,bindable:t,getContext:n,getEvent:r}){let i=e(`value`)??e(`defaultValue`)??[],a=e(`collection`).findMany(i);return{currentPlacement:t(()=>({defaultValue:void 0})),value:t(()=>({defaultValue:e(`defaultValue`),value:e(`value`),isEqual:Ye,hash(e){return e.join(`,`)},onChange(t){let r=n(),i=e(`collection`),a=r.get(`selectedItemMap`),o=rt({values:t,collection:i,selectedItemMap:a}),s=e(`value`)??t,c=s===t?o:rt({values:s,collection:i,selectedItemMap:o.nextSelectedItemMap});r.set(`selectedItemMap`,c.nextSelectedItemMap),e(`onValueChange`)?.({value:t,items:o.selectedItems})}})),highlightedValue:t(()=>({defaultValue:e(`defaultHighlightedValue`)||null,value:e(`highlightedValue`),onChange(t){let n=e(`collection`).find(t);e(`onHighlightChange`)?.({highlightedValue:t,highlightedItem:n})}})),inputValue:t(()=>{let t=e(`inputValue`)||e(`defaultInputValue`),n=e(`value`)||e(`defaultValue`);if(!t.trim()&&!e(`multiple`)){let r=e(`collection`).stringifyMany(n);t=S(e(`selectionBehavior`),{preserve:t||r,replace:r,clear:``})}return{defaultValue:t,value:e(`inputValue`),onChange(t){let n=r(),i=(n.previousEvent||n).src;e(`onInputValueChange`)?.({inputValue:t,reason:i})}}}),highlightedItem:t(()=>{let t=e(`highlightedValue`);return{defaultValue:e(`collection`).find(t)}}),selectedItemMap:t(()=>({defaultValue:ot({selectedItems:a,collection:e(`collection`)})}))}},computed:{isInputValueEmpty:({context:e})=>e.get(`inputValue`).length===0,isInteractive:({prop:e})=>!(e(`readOnly`)||e(`disabled`)),autoComplete:({prop:e})=>e(`inputBehavior`)===`autocomplete`,autoHighlight:({prop:e})=>e(`inputBehavior`)===`autohighlight`,hasSelectedItems:({context:e})=>e.get(`value`).length>0,selectedItems:({context:e,prop:t})=>at({values:e.get(`value`),collection:t(`collection`),selectedItemMap:e.get(`selectedItemMap`)}),valueAsString:({computed:e,prop:t})=>t(`collection`).stringifyItems(e(`selectedItems`)),isCustomValue:({context:e,computed:t})=>e.get(`inputValue`)!==t(`valueAsString`)},watch({context:e,prop:t,track:n,action:r,send:i}){n([()=>e.hash(`value`)],()=>{r([`syncSelectedItems`])}),n([()=>e.get(`inputValue`)],()=>{r([`syncInputValue`,`announceResults`])}),n([()=>e.get(`highlightedValue`)],()=>{r([`syncHighlightedItem`,`autofillInputValue`,`announceHighlightedItem`])}),n([()=>t(`open`)],()=>{r([`toggleVisibility`])}),n([()=>t(`collection`).toString()],()=>{i({type:`CHILDREN_CHANGE`}),r([`announceResults`])}),n([()=>t(`loading`)],()=>{r([`announceResults`])})},on:{"SELECTED_ITEMS.SYNC":{actions:[`syncSelectedItems`]},"HIGHLIGHTED_VALUE.SET":{actions:[`setHighlightedValue`]},"HIGHLIGHTED_VALUE.CLEAR":{actions:[`clearHighlightedValue`]},"ITEM.SELECT":{actions:[`selectItem`]},"ITEM.CLEAR":{actions:[`clearItem`]},"VALUE.SET":{actions:[`setValue`]},"INPUT_VALUE.SET":{actions:[`setInputValue`]},"POSITIONING.SET":{actions:[`reposition`]}},entry:rn([{guard:`autoFocus`,actions:[`setInitialFocus`]}]),states:{closed:{tags:[`closed`],initial:`idle`,states:{idle:{tags:[`idle`],entry:[`scrollContentToTop`,`clearHighlightedValue`],on:{"CONTROLLED.OPEN":{target:`open.interacting`},"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.CLICK":[{guard:`isOpenControlled`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.FOCUS":{target:`focused`},OPEN:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open.interacting`,actions:[`invokeOnOpen`]}],"VALUE.CLEAR":{target:`focused`,actions:[`clearInputValue`,`clearSelectedItems`,`setInitialFocus`]}}},focused:{tags:[`focused`],entry:[`scrollContentToTop`,`clearHighlightedValue`],exit:[`cancelFinalFocus`],on:{"CONTROLLED.OPEN":[{guard:`isChangeEvent`,target:`open.suggesting`},{target:`open.interacting`}],"INPUT.CHANGE":[{guard:H(`isOpenControlled`,`openOnChange`),actions:[`setInputValue`,`invokeOnOpen`,`highlightFirstItemIfNeeded`]},{guard:`openOnChange`,target:`open.suggesting`,actions:[`setInputValue`,`invokeOnOpen`,`highlightFirstItemIfNeeded`]},{actions:[`setInputValue`]}],"LAYER.INTERACT_OUTSIDE":{target:`idle`},"INPUT.ESCAPE":{guard:H(`isCustomValue`,U(`allowCustomValue`)),actions:[`revertInputValue`]},"INPUT.BLUR":{target:`idle`},"INPUT.CLICK":[{guard:`isOpenControlled`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]}],"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.ARROW_DOWN":[{guard:H(`isOpenControlled`,`autoComplete`),actions:[`invokeOnOpen`]},{guard:`autoComplete`,target:`open.interacting`,actions:[`invokeOnOpen`]},{guard:`isOpenControlled`,actions:[`highlightFirstOrSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstOrSelectedItem`,`invokeOnOpen`]}],"INPUT.ARROW_UP":[{guard:H(`isOpenControlled`,`autoComplete`),actions:[`invokeOnOpen`]},{guard:`autoComplete`,target:`open.interacting`,actions:[`invokeOnOpen`]},{guard:`isOpenControlled`,actions:[`highlightLastOrSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightLastOrSelectedItem`,`invokeOnOpen`]}],OPEN:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open.interacting`,actions:[`invokeOnOpen`]}],"VALUE.CLEAR":{actions:[`clearInputValue`,`clearSelectedItems`]}}}}},open:{tags:[`open`,`focused`],entry:[`setInitialFocus`],exit:[`cancelHighlightFrame`],effects:[`trackFocusVisible`,`scrollToHighlightedItem`,`trackDismissableLayer`,`trackPlacement`,`trackLiveRegion`],on:{"CONTROLLED.CLOSE":[{guard:`restoreFocus`,target:`closed.focused`,actions:[`setFinalFocus`]},{target:`closed.idle`}],"INPUT.ENTER":[{guard:H(`isOpenControlled`,`isCustomValue`,U(`hasHighlightedItem`),U(`allowCustomValue`)),actions:[`revertInputValue`,`invokeOnClose`]},{guard:H(`isCustomValue`,U(`hasHighlightedItem`),U(`allowCustomValue`)),target:`closed.focused`,actions:[`revertInputValue`,`invokeOnClose`]},{guard:H(`isOpenControlled`,`closeOnSelect`),actions:[`selectHighlightedItem`,`invokeOnClose`]},{guard:`closeOnSelect`,target:`closed.focused`,actions:[`selectHighlightedItem`,`invokeOnClose`,`setFinalFocus`]},{actions:[`selectHighlightedItem`]}],"ITEM.CLICK":[{guard:H(`isOpenControlled`,`closeOnSelect`),actions:[`selectItem`,`invokeOnClose`]},{guard:`closeOnSelect`,target:`closed.focused`,actions:[`selectItem`,`invokeOnClose`,`setFinalFocus`]},{actions:[`selectItem`]}],"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`]}],"LAYER.INTERACT_OUTSIDE":[{guard:H(`isOpenControlled`,`isCustomValue`,U(`allowCustomValue`)),actions:[`revertInputValue`,`invokeOnClose`]},{guard:H(`isCustomValue`,U(`allowCustomValue`)),target:`closed.idle`,actions:[`revertInputValue`,`invokeOnClose`]},{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.idle`,actions:[`invokeOnClose`]}],CLOSE:[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`,`setFinalFocus`]}],"VALUE.CLEAR":[{guard:`isOpenControlled`,actions:[`clearInputValue`,`clearSelectedItems`,`invokeOnClose`,`scrollContentToTop`]},{target:`closed.focused`,actions:[`clearInputValue`,`clearSelectedItems`,`invokeOnClose`,`setFinalFocus`]}]},initial:`interacting`,states:{interacting:{on:{CHILDREN_CHANGE:[{guard:H(`isHighlightedItemRemoved`,`hasCollectionItems`,`autoHighlight`),actions:[`clearHighlightedValue`,`highlightFirstItem`]},{guard:`isHighlightedItemRemoved`,actions:[`clearHighlightedValue`]},{actions:[`scrollToHighlightedItem`]}],"INPUT.HOME":{actions:[`highlightFirstItem`]},"INPUT.END":{actions:[`highlightLastItem`]},"INPUT.ARROW_DOWN":[{guard:H(`autoComplete`,`isLastItemHighlighted`),actions:[`clearHighlightedValue`,`scrollContentToTop`]},{actions:[`highlightNextItem`]}],"INPUT.ARROW_UP":[{guard:H(`autoComplete`,`isFirstItemHighlighted`),actions:[`clearHighlightedValue`]},{actions:[`highlightPrevItem`]}],"INPUT.CHANGE":[{guard:`autoComplete`,target:`suggesting`,actions:[`setInputValue`,`scrollContentToTop`]},{target:`suggesting`,actions:[`clearHighlightedValue`,`setInputValue`,`scrollContentToTop`]}],"ITEM.POINTER_MOVE":{actions:[`setHighlightedValue`]},"ITEM.POINTER_LEAVE":{actions:[`clearHighlightedValue`]},"LAYER.ESCAPE":[{guard:H(`isOpenControlled`,`autoComplete`),actions:[`syncInputValue`,`invokeOnClose`]},{guard:`autoComplete`,target:`closed.focused`,actions:[`syncInputValue`,`invokeOnClose`]},{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`,`setFinalFocus`]}]}},suggesting:{exit:[`cancelResultsAnnouncement`],on:{CHILDREN_CHANGE:[{guard:H(`isHighlightedItemRemoved`,`hasCollectionItems`,`autoHighlight`),actions:[`clearHighlightedValue`,`highlightFirstItem`]},{guard:`isHighlightedItemRemoved`,actions:[`clearHighlightedValue`]},{guard:`autoHighlight`,actions:[`highlightFirstItem`]}],"INPUT.ARROW_DOWN":{target:`interacting`,actions:[`highlightNextItem`]},"INPUT.ARROW_UP":{target:`interacting`,actions:[`highlightPrevItem`]},"INPUT.HOME":{target:`interacting`,actions:[`highlightFirstItem`]},"INPUT.END":{target:`interacting`,actions:[`highlightLastItem`]},"INPUT.CHANGE":{actions:[`setInputValue`,`scrollContentToTop`]},"LAYER.ESCAPE":[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`]}],"ITEM.POINTER_MOVE":{target:`interacting`,actions:[`setHighlightedValue`]},"ITEM.POINTER_LEAVE":{actions:[`clearHighlightedValue`]}}}}}},implementations:{guards:{isInputValueEmpty:({computed:e})=>e(`isInputValueEmpty`),autoComplete:({computed:e,prop:t})=>e(`autoComplete`)&&!t(`multiple`),autoHighlight:({computed:e})=>e(`autoHighlight`),isFirstItemHighlighted:({prop:e,context:t})=>e(`collection`).firstValue===t.get(`highlightedValue`),isLastItemHighlighted:({prop:e,context:t})=>e(`collection`).lastValue===t.get(`highlightedValue`),isCustomValue:({computed:e})=>e(`isCustomValue`),allowCustomValue:({prop:e})=>!!e(`allowCustomValue`),hasHighlightedItem:({context:e})=>e.get(`highlightedValue`)!=null,closeOnSelect:({prop:e})=>!!e(`closeOnSelect`),isOpenControlled:({prop:e})=>e(`open`)!=null,openOnChange:({prop:e,context:t})=>{let n=e(`openOnChange`);return d(n)?n:!!n?.({inputValue:t.get(`inputValue`)})},restoreFocus:({event:e})=>{let t=e.restoreFocus??e.previousEvent?.restoreFocus;return t==null||!!t},isChangeEvent:({event:e})=>e.previousEvent?.type===`INPUT.CHANGE`,autoFocus:({prop:e})=>!!e(`autoFocus`),isHighlightedItemRemoved:({prop:e,context:t})=>!e(`collection`).has(t.get(`highlightedValue`)),hasCollectionItems:({prop:e})=>e(`collection`).size>0},effects:{trackFocusVisible({scope:e}){return et({root:e.getRootNode?.()})},trackDismissableLayer({send:e,prop:t,scope:n}){return t(`disableLayer`)?void 0:Be(()=>V(n),{type:`listbox`,defer:!0,getRootNode:n.getRootNode,layerStyleTargets:[()=>Vt(n)],exclude:()=>[Bt(n),Ut(n),Wt(n)],onFocusOutside:t(`onFocusOutside`),onPointerDownOutside:t(`onPointerDownOutside`),onInteractOutside:t(`onInteractOutside`),onEscapeKeyDown(t){t.preventDefault(),t.stopPropagation(),e({type:`LAYER.ESCAPE`,src:`escape-key`})},onDismiss(){e({type:`LAYER.INTERACT_OUTSIDE`,src:`interact-outside`,restoreFocus:!1})}})},trackLiveRegion({refs:e,scope:t}){let n=()=>zt(t),r=ut({level:`assertive`,document:t.getDoc(),root:n}),i=ut({level:`polite`,document:t.getDoc(),root:n});return e.set(`liveRegion`,r),e.set(`resultsRegion`,i),()=>{r.destroy(),i.destroy(),e.set(`liveRegion`,null),e.set(`resultsRegion`,null)}},trackPlacement({context:e,prop:t,scope:n}){return e.set(`currentPlacement`,t(`positioning`).placement),de(()=>Ht(n)||Ut(n),()=>Vt(n),{...t(`positioning`),defer:!0,onComplete(t){e.set(`currentPlacement`,t.placement)}})},scrollToHighlightedItem({context:e,prop:t,scope:n}){let r=Bt(n),i=[],a=r=>{if($e()===`pointer`)return;let a=e.get(`highlightedValue`);if(!a)return;let o=V(n),s=t(`scrollToIndexFn`);if(s){s({index:t(`collection`).indexOf(a),immediate:r,getElement:()=>Gt(n,a)});return}let c=Gt(n,a),l=C(()=>{qe(c,{rootEl:o,block:`nearest`})});i.push(l)},o=C(()=>{Qe(`virtual`),a(!0)});i.push(o);let s=Ue(r,{attributes:[`aria-activedescendant`],callback:()=>a(!1)});return i.push(s),()=>{i.forEach(e=>e())}}},actions:{reposition({context:e,prop:t,scope:n,event:r}){de(()=>Ht(n),()=>Vt(n),{...t(`positioning`),...r.options,defer:!0,listeners:!1,onComplete(t){e.set(`currentPlacement`,t.placement)}})},setHighlightedValue({context:e,event:t}){t.value!=null&&e.set(`highlightedValue`,t.value)},clearHighlightedValue({context:e}){e.set(`highlightedValue`,null)},selectHighlightedItem(e){let{context:t,event:n,prop:r}=e,i=r(`collection`),a=t.get(`highlightedValue`);if(!a||!i.has(a))return;let o=r(`multiple`)?l(t.get(`value`),a):[a];r(`onSelect`)?.({value:o,itemValue:a,modifiers:We(n.modifiers)}),t.set(`value`,o);let s=S(r(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i.stringifyMany(o),clear:``});t.set(`inputValue`,s)},scrollToHighlightedItem({context:e,prop:t,scope:n}){T(()=>{let r=e.get(`highlightedValue`);if(r==null)return;let i=Gt(n,r),a=V(n),o=t(`scrollToIndexFn`);o?o({index:t(`collection`).indexOf(r),immediate:!0,getElement:()=>Gt(n,r)}):qe(i,{rootEl:a,block:`nearest`})})},selectItem(e){let{context:t,event:n,flush:r,prop:i}=e;n.value!=null&&r(()=>{let e=i(`multiple`)?l(t.get(`value`),n.value):[n.value];i(`onSelect`)?.({value:e,itemValue:n.value,modifiers:We(n.modifiers)}),t.set(`value`,e);let r=S(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(e),clear:``});t.set(`inputValue`,r)})},clearItem(e){let{context:t,event:n,flush:r,prop:i}=e;n.value!=null&&r(()=>{let e=u(t.get(`value`),n.value);t.set(`value`,e);let r=S(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(e),clear:``});t.set(`inputValue`,r)})},setInitialFocus({scope:e}){C(()=>{Kt(e)})},setFinalFocus({scope:e,refs:t}){t.get(`finalFocusFrame`).request(()=>{Ut(e)?.dataset.focusable==null?Kt(e):qt(e)})},cancelFinalFocus({refs:e}){e.get(`finalFocusFrame`).cancel()},cancelHighlightFrame({refs:e}){e.get(`highlightFrame`).cancel()},syncInputValue({context:e,scope:t,event:n}){let r=Bt(t);r&&(r.value=e.get(`inputValue`),queueMicrotask(()=>{n.current().type!==`INPUT.CHANGE`&&Re(r)}))},setInputValue({context:e,event:t}){e.set(`inputValue`,t.value)},clearInputValue({context:e}){e.set(`inputValue`,``)},revertInputValue({context:e,prop:t,computed:n}){let r=t(`selectionBehavior`),i=S(r,{replace:n(`hasSelectedItems`)?n(`valueAsString`):``,preserve:e.get(`inputValue`),clear:``});e.set(`inputValue`,i)},setValue(e){let{context:t,flush:n,event:r,prop:i}=e;n(()=>{t.set(`value`,r.value);let e=S(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(r.value),clear:``});t.set(`inputValue`,e)})},clearSelectedItems(e){let{context:t,flush:n,prop:r}=e;n(()=>{t.set(`value`,[]);let e=S(r(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r(`collection`).stringifyMany([]),clear:``});t.set(`inputValue`,e)})},scrollContentToTop({prop:e,scope:t}){let n=e(`scrollToIndexFn`);if(n){let r=e(`collection`).firstValue;n({index:0,immediate:!0,getElement:()=>Gt(t,r)})}else{let e=V(t);if(!e)return;e.scrollTop=0}},invokeOnOpen({prop:e,event:t,context:n}){let r=$t(t);e(`onOpenChange`)?.({open:!0,reason:r,value:n.get(`value`)})},invokeOnClose({prop:e,event:t,context:n}){let r=$t(t);e(`onOpenChange`)?.({open:!1,reason:r,value:n.get(`value`)})},highlightFirstItem({context:e,prop:t,scope:n,refs:r}){let i=()=>{let n=t(`collection`).firstValue;n&&e.set(`highlightedValue`,n)};V(n)?queueMicrotask(i):r.get(`highlightFrame`).request(i)},highlightFirstItemIfNeeded({computed:e,action:t}){e(`autoHighlight`)&&t([`highlightFirstItem`])},highlightLastItem({context:e,prop:t,scope:n,refs:r}){let i=()=>{let n=t(`collection`).lastValue;n&&e.set(`highlightedValue`,n)};V(n)?queueMicrotask(i):r.get(`highlightFrame`).request(i)},highlightNextItem({context:e,prop:t}){let n=null,r=e.get(`highlightedValue`),i=t(`collection`);r?(n=i.getNextValue(r),!n&&t(`loopFocus`)&&(n=i.firstValue)):n=i.firstValue,n&&e.set(`highlightedValue`,n)},highlightPrevItem({context:e,prop:t}){let n=null,r=e.get(`highlightedValue`),i=t(`collection`);r?(n=i.getPreviousValue(r),!n&&t(`loopFocus`)&&(n=i.lastValue)):n=i.lastValue,n&&e.set(`highlightedValue`,n)},highlightFirstSelectedItem({context:e,prop:t,refs:n}){n.get(`highlightFrame`).request(()=>{let[n]=t(`collection`).sort(e.get(`value`));n&&e.set(`highlightedValue`,n)})},highlightFirstOrSelectedItem({context:e,prop:t,computed:n,refs:r}){r.get(`highlightFrame`).request(()=>{let r=null;r=n(`hasSelectedItems`)?t(`collection`).sort(e.get(`value`))[0]:t(`collection`).firstValue,r&&e.set(`highlightedValue`,r)})},highlightLastOrSelectedItem({context:e,prop:t,computed:n,refs:r}){r.get(`highlightFrame`).request(()=>{let r=t(`collection`),i=null;i=n(`hasSelectedItems`)?r.sort(e.get(`value`))[0]:r.lastValue,i&&e.set(`highlightedValue`,i)})},autofillInputValue({context:e,computed:t,prop:n,event:r,scope:i}){let a=Bt(i),o=n(`collection`);if(!t(`autoComplete`)||!a||!r.keypress)return;let s=o.stringify(e.get(`highlightedValue`));C(()=>{a.value=s||e.get(`inputValue`)})},syncSelectedItems(e){queueMicrotask(()=>{let{context:t,prop:n}=e,r=n(`collection`),i=t.get(`value`),a=t.get(`selectedItemMap`),o=rt({values:i,collection:r,selectedItemMap:a});t.set(`selectedItemMap`,o.nextSelectedItemMap);let s=S(n(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r.stringifyMany(i),clear:``});t.set(`inputValue`,s)})},syncHighlightedItem({context:e,prop:t}){let n=t(`collection`).find(e.get(`highlightedValue`));e.set(`highlightedItem`,n)},announceHighlightedItem({context:e,prop:t,refs:n}){if(!Ee())return;let r=e.get(`highlightedValue`),i=r?t(`collection`).stringifyItem(t(`collection`).find(r)):null;if(!i)return;let a=r?e.get(`value`).includes(r):!1;n.get(`liveRegion`)?.announce(a?`${i}, selected`:i)},announceResults({refs:e,prop:t}){e.get(`resultsRegion`)?.announce(en(t),an)},cancelResultsAnnouncement({refs:e}){e.get(`resultsRegion`)?.cancel()},toggleVisibility({event:e,send:t,prop:n}){t({type:n(`open`)?`CONTROLLED.OPEN`:`CONTROLLED.CLOSE`,previousEvent:e})}}}})})))()}var cn;function ln(){return(ln=t((()=>{Tt(),cn=wt.extendWith(`empty`)})))()}function un(e){let{locale:t,...n}=e||{},r=dn(t||`en-US`,{usage:`search`,...n});function i(e){return e=e.normalize(`NFC`),r.resolvedOptions().ignorePunctuation&&(e=e.replace(/\p{P}/gu,``)),e}function a(e,t){return t.length===0||(e=i(e),t=i(t),r.compare(e.slice(0,t.length),t)===0)}function o(e,t){return t.length===0||(e=i(e),t=i(t),r.compare(e.slice(-t.length),t)===0)}function s(e,t){if(t.length===0)return!0;e=i(e),t=i(t);let n=0,a=t.length;for(;n+a<=e.length;n++){let i=e.slice(n,n+a);if(r.compare(t,i)===0)return!0}return!1}return{startsWith:a,endsWith:o,contains:s}}var dn;function fn(){return(fn=t((()=>{dn=dt(Intl.Collator)})))()}function pn(e){let t=F(),n=e.locale??t.locale;return(0,mn.useMemo)(()=>un({...e,locale:n}),[n,e])}var mn;function hn(){return(hn=t((()=>{Ne(),mn=n(),fn()})))()}var gn,W;function G(){return(G=t((()=>{I(),[gn,W]=Me({name:`ComboboxContext`,hookName:`useComboboxContext`,providerName:`<ComboboxProvider />`})})))()}var _n,vn,yn;function bn(){return(bn=t((()=>{A(),G(),_n=n(),P(),vn=r(),yn=(0,_n.forwardRef)((e,t)=>{let n=W(),r=N(n.getClearTriggerProps(),e);return(0,vn.jsx)(L.button,{...r,ref:t})}),yn.displayName=`ComboboxClearTrigger`})))()}var xn,Sn,Cn;function wn(){return(wn=t((()=>{ke(),A(),be(),ye(),G(),xn=n(),P(),Sn=r(),Cn=(0,xn.forwardRef)((e,t)=>{let n=W(),r=O(),i=N(n.getContentProps(),r.getPresenceProps(),e),a=Fe(r.ref,t);return(0,Sn.jsx)(he,{presence:r,children:(0,Sn.jsx)(L.div,{...i,ref:a})})}),Cn.displayName=`ComboboxContent`})))()}var Tn,En,Dn,On;function kn(){return(kn=t((()=>{ln(),A(),G(),Tn=n(),En=r(),Dn=cn.build(),On=(0,Tn.forwardRef)((e,t)=>W().collection.size===0?(0,En.jsx)(L.div,{...Dn.empty.attrs,...e,role:`presentation`,ref:t}):null),On.displayName=`ComboboxEmpty`})))()}var An;function jn(){return(jn=t((()=>{G(),An=e=>e.children(W())})))()}var Mn,Nn,Pn;function Fn(){return(Fn=t((()=>{A(),G(),Mn=n(),P(),Nn=r(),Pn=(0,Mn.forwardRef)((e,t)=>{let n=W(),r=N(n.getControlProps(),e);return(0,Nn.jsx)(L.div,{...r,ref:t})}),Pn.displayName=`ComboboxControl`})))()}var In,Ln,Rn;function zn(){return(zn=t((()=>{A(),pt(),G(),In=n(),P(),Ln=r(),Rn=(0,In.forwardRef)((e,t)=>{let n=W(),r=N(n.getInputProps(),e),i=ft();return(0,Ln.jsx)(L.input,{"aria-describedby":i?.ariaDescribedby,...r,ref:t})}),Rn.displayName=`ComboboxInput`})))()}var Bn,Vn;function Hn(){return(Hn=t((()=>{I(),[Bn,Vn]=Me({name:`ComboboxItemContext`,hookName:`useComboboxItemContext`,providerName:`<ComboboxItemProvider />`})})))()}var Un,Wn;function Gn(){return(Gn=t((()=>{I(),[Un,Wn]=Me({name:`ComboboxItemPropsContext`,hookName:`useComboboxItemPropsContext`,providerName:`<ComboboxItemPropsProvider />`})})))()}var Kn,qn,Jn,Yn;function Xn(){return(Xn=t((()=>{M(),A(),G(),Hn(),Gn(),Kn=n(),P(),qn=r(),Jn=j(),Yn=(0,Kn.forwardRef)((e,t)=>{let[n,r]=Jn(e,[`item`,`persistFocus`]),i=W(),a=N(i.getItemProps(n),r),o=i.getItemState(n);return(0,qn.jsx)(Un,{value:n,children:(0,qn.jsx)(Bn,{value:o,children:(0,qn.jsx)(L.div,{...a,ref:t})})})}),Yn.displayName=`ComboboxItem`})))()}var Zn;function Qn(){return(Qn=t((()=>{Hn(),Zn=e=>e.children(Vn())})))()}var $n,er;function tr(){return(tr=t((()=>{I(),[$n,er]=Me({name:`ComboboxItemGroupPropsContext`,hookName:`useComboboxItemGroupPropsContext`,providerName:`<ComboboxItemGroupPropsProvider />`})})))()}var nr,rr,ir,ar;function or(){return(or=t((()=>{M(),A(),G(),tr(),nr=n(),P(),rr=r(),ir=j(),ar=(0,nr.forwardRef)((e,t)=>{let n=(0,nr.useId)(),[r,i]=ir(e,[`id`]),a={id:n,...r},o=W(),s=N(o.getItemGroupProps(a),i);return(0,rr.jsx)($n,{value:a,children:(0,rr.jsx)(L.div,{...s,ref:t})})}),ar.displayName=`ComboboxItemGroup`})))()}var sr,cr,lr;function ur(){return(ur=t((()=>{A(),G(),tr(),sr=n(),P(),cr=r(),lr=(0,sr.forwardRef)((e,t)=>{let n=W(),r=er(),i=N(n.getItemGroupLabelProps({htmlFor:r.id}),e);return(0,cr.jsx)(L.div,{...i,ref:t})}),lr.displayName=`ComboboxItemGroupLabel`})))()}var dr,fr,pr;function mr(){return(mr=t((()=>{A(),G(),Gn(),dr=n(),P(),fr=r(),pr=(0,dr.forwardRef)((e,t)=>{let n=W(),r=Wn(),i=N(n.getItemIndicatorProps(r),e);return(0,fr.jsx)(L.div,{...i,ref:t})}),pr.displayName=`ComboboxItemIndicator`})))()}var hr,gr,_r;function vr(){return(vr=t((()=>{A(),G(),Gn(),hr=n(),P(),gr=r(),_r=(0,hr.forwardRef)((e,t)=>{let n=W(),r=Wn(),i=N(n.getItemTextProps(r),e);return(0,gr.jsx)(L.span,{...i,ref:t})}),_r.displayName=`ComboboxItemText`})))()}var yr,br,xr;function Sr(){return(Sr=t((()=>{A(),G(),yr=n(),P(),br=r(),xr=(0,yr.forwardRef)((e,t)=>{let n=W(),r=N(n.getLabelProps(),e);return(0,br.jsx)(L.label,{...r,ref:t})}),xr.displayName=`ComboboxLabel`})))()}var Cr,wr,Tr;function Er(){return(Er=t((()=>{A(),G(),Cr=n(),P(),wr=r(),Tr=(0,Cr.forwardRef)((e,t)=>{let n=W(),r=N(n.getListProps(),e);return(0,wr.jsx)(L.div,{...r,ref:t})}),Tr.displayName=`ComboboxList`})))()}var Dr,Or,kr;function Ar(){return(Ar=t((()=>{A(),ye(),G(),Dr=n(),P(),Or=r(),kr=(0,Dr.forwardRef)((e,t)=>{let n=W(),r=O(),i=N(n.getPositionerProps(),e);return r.unmounted?null:(0,Or.jsx)(L.div,{...i,ref:t})}),kr.displayName=`ComboboxPositioner`})))()}var jr,Mr;function Nr(){return(Nr=t((()=>{Oe(),Ne(),pt(),sn(),Qt(),jr=n(),oe(),b(),Mr=e=>{let t=(0,jr.useId)(),{dir:n}=F(),{getRootNode:r}=je(),i=ft(),a={id:t,ids:{label:i?.ids.label,input:i?.ids.control},disabled:i?.disabled,readOnly:i?.readOnly,required:i?.required,invalid:i?.invalid,dir:n,getRootNode:r,...e};return Zt(ne(on,a),y)}})))()}var Pr,Fr,Ir,Lr;function Rr(){return(Rr=t((()=>{M(),A(),ve(),fe(),ye(),G(),Nr(),Pr=n(),P(),Fr=r(),Ir=(e,t)=>{let[n,r]=ge(e),[i,a]=j()(r,`allowCustomValue.alwaysSubmitOnEnter.autoFocus.closeOnSelect.collection.composite.defaultHighlightedValue.defaultInputValue.defaultOpen.defaultValue.disabled.disableLayer.form.highlightedValue.id.ids.inputBehavior.inputValue.loading.invalid.loopFocus.multiple.name.navigate.onFocusOutside.onHighlightChange.onInputValueChange.onInteractOutside.onOpenChange.onPointerDownOutside.onSelect.onValueChange.open.openOnChange.openOnClick.openOnKeyPress.placeholder.positioning.readOnly.required.scrollToIndexFn.selectionBehavior.translations.value`.split(`.`)),o=Mr(i),s=pe(N({present:o.open},n)),c=N(o.getRootProps(),a);return(0,Fr.jsx)(gn,{value:o,children:(0,Fr.jsx)(_e,{value:s,children:(0,Fr.jsx)(L.div,{...c,ref:t})})})},Lr=(0,Pr.forwardRef)(Ir)})))()}var zr,Br,Vr,Hr;function Ur(){return(Ur=t((()=>{M(),A(),ve(),fe(),ye(),G(),zr=n(),P(),Br=r(),Vr=(e,t)=>{let[n,r]=ge(e),[{value:i},a]=j()(r,[`value`]),o=pe(N({present:i.open},n)),s=N(i.getRootProps(),a);return(0,Br.jsx)(gn,{value:i,children:(0,Br.jsx)(_e,{value:o,children:(0,Br.jsx)(L.div,{...s,ref:t})})})},Hr=(0,zr.forwardRef)(Vr)})))()}var Wr,Gr,Kr,qr;function Jr(){return(Jr=t((()=>{M(),A(),G(),Wr=n(),P(),Gr=r(),Kr=j(),qr=(0,Wr.forwardRef)((e,t)=>{let[n,r]=Kr(e,[`focusable`]),i=W(),a=N(i.getTriggerProps(n),r);return(0,Gr.jsx)(L.button,{...a,ref:t})}),qr.displayName=`ComboboxTrigger`})))()}var K;function Yr(){return(Yr=t((()=>{Ae(),bn(),wn(),kn(),jn(),Fn(),zn(),Xn(),Qn(),or(),ur(),mr(),vr(),Sr(),Er(),Ar(),Rr(),Ur(),Jr(),K=Pe({ClearTrigger:()=>yn,Content:()=>Cn,Context:()=>An,Control:()=>Pn,Empty:()=>On,Input:()=>Rn,Item:()=>Yn,ItemContext:()=>Zn,ItemGroup:()=>ar,ItemGroupLabel:()=>lr,ItemIndicator:()=>pr,ItemText:()=>_r,Label:()=>xr,List:()=>Tr,Positioner:()=>kr,Root:()=>Lr,RootProvider:()=>Hr,Trigger:()=>qr})})))()}var Xr,Zr,Qr,$r;function ei(){return(ei=t((()=>{M(),ht(),Xr=n(),Zr=r(),Qr=j(),$r=e=>{if(typeof e.text!=`string`)throw Error(`[ark-ui/highlight] text must be a string`);let[t,n]=Qr(e,[`query`,`text`,`ignoreCase`,`matchAll`,`exactMatch`]),r=mt(t);return(0,Zr.jsx)(Xr.Fragment,{children:r.map(({text:e,match:t},r)=>t?(0,Zr.jsx)(`mark`,{...n,children:e},r):(0,Zr.jsx)(Xr.Fragment,{children:e},r))})}})))()}var ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,q;function ki(){return(ki=t((()=>{ti=`_root_227zw_45`,ni=`_control_227zw_52`,ri=`_input_227zw_63`,ii=`_iconButton_227zw_77`,ai=`_small_227zw_88`,oi=`_large_227zw_93`,si=`_multiple_227zw_104`,ci=`_iconContainer_227zw_119`,li=`_tags_227zw_123`,ui=`_startAdornment_227zw_175`,di=`_clearButton_227zw_190`,fi=`_trigger_227zw_218`,pi=`_positioner_227zw_251`,mi=`_content_227zw_256`,hi=`_expand_227zw_1`,gi=`_collapse_227zw_1`,_i=`_itemGroup_227zw_317`,vi=`_item_227zw_317`,yi=`_indicator_227zw_339`,bi=`_itemIcon_227zw_340`,xi=`_itemText_227zw_370`,Si=`_multipleContent_227zw_384`,Ci=`_itemIndicator_227zw_395`,wi=`_createItem_227zw_404`,Ti=`_noMatches_227zw_410`,Ei=`_loading_227zw_411`,Di=`_disabled_227zw_418`,Oi=`_invalid_227zw_437`,q={root:ti,control:ni,input:ri,iconButton:ii,small:ai,large:oi,multiple:si,iconContainer:ci,tags:li,startAdornment:ui,clearButton:di,trigger:fi,positioner:pi,content:mi,expand:hi,collapse:gi,itemGroup:_i,item:vi,indicator:yi,itemIcon:bi,itemText:xi,multipleContent:Si,itemIndicator:Ci,createItem:wi,noMatches:Ti,loading:Ei,disabled:Di,invalid:Oi}})))()}var Ai,ji,Mi;function Ni(){return(Ni=t((()=>{Ai=i(),Yr(),ei(),ki(),s(),ji=r(),Mi=e=>{let t=(0,Ai.c)(11),{option:n,query:r,highlightMatch:i}=e,a;t[0]===n.icon?a=t[1]:(a=n.icon&&(0,ji.jsx)(o,{className:q.itemIcon,icon:n.icon,"aria-hidden":`true`}),t[0]=n.icon,t[1]=a);let s;t[2]!==i||t[3]!==n.label||t[4]!==r?(s=i?(0,ji.jsx)($r,{query:r,text:n.label,ignoreCase:!0}):n.label,t[2]=i,t[3]=n.label,t[4]=r,t[5]=s):s=t[5];let c;t[6]===s?c=t[7]:(c=(0,ji.jsx)(K.ItemText,{className:q.itemText,children:s}),t[6]=s,t[7]=c);let l;return t[8]!==a||t[9]!==c?(l=(0,ji.jsxs)(ji.Fragment,{children:[a,c]}),t[8]=a,t[9]=c,t[10]=l):l=t[10],l}})))()}var Pi,Fi,J,Ii,Li,Ri,zi,Bi;function Vi(){return(Vi=t((()=>{Pi=n(),Yr(),it(),Nr(),hn(),ue(),Fi=e(a(),1),ki(),Ni(),s(),Ct(),J=r(),Ii=`__ds-autocomplete-create__`,Li=`,`,Ri=(e,t)=>e.toLocaleLowerCase()===t.toLocaleLowerCase(),zi=(e,t)=>e.find(e=>Ri(e.label,t)),Bi=({id:e,options:t=[],value:n,loading:r=!1,size:i=`default`,style:a,className:s,placeholder:c,disabled:l=!1,invalid:u=!1,onValueChange:d,onCreate:f,onInputValueChange:ee,onOpenChange:p,locale:{loading:m=`Loading...`,noMatches:h=`No matching tags`,addTag:te=`Add tag...`,createTag:g=e=>`Create new tag '${e}'`,removeTag:ne=e=>`Remove ${e}`}={},highlightMatch:re=!0,showTrigger:_=!0,startAdornment:v})=>{let y=(0,Pi.useId)(),[b,ie]=(0,Pi.useState)(``),[ae,oe]=(0,Pi.useState)(null),x=pn({sensitivity:`base`}),S=b.trim(),se=S?t.filter(e=>x.contains(e.label,S)):t,C=f&&S&&!zi(t,S)?{value:Ii,label:S}:null,w=ct({items:C?[...se,C]:se,itemToString:e=>e.label,itemToValue:e=>e.value}),T=e=>{ie(e),oe(null),ee?.(e)},E=e=>{let r=[...n],i=[];for(let n of e){let e=n.trim(),a=e?zi(t,e):void 0,o=a?.value??(f&&e?e:null);o===null||r.some(e=>Ri(e,o))||(a||i.push(e),r.push(o))}r.length!==n.length&&(i.forEach(e=>f?.(e)),d?.(r))},ce=e=>{d?.(n.filter(t=>t!==e))},le=Mr({id:e??y,collection:w,disabled:l,invalid:u,multiple:!0,value:n,inputValue:b,highlightedValue:ae,openOnClick:!0,loopFocus:!1,allowCustomValue:!0,selectionBehavior:`preserve`,onHighlightChange:e=>oe(e.highlightedValue),onInputValueChange:e=>{if(!e.inputValue.includes(Li)){T(e.inputValue);return}let t=e.inputValue.split(Li),n=t.pop()??``;E(t),T(n.trimStart())},onValueChange:e=>{e.value.includes(Ii)?E([S]):d?.(e.value),T(``)},onOpenChange:e=>{e.open||T(``),p?.(e.open)}}),D=e=>{e.key===`Enter`&&!ae?(e.preventDefault(),E([b]),T(``)):e.key===`Backspace`&&!b&&n.length?ce(n[n.length-1]):e.key===`Escape`&&T(``)},ue=e=>{let t=e.clipboardData.getData(`text`);t.includes(Li)&&(e.preventDefault(),E(`${b}${t}`.split(Li)),T(``))},de=e=>t.find(t=>t.value===e)?.label??e,O=C?w.items.slice(0,-1):w.items,fe=i===`small`?`small`:`medium`;return(0,J.jsxs)(K.RootProvider,{value:le,className:(0,Fi.default)(q.root,{[q.disabled]:l,[q.invalid]:u},s),style:a,lazyMount:!0,unmountOnExit:!0,children:[(0,J.jsxs)(K.Control,{className:(0,Fi.default)(q.control,q.multiple,i===`small`&&q.small,i===`large`&&q.large),children:[v&&(0,J.jsx)(`span`,{className:q.startAdornment,children:v}),(0,J.jsxs)(`div`,{className:q.tags,children:[n.map(e=>{let t=de(e);return(0,J.jsx)(St,{label:t,size:`small`,disabled:l,locale:{deleteAriaLabel:ne(t)},onDelete:()=>ce(e)},e)}),(0,J.jsx)(K.Input,{className:q.input,placeholder:n.length?te:c??(f?`Search or create a tag`:`Search tags`),onKeyDown:D,onPaste:ue})]}),_&&(0,J.jsx)(`div`,{className:q.iconContainer,children:(0,J.jsx)(K.Trigger,{className:q.trigger,"aria-label":`Toggle dropdown`,children:(0,J.jsx)(o,{icon:`keyboard_arrow_down`,size:fe})})})]}),(0,J.jsx)(me,{children:(0,J.jsx)(K.Positioner,{className:q.positioner,children:(0,J.jsxs)(K.Content,{className:(0,Fi.default)(q.content,q.multipleContent),children:[r&&(0,J.jsx)(`div`,{className:q.loading,children:m}),!r&&w.items.length===0&&(0,J.jsx)(`div`,{className:q.noMatches,children:h}),!r&&O.length>0&&(0,J.jsx)(K.ItemGroup,{className:q.itemGroup,children:O.map(e=>(0,J.jsxs)(K.Item,{item:e,className:q.item,children:[(0,J.jsx)(Mi,{option:e,query:S,highlightMatch:re}),(0,J.jsx)(K.ItemIndicator,{className:q.itemIndicator,children:(0,J.jsx)(o,{icon:`check`,size:`small`,"aria-hidden":`true`})})]},e.value))}),!r&&C&&(0,J.jsx)(K.Item,{item:C,className:(0,Fi.default)(q.item,q.createItem),children:(0,J.jsx)(K.ItemText,{className:q.itemText,children:g(C.label)})})]})})})]})},Bi.__docgenInfo={description:``,methods:[],displayName:`AutocompleteTags`,props:{options:{defaultValue:{value:`[]`,computed:!1},required:!1},loading:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`'default'`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},invalid:{defaultValue:{value:`false`,computed:!1},required:!1},locale:{defaultValue:{value:`{}`,computed:!1},required:!1},highlightMatch:{defaultValue:{value:`true`,computed:!1},required:!1},showTrigger:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}function Hi(e){return e.label}function Ui(e){return e.value}var Wi,Gi,Ki,Y,qi,X;function Ji(){return(Ji=t((()=>{Wi=i(),Gi=n(),Yr(),it(),hn(),ue(),Ki=e(a(),1),ki(),s(),Ni(),Vi(),Y=r(),qi=e=>{let t=(0,Wi.c)(58),{id:n,options:r,loading:i,size:a,style:s,className:c,placeholder:l,disabled:u,invalid:d,onValueChange:f,onInputValueChange:ee,onOpenChange:p,locale:m,highlightMatch:h,showTrigger:te,startAdornment:g}=e,ne=r===void 0?[]:r,re=i!==void 0&&i,_=a===void 0?`default`:a,v=l===void 0?`Start typing to search...`:l,y=u!==void 0&&u,b=d!==void 0&&d,ie;t[0]===m?ie=t[1]:(ie=m===void 0?{}:m,t[0]=m,t[1]=ie);let{loading:ae,noMatches:oe}=ie,x=ae===void 0?`Loading...`:ae,S=oe===void 0?`No matches found`:oe,se=h===void 0||h,C=te===void 0||te,[w,T]=(0,Gi.useState)(``),E;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(E={sensitivity:`base`},t[2]=E):E=t[2];let ce=pn(E),le=w?ne.filter(e=>ce.contains(e.label,w)):ne,D=ct({items:le,itemToString:Hi,itemToValue:Ui}),ue;t[3]===ee?ue=t[4]:(ue=e=>{T(e.inputValue),ee?.(e.inputValue)},t[3]=ee,t[4]=ue);let de=ue,O;t[5]===f?O=t[6]:(O=e=>{let t=e.items[0];f?.(t?.value??``)},t[5]=f,t[6]=O);let fe=O,pe;t[7]===p?pe=t[8]:(pe=e=>{p?.(e.open)},t[7]=p,t[8]=pe);let he=pe,ge;t[9]!==c||t[10]!==y||t[11]!==b?(ge=(0,Ki.default)(q.root,{[q.disabled]:y,[q.invalid]:b},c),t[9]=c,t[10]=y,t[11]=b,t[12]=ge):ge=t[12];let _e=ge,ve=K,ye=_===`small`&&q.small,be=_===`large`&&q.large,xe;t[13]!==ye||t[14]!==be?(xe=(0,Ki.default)(q.control,ye,be),t[13]=ye,t[14]=be,t[15]=xe):xe=t[15];let Se;t[16]===g?Se=t[17]:(Se=g&&(0,Y.jsx)(`span`,{className:q.startAdornment,children:g}),t[16]=g,t[17]=Se);let Ce;t[18]===v?Ce=t[19]:(Ce=(0,Y.jsx)(K.Input,{className:q.input,placeholder:v}),t[18]=v,t[19]=Ce);let we;t[20]!==y||t[21]!==C||t[22]!==_?(we=(0,Y.jsx)(K.Context,{children:e=>(0,Y.jsxs)(`div`,{className:q.iconContainer,children:[e.inputValue&&!y&&(0,Y.jsx)(`button`,{type:`button`,className:q.clearButton,"aria-label":`Clear`,onClick:()=>{e.setValue([]),e.setInputValue(``)},children:(0,Y.jsx)(o,{icon:`close`,size:_===`small`?`small`:`medium`})}),C&&(0,Y.jsx)(K.Trigger,{className:q.trigger,"aria-label":`Toggle dropdown`,children:(0,Y.jsx)(o,{icon:`keyboard_arrow_down`,size:_===`small`?`small`:`medium`})})]})}),t[20]=y,t[21]=C,t[22]=_,t[23]=we):we=t[23];let k;t[24]!==xe||t[25]!==Se||t[26]!==Ce||t[27]!==we?(k=(0,Y.jsxs)(K.Control,{className:xe,children:[Se,Ce,we]}),t[24]=xe,t[25]=Se,t[26]=Ce,t[27]=we,t[28]=k):k=t[28];let Te=me,Ee=K,De=q,Oe=K,A=q,j;t[29]!==re||t[30]!==x?(j=re&&(0,Y.jsx)(`div`,{className:q.loading,children:x}),t[29]=re,t[30]=x,t[31]=j):j=t[31];let M=!re&&D.items.length===0&&(0,Y.jsx)(`div`,{className:q.noMatches,children:S}),N=!re&&D.items.length>0&&(0,Y.jsx)(K.ItemGroup,{className:q.itemGroup,children:D.items.map(e=>(0,Y.jsx)(K.Item,{item:e,className:q.item,children:(0,Y.jsx)(Mi,{option:e,query:w,highlightMatch:se})},e.value))}),P;t[32]!==Oe.Content||t[33]!==A.content||t[34]!==j||t[35]!==M||t[36]!==N?(P=(0,Y.jsxs)(Oe.Content,{className:A.content,children:[j,M,N]}),t[32]=Oe.Content,t[33]=A.content,t[34]=j,t[35]=M,t[36]=N,t[37]=P):P=t[37];let F;t[38]!==Ee.Positioner||t[39]!==De.positioner||t[40]!==P?(F=(0,Y.jsx)(Ee.Positioner,{className:De.positioner,children:P}),t[38]=Ee.Positioner,t[39]=De.positioner,t[40]=P,t[41]=F):F=t[41];let ke;t[42]!==Te||t[43]!==F?(ke=(0,Y.jsx)(Te,{children:F}),t[42]=Te,t[43]=F,t[44]=ke):ke=t[44];let I;return t[45]!==D||t[46]!==y||t[47]!==de||t[48]!==he||t[49]!==fe||t[50]!==n||t[51]!==b||t[52]!==_e||t[53]!==s||t[54]!==ve.Root||t[55]!==k||t[56]!==ke?(I=(0,Y.jsxs)(ve.Root,{id:n,collection:D,className:_e,style:s,disabled:y,invalid:b,onInputValueChange:de,onValueChange:fe,onOpenChange:he,closeOnSelect:!0,lazyMount:!0,unmountOnExit:!0,children:[k,ke]}),t[45]=D,t[46]=y,t[47]=de,t[48]=he,t[49]=fe,t[50]=n,t[51]=b,t[52]=_e,t[53]=s,t[54]=ve.Root,t[55]=k,t[56]=ke,t[57]=I):I=t[57],I},X=e=>{let t=(0,Wi.c)(2),n;return t[0]===e?n=t[1]:(n=e.multiple?(0,Y.jsx)(Bi,{...e}):(0,Y.jsx)(qi,{...e}),t[0]=e,t[1]=n),n},X.displayName=`DsAutocomplete`})))()}var Yi;function Xi(){return(Xi=t((()=>{Yi=[`small`,`default`,`large`]})))()}var Zi,Qi;function $i(){return($i=t((()=>{Zi=`_field_1f04r_1`,Qi={field:Zi}})))()}var Z,Q,ea,ta,na,ra,ia,aa,oa,sa,ca,$,la,ua,da,fa,pa,ma,ha,ga;function _a(){return(_a=t((()=>{Z=n(),_t(),s(),xt(),yt(),gt(),Ji(),Xi(),$i(),Q=r(),ea={title:`Components/Autocomplete`,component:X,parameters:{layout:`centered`},decorators:[e=>(0,Q.jsx)(`div`,{className:Qi.field,children:(0,Q.jsx)(e,{})})],argTypes:{options:{control:`object`},size:{control:`select`,options:Yi},placeholder:{control:`text`},highlightMatch:{control:`boolean`},showTrigger:{control:`boolean`},loading:{control:`boolean`},disabled:{control:`boolean`},invalid:{control:`boolean`},locale:{control:`object`},startAdornment:{control:!1},multiple:{control:!1},value:{control:!1},onValueChange:{action:`valueChange`},onInputValueChange:{action:`inputValueChange`},onOpenChange:{action:`openChange`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},ta={args:{placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},na={render:()=>(0,Q.jsx)(X,{showTrigger:!1,placeholder:`Start typing to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]})},ra={args:{showTrigger:!1,startAdornment:(0,Q.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`,options:[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]}},ia={args:{placeholder:`Select a fruit...`,options:[{value:`apple`,label:`Apple`,icon:`nutrition`},{value:`banana`,label:`Banana`,icon:`nutrition`},{value:`cherry`,label:`Cherry`,icon:`nutrition`}]}},aa={render:()=>(0,Q.jsx)(X,{highlightMatch:!1,placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]})},oa={args:{loading:!0,placeholder:`Loading options...`,options:[]}},sa={args:{disabled:!0,placeholder:`Disabled autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},ca={args:{invalid:!0,placeholder:`Invalid autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},$={args:{locale:{loading:`Fetching...`,noMatches:`No matching options found`},placeholder:`Search or type...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},la={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Z.useState)([]),[r,i]=(0,Z.useState)(!1),a=async e=>{e?(i(!0),await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}].filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),i(!1)):n([])};return(0,Q.jsx)(X,{...e,options:t,loading:r,onInputValueChange:a,showTrigger:!1,startAdornment:(0,Q.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries (async)...`,locale:{noMatches:`No results found`}})}},ua={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Z.useState)([]),[r,i]=(0,Z.useState)(!0);return(0,Z.useEffect)(()=>{(async()=>{await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]),i(!1)})()},[]),(0,Q.jsx)(X,{...e,options:t,loading:r,placeholder:`Select a country...`})}},da={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,Z.useState)([{value:`production`,label:`Production`},{value:`staging`,label:`Staging`},{value:`security`,label:`Security`},{value:`compliance`,label:`Compliance`},{value:`nightly`,label:`Nightly`}]),[n,r]=(0,Z.useState)([`production`,`security`]);return(0,Q.jsx)(X,{multiple:!0,options:e,value:n,onValueChange:r,onCreate:e=>t(t=>[...t,{value:e,label:e}])})}},fa={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,Z.useState)([]);return(0,Q.jsx)(X,{multiple:!0,options:[{value:`production`,label:`Production`},{value:`staging`,label:`Staging`},{value:`security`,label:`Security`}],value:e,onValueChange:t})}},pa={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Z.useState)(!1);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(vt,{onClick:()=>n(!0),children:`Assign owner`}),(0,Q.jsxs)(bt,{open:t,onOpenChange:n,columns:4,children:[(0,Q.jsxs)(bt.Header,{children:[(0,Q.jsx)(bt.Title,{children:`Assign owner`}),(0,Q.jsx)(bt.CloseTrigger,{})]}),(0,Q.jsx)(bt.Body,{children:(0,Q.jsx)(X,{...e,placeholder:`Search team members...`,options:[{value:`alice`,label:`Alice Cohen`},{value:`bob`,label:`Bob Levi`},{value:`carol`,label:`Carol Smith`}]})})]})]})}},ma={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}];return(0,Q.jsxs)(z,{direction:`column`,gap:`var(--standard)`,width:`320px`,children:[(0,Q.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Large`}),(0,Q.jsx)(X,{options:e,size:`large`,placeholder:`Large autocomplete`})]}),(0,Q.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Default`}),(0,Q.jsx)(X,{options:e,size:`default`,placeholder:`Default autocomplete`})]}),(0,Q.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Small`}),(0,Q.jsx)(X,{options:e,size:`small`,placeholder:`Small autocomplete`})]}),Yi.map(t=>(0,Q.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsxs)(R,{variant:`body-xs-reg`,color:`secondary`,children:[`Tags, `,t]}),(0,Q.jsx)(X,{multiple:!0,size:t,options:e,value:[`apple`,`banana`]})]},t))]})}},ha={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}];return(0,Q.jsxs)(z,{direction:`column`,gap:`var(--standard)`,width:`320px`,children:[(0,Q.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Disabled`}),(0,Q.jsx)(X,{options:e,disabled:!0,placeholder:`Disabled autocomplete`})]}),(0,Q.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Invalid`}),(0,Q.jsx)(X,{options:e,invalid:!0,placeholder:`Invalid autocomplete`})]}),(0,Q.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Tags`}),(0,Q.jsx)(X,{multiple:!0,options:e,value:[`apple`,`banana`,`cherry`]})]}),(0,Q.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Tags, disabled`}),(0,Q.jsx)(X,{multiple:!0,options:e,value:[`apple`,`banana`],disabled:!0})]}),(0,Q.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Tags, invalid`}),(0,Q.jsx)(X,{multiple:!0,options:e,value:[`apple`],invalid:!0})]})]})}},ga=[`Default`,`SearchMode`,`WithStartAdornment`,`WithOptionIcons`,`WithoutHighlight`,`Loading`,`Disabled`,`Invalid`,`Localized`,`AsyncSearch`,`AsyncOptions`,`Tags`,`TagsSelectOnly`,`InsideModal`,`Sizes`,`States`],ta.parameters={...ta.parameters,docs:{...ta.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select or type to search...',
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }]
  }
}`,...ta.parameters?.docs?.source},description:{story:`The default autocomplete opens its dropdown from the trigger arrow or by typing,
and highlights the matching text while the list is filtered. Reach for this when the
user should be able to both browse the full list and search within it.`,...ta.parameters?.docs?.description}}},na.parameters={...na.parameters,docs:{...na.parameters?.docs,source:{originalSource:`{
  render: () => <DsAutocomplete showTrigger={false} placeholder="Start typing to search..." options={[{
    value: 'apple',
    label: 'Apple'
  }, {
    value: 'banana',
    label: 'Banana'
  }, {
    value: 'cherry',
    label: 'Cherry'
  }]} />
}`,...na.parameters?.docs?.source},description:{story:`Search mode hides the trigger arrow so the list only opens while typing. Use it for
search-style inputs where a persistent dropdown affordance would imply a short, fixed list.`,...na.parameters?.docs?.description}}},ra.parameters={...ra.parameters,docs:{...ra.parameters?.docs,source:{originalSource:`{
  args: {
    showTrigger: false,
    startAdornment: <DsIcon icon="search" size="medium" aria-label="search icon" />,
    placeholder: 'Search countries...',
    options: [{
      value: 'us',
      label: 'United States'
    }, {
      value: 'uk',
      label: 'United Kingdom'
    }, {
      value: 'ca',
      label: 'Canada'
    }]
  }
}`,...ra.parameters?.docs?.source},description:{story:"A `startAdornment` renders content before the input — most often a search icon — to\nreinforce the search intent without adding a separate label.",...ra.parameters?.docs?.description}}},ia.parameters={...ia.parameters,docs:{...ia.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a fruit...',
    options: [{
      value: 'apple',
      label: 'Apple',
      icon: 'nutrition'
    }, {
      value: 'banana',
      label: 'Banana',
      icon: 'nutrition'
    }, {
      value: 'cherry',
      label: 'Cherry',
      icon: 'nutrition'
    }]
  }
}`,...ia.parameters?.docs?.source},description:{story:"Each option can carry an `icon` that renders alongside its label, useful for giving\noptions a recognizable visual anchor.",...ia.parameters?.docs?.description}}},aa.parameters={...aa.parameters,docs:{...aa.parameters?.docs,source:{originalSource:`{
  render: () => <DsAutocomplete highlightMatch={false} placeholder="Select or type to search..." options={[{
    value: 'apple',
    label: 'Apple'
  }, {
    value: 'banana',
    label: 'Banana'
  }, {
    value: 'cherry',
    label: 'Cherry'
  }]} />
}`,...aa.parameters?.docs?.source},description:{story:"Disable match highlighting when the emphasized `mark` styling would compete with the\noption content, or when matches are handled server-side and no local query is available.",...aa.parameters?.docs?.description}}},oa.parameters={...oa.parameters,docs:{...oa.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    placeholder: 'Loading options...',
    options: []
  }
}`,...oa.parameters?.docs?.source},description:{story:"While `loading` is true a loading message replaces the option list, signalling that\nresults are being fetched. Pair it with server-driven `options` (see AsyncSearch).",...oa.parameters?.docs?.description}}},sa.parameters={...sa.parameters,docs:{...sa.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled autocomplete',
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }]
  }
}`,...sa.parameters?.docs?.source},description:{story:`The disabled state blocks all interaction and dims the control. Use it when the field
depends on another selection that has not been made yet.`,...sa.parameters?.docs?.description}}},ca.parameters={...ca.parameters,docs:{...ca.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    placeholder: 'Invalid autocomplete',
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }]
  }
}`,...ca.parameters?.docs?.source},description:{story:`The invalid state applies an error border for use with external validation — the input
stays focusable so the user can correct their entry.`,...ca.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    locale: {
      loading: 'Fetching...',
      noMatches: 'No matching options found'
    },
    placeholder: 'Search or type...',
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }]
  }
}`,...$.parameters?.docs?.source},description:{story:"The `locale` prop overrides the loading and empty-state messages so the component can be\ntranslated. Only the strings passed are overridden; omitted keys keep their defaults.",...$.parameters?.docs?.description}}},la.parameters={...la.parameters,docs:{...la.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
    const [loading, setLoading] = useState(false);
    const handleInputValueChange = async (value: string) => {
      if (!value) {
        setOptions([]);
        return;
      }
      setLoading(true);
      const countries: DsAutocompleteOption[] = [{
        value: 'us',
        label: 'United States'
      }, {
        value: 'uk',
        label: 'United Kingdom'
      }, {
        value: 'ca',
        label: 'Canada'
      }];
      await new Promise(resolve => setTimeout(resolve, 150));
      setOptions(countries.filter(c => c.label.toLowerCase().includes(value.toLowerCase())));
      setLoading(false);
    };
    return <DsAutocomplete {...args} options={options} loading={loading} onInputValueChange={handleInputValueChange} showTrigger={false} startAdornment={<DsIcon icon="search" size="medium" aria-label="search icon" />} placeholder="Search countries (async)..." locale={{
      noMatches: 'No results found'
    }} />;
  }
}`,...la.parameters?.docs?.source},description:{story:"For server-driven search, keep the fetched results in local state and feed them back via\n`options` while toggling `loading`. This is the recommended pattern for large or remote\ndatasets that should not be filtered on the client.",...la.parameters?.docs?.description}}},ua.parameters={...ua.parameters,docs:{...ua.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const load = async () => {
        await new Promise(resolve => setTimeout(resolve, 150));
        setOptions([{
          value: 'us',
          label: 'United States'
        }, {
          value: 'uk',
          label: 'United Kingdom'
        }, {
          value: 'ca',
          label: 'Canada'
        }]);
        setLoading(false);
      };
      void load();
    }, []);
    return <DsAutocomplete {...args} options={options} loading={loading} placeholder="Select a country..." />;
  }
}`,...ua.parameters?.docs?.source},description:{story:"When the full option set is fetched once on mount, start in a `loading` state and swap in\nthe results when the request resolves. After that the component filters locally.",...ua.parameters?.docs?.description}}},da.parameters={...da.parameters,docs:{...da.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const [options, setOptions] = useState<DsAutocompleteOption[]>([{
      value: 'production',
      label: 'Production'
    }, {
      value: 'staging',
      label: 'Staging'
    }, {
      value: 'security',
      label: 'Security'
    }, {
      value: 'compliance',
      label: 'Compliance'
    }, {
      value: 'nightly',
      label: 'Nightly'
    }]);
    const [value, setValue] = useState<string[]>(['production', 'security']);
    return <DsAutocomplete multiple options={options} value={value} onValueChange={setValue} onCreate={name => setOptions(current => [...current, {
      value: name,
      label: name
    }])} />;
  }
}`,...da.parameters?.docs?.source},description:{story:'Tags mode (`multiple`) collects several values as removable tags inside the field. Picking\nan option toggles it and keeps the list open. Pass `onCreate` to let users add tags that are\nnot in the list yet: type a name and press Enter or a comma, pick the "Create new tag" row, or\npaste a comma-separated list. Append created names to `options` so they stay selectable.',...da.parameters?.docs?.description}}},fa.parameters={...fa.parameters,docs:{...fa.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <DsAutocomplete multiple options={[{
      value: 'production',
      label: 'Production'
    }, {
      value: 'staging',
      label: 'Staging'
    }, {
      value: 'security',
      label: 'Security'
    }]} value={value} onValueChange={setValue} />;
  }
}`,...fa.parameters?.docs?.source},description:{story:"Without `onCreate`, tags mode only allows picking existing options. Use it where a value must\nalready exist elsewhere, such as filtering by tags that are defined on other records.",...fa.parameters?.docs?.description}}},pa.parameters={...pa.parameters,docs:{...pa.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
                <DsButtonV3 onClick={() => setOpen(true)}>Assign owner</DsButtonV3>
                <DsModal open={open} onOpenChange={setOpen} columns={4}>
                    <DsModal.Header>
                        <DsModal.Title>Assign owner</DsModal.Title>
                        <DsModal.CloseTrigger />
                    </DsModal.Header>
                    <DsModal.Body>
                        <DsAutocomplete {...args} placeholder="Search team members..." options={[{
            value: 'alice',
            label: 'Alice Cohen'
          }, {
            value: 'bob',
            label: 'Bob Levi'
          }, {
            value: 'carol',
            label: 'Carol Smith'
          }]} />
                    </DsModal.Body>
                </DsModal>
            </>;
  }
}`,...pa.parameters?.docs?.source},description:{story:"DsAutocomplete can be placed inside a DsModal (or DsDialog). The dropdown opens over the\nmodal content, and its options stay exposed to assistive technology as a `listbox` of\n`option`s, so screen reader users can pick a value without any extra wiring.",...pa.parameters?.docs?.description}}},ma.parameters={...ma.parameters,docs:{...ma.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => {
    const options: DsAutocompleteOption[] = [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }];
    return <DsStack direction="column" gap="var(--standard)" width="320px">
                <DsStack direction="column" gap="var(--2xs)">
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Large
                    </DsTypography>
                    <DsAutocomplete options={options} size="large" placeholder="Large autocomplete" />
                </DsStack>
                <DsStack direction="column" gap="var(--2xs)">
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Default
                    </DsTypography>
                    <DsAutocomplete options={options} size="default" placeholder="Default autocomplete" />
                </DsStack>
                <DsStack direction="column" gap="var(--2xs)">
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Small
                    </DsTypography>
                    <DsAutocomplete options={options} size="small" placeholder="Small autocomplete" />
                </DsStack>
                {autocompleteSizes.map(size => <DsStack key={size} direction="column" gap="var(--2xs)">
                        <DsTypography variant="body-xs-reg" color="secondary">
                            Tags, {size}
                        </DsTypography>
                        <DsAutocomplete multiple size={size} options={options} value={['apple', 'banana']} />
                    </DsStack>)}
            </DsStack>;
  }
}`,...ma.parameters?.docs?.source}}},ha.parameters={...ha.parameters,docs:{...ha.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => {
    const options: DsAutocompleteOption[] = [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }];
    return <DsStack direction="column" gap="var(--standard)" width="320px">
                <DsStack direction="column" gap="var(--2xs)">
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Disabled
                    </DsTypography>
                    <DsAutocomplete options={options} disabled placeholder="Disabled autocomplete" />
                </DsStack>
                <DsStack direction="column" gap="var(--2xs)">
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Invalid
                    </DsTypography>
                    <DsAutocomplete options={options} invalid placeholder="Invalid autocomplete" />
                </DsStack>
                <DsStack direction="column" gap="var(--2xs)">
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Tags
                    </DsTypography>
                    <DsAutocomplete multiple options={options} value={['apple', 'banana', 'cherry']} />
                </DsStack>
                <DsStack direction="column" gap="var(--2xs)">
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Tags, disabled
                    </DsTypography>
                    <DsAutocomplete multiple options={options} value={['apple', 'banana']} disabled />
                </DsStack>
                <DsStack direction="column" gap="var(--2xs)">
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Tags, invalid
                    </DsTypography>
                    <DsAutocomplete multiple options={options} value={['apple']} invalid />
                </DsStack>
            </DsStack>;
  }
}`,...ha.parameters?.docs?.source},description:{story:`Visual comparison of the disabled, invalid and tags states side by side. Reference only —
behavior for each state is covered by the individual stories and browser tests.`,...ha.parameters?.docs?.description}}}})))()}_a();export{ua as AsyncOptions,la as AsyncSearch,ta as Default,sa as Disabled,pa as InsideModal,ca as Invalid,oa as Loading,$ as Localized,na as SearchMode,ma as Sizes,ha as States,da as Tags,fa as TagsSelectOnly,ia as WithOptionIcons,ra as WithStartAdornment,aa as WithoutHighlight,ga as __namedExportsOrder,ea as default};