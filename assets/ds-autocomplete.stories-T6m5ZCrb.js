import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r}from"./iframe-BJBM3kaA.js";import{n as i,t as a}from"./classnames-BngcLiyu.js";import{n as o,t as s}from"./ds-icon-BqKyyzUt.js";import{$t as c,A as l,C as u,H as d,I as f,L as p,Qt as m,S as ee,T as te,Tt as h,Vt as ne,W as g,X as _,_ as v,_t as re,a as y,an as b,c as x,d as S,f as C,g as w,gt as T,h as E,ht as D,i as O,j as k,l as A,m as ie,n as ae,o as j,on as oe,ot as se,p as ce,r as le,s as ue,t as de,tn as fe,tt as pe,u as me,ut as he,v as ge,w as M,wt as _e,x as ve,yt as N,zt as ye}from"./runtime-CBA0MHDV.js";import{a as be,n as xe,r as Se,t as Ce}from"./raf-D1nJPjhp.js";import{B as we,S as Te,W as Ee,a as De,b as P,c as F,d as I,f as Oe,i as ke,l as Ae,m as je,o as Me,p as Ne,s as Pe,u as Fe,v as Ie,x as Le,y as Re}from"./ds-tooltip-DfFFe5no.js";import{n as ze,t as Be}from"./caret-OM1hl62y.js";import{r as Ve,t as He}from"./dismissable-layer-Ct71XWsf.js";import{n as Ue,r as We}from"./mutation-observer-xHtcQjzR.js";import{n as Ge,r as Ke,t as qe}from"./navigate-Ce11KPW_.js";import{n as Je,t as Ye}from"./scroll-BbBf29xi.js";import{n as Xe,t as Ze}from"./equal-COyPOATC.js";import{i as Qe,o as $e,r as et,s as tt}from"./use-event-xBJ_VzL7.js";import{a as nt,c as rt,i as it,n as at,o as ot,r as st,s as ct,t as lt}from"./list-collection-Dvqjgbm2.js";import{n as ut,t as dt}from"./dist-bdyaRVo6.js";import{t as ft}from"./cache-BupmKqjL.js";import{n as pt,t as mt}from"./use-field-context-Dx2SVwlQ.js";import{n as ht,t as gt}from"./highlight-Dkr9WvDf.js";import{n as L,t as _t}from"./ds-typography-CpFc16Nt.js";import{n as vt,t as yt}from"./ds-button-v3-CGjWpj2J.js";import{n as bt,t as R}from"./ds-stack-DASX2VPV.js";import{t as xt}from"./ds-modal-BtnGlRiq.js";import{t as St}from"./ds-modal-NujQ_ED_.js";import{t as Ct}from"./ds-tag-BX6-LhAv.js";import{t as wt}from"./ds-tag-CuTLrzGV.js";var Tt,z;function Et(){return(Et=t((()=>{oe(),Tt=b(`combobox`).parts(`root`,`clearTrigger`,`content`,`control`,`input`,`item`,`itemGroup`,`itemGroupLabel`,`itemIndicator`,`itemText`,`label`,`list`,`positioner`,`trigger`),z=Tt.build()})))()}var Dt;function Ot(){return(Ot=t((()=>{rt(),Dt=e=>new ct(e),Dt.empty=()=>new ct({items:[]})})))()}var kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,B,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt;function Yt(){return(Yt=t((()=>{we(),Be(),kt=e=>e.ids?.root??`combobox:${e.id}`,At=e=>e.ids?.label??`combobox:${e.id}:label`,jt=e=>e.ids?.control??`combobox:${e.id}:control`,Mt=e=>e.ids?.input??`combobox:${e.id}:input`,Nt=e=>e.ids?.content??`combobox:${e.id}:content`,Pt=e=>e.ids?.positioner??`combobox:${e.id}:popper`,Ft=e=>e.ids?.trigger??`combobox:${e.id}:toggle-btn`,It=e=>e.ids?.clearTrigger??`combobox:${e.id}:clear-btn`,Lt=(e,t)=>e.ids?.itemGroup?.(t)??`combobox:${e.id}:optgroup:${t}`,Rt=(e,t)=>e.ids?.itemGroupLabel?.(t)??`combobox:${e.id}:optgroup-label:${t}`,zt=(e,t)=>e.ids?.item?.(t)??`combobox:${e.id}:option:${t}`,Bt=e=>e.getById(kt(e)),B=e=>e.getById(Nt(e)),Vt=e=>e.getById(Mt(e)),Ht=e=>e.getById(Pt(e)),Ut=e=>e.getById(jt(e)),Wt=e=>e.getById(Ft(e)),Gt=e=>e.getById(It(e)),Kt=(e,t)=>{if(t==null)return null;let n=`[role=option][data-value="${CSS.escape(t)}"]`;return Ee(B(e),n)},qt=e=>{let t=Vt(e);e.isActiveElement(t)||t?.focus({preventScroll:!0}),ze(t)},Jt=e=>{let t=Wt(e);e.isActiveElement(t)||t?.focus({preventScroll:!0})}})))()}var Xt;function Zt(){return(Zt=t((()=>{Xt={triggerLabel:`Toggle suggestions`,clearTriggerLabel:`Clear value`,resultsCount:e=>e===1?`1 result`:`${e} results`,noResults:`No results`,loading:`Loading results`}})))()}function Qt(e,t){let{context:n,prop:r,state:i,send:a,scope:o,computed:s}=e,l=k(Xt,r(`translations`)),u=r(`collection`),d=!!r(`disabled`),f=s(`isInteractive`),p=!!r(`invalid`),ee=!!r(`required`),h=!!r(`readOnly`),g=i.hasTag(`open`),_=!!r(`loading`),v=i.hasTag(`focused`),y=r(`composite`),b=n.get(`highlightedValue`),x=n.get(`currentPlacement`),S=x?Te(x):void 0,C=Ie({...r(`positioning`),placement:x});function w(e){let t=u.getItemDisabled(e.item),r=u.getItemValue(e.item);return te(r,()=>`[zag-js] No value found for item ${JSON.stringify(e.item)}`),{value:r,disabled:!!(d||t),highlighted:b===r,selected:n.get(`value`).includes(r)}}return{focused:v,open:g,loading:_,inputValue:n.get(`inputValue`),highlightedValue:b,highlightedItem:n.get(`highlightedItem`),value:n.get(`value`),valueAsString:s(`valueAsString`),hasSelectedItems:s(`hasSelectedItems`),selectedItems:s(`selectedItems`),collection:r(`collection`),multiple:!!r(`multiple`),disabled:!!d,syncSelectedItems(){a({type:`SELECTED_ITEMS.SYNC`})},reposition(e={}){a({type:`POSITIONING.SET`,options:e})},setHighlightValue(e){a({type:`HIGHLIGHTED_VALUE.SET`,value:e})},clearHighlightValue(){a({type:`HIGHLIGHTED_VALUE.CLEAR`})},selectValue(e){a({type:`ITEM.SELECT`,value:e})},setValue(e){a({type:`VALUE.SET`,value:e})},setInputValue(e,t=`script`){a({type:`INPUT_VALUE.SET`,value:e,src:t})},clearValue(e){a(e==null?{type:`VALUE.CLEAR`}:{type:`ITEM.CLEAR`,value:e})},focus(){Vt(o)?.focus()},setOpen(e,t=`script`){a({type:e?`OPEN`:`CLOSE`,src:t,replaces:`open`})},getRootProps(){return t.element({...z.root.attrs,dir:r(`dir`),id:kt(o),"data-invalid":c(p),"data-readonly":c(h)})},getLabelProps(){return t.label({...z.label.attrs,dir:r(`dir`),htmlFor:Mt(o),id:At(o),"data-readonly":c(h),"data-disabled":c(d),"data-invalid":c(p),"data-required":c(ee),"data-focus":c(v),onClick(e){y||(e.preventDefault(),Wt(o)?.focus({preventScroll:!0}))}})},getControlProps(){return t.element({...z.control.attrs,dir:r(`dir`),id:jt(o),"data-state":g?`open`:`closed`,"data-focus":c(v),"data-disabled":c(d),"data-invalid":c(p)})},getPositionerProps(){return t.element({...z.positioner.attrs,dir:r(`dir`),id:Pt(o),style:C.floating})},getInputProps(){return t.input({...z.input.attrs,dir:r(`dir`),"aria-invalid":m(p),"data-invalid":c(p),"data-autofocus":c(r(`autoFocus`)),name:r(`name`),form:r(`form`),disabled:d,required:r(`required`),autoComplete:`off`,autoCorrect:`off`,autoCapitalize:`none`,spellCheck:`false`,readOnly:h,placeholder:r(`placeholder`),id:Mt(o),type:`text`,role:`combobox`,defaultValue:n.get(`inputValue`),"aria-autocomplete":s(`autoComplete`)?`both`:`list`,"aria-controls":Nt(o),"aria-expanded":g,"data-state":g?`open`:`closed`,"aria-activedescendant":b?zt(o,b):void 0,onClick(e){e.defaultPrevented||r(`openOnClick`)&&f&&a({type:`INPUT.CLICK`,src:`input-click`})},onFocus(){d||a({type:`INPUT.FOCUS`})},onBlur(){d||a({type:`INPUT.BLUR`})},onChange(e){a({type:`INPUT.CHANGE`,value:e.currentTarget.value,src:`input-change`})},onKeyDown(e){if(e.defaultPrevented||!f||T(e)||(e.ctrlKey||e.shiftKey)&&e.key!==`Enter`)return;let t=r(`openOnKeyPress`),n=e.ctrlKey||e.metaKey||e.shiftKey,i={ArrowDown(e){(t||g)&&(a({type:e.altKey?`OPEN`:`INPUT.ARROW_DOWN`,keypress:!0,src:`arrow-key`}),e.preventDefault())},ArrowUp(){(t||g)&&(a({type:e.altKey?`CLOSE`:`INPUT.ARROW_UP`,keypress:!0,src:`arrow-key`}),e.preventDefault())},Home(e){n||(a({type:`INPUT.HOME`,keypress:!0}),g&&e.preventDefault())},End(e){n||(a({type:`INPUT.END`,keypress:!0}),g&&e.preventDefault())},Enter(e){a({type:`INPUT.ENTER`,keypress:!0,src:`item-select`,modifiers:Ge(e)});let t=b!=null,n=r(`alwaysSubmitOnEnter`),i=s(`isCustomValue`)&&!r(`allowCustomValue`);if(g&&!n&&(t||i)&&e.preventDefault(),b==null)return;let c=Kt(o,b);ne(c)&&r(`navigate`)?.({value:b,node:c,href:c.href,modifiers:Ge(e)})},Escape(){a({type:`INPUT.ESCAPE`,keypress:!0,src:`escape-key`}),e.preventDefault()}}[he(e,{dir:r(`dir`)})];i?.(e)}})},getTriggerProps(e={}){return t.button({...z.trigger.attrs,dir:r(`dir`),id:Ft(o),"aria-haspopup":y?`listbox`:`dialog`,type:`button`,tabIndex:e.focusable?void 0:-1,"aria-label":l.triggerLabel,"aria-expanded":g,"data-state":g?`open`:`closed`,"aria-controls":g?Nt(o):void 0,disabled:d,"data-invalid":c(p),"data-focusable":c(e.focusable),"data-readonly":c(h),"data-disabled":c(d),onFocus(){e.focusable&&a({type:`INPUT.FOCUS`,src:`trigger`})},onClick(e){e.defaultPrevented||f&&N(e)&&a({type:`TRIGGER.CLICK`,src:`trigger-click`})},onPointerDown(e){f&&e.pointerType!==`touch`&&N(e)&&(e.preventDefault(),queueMicrotask(()=>{qt(o)}))},onKeyDown(e){if(e.defaultPrevented||y)return;let t={ArrowDown(){a({type:`INPUT.ARROW_DOWN`,src:`arrow-key`})},ArrowUp(){a({type:`INPUT.ARROW_UP`,src:`arrow-key`})}}[he(e,{dir:r(`dir`)})];t&&(t(e),e.preventDefault())}})},getContentProps(){return t.element({...z.content.attrs,dir:r(`dir`),id:Nt(o),role:y?`listbox`:`dialog`,tabIndex:-1,hidden:!g,"data-state":g?`open`:`closed`,"data-placement":x,"data-side":S,"aria-labelledby":At(o),"aria-multiselectable":r(`multiple`)&&y?!0:void 0,"aria-busy":y?m(_):void 0,"data-empty":c(u.size===0),"data-loading":c(_),onPointerDown(e){N(e)&&e.preventDefault()}})},getListProps(){return t.element({...z.list.attrs,role:y?void 0:`listbox`,"data-empty":c(u.size===0),"aria-labelledby":At(o),"aria-multiselectable":r(`multiple`)&&!y?!0:void 0,"aria-busy":y?void 0:m(_),"data-loading":c(_)})},getClearTriggerProps(){return t.button({...z.clearTrigger.attrs,dir:r(`dir`),id:It(o),type:`button`,tabIndex:-1,disabled:d,"data-invalid":c(p),"aria-label":l.clearTriggerLabel,"aria-controls":Mt(o),hidden:!n.get(`value`).length,onPointerDown(e){N(e)&&e.preventDefault()},onClick(e){e.defaultPrevented||f&&a({type:`VALUE.CLEAR`,src:`clear-trigger`})}})},getItemState:w,getItemProps(e){let n=w(e),i=n.value;return t.element({...z.item.attrs,dir:r(`dir`),id:zt(o,i),role:`option`,tabIndex:-1,"data-highlighted":c(n.highlighted),"data-state":n.selected?`checked`:`unchecked`,"aria-selected":n.selected,"aria-disabled":m(n.disabled),"data-disabled":c(n.disabled),"data-value":n.value,onPointerMove(){n.disabled||et()===`pointer`&&(n.highlighted||a({type:`ITEM.POINTER_MOVE`,value:i}))},onPointerLeave(){e.persistFocus||n.disabled||et()===`pointer`&&a({type:`ITEM.POINTER_LEAVE`,value:i})},onClick(e){re(e)||n.disabled||a({type:`ITEM.CLICK`,src:`item-select`,value:i,modifiers:Ge(e)})}})},getItemTextProps(e){let n=w(e);return t.element({...z.itemText.attrs,dir:r(`dir`),"data-state":n.selected?`checked`:`unchecked`,"data-disabled":c(n.disabled),"data-highlighted":c(n.highlighted)})},getItemIndicatorProps(e){let n=w(e);return t.element({"aria-hidden":!0,...z.itemIndicator.attrs,dir:r(`dir`),"data-state":n.selected?`checked`:`unchecked`,hidden:!n.selected})},getItemGroupProps(e){let{id:n}=e;return t.element({...z.itemGroup.attrs,dir:r(`dir`),id:Lt(o,n),"aria-labelledby":Rt(o,n),"data-empty":c(u.size===0),role:`group`})},getItemGroupLabelProps(e){let{htmlFor:n}=e;return t.element({...z.itemGroupLabel.attrs,dir:r(`dir`),id:Rt(o,n),role:`presentation`})}}}function $t(){return($t=t((()=>{fe(),D(),Ke(),ye(),Qe(),Re(),l(),Et(),Yt(),Zt()})))()}function en(e){return(e.previousEvent||e).src}function tn(e){let t=k(Xt,e(`translations`));if(e(`loading`))return t.loading;let n=e(`collection`).size;return n===0?t.noResults:t.resultsCount(n)}var nn,rn,an,V,H,on,sn;function cn(){return(cn=t((()=>{nt(),ve(),He(),xe(),Ke(),_e(),Ue(),Ye(),Be(),Qe(),ut(),Le(),pe(),d(),Ze(),f(),l(),Ot(),Yt(),Zt(),{guards:nn,createMachine:rn,choose:an}=ee(),{and:V,not:H}=nn,on=1e3,sn=rn({props({props:e}){return{loopFocus:!0,openOnClick:!1,defaultValue:[],defaultInputValue:``,closeOnSelect:!e.multiple,allowCustomValue:!1,alwaysSubmitOnEnter:!1,inputBehavior:`none`,selectionBehavior:e.multiple?`clear`:`replace`,openOnKeyPress:!0,openOnChange:!0,composite:!0,navigate(e){qe(e.node,e.modifiers)},collection:Dt.empty(),...e,positioning:{placement:`bottom`,sameWidth:!0,...e.positioning}}},initialState({prop:e}){return e(`open`)||e(`defaultOpen`)?`open.suggesting`:`closed.idle`},refs(){return{liveRegion:null,resultsRegion:null,finalFocusFrame:Ce.create(),highlightFrame:Ce.create()}},exit:[`cancelFinalFocus`,`cancelHighlightFrame`],context({prop:e,bindable:t,getContext:n,getEvent:r}){let i=e(`value`)??e(`defaultValue`)??[],a=e(`collection`).findMany(i);return{currentPlacement:t(()=>({defaultValue:void 0})),value:t(()=>({defaultValue:e(`defaultValue`),value:e(`value`),isEqual:Xe,hash(e){return e.join(`,`)},onChange(t){let r=n(),i=e(`collection`),a=r.get(`selectedItemMap`),o=it({values:t,collection:i,selectedItemMap:a}),s=e(`value`)??t,c=s===t?o:it({values:s,collection:i,selectedItemMap:o.nextSelectedItemMap});r.set(`selectedItemMap`,c.nextSelectedItemMap),e(`onValueChange`)?.({value:t,items:o.selectedItems})}})),highlightedValue:t(()=>({defaultValue:e(`defaultHighlightedValue`)||null,value:e(`highlightedValue`),onChange(t){let n=e(`collection`).find(t);e(`onHighlightChange`)?.({highlightedValue:t,highlightedItem:n})}})),inputValue:t(()=>{let t=e(`inputValue`)||e(`defaultInputValue`),n=e(`value`)||e(`defaultValue`);if(!t.trim()&&!e(`multiple`)){let r=e(`collection`).stringifyMany(n);t=p(e(`selectionBehavior`),{preserve:t||r,replace:r,clear:``})}return{defaultValue:t,value:e(`inputValue`),onChange(t){let n=r(),i=(n.previousEvent||n).src;e(`onInputValueChange`)?.({inputValue:t,reason:i})}}}),highlightedItem:t(()=>{let t=e(`highlightedValue`);return{defaultValue:e(`collection`).find(t)}}),selectedItemMap:t(()=>({defaultValue:st({selectedItems:a,collection:e(`collection`)})}))}},computed:{isInputValueEmpty:({context:e})=>e.get(`inputValue`).length===0,isInteractive:({prop:e})=>!(e(`readOnly`)||e(`disabled`)),autoComplete:({prop:e})=>e(`inputBehavior`)===`autocomplete`,autoHighlight:({prop:e})=>e(`inputBehavior`)===`autohighlight`,hasSelectedItems:({context:e})=>e.get(`value`).length>0,selectedItems:({context:e,prop:t})=>ot({values:e.get(`value`),collection:t(`collection`),selectedItemMap:e.get(`selectedItemMap`)}),valueAsString:({computed:e,prop:t})=>t(`collection`).stringifyItems(e(`selectedItems`)),isCustomValue:({context:e,computed:t})=>e.get(`inputValue`)!==t(`valueAsString`)},watch({context:e,prop:t,track:n,action:r,send:i}){n([()=>e.hash(`value`)],()=>{r([`syncSelectedItems`])}),n([()=>e.get(`inputValue`)],()=>{r([`syncInputValue`,`announceResults`])}),n([()=>e.get(`highlightedValue`)],()=>{r([`syncHighlightedItem`,`autofillInputValue`,`announceHighlightedItem`])}),n([()=>t(`open`)],()=>{r([`toggleVisibility`])}),n([()=>t(`collection`).toString()],()=>{i({type:`CHILDREN_CHANGE`}),r([`announceResults`])}),n([()=>t(`loading`)],()=>{r([`announceResults`])})},on:{"SELECTED_ITEMS.SYNC":{actions:[`syncSelectedItems`]},"HIGHLIGHTED_VALUE.SET":{actions:[`setHighlightedValue`]},"HIGHLIGHTED_VALUE.CLEAR":{actions:[`clearHighlightedValue`]},"ITEM.SELECT":{actions:[`selectItem`]},"ITEM.CLEAR":{actions:[`clearItem`]},"VALUE.SET":{actions:[`setValue`]},"INPUT_VALUE.SET":{actions:[`setInputValue`]},"POSITIONING.SET":{actions:[`reposition`]}},entry:an([{guard:`autoFocus`,actions:[`setInitialFocus`]}]),states:{closed:{tags:[`closed`],initial:`idle`,states:{idle:{tags:[`idle`],entry:[`scrollContentToTop`,`clearHighlightedValue`],on:{"CONTROLLED.OPEN":{target:`open.interacting`},"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.CLICK":[{guard:`isOpenControlled`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.FOCUS":{target:`focused`},OPEN:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open.interacting`,actions:[`invokeOnOpen`]}],"VALUE.CLEAR":{target:`focused`,actions:[`clearInputValue`,`clearSelectedItems`,`setInitialFocus`]}}},focused:{tags:[`focused`],entry:[`scrollContentToTop`,`clearHighlightedValue`],exit:[`cancelFinalFocus`],on:{"CONTROLLED.OPEN":[{guard:`isChangeEvent`,target:`open.suggesting`},{target:`open.interacting`}],"INPUT.CHANGE":[{guard:V(`isOpenControlled`,`openOnChange`),actions:[`setInputValue`,`invokeOnOpen`,`highlightFirstItemIfNeeded`]},{guard:`openOnChange`,target:`open.suggesting`,actions:[`setInputValue`,`invokeOnOpen`,`highlightFirstItemIfNeeded`]},{actions:[`setInputValue`]}],"LAYER.INTERACT_OUTSIDE":{target:`idle`},"INPUT.ESCAPE":{guard:V(`isCustomValue`,H(`allowCustomValue`)),actions:[`revertInputValue`]},"INPUT.BLUR":{target:`idle`},"INPUT.CLICK":[{guard:`isOpenControlled`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstSelectedItem`,`invokeOnOpen`]}],"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`setInitialFocus`,`highlightFirstSelectedItem`,`invokeOnOpen`]}],"INPUT.ARROW_DOWN":[{guard:V(`isOpenControlled`,`autoComplete`),actions:[`invokeOnOpen`]},{guard:`autoComplete`,target:`open.interacting`,actions:[`invokeOnOpen`]},{guard:`isOpenControlled`,actions:[`highlightFirstOrSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightFirstOrSelectedItem`,`invokeOnOpen`]}],"INPUT.ARROW_UP":[{guard:V(`isOpenControlled`,`autoComplete`),actions:[`invokeOnOpen`]},{guard:`autoComplete`,target:`open.interacting`,actions:[`invokeOnOpen`]},{guard:`isOpenControlled`,actions:[`highlightLastOrSelectedItem`,`invokeOnOpen`]},{target:`open.interacting`,actions:[`highlightLastOrSelectedItem`,`invokeOnOpen`]}],OPEN:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open.interacting`,actions:[`invokeOnOpen`]}],"VALUE.CLEAR":{actions:[`clearInputValue`,`clearSelectedItems`]}}}}},open:{tags:[`open`,`focused`],entry:[`setInitialFocus`],exit:[`cancelHighlightFrame`],effects:[`trackFocusVisible`,`scrollToHighlightedItem`,`trackDismissableLayer`,`trackPlacement`,`trackLiveRegion`],on:{"CONTROLLED.CLOSE":[{guard:`restoreFocus`,target:`closed.focused`,actions:[`setFinalFocus`]},{target:`closed.idle`}],"INPUT.ENTER":[{guard:V(`isOpenControlled`,`isCustomValue`,H(`hasHighlightedItem`),H(`allowCustomValue`)),actions:[`revertInputValue`,`invokeOnClose`]},{guard:V(`isCustomValue`,H(`hasHighlightedItem`),H(`allowCustomValue`)),target:`closed.focused`,actions:[`revertInputValue`,`invokeOnClose`]},{guard:V(`isOpenControlled`,`closeOnSelect`),actions:[`selectHighlightedItem`,`invokeOnClose`]},{guard:`closeOnSelect`,target:`closed.focused`,actions:[`selectHighlightedItem`,`invokeOnClose`,`setFinalFocus`]},{actions:[`selectHighlightedItem`]}],"ITEM.CLICK":[{guard:V(`isOpenControlled`,`closeOnSelect`),actions:[`selectItem`,`invokeOnClose`]},{guard:`closeOnSelect`,target:`closed.focused`,actions:[`selectItem`,`invokeOnClose`,`setFinalFocus`]},{actions:[`selectItem`]}],"TRIGGER.CLICK":[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`]}],"LAYER.INTERACT_OUTSIDE":[{guard:V(`isOpenControlled`,`isCustomValue`,H(`allowCustomValue`)),actions:[`revertInputValue`,`invokeOnClose`]},{guard:V(`isCustomValue`,H(`allowCustomValue`)),target:`closed.idle`,actions:[`revertInputValue`,`invokeOnClose`]},{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.idle`,actions:[`invokeOnClose`]}],CLOSE:[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`,`setFinalFocus`]}],"VALUE.CLEAR":[{guard:`isOpenControlled`,actions:[`clearInputValue`,`clearSelectedItems`,`invokeOnClose`,`scrollContentToTop`]},{target:`closed.focused`,actions:[`clearInputValue`,`clearSelectedItems`,`invokeOnClose`,`setFinalFocus`]}]},initial:`interacting`,states:{interacting:{on:{CHILDREN_CHANGE:[{guard:V(`isHighlightedItemRemoved`,`hasCollectionItems`,`autoHighlight`),actions:[`clearHighlightedValue`,`highlightFirstItem`]},{guard:`isHighlightedItemRemoved`,actions:[`clearHighlightedValue`]},{actions:[`scrollToHighlightedItem`]}],"INPUT.HOME":{actions:[`highlightFirstItem`]},"INPUT.END":{actions:[`highlightLastItem`]},"INPUT.ARROW_DOWN":[{guard:V(`autoComplete`,`isLastItemHighlighted`),actions:[`clearHighlightedValue`,`scrollContentToTop`]},{actions:[`highlightNextItem`]}],"INPUT.ARROW_UP":[{guard:V(`autoComplete`,`isFirstItemHighlighted`),actions:[`clearHighlightedValue`]},{actions:[`highlightPrevItem`]}],"INPUT.CHANGE":[{guard:`autoComplete`,target:`suggesting`,actions:[`setInputValue`,`scrollContentToTop`]},{target:`suggesting`,actions:[`clearHighlightedValue`,`setInputValue`,`scrollContentToTop`]}],"ITEM.POINTER_MOVE":{actions:[`setHighlightedValue`]},"ITEM.POINTER_LEAVE":{actions:[`clearHighlightedValue`]},"LAYER.ESCAPE":[{guard:V(`isOpenControlled`,`autoComplete`),actions:[`syncInputValue`,`invokeOnClose`]},{guard:`autoComplete`,target:`closed.focused`,actions:[`syncInputValue`,`invokeOnClose`]},{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`,`setFinalFocus`]}]}},suggesting:{exit:[`cancelResultsAnnouncement`],on:{CHILDREN_CHANGE:[{guard:V(`isHighlightedItemRemoved`,`hasCollectionItems`,`autoHighlight`),actions:[`clearHighlightedValue`,`highlightFirstItem`]},{guard:`isHighlightedItemRemoved`,actions:[`clearHighlightedValue`]},{guard:`autoHighlight`,actions:[`highlightFirstItem`]}],"INPUT.ARROW_DOWN":{target:`interacting`,actions:[`highlightNextItem`]},"INPUT.ARROW_UP":{target:`interacting`,actions:[`highlightPrevItem`]},"INPUT.HOME":{target:`interacting`,actions:[`highlightFirstItem`]},"INPUT.END":{target:`interacting`,actions:[`highlightLastItem`]},"INPUT.CHANGE":{actions:[`setInputValue`,`scrollContentToTop`]},"LAYER.ESCAPE":[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed.focused`,actions:[`invokeOnClose`]}],"ITEM.POINTER_MOVE":{target:`interacting`,actions:[`setHighlightedValue`]},"ITEM.POINTER_LEAVE":{actions:[`clearHighlightedValue`]}}}}}},implementations:{guards:{isInputValueEmpty:({computed:e})=>e(`isInputValueEmpty`),autoComplete:({computed:e,prop:t})=>e(`autoComplete`)&&!t(`multiple`),autoHighlight:({computed:e})=>e(`autoHighlight`),isFirstItemHighlighted:({prop:e,context:t})=>e(`collection`).firstValue===t.get(`highlightedValue`),isLastItemHighlighted:({prop:e,context:t})=>e(`collection`).lastValue===t.get(`highlightedValue`),isCustomValue:({computed:e})=>e(`isCustomValue`),allowCustomValue:({prop:e})=>!!e(`allowCustomValue`),hasHighlightedItem:({context:e})=>e.get(`highlightedValue`)!=null,closeOnSelect:({prop:e})=>!!e(`closeOnSelect`),isOpenControlled:({prop:e})=>e(`open`)!=null,openOnChange:({prop:e,context:t})=>{let n=e(`openOnChange`);return g(n)?n:!!n?.({inputValue:t.get(`inputValue`)})},restoreFocus:({event:e})=>{let t=e.restoreFocus??e.previousEvent?.restoreFocus;return t==null||!!t},isChangeEvent:({event:e})=>e.previousEvent?.type===`INPUT.CHANGE`,autoFocus:({prop:e})=>!!e(`autoFocus`),isHighlightedItemRemoved:({prop:e,context:t})=>!e(`collection`).has(t.get(`highlightedValue`)),hasCollectionItems:({prop:e})=>e(`collection`).size>0},effects:{trackFocusVisible({scope:e}){return tt({root:e.getRootNode?.()})},trackDismissableLayer({send:e,prop:t,scope:n}){return t(`disableLayer`)?void 0:Ve(()=>B(n),{type:`listbox`,defer:!0,getRootNode:n.getRootNode,layerStyleTargets:[()=>Ht(n)],exclude:()=>[Vt(n),Wt(n),Gt(n)],onFocusOutside:t(`onFocusOutside`),onPointerDownOutside:t(`onPointerDownOutside`),onInteractOutside:t(`onInteractOutside`),onEscapeKeyDown(t){t.preventDefault(),t.stopPropagation(),e({type:`LAYER.ESCAPE`,src:`escape-key`})},onDismiss(){e({type:`LAYER.INTERACT_OUTSIDE`,src:`interact-outside`,restoreFocus:!1})}})},trackLiveRegion({refs:e,scope:t}){let n=()=>Bt(t),r=dt({level:`assertive`,document:t.getDoc(),root:n}),i=dt({level:`polite`,document:t.getDoc(),root:n});return e.set(`liveRegion`,r),e.set(`resultsRegion`,i),()=>{r.destroy(),i.destroy(),e.set(`liveRegion`,null),e.set(`resultsRegion`,null)}},trackPlacement({context:e,prop:t,scope:n}){return e.set(`currentPlacement`,t(`positioning`).placement),P(()=>Ut(n)||Wt(n),()=>Ht(n),{...t(`positioning`),defer:!0,onComplete(t){e.set(`currentPlacement`,t.placement)}})},scrollToHighlightedItem({context:e,prop:t,scope:n}){let r=Vt(n),i=[],a=r=>{if(et()===`pointer`)return;let a=e.get(`highlightedValue`);if(!a)return;let o=B(n),s=t(`scrollToIndexFn`);if(s){s({index:t(`collection`).indexOf(a),immediate:r,getElement:()=>Kt(n,a)});return}let c=Kt(n,a),l=be(()=>{Je(c,{rootEl:o,block:`nearest`})});i.push(l)},o=be(()=>{$e(`virtual`),a(!0)});i.push(o);let s=We(r,{attributes:[`aria-activedescendant`],callback:()=>a(!1)});return i.push(s),()=>{i.forEach(e=>e())}}},actions:{reposition({context:e,prop:t,scope:n,event:r}){P(()=>Ut(n),()=>Ht(n),{...t(`positioning`),...r.options,defer:!0,listeners:!1,onComplete(t){e.set(`currentPlacement`,t.placement)}})},setHighlightedValue({context:e,event:t}){t.value!=null&&e.set(`highlightedValue`,t.value)},clearHighlightedValue({context:e}){e.set(`highlightedValue`,null)},selectHighlightedItem(e){let{context:t,event:n,prop:r}=e,i=r(`collection`),a=t.get(`highlightedValue`);if(!a||!i.has(a))return;let o=r(`multiple`)?_(t.get(`value`),a):[a];r(`onSelect`)?.({value:o,itemValue:a,modifiers:Ge(n.modifiers)}),t.set(`value`,o);let s=p(r(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i.stringifyMany(o),clear:``});t.set(`inputValue`,s)},scrollToHighlightedItem({context:e,prop:t,scope:n}){Se(()=>{let r=e.get(`highlightedValue`);if(r==null)return;let i=Kt(n,r),a=B(n),o=t(`scrollToIndexFn`);o?o({index:t(`collection`).indexOf(r),immediate:!0,getElement:()=>Kt(n,r)}):Je(i,{rootEl:a,block:`nearest`})})},selectItem(e){let{context:t,event:n,flush:r,prop:i}=e;n.value!=null&&r(()=>{let e=i(`multiple`)?_(t.get(`value`),n.value):[n.value];i(`onSelect`)?.({value:e,itemValue:n.value,modifiers:Ge(n.modifiers)}),t.set(`value`,e);let r=p(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(e),clear:``});t.set(`inputValue`,r)})},clearItem(e){let{context:t,event:n,flush:r,prop:i}=e;n.value!=null&&r(()=>{let e=se(t.get(`value`),n.value);t.set(`value`,e);let r=p(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(e),clear:``});t.set(`inputValue`,r)})},setInitialFocus({scope:e}){be(()=>{qt(e)})},setFinalFocus({scope:e,refs:t}){t.get(`finalFocusFrame`).request(()=>{Wt(e)?.dataset.focusable==null?qt(e):Jt(e)})},cancelFinalFocus({refs:e}){e.get(`finalFocusFrame`).cancel()},cancelHighlightFrame({refs:e}){e.get(`highlightFrame`).cancel()},syncInputValue({context:e,scope:t,event:n}){let r=Vt(t);r&&(r.value=e.get(`inputValue`),queueMicrotask(()=>{n.current().type!==`INPUT.CHANGE`&&ze(r)}))},setInputValue({context:e,event:t}){e.set(`inputValue`,t.value)},clearInputValue({context:e}){e.set(`inputValue`,``)},revertInputValue({context:e,prop:t,computed:n}){let r=t(`selectionBehavior`),i=p(r,{replace:n(`hasSelectedItems`)?n(`valueAsString`):``,preserve:e.get(`inputValue`),clear:``});e.set(`inputValue`,i)},setValue(e){let{context:t,flush:n,event:r,prop:i}=e;n(()=>{t.set(`value`,r.value);let e=p(i(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:i(`collection`).stringifyMany(r.value),clear:``});t.set(`inputValue`,e)})},clearSelectedItems(e){let{context:t,flush:n,prop:r}=e;n(()=>{t.set(`value`,[]);let e=p(r(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r(`collection`).stringifyMany([]),clear:``});t.set(`inputValue`,e)})},scrollContentToTop({prop:e,scope:t}){let n=e(`scrollToIndexFn`);if(n){let r=e(`collection`).firstValue;n({index:0,immediate:!0,getElement:()=>Kt(t,r)})}else{let e=B(t);if(!e)return;e.scrollTop=0}},invokeOnOpen({prop:e,event:t,context:n}){let r=en(t);e(`onOpenChange`)?.({open:!0,reason:r,value:n.get(`value`)})},invokeOnClose({prop:e,event:t,context:n}){let r=en(t);e(`onOpenChange`)?.({open:!1,reason:r,value:n.get(`value`)})},highlightFirstItem({context:e,prop:t,scope:n,refs:r}){let i=()=>{let n=t(`collection`).firstValue;n&&e.set(`highlightedValue`,n)};B(n)?queueMicrotask(i):r.get(`highlightFrame`).request(i)},highlightFirstItemIfNeeded({computed:e,action:t}){e(`autoHighlight`)&&t([`highlightFirstItem`])},highlightLastItem({context:e,prop:t,scope:n,refs:r}){let i=()=>{let n=t(`collection`).lastValue;n&&e.set(`highlightedValue`,n)};B(n)?queueMicrotask(i):r.get(`highlightFrame`).request(i)},highlightNextItem({context:e,prop:t}){let n=null,r=e.get(`highlightedValue`),i=t(`collection`);r?(n=i.getNextValue(r),!n&&t(`loopFocus`)&&(n=i.firstValue)):n=i.firstValue,n&&e.set(`highlightedValue`,n)},highlightPrevItem({context:e,prop:t}){let n=null,r=e.get(`highlightedValue`),i=t(`collection`);r?(n=i.getPreviousValue(r),!n&&t(`loopFocus`)&&(n=i.lastValue)):n=i.lastValue,n&&e.set(`highlightedValue`,n)},highlightFirstSelectedItem({context:e,prop:t,refs:n}){n.get(`highlightFrame`).request(()=>{let[n]=t(`collection`).sort(e.get(`value`));n&&e.set(`highlightedValue`,n)})},highlightFirstOrSelectedItem({context:e,prop:t,computed:n,refs:r}){r.get(`highlightFrame`).request(()=>{let r=null;r=n(`hasSelectedItems`)?t(`collection`).sort(e.get(`value`))[0]:t(`collection`).firstValue,r&&e.set(`highlightedValue`,r)})},highlightLastOrSelectedItem({context:e,prop:t,computed:n,refs:r}){r.get(`highlightFrame`).request(()=>{let r=t(`collection`),i=null;i=n(`hasSelectedItems`)?r.sort(e.get(`value`))[0]:r.lastValue,i&&e.set(`highlightedValue`,i)})},autofillInputValue({context:e,computed:t,prop:n,event:r,scope:i}){let a=Vt(i),o=n(`collection`);if(!t(`autoComplete`)||!a||!r.keypress)return;let s=o.stringify(e.get(`highlightedValue`));be(()=>{a.value=s||e.get(`inputValue`)})},syncSelectedItems(e){queueMicrotask(()=>{let{context:t,prop:n}=e,r=n(`collection`),i=t.get(`value`),a=t.get(`selectedItemMap`),o=it({values:i,collection:r,selectedItemMap:a});t.set(`selectedItemMap`,o.nextSelectedItemMap);let s=p(n(`selectionBehavior`),{preserve:t.get(`inputValue`),replace:r.stringifyMany(i),clear:``});t.set(`inputValue`,s)})},syncHighlightedItem({context:e,prop:t}){let n=t(`collection`).find(e.get(`highlightedValue`));e.set(`highlightedItem`,n)},announceHighlightedItem({context:e,prop:t,refs:n}){if(!h())return;let r=e.get(`highlightedValue`),i=r?t(`collection`).stringifyItem(t(`collection`).find(r)):null;if(!i)return;let a=r?e.get(`value`).includes(r):!1;n.get(`liveRegion`)?.announce(a?`${i}, selected`:i)},announceResults({refs:e,prop:t}){e.get(`resultsRegion`)?.announce(tn(t),on)},cancelResultsAnnouncement({refs:e}){e.get(`resultsRegion`)?.cancel()},toggleVisibility({event:e,send:t,prop:n}){t({type:n(`open`)?`CONTROLLED.OPEN`:`CONTROLLED.CLOSE`,previousEvent:e})}}}})})))()}var ln;function un(){return(un=t((()=>{Et(),ln=Tt.extendWith(`empty`)})))()}function dn(e){let{locale:t,...n}=e||{},r=fn(t||`en-US`,{usage:`search`,...n});function i(e){return e=e.normalize(`NFC`),r.resolvedOptions().ignorePunctuation&&(e=e.replace(/\p{P}/gu,``)),e}function a(e,t){return t.length===0||(e=i(e),t=i(t),r.compare(e.slice(0,t.length),t)===0)}function o(e,t){return t.length===0||(e=i(e),t=i(t),r.compare(e.slice(-t.length),t)===0)}function s(e,t){if(t.length===0)return!0;e=i(e),t=i(t);let n=0,a=t.length;for(;n+a<=e.length;n++){let i=e.slice(n,n+a);if(r.compare(t,i)===0)return!0}return!1}return{startsWith:a,endsWith:o,contains:s}}var fn;function pn(){return(pn=t((()=>{fn=ft(Intl.Collator)})))()}function mn(e){let t=x(),n=e.locale??t.locale;return(0,hn.useMemo)(()=>dn({...e,locale:n}),[n,e])}var hn;function gn(){return(gn=t((()=>{ue(),hn=n(),pn()})))()}var _n,U;function W(){return(W=t((()=>{ge(),[_n,U]=v({name:`ComboboxContext`,hookName:`useComboboxContext`,providerName:`<ComboboxProvider />`})})))()}var vn,yn,bn;function xn(){return(xn=t((()=>{C(),W(),vn=n(),u(),yn=r(),bn=(0,vn.forwardRef)((e,t)=>{let n=U(),r=M(n.getClearTriggerProps(),e);return(0,yn.jsx)(S.button,{...r,ref:t})}),bn.displayName=`ComboboxClearTrigger`})))()}var Sn,Cn,wn;function Tn(){return(Tn=t((()=>{ce(),C(),Fe(),Pe(),W(),Sn=n(),u(),Cn=r(),wn=(0,Sn.forwardRef)((e,t)=>{let n=U(),r=F(),i=M(n.getContentProps(),r.getPresenceProps(),e),a=ie(r.ref,t);return(0,Cn.jsx)(Ae,{presence:r,children:(0,Cn.jsx)(S.div,{...i,ref:a})})}),wn.displayName=`ComboboxContent`})))()}var En,Dn,On,kn;function An(){return(An=t((()=>{un(),C(),W(),En=n(),Dn=r(),On=ln.build(),kn=(0,En.forwardRef)((e,t)=>U().collection.size===0?(0,Dn.jsx)(S.div,{...On.empty.attrs,...e,role:`presentation`,ref:t}):null),kn.displayName=`ComboboxEmpty`})))()}var jn;function Mn(){return(Mn=t((()=>{W(),jn=e=>e.children(U())})))()}var Nn,Pn,Fn;function In(){return(In=t((()=>{C(),W(),Nn=n(),u(),Pn=r(),Fn=(0,Nn.forwardRef)((e,t)=>{let n=U(),r=M(n.getControlProps(),e);return(0,Pn.jsx)(S.div,{...r,ref:t})}),Fn.displayName=`ComboboxControl`})))()}var Ln,Rn,zn;function Bn(){return(Bn=t((()=>{C(),mt(),W(),Ln=n(),u(),Rn=r(),zn=(0,Ln.forwardRef)((e,t)=>{let n=U(),r=M(n.getInputProps(),e),i=pt();return(0,Rn.jsx)(S.input,{"aria-describedby":i?.ariaDescribedby,...r,ref:t})}),zn.displayName=`ComboboxInput`})))()}var Vn,Hn;function Un(){return(Un=t((()=>{ge(),[Vn,Hn]=v({name:`ComboboxItemContext`,hookName:`useComboboxItemContext`,providerName:`<ComboboxItemProvider />`})})))()}var Wn,Gn;function Kn(){return(Kn=t((()=>{ge(),[Wn,Gn]=v({name:`ComboboxItemPropsContext`,hookName:`useComboboxItemPropsContext`,providerName:`<ComboboxItemPropsProvider />`})})))()}var qn,Jn,Yn,Xn;function Zn(){return(Zn=t((()=>{w(),C(),W(),Un(),Kn(),qn=n(),u(),Jn=r(),Yn=E(),Xn=(0,qn.forwardRef)((e,t)=>{let[n,r]=Yn(e,[`item`,`persistFocus`]),i=U(),a=M(i.getItemProps(n),r),o=i.getItemState(n);return(0,Jn.jsx)(Wn,{value:n,children:(0,Jn.jsx)(Vn,{value:o,children:(0,Jn.jsx)(S.div,{...a,ref:t})})})}),Xn.displayName=`ComboboxItem`})))()}var Qn;function $n(){return($n=t((()=>{Un(),Qn=e=>e.children(Hn())})))()}var er,tr;function nr(){return(nr=t((()=>{ge(),[er,tr]=v({name:`ComboboxItemGroupPropsContext`,hookName:`useComboboxItemGroupPropsContext`,providerName:`<ComboboxItemGroupPropsProvider />`})})))()}var rr,ir,ar,or;function sr(){return(sr=t((()=>{w(),C(),W(),nr(),rr=n(),u(),ir=r(),ar=E(),or=(0,rr.forwardRef)((e,t)=>{let n=(0,rr.useId)(),[r,i]=ar(e,[`id`]),a={id:n,...r},o=U(),s=M(o.getItemGroupProps(a),i);return(0,ir.jsx)(er,{value:a,children:(0,ir.jsx)(S.div,{...s,ref:t})})}),or.displayName=`ComboboxItemGroup`})))()}var cr,lr,ur;function dr(){return(dr=t((()=>{C(),W(),nr(),cr=n(),u(),lr=r(),ur=(0,cr.forwardRef)((e,t)=>{let n=U(),r=tr(),i=M(n.getItemGroupLabelProps({htmlFor:r.id}),e);return(0,lr.jsx)(S.div,{...i,ref:t})}),ur.displayName=`ComboboxItemGroupLabel`})))()}var fr,pr,mr;function hr(){return(hr=t((()=>{C(),W(),Kn(),fr=n(),u(),pr=r(),mr=(0,fr.forwardRef)((e,t)=>{let n=U(),r=Gn(),i=M(n.getItemIndicatorProps(r),e);return(0,pr.jsx)(S.div,{...i,ref:t})}),mr.displayName=`ComboboxItemIndicator`})))()}var gr,_r,vr;function yr(){return(yr=t((()=>{C(),W(),Kn(),gr=n(),u(),_r=r(),vr=(0,gr.forwardRef)((e,t)=>{let n=U(),r=Gn(),i=M(n.getItemTextProps(r),e);return(0,_r.jsx)(S.span,{...i,ref:t})}),vr.displayName=`ComboboxItemText`})))()}var br,xr,Sr;function Cr(){return(Cr=t((()=>{C(),W(),br=n(),u(),xr=r(),Sr=(0,br.forwardRef)((e,t)=>{let n=U(),r=M(n.getLabelProps(),e);return(0,xr.jsx)(S.label,{...r,ref:t})}),Sr.displayName=`ComboboxLabel`})))()}var wr,Tr,Er;function Dr(){return(Dr=t((()=>{C(),W(),wr=n(),u(),Tr=r(),Er=(0,wr.forwardRef)((e,t)=>{let n=U(),r=M(n.getListProps(),e);return(0,Tr.jsx)(S.div,{...r,ref:t})}),Er.displayName=`ComboboxList`})))()}var Or,kr,Ar;function jr(){return(jr=t((()=>{C(),Pe(),W(),Or=n(),u(),kr=r(),Ar=(0,Or.forwardRef)((e,t)=>{let n=U(),r=F(),i=M(n.getPositionerProps(),e);return r.unmounted?null:(0,kr.jsx)(S.div,{...i,ref:t})}),Ar.displayName=`ComboboxPositioner`})))()}var Mr,Nr;function Pr(){return(Pr=t((()=>{A(),ue(),mt(),cn(),$t(),Mr=n(),le(),y(),Nr=e=>{let t=(0,Mr.useId)(),{dir:n}=x(),{getRootNode:r}=me(),i=pt(),a={id:t,ids:{label:i?.ids.label,input:i?.ids.control},disabled:i?.disabled,readOnly:i?.readOnly,required:i?.required,invalid:i?.invalid,dir:n,getRootNode:r,...e};return Qt(j(sn,a),O)}})))()}var Fr,Ir,Lr,Rr;function zr(){return(zr=t((()=>{w(),C(),Ne(),I(),Pe(),W(),Pr(),Fr=n(),u(),Ir=r(),Lr=(e,t)=>{let[n,r]=je(e),[i,a]=E()(r,`allowCustomValue.alwaysSubmitOnEnter.autoFocus.closeOnSelect.collection.composite.defaultHighlightedValue.defaultInputValue.defaultOpen.defaultValue.disabled.disableLayer.form.highlightedValue.id.ids.inputBehavior.inputValue.loading.invalid.loopFocus.multiple.name.navigate.onFocusOutside.onHighlightChange.onInputValueChange.onInteractOutside.onOpenChange.onPointerDownOutside.onSelect.onValueChange.open.openOnChange.openOnClick.openOnKeyPress.placeholder.positioning.readOnly.required.scrollToIndexFn.selectionBehavior.translations.value`.split(`.`)),o=Nr(i),s=Oe(M({present:o.open},n)),c=M(o.getRootProps(),a);return(0,Ir.jsx)(_n,{value:o,children:(0,Ir.jsx)(Me,{value:s,children:(0,Ir.jsx)(S.div,{...c,ref:t})})})},Rr=(0,Fr.forwardRef)(Lr)})))()}var Br,Vr,Hr,Ur;function Wr(){return(Wr=t((()=>{w(),C(),Ne(),I(),Pe(),W(),Br=n(),u(),Vr=r(),Hr=(e,t)=>{let[n,r]=je(e),[{value:i},a]=E()(r,[`value`]),o=Oe(M({present:i.open},n)),s=M(i.getRootProps(),a);return(0,Vr.jsx)(_n,{value:i,children:(0,Vr.jsx)(Me,{value:o,children:(0,Vr.jsx)(S.div,{...s,ref:t})})})},Ur=(0,Br.forwardRef)(Hr)})))()}var Gr,Kr,qr,Jr;function Yr(){return(Yr=t((()=>{w(),C(),W(),Gr=n(),u(),Kr=r(),qr=E(),Jr=(0,Gr.forwardRef)((e,t)=>{let[n,r]=qr(e,[`focusable`]),i=U(),a=M(i.getTriggerProps(n),r);return(0,Kr.jsx)(S.button,{...a,ref:t})}),Jr.displayName=`ComboboxTrigger`})))()}var G;function Xr(){return(Xr=t((()=>{ae(),xn(),Tn(),An(),Mn(),In(),Bn(),Zn(),$n(),sr(),dr(),hr(),yr(),Cr(),Dr(),jr(),zr(),Wr(),Yr(),G=de({ClearTrigger:()=>bn,Content:()=>wn,Context:()=>jn,Control:()=>Fn,Empty:()=>kn,Input:()=>zn,Item:()=>Xn,ItemContext:()=>Qn,ItemGroup:()=>or,ItemGroupLabel:()=>ur,ItemIndicator:()=>mr,ItemText:()=>vr,Label:()=>Sr,List:()=>Er,Positioner:()=>Ar,Root:()=>Rr,RootProvider:()=>Ur,Trigger:()=>Jr})})))()}var Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,K;function Ti(){return(Ti=t((()=>{Zr=`_root_227zw_45`,Qr=`_control_227zw_52`,$r=`_input_227zw_63`,ei=`_iconButton_227zw_77`,ti=`_small_227zw_88`,ni=`_large_227zw_93`,ri=`_multiple_227zw_104`,ii=`_iconContainer_227zw_119`,ai=`_tags_227zw_123`,oi=`_startAdornment_227zw_175`,si=`_clearButton_227zw_190`,ci=`_trigger_227zw_218`,li=`_positioner_227zw_251`,ui=`_content_227zw_256`,di=`_expand_227zw_1`,fi=`_collapse_227zw_1`,pi=`_itemGroup_227zw_317`,mi=`_item_227zw_317`,hi=`_indicator_227zw_339`,gi=`_itemIcon_227zw_340`,_i=`_itemText_227zw_370`,vi=`_multipleContent_227zw_384`,yi=`_itemIndicator_227zw_395`,bi=`_createItem_227zw_404`,xi=`_noMatches_227zw_410`,Si=`_loading_227zw_411`,Ci=`_disabled_227zw_418`,wi=`_invalid_227zw_437`,K={root:Zr,control:Qr,input:$r,iconButton:ei,small:ti,large:ni,multiple:ri,iconContainer:ii,tags:ai,startAdornment:oi,clearButton:si,trigger:ci,positioner:li,content:ui,expand:di,collapse:fi,itemGroup:pi,item:mi,indicator:hi,itemIcon:gi,itemText:_i,multipleContent:vi,itemIndicator:yi,createItem:bi,noMatches:xi,loading:Si,disabled:Ci,invalid:wi}})))()}var Ei,Di,Oi;function ki(){return(ki=t((()=>{Ei=i(),Xr(),ht(),Ti(),s(),Di=r(),Oi=e=>{let t=(0,Ei.c)(11),{option:n,query:r,highlightMatch:i}=e,a;t[0]===n.icon?a=t[1]:(a=n.icon&&(0,Di.jsx)(o,{className:K.itemIcon,icon:n.icon,"aria-hidden":`true`}),t[0]=n.icon,t[1]=a);let s;t[2]!==i||t[3]!==n.label||t[4]!==r?(s=i?(0,Di.jsx)(gt,{query:r,text:n.label,ignoreCase:!0}):n.label,t[2]=i,t[3]=n.label,t[4]=r,t[5]=s):s=t[5];let c;t[6]===s?c=t[7]:(c=(0,Di.jsx)(G.ItemText,{className:K.itemText,children:s}),t[6]=s,t[7]=c);let l;return t[8]!==a||t[9]!==c?(l=(0,Di.jsxs)(Di.Fragment,{children:[a,c]}),t[8]=a,t[9]=c,t[10]=l):l=t[10],l}})))()}var Ai,ji,q,Mi,Ni,Pi,Fi,Ii;function Li(){return(Li=t((()=>{Ai=n(),Xr(),at(),Pr(),gn(),De(),ji=e(a(),1),Ti(),ki(),s(),wt(),q=r(),Mi=`__ds-autocomplete-create__`,Ni=`,`,Pi=(e,t)=>e.toLocaleLowerCase()===t.toLocaleLowerCase(),Fi=(e,t)=>e.find(e=>Pi(e.label,t)),Ii=({id:e,options:t=[],value:n,loading:r=!1,size:i=`default`,style:a,className:s,placeholder:c,disabled:l=!1,invalid:u=!1,onValueChange:d,onCreate:f,onInputValueChange:p,onOpenChange:m,locale:{loading:ee=`Loading...`,noMatches:te=`No matching tags`,addTag:h=`Add tag...`,createTag:ne=e=>`Create new tag '${e}'`,removeTag:g=e=>`Remove ${e}`}={},highlightMatch:_=!0,showTrigger:v=!0,startAdornment:re})=>{let y=(0,Ai.useId)(),[b,x]=(0,Ai.useState)(``),[S,C]=(0,Ai.useState)(null),w=mn({sensitivity:`base`}),T=b.trim(),E=T?t.filter(e=>w.contains(e.label,T)):t,D=f&&T&&!Fi(t,T)?{value:Mi,label:T}:null,O=lt({items:D?[...E,D]:E,itemToString:e=>e.label,itemToValue:e=>e.value}),k=e=>{x(e),C(null),p?.(e)},A=e=>{let r=[...n],i=[];for(let n of e){let e=n.trim(),a=e?Fi(t,e):void 0,o=a?.value??(f&&e?e:null);o===null||r.some(e=>Pi(e,o))||(a||i.push(e),r.push(o))}r.length!==n.length&&(i.forEach(e=>f?.(e)),d?.(r))},ie=e=>{d?.(n.filter(t=>t!==e))},ae=Nr({id:e??y,collection:O,disabled:l,invalid:u,multiple:!0,value:n,inputValue:b,highlightedValue:S,openOnClick:!0,loopFocus:!1,allowCustomValue:!0,selectionBehavior:`preserve`,onHighlightChange:e=>C(e.highlightedValue),onInputValueChange:e=>{if(!e.inputValue.includes(Ni)){k(e.inputValue);return}let t=e.inputValue.split(Ni),n=t.pop()??``;A(t),k(n.trimStart())},onValueChange:e=>{e.value.includes(Mi)?A([T]):d?.(e.value),k(``)},onOpenChange:e=>{e.open||k(``),m?.(e.open)}}),j=e=>{e.key===`Enter`&&!S?(e.preventDefault(),A([b]),k(``)):e.key===`Backspace`&&!b&&n.length?ie(n[n.length-1]):e.key===`Escape`&&k(``)},oe=e=>{let t=e.clipboardData.getData(`text`);t.includes(Ni)&&(e.preventDefault(),A(`${b}${t}`.split(Ni)),k(``))},se=e=>t.find(t=>t.value===e)?.label??e,ce=D?O.items.slice(0,-1):O.items,le=i===`small`?`small`:`medium`;return(0,q.jsxs)(G.RootProvider,{value:ae,className:(0,ji.default)(K.root,{[K.disabled]:l,[K.invalid]:u},s),style:a,lazyMount:!0,unmountOnExit:!0,children:[(0,q.jsxs)(G.Control,{className:(0,ji.default)(K.control,K.multiple,i===`small`&&K.small,i===`large`&&K.large),children:[re&&(0,q.jsx)(`span`,{className:K.startAdornment,children:re}),(0,q.jsxs)(`div`,{className:K.tags,children:[n.map(e=>{let t=se(e);return(0,q.jsx)(Ct,{label:t,size:`small`,disabled:l,locale:{deleteAriaLabel:g(t)},onDelete:()=>ie(e)},e)}),(0,q.jsx)(G.Input,{className:K.input,placeholder:n.length?h:c??(f?`Search or create a tag`:`Search tags`),onKeyDown:j,onPaste:oe})]}),v&&(0,q.jsx)(`div`,{className:K.iconContainer,children:(0,q.jsx)(G.Trigger,{className:K.trigger,"aria-label":`Toggle dropdown`,children:(0,q.jsx)(o,{icon:`keyboard_arrow_down`,size:le})})})]}),(0,q.jsx)(ke,{children:(0,q.jsx)(G.Positioner,{className:K.positioner,children:(0,q.jsxs)(G.Content,{className:(0,ji.default)(K.content,K.multipleContent),children:[r&&(0,q.jsx)(`div`,{className:K.loading,children:ee}),!r&&O.items.length===0&&(0,q.jsx)(`div`,{className:K.noMatches,children:te}),!r&&ce.length>0&&(0,q.jsx)(G.ItemGroup,{className:K.itemGroup,children:ce.map(e=>(0,q.jsxs)(G.Item,{item:e,className:K.item,children:[(0,q.jsx)(Oi,{option:e,query:T,highlightMatch:_}),(0,q.jsx)(G.ItemIndicator,{className:K.itemIndicator,children:(0,q.jsx)(o,{icon:`check`,size:`small`,"aria-hidden":`true`})})]},e.value))}),!r&&D&&(0,q.jsx)(G.Item,{item:D,className:(0,ji.default)(K.item,K.createItem),children:(0,q.jsx)(G.ItemText,{className:K.itemText,children:ne(D.label)})})]})})})]})},Ii.__docgenInfo={description:``,methods:[],displayName:`AutocompleteTags`,props:{options:{defaultValue:{value:`[]`,computed:!1},required:!1},loading:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`'default'`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},invalid:{defaultValue:{value:`false`,computed:!1},required:!1},locale:{defaultValue:{value:`{}`,computed:!1},required:!1},highlightMatch:{defaultValue:{value:`true`,computed:!1},required:!1},showTrigger:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}function Ri(e){return e.label}function zi(e){return e.value}var Bi,Vi,Hi,J,Ui,Y;function Wi(){return(Wi=t((()=>{Bi=i(),Vi=n(),Xr(),at(),gn(),De(),Hi=e(a(),1),Ti(),s(),ki(),Li(),J=r(),Ui=e=>{let t=(0,Bi.c)(58),{id:n,options:r,loading:i,size:a,style:s,className:c,placeholder:l,disabled:u,invalid:d,onValueChange:f,onInputValueChange:p,onOpenChange:m,locale:ee,highlightMatch:te,showTrigger:h,startAdornment:ne}=e,g=r===void 0?[]:r,_=i!==void 0&&i,v=a===void 0?`default`:a,re=l===void 0?`Start typing to search...`:l,y=u!==void 0&&u,b=d!==void 0&&d,x;t[0]===ee?x=t[1]:(x=ee===void 0?{}:ee,t[0]=ee,t[1]=x);let{loading:S,noMatches:C}=x,w=S===void 0?`Loading...`:S,T=C===void 0?`No matches found`:C,E=te===void 0||te,D=h===void 0||h,[O,k]=(0,Vi.useState)(``),A;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(A={sensitivity:`base`},t[2]=A):A=t[2];let ie=mn(A),ae=O?g.filter(e=>ie.contains(e.label,O)):g,j=lt({items:ae,itemToString:Ri,itemToValue:zi}),oe;t[3]===p?oe=t[4]:(oe=e=>{k(e.inputValue),p?.(e.inputValue)},t[3]=p,t[4]=oe);let se=oe,ce;t[5]===f?ce=t[6]:(ce=e=>{let t=e.items[0];f?.(t?.value??``)},t[5]=f,t[6]=ce);let le=ce,ue;t[7]===m?ue=t[8]:(ue=e=>{m?.(e.open)},t[7]=m,t[8]=ue);let de=ue,fe;t[9]!==c||t[10]!==y||t[11]!==b?(fe=(0,Hi.default)(K.root,{[K.disabled]:y,[K.invalid]:b},c),t[9]=c,t[10]=y,t[11]=b,t[12]=fe):fe=t[12];let pe=fe,me=G,he=v===`small`&&K.small,ge=v===`large`&&K.large,M;t[13]!==he||t[14]!==ge?(M=(0,Hi.default)(K.control,he,ge),t[13]=he,t[14]=ge,t[15]=M):M=t[15];let _e;t[16]===ne?_e=t[17]:(_e=ne&&(0,J.jsx)(`span`,{className:K.startAdornment,children:ne}),t[16]=ne,t[17]=_e);let ve;t[18]===re?ve=t[19]:(ve=(0,J.jsx)(G.Input,{className:K.input,placeholder:re}),t[18]=re,t[19]=ve);let N;t[20]!==y||t[21]!==D||t[22]!==v?(N=(0,J.jsx)(G.Context,{children:e=>(0,J.jsxs)(`div`,{className:K.iconContainer,children:[e.inputValue&&!y&&(0,J.jsx)(`button`,{type:`button`,className:K.clearButton,"aria-label":`Clear`,onClick:()=>{e.setValue([]),e.setInputValue(``)},children:(0,J.jsx)(o,{icon:`close`,size:v===`small`?`small`:`medium`})}),D&&(0,J.jsx)(G.Trigger,{className:K.trigger,"aria-label":`Toggle dropdown`,children:(0,J.jsx)(o,{icon:`keyboard_arrow_down`,size:v===`small`?`small`:`medium`})})]})}),t[20]=y,t[21]=D,t[22]=v,t[23]=N):N=t[23];let ye;t[24]!==M||t[25]!==_e||t[26]!==ve||t[27]!==N?(ye=(0,J.jsxs)(G.Control,{className:M,children:[_e,ve,N]}),t[24]=M,t[25]=_e,t[26]=ve,t[27]=N,t[28]=ye):ye=t[28];let be=ke,xe=G,Se=K,Ce=G,we=K,Te;t[29]!==_||t[30]!==w?(Te=_&&(0,J.jsx)(`div`,{className:K.loading,children:w}),t[29]=_,t[30]=w,t[31]=Te):Te=t[31];let Ee=!_&&j.items.length===0&&(0,J.jsx)(`div`,{className:K.noMatches,children:T}),De=!_&&j.items.length>0&&(0,J.jsx)(G.ItemGroup,{className:K.itemGroup,children:j.items.map(e=>(0,J.jsx)(G.Item,{item:e,className:K.item,children:(0,J.jsx)(Oi,{option:e,query:O,highlightMatch:E})},e.value))}),P;t[32]!==Ce.Content||t[33]!==we.content||t[34]!==Te||t[35]!==Ee||t[36]!==De?(P=(0,J.jsxs)(Ce.Content,{className:we.content,children:[Te,Ee,De]}),t[32]=Ce.Content,t[33]=we.content,t[34]=Te,t[35]=Ee,t[36]=De,t[37]=P):P=t[37];let F;t[38]!==xe.Positioner||t[39]!==Se.positioner||t[40]!==P?(F=(0,J.jsx)(xe.Positioner,{className:Se.positioner,children:P}),t[38]=xe.Positioner,t[39]=Se.positioner,t[40]=P,t[41]=F):F=t[41];let I;t[42]!==be||t[43]!==F?(I=(0,J.jsx)(be,{children:F}),t[42]=be,t[43]=F,t[44]=I):I=t[44];let Oe;return t[45]!==j||t[46]!==y||t[47]!==se||t[48]!==de||t[49]!==le||t[50]!==n||t[51]!==b||t[52]!==pe||t[53]!==s||t[54]!==me.Root||t[55]!==ye||t[56]!==I?(Oe=(0,J.jsxs)(me.Root,{id:n,collection:j,className:pe,style:s,disabled:y,invalid:b,onInputValueChange:se,onValueChange:le,onOpenChange:de,closeOnSelect:!0,lazyMount:!0,unmountOnExit:!0,children:[ye,I]}),t[45]=j,t[46]=y,t[47]=se,t[48]=de,t[49]=le,t[50]=n,t[51]=b,t[52]=pe,t[53]=s,t[54]=me.Root,t[55]=ye,t[56]=I,t[57]=Oe):Oe=t[57],Oe},Y=e=>{let t=(0,Bi.c)(2),n;return t[0]===e?n=t[1]:(n=e.multiple?(0,J.jsx)(Ii,{...e}):(0,J.jsx)(Ui,{...e}),t[0]=e,t[1]=n),n},Y.displayName=`DsAutocomplete`})))()}var Gi;function Ki(){return(Ki=t((()=>{Gi=[`small`,`default`,`large`]})))()}var qi,Ji;function Yi(){return(Yi=t((()=>{qi=`_field_1f04r_1`,Ji={field:qi}})))()}var X,Z,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,Q,ca,la,ua,$,da;function fa(){return(fa=t((()=>{X=n(),vt(),s(),St(),bt(),_t(),Wi(),Ki(),Yi(),Z=r(),Xi={title:`Components/Autocomplete`,component:Y,parameters:{layout:`centered`},decorators:[e=>(0,Z.jsx)(`div`,{className:Ji.field,children:(0,Z.jsx)(e,{})})],argTypes:{options:{control:`object`},size:{control:`select`,options:Gi},placeholder:{control:`text`},highlightMatch:{control:`boolean`},showTrigger:{control:`boolean`},loading:{control:`boolean`},disabled:{control:`boolean`},invalid:{control:`boolean`},locale:{control:`object`},startAdornment:{control:!1},multiple:{control:!1},value:{control:!1},onValueChange:{action:`valueChange`},onInputValueChange:{action:`inputValueChange`},onOpenChange:{action:`openChange`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},Zi={args:{placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},Qi={render:()=>(0,Z.jsx)(Y,{showTrigger:!1,placeholder:`Start typing to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]})},$i={args:{showTrigger:!1,startAdornment:(0,Z.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`,options:[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]}},ea={args:{placeholder:`Select a fruit...`,options:[{value:`apple`,label:`Apple`,icon:`nutrition`},{value:`banana`,label:`Banana`,icon:`nutrition`},{value:`cherry`,label:`Cherry`,icon:`nutrition`}]}},ta={render:()=>(0,Z.jsx)(Y,{highlightMatch:!1,placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]})},na={args:{loading:!0,placeholder:`Loading options...`,options:[]}},ra={args:{disabled:!0,placeholder:`Disabled autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},ia={args:{invalid:!0,placeholder:`Invalid autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},aa={args:{locale:{loading:`Fetching...`,noMatches:`No matching options found`},placeholder:`Search or type...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},oa={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,X.useState)([]),[r,i]=(0,X.useState)(!1),a=async e=>{e?(i(!0),await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}].filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),i(!1)):n([])};return(0,Z.jsx)(Y,{...e,options:t,loading:r,onInputValueChange:a,showTrigger:!1,startAdornment:(0,Z.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries (async)...`,locale:{noMatches:`No results found`}})}},sa={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,X.useState)([]),[r,i]=(0,X.useState)(!0);return(0,X.useEffect)(()=>{(async()=>{await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]),i(!1)})()},[]),(0,Z.jsx)(Y,{...e,options:t,loading:r,placeholder:`Select a country...`})}},Q={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,X.useState)([{value:`production`,label:`Production`},{value:`staging`,label:`Staging`},{value:`security`,label:`Security`},{value:`compliance`,label:`Compliance`},{value:`nightly`,label:`Nightly`}]),[n,r]=(0,X.useState)([`production`,`security`]);return(0,Z.jsx)(Y,{multiple:!0,options:e,value:n,onValueChange:r,onCreate:e=>t(t=>[...t,{value:e,label:e}])})}},ca={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,X.useState)([]);return(0,Z.jsx)(Y,{multiple:!0,options:[{value:`production`,label:`Production`},{value:`staging`,label:`Staging`},{value:`security`,label:`Security`}],value:e,onValueChange:t})}},la={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,X.useState)(!1);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(yt,{onClick:()=>n(!0),children:`Assign owner`}),(0,Z.jsxs)(xt,{open:t,onOpenChange:n,columns:4,children:[(0,Z.jsxs)(xt.Header,{children:[(0,Z.jsx)(xt.Title,{children:`Assign owner`}),(0,Z.jsx)(xt.CloseTrigger,{})]}),(0,Z.jsx)(xt.Body,{children:(0,Z.jsx)(Y,{...e,placeholder:`Search team members...`,options:[{value:`alice`,label:`Alice Cohen`},{value:`bob`,label:`Bob Levi`},{value:`carol`,label:`Carol Smith`}]})})]})]})}},ua={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}];return(0,Z.jsxs)(R,{direction:`column`,gap:`var(--standard)`,width:`320px`,children:[(0,Z.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Z.jsx)(L,{variant:`body-xs-reg`,color:`secondary`,children:`Large`}),(0,Z.jsx)(Y,{options:e,size:`large`,placeholder:`Large autocomplete`})]}),(0,Z.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Z.jsx)(L,{variant:`body-xs-reg`,color:`secondary`,children:`Default`}),(0,Z.jsx)(Y,{options:e,size:`default`,placeholder:`Default autocomplete`})]}),(0,Z.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Z.jsx)(L,{variant:`body-xs-reg`,color:`secondary`,children:`Small`}),(0,Z.jsx)(Y,{options:e,size:`small`,placeholder:`Small autocomplete`})]}),Gi.map(t=>(0,Z.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Z.jsxs)(L,{variant:`body-xs-reg`,color:`secondary`,children:[`Tags, `,t]}),(0,Z.jsx)(Y,{multiple:!0,size:t,options:e,value:[`apple`,`banana`]})]},t))]})}},$={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}];return(0,Z.jsxs)(R,{direction:`column`,gap:`var(--standard)`,width:`320px`,children:[(0,Z.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Z.jsx)(L,{variant:`body-xs-reg`,color:`secondary`,children:`Disabled`}),(0,Z.jsx)(Y,{options:e,disabled:!0,placeholder:`Disabled autocomplete`})]}),(0,Z.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Z.jsx)(L,{variant:`body-xs-reg`,color:`secondary`,children:`Invalid`}),(0,Z.jsx)(Y,{options:e,invalid:!0,placeholder:`Invalid autocomplete`})]}),(0,Z.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Z.jsx)(L,{variant:`body-xs-reg`,color:`secondary`,children:`Tags`}),(0,Z.jsx)(Y,{multiple:!0,options:e,value:[`apple`,`banana`,`cherry`]})]}),(0,Z.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Z.jsx)(L,{variant:`body-xs-reg`,color:`secondary`,children:`Tags, disabled`}),(0,Z.jsx)(Y,{multiple:!0,options:e,value:[`apple`,`banana`],disabled:!0})]}),(0,Z.jsxs)(R,{direction:`column`,gap:`var(--2xs)`,children:[(0,Z.jsx)(L,{variant:`body-xs-reg`,color:`secondary`,children:`Tags, invalid`}),(0,Z.jsx)(Y,{multiple:!0,options:e,value:[`apple`],invalid:!0})]})]})}},da=[`Default`,`SearchMode`,`WithStartAdornment`,`WithOptionIcons`,`WithoutHighlight`,`Loading`,`Disabled`,`Invalid`,`Localized`,`AsyncSearch`,`AsyncOptions`,`Tags`,`TagsSelectOnly`,`InsideModal`,`Sizes`,`States`],Zi.parameters={...Zi.parameters,docs:{...Zi.parameters?.docs,source:{originalSource:`{
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
}`,...Zi.parameters?.docs?.source},description:{story:`The default autocomplete opens its dropdown from the trigger arrow or by typing,
and highlights the matching text while the list is filtered. Reach for this when the
user should be able to both browse the full list and search within it.`,...Zi.parameters?.docs?.description}}},Qi.parameters={...Qi.parameters,docs:{...Qi.parameters?.docs,source:{originalSource:`{
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
}`,...Qi.parameters?.docs?.source},description:{story:`Search mode hides the trigger arrow so the list only opens while typing. Use it for
search-style inputs where a persistent dropdown affordance would imply a short, fixed list.`,...Qi.parameters?.docs?.description}}},$i.parameters={...$i.parameters,docs:{...$i.parameters?.docs,source:{originalSource:`{
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
}`,...$i.parameters?.docs?.source},description:{story:"A `startAdornment` renders content before the input — most often a search icon — to\nreinforce the search intent without adding a separate label.",...$i.parameters?.docs?.description}}},ea.parameters={...ea.parameters,docs:{...ea.parameters?.docs,source:{originalSource:`{
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
}`,...ea.parameters?.docs?.source},description:{story:"Each option can carry an `icon` that renders alongside its label, useful for giving\noptions a recognizable visual anchor.",...ea.parameters?.docs?.description}}},ta.parameters={...ta.parameters,docs:{...ta.parameters?.docs,source:{originalSource:`{
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
}`,...ta.parameters?.docs?.source},description:{story:"Disable match highlighting when the emphasized `mark` styling would compete with the\noption content, or when matches are handled server-side and no local query is available.",...ta.parameters?.docs?.description}}},na.parameters={...na.parameters,docs:{...na.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    placeholder: 'Loading options...',
    options: []
  }
}`,...na.parameters?.docs?.source},description:{story:"While `loading` is true a loading message replaces the option list, signalling that\nresults are being fetched. Pair it with server-driven `options` (see AsyncSearch).",...na.parameters?.docs?.description}}},ra.parameters={...ra.parameters,docs:{...ra.parameters?.docs,source:{originalSource:`{
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
}`,...ra.parameters?.docs?.source},description:{story:`The disabled state blocks all interaction and dims the control. Use it when the field
depends on another selection that has not been made yet.`,...ra.parameters?.docs?.description}}},ia.parameters={...ia.parameters,docs:{...ia.parameters?.docs,source:{originalSource:`{
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
}`,...ia.parameters?.docs?.source},description:{story:`The invalid state applies an error border for use with external validation — the input
stays focusable so the user can correct their entry.`,...ia.parameters?.docs?.description}}},aa.parameters={...aa.parameters,docs:{...aa.parameters?.docs,source:{originalSource:`{
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
}`,...aa.parameters?.docs?.source},description:{story:"The `locale` prop overrides the loading and empty-state messages so the component can be\ntranslated. Only the strings passed are overridden; omitted keys keep their defaults.",...aa.parameters?.docs?.description}}},oa.parameters={...oa.parameters,docs:{...oa.parameters?.docs,source:{originalSource:`{
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
}`,...oa.parameters?.docs?.source},description:{story:"For server-driven search, keep the fetched results in local state and feed them back via\n`options` while toggling `loading`. This is the recommended pattern for large or remote\ndatasets that should not be filtered on the client.",...oa.parameters?.docs?.description}}},sa.parameters={...sa.parameters,docs:{...sa.parameters?.docs,source:{originalSource:`{
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
}`,...sa.parameters?.docs?.source},description:{story:"When the full option set is fetched once on mount, start in a `loading` state and swap in\nthe results when the request resolves. After that the component filters locally.",...sa.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:'Tags mode (`multiple`) collects several values as removable tags inside the field. Picking\nan option toggles it and keeps the list open. Pass `onCreate` to let users add tags that are\nnot in the list yet: type a name and press Enter or a comma, pick the "Create new tag" row, or\npaste a comma-separated list. Append created names to `options` so they stay selectable.',...Q.parameters?.docs?.description}}},ca.parameters={...ca.parameters,docs:{...ca.parameters?.docs,source:{originalSource:`{
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
}`,...ua.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Visual comparison of the disabled, invalid and tags states side by side. Reference only —
behavior for each state is covered by the individual stories and browser tests.`,...$.parameters?.docs?.description}}}})))()}fa();export{sa as AsyncOptions,oa as AsyncSearch,Zi as Default,ra as Disabled,la as InsideModal,ia as Invalid,na as Loading,aa as Localized,Qi as SearchMode,ua as Sizes,$ as States,Q as Tags,ca as TagsSelectOnly,ea as WithOptionIcons,$i as WithStartAdornment,ta as WithoutHighlight,da as __namedExportsOrder,Xi as default};