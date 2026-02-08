import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as x}from"./ds-icon-B2GnEIzh.js";import{c as h,s,a as D,D as t}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as r}from"./ds-form-control-DXvikL94.js";import{s as y}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-MjCKlByz.js";import"./iframe-BVDryuZ7.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-2MNuGUoV.js";import"./ds-checkbox-CvhCaHV7.js";import"./index-B2B6AqRj.js";import"./index-BPqqd7HI.js";import"./index-B1l1cBOW.js";import"./index-DB1HQx6-.js";import"./index-C6cUX-Fb.js";import"./ds-button-K8yUnA_I.js";import"./ds-button-legacy-BwiC0-_p.js";import"./ds-button-new-BdA7VWyz.js";import"./ds-chip-DgzVqa_r.js";import"./ds-typography-DkRjcEs2.js";import"./index-OMhoANJc.js";import"./use-locale-context-D57UDjLC.js";import"./index-Bj9KoGAY.js";import"./ds-text-input-CMxUgfZu.js";import"./list-collection-PDn_uVyI.js";import"./index-Dotm2SB1.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-DyCnKtBN.js";import"./use-field-context-O9DTPNKR.js";import"./portal-B9fQP7fs.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-DOWMnQhw.js";import"./ds-textarea-DFjBW4Ba.js";import"./ds-number-input--R5D_CCA.js";import"./ds-password-input-CrIc4maF.js";import"./ds-date-input-dIHu3VuD.js";const ee={title:"Design System/FormControl/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:h,description:"Form control color status",table:{defaultValue:{summary:h[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},n={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(r.Textarea,{placeholder:"Input"})},play:async({canvasElement:a})=>{await s(a)}},o={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(r.Textarea,{placeholder:"Input with custom width"})},play:async({canvasElement:a})=>{await s(a)}},i={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(r.Textarea,{placeholder:"Input with custom styling"})},play:async({canvasElement:a})=>{await s(a)}},l={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{placeholder:"Search"})]})},play:async({canvasElement:a})=>{await s(a)}},c={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:y.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(x,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{placeholder:"Search"})]})},play:async({canvasElement:a})=>{await s(a)}},p={args:{status:"success",label:"Input label",message:"This is a success caption under a text input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{})]})},play:async({canvasElement:a})=>{await s(a)}},m={args:{status:"error",label:"Input label",message:"This is an error caption under a text input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{})]})},play:async({canvasElement:a})=>{await s(a)}},d={args:{status:"warning",label:"Input label",message:"This is a warning caption under a text input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{})]})},play:async({canvasElement:a})=>{await s(a)}},u={args:{label:"Input label",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{placeholder:"Disabled Input",disabled:!0})]})},play:async({canvasElement:a})=>{await D(a)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    message: 'This is a message',
    children: <DsFormControl.Textarea placeholder="Input" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    style: {
      width: '300px'
    },
    children: <DsFormControl.Textarea placeholder="Input with custom width" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    style: {
      width: '400px',
      padding: '16px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    },
    children: <DsFormControl.Textarea placeholder="Input with custom styling" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    style: {
      width: '300px'
    },
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Textarea placeholder="Search" />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    slots: {
      endAdornment: <button type="button" className={styles.helpIcon} onClick={() => alert('Help clicked!')} aria-label="Help">
                    <DsIcon icon="info" size="small" />
                </button>
    },
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Textarea placeholder="Search" />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success',
    label: 'Input label',
    message: 'This is a success caption under a text input.',
    messageIcon: 'check_circle',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Textarea />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Input label',
    message: 'This is an error caption under a text input.',
    messageIcon: 'error',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Textarea />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    label: 'Input label',
    message: 'This is a warning caption under a text input.',
    messageIcon: 'info',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Textarea />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Textarea placeholder="Disabled Input" disabled />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await checkDisabled(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};const ae=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled"];export{n as Default,u as Disabled,m as Error,p as Success,d as Warning,i as WithCustomStyles,o as WithCustomWidth,l as WithDescription,c as WithHelpIcon,ae as __namedExportsOrder,ee as default};
