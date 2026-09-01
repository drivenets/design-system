import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-typography-BLoO5j9q.js";import{n as i,t as a}from"./ds-vertical-tabs-Bmbxp-F0.js";var o,s,c,l,u,d,f,p,m,h,g=e((()=>{o=`_storyContainer_9gogk_5`,s=`_storyContainerShort_9gogk_11`,c=`_storyContainerMedium_9gogk_17`,l=`_tabItemLabel_9gogk_23`,u=`_tabItemCount_9gogk_31`,d=`_tabItemDot_9gogk_37`,f=`_tabItemCountText_9gogk_46`,p=`_interactiveFooter_9gogk_50`,m=`_interactiveText_9gogk_56`,h={storyContainer:o,storyContainerShort:s,storyContainerMedium:c,tabItemLabel:l,tabItemCount:u,tabItemDot:d,tabItemCountText:f,interactiveFooter:p,interactiveText:m}})),_,v,y,b,x,S,C,w;e((()=>{i(),r(),g(),_=t(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/VerticalTabs`,component:a,parameters:{layout:`centered`,docs:{description:{component:`
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
                `}}},argTypes:{value:{control:`text`,description:`Currently selected tab value (controlled)`},onValueChange:{action:`valueChange`,description:`Callback when tab selection changes`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},b={args:{onValueChange:v()},render:e=>{let t=[{id:`status`,label:`Status`,count:2},{id:`running`,label:`Running/Completed`},{id:`category`,label:`Category`},{id:`version`,label:`Version`},{id:`lastEdited`,label:`Last edited`,count:5},{id:`lastRun`,label:`Last run`},{id:`nextRun`,label:`Next run`}];return(0,_.jsx)(`div`,{className:h.storyContainer,children:(0,_.jsxs)(a,{onValueChange:e.onValueChange,children:[(0,_.jsx)(a.List,{children:t.map(e=>(0,_.jsxs)(a.Tab,{value:e.id,disabled:e.disabled,children:[(0,_.jsx)(n,{variant:`body-sm-md`,className:h.tabItemLabel,children:e.label}),!!e.count&&(0,_.jsxs)(`div`,{className:h.tabItemCount,children:[(0,_.jsx)(`span`,{className:h.tabItemDot}),(0,_.jsx)(n,{variant:`body-sm-reg`,className:h.tabItemCountText,children:e.count})]})]},e.id))}),t.map(e=>(0,_.jsxs)(a.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})})},parameters:{docs:{source:{type:`code`}}}},x={args:{onValueChange:v()},render:e=>{let t=[{id:`status`,label:`Status`,count:2,disabled:!0},{id:`running`,label:`Running/Completed`},{id:`category`,label:`Category`},{id:`version`,label:`Version`},{id:`lastEdited`,label:`Last edited`,count:5}];return(0,_.jsx)(`div`,{className:h.storyContainer,children:(0,_.jsxs)(a,{onValueChange:e.onValueChange,children:[(0,_.jsx)(a.List,{children:t.map(e=>(0,_.jsxs)(a.Tab,{value:e.id,disabled:e.disabled,children:[(0,_.jsx)(n,{variant:`body-sm-md`,className:h.tabItemLabel,children:e.label}),!!e.count&&(0,_.jsxs)(`div`,{className:h.tabItemCount,children:[(0,_.jsx)(`span`,{className:h.tabItemDot}),(0,_.jsx)(n,{variant:`body-sm-reg`,className:h.tabItemCountText,children:e.count})]})]},e.id))}),t.map(e=>(0,_.jsxs)(a.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})})},parameters:{docs:{source:{type:`code`}}}},S={args:{onValueChange:v()},render:e=>{let t=[{id:`1`,label:`Very Long Navigation Item Label That Might Overflow`,count:99},{id:`2`,label:`Another Really Long Label For Testing Purposes`},{id:`3`,label:`Short`,count:1}];return(0,_.jsx)(`div`,{className:h.storyContainerShort,children:(0,_.jsxs)(a,{onValueChange:e.onValueChange,children:[(0,_.jsx)(a.List,{children:t.map(e=>(0,_.jsxs)(a.Tab,{value:e.id,disabled:e.disabled,children:[(0,_.jsx)(n,{variant:`body-sm-md`,className:h.tabItemLabel,children:e.label}),!!e.count&&(0,_.jsxs)(`div`,{className:h.tabItemCount,children:[(0,_.jsx)(`span`,{className:h.tabItemDot}),(0,_.jsx)(n,{variant:`body-sm-reg`,className:h.tabItemCountText,children:e.count})]})]},e.id))}),t.map(e=>(0,_.jsxs)(a.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})})},parameters:{docs:{source:{type:`code`}}}},C={args:{onValueChange:v()},render:e=>{let t=[{id:`status`,label:`Status`,count:999},{id:`category`,label:`Category`,count:1e3},{id:`version`,label:`Version`,count:12345}];return(0,_.jsx)(`div`,{className:h.storyContainerShort,children:(0,_.jsxs)(a,{onValueChange:e.onValueChange,children:[(0,_.jsx)(a.List,{children:t.map(e=>(0,_.jsxs)(a.Tab,{value:e.id,disabled:e.disabled,children:[(0,_.jsx)(n,{variant:`body-sm-md`,className:h.tabItemLabel,children:e.label}),!!e.count&&(0,_.jsxs)(`div`,{className:h.tabItemCount,children:[(0,_.jsx)(`span`,{className:h.tabItemDot}),(0,_.jsx)(n,{variant:`body-sm-reg`,className:h.tabItemCountText,children:e.count})]})]},e.id))}),t.map(e=>(0,_.jsxs)(a.Content,{value:e.id,children:[`Selected tab content: `,e.id]},e.id))]})})},parameters:{docs:{source:{type:`code`}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => {
    const items: TabItem[] = [{
      id: 'status',
      label: 'Status',
      count: 2
    }, {
      id: 'running',
      label: 'Running/Completed'
    }, {
      id: 'category',
      label: 'Category'
    }, {
      id: 'version',
      label: 'Version'
    }, {
      id: 'lastEdited',
      label: 'Last edited',
      count: 5
    }, {
      id: 'lastRun',
      label: 'Last run'
    }, {
      id: 'nextRun',
      label: 'Next run'
    }];
    return <div className={styles.storyContainer}>
                <DsVerticalTabs onValueChange={args.onValueChange}>
                    <DsVerticalTabs.List>
                        {items.map(item => <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
                                <DsTypography variant="body-sm-md" className={styles.tabItemLabel}>
                                    {item.label}
                                </DsTypography>
                                {!!item.count && <div className={styles.tabItemCount}>
                                        <span className={styles.tabItemDot} />
                                        <DsTypography variant="body-sm-reg" className={styles.tabItemCountText}>
                                            {item.count}
                                        </DsTypography>
                                    </div>}
                            </DsVerticalTabs.Tab>)}
                    </DsVerticalTabs.List>
                    {items.map(item => <DsVerticalTabs.Content key={item.id} value={item.id}>
                            Selected tab content: {item.id}
                        </DsVerticalTabs.Content>)}
                </DsVerticalTabs>
            </div>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => {
    const items: TabItem[] = [{
      id: 'status',
      label: 'Status',
      count: 2,
      disabled: true
    }, {
      id: 'running',
      label: 'Running/Completed'
    }, {
      id: 'category',
      label: 'Category'
    }, {
      id: 'version',
      label: 'Version'
    }, {
      id: 'lastEdited',
      label: 'Last edited',
      count: 5
    }];
    return <div className={styles.storyContainer}>
                <DsVerticalTabs onValueChange={args.onValueChange}>
                    <DsVerticalTabs.List>
                        {items.map(item => <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
                                <DsTypography variant="body-sm-md" className={styles.tabItemLabel}>
                                    {item.label}
                                </DsTypography>
                                {!!item.count && <div className={styles.tabItemCount}>
                                        <span className={styles.tabItemDot} />
                                        <DsTypography variant="body-sm-reg" className={styles.tabItemCountText}>
                                            {item.count}
                                        </DsTypography>
                                    </div>}
                            </DsVerticalTabs.Tab>)}
                    </DsVerticalTabs.List>
                    {items.map(item => <DsVerticalTabs.Content key={item.id} value={item.id}>
                            Selected tab content: {item.id}
                        </DsVerticalTabs.Content>)}
                </DsVerticalTabs>
            </div>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => {
    const items: TabItem[] = [{
      id: '1',
      label: 'Very Long Navigation Item Label That Might Overflow',
      count: 99
    }, {
      id: '2',
      label: 'Another Really Long Label For Testing Purposes'
    }, {
      id: '3',
      label: 'Short',
      count: 1
    }];
    return <div className={styles.storyContainerShort}>
                <DsVerticalTabs onValueChange={args.onValueChange}>
                    <DsVerticalTabs.List>
                        {items.map(item => <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
                                <DsTypography variant="body-sm-md" className={styles.tabItemLabel}>
                                    {item.label}
                                </DsTypography>
                                {!!item.count && <div className={styles.tabItemCount}>
                                        <span className={styles.tabItemDot} />
                                        <DsTypography variant="body-sm-reg" className={styles.tabItemCountText}>
                                            {item.count}
                                        </DsTypography>
                                    </div>}
                            </DsVerticalTabs.Tab>)}
                    </DsVerticalTabs.List>
                    {items.map(item => <DsVerticalTabs.Content key={item.id} value={item.id}>
                            Selected tab content: {item.id}
                        </DsVerticalTabs.Content>)}
                </DsVerticalTabs>
            </div>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => {
    const items: TabItem[] = [{
      id: 'status',
      label: 'Status',
      count: 999
    }, {
      id: 'category',
      label: 'Category',
      count: 1000
    }, {
      id: 'version',
      label: 'Version',
      count: 12345
    }];
    return <div className={styles.storyContainerShort}>
                <DsVerticalTabs onValueChange={args.onValueChange}>
                    <DsVerticalTabs.List>
                        {items.map(item => <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
                                <DsTypography variant="body-sm-md" className={styles.tabItemLabel}>
                                    {item.label}
                                </DsTypography>
                                {!!item.count && <div className={styles.tabItemCount}>
                                        <span className={styles.tabItemDot} />
                                        <DsTypography variant="body-sm-reg" className={styles.tabItemCountText}>
                                            {item.count}
                                        </DsTypography>
                                    </div>}
                            </DsVerticalTabs.Tab>)}
                    </DsVerticalTabs.List>
                    {items.map(item => <DsVerticalTabs.Content key={item.id} value={item.id}>
                            Selected tab content: {item.id}
                        </DsVerticalTabs.Content>)}
                </DsVerticalTabs>
            </div>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithDisabledItems`,`LongLabels`,`HighCounts`]}))();export{b as Default,C as HighCounts,S as LongLabels,x as WithDisabledItems,w as __namedExportsOrder,y as default};