import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as f,D as i}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as E}from"./ds-icon-TPj7LnG_.js";import{D as t}from"./ds-form-control-ClNieLGs.js";import{s as C}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-vR7H37t8.js";import"./iframe-C35wd6OW.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-DVFr5R51.js";import"./ds-checkbox-Bv4djJ2S.js";import"./index-Cll6iCD1.js";import"./index-DZwnHPxE.js";import"./index-BvzhyPw-.js";import"./index-bEvhw2jB.js";import"./index-BAxaTGUJ.js";import"./ds-button-B0XdZ6dO.js";import"./ds-button-legacy-Ytzz4KpG.js";import"./ds-button-new-Bt5amHzt.js";import"./ds-chip-BX9AtVpa.js";import"./ds-typography-BnPyWIdy.js";import"./index-DuovCFOX.js";import"./use-locale-context-BUocalMb.js";import"./index-BAycVH_u.js";import"./ds-text-input-B05nKCPj.js";import"./index-ZMeE9xuH.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-CNbFIU5A.js";import"./use-field-context-CxLPCm3i.js";import"./portal-Bj-naz6f.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-PK7QDJ2g.js";import"./ds-textarea-DpIsOS9E.js";import"./ds-number-input-DsYncrIB.js";import"./ds-password-input-BTJ-8O-D.js";import"./ds-date-input-BSVbBOpq.js";const{expect:s,userEvent:l,waitFor:I,within:w}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/FormControl/Number",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:f,description:"Form control color status",table:{defaultValue:{summary:f[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},n=async a=>{const o=w(a),r=o.getByPlaceholderText("Enter number"),g=o.getByRole("button",{name:/increase/i}),x=o.getByRole("button",{name:/decrease/i});await s(r).toHaveValue("10"),await l.click(g),await I(async()=>{await s(r).toHaveValue("11")}),await l.click(x),await I(async()=>{await s(r).toHaveValue("10")}),await l.clear(r),await l.click(r),await l.type(r,"25"),await I(async()=>{await s(r).toHaveValue("25")})},j=async a=>{const o=w(a),r=o.getByPlaceholderText("Disabled Input"),g=o.getByRole("button",{name:/increase/i}),x=o.getByRole("button",{name:/decrease/i});await s(r).toBeDisabled(),await s(g).toBeDisabled(),await s(x).toBeDisabled(),await l.type(r,"Should not type"),await s(r.value).toBe("10")},c={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:a})=>{await n(a)}},p={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:a})=>{await n(a)}},m={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:a})=>{await n(a)}},u={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(i,{})}),e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await n(a)}},d={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:C.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(E,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(i,{})}),e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await n(a)}},b={args:{status:"success",label:"Input label",message:"This is a success caption under a number input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(i,{})}),e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await n(a)}},h={args:{status:"error",label:"Input label",message:"This is an error caption under a number input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(i,{})}),e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await n(a)}},y={args:{status:"warning",label:"Input label",message:"This is a warning caption under a number input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(i,{})}),e.jsx(t.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await n(a)}},D={args:{label:"Input label",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Description,{children:e.jsx(i,{})}),e.jsx(t.NumberInput,{placeholder:"Disabled Input",disabled:!0,min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:a})=>{await j(a)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const ie=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled"];export{c as Default,D as Disabled,h as Error,b as Success,y as Warning,m as WithCustomStyles,p as WithCustomWidth,u as WithDescription,d as WithHelpIcon,ie as __namedExportsOrder,le as default};
