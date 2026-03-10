import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-DDCuL2kn.js";import{D as $}from"./ds-icon-BGp7VcVe.js";import{c as Xe}from"./index-h_0AxY3V.js";import{c as re,m as S,a as A,d as Ze,b as Oe,u as et}from"./use-locale-context-CNbZwcvx.js";import{i as tt}from"./cache-DQEOqL51.js";import{L as Te,d as de,r as at,c as nt,a as ot}from"./list-collection-Boea3DmO.js";import{s as it,P as lt}from"./portal-Co5KPph9.js";import{c as Q}from"./create-split-props-u5h9OPvL.js";import{a as Be,u as st,P as rt}from"./use-presence-CspLq4Co.js";import{u as Se}from"./use-field-context-D3JLn_zq.js";import{k as ct,l as I,I as pe,O as ut,G as dt,V as F,W as pt,P as ve,X as gt,H as ht,u as mt,y as vt}from"./create-anatomy-CWlJjoFg.js";import{s as It,t as ft,g as yt}from"./index-DFMBogvc.js";import{g as Ct,a as Ie}from"./get-styles-3ju_Ph2v.js";import{b as bt}from"./query-CjgVAlRR.js";import{s as Pe}from"./caret-BrXylHYy.js";import{o as wt}from"./mutation-observer-Cu1ou0At.js";import{t as xt,s as fe}from"./dismissable-layer-Bt251ZfL.js";import{c as Vt}from"./navigate-BqRKyzYD.js";import{r as L,n as Et}from"./raf-CC9hSMXO.js";import{i as Ot}from"./equal-DfFTejAs.js";import{r as Tt,j as Bt,h as St,d as X,l as ye,k as Pt}from"./event-CBXSxTbR.js";import"./preload-helper-PPVm8Dsz.js";import"./chunk-QZ7TP4HQ-O9Gy0rNO.js";import"./index-12BXFlkP.js";import"./index-6gYDP_Tj.js";import"./set-CfHggmHL.js";import"./computed-style-eAhRxBXE.js";import"./floating-ui.dom-o9At5h4Q.js";const[Rt,N]=re({name:"ComboboxContext",hookName:"useComboboxContext",providerName:"<ComboboxProvider />"}),Re=b.forwardRef((e,t)=>{const a=N(),n=S(a.getClearTriggerProps(),e);return r.jsx(A.button,{...n,ref:t})});Re.displayName="ComboboxClearTrigger";const Le=b.forwardRef((e,t)=>{const a=N(),n=Be(),o=S(a.getContentProps(),n.getPresenceProps(),e);return n.unmounted?null:r.jsx(A.div,{...o,ref:Ze(n.ref,t)})});Le.displayName="ComboboxContent";var Lt=ct("combobox").parts("root","clearTrigger","content","control","input","item","itemGroup","itemGroupLabel","itemIndicator","itemText","label","list","positioner","trigger"),O=Lt.build(),Ae=e=>new Te(e);Ae.empty=()=>new Te({items:[]});var At=e=>e.ids?.root??`combobox:${e.id}`,ge=e=>e.ids?.label??`combobox:${e.id}:label`,Ne=e=>e.ids?.control??`combobox:${e.id}:control`,le=e=>e.ids?.input??`combobox:${e.id}:input`,se=e=>e.ids?.content??`combobox:${e.id}:content`,De=e=>e.ids?.positioner??`combobox:${e.id}:popper`,ke=e=>e.ids?.trigger??`combobox:${e.id}:toggle-btn`,He=e=>e.ids?.clearTrigger??`combobox:${e.id}:clear-btn`,Nt=(e,t)=>e.ids?.itemGroup?.(t)??`combobox:${e.id}:optgroup:${t}`,Ce=(e,t)=>e.ids?.itemGroupLabel?.(t)??`combobox:${e.id}:optgroup-label:${t}`,be=(e,t)=>e.ids?.item?.(t)??`combobox:${e.id}:option:${t}`,M=e=>e.getById(se(e)),K=e=>e.getById(le(e)),we=e=>e.getById(De(e)),xe=e=>e.getById(Ne(e)),J=e=>e.getById(ke(e)),Dt=e=>e.getById(He(e)),q=(e,t)=>{if(t==null)return null;const a=`[role=option][data-value="${CSS.escape(t)}"]`;return bt(M(e),a)},he=e=>{const t=K(e);e.isActiveElement(t)||t?.focus({preventScroll:!0}),Pe(t)},kt=e=>{const t=J(e);e.isActiveElement(t)||t?.focus({preventScroll:!0})};function Ht(e,t){const{context:a,prop:n,state:o,send:i,scope:l,computed:p,event:d}=e,g=n("translations"),m=n("collection"),y=!!n("disabled"),w=p("isInteractive"),E=!!n("invalid"),U=!!n("required"),P=!!n("readOnly"),C=o.hasTag("open"),Y=o.hasTag("focused"),D=n("composite"),R=a.get("highlightedValue"),W=Ct({...n("positioning"),placement:a.get("currentPlacement")});function G(s){const u=m.getItemDisabled(s.item),x=m.getItemValue(s.item);return ut(x,()=>`[zag-js] No value found for item ${JSON.stringify(s.item)}`),{value:x,disabled:!!(y||u),highlighted:R===x,selected:a.get("value").includes(x)}}return{focused:Y,open:C,inputValue:a.get("inputValue"),highlightedValue:R,highlightedItem:a.get("highlightedItem"),value:a.get("value"),valueAsString:p("valueAsString"),hasSelectedItems:p("hasSelectedItems"),selectedItems:p("selectedItems"),collection:n("collection"),multiple:!!n("multiple"),disabled:!!y,syncSelectedItems(){i({type:"SELECTED_ITEMS.SYNC"})},reposition(s={}){i({type:"POSITIONING.SET",options:s})},setHighlightValue(s){i({type:"HIGHLIGHTED_VALUE.SET",value:s})},clearHighlightValue(){i({type:"HIGHLIGHTED_VALUE.CLEAR"})},selectValue(s){i({type:"ITEM.SELECT",value:s})},setValue(s){i({type:"VALUE.SET",value:s})},setInputValue(s,u="script"){i({type:"INPUT_VALUE.SET",value:s,src:u})},clearValue(s){s!=null?i({type:"ITEM.CLEAR",value:s}):i({type:"VALUE.CLEAR"})},focus(){K(l)?.focus()},setOpen(s,u="script"){o.hasTag("open")!==s&&i({type:s?"OPEN":"CLOSE",src:u})},getRootProps(){return t.element({...O.root.attrs,dir:n("dir"),id:At(l),"data-invalid":I(E),"data-readonly":I(P)})},getLabelProps(){return t.label({...O.label.attrs,dir:n("dir"),htmlFor:le(l),id:ge(l),"data-readonly":I(P),"data-disabled":I(y),"data-invalid":I(E),"data-required":I(U),"data-focus":I(Y),onClick(s){D||(s.preventDefault(),J(l)?.focus({preventScroll:!0}))}})},getControlProps(){return t.element({...O.control.attrs,dir:n("dir"),id:Ne(l),"data-state":C?"open":"closed","data-focus":I(Y),"data-disabled":I(y),"data-invalid":I(E)})},getPositionerProps(){return t.element({...O.positioner.attrs,dir:n("dir"),id:De(l),style:W.floating})},getInputProps(){return t.input({...O.input.attrs,dir:n("dir"),"aria-invalid":pe(E),"data-invalid":I(E),"data-autofocus":I(n("autoFocus")),name:n("name"),form:n("form"),disabled:y,required:n("required"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"none",spellCheck:"false",readOnly:P,placeholder:n("placeholder"),id:le(l),type:"text",role:"combobox",defaultValue:a.get("inputValue"),"aria-autocomplete":p("autoComplete")?"both":"list","aria-controls":se(l),"aria-expanded":C,"data-state":C?"open":"closed","aria-activedescendant":R?be(l,R):void 0,onClick(s){s.defaultPrevented||n("openOnClick")&&w&&i({type:"INPUT.CLICK",src:"input-click"})},onFocus(){y||i({type:"INPUT.FOCUS"})},onBlur(){y||i({type:"INPUT.BLUR"})},onChange(s){i({type:"INPUT.CHANGE",value:s.currentTarget.value,src:"input-change"})},onKeyDown(s){if(s.defaultPrevented||!w||s.ctrlKey||s.shiftKey||Pt(s))return;const u=n("openOnKeyPress"),x=s.ctrlKey||s.metaKey||s.shiftKey,h=!0,k={ArrowDown(H){!u&&!C||(i({type:H.altKey?"OPEN":"INPUT.ARROW_DOWN",keypress:h,src:"arrow-key"}),H.preventDefault())},ArrowUp(){!u&&!C||(i({type:s.altKey?"CLOSE":"INPUT.ARROW_UP",keypress:h,src:"arrow-key"}),s.preventDefault())},Home(H){x||(i({type:"INPUT.HOME",keypress:h}),C&&H.preventDefault())},End(H){x||(i({type:"INPUT.END",keypress:h}),C&&H.preventDefault())},Enter(H){i({type:"INPUT.ENTER",keypress:h,src:"item-select"});const Ye=p("isCustomValue")&&n("allowCustomValue"),Je=R!=null,Qe=n("alwaysSubmitOnEnter");if(C&&!Ye&&!Qe&&Je&&H.preventDefault(),R==null)return;const ue=q(l,R);dt(ue)&&n("navigate")?.({value:R,node:ue,href:ue.href})},Escape(){i({type:"INPUT.ESCAPE",keypress:h,src:"escape-key"}),s.preventDefault()}},$e=ye(s,{dir:n("dir")}),ze=k[$e];ze?.(s)}})},getTriggerProps(s={}){return t.button({...O.trigger.attrs,dir:n("dir"),id:ke(l),"aria-haspopup":D?"listbox":"dialog",type:"button",tabIndex:s.focusable?void 0:-1,"aria-label":g.triggerLabel,"aria-expanded":C,"data-state":C?"open":"closed","aria-controls":C?se(l):void 0,disabled:y,"data-invalid":I(E),"data-focusable":I(s.focusable),"data-readonly":I(P),"data-disabled":I(y),onFocus(){s.focusable&&i({type:"INPUT.FOCUS",src:"trigger"})},onClick(u){u.defaultPrevented||w&&X(u)&&i({type:"TRIGGER.CLICK",src:"trigger-click"})},onPointerDown(u){w&&u.pointerType!=="touch"&&X(u)&&(u.preventDefault(),queueMicrotask(()=>{he(l)}))},onKeyDown(u){if(u.defaultPrevented||D)return;const x={ArrowDown(){i({type:"INPUT.ARROW_DOWN",src:"arrow-key"})},ArrowUp(){i({type:"INPUT.ARROW_UP",src:"arrow-key"})}},h=ye(u,{dir:n("dir")}),k=x[h];k&&(k(u),u.preventDefault())}})},getContentProps(){return t.element({...O.content.attrs,dir:n("dir"),id:se(l),role:D?"listbox":"dialog",tabIndex:-1,hidden:!C,"data-state":C?"open":"closed","data-placement":a.get("currentPlacement"),"aria-labelledby":ge(l),"aria-multiselectable":n("multiple")&&D?!0:void 0,"data-empty":I(m.size===0),onPointerDown(s){X(s)&&s.preventDefault()}})},getListProps(){return t.element({...O.list.attrs,role:D?void 0:"listbox","data-empty":I(m.size===0),"aria-labelledby":ge(l),"aria-multiselectable":n("multiple")&&!D?!0:void 0})},getClearTriggerProps(){return t.button({...O.clearTrigger.attrs,dir:n("dir"),id:He(l),type:"button",tabIndex:-1,disabled:y,"data-invalid":I(E),"aria-label":g.clearTriggerLabel,"aria-controls":le(l),hidden:!a.get("value").length,onPointerDown(s){X(s)&&s.preventDefault()},onClick(s){s.defaultPrevented||w&&i({type:"VALUE.CLEAR",src:"clear-trigger"})}})},getItemState:G,getItemProps(s){const u=G(s),x=u.value;return t.element({...O.item.attrs,dir:n("dir"),id:be(l,x),role:"option",tabIndex:-1,"data-highlighted":I(u.highlighted),"data-state":u.selected?"checked":"unchecked","aria-selected":pe(u.selected),"aria-disabled":pe(u.disabled),"data-disabled":I(u.disabled),"data-value":u.value,onPointerMove(){u.disabled||u.highlighted||i({type:"ITEM.POINTER_MOVE",value:x})},onPointerLeave(){s.persistFocus||u.disabled||!d.previous()?.type.includes("POINTER")||i({type:"ITEM.POINTER_LEAVE",value:x})},onClick(h){Tt(h)||Bt(h)||St(h)||u.disabled||i({type:"ITEM.CLICK",src:"item-select",value:x})}})},getItemTextProps(s){const u=G(s);return t.element({...O.itemText.attrs,dir:n("dir"),"data-state":u.selected?"checked":"unchecked","data-disabled":I(u.disabled),"data-highlighted":I(u.highlighted)})},getItemIndicatorProps(s){const u=G(s);return t.element({"aria-hidden":!0,...O.itemIndicator.attrs,dir:n("dir"),"data-state":u.selected?"checked":"unchecked",hidden:!u.selected})},getItemGroupProps(s){const{id:u}=s;return t.element({...O.itemGroup.attrs,dir:n("dir"),id:Nt(l,u),"aria-labelledby":Ce(l,u),"data-empty":I(m.size===0),role:"group"})},getItemGroupLabelProps(s){const{htmlFor:u}=s;return t.element({...O.itemGroupLabel.attrs,dir:n("dir"),id:Ce(l,u),role:"presentation"})}}}var{guards:Ft,createMachine:Ut,choose:_t}=ht(),{and:T,not:_}=Ft,Mt=Ut({props({props:e}){return{loopFocus:!0,openOnClick:!1,defaultValue:[],defaultInputValue:"",closeOnSelect:!e.multiple,allowCustomValue:!1,alwaysSubmitOnEnter:!1,inputBehavior:"none",selectionBehavior:e.multiple?"clear":"replace",openOnKeyPress:!0,openOnChange:!0,composite:!0,navigate({node:t}){Vt(t)},collection:Ae.empty(),...e,positioning:{placement:"bottom",sameWidth:!0,...e.positioning},translations:{triggerLabel:"Toggle suggestions",clearTriggerLabel:"Clear value",...e.translations}}},initialState({prop:e}){return e("open")||e("defaultOpen")?"open.suggesting":"closed.idle"},context({prop:e,bindable:t,getContext:a,getEvent:n}){const o=e("value")??e("defaultValue")??[],i=e("collection").findMany(o);return{currentPlacement:t(()=>({defaultValue:void 0})),value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),isEqual:Ot,hash(l){return l.join(",")},onChange(l){const p=a(),d=e("collection"),g=p.get("selectedItemMap"),m=de({values:l,collection:d,selectedItemMap:g}),y=e("value")??l,w=y===l?m:de({values:y,collection:d,selectedItemMap:m.nextSelectedItemMap});p.set("selectedItemMap",w.nextSelectedItemMap),e("onValueChange")?.({value:l,items:m.selectedItems})}})),highlightedValue:t(()=>({defaultValue:e("defaultHighlightedValue")||null,value:e("highlightedValue"),onChange(l){const p=e("collection").find(l);e("onHighlightChange")?.({highlightedValue:l,highlightedItem:p})}})),inputValue:t(()=>{let l=e("inputValue")||e("defaultInputValue");const p=e("value")||e("defaultValue");if(!l.trim()&&!e("multiple")){const d=e("collection").stringifyMany(p);l=F(e("selectionBehavior"),{preserve:l||d,replace:d,clear:""})}return{defaultValue:l,value:e("inputValue"),onChange(d){const g=n(),m=(g.previousEvent||g).src;e("onInputValueChange")?.({inputValue:d,reason:m})}}}),highlightedItem:t(()=>{const l=e("highlightedValue");return{defaultValue:e("collection").find(l)}}),selectedItemMap:t(()=>({defaultValue:nt({selectedItems:i,collection:e("collection")})}))}},computed:{isInputValueEmpty:({context:e})=>e.get("inputValue").length===0,isInteractive:({prop:e})=>!(e("readOnly")||e("disabled")),autoComplete:({prop:e})=>e("inputBehavior")==="autocomplete",autoHighlight:({prop:e})=>e("inputBehavior")==="autohighlight",hasSelectedItems:({context:e})=>e.get("value").length>0,selectedItems:({context:e,prop:t})=>at({values:e.get("value"),collection:t("collection"),selectedItemMap:e.get("selectedItemMap")}),valueAsString:({computed:e,prop:t})=>t("collection").stringifyItems(e("selectedItems")),isCustomValue:({context:e,computed:t})=>e.get("inputValue")!==t("valueAsString")},watch({context:e,prop:t,track:a,action:n,send:o}){a([()=>e.hash("value")],()=>{n(["syncSelectedItems"])}),a([()=>e.get("inputValue")],()=>{n(["syncInputValue"])}),a([()=>e.get("highlightedValue")],()=>{n(["syncHighlightedItem","autofillInputValue"])}),a([()=>t("open")],()=>{n(["toggleVisibility"])}),a([()=>t("collection").toString()],()=>{o({type:"CHILDREN_CHANGE"})})},on:{"SELECTED_ITEMS.SYNC":{actions:["syncSelectedItems"]},"HIGHLIGHTED_VALUE.SET":{actions:["setHighlightedValue"]},"HIGHLIGHTED_VALUE.CLEAR":{actions:["clearHighlightedValue"]},"ITEM.SELECT":{actions:["selectItem"]},"ITEM.CLEAR":{actions:["clearItem"]},"VALUE.SET":{actions:["setValue"]},"INPUT_VALUE.SET":{actions:["setInputValue"]},"POSITIONING.SET":{actions:["reposition"]}},entry:_t([{guard:"autoFocus",actions:["setInitialFocus"]}]),states:{closed:{tags:["closed"],initial:"idle",states:{idle:{tags:["idle"],entry:["scrollContentToTop","clearHighlightedValue"],on:{"CONTROLLED.OPEN":{target:"open.interacting"},"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]},{target:"open.interacting",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.CLICK":[{guard:"isOpenControlled",actions:["highlightFirstSelectedItem","invokeOnOpen"]},{target:"open.interacting",actions:["highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.FOCUS":{target:"focused"},OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open.interacting",actions:["invokeOnOpen"]}],"VALUE.CLEAR":{target:"focused",actions:["clearInputValue","clearSelectedItems","setInitialFocus"]}}},focused:{tags:["focused"],entry:["scrollContentToTop","clearHighlightedValue"],on:{"CONTROLLED.OPEN":[{guard:"isChangeEvent",target:"open.suggesting"},{target:"open.interacting"}],"INPUT.CHANGE":[{guard:T("isOpenControlled","openOnChange"),actions:["setInputValue","invokeOnOpen","highlightFirstItemIfNeeded"]},{guard:"openOnChange",target:"open.suggesting",actions:["setInputValue","invokeOnOpen","highlightFirstItemIfNeeded"]},{actions:["setInputValue"]}],"LAYER.INTERACT_OUTSIDE":{target:"idle"},"INPUT.ESCAPE":{guard:T("isCustomValue",_("allowCustomValue")),actions:["revertInputValue"]},"INPUT.BLUR":{target:"idle"},"INPUT.CLICK":[{guard:"isOpenControlled",actions:["highlightFirstSelectedItem","invokeOnOpen"]},{target:"open.interacting",actions:["highlightFirstSelectedItem","invokeOnOpen"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]},{target:"open.interacting",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.ARROW_DOWN":[{guard:T("isOpenControlled","autoComplete"),actions:["invokeOnOpen"]},{guard:"autoComplete",target:"open.interacting",actions:["invokeOnOpen"]},{guard:"isOpenControlled",actions:["highlightFirstOrSelectedItem","invokeOnOpen"]},{target:"open.interacting",actions:["highlightFirstOrSelectedItem","invokeOnOpen"]}],"INPUT.ARROW_UP":[{guard:T("isOpenControlled","autoComplete"),actions:["invokeOnOpen"]},{guard:"autoComplete",target:"open.interacting",actions:["invokeOnOpen"]},{guard:"isOpenControlled",actions:["highlightLastOrSelectedItem","invokeOnOpen"]},{target:"open.interacting",actions:["highlightLastOrSelectedItem","invokeOnOpen"]}],OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open.interacting",actions:["invokeOnOpen"]}],"VALUE.CLEAR":{actions:["clearInputValue","clearSelectedItems"]}}}}},open:{tags:["open","focused"],entry:["setInitialFocus"],effects:["trackFocusVisible","scrollToHighlightedItem","trackDismissableLayer","trackPlacement"],on:{"CONTROLLED.CLOSE":[{guard:"restoreFocus",target:"closed.focused",actions:["setFinalFocus"]},{target:"closed.idle"}],"INPUT.ENTER":[{guard:T("isOpenControlled","isCustomValue",_("hasHighlightedItem"),_("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:T("isCustomValue",_("hasHighlightedItem"),_("allowCustomValue")),target:"closed.focused",actions:["revertInputValue","invokeOnClose"]},{guard:T("isOpenControlled","closeOnSelect"),actions:["selectHighlightedItem","invokeOnClose"]},{guard:"closeOnSelect",target:"closed.focused",actions:["selectHighlightedItem","invokeOnClose","setFinalFocus"]},{actions:["selectHighlightedItem"]}],"ITEM.CLICK":[{guard:T("isOpenControlled","closeOnSelect"),actions:["selectItem","invokeOnClose"]},{guard:"closeOnSelect",target:"closed.focused",actions:["selectItem","invokeOnClose","setFinalFocus"]},{actions:["selectItem"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed.focused",actions:["invokeOnClose"]}],"LAYER.INTERACT_OUTSIDE":[{guard:T("isOpenControlled","isCustomValue",_("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:T("isCustomValue",_("allowCustomValue")),target:"closed.idle",actions:["revertInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed.idle",actions:["invokeOnClose"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed.focused",actions:["invokeOnClose","setFinalFocus"]}],"VALUE.CLEAR":[{guard:"isOpenControlled",actions:["clearInputValue","clearSelectedItems","invokeOnClose"]},{target:"closed.focused",actions:["clearInputValue","clearSelectedItems","invokeOnClose","setFinalFocus"]}]},initial:"interacting",states:{interacting:{on:{CHILDREN_CHANGE:[{guard:"isHighlightedItemRemoved",actions:["clearHighlightedValue"]},{actions:["scrollToHighlightedItem"]}],"INPUT.HOME":{actions:["highlightFirstItem"]},"INPUT.END":{actions:["highlightLastItem"]},"INPUT.ARROW_DOWN":[{guard:T("autoComplete","isLastItemHighlighted"),actions:["clearHighlightedValue","scrollContentToTop"]},{actions:["highlightNextItem"]}],"INPUT.ARROW_UP":[{guard:T("autoComplete","isFirstItemHighlighted"),actions:["clearHighlightedValue"]},{actions:["highlightPrevItem"]}],"INPUT.CHANGE":[{guard:"autoComplete",target:"suggesting",actions:["setInputValue"]},{target:"suggesting",actions:["clearHighlightedValue","setInputValue"]}],"ITEM.POINTER_MOVE":{actions:["setHighlightedValue"]},"ITEM.POINTER_LEAVE":{actions:["clearHighlightedValue"]},"LAYER.ESCAPE":[{guard:T("isOpenControlled","autoComplete"),actions:["syncInputValue","invokeOnClose"]},{guard:"autoComplete",target:"closed.focused",actions:["syncInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed.focused",actions:["invokeOnClose","setFinalFocus"]}]}},suggesting:{on:{CHILDREN_CHANGE:[{guard:T("isHighlightedItemRemoved","hasCollectionItems","autoHighlight"),actions:["clearHighlightedValue","highlightFirstItem"]},{guard:"isHighlightedItemRemoved",actions:["clearHighlightedValue"]},{guard:"autoHighlight",actions:["highlightFirstItem"]}],"INPUT.ARROW_DOWN":{target:"interacting",actions:["highlightNextItem"]},"INPUT.ARROW_UP":{target:"interacting",actions:["highlightPrevItem"]},"INPUT.HOME":{target:"interacting",actions:["highlightFirstItem"]},"INPUT.END":{target:"interacting",actions:["highlightLastItem"]},"INPUT.CHANGE":{actions:["setInputValue"]},"LAYER.ESCAPE":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed.focused",actions:["invokeOnClose"]}],"ITEM.POINTER_MOVE":{target:"interacting",actions:["setHighlightedValue"]},"ITEM.POINTER_LEAVE":{actions:["clearHighlightedValue"]}}}}}},implementations:{guards:{isInputValueEmpty:({computed:e})=>e("isInputValueEmpty"),autoComplete:({computed:e,prop:t})=>e("autoComplete")&&!t("multiple"),autoHighlight:({computed:e})=>e("autoHighlight"),isFirstItemHighlighted:({prop:e,context:t})=>e("collection").firstValue===t.get("highlightedValue"),isLastItemHighlighted:({prop:e,context:t})=>e("collection").lastValue===t.get("highlightedValue"),isCustomValue:({computed:e})=>e("isCustomValue"),allowCustomValue:({prop:e})=>!!e("allowCustomValue"),hasHighlightedItem:({context:e})=>e.get("highlightedValue")!=null,closeOnSelect:({prop:e})=>!!e("closeOnSelect"),isOpenControlled:({prop:e})=>e("open")!=null,openOnChange:({prop:e,context:t})=>{const a=e("openOnChange");return gt(a)?a:!!a?.({inputValue:t.get("inputValue")})},restoreFocus:({event:e})=>{const t=e.restoreFocus??e.previousEvent?.restoreFocus;return t==null?!0:!!t},isChangeEvent:({event:e})=>e.previousEvent?.type==="INPUT.CHANGE",autoFocus:({prop:e})=>!!e("autoFocus"),isHighlightedItemRemoved:({prop:e,context:t})=>!e("collection").has(t.get("highlightedValue")),hasCollectionItems:({prop:e})=>e("collection").size>0},effects:{trackFocusVisible({scope:e}){return ft({root:e.getRootNode?.()})},trackDismissableLayer({send:e,prop:t,scope:a}){return t("disableLayer")?void 0:xt(()=>M(a),{type:"listbox",defer:!0,exclude:()=>[K(a),J(a),Dt(a)],onFocusOutside:t("onFocusOutside"),onPointerDownOutside:t("onPointerDownOutside"),onInteractOutside:t("onInteractOutside"),onEscapeKeyDown(o){o.preventDefault(),o.stopPropagation(),e({type:"LAYER.ESCAPE",src:"escape-key"})},onDismiss(){e({type:"LAYER.INTERACT_OUTSIDE",src:"interact-outside",restoreFocus:!1})}})},trackPlacement({context:e,prop:t,scope:a}){const n=()=>xe(a)||J(a),o=()=>we(a);return e.set("currentPlacement",t("positioning").placement),Ie(n,o,{...t("positioning"),defer:!0,onComplete(i){e.set("currentPlacement",i.placement)}})},scrollToHighlightedItem({context:e,prop:t,scope:a}){const n=K(a);let o=[];const i=d=>{if(yt()==="pointer")return;const m=e.get("highlightedValue");if(!m)return;const y=M(a),w=t("scrollToIndexFn");if(w){const P=t("collection").indexOf(m);w({index:P,immediate:d,getElement:()=>q(a,m)});return}const E=q(a,m),U=L(()=>{fe(E,{rootEl:y,block:"nearest"})});o.push(U)},l=L(()=>{It("virtual"),i(!0)});o.push(l);const p=wt(n,{attributes:["aria-activedescendant"],callback:()=>i(!1)});return o.push(p),()=>{o.forEach(d=>d())}}},actions:{reposition({context:e,prop:t,scope:a,event:n}){Ie(()=>xe(a),()=>we(a),{...t("positioning"),...n.options,defer:!0,listeners:!1,onComplete(l){e.set("currentPlacement",l.placement)}})},setHighlightedValue({context:e,event:t}){t.value!=null&&e.set("highlightedValue",t.value)},clearHighlightedValue({context:e}){e.set("highlightedValue",null)},selectHighlightedItem(e){const{context:t,prop:a}=e,n=a("collection"),o=t.get("highlightedValue");if(!o||!n.has(o))return;const i=a("multiple")?ve(t.get("value"),o):[o];a("onSelect")?.({value:i,itemValue:o}),t.set("value",i);const l=F(a("selectionBehavior"),{preserve:t.get("inputValue"),replace:n.stringifyMany(i),clear:""});t.set("inputValue",l)},scrollToHighlightedItem({context:e,prop:t,scope:a}){Et(()=>{const n=e.get("highlightedValue");if(n==null)return;const o=q(a,n),i=M(a),l=t("scrollToIndexFn");if(l){const p=t("collection").indexOf(n);l({index:p,immediate:!0,getElement:()=>q(a,n)});return}fe(o,{rootEl:i,block:"nearest"})})},selectItem(e){const{context:t,event:a,flush:n,prop:o}=e;a.value!=null&&n(()=>{const i=o("multiple")?ve(t.get("value"),a.value):[a.value];o("onSelect")?.({value:i,itemValue:a.value}),t.set("value",i);const l=F(o("selectionBehavior"),{preserve:t.get("inputValue"),replace:o("collection").stringifyMany(i),clear:""});t.set("inputValue",l)})},clearItem(e){const{context:t,event:a,flush:n,prop:o}=e;a.value!=null&&n(()=>{const i=pt(t.get("value"),a.value);t.set("value",i);const l=F(o("selectionBehavior"),{preserve:t.get("inputValue"),replace:o("collection").stringifyMany(i),clear:""});t.set("inputValue",l)})},setInitialFocus({scope:e}){L(()=>{he(e)})},setFinalFocus({scope:e}){L(()=>{J(e)?.dataset.focusable==null?he(e):kt(e)})},syncInputValue({context:e,scope:t,event:a}){const n=K(t);n&&(n.value=e.get("inputValue"),queueMicrotask(()=>{a.current().type!=="INPUT.CHANGE"&&Pe(n)}))},setInputValue({context:e,event:t}){e.set("inputValue",t.value)},clearInputValue({context:e}){e.set("inputValue","")},revertInputValue({context:e,prop:t,computed:a}){const n=t("selectionBehavior"),o=F(n,{replace:a("hasSelectedItems")?a("valueAsString"):"",preserve:e.get("inputValue"),clear:""});e.set("inputValue",o)},setValue(e){const{context:t,flush:a,event:n,prop:o}=e;a(()=>{t.set("value",n.value);const i=F(o("selectionBehavior"),{preserve:t.get("inputValue"),replace:o("collection").stringifyMany(n.value),clear:""});t.set("inputValue",i)})},clearSelectedItems(e){const{context:t,flush:a,prop:n}=e;a(()=>{t.set("value",[]);const o=F(n("selectionBehavior"),{preserve:t.get("inputValue"),replace:n("collection").stringifyMany([]),clear:""});t.set("inputValue",o)})},scrollContentToTop({prop:e,scope:t}){const a=e("scrollToIndexFn");if(a){const n=e("collection").firstValue;a({index:0,immediate:!0,getElement:()=>q(t,n)})}else{const n=M(t);if(!n)return;n.scrollTop=0}},invokeOnOpen({prop:e,event:t,context:a}){const n=Ve(t);e("onOpenChange")?.({open:!0,reason:n,value:a.get("value")})},invokeOnClose({prop:e,event:t,context:a}){const n=Ve(t);e("onOpenChange")?.({open:!1,reason:n,value:a.get("value")})},highlightFirstItem({context:e,prop:t,scope:a}){(M(a)?queueMicrotask:L)(()=>{const o=t("collection").firstValue;o&&e.set("highlightedValue",o)})},highlightFirstItemIfNeeded({computed:e,action:t}){e("autoHighlight")&&t(["highlightFirstItem"])},highlightLastItem({context:e,prop:t,scope:a}){(M(a)?queueMicrotask:L)(()=>{const o=t("collection").lastValue;o&&e.set("highlightedValue",o)})},highlightNextItem({context:e,prop:t}){let a=null;const n=e.get("highlightedValue"),o=t("collection");n?(a=o.getNextValue(n),!a&&t("loopFocus")&&(a=o.firstValue)):a=o.firstValue,a&&e.set("highlightedValue",a)},highlightPrevItem({context:e,prop:t}){let a=null;const n=e.get("highlightedValue"),o=t("collection");n?(a=o.getPreviousValue(n),!a&&t("loopFocus")&&(a=o.lastValue)):a=o.lastValue,a&&e.set("highlightedValue",a)},highlightFirstSelectedItem({context:e,prop:t}){L(()=>{const[a]=t("collection").sort(e.get("value"));a&&e.set("highlightedValue",a)})},highlightFirstOrSelectedItem({context:e,prop:t,computed:a}){L(()=>{let n=null;a("hasSelectedItems")?n=t("collection").sort(e.get("value"))[0]:n=t("collection").firstValue,n&&e.set("highlightedValue",n)})},highlightLastOrSelectedItem({context:e,prop:t,computed:a}){L(()=>{const n=t("collection");let o=null;a("hasSelectedItems")?o=n.sort(e.get("value"))[0]:o=n.lastValue,o&&e.set("highlightedValue",o)})},autofillInputValue({context:e,computed:t,prop:a,event:n,scope:o}){const i=K(o),l=a("collection");if(!t("autoComplete")||!i||!n.keypress)return;const p=l.stringify(e.get("highlightedValue"));L(()=>{i.value=p||e.get("inputValue")})},syncSelectedItems(e){queueMicrotask(()=>{const{context:t,prop:a}=e,n=a("collection"),o=t.get("value"),i=t.get("selectedItemMap"),l=de({values:o,collection:n,selectedItemMap:i});t.set("selectedItemMap",l.nextSelectedItemMap);const p=F(a("selectionBehavior"),{preserve:t.get("inputValue"),replace:n.stringifyMany(o),clear:""});t.set("inputValue",p)})},syncHighlightedItem({context:e,prop:t}){const a=t("collection").find(e.get("highlightedValue"));e.set("highlightedItem",a)},toggleVisibility({event:e,send:t,prop:a}){t({type:a("open")?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:e})}}}});function Ve(e){return(e.previousEvent||e).src}const jt=e=>e.children(N()),Fe=b.forwardRef((e,t)=>{const a=N(),n=S(a.getControlProps(),e);return r.jsx(A.div,{...n,ref:t})});Fe.displayName="ComboboxControl";const Ue=b.forwardRef((e,t)=>{const a=N(),n=S(a.getInputProps(),e),o=Se();return r.jsx(A.input,{"aria-describedby":o?.ariaDescribedby,...n,ref:t})});Ue.displayName="ComboboxInput";const[Wt]=re({name:"ComboboxItemContext",hookName:"useComboboxItemContext",providerName:"<ComboboxItemProvider />"}),[Gt,qt]=re({name:"ComboboxItemPropsContext",hookName:"useComboboxItemPropsContext",providerName:"<ComboboxItemPropsProvider />"}),Kt=Q(),_e=b.forwardRef((e,t)=>{const[a,n]=Kt(e,["item","persistFocus"]),o=N(),i=S(o.getItemProps(a),n),l=o.getItemState(a);return r.jsx(Gt,{value:a,children:r.jsx(Wt,{value:l,children:r.jsx(A.div,{...i,ref:t})})})});_e.displayName="ComboboxItem";const[$t]=re({name:"ComboboxItemGroupPropsContext",hookName:"useComboboxItemGroupPropsContext",providerName:"<ComboboxItemGroupPropsProvider />"}),zt=Q(),Me=b.forwardRef((e,t)=>{const a=b.useId(),[n,o]=zt(e,["id"]),i={id:a,...n},l=N(),p=S(l.getItemGroupProps(i),o);return r.jsx($t,{value:i,children:r.jsx(A.div,{...p,ref:t})})});Me.displayName="ComboboxItemGroup";const je=b.forwardRef((e,t)=>{const a=N(),n=qt(),o=S(a.getItemTextProps(n),e);return r.jsx(A.span,{...o,ref:t})});je.displayName="ComboboxItemText";const We=b.forwardRef((e,t)=>{const a=N(),n=Be(),o=S(a.getPositionerProps(),e);return n.unmounted?null:r.jsx(A.div,{...o,ref:t})});We.displayName="ComboboxPositioner";const Yt=e=>{const t=b.useId(),{dir:a}=Oe(),{getRootNode:n}=et(),o=Se(),i={id:t,ids:{label:o?.ids.label,input:o?.ids.control},disabled:o?.disabled,readOnly:o?.readOnly,required:o?.required,invalid:o?.invalid,dir:a,getRootNode:n,...e},l=mt(Mt,i);return Ht(l,vt)},Jt=(e,t)=>{const[a,n]=it(e),[o,i]=Q()(n,["allowCustomValue","alwaysSubmitOnEnter","autoFocus","closeOnSelect","collection","composite","defaultHighlightedValue","defaultInputValue","defaultOpen","defaultValue","disabled","disableLayer","form","highlightedValue","id","ids","inputBehavior","inputValue","invalid","loopFocus","multiple","name","navigate","onFocusOutside","onHighlightChange","onInputValueChange","onInteractOutside","onOpenChange","onPointerDownOutside","onSelect","onValueChange","open","openOnChange","openOnClick","openOnKeyPress","placeholder","positioning","readOnly","required","scrollToIndexFn","selectionBehavior","translations","value"]),l=Yt(o),p=st(S({present:l.open},a)),d=S(l.getRootProps(),i);return r.jsx(Rt,{value:l,children:r.jsx(rt,{value:p,children:r.jsx(A.div,{...d,ref:t})})})},Qt=b.forwardRef(Jt),Xt=Q(),Ge=b.forwardRef((e,t)=>{const[a,n]=Xt(e,["focusable"]),o=N(),i=S(o.getTriggerProps(a),n);return r.jsx(A.button,{...i,ref:t})});Ge.displayName="ComboboxTrigger";var Zt=tt(Intl.Collator);function ea(e){const{locale:t,...a}=e||{},n=Zt(t||"en-US",{usage:"search",...a});function o(d){return d=d.normalize("NFC"),n.resolvedOptions().ignorePunctuation&&(d=d.replace(new RegExp("\\p{P}","gu"),"")),d}function i(d,g){return g.length===0?!0:(d=o(d),g=o(g),n.compare(d.slice(0,g.length),g)===0)}function l(d,g){return g.length===0?!0:(d=o(d),g=o(g),n.compare(d.slice(-g.length),g)===0)}function p(d,g){if(g.length===0)return!0;d=o(d),g=o(g);let m=0,y=g.length;for(;m+y<=d.length;m++){let w=d.slice(m,m+y);if(n.compare(g,w)===0)return!0}return!1}return{startsWith:i,endsWith:l,contains:p}}function ta(e){const t=Oe(),a=e.locale??t.locale;return b.useMemo(()=>ea({...e,locale:a}),[a,e])}var me=(e,t)=>{const a=[],n=(o,i,l)=>{i-o>0&&a.push({start:o,end:i,match:l})};if(e.length===0)n(0,t,!1);else{let o=0;for(const i of e)n(o,i.start,!1),n(i.start,i.end,!0),o=i.end;n(o,t,!1)}return a},qe=e=>e.replace(/[|\\{}()[\]^$+*?.-]/g,t=>`\\${t}`);function aa(e){const{text:t,query:a,ignoreCase:n,exactMatch:o}=e;if(o){const m=qe(a),y=new RegExp(`\\b(${m})\\b`,n?"i":""),w=t.match(y);if(!w||w.index===void 0)return[{text:t,match:!1}];const E=w.index,U=E+w[0].length;return me([{start:E,end:U}],t.length).map(C=>({text:t.slice(C.start,C.end),match:!!C.match}))}const i=n?t.toLowerCase():t,l=n&&typeof a=="string"?a.toLowerCase():a,p=typeof i=="string"?i.indexOf(l):-1;if(p===-1)return[{text:t,match:!1}];const d=p+l.length;return me([{start:p,end:d}],t.length).map(m=>({text:t.slice(m.start,m.end),match:!!m.match}))}var na=(e,t,a)=>{const n=e.filter(Boolean).map(i=>qe(i)),o=a?`\\b(${n.join("|")})\\b`:`(${n.join("|")})`;return new RegExp(o,t)},oa=(e,t=!0)=>`${e?"i":""}${t?"g":""}`;function ia(e){const{text:t,query:a,ignoreCase:n,matchAll:o,exactMatch:i}=e;if(a.length===0)return[{text:t,match:!1}];const l=oa(n,o),p=na(Array.isArray(a)?a:[a],l,i),d=[...t.matchAll(p)].map(g=>({start:g.index||0,end:(g.index||0)+g[0].length}));return me(d,e.text.length).map(g=>({text:e.text.slice(g.start,g.end),match:!!g.match}))}var la=e=>{if(e.matchAll==null&&(e.matchAll=Array.isArray(e.query)),!e.matchAll&&Array.isArray(e.query))throw new Error("matchAll must be true when using multiple queries");return e.matchAll?ia(e):aa(e)};const sa=e=>b.useMemo(()=>la(e),[e]),ra=Q(),ca=e=>{if(typeof e.text!="string")throw new Error("[ark-ui/highlight] text must be a string");const[t,a]=ra(e,["query","text","ignoreCase","matchAll","exactMatch"]),n=sa(t);return r.jsx(b.Fragment,{children:n.map(({text:o,match:i},l)=>i?r.jsx("mark",{...a,children:o},l):r.jsx(b.Fragment,{children:o},l))})},ua="_root_13b80_41",da="_control_13b80_48",pa="_input_13b80_59",ga="_startAdornment_13b80_130",ha="_iconContainer_13b80_138",ma="_clearButton_13b80_145",va="_trigger_13b80_173",Ia="_positioner_13b80_206",fa="_content_13b80_211",ya="_itemGroup_13b80_272",Ca="_item_13b80_272",ba="_itemIcon_13b80_294",wa="_itemText_13b80_324",xa="_noMatches_13b80_338",Va="_loading_13b80_339",Ea="_disabled_13b80_346",Oa="_invalid_13b80_366",V={root:ua,control:da,input:pa,startAdornment:ga,iconContainer:ha,clearButton:ma,trigger:va,positioner:Ia,content:fa,itemGroup:ya,item:Ca,itemIcon:ba,itemText:wa,noMatches:xa,loading:Va,disabled:Ea,invalid:Oa},B=({id:e,options:t=[],loading:a=!1,style:n,className:o,placeholder:i="Start typing to search...",disabled:l=!1,invalid:p=!1,onValueChange:d,onInputValueChange:g,onOpenChange:m,locale:{loading:y="Loading...",noMatches:w="No matches found"}={},highlightMatch:E=!0,showTrigger:U=!0,startAdornment:P})=>{const[C,Y]=b.useState(""),D=ta({sensitivity:"base"}),R=C?t.filter(h=>D.contains(h.label,C)):t,W=ot({items:R,itemToString:h=>h.label,itemToValue:h=>h.value}),G=h=>{Y(h.inputValue),g?.(h.inputValue)},s=h=>{const k=h.items[0];k&&d?.(k.value)},u=h=>{m?.(h.open)},x=Xe(V.root,{[V.disabled]:l,[V.invalid]:p},o);return r.jsxs(Qt,{id:e,collection:W,className:x,style:n,disabled:l,invalid:p,onInputValueChange:G,onValueChange:s,onOpenChange:u,closeOnSelect:!0,children:[r.jsxs(Fe,{className:V.control,children:[P&&r.jsx("span",{className:V.startAdornment,children:P}),r.jsx(Ue,{className:V.input,placeholder:i}),r.jsx(jt,{children:h=>r.jsxs("div",{className:V.iconContainer,children:[h.inputValue&&!l&&r.jsx(Re,{className:V.clearButton,"aria-label":"Clear",children:r.jsx($,{icon:"close",size:"medium"})}),U&&r.jsx(Ge,{className:V.trigger,"aria-label":"Toggle dropdown",children:r.jsx($,{icon:"keyboard_arrow_down",size:"medium"})})]})})]}),r.jsx(lt,{children:r.jsx(We,{className:V.positioner,children:r.jsxs(Le,{className:V.content,children:[a&&r.jsx("div",{className:V.loading,children:y}),!a&&W.items.length===0&&r.jsx("div",{className:V.noMatches,children:w}),!a&&W.items.length>0&&r.jsx(Me,{className:V.itemGroup,children:W.items.map(h=>r.jsxs(_e,{item:h,className:V.item,children:[h.icon&&r.jsx($,{className:V.itemIcon,icon:h.icon,"aria-hidden":"true"}),r.jsx(je,{className:V.itemText,children:E?r.jsx(ca,{query:C,text:h.label,ignoreCase:!0}):h.label})]},h.value))})]})})})]})};B.__docgenInfo={description:"",methods:[],displayName:"DsAutocomplete",props:{id:{required:!1,tsType:{name:"string"},description:"Unique identifier for the autocomplete component"},options:{required:!1,tsType:{name:"Array",elements:[{name:"DsAutocompleteOption"}],raw:"DsAutocompleteOption[]"},description:`Options to display in the dropdown.
For async/server-driven search, update this prop with fetched results.`,defaultValue:{value:"[]",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Whether the autocomplete is in a loading state.
When true, a loading message is shown in the dropdown.`,defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to apply to the component"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text to display when input is empty",defaultValue:{value:"'Start typing to search...'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the autocomplete is disabled",defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the autocomplete is in an invalid state",defaultValue:{value:"false",computed:!1}},locale:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	/**
	 * Message to display while results are loading
	 * @default 'Loading...'
	 */
	loading?: string;
	/**
	 * Message to display when no options match the input
	 * @default 'No matches found'
	 */
	noMatches?: string;
}`,signature:{properties:[{key:"loading",value:{name:"string",required:!1},description:`Message to display while results are loading
@default 'Loading...'`},{key:"noMatches",value:{name:"string",required:!1},description:`Message to display when no options match the input
@default 'No matches found'`}]}},description:"Locale strings for the autocomplete component",defaultValue:{value:"{}",computed:!1}},highlightMatch:{required:!1,tsType:{name:"boolean"},description:`Whether to highlight the matching text in the dropdown options
@default true`,defaultValue:{value:"true",computed:!1}},showTrigger:{required:!1,tsType:{name:"boolean"},description:`Whether to show the dropdown trigger (arrow) button.
If false, the dropdown will only open on typing.
@default true`,defaultValue:{value:"true",computed:!1}},startAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display at the start of the input (e.g., a search icon)."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Event handler called when the value changes (when an option is selected)"},onInputValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Event handler called when the input value changes (on every keystroke)"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Event handler called when the dropdown opens or closes"}}};const{expect:c,fn:Ee,screen:f,userEvent:v,within:j}=__STORYBOOK_MODULE_TEST__,on={title:"Design System/Autocomplete",component:B,parameters:{layout:"centered"},argTypes:{options:{control:"object",description:"Options to display in the autocomplete dropdown"},placeholder:{control:"text",description:"Placeholder text when input is empty"},highlightMatch:{control:"boolean",description:"Whether to highlight the matching text in the dropdown options"},showTrigger:{control:"boolean",description:"Whether to show the dropdown trigger (arrow) button"},startAdornment:{control:"object",description:"Content to display at the start of the input (e.g., a search icon)"},locale:{control:"object",description:"Locale strings for the autocomplete component"}},args:{onValueChange:Ee(),onInputValueChange:Ee()}},z=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"}],ce=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"it",label:"Italy"},{value:"es",label:"Spain"},{value:"jp",label:"Japan"},{value:"cn",label:"China"}],Z={render:e=>r.jsx(B,{...e}),args:{options:z,showTrigger:!0,placeholder:"Select or type to search...",style:{width:"300px"}},play:async({args:e,canvasElement:t})=>{const a=j(t),n=a.getByRole("combobox"),o=a.getByRole("button",{name:/toggle dropdown/i});await c(o).toBeInTheDocument(),await v.click(o);const i=await f.findByRole("option",{name:/Apple/i});await c(i).toBeInTheDocument(),await v.click(n),await c(n).toHaveFocus(),await v.type(n,"b"),await c(f.queryByRole("option",{name:/Apple/i})).not.toBeInTheDocument(),await c(f.getByRole("option",{name:/Banana/i})).toBeInTheDocument(),await c(e.onInputValueChange).toHaveBeenLastCalledWith("b"),await v.click(f.getByRole("option",{name:/Banana/i})),await c(e.onInputValueChange).toHaveBeenLastCalledWith("Banana"),await c(e.onValueChange).toHaveBeenCalledWith("banana");const l=a.getByLabelText("Clear");await v.click(l),await c(e.onInputValueChange).toHaveBeenCalledWith("")}},ee={render:e=>r.jsx(B,{...e}),args:{options:z,showTrigger:!1,placeholder:"Start typing to search...",style:{width:"300px"}},play:async({args:e,canvasElement:t})=>{const a=j(t),n=a.getByRole("combobox"),o=a.queryByLabelText("Toggle dropdown");await c(o).not.toBeInTheDocument(),await v.click(n),await c(n).toHaveFocus(),await c(a.queryByRole("listbox")).not.toBeInTheDocument(),await v.type(n,"a"),await c(e.onInputValueChange).toHaveBeenLastCalledWith("a");const i=await f.findByRole("option",{name:/Apple/i});await c(i).toBeInTheDocument(),await v.click(i),await c(e.onInputValueChange).toHaveBeenLastCalledWith("Apple"),await c(e.onValueChange).toHaveBeenCalledWith("apple");const l=a.getByLabelText("Clear");await v.click(l),await c(e.onInputValueChange).toHaveBeenCalledWith("")}},te={render:e=>r.jsx(B,{...e}),args:{options:ce,showTrigger:!1,startAdornment:r.jsx($,{icon:"search",size:"medium","aria-label":"search icon"}),placeholder:"Search countries...",style:{width:"300px"}},play:async({args:e,canvasElement:t})=>{const a=j(t),n=a.getByRole("combobox"),o=a.getByLabelText("search icon");await c(o).toBeInTheDocument(),await v.type(n,"Sta"),await c(e.onInputValueChange).toHaveBeenLastCalledWith("Sta");const i=await f.findByRole("option",{name:/United States/i});await c(i).toBeInTheDocument(),await v.click(i),await c(e.onInputValueChange).toHaveBeenCalledWith("United States"),await c(e.onValueChange).toHaveBeenCalledWith("us"),await c(n).toHaveValue("United States")}},ae={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsxs("div",{style:{width:"300px"},children:[r.jsx("p",{children:"Default (with trigger)"}),r.jsx(B,{options:z,showTrigger:!0,placeholder:"Select or type..."})]}),r.jsxs("div",{style:{width:"300px"},children:[r.jsx("p",{children:"Search Mode (no trigger)"}),r.jsx(B,{options:z,showTrigger:!1,placeholder:"Start typing..."})]}),r.jsxs("div",{style:{width:"300px"},children:[r.jsx("p",{children:"Search with Icon"}),r.jsx(B,{options:ce,showTrigger:!1,startAdornment:r.jsx($,{icon:"search",size:"medium","aria-label":"search icon"}),placeholder:"Search countries..."})]})]}),play:async({canvasElement:e})=>{const a=j(e).getAllByRole("combobox");await c(a).toHaveLength(3);const n=a[0];await v.click(n),await c(n).toHaveFocus(),await v.type(n,"ap");const o=await f.findByText("Apple");await c(o).toBeInTheDocument(),await v.clear(n),await v.keyboard("{Escape}");const i=a[1];await v.click(i),await v.type(i,"ban");const l=await f.findByText("Banana");await c(l).toBeInTheDocument(),await v.clear(i),await v.keyboard("{Escape}")}},ne={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsxs("div",{style:{width:"300px"},children:[r.jsx("p",{children:"Disabled"}),r.jsx(B,{options:z,disabled:!0,placeholder:"Disabled autocomplete..."})]}),r.jsxs("div",{style:{width:"300px"},children:[r.jsx("p",{children:"Invalid"}),r.jsx(B,{options:z,invalid:!0,placeholder:"Invalid autocomplete..."})]})]}),play:async({canvasElement:e})=>{const a=j(e).getAllByRole("combobox");await c(a).toHaveLength(2);const n=a[0];await c(n).toBeDisabled();const o=a[1];await c(o).toBeInTheDocument(),await c(o).not.toBeDisabled()}},Ke=150,Ta=async e=>(await new Promise(t=>setTimeout(t,Ke)),ce.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),Ba=async()=>(await new Promise(e=>setTimeout(e,Ke)),ce),oe={render:e=>{const[t,a]=b.useState([]),[n,o]=b.useState(!1),i=async l=>{if(e.onInputValueChange?.(l),!l){a([]);return}o(!0);const p=await Ta(l);a(p),o(!1)};return r.jsx(B,{...e,options:t,loading:n,onInputValueChange:i,showTrigger:!1,startAdornment:r.jsx($,{icon:"search",size:"medium","aria-label":"search icon"}),placeholder:"Search countries (async)...",locale:{noMatches:"No results found"},style:{width:"300px"}})},play:async({args:e,canvasElement:t})=>{const a=j(t),n=a.getByRole("combobox");await v.type(n,"Uni");const o=await f.findByRole("option",{name:/United States/i});await c(o).toBeInTheDocument(),await c(f.getByRole("option",{name:/United Kingdom/i})).toBeInTheDocument(),await c(e.onInputValueChange).toHaveBeenLastCalledWith("Uni"),await v.click(o),await c(e.onValueChange).toHaveBeenCalledWith("us"),await c(e.onInputValueChange).toHaveBeenLastCalledWith("United States"),await c(n).toHaveValue("United States");const i=a.getByLabelText("Clear");await v.click(i),await c(e.onInputValueChange).toHaveBeenLastCalledWith(""),await c(n).toHaveValue(""),await v.type(n,"zzz"),await f.findByText("No results found"),await c(f.queryByRole("option")).not.toBeInTheDocument(),await v.clear(n),await v.type(n,"an");const l=await f.findAllByRole("option");await c(l.length).toBeGreaterThanOrEqual(2),await c(f.getByRole("option",{name:/Canada/i})).toBeInTheDocument(),await c(f.getByRole("option",{name:/France/i})).toBeInTheDocument(),await v.type(n,"ad"),await f.findByRole("option",{name:/Canada/i}),await c(f.queryByRole("option",{name:/France/i})).not.toBeInTheDocument()}},ie={render:e=>{const[t,a]=b.useState([]),[n,o]=b.useState(!0);return b.useEffect(()=>{Ba().then(i=>{a(i),o(!1)})},[]),r.jsx(B,{...e,options:t,loading:n,placeholder:"Select a country...",style:{width:"300px"}})},play:async({args:e,canvasElement:t})=>{const a=j(t),n=a.getByRole("combobox"),o=a.getByRole("button",{name:/toggle dropdown/i});await v.click(o);const i=await f.findByRole("option",{name:/United States/i});await c(i).toBeInTheDocument(),await c(f.getByRole("option",{name:/Japan/i})).toBeInTheDocument(),await v.type(n,"Un"),await c(f.getByRole("option",{name:/United States/i})).toBeInTheDocument(),await c(f.getByRole("option",{name:/United Kingdom/i})).toBeInTheDocument(),await c(f.queryByRole("option",{name:/Japan/i})).not.toBeInTheDocument(),await v.click(f.getByRole("option",{name:/United States/i})),await c(e.onValueChange).toHaveBeenCalledWith("us")}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <DsAutocomplete {...args} />,
  args: {
    options: mockOptions,
    showTrigger: true,
    placeholder: 'Select or type to search...',
    style: {
      width: '300px'
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const trigger = canvas.getByRole('button', {
      name: /toggle dropdown/i
    });
    await expect(trigger).toBeInTheDocument();
    await userEvent.click(trigger);
    const appleOption = await screen.findByRole('option', {
      name: /Apple/i
    });
    await expect(appleOption).toBeInTheDocument();
    await userEvent.click(input);
    await expect(input).toHaveFocus();
    await userEvent.type(input, 'b');
    await expect(screen.queryByRole('option', {
      name: /Apple/i
    })).not.toBeInTheDocument();
    await expect(screen.getByRole('option', {
      name: /Banana/i
    })).toBeInTheDocument();
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('b');
    await userEvent.click(screen.getByRole('option', {
      name: /Banana/i
    }));
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Banana');
    await expect(args.onValueChange).toHaveBeenCalledWith('banana');
    const clearButton = canvas.getByLabelText('Clear');
    await userEvent.click(clearButton);
    await expect(args.onInputValueChange).toHaveBeenCalledWith('');
  }
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: args => <DsAutocomplete {...args} />,
  args: {
    options: mockOptions,
    showTrigger: false,
    placeholder: 'Start typing to search...',
    style: {
      width: '300px'
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const trigger = canvas.queryByLabelText('Toggle dropdown');
    await expect(trigger).not.toBeInTheDocument();
    await userEvent.click(input);
    await expect(input).toHaveFocus();
    await expect(canvas.queryByRole('listbox')).not.toBeInTheDocument();
    await userEvent.type(input, 'a');
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('a');
    const appleOption = await screen.findByRole('option', {
      name: /Apple/i
    });
    await expect(appleOption).toBeInTheDocument();
    await userEvent.click(appleOption);
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Apple');
    await expect(args.onValueChange).toHaveBeenCalledWith('apple');
    const clearButton = canvas.getByLabelText('Clear');
    await userEvent.click(clearButton);
    await expect(args.onInputValueChange).toHaveBeenCalledWith('');
  }
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: args => <DsAutocomplete {...args} />,
  args: {
    options: countries,
    showTrigger: false,
    startAdornment: <DsIcon icon="search" size="medium" aria-label="search icon" />,
    placeholder: 'Search countries...',
    style: {
      width: '300px'
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const searchIcon = canvas.getByLabelText('search icon');
    await expect(searchIcon).toBeInTheDocument();
    await userEvent.type(input, 'Sta');
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Sta');
    const usOption = await screen.findByRole('option', {
      name: /United States/i
    });
    await expect(usOption).toBeInTheDocument();
    await userEvent.click(usOption);
    await expect(args.onInputValueChange).toHaveBeenCalledWith('United States');
    await expect(args.onValueChange).toHaveBeenCalledWith('us');
    await expect(input).toHaveValue('United States');
  }
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
            <div style={{
      width: '300px'
    }}>
                <p>Default (with trigger)</p>
                <DsAutocomplete options={mockOptions} showTrigger placeholder="Select or type..." />
            </div>
            <div style={{
      width: '300px'
    }}>
                <p>Search Mode (no trigger)</p>
                <DsAutocomplete options={mockOptions} showTrigger={false} placeholder="Start typing..." />
            </div>
            <div style={{
      width: '300px'
    }}>
                <p>Search with Icon</p>
                <DsAutocomplete options={countries} showTrigger={false} startAdornment={<DsIcon icon="search" size="medium" aria-label="search icon" />} placeholder="Search countries..." />
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole('combobox');
    await expect(inputs).toHaveLength(3);
    const defaultInput = inputs[0] as HTMLInputElement;
    await userEvent.click(defaultInput);
    await expect(defaultInput).toHaveFocus();
    await userEvent.type(defaultInput, 'ap');
    const appleOption = await screen.findByText('Apple');
    await expect(appleOption).toBeInTheDocument();
    await userEvent.clear(defaultInput);
    await userEvent.keyboard('{Escape}');
    const searchModeInput = inputs[1] as HTMLInputElement;
    await userEvent.click(searchModeInput);
    await userEvent.type(searchModeInput, 'ban');
    const bananaOption = await screen.findByText('Banana');
    await expect(bananaOption).toBeInTheDocument();
    await userEvent.clear(searchModeInput);
    await userEvent.keyboard('{Escape}');
  }
}`,...ae.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
            <div style={{
      width: '300px'
    }}>
                <p>Disabled</p>
                <DsAutocomplete options={mockOptions} disabled placeholder="Disabled autocomplete..." />
            </div>
            <div style={{
      width: '300px'
    }}>
                <p>Invalid</p>
                <DsAutocomplete options={mockOptions} invalid placeholder="Invalid autocomplete..." />
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole('combobox');
    await expect(inputs).toHaveLength(2);
    const disabledInput = inputs[0] as HTMLInputElement;
    await expect(disabledInput).toBeDisabled();
    const invalidInput = inputs[1] as HTMLInputElement;
    await expect(invalidInput).toBeInTheDocument();
    await expect(invalidInput).not.toBeDisabled();
  }
}`,...ne.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
    const [loading, setLoading] = useState(false);
    const handleInputValueChange = async (value: string) => {
      args.onInputValueChange?.(value);
      if (!value) {
        setOptions([]);
        return;
      }
      setLoading(true);
      const results = await fetchCountries(value);
      setOptions(results);
      setLoading(false);
    };
    return <DsAutocomplete {...args} options={options} loading={loading} onInputValueChange={handleInputValueChange} showTrigger={false} startAdornment={<DsIcon icon="search" size="medium" aria-label="search icon" />} placeholder="Search countries (async)..." locale={{
      noMatches: 'No results found'
    }} style={{
      width: '300px'
    }} />;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.type(input, 'Uni');
    const usOption = await screen.findByRole('option', {
      name: /United States/i
    });
    await expect(usOption).toBeInTheDocument();
    await expect(screen.getByRole('option', {
      name: /United Kingdom/i
    })).toBeInTheDocument();
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Uni');
    await userEvent.click(usOption);
    await expect(args.onValueChange).toHaveBeenCalledWith('us');
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('United States');
    await expect(input).toHaveValue('United States');
    const clearButton = canvas.getByLabelText('Clear');
    await userEvent.click(clearButton);
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('');
    await expect(input).toHaveValue('');
    await userEvent.type(input, 'zzz');
    await screen.findByText('No results found');
    await expect(screen.queryByRole('option')).not.toBeInTheDocument();
    await userEvent.clear(input);
    await userEvent.type(input, 'an');
    const options = await screen.findAllByRole('option');
    await expect(options.length).toBeGreaterThanOrEqual(2);
    await expect(screen.getByRole('option', {
      name: /Canada/i
    })).toBeInTheDocument();
    await expect(screen.getByRole('option', {
      name: /France/i
    })).toBeInTheDocument();
    await userEvent.type(input, 'ad');
    await screen.findByRole('option', {
      name: /Canada/i
    });
    await expect(screen.queryByRole('option', {
      name: /France/i
    })).not.toBeInTheDocument();
  }
}`,...oe.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      void fetchAllCountries().then(results => {
        setOptions(results);
        setLoading(false);
      });
    }, []);
    return <DsAutocomplete {...args} options={options} loading={loading} placeholder="Select a country..." style={{
      width: '300px'
    }} />;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const trigger = canvas.getByRole('button', {
      name: /toggle dropdown/i
    });
    await userEvent.click(trigger);
    const usOption = await screen.findByRole('option', {
      name: /United States/i
    });
    await expect(usOption).toBeInTheDocument();
    await expect(screen.getByRole('option', {
      name: /Japan/i
    })).toBeInTheDocument();
    await userEvent.type(input, 'Un');
    await expect(screen.getByRole('option', {
      name: /United States/i
    })).toBeInTheDocument();
    await expect(screen.getByRole('option', {
      name: /United Kingdom/i
    })).toBeInTheDocument();
    await expect(screen.queryByRole('option', {
      name: /Japan/i
    })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('option', {
      name: /United States/i
    }));
    await expect(args.onValueChange).toHaveBeenCalledWith('us');
  }
}`,...ie.parameters?.docs?.source}}};const ln=["Default","SearchMode","SearchWithIcon","AllVariants","States","AsyncSearch","AsyncOptions"];export{ae as AllVariants,ie as AsyncOptions,oe as AsyncSearch,Z as Default,ee as SearchMode,te as SearchWithIcon,ne as States,ln as __namedExportsOrder,on as default};
