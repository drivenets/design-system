import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as h,s as a,a as D,D as t}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as y}from"./ds-icon-1gOSvpfE.js";import{D as r}from"./ds-form-control-D0Qk9Va0.js";import{s as g}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-CyVwjvxh.js";import"./iframe-BPLrTRo-.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-DK9RvwkN.js";import"./ds-checkbox-Dzk_hO3C.js";import"./index-CpCYkZY0.js";import"./index-CJ8h-r11.js";import"./index-BVhbXaiP.js";import"./index-DVPgbi3z.js";import"./index-CWDUDJQ_.js";import"./ds-button-___CU-ay.js";import"./ds-button-legacy-DD19_-mr.js";import"./ds-button-new-CELeUDwC.js";import"./ds-chip-DOZRFH5I.js";import"./ds-typography-CreIUUad.js";import"./index-7Tv2eG7T.js";import"./use-locale-context-u38BYWn2.js";import"./create-anatomy-DZWx62ik.js";import"./ds-text-input-BJKzJZ9p.js";import"./list-collection-D59E7fne.js";import"./chunk-QZ7TP4HQ-O9Gy0rNO.js";import"./equal-DfFTejAs.js";import"./use-field-context-BjEaC0cK.js";import"./event-CBXSxTbR.js";import"./form-Mel7wBDm.js";import"./initial-focus-nLUQKyFp.js";import"./set-CWLUoojH.js";import"./typeahead-BmgkQBP_.js";import"./query-CjgVAlRR.js";import"./visually-hidden-BShGFMbX.js";import"./get-styles-DAe4bv2u.js";import"./floating-ui.dom-D3zTlarL.js";import"./raf-CC9hSMXO.js";import"./computed-style-p8FDg9Vo.js";import"./index-Cy5QFdgs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-D9GrQuCC.js";import"./portal-aIm2ggoK.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-CaS2ivmW.js";import"./ds-textarea-DaZK4LOu.js";import"./ds-number-input-CvGBTwiT.js";import"./number-Bu-e0fmS.js";import"./memo-BRlFl984.js";import"./caret-BrXylHYy.js";import"./ds-password-input-Cim9lRmm.js";import"./ds-date-input-HUKzh1Es.js";const ye={title:"Design System/FormControl/Password",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:h,description:"Form control color status",table:{defaultValue:{summary:h[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},o={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(r.PasswordInput,{placeholder:"Enter password"})},play:async({canvasElement:s})=>{await a(s)}},n={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(r.PasswordInput,{placeholder:"Enter password"})},play:async({canvasElement:s})=>{await a(s)}},i={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(r.PasswordInput,{placeholder:"Password input with custom styling"})},play:async({canvasElement:s})=>{await a(s)}},l={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{placeholder:"Enter password"})]})},play:async({canvasElement:s})=>{await a(s)}},c={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:g.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(y,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{placeholder:"Search"})]})},play:async({canvasElement:s})=>{await a(s)}},p={args:{status:"success",label:"Input label",message:"This is a success caption under a password input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{})]})},play:async({canvasElement:s})=>{await a(s)}},m={args:{status:"error",label:"Input label",message:"This is an error caption under a password input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{})]})},play:async({canvasElement:s})=>{await a(s)}},d={args:{status:"warning",label:"Input label",message:"This is a warning caption under a password input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{})]})},play:async({canvasElement:s})=>{await a(s)}},u={args:{label:"Input label",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Description,{children:e.jsx(t,{})}),e.jsx(r.PasswordInput,{placeholder:"Disabled Input",disabled:!0})]})},play:async({canvasElement:s})=>{await D(s)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ge=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled"];export{o as Default,u as Disabled,m as Error,p as Success,d as Warning,i as WithCustomStyles,n as WithCustomWidth,l as WithDescription,c as WithHelpIcon,ge as __namedExportsOrder,ye as default};
