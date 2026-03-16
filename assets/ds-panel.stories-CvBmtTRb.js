import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-C9uDkflI.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{n as i,t as a}from"./ds-button-DqjRqWWS.js";import{a as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./ds-stepper-Hc1a3cOr.js";var p,m,h,g,_,v,y,b;t((()=>{d(),a(),f(),p=e(n(),1),m=r(),{expect:h,userEvent:g}=__STORYBOOK_MODULE_TEST__,_={title:`Design System/Panel`,component:l,parameters:{layout:`centered`}},v={render:function({variant:e}){let[t,n]=(0,p.useState)(!0);return(0,m.jsxs)(m.Fragment,{children:[!t&&(0,m.jsx)(i,{onClick:()=>n(!0),children:`Open Panel`}),(0,m.jsxs)(l,{open:t,onOpenChange:n,variant:e,children:[(0,m.jsx)(`p`,{children:`This is a panel. It can contain any content you like, such as text, images, or other components.`}),(0,m.jsx)(`p`,{children:`It is collapsible. Hover it to see the trigger button.`}),(0,m.jsx)(i,{size:`small`,children:`Primary Action`})]})]})},play:async({canvas:e,step:t,args:n,initialArgs:r})=>{let i=e.getByLabelText(`Toggle panel`),a=async a=>{n.variant=a,await t(`Close Panel - ${a}`,async()=>{await g.click(i),await h(e.queryByText(/This is a panel/)).not.toBeVisible()}),await t(`Open Panel - ${a}`,async()=>{await g.click(e.getByText(`Open Panel`)),await h(e.getByText(/This is a panel/)).toBeVisible()}),n.variant=r.variant};await a(`docked`),await a(`floating`)}},y={render:function(){let[e,t]=(0,p.useState)(`docked`),[n,r]=(0,p.useState)(0),i=e===`floating`,a=()=>{t(i?`docked`:`floating`)},d=[{label:`Configure network`,description:`Set up interfaces and routing policies`},{label:`Assign resources`,description:`Allocate compute and storage for the deployment`},{label:`Review & deploy`,description:`Verify configuration and launch`}];return(0,m.jsx)(`div`,{style:{position:`relative`,width:600,height:500},children:(0,m.jsx)(l,{open:!0,variant:e,draggable:i,disablePadding:i,slotProps:{collapseButton:{onClick:a,collapsed:i}},children:(0,m.jsx)(o,{count:d.length,activeStep:n,onStepChange:({step:e})=>r(e),variant:i?`single`:void 0,floating:i,children:d.map((e,t)=>(0,m.jsx)(s,{index:t,children:(0,m.jsx)(u,{index:t,label:e.label,description:e.description,actions:(0,m.jsx)(c,{children:t===d.length-1?`Deploy`:`Next`})})},t))})})})},play:async({canvas:e,step:t})=>{let n=async()=>{await g.click(e.getByLabelText(`Toggle panel`))},r=()=>e.getByText(`Configure network`).closest(`[data-state]`),i=r().getBoundingClientRect();await t(`Docked - all steps and descriptions visible`,async()=>{await h(e.getByText(`Configure network`)).toBeVisible(),await h(e.getByText(`Assign resources`)).toBeVisible(),await h(e.getByText(`Review & deploy`)).toBeVisible(),await h(e.getByText(/Set up interfaces/)).toBeVisible()}),await t(`Collapse to floating - single step with drag handle`,async()=>{await n(),await h(e.getByText(`Configure network`)).toBeVisible(),await h(e.getByText(`drag_indicator`)).toBeVisible(),await h(e.queryByText(/Set up interfaces/)).not.toBeInTheDocument()}),await t(`Drag floating panel`,async()=>{let t=e.getByText(`drag_indicator`),n=r(),i=n.getBoundingClientRect();await g.pointer([{target:t,keys:`[MouseLeft>]`,coords:{clientX:100,clientY:100}},{coords:{clientX:200,clientY:150}},{keys:`[/MouseLeft]`}]);let a=n.getBoundingClientRect();await h(Math.round(a.left-i.left)).toBe(100),await h(Math.round(a.top-i.top)).toBe(50)}),await t(`Non-handle area does not trigger drag`,async()=>{let t=e.getByText(`Configure network`),n=r(),i=n.getBoundingClientRect();await g.pointer([{target:t,keys:`[MouseLeft>]`,coords:{clientX:0,clientY:0}},{coords:{clientX:200,clientY:200}},{keys:`[/MouseLeft]`}]);let a=n.getBoundingClientRect();await h(a.left).toBe(i.left),await h(a.top).toBe(i.top)}),await t(`Navigate steps while floating`,async()=>{await g.click(e.getByRole(`button`,{name:/next/i})),await h(e.getByText(`Assign resources`)).toBeVisible()}),await t(`Expand back to docked - full content restored`,async()=>{await n(),await h(e.getByText(`Configure network`)).toBeVisible(),await h(e.getByText(`Assign resources`)).toBeVisible(),await h(e.getByText(`Review & deploy`)).toBeVisible(),await h(e.queryByText(`drag_indicator`)).not.toBeInTheDocument()}),await t(`Drag position resets after expanding`,async()=>{let e=r().getBoundingClientRect();await h(e.left).toBe(i.left),await h(e.top).toBe(i.top)})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render({
    variant
  }) {
    const [open, setOpen] = useState(true);
    return <>
                {!open && <DsButton onClick={() => setOpen(true)}>Open Panel</DsButton>}

                <DsPanel open={open} onOpenChange={setOpen} variant={variant}>
                    <p>
                        This is a panel. It can contain any content you like, such as text, images, or other components.
                    </p>

                    <p>It is collapsible. Hover it to see the trigger button.</p>

                    <DsButton size="small">Primary Action</DsButton>
                </DsPanel>
            </>;
  },
  play: async ({
    canvas,
    step,
    args,
    initialArgs
  }) => {
    const panelTrigger = canvas.getByLabelText('Toggle panel');
    const testVariant = async (variant: DsPanelVariant) => {
      args.variant = variant;
      await step(\`Close Panel - \${variant}\`, async () => {
        await userEvent.click(panelTrigger);
        await expect(canvas.queryByText(/This is a panel/)).not.toBeVisible();
      });
      await step(\`Open Panel - \${variant}\`, async () => {
        await userEvent.click(canvas.getByText('Open Panel'));
        await expect(canvas.getByText(/This is a panel/)).toBeVisible();
      });

      // Reset state.
      args.variant = initialArgs.variant;
    };
    await testVariant('docked');
    await testVariant('floating');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [panelVariant, setPanelVariant] = useState<DsPanelVariant>('docked');
    const [activeStep, setActiveStep] = useState(0);
    const isFloating = panelVariant === 'floating';
    const togglePanelVariant = () => {
      setPanelVariant(isFloating ? 'docked' : 'floating');
    };
    const steps = [{
      label: 'Configure network',
      description: 'Set up interfaces and routing policies'
    }, {
      label: 'Assign resources',
      description: 'Allocate compute and storage for the deployment'
    }, {
      label: 'Review & deploy',
      description: 'Verify configuration and launch'
    }];
    return <div style={{
      position: 'relative',
      width: 600,
      height: 500
    }}>
                <DsPanel open variant={panelVariant} draggable={isFloating} disablePadding={isFloating} slotProps={{
        collapseButton: {
          onClick: togglePanelVariant,
          collapsed: isFloating
        }
      }}>
                    <DsStepper count={steps.length} activeStep={activeStep} onStepChange={({
          step
        }) => setActiveStep(step)} variant={isFloating ? 'single' : undefined} floating={isFloating}>
                        {steps.map((s, index) => <DsStep index={index} key={index}>
                                <DsStepContent index={index} label={s.label} description={s.description} actions={<DsNextStepButton>{index === steps.length - 1 ? 'Deploy' : 'Next'}</DsNextStepButton>} />
                            </DsStep>)}
                    </DsStepper>
                </DsPanel>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const togglePanel = async () => {
      await userEvent.click(canvas.getByLabelText('Toggle panel'));
    };
    const getPanel = () => canvas.getByText('Configure network').closest('[data-state]') as HTMLElement;
    const dockedRect = getPanel().getBoundingClientRect();
    await step('Docked - all steps and descriptions visible', async () => {
      await expect(canvas.getByText('Configure network')).toBeVisible();
      await expect(canvas.getByText('Assign resources')).toBeVisible();
      await expect(canvas.getByText('Review & deploy')).toBeVisible();
      await expect(canvas.getByText(/Set up interfaces/)).toBeVisible();
    });
    await step('Collapse to floating - single step with drag handle', async () => {
      await togglePanel();
      await expect(canvas.getByText('Configure network')).toBeVisible();
      await expect(canvas.getByText('drag_indicator')).toBeVisible();
      await expect(canvas.queryByText(/Set up interfaces/)).not.toBeInTheDocument();
    });
    await step('Drag floating panel', async () => {
      const handle = canvas.getByText('drag_indicator');
      const panel = getPanel();
      const rectBefore = panel.getBoundingClientRect();
      await userEvent.pointer([{
        target: handle,
        keys: '[MouseLeft>]',
        coords: {
          clientX: 100,
          clientY: 100
        }
      }, {
        coords: {
          clientX: 200,
          clientY: 150
        }
      }, {
        keys: '[/MouseLeft]'
      }]);
      const rectAfter = panel.getBoundingClientRect();
      await expect(Math.round(rectAfter.left - rectBefore.left)).toBe(100);
      await expect(Math.round(rectAfter.top - rectBefore.top)).toBe(50);
    });
    await step('Non-handle area does not trigger drag', async () => {
      const label = canvas.getByText('Configure network');
      const panel = getPanel();
      const rectBefore = panel.getBoundingClientRect();
      await userEvent.pointer([{
        target: label,
        keys: '[MouseLeft>]',
        coords: {
          clientX: 0,
          clientY: 0
        }
      }, {
        coords: {
          clientX: 200,
          clientY: 200
        }
      }, {
        keys: '[/MouseLeft]'
      }]);
      const rectAfter = panel.getBoundingClientRect();
      await expect(rectAfter.left).toBe(rectBefore.left);
      await expect(rectAfter.top).toBe(rectBefore.top);
    });
    await step('Navigate steps while floating', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: /next/i
      }));
      await expect(canvas.getByText('Assign resources')).toBeVisible();
    });
    await step('Expand back to docked - full content restored', async () => {
      await togglePanel();
      await expect(canvas.getByText('Configure network')).toBeVisible();
      await expect(canvas.getByText('Assign resources')).toBeVisible();
      await expect(canvas.getByText('Review & deploy')).toBeVisible();
      await expect(canvas.queryByText('drag_indicator')).not.toBeInTheDocument();
    });
    await step('Drag position resets after expanding', async () => {
      const resetRect = getPanel().getBoundingClientRect();
      await expect(resetRect.left).toBe(dockedRect.left);
      await expect(resetRect.top).toBe(dockedRect.top);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Draggable`]}))();export{v as Default,y as Draggable,b as __namedExportsOrder,_ as default};