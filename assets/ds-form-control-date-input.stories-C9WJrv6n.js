import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-Dy6SS36-.js";import{c as F,D as c}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as a}from"./ds-form-control-Bv94hpwY.js";import{s as q}from"./ds-form-control.stories.module-C4cfW0LK.js";import{D as Y}from"./ds-icon-CvRVPcqP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DqNJ7Hgs.js";import"./ds-select-Wso6IoW9.js";import"./ds-checkbox-CxZ-oQHe.js";import"./index-Btt4cvEF.js";import"./index-CgAnCV2y.js";import"./index-JDIXPvFM.js";import"./index-CD44qpmb.js";import"./index-H2xV4SiH.js";import"./ds-button-41O6kJRu.js";import"./ds-button-legacy-DjFZj43n.js";import"./ds-button-new-D4nLbd9B.js";import"./ds-chip-DYONYMdG.js";import"./ds-typography-Da2cjcXF.js";import"./index-B0PnPE3E.js";import"./use-locale-context-DUC77wSF.js";import"./create-anatomy-DXjEE3v2.js";import"./ds-text-input-ByzrRThj.js";import"./list-collection-BtzkqzXb.js";import"./equal-DfFTejAs.js";import"./use-field-context-D8fSZz_q.js";import"./event-CBXSxTbR.js";import"./form-4KY-B53h.js";import"./typeahead-B8zPPRc6.js";import"./set-Bq9lVoEM.js";import"./query-CjgVAlRR.js";import"./visually-hidden-BShGFMbX.js";import"./get-styles-C_viWxRO.js";import"./floating-ui.dom-D3zTlarL.js";import"./raf-CC9hSMXO.js";import"./use-presence-CxJLinAV.js";import"./index-D6mHLL9J.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-G837k9-0.js";import"./portal-BsPwAuJQ.js";import"./create-split-props-u5h9OPvL.js";import"./ds-textarea-C18sIGXv.js";import"./ds-number-input-M6Dic2iG.js";import"./number-Bu-e0fmS.js";import"./memo-BRlFl984.js";import"./caret-BrXylHYy.js";import"./ds-password-input-CeNyhz0R.js";import"./ds-date-input-Di07BXk_.js";const{expect:s,userEvent:o,waitFor:j,within:S}=__STORYBOOK_MODULE_TEST__,Fe={title:"Design System/FormControl/DateInput",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:F,description:"Form control color status",table:{defaultValue:{summary:F[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},u=async t=>{const r=S(t).getByPlaceholderText("MM/DD/YYYY");await o.click(r),await o.type(r,"12/25/2024"),await j(async()=>{await s(r).toHaveValue("12/25/2024")}),await o.clear(r),await s(r).toHaveValue("")},R=async t=>{const r=S(t).getByPlaceholderText("MM/DD/YYYY - MM/DD/YYYY");await o.click(r),await o.type(r,"12/01/2024 - 12/31/2024"),await j(async()=>{await s(r).toHaveValue("12/01/2024 - 12/31/2024")})},V=async t=>{const n=S(t),r=n.getByPlaceholderText("MM/DD/YYYY"),l=n.getByRole("button",{name:/open calendar/i});await s(r).toBeDisabled(),await s(l).toBeDisabled(),await o.type(r,"12/25/2024"),await s(r.value).toBe("")},p={args:{label:"Event Date",required:!0,style:{width:"400px"},message:"Select a date for your event",children:e.jsx(a.DateInput,{})},play:async({canvasElement:t})=>{await u(t)}},m={args:{label:"Event Date",required:!0,style:{width:"400px"},children:e.jsx(a.DateInput,{})},play:async({canvasElement:t})=>{await u(t)}},D={args:{label:"Event Date",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(a.DateInput,{})},play:async({canvasElement:t})=>{await u(t)}},h={args:{label:"Event Date",required:!0,style:{width:"400px"},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{})]})},play:async({canvasElement:t})=>{await u(t)}},g={args:{label:"Event Date",required:!0,style:{width:"400px"},slots:{endAdornment:e.jsx("button",{type:"button",className:q.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(Y,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{})]})},play:async({canvasElement:t})=>{await u(t)}},y={render:function(){const[n]=i.useState("2024-12-25");return e.jsx("div",{style:{width:"400px"},children:e.jsxs(a,{status:"success",label:"Event Date",message:"Valid date selected.",messageIcon:"check_circle",children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{value:n})]})})},play:async({canvasElement:t})=>{const r=S(t).getByPlaceholderText("MM/DD/YYYY");await j(async()=>{await s(r).toHaveValue("12/25/2024")})}},v={args:{status:"error",label:"Event Date",required:!0,message:"Date is required.",messageIcon:"error",style:{width:"400px"},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{})]})}},x={render:function(){const[n]=i.useState("2024-12-25");return e.jsx("div",{style:{width:"400px"},children:e.jsxs(a,{status:"warning",label:"Event Date",message:"Date is approaching deadline.",messageIcon:"info",children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{value:n})]})})}},w={args:{label:"Event Date",style:{width:"400px"},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(c,{})}),e.jsx(a.DateInput,{disabled:!0})]})},play:async({canvasElement:t})=>{await V(t)}},C={args:{label:"Date Range",required:!0,message:"Select start and end dates",style:{width:"400px"},children:e.jsx(a.DateInput,{range:!0})},play:async({canvasElement:t})=>{await R(t)}},b={render:function(){const[n,r]=i.useState(),[l,E]=i.useState(!1),d=l&&!n?"Start and end dates are required":void 0;return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{label:"Date Range",required:!0,status:d?"error":void 0,messageIcon:"cancel",message:d,children:e.jsx(a.DateInput,{value:n,onValueChange:I=>{r(I),E(!0)},range:!0})})})}},f={render:function(){const[n,r]=i.useState(),[l,E]=i.useState(!1),d=l&&!n?"Date is required":void 0;return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{label:"Event Date",required:!0,status:d?"error":void 0,messageIcon:"cancel",message:d,children:e.jsx(a.DateInput,{value:n,onValueChange:I=>{r(I),E(!0)}})})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const qe=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled","RangeMode","RangeWithValidation","WithValidation"];export{p as Default,w as Disabled,v as Error,C as RangeMode,b as RangeWithValidation,y as Success,x as Warning,D as WithCustomStyles,m as WithCustomWidth,h as WithDescription,g as WithHelpIcon,f as WithValidation,qe as __namedExportsOrder,Fe as default};
