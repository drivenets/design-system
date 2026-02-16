import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./ds-vertical-tabs-DIajlDEc.js";import{D as p}from"./ds-typography-CsGLi9oh.js";import"./index-B4YxvotJ.js";import"./iframe-CYjJFujY.js";import"./preload-helper-PPVm8Dsz.js";import"./tabs-root-CcnwcWvh.js";import"./use-locale-context-yKBflJpl.js";import"./index-BgwgYCXy.js";import"./index-lXO_8P3h.js";import"./index-BG2EI6Zy.js";import"./create-split-props-u5h9OPvL.js";import"./render-strategy-BCI1u616.js";import"./use-presence-KEbQceCW.js";import"./index-CSrhfYAi.js";import"./index-D_tHYuTO.js";const x="_storyContainer_kl7qi_1",w="_storyContainerShort_kl7qi_7",D="_tabItemLabel_kl7qi_19",L="_tabItemCount_kl7qi_27",H="_tabItemDot_kl7qi_33",k="_tabItemCountText_kl7qi_42",r={storyContainer:x,storyContainerShort:w,tabItemLabel:D,tabItemCount:L,tabItemDot:H,tabItemCountText:k},{expect:t,fn:v,userEvent:c,within:y}=__STORYBOOK_MODULE_TEST__,U={title:"Design System/Vertical Tabs",component:s,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{value:{control:"text",description:"Currently selected tab value (controlled)"},onValueChange:{action:"valueChange",description:"Callback when tab selection changes"},className:{control:"text",description:"Additional CSS class names"}}},V=[{id:"status",label:"Status",count:2},{id:"running",label:"Running/Completed"},{id:"category",label:"Category"},{id:"version",label:"Version"},{id:"lastEdited",label:"Last edited",count:5},{id:"lastRun",label:"Last run"},{id:"nextRun",label:"Next run"}],h=[{id:"status",label:"Status",count:2,disabled:!0},{id:"running",label:"Running/Completed"},{id:"category",label:"Category"},{id:"version",label:"Version"},{id:"lastEdited",label:"Last edited",count:5}],C=[{id:"status",label:"Status",count:999},{id:"category",label:"Category",count:1e3},{id:"version",label:"Version",count:12345}],B=[{id:"1",label:"Very Long Navigation Item Label That Might Overflow",count:99},{id:"2",label:"Another Really Long Label For Testing Purposes"},{id:"3",label:"Short",count:1}],T=({item:i})=>a.jsxs(a.Fragment,{children:[a.jsx(p,{variant:"body-sm-md",className:r.tabItemLabel,children:i.label}),!!i.count&&a.jsxs("div",{className:r.tabItemCount,children:[a.jsx("span",{className:r.tabItemDot}),a.jsx(p,{variant:"body-sm-reg",className:r.tabItemCountText,children:i.count})]})]}),d={args:{onValueChange:v()},render:i=>a.jsx("div",{className:r.storyContainer,children:a.jsxs(s,{onValueChange:i.onValueChange,children:[a.jsx(s.List,{children:V.map(e=>a.jsx(s.Tab,{value:e.id,disabled:e.disabled,children:a.jsx(T,{item:e})},e.id))}),V.map(e=>a.jsxs(s.Content,{value:e.id,children:["Selected tab content: ",e.id]},e.id))]})}),play:async({args:i,canvas:e})=>{const n=e.getByRole("tab",{name:/status/i});await c.click(n),await t(n).toHaveAttribute("data-selected"),await t(e.getByText(/selected tab content: status/i)).toBeVisible();const o=e.getByRole("tab",{name:/^category$/i});await c.click(o),await t(i.onValueChange).toHaveBeenCalledWith("category"),await t(o).toHaveAttribute("data-selected"),await t(e.getByText(/selected tab content: category/i)).toBeVisible();const l=e.getByRole("tab",{name:/^version$/i});await c.click(l),await t(l).toHaveAttribute("data-selected"),await t(e.getByText(/selected tab content: version/i)).toBeVisible(),await t(i.onValueChange).toHaveBeenCalledWith("version")}},g={args:{onValueChange:v()},render:i=>a.jsx("div",{className:r.storyContainer,children:a.jsxs(s,{onValueChange:i.onValueChange,children:[a.jsx(s.List,{children:h.map(e=>a.jsx(s.Tab,{value:e.id,disabled:e.disabled,children:a.jsx(T,{item:e})},e.id))}),h.map(e=>a.jsxs(s.Content,{value:e.id,children:["Selected tab content: ",e.id]},e.id))]})}),play:async({args:i,canvasElement:e})=>{const n=y(e),o=n.getByRole("tab",{name:/status/i});await t(o).toBeDisabled(),await c.click(o),await t(i.onValueChange).not.toHaveBeenCalled();const l=n.getByRole("tab",{name:/running\/completed/i});await c.click(l),await t(i.onValueChange).toHaveBeenCalledWith("running"),await t(l).toHaveAttribute("data-selected"),await t(n.getByText(/selected tab content: running/i)).toBeVisible(),await t(o).toBeDisabled()}},u={args:{onValueChange:v()},render:i=>a.jsx("div",{className:r.storyContainerShort,children:a.jsxs(s,{onValueChange:i.onValueChange,children:[a.jsx(s.List,{children:B.map(e=>a.jsx(s.Tab,{value:e.id,disabled:e.disabled,children:a.jsx(T,{item:e})},e.id))}),B.map(e=>a.jsxs(s.Content,{value:e.id,children:["Selected tab content: ",e.id]},e.id))]})}),play:async({args:i,canvasElement:e})=>{const n=y(e),o=n.getByRole("tab",{name:/very long navigation item label that might overflow/i}),l=n.getByRole("tab",{name:/another really long label for testing purposes/i}),b=n.getByRole("tab",{name:/^short/i});await t(o).toBeVisible(),await t(l).toBeVisible(),await t(b).toBeVisible(),await c.click(l),await t(l).toHaveAttribute("data-selected"),await t(n.getByText(/selected tab content: 2/i)).toBeVisible(),await t(i.onValueChange).toHaveBeenCalledWith("2"),await c.click(b),await t(b).toHaveAttribute("data-selected"),await t(n.getByText(/selected tab content: 3/i)).toBeVisible(),await t(i.onValueChange).toHaveBeenCalledWith("3")}},m={args:{onValueChange:v()},render:i=>a.jsx("div",{className:r.storyContainerShort,children:a.jsxs(s,{onValueChange:i.onValueChange,children:[a.jsx(s.List,{children:C.map(e=>a.jsx(s.Tab,{value:e.id,disabled:e.disabled,children:a.jsx(T,{item:e})},e.id))}),C.map(e=>a.jsxs(s.Content,{value:e.id,children:["Selected tab content: ",e.id]},e.id))]})}),play:async({args:i,canvasElement:e})=>{const n=y(e);await t(n.getByText("999")).toBeVisible(),await t(n.getByText("1000")).toBeVisible(),await t(n.getByText("12345")).toBeVisible();const o=n.getByRole("tab",{name:/status/i}),l=n.getByRole("tab",{name:/category/i}),b=n.getByRole("tab",{name:/version/i});await t(o).toBeVisible(),await t(l).toBeVisible(),await t(b).toBeVisible(),await c.click(l),await t(l).toHaveAttribute("data-selected"),await t(n.getByText(/selected tab content: category/i)).toBeVisible(),await t(i.onValueChange).toHaveBeenCalledWith("category"),await c.click(b),await t(b).toHaveAttribute("data-selected"),await t(n.getByText(/selected tab content: version/i)).toBeVisible(),await t(i.onValueChange).toHaveBeenCalledWith("version"),await t(n.getByText("999")).toBeVisible(),await t(n.getByText("1000")).toBeVisible(),await t(n.getByText("12345")).toBeVisible()}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const K=["Default","WithDisabledItems","LongLabels","HighCounts"];export{d as Default,m as HighCounts,u as LongLabels,g as WithDisabledItems,K as __namedExportsOrder,U as default};
