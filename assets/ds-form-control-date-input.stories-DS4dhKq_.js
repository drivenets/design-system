import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-DO3z5i-V.js";import{c as F,D as c}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as a}from"./ds-form-control-CkMarMnI.js";import{s as q}from"./ds-form-control.stories.module-C4cfW0LK.js";import{D as Y}from"./ds-icon-BE_tnv_N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-E4tmssrt.js";import"./ds-select-CkrObSlP.js";import"./ds-checkbox-uh4mhL5-.js";import"./index-CwD1Sy4s.js";import"./index-Cn-mZf62.js";import"./index-Vdb9JjU3.js";import"./index-DL2jhJwi.js";import"./index-DpI3asyz.js";import"./ds-button-VRkdInV0.js";import"./ds-button-legacy-o0uVyuwY.js";import"./ds-button-new-Bgj9CJ4Y.js";import"./ds-chip-CpzSCj2W.js";import"./ds-typography-CPp6yc55.js";import"./index-D-oo-m9x.js";import"./use-locale-context-aPQTp9FX.js";import"./index-j2wvdD5W.js";import"./ds-text-input-BUNH8EzW.js";import"./index-DUZ9greZ.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-DKAFrel9.js";import"./use-field-context-BvA4l2tW.js";import"./portal-B6HiwHsW.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-supEY4Jl.js";import"./ds-textarea-7_o2oCYr.js";import"./ds-number-input-CIaBHXIn.js";import"./ds-password-input-B6c2owWe.js";import"./ds-date-input-DQt7ngmX.js";const{expect:s,userEvent:o,waitFor:j,within:S}=__STORYBOOK_MODULE_TEST__,De={title:"Design System/FormControl/DateInput",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:F,description:"Form control color status",table:{defaultValue:{summary:F[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},u=async t=>{const r=S(t).getByPlaceholderText("MM/DD/YYYY");await o.click(r),await o.type(r,"12/25/2024"),await j(async()=>{await s(r).toHaveValue("12/25/2024")}),await o.clear(r),await s(r).toHaveValue("")},R=async t=>{const r=S(t).getByPlaceholderText("MM/DD/YYYY - MM/DD/YYYY");await o.click(r),await o.type(r,"12/01/2024 - 12/31/2024"),await j(async()=>{await s(r).toHaveValue("12/01/2024 - 12/31/2024")})},V=async t=>{const n=S(t),r=n.getByPlaceholderText("MM/DD/YYYY"),l=n.getByRole("button",{name:/open calendar/i});await s(r).toBeDisabled(),await s(l).toBeDisabled(),await o.type(r,"12/25/2024"),await s(r.value).toBe("")},p={args:{label:"Event Date",required:!0,style:{width:"400px"},message:"Select a date for your event",children:e.jsx(a.DateInput,{})},play:async({canvasElement:t})=>{await u(t)}},m={args:{label:"Event Date",required:!0,style:{width:"400px"},children:e.jsx(a.DateInput,{})},play:async({canvasElement:t})=>{await u(t)}},D={args:{label:"Event Date",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(a.DateInput,{})},play:async({canvasElement:t})=>{await u(t)}},h={args:{label:"Event Date",required:!0,style:{width:"400px"},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{})]})},play:async({canvasElement:t})=>{await u(t)}},g={args:{label:"Event Date",required:!0,style:{width:"400px"},slots:{endAdornment:e.jsx("button",{type:"button",className:q.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(Y,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{})]})},play:async({canvasElement:t})=>{await u(t)}},y={render:function(){const[n]=i.useState("2024-12-25");return e.jsx("div",{style:{width:"400px"},children:e.jsxs(a,{status:"success",label:"Event Date",message:"Valid date selected.",messageIcon:"check_circle",children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{value:n})]})})},play:async({canvasElement:t})=>{const r=S(t).getByPlaceholderText("MM/DD/YYYY");await j(async()=>{await s(r).toHaveValue("12/25/2024")})}},v={args:{status:"error",label:"Event Date",required:!0,message:"Date is required.",messageIcon:"error",style:{width:"400px"},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{})]})}},x={render:function(){const[n]=i.useState("2024-12-25");return e.jsx("div",{style:{width:"400px"},children:e.jsxs(a,{status:"warning",label:"Event Date",message:"Date is approaching deadline.",messageIcon:"info",children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{value:n})]})})}},w={args:{label:"Event Date",style:{width:"400px"},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{disabled:!0})]})},play:async({canvasElement:t})=>{await V(t)}},C={args:{label:"Date Range",required:!0,message:"Select start and end dates",style:{width:"400px"},children:e.jsx(a.DateInput,{range:!0})},play:async({canvasElement:t})=>{await R(t)}},b={render:function(){const[n,r]=i.useState(),[l,E]=i.useState(!1),d=l&&!n?"Start and end dates are required":void 0;return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{label:"Date Range",required:!0,status:d?"error":void 0,messageIcon:"cancel",message:d,children:e.jsx(a.DateInput,{value:n,onValueChange:I=>{r(I),E(!0)},range:!0})})})}},f={render:function(){const[n,r]=i.useState(),[l,E]=i.useState(!1),d=l&&!n?"Date is required":void 0;return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{label:"Event Date",required:!0,status:d?"error":void 0,messageIcon:"cancel",message:d,children:e.jsx(a.DateInput,{value:n,onValueChange:I=>{r(I),E(!0)}})})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    style: {
      width: '400px'
    },
    message: 'Select a date for your event',
    children: <DsFormControl.DateInput />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheckSingle(canvasElement);
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    style: {
      width: '400px'
    },
    children: <DsFormControl.DateInput />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheckSingle(canvasElement);
  }
}`,...m.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    style: {
      width: '400px',
      padding: '16px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    },
    children: <DsFormControl.DateInput />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheckSingle(canvasElement);
  }
}`,...D.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    required: true,
    style: {
      width: '400px'
    },
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.DateInput />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheckSingle(canvasElement);
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    },
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.DateInput />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheckSingle(canvasElement);
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value] = useState<string>('2024-12-25');
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Event Date',
    required: true,
    message: 'Date is required.',
    messageIcon: 'error',
    style: {
      width: '400px'
    },
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.DateInput />
            </>
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value] = useState<string>('2024-12-25');
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    style: {
      width: '400px'
    },
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.DateInput disabled />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await checkDisabled(canvasElement);
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date Range',
    required: true,
    message: 'Select start and end dates',
    style: {
      width: '400px'
    },
    children: <DsFormControl.DateInput range />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheckRange(canvasElement);
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const he=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled","RangeMode","RangeWithValidation","WithValidation"];export{p as Default,w as Disabled,v as Error,C as RangeMode,b as RangeWithValidation,y as Success,x as Warning,D as WithCustomStyles,m as WithCustomWidth,h as WithDescription,g as WithHelpIcon,f as WithValidation,he as __namedExportsOrder,De as default};
