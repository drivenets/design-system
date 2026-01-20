import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./ds-vertical-tabs-CM_WoncA.js";import{D as d}from"./ds-typography-DsQkJrIL.js";import"./index-D5tIK9Hm.js";import"./iframe-BvAHkssS.js";import"./preload-helper-PPVm8Dsz.js";import"./create-split-props-u5h9OPvL.js";import"./render-strategy-B8bSQ-A1.js";import"./use-locale-context-Cz76KNLo.js";import"./index-DYuLBmGr.js";import"./index-1E6Vh1RZ.js";import"./index-BwakmMYQ.js";import"./use-presence-C4Xo6rLh.js";import"./index-3fx5u_Xc.js";import"./index-djJSebYL.js";const p="_storyContainer_kl7qi_1",T="_storyContainerShort_kl7qi_7",D="_tabItemLabel_kl7qi_19",h="_tabItemCount_kl7qi_27",C="_tabItemDot_kl7qi_33",V="_tabItemCountText_kl7qi_42",s={storyContainer:p,storyContainerShort:T,tabItemLabel:D,tabItemCount:h,tabItemDot:C,tabItemCountText:V},H={title:"Design System/Vertical Tabs",component:a,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{value:{control:"text",description:"Currently selected tab value (controlled)"},onValueChange:{action:"valueChange",description:"Callback when tab selection changes"},className:{control:"text",description:"Additional CSS class names"}}},c=[{id:"status",label:"Status",count:2},{id:"running",label:"Running/Completed"},{id:"category",label:"Category"},{id:"version",label:"Version"},{id:"lastEdited",label:"Last edited",count:5},{id:"lastRun",label:"Last run"},{id:"nextRun",label:"Next run"}],b=[{id:"status",label:"Status",count:2,disabled:!0},{id:"running",label:"Running/Completed"},{id:"category",label:"Category"},{id:"version",label:"Version"},{id:"lastEdited",label:"Last edited",count:5}],m=[{id:"status",label:"Status",count:999},{id:"category",label:"Category",count:1e3},{id:"version",label:"Version",count:12345}],u=[{id:"1",label:"Very Long Navigation Item Label That Might Overflow",count:99},{id:"2",label:"Another Really Long Label For Testing Purposes"},{id:"3",label:"Short",count:1}],o=({item:e})=>t.jsxs(t.Fragment,{children:[t.jsx(d,{variant:"body-sm-md",className:s.tabItemLabel,children:e.label}),!!e.count&&t.jsxs("div",{className:s.tabItemCount,children:[t.jsx("span",{className:s.tabItemDot}),t.jsx(d,{variant:"body-sm-reg",className:s.tabItemCountText,children:e.count})]})]}),i={render:()=>t.jsx("div",{className:s.storyContainer,children:t.jsxs(a,{children:[t.jsx(a.List,{children:c.map(e=>t.jsx(a.Tab,{value:e.id,disabled:e.disabled,children:t.jsx(o,{item:e})},e.id))}),c.map(e=>t.jsxs(a.Content,{value:e.id,children:["Selected tab content: ",e.id]},e.id))]})})},n={render:()=>t.jsx("div",{className:s.storyContainer,children:t.jsxs(a,{children:[t.jsx(a.List,{children:b.map(e=>t.jsx(a.Tab,{value:e.id,disabled:e.disabled,children:t.jsx(o,{item:e})},e.id))}),b.map(e=>t.jsxs(a.Content,{value:e.id,children:["Selected tab content: ",e.id]},e.id))]})})},r={render:()=>t.jsx("div",{className:s.storyContainerShort,children:t.jsxs(a,{children:[t.jsx(a.List,{children:u.map(e=>t.jsx(a.Tab,{value:e.id,disabled:e.disabled,children:t.jsx(o,{item:e})},e.id))}),u.map(e=>t.jsxs(a.Content,{value:e.id,children:["Selected tab content: ",e.id]},e.id))]})})},l={render:()=>t.jsx("div",{className:s.storyContainerShort,children:t.jsxs(a,{children:[t.jsx(a.List,{children:m.map(e=>t.jsx(a.Tab,{value:e.id,disabled:e.disabled,children:t.jsx(o,{item:e})},e.id))}),m.map(e=>t.jsxs(a.Content,{value:e.id,children:["Selected tab content: ",e.id]},e.id))]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.storyContainer}>
            <DsVerticalTabs>
                <DsVerticalTabs.List>
                    {sampleItems.map(item => <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
                            <TabLabel item={item} />
                        </DsVerticalTabs.Tab>)}
                </DsVerticalTabs.List>
                {sampleItems.map(item => <DsVerticalTabs.Content key={item.id} value={item.id}>
                        Selected tab content: {item.id}
                    </DsVerticalTabs.Content>)}
            </DsVerticalTabs>
        </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.storyContainer}>
            <DsVerticalTabs>
                <DsVerticalTabs.List>
                    {sampleItemsWithDisabled.map(item => <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
                            <TabLabel item={item} />
                        </DsVerticalTabs.Tab>)}
                </DsVerticalTabs.List>
                {sampleItemsWithDisabled.map(item => <DsVerticalTabs.Content key={item.id} value={item.id}>
                        Selected tab content: {item.id}
                    </DsVerticalTabs.Content>)}
            </DsVerticalTabs>
        </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className={styles.storyContainerShort}>
                <DsVerticalTabs>
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
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className={styles.storyContainerShort}>
                <DsVerticalTabs>
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
  }
}`,...l.parameters?.docs?.source}}};const E=["Default","WithDisabledItems","LongLabels","HighCounts"];export{i as Default,l as HighCounts,r as LongLabels,n as WithDisabledItems,E as __namedExportsOrder,H as default};
