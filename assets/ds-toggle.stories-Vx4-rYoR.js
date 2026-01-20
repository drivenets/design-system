import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-CawOWBk2.js";import{c as O}from"./index-D5F6wOnQ.js";import{D as F}from"./ds-icon-B5OOc0_-.js";import{D as H}from"./ds-typography-BUQyJK_s.js";import{c as Z}from"./create-split-props-u5h9OPvL.js";import{c as ee,a as C,u as te,b as ae}from"./use-locale-context-BVAtCfJX.js";import{O as k,l as d,v as oe,d as ne,w as se,m as ce,p as re,e as le,f as ie,h as de,aw as ue,t as he,ax as me,M as ge,R as pe}from"./index-tySxGykU.js";import{i as fe,t as be}from"./index-CuoYKess.js";import{u as z}from"./use-field-context-D7oDnDX4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhSz79bo.js";import"./index-DYHmtHLW.js";import"./index-CyED3uAL.js";import"./index-olW93a_3.js";const[Ce,R]=ee({name:"SwitchContext",hookName:"useSwitchContext",providerName:"<SwitchProvider />"}),K=g.forwardRef((e,a)=>{const t=R(),o=k(t.getControlProps(),e);return s.jsx(C.span,{...o,ref:a})});K.displayName="SwitchControl";const $=g.forwardRef((e,a)=>{const t=R(),o=k(t.getHiddenInputProps(),e),n=z();return s.jsx(C.input,{"aria-describedby":n?.ariaDescribedby,...o,ref:a})});$.displayName="SwitchHiddenInput";const A=g.forwardRef((e,a)=>{const t=R(),o=k(t.getLabelProps(),e);return s.jsx(C.span,{...o,ref:a})});A.displayName="SwitchLabel";var ke=ne("switch").parts("root","label","control","thumb"),E=ke.build(),G=e=>e.ids?.root??`switch:${e.id}`,L=e=>e.ids?.label??`switch:${e.id}:label`,ye=e=>e.ids?.thumb??`switch:${e.id}:thumb`,ve=e=>e.ids?.control??`switch:${e.id}:control`,q=e=>e.ids?.hiddenInput??`switch:${e.id}:input`,we=e=>e.getById(G(e)),f=e=>e.getById(q(e));function Te(e,a){const{context:t,send:o,prop:n,scope:r}=e,l=!!n("disabled"),w=!!n("readOnly"),V=!!n("required"),p=!!t.get("checked"),T=!l&&t.get("focused"),j=!l&&t.get("focusVisible"),b=!l&&t.get("active"),u={"data-active":d(b),"data-focus":d(T),"data-focus-visible":d(j),"data-readonly":d(w),"data-hover":d(t.get("hovered")),"data-disabled":d(l),"data-state":p?"checked":"unchecked","data-invalid":d(n("invalid")),"data-required":d(V)};return{checked:p,disabled:l,focused:T,setChecked(i){o({type:"CHECKED.SET",checked:i,isTrusted:!1})},toggleChecked(){o({type:"CHECKED.TOGGLE",checked:p,isTrusted:!1})},getRootProps(){return a.label({...E.root.attrs,...u,dir:n("dir"),id:G(r),htmlFor:q(r),onPointerMove(){l||o({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){l||o({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(i){if(l)return;se(i)===f(r)&&i.stopPropagation(),ce()&&f(r)?.focus()}})},getLabelProps(){return a.element({...E.label.attrs,...u,dir:n("dir"),id:L(r)})},getThumbProps(){return a.element({...E.thumb.attrs,...u,dir:n("dir"),id:ye(r),"aria-hidden":!0})},getControlProps(){return a.element({...E.control.attrs,...u,dir:n("dir"),id:ve(r),"aria-hidden":!0})},getHiddenInputProps(){return a.input({id:q(r),type:"checkbox",required:n("required"),defaultChecked:p,disabled:l,"aria-labelledby":L(r),"aria-invalid":n("invalid"),name:n("name"),form:n("form"),value:n("value"),style:oe,onFocus(){const i=fe();o({type:"CONTEXT.SET",context:{focused:!0,focusVisible:i}})},onBlur(){o({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(i){if(w){i.preventDefault();return}const x=i.currentTarget.checked;o({type:"CHECKED.SET",checked:x,isTrusted:!0})}})}}}var{not:M}=ie(),xe=le({props({props:e}){return{defaultChecked:!1,label:"switch",value:"on",...e}},initialState(){return"ready"},context({prop:e,bindable:a}){return{checked:a(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(t){e("onCheckedChange")?.({checked:t})}})),fieldsetDisabled:a(()=>({defaultValue:!1})),focusVisible:a(()=>({defaultValue:!1})),active:a(()=>({defaultValue:!1})),focused:a(()=>({defaultValue:!1})),hovered:a(()=>({defaultValue:!1}))}},computed:{isDisabled:({context:e,prop:a})=>a("disabled")||e.get("fieldsetDisabled")},watch({track:e,prop:a,context:t,action:o}){e([()=>a("disabled")],()=>{o(["removeFocusIfNeeded"])}),e([()=>t.get("checked")],()=>{o(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:M("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:M("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({computed:e,scope:a,context:t}){if(!e("isDisabled"))return me({pointerNode:we(a),keyboardNode:f(a),isValidKey:o=>o.key===" ",onPress:()=>t.set("active",!1),onPressStart:()=>t.set("active",!0),onPressEnd:()=>t.set("active",!1)})},trackFocusVisible({computed:e,scope:a}){if(!e("isDisabled"))return be({root:a.getRootNode()})},trackFormControlState({context:e,send:a,scope:t}){return he(f(t),{onFieldsetDisabledChange(o){e.set("fieldsetDisabled",o)},onFormReset(){const o=e.initial("checked");a({type:"CHECKED.SET",checked:!!o,src:"form-reset"})}})}},actions:{setContext({context:e,event:a}){for(const t in a.context)e.set(t,a.context[t])},syncInputElement({context:e,scope:a}){const t=f(a);t&&ue(t,!!e.get("checked"))},removeFocusIfNeeded({context:e,prop:a}){a("disabled")&&e.set("focused",!1)},setChecked({context:e,event:a}){e.set("checked",a.checked)},toggleChecked({context:e}){e.set("checked",!e.get("checked"))},dispatchChangeEvent({context:e,scope:a}){const t=f(a);de(t,{checked:e.get("checked")})}}}});re()(["checked","defaultChecked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]);const Ee=e=>{const a=g.useId(),{getRootNode:t}=te(),{dir:o}=ae(),n=z(),r={id:a,ids:{label:n?.ids.label,hiddenInput:n?.ids.control},dir:o,disabled:n?.disabled,readOnly:n?.readOnly,invalid:n?.invalid,required:n?.required,getRootNode:t,...e},l=ge(xe,r);return Te(l,pe)},Se=Z(),X=g.forwardRef((e,a)=>{const[t,o]=Se(e,["checked","defaultChecked","disabled","form","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]),n=Ee(t),r=k(n.getRootProps(),o);return s.jsx(Ce,{value:n,children:s.jsx(C.label,{...r,ref:a})})});X.displayName="SwitchRoot";const W=g.forwardRef((e,a)=>{const t=R(),o=k(t.getThumbProps(),e);return s.jsx(C.span,{...o,ref:a})});W.displayName="SwitchThumb";const Ie="_root_1ou8t_1",De="_small_1ou8t_14",Be="_iconCheck_1ou8t_44",Pe="_iconClose_1ou8t_47",Re="_labelInfo_1ou8t_105",Ne="_icon_1ou8t_44",h={root:Ie,small:De,iconCheck:Be,iconClose:Pe,labelInfo:Re,icon:Ne},y=({ref:e,label:a,name:t,labelInfo:o,className:n,style:r={},onChange:l,onValueChange:w,size:V="default",children:p,checked:T,...j})=>{const b=V==="small",u=b?"tiny":"small",i=O(h.icon,h.iconCheck),x=O(h.icon,h.iconClose),Y=O(h.root,{[h.small]:b},n),J=Q=>{w?.(Q.checked)};return s.jsxs(X,{ref:e,style:r,className:Y,label:a,checked:T,name:t,onCheckedChange:J,onClick:l,...j,children:[s.jsxs(K,{children:[s.jsx(F,{icon:"check",size:u,className:i}),s.jsx(W,{}),s.jsx(F,{icon:"close",size:u,className:x})]}),a?s.jsxs(A,{children:[s.jsx(H,{variant:b?"body-xs-md":"body-sm-md",children:a}),!!o&&s.jsx(H,{variant:"body-xs-reg",className:h.labelInfo,children:o})]}):p,s.jsx($,{})]})};y.__docgenInfo={description:"Design system Toggle component",methods:[],displayName:"DsToggle",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLElement"}],raw:"Ref<HTMLElement>"},description:"Forwarded ref for the toggle label element"},name:{required:!1,tsType:{name:"string"},description:"Optional form field name"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional styles to apply to the component",defaultValue:{value:"{}",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called on user interaction.\nNote: prefer `onValueChange` for checked-state changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Event handler called when the checked state changes"},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof toggleSizes)[number]"},description:"Visual size of the toggle",defaultValue:{value:"'default'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Controlled checked state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is disabled"}}};const _e=["default","small"],{expect:c,userEvent:N,waitFor:U,within:_}=__STORYBOOK_MODULE_TEST__,Ue={title:"Design System/Toggle",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Whether it's checked or not"},label:{control:"text",description:"The label text to display next to the toggle"},labelInfo:{control:"text",description:"The label info text to display below the label"},size:{control:"select",options:_e,description:"Size of the toggle"},disabled:{control:"boolean",description:"Whether the toggle is disabled"},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},onChange:{table:{disable:!0},control:!1},onValueChange:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},v="Text for label",m="Text for info",S={args:{label:v,labelInfo:m,className:"custom-toggle"},play:async({canvasElement:e})=>{const a=_(e),t=a.getByRole("checkbox",{name:/Text for label/});await c(t).toBeInTheDocument(),await c(t).not.toBeChecked(),await c(a.getByText(m)).toBeInTheDocument(),await N.click(t),await U(async()=>{await c(t).toBeChecked()})}},I={render:function(){const[a,t]=g.useState(!0);return s.jsx(y,{label:v,labelInfo:m,checked:a,onValueChange:t})},play:async({canvasElement:e})=>{const t=_(e).getByRole("checkbox",{name:/Text for label/});await c(t).toBeInTheDocument(),await c(t).toBeChecked(),await N.click(t),await c(t).not.toBeChecked()}},D={render:function(){return s.jsx(y,{label:v,labelInfo:m,size:"small"})}},B={args:{label:v,labelInfo:m,disabled:!0},play:async({canvasElement:e})=>{const a=_(e),t=a.getByRole("checkbox",{name:/Text for label/});await c(t).toBeInTheDocument(),await c(t).toBeDisabled(),await c(t).not.toBeChecked(),await c(a.getByText(m)).toBeInTheDocument(),await N.click(t,{pointerEventsCheck:0}),await c(t).not.toBeChecked(),await c(t).toBeDisabled()}},P={render:function(){return s.jsx(y,{size:"small",children:s.jsx("span",{style:{color:"red"},children:"Custom label totally!"})})},args:{label:v,labelInfo:m,disabled:!0},play:async({canvasElement:e})=>{const t=_(e).getByRole("checkbox",{name:"Custom label totally!"});await c(t).toBeInTheDocument(),await c(t).not.toBeChecked(),await N.click(t),await U(async()=>{await c(t).toBeChecked()})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    className: 'custom-toggle'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox', {
      name: /Text for label/
    });
    await expect(toggle).toBeInTheDocument();
    await expect(toggle).not.toBeChecked();
    await expect(canvas.getByText(labelInfo)).toBeInTheDocument();
    await userEvent.click(toggle);
    await waitFor(async () => {
      await expect(toggle).toBeChecked();
    });
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState<boolean>(true);
    return <DsToggle label={label} labelInfo={labelInfo} checked={checked} onValueChange={setChecked} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox', {
      name: /Text for label/
    });
    await expect(toggle).toBeInTheDocument();

    // Starts checked (controlled via props)
    await expect(toggle).toBeChecked();
    await userEvent.click(toggle);
    await expect(toggle).not.toBeChecked();
  }
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <DsToggle label={label} labelInfo={labelInfo} size="small" />;
  }
}`,...D.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox', {
      name: /Text for label/
    });
    await expect(toggle).toBeInTheDocument();

    // Disabled checkbox
    await expect(toggle).toBeDisabled();
    await expect(toggle).not.toBeChecked();
    await expect(canvas.getByText(labelInfo)).toBeInTheDocument();
    await userEvent.click(toggle, {
      pointerEventsCheck: 0
    });

    // State should remain unchanged
    await expect(toggle).not.toBeChecked();
    await expect(toggle).toBeDisabled();
  }
}`,...B.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <DsToggle size="small">
                <span style={{
        color: 'red'
      }}>
                    Custom label totally!
                </span>
            </DsToggle>;
  },
  args: {
    label,
    labelInfo,
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox', {
      name: 'Custom label totally!'
    });
    await expect(toggle).toBeInTheDocument();
    await expect(toggle).not.toBeChecked();
    await userEvent.click(toggle);
    await waitFor(async () => {
      await expect(toggle).toBeChecked();
    });
  }
}`,...P.parameters?.docs?.source}}};const Ye=["Default","Controlled","Small","Disabled","ChildrenCustomLabels"];export{P as ChildrenCustomLabels,I as Controlled,S as Default,B as Disabled,D as Small,Ye as __namedExportsOrder,Ue as default};
