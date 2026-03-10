import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as w,D as c}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as F}from"./ds-icon-CnIgB9vW.js";import{D as n}from"./ds-form-control-CdUaCbu6.js";import{r as i}from"./iframe-DqXDffqa.js";import{s as I}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-CAjgkSpS.js";import"./ds-select-DCejI1Fo.js";import"./ds-checkbox-CAERozv-.js";import"./index-B955zj3j.js";import"./index-CZsEDmsN.js";import"./index-CSIYGFIN.js";import"./index-CR_tVwKq.js";import"./index-DADBUCkz.js";import"./ds-button-Dq5XbDIq.js";import"./ds-button-legacy-BWsOcf_q.js";import"./ds-button-new-ityBlADU.js";import"./ds-chip-BPzlFEAP.js";import"./ds-typography-DbmtArz4.js";import"./index-CXdJNNcI.js";import"./use-locale-context-BFjg08qZ.js";import"./create-anatomy-BzmhCF0M.js";import"./ds-text-input-DmXkd9FK.js";import"./list-collection-y8KaQyOi.js";import"./chunk-QZ7TP4HQ-O9Gy0rNO.js";import"./equal-DfFTejAs.js";import"./use-field-context-BjUoMQcP.js";import"./event-CBXSxTbR.js";import"./form-BfLM2Dg2.js";import"./initial-focus-Dzo7zCA_.js";import"./set-Dm3oMbeM.js";import"./typeahead-CK7WldbO.js";import"./query-CjgVAlRR.js";import"./visually-hidden-BShGFMbX.js";import"./get-styles--oj4Xnc1.js";import"./floating-ui.dom-o9At5h4Q.js";import"./raf-CC9hSMXO.js";import"./computed-style-BZ9EjscZ.js";import"./index-CelOZJL-.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-CVhZDAiu.js";import"./portal-D4vfPPNn.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-DiNoUmYw.js";import"./ds-textarea-BvpFezCu.js";import"./ds-number-input-Cwtr62Yt.js";import"./number-Bu-e0fmS.js";import"./memo-BRlFl984.js";import"./caret-BrXylHYy.js";import"./ds-password-input-BoMW_uTc.js";import"./ds-date-input-CeVet1hP.js";import"./preload-helper-PPVm8Dsz.js";const{expect:l,screen:p,userEvent:r,waitFor:O,within:x}=__STORYBOOK_MODULE_TEST__,Ie={title:"Design System/FormControl/Select",component:n,parameters:{layout:"centered"},argTypes:{status:{control:{type:"select"},options:w,description:"Form control color status",table:{defaultValue:{summary:w[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},s=async o=>{const a=x(o),t=a.getByRole("combobox",{name:"Input"}),g=async()=>{await r.click(t);const V=a.getByRole("button",{name:"Clear value"});await r.click(V),await r.click(t)};await l(t).toHaveTextContent("Select an option"),await r.click(t);const S=p.getByRole("option",{name:"Option 1"});await l(S).toBeInTheDocument(),await l(p.getByRole("option",{name:"Option 2"})).toBeInTheDocument(),await l(p.getByRole("option",{name:"Option 3"})).toBeInTheDocument(),await r.click(S),await O(async()=>{await l(t).toHaveTextContent("Option 1")}),await g(),await O(async()=>{await l(t).toHaveTextContent("Select an option")}),await r.click(t);const f=p.getByRole("option",{name:"Option 2"});await r.click(f),await l(t).toHaveTextContent("Option 2"),await g(),await l(t).toHaveTextContent("Select an option"),await l(a.queryByRole("button",{name:"Clear value"})).not.toBeInTheDocument()},j=async o=>{const a=x(o),t=a.getByRole("combobox");await l(t).toBeDisabled(),await r.click(t),await l(a.queryByText("Option 1")).not.toBeVisible()},u={render:function(){const[a,t]=i.useState("");return e.jsx(n,{label:"Input",required:!0,message:"This is a message",children:e.jsx(n.Select,{placeholder:"Select an option",value:a,onValueChange:t,clearable:!0,options:[{label:"Option 1",value:"option1",icon:"download"},{label:"Option 2",value:"option2",icon:"save"},{label:"Option 3",value:"option3",icon:"description"}]})})},play:async({canvasElement:o})=>{await s(o)}},d={render:function(){const[a,t]=i.useState("");return e.jsx(n,{label:"Input",required:!0,style:{width:"300px"},children:e.jsx(n.Select,{placeholder:"Select an option",value:a,onValueChange:t,clearable:!0,options:[{label:"Option 1",value:"option1",icon:"download"},{label:"Option 2",value:"option2",icon:"save"},{label:"Option 3",value:"option3",icon:"description"}]})})},play:async({canvasElement:o})=>{await s(o)}},m={render:function(){const[a,t]=i.useState("");return e.jsx(n,{label:"Input",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(n.Select,{placeholder:"Select an option",value:a,onValueChange:t,clearable:!0,options:[{label:"Option 1",value:"option1",icon:"download"},{label:"Option 2",value:"option2",icon:"save"},{label:"Option 3",value:"option3",icon:"description"}]})})},play:async({canvasElement:o})=>{await s(o)}},v={render:function(){const[a,t]=i.useState("");return e.jsxs(n,{label:"Input",required:!0,style:{width:"300px"},children:[e.jsx(n.Description,{children:e.jsx(c,{})}),e.jsx(n.Select,{placeholder:"Select an option",value:a,onValueChange:t,clearable:!0,options:[{label:"Option 1",value:"option1",icon:"download"},{label:"Option 2",value:"option2",icon:"save"},{label:"Option 3",value:"option3",icon:"description"}]})]})},play:async({canvasElement:o})=>{await s(o)}},b={render:function(){const[a,t]=i.useState("");return e.jsxs(n,{label:"Input",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:I.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(F,{icon:"info",size:"small"})})},children:[e.jsx(n.Description,{children:e.jsx(c,{})}),e.jsx(n.Select,{value:a,onValueChange:t,clearable:!0,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],placeholder:"Select an option"})]})},play:async({canvasElement:o})=>{await s(o)}},h={render:function(){const[a,t]=i.useState("");return e.jsxs(n,{status:"success",label:"Input",message:"This is a success caption under a select input.",messageIcon:"check_circle",children:[e.jsx(n.Description,{children:e.jsx(c,{})}),e.jsx(n.Select,{placeholder:"Select an option",value:a,onValueChange:t,clearable:!0,options:[{label:"Option 1",value:"option1",icon:"download"},{label:"Option 2",value:"option2",icon:"save"},{label:"Option 3",value:"option3",icon:"description"}]})]})},play:async({canvasElement:o})=>{await s(o)}},D={render:function(){const[a,t]=i.useState("");return e.jsxs(n,{status:"error",label:"Input",message:"This is an error caption under a select input.",messageIcon:"error",children:[e.jsx(n.Description,{children:e.jsx(c,{})}),e.jsx(n.Select,{placeholder:"Select an option",value:a,onValueChange:t,clearable:!0,options:[{label:"Option 1",value:"option1",icon:"download"},{label:"Option 2",value:"option2",icon:"save"},{label:"Option 3",value:"option3",icon:"description"}]})]})},play:async({canvasElement:o})=>{await s(o)}},C={render:function(){const[a,t]=i.useState("");return e.jsxs(n,{status:"warning",label:"Input",message:"This is a warning caption under a select input.",messageIcon:"info",children:[e.jsx(n.Description,{children:e.jsx(c,{})}),e.jsx(n.Select,{placeholder:"Select an option",value:a,onValueChange:t,clearable:!0,options:[{label:"Option 1",value:"option1",icon:"download"},{label:"Option 2",value:"option2",icon:"save"},{label:"Option 3",value:"option3",icon:"description"}]})]})},play:async({canvasElement:o})=>{await s(o)}},y={render:function(){const[a,t]=i.useState("");return e.jsxs(n,{label:"Input",children:[e.jsx(n.Description,{children:e.jsx(c,{})}),e.jsx(n.Select,{placeholder:"Select an option",value:a,onValueChange:t,clearable:!0,options:[{label:"Option 1",value:"option1",icon:"download"},{label:"Option 2",value:"option2",icon:"save"},{label:"Option 3",value:"option3",icon:"description"}],disabled:!0})]})},play:async({canvasElement:o})=>{await j(o)}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>('');
    return <DsFormControl label="Input" required={true} message="This is a message">
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>('');
    return <DsFormControl label="Input" required={true} style={{
      width: '300px'
    }}>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>('');
    return <DsFormControl label="Input" required={true} style={{
      width: '400px',
      padding: '16px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>('');
    return <DsFormControl label="Input" required={true} style={{
      width: '300px'
    }}>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>('');
    return <DsFormControl label="Input" required={true} slots={{
      endAdornment: <button type="button" className={styles.helpIcon} onClick={() => alert('Help clicked!')} aria-label="Help">
                            <DsIcon icon="info" size="small" />
                        </button>
    }}>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select value={value} onValueChange={setValue} clearable options={[{
        value: 'option1',
        label: 'Option 1'
      }, {
        value: 'option2',
        label: 'Option 2'
      }, {
        value: 'option3',
        label: 'Option 3'
      }]} placeholder="Select an option" />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>('');
    return <DsFormControl status="success" label="Input" message="This is a success caption under a select input." messageIcon="check_circle">
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>('');
    return <DsFormControl status="error" label="Input" message="This is an error caption under a select input." messageIcon="error">
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>('');
    return <DsFormControl status="warning" label="Input" message="This is a warning caption under a select input." messageIcon="info">
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>('');
    return <DsFormControl label="Input">
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} disabled />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await checkDisabled(canvasElement);
  }
}`,...y.parameters?.docs?.source}}};const je=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled"];export{u as Default,y as Disabled,D as Error,h as Success,C as Warning,m as WithCustomStyles,d as WithCustomWidth,v as WithDescription,b as WithHelpIcon,je as __namedExportsOrder,Ie as default};
