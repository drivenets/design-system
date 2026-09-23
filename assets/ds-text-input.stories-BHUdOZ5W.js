import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CIo2UmkR.js";import{n as r,t as i}from"./ds-icon-DGGihbrn.js";import{n as a,t as o}from"./ds-button-v3-CyfySbL-.js";import{n as s,t as c}from"./ds-stack-DBH-wF-7.js";import{n as l,t as u}from"./ds-text-input-BRJq0hp8.js";import{n as d,t as f}from"./ds-text-input.types-DdTSUz4s.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{p=t(),l(),f(),a(),i(),s(),m=n(),h={title:`Components/TextInput`,component:u,parameters:{layout:`centered`,docs:{description:{component:"A flexible single-line text input that supports sizes, disabled/read-only states, and start/end adornments via the `slots` prop."}}},decorators:[e=>(0,m.jsx)(c,{width:`16rem`,children:(0,m.jsx)(e,{})})],argTypes:{size:{control:`select`,options:d,description:`The size of the input field`},disabled:{control:`boolean`,description:`Whether the input is disabled`},placeholder:{control:`text`,description:`The placeholder text`},value:{control:`text`,description:`The current value`},onChange:{table:{disable:!0}},onValueChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},g={args:{placeholder:`Enter text...`}},_={args:{size:`small`,placeholder:`Small input...`}},v={args:{size:`large`,placeholder:`Large input...`}},y={args:{value:`Hello World`,placeholder:`Enter text...`}},b={args:{placeholder:`Disabled input`,disabled:!0}},x={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,p.useState)(`initial value`);return(0,m.jsxs)(c,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,children:[(0,m.jsx)(u,{placeholder:`Controlled input`,value:e,onValueChange:t}),(0,m.jsxs)(c,{gap:`var(--2xs)`,children:[(0,m.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t(`updated value`),children:`Update value`}),(0,m.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t(``),children:`Clear value`})]})]})}},S={args:{placeholder:`Search...`,slots:{startAdornment:(0,m.jsx)(r,{icon:`search`,size:`tiny`})}}},C={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,p.useState)(``);return(0,m.jsx)(u,{placeholder:`Enter text...`,value:e,onValueChange:t,slots:{endAdornment:(0,m.jsx)(o,{variant:`tertiary`,size:`small`,icon:`close`,"aria-label":`Clear`,onClick:()=>t(``)})}})}},w={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,p.useState)(``);return(0,m.jsx)(u,{placeholder:`Search...`,value:e,onValueChange:t,slots:{startAdornment:(0,m.jsx)(r,{icon:`search`,size:`tiny`}),endAdornment:(0,m.jsx)(o,{variant:`tertiary`,size:`small`,icon:`close`,"aria-label":`Clear`,onClick:()=>t(``)})}})}},T={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,p.useState)(``);return(0,m.jsx)(u,{type:`email`,placeholder:`Enter email address...`,value:e,onValueChange:t,slots:{endAdornment:(0,m.jsx)(o,{variant:`tertiary`,size:`small`,icon:`send`,"aria-label":`Send`})}})}},E={args:{value:`Disabled value`,disabled:!0,slots:{startAdornment:(0,m.jsx)(o,{variant:`tertiary`,size:`small`,icon:`lock`,"aria-label":`Locked`,disabled:!0}),endAdornment:(0,m.jsx)(o,{variant:`tertiary`,size:`small`,icon:`visibility`,"aria-label":`Toggle visibility`,disabled:!0})}}},D=[`Default`,`Small`,`Large`,`WithValue`,`Disabled`,`Controlled`,`WithStartAdornment`,`WithClearButton`,`WithSearchAndClear`,`Email`,`DisabledAdornments`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...g.parameters?.docs?.source},description:{story:`The default single-line text input. Use it for free-form short text such as
names, titles, or search terms.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    placeholder: 'Small input...'
  }
}`,..._.parameters?.docs?.source},description:{story:`Compact input for dense forms and toolbars where vertical space is limited.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: 'Large input...'
  }
}`,...v.parameters?.docs?.source},description:{story:`Larger input for prominent, standalone fields such as a primary search box.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...'
  }
}`,...y.parameters?.docs?.source},description:{story:"Pre-filled input rendered with an initial `value`. Use `defaultValue` for\nuncontrolled fields, or `value` when the parent owns the state.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...b.parameters?.docs?.source},description:{story:`Disabled input that cannot be focused or edited. Use for fields that are
temporarily unavailable.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('initial value');
    return <DsStack direction="column" gap="var(--sm)" alignItems="center">
                <DsTextInput placeholder="Controlled input" value={value} onValueChange={setValue} />
                <DsStack gap="var(--2xs)">
                    <DsButtonV3 variant="secondary" size="small" onClick={() => setValue('updated value')}>
                        Update value
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={() => setValue('')}>
                        Clear value
                    </DsButtonV3>
                </DsStack>
            </DsStack>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Controlled input where the parent owns the value via `value` and\n`onValueChange`. Use this pattern when other UI needs to react to the value.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    slots: {
      startAdornment: <DsIcon icon="search" size="tiny" />
    }
  }
}`,...S.parameters?.docs?.source},description:{story:"Prefix the field with an icon using `slots.startAdornment`, for example a\nsearch glyph on a search input.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsTextInput placeholder="Enter text..." value={value} onValueChange={setValue} slots={{
      endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="close" aria-label="Clear" onClick={() => setValue('')} />
    }} />;
  }
}`,...C.parameters?.docs?.source},description:{story:"Append an interactive control with `slots.endAdornment`, such as a clear\nbutton that resets the controlled value.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsTextInput placeholder="Search..." value={value} onValueChange={setValue} slots={{
      startAdornment: <DsIcon icon="search" size="tiny" />,
      endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="close" aria-label="Clear" onClick={() => setValue('')} />
    }} />;
  }
}`,...w.parameters?.docs?.source},description:{story:`Combine start and end adornments — here a search icon and a clear button — to
build a compact search field.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsTextInput type="email" placeholder="Enter email address..." value={value} onValueChange={setValue} slots={{
      endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="send" aria-label="Send" />
    }} />;
  }
}`,...T.parameters?.docs?.source},description:{story:'Set `type="email"` for email entry and pair it with a send adornment. The\n`type` prop flows through to the native input for validation and keyboards.',...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Disabled value',
    disabled: true,
    slots: {
      startAdornment: <DsButtonV3 variant="tertiary" size="small" icon="lock" aria-label="Locked" disabled />,
      endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="visibility" aria-label="Toggle visibility" disabled />
    }
  }
}`,...E.parameters?.docs?.source},description:{story:`Adornments inherit the disabled state of the input, so icon buttons render
muted and non-interactive when the field is disabled.`,...E.parameters?.docs?.description}}}})))()}O();export{x as Controlled,g as Default,b as Disabled,E as DisabledAdornments,T as Email,v as Large,_ as Small,C as WithClearButton,w as WithSearchAndClear,S as WithStartAdornment,y as WithValue,D as __namedExportsOrder,h as default};