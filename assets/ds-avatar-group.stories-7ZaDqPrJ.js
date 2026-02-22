import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./ds-avatar-group-CMyn8Xgo.js";import"./index-CMjPrJCW.js";import"./iframe-foGZe_Iu.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-avatar-C54q64_o.js";import"./ds-tooltip-D0oEWv2E.js";import"./index-CMKhTBOs.js";import"./index-CaLCoC7s.js";import"./index-CptSJxGb.js";import"./index-DetwsqN6.js";import"./index-CU1pRg2l.js";import"./index-DeQ-Flqk.js";import"./index-p4cz4yFz.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-CA2P778B.js";import"./ds-typography-DkXTvhMW.js";import"./index-DLoHK7I_.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-D3iUicfk.js";import"./index-YmNYY-wR.js";const v="_variantsContainer_eijoh_1",m={variantsContainer:v},{expect:t,userEvent:d,within:p}=__STORYBOOK_MODULE_TEST__,O={title:"Design System/Avatar Group",component:o,parameters:{layout:"centered"},tags:["autodocs"]},s=[{name:"Alice Freeman",src:"https://i.pravatar.cc/150?u=alice"},{name:"Bob Smith",src:"https://i.pravatar.cc/150?u=bob"},{name:"Charlie Davis",src:"https://i.pravatar.cc/150?u=charlie"},{name:"Diana Prince",src:"https://i.pravatar.cc/150?u=diana"},{name:"Edward Norton",src:"https://i.pravatar.cc/150?u=edward"},{name:"Fiona Gallagher",src:"https://i.pravatar.cc/150?u=fiona"},{name:"George Miller",src:"https://i.pravatar.cc/150?u=george"},{name:"Hannah Abbott",src:"https://i.pravatar.cc/150?u=hannah"}],n={args:{avatars:s},play:async({canvasElement:i})=>{const e=p(i).getByText("+3");await t(e).toBeInTheDocument(),await d.hover(e);const c=await p(document.body).findByRole("tooltip");await t(c).toHaveTextContent("Fiona Gallagher"),await t(c).toHaveTextContent("George Miller"),await t(c).toHaveTextContent("Hannah Abbott")}},r={render:()=>a.jsxs("div",{className:m.variantsContainer,children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Default Group (max 5)"}),a.jsx(o,{avatars:s})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Small Rounded Group"}),a.jsx(o,{avatars:s,size:"sm",type:"rounded"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Large Group (max 3)"}),a.jsx(o,{avatars:s,size:"lg",max:3})]})]}),play:async({canvasElement:i})=>{const e=p(i).getAllByText(/^\+\d+$/);await t(e.length).toBeGreaterThan(0)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Check that overflow indicator is present (8 total - 5 max = +3)
    const overflowIndicator = canvas.getByText('+3');
    await expect(overflowIndicator).toBeInTheDocument();

    // Hover over the +3 to check tooltip with names
    await userEvent.hover(overflowIndicator);

    // Check that hidden avatar names appear in tooltip (tooltips render in document.body)
    const tooltip = await within(document.body).findByRole('tooltip');
    await expect(tooltip).toHaveTextContent('Fiona Gallagher');
    await expect(tooltip).toHaveTextContent('George Miller');
    await expect(tooltip).toHaveTextContent('Hannah Abbott');
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.variantsContainer}>
            <div>
                <h3>Default Group (max 5)</h3>
                <DsAvatarGroup avatars={sampleAvatars} />
            </div>
            <div>
                <h3>Small Rounded Group</h3>
                <DsAvatarGroup avatars={sampleAvatars} size="sm" type="rounded" />
            </div>
            <div>
                <h3>Large Group (max 3)</h3>
                <DsAvatarGroup avatars={sampleAvatars} size="lg" max={3} />
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Check that overflow indicators are present
    const overflowIndicators = canvas.getAllByText(/^\\+\\d+$/);
    await expect(overflowIndicators.length).toBeGreaterThan(0);
  }
}`,...r.parameters?.docs?.source}}};const k=["Default","Variants"];export{n as Default,r as Variants,k as __namedExportsOrder,O as default};
