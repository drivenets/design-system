import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CIo2UmkR.js";import{n as r,t as i}from"./ds-typography-HfolNiFP.js";import{n as a,t as o}from"./ds-stack-DBH-wF-7.js";import{n as s,t as c}from"./ds-smart-tabs-DbbxVP_n.js";var l,u,d;function f(){return(f=e((()=>{l=`_statusReadout_1jmq9_1`,u=`_statusValue_1jmq9_8`,d={statusReadout:l,statusValue:u}})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{p=t(),s(),a(),i(),f(),m=n(),h={title:`Components/SmartTabs`,component:c,parameters:{layout:`centered`},argTypes:{activeTab:{control:`text`,description:`Currently active tab value`},onTabClick:{action:`tab clicked`,description:`Callback function when a tab is clicked`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},g={render:function(){let[e,t]=(0,p.useState)(`all`);return(0,m.jsxs)(c,{activeTab:e,onTabClick:t,children:[(0,m.jsx)(c.Tab,{label:`All`,value:`all`,icon:`view_apps`,color:`dark-blue`,content:`747`}),(0,m.jsx)(c.Tab,{label:`Active`,value:`active`,icon:`check_circle`,color:`green`,content:`198`})]})},parameters:{docs:{source:{type:`code`}}}},_={render:function(){let[e,t]=(0,p.useState)(`all`);return(0,m.jsxs)(o,{direction:`column`,children:[(0,m.jsxs)(c,{activeTab:e,onTabClick:t,children:[(0,m.jsx)(c.Tab,{label:`All`,value:`all`,icon:`view_apps`,color:`dark-blue`,content:`747`}),(0,m.jsx)(c.Tab,{label:`Active`,value:`active`,icon:`check_circle`,color:`green`,content:`198`}),(0,m.jsx)(c.Tab,{label:`Deprecated`,value:`deprecated`,icon:`notifications`,color:`red`,content:`202`}),(0,m.jsx)(c.Tab,{label:`Inactive`,value:`inactive`,icon:`stop_circle`,color:`gray`,content:`347`,disabled:!0})]}),(0,m.jsxs)(o,{direction:`row`,gap:4,className:d.statusReadout,children:[(0,m.jsx)(r,{variant:`body-sm-md`,children:`Active tab:`}),(0,m.jsx)(r,{variant:`body-sm-md`,className:d.statusValue,children:e})]})]})},parameters:{docs:{source:{type:`code`}}}},v=[`Basic`,`Default`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Minimal filter bar — the simplest SmartTabs usage with a couple of color-coded categories.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Full filter bar with status colors, counts, and a disabled category.`,..._.parameters?.docs?.description}}}})))()}y();export{g as Basic,_ as Default,v as __namedExportsOrder,h as default};