import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-foGZe_Iu.js";import{D as n}from"./ds-smart-tabs-D92HUsEe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMjPrJCW.js";import"./ds-icon-BH94ZUSb.js";const{expect:e,userEvent:i,within:d}=__STORYBOOK_MODULE_TEST__,B={title:"Design System/SmartTabs",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{activeTab:{control:"text",description:"Currently active tab value"},onTabClick:{action:"tab clicked",description:"Callback function when a tab is clicked"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Inline styles to apply to the component"}}},o={render:function(){const[t,c]=b.useState("all");return a.jsxs("div",{children:[a.jsxs(n,{activeTab:t,onTabClick:c,children:[a.jsx(n.Tab,{label:"All",value:"all",icon:"view_apps",color:"dark-blue",content:"747"}),a.jsx(n.Tab,{label:"Active",value:"active",icon:"check_circle",color:"green",content:"198"}),a.jsx(n.Tab,{label:"Deprecated",value:"deprecated",icon:"notifications",color:"red",content:"202"}),a.jsx(n.Tab,{label:"Inactive",value:"inactive",icon:"stop_circle",color:"gray",content:"347",disabled:!0})]}),a.jsx("div",{role:"status","aria-label":"Active tab",style:{marginTop:"20px",padding:"16px",background:"#f5f5f5",borderRadius:"4px"},children:a.jsxs("p",{children:["Active tab: ",a.jsx("strong",{children:t})]})})]})},play:async({canvasElement:s})=>{const t=d(s);await e(t.getByText("All")).toBeInTheDocument(),await e(t.getByText("Active")).toBeInTheDocument(),await e(t.getByText("Deprecated")).toBeInTheDocument(),await e(t.getByText("Inactive")).toBeInTheDocument(),await e(t.getByText("747")).toBeInTheDocument(),await e(t.getByText("198")).toBeInTheDocument(),await e(t.getByText("202")).toBeInTheDocument(),await e(t.getByText("347")).toBeInTheDocument();const c=t.getByRole("status",{name:/active tab/i});await e(c).toHaveTextContent("Active tab: all");const l=t.getByText("Active");await i.click(l),await e(c).toHaveTextContent("Active tab: active");const r=t.getByText("Deprecated");await i.click(r),await e(c).toHaveTextContent("Active tab: deprecated");const v=t.getByText("Inactive");await i.click(v),await e(c).toHaveTextContent("Active tab: deprecated");const T=t.getByText("All");await i.click(T),await e(c).toHaveTextContent("Active tab: all")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,B as default};
