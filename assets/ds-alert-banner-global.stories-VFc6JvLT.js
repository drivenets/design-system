import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-CfoIKJgh.js";import{a as v,D as n,s as t}from"./ds-alert-banner.stories.module-BY7Yi8k1.js";import{D as a}from"./ds-button-BgeKYMhI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJAjyhEV.js";import"./ds-icon-VNWG3kaI.js";import"./ds-typography-Dl7AKOds.js";import"./index-DsjVDaBU.js";import"./index-BRlLrWIy.js";import"./ds-button-legacy-BWgdAsGE.js";import"./ds-button-new-T4Kx9VLn.js";const{expect:h,userEvent:B,waitFor:A,within:b}=__STORYBOOK_MODULE_TEST__,$={title:"Design System/AlertBanner/Global",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Controls whether the alert banner is visible"},variant:{control:"select",options:v,description:"The variant of the alert banner"},closable:{control:"boolean",description:"Whether the alert banner can be closed with an X button"},className:{control:"text",description:"Additional CSS class names"},inline:{control:"boolean",description:"Whether the alert banner should be inline (normal document flow) instead of global (designed for top of the page)"},style:{control:"object",description:"Inline styles to apply to the component"},onOpenChange:{action:"onOpenChange",description:"Callback fired when the alert banner should be closed"}}},l={render:function(){const[s,r]=i.useState(!0);return e.jsxs(n,{open:s,onOpenChange:r,variant:"info-blue",icon:"info",closable:!0,children:[e.jsx(n.Title,{children:"Information"}),e.jsx(n.Body,{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),e.jsxs(n.Actions,{children:[e.jsx(a,{design:"v1.2",variant:"danger",size:"small",children:"Proceed"}),e.jsx(a,{design:"v1.2",buttonType:"secondary",size:"small",children:"Skip"})]})]})}},c={render:function(){const[s,r]=i.useState(!0);return e.jsxs(n,{open:s,onOpenChange:r,variant:"info-neutral",closable:!0,children:[e.jsx(n.Title,{children:"Information"}),e.jsx(n.Body,{children:"This is an informational alert message."})]})}},d={render:function(){const[s,r]=i.useState(!0);return e.jsxs(n,{open:s,onOpenChange:r,variant:"warning",icon:"warning",closable:!0,children:[e.jsx(n.Title,{children:"Warning"}),e.jsx(n.Body,{children:"This is a warning alert message. Please pay attention."})]})}},u={render:function(){const[s,r]=i.useState(!0);return e.jsxs(n,{open:s,onOpenChange:r,variant:"error",icon:"error",closable:!0,children:[e.jsx(n.Title,{children:"Error"}),e.jsx(n.Body,{children:"Something went wrong. Please try again."})]})}},p={render:function(){const[s,r]=i.useState(!0);return e.jsxs(n,{open:s,onOpenChange:r,variant:"success",icon:"check_circle",closable:!0,children:[e.jsx(n.Title,{children:"Success"}),e.jsx(n.Body,{children:"Your action was completed successfully!"})]})}},m={render:function(){const[s,r]=i.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{className:t.globalMessages,children:e.jsxs(n,{open:s,onOpenChange:r,variant:"warning",icon:"warning",closable:!0,children:[e.jsx(n.Title,{children:"Attention needed"}),e.jsx(n.Body,{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),e.jsxs(n.Actions,{children:[e.jsx(a,{design:"v1.2",variant:"danger",size:"small",children:"Proceed"}),e.jsx(a,{design:"v1.2",buttonType:"secondary",size:"small",children:"Skip"})]})]})}),e.jsx(a,{className:t.trigger,onClick:()=>r(!0),children:"Show Alert Banner"})]})},play:async({canvasElement:o})=>{const s=b(o),r=s.getByText("Show Alert Banner");await B.click(r);const x=s.getByText("Attention needed");await h(x).toBeTruthy();const g=s.getByLabelText("Close alert");await h(g).toBeTruthy(),await B.click(g),await A(()=>h(s.queryByText("Attention needed")).toBeFalsy())}},y={render:function(){const[s,r]=i.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{className:t.globalMessages,children:e.jsxs(n,{className:t.customBody,open:s,onOpenChange:r,variant:"warning",icon:"warning",closable:!0,children:[e.jsx(n.Title,{children:"Security Alert"}),e.jsx(n.Body,{children:e.jsxs("div",{className:t.customBodyContainer,children:[e.jsx("p",{className:t.customBodyText,children:"Multiple security vulnerabilities have been detected in your system:"}),e.jsxs("div",{className:t.securityCardsContainer,children:[e.jsxs("div",{className:`${t.securityCard} ${t.securityCardCritical}`,children:[e.jsx("span",{className:`${t.securityCardTitle} ${t.securityCardTitleCritical}`,children:"Critical: SQL Injection"}),e.jsx("span",{className:t.securityCardScore,children:"CVSS: 9.8"})]}),e.jsxs("div",{className:`${t.securityCard} ${t.securityCardHigh}`,children:[e.jsx("span",{className:`${t.securityCardTitle} ${t.securityCardTitleHigh}`,children:"High: XSS Vulnerability"}),e.jsx("span",{className:t.securityCardScore,children:"CVSS: 7.2"})]})]}),e.jsxs("div",{className:t.recommendationsBox,children:[e.jsx("strong",{children:"Recommended actions:"}),e.jsx("br",{}),"• Update all dependencies immediately",e.jsx("br",{}),"• Review and sanitize user inputs",e.jsx("br",{}),"• Implement additional security headers"]})]})}),e.jsxs(n.Actions,{children:[e.jsx(a,{design:"v1.2",variant:"danger",size:"small",children:"Fix Now"}),e.jsx(a,{design:"v1.2",buttonType:"secondary",size:"small",children:"View Details"}),e.jsx(a,{design:"v1.2",buttonType:"secondary",size:"small",children:"Ignore"})]})]})}),e.jsx(a,{className:t.trigger,onClick:()=>r(!0),children:"Show Security Alert"})]})},parameters:{docs:{description:{story:"A global alert banner with complex JSX content in the body, including security vulnerability cards, styled information boxes, and multiple action buttons."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} variant="info-blue" icon="info" closable={true}>
                <DsAlertBanner.Title>Information</DsAlertBanner.Title>
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
            </DsAlertBanner>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} variant="info-neutral" closable={true}>
                <DsAlertBanner.Title>Information</DsAlertBanner.Title>
                <DsAlertBanner.Body>This is an informational alert message.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} variant="warning" icon="warning" closable={true}>
                <DsAlertBanner.Title>Warning</DsAlertBanner.Title>
                <DsAlertBanner.Body>This is a warning alert message. Please pay attention.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} variant="error" icon="error" closable={true}>
                <DsAlertBanner.Title>Error</DsAlertBanner.Title>
                <DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} variant="success" icon="check_circle" closable={true}>
                <DsAlertBanner.Title>Success</DsAlertBanner.Title>
                <DsAlertBanner.Body>Your action was completed successfully!</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div>
                <div className={styles.globalMessages}>
                    <DsAlertBanner open={open} onOpenChange={setOpen} variant="warning" icon="warning" closable={true}>
                        <DsAlertBanner.Title>Attention needed</DsAlertBanner.Title>
                        <DsAlertBanner.Body>
                            Aww yeah, you successfully read this important alert message. This example text is going to run
                            a bit longer so that you can see how spacing within an alert works with this kind of content.
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
                </div>
                <DsButton className={styles.trigger} onClick={() => setOpen(true)}>
                    Show Alert Banner
                </DsButton>
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div>
                <div className={styles.globalMessages}>
                    <DsAlertBanner className={styles.customBody} open={open} onOpenChange={setOpen} variant="warning" icon="warning" closable>
                        <DsAlertBanner.Title>Security Alert</DsAlertBanner.Title>
                        <DsAlertBanner.Body>
                            <div className={styles.customBodyContainer}>
                                <p className={styles.customBodyText}>
                                    Multiple security vulnerabilities have been detected in your system:
                                </p>
                                <div className={styles.securityCardsContainer}>
                                    <div className={\`\${styles.securityCard} \${styles.securityCardCritical}\`}>
                                        <span className={\`\${styles.securityCardTitle} \${styles.securityCardTitleCritical}\`}>
                                            Critical: SQL Injection
                                        </span>
                                        <span className={styles.securityCardScore}>CVSS: 9.8</span>
                                    </div>
                                    <div className={\`\${styles.securityCard} \${styles.securityCardHigh}\`}>
                                        <span className={\`\${styles.securityCardTitle} \${styles.securityCardTitleHigh}\`}>
                                            High: XSS Vulnerability
                                        </span>
                                        <span className={styles.securityCardScore}>CVSS: 7.2</span>
                                    </div>
                                </div>
                                <div className={styles.recommendationsBox}>
                                    <strong>Recommended actions:</strong>
                                    <br />
                                    • Update all dependencies immediately
                                    <br />
                                    • Review and sanitize user inputs
                                    <br />• Implement additional security headers
                                </div>
                            </div>
                        </DsAlertBanner.Body>
                        <DsAlertBanner.Actions>
                            <DsButton design="v1.2" variant="danger" size="small">
                                Fix Now
                            </DsButton>
                            <DsButton design="v1.2" buttonType="secondary" size="small">
                                View Details
                            </DsButton>
                            <DsButton design="v1.2" buttonType="secondary" size="small">
                                Ignore
                            </DsButton>
                        </DsAlertBanner.Actions>
                    </DsAlertBanner>
                </div>
                <DsButton className={styles.trigger} onClick={() => setOpen(true)}>
                    Show Security Alert
                </DsButton>
            </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A global alert banner with complex JSX content in the body, including security vulnerability cards, styled information boxes, and multiple action buttons.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const I=["InfoBlue","InfoNeutral","Warning","Error","Success","WithActions","CustomBody"];export{y as CustomBody,u as Error,l as InfoBlue,c as InfoNeutral,p as Success,d as Warning,m as WithActions,I as __namedExportsOrder,$ as default};
