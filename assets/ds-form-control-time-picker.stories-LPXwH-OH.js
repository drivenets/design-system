import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-stack-5oRwpvZl.js";import{i as o,n as s,r as c,t as l}from"./ds-form-control.types-nwiPFKEW.js";var u,d,f,p,m,h,g,_,v,y;t((()=>{u=e(n(),1),o(),i(),s(),d=r(),f={title:`Components/FormControl/TimePicker`,component:c,parameters:{layout:`centered`,docs:{description:{component:`Form control wrapper that adds a label, description, validation status, and message around a time picker.`}}},decorators:[e=>(0,d.jsx)(a,{width:`19rem`,children:(0,d.jsx)(e,{})})],argTypes:{status:{control:{type:`select`},options:l},label:{control:`text`},required:{control:`boolean`},message:{control:`text`},messageIcon:{control:`text`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},p={args:{label:`Start Time`,required:!0,message:`Select a time`,children:(0,d.jsx)(c.TimePicker,{})}},m={args:{label:`Start Time`,required:!0},render:e=>(0,d.jsxs)(c,{...e,children:[(0,d.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,d.jsx)(c.TimePicker,{})]})},h={args:{status:`error`,label:`Start Time`,required:!0,message:`Time is required.`,messageIcon:`error`},render:e=>(0,d.jsxs)(c,{...e,children:[(0,d.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,d.jsx)(c.TimePicker,{})]})},g={args:{label:`Start Time`,children:(0,d.jsx)(c.TimePicker,{disabled:!0})}},_={args:{label:`Business Hours`,message:`Select a time between 9:00 AM and 5:00 PM`},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,u.useState)(null);return(0,d.jsx)(c,{...e,children:(0,d.jsx)(c.TimePicker,{value:t,onChange:n,min:new Date(`2026-01-15T09:00:00`),max:new Date(`2026-01-15T17:00:00`)})})}},v={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,u.useState)(null),[n,r]=(0,u.useState)(!1),i=n&&!e?`Time is required`:void 0;return(0,d.jsx)(c,{label:`Start Time`,required:!0,status:i?`error`:void 0,messageIcon:`cancel`,message:i,children:(0,d.jsx)(c.TimePicker,{value:e,onChange:e=>{t(e),r(!0)}})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start Time',
    required: true,
    message: 'Select a time',
    children: <DsFormControl.TimePicker />
  }
}`,...p.parameters?.docs?.source},description:{story:`Baseline time picker with a label, required marker, and a helper message.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Adds a description above the picker to explain the field before the user selects.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Error status flags a missing time and pairs the message with an error icon.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start Time',
    children: <DsFormControl.TimePicker disabled />
  }
}`,...g.parameters?.docs?.source},description:{story:`Disabled state prevents interaction while keeping the field visible.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Constrains selectable times to a business-hours window via min and max.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Controlled picker that surfaces a required-field error once the field is touched.`,...v.parameters?.docs?.description}}},y=[`Default`,`WithDescription`,`Error`,`Disabled`,`WithMinMax`,`WithValidation`]}))();export{p as Default,g as Disabled,h as Error,m as WithDescription,_ as WithMinMax,v as WithValidation,y as __namedExportsOrder,f as default};