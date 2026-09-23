import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-CIo2UmkR.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{a as o,i as s,n as c,t as l}from"./ds-checkbox-cj9kgatd.js";import{n as u,t as d}from"./ds-stack-DBH-wF-7.js";var f;function p(){return(p=t((()=>{f=[`default`,`warning`]})))()}var m,h,g,_;function v(){return(v=t((()=>{m=`_root_1i2um_1`,h=`_vertical_1i2um_6`,g=`_horizontal_1i2um_10`,_={root:m,vertical:h,horizontal:g}})))()}var y,b,x,S;function C(){return(C=t((()=>{y=i(),o(),b=e(a(),1),v(),x=r(),S=e=>{let t=(0,y.c)(12),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({orientation:a,className:r,children:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o=_[a===void 0?`vertical`:a],c;t[5]!==r||t[6]!==o?(c=(0,b.default)(_.root,o,r),t[5]=r,t[6]=o,t[7]=c):c=t[7];let l;return t[8]!==n||t[9]!==i||t[10]!==c?(l=(0,x.jsx)(s.Group,{className:c,...i,children:n}),t[8]=n,t[9]=i,t[10]=c,t[11]=l):l=t[11],l},S.displayName=`DsCheckboxGroup`})))()}function w({value:e,allValues:t,onValueChange:n,isSelectable:r}){let i=r?t.filter(r):[...t],a=new Set(i),o=e.reduce((e,t)=>a.has(t)?e+1:e,0),s=i.length,c=`indeterminate`;return s===0||o===0?c=!1:o===s&&(c=!0),{selectAllState:c,selectedCount:o,selectableCount:s,onSelectAllChange:t=>{let r=e.filter(e=>!a.has(e));n(t===!0?[...r,...i]:r)}}}function T(){return(T=t((()=>{C()})))()}var E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=t((()=>{E=n(),l(),T(),u(),p(),D=r(),O={title:`Components/Checkbox`,component:c,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:f},checked:{control:`radio`,options:[!0,!1,`indeterminate`],description:'Controlled checked state. Accepts `true`, `false`, or `"indeterminate"`'},onCheckedChange:{description:`Callback invoked when the checked state changes`},label:{control:`text`,description:`Label for the checkbox`},labelInfo:{control:`text`,description:`Additional label info for the checkbox`},disabled:{control:`boolean`,description:`Disables the checkbox, preventing user interaction`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1}}},k={args:{label:`Enable notifications`,labelInfo:`Receive email updates`}},A={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,E.useState)(!1);return(0,D.jsx)(c,{label:`Enable notifications`,labelInfo:`Receive email updates`,checked:e,onCheckedChange:e=>{typeof e==`boolean`&&t(e)}})}},j={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,E.useState)(`indeterminate`);return(0,D.jsx)(c,{label:`Enable notifications`,labelInfo:`Receive email updates`,checked:e,onCheckedChange:e=>t(e)})}},M={args:{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0,checked:!0}},N={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,D.jsxs)(d,{gap:`var(--3xs)`,children:[(0,D.jsx)(c,{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0}),(0,D.jsx)(c,{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0,checked:!0}),(0,D.jsx)(c,{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0,checked:`indeterminate`})]})},P={args:{label:`Enable notifications`,labelInfo:`Receive email updates`,readOnly:!0,checked:!0}},F={args:{variant:`warning`,label:`Enable notifications`,labelInfo:`Receive email updates`}},I={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,E.useState)(`indeterminate`);return(0,D.jsx)(c,{variant:`warning`,label:`Enable notifications`,labelInfo:`Receive email updates`,checked:e,onCheckedChange:e=>t(e)})}},L={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,E.useState)([`react`]);return(0,D.jsx)(S,{orientation:`vertical`,value:e,onValueChange:t,name:`framework`,children:[{label:`React`,value:`react`},{label:`Solid`,value:`solid`},{label:`Vue`,value:`vue`}].map(e=>(0,D.jsx)(c,{label:e.label,value:e.value},e.value))})}},R={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,E.useState)([]),n=[{label:`React`,value:`react`},{label:`Solid`,value:`solid`},{label:`Vue`,value:`vue`}],{selectAllState:r,onSelectAllChange:i}=w({value:e,allValues:n.map(e=>e.value),onValueChange:t});return(0,D.jsxs)(d,{gap:`var(--3xs)`,children:[(0,D.jsx)(c,{label:`Select all`,checked:r,onCheckedChange:i}),(0,D.jsx)(S,{value:e,onValueChange:t,name:`framework`,children:n.map(e=>(0,D.jsx)(c,{label:e.label,value:e.value},e.value))})]})}},z=[`Default`,`Controlled`,`Indeterminate`,`Disabled`,`DisabledStates`,`ReadOnly`,`Warning`,`WarningIndeterminate`,`Group`,`SelectAll`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    labelInfo: 'Receive email updates'
  }
}`,...k.parameters?.docs?.source},description:{story:"Standalone checkbox with a primary label and supporting info text. Omit\n`checked` for uncontrolled usage; pair with `onCheckedChange` when the\nparent owns state.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"Controlled checkbox where the parent holds `checked` and updates it via\n`onCheckedChange`. Use this pattern for forms and settings that sync with\nexternal state.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`Controlled checkbox in indeterminate state. Use when a parent represents a
partial selection, such as a "select all" row with only some children
checked.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    labelInfo: 'Receive email updates',
    disabled: true,
    checked: true
  }
}`,...M.parameters?.docs?.source},description:{story:'Disabled checkbox that cannot be interacted with. Combine with `checked` or\n`checked="indeterminate"` to show how each visual state appears when inactive.',...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    labelInfo: 'Receive email updates',
    readOnly: true,
    checked: true
  }
}`,...P.parameters?.docs?.source},description:{story:`Read-only checkbox displays its state without allowing user changes. Use when
the value is informational and must not be toggled inline.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    label: 'Enable notifications',
    labelInfo: 'Receive email updates'
  }
}`,...F.parameters?.docs?.source},description:{story:`Warning variant for checkboxes that need elevated visual attention, such as
destructive or high-impact opt-ins.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Warning variant in a controlled indeterminate state for partial selections
that also need elevated visual attention.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:"Multi-select checkbox group. Compose `DsCheckbox` children inside\n`DsCheckboxGroup`, pass each item a `value`, and control selection with\n`value` / `onValueChange` on the group.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"Select-all pattern for a checkbox group. Use `useCheckboxSelectAll` from\n`ds-checkbox-group` to derive the parent checkbox state and toggle every item.",...R.parameters?.docs?.description}}}})))()}B();export{A as Controlled,k as Default,M as Disabled,N as DisabledStates,L as Group,j as Indeterminate,P as ReadOnly,R as SelectAll,F as Warning,I as WarningIndeterminate,z as __namedExportsOrder,O as default};