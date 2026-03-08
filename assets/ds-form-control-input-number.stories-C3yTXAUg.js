import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as f,D as l}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as E}from"./ds-icon-DMTFLbiR.js";import{D as a}from"./ds-form-control-BmO8mZrj.js";import{s as C}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-Bf-54wPu.js";import"./iframe-BSfF28J8.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-DLG6gGBB.js";import"./ds-checkbox-DPMpRlms.js";import"./index-RsnRcPCc.js";import"./index-sglKFT7D.js";import"./index-BzC6s-iE.js";import"./index-BZ4hDW5j.js";import"./index-7TJoVjK2.js";import"./ds-button-SSBRyEVn.js";import"./ds-button-legacy-CJoyzBOc.js";import"./ds-button-new-CKdi5Y8l.js";import"./ds-chip-snuukHuA.js";import"./ds-typography-TLRViw0O.js";import"./index-BHJELap7.js";import"./use-locale-context-BXGYH-G_.js";import"./create-anatomy-DPnaczCP.js";import"./ds-text-input-Bze-KVQm.js";import"./list-collection-CUkAIAZC.js";import"./chunk-QZ7TP4HQ-O9Gy0rNO.js";import"./equal-DfFTejAs.js";import"./use-field-context-DYiHHwY6.js";import"./event-CBXSxTbR.js";import"./form-DywkYwc3.js";import"./initial-focus-CcvO_sI7.js";import"./set-CN0Hvdz-.js";import"./typeahead-CJj2tNF7.js";import"./query-CjgVAlRR.js";import"./visually-hidden-BShGFMbX.js";import"./get-styles-BOVpeMAL.js";import"./floating-ui.dom-D3zTlarL.js";import"./raf-CC9hSMXO.js";import"./computed-style-Dlx_PkG-.js";import"./index-CazKU5oL.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-D3gtpCn3.js";import"./portal-CqcPpFZT.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-GE6cLLPI.js";import"./ds-textarea-BwAWgBTb.js";import"./ds-number-input-CRGjeuVv.js";import"./number-Bu-e0fmS.js";import"./memo-BRlFl984.js";import"./caret-BrXylHYy.js";import"./ds-password-input-BHZXalwc.js";import"./ds-date-input-BrGyZ8dR.js";const{expect:s,userEvent:i,waitFor:I,within:w}=__STORYBOOK_MODULE_TEST__,Ce={title:"Design System/FormControl/Number",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:f,description:"Form control color status",table:{defaultValue:{summary:f[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},n=async t=>{const o=w(t),r=o.getByPlaceholderText("Enter number"),g=o.getByRole("button",{name:/increase/i}),x=o.getByRole("button",{name:/decrease/i});await s(r).toHaveValue("10"),await i.click(g),await I(async()=>{await s(r).toHaveValue("11")}),await i.click(x),await I(async()=>{await s(r).toHaveValue("10")}),await i.clear(r),await i.click(r),await i.type(r,"25"),await I(async()=>{await s(r).toHaveValue("25")})},j=async t=>{const o=w(t),r=o.getByPlaceholderText("Disabled Input"),g=o.getByRole("button",{name:/increase/i}),x=o.getByRole("button",{name:/decrease/i});await s(r).toBeDisabled(),await s(g).toBeDisabled(),await s(x).toBeDisabled(),await i.type(r,"Should not type"),await s(r.value).toBe("10")},c={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:t})=>{await n(t)}},p={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:t})=>{await n(t)}},m={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:t})=>{await n(t)}},u={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await n(t)}},d={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:C.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(E,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await n(t)}},b={args:{status:"success",label:"Input label",message:"This is a success caption under a number input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await n(t)}},h={args:{status:"error",label:"Input label",message:"This is an error caption under a number input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await n(t)}},y={args:{status:"warning",label:"Input label",message:"This is a warning caption under a number input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await n(t)}},D={args:{label:"Input label",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Disabled Input",disabled:!0,min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await j(t)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const je=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","Success","Error","Warning","Disabled"];export{c as Default,D as Disabled,h as Error,b as Success,y as Warning,m as WithCustomStyles,p as WithCustomWidth,u as WithDescription,d as WithHelpIcon,je as __namedExportsOrder,Ce as default};
