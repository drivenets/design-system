import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-B9RspOKu.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{t as i}from"./classnames-Ce489xFf.js";import{i as a}from"./ds-icon.types-DQ8-N5BP.js";import{t as o}from"./ds-icon-BuPOExGD.js";import{t as s}from"./ds-typography-CeoK6wAc.js";import{t as c}from"./ds-typography-JyFwGtGS.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./switch-CsJWffo3.js";var h=t((()=>{m()})),g,_,v,y,b,x,S,C=t((()=>{g=`_root_1ou8t_1`,_=`_small_1ou8t_14`,v=`_iconCheck_1ou8t_44`,y=`_iconClose_1ou8t_47`,b=`_labelInfo_1ou8t_105`,x=`_icon_1ou8t_44`,S={root:g,small:_,iconCheck:v,iconClose:y,labelInfo:b,icon:x}})),w,T,E,D=t((()=>{h(),w=e(i(),1),C(),o(),c(),T=r(),E=({ref:e,label:t,name:n,labelInfo:r,className:i,style:o={},onChange:c,onValueChange:m,size:h=`default`,children:g,checked:_,...v})=>{let y=h===`small`,b=y?`tiny`:`small`,x=(0,w.default)(S.icon,S.iconCheck),C=(0,w.default)(S.icon,S.iconClose),E=(0,w.default)(S.root,{[S.small]:y},i);return(0,T.jsxs)(p,{ref:e,style:o,className:E,label:t,checked:_,name:n,onCheckedChange:e=>{m?.(e.checked)},onClick:c,...v,children:[(0,T.jsxs)(f,{children:[(0,T.jsx)(a,{icon:`check`,size:b,className:x}),(0,T.jsx)(d,{}),(0,T.jsx)(a,{icon:`close`,size:b,className:C})]}),t?(0,T.jsxs)(u,{children:[(0,T.jsx)(s,{variant:y?`body-xs-md`:`body-sm-md`,children:t}),!!r&&(0,T.jsx)(s,{variant:`body-xs-reg`,className:S.labelInfo,children:r})]}):g,(0,T.jsx)(l,{})]})},E.__docgenInfo={description:`Design system Toggle component`,methods:[],displayName:`DsToggle`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:`Forwarded ref for the toggle label element`},name:{required:!1,tsType:{name:`string`},description:`Optional form field name`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names`},style:{required:!1,tsType:{name:`CSSProperties`},description:`Additional styles to apply to the component`,defaultValue:{value:`{}`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: MouseEvent<HTMLElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLElement`}],raw:`MouseEvent<HTMLElement>`},name:`event`}],return:{name:`void`}}},description:"Event handler called on user interaction.\nNote: prefer `onValueChange` for checked-state changes."},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:`Event handler called when the checked state changes`},size:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof toggleSizes)[number]`},description:`Visual size of the toggle`,defaultValue:{value:`'default'`,computed:!1}},checked:{required:!1,tsType:{name:`boolean`},description:`Controlled checked state`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the toggle is disabled`}}}})),O,k=t((()=>{O=[`default`,`small`]})),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;t((()=>{A=e(n(),1),D(),k(),j=r(),{expect:M,userEvent:N,waitFor:P,within:F}=__STORYBOOK_MODULE_TEST__,I={title:`Design System/Toggle`,component:E,parameters:{layout:`centered`},argTypes:{checked:{control:`boolean`,description:`Whether it's checked or not`},label:{control:`text`,description:`The label text to display next to the toggle`},labelInfo:{control:`text`,description:`The label info text to display below the label`},size:{control:`select`,options:O,description:`Size of the toggle`},disabled:{control:`boolean`,description:`Whether the toggle is disabled`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},onChange:{table:{disable:!0},control:!1},onValueChange:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},L=`Text for label`,R=`Text for info`,z={args:{label:L,labelInfo:R,className:`custom-toggle`},play:async({canvasElement:e})=>{let t=F(e),n=t.getByRole(`checkbox`,{name:/Text for label/});await M(n).toBeInTheDocument(),await M(n).not.toBeChecked(),await M(t.getByText(R)).toBeInTheDocument(),await N.click(n),await P(async()=>{await M(n).toBeChecked()})}},B={render:function(){let[e,t]=(0,A.useState)(!0);return(0,j.jsx)(E,{label:L,labelInfo:R,checked:e,onValueChange:t})},play:async({canvasElement:e})=>{let t=F(e).getByRole(`checkbox`,{name:/Text for label/});await M(t).toBeInTheDocument(),await M(t).toBeChecked(),await N.click(t),await M(t).not.toBeChecked()}},V={render:function(){return(0,j.jsx)(E,{label:L,labelInfo:R,size:`small`})}},H={args:{label:L,labelInfo:R,disabled:!0},play:async({canvasElement:e})=>{let t=F(e),n=t.getByRole(`checkbox`,{name:/Text for label/});await M(n).toBeInTheDocument(),await M(n).toBeDisabled(),await M(n).not.toBeChecked(),await M(t.getByText(R)).toBeInTheDocument(),await N.click(n,{pointerEventsCheck:0}),await M(n).not.toBeChecked(),await M(n).toBeDisabled()}},U={render:function(){return(0,j.jsx)(E,{size:`small`,children:(0,j.jsx)(`span`,{style:{color:`red`},children:`Custom label totally!`})})},args:{label:L,labelInfo:R,disabled:!0},play:async({canvasElement:e})=>{let t=F(e).getByRole(`checkbox`,{name:`Custom label totally!`});await M(t).toBeInTheDocument(),await M(t).not.toBeChecked(),await N.click(t),await P(async()=>{await M(t).toBeChecked()})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <DsToggle label={label} labelInfo={labelInfo} size="small" />;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Controlled`,`Small`,`Disabled`,`ChildrenCustomLabels`]}))();export{U as ChildrenCustomLabels,B as Controlled,z as Default,H as Disabled,V as Small,W as __namedExportsOrder,I as default};