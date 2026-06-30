import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BZRqByMK.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./ds-tabs-CrdrDvVn.js";var o,s,c,l,u,d,f,p,m=e((()=>{o=`_container_n6xav_1`,s=`_verticalContainer_n6xav_6`,c=`_content_n6xav_12`,l=`_customTab_n6xav_25`,u=`_customIcon_n6xav_31`,d=`_customBadge_n6xav_35`,f=`_customCount_n6xav_45`,p={container:o,verticalContainer:s,content:c,customTab:l,customIcon:u,customBadge:d,customCount:f}})),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{h=t(n(),1),i(),m(),g=r(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/Tabs`,component:a.Root,parameters:{layout:`centered`,docs:{description:{component:"Compound tabs built on Ark UI. Compose `DsTabs.Root` with a `DsTabs.List` of\n`DsTabs.Tab`s and one `DsTabs.Content` panel per tab `value`. Selection is\ncontrolled by the `value` / `onValueChange` props on `DsTabs.Root`; tab\nappearance (icon, label, badge, menu) is set on each `DsTabs.Tab`."}}},argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`],description:`Tab orientation`},size:{control:`radio`,options:[`medium`,`small`],description:`Tab size`},value:{table:{disable:!0}},defaultValue:{table:{disable:!0}},onValueChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},children:{table:{disable:!0}}}},y={args:{orientation:`horizontal`,size:`medium`},render:function(e){let[t,n]=(0,h.useState)(`overview`);return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`overview`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`overview`,label:`Overview`,icon:`dashboard`}),(0,g.jsx)(a.Tab,{value:`analytics`,label:`Analytics`,icon:`analytics`,badge:12}),(0,g.jsx)(a.Tab,{value:`reports`,label:`Reports`,icon:`description`,badge:5}),(0,g.jsx)(a.Tab,{value:`settings`,label:`Settings`,icon:`settings`})]}),(0,g.jsx)(a.Content,{value:`overview`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Overview`}),(0,g.jsx)(`p`,{children:`View your dashboard overview and key metrics.`})]})}),(0,g.jsx)(a.Content,{value:`analytics`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Analytics`}),(0,g.jsx)(`p`,{children:`Detailed analytics and performance data (12 new insights).`})]})}),(0,g.jsx)(a.Content,{value:`reports`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Reports`}),(0,g.jsx)(`p`,{children:`Access and manage your reports (5 pending).`})]})}),(0,g.jsx)(a.Content,{value:`settings`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Settings`}),(0,g.jsx)(`p`,{children:`Configure your application settings.`})]})})]})})}},b={args:{size:`small`,orientation:`horizontal`},render:function(e){let[t,n]=(0,h.useState)(`dashboard`);return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`dashboard`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`dashboard`,label:`Dashboard`,icon:`dashboard`}),(0,g.jsx)(a.Tab,{value:`analytics`,label:`Analytics`,icon:`bar_chart`,badge:12}),(0,g.jsx)(a.Tab,{value:`reports`,label:`Reports`,icon:`description`,badge:5}),(0,g.jsx)(a.Tab,{value:`settings`,label:`Settings`,icon:`settings`})]}),(0,g.jsx)(a.Content,{value:`dashboard`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Dashboard`}),(0,g.jsx)(`p`,{children:`Welcome to your dashboard overview.`})]})}),(0,g.jsx)(a.Content,{value:`analytics`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Analytics`}),(0,g.jsx)(`p`,{children:`View analytics and performance data. 12 new insights available.`})]})}),(0,g.jsx)(a.Content,{value:`reports`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Reports`}),(0,g.jsx)(`p`,{children:`View and generate reports. 5 new reports available.`})]})}),(0,g.jsx)(a.Content,{value:`settings`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Settings`}),(0,g.jsx)(`p`,{children:`Configure your application settings.`})]})})]})})}},x=_(),S={args:{orientation:`horizontal`,size:`medium`},render:function(e){let[t,n]=(0,h.useState)(`tab1`),r=[{value:`edit`,label:`Edit`},{value:`duplicate`,label:`Duplicate`},{value:`share`,label:`Share`},{value:`delete`,label:`Delete`}];return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`tab1`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`tab1`,label:`Projects`,icon:`folder`,badge:5,menuActionItems:r,onMenuActionSelect:x}),(0,g.jsx)(a.Tab,{value:`tab2`,label:`Documents`,icon:`description`,badge:12,menuActionItems:r,onMenuActionSelect:x}),(0,g.jsx)(a.Tab,{value:`tab3`,label:`Settings`,icon:`settings`,menuActionItems:r,onMenuActionSelect:x})]}),(0,g.jsx)(a.Content,{value:`tab1`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Projects`}),(0,g.jsx)(`p`,{children:`Click the dropdown icon on tabs to see menu actions`})]})}),(0,g.jsx)(a.Content,{value:`tab2`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Documents`}),(0,g.jsx)(`p`,{children:`12 documents available`})]})}),(0,g.jsx)(a.Content,{value:`tab3`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Settings`}),(0,g.jsx)(`p`,{children:`Configure your preferences`})]})})]})})}},C={args:{orientation:`vertical`,size:`medium`},render:function(e){let[t,n]=(0,h.useState)(`profile`);return(0,g.jsx)(`div`,{className:p.verticalContainer,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`profile`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`profile`,label:`Profile`,icon:`person`}),(0,g.jsx)(a.Tab,{value:`security`,label:`Security`,icon:`lock`,badge:3}),(0,g.jsx)(a.Tab,{value:`notifications`,label:`Notifications`,icon:`notifications`,badge:15}),(0,g.jsx)(a.Tab,{value:`billing`,label:`Billing`,icon:`credit_card`}),(0,g.jsx)(a.Tab,{value:`team`,label:`Team`,icon:`group`})]}),(0,g.jsx)(a.Content,{value:`profile`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Profile Settings`}),(0,g.jsx)(`p`,{children:`Manage your profile information and preferences.`})]})}),(0,g.jsx)(a.Content,{value:`security`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Security`}),(0,g.jsx)(`p`,{children:`Configure security settings and two-factor authentication (3 recommendations).`})]})}),(0,g.jsx)(a.Content,{value:`notifications`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Notifications`}),(0,g.jsx)(`p`,{children:`Manage notification preferences and channels (15 unread).`})]})}),(0,g.jsx)(a.Content,{value:`billing`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Billing`}),(0,g.jsx)(`p`,{children:`View invoices and manage payment methods.`})]})}),(0,g.jsx)(a.Content,{value:`team`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Team Management`}),(0,g.jsx)(`p`,{children:`Invite team members and manage permissions.`})]})})]})})}},w={args:{orientation:`vertical`,size:`small`},render:function(e){let[t,n]=(0,h.useState)(`general`);return(0,g.jsx)(`div`,{className:p.verticalContainer,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`general`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`general`,label:`General`,icon:`settings`}),(0,g.jsx)(a.Tab,{value:`account`,label:`Account`,icon:`person`}),(0,g.jsx)(a.Tab,{value:`privacy`,label:`Privacy`,icon:`lock`,badge:2}),(0,g.jsx)(a.Tab,{value:`appearance`,label:`Appearance`,icon:`palette`}),(0,g.jsx)(a.Tab,{value:`advanced`,label:`Advanced`,icon:`tune`})]}),(0,g.jsx)(a.Content,{value:`general`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`General Settings`}),(0,g.jsx)(`p`,{children:`Configure general application settings and preferences.`})]})}),(0,g.jsx)(a.Content,{value:`account`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Account`}),(0,g.jsx)(`p`,{children:`Manage your account details and information.`})]})}),(0,g.jsx)(a.Content,{value:`privacy`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Privacy`}),(0,g.jsx)(`p`,{children:`Control your privacy settings and data sharing (2 recommendations).`})]})}),(0,g.jsx)(a.Content,{value:`appearance`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Appearance`}),(0,g.jsx)(`p`,{children:`Customize the look and feel of the application.`})]})}),(0,g.jsx)(a.Content,{value:`advanced`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Advanced`}),(0,g.jsx)(`p`,{children:`Advanced configuration options for power users.`})]})})]})})}},T={args:{orientation:`vertical`,size:`medium`},render:function(e){let[t,n]=(0,h.useState)(`profile`),r=[{value:`edit`,label:`Edit`},{value:`duplicate`,label:`Duplicate`},{value:`archive`,label:`Archive`},{value:`delete`,label:`Delete`}],i=e=>{console.log(`Menu action selected:`,e)};return(0,g.jsx)(`div`,{className:p.verticalContainer,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`profile`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`profile`,label:`Profile`,icon:`person`,menuActionItems:r,onMenuActionSelect:i}),(0,g.jsx)(a.Tab,{value:`security`,label:`Security`,icon:`lock`,badge:3,menuActionItems:r,onMenuActionSelect:i}),(0,g.jsx)(a.Tab,{value:`notifications`,label:`Notifications`,icon:`notifications`,badge:15,menuActionItems:r,onMenuActionSelect:i}),(0,g.jsx)(a.Tab,{value:`billing`,label:`Billing`,icon:`credit_card`,menuActionItems:r,onMenuActionSelect:i}),(0,g.jsx)(a.Tab,{value:`team`,label:`Team`,icon:`group`,menuActionItems:r,onMenuActionSelect:i})]}),(0,g.jsx)(a.Content,{value:`profile`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Profile Settings`}),(0,g.jsx)(`p`,{children:`Manage your profile information and preferences. Click the dropdown icon on tabs to see menu actions.`})]})}),(0,g.jsx)(a.Content,{value:`security`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Security`}),(0,g.jsx)(`p`,{children:`Configure security settings and two-factor authentication (3 recommendations).`})]})}),(0,g.jsx)(a.Content,{value:`notifications`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Notifications`}),(0,g.jsx)(`p`,{children:`Manage notification preferences and channels (15 unread).`})]})}),(0,g.jsx)(a.Content,{value:`billing`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Billing`}),(0,g.jsx)(`p`,{children:`View invoices and manage payment methods.`})]})}),(0,g.jsx)(a.Content,{value:`team`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Team Management`}),(0,g.jsx)(`p`,{children:`Invite team members and manage permissions.`})]})})]})})}},E={render:function(e){let[t,n]=(0,h.useState)(`active1`);return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`active1`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`active1`,label:`Active`,icon:`check_circle`}),(0,g.jsx)(a.Tab,{value:`disabled1`,label:`Disabled`,icon:`block`,disabled:!0}),(0,g.jsx)(a.Tab,{value:`active2`,label:`Active`,icon:`check_circle`,badge:5}),(0,g.jsx)(a.Tab,{value:`disabled2`,label:`Disabled`,icon:`block`,disabled:!0})]}),(0,g.jsx)(a.Content,{value:`active1`,children:(0,g.jsx)(`div`,{className:p.content,children:`Active tab 1 content`})}),(0,g.jsx)(a.Content,{value:`disabled1`,children:(0,g.jsx)(`div`,{className:p.content,children:`This content should not be accessible`})}),(0,g.jsx)(a.Content,{value:`active2`,children:(0,g.jsx)(`div`,{className:p.content,children:`Active tab 2 content`})}),(0,g.jsx)(a.Content,{value:`disabled2`,children:(0,g.jsx)(`div`,{className:p.content,children:`This content should not be accessible`})})]})})}},D={render:function(e){let[t,n]=(0,h.useState)(`home`);return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`home`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`home`,label:`Home`}),(0,g.jsx)(a.Tab,{value:`products`,label:`Products`,badge:23}),(0,g.jsx)(a.Tab,{value:`services`,label:`Services`}),(0,g.jsx)(a.Tab,{value:`contact`,label:`Contact`})]}),(0,g.jsx)(a.Content,{value:`home`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Home`}),(0,g.jsx)(`p`,{children:`Welcome to the home page.`})]})}),(0,g.jsx)(a.Content,{value:`products`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Products`}),(0,g.jsx)(`p`,{children:`Browse our product catalog (23 items).`})]})}),(0,g.jsx)(a.Content,{value:`services`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Services`}),(0,g.jsx)(`p`,{children:`Learn about our services.`})]})}),(0,g.jsx)(a.Content,{value:`contact`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Contact Us`}),(0,g.jsx)(`p`,{children:`Get in touch with our team.`})]})})]})})}},O={render:function(e){let[t,n]=(0,h.useState)(`dashboard`);return(0,g.jsx)(`div`,{className:p.container,children:(0,g.jsxs)(a.Root,{...e,value:t,onValueChange:e=>n(e??`dashboard`),children:[(0,g.jsxs)(a.List,{children:[(0,g.jsx)(a.Tab,{value:`dashboard`,label:`Dashboard`,icon:`dashboard`,tooltip:`View your dashboard overview`}),(0,g.jsx)(a.Tab,{value:`analytics`,label:`Analytics`,icon:`analytics`,badge:12,tooltip:`Analytics and insights`}),(0,g.jsx)(a.Tab,{value:`reports`,label:`Reports`,icon:`description`,badge:5,tooltip:`Generate and view reports`}),(0,g.jsx)(a.Tab,{value:`settings`,label:`Settings`,icon:`settings`,tooltip:`Configure application settings`})]}),(0,g.jsx)(a.Content,{value:`dashboard`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Dashboard`}),(0,g.jsx)(`p`,{children:`View your dashboard overview (hover tabs to see tooltips)`})]})}),(0,g.jsx)(a.Content,{value:`analytics`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Analytics`}),(0,g.jsx)(`p`,{children:`12 new insights available`})]})}),(0,g.jsx)(a.Content,{value:`reports`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Reports`}),(0,g.jsx)(`p`,{children:`5 reports pending review`})]})}),(0,g.jsx)(a.Content,{value:`settings`,children:(0,g.jsxs)(`div`,{className:p.content,children:[(0,g.jsx)(`h3`,{children:`Settings`}),(0,g.jsx)(`p`,{children:`Configure your application`})]})})]})})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  }
}`,...y.parameters?.docs?.source},description:{story:`Baseline horizontal tabs with icon + badge — the default layout for most pages.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
  }
}`,...b.parameters?.docs?.source},description:{story:'`size="small"` horizontal tabs for dense toolbars and compact headers.',...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
  }
}`,...S.parameters?.docs?.source},description:{story:"Per-tab dropdown via `menuActionItems` + `onMenuActionSelect`. Use when a tab\nneeds contextual actions (edit, duplicate, delete) without leaving the tab bar.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
  }
}`,...C.parameters?.docs?.source},description:{story:'`orientation="vertical"` — side navigation for settings-style layouts.',...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
  }
}`,...w.parameters?.docs?.source},description:{story:'Compact vertical tabs (`size="small"`) for narrow side panels.',...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
  }
}`,...T.parameters?.docs?.source},description:{story:"Vertical tabs that also carry per-tab `menuActionItems` dropdowns.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
  }
}`,...E.parameters?.docs?.source},description:{story:"Mixes enabled and `disabled` tabs — disabled tabs are not selectable.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
  }
}`,...D.parameters?.docs?.source},description:{story:"Labels only (no `icon`), optional `badge` — minimal text-driven tab bar.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
  }
}`,...O.parameters?.docs?.source},description:{story:"Adds a `tooltip` per tab — use for icon-light tabs that need extra context on hover.",...O.parameters?.docs?.description}}},k=[`Default`,`HorizontalSmall`,`WithMenuActions`,`Vertical`,`VerticalSmall`,`VerticalWithMenuActions`,`WithDisabled`,`TextOnly`,`WithTooltips`]}))();export{y as Default,b as HorizontalSmall,D as TextOnly,C as Vertical,w as VerticalSmall,T as VerticalWithMenuActions,E as WithDisabled,S as WithMenuActions,O as WithTooltips,k as __namedExportsOrder,v as default};