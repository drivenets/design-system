import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./ds-avatar-group-Dvtae7a1.js";var i,a,o=e((()=>{i=`_variantsContainer_mx18t_1`,a={variantsContainer:i}})),s,c,l,u,d,f,p,m,h;e((()=>{n(),o(),s=t(),{expect:c,userEvent:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/AvatarGroup`,component:r,parameters:{layout:`centered`}},f=[{name:`Alice Freeman`,src:`https://i.pravatar.cc/150?u=alice`},{name:`Bob Smith`,src:`https://i.pravatar.cc/150?u=bob`},{name:`Charlie Davis`,src:`https://i.pravatar.cc/150?u=charlie`},{name:`Diana Prince`,src:`https://i.pravatar.cc/150?u=diana`},{name:`Edward Norton`,src:`https://i.pravatar.cc/150?u=edward`},{name:`Fiona Gallagher`,src:`https://i.pravatar.cc/150?u=fiona`},{name:`George Miller`,src:`https://i.pravatar.cc/150?u=george`},{name:`Hannah Abbott`,src:`https://i.pravatar.cc/150?u=hannah`}],p={args:{avatars:f},play:async({canvasElement:e})=>{let t=u(e).getByText(`+3`);await c(t).toBeInTheDocument(),await l.hover(t);let n=await u(document.body).findByRole(`tooltip`);await c(n).toHaveTextContent(`Fiona Gallagher`),await c(n).toHaveTextContent(`George Miller`),await c(n).toHaveTextContent(`Hannah Abbott`)}},m={render:()=>(0,s.jsxs)(`div`,{className:a.variantsContainer,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h3`,{children:`Default Group (max 5)`}),(0,s.jsx)(r,{avatars:f})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h3`,{children:`Small Rounded Group`}),(0,s.jsx)(r,{avatars:f,size:`sm`,type:`rounded`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h3`,{children:`Large Group (max 3)`}),(0,s.jsx)(r,{avatars:f,size:`lg`,max:3})]})]}),play:async({canvasElement:e})=>{await c(u(e).getAllByText(/^\+\d+$/).length).toBeGreaterThan(0)}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Variants`]}))();export{p as Default,m as Variants,h as __namedExportsOrder,d as default};