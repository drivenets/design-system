import{j as i}from"./jsx-runtime-u17CrQMm.js";import{D as w,a as f,b as T,c as h,d as b}from"./ds-step-next-button-U9POppaE.js";import{D as x}from"./ds-button-C2Y-KyTd.js";import{r as y}from"./iframe-C9N8IAqP.js";import"./index-CS9IDOLY.js";import"./index-BsaFPgnc.js";import"./index-DWLqIjAh.js";import"./index-BJb9jx-u.js";import"./index-DBJW1xXE.js";import"./index-D4xqoRYz.js";import"./ds-icon-CPcERb9y.js";import"./index-DJ3Qh3Vf.js";import"./ds-button-legacy-CyKiGxDo.js";import"./ds-button-new-D7Qn5FLR.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t,userEvent:g}=__STORYBOOK_MODULE_TEST__,M={title:"Design System/Panel",component:w,parameters:{layout:"centered"},tags:["autodocs"]},u={render:function({variant:a}){const[r,o]=y.useState(!0);return i.jsxs(i.Fragment,{children:[!r&&i.jsx(x,{onClick:()=>o(!0),children:"Open Panel"}),i.jsxs(w,{open:r,onOpenChange:o,variant:a,children:[i.jsx("p",{children:"This is a panel. It can contain any content you like, such as text, images, or other components."}),i.jsx("p",{children:"It is collapsible. Hover it to see the trigger button."}),i.jsx(x,{size:"small",children:"Primary Action"})]})]})},play:async({canvas:e,step:a,args:r,initialArgs:o})=>{const p=e.getByLabelText("Toggle panel"),n=async s=>{r.variant=s,await a(`Close Panel - ${s}`,async()=>{await g.click(p),await t(e.queryByText(/This is a panel/)).not.toBeVisible()}),await a(`Open Panel - ${s}`,async()=>{await g.click(e.getByText("Open Panel")),await t(e.getByText(/This is a panel/)).toBeVisible()}),r.variant=o.variant};await n("docked"),await n("floating")}},B={render:function(){const[a,r]=y.useState("docked"),[o,p]=y.useState(0),n=a==="floating",s=()=>{r(n?"docked":"floating")},c=[{label:"Configure network",description:"Set up interfaces and routing policies"},{label:"Assign resources",description:"Allocate compute and storage for the deployment"},{label:"Review & deploy",description:"Verify configuration and launch"}];return i.jsx("div",{style:{position:"relative",width:600,height:500},children:i.jsx(w,{open:!0,variant:a,draggable:n,disablePadding:n,slotProps:{collapseButton:{onClick:s,collapsed:n}},children:i.jsx(f,{count:c.length,activeStep:o,onStepChange:({step:l})=>p(l),variant:n?"single":void 0,floating:n,children:c.map((l,d)=>i.jsx(T,{index:d,children:i.jsx(h,{index:d,label:l.label,description:l.description,actions:i.jsx(b,{children:d===c.length-1?"Deploy":"Next"})})},d))})})})},play:async({canvas:e,step:a})=>{const r=async()=>{await g.click(e.getByLabelText("Toggle panel"))},o=()=>e.getByText("Configure network").closest("[data-state]"),p=o().getBoundingClientRect();await a("Docked - all steps and descriptions visible",async()=>{await t(e.getByText("Configure network")).toBeVisible(),await t(e.getByText("Assign resources")).toBeVisible(),await t(e.getByText("Review & deploy")).toBeVisible(),await t(e.getByText(/Set up interfaces/)).toBeVisible()}),await a("Collapse to floating - single step with drag handle",async()=>{await r(),await t(e.getByText("Configure network")).toBeVisible(),await t(e.getByText("drag_indicator")).toBeVisible(),await t(e.queryByText(/Set up interfaces/)).not.toBeInTheDocument()}),await a("Drag floating panel",async()=>{const n=e.getByText("drag_indicator"),s=o(),c=s.getBoundingClientRect();await g.pointer([{target:n,keys:"[MouseLeft>]",coords:{clientX:100,clientY:100}},{coords:{clientX:200,clientY:150}},{keys:"[/MouseLeft]"}]);const l=s.getBoundingClientRect();await t(Math.round(l.left-c.left)).toBe(100),await t(Math.round(l.top-c.top)).toBe(50)}),await a("Non-handle area does not trigger drag",async()=>{const n=e.getByText("Configure network"),s=o(),c=s.getBoundingClientRect();await g.pointer([{target:n,keys:"[MouseLeft>]",coords:{clientX:0,clientY:0}},{coords:{clientX:200,clientY:200}},{keys:"[/MouseLeft]"}]);const l=s.getBoundingClientRect();await t(l.left).toBe(c.left),await t(l.top).toBe(c.top)}),await a("Navigate steps while floating",async()=>{await g.click(e.getByRole("button",{name:/next/i})),await t(e.getByText("Assign resources")).toBeVisible()}),await a("Expand back to docked - full content restored",async()=>{await r(),await t(e.getByText("Configure network")).toBeVisible(),await t(e.getByText("Assign resources")).toBeVisible(),await t(e.getByText("Review & deploy")).toBeVisible(),await t(e.queryByText("drag_indicator")).not.toBeInTheDocument()}),await a("Drag position resets after expanding",async()=>{const n=o().getBoundingClientRect();await t(n.left).toBe(p.left),await t(n.top).toBe(p.top)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const F=["Default","Draggable"];export{u as Default,B as Draggable,F as __namedExportsOrder,M as default};
