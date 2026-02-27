import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./ds-icon-D7KIPxkv.js";import{D as r}from"./ds-form-control-DOITWzmy.js";import{c as b,s as n,a as y}from"./ds-form-control-stories-shared-DcxwFbb5.js";import"./index-BRTNyK63.js";import"./iframe-BL4EkVfD.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-i-gbsv-n.js";import"./ds-checkbox-D9nShPEf.js";import"./index-y6pVhlvX.js";import"./index-vJ6V03-x.js";import"./index-CdnNnBHx.js";import"./index-BFWG_x5j.js";import"./index-5UMpNpdy.js";import"./ds-button-BATBrz52.js";import"./ds-button-legacy-DGO8e9G-.js";import"./ds-button-new-1k2Cg-Jt.js";import"./ds-chip-CvJHkJJ9.js";import"./ds-typography-CocuM6k2.js";import"./index-BQ3pj3wd.js";import"./use-locale-context-CfK79Gmh.js";import"./index-DQyNQ_gb.js";import"./ds-text-input-PbAP_0w4.js";import"./list-collection-v8DfQ_NP.js";import"./index-Bt03mnJC.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-DcGZhNWQ.js";import"./index-BFjzaSsA.js";import"./use-field-context-cMZvCRYZ.js";import"./portal-BBohPxSM.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-B1No_FNc.js";import"./ds-textarea-Cihm0a5T.js";import"./ds-number-input-CXbm8FKr.js";import"./ds-password-input-CEJF2TwT.js";import"./ds-date-input-Cwjv0yDa.js";const $={title:"Design System/FormControl/Text",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:b,description:"Form control color status",table:{defaultValue:{summary:b[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},a={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(r.TextInput,{placeholder:"Input"})},play:async({canvasElement:t})=>{await n(t)}},s={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(r.TextInput,{placeholder:"Input with custom width"})},play:async({canvasElement:t})=>{await n(t)}},i={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(r.TextInput,{placeholder:"Input with custom styling"})},play:async({canvasElement:t})=>{await n(t)}},c={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Description,{children:["This is a description text. It's an optional and will not exceeds more than 2 rows. A"," ",e.jsx("button",{type:"button",style:{background:"none",border:"none",padding:0,margin:0,cursor:"pointer",color:"var(--action-cta1)",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},onClick:()=>alert("Learn more clicked!"),children:"Learn more"})," ","can be added."]}),e.jsx(r.TextInput,{placeholder:"Search",slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"})}})]})},play:async({canvasElement:t})=>{await n(t)}},l={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",onClick:()=>alert("Help clicked!"),"aria-label":"Help",style:{background:"none",border:"none",padding:"4px",cursor:"pointer",color:"var(--neutral-3)",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",borderRadius:"50%"},children:e.jsx(o,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Description,{children:["This is a description text. It's an optional and will not exceeds more than 2 rows. A"," ",e.jsx("button",{type:"button",style:{background:"none",border:"none",padding:0,margin:0,cursor:"pointer",color:"var(--action-cta1)",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},onClick:()=>alert("Learn more clicked!"),children:"Learn more"})," ","can be added."]}),e.jsx(r.TextInput,{placeholder:"Search",slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"})}})]})},play:async({canvasElement:t})=>{await n(t)}},d={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(r.TextInput,{placeholder:"Input",slots:{startAdornment:e.jsx(o,{icon:"call",size:"tiny"})}})},play:async({canvasElement:t})=>{await n(t)}},p={args:{status:"success",label:"Input label",message:"This is a success caption under a text input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Description,{children:["This is a description text. It's an optional and will not exceeds more than 2 rows. A"," ",e.jsx("button",{type:"button",style:{background:"none",border:"none",padding:0,margin:0,cursor:"pointer",color:"var(--action-cta1)",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},onClick:()=>alert("Learn more clicked!"),children:"Learn more"})," ","can be added."]}),e.jsx(r.TextInput,{type:"text",slots:{endAdornment:e.jsx(o,{icon:"visibility",size:"tiny"})}})]})},play:async({canvasElement:t})=>{await n(t)}},m={args:{status:"error",label:"Input label",message:"This is an error caption under a text input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Description,{children:["This is a description text. It's an optional and will not exceeds more than 2 rows. A"," ",e.jsx("button",{type:"button",style:{background:"none",border:"none",padding:0,margin:0,cursor:"pointer",color:"var(--action-cta1)",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},onClick:()=>alert("Learn more clicked!"),children:"Learn more"})," ","can be added."]}),e.jsx(r.TextInput,{slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"}),endAdornment:e.jsx(o,{icon:"error",size:"tiny"})}})]})},play:async({canvasElement:t})=>{await n(t)}},u={args:{status:"warning",label:"Input label",message:"This is a warning caption under a text input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Description,{children:["This is a description text. It's an optional and will not exceeds more than 2 rows. A"," ",e.jsx("button",{type:"button",style:{background:"none",border:"none",padding:0,margin:0,cursor:"pointer",color:"var(--action-cta1)",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},onClick:()=>alert("Learn more clicked!"),children:"Learn more"})," ","can be added."]}),e.jsx(r.TextInput,{})]})},play:async({canvasElement:t})=>{await n(t)}},h={args:{label:"Input label",required:!0,children:e.jsx(r.TextInput,{placeholder:"Disabled Input",disabled:!0})},play:async({canvasElement:t})=>{await y(t)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    message: 'This is a message',
    children: <DsFormControl.TextInput placeholder="Input" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    style: {
      width: '300px'
    },
    children: <DsFormControl.TextInput placeholder="Input with custom width" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    children: <DsFormControl.TextInput placeholder="Input with custom styling" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    style: {
      width: '300px'
    },
    children: <>
                <DsFormControl.Description>
                    This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
                    <button type="button" style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          color: 'var(--action-cta1)',
          textDecoration: 'underline',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }} onClick={() => alert('Learn more clicked!')}>
                        Learn more
                    </button>{' '}
                    can be added.
                </DsFormControl.Description>
                <DsFormControl.TextInput placeholder="Search" slots={{
        startAdornment: <DsIcon icon="search" size="tiny" />
      }} />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    slots: {
      endAdornment: <button type="button" onClick={() => alert('Help clicked!')} aria-label="Help" style={{
        background: 'none',
        border: 'none',
        padding: '4px',
        cursor: 'pointer',
        color: 'var(--neutral-3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '16px',
        height: '16px',
        borderRadius: '50%'
      }}>
                    <DsIcon icon="info" size="small" />
                </button>
    },
    children: <>
                <DsFormControl.Description>
                    This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
                    <button type="button" style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          color: 'var(--action-cta1)',
          textDecoration: 'underline',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }} onClick={() => alert('Learn more clicked!')}>
                        Learn more
                    </button>{' '}
                    can be added.
                </DsFormControl.Description>
                <DsFormControl.TextInput placeholder="Search" slots={{
        startAdornment: <DsIcon icon="search" size="tiny" />
      }} />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    message: 'This is a message',
    children: <DsFormControl.TextInput placeholder="Input" slots={{
      startAdornment: <DsIcon icon="call" size="tiny" />
    }} />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success',
    label: 'Input label',
    message: 'This is a success caption under a text input.',
    messageIcon: 'check_circle',
    children: <>
                <DsFormControl.Description>
                    This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
                    <button type="button" style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          color: 'var(--action-cta1)',
          textDecoration: 'underline',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }} onClick={() => alert('Learn more clicked!')}>
                        Learn more
                    </button>{' '}
                    can be added.
                </DsFormControl.Description>
                <DsFormControl.TextInput type="text" slots={{
        endAdornment: <DsIcon icon="visibility" size="tiny" />
      }} />
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
                    This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
                    <button type="button" style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          color: 'var(--action-cta1)',
          textDecoration: 'underline',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }} onClick={() => alert('Learn more clicked!')}>
                        Learn more
                    </button>{' '}
                    can be added.
                </DsFormControl.Description>
                <DsFormControl.TextInput slots={{
        startAdornment: <DsIcon icon="search" size="tiny" />,
        endAdornment: <DsIcon icon="error" size="tiny" />
      }} />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    label: 'Input label',
    message: 'This is a warning caption under a text input.',
    messageIcon: 'info',
    children: <>
                <DsFormControl.Description>
                    This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
                    <button type="button" style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          color: 'var(--action-cta1)',
          textDecoration: 'underline',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }} onClick={() => alert('Learn more clicked!')}>
                        Learn more
                    </button>{' '}
                    can be added.
                </DsFormControl.Description>
                <DsFormControl.TextInput />
            </>
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    children: <DsFormControl.TextInput placeholder="Disabled Input" disabled />
  },
  play: async ({
    canvasElement
  }) => {
    await checkDisabled(canvasElement);
  }
}`,...h.parameters?.docs?.source}}};const ee=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","WithIcon","Success","Error","Warning","Disabled"];export{a as Default,h as Disabled,m as Error,p as Success,u as Warning,i as WithCustomStyles,s as WithCustomWidth,c as WithDescription,l as WithHelpIcon,d as WithIcon,ee as __namedExportsOrder,$ as default};
