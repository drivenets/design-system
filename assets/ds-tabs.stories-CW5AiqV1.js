import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-typography-BLoO5j9q.js";import{n as o,t as s}from"./ds-tabs-BdqWYtcp.js";var c,l,u,d,f,p,m,h,g=t((()=>{c=`_container_jc790_1`,l=`_verticalContainer_jc790_6`,u=`_content_jc790_12`,d=`_customTab_jc790_22`,f=`_customIcon_jc790_28`,p=`_customBadge_jc790_32`,m=`_customCount_jc790_42`,h={container:c,verticalContainer:l,content:u,customTab:d,customIcon:f,customBadge:p,customCount:m}})),_,v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{_=e(n(),1),a(),o(),g(),v=r(),y={title:`Components/Tabs`,component:s.Root,parameters:{layout:`centered`,docs:{description:{component:"Compound tabs built on Ark UI. Compose `DsTabs.Root` with a `DsTabs.List` of\n`DsTabs.Tab`s and one `DsTabs.Content` panel per tab `value`. Selection is\ncontrolled by the `value` / `onValueChange` props on `DsTabs.Root`; tab\nappearance (icon, label, badge, menu) is set on each `DsTabs.Tab`."}}},argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`],description:`Tab orientation`},size:{control:`radio`,options:[`medium`,`small`],description:`Tab size`},value:{table:{disable:!0}},defaultValue:{table:{disable:!0}},onValueChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},children:{table:{disable:!0}}}},b={parameters:{docs:{source:{type:`code`}}},args:{orientation:`horizontal`,size:`medium`},render:function(e){let[t,n]=(0,_.useState)(`overview`);return(0,v.jsx)(`div`,{className:h.container,children:(0,v.jsxs)(s.Root,{...e,value:t,onValueChange:e=>n(e??`overview`),children:[(0,v.jsxs)(s.List,{children:[(0,v.jsx)(s.Tab,{value:`overview`,label:`Overview`,icon:`dashboard`}),(0,v.jsx)(s.Tab,{value:`analytics`,label:`Analytics`,icon:`analytics`,badge:12}),(0,v.jsx)(s.Tab,{value:`reports`,label:`Reports`,icon:`description`,badge:5}),(0,v.jsx)(s.Tab,{value:`settings`,label:`Settings`,icon:`settings`})]}),(0,v.jsx)(s.Content,{value:`overview`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Overview`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`View your dashboard overview and key metrics.`})]})}),(0,v.jsx)(s.Content,{value:`analytics`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Analytics`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Detailed analytics and performance data (12 new insights).`})]})}),(0,v.jsx)(s.Content,{value:`reports`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Reports`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Access and manage your reports (5 pending).`})]})}),(0,v.jsx)(s.Content,{value:`settings`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Settings`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Configure your application settings.`})]})})]})})}},x={parameters:{docs:{source:{type:`code`}}},args:{size:`small`,orientation:`horizontal`},render:function(e){let[t,n]=(0,_.useState)(`dashboard`);return(0,v.jsx)(`div`,{className:h.container,children:(0,v.jsxs)(s.Root,{...e,value:t,onValueChange:e=>n(e??`dashboard`),children:[(0,v.jsxs)(s.List,{children:[(0,v.jsx)(s.Tab,{value:`dashboard`,label:`Dashboard`,icon:`dashboard`}),(0,v.jsx)(s.Tab,{value:`analytics`,label:`Analytics`,icon:`bar_chart`,badge:12}),(0,v.jsx)(s.Tab,{value:`reports`,label:`Reports`,icon:`description`,badge:5}),(0,v.jsx)(s.Tab,{value:`settings`,label:`Settings`,icon:`settings`})]}),(0,v.jsx)(s.Content,{value:`dashboard`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Dashboard`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Welcome to your dashboard overview.`})]})}),(0,v.jsx)(s.Content,{value:`analytics`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Analytics`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`View analytics and performance data. 12 new insights available.`})]})}),(0,v.jsx)(s.Content,{value:`reports`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Reports`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`View and generate reports. 5 new reports available.`})]})}),(0,v.jsx)(s.Content,{value:`settings`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Settings`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Configure your application settings.`})]})})]})})}},S={parameters:{docs:{source:{type:`code`}}},args:{orientation:`horizontal`,size:`medium`},render:function(e){let[t,n]=(0,_.useState)(`tab1`),r=[{value:`edit`,label:`Edit`},{value:`duplicate`,label:`Duplicate`},{value:`share`,label:`Share`},{value:`delete`,label:`Delete`}];return(0,v.jsx)(`div`,{className:h.container,children:(0,v.jsxs)(s.Root,{...e,value:t,onValueChange:e=>n(e??`tab1`),children:[(0,v.jsxs)(s.List,{children:[(0,v.jsx)(s.Tab,{value:`tab1`,label:`Projects`,icon:`folder`,badge:5,menuActionItems:r,onMenuActionSelect:()=>{}}),(0,v.jsx)(s.Tab,{value:`tab2`,label:`Documents`,icon:`description`,badge:12,menuActionItems:r,onMenuActionSelect:()=>{}}),(0,v.jsx)(s.Tab,{value:`tab3`,label:`Settings`,icon:`settings`,menuActionItems:r,onMenuActionSelect:()=>{}})]}),(0,v.jsx)(s.Content,{value:`tab1`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Projects`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Click the dropdown icon on tabs to see menu actions`})]})}),(0,v.jsx)(s.Content,{value:`tab2`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Documents`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`12 documents available`})]})}),(0,v.jsx)(s.Content,{value:`tab3`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Settings`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Configure your preferences`})]})})]})})}},C={parameters:{docs:{source:{type:`code`}}},args:{orientation:`vertical`,size:`medium`},render:function(e){let[t,n]=(0,_.useState)(`profile`);return(0,v.jsx)(`div`,{className:h.verticalContainer,children:(0,v.jsxs)(s.Root,{...e,value:t,onValueChange:e=>n(e??`profile`),children:[(0,v.jsxs)(s.List,{children:[(0,v.jsx)(s.Tab,{value:`profile`,label:`Profile`,icon:`person`}),(0,v.jsx)(s.Tab,{value:`security`,label:`Security`,icon:`lock`,badge:3}),(0,v.jsx)(s.Tab,{value:`notifications`,label:`Notifications`,icon:`notifications`,badge:15}),(0,v.jsx)(s.Tab,{value:`billing`,label:`Billing`,icon:`credit_card`}),(0,v.jsx)(s.Tab,{value:`team`,label:`Team`,icon:`group`})]}),(0,v.jsx)(s.Content,{value:`profile`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Profile Settings`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Manage your profile information and preferences.`})]})}),(0,v.jsx)(s.Content,{value:`security`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Security`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Configure security settings and two-factor authentication (3 recommendations).`})]})}),(0,v.jsx)(s.Content,{value:`notifications`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Notifications`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Manage notification preferences and channels (15 unread).`})]})}),(0,v.jsx)(s.Content,{value:`billing`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Billing`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`View invoices and manage payment methods.`})]})}),(0,v.jsx)(s.Content,{value:`team`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Team Management`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Invite team members and manage permissions.`})]})})]})})}},w={parameters:{docs:{source:{type:`code`}}},args:{orientation:`vertical`,size:`small`},render:function(e){let[t,n]=(0,_.useState)(`general`);return(0,v.jsx)(`div`,{className:h.verticalContainer,children:(0,v.jsxs)(s.Root,{...e,value:t,onValueChange:e=>n(e??`general`),children:[(0,v.jsxs)(s.List,{children:[(0,v.jsx)(s.Tab,{value:`general`,label:`General`,icon:`settings`}),(0,v.jsx)(s.Tab,{value:`account`,label:`Account`,icon:`person`}),(0,v.jsx)(s.Tab,{value:`privacy`,label:`Privacy`,icon:`lock`,badge:2}),(0,v.jsx)(s.Tab,{value:`appearance`,label:`Appearance`,icon:`palette`}),(0,v.jsx)(s.Tab,{value:`advanced`,label:`Advanced`,icon:`tune`})]}),(0,v.jsx)(s.Content,{value:`general`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`General Settings`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Configure general application settings and preferences.`})]})}),(0,v.jsx)(s.Content,{value:`account`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Account`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Manage your account details and information.`})]})}),(0,v.jsx)(s.Content,{value:`privacy`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Privacy`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Control your privacy settings and data sharing (2 recommendations).`})]})}),(0,v.jsx)(s.Content,{value:`appearance`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Appearance`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Customize the look and feel of the application.`})]})}),(0,v.jsx)(s.Content,{value:`advanced`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Advanced`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Advanced configuration options for power users.`})]})})]})})}},T={parameters:{docs:{source:{type:`code`}}},args:{orientation:`vertical`,size:`medium`},render:function(e){let[t,n]=(0,_.useState)(`profile`),r=[{value:`edit`,label:`Edit`},{value:`duplicate`,label:`Duplicate`},{value:`archive`,label:`Archive`},{value:`delete`,label:`Delete`}];return(0,v.jsx)(`div`,{className:h.verticalContainer,children:(0,v.jsxs)(s.Root,{...e,value:t,onValueChange:e=>n(e??`profile`),children:[(0,v.jsxs)(s.List,{children:[(0,v.jsx)(s.Tab,{value:`profile`,label:`Profile`,icon:`person`,menuActionItems:r,onMenuActionSelect:()=>{}}),(0,v.jsx)(s.Tab,{value:`security`,label:`Security`,icon:`lock`,badge:3,menuActionItems:r,onMenuActionSelect:()=>{}}),(0,v.jsx)(s.Tab,{value:`notifications`,label:`Notifications`,icon:`notifications`,badge:15,menuActionItems:r,onMenuActionSelect:()=>{}}),(0,v.jsx)(s.Tab,{value:`billing`,label:`Billing`,icon:`credit_card`,menuActionItems:r,onMenuActionSelect:()=>{}}),(0,v.jsx)(s.Tab,{value:`team`,label:`Team`,icon:`group`,menuActionItems:r,onMenuActionSelect:()=>{}})]}),(0,v.jsx)(s.Content,{value:`profile`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Profile Settings`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Manage your profile information and preferences. Click the dropdown icon on tabs to see menu actions.`})]})}),(0,v.jsx)(s.Content,{value:`security`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Security`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Configure security settings and two-factor authentication (3 recommendations).`})]})}),(0,v.jsx)(s.Content,{value:`notifications`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Notifications`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Manage notification preferences and channels (15 unread).`})]})}),(0,v.jsx)(s.Content,{value:`billing`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Billing`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`View invoices and manage payment methods.`})]})}),(0,v.jsx)(s.Content,{value:`team`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Team Management`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Invite team members and manage permissions.`})]})})]})})}},E={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,_.useState)(`active1`);return(0,v.jsx)(`div`,{className:h.container,children:(0,v.jsxs)(s.Root,{...e,value:t,onValueChange:e=>n(e??`active1`),children:[(0,v.jsxs)(s.List,{children:[(0,v.jsx)(s.Tab,{value:`active1`,label:`Active`,icon:`check_circle`}),(0,v.jsx)(s.Tab,{value:`disabled1`,label:`Disabled`,icon:`block`,disabled:!0}),(0,v.jsx)(s.Tab,{value:`active2`,label:`Active`,icon:`check_circle`,badge:5}),(0,v.jsx)(s.Tab,{value:`disabled2`,label:`Disabled`,icon:`block`,disabled:!0})]}),(0,v.jsx)(s.Content,{value:`active1`,children:(0,v.jsx)(`div`,{className:h.content,children:(0,v.jsx)(i,{variant:`body-md-reg`,children:`Active tab 1 content`})})}),(0,v.jsx)(s.Content,{value:`disabled1`,children:(0,v.jsx)(`div`,{className:h.content,children:(0,v.jsx)(i,{variant:`body-md-reg`,children:`This content should not be accessible`})})}),(0,v.jsx)(s.Content,{value:`active2`,children:(0,v.jsx)(`div`,{className:h.content,children:(0,v.jsx)(i,{variant:`body-md-reg`,children:`Active tab 2 content`})})}),(0,v.jsx)(s.Content,{value:`disabled2`,children:(0,v.jsx)(`div`,{className:h.content,children:(0,v.jsx)(i,{variant:`body-md-reg`,children:`This content should not be accessible`})})})]})})}},D={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,_.useState)(`home`);return(0,v.jsx)(`div`,{className:h.container,children:(0,v.jsxs)(s.Root,{...e,value:t,onValueChange:e=>n(e??`home`),children:[(0,v.jsxs)(s.List,{children:[(0,v.jsx)(s.Tab,{value:`home`,label:`Home`}),(0,v.jsx)(s.Tab,{value:`products`,label:`Products`,badge:23}),(0,v.jsx)(s.Tab,{value:`services`,label:`Services`}),(0,v.jsx)(s.Tab,{value:`contact`,label:`Contact`})]}),(0,v.jsx)(s.Content,{value:`home`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Home`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Welcome to the home page.`})]})}),(0,v.jsx)(s.Content,{value:`products`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Products`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Browse our product catalog (23 items).`})]})}),(0,v.jsx)(s.Content,{value:`services`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Services`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Learn about our services.`})]})}),(0,v.jsx)(s.Content,{value:`contact`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Contact Us`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Get in touch with our team.`})]})})]})})}},O={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,_.useState)(`dashboard`);return(0,v.jsx)(`div`,{className:h.container,children:(0,v.jsxs)(s.Root,{...e,value:t,onValueChange:e=>n(e??`dashboard`),children:[(0,v.jsxs)(s.List,{children:[(0,v.jsx)(s.Tab,{value:`dashboard`,label:`Dashboard`,icon:`dashboard`,tooltip:`View your dashboard overview`}),(0,v.jsx)(s.Tab,{value:`analytics`,label:`Analytics`,icon:`analytics`,badge:12,tooltip:`Analytics and insights`}),(0,v.jsx)(s.Tab,{value:`reports`,label:`Reports`,icon:`description`,badge:5,tooltip:`Generate and view reports`}),(0,v.jsx)(s.Tab,{value:`settings`,label:`Settings`,icon:`settings`,tooltip:`Configure application settings`})]}),(0,v.jsx)(s.Content,{value:`dashboard`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Dashboard`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`View your dashboard overview (hover tabs to see tooltips)`})]})}),(0,v.jsx)(s.Content,{value:`analytics`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Analytics`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`12 new insights available`})]})}),(0,v.jsx)(s.Content,{value:`reports`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Reports`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`5 reports pending review`})]})}),(0,v.jsx)(s.Content,{value:`settings`,children:(0,v.jsxs)(`div`,{className:h.content,children:[(0,v.jsx)(i,{variant:`heading3`,children:`Settings`}),(0,v.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Configure your application`})]})})]})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
                            <DsTypography variant="heading3">Overview</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                View your dashboard overview and key metrics.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="analytics">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Analytics</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Detailed analytics and performance data (12 new insights).
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="reports">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Reports</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Access and manage your reports (5 pending).
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="settings">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Settings</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Configure your application settings.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Baseline horizontal tabs with icon + badge — the default layout for most pages.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
                            <DsTypography variant="heading3">Dashboard</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Welcome to your dashboard overview.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="analytics">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Analytics</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                View analytics and performance data. 12 new insights available.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="reports">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Reports</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                View and generate reports. 5 new reports available.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="settings">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Settings</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Configure your application settings.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:'`size="small"` horizontal tabs for dense toolbars and compact headers.',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
                        <DsTabs.Tab value="tab1" label="Projects" icon="folder" badge={5} menuActionItems={menuActions} onMenuActionSelect={() => {}} />
                        <DsTabs.Tab value="tab2" label="Documents" icon="description" badge={12} menuActionItems={menuActions} onMenuActionSelect={() => {}} />
                        <DsTabs.Tab value="tab3" label="Settings" icon="settings" menuActionItems={menuActions} onMenuActionSelect={() => {}} />
                    </DsTabs.List>

                    <DsTabs.Content value="tab1">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Projects</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Click the dropdown icon on tabs to see menu actions
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="tab2">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Documents</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                12 documents available
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="tab3">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Settings</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Configure your preferences
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Per-tab dropdown via `menuActionItems` + `onMenuActionSelect`. Use when a tab\nneeds contextual actions (edit, duplicate, delete) without leaving the tab bar.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
                            <DsTypography variant="heading3">Profile Settings</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Manage your profile information and preferences.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="security">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Security</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Configure security settings and two-factor authentication (3 recommendations).
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="notifications">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Notifications</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Manage notification preferences and channels (15 unread).
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="billing">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Billing</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                View invoices and manage payment methods.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="team">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Team Management</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Invite team members and manage permissions.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:'`orientation="vertical"` — side navigation for settings-style layouts.',...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
                            <DsTypography variant="heading3">General Settings</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Configure general application settings and preferences.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="account">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Account</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Manage your account details and information.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="privacy">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Privacy</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Control your privacy settings and data sharing (2 recommendations).
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="appearance">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Appearance</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Customize the look and feel of the application.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="advanced">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Advanced</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Advanced configuration options for power users.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  }
}`,...w.parameters?.docs?.source},description:{story:'Compact vertical tabs (`size="small"`) for narrow side panels.',...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
    return <div className={styles.verticalContainer}>
                <DsTabs.Root {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'profile')}>
                    <DsTabs.List>
                        <DsTabs.Tab value="profile" label="Profile" icon="person" menuActionItems={menuActions} onMenuActionSelect={() => {}} />
                        <DsTabs.Tab value="security" label="Security" icon="lock" badge={3} menuActionItems={menuActions} onMenuActionSelect={() => {}} />
                        <DsTabs.Tab value="notifications" label="Notifications" icon="notifications" badge={15} menuActionItems={menuActions} onMenuActionSelect={() => {}} />
                        <DsTabs.Tab value="billing" label="Billing" icon="credit_card" menuActionItems={menuActions} onMenuActionSelect={() => {}} />
                        <DsTabs.Tab value="team" label="Team" icon="group" menuActionItems={menuActions} onMenuActionSelect={() => {}} />
                    </DsTabs.List>

                    <DsTabs.Content value="profile">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Profile Settings</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Manage your profile information and preferences. Click the dropdown icon on tabs to see menu
                                actions.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="security">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Security</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Configure security settings and two-factor authentication (3 recommendations).
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="notifications">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Notifications</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Manage notification preferences and channels (15 unread).
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="billing">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Billing</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                View invoices and manage payment methods.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="team">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Team Management</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Invite team members and manage permissions.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  }
}`,...T.parameters?.docs?.source},description:{story:"Vertical tabs that also carry per-tab `menuActionItems` dropdowns.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
                        <div className={styles.content}>
                            <DsTypography variant="body-md-reg">Active tab 1 content</DsTypography>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="disabled1">
                        <div className={styles.content}>
                            <DsTypography variant="body-md-reg">This content should not be accessible</DsTypography>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="active2">
                        <div className={styles.content}>
                            <DsTypography variant="body-md-reg">Active tab 2 content</DsTypography>
                        </div>
                    </DsTabs.Content>
                    <DsTabs.Content value="disabled2">
                        <div className={styles.content}>
                            <DsTypography variant="body-md-reg">This content should not be accessible</DsTypography>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  }
}`,...E.parameters?.docs?.source},description:{story:"Mixes enabled and `disabled` tabs — disabled tabs are not selectable.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
                            <DsTypography variant="heading3">Home</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Welcome to the home page.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="products">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Products</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Browse our product catalog (23 items).
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="services">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Services</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Learn about our services.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="contact">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Contact Us</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Get in touch with our team.
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  }
}`,...D.parameters?.docs?.source},description:{story:"Labels only (no `icon`), optional `badge` — minimal text-driven tab bar.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
                            <DsTypography variant="heading3">Dashboard</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                View your dashboard overview (hover tabs to see tooltips)
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="analytics">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Analytics</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                12 new insights available
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="reports">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Reports</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                5 reports pending review
                            </DsTypography>
                        </div>
                    </DsTabs.Content>

                    <DsTabs.Content value="settings">
                        <div className={styles.content}>
                            <DsTypography variant="heading3">Settings</DsTypography>
                            <DsTypography variant="body-md-reg" color="secondary">
                                Configure your application
                            </DsTypography>
                        </div>
                    </DsTabs.Content>
                </DsTabs.Root>
            </div>;
  }
}`,...O.parameters?.docs?.source},description:{story:"Adds a `tooltip` per tab — use for icon-light tabs that need extra context on hover.",...O.parameters?.docs?.description}}},k=[`Default`,`HorizontalSmall`,`WithMenuActions`,`Vertical`,`VerticalSmall`,`VerticalWithMenuActions`,`WithDisabled`,`TextOnly`,`WithTooltips`]}))();export{b as Default,x as HorizontalSmall,D as TextOnly,C as Vertical,w as VerticalSmall,T as VerticalWithMenuActions,E as WithDisabled,S as WithMenuActions,O as WithTooltips,k as __namedExportsOrder,y as default};