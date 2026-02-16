import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as k}from"./iframe-CYjJFujY.js";import{a as d,b as o,c,d as r,D as F}from"./ds-step-next-button-Boi5Axu1.js";import{D as E}from"./ds-icon-DIkq1sMi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DrmmZOdo.js";import"./index-lXO_8P3h.js";import"./index-BG2EI6Zy.js";import"./index-D_tHYuTO.js";import"./index-nfgU5Fk1.js";import"./index-B4YxvotJ.js";import"./index-BgwgYCXy.js";import"./ds-button-CEMYd-ZE.js";import"./ds-button-legacy-DWDTBqFT.js";import"./ds-button-new-DHE429te.js";const P="_approveStep_kzu3t_1",A="_approveButton_kzu3t_5",_="_approveTitle_kzu3t_10",V="_approveIcon_kzu3t_14",g={approveStep:P,approveButton:A,approveTitle:_,approveIcon:V},{expect:s,userEvent:l}=__STORYBOOK_MODULE_TEST__,ee={title:"Design System/Stepper",component:d,parameters:{layout:"centered"},tags:["autodocs"]},p=[{label:"Project details",description:"Enter project name and basic configuration"},{label:"Select market",description:"Choose the target market for deployment"},{label:"Design policy",description:"Define the design constraints and rules"}],R=[{label:"Project details",description:"Set up the project scope and requirements"},{label:"Select market",description:"Pick a region and target audience"},{label:"Design policy",description:"Configure branding and layout guidelines"},{label:"Review summary",description:"Verify all settings before submission"},{label:"Final approval",description:"Confirm and finalize the deployment plan"}],h={render:function(){return t.jsx("div",{style:{width:300},children:t.jsx(d,{count:p.length,children:p.map((a,e)=>t.jsx(o,{index:e,children:t.jsx(c,{index:e,label:a.label,description:a.description,actions:t.jsx(r,{children:e===p.length-1?"Finish":"Next"})})},e))})})},play:async({canvas:n,step:a})=>{await a("All steps and descriptions visible",async()=>{for(const e of p)await s(n.getByText(e.label)).toBeInTheDocument(),await s(n.getByText(e.description)).toBeInTheDocument()}),await a("Navigate through all steps",async()=>{await l.click(n.getByRole("button",{name:/next/i})),await l.click(n.getByRole("button",{name:/next/i})),await s(n.getByRole("button",{name:/finish/i})).toBeInTheDocument()})}},B={render:function(){return t.jsx("div",{style:{width:300},children:t.jsx(d,{count:p.length,children:p.map((a,e)=>t.jsx(o,{index:e,children:t.jsx(c,{index:e,label:a.label,actions:t.jsx(r,{children:e===p.length-1?"Finish":"Next"})})},e))})})},play:async({canvas:n,step:a})=>{await a("All step labels visible without descriptions",async()=>{for(const e of p)await s(n.getByText(e.label)).toBeInTheDocument()}),await a("Navigate through all steps",async()=>{await l.click(n.getByRole("button",{name:/next/i})),await l.click(n.getByRole("button",{name:/next/i})),await s(n.getByRole("button",{name:/finish/i})).toBeInTheDocument()})}},S={render:function(){const[a,e]=k.useState(0),[i,x]=k.useState("docked"),u=i==="floating",z=()=>{x(u?"docked":"floating")};return t.jsx(F,{open:!0,variant:i,draggable:u,disablePadding:u,slotProps:{collapseButton:{onClick:z,collapsed:u}},children:t.jsx(d,{count:p.length,activeStep:a,onStepChange:({step:y})=>e(y),variant:u?"single":void 0,floating:u,children:p.map((y,m)=>t.jsx(o,{index:m,children:t.jsx(c,{index:m,label:y.label,description:y.description,actions:t.jsx(r,{children:m===p.length-1?"Finish":"Next"})})},m))})})},play:async({canvas:n,step:a})=>{function e(x){const u=n.getByRole("button",{name:new RegExp(x,"i")});return l.click(u)}const i=async()=>{await l.click(n.getByLabelText("Toggle panel"))};await a("Iterate steps - Docked",async()=>{await e("Next"),await e("Next"),await e("Finish")}),await a("Go to first step",async()=>{await e("Project details")}),await a("Minimize panel",async()=>{await i()}),await s(n.queryByText(/Enter project name/)).not.toBeInTheDocument(),await a("Iterate steps - Floating",async()=>{await e("Next"),await e("Next"),await e("Finish")}),await a("Maximize panel",async()=>{await i()}),await a("Go to first step",async()=>{await e("Project details")})}},w={parameters:{layout:"padded"},render:function(){return t.jsx(d,{count:R.length,orientation:"horizontal",actions:t.jsx(r,{children:"Next"}),children:R.map((a,e)=>t.jsx(o,{index:e,children:t.jsx(c,{index:e,label:a.label,description:a.description})},e))})},play:async({canvas:n,step:a})=>{await a("All steps visible",async()=>{for(const e of R)await s(n.getByText(e.label)).toBeInTheDocument()}),await a("Navigate through steps via Next button",async()=>{const e=n.getByRole("button",{name:/next/i});await s(e).toBeInTheDocument(),await l.click(e);const i=n.getByText("Select market");await s(i.closest('[aria-current="step"]')).not.toBeNull()})}},C=[{label:"Project details",description:"Configure the basic project settings"},{label:"Select market",description:"Choose the target market for deployment"},{label:"Design policy",description:"Define the design constraints and rules"}],v={parameters:{layout:"padded"},render:function(){return t.jsx(d,{count:C.length,orientation:"horizontal",actions:t.jsx(r,{children:"Next"}),children:C.map((a,e)=>t.jsx(o,{index:e,children:t.jsx(c,{index:e,label:a.label,description:a.description})},e))})},play:async({canvas:n,step:a})=>{await a("All steps visible",async()=>{for(const e of C)await s(n.getByText(e.label)).toBeInTheDocument()}),await a("Navigate all steps to completion",async()=>{const e=n.getByRole("button",{name:/next/i});await l.click(e),await l.click(e),await l.click(e)})}},I=[{label:"Project details"},{label:"Select market"},{label:"Design policy"}],D={parameters:{layout:"padded"},render:function(){return t.jsx(d,{count:I.length,orientation:"horizontal",actions:t.jsx(r,{children:"Next"}),children:I.map((a,e)=>t.jsx(o,{index:e,children:t.jsx(c,{index:e,label:a.label})},e))})},play:async({canvas:n,step:a})=>{await a("All steps visible",async()=>{for(const e of I)await s(n.getByText(e.label)).toBeInTheDocument()}),await a("Navigate all steps to completion",async()=>{const e=n.getByRole("button",{name:/next/i});await l.click(e),await l.click(e),await l.click(e)})}},b=[{label:"Upload files",description:"Drag and drop or browse to upload",icon:"upload"},{label:"Configure settings",description:t.jsxs("span",{children:["Adjust ",t.jsx("strong",{children:"network parameters"})," for deployment"]}),icon:"settings"},{label:"Deploy",description:"Review and launch the deployment",icon:"rocket_launch"}],f={parameters:{layout:"padded"},render:function(){const[a,e]=k.useState(0);return t.jsx(d,{count:b.length,orientation:"horizontal",activeStep:a,onStepChange:({step:i})=>e(i),actions:t.jsx(r,{variant:"ghost",children:a===b.length-1?"Finish":"Continue"}),children:b.map((i,x)=>t.jsx(o,{index:x,slots:{indicator:t.jsx(E,{icon:i.icon,size:"small"})},children:t.jsx(c,{index:x,label:i.label,description:i.description})},x))})},play:async({canvas:n,step:a})=>{await a("All custom steps visible",async()=>{for(const e of b)await s(n.getByText(e.label)).toBeInTheDocument()}),await a("Custom icons rendered",async()=>{await s(n.getByText("upload")).toBeInTheDocument(),await s(n.getByText("settings")).toBeInTheDocument(),await s(n.getByText("rocket_launch")).toBeInTheDocument()}),await a("Navigate with custom button",async()=>{const e=n.getByRole("button",{name:/continue/i});await s(e).toBeInTheDocument(),await l.click(e);const i=n.getByText("Configure settings");await s(i.closest('[aria-current="step"]')).not.toBeNull()}),await a("Rich description rendered",async()=>{const e=n.getByText("network parameters");await s(e.tagName).toBe("STRONG")})}},N={render:function(){const[a,e]=k.useState(0);return t.jsx("div",{style:{width:350},children:t.jsxs(d,{count:3,activeStep:a,onStepChange:({step:i})=>e(i),children:[t.jsx(o,{index:0,children:t.jsx(c,{index:0,label:"Project details",description:"Enter project name and basic configuration",actions:t.jsx(r,{children:"Next"})})}),t.jsx(o,{index:1,className:a===1?g.approveStep:void 0,slots:{indicator:t.jsx(E,{icon:"monitor_heart",size:"small"})},slotProps:{indicator:{className:a===1?g.approveIcon:void 0}},children:t.jsx(c,{index:1,label:t.jsx("span",{className:a===1?g.approveTitle:void 0,children:"Verify health"}),description:"Confirm all services report healthy status",actions:t.jsx(r,{className:a===1?g.approveButton:void 0,children:"Approve"})})}),t.jsx(o,{index:2,children:t.jsx(c,{index:2,label:"Design policy",description:"Define the design constraints and rules",actions:t.jsx(r,{children:"Finish"})})})]})})},play:async({canvas:n,step:a})=>{await a("All steps visible",async()=>{await s(n.getByText("Project details")).toBeInTheDocument(),await s(n.getByText("Verify health")).toBeInTheDocument(),await s(n.getByText("Design policy")).toBeInTheDocument()}),await a("Default steps show numbers, custom step shows icon",async()=>{await s(n.getByText("1")).toBeInTheDocument(),await s(n.getByText("monitor_heart")).toBeInTheDocument(),await s(n.getByText("3")).toBeInTheDocument()}),await a("Navigate to custom step and verify approve action",async()=>{const e=n.getByRole("button",{name:/next/i});await l.click(e),await s(n.getByRole("button",{name:/approve/i})).toBeInTheDocument()})}},T={render:function(){return t.jsx("div",{style:{width:350},children:t.jsxs(d,{count:4,children:[t.jsx(o,{index:0,children:t.jsx(c,{index:0,label:"Basic information",description:"Enter your project details",actions:t.jsx(r,{children:"Next"})})}),t.jsx(o,{index:1,disabled:!0,children:t.jsx(c,{index:1,label:"Advanced settings",description:"Configure advanced options (requires approval)",actions:t.jsx(r,{children:"Next"})})}),t.jsx(o,{index:2,children:t.jsx(c,{index:2,label:"Review",description:"Review your configuration",actions:t.jsx(r,{children:"Next"})})}),t.jsx(o,{index:3,disabled:!0,children:t.jsx(c,{index:3,label:"Deploy",description:"Deploy to production (requires elevated permissions)",actions:t.jsx(r,{children:"Finish"})})})]})})},play:async({canvas:n,step:a})=>{await a("Disabled steps have data-disabled attribute",async()=>{const e=n.getByText("Advanced settings").closest("[data-disabled]");await s(e).not.toBeNull();const i=n.getByText("Deploy").closest("[data-disabled]");await s(i).not.toBeNull()}),await a("Enabled steps do not have data-disabled",async()=>{const e=n.getByText("Basic information").closest("[data-disabled]");await s(e).toBeNull();const i=n.getByText("Review").closest("[data-disabled]");await s(i).toBeNull()}),await a("Disabled completed step is not clickable",async()=>{const e=n.getByRole("button",{name:/next/i});await l.click(e),await l.click(n.getByRole("button",{name:/next/i}));const i=n.getByText("Advanced settings");await s(i.closest("button")).toBeNull()})}},j={render:function(){return t.jsx("div",{style:{width:350},children:t.jsxs(d,{count:4,children:[t.jsx(o,{index:0,children:t.jsx(c,{index:0,label:"Configuration",description:"Enter deployment configuration",actions:t.jsx(r,{children:"Next"})})}),t.jsx(o,{index:1,variant:"error",children:t.jsx(c,{index:1,label:"Validation",description:"Configuration validation failed",actions:t.jsx(r,{children:"Retry"})})}),t.jsx(o,{index:2,children:t.jsx(c,{index:2,label:"Review",description:"Review and confirm changes",actions:t.jsx(r,{children:"Next"})})}),t.jsx(o,{index:3,children:t.jsx(c,{index:3,label:"Complete",description:"Finalize deployment",actions:t.jsx(r,{children:"Finish"})})})]})})},play:async({canvas:n,step:a})=>{await a("Error step shows close icon instead of number",async()=>{await s(n.getByText("close")).toBeInTheDocument()}),await a("Error step has data-error attribute",async()=>{const e=n.getByText("Validation").closest("[data-error]");await s(e).not.toBeNull()}),await a("Non-error steps do not have data-error",async()=>{const e=n.getByText("Configuration").closest("[data-error]");await s(e).toBeNull()}),await a("Navigate to error step and verify current state",async()=>{const e=n.getByRole("button",{name:/next/i});await l.click(e);const i=n.getByText("Validation");await s(i.closest("[data-current]")).not.toBeNull(),await s(i.closest("[data-error]")).not.toBeNull()})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const te=["Default","Compact","WithPanel","Horizontal","HorizontalFewSteps","HorizontalCompactFewSteps","CustomizedHorizontal","CustomizedVertical","WithDisabledSteps","WithErrorStep"];export{B as Compact,f as CustomizedHorizontal,N as CustomizedVertical,h as Default,w as Horizontal,D as HorizontalCompactFewSteps,v as HorizontalFewSteps,T as WithDisabledSteps,j as WithErrorStep,S as WithPanel,te as __namedExportsOrder,ee as default};
