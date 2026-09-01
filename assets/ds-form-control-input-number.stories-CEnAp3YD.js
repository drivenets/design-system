import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-button-v3-r44tD_RJ.js";import{n as i,t as a}from"./ds-stack-GU0hZWeR.js";import{i as o,n as s,r as c,t as l}from"./ds-form-control.types-BLS3WJrz.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{s(),n(),i(),o(),u=t(),d={title:`Components/FormControl/Number`,component:c,parameters:{layout:`centered`,docs:{description:{component:`Form control wrapper that adds a label, description, validation status, and message around a number input.`}}},decorators:[e=>(0,u.jsx)(a,{width:`19rem`,children:(0,u.jsx)(e,{})})],argTypes:{status:{control:{type:`select`},options:l,description:`Form control color status`,table:{defaultValue:{summary:l[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},messageIcon:{control:`text`,description:`Icon to display in the message`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},f={args:{label:`Input label`,required:!0,message:`This is a message`,children:(0,u.jsx)(c.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})}},p={args:{label:`Input label`,required:!0},render:e=>(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,u.jsx)(c.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})]})},m={args:{label:`Input label`,required:!0,slots:{endAdornment:(0,u.jsx)(r,{variant:`tertiary`,size:`small`,icon:`info`,"aria-label":`Help`})}},render:e=>(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,u.jsx)(c.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})]})},h={args:{status:`success`,label:`Input label`,message:`This is a success caption under a number input.`,messageIcon:`check_circle`},render:e=>(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,u.jsx)(c.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})]})},g={args:{status:`error`,label:`Input label`,message:`This is an error caption under a number input.`,messageIcon:`error`},render:e=>(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,u.jsx)(c.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})]})},_={args:{status:`warning`,label:`Input label`,message:`This is a warning caption under a number input.`,messageIcon:`info`},render:e=>(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,u.jsx)(c.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})]})},v={args:{label:`Input label`},render:e=>(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,u.jsx)(c.NumberInput,{placeholder:`Disabled Input`,disabled:!0,min:1,max:100,step:1,defaultValue:10})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    message: 'This is a message',
    children: <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
  }
}`,...f.parameters?.docs?.source},description:{story:`Baseline number field with min/max bounds, stepper, and a helper message.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
        </DsFormControl>
}`,...p.parameters?.docs?.source},description:{story:`Adds a description above the input to explain the field before the user types.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
            <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
        </DsFormControl>
}`,...m.parameters?.docs?.source},description:{story:`Surfaces contextual help through an end-adornment button beside the field.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success',
    label: 'Input label',
    message: 'This is a success caption under a number input.',
    messageIcon: 'check_circle'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
        </DsFormControl>
}`,...h.parameters?.docs?.source},description:{story:`Success status confirms the entered value passed validation.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Input label',
    message: 'This is an error caption under a number input.',
    messageIcon: 'error'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
        </DsFormControl>
}`,...g.parameters?.docs?.source},description:{story:`Error status flags an invalid value and pairs the message with an error icon.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    label: 'Input label',
    message: 'This is a warning caption under a number input.',
    messageIcon: 'info'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
        </DsFormControl>
}`,..._.parameters?.docs?.source},description:{story:`Warning status highlights a value that needs attention without blocking submission.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.NumberInput placeholder="Disabled Input" disabled min={1} max={100} step={1} defaultValue={10} />
        </DsFormControl>
}`,...v.parameters?.docs?.source},description:{story:`Disabled state prevents interaction while keeping the field visible.`,...v.parameters?.docs?.description}}},y=[`Default`,`WithDescription`,`WithHelpIcon`,`Success`,`Error`,`Warning`,`Disabled`]}))();export{f as Default,v as Disabled,g as Error,h as Success,_ as Warning,p as WithDescription,m as WithHelpIcon,y as __namedExportsOrder,d as default};