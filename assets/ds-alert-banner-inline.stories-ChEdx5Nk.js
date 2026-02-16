import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-DLMDGCUl.js";import{a as x,D as n,s as o}from"./ds-alert-banner.stories.module-oH-B7I8u.js";import{D as i}from"./ds-button-Th9pp1mU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CZjfX2qz.js";import"./ds-icon-DahQ-ftt.js";import"./ds-typography-BE9vI6-J.js";import"./index-CCOlAiJE.js";import"./index-H_XcGL9U.js";import"./ds-button-legacy-8uD__cm1.js";import"./ds-button-new-Cimz2Z-c.js";const{expect:y,userEvent:A,waitFor:w,within:b}=__STORYBOOK_MODULE_TEST__,I={title:"Design System/AlertBanner/Inline",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Controls whether the alert banner is visible"},variant:{control:"select",options:x,description:"The variant of the alert banner"},closable:{control:"boolean",description:"Whether the alert banner can be closed with an X button"},className:{control:"text",description:"Additional CSS class names"},inline:{control:"boolean",description:"Whether the alert banner should be inline (normal document flow) instead of global (designed for top of the page)"},style:{control:"object",description:"Inline styles to apply to the component"},onOpenChange:{action:"onOpenChange",description:"Callback fired when the alert banner should be closed"}}},l={render:function(){const[t,r]=a.useState(!0);return e.jsxs(n,{open:t,onOpenChange:r,inline:!0,variant:"info-blue",icon:"info",closable:!0,children:[e.jsx(n.Title,{children:"Information"}),e.jsx(n.Body,{children:"This is a blue informational alert message."}),e.jsxs(n.Actions,{children:[e.jsx("button",{className:o.primary,children:"Action"}),e.jsx("button",{children:"Dismiss"})]})]})}},c={render:function(){const[t,r]=a.useState(!0);return e.jsxs(n,{open:t,onOpenChange:r,inline:!0,variant:"info-neutral",closable:!0,children:[e.jsx(n.Title,{children:"Information"}),e.jsx(n.Body,{children:"This is an informational alert message."})]})}},u={render:function(){const[t,r]=a.useState(!0);return e.jsxs(n,{open:t,onOpenChange:r,inline:!0,variant:"warning",icon:"warning",closable:!0,children:[e.jsx(n.Title,{children:"Warning"}),e.jsx(n.Body,{children:"This is a warning alert message. Please pay attention."})]})}},d={render:function(){const[t,r]=a.useState(!0);return e.jsxs(n,{open:t,onOpenChange:r,inline:!0,variant:"error",icon:"error",closable:!0,children:[e.jsx(n.Title,{children:"Error"}),e.jsx(n.Body,{children:"Something went wrong. Please try again."})]})}},p={render:function(){const[t,r]=a.useState(!0);return e.jsx(n,{open:t,onOpenChange:r,inline:!0,variant:"error",icon:"error",closable:!0,children:e.jsx(n.Body,{children:"Something went wrong. Please try again."})})}},m={render:function(){const[t,r]=a.useState(!0);return e.jsxs(n,{open:t,onOpenChange:r,inline:!0,variant:"success",icon:"check_circle",closable:!0,children:[e.jsx(n.Title,{children:"Success"}),e.jsx(n.Body,{children:"Your action was completed successfully!"})]})}},h={render:function(){const[t,r]=a.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{className:o.trigger,onClick:()=>r(!0),children:"Show Alert Banner"}),e.jsxs(n,{className:o.inlineAlertBanner,open:t,onOpenChange:r,inline:!0,variant:"warning",icon:"warning",closable:!0,children:[e.jsx(n.Title,{children:"Attention needed"}),e.jsx(n.Body,{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),e.jsxs(n.Actions,{children:[e.jsx(i,{design:"v1.2",variant:"danger",size:"small",children:"Proceed"}),e.jsx(i,{design:"v1.2",buttonType:"secondary",size:"small",children:"Skip"})]})]})]})},play:async({canvasElement:s})=>{const t=b(s),r=t.getByText("Show Alert Banner");await A.click(r);const f=t.getByText("Attention needed");await y(f).toBeTruthy();const g=t.getByLabelText("Close alert");await y(g).toBeTruthy(),await A.click(g),await w(()=>y(t.queryByText("Attention needed")).toBeFalsy())}},B={render:function(){const[t,r]=a.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{className:o.trigger,onClick:()=>r(!0),children:"Show Custom Alert Banner"}),e.jsxs(n,{className:o.inlineAlertBanner,open:t,onOpenChange:r,inline:!0,variant:"info-blue",icon:"info",closable:!0,children:[e.jsx(n.Title,{children:"System Update Available"}),e.jsx(n.Body,{children:e.jsxs("div",{className:o.customBodyContainer,children:[e.jsx("p",{className:o.customBodyText,children:"A new system update is available with the following improvements:"}),e.jsxs("ul",{className:o.customBodyList,children:[e.jsx("li",{children:"Enhanced security features"}),e.jsx("li",{children:"Improved performance optimizations"}),e.jsx("li",{children:"New user interface components"}),e.jsx("li",{children:"Bug fixes and stability improvements"})]}),e.jsxs("div",{className:o.infoBox,children:[e.jsx("strong",{children:"Estimated update time:"})," 5-10 minutes",e.jsx("br",{}),e.jsx("strong",{children:"Maintenance window:"})," 2:00 AM - 4:00 AM UTC"]})]})}),e.jsxs(n.Actions,{children:[e.jsx(i,{design:"v1.2",variant:"filled",size:"small",children:"Update Now"}),e.jsx(i,{design:"v1.2",buttonType:"secondary",size:"small",children:"Schedule Later"}),e.jsx(i,{design:"v1.2",buttonType:"secondary",size:"small",children:"Learn More"})]})]})]})},parameters:{docs:{description:{story:"A custom alert banner with rich JSX content in the body, including lists, styled information boxes, and multiple action buttons."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} inline={true} variant="info-blue" icon="info" closable={true}>
                <DsAlertBanner.Title>Information</DsAlertBanner.Title>
                <DsAlertBanner.Body>This is a blue informational alert message.</DsAlertBanner.Body>
                <DsAlertBanner.Actions>
                    <button className={styles.primary}>Action</button>
                    <button>Dismiss</button>
                </DsAlertBanner.Actions>
            </DsAlertBanner>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} inline={true} variant="info-neutral" closable={true}>
                <DsAlertBanner.Title>Information</DsAlertBanner.Title>
                <DsAlertBanner.Body>This is an informational alert message.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} inline={true} variant="warning" icon="warning" closable={true}>
                <DsAlertBanner.Title>Warning</DsAlertBanner.Title>
                <DsAlertBanner.Body>This is a warning alert message. Please pay attention.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} inline={true} variant="error" icon="error" closable={true}>
                <DsAlertBanner.Title>Error</DsAlertBanner.Title>
                <DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} inline={true} variant="error" icon="error" closable={true}>
                <DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} inline={true} variant="success" icon="check_circle" closable={true}>
                <DsAlertBanner.Title>Success</DsAlertBanner.Title>
                <DsAlertBanner.Body>Your action was completed successfully!</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div>
                <DsButton className={styles.trigger} onClick={() => setOpen(true)}>
                    Show Alert Banner
                </DsButton>
                <DsAlertBanner className={styles.inlineAlertBanner} open={open} onOpenChange={setOpen} inline={true} variant="warning" icon="warning" closable={true}>
                    <DsAlertBanner.Title>Attention needed</DsAlertBanner.Title>
                    <DsAlertBanner.Body>
                        Aww yeah, you successfully read this important alert message. This example text is going to run a
                        bit longer so that you can see how spacing within an alert works with this kind of content.
                    </DsAlertBanner.Body>
                    <DsAlertBanner.Actions>
                        <DsButton design="v1.2" variant="danger" size="small">
                            Proceed
                        </DsButton>
                        <DsButton design="v1.2" buttonType="secondary" size="small">
                            Skip
                        </DsButton>
                    </DsAlertBanner.Actions>
                </DsAlertBanner>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Click the button to show the alert banner
    const showButton = canvas.getByText('Show Alert Banner');
    await userEvent.click(showButton);

    // Verify component renders correctly
    const component = canvas.getByText('Attention needed');
    await expect(component).toBeTruthy();

    // Test close button functionality
    const closeButton = canvas.getByLabelText('Close alert');
    await expect(closeButton).toBeTruthy();
    await userEvent.click(closeButton);
    await waitFor(() => {
      // The component should be hidden after clicking close
      return expect(canvas.queryByText('Attention needed')).toBeFalsy();
    });
  }
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div>
                <DsButton className={styles.trigger} onClick={() => setOpen(true)}>
                    Show Custom Alert Banner
                </DsButton>
                <DsAlertBanner className={styles.inlineAlertBanner} open={open} onOpenChange={setOpen} inline={true} variant="info-blue" icon="info" closable={true}>
                    <DsAlertBanner.Title>System Update Available</DsAlertBanner.Title>
                    <DsAlertBanner.Body>
                        <div className={styles.customBodyContainer}>
                            <p className={styles.customBodyText}>
                                A new system update is available with the following improvements:
                            </p>
                            <ul className={styles.customBodyList}>
                                <li>Enhanced security features</li>
                                <li>Improved performance optimizations</li>
                                <li>New user interface components</li>
                                <li>Bug fixes and stability improvements</li>
                            </ul>
                            <div className={styles.infoBox}>
                                <strong>Estimated update time:</strong> 5-10 minutes
                                <br />
                                <strong>Maintenance window:</strong> 2:00 AM - 4:00 AM UTC
                            </div>
                        </div>
                    </DsAlertBanner.Body>
                    <DsAlertBanner.Actions>
                        <DsButton design="v1.2" variant="filled" size="small">
                            Update Now
                        </DsButton>
                        <DsButton design="v1.2" buttonType="secondary" size="small">
                            Schedule Later
                        </DsButton>
                        <DsButton design="v1.2" buttonType="secondary" size="small">
                            Learn More
                        </DsButton>
                    </DsAlertBanner.Actions>
                </DsAlertBanner>
            </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A custom alert banner with rich JSX content in the body, including lists, styled information boxes, and multiple action buttons.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};const _=["InfoBlue","InfoNeutral","Warning","Error","ErrorNoTitle","Success","WithActions","CustomBody"];export{B as CustomBody,d as Error,p as ErrorNoTitle,l as InfoBlue,c as InfoNeutral,m as Success,u as Warning,h as WithActions,_ as __namedExportsOrder,I as default};
