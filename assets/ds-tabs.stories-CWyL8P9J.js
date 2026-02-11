import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-C9N8IAqP.js";import{c as R}from"./index-D4xqoRYz.js";import{u as G,a as F,b as U,c as $,T as K}from"./tabs-root-DCTQkS-T.js";import{a as Q}from"./use-locale-context-QKq51ZmC.js";import{Q as Y}from"./index-DJ3Qh3Vf.js";import{D as L}from"./ds-icon-CPcERb9y.js";import{D as J}from"./ds-tooltip-BhlKlX6K.js";import{a as y}from"./ds-dropdown-menu-6nZ1i168.js";import"./preload-helper-PPVm8Dsz.js";import"./create-split-props-u5h9OPvL.js";import"./render-strategy-uG0iS5yE.js";import"./use-presence-Xn4PJ8X-.js";import"./index-BsaFPgnc.js";import"./index-DWLqIjAh.js";import"./index-CS9IDOLY.js";import"./index-BJb9jx-u.js";import"./index-Djre5DEd.js";import"./index-DBJW1xXE.js";import"./index-CiJbeP1d.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-mtPNQwrt.js";import"./ds-typography-DXlRsXy-.js";import"./index-DvLqzCF_.js";import"./Combination-DkPv7b8n.js";import"./ds-text-input-US5gtbzt.js";import"./portal-DFSmnGkL.js";import"./index-DDoizrR4.js";import"./index-B4KTJTAo.js";const V=u.forwardRef((i,a)=>{const s=G(),c=Y(s.getIndicatorProps(),i);return e.jsx(Q.div,{...c,ref:a})});V.displayName="TabIndicator";const X="_tabList_itrv1_1",Z={tabList:X},ee="_indicator_z90oa_1",te={indicator:ee},H=({className:i,style:a,children:s})=>e.jsxs(F,{className:R(Z.tabList,i),style:a,children:[s,e.jsx(V,{className:te.indicator})]});H.__docgenInfo={description:"",methods:[],displayName:"DsTabsList",props:{className:{required:!1,tsType:{name:"string"},description:"Custom className"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom styles"},children:{required:!0,tsType:{name:"ReactNode"},description:"Children components (DsTabsTab)"}}};const ae="_tabItem_2dbp3_1",ne="_badge_2dbp3_23",se="_icon_2dbp3_56",ie="_label_2dbp3_112",oe="_menuTrigger_2dbp3_137",ce="_menuContent_2dbp3_189",le="_menuItem_2dbp3_198",re="_menuItemLabel_2dbp3_229",p={tabItem:ae,badge:ne,icon:se,label:ie,menuTrigger:oe,menuContent:ce,menuItem:le,menuItemLabel:re},P=({value:i,disabled:a,icon:s,label:c,badge:o,menuActionItems:r,onMenuActionSelect:v,tooltip:g,className:B,style:_,children:M})=>{const O=u.useRef(null),I=u.useRef(null),[h,T]=u.useState(!1),q=r&&r.length>0,W=d=>{v?.(d),T(!1)},k=e.jsx(U,{ref:O,value:i,disabled:a,className:R(p.tabItem,B),style:_,children:M||e.jsxs(e.Fragment,{children:[s&&e.jsx("div",{className:p.icon,children:e.jsx(L,{icon:s,size:"tiny"})}),c&&e.jsx("span",{className:p.label,children:c}),o!==void 0&&e.jsx("div",{className:p.badge,children:o}),q&&e.jsx("div",{ref:I,className:p.menuTrigger,onClick:d=>{d.stopPropagation(),d.preventDefault(),T(!h)},onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.stopPropagation(),d.preventDefault(),T(!h))},role:"button",tabIndex:0,"aria-label":"Open menu","aria-expanded":h,children:e.jsx(L,{icon:h?"arrow_drop_up":"arrow_drop_down",size:"tiny"})})]})}),E=r&&r.length>0&&e.jsxs(y.Root,{open:h,onOpenChange:T,onSelect:W,positioning:{placement:"bottom-start",gutter:4,getAnchorRect:()=>I.current?.getBoundingClientRect()??null},children:[e.jsx(y.Trigger,{asChild:!0,children:e.jsx("div",{style:{display:"none"},"aria-hidden":"true"})}),e.jsx(y.Content,{className:p.menuContent,children:r.map(d=>e.jsx(y.Item,{value:d.value,disabled:d.disabled,className:p.menuItem,children:e.jsx("span",{className:p.menuItemLabel,children:d.label})},d.value))})]});return g?e.jsxs(e.Fragment,{children:[e.jsx(J,{content:g,children:k}),E]}):e.jsxs(e.Fragment,{children:[k,E]})};P.__docgenInfo={description:"",methods:[],displayName:"DsTabsTab",props:{value:{required:!0,tsType:{name:"string"},description:"Unique value for this tab"},menuActionItems:{required:!1,tsType:{name:"Array",elements:[{name:"DsTabsMenuActionItem"}],raw:"DsTabsMenuActionItem[]"},description:"Menu action items to display in dropdown"},onMenuActionSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when a menu action is selected"},tooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to show on hover"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom styles"}}};const de="_tabContent_9oub2_1",ue={tabContent:de},z=({value:i,className:a,style:s,children:c})=>e.jsx($,{value:i,className:R(ue.tabContent,a),style:s,children:c});z.__docgenInfo={description:"",methods:[],displayName:"DsTabsContent",props:{value:{required:!0,tsType:{name:"string"},description:"Value matching the tab this content belongs to"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom styles"},children:{required:!0,tsType:{name:"ReactNode"},description:"Content to display"}}};const be="_root_milei_1",ve={root:be},me=({value:i,defaultValue:a,onValueChange:s,orientation:c="horizontal",size:o="medium",className:r,style:v,children:g})=>{const B=_=>{s?.(_.value)};return e.jsx(K,{orientation:c,value:i,defaultValue:a,onValueChange:B,activationMode:"manual",lazyMount:!0,unmountOnExit:!0,className:R(ve.root,r),style:v,"data-size":o,children:g})},t={Root:me,List:H,Tab:P,Content:z},pe="_container_ci8i1_1",he="_verticalContainer_ci8i1_6",ge="_content_ci8i1_12",n={container:pe,verticalContainer:he,content:ge},{expect:l,userEvent:m,within:b}=__STORYBOOK_MODULE_TEST__,$e={title:"Design System/Tabs",component:t.Root,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"],description:"Tab orientation"},size:{control:"radio",options:["medium","small"],description:"Tab size"}}},x={args:{orientation:"horizontal",size:"medium"},render:function(a){const[s,c]=u.useState("overview");return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:s,onValueChange:o=>c(o??"overview"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"overview",label:"Overview",icon:"dashboard"}),e.jsx(t.Tab,{value:"analytics",label:"Analytics",icon:"analytics",badge:12}),e.jsx(t.Tab,{value:"reports",label:"Reports",icon:"description",badge:5}),e.jsx(t.Tab,{value:"settings",label:"Settings",icon:"settings"})]}),e.jsx(t.Content,{value:"overview",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Overview"}),e.jsx("p",{children:"View your dashboard overview and key metrics."})]})}),e.jsx(t.Content,{value:"analytics",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Analytics"}),e.jsx("p",{children:"Detailed analytics and performance data (12 new insights)."})]})}),e.jsx(t.Content,{value:"reports",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Reports"}),e.jsx("p",{children:"Access and manage your reports (5 pending)."})]})}),e.jsx(t.Content,{value:"settings",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Settings"}),e.jsx("p",{children:"Configure your application settings."})]})})]})})},play:async({canvasElement:i})=>{const a=b(i);await l(a.getByRole("tab",{name:/Overview/i})).toHaveAttribute("aria-selected","true"),await l(a.getByText(/View your dashboard overview/i)).toBeInTheDocument(),await m.click(a.getByRole("tab",{name:/Analytics/i})),await l(a.getByRole("tab",{name:/Analytics/i})).toHaveAttribute("aria-selected","true"),await l(a.getByText(/Detailed analytics and performance data/i)).toBeInTheDocument()}},j={args:{size:"small",orientation:"horizontal"},render:function(a){const[s,c]=u.useState("dashboard");return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:s,onValueChange:o=>c(o??"dashboard"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"dashboard",label:"Dashboard",icon:"dashboard"}),e.jsx(t.Tab,{value:"analytics",label:"Analytics",icon:"bar_chart",badge:12}),e.jsx(t.Tab,{value:"reports",label:"Reports",icon:"description",badge:5}),e.jsx(t.Tab,{value:"settings",label:"Settings",icon:"settings"})]}),e.jsx(t.Content,{value:"dashboard",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Dashboard"}),e.jsx("p",{children:"Welcome to your dashboard overview."})]})}),e.jsx(t.Content,{value:"analytics",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Analytics"}),e.jsx("p",{children:"View analytics and performance data. 12 new insights available."})]})}),e.jsx(t.Content,{value:"reports",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Reports"}),e.jsx("p",{children:"View and generate reports. 5 new reports available."})]})}),e.jsx(t.Content,{value:"settings",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Settings"}),e.jsx("p",{children:"Configure your application settings."})]})})]})})},play:async({canvasElement:i})=>{const a=b(i);await l(a.getByRole("tab",{name:/Dashboard/i})).toHaveAttribute("aria-selected","true"),await m.click(a.getByRole("tab",{name:/Reports/i})),await l(a.getByRole("tab",{name:/Reports/i})).toHaveAttribute("aria-selected","true")}},D={args:{orientation:"horizontal",size:"medium"},render:function(a){const[s,c]=u.useState("tab1"),o=[{value:"edit",label:"Edit"},{value:"duplicate",label:"Duplicate"},{value:"share",label:"Share"},{value:"delete",label:"Delete"}],r=v=>{console.log("Menu action selected:",v)};return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:s,onValueChange:v=>c(v??"tab1"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"tab1",label:"Projects",icon:"folder",badge:5,menuActionItems:o,onMenuActionSelect:r}),e.jsx(t.Tab,{value:"tab2",label:"Documents",icon:"description",badge:12,menuActionItems:o,onMenuActionSelect:r}),e.jsx(t.Tab,{value:"tab3",label:"Settings",icon:"settings",menuActionItems:o,onMenuActionSelect:r})]}),e.jsx(t.Content,{value:"tab1",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Projects"}),e.jsx("p",{children:"Click the dropdown icon on tabs to see menu actions"})]})}),e.jsx(t.Content,{value:"tab2",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Documents"}),e.jsx("p",{children:"12 documents available"})]})}),e.jsx(t.Content,{value:"tab3",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Settings"}),e.jsx("p",{children:"Configure your preferences"})]})})]})})},play:async({canvasElement:i})=>{const s=b(i).getAllByRole("tab");await l(s[0]).toHaveAttribute("aria-selected","true");const c=s[0];if(c){const o=c.querySelector('[role="button"][aria-label="Open menu"]');if(o){await m.click(o);const r=await b(document.body).findByRole("menuitem",{name:/Edit/i});await l(r).toBeInTheDocument()}}}},C={args:{orientation:"vertical",size:"medium"},render:function(a){const[s,c]=u.useState("profile");return e.jsx("div",{className:n.verticalContainer,children:e.jsxs(t.Root,{...a,value:s,onValueChange:o=>c(o??"profile"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"profile",label:"Profile",icon:"person"}),e.jsx(t.Tab,{value:"security",label:"Security",icon:"lock",badge:3}),e.jsx(t.Tab,{value:"notifications",label:"Notifications",icon:"notifications",badge:15}),e.jsx(t.Tab,{value:"billing",label:"Billing",icon:"credit_card"}),e.jsx(t.Tab,{value:"team",label:"Team",icon:"group"})]}),e.jsx(t.Content,{value:"profile",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Profile Settings"}),e.jsx("p",{children:"Manage your profile information and preferences."})]})}),e.jsx(t.Content,{value:"security",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Security"}),e.jsx("p",{children:"Configure security settings and two-factor authentication (3 recommendations)."})]})}),e.jsx(t.Content,{value:"notifications",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Notifications"}),e.jsx("p",{children:"Manage notification preferences and channels (15 unread)."})]})}),e.jsx(t.Content,{value:"billing",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Billing"}),e.jsx("p",{children:"View invoices and manage payment methods."})]})}),e.jsx(t.Content,{value:"team",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Team Management"}),e.jsx("p",{children:"Invite team members and manage permissions."})]})})]})})},play:async({canvasElement:i})=>{const a=b(i);await l(a.getByRole("tab",{name:/Profile/i})).toHaveAttribute("aria-selected","true"),await m.click(a.getByRole("tab",{name:/Notifications/i})),await l(a.getByRole("tab",{name:/Notifications/i})).toHaveAttribute("aria-selected","true"),await l(a.getByText(/Manage notification preferences/i)).toBeInTheDocument()}},f={args:{orientation:"vertical",size:"small"},render:function(a){const[s,c]=u.useState("general");return e.jsx("div",{className:n.verticalContainer,children:e.jsxs(t.Root,{...a,value:s,onValueChange:o=>c(o??"general"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"general",label:"General",icon:"settings"}),e.jsx(t.Tab,{value:"account",label:"Account",icon:"person"}),e.jsx(t.Tab,{value:"privacy",label:"Privacy",icon:"lock",badge:2}),e.jsx(t.Tab,{value:"appearance",label:"Appearance",icon:"palette"}),e.jsx(t.Tab,{value:"advanced",label:"Advanced",icon:"tune"})]}),e.jsx(t.Content,{value:"general",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"General Settings"}),e.jsx("p",{children:"Configure general application settings and preferences."})]})}),e.jsx(t.Content,{value:"account",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Account"}),e.jsx("p",{children:"Manage your account details and information."})]})}),e.jsx(t.Content,{value:"privacy",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Privacy"}),e.jsx("p",{children:"Control your privacy settings and data sharing (2 recommendations)."})]})}),e.jsx(t.Content,{value:"appearance",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Appearance"}),e.jsx("p",{children:"Customize the look and feel of the application."})]})}),e.jsx(t.Content,{value:"advanced",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Advanced"}),e.jsx("p",{children:"Advanced configuration options for power users."})]})})]})})},play:async({canvasElement:i})=>{const a=b(i);await l(a.getByRole("tab",{name:/General/i})).toHaveAttribute("aria-selected","true"),await m.click(a.getByRole("tab",{name:/Privacy/i})),await l(a.getByRole("tab",{name:/Privacy/i})).toHaveAttribute("aria-selected","true"),await l(a.getByText(/Control your privacy settings/i)).toBeInTheDocument()}},w={args:{orientation:"vertical",size:"medium"},render:function(a){const[s,c]=u.useState("profile"),o=[{value:"edit",label:"Edit"},{value:"duplicate",label:"Duplicate"},{value:"archive",label:"Archive"},{value:"delete",label:"Delete"}],r=v=>{console.log("Menu action selected:",v)};return e.jsx("div",{className:n.verticalContainer,children:e.jsxs(t.Root,{...a,value:s,onValueChange:v=>c(v??"profile"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"profile",label:"Profile",icon:"person",menuActionItems:o,onMenuActionSelect:r}),e.jsx(t.Tab,{value:"security",label:"Security",icon:"lock",badge:3,menuActionItems:o,onMenuActionSelect:r}),e.jsx(t.Tab,{value:"notifications",label:"Notifications",icon:"notifications",badge:15,menuActionItems:o,onMenuActionSelect:r}),e.jsx(t.Tab,{value:"billing",label:"Billing",icon:"credit_card",menuActionItems:o,onMenuActionSelect:r}),e.jsx(t.Tab,{value:"team",label:"Team",icon:"group",menuActionItems:o,onMenuActionSelect:r})]}),e.jsx(t.Content,{value:"profile",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Profile Settings"}),e.jsx("p",{children:"Manage your profile information and preferences. Click the dropdown icon on tabs to see menu actions."})]})}),e.jsx(t.Content,{value:"security",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Security"}),e.jsx("p",{children:"Configure security settings and two-factor authentication (3 recommendations)."})]})}),e.jsx(t.Content,{value:"notifications",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Notifications"}),e.jsx("p",{children:"Manage notification preferences and channels (15 unread)."})]})}),e.jsx(t.Content,{value:"billing",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Billing"}),e.jsx("p",{children:"View invoices and manage payment methods."})]})}),e.jsx(t.Content,{value:"team",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Team Management"}),e.jsx("p",{children:"Invite team members and manage permissions."})]})})]})})},play:async({canvasElement:i})=>{const a=b(i);await l(a.getByRole("tab",{name:/Profile/i})).toHaveAttribute("aria-selected","true"),await m.click(a.getByRole("tab",{name:/Security/i})),await l(a.getByRole("tab",{name:/Security/i})).toHaveAttribute("aria-selected","true");const c=a.getByRole("tab",{name:/Security/i}).querySelector('[role="button"][aria-label="Open menu"]');if(c){await m.click(c);const o=await b(document.body).findByRole("menuitem",{name:/Edit/i});await l(o).toBeInTheDocument()}}},A={render:function(a){const[s,c]=u.useState("active1");return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:s,onValueChange:o=>c(o??"active1"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"active1",label:"Active",icon:"check_circle"}),e.jsx(t.Tab,{value:"disabled1",label:"Disabled",icon:"block",disabled:!0}),e.jsx(t.Tab,{value:"active2",label:"Active",icon:"check_circle",badge:5}),e.jsx(t.Tab,{value:"disabled2",label:"Disabled",icon:"block",disabled:!0})]}),e.jsx(t.Content,{value:"active1",children:e.jsx("div",{className:n.content,children:"Active tab 1 content"})}),e.jsx(t.Content,{value:"disabled1",children:e.jsx("div",{className:n.content,children:"This content should not be accessible"})}),e.jsx(t.Content,{value:"active2",children:e.jsx("div",{className:n.content,children:"Active tab 2 content"})}),e.jsx(t.Content,{value:"disabled2",children:e.jsx("div",{className:n.content,children:"This content should not be accessible"})})]})})},play:async({canvasElement:i})=>{const s=b(i).getAllByRole("tab",{queryFallbacks:!0}),c=s.filter(r=>r.hasAttribute("disabled")),o=s[0];await l(o).toHaveAttribute("aria-selected","true"),c[0]&&await m.click(c[0]),await l(o).toHaveAttribute("aria-selected","true")}},S={render:function(a){const[s,c]=u.useState("home");return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:s,onValueChange:o=>c(o??"home"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"home",label:"Home"}),e.jsx(t.Tab,{value:"products",label:"Products",badge:23}),e.jsx(t.Tab,{value:"services",label:"Services"}),e.jsx(t.Tab,{value:"contact",label:"Contact"})]}),e.jsx(t.Content,{value:"home",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Home"}),e.jsx("p",{children:"Welcome to the home page."})]})}),e.jsx(t.Content,{value:"products",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Products"}),e.jsx("p",{children:"Browse our product catalog (23 items)."})]})}),e.jsx(t.Content,{value:"services",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Services"}),e.jsx("p",{children:"Learn about our services."})]})}),e.jsx(t.Content,{value:"contact",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Contact Us"}),e.jsx("p",{children:"Get in touch with our team."})]})})]})})},play:async({canvasElement:i})=>{const a=b(i);await l(a.getByRole("tab",{name:/Home/i})).toHaveAttribute("aria-selected","true"),await m.click(a.getByRole("tab",{name:/Products/i})),await l(a.getByRole("tab",{name:/Products/i})).toHaveAttribute("aria-selected","true")}},N={render:function(a){const[s,c]=u.useState("dashboard");return e.jsx("div",{className:n.container,children:e.jsxs(t.Root,{...a,value:s,onValueChange:o=>c(o??"dashboard"),children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"dashboard",label:"Dashboard",icon:"dashboard",tooltip:"View your dashboard overview"}),e.jsx(t.Tab,{value:"analytics",label:"Analytics",icon:"analytics",badge:12,tooltip:"Analytics and insights"}),e.jsx(t.Tab,{value:"reports",label:"Reports",icon:"description",badge:5,tooltip:"Generate and view reports"}),e.jsx(t.Tab,{value:"settings",label:"Settings",icon:"settings",tooltip:"Configure application settings"})]}),e.jsx(t.Content,{value:"dashboard",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Dashboard"}),e.jsx("p",{children:"View your dashboard overview (hover tabs to see tooltips)"})]})}),e.jsx(t.Content,{value:"analytics",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Analytics"}),e.jsx("p",{children:"12 new insights available"})]})}),e.jsx(t.Content,{value:"reports",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Reports"}),e.jsx("p",{children:"5 reports pending review"})]})}),e.jsx(t.Content,{value:"settings",children:e.jsxs("div",{className:n.content,children:[e.jsx("h3",{children:"Settings"}),e.jsx("p",{children:"Configure your application"})]})})]})})},play:async({canvasElement:i})=>{const a=b(i);await m.hover(a.getByRole("tab",{name:/Analytics/i}));const s=await b(document.body).findByRole("tooltip");await l(s).toHaveTextContent(/Analytics and insights/i)}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    const handleMenuAction = (action: string) => {
      console.log('Menu action selected:', action);
    };
    return <div className={styles.container}>
                <DsTabs.Root {...args} value={selected} onValueChange={(val: string | null) => setSelected(val ?? 'tab1')}>
                    <DsTabs.List>
                        <DsTabs.Tab value="tab1" label="Projects" icon="folder" badge={5} menuActionItems={menuActions} onMenuActionSelect={handleMenuAction} />
                        <DsTabs.Tab value="tab2" label="Documents" icon="description" badge={12} menuActionItems={menuActions} onMenuActionSelect={handleMenuAction} />
                        <DsTabs.Tab value="tab3" label="Settings" icon="settings" menuActionItems={menuActions} onMenuActionSelect={handleMenuAction} />
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
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    const firstTab: HTMLElement | undefined = tabs[0];
    if (firstTab) {
      const menuButton = firstTab.querySelector('[role="button"][aria-label="Open menu"]');
      if (menuButton) {
        await userEvent.click(menuButton);
        const editAction = await within(document.body).findByRole('menuitem', {
          name: /Edit/i
        });
        await expect(editAction).toBeInTheDocument();
      }
    }
  }
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const Ke=["Default","HorizontalSmall","WithMenuActions","Vertical","VerticalSmall","VerticalWithMenuActions","WithDisabled","TextOnly","WithTooltips"];export{x as Default,j as HorizontalSmall,S as TextOnly,C as Vertical,f as VerticalSmall,w as VerticalWithMenuActions,A as WithDisabled,D as WithMenuActions,N as WithTooltips,Ke as __namedExportsOrder,$e as default};
