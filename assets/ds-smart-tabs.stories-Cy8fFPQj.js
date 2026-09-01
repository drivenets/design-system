import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-typography-BLoO5j9q.js";import{n as o,t as s}from"./ds-stack-GU0hZWeR.js";import{n as c,t as l}from"./ds-smart-tabs-CKlZ3enj.js";var u,d,f,p=t((()=>{u=`_statusReadout_1jmq9_1`,d=`_statusValue_1jmq9_8`,f={statusReadout:u,statusValue:d}})),m,h,g,_,v,y;t((()=>{m=e(n(),1),c(),o(),a(),p(),h=r(),g={title:`Components/SmartTabs`,component:l,parameters:{layout:`centered`},argTypes:{activeTab:{control:`text`,description:`Currently active tab value`},onTabClick:{action:`tab clicked`,description:`Callback function when a tab is clicked`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},_={render:function(){let[e,t]=(0,m.useState)(`all`);return(0,h.jsxs)(l,{activeTab:e,onTabClick:t,children:[(0,h.jsx)(l.Tab,{label:`All`,value:`all`,icon:`view_apps`,color:`dark-blue`,content:`747`}),(0,h.jsx)(l.Tab,{label:`Active`,value:`active`,icon:`check_circle`,color:`green`,content:`198`})]})},parameters:{docs:{source:{type:`code`}}}},v={render:function(){let[e,t]=(0,m.useState)(`all`);return(0,h.jsxs)(s,{direction:`column`,children:[(0,h.jsxs)(l,{activeTab:e,onTabClick:t,children:[(0,h.jsx)(l.Tab,{label:`All`,value:`all`,icon:`view_apps`,color:`dark-blue`,content:`747`}),(0,h.jsx)(l.Tab,{label:`Active`,value:`active`,icon:`check_circle`,color:`green`,content:`198`}),(0,h.jsx)(l.Tab,{label:`Deprecated`,value:`deprecated`,icon:`notifications`,color:`red`,content:`202`}),(0,h.jsx)(l.Tab,{label:`Inactive`,value:`inactive`,icon:`stop_circle`,color:`gray`,content:`347`,disabled:!0})]}),(0,h.jsxs)(s,{direction:`row`,gap:4,className:f.statusReadout,children:[(0,h.jsx)(i,{variant:`body-sm-md`,children:`Active tab:`}),(0,h.jsx)(i,{variant:`body-sm-md`,className:f.statusValue,children:e})]})]})},parameters:{docs:{source:{type:`code`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [activeTab, setActiveTab] = useState('all');
    return <DsSmartTabs activeTab={activeTab} onTabClick={setActiveTab}>
                <DsSmartTabs.Tab label="All" value="all" icon="view_apps" color="dark-blue" content="747" />
                <DsSmartTabs.Tab label="Active" value="active" icon="check_circle" color="green" content="198" />
            </DsSmartTabs>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`Minimal filter bar — the simplest SmartTabs usage with a couple of color-coded categories.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [activeTab, setActiveTab] = useState('all');
    return <DsStack direction="column">
                <DsSmartTabs activeTab={activeTab} onTabClick={setActiveTab}>
                    <DsSmartTabs.Tab label="All" value="all" icon="view_apps" color="dark-blue" content="747" />
                    <DsSmartTabs.Tab label="Active" value="active" icon="check_circle" color="green" content="198" />
                    <DsSmartTabs.Tab label="Deprecated" value="deprecated" icon="notifications" color="red" content="202" />
                    <DsSmartTabs.Tab label="Inactive" value="inactive" icon="stop_circle" color="gray" content="347" disabled />
                </DsSmartTabs>
                <DsStack direction="row" gap={4} className={styles.statusReadout}>
                    <DsTypography variant="body-sm-md">Active tab:</DsTypography>
                    <DsTypography variant="body-sm-md" className={styles.statusValue}>
                        {activeTab}
                    </DsTypography>
                </DsStack>
            </DsStack>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`Full filter bar with status colors, counts, and a disabled category.`,...v.parameters?.docs?.description}}},y=[`Basic`,`Default`]}))();export{_ as Basic,v as Default,y as __namedExportsOrder,g as default};