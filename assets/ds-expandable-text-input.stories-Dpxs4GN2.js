import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-WTiOXMpf.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./classnames-Dm_LJ4P4.js";import{t as a}from"./compiler-runtime-H8lMLIG-.js";import{t as o}from"./ds-icon-DlJlTnsu.js";import{t as s}from"./ds-icon-DQeun4-5.js";import{n as c,t as l}from"./ds-button-35VzR_pK.js";import{n as u,r as d}from"./ds-text-input.types-DgCVJ9HT.js";import{t as f}from"./ds-text-input-VGCdiAM1.js";import{t as p}from"./ds-table-C3xKyjjq.js";import{n as m,t as h}from"./merge-refs-CuqNF2BW.js";import{t as g}from"./ds-table-2dyNlrNm.js";var _,v,y,b,x,S,C,w=e((()=>{_=`_expandableInput_pos4o_1`,v=`_expanded_pos4o_5`,y=`_trigger_pos4o_9`,b=`_clearTrigger_pos4o_28`,x=`_dirty_pos4o_34`,S=`_inputExpander_pos4o_38`,C={expandableInput:_,expanded:v,trigger:y,clearTrigger:b,dirty:x,inputExpander:S}}));function T(e){let t=(0,D.c)(41),{onClear:n,onExpandChange:r,icon:i,size:a,...s}=e,l=!!(s.value??s.defaultValue),[u,f]=(0,O.useState)(l),[p,h]=(0,O.useState)(l),g=(0,O.useRef)(null),_;t[0]!==r||t[1]!==h?(_=e=>{f(e),r?.(e),e||h(!1)},t[0]=r,t[1]=h,t[2]=_):_=t[2];let v=_,y=a===`small`?`tiny`:`small`,b=d,x=m(g,s.ref),S=u?0:-1,w=(0,k.default)(s.className,C.expandableInput,u&&C.expanded,p&&C.dirty),T;t[3]!==s||t[4]!==h?(T=e=>{s.onChange?.(e),h(!!e.target.value)},t[3]=s,t[4]=h,t[5]=T):T=t[5];let j;t[6]!==s||t[7]!==g||t[8]!==v?(j=e=>{s.onBlur?.(e),(s.value??g.current?.value)||v(!1)},t[6]=s,t[7]=g,t[8]=v,t[9]=j):j=t[9];let M=u?-1:0,N;t[10]!==s.disabled||t[11]!==g||t[12]!==v?(N=()=>{s.disabled||(v(!0),g.current?.focus())},t[10]=s.disabled,t[11]=g,t[12]=v,t[13]=N):N=t[13];let P;t[14]===i?P=t[15]:(P=(0,A.jsx)(o,{icon:i,size:`small`}),t[14]=i,t[15]=P);let F;t[16]!==u||t[17]!==M||t[18]!==N||t[19]!==P?(F=(0,A.jsx)(`button`,{type:`button`,className:C.trigger,"aria-label":`Open text input`,"aria-hidden":u,tabIndex:M,onClick:N,children:P}),t[16]=u,t[17]=M,t[18]=N,t[19]=P,t[20]=F):F=t[20];let I;t[21]!==n||t[22]!==g||t[23]!==v?(I=()=>{v(!1),g.current&&(g.current.blur(),g.current.value=``),n?.()},t[21]=n,t[22]=g,t[23]=v,t[24]=I):I=t[24];let L;t[25]!==y||t[26]!==I?(L=(0,A.jsx)(c,{design:`v1.2`,size:y,buttonType:`tertiary`,variant:`filled`,className:C.clearTrigger,onClick:I,children:`Clear`}),t[25]=y,t[26]=I,t[27]=L):L=t[27];let R;t[28]!==F||t[29]!==L?(R={inputWrapper:E,startAdornment:F,endAdornment:L},t[28]=F,t[29]=L,t[30]=R):R=t[30];let z;return t[31]!==b||t[32]!==s||t[33]!==a||t[34]!==R||t[35]!==x||t[36]!==S||t[37]!==w||t[38]!==T||t[39]!==j?(z=(0,A.jsx)(b,{...s,size:a,ref:x,tabIndex:S,className:w,onChange:T,onBlur:j,slots:R}),t[31]=b,t[32]=s,t[33]=a,t[34]=R,t[35]=x,t[36]=S,t[37]=w,t[38]=T,t[39]=j,t[40]=z):z=t[40],z}function E(e){let t=(0,D.c)(2),{children:n}=e,r;return t[0]===n?r=t[1]:(r=(0,A.jsx)(`div`,{className:C.inputExpander,children:n}),t[0]=n,t[1]=r),r}var D,O,k,A,j=e((()=>{D=a(),O=t(n(),1),f(),s(),k=t(i(),1),w(),h(),l(),A=r()})),M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{j(),f(),M=t(n(),1),g(),l(),N=r(),P={title:`Components/ExpandableTextInput`,component:T,parameters:{layout:`centered`,docs:{description:{component:`An expandable animated text input`}}},argTypes:{size:{control:{type:`select`},options:u,description:`The size of the input field`},onExpandChange:{action:`expand change`},disabled:{control:`boolean`,description:`Whether the input is disabled`},placeholder:{control:`text`,description:`The placeholder text`}}},F={args:{icon:`search`}},I={args:{icon:`search`,size:`small`}},L={args:{icon:`search_insights`}},R={args:{icon:`search`,placeholder:`Type to search`}},z={args:{value:`query`},render:function(e){let[t,n]=(0,M.useState)(e.value);return(0,N.jsx)(T,{icon:`search`,value:t,onChange:e=>n(e.target.value),onClear:()=>n(``)})}},B={args:{icon:`search`,defaultValue:`initial search`}},V=[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue()},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue()}],H=[{id:`1`,firstName:`Tanner`,lastName:`Linsley`,age:33},{id:`2`,firstName:`Kevin`,lastName:`Fine`,age:28},{id:`3`,firstName:`John`,lastName:`Doe`,age:45},{id:`4`,firstName:`Jane`,lastName:`Smith`,age:30},{id:`5`,firstName:`Peter`,lastName:`Jones`,age:22}],U={render:function(){let[e,t]=(0,M.useState)(``);return(0,N.jsxs)(`div`,{style:{width:`500px`},children:[(0,N.jsxs)(`div`,{style:{marginBottom:`20px`,display:`flex`,justifyContent:`end`,gap:`8px`},children:[(0,N.jsx)(T,{icon:`search`,placeholder:`Type to search...`,value:e,onChange:e=>t(e.target.value),onClear:()=>t(``)}),(0,N.jsx)(c,{size:`small`,children:`Click`})]}),(0,N.jsx)(p,{columns:V,data:H,columnFilters:[{id:`firstName`,value:e}]})]})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    size: 'small'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search_insights'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    placeholder: 'Type to search'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'query'
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return <DsExpandableTextInput icon="search" value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} />;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    defaultValue: 'initial search'
  }
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [search, setSearch] = useState('');
    return <div style={{
      width: '500px'
    }}>
                <div style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'end',
        gap: '8px'
      }}>
                    <DsExpandableTextInput icon="search" placeholder="Type to search..." value={search} onChange={e => setSearch(e.target.value)} onClear={() => setSearch('')} />

                    <DsButton size="small">Click</DsButton>
                </div>
                <DsTable columns={columns} data={people} columnFilters={[{
        id: 'firstName',
        value: search
      }]} />
            </div>;
  }
}`,...U.parameters?.docs?.source}}},W=[`Default`,`SmallSize`,`CustomIcon`,`Placeholder`,`Controlled`,`DefaultValue`,`WithTable`]}))();export{z as Controlled,L as CustomIcon,F as Default,B as DefaultValue,R as Placeholder,I as SmallSize,U as WithTable,W as __namedExportsOrder,P as default};