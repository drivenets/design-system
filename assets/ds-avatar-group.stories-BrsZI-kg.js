import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./ds-avatar-group-BxQ4gjNF.js";import"./index-CyVwjvxh.js";import"./iframe-BPLrTRo-.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-avatar-CnJj9qSR.js";import"./ds-tooltip-DnwMFjKy.js";import"./index-CJ8h-r11.js";import"./index-BVhbXaiP.js";import"./index-DVPgbi3z.js";import"./index-CpCYkZY0.js";import"./index-BZja6t4K.js";import"./index-DCfeedNz.js";import"./index-CyfbOsnn.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-CWDUDJQ_.js";import"./ds-typography-CreIUUad.js";import"./index-7Tv2eG7T.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-u38BYWn2.js";import"./create-anatomy-DZWx62ik.js";import"./mutation-observer-Cu1ou0At.js";import"./raf-CC9hSMXO.js";const m="_variantsContainer_eijoh_1",v={variantsContainer:m},{expect:t,userEvent:d,within:p}=__STORYBOOK_MODULE_TEST__,z={title:"Design System/Avatar Group",component:o,parameters:{layout:"centered"},tags:["autodocs"]},s=[{name:"Alice Freeman",src:"https://i.pravatar.cc/150?u=alice"},{name:"Bob Smith",src:"https://i.pravatar.cc/150?u=bob"},{name:"Charlie Davis",src:"https://i.pravatar.cc/150?u=charlie"},{name:"Diana Prince",src:"https://i.pravatar.cc/150?u=diana"},{name:"Edward Norton",src:"https://i.pravatar.cc/150?u=edward"},{name:"Fiona Gallagher",src:"https://i.pravatar.cc/150?u=fiona"},{name:"George Miller",src:"https://i.pravatar.cc/150?u=george"},{name:"Hannah Abbott",src:"https://i.pravatar.cc/150?u=hannah"}],n={args:{avatars:s},play:async({canvasElement:i})=>{const e=p(i).getByText("+3");await t(e).toBeInTheDocument(),await d.hover(e);const c=await p(document.body).findByRole("tooltip");await t(c).toHaveTextContent("Fiona Gallagher"),await t(c).toHaveTextContent("George Miller"),await t(c).toHaveTextContent("Hannah Abbott")}},r={render:()=>a.jsxs("div",{className:v.variantsContainer,children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Default Group (max 5)"}),a.jsx(o,{avatars:s})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Small Rounded Group"}),a.jsx(o,{avatars:s,size:"sm",type:"rounded"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Large Group (max 3)"}),a.jsx(o,{avatars:s,size:"lg",max:3})]})]}),play:async({canvasElement:i})=>{const e=p(i).getAllByText(/^\+\d+$/);await t(e.length).toBeGreaterThan(0)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const F=["Default","Variants"];export{n as Default,r as Variants,F as __namedExportsOrder,z as default};
