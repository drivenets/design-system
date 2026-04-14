import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-_oDZYAqy.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-DN2IqHsz.js";import{t as a}from"./compiler-runtime-DgjjyoGQ.js";import{i as o}from"./ds-icon.types-WcZ8_BUH.js";import{t as s}from"./ds-icon-Cb51Jseb.js";import{n as c,t as l}from"./ds-button-D4zL4TAQ.js";import{n as u,r as d}from"./ds-text-input.types-Doj4DFCW.js";import{t as f}from"./ds-text-input-BDUL5anP.js";import{n as p,t as m}from"./merge-refs-DT6bopau.js";import{t as h}from"./filters-D46BW99T.js";import{n as g,t as _}from"./ds-table-BgkH3zJw.js";var v,y,b,x,S,C,w,T=t((()=>{v=`_expandableInput_14f8h_1`,y=`_expanded_14f8h_5`,b=`_trigger_14f8h_9`,x=`_clearTrigger_14f8h_28`,S=`_dirty_14f8h_34`,C=`_inputExpander_14f8h_38`,w={expandableInput:v,expanded:y,trigger:b,clearTrigger:x,dirty:S,inputExpander:C}}));function E(e){let t=(0,O.c)(41),{onClear:n,onExpandChange:r,icon:i,size:a,...s}=e,l=!!(s.value??s.defaultValue),[u,f]=(0,k.useState)(l),[m,h]=(0,k.useState)(l),g=(0,k.useRef)(null),_;t[0]!==r||t[1]!==h?(_=e=>{f(e),r?.(e),e||h(!1)},t[0]=r,t[1]=h,t[2]=_):_=t[2];let v=_,y=a===`small`?`tiny`:`small`,b=d,x=p(g,s.ref),S=u?0:-1,C=(0,A.default)(s.className,w.expandableInput,u&&w.expanded,m&&w.dirty),T;t[3]!==s||t[4]!==h?(T=e=>{s.onChange?.(e),h(!!e.target.value)},t[3]=s,t[4]=h,t[5]=T):T=t[5];let E;t[6]!==s||t[7]!==g||t[8]!==v?(E=e=>{s.onBlur?.(e),(s.value??g.current?.value)||v(!1)},t[6]=s,t[7]=g,t[8]=v,t[9]=E):E=t[9];let M=u?-1:0,N;t[10]!==s.disabled||t[11]!==g||t[12]!==v?(N=()=>{s.disabled||(v(!0),g.current?.focus())},t[10]=s.disabled,t[11]=g,t[12]=v,t[13]=N):N=t[13];let P;t[14]===i?P=t[15]:(P=(0,j.jsx)(o,{icon:i,size:`small`}),t[14]=i,t[15]=P);let F;t[16]!==u||t[17]!==M||t[18]!==N||t[19]!==P?(F=(0,j.jsx)(`button`,{type:`button`,className:w.trigger,"aria-label":`Open text input`,"aria-hidden":u,tabIndex:M,onClick:N,children:P}),t[16]=u,t[17]=M,t[18]=N,t[19]=P,t[20]=F):F=t[20];let I;t[21]!==n||t[22]!==g||t[23]!==v?(I=()=>{v(!1),g.current&&(g.current.blur(),g.current.value=``),n?.()},t[21]=n,t[22]=g,t[23]=v,t[24]=I):I=t[24];let L;t[25]!==y||t[26]!==I?(L=(0,j.jsx)(c,{design:`v1.2`,size:y,buttonType:`tertiary`,variant:`filled`,className:w.clearTrigger,onClick:I,children:`Clear`}),t[25]=y,t[26]=I,t[27]=L):L=t[27];let R;t[28]!==F||t[29]!==L?(R={inputWrapper:D,startAdornment:F,endAdornment:L},t[28]=F,t[29]=L,t[30]=R):R=t[30];let z;return t[31]!==b||t[32]!==s||t[33]!==a||t[34]!==R||t[35]!==x||t[36]!==S||t[37]!==C||t[38]!==T||t[39]!==E?(z=(0,j.jsx)(b,{...s,size:a,ref:x,tabIndex:S,className:C,onChange:T,onBlur:E,slots:R}),t[31]=b,t[32]=s,t[33]=a,t[34]=R,t[35]=x,t[36]=S,t[37]=C,t[38]=T,t[39]=E,t[40]=z):z=t[40],z}function D(e){let t=(0,O.c)(2),{children:n}=e,r;return t[0]===n?r=t[1]:(r=(0,j.jsx)(`div`,{className:w.inputExpander,children:n}),t[0]=n,t[1]=r),r}var O,k,A,j,M=t((()=>{O=a(),k=e(n(),1),f(),s(),A=e(i(),1),T(),m(),l(),j=r()})),N=t((()=>{})),P=t((()=>{h(),g(),N()})),F,I,L,R,z,B,V,H,U,W,G,K,q;t((()=>{M(),f(),F=e(n(),1),P(),l(),I=r(),L={title:`Design System/ExpandableTextInput`,component:E,parameters:{layout:`centered`,docs:{description:{component:`An expandable animated text input`}}},argTypes:{size:{control:{type:`select`},options:u,description:`The size of the input field`},onExpandChange:{action:`expand change`},disabled:{control:`boolean`,description:`Whether the input is disabled`},placeholder:{control:`text`,description:`The placeholder text`}}},R={args:{icon:`search`}},z={args:{icon:`search`,size:`small`}},B={args:{icon:`search_insights`}},V={args:{icon:`search`,placeholder:`Type to search`}},H={args:{value:`query`},render:function(e){let[t,n]=(0,F.useState)(e.value);return(0,I.jsx)(E,{icon:`search`,value:t,onChange:e=>n(e.target.value),onClear:()=>n(``)})}},U={args:{icon:`search`,defaultValue:`initial search`}},W=[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue()},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue()}],G=[{id:`1`,firstName:`Tanner`,lastName:`Linsley`,age:33},{id:`2`,firstName:`Kevin`,lastName:`Fine`,age:28},{id:`3`,firstName:`John`,lastName:`Doe`,age:45},{id:`4`,firstName:`Jane`,lastName:`Smith`,age:30},{id:`5`,firstName:`Peter`,lastName:`Jones`,age:22}],K={render:function(){let[e,t]=(0,F.useState)(``);return(0,I.jsxs)(`div`,{style:{width:`500px`},children:[(0,I.jsxs)(`div`,{style:{marginBottom:`20px`,display:`flex`,justifyContent:`end`,gap:`8px`},children:[(0,I.jsx)(E,{icon:`search`,placeholder:`Type to search...`,value:e,onChange:e=>t(e.target.value),onClear:()=>t(``)}),(0,I.jsx)(c,{size:`small`,children:`Click`})]}),(0,I.jsx)(_,{columns:W,data:G,columnFilters:[{id:`firstName`,value:e}]})]})}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    size: 'small'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search_insights'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    placeholder: 'Type to search'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'query'
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return <DsExpandableTextInput icon="search" value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} />;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    defaultValue: 'initial search'
  }
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q=[`Default`,`SmallSize`,`CustomIcon`,`Placeholder`,`Controlled`,`DefaultValue`,`WithTable`]}))();export{H as Controlled,B as CustomIcon,R as Default,U as DefaultValue,V as Placeholder,z as SmallSize,K as WithTable,q as __namedExportsOrder,L as default};