import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./ds-avatar-LO9fBun_.js";import"./index-h_0AxY3V.js";import"./iframe-DDCuL2kn.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-tooltip-C__YZZCY.js";import"./index-DjHbR-TK.js";import"./index-12BXFlkP.js";import"./index-6gYDP_Tj.js";import"./index-DEPaCNYk.js";import"./index-8LP_0-CK.js";import"./index-CD6YrOj8.js";import"./index-BNaJJWDk.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-D0MSXd1_.js";import"./ds-typography-DQSprpBC.js";import"./index-BGxBTfmQ.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-CNbZwcvx.js";import"./create-anatomy-CWlJjoFg.js";import"./mutation-observer-Cu1ou0At.js";import"./raf-CC9hSMXO.js";const h="_sizesContainer_1odth_1",u="_shapesContainer_1odth_7",l={sizesContainer:h,shapesContainer:u},{expect:a,userEvent:d,within:o}=__STORYBOOK_MODULE_TEST__,b={title:"Design System/Avatar",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["xsm","sm","regular","md","lg","xl"]},type:{control:"radio",options:["circle","rounded"]}}},i={args:{name:"John Doe",size:"regular",type:"circle"},play:async({canvasElement:e})=>{const r=o(e).getByText("JD");await a(r).toBeInTheDocument(),await d.hover(r);const v=await o(document.body).findByRole("tooltip");await a(v).toHaveTextContent("John Doe")}},c={args:{name:"Jane Smith",src:"https://i.pravatar.cc/150?u=jane",size:"regular",type:"circle"},play:async({canvasElement:e})=>{const r=await o(e).findByRole("img",{name:"Jane Smith"});await a(r).toBeInTheDocument(),await a(r).toHaveAttribute("src","https://i.pravatar.cc/150?u=jane")}},m={render:e=>n.jsxs("div",{className:l.sizesContainer,children:[n.jsx(s,{...e,size:"xsm",name:"Extra Small"}),n.jsx(s,{...e,size:"sm",name:"Sam Mitchell"}),n.jsx(s,{...e,size:"regular",name:"Rachel Evans"}),n.jsx(s,{...e,size:"md",name:"Mike Edwards"}),n.jsx(s,{...e,size:"lg",name:"Laura Adams"}),n.jsx(s,{...e,size:"xl",name:"Xavier Lee"})]}),play:async({canvasElement:e})=>{const t=o(e);await a(t.getByText("ES")).toBeInTheDocument(),await a(t.getByText("SM")).toBeInTheDocument(),await a(t.getByText("RE")).toBeInTheDocument(),await a(t.getByText("ME")).toBeInTheDocument(),await a(t.getByText("LA")).toBeInTheDocument(),await a(t.getByText("XL")).toBeInTheDocument()}},p={render:e=>n.jsxs("div",{className:l.shapesContainer,children:[n.jsx(s,{...e,type:"circle",name:"Chris Irving"}),n.jsx(s,{...e,type:"rounded",name:"Rose Oliver"})]}),play:async({canvasElement:e})=>{const t=o(e);await a(t.getByText("CI")).toBeInTheDocument(),await a(t.getByText("RO")).toBeInTheDocument()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const H=["Default","WithImage","Sizes","Shapes"];export{i as Default,p as Shapes,m as Sizes,c as WithImage,H as __namedExportsOrder,b as default};
