import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-icon-BRZFUTMz.js";import{n as o,t as s}from"./ds-typography-DrL2wWa5.js";import{n as c,t as l}from"./ds-button-v3-mT4iUQLS.js";import{n as u,t as d}from"./ds-stack-GU0hZWeR.js";import{r as f}from"./ds-form-control.types-VJWMVfhB.js";import{t as p}from"./ds-form-control-CRQF-J4w.js";import{n as m,t as h}from"./ds-modal-DMeeBMcE.js";var g,_,v,y,b,x,S,C,w;t((()=>{g=e(n(),1),m(),c(),s(),u(),p(),a(),_=r(),v={title:`Components/Modal`,component:h,parameters:{layout:`centered`},argTypes:{columns:{control:`select`,options:Array.from({length:12},(e,t)=>t+1),description:`Number of grid columns for modal width`},dividers:{control:`boolean`,description:`Show full-width dividers between header, body, and footer sections`},open:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}}},y={parameters:{docs:{source:{type:`code`}}},args:{columns:4},render:function(e){let[t,n]=(0,g.useState)(!1);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{onClick:()=>n(!0),children:`Open modal`}),(0,_.jsxs)(h,{...e,open:t,onOpenChange:n,children:[(0,_.jsxs)(h.Header,{children:[(0,_.jsx)(h.Title,{children:`Modal title`}),(0,_.jsx)(h.CloseTrigger,{})]}),(0,_.jsx)(h.Body,{children:(0,_.jsx)(o,{variant:`body-md-reg`,children:`This is the default modal variant with simple content.`})}),(0,_.jsx)(h.Footer,{children:(0,_.jsxs)(h.Actions,{children:[(0,_.jsx)(l,{variant:`secondary`,onClick:()=>n(!1),children:`Cancel`}),(0,_.jsx)(l,{onClick:()=>n(!1),children:`Confirm`})]})})]})]})}},b={parameters:{docs:{source:{type:`code`}}},args:{columns:6,dividers:!0},render:function(e){let[t,n]=(0,g.useState)(!1);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{onClick:()=>n(!0),children:`Open modal`}),(0,_.jsxs)(h,{...e,open:t,onOpenChange:n,children:[(0,_.jsxs)(h.Header,{children:[(0,_.jsx)(h.Title,{children:`User profile`}),(0,_.jsx)(h.CloseTrigger,{})]}),(0,_.jsx)(h.Body,{children:(0,_.jsxs)(d,{direction:`column`,gap:`var(--sm)`,children:[(0,_.jsx)(f,{label:`Full name`,required:!0,children:(0,_.jsx)(f.TextInput,{placeholder:`Enter full name`})}),(0,_.jsx)(f,{label:`Email address`,required:!0,children:(0,_.jsx)(f.TextInput,{type:`email`,placeholder:`Enter email address`})})]})}),(0,_.jsx)(h.Footer,{children:(0,_.jsxs)(h.Actions,{children:[(0,_.jsx)(l,{variant:`secondary`,onClick:()=>n(!1),children:`Cancel`}),(0,_.jsx)(l,{onClick:()=>n(!1),children:`Save changes`})]})})]})]})}},x={parameters:{docs:{source:{type:`code`}}},args:{columns:4,dividers:!0},render:function(e){let[t,n]=(0,g.useState)(!1);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{onClick:()=>n(!0),children:`Open modal`}),(0,_.jsxs)(h,{...e,open:t,onOpenChange:n,children:[(0,_.jsxs)(h.Header,{children:[(0,_.jsxs)(d,{direction:`column`,gap:`var(--3xs)`,flex:`1`,children:[(0,_.jsx)(o,{variant:`heading3`,children:`Project details`}),(0,_.jsx)(o,{variant:`body-sm-reg`,color:`secondary`,children:`Add the core information for your new project.`})]}),(0,_.jsx)(h.CloseTrigger,{})]}),(0,_.jsx)(h.Body,{children:(0,_.jsxs)(d,{direction:`column`,gap:`var(--sm)`,children:[(0,_.jsx)(f,{label:`Project name`,children:(0,_.jsx)(f.TextInput,{placeholder:`Enter project name`})}),(0,_.jsx)(f,{label:`Category`,children:(0,_.jsx)(f.TextInput,{placeholder:`Select category`})})]})}),(0,_.jsx)(h.Footer,{children:(0,_.jsxs)(d,{direction:`row`,alignItems:`center`,gap:`var(--sm)`,flex:`1`,children:[(0,_.jsx)(o,{variant:`body-sm-reg`,color:`success`,children:`All changes saved`}),(0,_.jsxs)(h.Actions,{children:[(0,_.jsx)(l,{variant:`secondary`,onClick:()=>n(!1),children:`Discard`}),(0,_.jsx)(l,{onClick:()=>n(!1),children:`Save changes`})]})]})})]})]})}},S={parameters:{docs:{source:{type:`code`}}},args:{columns:4},render:function(e){let[t,n]=(0,g.useState)(!1);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{onClick:()=>n(!0),children:`Open modal`}),(0,_.jsxs)(h,{...e,open:t,onOpenChange:n,children:[(0,_.jsxs)(h.Header,{children:[(0,_.jsx)(i,{icon:`info`,size:`small`}),(0,_.jsx)(h.Title,{children:`Session timeout`}),(0,_.jsx)(h.CloseTrigger,{})]}),(0,_.jsx)(h.Body,{children:(0,_.jsx)(o,{variant:`body-md-reg`,children:`Your session will expire in 5 minutes due to inactivity.`})})]})]})}},C={parameters:{docs:{source:{type:`code`}}},args:{columns:4},render:function(e){let[t,n]=(0,g.useState)(!1);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{onClick:()=>n(!0),children:`Open modal`}),(0,_.jsxs)(h,{...e,open:t,onOpenChange:n,children:[(0,_.jsx)(h.Body,{children:(0,_.jsx)(o,{variant:`body-md-reg`,children:`This modal has no header section. Use this pattern when you want a cleaner look without the header underline.`})}),(0,_.jsx)(h.Footer,{children:(0,_.jsxs)(h.Actions,{children:[(0,_.jsx)(l,{variant:`secondary`,onClick:()=>n(!1),children:`Close`}),(0,_.jsx)(l,{onClick:()=>n(!1),children:`Continue`})]})})]})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`The default modal has an inset header underline and no footer border. Compose
DsModal.Header, DsModal.Body, and DsModal.Footer to build a standard confirmation
dialog, and drive the open state from the component that renders it.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Set \`dividers\` to add full-width borders above the footer and below the header,
giving clearer visual separation when the body holds a form or scrollable content.
Compose DsFormControl fields inside DsModal.Body for standard form layouts.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Both DsModal.Header and DsModal.Footer accept arbitrary content, so you can build
a custom header (title plus supporting text) and a footer that mixes status text
with actions. Use DsModal.CloseTrigger for the close control and DsModal.Actions to
keep buttons right-aligned.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Compose DsIcon before DsModal.Title inside the header to add a leading icon. Useful
for status or informational dialogs where the icon reinforces the message.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Omit DsModal.Header entirely for a cleaner surface without the header underline.
Use this pattern instead of a variant when the body content is self-explanatory.`,...C.parameters?.docs?.description}}},w=[`Default`,`Divided`,`Custom`,`WithIcon`,`WithoutHeader`]}))();export{x as Custom,y as Default,b as Divided,S as WithIcon,C as WithoutHeader,w as __namedExportsOrder,v as default};