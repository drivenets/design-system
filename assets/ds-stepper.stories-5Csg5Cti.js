import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-B7XLeeKt.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{i}from"./ds-icon.types-6oDgO5dj.js";import{t as a}from"./ds-icon-C7Da940Y.js";import{a as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./ds-stepper-C1RFb7a5.js";var p=t((()=>{d()})),m,h,g,_,v,y=t((()=>{m=`_approveStep_kzu3t_1`,h=`_approveButton_kzu3t_5`,g=`_approveTitle_kzu3t_10`,_=`_approveIcon_kzu3t_14`,v={approveStep:m,approveButton:h,approveTitle:g,approveIcon:_}})),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;t((()=>{b=e(n(),1),f(),p(),a(),y(),x=r(),{expect:S,userEvent:C}=__STORYBOOK_MODULE_TEST__,w={title:`Design System/Stepper`,component:o,parameters:{layout:`centered`}},T=[{label:`Project details`,description:`Enter project name and basic configuration`},{label:`Select market`,description:`Choose the target market for deployment`},{label:`Design policy`,description:`Define the design constraints and rules`}],E=[{label:`Project details`,description:`Set up the project scope and requirements`},{label:`Select market`,description:`Pick a region and target audience`},{label:`Design policy`,description:`Configure branding and layout guidelines`},{label:`Review summary`,description:`Verify all settings before submission`},{label:`Final approval`,description:`Confirm and finalize the deployment plan`}],D={render:function(){return(0,x.jsx)(`div`,{style:{width:300},children:(0,x.jsx)(o,{count:T.length,children:T.map((e,t)=>(0,x.jsx)(s,{index:t,children:(0,x.jsx)(u,{index:t,label:e.label,description:e.description,actions:(0,x.jsx)(c,{children:t===T.length-1?`Finish`:`Next`})})},t))})})},play:async({canvas:e,step:t})=>{await t(`All steps and descriptions visible`,async()=>{for(let t of T)await S(e.getByText(t.label)).toBeInTheDocument(),await S(e.getByText(t.description)).toBeInTheDocument()}),await t(`Navigate through all steps`,async()=>{await C.click(e.getByRole(`button`,{name:/next/i})),await C.click(e.getByRole(`button`,{name:/next/i})),await S(e.getByRole(`button`,{name:/finish/i})).toBeInTheDocument()})}},O={render:function(){return(0,x.jsx)(`div`,{style:{width:300},children:(0,x.jsx)(o,{count:T.length,children:T.map((e,t)=>(0,x.jsx)(s,{index:t,children:(0,x.jsx)(u,{index:t,label:e.label,actions:(0,x.jsx)(c,{children:t===T.length-1?`Finish`:`Next`})})},t))})})},play:async({canvas:e,step:t})=>{await t(`All step labels visible without descriptions`,async()=>{for(let t of T)await S(e.getByText(t.label)).toBeInTheDocument()}),await t(`Navigate through all steps`,async()=>{await C.click(e.getByRole(`button`,{name:/next/i})),await C.click(e.getByRole(`button`,{name:/next/i})),await S(e.getByRole(`button`,{name:/finish/i})).toBeInTheDocument()})}},k={render:function(){let[e,t]=(0,b.useState)(0),[n,r]=(0,b.useState)(`docked`),i=n===`floating`;return(0,x.jsx)(l,{open:!0,variant:n,draggable:i,disablePadding:i,slotProps:{collapseButton:{onClick:()=>{r(i?`docked`:`floating`)},collapsed:i}},children:(0,x.jsx)(o,{count:T.length,activeStep:e,onStepChange:({step:e})=>t(e),variant:i?`single`:void 0,floating:i,children:T.map((e,t)=>(0,x.jsx)(s,{index:t,children:(0,x.jsx)(u,{index:t,label:e.label,description:e.description,actions:(0,x.jsx)(c,{children:t===T.length-1?`Finish`:`Next`})})},t))})})},play:async({canvas:e,step:t})=>{function n(t){let n=e.getByRole(`button`,{name:new RegExp(t,`i`)});return C.click(n)}let r=async()=>{await C.click(e.getByLabelText(`Toggle panel`))};await t(`Iterate steps - Docked`,async()=>{await n(`Next`),await n(`Next`),await n(`Finish`)}),await t(`Go to first step`,async()=>{await n(`Project details`)}),await t(`Minimize panel`,async()=>{await r()}),await S(e.queryByText(/Enter project name/)).not.toBeInTheDocument(),await t(`Iterate steps - Floating`,async()=>{await n(`Next`),await n(`Next`),await n(`Finish`)}),await t(`Maximize panel`,async()=>{await r()}),await t(`Go to first step`,async()=>{await n(`Project details`)})}},A={parameters:{layout:`padded`},render:function(){return(0,x.jsx)(o,{count:E.length,orientation:`horizontal`,actions:(0,x.jsx)(c,{children:`Next`}),children:E.map((e,t)=>(0,x.jsx)(s,{index:t,children:(0,x.jsx)(u,{index:t,label:e.label,description:e.description})},t))})},play:async({canvas:e,step:t})=>{await t(`All steps visible`,async()=>{for(let t of E)await S(e.getByText(t.label)).toBeInTheDocument()}),await t(`Navigate through steps via Next button`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await S(t).toBeInTheDocument(),await C.click(t),await S(e.getByText(`Select market`).closest(`[aria-current="step"]`)).not.toBeNull()})}},j=[{label:`Project details`,description:`Configure the basic project settings`},{label:`Select market`,description:`Choose the target market for deployment`},{label:`Design policy`,description:`Define the design constraints and rules`}],M={parameters:{layout:`padded`},render:function(){return(0,x.jsx)(o,{count:j.length,orientation:`horizontal`,actions:(0,x.jsx)(c,{children:`Next`}),children:j.map((e,t)=>(0,x.jsx)(s,{index:t,children:(0,x.jsx)(u,{index:t,label:e.label,description:e.description})},t))})},play:async({canvas:e,step:t})=>{await t(`All steps visible`,async()=>{for(let t of j)await S(e.getByText(t.label)).toBeInTheDocument()}),await t(`Navigate all steps to completion`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await C.click(t),await C.click(t),await C.click(t)})}},N=[{label:`Project details`},{label:`Select market`},{label:`Design policy`}],P={parameters:{layout:`padded`},render:function(){return(0,x.jsx)(o,{count:N.length,orientation:`horizontal`,actions:(0,x.jsx)(c,{children:`Next`}),children:N.map((e,t)=>(0,x.jsx)(s,{index:t,children:(0,x.jsx)(u,{index:t,label:e.label})},t))})},play:async({canvas:e,step:t})=>{await t(`All steps visible`,async()=>{for(let t of N)await S(e.getByText(t.label)).toBeInTheDocument()}),await t(`Navigate all steps to completion`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await C.click(t),await C.click(t),await C.click(t)})}},F=[{label:`Upload files`,description:`Drag and drop or browse to upload`,icon:`upload`},{label:`Configure settings`,description:(0,x.jsxs)(`span`,{children:[`Adjust `,(0,x.jsx)(`strong`,{children:`network parameters`}),` for deployment`]}),icon:`settings`},{label:`Deploy`,description:`Review and launch the deployment`,icon:`rocket_launch`}],I={parameters:{layout:`padded`},render:function(){let[e,t]=(0,b.useState)(0);return(0,x.jsx)(o,{count:F.length,orientation:`horizontal`,activeStep:e,onStepChange:({step:e})=>t(e),actions:(0,x.jsx)(c,{variant:`ghost`,children:e===F.length-1?`Finish`:`Continue`}),children:F.map((e,t)=>(0,x.jsx)(s,{index:t,slots:{indicator:(0,x.jsx)(i,{icon:e.icon,size:`small`})},children:(0,x.jsx)(u,{index:t,label:e.label,description:e.description})},t))})},play:async({canvas:e,step:t})=>{await t(`All custom steps visible`,async()=>{for(let t of F)await S(e.getByText(t.label)).toBeInTheDocument()}),await t(`Custom icons rendered`,async()=>{await S(e.getByText(`upload`)).toBeInTheDocument(),await S(e.getByText(`settings`)).toBeInTheDocument(),await S(e.getByText(`rocket_launch`)).toBeInTheDocument()}),await t(`Navigate with custom button`,async()=>{let t=e.getByRole(`button`,{name:/continue/i});await S(t).toBeInTheDocument(),await C.click(t),await S(e.getByText(`Configure settings`).closest(`[aria-current="step"]`)).not.toBeNull()}),await t(`Rich description rendered`,async()=>{await S(e.getByText(`network parameters`).tagName).toBe(`STRONG`)})}},L={render:function(){let[e,t]=(0,b.useState)(0);return(0,x.jsx)(`div`,{style:{width:350},children:(0,x.jsxs)(o,{count:3,activeStep:e,onStepChange:({step:e})=>t(e),children:[(0,x.jsx)(s,{index:0,children:(0,x.jsx)(u,{index:0,label:`Project details`,description:`Enter project name and basic configuration`,actions:(0,x.jsx)(c,{children:`Next`})})}),(0,x.jsx)(s,{index:1,className:e===1?v.approveStep:void 0,slots:{indicator:(0,x.jsx)(i,{icon:`monitor_heart`,size:`small`})},slotProps:{indicator:{className:e===1?v.approveIcon:void 0}},children:(0,x.jsx)(u,{index:1,label:(0,x.jsx)(`span`,{className:e===1?v.approveTitle:void 0,children:`Verify health`}),description:`Confirm all services report healthy status`,actions:(0,x.jsx)(c,{className:e===1?v.approveButton:void 0,children:`Approve`})})}),(0,x.jsx)(s,{index:2,children:(0,x.jsx)(u,{index:2,label:`Design policy`,description:`Define the design constraints and rules`,actions:(0,x.jsx)(c,{children:`Finish`})})})]})})},play:async({canvas:e,step:t})=>{await t(`All steps visible`,async()=>{await S(e.getByText(`Project details`)).toBeInTheDocument(),await S(e.getByText(`Verify health`)).toBeInTheDocument(),await S(e.getByText(`Design policy`)).toBeInTheDocument()}),await t(`Default steps show numbers, custom step shows icon`,async()=>{await S(e.getByText(`1`)).toBeInTheDocument(),await S(e.getByText(`monitor_heart`)).toBeInTheDocument(),await S(e.getByText(`3`)).toBeInTheDocument()}),await t(`Navigate to custom step and verify approve action`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await C.click(t),await S(e.getByRole(`button`,{name:/approve/i})).toBeInTheDocument()})}},R={render:function(){return(0,x.jsx)(`div`,{style:{width:350},children:(0,x.jsxs)(o,{count:4,children:[(0,x.jsx)(s,{index:0,children:(0,x.jsx)(u,{index:0,label:`Basic information`,description:`Enter your project details`,actions:(0,x.jsx)(c,{children:`Next`})})}),(0,x.jsx)(s,{index:1,disabled:!0,children:(0,x.jsx)(u,{index:1,label:`Advanced settings`,description:`Configure advanced options (requires approval)`,actions:(0,x.jsx)(c,{children:`Next`})})}),(0,x.jsx)(s,{index:2,children:(0,x.jsx)(u,{index:2,label:`Review`,description:`Review your configuration`,actions:(0,x.jsx)(c,{children:`Next`})})}),(0,x.jsx)(s,{index:3,disabled:!0,children:(0,x.jsx)(u,{index:3,label:`Deploy`,description:`Deploy to production (requires elevated permissions)`,actions:(0,x.jsx)(c,{children:`Finish`})})})]})})},play:async({canvas:e,step:t})=>{await t(`Disabled steps have data-disabled attribute`,async()=>{await S(e.getByText(`Advanced settings`).closest(`[data-disabled]`)).not.toBeNull(),await S(e.getByText(`Deploy`).closest(`[data-disabled]`)).not.toBeNull()}),await t(`Enabled steps do not have data-disabled`,async()=>{await S(e.getByText(`Basic information`).closest(`[data-disabled]`)).toBeNull(),await S(e.getByText(`Review`).closest(`[data-disabled]`)).toBeNull()}),await t(`Disabled completed step is not clickable`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await C.click(t),await C.click(e.getByRole(`button`,{name:/next/i})),await S(e.getByText(`Advanced settings`).closest(`button`)).toBeNull()})}},z={render:function(){return(0,x.jsx)(`div`,{style:{width:350},children:(0,x.jsxs)(o,{count:4,children:[(0,x.jsx)(s,{index:0,children:(0,x.jsx)(u,{index:0,label:`Configuration`,description:`Enter deployment configuration`,actions:(0,x.jsx)(c,{children:`Next`})})}),(0,x.jsx)(s,{index:1,variant:`error`,children:(0,x.jsx)(u,{index:1,label:`Validation`,description:`Configuration validation failed`,actions:(0,x.jsx)(c,{children:`Retry`})})}),(0,x.jsx)(s,{index:2,children:(0,x.jsx)(u,{index:2,label:`Review`,description:`Review and confirm changes`,actions:(0,x.jsx)(c,{children:`Next`})})}),(0,x.jsx)(s,{index:3,children:(0,x.jsx)(u,{index:3,label:`Complete`,description:`Finalize deployment`,actions:(0,x.jsx)(c,{children:`Finish`})})})]})})},play:async({canvas:e,step:t})=>{await t(`Error step shows close icon instead of number`,async()=>{await S(e.getByText(`close`)).toBeInTheDocument()}),await t(`Error step has data-error attribute`,async()=>{await S(e.getByText(`Validation`).closest(`[data-error]`)).not.toBeNull()}),await t(`Non-error steps do not have data-error`,async()=>{await S(e.getByText(`Configuration`).closest(`[data-error]`)).toBeNull()}),await t(`Navigate to error step and verify current state`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await C.click(t);let n=e.getByText(`Validation`);await S(n.closest(`[data-current]`)).not.toBeNull(),await S(n.closest(`[data-error]`)).not.toBeNull()})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: 300
    }}>
                <DsStepper count={steps.length}>
                    {steps.map((step, index) => <DsStep index={index} key={index}>
                            <DsStepContent index={index} label={step.label} description={step.description} actions={<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>} />
                        </DsStep>)}
                </DsStepper>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('All steps and descriptions visible', async () => {
      for (const s of steps) {
        await expect(canvas.getByText(s.label)).toBeInTheDocument();
        await expect(canvas.getByText(s.description)).toBeInTheDocument();
      }
    });
    await step('Navigate through all steps', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: /next/i
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: /next/i
      }));
      await expect(canvas.getByRole('button', {
        name: /finish/i
      })).toBeInTheDocument();
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: 300
    }}>
                <DsStepper count={steps.length}>
                    {steps.map((step, index) => <DsStep index={index} key={index}>
                            <DsStepContent index={index} label={step.label} actions={<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>} />
                        </DsStep>)}
                </DsStepper>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('All step labels visible without descriptions', async () => {
      for (const s of steps) {
        await expect(canvas.getByText(s.label)).toBeInTheDocument();
      }
    });
    await step('Navigate through all steps', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: /next/i
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: /next/i
      }));
      await expect(canvas.getByRole('button', {
        name: /finish/i
      })).toBeInTheDocument();
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [activeStep, setActiveStep] = useState(0);
    const [panelVariant, setPanelVariant] = useState<DsPanelVariant>('docked');
    const isFloating = panelVariant === 'floating';
    const togglePanelVariant = () => {
      setPanelVariant(isFloating ? 'docked' : 'floating');
    };
    return <DsPanel open variant={panelVariant} draggable={isFloating} disablePadding={isFloating} slotProps={{
      collapseButton: {
        onClick: togglePanelVariant,
        collapsed: isFloating
      }
    }}>
                <DsStepper count={steps.length} activeStep={activeStep} onStepChange={({
        step
      }) => setActiveStep(step)} variant={isFloating ? 'single' : undefined} floating={isFloating}>
                    {steps.map((step, index) => <DsStep index={index} key={index}>
                            <DsStepContent index={index} label={step.label} description={step.description} actions={<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>} />
                        </DsStep>)}
                </DsStepper>
            </DsPanel>;
  },
  play: async ({
    canvas,
    step
  }) => {
    function click(name: string) {
      const nextButton = canvas.getByRole('button', {
        name: new RegExp(name, 'i')
      });
      return userEvent.click(nextButton);
    }
    const togglePanel = async () => {
      await userEvent.click(canvas.getByLabelText('Toggle panel'));
    };
    await step('Iterate steps - Docked', async () => {
      await click('Next');
      await click('Next');
      await click('Finish');
    });
    await step('Go to first step', async () => {
      await click('Project details');
    });
    await step('Minimize panel', async () => {
      await togglePanel();
    });
    await expect(canvas.queryByText(/Enter project name/)).not.toBeInTheDocument();
    await step('Iterate steps - Floating', async () => {
      await click('Next');
      await click('Next');
      await click('Finish');
    });
    await step('Maximize panel', async () => {
      await togglePanel();
    });
    await step('Go to first step', async () => {
      await click('Project details');
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: function Render() {
    return <DsStepper count={horizontalSteps.length} orientation="horizontal" actions={<DsNextStepButton>Next</DsNextStepButton>}>
                {horizontalSteps.map((step, index) => <DsStep index={index} key={index}>
                        <DsStepContent index={index} label={step.label} description={step.description} />
                    </DsStep>)}
            </DsStepper>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('All steps visible', async () => {
      for (const s of horizontalSteps) {
        await expect(canvas.getByText(s.label)).toBeInTheDocument();
      }
    });
    await step('Navigate through steps via Next button', async () => {
      const nextButton = canvas.getByRole('button', {
        name: /next/i
      });
      await expect(nextButton).toBeInTheDocument();
      await userEvent.click(nextButton);
      const secondStepEl = canvas.getByText('Select market');
      await expect(secondStepEl.closest('[aria-current="step"]')).not.toBeNull();
    });
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: function Render() {
    return <DsStepper count={fewSteps.length} orientation="horizontal" actions={<DsNextStepButton>Next</DsNextStepButton>}>
                {fewSteps.map((step, index) => <DsStep index={index} key={index}>
                        <DsStepContent index={index} label={step.label} description={step.description} />
                    </DsStep>)}
            </DsStepper>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('All steps visible', async () => {
      for (const s of fewSteps) {
        await expect(canvas.getByText(s.label)).toBeInTheDocument();
      }
    });
    await step('Navigate all steps to completion', async () => {
      const nextButton = canvas.getByRole('button', {
        name: /next/i
      });
      await userEvent.click(nextButton);
      await userEvent.click(nextButton);
      await userEvent.click(nextButton);
    });
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: function Render() {
    return <DsStepper count={fewCompactSteps.length} orientation="horizontal" actions={<DsNextStepButton>Next</DsNextStepButton>}>
                {fewCompactSteps.map((step, index) => <DsStep index={index} key={index}>
                        <DsStepContent index={index} label={step.label} />
                    </DsStep>)}
            </DsStepper>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('All steps visible', async () => {
      for (const s of fewCompactSteps) {
        await expect(canvas.getByText(s.label)).toBeInTheDocument();
      }
    });
    await step('Navigate all steps to completion', async () => {
      const nextButton = canvas.getByRole('button', {
        name: /next/i
      });
      await userEvent.click(nextButton);
      await userEvent.click(nextButton);
      await userEvent.click(nextButton);
    });
  }
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: function Render() {
    const [activeStep, setActiveStep] = useState(0);
    return <DsStepper count={customSteps.length} orientation="horizontal" activeStep={activeStep} onStepChange={({
      step
    }) => setActiveStep(step)} actions={<DsNextStepButton variant="ghost">
                        {activeStep === customSteps.length - 1 ? 'Finish' : 'Continue'}
                    </DsNextStepButton>}>
                {customSteps.map((step, index) => <DsStep index={index} key={index} slots={{
        indicator: <DsIcon icon={step.icon} size="small" />
      }}>
                        <DsStepContent index={index} label={step.label} description={step.description} />
                    </DsStep>)}
            </DsStepper>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('All custom steps visible', async () => {
      for (const s of customSteps) {
        await expect(canvas.getByText(s.label)).toBeInTheDocument();
      }
    });
    await step('Custom icons rendered', async () => {
      await expect(canvas.getByText('upload')).toBeInTheDocument();
      await expect(canvas.getByText('settings')).toBeInTheDocument();
      await expect(canvas.getByText('rocket_launch')).toBeInTheDocument();
    });
    await step('Navigate with custom button', async () => {
      const nextButton = canvas.getByRole('button', {
        name: /continue/i
      });
      await expect(nextButton).toBeInTheDocument();
      await userEvent.click(nextButton);
      const secondStepEl = canvas.getByText('Configure settings');
      await expect(secondStepEl.closest('[aria-current="step"]')).not.toBeNull();
    });
    await step('Rich description rendered', async () => {
      const bold = canvas.getByText('network parameters');
      await expect(bold.tagName).toBe('STRONG');
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [activeStep, setActiveStep] = useState(0);
    return <div style={{
      width: 350
    }}>
                <DsStepper count={3} activeStep={activeStep} onStepChange={({
        step
      }) => setActiveStep(step)}>
                    <DsStep index={0}>
                        <DsStepContent index={0} label="Project details" description="Enter project name and basic configuration" actions={<DsNextStepButton>Next</DsNextStepButton>} />
                    </DsStep>

                    <DsStep index={1} className={activeStep === 1 ? styles.approveStep : undefined} slots={{
          indicator: <DsIcon icon="monitor_heart" size="small" />
        }} slotProps={{
          indicator: {
            className: activeStep === 1 ? styles.approveIcon : undefined
          }
        }}>
                        <DsStepContent index={1} label={<span className={activeStep === 1 ? styles.approveTitle : undefined}>Verify health</span>} description="Confirm all services report healthy status" actions={<DsNextStepButton className={activeStep === 1 ? styles.approveButton : undefined}>
                                    Approve
                                </DsNextStepButton>} />
                    </DsStep>

                    <DsStep index={2}>
                        <DsStepContent index={2} label="Design policy" description="Define the design constraints and rules" actions={<DsNextStepButton>Finish</DsNextStepButton>} />
                    </DsStep>
                </DsStepper>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('All steps visible', async () => {
      await expect(canvas.getByText('Project details')).toBeInTheDocument();
      await expect(canvas.getByText('Verify health')).toBeInTheDocument();
      await expect(canvas.getByText('Design policy')).toBeInTheDocument();
    });
    await step('Default steps show numbers, custom step shows icon', async () => {
      await expect(canvas.getByText('1')).toBeInTheDocument();
      await expect(canvas.getByText('monitor_heart')).toBeInTheDocument();
      await expect(canvas.getByText('3')).toBeInTheDocument();
    });
    await step('Navigate to custom step and verify approve action', async () => {
      const nextButton = canvas.getByRole('button', {
        name: /next/i
      });
      await userEvent.click(nextButton);
      await expect(canvas.getByRole('button', {
        name: /approve/i
      })).toBeInTheDocument();
    });
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: 350
    }}>
                <DsStepper count={4}>
                    <DsStep index={0}>
                        <DsStepContent index={0} label="Basic information" description="Enter your project details" actions={<DsNextStepButton>Next</DsNextStepButton>} />
                    </DsStep>

                    <DsStep index={1} disabled>
                        <DsStepContent index={1} label="Advanced settings" description="Configure advanced options (requires approval)" actions={<DsNextStepButton>Next</DsNextStepButton>} />
                    </DsStep>

                    <DsStep index={2}>
                        <DsStepContent index={2} label="Review" description="Review your configuration" actions={<DsNextStepButton>Next</DsNextStepButton>} />
                    </DsStep>

                    <DsStep index={3} disabled>
                        <DsStepContent index={3} label="Deploy" description="Deploy to production (requires elevated permissions)" actions={<DsNextStepButton>Finish</DsNextStepButton>} />
                    </DsStep>
                </DsStepper>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Disabled steps have data-disabled attribute', async () => {
      const advancedStep = canvas.getByText('Advanced settings').closest('[data-disabled]');
      await expect(advancedStep).not.toBeNull();
      const deployStep = canvas.getByText('Deploy').closest('[data-disabled]');
      await expect(deployStep).not.toBeNull();
    });
    await step('Enabled steps do not have data-disabled', async () => {
      const basicStep = canvas.getByText('Basic information').closest('[data-disabled]');
      await expect(basicStep).toBeNull();
      const reviewStep = canvas.getByText('Review').closest('[data-disabled]');
      await expect(reviewStep).toBeNull();
    });
    await step('Disabled completed step is not clickable', async () => {
      const nextButton = canvas.getByRole('button', {
        name: /next/i
      });
      await userEvent.click(nextButton);
      await userEvent.click(canvas.getByRole('button', {
        name: /next/i
      }));
      const advancedStep = canvas.getByText('Advanced settings');
      await expect(advancedStep.closest('button')).toBeNull();
    });
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: 350
    }}>
                <DsStepper count={4}>
                    <DsStep index={0}>
                        <DsStepContent index={0} label="Configuration" description="Enter deployment configuration" actions={<DsNextStepButton>Next</DsNextStepButton>} />
                    </DsStep>

                    <DsStep index={1} variant="error">
                        <DsStepContent index={1} label="Validation" description="Configuration validation failed" actions={<DsNextStepButton>Retry</DsNextStepButton>} />
                    </DsStep>

                    <DsStep index={2}>
                        <DsStepContent index={2} label="Review" description="Review and confirm changes" actions={<DsNextStepButton>Next</DsNextStepButton>} />
                    </DsStep>

                    <DsStep index={3}>
                        <DsStepContent index={3} label="Complete" description="Finalize deployment" actions={<DsNextStepButton>Finish</DsNextStepButton>} />
                    </DsStep>
                </DsStepper>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Error step shows close icon instead of number', async () => {
      await expect(canvas.getByText('close')).toBeInTheDocument();
    });
    await step('Error step has data-error attribute', async () => {
      const errorStep = canvas.getByText('Validation').closest('[data-error]');
      await expect(errorStep).not.toBeNull();
    });
    await step('Non-error steps do not have data-error', async () => {
      const configStep = canvas.getByText('Configuration').closest('[data-error]');
      await expect(configStep).toBeNull();
    });
    await step('Navigate to error step and verify current state', async () => {
      const nextButton = canvas.getByRole('button', {
        name: /next/i
      });
      await userEvent.click(nextButton);
      const validationStep = canvas.getByText('Validation');
      await expect(validationStep.closest('[data-current]')).not.toBeNull();
      await expect(validationStep.closest('[data-error]')).not.toBeNull();
    });
  }
}`,...z.parameters?.docs?.source}}},B=[`Default`,`Compact`,`WithPanel`,`Horizontal`,`HorizontalFewSteps`,`HorizontalCompactFewSteps`,`CustomizedHorizontal`,`CustomizedVertical`,`WithDisabledSteps`,`WithErrorStep`]}))();export{O as Compact,I as CustomizedHorizontal,L as CustomizedVertical,D as Default,A as Horizontal,P as HorizontalCompactFewSteps,M as HorizontalFewSteps,R as WithDisabledSteps,z as WithErrorStep,k as WithPanel,B as __namedExportsOrder,w as default};