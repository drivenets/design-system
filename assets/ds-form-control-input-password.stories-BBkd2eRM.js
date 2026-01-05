import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as h,s as a,D as t,a as D}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as y}from"./ds-icon-BRUdx6bJ.js";import{D as r}from"./ds-form-control-bbJ5x0gk.js";import{s as g}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-BlcxGCkW.js";import"./iframe-RxI9bAYy.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-BldCZfiM.js";import"./ds-checkbox-CV8-uRa_.js";import"./index-DMghN3K2.js";import"./index-BSNazpzB.js";import"./index-gwzPaq3b.js";import"./index-CWucLLfh.js";import"./index-C_0rDp91.js";import"./ds-button-DQiwnNK1.js";import"./ds-button-legacy-q92oxbfe.js";import"./ds-button-new-D4SbnZH0.js";import"./ds-chip-B-lwrDi8.js";import"./ds-typography-DYk-6nhB.js";import"./index-Decedjlc.js";import"./use-locale-context-DghkyWl0.js";import"./index-Bxh9dWS5.js";import"./ds-text-input-DWSzgCW_.js";import"./index-9DcJS-GW.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-BxvCWgkP.js";import"./use-field-context-b-Dc8fcY.js";import"./portal-CBB3-NF6.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-DRZhKhn3.js";import"./ds-textarea-Cq_WdP3H.js";import"./ds-number-input-DyyiYWd8.js";import"./ds-password-input-BJ-TIEvO.js";const Z={title:"Design System/FormControl/Password",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:h,description:"Form control color status",table:{defaultValue:{summary:h[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},n={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(r.PasswordInput,{placeholder:"Enter password"})},play:async({canvasElement:s})=>{await a(s)}},o={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(r.PasswordInput,{placeholder:"Enter password"})},play:async({canvasElement:s})=>{await a(s)}},i={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(r.PasswordInput,{placeholder:"Password input with custom styling"})},play:async({canvasElement:s})=>{await a(s)}},l={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{placeholder:"Enter password"})]})},play:async({canvasElement:s})=>{await a(s)}},c={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:g.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(y,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{placeholder:"Search"})]})},play:async({canvasElement:s})=>{await a(s)}},p={args:{status:"success",label:"Input label",message:"This is a success caption under a password input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{})]})},play:async({canvasElement:s})=>{await a(s)}},d={args:{status:"error",label:"Input label",message:"This is an error caption under a password input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{})]})},play:async({canvasElement:s})=>{await a(s)}},m={args:{status:"warning",label:"Input label",message:"This is a warning caption under a password input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{})]})},play:async({canvasElement:s})=>{await a(s)}},u={args:{label:"Input label",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{placeholder:"Disabled Input",disabled:!0})]})},play:async({canvasElement:s})=>{await D(s)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const $=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled"];export{n as Default,u as Disabled,d as Error,p as Success,m as Warning,i as WithCustomStyles,o as WithCustomWidth,l as WithDescription,c as WithHelpIcon,$ as __namedExportsOrder,Z as default};
