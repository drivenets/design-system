import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-Ds2dQwfs.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./ds-alert-banner.stories.module-Bc0MUuMr.js";import{n as u,t as d}from"./ds-button-Co7huFut.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;t((()=>{f=e(n(),1),s(),d(),a(),o(),p=r(),{expect:m,userEvent:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Design System/AlertBanner/Inline`,component:i,parameters:{layout:`centered`},argTypes:{open:{control:`boolean`,description:`Controls whether the alert banner is visible`},variant:{control:`select`,options:c,description:`The variant of the alert banner`},closable:{control:`boolean`,description:`Whether the alert banner can be closed with an X button`},className:{control:`text`,description:`Additional CSS class names`},inline:{control:`boolean`,description:`Whether the alert banner should be inline (normal document flow) instead of global (designed for top of the page)`},style:{control:`object`,description:`Inline styles to apply to the component`},onOpenChange:{action:`onOpenChange`,description:`Callback fired when the alert banner should be closed`}}},y={render:function(){let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(i,{open:e,onOpenChange:t,inline:!0,variant:`info-blue`,icon:`info`,closable:!0,children:[(0,p.jsx)(i.Title,{children:`Information`}),(0,p.jsx)(i.Body,{children:`This is a blue informational alert message.`}),(0,p.jsxs)(i.Actions,{children:[(0,p.jsx)(`button`,{className:l.primary,children:`Action`}),(0,p.jsx)(`button`,{children:`Dismiss`})]})]})}},b={render:function(){let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(i,{open:e,onOpenChange:t,inline:!0,variant:`info-neutral`,closable:!0,children:[(0,p.jsx)(i.Title,{children:`Information`}),(0,p.jsx)(i.Body,{children:`This is an informational alert message.`})]})}},x={render:function(){let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(i,{open:e,onOpenChange:t,inline:!0,variant:`warning`,icon:`warning`,closable:!0,children:[(0,p.jsx)(i.Title,{children:`Warning`}),(0,p.jsx)(i.Body,{children:`This is a warning alert message. Please pay attention.`})]})}},S={render:function(){let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(i,{open:e,onOpenChange:t,inline:!0,variant:`error`,icon:`error`,closable:!0,children:[(0,p.jsx)(i.Title,{children:`Error`}),(0,p.jsx)(i.Body,{children:`Something went wrong. Please try again.`})]})}},C={render:function(){let[e,t]=(0,f.useState)(!0);return(0,p.jsx)(i,{open:e,onOpenChange:t,inline:!0,variant:`error`,icon:`error`,closable:!0,children:(0,p.jsx)(i.Body,{children:`Something went wrong. Please try again.`})})}},w={render:function(){let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(i,{open:e,onOpenChange:t,inline:!0,variant:`success`,icon:`check_circle`,closable:!0,children:[(0,p.jsx)(i.Title,{children:`Success`}),(0,p.jsx)(i.Body,{children:`Your action was completed successfully!`})]})}},T={render:function(){let[e,t]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(u,{className:l.trigger,onClick:()=>t(!0),children:`Show Alert Banner`}),(0,p.jsxs)(i,{className:l.inlineAlertBanner,open:e,onOpenChange:t,inline:!0,variant:`warning`,icon:`warning`,closable:!0,children:[(0,p.jsx)(i.Title,{children:`Attention needed`}),(0,p.jsx)(i.Body,{children:`Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.`}),(0,p.jsxs)(i.Actions,{children:[(0,p.jsx)(u,{design:`v1.2`,variant:`danger`,size:`small`,children:`Proceed`}),(0,p.jsx)(u,{design:`v1.2`,buttonType:`secondary`,size:`small`,children:`Skip`})]})]})]})},play:async({canvasElement:e})=>{let t=_(e),n=t.getByText(`Show Alert Banner`);await h.click(n),await m(t.getByText(`Attention needed`)).toBeTruthy();let r=t.getByLabelText(`Close alert`);await m(r).toBeTruthy(),await h.click(r),await g(()=>m(t.queryByText(`Attention needed`)).toBeFalsy())}},E={render:function(){let[e,t]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(u,{className:l.trigger,onClick:()=>t(!0),children:`Show Custom Alert Banner`}),(0,p.jsxs)(i,{className:l.inlineAlertBanner,open:e,onOpenChange:t,inline:!0,variant:`info-blue`,icon:`info`,closable:!0,children:[(0,p.jsx)(i.Title,{children:`System Update Available`}),(0,p.jsx)(i.Body,{children:(0,p.jsxs)(`div`,{className:l.customBodyContainer,children:[(0,p.jsx)(`p`,{className:l.customBodyText,children:`A new system update is available with the following improvements:`}),(0,p.jsxs)(`ul`,{className:l.customBodyList,children:[(0,p.jsx)(`li`,{children:`Enhanced security features`}),(0,p.jsx)(`li`,{children:`Improved performance optimizations`}),(0,p.jsx)(`li`,{children:`New user interface components`}),(0,p.jsx)(`li`,{children:`Bug fixes and stability improvements`})]}),(0,p.jsxs)(`div`,{className:l.infoBox,children:[(0,p.jsx)(`strong`,{children:`Estimated update time:`}),` 5-10 minutes`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Maintenance window:`}),` 2:00 AM - 4:00 AM UTC`]})]})}),(0,p.jsxs)(i.Actions,{children:[(0,p.jsx)(u,{design:`v1.2`,variant:`filled`,size:`small`,children:`Update Now`}),(0,p.jsx)(u,{design:`v1.2`,buttonType:`secondary`,size:`small`,children:`Schedule Later`}),(0,p.jsx)(u,{design:`v1.2`,buttonType:`secondary`,size:`small`,children:`Learn More`})]})]})]})},parameters:{docs:{description:{story:`A custom alert banner with rich JSX content in the body, including lists, styled information boxes, and multiple action buttons.`}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} inline={true} variant="info-neutral" closable={true}>
                <DsAlertBanner.Title>Information</DsAlertBanner.Title>
                <DsAlertBanner.Body>This is an informational alert message.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} inline={true} variant="warning" icon="warning" closable={true}>
                <DsAlertBanner.Title>Warning</DsAlertBanner.Title>
                <DsAlertBanner.Body>This is a warning alert message. Please pay attention.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} inline={true} variant="error" icon="error" closable={true}>
                <DsAlertBanner.Title>Error</DsAlertBanner.Title>
                <DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} inline={true} variant="error" icon="error" closable={true}>
                <DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} inline={true} variant="success" icon="check_circle" closable={true}>
                <DsAlertBanner.Title>Success</DsAlertBanner.Title>
                <DsAlertBanner.Body>Your action was completed successfully!</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`InfoBlue`,`InfoNeutral`,`Warning`,`Error`,`ErrorNoTitle`,`Success`,`WithActions`,`CustomBody`]}))();export{E as CustomBody,S as Error,C as ErrorNoTitle,y as InfoBlue,b as InfoNeutral,w as Success,x as Warning,T as WithActions,D as __namedExportsOrder,v as default};