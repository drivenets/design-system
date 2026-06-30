import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BZRqByMK.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{c as i,i as a,n as o,o as s,t as c}from"./ds-stepper-DZxxXpLZ.js";import{n as l,t as u}from"./ds-button-C45TYyUn.js";import{n as d,t as f}from"./ds-panel-7WMoe_1Q.js";var p,m,h,g,_,v,y;e((()=>{d(),u(),c(),p=t(n(),1),m=r(),h={title:`Components/Panel`,component:f,parameters:{layout:`centered`}},g={render:function({variant:e}){let[t,n]=(0,p.useState)(!0);return(0,m.jsxs)(m.Fragment,{children:[!t&&(0,m.jsx)(l,{onClick:()=>n(!0),children:`Open Panel`}),(0,m.jsxs)(f,{open:t,onOpenChange:n,variant:e,children:[(0,m.jsx)(`p`,{children:`This is a panel. It can contain any content you like, such as text, images, or other components.`}),(0,m.jsx)(`p`,{children:`It is collapsible. Hover it to see the trigger button.`}),(0,m.jsx)(l,{size:`small`,children:`Primary Action`})]})]})}},_={render:function(){let[e,t]=(0,p.useState)(!0);return(0,m.jsxs)(m.Fragment,{children:[!e&&(0,m.jsx)(l,{onClick:()=>t(!0),children:`Open Panel`}),(0,m.jsxs)(f,{open:e,onOpenChange:t,width:{lg:480,md:240},children:[(0,m.jsx)(`p`,{children:`This panel uses a responsive width.`}),(0,m.jsx)(`p`,{children:`Large screens: 480px. Medium screens: 240px.`}),(0,m.jsx)(l,{size:`small`,children:`Primary Action`})]})]})}},v={render:function(){let[e,t]=(0,p.useState)(`docked`),[n,r]=(0,p.useState)(0),c=e===`floating`,l=()=>{t(c?`docked`:`floating`)},u=[{label:`Configure network`,description:`Set up interfaces and routing policies`},{label:`Assign resources`,description:`Allocate compute and storage for the deployment`},{label:`Review & deploy`,description:`Verify configuration and launch`}];return(0,m.jsx)(`div`,{style:{position:`relative`,width:600,height:500},children:(0,m.jsx)(f,{open:!0,variant:e,draggable:c,disablePadding:c,slotProps:{collapseButton:{onClick:l,collapsed:c}},children:(0,m.jsx)(i,{count:u.length,activeStep:n,onStepChange:({step:e})=>r(e),variant:c?`single`:void 0,floating:c,children:u.map((e,t)=>(0,m.jsx)(s,{index:t,children:(0,m.jsx)(a,{index:t,label:e.label,description:e.description,actions:(0,m.jsx)(o,{children:t===u.length-1?`Deploy`:`Next`})})},t))})})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <>
                {!open && <DsButton onClick={() => setOpen(true)}>Open Panel</DsButton>}

                <DsPanel open={open} onOpenChange={setOpen} width={{
        lg: 480,
        md: 240
      }}>
                    <p>This panel uses a responsive width.</p>
                    <p>Large screens: 480px. Medium screens: 240px.</p>

                    <DsButton size="small">Primary Action</DsButton>
                </DsPanel>
            </>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Responsive`,`Draggable`]}))();export{g as Default,v as Draggable,_ as Responsive,y as __namedExportsOrder,h as default};