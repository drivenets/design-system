import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./ds-avatar-B0wgprA-.js";import"./index-CrNJhdFw.js";import"./iframe-DDI3yISY.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-tooltip-BXR5hvyv.js";import"./index-Do6PxQVK.js";import"./index-7XehxkZD.js";import"./index-CaQAhqJ6.js";import"./index-DMWY3f1m.js";import"./index-1Uk203GW.js";import"./index-D-qVNONF.js";import"./index-DbIp7eDO.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-CxGySIIX.js";import"./ds-typography-BYOo5D25.js";import"./index-CloTo-u5.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-BEbBS7y1.js";import"./index-G0tcEFpE.js";const h="_sizesContainer_1odth_1",u="_shapesContainer_1odth_7",l={sizesContainer:h,shapesContainer:u},{expect:a,userEvent:d,within:r}=__STORYBOOK_MODULE_TEST__,O={title:"Design System/Avatar",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xsm","sm","regular","md","lg","xl"]},type:{control:"radio",options:["circle","rounded"]}}},i={args:{name:"John Doe",size:"regular",type:"circle"},play:async({canvasElement:e})=>{const o=r(e).getByText("JD");await a(o).toBeInTheDocument(),await d.hover(o);const v=await r(document.body).findByRole("tooltip");await a(v).toHaveTextContent("John Doe")}},c={args:{name:"Jane Smith",src:"https://i.pravatar.cc/150?u=jane",size:"regular",type:"circle"},play:async({canvasElement:e})=>{const o=await r(e).findByRole("img",{name:"Jane Smith"});await a(o).toBeInTheDocument(),await a(o).toHaveAttribute("src","https://i.pravatar.cc/150?u=jane")}},m={render:e=>n.jsxs("div",{className:l.sizesContainer,children:[n.jsx(s,{...e,size:"xsm",name:"Extra Small"}),n.jsx(s,{...e,size:"sm",name:"Sam Mitchell"}),n.jsx(s,{...e,size:"regular",name:"Rachel Evans"}),n.jsx(s,{...e,size:"md",name:"Mike Edwards"}),n.jsx(s,{...e,size:"lg",name:"Laura Adams"}),n.jsx(s,{...e,size:"xl",name:"Xavier Lee"})]}),play:async({canvasElement:e})=>{const t=r(e);await a(t.getByText("ES")).toBeInTheDocument(),await a(t.getByText("SM")).toBeInTheDocument(),await a(t.getByText("RE")).toBeInTheDocument(),await a(t.getByText("ME")).toBeInTheDocument(),await a(t.getByText("LA")).toBeInTheDocument(),await a(t.getByText("XL")).toBeInTheDocument()}},p={render:e=>n.jsxs("div",{className:l.shapesContainer,children:[n.jsx(s,{...e,type:"circle",name:"Chris Irving"}),n.jsx(s,{...e,type:"rounded",name:"Rose Oliver"})]}),play:async({canvasElement:e})=>{const t=r(e);await a(t.getByText("CI")).toBeInTheDocument(),await a(t.getByText("RO")).toBeInTheDocument()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'regular',
    type: 'circle'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByText('JD'); // Check for initials
    await expect(avatar).toBeInTheDocument();

    // Hover to check tooltip
    await userEvent.hover(avatar);
    const tooltip = await within(document.body).findByRole('tooltip');
    await expect(tooltip).toHaveTextContent('John Doe');
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Smith',
    src: 'https://i.pravatar.cc/150?u=jane',
    size: 'regular',
    type: 'circle'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const image = await canvas.findByRole('img', {
      name: 'Jane Smith'
    });
    await expect(image).toBeInTheDocument();
    await expect(image).toHaveAttribute('src', 'https://i.pravatar.cc/150?u=jane');
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className={styles.sizesContainer}>
            <DsAvatar {...args} size="xsm" name="Extra Small" />
            <DsAvatar {...args} size="sm" name="Sam Mitchell" />
            <DsAvatar {...args} size="regular" name="Rachel Evans" />
            <DsAvatar {...args} size="md" name="Mike Edwards" />
            <DsAvatar {...args} size="lg" name="Laura Adams" />
            <DsAvatar {...args} size="xl" name="Xavier Lee" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Check all sizes are rendered
    await expect(canvas.getByText('ES')).toBeInTheDocument();
    await expect(canvas.getByText('SM')).toBeInTheDocument();
    await expect(canvas.getByText('RE')).toBeInTheDocument();
    await expect(canvas.getByText('ME')).toBeInTheDocument();
    await expect(canvas.getByText('LA')).toBeInTheDocument();
    await expect(canvas.getByText('XL')).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className={styles.shapesContainer}>
            <DsAvatar {...args} type="circle" name="Chris Irving" />
            <DsAvatar {...args} type="rounded" name="Rose Oliver" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Check both shapes are rendered
    await expect(canvas.getByText('CI')).toBeInTheDocument();
    await expect(canvas.getByText('RO')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};const k=["Default","WithImage","Sizes","Shapes"];export{i as Default,p as Shapes,m as Sizes,c as WithImage,k as __namedExportsOrder,O as default};
