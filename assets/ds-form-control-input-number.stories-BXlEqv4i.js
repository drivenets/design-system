import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as f,D as l}from"./ds-form-control-stories-shared-DcxwFbb5.js";import{D as E}from"./ds-icon-1gOSvpfE.js";import{D as a}from"./ds-form-control-D0Qk9Va0.js";import{s as C}from"./ds-form-control.stories.module-C4cfW0LK.js";import"./index-CyVwjvxh.js";import"./iframe-BPLrTRo-.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-DK9RvwkN.js";import"./ds-checkbox-Dzk_hO3C.js";import"./index-CpCYkZY0.js";import"./index-CJ8h-r11.js";import"./index-BVhbXaiP.js";import"./index-DVPgbi3z.js";import"./index-CWDUDJQ_.js";import"./ds-button-___CU-ay.js";import"./ds-button-legacy-DD19_-mr.js";import"./ds-button-new-CELeUDwC.js";import"./ds-chip-DOZRFH5I.js";import"./ds-typography-CreIUUad.js";import"./index-7Tv2eG7T.js";import"./use-locale-context-u38BYWn2.js";import"./create-anatomy-DZWx62ik.js";import"./ds-text-input-BJKzJZ9p.js";import"./list-collection-D59E7fne.js";import"./chunk-QZ7TP4HQ-O9Gy0rNO.js";import"./equal-DfFTejAs.js";import"./use-field-context-BjEaC0cK.js";import"./event-CBXSxTbR.js";import"./form-Mel7wBDm.js";import"./initial-focus-nLUQKyFp.js";import"./set-CWLUoojH.js";import"./typeahead-BmgkQBP_.js";import"./query-CjgVAlRR.js";import"./visually-hidden-BShGFMbX.js";import"./get-styles-DAe4bv2u.js";import"./floating-ui.dom-D3zTlarL.js";import"./raf-CC9hSMXO.js";import"./computed-style-p8FDg9Vo.js";import"./index-Cy5QFdgs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-D9GrQuCC.js";import"./portal-aIm2ggoK.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-CaS2ivmW.js";import"./ds-textarea-DaZK4LOu.js";import"./ds-number-input-CvGBTwiT.js";import"./number-Bu-e0fmS.js";import"./memo-BRlFl984.js";import"./caret-BrXylHYy.js";import"./ds-password-input-Cim9lRmm.js";import"./ds-date-input-HUKzh1Es.js";const{expect:s,userEvent:i,waitFor:I,within:w}=__STORYBOOK_MODULE_TEST__,Ce={title:"Design System/FormControl/Number",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:f,description:"Form control color status",table:{defaultValue:{summary:f[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},n=async t=>{const o=w(t),r=o.getByPlaceholderText("Enter number"),g=o.getByRole("button",{name:/increase/i}),x=o.getByRole("button",{name:/decrease/i});await s(r).toHaveValue("10"),await i.click(g),await I(async()=>{await s(r).toHaveValue("11")}),await i.click(x),await I(async()=>{await s(r).toHaveValue("10")}),await i.clear(r),await i.click(r),await i.type(r,"25"),await I(async()=>{await s(r).toHaveValue("25")})},j=async t=>{const o=w(t),r=o.getByPlaceholderText("Disabled Input"),g=o.getByRole("button",{name:/increase/i}),x=o.getByRole("button",{name:/decrease/i});await s(r).toBeDisabled(),await s(g).toBeDisabled(),await s(x).toBeDisabled(),await i.type(r,"Should not type"),await s(r.value).toBe("10")},c={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:t})=>{await n(t)}},p={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:t})=>{await n(t)}},m={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:t})=>{await n(t)}},u={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await n(t)}},d={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",className:C.helpIcon,onClick:()=>alert("Help clicked!"),"aria-label":"Help",children:e.jsx(E,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await n(t)}},b={args:{status:"success",label:"Input label",message:"This is a success caption under a number input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await n(t)}},h={args:{status:"error",label:"Input label",message:"This is an error caption under a number input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await n(t)}},y={args:{status:"warning",label:"Input label",message:"This is a warning caption under a number input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Enter number",min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await n(t)}},D={args:{label:"Input label",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Description,{children:e.jsx(l,{})}),e.jsx(a.NumberInput,{placeholder:"Disabled Input",disabled:!0,min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:t})=>{await j(t)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
