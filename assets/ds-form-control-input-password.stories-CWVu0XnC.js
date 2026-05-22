import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{t as n}from"./ds-icon-DXhPTqDg.js";import{t as r}from"./ds-icon-po8XRx6l.js";import{i,n as a,r as o,t as s}from"./ds-form-control.types-Dgk6CzDQ.js";import{i as c,n as l,r as u,t as d}from"./ds-form-control-stories-shared-6CBKl7Oc.js";import{n as f,t as p}from"./ds-form-control.stories.module-D4pn2_YZ.js";var m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{a(),r(),i(),u(),f(),m=t(),h={title:`Components/FormControl/Password`,component:o,parameters:{layout:`centered`},argTypes:{status:{control:{type:`select`},options:s,description:`Form control color status`,table:{defaultValue:{summary:s[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},messageIcon:{control:`text`,description:`Icon to display in the message`},className:{control:`text`,description:`Additional CSS class names`},style:{control:`object`,description:`Additional styles to apply to the component`}}},g={args:{label:`Input label`,required:!0,message:`This is a message`,children:(0,m.jsx)(o.PasswordInput,{placeholder:`Enter password`})},play:async({canvasElement:e})=>{await c(e)}},_={args:{label:`Input label`,required:!0,style:{width:`300px`},children:(0,m.jsx)(o.PasswordInput,{placeholder:`Enter password`})},play:async({canvasElement:e})=>{await c(e)}},v={args:{label:`Input label`,required:!0,style:{width:`400px`,padding:`16px`,border:`2px solid #e0e0e0`,borderRadius:`8px`,backgroundColor:`#f9f9f9`},children:(0,m.jsx)(o.PasswordInput,{placeholder:`Password input with custom styling`})},play:async({canvasElement:e})=>{await c(e)}},y={args:{label:`Input label`,required:!0,style:{width:`300px`},children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Description,{children:(0,m.jsx)(d,{})}),(0,m.jsx)(o.PasswordInput,{placeholder:`Enter password`})]})},play:async({canvasElement:e})=>{await c(e)}},b={args:{label:`Input label`,required:!0,slots:{endAdornment:(0,m.jsx)(`button`,{type:`button`,className:p.helpIcon,onClick:()=>alert(`Help clicked!`),"aria-label":`Help`,children:(0,m.jsx)(n,{icon:`info`,size:`small`})})},children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Description,{children:(0,m.jsx)(d,{})}),(0,m.jsx)(o.PasswordInput,{placeholder:`Search`})]})},play:async({canvasElement:e})=>{await c(e)}},x={args:{status:`success`,label:`Input label`,message:`This is a success caption under a password input.`,messageIcon:`check_circle`,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Description,{children:(0,m.jsx)(d,{})}),(0,m.jsx)(o.PasswordInput,{})]})},play:async({canvasElement:e})=>{await c(e)}},S={args:{status:`error`,label:`Input label`,message:`This is an error caption under a password input.`,messageIcon:`error`,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Description,{children:(0,m.jsx)(d,{})}),(0,m.jsx)(o.PasswordInput,{})]})},play:async({canvasElement:e})=>{await c(e)}},C={args:{status:`warning`,label:`Input label`,message:`This is a warning caption under a password input.`,messageIcon:`info`,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Description,{children:(0,m.jsx)(d,{})}),(0,m.jsx)(o.PasswordInput,{})]})},play:async({canvasElement:e})=>{await c(e)}},w={args:{label:`Input label`,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Description,{children:(0,m.jsx)(d,{})}),(0,m.jsx)(o.PasswordInput,{placeholder:`Disabled Input`,disabled:!0})]})},play:async({canvasElement:e})=>{await l(e)}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithCustomWidth`,`WithCustomStyles`,`WithDescription`,`WithHelpIcon`,`Success`,`Error`,`Warning`,`Disabled`]}))();export{g as Default,w as Disabled,S as Error,x as Success,C as Warning,v as WithCustomStyles,_ as WithCustomWidth,y as WithDescription,b as WithHelpIcon,T as __namedExportsOrder,h as default};