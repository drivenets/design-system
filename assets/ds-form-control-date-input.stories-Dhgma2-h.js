import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-button-v3-BnV8s8Ko.js";import{n as o,t as s}from"./ds-stack-GU0hZWeR.js";import{i as c,n as l,r as u,t as d}from"./ds-form-control.types-N_Ak9LFl.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T;t((()=>{f=e(n(),1),l(),c(),o(),i(),p=r(),m={title:`Components/FormControl/DateInput (Deprecated)`,component:u.DateInput,parameters:{layout:`centered`,docs:{description:{component:"**Deprecated**: DsFormControl.DateInput is deprecated. Please use `DsFormControl.DsDatePicker` for single date selection or `DsFormControl.DsDateRangePicker` for date range selection instead."}}},tags:[`deprecated`],decorators:[e=>(0,p.jsx)(s,{width:`19rem`,children:(0,p.jsx)(e,{})})],argTypes:{status:{control:{type:`select`},options:d,description:`Form control color status`,table:{defaultValue:{summary:d[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},messageIcon:{control:`text`,description:`Icon to display in the message`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},h={args:{label:`Event Date`,required:!0,message:`Select a date for your event`},render:e=>(0,p.jsx)(u,{...e,children:(0,p.jsx)(u.DateInput,{})})},g={args:{label:`Event Date`,required:!0},render:e=>(0,p.jsxs)(u,{...e,children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.DateInput,{})]})},_={args:{label:`Event Date`,required:!0,slots:{endAdornment:(0,p.jsx)(a,{variant:`tertiary`,size:`small`,icon:`info`,"aria-label":`Help`})}},render:e=>(0,p.jsxs)(u,{...e,children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.DateInput,{})]})},v={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(`2024-12-25`);return(0,p.jsxs)(u,{status:`success`,label:`Event Date`,message:`Valid date selected.`,messageIcon:`check_circle`,children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.DateInput,{value:e,onValueChange:t})]})}},y={args:{status:`error`,label:`Event Date`,required:!0,message:`Date is required.`,messageIcon:`error`},render:e=>(0,p.jsxs)(u,{...e,children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.DateInput,{})]})},b={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(`2024-12-25`);return(0,p.jsxs)(u,{status:`warning`,label:`Event Date`,message:`Date is approaching deadline.`,messageIcon:`info`,children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.DateInput,{value:e,onValueChange:t})]})}},x={args:{label:`Event Date`},render:e=>(0,p.jsxs)(u,{...e,children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.DateInput,{disabled:!0})]})},S={args:{label:`Date Range`,required:!0,message:`Select start and end dates`},render:e=>(0,p.jsx)(u,{...e,children:(0,p.jsx)(u.DateInput,{range:!0})})},C={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(),[n,r]=(0,f.useState)(!1),i=n&&!e?`Start and end dates are required`:void 0;return(0,p.jsx)(u,{label:`Date Range`,required:!0,status:i?`error`:void 0,messageIcon:`cancel`,message:i,children:(0,p.jsx)(u.DateInput,{value:e,onValueChange:e=>{t(e),r(!0)},range:!0})})}},w={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(),[n,r]=(0,f.useState)(!1),i=n&&!e?`Date is required`:void 0;return(0,p.jsx)(u,{label:`Event Date`,required:!0,status:i?`error`:void 0,messageIcon:`cancel`,message:i,children:(0,p.jsx)(u.DateInput,{value:e,onValueChange:e=>{t(e),r(!0)}})})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    message: 'Select a date for your event'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.DateInput />
        </DsFormControl>
}`,...h.parameters?.docs?.source},description:{story:`Baseline single-date input with a label, required marker, and a helper message.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Adds a description above the input to explain the field before the user types.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Surfaces contextual help through an end-adornment button beside the field.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Success status confirms the selected date passed validation.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Error status flags a missing date and pairs the message with an error icon.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Warning status highlights a date that needs attention without blocking submission.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                Optional helper text that describes the field in up to two lines.
            </DsFormControl.Description>
            <DsFormControl.DateInput disabled />
        </DsFormControl>
}`,...x.parameters?.docs?.source},description:{story:`Disabled state prevents interaction while keeping the field visible.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date Range',
    required: true,
    message: 'Select start and end dates'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.DateInput range />
        </DsFormControl>
}`,...S.parameters?.docs?.source},description:{story:`Range mode lets the user pick a start and end date in a single input.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Range input wired to controlled state that surfaces a required-field error once touched.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Single-date input wired to controlled state that surfaces a required-field error once touched.`,...w.parameters?.docs?.description}}},T=[`Default`,`WithDescription`,`WithHelpIcon`,`Success`,`Error`,`Warning`,`Disabled`,`RangeMode`,`RangeWithValidation`,`WithValidation`]}))();export{h as Default,x as Disabled,y as Error,S as RangeMode,C as RangeWithValidation,v as Success,b as Warning,g as WithDescription,_ as WithHelpIcon,w as WithValidation,T as __namedExportsOrder,m as default};