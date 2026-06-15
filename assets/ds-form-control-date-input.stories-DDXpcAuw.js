import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BBAqAp_t.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./ds-icon-C2cA_B53.js";import{t as a}from"./ds-icon-XYYvP6hJ.js";import{i as o,n as s,r as c,t as l}from"./ds-form-control.types-DtRmCATE.js";import{r as u,t as d}from"./ds-form-control-stories-shared-De6MraK0.js";import{n as f,t as p}from"./ds-form-control.stories.module-CwF7ifQ2.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{m=t(n(),1),s(),o(),u(),f(),a(),h=r(),{expect:g,userEvent:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/FormControl/DateInput (Deprecated)`,component:c.DateInput,parameters:{layout:`centered`,docs:{description:{component:"**Deprecated**: DsFormControl.DateInput is deprecated. Please use `DsFormControl.DsDatePicker` for single date selection or `DsFormControl.DsDateRangePicker` for date range selection instead."}}},tags:[`deprecated`],argTypes:{status:{control:{type:`select`},options:l,description:`Form control color status`,table:{defaultValue:{summary:l[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},messageIcon:{control:`text`,description:`Icon to display in the message`},className:{control:`text`,description:`Additional CSS class names`},style:{control:`object`,description:`Additional styles to apply to the component`}}},x=async e=>{let t=y(e).getByPlaceholderText(`MM/DD/YYYY`);await _.click(t),await _.type(t,`12/25/2024`),await v(async()=>{await g(t).toHaveValue(`12/25/2024`)}),await _.clear(t),await g(t).toHaveValue(``)},S=async e=>{let t=y(e).getByPlaceholderText(`MM/DD/YYYY - MM/DD/YYYY`);await _.click(t),await _.type(t,`12/01/2024 - 12/31/2024`),await v(async()=>{await g(t).toHaveValue(`12/01/2024 - 12/31/2024`)})},C=async e=>{let t=y(e),n=t.getByPlaceholderText(`MM/DD/YYYY`),r=t.getByRole(`button`,{name:/open calendar/i});await g(n).toBeDisabled(),await g(r).toBeDisabled(),await _.type(n,`12/25/2024`),await g(n.value).toBe(``)},w={args:{label:`Event Date`,required:!0,style:{width:`400px`},message:`Select a date for your event`},render:e=>(0,h.jsx)(c,{...e,children:(0,h.jsx)(c.DateInput,{})}),play:async({canvasElement:e})=>{await x(e)}},T={args:{label:`Event Date`,required:!0,style:{width:`400px`}},render:e=>(0,h.jsx)(c,{...e,children:(0,h.jsx)(c.DateInput,{})}),play:async({canvasElement:e})=>{await x(e)}},E={args:{label:`Event Date`,required:!0,style:{width:`400px`,padding:`16px`,border:`2px solid #e0e0e0`,borderRadius:`8px`,backgroundColor:`#f9f9f9`}},render:e=>(0,h.jsx)(c,{...e,children:(0,h.jsx)(c.DateInput,{})}),play:async({canvasElement:e})=>{await x(e)}},D={args:{label:`Event Date`,required:!0,style:{width:`400px`}},render:e=>(0,h.jsxs)(c,{...e,children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.DateInput,{})]}),play:async({canvasElement:e})=>{await x(e)}},O={args:{label:`Event Date`,required:!0,style:{width:`400px`},slots:{endAdornment:(0,h.jsx)(`button`,{type:`button`,className:p.helpIcon,onClick:()=>alert(`Help clicked!`),"aria-label":`Help`,children:(0,h.jsx)(i,{icon:`info`,size:`small`})})}},render:e=>(0,h.jsxs)(c,{...e,children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.DateInput,{})]}),play:async({canvasElement:e})=>{await x(e)}},k={render:function(){let[e]=(0,m.useState)(`2024-12-25`);return(0,h.jsx)(`div`,{style:{width:`400px`},children:(0,h.jsxs)(c,{status:`success`,label:`Event Date`,message:`Valid date selected.`,messageIcon:`check_circle`,children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.DateInput,{value:e})]})})},play:async({canvasElement:e})=>{let t=y(e).getByPlaceholderText(`MM/DD/YYYY`);await v(async()=>{await g(t).toHaveValue(`12/25/2024`)})}},A={args:{status:`error`,label:`Event Date`,required:!0,message:`Date is required.`,messageIcon:`error`,style:{width:`400px`}},render:e=>(0,h.jsxs)(c,{...e,children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.DateInput,{})]})},j={render:function(){let[e]=(0,m.useState)(`2024-12-25`);return(0,h.jsx)(`div`,{style:{width:`400px`},children:(0,h.jsxs)(c,{status:`warning`,label:`Event Date`,message:`Date is approaching deadline.`,messageIcon:`info`,children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.DateInput,{value:e})]})})}},M={args:{label:`Event Date`,style:{width:`400px`}},render:e=>(0,h.jsxs)(c,{...e,children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.DateInput,{disabled:!0})]}),play:async({canvasElement:e})=>{await C(e)}},N={args:{label:`Date Range`,required:!0,message:`Select start and end dates`,style:{width:`400px`}},render:e=>(0,h.jsx)(c,{...e,children:(0,h.jsx)(c.DateInput,{range:!0})}),play:async({canvasElement:e})=>{await S(e)}},P={render:function(){let[e,t]=(0,m.useState)(),[n,r]=(0,m.useState)(!1),i=n&&!e?`Start and end dates are required`:void 0;return(0,h.jsx)(`div`,{style:{width:`400px`},children:(0,h.jsx)(c,{label:`Date Range`,required:!0,status:i?`error`:void 0,messageIcon:`cancel`,message:i,children:(0,h.jsx)(c.DateInput,{value:e,onValueChange:e=>{t(e),r(!0)},range:!0})})})}},F={render:function(){let[e,t]=(0,m.useState)(),[n,r]=(0,m.useState)(!1),i=n&&!e?`Date is required`:void 0;return(0,h.jsx)(`div`,{style:{width:`400px`},children:(0,h.jsx)(c,{label:`Event Date`,required:!0,status:i?`error`:void 0,messageIcon:`cancel`,message:i,children:(0,h.jsx)(c.DateInput,{value:e,onValueChange:e=>{t(e),r(!0)}})})})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    style: {
      width: '400px'
    },
    message: 'Select a date for your event'
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.DateInput />
        </DsFormControl>,
  play: async ({
    canvasElement
  }) => {
    await sanityCheckSingle(canvasElement);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    style: {
      width: '400px'
    }
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.DateInput />
        </DsFormControl>,
  play: async ({
    canvasElement
  }) => {
    await sanityCheckSingle(canvasElement);
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    style: {
      width: '400px',
      padding: '16px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.DateInput />
        </DsFormControl>,
  play: async ({
    canvasElement
  }) => {
    await sanityCheckSingle(canvasElement);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    style: {
      width: '400px'
    }
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                <DefaultDescription />
            </DsFormControl.Description>
            <DsFormControl.DateInput />
        </DsFormControl>,
  play: async ({
    canvasElement
  }) => {
    await sanityCheckSingle(canvasElement);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    style: {
      width: '400px'
    },
    slots: {
      endAdornment: <button type="button" className={styles.helpIcon} onClick={() => alert('Help clicked!')} aria-label="Help">
                    <DsIcon icon="info" size="small" />
                </button>
    }
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                <DefaultDescription />
            </DsFormControl.Description>
            <DsFormControl.DateInput />
        </DsFormControl>,
  play: async ({
    canvasElement
  }) => {
    await sanityCheckSingle(canvasElement);
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value] = useState('2024-12-25');
    return <div style={{
      width: '400px'
    }}>
                <DsFormControl status="success" label="Event Date" message="Valid date selected." messageIcon="check_circle">
                    <DsFormControl.Description>
                        <DefaultDescription />
                    </DsFormControl.Description>
                    <DsFormControl.DateInput value={value} />
                </DsFormControl>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('MM/DD/YYYY');
    await waitFor(async () => {
      await expect(input).toHaveValue('12/25/2024');
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Event Date',
    required: true,
    message: 'Date is required.',
    messageIcon: 'error',
    style: {
      width: '400px'
    }
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                <DefaultDescription />
            </DsFormControl.Description>
            <DsFormControl.DateInput />
        </DsFormControl>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value] = useState('2024-12-25');
    return <div style={{
      width: '400px'
    }}>
                <DsFormControl status="warning" label="Event Date" message="Date is approaching deadline." messageIcon="info">
                    <DsFormControl.Description>
                        <DefaultDescription />
                    </DsFormControl.Description>
                    <DsFormControl.DateInput value={value} />
                </DsFormControl>
            </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    style: {
      width: '400px'
    }
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.Description>
                <DefaultDescription />
            </DsFormControl.Description>
            <DsFormControl.DateInput disabled />
        </DsFormControl>,
  play: async ({
    canvasElement
  }) => {
    await checkDisabled(canvasElement);
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date Range',
    required: true,
    message: 'Select start and end dates',
    style: {
      width: '400px'
    }
  },
  render: args => <DsFormControl {...args}>
            <DsFormControl.DateInput range />
        </DsFormControl>,
  play: async ({
    canvasElement
  }) => {
    await sanityCheckRange(canvasElement);
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<[string, string]>();
    const [touched, setTouched] = useState(false);
    const error = touched && !value ? 'Start and end dates are required' : undefined;
    return <div style={{
      width: '400px'
    }}>
                <DsFormControl label="Date Range" required status={error ? 'error' : undefined} messageIcon="cancel" message={error}>
                    <DsFormControl.DateInput value={value} onValueChange={value => {
          setValue(value);
          setTouched(true);
        }} range />
                </DsFormControl>
            </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>();
    const [touched, setTouched] = useState(false);
    const error = touched && !value ? 'Date is required' : undefined;
    return <div style={{
      width: '400px'
    }}>
                <DsFormControl label="Event Date" required status={error ? 'error' : undefined} messageIcon="cancel" message={error}>
                    <DsFormControl.DateInput value={value} onValueChange={value => {
          setValue(value);
          setTouched(true);
        }} />
                </DsFormControl>
            </div>;
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`WithCustomWidth`,`WithCustomStyles`,`WithDescription`,`WithHelpIcon`,`Success`,`Error`,`Warning`,`Disabled`,`RangeMode`,`RangeWithValidation`,`WithValidation`]}))();export{w as Default,M as Disabled,A as Error,N as RangeMode,P as RangeWithValidation,k as Success,j as Warning,E as WithCustomStyles,T as WithCustomWidth,D as WithDescription,O as WithHelpIcon,F as WithValidation,I as __namedExportsOrder,b as default};