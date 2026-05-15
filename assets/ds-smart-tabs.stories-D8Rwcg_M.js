import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-vwcHG51j.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./ds-smart-tabs-B7LfLRgl.js";var o,s,c,l,u,d,f,p;t((()=>{o=e(n(),1),i(),s=r(),{expect:c,userEvent:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/SmartTabs`,component:a,parameters:{layout:`centered`},argTypes:{activeTab:{control:`text`,description:`Currently active tab value`},onTabClick:{action:`tab clicked`,description:`Callback function when a tab is clicked`},className:{control:`text`,description:`Additional CSS class names`},style:{control:`object`,description:`Inline styles to apply to the component`}}},f={render:function(){let[e,t]=(0,o.useState)(`all`);return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(a,{activeTab:e,onTabClick:t,children:[(0,s.jsx)(a.Tab,{label:`All`,value:`all`,icon:`view_apps`,color:`dark-blue`,content:`747`}),(0,s.jsx)(a.Tab,{label:`Active`,value:`active`,icon:`check_circle`,color:`green`,content:`198`}),(0,s.jsx)(a.Tab,{label:`Deprecated`,value:`deprecated`,icon:`notifications`,color:`red`,content:`202`}),(0,s.jsx)(a.Tab,{label:`Inactive`,value:`inactive`,icon:`stop_circle`,color:`gray`,content:`347`,disabled:!0})]}),(0,s.jsx)(`div`,{role:`status`,"aria-label":`Active tab`,style:{marginTop:`20px`,padding:`16px`,background:`#f5f5f5`,borderRadius:`4px`},children:(0,s.jsxs)(`p`,{children:[`Active tab: `,(0,s.jsx)(`strong`,{children:e})]})})]})},play:async({canvasElement:e})=>{let t=u(e);await c(t.getByText(`All`)).toBeInTheDocument(),await c(t.getByText(`Active`)).toBeInTheDocument(),await c(t.getByText(`Deprecated`)).toBeInTheDocument(),await c(t.getByText(`Inactive`)).toBeInTheDocument(),await c(t.getByText(`747`)).toBeInTheDocument(),await c(t.getByText(`198`)).toBeInTheDocument(),await c(t.getByText(`202`)).toBeInTheDocument(),await c(t.getByText(`347`)).toBeInTheDocument();let n=t.getByRole(`status`,{name:/active tab/i});await c(n).toHaveTextContent(`Active tab: all`);let r=t.getByText(`Active`);await l.click(r),await c(n).toHaveTextContent(`Active tab: active`);let i=t.getByText(`Deprecated`);await l.click(i),await c(n).toHaveTextContent(`Active tab: deprecated`);let a=t.getByText(`Inactive`);await l.click(a),await c(n).toHaveTextContent(`Active tab: deprecated`);let o=t.getByText(`All`);await l.click(o),await c(n).toHaveTextContent(`Active tab: all`)}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [activeTab, setActiveTab] = useState('all');
    return <div>
                <DsSmartTabs activeTab={activeTab} onTabClick={setActiveTab}>
                    <DsSmartTabs.Tab label="All" value="all" icon="view_apps" color="dark-blue" content="747" />
                    <DsSmartTabs.Tab label="Active" value="active" icon="check_circle" color="green" content="198" />
                    <DsSmartTabs.Tab label="Deprecated" value="deprecated" icon="notifications" color="red" content="202" />
                    <DsSmartTabs.Tab label="Inactive" value="inactive" icon="stop_circle" color="gray" content="347" disabled />
                </DsSmartTabs>
                <div role="status" aria-label="Active tab" style={{
        marginTop: '20px',
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
                    <p>
                        Active tab: <strong>{activeTab}</strong>
                    </p>
                </div>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Test that all tabs are rendered
    await expect(canvas.getByText('All')).toBeInTheDocument();
    await expect(canvas.getByText('Active')).toBeInTheDocument();
    await expect(canvas.getByText('Deprecated')).toBeInTheDocument();
    await expect(canvas.getByText('Inactive')).toBeInTheDocument();

    // Test that counts are displayed
    await expect(canvas.getByText('747')).toBeInTheDocument();
    await expect(canvas.getByText('198')).toBeInTheDocument();
    await expect(canvas.getByText('202')).toBeInTheDocument();
    await expect(canvas.getByText('347')).toBeInTheDocument();

    // Test initial state - "all" should be active
    const activeTabIndicator = canvas.getByRole('status', {
      name: /active tab/i
    });
    // Verify the semantic structure
    await expect(activeTabIndicator).toHaveTextContent('Active tab: all');

    // Test clicking on "Active" tab
    const activeTab = canvas.getByText('Active');
    await userEvent.click(activeTab);
    await expect(activeTabIndicator).toHaveTextContent('Active tab: active');

    // Test clicking on "Deprecated" tab
    const deprecatedTab = canvas.getByText('Deprecated');
    await userEvent.click(deprecatedTab);
    await expect(activeTabIndicator).toHaveTextContent('Active tab: deprecated');

    // Test that disabled "Inactive" tab doesn't change state when clicked
    const inactiveTab = canvas.getByText('Inactive');
    await userEvent.click(inactiveTab);
    await expect(activeTabIndicator).toHaveTextContent('Active tab: deprecated');

    // Reset to initial state
    const allTab = canvas.getByText('All');
    await userEvent.click(allTab);
    await expect(activeTabIndicator).toHaveTextContent('Active tab: all');
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};