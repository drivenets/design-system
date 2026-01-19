import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as x}from"./ds-icon-DSSaz8Tl.js";import{c as h,s,D as t,a as D}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as r}from"./ds-form-control-svip2I2Y.js";import{s as y}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-D19FLPeo.js";import"./iframe-BXAOmh9a.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-hnYo0LTh.js";import"./ds-checkbox-M1jhvXNw.js";import"./index-C19X6qc_.js";import"./index-DsX_BRyd.js";import"./index-90yLpvKO.js";import"./index-BuW0p8V2.js";import"./index-BU_gPc4C.js";import"./ds-button-aLZomyKz.js";import"./ds-button-legacy-mmIVZEfY.js";import"./ds-button-new-CsLrTOgH.js";import"./ds-chip-BB8Xs-tN.js";import"./ds-typography-D7IYLqk3.js";import"./index-BDMAP15r.js";import"./use-locale-context-Dq5dQjhb.js";import"./index-i8bkvtfA.js";import"./ds-text-input-DdnHoI4F.js";import"./index-CtLbKKPa.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-VTC5MUn7.js";import"./use-field-context-Bxe58XJ-.js";import"./portal-CcVK6v-P.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-HIIT_gMI.js";import"./ds-textarea-Dx9lb8pQ.js";import"./ds-number-input-Btzk7a4d.js";import"./ds-password-input-BuL3LMSf.js";import"./ds-date-input-hB16WARl.js";const $={title:"Design System/FormControl/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:h,description:"Form control color status",table:{defaultValue:{summary:h[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},n={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(r.Textarea,{placeholder:"Input"})},play:async({canvasElement:a})=>{await s(a)}},o={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(r.Textarea,{placeholder:"Input with custom width"})},play:async({canvasElement:a})=>{await s(a)}},i={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(r.Textarea,{placeholder:"Input with custom styling"})},play:async({canvasElement:a})=>{await s(a)}},l={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{placeholder:"Search"})]})},play:async({canvasElement:a})=>{await s(a)}},c={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:y.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(x,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{placeholder:"Search"})]})},play:async({canvasElement:a})=>{await s(a)}},p={args:{status:"success",label:"Input label",message:"This is a success caption under a text input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{})]})},play:async({canvasElement:a})=>{await s(a)}},m={args:{status:"error",label:"Input label",message:"This is an error caption under a text input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{})]})},play:async({canvasElement:a})=>{await s(a)}},d={args:{status:"warning",label:"Input label",message:"This is a warning caption under a text input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{})]})},play:async({canvasElement:a})=>{await s(a)}},u={args:{label:"Input label",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{placeholder:"Disabled Input",disabled:!0})]})},play:async({canvasElement:a})=>{await D(a)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ee=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled"];export{n as Default,u as Disabled,m as Error,p as Success,d as Warning,i as WithCustomStyles,o as WithCustomWidth,l as WithDescription,c as WithHelpIcon,ee as __namedExportsOrder,$ as default};
