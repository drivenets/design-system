import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./compiler-runtime-Ct8J1Lnh.js";import{t as a}from"./classnames-Bkdxq3RN.js";import{i as o,n as s,o as c,r as l,s as u,t as d}from"./ds-checkbox-C-IQ0zdB.js";import{n as f,t as p}from"./ds-stack-5oRwpvZl.js";var m,h,g,_,v=t((()=>{m=`_root_1i2um_1`,h=`_vertical_1i2um_6`,g=`_horizontal_1i2um_10`,_={root:m,vertical:h,horizontal:g}})),y,b,x,S,C=t((()=>{y=i(),c(),b=e(a(),1),v(),x=r(),S=e=>{let t=(0,y.c)(12),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({orientation:a,className:r,children:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o=_[a===void 0?`vertical`:a],s;t[5]!==r||t[6]!==o?(s=(0,b.default)(_.root,o,r),t[5]=r,t[6]=o,t[7]=s):s=t[7];let c;return t[8]!==n||t[9]!==i||t[10]!==s?(c=(0,x.jsx)(u.Group,{className:s,...i,children:n}),t[8]=n,t[9]=i,t[10]=s,t[11]=c):c=t[11],c},S.displayName=`DsCheckboxGroup`})),w=t((()=>{}));function T({value:e,allValues:t,onValueChange:n,isSelectable:r}){let i=r?t.filter(r):[...t],a=new Set(i),o=e.reduce((e,t)=>a.has(t)?e+1:e,0),s=i.length,c=`indeterminate`;return s===0||o===0?c=!1:o===s&&(c=!0),{selectAllState:c,selectedCount:o,selectableCount:s,onSelectAllChange:t=>{let r=e.filter(e=>!a.has(e));n(t===!0?[...r,...i]:r)}}}var E=t((()=>{})),D=t((()=>{E()})),O=t((()=>{C(),w(),D()})),k,A,j,M,N,P,F,I,L,R,z,B,V,H;t((()=>{k=e(n(),1),d(),O(),f(),l(),A=r(),j={title:`Components/Checkbox`,component:o,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:s},checked:{control:`radio`,options:[!0,!1,`indeterminate`],description:'Controlled checked state. Accepts `true`, `false`, or `"indeterminate"`'},onCheckedChange:{description:`Callback invoked when the checked state changes`},label:{control:`text`,description:`Label for the checkbox`},labelInfo:{control:`text`,description:`Additional label info for the checkbox`},disabled:{control:`boolean`,description:`Disables the checkbox, preventing user interaction`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1}}},M={args:{label:`Enable notifications`,labelInfo:`Receive email updates`}},N={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,k.useState)(!1);return(0,A.jsx)(o,{label:`Enable notifications`,labelInfo:`Receive email updates`,checked:e,onCheckedChange:e=>{typeof e==`boolean`&&t(e)}})}},P={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,k.useState)(`indeterminate`);return(0,A.jsx)(o,{label:`Enable notifications`,labelInfo:`Receive email updates`,checked:e,onCheckedChange:e=>t(e)})}},F={args:{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0,checked:!0}},I={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,A.jsxs)(p,{gap:`var(--3xs)`,children:[(0,A.jsx)(o,{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0}),(0,A.jsx)(o,{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0,checked:!0}),(0,A.jsx)(o,{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0,checked:`indeterminate`})]})},L={args:{label:`Enable notifications`,labelInfo:`Receive email updates`,readOnly:!0,checked:!0}},R={args:{variant:`warning`,label:`Enable notifications`,labelInfo:`Receive email updates`}},z={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,k.useState)(`indeterminate`);return(0,A.jsx)(o,{variant:`warning`,label:`Enable notifications`,labelInfo:`Receive email updates`,checked:e,onCheckedChange:e=>t(e)})}},B={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,k.useState)([`react`]);return(0,A.jsx)(S,{orientation:`vertical`,value:e,onValueChange:t,name:`framework`,children:[{label:`React`,value:`react`},{label:`Solid`,value:`solid`},{label:`Vue`,value:`vue`}].map(e=>(0,A.jsx)(o,{label:e.label,value:e.value},e.value))})}},V={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,k.useState)([]),n=[{label:`React`,value:`react`},{label:`Solid`,value:`solid`},{label:`Vue`,value:`vue`}],{selectAllState:r,onSelectAllChange:i}=T({value:e,allValues:n.map(e=>e.value),onValueChange:t});return(0,A.jsxs)(p,{gap:`var(--3xs)`,children:[(0,A.jsx)(o,{label:`Select all`,checked:r,onCheckedChange:i}),(0,A.jsx)(S,{value:e,onValueChange:t,name:`framework`,children:n.map(e=>(0,A.jsx)(o,{label:e.label,value:e.value},e.value))})]})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    labelInfo: 'Receive email updates'
  }
}`,...M.parameters?.docs?.source},description:{story:"Standalone checkbox with a primary label and supporting info text. Omit\n`checked` for uncontrolled usage; pair with `onCheckedChange` when the\nparent owns state.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <DsCheckbox label="Enable notifications" labelInfo="Receive email updates" checked={checked} onCheckedChange={newState => {
      if (typeof newState === 'boolean') {
        setChecked(newState);
      }
    }} />;
  }
}`,...N.parameters?.docs?.source},description:{story:"Controlled checkbox where the parent holds `checked` and updates it via\n`onCheckedChange`. Use this pattern for forms and settings that sync with\nexternal state.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');
    return <DsCheckbox label="Enable notifications" labelInfo="Receive email updates" checked={checked} onCheckedChange={newState => setChecked(newState)} />;
  }
}`,...P.parameters?.docs?.source},description:{story:`Controlled checkbox in indeterminate state. Use when a parent represents a
partial selection, such as a "select all" row with only some children
checked.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    labelInfo: 'Receive email updates',
    disabled: true,
    checked: true
  }
}`,...F.parameters?.docs?.source},description:{story:'Disabled checkbox that cannot be interacted with. Combine with `checked` or\n`checked="indeterminate"` to show how each visual state appears when inactive.',...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack gap="var(--3xs)">
            <DsCheckbox label="Enable notifications" labelInfo="Receive email updates" disabled />
            <DsCheckbox label="Enable notifications" labelInfo="Receive email updates" disabled checked />
            <DsCheckbox label="Enable notifications" labelInfo="Receive email updates" disabled checked="indeterminate" />
        </DsStack>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    labelInfo: 'Receive email updates',
    readOnly: true,
    checked: true
  }
}`,...L.parameters?.docs?.source},description:{story:`Read-only checkbox displays its state without allowing user changes. Use when
the value is informational and must not be toggled inline.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    label: 'Enable notifications',
    labelInfo: 'Receive email updates'
  }
}`,...R.parameters?.docs?.source},description:{story:`Warning variant for checkboxes that need elevated visual attention, such as
destructive or high-impact opt-ins.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');
    return <DsCheckbox variant="warning" label="Enable notifications" labelInfo="Receive email updates" checked={checked} onCheckedChange={newState => setChecked(newState)} />;
  }
}`,...z.parameters?.docs?.source},description:{story:`Warning variant in a controlled indeterminate state for partial selections
that also need elevated visual attention.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string[]>(['react']);
    const frameworkItems = [{
      label: 'React',
      value: 'react'
    }, {
      label: 'Solid',
      value: 'solid'
    }, {
      label: 'Vue',
      value: 'vue'
    }];
    return <DsCheckboxGroup orientation="vertical" value={value} onValueChange={setValue} name="framework">
                {frameworkItems.map(item => <DsCheckbox key={item.value} label={item.label} value={item.value} />)}
            </DsCheckboxGroup>;
  }
}`,...B.parameters?.docs?.source},description:{story:"Multi-select checkbox group. Compose `DsCheckbox` children inside\n`DsCheckboxGroup`, pass each item a `value`, and control selection with\n`value` / `onValueChange` on the group.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string[]>([]);
    const frameworkItems = [{
      label: 'React',
      value: 'react'
    }, {
      label: 'Solid',
      value: 'solid'
    }, {
      label: 'Vue',
      value: 'vue'
    }];
    const {
      selectAllState,
      onSelectAllChange
    } = useCheckboxSelectAll({
      value,
      allValues: frameworkItems.map(item => item.value),
      onValueChange: setValue
    });
    return <DsStack gap="var(--3xs)">
                <DsCheckbox label="Select all" checked={selectAllState} onCheckedChange={onSelectAllChange} />
                <DsCheckboxGroup value={value} onValueChange={setValue} name="framework">
                    {frameworkItems.map(item => <DsCheckbox key={item.value} label={item.label} value={item.value} />)}
                </DsCheckboxGroup>
            </DsStack>;
  }
}`,...V.parameters?.docs?.source},description:{story:"Select-all pattern for a checkbox group. Use `useCheckboxSelectAll` from\n`ds-checkbox-group` to derive the parent checkbox state and toggle every item.",...V.parameters?.docs?.description}}},H=[`Default`,`Controlled`,`Indeterminate`,`Disabled`,`DisabledStates`,`ReadOnly`,`Warning`,`WarningIndeterminate`,`Group`,`SelectAll`]}))();export{N as Controlled,M as Default,F as Disabled,I as DisabledStates,B as Group,P as Indeterminate,L as ReadOnly,V as SelectAll,R as Warning,z as WarningIndeterminate,H as __namedExportsOrder,j as default};