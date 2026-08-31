import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./ds-icon-BW3ZMuEi.js";import{t as a}from"./ds-icon-m9JGPUU6.js";import{n as o,t as s}from"./ds-button-v3-DKBJbP0e.js";import{n as c,t as l}from"./ds-stack-5oRwpvZl.js";import{i as u,n as d,r as f,t as p}from"./ds-text-input.types-D2sxJ5-2.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;t((()=>{m=e(n(),1),u(),p(),o(),a(),c(),h=r(),g={title:`Components/TextInput`,component:f,parameters:{layout:`centered`,docs:{description:{component:"A flexible single-line text input that supports sizes, disabled/read-only states, and start/end adornments via the `slots` prop."}}},decorators:[e=>(0,h.jsx)(l,{width:`16rem`,children:(0,h.jsx)(e,{})})],argTypes:{size:{control:`select`,options:d,description:`The size of the input field`},disabled:{control:`boolean`,description:`Whether the input is disabled`},placeholder:{control:`text`,description:`The placeholder text`},value:{control:`text`,description:`The current value`},onChange:{table:{disable:!0}},onValueChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},_={args:{placeholder:`Enter text...`}},v={args:{size:`small`,placeholder:`Small input...`}},y={args:{size:`large`,placeholder:`Large input...`}},b={args:{value:`Hello World`,placeholder:`Enter text...`}},x={args:{placeholder:`Disabled input`,disabled:!0}},S={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,m.useState)(`initial value`);return(0,h.jsxs)(l,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,children:[(0,h.jsx)(f,{placeholder:`Controlled input`,value:e,onValueChange:t}),(0,h.jsxs)(l,{gap:`var(--2xs)`,children:[(0,h.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>t(`updated value`),children:`Update value`}),(0,h.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>t(``),children:`Clear value`})]})]})}},C={args:{placeholder:`Search...`,slots:{startAdornment:(0,h.jsx)(i,{icon:`search`,size:`tiny`})}}},w={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsx)(f,{placeholder:`Enter text...`,value:e,onValueChange:t,slots:{endAdornment:(0,h.jsx)(s,{variant:`tertiary`,size:`small`,icon:`close`,"aria-label":`Clear`,onClick:()=>t(``)})}})}},T={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsx)(f,{placeholder:`Search...`,value:e,onValueChange:t,slots:{startAdornment:(0,h.jsx)(i,{icon:`search`,size:`tiny`}),endAdornment:(0,h.jsx)(s,{variant:`tertiary`,size:`small`,icon:`close`,"aria-label":`Clear`,onClick:()=>t(``)})}})}},E={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsx)(f,{type:`email`,placeholder:`Enter email address...`,value:e,onValueChange:t,slots:{endAdornment:(0,h.jsx)(s,{variant:`tertiary`,size:`small`,icon:`send`,"aria-label":`Send`})}})}},D={args:{value:`Disabled value`,disabled:!0,slots:{startAdornment:(0,h.jsx)(s,{variant:`tertiary`,size:`small`,icon:`lock`,"aria-label":`Locked`,disabled:!0}),endAdornment:(0,h.jsx)(s,{variant:`tertiary`,size:`small`,icon:`visibility`,"aria-label":`Toggle visibility`,disabled:!0})}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,..._.parameters?.docs?.source},description:{story:`The default single-line text input. Use it for free-form short text such as
names, titles, or search terms.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    placeholder: 'Small input...'
  }
}`,...v.parameters?.docs?.source},description:{story:`Compact input for dense forms and toolbars where vertical space is limited.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: 'Large input...'
  }
}`,...y.parameters?.docs?.source},description:{story:`Larger input for prominent, standalone fields such as a primary search box.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...'
  }
}`,...b.parameters?.docs?.source},description:{story:"Pre-filled input rendered with an initial `value`. Use `defaultValue` for\nuncontrolled fields, or `value` when the parent owns the state.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...x.parameters?.docs?.source},description:{story:`Disabled input that cannot be focused or edited. Use for fields that are
temporarily unavailable.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Controlled input where the parent owns the value via `value` and\n`onValueChange`. Use this pattern when other UI needs to react to the value.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    slots: {
      startAdornment: <DsIcon icon="search" size="tiny" />
    }
  }
}`,...C.parameters?.docs?.source},description:{story:"Prefix the field with an icon using `slots.startAdornment`, for example a\nsearch glyph on a search input.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Append an interactive control with `slots.endAdornment`, such as a clear\nbutton that resets the controlled value.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`Combine start and end adornments — here a search icon and a clear button — to
build a compact search field.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:'Set `type="email"` for email entry and pair it with a send adornment. The\n`type` prop flows through to the native input for validation and keyboards.',...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Disabled value',
    disabled: true,
    slots: {
      startAdornment: <DsButtonV3 variant="tertiary" size="small" icon="lock" aria-label="Locked" disabled />,
      endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="visibility" aria-label="Toggle visibility" disabled />
    }
  }
}`,...D.parameters?.docs?.source},description:{story:`Adornments inherit the disabled state of the input, so icon buttons render
muted and non-interactive when the field is disabled.`,...D.parameters?.docs?.description}}},O=[`Default`,`Small`,`Large`,`WithValue`,`Disabled`,`Controlled`,`WithStartAdornment`,`WithClearButton`,`WithSearchAndClear`,`Email`,`DisabledAdornments`]}))();export{S as Controlled,_ as Default,x as Disabled,D as DisabledAdornments,E as Email,y as Large,v as Small,w as WithClearButton,T as WithSearchAndClear,C as WithStartAdornment,b as WithValue,O as __namedExportsOrder,g as default};