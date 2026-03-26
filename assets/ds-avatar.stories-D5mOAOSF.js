import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{n,t as r}from"./ds-avatar-DSNyh73Z.js";var i,a,o,s=e((()=>{i=`_sizesContainer_1odth_1`,a=`_shapesContainer_1odth_7`,o={sizesContainer:i,shapesContainer:a}})),c,l,u,d,f,p,m,h,g,_;e((()=>{n(),s(),c=t(),{expect:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Design System/Avatar`,component:r,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`xsm`,`sm`,`regular`,`md`,`lg`,`xl`]},type:{control:`radio`,options:[`circle`,`rounded`]}}},p={args:{name:`John Doe`,size:`regular`,type:`circle`},play:async({canvasElement:e})=>{let t=d(e).getByText(`JD`);await l(t).toBeInTheDocument(),await u.hover(t),await l(await d(document.body).findByRole(`tooltip`)).toHaveTextContent(`John Doe`)}},m={args:{name:`Jane Smith`,src:`https://i.pravatar.cc/150?u=jane`,size:`regular`,type:`circle`},play:async({canvasElement:e})=>{let t=await d(e).findByRole(`img`,{name:`Jane Smith`});await l(t).toBeInTheDocument(),await l(t).toHaveAttribute(`src`,`https://i.pravatar.cc/150?u=jane`)}},h={render:e=>(0,c.jsxs)(`div`,{className:o.sizesContainer,children:[(0,c.jsx)(r,{...e,size:`xsm`,name:`Extra Small`}),(0,c.jsx)(r,{...e,size:`sm`,name:`Sam Mitchell`}),(0,c.jsx)(r,{...e,size:`regular`,name:`Rachel Evans`}),(0,c.jsx)(r,{...e,size:`md`,name:`Mike Edwards`}),(0,c.jsx)(r,{...e,size:`lg`,name:`Laura Adams`}),(0,c.jsx)(r,{...e,size:`xl`,name:`Xavier Lee`})]}),play:async({canvasElement:e})=>{let t=d(e);await l(t.getByText(`ES`)).toBeInTheDocument(),await l(t.getByText(`SM`)).toBeInTheDocument(),await l(t.getByText(`RE`)).toBeInTheDocument(),await l(t.getByText(`ME`)).toBeInTheDocument(),await l(t.getByText(`LA`)).toBeInTheDocument(),await l(t.getByText(`XL`)).toBeInTheDocument()}},g={render:e=>(0,c.jsxs)(`div`,{className:o.shapesContainer,children:[(0,c.jsx)(r,{...e,type:`circle`,name:`Chris Irving`}),(0,c.jsx)(r,{...e,type:`rounded`,name:`Rose Oliver`})]}),play:async({canvasElement:e})=>{let t=d(e);await l(t.getByText(`CI`)).toBeInTheDocument(),await l(t.getByText(`RO`)).toBeInTheDocument()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithImage`,`Sizes`,`Shapes`]}))();export{p as Default,g as Shapes,h as Sizes,m as WithImage,_ as __namedExportsOrder,f as default};