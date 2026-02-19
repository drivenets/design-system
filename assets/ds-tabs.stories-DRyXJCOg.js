import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-B1gKZKuc.js";import{D as t}from"./ds-tabs-C0FvXPsH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CI5Pb9HH.js";import"./tabs-root-Sq-7L3Oi.js";import"./use-locale-context-DyIBVjNs.js";import"./index-1kKNXetD.js";import"./index-DOIMq0Xz.js";import"./index-CcgyKgzY.js";import"./create-split-props-u5h9OPvL.js";import"./render-strategy-CUHot7jz.js";import"./use-presence-C-RUHWbh.js";import"./ds-icon-DIuKbzlJ.js";import"./ds-tooltip-DSmxXcvB.js";import"./index-CrebszRC.js";import"./index-BhARklHb.js";import"./index-BBSc6elT.js";import"./index-C2B67tLG.js";import"./index-BQu11pnq.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-D5ZZ1tXY.js";import"./ds-typography-BbSFr2sw.js";import"./index-HtJxfs_E.js";import"./ds-dropdown-menu-B3iEF_rC.js";import"./Combination-FapkOjAp.js";import"./ds-text-input-C8rTfu1S.js";import"./portal-CQe6VJ_y.js";import"./index-BXFvYyHV.js";import"./index-Bs81qYQ6.js";const w="_container_ci8i1_1",A="_verticalContainer_ci8i1_6",S="_content_ci8i1_12",n={container:w,verticalContainer:A,content:S},{expect:i,fn:R,userEvent:r,waitFor:f,within:u}=__STORYBOOK_MODULE_TEST__,ie={title:"Design System/Tabs",component:t.Root,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"],description:"Tab orientation"},size:{control:"radio",options:["medium","small"],description:"Tab size"}}},h={args:{orientation:"horizontal",size:"medium"},render:function(a){const[c,l]=v.useState("overview");return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:c,onValueChange:s=>l(s??"overview"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"overview",label:"Overview",icon:"dashboard"}),e.jsx(t.Tab,{value:"analytics",label:"Analytics",icon:"analytics",badge:12}),e.jsx(t.Tab,{value:"reports",label:"Reports",icon:"description",badge:5}),e.jsx(t.Tab,{value:"settings",label:"Settings",icon:"settings"})]}),e.jsx(t.Content,{value:"overview",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Overview"}),e.jsx("p",{children:"View your dashboard overview and key metrics."})]})}),e.jsx(t.Content,{value:"analytics",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Analytics"}),e.jsx("p",{children:"Detailed analytics and performance data (12 new insights)."})]})}),e.jsx(t.Content,{value:"reports",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Reports"}),e.jsx("p",{children:"Access and manage your reports (5 pending)."})]})}),e.jsx(t.Content,{value:"settings",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Settings"}),e.jsx("p",{children:"Configure your application settings."})]})})]})})},play:async({canvasElement:o})=>{const a=u(o);await i(a.getByRole("tab",{name:/Overview/i})).toHaveAttribute("aria-selected","true"),await i(a.getByText(/View your dashboard overview/i)).toBeInTheDocument(),await r.click(a.getByRole("tab",{name:/Analytics/i})),await i(a.getByRole("tab",{name:/Analytics/i})).toHaveAttribute("aria-selected","true"),await i(a.getByText(/Detailed analytics and performance data/i)).toBeInTheDocument()}},p={args:{size:"small",orientation:"horizontal"},render:function(a){const[c,l]=v.useState("dashboard");return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:c,onValueChange:s=>l(s??"dashboard"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"dashboard",label:"Dashboard",icon:"dashboard"}),e.jsx(t.Tab,{value:"analytics",label:"Analytics",icon:"bar_chart",badge:12}),e.jsx(t.Tab,{value:"reports",label:"Reports",icon:"description",badge:5}),e.jsx(t.Tab,{value:"settings",label:"Settings",icon:"settings"})]}),e.jsx(t.Content,{value:"dashboard",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Dashboard"}),e.jsx("p",{children:"Welcome to your dashboard overview."})]})}),e.jsx(t.Content,{value:"analytics",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Analytics"}),e.jsx("p",{children:"View analytics and performance data. 12 new insights available."})]})}),e.jsx(t.Content,{value:"reports",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Reports"}),e.jsx("p",{children:"View and generate reports. 5 new reports available."})]})}),e.jsx(t.Content,{value:"settings",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Settings"}),e.jsx("p",{children:"Configure your application settings."})]})})]})})},play:async({canvasElement:o})=>{const a=u(o);await i(a.getByRole("tab",{name:/Dashboard/i})).toHaveAttribute("aria-selected","true"),await r.click(a.getByRole("tab",{name:/Reports/i})),await i(a.getByRole("tab",{name:/Reports/i})).toHaveAttribute("aria-selected","true")}},m=R(),g={args:{orientation:"horizontal",size:"medium"},render:function(a){const[c,l]=v.useState("tab1"),s=[{value:"edit",label:"Edit"},{value:"duplicate",label:"Duplicate"},{value:"share",label:"Share"},{value:"delete",label:"Delete"}];return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:c,onValueChange:d=>l(d??"tab1"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"tab1",label:"Projects",icon:"folder",badge:5,menuActionItems:s,onMenuActionSelect:m}),e.jsx(t.Tab,{value:"tab2",label:"Documents",icon:"description",badge:12,menuActionItems:s,onMenuActionSelect:m}),e.jsx(t.Tab,{value:"tab3",label:"Settings",icon:"settings",menuActionItems:s,onMenuActionSelect:m})]}),e.jsx(t.Content,{value:"tab1",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Projects"}),e.jsx("p",{children:"Click the dropdown icon on tabs to see menu actions"})]})}),e.jsx(t.Content,{value:"tab2",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Documents"}),e.jsx("p",{children:"12 documents available"})]})}),e.jsx(t.Content,{value:"tab3",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Settings"}),e.jsx("p",{children:"Configure your preferences"})]})})]})})},play:async({canvas:o})=>{const a=u(document.body),c=o.getAllByRole("tab");await i(c[0]).toHaveAttribute("aria-selected","true");const l=c[0];if(l){const s=u(l).getByRole("button",{name:/open menu/i});s.focus(),await r.keyboard("{Enter}"),await f(()=>i(s).toHaveAttribute("aria-expanded","true"));const d=await a.findByRole("menuitem",{name:/Edit/i});await i(d).toBeInTheDocument(),await r.click(d),await i(m).toHaveBeenCalledWith("edit"),await i(s).toHaveAttribute("aria-expanded","false"),s.focus(),await r.keyboard(" "),await f(()=>i(s).toHaveAttribute("aria-expanded","true"));const b=await a.findByRole("menuitem",{name:/Duplicate/i});await i(b).toBeInTheDocument(),await r.click(b),await i(m).toHaveBeenCalledWith("duplicate")}}},y={args:{orientation:"vertical",size:"medium"},render:function(a){const[c,l]=v.useState("profile");return e.jsx("div",{className:n.verticalContainer,children:e.jsxs(t.Root,{...a,value:c,onValueChange:s=>l(s??"profile"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"profile",label:"Profile",icon:"person"}),e.jsx(t.Tab,{value:"security",label:"Security",icon:"lock",badge:3}),e.jsx(t.Tab,{value:"notifications",label:"Notifications",icon:"notifications",badge:15}),e.jsx(t.Tab,{value:"billing",label:"Billing",icon:"credit_card"}),e.jsx(t.Tab,{value:"team",label:"Team",icon:"group"})]}),e.jsx(t.Content,{value:"profile",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Profile Settings"}),e.jsx("p",{children:"Manage your profile information and preferences."})]})}),e.jsx(t.Content,{value:"security",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Security"}),e.jsx("p",{children:"Configure security settings and two-factor authentication (3 recommendations)."})]})}),e.jsx(t.Content,{value:"notifications",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Notifications"}),e.jsx("p",{children:"Manage notification preferences and channels (15 unread)."})]})}),e.jsx(t.Content,{value:"billing",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Billing"}),e.jsx("p",{children:"View invoices and manage payment methods."})]})}),e.jsx(t.Content,{value:"team",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Team Management"}),e.jsx("p",{children:"Invite team members and manage permissions."})]})})]})})},play:async({canvasElement:o})=>{const a=u(o);await i(a.getByRole("tab",{name:/Profile/i})).toHaveAttribute("aria-selected","true"),await r.click(a.getByRole("tab",{name:/Notifications/i})),await i(a.getByRole("tab",{name:/Notifications/i})).toHaveAttribute("aria-selected","true"),await i(a.getByText(/Manage notification preferences/i)).toBeInTheDocument()}},T={args:{orientation:"vertical",size:"small"},render:function(a){const[c,l]=v.useState("general");return e.jsx("div",{className:n.verticalContainer,children:e.jsxs(t.Root,{...a,value:c,onValueChange:s=>l(s??"general"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"general",label:"General",icon:"settings"}),e.jsx(t.Tab,{value:"account",label:"Account",icon:"person"}),e.jsx(t.Tab,{value:"privacy",label:"Privacy",icon:"lock",badge:2}),e.jsx(t.Tab,{value:"appearance",label:"Appearance",icon:"palette"}),e.jsx(t.Tab,{value:"advanced",label:"Advanced",icon:"tune"})]}),e.jsx(t.Content,{value:"general",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"General Settings"}),e.jsx("p",{children:"Configure general application settings and preferences."})]})}),e.jsx(t.Content,{value:"account",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Account"}),e.jsx("p",{children:"Manage your account details and information."})]})}),e.jsx(t.Content,{value:"privacy",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Privacy"}),e.jsx("p",{children:"Control your privacy settings and data sharing (2 recommendations)."})]})}),e.jsx(t.Content,{value:"appearance",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Appearance"}),e.jsx("p",{children:"Customize the look and feel of the application."})]})}),e.jsx(t.Content,{value:"advanced",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Advanced"}),e.jsx("p",{children:"Advanced configuration options for power users."})]})})]})})},play:async({canvasElement:o})=>{const a=u(o);await i(a.getByRole("tab",{name:/General/i})).toHaveAttribute("aria-selected","true"),await r.click(a.getByRole("tab",{name:/Privacy/i})),await i(a.getByRole("tab",{name:/Privacy/i})).toHaveAttribute("aria-selected","true"),await i(a.getByText(/Control your privacy settings/i)).toBeInTheDocument()}},x={args:{orientation:"vertical",size:"medium"},render:function(a){const[c,l]=v.useState("profile"),s=[{value:"edit",label:"Edit"},{value:"duplicate",label:"Duplicate"},{value:"archive",label:"Archive"},{value:"delete",label:"Delete"}],d=b=>{console.log("Menu action selected:",b)};return e.jsx("div",{className:n.verticalContainer,children:e.jsxs(t.Root,{...a,value:c,onValueChange:b=>l(b??"profile"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"profile",label:"Profile",icon:"person",menuActionItems:s,onMenuActionSelect:d}),e.jsx(t.Tab,{value:"security",label:"Security",icon:"lock",badge:3,menuActionItems:s,onMenuActionSelect:d}),e.jsx(t.Tab,{value:"notifications",label:"Notifications",icon:"notifications",badge:15,menuActionItems:s,onMenuActionSelect:d}),e.jsx(t.Tab,{value:"billing",label:"Billing",icon:"credit_card",menuActionItems:s,onMenuActionSelect:d}),e.jsx(t.Tab,{value:"team",label:"Team",icon:"group",menuActionItems:s,onMenuActionSelect:d})]}),e.jsx(t.Content,{value:"profile",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Profile Settings"}),e.jsx("p",{children:"Manage your profile information and preferences. Click the dropdown icon on tabs to see menu actions."})]})}),e.jsx(t.Content,{value:"security",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Security"}),e.jsx("p",{children:"Configure security settings and two-factor authentication (3 recommendations)."})]})}),e.jsx(t.Content,{value:"notifications",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Notifications"}),e.jsx("p",{children:"Manage notification preferences and channels (15 unread)."})]})}),e.jsx(t.Content,{value:"billing",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Billing"}),e.jsx("p",{children:"View invoices and manage payment methods."})]})}),e.jsx(t.Content,{value:"team",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Team Management"}),e.jsx("p",{children:"Invite team members and manage permissions."})]})})]})})},play:async({canvasElement:o})=>{const a=u(o);await i(a.getByRole("tab",{name:/Profile/i})).toHaveAttribute("aria-selected","true"),await r.click(a.getByRole("tab",{name:/Security/i})),await i(a.getByRole("tab",{name:/Security/i})).toHaveAttribute("aria-selected","true");const l=a.getByRole("tab",{name:/Security/i}).querySelector('[role="button"][aria-label="Open menu"]');if(l){await r.click(l);const s=await u(document.body).findByRole("menuitem",{name:/Edit/i});await i(s).toBeInTheDocument()}}},j={render:function(a){const[c,l]=v.useState("active1");return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:c,onValueChange:s=>l(s??"active1"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"active1",label:"Active",icon:"check_circle"}),e.jsx(t.Tab,{value:"disabled1",label:"Disabled",icon:"block",disabled:!0}),e.jsx(t.Tab,{value:"active2",label:"Active",icon:"check_circle",badge:5}),e.jsx(t.Tab,{value:"disabled2",label:"Disabled",icon:"block",disabled:!0})]}),e.jsx(t.Content,{value:"active1",children:e.jsx("div",{className:n.content,children:"Active tab 1 content"})}),e.jsx(t.Content,{value:"disabled1",children:e.jsx("div",{className:n.content,children:"This content should not be accessible"})}),e.jsx(t.Content,{value:"active2",children:e.jsx("div",{className:n.content,children:"Active tab 2 content"})}),e.jsx(t.Content,{value:"disabled2",children:e.jsx("div",{className:n.content,children:"This content should not be accessible"})})]})})},play:async({canvasElement:o})=>{const c=u(o).getAllByRole("tab",{queryFallbacks:!0}),l=c.filter(d=>d.hasAttribute("disabled")),s=c[0];await i(s).toHaveAttribute("aria-selected","true"),l[0]&&await r.click(l[0]),await i(s).toHaveAttribute("aria-selected","true")}},D={render:function(a){const[c,l]=v.useState("home");return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:c,onValueChange:s=>l(s??"home"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"home",label:"Home"}),e.jsx(t.Tab,{value:"products",label:"Products",badge:23}),e.jsx(t.Tab,{value:"services",label:"Services"}),e.jsx(t.Tab,{value:"contact",label:"Contact"})]}),e.jsx(t.Content,{value:"home",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Home"}),e.jsx("p",{children:"Welcome to the home page."})]})}),e.jsx(t.Content,{value:"products",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Products"}),e.jsx("p",{children:"Browse our product catalog (23 items)."})]})}),e.jsx(t.Content,{value:"services",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Services"}),e.jsx("p",{children:"Learn about our services."})]})}),e.jsx(t.Content,{value:"contact",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Contact Us"}),e.jsx("p",{children:"Get in touch with our team."})]})})]})})},play:async({canvasElement:o})=>{const a=u(o);await i(a.getByRole("tab",{name:/Home/i})).toHaveAttribute("aria-selected","true"),await r.click(a.getByRole("tab",{name:/Products/i})),await i(a.getByRole("tab",{name:/Products/i})).toHaveAttribute("aria-selected","true")}},C={render:function(a){const[c,l]=v.useState("dashboard");return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:c,onValueChange:s=>l(s??"dashboard"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"dashboard",label:"Dashboard",icon:"dashboard",tooltip:"View your dashboard overview"}),e.jsx(t.Tab,{value:"analytics",label:"Analytics",icon:"analytics",badge:12,tooltip:"Analytics and insights"}),e.jsx(t.Tab,{value:"reports",label:"Reports",icon:"description",badge:5,tooltip:"Generate and view reports"}),e.jsx(t.Tab,{value:"settings",label:"Settings",icon:"settings",tooltip:"Configure application settings"})]}),e.jsx(t.Content,{value:"dashboard",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Dashboard"}),e.jsx("p",{children:"View your dashboard overview (hover tabs to see tooltips)"})]})}),e.jsx(t.Content,{value:"analytics",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Analytics"}),e.jsx("p",{children:"12 new insights available"})]})}),e.jsx(t.Content,{value:"reports",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Reports"}),e.jsx("p",{children:"5 reports pending review"})]})}),e.jsx(t.Content,{value:"settings",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Settings"}),e.jsx("p",{children:"Configure your application"})]})})]})})},play:async({canvasElement:o})=>{const a=u(o);await r.hover(a.getByRole("tab",{name:/Analytics/i}));const c=await u(document.body).findByRole("tooltip");await i(c).toHaveTextContent(/Analytics and insights/i)}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    size: 'medium'
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('overview');
    return <div className={styles.container}>
                <DsTabs.Root {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'overview')}>
                    <DsTabs.List>
                        <DsTabs.Tab value="overview" label="Overview" icon="dashboard" />
                        <DsTabs.Tab value="analytics" label="Analytics" icon="analytics" badge={12} />
                        <DsTabs.Tab value="reports" label="Reports" icon="description" badge={5} />
                        <DsTabs.Tab value="settings" label="Settings" icon="settings" />
                    </DsTabs.List>

                    <DsTabs.Content value="overview">
                        <div className={styles.content}>
                            <h3>Overview</h3>
                            <p>View your dashboard overview and key metrics.</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="analytics">
                        <div className={styles.content}>
                            <h3>Analytics</h3>
                            <p>Detailed analytics and performance data (12 new insights).</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="reports">
                        <div className={styles.content}>
                            <h3>Reports</h3>
                            <p>Access and manage your reports (5 pending).</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="settings">
                        <div className={styles.content}>
                            <h3>Settings</h3>
                            <p>Configure your application settings.</p>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('tab', {
      name: /Overview/i
    })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText(/View your dashboard overview/i)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', {
      name: /Analytics/i
    }));
    await expect(canvas.getByRole('tab', {
      name: /Analytics/i
    })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText(/Detailed analytics and performance data/i)).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    orientation: 'horizontal'
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('dashboard');
    return <div className={styles.container}>
                <DsTabs.Root {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'dashboard')}>
                    <DsTabs.List>
                        <DsTabs.Tab value="dashboard" label="Dashboard" icon="dashboard" />
                        <DsTabs.Tab value="analytics" label="Analytics" icon="bar_chart" badge={12} />
                        <DsTabs.Tab value="reports" label="Reports" icon="description" badge={5} />
                        <DsTabs.Tab value="settings" label="Settings" icon="settings" />
                    </DsTabs.List>

                    <DsTabs.Content value="dashboard">
                        <div className={styles.content}>
                            <h3>Dashboard</h3>
                            <p>Welcome to your dashboard overview.</p>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="analytics">
                        <div className={styles.content}>
                            <h3>Analytics</h3>
                            <p>View analytics and performance data. 12 new insights available.</p>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="reports">
                        <div className={styles.content}>
                            <h3>Reports</h3>
                            <p>View and generate reports. 5 new reports available.</p>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="settings">
                        <div className={styles.content}>
                            <h3>Settings</h3>
                            <p>Configure your application settings.</p>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('tab', {
      name: /Dashboard/i
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(canvas.getByRole('tab', {
      name: /Reports/i
    }));
    await expect(canvas.getByRole('tab', {
      name: /Reports/i
    })).toHaveAttribute('aria-selected', 'true');
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    size: 'medium'
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('tab1');
    const menuActions: DsTabsMenuActionItem[] = [{
      value: 'edit',
      label: 'Edit'
    }, {
      value: 'duplicate',
      label: 'Duplicate'
    }, {
      value: 'share',
      label: 'Share'
    }, {
      value: 'delete',
      label: 'Delete'
    }];
    return <div className={styles.container}>
                <DsTabs.Root {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'tab1')}>
                    <DsTabs.List>
                        <DsTabs.Tab value="tab1" label="Projects" icon="folder" badge={5} menuActionItems={menuActions} onMenuActionSelect={handleMenuActionMock} />
                        <DsTabs.Tab value="tab2" label="Documents" icon="description" badge={12} menuActionItems={menuActions} onMenuActionSelect={handleMenuActionMock} />
                        <DsTabs.Tab value="tab3" label="Settings" icon="settings" menuActionItems={menuActions} onMenuActionSelect={handleMenuActionMock} />
                    </DsTabs.List>

                    <DsTabs.Content value="tab1">
                        <div className={styles.content}>
                            <h3>Projects</h3>
                            <p>Click the dropdown icon on tabs to see menu actions</p>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="tab2">
                        <div className={styles.content}>
                            <h3>Documents</h3>
                            <p>12 documents available</p>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="tab3">
                        <div className={styles.content}>
                            <h3>Settings</h3>
                            <p>Configure your preferences</p>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const body = within(document.body);
    const tabs = canvas.getAllByRole('tab');
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    const firstTab: HTMLElement | undefined = tabs[0];
    if (firstTab) {
      const menuButton = within(firstTab).getByRole('button', {
        name: /open menu/i
      });
      // Test keyboard interaction - Enter key opens menu
      menuButton.focus();
      await userEvent.keyboard('{Enter}');
      await waitFor(() => expect(menuButton).toHaveAttribute('aria-expanded', 'true'));
      const editAction = await body.findByRole('menuitem', {
        name: /Edit/i
      });
      await expect(editAction).toBeInTheDocument();

      // Select menu item and verify callback + menu closes
      await userEvent.click(editAction);
      await expect(handleMenuActionMock).toHaveBeenCalledWith('edit');
      await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      // Test Space key also toggles menu
      menuButton.focus();
      await userEvent.keyboard(' ');
      await waitFor(() => expect(menuButton).toHaveAttribute('aria-expanded', 'true'));
      const duplicateAction = await body.findByRole('menuitem', {
        name: /Duplicate/i
      });
      await expect(duplicateAction).toBeInTheDocument();
      await userEvent.click(duplicateAction);
      await expect(handleMenuActionMock).toHaveBeenCalledWith('duplicate');
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    size: 'medium'
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('profile');
    return <div className={styles.verticalContainer}>
                <DsTabs.Root {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'profile')}>
                    <DsTabs.List>
                        <DsTabs.Tab value="profile" label="Profile" icon="person" />
                        <DsTabs.Tab value="security" label="Security" icon="lock" badge={3} />
                        <DsTabs.Tab value="notifications" label="Notifications" icon="notifications" badge={15} />
                        <DsTabs.Tab value="billing" label="Billing" icon="credit_card" />
                        <DsTabs.Tab value="team" label="Team" icon="group" />
                    </DsTabs.List>

                    <DsTabs.Content value="profile">
                        <div className={styles.content}>
                            <h3>Profile Settings</h3>
                            <p>Manage your profile information and preferences.</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="security">
                        <div className={styles.content}>
                            <h3>Security</h3>
                            <p>Configure security settings and two-factor authentication (3 recommendations).</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="notifications">
                        <div className={styles.content}>
                            <h3>Notifications</h3>
                            <p>Manage notification preferences and channels (15 unread).</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="billing">
                        <div className={styles.content}>
                            <h3>Billing</h3>
                            <p>View invoices and manage payment methods.</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="team">
                        <div className={styles.content}>
                            <h3>Team Management</h3>
                            <p>Invite team members and manage permissions.</p>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('tab', {
      name: /Profile/i
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(canvas.getByRole('tab', {
      name: /Notifications/i
    }));
    await expect(canvas.getByRole('tab', {
      name: /Notifications/i
    })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText(/Manage notification preferences/i)).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    size: 'small'
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('general');
    return <div className={styles.verticalContainer}>
                <DsTabs.Root {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'general')}>
                    <DsTabs.List>
                        <DsTabs.Tab value="general" label="General" icon="settings" />
                        <DsTabs.Tab value="account" label="Account" icon="person" />
                        <DsTabs.Tab value="privacy" label="Privacy" icon="lock" badge={2} />
                        <DsTabs.Tab value="appearance" label="Appearance" icon="palette" />
                        <DsTabs.Tab value="advanced" label="Advanced" icon="tune" />
                    </DsTabs.List>

                    <DsTabs.Content value="general">
                        <div className={styles.content}>
                            <h3>General Settings</h3>
                            <p>Configure general application settings and preferences.</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="account">
                        <div className={styles.content}>
                            <h3>Account</h3>
                            <p>Manage your account details and information.</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="privacy">
                        <div className={styles.content}>
                            <h3>Privacy</h3>
                            <p>Control your privacy settings and data sharing (2 recommendations).</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="appearance">
                        <div className={styles.content}>
                            <h3>Appearance</h3>
                            <p>Customize the look and feel of the application.</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="advanced">
                        <div className={styles.content}>
                            <h3>Advanced</h3>
                            <p>Advanced configuration options for power users.</p>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('tab', {
      name: /General/i
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(canvas.getByRole('tab', {
      name: /Privacy/i
    }));
    await expect(canvas.getByRole('tab', {
      name: /Privacy/i
    })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText(/Control your privacy settings/i)).toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    size: 'medium'
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('profile');
    const menuActions: DsTabsMenuActionItem[] = [{
      value: 'edit',
      label: 'Edit'
    }, {
      value: 'duplicate',
      label: 'Duplicate'
    }, {
      value: 'archive',
      label: 'Archive'
    }, {
      value: 'delete',
      label: 'Delete'
    }];
    const handleMenuAction = (action: string) => {
      console.log('Menu action selected:', action);
    };
    return <div className={styles.verticalContainer}>
                <DsTabs.Root {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'profile')}>
                    <DsTabs.List>
                        <DsTabs.Tab value="profile" label="Profile" icon="person" menuActionItems={menuActions} onMenuActionSelect={handleMenuAction} />
                        <DsTabs.Tab value="security" label="Security" icon="lock" badge={3} menuActionItems={menuActions} onMenuActionSelect={handleMenuAction} />
                        <DsTabs.Tab value="notifications" label="Notifications" icon="notifications" badge={15} menuActionItems={menuActions} onMenuActionSelect={handleMenuAction} />
                        <DsTabs.Tab value="billing" label="Billing" icon="credit_card" menuActionItems={menuActions} onMenuActionSelect={handleMenuAction} />
                        <DsTabs.Tab value="team" label="Team" icon="group" menuActionItems={menuActions} onMenuActionSelect={handleMenuAction} />
                    </DsTabs.List>

                    <DsTabs.Content value="profile">
                        <div className={styles.content}>
                            <h3>Profile Settings</h3>
                            <p>
                                Manage your profile information and preferences. Click the dropdown icon on tabs to see menu
                                actions.
                            </p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="security">
                        <div className={styles.content}>
                            <h3>Security</h3>
                            <p>Configure security settings and two-factor authentication (3 recommendations).</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="notifications">
                        <div className={styles.content}>
                            <h3>Notifications</h3>
                            <p>Manage notification preferences and channels (15 unread).</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="billing">
                        <div className={styles.content}>
                            <h3>Billing</h3>
                            <p>View invoices and manage payment methods.</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="team">
                        <div className={styles.content}>
                            <h3>Team Management</h3>
                            <p>Invite team members and manage permissions.</p>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('tab', {
      name: /Profile/i
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(canvas.getByRole('tab', {
      name: /Security/i
    }));
    await expect(canvas.getByRole('tab', {
      name: /Security/i
    })).toHaveAttribute('aria-selected', 'true');
    const securityTab = canvas.getByRole('tab', {
      name: /Security/i
    });
    const menuButton = securityTab.querySelector('[role="button"][aria-label="Open menu"]');
    if (menuButton) {
      await userEvent.click(menuButton);
      const editAction = await within(document.body).findByRole('menuitem', {
        name: /Edit/i
      });
      await expect(editAction).toBeInTheDocument();
    }
  }
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState('active1');
    return <div className={styles.container}>
                <DsTabs.Root {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'active1')}>
                    <DsTabs.List>
                        <DsTabs.Tab value="active1" label="Active" icon="check_circle" />
                        <DsTabs.Tab value="disabled1" label="Disabled" icon="block" disabled />
                        <DsTabs.Tab value="active2" label="Active" icon="check_circle" badge={5} />
                        <DsTabs.Tab value="disabled2" label="Disabled" icon="block" disabled />
                    </DsTabs.List>

                    <DsTabs.Content value="active1">
                        <div className={styles.content}>Active tab 1 content</div>
                    </DsTabs.Content>
                    <DsTabs.Content value="disabled1">
                        <div className={styles.content}>This content should not be accessible</div>
                    </DsTabs.Content>
                    <DsTabs.Content value="active2">
                        <div className={styles.content}>Active tab 2 content</div>
                    </DsTabs.Content>
                    <DsTabs.Content value="disabled2">
                        <div className={styles.content}>This content should not be accessible</div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const allTabs = canvas.getAllByRole('tab', {
      queryFallbacks: true
    });
    const disabledTabs = allTabs.filter(t => t.hasAttribute('disabled'));
    const firstActiveTab = allTabs[0];
    await expect(firstActiveTab).toHaveAttribute('aria-selected', 'true');
    if (disabledTabs[0]) {
      await userEvent.click(disabledTabs[0]);
    }
    await expect(firstActiveTab).toHaveAttribute('aria-selected', 'true');
  }
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState('home');
    return <div className={styles.container}>
                <DsTabs.Root {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'home')}>
                    <DsTabs.List>
                        <DsTabs.Tab value="home" label="Home" />
                        <DsTabs.Tab value="products" label="Products" badge={23} />
                        <DsTabs.Tab value="services" label="Services" />
                        <DsTabs.Tab value="contact" label="Contact" />
                    </DsTabs.List>

                    <DsTabs.Content value="home">
                        <div className={styles.content}>
                            <h3>Home</h3>
                            <p>Welcome to the home page.</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="products">
                        <div className={styles.content}>
                            <h3>Products</h3>
                            <p>Browse our product catalog (23 items).</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="services">
                        <div className={styles.content}>
                            <h3>Services</h3>
                            <p>Learn about our services.</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="contact">
                        <div className={styles.content}>
                            <h3>Contact Us</h3>
                            <p>Get in touch with our team.</p>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('tab', {
      name: /Home/i
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(canvas.getByRole('tab', {
      name: /Products/i
    }));
    await expect(canvas.getByRole('tab', {
      name: /Products/i
    })).toHaveAttribute('aria-selected', 'true');
  }
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState('dashboard');
    return <div className={styles.container}>
                <DsTabs.Root {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'dashboard')}>
                    <DsTabs.List>
                        <DsTabs.Tab value="dashboard" label="Dashboard" icon="dashboard" tooltip="View your dashboard overview" />
                        <DsTabs.Tab value="analytics" label="Analytics" icon="analytics" badge={12} tooltip="Analytics and insights" />
                        <DsTabs.Tab value="reports" label="Reports" icon="description" badge={5} tooltip="Generate and view reports" />
                        <DsTabs.Tab value="settings" label="Settings" icon="settings" tooltip="Configure application settings" />
                    </DsTabs.List>

                    <DsTabs.Content value="dashboard">
                        <div className={styles.content}>
                            <h3>Dashboard</h3>
                            <p>View your dashboard overview (hover tabs to see tooltips)</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="analytics">
                        <div className={styles.content}>
                            <h3>Analytics</h3>
                            <p>12 new insights available</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="reports">
                        <div className={styles.content}>
                            <h3>Reports</h3>
                            <p>5 reports pending review</p>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="settings">
                        <div className={styles.content}>
                            <h3>Settings</h3>
                            <p>Configure your application</p>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('tab', {
      name: /Analytics/i
    }));
    const tooltip = await within(document.body).findByRole('tooltip');
    await expect(tooltip).toHaveTextContent(/Analytics and insights/i);
  }
}`,...C.parameters?.docs?.source}}};const oe=["Default","HorizontalSmall","WithMenuActions","Vertical","VerticalSmall","VerticalWithMenuActions","WithDisabled","TextOnly","WithTooltips"];export{h as Default,p as HorizontalSmall,D as TextOnly,y as Vertical,T as VerticalSmall,x as VerticalWithMenuActions,j as WithDisabled,g as WithMenuActions,C as WithTooltips,oe as __namedExportsOrder,ie as default};
