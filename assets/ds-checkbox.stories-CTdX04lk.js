import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-Bi79Gcw7.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./classnames-Dm_LJ4P4.js";import{t as a}from"./compiler-runtime-D8aGj6KF.js";import{t as o}from"./checkbox-6HmSnToL.js";import{a as s,i as c,n as l,r as u,t as d}from"./ds-checkbox.types-CDSW6Wxx.js";import{n as f,t as p}from"./ds-stack-Cz1mGJK1.js";var m,h,g,_,v=e((()=>{m=`_root_1i2um_1`,h=`_vertical_1i2um_6`,g=`_horizontal_1i2um_10`,_={root:m,vertical:h,horizontal:g}})),y,b,x,S,C=e((()=>{y=a(),s(),b=t(i(),1),v(),x=r(),S=e=>{let t=(0,y.c)(12),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({orientation:a,className:r,children:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let s=_[a===void 0?`vertical`:a],c;t[5]!==r||t[6]!==s?(c=(0,b.default)(_.root,s,r),t[5]=r,t[6]=s,t[7]=c):c=t[7];let l;return t[8]!==n||t[9]!==i||t[10]!==c?(l=(0,x.jsx)(o.Group,{className:c,...i,children:n}),t[8]=n,t[9]=i,t[10]=c,t[11]=l):l=t[11],l}})),w=e((()=>{}));function T({value:e,allValues:t,onValueChange:n,isSelectable:r}){let i=r?t.filter(r):[...t],a=new Set(i),o=e.reduce((e,t)=>a.has(t)?e+1:e,0),s=i.length,c=`indeterminate`;return s===0||o===0?c=!1:o===s&&(c=!0),{selectAllState:c,selectedCount:o,selectableCount:s,onSelectAllChange:t=>{let r=e.filter(e=>!a.has(e));n(t===!0?[...r,...i]:r)}}}var E=e((()=>{})),D=e((()=>{E()})),O=e((()=>{C(),w(),D()})),k,A,j,M,N=e((()=>{k=`_output_14pbj_5`,A=`_groupIndented_14pbj_15`,j=`_groupItem_14pbj_20`,M={output:k,groupIndented:A,groupItem:j}})),P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{P=t(n(),1),c(),O(),f(),l(),N(),F=r(),I={title:`Components/Checkbox`,component:u,parameters:{layout:`centered`},argTypes:{variant:{options:d,control:`radio`},checked:{control:`radio`,options:[!0,!1,`indeterminate`],description:'Controlled checked state. Accepts `true`, `false`, or `"indeterminate"`'},onCheckedChange:{description:`Callback invoked when the checked state changes`},label:{control:`text`,description:`Label for the checkbox`},labelInfo:{control:`text`,description:`Additional label info for the checkbox`},disabled:{control:`boolean`,description:`Disables the checkbox, preventing user interaction`},className:{control:`text`,description:`Additional CSS class names`}}},L=`Text for label`,R=`Text for info`,z=[{label:`React`,value:`react`},{label:`Solid`,value:`solid`},{label:`Vue`,value:`vue`}],B=z.map(e=>e.value),V={args:{label:L,labelInfo:R,className:`custom-checkbox`}},H={render:function(){let[e,t]=(0,P.useState)(`indeterminate`);return(0,F.jsx)(u,{label:L,labelInfo:R,checked:e,onCheckedChange:e=>t(e)})}},U={render:()=>(0,F.jsxs)(p,{gap:`var(--3xs)`,children:[(0,F.jsx)(u,{label:L,labelInfo:R,disabled:!0}),(0,F.jsx)(u,{label:L,labelInfo:R,disabled:!0,checked:!0}),(0,F.jsx)(u,{label:L,labelInfo:R,disabled:!0,checked:`indeterminate`})]})},W={args:{label:L,labelInfo:R,readOnly:!0,checked:!0}},G={args:{variant:`warning`}},K={args:{variant:`warning`,label:L,labelInfo:R}},q={render:function(){let[e,t]=(0,P.useState)(`indeterminate`);return(0,F.jsx)(u,{variant:`warning`,label:L,labelInfo:R,checked:e,onCheckedChange:e=>t(e)})}},J={render:function(){let[e,t]=(0,P.useState)([`react`]),[n,r]=(0,P.useState)([`react`]);return(0,F.jsxs)(p,{gap:`var(--3xs)`,children:[(0,F.jsxs)(p,{gap:`var(--3xs)`,children:[(0,F.jsx)(`strong`,{children:`Vertical`}),(0,F.jsxs)(`output`,{className:M.output,children:[`Selected: `,e.join(`, `)]}),(0,F.jsx)(S,{orientation:`vertical`,value:e,onValueChange:t,name:`framework-vertical`,children:z.map(e=>(0,F.jsx)(u,{label:e.label,value:e.value,className:M.groupItem},e.value))})]}),(0,F.jsxs)(p,{gap:`var(--3xs)`,children:[(0,F.jsx)(`strong`,{children:`Horizontal`}),(0,F.jsxs)(`output`,{className:M.output,children:[`Selected: `,n.join(`, `)]}),(0,F.jsx)(S,{orientation:`horizontal`,value:n,onValueChange:r,name:`framework-horizontal`,children:z.map(e=>(0,F.jsx)(u,{label:e.label,value:e.value,className:M.groupItem},e.value))})]})]})}},Y={render:function(){let[e,t]=(0,P.useState)([]),{selectAllState:n,onSelectAllChange:r}=T({value:e,allValues:B,onValueChange:t});return(0,F.jsxs)(p,{gap:`var(--3xs)`,children:[(0,F.jsx)(u,{label:`Select all`,checked:n,onCheckedChange:r}),(0,F.jsx)(S,{className:M.groupIndented,value:e,onValueChange:t,name:`framework`,children:z.map(e=>(0,F.jsx)(u,{label:e.label,value:e.value,className:M.groupItem},e.value))})]})}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    className: 'custom-checkbox'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');
    return <DsCheckbox label={label} labelInfo={labelInfo} checked={checked} onCheckedChange={newState => setChecked(newState)} />;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <DsStack gap="var(--3xs)">
            <DsCheckbox label={label} labelInfo={labelInfo} disabled />
            <DsCheckbox label={label} labelInfo={labelInfo} disabled checked />
            <DsCheckbox label={label} labelInfo={labelInfo} disabled checked="indeterminate" />
        </DsStack>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    readOnly: true,
    checked: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    label,
    labelInfo
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');
    return <DsCheckbox variant="warning" label={label} labelInfo={labelInfo} checked={checked} onCheckedChange={newState => setChecked(newState)} />;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [vertical, setVertical] = useState<string[]>(['react']);
    const [horizontal, setHorizontal] = useState<string[]>(['react']);
    return <DsStack gap="var(--3xs)">
                <DsStack gap="var(--3xs)">
                    <strong>Vertical</strong>
                    <output className={styles.output}>Selected: {vertical.join(', ')}</output>
                    <DsCheckboxGroup orientation="vertical" value={vertical} onValueChange={setVertical} name="framework-vertical">
                        {frameworkItems.map(item => <DsCheckbox key={item.value} label={item.label} value={item.value} className={styles.groupItem} />)}
                    </DsCheckboxGroup>
                </DsStack>

                <DsStack gap="var(--3xs)">
                    <strong>Horizontal</strong>
                    <output className={styles.output}>Selected: {horizontal.join(', ')}</output>
                    <DsCheckboxGroup orientation="horizontal" value={horizontal} onValueChange={setHorizontal} name="framework-horizontal">
                        {frameworkItems.map(item => <DsCheckbox key={item.value} label={item.label} value={item.value} className={styles.groupItem} />)}
                    </DsCheckboxGroup>
                </DsStack>
            </DsStack>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
                    {frameworkItems.map(item => <DsCheckbox key={item.value} label={item.label} value={item.value} className={styles.groupItem} />)}
                </DsCheckboxGroup>
            </DsStack>;
  }
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`Indeterminate`,`Disabled`,`ReadOnly`,`Warning`,`WarningWithLabel`,`WarningIndeterminate`,`Group`,`SelectAll`]}))();export{V as Default,U as Disabled,J as Group,H as Indeterminate,W as ReadOnly,Y as SelectAll,G as Warning,q as WarningIndeterminate,K as WarningWithLabel,X as __namedExportsOrder,I as default};