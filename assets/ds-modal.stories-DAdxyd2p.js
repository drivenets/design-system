import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DVysNJuQ.js";import{n as r,t as i}from"./ds-icon-xtF7601f.js";import{n as a,t as o}from"./ds-typography-Cu_YN1U3.js";import{n as s,t as c}from"./ds-button-v3-B2euxeVc.js";import{n as l,t as u}from"./ds-stack-Dy-M5AZb.js";import{t as d}from"./ds-form-control-Cw13I7Ya.js";import{t as f}from"./ds-form-control-w1Sj5U5H.js";import{n as p,t as m}from"./ds-modal-Bsm888Zz.js";var h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{h=t(),p(),s(),o(),l(),f(),i(),g=n(),_={title:`Components/Modal`,component:m,parameters:{layout:`centered`},argTypes:{columns:{control:`select`,options:Array.from({length:12},(e,t)=>t+1),description:`Number of grid columns for modal width`},dividers:{control:`boolean`,description:`Show full-width dividers between header, body, and footer sections`},open:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}}},v={parameters:{docs:{source:{type:`code`}}},args:{columns:4},render:function(e){let[t,n]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{onClick:()=>n(!0),children:`Open modal`}),(0,g.jsxs)(m,{...e,open:t,onOpenChange:n,children:[(0,g.jsxs)(m.Header,{children:[(0,g.jsx)(m.Title,{children:`Modal title`}),(0,g.jsx)(m.CloseTrigger,{})]}),(0,g.jsx)(m.Body,{children:(0,g.jsx)(a,{variant:`body-md-reg`,children:`This is the default modal variant with simple content.`})}),(0,g.jsx)(m.Footer,{children:(0,g.jsxs)(m.Actions,{children:[(0,g.jsx)(c,{variant:`secondary`,onClick:()=>n(!1),children:`Cancel`}),(0,g.jsx)(c,{onClick:()=>n(!1),children:`Confirm`})]})})]})]})}},y={parameters:{docs:{source:{type:`code`}}},args:{columns:6,dividers:!0},render:function(e){let[t,n]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{onClick:()=>n(!0),children:`Open modal`}),(0,g.jsxs)(m,{...e,open:t,onOpenChange:n,children:[(0,g.jsxs)(m.Header,{children:[(0,g.jsx)(m.Title,{children:`User profile`}),(0,g.jsx)(m.CloseTrigger,{})]}),(0,g.jsx)(m.Body,{children:(0,g.jsxs)(u,{direction:`column`,gap:`var(--sm)`,children:[(0,g.jsx)(d,{label:`Full name`,required:!0,children:(0,g.jsx)(d.TextInput,{placeholder:`Enter full name`})}),(0,g.jsx)(d,{label:`Email address`,required:!0,children:(0,g.jsx)(d.TextInput,{type:`email`,placeholder:`Enter email address`})})]})}),(0,g.jsx)(m.Footer,{children:(0,g.jsxs)(m.Actions,{children:[(0,g.jsx)(c,{variant:`secondary`,onClick:()=>n(!1),children:`Cancel`}),(0,g.jsx)(c,{onClick:()=>n(!1),children:`Save changes`})]})})]})]})}},b={parameters:{docs:{source:{type:`code`}}},args:{columns:4,dividers:!0},render:function(e){let[t,n]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{onClick:()=>n(!0),children:`Open modal`}),(0,g.jsxs)(m,{...e,open:t,onOpenChange:n,children:[(0,g.jsxs)(m.Header,{children:[(0,g.jsxs)(u,{direction:`column`,gap:`var(--3xs)`,flex:`1`,children:[(0,g.jsx)(a,{variant:`heading3`,children:`Project details`}),(0,g.jsx)(a,{variant:`body-sm-reg`,color:`secondary`,children:`Add the core information for your new project.`})]}),(0,g.jsx)(m.CloseTrigger,{})]}),(0,g.jsx)(m.Body,{children:(0,g.jsxs)(u,{direction:`column`,gap:`var(--sm)`,children:[(0,g.jsx)(d,{label:`Project name`,children:(0,g.jsx)(d.TextInput,{placeholder:`Enter project name`})}),(0,g.jsx)(d,{label:`Category`,children:(0,g.jsx)(d.TextInput,{placeholder:`Select category`})})]})}),(0,g.jsx)(m.Footer,{children:(0,g.jsxs)(u,{direction:`row`,alignItems:`center`,gap:`var(--sm)`,flex:`1`,children:[(0,g.jsx)(a,{variant:`body-sm-reg`,color:`success`,children:`All changes saved`}),(0,g.jsxs)(m.Actions,{children:[(0,g.jsx)(c,{variant:`secondary`,onClick:()=>n(!1),children:`Discard`}),(0,g.jsx)(c,{onClick:()=>n(!1),children:`Save changes`})]})]})})]})]})}},x={parameters:{docs:{source:{type:`code`}}},args:{columns:4},render:function(e){let[t,n]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{onClick:()=>n(!0),children:`Open modal`}),(0,g.jsxs)(m,{...e,open:t,onOpenChange:n,children:[(0,g.jsxs)(m.Header,{children:[(0,g.jsx)(r,{icon:`info`,size:`small`}),(0,g.jsx)(m.Title,{children:`Session timeout`}),(0,g.jsx)(m.CloseTrigger,{})]}),(0,g.jsx)(m.Body,{children:(0,g.jsx)(a,{variant:`body-md-reg`,children:`Your session will expire in 5 minutes due to inactivity.`})})]})]})}},S={parameters:{docs:{source:{type:`code`}}},args:{columns:4},render:function(e){let[t,n]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{onClick:()=>n(!0),children:`Open modal`}),(0,g.jsxs)(m,{...e,open:t,onOpenChange:n,children:[(0,g.jsx)(m.Body,{children:(0,g.jsx)(a,{variant:`body-md-reg`,children:`This modal has no header section. Use this pattern when you want a cleaner look without the header underline.`})}),(0,g.jsx)(m.Footer,{children:(0,g.jsxs)(m.Actions,{children:[(0,g.jsx)(c,{variant:`secondary`,onClick:()=>n(!1),children:`Close`}),(0,g.jsx)(c,{onClick:()=>n(!1),children:`Continue`})]})})]})]})}},C=[`Default`,`Divided`,`Custom`,`WithIcon`,`WithoutHeader`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    columns: 4
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <>
                <DsButtonV3 onClick={() => setOpen(true)}>Open modal</DsButtonV3>
                <DsModal {...args} open={open} onOpenChange={setOpen}>
                    <DsModal.Header>
                        <DsModal.Title>Modal title</DsModal.Title>
                        <DsModal.CloseTrigger />
                    </DsModal.Header>
                    <DsModal.Body>
                        <DsTypography variant="body-md-reg">
                            This is the default modal variant with simple content.
                        </DsTypography>
                    </DsModal.Body>
                    <DsModal.Footer>
                        <DsModal.Actions>
                            <DsButtonV3 variant="secondary" onClick={() => setOpen(false)}>
                                Cancel
                            </DsButtonV3>
                            <DsButtonV3 onClick={() => setOpen(false)}>Confirm</DsButtonV3>
                        </DsModal.Actions>
                    </DsModal.Footer>
                </DsModal>
            </>;
  }
}`,...v.parameters?.docs?.source},description:{story:`The default modal has an inset header underline and no footer border. Compose
DsModal.Header, DsModal.Body, and DsModal.Footer to build a standard confirmation
dialog, and drive the open state from the component that renders it.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    columns: 6,
    dividers: true
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <>
                <DsButtonV3 onClick={() => setOpen(true)}>Open modal</DsButtonV3>
                <DsModal {...args} open={open} onOpenChange={setOpen}>
                    <DsModal.Header>
                        <DsModal.Title>User profile</DsModal.Title>
                        <DsModal.CloseTrigger />
                    </DsModal.Header>
                    <DsModal.Body>
                        <DsStack direction="column" gap="var(--sm)">
                            <DsFormControl label="Full name" required>
                                <DsFormControl.TextInput placeholder="Enter full name" />
                            </DsFormControl>
                            <DsFormControl label="Email address" required>
                                <DsFormControl.TextInput type="email" placeholder="Enter email address" />
                            </DsFormControl>
                        </DsStack>
                    </DsModal.Body>
                    <DsModal.Footer>
                        <DsModal.Actions>
                            <DsButtonV3 variant="secondary" onClick={() => setOpen(false)}>
                                Cancel
                            </DsButtonV3>
                            <DsButtonV3 onClick={() => setOpen(false)}>Save changes</DsButtonV3>
                        </DsModal.Actions>
                    </DsModal.Footer>
                </DsModal>
            </>;
  }
}`,...y.parameters?.docs?.source},description:{story:`Set \`dividers\` to add full-width borders above the footer and below the header,
giving clearer visual separation when the body holds a form or scrollable content.
Compose DsFormControl fields inside DsModal.Body for standard form layouts.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    columns: 4,
    dividers: true
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <>
                <DsButtonV3 onClick={() => setOpen(true)}>Open modal</DsButtonV3>
                <DsModal {...args} open={open} onOpenChange={setOpen}>
                    <DsModal.Header>
                        <DsStack direction="column" gap="var(--3xs)" flex="1">
                            <DsTypography variant="heading3">Project details</DsTypography>
                            <DsTypography variant="body-sm-reg" color="secondary">
                                Add the core information for your new project.
                            </DsTypography>
                        </DsStack>
                        <DsModal.CloseTrigger />
                    </DsModal.Header>
                    <DsModal.Body>
                        <DsStack direction="column" gap="var(--sm)">
                            <DsFormControl label="Project name">
                                <DsFormControl.TextInput placeholder="Enter project name" />
                            </DsFormControl>
                            <DsFormControl label="Category">
                                <DsFormControl.TextInput placeholder="Select category" />
                            </DsFormControl>
                        </DsStack>
                    </DsModal.Body>
                    <DsModal.Footer>
                        <DsStack direction="row" alignItems="center" gap="var(--sm)" flex="1">
                            <DsTypography variant="body-sm-reg" color="success">
                                All changes saved
                            </DsTypography>
                            <DsModal.Actions>
                                <DsButtonV3 variant="secondary" onClick={() => setOpen(false)}>
                                    Discard
                                </DsButtonV3>
                                <DsButtonV3 onClick={() => setOpen(false)}>Save changes</DsButtonV3>
                            </DsModal.Actions>
                        </DsStack>
                    </DsModal.Footer>
                </DsModal>
            </>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Both DsModal.Header and DsModal.Footer accept arbitrary content, so you can build
a custom header (title plus supporting text) and a footer that mixes status text
with actions. Use DsModal.CloseTrigger for the close control and DsModal.Actions to
keep buttons right-aligned.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    columns: 4
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <>
                <DsButtonV3 onClick={() => setOpen(true)}>Open modal</DsButtonV3>
                <DsModal {...args} open={open} onOpenChange={setOpen}>
                    <DsModal.Header>
                        <DsIcon icon="info" size="small" />
                        <DsModal.Title>Session timeout</DsModal.Title>
                        <DsModal.CloseTrigger />
                    </DsModal.Header>
                    <DsModal.Body>
                        <DsTypography variant="body-md-reg">
                            Your session will expire in 5 minutes due to inactivity.
                        </DsTypography>
                    </DsModal.Body>
                </DsModal>
            </>;
  }
}`,...x.parameters?.docs?.source},description:{story:`Compose DsIcon before DsModal.Title inside the header to add a leading icon. Useful
for status or informational dialogs where the icon reinforces the message.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    columns: 4
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <>
                <DsButtonV3 onClick={() => setOpen(true)}>Open modal</DsButtonV3>
                <DsModal {...args} open={open} onOpenChange={setOpen}>
                    <DsModal.Body>
                        <DsTypography variant="body-md-reg">
                            This modal has no header section. Use this pattern when you want a cleaner look without the
                            header underline.
                        </DsTypography>
                    </DsModal.Body>
                    <DsModal.Footer>
                        <DsModal.Actions>
                            <DsButtonV3 variant="secondary" onClick={() => setOpen(false)}>
                                Close
                            </DsButtonV3>
                            <DsButtonV3 onClick={() => setOpen(false)}>Continue</DsButtonV3>
                        </DsModal.Actions>
                    </DsModal.Footer>
                </DsModal>
            </>;
  }
}`,...S.parameters?.docs?.source},description:{story:`Omit DsModal.Header entirely for a cleaner surface without the header underline.
Use this pattern instead of a variant when the body content is self-explanatory.`,...S.parameters?.docs?.description}}}})))()}w();export{b as Custom,v as Default,y as Divided,x as WithIcon,S as WithoutHeader,C as __namedExportsOrder,_ as default};