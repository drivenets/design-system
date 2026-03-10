import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as w}from"./iframe-DDCuL2kn.js";import{c as $}from"./index-h_0AxY3V.js";import{D as Y}from"./ds-icon-BGp7VcVe.js";import{D as J}from"./ds-typography-DQSprpBC.js";import{c as he}from"./create-split-props-u5h9OPvL.js";import{c as me,m as S,a as P,u as pe,b as ge}from"./use-locale-context-CNbZwcvx.js";import{u as ee}from"./use-field-context-D3JLn_zq.js";import{n as B,g as fe,K as G,i as be,C as ke,k as Ce,l as f,m as ye,o as ve,u as we,y as Te}from"./create-anatomy-CWlJjoFg.js";import{e as C,g as te,m as xe,c as Ee}from"./event-CBXSxTbR.js";import{v as Se}from"./visually-hidden-BShGFMbX.js";import{i as Pe,t as Ie}from"./index-DFMBogvc.js";import{d as De,s as Be,t as Re}from"./form-uoblBCaq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGxBTfmQ.js";import"./index-DEPaCNYk.js";import"./index-12BXFlkP.js";import"./index-6gYDP_Tj.js";function Ne(e){const{pointerNode:o,keyboardNode:t=o,onPress:n,onPressStart:a,onPressEnd:s,isValidKey:c=l=>l.key==="Enter"}=e;if(!o)return B;const h=fe(o);let T=B,d=B,b=B;const p=l=>({point:xe(l),event:l});function g(l){a?.(p(l))}function m(l){s?.(p(l))}const x=C(o,"pointerdown",l=>{d();const M=C(h,"pointerup",k=>{const A=te(k);ke(o,A)?n?.(p(k)):s?.(p(k))},{passive:!n,once:!0}),z=C(h,"pointercancel",m,{passive:!s,once:!0});d=G(M,z),be(t)&&l.pointerType==="mouse"&&l.preventDefault(),g(l)},{passive:!a}),O=C(t,"focus",K);T=G(x,O);function K(){const l=k=>{if(!c(k))return;const A=de=>{if(!c(de))return;const ue=new h.PointerEvent("pointerup"),U=p(ue);n?.(U),s?.(U)};d(),d=C(t,"keyup",A);const ie=new h.PointerEvent("pointerdown");g(ie)},W=()=>{const k=new h.PointerEvent("pointercancel");m(k)},M=C(t,"keydown",l),z=C(t,"blur",W);b=G(M,z)}return()=>{T(),d(),b()}}const[_e,F]=me({name:"SwitchContext",hookName:"useSwitchContext",providerName:"<SwitchProvider />"}),oe=w.forwardRef((e,o)=>{const t=F(),n=S(t.getControlProps(),e);return r.jsx(P.span,{...n,ref:o})});oe.displayName="SwitchControl";const ne=w.forwardRef((e,o)=>{const t=F(),n=S(t.getHiddenInputProps(),e),a=ee();return r.jsx(P.input,{"aria-describedby":a?.ariaDescribedby,...n,ref:o})});ne.displayName="SwitchHiddenInput";const ae=w.forwardRef((e,o)=>{const t=F(),n=S(t.getLabelProps(),e);return r.jsx(P.span,{...n,ref:o})});ae.displayName="SwitchLabel";var Le=Ce("switch").parts("root","label","control","thumb"),R=Le.build(),se=e=>e.ids?.root??`switch:${e.id}`,Q=e=>e.ids?.label??`switch:${e.id}:label`,Ve=e=>e.ids?.thumb??`switch:${e.id}:thumb`,je=e=>e.ids?.control??`switch:${e.id}:control`,X=e=>e.ids?.hiddenInput??`switch:${e.id}:input`,Fe=e=>e.getById(se(e)),E=e=>e.getById(X(e));function qe(e,o){const{context:t,send:n,prop:a,scope:s}=e,c=!!a("disabled"),h=!!a("readOnly"),T=!!a("required"),d=!!t.get("checked"),b=!c&&t.get("focused"),p=!c&&t.get("focusVisible"),g=!c&&t.get("active"),m={"data-active":f(g),"data-focus":f(b),"data-focus-visible":f(p),"data-readonly":f(h),"data-hover":f(t.get("hovered")),"data-disabled":f(c),"data-state":d?"checked":"unchecked","data-invalid":f(a("invalid")),"data-required":f(T)};return{checked:d,disabled:c,focused:b,setChecked(u){n({type:"CHECKED.SET",checked:u,isTrusted:!1})},toggleChecked(){n({type:"CHECKED.TOGGLE",checked:d,isTrusted:!1})},getRootProps(){return o.label({...R.root.attrs,...m,dir:a("dir"),id:se(s),htmlFor:X(s),onPointerMove(){c||n({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){c||n({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(u){if(c)return;te(u)===E(s)&&u.stopPropagation(),Ee()&&E(s)?.focus()}})},getLabelProps(){return o.element({...R.label.attrs,...m,dir:a("dir"),id:Q(s)})},getThumbProps(){return o.element({...R.thumb.attrs,...m,dir:a("dir"),id:Ve(s),"aria-hidden":!0})},getControlProps(){return o.element({...R.control.attrs,...m,dir:a("dir"),id:je(s),"aria-hidden":!0})},getHiddenInputProps(){return o.input({id:X(s),type:"checkbox",required:a("required"),defaultChecked:d,disabled:c,"aria-labelledby":Q(s),"aria-invalid":a("invalid"),name:a("name"),form:a("form"),value:a("value"),style:Se,onFocus(){const u=Pe();n({type:"CONTEXT.SET",context:{focused:!0,focusVisible:u}})},onBlur(){n({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(u){if(h){u.preventDefault();return}const x=u.currentTarget.checked;n({type:"CHECKED.SET",checked:x,isTrusted:!0})}})}}}var{not:Z}=ve(),He=ye({props({props:e}){return{defaultChecked:!1,label:"switch",value:"on",...e}},initialState(){return"ready"},context({prop:e,bindable:o}){return{checked:o(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(t){e("onCheckedChange")?.({checked:t})}})),fieldsetDisabled:o(()=>({defaultValue:!1})),focusVisible:o(()=>({defaultValue:!1})),active:o(()=>({defaultValue:!1})),focused:o(()=>({defaultValue:!1})),hovered:o(()=>({defaultValue:!1}))}},computed:{isDisabled:({context:e,prop:o})=>o("disabled")||e.get("fieldsetDisabled")},watch({track:e,prop:o,context:t,action:n}){e([()=>o("disabled")],()=>{n(["removeFocusIfNeeded"])}),e([()=>t.get("checked")],()=>{n(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:Z("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:Z("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({computed:e,scope:o,context:t}){if(!e("isDisabled"))return Ne({pointerNode:Fe(o),keyboardNode:E(o),isValidKey:n=>n.key===" ",onPress:()=>t.set("active",!1),onPressStart:()=>t.set("active",!0),onPressEnd:()=>t.set("active",!1)})},trackFocusVisible({computed:e,scope:o}){if(!e("isDisabled"))return Ie({root:o.getRootNode()})},trackFormControlState({context:e,send:o,scope:t}){return Re(E(t),{onFieldsetDisabledChange(n){e.set("fieldsetDisabled",n)},onFormReset(){const n=e.initial("checked");o({type:"CHECKED.SET",checked:!!n,src:"form-reset"})}})}},actions:{setContext({context:e,event:o}){for(const t in o.context)e.set(t,o.context[t])},syncInputElement({context:e,scope:o}){const t=E(o);t&&Be(t,!!e.get("checked"))},removeFocusIfNeeded({context:e,prop:o}){o("disabled")&&e.set("focused",!1)},setChecked({context:e,event:o}){e.set("checked",o.checked)},toggleChecked({context:e}){e.set("checked",!e.get("checked"))},dispatchChangeEvent({context:e,scope:o}){queueMicrotask(()=>{const t=E(o);De(t,{checked:e.get("checked")})})}}}});const Oe=e=>{const o=w.useId(),{getRootNode:t}=pe(),{dir:n}=ge(),a=ee(),s={id:o,ids:{label:a?.ids.label,hiddenInput:a?.ids.control},dir:n,disabled:a?.disabled,readOnly:a?.readOnly,invalid:a?.invalid,required:a?.required,getRootNode:t,...e},c=we(He,s);return qe(c,Te)},Ke=he(),re=w.forwardRef((e,o)=>{const[t,n]=Ke(e,["checked","defaultChecked","disabled","form","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]),a=Oe(t),s=S(a.getRootProps(),n);return r.jsx(_e,{value:a,children:r.jsx(P.label,{...s,ref:o})})});re.displayName="SwitchRoot";const ce=w.forwardRef((e,o)=>{const t=F(),n=S(t.getThumbProps(),e);return r.jsx(P.span,{...n,ref:o})});ce.displayName="SwitchThumb";const Me="_root_1ou8t_1",ze="_small_1ou8t_14",Ae="_iconCheck_1ou8t_44",$e="_iconClose_1ou8t_47",Ge="_labelInfo_1ou8t_105",Xe="_icon_1ou8t_44",y={root:Me,small:ze,iconCheck:Ae,iconClose:$e,labelInfo:Ge,icon:Xe},I=({ref:e,label:o,name:t,labelInfo:n,className:a,style:s={},onChange:c,onValueChange:h,size:T="default",children:d,checked:b,...p})=>{const g=T==="small",m=g?"tiny":"small",u=$(y.icon,y.iconCheck),x=$(y.icon,y.iconClose),O=$(y.root,{[y.small]:g},a),K=l=>{h?.(l.checked)};return r.jsxs(re,{ref:e,style:s,className:O,label:o,checked:b,name:t,onCheckedChange:K,onClick:c,...p,children:[r.jsxs(oe,{children:[r.jsx(Y,{icon:"check",size:m,className:u}),r.jsx(ce,{}),r.jsx(Y,{icon:"close",size:m,className:x})]}),o?r.jsxs(ae,{children:[r.jsx(J,{variant:g?"body-xs-md":"body-sm-md",children:o}),!!n&&r.jsx(J,{variant:"body-xs-reg",className:y.labelInfo,children:n})]}):d,r.jsx(ne,{})]})};I.__docgenInfo={description:"Design system Toggle component",methods:[],displayName:"DsToggle",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLElement"}],raw:"Ref<HTMLElement>"},description:"Forwarded ref for the toggle label element"},name:{required:!1,tsType:{name:"string"},description:"Optional form field name"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional styles to apply to the component",defaultValue:{value:"{}",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called on user interaction.\nNote: prefer `onValueChange` for checked-state changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Event handler called when the checked state changes"},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof toggleSizes)[number]"},description:"Visual size of the toggle",defaultValue:{value:"'default'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Controlled checked state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is disabled"}}};const We=["default","small"],{expect:i,userEvent:q,waitFor:le,within:H}=__STORYBOOK_MODULE_TEST__,mt={title:"Design System/Toggle",component:I,parameters:{layout:"centered"},argTypes:{checked:{control:"boolean",description:"Whether it's checked or not"},label:{control:"text",description:"The label text to display next to the toggle"},labelInfo:{control:"text",description:"The label info text to display below the label"},size:{control:"select",options:We,description:"Size of the toggle"},disabled:{control:"boolean",description:"Whether the toggle is disabled"},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},onChange:{table:{disable:!0},control:!1},onValueChange:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},D="Text for label",v="Text for info",N={args:{label:D,labelInfo:v,className:"custom-toggle"},play:async({canvasElement:e})=>{const o=H(e),t=o.getByRole("checkbox",{name:/Text for label/});await i(t).toBeInTheDocument(),await i(t).not.toBeChecked(),await i(o.getByText(v)).toBeInTheDocument(),await q.click(t),await le(async()=>{await i(t).toBeChecked()})}},_={render:function(){const[o,t]=w.useState(!0);return r.jsx(I,{label:D,labelInfo:v,checked:o,onValueChange:t})},play:async({canvasElement:e})=>{const t=H(e).getByRole("checkbox",{name:/Text for label/});await i(t).toBeInTheDocument(),await i(t).toBeChecked(),await q.click(t),await i(t).not.toBeChecked()}},L={render:function(){return r.jsx(I,{label:D,labelInfo:v,size:"small"})}},V={args:{label:D,labelInfo:v,disabled:!0},play:async({canvasElement:e})=>{const o=H(e),t=o.getByRole("checkbox",{name:/Text for label/});await i(t).toBeInTheDocument(),await i(t).toBeDisabled(),await i(t).not.toBeChecked(),await i(o.getByText(v)).toBeInTheDocument(),await q.click(t,{pointerEventsCheck:0}),await i(t).not.toBeChecked(),await i(t).toBeDisabled()}},j={render:function(){return r.jsx(I,{size:"small",children:r.jsx("span",{style:{color:"red"},children:"Custom label totally!"})})},args:{label:D,labelInfo:v,disabled:!0},play:async({canvasElement:e})=>{const t=H(e).getByRole("checkbox",{name:"Custom label totally!"});await i(t).toBeInTheDocument(),await i(t).not.toBeChecked(),await q.click(t),await le(async()=>{await i(t).toBeChecked()})}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <DsToggle label={label} labelInfo={labelInfo} size="small" />;
  }
}`,...L.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const pt=["Default","Controlled","Small","Disabled","ChildrenCustomLabels"];export{j as ChildrenCustomLabels,_ as Controlled,N as Default,V as Disabled,L as Small,pt as __namedExportsOrder,mt as default};
