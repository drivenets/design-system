import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-CroC55kG.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-DN2IqHsz.js";import{t as a}from"./compiler-runtime-xQ9EeSrc.js";import{i as o}from"./ds-icon.types-CVUHsF3S.js";import{t as s}from"./ds-icon-V0kjpT-_.js";import{t as c}from"./ds-typography-CaJrFNwF.js";import{t as l}from"./ds-typography-DDS5bKI_.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./switch-azqCLPkF.js";var g=t((()=>{h()})),_,v,y,b,x,S,C,w=t((()=>{_=`_root_1ou8t_1`,v=`_small_1ou8t_14`,y=`_iconCheck_1ou8t_44`,b=`_iconClose_1ou8t_47`,x=`_labelInfo_1ou8t_105`,S=`_icon_1ou8t_44`,C={root:_,small:v,iconCheck:y,iconClose:b,labelInfo:x,icon:S}})),T,E,D,O,k=t((()=>{T=a(),g(),E=e(i(),1),w(),s(),l(),D=r(),O=e=>{let t=(0,T.c)(48),n,r,i,a,s,l,h,g,_,v,y,b;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],s=t[5],l=t[6],h=t[7],g=t[8],_=t[9],v=t[10],y=t[11],b=t[12]):({ref:_,label:a,name:l,labelInfo:s,className:i,style:y,onChange:h,onValueChange:g,size:b,children:r,checked:n,...v}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=s,t[6]=l,t[7]=h,t[8]=g,t[9]=_,t[10]=v,t[11]=y,t[12]=b);let x;t[13]===y?x=t[14]:(x=y===void 0?{}:y,t[13]=y,t[14]=x);let S=x,w=(b===void 0?`default`:b)===`small`,O=w?`tiny`:`small`,k;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,E.default)(C.icon,C.iconCheck),t[15]=k):k=t[15];let A=k,j;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,E.default)(C.icon,C.iconClose),t[16]=j):j=t[16];let M=j,N;t[17]!==i||t[18]!==w?(N=(0,E.default)(C.root,{[C.small]:w},i),t[17]=i,t[18]=w,t[19]=N):N=t[19];let P=N,F;t[20]===g?F=t[21]:(F=e=>{g?.(e.checked)},t[20]=g,t[21]=F);let I=F,L=_,R;t[22]===O?R=t[23]:(R=(0,D.jsx)(o,{icon:`check`,size:O,className:A}),t[22]=O,t[23]=R);let z;t[24]===Symbol.for(`react.memo_cache_sentinel`)?(z=(0,D.jsx)(f,{}),t[24]=z):z=t[24];let B;t[25]===O?B=t[26]:(B=(0,D.jsx)(o,{icon:`close`,size:O,className:M}),t[25]=O,t[26]=B);let V;t[27]!==B||t[28]!==R?(V=(0,D.jsxs)(p,{children:[R,z,B]}),t[27]=B,t[28]=R,t[29]=V):V=t[29];let H;t[30]!==r||t[31]!==w||t[32]!==a||t[33]!==s?(H=a?(0,D.jsxs)(d,{children:[(0,D.jsx)(c,{variant:w?`body-xs-md`:`body-sm-md`,children:a}),!!s&&(0,D.jsx)(c,{variant:`body-xs-reg`,className:C.labelInfo,children:s})]}):r,t[30]=r,t[31]=w,t[32]=a,t[33]=s,t[34]=H):H=t[34];let U;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,D.jsx)(u,{}),t[35]=U):U=t[35];let W;return t[36]!==n||t[37]!==I||t[38]!==a||t[39]!==l||t[40]!==h||t[41]!==v||t[42]!==P||t[43]!==S||t[44]!==V||t[45]!==H||t[46]!==L?(W=(0,D.jsxs)(m,{ref:L,style:S,className:P,label:a,checked:n,name:l,onCheckedChange:I,onClick:h,...v,children:[V,H,U]}),t[36]=n,t[37]=I,t[38]=a,t[39]=l,t[40]=h,t[41]=v,t[42]=P,t[43]=S,t[44]=V,t[45]=H,t[46]=L,t[47]=W):W=t[47],W}})),A,j=t((()=>{A=[`default`,`small`]})),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;t((()=>{M=e(n(),1),k(),j(),N=r(),{expect:P,userEvent:F,waitFor:I,within:L}=__STORYBOOK_MODULE_TEST__,R={title:`Design System/Toggle`,component:O,parameters:{layout:`centered`},argTypes:{checked:{control:`boolean`,description:`Whether it's checked or not`},label:{control:`text`,description:`The label text to display next to the toggle`},labelInfo:{control:`text`,description:`The label info text to display below the label`},size:{control:`select`,options:A,description:`Size of the toggle`},disabled:{control:`boolean`,description:`Whether the toggle is disabled`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},onChange:{table:{disable:!0},control:!1},onValueChange:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},z=`Text for label`,B=`Text for info`,V={args:{label:z,labelInfo:B,className:`custom-toggle`},play:async({canvasElement:e})=>{let t=L(e),n=t.getByRole(`checkbox`,{name:/Text for label/});await P(n).toBeInTheDocument(),await P(n).not.toBeChecked(),await P(t.getByText(B)).toBeInTheDocument(),await F.click(n),await I(async()=>{await P(n).toBeChecked()})}},H={render:function(){let[e,t]=(0,M.useState)(!0);return(0,N.jsx)(O,{label:z,labelInfo:B,checked:e,onValueChange:t})},play:async({canvasElement:e})=>{let t=L(e).getByRole(`checkbox`,{name:/Text for label/});await P(t).toBeInTheDocument(),await P(t).toBeChecked(),await F.click(t),await P(t).not.toBeChecked()}},U={render:function(){return(0,N.jsx)(O,{label:z,labelInfo:B,size:`small`})}},W={args:{label:z,labelInfo:B,disabled:!0},play:async({canvasElement:e})=>{let t=L(e),n=t.getByRole(`checkbox`,{name:/Text for label/});await P(n).toBeInTheDocument(),await P(n).toBeDisabled(),await P(n).not.toBeChecked(),await P(t.getByText(B)).toBeInTheDocument(),await F.click(n,{pointerEventsCheck:0}),await P(n).not.toBeChecked(),await P(n).toBeDisabled()}},G={render:function(){return(0,N.jsx)(O,{size:`small`,children:(0,N.jsx)(`span`,{style:{color:`red`},children:`Custom label totally!`})})},args:{label:z,labelInfo:B,disabled:!0},play:async({canvasElement:e})=>{let t=L(e).getByRole(`checkbox`,{name:`Custom label totally!`});await P(t).toBeInTheDocument(),await P(t).not.toBeChecked(),await F.click(t),await I(async()=>{await P(t).toBeChecked()})}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(true);
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <DsToggle label={label} labelInfo={labelInfo} size="small" />;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K=[`Default`,`Controlled`,`Small`,`Disabled`,`ChildrenCustomLabels`]}))();export{G as ChildrenCustomLabels,H as Controlled,V as Default,W as Disabled,U as Small,K as __namedExportsOrder,R as default};