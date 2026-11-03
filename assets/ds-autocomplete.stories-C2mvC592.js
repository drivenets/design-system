import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r}from"./iframe-Dq3DX0h3.js";import{n as i,t as a}from"./classnames-BngcLiyu.js";import{n as o,t as s}from"./ds-icon-Cp8SXt7d.js";import{E as c,F as l,K as u,O as d,V as f,b as ee,bt as p,c as m,ft as te,h as ne,ht as h,i as g,l as _,m as v,n as y,pt as b,r as x,rt as re,s as ie,t as S,tt as ae,x as C,yt as oe}from"./normalize-props-BXy1hvEI.js";import{a as w,n as T,r as E}from"./raf-D1nJPjhp.js";import{B as D,S as se,W as ce,a as O,b as le,c as ue,d as k,f as de,i as fe,l as pe,m as me,o as he,p as ge,s as _e,u as ve,v as ye,x as be,y as xe}from"./ds-tooltip-BtTqcfuY.js";import{C as Se,D as A,E as Ce,M as we,N as Te,T as Ee,a as De,c as j,d as M,f as N,g as P,h as F,i as I,k as Oe,l as ke,m as Ae,n as je,o as Me,p as Ne,r as Pe,s as L,t as Fe,u as Ie,v as Le,w as Re}from"./runtime-DJU3wfdC.js";import{n as ze,t as Be}from"./caret-OM1hl62y.js";import{r as Ve,t as He}from"./dismissable-layer-Dmh5l_l2.js";import{n as Ue,t as We}from"./mutation-observer-ByZTBIKk.js";import{n as Ge,t as Ke}from"./navigate-DMPuUD5f.js";import{n as qe,t as Je}from"./scroll-DPHM9RKY.js";import{n as Ye,t as Xe}from"./equal-COyPOATC.js";import{i as Ze,o as Qe,r as $e,s as et}from"./use-event-BZVy-y6S.js";import{a as tt,c as nt,i as rt,n as it,o as at,r as ot,s as st,t as ct}from"./list-collection-Ctzx66Fx.js";import{n as lt,t as ut}from"./dist-MHXkc41m.js";import{t as dt}from"./cache-BupmKqjL.js";import{n as ft,t as pt}from"./use-field-context-Ztv9WoA-.js";import{n as mt,t as ht}from"./use-highlight-CwohtqxJ.js";import{n as R,t as gt}from"./ds-typography-DNKbNC34.js";import{n as _t,t as vt}from"./ds-button-v3-Ddm_IKpQ.js";import{n as yt,t as z}from"./ds-stack-BlID4s5H.js";import{t as bt}from"./ds-modal-G4eDGB_2.js";import{t as xt}from"./ds-modal-B_MrNe8F.js";import{t as St}from"./ds-tag-CS_HJlEi.js";import{t as Ct}from"./ds-tag-BSFYQJKY.js";var wt,B;function Tt(){return(Tt=t((()=>{p(),wt=oe(`combobox`).parts(`root`,`clearTrigger`,`content`,`control`,`input`,`item`,`itemGroup`,`itemGroupLabel`,`itemIndicator`,`itemText`,`label`,`list`,`positioner`,`trigger`),B=wt.build()})))()}var Et;function Dt(){return(Dt=t((()=>{nt(),Et=e=>new st(e),Et.empty=()=>new st({items:[]})})))()}var Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,V,zt,Bt,Vt,Ht,Ut,H,Wt,Gt;function Kt(){return(Kt=t((()=>{D(),Be(),Ot=e=>e.ids?.root??`combobox:${e.id}`,kt=e=>e.ids?.label??`combobox:${e.id}:label`,At=e=>e.ids?.control??`combobox:${e.id}:control`,jt=e=>e.ids?.input??`combobox:${e.id}:input`,Mt=e=>e.ids?.content??`combobox:${e.id}:content`,Nt=e=>e.ids?.positioner??`combobox:${e.id}:popper`,Pt=e=>e.ids?.trigger??`combobox:${e.id}:toggle-btn`,Ft=e=>e.ids?.clearTrigger??`combobox:${e.id}:clear-btn`,It=(e,t)=>e.ids?.itemGroup?.(t)??`combobox:${e.id}:optgroup:${t}`,Lt=(e,t)=>e.ids?.itemGroupLabel?.(t)??`combobox:${e.id}:optgroup-label:${t}`,Rt=(e,t)=>e.ids?.item?.(t)??`combobox:${e.id}:option:${t}`,V=e=>e.getById(Mt(e)),zt=e=>e.getById(jt(e)),Bt=e=>e.getById(Nt(e)),Vt=e=>e.getById(At(e)),Ht=e=>e.getById(Pt(e)),Ut=e=>e.getById(Ft(e)),H=(e,t)=>{if(t==null)return null;let n=`[role=option][data-value="${CSS.escape(t)}"]`;return ce(V(e),n)},Wt=e=>{let t=zt(e);e.isActiveElement(t)||t?.focus({preventScroll:!0}),ze(t)},Gt=e=>{let t=Ht(e);e.isActiveElement(t)||t?.focus({preventScroll:!0})}})))()}function qt(e,t){let{context:n,prop:r,state:i,send:a,scope:o,computed:s}=e,c=ne(Jt,r(`translations`)),l=r(`collection`),u=!!r(`disabled`),d=s(`isInteractive`),f=!!r(`invalid`),ee=!!r(`required`),p=!!r(`readOnly`),m=i.hasTag(`open`),h=i.hasTag(`focused`),g=r(`composite`),v=n.get(`highlightedValue`),y=n.get(`currentPlacement`),x=y?se(y):void 0,ie=ye({...r(`positioning`),placement:y});function S(e){let t=l.getItemDisabled(e.item),r=l.getItemValue(e.item);return _(r,()=>`[zag-js] No value found for item ${JSON.stringify(e.item)}`),{value:r,disabled:!!(u||t),highlighted:v===r,selected:n.get(`value`).includes(r)}}return{focused:h,open:m,inputValue:n.get(`inputValue`),highlightedValue:v,highlightedItem:n.get(`highlightedItem`),value:n.get(`value`),valueAsString:s(`valueAsString`),hasSelectedItems:s(`hasSelectedItems`),selectedItems:s(`selectedItems`),collection:r(`collection`),multiple:!!r(`multiple`),disabled:!!u,syncSelectedItems(){a({type:`SELECTED_ITEMS.SYNC`})},reposition(e={}){a({type:`POSITIONING.SET`,options:e})},setHighlightValue(e){a({type:`HIGHLIGHTED_VALUE.SET`,value:e})},clearHighlightValue(){a({type:`HIGHLIGHTED_VALUE.CLEAR`})},selectValue(e){a({type:`ITEM.SELECT`,value:e})},setValue(e){a({type:`VALUE.SET`,value:e})},setInputValue(e,t=`script`){a({type:`INPUT_VALUE.SET`,value:e,src:t})},clearValue(e){a(e==null?{type:`VALUE.CLEAR`}:{type:`ITEM.CLEAR`,value:e})},focus(){zt(o)?.focus()},setOpen(e,t=`script`){a({type:e?`OPEN`:`CLOSE`,src:t,replaces:`open`})},getRootProps(){return t.element({...B.root.attrs,dir:r(`dir`),id:Ot(o),"data-invalid":b(f),"data-readonly":b(p)})},getLabelProps(){return t.label({...B.label.attrs,dir:r(`dir`),htmlFor:jt(o),id:kt(o),"data-readonly":b(p),"data-disabled":b(u),"data-invalid":b(f),"data-required":b(ee),"data-focus":b(h),onClick(e){g||(e.preventDefault(),Ht(o)?.focus({preventScroll:!0}))}})},getControlProps(){return t.element({...B.control.attrs,dir:r(`dir`),id:At(o),"data-state":m?`open`:`closed`,"data-focus":b(h),"data-disabled":b(u),"data-invalid":b(f)})},getPositionerProps(){return t.element({...B.positioner.attrs,dir:r(`dir`),id:Nt(o),style:ie.floating})},getInputProps(){return t.input({...B.input.attrs,dir:r(`dir`),"aria-invalid":te(f),"data-invalid":b(f),"data-autofocus":b(r(`autoFocus`)),name:r(`name`),form:r(`form`),disabled:u,required:r(`required`),autoComplete:`off`,autoCorrect:`off`,autoCapitalize:`none`,spellCheck:`false`,readOnly:p,placeholder:r(`placeholder`),id:jt(o),type:`text`,role:`combobox`,defaultValue:n.get(`inputValue`),"aria-autocomplete":s(`autoComplete`)?`both`:`list`,"aria-controls":Mt(o),"aria-expanded":m,"data-state":m?`open`:`closed`,"aria-activedescendant":v?Rt(o,v):void 0,onClick(e){e.defaultPrevented||r(`openOnClick`)&&d&&a({type:`INPUT.CLICK`,src:`input-click`})},onFocus(){u||a({type:`INPUT.FOCUS`})},onBlur(){u||a({type:`INPUT.BLUR`})},onChange(e){a({type:`INPUT.CHANGE`,value:e.currentTarget.value,src:`input-change`})},onKeyDown(e){if(e.defaultPrevented||!d||e.ctrlKey||e.shiftKey||Re(e))return;let t=r(`openOnKeyPress`),n=e.ctrlKey||e.metaKey||e.shiftKey,i={ArrowDown(e){(t||m)&&(a({type:e.altKey?`OPEN`:`INPUT.ARROW_DOWN`,keypress:!0,src:`arrow-key`}),e.preventDefault())},ArrowUp(){(t||m)&&(a({type:e.altKey?`CLOSE`:`INPUT.ARROW_UP`,keypress:!0,src:`arrow-key`}),e.preventDefault())},Home(e){n||(a({type:`INPUT.HOME`,keypress:!0}),m&&e.preventDefault())},End(e){n||(a({type:`INPUT.END`,keypress:!0}),m&&e.preventDefault())},Enter(e){a({type:`INPUT.ENTER`,keypress:!0,src:`item-select`});let t=v!=null,n=r(`alwaysSubmitOnEnter`),i=s(`isCustomValue`)&&!r(`allowCustomValue`);if(m&&!n&&(t||i)&&e.preventDefault(),v==null)return;let c=H(o,v);re(c)&&r(`navigate`)?.({value:v,node:c,href:c.href})},Escape(){a({type:`INPUT.ESCAPE`,keypress:!0,src:`escape-key`}),e.preventDefault()}}[Le(e,{dir:r(`dir`)})];i?.(e)}})},getTriggerProps(e={}){return t.button({...B.trigger.attrs,dir:r(`dir`),id:Pt(o),"aria-haspopup":g?`listbox`:`dialog`,type:`button`,tabIndex:e.focusable?void 0:-1,"aria-label":c.triggerLabel,"aria-expanded":m,"data-state":m?`open`:`closed`,"aria-controls":m?Mt(o):void 0,disabled:u,"data-invalid":b(f),"data-focusable":b(e.focusable),"data-readonly":b(p),"data-disabled":b(u),onFocus(){e.focusable&&a({type:`INPUT.FOCUS`,src:`trigger`})},onClick(e){e.defaultPrevented||d&&A(e)&&a({type:`TRIGGER.CLICK`,src:`trigger-click`})},onPointerDown(e){d&&e.pointerType!==`touch`&&A(e)&&(e.preventDefault(),queueMicrotask(()=>{Wt(o)}))},onKeyDown(e){if(e.defaultPrevented||g)return;let t={ArrowDown(){a({type:`INPUT.ARROW_DOWN`,src:`arrow-key`})},ArrowUp(){a({type:`INPUT.ARROW_UP`,src:`arrow-key`})}}[Le(e,{dir:r(`dir`)})];t&&(t(e),e.preventDefault())}})},getContentProps(){return t.element({...B.content.attrs,dir:r(`dir`),id:Mt(o),role:g?`listbox`:`dialog`,tabIndex:-1,hidden:!m,"data-state":m?`open`:`closed`,"data-placement":y,"data-side":x,"aria-labelledby":kt(o),"aria-multiselectable":r(`multiple`)&&g?!0:void 0,"data-empty":b(l.size===0),onPointerDown(e){A(e)&&e.preventDefault()}})},getListProps(){return t.element({...B.list.attrs,role:g?void 0:`listbox`,"data-empty":b(l.size===0),"aria-labelledby":kt(o),"aria-multiselectable":r(`multiple`)&&!g?!0:void 0})},getClearTriggerProps(){return t.button({...B.clearTrigger.attrs,dir:r(`dir`),id:Ft(o),type:`button`,tabIndex:-1,disabled:u,"data-invalid":b(f),"aria-label":c.clearTriggerLabel,"aria-controls":jt(o),hidden:!n.get(`value`).length,onPointerDown(e){A(e)&&e.preventDefault()},onClick(e){e.defaultPrevented||d&&a({type:`VALUE.CLEAR`,src:`clear-trigger`})}})},getItemState:S,getItemProps(e){let n=S(e),i=n.value;return t.element({...B.item.attrs,dir:r(`dir`),id:Rt(o,i),role:`option`,tabIndex:-1,"data-highlighted":b(n.highlighted),"data-state":n.selected?`checked`:`unchecked`,"aria-selected":te(n.selected),"aria-disabled":te(n.disabled),"data-disabled":b(n.disabled),"data-value":n.value,onPointerMove(){n.disabled||$e()===`pointer`&&(n.highlighted||a({type:`ITEM.POINTER_MOVE`,value:i}))},onPointerLeave(){e.persistFocus||n.disabled||$e()===`pointer`&&a({type:`ITEM.POINTER_LEAVE`,value:i})},onClick(e){Ce(e)||Oe(e)||Ee(e)||n.disabled||a({type:`ITEM.CLICK`,src:`item-select`,value:i})}})},getItemTextProps(e){let n=S(e);return t.element({...B.itemText.attrs,dir:r(`dir`),"data-state":n.selected?`checked`:`unchecked`,"data-disabled":b(n.disabled),"data-highlighted":b(n.highlighted)})},getItemIndicatorProps(e){let n=S(e);return t.element({"aria-hidden":!0,...B.itemIndicator.attrs,dir:r(`dir`),"data-state":n.selected?`checked`:`unchecked`,hidden:!n.selected})},getItemGroupProps(e){let{id:n}=e;return t.element({...B.itemGroup.attrs,dir:r(`dir`),id:It(o,n),"aria-labelledby":Lt(o,n),"data-empty":b(l.size===0),role:`group`})},getItemGroupLabelProps(e){let{htmlFor:n}=e;return t.element({...B.itemGroupLabel.attrs,dir:r(`dir`),id:Lt(o,n),role:`presentation`})}}}var Jt;function Yt(){return(Yt=t((()=>{h(),Se(),ae(),Ze(),xe(),v(),Tt(),Kt(),Jt={triggerLabel:`Toggle suggestions`,clearTriggerLabel:`Clear value`}})))()}function Xt(e){return(e.previousEvent||e).src}var Zt,Qt,$t,U,W,en;function tn(){return(tn=t((()=>{tt(),ie(),He(),Ge(),we(),T(),We(),Je(),Be(),Ze(),lt(),be(),f(),c(),Xe(),ee(),Dt(),Kt(),{guards:Zt,createMachine:Qt,choose:$t}=m(),{and:U,not:W}=Zt,en=Qt({props({props:e}){return{loopFocus:!0,openOnClick:!1,defaultValue:[],defaultInputValue:``,closeOnSelect:!e.multiple,allowCustomValue:!1,alwaysSubmitOnEnter:!1,inputBehavior:`none`,selectionBehavior:e.multiple?`clear`:`replace`,openOnKeyPress:!0,openOnChange:!0,composite:!0,navigate({node:e}){Ke(e)},collection:Et.empty(),...e,positioning:{placement:`bottom`,sameWidth:!0,...e.positioning}}},initialState({prop:e}){return e(`open`)||e(`defaultOpen`)?`open.suggesting`:`closed.idle`},context({prop:e,bindable:t,getContext:n,getEvent:r}){let i=e(`value`)??e(`defaultValue`)??[],a=e(`collection`).findMany(i);return{currentPlacement:t(()=>({defaultValue:void 0})),value:t(()=>({defaultValue:e(`defaultValue`),value:e(`value`),isEqual:Ye,hash(e){return e.join(`,`)},onChange(t){let r=n(),i=e(`collection`),a=r.get(`selectedItemMap`),o=rt({values:t,collection:i,selectedItemMap:a}),s=e(`value`)??t,c=s===t?o:rt({values:s,collection:i,selectedItemMap:o.nextSelectedItemMap});r.set(`selectedItemMap`,c.nextSelectedItemMap),e(`onValueChange`)?.({value:t,items:o.selectedItems})}})),highlightedValue:t(()=>({defaultValue:e(`defaultHighlightedValue`)||null,value:e(`highlightedValue`),onChange(t){let n=e(`collection`).find(t);e(`onHighlightChange`)?.({highlightedValue:t,highlightedItem:n})}})),inputValue:t(()=>{let t=e(`inputValue`)||e(`defaultInputValue`),n=e(`value`)||e(`defaultValue`);if(!t.trim()&&!e(`multiple`)){let r=e(`collection`).stringifyMany(n);t=C(e(`selectionBehavior`),{preserve:t||r,replace:r,clear:``})}return{defaultValue:t,value:e(`inputValue`),onChange(t){let n=r(),i=(n.previousEvent||n).src;e(`onInputValueChange`)?.({inputValue:t,reason:i})}}}),highlightedItem:t(()=>{let t=e(`highlightedValue`);return{defaultValue:e(`collection`).find(t)}}),selectedItemMap:t(()=>({defaultValue:ot({selectedItems:a,collection:e(`collection`)})}))}},computed:{isInputValueEmpty:({context:e})=>e.get(`inputValue`).length===0,isInteractive:({prop:e})=>!(e(`readOnly`)||e(`disabled`)),autoComplete:({prop:e})=>e(`inputBehavior`)===`autocomplete`,autoHighlight:({prop:e})=>e(`inputBehavior`)===`autohighlight`,hasSelectedItems:({context:e})=>e.get(`value`).length>0,selectedItems:({context:e,prop:t})=>at({values:e.get(`value`),collection:t(`collection`),selectedItemMap:e.get(`selectedItemMap`)}),valueAsString:({computed:e,prop:t})=>t(`collection`).stringifyItems(e(`selectedItems`)),isCustomValue:({context:e,computed:t})=>e.get(`inputValue`)!==t(`valueAsString`)},watch({context:e,prop:t,track:n,action:r,send:i}){n([()=>e.hash(`value`)],()=>{r([`syncSelectedItems`])}),n([()=>e.get(`inputValue`)],()=>{r([`syncInputValue`])}),n([()=>e.get(`highlightedValue`)],()=>{r([`syncHighlightedItem`,`autofillInputValue`,`announceHighlightedItem`])}),n([()=>t(`open`)],()=>{r([`toggleVisibility`])}),n([()=>t(`collection`).toString()],()=>{i({type:`CHILDREN_CHANGE`})})},on:{"SELECTED_ITEMS.SYNC":{actions:[`syncSelectedItems`]},"HIGHLIGHTED_VALUE.SET":{actions:[`setHighlightedValue`]},"HIGHLIGHTED_VALUE.CLEAR":{actions:[`clearHighlightedValue`]},"ITEM.SELECT":{actions:[`selectItem`]},"ITEM.CLEAR":{actions:[`clearItem`]},"VALUE.SET":{actions:[`setValue`]},"INPUT_VALUE.SET":{actions:[`setInputValue`]},"POSITIONING.SET":{actions:[`reposition`]}},entry:$t([{guard:`autoFocus`,actions:[`setInitialFocus`]}]),states:{closed:{tags:[`closed`],initial:`idle`,states:{idle:{tags:[`idle`],entry:[`scrollContentToTop`,`clearHighlightedValue`],on:{"CONTROLLED.OPEN":{target:`open.interacting`},"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.CLICK":[{guard:`isOpenControlled`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.FOCUS":{target:`focused`},OPEN:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open.interacting`,actions:[`invokeOnOpen`]}],"VALUE.CLEAR":{target:`focused`,actions:[`clearInputValue`,`clearSelectedItems`,`setInitialFocus`]}}},focused:{tags:[`focused`],entry:[`scrollContentToTop`,`clearHighlightedValue`],on:{"CONTROLLED.OPEN":[{guard:`isChangeEvent`,target:`open.suggesting`},{target:`open.interacting`}],"INPUT.CHANGE":[{guard:U(`isOpenControlled`,`openOnChange`),actions:[`setInputValue`,`invokeOnOpen`,`highlightFirstItemIfNeeded`]},{guard:`openOnChange`,target:`open.suggesting`,actions:[`setInputValue`,`invokeOnOpen`,`highlightFirstItemIfNeeded`]},{actions:[`setInputValue`]}],"LAYER.INTERACT_OUTSIDE":{target:`idle`},"INPUT.ESCAPE":{guard:U(`isCustomValue`,W(`allowCustomValue`)),actions:[`revertInputValue`]},"INPUT.BLUR":{target:`idle`},"INPUT.CLICK":[{guard:`isOpenControlled`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]}],"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.ARROW_DOWN":[{guard:U(`isOpenControlled`,`autoComplete`),actions:[`invokeOnOpen`]},{guard:`autoComplete`,target:`open.interacting`,actions:[`invokeOnOpen`]},{guard:`isOpenControlled`,actions:[`highlightFirstOrSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstOrSelectedItem`,`invokeOnOpen`]}],"INPUT.ARROW_UP":[{guard:U(`isOpenControlled`,`autoComplete`),actions:[`invokeOnOpen`]},{guard:`autoComplete`,target:`open.interacting`,actions:[`invokeOnOpen`]},{guard:`isOpenControlled`,actions:[`highlightLastOrSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightLastOrSelectedItem`,`invokeOnOpen`]}],OPEN:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open.interacting`,actions:[`invokeOnOpen`]}],"VALUE.CLEAR":{actions:[`clearInputValue`,`clearSelectedItems`]}}}}},open:{tags:[`open`,`focused`],entry:[`setInitialFocus`],effects:[`trackFocusVisible`,`scrollToHighlightedItem`,`trackDismissableLayer`,`trackPlacement`,`trackLiveRegion`],on:{"CONTROLLED.CLOSE":[{guard:`restoreFocus`,target:`closed.focused`,actions:[`setFinalFocus`]},{target:`closed.idle`}],"INPUT.ENTER":[{guard:U(`isOpenControlled`,`isCustomValue`,W(`hasHighlightedItem`),W(`allowCustomValue`)),actions:[`revertInputValue`,`invokeOnClose`]},{guard:U(`isCustomValue`,W(`hasHighlightedItem`),W(`allowCustomValue`)),target:`closed.focused`,actions:[`revertInputValue`,`invokeOnClose`]},{guard:U(`isOpenControlled`,`closeOnSelect`),actions:[`selectHighlightedItem`,`invokeOnClose`]},{guard:`closeOnSelect`,target:`closed.focused`,actions:[`selectHighlightedItem`,`invokeOnClose`,`setFinalFocus`]},{actions:[`selectHighlightedItem`]}],"ITEM.CLICK":[{guard:U(`isOpenControlled`,`closeOnSelect`),actions:[`selectItem`,`invokeOnClose`]},{guard:`closeOnSelect`,target:`closed.focused`,actions:[`selectItem`,`invokeOnClose`,`setFinalFocus`]},{actions:[`selectItem`]}],"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`]}],"LAYER.INTERACT_OUTSIDE":[{guard:U(`isOpenControlled`,`isCustomValue`,W(`allowCustomValue`)),actions:[`revertInputValue`,`invokeOnClose`]},{guard:U(`isCustomValue`,W(`allowCustomValue`)),target:`closed.idle`,actions:[`revertInputValue`,`invokeOnClose`]},{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.idle`,actions:[`invokeOnClose`]}],CLOSE:[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`,`setFinalFocus`]}],"VALUE.CLEAR":[{guard:`isOpenControlled`,actions:[`clearInputValue`,`clearSelectedItems`,`invokeOnClose`]},{target:`closed.focused`,actions:[`clearInputValue`,`clearSelectedItems`,`invokeOnClose`,`setFinalFocus`]}]},initial:`interacting`,states:{interacting:{on:{CHILDREN_CHANGE:[{guard:`isHighlightedItemRemoved`,actions:[`clearHighlightedValue`]},{actions:[`scrollToHighlightedItem`]}],"INPUT.HOME":{actions:[`highlightFirstItem`]},"INPUT.END":{actions:[`highlightLastItem`]},"INPUT.ARROW_DOWN":[{guard:U(`autoComplete`,`isLastItemHighlighted`),actions:[`clearHighlightedValue`,`scrollContentToTop`]},{actions:[`highlightNextItem`]}],"INPUT.ARROW_UP":[{guard:U(`autoComplete`,`isFirstItemHighlighted`),actions:[`clearHighlightedValue`]},{actions:[`highlightPrevItem`]}],"INPUT.CHANGE":[{guard:`autoComplete`,target:`suggesting`,actions:[`setInputValue`]},{target:`suggesting`,actions:[`clearHighlightedValue`,`setInputValue`]}],"ITEM.POINTER_MOVE":{actions:[`setHighlightedValue`]},"ITEM.POINTER_LEAVE":{actions:[`clearHighlightedValue`]},"LAYER.ESCAPE":[{guard:U(`isOpenControlled`,`autoComplete`),actions:[`syncInputValue`,`invokeOnClose`]},{guard:`autoComplete`,target:`closed.focused`,actions:[`syncInputValue`,`invokeOnClose`]},{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`,`setFinalFocus`]}]}},suggesting:{on:{CHILDREN_CHANGE:[{guard:U(`isHighlightedItemRemoved`,`hasCollectionItems`,`autoHighlight`),actions:[`clearHighlightedValue`,`highlightFirstItem`]},{guard:`isHighlightedItemRemoved`,actions:[`clearHighlightedValue`]},{guard:`autoHighlight`,actions:[`highlightFirstItem`]}],"INPUT.ARROW_DOWN":{target:`interacting`,actions:[`highlightNextItem`]},"INPUT.ARROW_UP":{target:`interacting`,actions:[`highlightPrevItem`]},"INPUT.HOME":{target:`interacting`,actions:[`highlightFirstItem`]},"INPUT.END":{target:`interacting`,actions:[`highlightLastItem`]},"INPUT.CHANGE":{actions:[`setInputValue`]},"LAYER.ESCAPE":[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`]}],"ITEM.POINTER_MOVE":{target:`interacting`,actions:[`setHighlightedValue`]},"ITEM.POINTER_LEAVE":{actions:[`clearHighlightedValue`]}}}}}},implementations:{guards:{isInputValueEmpty:({computed:e})=>e(`isInputValueEmpty`),autoComplete:({computed:e,prop:t})=>e(`autoComplete`)&&!t(`multiple`),autoHighlight:({computed:e})=>e(`autoHighlight`),isFirstItemHighlighted:({prop:e,context:t})=>e(`collection`).firstValue===t.get(`highlightedValue`),isLastItemHighlighted:({prop:e,context:t})=>e(`collection`).lastValue===t.get(`highlightedValue`),isCustomValue:({computed:e})=>e(`isCustomValue`),allowCustomValue:({prop:e})=>!!e(`allowCustomValue`),hasHighlightedItem:({context:e})=>e.get(`highlightedValue`)!=null,closeOnSelect:({prop:e})=>!!e(`closeOnSelect`),isOpenControlled:({prop:e})=>e(`open`)!=null,openOnChange:({prop:e,context:t})=>{let n=e(`openOnChange`);return d(n)?n:!!n?.({inputValue:t.get(`inputValue`)})},restoreFocus:({event:e})=>{let t=e.restoreFocus??e.previousEvent?.restoreFocus;return t==null||!!t},isChangeEvent:({event:e})=>e.previousEvent?.type===`INPUT.CHANGE`,autoFocus:({prop:e})=>!!e(`autoFocus`),isHighlightedItemRemoved:({prop:e,context:t})=>!e(`collection`).has(t.get(`highlightedValue`)),hasCollectionItems:({prop:e})=>e(`collection`).size>0},effects:{trackFocusVisible({scope:e}){return et({root:e.getRootNode?.()})},trackDismissableLayer({send:e,prop:t,scope:n}){return t(`disableLayer`)?void 0:Ve(()=>V(n),{type:`listbox`,defer:!0,exclude:()=>[zt(n),Ht(n),Ut(n)],onFocusOutside:t(`onFocusOutside`),onPointerDownOutside:t(`onPointerDownOutside`),onInteractOutside:t(`onInteractOutside`),onEscapeKeyDown(t){t.preventDefault(),t.stopPropagation(),e({type:`LAYER.ESCAPE`,src:`escape-key`})},onDismiss(){e({type:`LAYER.INTERACT_OUTSIDE`,src:`interact-outside`,restoreFocus:!1})}})},trackLiveRegion({refs:e,scope:t}){let n=ut({level:`assertive`,document:t.getDoc()});return e.set(`liveRegion`,n),()=>n.destroy()},trackPlacement({context:e,prop:t,scope:n}){return e.set(`currentPlacement`,t(`positioning`).placement),le(()=>Vt(n)||Ht(n),()=>Bt(n),{...t(`positioning`),defer:!0,onComplete(t){e.set(`currentPlacement`,t.placement)}})},scrollToHighlightedItem({context:e,prop:t,scope:n}){let r=zt(n),i=[],a=r=>{if($e()===`pointer`)return;let a=e.get(`highlightedValue`);if(!a)return;let o=V(n),s=t(`scrollToIndexFn`);if(s){s({index:t(`collection`).indexOf(a),immediate:r,getElement:()=>H(n,a)});return}let c=H(n,a),l=w(()=>{qe(c,{rootEl:o,block:`nearest`})});i.push(l)},o=w(()=>{Qe(`virtual`),a(!0)});i.push(o);let s=Ue(r,{attributes:[`aria-activedescendant`],callback:()=>a(!1)});return i.push(s),()=>{i.forEach(e=>e())}}},actions:{reposition({context:e,prop:t,scope:n,event:r}){le(()=>Vt(n),()=>Bt(n),{...t(`positioning`),...r.options,defer:!0,listeners:!1,onComplete(t){e.set(`currentPlacement`,t.placement)}})},setHighlightedValue({context:e,event:t}){t.value!=null&&e.set(`highlightedValue`,t.value)},clearHighlightedValue({context:e}){e.set(`highlightedValue`,null)},selectHighlightedItem(e){let{context:t,prop:n}=e,r=n(`collection`),i=t.get(`highlightedValue`);if(!i||!r.has(i))return;let a=n(`multiple`)?l(t.get(`value`),i):[i];n(`onSelect`)?.({value:a,itemValue:i}),t.set(`value`,a);let o=C(n(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r.stringifyMany(a),clear:``});t.set(`inputValue`,o)},scrollToHighlightedItem({context:e,prop:t,scope:n}){E(()=>{let r=e.get(`highlightedValue`);if(r==null)return;let i=H(n,r),a=V(n),o=t(`scrollToIndexFn`);o?o({index:t(`collection`).indexOf(r),immediate:!0,getElement:()=>H(n,r)}):qe(i,{rootEl:a,block:`nearest`})})},selectItem(e){let{context:t,event:n,flush:r,prop:i}=e;n.value!=null&&r(()=>{let e=i(`multiple`)?l(t.get(`value`),n.value):[n.value];i(`onSelect`)?.({value:e,itemValue:n.value}),t.set(`value`,e);let r=C(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(e),clear:``});t.set(`inputValue`,r)})},clearItem(e){let{context:t,event:n,flush:r,prop:i}=e;n.value!=null&&r(()=>{let e=u(t.get(`value`),n.value);t.set(`value`,e);let r=C(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(e),clear:``});t.set(`inputValue`,r)})},setInitialFocus({scope:e}){w(()=>{Wt(e)})},setFinalFocus({scope:e}){w(()=>{Ht(e)?.dataset.focusable==null?Wt(e):Gt(e)})},syncInputValue({context:e,scope:t,event:n}){let r=zt(t);r&&(r.value=e.get(`inputValue`),queueMicrotask(()=>{n.current().type!==`INPUT.CHANGE`&&ze(r)}))},setInputValue({context:e,event:t}){e.set(`inputValue`,t.value)},clearInputValue({context:e}){e.set(`inputValue`,``)},revertInputValue({context:e,prop:t,computed:n}){let r=t(`selectionBehavior`),i=C(r,{replace:n(`hasSelectedItems`)?n(`valueAsString`):``,preserve:e.get(`inputValue`),clear:``});e.set(`inputValue`,i)},setValue(e){let{context:t,flush:n,event:r,prop:i}=e;n(()=>{t.set(`value`,r.value);let e=C(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(r.value),clear:``});t.set(`inputValue`,e)})},clearSelectedItems(e){let{context:t,flush:n,prop:r}=e;n(()=>{t.set(`value`,[]);let e=C(r(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r(`collection`).stringifyMany([]),clear:``});t.set(`inputValue`,e)})},scrollContentToTop({prop:e,scope:t}){let n=e(`scrollToIndexFn`);if(n){let r=e(`collection`).firstValue;n({index:0,immediate:!0,getElement:()=>H(t,r)})}else{let e=V(t);if(!e)return;e.scrollTop=0}},invokeOnOpen({prop:e,event:t,context:n}){let r=Xt(t);e(`onOpenChange`)?.({open:!0,reason:r,value:n.get(`value`)})},invokeOnClose({prop:e,event:t,context:n}){let r=Xt(t);e(`onOpenChange`)?.({open:!1,reason:r,value:n.get(`value`)})},highlightFirstItem({context:e,prop:t,scope:n}){(V(n)?queueMicrotask:w)(()=>{let n=t(`collection`).firstValue;n&&e.set(`highlightedValue`,n)})},highlightFirstItemIfNeeded({computed:e,action:t}){e(`autoHighlight`)&&t([`highlightFirstItem`])},highlightLastItem({context:e,prop:t,scope:n}){(V(n)?queueMicrotask:w)(()=>{let n=t(`collection`).lastValue;n&&e.set(`highlightedValue`,n)})},highlightNextItem({context:e,prop:t}){let n=null,r=e.get(`highlightedValue`),i=t(`collection`);r?(n=i.getNextValue(r),!n&&t(`loopFocus`)&&(n=i.firstValue)):n=i.firstValue,n&&e.set(`highlightedValue`,n)},highlightPrevItem({context:e,prop:t}){let n=null,r=e.get(`highlightedValue`),i=t(`collection`);r?(n=i.getPreviousValue(r),!n&&t(`loopFocus`)&&(n=i.lastValue)):n=i.lastValue,n&&e.set(`highlightedValue`,n)},highlightFirstSelectedItem({context:e,prop:t}){w(()=>{let[n]=t(`collection`).sort(e.get(`value`));n&&e.set(`highlightedValue`,n)})},highlightFirstOrSelectedItem({context:e,prop:t,computed:n}){w(()=>{let r=null;r=n(`hasSelectedItems`)?t(`collection`).sort(e.get(`value`))[0]:t(`collection`).firstValue,r&&e.set(`highlightedValue`,r)})},highlightLastOrSelectedItem({context:e,prop:t,computed:n}){w(()=>{let r=t(`collection`),i=null;i=n(`hasSelectedItems`)?r.sort(e.get(`value`))[0]:r.lastValue,i&&e.set(`highlightedValue`,i)})},autofillInputValue({context:e,computed:t,prop:n,event:r,scope:i}){let a=zt(i),o=n(`collection`);if(!t(`autoComplete`)||!a||!r.keypress)return;let s=o.stringify(e.get(`highlightedValue`));w(()=>{a.value=s||e.get(`inputValue`)})},syncSelectedItems(e){queueMicrotask(()=>{let{context:t,prop:n}=e,r=n(`collection`),i=t.get(`value`),a=t.get(`selectedItemMap`),o=rt({values:i,collection:r,selectedItemMap:a});t.set(`selectedItemMap`,o.nextSelectedItemMap);let s=C(n(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r.stringifyMany(i),clear:``});t.set(`inputValue`,s)})},syncHighlightedItem({context:e,prop:t}){let n=t(`collection`).find(e.get(`highlightedValue`));e.set(`highlightedItem`,n)},announceHighlightedItem({context:e,prop:t,refs:n}){if(!Te())return;let r=e.get(`highlightedValue`),i=r?t(`collection`).stringifyItem(t(`collection`).find(r)):null;if(!i)return;let a=r?e.get(`value`).includes(r):!1;n.get(`liveRegion`)?.announce(a?`${i}, selected`:i)},toggleVisibility({event:e,send:t,prop:n}){t({type:n(`open`)?`CONTROLLED.OPEN`:`CONTROLLED.CLOSE`,previousEvent:e})}}}})})))()}var nn;function rn(){return(rn=t((()=>{Tt(),nn=wt.extendWith(`empty`)})))()}function an(e){let{locale:t,...n}=e||{},r=on(t||`en-US`,{usage:`search`,...n});function i(e){return e=e.normalize(`NFC`),r.resolvedOptions().ignorePunctuation&&(e=e.replace(/\p{P}/gu,``)),e}function a(e,t){return t.length===0||(e=i(e),t=i(t),r.compare(e.slice(0,t.length),t)===0)}function o(e,t){return t.length===0||(e=i(e),t=i(t),r.compare(e.slice(-t.length),t)===0)}function s(e,t){if(t.length===0)return!0;e=i(e),t=i(t);let n=0,a=t.length;for(;n+a<=e.length;n++){let i=e.slice(n,n+a);if(r.compare(t,i)===0)return!0}return!1}return{startsWith:a,endsWith:o,contains:s}}var on;function sn(){return(sn=t((()=>{on=dt(Intl.Collator)})))()}function cn(e){let t=I(),n=e.locale??t.locale;return(0,ln.useMemo)(()=>an({...e,locale:n}),[n,e])}var ln;function un(){return(un=t((()=>{Pe(),ln=n(),sn()})))()}var dn,G;function K(){return(K=t((()=>{Ae(),[dn,G]=Ne({name:`ComboboxContext`,hookName:`useComboboxContext`,providerName:`<ComboboxProvider />`})})))()}var fn,pn,mn;function hn(){return(hn=t((()=>{j(),K(),fn=n(),F(),pn=r(),mn=(0,fn.forwardRef)((e,t)=>{let n=G(),r=P(n.getClearTriggerProps(),e);return(0,pn.jsx)(L.button,{...r,ref:t})}),mn.displayName=`ComboboxClearTrigger`})))()}var gn,_n,vn;function yn(){return(yn=t((()=>{ke(),j(),ve(),_e(),K(),gn=n(),F(),_n=r(),vn=(0,gn.forwardRef)((e,t)=>{let n=G(),r=ue(),i=P(n.getContentProps(),r.getPresenceProps(),e),a=Ie(r.ref,t);return(0,_n.jsx)(pe,{presence:r,children:(0,_n.jsx)(L.div,{...i,ref:a})})}),vn.displayName=`ComboboxContent`})))()}var bn,xn,Sn,Cn;function wn(){return(wn=t((()=>{rn(),j(),K(),bn=n(),xn=r(),Sn=nn.build(),Cn=(0,bn.forwardRef)((e,t)=>G().collection.size===0?(0,xn.jsx)(L.div,{...Sn.empty.attrs,...e,role:`presentation`,ref:t}):null),Cn.displayName=`ComboboxEmpty`})))()}var Tn;function En(){return(En=t((()=>{K(),Tn=e=>e.children(G())})))()}var Dn,On,kn;function An(){return(An=t((()=>{j(),K(),Dn=n(),F(),On=r(),kn=(0,Dn.forwardRef)((e,t)=>{let n=G(),r=P(n.getControlProps(),e);return(0,On.jsx)(L.div,{...r,ref:t})}),kn.displayName=`ComboboxControl`})))()}var jn,Mn,Nn;function Pn(){return(Pn=t((()=>{j(),pt(),K(),jn=n(),F(),Mn=r(),Nn=(0,jn.forwardRef)((e,t)=>{let n=G(),r=P(n.getInputProps(),e),i=ft();return(0,Mn.jsx)(L.input,{"aria-describedby":i?.ariaDescribedby,...r,ref:t})}),Nn.displayName=`ComboboxInput`})))()}var Fn,In;function Ln(){return(Ln=t((()=>{Ae(),[Fn,In]=Ne({name:`ComboboxItemContext`,hookName:`useComboboxItemContext`,providerName:`<ComboboxItemProvider />`})})))()}var Rn,zn;function Bn(){return(Bn=t((()=>{Ae(),[Rn,zn]=Ne({name:`ComboboxItemPropsContext`,hookName:`useComboboxItemPropsContext`,providerName:`<ComboboxItemPropsProvider />`})})))()}var Vn,Hn,Un,Wn;function Gn(){return(Gn=t((()=>{N(),j(),K(),Ln(),Bn(),Vn=n(),F(),Hn=r(),Un=M(),Wn=(0,Vn.forwardRef)((e,t)=>{let[n,r]=Un(e,[`item`,`persistFocus`]),i=G(),a=P(i.getItemProps(n),r),o=i.getItemState(n);return(0,Hn.jsx)(Rn,{value:n,children:(0,Hn.jsx)(Fn,{value:o,children:(0,Hn.jsx)(L.div,{...a,ref:t})})})}),Wn.displayName=`ComboboxItem`})))()}var Kn;function qn(){return(qn=t((()=>{Ln(),Kn=e=>e.children(In())})))()}var Jn,Yn;function Xn(){return(Xn=t((()=>{Ae(),[Jn,Yn]=Ne({name:`ComboboxItemGroupPropsContext`,hookName:`useComboboxItemGroupPropsContext`,providerName:`<ComboboxItemGroupPropsProvider />`})})))()}var Zn,Qn,$n,er;function tr(){return(tr=t((()=>{N(),j(),K(),Xn(),Zn=n(),F(),Qn=r(),$n=M(),er=(0,Zn.forwardRef)((e,t)=>{let n=(0,Zn.useId)(),[r,i]=$n(e,[`id`]),a={id:n,...r},o=G(),s=P(o.getItemGroupProps(a),i);return(0,Qn.jsx)(Jn,{value:a,children:(0,Qn.jsx)(L.div,{...s,ref:t})})}),er.displayName=`ComboboxItemGroup`})))()}var nr,rr,ir;function ar(){return(ar=t((()=>{j(),K(),Xn(),nr=n(),F(),rr=r(),ir=(0,nr.forwardRef)((e,t)=>{let n=G(),r=Yn(),i=P(n.getItemGroupLabelProps({htmlFor:r.id}),e);return(0,rr.jsx)(L.div,{...i,ref:t})}),ir.displayName=`ComboboxItemGroupLabel`})))()}var or,sr,cr;function lr(){return(lr=t((()=>{j(),K(),Bn(),or=n(),F(),sr=r(),cr=(0,or.forwardRef)((e,t)=>{let n=G(),r=zn(),i=P(n.getItemIndicatorProps(r),e);return(0,sr.jsx)(L.div,{...i,ref:t})}),cr.displayName=`ComboboxItemIndicator`})))()}var ur,dr,fr;function pr(){return(pr=t((()=>{j(),K(),Bn(),ur=n(),F(),dr=r(),fr=(0,ur.forwardRef)((e,t)=>{let n=G(),r=zn(),i=P(n.getItemTextProps(r),e);return(0,dr.jsx)(L.span,{...i,ref:t})}),fr.displayName=`ComboboxItemText`})))()}var mr,hr,gr;function _r(){return(_r=t((()=>{j(),K(),mr=n(),F(),hr=r(),gr=(0,mr.forwardRef)((e,t)=>{let n=G(),r=P(n.getLabelProps(),e);return(0,hr.jsx)(L.label,{...r,ref:t})}),gr.displayName=`ComboboxLabel`})))()}var vr,yr,br;function xr(){return(xr=t((()=>{j(),K(),vr=n(),F(),yr=r(),br=(0,vr.forwardRef)((e,t)=>{let n=G(),r=P(n.getListProps(),e);return(0,yr.jsx)(L.div,{...r,ref:t})}),br.displayName=`ComboboxList`})))()}var Sr,Cr,wr;function Tr(){return(Tr=t((()=>{j(),_e(),K(),Sr=n(),F(),Cr=r(),wr=(0,Sr.forwardRef)((e,t)=>{let n=G(),r=ue(),i=P(n.getPositionerProps(),e);return r.unmounted?null:(0,Cr.jsx)(L.div,{...i,ref:t})}),wr.displayName=`ComboboxPositioner`})))()}var Er,Dr;function Or(){return(Or=t((()=>{De(),Pe(),pt(),tn(),Yt(),Er=n(),S(),x(),Dr=e=>{let t=(0,Er.useId)(),{dir:n}=I(),{getRootNode:r}=Me(),i=ft(),a={id:t,ids:{label:i?.ids.label,input:i?.ids.control},disabled:i?.disabled,readOnly:i?.readOnly,required:i?.required,invalid:i?.invalid,dir:n,getRootNode:r,...e};return qt(g(en,a),y)}})))()}var kr,Ar,jr,Mr;function Nr(){return(Nr=t((()=>{N(),j(),ge(),k(),_e(),K(),Or(),kr=n(),F(),Ar=r(),jr=(e,t)=>{let[n,r]=me(e),[i,a]=M()(r,`allowCustomValue.alwaysSubmitOnEnter.autoFocus.closeOnSelect.collection.composite.defaultHighlightedValue.defaultInputValue.defaultOpen.defaultValue.disabled.disableLayer.form.highlightedValue.id.ids.inputBehavior.inputValue.invalid.loopFocus.multiple.name.navigate.onFocusOutside.onHighlightChange.onInputValueChange.onInteractOutside.onOpenChange.onPointerDownOutside.onSelect.onValueChange.open.openOnChange.openOnClick.openOnKeyPress.placeholder.positioning.readOnly.required.scrollToIndexFn.selectionBehavior.translations.value`.split(`.`)),o=Dr(i),s=de(P({present:o.open},n)),c=P(o.getRootProps(),a);return(0,Ar.jsx)(dn,{value:o,children:(0,Ar.jsx)(he,{value:s,children:(0,Ar.jsx)(L.div,{...c,ref:t})})})},Mr=(0,kr.forwardRef)(jr)})))()}var Pr,Fr,Ir,Lr;function Rr(){return(Rr=t((()=>{N(),j(),ge(),k(),_e(),K(),Pr=n(),F(),Fr=r(),Ir=(e,t)=>{let[n,r]=me(e),[{value:i},a]=M()(r,[`value`]),o=de(P({present:i.open},n)),s=P(i.getRootProps(),a);return(0,Fr.jsx)(dn,{value:i,children:(0,Fr.jsx)(he,{value:o,children:(0,Fr.jsx)(L.div,{...s,ref:t})})})},Lr=(0,Pr.forwardRef)(Ir)})))()}var zr,Br,Vr,Hr;function Ur(){return(Ur=t((()=>{N(),j(),K(),zr=n(),F(),Br=r(),Vr=M(),Hr=(0,zr.forwardRef)((e,t)=>{let[n,r]=Vr(e,[`focusable`]),i=G(),a=P(i.getTriggerProps(n),r);return(0,Br.jsx)(L.button,{...a,ref:t})}),Hr.displayName=`ComboboxTrigger`})))()}var q;function Wr(){return(Wr=t((()=>{je(),hn(),yn(),wn(),En(),An(),Pn(),Gn(),qn(),tr(),ar(),lr(),pr(),_r(),xr(),Tr(),Nr(),Rr(),Ur(),q=Fe({ClearTrigger:()=>mn,Content:()=>vn,Context:()=>Tn,Control:()=>kn,Empty:()=>Cn,Input:()=>Nn,Item:()=>Wn,ItemContext:()=>Kn,ItemGroup:()=>er,ItemGroupLabel:()=>ir,ItemIndicator:()=>cr,ItemText:()=>fr,Label:()=>gr,List:()=>br,Positioner:()=>wr,Root:()=>Mr,RootProvider:()=>Lr,Trigger:()=>Hr})})))()}var Gr,Kr,qr,Jr;function Yr(){return(Yr=t((()=>{N(),ht(),Gr=n(),Kr=r(),qr=M(),Jr=e=>{if(typeof e.text!=`string`)throw Error(`[ark-ui/highlight] text must be a string`);let[t,n]=qr(e,[`query`,`text`,`ignoreCase`,`matchAll`,`exactMatch`]),r=mt(t);return(0,Kr.jsx)(Gr.Fragment,{children:r.map(({text:e,match:t},r)=>t?(0,Kr.jsx)(`mark`,{...n,children:e},r):(0,Kr.jsx)(Gr.Fragment,{children:e},r))})}})))()}var Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,J;function wi(){return(wi=t((()=>{Xr=`_root_227zw_45`,Zr=`_control_227zw_52`,Qr=`_input_227zw_63`,$r=`_iconButton_227zw_77`,ei=`_small_227zw_88`,ti=`_large_227zw_93`,ni=`_multiple_227zw_104`,ri=`_iconContainer_227zw_119`,ii=`_tags_227zw_123`,ai=`_startAdornment_227zw_175`,oi=`_clearButton_227zw_190`,si=`_trigger_227zw_218`,ci=`_positioner_227zw_251`,li=`_content_227zw_256`,ui=`_expand_227zw_1`,di=`_collapse_227zw_1`,fi=`_itemGroup_227zw_317`,pi=`_item_227zw_317`,mi=`_indicator_227zw_339`,hi=`_itemIcon_227zw_340`,gi=`_itemText_227zw_370`,_i=`_multipleContent_227zw_384`,vi=`_itemIndicator_227zw_395`,yi=`_createItem_227zw_404`,bi=`_noMatches_227zw_410`,xi=`_loading_227zw_411`,Si=`_disabled_227zw_418`,Ci=`_invalid_227zw_437`,J={root:Xr,control:Zr,input:Qr,iconButton:$r,small:ei,large:ti,multiple:ni,iconContainer:ri,tags:ii,startAdornment:ai,clearButton:oi,trigger:si,positioner:ci,content:li,expand:ui,collapse:di,itemGroup:fi,item:pi,indicator:mi,itemIcon:hi,itemText:gi,multipleContent:_i,itemIndicator:vi,createItem:yi,noMatches:bi,loading:xi,disabled:Si,invalid:Ci}})))()}var Ti,Ei,Di;function Oi(){return(Oi=t((()=>{Ti=i(),Wr(),Yr(),wi(),s(),Ei=r(),Di=e=>{let t=(0,Ti.c)(11),{option:n,query:r,highlightMatch:i}=e,a;t[0]===n.icon?a=t[1]:(a=n.icon&&(0,Ei.jsx)(o,{className:J.itemIcon,icon:n.icon,"aria-hidden":`true`}),t[0]=n.icon,t[1]=a);let s;t[2]!==i||t[3]!==n.label||t[4]!==r?(s=i?(0,Ei.jsx)(Jr,{query:r,text:n.label,ignoreCase:!0}):n.label,t[2]=i,t[3]=n.label,t[4]=r,t[5]=s):s=t[5];let c;t[6]===s?c=t[7]:(c=(0,Ei.jsx)(q.ItemText,{className:J.itemText,children:s}),t[6]=s,t[7]=c);let l;return t[8]!==a||t[9]!==c?(l=(0,Ei.jsxs)(Ei.Fragment,{children:[a,c]}),t[8]=a,t[9]=c,t[10]=l):l=t[10],l}})))()}var ki,Ai,Y,ji,Mi,Ni,Pi,Fi;function Ii(){return(Ii=t((()=>{ki=n(),Wr(),it(),Or(),un(),O(),Ai=e(a(),1),wi(),Oi(),s(),Ct(),Y=r(),ji=`__ds-autocomplete-create__`,Mi=`,`,Ni=(e,t)=>e.toLocaleLowerCase()===t.toLocaleLowerCase(),Pi=(e,t)=>e.find(e=>Ni(e.label,t)),Fi=({id:e,options:t=[],value:n,loading:r=!1,size:i=`default`,style:a,className:s,placeholder:c,disabled:l=!1,invalid:u=!1,onValueChange:d,onCreate:f,onInputValueChange:ee,onOpenChange:p,locale:{loading:m=`Loading...`,noMatches:te=`No matching tags`,addTag:ne=`Add tag...`,createTag:h=e=>`Create new tag '${e}'`,removeTag:g=e=>`Remove ${e}`}={},highlightMatch:_=!0,showTrigger:v=!0,startAdornment:y})=>{let b=(0,ki.useId)(),[x,re]=(0,ki.useState)(``),[ie,S]=(0,ki.useState)(null),ae=cn({sensitivity:`base`}),C=x.trim(),oe=C?t.filter(e=>ae.contains(e.label,C)):t,w=f&&C&&!Pi(t,C)?{value:ji,label:C}:null,T=ct({items:w?[...oe,w]:oe,itemToString:e=>e.label,itemToValue:e=>e.value}),E=e=>{re(e),S(null),ee?.(e)},D=e=>{let r=[...n],i=[];for(let n of e){let e=n.trim(),a=e?Pi(t,e):void 0,o=a?.value??(f&&e?e:null);o===null||r.some(e=>Ni(e,o))||(a||i.push(e),r.push(o))}r.length!==n.length&&(i.forEach(e=>f?.(e)),d?.(r))},se=e=>{d?.(n.filter(t=>t!==e))},ce=Dr({id:e??b,collection:T,disabled:l,invalid:u,multiple:!0,value:n,inputValue:x,highlightedValue:ie,openOnClick:!0,loopFocus:!1,allowCustomValue:!0,selectionBehavior:`preserve`,onHighlightChange:e=>S(e.highlightedValue),onInputValueChange:e=>{if(!e.inputValue.includes(Mi)){E(e.inputValue);return}let t=e.inputValue.split(Mi),n=t.pop()??``;D(t),E(n.trimStart())},onValueChange:e=>{e.value.includes(ji)?D([C]):d?.(e.value),E(``)},onOpenChange:e=>{e.open||E(``),p?.(e.open)}}),O=e=>{e.key===`Enter`&&!ie?(e.preventDefault(),D([x]),E(``)):e.key===`Backspace`&&!x&&n.length?se(n[n.length-1]):e.key===`Escape`&&E(``)},le=e=>{let t=e.clipboardData.getData(`text`);t.includes(Mi)&&(e.preventDefault(),D(`${x}${t}`.split(Mi)),E(``))},ue=e=>t.find(t=>t.value===e)?.label??e,k=w?T.items.slice(0,-1):T.items,de=i===`small`?`small`:`medium`;return(0,Y.jsxs)(q.RootProvider,{value:ce,className:(0,Ai.default)(J.root,{[J.disabled]:l,[J.invalid]:u},s),style:a,lazyMount:!0,unmountOnExit:!0,children:[(0,Y.jsxs)(q.Control,{className:(0,Ai.default)(J.control,J.multiple,i===`small`&&J.small,i===`large`&&J.large),children:[y&&(0,Y.jsx)(`span`,{className:J.startAdornment,children:y}),(0,Y.jsxs)(`div`,{className:J.tags,children:[n.map(e=>{let t=ue(e);return(0,Y.jsx)(St,{label:t,size:`small`,disabled:l,locale:{deleteAriaLabel:g(t)},onDelete:()=>se(e)},e)}),(0,Y.jsx)(q.Input,{className:J.input,placeholder:n.length?ne:c??(f?`Search or create a tag`:`Search tags`),onKeyDown:O,onPaste:le})]}),v&&(0,Y.jsx)(`div`,{className:J.iconContainer,children:(0,Y.jsx)(q.Trigger,{className:J.trigger,"aria-label":`Toggle dropdown`,children:(0,Y.jsx)(o,{icon:`keyboard_arrow_down`,size:de})})})]}),(0,Y.jsx)(fe,{children:(0,Y.jsx)(q.Positioner,{className:J.positioner,children:(0,Y.jsxs)(q.Content,{className:(0,Ai.default)(J.content,J.multipleContent),children:[r&&(0,Y.jsx)(`div`,{className:J.loading,children:m}),!r&&T.items.length===0&&(0,Y.jsx)(`div`,{className:J.noMatches,children:te}),!r&&k.length>0&&(0,Y.jsx)(q.ItemGroup,{className:J.itemGroup,children:k.map(e=>(0,Y.jsxs)(q.Item,{item:e,className:J.item,children:[(0,Y.jsx)(Di,{option:e,query:C,highlightMatch:_}),(0,Y.jsx)(q.ItemIndicator,{className:J.itemIndicator,children:(0,Y.jsx)(o,{icon:`check`,size:`small`,"aria-hidden":`true`})})]},e.value))}),!r&&w&&(0,Y.jsx)(q.Item,{item:w,className:(0,Ai.default)(J.item,J.createItem),children:(0,Y.jsx)(q.ItemText,{className:J.itemText,children:h(w.label)})})]})})})]})},Fi.__docgenInfo={description:``,methods:[],displayName:`AutocompleteTags`,props:{options:{defaultValue:{value:`[]`,computed:!1},required:!1},loading:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`'default'`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},invalid:{defaultValue:{value:`false`,computed:!1},required:!1},locale:{defaultValue:{value:`{}`,computed:!1},required:!1},highlightMatch:{defaultValue:{value:`true`,computed:!1},required:!1},showTrigger:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}function Li(e){return e.label}function Ri(e){return e.value}var zi,Bi,Vi,X,Hi,Z;function Ui(){return(Ui=t((()=>{zi=i(),Bi=n(),Wr(),it(),un(),O(),Vi=e(a(),1),wi(),s(),Oi(),Ii(),X=r(),Hi=e=>{let t=(0,zi.c)(58),{id:n,options:r,loading:i,size:a,style:s,className:c,placeholder:l,disabled:u,invalid:d,onValueChange:f,onInputValueChange:ee,onOpenChange:p,locale:m,highlightMatch:te,showTrigger:ne,startAdornment:h}=e,g=r===void 0?[]:r,_=i!==void 0&&i,v=a===void 0?`default`:a,y=l===void 0?`Start typing to search...`:l,b=u!==void 0&&u,x=d!==void 0&&d,re;t[0]===m?re=t[1]:(re=m===void 0?{}:m,t[0]=m,t[1]=re);let{loading:ie,noMatches:S}=re,ae=ie===void 0?`Loading...`:ie,C=S===void 0?`No matches found`:S,oe=te===void 0||te,w=ne===void 0||ne,[T,E]=(0,Bi.useState)(``),D;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(D={sensitivity:`base`},t[2]=D):D=t[2];let se=cn(D),ce=T?g.filter(e=>se.contains(e.label,T)):g,O=ct({items:ce,itemToString:Li,itemToValue:Ri}),le;t[3]===ee?le=t[4]:(le=e=>{E(e.inputValue),ee?.(e.inputValue)},t[3]=ee,t[4]=le);let ue=le,k;t[5]===f?k=t[6]:(k=e=>{let t=e.items[0];f?.(t?.value??``)},t[5]=f,t[6]=k);let de=k,pe;t[7]===p?pe=t[8]:(pe=e=>{p?.(e.open)},t[7]=p,t[8]=pe);let me=pe,he;t[9]!==c||t[10]!==b||t[11]!==x?(he=(0,Vi.default)(J.root,{[J.disabled]:b,[J.invalid]:x},c),t[9]=c,t[10]=b,t[11]=x,t[12]=he):he=t[12];let ge=he,_e=q,ve=v===`small`&&J.small,ye=v===`large`&&J.large,be;t[13]!==ve||t[14]!==ye?(be=(0,Vi.default)(J.control,ve,ye),t[13]=ve,t[14]=ye,t[15]=be):be=t[15];let xe;t[16]===h?xe=t[17]:(xe=h&&(0,X.jsx)(`span`,{className:J.startAdornment,children:h}),t[16]=h,t[17]=xe);let Se;t[18]===y?Se=t[19]:(Se=(0,X.jsx)(q.Input,{className:J.input,placeholder:y}),t[18]=y,t[19]=Se);let A;t[20]!==b||t[21]!==w||t[22]!==v?(A=(0,X.jsx)(q.Context,{children:e=>(0,X.jsxs)(`div`,{className:J.iconContainer,children:[e.inputValue&&!b&&(0,X.jsx)(`button`,{type:`button`,className:J.clearButton,"aria-label":`Clear`,onClick:()=>{e.setValue([]),e.setInputValue(``)},children:(0,X.jsx)(o,{icon:`close`,size:v===`small`?`small`:`medium`})}),w&&(0,X.jsx)(q.Trigger,{className:J.trigger,"aria-label":`Toggle dropdown`,children:(0,X.jsx)(o,{icon:`keyboard_arrow_down`,size:v===`small`?`small`:`medium`})})]})}),t[20]=b,t[21]=w,t[22]=v,t[23]=A):A=t[23];let Ce;t[24]!==be||t[25]!==xe||t[26]!==Se||t[27]!==A?(Ce=(0,X.jsxs)(q.Control,{className:be,children:[xe,Se,A]}),t[24]=be,t[25]=xe,t[26]=Se,t[27]=A,t[28]=Ce):Ce=t[28];let we=fe,Te=q,Ee=J,De=q,j=J,M;t[29]!==_||t[30]!==ae?(M=_&&(0,X.jsx)(`div`,{className:J.loading,children:ae}),t[29]=_,t[30]=ae,t[31]=M):M=t[31];let N=!_&&O.items.length===0&&(0,X.jsx)(`div`,{className:J.noMatches,children:C}),P=!_&&O.items.length>0&&(0,X.jsx)(q.ItemGroup,{className:J.itemGroup,children:O.items.map(e=>(0,X.jsx)(q.Item,{item:e,className:J.item,children:(0,X.jsx)(Di,{option:e,query:T,highlightMatch:oe})},e.value))}),F;t[32]!==De.Content||t[33]!==j.content||t[34]!==M||t[35]!==N||t[36]!==P?(F=(0,X.jsxs)(De.Content,{className:j.content,children:[M,N,P]}),t[32]=De.Content,t[33]=j.content,t[34]=M,t[35]=N,t[36]=P,t[37]=F):F=t[37];let I;t[38]!==Te.Positioner||t[39]!==Ee.positioner||t[40]!==F?(I=(0,X.jsx)(Te.Positioner,{className:Ee.positioner,children:F}),t[38]=Te.Positioner,t[39]=Ee.positioner,t[40]=F,t[41]=I):I=t[41];let Oe;t[42]!==we||t[43]!==I?(Oe=(0,X.jsx)(we,{children:I}),t[42]=we,t[43]=I,t[44]=Oe):Oe=t[44];let ke;return t[45]!==O||t[46]!==b||t[47]!==ue||t[48]!==me||t[49]!==de||t[50]!==n||t[51]!==x||t[52]!==ge||t[53]!==s||t[54]!==_e.Root||t[55]!==Ce||t[56]!==Oe?(ke=(0,X.jsxs)(_e.Root,{id:n,collection:O,className:ge,style:s,disabled:b,invalid:x,onInputValueChange:ue,onValueChange:de,onOpenChange:me,closeOnSelect:!0,lazyMount:!0,unmountOnExit:!0,children:[Ce,Oe]}),t[45]=O,t[46]=b,t[47]=ue,t[48]=me,t[49]=de,t[50]=n,t[51]=x,t[52]=ge,t[53]=s,t[54]=_e.Root,t[55]=Ce,t[56]=Oe,t[57]=ke):ke=t[57],ke},Z=e=>{let t=(0,zi.c)(2),n;return t[0]===e?n=t[1]:(n=e.multiple?(0,X.jsx)(Fi,{...e}):(0,X.jsx)(Hi,{...e}),t[0]=e,t[1]=n),n},Z.displayName=`DsAutocomplete`})))()}var Wi;function Gi(){return(Gi=t((()=>{Wi=[`small`,`default`,`large`]})))()}var Ki,qi;function Ji(){return(Ji=t((()=>{Ki=`_field_1f04r_1`,qi={field:Ki}})))()}var Q,$,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa;function pa(){return(pa=t((()=>{Q=n(),_t(),s(),xt(),yt(),gt(),Ui(),Gi(),Ji(),$=r(),Yi={title:`Components/Autocomplete`,component:Z,parameters:{layout:`centered`},decorators:[e=>(0,$.jsx)(`div`,{className:qi.field,children:(0,$.jsx)(e,{})})],argTypes:{options:{control:`object`},size:{control:`select`,options:Wi},placeholder:{control:`text`},highlightMatch:{control:`boolean`},showTrigger:{control:`boolean`},loading:{control:`boolean`},disabled:{control:`boolean`},invalid:{control:`boolean`},locale:{control:`object`},startAdornment:{control:!1},multiple:{control:!1},value:{control:!1},onValueChange:{action:`valueChange`},onInputValueChange:{action:`inputValueChange`},onOpenChange:{action:`openChange`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},Xi={args:{placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},Zi={render:()=>(0,$.jsx)(Z,{showTrigger:!1,placeholder:`Start typing to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]})},Qi={args:{showTrigger:!1,startAdornment:(0,$.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`,options:[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]}},$i={args:{placeholder:`Select a fruit...`,options:[{value:`apple`,label:`Apple`,icon:`nutrition`},{value:`banana`,label:`Banana`,icon:`nutrition`},{value:`cherry`,label:`Cherry`,icon:`nutrition`}]}},ea={render:()=>(0,$.jsx)(Z,{highlightMatch:!1,placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]})},ta={args:{loading:!0,placeholder:`Loading options...`,options:[]}},na={args:{disabled:!0,placeholder:`Disabled autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},ra={args:{invalid:!0,placeholder:`Invalid autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},ia={args:{locale:{loading:`Fetching...`,noMatches:`No matching options found`},placeholder:`Search or type...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},aa={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Q.useState)([]),[r,i]=(0,Q.useState)(!1),a=async e=>{e?(i(!0),await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}].filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),i(!1)):n([])};return(0,$.jsx)(Z,{...e,options:t,loading:r,onInputValueChange:a,showTrigger:!1,startAdornment:(0,$.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries (async)...`,locale:{noMatches:`No results found`}})}},oa={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Q.useState)([]),[r,i]=(0,Q.useState)(!0);return(0,Q.useEffect)(()=>{(async()=>{await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]),i(!1)})()},[]),(0,$.jsx)(Z,{...e,options:t,loading:r,placeholder:`Select a country...`})}},sa={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,Q.useState)([{value:`production`,label:`Production`},{value:`staging`,label:`Staging`},{value:`security`,label:`Security`},{value:`compliance`,label:`Compliance`},{value:`nightly`,label:`Nightly`}]),[n,r]=(0,Q.useState)([`production`,`security`]);return(0,$.jsx)(Z,{multiple:!0,options:e,value:n,onValueChange:r,onCreate:e=>t(t=>[...t,{value:e,label:e}])})}},ca={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,Q.useState)([]);return(0,$.jsx)(Z,{multiple:!0,options:[{value:`production`,label:`Production`},{value:`staging`,label:`Staging`},{value:`security`,label:`Security`}],value:e,onValueChange:t})}},la={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Q.useState)(!1);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(vt,{onClick:()=>n(!0),children:`Assign owner`}),(0,$.jsxs)(bt,{open:t,onOpenChange:n,columns:4,children:[(0,$.jsxs)(bt.Header,{children:[(0,$.jsx)(bt.Title,{children:`Assign owner`}),(0,$.jsx)(bt.CloseTrigger,{})]}),(0,$.jsx)(bt.Body,{children:(0,$.jsx)(Z,{...e,placeholder:`Search team members...`,options:[{value:`alice`,label:`Alice Cohen`},{value:`bob`,label:`Bob Levi`},{value:`carol`,label:`Carol Smith`}]})})]})]})}},ua={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}];return(0,$.jsxs)(z,{direction:`column`,gap:`var(--standard)`,width:`320px`,children:[(0,$.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Large`}),(0,$.jsx)(Z,{options:e,size:`large`,placeholder:`Large autocomplete`})]}),(0,$.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Default`}),(0,$.jsx)(Z,{options:e,size:`default`,placeholder:`Default autocomplete`})]}),(0,$.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Small`}),(0,$.jsx)(Z,{options:e,size:`small`,placeholder:`Small autocomplete`})]}),Wi.map(t=>(0,$.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsxs)(R,{variant:`body-xs-reg`,color:`secondary`,children:[`Tags, `,t]}),(0,$.jsx)(Z,{multiple:!0,size:t,options:e,value:[`apple`,`banana`]})]},t))]})}},da={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}];return(0,$.jsxs)(z,{direction:`column`,gap:`var(--standard)`,width:`320px`,children:[(0,$.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Disabled`}),(0,$.jsx)(Z,{options:e,disabled:!0,placeholder:`Disabled autocomplete`})]}),(0,$.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Invalid`}),(0,$.jsx)(Z,{options:e,invalid:!0,placeholder:`Invalid autocomplete`})]}),(0,$.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Tags`}),(0,$.jsx)(Z,{multiple:!0,options:e,value:[`apple`,`banana`,`cherry`]})]}),(0,$.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Tags, disabled`}),(0,$.jsx)(Z,{multiple:!0,options:e,value:[`apple`,`banana`],disabled:!0})]}),(0,$.jsxs)(z,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(R,{variant:`body-xs-reg`,color:`secondary`,children:`Tags, invalid`}),(0,$.jsx)(Z,{multiple:!0,options:e,value:[`apple`],invalid:!0})]})]})}},fa=[`Default`,`SearchMode`,`WithStartAdornment`,`WithOptionIcons`,`WithoutHighlight`,`Loading`,`Disabled`,`Invalid`,`Localized`,`AsyncSearch`,`AsyncOptions`,`Tags`,`TagsSelectOnly`,`InsideModal`,`Sizes`,`States`],Xi.parameters={...Xi.parameters,docs:{...Xi.parameters?.docs,source:{originalSource:`{
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
}`,...Xi.parameters?.docs?.source},description:{story:`The default autocomplete opens its dropdown from the trigger arrow or by typing,
and highlights the matching text while the list is filtered. Reach for this when the
user should be able to both browse the full list and search within it.`,...Xi.parameters?.docs?.description}}},Zi.parameters={...Zi.parameters,docs:{...Zi.parameters?.docs,source:{originalSource:`{
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
}`,...Zi.parameters?.docs?.source},description:{story:`Search mode hides the trigger arrow so the list only opens while typing. Use it for
search-style inputs where a persistent dropdown affordance would imply a short, fixed list.`,...Zi.parameters?.docs?.description}}},Qi.parameters={...Qi.parameters,docs:{...Qi.parameters?.docs,source:{originalSource:`{
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
}`,...Qi.parameters?.docs?.source},description:{story:"A `startAdornment` renders content before the input — most often a search icon — to\nreinforce the search intent without adding a separate label.",...Qi.parameters?.docs?.description}}},$i.parameters={...$i.parameters,docs:{...$i.parameters?.docs,source:{originalSource:`{
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
}`,...$i.parameters?.docs?.source},description:{story:"Each option can carry an `icon` that renders alongside its label, useful for giving\noptions a recognizable visual anchor.",...$i.parameters?.docs?.description}}},ea.parameters={...ea.parameters,docs:{...ea.parameters?.docs,source:{originalSource:`{
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
}`,...ea.parameters?.docs?.source},description:{story:"Disable match highlighting when the emphasized `mark` styling would compete with the\noption content, or when matches are handled server-side and no local query is available.",...ea.parameters?.docs?.description}}},ta.parameters={...ta.parameters,docs:{...ta.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    placeholder: 'Loading options...',
    options: []
  }
}`,...ta.parameters?.docs?.source},description:{story:"While `loading` is true a loading message replaces the option list, signalling that\nresults are being fetched. Pair it with server-driven `options` (see AsyncSearch).",...ta.parameters?.docs?.description}}},na.parameters={...na.parameters,docs:{...na.parameters?.docs,source:{originalSource:`{
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
}`,...na.parameters?.docs?.source},description:{story:`The disabled state blocks all interaction and dims the control. Use it when the field
depends on another selection that has not been made yet.`,...na.parameters?.docs?.description}}},ra.parameters={...ra.parameters,docs:{...ra.parameters?.docs,source:{originalSource:`{
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
}`,...ra.parameters?.docs?.source},description:{story:`The invalid state applies an error border for use with external validation — the input
stays focusable so the user can correct their entry.`,...ra.parameters?.docs?.description}}},ia.parameters={...ia.parameters,docs:{...ia.parameters?.docs,source:{originalSource:`{
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
}`,...ia.parameters?.docs?.source},description:{story:"The `locale` prop overrides the loading and empty-state messages so the component can be\ntranslated. Only the strings passed are overridden; omitted keys keep their defaults.",...ia.parameters?.docs?.description}}},aa.parameters={...aa.parameters,docs:{...aa.parameters?.docs,source:{originalSource:`{
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
}`,...aa.parameters?.docs?.source},description:{story:"For server-driven search, keep the fetched results in local state and feed them back via\n`options` while toggling `loading`. This is the recommended pattern for large or remote\ndatasets that should not be filtered on the client.",...aa.parameters?.docs?.description}}},oa.parameters={...oa.parameters,docs:{...oa.parameters?.docs,source:{originalSource:`{
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
}`,...oa.parameters?.docs?.source},description:{story:"When the full option set is fetched once on mount, start in a `loading` state and swap in\nthe results when the request resolves. After that the component filters locally.",...oa.parameters?.docs?.description}}},sa.parameters={...sa.parameters,docs:{...sa.parameters?.docs,source:{originalSource:`{
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
}`,...sa.parameters?.docs?.source},description:{story:'Tags mode (`multiple`) collects several values as removable tags inside the field. Picking\nan option toggles it and keeps the list open. Pass `onCreate` to let users add tags that are\nnot in the list yet: type a name and press Enter or a comma, pick the "Create new tag" row, or\npaste a comma-separated list. Append created names to `options` so they stay selectable.',...sa.parameters?.docs?.description}}},ca.parameters={...ca.parameters,docs:{...ca.parameters?.docs,source:{originalSource:`{
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
}`,...ca.parameters?.docs?.source},description:{story:"Without `onCreate`, tags mode only allows picking existing options. Use it where a value must\nalready exist elsewhere, such as filtering by tags that are defined on other records.",...ca.parameters?.docs?.description}}},la.parameters={...la.parameters,docs:{...la.parameters?.docs,source:{originalSource:`{
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
}`,...la.parameters?.docs?.source},description:{story:"DsAutocomplete can be placed inside a DsModal (or DsDialog). The dropdown opens over the\nmodal content, and its options stay exposed to assistive technology as a `listbox` of\n`option`s, so screen reader users can pick a value without any extra wiring.",...la.parameters?.docs?.description}}},ua.parameters={...ua.parameters,docs:{...ua.parameters?.docs,source:{originalSource:`{
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
}`,...ua.parameters?.docs?.source}}},da.parameters={...da.parameters,docs:{...da.parameters?.docs,source:{originalSource:`{
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
}`,...da.parameters?.docs?.source},description:{story:`Visual comparison of the disabled, invalid and tags states side by side. Reference only —
behavior for each state is covered by the individual stories and browser tests.`,...da.parameters?.docs?.description}}}})))()}pa();export{oa as AsyncOptions,aa as AsyncSearch,Xi as Default,na as Disabled,la as InsideModal,ra as Invalid,ta as Loading,ia as Localized,Zi as SearchMode,ua as Sizes,da as States,sa as Tags,ca as TagsSelectOnly,$i as WithOptionIcons,Qi as WithStartAdornment,ea as WithoutHighlight,fa as __namedExportsOrder,Yi as default};