import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{t as n}from"./ds-typography-C9PmURcG.js";import{t as r}from"./ds-typography-e-63TsDe.js";import{n as i,t as a}from"./ds-vertical-tabs-ByAJLcuK.js";var o,s,c,l,u,d,f,p,m,h,g=e((()=>{o=`_storyContainer_kl7qi_1`,s=`_storyContainerShort_kl7qi_7`,c=`_storyContainerMedium_kl7qi_13`,l=`_tabItemLabel_kl7qi_19`,u=`_tabItemCount_kl7qi_27`,d=`_tabItemDot_kl7qi_33`,f=`_tabItemCountText_kl7qi_42`,p=`_interactiveFooter_kl7qi_46`,m=`_interactiveText_kl7qi_52`,h={storyContainer:o,storyContainerShort:s,storyContainerMedium:c,tabItemLabel:l,tabItemCount:u,tabItemDot:d,tabItemCountText:f,interactiveFooter:p,interactiveText:m}})),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{i(),r(),g(),_=t(),{expect:v,fn:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Design System/VerticalTabs`,component:a,parameters:{layout:`centered`,docs:{description:{component:`
DsVerticalTabs is a compound component for creating flexible vertical tab navigation, providing full accessibility support.

## Usage Pattern

\`\`\`tsx
<DsVerticalTabs value={selected} onValueChange={handleChange}>
  <DsVerticalTabs.List>
    <DsVerticalTabs.Tab value="tab1">
      <DsTypography variant="body-sm-md">Tab 1</DsTypography>
      {/* Optional: badges, icons, etc. */}
    </DsVerticalTabs.Tab>
    <DsVerticalTabs.Tab value="tab2">Tab 2</DsVerticalTabs.Tab>
  </DsVerticalTabs.List>
  <DsVerticalTabs.Content value="tab1">Content 1</DsVerticalTabs.Content>
  <DsVerticalTabs.Content value="tab2">Content 2</DsVerticalTabs.Content>
</DsVerticalTabs>
\`\`\`
                `}}},argTypes:{value:{control:`text`,description:`Currently selected tab value (controlled)`},onValueChange:{action:`valueChange`,description:`Callback when tab selection changes`},className:{control:`text`,description:`Additional CSS class names`}}},C=[{id:`status`,label:`Status`,count:2},{id:`running`,label:`Running/Completed`},{id:`category`,label:`Category`},{id:`version`,label:`Version`},{id:`lastEdited`,label:`Last edited`,count:5},{id:`lastRun`,label:`Last run`},{id:`nextRun`,label:`Next run`}],w=[{id:`status`,label:`Status`,count:2,disabled:!0},{id:`running`,label:`Running/Completed`},{id:`category`,label:`Category`},{id:`version`,label:`Version`},{id:`lastEdited`,label:`Last edited`,count:5}],T=[{id:`status`,label:`Status`,count:999},{id:`category`,label:`Category`,count:1e3},{id:`version`,label:`Version`,count:12345}],E=[{id:`1`,label:`Very Long Navigation Item Label That Might Overflow`,count:99},{id:`2`,label:`Another Really Long Label For Testing Purposes`},{id:`3`,label:`Short`,count:1}],D=({item:e})=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(n,{variant:`body-sm-md`,className:h.tabItemLabel,children:e.label}),!!e.count&&(0,_.jsxs)(`div`,{className:h.tabItemCount,children:[(0,_.jsx)(`span`,{className:h.tabItemDot}),(0,_.jsx)(n,{variant:`body-sm-reg`,className:h.tabItemCountText,children:e.count})]})]}),O={args:{onValueChange:y()},render:e=>(0,_.jsx)(`div`,{className:h.storyContainer,children:(0,_.jsxs)(a,{onValueChange:e.onValueChange,children:[(0,_.jsx)(a.List,{children:C.map(e=>(0,_.jsx)(a.Tab,{value:e.id,disabled:e.disabled,children:(0,_.jsx)(D,{item:e})},e.id))}),C.map(e=>(0,_.jsxs)(a.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})}),play:async({args:e,canvas:t})=>{let n=t.getByRole(`tab`,{name:/status/i});await b.click(n),await v(n).toHaveAttribute(`data-selected`),await v(t.getByText(/selected tab content: status/i)).toBeVisible();let r=t.getByRole(`tab`,{name:/^category$/i});await b.click(r),await v(e.onValueChange).toHaveBeenCalledWith(`category`),await v(r).toHaveAttribute(`data-selected`),await v(t.getByText(/selected tab content: category/i)).toBeVisible();let i=t.getByRole(`tab`,{name:/^version$/i});await b.click(i),await v(i).toHaveAttribute(`data-selected`),await v(t.getByText(/selected tab content: version/i)).toBeVisible(),await v(e.onValueChange).toHaveBeenCalledWith(`version`)}},k={args:{onValueChange:y()},render:e=>(0,_.jsx)(`div`,{className:h.storyContainer,children:(0,_.jsxs)(a,{onValueChange:e.onValueChange,children:[(0,_.jsx)(a.List,{children:w.map(e=>(0,_.jsx)(a.Tab,{value:e.id,disabled:e.disabled,children:(0,_.jsx)(D,{item:e})},e.id))}),w.map(e=>(0,_.jsxs)(a.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})}),play:async({args:e,canvasElement:t})=>{let n=x(t),r=n.getByRole(`tab`,{name:/status/i});await v(r).toBeDisabled(),await b.click(r),await v(e.onValueChange).not.toHaveBeenCalled();let i=n.getByRole(`tab`,{name:/running\/completed/i});await b.click(i),await v(e.onValueChange).toHaveBeenCalledWith(`running`),await v(i).toHaveAttribute(`data-selected`),await v(n.getByText(/selected tab content: running/i)).toBeVisible(),await v(r).toBeDisabled()}},A={args:{onValueChange:y()},render:e=>(0,_.jsx)(`div`,{className:h.storyContainerShort,children:(0,_.jsxs)(a,{onValueChange:e.onValueChange,children:[(0,_.jsx)(a.List,{children:E.map(e=>(0,_.jsx)(a.Tab,{value:e.id,disabled:e.disabled,children:(0,_.jsx)(D,{item:e})},e.id))}),E.map(e=>(0,_.jsxs)(a.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})}),play:async({args:e,canvasElement:t})=>{let n=x(t),r=n.getByRole(`tab`,{name:/very long navigation item label that might overflow/i}),i=n.getByRole(`tab`,{name:/another really long label for testing purposes/i}),a=n.getByRole(`tab`,{name:/^short/i});await v(r).toBeVisible(),await v(i).toBeVisible(),await v(a).toBeVisible(),await b.click(i),await v(i).toHaveAttribute(`data-selected`),await v(n.getByText(/selected tab content: 2/i)).toBeVisible(),await v(e.onValueChange).toHaveBeenCalledWith(`2`),await b.click(a),await v(a).toHaveAttribute(`data-selected`),await v(n.getByText(/selected tab content: 3/i)).toBeVisible(),await v(e.onValueChange).toHaveBeenCalledWith(`3`)}},j={args:{onValueChange:y()},render:e=>(0,_.jsx)(`div`,{className:h.storyContainerShort,children:(0,_.jsxs)(a,{onValueChange:e.onValueChange,children:[(0,_.jsx)(a.List,{children:T.map(e=>(0,_.jsx)(a.Tab,{value:e.id,disabled:e.disabled,children:(0,_.jsx)(D,{item:e})},e.id))}),T.map(e=>(0,_.jsxs)(a.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})}),play:async({args:e,canvasElement:t})=>{let n=x(t);await v(n.getByText(`999`)).toBeVisible(),await v(n.getByText(`1000`)).toBeVisible(),await v(n.getByText(`12345`)).toBeVisible();let r=n.getByRole(`tab`,{name:/status/i}),i=n.getByRole(`tab`,{name:/category/i}),a=n.getByRole(`tab`,{name:/version/i});await v(r).toBeVisible(),await v(i).toBeVisible(),await v(a).toBeVisible(),await b.click(i),await v(i).toHaveAttribute(`data-selected`),await v(n.getByText(/selected tab content: category/i)).toBeVisible(),await v(e.onValueChange).toHaveBeenCalledWith(`category`),await b.click(a),await v(a).toHaveAttribute(`data-selected`),await v(n.getByText(/selected tab content: version/i)).toBeVisible(),await v(e.onValueChange).toHaveBeenCalledWith(`version`),await v(n.getByText(`999`)).toBeVisible(),await v(n.getByText(`1000`)).toBeVisible(),await v(n.getByText(`12345`)).toBeVisible()}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => <div className={styles.storyContainer}>
            <DsVerticalTabs onValueChange={args.onValueChange}>
                <DsVerticalTabs.List>
                    {sampleItems.map(item => <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
                            <TabLabel item={item} />
                        </DsVerticalTabs.Tab>)}
                </DsVerticalTabs.List>
                {sampleItems.map(item => <DsVerticalTabs.Content key={item.id} value={item.id}>
                        Selected tab content: {item.id}
                    </DsVerticalTabs.Content>)}
            </DsVerticalTabs>
        </div>,
  play: async ({
    args,
    canvas
  }) => {
    const firstTab = canvas.getByRole('tab', {
      name: /status/i
    });
    await userEvent.click(firstTab);
    await expect(firstTab).toHaveAttribute('data-selected');
    await expect(canvas.getByText(/selected tab content: status/i)).toBeVisible();
    const categoryTab = canvas.getByRole('tab', {
      name: /^category$/i
    });
    await userEvent.click(categoryTab);
    await expect(args.onValueChange).toHaveBeenCalledWith('category');
    await expect(categoryTab).toHaveAttribute('data-selected');
    await expect(canvas.getByText(/selected tab content: category/i)).toBeVisible();
    const versionTab = canvas.getByRole('tab', {
      name: /^version$/i
    });
    await userEvent.click(versionTab);
    await expect(versionTab).toHaveAttribute('data-selected');
    await expect(canvas.getByText(/selected tab content: version/i)).toBeVisible();
    await expect(args.onValueChange).toHaveBeenCalledWith('version');
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => <div className={styles.storyContainer}>
            <DsVerticalTabs onValueChange={args.onValueChange}>
                <DsVerticalTabs.List>
                    {sampleItemsWithDisabled.map(item => <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
                            <TabLabel item={item} />
                        </DsVerticalTabs.Tab>)}
                </DsVerticalTabs.List>
                {sampleItemsWithDisabled.map(item => <DsVerticalTabs.Content key={item.id} value={item.id}>
                        Selected tab content: {item.id}
                    </DsVerticalTabs.Content>)}
            </DsVerticalTabs>
        </div>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const disabledTab = canvas.getByRole('tab', {
      name: /status/i
    });
    await expect(disabledTab).toBeDisabled();
    await userEvent.click(disabledTab);
    await expect(args.onValueChange).not.toHaveBeenCalled();
    const runningTab = canvas.getByRole('tab', {
      name: /running\\/completed/i
    });
    await userEvent.click(runningTab);
    await expect(args.onValueChange).toHaveBeenCalledWith('running');
    await expect(runningTab).toHaveAttribute('data-selected');
    await expect(canvas.getByText(/selected tab content: running/i)).toBeVisible();
    await expect(disabledTab).toBeDisabled();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => {
    return <div className={styles.storyContainerShort}>
                <DsVerticalTabs onValueChange={args.onValueChange}>
                    <DsVerticalTabs.List>
                        {itemsWithLongLabels.map(item => <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
                                <TabLabel item={item} />
                            </DsVerticalTabs.Tab>)}
                    </DsVerticalTabs.List>
                    {itemsWithLongLabels.map(item => <DsVerticalTabs.Content key={item.id} value={item.id}>
                            Selected tab content: {item.id}
                        </DsVerticalTabs.Content>)}
                </DsVerticalTabs>
            </div>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const longLabel1 = canvas.getByRole('tab', {
      name: /very long navigation item label that might overflow/i
    });
    const longLabel2 = canvas.getByRole('tab', {
      name: /another really long label for testing purposes/i
    });
    const shortLabel = canvas.getByRole('tab', {
      name: /^short/i
    });
    await expect(longLabel1).toBeVisible();
    await expect(longLabel2).toBeVisible();
    await expect(shortLabel).toBeVisible();
    await userEvent.click(longLabel2);
    await expect(longLabel2).toHaveAttribute('data-selected');
    await expect(canvas.getByText(/selected tab content: 2/i)).toBeVisible();
    await expect(args.onValueChange).toHaveBeenCalledWith('2');
    await userEvent.click(shortLabel);
    await expect(shortLabel).toHaveAttribute('data-selected');
    await expect(canvas.getByText(/selected tab content: 3/i)).toBeVisible();
    await expect(args.onValueChange).toHaveBeenCalledWith('3');
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => {
    return <div className={styles.storyContainerShort}>
                <DsVerticalTabs onValueChange={args.onValueChange}>
                    <DsVerticalTabs.List>
                        {itemsWithHighCounts.map(item => <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
                                <TabLabel item={item} />
                            </DsVerticalTabs.Tab>)}
                    </DsVerticalTabs.List>
                    {itemsWithHighCounts.map(item => <DsVerticalTabs.Content key={item.id} value={item.id}>
                            Selected tab content: {item.id}
                        </DsVerticalTabs.Content>)}
                </DsVerticalTabs>
            </div>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('999')).toBeVisible();
    await expect(canvas.getByText('1000')).toBeVisible();
    await expect(canvas.getByText('12345')).toBeVisible();
    const statusTab = canvas.getByRole('tab', {
      name: /status/i
    });
    const categoryTab = canvas.getByRole('tab', {
      name: /category/i
    });
    const versionTab = canvas.getByRole('tab', {
      name: /version/i
    });
    await expect(statusTab).toBeVisible();
    await expect(categoryTab).toBeVisible();
    await expect(versionTab).toBeVisible();
    await userEvent.click(categoryTab);
    await expect(categoryTab).toHaveAttribute('data-selected');
    await expect(canvas.getByText(/selected tab content: category/i)).toBeVisible();
    await expect(args.onValueChange).toHaveBeenCalledWith('category');
    await userEvent.click(versionTab);
    await expect(versionTab).toHaveAttribute('data-selected');
    await expect(canvas.getByText(/selected tab content: version/i)).toBeVisible();
    await expect(args.onValueChange).toHaveBeenCalledWith('version');
    await expect(canvas.getByText('999')).toBeVisible();
    await expect(canvas.getByText('1000')).toBeVisible();
    await expect(canvas.getByText('12345')).toBeVisible();
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithDisabledItems`,`LongLabels`,`HighCounts`]}))();export{O as Default,j as HighCounts,A as LongLabels,k as WithDisabledItems,M as __namedExportsOrder,S as default};