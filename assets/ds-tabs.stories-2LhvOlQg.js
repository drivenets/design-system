import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BgPYpvu3.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./ds-tabs-Ck4974TA.js";var o,s,c,l,u,d,f,p,m=t((()=>{o=`_container_n6xav_1`,s=`_verticalContainer_n6xav_6`,c=`_content_n6xav_12`,l=`_customTab_n6xav_25`,u=`_customIcon_n6xav_31`,d=`_customBadge_n6xav_35`,f=`_customCount_n6xav_45`,p={container:o,verticalContainer:s,content:c,customTab:l,customIcon:u,customBadge:d,customCount:f}})),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;t((()=>{h=e(n(),1),i(),m(),g=r(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Tabs`,component:a.Root,parameters:{layout:`centered`},argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`],description:`Tab orientation`},size:{control:`radio`,options:[`medium`,`small`],description:`Tab size`}}},C={args:{orientation:`horizontal`,size:`medium`},render:function(e){let[t,n]=(0,h.useState)(`overview`);return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`overview`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`overview`,label:`Overview`,icon:`dashboard`}),(0,g.jsx)(a.Tab,{value:`analytics`,label:`Analytics`,icon:`analytics`,badge:12}),(0,g.jsx)(a.Tab,{value:`reports`,label:`Reports`,icon:`description`,badge:5}),(0,g.jsx)(a.Tab,{value:`settings`,label:`Settings`,icon:`settings`})]}),(0,g.jsx)(a.Content,{value:`overview`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Overview`}),(0,g.jsx)(`p`,{children:`View your dashboard overview and key metrics.`})]})}),(0,g.jsx)(a.Content,{value:`analytics`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Analytics`}),(0,g.jsx)(`p`,{children:`Detailed analytics and performance data (12 new insights).`})]})}),(0,g.jsx)(a.Content,{value:`reports`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Reports`}),(0,g.jsx)(`p`,{children:`Access and manage your reports (5 pending).`})]})}),(0,g.jsx)(a.Content,{value:`settings`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Settings`}),(0,g.jsx)(`p`,{children:`Configure your application settings.`})]})})]})})},play:async({canvasElement:e})=>{let t=x(e);await _(t.getByRole(`tab`,{name:/Overview/i})).toHaveAttribute(`aria-selected`,`true`),await _(t.getByText(/View your dashboard overview/i)).toBeInTheDocument(),await y.click(t.getByRole(`tab`,{name:/Analytics/i})),await _(t.getByRole(`tab`,{name:/Analytics/i})).toHaveAttribute(`aria-selected`,`true`),await _(t.getByText(/Detailed analytics and performance data/i)).toBeInTheDocument()}},w={args:{size:`small`,orientation:`horizontal`},render:function(e){let[t,n]=(0,h.useState)(`dashboard`);return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`dashboard`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`dashboard`,label:`Dashboard`,icon:`dashboard`}),(0,g.jsx)(a.Tab,{value:`analytics`,label:`Analytics`,icon:`bar_chart`,badge:12}),(0,g.jsx)(a.Tab,{value:`reports`,label:`Reports`,icon:`description`,badge:5}),(0,g.jsx)(a.Tab,{value:`settings`,label:`Settings`,icon:`settings`})]}),(0,g.jsx)(a.Content,{value:`dashboard`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Dashboard`}),(0,g.jsx)(`p`,{children:`Welcome to your dashboard overview.`})]})}),(0,g.jsx)(a.Content,{value:`analytics`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Analytics`}),(0,g.jsx)(`p`,{children:`View analytics and performance data. 12 new insights available.`})]})}),(0,g.jsx)(a.Content,{value:`reports`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Reports`}),(0,g.jsx)(`p`,{children:`View and generate reports. 5 new reports available.`})]})}),(0,g.jsx)(a.Content,{value:`settings`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Settings`}),(0,g.jsx)(`p`,{children:`Configure your application settings.`})]})})]})})},play:async({canvasElement:e})=>{let t=x(e);await _(t.getByRole(`tab`,{name:/Dashboard/i})).toHaveAttribute(`aria-selected`,`true`),await y.click(t.getByRole(`tab`,{name:/Reports/i})),await _(t.getByRole(`tab`,{name:/Reports/i})).toHaveAttribute(`aria-selected`,`true`)}},T=v(),E={args:{orientation:`horizontal`,size:`medium`},render:function(e){let[t,n]=(0,h.useState)(`tab1`),r=[{value:`edit`,label:`Edit`},{value:`duplicate`,label:`Duplicate`},{value:`share`,label:`Share`},{value:`delete`,label:`Delete`}];return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`tab1`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`tab1`,label:`Projects`,icon:`folder`,badge:5,menuActionItems:r,onMenuActionSelect:T}),(0,g.jsx)(a.Tab,{value:`tab2`,label:`Documents`,icon:`description`,badge:12,menuActionItems:r,onMenuActionSelect:T}),(0,g.jsx)(a.Tab,{value:`tab3`,label:`Settings`,icon:`settings`,menuActionItems:r,onMenuActionSelect:T})]}),(0,g.jsx)(a.Content,{value:`tab1`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Projects`}),(0,g.jsx)(`p`,{children:`Click the dropdown icon on tabs to see menu actions`})]})}),(0,g.jsx)(a.Content,{value:`tab2`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Documents`}),(0,g.jsx)(`p`,{children:`12 documents available`})]})}),(0,g.jsx)(a.Content,{value:`tab3`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Settings`}),(0,g.jsx)(`p`,{children:`Configure your preferences`})]})})]})})},play:async({canvas:e})=>{let t=x(document.body),n=e.getAllByRole(`tab`);await _(n[0]).toHaveAttribute(`aria-selected`,`true`);let r=n[0];if(r){let e=x(r).getByRole(`button`,{name:/open menu/i});e.focus(),await y.keyboard(`{Enter}`),await b(()=>_(e).toHaveAttribute(`aria-expanded`,`true`));let n=await t.findByRole(`menuitem`,{name:/Edit/i});await _(n).toBeInTheDocument(),await y.click(n),await _(T).toHaveBeenCalledWith(`edit`),await _(e).toHaveAttribute(`aria-expanded`,`false`),e.focus(),await y.keyboard(` `),await b(()=>_(e).toHaveAttribute(`aria-expanded`,`true`));let i=await t.findByRole(`menuitem`,{name:/Duplicate/i});await _(i).toBeInTheDocument(),await y.click(i),await _(T).toHaveBeenCalledWith(`duplicate`)}}},D={args:{orientation:`vertical`,size:`medium`},render:function(e){let[t,n]=(0,h.useState)(`profile`);return(0,g.jsx)(`div`,{className:p.verticalContainer,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`profile`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`profile`,label:`Profile`,icon:`person`}),(0,g.jsx)(a.Tab,{value:`security`,label:`Security`,icon:`lock`,badge:3}),(0,g.jsx)(a.Tab,{value:`notifications`,label:`Notifications`,icon:`notifications`,badge:15}),(0,g.jsx)(a.Tab,{value:`billing`,label:`Billing`,icon:`credit_card`}),(0,g.jsx)(a.Tab,{value:`team`,label:`Team`,icon:`group`})]}),(0,g.jsx)(a.Content,{value:`profile`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Profile Settings`}),(0,g.jsx)(`p`,{children:`Manage your profile information and preferences.`})]})}),(0,g.jsx)(a.Content,{value:`security`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Security`}),(0,g.jsx)(`p`,{children:`Configure security settings and two-factor authentication (3 recommendations).`})]})}),(0,g.jsx)(a.Content,{value:`notifications`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Notifications`}),(0,g.jsx)(`p`,{children:`Manage notification preferences and channels (15 unread).`})]})}),(0,g.jsx)(a.Content,{value:`billing`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Billing`}),(0,g.jsx)(`p`,{children:`View invoices and manage payment methods.`})]})}),(0,g.jsx)(a.Content,{value:`team`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Team Management`}),(0,g.jsx)(`p`,{children:`Invite team members and manage permissions.`})]})})]})})},play:async({canvasElement:e})=>{let t=x(e);await _(t.getByRole(`tab`,{name:/Profile/i})).toHaveAttribute(`aria-selected`,`true`),await y.click(t.getByRole(`tab`,{name:/Notifications/i})),await _(t.getByRole(`tab`,{name:/Notifications/i})).toHaveAttribute(`aria-selected`,`true`),await _(t.getByText(/Manage notification preferences/i)).toBeInTheDocument()}},O={args:{orientation:`vertical`,size:`small`},render:function(e){let[t,n]=(0,h.useState)(`general`);return(0,g.jsx)(`div`,{className:p.verticalContainer,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`general`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`general`,label:`General`,icon:`settings`}),(0,g.jsx)(a.Tab,{value:`account`,label:`Account`,icon:`person`}),(0,g.jsx)(a.Tab,{value:`privacy`,label:`Privacy`,icon:`lock`,badge:2}),(0,g.jsx)(a.Tab,{value:`appearance`,label:`Appearance`,icon:`palette`}),(0,g.jsx)(a.Tab,{value:`advanced`,label:`Advanced`,icon:`tune`})]}),(0,g.jsx)(a.Content,{value:`general`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`General Settings`}),(0,g.jsx)(`p`,{children:`Configure general application settings and preferences.`})]})}),(0,g.jsx)(a.Content,{value:`account`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Account`}),(0,g.jsx)(`p`,{children:`Manage your account details and information.`})]})}),(0,g.jsx)(a.Content,{value:`privacy`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Privacy`}),(0,g.jsx)(`p`,{children:`Control your privacy settings and data sharing (2 recommendations).`})]})}),(0,g.jsx)(a.Content,{value:`appearance`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Appearance`}),(0,g.jsx)(`p`,{children:`Customize the look and feel of the application.`})]})}),(0,g.jsx)(a.Content,{value:`advanced`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Advanced`}),(0,g.jsx)(`p`,{children:`Advanced configuration options for power users.`})]})})]})})},play:async({canvasElement:e})=>{let t=x(e);await _(t.getByRole(`tab`,{name:/General/i})).toHaveAttribute(`aria-selected`,`true`),await y.click(t.getByRole(`tab`,{name:/Privacy/i})),await _(t.getByRole(`tab`,{name:/Privacy/i})).toHaveAttribute(`aria-selected`,`true`),await _(t.getByText(/Control your privacy settings/i)).toBeInTheDocument()}},k={args:{orientation:`vertical`,size:`medium`},render:function(e){let[t,n]=(0,h.useState)(`profile`),r=[{value:`edit`,label:`Edit`},{value:`duplicate`,label:`Duplicate`},{value:`archive`,label:`Archive`},{value:`delete`,label:`Delete`}],i=e=>{console.log(`Menu action selected:`,e)};return(0,g.jsx)(`div`,{className:p.verticalContainer,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`profile`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`profile`,label:`Profile`,icon:`person`,menuActionItems:r,onMenuActionSelect:i}),(0,g.jsx)(a.Tab,{value:`security`,label:`Security`,icon:`lock`,badge:3,menuActionItems:r,onMenuActionSelect:i}),(0,g.jsx)(a.Tab,{value:`notifications`,label:`Notifications`,icon:`notifications`,badge:15,menuActionItems:r,onMenuActionSelect:i}),(0,g.jsx)(a.Tab,{value:`billing`,label:`Billing`,icon:`credit_card`,menuActionItems:r,onMenuActionSelect:i}),(0,g.jsx)(a.Tab,{value:`team`,label:`Team`,icon:`group`,menuActionItems:r,onMenuActionSelect:i})]}),(0,g.jsx)(a.Content,{value:`profile`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Profile Settings`}),(0,g.jsx)(`p`,{children:`Manage your profile information and preferences. Click the dropdown icon on tabs to see menu actions.`})]})}),(0,g.jsx)(a.Content,{value:`security`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Security`}),(0,g.jsx)(`p`,{children:`Configure security settings and two-factor authentication (3 recommendations).`})]})}),(0,g.jsx)(a.Content,{value:`notifications`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Notifications`}),(0,g.jsx)(`p`,{children:`Manage notification preferences and channels (15 unread).`})]})}),(0,g.jsx)(a.Content,{value:`billing`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Billing`}),(0,g.jsx)(`p`,{children:`View invoices and manage payment methods.`})]})}),(0,g.jsx)(a.Content,{value:`team`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Team Management`}),(0,g.jsx)(`p`,{children:`Invite team members and manage permissions.`})]})})]})})},play:async({canvasElement:e})=>{let t=x(e);await _(t.getByRole(`tab`,{name:/Profile/i})).toHaveAttribute(`aria-selected`,`true`),await y.click(t.getByRole(`tab`,{name:/Security/i})),await _(t.getByRole(`tab`,{name:/Security/i})).toHaveAttribute(`aria-selected`,`true`);let n=t.getByRole(`tab`,{name:/Security/i}).querySelector(`[role="button"][aria-label="Open menu"]`);n&&(await y.click(n),await _(await x(document.body).findByRole(`menuitem`,{name:/Edit/i})).toBeInTheDocument())}},A={render:function(e){let[t,n]=(0,h.useState)(`active1`);return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`active1`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`active1`,label:`Active`,icon:`check_circle`}),(0,g.jsx)(a.Tab,{value:`disabled1`,label:`Disabled`,icon:`block`,disabled:!0}),(0,g.jsx)(a.Tab,{value:`active2`,label:`Active`,icon:`check_circle`,badge:5}),(0,g.jsx)(a.Tab,{value:`disabled2`,label:`Disabled`,icon:`block`,disabled:!0})]}),(0,g.jsx)(a.Content,{value:`active1`,children:(0,g.jsx)(`div`,{className:p.content,children:`Active tab 1 content`})}),(0,g.jsx)(a.Content,{value:`disabled1`,children:(0,g.jsx)(`div`,{className:p.content,children:`This content should not be accessible`})}),(0,g.jsx)(a.Content,{value:`active2`,children:(0,g.jsx)(`div`,{className:p.content,children:`Active tab 2 content`})}),(0,g.jsx)(a.Content,{value:`disabled2`,children:(0,g.jsx)(`div`,{className:p.content,children:`This content should not be accessible`})})]})})},play:async({canvasElement:e})=>{let t=x(e).getAllByRole(`tab`,{queryFallbacks:!0}),n=t.filter(e=>e.hasAttribute(`disabled`)),r=t[0];await _(r).toHaveAttribute(`aria-selected`,`true`),n[0]&&await y.click(n[0]),await _(r).toHaveAttribute(`aria-selected`,`true`)}},j={render:function(e){let[t,n]=(0,h.useState)(`home`);return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`home`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`home`,label:`Home`}),(0,g.jsx)(a.Tab,{value:`products`,label:`Products`,badge:23}),(0,g.jsx)(a.Tab,{value:`services`,label:`Services`}),(0,g.jsx)(a.Tab,{value:`contact`,label:`Contact`})]}),(0,g.jsx)(a.Content,{value:`home`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Home`}),(0,g.jsx)(`p`,{children:`Welcome to the home page.`})]})}),(0,g.jsx)(a.Content,{value:`products`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Products`}),(0,g.jsx)(`p`,{children:`Browse our product catalog (23 items).`})]})}),(0,g.jsx)(a.Content,{value:`services`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Services`}),(0,g.jsx)(`p`,{children:`Learn about our services.`})]})}),(0,g.jsx)(a.Content,{value:`contact`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Contact Us`}),(0,g.jsx)(`p`,{children:`Get in touch with our team.`})]})})]})})},play:async({canvasElement:e})=>{let t=x(e);await _(t.getByRole(`tab`,{name:/Home/i})).toHaveAttribute(`aria-selected`,`true`),await y.click(t.getByRole(`tab`,{name:/Products/i})),await _(t.getByRole(`tab`,{name:/Products/i})).toHaveAttribute(`aria-selected`,`true`)}},M={render:function(e){let[t,n]=(0,h.useState)(`dashboard`);return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`dashboard`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`dashboard`,label:`Dashboard`,icon:`dashboard`,tooltip:`View your dashboard overview`}),(0,g.jsx)(a.Tab,{value:`analytics`,label:`Analytics`,icon:`analytics`,badge:12,tooltip:`Analytics and insights`}),(0,g.jsx)(a.Tab,{value:`reports`,label:`Reports`,icon:`description`,badge:5,tooltip:`Generate and view reports`}),(0,g.jsx)(a.Tab,{value:`settings`,label:`Settings`,icon:`settings`,tooltip:`Configure application settings`})]}),(0,g.jsx)(a.Content,{value:`dashboard`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Dashboard`}),(0,g.jsx)(`p`,{children:`View your dashboard overview (hover tabs to see tooltips)`})]})}),(0,g.jsx)(a.Content,{value:`analytics`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Analytics`}),(0,g.jsx)(`p`,{children:`12 new insights available`})]})}),(0,g.jsx)(a.Content,{value:`reports`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Reports`}),(0,g.jsx)(`p`,{children:`5 reports pending review`})]})}),(0,g.jsx)(a.Content,{value:`settings`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Settings`}),(0,g.jsx)(`p`,{children:`Configure your application`})]})})]})})},play:async({canvasElement:e})=>{let t=x(e);await y.hover(t.getByRole(`tab`,{name:/Analytics/i})),await _(await x(document.body).findByRole(`tooltip`)).toHaveTextContent(/Analytics and insights/i)}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`Default`,`HorizontalSmall`,`WithMenuActions`,`Vertical`,`VerticalSmall`,`VerticalWithMenuActions`,`WithDisabled`,`TextOnly`,`WithTooltips`]}))();export{C as Default,w as HorizontalSmall,j as TextOnly,D as Vertical,O as VerticalSmall,k as VerticalWithMenuActions,A as WithDisabled,E as WithMenuActions,M as WithTooltips,N as __namedExportsOrder,S as default};