import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./ds-icon-DMTFLbiR.js";import{D as r}from"./ds-form-control-BmO8mZrj.js";import{c as b,s as n,a as y}from"./ds-form-control-stories-shared-DcxwFbb5.js";import"./index-Bf-54wPu.js";import"./iframe-BSfF28J8.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-select-DLG6gGBB.js";import"./ds-checkbox-DPMpRlms.js";import"./index-RsnRcPCc.js";import"./index-sglKFT7D.js";import"./index-BzC6s-iE.js";import"./index-BZ4hDW5j.js";import"./index-7TJoVjK2.js";import"./ds-button-SSBRyEVn.js";import"./ds-button-legacy-CJoyzBOc.js";import"./ds-button-new-CKdi5Y8l.js";import"./ds-chip-snuukHuA.js";import"./ds-typography-TLRViw0O.js";import"./index-BHJELap7.js";import"./use-locale-context-BXGYH-G_.js";import"./create-anatomy-DPnaczCP.js";import"./ds-text-input-Bze-KVQm.js";import"./list-collection-CUkAIAZC.js";import"./chunk-QZ7TP4HQ-O9Gy0rNO.js";import"./equal-DfFTejAs.js";import"./use-field-context-DYiHHwY6.js";import"./event-CBXSxTbR.js";import"./form-DywkYwc3.js";import"./initial-focus-CcvO_sI7.js";import"./set-CN0Hvdz-.js";import"./typeahead-CJj2tNF7.js";import"./query-CjgVAlRR.js";import"./visually-hidden-BShGFMbX.js";import"./get-styles-BOVpeMAL.js";import"./floating-ui.dom-D3zTlarL.js";import"./raf-CC9hSMXO.js";import"./computed-style-Dlx_PkG-.js";import"./index-CazKU5oL.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-D3gtpCn3.js";import"./portal-CqcPpFZT.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-GE6cLLPI.js";import"./ds-textarea-BwAWgBTb.js";import"./ds-number-input-CRGjeuVv.js";import"./number-Bu-e0fmS.js";import"./memo-BRlFl984.js";import"./caret-BrXylHYy.js";import"./ds-password-input-BHZXalwc.js";import"./ds-date-input-BrGyZ8dR.js";const he={title:"Design System/FormControl/Text",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:b,description:"Form control color status",table:{defaultValue:{summary:b[0]}}},label:{control:"text",description:"Label for the form control"},required:{control:"boolean",description:"Indicates if the field is required"},message:{control:"text",description:"Message to display below the form control"},messageIcon:{control:"text",description:"Icon to display in the message"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Additional styles to apply to the component"}}},a={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(r.TextInput,{placeholder:"Input"})},play:async({canvasElement:t})=>{await n(t)}},s={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsx(r.TextInput,{placeholder:"Input with custom width"})},play:async({canvasElement:t})=>{await n(t)}},i={args:{label:"Input label",required:!0,style:{width:"400px",padding:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsx(r.TextInput,{placeholder:"Input with custom styling"})},play:async({canvasElement:t})=>{await n(t)}},c={args:{label:"Input label",required:!0,style:{width:"300px"},children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Description,{children:["This is a description text. It's an optional and will not exceeds more than 2 rows. A"," ",e.jsx("button",{type:"button",style:{background:"none",border:"none",padding:0,margin:0,cursor:"pointer",color:"var(--action-cta1)",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},onClick:()=>alert("Learn more clicked!"),children:"Learn more"})," ","can be added."]}),e.jsx(r.TextInput,{placeholder:"Search",slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"})}})]})},play:async({canvasElement:t})=>{await n(t)}},l={args:{label:"Input label",required:!0,slots:{endAdornment:e.jsx("button",{type:"button",onClick:()=>alert("Help clicked!"),"aria-label":"Help",style:{background:"none",border:"none",padding:"4px",cursor:"pointer",color:"var(--neutral-3)",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",borderRadius:"50%"},children:e.jsx(o,{icon:"info",size:"small"})})},children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Description,{children:["This is a description text. It's an optional and will not exceeds more than 2 rows. A"," ",e.jsx("button",{type:"button",style:{background:"none",border:"none",padding:0,margin:0,cursor:"pointer",color:"var(--action-cta1)",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},onClick:()=>alert("Learn more clicked!"),children:"Learn more"})," ","can be added."]}),e.jsx(r.TextInput,{placeholder:"Search",slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"})}})]})},play:async({canvasElement:t})=>{await n(t)}},d={args:{label:"Input label",required:!0,message:"This is a message",children:e.jsx(r.TextInput,{placeholder:"Input",slots:{startAdornment:e.jsx(o,{icon:"call",size:"tiny"})}})},play:async({canvasElement:t})=>{await n(t)}},p={args:{status:"success",label:"Input label",message:"This is a success caption under a text input.",messageIcon:"check_circle",children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Description,{children:["This is a description text. It's an optional and will not exceeds more than 2 rows. A"," ",e.jsx("button",{type:"button",style:{background:"none",border:"none",padding:0,margin:0,cursor:"pointer",color:"var(--action-cta1)",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},onClick:()=>alert("Learn more clicked!"),children:"Learn more"})," ","can be added."]}),e.jsx(r.TextInput,{type:"text",slots:{endAdornment:e.jsx(o,{icon:"visibility",size:"tiny"})}})]})},play:async({canvasElement:t})=>{await n(t)}},m={args:{status:"error",label:"Input label",message:"This is an error caption under a text input.",messageIcon:"error",children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Description,{children:["This is a description text. It's an optional and will not exceeds more than 2 rows. A"," ",e.jsx("button",{type:"button",style:{background:"none",border:"none",padding:0,margin:0,cursor:"pointer",color:"var(--action-cta1)",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},onClick:()=>alert("Learn more clicked!"),children:"Learn more"})," ","can be added."]}),e.jsx(r.TextInput,{slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"}),endAdornment:e.jsx(o,{icon:"error",size:"tiny"})}})]})},play:async({canvasElement:t})=>{await n(t)}},u={args:{status:"warning",label:"Input label",message:"This is a warning caption under a text input.",messageIcon:"info",children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Description,{children:["This is a description text. It's an optional and will not exceeds more than 2 rows. A"," ",e.jsx("button",{type:"button",style:{background:"none",border:"none",padding:0,margin:0,cursor:"pointer",color:"var(--action-cta1)",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},onClick:()=>alert("Learn more clicked!"),children:"Learn more"})," ","can be added."]}),e.jsx(r.TextInput,{})]})},play:async({canvasElement:t})=>{await n(t)}},h={args:{label:"Input label",required:!0,children:e.jsx(r.TextInput,{placeholder:"Disabled Input",disabled:!0})},play:async({canvasElement:t})=>{await y(t)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const be=["Default","WithCustomWidth","WithCustomStyles","WithDescription","WithHelpIcon","WithIcon","Success","Error","Warning","Disabled"];export{a as Default,h as Disabled,m as Error,p as Success,u as Warning,i as WithCustomStyles,s as WithCustomWidth,c as WithDescription,l as WithHelpIcon,d as WithIcon,be as __namedExportsOrder,he as default};
