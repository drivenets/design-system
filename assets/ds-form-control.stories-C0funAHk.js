import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{t as n}from"./ds-icon-DMuQRurV.js";import{t as r}from"./ds-icon-hk1K6-z2.js";import{n as i,t as a}from"./ds-button-v3-r44tD_RJ.js";import{n as o,t as s}from"./ds-stack-GU0hZWeR.js";import{i as c,n as l,r as u,t as d}from"./ds-form-control.types-BLS3WJrz.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{i(),r(),o(),c(),l(),f=t(),p={title:`Components/FormControl/Text`,component:u,parameters:{layout:`centered`,docs:{description:{component:`Form control wrapper that adds a label, description, validation status, and message around a text input.`}}},decorators:[e=>(0,f.jsx)(s,{width:`19rem`,children:(0,f.jsx)(e,{})})],argTypes:{status:{control:{type:`select`},options:d,description:`Form control color status`,table:{defaultValue:{summary:d[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},messageIcon:{control:`text`,description:`Icon to display in the message`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},m={args:{label:`Input label`,required:!0,message:`This is a message`,children:(0,f.jsx)(u.TextInput,{placeholder:`Input`})}},h={args:{label:`Input label`,required:!0},render:e=>(0,f.jsxs)(u,{...e,children:[(0,f.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(u.TextInput,{placeholder:`Search`,slots:{startAdornment:(0,f.jsx)(n,{icon:`search`,size:`tiny`})}})]})},g={args:{label:`Input label`,required:!0,slots:{endAdornment:(0,f.jsx)(a,{variant:`tertiary`,size:`small`,icon:`info`,"aria-label":`Help`})}},render:e=>(0,f.jsxs)(u,{...e,children:[(0,f.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(u.TextInput,{placeholder:`Search`,slots:{startAdornment:(0,f.jsx)(n,{icon:`search`,size:`tiny`})}})]})},_={args:{label:`Input label`,required:!0,message:`This is a message`,children:(0,f.jsx)(u.TextInput,{placeholder:`Input`,slots:{startAdornment:(0,f.jsx)(n,{icon:`call`,size:`tiny`})}})}},v={args:{status:`success`,label:`Input label`,message:`This is a success caption under a text input.`,messageIcon:`check_circle`},render:e=>(0,f.jsxs)(u,{...e,children:[(0,f.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(u.TextInput,{type:`text`,slots:{endAdornment:(0,f.jsx)(n,{icon:`visibility`,size:`tiny`})}})]})},y={args:{status:`error`,label:`Input label`,message:`This is an error caption under a text input.`,messageIcon:`error`},render:e=>(0,f.jsxs)(u,{...e,children:[(0,f.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(u.TextInput,{slots:{startAdornment:(0,f.jsx)(n,{icon:`search`,size:`tiny`}),endAdornment:(0,f.jsx)(n,{icon:`error`,size:`tiny`})}})]})},b={args:{status:`warning`,label:`Input label`,message:`This is a warning caption under a text input.`,messageIcon:`info`},render:e=>(0,f.jsxs)(u,{...e,children:[(0,f.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(u.TextInput,{})]})},x={args:{label:`Input label`,required:!0,children:(0,f.jsx)(u.TextInput,{placeholder:`Disabled Input`,disabled:!0})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    message: 'This is a message',
    children: <DsFormControl.TextInput placeholder="Input" />
  }
}`,...m.parameters?.docs?.source},description:{story:`Baseline text field with a label, required marker, and a helper message.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.TextInput placeholder="Search" slots={{
      startAdornment: <DsIcon icon="search" size="tiny" />
    }} />
        </DsFormControl>
}`,...h.parameters?.docs?.source},description:{story:`Adds a description above the input to explain the field before the user types.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    slots: {
      endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="info" aria-label="Help" />
    }
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.TextInput placeholder="Search" slots={{
      startAdornment: <DsIcon icon="search" size="tiny" />
    }} />
        </DsFormControl>
}`,...g.parameters?.docs?.source},description:{story:`Surfaces contextual help through an end-adornment button beside the field.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    message: 'This is a message',
    children: <DsFormControl.TextInput placeholder="Input" slots={{
      startAdornment: <DsIcon icon="call" size="tiny" />
    }} />
  }
}`,..._.parameters?.docs?.source},description:{story:`Decorates the input with a leading icon to hint at the expected content.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success',
    label: 'Input label',
    message: 'This is a success caption under a text input.',
    messageIcon: 'check_circle'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.TextInput type="text" slots={{
      endAdornment: <DsIcon icon="visibility" size="tiny" />
    }} />
        </DsFormControl>
}`,...v.parameters?.docs?.source},description:{story:`Success status confirms the entered value passed validation.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Input label',
    message: 'This is an error caption under a text input.',
    messageIcon: 'error'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.TextInput slots={{
      startAdornment: <DsIcon icon="search" size="tiny" />,
      endAdornment: <DsIcon icon="error" size="tiny" />
    }} />
        </DsFormControl>
}`,...y.parameters?.docs?.source},description:{story:`Error status flags an invalid value and pairs the message with an error icon.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    label: 'Input label',
    message: 'This is a warning caption under a text input.',
    messageIcon: 'info'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.TextInput />
        </DsFormControl>
}`,...b.parameters?.docs?.source},description:{story:`Warning status highlights a value that needs attention without blocking submission.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    children: <DsFormControl.TextInput placeholder="Disabled Input" disabled />
  }
}`,...x.parameters?.docs?.source},description:{story:`Disabled state prevents interaction while keeping the field visible.`,...x.parameters?.docs?.description}}},S=[`Default`,`WithDescription`,`WithHelpIcon`,`WithIcon`,`Success`,`Error`,`Warning`,`Disabled`]}))();export{m as Default,x as Disabled,y as Error,v as Success,b as Warning,h as WithDescription,g as WithHelpIcon,_ as WithIcon,S as __namedExportsOrder,p as default};