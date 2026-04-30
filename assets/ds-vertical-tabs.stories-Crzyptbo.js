import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{t as n}from"./compiler-runtime-F4PhGvVb.js";import{n as r,t as i}from"./ds-typography-DBkCSw8w.js";import{n as a,t as o}from"./ds-vertical-tabs-BlG7t6L7.js";var s,c,l,u,d,f,p,m,h,g,_=e((()=>{s=`_storyContainer_kl7qi_1`,c=`_storyContainerShort_kl7qi_7`,l=`_storyContainerMedium_kl7qi_13`,u=`_tabItemLabel_kl7qi_19`,d=`_tabItemCount_kl7qi_27`,f=`_tabItemDot_kl7qi_33`,p=`_tabItemCountText_kl7qi_42`,m=`_interactiveFooter_kl7qi_46`,h=`_interactiveText_kl7qi_52`,g={storyContainer:s,storyContainerShort:c,storyContainerMedium:l,tabItemLabel:u,tabItemCount:d,tabItemDot:f,tabItemCountText:p,interactiveFooter:m,interactiveText:h}})),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{v=n(),a(),i(),_(),y=t(),{expect:b,fn:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/VerticalTabs`,component:o,parameters:{layout:`centered`,docs:{description:{component:`
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
                `}}},argTypes:{value:{control:`text`,description:`Currently selected tab value (controlled)`},onValueChange:{action:`valueChange`,description:`Callback when tab selection changes`},className:{control:`text`,description:`Additional CSS class names`}}},T=[{id:`status`,label:`Status`,count:2},{id:`running`,label:`Running/Completed`},{id:`category`,label:`Category`},{id:`version`,label:`Version`},{id:`lastEdited`,label:`Last edited`,count:5},{id:`lastRun`,label:`Last run`},{id:`nextRun`,label:`Next run`}],E=[{id:`status`,label:`Status`,count:2,disabled:!0},{id:`running`,label:`Running/Completed`},{id:`category`,label:`Category`},{id:`version`,label:`Version`},{id:`lastEdited`,label:`Last edited`,count:5}],D=[{id:`status`,label:`Status`,count:999},{id:`category`,label:`Category`,count:1e3},{id:`version`,label:`Version`,count:12345}],O=[{id:`1`,label:`Very Long Navigation Item Label That Might Overflow`,count:99},{id:`2`,label:`Another Really Long Label For Testing Purposes`},{id:`3`,label:`Short`,count:1}],k=e=>{let t=(0,v.c)(7),{item:n}=e,i;t[0]===n.label?i=t[1]:(i=(0,y.jsx)(r,{variant:`body-sm-md`,className:g.tabItemLabel,children:n.label}),t[0]=n.label,t[1]=i);let a;t[2]===n.count?a=t[3]:(a=!!n.count&&(0,y.jsxs)(`div`,{className:g.tabItemCount,children:[(0,y.jsx)(`span`,{className:g.tabItemDot}),(0,y.jsx)(r,{variant:`body-sm-reg`,className:g.tabItemCountText,children:n.count})]}),t[2]=n.count,t[3]=a);let o;return t[4]!==i||t[5]!==a?(o=(0,y.jsxs)(y.Fragment,{children:[i,a]}),t[4]=i,t[5]=a,t[6]=o):o=t[6],o},A={args:{onValueChange:x()},render:e=>(0,y.jsx)(`div`,{className:g.storyContainer,children:(0,y.jsxs)(o,{onValueChange:e.onValueChange,children:[(0,y.jsx)(o.List,{children:T.map(e=>(0,y.jsx)(o.Tab,{value:e.id,disabled:e.disabled,children:(0,y.jsx)(k,{item:e})},e.id))}),T.map(e=>(0,y.jsxs)(o.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})}),play:async({args:e,canvas:t})=>{let n=t.getByRole(`tab`,{name:/status/i});await S.click(n),await b(n).toHaveAttribute(`data-selected`),await b(t.getByText(/selected tab content: status/i)).toBeVisible();let r=t.getByRole(`tab`,{name:/^category$/i});await S.click(r),await b(e.onValueChange).toHaveBeenCalledWith(`category`),await b(r).toHaveAttribute(`data-selected`),await b(t.getByText(/selected tab content: category/i)).toBeVisible();let i=t.getByRole(`tab`,{name:/^version$/i});await S.click(i),await b(i).toHaveAttribute(`data-selected`),await b(t.getByText(/selected tab content: version/i)).toBeVisible(),await b(e.onValueChange).toHaveBeenCalledWith(`version`)}},j={args:{onValueChange:x()},render:e=>(0,y.jsx)(`div`,{className:g.storyContainer,children:(0,y.jsxs)(o,{onValueChange:e.onValueChange,children:[(0,y.jsx)(o.List,{children:E.map(e=>(0,y.jsx)(o.Tab,{value:e.id,disabled:e.disabled,children:(0,y.jsx)(k,{item:e})},e.id))}),E.map(e=>(0,y.jsxs)(o.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})}),play:async({args:e,canvasElement:t})=>{let n=C(t),r=n.getByRole(`tab`,{name:/status/i});await b(r).toBeDisabled(),await S.click(r),await b(e.onValueChange).not.toHaveBeenCalled();let i=n.getByRole(`tab`,{name:/running\/completed/i});await S.click(i),await b(e.onValueChange).toHaveBeenCalledWith(`running`),await b(i).toHaveAttribute(`data-selected`),await b(n.getByText(/selected tab content: running/i)).toBeVisible(),await b(r).toBeDisabled()}},M={args:{onValueChange:x()},render:e=>(0,y.jsx)(`div`,{className:g.storyContainerShort,children:(0,y.jsxs)(o,{onValueChange:e.onValueChange,children:[(0,y.jsx)(o.List,{children:O.map(e=>(0,y.jsx)(o.Tab,{value:e.id,disabled:e.disabled,children:(0,y.jsx)(k,{item:e})},e.id))}),O.map(e=>(0,y.jsxs)(o.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})}),play:async({args:e,canvasElement:t})=>{let n=C(t),r=n.getByRole(`tab`,{name:/very long navigation item label that might overflow/i}),i=n.getByRole(`tab`,{name:/another really long label for testing purposes/i}),a=n.getByRole(`tab`,{name:/^short/i});await b(r).toBeVisible(),await b(i).toBeVisible(),await b(a).toBeVisible(),await S.click(i),await b(i).toHaveAttribute(`data-selected`),await b(n.getByText(/selected tab content: 2/i)).toBeVisible(),await b(e.onValueChange).toHaveBeenCalledWith(`2`),await S.click(a),await b(a).toHaveAttribute(`data-selected`),await b(n.getByText(/selected tab content: 3/i)).toBeVisible(),await b(e.onValueChange).toHaveBeenCalledWith(`3`)}},N={args:{onValueChange:x()},render:e=>(0,y.jsx)(`div`,{className:g.storyContainerShort,children:(0,y.jsxs)(o,{onValueChange:e.onValueChange,children:[(0,y.jsx)(o.List,{children:D.map(e=>(0,y.jsx)(o.Tab,{value:e.id,disabled:e.disabled,children:(0,y.jsx)(k,{item:e})},e.id))}),D.map(e=>(0,y.jsxs)(o.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})}),play:async({args:e,canvasElement:t})=>{let n=C(t);await b(n.getByText(`999`)).toBeVisible(),await b(n.getByText(`1000`)).toBeVisible(),await b(n.getByText(`12345`)).toBeVisible();let r=n.getByRole(`tab`,{name:/status/i}),i=n.getByRole(`tab`,{name:/category/i}),a=n.getByRole(`tab`,{name:/version/i});await b(r).toBeVisible(),await b(i).toBeVisible(),await b(a).toBeVisible(),await S.click(i),await b(i).toHaveAttribute(`data-selected`),await b(n.getByText(/selected tab content: category/i)).toBeVisible(),await b(e.onValueChange).toHaveBeenCalledWith(`category`),await S.click(a),await b(a).toHaveAttribute(`data-selected`),await b(n.getByText(/selected tab content: version/i)).toBeVisible(),await b(e.onValueChange).toHaveBeenCalledWith(`version`),await b(n.getByText(`999`)).toBeVisible(),await b(n.getByText(`1000`)).toBeVisible(),await b(n.getByText(`12345`)).toBeVisible()}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`Default`,`WithDisabledItems`,`LongLabels`,`HighCounts`]}))();export{A as Default,N as HighCounts,M as LongLabels,j as WithDisabledItems,P as __namedExportsOrder,w as default};