import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-stack-GU0hZWeR.js";import{i as o,n as s,r as c,t as l}from"./ds-form-control.types-BLS3WJrz.js";var u,d,f,p,m,h,g,_,v,y;t((()=>{u=e(n(),1),o(),i(),s(),d=r(),f={title:`Components/FormControl/DatePicker`,component:c,parameters:{layout:`centered`,docs:{description:{component:`Form control wrapper that adds a label, description, validation status, and message around a date picker.`}}},decorators:[e=>(0,d.jsx)(a,{width:`19rem`,children:(0,d.jsx)(e,{})})],argTypes:{status:{control:{type:`select`},options:l},label:{control:`text`},required:{control:`boolean`},message:{control:`text`},messageIcon:{control:`text`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},p={args:{label:`Event Date`,required:!0,message:`Select a date for your event`,children:(0,d.jsx)(c.DatePicker,{})}},m={args:{label:`Appointment`,message:`Select date and time`,children:(0,d.jsx)(c.DatePicker,{withTime:!0})}},h={args:{label:`Event Date`,required:!0},render:e=>(0,d.jsxs)(c,{...e,children:[(0,d.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,d.jsx)(c.DatePicker,{})]})},g={args:{status:`error`,label:`Event Date`,required:!0,message:`Date is required.`,messageIcon:`error`},render:e=>(0,d.jsxs)(c,{...e,children:[(0,d.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,d.jsx)(c.DatePicker,{})]})},_={args:{label:`Event Date`,children:(0,d.jsx)(c.DatePicker,{disabled:!0})}},v={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,u.useState)(null),[n,r]=(0,u.useState)(!1),i=n&&!e?`Date is required`:void 0;return(0,d.jsx)(c,{label:`Event Date`,required:!0,status:i?`error`:void 0,messageIcon:`cancel`,message:i,children:(0,d.jsx)(c.DatePicker,{value:e,onChange:e=>{t(e),r(!0)}})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    message: 'Select a date for your event',
    children: <DsFormControl.DatePicker />
  }
}`,...p.parameters?.docs?.source},description:{story:`Baseline date picker with a label, required marker, and a helper message.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Appointment',
    message: 'Select date and time',
    children: <DsFormControl.DatePicker withTime />
  }
}`,...m.parameters?.docs?.source},description:{story:`Enables time selection alongside the date for appointment-style fields.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.DatePicker />
        </DsFormControl>
}`,...h.parameters?.docs?.source},description:{story:`Adds a description above the picker to explain the field before the user selects.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Event Date',
    required: true,
    message: 'Date is required.',
    messageIcon: 'error'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.DatePicker />
        </DsFormControl>
}`,...g.parameters?.docs?.source},description:{story:`Error status flags a missing date and pairs the message with an error icon.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    children: <DsFormControl.DatePicker disabled />
  }
}`,..._.parameters?.docs?.source},description:{story:`Disabled state prevents interaction while keeping the field visible.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    const error = touched && !value ? 'Date is required' : undefined;
    return <DsFormControl label="Event Date" required status={error ? 'error' : undefined} messageIcon="cancel" message={error}>
                <DsFormControl.DatePicker value={value} onChange={v => {
        setValue(v);
        setTouched(true);
      }} />
            </DsFormControl>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Controlled picker that surfaces a required-field error once the field is touched.`,...v.parameters?.docs?.description}}},y=[`Default`,`WithTime`,`WithDescription`,`Error`,`Disabled`,`WithValidation`]}))();export{p as Default,_ as Disabled,g as Error,h as WithDescription,m as WithTime,v as WithValidation,y as __namedExportsOrder,f as default};