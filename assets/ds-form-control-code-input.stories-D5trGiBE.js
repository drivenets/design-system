import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CjiQ0Gqr.js";import{n,t as r}from"./ds-button-v3-JsnnMoG0.js";import{n as i,t as a}from"./ds-stack-rLkmoLJd.js";import{n as o,t as s}from"./ds-form-control-RR17YIri.js";import{n as c,t as l}from"./ds-form-control.types-CRY_JX1X.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),c(),o(),u=t(),d={title:`Components/FormControl/CodeInput`,component:s,parameters:{layout:`centered`,docs:{description:{component:`Form control wrapper that adds a label, description, validation status, and message around a code field.`}}},decorators:[e=>(0,u.jsx)(a,{width:`24rem`,children:(0,u.jsx)(e,{})})],argTypes:{status:{control:{type:`select`},options:l,description:`Form control color status`,table:{defaultValue:{summary:l[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},className:{table:{disable:!0}},style:{table:{disable:!0}},children:{table:{disable:!0}}}},f={args:{label:`Query`,required:!0,message:`Expand the field to search within a long query.`,children:(0,u.jsx)(s.CodeInput,{placeholder:`Enter a query`})}},p={args:{label:`Query`,required:!0},render:e=>(0,u.jsxs)(s,{...e,children:[(0,u.jsx)(s.Description,{children:`Combine attribute comparisons with AND, OR and parentheses.`}),(0,u.jsx)(s.CodeInput,{placeholder:`Enter a query`})]})},m={args:{label:`Query`,required:!0,slots:{endAdornment:(0,u.jsx)(r,{variant:`tertiary`,size:`small`,icon:`help`,"aria-label":`Query syntax`})}},render:e=>(0,u.jsx)(s,{...e,children:(0,u.jsx)(s.CodeInput,{defaultValue:`Status = Active AND trigger = Scheduled`})})},h={args:{status:`error`,label:`Query`,message:`Unexpected token near "AND".`,messageIcon:`error`},render:e=>(0,u.jsx)(s,{...e,children:(0,u.jsx)(s.CodeInput,{defaultValue:`Status = Active AND trigger = Scheduled`})})},g={args:{label:`Query`},render:e=>(0,u.jsx)(s,{...e,children:(0,u.jsx)(s.CodeInput,{defaultValue:`Status = Active AND trigger = Scheduled`,disabled:!0})})},_=[`Default`,`WithDescription`,`WithHelpIcon`,`Error`,`Disabled`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Query',
    required: true,
    message: 'Expand the field to search within a long query.',
    children: <DsFormControl.CodeInput placeholder="Enter a query" />
  }
}`,...f.parameters?.docs?.source},description:{story:`Baseline code field with a label, required marker, and a helper message.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Query',
    required: true
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Combine attribute comparisons with AND, OR and parentheses.
            </DsFormControl.Description>
            <DsFormControl.CodeInput placeholder="Enter a query" />
        </DsFormControl>
}`,...p.parameters?.docs?.source},description:{story:`Adds a description above the field to explain the expected syntax.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Query',
    required: true,
    slots: {
      endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="help" aria-label="Query syntax" />
    }
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.CodeInput defaultValue="Status = Active AND trigger = Scheduled" />
        </DsFormControl>
}`,...m.parameters?.docs?.source},description:{story:`Contextual help belongs on the label row. The field itself owns only the expand
toggle, so a help affordance goes here rather than inside the field.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Query',
    message: 'Unexpected token near "AND".',
    messageIcon: 'error'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.CodeInput defaultValue="Status = Active AND trigger = Scheduled" />
        </DsFormControl>
}`,...h.parameters?.docs?.source},description:{story:`Error status flags an invalid expression and pairs the message with an error icon.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Query'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.CodeInput defaultValue="Status = Active AND trigger = Scheduled" disabled />
        </DsFormControl>
}`,...g.parameters?.docs?.source},description:{story:`Disabled still expands so a long value stays searchable, but the editor does not accept edits.`,...g.parameters?.docs?.description}}}})))()}v();export{f as Default,g as Disabled,h as Error,p as WithDescription,m as WithHelpIcon,_ as __namedExportsOrder,d as default};