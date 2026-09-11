import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./iframe-sRVif9um.js";import{c as i,i as a,n as o,o as s,t as c}from"./ds-stepper-Dwr2CazE.js";import{n as l,t as u}from"./ds-typography-DdvxrxrZ.js";import{n as d,t as f}from"./ds-button-Jy2D6bXZ.js";import{n as p,t as m}from"./ds-panel-D5O8ZOWt.js";var h,g,_=t((()=>{h=`_draggableCanvas_t1fxc_1`,g={draggableCanvas:h}})),v,y,b,x,S,C,w;t((()=>{v=e(n(),1),p(),f(),c(),u(),_(),y=r(),b={title:`Components/Panel`,component:m,parameters:{layout:`centered`}},x={parameters:{docs:{source:{type:`code`}}},render:function({variant:e}){let[t,n]=(0,v.useState)(!0);return(0,y.jsxs)(y.Fragment,{children:[!t&&(0,y.jsx)(d,{onClick:()=>n(!0),children:`Open Panel`}),(0,y.jsxs)(m,{open:t,onOpenChange:n,variant:e,children:[(0,y.jsx)(l,{variant:`body-md-reg`,children:`Panels hold any content you like.`}),(0,y.jsx)(l,{variant:`body-md-reg`,children:`Hover to reveal the collapse trigger.`}),(0,y.jsx)(d,{size:`small`,children:`Primary Action`})]})]})}},S={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,v.useState)(!0);return(0,y.jsxs)(y.Fragment,{children:[!e&&(0,y.jsx)(d,{onClick:()=>t(!0),children:`Open Panel`}),(0,y.jsxs)(m,{open:e,onOpenChange:t,width:{lg:480,md:240},children:[(0,y.jsx)(l,{variant:`body-md-reg`,children:`This panel uses a responsive width.`}),(0,y.jsx)(l,{variant:`body-md-reg`,children:`Large screens: 480px. Medium screens: 240px.`}),(0,y.jsx)(d,{size:`small`,children:`Primary Action`})]})]})}},C={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,v.useState)(`docked`),[n,r]=(0,v.useState)(0),c=e===`floating`,l=()=>{t(c?`docked`:`floating`)},u=[{label:`Configure network`,description:`Set up interfaces and routing policies`},{label:`Assign resources`,description:`Allocate compute and storage for the deployment`},{label:`Review & deploy`,description:`Verify configuration and launch`}];return(0,y.jsx)(`div`,{className:g.draggableCanvas,children:(0,y.jsx)(m,{open:!0,variant:e,draggable:c,disablePadding:c,slotProps:{collapseButton:{onClick:l,collapsed:c}},children:(0,y.jsx)(i,{count:u.length,activeStep:n,onStepChange:({step:e})=>r(e),variant:c?`single`:void 0,floating:c,children:u.map((e,t)=>(0,y.jsx)(s,{index:t,children:(0,y.jsx)(a,{index:t,label:e.label,description:e.description,actions:(0,y.jsx)(o,{children:t===u.length-1?`Deploy`:`Next`})})},t))})})})}},w=[`Default`,`Responsive`,`Draggable`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`A collapsible panel that holds arbitrary content. Hover it to reveal the
collapse trigger; collapsing hides the body behind an "Open Panel" button.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"The `width` prop accepts a `ResponsiveValue` so the panel can widen on large\nscreens and narrow on medium ones without extra layout code.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Toggling the collapse button switches the panel between `docked` and\n`floating`. The floating variant is draggable and drops its inner padding so a\n`DsStepper` can bleed to the edges.",...C.parameters?.docs?.description}}}}))();export{x as Default,C as Draggable,S as Responsive,w as __namedExportsOrder,b as default};