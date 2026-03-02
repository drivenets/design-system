import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as x}from"./ds-icon-wJT6-GyH.js";import{c as h,s as t,a as D,D as s}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as a}from"./ds-form-control-DWhYdzsN.js";import{s as y}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-Cf-Aqoiw.js";import"./iframe-CGGqhJZM.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-CJqv51g0.js";import"./ds-checkbox-B4fVMJDk.js";import"./index-DdAn7553.js";import"./index-BLp7RO1s.js";import"./index-vHdRJk2l.js";import"./index-DhEG2yMt.js";import"./index-Cmkja-0I.js";import"./ds-button-BDhgk_Di.js";import"./ds-button-legacy-ClM_Zmyq.js";import"./ds-button-new-Cmn_ORbK.js";import"./ds-chip-CFKrwsRv.js";import"./ds-typography-DrmV-dlC.js";import"./index-Cc9jv_m4.js";import"./use-locale-context-XDnOpn12.js";import"./create-anatomy-CKbq06WN.js";import"./ds-text-input-B3NgkwBQ.js";import"./list-collection-BJvZ2m-c.js";import"./equal-DfFTejAs.js";import"./use-field-context-DYr8bbLn.js";import"./event-CBXSxTbR.js";import"./form-DHqEfzKH.js";import"./typeahead-CruEGWlX.js";import"./set-AvHEAGVB.js";import"./query-CjgVAlRR.js";import"./visually-hidden-BShGFMbX.js";import"./get-styles-BW4iwWQj.js";import"./floating-ui.dom-D3zTlarL.js";import"./raf-CC9hSMXO.js";import"./use-presence-DHBSCowT.js";import"./index-CNkqlp3T.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-Orvkg4-k.js";import"./portal-DgJnIf4i.js";import"./create-split-props-u5h9OPvL.js";import"./ds-textarea-iT-Ol5XF.js";import"./ds-number-input-DUxLqC3a.js";import"./number-Bu-e0fmS.js";import"./memo-BRlFl984.js";import"./caret-BrXylHYy.js";import"./ds-password-input-B_HRjwd-.js";import"./ds-date-input-r4BSsqaM.js";const ue={title:"Design System/FormControl/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:h,description:"Form control color status",table:{defaultValue:{summary:h[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},o={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(a.Textarea,{placeholder:"Input"})},play:async({canvasElement:r})=>{await t(r)}},n={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(a.Textarea,{placeholder:"Input with custom width"})},play:async({canvasElement:r})=>{await t(r)}},i={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(a.Textarea,{placeholder:"Input with custom styling"})},play:async({canvasElement:r})=>{await t(r)}},l={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(s,{})}),e.jsx(a.Textarea,{placeholder:"Search"})]})},play:async({canvasElement:r})=>{await t(r)}},c={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:y.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(x,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(s,{})}),e.jsx(a.Textarea,{placeholder:"Search"})]})},play:async({canvasElement:r})=>{await t(r)}},p={args:{status:"success",label:"Input label",message:"This is a success caption under a text input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(s,{})}),e.jsx(a.Textarea,{})]})},play:async({canvasElement:r})=>{await t(r)}},m={args:{status:"error",label:"Input label",message:"This is an error caption under a text input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(s,{})}),e.jsx(a.Textarea,{})]})},play:async({canvasElement:r})=>{await t(r)}},d={args:{status:"warning",label:"Input label",message:"This is a warning caption under a text input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(s,{})}),e.jsx(a.Textarea,{})]})},play:async({canvasElement:r})=>{await t(r)}},u={args:{label:"Input label",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(s,{})}),e.jsx(a.Textarea,{placeholder:"Disabled Input",disabled:!0})]})},play:async({canvasElement:r})=>{await D(r)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const he=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled"];export{o as Default,u as Disabled,m as Error,p as Success,d as Warning,i as WithCustomStyles,n as WithCustomWidth,l as WithDescription,c as WithHelpIcon,he as __namedExportsOrder,ue as default};
