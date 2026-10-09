import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-DdQuKjU0.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{n as o,t as s}from"./ds-icon-CBCYHvJ3.js";import{E as c,F as l,K as u,O as d,V as f,b as ee,bt as p,c as m,ft as te,h as ne,ht as h,i as g,l as re,m as _,n as v,pt as y,r as b,rt as ie,s as ae,t as x,tt as oe,x as S,yt as se}from"./normalize-props-BfN-KXJK.js";import{a as C,n as ce,r as le}from"./raf-4Vx82Ja0.js";import{B as ue,S as de,W as fe,a as pe,b as me,c as he,d as ge,f as _e,i as ve,l as ye,m as be,o as xe,p as Se,s as w,u as Ce,v as we,x as T,y as E}from"./ds-tooltip-DopGLpOj.js";import{C as D,D as O,E as k,M as Te,N as Ee,T as De,a as Oe,c as A,d as j,f as M,g as N,h as P,i as F,k as I,l as ke,m as Ae,n as je,o as Me,p as Ne,r as Pe,s as L,t as Fe,u as Ie,v as Le,w as Re}from"./runtime-BF_MhE9C.js";import{n as ze,t as Be}from"./caret-CRRZuAnu.js";import{r as Ve,t as He}from"./dismissable-layer-DKSYL2G0.js";import{n as Ue,t as We}from"./mutation-observer-BzOs7GQ5.js";import{n as Ge,t as Ke}from"./navigate-B8bNB07E.js";import{n as qe,t as Je}from"./scroll-CcRIpWnE.js";import{n as Ye,t as Xe}from"./equal-DXfwri8C.js";import{i as Ze,o as Qe,r as $e,s as et}from"./use-event-CgqjJuSt.js";import{a as tt,c as nt,i as rt,n as it,o as at,r as ot,s as st,t as ct}from"./list-collection-ChAVMFNJ.js";import{n as lt,t as ut}from"./dist-Bndl7YEu.js";import{t as dt}from"./cache-ABncvbBh.js";import{n as ft,t as pt}from"./use-field-context-Chq0IlR-.js";import{n as mt,t as ht}from"./use-highlight-BLOieVVf.js";import{n as gt,t as _t}from"./ds-typography-BnR4FRsx.js";import{n as vt,t as yt}from"./ds-button-v3-CR10DnK9.js";import{n as bt,t as R}from"./ds-stack-JVQT0U4h.js";import{t as xt}from"./ds-modal-DuKqL194.js";import{t as St}from"./ds-modal-Bb0p0jZr.js";var Ct,z;function wt(){return(wt=t((()=>{p(),Ct=se(`combobox`).parts(`root`,`clearTrigger`,`content`,`control`,`input`,`item`,`itemGroup`,`itemGroupLabel`,`itemIndicator`,`itemText`,`label`,`list`,`positioner`,`trigger`),z=Ct.build()})))()}var Tt;function Et(){return(Et=t((()=>{nt(),Tt=e=>new st(e),Tt.empty=()=>new st({items:[]})})))()}var Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,B,V,Rt,zt,Bt,Vt,H,Ht,Ut;function Wt(){return(Wt=t((()=>{ue(),Be(),Dt=e=>e.ids?.root??`combobox:${e.id}`,Ot=e=>e.ids?.label??`combobox:${e.id}:label`,kt=e=>e.ids?.control??`combobox:${e.id}:control`,At=e=>e.ids?.input??`combobox:${e.id}:input`,jt=e=>e.ids?.content??`combobox:${e.id}:content`,Mt=e=>e.ids?.positioner??`combobox:${e.id}:popper`,Nt=e=>e.ids?.trigger??`combobox:${e.id}:toggle-btn`,Pt=e=>e.ids?.clearTrigger??`combobox:${e.id}:clear-btn`,Ft=(e,t)=>e.ids?.itemGroup?.(t)??`combobox:${e.id}:optgroup:${t}`,It=(e,t)=>e.ids?.itemGroupLabel?.(t)??`combobox:${e.id}:optgroup-label:${t}`,Lt=(e,t)=>e.ids?.item?.(t)??`combobox:${e.id}:option:${t}`,B=e=>e.getById(jt(e)),V=e=>e.getById(At(e)),Rt=e=>e.getById(Mt(e)),zt=e=>e.getById(kt(e)),Bt=e=>e.getById(Nt(e)),Vt=e=>e.getById(Pt(e)),H=(e,t)=>{if(t==null)return null;let n=`[role=option][data-value="${CSS.escape(t)}"]`;return fe(B(e),n)},Ht=e=>{let t=V(e);e.isActiveElement(t)||t?.focus({preventScroll:!0}),ze(t)},Ut=e=>{let t=Bt(e);e.isActiveElement(t)||t?.focus({preventScroll:!0})}})))()}function Gt(e,t){let{context:n,prop:r,state:i,send:a,scope:o,computed:s}=e,c=ne(Kt,r(`translations`)),l=r(`collection`),u=!!r(`disabled`),d=s(`isInteractive`),f=!!r(`invalid`),ee=!!r(`required`),p=!!r(`readOnly`),m=i.hasTag(`open`),h=i.hasTag(`focused`),g=r(`composite`),_=n.get(`highlightedValue`),v=n.get(`currentPlacement`),b=v?de(v):void 0,ae=we({...r(`positioning`),placement:v});function x(e){let t=l.getItemDisabled(e.item),r=l.getItemValue(e.item);return re(r,()=>`[zag-js] No value found for item ${JSON.stringify(e.item)}`),{value:r,disabled:!!(u||t),highlighted:_===r,selected:n.get(`value`).includes(r)}}return{focused:h,open:m,inputValue:n.get(`inputValue`),highlightedValue:_,highlightedItem:n.get(`highlightedItem`),value:n.get(`value`),valueAsString:s(`valueAsString`),hasSelectedItems:s(`hasSelectedItems`),selectedItems:s(`selectedItems`),collection:r(`collection`),multiple:!!r(`multiple`),disabled:!!u,syncSelectedItems(){a({type:`SELECTED_ITEMS.SYNC`})},reposition(e={}){a({type:`POSITIONING.SET`,options:e})},setHighlightValue(e){a({type:`HIGHLIGHTED_VALUE.SET`,value:e})},clearHighlightValue(){a({type:`HIGHLIGHTED_VALUE.CLEAR`})},selectValue(e){a({type:`ITEM.SELECT`,value:e})},setValue(e){a({type:`VALUE.SET`,value:e})},setInputValue(e,t=`script`){a({type:`INPUT_VALUE.SET`,value:e,src:t})},clearValue(e){a(e==null?{type:`VALUE.CLEAR`}:{type:`ITEM.CLEAR`,value:e})},focus(){V(o)?.focus()},setOpen(e,t=`script`){a({type:e?`OPEN`:`CLOSE`,src:t,replaces:`open`})},getRootProps(){return t.element({...z.root.attrs,dir:r(`dir`),id:Dt(o),"data-invalid":y(f),"data-readonly":y(p)})},getLabelProps(){return t.label({...z.label.attrs,dir:r(`dir`),htmlFor:At(o),id:Ot(o),"data-readonly":y(p),"data-disabled":y(u),"data-invalid":y(f),"data-required":y(ee),"data-focus":y(h),onClick(e){g||(e.preventDefault(),Bt(o)?.focus({preventScroll:!0}))}})},getControlProps(){return t.element({...z.control.attrs,dir:r(`dir`),id:kt(o),"data-state":m?`open`:`closed`,"data-focus":y(h),"data-disabled":y(u),"data-invalid":y(f)})},getPositionerProps(){return t.element({...z.positioner.attrs,dir:r(`dir`),id:Mt(o),style:ae.floating})},getInputProps(){return t.input({...z.input.attrs,dir:r(`dir`),"aria-invalid":te(f),"data-invalid":y(f),"data-autofocus":y(r(`autoFocus`)),name:r(`name`),form:r(`form`),disabled:u,required:r(`required`),autoComplete:`off`,autoCorrect:`off`,autoCapitalize:`none`,spellCheck:`false`,readOnly:p,placeholder:r(`placeholder`),id:At(o),type:`text`,role:`combobox`,defaultValue:n.get(`inputValue`),"aria-autocomplete":s(`autoComplete`)?`both`:`list`,"aria-controls":jt(o),"aria-expanded":m,"data-state":m?`open`:`closed`,"aria-activedescendant":_?Lt(o,_):void 0,onClick(e){e.defaultPrevented||r(`openOnClick`)&&d&&a({type:`INPUT.CLICK`,src:`input-click`})},onFocus(){u||a({type:`INPUT.FOCUS`})},onBlur(){u||a({type:`INPUT.BLUR`})},onChange(e){a({type:`INPUT.CHANGE`,value:e.currentTarget.value,src:`input-change`})},onKeyDown(e){if(e.defaultPrevented||!d||e.ctrlKey||e.shiftKey||Re(e))return;let t=r(`openOnKeyPress`),n=e.ctrlKey||e.metaKey||e.shiftKey,i={ArrowDown(e){(t||m)&&(a({type:e.altKey?`OPEN`:`INPUT.ARROW_DOWN`,keypress:!0,src:`arrow-key`}),e.preventDefault())},ArrowUp(){(t||m)&&(a({type:e.altKey?`CLOSE`:`INPUT.ARROW_UP`,keypress:!0,src:`arrow-key`}),e.preventDefault())},Home(e){n||(a({type:`INPUT.HOME`,keypress:!0}),m&&e.preventDefault())},End(e){n||(a({type:`INPUT.END`,keypress:!0}),m&&e.preventDefault())},Enter(e){a({type:`INPUT.ENTER`,keypress:!0,src:`item-select`});let t=_!=null,n=r(`alwaysSubmitOnEnter`),i=s(`isCustomValue`)&&!r(`allowCustomValue`);if(m&&!n&&(t||i)&&e.preventDefault(),_==null)return;let c=H(o,_);ie(c)&&r(`navigate`)?.({value:_,node:c,href:c.href})},Escape(){a({type:`INPUT.ESCAPE`,keypress:!0,src:`escape-key`}),e.preventDefault()}}[Le(e,{dir:r(`dir`)})];i?.(e)}})},getTriggerProps(e={}){return t.button({...z.trigger.attrs,dir:r(`dir`),id:Nt(o),"aria-haspopup":g?`listbox`:`dialog`,type:`button`,tabIndex:e.focusable?void 0:-1,"aria-label":c.triggerLabel,"aria-expanded":m,"data-state":m?`open`:`closed`,"aria-controls":m?jt(o):void 0,disabled:u,"data-invalid":y(f),"data-focusable":y(e.focusable),"data-readonly":y(p),"data-disabled":y(u),onFocus(){e.focusable&&a({type:`INPUT.FOCUS`,src:`trigger`})},onClick(e){e.defaultPrevented||d&&O(e)&&a({type:`TRIGGER.CLICK`,src:`trigger-click`})},onPointerDown(e){d&&e.pointerType!==`touch`&&O(e)&&(e.preventDefault(),queueMicrotask(()=>{Ht(o)}))},onKeyDown(e){if(e.defaultPrevented||g)return;let t={ArrowDown(){a({type:`INPUT.ARROW_DOWN`,src:`arrow-key`})},ArrowUp(){a({type:`INPUT.ARROW_UP`,src:`arrow-key`})}}[Le(e,{dir:r(`dir`)})];t&&(t(e),e.preventDefault())}})},getContentProps(){return t.element({...z.content.attrs,dir:r(`dir`),id:jt(o),role:g?`listbox`:`dialog`,tabIndex:-1,hidden:!m,"data-state":m?`open`:`closed`,"data-placement":v,"data-side":b,"aria-labelledby":Ot(o),"aria-multiselectable":r(`multiple`)&&g?!0:void 0,"data-empty":y(l.size===0),onPointerDown(e){O(e)&&e.preventDefault()}})},getListProps(){return t.element({...z.list.attrs,role:g?void 0:`listbox`,"data-empty":y(l.size===0),"aria-labelledby":Ot(o),"aria-multiselectable":r(`multiple`)&&!g?!0:void 0})},getClearTriggerProps(){return t.button({...z.clearTrigger.attrs,dir:r(`dir`),id:Pt(o),type:`button`,tabIndex:-1,disabled:u,"data-invalid":y(f),"aria-label":c.clearTriggerLabel,"aria-controls":At(o),hidden:!n.get(`value`).length,onPointerDown(e){O(e)&&e.preventDefault()},onClick(e){e.defaultPrevented||d&&a({type:`VALUE.CLEAR`,src:`clear-trigger`})}})},getItemState:x,getItemProps(e){let n=x(e),i=n.value;return t.element({...z.item.attrs,dir:r(`dir`),id:Lt(o,i),role:`option`,tabIndex:-1,"data-highlighted":y(n.highlighted),"data-state":n.selected?`checked`:`unchecked`,"aria-selected":te(n.selected),"aria-disabled":te(n.disabled),"data-disabled":y(n.disabled),"data-value":n.value,onPointerMove(){n.disabled||$e()===`pointer`&&(n.highlighted||a({type:`ITEM.POINTER_MOVE`,value:i}))},onPointerLeave(){e.persistFocus||n.disabled||$e()===`pointer`&&a({type:`ITEM.POINTER_LEAVE`,value:i})},onClick(e){k(e)||I(e)||De(e)||n.disabled||a({type:`ITEM.CLICK`,src:`item-select`,value:i})}})},getItemTextProps(e){let n=x(e);return t.element({...z.itemText.attrs,dir:r(`dir`),"data-state":n.selected?`checked`:`unchecked`,"data-disabled":y(n.disabled),"data-highlighted":y(n.highlighted)})},getItemIndicatorProps(e){let n=x(e);return t.element({"aria-hidden":!0,...z.itemIndicator.attrs,dir:r(`dir`),"data-state":n.selected?`checked`:`unchecked`,hidden:!n.selected})},getItemGroupProps(e){let{id:n}=e;return t.element({...z.itemGroup.attrs,dir:r(`dir`),id:Ft(o,n),"aria-labelledby":It(o,n),"data-empty":y(l.size===0),role:`group`})},getItemGroupLabelProps(e){let{htmlFor:n}=e;return t.element({...z.itemGroupLabel.attrs,dir:r(`dir`),id:It(o,n),role:`presentation`})}}}var Kt;function qt(){return(qt=t((()=>{h(),D(),oe(),Ze(),E(),_(),wt(),Wt(),Kt={triggerLabel:`Toggle suggestions`,clearTriggerLabel:`Clear value`}})))()}function Jt(e){return(e.previousEvent||e).src}var Yt,Xt,Zt,U,W,Qt;function $t(){return($t=t((()=>{tt(),ae(),He(),Ge(),Te(),ce(),We(),Je(),Be(),Ze(),lt(),T(),f(),c(),Xe(),ee(),Et(),Wt(),{guards:Yt,createMachine:Xt,choose:Zt}=m(),{and:U,not:W}=Yt,Qt=Xt({props({props:e}){return{loopFocus:!0,openOnClick:!1,defaultValue:[],defaultInputValue:``,closeOnSelect:!e.multiple,allowCustomValue:!1,alwaysSubmitOnEnter:!1,inputBehavior:`none`,selectionBehavior:e.multiple?`clear`:`replace`,openOnKeyPress:!0,openOnChange:!0,composite:!0,navigate({node:e}){Ke(e)},collection:Tt.empty(),...e,positioning:{placement:`bottom`,sameWidth:!0,...e.positioning}}},initialState({prop:e}){return e(`open`)||e(`defaultOpen`)?`open.suggesting`:`closed.idle`},context({prop:e,bindable:t,getContext:n,getEvent:r}){let i=e(`value`)??e(`defaultValue`)??[],a=e(`collection`).findMany(i);return{currentPlacement:t(()=>({defaultValue:void 0})),value:t(()=>({defaultValue:e(`defaultValue`),value:e(`value`),isEqual:Ye,hash(e){return e.join(`,`)},onChange(t){let r=n(),i=e(`collection`),a=r.get(`selectedItemMap`),o=rt({values:t,collection:i,selectedItemMap:a}),s=e(`value`)??t,c=s===t?o:rt({values:s,collection:i,selectedItemMap:o.nextSelectedItemMap});r.set(`selectedItemMap`,c.nextSelectedItemMap),e(`onValueChange`)?.({value:t,items:o.selectedItems})}})),highlightedValue:t(()=>({defaultValue:e(`defaultHighlightedValue`)||null,value:e(`highlightedValue`),onChange(t){let n=e(`collection`).find(t);e(`onHighlightChange`)?.({highlightedValue:t,highlightedItem:n})}})),inputValue:t(()=>{let t=e(`inputValue`)||e(`defaultInputValue`),n=e(`value`)||e(`defaultValue`);if(!t.trim()&&!e(`multiple`)){let r=e(`collection`).stringifyMany(n);t=S(e(`selectionBehavior`),{preserve:t||r,replace:r,clear:``})}return{defaultValue:t,value:e(`inputValue`),onChange(t){let n=r(),i=(n.previousEvent||n).src;e(`onInputValueChange`)?.({inputValue:t,reason:i})}}}),highlightedItem:t(()=>{let t=e(`highlightedValue`);return{defaultValue:e(`collection`).find(t)}}),selectedItemMap:t(()=>({defaultValue:ot({selectedItems:a,collection:e(`collection`)})}))}},computed:{isInputValueEmpty:({context:e})=>e.get(`inputValue`).length===0,isInteractive:({prop:e})=>!(e(`readOnly`)||e(`disabled`)),autoComplete:({prop:e})=>e(`inputBehavior`)===`autocomplete`,autoHighlight:({prop:e})=>e(`inputBehavior`)===`autohighlight`,hasSelectedItems:({context:e})=>e.get(`value`).length>0,selectedItems:({context:e,prop:t})=>at({values:e.get(`value`),collection:t(`collection`),selectedItemMap:e.get(`selectedItemMap`)}),valueAsString:({computed:e,prop:t})=>t(`collection`).stringifyItems(e(`selectedItems`)),isCustomValue:({context:e,computed:t})=>e.get(`inputValue`)!==t(`valueAsString`)},watch({context:e,prop:t,track:n,action:r,send:i}){n([()=>e.hash(`value`)],()=>{r([`syncSelectedItems`])}),n([()=>e.get(`inputValue`)],()=>{r([`syncInputValue`])}),n([()=>e.get(`highlightedValue`)],()=>{r([`syncHighlightedItem`,`autofillInputValue`,`announceHighlightedItem`])}),n([()=>t(`open`)],()=>{r([`toggleVisibility`])}),n([()=>t(`collection`).toString()],()=>{i({type:`CHILDREN_CHANGE`})})},on:{"SELECTED_ITEMS.SYNC":{actions:[`syncSelectedItems`]},"HIGHLIGHTED_VALUE.SET":{actions:[`setHighlightedValue`]},"HIGHLIGHTED_VALUE.CLEAR":{actions:[`clearHighlightedValue`]},"ITEM.SELECT":{actions:[`selectItem`]},"ITEM.CLEAR":{actions:[`clearItem`]},"VALUE.SET":{actions:[`setValue`]},"INPUT_VALUE.SET":{actions:[`setInputValue`]},"POSITIONING.SET":{actions:[`reposition`]}},entry:Zt([{guard:`autoFocus`,actions:[`setInitialFocus`]}]),states:{closed:{tags:[`closed`],initial:`idle`,states:{idle:{tags:[`idle`],entry:[`scrollContentToTop`,`clearHighlightedValue`],on:{"CONTROLLED.OPEN":{target:`open.interacting`},"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.CLICK":[{guard:`isOpenControlled`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.FOCUS":{target:`focused`},OPEN:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open.interacting`,actions:[`invokeOnOpen`]}],"VALUE.CLEAR":{target:`focused`,actions:[`clearInputValue`,`clearSelectedItems`,`setInitialFocus`]}}},focused:{tags:[`focused`],entry:[`scrollContentToTop`,`clearHighlightedValue`],on:{"CONTROLLED.OPEN":[{guard:`isChangeEvent`,target:`open.suggesting`},{target:`open.interacting`}],"INPUT.CHANGE":[{guard:U(`isOpenControlled`,`openOnChange`),actions:[`setInputValue`,`invokeOnOpen`,`highlightFirstItemIfNeeded`]},{guard:`openOnChange`,target:`open.suggesting`,actions:[`setInputValue`,`invokeOnOpen`,`highlightFirstItemIfNeeded`]},{actions:[`setInputValue`]}],"LAYER.INTERACT_OUTSIDE":{target:`idle`},"INPUT.ESCAPE":{guard:U(`isCustomValue`,W(`allowCustomValue`)),actions:[`revertInputValue`]},"INPUT.BLUR":{target:`idle`},"INPUT.CLICK":[{guard:`isOpenControlled`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]}],"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.ARROW_DOWN":[{guard:U(`isOpenControlled`,`autoComplete`),actions:[`invokeOnOpen`]},{guard:`autoComplete`,target:`open.interacting`,actions:[`invokeOnOpen`]},{guard:`isOpenControlled`,actions:[`highlightFirstOrSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstOrSelectedItem`,`invokeOnOpen`]}],"INPUT.ARROW_UP":[{guard:U(`isOpenControlled`,`autoComplete`),actions:[`invokeOnOpen`]},{guard:`autoComplete`,target:`open.interacting`,actions:[`invokeOnOpen`]},{guard:`isOpenControlled`,actions:[`highlightLastOrSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightLastOrSelectedItem`,`invokeOnOpen`]}],OPEN:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open.interacting`,actions:[`invokeOnOpen`]}],"VALUE.CLEAR":{actions:[`clearInputValue`,`clearSelectedItems`]}}}}},open:{tags:[`open`,`focused`],entry:[`setInitialFocus`],effects:[`trackFocusVisible`,`scrollToHighlightedItem`,`trackDismissableLayer`,`trackPlacement`,`trackLiveRegion`],on:{"CONTROLLED.CLOSE":[{guard:`restoreFocus`,target:`closed.focused`,actions:[`setFinalFocus`]},{target:`closed.idle`}],"INPUT.ENTER":[{guard:U(`isOpenControlled`,`isCustomValue`,W(`hasHighlightedItem`),W(`allowCustomValue`)),actions:[`revertInputValue`,`invokeOnClose`]},{guard:U(`isCustomValue`,W(`hasHighlightedItem`),W(`allowCustomValue`)),target:`closed.focused`,actions:[`revertInputValue`,`invokeOnClose`]},{guard:U(`isOpenControlled`,`closeOnSelect`),actions:[`selectHighlightedItem`,`invokeOnClose`]},{guard:`closeOnSelect`,target:`closed.focused`,actions:[`selectHighlightedItem`,`invokeOnClose`,`setFinalFocus`]},{actions:[`selectHighlightedItem`]}],"ITEM.CLICK":[{guard:U(`isOpenControlled`,`closeOnSelect`),actions:[`selectItem`,`invokeOnClose`]},{guard:`closeOnSelect`,target:`closed.focused`,actions:[`selectItem`,`invokeOnClose`,`setFinalFocus`]},{actions:[`selectItem`]}],"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`]}],"LAYER.INTERACT_OUTSIDE":[{guard:U(`isOpenControlled`,`isCustomValue`,W(`allowCustomValue`)),actions:[`revertInputValue`,`invokeOnClose`]},{guard:U(`isCustomValue`,W(`allowCustomValue`)),target:`closed.idle`,actions:[`revertInputValue`,`invokeOnClose`]},{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.idle`,actions:[`invokeOnClose`]}],CLOSE:[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`,`setFinalFocus`]}],"VALUE.CLEAR":[{guard:`isOpenControlled`,actions:[`clearInputValue`,`clearSelectedItems`,`invokeOnClose`]},{target:`closed.focused`,actions:[`clearInputValue`,`clearSelectedItems`,`invokeOnClose`,`setFinalFocus`]}]},initial:`interacting`,states:{interacting:{on:{CHILDREN_CHANGE:[{guard:`isHighlightedItemRemoved`,actions:[`clearHighlightedValue`]},{actions:[`scrollToHighlightedItem`]}],"INPUT.HOME":{actions:[`highlightFirstItem`]},"INPUT.END":{actions:[`highlightLastItem`]},"INPUT.ARROW_DOWN":[{guard:U(`autoComplete`,`isLastItemHighlighted`),actions:[`clearHighlightedValue`,`scrollContentToTop`]},{actions:[`highlightNextItem`]}],"INPUT.ARROW_UP":[{guard:U(`autoComplete`,`isFirstItemHighlighted`),actions:[`clearHighlightedValue`]},{actions:[`highlightPrevItem`]}],"INPUT.CHANGE":[{guard:`autoComplete`,target:`suggesting`,actions:[`setInputValue`]},{target:`suggesting`,actions:[`clearHighlightedValue`,`setInputValue`]}],"ITEM.POINTER_MOVE":{actions:[`setHighlightedValue`]},"ITEM.POINTER_LEAVE":{actions:[`clearHighlightedValue`]},"LAYER.ESCAPE":[{guard:U(`isOpenControlled`,`autoComplete`),actions:[`syncInputValue`,`invokeOnClose`]},{guard:`autoComplete`,target:`closed.focused`,actions:[`syncInputValue`,`invokeOnClose`]},{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`,`setFinalFocus`]}]}},suggesting:{on:{CHILDREN_CHANGE:[{guard:U(`isHighlightedItemRemoved`,`hasCollectionItems`,`autoHighlight`),actions:[`clearHighlightedValue`,`highlightFirstItem`]},{guard:`isHighlightedItemRemoved`,actions:[`clearHighlightedValue`]},{guard:`autoHighlight`,actions:[`highlightFirstItem`]}],"INPUT.ARROW_DOWN":{target:`interacting`,actions:[`highlightNextItem`]},"INPUT.ARROW_UP":{target:`interacting`,actions:[`highlightPrevItem`]},"INPUT.HOME":{target:`interacting`,actions:[`highlightFirstItem`]},"INPUT.END":{target:`interacting`,actions:[`highlightLastItem`]},"INPUT.CHANGE":{actions:[`setInputValue`]},"LAYER.ESCAPE":[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`]}],"ITEM.POINTER_MOVE":{target:`interacting`,actions:[`setHighlightedValue`]},"ITEM.POINTER_LEAVE":{actions:[`clearHighlightedValue`]}}}}}},implementations:{guards:{isInputValueEmpty:({computed:e})=>e(`isInputValueEmpty`),autoComplete:({computed:e,prop:t})=>e(`autoComplete`)&&!t(`multiple`),autoHighlight:({computed:e})=>e(`autoHighlight`),isFirstItemHighlighted:({prop:e,context:t})=>e(`collection`).firstValue===t.get(`highlightedValue`),isLastItemHighlighted:({prop:e,context:t})=>e(`collection`).lastValue===t.get(`highlightedValue`),isCustomValue:({computed:e})=>e(`isCustomValue`),allowCustomValue:({prop:e})=>!!e(`allowCustomValue`),hasHighlightedItem:({context:e})=>e.get(`highlightedValue`)!=null,closeOnSelect:({prop:e})=>!!e(`closeOnSelect`),isOpenControlled:({prop:e})=>e(`open`)!=null,openOnChange:({prop:e,context:t})=>{let n=e(`openOnChange`);return d(n)?n:!!n?.({inputValue:t.get(`inputValue`)})},restoreFocus:({event:e})=>{let t=e.restoreFocus??e.previousEvent?.restoreFocus;return t==null||!!t},isChangeEvent:({event:e})=>e.previousEvent?.type===`INPUT.CHANGE`,autoFocus:({prop:e})=>!!e(`autoFocus`),isHighlightedItemRemoved:({prop:e,context:t})=>!e(`collection`).has(t.get(`highlightedValue`)),hasCollectionItems:({prop:e})=>e(`collection`).size>0},effects:{trackFocusVisible({scope:e}){return et({root:e.getRootNode?.()})},trackDismissableLayer({send:e,prop:t,scope:n}){return t(`disableLayer`)?void 0:Ve(()=>B(n),{type:`listbox`,defer:!0,exclude:()=>[V(n),Bt(n),Vt(n)],onFocusOutside:t(`onFocusOutside`),onPointerDownOutside:t(`onPointerDownOutside`),onInteractOutside:t(`onInteractOutside`),onEscapeKeyDown(t){t.preventDefault(),t.stopPropagation(),e({type:`LAYER.ESCAPE`,src:`escape-key`})},onDismiss(){e({type:`LAYER.INTERACT_OUTSIDE`,src:`interact-outside`,restoreFocus:!1})}})},trackLiveRegion({refs:e,scope:t}){let n=ut({level:`assertive`,document:t.getDoc()});return e.set(`liveRegion`,n),()=>n.destroy()},trackPlacement({context:e,prop:t,scope:n}){return e.set(`currentPlacement`,t(`positioning`).placement),me(()=>zt(n)||Bt(n),()=>Rt(n),{...t(`positioning`),defer:!0,onComplete(t){e.set(`currentPlacement`,t.placement)}})},scrollToHighlightedItem({context:e,prop:t,scope:n}){let r=V(n),i=[],a=r=>{if($e()===`pointer`)return;let a=e.get(`highlightedValue`);if(!a)return;let o=B(n),s=t(`scrollToIndexFn`);if(s){s({index:t(`collection`).indexOf(a),immediate:r,getElement:()=>H(n,a)});return}let c=H(n,a),l=C(()=>{qe(c,{rootEl:o,block:`nearest`})});i.push(l)},o=C(()=>{Qe(`virtual`),a(!0)});i.push(o);let s=Ue(r,{attributes:[`aria-activedescendant`],callback:()=>a(!1)});return i.push(s),()=>{i.forEach(e=>e())}}},actions:{reposition({context:e,prop:t,scope:n,event:r}){me(()=>zt(n),()=>Rt(n),{...t(`positioning`),...r.options,defer:!0,listeners:!1,onComplete(t){e.set(`currentPlacement`,t.placement)}})},setHighlightedValue({context:e,event:t}){t.value!=null&&e.set(`highlightedValue`,t.value)},clearHighlightedValue({context:e}){e.set(`highlightedValue`,null)},selectHighlightedItem(e){let{context:t,prop:n}=e,r=n(`collection`),i=t.get(`highlightedValue`);if(!i||!r.has(i))return;let a=n(`multiple`)?l(t.get(`value`),i):[i];n(`onSelect`)?.({value:a,itemValue:i}),t.set(`value`,a);let o=S(n(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r.stringifyMany(a),clear:``});t.set(`inputValue`,o)},scrollToHighlightedItem({context:e,prop:t,scope:n}){le(()=>{let r=e.get(`highlightedValue`);if(r==null)return;let i=H(n,r),a=B(n),o=t(`scrollToIndexFn`);if(o){o({index:t(`collection`).indexOf(r),immediate:!0,getElement:()=>H(n,r)});return}qe(i,{rootEl:a,block:`nearest`})})},selectItem(e){let{context:t,event:n,flush:r,prop:i}=e;n.value!=null&&r(()=>{let e=i(`multiple`)?l(t.get(`value`),n.value):[n.value];i(`onSelect`)?.({value:e,itemValue:n.value}),t.set(`value`,e);let r=S(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(e),clear:``});t.set(`inputValue`,r)})},clearItem(e){let{context:t,event:n,flush:r,prop:i}=e;n.value!=null&&r(()=>{let e=u(t.get(`value`),n.value);t.set(`value`,e);let r=S(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(e),clear:``});t.set(`inputValue`,r)})},setInitialFocus({scope:e}){C(()=>{Ht(e)})},setFinalFocus({scope:e}){C(()=>{Bt(e)?.dataset.focusable==null?Ht(e):Ut(e)})},syncInputValue({context:e,scope:t,event:n}){let r=V(t);r&&(r.value=e.get(`inputValue`),queueMicrotask(()=>{n.current().type!==`INPUT.CHANGE`&&ze(r)}))},setInputValue({context:e,event:t}){e.set(`inputValue`,t.value)},clearInputValue({context:e}){e.set(`inputValue`,``)},revertInputValue({context:e,prop:t,computed:n}){let r=t(`selectionBehavior`),i=S(r,{replace:n(`hasSelectedItems`)?n(`valueAsString`):``,preserve:e.get(`inputValue`),clear:``});e.set(`inputValue`,i)},setValue(e){let{context:t,flush:n,event:r,prop:i}=e;n(()=>{t.set(`value`,r.value);let e=S(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(r.value),clear:``});t.set(`inputValue`,e)})},clearSelectedItems(e){let{context:t,flush:n,prop:r}=e;n(()=>{t.set(`value`,[]);let e=S(r(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r(`collection`).stringifyMany([]),clear:``});t.set(`inputValue`,e)})},scrollContentToTop({prop:e,scope:t}){let n=e(`scrollToIndexFn`);if(n){let r=e(`collection`).firstValue;n({index:0,immediate:!0,getElement:()=>H(t,r)})}else{let e=B(t);if(!e)return;e.scrollTop=0}},invokeOnOpen({prop:e,event:t,context:n}){let r=Jt(t);e(`onOpenChange`)?.({open:!0,reason:r,value:n.get(`value`)})},invokeOnClose({prop:e,event:t,context:n}){let r=Jt(t);e(`onOpenChange`)?.({open:!1,reason:r,value:n.get(`value`)})},highlightFirstItem({context:e,prop:t,scope:n}){(B(n)?queueMicrotask:C)(()=>{let n=t(`collection`).firstValue;n&&e.set(`highlightedValue`,n)})},highlightFirstItemIfNeeded({computed:e,action:t}){e(`autoHighlight`)&&t([`highlightFirstItem`])},highlightLastItem({context:e,prop:t,scope:n}){(B(n)?queueMicrotask:C)(()=>{let n=t(`collection`).lastValue;n&&e.set(`highlightedValue`,n)})},highlightNextItem({context:e,prop:t}){let n=null,r=e.get(`highlightedValue`),i=t(`collection`);r?(n=i.getNextValue(r),!n&&t(`loopFocus`)&&(n=i.firstValue)):n=i.firstValue,n&&e.set(`highlightedValue`,n)},highlightPrevItem({context:e,prop:t}){let n=null,r=e.get(`highlightedValue`),i=t(`collection`);r?(n=i.getPreviousValue(r),!n&&t(`loopFocus`)&&(n=i.lastValue)):n=i.lastValue,n&&e.set(`highlightedValue`,n)},highlightFirstSelectedItem({context:e,prop:t}){C(()=>{let[n]=t(`collection`).sort(e.get(`value`));n&&e.set(`highlightedValue`,n)})},highlightFirstOrSelectedItem({context:e,prop:t,computed:n}){C(()=>{let r=null;r=n(`hasSelectedItems`)?t(`collection`).sort(e.get(`value`))[0]:t(`collection`).firstValue,r&&e.set(`highlightedValue`,r)})},highlightLastOrSelectedItem({context:e,prop:t,computed:n}){C(()=>{let r=t(`collection`),i=null;i=n(`hasSelectedItems`)?r.sort(e.get(`value`))[0]:r.lastValue,i&&e.set(`highlightedValue`,i)})},autofillInputValue({context:e,computed:t,prop:n,event:r,scope:i}){let a=V(i),o=n(`collection`);if(!t(`autoComplete`)||!a||!r.keypress)return;let s=o.stringify(e.get(`highlightedValue`));C(()=>{a.value=s||e.get(`inputValue`)})},syncSelectedItems(e){queueMicrotask(()=>{let{context:t,prop:n}=e,r=n(`collection`),i=t.get(`value`),a=t.get(`selectedItemMap`),o=rt({values:i,collection:r,selectedItemMap:a});t.set(`selectedItemMap`,o.nextSelectedItemMap);let s=S(n(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r.stringifyMany(i),clear:``});t.set(`inputValue`,s)})},syncHighlightedItem({context:e,prop:t}){let n=t(`collection`).find(e.get(`highlightedValue`));e.set(`highlightedItem`,n)},announceHighlightedItem({context:e,prop:t,refs:n}){if(!Ee())return;let r=e.get(`highlightedValue`),i=r?t(`collection`).stringifyItem(t(`collection`).find(r)):null;if(!i)return;let a=r?e.get(`value`).includes(r):!1;n.get(`liveRegion`)?.announce(a?`${i}, selected`:i)},toggleVisibility({event:e,send:t,prop:n}){t({type:n(`open`)?`CONTROLLED.OPEN`:`CONTROLLED.CLOSE`,previousEvent:e})}}}})})))()}var en;function tn(){return(tn=t((()=>{wt(),en=Ct.extendWith(`empty`)})))()}function nn(e){let{locale:t,...n}=e||{},r=rn(t||`en-US`,{usage:`search`,...n});function i(e){return e=e.normalize(`NFC`),r.resolvedOptions().ignorePunctuation&&(e=e.replace(/\p{P}/gu,``)),e}function a(e,t){return t.length===0||(e=i(e),t=i(t),r.compare(e.slice(0,t.length),t)===0)}function o(e,t){return t.length===0||(e=i(e),t=i(t),r.compare(e.slice(-t.length),t)===0)}function s(e,t){if(t.length===0)return!0;e=i(e),t=i(t);let n=0,a=t.length;for(;n+a<=e.length;n++){let i=e.slice(n,n+a);if(r.compare(t,i)===0)return!0}return!1}return{startsWith:a,endsWith:o,contains:s}}var rn;function an(){return(an=t((()=>{rn=dt(Intl.Collator)})))()}function on(e){let t=F(),n=e.locale??t.locale;return(0,sn.useMemo)(()=>nn({...e,locale:n}),[n,e])}var sn;function cn(){return(cn=t((()=>{Pe(),sn=n(),an()})))()}var ln,G;function K(){return(K=t((()=>{Ae(),[ln,G]=Ne({name:`ComboboxContext`,hookName:`useComboboxContext`,providerName:`<ComboboxProvider />`})})))()}var un,dn,fn;function pn(){return(pn=t((()=>{A(),K(),un=n(),P(),dn=r(),fn=(0,un.forwardRef)((e,t)=>{let n=G(),r=N(n.getClearTriggerProps(),e);return(0,dn.jsx)(L.button,{...r,ref:t})}),fn.displayName=`ComboboxClearTrigger`})))()}var mn,hn,gn;function _n(){return(_n=t((()=>{ke(),A(),Ce(),w(),K(),mn=n(),P(),hn=r(),gn=(0,mn.forwardRef)((e,t)=>{let n=G(),r=he(),i=N(n.getContentProps(),r.getPresenceProps(),e),a=Ie(r.ref,t);return(0,hn.jsx)(ye,{presence:r,children:(0,hn.jsx)(L.div,{...i,ref:a})})}),gn.displayName=`ComboboxContent`})))()}var vn,yn,bn,xn;function Sn(){return(Sn=t((()=>{tn(),A(),K(),vn=n(),yn=r(),bn=en.build(),xn=(0,vn.forwardRef)((e,t)=>G().collection.size===0?(0,yn.jsx)(L.div,{...bn.empty.attrs,...e,role:`presentation`,ref:t}):null),xn.displayName=`ComboboxEmpty`})))()}var Cn;function wn(){return(wn=t((()=>{K(),Cn=e=>e.children(G())})))()}var Tn,En,Dn;function On(){return(On=t((()=>{A(),K(),Tn=n(),P(),En=r(),Dn=(0,Tn.forwardRef)((e,t)=>{let n=G(),r=N(n.getControlProps(),e);return(0,En.jsx)(L.div,{...r,ref:t})}),Dn.displayName=`ComboboxControl`})))()}var kn,An,jn;function Mn(){return(Mn=t((()=>{A(),pt(),K(),kn=n(),P(),An=r(),jn=(0,kn.forwardRef)((e,t)=>{let n=G(),r=N(n.getInputProps(),e),i=ft();return(0,An.jsx)(L.input,{"aria-describedby":i?.ariaDescribedby,...r,ref:t})}),jn.displayName=`ComboboxInput`})))()}var Nn,Pn;function Fn(){return(Fn=t((()=>{Ae(),[Nn,Pn]=Ne({name:`ComboboxItemContext`,hookName:`useComboboxItemContext`,providerName:`<ComboboxItemProvider />`})})))()}var In,Ln;function Rn(){return(Rn=t((()=>{Ae(),[In,Ln]=Ne({name:`ComboboxItemPropsContext`,hookName:`useComboboxItemPropsContext`,providerName:`<ComboboxItemPropsProvider />`})})))()}var zn,Bn,Vn,Hn;function Un(){return(Un=t((()=>{M(),A(),K(),Fn(),Rn(),zn=n(),P(),Bn=r(),Vn=j(),Hn=(0,zn.forwardRef)((e,t)=>{let[n,r]=Vn(e,[`item`,`persistFocus`]),i=G(),a=N(i.getItemProps(n),r),o=i.getItemState(n);return(0,Bn.jsx)(In,{value:n,children:(0,Bn.jsx)(Nn,{value:o,children:(0,Bn.jsx)(L.div,{...a,ref:t})})})}),Hn.displayName=`ComboboxItem`})))()}var Wn;function Gn(){return(Gn=t((()=>{Fn(),Wn=e=>e.children(Pn())})))()}var Kn,qn;function Jn(){return(Jn=t((()=>{Ae(),[Kn,qn]=Ne({name:`ComboboxItemGroupPropsContext`,hookName:`useComboboxItemGroupPropsContext`,providerName:`<ComboboxItemGroupPropsProvider />`})})))()}var Yn,Xn,Zn,Qn;function $n(){return($n=t((()=>{M(),A(),K(),Jn(),Yn=n(),P(),Xn=r(),Zn=j(),Qn=(0,Yn.forwardRef)((e,t)=>{let n=(0,Yn.useId)(),[r,i]=Zn(e,[`id`]),a={id:n,...r},o=G(),s=N(o.getItemGroupProps(a),i);return(0,Xn.jsx)(Kn,{value:a,children:(0,Xn.jsx)(L.div,{...s,ref:t})})}),Qn.displayName=`ComboboxItemGroup`})))()}var er,tr,nr;function rr(){return(rr=t((()=>{A(),K(),Jn(),er=n(),P(),tr=r(),nr=(0,er.forwardRef)((e,t)=>{let n=G(),r=qn(),i=N(n.getItemGroupLabelProps({htmlFor:r.id}),e);return(0,tr.jsx)(L.div,{...i,ref:t})}),nr.displayName=`ComboboxItemGroupLabel`})))()}var ir,ar,or;function sr(){return(sr=t((()=>{A(),K(),Rn(),ir=n(),P(),ar=r(),or=(0,ir.forwardRef)((e,t)=>{let n=G(),r=Ln(),i=N(n.getItemIndicatorProps(r),e);return(0,ar.jsx)(L.div,{...i,ref:t})}),or.displayName=`ComboboxItemIndicator`})))()}var cr,lr,ur;function dr(){return(dr=t((()=>{A(),K(),Rn(),cr=n(),P(),lr=r(),ur=(0,cr.forwardRef)((e,t)=>{let n=G(),r=Ln(),i=N(n.getItemTextProps(r),e);return(0,lr.jsx)(L.span,{...i,ref:t})}),ur.displayName=`ComboboxItemText`})))()}var fr,pr,mr;function hr(){return(hr=t((()=>{A(),K(),fr=n(),P(),pr=r(),mr=(0,fr.forwardRef)((e,t)=>{let n=G(),r=N(n.getLabelProps(),e);return(0,pr.jsx)(L.label,{...r,ref:t})}),mr.displayName=`ComboboxLabel`})))()}var gr,_r,vr;function yr(){return(yr=t((()=>{A(),K(),gr=n(),P(),_r=r(),vr=(0,gr.forwardRef)((e,t)=>{let n=G(),r=N(n.getListProps(),e);return(0,_r.jsx)(L.div,{...r,ref:t})}),vr.displayName=`ComboboxList`})))()}var br,xr,Sr;function Cr(){return(Cr=t((()=>{A(),w(),K(),br=n(),P(),xr=r(),Sr=(0,br.forwardRef)((e,t)=>{let n=G(),r=he(),i=N(n.getPositionerProps(),e);return r.unmounted?null:(0,xr.jsx)(L.div,{...i,ref:t})}),Sr.displayName=`ComboboxPositioner`})))()}var wr,Tr;function Er(){return(Er=t((()=>{Oe(),Pe(),pt(),$t(),qt(),wr=n(),x(),b(),Tr=e=>{let t=(0,wr.useId)(),{dir:n}=F(),{getRootNode:r}=Me(),i=ft(),a={id:t,ids:{label:i?.ids.label,input:i?.ids.control},disabled:i?.disabled,readOnly:i?.readOnly,required:i?.required,invalid:i?.invalid,dir:n,getRootNode:r,...e};return Gt(g(Qt,a),v)}})))()}var Dr,Or,kr,Ar;function jr(){return(jr=t((()=>{M(),A(),Se(),ge(),w(),K(),Er(),Dr=n(),P(),Or=r(),kr=(e,t)=>{let[n,r]=be(e),[i,a]=j()(r,`allowCustomValue.alwaysSubmitOnEnter.autoFocus.closeOnSelect.collection.composite.defaultHighlightedValue.defaultInputValue.defaultOpen.defaultValue.disabled.disableLayer.form.highlightedValue.id.ids.inputBehavior.inputValue.invalid.loopFocus.multiple.name.navigate.onFocusOutside.onHighlightChange.onInputValueChange.onInteractOutside.onOpenChange.onPointerDownOutside.onSelect.onValueChange.open.openOnChange.openOnClick.openOnKeyPress.placeholder.positioning.readOnly.required.scrollToIndexFn.selectionBehavior.translations.value`.split(`.`)),o=Tr(i),s=_e(N({present:o.open},n)),c=N(o.getRootProps(),a);return(0,Or.jsx)(ln,{value:o,children:(0,Or.jsx)(xe,{value:s,children:(0,Or.jsx)(L.div,{...c,ref:t})})})},Ar=(0,Dr.forwardRef)(kr)})))()}var Mr,Nr,Pr,Fr;function Ir(){return(Ir=t((()=>{M(),A(),Se(),ge(),w(),K(),Mr=n(),P(),Nr=r(),Pr=(e,t)=>{let[n,r]=be(e),[{value:i},a]=j()(r,[`value`]),o=_e(N({present:i.open},n)),s=N(i.getRootProps(),a);return(0,Nr.jsx)(ln,{value:i,children:(0,Nr.jsx)(xe,{value:o,children:(0,Nr.jsx)(L.div,{...s,ref:t})})})},Fr=(0,Mr.forwardRef)(Pr)})))()}var Lr,Rr,zr,Br;function Vr(){return(Vr=t((()=>{M(),A(),K(),Lr=n(),P(),Rr=r(),zr=j(),Br=(0,Lr.forwardRef)((e,t)=>{let[n,r]=zr(e,[`focusable`]),i=G(),a=N(i.getTriggerProps(n),r);return(0,Rr.jsx)(L.button,{...a,ref:t})}),Br.displayName=`ComboboxTrigger`})))()}var q;function Hr(){return(Hr=t((()=>{je(),pn(),_n(),Sn(),wn(),On(),Mn(),Un(),Gn(),$n(),rr(),sr(),dr(),hr(),yr(),Cr(),jr(),Ir(),Vr(),q=Fe({ClearTrigger:()=>fn,Content:()=>gn,Context:()=>Cn,Control:()=>Dn,Empty:()=>xn,Input:()=>jn,Item:()=>Hn,ItemContext:()=>Wn,ItemGroup:()=>Qn,ItemGroupLabel:()=>nr,ItemIndicator:()=>or,ItemText:()=>ur,Label:()=>mr,List:()=>vr,Positioner:()=>Sr,Root:()=>Ar,RootProvider:()=>Fr,Trigger:()=>Br})})))()}var Ur,Wr,Gr,Kr;function qr(){return(qr=t((()=>{M(),ht(),Ur=n(),Wr=r(),Gr=j(),Kr=e=>{if(typeof e.text!=`string`)throw Error(`[ark-ui/highlight] text must be a string`);let[t,n]=Gr(e,[`query`,`text`,`ignoreCase`,`matchAll`,`exactMatch`]),r=mt(t);return(0,Wr.jsx)(Ur.Fragment,{children:r.map(({text:e,match:t},r)=>t?(0,Wr.jsx)(`mark`,{...n,children:e},r):(0,Wr.jsx)(Ur.Fragment,{children:e},r))})}})))()}var Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,J;function _i(){return(_i=t((()=>{Jr=`_root_1iyqc_45`,Yr=`_control_1iyqc_52`,Xr=`_input_1iyqc_63`,Zr=`_iconButton_1iyqc_77`,Qr=`_small_1iyqc_88`,$r=`_large_1iyqc_93`,ei=`_startAdornment_1iyqc_143`,ti=`_iconContainer_1iyqc_151`,ni=`_clearButton_1iyqc_158`,ri=`_trigger_1iyqc_186`,ii=`_positioner_1iyqc_219`,ai=`_content_1iyqc_224`,oi=`_expand_1iyqc_1`,si=`_collapse_1iyqc_1`,ci=`_itemGroup_1iyqc_285`,li=`_item_1iyqc_285`,ui=`_indicator_1iyqc_307`,di=`_itemIcon_1iyqc_308`,fi=`_itemText_1iyqc_338`,pi=`_noMatches_1iyqc_352`,mi=`_loading_1iyqc_353`,hi=`_disabled_1iyqc_360`,gi=`_invalid_1iyqc_379`,J={root:Jr,control:Yr,input:Xr,iconButton:Zr,small:Qr,large:$r,startAdornment:ei,iconContainer:ti,clearButton:ni,trigger:ri,positioner:ii,content:ai,expand:oi,collapse:si,itemGroup:ci,item:li,indicator:ui,itemIcon:di,itemText:fi,noMatches:pi,loading:mi,disabled:hi,invalid:gi}})))()}function vi(e){return e.label}function yi(e){return e.value}var bi,xi,Si,Y,X;function Ci(){return(Ci=t((()=>{bi=i(),xi=n(),Hr(),it(),cn(),qr(),pe(),Si=e(a(),1),_i(),s(),Y=r(),X=e=>{let t=(0,bi.c)(58),{id:n,options:r,loading:i,size:a,style:s,className:c,placeholder:l,disabled:u,invalid:d,onValueChange:f,onInputValueChange:ee,onOpenChange:p,locale:m,highlightMatch:te,showTrigger:ne,startAdornment:h}=e,g=r===void 0?[]:r,re=i!==void 0&&i,_=a===void 0?`default`:a,v=l===void 0?`Start typing to search...`:l,y=u!==void 0&&u,b=d!==void 0&&d,ie;t[0]===m?ie=t[1]:(ie=m===void 0?{}:m,t[0]=m,t[1]=ie);let{loading:ae,noMatches:x}=ie,oe=ae===void 0?`Loading...`:ae,S=x===void 0?`No matches found`:x,se=te===void 0||te,C=ne===void 0||ne,[ce,le]=(0,xi.useState)(``),ue;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(ue={sensitivity:`base`},t[2]=ue):ue=t[2];let de=on(ue),fe=ce?g.filter(e=>de.contains(e.label,ce)):g,pe=ct({items:fe,itemToString:vi,itemToValue:yi}),me;t[3]===ee?me=t[4]:(me=e=>{le(e.inputValue),ee?.(e.inputValue)},t[3]=ee,t[4]=me);let he=me,ge;t[5]===f?ge=t[6]:(ge=e=>{let t=e.items[0];f?.(t?.value??``)},t[5]=f,t[6]=ge);let _e=ge,ye;t[7]===p?ye=t[8]:(ye=e=>{p?.(e.open)},t[7]=p,t[8]=ye);let be=ye,xe;t[9]!==c||t[10]!==y||t[11]!==b?(xe=(0,Si.default)(J.root,{[J.disabled]:y,[J.invalid]:b},c),t[9]=c,t[10]=y,t[11]=b,t[12]=xe):xe=t[12];let Se=xe,w=q,Ce=_===`small`&&J.small,we=_===`large`&&J.large,T;t[13]!==Ce||t[14]!==we?(T=(0,Si.default)(J.control,Ce,we),t[13]=Ce,t[14]=we,t[15]=T):T=t[15];let E;t[16]===h?E=t[17]:(E=h&&(0,Y.jsx)(`span`,{className:J.startAdornment,children:h}),t[16]=h,t[17]=E);let D;t[18]===v?D=t[19]:(D=(0,Y.jsx)(q.Input,{className:J.input,placeholder:v}),t[18]=v,t[19]=D);let O;t[20]!==y||t[21]!==C||t[22]!==_?(O=(0,Y.jsx)(q.Context,{children:e=>(0,Y.jsxs)(`div`,{className:J.iconContainer,children:[e.inputValue&&!y&&(0,Y.jsx)(`button`,{type:`button`,className:J.clearButton,"aria-label":`Clear`,onClick:()=>{e.setValue([]),e.setInputValue(``)},children:(0,Y.jsx)(o,{icon:`close`,size:_===`small`?`small`:`medium`})}),C&&(0,Y.jsx)(q.Trigger,{className:J.trigger,"aria-label":`Toggle dropdown`,children:(0,Y.jsx)(o,{icon:`keyboard_arrow_down`,size:_===`small`?`small`:`medium`})})]})}),t[20]=y,t[21]=C,t[22]=_,t[23]=O):O=t[23];let k;t[24]!==T||t[25]!==E||t[26]!==D||t[27]!==O?(k=(0,Y.jsxs)(q.Control,{className:T,children:[E,D,O]}),t[24]=T,t[25]=E,t[26]=D,t[27]=O,t[28]=k):k=t[28];let Te=ve,Ee=q,De=J,Oe=q,A=J,j;t[29]!==re||t[30]!==oe?(j=re&&(0,Y.jsx)(`div`,{className:J.loading,children:oe}),t[29]=re,t[30]=oe,t[31]=j):j=t[31];let M=!re&&pe.items.length===0&&(0,Y.jsx)(`div`,{className:J.noMatches,children:S}),N=!re&&pe.items.length>0&&(0,Y.jsx)(q.ItemGroup,{className:J.itemGroup,children:pe.items.map(e=>(0,Y.jsxs)(q.Item,{item:e,className:J.item,children:[e.icon&&(0,Y.jsx)(o,{className:J.itemIcon,icon:e.icon,"aria-hidden":`true`}),(0,Y.jsx)(q.ItemText,{className:J.itemText,children:se?(0,Y.jsx)(Kr,{query:ce,text:e.label,ignoreCase:!0}):e.label})]},e.value))}),P;t[32]!==Oe.Content||t[33]!==A.content||t[34]!==j||t[35]!==M||t[36]!==N?(P=(0,Y.jsxs)(Oe.Content,{className:A.content,children:[j,M,N]}),t[32]=Oe.Content,t[33]=A.content,t[34]=j,t[35]=M,t[36]=N,t[37]=P):P=t[37];let F;t[38]!==Ee.Positioner||t[39]!==De.positioner||t[40]!==P?(F=(0,Y.jsx)(Ee.Positioner,{className:De.positioner,children:P}),t[38]=Ee.Positioner,t[39]=De.positioner,t[40]=P,t[41]=F):F=t[41];let I;t[42]!==Te||t[43]!==F?(I=(0,Y.jsx)(Te,{children:F}),t[42]=Te,t[43]=F,t[44]=I):I=t[44];let ke;return t[45]!==pe||t[46]!==y||t[47]!==he||t[48]!==be||t[49]!==_e||t[50]!==n||t[51]!==b||t[52]!==Se||t[53]!==s||t[54]!==w.Root||t[55]!==k||t[56]!==I?(ke=(0,Y.jsxs)(w.Root,{id:n,collection:pe,className:Se,style:s,disabled:y,invalid:b,onInputValueChange:he,onValueChange:_e,onOpenChange:be,closeOnSelect:!0,lazyMount:!0,unmountOnExit:!0,children:[k,I]}),t[45]=pe,t[46]=y,t[47]=he,t[48]=be,t[49]=_e,t[50]=n,t[51]=b,t[52]=Se,t[53]=s,t[54]=w.Root,t[55]=k,t[56]=I,t[57]=ke):ke=t[57],ke},X.displayName=`DsAutocomplete`})))()}var wi;function Ti(){return(Ti=t((()=>{wi=[`small`,`default`,`large`]})))()}var Ei,Di;function Oi(){return(Oi=t((()=>{Ei=`_field_1f04r_1`,Di={field:Ei}})))()}var Z,Q,ki,Ai,ji,Mi,Ni,$,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui;function Wi(){return(Wi=t((()=>{Z=n(),vt(),s(),St(),bt(),_t(),Ci(),Ti(),Oi(),Q=r(),ki={title:`Components/Autocomplete`,component:X,parameters:{layout:`centered`},decorators:[e=>(0,Q.jsx)(`div`,{className:Di.field,children:(0,Q.jsx)(e,{})})],argTypes:{options:{control:`object`},size:{control:`select`,options:wi},placeholder:{control:`text`},highlightMatch:{control:`boolean`},showTrigger:{control:`boolean`},loading:{control:`boolean`},disabled:{control:`boolean`},invalid:{control:`boolean`},locale:{control:`object`},startAdornment:{control:!1},onValueChange:{action:`valueChange`},onInputValueChange:{action:`inputValueChange`},onOpenChange:{action:`openChange`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},Ai={args:{placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},ji={render:()=>(0,Q.jsx)(X,{showTrigger:!1,placeholder:`Start typing to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]})},Mi={args:{showTrigger:!1,startAdornment:(0,Q.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`,options:[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]}},Ni={args:{placeholder:`Select a fruit...`,options:[{value:`apple`,label:`Apple`,icon:`nutrition`},{value:`banana`,label:`Banana`,icon:`nutrition`},{value:`cherry`,label:`Cherry`,icon:`nutrition`}]}},$={render:()=>(0,Q.jsx)(X,{highlightMatch:!1,placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]})},Pi={args:{loading:!0,placeholder:`Loading options...`,options:[]}},Fi={args:{disabled:!0,placeholder:`Disabled autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},Ii={args:{invalid:!0,placeholder:`Invalid autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},Li={args:{locale:{loading:`Fetching...`,noMatches:`No matching options found`},placeholder:`Search or type...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},Ri={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Z.useState)([]),[r,i]=(0,Z.useState)(!1),a=async e=>{if(!e){n([]);return}i(!0),await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}].filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),i(!1)};return(0,Q.jsx)(X,{...e,options:t,loading:r,onInputValueChange:a,showTrigger:!1,startAdornment:(0,Q.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries (async)...`,locale:{noMatches:`No results found`}})}},zi={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Z.useState)([]),[r,i]=(0,Z.useState)(!0);return(0,Z.useEffect)(()=>{(async()=>{await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]),i(!1)})()},[]),(0,Q.jsx)(X,{...e,options:t,loading:r,placeholder:`Select a country...`})}},Bi={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Z.useState)(!1);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(yt,{onClick:()=>n(!0),children:`Assign owner`}),(0,Q.jsxs)(xt,{open:t,onOpenChange:n,columns:4,children:[(0,Q.jsxs)(xt.Header,{children:[(0,Q.jsx)(xt.Title,{children:`Assign owner`}),(0,Q.jsx)(xt.CloseTrigger,{})]}),(0,Q.jsx)(xt.Body,{children:(0,Q.jsx)(X,{...e,placeholder:`Search team members...`,options:[{value:`alice`,label:`Alice Cohen`},{value:`bob`,label:`Bob Levi`},{value:`carol`,label:`Carol Smith`}]})})]})]})}},Vi={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}];return(0,Q.jsxs)(R,{direction:`column`,gap:`var(--standard)`,width:`320px`,children:[(0,Q.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(gt,{variant:`body-xs-reg`,color:`secondary`,children:`Large`}),(0,Q.jsx)(X,{options:e,size:`large`,placeholder:`Large autocomplete`})]}),(0,Q.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(gt,{variant:`body-xs-reg`,color:`secondary`,children:`Default`}),(0,Q.jsx)(X,{options:e,size:`default`,placeholder:`Default autocomplete`})]}),(0,Q.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(gt,{variant:`body-xs-reg`,color:`secondary`,children:`Small`}),(0,Q.jsx)(X,{options:e,size:`small`,placeholder:`Small autocomplete`})]})]})}},Hi={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}];return(0,Q.jsxs)(R,{direction:`column`,gap:`var(--standard)`,width:`320px`,children:[(0,Q.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(gt,{variant:`body-xs-reg`,color:`secondary`,children:`Disabled`}),(0,Q.jsx)(X,{options:e,disabled:!0,placeholder:`Disabled autocomplete`})]}),(0,Q.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Q.jsx)(gt,{variant:`body-xs-reg`,color:`secondary`,children:`Invalid`}),(0,Q.jsx)(X,{options:e,invalid:!0,placeholder:`Invalid autocomplete`})]})]})}},Ui=[`Default`,`SearchMode`,`WithStartAdornment`,`WithOptionIcons`,`WithoutHighlight`,`Loading`,`Disabled`,`Invalid`,`Localized`,`AsyncSearch`,`AsyncOptions`,`InsideModal`,`Sizes`,`States`],Ai.parameters={...Ai.parameters,docs:{...Ai.parameters?.docs,source:{originalSource:`{
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
}`,...Ai.parameters?.docs?.source},description:{story:`The default autocomplete opens its dropdown from the trigger arrow or by typing,
and highlights the matching text while the list is filtered. Reach for this when the
user should be able to both browse the full list and search within it.`,...Ai.parameters?.docs?.description}}},ji.parameters={...ji.parameters,docs:{...ji.parameters?.docs,source:{originalSource:`{
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
}`,...ji.parameters?.docs?.source},description:{story:`Search mode hides the trigger arrow so the list only opens while typing. Use it for
search-style inputs where a persistent dropdown affordance would imply a short, fixed list.`,...ji.parameters?.docs?.description}}},Mi.parameters={...Mi.parameters,docs:{...Mi.parameters?.docs,source:{originalSource:`{
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
}`,...Mi.parameters?.docs?.source},description:{story:"A `startAdornment` renders content before the input — most often a search icon — to\nreinforce the search intent without adding a separate label.",...Mi.parameters?.docs?.description}}},Ni.parameters={...Ni.parameters,docs:{...Ni.parameters?.docs,source:{originalSource:`{
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
}`,...Ni.parameters?.docs?.source},description:{story:"Each option can carry an `icon` that renders alongside its label, useful for giving\noptions a recognizable visual anchor.",...Ni.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Disable match highlighting when the emphasized `mark` styling would compete with the\noption content, or when matches are handled server-side and no local query is available.",...$.parameters?.docs?.description}}},Pi.parameters={...Pi.parameters,docs:{...Pi.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    placeholder: 'Loading options...',
    options: []
  }
}`,...Pi.parameters?.docs?.source},description:{story:"While `loading` is true a loading message replaces the option list, signalling that\nresults are being fetched. Pair it with server-driven `options` (see AsyncSearch).",...Pi.parameters?.docs?.description}}},Fi.parameters={...Fi.parameters,docs:{...Fi.parameters?.docs,source:{originalSource:`{
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
}`,...Fi.parameters?.docs?.source},description:{story:`The disabled state blocks all interaction and dims the control. Use it when the field
depends on another selection that has not been made yet.`,...Fi.parameters?.docs?.description}}},Ii.parameters={...Ii.parameters,docs:{...Ii.parameters?.docs,source:{originalSource:`{
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
}`,...Ii.parameters?.docs?.source},description:{story:`The invalid state applies an error border for use with external validation — the input
stays focusable so the user can correct their entry.`,...Ii.parameters?.docs?.description}}},Li.parameters={...Li.parameters,docs:{...Li.parameters?.docs,source:{originalSource:`{
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
}`,...Li.parameters?.docs?.source},description:{story:"The `locale` prop overrides the loading and empty-state messages so the component can be\ntranslated. Only the strings passed are overridden; omitted keys keep their defaults.",...Li.parameters?.docs?.description}}},Ri.parameters={...Ri.parameters,docs:{...Ri.parameters?.docs,source:{originalSource:`{
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
}`,...Ri.parameters?.docs?.source},description:{story:"For server-driven search, keep the fetched results in local state and feed them back via\n`options` while toggling `loading`. This is the recommended pattern for large or remote\ndatasets that should not be filtered on the client.",...Ri.parameters?.docs?.description}}},zi.parameters={...zi.parameters,docs:{...zi.parameters?.docs,source:{originalSource:`{
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
}`,...zi.parameters?.docs?.source},description:{story:"When the full option set is fetched once on mount, start in a `loading` state and swap in\nthe results when the request resolves. After that the component filters locally.",...zi.parameters?.docs?.description}}},Bi.parameters={...Bi.parameters,docs:{...Bi.parameters?.docs,source:{originalSource:`{
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
}`,...Bi.parameters?.docs?.source},description:{story:"DsAutocomplete can be placed inside a DsModal (or DsDialog). The dropdown opens over the\nmodal content, and its options stay exposed to assistive technology as a `listbox` of\n`option`s, so screen reader users can pick a value without any extra wiring.",...Bi.parameters?.docs?.description}}},Vi.parameters={...Vi.parameters,docs:{...Vi.parameters?.docs,source:{originalSource:`{
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
            </DsStack>;
  }
}`,...Vi.parameters?.docs?.source}}},Hi.parameters={...Hi.parameters,docs:{...Hi.parameters?.docs,source:{originalSource:`{
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
            </DsStack>;
  }
}`,...Hi.parameters?.docs?.source},description:{story:`Visual comparison of the disabled and invalid states side by side. Reference only —
behavior for each state is covered by the individual stories and browser tests.`,...Hi.parameters?.docs?.description}}}})))()}Wi();export{zi as AsyncOptions,Ri as AsyncSearch,Ai as Default,Fi as Disabled,Bi as InsideModal,Ii as Invalid,Pi as Loading,Li as Localized,ji as SearchMode,Vi as Sizes,Hi as States,Ni as WithOptionIcons,Mi as WithStartAdornment,$ as WithoutHighlight,Ui as __namedExportsOrder,ki as default};