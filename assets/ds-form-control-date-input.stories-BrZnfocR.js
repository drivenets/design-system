import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-B7s6RIoB.js";import{n as r,t as i}from"./ds-button-v3-BQcrZh_I.js";import{n as a,t as o}from"./ds-stack-DbPEq4gn.js";import{n as s,t as c}from"./ds-form-control-DAXZmyv9.js";import{n as l,t as u}from"./ds-form-control.types-CRY_JX1X.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{d=t(),l(),s(),a(),r(),f=n(),p={title:`Components/FormControl/DateInput (Deprecated)`,component:c.DateInput,parameters:{layout:`centered`,docs:{description:{component:"**Deprecated**: DsFormControl.DateInput is deprecated. Please use `DsFormControl.DsDatePicker` for single date selection or `DsFormControl.DsDateRangePicker` for date range selection instead."}}},tags:[`deprecated`],decorators:[e=>(0,f.jsx)(o,{width:`19rem`,children:(0,f.jsx)(e,{})})],argTypes:{status:{control:{type:`select`},options:u,description:`Form control color status`,table:{defaultValue:{summary:u[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},messageIcon:{control:`text`,description:`Icon to display in the message`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},m={args:{label:`Event Date`,required:!0,message:`Select a date for your event`},render:e=>(0,f.jsx)(c,{...e,children:(0,f.jsx)(c.DateInput,{})})},h={args:{label:`Event Date`,required:!0},render:e=>(0,f.jsxs)(c,{...e,children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.DateInput,{})]})},g={args:{label:`Event Date`,required:!0,slots:{endAdornment:(0,f.jsx)(i,{variant:`tertiary`,size:`small`,icon:`info`,"aria-label":`Help`})}},render:e=>(0,f.jsxs)(c,{...e,children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.DateInput,{})]})},_={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(`2024-12-25`);return(0,f.jsxs)(c,{status:`success`,label:`Event Date`,message:`Valid date selected.`,messageIcon:`check_circle`,children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.DateInput,{value:e,onValueChange:t})]})}},v={args:{status:`error`,label:`Event Date`,required:!0,message:`Date is required.`,messageIcon:`error`},render:e=>(0,f.jsxs)(c,{...e,children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.DateInput,{})]})},y={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(`2024-12-25`);return(0,f.jsxs)(c,{status:`warning`,label:`Event Date`,message:`Date is approaching deadline.`,messageIcon:`info`,children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.DateInput,{value:e,onValueChange:t})]})}},b={args:{label:`Event Date`},render:e=>(0,f.jsxs)(c,{...e,children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.DateInput,{disabled:!0})]})},x={args:{label:`Date Range`,required:!0,message:`Select start and end dates`},render:e=>(0,f.jsx)(c,{...e,children:(0,f.jsx)(c.DateInput,{range:!0})})},S={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(),[n,r]=(0,d.useState)(!1),i=n&&!e?`Start and end dates are required`:void 0;return(0,f.jsx)(c,{label:`Date Range`,required:!0,status:i?`error`:void 0,messageIcon:`cancel`,message:i,children:(0,f.jsx)(c.DateInput,{value:e,onValueChange:e=>{t(e),r(!0)},range:!0})})}},C={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(),[n,r]=(0,d.useState)(!1),i=n&&!e?`Date is required`:void 0;return(0,f.jsx)(c,{label:`Event Date`,required:!0,status:i?`error`:void 0,messageIcon:`cancel`,message:i,children:(0,f.jsx)(c.DateInput,{value:e,onValueChange:e=>{t(e),r(!0)}})})}},w=[`Default`,`WithDescription`,`WithHelpIcon`,`Success`,`Error`,`Warning`,`Disabled`,`RangeMode`,`RangeWithValidation`,`WithValidation`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    message: 'Select a date for your event'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.DateInput />
        </DsFormControl>
}`,...m.parameters?.docs?.source},description:{story:`Baseline single-date input with a label, required marker, and a helper message.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.DateInput />
        </DsFormControl>
}`,...h.parameters?.docs?.source},description:{story:`Adds a description above the input to explain the field before the user types.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    slots: {
      endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="info" aria-label="Help" />
    }
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.DateInput />
        </DsFormControl>
}`,...g.parameters?.docs?.source},description:{story:`Surfaces contextual help through an end-adornment button beside the field.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | undefined>('2024-12-25');
    return <DsFormControl status="success" label="Event Date" message="Valid date selected." messageIcon="check_circle">
                <DsFormControl.Description>
                    Optional helper text that describes the field in up to two lines.
                </DsFormControl.Description>
                <DsFormControl.DateInput value={value} onValueChange={setValue} />
            </DsFormControl>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Success status confirms the selected date passed validation.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
            <DsFormControl.DateInput />
        </DsFormControl>
}`,...v.parameters?.docs?.source},description:{story:`Error status flags a missing date and pairs the message with an error icon.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | undefined>('2024-12-25');
    return <DsFormControl status="warning" label="Event Date" message="Date is approaching deadline." messageIcon="info">
                <DsFormControl.Description>
                    Optional helper text that describes the field in up to two lines.
                </DsFormControl.Description>
                <DsFormControl.DateInput value={value} onValueChange={setValue} />
            </DsFormControl>;
  }
}`,...y.parameters?.docs?.source},description:{story:`Warning status highlights a date that needs attention without blocking submission.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.DateInput disabled />
        </DsFormControl>
}`,...b.parameters?.docs?.source},description:{story:`Disabled state prevents interaction while keeping the field visible.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date Range',
    required: true,
    message: 'Select start and end dates'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.DateInput range />
        </DsFormControl>
}`,...x.parameters?.docs?.source},description:{story:`Range mode lets the user pick a start and end date in a single input.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<[string, string]>();
    const [touched, setTouched] = useState(false);
    const error = touched && !value ? 'Start and end dates are required' : undefined;
    return <DsFormControl label="Date Range" required status={error ? 'error' : undefined} messageIcon="cancel" message={error}>
                <DsFormControl.DateInput value={value} onValueChange={value => {
        setValue(value);
        setTouched(true);
      }} range />
            </DsFormControl>;
  }
}`,...S.parameters?.docs?.source},description:{story:`Range input wired to controlled state that surfaces a required-field error once touched.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string>();
    const [touched, setTouched] = useState(false);
    const error = touched && !value ? 'Date is required' : undefined;
    return <DsFormControl label="Event Date" required status={error ? 'error' : undefined} messageIcon="cancel" message={error}>
                <DsFormControl.DateInput value={value} onValueChange={value => {
        setValue(value);
        setTouched(true);
      }} />
            </DsFormControl>;
  }
}`,...C.parameters?.docs?.source},description:{story:`Single-date input wired to controlled state that surfaces a required-field error once touched.`,...C.parameters?.docs?.description}}}})))()}T();export{m as Default,b as Disabled,v as Error,x as RangeMode,S as RangeWithValidation,_ as Success,y as Warning,h as WithDescription,g as WithHelpIcon,C as WithValidation,w as __namedExportsOrder,p as default};