import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DZKqKZwW.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-DN2IqHsz.js";import{t as a}from"./compiler-runtime-CRCxj9YZ.js";import{r as o,t as s}from"./responsive-DVrw4UUL.js";import{a as c,i as l,o as u}from"./ds-button-v3.types-B-aEJLJq.js";import{t as d}from"./ds-select--0-OvUYE.js";import{t as f}from"./ds-select-DkXtF7MQ.js";var p,m,h,g,_,v,y,b=t((()=>{p=`_root_v6ly2_1`,m=`_actionButton_v6ly2_4`,h=`_select_v6ly2_20`,g=`_dividerAnchor_v6ly2_26`,_=`_dividerWrapper_v6ly2_30`,v=`_divider_v6ly2_26`,y={root:p,actionButton:m,select:h,dividerAnchor:g,dividerWrapper:_,divider:v}})),x=t((()=>{u(),l()})),S,C,w,T,E,D=t((()=>{S=a(),C=e(i(),1),f(),b(),x(),w=r(),T=e=>{let t=(0,S.c)(33),{ref:n,className:r,style:i,size:a,disabled:o,slotProps:s}=e,l=a===void 0?`medium`:a,u,f,p;t[0]===s.button?(u=t[1],f=t[2],p=t[3]):({className:u,disabled:f,...p}=s.button,t[0]=s.button,t[1]=u,t[2]=f,t[3]=p);let m,h,g;t[4]===s.select?(m=t[5],h=t[6],g=t[7]):({className:m,disabled:h,...g}=s.select,t[4]=s.select,t[5]=m,t[6]=h,t[7]=g);let _;t[8]===r?_=t[9]:(_=(0,C.default)(y.root,r),t[8]=r,t[9]=_);let v=f??o,b;t[10]===u?b=t[11]:(b=(0,C.default)(y.actionButton,u),t[10]=u,t[11]=b);let x;t[12]!==p||t[13]!==l||t[14]!==v||t[15]!==b?(x=(0,w.jsx)(c,{...p,variant:`secondary`,size:l,disabled:v,className:b}),t[12]=p,t[13]=l,t[14]=v,t[15]=b,t[16]=x):x=t[16];let T;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(T=(0,w.jsx)(`div`,{className:y.dividerAnchor,children:(0,w.jsx)(`div`,{className:y.dividerWrapper,children:(0,w.jsx)(`div`,{className:y.divider})})}),t[17]=T):T=t[17];let D;t[18]===l?D=t[19]:(D=E(l),t[18]=l,t[19]=D);let O=h??o,k;t[20]===m?k=t[21]:(k=(0,C.default)(y.select,m),t[20]=m,t[21]=k);let A;t[22]!==g||t[23]!==D||t[24]!==O||t[25]!==k?(A=(0,w.jsx)(d,{...g,size:D,disabled:O,className:k}),t[22]=g,t[23]=D,t[24]=O,t[25]=k,t[26]=A):A=t[26];let j;return t[27]!==n||t[28]!==i||t[29]!==A||t[30]!==_||t[31]!==x?(j=(0,w.jsxs)(`div`,{ref:n,className:_,style:i,children:[x,T,A]}),t[27]=n,t[28]=i,t[29]=A,t[30]=_,t[31]=x,t[32]=j):j=t[32],j},E=e=>e===`medium`?`default`:`small`})),O,k=t((()=>{O=[`medium`,`small`]})),A,j=t((()=>{s(),D(),A=o(T,[`size`]),A.displayName=`DsSplitButton`})),M,N,P,F,I,L,R,z,B;t((()=>{M=e(n(),1),j(),k(),N=r(),{fn:P}=__STORYBOOK_MODULE_TEST__,F=[{label:`30s`,value:`30`},{label:`1m`,value:`60`},{label:`5m`,value:`300`},{label:`10m`,value:`600`}],I={title:`Design System/SplitButton`,component:A,parameters:{layout:`centered`},args:{size:`medium`,disabled:!1,slotProps:{button:{icon:`refresh`},select:{options:F,value:`30`,onValueChange:P(),multiple:!1}}},argTypes:{size:{control:`radio`,options:O},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},L={render:e=>{let[t,n]=(0,M.useState)(`30`),[r,i]=(0,M.useState)(!1),a=()=>{i(!0),setTimeout(()=>i(!1),2e3)};return(0,N.jsx)(A,{...e,slotProps:{button:{...e.slotProps.button,loading:r,icon:`refresh`,onClick:a},select:{...e.slotProps.select,value:t,onValueChange:n}}})}},R={args:{slotProps:{button:{loading:!0},select:{options:F,value:`30`,onValueChange:P()}}}},z={args:{disabled:!0}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...z.parameters?.docs?.source}}},B=[`Default`,`Loading`,`Disabled`]}))();export{L as Default,z as Disabled,R as Loading,B as __namedExportsOrder,I as default};