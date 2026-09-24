import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-BeLkEoK-.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{a as o,i as s,n as c,t as l}from"./ds-checkbox-DuxkL4gg.js";import{n as u,t as d}from"./ds-stack-C0edFJ2v.js";import{n as f,t as p}from"./ds-pin-toggle-BdklGetg.js";var m,h;function g(){return(g=t((()=>{m=[`default`,`warning`],h=[`medium`,`large`]})))()}var _,v,y,b;function x(){return(x=t((()=>{_=`_root_1i2um_1`,v=`_vertical_1i2um_6`,y=`_horizontal_1i2um_10`,b={root:_,vertical:v,horizontal:y}})))()}var S,C,w,T;function E(){return(E=t((()=>{S=i(),o(),C=e(a(),1),x(),w=r(),T=e=>{let t=(0,S.c)(12),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({orientation:a,className:r,children:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o=b[a===void 0?`vertical`:a],c;t[5]!==r||t[6]!==o?(c=(0,C.default)(b.root,o,r),t[5]=r,t[6]=o,t[7]=c):c=t[7];let l;return t[8]!==n||t[9]!==i||t[10]!==c?(l=(0,w.jsx)(s.Group,{className:c,...i,children:n}),t[8]=n,t[9]=i,t[10]=c,t[11]=l):l=t[11],l},T.displayName=`DsCheckboxGroup`})))()}function D({value:e,allValues:t,onValueChange:n,isSelectable:r}){let i=r?t.filter(r):[...t],a=new Set(i),o=e.reduce((e,t)=>a.has(t)?e+1:e,0),s=i.length,c=`indeterminate`;return s===0||o===0?c=!1:o===s&&(c=!0),{selectAllState:c,selectedCount:o,selectableCount:s,onSelectAllChange:t=>{let r=e.filter(e=>!a.has(e));n(t===!0?[...r,...i]:r)}}}function O(){return(O=t((()=>{E()})))()}var k,A;function j(){return(j=t((()=>{k=`_filterList_1wnoe_1`,A={filterList:k}})))()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;function Z(){return(Z=t((()=>{M=n(),l(),O(),p(),u(),j(),g(),N=r(),P={title:`Components/Checkbox`,component:c,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:m},size:{control:`select`,options:h,description:`Row padding only — typography and control size are identical across sizes`},checked:{control:`radio`,options:[!0,!1,`indeterminate`],description:'Controlled checked state. Accepts `true`, `false`, or `"indeterminate"`'},onCheckedChange:{description:`Callback invoked when the checked state changes`},label:{control:`text`,description:`Label for the checkbox`},labelInfo:{control:`text`,description:`Additional label info for the checkbox`},disabled:{control:`boolean`,description:`Disables the checkbox, preventing user interaction`},actions:{control:!1,description:`Trailing slot for interactive content, rendered outside the checkbox label`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1}}},F={args:{label:`Enable notifications`,labelInfo:`Receive email updates`}},I={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,M.useState)(!1);return(0,N.jsx)(c,{label:`Enable notifications`,labelInfo:`Receive email updates`,checked:e,onCheckedChange:e=>{typeof e==`boolean`&&t(e)}})}},L={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,M.useState)(`indeterminate`);return(0,N.jsx)(c,{label:`Enable notifications`,labelInfo:`Receive email updates`,checked:e,onCheckedChange:e=>t(e)})}},R={args:{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0,checked:!0}},z={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,N.jsxs)(d,{gap:`var(--3xs)`,children:[(0,N.jsx)(c,{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0}),(0,N.jsx)(c,{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0,checked:!0}),(0,N.jsx)(c,{label:`Enable notifications`,labelInfo:`Receive email updates`,disabled:!0,checked:`indeterminate`})]})},B={args:{label:`Enable notifications`,labelInfo:`Receive email updates`,readOnly:!0,checked:!0}},V={args:{variant:`warning`,label:`Enable notifications`,labelInfo:`Receive email updates`}},H={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,M.useState)(`indeterminate`);return(0,N.jsx)(c,{variant:`warning`,label:`Enable notifications`,labelInfo:`Receive email updates`,checked:e,onCheckedChange:e=>t(e)})}},U={args:{size:`large`,label:`Enable notifications`,labelInfo:`Receive email updates`}},W={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,N.jsxs)(d,{gap:`var(--3xs)`,children:[(0,N.jsx)(c,{size:`medium`,label:`Medium`,labelInfo:`Receive email updates`}),(0,N.jsx)(c,{size:`large`,label:`Large`,labelInfo:`Receive email updates`})]})},G={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,M.useState)(!1);return(0,N.jsx)(c,{label:`Enable notifications`,actions:(0,N.jsx)(f,{itemLabel:`notifications`,pinned:e,onPinnedChange:t})})}},K={args:{size:`large`,label:`Enable notifications`,labelInfo:`Receive email updates`,actions:(0,N.jsx)(f,{itemLabel:`notifications`,pinned:!0})}},q={parameters:{layout:`padded`,docs:{source:{type:`code`}}},render:function(){let e=[`ge-0/0/0`,`ge-0/0/1`,`ge-0/0/2`,`ge-0/0/3`,`xe-0/1/0`,`xe-0/1/1`,`xe-0/1/2`,`et-0/2/0`,`et-0/2/1`,`et-0/2/2`,`lo0`,`bundle-1`,`bundle-2`,`mgmt-0`,`mgmt-1`],[t,n]=(0,M.useState)([`xe-0/1/1`,`lo0`]),[r,i]=(0,M.useState)([]),a=e=>t.includes(e);return(0,N.jsx)(`div`,{className:A.filterList,children:(0,N.jsx)(T,{value:r,onValueChange:i,name:`interfaces`,children:e.map(e=>(0,N.jsx)(c,{label:e,value:e,actions:(0,N.jsx)(f,{itemLabel:e,pinned:a(e),onPinnedChange:t=>n(n=>t?[...n,e]:n.filter(t=>t!==e))})},e))})})}},J={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,M.useState)([`react`]);return(0,N.jsx)(T,{orientation:`vertical`,value:e,onValueChange:t,name:`framework`,children:[{label:`React`,value:`react`},{label:`Solid`,value:`solid`},{label:`Vue`,value:`vue`}].map(e=>(0,N.jsx)(c,{label:e.label,value:e.value},e.value))})}},Y={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,M.useState)([]),n=[{label:`React`,value:`react`},{label:`Solid`,value:`solid`},{label:`Vue`,value:`vue`}],{selectAllState:r,onSelectAllChange:i}=D({value:e,allValues:n.map(e=>e.value),onValueChange:t});return(0,N.jsxs)(d,{gap:`var(--3xs)`,children:[(0,N.jsx)(c,{label:`Select all`,checked:r,onCheckedChange:i}),(0,N.jsx)(T,{value:e,onValueChange:t,name:`framework`,children:n.map(e=>(0,N.jsx)(c,{label:e.label,value:e.value},e.value))})]})}},X=[`Default`,`Controlled`,`Indeterminate`,`Disabled`,`DisabledStates`,`ReadOnly`,`Warning`,`WarningIndeterminate`,`Large`,`Sizes`,`WithActions`,`LargeWithActions`,`PinnedFilterList`,`Group`,`SelectAll`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    labelInfo: 'Receive email updates'
  }
}`,...F.parameters?.docs?.source},description:{story:"Standalone checkbox with a primary label and supporting info text. Omit\n`checked` for uncontrolled usage; pair with `onCheckedChange` when the\nparent owns state.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:"Controlled checkbox where the parent holds `checked` and updates it via\n`onCheckedChange`. Use this pattern for forms and settings that sync with\nexternal state.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`Controlled checkbox in indeterminate state. Use when a parent represents a
partial selection, such as a "select all" row with only some children
checked.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    labelInfo: 'Receive email updates',
    disabled: true,
    checked: true
  }
}`,...R.parameters?.docs?.source},description:{story:'Disabled checkbox that cannot be interacted with. Combine with `checked` or\n`checked="indeterminate"` to show how each visual state appears when inactive.',...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    labelInfo: 'Receive email updates',
    readOnly: true,
    checked: true
  }
}`,...B.parameters?.docs?.source},description:{story:`Read-only checkbox displays its state without allowing user changes. Use when
the value is informational and must not be toggled inline.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    label: 'Enable notifications',
    labelInfo: 'Receive email updates'
  }
}`,...V.parameters?.docs?.source},description:{story:`Warning variant for checkboxes that need elevated visual attention, such as
destructive or high-impact opt-ins.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Warning variant in a controlled indeterminate state for partial selections
that also need elevated visual attention.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Enable notifications',
    labelInfo: 'Receive email updates'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack gap="var(--3xs)">
            <DsCheckbox size="medium" label="Medium" labelInfo="Receive email updates" />
            <DsCheckbox size="large" label="Large" labelInfo="Receive email updates" />
        </DsStack>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [pinned, setPinned] = useState(false);
    return <DsCheckbox label="Enable notifications" actions={<DsPinToggle itemLabel="notifications" pinned={pinned} onPinnedChange={setPinned} />} />;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Enable notifications',
    labelInfo: 'Receive email updates',
    actions: <DsPinToggle itemLabel="notifications" pinned />
  }
}`,...K.parameters?.docs?.source},description:{story:"`actions` stays centred on the label row regardless of size or `labelInfo`, so\na pinned `large` row lines up with its unpinned neighbors.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const interfaces = ['ge-0/0/0', 'ge-0/0/1', 'ge-0/0/2', 'ge-0/0/3', 'xe-0/1/0', 'xe-0/1/1', 'xe-0/1/2', 'et-0/2/0', 'et-0/2/1', 'et-0/2/2', 'lo0', 'bundle-1', 'bundle-2', 'mgmt-0', 'mgmt-1'];
    const [pinned, setPinned] = useState<string[]>(['xe-0/1/1', 'lo0']);
    const [selected, setSelected] = useState<string[]>([]);
    const isPinned = (name: string) => pinned.includes(name);
    return <div className={styles.filterList}>
                <DsCheckboxGroup value={selected} onValueChange={setSelected} name="interfaces">
                    {interfaces.map(name => <DsCheckbox key={name} label={name} value={name} actions={<DsPinToggle itemLabel={name} pinned={isPinned(name)} onPinnedChange={next => setPinned(current => next ? [...current, name] : current.filter(pin => pin !== name))} />} />)}
                </DsCheckboxGroup>
            </div>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:"Multi-select checkbox group. Compose `DsCheckbox` children inside\n`DsCheckboxGroup`, pass each item a `value`, and control selection with\n`value` / `onValueChange` on the group.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:"Select-all pattern for a checkbox group. Use `useCheckboxSelectAll` from\n`ds-checkbox-group` to derive the parent checkbox state and toggle every item.",...Y.parameters?.docs?.description}}}})))()}Z();export{I as Controlled,F as Default,R as Disabled,z as DisabledStates,J as Group,L as Indeterminate,U as Large,K as LargeWithActions,q as PinnedFilterList,B as ReadOnly,Y as SelectAll,W as Sizes,V as Warning,H as WarningIndeterminate,G as WithActions,X as __namedExportsOrder,P as default};