import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{i as n}from"./ds-icon.types-CZSTrRET.js";import{t as r}from"./ds-icon-DJ8Gz1Bw.js";import{i,n as a,r as o,t as s}from"./ds-form-control.types-Dqe28uDD.js";import{r as c,t as l}from"./ds-form-control-stories-shared-BG36xydm.js";import{n as u,t as d}from"./ds-form-control.stories.module-DoTr3e7l.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{a(),r(),i(),c(),u(),f=t(),{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Design System/FormControl/Number`,component:o,parameters:{layout:`centered`},argTypes:{status:{control:{type:`select`},options:s,description:`Form control color status`,table:{defaultValue:{summary:s[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},messageIcon:{control:`text`,description:`Icon to display in the message`},className:{control:`text`,description:`Additional CSS class names`},style:{control:`object`,description:`Additional styles to apply to the component`}}},v=async e=>{let t=g(e),n=t.getByPlaceholderText(`Enter number`),r=t.getByRole(`button`,{name:/increase/i}),i=t.getByRole(`button`,{name:/decrease/i});await p(n).toHaveValue(`10`),await m.click(r),await h(async()=>{await p(n).toHaveValue(`11`)}),await m.click(i),await h(async()=>{await p(n).toHaveValue(`10`)}),await m.clear(n),await m.click(n),await m.type(n,`25`),await h(async()=>{await p(n).toHaveValue(`25`)})},y=async e=>{let t=g(e),n=t.getByPlaceholderText(`Disabled Input`),r=t.getByRole(`button`,{name:/increase/i}),i=t.getByRole(`button`,{name:/decrease/i});await p(n).toBeDisabled(),await p(r).toBeDisabled(),await p(i).toBeDisabled(),await m.type(n,`Should not type`),await p(n.value).toBe(`10`)},b={args:{label:`Input label`,required:!0,message:`This is a message`,children:(0,f.jsx)(o.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:e})=>{await v(e)}},x={args:{label:`Input label`,required:!0,style:{width:`300px`},children:(0,f.jsx)(o.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:e})=>{await v(e)}},S={args:{label:`Input label`,required:!0,style:{width:`400px`,padding:`16px`,border:`2px solid #e0e0e0`,borderRadius:`8px`,backgroundColor:`#f9f9f9`},children:(0,f.jsx)(o.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})},play:async({canvasElement:e})=>{await v(e)}},C={args:{label:`Input label`,required:!0,style:{width:`300px`},children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Description,{children:(0,f.jsx)(l,{})}),(0,f.jsx)(o.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:e})=>{await v(e)}},w={args:{label:`Input label`,required:!0,slots:{endAdornment:(0,f.jsx)(`button`,{type:`button`,className:d.helpIcon,onClick:()=>alert(`Help clicked!`),"aria-label":`Help`,children:(0,f.jsx)(n,{icon:`info`,size:`small`})})},children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Description,{children:(0,f.jsx)(l,{})}),(0,f.jsx)(o.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:e})=>{await v(e)}},T={args:{status:`success`,label:`Input label`,message:`This is a success caption under a number input.`,messageIcon:`check_circle`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Description,{children:(0,f.jsx)(l,{})}),(0,f.jsx)(o.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:e})=>{await v(e)}},E={args:{status:`error`,label:`Input label`,message:`This is an error caption under a number input.`,messageIcon:`error`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Description,{children:(0,f.jsx)(l,{})}),(0,f.jsx)(o.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:e})=>{await v(e)}},D={args:{status:`warning`,label:`Input label`,message:`This is a warning caption under a number input.`,messageIcon:`info`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Description,{children:(0,f.jsx)(l,{})}),(0,f.jsx)(o.NumberInput,{placeholder:`Enter number`,min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:e})=>{await v(e)}},O={args:{label:`Input label`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Description,{children:(0,f.jsx)(l,{})}),(0,f.jsx)(o.NumberInput,{placeholder:`Disabled Input`,disabled:!0,min:1,max:100,step:1,defaultValue:10})]})},play:async({canvasElement:e})=>{await y(e)}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`WithCustomWidth`,`WithCustomStyles`,`WithDescription`,`WithHelpIcon`,`Success`,`Error`,`Warning`,`Disabled`]}))();export{b as Default,O as Disabled,E as Error,T as Success,D as Warning,S as WithCustomStyles,x as WithCustomWidth,C as WithDescription,w as WithHelpIcon,k as __namedExportsOrder,_ as default};