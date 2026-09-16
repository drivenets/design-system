import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-B7s6RIoB.js";import{n as r,t as i}from"./ds-stack-DbPEq4gn.js";import{n as a,t as o}from"./ds-form-control-DAXZmyv9.js";import{n as s,t as c}from"./ds-form-control.types-CRY_JX1X.js";var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{l=t(),a(),r(),s(),u=n(),d={title:`Components/FormControl/TimePicker`,component:o,parameters:{layout:`centered`,docs:{description:{component:`Form control wrapper that adds a label, description, validation status, and message around a time picker.`}}},decorators:[e=>(0,u.jsx)(i,{width:`19rem`,children:(0,u.jsx)(e,{})})],argTypes:{status:{control:{type:`select`},options:c},label:{control:`text`},required:{control:`boolean`},message:{control:`text`},messageIcon:{control:`text`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},f={args:{label:`Start Time`,required:!0,message:`Select a time`,children:(0,u.jsx)(o.TimePicker,{})}},p={args:{label:`Start Time`,required:!0},render:e=>(0,u.jsxs)(o,{...e,children:[(0,u.jsx)(o.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,u.jsx)(o.TimePicker,{})]})},m={args:{status:`error`,label:`Start Time`,required:!0,message:`Time is required.`,messageIcon:`error`},render:e=>(0,u.jsxs)(o,{...e,children:[(0,u.jsx)(o.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,u.jsx)(o.TimePicker,{})]})},h={args:{label:`Start Time`,children:(0,u.jsx)(o.TimePicker,{disabled:!0})}},g={args:{label:`Business Hours`,message:`Select a time between 9:00 AM and 5:00 PM`},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,l.useState)(null);return(0,u.jsx)(o,{...e,children:(0,u.jsx)(o.TimePicker,{value:t,onChange:n,min:new Date(`2026-01-15T09:00:00`),max:new Date(`2026-01-15T17:00:00`)})})}},_={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,l.useState)(null),[n,r]=(0,l.useState)(!1),i=n&&!e?`Time is required`:void 0;return(0,u.jsx)(o,{label:`Start Time`,required:!0,status:i?`error`:void 0,messageIcon:`cancel`,message:i,children:(0,u.jsx)(o.TimePicker,{value:e,onChange:e=>{t(e),r(!0)}})})}},v=[`Default`,`WithDescription`,`Error`,`Disabled`,`WithMinMax`,`WithValidation`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start Time',
    required: true,
    message: 'Select a time',
    children: <DsFormControl.TimePicker />
  }
}`,...f.parameters?.docs?.source},description:{story:`Baseline time picker with a label, required marker, and a helper message.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start Time',
    required: true
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.TimePicker />
        </DsFormControl>
}`,...p.parameters?.docs?.source},description:{story:`Adds a description above the picker to explain the field before the user selects.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Start Time',
    required: true,
    message: 'Time is required.',
    messageIcon: 'error'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.TimePicker />
        </DsFormControl>
}`,...m.parameters?.docs?.source},description:{story:`Error status flags a missing time and pairs the message with an error icon.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start Time',
    children: <DsFormControl.TimePicker disabled />
  }
}`,...h.parameters?.docs?.source},description:{story:`Disabled state prevents interaction while keeping the field visible.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business Hours',
    message: 'Select a time between 9:00 AM and 5:00 PM'
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [value, setValue] = useState<Date | null>(null);
    return <DsFormControl {...args}>
                <DsFormControl.TimePicker value={value} onChange={setValue} min={new Date('2026-01-15T09:00:00')} max={new Date('2026-01-15T17:00:00')} />
            </DsFormControl>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Constrains selectable times to a business-hours window via min and max.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<Date | null>(null);
    const [touched, setTouched] = useState(false);
    const error = touched && !value ? 'Time is required' : undefined;
    return <DsFormControl label="Start Time" required status={error ? 'error' : undefined} messageIcon="cancel" message={error}>
                <DsFormControl.TimePicker value={value} onChange={v => {
        setValue(v);
        setTouched(true);
      }} />
            </DsFormControl>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Controlled picker that surfaces a required-field error once the field is touched.`,..._.parameters?.docs?.description}}}})))()}y();export{f as Default,h as Disabled,m as Error,p as WithDescription,g as WithMinMax,_ as WithValidation,v as __namedExportsOrder,d as default};