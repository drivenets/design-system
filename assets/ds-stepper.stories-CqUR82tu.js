import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BgPYpvu3.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./ds-icon-R78Os0aH.js";import{t as a}from"./ds-icon-kefbswPD.js";import{a as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./ds-stepper-DBPb0Le7.js";var p,m,h,g,_,v=t((()=>{p=`_approveStep_1nhp1_1`,m=`_approveButton_1nhp1_5`,h=`_approveTitle_1nhp1_10`,g=`_approveIcon_1nhp1_14`,_={approveStep:p,approveButton:m,approveTitle:h,approveIcon:g}})),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;t((()=>{y=e(n(),1),f(),d(),a(),v(),b=r(),{expect:x,userEvent:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/Stepper`,component:o,parameters:{layout:`centered`}},w=[{label:`Project details`,description:`Enter project name and basic configuration`},{label:`Select market`,description:`Choose the target market for deployment`},{label:`Design policy`,description:`Define the design constraints and rules`}],T=[{label:`Project details`,description:`Set up the project scope and requirements`},{label:`Select market`,description:`Pick a region and target audience`},{label:`Design policy`,description:`Configure branding and layout guidelines`},{label:`Review summary`,description:`Verify all settings before submission`},{label:`Final approval`,description:`Confirm and finalize the deployment plan`}],E={render:function(){return(0,b.jsx)(`div`,{style:{width:300},children:(0,b.jsx)(o,{count:w.length,children:w.map((e,t)=>(0,b.jsx)(s,{index:t,children:(0,b.jsx)(u,{index:t,label:e.label,description:e.description,actions:(0,b.jsx)(c,{children:t===w.length-1?`Finish`:`Next`})})},t))})})},play:async({canvas:e,step:t})=>{await t(`All steps and descriptions visible`,async()=>{for(let t of w)await x(e.getByText(t.label)).toBeInTheDocument(),await x(e.getByText(t.description)).toBeInTheDocument()}),await t(`Navigate through all steps`,async()=>{await S.click(e.getByRole(`button`,{name:/next/i})),await S.click(e.getByRole(`button`,{name:/next/i})),await x(e.getByRole(`button`,{name:/finish/i})).toBeInTheDocument()})}},D={render:function(){return(0,b.jsx)(`div`,{style:{width:300},children:(0,b.jsx)(o,{count:w.length,children:w.map((e,t)=>(0,b.jsx)(s,{index:t,children:(0,b.jsx)(u,{index:t,label:e.label,actions:(0,b.jsx)(c,{children:t===w.length-1?`Finish`:`Next`})})},t))})})},play:async({canvas:e,step:t})=>{await t(`All step labels visible without descriptions`,async()=>{for(let t of w)await x(e.getByText(t.label)).toBeInTheDocument()}),await t(`Navigate through all steps`,async()=>{await S.click(e.getByRole(`button`,{name:/next/i})),await S.click(e.getByRole(`button`,{name:/next/i})),await x(e.getByRole(`button`,{name:/finish/i})).toBeInTheDocument()})}},O={render:function(){let[e,t]=(0,y.useState)(0),[n,r]=(0,y.useState)(`docked`),i=n===`floating`;return(0,b.jsx)(l,{open:!0,variant:n,draggable:i,disablePadding:i,slotProps:{collapseButton:{onClick:()=>{r(i?`docked`:`floating`)},collapsed:i}},children:(0,b.jsx)(o,{count:w.length,activeStep:e,onStepChange:({step:e})=>t(e),variant:i?`single`:void 0,floating:i,children:w.map((e,t)=>(0,b.jsx)(s,{index:t,children:(0,b.jsx)(u,{index:t,label:e.label,description:e.description,actions:(0,b.jsx)(c,{children:t===w.length-1?`Finish`:`Next`})})},t))})})},play:async({canvas:e,step:t})=>{function n(t){let n=e.getByRole(`button`,{name:new RegExp(t,`i`)});return S.click(n)}let r=async()=>{await S.click(e.getByLabelText(`Toggle panel`))};await t(`Iterate steps - Docked`,async()=>{await n(`Next`),await n(`Next`),await n(`Finish`)}),await t(`Go to first step`,async()=>{await n(`Project details`)}),await t(`Minimize panel`,async()=>{await r()}),await x(e.queryByText(/Enter project name/)).not.toBeInTheDocument(),await t(`Iterate steps - Floating`,async()=>{await n(`Next`),await n(`Next`),await n(`Finish`)}),await t(`Maximize panel`,async()=>{await r()}),await t(`Go to first step`,async()=>{await n(`Project details`)})}},k={parameters:{layout:`padded`},render:function(){return(0,b.jsx)(o,{count:T.length,orientation:`horizontal`,actions:(0,b.jsx)(c,{children:`Next`}),children:T.map((e,t)=>(0,b.jsx)(s,{index:t,children:(0,b.jsx)(u,{index:t,label:e.label,description:e.description})},t))})},play:async({canvas:e,step:t})=>{await t(`All steps visible`,async()=>{for(let t of T)await x(e.getByText(t.label)).toBeInTheDocument()}),await t(`Navigate through steps via Next button`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await x(t).toBeInTheDocument(),await S.click(t),await x(e.getByText(`Select market`).closest(`[aria-current="step"]`)).not.toBeNull()})}},A=[{label:`Project details`,description:`Configure the basic project settings`},{label:`Select market`,description:`Choose the target market for deployment`},{label:`Design policy`,description:`Define the design constraints and rules`}],j={parameters:{layout:`padded`},render:function(){return(0,b.jsx)(o,{count:A.length,orientation:`horizontal`,actions:(0,b.jsx)(c,{children:`Next`}),children:A.map((e,t)=>(0,b.jsx)(s,{index:t,children:(0,b.jsx)(u,{index:t,label:e.label,description:e.description})},t))})},play:async({canvas:e,step:t})=>{await t(`All steps visible`,async()=>{for(let t of A)await x(e.getByText(t.label)).toBeInTheDocument()}),await t(`Navigate all steps to completion`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await S.click(t),await S.click(t),await S.click(t)})}},M=[{label:`Project details`},{label:`Select market`},{label:`Design policy`}],N={parameters:{layout:`padded`},render:function(){return(0,b.jsx)(o,{count:M.length,orientation:`horizontal`,actions:(0,b.jsx)(c,{children:`Next`}),children:M.map((e,t)=>(0,b.jsx)(s,{index:t,children:(0,b.jsx)(u,{index:t,label:e.label})},t))})},play:async({canvas:e,step:t})=>{await t(`All steps visible`,async()=>{for(let t of M)await x(e.getByText(t.label)).toBeInTheDocument()}),await t(`Navigate all steps to completion`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await S.click(t),await S.click(t),await S.click(t)})}},P=[{label:`Upload files`,description:`Drag and drop or browse to upload`,icon:`upload`},{label:`Configure settings`,description:(0,b.jsxs)(`span`,{children:[`Adjust `,(0,b.jsx)(`strong`,{children:`network parameters`}),` for deployment`]}),icon:`settings`},{label:`Deploy`,description:`Review and launch the deployment`,icon:`rocket_launch`}],F={parameters:{layout:`padded`},render:function(){let[e,t]=(0,y.useState)(0);return(0,b.jsx)(o,{count:P.length,orientation:`horizontal`,activeStep:e,onStepChange:({step:e})=>t(e),actions:(0,b.jsx)(c,{variant:`ghost`,children:e===P.length-1?`Finish`:`Continue`}),children:P.map((e,t)=>(0,b.jsx)(s,{index:t,slots:{indicator:(0,b.jsx)(i,{icon:e.icon,size:`small`})},children:(0,b.jsx)(u,{index:t,label:e.label,description:e.description})},t))})},play:async({canvas:e,step:t})=>{await t(`All custom steps visible`,async()=>{for(let t of P)await x(e.getByText(t.label)).toBeInTheDocument()}),await t(`Custom icons rendered`,async()=>{await x(e.getByText(`upload`)).toBeInTheDocument(),await x(e.getByText(`settings`)).toBeInTheDocument(),await x(e.getByText(`rocket_launch`)).toBeInTheDocument()}),await t(`Navigate with custom button`,async()=>{let t=e.getByRole(`button`,{name:/continue/i});await x(t).toBeInTheDocument(),await S.click(t),await x(e.getByText(`Configure settings`).closest(`[aria-current="step"]`)).not.toBeNull()}),await t(`Rich description rendered`,async()=>{await x(e.getByText(`network parameters`).tagName).toBe(`STRONG`)})}},I={render:function(){let[e,t]=(0,y.useState)(0);return(0,b.jsx)(`div`,{style:{width:350},children:(0,b.jsxs)(o,{count:3,activeStep:e,onStepChange:({step:e})=>t(e),children:[(0,b.jsx)(s,{index:0,children:(0,b.jsx)(u,{index:0,label:`Project details`,description:`Enter project name and basic configuration`,actions:(0,b.jsx)(c,{children:`Next`})})}),(0,b.jsx)(s,{index:1,className:e===1?_.approveStep:void 0,slots:{indicator:(0,b.jsx)(i,{icon:`monitor_heart`,size:`small`})},slotProps:{indicator:{className:e===1?_.approveIcon:void 0}},children:(0,b.jsx)(u,{index:1,label:(0,b.jsx)(`span`,{className:e===1?_.approveTitle:void 0,children:`Verify health`}),description:`Confirm all services report healthy status`,actions:(0,b.jsx)(c,{className:e===1?_.approveButton:void 0,children:`Approve`})})}),(0,b.jsx)(s,{index:2,children:(0,b.jsx)(u,{index:2,label:`Design policy`,description:`Define the design constraints and rules`,actions:(0,b.jsx)(c,{children:`Finish`})})})]})})},play:async({canvas:e,step:t})=>{await t(`All steps visible`,async()=>{await x(e.getByText(`Project details`)).toBeInTheDocument(),await x(e.getByText(`Verify health`)).toBeInTheDocument(),await x(e.getByText(`Design policy`)).toBeInTheDocument()}),await t(`Default steps show numbers, custom step shows icon`,async()=>{await x(e.getByText(`1`)).toBeInTheDocument(),await x(e.getByText(`monitor_heart`)).toBeInTheDocument(),await x(e.getByText(`3`)).toBeInTheDocument()}),await t(`Navigate to custom step and verify approve action`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await S.click(t),await x(e.getByRole(`button`,{name:/approve/i})).toBeInTheDocument()})}},L={render:function(){return(0,b.jsx)(`div`,{style:{width:350},children:(0,b.jsxs)(o,{count:4,children:[(0,b.jsx)(s,{index:0,children:(0,b.jsx)(u,{index:0,label:`Basic information`,description:`Enter your project details`,actions:(0,b.jsx)(c,{children:`Next`})})}),(0,b.jsx)(s,{index:1,disabled:!0,children:(0,b.jsx)(u,{index:1,label:`Advanced settings`,description:`Configure advanced options (requires approval)`,actions:(0,b.jsx)(c,{children:`Next`})})}),(0,b.jsx)(s,{index:2,children:(0,b.jsx)(u,{index:2,label:`Review`,description:`Review your configuration`,actions:(0,b.jsx)(c,{children:`Next`})})}),(0,b.jsx)(s,{index:3,disabled:!0,children:(0,b.jsx)(u,{index:3,label:`Deploy`,description:`Deploy to production (requires elevated permissions)`,actions:(0,b.jsx)(c,{children:`Finish`})})})]})})},play:async({canvas:e,step:t})=>{await t(`Disabled steps have data-disabled attribute`,async()=>{await x(e.getByText(`Advanced settings`).closest(`[data-disabled]`)).not.toBeNull(),await x(e.getByText(`Deploy`).closest(`[data-disabled]`)).not.toBeNull()}),await t(`Enabled steps do not have data-disabled`,async()=>{await x(e.getByText(`Basic information`).closest(`[data-disabled]`)).toBeNull(),await x(e.getByText(`Review`).closest(`[data-disabled]`)).toBeNull()}),await t(`Disabled completed step is not clickable`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await S.click(t),await S.click(e.getByRole(`button`,{name:/next/i})),await x(e.getByText(`Advanced settings`).closest(`button`)).toBeNull()})}},R={render:function(){return(0,b.jsx)(`div`,{style:{width:350},children:(0,b.jsxs)(o,{count:4,children:[(0,b.jsx)(s,{index:0,children:(0,b.jsx)(u,{index:0,label:`Configuration`,description:`Enter deployment configuration`,actions:(0,b.jsx)(c,{children:`Next`})})}),(0,b.jsx)(s,{index:1,variant:`error`,children:(0,b.jsx)(u,{index:1,label:`Validation`,description:`Configuration validation failed`,actions:(0,b.jsx)(c,{children:`Retry`})})}),(0,b.jsx)(s,{index:2,children:(0,b.jsx)(u,{index:2,label:`Review`,description:`Review and confirm changes`,actions:(0,b.jsx)(c,{children:`Next`})})}),(0,b.jsx)(s,{index:3,children:(0,b.jsx)(u,{index:3,label:`Complete`,description:`Finalize deployment`,actions:(0,b.jsx)(c,{children:`Finish`})})})]})})},play:async({canvas:e,step:t})=>{await t(`Error step shows close icon instead of number`,async()=>{await x(e.getByText(`close`)).toBeInTheDocument()}),await t(`Error step has data-error attribute`,async()=>{await x(e.getByText(`Validation`).closest(`[data-error]`)).not.toBeNull()}),await t(`Non-error steps do not have data-error`,async()=>{await x(e.getByText(`Configuration`).closest(`[data-error]`)).toBeNull()}),await t(`Navigate to error step and verify current state`,async()=>{let t=e.getByRole(`button`,{name:/next/i});await S.click(t);let n=e.getByText(`Validation`);await x(n.closest(`[data-current]`)).not.toBeNull(),await x(n.closest(`[data-error]`)).not.toBeNull()})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z=[`Default`,`Compact`,`WithPanel`,`Horizontal`,`HorizontalFewSteps`,`HorizontalCompactFewSteps`,`CustomizedHorizontal`,`CustomizedVertical`,`WithDisabledSteps`,`WithErrorStep`]}))();export{D as Compact,F as CustomizedHorizontal,I as CustomizedVertical,E as Default,k as Horizontal,N as HorizontalCompactFewSteps,j as HorizontalFewSteps,L as WithDisabledSteps,R as WithErrorStep,O as WithPanel,z as __namedExportsOrder,C as default};