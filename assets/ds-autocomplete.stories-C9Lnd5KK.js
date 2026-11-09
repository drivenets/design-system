import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r}from"./iframe-BUfpyP-J.js";import{n as i,t as a}from"./classnames-BngcLiyu.js";import{n as o,t as s}from"./ds-icon-Bkp4tLuH.js";import{E as c,F as l,K as u,O as d,St as f,V as ee,_t as p,b as m,c as h,h as te,ht as g,i as ne,l as _,m as v,mt as y,n as b,r as x,rt as re,s as ie,t as ae,tt as S,x as C,xt as oe}from"./normalize-props-BDW4W1cu.js";import{a as w,n as T,r as E,t as D}from"./raf-D1nJPjhp.js";import{B as se,S as ce,W as O,a as le,b as ue,c as k,d as de,f as fe,i as pe,l as me,m as he,o as ge,p as _e,s as ve,u as ye,v as be,x as xe,y as Se}from"./ds-tooltip-BzsjEG2u.js";import{C as Ce,D as A,M as we,N as Te,T as Ee,a as De,c as j,d as M,f as N,g as P,h as F,i as I,l as Oe,m as L,n as ke,o as Ae,p as je,r as Me,s as R,t as Ne,u as Pe,v as Fe,w as Ie}from"./runtime-B00ETiTt.js";import{n as Le,t as Re}from"./caret-OM1hl62y.js";import{r as ze,t as Be}from"./dismissable-layer-Ryk4Th5b.js";import{n as Ve,r as He}from"./mutation-observer-DEAESj4t.js";import{n as Ue,r as We,t as Ge}from"./navigate-SzFJPNE_.js";import{n as Ke,t as qe}from"./scroll-Bm_M6DiP.js";import{n as Je,t as Ye}from"./equal-COyPOATC.js";import{i as Xe,o as Ze,r as Qe,s as $e}from"./use-event-Dv3-2P24.js";import{a as et,c as tt,i as nt,n as rt,o as it,r as at,s as ot,t as st}from"./list-collection-DKPjRuOv.js";import{n as ct,t as lt}from"./dist-bdyaRVo6.js";import{t as ut}from"./cache-BupmKqjL.js";import{n as dt,t as ft}from"./use-field-context-HkzxdP0o.js";import{n as pt,t as mt}from"./highlight-vMh3yi2z.js";import{n as z,t as ht}from"./ds-typography-Cu8kQI9H.js";import{n as gt,t as _t}from"./ds-button-v3-D9jXBURW.js";import{n as vt,t as B}from"./ds-stack-CI9fJJ0W.js";import{t as yt}from"./ds-modal-CRiS1Kcr.js";import{t as bt}from"./ds-modal-DbiAG1rj.js";import{t as xt}from"./ds-tag-DjyjVzjC.js";import{t as St}from"./ds-tag-B_KFvbUH.js";var Ct,V;function wt(){return(wt=t((()=>{f(),Ct=oe(`combobox`).parts(`root`,`clearTrigger`,`content`,`control`,`input`,`item`,`itemGroup`,`itemGroupLabel`,`itemIndicator`,`itemText`,`label`,`list`,`positioner`,`trigger`),V=Ct.build()})))()}var Tt;function Et(){return(Et=t((()=>{tt(),Tt=e=>new ot(e),Tt.empty=()=>new ot({items:[]})})))()}var Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,H,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt;function qt(){return(qt=t((()=>{se(),Re(),Dt=e=>e.ids?.root??`combobox:${e.id}`,Ot=e=>e.ids?.label??`combobox:${e.id}:label`,kt=e=>e.ids?.control??`combobox:${e.id}:control`,At=e=>e.ids?.input??`combobox:${e.id}:input`,jt=e=>e.ids?.content??`combobox:${e.id}:content`,Mt=e=>e.ids?.positioner??`combobox:${e.id}:popper`,Nt=e=>e.ids?.trigger??`combobox:${e.id}:toggle-btn`,Pt=e=>e.ids?.clearTrigger??`combobox:${e.id}:clear-btn`,Ft=(e,t)=>e.ids?.itemGroup?.(t)??`combobox:${e.id}:optgroup:${t}`,It=(e,t)=>e.ids?.itemGroupLabel?.(t)??`combobox:${e.id}:optgroup-label:${t}`,Lt=(e,t)=>e.ids?.item?.(t)??`combobox:${e.id}:option:${t}`,Rt=e=>e.getById(Dt(e)),H=e=>e.getById(jt(e)),zt=e=>e.getById(At(e)),Bt=e=>e.getById(Mt(e)),Vt=e=>e.getById(kt(e)),Ht=e=>e.getById(Nt(e)),Ut=e=>e.getById(Pt(e)),Wt=(e,t)=>{if(t==null)return null;let n=`[role=option][data-value="${CSS.escape(t)}"]`;return O(H(e),n)},Gt=e=>{let t=zt(e);e.isActiveElement(t)||t?.focus({preventScroll:!0}),Le(t)},Kt=e=>{let t=Ht(e);e.isActiveElement(t)||t?.focus({preventScroll:!0})}})))()}var Jt;function Yt(){return(Yt=t((()=>{Jt={triggerLabel:`Toggle suggestions`,clearTriggerLabel:`Clear value`,resultsCount:e=>e===1?`1 result`:`${e} results`,noResults:`No results`,loading:`Loading results`}})))()}function Xt(e,t){let{context:n,prop:r,state:i,send:a,scope:o,computed:s}=e,c=te(Jt,r(`translations`)),l=r(`collection`),u=!!r(`disabled`),d=s(`isInteractive`),f=!!r(`invalid`),ee=!!r(`required`),p=!!r(`readOnly`),m=i.hasTag(`open`),h=!!r(`loading`),ne=i.hasTag(`focused`),v=r(`composite`),b=n.get(`highlightedValue`),x=n.get(`currentPlacement`),ie=x?ce(x):void 0,ae=be({...r(`positioning`),placement:x});function S(e){let t=l.getItemDisabled(e.item),r=l.getItemValue(e.item);return _(r,()=>`[zag-js] No value found for item ${JSON.stringify(e.item)}`),{value:r,disabled:!!(u||t),highlighted:b===r,selected:n.get(`value`).includes(r)}}return{focused:ne,open:m,loading:h,inputValue:n.get(`inputValue`),highlightedValue:b,highlightedItem:n.get(`highlightedItem`),value:n.get(`value`),valueAsString:s(`valueAsString`),hasSelectedItems:s(`hasSelectedItems`),selectedItems:s(`selectedItems`),collection:r(`collection`),multiple:!!r(`multiple`),disabled:!!u,syncSelectedItems(){a({type:`SELECTED_ITEMS.SYNC`})},reposition(e={}){a({type:`POSITIONING.SET`,options:e})},setHighlightValue(e){a({type:`HIGHLIGHTED_VALUE.SET`,value:e})},clearHighlightValue(){a({type:`HIGHLIGHTED_VALUE.CLEAR`})},selectValue(e){a({type:`ITEM.SELECT`,value:e})},setValue(e){a({type:`VALUE.SET`,value:e})},setInputValue(e,t=`script`){a({type:`INPUT_VALUE.SET`,value:e,src:t})},clearValue(e){a(e==null?{type:`VALUE.CLEAR`}:{type:`ITEM.CLEAR`,value:e})},focus(){zt(o)?.focus()},setOpen(e,t=`script`){a({type:e?`OPEN`:`CLOSE`,src:t,replaces:`open`})},getRootProps(){return t.element({...V.root.attrs,dir:r(`dir`),id:Dt(o),"data-invalid":g(f),"data-readonly":g(p)})},getLabelProps(){return t.label({...V.label.attrs,dir:r(`dir`),htmlFor:At(o),id:Ot(o),"data-readonly":g(p),"data-disabled":g(u),"data-invalid":g(f),"data-required":g(ee),"data-focus":g(ne),onClick(e){v||(e.preventDefault(),Ht(o)?.focus({preventScroll:!0}))}})},getControlProps(){return t.element({...V.control.attrs,dir:r(`dir`),id:kt(o),"data-state":m?`open`:`closed`,"data-focus":g(ne),"data-disabled":g(u),"data-invalid":g(f)})},getPositionerProps(){return t.element({...V.positioner.attrs,dir:r(`dir`),id:Mt(o),style:ae.floating})},getInputProps(){return t.input({...V.input.attrs,dir:r(`dir`),"aria-invalid":y(f),"data-invalid":g(f),"data-autofocus":g(r(`autoFocus`)),name:r(`name`),form:r(`form`),disabled:u,required:r(`required`),autoComplete:`off`,autoCorrect:`off`,autoCapitalize:`none`,spellCheck:`false`,readOnly:p,placeholder:r(`placeholder`),id:At(o),type:`text`,role:`combobox`,defaultValue:n.get(`inputValue`),"aria-autocomplete":s(`autoComplete`)?`both`:`list`,"aria-controls":jt(o),"aria-expanded":m,"data-state":m?`open`:`closed`,"aria-activedescendant":b?Lt(o,b):void 0,onClick(e){e.defaultPrevented||r(`openOnClick`)&&d&&a({type:`INPUT.CLICK`,src:`input-click`})},onFocus(){u||a({type:`INPUT.FOCUS`})},onBlur(){u||a({type:`INPUT.BLUR`})},onChange(e){a({type:`INPUT.CHANGE`,value:e.currentTarget.value,src:`input-change`})},onKeyDown(e){if(e.defaultPrevented||!d||Ie(e)||(e.ctrlKey||e.shiftKey)&&e.key!==`Enter`)return;let t=r(`openOnKeyPress`),n=e.ctrlKey||e.metaKey||e.shiftKey,i={ArrowDown(e){(t||m)&&(a({type:e.altKey?`OPEN`:`INPUT.ARROW_DOWN`,keypress:!0,src:`arrow-key`}),e.preventDefault())},ArrowUp(){(t||m)&&(a({type:e.altKey?`CLOSE`:`INPUT.ARROW_UP`,keypress:!0,src:`arrow-key`}),e.preventDefault())},Home(e){n||(a({type:`INPUT.HOME`,keypress:!0}),m&&e.preventDefault())},End(e){n||(a({type:`INPUT.END`,keypress:!0}),m&&e.preventDefault())},Enter(e){a({type:`INPUT.ENTER`,keypress:!0,src:`item-select`,modifiers:Ue(e)});let t=b!=null,n=r(`alwaysSubmitOnEnter`),i=s(`isCustomValue`)&&!r(`allowCustomValue`);if(m&&!n&&(t||i)&&e.preventDefault(),b==null)return;let c=Wt(o,b);re(c)&&r(`navigate`)?.({value:b,node:c,href:c.href,modifiers:Ue(e)})},Escape(){a({type:`INPUT.ESCAPE`,keypress:!0,src:`escape-key`}),e.preventDefault()}}[Fe(e,{dir:r(`dir`)})];i?.(e)}})},getTriggerProps(e={}){return t.button({...V.trigger.attrs,dir:r(`dir`),id:Nt(o),"aria-haspopup":v?`listbox`:`dialog`,type:`button`,tabIndex:e.focusable?void 0:-1,"aria-label":c.triggerLabel,"aria-expanded":m,"data-state":m?`open`:`closed`,"aria-controls":m?jt(o):void 0,disabled:u,"data-invalid":g(f),"data-focusable":g(e.focusable),"data-readonly":g(p),"data-disabled":g(u),onFocus(){e.focusable&&a({type:`INPUT.FOCUS`,src:`trigger`})},onClick(e){e.defaultPrevented||d&&A(e)&&a({type:`TRIGGER.CLICK`,src:`trigger-click`})},onPointerDown(e){d&&e.pointerType!==`touch`&&A(e)&&(e.preventDefault(),queueMicrotask(()=>{Gt(o)}))},onKeyDown(e){if(e.defaultPrevented||v)return;let t={ArrowDown(){a({type:`INPUT.ARROW_DOWN`,src:`arrow-key`})},ArrowUp(){a({type:`INPUT.ARROW_UP`,src:`arrow-key`})}}[Fe(e,{dir:r(`dir`)})];t&&(t(e),e.preventDefault())}})},getContentProps(){return t.element({...V.content.attrs,dir:r(`dir`),id:jt(o),role:v?`listbox`:`dialog`,tabIndex:-1,hidden:!m,"data-state":m?`open`:`closed`,"data-placement":x,"data-side":ie,"aria-labelledby":Ot(o),"aria-multiselectable":r(`multiple`)&&v?!0:void 0,"aria-busy":v?y(h):void 0,"data-empty":g(l.size===0),"data-loading":g(h),onPointerDown(e){A(e)&&e.preventDefault()}})},getListProps(){return t.element({...V.list.attrs,role:v?void 0:`listbox`,"data-empty":g(l.size===0),"aria-labelledby":Ot(o),"aria-multiselectable":r(`multiple`)&&!v?!0:void 0,"aria-busy":v?void 0:y(h),"data-loading":g(h)})},getClearTriggerProps(){return t.button({...V.clearTrigger.attrs,dir:r(`dir`),id:Pt(o),type:`button`,tabIndex:-1,disabled:u,"data-invalid":g(f),"aria-label":c.clearTriggerLabel,"aria-controls":At(o),hidden:!n.get(`value`).length,onPointerDown(e){A(e)&&e.preventDefault()},onClick(e){e.defaultPrevented||d&&a({type:`VALUE.CLEAR`,src:`clear-trigger`})}})},getItemState:S,getItemProps(e){let n=S(e),i=n.value;return t.element({...V.item.attrs,dir:r(`dir`),id:Lt(o,i),role:`option`,tabIndex:-1,"data-highlighted":g(n.highlighted),"data-state":n.selected?`checked`:`unchecked`,"aria-selected":n.selected,"aria-disabled":y(n.disabled),"data-disabled":g(n.disabled),"data-value":n.value,onPointerMove(){n.disabled||Qe()===`pointer`&&(n.highlighted||a({type:`ITEM.POINTER_MOVE`,value:i}))},onPointerLeave(){e.persistFocus||n.disabled||Qe()===`pointer`&&a({type:`ITEM.POINTER_LEAVE`,value:i})},onClick(e){Ee(e)||n.disabled||a({type:`ITEM.CLICK`,src:`item-select`,value:i,modifiers:Ue(e)})}})},getItemTextProps(e){let n=S(e);return t.element({...V.itemText.attrs,dir:r(`dir`),"data-state":n.selected?`checked`:`unchecked`,"data-disabled":g(n.disabled),"data-highlighted":g(n.highlighted)})},getItemIndicatorProps(e){let n=S(e);return t.element({"aria-hidden":!0,...V.itemIndicator.attrs,dir:r(`dir`),"data-state":n.selected?`checked`:`unchecked`,hidden:!n.selected})},getItemGroupProps(e){let{id:n}=e;return t.element({...V.itemGroup.attrs,dir:r(`dir`),id:Ft(o,n),"aria-labelledby":It(o,n),"data-empty":g(l.size===0),role:`group`})},getItemGroupLabelProps(e){let{htmlFor:n}=e;return t.element({...V.itemGroupLabel.attrs,dir:r(`dir`),id:It(o,n),role:`presentation`})}}}function Zt(){return(Zt=t((()=>{p(),Ce(),We(),S(),Xe(),Se(),v(),wt(),qt(),Yt()})))()}function Qt(e){return(e.previousEvent||e).src}function $t(e){let t=te(Jt,e(`translations`));if(e(`loading`))return t.loading;let n=e(`collection`).size;return n===0?t.noResults:t.resultsCount(n)}var en,tn,nn,U,W,rn,an;function on(){return(on=t((()=>{et(),ie(),Be(),T(),We(),we(),Ve(),qe(),Re(),Xe(),ct(),xe(),ee(),c(),Ye(),m(),v(),Et(),qt(),Yt(),{guards:en,createMachine:tn,choose:nn}=h(),{and:U,not:W}=en,rn=1e3,an=tn({props({props:e}){return{loopFocus:!0,openOnClick:!1,defaultValue:[],defaultInputValue:``,closeOnSelect:!e.multiple,allowCustomValue:!1,alwaysSubmitOnEnter:!1,inputBehavior:`none`,selectionBehavior:e.multiple?`clear`:`replace`,openOnKeyPress:!0,openOnChange:!0,composite:!0,navigate(e){Ge(e.node,e.modifiers)},collection:Tt.empty(),...e,positioning:{placement:`bottom`,sameWidth:!0,...e.positioning}}},initialState({prop:e}){return e(`open`)||e(`defaultOpen`)?`open.suggesting`:`closed.idle`},refs(){return{liveRegion:null,resultsRegion:null,finalFocusFrame:D.create(),highlightFrame:D.create()}},exit:[`cancelFinalFocus`,`cancelHighlightFrame`],context({prop:e,bindable:t,getContext:n,getEvent:r}){let i=e(`value`)??e(`defaultValue`)??[],a=e(`collection`).findMany(i);return{currentPlacement:t(()=>({defaultValue:void 0})),value:t(()=>({defaultValue:e(`defaultValue`),value:e(`value`),isEqual:Je,hash(e){return e.join(`,`)},onChange(t){let r=n(),i=e(`collection`),a=r.get(`selectedItemMap`),o=nt({values:t,collection:i,selectedItemMap:a}),s=e(`value`)??t,c=s===t?o:nt({values:s,collection:i,selectedItemMap:o.nextSelectedItemMap});r.set(`selectedItemMap`,c.nextSelectedItemMap),e(`onValueChange`)?.({value:t,items:o.selectedItems})}})),highlightedValue:t(()=>({defaultValue:e(`defaultHighlightedValue`)||null,value:e(`highlightedValue`),onChange(t){let n=e(`collection`).find(t);e(`onHighlightChange`)?.({highlightedValue:t,highlightedItem:n})}})),inputValue:t(()=>{let t=e(`inputValue`)||e(`defaultInputValue`),n=e(`value`)||e(`defaultValue`);if(!t.trim()&&!e(`multiple`)){let r=e(`collection`).stringifyMany(n);t=C(e(`selectionBehavior`),{preserve:t||r,replace:r,clear:``})}return{defaultValue:t,value:e(`inputValue`),onChange(t){let n=r(),i=(n.previousEvent||n).src;e(`onInputValueChange`)?.({inputValue:t,reason:i})}}}),highlightedItem:t(()=>{let t=e(`highlightedValue`);return{defaultValue:e(`collection`).find(t)}}),selectedItemMap:t(()=>({defaultValue:at({selectedItems:a,collection:e(`collection`)})}))}},computed:{isInputValueEmpty:({context:e})=>e.get(`inputValue`).length===0,isInteractive:({prop:e})=>!(e(`readOnly`)||e(`disabled`)),autoComplete:({prop:e})=>e(`inputBehavior`)===`autocomplete`,autoHighlight:({prop:e})=>e(`inputBehavior`)===`autohighlight`,hasSelectedItems:({context:e})=>e.get(`value`).length>0,selectedItems:({context:e,prop:t})=>it({values:e.get(`value`),collection:t(`collection`),selectedItemMap:e.get(`selectedItemMap`)}),valueAsString:({computed:e,prop:t})=>t(`collection`).stringifyItems(e(`selectedItems`)),isCustomValue:({context:e,computed:t})=>e.get(`inputValue`)!==t(`valueAsString`)},watch({context:e,prop:t,track:n,action:r,send:i}){n([()=>e.hash(`value`)],()=>{r([`syncSelectedItems`])}),n([()=>e.get(`inputValue`)],()=>{r([`syncInputValue`,`announceResults`])}),n([()=>e.get(`highlightedValue`)],()=>{r([`syncHighlightedItem`,`autofillInputValue`,`announceHighlightedItem`])}),n([()=>t(`open`)],()=>{r([`toggleVisibility`])}),n([()=>t(`collection`).toString()],()=>{i({type:`CHILDREN_CHANGE`}),r([`announceResults`])}),n([()=>t(`loading`)],()=>{r([`announceResults`])})},on:{"SELECTED_ITEMS.SYNC":{actions:[`syncSelectedItems`]},"HIGHLIGHTED_VALUE.SET":{actions:[`setHighlightedValue`]},"HIGHLIGHTED_VALUE.CLEAR":{actions:[`clearHighlightedValue`]},"ITEM.SELECT":{actions:[`selectItem`]},"ITEM.CLEAR":{actions:[`clearItem`]},"VALUE.SET":{actions:[`setValue`]},"INPUT_VALUE.SET":{actions:[`setInputValue`]},"POSITIONING.SET":{actions:[`reposition`]}},entry:nn([{guard:`autoFocus`,actions:[`setInitialFocus`]}]),states:{closed:{tags:[`closed`],initial:`idle`,states:{idle:{tags:[`idle`],entry:[`scrollContentToTop`,`clearHighlightedValue`],on:{"CONTROLLED.OPEN":{target:`open.interacting`},"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.CLICK":[{guard:`isOpenControlled`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.FOCUS":{target:`focused`},OPEN:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open.interacting`,actions:[`invokeOnOpen`]}],"VALUE.CLEAR":{target:`focused`,actions:[`clearInputValue`,`clearSelectedItems`,`setInitialFocus`]}}},focused:{tags:[`focused`],entry:[`scrollContentToTop`,`clearHighlightedValue`],exit:[`cancelFinalFocus`],on:{"CONTROLLED.OPEN":[{guard:`isChangeEvent`,target:`open.suggesting`},{target:`open.interacting`}],"INPUT.CHANGE":[{guard:U(`isOpenControlled`,`openOnChange`),actions:[`setInputValue`,`invokeOnOpen`,`highlightFirstItemIfNeeded`]},{guard:`openOnChange`,target:`open.suggesting`,actions:[`setInputValue`,`invokeOnOpen`,`highlightFirstItemIfNeeded`]},{actions:[`setInputValue`]}],"LAYER.INTERACT_OUTSIDE":{target:`idle`},"INPUT.ESCAPE":{guard:U(`isCustomValue`,W(`allowCustomValue`)),actions:[`revertInputValue`]},"INPUT.BLUR":{target:`idle`},"INPUT.CLICK":[{guard:`isOpenControlled`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]}],"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.ARROW_DOWN":[{guard:U(`isOpenControlled`,`autoComplete`),actions:[`invokeOnOpen`]},{guard:`autoComplete`,target:`open.interacting`,actions:[`invokeOnOpen`]},{guard:`isOpenControlled`,actions:[`highlightFirstOrSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstOrSelectedItem`,`invokeOnOpen`]}],"INPUT.ARROW_UP":[{guard:U(`isOpenControlled`,`autoComplete`),actions:[`invokeOnOpen`]},{guard:`autoComplete`,target:`open.interacting`,actions:[`invokeOnOpen`]},{guard:`isOpenControlled`,actions:[`highlightLastOrSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightLastOrSelectedItem`,`invokeOnOpen`]}],OPEN:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open.interacting`,actions:[`invokeOnOpen`]}],"VALUE.CLEAR":{actions:[`clearInputValue`,`clearSelectedItems`]}}}}},open:{tags:[`open`,`focused`],entry:[`setInitialFocus`],exit:[`cancelHighlightFrame`],effects:[`trackFocusVisible`,`scrollToHighlightedItem`,`trackDismissableLayer`,`trackPlacement`,`trackLiveRegion`],on:{"CONTROLLED.CLOSE":[{guard:`restoreFocus`,target:`closed.focused`,actions:[`setFinalFocus`]},{target:`closed.idle`}],"INPUT.ENTER":[{guard:U(`isOpenControlled`,`isCustomValue`,W(`hasHighlightedItem`),W(`allowCustomValue`)),actions:[`revertInputValue`,`invokeOnClose`]},{guard:U(`isCustomValue`,W(`hasHighlightedItem`),W(`allowCustomValue`)),target:`closed.focused`,actions:[`revertInputValue`,`invokeOnClose`]},{guard:U(`isOpenControlled`,`closeOnSelect`),actions:[`selectHighlightedItem`,`invokeOnClose`]},{guard:`closeOnSelect`,target:`closed.focused`,actions:[`selectHighlightedItem`,`invokeOnClose`,`setFinalFocus`]},{actions:[`selectHighlightedItem`]}],"ITEM.CLICK":[{guard:U(`isOpenControlled`,`closeOnSelect`),actions:[`selectItem`,`invokeOnClose`]},{guard:`closeOnSelect`,target:`closed.focused`,actions:[`selectItem`,`invokeOnClose`,`setFinalFocus`]},{actions:[`selectItem`]}],"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`]}],"LAYER.INTERACT_OUTSIDE":[{guard:U(`isOpenControlled`,`isCustomValue`,W(`allowCustomValue`)),actions:[`revertInputValue`,`invokeOnClose`]},{guard:U(`isCustomValue`,W(`allowCustomValue`)),target:`closed.idle`,actions:[`revertInputValue`,`invokeOnClose`]},{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.idle`,actions:[`invokeOnClose`]}],CLOSE:[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`,`setFinalFocus`]}],"VALUE.CLEAR":[{guard:`isOpenControlled`,actions:[`clearInputValue`,`clearSelectedItems`,`invokeOnClose`,`scrollContentToTop`]},{target:`closed.focused`,actions:[`clearInputValue`,`clearSelectedItems`,`invokeOnClose`,`setFinalFocus`]}]},initial:`interacting`,states:{interacting:{on:{CHILDREN_CHANGE:[{guard:U(`isHighlightedItemRemoved`,`hasCollectionItems`,`autoHighlight`),actions:[`clearHighlightedValue`,`highlightFirstItem`]},{guard:`isHighlightedItemRemoved`,actions:[`clearHighlightedValue`]},{actions:[`scrollToHighlightedItem`]}],"INPUT.HOME":{actions:[`highlightFirstItem`]},"INPUT.END":{actions:[`highlightLastItem`]},"INPUT.ARROW_DOWN":[{guard:U(`autoComplete`,`isLastItemHighlighted`),actions:[`clearHighlightedValue`,`scrollContentToTop`]},{actions:[`highlightNextItem`]}],"INPUT.ARROW_UP":[{guard:U(`autoComplete`,`isFirstItemHighlighted`),actions:[`clearHighlightedValue`]},{actions:[`highlightPrevItem`]}],"INPUT.CHANGE":[{guard:`autoComplete`,target:`suggesting`,actions:[`setInputValue`,`scrollContentToTop`]},{target:`suggesting`,actions:[`clearHighlightedValue`,`setInputValue`,`scrollContentToTop`]}],"ITEM.POINTER_MOVE":{actions:[`setHighlightedValue`]},"ITEM.POINTER_LEAVE":{actions:[`clearHighlightedValue`]},"LAYER.ESCAPE":[{guard:U(`isOpenControlled`,`autoComplete`),actions:[`syncInputValue`,`invokeOnClose`]},{guard:`autoComplete`,target:`closed.focused`,actions:[`syncInputValue`,`invokeOnClose`]},{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`,`setFinalFocus`]}]}},suggesting:{exit:[`cancelResultsAnnouncement`],on:{CHILDREN_CHANGE:[{guard:U(`isHighlightedItemRemoved`,`hasCollectionItems`,`autoHighlight`),actions:[`clearHighlightedValue`,`highlightFirstItem`]},{guard:`isHighlightedItemRemoved`,actions:[`clearHighlightedValue`]},{guard:`autoHighlight`,actions:[`highlightFirstItem`]}],"INPUT.ARROW_DOWN":{target:`interacting`,actions:[`highlightNextItem`]},"INPUT.ARROW_UP":{target:`interacting`,actions:[`highlightPrevItem`]},"INPUT.HOME":{target:`interacting`,actions:[`highlightFirstItem`]},"INPUT.END":{target:`interacting`,actions:[`highlightLastItem`]},"INPUT.CHANGE":{actions:[`setInputValue`,`scrollContentToTop`]},"LAYER.ESCAPE":[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`]}],"ITEM.POINTER_MOVE":{target:`interacting`,actions:[`setHighlightedValue`]},"ITEM.POINTER_LEAVE":{actions:[`clearHighlightedValue`]}}}}}},implementations:{guards:{isInputValueEmpty:({computed:e})=>e(`isInputValueEmpty`),autoComplete:({computed:e,prop:t})=>e(`autoComplete`)&&!t(`multiple`),autoHighlight:({computed:e})=>e(`autoHighlight`),isFirstItemHighlighted:({prop:e,context:t})=>e(`collection`).firstValue===t.get(`highlightedValue`),isLastItemHighlighted:({prop:e,context:t})=>e(`collection`).lastValue===t.get(`highlightedValue`),isCustomValue:({computed:e})=>e(`isCustomValue`),allowCustomValue:({prop:e})=>!!e(`allowCustomValue`),hasHighlightedItem:({context:e})=>e.get(`highlightedValue`)!=null,closeOnSelect:({prop:e})=>!!e(`closeOnSelect`),isOpenControlled:({prop:e})=>e(`open`)!=null,openOnChange:({prop:e,context:t})=>{let n=e(`openOnChange`);return d(n)?n:!!n?.({inputValue:t.get(`inputValue`)})},restoreFocus:({event:e})=>{let t=e.restoreFocus??e.previousEvent?.restoreFocus;return t==null||!!t},isChangeEvent:({event:e})=>e.previousEvent?.type===`INPUT.CHANGE`,autoFocus:({prop:e})=>!!e(`autoFocus`),isHighlightedItemRemoved:({prop:e,context:t})=>!e(`collection`).has(t.get(`highlightedValue`)),hasCollectionItems:({prop:e})=>e(`collection`).size>0},effects:{trackFocusVisible({scope:e}){return $e({root:e.getRootNode?.()})},trackDismissableLayer({send:e,prop:t,scope:n}){return t(`disableLayer`)?void 0:ze(()=>H(n),{type:`listbox`,defer:!0,getRootNode:n.getRootNode,layerStyleTargets:[()=>Bt(n)],exclude:()=>[zt(n),Ht(n),Ut(n)],onFocusOutside:t(`onFocusOutside`),onPointerDownOutside:t(`onPointerDownOutside`),onInteractOutside:t(`onInteractOutside`),onEscapeKeyDown(t){t.preventDefault(),t.stopPropagation(),e({type:`LAYER.ESCAPE`,src:`escape-key`})},onDismiss(){e({type:`LAYER.INTERACT_OUTSIDE`,src:`interact-outside`,restoreFocus:!1})}})},trackLiveRegion({refs:e,scope:t}){let n=()=>Rt(t),r=lt({level:`assertive`,document:t.getDoc(),root:n}),i=lt({level:`polite`,document:t.getDoc(),root:n});return e.set(`liveRegion`,r),e.set(`resultsRegion`,i),()=>{r.destroy(),i.destroy(),e.set(`liveRegion`,null),e.set(`resultsRegion`,null)}},trackPlacement({context:e,prop:t,scope:n}){return e.set(`currentPlacement`,t(`positioning`).placement),ue(()=>Vt(n)||Ht(n),()=>Bt(n),{...t(`positioning`),defer:!0,onComplete(t){e.set(`currentPlacement`,t.placement)}})},scrollToHighlightedItem({context:e,prop:t,scope:n}){let r=zt(n),i=[],a=r=>{if(Qe()===`pointer`)return;let a=e.get(`highlightedValue`);if(!a)return;let o=H(n),s=t(`scrollToIndexFn`);if(s){s({index:t(`collection`).indexOf(a),immediate:r,getElement:()=>Wt(n,a)});return}let c=Wt(n,a),l=w(()=>{Ke(c,{rootEl:o,block:`nearest`})});i.push(l)},o=w(()=>{Ze(`virtual`),a(!0)});i.push(o);let s=He(r,{attributes:[`aria-activedescendant`],callback:()=>a(!1)});return i.push(s),()=>{i.forEach(e=>e())}}},actions:{reposition({context:e,prop:t,scope:n,event:r}){ue(()=>Vt(n),()=>Bt(n),{...t(`positioning`),...r.options,defer:!0,listeners:!1,onComplete(t){e.set(`currentPlacement`,t.placement)}})},setHighlightedValue({context:e,event:t}){t.value!=null&&e.set(`highlightedValue`,t.value)},clearHighlightedValue({context:e}){e.set(`highlightedValue`,null)},selectHighlightedItem(e){let{context:t,event:n,prop:r}=e,i=r(`collection`),a=t.get(`highlightedValue`);if(!a||!i.has(a))return;let o=r(`multiple`)?l(t.get(`value`),a):[a];r(`onSelect`)?.({value:o,itemValue:a,modifiers:Ue(n.modifiers)}),t.set(`value`,o);let s=C(r(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i.stringifyMany(o),clear:``});t.set(`inputValue`,s)},scrollToHighlightedItem({context:e,prop:t,scope:n}){E(()=>{let r=e.get(`highlightedValue`);if(r==null)return;let i=Wt(n,r),a=H(n),o=t(`scrollToIndexFn`);o?o({index:t(`collection`).indexOf(r),immediate:!0,getElement:()=>Wt(n,r)}):Ke(i,{rootEl:a,block:`nearest`})})},selectItem(e){let{context:t,event:n,flush:r,prop:i}=e;n.value!=null&&r(()=>{let e=i(`multiple`)?l(t.get(`value`),n.value):[n.value];i(`onSelect`)?.({value:e,itemValue:n.value,modifiers:Ue(n.modifiers)}),t.set(`value`,e);let r=C(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(e),clear:``});t.set(`inputValue`,r)})},clearItem(e){let{context:t,event:n,flush:r,prop:i}=e;n.value!=null&&r(()=>{let e=u(t.get(`value`),n.value);t.set(`value`,e);let r=C(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(e),clear:``});t.set(`inputValue`,r)})},setInitialFocus({scope:e}){w(()=>{Gt(e)})},setFinalFocus({scope:e,refs:t}){t.get(`finalFocusFrame`).request(()=>{Ht(e)?.dataset.focusable==null?Gt(e):Kt(e)})},cancelFinalFocus({refs:e}){e.get(`finalFocusFrame`).cancel()},cancelHighlightFrame({refs:e}){e.get(`highlightFrame`).cancel()},syncInputValue({context:e,scope:t,event:n}){let r=zt(t);r&&(r.value=e.get(`inputValue`),queueMicrotask(()=>{n.current().type!==`INPUT.CHANGE`&&Le(r)}))},setInputValue({context:e,event:t}){e.set(`inputValue`,t.value)},clearInputValue({context:e}){e.set(`inputValue`,``)},revertInputValue({context:e,prop:t,computed:n}){let r=t(`selectionBehavior`),i=C(r,{replace:n(`hasSelectedItems`)?n(`valueAsString`):``,preserve:e.get(`inputValue`),clear:``});e.set(`inputValue`,i)},setValue(e){let{context:t,flush:n,event:r,prop:i}=e;n(()=>{t.set(`value`,r.value);let e=C(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(r.value),clear:``});t.set(`inputValue`,e)})},clearSelectedItems(e){let{context:t,flush:n,prop:r}=e;n(()=>{t.set(`value`,[]);let e=C(r(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r(`collection`).stringifyMany([]),clear:``});t.set(`inputValue`,e)})},scrollContentToTop({prop:e,scope:t}){let n=e(`scrollToIndexFn`);if(n){let r=e(`collection`).firstValue;n({index:0,immediate:!0,getElement:()=>Wt(t,r)})}else{let e=H(t);if(!e)return;e.scrollTop=0}},invokeOnOpen({prop:e,event:t,context:n}){let r=Qt(t);e(`onOpenChange`)?.({open:!0,reason:r,value:n.get(`value`)})},invokeOnClose({prop:e,event:t,context:n}){let r=Qt(t);e(`onOpenChange`)?.({open:!1,reason:r,value:n.get(`value`)})},highlightFirstItem({context:e,prop:t,scope:n,refs:r}){let i=()=>{let n=t(`collection`).firstValue;n&&e.set(`highlightedValue`,n)};H(n)?queueMicrotask(i):r.get(`highlightFrame`).request(i)},highlightFirstItemIfNeeded({computed:e,action:t}){e(`autoHighlight`)&&t([`highlightFirstItem`])},highlightLastItem({context:e,prop:t,scope:n,refs:r}){let i=()=>{let n=t(`collection`).lastValue;n&&e.set(`highlightedValue`,n)};H(n)?queueMicrotask(i):r.get(`highlightFrame`).request(i)},highlightNextItem({context:e,prop:t}){let n=null,r=e.get(`highlightedValue`),i=t(`collection`);r?(n=i.getNextValue(r),!n&&t(`loopFocus`)&&(n=i.firstValue)):n=i.firstValue,n&&e.set(`highlightedValue`,n)},highlightPrevItem({context:e,prop:t}){let n=null,r=e.get(`highlightedValue`),i=t(`collection`);r?(n=i.getPreviousValue(r),!n&&t(`loopFocus`)&&(n=i.lastValue)):n=i.lastValue,n&&e.set(`highlightedValue`,n)},highlightFirstSelectedItem({context:e,prop:t,refs:n}){n.get(`highlightFrame`).request(()=>{let[n]=t(`collection`).sort(e.get(`value`));n&&e.set(`highlightedValue`,n)})},highlightFirstOrSelectedItem({context:e,prop:t,computed:n,refs:r}){r.get(`highlightFrame`).request(()=>{let r=null;r=n(`hasSelectedItems`)?t(`collection`).sort(e.get(`value`))[0]:t(`collection`).firstValue,r&&e.set(`highlightedValue`,r)})},highlightLastOrSelectedItem({context:e,prop:t,computed:n,refs:r}){r.get(`highlightFrame`).request(()=>{let r=t(`collection`),i=null;i=n(`hasSelectedItems`)?r.sort(e.get(`value`))[0]:r.lastValue,i&&e.set(`highlightedValue`,i)})},autofillInputValue({context:e,computed:t,prop:n,event:r,scope:i}){let a=zt(i),o=n(`collection`);if(!t(`autoComplete`)||!a||!r.keypress)return;let s=o.stringify(e.get(`highlightedValue`));w(()=>{a.value=s||e.get(`inputValue`)})},syncSelectedItems(e){queueMicrotask(()=>{let{context:t,prop:n}=e,r=n(`collection`),i=t.get(`value`),a=t.get(`selectedItemMap`),o=nt({values:i,collection:r,selectedItemMap:a});t.set(`selectedItemMap`,o.nextSelectedItemMap);let s=C(n(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r.stringifyMany(i),clear:``});t.set(`inputValue`,s)})},syncHighlightedItem({context:e,prop:t}){let n=t(`collection`).find(e.get(`highlightedValue`));e.set(`highlightedItem`,n)},announceHighlightedItem({context:e,prop:t,refs:n}){if(!Te())return;let r=e.get(`highlightedValue`),i=r?t(`collection`).stringifyItem(t(`collection`).find(r)):null;if(!i)return;let a=r?e.get(`value`).includes(r):!1;n.get(`liveRegion`)?.announce(a?`${i}, selected`:i)},announceResults({refs:e,prop:t}){e.get(`resultsRegion`)?.announce($t(t),rn)},cancelResultsAnnouncement({refs:e}){e.get(`resultsRegion`)?.cancel()},toggleVisibility({event:e,send:t,prop:n}){t({type:n(`open`)?`CONTROLLED.OPEN`:`CONTROLLED.CLOSE`,previousEvent:e})}}}})})))()}var sn;function cn(){return(cn=t((()=>{wt(),sn=Ct.extendWith(`empty`)})))()}function ln(e){let{locale:t,...n}=e||{},r=un(t||`en-US`,{usage:`search`,...n});function i(e){return e=e.normalize(`NFC`),r.resolvedOptions().ignorePunctuation&&(e=e.replace(/\p{P}/gu,``)),e}function a(e,t){return t.length===0||(e=i(e),t=i(t),r.compare(e.slice(0,t.length),t)===0)}function o(e,t){return t.length===0||(e=i(e),t=i(t),r.compare(e.slice(-t.length),t)===0)}function s(e,t){if(t.length===0)return!0;e=i(e),t=i(t);let n=0,a=t.length;for(;n+a<=e.length;n++){let i=e.slice(n,n+a);if(r.compare(t,i)===0)return!0}return!1}return{startsWith:a,endsWith:o,contains:s}}var un;function dn(){return(dn=t((()=>{un=ut(Intl.Collator)})))()}function fn(e){let t=I(),n=e.locale??t.locale;return(0,pn.useMemo)(()=>ln({...e,locale:n}),[n,e])}var pn;function mn(){return(mn=t((()=>{Me(),pn=n(),dn()})))()}var hn,G;function K(){return(K=t((()=>{L(),[hn,G]=je({name:`ComboboxContext`,hookName:`useComboboxContext`,providerName:`<ComboboxProvider />`})})))()}var gn,_n,vn;function yn(){return(yn=t((()=>{j(),K(),gn=n(),F(),_n=r(),vn=(0,gn.forwardRef)((e,t)=>{let n=G(),r=P(n.getClearTriggerProps(),e);return(0,_n.jsx)(R.button,{...r,ref:t})}),vn.displayName=`ComboboxClearTrigger`})))()}var bn,xn,Sn;function Cn(){return(Cn=t((()=>{Oe(),j(),ye(),ve(),K(),bn=n(),F(),xn=r(),Sn=(0,bn.forwardRef)((e,t)=>{let n=G(),r=k(),i=P(n.getContentProps(),r.getPresenceProps(),e),a=Pe(r.ref,t);return(0,xn.jsx)(me,{presence:r,children:(0,xn.jsx)(R.div,{...i,ref:a})})}),Sn.displayName=`ComboboxContent`})))()}var wn,Tn,En,Dn;function On(){return(On=t((()=>{cn(),j(),K(),wn=n(),Tn=r(),En=sn.build(),Dn=(0,wn.forwardRef)((e,t)=>G().collection.size===0?(0,Tn.jsx)(R.div,{...En.empty.attrs,...e,role:`presentation`,ref:t}):null),Dn.displayName=`ComboboxEmpty`})))()}var kn;function An(){return(An=t((()=>{K(),kn=e=>e.children(G())})))()}var jn,Mn,Nn;function Pn(){return(Pn=t((()=>{j(),K(),jn=n(),F(),Mn=r(),Nn=(0,jn.forwardRef)((e,t)=>{let n=G(),r=P(n.getControlProps(),e);return(0,Mn.jsx)(R.div,{...r,ref:t})}),Nn.displayName=`ComboboxControl`})))()}var Fn,In,Ln;function Rn(){return(Rn=t((()=>{j(),ft(),K(),Fn=n(),F(),In=r(),Ln=(0,Fn.forwardRef)((e,t)=>{let n=G(),r=P(n.getInputProps(),e),i=dt();return(0,In.jsx)(R.input,{"aria-describedby":i?.ariaDescribedby,...r,ref:t})}),Ln.displayName=`ComboboxInput`})))()}var zn,Bn;function Vn(){return(Vn=t((()=>{L(),[zn,Bn]=je({name:`ComboboxItemContext`,hookName:`useComboboxItemContext`,providerName:`<ComboboxItemProvider />`})})))()}var Hn,Un;function Wn(){return(Wn=t((()=>{L(),[Hn,Un]=je({name:`ComboboxItemPropsContext`,hookName:`useComboboxItemPropsContext`,providerName:`<ComboboxItemPropsProvider />`})})))()}var Gn,Kn,qn,Jn;function Yn(){return(Yn=t((()=>{N(),j(),K(),Vn(),Wn(),Gn=n(),F(),Kn=r(),qn=M(),Jn=(0,Gn.forwardRef)((e,t)=>{let[n,r]=qn(e,[`item`,`persistFocus`]),i=G(),a=P(i.getItemProps(n),r),o=i.getItemState(n);return(0,Kn.jsx)(Hn,{value:n,children:(0,Kn.jsx)(zn,{value:o,children:(0,Kn.jsx)(R.div,{...a,ref:t})})})}),Jn.displayName=`ComboboxItem`})))()}var Xn;function Zn(){return(Zn=t((()=>{Vn(),Xn=e=>e.children(Bn())})))()}var Qn,$n;function er(){return(er=t((()=>{L(),[Qn,$n]=je({name:`ComboboxItemGroupPropsContext`,hookName:`useComboboxItemGroupPropsContext`,providerName:`<ComboboxItemGroupPropsProvider />`})})))()}var tr,nr,rr,ir;function ar(){return(ar=t((()=>{N(),j(),K(),er(),tr=n(),F(),nr=r(),rr=M(),ir=(0,tr.forwardRef)((e,t)=>{let n=(0,tr.useId)(),[r,i]=rr(e,[`id`]),a={id:n,...r},o=G(),s=P(o.getItemGroupProps(a),i);return(0,nr.jsx)(Qn,{value:a,children:(0,nr.jsx)(R.div,{...s,ref:t})})}),ir.displayName=`ComboboxItemGroup`})))()}var or,sr,cr;function lr(){return(lr=t((()=>{j(),K(),er(),or=n(),F(),sr=r(),cr=(0,or.forwardRef)((e,t)=>{let n=G(),r=$n(),i=P(n.getItemGroupLabelProps({htmlFor:r.id}),e);return(0,sr.jsx)(R.div,{...i,ref:t})}),cr.displayName=`ComboboxItemGroupLabel`})))()}var ur,dr,fr;function pr(){return(pr=t((()=>{j(),K(),Wn(),ur=n(),F(),dr=r(),fr=(0,ur.forwardRef)((e,t)=>{let n=G(),r=Un(),i=P(n.getItemIndicatorProps(r),e);return(0,dr.jsx)(R.div,{...i,ref:t})}),fr.displayName=`ComboboxItemIndicator`})))()}var mr,hr,gr;function _r(){return(_r=t((()=>{j(),K(),Wn(),mr=n(),F(),hr=r(),gr=(0,mr.forwardRef)((e,t)=>{let n=G(),r=Un(),i=P(n.getItemTextProps(r),e);return(0,hr.jsx)(R.span,{...i,ref:t})}),gr.displayName=`ComboboxItemText`})))()}var vr,yr,br;function xr(){return(xr=t((()=>{j(),K(),vr=n(),F(),yr=r(),br=(0,vr.forwardRef)((e,t)=>{let n=G(),r=P(n.getLabelProps(),e);return(0,yr.jsx)(R.label,{...r,ref:t})}),br.displayName=`ComboboxLabel`})))()}var Sr,Cr,wr;function Tr(){return(Tr=t((()=>{j(),K(),Sr=n(),F(),Cr=r(),wr=(0,Sr.forwardRef)((e,t)=>{let n=G(),r=P(n.getListProps(),e);return(0,Cr.jsx)(R.div,{...r,ref:t})}),wr.displayName=`ComboboxList`})))()}var Er,Dr,Or;function kr(){return(kr=t((()=>{j(),ve(),K(),Er=n(),F(),Dr=r(),Or=(0,Er.forwardRef)((e,t)=>{let n=G(),r=k(),i=P(n.getPositionerProps(),e);return r.unmounted?null:(0,Dr.jsx)(R.div,{...i,ref:t})}),Or.displayName=`ComboboxPositioner`})))()}var Ar,jr;function Mr(){return(Mr=t((()=>{De(),Me(),ft(),on(),Zt(),Ar=n(),ae(),x(),jr=e=>{let t=(0,Ar.useId)(),{dir:n}=I(),{getRootNode:r}=Ae(),i=dt(),a={id:t,ids:{label:i?.ids.label,input:i?.ids.control},disabled:i?.disabled,readOnly:i?.readOnly,required:i?.required,invalid:i?.invalid,dir:n,getRootNode:r,...e};return Xt(ne(an,a),b)}})))()}var Nr,Pr,Fr,Ir;function Lr(){return(Lr=t((()=>{N(),j(),_e(),de(),ve(),K(),Mr(),Nr=n(),F(),Pr=r(),Fr=(e,t)=>{let[n,r]=he(e),[i,a]=M()(r,`allowCustomValue.alwaysSubmitOnEnter.autoFocus.closeOnSelect.collection.composite.defaultHighlightedValue.defaultInputValue.defaultOpen.defaultValue.disabled.disableLayer.form.highlightedValue.id.ids.inputBehavior.inputValue.loading.invalid.loopFocus.multiple.name.navigate.onFocusOutside.onHighlightChange.onInputValueChange.onInteractOutside.onOpenChange.onPointerDownOutside.onSelect.onValueChange.open.openOnChange.openOnClick.openOnKeyPress.placeholder.positioning.readOnly.required.scrollToIndexFn.selectionBehavior.translations.value`.split(`.`)),o=jr(i),s=fe(P({present:o.open},n)),c=P(o.getRootProps(),a);return(0,Pr.jsx)(hn,{value:o,children:(0,Pr.jsx)(ge,{value:s,children:(0,Pr.jsx)(R.div,{...c,ref:t})})})},Ir=(0,Nr.forwardRef)(Fr)})))()}var Rr,zr,Br,Vr;function Hr(){return(Hr=t((()=>{N(),j(),_e(),de(),ve(),K(),Rr=n(),F(),zr=r(),Br=(e,t)=>{let[n,r]=he(e),[{value:i},a]=M()(r,[`value`]),o=fe(P({present:i.open},n)),s=P(i.getRootProps(),a);return(0,zr.jsx)(hn,{value:i,children:(0,zr.jsx)(ge,{value:o,children:(0,zr.jsx)(R.div,{...s,ref:t})})})},Vr=(0,Rr.forwardRef)(Br)})))()}var Ur,Wr,Gr,Kr;function qr(){return(qr=t((()=>{N(),j(),K(),Ur=n(),F(),Wr=r(),Gr=M(),Kr=(0,Ur.forwardRef)((e,t)=>{let[n,r]=Gr(e,[`focusable`]),i=G(),a=P(i.getTriggerProps(n),r);return(0,Wr.jsx)(R.button,{...a,ref:t})}),Kr.displayName=`ComboboxTrigger`})))()}var q;function Jr(){return(Jr=t((()=>{ke(),yn(),Cn(),On(),An(),Pn(),Rn(),Yn(),Zn(),ar(),lr(),pr(),_r(),xr(),Tr(),kr(),Lr(),Hr(),qr(),q=Ne({ClearTrigger:()=>vn,Content:()=>Sn,Context:()=>kn,Control:()=>Nn,Empty:()=>Dn,Input:()=>Ln,Item:()=>Jn,ItemContext:()=>Xn,ItemGroup:()=>ir,ItemGroupLabel:()=>cr,ItemIndicator:()=>fr,ItemText:()=>gr,Label:()=>br,List:()=>wr,Positioner:()=>Or,Root:()=>Ir,RootProvider:()=>Vr,Trigger:()=>Kr})})))()}var Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,J;function Ci(){return(Ci=t((()=>{Yr=`_root_227zw_45`,Xr=`_control_227zw_52`,Zr=`_input_227zw_63`,Qr=`_iconButton_227zw_77`,$r=`_small_227zw_88`,ei=`_large_227zw_93`,ti=`_multiple_227zw_104`,ni=`_iconContainer_227zw_119`,ri=`_tags_227zw_123`,ii=`_startAdornment_227zw_175`,ai=`_clearButton_227zw_190`,oi=`_trigger_227zw_218`,si=`_positioner_227zw_251`,ci=`_content_227zw_256`,li=`_expand_227zw_1`,ui=`_collapse_227zw_1`,di=`_itemGroup_227zw_317`,fi=`_item_227zw_317`,pi=`_indicator_227zw_339`,mi=`_itemIcon_227zw_340`,hi=`_itemText_227zw_370`,gi=`_multipleContent_227zw_384`,_i=`_itemIndicator_227zw_395`,vi=`_createItem_227zw_404`,yi=`_noMatches_227zw_410`,bi=`_loading_227zw_411`,xi=`_disabled_227zw_418`,Si=`_invalid_227zw_437`,J={root:Yr,control:Xr,input:Zr,iconButton:Qr,small:$r,large:ei,multiple:ti,iconContainer:ni,tags:ri,startAdornment:ii,clearButton:ai,trigger:oi,positioner:si,content:ci,expand:li,collapse:ui,itemGroup:di,item:fi,indicator:pi,itemIcon:mi,itemText:hi,multipleContent:gi,itemIndicator:_i,createItem:vi,noMatches:yi,loading:bi,disabled:xi,invalid:Si}})))()}var wi,Ti,Ei;function Di(){return(Di=t((()=>{wi=i(),Jr(),pt(),Ci(),s(),Ti=r(),Ei=e=>{let t=(0,wi.c)(11),{option:n,query:r,highlightMatch:i}=e,a;t[0]===n.icon?a=t[1]:(a=n.icon&&(0,Ti.jsx)(o,{className:J.itemIcon,icon:n.icon,"aria-hidden":`true`}),t[0]=n.icon,t[1]=a);let s;t[2]!==i||t[3]!==n.label||t[4]!==r?(s=i?(0,Ti.jsx)(mt,{query:r,text:n.label,ignoreCase:!0}):n.label,t[2]=i,t[3]=n.label,t[4]=r,t[5]=s):s=t[5];let c;t[6]===s?c=t[7]:(c=(0,Ti.jsx)(q.ItemText,{className:J.itemText,children:s}),t[6]=s,t[7]=c);let l;return t[8]!==a||t[9]!==c?(l=(0,Ti.jsxs)(Ti.Fragment,{children:[a,c]}),t[8]=a,t[9]=c,t[10]=l):l=t[10],l}})))()}var Oi,ki,Y,Ai,ji,Mi,Ni,Pi;function Fi(){return(Fi=t((()=>{Oi=n(),Jr(),rt(),Mr(),mn(),le(),ki=e(a(),1),Ci(),Di(),s(),St(),Y=r(),Ai=`__ds-autocomplete-create__`,ji=`,`,Mi=(e,t)=>e.toLocaleLowerCase()===t.toLocaleLowerCase(),Ni=(e,t)=>e.find(e=>Mi(e.label,t)),Pi=({id:e,options:t=[],value:n,loading:r=!1,size:i=`default`,style:a,className:s,placeholder:c,disabled:l=!1,invalid:u=!1,onValueChange:d,onCreate:f,onInputValueChange:ee,onOpenChange:p,locale:{loading:m=`Loading...`,noMatches:h=`No matching tags`,addTag:te=`Add tag...`,createTag:g=e=>`Create new tag '${e}'`,removeTag:ne=e=>`Remove ${e}`}={},highlightMatch:_=!0,showTrigger:v=!0,startAdornment:y})=>{let b=(0,Oi.useId)(),[x,re]=(0,Oi.useState)(``),[ie,ae]=(0,Oi.useState)(null),S=fn({sensitivity:`base`}),C=x.trim(),oe=C?t.filter(e=>S.contains(e.label,C)):t,w=f&&C&&!Ni(t,C)?{value:Ai,label:C}:null,T=st({items:w?[...oe,w]:oe,itemToString:e=>e.label,itemToValue:e=>e.value}),E=e=>{re(e),ae(null),ee?.(e)},D=e=>{let r=[...n],i=[];for(let n of e){let e=n.trim(),a=e?Ni(t,e):void 0,o=a?.value??(f&&e?e:null);o===null||r.some(e=>Mi(e,o))||(a||i.push(e),r.push(o))}r.length!==n.length&&(i.forEach(e=>f?.(e)),d?.(r))},se=e=>{d?.(n.filter(t=>t!==e))},ce=jr({id:e??b,collection:T,disabled:l,invalid:u,multiple:!0,value:n,inputValue:x,highlightedValue:ie,openOnClick:!0,loopFocus:!1,allowCustomValue:!0,selectionBehavior:`preserve`,onHighlightChange:e=>ae(e.highlightedValue),onInputValueChange:e=>{if(!e.inputValue.includes(ji)){E(e.inputValue);return}let t=e.inputValue.split(ji),n=t.pop()??``;D(t),E(n.trimStart())},onValueChange:e=>{e.value.includes(Ai)?D([C]):d?.(e.value),E(``)},onOpenChange:e=>{e.open||E(``),p?.(e.open)}}),O=e=>{e.key===`Enter`&&!ie?(e.preventDefault(),D([x]),E(``)):e.key===`Backspace`&&!x&&n.length?se(n[n.length-1]):e.key===`Escape`&&E(``)},le=e=>{let t=e.clipboardData.getData(`text`);t.includes(ji)&&(e.preventDefault(),D(`${x}${t}`.split(ji)),E(``))},ue=e=>t.find(t=>t.value===e)?.label??e,k=w?T.items.slice(0,-1):T.items,de=i===`small`?`small`:`medium`;return(0,Y.jsxs)(q.RootProvider,{value:ce,className:(0,ki.default)(J.root,{[J.disabled]:l,[J.invalid]:u},s),style:a,lazyMount:!0,unmountOnExit:!0,children:[(0,Y.jsxs)(q.Control,{className:(0,ki.default)(J.control,J.multiple,i===`small`&&J.small,i===`large`&&J.large),children:[y&&(0,Y.jsx)(`span`,{className:J.startAdornment,children:y}),(0,Y.jsxs)(`div`,{className:J.tags,children:[n.map(e=>{let t=ue(e);return(0,Y.jsx)(xt,{label:t,size:`small`,disabled:l,locale:{deleteAriaLabel:ne(t)},onDelete:()=>se(e)},e)}),(0,Y.jsx)(q.Input,{className:J.input,placeholder:n.length?te:c??(f?`Search or create a tag`:`Search tags`),onKeyDown:O,onPaste:le})]}),v&&(0,Y.jsx)(`div`,{className:J.iconContainer,children:(0,Y.jsx)(q.Trigger,{className:J.trigger,"aria-label":`Toggle dropdown`,children:(0,Y.jsx)(o,{icon:`keyboard_arrow_down`,size:de})})})]}),(0,Y.jsx)(pe,{children:(0,Y.jsx)(q.Positioner,{className:J.positioner,children:(0,Y.jsxs)(q.Content,{className:(0,ki.default)(J.content,J.multipleContent),children:[r&&(0,Y.jsx)(`div`,{className:J.loading,children:m}),!r&&T.items.length===0&&(0,Y.jsx)(`div`,{className:J.noMatches,children:h}),!r&&k.length>0&&(0,Y.jsx)(q.ItemGroup,{className:J.itemGroup,children:k.map(e=>(0,Y.jsxs)(q.Item,{item:e,className:J.item,children:[(0,Y.jsx)(Ei,{option:e,query:C,highlightMatch:_}),(0,Y.jsx)(q.ItemIndicator,{className:J.itemIndicator,children:(0,Y.jsx)(o,{icon:`check`,size:`small`,"aria-hidden":`true`})})]},e.value))}),!r&&w&&(0,Y.jsx)(q.Item,{item:w,className:(0,ki.default)(J.item,J.createItem),children:(0,Y.jsx)(q.ItemText,{className:J.itemText,children:g(w.label)})})]})})})]})},Pi.__docgenInfo={description:``,methods:[],displayName:`AutocompleteTags`,props:{options:{defaultValue:{value:`[]`,computed:!1},required:!1},loading:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`'default'`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},invalid:{defaultValue:{value:`false`,computed:!1},required:!1},locale:{defaultValue:{value:`{}`,computed:!1},required:!1},highlightMatch:{defaultValue:{value:`true`,computed:!1},required:!1},showTrigger:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}function Ii(e){return e.label}function Li(e){return e.value}var Ri,zi,Bi,X,Vi,Z;function Hi(){return(Hi=t((()=>{Ri=i(),zi=n(),Jr(),rt(),mn(),le(),Bi=e(a(),1),Ci(),s(),Di(),Fi(),X=r(),Vi=e=>{let t=(0,Ri.c)(58),{id:n,options:r,loading:i,size:a,style:s,className:c,placeholder:l,disabled:u,invalid:d,onValueChange:f,onInputValueChange:ee,onOpenChange:p,locale:m,highlightMatch:h,showTrigger:te,startAdornment:g}=e,ne=r===void 0?[]:r,_=i!==void 0&&i,v=a===void 0?`default`:a,y=l===void 0?`Start typing to search...`:l,b=u!==void 0&&u,x=d!==void 0&&d,re;t[0]===m?re=t[1]:(re=m===void 0?{}:m,t[0]=m,t[1]=re);let{loading:ie,noMatches:ae}=re,S=ie===void 0?`Loading...`:ie,C=ae===void 0?`No matches found`:ae,oe=h===void 0||h,w=te===void 0||te,[T,E]=(0,zi.useState)(``),D;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(D={sensitivity:`base`},t[2]=D):D=t[2];let se=fn(D),ce=T?ne.filter(e=>se.contains(e.label,T)):ne,O=st({items:ce,itemToString:Ii,itemToValue:Li}),le;t[3]===ee?le=t[4]:(le=e=>{E(e.inputValue),ee?.(e.inputValue)},t[3]=ee,t[4]=le);let ue=le,k;t[5]===f?k=t[6]:(k=e=>{let t=e.items[0];f?.(t?.value??``)},t[5]=f,t[6]=k);let de=k,fe;t[7]===p?fe=t[8]:(fe=e=>{p?.(e.open)},t[7]=p,t[8]=fe);let me=fe,he;t[9]!==c||t[10]!==b||t[11]!==x?(he=(0,Bi.default)(J.root,{[J.disabled]:b,[J.invalid]:x},c),t[9]=c,t[10]=b,t[11]=x,t[12]=he):he=t[12];let ge=he,_e=q,ve=v===`small`&&J.small,ye=v===`large`&&J.large,be;t[13]!==ve||t[14]!==ye?(be=(0,Bi.default)(J.control,ve,ye),t[13]=ve,t[14]=ye,t[15]=be):be=t[15];let xe;t[16]===g?xe=t[17]:(xe=g&&(0,X.jsx)(`span`,{className:J.startAdornment,children:g}),t[16]=g,t[17]=xe);let Se;t[18]===y?Se=t[19]:(Se=(0,X.jsx)(q.Input,{className:J.input,placeholder:y}),t[18]=y,t[19]=Se);let Ce;t[20]!==b||t[21]!==w||t[22]!==v?(Ce=(0,X.jsx)(q.Context,{children:e=>(0,X.jsxs)(`div`,{className:J.iconContainer,children:[e.inputValue&&!b&&(0,X.jsx)(`button`,{type:`button`,className:J.clearButton,"aria-label":`Clear`,onClick:()=>{e.setValue([]),e.setInputValue(``)},children:(0,X.jsx)(o,{icon:`close`,size:v===`small`?`small`:`medium`})}),w&&(0,X.jsx)(q.Trigger,{className:J.trigger,"aria-label":`Toggle dropdown`,children:(0,X.jsx)(o,{icon:`keyboard_arrow_down`,size:v===`small`?`small`:`medium`})})]})}),t[20]=b,t[21]=w,t[22]=v,t[23]=Ce):Ce=t[23];let A;t[24]!==be||t[25]!==xe||t[26]!==Se||t[27]!==Ce?(A=(0,X.jsxs)(q.Control,{className:be,children:[xe,Se,Ce]}),t[24]=be,t[25]=xe,t[26]=Se,t[27]=Ce,t[28]=A):A=t[28];let we=pe,Te=q,Ee=J,De=q,j=J,M;t[29]!==_||t[30]!==S?(M=_&&(0,X.jsx)(`div`,{className:J.loading,children:S}),t[29]=_,t[30]=S,t[31]=M):M=t[31];let N=!_&&O.items.length===0&&(0,X.jsx)(`div`,{className:J.noMatches,children:C}),P=!_&&O.items.length>0&&(0,X.jsx)(q.ItemGroup,{className:J.itemGroup,children:O.items.map(e=>(0,X.jsx)(q.Item,{item:e,className:J.item,children:(0,X.jsx)(Ei,{option:e,query:T,highlightMatch:oe})},e.value))}),F;t[32]!==De.Content||t[33]!==j.content||t[34]!==M||t[35]!==N||t[36]!==P?(F=(0,X.jsxs)(De.Content,{className:j.content,children:[M,N,P]}),t[32]=De.Content,t[33]=j.content,t[34]=M,t[35]=N,t[36]=P,t[37]=F):F=t[37];let I;t[38]!==Te.Positioner||t[39]!==Ee.positioner||t[40]!==F?(I=(0,X.jsx)(Te.Positioner,{className:Ee.positioner,children:F}),t[38]=Te.Positioner,t[39]=Ee.positioner,t[40]=F,t[41]=I):I=t[41];let Oe;t[42]!==we||t[43]!==I?(Oe=(0,X.jsx)(we,{children:I}),t[42]=we,t[43]=I,t[44]=Oe):Oe=t[44];let L;return t[45]!==O||t[46]!==b||t[47]!==ue||t[48]!==me||t[49]!==de||t[50]!==n||t[51]!==x||t[52]!==ge||t[53]!==s||t[54]!==_e.Root||t[55]!==A||t[56]!==Oe?(L=(0,X.jsxs)(_e.Root,{id:n,collection:O,className:ge,style:s,disabled:b,invalid:x,onInputValueChange:ue,onValueChange:de,onOpenChange:me,closeOnSelect:!0,lazyMount:!0,unmountOnExit:!0,children:[A,Oe]}),t[45]=O,t[46]=b,t[47]=ue,t[48]=me,t[49]=de,t[50]=n,t[51]=x,t[52]=ge,t[53]=s,t[54]=_e.Root,t[55]=A,t[56]=Oe,t[57]=L):L=t[57],L},Z=e=>{let t=(0,Ri.c)(2),n;return t[0]===e?n=t[1]:(n=e.multiple?(0,X.jsx)(Pi,{...e}):(0,X.jsx)(Vi,{...e}),t[0]=e,t[1]=n),n},Z.displayName=`DsAutocomplete`})))()}var Ui;function Wi(){return(Wi=t((()=>{Ui=[`small`,`default`,`large`]})))()}var Gi,Ki;function qi(){return(qi=t((()=>{Gi=`_field_1f04r_1`,Ki={field:Gi}})))()}var Q,$,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da;function fa(){return(fa=t((()=>{Q=n(),gt(),s(),bt(),vt(),ht(),Hi(),Wi(),qi(),$=r(),Ji={title:`Components/Autocomplete`,component:Z,parameters:{layout:`centered`},decorators:[e=>(0,$.jsx)(`div`,{className:Ki.field,children:(0,$.jsx)(e,{})})],argTypes:{options:{control:`object`},size:{control:`select`,options:Ui},placeholder:{control:`text`},highlightMatch:{control:`boolean`},showTrigger:{control:`boolean`},loading:{control:`boolean`},disabled:{control:`boolean`},invalid:{control:`boolean`},locale:{control:`object`},startAdornment:{control:!1},multiple:{control:!1},value:{control:!1},onValueChange:{action:`valueChange`},onInputValueChange:{action:`inputValueChange`},onOpenChange:{action:`openChange`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},Yi={args:{placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},Xi={render:()=>(0,$.jsx)(Z,{showTrigger:!1,placeholder:`Start typing to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]})},Zi={args:{showTrigger:!1,startAdornment:(0,$.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`,options:[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]}},Qi={args:{placeholder:`Select a fruit...`,options:[{value:`apple`,label:`Apple`,icon:`nutrition`},{value:`banana`,label:`Banana`,icon:`nutrition`},{value:`cherry`,label:`Cherry`,icon:`nutrition`}]}},$i={render:()=>(0,$.jsx)(Z,{highlightMatch:!1,placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]})},ea={args:{loading:!0,placeholder:`Loading options...`,options:[]}},ta={args:{disabled:!0,placeholder:`Disabled autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},na={args:{invalid:!0,placeholder:`Invalid autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},ra={args:{locale:{loading:`Fetching...`,noMatches:`No matching options found`},placeholder:`Search or type...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},ia={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Q.useState)([]),[r,i]=(0,Q.useState)(!1),a=async e=>{e?(i(!0),await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}].filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),i(!1)):n([])};return(0,$.jsx)(Z,{...e,options:t,loading:r,onInputValueChange:a,showTrigger:!1,startAdornment:(0,$.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries (async)...`,locale:{noMatches:`No results found`}})}},aa={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Q.useState)([]),[r,i]=(0,Q.useState)(!0);return(0,Q.useEffect)(()=>{(async()=>{await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]),i(!1)})()},[]),(0,$.jsx)(Z,{...e,options:t,loading:r,placeholder:`Select a country...`})}},oa={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,Q.useState)([{value:`production`,label:`Production`},{value:`staging`,label:`Staging`},{value:`security`,label:`Security`},{value:`compliance`,label:`Compliance`},{value:`nightly`,label:`Nightly`}]),[n,r]=(0,Q.useState)([`production`,`security`]);return(0,$.jsx)(Z,{multiple:!0,options:e,value:n,onValueChange:r,onCreate:e=>t(t=>[...t,{value:e,label:e}])})}},sa={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,Q.useState)([]);return(0,$.jsx)(Z,{multiple:!0,options:[{value:`production`,label:`Production`},{value:`staging`,label:`Staging`},{value:`security`,label:`Security`}],value:e,onValueChange:t})}},ca={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,Q.useState)(!1);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(_t,{onClick:()=>n(!0),children:`Assign owner`}),(0,$.jsxs)(yt,{open:t,onOpenChange:n,columns:4,children:[(0,$.jsxs)(yt.Header,{children:[(0,$.jsx)(yt.Title,{children:`Assign owner`}),(0,$.jsx)(yt.CloseTrigger,{})]}),(0,$.jsx)(yt.Body,{children:(0,$.jsx)(Z,{...e,placeholder:`Search team members...`,options:[{value:`alice`,label:`Alice Cohen`},{value:`bob`,label:`Bob Levi`},{value:`carol`,label:`Carol Smith`}]})})]})]})}},la={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}];return(0,$.jsxs)(B,{direction:`column`,gap:`var(--standard)`,width:`320px`,children:[(0,$.jsxs)(B,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(z,{variant:`body-xs-reg`,color:`secondary`,children:`Large`}),(0,$.jsx)(Z,{options:e,size:`large`,placeholder:`Large autocomplete`})]}),(0,$.jsxs)(B,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(z,{variant:`body-xs-reg`,color:`secondary`,children:`Default`}),(0,$.jsx)(Z,{options:e,size:`default`,placeholder:`Default autocomplete`})]}),(0,$.jsxs)(B,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(z,{variant:`body-xs-reg`,color:`secondary`,children:`Small`}),(0,$.jsx)(Z,{options:e,size:`small`,placeholder:`Small autocomplete`})]}),Ui.map(t=>(0,$.jsxs)(B,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsxs)(z,{variant:`body-xs-reg`,color:`secondary`,children:[`Tags, `,t]}),(0,$.jsx)(Z,{multiple:!0,size:t,options:e,value:[`apple`,`banana`]})]},t))]})}},ua={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}];return(0,$.jsxs)(B,{direction:`column`,gap:`var(--standard)`,width:`320px`,children:[(0,$.jsxs)(B,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(z,{variant:`body-xs-reg`,color:`secondary`,children:`Disabled`}),(0,$.jsx)(Z,{options:e,disabled:!0,placeholder:`Disabled autocomplete`})]}),(0,$.jsxs)(B,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(z,{variant:`body-xs-reg`,color:`secondary`,children:`Invalid`}),(0,$.jsx)(Z,{options:e,invalid:!0,placeholder:`Invalid autocomplete`})]}),(0,$.jsxs)(B,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(z,{variant:`body-xs-reg`,color:`secondary`,children:`Tags`}),(0,$.jsx)(Z,{multiple:!0,options:e,value:[`apple`,`banana`,`cherry`]})]}),(0,$.jsxs)(B,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(z,{variant:`body-xs-reg`,color:`secondary`,children:`Tags, disabled`}),(0,$.jsx)(Z,{multiple:!0,options:e,value:[`apple`,`banana`],disabled:!0})]}),(0,$.jsxs)(B,{direction:`column`,gap:`var(--2xs)`,children:[(0,$.jsx)(z,{variant:`body-xs-reg`,color:`secondary`,children:`Tags, invalid`}),(0,$.jsx)(Z,{multiple:!0,options:e,value:[`apple`],invalid:!0})]})]})}},da=[`Default`,`SearchMode`,`WithStartAdornment`,`WithOptionIcons`,`WithoutHighlight`,`Loading`,`Disabled`,`Invalid`,`Localized`,`AsyncSearch`,`AsyncOptions`,`Tags`,`TagsSelectOnly`,`InsideModal`,`Sizes`,`States`],Yi.parameters={...Yi.parameters,docs:{...Yi.parameters?.docs,source:{originalSource:`{
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
}`,...Yi.parameters?.docs?.source},description:{story:`The default autocomplete opens its dropdown from the trigger arrow or by typing,
and highlights the matching text while the list is filtered. Reach for this when the
user should be able to both browse the full list and search within it.`,...Yi.parameters?.docs?.description}}},Xi.parameters={...Xi.parameters,docs:{...Xi.parameters?.docs,source:{originalSource:`{
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
}`,...Xi.parameters?.docs?.source},description:{story:`Search mode hides the trigger arrow so the list only opens while typing. Use it for
search-style inputs where a persistent dropdown affordance would imply a short, fixed list.`,...Xi.parameters?.docs?.description}}},Zi.parameters={...Zi.parameters,docs:{...Zi.parameters?.docs,source:{originalSource:`{
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
}`,...Zi.parameters?.docs?.source},description:{story:"A `startAdornment` renders content before the input — most often a search icon — to\nreinforce the search intent without adding a separate label.",...Zi.parameters?.docs?.description}}},Qi.parameters={...Qi.parameters,docs:{...Qi.parameters?.docs,source:{originalSource:`{
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
}`,...Qi.parameters?.docs?.source},description:{story:"Each option can carry an `icon` that renders alongside its label, useful for giving\noptions a recognizable visual anchor.",...Qi.parameters?.docs?.description}}},$i.parameters={...$i.parameters,docs:{...$i.parameters?.docs,source:{originalSource:`{
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
}`,...$i.parameters?.docs?.source},description:{story:"Disable match highlighting when the emphasized `mark` styling would compete with the\noption content, or when matches are handled server-side and no local query is available.",...$i.parameters?.docs?.description}}},ea.parameters={...ea.parameters,docs:{...ea.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    placeholder: 'Loading options...',
    options: []
  }
}`,...ea.parameters?.docs?.source},description:{story:"While `loading` is true a loading message replaces the option list, signalling that\nresults are being fetched. Pair it with server-driven `options` (see AsyncSearch).",...ea.parameters?.docs?.description}}},ta.parameters={...ta.parameters,docs:{...ta.parameters?.docs,source:{originalSource:`{
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
}`,...ta.parameters?.docs?.source},description:{story:`The disabled state blocks all interaction and dims the control. Use it when the field
depends on another selection that has not been made yet.`,...ta.parameters?.docs?.description}}},na.parameters={...na.parameters,docs:{...na.parameters?.docs,source:{originalSource:`{
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
}`,...na.parameters?.docs?.source},description:{story:`The invalid state applies an error border for use with external validation — the input
stays focusable so the user can correct their entry.`,...na.parameters?.docs?.description}}},ra.parameters={...ra.parameters,docs:{...ra.parameters?.docs,source:{originalSource:`{
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
}`,...ra.parameters?.docs?.source},description:{story:"The `locale` prop overrides the loading and empty-state messages so the component can be\ntranslated. Only the strings passed are overridden; omitted keys keep their defaults.",...ra.parameters?.docs?.description}}},ia.parameters={...ia.parameters,docs:{...ia.parameters?.docs,source:{originalSource:`{
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
}`,...ia.parameters?.docs?.source},description:{story:"For server-driven search, keep the fetched results in local state and feed them back via\n`options` while toggling `loading`. This is the recommended pattern for large or remote\ndatasets that should not be filtered on the client.",...ia.parameters?.docs?.description}}},aa.parameters={...aa.parameters,docs:{...aa.parameters?.docs,source:{originalSource:`{
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
}`,...aa.parameters?.docs?.source},description:{story:"When the full option set is fetched once on mount, start in a `loading` state and swap in\nthe results when the request resolves. After that the component filters locally.",...aa.parameters?.docs?.description}}},oa.parameters={...oa.parameters,docs:{...oa.parameters?.docs,source:{originalSource:`{
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
}`,...oa.parameters?.docs?.source},description:{story:'Tags mode (`multiple`) collects several values as removable tags inside the field. Picking\nan option toggles it and keeps the list open. Pass `onCreate` to let users add tags that are\nnot in the list yet: type a name and press Enter or a comma, pick the "Create new tag" row, or\npaste a comma-separated list. Append created names to `options` so they stay selectable.',...oa.parameters?.docs?.description}}},sa.parameters={...sa.parameters,docs:{...sa.parameters?.docs,source:{originalSource:`{
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
}`,...sa.parameters?.docs?.source},description:{story:"Without `onCreate`, tags mode only allows picking existing options. Use it where a value must\nalready exist elsewhere, such as filtering by tags that are defined on other records.",...sa.parameters?.docs?.description}}},ca.parameters={...ca.parameters,docs:{...ca.parameters?.docs,source:{originalSource:`{
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
}`,...ca.parameters?.docs?.source},description:{story:"DsAutocomplete can be placed inside a DsModal (or DsDialog). The dropdown opens over the\nmodal content, and its options stay exposed to assistive technology as a `listbox` of\n`option`s, so screen reader users can pick a value without any extra wiring.",...ca.parameters?.docs?.description}}},la.parameters={...la.parameters,docs:{...la.parameters?.docs,source:{originalSource:`{
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
}`,...la.parameters?.docs?.source}}},ua.parameters={...ua.parameters,docs:{...ua.parameters?.docs,source:{originalSource:`{
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
}`,...ua.parameters?.docs?.source},description:{story:`Visual comparison of the disabled, invalid and tags states side by side. Reference only —
behavior for each state is covered by the individual stories and browser tests.`,...ua.parameters?.docs?.description}}}})))()}fa();export{aa as AsyncOptions,ia as AsyncSearch,Yi as Default,ta as Disabled,ca as InsideModal,na as Invalid,ea as Loading,ra as Localized,Xi as SearchMode,la as Sizes,ua as States,oa as Tags,sa as TagsSelectOnly,Qi as WithOptionIcons,Zi as WithStartAdornment,$i as WithoutHighlight,da as __namedExportsOrder,Ji as default};