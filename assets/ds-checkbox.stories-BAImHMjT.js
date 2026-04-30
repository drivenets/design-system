import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-A2IqgcRV.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-DN2IqHsz.js";import{t as a}from"./compiler-runtime-DdXHFgJH.js";import{t as o}from"./checkbox-Dq2hEGKd.js";import{a as s,i as c,n as l,r as u,t as d}from"./ds-checkbox.types-Ded_tYcm.js";import{n as f,t as p}from"./ds-stack-Cp7CiRvn.js";var m,h,g,_,v=t((()=>{m=`_root_1i2um_1`,h=`_vertical_1i2um_6`,g=`_horizontal_1i2um_10`,_={root:m,vertical:h,horizontal:g}})),y,b,x,S,C=t((()=>{y=a(),s(),b=e(i(),1),v(),x=r(),S=e=>{let t=(0,y.c)(12),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({orientation:a,className:r,children:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let s=_[a===void 0?`vertical`:a],c;t[5]!==r||t[6]!==s?(c=(0,b.default)(_.root,s,r),t[5]=r,t[6]=s,t[7]=c):c=t[7];let l;return t[8]!==n||t[9]!==i||t[10]!==c?(l=(0,x.jsx)(o.Group,{className:c,...i,children:n}),t[8]=n,t[9]=i,t[10]=c,t[11]=l):l=t[11],l}})),w=t((()=>{}));function T({value:e,allValues:t,onValueChange:n,isSelectable:r}){let i=r?t.filter(r):[...t],a=new Set(i),o=e.reduce((e,t)=>a.has(t)?e+1:e,0),s=i.length,c=`indeterminate`;return s===0||o===0?c=!1:o===s&&(c=!0),{selectAllState:c,selectedCount:o,selectableCount:s,onSelectAllChange:t=>{let r=e.filter(e=>!a.has(e));n(t===!0?[...r,...i]:r)}}}var E=t((()=>{})),D=t((()=>{E()})),O=t((()=>{C(),w(),D()})),k,A,j,M=t((()=>{k=`_output_ao7ez_1`,A=`_groupIndented_ao7ez_11`,j={output:k,groupIndented:A}})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;t((()=>{N=e(n(),1),c(),O(),f(),l(),M(),P=r(),F={title:`Components/Checkbox`,component:u,parameters:{layout:`centered`},argTypes:{variant:{options:d,control:`radio`},checked:{control:`radio`,options:[!0,!1,`indeterminate`],description:'Controlled checked state. Accepts `true`, `false`, or `"indeterminate"`'},onCheckedChange:{description:`Callback invoked when the checked state changes`},label:{control:`text`,description:`Label for the checkbox`},labelInfo:{control:`text`,description:`Additional label info for the checkbox`},disabled:{control:`boolean`,description:`Disables the checkbox, preventing user interaction`},className:{control:`text`,description:`Additional CSS class names`}}},I=`Text for label`,L=`Text for info`,R=[{label:`React`,value:`react`},{label:`Solid`,value:`solid`},{label:`Vue`,value:`vue`}],z=R.map(e=>e.value),B={args:{label:I,labelInfo:L,className:`custom-checkbox`}},V={render:function(){let[e,t]=(0,N.useState)(`indeterminate`);return(0,P.jsx)(u,{label:I,labelInfo:L,checked:e,onCheckedChange:e=>t(e)})}},H={render:()=>(0,P.jsxs)(p,{gap:`var(--3xs)`,children:[(0,P.jsx)(u,{label:I,labelInfo:L,disabled:!0}),(0,P.jsx)(u,{label:I,labelInfo:L,disabled:!0,checked:!0}),(0,P.jsx)(u,{label:I,labelInfo:L,disabled:!0,checked:`indeterminate`})]})},U={args:{label:I,labelInfo:L,readOnly:!0,checked:!0}},W={args:{variant:`warning`}},G={args:{variant:`warning`,label:I,labelInfo:L}},K={render:function(){let[e,t]=(0,N.useState)(`indeterminate`);return(0,P.jsx)(u,{variant:`warning`,label:I,labelInfo:L,checked:e,onCheckedChange:e=>t(e)})}},q={render:function(){let[e,t]=(0,N.useState)([`react`]),[n,r]=(0,N.useState)([`react`]);return(0,P.jsxs)(p,{gap:`var(--3xs)`,children:[(0,P.jsxs)(p,{gap:`var(--3xs)`,children:[(0,P.jsx)(`strong`,{children:`Vertical`}),(0,P.jsxs)(`output`,{className:j.output,children:[`Selected: `,e.join(`, `)]}),(0,P.jsx)(S,{orientation:`vertical`,value:e,onValueChange:t,name:`framework-vertical`,children:R.map(e=>(0,P.jsx)(u,{label:e.label,value:e.value},e.value))})]}),(0,P.jsxs)(p,{gap:`var(--3xs)`,children:[(0,P.jsx)(`strong`,{children:`Horizontal`}),(0,P.jsxs)(`output`,{className:j.output,children:[`Selected: `,n.join(`, `)]}),(0,P.jsx)(S,{orientation:`horizontal`,value:n,onValueChange:r,name:`framework-horizontal`,children:R.map(e=>(0,P.jsx)(u,{label:e.label,value:e.value},e.value))})]})]})}},J={render:function(){let[e,t]=(0,N.useState)([]),{selectAllState:n,onSelectAllChange:r}=T({value:e,allValues:z,onValueChange:t});return(0,P.jsxs)(p,{gap:`var(--3xs)`,children:[(0,P.jsx)(u,{label:`Select all`,checked:n,onCheckedChange:r}),(0,P.jsx)(S,{className:j.groupIndented,value:e,onValueChange:t,name:`framework`,children:R.map(e=>(0,P.jsx)(u,{label:e.label,value:e.value},e.value))})]})}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    className: 'custom-checkbox'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');
    return <DsCheckbox label={label} labelInfo={labelInfo} checked={checked} onCheckedChange={newState => setChecked(newState)} />;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <DsStack gap="var(--3xs)">
            <DsCheckbox label={label} labelInfo={labelInfo} disabled />
            <DsCheckbox label={label} labelInfo={labelInfo} disabled checked />
            <DsCheckbox label={label} labelInfo={labelInfo} disabled checked="indeterminate" />
        </DsStack>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    readOnly: true,
    checked: true
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    label,
    labelInfo
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');
    return <DsCheckbox variant="warning" label={label} labelInfo={labelInfo} checked={checked} onCheckedChange={newState => setChecked(newState)} />;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [vertical, setVertical] = useState<string[]>(['react']);
    const [horizontal, setHorizontal] = useState<string[]>(['react']);
    return <DsStack gap="var(--3xs)">
                <DsStack gap="var(--3xs)">
                    <strong>Vertical</strong>
                    <output className={styles.output}>Selected: {vertical.join(', ')}</output>
                    <DsCheckboxGroup orientation="vertical" value={vertical} onValueChange={setVertical} name="framework-vertical">
                        {frameworkItems.map(item => <DsCheckbox key={item.value} label={item.label} value={item.value} />)}
                    </DsCheckboxGroup>
                </DsStack>

                <DsStack gap="var(--3xs)">
                    <strong>Horizontal</strong>
                    <output className={styles.output}>Selected: {horizontal.join(', ')}</output>
                    <DsCheckboxGroup orientation="horizontal" value={horizontal} onValueChange={setHorizontal} name="framework-horizontal">
                        {frameworkItems.map(item => <DsCheckbox key={item.value} label={item.label} value={item.value} />)}
                    </DsCheckboxGroup>
                </DsStack>
            </DsStack>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string[]>([]);
    const {
      selectAllState,
      onSelectAllChange
    } = useCheckboxSelectAll({
      value,
      allValues: frameworkValues,
      onValueChange: setValue
    });
    return <DsStack gap="var(--3xs)">
                <DsCheckbox label="Select all" checked={selectAllState} onCheckedChange={onSelectAllChange} />
                <DsCheckboxGroup className={styles.groupIndented} value={value} onValueChange={setValue} name="framework">
                    {frameworkItems.map(item => <DsCheckbox key={item.value} label={item.label} value={item.value} />)}
                </DsCheckboxGroup>
            </DsStack>;
  }
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`Indeterminate`,`Disabled`,`ReadOnly`,`Warning`,`WarningWithLabel`,`WarningIndeterminate`,`Group`,`SelectAll`]}))();export{B as Default,H as Disabled,q as Group,V as Indeterminate,U as ReadOnly,J as SelectAll,W as Warning,K as WarningIndeterminate,G as WarningWithLabel,Y as __namedExportsOrder,F as default};