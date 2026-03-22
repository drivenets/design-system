import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Bowpj2Im.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./classnames-BKwtnCRs.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./ds-alert-banner.stories.module-EXiuS0JS.js";import{n as d,t as f}from"./ds-button-Clm8l7Dp.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;t((()=>{p=e(n(),1),m=e(i(),1),c(),f(),o(),s(),h=r(),{expect:g,userEvent:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Design System/AlertBanner/Global`,component:a,parameters:{layout:`centered`},argTypes:{open:{control:`boolean`,description:`Controls whether the alert banner is visible`},variant:{control:`select`,options:l,description:`The variant of the alert banner`},closable:{control:`boolean`,description:`Whether the alert banner can be closed with an X button`},className:{control:`text`,description:`Additional CSS class names`},inline:{control:`boolean`,description:`Whether the alert banner should be inline (normal document flow) instead of global (designed for top of the page)`},style:{control:`object`,description:`Inline styles to apply to the component`},onOpenChange:{action:`onOpenChange`,description:`Callback fired when the alert banner should be closed`}}},x={render:function(){let[e,t]=(0,p.useState)(!0);return(0,h.jsxs)(a,{open:e,onOpenChange:t,variant:`info-blue`,icon:`info`,closable:!0,children:[(0,h.jsx)(a.Title,{children:`Information`}),(0,h.jsx)(a.Body,{children:`Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.`}),(0,h.jsxs)(a.Actions,{children:[(0,h.jsx)(d,{design:`v1.2`,variant:`danger`,size:`small`,children:`Proceed`}),(0,h.jsx)(d,{design:`v1.2`,buttonType:`secondary`,size:`small`,children:`Skip`})]})]})}},S={render:function(){let[e,t]=(0,p.useState)(!0);return(0,h.jsxs)(a,{open:e,onOpenChange:t,variant:`info-neutral`,closable:!0,children:[(0,h.jsx)(a.Title,{children:`Information`}),(0,h.jsx)(a.Body,{children:`This is an informational alert message.`})]})}},C={render:function(){let[e,t]=(0,p.useState)(!0);return(0,h.jsxs)(a,{open:e,onOpenChange:t,variant:`warning`,icon:`warning`,closable:!0,children:[(0,h.jsx)(a.Title,{children:`Warning`}),(0,h.jsx)(a.Body,{children:`This is a warning alert message. Please pay attention.`})]})}},w={render:function(){let[e,t]=(0,p.useState)(!0);return(0,h.jsxs)(a,{open:e,onOpenChange:t,variant:`error`,icon:`error`,closable:!0,children:[(0,h.jsx)(a.Title,{children:`Error`}),(0,h.jsx)(a.Body,{children:`Something went wrong. Please try again.`})]})}},T={render:function(){let[e,t]=(0,p.useState)(!0);return(0,h.jsxs)(a,{open:e,onOpenChange:t,variant:`success`,icon:`check_circle`,closable:!0,children:[(0,h.jsx)(a.Title,{children:`Success`}),(0,h.jsx)(a.Body,{children:`Your action was completed successfully!`})]})}},E={render:function(){let[e,t]=(0,p.useState)(!1);return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:u.globalMessages,children:(0,h.jsxs)(a,{open:e,onOpenChange:t,variant:`warning`,icon:`warning`,closable:!0,children:[(0,h.jsx)(a.Title,{children:`Attention needed`}),(0,h.jsx)(a.Body,{children:`Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.`}),(0,h.jsxs)(a.Actions,{children:[(0,h.jsx)(d,{design:`v1.2`,variant:`danger`,size:`small`,children:`Proceed`}),(0,h.jsx)(d,{design:`v1.2`,buttonType:`secondary`,size:`small`,children:`Skip`})]})]})}),(0,h.jsx)(d,{className:u.trigger,onClick:()=>t(!0),children:`Show Alert Banner`})]})},play:async({canvasElement:e})=>{let t=y(e),n=t.getByText(`Show Alert Banner`);await _.click(n),await g(t.getByText(`Attention needed`)).toBeTruthy();let r=t.getByLabelText(`Close alert`);await g(r).toBeTruthy(),await _.click(r),await v(()=>g(t.queryByText(`Attention needed`)).toBeFalsy())}},D={render:function(){let[e,t]=(0,p.useState)(!1);return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:u.globalMessages,children:(0,h.jsxs)(a,{className:u.customBody,open:e,onOpenChange:t,variant:`warning`,icon:`warning`,closable:!0,children:[(0,h.jsx)(a.Title,{children:`Security Alert`}),(0,h.jsx)(a.Body,{children:(0,h.jsxs)(`div`,{className:u.customBodyContainer,children:[(0,h.jsx)(`p`,{className:u.customBodyText,children:`Multiple security vulnerabilities have been detected in your system:`}),(0,h.jsxs)(`div`,{className:u.securityCardsContainer,children:[(0,h.jsxs)(`div`,{className:(0,m.default)(u.securityCard,u.securityCardCritical),children:[(0,h.jsx)(`span`,{className:(0,m.default)(u.securityCardTitle,u.securityCardTitleCritical),children:`Critical: SQL Injection`}),(0,h.jsx)(`span`,{className:u.securityCardScore,children:`CVSS: 9.8`})]}),(0,h.jsxs)(`div`,{className:(0,m.default)(u.securityCard,u.securityCardHigh),children:[(0,h.jsx)(`span`,{className:(0,m.default)(u.securityCardTitle,u.securityCardTitleHigh),children:`High: XSS Vulnerability`}),(0,h.jsx)(`span`,{className:u.securityCardScore,children:`CVSS: 7.2`})]})]}),(0,h.jsxs)(`div`,{className:u.recommendationsBox,children:[(0,h.jsx)(`strong`,{children:`Recommended actions:`}),(0,h.jsx)(`br`,{}),`• Update all dependencies immediately`,(0,h.jsx)(`br`,{}),`• Review and sanitize user inputs`,(0,h.jsx)(`br`,{}),`• Implement additional security headers`]})]})}),(0,h.jsxs)(a.Actions,{children:[(0,h.jsx)(d,{design:`v1.2`,variant:`danger`,size:`small`,children:`Fix Now`}),(0,h.jsx)(d,{design:`v1.2`,buttonType:`secondary`,size:`small`,children:`View Details`}),(0,h.jsx)(d,{design:`v1.2`,buttonType:`secondary`,size:`small`,children:`Ignore`})]})]})}),(0,h.jsx)(d,{className:u.trigger,onClick:()=>t(!0),children:`Show Security Alert`})]})},parameters:{docs:{description:{story:`A global alert banner with complex JSX content in the body, including security vulnerability cards, styled information boxes, and multiple action buttons.`}}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} variant="info-neutral" closable={true}>
                <DsAlertBanner.Title>Information</DsAlertBanner.Title>
                <DsAlertBanner.Body>This is an informational alert message.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} variant="warning" icon="warning" closable={true}>
                <DsAlertBanner.Title>Warning</DsAlertBanner.Title>
                <DsAlertBanner.Body>This is a warning alert message. Please pay attention.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} variant="error" icon="error" closable={true}>
                <DsAlertBanner.Title>Error</DsAlertBanner.Title>
                <DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <DsAlertBanner open={open} onOpenChange={setOpen} variant="success" icon="check_circle" closable={true}>
                <DsAlertBanner.Title>Success</DsAlertBanner.Title>
                <DsAlertBanner.Body>Your action was completed successfully!</DsAlertBanner.Body>
            </DsAlertBanner>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
                                    <div className={classNames(styles.securityCard, styles.securityCardCritical)}>
                                        <span className={classNames(styles.securityCardTitle, styles.securityCardTitleCritical)}>
                                            Critical: SQL Injection
                                        </span>
                                        <span className={styles.securityCardScore}>CVSS: 9.8</span>
                                    </div>
                                    <div className={classNames(styles.securityCard, styles.securityCardHigh)}>
                                        <span className={classNames(styles.securityCardTitle, styles.securityCardTitleHigh)}>
                                            High: XSS Vulnerability
                                        </span>
                                        <span className={styles.securityCardScore}>CVSS: 7.2</span>
                                    </div>
                                </div>
                                <div className={styles.recommendationsBox}>
                                    <strong>Recommended actions:</strong>
                                    <br />• Update all dependencies immediately
                                    <br />• Review and sanitize user inputs
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
}`,...D.parameters?.docs?.source}}},O=[`InfoBlue`,`InfoNeutral`,`Warning`,`Error`,`Success`,`WithActions`,`CustomBody`]}))();export{D as CustomBody,w as Error,x as InfoBlue,S as InfoNeutral,T as Success,C as Warning,E as WithActions,O as __namedExportsOrder,b as default};