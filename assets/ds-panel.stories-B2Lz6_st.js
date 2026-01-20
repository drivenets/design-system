import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as m}from"./ds-panel-CsufJlJq.js";import{D as l}from"./ds-button-Dlo2EoAe.js";import{r as g}from"./iframe-BxLkrgq8.js";import"./index-1eube16E.js";import"./index-CpDJmPtV.js";import"./index-BNGbnpMx.js";import"./index-w4jqoFyf.js";import"./index-B7AUz7Dv.js";import"./index-D1Fjrw5D.js";import"./ds-icon-DF-WdjY4.js";import"./ds-button-legacy-NKaGBXQa.js";import"./ds-button-new-COtEFPcH.js";import"./preload-helper-PPVm8Dsz.js";const{expect:p,userEvent:c}=__STORYBOOK_MODULE_TEST__,V={title:"Design System/Panel",component:m,parameters:{layout:"centered"},tags:["autodocs"]},i={render:function({variant:a}){const[t,s]=g.useState(!0);return n.jsxs(n.Fragment,{children:[!t&&n.jsx(l,{onClick:()=>s(!0),children:"Open Panel"}),n.jsxs(m,{open:t,onOpenChange:s,variant:a,children:[n.jsx("p",{children:"This is a panel. It can contain any content you like, such as text, images, or other components."}),n.jsx("p",{children:"It is collapsible. Hover it to see the trigger button."}),n.jsx(l,{size:"small",children:"Primary Action"})]})]})},play:async({canvas:e,step:a,args:t,initialArgs:s})=>{const u=e.getByLabelText("Toggle panel"),o=async r=>{t.variant=r,await a(`Close Panel - ${r}`,async()=>{await c.click(u),await p(e.queryByText(/This is a panel/)).not.toBeVisible()}),await a(`Open Panel - ${r}`,async()=>{await c.click(e.getByText("Open Panel")),await p(e.getByText(/This is a panel/)).toBeVisible()}),t.variant=s.variant};await o("docked"),await o("floating")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const _=["Default"];export{i as Default,_ as __namedExportsOrder,V as default};
