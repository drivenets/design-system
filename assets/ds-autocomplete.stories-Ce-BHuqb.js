import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-BSfF28J8.js";import{D as $}from"./ds-icon-DMTFLbiR.js";import{c as Qe}from"./index-Bf-54wPu.js";import{c as re,m as P,a as A,d as Xe,b as Ve,u as Ze}from"./use-locale-context-BXGYH-G_.js";import{i as et}from"./cache-DQEOqL51.js";import{L as Ee,c as tt}from"./list-collection-CUkAIAZC.js";import{s as nt,P as at}from"./portal-CqcPpFZT.js";import{c as Q}from"./create-split-props-u5h9OPvL.js";import{a as Te,u as ot,P as it}from"./use-presence-GE6cLLPI.js";import{u as Be}from"./use-field-context-DYiHHwY6.js";import{k as lt,l as I,I as de,O as st,G as rt,V as U,W as ct,P as me,X as ut,H as dt,u as pt,y as gt}from"./create-anatomy-DPnaczCP.js";import{s as ht,t as mt,g as vt}from"./index-CazKU5oL.js";import{g as It,a as ve}from"./get-styles-BOVpeMAL.js";import{b as ft}from"./query-CjgVAlRR.js";import{s as Se}from"./caret-BrXylHYy.js";import{o as Ct}from"./mutation-observer-Cu1ou0At.js";import{t as yt,s as Ie}from"./dismissable-layer-D3gtpCn3.js";import{c as bt}from"./navigate-DKtDux5p.js";import{r as k,n as wt}from"./raf-CC9hSMXO.js";import{i as xt}from"./equal-DfFTejAs.js";import{r as Ot,j as Vt,h as Et,d as X,l as fe,k as Tt}from"./event-CBXSxTbR.js";import"./preload-helper-PPVm8Dsz.js";import"./chunk-QZ7TP4HQ-O9Gy0rNO.js";import"./index-BzC6s-iE.js";import"./index-BZ4hDW5j.js";import"./set-CN0Hvdz-.js";import"./computed-style-Dlx_PkG-.js";import"./floating-ui.dom-D3zTlarL.js";const[Bt,N]=re({name:"ComboboxContext",hookName:"useComboboxContext",providerName:"<ComboboxProvider />"}),Pe=y.forwardRef((e,t)=>{const n=N(),a=P(n.getClearTriggerProps(),e);return r.jsx(A.button,{...a,ref:t})});Pe.displayName="ComboboxClearTrigger";const Re=y.forwardRef((e,t)=>{const n=N(),a=Te(),o=P(n.getContentProps(),a.getPresenceProps(),e);return a.unmounted?null:r.jsx(A.div,{...o,ref:Xe(a.ref,t)})});Re.displayName="ComboboxContent";var St=lt("combobox").parts("root","clearTrigger","content","control","input","item","itemGroup","itemGroupLabel","itemIndicator","itemText","label","list","positioner","trigger"),T=St.build(),Le=e=>new Ee(e);Le.empty=()=>new Ee({items:[]});var Pt=e=>e.ids?.root??`combobox:${e.id}`,pe=e=>e.ids?.label??`combobox:${e.id}:label`,ke=e=>e.ids?.control??`combobox:${e.id}:control`,le=e=>e.ids?.input??`combobox:${e.id}:input`,se=e=>e.ids?.content??`combobox:${e.id}:content`,Ae=e=>e.ids?.positioner??`combobox:${e.id}:popper`,Ne=e=>e.ids?.trigger??`combobox:${e.id}:toggle-btn`,De=e=>e.ids?.clearTrigger??`combobox:${e.id}:clear-btn`,Rt=(e,t)=>e.ids?.itemGroup?.(t)??`combobox:${e.id}:optgroup:${t}`,Ce=(e,t)=>e.ids?.itemGroupLabel?.(t)??`combobox:${e.id}:optgroup-label:${t}`,ye=(e,t)=>e.ids?.item?.(t)??`combobox:${e.id}:option:${t}`,M=e=>e.getById(se(e)),K=e=>e.getById(le(e)),be=e=>e.getById(Ae(e)),we=e=>e.getById(ke(e)),J=e=>e.getById(Ne(e)),Lt=e=>e.getById(De(e)),q=(e,t)=>{if(t==null)return null;const n=`[role=option][data-value="${CSS.escape(t)}"]`;return ft(M(e),n)},ge=e=>{const t=K(e);e.isActiveElement(t)||t?.focus({preventScroll:!0}),Se(t)},kt=e=>{const t=J(e);e.isActiveElement(t)||t?.focus({preventScroll:!0})};function At(e,t){const{context:n,prop:a,state:o,send:i,scope:l,computed:p,event:d}=e,g=a("translations"),v=a("collection"),b=!!a("disabled"),w=p("isInteractive"),E=!!a("invalid"),_=!!a("required"),R=!!a("readOnly"),C=o.hasTag("open"),z=o.hasTag("focused"),D=a("composite"),L=n.get("highlightedValue"),W=It({...a("positioning"),placement:n.get("currentPlacement")});function G(s){const u=v.getItemDisabled(s.item),O=v.getItemValue(s.item);return st(O,()=>`[zag-js] No value found for item ${JSON.stringify(s.item)}`),{value:O,disabled:!!(b||u),highlighted:L===O,selected:n.get("value").includes(O)}}return{focused:z,open:C,inputValue:n.get("inputValue"),highlightedValue:L,highlightedItem:n.get("highlightedItem"),value:n.get("value"),valueAsString:p("valueAsString"),hasSelectedItems:p("hasSelectedItems"),selectedItems:n.get("selectedItems"),collection:a("collection"),multiple:!!a("multiple"),disabled:!!b,syncSelectedItems(){i({type:"SELECTED_ITEMS.SYNC"})},reposition(s={}){i({type:"POSITIONING.SET",options:s})},setHighlightValue(s){i({type:"HIGHLIGHTED_VALUE.SET",value:s})},clearHighlightValue(){i({type:"HIGHLIGHTED_VALUE.CLEAR"})},selectValue(s){i({type:"ITEM.SELECT",value:s})},setValue(s){i({type:"VALUE.SET",value:s})},setInputValue(s,u="script"){i({type:"INPUT_VALUE.SET",value:s,src:u})},clearValue(s){s!=null?i({type:"ITEM.CLEAR",value:s}):i({type:"VALUE.CLEAR"})},focus(){K(l)?.focus()},setOpen(s,u="script"){o.hasTag("open")!==s&&i({type:s?"OPEN":"CLOSE",src:u})},getRootProps(){return t.element({...T.root.attrs,dir:a("dir"),id:Pt(l),"data-invalid":I(E),"data-readonly":I(R)})},getLabelProps(){return t.label({...T.label.attrs,dir:a("dir"),htmlFor:le(l),id:pe(l),"data-readonly":I(R),"data-disabled":I(b),"data-invalid":I(E),"data-required":I(_),"data-focus":I(z),onClick(s){D||(s.preventDefault(),J(l)?.focus({preventScroll:!0}))}})},getControlProps(){return t.element({...T.control.attrs,dir:a("dir"),id:ke(l),"data-state":C?"open":"closed","data-focus":I(z),"data-disabled":I(b),"data-invalid":I(E)})},getPositionerProps(){return t.element({...T.positioner.attrs,dir:a("dir"),id:Ae(l),style:W.floating})},getInputProps(){return t.input({...T.input.attrs,dir:a("dir"),"aria-invalid":de(E),"data-invalid":I(E),"data-autofocus":I(a("autoFocus")),name:a("name"),form:a("form"),disabled:b,required:a("required"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"none",spellCheck:"false",readOnly:R,placeholder:a("placeholder"),id:le(l),type:"text",role:"combobox",defaultValue:n.get("inputValue"),"aria-autocomplete":p("autoComplete")?"both":"list","aria-controls":se(l),"aria-expanded":C,"data-state":C?"open":"closed","aria-activedescendant":L?ye(l,L):void 0,onClick(s){s.defaultPrevented||a("openOnClick")&&w&&i({type:"INPUT.CLICK",src:"input-click"})},onFocus(){b||i({type:"INPUT.FOCUS"})},onBlur(){b||i({type:"INPUT.BLUR"})},onChange(s){i({type:"INPUT.CHANGE",value:s.currentTarget.value,src:"input-change"})},onKeyDown(s){if(s.defaultPrevented||!w||s.ctrlKey||s.shiftKey||Tt(s))return;const u=a("openOnKeyPress"),O=s.ctrlKey||s.metaKey||s.shiftKey,h=!0,H={ArrowDown(F){!u&&!C||(i({type:F.altKey?"OPEN":"INPUT.ARROW_DOWN",keypress:h,src:"arrow-key"}),F.preventDefault())},ArrowUp(){!u&&!C||(i({type:s.altKey?"CLOSE":"INPUT.ARROW_UP",keypress:h,src:"arrow-key"}),s.preventDefault())},Home(F){O||(i({type:"INPUT.HOME",keypress:h}),C&&F.preventDefault())},End(F){O||(i({type:"INPUT.END",keypress:h}),C&&F.preventDefault())},Enter(F){i({type:"INPUT.ENTER",keypress:h,src:"item-select"});const Ye=p("isCustomValue")&&a("allowCustomValue"),ze=L!=null,Je=a("alwaysSubmitOnEnter");if(C&&!Ye&&!Je&&ze&&F.preventDefault(),L==null)return;const ue=q(l,L);rt(ue)&&a("navigate")?.({value:L,node:ue,href:ue.href})},Escape(){i({type:"INPUT.ESCAPE",keypress:h,src:"escape-key"}),s.preventDefault()}},Ke=fe(s,{dir:a("dir")}),$e=H[Ke];$e?.(s)}})},getTriggerProps(s={}){return t.button({...T.trigger.attrs,dir:a("dir"),id:Ne(l),"aria-haspopup":D?"listbox":"dialog",type:"button",tabIndex:s.focusable?void 0:-1,"aria-label":g.triggerLabel,"aria-expanded":C,"data-state":C?"open":"closed","aria-controls":C?se(l):void 0,disabled:b,"data-invalid":I(E),"data-focusable":I(s.focusable),"data-readonly":I(R),"data-disabled":I(b),onFocus(){s.focusable&&i({type:"INPUT.FOCUS",src:"trigger"})},onClick(u){u.defaultPrevented||w&&X(u)&&i({type:"TRIGGER.CLICK",src:"trigger-click"})},onPointerDown(u){w&&u.pointerType!=="touch"&&X(u)&&(u.preventDefault(),queueMicrotask(()=>{ge(l)}))},onKeyDown(u){if(u.defaultPrevented||D)return;const O={ArrowDown(){i({type:"INPUT.ARROW_DOWN",src:"arrow-key"})},ArrowUp(){i({type:"INPUT.ARROW_UP",src:"arrow-key"})}},h=fe(u,{dir:a("dir")}),H=O[h];H&&(H(u),u.preventDefault())}})},getContentProps(){return t.element({...T.content.attrs,dir:a("dir"),id:se(l),role:D?"listbox":"dialog",tabIndex:-1,hidden:!C,"data-state":C?"open":"closed","data-placement":n.get("currentPlacement"),"aria-labelledby":pe(l),"aria-multiselectable":a("multiple")&&D?!0:void 0,"data-empty":I(v.size===0),onPointerDown(s){X(s)&&s.preventDefault()}})},getListProps(){return t.element({...T.list.attrs,role:D?void 0:"listbox","data-empty":I(v.size===0),"aria-labelledby":pe(l),"aria-multiselectable":a("multiple")&&!D?!0:void 0})},getClearTriggerProps(){return t.button({...T.clearTrigger.attrs,dir:a("dir"),id:De(l),type:"button",tabIndex:-1,disabled:b,"data-invalid":I(E),"aria-label":g.clearTriggerLabel,"aria-controls":le(l),hidden:!n.get("value").length,onPointerDown(s){X(s)&&s.preventDefault()},onClick(s){s.defaultPrevented||w&&i({type:"VALUE.CLEAR",src:"clear-trigger"})}})},getItemState:G,getItemProps(s){const u=G(s),O=u.value;return t.element({...T.item.attrs,dir:a("dir"),id:ye(l,O),role:"option",tabIndex:-1,"data-highlighted":I(u.highlighted),"data-state":u.selected?"checked":"unchecked","aria-selected":de(u.selected),"aria-disabled":de(u.disabled),"data-disabled":I(u.disabled),"data-value":u.value,onPointerMove(){u.disabled||u.highlighted||i({type:"ITEM.POINTER_MOVE",value:O})},onPointerLeave(){s.persistFocus||u.disabled||!d.previous()?.type.includes("POINTER")||i({type:"ITEM.POINTER_LEAVE",value:O})},onClick(h){Ot(h)||Vt(h)||Et(h)||u.disabled||i({type:"ITEM.CLICK",src:"item-select",value:O})}})},getItemTextProps(s){const u=G(s);return t.element({...T.itemText.attrs,dir:a("dir"),"data-state":u.selected?"checked":"unchecked","data-disabled":I(u.disabled),"data-highlighted":I(u.highlighted)})},getItemIndicatorProps(s){const u=G(s);return t.element({"aria-hidden":!0,...T.itemIndicator.attrs,dir:a("dir"),"data-state":u.selected?"checked":"unchecked",hidden:!u.selected})},getItemGroupProps(s){const{id:u}=s;return t.element({...T.itemGroup.attrs,dir:a("dir"),id:Rt(l,u),"aria-labelledby":Ce(l,u),"data-empty":I(v.size===0),role:"group"})},getItemGroupLabelProps(s){const{htmlFor:u}=s;return t.element({...T.itemGroupLabel.attrs,dir:a("dir"),id:Ce(l,u),role:"presentation"})}}}var{guards:Nt,createMachine:Dt,choose:Ht}=dt(),{and:x,not:B}=Nt,Ft=Dt({props({props:e}){return{loopFocus:!0,openOnClick:!1,defaultValue:[],defaultInputValue:"",closeOnSelect:!e.multiple,allowCustomValue:!1,alwaysSubmitOnEnter:!1,inputBehavior:"none",selectionBehavior:e.multiple?"clear":"replace",openOnKeyPress:!0,openOnChange:!0,composite:!0,navigate({node:t}){bt(t)},collection:Le.empty(),...e,positioning:{placement:"bottom",sameWidth:!0,...e.positioning},translations:{triggerLabel:"Toggle suggestions",clearTriggerLabel:"Clear value",...e.translations}}},initialState({prop:e}){return e("open")||e("defaultOpen")?"suggesting":"idle"},context({prop:e,bindable:t,getContext:n,getEvent:a}){return{currentPlacement:t(()=>({defaultValue:void 0})),value:t(()=>({defaultValue:e("defaultValue"),value:e("value"),isEqual:xt,hash(o){return o.join(",")},onChange(o){const i=n(),l=i.get("selectedItems"),p=e("collection"),d=b=>b.map(w=>l.find(E=>p.getItemValue(E)===w)||p.find(w)),g=d(o),v=e("value")||o;i.set("selectedItems",d(v)),e("onValueChange")?.({value:o,items:g})}})),highlightedValue:t(()=>({defaultValue:e("defaultHighlightedValue")||null,value:e("highlightedValue"),onChange(o){const i=e("collection").find(o);e("onHighlightChange")?.({highlightedValue:o,highlightedItem:i})}})),inputValue:t(()=>{let o=e("inputValue")||e("defaultInputValue");const i=e("value")||e("defaultValue");if(!o.trim()&&!e("multiple")){const l=e("collection").stringifyMany(i);o=U(e("selectionBehavior"),{preserve:o||l,replace:l,clear:""})}return{defaultValue:o,value:e("inputValue"),onChange(l){const p=a(),d=(p.previousEvent||p).src;e("onInputValueChange")?.({inputValue:l,reason:d})}}}),highlightedItem:t(()=>{const o=e("highlightedValue");return{defaultValue:e("collection").find(o)}}),selectedItems:t(()=>{const o=e("value")||e("defaultValue")||[];return{defaultValue:e("collection").findMany(o)}})}},computed:{isInputValueEmpty:({context:e})=>e.get("inputValue").length===0,isInteractive:({prop:e})=>!(e("readOnly")||e("disabled")),autoComplete:({prop:e})=>e("inputBehavior")==="autocomplete",autoHighlight:({prop:e})=>e("inputBehavior")==="autohighlight",hasSelectedItems:({context:e})=>e.get("value").length>0,valueAsString:({context:e,prop:t})=>t("collection").stringifyItems(e.get("selectedItems")),isCustomValue:({context:e,computed:t})=>e.get("inputValue")!==t("valueAsString")},watch({context:e,prop:t,track:n,action:a,send:o}){n([()=>e.hash("value")],()=>{a(["syncSelectedItems"])}),n([()=>e.get("inputValue")],()=>{a(["syncInputValue"])}),n([()=>e.get("highlightedValue")],()=>{a(["syncHighlightedItem","autofillInputValue"])}),n([()=>t("open")],()=>{a(["toggleVisibility"])}),n([()=>t("collection").toString()],()=>{o({type:"CHILDREN_CHANGE"})})},on:{"SELECTED_ITEMS.SYNC":{actions:["syncSelectedItems"]},"HIGHLIGHTED_VALUE.SET":{actions:["setHighlightedValue"]},"HIGHLIGHTED_VALUE.CLEAR":{actions:["clearHighlightedValue"]},"ITEM.SELECT":{actions:["selectItem"]},"ITEM.CLEAR":{actions:["clearItem"]},"VALUE.SET":{actions:["setValue"]},"INPUT_VALUE.SET":{actions:["setInputValue"]},"POSITIONING.SET":{actions:["reposition"]}},entry:Ht([{guard:"autoFocus",actions:["setInitialFocus"]}]),states:{idle:{tags:["idle","closed"],entry:["scrollContentToTop","clearHighlightedValue"],on:{"CONTROLLED.OPEN":{target:"interacting"},"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.CLICK":[{guard:"isOpenControlled",actions:["highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.FOCUS":{target:"focused"},OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"interacting",actions:["invokeOnOpen"]}],"VALUE.CLEAR":{target:"focused",actions:["clearInputValue","clearSelectedItems","setInitialFocus"]}}},focused:{tags:["focused","closed"],entry:["scrollContentToTop","clearHighlightedValue"],on:{"CONTROLLED.OPEN":[{guard:"isChangeEvent",target:"suggesting"},{target:"interacting"}],"INPUT.CHANGE":[{guard:x("isOpenControlled","openOnChange"),actions:["setInputValue","invokeOnOpen","highlightFirstItemIfNeeded"]},{guard:"openOnChange",target:"suggesting",actions:["setInputValue","invokeOnOpen","highlightFirstItemIfNeeded"]},{actions:["setInputValue"]}],"LAYER.INTERACT_OUTSIDE":{target:"idle"},"INPUT.ESCAPE":{guard:x("isCustomValue",B("allowCustomValue")),actions:["revertInputValue"]},"INPUT.BLUR":{target:"idle"},"INPUT.CLICK":[{guard:"isOpenControlled",actions:["highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstSelectedItem","invokeOnOpen"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.ARROW_DOWN":[{guard:x("isOpenControlled","autoComplete"),actions:["invokeOnOpen"]},{guard:"autoComplete",target:"interacting",actions:["invokeOnOpen"]},{guard:"isOpenControlled",actions:["highlightFirstOrSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstOrSelectedItem","invokeOnOpen"]}],"INPUT.ARROW_UP":[{guard:x("isOpenControlled","autoComplete"),actions:["invokeOnOpen"]},{guard:"autoComplete",target:"interacting",actions:["invokeOnOpen"]},{guard:"isOpenControlled",actions:["highlightLastOrSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightLastOrSelectedItem","invokeOnOpen"]}],OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"interacting",actions:["invokeOnOpen"]}],"VALUE.CLEAR":{actions:["clearInputValue","clearSelectedItems"]}}},interacting:{tags:["open","focused"],entry:["setInitialFocus"],effects:["trackFocusVisible","scrollToHighlightedItem","trackDismissableLayer","trackPlacement"],on:{"CONTROLLED.CLOSE":[{guard:"restoreFocus",target:"focused",actions:["setFinalFocus"]},{target:"idle"}],CHILDREN_CHANGE:[{guard:"isHighlightedItemRemoved",actions:["clearHighlightedValue"]},{actions:["scrollToHighlightedItem"]}],"INPUT.HOME":{actions:["highlightFirstItem"]},"INPUT.END":{actions:["highlightLastItem"]},"INPUT.ARROW_DOWN":[{guard:x("autoComplete","isLastItemHighlighted"),actions:["clearHighlightedValue","scrollContentToTop"]},{actions:["highlightNextItem"]}],"INPUT.ARROW_UP":[{guard:x("autoComplete","isFirstItemHighlighted"),actions:["clearHighlightedValue"]},{actions:["highlightPrevItem"]}],"INPUT.ENTER":[{guard:x("isOpenControlled","isCustomValue",B("hasHighlightedItem"),B("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:x("isCustomValue",B("hasHighlightedItem"),B("allowCustomValue")),target:"focused",actions:["revertInputValue","invokeOnClose"]},{guard:x("isOpenControlled","closeOnSelect"),actions:["selectHighlightedItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectHighlightedItem","invokeOnClose","setFinalFocus"]},{actions:["selectHighlightedItem"]}],"INPUT.CHANGE":[{guard:"autoComplete",target:"suggesting",actions:["setInputValue"]},{target:"suggesting",actions:["clearHighlightedValue","setInputValue"]}],"ITEM.POINTER_MOVE":{actions:["setHighlightedValue"]},"ITEM.POINTER_LEAVE":{actions:["clearHighlightedValue"]},"ITEM.CLICK":[{guard:x("isOpenControlled","closeOnSelect"),actions:["selectItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectItem","invokeOnClose","setFinalFocus"]},{actions:["selectItem"]}],"LAYER.ESCAPE":[{guard:x("isOpenControlled","autoComplete"),actions:["syncInputValue","invokeOnClose"]},{guard:"autoComplete",target:"focused",actions:["syncInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"LAYER.INTERACT_OUTSIDE":[{guard:x("isOpenControlled","isCustomValue",B("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:x("isCustomValue",B("allowCustomValue")),target:"idle",actions:["revertInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"idle",actions:["invokeOnClose"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"VALUE.CLEAR":[{guard:"isOpenControlled",actions:["clearInputValue","clearSelectedItems","invokeOnClose"]},{target:"focused",actions:["clearInputValue","clearSelectedItems","invokeOnClose","setFinalFocus"]}]}},suggesting:{tags:["open","focused"],effects:["trackFocusVisible","trackDismissableLayer","scrollToHighlightedItem","trackPlacement"],entry:["setInitialFocus"],on:{"CONTROLLED.CLOSE":[{guard:"restoreFocus",target:"focused",actions:["setFinalFocus"]},{target:"idle"}],CHILDREN_CHANGE:[{guard:x("isHighlightedItemRemoved","hasCollectionItems","autoHighlight"),actions:["clearHighlightedValue","highlightFirstItem"]},{guard:"isHighlightedItemRemoved",actions:["clearHighlightedValue"]},{guard:"autoHighlight",actions:["highlightFirstItem"]}],"INPUT.ARROW_DOWN":{target:"interacting",actions:["highlightNextItem"]},"INPUT.ARROW_UP":{target:"interacting",actions:["highlightPrevItem"]},"INPUT.HOME":{target:"interacting",actions:["highlightFirstItem"]},"INPUT.END":{target:"interacting",actions:["highlightLastItem"]},"INPUT.ENTER":[{guard:x("isOpenControlled","isCustomValue",B("hasHighlightedItem"),B("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:x("isCustomValue",B("hasHighlightedItem"),B("allowCustomValue")),target:"focused",actions:["revertInputValue","invokeOnClose"]},{guard:x("isOpenControlled","closeOnSelect"),actions:["selectHighlightedItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectHighlightedItem","invokeOnClose","setFinalFocus"]},{actions:["selectHighlightedItem"]}],"INPUT.CHANGE":{actions:["setInputValue"]},"LAYER.ESCAPE":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"ITEM.POINTER_MOVE":{target:"interacting",actions:["setHighlightedValue"]},"ITEM.POINTER_LEAVE":{actions:["clearHighlightedValue"]},"LAYER.INTERACT_OUTSIDE":[{guard:x("isOpenControlled","isCustomValue",B("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:x("isCustomValue",B("allowCustomValue")),target:"idle",actions:["revertInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"idle",actions:["invokeOnClose"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"ITEM.CLICK":[{guard:x("isOpenControlled","closeOnSelect"),actions:["selectItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectItem","invokeOnClose","setFinalFocus"]},{actions:["selectItem"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"VALUE.CLEAR":[{guard:"isOpenControlled",actions:["clearInputValue","clearSelectedItems","invokeOnClose"]},{target:"focused",actions:["clearInputValue","clearSelectedItems","invokeOnClose","setFinalFocus"]}]}}},implementations:{guards:{isInputValueEmpty:({computed:e})=>e("isInputValueEmpty"),autoComplete:({computed:e,prop:t})=>e("autoComplete")&&!t("multiple"),autoHighlight:({computed:e})=>e("autoHighlight"),isFirstItemHighlighted:({prop:e,context:t})=>e("collection").firstValue===t.get("highlightedValue"),isLastItemHighlighted:({prop:e,context:t})=>e("collection").lastValue===t.get("highlightedValue"),isCustomValue:({computed:e})=>e("isCustomValue"),allowCustomValue:({prop:e})=>!!e("allowCustomValue"),hasHighlightedItem:({context:e})=>e.get("highlightedValue")!=null,closeOnSelect:({prop:e})=>!!e("closeOnSelect"),isOpenControlled:({prop:e})=>e("open")!=null,openOnChange:({prop:e,context:t})=>{const n=e("openOnChange");return ut(n)?n:!!n?.({inputValue:t.get("inputValue")})},restoreFocus:({event:e})=>{const t=e.restoreFocus??e.previousEvent?.restoreFocus;return t==null?!0:!!t},isChangeEvent:({event:e})=>e.previousEvent?.type==="INPUT.CHANGE",autoFocus:({prop:e})=>!!e("autoFocus"),isHighlightedItemRemoved:({prop:e,context:t})=>!e("collection").has(t.get("highlightedValue")),hasCollectionItems:({prop:e})=>e("collection").size>0},effects:{trackFocusVisible({scope:e}){return mt({root:e.getRootNode?.()})},trackDismissableLayer({send:e,prop:t,scope:n}){return t("disableLayer")?void 0:yt(()=>M(n),{type:"listbox",defer:!0,exclude:()=>[K(n),J(n),Lt(n)],onFocusOutside:t("onFocusOutside"),onPointerDownOutside:t("onPointerDownOutside"),onInteractOutside:t("onInteractOutside"),onEscapeKeyDown(o){o.preventDefault(),o.stopPropagation(),e({type:"LAYER.ESCAPE",src:"escape-key"})},onDismiss(){e({type:"LAYER.INTERACT_OUTSIDE",src:"interact-outside",restoreFocus:!1})}})},trackPlacement({context:e,prop:t,scope:n}){const a=()=>we(n)||J(n),o=()=>be(n);return e.set("currentPlacement",t("positioning").placement),ve(a,o,{...t("positioning"),defer:!0,onComplete(i){e.set("currentPlacement",i.placement)}})},scrollToHighlightedItem({context:e,prop:t,scope:n}){const a=K(n);let o=[];const i=d=>{if(vt()==="pointer")return;const v=e.get("highlightedValue");if(!v)return;const b=M(n),w=t("scrollToIndexFn");if(w){const R=t("collection").indexOf(v);w({index:R,immediate:d,getElement:()=>q(n,v)});return}const E=q(n,v),_=k(()=>{Ie(E,{rootEl:b,block:"nearest"})});o.push(_)},l=k(()=>{ht("virtual"),i(!0)});o.push(l);const p=Ct(a,{attributes:["aria-activedescendant"],callback:()=>i(!1)});return o.push(p),()=>{o.forEach(d=>d())}}},actions:{reposition({context:e,prop:t,scope:n,event:a}){ve(()=>we(n),()=>be(n),{...t("positioning"),...a.options,defer:!0,listeners:!1,onComplete(l){e.set("currentPlacement",l.placement)}})},setHighlightedValue({context:e,event:t}){t.value!=null&&e.set("highlightedValue",t.value)},clearHighlightedValue({context:e}){e.set("highlightedValue",null)},selectHighlightedItem(e){const{context:t,prop:n}=e,a=n("collection"),o=t.get("highlightedValue");if(!o||!a.has(o))return;const i=n("multiple")?me(t.get("value"),o):[o];n("onSelect")?.({value:i,itemValue:o}),t.set("value",i);const l=U(n("selectionBehavior"),{preserve:t.get("inputValue"),replace:a.stringifyMany(i),clear:""});t.set("inputValue",l)},scrollToHighlightedItem({context:e,prop:t,scope:n}){wt(()=>{const a=e.get("highlightedValue");if(a==null)return;const o=q(n,a),i=M(n),l=t("scrollToIndexFn");if(l){const p=t("collection").indexOf(a);l({index:p,immediate:!0,getElement:()=>q(n,a)});return}Ie(o,{rootEl:i,block:"nearest"})})},selectItem(e){const{context:t,event:n,flush:a,prop:o}=e;n.value!=null&&a(()=>{const i=o("multiple")?me(t.get("value"),n.value):[n.value];o("onSelect")?.({value:i,itemValue:n.value}),t.set("value",i);const l=U(o("selectionBehavior"),{preserve:t.get("inputValue"),replace:o("collection").stringifyMany(i),clear:""});t.set("inputValue",l)})},clearItem(e){const{context:t,event:n,flush:a,prop:o}=e;n.value!=null&&a(()=>{const i=ct(t.get("value"),n.value);t.set("value",i);const l=U(o("selectionBehavior"),{preserve:t.get("inputValue"),replace:o("collection").stringifyMany(i),clear:""});t.set("inputValue",l)})},setInitialFocus({scope:e}){k(()=>{ge(e)})},setFinalFocus({scope:e}){k(()=>{J(e)?.dataset.focusable==null?ge(e):kt(e)})},syncInputValue({context:e,scope:t,event:n}){const a=K(t);a&&(a.value=e.get("inputValue"),queueMicrotask(()=>{n.current().type!=="INPUT.CHANGE"&&Se(a)}))},setInputValue({context:e,event:t}){e.set("inputValue",t.value)},clearInputValue({context:e}){e.set("inputValue","")},revertInputValue({context:e,prop:t,computed:n}){const a=t("selectionBehavior"),o=U(a,{replace:n("hasSelectedItems")?n("valueAsString"):"",preserve:e.get("inputValue"),clear:""});e.set("inputValue",o)},setValue(e){const{context:t,flush:n,event:a,prop:o}=e;n(()=>{t.set("value",a.value);const i=U(o("selectionBehavior"),{preserve:t.get("inputValue"),replace:o("collection").stringifyMany(a.value),clear:""});t.set("inputValue",i)})},clearSelectedItems(e){const{context:t,flush:n,prop:a}=e;n(()=>{t.set("value",[]);const o=U(a("selectionBehavior"),{preserve:t.get("inputValue"),replace:a("collection").stringifyMany([]),clear:""});t.set("inputValue",o)})},scrollContentToTop({prop:e,scope:t}){const n=e("scrollToIndexFn");if(n){const a=e("collection").firstValue;n({index:0,immediate:!0,getElement:()=>q(t,a)})}else{const a=M(t);if(!a)return;a.scrollTop=0}},invokeOnOpen({prop:e,event:t,context:n}){const a=xe(t);e("onOpenChange")?.({open:!0,reason:a,value:n.get("value")})},invokeOnClose({prop:e,event:t,context:n}){const a=xe(t);e("onOpenChange")?.({open:!1,reason:a,value:n.get("value")})},highlightFirstItem({context:e,prop:t,scope:n}){(M(n)?queueMicrotask:k)(()=>{const o=t("collection").firstValue;o&&e.set("highlightedValue",o)})},highlightFirstItemIfNeeded({computed:e,action:t}){e("autoHighlight")&&t(["highlightFirstItem"])},highlightLastItem({context:e,prop:t,scope:n}){(M(n)?queueMicrotask:k)(()=>{const o=t("collection").lastValue;o&&e.set("highlightedValue",o)})},highlightNextItem({context:e,prop:t}){let n=null;const a=e.get("highlightedValue"),o=t("collection");a?(n=o.getNextValue(a),!n&&t("loopFocus")&&(n=o.firstValue)):n=o.firstValue,n&&e.set("highlightedValue",n)},highlightPrevItem({context:e,prop:t}){let n=null;const a=e.get("highlightedValue"),o=t("collection");a?(n=o.getPreviousValue(a),!n&&t("loopFocus")&&(n=o.lastValue)):n=o.lastValue,n&&e.set("highlightedValue",n)},highlightFirstSelectedItem({context:e,prop:t}){k(()=>{const[n]=t("collection").sort(e.get("value"));n&&e.set("highlightedValue",n)})},highlightFirstOrSelectedItem({context:e,prop:t,computed:n}){k(()=>{let a=null;n("hasSelectedItems")?a=t("collection").sort(e.get("value"))[0]:a=t("collection").firstValue,a&&e.set("highlightedValue",a)})},highlightLastOrSelectedItem({context:e,prop:t,computed:n}){k(()=>{const a=t("collection");let o=null;n("hasSelectedItems")?o=a.sort(e.get("value"))[0]:o=a.lastValue,o&&e.set("highlightedValue",o)})},autofillInputValue({context:e,computed:t,prop:n,event:a,scope:o}){const i=K(o),l=n("collection");if(!t("autoComplete")||!i||!a.keypress)return;const p=l.stringify(e.get("highlightedValue"));k(()=>{i.value=p||e.get("inputValue")})},syncSelectedItems(e){queueMicrotask(()=>{const{context:t,prop:n}=e,a=n("collection"),o=t.get("value"),i=o.map(p=>t.get("selectedItems").find(g=>a.getItemValue(g)===p)||a.find(p));t.set("selectedItems",i);const l=U(n("selectionBehavior"),{preserve:t.get("inputValue"),replace:a.stringifyMany(o),clear:""});t.set("inputValue",l)})},syncHighlightedItem({context:e,prop:t}){const n=t("collection").find(e.get("highlightedValue"));e.set("highlightedItem",n)},toggleVisibility({event:e,send:t,prop:n}){t({type:n("open")?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:e})}}}});function xe(e){return(e.previousEvent||e).src}const Ut=e=>e.children(N()),He=y.forwardRef((e,t)=>{const n=N(),a=P(n.getControlProps(),e);return r.jsx(A.div,{...a,ref:t})});He.displayName="ComboboxControl";const Fe=y.forwardRef((e,t)=>{const n=N(),a=P(n.getInputProps(),e),o=Be();return r.jsx(A.input,{"aria-describedby":o?.ariaDescribedby,...a,ref:t})});Fe.displayName="ComboboxInput";const[_t]=re({name:"ComboboxItemContext",hookName:"useComboboxItemContext",providerName:"<ComboboxItemProvider />"}),[Mt,jt]=re({name:"ComboboxItemPropsContext",hookName:"useComboboxItemPropsContext",providerName:"<ComboboxItemPropsProvider />"}),Wt=Q(),Ue=y.forwardRef((e,t)=>{const[n,a]=Wt(e,["item","persistFocus"]),o=N(),i=P(o.getItemProps(n),a),l=o.getItemState(n);return r.jsx(Mt,{value:n,children:r.jsx(_t,{value:l,children:r.jsx(A.div,{...i,ref:t})})})});Ue.displayName="ComboboxItem";const[Gt]=re({name:"ComboboxItemGroupPropsContext",hookName:"useComboboxItemGroupPropsContext",providerName:"<ComboboxItemGroupPropsProvider />"}),qt=Q(),_e=y.forwardRef((e,t)=>{const n=y.useId(),[a,o]=qt(e,["id"]),i={id:n,...a},l=N(),p=P(l.getItemGroupProps(i),o);return r.jsx(Gt,{value:i,children:r.jsx(A.div,{...p,ref:t})})});_e.displayName="ComboboxItemGroup";const Me=y.forwardRef((e,t)=>{const n=N(),a=jt(),o=P(n.getItemTextProps(a),e);return r.jsx(A.span,{...o,ref:t})});Me.displayName="ComboboxItemText";const je=y.forwardRef((e,t)=>{const n=N(),a=Te(),o=P(n.getPositionerProps(),e);return a.unmounted?null:r.jsx(A.div,{...o,ref:t})});je.displayName="ComboboxPositioner";const Kt=e=>{const t=y.useId(),{dir:n}=Ve(),{getRootNode:a}=Ze(),o=Be(),i={id:t,ids:{label:o?.ids.label,input:o?.ids.control},disabled:o?.disabled,readOnly:o?.readOnly,required:o?.required,invalid:o?.invalid,dir:n,getRootNode:a,...e},l=pt(Ft,i);return At(l,gt)},$t=(e,t)=>{const[n,a]=nt(e),[o,i]=Q()(a,["allowCustomValue","alwaysSubmitOnEnter","autoFocus","closeOnSelect","collection","composite","defaultHighlightedValue","defaultInputValue","defaultOpen","defaultValue","disabled","disableLayer","form","highlightedValue","id","ids","inputBehavior","inputValue","invalid","loopFocus","multiple","name","navigate","onFocusOutside","onHighlightChange","onInputValueChange","onInteractOutside","onOpenChange","onPointerDownOutside","onSelect","onValueChange","open","openOnChange","openOnClick","openOnKeyPress","placeholder","positioning","readOnly","required","scrollToIndexFn","selectionBehavior","translations","value"]),l=Kt(o),p=ot(P({present:l.open},n)),d=P(l.getRootProps(),i);return r.jsx(Bt,{value:l,children:r.jsx(it,{value:p,children:r.jsx(A.div,{...d,ref:t})})})},Yt=y.forwardRef($t),zt=Q(),We=y.forwardRef((e,t)=>{const[n,a]=zt(e,["focusable"]),o=N(),i=P(o.getTriggerProps(n),a);return r.jsx(A.button,{...i,ref:t})});We.displayName="ComboboxTrigger";var Jt=et(Intl.Collator);function Qt(e){const{locale:t,...n}=e||{},a=Jt(t||"en-US",{usage:"search",...n});function o(d){return d=d.normalize("NFC"),a.resolvedOptions().ignorePunctuation&&(d=d.replace(new RegExp("\\p{P}","gu"),"")),d}function i(d,g){return g.length===0?!0:(d=o(d),g=o(g),a.compare(d.slice(0,g.length),g)===0)}function l(d,g){return g.length===0?!0:(d=o(d),g=o(g),a.compare(d.slice(-g.length),g)===0)}function p(d,g){if(g.length===0)return!0;d=o(d),g=o(g);let v=0,b=g.length;for(;v+b<=d.length;v++){let w=d.slice(v,v+b);if(a.compare(g,w)===0)return!0}return!1}return{startsWith:i,endsWith:l,contains:p}}function Xt(e){const t=Ve(),n=e.locale??t.locale;return y.useMemo(()=>Qt({...e,locale:n}),[n,e])}var he=(e,t)=>{const n=[],a=(o,i,l)=>{i-o>0&&n.push({start:o,end:i,match:l})};if(e.length===0)a(0,t,!1);else{let o=0;for(const i of e)a(o,i.start,!1),a(i.start,i.end,!0),o=i.end;a(o,t,!1)}return n},Ge=e=>e.replace(/[|\\{}()[\]^$+*?.-]/g,t=>`\\${t}`);function Zt(e){const{text:t,query:n,ignoreCase:a,exactMatch:o}=e;if(o){const v=Ge(n),b=new RegExp(`\\b(${v})\\b`,a?"i":""),w=t.match(b);if(!w||w.index===void 0)return[{text:t,match:!1}];const E=w.index,_=E+w[0].length;return he([{start:E,end:_}],t.length).map(C=>({text:t.slice(C.start,C.end),match:!!C.match}))}const i=a?t.toLowerCase():t,l=a&&typeof n=="string"?n.toLowerCase():n,p=typeof i=="string"?i.indexOf(l):-1;if(p===-1)return[{text:t,match:!1}];const d=p+l.length;return he([{start:p,end:d}],t.length).map(v=>({text:t.slice(v.start,v.end),match:!!v.match}))}var en=(e,t,n)=>{const a=e.filter(Boolean).map(i=>Ge(i)),o=n?`\\b(${a.join("|")})\\b`:`(${a.join("|")})`;return new RegExp(o,t)},tn=(e,t=!0)=>`${e?"i":""}${t?"g":""}`;function nn(e){const{text:t,query:n,ignoreCase:a,matchAll:o,exactMatch:i}=e;if(n.length===0)return[{text:t,match:!1}];const l=tn(a,o),p=en(Array.isArray(n)?n:[n],l,i),d=[...t.matchAll(p)].map(g=>({start:g.index||0,end:(g.index||0)+g[0].length}));return he(d,e.text.length).map(g=>({text:e.text.slice(g.start,g.end),match:!!g.match}))}var an=e=>{if(e.matchAll==null&&(e.matchAll=Array.isArray(e.query)),!e.matchAll&&Array.isArray(e.query))throw new Error("matchAll must be true when using multiple queries");return e.matchAll?nn(e):Zt(e)};const on=e=>y.useMemo(()=>an(e),[e]),ln=Q(),sn=e=>{if(typeof e.text!="string")throw new Error("[ark-ui/highlight] text must be a string");const[t,n]=ln(e,["query","text","ignoreCase","matchAll","exactMatch"]),a=on(t);return r.jsx(y.Fragment,{children:a.map(({text:o,match:i},l)=>i?r.jsx("mark",{...n,children:o},l):r.jsx(y.Fragment,{children:o},l))})},rn="_root_13b80_41",cn="_control_13b80_48",un="_input_13b80_59",dn="_startAdornment_13b80_130",pn="_iconContainer_13b80_138",gn="_clearButton_13b80_145",hn="_trigger_13b80_173",mn="_positioner_13b80_206",vn="_content_13b80_211",In="_itemGroup_13b80_272",fn="_item_13b80_272",Cn="_itemIcon_13b80_294",yn="_itemText_13b80_324",bn="_noMatches_13b80_338",wn="_loading_13b80_339",xn="_disabled_13b80_346",On="_invalid_13b80_366",V={root:rn,control:cn,input:un,startAdornment:dn,iconContainer:pn,clearButton:gn,trigger:hn,positioner:mn,content:vn,itemGroup:In,item:fn,itemIcon:Cn,itemText:yn,noMatches:bn,loading:wn,disabled:xn,invalid:On},S=({id:e,options:t=[],loading:n=!1,style:a,className:o,placeholder:i="Start typing to search...",disabled:l=!1,invalid:p=!1,onValueChange:d,onInputValueChange:g,onOpenChange:v,locale:{loading:b="Loading...",noMatches:w="No matches found"}={},highlightMatch:E=!0,showTrigger:_=!0,startAdornment:R})=>{const[C,z]=y.useState(""),D=Xt({sensitivity:"base"}),L=C?t.filter(h=>D.contains(h.label,C)):t,W=tt({items:L,itemToString:h=>h.label,itemToValue:h=>h.value}),G=h=>{z(h.inputValue),g?.(h.inputValue)},s=h=>{const H=h.items[0];H&&d?.(H.value)},u=h=>{v?.(h.open)},O=Qe(V.root,{[V.disabled]:l,[V.invalid]:p},o);return r.jsxs(Yt,{id:e,collection:W,className:O,style:a,disabled:l,invalid:p,onInputValueChange:G,onValueChange:s,onOpenChange:u,closeOnSelect:!0,children:[r.jsxs(He,{className:V.control,children:[R&&r.jsx("span",{className:V.startAdornment,children:R}),r.jsx(Fe,{className:V.input,placeholder:i}),r.jsx(Ut,{children:h=>r.jsxs("div",{className:V.iconContainer,children:[h.inputValue&&!l&&r.jsx(Pe,{className:V.clearButton,"aria-label":"Clear",children:r.jsx($,{icon:"close",size:"medium"})}),_&&r.jsx(We,{className:V.trigger,"aria-label":"Toggle dropdown",children:r.jsx($,{icon:"keyboard_arrow_down",size:"medium"})})]})})]}),r.jsx(at,{children:r.jsx(je,{className:V.positioner,children:r.jsxs(Re,{className:V.content,children:[n&&r.jsx("div",{className:V.loading,children:b}),!n&&W.items.length===0&&r.jsx("div",{className:V.noMatches,children:w}),!n&&W.items.length>0&&r.jsx(_e,{className:V.itemGroup,children:W.items.map(h=>r.jsxs(Ue,{item:h,className:V.item,children:[h.icon&&r.jsx($,{className:V.itemIcon,icon:h.icon,"aria-hidden":"true"}),r.jsx(Me,{className:V.itemText,children:E?r.jsx(sn,{query:C,text:h.label,ignoreCase:!0}):h.label})]},h.value))})]})})})]})};S.__docgenInfo={description:"",methods:[],displayName:"DsAutocomplete",props:{id:{required:!1,tsType:{name:"string"},description:"Unique identifier for the autocomplete component"},options:{required:!1,tsType:{name:"Array",elements:[{name:"DsAutocompleteOption"}],raw:"DsAutocompleteOption[]"},description:`Options to display in the dropdown.
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
@default true`,defaultValue:{value:"true",computed:!1}},startAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display at the start of the input (e.g., a search icon)."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Event handler called when the value changes (when an option is selected)"},onInputValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Event handler called when the input value changes (on every keystroke)"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Event handler called when the dropdown opens or closes"}}};const{expect:c,fn:Oe,screen:f,userEvent:m,within:j}=__STORYBOOK_MODULE_TEST__,na={title:"Design System/Autocomplete",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object",description:"Options to display in the autocomplete dropdown"},placeholder:{control:"text",description:"Placeholder text when input is empty"},highlightMatch:{control:"boolean",description:"Whether to highlight the matching text in the dropdown options"},showTrigger:{control:"boolean",description:"Whether to show the dropdown trigger (arrow) button"},startAdornment:{control:"object",description:"Content to display at the start of the input (e.g., a search icon)"},locale:{control:"object",description:"Locale strings for the autocomplete component"}},args:{onValueChange:Oe(),onInputValueChange:Oe()}},Y=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"}],ce=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"it",label:"Italy"},{value:"es",label:"Spain"},{value:"jp",label:"Japan"},{value:"cn",label:"China"}],Z={render:e=>r.jsx(S,{...e}),args:{options:Y,showTrigger:!0,placeholder:"Select or type to search...",style:{width:"300px"}},play:async({args:e,canvasElement:t})=>{const n=j(t),a=n.getByRole("combobox"),o=n.getByRole("button",{name:/toggle dropdown/i});await c(o).toBeInTheDocument(),await m.click(o);const i=await f.findByRole("option",{name:/Apple/i});await c(i).toBeInTheDocument(),await m.click(a),await c(a).toHaveFocus(),await m.type(a,"b"),await c(f.queryByRole("option",{name:/Apple/i})).not.toBeInTheDocument(),await c(f.getByRole("option",{name:/Banana/i})).toBeInTheDocument(),await c(e.onInputValueChange).toHaveBeenLastCalledWith("b"),await m.click(f.getByRole("option",{name:/Banana/i})),await c(e.onInputValueChange).toHaveBeenLastCalledWith("Banana"),await c(e.onValueChange).toHaveBeenCalledWith("banana");const l=n.getByLabelText("Clear");await m.click(l),await c(e.onInputValueChange).toHaveBeenCalledWith("")}},ee={render:e=>r.jsx(S,{...e}),args:{options:Y,showTrigger:!1,placeholder:"Start typing to search...",style:{width:"300px"}},play:async({args:e,canvasElement:t})=>{const n=j(t),a=n.getByRole("combobox"),o=n.queryByLabelText("Toggle dropdown");await c(o).not.toBeInTheDocument(),await m.click(a),await c(a).toHaveFocus(),await c(n.queryByRole("listbox")).not.toBeInTheDocument(),await m.type(a,"a"),await c(e.onInputValueChange).toHaveBeenLastCalledWith("a");const i=await f.findByRole("option",{name:/Apple/i});await c(i).toBeInTheDocument(),await m.click(i),await c(e.onInputValueChange).toHaveBeenLastCalledWith("Apple"),await c(e.onValueChange).toHaveBeenCalledWith("apple");const l=n.getByLabelText("Clear");await m.click(l),await c(e.onInputValueChange).toHaveBeenCalledWith("")}},te={render:e=>r.jsx(S,{...e}),args:{options:ce,showTrigger:!1,startAdornment:r.jsx($,{icon:"search",size:"medium","aria-label":"search icon"}),placeholder:"Search countries...",style:{width:"300px"}},play:async({args:e,canvasElement:t})=>{const n=j(t),a=n.getByRole("combobox"),o=n.getByLabelText("search icon");await c(o).toBeInTheDocument(),await m.type(a,"Sta"),await c(e.onInputValueChange).toHaveBeenLastCalledWith("Sta");const i=await f.findByRole("option",{name:/United States/i});await c(i).toBeInTheDocument(),await m.click(i),await c(e.onInputValueChange).toHaveBeenCalledWith("United States"),await c(e.onValueChange).toHaveBeenCalledWith("us"),await c(a).toHaveValue("United States")}},ne={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsxs("div",{style:{width:"300px"},children:[r.jsx("p",{children:"Default (with trigger)"}),r.jsx(S,{options:Y,showTrigger:!0,placeholder:"Select or type..."})]}),r.jsxs("div",{style:{width:"300px"},children:[r.jsx("p",{children:"Search Mode (no trigger)"}),r.jsx(S,{options:Y,showTrigger:!1,placeholder:"Start typing..."})]}),r.jsxs("div",{style:{width:"300px"},children:[r.jsx("p",{children:"Search with Icon"}),r.jsx(S,{options:ce,showTrigger:!1,startAdornment:r.jsx($,{icon:"search",size:"medium","aria-label":"search icon"}),placeholder:"Search countries..."})]})]}),play:async({canvasElement:e})=>{const n=j(e).getAllByRole("combobox");await c(n).toHaveLength(3);const a=n[0];await m.click(a),await c(a).toHaveFocus(),await m.type(a,"ap");const o=await f.findByText("Apple");await c(o).toBeInTheDocument(),await m.clear(a),await m.keyboard("{Escape}");const i=n[1];await m.click(i),await m.type(i,"ban");const l=await f.findByText("Banana");await c(l).toBeInTheDocument(),await m.clear(i),await m.keyboard("{Escape}")}},ae={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsxs("div",{style:{width:"300px"},children:[r.jsx("p",{children:"Disabled"}),r.jsx(S,{options:Y,disabled:!0,placeholder:"Disabled autocomplete..."})]}),r.jsxs("div",{style:{width:"300px"},children:[r.jsx("p",{children:"Invalid"}),r.jsx(S,{options:Y,invalid:!0,placeholder:"Invalid autocomplete..."})]})]}),play:async({canvasElement:e})=>{const n=j(e).getAllByRole("combobox");await c(n).toHaveLength(2);const a=n[0];await c(a).toBeDisabled();const o=n[1];await c(o).toBeInTheDocument(),await c(o).not.toBeDisabled()}},qe=150,Vn=async e=>(await new Promise(t=>setTimeout(t,qe)),ce.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),En=async()=>(await new Promise(e=>setTimeout(e,qe)),ce),oe={render:e=>{const[t,n]=y.useState([]),[a,o]=y.useState(!1),i=async l=>{if(e.onInputValueChange?.(l),!l){n([]);return}o(!0);const p=await Vn(l);n(p),o(!1)};return r.jsx(S,{...e,options:t,loading:a,onInputValueChange:i,showTrigger:!1,startAdornment:r.jsx($,{icon:"search",size:"medium","aria-label":"search icon"}),placeholder:"Search countries (async)...",locale:{noMatches:"No results found"},style:{width:"300px"}})},play:async({args:e,canvasElement:t})=>{const n=j(t),a=n.getByRole("combobox");await m.type(a,"Uni");const o=await f.findByRole("option",{name:/United States/i});await c(o).toBeInTheDocument(),await c(f.getByRole("option",{name:/United Kingdom/i})).toBeInTheDocument(),await c(e.onInputValueChange).toHaveBeenLastCalledWith("Uni"),await m.click(o),await c(e.onValueChange).toHaveBeenCalledWith("us"),await c(e.onInputValueChange).toHaveBeenLastCalledWith("United States"),await c(a).toHaveValue("United States");const i=n.getByLabelText("Clear");await m.click(i),await c(e.onInputValueChange).toHaveBeenLastCalledWith(""),await c(a).toHaveValue(""),await m.type(a,"zzz"),await f.findByText("No results found"),await c(f.queryByRole("option")).not.toBeInTheDocument(),await m.clear(a),await m.type(a,"an");const l=await f.findAllByRole("option");await c(l.length).toBeGreaterThanOrEqual(2),await c(f.getByRole("option",{name:/Canada/i})).toBeInTheDocument(),await c(f.getByRole("option",{name:/France/i})).toBeInTheDocument(),await m.type(a,"ad"),await f.findByRole("option",{name:/Canada/i}),await c(f.queryByRole("option",{name:/France/i})).not.toBeInTheDocument()}},ie={render:e=>{const[t,n]=y.useState([]),[a,o]=y.useState(!0);return y.useEffect(()=>{En().then(i=>{n(i),o(!1)})},[]),r.jsx(S,{...e,options:t,loading:a,placeholder:"Select a country...",style:{width:"300px"}})},play:async({args:e,canvasElement:t})=>{const n=j(t),a=n.getByRole("combobox"),o=n.getByRole("button",{name:/toggle dropdown/i});await m.click(o);const i=await f.findByRole("option",{name:/United States/i});await c(i).toBeInTheDocument(),await c(f.getByRole("option",{name:/Japan/i})).toBeInTheDocument(),await m.type(a,"Un"),await c(f.getByRole("option",{name:/United States/i})).toBeInTheDocument(),await c(f.getByRole("option",{name:/United Kingdom/i})).toBeInTheDocument(),await c(f.queryByRole("option",{name:/Japan/i})).not.toBeInTheDocument(),await m.click(f.getByRole("option",{name:/United States/i})),await c(e.onValueChange).toHaveBeenCalledWith("us")}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...te.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
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
}`,...ne.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ae.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
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
}`,...ie.parameters?.docs?.source}}};const aa=["Default","SearchMode","SearchWithIcon","AllVariants","States","AsyncSearch","AsyncOptions"];export{ne as AllVariants,ie as AsyncOptions,oe as AsyncSearch,Z as Default,ee as SearchMode,te as SearchWithIcon,ae as States,aa as __namedExportsOrder,na as default};
