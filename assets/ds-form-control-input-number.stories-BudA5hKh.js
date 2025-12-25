import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as f,D as l}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as E}from"./ds-icon-KpcpguMC.js";import{D as t}from"./ds-form-control-0aTI_LKH.js";import{s as C}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-BUbhxwPU.js";import"./iframe-DJPW-05a.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-Ee7lIzRG.js";import"./ds-checkbox-9hw-tva-.js";import"./index-DgjjHQxi.js";import"./index-MzK31Eo7.js";import"./index-CKS76wfi.js";import"./index-BOlOYjNG.js";import"./index-BHC47IJl.js";import"./ds-button-DObM0JZQ.js";import"./ds-button-legacy-BESCcEeu.js";import"./ds-button-new-CoVRtZtg.js";import"./ds-chip-C4Cua8Fl.js";import"./ds-typography-BFv-GORc.js";import"./index-DI_1bvzY.js";import"./use-locale-context-BlISPb9c.js";import"./index-CQ-JdYCr.js";import"./ds-text-input-CCszUhpY.js";import"./index-x-VqI0ma.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-CzxmrzRX.js";import"./use-field-context-rW6R-8WL.js";import"./portal-D7ShUcAA.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-BalrJASk.js";import"./ds-textarea-Cyvk2ivX.js";import"./ds-number-input-Z8jB7fec.js";import"./ds-password-input-DfRNrpMh.js";const{expect:s,userEvent:i,waitFor:I,within:w}=__STORYBOOK_MODULE_TEST__,oe={title:"Design System/FormControl/Number",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:f,description:"Form control color status",table:{defaultValue:{summary:f[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},n=async a=>{const o=w(a),r=o.getByPlaceholderText("Enter number"),g=o.getByRole("button",{name:/increase/i}),x=o.getByRole("button",{name:/decrease/i});await s(r).toHaveValue("10"),await i.click(g),await I(async()=>{await s(r).toHaveValue("11")}),await i.click(x),await I(async()=>{await s(r).toHaveValue("10")}),await i.clear(r),await i.type(r,"25"),await I(async()=>{await s(r).toHaveValue("25")})},j=async a=>{const o=w(a),r=o.getByPlaceholderText("Disabled Input"),g=o.getByRole("button",{name:/increase/i}),x=o.getByRole("button",{name:/decrease/i});await s(r).toBeDisabled(),await s(g).toBeDisabled(),await s(x).toBeDisabled(),await i.type(r,"Should not type"),await s(r.value).toBe("10")},c={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:a})=>{await n(a)}},p={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:a})=>{await n(a)}},m={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:a})=>{await n(a)}},u={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(l,{})}),e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await n(a)}},d={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:C.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(E,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(l,{})}),e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await n(a)}},b={args:{status:"success",label:"Input label",message:"This is a success caption under a number input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(l,{})}),e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await n(a)}},h={args:{status:"error",label:"Input label",message:"This is an error caption under a number input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(l,{})}),e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await n(a)}},y={args:{status:"warning",label:"Input label",message:"This is a warning caption under a number input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(l,{})}),e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await n(a)}},D={args:{label:"Input label",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(l,{})}),e.jsx(t.NumberInput,{placeholder:"Disabled Input",disabled:!0,min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await j(a)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    message: 'This is a message',
    children: <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    style: {
      width: '300px'
    },
    children: <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    children: <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
                <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
                <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success',
    label: 'Input label',
    message: 'This is a success caption under a number input.',
    messageIcon: 'check_circle',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Input label',
    message: 'This is an error caption under a number input.',
    messageIcon: 'error',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    label: 'Input label',
    message: 'This is a warning caption under a number input.',
    messageIcon: 'info',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.NumberInput placeholder="Disabled Input" disabled min={1} max={100} step={1} defaultValue={10} />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await checkDisabled(canvasElement);
  }
}`,...D.parameters?.docs?.source}}};const le=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled"];export{c as Default,D as Disabled,h as Error,b as Success,y as Warning,m as WithCustomStyles,p as WithCustomWidth,u as WithDescription,d as WithHelpIcon,le as __namedExportsOrder,oe as default};
