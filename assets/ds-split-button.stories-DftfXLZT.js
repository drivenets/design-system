import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-9lsRsqru.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-DN2IqHsz.js";import{t as a}from"./compiler-runtime-6e-raB3A.js";import{r as o,t as s}from"./responsive-BI1-es3a.js";import{n as c,t as l}from"./ds-button-v3-CXgximZn.js";import{t as u}from"./ds-select-CckDrI5m.js";import{t as d}from"./ds-select-Cxs9RoQk.js";var f,p,m,h,g,_,v,y=t((()=>{f=`_root_v6ly2_1`,p=`_actionButton_v6ly2_4`,m=`_select_v6ly2_20`,h=`_dividerAnchor_v6ly2_26`,g=`_dividerWrapper_v6ly2_30`,_=`_divider_v6ly2_26`,v={root:f,actionButton:p,select:m,dividerAnchor:h,dividerWrapper:g,divider:_}})),b,x,S,C,w,T=t((()=>{b=a(),x=e(i(),1),d(),y(),c(),S=r(),C=e=>{let t=(0,b.c)(33),{ref:n,className:r,style:i,size:a,disabled:o,slotProps:s}=e,c=a===void 0?`medium`:a,d,f,p;t[0]===s.button?(d=t[1],f=t[2],p=t[3]):({className:d,disabled:f,...p}=s.button,t[0]=s.button,t[1]=d,t[2]=f,t[3]=p);let m,h,g;t[4]===s.select?(m=t[5],h=t[6],g=t[7]):({className:m,disabled:h,...g}=s.select,t[4]=s.select,t[5]=m,t[6]=h,t[7]=g);let _;t[8]===r?_=t[9]:(_=(0,x.default)(v.root,r),t[8]=r,t[9]=_);let y=f??o,C;t[10]===d?C=t[11]:(C=(0,x.default)(v.actionButton,d),t[10]=d,t[11]=C);let T;t[12]!==p||t[13]!==c||t[14]!==y||t[15]!==C?(T=(0,S.jsx)(l,{...p,variant:`secondary`,size:c,disabled:y,className:C}),t[12]=p,t[13]=c,t[14]=y,t[15]=C,t[16]=T):T=t[16];let E;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,S.jsx)(`div`,{className:v.dividerAnchor,children:(0,S.jsx)(`div`,{className:v.dividerWrapper,children:(0,S.jsx)(`div`,{className:v.divider})})}),t[17]=E):E=t[17];let D;t[18]===c?D=t[19]:(D=w(c),t[18]=c,t[19]=D);let O=h??o,k;t[20]===m?k=t[21]:(k=(0,x.default)(v.select,m),t[20]=m,t[21]=k);let A;t[22]!==g||t[23]!==D||t[24]!==O||t[25]!==k?(A=(0,S.jsx)(u,{...g,size:D,disabled:O,className:k}),t[22]=g,t[23]=D,t[24]=O,t[25]=k,t[26]=A):A=t[26];let j;return t[27]!==n||t[28]!==i||t[29]!==A||t[30]!==_||t[31]!==T?(j=(0,S.jsxs)(`div`,{ref:n,className:_,style:i,children:[T,E,A]}),t[27]=n,t[28]=i,t[29]=A,t[30]=_,t[31]=T,t[32]=j):j=t[32],j},w=e=>e===`medium`?`default`:`small`})),E,D=t((()=>{E=[`medium`,`small`]})),O,k=t((()=>{s(),T(),O=o(C,[`size`]),O.displayName=`DsSplitButton`})),A,j,M,N,P,F,I,L,R;t((()=>{A=e(n(),1),k(),D(),j=r(),{fn:M}=__STORYBOOK_MODULE_TEST__,N=[{label:`30s`,value:`30`},{label:`1m`,value:`60`},{label:`5m`,value:`300`},{label:`10m`,value:`600`}],P={title:`Design System/SplitButton`,component:O,parameters:{layout:`centered`},args:{size:`medium`,disabled:!1,slotProps:{button:{icon:`refresh`},select:{options:N,value:`30`,onValueChange:M(),multiple:!1}}},argTypes:{size:{control:`radio`,options:E},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},F={render:e=>{let[t,n]=(0,A.useState)(`30`),[r,i]=(0,A.useState)(!1),a=()=>{i(!0),setTimeout(()=>i(!1),2e3)};return(0,j.jsx)(O,{...e,slotProps:{button:{...e.slotProps.button,loading:r,icon:`refresh`,onClick:a},select:{...e.slotProps.select,value:t,onValueChange:n}}})}},I={args:{slotProps:{button:{loading:!0},select:{options:N,value:`30`,onValueChange:M()}}}},L={args:{disabled:!0}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('30');
    const [loading, setLoading] = useState(false);
    const handleAction = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return <DsSplitButton {...args} slotProps={{
      button: {
        ...args.slotProps.button,
        loading,
        icon: 'refresh',
        onClick: handleAction
      },
      select: {
        ...args.slotProps.select,
        value,
        onValueChange: setValue
      } as DsSelectProps
    }} />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    slotProps: {
      button: {
        loading: true
      },
      select: {
        options: refreshOptions,
        value: '30',
        onValueChange: fn()
      }
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`Loading`,`Disabled`]}))();export{F as Default,L as Disabled,I as Loading,R as __namedExportsOrder,P as default};