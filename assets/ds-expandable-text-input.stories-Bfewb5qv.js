import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./classnames-Cm4Wq5Eu.js";import{t as o}from"./ds-icon-DMuQRurV.js";import{t as s}from"./ds-icon-hk1K6-z2.js";import{a as c,i as l}from"./ds-typography-BLoO5j9q.js";import{n as u,t as d}from"./ds-button-v3-r44tD_RJ.js";import{n as f,t as p}from"./ds-stack-GU0hZWeR.js";import{n as m,r as h}from"./ds-text-input.types-LoNcVPp4.js";import{t as g}from"./ds-text-input-D0lDEuO4.js";import{n as _,t as v}from"./ds-button-DcPUTCrY.js";import{t as y}from"./ds-table-i4tz0ysf.js";import{t as b}from"./ds-table-DAqiyuaa.js";var x,S,C,w,T,E,D,O=t((()=>{x=`_expandableInput_pos4o_1`,S=`_expanded_pos4o_5`,C=`_trigger_pos4o_9`,w=`_clearTrigger_pos4o_28`,T=`_dirty_pos4o_34`,E=`_inputExpander_pos4o_38`,D={expandableInput:x,expanded:S,trigger:C,clearTrigger:w,dirty:T,inputExpander:E}}));function k(e){let t=(0,j.c)(41),{onClear:n,onExpandChange:r,icon:i,size:a,...s}=e,l=!!(s.value??s.defaultValue),[u,d]=(0,M.useState)(l),[f,p]=(0,M.useState)(l),m=(0,M.useRef)(null),g;t[0]!==r||t[1]!==p?(g=e=>{d(e),r?.(e),e||p(!1)},t[0]=r,t[1]=p,t[2]=g):g=t[2];let v=g,y=a===`small`?`tiny`:`small`,b=h,x=c(m,s.ref),S=u?0:-1,C=(0,N.default)(s.className,D.expandableInput,u&&D.expanded,f&&D.dirty),w;t[3]!==s||t[4]!==p?(w=e=>{s.onChange?.(e),p(!!e.target.value)},t[3]=s,t[4]=p,t[5]=w):w=t[5];let T;t[6]!==s||t[7]!==m||t[8]!==v?(T=e=>{s.onBlur?.(e),(s.value??m.current?.value)||v(!1)},t[6]=s,t[7]=m,t[8]=v,t[9]=T):T=t[9];let E=u?-1:0,O;t[10]!==s.disabled||t[11]!==m||t[12]!==v?(O=()=>{s.disabled||(v(!0),m.current?.focus())},t[10]=s.disabled,t[11]=m,t[12]=v,t[13]=O):O=t[13];let k;t[14]===i?k=t[15]:(k=(0,P.jsx)(o,{icon:i,size:`small`}),t[14]=i,t[15]=k);let F;t[16]!==u||t[17]!==E||t[18]!==O||t[19]!==k?(F=(0,P.jsx)(`button`,{type:`button`,className:D.trigger,"aria-label":`Open text input`,"aria-hidden":u,tabIndex:E,onClick:O,children:k}),t[16]=u,t[17]=E,t[18]=O,t[19]=k,t[20]=F):F=t[20];let I;t[21]!==n||t[22]!==m||t[23]!==v?(I=()=>{v(!1),m.current&&(m.current.blur(),m.current.value=``),n?.()},t[21]=n,t[22]=m,t[23]=v,t[24]=I):I=t[24];let L;t[25]!==y||t[26]!==I?(L=(0,P.jsx)(_,{design:`v1.2`,size:y,buttonType:`tertiary`,variant:`filled`,className:D.clearTrigger,onClick:I,children:`Clear`}),t[25]=y,t[26]=I,t[27]=L):L=t[27];let R;t[28]!==F||t[29]!==L?(R={inputWrapper:A,startAdornment:F,endAdornment:L},t[28]=F,t[29]=L,t[30]=R):R=t[30];let z;return t[31]!==b||t[32]!==s||t[33]!==a||t[34]!==R||t[35]!==x||t[36]!==S||t[37]!==C||t[38]!==w||t[39]!==T?(z=(0,P.jsx)(b,{...s,size:a,ref:x,tabIndex:S,className:C,onChange:w,onBlur:T,slots:R}),t[31]=b,t[32]=s,t[33]=a,t[34]=R,t[35]=x,t[36]=S,t[37]=C,t[38]=w,t[39]=T,t[40]=z):z=t[40],z}function A(e){let t=(0,j.c)(2),{children:n}=e,r;return t[0]===n?r=t[1]:(r=(0,P.jsx)(`div`,{className:D.inputExpander,children:n}),t[0]=n,t[1]=r),r}var j,M,N,P,F=t((()=>{j=i(),M=e(n(),1),g(),s(),N=e(a(),1),O(),l(),v(),P=r(),k.displayName=`DsExpandableTextInput`})),I,L,R,z,B,V,H,U,W,G,K,q,J;t((()=>{I=e(n(),1),F(),g(),b(),u(),f(),L=r(),R={title:`Components/ExpandableTextInput`,component:k,parameters:{layout:`centered`,docs:{description:{component:`A compact icon button that animates open into a text input on focus. Use it to save horizontal space in toolbars and headers, such as an inline search.`}}},argTypes:{size:{control:`select`,options:m,description:`The size of the input field`},disabled:{control:`boolean`,description:`Whether the input is disabled`},placeholder:{control:`text`,description:`The placeholder text`},onExpandChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},z={args:{icon:`search`}},B={args:{icon:`search`,size:`small`}},V={args:{icon:`search_insights`}},H={args:{icon:`search`,placeholder:`Type to search`}},U={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,I.useState)(`query`);return(0,L.jsx)(k,{icon:`search`,value:e,onChange:e=>t(e.target.value),onClear:()=>t(``)})}},W={args:{icon:`search`,defaultValue:`initial search`}},G=[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue()},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue()}],K=[{id:`1`,firstName:`Tanner`,lastName:`Linsley`,age:33},{id:`2`,firstName:`Kevin`,lastName:`Fine`,age:28},{id:`3`,firstName:`John`,lastName:`Doe`,age:45},{id:`4`,firstName:`Jane`,lastName:`Smith`,age:30},{id:`5`,firstName:`Peter`,lastName:`Jones`,age:22}],q={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,I.useState)(``);return(0,L.jsxs)(p,{direction:`column`,gap:`var(--md)`,width:`31.25rem`,children:[(0,L.jsxs)(p,{gap:`var(--2xs)`,justifyContent:`end`,children:[(0,L.jsx)(k,{icon:`search`,placeholder:`Type to search...`,value:e,onChange:e=>t(e.target.value),onClear:()=>t(``)}),(0,L.jsx)(d,{size:`small`,children:`Click`})]}),(0,L.jsx)(y,{columns:G,data:K,columnFilters:[{id:`firstName`,value:e}]})]})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search'
  }
}`,...z.parameters?.docs?.source},description:{story:"The default collapsed state: a single icon that expands into an input when\nactivated. `icon` sets the glyph shown while collapsed.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    size: 'small'
  }
}`,...B.parameters?.docs?.source},description:{story:`Compact size for dense toolbars where the trigger must stay small.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search_insights'
  }
}`,...V.parameters?.docs?.source},description:{story:`Swap the trigger glyph with any icon to match the field's purpose.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    placeholder: 'Type to search'
  }
}`,...H.parameters?.docs?.source},description:{story:"Provide a `placeholder` shown once the field expands.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('query');
    return <DsExpandableTextInput icon="search" value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} />;
  }
}`,...U.parameters?.docs?.source},description:{story:"Controlled usage where the parent owns the value. Pair `value`/`onChange`\nwith `onClear` so the built-in clear button resets your state.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    defaultValue: 'initial search'
  }
}`,...W.parameters?.docs?.source},description:{story:"Seed an uncontrolled field with `defaultValue`; the component starts expanded\nto reveal the initial text.",...W.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [search, setSearch] = useState('');
    return <DsStack direction="column" gap="var(--md)" width="31.25rem">
                <DsStack gap="var(--2xs)" justifyContent="end">
                    <DsExpandableTextInput icon="search" placeholder="Type to search..." value={search} onChange={e => setSearch(e.target.value)} onClear={() => setSearch('')} />
                    <DsButtonV3 size="small">Click</DsButtonV3>
                </DsStack>
                <DsTable columns={columns} data={people} columnFilters={[{
        id: 'firstName',
        value: search
      }]} />
            </DsStack>;
  }
}`,...q.parameters?.docs?.source},description:{story:"A real-world pattern: an expandable search that filters a `DsTable` without\ntaking up toolbar space until the user needs it.",...q.parameters?.docs?.description}}},J=[`Default`,`SmallSize`,`CustomIcon`,`Placeholder`,`Controlled`,`DefaultValue`,`WithTable`]}))();export{U as Controlled,V as CustomIcon,z as Default,W as DefaultValue,H as Placeholder,B as SmallSize,q as WithTable,J as __namedExportsOrder,R as default};