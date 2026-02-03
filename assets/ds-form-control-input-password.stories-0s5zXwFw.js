import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as h,s as a,D as t,a as D}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as y}from"./ds-icon-DFpW76RW.js";import{D as r}from"./ds-form-control-CSkg0Y2K.js";import{s as g}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-DpFyz-Lw.js";import"./iframe-msTs8qn0.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-BYXNLXfL.js";import"./ds-checkbox-DPmRIq0i.js";import"./index-DLvNrMFn.js";import"./index-CRW7Grpu.js";import"./index-CvhxhYzK.js";import"./index-CSwBWWe1.js";import"./index-BILGFtO0.js";import"./ds-button-BuZ8mtOe.js";import"./ds-button-legacy-ZEy36DZG.js";import"./ds-button-new-CZF5WK3X.js";import"./ds-chip-CdkFqsXl.js";import"./ds-typography-Dilj0ZGK.js";import"./index-CUhDGnXB.js";import"./use-locale-context-BQeNMJqG.js";import"./index-DE7EfUWw.js";import"./ds-text-input-l9U381cv.js";import"./list-collection-Cwp_T2xo.js";import"./index-6966ules.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-D1AB9nlB.js";import"./use-field-context-CpVfbhRk.js";import"./portal-D4QFhVos.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-B3gHxFPT.js";import"./ds-textarea-x9Amyn4W.js";import"./ds-number-input-DinHmlDU.js";import"./ds-password-input-ClzPOR3I.js";import"./ds-date-input-D5XS5zRw.js";const ee={title:"Design System/FormControl/Password",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:h,description:"Form control color status",table:{defaultValue:{summary:h[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},o={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(r.PasswordInput,{placeholder:"Enter password"})},play:async({canvasElement:s})=>{await a(s)}},n={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(r.PasswordInput,{placeholder:"Enter password"})},play:async({canvasElement:s})=>{await a(s)}},i={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(r.PasswordInput,{placeholder:"Password input with custom styling"})},play:async({canvasElement:s})=>{await a(s)}},l={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{placeholder:"Enter password"})]})},play:async({canvasElement:s})=>{await a(s)}},c={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:g.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(y,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{placeholder:"Search"})]})},play:async({canvasElement:s})=>{await a(s)}},p={args:{status:"success",label:"Input label",message:"This is a success caption under a password input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{})]})},play:async({canvasElement:s})=>{await a(s)}},d={args:{status:"error",label:"Input label",message:"This is an error caption under a password input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{})]})},play:async({canvasElement:s})=>{await a(s)}},m={args:{status:"warning",label:"Input label",message:"This is a warning caption under a password input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{})]})},play:async({canvasElement:s})=>{await a(s)}},u={args:{label:"Input label",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{placeholder:"Disabled Input",disabled:!0})]})},play:async({canvasElement:s})=>{await D(s)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    message: 'This is a message',
    children: <DsFormControl.PasswordInput placeholder="Enter password" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    style: {
      width: '300px'
    },
    children: <DsFormControl.PasswordInput placeholder="Enter password" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    children: <DsFormControl.PasswordInput placeholder="Password input with custom styling" />
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
                <DsFormControl.PasswordInput placeholder="Enter password" />
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
                <DsFormControl.PasswordInput placeholder="Search" />
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
    message: 'This is a success caption under a password input.',
    messageIcon: 'check_circle',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.PasswordInput />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Input label',
    message: 'This is an error caption under a password input.',
    messageIcon: 'error',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.PasswordInput />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    label: 'Input label',
    message: 'This is a warning caption under a password input.',
    messageIcon: 'info',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.PasswordInput />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.PasswordInput placeholder="Disabled Input" disabled />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await checkDisabled(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};const se=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled"];export{o as Default,u as Disabled,d as Error,p as Success,m as Warning,i as WithCustomStyles,n as WithCustomWidth,l as WithDescription,c as WithHelpIcon,se as __namedExportsOrder,ee as default};
