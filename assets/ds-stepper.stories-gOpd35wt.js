import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-icon-BRZFUTMz.js";import{n as o,t as s}from"./ds-panel-B5mZpglQ.js";import{c,i as l,n as u,o as d,t as f}from"./ds-stepper-D7jEjJqK.js";var p,m,h,g,_,v,y,b=t((()=>{p=`_stepperDemo_mgd72_1`,m=`_stepperDemoWide_mgd72_5`,h=`_approveStep_mgd72_9`,g=`_approveButton_mgd72_13`,_=`_approveTitle_mgd72_18`,v=`_approveIcon_mgd72_22`,y={stepperDemo:p,stepperDemoWide:m,approveStep:h,approveButton:g,approveTitle:_,approveIcon:v}})),x,S,C,w,T,E,D,O,k,A,j,M,N,P;t((()=>{x=e(n(),1),f(),o(),a(),b(),S=r(),C={title:`Components/Stepper`,component:c,parameters:{layout:`centered`},argTypes:{className:{table:{disable:!0}}}},w={render:()=>{let e=[{label:`Project details`,description:`Enter project name and basic configuration`},{label:`Select market`,description:`Choose the target market for deployment`},{label:`Design policy`,description:`Define the design constraints and rules`}];return(0,S.jsx)(`div`,{className:y.stepperDemo,children:(0,S.jsx)(c,{count:e.length,children:e.map((t,n)=>(0,S.jsx)(d,{index:n,children:(0,S.jsx)(l,{index:n,label:t.label,description:t.description,actions:(0,S.jsx)(u,{children:n===e.length-1?`Finish`:`Next`})})},n))})})}},T={render:()=>{let e=[{label:`Project details`},{label:`Select market`},{label:`Design policy`}];return(0,S.jsx)(`div`,{className:y.stepperDemo,children:(0,S.jsx)(c,{count:e.length,children:e.map((t,n)=>(0,S.jsx)(d,{index:n,children:(0,S.jsx)(l,{index:n,label:t.label,actions:(0,S.jsx)(u,{children:n===e.length-1?`Finish`:`Next`})})},n))})})}},E={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(`docked`),i=[{label:`Project details`,description:`Enter project name and basic configuration`},{label:`Select market`,description:`Choose the target market for deployment`},{label:`Design policy`,description:`Define the design constraints and rules`}],a=n===`floating`;return(0,S.jsx)(s,{open:!0,variant:n,draggable:a,disablePadding:a,slotProps:{collapseButton:{onClick:()=>{r(a?`docked`:`floating`)},collapsed:a}},children:(0,S.jsx)(c,{count:i.length,activeStep:e,onStepChange:({step:e})=>t(e),variant:a?`single`:void 0,floating:a,children:i.map((e,t)=>(0,S.jsx)(d,{index:t,children:(0,S.jsx)(l,{index:t,label:e.label,description:e.description,actions:(0,S.jsx)(u,{children:t===i.length-1?`Finish`:`Next`})})},t))})})}},D={parameters:{layout:`padded`},render:()=>{let e=[{label:`Project details`,description:`Set up the project scope and requirements`},{label:`Select market`,description:`Pick a region and target audience`},{label:`Design policy`,description:`Configure branding and layout guidelines`},{label:`Review summary`,description:`Verify all settings before submission`},{label:`Final approval`,description:`Confirm and finalize the deployment plan`}];return(0,S.jsx)(c,{count:e.length,orientation:`horizontal`,actions:(0,S.jsx)(u,{children:`Next`}),children:e.map((e,t)=>(0,S.jsx)(d,{index:t,children:(0,S.jsx)(l,{index:t,label:e.label,description:e.description})},t))})}},O={parameters:{layout:`padded`},render:()=>{let e=[{label:`Project details`,description:`Configure the basic project settings`},{label:`Select market`,description:`Choose the target market for deployment`},{label:`Design policy`,description:`Define the design constraints and rules`}];return(0,S.jsx)(c,{count:e.length,orientation:`horizontal`,actions:(0,S.jsx)(u,{children:`Next`}),children:e.map((e,t)=>(0,S.jsx)(d,{index:t,children:(0,S.jsx)(l,{index:t,label:e.label,description:e.description})},t))})}},k={parameters:{layout:`padded`},render:()=>{let e=[{label:`Project details`},{label:`Select market`},{label:`Design policy`}];return(0,S.jsx)(c,{count:e.length,orientation:`horizontal`,actions:(0,S.jsx)(u,{children:`Next`}),children:e.map((e,t)=>(0,S.jsx)(d,{index:t,children:(0,S.jsx)(l,{index:t,label:e.label})},t))})}},A={parameters:{layout:`padded`,docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,x.useState)(0),n=[{label:`Upload files`,description:`Drag and drop or browse to upload`,icon:`upload`},{label:`Configure settings`,description:(0,S.jsxs)(`span`,{children:[`Adjust `,(0,S.jsx)(`strong`,{children:`network parameters`}),` for deployment`]}),icon:`settings`},{label:`Deploy`,description:`Review and launch the deployment`,icon:`rocket_launch`}];return(0,S.jsx)(c,{count:n.length,orientation:`horizontal`,activeStep:e,onStepChange:({step:e})=>t(e),actions:(0,S.jsx)(u,{variant:`ghost`,children:e===n.length-1?`Finish`:`Continue`}),children:n.map((e,t)=>(0,S.jsx)(d,{index:t,slots:{indicator:(0,S.jsx)(i,{icon:e.icon,size:`small`})},children:(0,S.jsx)(l,{index:t,label:e.label,description:e.description})},t))})}},j={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,x.useState)(0);return(0,S.jsx)(`div`,{className:y.stepperDemoWide,children:(0,S.jsxs)(c,{count:3,activeStep:e,onStepChange:({step:e})=>t(e),children:[(0,S.jsx)(d,{index:0,children:(0,S.jsx)(l,{index:0,label:`Project details`,description:`Enter project name and basic configuration`,actions:(0,S.jsx)(u,{children:`Next`})})}),(0,S.jsx)(d,{index:1,className:e===1?y.approveStep:void 0,slots:{indicator:(0,S.jsx)(i,{icon:`monitor_heart`,size:`small`})},slotProps:{indicator:{className:e===1?y.approveIcon:void 0}},children:(0,S.jsx)(l,{index:1,label:(0,S.jsx)(`span`,{className:e===1?y.approveTitle:void 0,children:`Verify health`}),description:`Confirm all services report healthy status`,actions:(0,S.jsx)(u,{className:e===1?y.approveButton:void 0,children:`Approve`})})}),(0,S.jsx)(d,{index:2,children:(0,S.jsx)(l,{index:2,label:`Design policy`,description:`Define the design constraints and rules`,actions:(0,S.jsx)(u,{children:`Finish`})})})]})})}},M={render:()=>(0,S.jsx)(`div`,{className:y.stepperDemoWide,children:(0,S.jsxs)(c,{count:4,children:[(0,S.jsx)(d,{index:0,children:(0,S.jsx)(l,{index:0,label:`Basic information`,description:`Enter your project details`,actions:(0,S.jsx)(u,{children:`Next`})})}),(0,S.jsx)(d,{index:1,disabled:!0,children:(0,S.jsx)(l,{index:1,label:`Advanced settings`,description:`Configure advanced options (requires approval)`,actions:(0,S.jsx)(u,{children:`Next`})})}),(0,S.jsx)(d,{index:2,children:(0,S.jsx)(l,{index:2,label:`Review`,description:`Review your configuration`,actions:(0,S.jsx)(u,{children:`Next`})})}),(0,S.jsx)(d,{index:3,disabled:!0,children:(0,S.jsx)(l,{index:3,label:`Deploy`,description:`Deploy to production (requires elevated permissions)`,actions:(0,S.jsx)(u,{children:`Finish`})})})]})})},N={render:()=>(0,S.jsx)(`div`,{className:y.stepperDemoWide,children:(0,S.jsxs)(c,{count:4,children:[(0,S.jsx)(d,{index:0,children:(0,S.jsx)(l,{index:0,label:`Configuration`,description:`Enter deployment configuration`,actions:(0,S.jsx)(u,{children:`Next`})})}),(0,S.jsx)(d,{index:1,variant:`error`,children:(0,S.jsx)(l,{index:1,label:`Validation`,description:`Configuration validation failed`,actions:(0,S.jsx)(u,{children:`Retry`})})}),(0,S.jsx)(d,{index:2,children:(0,S.jsx)(l,{index:2,label:`Review`,description:`Review and confirm changes`,actions:(0,S.jsx)(u,{children:`Next`})})}),(0,S.jsx)(d,{index:3,children:(0,S.jsx)(l,{index:3,label:`Complete`,description:`Finalize deployment`,actions:(0,S.jsx)(u,{children:`Finish`})})})]})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const steps = [{
      label: 'Project details',
      description: 'Enter project name and basic configuration'
    }, {
      label: 'Select market',
      description: 'Choose the target market for deployment'
    }, {
      label: 'Design policy',
      description: 'Define the design constraints and rules'
    }];
    return <div className={styles.stepperDemo}>
                <DsStepper count={steps.length}>
                    {steps.map((step, index) => <DsStep index={index} key={index}>
                            <DsStepContent index={index} label={step.label} description={step.description} actions={<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>} />
                        </DsStep>)}
                </DsStepper>
            </div>;
  }
}`,...w.parameters?.docs?.source},description:{story:`The default vertical stepper reveals a description and a Next action under the
current step. Use it for linear flows where each step needs supporting copy.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const steps = [{
      label: 'Project details'
    }, {
      label: 'Select market'
    }, {
      label: 'Design policy'
    }];
    return <div className={styles.stepperDemo}>
                <DsStepper count={steps.length}>
                    {steps.map((step, index) => <DsStep index={index} key={index}>
                            <DsStepContent index={index} label={step.label} actions={<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>} />
                        </DsStep>)}
                </DsStepper>
            </div>;
  }
}`,...T.parameters?.docs?.source},description:{story:`The compact variant hides step descriptions, showing only labels. Prefer it in
dense layouts where the flow is self-explanatory.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [activeStep, setActiveStep] = useState(0);
    const [panelVariant, setPanelVariant] = useState<DsPanelVariant>('docked');
    const steps = [{
      label: 'Project details',
      description: 'Enter project name and basic configuration'
    }, {
      label: 'Select market',
      description: 'Choose the target market for deployment'
    }, {
      label: 'Design policy',
      description: 'Define the design constraints and rules'
    }];
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
  }
}`,...E.parameters?.docs?.source},description:{story:"Embed the stepper inside a `DsPanel` and switch the panel between docked and\nfloating. The floating panel uses the `single` stepper variant so only the\ncurrent step stays visible.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const steps = [{
      label: 'Project details',
      description: 'Set up the project scope and requirements'
    }, {
      label: 'Select market',
      description: 'Pick a region and target audience'
    }, {
      label: 'Design policy',
      description: 'Configure branding and layout guidelines'
    }, {
      label: 'Review summary',
      description: 'Verify all settings before submission'
    }, {
      label: 'Final approval',
      description: 'Confirm and finalize the deployment plan'
    }];
    return <DsStepper count={steps.length} orientation="horizontal" actions={<DsNextStepButton>Next</DsNextStepButton>}>
                {steps.map((step, index) => <DsStep index={index} key={index}>
                        <DsStepContent index={index} label={step.label} description={step.description} />
                    </DsStep>)}
            </DsStepper>;
  }
}`,...D.parameters?.docs?.source},description:{story:`The horizontal orientation lays steps out left-to-right with a shared Next
action. Use it for wizards at the top of a page where vertical space is scarce.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const steps = [{
      label: 'Project details',
      description: 'Configure the basic project settings'
    }, {
      label: 'Select market',
      description: 'Choose the target market for deployment'
    }, {
      label: 'Design policy',
      description: 'Define the design constraints and rules'
    }];
    return <DsStepper count={steps.length} orientation="horizontal" actions={<DsNextStepButton>Next</DsNextStepButton>}>
                {steps.map((step, index) => <DsStep index={index} key={index}>
                        <DsStepContent index={index} label={step.label} description={step.description} />
                    </DsStep>)}
            </DsStepper>;
  }
}`,...O.parameters?.docs?.source},description:{story:`A horizontal stepper with only a few steps keeps the layout balanced without
stretching separators across the full width.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const steps = [{
      label: 'Project details'
    }, {
      label: 'Select market'
    }, {
      label: 'Design policy'
    }];
    return <DsStepper count={steps.length} orientation="horizontal" actions={<DsNextStepButton>Next</DsNextStepButton>}>
                {steps.map((step, index) => <DsStep index={index} key={index}>
                        <DsStepContent index={index} label={step.label} />
                    </DsStep>)}
            </DsStepper>;
  }
}`,...k.parameters?.docs?.source},description:{story:`Drop the descriptions in a horizontal few-step flow for a minimal, label-only
progress indicator.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [activeStep, setActiveStep] = useState(0);
    const customSteps = [{
      label: 'Upload files',
      description: 'Drag and drop or browse to upload',
      icon: 'upload' as const
    }, {
      label: 'Configure settings',
      description: <span>
                        Adjust <strong>network parameters</strong> for deployment
                    </span>,
      icon: 'settings' as const
    }, {
      label: 'Deploy',
      description: 'Review and launch the deployment',
      icon: 'rocket_launch' as const
    }];
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
  }
}`,...A.parameters?.docs?.source},description:{story:"Customize each step with a slot indicator icon and rich description content.\nDrive the active step with `activeStep` / `onStepChange` for a controlled flow.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [activeStep, setActiveStep] = useState(0);
    return <div className={styles.stepperDemoWide}>
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
  }
}`,...j.parameters?.docs?.source},description:{story:`Highlight a specific step by combining a slot indicator icon with class-based
styling on the step, indicator, label, and action once it becomes active.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.stepperDemoWide}>
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
        </div>
}`,...M.parameters?.docs?.source},description:{story:"Mark steps as `disabled` to lock them out of the flow. Disabled steps carry a\n`data-disabled` attribute and cannot be navigated to, even once completed.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.stepperDemoWide}>
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
        </div>
}`,...N.parameters?.docs?.source},description:{story:"Set a step's `variant` to `error` to surface a validation failure. The error\nstep shows a close icon instead of its number and exposes `data-error`.",...N.parameters?.docs?.description}}},P=[`Default`,`Compact`,`WithPanel`,`Horizontal`,`HorizontalFewSteps`,`HorizontalCompactFewSteps`,`CustomizedHorizontal`,`CustomizedVertical`,`WithDisabledSteps`,`WithErrorStep`]}))();export{T as Compact,A as CustomizedHorizontal,j as CustomizedVertical,w as Default,D as Horizontal,k as HorizontalCompactFewSteps,O as HorizontalFewSteps,M as WithDisabledSteps,N as WithErrorStep,E as WithPanel,P as __namedExportsOrder,C as default};