import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as x}from"./ds-icon-D1s4GG0V.js";import{c as h,s,a as D,D as t}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as r}from"./ds-form-control-B32KBi-k.js";import{s as y}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-CBAFNLqb.js";import"./iframe-26JMa3UW.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-G-7Ucg4Z.js";import"./ds-checkbox-BZ9dsAY4.js";import"./index-CnjlJPlK.js";import"./index-CDWtTW78.js";import"./index-D_YUE0jP.js";import"./index-yFRfUkJz.js";import"./index-X79DC_Zg.js";import"./ds-button-CyUMIsYC.js";import"./ds-button-legacy-Cr4NDw-s.js";import"./ds-button-new-CTldSkbr.js";import"./ds-chip-m3YaEjhW.js";import"./ds-typography-vtGMs8LE.js";import"./index-lBg9QBRs.js";import"./use-locale-context-BS1wkscy.js";import"./index-B0z3gEa2.js";import"./ds-text-input-CkoHul03.js";import"./list-collection-CqC388Pu.js";import"./index-Blh3bCSV.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-BYQ-NjYx.js";import"./index-CalGd92a.js";import"./use-field-context-D8Wlew7R.js";import"./portal-W_dviWnv.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-aBe4Ajrj.js";import"./ds-textarea-Bp86jVpC.js";import"./ds-number-input-DV6LhSZ3.js";import"./ds-password-input-CwuPQpfD.js";import"./ds-date-input-Bh6jVUeo.js";const ae={title:"Design System/FormControl/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:h,description:"Form control color status",table:{defaultValue:{summary:h[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},n={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(r.Textarea,{placeholder:"Input"})},play:async({canvasElement:a})=>{await s(a)}},o={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(r.Textarea,{placeholder:"Input with custom width"})},play:async({canvasElement:a})=>{await s(a)}},i={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(r.Textarea,{placeholder:"Input with custom styling"})},play:async({canvasElement:a})=>{await s(a)}},l={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{placeholder:"Search"})]})},play:async({canvasElement:a})=>{await s(a)}},c={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:y.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(x,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{placeholder:"Search"})]})},play:async({canvasElement:a})=>{await s(a)}},p={args:{status:"success",label:"Input label",message:"This is a success caption under a text input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{})]})},play:async({canvasElement:a})=>{await s(a)}},m={args:{status:"error",label:"Input label",message:"This is an error caption under a text input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{})]})},play:async({canvasElement:a})=>{await s(a)}},d={args:{status:"warning",label:"Input label",message:"This is a warning caption under a text input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{})]})},play:async({canvasElement:a})=>{await s(a)}},u={args:{label:"Input label",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.Textarea,{placeholder:"Disabled Input",disabled:!0})]})},play:async({canvasElement:a})=>{await D(a)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const re=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled"];export{n as Default,u as Disabled,m as Error,p as Success,d as Warning,i as WithCustomStyles,o as WithCustomWidth,l as WithDescription,c as WithHelpIcon,re as __namedExportsOrder,ae as default};
