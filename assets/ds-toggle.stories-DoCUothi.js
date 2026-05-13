import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BWaP-iJi.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-DN2IqHsz.js";import{t as a}from"./compiler-runtime-DvQtijjt.js";import{t as o}from"./ds-icon-BKn6Eyeq.js";import{t as s}from"./ds-icon-B_JRRp29.js";import{c,s as l}from"./dist-BQfoKR7h.js";import{n as u,t as d}from"./ds-typography-D3d4Ff_4.js";var f=t((()=>{l()})),p,m,h,g,_,v,y,b=t((()=>{p=`_root_1vu2r_1`,m=`_small_1vu2r_14`,h=`_iconCheck_1vu2r_44`,g=`_iconClose_1vu2r_47`,_=`_labelInfo_1vu2r_105`,v=`_icon_1vu2r_44`,y={root:p,small:m,iconCheck:h,iconClose:g,labelInfo:_,icon:v}})),x,S,C,w,T=t((()=>{x=a(),f(),S=e(i(),1),b(),s(),d(),C=r(),w=e=>{let t=(0,x.c)(48),n,r,i,a,s,l,d,f,p,m,h,g;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],s=t[5],l=t[6],d=t[7],f=t[8],p=t[9],m=t[10],h=t[11],g=t[12]):({ref:p,label:a,name:l,labelInfo:s,className:i,style:h,onChange:d,onValueChange:f,size:g,children:r,checked:n,...m}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=s,t[6]=l,t[7]=d,t[8]=f,t[9]=p,t[10]=m,t[11]=h,t[12]=g);let _;t[13]===h?_=t[14]:(_=h===void 0?{}:h,t[13]=h,t[14]=_);let v=_,b=(g===void 0?`default`:g)===`small`,w=b?`tiny`:`small`,T;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(T=(0,S.default)(y.icon,y.iconCheck),t[15]=T):T=t[15];let E=T,D;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,S.default)(y.icon,y.iconClose),t[16]=D):D=t[16];let O=D,k;t[17]!==i||t[18]!==b?(k=(0,S.default)(y.root,{[y.small]:b},i),t[17]=i,t[18]=b,t[19]=k):k=t[19];let A=k,j;t[20]===f?j=t[21]:(j=e=>{f?.(e.checked)},t[20]=f,t[21]=j);let M=j,N=p,P;t[22]===w?P=t[23]:(P=(0,C.jsx)(o,{icon:`check`,size:w,className:E}),t[22]=w,t[23]=P);let F;t[24]===Symbol.for(`react.memo_cache_sentinel`)?(F=(0,C.jsx)(c.Thumb,{}),t[24]=F):F=t[24];let I;t[25]===w?I=t[26]:(I=(0,C.jsx)(o,{icon:`close`,size:w,className:O}),t[25]=w,t[26]=I);let L;t[27]!==I||t[28]!==P?(L=(0,C.jsxs)(c.Control,{children:[P,F,I]}),t[27]=I,t[28]=P,t[29]=L):L=t[29];let R;t[30]!==r||t[31]!==b||t[32]!==a||t[33]!==s?(R=a?(0,C.jsxs)(c.Label,{children:[(0,C.jsx)(u,{variant:b?`body-xs-md`:`body-sm-md`,children:a}),!!s&&(0,C.jsx)(u,{variant:`body-xs-reg`,className:y.labelInfo,children:s})]}):r,t[30]=r,t[31]=b,t[32]=a,t[33]=s,t[34]=R):R=t[34];let z;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(z=(0,C.jsx)(c.HiddenInput,{}),t[35]=z):z=t[35];let B;return t[36]!==n||t[37]!==M||t[38]!==a||t[39]!==l||t[40]!==d||t[41]!==m||t[42]!==A||t[43]!==v||t[44]!==L||t[45]!==R||t[46]!==N?(B=(0,C.jsxs)(c.Root,{ref:N,style:v,className:A,label:a,checked:n,name:l,onCheckedChange:M,onClick:d,...m,children:[L,R,z]}),t[36]=n,t[37]=M,t[38]=a,t[39]=l,t[40]=d,t[41]=m,t[42]=A,t[43]=v,t[44]=L,t[45]=R,t[46]=N,t[47]=B):B=t[47],B}})),E,D=t((()=>{E=[`default`,`small`]})),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;t((()=>{O=e(n(),1),T(),D(),k=r(),{expect:A,userEvent:j,waitFor:M,within:N}=__STORYBOOK_MODULE_TEST__,P={title:`Components/Toggle`,component:w,parameters:{layout:`centered`},argTypes:{checked:{control:`boolean`,description:`Whether it's checked or not`},label:{control:`text`,description:`The label text to display next to the toggle`},labelInfo:{control:`text`,description:`The label info text to display below the label`},size:{control:`select`,options:E,description:`Size of the toggle`},disabled:{control:`boolean`,description:`Whether the toggle is disabled`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},onChange:{table:{disable:!0},control:!1},onValueChange:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},F=`Text for label`,I=`Text for info`,L={args:{label:F,labelInfo:I,className:`custom-toggle`},play:async({canvasElement:e})=>{let t=N(e),n=t.getByRole(`checkbox`,{name:/Text for label/});await A(n).toBeInTheDocument(),await A(n).not.toBeChecked(),await A(t.getByText(I)).toBeInTheDocument(),await j.click(n),await M(async()=>{await A(n).toBeChecked()})}},R={render:function(){let[e,t]=(0,O.useState)(!0);return(0,k.jsx)(w,{label:F,labelInfo:I,checked:e,onValueChange:t})},play:async({canvasElement:e})=>{let t=N(e).getByRole(`checkbox`,{name:/Text for label/});await A(t).toBeInTheDocument(),await A(t).toBeChecked(),await j.click(t),await A(t).not.toBeChecked()}},z={render:function(){return(0,k.jsx)(w,{label:F,labelInfo:I,size:`small`})}},B={args:{label:F,labelInfo:I,disabled:!0},play:async({canvasElement:e})=>{let t=N(e),n=t.getByRole(`checkbox`,{name:/Text for label/});await A(n).toBeInTheDocument(),await A(n).toBeDisabled(),await A(n).not.toBeChecked(),await A(t.getByText(I)).toBeInTheDocument(),await j.click(n,{pointerEventsCheck:0}),await A(n).not.toBeChecked(),await A(n).toBeDisabled()}},V={render:function(){return(0,k.jsx)(w,{size:`small`,children:(0,k.jsx)(`span`,{style:{color:`red`},children:`Custom label totally!`})})},args:{label:F,labelInfo:I,disabled:!0},play:async({canvasElement:e})=>{let t=N(e).getByRole(`checkbox`,{name:`Custom label totally!`});await A(t).toBeInTheDocument(),await A(t).not.toBeChecked(),await j.click(t),await M(async()=>{await A(t).toBeChecked()})}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <DsToggle label={label} labelInfo={labelInfo} size="small" />;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H=[`Default`,`Controlled`,`Small`,`Disabled`,`ChildrenCustomLabels`]}))();export{V as ChildrenCustomLabels,R as Controlled,L as Default,B as Disabled,z as Small,H as __namedExportsOrder,P as default};