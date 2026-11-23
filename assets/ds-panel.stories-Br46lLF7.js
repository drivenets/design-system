import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n}from"./iframe-BJBM3kaA.js";import{n as r,t as i}from"./ds-typography-CpFc16Nt.js";import{n as a,t as o}from"./ds-button-B_OKO0D8.js";import{n as s,t as c}from"./ds-panel-C78m3NFo.js";import{c as l,i as u,n as d,o as f,t as p}from"./ds-stepper-DyosMXbb.js";var m,h;function g(){return(g=e((()=>{m=`_draggableCanvas_t1fxc_1`,h={draggableCanvas:m}})))()}var _,v,y,b,x,S,C;function w(){return(w=e((()=>{_=t(),s(),o(),p(),i(),g(),v=n(),y={title:`Components/Panel`,component:c,parameters:{layout:`centered`}},b={parameters:{docs:{source:{type:`code`}}},render:function({variant:e}){let[t,n]=(0,_.useState)(!0);return(0,v.jsxs)(v.Fragment,{children:[!t&&(0,v.jsx)(a,{onClick:()=>n(!0),children:`Open Panel`}),(0,v.jsxs)(c,{open:t,onOpenChange:n,variant:e,children:[(0,v.jsx)(r,{variant:`body-md-reg`,children:`Panels hold any content you like.`}),(0,v.jsx)(r,{variant:`body-md-reg`,children:`Hover to reveal the collapse trigger.`}),(0,v.jsx)(a,{size:`small`,children:`Primary Action`})]})]})}},x={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,_.useState)(!0);return(0,v.jsxs)(v.Fragment,{children:[!e&&(0,v.jsx)(a,{onClick:()=>t(!0),children:`Open Panel`}),(0,v.jsxs)(c,{open:e,onOpenChange:t,width:{lg:480,md:240},children:[(0,v.jsx)(r,{variant:`body-md-reg`,children:`This panel uses a responsive width.`}),(0,v.jsx)(r,{variant:`body-md-reg`,children:`Large screens: 480px. Medium screens: 240px.`}),(0,v.jsx)(a,{size:`small`,children:`Primary Action`})]})]})}},S={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,_.useState)(`docked`),[n,r]=(0,_.useState)(0),i=e===`floating`,a=()=>{t(i?`docked`:`floating`)},o=[{label:`Configure network`,description:`Set up interfaces and routing policies`},{label:`Assign resources`,description:`Allocate compute and storage for the deployment`},{label:`Review & deploy`,description:`Verify configuration and launch`}];return(0,v.jsx)(`div`,{className:h.draggableCanvas,children:(0,v.jsx)(c,{open:!0,variant:e,draggable:i,disablePadding:i,slotProps:{collapseButton:{onClick:a,collapsed:i}},children:(0,v.jsx)(l,{count:o.length,activeStep:n,onStepChange:({step:e})=>r(e),variant:i?`single`:void 0,floating:i,children:o.map((e,t)=>(0,v.jsx)(f,{index:t,children:(0,v.jsx)(u,{index:t,label:e.label,description:e.description,actions:(0,v.jsx)(d,{children:t===o.length-1?`Deploy`:`Next`})})},t))})})})}},C=[`Default`,`Responsive`,`Draggable`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render({
    variant
  }) {
    const [open, setOpen] = useState(true);
    return <>
                {!open && <DsButton onClick={() => setOpen(true)}>Open Panel</DsButton>}

                <DsPanel open={open} onOpenChange={setOpen} variant={variant}>
                    <DsTypography variant="body-md-reg">Panels hold any content you like.</DsTypography>

                    <DsTypography variant="body-md-reg">Hover to reveal the collapse trigger.</DsTypography>

                    <DsButton size="small">Primary Action</DsButton>
                </DsPanel>
            </>;
  }
}`,...b.parameters?.docs?.source},description:{story:`A collapsible panel that holds arbitrary content. Hover it to reveal the
collapse trigger; collapsing hides the body behind an "Open Panel" button.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <>
                {!open && <DsButton onClick={() => setOpen(true)}>Open Panel</DsButton>}

                <DsPanel open={open} onOpenChange={setOpen} width={{
        lg: 480,
        md: 240
      }}>
                    <DsTypography variant="body-md-reg">This panel uses a responsive width.</DsTypography>
                    <DsTypography variant="body-md-reg">Large screens: 480px. Medium screens: 240px.</DsTypography>

                    <DsButton size="small">Primary Action</DsButton>
                </DsPanel>
            </>;
  }
}`,...x.parameters?.docs?.source},description:{story:"The `width` prop accepts a `ResponsiveValue` so the panel can widen on large\nscreens and narrow on medium ones without extra layout code.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
    return <div className={styles.draggableCanvas}>
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
  }
}`,...S.parameters?.docs?.source},description:{story:"Toggling the collapse button switches the panel between `docked` and\n`floating`. The floating variant is draggable and drops its inner padding so a\n`DsStepper` can bleed to the edges.",...S.parameters?.docs?.description}}}})))()}w();export{b as Default,S as Draggable,x as Responsive,C as __namedExportsOrder,y as default};